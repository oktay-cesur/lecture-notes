// switch-animations.js
// Klasik bit — elektriksel anahtar görselleştirmesi
// Sahneler: bit-switch | byte-switch

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

// ─── Tek bit anahtarı ─────────────────────────────────────────────────────────
//
// Pivot: sol bağlantı noktası. Kol (lever) pivot'tan döner.
// Açık (0): kol yukarı açılı, sağ kontağa değmez → devre kesik.
// Kapalı (1): kol yatay, sağ kontağa değer → devre tamamlanır.

function bitSwitch(container) {
  const W = 500, H = 150;

  const svg = svgEl("svg", {
    viewBox: `0 0 ${W} ${H}`,
    class: "pq-svg",
    style: `max-width:${W}px; cursor:pointer`
  });

  const wy       = 80;
  const pivX     = 155;
  const ctX      = 275;  // = pivX + leverLen
  const leverLen = 120;
  const OPEN_DEG  = -30;
  const CLOSE_DEG = 0;

  svg.appendChild(svgEl("line", {
    x1: 30, y1: wy, x2: pivX - 6, y2: wy,
    stroke: "#1e3a5f", "stroke-width": 3, "stroke-linecap": "round"
  }));
  svg.appendChild(svgEl("line", {
    x1: ctX + 6, y1: wy, x2: 370, y2: wy,
    stroke: "#1e3a5f", "stroke-width": 3, "stroke-linecap": "round"
  }));

  svg.appendChild(svgEl("line", {
    x1: pivX, y1: wy - 14, x2: pivX, y2: wy + 14,
    stroke: "#475569", "stroke-width": 2
  }));
  svg.appendChild(svgEl("circle", { cx: pivX, cy: wy, r: 5, fill: "#60a5fa" }));

  svg.appendChild(svgEl("line", {
    x1: ctX, y1: wy - 14, x2: ctX, y2: wy + 14,
    stroke: "#475569", "stroke-width": 2
  }));
  const rightDot = svgEl("circle", { cx: ctX, cy: wy, r: 5, fill: "#334155" });
  svg.appendChild(rightDot);

  const lever = svgEl("line", {
    stroke: "#f59e0b", "stroke-width": 3.5, "stroke-linecap": "round"
  });
  svg.appendChild(lever);

  const bitLabel = svgEl("text", {
    x: 420, y: wy - 22,
    "text-anchor": "middle",
    "font-size": 12, "font-weight": "bold",
    fill: "#475569", "font-family": "system-ui, sans-serif",
    "letter-spacing": 2
  });
  bitLabel.textContent = "BIT";
  svg.appendChild(bitLabel);

  const bitVal = svgEl("text", {
    x: 420, y: wy + 16,
    "text-anchor": "middle",
    "font-size": 52, "font-weight": "bold",
    fill: "#60a5fa", "font-family": "monospace"
  });
  svg.appendChild(bitVal);

  const stateLabel = svgEl("text", {
    x: 420, y: wy + 40,
    "text-anchor": "middle",
    "font-size": 11, fill: "#475569",
    "font-family": "system-ui, sans-serif"
  });
  svg.appendChild(stateLabel);

  container.appendChild(svg);

  let isClosed   = false;
  let currentDeg = OPEN_DEG;
  let busy       = false;

  function updateLever(deg) {
    const rad = deg * Math.PI / 180;
    lever.setAttribute("x1", pivX); lever.setAttribute("y1", wy);
    lever.setAttribute("x2", pivX + leverLen * Math.cos(rad));
    lever.setAttribute("y2", wy    + leverLen * Math.sin(rad));
    currentDeg = deg;
  }

  function applyState(closed) {
    if (closed) {
      bitVal.textContent = "1";
      bitVal.setAttribute("fill", "#22d3ee");
      stateLabel.textContent = "kapalı devre";
      stateLabel.setAttribute("fill", "#22d3ee");
      rightDot.setAttribute("fill", "#22d3ee");
    } else {
      bitVal.textContent = "0";
      bitVal.setAttribute("fill", "#60a5fa");
      stateLabel.textContent = "açık devre";
      stateLabel.setAttribute("fill", "#475569");
      rightDot.setAttribute("fill", "#334155");
    }
  }

  function animateTo(toDeg, onDone) {
    const fromDeg = currentDeg;
    let t0 = null;
    const ms = 450;
    function tick(ts) {
      if (t0 === null) t0 = ts;
      const raw = Math.min((ts - t0) / ms, 1);
      updateLever(fromDeg + (toDeg - fromDeg) * easeInOut(raw));
      if (raw < 1) requestAnimationFrame(tick);
      else { updateLever(toDeg); onDone && onDone(); }
    }
    requestAnimationFrame(tick);
  }

  function toggle() {
    if (busy) return;
    busy = true;
    btn.disabled = true;
    const toDeg = isClosed ? OPEN_DEG : CLOSE_DEG;
    isClosed = !isClosed;
    animateTo(toDeg, () => {
      applyState(isClosed);
      btn.textContent = isClosed ? "Aç  → 0" : "Kapat  → 1";
      busy = false;
      btn.disabled = false;
    });
  }

  updateLever(OPEN_DEG);
  applyState(false);

  const btn = htmlEl("button", "pq-btn", "Kapat  → 1");
  const btnRow = htmlEl("div", "pq-btn-row");
  btnRow.appendChild(btn);
  container.appendChild(btnRow);

  btn.addEventListener("click", toggle);
  svg.addEventListener("click", toggle);
}

// ─── 8-bit byte anahtarı ──────────────────────────────────────────────────────
//
// 8 adet mini anahtar — her biri bağımsız tıklanabilir.
// "Karıştır" butonu tümünü rastgele açar/kapar.
// Altta oluşan ikili dizi ve onluk karşılığı gösterilir.

function byteSwitch(container) {
  const N       = 8;
  const ROW_H   = 36;   // 36px → yarı-satır=18px > leverLen·sin(20°)≈17px
  const TOP     = 28;
  const W       = 280;
  const H       = TOP + N * ROW_H + 52;  // satırlar + binary + decimal

  const pivX     = 88;
  const leverLen = 50;
  const ctX      = pivX + leverLen;  // 138 — kapalıda kol tam buraya değer
  const OPEN_DEG  = -20;
  const CLOSE_DEG = 0;

  const svg = svgEl("svg", {
    viewBox: `0 0 ${W} ${H}`,
    class: "pq-svg",
    style: `max-width:${W}px`
  });

  // "BYTE" başlık etiketi
  const hdrLbl = svgEl("text", {
    x: W / 2, y: 16,
    "text-anchor": "middle",
    "font-size": 11, "font-weight": "bold",
    fill: "#334155", "font-family": "system-ui, sans-serif",
    "letter-spacing": 3
  });
  hdrLbl.textContent = "BYTE";
  svg.appendChild(hdrLbl);

  // Sütun başlıkları
  const colHdr = (x, txt) => {
    const t = svgEl("text", {
      x, y: TOP - 6, "text-anchor": "middle",
      "font-size": 8, fill: "#334155", "font-family": "monospace"
    });
    t.textContent = txt;
    svg.appendChild(t);
  };
  colHdr(18, "bit");
  colHdr(W - 30, "değer");

  // ── Her bit satırı ────────────────────────────────────────────────────────────

  // currentAngles: anlık lever açısı (mid-animation doğruluk için)
  const currentAngles = new Array(N).fill(OPEN_DEG);
  const bits          = new Array(N).fill(false);
  const leverEls      = [];
  const rightDots     = [];
  const bitLabels     = [];

  for (let i = 0; i < N; i++) {
    const wy = TOP + i * ROW_H + ROW_H / 2;

    // Bit konumu etiketi — MSB (bit 7) en üstte
    const posLbl = svgEl("text", {
      x: 18, y: wy + 4,
      "text-anchor": "middle",
      "font-size": 9, fill: "#334155", "font-family": "monospace"
    });
    posLbl.textContent = String(N - 1 - i);
    svg.appendChild(posLbl);

    // Sol tel
    svg.appendChild(svgEl("line", {
      x1: 30, y1: wy, x2: pivX - 5, y2: wy,
      stroke: "#1e3a5f", "stroke-width": 2, "stroke-linecap": "round"
    }));

    // Sağ tel (ctX=138 → 142 to 188)
    svg.appendChild(svgEl("line", {
      x1: ctX + 4, y1: wy, x2: 188, y2: wy,
      stroke: "#1e3a5f", "stroke-width": 2, "stroke-linecap": "round"
    }));

    // Pivot
    svg.appendChild(svgEl("line", {
      x1: pivX, y1: wy - 10, x2: pivX, y2: wy + 10,
      stroke: "#475569", "stroke-width": 1.5
    }));
    svg.appendChild(svgEl("circle", { cx: pivX, cy: wy, r: 3.5, fill: "#60a5fa" }));

    // Sağ kontak
    svg.appendChild(svgEl("line", {
      x1: ctX, y1: wy - 10, x2: ctX, y2: wy + 10,
      stroke: "#475569", "stroke-width": 1.5
    }));
    const rd = svgEl("circle", { cx: ctX, cy: wy, r: 3.5, fill: "#334155" });
    svg.appendChild(rd);
    rightDots.push(rd);

    // Anahtar kolu
    const lev = svgEl("line", {
      stroke: "#f59e0b", "stroke-width": 2.5, "stroke-linecap": "round"
    });
    svg.appendChild(lev);
    leverEls.push({ el: lev, wy });

    // Bit değer etiketi
    const bl = svgEl("text", {
      x: W - 30, y: wy + 4,
      "text-anchor": "middle",
      "font-size": 13, "font-weight": "bold",
      fill: "#60a5fa", "font-family": "monospace"
    });
    bl.textContent = "0";
    svg.appendChild(bl);
    bitLabels.push(bl);

    // Tıklanabilir alan (satırın tamamı)
    const hit = svgEl("rect", {
      x: 28, y: wy - ROW_H / 2, width: 168, height: ROW_H,
      fill: "transparent", cursor: "pointer"
    });
    hit.addEventListener("click", () => { if (!busy) toggleBit(i); });
    svg.appendChild(hit);
  }

  // ── Binary & decimal göstergesi ───────────────────────────────────────────────

  const sepY = TOP + N * ROW_H + 8;
  svg.appendChild(svgEl("line", {
    x1: 20, y1: sepY, x2: W - 20, y2: sepY,
    stroke: "#1e293b", "stroke-width": 1
  }));

  const binaryTxt = svgEl("text", {
    x: W / 2, y: sepY + 18,
    "text-anchor": "middle",
    "font-size": 15, "font-weight": "bold",
    fill: "#94a3b8", "font-family": "monospace",
    "letter-spacing": 3
  });
  svg.appendChild(binaryTxt);

  const decimalTxt = svgEl("text", {
    x: W / 2, y: sepY + 38,
    "text-anchor": "middle",
    "font-size": 13,
    fill: "#475569", "font-family": "system-ui, sans-serif"
  });
  svg.appendChild(decimalTxt);

  container.appendChild(svg);

  // ── Helpers ──────────────────────────────────────────────────────────────────

  let busy = false;

  function setLever(i, deg) {
    const { el, wy } = leverEls[i];
    const rad = deg * Math.PI / 180;
    el.setAttribute("x1", pivX); el.setAttribute("y1", wy);
    el.setAttribute("x2", pivX + leverLen * Math.cos(rad));
    el.setAttribute("y2", wy   + leverLen * Math.sin(rad));
    currentAngles[i] = deg;
  }

  function applyBit(i, val) {
    bits[i] = val;
    bitLabels[i].textContent = val ? "1" : "0";
    bitLabels[i].setAttribute("fill", val ? "#22d3ee" : "#60a5fa");
    rightDots[i].setAttribute("fill", val ? "#22d3ee" : "#334155");
  }

  function updateDisplay() {
    const binStr = bits.map(b => b ? "1" : "0").join("");
    const dec    = parseInt(binStr, 2);
    binaryTxt.textContent = binStr;
    decimalTxt.textContent = `= ${dec}`;
    decimalTxt.setAttribute("fill", dec > 0 ? "#22d3ee" : "#475569");
  }

  function animBit(i, toDeg, onDone) {
    const fromDeg = currentAngles[i];
    let t0 = null;
    const ms = 360;
    function tick(ts) {
      if (t0 === null) t0 = ts;
      const raw = Math.min((ts - t0) / ms, 1);
      setLever(i, fromDeg + (toDeg - fromDeg) * easeInOut(raw));
      if (raw < 1) requestAnimationFrame(tick);
      else { setLever(i, toDeg); onDone && onDone(); }
    }
    requestAnimationFrame(tick);
  }

  function toggleBit(i) {
    const newVal = !bits[i];
    const toDeg  = newVal ? CLOSE_DEG : OPEN_DEG;
    animBit(i, toDeg, () => {
      applyBit(i, newVal);
      updateDisplay();
    });
  }

  // ── Başlangıç ────────────────────────────────────────────────────────────────

  for (let i = 0; i < N; i++) {
    setLever(i, OPEN_DEG);
    applyBit(i, false);
  }
  updateDisplay();

  // ── Karıştır butonu ──────────────────────────────────────────────────────────

  const btn = htmlEl("button", "pq-btn", "Karıştır");
  const btnRow = htmlEl("div", "pq-btn-row");
  btnRow.appendChild(btn);
  container.appendChild(btnRow);

  btn.addEventListener("click", () => {
    if (busy) return;
    busy = true;
    btn.disabled = true;

    const targets  = Array.from({ length: N }, () => Math.random() > 0.5);
    const fromDegs = currentAngles.slice();
    const toDegs   = targets.map(t => t ? CLOSE_DEG : OPEN_DEG);

    let done = 0;

    for (let i = 0; i < N; i++) {
      const fromDeg = fromDegs[i];
      const toDeg   = toDegs[i];
      const bitIdx  = i;
      const ms      = 300 + Math.random() * 180;
      let t0 = null;

      function tick(ts) {
        if (t0 === null) t0 = ts;
        const raw = Math.min((ts - t0) / ms, 1);
        setLever(bitIdx, fromDeg + (toDeg - fromDeg) * easeInOut(raw));
        if (raw < 1) {
          requestAnimationFrame(tick);
        } else {
          setLever(bitIdx, toDeg);
          applyBit(bitIdx, targets[bitIdx]);
          done++;
          if (done === N) {
            updateDisplay();
            busy = false;
            btn.disabled = false;
          }
        }
      }

      requestAnimationFrame(tick);
    }
  });
}

// ─── Entry point ──────────────────────────────────────────────────────────────

export function mountSwitchAnimations() {
  for (const div of document.querySelectorAll('[data-anim="switch"]')) {
    const scene = (div.dataset.scene || "").trim();
    div.classList.add("pq-container");
    if      (scene === "bit-switch")  bitSwitch(div);
    else if (scene === "byte-switch") byteSwitch(div);
  }
}
