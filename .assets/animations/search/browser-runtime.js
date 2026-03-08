import { cities, edges, adj } from "./core-data.js";
import { algoMeta, allResults } from "./core-algorithms.js";

const SVG_NS = "http://www.w3.org/2000/svg";

function makeEl(tag, attrs = {}, text = null) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "style" && typeof v === "object") {
      Object.assign(el.style, v);
    } else {
      el.setAttribute(k, v);
    }
  }
  if (text !== null) el.textContent = text;
  return el;
}

function makeSvg(tag, attrs = {}, text = null) {
  const el = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) {
    el.setAttribute(k, v);
  }
  if (text !== null) el.textContent = text;
  return el;
}

function drawGraph(stepData, algoColor, showH = true) {
  const W = 660;
  const H = 410;
  const svg = makeSvg("svg", {
    viewBox: `0 0 ${W} ${H}`,
    width: "100%",
    style: "max-width:660px; background:#0f172a; border-radius:10px; font-family:system-ui,sans-serif;"
  });

  for (const [a, b, w] of edges) {
    const ca = cities[a];
    const cb = cities[b];
    const onPath =
      stepData &&
      stepData.path.includes(a) &&
      stepData.path.includes(b) &&
      Math.abs(stepData.path.indexOf(a) - stepData.path.indexOf(b)) === 1;

    svg.appendChild(
      makeSvg("line", {
        x1: ca.x,
        y1: ca.y,
        x2: cb.x,
        y2: cb.y,
        stroke: onPath ? algoColor : "#334155",
        "stroke-width": onPath ? 3.5 : 1.5,
        opacity: onPath ? 1 : 0.45
      })
    );

    svg.appendChild(
      makeSvg(
        "text",
        {
          x: (ca.x + cb.x) / 2,
          y: (ca.y + cb.y) / 2 - 5,
          "text-anchor": "middle",
          fill: "#64748b",
          "font-size": "8px",
          "font-family": "monospace"
        },
        String(w)
      )
    );
  }

  for (const [id, c] of Object.entries(cities)) {
    const isCurrent = stepData && stepData.current === id;
    const isVisited = stepData && stepData.visited.has(id);
    const isOnPath = stepData && stepData.path.includes(id);
    const isStart = id === "Ist";
    const isGoal = id === "Ank";

    let fill = "#1e293b";
    let stroke = "#475569";
    let r = 19;

    if (isCurrent) {
      fill = algoColor;
      stroke = algoColor;
      r = 23;
    } else if (isOnPath) {
      fill = `${algoColor}33`;
      stroke = algoColor;
    } else if (isVisited) {
      fill = "#374151";
      stroke = "#6b7280";
    }
    if (isGoal && !isCurrent) stroke = "#fbbf24";
    if (isStart && !isCurrent) stroke = "#38bdf8";

    svg.appendChild(
      makeSvg("circle", {
        cx: c.x,
        cy: c.y,
        r,
        fill,
        stroke,
        "stroke-width": isCurrent ? 3 : 2
      })
    );

    svg.appendChild(
      makeSvg(
        "text",
        {
          x: c.x,
          y: c.y - 2,
          "text-anchor": "middle",
          fill: isCurrent ? "#fff" : isOnPath ? "#e2e8f0" : "#94a3b8",
          "font-size": "10px",
          "font-weight": "bold"
        },
        c.name.length > 5 ? c.name.slice(0, 4) : c.name
      )
    );

    if (showH !== false) {
      svg.appendChild(
        makeSvg(
          "text",
          {
            x: c.x,
            y: c.y + 10,
            "text-anchor": "middle",
            fill: "#64748b",
            "font-size": "7px",
            "font-family": "monospace"
          },
          `h=${c.h}`
        )
      );
    }

    if (isGoal) {
      svg.appendChild(
        makeSvg(
          "text",
          {
            x: c.x,
            y: c.y - 26,
            "text-anchor": "middle",
            fill: "#fbbf24",
            "font-size": "8px"
          },
          "HEDEF"
        )
      );
    }

    if (isStart) {
      svg.appendChild(
        makeSvg(
          "text",
          {
            x: c.x,
            y: c.y - 26,
            "text-anchor": "middle",
            fill: "#38bdf8",
            "font-size": "8px"
          },
          "BASLA"
        )
      );
    }
  }

  return svg;
}

function buildAlgoCard(result, stepIdx, color, label, desc) {
  const step = result.steps[Math.min(stepIdx, result.steps.length - 1)];
  const isLast = stepIdx >= result.steps.length - 1;

  const root = makeEl("div");

  const head = makeEl("div", {
    style: {
      background: "#1e293b",
      borderRadius: "8px",
      padding: "8px 14px",
      borderLeft: `4px solid ${color}`,
      marginBottom: "8px",
      fontFamily: "system-ui",
      color: "#e2e8f0",
      fontSize: "14px"
    }
  });
  head.innerHTML = `<strong style="color:${color}">${label}</strong><span style="color:#94a3b8; margin-left:8px; font-size:12px">${desc}</span>`;

  const info = makeEl("div", {
    style: {
      background: "#1e293b",
      borderRadius: "8px",
      padding: "10px 14px",
      marginTop: "6px",
      fontFamily: "Courier New, monospace",
      fontSize: "12px",
      color: "#cbd5e1"
    }
  });
  info.innerHTML = `<div>${step.info}</div><div style="margin-top:4px; color:#64748b">Yol: ${step.path
    .map((n) => cities[n].name)
    .join(" → ")} | Maliyet: ${step.cost}</div>`;

  root.appendChild(head);
  root.appendChild(drawGraph(step, color, true));
  root.appendChild(info);

  if (isLast && result.finalPath.length > 0) {
    const done = makeEl("div", {
      style: {
        background: `${color}22`,
        border: `1px solid ${color}44`,
        borderRadius: "8px",
        padding: "10px 14px",
        marginTop: "8px",
        fontFamily: "system-ui",
        fontSize: "13px"
      }
    });
    done.innerHTML = `<div style="font-weight:700; color:${color}">Cozum Bulundu</div><div style="color:#e2e8f0; margin-top:4px">Yol: ${result.finalPath
      .map((n) => cities[n].name)
      .join(" → ")}</div><div style="color:#94a3b8">Toplam Maliyet: ${result.finalCost} km | Açılan Düğüm: ${result.steps.length}</div>`;
    root.appendChild(done);
  }

  return root;
}

function mountSingle(target, key) {
  if (!target) return;
  const result = allResults[key];
  const meta = algoMeta[key];
  if (!result || !meta) return;

  const label = makeEl("label", { style: { display: "block", marginBottom: "6px", fontSize: "13px", color: "#94a3b8" } }, "Adım");
  const slider = makeEl("input", { type: "range", min: "0", max: String(Math.max(0, result.steps.length - 1)), step: "1", value: "0", style: "width:100%" });
  const out = makeEl("div", { style: { marginTop: "10px" } });

  const render = () => {
    out.replaceChildren(buildAlgoCard(result, Number(slider.value), meta.color, meta.label, meta.desc));
  };

  slider.addEventListener("input", render);
  target.replaceChildren(label, slider, out);
  render();
}

function mountMulti(target, keys, layout) {
  if (!target) return;
  const validKeys = keys.map((k) => k.trim()).filter((k) => algoMeta[k]);
  if (validKeys.length === 0) return;

  if (layout === "stacked") {
    const container = makeEl("div", { style: { display: "grid", gap: "24px" } });
    for (const key of validKeys) {
      const slot = makeEl("div");
      container.appendChild(slot);
      mountSingle(slot, key);
    }
    target.replaceChildren(container);
    return;
  }

  const select = makeEl("select");
  for (const key of validKeys) {
    const meta = algoMeta[key];
    const opt = makeEl("option", { value: key }, meta.label);
    select.appendChild(opt);
  }
  select.value = validKeys[0];

  const slider = makeEl("input", { type: "range", min: "0", step: "1", value: "0", style: "width:100%" });
  const out = makeEl("div", { style: { marginTop: "10px" } });

  const setSlider = () => {
    const result = allResults[select.value];
    slider.max = String(Math.max(0, result.steps.length - 1));
    if (Number(slider.value) > Number(slider.max)) slider.value = slider.max;
  };

  const render = () => {
    const key = select.value;
    const result = allResults[key];
    const meta = algoMeta[key];
    out.replaceChildren(buildAlgoCard(result, Number(slider.value), meta.color, meta.label, meta.desc));
  };

  select.addEventListener("change", () => {
    setSlider();
    render();
  });
  slider.addEventListener("input", render);

  const panel = makeEl("div", { style: { display: "grid", gap: "10px" } });
  panel.appendChild(makeEl("label", { style: { fontSize: "13px", color: "#94a3b8" } }, "Algoritma"));
  panel.appendChild(select);
  panel.appendChild(makeEl("label", { style: { fontSize: "13px", color: "#94a3b8" } }, "Adım"));
  panel.appendChild(slider);

  target.replaceChildren(panel, out);
  setSlider();
  render();
}

function shortestTo(start) {
  const pq = [{ node: start, cost: 0 }];
  const visited = new Set();
  while (pq.length > 0) {
    pq.sort((a, b) => a.cost - b.cost);
    const { node, cost } = pq.shift();
    if (visited.has(node)) continue;
    visited.add(node);
    if (node === "Ank") return cost;
    for (const { to, w } of adj[node]) {
      if (!visited.has(to)) pq.push({ node: to, cost: cost + w });
    }
  }
  return Infinity;
}

function mountView(target, viewName, dataset) {
  if (!target) return;

  if (viewName === "graph") {
    target.replaceChildren(drawGraph(null, "#475569", true));
    return;
  }

  if (viewName === "summary") {
    const keys = dataset.algos
      ? dataset.algos.split(",").map((k) => k.trim()).filter((k) => algoMeta[k])
      : Object.keys(algoMeta);

    const optCost = allResults.ASTAR ? allResults.ASTAR.finalCost : Math.min(...keys.map((k) => allResults[k]?.finalCost ?? Infinity));
    const table = makeEl("table", {
      style:
        "width:100%; border-collapse:collapse; font-family:system-ui; font-size:13px; background:#0f172a; border-radius:8px; overflow:hidden;"
    });

    table.innerHTML = `<thead><tr style="border-bottom:2px solid #334155; background:#1e293b">
      <th style="padding:10px 8px; text-align:left; color:#64748b">Algoritma</th>
      <th style="padding:10px 8px; text-align:left; color:#64748b">Tür</th>
      <th style="padding:10px 8px; text-align:left; color:#64748b">Bulunan Yol</th>
      <th style="padding:10px 8px; text-align:left; color:#64748b">Maliyet</th>
      <th style="padding:10px 8px; text-align:left; color:#64748b">Açılan Düğüm</th>
      <th style="padding:10px 8px; text-align:left; color:#64748b">Optimal?</th>
    </tr></thead>`;

    const body = makeEl("tbody");
    for (const key of keys) {
      const val = algoMeta[key];
      const r = allResults[key];
      if (!val || !r) continue;
      const isOpt = r.finalCost === optCost;
      const tr = makeEl("tr", { style: "border-bottom:1px solid #1e293b" });
      tr.innerHTML = `<td style="padding:8px; color:${val.color}; font-weight:700">${val.label}</td>
        <td style="padding:8px; color:#94a3b8; font-size:12px">${val.desc.split("·").slice(0, 2).join("·")}</td>
        <td style="padding:8px; color:#cbd5e1; font-family:monospace; font-size:11px">${r.finalPath.map((n) => cities[n].name).join(" → ")}</td>
        <td style="padding:8px; color:#e2e8f0; font-weight:600">${r.finalCost}</td>
        <td style="padding:8px; color:#e2e8f0">${r.steps.length}</td>
        <td style="padding:8px; color:${isOpt ? "#22c55e" : "#ef4444"}; font-weight:700">${isOpt ? "✓ Optimal" : "✗"}</td>`;
      body.appendChild(tr);
    }

    table.appendChild(body);
    target.replaceChildren(table);
    return;
  }

  if (viewName === "heuristic") {
    const table = makeEl("table", {
      style:
        "width:100%; border-collapse:collapse; font-size:12px; background:#0f172a; border-radius:8px; overflow:hidden;"
    });
    table.innerHTML = `<thead><tr style="border-bottom:2px solid #334155; background:#1e293b">
      <th style="padding:8px; text-align:left; color:#64748b">Şehir</th>
      <th style="padding:8px; text-align:left; color:#64748b">h(n)</th>
      <th style="padding:8px; text-align:left; color:#64748b">Gerçek En Kısa</th>
      <th style="padding:8px; text-align:left; color:#64748b">Admissible?</th>
      <th style="padding:8px; text-align:left; color:#64748b">h/g* oranı</th>
    </tr></thead>`;

    const body = makeEl("tbody");
    const cityList = Object.entries(cities)
      .filter(([id]) => id !== "Ank")
      .sort((a, b) => a[1].h - b[1].h);

    for (const [id, c] of cityList) {
      const real = shortestTo(id);
      const admissible = c.h <= real;
      const ratio = ((c.h / real) * 100).toFixed(0);
      const tr = makeEl("tr", { style: "border-bottom:1px solid #1e293b" });
      tr.innerHTML = `<td style="padding:6px 8px; color:#e2e8f0">${c.name}</td>
        <td style="padding:6px 8px; color:#94a3b8; font-family:monospace">${c.h}</td>
        <td style="padding:6px 8px; color:#94a3b8; font-family:monospace">${real}</td>
        <td style="padding:6px 8px; color:${admissible ? "#22c55e" : "#ef4444"}; font-weight:600">${admissible ? "✓" : "✗ İHLAL"}</td>
        <td style="padding:6px 8px; color:#64748b; font-family:monospace">${ratio}%</td>`;
      body.appendChild(tr);
    }

    table.appendChild(body);
    target.replaceChildren(table);
    return;
  }
}

export function mountSearchAnimations() {
  const divs = document.querySelectorAll('[data-anim="search"]');
  for (const div of divs) {
    if (div.dataset.view) mountView(div, div.dataset.view, div.dataset);
    else if (div.dataset.algo) mountSingle(div, div.dataset.algo);
    else if (div.dataset.algos) mountMulti(div, div.dataset.algos.split(","), div.dataset.layout);
  }
}
