const loadedCss = new Set();
const BASE = new URL("./custom/", import.meta.url);

function resolveCustom(relativePath) {
  if (!relativePath || relativePath.includes("..")) return null;
  return new URL(relativePath, BASE).href;
}

function loadCss(href) {
  if (loadedCss.has(href)) return;
  loadedCss.add(href);
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

/** data-src ile verilen custom/ altındaki modülü yükler ve mount(div, dataset) çağırır. */
export async function mount(div, dataset = div.dataset) {
  const src = resolveCustom(dataset.src);
  if (!src) return;

  const css = resolveCustom(dataset.css);
  if (css) loadCss(css);

  try {
    const mod = await import(src);
    if (typeof mod.mount === "function") mod.mount(div, dataset);
  } catch (err) {
    console.error(`[custom-loader] ${dataset.src} yüklenemedi:`, err);
  }
}
