import { makeEl, makeSvg } from "../core/dom.js";
// z-ve-alan.js — Standart normal eğride z puanı ve eğri altında (solunda) kalan alan/oran
//
// Kullanım:
//   <div data-anim="custom" data-src="z-ve-alan.js" data-css="z-ve-alan.css"></div>
//
// Öznitelikler (isteğe bağlı):
//   data-z     : başlangıç z değeri (-3 ile 3 arasında sayı, varsayılan 1.5)
//   data-label : başlık metni

const Z_MIN = -3;
const Z_MAX = 3;
const Z_STEP = 0.1;
const NORM_MEAN = 40;
const NORM_SD = 8;

const VIEW_W = 680;
const VIEW_H = 290;
const PLOT_X0 = 56;
const PLOT_X1 = 624;
const BASE_Y = 205;
const PEAK_H = 148;
const CURVE_SAMPLES = 120;

const PRESETS = [
  { z: -2, label: "z = −2", note: "Ortalamanın 2 SD altı: altında kalan oran yaklaşık %2,3." },
  { z: -1, label: "z = −1", note: "Ortalamanın 1 SD altı: altında kalan oran yaklaşık %15,9 (≈ %16)." },
  { z: 0, label: "z = 0 (%50)", note: "Tam ortalama (M = 40): simetri nedeniyle eğrinin tam yarısı (%50) solda kalır." },
  { z: 1, label: "z = 1 (≈ %84)", note: "Ortalamanın 1 SD üstü: %50 + %34 = yaklaşık %84,1 altında kalır." },
  { z: 1.5, label: "z = 1,5 (Danışan: ≈ %93)", note: "Danışan örneği (x = 52, M = 40, SD = 8): norm grubunun yaklaşık %93,3'ü daha düşük puan almıştır." },
  { z: 2, label: "z = 2 (≈ %98)", note: "Ortalamanın 2 SD üstü: altında kalan oran yaklaşık %97,7 (≈ %98), sağ kuyrukta yaklaşık %2,3 kalır." },
];

function stdNormalPdf(z) {
  return Math.exp(-0.5 * z * z) / Math.sqrt(2 * Math.PI);
}

const PDF_PEAK = stdNormalPdf(0);

// Abramowitz & Stegun 7.1.26 yaklaşımıyla standart normal birikimli dağılım Φ(z)
function stdNormalCdf(z) {
  if (z < -8) return 0;
  if (z > 8) return 1;
  const sign = z < 0 ? -1 : 1;
  const x = Math.abs(z) / Math.SQRT2;
  const t = 1 / (1 + 0.3275911 * x);
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const poly = ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t;
  const erf = 1 - poly * Math.exp(-x * x);
  return 0.5 * (1 + sign * erf);
}

function xOfZ(z) {
  const ratio = (z - Z_MIN) / (Z_MAX - Z_MIN);
  return PLOT_X0 + ratio * (PLOT_X1 - PLOT_X0);
}

function yOfZ(z) {
  const densityRatio = stdNormalPdf(z) / PDF_PEAK;
  return BASE_Y - densityRatio * PEAK_H;
}

function formatTr(value, decimals = 1) {
  const rounded = Math.abs(value) < 1e-9 ? 0 : value;
  const sign = rounded < 0 ? "−" : "";
  return sign + Math.abs(rounded).toFixed(decimals).replace(".", ",");
}

function formatSignedZ(z) {
  if (Math.abs(z) < 1e-9) return "0,0";
  const sign = z > 0 ? "+" : "−";
  return `${sign}${Math.abs(z).toFixed(1).replace(".", ",")}`;
}

function buildCurvePath(zStart, zEnd, closeToBaseline) {
  const steps = Math.max(16, Math.round(((zEnd - zStart) / (Z_MAX - Z_MIN)) * CURVE_SAMPLES));
  const parts = [];
  if (closeToBaseline) {
    parts.push(`M ${xOfZ(zStart).toFixed(2)} ${BASE_Y.toFixed(2)}`);
    for (let i = 0; i <= steps; i++) {
      const z = zStart + ((zEnd - zStart) * i) / steps;
      parts.push(`L ${xOfZ(z).toFixed(2)} ${yOfZ(z).toFixed(2)}`);
    }
    parts.push(`L ${xOfZ(zEnd).toFixed(2)} ${BASE_Y.toFixed(2)} Z`);
  } else {
    for (let i = 0; i <= steps; i++) {
      const z = zStart + ((zEnd - zStart) * i) / steps;
      const cmd = i === 0 ? "M" : "L";
      parts.push(`${cmd} ${xOfZ(z).toFixed(2)} ${yOfZ(z).toFixed(2)}`);
    }
  }
  return parts.join(" ");
}

function describeZState(z) {
  const match = PRESETS.find((p) => Math.abs(p.z - z) < 0.04);
  if (match) return match.note;
  if (z < 0) {
    return `z negatif olduğu için değer ortalamanın ${formatTr(Math.abs(z), 1)} standart sapma altındadır; eğrinin yarısından azı solda kalır.`;
  }
  return `z pozitif olduğu için değer ortalamanın ${formatTr(z, 1)} standart sapma üstündedir; eğrinin yarısından fazlası solda kalır.`;
}

export function mount(div, dataset = div.dataset) {
  const rawZ = dataset.z !== undefined ? String(dataset.z).replace(",", ".") : "1.5";
  const initialZ = Number.parseFloat(rawZ);
  if (!Number.isFinite(initialZ) || initialZ < Z_MIN || initialZ > Z_MAX) {
    div.replaceChildren(
      makeEl(
        "p",
        "z-ve-alan__uyari",
        `Geçersiz data-z: "${dataset.z}". −3 ile 3 arasında bir sayı olmalı.`
      )
    );
    console.warn("[z-ve-alan] geçersiz data-z:", dataset.z);
    return;
  }

  let currentZ = Math.round(initialZ * 10) / 10;

  const root = makeEl("section", "z-ve-alan");
  root.setAttribute("aria-label", "Standart normal dağılımda z puanı ve eğri altındaki alan animasyonu");

  const header = makeEl("header", "z-ve-alan__baslik-kutusu");
  const titleText = (dataset.label || "Standart Normal Eğri: z Puanı ve Altında Kalan Oran").trim();
  const titleEl = makeEl("h3", "z-ve-alan__baslik", titleText);
  const subtitleEl = makeEl(
    "p",
    "z-ve-alan__altbaslik",
    "Kaydırıcıyı hareket ettirin: z büyüdükçe eğrinin solunda kalan taralı alan (daha düşük puan alanların oranı) artar."
  );
  header.append(titleEl, subtitleEl);

  // Özet kartları
  const metricsRow = makeEl("div", "z-ve-alan__ozet-satiri");

  const cardZ = makeEl("div", "z-ve-alan__kart");
  const cardZLabel = makeEl("span", "z-ve-alan__kart-etiket", "Seçilen z Puanı");
  const cardZValue = makeEl("strong", "z-ve-alan__kart-deger z-ve-alan__kart-deger--vurgu");
  const cardZSub = makeEl("span", "z-ve-alan__kart-aciklama");
  cardZ.append(cardZLabel, cardZValue, cardZSub);

  const cardLeft = makeEl("div", "z-ve-alan__kart z-ve-alan__kart--sol");
  const cardLeftLabel = makeEl("span", "z-ve-alan__kart-etiket", "Altında (Solunda) Kalan Oran");
  const cardLeftValue = makeEl("strong", "z-ve-alan__kart-deger z-ve-alan__kart-deger--sol");
  const cardLeftSub = makeEl("span", "z-ve-alan__kart-aciklama");
  cardLeft.append(cardLeftLabel, cardLeftValue, cardLeftSub);

  const cardRight = makeEl("div", "z-ve-alan__kart");
  const cardRightLabel = makeEl("span", "z-ve-alan__kart-etiket", "Üstünde (Sağında) Kalan Oran");
  const cardRightValue = makeEl("strong", "z-ve-alan__kart-deger");
  const cardRightSub = makeEl("span", "z-ve-alan__kart-aciklama");
  cardRight.append(cardRightLabel, cardRightValue, cardRightSub);

  metricsRow.append(cardZ, cardLeft, cardRight);

  // SVG sahnesi
  const svgWrap = makeEl("div", "z-ve-alan__sahne");
  const svg = makeSvg("svg", {
    viewBox: `0 0 ${VIEW_W} ${VIEW_H}`,
    role: "img",
    "aria-label": "Standart normal dağılım eğrisi ve seçilen z değerinin solunda kalan taralı alan",
  });
  svg.classList.add("z-ve-alan__svg");

  // Sağda kalan (taralı olmayan) toplam alan dolgusu
  const fullAreaPath = makeSvg("path", {
    d: buildCurvePath(Z_MIN, Z_MAX, true),
    fill: "var(--anim-panel)",
  });

  // Solda kalan gölgeli alan
  const shadedAreaPath = makeSvg("path", {
    d: buildCurvePath(Z_MIN, currentZ, true),
    fill: "color-mix(in srgb, var(--anim-blue) 28%, transparent)",
  });

  // Ortalama (z = 0) dikey referans çizgisi
  const meanX = xOfZ(0);
  const meanLine = makeSvg("line", {
    x1: meanX,
    y1: yOfZ(0),
    x2: meanX,
    y2: BASE_Y,
    stroke: "var(--anim-muted-2)",
    "stroke-width": 1.5,
    "stroke-dasharray": "4 4",
  });

  // Tam normal eğri çizgisi
  const curveOutline = makeSvg("path", {
    d: buildCurvePath(Z_MIN, Z_MAX, false),
    fill: "none",
    stroke: "var(--anim-blue-strong)",
    "stroke-width": 3,
    "stroke-linecap": "round",
  });

  // Taban ekseni
  const axisLine = makeSvg("line", {
    x1: PLOT_X0 - 10,
    y1: BASE_Y,
    x2: PLOT_X1 + 10,
    y2: BASE_Y,
    stroke: "var(--anim-border-strong)",
    "stroke-width": 2,
  });

  // Eksen kılavuzları (-3 .. +3)
  const ticksGroup = makeSvg("g", {});
  for (let tickZ = -3; tickZ <= 3; tickZ += 1) {
    const tx = xOfZ(tickZ);
    const tickLine = makeSvg("line", {
      x1: tx,
      y1: BASE_Y,
      x2: tx,
      y2: BASE_Y + 7,
      stroke: "var(--anim-border-strong)",
      "stroke-width": tickZ === 0 ? 2.2 : 1.5,
    });

    const zLabel = makeSvg("text", {
      x: tx,
      y: BASE_Y + 24,
      "text-anchor": "middle",
      "font-size": "13",
      "font-weight": tickZ === 0 ? "700" : "600",
      fill: tickZ === 0 ? "var(--anim-strong)" : "var(--anim-text)",
    });
    zLabel.textContent = tickZ === 0 ? "z = 0" : `z = ${tickZ > 0 ? `+${tickZ}` : `−${Math.abs(tickZ)}`}`;

    const rawScore = NORM_MEAN + tickZ * NORM_SD;
    const rawLabel = makeSvg("text", {
      x: tx,
      y: BASE_Y + 42,
      "text-anchor": "middle",
      "font-size": "11",
      fill: "var(--anim-muted)",
    });
    rawLabel.textContent = `(${rawScore})`;

    ticksGroup.append(tickLine, zLabel, rawLabel);
  }

  const axisCaption = makeSvg("text", {
    x: (PLOT_X0 + PLOT_X1) / 2,
    y: BASE_Y + 66,
    "text-anchor": "middle",
    "font-size": "12",
    fill: "var(--anim-muted)",
  });
  axisCaption.textContent = "Standart sapma birimi (z) ve parantez içinde örnek kaygı puanı karşılığı (M = 40, SD = 8)";

  // Seçilen z dikey sınır çizgisi ve tepe noktası
  const markerLine = makeSvg("line", {
    x1: xOfZ(currentZ),
    y1: 36,
    x2: xOfZ(currentZ),
    y2: BASE_Y,
    stroke: "var(--anim-amber)",
    "stroke-width": 2.5,
    "stroke-dasharray": "6 3",
  });

  const markerDot = makeSvg("circle", {
    cx: xOfZ(currentZ),
    cy: yOfZ(currentZ),
    r: 6,
    fill: "var(--anim-amber)",
    stroke: "var(--anim-bg)",
    "stroke-width": 2,
  });

  // Üst bilgi rozeti (SVG içinde z ve altında kalan oran)
  const badgeGroup = makeSvg("g", {});
  const badgeRect = makeSvg("rect", {
    x: 0,
    y: 10,
    width: 236,
    height: 28,
    rx: 6,
    fill: "var(--anim-blue-bg)",
    stroke: "var(--anim-blue)",
    "stroke-width": 1.2,
  });
  const badgeText = makeSvg("text", {
    x: 118,
    y: 29,
    "text-anchor": "middle",
    "font-size": "13",
    "font-weight": "700",
    fill: "var(--anim-strong)",
  });
  badgeGroup.append(badgeRect, badgeText);

  // Gölgeli alan içi oran etiketi
  const areaCallout = makeSvg("text", {
    x: xOfZ(-0.4),
    y: BASE_Y - 46,
    "text-anchor": "middle",
    "font-size": "15",
    "font-weight": "700",
    fill: "var(--anim-blue-strong)",
  });

  const areaSubCallout = makeSvg("text", {
    x: xOfZ(-0.4),
    y: BASE_Y - 26,
    "text-anchor": "middle",
    "font-size": "12",
    fill: "var(--anim-text)",
  });
  areaSubCallout.textContent = "솔da (altında) kalan alan";

  svg.append(
    fullAreaPath,
    shadedAreaPath,
    meanLine,
    curveOutline,
    axisLine,
    ticksGroup,
    axisCaption,
    areaCallout,
    areaSubCallout,
    markerLine,
    markerDot,
    badgeGroup
  );
  svgWrap.append(svg);

  // Denetim çubuğu: Geri / Kaydırıcı / İleri / Sıfırla
  const controlsBar = makeEl("div", "z-ve-alan__denetimler");

  const stepBackBtn = makeEl("button", "z-ve-alan__dugme", "Geri");
  stepBackBtn.type = "button";
  stepBackBtn.setAttribute("aria-label", "z değerini 0,1 azalt");

  const sliderLabel = makeEl("label", "z-ve-alan__kaydirici-etiket");
  const sliderTitle = makeEl("span", "z-ve-alan__kaydirici-metin", "z kaydırıcısı (−3,0 … +3,0):");
  const sliderInput = makeEl("input", {
    type: "range",
    min: String(Z_MIN),
    max: String(Z_MAX),
    step: String(Z_STEP),
    value: String(currentZ),
    "aria-label": "z puanı seçici",
  });
  sliderInput.className = "z-ve-alan__kaydirici";
  sliderLabel.append(sliderTitle, sliderInput);

  const stepFwdBtn = makeEl("button", "z-ve-alan__dugme", "İleri");
  stepFwdBtn.type = "button";
  stepFwdBtn.setAttribute("aria-label", "z değerini 0,1 artır");

  const resetBtn = makeEl("button", "z-ve-alan__dugme z-ve-alan__dugme--ikincil", "Sıfırla");
  resetBtn.type = "button";
  resetBtn.setAttribute("aria-label", "Başlangıç z değerine sıfırla");

  controlsBar.append(stepBackBtn, sliderLabel, stepFwdBtn, resetBtn);

  // Hızlı seçim düğmeleri (metindeki kilit z değerleri)
  const presetsBar = makeEl("div", "z-ve-alan__hazir-cubuk");
  const presetsLabel = makeEl("span", "z-ve-alan__hazir-baslik", "Kilit noktalar:");
  presetsBar.append(presetsLabel);

  const presetButtons = PRESETS.map((item) => {
    const btn = makeEl("button", "z-ve-alan__hazir-dugme", item.label);
    btn.type = "button";
    btn.addEventListener("click", () => {
      setZ(item.z);
    });
    presetsBar.append(btn);
    return { z: item.z, btn };
  });

  // Açıklama kutusu
  const noteBox = makeEl("p", "z-ve-alan__yorum");

  function render() {
    const leftProp = stdNormalCdf(currentZ);
    const leftPct = leftProp * 100;
    const rightPct = (1 - leftProp) * 100;
    const rawExample = NORM_MEAN + currentZ * NORM_SD;

    // Kartları güncelle
    cardZValue.textContent = `z = ${formatSignedZ(currentZ)}`;
    cardZSub.textContent = `Örnek puan: x = ${formatTr(rawExample, 1)} (M = 40, SD = 8)`;

    cardLeftValue.textContent = `%${formatTr(leftPct, 1)}`;
    cardLeftSub.textContent = `Alan = ${formatTr(leftProp, 3)} (daha düşük puan alanlar)`;

    cardRightValue.textContent = `%${formatTr(rightPct, 1)}`;
    cardRightSub.textContent = `Alan = ${formatTr(1 - leftProp, 3)} (daha yüksek puan alanlar)`;

    // Eğri altı taralı alanı ve işaretçiyi güncelle
    shadedAreaPath.setAttribute("d", buildCurvePath(Z_MIN, currentZ, true));

    const mx = xOfZ(currentZ);
    const my = yOfZ(currentZ);
    markerLine.setAttribute("x1", mx.toFixed(2));
    markerLine.setAttribute("x2", mx.toFixed(2));
    markerDot.setAttribute("cx", mx.toFixed(2));
    markerDot.setAttribute("cy", my.toFixed(2));

    // Üst rozeti sınırlar içinde tutarak konumlandır
    const badgeW = 248;
    const badgeX = Math.max(PLOT_X0, Math.min(PLOT_X1 - badgeW, mx - badgeW / 2));
    badgeRect.setAttribute("x", badgeX.toFixed(2));
    badgeRect.setAttribute("width", String(badgeW));
    badgeText.setAttribute("x", (badgeX + badgeW / 2).toFixed(2));
    badgeText.textContent = `z = ${formatSignedZ(currentZ)} → altında kalan oran: %${formatTr(leftPct, 1)}`;

    // Gölgeli alan içi etiketi uygun merkeze yerleştir
    const labelZ = Math.max(-1.6, Math.min(0.35, (Z_MIN + currentZ) * 0.42));
    const lx = xOfZ(labelZ);
    areaCallout.setAttribute("x", lx.toFixed(2));
    areaCallout.textContent = `%${formatTr(leftPct, 1)}`;
    areaSubCallout.setAttribute("x", lx.toFixed(2));
    areaSubCallout.textContent =
      currentZ < -1.2 ? "Sol kuyruk alanı" : "Altında kalan oran (sol alan)";

    // Düğme ve kaydırıcı durumları
    sliderInput.value = String(currentZ);
    stepBackBtn.disabled = currentZ <= Z_MIN + 1e-6;
    stepFwdBtn.disabled = currentZ >= Z_MAX - 1e-6;

    for (const item of presetButtons) {
      const active = Math.abs(item.z - currentZ) < 0.04;
      item.btn.classList.toggle("z-ve-alan__hazir-dugme--aktif", active);
      item.btn.setAttribute("aria-pressed", active ? "true" : "false");
    }

    noteBox.textContent = describeZState(currentZ);
  }

  function setZ(nextZ) {
    const clamped = Math.max(Z_MIN, Math.min(Z_MAX, Math.round(nextZ * 10) / 10));
    currentZ = clamped;
    render();
  }

  sliderInput.addEventListener("input", () => {
    const val = Number.parseFloat(sliderInput.value);
    if (Number.isFinite(val)) {
      setZ(val);
    }
  });

  stepBackBtn.addEventListener("click", () => {
    setZ(currentZ - Z_STEP);
  });

  stepFwdBtn.addEventListener("click", () => {
    setZ(currentZ + Z_STEP);
  });

  resetBtn.addEventListener("click", () => {
    setZ(Math.round(initialZ * 10) / 10);
  });

  root.append(header, metricsRow, svgWrap, controlsBar, presetsBar, noteBox);
  render();
  div.replaceChildren(root);
}
