// superdense-anim.js
// Superdense Coding protokolü — adım adım etkileşimli animasyon
// data-anim="superdense" div'i ile çalışır

const NS = "http://www.w3.org/2000/svg";

function svgEl(tag, attrs) {
  const el = document.createElementNS(NS, tag);
  if (attrs) for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, String(v));
  return el;
}

function htmlEl(tag, cls, text) {
  const el = document.createElement(tag);
  if (cls)  el.className = cls;
  if (text != null) el.textContent = text;
  return el;
}

// ── Protokol adım verisi ──────────────────────────────────────────────────────

const OP = { '00': 'I', '01': 'X', '10': 'Z', '11': 'XZ' };

const STEPS = {
  '00': [
    {
      zone: 'bell',
      state: '(1/√2)(|00⟩ + |11⟩)  =  |Φ⁺⟩',
      desc:  'Bell çifti hazır. Asja q₁\'i, Balvis q₂\'yi elinde tutuyor.',
    },
    {
      zone: 'encode',
      state: '(1/√2)(|00⟩ + |11⟩)  =  |Φ⁺⟩',
      desc:  'Mesaj 00 → I (işlem yok). Bell durumu değişmez: |Φ⁺⟩',
    },
    {
      zone: 'channel',
      state: '(1/√2)(|00⟩ + |11⟩)  =  |Φ⁺⟩',
      desc:  'Asja q₁\'i Balvis\'e gönderiyor. Balvis artık her iki kubiti elinde tutuyor.',
    },
    {
      zone: 'bcnot',
      state: '(1/√2)(|00⟩ + |10⟩)',
      desc:  'Balvis CNOT uygular (q₁ kontrol, q₂ hedef): |00⟩→|00⟩, |11⟩→|10⟩',
    },
    {
      zone: 'bh',
      state: '|00⟩',
      desc:  'Balvis q₁\'e Hadamard uygular. Durum tamamen ayrışır.',
    },
    {
      zone: 'meas',
      state: '|00⟩',
      result: '00',
      desc:  'Ölçüm: q₁ = 0, q₂ = 0 → Balvis "00" okudu! ✓',
    },
  ],
  '01': [
    {
      zone: 'bell',
      state: '(1/√2)(|00⟩ + |11⟩)  =  |Φ⁺⟩',
      desc:  'Bell çifti hazır. Asja q₁\'i, Balvis q₂\'yi elinde tutuyor.',
    },
    {
      zone: 'encode',
      state: '(1/√2)(|10⟩ + |01⟩)  =  |Ψ⁺⟩',
      desc:  'Mesaj 01 → Asja X uygular. |Φ⁺⟩ → |Ψ⁺⟩',
    },
    {
      zone: 'channel',
      state: '(1/√2)(|10⟩ + |01⟩)  =  |Ψ⁺⟩',
      desc:  'Asja q₁\'i Balvis\'e gönderiyor.',
    },
    {
      zone: 'bcnot',
      state: '(1/√2)(|11⟩ + |01⟩)',
      desc:  'Balvis CNOT uygular: |10⟩→|11⟩, |01⟩→|01⟩',
    },
    {
      zone: 'bh',
      state: '|01⟩',
      desc:  'Balvis q₁\'e Hadamard uygular.',
    },
    {
      zone: 'meas',
      state: '|01⟩',
      result: '01',
      desc:  'Ölçüm: q₁ = 0, q₂ = 1 → Balvis "01" okudu! ✓',
    },
  ],
  '10': [
    {
      zone: 'bell',
      state: '(1/√2)(|00⟩ + |11⟩)  =  |Φ⁺⟩',
      desc:  'Bell çifti hazır. Asja q₁\'i, Balvis q₂\'yi elinde tutuyor.',
    },
    {
      zone: 'encode',
      state: '(1/√2)(|00⟩ − |11⟩)  =  |Φ⁻⟩',
      desc:  'Mesaj 10 → Asja Z uygular. |Φ⁺⟩ → |Φ⁻⟩',
    },
    {
      zone: 'channel',
      state: '(1/√2)(|00⟩ − |11⟩)  =  |Φ⁻⟩',
      desc:  'Asja q₁\'i Balvis\'e gönderiyor.',
    },
    {
      zone: 'bcnot',
      state: '(1/√2)(|00⟩ − |10⟩)',
      desc:  'Balvis CNOT uygular: |00⟩→|00⟩, |11⟩→|10⟩',
    },
    {
      zone: 'bh',
      state: '|10⟩',
      desc:  'Balvis q₁\'e Hadamard uygular.',
    },
    {
      zone: 'meas',
      state: '|10⟩',
      result: '10',
      desc:  'Ölçüm: q₁ = 1, q₂ = 0 → Balvis "10" okudu! ✓',
    },
  ],
  '11': [
    {
      zone: 'bell',
      state: '(1/√2)(|00⟩ + |11⟩)  =  |Φ⁺⟩',
      desc:  'Bell çifti hazır. Asja q₁\'i, Balvis q₂\'yi elinde tutuyor.',
    },
    {
      zone: 'encode',
      state: '(1/√2)(|01⟩ − |10⟩)  =  |Ψ⁻⟩',
      desc:  'Mesaj 11 → Asja X sonra Z uygular. |Φ⁺⟩ → |Ψ⁻⟩',
    },
    {
      zone: 'channel',
      state: '(1/√2)(|01⟩ − |10⟩)  =  |Ψ⁻⟩',
      desc:  'Asja q₁\'i Balvis\'e gönderiyor.',
    },
    {
      zone: 'bcnot',
      state: '(1/√2)(|01⟩ − |11⟩)',
      desc:  'Balvis CNOT uygular: |01⟩→|01⟩, |10⟩→|11⟩',
    },
    {
      zone: 'bh',
      state: '|11⟩',
      desc:  'Balvis q₁\'e Hadamard uygular.',
    },
    {
      zone: 'meas',
      state: '|11⟩',
      result: '11',
      desc:  'Ölçüm: q₁ = 1, q₂ = 1 → Balvis "11" okudu! ✓',
    },
  ],
};

// ── Devre SVG ─────────────────────────────────────────────────────────────────

function buildCircuit(container) {
  const W = 660, H = 165;
  const Q1 = 70, Q2 = 128;   // wire y positions

  const svg = svgEl("svg", {
    viewBox: `0 0 ${W} ${H}`,
    class: "pq-svg",
    style: `max-width:${W}px;width:100%;display:block;margin:0 auto`,
  });

  // ── Zone highlight rects (drawn first, behind everything) ─────────────────
  //   bell/bcnot/meas cover both wires; encode/channel/bh cover q₁ only
  const ZD = {
    bell:    { x:54,  y:46, w:119, h:H-55, fill:"#dbeafe" },
    encode:  { x:176, y:46, w:90,  h:46,   fill:"#fef9c3" },
    channel: { x:270, y:46, w:76,  h:46,   fill:"#dcfce7" },
    bcnot:   { x:349, y:46, w:56,  h:H-55, fill:"#d1fae5" },
    bh:      { x:408, y:46, w:54,  h:46,   fill:"#d1fae5" },
    meas:    { x:465, y:46, w:86,  h:H-55, fill:"#f3e8ff" },
  };
  const zones = {};
  for (const [name, d] of Object.entries(ZD)) {
    const r = svgEl("rect", { x:d.x, y:d.y, width:d.w, height:d.h, rx:5, fill:d.fill, opacity:0 });
    zones[name] = r;
    svg.appendChild(r);
  }

  // ── Section labels ─────────────────────────────────────────────────────────
  const slbAttrs = { "font-size":8.5, "font-family":"system-ui,sans-serif", fill:"#94a3b8" };
  const slab = (x, txt) => {
    const t = svgEl("text", { x, y:40, "text-anchor":"middle", ...slbAttrs });
    t.textContent = txt;
    svg.appendChild(t);
  };
  slab(113, "Bell Çifti (Önceden)");
  slab(221, "Asja");
  slab(308, "Kuantum Kanalı");
  slab(490, "Balvis");

  // ── Wire labels ────────────────────────────────────────────────────────────
  const wlab = (yw, main, sub) => {
    const t1 = svgEl("text", { x:2, y:yw-2, "text-anchor":"start",
      fill:"#475569", "font-size":10, "font-weight":"bold", "font-family":"system-ui,sans-serif" });
    t1.textContent = main;
    svg.appendChild(t1);
    const t2 = svgEl("text", { x:2, y:yw+10, "text-anchor":"start",
      fill:"#94a3b8", "font-size":8, "font-family":"system-ui,sans-serif" });
    t2.textContent = sub;
    svg.appendChild(t2);
  };
  wlab(Q1, "q₁", "(Asja)");
  wlab(Q2, "q₂", "(Balvis)");

  // ── Wires ──────────────────────────────────────────────────────────────────
  // q₁: solid → dashed channel → solid
  svg.appendChild(svgEl("line", {
    x1:53, y1:Q1, x2:270, y2:Q1, stroke:"#475569", "stroke-width":1.5 }));
  svg.appendChild(svgEl("line", {
    x1:270, y1:Q1, x2:346, y2:Q1, stroke:"#16a34a", "stroke-width":2, "stroke-dasharray":"6 3" }));
  svg.appendChild(svgEl("line", {
    x1:346, y1:Q1, x2:484, y2:Q1, stroke:"#475569", "stroke-width":1.5 }));
  // q₂: full solid
  svg.appendChild(svgEl("line", {
    x1:53, y1:Q2, x2:484, y2:Q2, stroke:"#475569", "stroke-width":1.5 }));

  // channel arrow (pointing right, along dashed segment)
  svg.appendChild(svgEl("polygon", {
    points: `${290},${Q1-6} ${314},${Q1} ${290},${Q1+6}`,
    fill:"#16a34a", opacity:0.8,
  }));

  // ── Gate helper ────────────────────────────────────────────────────────────
  function gbox(cx, cy, w, label, fill2) {
    svg.appendChild(svgEl("rect", {
      x:cx-w/2, y:cy-11, width:w, height:22, rx:3,
      fill:fill2 || "white", stroke:"#334155", "stroke-width":1.5 }));
    const t = svgEl("text", {
      x:cx, y:cy+4, "text-anchor":"middle", fill:"#1e3a5f",
      "font-size":11, "font-weight":"bold", "font-family":"system-ui,sans-serif" });
    t.textContent = label;
    svg.appendChild(t);
  }

  function cnot(x, y1, y2) {
    svg.appendChild(svgEl("line",   { x1:x, y1:y1, x2:x, y2:y2, stroke:"#334155", "stroke-width":1.5 }));
    svg.appendChild(svgEl("circle", { cx:x, cy:y1, r:5, fill:"#334155" }));
    svg.appendChild(svgEl("circle", { cx:x, cy:y2, r:8, fill:"none", stroke:"#334155", "stroke-width":1.5 }));
    svg.appendChild(svgEl("line",   { x1:x, y1:y2-8, x2:x, y2:y2+8, stroke:"#334155", "stroke-width":1.5 }));
    svg.appendChild(svgEl("line",   { x1:x-8, y1:y2, x2:x+8, y2:y2, stroke:"#334155", "stroke-width":1.5 }));
  }

  function mbox(cx, y) {
    svg.appendChild(svgEl("rect",   { x:cx-13, y:y-11, width:26, height:22, rx:3, fill:"white", stroke:"#334155", "stroke-width":1.5 }));
    svg.appendChild(svgEl("path",   { d:`M${cx-7},${y+3} A7,7 0 0,1 ${cx+7},${y+3}`, fill:"none", stroke:"#334155", "stroke-width":1.2 }));
    svg.appendChild(svgEl("line",   { x1:cx, y1:y+3, x2:cx+5, y2:y-3, stroke:"#334155", "stroke-width":1.2 }));
  }

  // ── Static gates ───────────────────────────────────────────────────────────
  gbox(92,  Q1, 26, "H",  "#dbeafe");   // Bell H
  cnot(145, Q1, Q2);                     // Bell CNOT
  cnot(377, Q1, Q2);                     // Balvis CNOT
  gbox(435, Q1, 26, "H",  "#dbeafe");   // Balvis H
  mbox(498, Q1);                         // Measurement q₁
  mbox(498, Q2);                         // Measurement q₂

  // ── Dynamic encoding gate (label changes with message) ────────────────────
  svg.appendChild(svgEl("rect", {
    x:221-22, y:Q1-11, width:44, height:22, rx:3,
    fill:"#fef08a", stroke:"#ca8a04", "stroke-width":1.5 }));
  const encText = svgEl("text", {
    x:221, y:Q1+4, "text-anchor":"middle", fill:"#92400e",
    "font-size":11, "font-weight":"bold", "font-family":"system-ui,sans-serif" });
  encText.textContent = "I";
  svg.appendChild(encText);

  // ── Result bits (shown on measurement) ────────────────────────────────────
  const bit1 = svgEl("text", {
    x:524, y:Q1+4, "text-anchor":"start", fill:"#6b7280",
    "font-size":14, "font-weight":"bold", "font-family":"system-ui,sans-serif" });
  const bit2 = svgEl("text", {
    x:524, y:Q2+4, "text-anchor":"start", fill:"#6b7280",
    "font-size":14, "font-weight":"bold", "font-family":"system-ui,sans-serif" });
  bit1.textContent = "?";
  bit2.textContent = "?";
  svg.appendChild(bit1);
  svg.appendChild(bit2);

  container.appendChild(svg);
  return { zones, encText, bit1, bit2 };
}

// ── Ana sahne ─────────────────────────────────────────────────────────────────

function superdenseCoding(container) {
  container.classList.add("pq-container");
  container.style.maxWidth = "680px";
  container.style.margin   = "0 auto";

  // mesaj seçici
  const msgRow = document.createElement("div");
  msgRow.style.cssText = "display:flex;gap:0.5rem;justify-content:center;margin-bottom:0.6rem;flex-wrap:wrap";
  const msgBtns = {};
  for (const m of ['00', '01', '10', '11']) {
    const b = htmlEl("button", "pq-btn", `Mesaj: ${m}`);
    msgRow.appendChild(b);
    msgBtns[m] = b;
  }
  container.appendChild(msgRow);

  const { zones, encText, bit1, bit2 } = buildCircuit(container);

  // durum göstergesi
  const stateDiv = htmlEl("div");
  stateDiv.style.cssText =
    "text-align:center;font-family:'Courier New',monospace;font-size:0.98rem;" +
    "color:#1e3a5f;font-weight:500;margin:0.5rem 0 0.2rem;min-height:1.6em";
  container.appendChild(stateDiv);

  // navigasyon
  const navRow = document.createElement("div");
  navRow.style.cssText = "display:flex;align-items:center;justify-content:center;gap:0.7rem;margin:0.25rem 0";
  const btnPrev  = htmlEl("button", "pq-btn", "← Önceki");
  const stepSpan = htmlEl("span");
  stepSpan.style.cssText =
    "font-size:0.8rem;color:#64748b;min-width:5.5rem;text-align:center;font-family:system-ui,sans-serif";
  const btnNext  = htmlEl("button", "pq-btn", "Sonraki →");
  navRow.append(btnPrev, stepSpan, btnNext);
  container.appendChild(navRow);

  // açıklama
  const descDiv = htmlEl("div");
  descDiv.style.cssText =
    "text-align:center;font-size:0.82rem;color:#475569;" +
    "font-family:system-ui,sans-serif;min-height:2.5em;padding:0.1rem 1rem;line-height:1.4";
  container.appendChild(descDiv);

  // ── Durum ──────────────────────────────────────────────────────────────────
  let msg  = '00';
  let step = 0;

  function render() {
    const steps = STEPS[msg];
    const s     = steps[step];

    // mesaj buton rengi
    for (const [m, b] of Object.entries(msgBtns)) {
      b.style.background = m === msg ? "#1e3a5f" : "";
      b.style.color      = m === msg ? "white"   : "";
    }

    // kodlama kapısı
    encText.textContent = OP[msg];

    // bölge vurgusu
    for (const r of Object.values(zones)) r.setAttribute("opacity", 0);
    if (s.zone && zones[s.zone]) zones[s.zone].setAttribute("opacity", 0.55);

    // sonuç bitleri
    if (s.result) {
      bit1.textContent = s.result[0];
      bit2.textContent = s.result[1];
      bit1.setAttribute("fill", "#16a34a");
      bit2.setAttribute("fill", "#16a34a");
    } else {
      bit1.textContent = "?";
      bit2.textContent = "?";
      bit1.setAttribute("fill", "#6b7280");
      bit2.setAttribute("fill", "#6b7280");
    }

    stateDiv.textContent = s.state;
    stepSpan.textContent = `Adım ${step + 1} / ${steps.length}`;
    descDiv.textContent  = s.desc;
    btnPrev.disabled = step === 0;
    btnNext.disabled = step === steps.length - 1;
  }

  // ── Olaylar ────────────────────────────────────────────────────────────────
  for (const [m, b] of Object.entries(msgBtns)) {
    b.addEventListener('click', () => { msg = m; step = 0; render(); });
  }
  btnPrev.addEventListener('click', () => { if (step > 0)                   { step--; render(); } });
  btnNext.addEventListener('click', () => { if (step < STEPS[msg].length-1) { step++; render(); } });

  render();
}

export function mountSuperdenseAnimations() {
  for (const div of document.querySelectorAll('[data-anim="superdense"]')) {
    superdenseCoding(div);
  }
}