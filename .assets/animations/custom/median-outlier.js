import { makeEl, makeSvg } from "../core/dom.js";
// median-outlier.js — Bir değeri uca sürüklemek: ortalama kayarken medyanın sabit kalması
//
// Kullanım:
//   <div data-anim="custom" data-src="median-outlier.js" data-css="median-outlier.css"></div>
//
// Öznitelikler (isteğe bağlı):
//   data-max-val : en sağdaki 9. değerin başlangıç maaşı (38–400, varsayılan 38)
//   data-label   : başlık metni

const BASE_WORKERS = [25, 27, 28, 30, 30, 32, 35, 38];
const MIN_NINTH = 38;
const MAX_NINTH = 400;
const AXIS_MIN = 20;
const AXIS_MAX = 410;
const VIEW_W = 680;
const VIEW_H = 265;
const LINE_X0 = 55;
const LINE_X1 = 625;
const LINE_Y = 172;

function computeSummary(ninthValue) {
  const all = [...BASE_WORKERS, ninthValue].sort((a, b) => a - b);
  const sum = all.reduce((acc, v) => acc + v, 0);
  const meanVal = sum / all.length;
  const medianVal = all[4];
  const baseSum = BASE_WORKERS.reduce((acc, v) => acc + v, 0);
  const startMean = (baseSum + MIN_NINTH) / 9;
  return {
    all,
    ninthValue,
    sum,
    meanVal,
    medianVal,
    startMean,
    meanShift: meanVal - startMean,
  };
}

function fmt(num, digits = 1) {
  return num.toFixed(digits).replace(".", ",");
}

function xOf(val) {
  return LINE_X0 + ((val - AXIS_MIN) / (AXIS_MAX - AXIS_MIN)) * (LINE_X1 - AXIS_MIN_SPAN());
}

function AXIS_MIN_SPAN() {
  return LINE_X0;
}

function valueToX(val) {
  return LINE_X0 + ((val - AXIS_MIN) / (AXIS_MAX - AXIS_MIN)) * (LINE_X1 - LINE_X0);
}

function xToValue(px) {
  const ratio = (px - LINE_X0) / (LINE_X1 - LINE_X0);
  const clamped = Math.max(0, Math.min(1, ratio));
  const raw = AXIS_MIN + clamped * (AXIS_MAX - AXIS_MIN);
  return Math.max(MIN_NINTH, Math.min(MAX_NINTH, Math.round(raw)));
}

export function mount(div, dataset = div.dataset) {
  const ds = dataset || div.dataset;
  let ninth = Number.parseFloat(ds.maxVal ?? "38");
  if (!Number.isFinite(ninth) || ninth < MIN_NINTH || ninth > MAX_NINTH) {
    div.replaceChildren(
      makeEl(
        "p",
        "median-outlier__uyari",
        `Geçersiz data-max-val: "${ds.maxVal}". ${MIN_NINTH} ile ${MAX_NINTH} arasında bir sayı olmalıdır.`
      )
    );
    console.warn("[median-outlier] geçersiz data-max-val:", ds.maxVal);
    return;
  }
  ninth = Math.round(ninth);

  let dragging = false;

  const root = makeEl("div", "median-outlier");
  root.setAttribute("aria-label", "Uç değerin ortalama ve medyana etkisi animasyonu");

  const header = makeEl("header", "median-outlier__header");
  const titleText = (ds.label || "Bir Değeri Uca Sürüklemek: Ortalama ve Medyan").trim();
  const titleEl = makeEl("h4", "median-outlier__title", titleText);
  const subtitleEl = makeEl(
    "p",
    "median-outlier__subtitle",
    "En sağdaki 9. noktayı sürükleyin: ortalama (M) uç değerin peşinden kayarken medyan (Mdn = 30) 5. sıradaki yerini korur."
  );
  header.append(titleEl, subtitleEl);

  const statsRow = makeEl("div", "median-outlier__stats");

  const statMedian = makeEl("div", "median-outlier__stat median-outlier__stat--median");
  const statMedianLabel = makeEl("span", "median-outlier__stat-label", "Medyan (Mdn — 5. sıra, düz çizgi)");
  const statMedianVal = makeEl("strong", "median-outlier__stat-value");
  statMedian.append(statMedianLabel, statMedianVal);

  const statMean = makeEl("div", "median-outlier__stat median-outlier__stat--mean");
  const statMeanLabel = makeEl("span", "median-outlier__stat-label", "Ortalama (M — kesikli çizgi)");
  const statMeanVal = makeEl("strong", "median-outlier__stat-value");
  statMean.append(statMeanLabel, statMeanVal);

  const statNinth = makeEl("div", "median-outlier__stat median-outlier__stat--outlier");
  const statNinthLabel = makeEl("span", "median-outlier__stat-label", "9. Kişinin Maaşı (En Büyük Değer)");
  const statNinthVal = makeEl("strong", "median-outlier__stat-value");
  statNinth.append(statNinthLabel, statNinthVal);

  statsRow.append(statMedian, statMean, statNinth);

  const svg = makeSvg("svg", {
    class: "median-outlier__svg",
    viewBox: `0 0 ${VIEW_W} ${VIEW_H}`,
    role: "img",
    "aria-label": "Dokuz maaş verisi üzerinde ortalama ve medyan çizgilerinin karşılaştırması",
  });

  const orderBox = makeEl("div", "median-outlier__order");
  const orderTitle = makeEl("span", "median-outlier__order-title", "Sıralı 9 değer (bin TL):");
  const orderList = makeEl("div", "median-outlier__order-list");
  orderBox.append(orderTitle, orderList);

  const noteBanner = makeEl("p", "median-outlier__note");
  noteBanner.setAttribute("aria-live", "polite");

  const controls = makeEl("div", "median-outlier__controls");
  const sliderWrap = makeEl("label", "median-outlier__slider-wrap");
  const sliderText = makeEl("span", "median-outlier__slider-text", "9. değer (bin TL):");
  const slider = makeEl("input", {
    type: "range",
    class: "median-outlier__slider",
    min: String(MIN_NINTH),
    max: String(MAX_NINTH),
    step: "1",
    value: String(ninth),
    "aria-label": "Dokuzuncu kişinin maaşı (bin TL)",
  });
  const sliderValue = makeEl("span", "median-outlier__slider-val");
  sliderWrap.append(sliderText, slider, sliderValue);

  const btnRow = makeEl("div", "median-outlier__buttons");
  const btnNear = makeEl("button", { type: "button", class: "median-outlier__btn" }, "Yakın (38 bin)");
  const btnMid = makeEl("button", { type: "button", class: "median-outlier__btn" }, "Uzak (150 bin)");
  const btnOwner = makeEl(
    "button",
    { type: "button", class: "median-outlier__btn median-outlier__btn--primary" },
    "Şirket Sahibi (400 bin)"
  );
  const btnReset = makeEl(
    "button",
    { type: "button", class: "median-outlier__btn median-outlier__btn--ghost" },
    "Sıfırla"
  );
  btnRow.append(btnNear, btnMid, btnOwner, btnReset);
  controls.append(sliderWrap, btnRow);

  root.append(header, statsRow, svg, orderBox, noteBanner, controls);
  div.replaceChildren(root);

  function setNinthValue(nextVal) {
    ninth = Math.max(MIN_NINTH, Math.min(MAX_NINTH, Math.round(nextVal)));
    slider.value = String(ninth);
    render();
  }

  function render() {
    const state = computeSummary(ninth);
    const medianX = valueToX(state.medianVal);
    const meanX = valueToX(state.meanVal);
    const ninthX = valueToX(state.ninthValue);

    statMedianVal.textContent = `${state.medianVal} bin TL (Sabit)`;
    statMeanVal.textContent = `${fmt(state.meanVal, 1)} bin TL`;
    statNinthVal.textContent = `${state.ninthValue} bin TL`;
    sliderValue.textContent = `${state.ninthValue} bin TL`;

    const chips = state.all.map((val, idx) => {
      const rank = idx + 1;
      let cls = "median-outlier__chip";
      let prefix = `${rank}. `;
      if (idx === 4) {
        cls += " median-outlier__chip--median";
        prefix = "5. (Mdn) ";
      } else if (idx === 8) {
        cls += " median-outlier__chip--outlier";
        prefix = "9. (Uç) ";
      }
      return makeEl("span", cls, `${prefix}${val}`);
    });
    orderList.replaceChildren(...chips);

    if (state.ninthValue === 400) {
      noteBanner.textContent = `Şirket sahibinin maaşı (400 bin TL) eklendiğinde toplam 645 bin TL olur ve ortalama M = 71,7 bin TL'ye fırlar; sekiz çalışanın en yüksek maaşlısı bile (38 bin TL) ortalamanın altında kalır. Oysa 5. sıradaki medyan (Mdn = 30 bin TL) hiç değişmez.`;
    } else if (state.ninthValue > 60) {
      noteBanner.textContent = `9. değer ${state.ninthValue} bin TL'ye çekildiğinde ortalama ${fmt(state.startMean, 1)} bin TL'den ${fmt(state.meanVal, 1)} bin TL'ye kaydı (+${fmt(state.meanShift, 1)} bin TL). Medyan yalnızca sıraya baktığı için 5. değer olan 30 bin TL yerinde kaldı.`;
    } else {
      noteBanner.textContent = `Dokuz değer birbirine yakınken ortalama (M = ${fmt(state.meanVal, 1)} bin TL) ve medyan (Mdn = 30 bin TL) neredeyse üst üstedir. En sağdaki 9. noktayı sağa sürükleyin.`;
    }

    const svgNodes = [];

    const axisLine = makeSvg("line", {
      x1: String(LINE_X0),
      y1: String(LINE_Y),
      x2: String(LINE_X1),
      y2: String(LINE_Y),
      stroke: "var(--anim-border-strong)",
      "stroke-width": "3",
    });
    svgNodes.push(axisLine);

    const ticks = [25, 50, 100, 150, 200, 250, 300, 350, 400];
    for (const t of ticks) {
      const tx = valueToX(t);
      const tickLine = makeSvg("line", {
        x1: String(tx),
        y1: String(LINE_Y - 5),
        x2: String(tx),
        y2: String(LINE_Y + 7),
        stroke: "var(--anim-muted)",
        "stroke-width": "1.5",
      });
      const tickText = makeSvg("text", {
        x: String(tx),
        y: String(LINE_Y + 24),
        "text-anchor": "middle",
        "font-size": "11",
        fill: "var(--anim-text-2)",
      });
      tickText.textContent = String(t);
      svgNodes.push(tickLine, tickText);
    }

    const axisUnit = makeSvg("text", {
      x: String(LINE_X1),
      y: String(LINE_Y + 44),
      "text-anchor": "end",
      "font-size": "11",
      fill: "var(--anim-muted)",
    });
    axisUnit.textContent = "Aylık maaş (bin TL)";
    svgNodes.push(axisUnit);

    if (meanX - medianX > 14) {
      const pullBand = makeSvg("rect", {
        x: String(medianX),
        y: "86",
        width: String(meanX - medianX),
        height: String(LINE_Y - 86),
        fill: "color-mix(in srgb, var(--anim-amber) 14%, transparent)",
      });
      const pullArrow = makeSvg("line", {
        x1: String(medianX + 4),
        y1: "106",
        x2: String(meanX - 4),
        y2: "106",
        stroke: "var(--anim-amber)",
        "stroke-width": "2.5",
      });
      const pullText = makeSvg("text", {
        x: String((medianX + meanX) / 2),
        y: "99",
        "text-anchor": "middle",
        "font-size": "11",
        "font-weight": "700",
        fill: "var(--anim-amber)",
      });
      pullText.textContent = `+${fmt(state.meanVal - state.medianVal, 1)} bin TL fark`;
      svgNodes.push(pullBand, pullArrow, pullText);
    }

    const medianLine = makeSvg("line", {
      x1: String(medianX),
      y1: "46",
      x2: String(medianX),
      y2: String(LINE_Y + 10),
      stroke: "var(--anim-teal)",
      "stroke-width": "3",
    });
    const medianBox = makeSvg("rect", {
      x: String(medianX - 54),
      y: "20",
      width: "108",
      height: "24",
      rx: "6",
      fill: "var(--anim-teal)",
    });
    const medianLabel = makeSvg("text", {
      x: String(medianX),
      y: "36",
      "text-anchor": "middle",
      "font-size": "11",
      "font-weight": "700",
      fill: "var(--anim-on-accent)",
    });
    medianLabel.textContent = `Medyan (Mdn) = ${state.medianVal}`;
    svgNodes.push(medianLine, medianBox, medianLabel);

    const meanLine = makeSvg("line", {
      x1: String(meanX),
      y1: "54",
      x2: String(meanX),
      y2: String(LINE_Y + 10),
      stroke: "var(--anim-amber)",
      "stroke-width": "3",
      "stroke-dasharray": "6 4",
    });

    const meanLabelOffsetY = Math.abs(meanX - medianX) < 115 ? 54 : 20;
    const meanBox = makeSvg("rect", {
      x: String(Math.min(VIEW_W - 126, Math.max(8, meanX - 58))),
      y: String(meanLabelOffsetY),
      width: "116",
      height: "24",
      rx: "6",
      fill: "var(--anim-surface)",
      stroke: "var(--anim-amber)",
      "stroke-width": "2",
    });
    const meanLabel = makeSvg("text", {
      x: String(Math.min(VIEW_W - 68, Math.max(66, meanX))),
      y: String(meanLabelOffsetY + 16),
      "text-anchor": "middle",
      "font-size": "11",
      "font-weight": "700",
      fill: "var(--anim-strong)",
    });
    meanLabel.textContent = `Ortalama (M) = ${fmt(state.meanVal, 1)}`;
    svgNodes.push(meanLine, meanBox, meanLabel);

    const seenCounts = new Map();
    for (let i = 0; i < BASE_WORKERS.length; i++) {
      const val = BASE_WORKERS[i];
      const count = seenCounts.get(val) || 0;
      seenCounts.set(val, count + 1);
      const cx = valueToX(val);
      const cy = LINE_Y - count * 15;
      const isMedianRank = i === 4;

      if (isMedianRank) {
        const ring = makeSvg("circle", {
          cx: String(cx),
          cy: String(cy),
          r: "10",
          fill: "none",
          stroke: "var(--anim-teal)",
          "stroke-width": "2",
        });
        svgNodes.push(ring);
      }

      const dot = makeSvg("circle", {
        cx: String(cx),
        cy: String(cy),
        r: "6",
        fill: isMedianRank ? "var(--anim-teal)" : "var(--anim-blue-strong)",
        stroke: "var(--anim-bg)",
        "stroke-width": "1.5",
      });
      svgNodes.push(dot);
    }

    const dragGroup = makeSvg("g", {
      class: "median-outlier__drag-point",
    });

    const ninthStack = state.ninthValue === 38 ? 1 : 0;
    const ninthY = LINE_Y - ninthStack * 15;

    const halo = makeSvg("circle", {
      cx: String(ninthX),
      cy: String(ninthY),
      r: "14",
      fill: "color-mix(in srgb, var(--anim-red) 22%, transparent)",
      stroke: "var(--anim-red)",
      "stroke-width": "1.5",
      "stroke-dasharray": "3 2",
    });

    const diamond = makeSvg("polygon", {
      points: `${ninthX},${ninthY - 9} ${ninthX + 9},${ninthY} ${ninthX},${ninthY + 9} ${ninthX - 9},${ninthY}`,
      fill: "var(--anim-red)",
      stroke: "var(--anim-bg)",
      "stroke-width": "1.5",
    });

    const dragTagX = Math.min(VIEW_W - 72, Math.max(72, ninthX));
    const dragTag = makeSvg("text", {
      x: String(dragTagX),
      y: String(ninthY - 20),
      "text-anchor": "middle",
      "font-size": "11",
      "font-weight": "700",
      fill: "var(--anim-red)",
    });
    dragTag.textContent = `9. değer: ${state.ninthValue} ↔`;

    dragGroup.append(halo, diamond, dragTag);
    svgNodes.push(dragGroup);

    const legend = makeSvg("text", {
      x: String(LINE_X0),
      y: String(VIEW_H - 12),
      "font-size": "11",
      fill: "var(--anim-muted)",
    });
    legend.textContent = "● İlk 8 çalışan (25–38 bin TL)   ◎ 5. değer (Medyan = 30)   ◆ 9. değer (Sürüklenebilir)";
    svgNodes.push(legend);

    svg.replaceChildren(...svgNodes);
  }

  function pointerToValue(evt) {
    const rect = svg.getBoundingClientRect();
    if (!rect.width) return ninth;
    const svgX = ((evt.clientX - rect.left) / rect.width) * VIEW_W;
    return xToValue(svgX);
  }

  svg.addEventListener("pointerdown", (evt) => {
    dragging = true;
    if (svg.setPointerCapture) {
      svg.setPointerCapture(evt.pointerId);
    }
    setNinthValue(pointerToValue(evt));
  });

  svg.addEventListener("pointermove", (evt) => {
    if (!dragging) return;
    setNinthValue(pointerToValue(evt));
  });

  svg.addEventListener("pointerup", (evt) => {
    if (!dragging) return;
    dragging = false;
    if (svg.releasePointerCapture && svg.hasPointerCapture && svg.hasPointerCapture(evt.pointerId)) {
      svg.releasePointerCapture(evt.pointerId);
    }
  });

  svg.addEventListener("pointercancel", () => {
    dragging = false;
  });

  slider.addEventListener("input", () => {
    const val = Number.parseFloat(slider.value);
    if (Number.isFinite(val)) {
      setNinthValue(val);
    }
  });

  btnNear.addEventListener("click", () => setNinthValue(38));
  btnMid.addEventListener("click", () => setNinthValue(150));
  btnOwner.addEventListener("click", () => setNinthValue(400));
  btnReset.addEventListener("click", () => setNinthValue(38));

  render();
}
