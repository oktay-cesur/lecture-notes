#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUTPUT_DIR_REL="_site"
SLIDES_OUTPUT_DIR_REL="$OUTPUT_DIR_REL/slides"
CREATED_CONFIG_LINKS=()
CREATED_RUNTIME_LINKS=()
HIDDEN_PROFILE_CONFIGS=()
TEMP_RENDER_DIR=""
CLEAN_SOURCE_ON_EXIT=0
SLIDE_WATCHER_PID=""
SLIDE_POLL_INTERVAL="${SLIDE_POLL_INTERVAL:-2}"
CACHE_ROOT="${LECTURE_NOTES_CACHE_DIR:-${TMPDIR:-/tmp}/lecture-notes-quarto-${UID}}"

export QUARTO_DENO_DIR="$CACHE_ROOT/deno"
export DENO_DIR="$CACHE_ROOT/deno"
export XDG_CACHE_HOME="$CACHE_ROOT/xdg"

cd "$ROOT_DIR"
mkdir -p "$CACHE_ROOT" "$QUARTO_DENO_DIR" "$DENO_DIR" "$XDG_CACHE_HOME"

usage() {
  cat <<'USAGE'
Usage:
  .scripts/local-quarto.sh clean
  .scripts/local-quarto.sh preview
  .scripts/local-quarto.sh render-all
  .scripts/local-quarto.sh render-changed
  .scripts/local-quarto.sh render-file <file.md|file.qmd>
  .scripts/local-quarto.sh preview-file <file.md|file.qmd>
  .scripts/local-quarto.sh render-slide <file.md|file.qmd>
USAGE
}

clean_source_artifacts() {
  local path attempt
  for path in .quarto site_libs README_files; do
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
  find . -path './_site' -prune -o -type f -name '*.html' -delete 2>/dev/null || true
  find . -path './_site' -prune -o -type d -name '*_files' -prune -exec rm -rf {} + 2>/dev/null || true
}

source_artifacts_exist() {
  [[ -e .quarto || -e site_libs || -e README_files ]] && return 0
  find . -path './_site' -prune -o -type f -name '*.html' -print -quit 2>/dev/null | grep -q .
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
  abs_output="$ROOT_DIR/$OUTPUT_DIR_REL"
  if [[ "$abs_output" != "$ROOT_DIR/_site" ]]; then
    echo "ERROR: refusing to reset unexpected output dir: $abs_output" >&2
    exit 1
  fi

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
  [[ "$rel_file" == "README.md" || "$rel_file" == _arsiv/* || "$rel_file" == */_arsiv/* || "$rel_file" == */_backup/* || "$rel_file" == */_private/* || "$rel_file" == "courses/bim444/notes/search-algorithms.md" || "$rel_file" == "courses/bim444/notes/search-algorithms-qmd-fallback.qmd" ]]
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

  quarto render "$rel_file" --profile publish,local --to html
}

render_slide_file() {
  local rel_file="$1"
  local temp_dir rel_dir base_name html_name source_dir output_dir source_html source_files target_html target_files
  local resource_dir source_resource_dir target_resource_dir root_css

  temp_dir="$(mktemp -d /tmp/ders-slide-render.XXXXXX)"
  rsync -a \
    --exclude='.git' \
    --exclude='.quarto' \
    --exclude='_site' \
    --exclude='site_libs' \
    --exclude='*_files' \
    --exclude='*.html' \
    ./ "$temp_dir/"

  if ! (
    cd "$temp_dir"
    QUARTO_DENO_DIR="$temp_dir/.quarto-deno-cache" \
    DENO_DIR="$temp_dir/.quarto-deno-cache" \
    XDG_CACHE_HOME="$temp_dir/.quarto-xdg-cache" \
      quarto render "$rel_file" --profile slides,publish,local --to revealjs
  ); then
    rm -rf "$temp_dir" 2>/dev/null || true
    return 1
  fi

  rel_dir="$(dirname "$rel_file")"
  base_name="$(basename "${rel_file%.*}")"
  html_name="${base_name}.html"

  if [[ "$rel_dir" == "." ]]; then
    source_dir="$temp_dir/_site/slides"
    output_dir="$SLIDES_OUTPUT_DIR_REL"
  else
    source_dir="$temp_dir/_site/slides/$rel_dir"
    output_dir="$SLIDES_OUTPUT_DIR_REL/$rel_dir"
  fi

  source_html="$source_dir/$html_name"
  source_files="$source_dir/${base_name}_files"
  if [[ ! -f "$source_html" && -f "$temp_dir/$html_name" ]]; then
    source_dir="$temp_dir"
    source_html="$source_dir/$html_name"
    source_files="$source_dir/${base_name}_files"
  fi
  target_html="$output_dir/$html_name"
  target_files="$output_dir/${base_name}_files"

  mkdir -p "$output_dir"

  if [[ -f "$source_html" ]]; then
    cp -f "$source_html" "$target_html"
  fi

  if [[ -d "$source_files" ]]; then
    rm -rf "$target_files"
    cp -a "$source_files" "$target_files"
  fi

  for resource_dir in .assets images; do
    source_resource_dir="$temp_dir/_site/slides/$resource_dir"
    target_resource_dir="$SLIDES_OUTPUT_DIR_REL/$resource_dir"
    if [[ -d "$source_resource_dir" ]]; then
      mkdir -p "$target_resource_dir"
      cp -a "$source_resource_dir/." "$target_resource_dir/"
    fi
  done

  while IFS= read -r root_css; do
    cp -f "$root_css" "$SLIDES_OUTPUT_DIR_REL/$(basename "$root_css")"
  done < <(find "$temp_dir/_site/slides" -maxdepth 1 -type f -name '*.css' | sort)

  rm -rf "$temp_dir" 2>/dev/null || true
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

  mkdir -p _site
  while IFS= read -r rel_file; do
    if is_fallback_qmd_file "$rel_file"; then
      continue
    fi
    if is_render_all_excluded_file "$rel_file"; then
      continue
    fi

    rm -rf .quarto site_libs 2>/dev/null || true
    quarto render "$rel_file" --profile publish,local --to html --output-dir "$ROOT_DIR/_site"
    rendered_count=$((rendered_count + 1))
  done < <(find . -type f \( -name '*.md' -o -name '*.qmd' \) | sort | sed 's|^\./||')

  cp -a _site/. "$OUTPUT_DIR_REL/"
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

  (
    cd "$temp_dir"
    if [[ -f "$ROOT_DIR/_quarto-local.yml" ]]; then
      cp -f "$ROOT_DIR/_quarto-local.yml" ./_quarto-local.yml
    elif [[ -f "$ROOT_DIR/.quarto-local.yml" ]]; then
      cp -f "$ROOT_DIR/.quarto-local.yml" ./_quarto-local.yml
    fi
    quarto render --profile publish,local --to html

    rm -rf _site/slides
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
        quarto render "$rel_file" --profile slides,publish,local --to revealjs
        if [[ ! -f "_site/slides/${rel_file%.*}.html" && -f "${rel_file##*/}" ]]; then
          slide_base="${rel_file##*/}"
          slide_base="${slide_base%.*}"
          mkdir -p "_site/slides/$(dirname "$rel_file")"
          mv "${rel_file##*/}" "_site/slides/${rel_file%.*}.html"
          if [[ -d "${slide_base}_files" ]]; then
            mv "${slide_base}_files" "_site/slides/${rel_file%.*}_files"
          fi
        fi
        if [[ ! -f "_site/slides/${rel_file%.*}.html" ]]; then
          echo "ERROR: slide output not created: $rel_file" >&2
          exit 1
        fi

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

render_changed_outputs() {
  local rel_file html_output slide_output
  local rendered_count=0
  local skipped_count=0

  prepare_output_dirs

  while IFS= read -r rel_file; do
    if is_fallback_qmd_file "$rel_file" || is_render_all_excluded_file "$rel_file"; then
      continue
    fi

    html_output="$OUTPUT_DIR_REL/${rel_file%.*}.html"
    if [[ ! -s "$html_output" || "$rel_file" -nt "$html_output" ]]; then
      :
    elif ! is_index_file "$rel_file" && is_presentation_file "$rel_file"; then
      slide_output="$SLIDES_OUTPUT_DIR_REL/${rel_file%.*}.html"
      if [[ -s "$slide_output" && ! "$rel_file" -nt "$slide_output" ]]; then
        skipped_count=$((skipped_count + 1))
        continue
      fi
    else
      skipped_count=$((skipped_count + 1))
      continue
    fi

    echo "INFO: changed or missing output → $rel_file"
    clean_source_artifacts
    render_file_outputs "$rel_file"

    if [[ ! -s "$html_output" ]]; then
      echo "ERROR: html output not created: $rel_file" >&2
      return 1
    fi
    if ! is_index_file "$rel_file" && is_presentation_file "$rel_file"; then
      slide_output="$SLIDES_OUTPUT_DIR_REL/${rel_file%.*}.html"
      if [[ ! -s "$slide_output" ]]; then
        echo "ERROR: slide output not created: $rel_file" >&2
        return 1
      fi
    fi

    rendered_count=$((rendered_count + 1))
  done < <(find . -path './_site' -prune -o -type f \( -name '*.md' -o -name '*.qmd' \) -print | sort | sed 's|^\./||')

  echo "INFO: rendered changed page count: $rendered_count; unchanged page count: $skipped_count"
}

ensure_quarto_config_links
trap on_exit EXIT

command="${1:-}"

case "$command" in
  clean)
    clean_source_artifacts
    rm -rf "$OUTPUT_DIR_REL"
    ;;
  preview)
    prepare_output_dirs
    ensure_preview_runtime_dirs
    start_slide_watcher
    quarto preview --profile publish,local
    ;;
  render-all)
    CLEAN_SOURCE_ON_EXIT=1
    clean_source_artifacts
    rm -rf "$OUTPUT_DIR_REL"
    render_all_outputs_in_temp_workspace
    ;;
  render-changed)
    CLEAN_SOURCE_ON_EXIT=1
    render_changed_outputs
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
    quarto preview --profile publish,local --render none
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
