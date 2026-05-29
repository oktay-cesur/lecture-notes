#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUTPUT_DIR_REL="../../_dolap/lecture_notes"
SLIDES_OUTPUT_DIR_REL="$OUTPUT_DIR_REL/slides"
CREATED_CONFIG_LINKS=()
CREATED_RUNTIME_LINKS=()
HIDDEN_PROFILE_CONFIGS=()
TEMP_RENDER_DIR=""
CLEAN_SOURCE_ON_EXIT=0
SLIDE_WATCHER_PID=""
SLIDE_POLL_INTERVAL="${SLIDE_POLL_INTERVAL:-2}"

cd "$ROOT_DIR"

usage() {
  cat <<'USAGE'
Usage:
  .scripts/local-quarto.sh clean
  .scripts/local-quarto.sh preview
  .scripts/local-quarto.sh render-all
  .scripts/local-quarto.sh render-file <file.md|file.qmd>
  .scripts/local-quarto.sh preview-file <file.md|file.qmd>
  .scripts/local-quarto.sh render-slide <file.md|file.qmd>
USAGE
}

clean_source_artifacts() {
  local path attempt
  for path in .quarto _site site_libs README_files; do
    for attempt in 1 2 3; do
      if [[ ! -e "$path" && ! -L "$path" ]]; then
        break
      fi
      rm -rf "$path" 2>/dev/null || true
      if [[ ! -e "$path" && ! -L "$path" ]]; then
        break
      fi
      sleep 0.1
    done
  done
  find . -type f -name '*.html' -delete 2>/dev/null || true
  find . -type d -name '*_files' -prune -exec rm -rf {} + 2>/dev/null || true
}

source_artifacts_exist() {
  [[ -e .quarto || -e _site || -e site_libs || -e README_files ]] && return 0
  find . -type f -name '*.html' -print -quit 2>/dev/null | grep -q .
}

settle_source_artifacts() {
  local attempt
  for attempt in 1 2 3 4 5 6 7 8 9 10; do
    clean_source_artifacts
    if ! source_artifacts_exist; then
      sleep 0.5
      clean_source_artifacts
      if ! source_artifacts_exist; then
        return 0
      fi
    fi
    sleep 0.5
  done
  sleep 8
  clean_source_artifacts
}

reset_output_dir() {
  local abs_output
  abs_output="$(cd "$(dirname "$OUTPUT_DIR_REL")" && pwd)/$(basename "$OUTPUT_DIR_REL")"
  case "$abs_output" in
    */_dolap/lecture_notes) ;;
    *)
      echo "ERROR: refusing to reset unexpected output dir: $abs_output" >&2
      exit 1
      ;;
  esac

  rm -rf "$OUTPUT_DIR_REL"
  mkdir -p "$OUTPUT_DIR_REL" "$SLIDES_OUTPUT_DIR_REL"
}

ensure_quarto_config_links() {
  local pair hidden visible
  for pair in \
    ".quarto.yml:_quarto.yml" \
    ".quarto-local.yml:_quarto-local.yml" \
    ".quarto-slides.yml:_quarto-slides.yml"; do
    hidden="${pair%%:*}"
    visible="${pair##*:}"
    if [[ -f "$hidden" && ! -e "$visible" ]]; then
      ln -s "$hidden" "$visible"
      CREATED_CONFIG_LINKS+=("$visible")
    fi
  done
}

cleanup_quarto_config_links() {
  local visible
  for visible in "${CREATED_CONFIG_LINKS[@]}"; do
    rm -f "$visible" 2>/dev/null || true
  done
}

hide_profile_configs() {
  local visible backup
  for visible in _quarto-local.yml _quarto-slides.yml; do
    if [[ -e "$visible" || -L "$visible" ]]; then
      backup=".$visible.render-all-hidden"
      rm -f "$backup"
      mv "$visible" "$backup"
      HIDDEN_PROFILE_CONFIGS+=("$visible:$backup")
    fi
  done
}

restore_profile_configs() {
  local pair visible backup
  for pair in "${HIDDEN_PROFILE_CONFIGS[@]}"; do
    visible="${pair%%:*}"
    backup="${pair##*:}"
    if [[ -e "$backup" || -L "$backup" ]]; then
      mv "$backup" "$visible"
    fi
  done
  HIDDEN_PROFILE_CONFIGS=()
}

cleanup_runtime_links() {
  local visible
  for visible in "${CREATED_RUNTIME_LINKS[@]}"; do
    rm -f "$visible" 2>/dev/null || true
  done
}

cleanup_temp_render_dir() {
  if [[ -n "$TEMP_RENDER_DIR" ]]; then
    case "$TEMP_RENDER_DIR" in
      /tmp/ders-render.*) rm -rf "$TEMP_RENDER_DIR" 2>/dev/null || true ;;
    esac
    TEMP_RENDER_DIR=""
  fi
}

stop_slide_watcher() {
  if [[ -n "$SLIDE_WATCHER_PID" ]] && kill -0 "$SLIDE_WATCHER_PID" 2>/dev/null; then
    kill "$SLIDE_WATCHER_PID" 2>/dev/null || true
    wait "$SLIDE_WATCHER_PID" 2>/dev/null || true
    SLIDE_WATCHER_PID=""
  fi
}

on_exit() {
  stop_slide_watcher
  restore_profile_configs
  cleanup_temp_render_dir
  if [[ "$CLEAN_SOURCE_ON_EXIT" == "1" ]]; then
    clean_source_artifacts
  fi
  cleanup_runtime_links
  cleanup_quarto_config_links
}

prepare_output_dirs() {
  mkdir -p "$OUTPUT_DIR_REL" "$SLIDES_OUTPUT_DIR_REL"
}

ensure_source_site_libs_link() {
  local output_site_libs="$OUTPUT_DIR_REL/site_libs"
  if [[ -d "$output_site_libs" && ! -e site_libs ]]; then
    ln -s "$output_site_libs" site_libs
    CREATED_RUNTIME_LINKS+=("site_libs")
  fi
}

ensure_preview_runtime_dirs() {
  mkdir -p .quarto/preview
}

resolve_file() {
  local input="$1"
  local abs
  if [[ "$input" = /* ]]; then
    abs="$input"
  else
    abs="$ROOT_DIR/$input"
  fi

  if [[ ! -f "$abs" ]]; then
    echo "ERROR: file not found: $input" >&2
    exit 1
  fi

  case "$abs" in
    "$ROOT_DIR"/*) ;;
    *)
      echo "ERROR: file must be inside project: $input" >&2
      exit 1
      ;;
  esac

  printf '%s\n' "${abs#"$ROOT_DIR/"}"
}

is_index_file() {
  local rel_file="$1"
  [[ "$(basename "$rel_file")" == "index.md" || "$(basename "$rel_file")" == "index.qmd" ]]
}

is_fallback_qmd_file() {
  local rel_file="$1"
  [[ "$rel_file" == *-qmd-fallback.qmd ]]
}

is_render_all_excluded_file() {
  local rel_file="$1"
  [[ "$rel_file" == "README.md" || "$rel_file" == */_backup/* || "$rel_file" == "topics/search/search-algorithms.md" || "$rel_file" == "topics/search/search-algorithms-qmd-fallback.qmd" ]]
}

is_presentation_file() {
  local rel_file="$1"
  awk '
    NR==1 {
      if ($0 !~ /^---[[:space:]]*$/) exit 1
      in_yaml=1
      next
    }
    in_yaml && $0 ~ /^---[[:space:]]*$/ {
      closed=1
      exit found ? 0 : 1
    }
    in_yaml && $0 ~ /^[[:space:]]*type:[[:space:]]*["\047]?presentation["\047]?[[:space:]]*$/ { found=1 }
    END {
      if (NR == 0) exit 1
      if (!closed) exit 1
    }
  ' "$rel_file"
}

render_html_file() {
  local rel_file="$1"
  quarto render "$rel_file" --profile local --to html
}

render_slide_file() {
  local rel_file="$1"
  rm -rf .quarto 2>/dev/null || true
  quarto render "$rel_file" --profile local,slides --to revealjs --output-dir "$SLIDES_OUTPUT_DIR_REL"
}

slide_watcher_loop() {
  local stamp_file="$ROOT_DIR/.quarto/.slide-watcher-stamp"
  touch "$stamp_file"

  while true; do
    sleep "$SLIDE_POLL_INTERVAL"

    local changed=0
    local failed=0
    while IFS= read -r rel_file; do
      if is_fallback_qmd_file "$rel_file"; then continue; fi
      if is_render_all_excluded_file "$rel_file"; then continue; fi
      if is_index_file "$rel_file"; then continue; fi
      if ! is_presentation_file "$rel_file"; then continue; fi

      if [[ "$rel_file" -nt "$stamp_file" ]]; then
        echo "SLIDE-WATCHER: change detected → $rel_file"
        if render_slide_file "$rel_file" 2>&1; then
          echo "SLIDE-WATCHER: slide rendered ✓ $rel_file"
          changed=1
        else
          echo "SLIDE-WATCHER: slide render FAILED ✗ $rel_file" >&2
          failed=1
        fi
      fi
    done < <(find . -type f \( -name '*.md' -o -name '*.qmd' \) | sed 's|^\./||')

    if [[ "$changed" == "1" && "$failed" == "0" ]]; then
      touch "$stamp_file"
    fi
  done
}

start_slide_watcher() {
  slide_watcher_loop &
  SLIDE_WATCHER_PID=$!
  echo "INFO: slide watcher started (pid=$SLIDE_WATCHER_PID, poll=${SLIDE_POLL_INTERVAL}s)"
}

remove_slide_output() {
  local rel_file="$1"
  local slide_rel="${rel_file%.*}.html"
  local slide_files_rel="${rel_file%.*}_files"
  rm -f "$SLIDES_OUTPUT_DIR_REL/$slide_rel"
  rm -rf "$SLIDES_OUTPUT_DIR_REL/$slide_files_rel"
}

render_all_slides() {
  local rel_file
  local rendered_count=0

  rm -rf "$SLIDES_OUTPUT_DIR_REL"
  mkdir -p "$SLIDES_OUTPUT_DIR_REL"

  while IFS= read -r rel_file; do
    if is_fallback_qmd_file "$rel_file"; then
      continue
    fi
    if is_render_all_excluded_file "$rel_file"; then
      continue
    fi
    if is_index_file "$rel_file"; then
      continue
    fi
    if is_presentation_file "$rel_file"; then
      render_slide_file "$rel_file"
      rendered_count=$((rendered_count + 1))
    fi
  done < <(find . -type f \( -name '*.md' -o -name '*.qmd' \) | sort | sed 's|^\./||')

  echo "INFO: rendered slide deck count: $rendered_count"
}

render_all_html_files() {
  local rel_file
  local rendered_count=0

  hide_profile_configs
  mkdir -p _site
  while IFS= read -r rel_file; do
    if is_fallback_qmd_file "$rel_file"; then
      continue
    fi
    if is_render_all_excluded_file "$rel_file"; then
      continue
    fi

    rm -rf .quarto site_libs 2>/dev/null || true
    quarto render "$rel_file" --to html --output-dir "$ROOT_DIR/_site"
    rendered_count=$((rendered_count + 1))
  done < <(find . -type f \( -name '*.md' -o -name '*.qmd' \) | sort | sed 's|^\./||')

  cp -a _site/. "$OUTPUT_DIR_REL/"
  restore_profile_configs
  echo "INFO: rendered html page count: $rendered_count"
}

render_all_outputs_in_temp_workspace() {
  local temp_dir
  local rel_file
  local rendered_slide_count=0

  temp_dir="$(mktemp -d /tmp/ders-render.XXXXXX)"
  TEMP_RENDER_DIR="$temp_dir"

  rsync -a \
    --exclude='.git' \
    --exclude='.quarto' \
    --exclude='_site' \
    --exclude='site_libs' \
    --exclude='*_files' \
    --exclude='*.html' \
    ./ "$temp_dir/"

  rm -f "$temp_dir/_quarto-local.yml"

  (
    cd "$temp_dir"
    quarto render --to html

    rm -rf _site/slides
    mkdir -p _site/slides
    while IFS= read -r rel_file; do
      if is_fallback_qmd_file "$rel_file"; then
        continue
      fi
      if is_render_all_excluded_file "$rel_file"; then
        continue
      fi
      if is_index_file "$rel_file"; then
        continue
      fi
      if is_presentation_file "$rel_file"; then
        quarto render "$rel_file" --profile slides --to revealjs --output-dir "$temp_dir/_site/slides"
        rendered_slide_count=$((rendered_slide_count + 1))
      fi
    done < <(find . -type f \( -name '*.md' -o -name '*.qmd' \) | sort | sed 's|^\./||')
    echo "INFO: rendered slide deck count: $rendered_slide_count"
  )

  reset_output_dir
  cp -a "$temp_dir/_site/." "$OUTPUT_DIR_REL/"
  settle_source_artifacts
  echo "INFO: rendered site copied from temp workspace"
}

render_file_outputs() {
  local rel_file="$1"
  render_html_file "$rel_file"

  if is_index_file "$rel_file"; then
    remove_slide_output "$rel_file"
    echo "INFO: slide skipped for index file: $rel_file"
    return 0
  fi

  if is_presentation_file "$rel_file"; then
    render_slide_file "$rel_file"
  else
    remove_slide_output "$rel_file"
    echo "INFO: slide skipped (type: presentation not found): $rel_file"
  fi
}

ensure_quarto_config_links
trap on_exit EXIT

command="${1:-}"

case "$command" in
  clean)
    clean_source_artifacts
    ;;
  preview)
    prepare_output_dirs
    ensure_preview_runtime_dirs
    CLEAN_SOURCE_ON_EXIT=1
    start_slide_watcher
    quarto preview --profile local --render none
    ;;
  render-all)
    CLEAN_SOURCE_ON_EXIT=1
    clean_source_artifacts
    render_all_outputs_in_temp_workspace
    ;;
  render-file)
    file_arg="${2:-}"
    if [[ -z "$file_arg" ]]; then
      usage
      exit 1
    fi
    prepare_output_dirs
    CLEAN_SOURCE_ON_EXIT=1
    rel_file="$(resolve_file "$file_arg")"
    render_file_outputs "$rel_file"
    ;;
  preview-file)
    file_arg="${2:-}"
    if [[ -z "$file_arg" ]]; then
      usage
      exit 1
    fi
    clean_source_artifacts
    prepare_output_dirs
    ensure_preview_runtime_dirs
    rel_file="$(resolve_file "$file_arg")"
    render_file_outputs "$rel_file"
    CLEAN_SOURCE_ON_EXIT=1
    start_slide_watcher
    quarto preview --profile local --render none
    ;;
  render-slide)
    file_arg="${2:-}"
    if [[ -z "$file_arg" ]]; then
      usage
      exit 1
    fi
    prepare_output_dirs
    CLEAN_SOURCE_ON_EXIT=1
    rel_file="$(resolve_file "$file_arg")"
    if is_index_file "$rel_file"; then
      echo "ERROR: slide not allowed for index.md files: $rel_file" >&2
      exit 1
    fi
    if ! is_presentation_file "$rel_file"; then
      echo "ERROR: slide requires YAML 'type: presentation': $rel_file" >&2
      exit 1
    fi
    render_slide_file "$rel_file"
    ;;
  *)
    usage
    exit 1
    ;;
esac
