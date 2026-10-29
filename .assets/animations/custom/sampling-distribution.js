import { makeEl, makeSvg } from "../core/dom.js";

// sampling-distribution.js — Evrenden tekrar tekrar örneklem çekerek örnekleme dağılımının oluşması
//
// Kullanım:
//   <div data-anim="custom" data-src="sampling-distribution.js" data-css="sampling-distribution.css"></div>
//
// Öznitelikler (isteğe bağlı):
//   data-n     : başlangıç örneklem büyüklüğü (5, 25 veya 100; varsayılan 25)
//   data-shape : evren dağılım biçimi ("normal" veya "skewed"; varsayılan "normal")
//   data-seed  : rastgelelik tohumu (tam sayı, varsayılan 42)
//   data-label : özel başlık metni

const ALLOWED_N = [5, 25, 100];
const ALLOWED_SHAPES = ["normal", "skewed"];
const POP_SIZE = 400;
const TARGET_MEAN = 75;
const TARGET_SD = 10;
const MIN_X = 45;
const MAX_X = 105;
const BIN_STEP = 2;
const BIN_COUNT = (MAX_X - MIN_X) / BIN_STEP; // 30 kutu

function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function randNormal(rng) {
  const u = Math.max(rng(), 1e-9);
  const v = rng();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function meanOf(xs) {
  if (!xs.length) return 0;
  let sum = 0;
  for (let i = 0; i < xs.length; i++) sum += xs[i];
  return sum / xs.length;
}

function sdOf(xs, m) {
  if (xs.length < 2) return 0;
  let sumSq = 0;
  for (let i = 0; i < xs.length; i++) {
    const d = xs[i] - m;
    sumSq += d * d;
  }
  return Math.sqrt(sumSq / xs.length);
}

function buildPopulation(seed, shape) {
  const rng = mulberry32(seed + (shape === "skewed" ? 907 : 101));
  const raw = [];
  for (let i = 0; i < POP_SIZE; i++) {
    if (shape === "skewed") {
      const e1 = -Math.log(Math.max(rng(), 1e-6));
      const e2 = -Math.log(Math.max(rng(), 1e-6));
      raw.push(e1 + 0.35 * e2);
    } else {
      raw.push(randNormal(rng));
    }
  }
  const m = meanOf(raw);
  const s = sdOf(raw, m) || 1;
  const scaled = raw.map((v) => {
    const val = TARGET_MEAN + ((v - m) / s) * TARGET_SD;
    return Math.max(MIN_X + 0.5, Math.min(MAX_X - 0.5, val));
  });
  const m2 = meanOf(scaled);
  const s2 = sdOf(scaled, m2) || 1;
  return scaled.map((v) => {
    const val = TARGET_MEAN + ((v - m2) / s2) * TARGET_SD;
    return Math.max(MIN_X + 0.2, Math.min(MAX_X - 0.2, val));
  });
}

function drawSampleIndices(rng, popLen, n) {
  const indices = Array.from({ length: popLen }, (_, i) => i);
  for (let i = 0; i < n; i++) {
    const j = i + Math.floor(rng() * (popLen - i));
    const tmp = indices[i];
    indices[i] = indices[j];
    indices[j] = tmp;
  }
  return indices.slice(0, n);
}

function binIndexFor(val) {
  const idx = Math.floor((val - MIN_X) / BIN_STEP);
  return Math.max(0, Math.min(BIN_COUNT - 1, idx));
}

function fmtTr(num, digits = 1) {
  return num.toFixed(digits).replace(".", ",");
}

export function mount(div, dataset = div.dataset) {
  const initN = Number.parseInt(dataset.n ?? "25", 10);
  const initShape = (dataset.shape ?? "normal").trim();
  let seed = Number.parseInt(dataset.seed ?? "42", 10);

  if (!ALLOWED_N.includes(initN)) {
    div.replaceChildren(
      makeEl(
        "p",
        "sampling-distribution__uyari",
        `Geçersiz data-n: "${dataset.n}". Geçerli değerler: ${ALLOWED_N.join(", ")}.`
      )
    );
    console.warn("[sampling-distribution] geçersiz data-n:", dataset.n);
    return;
  }

  if (!ALLOWED_SHAPES.includes(initShape)) {
    div.replaceChildren(
      makeEl(
        "p",
        "sampling-distribution__uyari",
        `Geçersiz data-shape: "${dataset.shape}". Geçerli değerler: ${ALLOWED_SHAPES.join(", ")}.`
      )
    );
    console.warn("[sampling-distribution] geçersiz data-shape:", dataset.shape);
    return;
  }

  if (!Number.isFinite(seed)) seed = 42;

  let currentNIndex = ALLOWED_N.indexOf(initN);
  let currentShape = initShape;
  let population = [];
  let popBins = new Array(BIN_COUNT).fill(0);
  let sampleMeans = [];
  let meanBins = new Array(BIN_COUNT).fill(0);
  let lastSampleIndices = [];
  let lastSampleMean = null;
  let lastSampleBin = -1;
  let drawRng = mulberry32(seed * 313 + 17);

  const root = makeEl("section", "sampling-distribution");
  root.setAttribute(
    "aria-label",
    dataset.label || "Örnekleme dağılımının oluşması animasyonu"
  );

  // Üst başlık ve kısa açıklama
  const header = makeEl("header", "sampling-distribution__header");
  const titleEl = makeEl(
    "h3",
    "sampling-distribution__title",
    dataset.label || "Örnekleme Dağılımı: Ortalamalar Nasıl Oynar?"
  );
  const subtitleEl = makeEl(
    "p",
    "sampling-distribution__subtitle",
    "Soldaki evrenden her çekilişte n kişi seçilir ve ortalaması sağdaki histograma bir blok olarak eklenir."
  );
  header.append(titleEl, subtitleEl);

  // Denetim çubuğu
  const controls = makeEl("div", "sampling-distribution__controls");

  // Çekiliş düğmeleri
  const actionGroup = makeEl("div", "sampling-distribution__btn-group");
  const btnDrawOne = makeEl(
    "button",
    {
      type: "button",
      class: "sampling-distribution__btn sampling-distribution__btn--primary",
      "aria-label": "Evrenden tek örneklem çek"
    },
    "Örneklem çek"
  );
  const btnDrawThousand = makeEl(
    "button",
    {
      type: "button",
      class: "sampling-distribution__btn sampling-distribution__btn--accent",
      "aria-label": "Evrenden 1000 kez örneklem çek"
    },
    "1000 kez çek"
  );
  const btnReset = makeEl(
    "button",
    {
      type: "button",
      class: "sampling-distribution__btn",
      "aria-label": "Çekilişleri sıfırla"
    },
    "Sıfırla"
  );
  actionGroup.append(btnDrawOne, btnDrawThousand, btnReset);

  // n kaydırıcısı (5, 25, 100)
  const sliderGroup = makeEl("div", "sampling-distribution__slider-group");
  const sliderLabel = makeEl(
    "label",
    "sampling-distribution__label",
    "Örneklem büyüklüğü (n): "
  );
  const sliderValueStrong = makeEl(
    "strong",
    "sampling-distribution__n-val",
    String(ALLOWED_N[currentNIndex])
  );
  sliderLabel.append(sliderValueStrong);

  const nSlider = makeEl("input", {
    type: "range",
    class: "sampling-distribution__range",
    min: "0",
    max: String(ALLOWED_N.length - 1),
    step: "1",
    value: String(currentNIndex),
    "aria-label": "Örneklem büyüklüğü n seçimi (5, 25, 100)"
  });

  const ticksRow = makeEl("div", "sampling-distribution__ticks");
  ALLOWED_N.forEach((val, idx) => {
    const tickBtn = makeEl(
      "button",
      {
        type: "button",
        class: "sampling-distribution__tick-btn",
        "aria-label": `n = ${val} seç`
      },
      `n = ${val}`
    );
    tickBtn.addEventListener("click", () => {
      if (currentNIndex !== idx) {
        currentNIndex = idx;
        nSlider.value = String(idx);
        resetSimulation(true);
      }
    });
    ticksRow.append(tickBtn);
  });
  sliderGroup.append(sliderLabel, nSlider, ticksRow);

  // Evren biçimi seçici (Normal / Sağa çarpık)
  const shapeGroup = makeEl("div", "sampling-distribution__shape-group");
  const shapeTitle = makeEl(
    "span",
    "sampling-distribution__label",
    "Evren dağılımı:"
  );
  const shapeBtnRow = makeEl("div", "sampling-distribution__shape-btns");
  const btnShapeNormal = makeEl(
    "button",
    {
      type: "button",
      class: "sampling-distribution__chip",
      "aria-label": "Simetrik evren seç"
    },
    "Simetrik"
  );
  const btnShapeSkewed = makeEl(
    "button",
    {
      type: "button",
      class: "sampling-distribution__chip",
      "aria-label": "Sağa çarpık evren seç"
    },
    "Sağa çarpık"
  );
  shapeBtnRow.append(btnShapeNormal, btnShapeSkewed);
  shapeGroup.append(shapeTitle, shapeBtnRow);

  controls.append(actionGroup, sliderGroup, shapeGroup);

  // Özet bilgi kartları
  const statsBar = makeEl("div", "sampling-distribution__stats");
  const statPop = makeEl("div", "sampling-distribution__stat-card");
  const statFormula = makeEl("div", "sampling-distribution__stat-card");
  const statSamples = makeEl("div", "sampling-distribution__stat-card");
  statsBar.append(statPop, statFormula, statSamples);

  // SVG sahnesi: Sol panel Evren Histogramı, Sağ panel Örnekleme Dağılımı Histogramı
  const svg = makeSvg("svg", {
    viewBox: "0 0 760 310",
    class: "sampling-distribution__svg",
    role: "img",
    "aria-label":
      "Solda evren dağılımı histogramı, sağda çekilen örneklem ortalamalarının oluşturduğu örnekleme dağılımı histogramı"
  });

  const gLeft = makeSvg("g", { class: "sampling-distribution__panel-left" });
  const gRight = makeSvg("g", { class: "sampling-distribution__panel-right" });
  svg.append(gLeft, gRight);

  // Alt pedagojik gözlem mesajı
  const noteBox = makeEl("p", "sampling-distribution__note");

  root.append(header, controls, statsBar, svg, noteBox);
  div.replaceChildren(root);

  function rebuildPopulationData() {
    population = buildPopulation(seed, currentShape);
    popBins = new Array(BIN_COUNT).fill(0);
    for (let i = 0; i < population.length; i++) {
      popBins[binIndexFor(population[i])]++;
    }
  }

  function stepOneSample() {
    const n = ALLOWED_N[currentNIndex];
    const indices = drawSampleIndices(drawRng, population.length, n);
    const vals = indices.map((idx) => population[idx]);
    const m = meanOf(vals);
    const bIdx = binIndexFor(m);

    lastSampleIndices = indices;
    lastSampleMean = m;
    lastSampleBin = bIdx;
    sampleMeans.push(m);
    meanBins[bIdx]++;
  }

  function resetSimulation(drawInitialOne = true) {
    const n = ALLOWED_N[currentNIndex];
    drawRng = mulberry32(
      seed * 7919 + n * 131 + (currentShape === "skewed" ? 53 : 19)
    );
    sampleMeans = [];
    meanBins = new Array(BIN_COUNT).fill(0);
    lastSampleIndices = [];
    lastSampleMean = null;
    lastSampleBin = -1;
    if (drawInitialOne) {
      stepOneSample();
    }
    render();
  }

  function drawPanelAxes(g, x0, y0, w, h, titleText, subtitleText) {
    // Panel arka planı
    g.append(
      makeSvg("rect", {
        x: x0 - 12,
        y: y0 - 44,
        width: w + 24,
        height: h + 84,
        rx: 8,
        fill: "var(--anim-panel)",
        stroke: "var(--anim-border)"
      })
    );

    // Başlıklar
    const t1 = makeSvg("text", {
      x: x0 + w / 2,
      y: y0 - 24,
      "text-anchor": "middle",
      "font-size": "13",
      "font-weight": "700",
      fill: "var(--anim-strong)"
    });
    t1.textContent = titleText;

    const t2 = makeSvg("text", {
      x: x0 + w / 2,
      y: y0 - 8,
      "text-anchor": "middle",
      "font-size": "11",
      fill: "var(--anim-muted)"
    });
    t2.textContent = subtitleText;
    g.append(t1, t2);

    // Taban çizgisi
    g.append(
      makeSvg("line", {
        x1: x0,
        y1: y0 + h,
        x2: x0 + w,
        y2: y0 + h,
        stroke: "var(--anim-border-strong)",
        "stroke-width": "1.5"
      })
    );

    // X ekseni etiketleri (45..105)
    const ticks = [45, 55, 65, 75, 85, 95, 105];
    ticks.forEach((val) => {
      const px = x0 + ((val - MIN_X) / (MAX_X - MIN_X)) * w;
      g.append(
        makeSvg("line", {
          x1: px,
          y1: y0 + h,
          x2: px,
          y2: y0 + h + 5,
          stroke: "var(--anim-border-strong)",
          "stroke-width": "1.2"
        })
      );
      const lbl = makeSvg("text", {
        x: px,
        y: y0 + h + 18,
        "text-anchor": "middle",
        "font-size": "10",
        "font-weight": val === 75 ? "700" : "400",
        fill: val === 75 ? "var(--anim-strong)" : "var(--anim-text-2)"
      });
      lbl.textContent = String(val);
      g.append(lbl);
    });
  }

  function renderLeftPanel() {
    gLeft.replaceChildren();
    const x0 = 26;
    const y0 = 56;
    const w = 330;
    const h = 200;
    const n = ALLOWED_N[currentNIndex];

    const shapeLabel =
      currentShape === "skewed" ? "Sağa çarpık evren" : "Simetrik evren";
    drawPanelAxes(
      gLeft,
      x0,
      y0,
      w,
      h,
      `1. Evren Dağılımı (${shapeLabel})`,
      `N = ${POP_SIZE} kişi · μ = 75,0 · SD = 10,0`
    );

    // Seçilen n kişinin hangi kutulara düştüğünü say
    const selectedBinCounts = new Array(BIN_COUNT).fill(0);
    for (let i = 0; i < lastSampleIndices.length; i++) {
      const val = population[lastSampleIndices[i]];
      selectedBinCounts[binIndexFor(val)]++;
    }

    const maxBin = Math.max(1, ...popBins);
    const barW = w / BIN_COUNT;

    for (let b = 0; b < BIN_COUNT; b++) {
      const count = popBins[b];
      if (count === 0) continue;
      const barH = (count / maxBin) * (h - 24);
      const bx = x0 + b * barW + 0.8;
      const by = y0 + h - barH;

      gLeft.append(
        makeSvg("rect", {
          x: bx,
          y: by,
          width: Math.max(1, barW - 1.6),
          height: barH,
          rx: 1.5,
          fill: "var(--anim-blue-bg)",
          stroke: "var(--anim-blue)",
          "stroke-width": "1"
        })
      );

      // Son çekilen örneklemdeki kişiler bu kutudaysa üstte vurgula
      const selCount = selectedBinCounts[b];
      if (selCount > 0) {
        const selH = Math.min(barH, (selCount / maxBin) * (h - 24));
        gLeft.append(
          makeSvg("rect", {
            x: bx,
            y: y0 + h - selH,
            width: Math.max(1, barW - 1.6),
            height: Math.max(3, selH),
            rx: 1.5,
            fill: "var(--anim-amber)",
            stroke: "var(--anim-strong)",
            "stroke-width": "0.8"
          })
        );
      }
    }

    // Evren ortalaması μ = 75 dikey çizgisi
    const muX = x0 + ((TARGET_MEAN - MIN_X) / (MAX_X - MIN_X)) * w;
    gLeft.append(
      makeSvg("line", {
        x1: muX,
        y1: y0 + 6,
        x2: muX,
        y2: y0 + h,
        stroke: "var(--anim-strong)",
        "stroke-width": "1.8",
        "stroke-dasharray": "4 3"
      })
    );

    const muBadge = makeSvg("text", {
      x: muX,
      y: y0 + 14,
      "text-anchor": "middle",
      "font-size": "10",
      "font-weight": "700",
      fill: "var(--anim-strong)"
    });
    muBadge.textContent = "μ = 75";
    gLeft.append(muBadge);

    // Son çekilen örneklemin ortalaması işaretçisi
    if (lastSampleMean !== null) {
      const smX = x0 + ((lastSampleMean - MIN_X) / (MAX_X - MIN_X)) * w;
      gLeft.append(
        makeSvg("line", {
          x1: smX,
          y1: y0 + 22,
          x2: smX,
          y2: y0 + h,
          stroke: "var(--anim-amber)",
          "stroke-width": "2"
        })
      );
      gLeft.append(
        makeSvg("circle", {
          cx: smX,
          cy: y0 + h,
          r: 4.5,
          fill: "var(--anim-amber)",
          stroke: "var(--anim-strong)",
          "stroke-width": "1.2"
        })
      );
      const smTxt = makeSvg("text", {
        x: Math.max(x0 + 48, Math.min(x0 + w - 48, smX)),
        y: y0 + h + 33,
        "text-anchor": "middle",
        "font-size": "10",
        "font-weight": "700",
        fill: "var(--anim-amber)"
      });
      smTxt.textContent = `Son çekilen ${n} kişinin ortalaması: ${fmtTr(lastSampleMean)}`;
      gLeft.append(smTxt);
    }
  }

  function renderRightPanel() {
    gRight.replaceChildren();
    const x0 = 404;
    const y0 = 56;
    const w = 330;
    const h = 200;
    const n = ALLOWED_N[currentNIndex];
    const theoSE = TARGET_SD / Math.sqrt(n);

    drawPanelAxes(
      gRight,
      x0,
      y0,
      w,
      h,
      `2. Örneklem Ortalamaları (n = ${n})`,
      `Kuramsal SH = 10 / √${n} = ${fmtTr(theoSE)} · Çekiliş: ${sampleMeans.length}`
    );

    // ±1 SH bandı (75 - SH ile 75 + SH arası)
    const seLeftX = x0 + ((TARGET_MEAN - theoSE - MIN_X) / (MAX_X - MIN_X)) * w;
    const seRightX = x0 + ((TARGET_MEAN + theoSE - MIN_X) / (MAX_X - MIN_X)) * w;
    gRight.append(
      makeSvg("rect", {
        x: seLeftX,
        y: y0 + 18,
        width: Math.max(2, seRightX - seLeftX),
        height: h - 18,
        fill: "var(--anim-purple-bg)"
      })
    );

    const seBandTxt = makeSvg("text", {
      x: (seLeftX + seRightX) / 2,
      y: y0 + 29,
      "text-anchor": "middle",
      "font-size": "10",
      "font-weight": "600",
      fill: "var(--anim-purple)"
    });
    seBandTxt.textContent = `±1 SH (${fmtTr(TARGET_MEAN - theoSE)}–${fmtTr(TARGET_MEAN + theoSE)})`;
    gRight.append(seBandTxt);

    // Histogram çubukları veya blokları
    const maxCount = Math.max(5, ...meanBins);
    const barW = w / BIN_COUNT;
    const useBlocks = maxCount <= 25;

    for (let b = 0; b < BIN_COUNT; b++) {
      const count = meanBins[b];
      if (count === 0) continue;
      const bx = x0 + b * barW + 0.8;
      const bw = Math.max(1, barW - 1.6);

      if (useBlocks) {
        const unitH = (h - 36) / maxCount;
        for (let k = 0; k < count; k++) {
          const isNewest = b === lastSampleBin && k === count - 1;
          const by = y0 + h - (k + 1) * unitH + 1;
          gRight.append(
            makeSvg("rect", {
              x: bx,
              y: by,
              width: bw,
              height: Math.max(2, unitH - 1.5),
              rx: 1.5,
              fill: isNewest ? "var(--anim-amber)" : "var(--anim-teal)",
              stroke: isNewest ? "var(--anim-strong)" : "var(--anim-bg)",
              "stroke-width": isNewest ? "1.2" : "0.6"
            })
          );
        }
      } else {
        const barH = (count / maxCount) * (h - 36);
        const by = y0 + h - barH;
        const isLastBin = b === lastSampleBin;
        gRight.append(
          makeSvg("rect", {
            x: bx,
            y: by,
            width: bw,
            height: barH,
            rx: 1.5,
            fill: isLastBin ? "var(--anim-blue-strong)" : "var(--anim-teal)",
            stroke: "var(--anim-bg)",
            "stroke-width": "0.6"
          })
        );
        if (isLastBin) {
          gRight.append(
            makeSvg("rect", {
              x: bx,
              y: by,
              width: bw,
              height: Math.min(barH, 6),
              fill: "var(--anim-amber)"
            })
          );
        }
      }
    }

    // Evren ortalaması μ = 75 referans çizgisi
    const muX = x0 + ((TARGET_MEAN - MIN_X) / (MAX_X - MIN_X)) * w;
    gRight.append(
      makeSvg("line", {
        x1: muX,
        y1: y0 + 6,
        x2: muX,
        y2: y0 + h,
        stroke: "var(--anim-strong)",
        "stroke-width": "1.8",
        "stroke-dasharray": "4 3"
      })
    );

    const muBadge = makeSvg("text", {
      x: muX,
      y: y0 + 14,
      "text-anchor": "middle",
      "font-size": "10",
      "font-weight": "700",
      fill: "var(--anim-strong)"
    });
    muBadge.textContent = "μ = 75";
    gRight.append(muBadge);

    if (lastSampleMean !== null) {
      const smX = x0 + ((lastSampleMean - MIN_X) / (MAX_X - MIN_X)) * w;
      const smLabel = makeSvg("text", {
        x: Math.max(x0 + 55, Math.min(x0 + w - 55, smX)),
        y: y0 + h + 33,
        "text-anchor": "middle",
        "font-size": "10",
        "font-weight": "700",
        fill: "var(--anim-teal)"
      });
      smLabel.textContent = `Eklenen blok: x̄ = ${fmtTr(lastSampleMean)}`;
      gRight.append(smLabel);
    }
  }

  function renderStatsAndNotes() {
    const n = ALLOWED_N[currentNIndex];
    const theoSE = TARGET_SD / Math.sqrt(n);
    sliderValueStrong.textContent = String(n);

    // Düğme aktiflik durumları
    const tickBtns = ticksRow.querySelectorAll("button");
    tickBtns.forEach((btn, idx) => {
      btn.classList.toggle(
        "sampling-distribution__tick-btn--active",
        idx === currentNIndex
      );
      btn.setAttribute("aria-pressed", String(idx === currentNIndex));
    });

    btnShapeNormal.classList.toggle(
      "sampling-distribution__chip--active",
      currentShape === "normal"
    );
    btnShapeNormal.setAttribute(
      "aria-pressed",
      String(currentShape === "normal")
    );
    btnShapeSkewed.classList.toggle(
      "sampling-distribution__chip--active",
      currentShape === "skewed"
    );
    btnShapeSkewed.setAttribute(
      "aria-pressed",
      String(currentShape === "skewed")
    );

    // 1. Kart: Evren bilgisi
    statPop.replaceChildren(
      makeEl("span", "sampling-distribution__stat-label", "Evren (Kişilerin Dağılımı)"),
      makeEl(
        "strong",
        "sampling-distribution__stat-value",
        "μ = 75,0 · SD = 10,0"
      ),
      makeEl(
        "span",
        "sampling-distribution__stat-sub",
        currentShape === "skewed"
          ? "Biçim: Sağa çarpık (N = 400)"
          : "Biçim: Simetrik (N = 400)"
      )
    );

    // 2. Kart: Standart hata hesabı
    statFormula.replaceChildren(
      makeEl(
        "span",
        "sampling-distribution__stat-label",
        `Standart Hata (n = ${n})`
      ),
      makeEl(
        "strong",
        "sampling-distribution__stat-value sampling-distribution__stat-value--accent",
        `SH = 10 / √${n} = ${fmtTr(theoSE)}`
      ),
      makeEl(
        "span",
        "sampling-distribution__stat-sub",
        n === 25
          ? "n = 25 için ortalama tipik olarak ±2 puan oynar"
          : n === 100
          ? "n dört katına çıkınca (100) SH yarıya (1,0) iner"
          : "Küçük örneklemde (n = 5) ortalama daha çok oynar"
      )
    );

    // 3. Kart: Çekilen örneklemlerin özeti
    const count = sampleMeans.length;
    const obsMean = count > 0 ? meanOf(sampleMeans) : TARGET_MEAN;
    const obsSE = count > 1 ? sdOf(sampleMeans, obsMean) : 0;

    statSamples.replaceChildren(
      makeEl(
        "span",
        "sampling-distribution__stat-label",
        `Gözlenen Ortalamalar (${count} çekiliş)`
      ),
      makeEl(
        "strong",
        "sampling-distribution__stat-value",
        count > 1
          ? `Ortalama = ${fmtTr(obsMean)} · Yayılım = ${fmtTr(obsSE)}`
          : `Son ortalama = ${fmtTr(obsMean)}`
      ),
      makeEl(
        "span",
        "sampling-distribution__stat-sub",
        count < 20
          ? "Dağılımın şeklini görmek için '1000 kez çek' düğmesine basın"
          : `Kuramsal SH (${fmtTr(theoSE)}) değerine yakınsadı`
      )
    );

    // Alt açıklama notu
    if (currentShape === "skewed" && n === 5) {
      noteBox.textContent =
        "Gözlem: Evren sağa çarpık olduğunda ve örneklem küçük seçildiğinde (n = 5), ortalamaların dağılımı daralsa da çarpıklığı bir miktar korur.";
    } else if (currentShape === "skewed" && n >= 25) {
      noteBox.textContent = `Gözlem: Evren sağa çarpık olsa bile n = ${n} gibi yeterince büyük bir örneklemde yüksek ve düşük değerler birbirini dengeler; sağdaki ortalamalar histogramı çana (normal dağılıma) yaklaşır.`;
    } else if (n === 100) {
      noteBox.textContent =
        "Gözlem: Örneklem büyüklüğü 25'ten 100'e (dört katına) çıktığında standart hata 2'den 1'e (yarıya) iner; ortalamalar 75'in çok dar bir çevresinde toplanır.";
    } else {
      noteBox.textContent =
        "Gözlem: Sağdaki örneklem ortalamaları histogramı yine evren ortalaması (75) çevresinde toplanır ama tek tek kişilerin dağılımından (SD = 10) çok daha dardır (SH = " +
        fmtTr(theoSE) +
        ").";
    }
  }

  function render() {
    renderStatsAndNotes();
    renderLeftPanel();
    renderRightPanel();
  }

  // Olay dinleyicileri
  btnDrawOne.addEventListener("click", () => {
    stepOneSample();
    render();
  });

  btnDrawThousand.addEventListener("click", () => {
    for (let i = 0; i < 1000; i++) {
      stepOneSample();
    }
    render();
  });

  btnReset.addEventListener("click", () => {
    resetSimulation(true);
  });

  nSlider.addEventListener("input", () => {
    const idx = Number.parseInt(nSlider.value, 10);
    if (idx !== currentNIndex && idx >= 0 && idx < ALLOWED_N.length) {
      currentNIndex = idx;
      resetSimulation(true);
    }
  });

  btnShapeNormal.addEventListener("click", () => {
    if (currentShape !== "normal") {
      currentShape = "normal";
      rebuildPopulationData();
      resetSimulation(true);
    }
  });

  btnShapeSkewed.addEventListener("click", () => {
    if (currentShape !== "skewed") {
      currentShape = "skewed";
      rebuildPopulationData();
      resetSimulation(true);
    }
  });

  // Başlangıç kurulumu
  rebuildPopulationData();
  resetSimulation(true);
}
