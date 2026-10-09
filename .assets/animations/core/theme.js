const STORAGE_KEY = "anim-theme";
const ATTR = "data-anim-theme";
const root = document.documentElement;

// Yeni tema: core/theme.css içine tam jeton bloğu ekle + buraya bir satır ekle.
// `kind` yalnızca otomatik algı ve Quarto geçişi içindir.
export const THEMES = [
  { id: "light", label: "Açık", kind: "light" },
  { id: "dark", label: "Koyu", kind: "dark" },
  { id: "sepia", label: "Sepya", kind: "light", slidesOnly: true },
  { id: "ocean", label: "Okyanus", kind: "dark", slidesOnly: true },
  { id: "contrast", label: "Yüksek karşıtlık", kind: "dark", slidesOnly: true }
];

const isSlides = () => !!document.querySelector(".reveal");
const available = () => THEMES.filter((t) => isSlides() || !t.slidesOnly);
const find = (id) => available().find((t) => t.id === id) || null;

function stored() {
  try {
    const t = find(localStorage.getItem(STORAGE_KEY));
    return t ? t.id : null;
  } catch {
    return null;
  }
}

function luminance(cssColor) {
  const m = cssColor.match(/\d+(\.\d+)?/g);
  if (!m || m.length < 3) return null;
  if (m.length >= 4 && Number(m[3]) === 0) return null;
  const [r, g, b] = m.slice(0, 3).map(Number);
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

// Sayfanın (Quarto açık/koyu ya da Reveal teması) gerçek zemin rengine bakar.
function detect() {
  // Quarto açık/koyu geçişi sınıfı hemen değiştirir, stil dosyası biraz sonra yüklenir.
  if (document.body.classList.contains("quarto-dark")) return "dark";
  if (document.body.classList.contains("quarto-light")) return "light";
  for (const el of [document.querySelector(".reveal-viewport"), document.body, root]) {
    if (!el) continue;
    const l = luminance(getComputedStyle(el).backgroundColor);
    if (l !== null) return l < 0.5 ? "dark" : "light";
  }
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function getTheme() {
  return root.getAttribute(ATTR) || "light";
}

export function setTheme(id, persist = true) {
  const theme = find(id) || find("light");
  root.setAttribute(ATTR, theme.id);
  root.setAttribute("data-anim-kind", theme.kind);
  if (persist) {
    try {
      localStorage.setItem(STORAGE_KEY, theme.id);
    } catch {}
  }
  root.dispatchEvent(new CustomEvent("anim-themechange", { detail: theme.id }));
}

function makeSwatch(id) {
  const sw = document.createElement("span");
  sw.className = "anim-theme-swatch";
  sw.setAttribute(ATTR, id);
  sw.append(document.createElement("i"), document.createElement("i"));
  return sw;
}

function addPicker() {
  if (document.querySelector(".anim-theme-toggle")) return;

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "anim-theme-toggle";
  btn.textContent = "Aa";
  btn.title = "Tema";
  btn.setAttribute("aria-label", "Tema seç");
  btn.setAttribute("aria-haspopup", "menu");
  btn.setAttribute("aria-expanded", "false");

  const menu = document.createElement("div");
  menu.className = "anim-theme-menu";
  menu.setAttribute("role", "menu");
  menu.hidden = true;

  const items = available().map((t) => {
    const item = document.createElement("button");
    item.type = "button";
    item.setAttribute("role", "menuitemradio");
    item.dataset.themeId = t.id;
    item.append(makeSwatch(t.id), document.createTextNode(t.label));
    item.addEventListener("click", () => {
      setTheme(t.id);
      close(true);
    });
    menu.appendChild(item);
    return item;
  });

  const sync = () => {
    for (const item of items) item.setAttribute("aria-checked", String(item.dataset.themeId === getTheme()));
  };

  function open() {
    sync();
    menu.hidden = false;
    btn.setAttribute("aria-expanded", "true");
    (items.find((i) => i.getAttribute("aria-checked") === "true") || items[0]).focus();
  }

  function close(refocus = false) {
    menu.hidden = true;
    btn.setAttribute("aria-expanded", "false");
    if (refocus) btn.focus();
  }

  btn.addEventListener("click", () => (menu.hidden ? open() : close()));

  // Menü açıkken ok/Esc tuşları sunumu (Reveal) gezdirmesin.
  menu.addEventListener("keydown", (e) => {
    e.stopPropagation();
    const i = items.indexOf(document.activeElement);
    if (e.key === "Escape") close(true);
    else if (e.key === "ArrowDown") items[(i + 1) % items.length].focus();
    else if (e.key === "ArrowUp") items[(i - 1 + items.length) % items.length].focus();
    else return;
    e.preventDefault();
  });

  document.addEventListener("click", (e) => {
    if (!menu.hidden && !menu.contains(e.target) && e.target !== btn) close();
  });

  root.addEventListener("anim-themechange", sync);
  document.body.append(btn, menu);
}

export function initTheme() {
  const url = new URLSearchParams(location.search).get("anim-theme");
  const forced = find(url) ? url : null;
  setTheme(forced || stored() || detect(), false);
  addPicker();

  // Kullanıcı seçim yapmadıysa Quarto'nun açık/koyu geçişini izle.
  new MutationObserver(() => {
    if (!stored() && !forced) setTheme(detect(), false);
  }).observe(document.body, { attributes: true, attributeFilter: ["class"] });
}
