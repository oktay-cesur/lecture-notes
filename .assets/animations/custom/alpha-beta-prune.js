import { makeEl as el, makeSvg as s } from "../core/dom.js";

const NODES = {
  root: { x: 340, y: 52, label: "MAX", type: "max" },
  left: { x: 150, y: 170, label: "MIN", type: "min" },
  mid: { x: 340, y: 170, label: "MIN", type: "min" },
  right: { x: 530, y: 170, label: "MIN", type: "min" },
  l1: { x: 100, y: 312, label: "3", type: "leaf" },
  l2: { x: 200, y: 312, label: "5", type: "leaf" },
  m1: { x: 290, y: 312, label: "6", type: "leaf" },
  m2: { x: 390, y: 312, label: "9", type: "leaf" },
  r1: { x: 480, y: 312, label: "1", type: "leaf" },
  r2: { x: 580, y: 312, label: "7", type: "leaf" }
};

const EDGES = [
  ["root", "left"], ["root", "mid"], ["root", "right"],
  ["left", "l1"], ["left", "l2"],
  ["mid", "m1"], ["mid", "m2"],
  ["right", "r1"], ["right", "r2"]
];

const STAGES = [
  {
    name: "Başlangıç",
    alpha: "-inf",
    summary: "Aynı minimax ağacı DFS sırasıyla soldan sağa inceleniyor. Henüz hiçbir dal değerlendirilmedi, budama yok.",
    details: [
      ["Sol MIN", "3 ve 5 bekliyor"],
      ["Orta MIN", "6 ve 9 bekliyor"],
      ["Sağ MIN", "1 ve 7 bekliyor"]
    ],
    visitedNodes: [],
    activeEdges: [],
    solved: {},
    currentPath: [],
    pruneEdge: null,
    cutNode: null,
    showAlphaArrow: null
  },
  {
    name: "Adım 1",
    alpha: "3",
    summary: "Sol dal tam açıldı. MIN solda min(3, 5) = 3 seçiyor ve kökte alpha 3'e yükseliyor.",
    details: [
      ["Sol MIN", "min(3, 5) = 3"],
      ["Kök MAX", "alpha = 3"],
      ["Budama", "Yok"]
    ],
    visitedNodes: ["left", "l1", "l2"],
    activeEdges: [["root", "left"], ["left", "l1"], ["left", "l2"]],
    solved: { left: "3" },
    currentPath: ["root", "left"],
    pruneEdge: null,
    cutNode: null,
    showAlphaArrow: { from: "left", to: "root", text: "alpha = 3" }
  },
  {
    name: "Adım 2",
    alpha: "6",
    summary: "Orta dal açılıyor. MIN ortada min(6, 9) = 6 veriyor; MAX artık en az 6 garantileyebildiği için alpha 6 oluyor.",
    details: [
      ["Orta MIN", "min(6, 9) = 6"],
      ["Kök MAX", "alpha = 6"],
      ["Sezgi", "Sağ dal artık 6'dan küçükse ilgisiz"]
    ],
    visitedNodes: ["left", "l1", "l2", "mid", "m1", "m2"],
    activeEdges: [["root", "left"], ["left", "l1"], ["left", "l2"], ["root", "mid"], ["mid", "m1"], ["mid", "m2"]],
    solved: { left: "3", mid: "6" },
    currentPath: ["root", "mid"],
    pruneEdge: null,
    cutNode: null,
    showAlphaArrow: { from: "mid", to: "root", text: "alpha = 6" }
  },
  {
    name: "Budama",
    alpha: "6",
    summary: "Sağ dalda ilk yaprak 1 bulundu. MIN bu daldan en fazla 1 verebilir; bu alpha=6'nın altında kaldığı için 7 yaprağı hiç açılmadan kesiliyor.",
    details: [
      ["Sağ MIN", "ilk yaprak = 1"],
      ["Koşul", "1 <= alpha(6)"],
      ["Sonuç", "7 açılmadan budandı"]
    ],
    visitedNodes: ["left", "l1", "l2", "mid", "m1", "m2", "right", "r1"],
    activeEdges: [["root", "left"], ["left", "l1"], ["left", "l2"], ["root", "mid"], ["mid", "m1"], ["mid", "m2"], ["root", "right"], ["right", "r1"]],
    solved: { left: "3", mid: "6", right: "<= 1" },
    currentPath: ["root", "right", "r1"],
    pruneEdge: ["right", "r2"],
    cutNode: "r2",
    showAlphaArrow: { from: "mid", to: "root", text: "alpha = 6 sabit" }
  }
];

function edgeKey(from, to) {
  return from + "->" + to;
}

function makeTreeSvg() {
  return s("svg", {
    viewBox: "0 0 680 370",
    class: "ab-prune__svg",
    role: "img",
    "aria-label": "Alpha-beta budama örnek ağacı"
  });
}

function draw(svg, stage) {
  while (svg.firstChild) svg.removeChild(svg.firstChild);

  const defs = s("defs");
  defs.appendChild(
    s("marker", {
      id: "ab-arrow",
      viewBox: "0 0 10 10",
      refX: "9",
      refY: "5",
      markerWidth: "7",
      markerHeight: "7",
      orient: "auto-start-reverse"
    })
  ).appendChild(s("path", { d: "M 0 0 L 10 5 L 0 10 z", fill: "var(--anim-sky)" }));
  svg.appendChild(defs);

  const activeSet = new Set(stage.activeEdges.map(([from, to]) => edgeKey(from, to)));
  const pathSet = new Set(stage.currentPath);

  for (const [from, to] of EDGES) {
    const a = NODES[from];
    const b = NODES[to];
    const isPruned = stage.pruneEdge && stage.pruneEdge[0] === from && stage.pruneEdge[1] === to;
    const isActive = activeSet.has(edgeKey(from, to));
    svg.appendChild(
      s("line", {
        x1: a.x,
        y1: a.y + 18,
        x2: b.x,
        y2: b.y - 18,
        stroke: isPruned ? "var(--anim-red-soft)" : isActive ? "var(--anim-sky)" : "var(--anim-border)",
        "stroke-width": isActive ? "4" : "2.2",
        "stroke-dasharray": isPruned ? "8 6" : "none",
        opacity: isPruned ? "0.95" : isActive ? "1" : "0.65"
      })
    );
  }

  for (const [id, node] of Object.entries(NODES)) {
    const isVisited = stage.visitedNodes.includes(id);
    const isCurrent = pathSet.has(id);
    const isCut = stage.cutNode === id;
    const fill = node.type === "leaf" ? "var(--anim-bg)" : node.type === "max" ? "var(--anim-blue-deep)" : "var(--anim-purple-bg)";
    const stroke = isCut ? "var(--anim-red-soft)" : isCurrent ? "var(--anim-strong)" : isVisited ? "var(--anim-sky)" : "var(--anim-border-strong)";
    const radius = node.type === "leaf" ? 24 : 28;

    svg.appendChild(
      s("circle", {
        cx: node.x,
        cy: node.y,
        r: radius,
        fill: isCut ? "var(--anim-red-bg)" : fill,
        stroke,
        "stroke-width": isCurrent || isCut ? "3.5" : "2.2",
        opacity: isCut ? "0.9" : "1"
      })
    );

    svg.appendChild(
      s("text", {
        x: node.x,
        y: node.y + 5,
        "text-anchor": "middle",
        fill: isCut ? "var(--anim-red)" : "var(--anim-text)",
        "font-size": node.type === "leaf" ? "18" : "15",
        "font-family": "system-ui,sans-serif",
        "font-weight": "700"
      }, node.label)
    );

    if (stage.solved[id]) {
      svg.appendChild(
        s("rect", {
          x: node.x - 26,
          y: node.y + 34,
          width: 52,
          height: 22,
          rx: 11,
          fill: "var(--anim-surface)",
          stroke: "var(--anim-sky)"
        })
      );
      svg.appendChild(
        s("text", {
          x: node.x,
          y: node.y + 49,
          "text-anchor": "middle",
          fill: "var(--anim-sky)",
          "font-size": "12",
          "font-family": "ui-monospace,monospace",
          "font-weight": "700"
        }, stage.solved[id])
      );
    }

    if (isCut) {
      svg.appendChild(s("line", {
        x1: node.x - 18, y1: node.y - 18, x2: node.x + 18, y2: node.y + 18,
        stroke: "var(--anim-red-soft)", "stroke-width": "3"
      }));
      svg.appendChild(s("line", {
        x1: node.x + 18, y1: node.y - 18, x2: node.x - 18, y2: node.y + 18,
        stroke: "var(--anim-red-soft)", "stroke-width": "3"
      }));
      svg.appendChild(
        s("text", {
          x: node.x,
          y: node.y + 44,
          "text-anchor": "middle",
          fill: "var(--anim-red)",
          "font-size": "12",
          "font-family": "system-ui,sans-serif",
          "font-weight": "700"
        }, "KESILDI")
      );
    }
  }

  svg.appendChild(
    s("text", {
      x: 340,
      y: 18,
      "text-anchor": "middle",
      fill: "var(--anim-blue)",
      "font-size": "14",
      "font-family": "ui-monospace,monospace",
      "font-weight": "700"
    }, "DFS sırası: sol → orta → sağ")
  );

  if (stage.showAlphaArrow) {
    const from = NODES[stage.showAlphaArrow.from];
    const to = NODES[stage.showAlphaArrow.to];
    svg.appendChild(
      s("path", {
        d: `M ${from.x} ${from.y - 34} Q ${(from.x + to.x) / 2} ${from.y - 86} ${to.x} ${to.y + 38}`,
        fill: "none",
        stroke: "var(--anim-sky)",
        "stroke-width": "2.5",
        "marker-end": "url(#ab-arrow)"
      })
    );
    svg.appendChild(
      s("text", {
        x: (from.x + to.x) / 2 - 10,
        y: from.y - 72,
        fill: "var(--anim-sky)",
        "font-size": "13",
        "font-family": "ui-monospace,monospace",
        "font-weight": "700"
      }, stage.showAlphaArrow.text)
    );
  }
}

export function mount(div) {
  const root = el("section", "ab-prune");
  const top = el("div", "ab-prune__top");
  const head = el("div");
  head.appendChild(el("h3", "ab-prune__title", "Alpha-Beta Budama Örneği"));
  head.appendChild(el("p", "ab-prune__subtitle", "Aynı minimax ağacı: sol [3,5], orta [6,9], sağ [1,7]."));

  const controls = el("div", "ab-prune__controls");
  const prev = el("button", "ab-prune__btn", "Geri");
  prev.type = "button";
  const stageText = el("div", "ab-prune__stage");
  const next = el("button", "ab-prune__btn", "İleri");
  next.type = "button";
  controls.append(prev, stageText, next);
  top.append(head, controls);

  const content = el("div", "ab-prune__content");
  const canvas = el("div", "ab-prune__canvas");
  const svg = makeTreeSvg();
  canvas.appendChild(svg);

  const panel = el("div", "ab-prune__panel");
  const explainCard = el("div", "ab-prune__card");
  explainCard.appendChild(el("h4", "ab-prune__card-title", "Durum"));
  const explain = el("p", "ab-prune__explain");
  explainCard.appendChild(explain);

  const detailsCard = el("div", "ab-prune__card");
  detailsCard.appendChild(el("h4", "ab-prune__card-title", "Değerler"));
  const details = el("div", "ab-prune__list");
  detailsCard.appendChild(details);

  const chipsCard = el("div", "ab-prune__card");
  chipsCard.appendChild(el("h4", "ab-prune__card-title", "Akış"));
  const chips = el("div", "ab-prune__chips");
  STAGES.forEach((item, idx) => {
    const chip = el("button", "ab-prune__chip", item.name);
    chip.type = "button";
    chip.addEventListener("click", () => setStage(idx));
    chips.appendChild(chip);
  });
  chipsCard.appendChild(chips);

  panel.append(explainCard, detailsCard, chipsCard);
  content.append(canvas, panel);
  root.append(top, content);
  div.appendChild(root);

  let index = 0;

  function setStage(nextIndex) {
    index = Math.max(0, Math.min(STAGES.length - 1, nextIndex));
    const stage = STAGES[index];

    stageText.textContent = stage.name;
    prev.disabled = index === 0;
    next.disabled = index === STAGES.length - 1;
    explain.textContent = stage.summary;
    draw(svg, stage);

    while (details.firstChild) details.removeChild(details.firstChild);
    stage.details.forEach(([label, value]) => {
      const row = el("div", "ab-prune__item");
      const left = el("span");
      left.innerHTML = "<strong>" + label + "</strong>";
      row.appendChild(left);
      row.appendChild(el("span", "ab-prune__badge", value));
      details.appendChild(row);
    });

    Array.from(chips.children).forEach((chip, chipIndex) => {
      chip.classList.toggle("is-active", chipIndex === index);
    });
  }

  prev.addEventListener("click", () => setStage(index - 1));
  next.addEventListener("click", () => setStage(index + 1));
  setStage(0);
}
