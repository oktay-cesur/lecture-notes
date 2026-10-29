import { makeEl, makeSvg } from "../core/dom.js";
// degisen-yayilim.js — Aynı ortalama (70), değişen yayılım: 30 noktalık nokta grafiği ve histogram
//
// Kullanım:
//   <div data-anim="custom" data-src="degisen-yayilim.js" data-css="degisen-yayilim.css"></div>
//
// Öznitelikler (isteğe bağlı):
//   data-spread : başlangıç açıklık değeri (10–60 arası tam sayı, varsayılan 16)
//   data-label  : başlık metni

const MEAN = 70;
const MIN_SPREAD = 10;
const MAX_SPREAD = 60;
const DEFAULT_SPREAD = 16;

// 15 pozitif birim sapma (0 ile 0,50 arası); simetrik negatif eşleriyle toplam 30 gözlem üretir.
// Simetri sayesinde her yayılım düzeyinde toplam fark tam 0 ve ortalama sabit 70,0 kalır.
const HALF_OFFSETS = [
  0.015, 0.032, 0.048, 0.065, 0.082,
  0.105, 0.130, 0.155, 0.185, 0.215,
  0.255, 0.300, 0.355, 0.420, 0.500,
];

const UNIT_OFFSETS = [
  ...HALF_OFFSETS.slice().reverse().map((d) => -d),
  ...HALF_OFFSETS,
];

const VIEW_W = 760;
const VIEW_H = 370;
const PLOT_X0 = 56;
const PLOT_X1 = 526;
const AXIS_MIN = 35;
const AXIS_MAX = 105;
const BIN_WIDTH = 5;
const BIN_COUNT = (AXIS_MAX - AXIS_MIN) / BIN_WIDTH; // 14 aralık: [35,40) ... [100,105]

const HIST_TOP = 28;
const HIST_BOTTOM = 198;
const HIST_MAX_COUNT = 16;

const DOT_TOP = 228;
const DOT_BASELINE = 308;

function xOf(score) {
  return PLOT_X0 + ((score - AXIS_MIN) / (AXIS_MAX - AXIS_MIN)) * (PLOT_X1 - PLOT_X0);
}

function fmt(val, digits = 2) {
  return val.toFixed(digits).replace(".", ",");
}

function computeModel(spread) {
  const values = UNIT_OFFSETS.map((u) => MEAN + spread * u);
  const n = values.length;
  const minVal = values[0];
  const maxVal = values[n - 1];
  const rangeVal = maxVal - minVal;

  let sumSq = 0;
  for (let i = 0; i < n; i++) {
    const diff = values[i] - MEAN;
    sumSq += diff * diff;
  }
  const variance = sumSq / (n - 1);
  const sd = Math.sqrt(variance);

  // 70 sınırında simetrik 5 puanlık histogram aralıkları
  const bins = Array.from({ length: BIN_COUNT }, (_, idx) => ({
    idx,
    low: AXIS_MIN + idx * BIN_WIDTH,
    high: AXIS_MIN + (idx + 1) * BIN_WIDTH,
    count: 0,
  }));

  const centerBinRight = (MEAN - AXIS_MIN) / BIN_WIDTH; // 7 -> [70, 75]
  const centerBinLeft = centerBinRight - 1;             // 6 -> [65, 70)

  for (let i = 0; i < n; i++) {
    const v = values[i];
    let bIdx;
    if (v < MEAN) {
      const dist = MEAN - v;
      const step = Math.floor(Math.max(0, dist - 1e-9) / BIN_WIDTH);
      bIdx = Math.max(0, centerBinLeft - step);
    } else {
      const dist = v - MEAN;
      const step = Math.floor(Math.max(0, dist - 1e-9) / BIN_WIDTH);
      bIdx = Math.min(BIN_COUNT - 1, centerBinRight + step);
    }
    bins[bIdx].count += 1;
  }

  // Nokta grafiğinde çakışan veya çok yakın noktaları dikey istifle
  const dotCoords = [];
  const stackTolerance = 1.15;
  const columns = [];
  for (let i = 0; i < n; i++) {
    const v = values[i];
    let placed = false;
    for (let c = 0; c < columns.length; c++) {
      if (Math.abs(v - columns[c].anchor) <= stackTolerance && columns[c].items.length < 6) {
        columns[c].items.push(v);
        dotCoords.push({ value: v, stackIndex: columns[c].items.length - 1 });
        placed = true;
        break;
      }
    }
    if (!placed) {
      columns.push({ anchor: v, items: [v] });
      dotCoords.push({ value: v, stackIndex: 0 });
    }
  }

  let commentary = "Orta yayılım: Notlar ortalama çevresinde ılımlı bir aralığa dağılıyor.";
  if (spread <= 14) {
    commentary = "Dar yayılım (A sınıfı gibi): Notlar 70'in hemen çevresinde sıkışık; histogram dar ve yüksek.";
  } else if (spread >= 48) {
    commentary = "Geniş yayılım (B sınıfı gibi): Notlar uçlara doğru açıldı; histogram yayvan ve basık.";
  }

  return {
    spread,
    n,
    mean: MEAN,
    minVal,
    maxVal,
    rangeVal,
    variance,
    sd,
    bins,
    dotCoords,
    commentary,
  };
}

export function mount(div, dataset = div.dataset) {
  const rawSpread = dataset.spread ?? String(DEFAULT_SPREAD);
  const initialSpread = Number.parseInt(rawSpread, 10);

  if (!Number.isFinite(initialSpread) || initialSpread < MIN_SPREAD || initialSpread > MAX_SPREAD) {
    div.replaceChildren(
      makeEl(
        "p",
        "degisen-yayilim__uyari",
        `Geçersiz data-spread: "${rawSpread}". ${MIN_SPREAD} ile ${MAX_SPREAD} arasında bir tam sayı olmalıdır.`
      )
    );
    console.warn("[degisen-yayilim] geçersiz data-spread:", rawSpread);
    return;
  }

  let currentSpread = initialSpread;

  const root = makeEl("div", "degisen-yayilim");
  root.setAttribute("aria-label", "Aynı ortalama ve değişen yayılım etkileşimli grafiği");

  const header = makeEl("header", "degisen-yayilim__ust");
  const titleText = (dataset.label || "Aynı Ortalama, Değişen Yayılım (n = 30)").trim();
  const titleEl = makeEl("h3", "degisen-yayilim__baslik", titleText);
  const descEl = makeEl(
    "p",
    "degisen-yayilim__aciklama",
    "Kaydırıcıyla yayılımı değiştirdiğinizde 30 öğrencinin ortalaması 70'te sabit kalır; noktalar merkezden uzaklaştıkça histogram yayvanlaşır, açıklık ve standart sapma büyür."
  );
  header.append(titleEl, descEl);

  const svg = makeSvg("svg", {
    class: "degisen-yayilim__svg",
    viewBox: `0 0 ${VIEW_W} ${VIEW_H}`,
    role: "img",
    "aria-label": "Ortalama 70'te sabitken 30 gözlemlik histogram ve nokta grafiğinde yayılımın değişimi",
  });

  const controls = makeEl("div", "degisen-yayilim__denetim");

  const sliderWrap = makeEl("label", "degisen-yayilim__kaydirici-kutu");
  const sliderLabel = makeEl("span", "degisen-yayilim__kaydirici-etiket", "Yayılım (Açıklık): ");
  const sliderValText = makeEl("strong", "degisen-yayilim__kaydirici-deger", `${currentSpread} puan`);
  sliderLabel.append(sliderValText);

  const slider = makeEl("input", {
    type: "range",
    class: "degisen-yayilim__kaydirici",
    min: String(MIN_SPREAD),
    max: String(MAX_SPREAD),
    step: "2",
    value: String(currentSpread),
    "aria-label": "Yayılım kaydırıcısı (açıklık değeri)",
  });
  sliderWrap.append(sliderLabel, slider);

  const btnGroup = makeEl("div", "degisen-yayilim__dugmeler");
  const btnDec = makeEl("button", { type: "button", class: "degisen-yayilim__dugme" }, "Azalt");
  const btnInc = makeEl("button", { type: "button", class: "degisen-yayilim__dugme" }, "Artır");
  const btnNarrow = makeEl("button", { type: "button", class: "degisen-yayilim__dugme" }, "Dar (65–75)");
  const btnWide = makeEl("button", { type: "button", class: "degisen-yayilim__dugme" }, "Geniş (40–100)");
  const btnReset = makeEl("button", { type: "button", class: "degisen-yayilim__dugme" }, "Sıfırla");
  btnGroup.append(btnDec, btnInc, btnNarrow, btnWide, btnReset);

  controls.append(sliderWrap, btnGroup);

  const statusText = makeEl("p", "degisen-yayilim__durum");
  statusText.setAttribute("aria-live", "polite");

  function render() {
    const model = computeModel(currentSpread);
    slider.value = String(currentSpread);
    sliderValText.textContent = `${fmt(model.rangeVal, 0)} puan`;
    btnDec.disabled = currentSpread <= MIN_SPREAD;
    btnInc.disabled = currentSpread >= MAX_SPREAD;
    statusText.textContent = model.commentary;

    const nodes = [];

    // Sol üst: Histogram paneli arka planı
    nodes.push(
      makeSvg("rect", {
        x: PLOT_X0,
        y: HIST_TOP,
        width: PLOT_X1 - PLOT_X0,
        height: HIST_BOTTOM - HIST_TOP,
        rx: 4,
        fill: "var(--anim-panel)",
        stroke: "var(--anim-border)",
      })
    );

    // Sol alt: Nokta grafiği paneli arka planı
    nodes.push(
      makeSvg("rect", {
        x: PLOT_X0,
        y: DOT_TOP,
        width: PLOT_X1 - PLOT_X0,
        height: DOT_BASELINE - DOT_TOP + 12,
        rx: 4,
        fill: "var(--anim-panel)",
        stroke: "var(--anim-border)",
      })
    );

    // Histogram yatay kılavuz çizgileri ve Y ekseni etiketleri
    const yTicks = [0, 5, 10, 15];
    for (const tick of yTicks) {
      const y = HIST_BOTTOM - (tick / HIST_MAX_COUNT) * (HIST_BOTTOM - HIST_TOP - 14);
      nodes.push(
        makeSvg("line", {
          x1: PLOT_X0,
          y1: y,
          x2: PLOT_X1,
          y2: y,
          stroke: "var(--anim-border)",
          "stroke-dasharray": tick === 0 ? "none" : "3 3",
        })
      );
      nodes.push(
        makeSvg(
          "text",
          {
            x: PLOT_X0 - 8,
            y: y + 4,
            "text-anchor": "end",
            "font-size": "11",
            fill: "var(--anim-muted)",
          },
          String(tick)
        )
      );
    }

    // Panel başlık etiketleri
    nodes.push(
      makeSvg(
        "text",
        {
          x: PLOT_X0 + 8,
          y: HIST_TOP + 15,
          "font-size": "11",
          "font-weight": "700",
          fill: "var(--anim-text-2)",
        },
        "Histogram (kişi sayısı)"
      )
    );

    nodes.push(
      makeSvg(
        "text",
        {
          x: PLOT_X0 + 8,
          y: DOT_TOP + 15,
          "font-size": "11",
          "font-weight": "700",
          fill: "var(--anim-text-2)",
        },
        "Nokta grafiği (30 öğrenci)"
      )
    );

    // ±1 SD bandı (Histogram + Nokta grafiği boyunca)
    const sdLeftX = xOf(MEAN - model.sd);
    const sdRightX = xOf(MEAN + model.sd);
    nodes.push(
      makeSvg("rect", {
        x: sdLeftX,
        y: HIST_TOP + 1,
        width: Math.max(2, sdRightX - sdLeftX),
        height: HIST_BOTTOM - HIST_TOP - 2,
        fill: "color-mix(in srgb, var(--anim-amber) 14%, transparent)",
      })
    );
    nodes.push(
      makeSvg("rect", {
        x: sdLeftX,
        y: DOT_TOP + 1,
        width: Math.max(2, sdRightX - sdLeftX),
        height: DOT_BASELINE - DOT_TOP + 10,
        fill: "color-mix(in srgb, var(--anim-amber) 14%, transparent)",
      })
    );

    // Histogram sütunları
    for (const b of model.bins) {
      if (b.count === 0) continue;
      const x0 = xOf(b.low) + 1.5;
      const x1 = xOf(b.high) - 1.5;
      const barW = Math.max(4, x1 - x0);
      const barH = (b.count / HIST_MAX_COUNT) * (HIST_BOTTOM - HIST_TOP - 14);
      const barY = HIST_BOTTOM - barH;

      nodes.push(
        makeSvg("rect", {
          x: x0,
          y: barY,
          width: barW,
          height: barH,
          rx: 2,
          fill: "color-mix(in srgb, var(--anim-blue) 45%, var(--anim-surface))",
          stroke: "var(--anim-blue-strong)",
          "stroke-width": "1.2",
        })
      );

      nodes.push(
        makeSvg(
          "text",
          {
            x: x0 + barW / 2,
            y: barY - 4,
            "text-anchor": "middle",
            "font-size": "10",
            "font-weight": "600",
            fill: "var(--anim-strong)",
          },
          String(b.count)
        )
      );
    }

    // Nokta grafiğindeki 30 gözlem noktası
    for (const pt of model.dotCoords) {
      const cx = xOf(pt.value);
      const cy = DOT_BASELINE - pt.stackIndex * 11;
      nodes.push(
        makeSvg("circle", {
          cx,
          cy,
          r: 4.5,
          fill: "var(--anim-blue)",
          stroke: "var(--anim-surface)",
          "stroke-width": "1.2",
        })
      );
    }

    // Sabit ortalama çizgisi (x = 70)
    const meanX = xOf(MEAN);
    nodes.push(
      makeSvg("line", {
        x1: meanX,
        y1: HIST_TOP - 6,
        x2: meanX,
        y2: DOT_BASELINE + 14,
        stroke: "var(--anim-red)",
        "stroke-width": "2.2",
        "stroke-dasharray": "5 3",
      })
    );
    nodes.push(
      makeSvg(
        "text",
        {
          x: meanX,
          y: HIST_TOP - 10,
          "text-anchor": "middle",
          "font-size": "11",
          "font-weight": "700",
          fill: "var(--anim-red)",
        },
        "Ortalama = 70,0 (sabit)"
      )
    );

    // X ekseni ve puan etiketleri
    const axisY = DOT_BASELINE + 12;
    nodes.push(
      makeSvg("line", {
        x1: PLOT_X0,
        y1: axisY,
        x2: PLOT_X1,
        y2: axisY,
        stroke: "var(--anim-border-strong)",
        "stroke-width": "1.4",
      })
    );

    for (let score = 40; score <= 100; score += 10) {
      const tx = xOf(score);
      nodes.push(
        makeSvg("line", {
          x1: tx,
          y1: axisY,
          x2: tx,
          y2: axisY + 5,
          stroke: "var(--anim-border-strong)",
          "stroke-width": "1.2",
        })
      );
      nodes.push(
        makeSvg(
          "text",
          {
            x: tx,
            y: axisY + 18,
            "text-anchor": "middle",
            "font-size": "11",
            "font-weight": score === MEAN ? "700" : "400",
            fill: score === MEAN ? "var(--anim-red)" : "var(--anim-text)",
          },
          String(score)
        )
      );
    }

    // Alt kısımda canlı Açıklık (en küçük – en büyük) oku
    const minX = xOf(model.minVal);
    const maxX = xOf(model.maxVal);
    const bracketY = axisY + 32;
    nodes.push(
      makeSvg("line", {
        x1: minX,
        y1: bracketY,
        x2: maxX,
        y2: bracketY,
        stroke: "var(--anim-teal)",
        "stroke-width": "2",
      }),
      makeSvg("line", {
        x1: minX,
        y1: bracketY - 5,
        x2: minX,
        y2: bracketY + 5,
        stroke: "var(--anim-teal)",
        "stroke-width": "2",
      }),
      makeSvg("line", {
        x1: maxX,
        y1: bracketY - 5,
        x2: maxX,
        y2: bracketY + 5,
        stroke: "var(--anim-teal)",
        "stroke-width": "2",
      }),
      makeSvg(
        "text",
        {
          x: (minX + maxX) / 2,
          y: bracketY + 15,
          "text-anchor": "middle",
          "font-size": "11",
          "font-weight": "700",
          fill: "var(--anim-teal)",
        },
        `Açıklık: ${fmt(model.maxVal, 0)} − ${fmt(model.minVal, 0)} = ${fmt(model.rangeVal, 0)} puan`
      )
    );

    // Sağ köşe: Canlı özet kartı (Ortalama, Açıklık, Standart Sapma, Varyans)
    const cardX = 544;
    const cardY = HIST_TOP;
    const cardW = 202;
    const cardH = 292;

    nodes.push(
      makeSvg("rect", {
        x: cardX,
        y: cardY,
        width: cardW,
        height: cardH,
        rx: 8,
        fill: "var(--anim-surface)",
        stroke: "var(--anim-border-strong)",
        "stroke-width": "1.4",
      })
    );

    nodes.push(
      makeSvg(
        "text",
        {
          x: cardX + 14,
          y: cardY + 24,
          "font-size": "12",
          "font-weight": "700",
          fill: "var(--anim-strong)",
        },
        "Canlı Ölçüler (n = 30)"
      )
    );

    const rows = [
      {
        label: "Ortalama (M)",
        val: `${fmt(model.mean, 1)} puan`,
        note: "Değişmez (sabit merkez)",
        color: "var(--anim-red)",
      },
      {
        label: "Açıklık",
        val: `${fmt(model.rangeVal, 1)} puan`,
        note: `En küçük: ${fmt(model.minVal, 0)} · En büyük: ${fmt(model.maxVal, 0)}`,
        color: "var(--anim-teal)",
      },
      {
        label: "Standart sapma (SD)",
        val: `${fmt(model.sd, 2)} puan`,
        note: "Ortalamadan tipik uzaklık",
        color: "var(--anim-amber)",
      },
      {
        label: "Varyans (s²)",
        val: `${fmt(model.variance, 2)}`,
        note: "Birim: puan kare",
        color: "var(--anim-purple)",
      },
    ];

    rows.forEach((row, idx) => {
      const ry = cardY + 42 + idx * 60;
      nodes.push(
        makeSvg("rect", {
          x: cardX + 10,
          y: ry,
          width: cardW - 20,
          height: 52,
          rx: 5,
          fill: "var(--anim-panel)",
          stroke: "var(--anim-border)",
        }),
        makeSvg(
          "text",
          {
            x: cardX + 18,
            y: ry + 17,
            "font-size": "11",
            "font-weight": "600",
            fill: "var(--anim-text-2)",
          },
          row.label
        ),
        makeSvg(
          "text",
          {
            x: cardX + cardW - 18,
            y: ry + 18,
            "text-anchor": "end",
            "font-size": "13",
            "font-weight": "700",
            fill: row.color,
          },
          row.val
        ),
        makeSvg(
          "text",
          {
            x: cardX + 18,
            y: ry + 38,
            "font-size": "10",
            fill: "var(--anim-muted)",
          },
          row.note
        )
      );
    });

    svg.replaceChildren(...nodes);
  }

  slider.addEventListener("input", () => {
    currentSpread = Number.parseInt(slider.value, 10);
    render();
  });

  btnDec.addEventListener("click", () => {
    currentSpread = Math.max(MIN_SPREAD, currentSpread - 4);
    render();
  });

  btnInc.addEventListener("click", () => {
    currentSpread = Math.min(MAX_SPREAD, currentSpread + 4);
    render();
  });

  btnNarrow.addEventListener("click", () => {
    currentSpread = MIN_SPREAD;
    render();
  });

  btnWide.addEventListener("click", () => {
    currentSpread = MAX_SPREAD;
    render();
  });

  btnReset.addEventListener("click", () => {
    currentSpread = initialSpread;
    render();
  });

  render();
  root.append(header, svg, controls, statusText);
  div.replaceChildren(root);
}
