import { cities, edges, adj } from "./core-data.js";

function runBFS(start, goal) {
  const steps = [];
  const queue = [{ node: start, path: [start], cost: 0 }];
  const visited = new Set();
  while (queue.length > 0) {
    const { node, path, cost } = queue.shift();
    if (visited.has(node)) continue;
    visited.add(node);
    const queueInfo = queue.filter((q) => !visited.has(q.node));
    steps.push({
      current: node,
      visited: new Set(visited),
      path: [...path],
      cost,
      info: `Açılan: ${cities[node].name} | Kuyruk (FIFO): [${queueInfo.map((q) => cities[q.node].name).join(", ")}]`
    });
    if (node === goal) return { steps, finalPath: path, finalCost: cost };
    for (const { to, w } of adj[node]) {
      if (!visited.has(to)) queue.push({ node: to, path: [...path, to], cost: cost + w });
    }
  }
  return { steps, finalPath: [], finalCost: Infinity };
}

function runDFS(start, goal) {
  const steps = [];
  const stack = [{ node: start, path: [start], cost: 0 }];
  const visited = new Set();
  while (stack.length > 0) {
    const { node, path, cost } = stack.pop();
    if (visited.has(node)) continue;
    visited.add(node);
    const stackInfo = stack.filter((s) => !visited.has(s.node));
    steps.push({
      current: node,
      visited: new Set(visited),
      path: [...path],
      cost,
      info: `Açılan: ${cities[node].name} | Yığıt (LIFO): [${stackInfo.slice(-6).map((s) => cities[s.node].name).join(", ")}]`
    });
    if (node === goal) return { steps, finalPath: path, finalCost: cost };
    for (const { to, w } of [...adj[node]].reverse()) {
      if (!visited.has(to)) stack.push({ node: to, path: [...path, to], cost: cost + w });
    }
  }
  return { steps, finalPath: [], finalCost: Infinity };
}

function runUCS(start, goal) {
  const steps = [];
  const pq = [{ node: start, path: [start], cost: 0 }];
  const bestCost = new Map([[start, 0]]);
  const visited = new Set();

  while (pq.length > 0) {
    pq.sort((a, b) => {
      if (a.cost !== b.cost) return a.cost - b.cost;
      return a.node.localeCompare(b.node);
    });

    const current = pq.shift();
    const { node, path, cost } = current;

    if (cost > (bestCost.get(node) ?? Infinity)) continue;
    if (visited.has(node)) continue;

    visited.add(node);

    const pqInfo = pq
      .filter((p) => !visited.has(p.node) && p.cost === (bestCost.get(p.node) ?? Infinity))
      .sort((a, b) => {
        if (a.cost !== b.cost) return a.cost - b.cost;
        return a.node.localeCompare(b.node);
      })
      .slice(0, 6);

    steps.push({
      current: node,
      visited: new Set(visited),
      path: [...path],
      cost,
      info: `Açılan: ${cities[node].name} (g=${cost}) | Öncelik kuyruğu: [${pqInfo
        .map((p) => `${cities[p.node].name}:${p.cost}`)
        .join(", ")}]`
    });

    if (node === goal) {
      return { steps, finalPath: path, finalCost: cost };
    }

    for (const { to, w } of adj[node]) {
      if (visited.has(to)) continue;

      const newCost = cost + w;
      const oldCost = bestCost.get(to);

      if (oldCost === undefined || newCost < oldCost) {
        bestCost.set(to, newCost);
        pq.push({ node: to, path: [...path, to], cost: newCost });
      }
    }
  }

  return { steps, finalPath: [], finalCost: Infinity };
}

function runGreedy(start, goal) {
  const steps = [];
  const pq = [{ node: start, path: [start], cost: 0 }];
  const visited = new Set();
  while (pq.length > 0) {
    pq.sort((a, b) => cities[a.node].h - cities[b.node].h);
    const { node, path, cost } = pq.shift();
    if (visited.has(node)) continue;
    visited.add(node);
    const pqInfo = pq.filter((p) => !visited.has(p.node)).slice(0, 5);
    steps.push({
      current: node,
      visited: new Set(visited),
      path: [...path],
      cost,
      info: `Açılan: ${cities[node].name} (h=${cities[node].h}) | PQ: [${pqInfo.map((p) => `${cities[p.node].name}:h=${cities[p.node].h}`).join(", ")}]`
    });
    if (node === goal) return { steps, finalPath: path, finalCost: cost };
    for (const { to, w } of adj[node]) {
      if (!visited.has(to)) pq.push({ node: to, path: [...path, to], cost: cost + w });
    }
  }
  return { steps, finalPath: [], finalCost: Infinity };
}

function runAstar(start, goal) {
  const steps = [];
  const pq = [{ node: start, path: [start], g: 0, f: cities[start].h }];
  const visited = new Set();
  while (pq.length > 0) {
    pq.sort((a, b) => a.f - b.f);
    const { node, path, g, f } = pq.shift();
    if (visited.has(node)) continue;
    visited.add(node);
    const pqInfo = pq.filter((p) => !visited.has(p.node)).slice(0, 5);
    steps.push({
      current: node,
      visited: new Set(visited),
      path: [...path],
      cost: g,
      info: `Açılan: ${cities[node].name} (g=${g}, h=${cities[node].h}, f=${f}) | PQ: [${pqInfo.map((p) => `${cities[p.node].name}:f=${p.f}`).join(", ")}]`
    });
    if (node === goal) return { steps, finalPath: path, finalCost: g };
    for (const { to, w } of adj[node]) {
      if (!visited.has(to)) {
        const ng = g + w;
        pq.push({ node: to, path: [...path, to], g: ng, f: ng + cities[to].h });
      }
    }
  }
  return { steps, finalPath: [], finalCost: Infinity };
}

function pathCost(path) {
  let total = 0;
  for (let i = 0; i < path.length - 1; i++) {
    const u = path[i];
    const v = path[i + 1];
    const edge = adj[u].find((e) => e.to === v);
    if (!edge) return Infinity;
    total += edge.w;
  }
  return total;
}

function depthLimitedSearch(start, goal, limit) {
  const steps = [];
  const stack = [{ node: start, path: [start], cost: 0, depth: 0 }];
  const visitedOnPath = new Set();

  while (stack.length > 0) {
    const { node, path, cost, depth } = stack.pop();

    const pathSet = new Set(path);
    if (visitedOnPath.has(`${node}|${path.join(">")}`)) continue;
    visitedOnPath.add(`${node}|${path.join(">")}`);

    const stackInfo = stack.slice(-6).map((s) => `${cities[s.node].name}:d=${s.depth}`);
    steps.push({
      current: node,
      visited: pathSet,
      path: [...path],
      cost,
      info: `Açılan: ${cities[node].name} (d=${depth}, ℓ=${limit}) | Yığıt: [${stackInfo.join(", ")}]`
    });

    if (node === goal) return { found: true, steps, finalPath: path, finalCost: cost };
    if (depth === limit) continue;

    for (const { to, w } of [...adj[node]].reverse()) {
      if (!pathSet.has(to)) {
        stack.push({
          node: to,
          path: [...path, to],
          cost: cost + w,
          depth: depth + 1
        });
      }
    }
  }

  return { found: false, steps, finalPath: [], finalCost: Infinity };
}

function runIDS(start, goal) {
  const steps = [];
  const maxDepth = Object.keys(cities).length - 1;

  for (let limit = 0; limit <= maxDepth; limit++) {
    steps.push({
      current: start,
      visited: new Set(),
      path: [start],
      cost: 0,
      info: `Yeni iterasyon: ℓ=${limit}`
    });

    const result = depthLimitedSearch(start, goal, limit);
    steps.push(...result.steps);

    if (result.found) {
      return { steps, finalPath: result.finalPath, finalCost: result.finalCost };
    }
  }

  return { steps, finalPath: [], finalCost: Infinity };
}

function runBidir(start, goal) {
  const steps = [];

  if (start === goal) {
    return { steps, finalPath: [start], finalCost: 0 };
  }

  let qF = [start];
  let qB = [goal];

  const visitedF = new Set([start]);
  const visitedB = new Set([goal]);

  const parentF = new Map([[start, null]]);
  const parentB = new Map([[goal, null]]);

  const buildPath = (meet) => {
    const left = [];
    let cur = meet;
    while (cur !== null) {
      left.push(cur);
      cur = parentF.get(cur);
    }
    left.reverse();

    const right = [];
    cur = parentB.get(meet);
    while (cur !== null) {
      right.push(cur);
      cur = parentB.get(cur);
    }

    return [...left, ...right];
  };

  while (qF.length > 0 && qB.length > 0) {
    const nextF = [];
    for (const node of qF) {
      steps.push({
        current: node,
        visited: new Set([...visitedF, ...visitedB]),
        path: [start, node],
        cost: 0,
        info: `İleri arama açtı: ${cities[node].name} | İleri sınır: [${qF.map((n) => cities[n].name).join(", ")}] | Geri sınır: [${qB.map((n) => cities[n].name).join(", ")}]`
      });

      for (const { to } of adj[node]) {
        if (!visitedF.has(to)) {
          visitedF.add(to);
          parentF.set(to, node);
          nextF.push(to);

          if (visitedB.has(to)) {
            const finalPath = buildPath(to);
            return { steps, finalPath, finalCost: pathCost(finalPath) };
          }
        }
      }
    }
    qF = nextF;

    const nextB = [];
    for (const node of qB) {
      steps.push({
        current: node,
        visited: new Set([...visitedF, ...visitedB]),
        path: [goal, node],
        cost: 0,
        info: `Geri arama açtı: ${cities[node].name} | İleri sınır: [${qF.map((n) => cities[n].name).join(", ")}] | Geri sınır: [${qB.map((n) => cities[n].name).join(", ")}]`
      });

      for (const { to } of adj[node]) {
        if (!visitedB.has(to)) {
          visitedB.add(to);
          parentB.set(to, node);
          nextB.push(to);

          if (visitedF.has(to)) {
            const finalPath = buildPath(to);
            return { steps, finalPath, finalCost: pathCost(finalPath) };
          }
        }
      }
    }
    qB = nextB;
  }

  return { steps, finalPath: [], finalCost: Infinity };
}

export const algoMeta = {
  BFS: {
    fn: runBFS,
    color: "#3b82f6",
    label: "BFS (Enine Arama)",
    desc: "FIFO kuyruk · bilgisiz · tam · optimal DEĞİL (ağırlıklı grafta)"
  },
  DFS: {
    fn: runDFS,
    color: "#8b5cf6",
    label: "DFS (Derinlik Arama)",
    desc: "LIFO yığıt · bilgisiz · tam DEĞİL · optimal DEĞİL"
  },
  UCS: {
    fn: runUCS,
    color: "#06b6d4",
    label: "UCS (Düzgün Maliyet)",
    desc: "min g(n) · bilgisiz · tam · optimal ✓"
  },
  IDS: {
    fn: runIDS,
    color: "#f59e0b",
    label: "IDS (İteratif Derinleşme)",
    desc: "artan derinlik sınırı · bilgisiz · tam · optimal ✓ (birim maliyet)"
  },
  BIDIR: {
    fn: runBidir,
    color: "#ec4899",
    label: "Çift Yönlü Arama",
    desc: "iki yönlü BFS · bilgisiz · tam · optimal ✓ (birim maliyet)"
  },
  GREEDY: {
    fn: runGreedy,
    color: "#ef4444",
    label: "Greedy Best-First",
    desc: "f(n)=h(n) · sezgisel · tam DEĞİL · optimal DEĞİL"
  },
  ASTAR: {
    fn: runAstar,
    color: "#10b981",
    label: "A* Arama",
    desc: "f(n)=g(n)+h(n) · sezgisel · tam · optimal ✓"
  }
};

export const allResults = (() => {
  const r = {};
  for (const [key, val] of Object.entries(algoMeta)) {
    r[key] = val.fn("Ist", "Ank");
  }
  return r;
})();
