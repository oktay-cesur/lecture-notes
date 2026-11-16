import { makeEl, makeSvg as el } from "../core/dom.js";
// ipv4-and-asamali.js — Aşamalı AND: IP, maske ve sonuç bitleri oktet oktet açılır
//
// Kullanım:
//   <div data-anim="custom" data-src="ipv4-and-asamali.js" data-css="ipv4-and-asamali.css"
//        data-ip="192.168.10.37" data-prefix="27" data-label="..."></div>
//
// Öznitelikler (isteğe bağlı):
//   data-ip     : nokta ayraçlı IPv4 adresi (varsayılan 192.168.10.37)
//   data-prefix : prefix uzunluğu (varsayılan 27)
//   data-label  : başlık metni

const DEFAULT_IP = "192.168.10.37";
const DEFAULT_PREFIX = 27;

const CELL_W = 30;
const CELL_H = 30;
const ROW_GAP = 10;
const OCTET_GAP = 16;
const PAD_X = 16;
const PAD_TOP = 70;
const ROW_LABEL_W = 60;
const VIEW_W = PAD_X + ROW_LABEL_W + 4 * (CELL_W * 8) + 3 * OCTET_GAP + PAD_X;
const VIEW_H = PAD_TOP + 3 * CELL_H + 2 * ROW_GAP + 50;

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

// Rastgele örnek: ilk iki oktet 10 veya 172/192 ile başlayan tanıdık bir özel blok hissi verir;
// prefix 25-30 arasında seçilir ki sınır her zaman son oktedin İÇİNDE dursun (AND hep anlamlı olsun).
function randomOctetPair() {
  const pick = Math.random();
  if (pick < 0.34) return [10, Math.floor(Math.random() * 256)];
  if (pick < 0.67) return [172, 16 + Math.floor(Math.random() * 16)];
  return [192, 168];
}

function randomExample() {
  const [o1, o2] = randomOctetPair();
  const o3 = Math.floor(Math.random() * 256);
  const o4 = Math.floor(Math.random() * 256);
  const prefix = 25 + Math.floor(Math.random() * 6); // 25..30
  return { octets: [o1, o2, o3, o4], prefix };
}

function buildGrid(root, octets, prefix, revealedOctets) {
  while (root.firstChild) root.removeChild(root.firstChild);

  const rows = [
    { key: "ip", label: "IP" },
    { key: "mask", label: "Maske" },
    { key: "result", label: "AND" },
  ];

  const maskOctets = octets.map((_, o) => maskOctetFor(Math.max(0, Math.min(8, prefix - o * 8))));
  const resultOctets = octets.map((v, o) => v & maskOctets[o]);
  const bitsIp = octets.map(octetBits);
  const bitsMask = maskOctets.map(octetBits);
  const bitsResult = resultOctets.map(octetBits);
  const bitsByRow = { ip: bitsIp, mask: bitsMask, result: bitsResult };

  rows.forEach((row, rIdx) => {
    // IP ve Maske zaten bilinen girdilerdir; her zaman tam gösterilir.
    // Yalnız AND (sonuç) satırı "İleri/Geri" ile oktet oktet hesaplanıp açılır.
    const isResultRow = row.key === "result";
    const y = PAD_TOP + rIdx * (CELL_H + ROW_GAP);
    root.appendChild(
      el(
        "text",
        {
          x: PAD_X,
          y: y + CELL_H / 2 + 1,
          "text-anchor": "start",
          "dominant-baseline": "central",
          fill: "var(--anim-muted)",
          "font-size": "14px",
          "font-weight": "600",
        },
        row.label
      )
    );
    let x = PAD_X + ROW_LABEL_W;
    for (let o = 0; o < 4; o++) {
      const revealed = isResultRow ? o < revealedOctets : true;
      const isActiveOctet = !isResultRow && o === revealedOctets && revealedOctets < 4;
      for (let b = 0; b < 8; b++) {
        const cellX = x + b * CELL_W;
        const bitVal = bitsByRow[row.key][o][b];
        root.appendChild(
          el("rect", {
            x: cellX,
            y,
            width: CELL_W - 2,
            height: CELL_H,
            rx: 3,
            fill: !revealed
              ? "var(--anim-surface)"
              : isResultRow
              ? bitVal
                ? "var(--anim-blue)"
                : "var(--anim-surface)"
              : "var(--anim-panel)",
            stroke: isActiveOctet ? "var(--anim-amber)" : "var(--anim-border-strong)",
            "stroke-width": isActiveOctet ? "2" : "1",
            opacity: revealed ? "1" : "0.35",
          })
        );
        root.appendChild(
          el(
            "text",
            {
              x: cellX + (CELL_W - 2) / 2,
              y: y + CELL_H / 2 + 1,
              "text-anchor": "middle",
              "dominant-baseline": "central",
              fill: revealed && isResultRow && bitVal ? "var(--anim-on-accent)" : "var(--anim-text)",
              "font-size": "13px",
              "font-family": "monospace",
              "font-weight": "600",
              opacity: revealed ? "1" : "0.35",
            },
            revealed ? String(bitVal) : "·"
          )
        );
      }
      if (rIdx === 0) {
        root.appendChild(
          el(
            "text",
            {
              x: x + (8 * CELL_W) / 2 - CELL_W / 2,
              y: PAD_TOP - 14,
              "text-anchor": "middle",
              fill: "var(--anim-muted-2)",
              "font-size": "12px",
            },
            `oktet ${o + 1}`
          )
        );
      }
      x += 8 * CELL_W + OCTET_GAP;
    }
  });

  const resultY = PAD_TOP + 3 * (CELL_H + ROW_GAP) + 4;
  const summary =
    revealedOctets >= 4
      ? `Ağ adresi: ${resultOctets.join(".")}`
      : `${revealedOctets}/4 oktet hesaplandı…`;
  root.appendChild(
    el(
      "text",
      {
        x: PAD_X,
        y: resultY,
        "text-anchor": "start",
        fill: revealedOctets >= 4 ? "var(--anim-green)" : "var(--anim-muted)",
        "font-size": "16px",
        "font-weight": "700",
        "font-family": "monospace",
      },
      summary
    )
  );
}

export function mount(div, dataset) {
  const initialOctets = parseIp(dataset.ip) || parseIp(DEFAULT_IP);
  if (!initialOctets) {
    div.replaceChildren(makeEl("p", "iaa__uyari", `Geçersiz data-ip değeri: "${dataset.ip}". Örnek: 192.168.10.37`));
    console.warn("[ipv4-and-asamali] geçersiz IP:", dataset.ip);
    return;
  }
  let initialPrefix = parseInt(dataset.prefix, 10);
  if (!Number.isInteger(initialPrefix) || initialPrefix < 1 || initialPrefix > 32) initialPrefix = DEFAULT_PREFIX;

  const wrap = makeEl("section", "iaa");
  wrap.setAttribute("aria-label", "IP ve maskenin AND işlemiyle oktet oktet ağ adresine dönüşmesi");

  if (dataset.label) wrap.appendChild(makeEl("h4", "iaa__baslik", dataset.label));
  const ipMaskeLine = makeEl("p", "iaa__ipmaske", `${initialOctets.join(".")} /${initialPrefix}`);
  wrap.appendChild(ipMaskeLine);

  const svgRoot = el("svg", {
    viewBox: `0 0 ${VIEW_W} ${VIEW_H}`,
    width: "100%",
    style: `max-width:${VIEW_W}px; display:block; margin: 6px auto;`,
    role: "img",
    "aria-label": "IP, maske ve AND sonucu bitlerinin oktet oktet karşılaştırılması",
  });
  wrap.appendChild(svgRoot);

  const controls = makeEl("div", "iaa__kontroller");
  controls.setAttribute("role", "group");
  controls.setAttribute("aria-label", "Adım kontrolleri");
  const backBtn = makeEl("button", { type: "button", class: "iaa__btn" }, "◀ Geri");
  const nextBtn = makeEl("button", { type: "button", class: "iaa__btn iaa__btn--vurgu" }, "İleri ▶");
  const resetBtn = makeEl("button", { type: "button", class: "iaa__btn" }, "Sıfırla");
  const randomBtn = makeEl("button", { type: "button", class: "iaa__btn iaa__btn--rastgele" }, "🎲 Rastgele örnek");
  controls.append(backBtn, nextBtn, resetBtn, randomBtn);
  wrap.appendChild(controls);

  const state = { octets: initialOctets, prefix: initialPrefix, step: 0 };

  function render() {
    buildGrid(svgRoot, state.octets, state.prefix, state.step);
    ipMaskeLine.textContent = `${state.octets.join(".")} /${state.prefix}`;
    backBtn.disabled = state.step <= 0;
    nextBtn.disabled = state.step >= 4;
  }

  nextBtn.addEventListener("click", () => {
    state.step = Math.min(4, state.step + 1);
    render();
  });
  backBtn.addEventListener("click", () => {
    state.step = Math.max(0, state.step - 1);
    render();
  });
  resetBtn.addEventListener("click", () => {
    state.step = 0;
    render();
  });
  randomBtn.addEventListener("click", () => {
    const next = randomExample();
    state.octets = next.octets;
    state.prefix = next.prefix;
    state.step = 0;
    render();
  });

  render();
  div.replaceChildren(wrap);
}
