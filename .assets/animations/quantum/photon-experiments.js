// photon-experiments.js
// Quantum photon experiment animations for QBronze / QTEA26
// Scenes: bs-single | mz-with-a | mz-no-a | amplitude-cancel

const NS = "http://www.w3.org/2000/svg";

function svgEl(tag, attrs = {}) {
  const el = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, String(v));
  return el;
}

function htmlEl(tag, cls = null, text = null) {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (text !== null) el.textContent = text;
  return el;
}

// Animate a circle along waypoints [{x,y}, ...].
// msPerSeg: milliseconds per segment
// onDone: optional callback
function animPath(circle, waypoints, msPerSeg, onDone) {
  let seg = 0;
  let t0 = null;

  function tick(ts) {
    if (t0 === null) t0 = ts;
    const t = Math.min((ts - t0) / msPerSeg, 1);
    const a = waypoints[seg];
    const b = waypoints[seg + 1];
    circle.setAttribute("cx", a.x + (b.x - a.x) * t);
    circle.setAttribute("cy", a.y + (b.y - a.y) * t);
    if (t < 1) {
      requestAnimationFrame(tick);
    } else {
      circle.setAttribute("cx", b.x);
      circle.setAttribute("cy", b.y);
      seg++;
      if (seg < waypoints.length - 1) {
        t0 = null;
        requestAnimationFrame(tick);
      } else {
        onDone && onDone();
      }
    }
  }
  requestAnimationFrame(tick);
}

// ─── Shared layout ──────────────────────────────────────────────────────────

const W = 580, H = 270;

// Standard Mach-Zehnder coordinate points
const PT = {
  src:   { x: 30,  y: 135 },
  bs1:   { x: 135, y: 135 },
  mirTL: { x: 135, y: 48  },
  mirTR: { x: 445, y: 48  },
  adet:  { x: 290, y: 135 }, // detector A (lower path midpoint)
  bs2:   { x: 445, y: 135 },
  b1:    { x: 555, y: 135 },
  b2:    { x: 445, y: 248 },
};

function svgBase(container) {
  const svg = svgEl("svg", { viewBox: `0 0 ${W} ${H}`, class: "pq-svg" });
  container.appendChild(svg);
  return svg;
}

function svgText(x, y, str, color = "#94a3b8", size = 11, anchor = "middle") {
  const t = svgEl("text", { x, y, "text-anchor": anchor, fill: color, "font-size": size });
  t.textContent = str;
  return t;
}

function drawBS(svg, x, y, label) {
  svg.appendChild(svgEl("rect", {
    x: x - 12, y: y - 12, width: 24, height: 24,
    fill: "#1e3a5f", stroke: "#60a5fa", "stroke-width": 2,
    transform: `rotate(45,${x},${y})`
  }));
  svg.appendChild(svgText(x, y + 33, label, "#60a5fa", 11));
}

function drawMirror(svg, x, y) {
  svg.appendChild(svgEl("rect", {
    x: x - 10, y: y - 10, width: 20, height: 20,
    fill: "#1e293b", stroke: "#94a3b8", "stroke-width": 2,
    transform: `rotate(45,${x},${y})`
  }));
  svg.appendChild(svgText(x, y + 25, "Ayna", "#475569", 10));
}

function drawDet(svg, x, y, label, color = "#94a3b8") {
  svg.appendChild(svgEl("rect", {
    x: x - 14, y: y - 14, width: 28, height: 28,
    fill: "#1e293b", stroke: color, "stroke-width": 2, rx: 3
  }));
  const t = svgEl("text", { x, y: y + 5, "text-anchor": "middle", fill: "#e2e8f0", "font-size": 12, "font-weight": "bold" });
  t.textContent = label;
  svg.appendChild(t);
  return t; // return for flash
}

function drawSource(svg) {
  const L = PT;
  svg.appendChild(svgEl("circle", { cx: L.src.x, cy: L.src.y, r: 8, fill: "#1e293b", stroke: "#f59e0b", "stroke-width": 2 }));
  svg.appendChild(svgText(L.src.x, L.src.y - 16, "Kaynak", "#f59e0b", 11));
}

function ln(svg, x1, y1, x2, y2, color = "#334155", sw = 2) {
  svg.appendChild(svgEl("line", { x1, y1, x2, y2, stroke: color, "stroke-width": sw }));
}

function makeBar(barsDiv, label, fillColor) {
  const row = htmlEl("div", "pq-bar-row");
  const lbl = htmlEl("span", "pq-bar-label", label);
  const track = htmlEl("div", "pq-bar-track");
  const fill = htmlEl("div", "pq-bar-fill");
  fill.style.background = fillColor;
  fill.style.width = "0%";
  const pct = htmlEl("span", "pq-bar-pct", "—");
  track.appendChild(fill);
  row.appendChild(lbl);
  row.appendChild(track);
  row.appendChild(pct);
  barsDiv.appendChild(row);
  return { fill, pct };
}

function makeBtnRow(container, ...btns) {
  const row = htmlEl("div", "pq-btn-row");
  for (const b of btns) row.appendChild(b);
  container.appendChild(row);
  return row;
}

// ─── Scene 1: bs-single ─────────────────────────────────────────────────────

function bsSingle(container) {
  // Simpler layout: source → BS → D0 (right) + D1 (down)
  const sw = 500, sh = 230;
  const src = { x: 35, y: 115 };
  const bs  = { x: 180, y: 115 };
  const d0  = { x: 370, y: 115 }; // transmitted
  const d1  = { x: 180, y: 210 }; // reflected

  const svg = svgEl("svg", { viewBox: `0 0 ${sw} ${sh}`, class: "pq-svg" });

  // Paths
  ln(svg, src.x + 9, src.y, bs.x - 14, bs.y);
  ln(svg, bs.x + 14, bs.y, d0.x - 15, d0.y);
  ln(svg, bs.x, bs.y + 14, d1.x, d1.y - 15);

  // Labels on paths
  svg.appendChild(svgText((src.x + bs.x) / 2, src.y - 10, "foton", "#475569", 10));
  svg.appendChild(svgText((bs.x + d0.x) / 2, bs.y - 10, "geçti (0)", "#475569", 10));
  svg.appendChild(svgText(bs.x + 35, (bs.y + d1.y) / 2, "yansıdı (1)", "#475569", 10, "start"));

  // Source
  svg.appendChild(svgEl("circle", { cx: src.x, cy: src.y, r: 8, fill: "#1e293b", stroke: "#f59e0b", "stroke-width": 2 }));
  svg.appendChild(svgText(src.x, src.y - 16, "Kaynak", "#f59e0b", 11));

  // BS
  svg.appendChild(svgEl("rect", { x: bs.x - 12, y: bs.y - 12, width: 24, height: 24, fill: "#1e3a5f", stroke: "#60a5fa", "stroke-width": 2, transform: `rotate(45,${bs.x},${bs.y})` }));
  svg.appendChild(svgText(bs.x, bs.y + 30, "Işın Bölücü", "#60a5fa", 10));

  // D0
  drawDet(svg, d0.x, d0.y, "D0");
  svg.appendChild(svgText(d0.x, d0.y - 22, "Geçti", "#64748b", 10));

  // D1
  drawDet(svg, d1.x, d1.y, "D1");
  svg.appendChild(svgText(d1.x + 38, d1.y + 5, "Yansıdı", "#64748b", 10, "start"));

  // Photon circle
  const photon = svgEl("circle", { cx: src.x, cy: src.y, r: 6, fill: "#fbbf24", opacity: 0 });
  svg.appendChild(photon);

  container.appendChild(svg);

  // Bars
  const barsDiv = htmlEl("div", "pq-bars");
  const bD0 = makeBar(barsDiv, "D0 (Geçti)", "#38bdf8");
  const bD1 = makeBar(barsDiv, "D1 (Yansıdı)", "#f472b6");

  let counts = [0, 0];
  let busy = false;

  function updateBars() {
    const tot = counts[0] + counts[1];
    if (!tot) return;
    const p0 = Math.round(counts[0] / tot * 100);
    const p1 = 100 - p0;
    bD0.fill.style.width = p0 + "%";
    bD0.pct.textContent = p0 + "%";
    bD1.fill.style.width = p1 + "%";
    bD1.pct.textContent = p1 + "%";
  }

  function shoot() {
    if (busy) return;
    busy = true;
    sendBtn.disabled = true;
    autoBtn.disabled = true;

    const outcome = Math.random() < 0.5 ? 0 : 1;
    const dest = outcome === 0 ? d0 : d1;
    const destLbl = outcome === 0 ? "D0" : "D1";
    const flashColor = outcome === 0 ? "#38bdf8" : "#f472b6";

    photon.setAttribute("opacity", 1);
    photon.setAttribute("cx", src.x);
    photon.setAttribute("cy", src.y);

    animPath(photon, [src, bs], 380, () => {
      animPath(photon, [bs, dest], 320, () => {
        counts[outcome]++;
        updateBars();
        // Flash detector label
        const lblEl = svg.querySelector(`text[font-weight="bold"]`);
        // Flash by coloring the rect stroke temporarily
        const rects = svg.querySelectorAll("rect[rx]");
        const idx = outcome === 0 ? 0 : 1;
        if (rects[idx]) {
          rects[idx].setAttribute("stroke", flashColor);
          setTimeout(() => rects[idx].setAttribute("stroke", "#94a3b8"), 350);
        }
        setTimeout(() => {
          photon.setAttribute("opacity", 0);
          photon.setAttribute("cx", src.x);
          photon.setAttribute("cy", src.y);
          busy = false;
          sendBtn.disabled = false;
          autoBtn.disabled = false;
        }, 350);
      });
    });
  }

  const sendBtn = htmlEl("button", "pq-btn", "Foton Gönder");
  sendBtn.addEventListener("click", shoot);

  const autoBtn = htmlEl("button", "pq-btn pq-btn-secondary", "Otomatik (×20)");
  autoBtn.addEventListener("click", () => {
    sendBtn.disabled = true;
    autoBtn.disabled = true;
    let n = 0;
    function next() {
      if (n >= 20) { sendBtn.disabled = false; autoBtn.disabled = false; return; }
      counts[Math.random() < 0.5 ? 0 : 1]++;
      n++;
      updateBars();
      setTimeout(next, 60);
    }
    next();
  });

  makeBtnRow(container, sendBtn, autoBtn);
  container.appendChild(barsDiv);
}

// ─── Shared MZ layout drawing ────────────────────────────────────────────────

function drawMZLayout(svg, showA = false) {
  const L = PT;

  // Paths
  ln(svg, L.src.x + 9, L.src.y, L.bs1.x - 14, L.bs1.y);         // src → bs1
  ln(svg, L.bs1.x, L.bs1.y - 14, L.mirTL.x, L.mirTL.y + 12);    // bs1 up → mirTL
  ln(svg, L.mirTL.x + 12, L.mirTL.y, L.mirTR.x - 12, L.mirTR.y); // mirTL → mirTR
  ln(svg, L.mirTR.x, L.mirTR.y + 12, L.bs2.x, L.bs2.y - 14);    // mirTR down → bs2

  if (showA) {
    ln(svg, L.bs1.x + 14, L.bs1.y, L.adet.x - 15, L.adet.y);     // bs1 → A
    ln(svg, L.adet.x + 15, L.adet.y, L.bs2.x - 14, L.bs2.y);     // A → bs2
  } else {
    ln(svg, L.bs1.x + 14, L.bs1.y, L.bs2.x - 14, L.bs2.y);       // bs1 → bs2 direct
  }

  ln(svg, L.bs2.x + 14, L.bs2.y, L.b1.x - 15, L.b1.y);           // bs2 → B1
  ln(svg, L.bs2.x, L.bs2.y + 14, L.b2.x, L.b2.y - 15);           // bs2 → B2

  // Components
  drawSource(svg);
  drawBS(svg, L.bs1.x, L.bs1.y, "BS1");
  drawMirror(svg, L.mirTL.x, L.mirTL.y);
  drawMirror(svg, L.mirTR.x, L.mirTR.y);
  drawBS(svg, L.bs2.x, L.bs2.y, "BS2");

  if (showA) {
    drawDet(svg, L.adet.x, L.adet.y, "A", "#f59e0b");
    svg.appendChild(svgText(L.adet.x, L.adet.y - 22, "Ded. A", "#f59e0b", 11));
  }

  drawDet(svg, L.b1.x, L.b1.y, "B1");
  svg.appendChild(svgText(L.b1.x, L.b1.y - 22, "B1", "#64748b", 11));
  drawDet(svg, L.b2.x, L.b2.y, "B2");
  svg.appendChild(svgText(L.b2.x + 38, L.b2.y + 5, "B2", "#64748b", 11, "start"));
}

// ─── Scene 2: mz-with-a ──────────────────────────────────────────────────────

function mzWithA(container) {
  const L = PT;
  const svg = svgBase(container);
  drawMZLayout(svg, true);

  const photon = svgEl("circle", { cx: L.src.x, cy: L.src.y, r: 6, fill: "#fbbf24", opacity: 0 });
  svg.appendChild(photon);

  const barsDiv = htmlEl("div", "pq-bars");
  const bA  = makeBar(barsDiv, "A (50%)", "#f59e0b");
  const bB1 = makeBar(barsDiv, "B1 (25%)", "#38bdf8");
  const bB2 = makeBar(barsDiv, "B2 (25%)", "#f472b6");

  let counts = { A: 0, B1: 0, B2: 0 };
  let busy = false;

  function updateBars() {
    const tot = counts.A + counts.B1 + counts.B2;
    if (!tot) return;
    const pA  = Math.round(counts.A  / tot * 100);
    const pB1 = Math.round(counts.B1 / tot * 100);
    const pB2 = 100 - pA - pB1;
    bA.fill.style.width  = pA  + "%"; bA.pct.textContent  = pA  + "%";
    bB1.fill.style.width = pB1 + "%"; bB1.pct.textContent = pB1 + "%";
    bB2.fill.style.width = Math.max(0, pB2) + "%";
    bB2.pct.textContent  = Math.max(0, pB2) + "%";
  }

  function randOutcome() {
    const r = Math.random();
    return r < 0.5 ? "A" : r < 0.75 ? "B1" : "B2";
  }

  function wayFor(outcome) {
    if (outcome === "A")  return [L.src, L.bs1, L.adet];
    if (outcome === "B1") return [L.src, L.bs1, L.mirTL, L.mirTR, L.bs2, L.b1];
    return                       [L.src, L.bs1, L.mirTL, L.mirTR, L.bs2, L.b2];
  }

  function shoot() {
    if (busy) return;
    busy = true;
    sendBtn.disabled = true;
    autoBtn.disabled = true;

    const outcome = randOutcome();
    photon.setAttribute("opacity", 1);
    animPath(photon, wayFor(outcome), 280, () => {
      counts[outcome]++;
      updateBars();
      setTimeout(() => {
        photon.setAttribute("opacity", 0);
        photon.setAttribute("cx", L.src.x);
        photon.setAttribute("cy", L.src.y);
        busy = false;
        sendBtn.disabled = false;
        autoBtn.disabled = false;
      }, 380);
    });
  }

  const sendBtn = htmlEl("button", "pq-btn", "Foton Gönder");
  sendBtn.addEventListener("click", shoot);

  const autoBtn = htmlEl("button", "pq-btn pq-btn-secondary", "Otomatik (×30)");
  autoBtn.addEventListener("click", () => {
    sendBtn.disabled = true; autoBtn.disabled = true;
    let n = 0;
    function next() {
      if (n >= 30) { sendBtn.disabled = false; autoBtn.disabled = false; return; }
      counts[randOutcome()]++;
      n++;
      updateBars();
      setTimeout(next, 55);
    }
    next();
  });

  makeBtnRow(container, sendBtn, autoBtn);
  container.appendChild(barsDiv);
}

// ─── Scene 3: mz-no-a ────────────────────────────────────────────────────────

function mzNoA(container) {
  const L = PT;
  const svg = svgBase(container);
  drawMZLayout(svg, false);

  // Two ghost photons for superposition
  const ph1 = svgEl("circle", { cx: L.src.x, cy: L.src.y, r: 5, fill: "#fbbf24", opacity: 0 });
  const ph2 = svgEl("circle", { cx: L.src.x, cy: L.src.y, r: 5, fill: "#a78bfa", opacity: 0 });
  svg.appendChild(ph1);
  svg.appendChild(ph2);

  // Path label: both routes active simultaneously
  const supLabel = svgEl("text", {
    x: (L.bs1.x + L.bs2.x) / 2, y: L.bs1.y + 26,
    "text-anchor": "middle", fill: "#64748b", "font-size": 10
  });
  supLabel.textContent = "her iki yol aynı anda";
  svg.appendChild(supLabel);

  const barsDiv = htmlEl("div", "pq-bars");
  const bB1 = makeBar(barsDiv, "B1", "#38bdf8");
  const bB2 = makeBar(barsDiv, "B2 (interferans!)", "#f472b6");

  const shock = htmlEl("div", "pq-shock", "B2'de hiç foton gözüklemiyor — girişim (interferans)!");
  container.appendChild(svg);

  let counts = { B1: 0, B2: 0 };
  let busy = false;

  function updateBars() {
    const tot = counts.B1 + counts.B2;
    if (!tot) return;
    const p1 = Math.round(counts.B1 / tot * 100);
    bB1.fill.style.width = p1 + "%"; bB1.pct.textContent = p1 + "%";
    bB2.fill.style.width = (100 - p1) + "%"; bB2.pct.textContent = (100 - p1) + "%";
    if (tot >= 5 && counts.B2 === 0) shock.classList.add("visible");
  }

  function shoot() {
    if (busy) return;
    busy = true;
    sendBtn.disabled = true;
    autoBtn.disabled = true;

    // Phase 1: src → bs1 (single photon)
    ph1.setAttribute("opacity", 1);
    ph1.setAttribute("cx", L.src.x);
    ph1.setAttribute("cy", L.src.y);

    animPath(ph1, [L.src, L.bs1], 320, () => {
      // Phase 2: split into two ghosts
      ph1.setAttribute("cx", L.bs1.x);
      ph1.setAttribute("cy", L.bs1.y);
      ph2.setAttribute("cx", L.bs1.x);
      ph2.setAttribute("cy", L.bs1.y);
      ph1.setAttribute("opacity", 0.65);
      ph2.setAttribute("opacity", 0.65);

      // ph1 = lower path, ph2 = upper path
      let done1 = false, done2 = false;

      function onBothDone() {
        if (!done1 || !done2) return;
        // Merge at BS2: photon always goes to B1
        ph1.setAttribute("opacity", 0);
        ph2.setAttribute("opacity", 0);
        const winner = svgEl("circle", { cx: L.bs2.x, cy: L.bs2.y, r: 6, fill: "#fbbf24", opacity: 1 });
        svg.appendChild(winner);
        animPath(winner, [L.bs2, L.b1], 260, () => {
          counts.B1++;
          updateBars();
          setTimeout(() => {
            svg.removeChild(winner);
            ph1.setAttribute("cx", L.src.x); ph1.setAttribute("cy", L.src.y); ph1.setAttribute("opacity", 0);
            ph2.setAttribute("cx", L.src.x); ph2.setAttribute("cy", L.src.y); ph2.setAttribute("opacity", 0);
            busy = false;
            sendBtn.disabled = false;
            autoBtn.disabled = false;
          }, 350);
        });
      }

      animPath(ph1, [L.bs1, L.bs2], 380, () => { done1 = true; onBothDone(); });
      animPath(ph2, [L.bs1, L.mirTL, L.mirTR, L.bs2], 380, () => { done2 = true; onBothDone(); });
    });
  }

  const sendBtn = htmlEl("button", "pq-btn", "Foton Gönder");
  sendBtn.addEventListener("click", shoot);

  const autoBtn = htmlEl("button", "pq-btn pq-btn-secondary", "Otomatik (×10)");
  autoBtn.addEventListener("click", () => {
    sendBtn.disabled = true; autoBtn.disabled = true;
    let n = 0;
    function next() {
      if (n >= 10) { sendBtn.disabled = false; autoBtn.disabled = false; return; }
      counts.B1++;
      n++;
      updateBars();
      setTimeout(next, 80);
    }
    next();
  });

  makeBtnRow(container, sendBtn, autoBtn);
  container.appendChild(barsDiv);
  container.appendChild(shock);
}

// ─── Scene 4: amplitude-cancel ───────────────────────────────────────────────

function amplitudeCancel(container) {
  // Visual: show how B2 gets +½ from path1 and -½ from path2 → sum = 0
  const sec = htmlEl("div", "pq-amp-section");

  const title = htmlEl("div", "pq-amp-title",
    "B2 dedektörüne gelen genlikler (probability amplitudes)");
  sec.appendChild(title);

  function ampRow(label, val, color) {
    const row = htmlEl("div", "pq-amp-row");
    const lbl = htmlEl("span", "pq-amp-label", label);
    const track = htmlEl("div", "pq-amp-track");
    const zero = htmlEl("div", "pq-amp-zero");
    const fill = htmlEl("div", "pq-amp-fill");
    const valEl = htmlEl("span", "pq-amp-value");

    // val in [-1, 1]; map to CSS: if positive, fill from 50% right; if negative, fill from left toward 50%
    if (val > 0) {
      fill.style.left = "50%";
      fill.style.width = "0%";
      fill.style.background = color;
    } else {
      fill.style.left = "50%";
      fill.style.width = "0%";
      fill.style.background = color;
    }
    valEl.textContent = "…";

    track.appendChild(zero);
    track.appendChild(fill);
    row.appendChild(lbl);
    row.appendChild(track);
    row.appendChild(valEl);
    sec.appendChild(row);
    return { fill, valEl, val, color };
  }

  const rows = [
    ampRow("Yol 1 (alt yol) →B2", +0.5, "#38bdf8"),
    ampRow("Yol 2 (üst yol) →B2", -0.5, "#f472b6"),
    ampRow("Toplam genlik →B2",    0,    "#64748b"),
  ];

  const sumRow = htmlEl("div", null);
  sumRow.style.cssText = "text-align:center;margin-top:0.6rem;font-size:0.82rem;color:#94a3b8;opacity:0;transition:opacity 0.6s";
  sumRow.innerHTML = `Genlik² = 0² = 0 &nbsp;→&nbsp; <strong style="color:#f87171">Olasılık = 0 %</strong> &nbsp;→&nbsp; B2'ye foton gitmez!`;
  sec.appendChild(sumRow);

  container.appendChild(sec);

  const btn = htmlEl("button", "pq-btn", "Göster");
  const btnRow = htmlEl("div", "pq-btn-row");
  btnRow.appendChild(btn);
  // Insert btn before sec
  container.insertBefore(btnRow, sec);

  let shown = false;
  btn.addEventListener("click", () => {
    if (shown) return;
    shown = true;
    btn.disabled = true;

    // Animate row 0: +0.5 → bar right of center
    setTimeout(() => {
      rows[0].fill.style.left = "50%";
      rows[0].fill.style.width = "25%";
      rows[0].valEl.textContent = "+½";
    }, 200);

    // Animate row 1: -0.5 → bar left of center
    setTimeout(() => {
      rows[1].fill.style.left = "25%";
      rows[1].fill.style.width = "25%";
      rows[1].valEl.textContent = "−½";
    }, 900);

    // Animate row 2 (sum): 0 → no bar, label 0
    setTimeout(() => {
      rows[2].fill.style.width = "0%";
      rows[2].valEl.textContent = "0";
      sumRow.style.opacity = "1";
    }, 1700);
  });
}

// ─── Entry point ─────────────────────────────────────────────────────────────

export function mountQuantumAnimations() {
  for (const div of document.querySelectorAll('[data-anim="quantum"]')) {
    const scene = (div.dataset.scene || "").trim();
    div.classList.add("pq-container");
    if      (scene === "bs-single")         bsSingle(div);
    else if (scene === "mz-with-a")         mzWithA(div);
    else if (scene === "mz-no-a")           mzNoA(div);
    else if (scene === "amplitude-cancel")  amplitudeCancel(div);
  }
}
