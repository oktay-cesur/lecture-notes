import { makeEl, makeSvg } from "../core/dom.js";
// t-ve-normal.js — Standart normal dağılım ile t dağılımının serbestlik derecesine göre karşılaştırılması
//
// Kullanım:
//   <div data-anim="custom" data-src="t-ve-normal.js" data-css="t-ve-normal.css"></div>
//
// Öznitelikler (isteğe bağlı):
//   data-df    : başlangıç serbestlik derecesi (2–50 arası tam sayı, varsayılan 2)
//   data-t     : kuyruk karşılaştırması için mutlak t eşiği (1,0–4,0 arası sayı, varsayılan 2,0)
//   data-label : başlık metni

const MIN_DF = 2;
const MAX_DF = 50;
const STEP_DFS = [2, 5, 10, 24, 50];

const VIEW_W = 680;
const VIEW_H = 310;
const PLOT_X0 = 54;
const PLOT_X1 = 646;
const PLOT_Y0 = 28;
const PLOT_Y1 = 238;
const X_MIN = -4.5;
const X_MAX = 4.5;
const Y_MAX = 0.44;

const LANCZOS_COEFFS = [
  0.99999999999980993,
  676.5203681218851,
  -1259.1392167224028,
  771.32342877765313,
  -176.61502916214059,
  12.507343278686905,
  -0.13857109526572012,
  9.9843695780195716e-6,
  1.5056327351493116e-7,
];

function logGamma(z) {
  if (z < 0.5) {
    return Math.log(Math.PI) - Math.log(Math.sin(Math.PI * z)) - logGamma(1 - z);
  }
  const shifted = z - 1;
  let sum = LANCZOS_COEFFS[0];
  for (let i = 1; i < LANCZOS_COEFFS.length; i++) {
    sum += LANCZOS_COEFFS[i] / (shifted + i);
  }
  const t = shifted + 7.5;
  return 0.5 * Math.log(2 * Math.PI) + (shifted + 0.5) * Math.log(t) - t + Math.log(sum);
}

function normalPdf(x) {
  return Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
}

function tPdf(x, df) {
  const logCoeff = logGamma((df + 1) / 2) - logGamma(df / 2) - 0.5 * Math.log(df * Math.PI);
  const logKernel = -((df + 1) / 2) * Math.log(1 + (x * x) / df);
  return Math.exp(logCoeff + logKernel);
}

function integrateZeroTo(fn, upper, steps = 200) {
  const a = 0;
  const b = Math.abs(upper);
  if (b === 0) return 0;
  const n = steps % 2 === 0 ? steps : steps + 1;
  const h = (b - a) / n;
  let sum = fn(a) + fn(b);
  for (let i = 1; i < n; i++) {
    const x = a + i * h;
    sum += (i % 2 === 0 ? 2 : 4) * fn(x);
  }
  return (h / 3) * sum;
}

function twoTailedNormalP(tAbs) {
  const central = 2 * integrateZeroTo(normalPdf, tAbs, 200);
  return Math.max(0, Math.min(1, 1 - central));
}

function twoTailedTP(tAbs, df) {
  const central = 2 * integrateZeroTo((x) => tPdf(x, df), tAbs, 200);
  return Math.max(0, Math.min(1, 1 - central));
}

function xToSvg(x) {
  return PLOT_X0 + ((x - X_MIN) / (X_MAX - X_MIN)) * (PLOT_X1 - PLOT_X0);
}

function yToSvg(y) {
  return PLOT_Y1 - (Math.min(y, Y_MAX) / Y_MAX) * (PLOT_Y1 - PLOT_Y0);
}

function buildCurvePath(pdfFn, xStart, xEnd, samples = 180) {
  const parts = [];
  for (let i = 0; i <= samples; i++) {
    const x = xStart + ((xEnd - xStart) * i) / samples;
    const sx = xToSvg(x).toFixed(2);
    const sy = yToSvg(pdfFn(x)).toFixed(2);
    parts.push(`${i === 0 ? "M" : "L"}${sx},${sy}`);
  }
  return parts.join(" ");
}

function buildTailAreaPath(pdfFn, xStart, xEnd, samples = 60) {
  const parts = [`M${xToSvg(xStart).toFixed(2)},${PLOT_Y1.toFixed(2)}`];
  for (let i = 0; i <= samples; i++) {
    const x = xStart + ((xEnd - xStart) * i) / samples;
    const sx = xToSvg(x).toFixed(2);
    const sy = yToSvg(pdfFn(x)).toFixed(2);
    parts.push(`L${sx},${sy}`);
  }
  parts.push(`L${xToSvg(xEnd).toFixed(2)},${PLOT_Y1.toFixed(2)}`, "Z");
  return parts.join(" ");
}

function fmtNum(val, digits = 3) {
  return val.toFixed(digits).replace(".", ",");
}

function describeState(df, tAbs, pT, pZ) {
  const diffRatio = pT / Math.max(pZ, 1e-6);
  if (df <= 4) {
    return `Küçük örneklemde (sd = ${df}, n = ${df + 1}) standart sapma tahmini çok oynar; t eğrisinin kuyrukları belirgin biçimde kalındır. |t| ≥ ${fmtNum(tAbs, 2)} için p değeri normal dağılımın ${fmtNum(diffRatio, 1)} katıdır.`;
  }
  if (df < 15) {
    return `Örneklem büyüdükçe (sd = ${df}, n = ${df + 1}) kuyruklar incelir ve merkez yükselir; ancak |t| ≥ ${fmtNum(tAbs, 2)} için p(t) = ${fmtNum(pT, 3)} değeri hâlâ normal dağılımdaki ${fmtNum(pZ, 3)} değerinden büyüktür.`;
  }
  if (df === 24) {
    return `Ders notundaki uyku örneği (n = 25, sd = 24): t eğrisi normal eğriye oldukça yaklaşmıştır ama kuyruklar hâlâ biraz daha kalındır (p(t) = ${fmtNum(pT, 3)} ve p(z) = ${fmtNum(pZ, 3)}).`;
  }
  if (df < 35) {
    return `Orta büyüklükte örneklemde (sd = ${df}, n = ${df + 1}) iki eğri arasındaki fark iyice daralmıştır; kuyruk olasılıkları birbirine yaklaşır.`;
  }
  return `Büyük örneklemde (sd = ${df}, n = ${df + 1}) örneklem standart sapması evren değerine yaklaştığı için t dağılımı standart normal eğriyle neredeyse tamamen çakışır.`;
}

export function mount(div, dataset = div.dataset) {
  const rawDf = dataset.df ?? "2";
  const rawT = dataset.t ?? "2.0";
  const initialDf = Number.parseInt(rawDf, 10);
  const tAbs = Number.parseFloat(String(rawT).replace(",", "."));

  if (!Number.isFinite(initialDf) || initialDf < MIN_DF || initialDf > MAX_DF) {
    div.replaceChildren(
      makeEl(
        "p",
        "t-ve-normal__uyari",
        `Geçersiz data-df: "${rawDf}". ${MIN_DF} ile ${MAX_DF} arasında bir tam sayı olmalı.`
      )
    );
    console.warn("[t-ve-normal] geçersiz data-df:", rawDf);
    return;
  }

  if (!Number.isFinite(tAbs) || tAbs < 1.0 || tAbs > 4.0) {
    div.replaceChildren(
      makeEl(
        "p",
        "t-ve-normal__uyari",
        `Geçersiz data-t: "${rawT}". 1,0 ile 4,0 arasında bir sayı olmalı.`
      )
    );
    console.warn("[t-ve-normal] geçersiz data-t:", rawT);
    return;
  }

  let currentDf = initialDf;
  const pZ = twoTailedNormalP(tAbs);

  const root = makeEl("section", "t-ve-normal");
  root.setAttribute("aria-label", "t dağılımı ve standart normal dağılım karşılaştırma animasyonu");

  const header = makeEl("header", "t-ve-normal__header");
  const titleText = dataset.label
    ? dataset.label.trim()
    : "Standart Normal (z) ve t Dağılımı: Serbestlik Derecesinin Etkisi";
  const title = makeEl("h3", "t-ve-normal__title", titleText);

  const legend = makeEl("div", "t-ve-normal__legend");
  const legNormal = makeEl("span", "t-ve-normal__legend-item t-ve-normal__legend-item--normal");
  const legNormalLine = makeEl("span", "t-ve-normal__swatch t-ve-normal__swatch--normal");
  legNormalLine.setAttribute("aria-hidden", "true");
  legNormal.append(legNormalLine, makeEl("span", null, "Standart normal (z) — kesikli çizgi"));

  const legT = makeEl("span", "t-ve-normal__legend-item t-ve-normal__legend-item--t");
  const legTLine = makeEl("span", "t-ve-normal__swatch t-ve-normal__swatch--t");
  legTLine.setAttribute("aria-hidden", "true");
  const legTText = makeEl("span", null, `t dağılımı (sd = ${currentDf}) — düz kalın çizgi`);
  legT.append(legTLine, legTText);

  legend.append(legNormal, legT);
  header.append(title, legend);

  const svgWrap = makeEl("div", "t-ve-normal__canvas");
  const svg = makeSvg("svg", {
    viewBox: `0 0 ${VIEW_W} ${VIEW_H}`,
    class: "t-ve-normal__svg",
    role: "img",
    "aria-label": "Standart normal eğri ve serbestlik derecesine bağlı t dağılımı eğrisi",
  });

  // Izgara ve eksen öğeleri
  const gridGroup = makeSvg("g", { class: "t-ve-normal__grid" });
  for (const yTick of [0.1, 0.2, 0.3, 0.4]) {
    const sy = yToSvg(yTick);
    gridGroup.append(
      makeSvg("line", {
        x1: PLOT_X0,
        y1: sy,
        x2: PLOT_X1,
        y2: sy,
        stroke: "var(--anim-border)",
        "stroke-dasharray": "3 4",
        "stroke-width": 1,
      })
    );
    const yLabel = makeSvg("text", {
      x: PLOT_X0 - 8,
      y: sy + 4,
      "text-anchor": "end",
      "font-size": 11,
      fill: "var(--anim-muted)",
    });
    yLabel.textContent = fmtNum(yTick, 1);
    gridGroup.append(yLabel);
  }

  const yAxisTitle = makeSvg("text", {
    x: PLOT_X0,
    y: PLOT_Y0 - 10,
    "text-anchor": "start",
    "font-size": 11,
    fill: "var(--anim-muted)",
  });
  yAxisTitle.textContent = "Yoğunluk";
  gridGroup.append(yAxisTitle);

  // Kuyruk dolgu alanları
  const normalLeftTail = makeSvg("path", {
    d: buildTailAreaPath(normalPdf, X_MIN, -tAbs),
    class: "t-ve-normal__tail-normal",
  });
  const normalRightTail = makeSvg("path", {
    d: buildTailAreaPath(normalPdf, tAbs, X_MAX),
    class: "t-ve-normal__tail-normal",
  });

  const tLeftTail = makeSvg("path", {
    class: "t-ve-normal__tail-t",
  });
  const tRightTail = makeSvg("path", {
    class: "t-ve-normal__tail-t",
  });

  // Eğriler
  const normalCurve = makeSvg("path", {
    d: buildCurvePath(normalPdf, X_MIN, X_MAX),
    fill: "none",
    stroke: "var(--anim-blue)",
    "stroke-width": 2.4,
    "stroke-dasharray": "7 5",
  });

  const tCurve = makeSvg("path", {
    fill: "none",
    stroke: "var(--anim-amber)",
    "stroke-width": 3.2,
  });

  // Eşik dikey çizgileri (±t)
  const leftCutX = xToSvg(-tAbs);
  const rightCutX = xToSvg(tAbs);

  const leftCutLine = makeSvg("line", {
    x1: leftCutX,
    y1: PLOT_Y0 + 18,
    x2: leftCutX,
    y2: PLOT_Y1,
    stroke: "var(--anim-border-strong)",
    "stroke-width": 1.5,
    "stroke-dasharray": "4 3",
  });
  const rightCutLine = makeSvg("line", {
    x1: rightCutX,
    y1: PLOT_Y0 + 18,
    x2: rightCutX,
    y2: PLOT_Y1,
    stroke: "var(--anim-border-strong)",
    "stroke-width": 1.5,
    "stroke-dasharray": "4 3",
  });

  const leftCutLabel = makeSvg("text", {
    x: leftCutX - 5,
    y: PLOT_Y0 + 30,
    "text-anchor": "end",
    "font-size": 11,
    "font-weight": "600",
    fill: "var(--anim-text)",
  });
  leftCutLabel.textContent = `−t = −${fmtNum(tAbs, 2)}`;

  const rightCutLabel = makeSvg("text", {
    x: rightCutX + 5,
    y: PLOT_Y0 + 30,
    "text-anchor": "start",
    "font-size": 11,
    "font-weight": "600",
    fill: "var(--anim-text)",
  });
  rightCutLabel.textContent = `+t = +${fmtNum(tAbs, 2)}`;

  // X ekseni ve işaretleri
  const xAxis = makeSvg("line", {
    x1: PLOT_X0,
    y1: PLOT_Y1,
    x2: PLOT_X1,
    y2: PLOT_Y1,
    stroke: "var(--anim-border-strong)",
    "stroke-width": 1.5,
  });

  const xTicksGroup = makeSvg("g", { class: "t-ve-normal__xticks" });
  for (let tick = -4; tick <= 4; tick++) {
    const sx = xToSvg(tick);
    xTicksGroup.append(
      makeSvg("line", {
        x1: sx,
        y1: PLOT_Y1,
        x2: sx,
        y2: PLOT_Y1 + 6,
        stroke: "var(--anim-border-strong)",
        "stroke-width": 1.2,
      })
    );
    const lbl = makeSvg("text", {
      x: sx,
      y: PLOT_Y1 + 21,
      "text-anchor": "middle",
      "font-size": 12,
      fill: "var(--anim-text)",
    });
    lbl.textContent = String(tick);
    xTicksGroup.append(lbl);
  }

  const xAxisTitle = makeSvg("text", {
    x: (PLOT_X0 + PLOT_X1) / 2,
    y: VIEW_H - 12,
    "text-anchor": "middle",
    "font-size": 12,
    fill: "var(--anim-text-2)",
  });
  xAxisTitle.textContent = "Standart hata birimi (t veya z değeri)";

  // Grafik içi dinamik açıklama etiketleri
  const peakCallout = makeSvg("text", {
    x: xToSvg(0) + 12,
    y: yToSvg(0.4) + 4,
    "text-anchor": "start",
    "font-size": 11,
    "font-weight": "600",
    fill: "var(--anim-blue)",
  });
  peakCallout.textContent = "Normal tepe (0,399)";

  const tPeakDot = makeSvg("circle", {
    cx: xToSvg(0),
    cy: yToSvg(tPdf(0, currentDf)),
    r: 4.5,
    fill: "var(--anim-amber)",
    stroke: "var(--anim-bg)",
    "stroke-width": 1.5,
  });

  const tPeakLabel = makeSvg("text", {
    x: xToSvg(0) - 12,
    y: yToSvg(tPdf(0, currentDf)) + 4,
    "text-anchor": "end",
    "font-size": 11,
    "font-weight": "600",
    fill: "var(--anim-amber)",
  });

  const tailCallout = makeSvg("text", {
    x: xToSvg(tAbs + 0.35),
    y: PLOT_Y1 - 44,
    "text-anchor": "start",
    "font-size": 11,
    "font-weight": "600",
    fill: "var(--anim-amber)",
  });

  svg.append(
    gridGroup,
    normalLeftTail,
    normalRightTail,
    tLeftTail,
    tRightTail,
    leftCutLine,
    rightCutLine,
    leftCutLabel,
    rightCutLabel,
    normalCurve,
    tCurve,
    xAxis,
    xTicksGroup,
    xAxisTitle,
    peakCallout,
    tPeakDot,
    tPeakLabel,
    tailCallout
  );
  svgWrap.append(svg);

  // Denetim çubuğu (Geri / İleri / Sıfırla + sd kaydırıcısı + hızlı adım düğmeleri)
  const controls = makeEl("div", "t-ve-normal__controls");

  const btnGroup = makeEl("div", "t-ve-normal__btns");
  const prevBtn = makeEl("button", "t-ve-normal__btn", "Geri");
  prevBtn.type = "button";
  prevBtn.setAttribute("aria-label", "Serbestlik derecesini azalt");

  const nextBtn = makeEl("button", "t-ve-normal__btn", "İleri");
  nextBtn.type = "button";
  nextBtn.setAttribute("aria-label", "Serbestlik derecesini artır");

  const resetBtn = makeEl("button", "t-ve-normal__btn t-ve-normal__btn--ghost", "Sıfırla");
  resetBtn.type = "button";
  resetBtn.setAttribute("aria-label", "Başlangıç serbestlik derecesine sıfırla");

  btnGroup.append(prevBtn, nextBtn, resetBtn);

  const sliderWrap = makeEl("label", "t-ve-normal__slider-wrap");
  const sliderLabel = makeEl("span", "t-ve-normal__slider-label", "Serbestlik derecesi (sd):");
  const slider = makeEl("input", {
    type: "range",
    class: "t-ve-normal__slider",
    min: String(MIN_DF),
    max: String(MAX_DF),
    step: "1",
    value: String(currentDf),
    "aria-label": "Serbestlik derecesi kaydırıcısı (2 ile 50 arası)",
  });
  const sliderReadout = makeEl("span", "t-ve-normal__slider-value");
  sliderWrap.append(sliderLabel, slider, sliderReadout);

  const presetsWrap = makeEl("div", "t-ve-normal__presets");
  const presetsLabel = makeEl("span", "t-ve-normal__presets-label", "Hazır sd:");
  presetsWrap.append(presetsLabel);
  const presetBtns = new Map();
  for (const presetDf of STEP_DFS) {
    const pBtn = makeEl(
      "button",
      "t-ve-normal__preset-btn",
      presetDf === 24 ? "sd = 24 (n = 25)" : `sd = ${presetDf}`
    );
    pBtn.type = "button";
    pBtn.addEventListener("click", () => {
      currentDf = presetDf;
      render();
    });
    presetBtns.set(presetDf, pBtn);
    presetsWrap.append(pBtn);
  }

  controls.append(btnGroup, sliderWrap, presetsWrap);

  // Sayısal karşılaştırma kartları
  const cards = makeEl("div", "t-ve-normal__cards");

  const cardSample = makeEl("div", "t-ve-normal__card");
  const cardSampleTitle = makeEl("span", "t-ve-normal__card-label", "Serbestlik derecesi ve örneklem");
  const cardSampleVal = makeEl("strong", "t-ve-normal__card-value");
  const cardSampleSub = makeEl("span", "t-ve-normal__card-sub", "Tek örneklemde: sd = n − 1");
  cardSample.append(cardSampleTitle, cardSampleVal, cardSampleSub);

  const cardPT = makeEl("div", "t-ve-normal__card t-ve-normal__card--t");
  const cardPTTitle = makeEl(
    "span",
    "t-ve-normal__card-label",
    `t dağılımında p (|t| ≥ ${fmtNum(tAbs, 2)})`
  );
  const cardPTVal = makeEl("strong", "t-ve-normal__card-value");
  const cardPTSub = makeEl("span", "t-ve-normal__card-sub");
  cardPT.append(cardPTTitle, cardPTVal, cardPTSub);

  const cardPZ = makeEl("div", "t-ve-normal__card t-ve-normal__card--normal");
  const cardPZTitle = makeEl(
    "span",
    "t-ve-normal__card-label",
    `Normal dağılımda p (|z| ≥ ${fmtNum(tAbs, 2)})`
  );
  const cardPZVal = makeEl("strong", "t-ve-normal__card-value", `p = ${fmtNum(pZ, 3)}`);
  const cardPZSub = makeEl(
    "span",
    "t-ve-normal__card-sub",
    `İki kuyruk toplamı: %${fmtNum(pZ * 100, 1)} (sabit)`
  );
  cardPZ.append(cardPZTitle, cardPZVal, cardPZSub);

  cards.append(cardSample, cardPT, cardPZ);

  const statusNote = makeEl("p", "t-ve-normal__status");
  statusNote.setAttribute("aria-live", "polite");

  root.append(header, svgWrap, controls, cards, statusNote);
  div.replaceChildren(root);

  function render() {
    slider.value = String(currentDf);
    const nVal = currentDf + 1;
    sliderReadout.textContent = `sd = ${currentDf} (n = ${nVal})`;
    legTText.textContent = `t dağılımı (sd = ${currentDf}) — düz kalın çizgi`;

    // Eğri ve kuyruk dolgularını güncelle
    tCurve.setAttribute("d", buildCurvePath((x) => tPdf(x, currentDf), X_MIN, X_MAX));
    tLeftTail.setAttribute("d", buildTailAreaPath((x) => tPdf(x, currentDf), X_MIN, -tAbs));
    tRightTail.setAttribute("d", buildTailAreaPath((x) => tPdf(x, currentDf), tAbs, X_MAX));

    // Tepe noktası ve kuyruk etiketi
    const peakY = tPdf(0, currentDf);
    const peakSvgY = yToSvg(peakY);
    tPeakDot.setAttribute("cy", peakSvgY.toFixed(2));
    tPeakLabel.setAttribute("y", (peakSvgY + 14).toFixed(2));
    tPeakLabel.textContent = `t tepe (${fmtNum(peakY, 3)})`;

    const pT = twoTailedTP(tAbs, currentDf);
    const singleTailPct = fmtNum((pT / 2) * 100, 1);
    tailCallout.textContent = `Sağ kuyruk: %${singleTailPct} (normal: %${fmtNum((pZ / 2) * 100, 1)})`;

    // Kartları güncelle
    cardSampleVal.textContent = `sd = ${currentDf} · n = ${nVal}`;
    cardPTVal.textContent = `p = ${fmtNum(pT, 3)}`;
    const extraPct = fmtNum((pT - pZ) * 100, 1);
    cardPTSub.textContent = `İki kuyruk toplamı: %${fmtNum(pT * 100, 1)} (+%${extraPct} fark)`;

    // Düğme durumları
    prevBtn.disabled = currentDf <= MIN_DF;
    nextBtn.disabled = currentDf >= MAX_DF;
    for (const [presetDf, btn] of presetBtns.entries()) {
      if (presetDf === currentDf) {
        btn.classList.add("t-ve-normal__preset-btn--active");
        btn.setAttribute("aria-pressed", "true");
      } else {
        btn.classList.remove("t-ve-normal__preset-btn--active");
        btn.setAttribute("aria-pressed", "false");
      }
    }

    statusNote.textContent = describeState(currentDf, tAbs, pT, pZ);
  }

  slider.addEventListener("input", () => {
    const val = Number.parseInt(slider.value, 10);
    if (Number.isFinite(val)) {
      currentDf = Math.max(MIN_DF, Math.min(MAX_DF, val));
      render();
    }
  });

  prevBtn.addEventListener("click", () => {
    const prevPreset = [...STEP_DFS].reverse().find((d) => d < currentDf);
    currentDf = prevPreset ?? Math.max(MIN_DF, currentDf - 1);
    render();
  });

  nextBtn.addEventListener("click", () => {
    const nextPreset = STEP_DFS.find((d) => d > currentDf);
    currentDf = nextPreset ?? Math.min(MAX_DF, currentDf + 1);
    render();
  });

  resetBtn.addEventListener("click", () => {
    currentDf = initialDf;
    render();
  });

  render();
}
