// chessboard.js — Generic reusable chessboard renderer
//
// ── Direct use (custom-loader) ──────────────────────────────────
//
//   <div data-anim="custom" data-src="chessboard.js" data-css="chessboard.css"
//        data-pieces="e1:K,d8:q,a2:P" data-label="Ornek"></div>
//
// ── Attributes ──────────────────────────────────────────────────
//
//   data-pieces       Comma-separated "sq:piece" pairs.
//                     sq  = algebraic (a1–h8)
//                     piece = FEN letter: KQRBNPkqrbnp
//                     Example: "e1:K,d1:Q,a8:r"
//
//   data-queens       Shorthand for n-queens: comma-separated row indices
//                     (0=top rank). Places black queens (♛).
//                     Example: "0,4,7,5,2,6,1,3"
//
//   data-highlight    Squares to highlight: "e4,d5" or "e4:#color,d5"
//
//   data-lines        Lines between squares: "a1-h8,e2-e7"
//                     Optional color suffix: "a1-h8:#ef4444"
//
//   data-show-attacks "true" → auto-draw attack lines for queens
//
//   data-label        Title text above board
//   data-status       Text below board (e.g. "h = 3")
//   data-status-color Color for status text
//   data-editable     "true" → click cells to move queen in that column
//                     (only works with data-queens mode)
//
// ── Import from other modules ───────────────────────────────────
//
//   import { createBoard } from "./chessboard.js";
//
//   const board = createBoard({
//     pieces: [{ sq: "e1", piece: "K" }],
//     highlights: [{ sq: "e4", color: "#fbbf24" }],
//     lines: [{ from: "a1", to: "h8", color: "#ef4444" }],
//     label: "Title",
//     status: { text: "h = 0", color: "#22c55e" },
//   });
//   someDiv.appendChild(board.el);
//   board.update({ pieces: [...] });     // re-render
//

const SVG_NS = "http://www.w3.org/2000/svg";
const N = 8;
const CELL = 40;
const BOARD_PX = N * CELL;
const PAD_TOP = 28;
const PAD_BOTTOM = 32;
const PAD_LEFT = 20;
const VIEW_W = PAD_LEFT + BOARD_PX + 4;
const VIEW_H = PAD_TOP + BOARD_PX + PAD_BOTTOM;

// ── Piece map ───────────────────────────────────────────────────

const PIECE_CHAR = {
  K: "\u2654", Q: "\u2655", R: "\u2656", B: "\u2657", N: "\u2658", P: "\u2659",
  k: "\u265A", q: "\u265B", r: "\u265C", b: "\u265D", n: "\u265E", p: "\u265F"
};

const PIECE_COLOR = {};
for (const ch of "KQRBNP") PIECE_COLOR[ch] = "white";
for (const ch of "kqrbnp") PIECE_COLOR[ch] = "black";

// ── Theme ───────────────────────────────────────────────────────

const TH = {
  cellLight:      "#334155",
  cellDark:       "#1e293b",
  border:         "#475569",
  highlight:      "#fbbf24",
  highlightAlpha: "0.25",
  lineDefault:    "#ef4444",
  lineWidth:      "2.5",
  lineDash:       "5,3",
  pieceWhite:     "#f1f5f9",
  pieceBlack:     "#e2e8f0",
  pieceStroke:    "#0f172a",
  atkGlow:        "#ef4444",
  labelColor:     "#94a3b8",
  coordColor:     "#64748b",
  statusGood:     "#22c55e",
  statusBad:      "#ef4444",
  statusDefault:  "#f8fafc",
};

// ── Coordinate helpers ──────────────────────────────────────────

function sqToRC(sq) {
  const col = sq.charCodeAt(0) - 97;
  const row = N - parseInt(sq[1], 10);
  return { row, col };
}

function rcToSq(row, col) {
  return String.fromCharCode(97 + col) + String(N - row);
}

function cellCenter(row, col) {
  return { x: col * CELL + CELL / 2, y: row * CELL + CELL / 2 };
}

// ── SVG helper ──────────────────────────────────────────────────

function s(tag, attrs, text) {
  const e = document.createElementNS(SVG_NS, tag);
  if (attrs) for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  if (text != null) e.textContent = text;
  return e;
}

// ── Attack computation (queens) ─────────────────────────────────

function queenAttacks(queens) {
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

// ── Parsers ─────────────────────────────────────────────────────

function parsePieces(str) {
  if (!str) return [];
  return str.split(",").map(tok => {
    const [sq, piece] = tok.trim().split(":");
    return { sq: sq.trim(), piece: piece.trim() };
  }).filter(p => p.sq && p.piece && PIECE_CHAR[p.piece]);
}

function parseQueens(str) {
  if (!str) return null;
  const rows = str.split(",").map(v => parseInt(v.trim(), 10));
  if (rows.length !== N || rows.some(v => isNaN(v) || v < 0 || v >= N)) return null;
  return rows;
}

function parseHighlights(str) {
  if (!str) return [];
  return str.split(",").map(tok => {
    const parts = tok.trim().split(":");
    return { sq: parts[0], color: parts[1] || TH.highlight };
  });
}

function parseLines(str) {
  if (!str) return [];
  return str.split(",").map(tok => {
    const parts = tok.trim().split(":");
    const [fromSq, toSq] = parts[0].split("-");
    return { from: fromSq, to: toSq, color: parts[1] || TH.lineDefault };
  });
}

// ── Board renderer ──────────────────────────────────────────────

function render(svgRoot, config) {
  while (svgRoot.firstChild) svgRoot.removeChild(svgRoot.firstChild);

  const pieces     = config.pieces || [];
  const highlights = config.highlights || [];
  const lines      = config.lines || [];
  const label      = config.label || "";
  const status     = config.status || null;

  // Build quick lookup: sq → piece letter
  const pieceMap = new Map();
  for (const p of pieces) pieceMap.set(p.sq, p.piece);

  // Squares that are line endpoints (for glow)
  const lineSqs = new Set();
  for (const ln of lines) { lineSqs.add(ln.from); lineSqs.add(ln.to); }

  // Label
  if (label) {
    svgRoot.appendChild(s("text", {
      x: PAD_LEFT + BOARD_PX / 2, y: 18,
      "text-anchor": "middle", fill: TH.labelColor,
      "font-size": "13px", "font-family": "system-ui,sans-serif",
      "font-weight": "600", "letter-spacing": "0.5px"
    }, label));
  }

  const g = s("g", { transform: `translate(${PAD_LEFT},${PAD_TOP})` });

  // Row labels (8→1)
  for (let r = 0; r < N; r++) {
    g.appendChild(s("text", {
      x: -10, y: r * CELL + CELL / 2 + 1,
      "text-anchor": "middle", "dominant-baseline": "central",
      fill: TH.coordColor, "font-size": "10px", "font-family": "monospace"
    }, String(N - r)));
  }

  // Col labels (a→h)
  for (let c = 0; c < N; c++) {
    g.appendChild(s("text", {
      x: c * CELL + CELL / 2, y: BOARD_PX + 14,
      "text-anchor": "middle",
      fill: TH.coordColor, "font-size": "10px", "font-family": "monospace"
    }, String.fromCharCode(97 + c)));
  }

  // Cells
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      const rect = s("rect", {
        x: c * CELL, y: r * CELL, width: CELL, height: CELL,
        fill: (r + c) % 2 === 0 ? TH.cellLight : TH.cellDark,
        stroke: TH.border, "stroke-width": "0.5"
      });
      rect.dataset.col = c;
      rect.dataset.row = r;
      g.appendChild(rect);
    }
  }

  // Highlights
  for (const hl of highlights) {
    const { row, col } = sqToRC(hl.sq);
    g.appendChild(s("rect", {
      x: col * CELL, y: row * CELL, width: CELL, height: CELL,
      fill: hl.color, opacity: TH.highlightAlpha, "pointer-events": "none"
    }));
  }

  // Lines
  for (const ln of lines) {
    const f = sqToRC(ln.from);
    const t = sqToRC(ln.to);
    const fc = cellCenter(f.row, f.col);
    const tc = cellCenter(t.row, t.col);
    g.appendChild(s("line", {
      x1: fc.x, y1: fc.y, x2: tc.x, y2: tc.y,
      stroke: ln.color, "stroke-width": TH.lineWidth,
      opacity: "0.5", "stroke-dasharray": TH.lineDash,
      "stroke-linecap": "round", "pointer-events": "none"
    }));
  }

  // Pieces
  for (const [sq, piece] of pieceMap) {
    const { row, col } = sqToRC(sq);
    const onLine = lineSqs.has(sq);
    const side = PIECE_COLOR[piece];
    const fillColor = side === "white" ? TH.pieceWhite : TH.pieceBlack;

    if (onLine) {
      g.appendChild(s("circle", {
        cx: col * CELL + CELL / 2, cy: row * CELL + CELL / 2,
        r: CELL / 2 - 4, fill: TH.atkGlow, opacity: "0.15"
      }));
    }

    g.appendChild(s("text", {
      x: col * CELL + CELL / 2, y: row * CELL + CELL / 2 + 1,
      "text-anchor": "middle", "dominant-baseline": "central",
      fill: fillColor, stroke: TH.pieceStroke, "stroke-width": "0.3",
      "font-size": "26px", style: "pointer-events:none;"
    }, PIECE_CHAR[piece]));
  }

  svgRoot.appendChild(g);

  // Status text
  if (status && status.text) {
    svgRoot.appendChild(s("text", {
      x: PAD_LEFT + BOARD_PX / 2, y: PAD_TOP + BOARD_PX + 28,
      "text-anchor": "middle", fill: status.color || TH.statusDefault,
      "font-size": "15px", "font-family": "monospace", "font-weight": "bold"
    }, status.text));
  }
}

// ── Public API: createBoard ─────────────────────────────────────

export function createBoard(initConfig) {
  const state = {
    pieces:     initConfig.pieces || [],
    highlights: initConfig.highlights || [],
    lines:      initConfig.lines || [],
    label:      initConfig.label || "",
    status:     initConfig.status || null,
  };

  const container = document.createElement("div");
  container.className = "cb-board";

  const svgRoot = s("svg", {
    viewBox: `0 0 ${VIEW_W} ${VIEW_H}`,
    width: "100%",
    style: `max-width:${VIEW_W}px; display:block;`
  });
  container.appendChild(svgRoot);

  function redraw() { render(svgRoot, state); }

  function update(cfg) {
    if (cfg.pieces !== undefined)     state.pieces = cfg.pieces;
    if (cfg.highlights !== undefined) state.highlights = cfg.highlights;
    if (cfg.lines !== undefined)      state.lines = cfg.lines;
    if (cfg.label !== undefined)      state.label = cfg.label;
    if (cfg.status !== undefined)     state.status = cfg.status;
    redraw();
  }

  redraw();

  return { el: container, svgRoot, state, update, redraw };
}

// ── Queens helpers (for n-queens use cases) ─────────────────────

function queensToPieces(rows) {
  return rows.map((r, c) => ({ sq: rcToSq(r, c), piece: "q" }));
}

function queensToAttackLines(rows) {
  return queenAttacks(rows).map(([ci, cj]) => ({
    from: rcToSq(rows[ci], ci),
    to:   rcToSq(rows[cj], cj),
    color: TH.lineDefault
  }));
}

function queensStatus(rows) {
  const h = queenAttacks(rows).length;
  return { text: "h = " + h, color: h === 0 ? TH.statusGood : TH.statusBad };
}

// ── Mount (custom-loader entry point) ───────────────────────────

export function mount(div, dataset) {
  const container = document.createElement("div");
  container.className = "cb-container";

  // ── Queens mode ─────────────────────
  const qRows = parseQueens(dataset.queens);
  if (qRows) {
    const showAtk = dataset.showAttacks !== "false";
    const editable = dataset.editable === "true";

    const board = createBoard({
      pieces: queensToPieces(qRows),
      lines:  showAtk ? queensToAttackLines(qRows) : [],
      label:  dataset.label || "",
      status: queensStatus(qRows),
    });

    if (editable) {
      board.svgRoot.style.cursor = "pointer";
      board.svgRoot.addEventListener("click", (evt) => {
        const rect = evt.target.closest("rect[data-col]");
        if (!rect) return;
        const c = parseInt(rect.dataset.col, 10);
        const r = parseInt(rect.dataset.row, 10);
        qRows[c] = r;
        board.update({
          pieces: queensToPieces(qRows),
          lines:  showAtk ? queensToAttackLines(qRows) : [],
          status: queensStatus(qRows),
        });
      });
    }

    container.appendChild(board.el);
    div.appendChild(container);
    return;
  }

  // ── Pieces mode ─────────────────────
  const pieces     = parsePieces(dataset.pieces);
  const highlights = parseHighlights(dataset.highlight);
  const lines      = parseLines(dataset.lines);

  const board = createBoard({
    pieces,
    highlights,
    lines,
    label:  dataset.label || "",
    status: dataset.status
      ? { text: dataset.status, color: dataset.statusColor || TH.statusDefault }
      : null,
  });

  container.appendChild(board.el);
  div.appendChild(container);
}

// ── Exports for reuse ───────────────────────────────────────────

export {
  PIECE_CHAR, PIECE_COLOR, TH,
  sqToRC, rcToSq, cellCenter,
  queenAttacks, queensToPieces, queensToAttackLines, queensStatus,
  parsePieces, parseQueens, parseHighlights, parseLines
};
