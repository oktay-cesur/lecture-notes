import { makeEl, makeSvg } from "../core/dom.js";
// mean-seesaw.js — Ortalama bir denge noktasıdır: sayı doğrusu tahterevallisi
//
// Kullanım:
//   <div data-anim="custom" data-src="mean-seesaw.js" data-css="mean-seesaw.css"></div>
//
// Öznitelikler (isteğe bağlı):
//   data-values : virgülle ayrılmış başlangıç değerleri (varsayılan "6,7,5,8,7,6,7")
//   data-label  : başlık metni

const DEFAULT_VALUES = [6, 7, 5, 8, 7, 6, 7];
const MIN_SCALE = 4;
const MAX_SCALE = 12;
const VIEW_W = 680;
const VIEW_H = 300;
const BEAM_X0 = 70;
const BEAM_X1 = 610;
const PIVOT_Y = 195;
const SNAP_EPS = 0.035;

function parseValues(raw) {
  if (!raw) return DEFAULT_VALUES.slice();
  const parts = String(raw)
    .split(",")
    .map((s) => Number.parseFloat(s.trim()));
  if (parts.length < 2 || parts.length > 15) return null;
  for (const v of parts) {
    if (!Number.isFinite(v) || v < MIN_SCALE || v > MAX_SCALE) return null;
  }
  return parts;
}

function computeBalance(values, fulcrum) {
  const n = values.length;
  const sum = values.reduce((acc, v) => acc + v, 0);
  const meanVal = sum / n;

  let leftDist = 0;
  let rightDist = 0;
  for (const v of values) {
    if (v < fulcrum - 1e-6) {
      leftDist += fulcrum - v;
    } else if (v > fulcrum + 1e-6) {
      rightDist += v - fulcrum;
    }
  }

  const netTorque = rightDist - leftDist;
  const isBalanced = Math.abs(fulcrum - meanVal) <= 0.015;
  const maxTorque = Math.max(4, n * 2.2);
  const rawAngle = (netTorque / maxTorque) * 14;
  const angleDeg = isBalanced ? 0 : Math.max(-14, Math.min(14, rawAngle));

  const stacks = new Map();
  const sorted = values.slice().sort((a, b) => a - b);
  const items = sorted.map((v, idx) => {
    const key = v.toFixed(2);
    const tier = stacks.get(key) || 0;
    stacks.set(key, tier + 1);
    return { value: v, tier, idx };
  });

  return {
    n,
    sum,
    meanVal,
    fulcrum,
    leftDist,
    rightDist,
    netTorque,
    isBalanced,
    angleDeg,
    items,
  };
}

function fmt(num, digits = 2) {
  return num.toFixed(digits).replace(".", ",");
}

function scaleX(val) {
  return BEAM_X0 + ((val - MIN_SCALE) / (MAX_SCALE - MIN_SCALE)) * (BEAM_X1 - BEAM_X0);
}

function unscaleX(px) {
  const ratio = (px - BEAM_X0) / (BEAM_X1 - BEAM_X0);
  const clamped = Math.max(0, Math.min(1, ratio));
  return MIN_SCALE + clamped * (MAX_SCALE - MIN_SCALE);
}

export function mount(div, dataset = div.dataset) {
  const ds = dataset || div.dataset;
  const initialValues = parseValues(ds.values);
  if (!initialValues) {
    div.replaceChildren(
      makeEl(
        "p",
        "mean-seesaw__uyari",
        `Geçersiz data-values: "${ds.values}". ${MIN_SCALE} ile ${MAX_SCALE} arasında 2–15 sayı girilmelidir.`
      )
    );
    console.warn("[mean-seesaw] geçersiz data-values:", ds.values);
    return;
  }

  let values = initialValues.slice();
  const baseMean = computeBalance(initialValues, 0).meanVal;
  let fulcrum = baseMean;
  let dragging = false;

  const root = makeEl("section", "mean-seesaw");
  root.setAttribute("aria-label", "Ortalama denge noktası ve tahterevalli animasyonu");

  const header = makeEl("header", "mean-seesaw__header");
  const titleText = (ds.label || "Ortalama Bir Denge Noktasıdır").trim();
  const titleEl = makeEl("h4", "mean-seesaw__title", titleText);
  const subtitleEl = makeEl(
    "p",
    "mean-seesaw__subtitle",
    "Desteği sürükleyin veya sağ uca yeni ağırlık ekleyerek denge noktasının (x̄) nasıl kaydığını gözlemleyin."
  );
  header.append(titleEl, subtitleEl);

  const metricsRow = makeEl("div", "mean-seesaw__metrics");
  const cardLeft = makeEl("div", "mean-seesaw__card mean-seesaw__card--left");
  const cardLeftTitle = makeEl("span", "mean-seesaw__card-label", "Sol Toplam Uzaklık");
  const cardLeftValue = makeEl("strong", "mean-seesaw__card-value");
  cardLeft.append(cardLeftTitle, cardLeftValue);

  const cardCenter = makeEl("div", "mean-seesaw__card mean-seesaw__card--center");
  const cardCenterTitle = makeEl("span", "mean-seesaw__card-label", "Destek Noktası / Ortalama (x̄)");
  const cardCenterValue = makeEl("strong", "mean-seesaw__card-value");
  cardCenter.append(cardCenterTitle, cardCenterValue);

  const cardRight = makeEl("div", "mean-seesaw__card mean-seesaw__card--right");
  const cardRightTitle = makeEl("span", "mean-seesaw__card-label", "Sağ Toplam Uzaklık");
  const cardRightValue = makeEl("strong", "mean-seesaw__card-value");
  cardRight.append(cardRightTitle, cardRightValue);

  metricsRow.append(cardLeft, cardCenter, cardRight);

  const svg = makeSvg("svg", {
    class: "mean-seesaw__svg",
    viewBox: `0 0 ${VIEW_W} ${VIEW_H}`,
    role: "img",
    "aria-label": "Sayı doğrusu üzerinde ağırlıklar ve hareketli destek noktası",
  });

  const statusBanner = makeEl("p", "mean-seesaw__status");
  statusBanner.setAttribute("aria-live", "polite");

  const controls = makeEl("div", "mean-seesaw__controls");

  const sliderWrap = makeEl("label", "mean-seesaw__slider-wrap");
  const sliderLabel = makeEl("span", "mean-seesaw__slider-text", "Destek konumu:");
  const slider = makeEl("input", {
    type: "range",
    class: "mean-seesaw__slider",
    min: String(MIN_SCALE),
    max: String(MAX_SCALE),
    step: "0.01",
    value: String(fulcrum),
    "aria-label": "Destek noktası konumu (saat)",
  });
  const sliderReadout = makeEl("span", "mean-seesaw__slider-readout");
  sliderWrap.append(sliderLabel, slider, sliderReadout);

  const btnGroup = makeEl("div", "mean-seesaw__buttons");

  const btnBalance = makeEl("button", { type: "button", class: "mean-seesaw__btn mean-seesaw__btn--primary" }, "Dengeye Getir (x̄)");
  const btnAdd9 = makeEl("button", { type: "button", class: "mean-seesaw__btn" }, "+ 9 Saat Ekle");
  const btnAdd12 = makeEl("button", { type: "button", class: "mean-seesaw__btn" }, "+ 12 Saat (Uzak) Ekle");
  const btnReset = makeEl("button", { type: "button", class: "mean-seesaw__btn mean-seesaw__btn--ghost" }, "Sıfırla");

  btnGroup.append(btnBalance, btnAdd9, btnAdd12, btnReset);
  controls.append(sliderWrap, btnGroup);

  root.append(header, metricsRow, svg, statusBanner, controls);
  div.replaceChildren(root);

  function setFulcrum(nextVal, snapToMean = true) {
    const currentMean = values.reduce((a, b) => a + b, 0) / values.length;
    let clamped = Math.max(MIN_SCALE, Math.min(MAX_SCALE, nextVal));
    if (snapToMean && Math.abs(clamped - currentMean) <= SNAP_EPS) {
      clamped = currentMean;
    }
    fulcrum = clamped;
    slider.value = String(fulcrum);
    render();
  }

  function render() {
    const state = computeBalance(values, fulcrum);
    const pivotX = scaleX(state.fulcrum);
    const meanX = scaleX(state.meanVal);
    const baseMeanX = scaleX(baseMean);

    cardLeftValue.textContent = `${fmt(state.leftDist)} saat`;
    cardCenterValue.textContent = `Destek: ${fmt(state.fulcrum)} · x̄ = ${fmt(state.meanVal)} (${state.n} kişi)`;
    cardRightValue.textContent = `${fmt(state.rightDist)} saat`;
    sliderReadout.textContent = `${fmt(state.fulcrum)} sa.`;

    const extraCount = values.length - initialValues.length;
    btnAdd9.disabled = extraCount >= 3;
    btnAdd12.disabled = extraCount >= 3;

    if (state.isBalanced) {
      statusBanner.className = "mean-seesaw__status mean-seesaw__status--balanced";
      if (extraCount > 0) {
        statusBanner.textContent = `Dengede: Sağ uca eklenen değer denge noktasını ${fmt(baseMean)} saatten ${fmt(state.meanVal)} saate çekti. Sol ve sağ toplam uzaklık eşit (${fmt(state.leftDist)} = ${fmt(state.rightDist)}).`;
      } else {
        statusBanner.textContent = `Dengede: Destek tam ortalamada (x̄ = ${fmt(state.meanVal)} saat). Sol toplam uzaklık (${fmt(state.leftDist)}) ile sağ toplam uzaklık (${fmt(state.rightDist)}) birbirine eşittir.`;
      }
    } else if (state.netTorque > 0) {
      statusBanner.className = "mean-seesaw__status mean-seesaw__status--tilted";
      statusBanner.textContent = `Sağa eğimli: Sağdaki uzaklıkların toplamı (${fmt(state.rightDist)} saat) soldakilerden (${fmt(state.leftDist)} saat) büyük. Denge noktası x̄ = ${fmt(state.meanVal)} saatindedir.`;
    } else {
      statusBanner.className = "mean-seesaw__status mean-seesaw__status--tilted";
      statusBanner.textContent = `Sola eğimli: Soldaki uzaklıkların toplamı (${fmt(state.leftDist)} saat) sağdakilerden (${fmt(state.rightDist)} saat) büyük. Denge noktası x̄ = ${fmt(state.meanVal)} saatindedir.`;
    }

    const nodes = [];

    const groundLine = makeSvg("line", {
      x1: String(BEAM_X0 - 20),
      y1: String(PIVOT_Y + 58),
      x2: String(BEAM_X1 + 20),
      y2: String(PIVOT_Y + 58),
      stroke: "var(--anim-border-strong)",
      "stroke-width": "2",
    });
    nodes.push(groundLine);

    if (Math.abs(state.meanVal - baseMean) > 0.02) {
      const oldMeanLine = makeSvg("line", {
        x1: String(baseMeanX),
        y1: "36",
        x2: String(baseMeanX),
        y2: String(PIVOT_Y + 52),
        stroke: "var(--anim-muted)",
        "stroke-width": "1.5",
        "stroke-dasharray": "3 4",
      });
      const oldMeanLabel = makeSvg("text", {
        x: String(baseMeanX),
        y: "28",
        "text-anchor": "middle",
        "font-size": "11",
        fill: "var(--anim-muted)",
      });
      oldMeanLabel.textContent = `İlk x̄ = ${fmt(baseMean)}`;

      const shiftArrow = makeSvg("line", {
        x1: String(baseMeanX + 4),
        y1: "46",
        x2: String(meanX - 4),
        y2: "46",
        stroke: "var(--anim-amber)",
        "stroke-width": "2.5",
      });
      const shiftText = makeSvg("text", {
        x: String((baseMeanX + meanX) / 2),
        y: "41",
        "text-anchor": "middle",
        "font-size": "11",
        "font-weight": "700",
        fill: "var(--anim-amber)",
      });
      shiftText.textContent = "Denge sağa kaydı →";

      nodes.push(oldMeanLine, oldMeanLabel, shiftArrow, shiftText);
    }

    const meanGuide = makeSvg("line", {
      x1: String(meanX),
      y1: "54",
      x2: String(meanX),
      y2: String(PIVOT_Y + 52),
      stroke: "var(--anim-green)",
      "stroke-width": "2",
      "stroke-dasharray": "5 4",
    });
    const meanBadge = makeSvg("rect", {
      x: String(meanX - 56),
      y: "50",
      width: "112",
      height: "22",
      rx: "6",
      fill: "var(--anim-surface)",
      stroke: "var(--anim-green)",
      "stroke-width": "1.5",
    });
    const meanText = makeSvg("text", {
      x: String(meanX),
      y: "65",
      "text-anchor": "middle",
      "font-size": "11",
      "font-weight": "700",
      fill: "var(--anim-strong)",
    });
    meanText.textContent = `Ortalama x̄ = ${fmt(state.meanVal)}`;
    nodes.push(meanGuide, meanBadge, meanText);

    const beamGroup = makeSvg("g", {
      transform: `rotate(${state.angleDeg.toFixed(2)} ${pivotX.toFixed(1)} ${PIVOT_Y})`,
    });

    const beamBar = makeSvg("rect", {
      x: String(BEAM_X0 - 12),
      y: String(PIVOT_Y - 6),
      width: String(BEAM_X1 - BEAM_X0 + 24),
      height: "10",
      rx: "5",
      fill: state.isBalanced ? "var(--anim-teal)" : "var(--anim-blue)",
    });
    beamGroup.append(beamBar);

    for (let tick = MIN_SCALE; tick <= MAX_SCALE; tick++) {
      const tx = scaleX(tick);
      const tickLine = makeSvg("line", {
        x1: String(tx),
        y1: String(PIVOT_Y + 4),
        x2: String(tx),
        y2: String(PIVOT_Y + 12),
        stroke: "var(--anim-strong)",
        "stroke-width": "1.5",
      });
      const tickLabel = makeSvg("text", {
        x: String(tx),
        y: String(PIVOT_Y + 26),
        "text-anchor": "middle",
        "font-size": "12",
        "font-weight": "600",
        fill: "var(--anim-text)",
      });
      tickLabel.textContent = String(tick);
      beamGroup.append(tickLine, tickLabel);
    }

    const boxSize = 24;
    for (const item of state.items) {
      const cx = scaleX(item.value);
      const cy = PIVOT_Y - 18 - item.tier * (boxSize + 3);
      const isAdded = item.value > 8;
      const isLeft = item.value < state.fulcrum - 1e-6;
      const isRight = item.value > state.fulcrum + 1e-6;

      let fillToken = "var(--anim-blue-strong)";
      if (isAdded) {
        fillToken = "var(--anim-amber)";
      } else if (isLeft) {
        fillToken = "var(--anim-blue-strong)";
      } else if (isRight) {
        fillToken = "var(--anim-purple)";
      }

      const rect = makeSvg("rect", {
        x: String(cx - boxSize / 2),
        y: String(cy - boxSize / 2),
        width: String(boxSize),
        height: String(boxSize),
        rx: isAdded ? "12" : "5",
        fill: fillToken,
        stroke: "var(--anim-bg)",
        "stroke-width": "1.5",
      });

      const label = makeSvg("text", {
        x: String(cx),
        y: String(cy + 4),
        "text-anchor": "middle",
        "font-size": "11",
        "font-weight": "700",
        fill: "var(--anim-on-accent)",
      });
      label.textContent = String(item.value);

      beamGroup.append(rect, label);
    }

    nodes.push(beamGroup);

    const pivotGroup = makeSvg("g", {
      class: "mean-seesaw__pivot",
    });

    const trianglePts = `${pivotX.toFixed(1)},${PIVOT_Y + 4} ${(pivotX - 24).toFixed(1)},${PIVOT_Y + 56} ${(pivotX + 24).toFixed(1)},${PIVOT_Y + 56}`;
    const pivotTri = makeSvg("polygon", {
      points: trianglePts,
      fill: state.isBalanced ? "var(--anim-green)" : "var(--anim-amber)",
      stroke: "var(--anim-strong)",
      "stroke-width": "2",
    });

    const pivotPin = makeSvg("circle", {
      cx: String(pivotX),
      cy: String(PIVOT_Y + 4),
      r: "5",
      fill: "var(--anim-strong)",
    });

    const pivotLabel = makeSvg("text", {
      x: String(pivotX),
      y: String(PIVOT_Y + 76),
      "text-anchor": "middle",
      "font-size": "12",
      "font-weight": "700",
      fill: "var(--anim-strong)",
    });
    pivotLabel.textContent = state.isBalanced
      ? `Destek = ${fmt(state.fulcrum)} (Dengede)`
      : `Destek = ${fmt(state.fulcrum)} (Sürükle)`;

    pivotGroup.append(pivotTri, pivotPin, pivotLabel);
    nodes.push(pivotGroup);

    const legendLeft = makeSvg("text", {
      x: String(BEAM_X0),
      y: String(VIEW_H - 10),
      "font-size": "11",
      fill: "var(--anim-muted)",
    });
    legendLeft.textContent = "■ Sol ağırlıklar   ■ Sağ ağırlıklar   ● Yeni eklenen uzak ağırlık";
    nodes.push(legendLeft);

    svg.replaceChildren(...nodes);
  }

  function pointerToScale(evt) {
    const rect = svg.getBoundingClientRect();
    if (!rect.width) return fulcrum;
    const svgX = ((evt.clientX - rect.left) / rect.width) * VIEW_W;
    return unscaleX(svgX);
  }

  svg.addEventListener("pointerdown", (evt) => {
    dragging = true;
    if (svg.setPointerCapture) {
      svg.setPointerCapture(evt.pointerId);
    }
    setFulcrum(pointerToScale(evt), true);
  });

  svg.addEventListener("pointermove", (evt) => {
    if (!dragging) return;
    setFulcrum(pointerToScale(evt), true);
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
    const next = Number.parseFloat(slider.value);
    if (Number.isFinite(next)) {
      setFulcrum(next, true);
    }
  });

  btnBalance.addEventListener("click", () => {
    const currentMean = values.reduce((a, b) => a + b, 0) / values.length;
    setFulcrum(currentMean, false);
  });

  btnAdd9.addEventListener("click", () => {
    if (values.length - initialValues.length >= 3) return;
    values = [...values, 9];
    const newMean = values.reduce((a, b) => a + b, 0) / values.length;
    setFulcrum(newMean, false);
  });

  btnAdd12.addEventListener("click", () => {
    if (values.length - initialValues.length >= 3) return;
    values = [...values, 12];
    const newMean = values.reduce((a, b) => a + b, 0) / values.length;
    setFulcrum(newMean, false);
  });

  btnReset.addEventListener("click", () => {
    values = initialValues.slice();
    setFulcrum(baseMean, false);
  });

  render();
}
