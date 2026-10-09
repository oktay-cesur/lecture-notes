import { makeEl, makeSvg } from "../core/dom.js";
import { cities, edges, adj } from "./core-data.js";
import { algoMeta, allResults } from "./core-algorithms.js";


function drawGraph(stepData, algoColor, showH = true) {
  const W = 660;
  const H = 410;
  const svg = makeSvg("svg", {
    viewBox: `0 0 ${W} ${H}`,
    width: "100%",
    style: "max-width:660px; background:var(--anim-bg); border-radius:10px; font-family:system-ui,sans-serif;"
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
        stroke: onPath ? algoColor : "var(--anim-border)",
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
          fill: "var(--anim-muted-2)",
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

    let fill = "var(--anim-surface)";
    let stroke = "var(--anim-border-strong)";
    let r = 19;

    if (isCurrent) {
      fill = algoColor;
      stroke = algoColor;
      r = 23;
    } else if (isOnPath) {
      fill = `color-mix(in srgb, ${algoColor} 20%, transparent)`;
      stroke = algoColor;
    } else if (isVisited) {
      fill = "var(--anim-border)";
      stroke = "var(--anim-muted-2)";
    }
    if (isGoal && !isCurrent) stroke = "var(--anim-amber-soft)";
    if (isStart && !isCurrent) stroke = "var(--anim-sky)";

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
          fill: isCurrent ? "var(--anim-on-accent)" : isOnPath ? "var(--anim-text)" : "var(--anim-muted)",
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
            fill: "var(--anim-muted-2)",
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
            fill: "var(--anim-amber-soft)",
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
            fill: "var(--anim-sky)",
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
      background: "var(--anim-surface)",
      borderRadius: "8px",
      padding: "8px 14px",
      borderLeft: `4px solid ${color}`,
      marginBottom: "8px",
      fontFamily: "system-ui",
      color: "var(--anim-text)",
      fontSize: "14px"
    }
  });
  head.innerHTML = `<strong style="color:${color}">${label}</strong><span style="color:var(--anim-muted); margin-left:8px; font-size:12px">${desc}</span>`;

  const info = makeEl("div", {
    style: {
      background: "var(--anim-surface)",
      borderRadius: "8px",
      padding: "10px 14px",
      marginTop: "6px",
      fontFamily: "Courier New, monospace",
      fontSize: "12px",
      color: "var(--anim-text-2)"
    }
  });
  info.innerHTML = `<div>${step.info}</div><div style="margin-top:4px; color:var(--anim-muted-2)">Yol: ${step.path
    .map((n) => cities[n].name)
    .join(" → ")} | Maliyet: ${step.cost}</div>`;

  root.appendChild(head);
  root.appendChild(drawGraph(step, color, true));
  root.appendChild(info);

  if (isLast && result.finalPath.length > 0) {
    const done = makeEl("div", {
      style: {
        background: `color-mix(in srgb, ${color} 13%, transparent)`,
        border: `1px solid color-mix(in srgb, ${color} 27%, transparent)`,
        borderRadius: "8px",
        padding: "10px 14px",
        marginTop: "8px",
        fontFamily: "system-ui",
        fontSize: "13px"
      }
    });
    done.innerHTML = `<div style="font-weight:700; color:${color}">Çözüm Bulundu</div><div style="color:var(--anim-text); margin-top:4px">Yol: ${result.finalPath
      .map((n) => cities[n].name)
      .join(" → ")}</div><div style="color:var(--anim-muted)">Toplam Maliyet: ${result.finalCost} km | Açılan Düğüm: ${result.steps.length}</div>`;
    root.appendChild(done);
  }

  return root;
}

function mountSingle(target, key) {
  if (!target) return;
  const result = allResults[key];
  const meta = algoMeta[key];
  if (!result || !meta) return;

  const label = makeEl("label", { style: { display: "block", marginBottom: "6px", fontSize: "13px", color: "var(--anim-muted)" } }, "Adım");
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
  panel.appendChild(makeEl("label", { style: { fontSize: "13px", color: "var(--anim-muted)" } }, "Algoritma"));
  panel.appendChild(select);
  panel.appendChild(makeEl("label", { style: { fontSize: "13px", color: "var(--anim-muted)" } }, "Adım"));
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
    target.replaceChildren(drawGraph(null, "var(--anim-border-strong)", true));
    return;
  }

  if (viewName === "summary") {
    const keys = dataset.algos
      ? dataset.algos.split(",").map((k) => k.trim()).filter((k) => algoMeta[k])
      : Object.keys(algoMeta);

    const optCost = allResults.ASTAR ? allResults.ASTAR.finalCost : Math.min(...keys.map((k) => allResults[k]?.finalCost ?? Infinity));
    const table = makeEl("table", {
      style:
        "width:100%; border-collapse:collapse; font-family:system-ui; font-size:13px; background:var(--anim-bg); border-radius:8px; overflow:hidden;"
    });

    table.innerHTML = `<thead><tr style="border-bottom:2px solid var(--anim-border); background:var(--anim-surface)">
      <th style="padding:10px 8px; text-align:left; color:var(--anim-muted-2)">Algoritma</th>
      <th style="padding:10px 8px; text-align:left; color:var(--anim-muted-2)">Tür</th>
      <th style="padding:10px 8px; text-align:left; color:var(--anim-muted-2)">Bulunan Yol</th>
      <th style="padding:10px 8px; text-align:left; color:var(--anim-muted-2)">Maliyet</th>
      <th style="padding:10px 8px; text-align:left; color:var(--anim-muted-2)">Açılan Düğüm</th>
      <th style="padding:10px 8px; text-align:left; color:var(--anim-muted-2)">Optimal?</th>
    </tr></thead>`;

    const body = makeEl("tbody");
    for (const key of keys) {
      const val = algoMeta[key];
      const r = allResults[key];
      if (!val || !r) continue;
      const isOpt = r.finalCost === optCost;
      const tr = makeEl("tr", { style: "border-bottom:1px solid var(--anim-surface)" });
      tr.innerHTML = `<td style="padding:8px; color:${val.color}; font-weight:700">${val.label}</td>
        <td style="padding:8px; color:var(--anim-muted); font-size:12px">${val.desc.split("·").slice(0, 2).join("·")}</td>
        <td style="padding:8px; color:var(--anim-text-2); font-family:monospace; font-size:11px">${r.finalPath.map((n) => cities[n].name).join(" → ")}</td>
        <td style="padding:8px; color:var(--anim-text); font-weight:600">${r.finalCost}</td>
        <td style="padding:8px; color:var(--anim-text)">${r.steps.length}</td>
        <td style="padding:8px; color:${isOpt ? "var(--anim-green)" : "var(--anim-red-soft)"}; font-weight:700">${isOpt ? "✓ Optimal" : "✗"}</td>`;
      body.appendChild(tr);
    }

    table.appendChild(body);
    target.replaceChildren(table);
    return;
  }

  if (viewName === "heuristic") {
    const table = makeEl("table", {
      style:
        "width:100%; border-collapse:collapse; font-size:12px; background:var(--anim-bg); border-radius:8px; overflow:hidden;"
    });
    table.innerHTML = `<thead><tr style="border-bottom:2px solid var(--anim-border); background:var(--anim-surface)">
      <th style="padding:8px; text-align:left; color:var(--anim-muted-2)">Şehir</th>
      <th style="padding:8px; text-align:left; color:var(--anim-muted-2)">h(n)</th>
      <th style="padding:8px; text-align:left; color:var(--anim-muted-2)">Gerçek En Kısa</th>
      <th style="padding:8px; text-align:left; color:var(--anim-muted-2)">Admissible?</th>
      <th style="padding:8px; text-align:left; color:var(--anim-muted-2)">h/g* oranı</th>
    </tr></thead>`;

    const body = makeEl("tbody");
    const cityList = Object.entries(cities)
      .filter(([id]) => id !== "Ank")
      .sort((a, b) => a[1].h - b[1].h);

    for (const [id, c] of cityList) {
      const real = shortestTo(id);
      const admissible = c.h <= real;
      const ratio = ((c.h / real) * 100).toFixed(0);
      const tr = makeEl("tr", { style: "border-bottom:1px solid var(--anim-surface)" });
      tr.innerHTML = `<td style="padding:6px 8px; color:var(--anim-text)">${c.name}</td>
        <td style="padding:6px 8px; color:var(--anim-muted); font-family:monospace">${c.h}</td>
        <td style="padding:6px 8px; color:var(--anim-muted); font-family:monospace">${real}</td>
        <td style="padding:6px 8px; color:${admissible ? "var(--anim-green)" : "var(--anim-red-soft)"}; font-weight:600">${admissible ? "✓" : "✗ İHLAL"}</td>
        <td style="padding:6px 8px; color:var(--anim-muted-2); font-family:monospace">${ratio}%</td>`;
      body.appendChild(tr);
    }

    table.appendChild(body);
    target.replaceChildren(table);
    return;
  }
}

export function mount(div, dataset = div.dataset) {
  if (dataset.view) mountView(div, dataset.view, dataset);
  else if (dataset.algo) mountSingle(div, dataset.algo);
  else if (dataset.algos) mountMulti(div, dataset.algos.split(","), dataset.layout);
}
