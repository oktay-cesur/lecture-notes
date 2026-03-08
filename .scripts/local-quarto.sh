#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUTPUT_DIR_REL="../../_dolap/lecture_notes"
SLIDES_OUTPUT_DIR_REL="$OUTPUT_DIR_REL/slides"
CREATED_CONFIG_LINKS=()
CLEAN_SOURCE_ON_EXIT=0

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
  rm -rf .quarto/ _site/ 2>/dev/null || true
  find . -type f -name '*.html' -delete 2>/dev/null || true
  find . -type d -name '*_files' -exec rm -rf {} + 2>/dev/null || true
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

on_exit() {
  if [[ "$CLEAN_SOURCE_ON_EXIT" == "1" ]]; then
    clean_source_artifacts
  fi
  cleanup_quarto_config_links
}

prepare_output_dirs() {
  mkdir -p "$OUTPUT_DIR_REL" "$SLIDES_OUTPUT_DIR_REL"
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
  [[ "$rel_file" == "topics/search/search-algorithms.md" || "$rel_file" == "topics/search/search-algorithms-qmd-fallback.qmd" ]]
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
  quarto render "$rel_file" --profile local,slides --to revealjs --output-dir "$SLIDES_OUTPUT_DIR_REL"
}

remove_slide_output() {
  local rel_file="$1"
  local slide_rel="${rel_file%.*}.html"
  rm -f "$SLIDES_OUTPUT_DIR_REL/$slide_rel"
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

  while IFS= read -r rel_file; do
    if is_fallback_qmd_file "$rel_file"; then
      continue
    fi
    if is_render_all_excluded_file "$rel_file"; then
      continue
    fi
    render_html_file "$rel_file"
    rendered_count=$((rendered_count + 1))
  done < <(find . -type f \( -name '*.md' -o -name '*.qmd' \) | sort | sed 's|^\./||')

  echo "INFO: rendered html file count: $rendered_count"
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
    quarto preview --profile local --render none
    ;;
  render-all)
    clean_source_artifacts
    prepare_output_dirs
    render_all_slides
    render_all_html_files
    CLEAN_SOURCE_ON_EXIT=1
    ensure_preview_runtime_dirs
    quarto preview --profile local --render none
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
