const SVG_NS = "http://www.w3.org/2000/svg";

function applyAttrs(node, attrs) {
  if (attrs == null) return;
  if (typeof attrs === "string") {
    node.className = attrs;
    return;
  }
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "style" && typeof v === "object") Object.assign(node.style, v);
    else node.setAttribute(k, String(v));
  }
}

/** HTML öğesi. İkinci argüman sınıf adı (string) ya da öznitelik nesnesi olabilir. */
export function makeEl(tag, attrs = null, text = null) {
  const node = document.createElement(tag);
  applyAttrs(node, attrs);
  if (text != null) node.textContent = text;
  return node;
}

/** SVG öğesi. Öznitelik değerleri string'e çevrilir. */
export function makeSvg(tag, attrs = null, text = null) {
  const node = document.createElementNS(SVG_NS, tag);
  if (attrs != null) for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, String(v));
  if (text != null) node.textContent = text;
  return node;
}
