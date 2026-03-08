const loadedCss = new Set();

function resolveCustomPath(basePath, relativePath) {
  return basePath + relativePath;
}

function loadCss(href) {
  if (loadedCss.has(href)) return;
  loadedCss.add(href);
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

export async function mountCustomAnimations() {
  const divs = document.querySelectorAll('[data-anim="custom"]');
  if (divs.length === 0) return;

  const scriptEl = document.querySelector('script[src*="custom-loader.js"]');
  let basePath = "";
  if (scriptEl) {
    basePath = scriptEl.src.replace(/custom-loader\.js$/, "custom/");
  } else {
    const moduleUrl = import.meta.url;
    basePath = moduleUrl.replace(/custom-loader\.js$/, "custom/");
  }

  for (const div of divs) {
    const src = div.dataset.src;
    if (!src) continue;

    if (src.includes("..")) continue;

    const css = div.dataset.css;
    if (css && !css.includes("..")) {
      loadCss(resolveCustomPath(basePath, css));
    }

    try {
      const mod = await import(resolveCustomPath(basePath, src));
      if (typeof mod.mount === "function") {
        mod.mount(div, div.dataset);
      }
    } catch (err) {
      console.error(`[custom-loader] Failed to load ${src}:`, err);
    }
  }
}
