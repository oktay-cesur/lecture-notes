import { makeEl, makeSvg as el } from "../core/dom.js";
// ipv4-adres-bloku.js — Bir alt ağ bloğundaki 32 adresi tek tek gösterir
//
// Kullanım:
//   <div data-anim="custom" data-src="ipv4-adres-bloku.js" data-css="ipv4-adres-bloku.css"
//        data-network="192.168.10.32" data-prefix="27" data-label="..."></div>
//
// Öznitelikler (isteğe bağlı):
//   data-network : bloğun ağ adresi (varsayılan 192.168.10.32)
//   data-prefix  : prefix uzunluğu (varsayılan 27)
//   data-label   : başlık metni

const DEFAULT_NETWORK = "192.168.10.32";
const DEFAULT_PREFIX = 27;

const STAGES = [
  { key: "sinirlar", title: "1. Blok sınırları" },
  { key: "ag-aralik", title: "2. Ağ adresi ve kullanılabilir aralık" },
  { key: "yayin", title: "3. Yayın adresi" },
];

function parseIp(str) {
  const parts = (str || "").trim().split(".").map((s) => parseInt(s, 10));
  if (parts.length !== 4 || parts.some((n) => !Number.isInteger(n) || n < 0 || n > 255)) return null;
  return parts;
}

function cellColor(stageKey, offset, total) {
  const isNetwork = offset === 0;
  const isBroadcast = offset === total - 1;
  if (stageKey === "sinirlar") {
    if (isNetwork || isBroadcast) return "var(--anim-amber)";
    return "var(--anim-surface)";
  }
  if (stageKey === "ag-aralik") {
    if (isNetwork) return "var(--anim-amber)";
    if (isBroadcast) return "var(--anim-surface)";
    return "var(--anim-green)";
  }
  // yayin
  if (isBroadcast) return "var(--anim-red)";
  if (isNetwork) return "var(--anim-amber)";
  return "var(--anim-green)";
}

export function mount(div, dataset) {
  const octets = parseIp(dataset.network) || parseIp(DEFAULT_NETWORK);
  if (!octets) {
    div.replaceChildren(
      makeEl("p", "iab__uyari", `Geçersiz data-network değeri: "${dataset.network}". Örnek: 192.168.10.32`)
    );
    console.warn("[ipv4-adres-bloku] geçersiz adres:", dataset.network);
    return;
  }
  let prefix = parseInt(dataset.prefix, 10);
  if (!Number.isInteger(prefix) || prefix < 24 || prefix > 30) prefix = DEFAULT_PREFIX;
  const hostBits = 32 - prefix;
  const total = Math.pow(2, hostBits);
  const lastOctetBase = octets[3];

  const cols = Math.min(total, 16);
  const rows = Math.ceil(total / cols);
  const CELL = 34;
  const GAP = 4;
  const PAD = 16;
  const VIEW_W = PAD * 2 + cols * (CELL + GAP);
  const VIEW_H = PAD * 2 + rows * (CELL + GAP) + 30;

  const wrap = makeEl("section", "iab");
  wrap.setAttribute("aria-label", "Bir IPv4 alt ağ bloğundaki adreslerin rolleri");

  if (dataset.label) wrap.appendChild(makeEl("h4", "iab__baslik", dataset.label));
  wrap.appendChild(
    makeEl(
      "p",
      "iab__blok",
      `${octets.join(".")}/${prefix} bloğu (${total} adres: .${lastOctetBase}–.${lastOctetBase + total - 1})`
    )
  );

  const tabs = makeEl("div", "iab__sekmeler");
  tabs.setAttribute("role", "tablist");
  tabs.setAttribute("aria-label", "Gösterim aşaması");
  wrap.appendChild(tabs);

  const svgRoot = el("svg", {
    viewBox: `0 0 ${VIEW_W} ${VIEW_H}`,
    width: "100%",
    style: `max-width:${VIEW_W}px; display:block; margin: 6px auto;`,
    role: "img",
    "aria-label": "Alt ağ bloğundaki adreslerin ağ, yayın ve kullanılabilir host olarak renklendirilmesi",
  });
  wrap.appendChild(svgRoot);

  const legend = makeEl("div", "iab__lejant");
  legend.innerHTML =
    '<span class="iab__lej iab__lej--amber">Ağ/Yayın</span>' +
    '<span class="iab__lej iab__lej--green">Kullanılabilir</span>' +
    '<span class="iab__lej iab__lej--red">Yayın</span>';
  wrap.appendChild(legend);

  const state = { stage: 0 };

  function renderGrid() {
    while (svgRoot.firstChild) svgRoot.removeChild(svgRoot.firstChild);
    const stageKey = STAGES[state.stage].key;
    for (let i = 0; i < total; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = PAD + col * (CELL + GAP);
      const y = PAD + row * (CELL + GAP);
      const addr = lastOctetBase + i;
      svgRoot.appendChild(
        el("rect", {
          x,
          y,
          width: CELL,
          height: CELL,
          rx: 5,
          fill: cellColor(stageKey, i, total),
          stroke: "var(--anim-border-strong)",
          "stroke-width": "1",
        })
      );
      svgRoot.appendChild(
        el(
          "text",
          {
            x: x + CELL / 2,
            y: y + CELL / 2 + 1,
            "text-anchor": "middle",
            "dominant-baseline": "central",
            fill: "var(--anim-on-accent)",
            "font-size": "11px",
            "font-family": "monospace",
            "font-weight": "600",
          },
          `.${addr}`
        )
      );
    }
    const capY = PAD + rows * (CELL + GAP) + 16;
    let note = "";
    if (stageKey === "sinirlar") note = `Ağ adresi .${lastOctetBase} ve yayın adresi .${lastOctetBase + total - 1} ayrılmıştır.`;
    if (stageKey === "ag-aralik")
      note = `Kullanılabilir aralık: .${lastOctetBase + 1}–.${lastOctetBase + total - 2} (${total - 2} host).`;
    if (stageKey === "yayin") note = `Yayın adresi .${lastOctetBase + total - 1}, hiçbir cihaza atanamaz.`;
    svgRoot.appendChild(
      el(
        "text",
        { x: PAD, y: capY, "text-anchor": "start", fill: "var(--anim-strong)", "font-size": "13px", "font-weight": "600" },
        note
      )
    );
  }

  function render() {
    for (const tab of tabs.children) {
      const idx = parseInt(tab.dataset.idx, 10);
      const active = idx === state.stage;
      tab.setAttribute("aria-selected", String(active));
      tab.classList.toggle("iab__tab--aktif", active);
    }
    renderGrid();
  }

  STAGES.forEach((stage, idx) => {
    const tab = makeEl("button", { type: "button", class: "iab__tab", role: "tab", "data-idx": String(idx) }, stage.title);
    tab.addEventListener("click", () => {
      state.stage = idx;
      render();
    });
    tabs.appendChild(tab);
  });

  render();
  div.replaceChildren(wrap);
}
