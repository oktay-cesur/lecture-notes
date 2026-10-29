import { makeEl, makeSvg } from "../core/dom.js";
// anova-f-degisimi.js — Tek yönlü ANOVA: grup ortalamaları arasındaki mesafe ve grup içi yayılımın F ile p değerlerine etkisi
//
// Kullanım:
//   <div data-anim="custom" data-src="anova-f-degisimi.js" data-css="anova-f-degisimi.css"></div>
//
// Öznitelikler (isteğe bağlı):
//   data-scene   : başlangıç sahnesi ("temel", "ortalamalar-acik", "yayilim-genis", "esit-ortalamalar")
//   data-between : grup ortalamaları arasındaki mesafe çarpanı (0.0 – 2.0, varsayılan 1.0)
//   data-within  : grup içi yayılım çarpanı (0.4 – 2.5, varsayılan 1.0)
//   data-label   : başlık metni

const GROUPS = [
  {
    id: "ozet",
    name: "Özet çıkarma",
    baseMean: 65,
    deviations: [-5, 0, 5, -3, 3],
    xOffsets: [-28, -14, 0, 14, 28],
    color: "var(--anim-blue)",
    shape: "circle",
  },
  {
    id: "soru",
    name: "Soru çözme",
    baseMean: 74,
    deviations: [-4, 1, -2, 4, 1],
    xOffsets: [-28, -14, 0, 14, 28],
    color: "var(--anim-teal)",
    shape: "square",
  },
  {
    id: "tekrar",
    name: "Tekrar okuma",
    baseMean: 70,
    deviations: [-2, 2, 0, -4, 4],
    xOffsets: [-28, -14, 0, 14, 28],
    color: "var(--anim-amber)",
    shape: "diamond",
  },
];

const SCENES = {
  temel: { between: 1.0, within: 1.0 },
  "ortalamalar-acik": { between: 1.6, within: 1.0 },
  "yayilim-genis": { between: 1.0, within: 1.85 },
  "esit-ortalamalar": { between: 0.0, within: 1.0 },
};

const GRAND_MEAN =
  GROUPS.reduce((acc, g) => acc + g.baseMean, 0) / GROUPS.length;
const DF_BETWEEN = GROUPS.length - 1; // 2
const DF_WITHIN = GROUPS.reduce((acc, g) => acc + g.deviations.length, 0) - GROUPS.length; // 12

const VIEW_W = 680;
const VIEW_H = 340;
const PLOT_X0 = 56;
const PLOT_X1 = 468;
const PLOT_Y0 = 26;
const PLOT_Y1 = 286;
const Y_MIN = 45;
const Y_MAX = 95;
const GROUP_CENTERS = [132, 264, 396];

function fmt(num, digits = 2) {
  return num.toFixed(digits).replace(".", ",");
}

function fmtP(p) {
  if (p < 0.001) return "< 0,001";
  return fmt(p, 3);
}

function yOfScore(score) {
  const clamped = Math.max(Y_MIN, Math.min(Y_MAX, score));
  const ratio = (clamped - Y_MIN) / (Y_MAX - Y_MIN);
  return PLOT_Y1 - ratio * (PLOT_Y1 - PLOT_Y0);
}

// Saf hesap fonksiyonu: verilen çarpanlar için grup verilerini ve ANOVA istatistiklerini üretir
function computeAnovaState(betweenScale, withinScale) {
  const groups = GROUPS.map((g, idx) => {
    const mean = GRAND_MEAN + betweenScale * (g.baseMean - GRAND_MEAN);
    const points = g.deviations.map((dev, i) => {
      const value = mean + withinScale * dev;
      return {
        value,
        mean,
        xOffset: g.xOffsets[i],
      };
    });
    return {
      ...g,
      centerX: GROUP_CENTERS[idx],
      mean,
      points,
    };
  });

  let ssBetween = 0;
  let ssWithin = 0;

  for (const g of groups) {
    const n = g.points.length;
    ssBetween += n * (g.mean - GRAND_MEAN) ** 2;
    for (const pt of g.points) {
      ssWithin += (pt.value - g.mean) ** 2;
    }
  }

  const ssTotal = ssBetween + ssWithin;
  const msBetween = ssBetween / DF_BETWEEN;
  const msWithin = ssWithin / DF_WITHIN;
  const fValue = msWithin > 0 ? msBetween / msWithin : 0;

  // df1 = 2 için F(2, df2) sağ kuyruk olasılığı tam analitik formüldür: (1 + F / (df2 / 2))^(-df2 / 2)
  const pValue =
    fValue <= 0 ? 1 : Math.pow(1 + fValue / (DF_WITHIN / 2), -(DF_WITHIN / 2));
  const etaSq = ssTotal > 0 ? ssBetween / ssTotal : 0;

  return {
    betweenScale,
    withinScale,
    grandMean: GRAND_MEAN,
    groups,
    ssBetween,
    ssWithin,
    ssTotal,
    msBetween,
    msWithin,
    fValue,
    pValue,
    etaSq,
    significant: pValue < 0.05,
  };
}

function drawPointShape(shape, cx, cy, color) {
  if (shape === "square") {
    return makeSvg("rect", {
      x: cx - 5,
      y: cy - 5,
      width: 10,
      height: 10,
      rx: 2,
      fill: color,
      stroke: "var(--anim-bg)",
      "stroke-width": 1.5,
    });
  }
  if (shape === "diamond") {
    const d = 6.5;
    return makeSvg("polygon", {
      points: `${cx},${cy - d} ${cx + d},${cy} ${cx},${cy + d} ${cx - d},${cy}`,
      fill: color,
      stroke: "var(--anim-bg)",
      "stroke-width": 1.5,
    });
  }
  return makeSvg("circle", {
    cx,
    cy,
    r: 5.5,
    fill: color,
    stroke: "var(--anim-bg)",
    "stroke-width": 1.5,
  });
}

export function mount(div, dataset = div.dataset) {
  const sceneKey = (dataset.scene || "temel").trim();
  const preset = SCENES[sceneKey];
  if (!preset) {
    div.replaceChildren(
      makeEl(
        "p",
        "anova-f-degisimi__uyari",
        `Bilinmeyen sahne: "${sceneKey}". Geçerli değerler: ${Object.keys(SCENES).join(", ")}`
      )
    );
    console.warn("[anova-f-degisimi] bilinmeyen sahne:", sceneKey);
    return;
  }

  let betweenScale =
    dataset.between !== undefined
      ? Number.parseFloat(dataset.between)
      : preset.between;
  let withinScale =
    dataset.within !== undefined
      ? Number.parseFloat(dataset.within)
      : preset.within;

  if (!Number.isFinite(betweenScale) || betweenScale < 0 || betweenScale > 2) {
    div.replaceChildren(
      makeEl(
        "p",
        "anova-f-degisimi__uyari",
        `Geçersiz data-between: "${dataset.between}". 0,0 ile 2,0 arasında bir sayı olmalı.`
      )
    );
    console.warn("[anova-f-degisimi] geçersiz data-between:", dataset.between);
    return;
  }

  if (!Number.isFinite(withinScale) || withinScale < 0.4 || withinScale > 2.5) {
    div.replaceChildren(
      makeEl(
        "p",
        "anova-f-degisimi__uyari",
        `Geçersiz data-within: "${dataset.within}". 0,4 ile 2,5 arasında bir sayı olmalı.`
      )
    );
    console.warn("[anova-f-degisimi] geçersiz data-within:", dataset.within);
    return;
  }

  const root = makeEl("section", "anova-f-degisimi");
  root.setAttribute(
    "aria-label",
    "Tek yönlü varyans analizinde F istatistiğinin değişimi animasyonu"
  );

  const header = makeEl("header", "anova-f-degisimi__ust");
  const titleText =
    dataset.label ||
    "F İstatistiğini Değiştiren İki Bileşen: Gruplar Arası Mesafe ve Grup İçi Yayılım";
  const titleEl = makeEl("h4", "anova-f-degisimi__baslik", titleText);
  header.append(titleEl);

  const presetBar = makeEl("div", "anova-f-degisimi__hazir-cubuk");
  const btnExp1 = makeEl("button", "anova-f-degisimi__btn", "Ortalamaları Aç");
  btnExp1.type = "button";
  const btnExp2 = makeEl("button", "anova-f-degisimi__btn", "Yayılımı Artır");
  btnExp2.type = "button";
  const btnEqual = makeEl("button", "anova-f-degisimi__btn", "Eşitle");
  btnEqual.type = "button";
  const btnReset = makeEl("button", "anova-f-degisimi__btn", "Sıfırla");
  btnReset.type = "button";
  presetBar.append(btnExp1, btnExp2, btnEqual, btnReset);
  header.append(presetBar);
  root.append(header);

  // Kontroller (iki kaydırıcı)
  const controls = makeEl("div", "anova-f-degisimi__kontroller");

  const betweenGroup = makeEl("label", "anova-f-degisimi__kontrol");
  const betweenTop = makeEl("span", "anova-f-degisimi__kontrol-ust");
  const betweenLabel = makeEl(
    "span",
    "anova-f-degisimi__kontrol-ad",
    "Grup ortalamaları arasındaki mesafe"
  );
  const betweenVal = makeEl("span", "anova-f-degisimi__kontrol-deger");
  betweenTop.append(betweenLabel, betweenVal);
  const betweenSlider = makeEl("input", {
    type: "range",
    class: "anova-f-degisimi__kaydirici",
    min: "0",
    max: "2",
    step: "0.05",
    value: String(betweenScale),
    "aria-label": "Grup ortalamaları arasındaki mesafe çarpanı",
  });
  const betweenHint = makeEl(
    "span",
    "anova-f-degisimi__kontrol-ipucu",
    "Ortalamalar birbirinden açıldıkça gruplar arası değişkenlik ve F büyür."
  );
  betweenGroup.append(betweenTop, betweenSlider, betweenHint);

  const withinGroup = makeEl("label", "anova-f-degisimi__kontrol");
  const withinTop = makeEl("span", "anova-f-degisimi__kontrol-ust");
  const withinLabel = makeEl(
    "span",
    "anova-f-degisimi__kontrol-ad",
    "Grup içi yayılım"
  );
  const withinVal = makeEl("span", "anova-f-degisimi__kontrol-deger");
  withinTop.append(withinLabel, withinVal);
  const withinSlider = makeEl("input", {
    type: "range",
    class: "anova-f-degisimi__kaydirici",
    min: "0.4",
    max: "2.5",
    step: "0.05",
    value: String(withinScale),
    "aria-label": "Grup içi yayılım çarpanı",
  });
  const withinHint = makeEl(
    "span",
    "anova-f-degisimi__kontrol-ipucu",
    "Grup içi dağınıklık arttıkça aynı ortalama farkları için F küçülür."
  );
  withinGroup.append(withinTop, withinSlider, withinHint);

  controls.append(betweenGroup, withinGroup);
  root.append(controls);

  // SVG grafik alanı
  const svgWrap = makeEl("div", "anova-f-degisimi__grafik-kutu");
  const svg = makeSvg("svg", {
    viewBox: `0 0 ${VIEW_W} ${VIEW_H}`,
    class: "anova-f-degisimi__svg",
    role: "img",
    "aria-label":
      "Üç çalışma yönteminin sınav puanlarını, grup ortalamalarını ve canlı F ile p değerlerini gösteren nokta grafiği",
  });
  svgWrap.append(svg);
  root.append(svgWrap);

  // Alt açıklama / canlı yorum satırı
  const statusBox = makeEl("div", "anova-f-degisimi__durum");
  root.append(statusBox);

  function render() {
    const state = computeAnovaState(betweenScale, withinScale);

    betweenVal.textContent = `${fmt(betweenScale, 2)}×`;
    withinVal.textContent = `${fmt(withinScale, 2)}×`;

    svg.replaceChildren();

    // Grafik arka planı
    svg.append(
      makeSvg("rect", {
        x: PLOT_X0,
        y: PLOT_Y0,
        width: PLOT_X1 - PLOT_X0,
        height: PLOT_Y1 - PLOT_Y0,
        rx: 6,
        fill: "var(--anim-panel)",
        stroke: "var(--anim-border)",
        "stroke-width": 1,
      })
    );

    // Yatay ızgara çizgileri ve Y ekseni etiketleri
    const ticks = [50, 60, 70, 80, 90];
    for (const t of ticks) {
      const y = yOfScore(t);
      svg.append(
        makeSvg("line", {
          x1: PLOT_X0,
          y1: y,
          x2: PLOT_X1,
          y2: y,
          stroke: "var(--anim-border)",
          "stroke-width": 1,
          "stroke-dasharray": "3 3",
        })
      );
      const lbl = makeSvg("text", {
        x: PLOT_X0 - 8,
        y: y + 4,
        "text-anchor": "end",
        "font-size": 11,
        fill: "var(--anim-muted)",
      });
      lbl.textContent = String(t);
      svg.append(lbl);
    }

    // Y ekseni başlığı
    const yAxisTitle = makeSvg("text", {
      x: 16,
      y: (PLOT_Y0 + PLOT_Y1) / 2,
      transform: `rotate(-90 16 ${(PLOT_Y0 + PLOT_Y1) / 2})`,
      "text-anchor": "middle",
      "font-size": 12,
      "font-weight": "600",
      fill: "var(--anim-text-2)",
    });
    yAxisTitle.textContent = "Sınav puanı";
    svg.append(yAxisTitle);

    // Genel ortalama çizgisi
    const grandY = yOfScore(state.grandMean);
    svg.append(
      makeSvg("line", {
        x1: PLOT_X0,
        y1: grandY,
        x2: PLOT_X1,
        y2: grandY,
        stroke: "var(--anim-muted)",
        "stroke-width": 1.5,
        "stroke-dasharray": "6 4",
      })
    );
    const grandLbl = makeSvg("text", {
      x: PLOT_X0 + 8,
      y: grandY - 6,
      "font-size": 11,
      fill: "var(--anim-muted)",
    });
    grandLbl.textContent = `Genel ort. = ${fmt(state.grandMean, 1)}`;
    svg.append(grandLbl);

    // Her grubu çiz
    for (const g of state.groups) {
      const meanY = yOfScore(g.mean);

      // Genel ortalamadan grup ortalamasına uzanan kalın çubuk (gruplar arası fark)
      if (Math.abs(meanY - grandY) > 1) {
        svg.append(
          makeSvg("line", {
            x1: g.centerX - 42,
            y1: grandY,
            x2: g.centerX - 42,
            y2: meanY,
            stroke: g.color,
            "stroke-width": 4,
            "stroke-linecap": "round",
          })
        );
      }

      // Grup ortalaması yatay çizgisi
      svg.append(
        makeSvg("line", {
          x1: g.centerX - 38,
          y1: meanY,
          x2: g.centerX + 38,
          y2: meanY,
          stroke: g.color,
          "stroke-width": 3,
          "stroke-linecap": "round",
        })
      );

      // Grup içi sapma çizgileri ve öğrenci noktaları
      for (const pt of g.points) {
        const px = g.centerX + pt.xOffset;
        const py = yOfScore(pt.value);

        svg.append(
          makeSvg("line", {
            x1: px,
            y1: meanY,
            x2: px,
            y2: py,
            stroke: g.color,
            "stroke-width": 1.4,
            "stroke-dasharray": "2 2",
          })
        );

        svg.append(drawPointShape(g.shape, px, py, g.color));
      }

      // Grup adı ve ortalama etiketi (X ekseni altı)
      const nameLbl = makeSvg("text", {
        x: g.centerX,
        y: PLOT_Y1 + 22,
        "text-anchor": "middle",
        "font-size": 12,
        "font-weight": "600",
        fill: "var(--anim-strong)",
      });
      nameLbl.textContent = g.name;
      svg.append(nameLbl);

      const meanLbl = makeSvg("text", {
        x: g.centerX,
        y: PLOT_Y1 + 40,
        "text-anchor": "middle",
        "font-size": 12,
        fill: g.color,
        "font-weight": "600",
      });
      meanLbl.textContent = `M = ${fmt(g.mean, 1)}`;
      svg.append(meanLbl);
    }

    // Sağ köşe: Canlı F ve p gösterge kartı
    const cardX = 484;
    const cardY = 26;
    const cardW = 184;
    const cardH = 260;

    svg.append(
      makeSvg("rect", {
        x: cardX,
        y: cardY,
        width: cardW,
        height: cardH,
        rx: 8,
        fill: "var(--anim-surface)",
        stroke: state.significant
          ? "var(--anim-blue)"
          : "var(--anim-border-strong)",
        "stroke-width": 1.5,
      })
    );

    const cardHeader = makeSvg("text", {
      x: cardX + 14,
      y: cardY + 24,
      "font-size": 12,
      "font-weight": "700",
      fill: "var(--anim-muted)",
    });
    cardHeader.textContent = "CANLI ANOVA SONUCU";
    svg.append(cardHeader);

    const fText = makeSvg("text", {
      x: cardX + 14,
      y: cardY + 54,
      "font-size": 20,
      "font-weight": "700",
      fill: "var(--anim-strong)",
    });
    fText.textContent = `F(2, 12) = ${fmt(state.fValue, 2)}`;
    svg.append(fText);

    const pText = makeSvg("text", {
      x: cardX + 14,
      y: cardY + 80,
      "font-size": 16,
      "font-weight": "700",
      fill: state.significant ? "var(--anim-blue)" : "var(--anim-amber)",
    });
    pText.textContent = `p = ${fmtP(state.pValue)}`;
    svg.append(pText);

    // Karar rozeti
    const badgeFill = state.significant
      ? "var(--anim-blue-bg)"
      : "var(--anim-panel)";
    const badgeStroke = state.significant
      ? "var(--anim-blue)"
      : "var(--anim-border-strong)";
    svg.append(
      makeSvg("rect", {
        x: cardX + 14,
        y: cardY + 94,
        width: cardW - 28,
        height: 26,
        rx: 5,
        fill: badgeFill,
        stroke: badgeStroke,
        "stroke-width": 1,
      })
    );

    const decisionText = makeSvg("text", {
      x: cardX + cardW / 2,
      y: cardY + 111,
      "text-anchor": "middle",
      "font-size": 11,
      "font-weight": "700",
      fill: state.significant ? "var(--anim-blue)" : "var(--anim-text)",
    });
    decisionText.textContent = state.significant
      ? "p < 0,05 · Fark anlamlı"
      : "p ≥ 0,05 · Şansla açıklanabilir";
    svg.append(decisionText);

    // Ayırıcı çizgi
    svg.append(
      makeSvg("line", {
        x1: cardX + 14,
        y1: cardY + 134,
        x2: cardX + cardW - 14,
        y2: cardY + 134,
        stroke: "var(--anim-border)",
        "stroke-width": 1,
      })
    );

    // Kareler ortalaması ve etki büyüklüğü satırları
    const detailRows = [
      { label: "Gruplar arası KO:", val: fmt(state.msBetween, 1) },
      { label: "Grup içi KO:", val: fmt(state.msWithin, 1) },
      { label: "Gruplar arası KT:", val: fmt(state.ssBetween, 1) },
      { label: "Grup içi KT:", val: fmt(state.ssWithin, 1) },
      { label: "Etki büyüklüğü (η²):", val: fmt(state.etaSq, 2) },
    ];

    detailRows.forEach((row, i) => {
      const ry = cardY + 156 + i * 22;
      const rLabel = makeSvg("text", {
        x: cardX + 14,
        y: ry,
        "font-size": 11,
        fill: "var(--anim-text-2)",
      });
      rLabel.textContent = row.label;
      svg.append(rLabel);

      const rVal = makeSvg("text", {
        x: cardX + cardW - 14,
        y: ry,
        "text-anchor": "end",
        "font-size": 11,
        "font-weight": "700",
        fill: "var(--anim-strong)",
      });
      rVal.textContent = row.val;
      svg.append(rVal);
    });

    // Alt durum yorumu
    const ratioExplain = `F = Gruplar arası KO (${fmt(state.msBetween, 1)}) / Grup içi KO (${fmt(state.msWithin, 1)}) = ${fmt(state.fValue, 2)}`;
    const comment = state.significant
      ? "Grup ortalamaları arasındaki mesafe, grup içi doğal yayılıma göre belirgin biçimde büyük; H₀ reddedilir (en az bir yöntem farklı)."
      : "Grup ortalamaları arasındaki fark, grup içi doğal yayılımın içinde kalıyor; farklar şansla açıklanabilir (H₀ reddedilemez).";

    statusBox.replaceChildren(
      makeEl("strong", "anova-f-degisimi__oran", ratioExplain),
      makeEl("span", "anova-f-degisimi__yorum", comment)
    );
  }

  betweenSlider.addEventListener("input", () => {
    betweenScale = Number.parseFloat(betweenSlider.value);
    render();
  });

  withinSlider.addEventListener("input", () => {
    withinScale = Number.parseFloat(withinSlider.value);
    render();
  });

  btnExp1.addEventListener("click", () => {
    betweenScale = 1.6;
    withinScale = 1.0;
    betweenSlider.value = String(betweenScale);
    withinSlider.value = String(withinScale);
    render();
  });

  btnExp2.addEventListener("click", () => {
    betweenScale = 1.0;
    withinScale = 1.85;
    betweenSlider.value = String(betweenScale);
    withinSlider.value = String(withinScale);
    render();
  });

  btnEqual.addEventListener("click", () => {
    betweenScale = 0.0;
    withinScale = 1.0;
    betweenSlider.value = String(betweenScale);
    withinSlider.value = String(withinScale);
    render();
  });

  btnReset.addEventListener("click", () => {
    betweenScale = 1.0;
    withinScale = 1.0;
    betweenSlider.value = String(betweenScale);
    withinSlider.value = String(withinScale);
    render();
  });

  render();
  div.replaceChildren(root);
}
