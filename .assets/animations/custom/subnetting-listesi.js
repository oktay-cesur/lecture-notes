import { makeEl, makeSvg as el } from "../core/dom.js";
// subnetting-listesi.js — Alt ağ sayısı seçilince bit ödünç alma, prefix, blok büyüklüğü ve alt ağ listesi
//
// Kullanım:
//   <div data-anim="custom" data-src="subnetting-listesi.js" data-css="subnetting-listesi.css"
//        data-network="192.168.1.0" data-base-prefix="24" data-counts="2,4,8" data-label="..."></div>
//
// Öznitelikler (isteğe bağlı):
//   data-network     : bölünecek bloğun ağ adresi (varsayılan 192.168.1.0)
//   data-base-prefix : bölünmeden önceki prefix (varsayılan 24)
//   data-counts      : seçilebilir alt ağ sayıları, virgülle (varsayılan 2,4,8)
//   data-label       : başlık metni

const DEFAULT_NETWORK = "192.168.1.0";
const DEFAULT_BASE_PREFIX = 24;
const DEFAULT_COUNTS = [2, 4, 8];

function parseIp(str) {
  const parts = (str || "").trim().split(".").map((s) => parseInt(s, 10));
  if (parts.length !== 4 || parts.some((n) => !Number.isInteger(n) || n < 0 || n > 255)) return null;
  return parts;
}

function bitsNeeded(count) {
  return Math.ceil(Math.log2(count));
}

function subnetsFor(octets, basePrefix, count) {
  const n = bitsNeeded(count);
  const newPrefix = basePrefix + n;
  const hostBits = 32 - newPrefix;
  const blockSize = Math.pow(2, hostBits);
  const changingOctetIdx = Math.floor(basePrefix / 8);
  const base = octets[changingOctetIdx];
  const list = [];
  for (let i = 0; i < count; i++) {
    const netVal = base + i * blockSize;
    const net = [...octets];
    net[changingOctetIdx] = netVal;
    const bcast = [...octets];
    bcast[changingOctetIdx] = netVal + blockSize - 1;
    list.push({
      network: net.join("."),
      broadcast: bcast.join("."),
      firstHost: blockSize > 2 ? net.slice(0, 3).join(".") + "." + (netVal + 1) : null,
      lastHost: blockSize > 2 ? net.slice(0, 3).join(".") + "." + (netVal + blockSize - 2) : null,
    });
  }
  return { n, newPrefix, blockSize, list };
}

export function mount(div, dataset) {
  const octets = parseIp(dataset.network) || parseIp(DEFAULT_NETWORK);
  if (!octets) {
    div.replaceChildren(
      makeEl("p", "sl__uyari", `Geçersiz data-network değeri: "${dataset.network}". Örnek: 192.168.1.0`)
    );
    console.warn("[subnetting-listesi] geçersiz adres:", dataset.network);
    return;
  }
  let basePrefix = parseInt(dataset.basePrefix, 10);
  if (!Number.isInteger(basePrefix) || basePrefix < 8 || basePrefix > 30) basePrefix = DEFAULT_BASE_PREFIX;
  const counts = (dataset.counts || DEFAULT_COUNTS.join(","))
    .split(",")
    .map((s) => parseInt(s.trim(), 10))
    .filter((n) => Number.isInteger(n) && n >= 2 && (n & (n - 1)) === 0);
  if (counts.length === 0) counts.push(...DEFAULT_COUNTS);

  const wrap = makeEl("section", "sl");
  wrap.setAttribute("aria-label", "Alt ağ sayısına göre bit ödünç alma ve alt ağ listesi");

  if (dataset.label) wrap.appendChild(makeEl("h4", "sl__baslik", dataset.label));
  wrap.appendChild(makeEl("p", "sl__blok", `Bölünecek blok: ${octets.join(".")}/${basePrefix}`));

  const btnRow = makeEl("div", "sl__dugmeler");
  btnRow.setAttribute("role", "group");
  btnRow.setAttribute("aria-label", "Alt ağ sayısı seç");
  wrap.appendChild(btnRow);

  const ozet = makeEl("p", "sl__ozet");
  wrap.appendChild(ozet);

  const svgRoot = el("svg", {
    viewBox: "0 0 760 70",
    width: "100%",
    style: "max-width:760px; display:block; margin: 4px auto;",
    role: "img",
    "aria-label": "Seçilen alt ağ sayısına göre blok şeridi",
  });
  wrap.appendChild(svgRoot);

  const tableWrap = makeEl("div", "sl__tablo-sarmal");
  wrap.appendChild(tableWrap);

  const state = { count: counts[0] };

  function renderStrip(list, blockSize) {
    while (svgRoot.firstChild) svgRoot.removeChild(svgRoot.firstChild);
    const total = list.length;
    const padX = 10;
    const w = (760 - padX * 2) / total;
    list.forEach((s, i) => {
      svgRoot.appendChild(
        el("rect", {
          x: padX + i * w,
          y: 10,
          width: w - 3,
          height: 40,
          rx: 4,
          fill: i % 2 === 0 ? "var(--anim-blue)" : "var(--anim-sky)",
          stroke: "var(--anim-border-strong)",
          "stroke-width": "1",
        })
      );
      svgRoot.appendChild(
        el(
          "text",
          {
            x: padX + i * w + (w - 3) / 2,
            y: 34,
            "text-anchor": "middle",
            fill: "var(--anim-on-accent)",
            "font-size": "11px",
            "font-family": "monospace",
            "font-weight": "600",
          },
          `#${i + 1}`
        )
      );
    });
    svgRoot.appendChild(
      el(
        "text",
        { x: padX, y: 64, "text-anchor": "start", fill: "var(--anim-muted)", "font-size": "12px" },
        `Her alt ağ ${blockSize} adres kaplar.`
      )
    );
  }

  function renderTable(list) {
    const table = makeEl("table", "sl__tablo");
    const thead = makeEl("tr");
    ["Alt Ağ", "Ağ Adresi", "Kullanılabilir Aralık", "Yayın Adresi"].forEach((h) =>
      thead.appendChild(makeEl("th", null, h))
    );
    table.appendChild(thead);
    list.forEach((s, i) => {
      const tr = makeEl("tr");
      tr.appendChild(makeEl("td", null, `#${i + 1}`));
      tr.appendChild(makeEl("td", "sl__mono", s.network));
      tr.appendChild(
        makeEl("td", "sl__mono", s.firstHost ? `${s.firstHost} – ${s.lastHost}` : "—")
      );
      tr.appendChild(makeEl("td", "sl__mono", s.broadcast));
      table.appendChild(tr);
    });
    tableWrap.replaceChildren(table);
  }

  function render() {
    const { n, newPrefix, blockSize, list } = subnetsFor(octets, basePrefix, state.count);
    ozet.textContent = `${n} bit ödünç alındı → /${newPrefix} → ${state.count} alt ağ, alt ağ başına ${
      blockSize - 2 > 0 ? blockSize - 2 : blockSize
    } kullanılabilir host.`;
    renderStrip(list, blockSize);
    renderTable(list);
    for (const btn of btnRow.children) {
      const c = parseInt(btn.dataset.count, 10);
      btn.setAttribute("aria-pressed", String(c === state.count));
    }
  }

  counts.forEach((c) => {
    const btn = makeEl("button", { type: "button", class: "sl__btn", "data-count": String(c) }, `${c} alt ağ`);
    btn.addEventListener("click", () => {
      state.count = c;
      render();
    });
    btnRow.appendChild(btn);
  });

  render();
  div.replaceChildren(wrap);
}
