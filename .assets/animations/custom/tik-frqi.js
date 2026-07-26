const SVG_NS = "http://www.w3.org/2000/svg";

const COLORS = {
  bg: "#0f172a",
  panel: "#111827",
  panel2: "#1e293b",
  text: "#e2e8f0",
  strong: "#f8fafc",
  muted: "#94a3b8",
  border: "#334155",
  blue: "#60a5fa",
  cyan: "#38bdf8",
  teal: "#2dd4bf",
  amber: "#f59e0b",
  rose: "#f87171",
  green: "#22c55e",
  purple: "#a78bfa",
  red: "#ef4444"
};

const CLASS_META = {
  portable: { label: "Taşınabilir", color: COLORS.green },
  fragile: { label: "Kırılgan", color: COLORS.amber },
  unsuitable: { label: "Uygunsuz", color: COLORS.rose }
};

const PATCHES = [
  {
    id: "P1",
    name: "Tam siyah",
    pixels: [0, 0, 0, 0],
    zero: 4,
    h: 0.0866,
    cost: 0.88,
    depth: 21,
    twoQ: 15,
    klass: "portable"
  },
  {
    id: "P2",
    name: "Uniform beyaz",
    pixels: [255, 255, 255, 255],
    zero: 0,
    h: 0.2986,
    cost: 5.17,
    depth: 124,
    twoQ: 53,
    klass: "unsuitable"
  },
  {
    id: "P3",
    name: "Tek parlak",
    pixels: [255, 0, 0, 0],
    zero: 3,
    h: 0.2819,
    cost: 1.42,
    depth: 34,
    twoQ: 11,
    klass: "fragile"
  },
  {
    id: "P4",
    name: "Yatay kenar",
    pixels: [255, 255, 0, 0],
    zero: 2,
    h: 0.2240,
    cost: 2.79,
    depth: 67,
    twoQ: 31,
    klass: "fragile"
  },
  {
    id: "P5",
    name: "Dikey kenar",
    pixels: [255, 0, 255, 0],
    zero: 2,
    h: 0.2827,
    cost: 3.12,
    depth: 75,
    twoQ: 25,
    klass: "fragile"
  },
  {
    id: "P6",
    name: "Dama",
    pixels: [255, 0, 0, 255],
    zero: 2,
    h: 0.3034,
    cost: 2.96,
    depth: 71,
    twoQ: 31,
    klass: "unsuitable"
  },
  {
    id: "P7",
    name: "Zayıf kontrast",
    pixels: [120, 130, 125, 135],
    zero: 0,
    h: 0.0166,
    cost: 6.21,
    depth: 149,
    twoQ: 53,
    klass: "unsuitable"
  }
];

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function svgEl(tag, attrs = {}, text) {
  const node = document.createElementNS(SVG_NS, tag);
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, String(value)));
  if (text != null) node.textContent = text;
  return node;
}

function clear(root) {
  while (root.firstChild) root.removeChild(root.firstChild);
}

function title(root, main, sub) {
  root.appendChild(el("div", "tik-frqi-title", main));
  if (sub) root.appendChild(el("div", "tik-frqi-subtitle", sub));
}

function readout(root, text) {
  const box = el("div", "tik-frqi-readout", text);
  root.appendChild(box);
  return box;
}

function controls(root, items, onChange) {
  const row = el("div", "tik-frqi-controls");
  const buttons = items.map((item, idx) => {
    const btn = el("button", "tik-frqi-btn", item.label);
    btn.type = "button";
    btn.setAttribute("aria-pressed", idx === 0 ? "true" : "false");
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.setAttribute("aria-pressed", b === btn ? "true" : "false"));
      onChange(item, idx);
    });
    row.appendChild(btn);
    return btn;
  });
  root.appendChild(row);
  return { row, buttons };
}

function makeSvg(viewBox, extraClass = "") {
  return svgEl("svg", {
    class: `tik-frqi-svg ${extraClass}`.trim(),
    viewBox,
    role: "img"
  });
}

function rectBox(svg, x, y, w, h, color, id) {
  const g = svgEl("g", { class: "tik-frqi-flow-box", "data-id": id || "" });
  g.appendChild(svgEl("rect", {
    x, y, width: w, height: h, rx: 10,
    fill: color, "fill-opacity": 0.16,
    stroke: color, "stroke-width": 2
  }));
  svg.appendChild(g);
  return g;
}

function addText(parent, x, y, text, attrs = {}) {
  const node = svgEl("text", {
    x, y,
    fill: attrs.fill || COLORS.text,
    "font-size": attrs.size || 16,
    "font-family": "system-ui, sans-serif",
    "font-weight": attrs.weight || 500,
    "text-anchor": attrs.anchor || "middle"
  }, text);
  parent.appendChild(node);
  return node;
}

function addMultiText(parent, x, y, lines, attrs = {}) {
  const node = svgEl("text", {
    x, y,
    fill: attrs.fill || COLORS.text,
    "font-size": attrs.size || 14,
    "font-family": "system-ui, sans-serif",
    "font-weight": attrs.weight || 500,
    "text-anchor": attrs.anchor || "middle"
  });
  lines.forEach((line, idx) => {
    const tspan = svgEl("tspan", { x, dy: idx === 0 ? 0 : (attrs.dy || 18) }, line);
    node.appendChild(tspan);
  });
  parent.appendChild(node);
  return node;
}

function addArrow(svg, x1, y1, x2, y2, color = COLORS.muted, klass = "") {
  const defsId = "tik-arrow";
  if (!svg.querySelector(`#${defsId}`)) {
    const defs = svgEl("defs");
    const marker = svgEl("marker", {
      id: defsId,
      viewBox: "0 0 10 10",
      refX: 9,
      refY: 5,
      markerWidth: 7,
      markerHeight: 7,
      orient: "auto-start-reverse"
    });
    marker.appendChild(svgEl("path", { d: "M 0 0 L 10 5 L 0 10 z", fill: color }));
    defs.appendChild(marker);
    svg.appendChild(defs);
  }
  svg.appendChild(svgEl("line", {
    x1, y1, x2, y2,
    class: klass,
    stroke: color,
    "stroke-width": 2.5,
    "marker-end": `url(#${defsId})`
  }));
}

function grayFor(value) {
  const v = Math.max(0, Math.min(255, value));
  return `rgb(${v}, ${v}, ${v})`;
}

function readablePixelText(value) {
  return value > 150 ? COLORS.bg : COLORS.text;
}

function classify(patch) {
  return CLASS_META[patch.klass];
}

function setActiveById(root, ids) {
  const set = new Set(ids);
  root.querySelectorAll("[data-id]").forEach((node) => {
    node.classList.toggle("is-active", set.has(node.getAttribute("data-id")));
  });
}

function mountPatchFamily(root) {
  title(root, "2×2 Görüntü Parçası Ailesi", "Yedi parça, sıfır piksel sayısı ve konum kalıbı birlikte okunacak şekilde etkileşimli hale getirildi.");
  const grid = el("div", "tik-frqi-patch-grid");
  const cards = [];

  PATCHES.forEach((patch) => {
    const card = el("button", "tik-frqi-patch-card");
    card.type = "button";
    card.appendChild(el("div", "tik-frqi-patch-id", patch.id));
    card.appendChild(el("div", "tik-frqi-patch-name", patch.name));
    const patchBox = el("div", "tik-frqi-patch");
    patch.pixels.forEach((value) => {
      const px = el("div", "tik-frqi-pixel", String(value));
      px.style.background = grayFor(value);
      px.style.color = readablePixelText(value);
      patchBox.appendChild(px);
    });
    card.appendChild(patchBox);
    card.appendChild(el("div", "tik-frqi-patch-meta", `${patch.zero}/4 sıfır · ${classify(patch).label}`));
    card.addEventListener("click", () => activate(patch.id));
    cards.push(card);
    grid.appendChild(card);
  });

  root.appendChild(grid);
  const kpis = el("div", "tik-frqi-kpi-row");
  const kpiZero = kpi("Sıfır piksel", "-");
  const kpiCost = kpi("Maliyet oranı", "-");
  const kpiHell = kpi("Hellinger", "-");
  kpis.append(kpiZero.node, kpiCost.node, kpiHell.node);
  root.appendChild(kpis);
  const info = readout(root, "");

  function activate(id) {
    const patch = PATCHES.find((p) => p.id === id) || PATCHES[0];
    cards.forEach((card, idx) => card.classList.toggle("is-active", PATCHES[idx].id === patch.id));
    const cls = classify(patch);
    kpiZero.value.textContent = `${patch.zero}/4`;
    kpiCost.value.textContent = `${patch.cost.toFixed(2)}×`;
    kpiHell.value.textContent = patch.h.toFixed(4);
    kpiCost.value.style.color = cls.color;
    info.textContent = `${patch.id} (${patch.name}): piksel değerleri [${patch.pixels.join(", ")}], transpilasyon sonrası derinlik ${patch.depth}, 2Q kapı ${patch.twoQ}.`;
  }

  activate("P1");
}

function kpi(label, initial) {
  const node = el("div", "tik-frqi-kpi");
  const value = el("div", "tik-frqi-kpi-value", initial);
  node.append(value, el("div", "tik-frqi-kpi-label", label));
  return { node, value };
}

function mountFrqiTechnical(root) {
  title(root, "2×2 FRQI: Kübit Yapısı ve Açı Kodlama", "Konum register'ı dört piksel adresini; renk register'ı piksel parlaklığından gelen açıyı taşır.");
  const stages = [
    { label: "Register", ids: ["pos", "color"], text: "2 konum kübiti ve 1 renk kübiti ayrılır." },
    { label: "Adres", ids: ["pos", "addr"], text: "Hadamard sonrası dört piksel adresi aynı süperpozisyonda temsil edilir." },
    { label: "Açı", ids: ["pixel", "rot"], text: "Piksel değeri p, theta = p*pi/(255*2) açısına çevrilir." },
    { label: "Durum", ids: ["rot", "state"], text: "Koşullu RY(2theta) rotasyonları FRQI durumunu hazırlar." }
  ];
  controls(root, stages, (item) => {
    setActiveById(svg, item.ids);
    info.textContent = item.text;
  });

  const svg = makeSvg("0 0 980 500");
  root.appendChild(svg);

  const pos = box(svg, 55, 115, 215, 105, COLORS.blue, "pos", "q[1], q[2]", ["Konum register", "2 kübit"]);
  const addr = box(svg, 340, 115, 225, 105, COLORS.blue, "addr", "|00> |01>", ["|10> |11>", "4 piksel adresi"]);
  const color = box(svg, 55, 280, 215, 105, COLORS.green, "color", "q[0]", ["Renk register", "1 kübit"]);
  const pixel = box(svg, 340, 280, 225, 105, COLORS.amber, "pixel", "theta_i", ["p_i*pi/(255*2)", "piksel -> açı"]);
  const rot = box(svg, 650, 195, 160, 105, COLORS.rose, "rot", "RY(2theta_i)", ["Kontrollü rotasyon", "her piksel için"]);
  const state = box(svg, 860, 195, 90, 105, COLORS.green, "state", "|I(theta)>", ["FRQI", "3 kübit"], 12);
  [pos, addr, color, pixel, rot, state].forEach((g) => svg.appendChild(g));
  addArrow(svg, 270, 167, 338, 167, COLORS.blue, "tik-frqi-flow-line");
  addArrow(svg, 270, 332, 338, 332, COLORS.amber, "tik-frqi-flow-line");
  addArrow(svg, 565, 167, 650, 230, COLORS.muted, "tik-frqi-flow-line");
  addArrow(svg, 565, 332, 650, 265, COLORS.muted, "tik-frqi-flow-line");
  addArrow(svg, 810, 247, 858, 247, COLORS.green, "tik-frqi-flow-line");
  addText(svg, 490, 455, "|I(theta)> = 1/2 sum_i (cos(theta_i)|0> + sin(theta_i)|1>) x |i>", { size: 20, fill: COLORS.strong });
  const info = readout(root, stages[0].text);
  setActiveById(svg, stages[0].ids);
}

function box(svg, x, y, w, h, color, id, head, lines, headSize = 16) {
  const g = rectBox(svg, x, y, w, h, color, id);
  addText(g, x + w / 2, y + 36, head, { fill: color, size: headSize, weight: 800 });
  addMultiText(g, x + w / 2, y + 65, lines, { fill: COLORS.text, size: 13, dy: 17 });
  return g;
}

function mountAnalysisPipeline(root) {
  title(root, "Analiz Katmanları: Deney Hattı", "Her katman farklı bir yorum boşluğunu kapatır: referans, gürültü, derleme maliyeti ve gerçek donanım.");
  const stages = [
    { label: "Faz 1", color: COLORS.blue, title: "İdeal\nSimülasyon", body: ["Qiskit Aer", "statevector"], metric: ["Teorik referans", "dağılım"] },
    { label: "Faz 2", color: COLORS.amber, title: "Gürültülü\nSimülasyon", body: ["FakeNairobiV2", "100-5000 shot"], metric: ["Hellinger", "mesafesi"] },
    { label: "Faz 3", color: COLORS.rose, title: "Cihaza\nUyarlama", body: ["transpile()", "FakeNairobi hedef"], metric: ["Derinlik · 2Q", "maliyet oranı"] },
    { label: "Faz 4", color: COLORS.green, title: "Gerçek\nDonanım", body: ["ibm_fez", "SamplerV2"], metric: ["Hellinger", "göreli fark"] }
  ];
  controls(root, stages.map((s) => ({ label: s.label, stage: s })), (item, idx) => activate(idx));
  const svg = makeSvg("0 0 980 430", "tik-frqi-small-svg");
  root.appendChild(svg);
  const groups = [];
  stages.forEach((stage, idx) => {
    const x = 48 + idx * 235;
    const g = rectBox(svg, x, 92, 172, 230, stage.color, `phase-${idx}`);
    g.classList.add("tik-frqi-stage-card");
    addText(g, x + 86, 75, stage.label, { fill: stage.color, size: 15, weight: 800 });
    addMultiText(g, x + 86, 150, stage.title.split("\n"), { fill: stage.color, size: 18, weight: 800, dy: 21 });
    addMultiText(g, x + 86, 210, stage.body, { fill: COLORS.text, size: 13, dy: 18 });
    g.appendChild(svgEl("rect", { x: x + 20, y: 250, width: 132, height: 48, rx: 8, fill: stage.color, "fill-opacity": 0.12, stroke: stage.color }));
    addMultiText(g, x + 86, 270, stage.metric, { fill: COLORS.text, size: 12, dy: 16 });
    svg.appendChild(g);
    groups.push(g);
    if (idx < stages.length - 1) addArrow(svg, x + 177, 207, x + 232, 207, COLORS.muted, "tik-frqi-flow-line");
  });
  svg.appendChild(svgEl("line", { x1: 675, y1: 352, x2: 675, y2: 392, stroke: COLORS.purple, "stroke-width": 2, "stroke-dasharray": "5 5" }));
  addText(svg, 380, 382, "Simülasyon", { fill: COLORS.purple, size: 14 });
  addText(svg, 810, 382, "Gerçek donanım", { fill: COLORS.green, size: 14 });
  const info = readout(root, "");

  function activate(idx) {
    groups.forEach((g, i) => g.classList.toggle("is-active", i === idx));
    const s = stages[idx];
    info.textContent = `${s.label}: ${s.body.join(" · ")} -> ${s.metric.join(" / ")}.`;
  }
  activate(0);
}

function hellinger(p, q) {
  const sum = p.reduce((acc, v, idx) => acc + (Math.sqrt(v) - Math.sqrt(q[idx])) ** 2, 0);
  return Math.sqrt(sum) / Math.sqrt(2);
}

function mountHellinger(root) {
  title(root, "Hellinger Mesafesi", "Slider gürültülü ölçümün ideal dağılımdan ayrışmasını büyütür; orta panel mesafeyi hesaplar.");
  const p = [0.245, 0.245, 0.245, 0.245, 0.005, 0.005, 0.005, 0.005];
  const q = [0.200, 0.190, 0.220, 0.210, 0.060, 0.070, 0.030, 0.020];
  const states = ["000", "010", "100", "110", "001", "011", "101", "111"];
  const control = el("div", "tik-frqi-controls");
  const label = el("label", "", "Gürültü etkisi");
  const range = document.createElement("input");
  range.type = "range";
  range.min = "0";
  range.max = "1";
  range.step = "0.01";
  range.value = "1";
  range.style.width = "280px";
  control.append(label, range);
  root.appendChild(control);

  const svg = makeSvg("0 0 980 520");
  root.appendChild(svg);
  const leftBars = [];
  const rightBars = [];
  chartFrame(svg, 60, 70, 345, 330, "İdeal dağılım P", COLORS.blue);
  chartFrame(svg, 575, 70, 345, 330, "Ölçüm dağılımı Q", COLORS.amber);
  states.forEach((state, idx) => {
    const lx = 85 + idx * 37;
    const rx = 600 + idx * 37;
    const l = svgEl("rect", { x: lx, y: 380, width: 24, height: 0, fill: COLORS.blue, opacity: 0.9 });
    const r = svgEl("rect", { x: rx, y: 380, width: 24, height: 0, fill: COLORS.amber, opacity: 0.9 });
    leftBars.push(l);
    rightBars.push(r);
    svg.append(l, r);
    addText(svg, lx + 12, 415, state, { fill: COLORS.muted, size: 10 });
    addText(svg, rx + 12, 415, state, { fill: COLORS.muted, size: 10 });
  });
  addText(svg, 490, 178, "H(P,Q)", { fill: COLORS.rose, size: 26, weight: 800 });
  addText(svg, 490, 222, "1/sqrt(2) * sqrt(sum_i (sqrt(p_i)-sqrt(q_i))^2)", { fill: COLORS.text, size: 13 });
  addArrow(svg, 435, 275, 545, 275, COLORS.rose, "");
  const hText = addText(svg, 490, 330, "", { fill: COLORS.green, size: 34, weight: 800 });
  const info = readout(root, "");

  function update() {
    const t = Number(range.value);
    const current = p.map((v, idx) => v * (1 - t) + q[idx] * t);
    p.forEach((value, idx) => setBar(leftBars[idx], value));
    current.forEach((value, idx) => setBar(rightBars[idx], value));
    const h = hellinger(p, current);
    hText.textContent = h.toFixed(3);
    info.textContent = `Hellinger = ${h.toFixed(3)}. 0 özdeş dağılım, 1 tamamen ayrışmış dağılım anlamına gelir.`;
  }

  range.addEventListener("input", update);
  update();
}

function chartFrame(svg, x, y, w, h, label, color) {
  svg.appendChild(svgEl("rect", { x, y, width: w, height: h, rx: 8, fill: COLORS.panel, stroke: COLORS.border }));
  addText(svg, x + w / 2, y + 30, label, { fill: color, size: 17, weight: 800 });
  for (let i = 0; i <= 4; i += 1) {
    const yy = y + h - 48 - i * 64;
    svg.appendChild(svgEl("line", { x1: x + 34, y1: yy, x2: x + w - 22, y2: yy, stroke: COLORS.border, "stroke-opacity": 0.55 }));
  }
}

function setBar(rect, value) {
  const h = value * 820;
  rect.setAttribute("height", h.toFixed(1));
  rect.setAttribute("y", (380 - h).toFixed(1));
}

function mountPhase2Hellinger(root) {
  title(root, "Faz 2: Parça Başına Hellinger", "Eşik çizgileri sınıflandırmayı görselleştirir: H < 0.10 taşınabilir, H >= 0.30 uygunsuz.");
  horizontalBarScene(root, {
    max: 0.35,
    valueLabel: (v) => v.toFixed(4),
    xLabel: "Hellinger mesafesi",
    bars: [...PATCHES].sort((a, b) => b.h - a.h).map((p) => ({
      id: p.id,
      label: `${p.id} · ${p.name}`,
      value: p.h,
      color: classify(p).color
    })),
    thresholds: [
      { value: 0.10, label: "0.10", color: COLORS.green },
      { value: 0.30, label: "0.30", color: COLORS.rose }
    ]
  });
}

function mountCostAsymmetry(root) {
  title(root, "Cihaza Uyarlama Maliyet Asimetrisi", "Aynı teorik derinlikten başlayan devreler, içerik ve açı değerleri nedeniyle farklı fiziksel maliyetlere ayrışır.");
  horizontalBarScene(root, {
    max: 6.6,
    valueLabel: (v) => `${v.toFixed(2)}×`,
    xLabel: "Maliyet oranı (D_sonrası / D_öncesi)",
    bars: [...PATCHES].sort((a, b) => a.cost - b.cost).map((p) => ({
      id: p.id,
      label: `${p.id} · ${p.name}`,
      value: p.cost,
      color: classify(p).color
    })),
    thresholds: [
      { value: 1.0, label: "D öncesi", color: COLORS.text },
      { value: 5.0, label: "kaynak riski", color: COLORS.rose }
    ]
  });
}

function horizontalBarScene(root, cfg) {
  const svg = makeSvg("0 0 980 500");
  root.appendChild(svg);
  const left = 230;
  const top = 60;
  const width = 650;
  const rowH = 52;
  const bars = [];
  svg.appendChild(svgEl("rect", { x: 45, y: 34, width: 890, height: 420, rx: 8, fill: COLORS.panel, stroke: COLORS.border }));
  cfg.thresholds.forEach((th) => {
    const x = left + (th.value / cfg.max) * width;
    svg.appendChild(svgEl("line", { x1: x, y1: 52, x2: x, y2: 430, stroke: th.color, "stroke-width": 2, "stroke-dasharray": "5 5" }));
    addText(svg, x + 4, 48, th.label, { fill: th.color, size: 12, anchor: "start" });
  });
  cfg.bars.forEach((bar, idx) => {
    const y = top + idx * rowH;
    addText(svg, left - 18, y + 24, bar.label, { fill: COLORS.text, size: 13, anchor: "end" });
    const bg = svgEl("rect", { x: left, y: y + 8, width, height: 27, rx: 5, fill: COLORS.panel2 });
    const fg = svgEl("rect", { x: left, y: y + 8, width: 0, height: 27, rx: 5, fill: bar.color, opacity: 0.9 });
    const label = addText(svg, left + 4, y + 29, cfg.valueLabel(bar.value), { fill: COLORS.strong, size: 13, anchor: "start", weight: 800 });
    bars.push({ fg, full: (bar.value / cfg.max) * width, label, labelX: left + (bar.value / cfg.max) * width + 8 });
    svg.append(bg, fg);
  });
  addText(svg, left + width / 2, 470, cfg.xLabel, { fill: COLORS.muted, size: 14 });
  window.requestAnimationFrame(() => {
    bars.forEach((bar, idx) => {
      window.setTimeout(() => {
        bar.fg.setAttribute("width", bar.full.toFixed(1));
        bar.label.setAttribute("x", Math.min(bar.labelX, left + width - 56).toFixed(1));
      }, idx * 75);
    });
  });
}

function mountZeroCost(root) {
  title(root, "Faz 3: Sıfır Piksel Sayısı ve Maliyet Eğilimi", "Sıfır piksel sayısı arttıkça derleme sonrası derinlik düşme eğilimindedir; P4/P5/P6 konum kalıbı etkisini gösterir.");
  scatterScene(root, {
    xLabel: "Sıfır piksel sayısı",
    yLabel: "Transpilasyon sonrası derinlik",
    xMin: -0.3,
    xMax: 4.4,
    yMin: 0,
    yMax: 165,
    points: PATCHES.map((p) => ({
      id: p.id,
      label: p.id,
      x: p.zero,
      y: p.depth,
      color: classify(p).color,
      shape: p.id === "P7" ? "star" : p.id === "P6" ? "triangle" : "circle"
    })),
    guides: [
      { text: "Spearman rho ≈ -0.95", x: 3.0, y: 152, color: COLORS.blue },
      { text: "Aynı sıfır sayısı: P4/P5/P6", x: 0.7, y: 112, color: COLORS.amber }
    ],
    trend: true
  });
}

function mountRiskScatter(root) {
  title(root, "Hellinger Mesafesi ve Kaynak Maliyeti", "P6 fidelity riski, P7 kaynak riski üzerinden ayrışır; maliyet ve doğruluk tek eksenli okunmaz.");
  scatterScene(root, {
    xLabel: "Maliyet oranı",
    yLabel: "Hellinger mesafesi",
    xMin: 0,
    xMax: 6.7,
    yMin: 0,
    yMax: 0.34,
    points: PATCHES.map((p) => ({
      id: p.id,
      label: p.id,
      x: p.cost,
      y: p.h,
      color: classify(p).color,
      shape: p.id === "P7" ? "star" : p.id === "P6" ? "square" : "circle"
    })),
    thresholds: [
      { axis: "x", value: 5.0, color: COLORS.rose, label: "kaynak riski" },
      { axis: "y", value: 0.30, color: COLORS.rose, label: "fidelity riski" },
      { axis: "y", value: 0.10, color: COLORS.green, label: "taşınabilir" }
    ],
    guides: [
      { text: "P6: fidelity riski", x: 3.2, y: 0.315, color: COLORS.rose },
      { text: "P7: kaynak riski", x: 5.35, y: 0.05, color: COLORS.rose }
    ]
  });
}

function scatterScene(root, cfg) {
  const svg = makeSvg("0 0 980 540");
  root.appendChild(svg);
  const plot = { x: 115, y: 45, w: 745, h: 390 };
  svg.appendChild(svgEl("rect", { x: 58, y: 28, width: 875, height: 448, rx: 8, fill: COLORS.panel, stroke: COLORS.border }));
  const sx = (x) => plot.x + ((x - cfg.xMin) / (cfg.xMax - cfg.xMin)) * plot.w;
  const sy = (y) => plot.y + plot.h - ((y - cfg.yMin) / (cfg.yMax - cfg.yMin)) * plot.h;
  for (let i = 0; i <= 5; i += 1) {
    const xx = plot.x + (i / 5) * plot.w;
    const yy = plot.y + (i / 5) * plot.h;
    svg.appendChild(svgEl("line", { x1: xx, y1: plot.y, x2: xx, y2: plot.y + plot.h, stroke: COLORS.border, "stroke-opacity": 0.35 }));
    svg.appendChild(svgEl("line", { x1: plot.x, y1: yy, x2: plot.x + plot.w, y2: yy, stroke: COLORS.border, "stroke-opacity": 0.35 }));
  }
  svg.appendChild(svgEl("line", { x1: plot.x, y1: plot.y + plot.h, x2: plot.x + plot.w, y2: plot.y + plot.h, stroke: COLORS.muted }));
  svg.appendChild(svgEl("line", { x1: plot.x, y1: plot.y, x2: plot.x, y2: plot.y + plot.h, stroke: COLORS.muted }));
  if (cfg.thresholds) {
    cfg.thresholds.forEach((th) => {
      if (th.axis === "x") {
        const x = sx(th.value);
        svg.appendChild(svgEl("line", { x1: x, y1: plot.y, x2: x, y2: plot.y + plot.h, stroke: th.color, "stroke-width": 2, "stroke-dasharray": "5 5" }));
        addText(svg, x + 4, plot.y + 18, th.label, { fill: th.color, size: 11, anchor: "start" });
      } else {
        const y = sy(th.value);
        svg.appendChild(svgEl("line", { x1: plot.x, y1: y, x2: plot.x + plot.w, y2: y, stroke: th.color, "stroke-width": 2, "stroke-dasharray": "5 5" }));
        addText(svg, plot.x + plot.w - 6, y - 7, th.label, { fill: th.color, size: 11, anchor: "end" });
      }
    });
  }
  if (cfg.trend) {
    const sorted = [...cfg.points].sort((a, b) => a.x - b.x);
    svg.appendChild(svgEl("line", {
      x1: sx(sorted[0].x),
      y1: sy(sorted[0].y + 10),
      x2: sx(sorted[sorted.length - 1].x),
      y2: sy(10),
      stroke: COLORS.purple,
      "stroke-width": 2,
      "stroke-dasharray": "6 5"
    }));
  }
  cfg.points.forEach((p, idx) => {
    const x = sx(p.x);
    const y = sy(p.y);
    const point = pointShape(p.shape, x, y, p.color);
    point.classList.add("tik-frqi-point");
    if (p.id === "P6" || p.id === "P7") point.classList.add("is-emph");
    point.style.opacity = "0";
    svg.appendChild(point);
    addText(svg, x + 12, y - 8, p.label, { fill: p.color, size: 13, weight: 800, anchor: "start" });
    window.setTimeout(() => { point.style.opacity = "1"; }, 120 + idx * 85);
  });
  if (cfg.guides) {
    cfg.guides.forEach((g) => {
      const boxNode = svgEl("rect", { x: sx(g.x) - 4, y: sy(g.y) - 22, width: 220, height: 28, rx: 6, fill: COLORS.bg, stroke: g.color, "stroke-opacity": 0.9 });
      svg.appendChild(boxNode);
      addText(svg, sx(g.x) + 105, sy(g.y) - 4, g.text, { fill: g.color, size: 12, weight: 800 });
    });
  }
  addText(svg, plot.x + plot.w / 2, 515, cfg.xLabel, { fill: COLORS.muted, size: 14 });
  const yLabel = addText(svg, 28, plot.y + plot.h / 2, cfg.yLabel, { fill: COLORS.muted, size: 14 });
  yLabel.setAttribute("transform", `rotate(-90 28 ${plot.y + plot.h / 2})`);
}

function pointShape(shape, x, y, color) {
  if (shape === "triangle") {
    return svgEl("polygon", { points: `${x},${y - 12} ${x - 12},${y + 10} ${x + 12},${y + 10}`, fill: color, stroke: COLORS.strong, "stroke-width": 1.2 });
  }
  if (shape === "square") {
    return svgEl("rect", { x: x - 10, y: y - 10, width: 20, height: 20, rx: 4, fill: color, stroke: COLORS.strong, "stroke-width": 1.2 });
  }
  if (shape === "star") {
    return svgEl("path", { d: starPath(x, y, 14, 6, 5), fill: color, stroke: COLORS.strong, "stroke-width": 1.2 });
  }
  return svgEl("circle", { cx: x, cy: y, r: 10, fill: color, stroke: COLORS.strong, "stroke-width": 1.2 });
}

function starPath(cx, cy, outer, inner, points) {
  const parts = [];
  for (let i = 0; i < points * 2; i += 1) {
    const r = i % 2 === 0 ? outer : inner;
    const a = -Math.PI / 2 + (i * Math.PI) / points;
    const x = cx + Math.cos(a) * r;
    const y = cy + Math.sin(a) * r;
    parts.push(`${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return `${parts.join(" ")} Z`;
}

function mountMcryCircuit(root) {
  title(root, "2×2 FRQI Encoding Devresi", "Hazırlık Hadamard kapılarıyla başlar; her piksel adresi için koşullu RY rotasyonu uygulanır.");
  const stages = [
    { label: "Hazırlık", ids: ["h1", "h2"], text: "Konum register'ı H kapılarıyla dört adresin süperpozisyonuna alınır." },
    { label: "p00", ids: ["x00a", "x00b", "ry00"], text: "00 adresi için kontrol işaretleri X kapılarıyla uyarlanır, ardından RY uygulanır." },
    { label: "p01", ids: ["x01", "ry01"], text: "01 adresindeki piksel için renk kübiti döndürülür." },
    { label: "p10", ids: ["x10", "ry10"], text: "10 adresi için koşullu rotasyon uygulanır." },
    { label: "p11", ids: ["ry11"], text: "11 adresi için son koşullu rotasyon devreyi tamamlar." }
  ];
  controls(root, stages, (item) => {
    setActiveById(svg, item.ids);
    info.textContent = item.text;
  });
  const svg = makeSvg("0 0 1040 360", "tik-frqi-small-svg");
  root.appendChild(svg);
  const ys = [80, 170, 260];
  ["q0 renk", "q1 konum", "q2 konum"].forEach((label, idx) => {
    addText(svg, 42, ys[idx] + 5, label, { fill: COLORS.muted, size: 14, anchor: "start" });
    svg.appendChild(svgEl("line", { x1: 130, y1: ys[idx], x2: 1000, y2: ys[idx], stroke: COLORS.text, "stroke-opacity": 0.72, "stroke-width": 2 }));
  });
  circuitGate(svg, "h1", 175, ys[1], "H", COLORS.rose);
  circuitGate(svg, "h2", 175, ys[2], "H", COLORS.rose);
  circuitGate(svg, "x00a", 260, ys[1], "X", COLORS.blue);
  circuitGate(svg, "x00b", 260, ys[2], "X", COLORS.blue);
  controlledRy(svg, "ry00", 360, ys, "RY\np00");
  circuitGate(svg, "x01", 455, ys[1], "X", COLORS.blue);
  controlledRy(svg, "ry01", 555, ys, "RY\np01");
  circuitGate(svg, "x10", 650, ys[2], "X", COLORS.blue);
  controlledRy(svg, "ry10", 750, ys, "RY\np10");
  controlledRy(svg, "ry11", 905, ys, "RY\np11");
  [315, 505, 700, 855].forEach((x) => {
    svg.appendChild(svgEl("line", { x1: x, y1: 48, x2: x, y2: 292, stroke: COLORS.muted, "stroke-opacity": 0.5, "stroke-width": 4, "stroke-dasharray": "8 7" }));
  });
  const info = readout(root, stages[0].text);
  setActiveById(svg, stages[0].ids);
}

function circuitGate(svg, id, x, y, label, color) {
  const g = svgEl("g", { class: "tik-frqi-circuit-gate", "data-id": id });
  g.appendChild(svgEl("rect", { x: x - 20, y: y - 20, width: 40, height: 40, rx: 5, fill: color, stroke: color }));
  addText(g, x, y + 5, label, { fill: COLORS.strong, size: 15, weight: 800 });
  svg.appendChild(g);
}

function controlledRy(svg, id, x, ys, label) {
  const g = svgEl("g", { class: "tik-frqi-circuit-gate", "data-id": id });
  g.appendChild(svgEl("line", { x1: x, y1: ys[0], x2: x, y2: ys[2], stroke: COLORS.rose, "stroke-width": 2.2 }));
  g.appendChild(svgEl("circle", { cx: x, cy: ys[1], r: 7, fill: COLORS.rose }));
  g.appendChild(svgEl("circle", { cx: x, cy: ys[2], r: 7, fill: COLORS.rose }));
  g.appendChild(svgEl("rect", { x: x - 24, y: ys[0] - 29, width: 48, height: 44, rx: 5, fill: COLORS.rose, stroke: COLORS.rose }));
  addMultiText(g, x, ys[0] - 11, label.split("\n"), { fill: COLORS.strong, size: 11, weight: 800, dy: 13 });
  svg.appendChild(g);
}

function mountQiskitTranspilation(root) {
  title(root, "Qiskit Transpilasyon: Soyut Devreden Fiziksel Devreye", "Transpiler kapı seti, bağlantı haritası ve optimizasyon kurallarını birlikte uygular.");
  const stages = [
    { label: "Soyut devre", ids: ["abstract"], text: "FRQI devresi mantıksal kapılarla yazılır; henüz hedef donanım kısıtı yoktur." },
    { label: "Hedef cihaz", ids: ["target"], text: "Backend kapı seti ve bağlantı haritası derleme problemine eklenir." },
    { label: "Ayrıştırma", ids: ["decompose"], text: "MCRY gibi yüksek seviye kapılar temel kapılara ayrıştırılır." },
    { label: "Maliyet", ids: ["cost"], text: "SWAP ve iki-kübitli kapılar derinlik ve hata maliyetini artırır." }
  ];
  controls(root, stages, (item) => {
    setActiveById(svg, item.ids);
    info.textContent = item.text;
  });
  const svg = makeSvg("0 0 1040 430", "tik-frqi-small-svg");
  root.appendChild(svg);
  box(svg, 55, 95, 245, 190, COLORS.blue, "abstract", "Teorik devre", ["H, X, MCRY", "3 mantıksal kübit"]);
  box(svg, 405, 70, 230, 110, COLORS.purple, "target", "Backend hedefi", ["kapı seti", "bağlantı haritası"]);
  box(svg, 405, 230, 230, 110, COLORS.amber, "decompose", "Transpile", ["MCRY -> CX/SX/Rz", "routing + optimizasyon"]);
  box(svg, 745, 95, 245, 190, COLORS.rose, "cost", "Fiziksel devre", ["derinlik artışı", "2Q kapı maliyeti"]);
  addArrow(svg, 300, 190, 405, 135, COLORS.muted, "tik-frqi-flow-line");
  addArrow(svg, 300, 190, 405, 285, COLORS.muted, "tik-frqi-flow-line");
  addArrow(svg, 635, 285, 745, 190, COLORS.muted, "tik-frqi-flow-line");
  addText(svg, 520, 392, "Açı 0 ise kapı elenebilir; bağlantı yoksa SWAP eklenir.", { fill: COLORS.text, size: 16 });
  const info = readout(root, stages[0].text);
  setActiveById(svg, stages[0].ids);
}

function mountOverview(root) {
  title(root, "TİK FRQI Animasyon Seti", "data-scene ile çağrılabilen sahneler: patch-family, frqi-technical, analysis-pipeline, hellinger, phase2-hellinger, cost-asymmetry, zero-cost, risk-scatter, mcry-circuit, qiskit-transpilation.");
  readout(root, "Örnek: <div data-anim=\"custom\" data-src=\"tik-frqi.js\" data-css=\"tik-frqi.css\" data-scene=\"hellinger\"></div>");
}

const SCENES = {
  "patch-family": mountPatchFamily,
  "seven-2x2-images": mountPatchFamily,
  "frqi-technical": mountFrqiTechnical,
  "g1-frqi-teknik": mountFrqiTechnical,
  "analysis-pipeline": mountAnalysisPipeline,
  "g2-analiz-hatti": mountAnalysisPipeline,
  "hellinger": mountHellinger,
  "g3-hellinger": mountHellinger,
  "phase2-hellinger": mountPhase2Hellinger,
  "g4-faz2-hellinger": mountPhase2Hellinger,
  "cost-asymmetry": mountCostAsymmetry,
  "cihaza-uyarlama-maliyet-asimetrisi": mountCostAsymmetry,
  "zero-cost": mountZeroCost,
  "g5-faz3-scatter": mountZeroCost,
  "risk-scatter": mountRiskScatter,
  "scatter-hellinger-maliyet": mountRiskScatter,
  "mcry-circuit": mountMcryCircuit,
  "frqi-2x2-mcry-encoding": mountMcryCircuit,
  "qiskit-transpilation": mountQiskitTranspilation
};

export function mount(root, dataset = {}) {
  clear(root);
  root.classList.add("tik-frqi-widget");
  const scene = dataset.scene || "overview";
  const handler = SCENES[scene] || mountOverview;
  handler(root, dataset);
}
