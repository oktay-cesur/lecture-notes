import { makeEl, makeSvg as el } from "../core/dom.js";
// ipv4-prefix-maskesi.js — IP sabit, prefix değişken: ağ/host bit sınırı, maske ve ağ adresi
//
// Kullanım:
//   <div data-anim="custom" data-src="ipv4-prefix-maskesi.js" data-css="ipv4-prefix-maskesi.css"
//        data-ip="192.168.10.37" data-prefixes="24,25,26,27" data-label="..."></div>
//
// Öznitelikler (hepsi isteğe bağlı):
//   data-ip        : nokta ayraçlı IPv4 adresi (varsayılan 192.168.10.37)
//   data-prefixes  : virgülle ayrılmış prefix listesi (varsayılan 24,25,26,27)
//   data-label     : başlık metni

const DEFAULT_IP = "192.168.10.37";
const DEFAULT_PREFIXES = [24, 25, 26, 27];

const CELL_W = 34;
const CELL_H = 40;
const OCTET_GAP = 18;
const PAD_X = 16;
const PAD_TOP = 54;
const ROW_Y = PAD_TOP;
const VIEW_W = PAD_X * 2 + 4 * (CELL_W * 8) + 3 * OCTET_GAP;
const VIEW_H = PAD_TOP + CELL_H + 70;

function parseIp(str) {
  const parts = (str || "").trim().split(".").map((s) => parseInt(s, 10));
  if (parts.length !== 4 || parts.some((n) => !Number.isInteger(n) || n < 0 || n > 255)) return null;
  return parts;
}

function octetBits(n) {
  return n.toString(2).padStart(8, "0").split("").map(Number);
}

function maskOctetFor(coveredBits) {
  if (coveredBits <= 0) return 0;
  if (coveredBits >= 8) return 255;
  return 256 - Math.pow(2, 8 - coveredBits);
}

function computeForPrefix(octets, prefix) {
  const maskOctets = [];
  const networkOctets = [];
  for (let o = 0; o < 4; o++) {
    const start = o * 8;
    const covered = Math.max(0, Math.min(8, prefix - start));
    const m = maskOctetFor(covered);
    maskOctets.push(m);
    networkOctets.push(octets[o] & m);
  }
  return { maskOctets, networkOctets };
}

function buildStrip(root, octets, bitsPerOctet, prefix) {
  while (root.firstChild) root.removeChild(root.firstChild);

  let x = PAD_X;
  let globalPos = 0;
  const boundaryX = { value: null };

  for (let o = 0; o < 4; o++) {
    const bits = bitsPerOctet[o];
    for (let b = 0; b < 8; b++) {
      const isNetwork = globalPos < prefix;
      const cellX = x + b * CELL_W;
      root.appendChild(
        el("rect", {
          x: cellX,
          y: ROW_Y,
          width: CELL_W - 2,
          height: CELL_H,
          rx: 4,
          fill: isNetwork ? "var(--anim-blue)" : "var(--anim-surface)",
          stroke: "var(--anim-border-strong)",
          "stroke-width": "1",
        })
      );
      root.appendChild(
        el(
          "text",
          {
            x: cellX + (CELL_W - 2) / 2,
            y: ROW_Y + CELL_H / 2 + 1,
            "text-anchor": "middle",
            "dominant-baseline": "central",
            fill: isNetwork ? "var(--anim-on-accent)" : "var(--anim-text)",
            "font-size": "16px",
            "font-family": "monospace",
            "font-weight": "600",
          },
          String(bits[b])
        )
      );
      if (globalPos === prefix - 1 && boundaryX.value == null) {
        boundaryX.value = cellX + CELL_W - 2 + 2;
      }
      globalPos++;
    }
    root.appendChild(
      el(
        "text",
        {
          x: x + (8 * CELL_W) / 2 - CELL_W / 2,
          y: ROW_Y - 14,
          "text-anchor": "middle",
          fill: "var(--anim-muted)",
          "font-size": "13px",
          "font-family": "monospace",
          "font-weight": "600",
        },
        String(octets[o])
      )
    );
    root.appendChild(
      el(
        "text",
        {
          x: x + (8 * CELL_W) / 2 - CELL_W / 2,
          y: ROW_Y + CELL_H + 20,
          "text-anchor": "middle",
          fill: "var(--anim-muted-2)",
          "font-size": "12px",
        },
        `oktet ${o + 1}`
      )
    );
    x += 8 * CELL_W + OCTET_GAP;
  }

  if (boundaryX.value != null && prefix < 32) {
    root.appendChild(
      el("line", {
        x1: boundaryX.value,
        y1: ROW_Y - 10,
        x2: boundaryX.value,
        y2: ROW_Y + CELL_H + 10,
        stroke: "var(--anim-red)",
        "stroke-width": "2",
        "stroke-dasharray": "4,3",
      })
    );
  }

  root.appendChild(
    el(
      "text",
      {
        x: PAD_X,
        y: VIEW_H - 14,
        "text-anchor": "start",
        fill: "var(--anim-blue)",
        "font-size": "13px",
        "font-weight": "600",
      },
      "■ Ağ biti"
    )
  );
  root.appendChild(
    el(
      "text",
      {
        x: PAD_X + 110,
        y: VIEW_H - 14,
        "text-anchor": "start",
        fill: "var(--anim-text)",
        "font-size": "13px",
        "font-weight": "600",
      },
      "□ Host biti"
    )
  );
}

export function mount(div, dataset) {
  const octets = parseIp(dataset.ip) || parseIp(DEFAULT_IP);
  if (!octets) {
    div.replaceChildren(
      makeEl("p", "ipm__uyari", `Geçersiz data-ip değeri: "${dataset.ip}". Örnek: 192.168.10.37`)
    );
    console.warn("[ipv4-prefix-maskesi] geçersiz IP:", dataset.ip);
    return;
  }
  const prefixes = (dataset.prefixes || DEFAULT_PREFIXES.join(","))
    .split(",")
    .map((s) => parseInt(s.trim(), 10))
    .filter((n) => Number.isInteger(n) && n >= 1 && n <= 32);
  if (prefixes.length === 0) prefixes.push(...DEFAULT_PREFIXES);

  const bitsPerOctet = octets.map(octetBits);

  const wrap = makeEl("section", "ipm");
  wrap.setAttribute("aria-label", "IP adresi ve değişken prefix ile ağ adresi hesaplama");

  if (dataset.label) {
    wrap.appendChild(makeEl("h4", "ipm__baslik", dataset.label));
  }

  const ipLine = makeEl(
    "p",
    "ipm__ip",
    `IP adresi: ${octets.join(".")}`
  );
  wrap.appendChild(ipLine);

  const btnRow = makeEl("div", "ipm__dugmeler");
  btnRow.setAttribute("role", "group");
  btnRow.setAttribute("aria-label", "Prefix uzunluğu seç");
  wrap.appendChild(btnRow);

  const svgRoot = el("svg", {
    viewBox: `0 0 ${VIEW_W} ${VIEW_H}`,
    width: "100%",
    style: `max-width:${VIEW_W}px; display:block; margin: 8px auto;`,
    role: "img",
    "aria-label": "IP adresinin 32 bitlik şeridinde ağ ve host bitlerinin sınırı",
  });
  wrap.appendChild(svgRoot);

  const info = makeEl("div", "ipm__bilgi");
  const maskLine = makeEl("p", "ipm__maske");
  const netLine = makeEl("p", "ipm__ag");
  info.appendChild(maskLine);
  info.appendChild(netLine);
  wrap.appendChild(info);

  const state = { prefix: prefixes[0] };

  function render() {
    buildStrip(svgRoot, octets, bitsPerOctet, state.prefix);
    const { maskOctets, networkOctets } = computeForPrefix(octets, state.prefix);
    maskLine.textContent = `Maske (/${state.prefix}): ${maskOctets.join(".")}`;
    netLine.textContent = `Ağ adresi: ${networkOctets.join(".")}`;
    for (const btn of btnRow.children) {
      const p = parseInt(btn.dataset.prefix, 10);
      btn.setAttribute("aria-pressed", String(p === state.prefix));
    }
  }

  for (const p of prefixes) {
    const btn = makeEl("button", { type: "button", class: "ipm__btn", "data-prefix": String(p) }, `/${p}`);
    btn.addEventListener("click", () => {
      state.prefix = p;
      render();
    });
    btnRow.appendChild(btn);
  }

  render();
  div.replaceChildren(wrap);
}
