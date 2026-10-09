import { makeEl as htmlEl, makeSvg as svgEl } from "../core/dom.js";
// gate-animations.js
// Kuantum kapısı animasyonları — birim çember görselleştirmesi
// Sahneler: x-gate | z-gate


function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function animAngle(from, to, ms, onTick, onDone) {
  let t0 = null;
  function tick(ts) {
    if (t0 === null) t0 = ts;
    const raw = Math.min((ts - t0) / ms, 1);
    onTick(from + (to - from) * easeInOut(raw));
    if (raw < 1) requestAnimationFrame(tick);
    else { onTick(to); onDone && onDone(); }
  }
  requestAnimationFrame(tick);
}

// X ekseni üzerinden yansıma: x bileşeni fromX → -fromX, y sabit
// onTick(dx, dy): normalleştirilmiş yön vektörü; dx=dy=null → ok gizli
function animReflectX(fromSvgDeg, ms, onTick, onDone) {
  const rad = fromSvgDeg * Math.PI / 180;
  const x0 = Math.cos(rad);
  const y0 = Math.sin(rad);
  let t0 = null;
  function tick(ts) {
    if (t0 === null) t0 = ts;
    const raw = Math.min((ts - t0) / ms, 1);
    const x = x0 * (1 - 2 * easeInOut(raw));
    const mag = Math.sqrt(x * x + y0 * y0);
    if (mag > 0.02) onTick(x / mag, y0 / mag);
    else            onTick(null, null);          // ok geçici olarak sıfırda
    if (raw < 1) requestAnimationFrame(tick);
    else {
      const endMag = Math.sqrt(x0 * x0 + y0 * y0); // = 1 her zaman
      onTick(-x0 / endMag, y0 / endMag);
      onDone && onDone();
    }
  }
  requestAnimationFrame(tick);
}

// ─── Durum hesabı ─────────────────────────────────────────────────────────────
// Bloch küresi yarı-açı: α = cos(θ_v/2), β = sin(θ_v/2)
// θ_v = tepeden (|0⟩) saat yönüne görsel açı [0,360°)
// Doğrulama: θ_v=0→|0⟩, θ_v=90°→|+⟩, θ_v=180°→|1⟩, θ_v=270°→|−⟩

function computeState(svgDeg) {
  const thetaV  = ((svgDeg + 90) % 360 + 360) % 360;
  const halfRad = thetaV * Math.PI / 360;
  const alpha   = Math.cos(halfRad);
  const beta    = Math.sin(halfRad);
  return { thetaV, alpha, beta, p0: alpha * alpha, p1: beta * beta };
}

// ─── Paylaşılan UI yapısı ─────────────────────────────────────────────────────
// SVG, etiketler, amplitüd paneli ve sürgü oluşturur.
// Ortak güncelleme fonksiyonlarını döndürür.

function buildCircleUI(container) {
  const CW = 280, CH = 280, cx = 140, cy = 140, R = 90;

  // ── SVG ───────────────────────────────────────────────────────────────────
  const svg = svgEl("svg", {
    viewBox: `0 0 ${CW} ${CH}`, class: "pq-svg", style: "max-width:280px"
  });

  svg.appendChild(svgEl("circle", {
    cx, cy, r: R, fill: "none", stroke: "var(--anim-wire)", "stroke-width": 2
  }));
  for (const [ax, ay] of [[cx, cy - R], [cx, cy + R], [cx - R, cy], [cx + R, cy]])
    svg.appendChild(svgEl("circle", { cx: ax, cy: ay, r: 2.5, fill: "var(--anim-border)" }));
  svg.appendChild(svgEl("circle", { cx, cy, r: 3, fill: "var(--anim-border-strong)" }));

  const lbl0 = svgEl("text", {
    x: cx, y: cy - R - 14, "text-anchor": "middle",
    fill: "var(--anim-blue)", "font-size": 14, "font-weight": "bold"
  });
  lbl0.textContent = "|0\u27E9";

  const lbl1 = svgEl("text", {
    x: cx, y: cy + R + 24, "text-anchor": "middle",
    fill: "var(--anim-border-strong)", "font-size": 14, "font-weight": "bold"
  });
  lbl1.textContent = "|1\u27E9";

  const lblPlus = svgEl("text", {
    x: cx + R + 10, y: cy + 5, "text-anchor": "start", fill: "var(--anim-border)", "font-size": 11
  });
  lblPlus.textContent = "|+\u27E9";

  const lblMinus = svgEl("text", {
    x: cx - R - 10, y: cy + 5, "text-anchor": "end", fill: "var(--anim-border)", "font-size": 11
  });
  lblMinus.textContent = "|\u2212\u27E9";

  svg.appendChild(lbl0); svg.appendChild(lbl1);
  svg.appendChild(lblPlus); svg.appendChild(lblMinus);

  const arcTrace = svgEl("path", {
    d: "", fill: "none", stroke: "var(--anim-blue-strong)",
    "stroke-width": 1.5, "stroke-dasharray": "4 3", opacity: 0
  });
  svg.appendChild(arcTrace);

  const shaft = svgEl("line", {
    x1: cx, y1: cy, x2: cx, y2: cy - (R - 12),
    stroke: "var(--anim-blue)", "stroke-width": 3, "stroke-linecap": "round"
  });
  svg.appendChild(shaft);

  const head = svgEl("polygon", { fill: "var(--anim-blue)" });
  svg.appendChild(head);

  container.appendChild(svg);

  // ── Amplitüd paneli ────────────────────────────────────────────────────────
  const infoDiv = htmlEl("div");
  infoDiv.style.cssText =
    "font-family:system-ui,sans-serif;font-size:0.82rem;color:var(--anim-text-2);" +
    "margin:0.3rem 0 0.25rem;padding:0.35rem 0.7rem;" +
    "background:var(--anim-bg);border:1px solid var(--anim-wire);border-radius:6px;";

  const infoTitle = htmlEl("div");
  infoTitle.style.cssText = "color:var(--anim-border-strong);font-size:0.75rem;margin-bottom:0.25rem;";
  infoTitle.textContent = "|\u03C8\u27E9 = \u03B1|0\u27E9 + \u03B2|1\u27E9";
  infoDiv.appendChild(infoTitle);

  const grid = htmlEl("div");
  grid.style.cssText = "display:grid;grid-template-columns:1fr 1fr;gap:0.1rem 0.8rem;";

  function makeCell(label) {
    const row = htmlEl("div");
    row.style.cssText = "display:flex;align-items:baseline;gap:0.3rem;";
    const lbl = htmlEl("span");
    lbl.style.cssText = "color:var(--anim-muted-2);white-space:nowrap;";
    lbl.textContent = label;
    const val = htmlEl("span");
    val.style.cssText = "color:var(--anim-text);font-weight:bold;min-width:3.8rem;";
    val.textContent = "\u2014";
    row.appendChild(lbl); row.appendChild(val);
    grid.appendChild(row);
    return val;
  }

  const alphaVal = makeCell("\u03B1 =");
  const p0Val    = makeCell("P(|0\u27E9) =");
  const betaVal  = makeCell("\u03B2 =");
  const p1Val    = makeCell("P(|1\u27E9) =");
  infoDiv.appendChild(grid);
  container.appendChild(infoDiv);

  // ── Açı sürgüsü ────────────────────────────────────────────────────────────
  const sliderWrap = htmlEl("div");
  sliderWrap.style.cssText =
    "display:flex;align-items:center;gap:0.45rem;margin:0.2rem 0;" +
    "font-family:system-ui,sans-serif;font-size:0.78rem;";

  const sliderLblEl = htmlEl("span");
  sliderLblEl.style.cssText = "color:var(--anim-muted-2);white-space:nowrap;flex-shrink:0;";
  sliderLblEl.textContent = "\u03B8 =";

  const slider = document.createElement("input");
  slider.type = "range"; slider.min = 0; slider.max = 360;
  slider.step = 1; slider.value = 0;
  slider.style.cssText = "flex:1;accent-color:var(--anim-blue);cursor:pointer;height:4px;";

  const sliderDeg = htmlEl("span");
  sliderDeg.style.cssText = "color:var(--anim-muted);width:3rem;text-align:left;flex-shrink:0;";
  sliderDeg.textContent = "0°";

  sliderWrap.appendChild(sliderLblEl);
  sliderWrap.appendChild(slider);
  sliderWrap.appendChild(sliderDeg);
  container.appendChild(sliderWrap);

  // ── Güncelleme fonksiyonları ───────────────────────────────────────────────

  function _arrowFromXY(dx, dy) {
    const ex = cx + (R - 12) * dx, ey = cy + (R - 12) * dy;
    shaft.setAttribute("x2", ex); shaft.setAttribute("y2", ey);
    const tipX = cx + R * dx, tipY = cy + R * dy;
    const px = -dy * 5, py = dx * 5;
    head.setAttribute("points",
      `${tipX},${tipY} ${ex + px},${ey + py} ${ex - px},${ey - py}`);
    head.setAttribute("opacity", 1);
  }

  function updateArrow(svgDeg) {
    const rad = svgDeg * Math.PI / 180;
    _arrowFromXY(Math.cos(rad), Math.sin(rad));
  }

  function updateArrowXY(dx, dy) {
    if (dx === null) { head.setAttribute("opacity", 0); return; }
    _arrowFromXY(dx, dy);
  }

  function updateArc(fromDeg, toDeg) {
    const steps = 40, pts = [];
    for (let i = 0; i <= steps; i++) {
      const a = (fromDeg + (toDeg - fromDeg) * (i / steps)) * Math.PI / 180;
      pts.push(`${cx + R * Math.cos(a)},${cy + R * Math.sin(a)}`);
    }
    arcTrace.setAttribute("d", "M" + pts.join("L"));
  }

  function setStateLabels(svgDeg) {
    const norm = ((svgDeg % 360) + 360) % 360;
    lbl0.setAttribute("fill", Math.abs(norm - 270) < 5 ? "var(--anim-blue)" : "var(--anim-border-strong)");
    lbl1.setAttribute("fill", Math.abs(norm - 90)  < 5 ? "var(--anim-blue)" : "var(--anim-border-strong)");
  }

  function fmtNum(n) { return (n >= 0 ? " " : "") + n.toFixed(3); }

  function updateDisplay(svgDeg) {
    const { thetaV, alpha, beta, p0, p1 } = computeState(svgDeg);
    alphaVal.textContent = fmtNum(alpha);
    betaVal.textContent  = fmtNum(beta);
    p0Val.textContent    = Math.round(p0 * 100) + "%";
    p1Val.textContent    = Math.round(p1 * 100) + "%";
    const tv = Math.round(thetaV);
    slider.value = tv; sliderDeg.textContent = tv + "°";
  }

  return {
    cx, cy, R, svg, arcTrace, shaft, head,
    slider, sliderDeg,
    updateArrow, updateArrowXY, updateArc, setStateLabels, updateDisplay
  };
}

// ─── X kapısı ─────────────────────────────────────────────────────────────────
// Birim çember üzerinde 180° saat yönü dönüşü: |0⟩ ↔ |1⟩

function xGate(container) {
  const ui = buildCircleUI(container);
  const { updateArrow, updateArc, setStateLabels,
          updateDisplay, arcTrace, slider, sliderDeg } = ui;

  let currentSvgDeg = -90, busy = false;

  updateArrow(currentSvgDeg);
  setStateLabels(currentSvgDeg);
  updateDisplay(currentSvgDeg);

  slider.addEventListener("input", () => {
    if (busy) return;
    currentSvgDeg = parseInt(slider.value) - 90;
    sliderDeg.textContent = slider.value + "°";
    updateArrow(currentSvgDeg);
    setStateLabels(currentSvgDeg);
    updateDisplay(currentSvgDeg);
  });

  const btn = htmlEl("button", "pq-btn", "X Uygula");
  const btnRow = htmlEl("div", "pq-btn-row");
  btnRow.appendChild(btn);
  container.appendChild(btnRow);

  btn.addEventListener("click", () => {
    if (busy) return;
    busy = true; btn.disabled = true;

    const from = currentSvgDeg, to = from + 180;
    arcTrace.setAttribute("opacity", 0.6);
    updateArc(from, to);

    animAngle(from, to, 850, (angle) => {
      updateArrow(angle);
      updateArc(from, angle);
      setStateLabels(angle);
      updateDisplay(angle);
    }, () => {
      const { thetaV } = computeState(to);
      currentSvgDeg = Math.round(thetaV) - 90;
      updateArrow(currentSvgDeg);
      arcTrace.setAttribute("opacity", 0);
      setStateLabels(currentSvgDeg);
      updateDisplay(currentSvgDeg);
      busy = false; btn.disabled = false;
    });
  });
}

// ─── Z kapısı ─────────────────────────────────────────────────────────────────
// Dikey eksen üzerinden yansıma: |0⟩→|0⟩, |1⟩→−|1⟩, |+⟩↔|−⟩
// Z kapısı: (α, β) → (α, −β)  →  görsel açı θ_v → 360° − θ_v
// SVG açısı: svgDeg → 180° − svgDeg

function zGate(container) {
  const ui = buildCircleUI(container);
  const { cx, cy, R, svg, updateArrow, updateArrowXY,
          setStateLabels, updateDisplay, slider, sliderDeg } = ui;

  // Dikey eksen — yansıma çizgisi (ince kesikli)
  svg.appendChild(svgEl("line", {
    x1: cx, y1: cy - R - 5, x2: cx, y2: cy + R + 5,
    stroke: "var(--anim-wire)", "stroke-width": 1, "stroke-dasharray": "3 4"
  }));

  // Yansıma göstergesi — animasyon sırasında görünür olacak yay izi
  const mirrorFlash = svgEl("line", {
    x1: cx, y1: cy - R, x2: cx, y2: cy + R,
    stroke: "var(--anim-purple)", "stroke-width": 2, opacity: 0
  });
  svg.appendChild(mirrorFlash);

  let currentSvgDeg = -90, busy = false;

  updateArrow(currentSvgDeg);
  setStateLabels(currentSvgDeg);
  updateDisplay(currentSvgDeg);

  slider.addEventListener("input", () => {
    if (busy) return;
    currentSvgDeg = parseInt(slider.value) - 90;
    sliderDeg.textContent = slider.value + "°";
    updateArrow(currentSvgDeg);
    setStateLabels(currentSvgDeg);
    updateDisplay(currentSvgDeg);
  });

  const btn = htmlEl("button", "pq-btn", "Z Uygula");
  const btnRow = htmlEl("div", "pq-btn-row");
  btnRow.appendChild(btn);
  container.appendChild(btnRow);

  btn.addEventListener("click", () => {
    if (busy) return;
    busy = true; btn.disabled = true;

    // Yansıma eksenini vurgula
    mirrorFlash.setAttribute("opacity", 0.7);

    animReflectX(currentSvgDeg, 700, (dx, dy) => {
      updateArrowXY(dx, dy);
      // Anlık açıdan ekrana yaz
      if (dx !== null) {
        const a = Math.atan2(dy, dx) * 180 / Math.PI;
        setStateLabels(a);
        updateDisplay(a);
      }
    }, () => {
      const newSvgDeg = 180 - currentSvgDeg;
      // [-90, 270) aralığına normalize
      currentSvgDeg = ((newSvgDeg + 90) % 360 + 360) % 360 - 90;

      updateArrow(currentSvgDeg);
      mirrorFlash.setAttribute("opacity", 0);
      setStateLabels(currentSvgDeg);
      updateDisplay(currentSvgDeg);
      busy = false; btn.disabled = false;
    });
  });
}

// ─── Entry point ─────────────────────────────────────────────────────────────

export function mount(div, dataset = div.dataset) {
  const scene = (dataset.scene || "").trim();
  div.classList.add("pq-container");
  if      (scene === "x-gate") xGate(div);
  else if (scene === "z-gate") zGate(div);
}
