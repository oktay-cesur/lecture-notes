// nqueens-hc.js — Interactive 8-Queens Hill Climbing Visualization
//
// Usage:
//   <div data-anim="custom" data-src="nqueens-hc.js" data-css="nqueens-hc.css"
//        data-queens="0,4,7,5,2,6,1,3" data-label="Cozum"></div>
//
// Attributes:
//   data-queens  : comma-separated row indices (col 0..7), e.g. "0,4,7,5,2,6,1,6"
//   data-label   : board title text (optional)
//   data-scene   : preset name OR comma-separated for multi-board
//                  presets: "stuck", "solution", "start"
//                  multi:   "stuck,solution"
//   data-editable: "true" (default) or "false" — click cells to move queens
//
// When editable: click any cell to move that column's queen there.

const SVG_NS = "http://www.w3.org/2000/svg";
const N = 8;
const CELL = 40;
const BOARD = N * CELL;
const PAD_TOP = 28;
const PAD_BOTTOM = 32;
const PAD_SIDE = 20;
const TOTAL_W = PAD_SIDE + BOARD + 4;
const TOTAL_H = PAD_TOP + BOARD + PAD_BOTTOM;

const C = {
  cellLight:    "#334155",
  cellDark:     "#1e293b",
  cellHover:    "#475569",
  border:       "#475569",
  queen:        "#e2e8f0",
  queenStroke:  "#0f172a",
  attackLine:   "#ef4444",
  attackQueen:  "#fca5a5",
  label:        "#94a3b8",
  hBad:         "#ef4444",
  hGood:        "#22c55e",
  colLabel:     "#64748b"
};

const PRESETS = {
  stuck:    { queens: [0, 4, 7, 5, 2, 6, 1, 6], label: "Yerel Minimum" },
  solution: { queens: [0, 4, 7, 5, 2, 6, 1, 3], label: "Cozum" },
  start:    { queens: [4, 6, 0, 2, 7, 5, 3, 6], label: "Baslangic" }
};

function computeAttacks(queens) {
  const pairs = [];
  for (let i = 0; i < queens.length; i++) {
    for (let j = i + 1; j < queens.length; j++) {
      if (queens[i] === queens[j] || Math.abs(queens[i] - queens[j]) === Math.abs(i - j)) {
        pairs.push([i, j]);
      }
    }
  }
  return pairs;
}

function el(tag, attrs, text) {
  const e = document.createElementNS(SVG_NS, tag);
  if (attrs) for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  if (text != null) e.textContent = text;
  return e;
}

function parseQueens(str) {
  const parts = str.split(",").map(s => parseInt(s.trim(), 10));
  if (parts.length === N && parts.every(v => v >= 0 && v < N)) return parts;
  return null;
}

// ── Board renderer ──────────────────────────────────────────────

function createBoard(initQueens, label, editable) {
  const state = { queens: [...initQueens] };

  const container = document.createElement("div");
  container.className = "nq-hc-board";

  const svgRoot = el("svg", {
    viewBox: `0 0 ${TOTAL_W} ${TOTAL_H}`,
    width: "100%",
    style: "max-width:" + TOTAL_W + "px; display:block; cursor:" + (editable ? "pointer" : "default") + ";"
  });
  container.appendChild(svgRoot);

  function render() {
    while (svgRoot.firstChild) svgRoot.removeChild(svgRoot.firstChild);

    const pairs = computeAttacks(state.queens);
    const h = pairs.length;
    const attackingCols = new Set();
    for (const [a, b] of pairs) { attackingCols.add(a); attackingCols.add(b); }

    // Title
    svgRoot.appendChild(el("text", {
      x: PAD_SIDE + BOARD / 2, y: 18,
      "text-anchor": "middle",
      fill: C.label,
      "font-size": "13px",
      "font-family": "system-ui,sans-serif",
      "font-weight": "600",
      "letter-spacing": "0.5px"
    }, label || ""));

    const g = el("g", { transform: `translate(${PAD_SIDE},${PAD_TOP})` });

    // Row labels
    for (let r = 0; r < N; r++) {
      g.appendChild(el("text", {
        x: -10, y: r * CELL + CELL / 2 + 1,
        "text-anchor": "middle", "dominant-baseline": "central",
        fill: C.colLabel, "font-size": "10px", "font-family": "monospace"
      }, String(N - r)));
    }

    // Col labels
    for (let c = 0; c < N; c++) {
      g.appendChild(el("text", {
        x: c * CELL + CELL / 2, y: BOARD + 14,
        "text-anchor": "middle",
        fill: C.colLabel, "font-size": "10px", "font-family": "monospace"
      }, String.fromCharCode(97 + c)));
    }

    // Cells
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        const rect = el("rect", {
          x: c * CELL, y: r * CELL,
          width: CELL, height: CELL,
          fill: (r + c) % 2 === 0 ? C.cellLight : C.cellDark,
          stroke: C.border, "stroke-width": "0.5"
        });
        if (editable) {
          rect.dataset.col = c;
          rect.dataset.row = r;
        }
        g.appendChild(rect);
      }
    }

    // Attack lines
    for (const [ci, cj] of pairs) {
      g.appendChild(el("line", {
        x1: ci * CELL + CELL / 2, y1: state.queens[ci] * CELL + CELL / 2,
        x2: cj * CELL + CELL / 2, y2: state.queens[cj] * CELL + CELL / 2,
        stroke: C.attackLine, "stroke-width": "2.5",
        opacity: "0.5", "stroke-dasharray": "5,3", "stroke-linecap": "round"
      }));
    }

    // Queens
    for (let c = 0; c < N; c++) {
      const r = state.queens[c];
      const isAtk = attackingCols.has(c);

      if (isAtk) {
        g.appendChild(el("circle", {
          cx: c * CELL + CELL / 2, cy: r * CELL + CELL / 2,
          r: CELL / 2 - 4, fill: C.attackLine, opacity: "0.15"
        }));
      }

      const queen = el("text", {
        x: c * CELL + CELL / 2, y: r * CELL + CELL / 2 + 1,
        "text-anchor": "middle", "dominant-baseline": "central",
        fill: isAtk ? C.attackQueen : C.queen,
        stroke: C.queenStroke, "stroke-width": "0.3",
        "font-size": "26px", style: "pointer-events:none;"
      }, "\u265B");
      g.appendChild(queen);
    }

    svgRoot.appendChild(g);

    // h value
    svgRoot.appendChild(el("text", {
      x: PAD_SIDE + BOARD / 2, y: PAD_TOP + BOARD + 28,
      "text-anchor": "middle",
      fill: h === 0 ? C.hGood : C.hBad,
      "font-size": "15px", "font-family": "monospace", "font-weight": "bold"
    }, "h = " + h));
  }

  // Click handler
  if (editable) {
    svgRoot.addEventListener("click", (evt) => {
      const target = evt.target.closest("rect[data-col]");
      if (!target) return;
      const c = parseInt(target.dataset.col, 10);
      const r = parseInt(target.dataset.row, 10);
      if (state.queens[c] === r) return; // no change
      state.queens[c] = r;
      render();
    });
  }

  render();
  return container;
}

// ── Mount ───────────────────────────────────────────────────────

export function mount(div, dataset) {
  const editable = dataset.editable !== "false";
  const wrap = document.createElement("div");
  wrap.className = "nq-hc-container";

  // Direct queens attribute → single board
  if (dataset.queens) {
    const q = parseQueens(dataset.queens);
    if (q) {
      wrap.appendChild(createBoard(q, dataset.label || "", editable));
      div.appendChild(wrap);
      return;
    }
  }

  // Scene-based (presets or multi)
  const keys = (dataset.scene || "stuck").split(",").map(s => s.trim());
  for (const key of keys) {
    const preset = PRESETS[key];
    if (!preset) continue;
    wrap.appendChild(createBoard(preset.queens, preset.label, editable));
  }

  div.appendChild(wrap);
}
