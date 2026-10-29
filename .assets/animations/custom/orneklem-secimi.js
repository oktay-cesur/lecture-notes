import { makeEl, makeSvg } from "../core/dom.js";
// orneklem-secimi.js — Evrenden örneklem çekme: rastgele seçim ile tek bölgeden seçim
//
// Kullanım:
//   <div data-anim="custom" data-src="orneklem-secimi.js" data-css="orneklem-secimi.css"></div>
//
// Öznitelikler (isteğe bağlı):
//   data-n     : örneklem büyüklüğü (5–80, varsayılan 20)
//   data-seed  : tohum (tam sayı, varsayılan 7); aynı tohum aynı evreni ve aynı çekiliş sırasını verir
//   data-label : başlık metni
//
// Evren 20×20 = 400 kişiden oluşur; her kişinin 0–100 arası bir puanı vardır.
// Sol alt köşedeki "kolay ulaşılan bölge"de puanlar sistematik olarak düşüktür.
// Her çekilişte örneklem ortalaması alttaki sayı doğrusuna işlenir; iki yöntemin
// ortalamaları ayrı satırlarda birikir. Böylece rastgele seçimin evren ortalaması
// çevresinde oynadığı, bölgeden seçimin ise hep aynı yöne kaydığı görülür.

const COLS = 20;
const ROWS = 20;
const CELL = 16;
const GRID_X = 10;
const GRID_Y = 10;
const ZONE = { c0: 0, c1: 8, r0: 10, r1: 20 }; // [c0,c1) × [r0,r1)
const LINE_X0 = 30;
const LINE_X1 = 330;
const VIEW_W = 340;

function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function normal(rng) {
  const u = Math.max(rng(), 1e-9);
  const v = rng();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function inZone(i) {
  const c = i % COLS;
  const r = Math.floor(i / COLS);
  return c >= ZONE.c0 && c < ZONE.c1 && r >= ZONE.r0 && r < ZONE.r1;
}

function buildPopulation(rng) {
  const values = [];
  for (let i = 0; i < COLS * ROWS; i++) {
    const base = inZone(i) ? 38 : 62;
    values.push(Math.max(0, Math.min(100, Math.round(base + 11 * normal(rng)))));
  }
  return values;
}

function pick(rng, pool, n) {
  const arr = pool.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, Math.min(n, arr.length));
}

const mean = (xs) => xs.reduce((a, b) => a + b, 0) / xs.length;
const fmt = (x) => x.toFixed(1).replace(".", ",");
const xOf = (v) => LINE_X0 + (v / 100) * (LINE_X1 - LINE_X0);

export function mount(div, dataset = div.dataset) {
  let n = Number.parseInt(dataset.n ?? "20", 10);
  let seed = Number.parseInt(dataset.seed ?? "7", 10);
  if (!Number.isFinite(n) || n < 5 || n > 80) {
    div.replaceChildren(makeEl("p", "orn-sec__uyari", `Geçersiz data-n: "${dataset.n}". 5 ile 80 arasında bir tam sayı olmalı.`));
    console.warn("[orneklem-secimi] geçersiz data-n:", dataset.n);
    return;
  }
  if (!Number.isFinite(seed)) seed = 7;

  const popRng = mulberry32(seed);
  const values = buildPopulation(popRng);
  const popMean = mean(values);
  const zoneIdx = values.map((_, i) => i).filter(inZone);
  const allIdx = values.map((_, i) => i);

  let rng = mulberry32(seed * 7919 + 1);
  let selected = new Set();
  let method = "rastgele";
  let history = { rastgele: [], bolge: [] };
  let last = null;

  const root = makeEl("div", "orn-sec");
  root.setAttribute("aria-label", "Evrenden örneklem çekme animasyonu");
  if (dataset.label) root.append(makeEl("h4", "orn-sec__baslik", dataset.label));

  // Kontroller
  const controls = makeEl("div", "orn-sec__kontroller");
  const methodBox = makeEl("div", { class: "orn-sec__yontem", role: "radiogroup", "aria-label": "Seçim yöntemi" });
  const btnRand = makeEl("button", { type: "button", class: "orn-sec__btn", "aria-pressed": "true" }, "Rastgele seçim");
  const btnZone = makeEl("button", { type: "button", class: "orn-sec__btn", "aria-pressed": "false" }, "Kolay ulaşılan bölgeden");
  methodBox.append(btnRand, btnZone);
  const btnDraw = makeEl("button", { type: "button", class: "orn-sec__btn orn-sec__btn--ana" }, "Örneklem çek");
  const btnReset = makeEl("button", { type: "button", class: "orn-sec__btn" }, "Sıfırla");
  const sizeLabel = makeEl("label", "orn-sec__etiket", "Örneklem büyüklüğü ");
  const sizeSel = makeEl("select", { class: "orn-sec__secim", "aria-label": "Örneklem büyüklüğü" });
  const sizes = [...new Set([5, 10, 20, 40, 80, n])].sort((a, b) => a - b);
  for (const s of sizes) {
    const opt = makeEl("option", { value: s }, String(s));
    if (s === n) opt.selected = true;
    sizeSel.append(opt);
  }
  sizeLabel.append(sizeSel);
  controls.append(methodBox, sizeLabel, btnDraw, btnReset);

  // Evren ızgarası
  const gridH = GRID_Y * 2 + ROWS * CELL;
  const gridW = GRID_X * 2 + COLS * CELL;
  const gridSvg = makeSvg("svg", { viewBox: `0 0 ${gridW} ${gridH + 16}`, role: "img", "aria-label": "Dört yüz kişilik evren; koyu noktalar yüksek puanı gösterir" });
  gridSvg.classList.add("orn-sec__izgara");
  const dots = values.map((v, i) => {
    const c = i % COLS;
    const r = Math.floor(i / COLS);
    const pct = Math.max(8, Math.min(100, Math.round(1.5 * v - 22)));
    const dot = makeSvg("circle", {
      cx: GRID_X + c * CELL + CELL / 2,
      cy: GRID_Y + r * CELL + CELL / 2,
      r: 5,
      fill: `color-mix(in srgb, var(--anim-blue) ${pct}%, var(--anim-bg))`,
      stroke: "none"
    });
    gridSvg.append(dot);
    return dot;
  });
  gridSvg.append(
    makeSvg("rect", {
      x: GRID_X + ZONE.c0 * CELL + 1,
      y: GRID_Y + ZONE.r0 * CELL + 1,
      width: (ZONE.c1 - ZONE.c0) * CELL - 2,
      height: (ZONE.r1 - ZONE.r0) * CELL - 2,
      fill: "none",
      stroke: "var(--anim-red)",
      "stroke-width": 1.5,
      "stroke-dasharray": "5,3",
      rx: 4
    }),
    makeSvg("text", { x: GRID_X, y: gridH + 12, "font-size": 11, fill: "var(--anim-muted)" }, "Kesikli çerçeve: kolay ulaşılan bölge (puanlar burada düşük)")
  );

  // Sayı doğrusu
  const lineSvg = makeSvg("svg", { viewBox: `0 0 ${VIEW_W} 150`, role: "img", "aria-label": "Örneklem ortalamalarının sayı doğrusu üzerindeki yerleri" });
  lineSvg.classList.add("orn-sec__dogru");
  const axisY = 118;
  lineSvg.append(
    makeSvg("line", { x1: LINE_X0, y1: axisY, x2: LINE_X1, y2: axisY, stroke: "var(--anim-border-strong)", "stroke-width": 1.5 })
  );
  for (let t = 0; t <= 100; t += 20) {
    lineSvg.append(
      makeSvg("line", { x1: xOf(t), y1: axisY, x2: xOf(t), y2: axisY + 5, stroke: "var(--anim-border-strong)" }),
      makeSvg("text", { x: xOf(t), y: axisY + 18, "font-size": 11, "text-anchor": "middle", fill: "var(--anim-muted)" }, String(t))
    );
  }
  lineSvg.append(
    makeSvg("line", { x1: xOf(popMean), y1: 8, x2: xOf(popMean), y2: axisY, stroke: "var(--anim-green)", "stroke-width": 2, "stroke-dasharray": "4,3" }),
    makeSvg("text", { x: xOf(popMean) + 4, y: 16, "font-size": 11, fill: "var(--anim-green)" }, `Evren ortalaması ${fmt(popMean)}`),
    makeSvg("text", { x: 2, y: 52, "font-size": 10, fill: "var(--anim-text-2)" }, "Rastgele"),
    makeSvg("text", { x: 2, y: 92, "font-size": 10, fill: "var(--anim-text-2)" }, "Bölge")
  );
  const marks = makeSvg("g");
  lineSvg.append(marks);

  const status = makeEl("p", { class: "orn-sec__durum", "aria-live": "polite" });

  function drawMarks() {
    marks.replaceChildren();
    const rows = { rastgele: 44, bolge: 84 };
    for (const key of Object.keys(history)) {
      const counts = new Map();
      history[key].forEach((m, idx) => {
        const bin = Math.round(m);
        const k = counts.get(bin) ?? 0;
        counts.set(bin, k + 1);
        const isLast = last && last.method === key && idx === history[key].length - 1;
        const y = rows[key] - Math.min(k, 3) * 7;
        if (key === "rastgele") {
          marks.append(makeSvg("circle", { cx: xOf(m), cy: y, r: 3.5, fill: isLast ? "var(--anim-amber)" : "var(--anim-blue)" }));
        } else {
          marks.append(makeSvg("rect", { x: xOf(m) - 3.5, y: y - 3.5, width: 7, height: 7, fill: isLast ? "var(--anim-amber)" : "var(--anim-red)" }));
        }
      });
    }
  }

  function render() {
    dots.forEach((d, i) => {
      const on = selected.has(i);
      d.setAttribute("r", on ? 6.5 : 5);
      d.setAttribute("stroke", on ? "var(--anim-amber)" : "none");
      d.setAttribute("stroke-width", on ? 2.5 : 0);
    });
    btnRand.setAttribute("aria-pressed", String(method === "rastgele"));
    btnZone.setAttribute("aria-pressed", String(method === "bolge"));
    drawMarks();
    if (!last) {
      status.textContent = `Bir yöntem seçip "Örneklem çek" düğmesine basın. Her çekilişte ${n} kişi seçilir.`;
    } else {
      const name = last.method === "rastgele" ? "Rastgele seçim" : "Bölgeden seçim";
      status.textContent = `${name}: ${last.size} kişinin ortalaması ${fmt(last.mean)} · evren ortalaması ${fmt(popMean)} · fark ${fmt(last.mean - popMean)}`;
    }
  }

  function draw() {
    const pool = method === "rastgele" ? allIdx : zoneIdx;
    const s = pick(rng, pool, n);
    selected = new Set(s);
    const m = mean(s.map((i) => values[i]));
    history[method].push(m);
    last = { method, mean: m, size: s.length };
    render();
  }

  btnRand.addEventListener("click", () => { method = "rastgele"; render(); });
  btnZone.addEventListener("click", () => { method = "bolge"; render(); });
  btnDraw.addEventListener("click", draw);
  function reset() {
    rng = mulberry32(seed * 7919 + 1);
    selected = new Set();
    history = { rastgele: [], bolge: [] };
    last = null;
    render();
  }
  btnReset.addEventListener("click", reset);
  sizeSel.addEventListener("change", () => {
    n = Number.parseInt(sizeSel.value, 10);
    reset();
  });

  const body = makeEl("div", "orn-sec__govde");
  body.append(gridSvg, lineSvg);
  root.append(controls, body, status);
  div.replaceChildren(root);
  render();
}
