const SVG_NS = "http://www.w3.org/2000/svg";

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function setMath(node, html) {
  node.innerHTML = html;
}

function typeset(root) {
  if (window.MathJax && typeof window.MathJax.typesetPromise === "function") {
    if (typeof window.MathJax.typesetClear === "function") {
      window.MathJax.typesetClear([root]);
    }
    window.MathJax.typesetPromise([root]).catch(() => {});
  }
}

function svgEl(tag, attrs = {}, text) {
  const node = document.createElementNS(SVG_NS, tag);
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, String(value)));
  if (text != null) node.textContent = text;
  return node;
}

function probBars(labels) {
  const box = el("div", "qde-bars");
  const rows = {};
  labels.forEach((label) => {
    const row = el("div", "qde-bar-row");
    const labelNode = el("div", "");
    setMath(labelNode, label);
    row.appendChild(labelNode);
    const track = el("div", "qde-bar-track");
    const fill = el("div", "qde-bar-fill");
    track.appendChild(fill);
    const value = el("div", "qde-readout", "0.000");
    row.append(track, value);
    box.appendChild(row);
    rows[label] = { fill, value };
  });
  return {
    el: box,
    set(label, p, color) {
      const row = rows[label];
      if (!row) return;
      row.fill.style.width = `${Math.max(0, Math.min(1, p)) * 100}%`;
      if (color) row.fill.style.background = color;
      row.value.textContent = p.toFixed(3);
    }
  };
}

function mountAngle(root) {
  root.classList.add("qde-widget");

  const grid = el("div", "qde-grid");
  const left = el("div", "qde-panel");
  const right = el("div", "qde-panel");

  left.appendChild(el("div", "qde-panel-title", "Girdi ve durum yönü"));
  const control = el("div", "qde-control");
  const label = el("label", "", "x değeri");
  const range = document.createElement("input");
  range.type = "range";
  range.min = "0";
  range.max = "1";
  range.step = "0.01";
  range.value = "0.50";
  const readout = el("div", "qde-readout");
  control.append(label, range, readout);

  const svg = svgEl("svg", { class: "qde-svg", viewBox: "0 0 270 190", role: "img" });
  const cx = 128;
  const cy = 92;
  const radius = 64;
  svg.appendChild(svgEl("circle", { cx, cy, r: radius, fill: "none", stroke: "currentColor", "stroke-opacity": "0.18", "stroke-width": "2" }));
  svg.appendChild(svgEl("line", { x1: cx, y1: cy + radius + 16, x2: cx, y2: cy - radius - 16, stroke: "currentColor", "stroke-opacity": "0.18" }));
  svg.appendChild(svgEl("line", { x1: cx - radius - 18, y1: cy, x2: cx + radius + 18, y2: cy, stroke: "currentColor", "stroke-opacity": "0.18" }));
  const vector = svgEl("line", { x1: cx, y1: cy, x2: cx, y2: cy - radius, stroke: "#2563eb", "stroke-width": "4", "stroke-linecap": "round" });
  const dot = svgEl("circle", { cx, cy: cy - radius, r: 5, fill: "#2563eb" });
  const angleArc = svgEl("path", { d: "", fill: "none", stroke: "#b45309", "stroke-width": "3" });
  svg.append(angleArc, vector, dot);
  svg.appendChild(svgEl("text", { x: cx, y: cy - radius - 24, "text-anchor": "middle", fill: "#94a3b8", "font-size": "12" }, "|0⟩"));
  svg.appendChild(svgEl("text", { x: cx, y: cy + radius + 20, "text-anchor": "middle", fill: "#94a3b8", "font-size": "12" }, "|1⟩"));

  const bars = probBars(["\\(P(0)\\)", "\\(P(1)\\)"]);
  right.appendChild(el("div", "qde-panel-title", "Ölçüm olasılıkları"));
  right.appendChild(bars.el);
  right.appendChild(el("div", "qde-mini-note", "x büyüdükçe ok |1> yönüne yaklaşır; ölçüm yine tek bir sonuç verir."));
  left.append(control, svg);
  grid.append(left, right);
  root.appendChild(grid);

  function update() {
    const x = Number(range.value);
    const theta = x * Math.PI;
    // Bloch sphere Z-X düzlemi projeksiyonu: |0⟩ kuzey (üst), |1⟩ güney (alt)
    const vx = cx + Math.sin(theta) * radius;
    const vy = cy - Math.cos(theta) * radius;
    vector.setAttribute("x2", vx.toFixed(1));
    vector.setAttribute("y2", vy.toFixed(1));
    dot.setAttribute("cx", vx.toFixed(1));
    dot.setAttribute("cy", vy.toFixed(1));
    const arcR = 30;
    const arcX = cx + Math.sin(theta) * arcR;
    const arcY = cy - Math.cos(theta) * arcR;
    const large = theta > Math.PI ? 1 : 0;
    angleArc.setAttribute("d",
      theta < 0.02
        ? ""
        : `M ${cx} ${cy - arcR} A ${arcR} ${arcR} 0 ${large} 1 ${arcX.toFixed(1)} ${arcY.toFixed(1)}`
    );
    const half = theta / 2;
    const p0 = Math.cos(half) ** 2;
    const p1 = Math.sin(half) ** 2;
    bars.set("\\(P(0)\\)", p0, "#60a5fa");
    bars.set("\\(P(1)\\)", p1, "#2dd4bf");
    setMath(readout, `\\(x=${x.toFixed(2)}\\) · \\(\\theta=x\\pi=${theta.toFixed(2)}\\) rad · \\(\\cos(\\theta/2)\\lvert0\\rangle + \\sin(\\theta/2)\\lvert1\\rangle\\)`);
    typeset(root);
  }

  range.addEventListener("input", update);
  update();
}

function mountPhase(root) {
  root.classList.add("qde-widget");

  const control = el("div", "qde-control");
  const lbl = el("label", "", "θ değeri");
  const range = document.createElement("input");
  range.type = "range";
  range.min = "0";
  range.max = String((2 * Math.PI).toFixed(4));
  range.step = "0.02";
  range.value = String(Math.PI.toFixed(4));
  const readout = el("div", "qde-readout");
  control.append(lbl, range, readout);

  const grid = el("div", "qde-grid");
  const left = el("div", "qde-panel");
  const right = el("div", "qde-panel");

  // Sol panel: birim çember üzerinde faz gösterimi
  left.appendChild(el("div", "qde-panel-title", "Faz gösterimi (birim çember)"));
  const pcx = 80, pcy = 80, pr = 58;
  const phaseSvg = svgEl("svg", { class: "qde-svg", viewBox: "0 0 160 160", role: "img" });
  phaseSvg.appendChild(svgEl("circle", { cx: pcx, cy: pcy, r: pr, fill: "none", stroke: "currentColor", "stroke-opacity": "0.2", "stroke-width": "1.5" }));
  phaseSvg.appendChild(svgEl("line", { x1: pcx - pr - 8, y1: pcy, x2: pcx + pr + 8, y2: pcy, stroke: "currentColor", "stroke-opacity": "0.15" }));
  phaseSvg.appendChild(svgEl("line", { x1: pcx, y1: pcy - pr - 8, x2: pcx, y2: pcy + pr + 8, stroke: "currentColor", "stroke-opacity": "0.15" }));
  phaseSvg.appendChild(svgEl("text", { x: pcx + pr + 10, y: pcy + 4, fill: "#94a3b8", "font-size": "9", "text-anchor": "start" }, "Re"));
  phaseSvg.appendChild(svgEl("text", { x: pcx + 3, y: pcy - pr - 5, fill: "#94a3b8", "font-size": "9", "text-anchor": "start" }, "Im"));
  phaseSvg.appendChild(svgEl("circle", { cx: pcx + pr, cy: pcy, r: 2.5, fill: "#94a3b8" }));
  const phaseArc = svgEl("path", { d: "", fill: "none", stroke: "#7c3aed", "stroke-width": "2", "stroke-dasharray": "4 2" });
  const phaseVec = svgEl("line", { x1: pcx, y1: pcy, x2: pcx + pr, y2: pcy, stroke: "#7c3aed", "stroke-width": "2.5", "stroke-linecap": "round" });
  const phaseDot = svgEl("circle", { cx: pcx + pr, cy: pcy, r: 5, fill: "#7c3aed" });
  const thetaLabel = svgEl("text", { x: pcx, y: pcy + pr + 18, fill: "#7c3aed", "font-size": "10", "text-anchor": "middle" });
  phaseSvg.append(phaseArc, phaseVec, phaseDot, thetaLabel);
  left.appendChild(phaseSvg);

  // Sağ panel: ölçüm ve girişim
  right.appendChild(el("div", "qde-panel-title", "Ölçüm ve girişim"));
  const table = el("div", "qde-state-table");
  const before = el("div", "qde-state-box");
  const after = el("div", "qde-state-box");
  before.appendChild(el("div", "qde-state-label", "Ölçümden önce"));
  after.appendChild(el("div", "qde-state-label", "Hadamard sonrası"));
  const beforeText = el("div", "qde-readout");
  const afterText = el("div", "qde-readout");
  before.appendChild(beforeText);
  after.appendChild(afterText);
  table.append(before, after);
  const bars = probBars(["\\(P(0)\\)", "\\(P(1)\\)"]);
  right.append(table, bars.el);
  right.appendChild(el("div", "qde-mini-note", "Phase encoding’de faz tek başına ölçüm olasılığını değiştirmez; uygun kapıdan sonra girişim olasılığa dönüşür."));

  grid.append(left, right);
  root.append(control, grid);

  function update() {
    const theta = Number(range.value);
    const pvx = pcx + Math.cos(theta) * pr;
    const pvy = pcy - Math.sin(theta) * pr;
    phaseVec.setAttribute("x2", pvx.toFixed(1));
    phaseVec.setAttribute("y2", pvy.toFixed(1));
    phaseDot.setAttribute("cx", pvx.toFixed(1));
    phaseDot.setAttribute("cy", pvy.toFixed(1));

    if (theta < 0.03) {
      phaseArc.setAttribute("d", "");
    } else if (theta > 2 * Math.PI - 0.03) {
      phaseArc.setAttribute("d",
        `M ${pcx + pr} ${pcy} A ${pr} ${pr} 0 1 0 ${pcx - pr} ${pcy} A ${pr} ${pr} 0 1 0 ${pcx + pr} ${pcy}`
      );
    } else {
      const large = theta > Math.PI ? 1 : 0;
      phaseArc.setAttribute("d",
        `M ${pcx + pr} ${pcy} A ${pr} ${pr} 0 ${large} 0 ${pvx.toFixed(1)} ${pvy.toFixed(1)}`
      );
    }

    thetaLabel.textContent = `θ = ${(theta / Math.PI).toFixed(2)}π`;
    setMath(readout, `\\(\\theta = ${(theta / Math.PI).toFixed(2)}\\pi = ${theta.toFixed(3)}\\) rad`);
    const p0 = Math.cos(theta / 2) ** 2;
    const p1 = Math.sin(theta / 2) ** 2;
    setMath(beforeText, `\\(\\tfrac{1}{\\sqrt{2}}(\\lvert0\\rangle + e^{i\\theta}\\lvert1\\rangle)\\) → \\(P(0)=P(1)=0.5\\)`);
    setMath(afterText, `\\(H\\) sonrası: \\(P(0)=${p0.toFixed(3)},\\; P(1)=${p1.toFixed(3)}\\)`);
    bars.set("\\(P(0)\\)", p0, "#60a5fa");
    bars.set("\\(P(1)\\)", p1, "#f87171");
    typeset(root);
  }

  range.addEventListener("input", update);
  update();
}

function normalize(vec) {
  const norm = Math.sqrt(vec.reduce((sum, v) => sum + v * v, 0));
  return vec.map((v) => v / norm);
}

function ampSet(title, vec) {
  const box = el("div", "qde-amp-set");
  box.appendChild(el("div", "qde-amp-title", title));
  const ampLabels = ["\\(\\lvert00\\rangle\\)", "\\(\\lvert01\\rangle\\)", "\\(\\lvert10\\rangle\\)", "\\(\\lvert11\\rangle\\)"];
  const bars = probBars(ampLabels);
  const normalized = normalize(vec);
  box.appendChild(bars.el);
  normalized.forEach((amp, idx) => {
    bars.set(ampLabels[idx], amp * amp, "#60a5fa");
  });
  const note = el("div", "qde-mini-note");
  setMath(note, `normalize: \\((${normalized.map((v) => v.toFixed(3)).join(", ")})\\)`);
  box.appendChild(note);
  return box;
}

function mountAmplitude(root) {
  root.classList.add("qde-widget");
  root.appendChild(el("div", "qde-title", "Amplitude encoding: ölçek değil, normalize dağılım kalır"));
  const grid = el("div", "qde-amp-grid");
  grid.appendChild(ampSet("(1, 2, 3, 4)", [1, 2, 3, 4]));
  grid.appendChild(ampSet("(2, 4, 6, 8)", [2, 4, 6, 8]));
  root.appendChild(grid);
  root.appendChild(el("div", "qde-mini-note", "İkinci vektör birincinin sabit katsayıyla çarpılmış hâli olduğu için normalize edildikten sonra aynı olasılık dağılımını verir."));
}

function mountBasis(root) {
  root.classList.add("qde-widget");

  const control = el("div", "qde-control");
  const lbl = el("label", "", "Bit dizisi");
  const input = document.createElement("input");
  input.type = "text";
  input.value = "101";
  input.maxLength = 4;
  input.className = "qde-text-input";
  input.setAttribute("placeholder", "örn. 101");
  const readout = el("div", "qde-readout");
  control.append(lbl, input, readout);

  const stateDisplay = el("div", "qde-state-display");
  const stateList = el("div", "qde-basis-list");
  root.append(control, stateDisplay, stateList);

  function update() {
    const raw = input.value.replace(/[^01]/g, "").slice(0, 4);
    if (raw.length === 0) {
      stateDisplay.innerHTML = "";
      stateList.innerHTML = "";
      readout.textContent = "0 ve 1 karakterlerinden oluşan bir dizi girin";
      return;
    }
    const n = raw.length;
    const numStates = 1 << n;
    const targetIdx = parseInt(raw, 2);
    setMath(readout, `\\(n=${n}\\) kübit · \\(2^{${n}}=${numStates}\\) taban durumu`);
    setMath(stateDisplay, `\\(\\lvert ${raw} \\rangle\\)`);
    stateList.innerHTML = "";
    for (let i = 0; i < numStates; i++) {
      const bits = i.toString(2).padStart(n, "0");
      const item = el("div", i === targetIdx ? "qde-basis-item is-active" : "qde-basis-item");
      setMath(item, `\\(\\lvert ${bits} \\rangle\\)`);
      stateList.appendChild(item);
    }
    typeset(root);
  }

  input.addEventListener("input", update);
  update();
}

function mountDecision(root) {
  root.classList.add("qde-widget");

  const scenarios = [
    { label: "Kesin bit dizisi", method: "Basis", note: "Klasik bit örüntüsü doğrudan \\(\\lvert0\\rangle\\) ve \\(\\lvert1\\rangle\\) taban durumlarına yazılır." },
    { label: "Sürekli sayısal değer", method: "Angle", note: "Değer bir dönme açısına çevrilir; devre basit kalır." },
    { label: "Faz/girişim etkisi", method: "Phase", note: "Bilgi faza yazılır; etkisi sonraki kapılarda girişimle görünür." },
    { label: "Büyük vektör", method: "Amplitude", note: "Bileşenler genliklere yerleşir; kübit sayısı azalabilir ama durum hazırlama zorlaşır." }
  ];

  const options = el("div", "qde-decision-options");
  const result = el("div", "qde-decision-result");
  const resultTitle = el("div", "qde-state-label");
  const resultText = el("div", "qde-readout");
  result.append(resultTitle, resultText);
  const buttons = scenarios.map((scenario) => {
    const btn = el("button", "qde-btn", scenario.label);
    btn.type = "button";
    btn.addEventListener("click", () => update(scenario));
    options.appendChild(btn);
    return { btn, scenario };
  });

  const methods = el("div", "qde-method-row");
  const methodNodes = {};
  ["Basis", "Angle", "Phase", "Amplitude"].forEach((name) => {
    const node = el("div", "qde-method", name);
    methodNodes[name] = node;
    methods.appendChild(node);
  });

  root.append(options, result, methods);

  function update(scenario) {
    buttons.forEach(({ btn, scenario: s }) => btn.setAttribute("aria-pressed", String(s === scenario)));
    Object.entries(methodNodes).forEach(([name, node]) => node.classList.toggle("is-active", name === scenario.method));
    resultTitle.textContent = scenario.method;
    setMath(resultText, scenario.note);
    typeset(root);
  }

  update(scenarios[0]);
}

export function mount(root, dataset) {
  const scene = dataset.scene || "angle";
  if (scene === "basis") mountBasis(root);
  else if (scene === "angle") mountAngle(root);
  else if (scene === "phase") mountPhase(root);
  else if (scene === "amplitude") mountAmplitude(root);
  else if (scene === "decision") mountDecision(root);
  typeset(root);
}
