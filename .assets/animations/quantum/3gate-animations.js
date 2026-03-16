// gate-animations.js
// Kuantum kapısı animasyonları — birim çember görselleştirmesi
// Sahneler: x-gate | h-gate | z-gate | phase-kickback

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

// ─── Ortak: birim çember SVG ──────────────────────────────────────────────────

function buildBlochCircle(container, opts = {}) {
  const CW = opts.width  || 280;
  const CH = opts.height || 280;
  const cx = CW / 2, cy = CH / 2;
  const R  = opts.R || 90;

  const svg = svgEl("svg", {
    viewBox: `0 0 ${CW} ${CH}`,
    class: "pq-svg",
    style: `max-width:${CW}px`
  });

  // Çember
  svg.appendChild(svgEl("circle", {
    cx, cy, r: R,
    fill: "none", stroke: "#1e3a5f", "stroke-width": 2
  }));

  // 4 eksen noktası
  for (const [ax, ay] of [[cx, cy - R], [cx, cy + R], [cx - R, cy], [cx + R, cy]]) {
    svg.appendChild(svgEl("circle", { cx: ax, cy: ay, r: 2.5, fill: "#334155" }));
  }

  // Eksen etiketleri (opsiyonel)
  if (opts.axisLabels) {
    const lblData = [
      [cx + R + 10, cy + 4, "+x", "start"],
      [cx - R - 10, cy + 4, "−x", "end"],
      [cx, cy - R - 10, "+z", "middle"],
      [cx, cy + R + 16, "−z", "middle"],
    ];
    for (const [x, y, txt, anchor] of lblData) {
      const t = svgEl("text", {
        x, y, "text-anchor": anchor,
        fill: "#334155", "font-size": 9
      });
      t.textContent = txt;
      svg.appendChild(t);
    }
  }

  // Merkez noktası
  svg.appendChild(svgEl("circle", { cx, cy, r: 3, fill: "#475569" }));

  // Yay izi
  const arcTrace = svgEl("path", {
    d: "", fill: "none",
    stroke: "#3b82f6", "stroke-width": 1.5,
    "stroke-dasharray": "4 3", opacity: 0
  });
  svg.appendChild(arcTrace);

  // Ok gövdesi
  const shaft = svgEl("line", {
    x1: cx, y1: cy, x2: cx, y2: cy - (R - 12),
    stroke: "#60a5fa", "stroke-width": 3, "stroke-linecap": "round"
  });
  svg.appendChild(shaft);

  // Ok ucu
  const head = svgEl("polygon", { fill: "#60a5fa" });
  svg.appendChild(head);

  container.appendChild(svg);

  function updateArrow(angleDeg, color) {
    const c = color || "#60a5fa";
    shaft.setAttribute("stroke", c);
    head.setAttribute("fill", c);
    const rad = angleDeg * Math.PI / 180;
    const dx = Math.cos(rad), dy = Math.sin(rad);
    const ex = cx + (R - 12) * dx;
    const ey = cy + (R - 12) * dy;
    shaft.setAttribute("x2", ex);
    shaft.setAttribute("y2", ey);
    const tipX = cx + R * dx, tipY = cy + R * dy;
    const px = -dy * 5, py = dx * 5;
    head.setAttribute("points",
      `${tipX},${tipY} ${ex + px},${ey + py} ${ex - px},${ey - py}`);
  }

  function updateArc(fromDeg, toDeg) {
    const steps = 40;
    const pts = [];
    for (let i = 0; i <= steps; i++) {
      const a = (fromDeg + (toDeg - fromDeg) * (i / steps)) * Math.PI / 180;
      pts.push(`${cx + R * Math.cos(a)},${cy + R * Math.sin(a)}`);
    }
    arcTrace.setAttribute("d", "M" + pts.join("L"));
  }

  return { svg, cx, cy, R, arcTrace, shaft, head, updateArrow, updateArc };
}

// ─── X-gate sahnesi ───────────────────────────────────────────────────────────

function xGate(container) {
  const CW = 280, CH = 280;
  const cx = 140, cy = 140;
  const R = 90;

  const bloch = buildBlochCircle(container, { width: CW, height: CH, R });
  const { svg, arcTrace, updateArrow, updateArc } = bloch;

  // Durum etiketleri
  const lbl0 = svgEl("text", {
    x: cx, y: cy - R - 14,
    "text-anchor": "middle",
    fill: "#60a5fa", "font-size": 15, "font-weight": "bold"
  });
  lbl0.textContent = "|0\u27E9";

  const lbl1 = svgEl("text", {
    x: cx, y: cy + R + 24,
    "text-anchor": "middle",
    fill: "#475569", "font-size": 15, "font-weight": "bold"
  });
  lbl1.textContent = "|1\u27E9";

  svg.appendChild(lbl0);
  svg.appendChild(lbl1);

  const statusDiv = htmlEl("div");
  statusDiv.style.cssText =
    "text-align:center;font-size:0.85rem;color:#94a3b8;" +
    "margin:0.25rem 0 0.4rem;font-family:system-ui,sans-serif";
  container.appendChild(statusDiv);

  function setStateLabels(deg) {
    const norm = ((deg % 360) + 360) % 360;
    const isZero = Math.abs(norm - 270) < 5;
    const isOne  = Math.abs(norm - 90) < 5;
    lbl0.setAttribute("fill", isZero ? "#60a5fa" : "#475569");
    lbl1.setAttribute("fill", isOne  ? "#60a5fa" : "#475569");
    statusDiv.textContent = isZero
      ? "Durum: |0\u27E9"
      : isOne
        ? "Durum: |1\u27E9"
        : "Dönüyor\u2026";
  }

  let currentDeg = -90;
  let busy = false;

  updateArrow(currentDeg);
  setStateLabels(currentDeg);

  const btn = htmlEl("button", "pq-btn", "X Uygula");
  const btnRow = htmlEl("div", "pq-btn-row");
  btnRow.appendChild(btn);
  container.appendChild(btnRow);

  btn.addEventListener("click", () => {
    if (busy) return;
    busy = true;
    btn.disabled = true;

    const from = currentDeg;
    const to = from + 180;

    arcTrace.setAttribute("opacity", 0.6);
    updateArc(from, to);

    animAngle(from, to, 850, (angle) => {
      updateArrow(angle);
      updateArc(from, angle);
      setStateLabels(angle);
    }, () => {
      currentDeg = to;
      while (currentDeg >= 180) currentDeg -= 360;
      while (currentDeg < -180) currentDeg += 360;

      updateArrow(currentDeg);
      arcTrace.setAttribute("opacity", 0);
      setStateLabels(currentDeg);

      busy = false;
      btn.disabled = false;
    });
  });
}

// ─── H-gate sahnesi ───────────────────────────────────────────────────────────
//
// Bloch küre 2D projeksiyonu (XZ düzlemi):
//   |0⟩ = kuzey kutbu (−90°)
//   |1⟩ = güney kutbu (+90°)
//   |+⟩ = sağ ekvator (0°)   → H|0⟩ = |+⟩
//   |−⟩ = sol ekvator (180°) → H|1⟩ = |−⟩
//
// H, Bloch küresi üzerinde X+Z eksenlerinin ortasına göre yansıma yapar.
// 2D anımasyonda bu: |0⟩↔|+⟩ ve |1⟩↔|−⟩ arası 90° dönüş olarak gösterilir.
// (Gerçek Bloch hareketi daha karmaşık; bu pedagojik basitleştirmedir.)

function hGate(container) {
  const CW = 300, CH = 300;
  const cx = 150, cy = 150;
  const R = 95;

  const bloch = buildBlochCircle(container, { width: CW, height: CH, R });
  const { svg, arcTrace, updateArrow, updateArc } = bloch;

  // Eksen çizgisi (X ekseni göstergesi, ekvator)
  const equator = svgEl("line", {
    x1: cx - R, y1: cy, x2: cx + R, y2: cy,
    stroke: "#1e3a5f", "stroke-width": 1, "stroke-dasharray": "3 3"
  });
  svg.appendChild(equator);

  // Kutup etiketleri
  function addLabel(x, y, text, color, anchor = "middle") {
    const t = svgEl("text", {
      x, y, "text-anchor": anchor,
      fill: color, "font-size": 13, "font-weight": "bold"
    });
    t.textContent = text;
    svg.appendChild(t);
    return t;
  }

  const lblZ0  = addLabel(cx, cy - R - 14, "|0\u27E9", "#475569");
  const lblZ1  = addLabel(cx, cy + R + 24, "|1\u27E9", "#475569");
  const lblPlus  = addLabel(cx + R + 16, cy + 5, "|+\u27E9", "#475569", "start");
  const lblMinus = addLabel(cx - R - 16, cy + 5, "|\u2212\u27E9", "#475569", "end");

  const statusDiv = htmlEl("div");
  statusDiv.style.cssText =
    "text-align:center;font-size:0.85rem;color:#94a3b8;" +
    "margin:0.25rem 0 0.4rem;font-family:system-ui,sans-serif";
  container.appendChild(statusDiv);

  // Durum → açı eşlemesi (XZ düzlemi, 0°=sağ, açı saat yönü SVG)
  // |0⟩ = tepe = −90°, |+⟩ = sağ = 0°, |1⟩ = alt = 90°, |−⟩ = sol = 180°
  const STATES = [
    { deg: -90, label: "Durum: |0\u27E9",             key: "z0" },
    {  deg:   0, label: "Durum: |+\u27E9 = H|0\u27E9", key: "plus" },
    {  deg:  90, label: "Durum: |1\u27E9",             key: "z1" },
    { deg: 180, label: "Durum: |\u2212\u27E9 = H|1\u27E9", key: "minus" },
  ];

  const allLabels = {
    z0: lblZ0, plus: lblPlus, z1: lblZ1, minus: lblMinus
  };

  function setLabels(key) {
    for (const [k, el] of Object.entries(allLabels)) {
      el.setAttribute("fill", k === key ? "#60a5fa" : "#475569");
    }
  }

  // H hareketi: her uygulamada 90° saat yönü döner (|0⟩→|+⟩→|1⟩→|−⟩→|0⟩)
  // Bu pedagojik; gerçek Bloch rotasyonu daha karmaşık
  let stateIdx = 0;
  let busy = false;

  updateArrow(STATES[0].deg);
  setLabels(STATES[0].key);
  statusDiv.textContent = STATES[0].label;

  const btn = htmlEl("button", "pq-btn", "H Uygula");

  // Formül metni
  const formulaDiv = htmlEl("div");
  formulaDiv.style.cssText =
    "text-align:center;font-size:0.78rem;color:#64748b;" +
    "margin:0.1rem 0 0.3rem;font-family:monospace;letter-spacing:0.02em";
  formulaDiv.textContent = "H = \u00BD\u00B7[[1,1],[1,\u22121]]";
  container.appendChild(formulaDiv);

  const btnRow = htmlEl("div", "pq-btn-row");
  btnRow.appendChild(btn);
  container.appendChild(btnRow);

  btn.addEventListener("click", () => {
    if (busy) return;
    busy = true;
    btn.disabled = true;

    const fromState = STATES[stateIdx];
    const nextIdx   = (stateIdx + 1) % STATES.length;
    const toState   = STATES[nextIdx];

    // H geçişleri: z0→plus, plus→z1, z1→minus, minus→z0
    // Açı farkı her zaman +90°
    const from = fromState.deg;
    const to   = from + 90;

    arcTrace.setAttribute("opacity", 0.6);
    updateArc(from, to);
    statusDiv.textContent = "Dönüyor\u2026";

    animAngle(from, to, 750, (angle) => {
      updateArrow(angle, "#a78bfa"); // H kapısı için mor
      updateArc(from, angle);
    }, () => {
      stateIdx = nextIdx;
      updateArrow(toState.deg, "#a78bfa");
      arcTrace.setAttribute("opacity", 0);
      setLabels(toState.key);
      statusDiv.textContent = toState.label;

      busy = false;
      btn.disabled = false;
    });
  });
}

// ─── Z-gate sahnesi ───────────────────────────────────────────────────────────
//
// Z kapısı, hesaplama tabanında |0⟩→|0⟩ ve |1⟩→−|1⟩ yapar.
// Bloch küresi üzerinde Z ekseni etrafında 180° döndürme → XY düzleminde izi var.
//
// 2D gösterim stratejisi:
//   - Vektör |0⟩ veya |1⟩ konumundayken Z kapısı görsel değişim yaratmaz
//     (ama faz işareti değişir → renkli "faz ışığı" ile gösterilir)
//   - Kullanıcı önce H ile |+⟩'a geçer, sonra Z uygular → |+⟩→|−⟩ döndürme
//     (Bu Z'nin en görünür etkisidir)
//   - Mod: iki ayrı adım, açıklamalı

function zGate(container) {
  const CW = 300, CH = 300;
  const cx = 150, cy = 150;
  const R = 95;

  const bloch = buildBlochCircle(container, { width: CW, height: CH, R });
  const { svg, arcTrace, updateArrow, updateArc } = bloch;

  // Eksen çizgisi (ekvator)
  svg.appendChild(svgEl("line", {
    x1: cx - R, y1: cy, x2: cx + R, y2: cy,
    stroke: "#1e3a5f", "stroke-width": 1, "stroke-dasharray": "3 3"
  }));

  // Z ekseni kılavuzu (dikey kesik çizgi)
  svg.appendChild(svgEl("line", {
    x1: cx, y1: cy - R, x2: cx, y2: cy + R,
    stroke: "#1e3a5f", "stroke-width": 1, "stroke-dasharray": "3 3", opacity: 0.5
  }));

  function addLabel(x, y, text, color, anchor = "middle") {
    const t = svgEl("text", {
      x, y, "text-anchor": anchor,
      fill: color, "font-size": 13, "font-weight": "bold"
    });
    t.textContent = text;
    svg.appendChild(t);
    return t;
  }

  const lblZ0   = addLabel(cx, cy - R - 14, "|0\u27E9",        "#60a5fa");
  const lblZ1   = addLabel(cx, cy + R + 24, "|1\u27E9",        "#475569");
  const lblPlus = addLabel(cx + R + 16, cy + 5, "|+\u27E9",    "#475569", "start");
  const lblMinus= addLabel(cx - R - 16, cy + 5, "|\u2212\u27E9","#475569", "end");

  // Faz göstergesi (Z kapısının özü)
  const phaseIndicator = htmlEl("div");
  phaseIndicator.style.cssText =
    "text-align:center;font-size:0.82rem;padding:0.3rem 0.6rem;" +
    "border-radius:6px;margin:0.3rem auto;max-width:260px;" +
    "background:#1e293b;color:#94a3b8;transition:all 0.5s;font-family:monospace";
  phaseIndicator.textContent = "Faz: \u03C6 = 0";
  container.appendChild(phaseIndicator);

  const statusDiv = htmlEl("div");
  statusDiv.style.cssText =
    "text-align:center;font-size:0.82rem;color:#94a3b8;" +
    "margin:0.15rem 0 0.4rem;font-family:system-ui,sans-serif";
  statusDiv.textContent = "Durum: |0\u27E9";
  container.appendChild(statusDiv);

  // Durum makinesi: z0 → (H) → plus → (Z) → minus → (Z) → plus
  //                                               z0 → (Z) → z0 (faz değişimi, görsel yok)
  //                                               z1 → (Z) → z1 (faz değişimi, görsel yok)

  const STATES_MAP = {
    z0:    { deg: -90 },
    z1:    { deg:  90 },
    plus:  { deg:   0 },
    minus: { deg: 180 },
  };

  const allLabels = { z0: lblZ0, z1: lblZ1, plus: lblPlus, minus: lblMinus };
  let currentKey = "z0";
  let phase = 0; // global faz (0 veya 1 = π)
  let busy = false;

  function setLabels(key) {
    for (const [k, el] of Object.entries(allLabels)) {
      el.setAttribute("fill", k === key ? "#22d3ee" : "#475569");
    }
  }

  function updatePhaseDisplay() {
    if (phase === 0) {
      phaseIndicator.style.background = "#1e293b";
      phaseIndicator.style.color = "#94a3b8";
      phaseIndicator.textContent = "Faz: \u03C6 = 0  (katsayı: +1)";
    } else {
      phaseIndicator.style.background = "#3b1f2b";
      phaseIndicator.style.color = "#f87171";
      phaseIndicator.textContent = "Faz: \u03C6 = \u03C0  (katsayı: \u22121)";
    }
  }

  setLabels("z0");
  updateArrow(STATES_MAP.z0.deg, "#22d3ee");
  updatePhaseDisplay();

  // H butonu
  const hBtn = htmlEl("button", "pq-btn pq-btn-secondary", "H (süperpozisyon)");
  // Z butonu
  const zBtn = htmlEl("button", "pq-btn", "Z Uygula");

  const btnRow = htmlEl("div", "pq-btn-row");
  btnRow.appendChild(hBtn);
  btnRow.appendChild(zBtn);
  container.appendChild(btnRow);

  // Uyarı: Z'nin görsel etkisini görmek için önce H gerekli
  const hint = htmlEl("div");
  hint.style.cssText =
    "text-align:center;font-size:0.76rem;color:#475569;" +
    "margin:0.2rem 0;font-family:system-ui,sans-serif";
  hint.textContent = "İpucu: Z'nin görsel etkisi için önce H uygulayın";
  container.appendChild(hint);

  hBtn.addEventListener("click", () => {
    if (busy) return;
    const s = STATES_MAP[currentKey];
    let targetKey;

    if (currentKey === "z0")    targetKey = "plus";
    else if (currentKey === "plus")  targetKey = "z0";
    else if (currentKey === "z1")    targetKey = "minus";
    else if (currentKey === "minus") targetKey = "z1";

    const from = s.deg;
    const to   = STATES_MAP[targetKey].deg;
    // En kısa yönden döndür
    let delta = ((to - from + 540) % 360) - 180;

    busy = true;
    hBtn.disabled = true;
    zBtn.disabled = true;
    statusDiv.textContent = "H uygulanıyor…";
    arcTrace.setAttribute("opacity", 0.5);
    updateArc(from, from + delta);

    animAngle(from, from + delta, 700, (angle) => {
      updateArrow(angle, "#a78bfa");
      updateArc(from, angle);
    }, () => {
      currentKey = targetKey;
      updateArrow(STATES_MAP[targetKey].deg, "#22d3ee");
      arcTrace.setAttribute("opacity", 0);
      setLabels(targetKey);
      statusDiv.textContent = `Durum: ${targetKey === "plus" ? "|+\u27E9" : targetKey === "minus" ? "|\u2212\u27E9" : targetKey === "z0" ? "|0\u27E9" : "|1\u27E9"}`;
      busy = false;
      hBtn.disabled = false;
      zBtn.disabled = false;
    });
  });

  zBtn.addEventListener("click", () => {
    if (busy) return;
    busy = true;
    hBtn.disabled = true;
    zBtn.disabled = true;

    const s = STATES_MAP[currentKey];

    if (currentKey === "plus" || currentKey === "minus") {
      // Görsel döndürme: plus→minus veya minus→plus (Z ekseni etrafında 180°)
      const from = s.deg;
      const to   = from + 180;
      const targetKey = currentKey === "plus" ? "minus" : "plus";

      statusDiv.textContent = "Z uygulanıyor… (faz)";
      arcTrace.setAttribute("opacity", 0.5);
      arcTrace.setAttribute("stroke", "#22d3ee");
      updateArc(from, to);

      animAngle(from, to, 800, (angle) => {
        updateArrow(angle, "#22d3ee");
        updateArc(from, angle);
      }, () => {
        currentKey = targetKey;
        updateArrow(STATES_MAP[targetKey].deg, "#22d3ee");
        arcTrace.setAttribute("opacity", 0);
        arcTrace.setAttribute("stroke", "#3b82f6");
        phase = (phase + 1) % 2;
        updatePhaseDisplay();
        setLabels(targetKey);
        statusDiv.textContent = `Durum: ${targetKey === "plus" ? "|+\u27E9" : "|\u2212\u27E9"}`;
        busy = false;
        hBtn.disabled = false;
        zBtn.disabled = false;
      });
    } else {
      // |0⟩ veya |1⟩ → görsel değişim yok, sadece faz işareti
      // |0⟩ etkilenmez; |1⟩ eksi faz alır
      const isOne = currentKey === "z1";
      if (isOne) phase = (phase + 1) % 2;

      // Flaş animasyonu
      let flashes = 0;
      const flashColor = isOne ? "#f87171" : "#60a5fa";
      function flashArrow() {
        if (flashes >= 4) {
          updateArrow(s.deg, "#22d3ee");
          updatePhaseDisplay();
          statusDiv.textContent = isOne
            ? "Z|1\u27E9 = \u22121|1\u27E9 — faz değişti!"
            : "Z|0\u27E9 = |0\u27E9 — değişim yok";
          busy = false;
          hBtn.disabled = false;
          zBtn.disabled = false;
          return;
        }
        updateArrow(s.deg, flashes % 2 === 0 ? flashColor : "#1e3a5f");
        flashes++;
        setTimeout(flashArrow, 180);
      }
      statusDiv.textContent = "Z uygulanıyor…";
      setTimeout(flashArrow, 100);
    }
  });
}

// ─── Phase Kickback sahnesi ───────────────────────────────────────────────────
//
// Devre: kontrol qubit |−⟩, hedef qubit |x⟩ → CNOT → kontrol qubitte faz geri teper
// Görselleştirme stratejisi:
//   - 2 qubit hattı (devre çizimi)
//   - Adım adım animasyon: hazırlık → CNOT → faz kickback
//   - Kontrol qubitinin faz durumu renkli gösterilir
//   - Matematiksel açıklama her adımda gösterilir

function phaseKickback(container) {
  const CW = 560, CH = 220;
  const svg = svgEl("svg", {
    viewBox: `0 0 ${CW} ${CH}`,
    class: "pq-svg",
    style: "max-width:560px"
  });

  // ── Koordinatlar ──
  const Y_C = 75;    // kontrol qubit yüksekliği
  const Y_T = 155;   // hedef qubit yüksekliği
  const X_START = 40;
  const X_H_C   = 120; // H kapısı (kontrol)
  const X_H_T   = 120; // H kapısı (hedef, |−⟩ hazırlığı: H sonrası Z)
  const X_Z_T   = 195; // Z kapısı (hedef, |−⟩ tamamlanması)
  const X_CNOT  = 310; // CNOT
  const X_END   = 430;

  // ── Qubit hatları ──
  function wireLine(y, x1, x2, color = "#1e3a5f") {
    svg.appendChild(svgEl("line", {
      x1, y1: y, x2, y2: y,
      stroke: color, "stroke-width": 2
    }));
  }

  // Tam hatlar (arka plan)
  wireLine(Y_C, X_START, X_END + 80);
  wireLine(Y_T, X_START, X_END + 80);

  // Qubit etiketleri (başlangıç durumu)
  function svgTxt(x, y, text, color = "#94a3b8", size = 11, anchor = "middle") {
    const t = svgEl("text", { x, y, "text-anchor": anchor, fill: color, "font-size": size });
    t.textContent = text;
    return t;
  }

  svg.appendChild(svgTxt(X_START - 5, Y_C + 4, "|0\u27E9", "#60a5fa", 13, "end"));
  svg.appendChild(svgTxt(X_START - 5, Y_T + 4, "|0\u27E9", "#60a5fa", 13, "end"));

  svg.appendChild(svgTxt(X_START + 5, Y_C - 12, "Kontrol (q₀)", "#475569", 9, "start"));
  svg.appendChild(svgTxt(X_START + 5, Y_T + 20, "Hedef (q₁)",   "#475569", 9, "start"));

  // ── Kapı çizim yardımcıları ──
  function drawGateBox(x, y, label, color = "#1e3a5f", strokeColor = "#60a5fa") {
    const g = svgEl("g");
    g.appendChild(svgEl("rect", {
      x: x - 16, y: y - 16, width: 32, height: 32,
      fill: color, stroke: strokeColor, "stroke-width": 2, rx: 4
    }));
    const t = svgEl("text", {
      x, y: y + 5, "text-anchor": "middle",
      fill: "#e2e8f0", "font-size": 12, "font-weight": "bold"
    });
    t.textContent = label;
    g.appendChild(t);
    return g;
  }

  function drawCNOT(x, yCtrl, yTgt) {
    const g = svgEl("g");
    // Kontrol noktası (dolu daire)
    g.appendChild(svgEl("circle", { cx: x, cy: yCtrl, r: 7, fill: "#60a5fa" }));
    // Dikey bağlantı
    g.appendChild(svgEl("line", {
      x1: x, y1: yCtrl + 7, x2: x, y2: yTgt - 16,
      stroke: "#60a5fa", "stroke-width": 2
    }));
    // Hedef (çember + çapraz)
    g.appendChild(svgEl("circle", { cx: x, cy: yTgt, r: 16, fill: "#1e3a5f", stroke: "#60a5fa", "stroke-width": 2 }));
    g.appendChild(svgEl("line", { x1: x - 10, y1: yTgt, x2: x + 10, y2: yTgt, stroke: "#60a5fa", "stroke-width": 2 }));
    g.appendChild(svgEl("line", { x1: x, y1: yTgt - 10, x2: x, y2: yTgt + 10, stroke: "#60a5fa", "stroke-width": 2 }));
    return g;
  }

  // ── Statik kapılar ──
  const gHc = drawGateBox(X_H_C, Y_C, "H");
  const gHt = drawGateBox(X_H_T, Y_T, "H");
  const gZt = drawGateBox(X_Z_T, Y_T, "Z", "#1e3a5f", "#a78bfa");
  const gCNOT = drawCNOT(X_CNOT, Y_C, Y_T);

  // Başlangıçta soluk
  [gHc, gHt, gZt, gCNOT].forEach(g => { g.setAttribute("opacity", 0.3); svg.appendChild(g); });

  // Çıkış etiketleri (başlangıçta gizli)
  const outCtrl = svgTxt(X_END + 85, Y_C + 4, "", "#f87171", 12, "end");
  const outTgt  = svgTxt(X_END + 85, Y_T + 4, "", "#94a3b8", 12, "end");
  svg.appendChild(outCtrl);
  svg.appendChild(outTgt);

  // Faz göstergesi oku (kontrol qubitten çıkan ok)
  const kickbackArrow = svgEl("path", {
    d: `M${X_CNOT} ${Y_C - 25} Q${X_CNOT - 60} ${Y_C - 60} ${X_H_C + 5} ${Y_C - 25}`,
    fill: "none", stroke: "#f87171", "stroke-width": 2,
    "marker-end": "url(#arrowhead)", opacity: 0,
    "stroke-dasharray": "5 3"
  });

  // Ok başı tanımı
  const defs = svgEl("defs");
  const marker = svgEl("marker", {
    id: "arrowhead", markerWidth: "8", markerHeight: "8",
    refX: "3", refY: "3", orient: "auto"
  });
  const markerPath = svgEl("path", { d: "M0,0 L0,6 L6,3 z", fill: "#f87171" });
  marker.appendChild(markerPath);
  defs.appendChild(marker);
  svg.appendChild(defs);
  svg.appendChild(kickbackArrow);

  container.appendChild(svg);

  // ── Açıklama paneli ──
  const infoDiv = htmlEl("div");
  infoDiv.style.cssText =
    "font-size:0.82rem;color:#94a3b8;background:#0f172a;" +
    "border:1px solid #1e3a5f;border-radius:6px;padding:0.5rem 0.75rem;" +
    "margin:0.3rem 0;font-family:monospace;min-height:3.2rem;line-height:1.5;" +
    "transition:all 0.4s";
  infoDiv.innerHTML = "Devre hazır. Adım adım ilerleyin.";
  container.appendChild(infoDiv);

  // ── Adım butonu ──
  let step = 0;
  let busy = false;

  const nextBtn = htmlEl("button", "pq-btn", "Sonraki Adım \u2192");
  const resetBtn = htmlEl("button", "pq-btn pq-btn-secondary", "Sıfırla");
  const btnRow = htmlEl("div", "pq-btn-row");
  btnRow.appendChild(nextBtn);
  btnRow.appendChild(resetBtn);
  container.appendChild(btnRow);

  // Adım adım etiketler ve efektler
  const STEPS = [
    {
      label: "1/4 — H kapısı kontrol qubite uygulanıyor: |0\u27E9 \u2192 |+\u27E9 = (|0\u27E9+|1\u27E9)/\u221A2",
      gate: gHc,
      ctrl_out: "|+\u27E9",
      tgt_out: "|0\u27E9",
    },
    {
      label: "2/4 — Hedef qubit |1\u27E9'e hazırlanıyor (H\u2192Z): |0\u27E9 \u2192 |\u2212\u27E9 = (|0\u27E9\u2212|1\u27E9)/\u221A2",
      gate: gHt,
      gate2: gZt,
      ctrl_out: "|+\u27E9",
      tgt_out: "|\u2212\u27E9",
    },
    {
      label: "3/4 — CNOT uygulanıyor. Hedef |\u2212\u27E9 olduğundan kontrol qubite faz geri tepmesi oluşur.",
      gate: gCNOT,
      ctrl_out: "|\u2212\u27E9 \u2190 kickback!",
      tgt_out: "|\u2212\u27E9",
      kickback: true,
    },
    {
      label: "4/4 — Sonuç: Kontrol qubit |\u2212\u27E9 oldu (faz \u03C0 kazandı). Hedef qubit değişmedi.\n\nCNOT\u00B7(|+\u27E9\u2297|\u2212\u27E9) = |\u2212\u27E9\u2297|\u2212\u27E9",
      gate: null,
      ctrl_out: "|\u2212\u27E9",
      tgt_out: "|\u2212\u27E9",
      final: true,
    },
  ];

  function applyStep(s) {
    if (s.gate)  s.gate.setAttribute("opacity", 1);
    if (s.gate2) s.gate2.setAttribute("opacity", 1);
    outCtrl.textContent = s.ctrl_out || "";
    outTgt.textContent  = s.tgt_out  || "";
    outCtrl.setAttribute("fill", s.kickback || s.final ? "#f87171" : "#60a5fa");
    infoDiv.innerHTML = s.label.replace(/\n/g, "<br>");

    if (s.kickback) {
      kickbackArrow.setAttribute("opacity", 1);
      // Animasyonlu titreşim efekti (kontrol hattı)
      let flashes = 0;
      function flashCtrl() {
        if (flashes >= 5) return;
        wireLine(Y_C, X_CNOT - 120, X_CNOT, flashes % 2 === 0 ? "#f87171" : "#1e3a5f");
        flashes++;
        setTimeout(flashCtrl, 180);
      }
      flashCtrl();
    }

    if (s.final) {
      nextBtn.disabled = true;
      nextBtn.textContent = "Tamamlandı";
    }
  }

  nextBtn.addEventListener("click", () => {
    if (busy || step >= STEPS.length) return;
    busy = true;
    setTimeout(() => {
      applyStep(STEPS[step]);
      step++;
      busy = false;
    }, 120);
  });

  resetBtn.addEventListener("click", () => {
    step = 0;
    [gHc, gHt, gZt, gCNOT].forEach(g => g.setAttribute("opacity", 0.3));
    outCtrl.textContent = "";
    outTgt.textContent  = "";
    kickbackArrow.setAttribute("opacity", 0);
    infoDiv.innerHTML = "Devre hazır. Adım adım ilerleyin.";
    nextBtn.disabled = false;
    nextBtn.textContent = "Sonraki Adım \u2192";
    // Kontrol hattını sıfırla
    wireLine(Y_C, X_CNOT - 120, X_CNOT);
  });
}

// ─── Entry point ─────────────────────────────────────────────────────────────

export function mountGate3Animations() {
  for (const div of document.querySelectorAll('[data-anim="gate3"]')) {
    const scene = (div.dataset.scene || "").trim();
    div.classList.add("pq-container");
    if      (scene === "x-gate")          xGate(div);
    else if (scene === "h-gate")          hGate(div);
    else if (scene === "z-gate")          zGate(div);
    else if (scene === "phase-kickback")  phaseKickback(div);
  }
}
