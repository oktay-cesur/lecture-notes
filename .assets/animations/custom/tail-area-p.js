import { makeEl, makeSvg } from "../core/dom.js";

// tail-area-p.js — H0 altındaki örnekleme dağılımında gözlenen ortalama ve p kuyruk alanı
//
// Kullanım:
//   <div data-anim="custom" data-src="tail-area-p.js" data-css="tail-area-p.css"></div>
//
// Öznitelikler (isteğe bağlı):
//   data-mean  : başlangıç gözlenen ortalama (75 ile 82 arası sayı, varsayılan 78)
//   data-sided : test türü ("two" yönsüz veya "one" yönlü, varsayılan "two")
//   data-label : özel başlık metni

const MU0 = 75;
const SE = 2;
const ALPHA = 0.05;
const SLIDER_MIN = 75;
const SLIDER_MAX = 82;
const X_MIN = 67;
const X_MAX = 83;

function normalPdf(z) {
  return Math.exp(-0.5 * z * z) / Math.sqrt(2 * Math.PI);
}

// Standart normal sağ kuyruk olasılığı P(Z >= z), z >= 0 için Abramowitz-Stegun yaklaşımı
function rightTailProb(z) {
  const absZ = Math.abs(z);
  const t = 1 / (1 + 0.2316419 * absZ);
  const d = 0.3989422804014327 * Math.exp((-absZ * absZ) / 2);
  const p =
    d *
    t *
    (0.31938153 +
      t *
        (-0.356563782 +
          t * (1.781477937 + t * (-1.821255978 + 1.330274429 * t))));
  return z >= 0 ? p : 1 - p;
}

function fmtTr(num, digits = 2) {
  return num.toFixed(digits).replace(".", ",");
}

function fmtPValue(p) {
  if (p >= 0.995) return "1,00";
  if (p < 0.001) return "< 0,001";
  if (p < 0.01) return fmtTr(p, 3);
  return fmtTr(p, 2);
}

export function mount(div, dataset = div.dataset) {
  const initMean = Number.parseFloat(dataset.mean ?? "78");
  const initSided = (dataset.sided ?? "two").trim();

  if (!Number.isFinite(initMean) || initMean < SLIDER_MIN || initMean > SLIDER_MAX) {
    div.replaceChildren(
      makeEl(
        "p",
        "tail-area-p__uyari",
        `Geçersiz data-mean: "${dataset.mean}". 75 ile 82 arasında bir sayı olmalı.`
      )
    );
    console.warn("[tail-area-p] geçersiz data-mean:", dataset.mean);
    return;
  }

  if (initSided !== "two" && initSided !== "one") {
    div.replaceChildren(
      makeEl(
        "p",
        "tail-area-p__uyari",
        `Geçersiz data-sided: "${dataset.sided}". Geçerli değerler: two, one.`
      )
    );
    console.warn("[tail-area-p] geçersiz data-sided:", dataset.sided);
    return;
  }

  let observedMean = Math.round(initMean * 2) / 2;
  let isTwoSided = initSided === "two";

  const root = makeEl("div", "tail-area-p");
  root.setAttribute(
    "aria-label",
    dataset.label || "p değeri kuyruk alanı animasyonu"
  );

  // Başlık
  const header = makeEl("header", "tail-area-p__header");
  const titleEl = makeEl(
    "h3",
    "tail-area-p__title",
    dataset.label || "p Bir Kuyruk Alanıdır (H0: μ = 75, SH = 2)"
  );
  const subtitleEl = makeEl(
    "p",
    "tail-area-p__subtitle",
    "Gözlenen örneklem ortalamasını 75'ten 82'ye taşıyarak H0 altında kalan kuyruk alanını (p değerini) ve α = 0,05 kararını inceleyin."
  );
  header.append(titleEl, subtitleEl);

  // Denetim alanı
  const controls = makeEl("div", "tail-area-p__controls");

  // Gözlenen ortalama kaydırıcısı
  const sliderBox = makeEl("div", "tail-area-p__slider-box");
  const sliderTop = makeEl("div", "tail-area-p__slider-top");
  const sliderLabel = makeEl(
    "label",
    "tail-area-p__label",
    "Gözlenen sınıf ortalaması (x̄): "
  );
  const sliderValStrong = makeEl("strong", "tail-area-p__val");
  sliderLabel.append(sliderValStrong);
  sliderTop.append(sliderLabel);

  const meanSlider = makeEl("input", {
    type: "range",
    class: "tail-area-p__range",
    min: String(SLIDER_MIN),
    max: String(SLIDER_MAX),
    step: "0.5",
    value: String(observedMean),
    "aria-label": "Gözlenen örneklem ortalaması (75 ile 82 arası)"
  });

  // Hızlı örnek düğmeleri (75, 78, 79, 81)
  const presetRow = makeEl("div", "tail-area-p__presets");
  const presets = [
    { val: 75, text: "75,0 (Fark yok)" },
    { val: 78, text: "78,0 (Yeni yöntem: 1,5 SH)" },
    { val: 79, text: "79,0 (2,0 SH · p ≈ 0,05)" },
    { val: 81, text: "81,0 (3,0 SH)" }
  ];
  const presetButtons = presets.map((item) => {
    const b = makeEl(
      "button",
      {
        type: "button",
        class: "tail-area-p__preset-btn",
        "aria-label": `Gözlenen ortalamayı ${fmtTr(item.val, 1)} yap`
      },
      item.text
    );
    b.addEventListener("click", () => {
      observedMean = item.val;
      meanSlider.value = String(observedMean);
      render();
    });
    presetRow.append(b);
    return { btn: b, val: item.val };
  });

  sliderBox.append(sliderTop, meanSlider, presetRow);

  // Yönsüz / Yönlü hipotez anahtarı
  const modeBox = makeEl("div", "tail-area-p__mode-box");
  const modeLabel = makeEl(
    "span",
    "tail-area-p__label",
    "Alternatif hipotez (veriden önce seçilir):"
  );
  const modeBtns = makeEl("div", "tail-area-p__mode-btns");
  const btnTwoSided = makeEl(
    "button",
    {
      type: "button",
      class: "tail-area-p__mode-btn",
      "aria-label": "Yönsüz hipotez (iki kuyruk)"
    },
    "Yönsüz (H1: μ ≠ 75)"
  );
  const btnOneSided = makeEl(
    "button",
    {
      type: "button",
      class: "tail-area-p__mode-btn",
      "aria-label": "Yönlü hipotez (tek kuyruk)"
    },
    "Yönlü (H1: μ > 75)"
  );
  modeBtns.append(btnTwoSided, btnOneSided);
  modeBox.append(modeLabel, modeBtns);

  controls.append(sliderBox, modeBox);

  // Bilgi kartları
  const cardsRow = makeEl("div", "tail-area-p__cards");
  const cardDiff = makeEl("div", "tail-area-p__card");
  const cardP = makeEl("div", "tail-area-p__card");
  const cardDecision = makeEl("div", "tail-area-p__card");
  cardsRow.append(cardDiff, cardP, cardDecision);

  // SVG Normal Eğri
  const svg = makeSvg("svg", {
    viewBox: "0 0 740 295",
    class: "tail-area-p__svg",
    role: "img",
    "aria-label":
      "H0 altında 75 merkezli ve standart hatası 2 olan normal dağılım eğrisi üzerinde gözlenen ortalamanın ötesinde kalan kuyruk alanı"
  });

  const footerNote = makeEl("p", "tail-area-p__note");

  root.append(header, controls, cardsRow, svg, footerNote);
  div.replaceChildren(root);

  const PLOT = { x0: 54, y0: 36, w: 632, h: 186 };
  const MAX_PDF = normalPdf(0);

  function xToPx(x) {
    return PLOT.x0 + ((x - X_MIN) / (X_MAX - X_MIN)) * PLOT.w;
  }

  function zToY(z) {
    const d = normalPdf(z);
    return PLOT.y0 + PLOT.h - (d / MAX_PDF) * (PLOT.h - 22);
  }

  function buildCurvePath(xStart, xEnd, closeArea = false) {
    const steps = 90;
    const dx = (xEnd - xStart) / steps;
    const parts = [];
    for (let i = 0; i <= steps; i++) {
      const xv = xStart + i * dx;
      const zv = (xv - MU0) / SE;
      const px = xToPx(xv);
      const py = zToY(zv);
      parts.push(`${i === 0 ? "M" : "L"}${px.toFixed(1)},${py.toFixed(1)}`);
    }
    if (closeArea) {
      const baseY = (PLOT.y0 + PLOT.h).toFixed(1);
      parts.push(`L${xToPx(xEnd).toFixed(1)},${baseY}`);
      parts.push(`L${xToPx(xStart).toFixed(1)},${baseY}Z`);
    }
    return parts.join(" ");
  }

  function renderSvg(diff, zVal, singleTail, pVal, isSignificant) {
    svg.replaceChildren();
    const baseY = PLOT.y0 + PLOT.h;
    const symLeft = MU0 - diff;

    // Arka plan paneli
    svg.append(
      makeSvg("rect", {
        x: 12,
        y: 8,
        width: 716,
        height: 278,
        rx: 10,
        fill: "var(--anim-panel)",
        stroke: "var(--anim-border)"
      })
    );

    // Eğri altı genel açık dolgu
    svg.append(
      makeSvg("path", {
        d: buildCurvePath(X_MIN, X_MAX, true),
        fill: "var(--anim-surface)"
      })
    );

    const tailFill = isSignificant
      ? "color-mix(in srgb, var(--anim-red) 34%, transparent)"
      : "color-mix(in srgb, var(--anim-blue) 32%, transparent)";
    const tailStroke = isSignificant
      ? "var(--anim-red)"
      : "var(--anim-blue-strong)";

    // Sağ kuyruk alanı (x >= observedMean)
    if (observedMean <= X_MAX) {
      svg.append(
        makeSvg("path", {
          d: buildCurvePath(observedMean, X_MAX, true),
          fill: tailFill
        })
      );
    }

    // Yönsüz testte sol simetrik kuyruk alanı (x <= symLeft)
    if (isTwoSided && symLeft >= X_MIN) {
      svg.append(
        makeSvg("path", {
          d: buildCurvePath(X_MIN, symLeft, true),
          fill: tailFill
        })
      );
    }

    // Normal eğri ana çizgisi
    svg.append(
      makeSvg("path", {
        d: buildCurvePath(X_MIN, X_MAX, false),
        fill: "none",
        stroke: "var(--anim-strong)",
        "stroke-width": "2.4"
      })
    );

    // α = 0,05 kritik eşik işaretçileri
    const critZ = isTwoSided ? 1.96 : 1.645;
    const critRightX = MU0 + critZ * SE;
    const critRightPx = xToPx(critRightX);
    svg.append(
      makeSvg("line", {
        x1: critRightPx,
        y1: PLOT.y0 + 18,
        x2: critRightPx,
        y2: baseY,
        stroke: "var(--anim-amber)",
        "stroke-width": "1.4",
        "stroke-dasharray": "3 3"
      })
    );
    const critRightLbl = makeSvg("text", {
      x: critRightPx,
      y: PLOT.y0 + 13,
      "text-anchor": "middle",
      "font-size": "10",
      "font-weight": "600",
      fill: "var(--anim-amber)"
    });
    critRightLbl.textContent = `α sınırı (${fmtTr(critRightX, 1)})`;
    svg.append(critRightLbl);

    if (isTwoSided) {
      const critLeftX = MU0 - critZ * SE;
      const critLeftPx = xToPx(critLeftX);
      svg.append(
        makeSvg("line", {
          x1: critLeftPx,
          y1: PLOT.y0 + 18,
          x2: critLeftPx,
          y2: baseY,
          stroke: "var(--anim-amber)",
          "stroke-width": "1.4",
          "stroke-dasharray": "3 3"
        })
      );
      const critLeftLbl = makeSvg("text", {
        x: critLeftPx,
        y: PLOT.y0 + 13,
        "text-anchor": "middle",
        "font-size": "10",
        "font-weight": "600",
        fill: "var(--anim-amber)"
      });
      critLeftLbl.textContent = `α sınırı (${fmtTr(critLeftX, 1)})`;
      svg.append(critLeftLbl);
    }

    // Merkez μ0 = 75 dikey ekseni
    const muPx = xToPx(MU0);
    svg.append(
      makeSvg("line", {
        x1: muPx,
        y1: zToY(0),
        x2: muPx,
        y2: baseY,
        stroke: "var(--anim-muted)",
        "stroke-width": "1.6",
        "stroke-dasharray": "5 4"
      })
    );
    const muTopTxt = makeSvg("text", {
      x: muPx,
      y: zToY(0) - 7,
      "text-anchor": "middle",
      "font-size": "11",
      "font-weight": "700",
      fill: "var(--anim-strong)"
    });
    muTopTxt.textContent = "H0 merkezi: μ = 75";
    svg.append(muTopTxt);

    // Gözlenen ortalama dikey çizgisi ve etiketi
    const obsPx = xToPx(observedMean);
    svg.append(
      makeSvg("line", {
        x1: obsPx,
        y1: PLOT.y0 + 26,
        x2: obsPx,
        y2: baseY,
        stroke: tailStroke,
        "stroke-width": "2.6"
      })
    );
    svg.append(
      makeSvg("circle", {
        cx: obsPx,
        cy: baseY,
        r: 5,
        fill: tailStroke,
        stroke: "var(--anim-bg)",
        "stroke-width": "1.5"
      })
    );

    const obsTagX = Math.min(PLOT.x0 + PLOT.w - 64, Math.max(muPx + 58, obsPx));
    const obsTxt = makeSvg("text", {
      x: obsTagX,
      y: PLOT.y0 + 38,
      "text-anchor": "middle",
      "font-size": "11",
      "font-weight": "700",
      fill: tailStroke
    });
    obsTxt.textContent = `Gözlenen x̄ = ${fmtTr(observedMean, 1)}`;
    svg.append(obsTxt);

    const rightAreaTxt = makeSvg("text", {
      x: Math.min(PLOT.x0 + PLOT.w - 52, obsPx + 44),
      y: baseY - 22,
      "text-anchor": "middle",
      "font-size": "11",
      "font-weight": "700",
      fill: tailStroke
    });
    rightAreaTxt.textContent = `Sağ uç: ${fmtPValue(singleTail)}`;
    svg.append(rightAreaTxt);

    // Yönsüzse sol simetrik sınır çizgisi ve etiketi
    if (isTwoSided && diff > 0) {
      const leftPx = xToPx(symLeft);
      svg.append(
        makeSvg("line", {
          x1: leftPx,
          y1: PLOT.y0 + 26,
          x2: leftPx,
          y2: baseY,
          stroke: tailStroke,
          "stroke-width": "2.2",
          "stroke-dasharray": "5 3"
        })
      );
      svg.append(
        makeSvg("circle", {
          cx: leftPx,
          cy: baseY,
          r: 4.5,
          fill: tailStroke,
          stroke: "var(--anim-bg)",
          "stroke-width": "1.5"
        })
      );

      const leftTagX = Math.max(PLOT.x0 + 64, Math.min(muPx - 58, leftPx));
      const leftTxt = makeSvg("text", {
        x: leftTagX,
        y: PLOT.y0 + 38,
        "text-anchor": "middle",
        "font-size": "11",
        "font-weight": "700",
        fill: tailStroke
      });
      leftTxt.textContent = `Simetrik uç: ${fmtTr(symLeft, 1)}`;
      svg.append(leftTxt);

      const leftAreaTxt = makeSvg("text", {
        x: Math.max(PLOT.x0 + 52, leftPx - 44),
        y: baseY - 22,
        "text-anchor": "middle",
        "font-size": "11",
        "font-weight": "700",
        fill: tailStroke
      });
      leftAreaTxt.textContent = `Sol uç: ${fmtPValue(singleTail)}`;
      svg.append(leftAreaTxt);
    }

    // X ekseni taban çizgisi
    svg.append(
      makeSvg("line", {
        x1: PLOT.x0,
        y1: baseY,
        x2: PLOT.x0 + PLOT.w,
        y2: baseY,
        stroke: "var(--anim-border-strong)",
        "stroke-width": "1.6"
      })
    );

    // X ekseni ölçekleri: üst satır puan, alt satır SH karşılığı
    const xTicks = [69, 71, 73, 75, 77, 79, 81];
    xTicks.forEach((val) => {
      const px = xToPx(val);
      const shUnit = (val - MU0) / SE;
      svg.append(
        makeSvg("line", {
          x1: px,
          y1: baseY,
          x2: px,
          y2: baseY + 6,
          stroke: "var(--anim-border-strong)",
          "stroke-width": "1.4"
        })
      );

      const scoreTxt = makeSvg("text", {
        x: px,
        y: baseY + 21,
        "text-anchor": "middle",
        "font-size": "11",
        "font-weight": val === MU0 ? "700" : "600",
        fill: val === MU0 ? "var(--anim-strong)" : "var(--anim-text)"
      });
      scoreTxt.textContent = String(val);

      const shTxt = makeSvg("text", {
        x: px,
        y: baseY + 37,
        "text-anchor": "middle",
        "font-size": "10",
        fill: "var(--anim-muted)"
      });
      shTxt.textContent =
        shUnit === 0
          ? "0 SH"
          : `${shUnit > 0 ? "+" : ""}${shUnit} SH`;

      svg.append(scoreTxt, shTxt);
    });

    // Toplam p rozeti (orta alt bilgi)
    const summaryText = makeSvg("text", {
      x: PLOT.x0 + PLOT.w / 2,
      y: baseY + 56,
      "text-anchor": "middle",
      "font-size": "11",
      "font-weight": "700",
      fill: tailStroke
    });
    summaryText.textContent = isTwoSided
      ? `Yönsüz p = sol kuyruk + sağ kuyruk = ${fmtPValue(pVal)}`
      : `Yönlü p = yalnız sağ kuyruk = ${fmtPValue(pVal)}`;
    svg.append(summaryText);
  }

  function render() {
    const diff = observedMean - MU0;
    const zVal = diff / SE;
    const singleTail = rightTailProb(zVal);
    const pVal = isTwoSided ? Math.min(1, 2 * singleTail) : singleTail;
    const isSignificant = pVal < ALPHA;

    sliderValStrong.textContent = `${fmtTr(observedMean, 1)} puan`;

    // Hızlı seçim düğmeleri vurgusu
    presetButtons.forEach(({ btn, val }) => {
      const active = Math.abs(observedMean - val) < 0.01;
      btn.classList.toggle("tail-area-p__preset-btn--active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    // Yönlü/yönsüz düğme vurgusu
    btnTwoSided.classList.toggle("tail-area-p__mode-btn--active", isTwoSided);
    btnTwoSided.setAttribute("aria-pressed", String(isTwoSided));
    btnOneSided.classList.toggle("tail-area-p__mode-btn--active", !isTwoSided);
    btnOneSided.setAttribute("aria-pressed", String(!isTwoSided));

    // Kart 1: Fark ve SH karşılığı
    cardDiff.replaceChildren(
      makeEl("span", "tail-area-p__card-label", "Gözlenen Fark (SH = 2 puan)"),
      makeEl(
        "strong",
        "tail-area-p__card-value",
        `${fmtTr(observedMean, 1)} − 75 = +${fmtTr(diff, 1)} puan`
      ),
      makeEl(
        "span",
        "tail-area-p__card-sub",
        `Standart hata cinsinden: ${fmtTr(diff, 1)} / 2 = ${fmtTr(zVal, 2)} SH`
      )
    );

    // Kart 2: p değeri
    cardP.replaceChildren(
      makeEl(
        "span",
        "tail-area-p__card-label",
        isTwoSided ? "Kuyruk Alanı (Yönsüz p)" : "Kuyruk Alanı (Yönlü p)"
      ),
      makeEl(
        "strong",
        "tail-area-p__card-value tail-area-p__card-value--p",
        `p ≈ ${fmtPValue(pVal)}`
      ),
      makeEl(
        "span",
        "tail-area-p__card-sub",
        isTwoSided
          ? `İki uç toplamı (sağ ≈ ${fmtPValue(singleTail)} + sol ≈ ${fmtPValue(singleTail)})`
          : `Yalnız üst uç alanı (x̄ ≥ ${fmtTr(observedMean, 1)})`
      )
    );

    // Kart 3: Karar (α = 0,05 ile karşılaştırma)
    cardDecision.className = `tail-area-p__card ${
      isSignificant
        ? "tail-area-p__card--reject"
        : "tail-area-p__card--retain"
    }`;
    cardDecision.replaceChildren(
      makeEl("span", "tail-area-p__card-label", "Karar (α = 0,05 eşiği)"),
      makeEl(
        "strong",
        "tail-area-p__card-value",
        isSignificant
          ? "p < 0,05 → H0 reddedilir"
          : "p ≥ 0,05 → H0 reddedilemez"
      ),
      makeEl(
        "span",
        "tail-area-p__card-sub",
        isSignificant
          ? "Sonuç istatistiksel olarak anlamlıdır"
          : "Gözlenen fark şans oynamasıyla açıklanabilir"
      )
    );

    renderSvg(diff, zVal, singleTail, pVal, isSignificant);

    // Alt açıklama
    if (Math.abs(observedMean - 78) < 0.01 && isTwoSided) {
      footerNote.textContent =
        "Yeni yöntem sınıfı (x̄ = 78,0): 3 puanlık fark 1,5 SH eder. Yönsüz testte iki kuyruktaki toplam alan p ≈ 0,13 (≥ 0,05) olduğundan H0 reddedilemez; bu fark şansla kolayca ortaya çıkabilir.";
    } else if (Math.abs(observedMean - 78) < 0.01 && !isTwoSided) {
      footerNote.textContent =
        "Dikkat: Aynı 78,0 ortalama için yönlü testte yalnız sağ kuyruk sayılır (p ≈ 0,07). Yön araştırmaya başlamadan önce kuramsal gerekçeyle belirlenmediyse tek kuyruk seçmek yanıltıcıdır.";
    } else if (Math.abs(observedMean - 79) < 0.01 && isTwoSided) {
      footerNote.textContent =
        "Gözlenen ortalama 79,0 olduğunda fark 4 puan (2,0 SH) olur ve iki kuyruktaki alan p ≈ 0,05 düzeyine iner; merkezden uzaklaştıkça kuyruk alanı küçülür.";
    } else {
      footerNote.textContent = isSignificant
        ? `H0 doğru olsaydı (μ = 75) ${fmtTr(observedMean, 1)} kadar ya da daha uç bir ortalama görme olasılığı p ≈ ${fmtPValue(pVal)} olurdu; bu olasılık α = 0,05 eşiğinden küçük olduğu için H0 reddedilir.`
        : `H0 doğru olsaydı (μ = 75) ${fmtTr(observedMean, 1)} kadar ya da daha uç bir ortalama görme olasılığı p ≈ ${fmtPValue(pVal)} olurdu; p ≥ 0,05 olduğu için "fark yoktur" demeyiz, "anlamlı bir fark bulunamadı" deriz.`;
    }
  }

  meanSlider.addEventListener("input", () => {
    const val = Number.parseFloat(meanSlider.value);
    if (Number.isFinite(val)) {
      observedMean = val;
      render();
    }
  });

  btnTwoSided.addEventListener("click", () => {
    if (!isTwoSided) {
      isTwoSided = true;
      render();
    }
  });

  btnOneSided.addEventListener("click", () => {
    if (isTwoSided) {
      isTwoSided = false;
      render();
    }
  });

  render();
}
