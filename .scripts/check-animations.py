#!/usr/bin/env python3
"""Animasyon sözleşmesini (.assets/animations/README.md) makinece denetler.

Kullanım: make check-animations
Bir satırdaki renk denetimini kapatmak için satıra `anim-allow-color` yaz (veri renkleri için).
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ANIM = ROOT / ".assets" / "animations"
LUA = ROOT / ".filters" / "animation-assets.lua"

errors = []


def err(path, line, msg):
    errors.append(f"{path.relative_to(ROOT)}:{line}: {msg}")


def code_lines(path):
    """(satır_no, metin) üretir; yorumları ayıklar."""
    in_block = False
    for n, raw in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        line = raw
        if in_block:
            if "*/" in line:
                line = line.split("*/", 1)[1]
                in_block = False
            else:
                continue
        while "/*" in line:
            head, tail = line.split("/*", 1)
            if "*/" in tail:
                line = head + tail.split("*/", 1)[1]
            else:
                line = head
                in_block = True
        if path.suffix == ".js":
            line = re.sub(r"(^|\s)//.*$", "", line)
        if "anim-allow-color" in raw:
            continue
        yield n, line


files = [p for p in ANIM.rglob("*") if p.suffix in (".js", ".css")]
themed = [p for p in files if p.relative_to(ANIM).parts[0] != "core" or p.name != "theme.css"]

# 1) Sabit renk yasağı
COLOR = re.compile(r"#[0-9a-fA-F]{3,8}\b|\brgba?\(|\bhsla?\(|[\"'](white|black)[\"']|:\s*(white|black)\b")
for p in themed:
    for n, line in code_lines(p):
        if p.suffix == ".js" and "${" in line and re.search(r"rgb\(\$\{", line):
            err(p, n, "rgb() yerine --anim-* jetonu kullan (veri rengiyse anim-allow-color yaz)")
            continue
        if COLOR.search(line):
            err(p, n, f"sabit renk yasak, --anim-* jetonu kullan: {line.strip()[:80]}")

# 2) Yerel DOM yardımcısı / doğrudan createElementNS yasağı
HELPER = re.compile(r"^\s*(?:export\s+)?function\s+(el|svgEl|htmlEl|makeEl|makeSvg|s)\s*\(")
for p in files:
    if p.suffix != ".js" or p.name == "dom.js":
        continue
    for n, line in code_lines(p):
        m = HELPER.match(line)
        if m and not (p.name == "tik-frqi.js" and m.group(1) == "makeSvg"):
            err(p, n, f"yerel DOM yardımcısı yasak, core/dom.js kullan: {m.group(1)}()")
        if "createElementNS" in line and p.name != "dom.js":
            err(p, n, "createElementNS yerine makeSvg (core/dom.js) kullan")

# 3) Harici bağımlılık yasağı
for p in files:
    for n, line in code_lines(p):
        if re.search(r"""(import\s.*from\s+|import\()\s*["']https?:|@import\s+url\(["']?https?:""", line):
            err(p, n, "harici bağımlılık yasak")

# 3b) Tema bütünlüğü: her tema bloğu aynı jeton kümesini tanımlar; CSS ve JS listeleri eşleşir
css = (ANIM / "core" / "theme.css").read_text(encoding="utf-8")
blocks = {}
for m in re.finditer(r"((?::root,\s*)?\[data-anim-theme=\"(\w+)\"\])\s*\{([^}]*)\}", css):
    if m.group(1).startswith(":root,") or m.group(1).startswith("[data-anim-theme"):
        body = m.group(3)
        if "--anim-bg:" in body:
            blocks[m.group(2)] = set(re.findall(r"(--anim-[a-z0-9-]+):", body))
if "light" not in blocks:
    err(ANIM / "core" / "theme.css", 1, "light (varsayılan) tema bloğu bulunamadı")
else:
    ref = blocks["light"]
    for name, keys in blocks.items():
        for k in sorted(ref - keys):
            err(ANIM / "core" / "theme.css", 1, f"tema '{name}': eksik jeton {k}")
        for k in sorted(keys - ref):
            err(ANIM / "core" / "theme.css", 1, f"tema '{name}': light'ta olmayan jeton {k}")
js = (ANIM / "core" / "theme.js").read_text(encoding="utf-8")
js_ids = set(re.findall(r'\{ id: "(\w+)"', js))
if js_ids != set(blocks):
    err(ANIM / "core" / "theme.js", 1, f"THEMES ({sorted(js_ids)}) ile theme.css blokları ({sorted(blocks)}) eşleşmiyor")

# 4) Kayıtlı modüller mount dışa aktarmalı
lua = LUA.read_text(encoding="utf-8")
map_js = re.findall(r'js\s*=\s*"\.assets/animations/([^"]+)"', lua)
for rel in map_js:
    p = ANIM / rel
    if not p.exists():
        err(LUA, 1, f"ANIMATION_MAP'te olmayan dosya: {rel}")
    elif "function mount(" not in p.read_text(encoding="utf-8"):
        err(p, 1, "mount(div, dataset) dışa aktarılmıyor")
for p in sorted((ANIM / "custom").glob("*.js")):
    if "function mount(" not in p.read_text(encoding="utf-8"):
        err(p, 1, "custom modülü mount(div, dataset) dışa aktarmalı")

# 5) ASCII Türkçe yazım (kullanıcıya görünen metinde tipik hatalar)
ASCII_TR = re.compile(
    r"[\"'`][^\"'`]*\b(Ileri|Baslangic|Ornegi|Ornek|Sirasi|sirasi|agaci|Adim \d|Akis|Degerler|Kosul|Sonuc|Cozum|Dugum|dugum|acilmadan|budandi)\b"
)
for p in files:
    if p.suffix != ".js":
        continue
    for n, line in code_lines(p):
        if ASCII_TR.search(line):
            err(p, n, f"ASCII Türkçe yazım (diakritik kullan): {line.strip()[:80]}")

# 6) Notlardaki data-anim kullanımı kayıtlı olmalı
known = set(re.findall(r"^\s{2}(\w+) = \{", lua, re.M))
DIV = re.compile(r"<div\b[^>]*\bdata-anim=\"([^\"]+)\"[^>]*>", re.S)
for md in list((ROOT / "courses").rglob("*.md")) + list((ROOT / "topics").rglob("*.md")):
    text = md.read_text(encoding="utf-8")
    for m in DIV.finditer(text):
        line = text.count("\n", 0, m.start()) + 1
        fam = m.group(1)
        if fam not in known:
            err(md, line, f'kayıtsız data-anim="{fam}"')
            continue
        if fam == "custom":
            src = re.search(r'data-src="([^"]+)"', m.group(0))
            css = re.search(r'data-css="([^"]+)"', m.group(0))
            if not src:
                err(md, line, "custom için data-src zorunlu")
            else:
                for attr, mt in (("data-src", src), ("data-css", css)):
                    if mt and (".." in mt.group(1) or not (ANIM / "custom" / mt.group(1)).exists()):
                        err(md, line, f'{attr}="{mt.group(1)}" custom/ altında bulunamadı')

if errors:
    print("\n".join(errors))
    print(f"\n{len(errors)} sözleşme ihlali.")
    sys.exit(1)
print("Animasyon sözleşmesi: temiz.")
