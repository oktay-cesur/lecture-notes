"""Check PSI303 delivery structure and local assets, without rendering/publishing."""
from pathlib import Path
import hashlib
import json
import re
import sys
import xml.etree.ElementTree as ET
from urllib.parse import unquote

root = Path(__file__).resolve().parents[1]
course = root / 'courses/psi303'
errors = []
summary = []
for note in sorted((course/'notes').glob('tp_*.md')):
    text = note.read_text()
    if not text.startswith('---\n'):
        errors.append(f'{note.name}: missing existing publication frontmatter')
    elif 'type: presentation' not in text.split('---', 2)[1]:
        errors.append(f'{note.name}: publication type changed')
    stack = []
    fences = []
    for number, line in enumerate(text.splitlines(), 1):
        stripped = line.strip()
        if stripped.startswith('```'):
            if fences:
                fences.pop()
            else:
                fences.append(number)
        if fences:
            continue
        if re.match(r'^:{3,}\s*\S', stripped):
            stack.append(number)
        elif re.match(r'^:{3,}$', stripped):
            if stack:
                stack.pop()
            else:
                errors.append(f'{note.name}:{number}: unmatched div end')
    if stack:
        errors.append(f'{note.name}: unclosed divs at {stack}')
    if fences:
        errors.append(f'{note.name}: unclosed code fence at {fences}')
    images = []
    links = re.findall(r'!?\[[^\]]*\]\(([^\n)]+)\)', text)
    for link in links:
        target = link.strip().split(' "', 1)[0].strip('<>')
        if target.startswith(('https:', 'http:', 'mailto:', '#', 'data:')):
            continue
        target = unquote(target.split('#', 1)[0])
        if not target:
            continue
        path = (root / target.lstrip('/')) if target.startswith('/') else note.parent/target
        if not path.exists():
            errors.append(f'{note.name}: missing link {target}')
        if path.suffix.lower() in {'.svg', '.png', '.jpg', '.jpeg'}:
            images.append(path)
        if '/.content/' in str(path.resolve()):
            errors.append(f'{note.name}: operational asset exposed {target}')
    if re.search(r'^## .*?(?:120 dakika|Teorik akış|\d+ dk)', text, re.M):
        errors.append(f'{note.name}: instructor timing in student publication')
    if re.search(r'\b(?:TODO|TBD)\b|\[görsel buraya\]', text, re.I):
        errors.append(f'{note.name}: unresolved placeholder')
    for path in set(images):
        if path.suffix == '.svg' and path.exists():
            try:
                ET.parse(path)
            except ET.ParseError as exc:
                errors.append(f'{path}: invalid SVG: {exc}')
    summary.append(dict(note=note.name, sections=len(re.findall(r'^## ', text, re.M)), notes=len(re.findall(r'^::: \{\.notes\}', text, re.M)), images=len(set(images)), sha256=hashlib.sha256(text.encode()).hexdigest()))
for name in ['.quarto.yml', '_quarto-publish.yml']:
    config = (root/name).read_text()
    for exclusion in ['!courses/psi303/.content/**', '!courses/psi303/content-profile.md']:
        if exclusion not in config:
            errors.append(f'{name}: missing operational exclusion {exclusion}')
print(json.dumps(dict(ok=not errors, notes=summary, errors=errors), ensure_ascii=False, indent=2))
sys.exit(bool(errors))
