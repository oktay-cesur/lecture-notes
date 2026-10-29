import { makeEl, makeSvg } from "../core/dom.js";
// aralik-genisligi.js — Elli öğrencinin haftalık çalışma saatleri histogramında
// aralık genişliği (1, 2, 4, 8 ve 12 saat) değiştiğinde görüntünün nasıl değiştiğini gösterir.
//
// Kullanım:
//   <div data-anim="custom" data-src="aralik-genisligi.js" data-css="aralik-genisligi.css"></div>
//
// Öznitelikler (isteğe bağlı):
//   data-width : başlangıç aralık genişliği (1, 2, 4, 8 veya 12; varsayılan 4)
//   data-label : başlık metni

const STUDY_HOURS = [
  12, 7, 9, 15, 4, 10, 8, 11, 6, 13,
  9, 5, 17, 10, 7, 3, 12, 9, 14, 8,
  6, 11, 10, 2, 9, 16, 7, 12, 5, 10,
  8, 13, 6, 9, 21, 11, 7, 4, 10, 14,
  9, 6, 12, 8, 15, 5, 11, 7, 18, 10,
];

const DOMAIN_MIN = 0;
const DOMAIN_MAX = 24;
const OUTLIER_VALUE = 21;
const WIDTH_OPTIONS = [1, 2, 4, 8, 12];

const WIDTH_DESCRIPTIONS = {
  1: {
    badge: "Çok dar aralık (24 çubuk)",
    summary:
      "1 saatlik aralıklarda her saat dilimi ayrı çubuk olur. Çok sayıda alçak ve dişli çubuk oluştuğu için dağılımın genel biçimini seçmek zorlaşır.",
    outlierNote: "21 saatlik gözlem [21, 22) aralığında tek başına görünür.",
  },
  2: {
    badge: "Dar aralık (12 çubuk)",
    summary:
      "2 saatlik aralıklarda dişli görünüm yumuşar; 6–12 saat arasındaki yoğunlaşma ve sağa doğru uzanan kuyruk seçilmeye başlar.",
    outlierNote: "21 saatlik gözlem [20, 22) aralığında tek gözlem olarak seçilir.",
  },
  4: {
    badge: "Dengeli aralık (6 çubuk)",
    summary:
      "4 saatlik aralıklarda 8–12 saatteki yoğunlaşma (20 öğrenci), sağa uzanan kuyruk ve 20–24 aralığındaki tek gözlem (21 saat) birlikte okunur.",
    outlierNote: "21 saatlik gözlem [20, 24) aralığında tek gözlemli çubuk olarak açıkça görülür.",
  },
  8: {
    badge: "Geniş aralık (3 çubuk)",
    summary:
      "8 saatlik aralıklarda gözlemler üç çubuğa toplanır (16, 30 ve 4 öğrenci). Sağdaki kuyruk ayrıntısını kaybeder.",
    outlierNote: "21 saatlik gözlem 16–24 aralığındaki 4 kişilik çubuğun içine karışır.",
  },
  12: {
    badge: "Çok geniş aralık (2 çubuk)",
    summary:
      "12 saatlik aralıklarda bütün veri yalnızca iki çubuğa sıkışır (36 ve 14 öğrenci); sağdaki kuyruk ve 21 saatlik uç değer adayı tamamen gizlenir.",
    outlierNote: "21 saatlik gözlem 12–24 aralığındaki 14 kişilik çubuğun içinde kaybolur.",
  },
};

function computeValueCounts(values) {
  const counts = new Map();
  for (const v of values) {
    counts.set(v, (counts.get(v) || 0) + 1);
  }
  return Array.from(counts.entries())
    .map(([value, count]) => ({ value, count }))
    .sort((a, b) => a.value - b.value);
}

function computeHistogram(values, binWidth) {
  const binCount = (DOMAIN_MAX - DOMAIN_MIN) / binWidth;
  const bins = [];
  for (let i = 0; i < binCount; i++) {
    const start = DOMAIN_MIN + i * binWidth;
    const end = start + binWidth;
    bins.push({
      index: i,
      start,
      end,
      label: `${start}–${end}`,
      count: 0,
      percent: 0,
      containsOutlier: OUTLIER_VALUE >= start && OUTLIER_VALUE < end,
    });
  }

  for (const v of values) {
    const idx = Math.min(
      bins.length - 1,
      Math.max(0, Math.floor((v - DOMAIN_MIN) / binWidth))
    );
    bins[idx].count += 1;
  }

  const total = values.length;
  let maxCount = 0;
  for (const bin of bins) {
    bin.percent = (bin.count / total) * 100;
    if (bin.count > maxCount) {
      maxCount = bin.count;
    }
  }

  for (const bin of bins) {
    bin.isMode = bin.count === maxCount && maxCount > 0;
  }

  return {
    binWidth,
    binCount,
    bins,
    maxCount,
    total,
  };
}

function niceYAxisMax(maxCount) {
  if (maxCount <= 8) return 8;
  if (maxCount <= 12) return 12;
  if (maxCount <= 24) return 24;
  if (maxCount <= 32) return 32;
  return 40;
}

function formatPercent(value) {
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded)
    ? `%${rounded}`
    : `%${rounded.toFixed(1).replace(".", ",")}`;
}

export function mount(div, dataset = div.dataset) {
  const rawWidth = (dataset.width ?? "4").trim();
  const initialWidth = Number.parseInt(rawWidth, 10);

  if (!WIDTH_OPTIONS.includes(initialWidth) || String(initialWidth) !== rawWidth) {
    div.replaceChildren(
      makeEl(
        "p",
        "aralik-genisligi__uyari",
        `Geçersiz data-width: "${dataset.width}". Geçerli değerler: ${WIDTH_OPTIONS.join(", ")}.`
      )
    );
    console.warn("[aralik-genisligi] geçersiz data-width:", dataset.width);
    return;
  }

  const defaultIndex = WIDTH_OPTIONS.indexOf(initialWidth);
  let stepIndex = defaultIndex;

  const valueCounts = computeValueCounts(STUDY_HOURS);
  const histograms = new Map(
    WIDTH_OPTIONS.map((w) => [w, computeHistogram(STUDY_HOURS, w)])
  );

  const root = makeEl("section", "aralik-genisligi");
  const headingText = (
    dataset.label || "Aralık Genişliği Değiştiğinde Histogram Nasıl Görünür?"
  ).trim();
  root.setAttribute("aria-label", headingText);

  const header = makeEl("header", "aralik-genisligi__ust");
  const titleEl = makeEl("h3", "aralik-genisligi__baslik", headingText);
  const subtitleEl = makeEl(
    "p",
    "aralik-genisligi__altbaslik",
    "Veri sabit (n = 50 öğrenci, en küçük = 2 saat, en büyük = 21 saat, ortalama = 9,62 saat). Sınır kuralı: sınırdaki değer üst aralığa yazılır (örn. 4 saat → 4–8)."
  );
  header.append(titleEl, subtitleEl);

  const controls = makeEl("div", "aralik-genisligi__denetim");

  const sliderGroup = makeEl("div", "aralik-genisligi__kaydirici-grup");
  const sliderLabel = makeEl(
    "label",
    "aralik-genisligi__etiket",
    "Aralık genişliği:"
  );
  const sliderValueStrong = makeEl("strong", "aralik-genisligi__secili-deger");
  sliderLabel.append(" ", sliderValueStrong);

  const sliderInput = makeEl("input", {
    type: "range",
    class: "aralik-genisligi__kaydirici",
    min: "0",
    max: String(WIDTH_OPTIONS.length - 1),
    step: "1",
    value: String(stepIndex),
    "aria-label": "Histogram aralık genişliği seçici",
  });
  sliderGroup.append(sliderLabel, sliderInput);

  const quickButtons = makeEl("div", "aralik-genisligi__hizli-secim");
  const widthButtons = WIDTH_OPTIONS.map((w, idx) => {
    const btn = makeEl(
      "button",
      {
        type: "button",
        class: "aralik-genisligi__dugme aralik-genisligi__dugme--secim",
        "aria-label": `${w} saatlik aralık genişliği`,
      },
      `${w} saat`
    );
    btn.addEventListener("click", () => {
      stepIndex = idx;
      render();
    });
    quickButtons.append(btn);
    return btn;
  });

  const navButtons = makeEl("div", "aralik-genisligi__adim-dugmeleri");
  const prevBtn = makeEl(
    "button",
    {
      type: "button",
      class: "aralik-genisligi__dugme",
      "aria-label": "Daha dar aralığa geç",
    },
    "Geri"
  );
  const nextBtn = makeEl(
    "button",
    {
      type: "button",
      class: "aralik-genisligi__dugme",
      "aria-label": "Daha geniş aralığa geç",
    },
    "İleri"
  );
  const resetBtn = makeEl(
    "button",
    {
      type: "button",
      class: "aralik-genisligi__dugme aralik-genisligi__dugme--sifirla",
      "aria-label": "Varsayılan aralık genişliğine sıfırla",
    },
    "Sıfırla"
  );
  navButtons.append(prevBtn, nextBtn, resetBtn);

  controls.append(sliderGroup, quickButtons, navButtons);

  const summaryCard = makeEl("div", "aralik-genisligi__ozet");
  const badgeRow = makeEl("div", "aralik-genisligi__rozetler");
  const modeBadge = makeEl("span", "aralik-genisligi__rozet aralik-genisligi__rozet--vurgu");
  const countBadge = makeEl("span", "aralik-genisligi__rozet");
  const outlierBadge = makeEl("span", "aralik-genisligi__rozet");
  badgeRow.append(modeBadge, countBadge, outlierBadge);

  const descPara = makeEl("p", "aralik-genisligi__aciklama");
  const outlierPara = makeEl("p", "aralik-genisligi__kuyruk-notu");
  summaryCard.append(badgeRow, descPara, outlierPara);

  const chartWrap = makeEl("div", "aralik-genisligi__grafik-kutu");
  const svg = makeSvg("svg", {
    class: "aralik-genisligi__svg",
    viewBox: "0 0 680 350",
    role: "img",
    "aria-label": "Elli öğrencinin haftalık çalışma saatleri histogramı",
  });
  chartWrap.append(svg);

  const legend = makeEl("div", "aralik-genisligi__lejant");
  const legendNormal = makeEl(
    "span",
    "aralik-genisligi__lejant-oge",
    "■ Normal aralık çubuğu"
  );
  const legendMode = makeEl(
    "span",
    "aralik-genisligi__lejant-oge aralik-genisligi__lejant-oge--tepe",
    "◆ En yoğun aralık (tepe)"
  );
  const legendOutlier = makeEl(
    "span",
    "aralik-genisligi__lejant-oge aralik-genisligi__lejant-oge--uc",
    "▲ 21 saatlik gözlem (uç değer adayı)"
  );
  legend.append(legendNormal, legendMode, legendOutlier);

  const tableSection = makeEl("div", "aralik-genisligi__tablo-bolumu");
  const tableTitle = makeEl(
    "p",
    "aralik-genisligi__tablo-baslik",
    "Aralık tablosu (n = 50 öğrenci):"
  );
  const chipList = makeEl("div", "aralik-genisligi__aralik-listesi");
  tableSection.append(tableTitle, chipList);

  root.append(header, controls, summaryCard, chartWrap, legend, tableSection);
  div.replaceChildren(root);

  sliderInput.addEventListener("input", () => {
    const parsed = Number.parseInt(sliderInput.value, 10);
    if (Number.isFinite(parsed) && parsed >= 0 && parsed < WIDTH_OPTIONS.length) {
      stepIndex = parsed;
      render();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (stepIndex > 0) {
      stepIndex -= 1;
      render();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (stepIndex < WIDTH_OPTIONS.length - 1) {
      stepIndex += 1;
      render();
    }
  });

  resetBtn.addEventListener("click", () => {
    stepIndex = defaultIndex;
    render();
  });

  function drawChart(hist) {
    const children = [];
    const plotLeft = 58;
    const plotRight = 650;
    const plotTop = 28;
    const plotBottom = 224;
    const plotWidth = plotRight - plotLeft;
    const plotHeight = plotBottom - plotTop;

    const yMax = niceYAxisMax(hist.maxCount);
    const yTickCount = 4;
    const xOf = (hour) =>
      plotLeft + ((hour - DOMAIN_MIN) / (DOMAIN_MAX - DOMAIN_MIN)) * plotWidth;
    const yOf = (count) => plotBottom - (count / yMax) * plotHeight;

    for (let i = 0; i <= yTickCount; i++) {
      const tickVal = Math.round((yMax / yTickCount) * i);
      const y = yOf(tickVal);
      children.push(
        makeSvg("line", {
          x1: plotLeft,
          y1: y,
          x2: plotRight,
          y2: y,
          stroke: i === 0 ? "var(--anim-border-strong)" : "var(--anim-border)",
          "stroke-width": i === 0 ? 1.5 : 1,
          "stroke-dasharray": i === 0 ? "" : "4 4",
        })
      );
      const label = makeSvg("text", {
        x: plotLeft - 10,
        y: y + 4,
        "text-anchor": "end",
        "font-size": "12",
        fill: "var(--anim-text-2)",
      });
      label.textContent = String(tickVal);
      children.push(label);
    }

    children.push(
      makeSvg("line", {
        x1: plotLeft,
        y1: plotTop,
        x2: plotLeft,
        y2: plotBottom,
        stroke: "var(--anim-border-strong)",
        "stroke-width": 1.5,
      })
    );

    const yAxisTitle = makeSvg("text", {
      x: 18,
      y: (plotTop + plotBottom) / 2,
      transform: `rotate(-90 18 ${(plotTop + plotBottom) / 2})`,
      "text-anchor": "middle",
      "font-size": "12",
      "font-weight": "600",
      fill: "var(--anim-text)",
    });
    yAxisTitle.textContent = "Öğrenci sayısı";
    children.push(yAxisTitle);

    for (const bin of hist.bins) {
      const x0 = xOf(bin.start);
      const x1 = xOf(bin.end);
      const barW = x1 - x0;
      const y0 = yOf(bin.count);
      const barH = plotBottom - y0;

      if (bin.count > 0) {
        const fill = bin.isMode
          ? "var(--anim-blue-strong)"
          : bin.containsOutlier && bin.count === 1
          ? "var(--anim-amber)"
          : "var(--anim-blue)";

        children.push(
          makeSvg("rect", {
            x: x0,
            y: y0,
            width: barW,
            height: barH,
            fill,
            stroke: "var(--anim-bg)",
            "stroke-width": 1.2,
          })
        );

        children.push(
          makeSvg("rect", {
            x: x0,
            y: y0,
            width: barW,
            height: barH,
            fill: "transparent",
            stroke: "var(--anim-border-strong)",
            "stroke-width": 1,
          })
        );

        const countText = makeSvg("text", {
          x: x0 + barW / 2,
          y: Math.max(plotTop + 12, y0 - 6),
          "text-anchor": "middle",
          "font-size": hist.binWidth === 1 ? "10" : "12",
          "font-weight": bin.isMode ? "700" : "600",
          fill: bin.isMode ? "var(--anim-strong)" : "var(--anim-text)",
        });
        countText.textContent = bin.isMode && hist.binWidth >= 2 ? `◆ ${bin.count}` : String(bin.count);
        children.push(countText);
      } else {
        children.push(
          makeSvg("line", {
            x1: x0,
            y1: plotBottom,
            x2: x1,
            y2: plotBottom,
            stroke: "var(--anim-border-strong)",
            "stroke-width": 2,
          })
        );
      }
    }

    const tickStep = hist.binWidth <= 2 ? 2 : 4;
    for (let h = DOMAIN_MIN; h <= DOMAIN_MAX; h += tickStep) {
      const x = xOf(h);
      children.push(
        makeSvg("line", {
          x1: x,
          y1: plotBottom,
          x2: x,
          y2: plotBottom + 6,
          stroke: "var(--anim-border-strong)",
          "stroke-width": 1.5,
        })
      );
      const tickLabel = makeSvg("text", {
        x,
        y: plotBottom + 20,
        "text-anchor": "middle",
        "font-size": "12",
        fill: "var(--anim-text)",
      });
      tickLabel.textContent = String(h);
      children.push(tickLabel);
    }

    const xAxisTitle = makeSvg("text", {
      x: (plotLeft + plotRight) / 2,
      y: plotBottom + 40,
      "text-anchor": "middle",
      "font-size": "12",
      "font-weight": "600",
      fill: "var(--anim-text)",
    });
    xAxisTitle.textContent = "Haftalık çalışma süresi (saat)";
    children.push(xAxisTitle);

    const rugTop = 286;
    const rugBaseline = 314;

    children.push(
      makeSvg("line", {
        x1: plotLeft,
        y1: rugBaseline,
        x2: plotRight,
        y2: rugBaseline,
        stroke: "var(--anim-border)",
        "stroke-width": 1.2,
      })
    );

    const rugTitle = makeSvg("text", {
      x: plotLeft,
      y: rugTop - 6,
      "text-anchor": "start",
      "font-size": "11",
      "font-weight": "600",
      fill: "var(--anim-text-2)",
    });
    rugTitle.textContent = "Sabit ham veri (50 öğrenci; her nokta sütunu o saatteki öğrenci sayısıdır):";
    children.push(rugTitle);

    for (const item of valueCounts) {
      const cx = xOf(item.value);
      const isOutlier = item.value === OUTLIER_VALUE;
      for (let k = 0; k < item.count; k++) {
        const cy = rugBaseline - 5 - k * 4.2;
        children.push(
          makeSvg("circle", {
            cx,
            cy,
            r: isOutlier ? 3.2 : 2.1,
            fill: isOutlier ? "var(--anim-amber)" : "var(--anim-teal)",
          })
        );
      }
    }

    const outlierX = xOf(OUTLIER_VALUE);
    children.push(
      makeSvg("polygon", {
        points: `${outlierX},${rugBaseline + 3} ${outlierX - 6},${rugBaseline + 13} ${outlierX + 6},${rugBaseline + 13}`,
        fill: "var(--anim-amber)",
      })
    );

    const outlierText = makeSvg("text", {
      x: outlierX,
      y: rugBaseline + 26,
      "text-anchor": "middle",
      "font-size": "11",
      "font-weight": "600",
      fill: "var(--anim-strong)",
    });
    outlierText.textContent = "21 saat (uç değer adayı)";
    children.push(outlierText);

    svg.replaceChildren(...children);
  }

  function render() {
    const currentWidth = WIDTH_OPTIONS[stepIndex];
    const hist = histograms.get(currentWidth);
    const meta = WIDTH_DESCRIPTIONS[currentWidth];

    sliderInput.value = String(stepIndex);
    sliderValueStrong.textContent = `${currentWidth} saat (${hist.binCount} aralık)`;

    prevBtn.disabled = stepIndex === 0;
    nextBtn.disabled = stepIndex === WIDTH_OPTIONS.length - 1;

    widthButtons.forEach((btn, idx) => {
      const active = idx === stepIndex;
      btn.classList.toggle("aralik-genisligi__dugme--aktif", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    const modeBins = hist.bins.filter((b) => b.isMode).map((b) => `${b.label} saat`);
    const outlierBin = hist.bins.find((b) => b.containsOutlier);
    const outlierIsolated = outlierBin && outlierBin.count === 1;

    modeBadge.textContent = meta.badge;
    countBadge.textContent = `En yoğun: ${modeBins.join(", ")} (${hist.maxCount} kişi, ${formatPercent(
      (hist.maxCount / hist.total) * 100
    )})`;
    outlierBadge.textContent = outlierIsolated
      ? `21 saat: [${outlierBin.start}, ${outlierBin.end}) aralığında tek gözlem (görünür)`
      : `21 saat: [${outlierBin.start}, ${outlierBin.end}) aralığında ${outlierBin.count} kişi içinde (gizlendi)`;
    outlierBadge.classList.toggle(
      "aralik-genisligi__rozet--uyari",
      !outlierIsolated
    );

    descPara.textContent = meta.summary;
    outlierPara.textContent = meta.outlierNote;

    svg.setAttribute(
      "aria-label",
      `Elli öğrencinin haftalık çalışma saatleri histogramı, aralık genişliği ${currentWidth} saat, ${hist.binCount} aralık`
    );
    drawChart(hist);

    const chips = hist.bins.map((bin) => {
      const chipClass = [
        "aralik-genisligi__aralik-kart",
        bin.isMode ? "aralik-genisligi__aralik-kart--tepe" : "",
        bin.containsOutlier ? "aralik-genisligi__aralik-kart--uc" : "",
      ]
        .filter(Boolean)
        .join(" ");

      const chip = makeEl("div", chipClass);
      const rangeSpan = makeEl(
        "span",
        "aralik-genisligi__aralik-ad",
        `[${bin.start}, ${bin.end}) saat`
      );
      const freqSpan = makeEl(
        "strong",
        "aralik-genisligi__aralik-sayi",
        `${bin.count} kişi (${formatPercent(bin.percent)})`
      );
      chip.append(rangeSpan, freqSpan);
      return chip;
    });
    chipList.replaceChildren(...chips);
  }

  render();
}
