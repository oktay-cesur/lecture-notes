#!/usr/bin/env python3
"""Yerel önizleme menüsünü ve klasörlere göre not listesini hazırlar."""

from pathlib import Path
from urllib.parse import quote
import argparse
import re

import yaml


ROOT = Path(__file__).resolve().parent.parent
SOURCES = ROOT / "_onizleme"
INDEX = SOURCES / "index.qmd"


def write_changed(path, content):
    if not path.exists() or path.read_text(encoding="utf-8") != content:
        path.write_text(content, encoding="utf-8")


def notes():
    if not SOURCES.is_dir():
        return []
    return sorted(
        (p for p in SOURCES.rglob("*")
         if p.is_file() and p.suffix in (".md", ".qmd")
         and p.name.lower() not in ("readme.md", "index.md", "index.qmd")
         and not any(part.startswith(".") for part in p.relative_to(SOURCES).parts)),
        key=lambda p: (
            p.relative_to(SOURCES).parts[0].casefold()
            if len(p.relative_to(SOURCES).parts) > 1 else "",
            p.relative_to(SOURCES).as_posix().casefold(),
        ),
    )


def title(path):
    text = path.read_text(encoding="utf-8")
    match = re.match(r"\A---\s*\n(.*?)\n---\s*(?:\n|$)", text, re.S)
    metadata = (yaml.safe_load(match[1]) or {}) if match else {}
    if isinstance(metadata, dict):
        value = metadata.get("title") or metadata.get("baslik")
        if value:
            return str(value)
    heading = re.search(r"^#\s+(.+)$", text, re.M)
    return heading[1] if heading else path.stem.replace("_", " ").replace("-", " ")


def prepare():
    if not SOURCES.is_dir():
        return
    config_path = ROOT / ".quarto-local.yml"
    # Preserve existing local settings, including navigation customizations.
    config = yaml.safe_load(config_path.read_text()) if config_path.exists() else {}
    config = config or {}
    left = config.setdefault("website", {}).setdefault("navbar", {}).setdefault("left", [])
    href = "/_onizleme/index.html"
    if not any(isinstance(item, dict) and item.get("href") == href for item in left):
        left.append({"text": "Önizleme", "href": href})
    write_changed(config_path, yaml.safe_dump(config, allow_unicode=True, sort_keys=False))

    rows = ['---', 'title: "Önizleme"', 'toc: false', '---', '',
            'Üzerinde çalışılan notlar.', '']
    current = None
    for path in notes():
        relative = path.relative_to(SOURCES)
        group = relative.parts[0] if len(relative.parts) > 1 else "Diğer çalışmalar"
        if group != current:
            rows.extend([f"## {group}", ""])
            current = group
        label = title(path).replace("[", "\\[").replace("]", "\\]").replace("\n", " ")
        rows.append(f"- [{label}]({quote(relative.with_suffix('.html').as_posix())})")
    if current is None:
        rows.append("Henüz önizlenecek not yok.")
    write_changed(INDEX, "\n".join(rows) + "\n")


def changed():
    for path in [INDEX, *notes()] if SOURCES.is_dir() else []:
        relative = path.relative_to(ROOT)
        output = ROOT / "_site" / relative.with_suffix(".html")
        # A changed image or other companion file also refreshes its notes.
        modified = max((p.stat().st_mtime for p in path.parent.rglob("*") if p.is_file()),
                       default=path.stat().st_mtime)
        if not output.exists() or modified > output.stat().st_mtime:
            print(relative.as_posix())


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--changed", action="store_true")
    args = parser.parse_args()
    prepare()
    if args.changed:
        changed()
