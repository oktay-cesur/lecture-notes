import { makeEl, makeSvg } from "../core/dom.js";

// ters-puanlama-etkisi.js — 1–5 yalnızlık ölçeğinde ters maddelerin çevrilmesi ve toplam puana etkisi
//
// Kullanım:
//   <div data-anim="custom" data-src="ters-puanlama-etkisi.js" data-css="ters-puanlama-etkisi.css"></div>
//
// Öznitelikler (isteğe bağlı):
//   data-scene : başlangıç senaryosu ("k01" veya "hep5", varsayılan "k01")
//   data-label : başlık metni

const SCALE_MIN = 1;
const SCALE_MAX = 5;
const REVERSE_SUM = SCALE_MIN + SCALE_MAX; // 6
const TOTAL_MIN = 4;
const TOTAL_MAX = 20;

const ITEMS = [
  {
    id: "m1",
    code: "m1",
    reverse: false,
    directionLabel: "Düz madde",
    text: "1. Kendimi yalnız hissediyorum.",
  },
  {
    id: "m2",
    code: "m2 (ters)",
    reverse: true,
    directionLabel: "Ters madde",
    text: "2. Zor bir anımda yanımda olacak insanlar var.",
  },
  {
    id: "m3",
    code: "m3",
    reverse: false,
    directionLabel: "Düz madde",
    text: "3. Kendimi çevremden kopuk hissediyorum.",
  },
  {
    id: "m4",
    code: "m4 (ters)",
    reverse: true,
    directionLabel: "Ters madde",
    text: "4. İstediğimde konuşabileceğim birilerine ulaşabilirim.",
  },
];

const SCENARIOS = {
  k01: {
    key: "k01",
    buttonLabel: "Senaryo 1: K01 (4 · 2 · 5 · 1)",
    title: "K01 — Yalnızlığı yüksek katılımcı (4 · 2 · 5 · 1)",
    rawScores: [4, 2, 5, 1],
    rawComment:
      "Çevirmeden toplandığında (4 + 2 + 5 + 1 = 12, ort. 3,0) K01 ölçeğin tam ortasında görünür. Oysa destek maddelerine düşük puan vermesi yalnızlığının yüksek olduğunu söylüyor.",
    reversedComment:
      "Ters maddeler 6 − ham puan ile çevrilince m2: 2 → 4 ve m4: 1 → 5 olur. Doğru toplam 12'den 18'e (ort. 4,5) kayar ve K01'in yüksek yalnızlık düzeyi doğru biçimde ölçülür.",
  },
  hep5: {
    key: "hep5",
    buttonLabel: "Senaryo 2: Hep 5 İşaretleyen (5 · 5 · 5 · 5)",
    title: "Hep 5 işaretleyen katılımcı — Katılma eğilimi / dikkatsiz yanıt",
    rawScores: [5, 5, 5, 5],
    rawComment:
      "Her maddeye 5 veren biri hem 'yalnızım' hem 'yanımda insanlar var' demektedir. Çevirmeden toplanırsa puan 20 (ort. 5,0) çıkar ve katılma eğilimi en yüksek yalnızlık gibi görünür.",
    reversedComment:
      "Ters maddeler çevrilince m2: 5 → 1 ve m4: 5 → 1 döner. Doğru toplam 5 + 1 + 5 + 1 = 12'ye (ort. 3,0) iner; ters maddeler otomatik katılma eğilimini orta değere çeker.",
  },
};

const STEPS = [
  { scenarioKey: "k01", reversed: false },
  { scenarioKey: "k01", reversed: true },
  { scenarioKey: "hep5", reversed: false },
  { scenarioKey: "hep5", reversed: true },
];

function computeModel(scenarioKey, reversed) {
  const scenario = SCENARIOS[scenarioKey];
  const rows = ITEMS.map((item, idx) => {
    const raw = scenario.rawScores[idx];
    const converted = item.reverse ? REVERSE_SUM - raw : raw;
    const active = reversed ? converted : raw;
    return {
      ...item,
      raw,
      converted,
      active,
      changed: reversed && item.reverse,
      formulaText:
        reversed && item.reverse
          ? `${REVERSE_SUM} − ${raw} = ${converted}`
          : `${active}`,
    };
  });

  const rawTotal = rows.reduce((acc, r) => acc + r.raw, 0);
  const correctTotal = rows.reduce((acc, r) => acc + r.converted, 0);
  const activeTotal = reversed ? correctTotal : rawTotal;
  const activeMean = activeTotal / ITEMS.length;

  return {
    scenario,
    reversed,
    rows,
    rawTotal,
    correctTotal,
    activeTotal,
    activeMean,
  };
}

function fmtMean(val) {
  return val.toFixed(1).replace(".", ",");
}

export function mount(div, dataset = div.dataset) {
  const initialScene = (dataset.scene || "k01").trim();
  if (!SCENARIOS[initialScene]) {
    div.replaceChildren(
      makeEl(
        "p",
        "ters-puanlama-etkisi__uyari",
        `Bilinmeyen sahne: "${initialScene}". Geçerli değerler: ${Object.keys(SCENARIOS).join(", ")}`
      )
    );
    console.warn("[ters-puanlama-etkisi] bilinmeyen data-scene:", initialScene);
    return;
  }

  let stepIndex = initialScene === "hep5" ? 2 : 0;

  const root = makeEl("div", "ters-puanlama-etkisi");
  const titleText =
    dataset.label || "Ters Puanlama Etkisi: (En Küçük + En Büyük) − Ham Puan";
  root.setAttribute("aria-label", titleText);

  const header = makeEl("header", "ters-puanlama-etkisi__ust");
  const titleEl = makeEl("h3", "ters-puanlama-etkisi__baslik", titleText);
  const ruleBadge = makeEl(
    "span",
    "ters-puanlama-etkisi__kural-etiket",
    "1–5 ölçekte ters puan = 6 − ham puan"
  );
  header.append(titleEl, ruleBadge);

  const scenarioBar = makeEl("div", "ters-puanlama-etkisi__senaryolar");
  const btnK01 = makeEl(
    "button",
    {
      type: "button",
      class: "ters-puanlama-etkisi__senaryo-btn",
    },
    SCENARIOS.k01.buttonLabel
  );
  const btnHep5 = makeEl(
    "button",
    {
      type: "button",
      class: "ters-puanlama-etkisi__senaryo-btn",
    },
    SCENARIOS.hep5.buttonLabel
  );
  scenarioBar.append(btnK01, btnHep5);

  const svg = makeSvg("svg", {
    class: "ters-puanlama-etkisi__tuval",
    viewBox: "0 0 760 410",
    role: "img",
    "aria-label":
      "Dört maddelik yalnızlık ölçeğinde ters puanlama çubukları ve 4 ile 20 arası toplam puan göstergesi",
  });

  const statusBox = makeEl("div", "ters-puanlama-etkisi__aciklama");
  const statusState = makeEl("strong", "ters-puanlama-etkisi__durum-baslik");
  const statusText = makeEl("p", "ters-puanlama-etkisi__durum-metin");
  statusBox.append(statusState, statusText);

  const controls = makeEl("div", "ters-puanlama-etkisi__denetim");
  const btnPrev = makeEl(
    "button",
    { type: "button", class: "ters-puanlama-etkisi__btn" },
    "Geri"
  );
  const btnFlip = makeEl(
    "button",
    {
      type: "button",
      class: "ters-puanlama-etkisi__btn ters-puanlama-etkisi__btn--vurgu",
    },
    "Çevir (6 − ham)"
  );
  const btnNext = makeEl(
    "button",
    { type: "button", class: "ters-puanlama-etkisi__btn" },
    "İleri"
  );
  const btnReset = makeEl(
    "button",
    { type: "button", class: "ters-puanlama-etkisi__btn" },
    "Sıfırla"
  );
  const stepCounter = makeEl("span", "ters-puanlama-etkisi__adim-sayac");
  controls.append(btnPrev, btnFlip, btnNext, btnReset, stepCounter);

  root.append(header, scenarioBar, svg, statusBox, controls);
  div.replaceChildren(root);

  const BAR_X0 = 310;
  const BAR_X1 = 590;
  const xForItemScore = (score) =>
    BAR_X0 + ((score - 0) / SCALE_MAX) * (BAR_X1 - BAR_X0);

  const TOTAL_X0 = 130;
  const TOTAL_X1 = 680;
  const xForTotalScore = (total) =>
    TOTAL_X0 +
    ((total - TOTAL_MIN) / (TOTAL_MAX - TOTAL_MIN)) * (TOTAL_X1 - TOTAL_X0);

  function renderSvg(model) {
    const nodes = [];

    // Üst başlık şeridi: Madde | 1..5 Puan Çubuğu | Hesaplanan Puan
    nodes.push(
      makeSvg(
        "text",
        {
          x: 16,
          y: 24,
          fill: "var(--anim-muted)",
          "font-size": 12,
          "font-weight": "600",
        },
        "Madde ve Yönü"
      ),
      makeSvg(
        "text",
        {
          x: (BAR_X0 + BAR_X1) / 2,
          y: 24,
          "text-anchor": "middle",
          fill: "var(--anim-muted)",
          "font-size": 12,
          "font-weight": "600",
        },
        "Madde Puanı (1 = Hiç katılmıyorum … 5 = Tamamen katılıyorum)"
      ),
      makeSvg(
        "text",
        {
          x: 742,
          y: 24,
          "text-anchor": "end",
          fill: "var(--anim-muted)",
          "font-size": 12,
          "font-weight": "600",
        },
        model.reversed ? "Doğru (m_ters)" : "Ham Puan"
      )
    );

    // 1..5 kılavuz çizgileri ve orta eksen (3)
    for (let s = 1; s <= 5; s++) {
      const sx = xForItemScore(s);
      const isMid = s === 3;
      nodes.push(
        makeSvg("line", {
          x1: sx,
          y1: 34,
          x2: sx,
          y2: 252,
          stroke: isMid ? "var(--anim-border-strong)" : "var(--anim-border)",
          "stroke-width": isMid ? 1.5 : 1,
          "stroke-dasharray": isMid ? "4 3" : "2 3",
        }),
        makeSvg(
          "text",
          {
            x: sx,
            y: 46,
            "text-anchor": "middle",
            fill: isMid ? "var(--anim-strong)" : "var(--anim-muted)",
            "font-size": 11,
            "font-weight": isMid ? "700" : "500",
          },
          isMid ? "3 (orta)" : String(s)
        )
      );
    }

    // Dört madde satırı
    model.rows.forEach((row, idx) => {
      const rowY = 56 + idx * 49;
      const barY = rowY + 11;
      const barH = 22;

      // Satır arka planı
      nodes.push(
        makeSvg("rect", {
          x: 10,
          y: rowY,
          width: 740,
          height: 43,
          rx: 6,
          fill: row.reverse ? "var(--anim-panel)" : "var(--anim-surface)",
          stroke: row.changed
            ? "var(--anim-teal)"
            : row.reverse
              ? "var(--anim-amber)"
              : "var(--anim-border)",
          "stroke-width": row.reverse ? 1.4 : 1,
          "stroke-dasharray": !model.reversed && row.reverse ? "5 3" : "none",
        })
      );

      // Madde kodu ve yön rozeti
      nodes.push(
        makeSvg(
          "text",
          {
            x: 20,
            y: rowY + 17,
            fill: "var(--anim-strong)",
            "font-size": 12,
            "font-weight": "700",
          },
          `${row.code} · [${row.directionLabel}]`
        ),
        makeSvg(
          "text",
          {
            x: 20,
            y: rowY + 34,
            fill: "var(--anim-text-2)",
            "font-size": 11,
          },
          row.text
        )
      );

      // Çubuk zemin oluğu
      nodes.push(
        makeSvg("rect", {
          x: BAR_X0,
          y: barY,
          width: BAR_X1 - BAR_X0,
          height: barH,
          rx: 4,
          fill: "var(--anim-bg)",
          stroke: "var(--anim-border)",
          "stroke-width": 1,
        })
      );

      // Eğer ters madde çevrildiyse eski ham çubuğu kesikli iz olarak göster
      if (row.changed) {
        const rawW = xForItemScore(row.raw) - BAR_X0;
        nodes.push(
          makeSvg("rect", {
            x: BAR_X0,
            y: barY + 3,
            width: rawW,
            height: barH - 6,
            rx: 3,
            fill: "none",
            stroke: "var(--anim-amber)",
            "stroke-width": 1.5,
            "stroke-dasharray": "4 2",
          })
        );
      }

      // Etkin puan çubuğu
      const activeW = xForItemScore(row.active) - BAR_X0;
      const barFill = row.reverse
        ? model.reversed
          ? "var(--anim-teal)"
          : "var(--anim-amber-soft)"
        : "var(--anim-blue-bg)";
      const barStroke = row.reverse
        ? model.reversed
          ? "var(--anim-teal)"
          : "var(--anim-amber)"
        : "var(--anim-blue-strong)";

      nodes.push(
        makeSvg("rect", {
          x: BAR_X0,
          y: barY,
          width: activeW,
          height: barH,
          rx: 4,
          fill: barFill,
          "fill-opacity": row.changed ? "0.28" : "0.85",
          stroke: barStroke,
          "stroke-width": 2,
          "stroke-dasharray": !model.reversed && row.reverse ? "5 3" : "none",
        })
      );

      // Ters çevirme oku (ham konumdan çevrilmiş konuma)
      if (row.changed && row.raw !== row.converted) {
        const xFrom = xForItemScore(row.raw);
        const xTo = xForItemScore(row.converted);
        const dir = xTo > xFrom ? 1 : -1;
        const midY = barY + barH / 2;

        nodes.push(
          makeSvg("line", {
            x1: xFrom,
            y1: midY,
            x2: xTo - dir * 7,
            y2: midY,
            stroke: "var(--anim-strong)",
            "stroke-width": 2,
          }),
          makeSvg("polygon", {
            points: `${xTo},${midY} ${xTo - dir * 8},${midY - 5} ${xTo - dir * 8},${midY + 5}`,
            fill: "var(--anim-strong)",
          }),
          makeSvg("circle", {
            cx: xFrom,
            cy: midY,
            r: 4,
            fill: "var(--anim-bg)",
            stroke: "var(--anim-amber)",
            "stroke-width": 2,
          })
        );
      }

      // Etkin değer uç noktası
      const activeX = xForItemScore(row.active);
      nodes.push(
        makeSvg("circle", {
          cx: activeX,
          cy: barY + barH / 2,
          r: 6,
          fill: barStroke,
        })
      );

      // Sağ sütun: formül ve puan metni
      nodes.push(
        makeSvg(
          "text",
          {
            x: 738,
            y: rowY + 26,
            "text-anchor": "end",
            fill: row.changed
              ? "var(--anim-teal)"
              : !model.reversed && row.reverse
                ? "var(--anim-amber)"
                : "var(--anim-strong)",
            "font-size": 14,
            "font-weight": "700",
          },
          row.formulaText
        )
      );
    });

    // Alt bölüm: Toplam puan sayı doğrusu (4–20) ve ortalama karşılığı (1,0–5,0)
    nodes.push(
      makeSvg("rect", {
        x: 10,
        y: 264,
        width: 740,
        height: 136,
        rx: 8,
        fill: "var(--anim-panel)",
        stroke: "var(--anim-border-strong)",
        "stroke-width": 1.2,
      }),
      makeSvg(
        "text",
        {
          x: 24,
          y: 288,
          fill: "var(--anim-strong)",
          "font-size": 13,
          "font-weight": "700",
        },
        "Ölçek Toplam Puanı (Aralık: 4–20) ve Ortalama Puan (Aralık: 1,0–5,0)"
      )
    );

    const exprText = model.reversed
      ? `Doğru toplam = ${model.rows.map((r) => r.converted).join(" + ")} = ${model.correctTotal}  (Ortalama = ${fmtMean(model.activeMean)})`
      : `Çevirmeden toplam = ${model.rows.map((r) => r.raw).join(" + ")} = ${model.rawTotal}  (Ortalama = ${fmtMean(model.activeMean)})`;

    nodes.push(
      makeSvg(
        "text",
        {
          x: 736,
          y: 288,
          "text-anchor": "end",
          fill: model.reversed ? "var(--anim-teal)" : "var(--anim-amber)",
          "font-size": 13,
          "font-weight": "700",
        },
        exprText
      )
    );

    const axisY = 342;
    nodes.push(
      makeSvg("line", {
        x1: TOTAL_X0,
        y1: axisY,
        x2: TOTAL_X1,
        y2: axisY,
        stroke: "var(--anim-border-strong)",
        "stroke-width": 3,
      })
    );

    const ticks = [
      { total: 4, label: "4 (En düşük · ort. 1,0)" },
      { total: 8, label: "8 (ort. 2,0)" },
      { total: 12, label: "12 (Orta · ort. 3,0)" },
      { total: 16, label: "16 (ort. 4,0)" },
      { total: 18, label: "18 (ort. 4,5)" },
      { total: 20, label: "20 (En yüksek · ort. 5,0)" },
    ];

    ticks.forEach((t) => {
      const tx = xForTotalScore(t.total);
      nodes.push(
        makeSvg("line", {
          x1: tx,
          y1: axisY - 6,
          x2: tx,
          y2: axisY + 6,
          stroke: "var(--anim-border-strong)",
          "stroke-width": 1.5,
        }),
        makeSvg(
          "text",
          {
            x: tx,
            y: axisY + 22,
            "text-anchor": "middle",
            fill: "var(--anim-text-2)",
            "font-size": 11,
            "font-weight": t.total === 12 || t.total === 18 ? "700" : "500",
          },
          String(t.total)
        )
      );
    });

    nodes.push(
      makeSvg(
        "text",
        {
          x: TOTAL_X0,
          y: axisY + 38,
          "text-anchor": "start",
          fill: "var(--anim-muted)",
          "font-size": 11,
        },
        "4 = En düşük yalnızlık (ort. 1,0)"
      ),
      makeSvg(
        "text",
        {
          x: xForTotalScore(12),
          y: axisY + 38,
          "text-anchor": "middle",
          fill: "var(--anim-muted)",
          "font-size": 11,
        },
        "12 = Orta düzey (ort. 3,0)"
      ),
      makeSvg(
        "text",
        {
          x: TOTAL_X1,
          y: axisY + 38,
          "text-anchor": "end",
          fill: "var(--anim-muted)",
          "font-size": 11,
        },
        "20 = En yüksek yalnızlık (ort. 5,0)"
      )
    );

    const rawX = xForTotalScore(model.rawTotal);
    const correctX = xForTotalScore(model.correctTotal);

    if (model.reversed) {
      // Çevirmeden kalan eski konum (kesikli halka) + kayma oku + doğru konum (dolgulu elmas/daire)
      const dir = correctX > rawX ? 1 : -1;
      nodes.push(
        makeSvg("line", {
          x1: rawX,
          y1: axisY - 18,
          x2: correctX - dir * 10,
          y2: axisY - 18,
          stroke: "var(--anim-teal)",
          "stroke-width": 2.5,
        }),
        makeSvg("polygon", {
          points: `${correctX - dir * 2},${axisY - 18} ${correctX - dir * 11},${axisY - 23} ${correctX - dir * 11},${axisY - 13}`,
          fill: "var(--anim-teal)",
        }),
        makeSvg("circle", {
          cx: rawX,
          cy: axisY,
          r: 8,
          fill: "var(--anim-bg)",
          stroke: "var(--anim-amber)",
          "stroke-width": 2,
          "stroke-dasharray": "3 2",
        }),
        makeSvg(
          "text",
          {
            x: rawX,
            y: axisY - 27,
            "text-anchor": "middle",
            fill: "var(--anim-amber)",
            "font-size": 11,
            "font-weight": "600",
          },
          `Çevirmeden: ${model.rawTotal}`
        ),
        makeSvg("circle", {
          cx: correctX,
          cy: axisY,
          r: 9,
          fill: "var(--anim-teal)",
          stroke: "var(--anim-bg)",
          "stroke-width": 2,
        }),
        makeSvg(
          "text",
          {
            x: correctX,
            y: axisY - 27,
            "text-anchor": "middle",
            fill: "var(--anim-teal)",
            "font-size": 12,
            "font-weight": "700",
          },
          `Doğru: ${model.correctTotal} (ort. ${fmtMean(model.activeMean)})`
        )
      );
    } else {
      // Yalnız çevirmeden toplam işaretli
      nodes.push(
        makeSvg("circle", {
          cx: rawX,
          cy: axisY,
          r: 9,
          fill: "var(--anim-amber)",
          stroke: "var(--anim-bg)",
          "stroke-width": 2,
        }),
        makeSvg(
          "text",
          {
            x: rawX,
            y: axisY - 18,
            "text-anchor": "middle",
            fill: "var(--anim-amber)",
            "font-size": 12,
            "font-weight": "700",
          },
          `Çevirmeden toplam: ${model.rawTotal} (ort. ${fmtMean(model.activeMean)})`
        )
      );
    }

    svg.replaceChildren(...nodes);
  }

  function update() {
    const step = STEPS[stepIndex];
    const model = computeModel(step.scenarioKey, step.reversed);

    btnK01.classList.toggle(
      "ters-puanlama-etkisi__senaryo-btn--aktif",
      step.scenarioKey === "k01"
    );
    btnHep5.classList.toggle(
      "ters-puanlama-etkisi__senaryo-btn--aktif",
      step.scenarioKey === "hep5"
    );
    btnK01.setAttribute(
      "aria-pressed",
      step.scenarioKey === "k01" ? "true" : "false"
    );
    btnHep5.setAttribute(
      "aria-pressed",
      step.scenarioKey === "hep5" ? "true" : "false"
    );

    btnPrev.disabled = stepIndex === 0;
    btnNext.disabled = stepIndex === STEPS.length - 1;
    btnFlip.textContent = step.reversed
      ? "Ham Puanlara Dön"
      : "Çevir (6 − ham)";

    stepCounter.textContent = `Adım ${stepIndex + 1} / ${STEPS.length}`;

    statusState.textContent = `${model.scenario.title} — ${
      step.reversed
        ? `Ters maddeler çevrildi (Toplam: ${model.rawTotal} → ${model.correctTotal})`
        : `Çevirmeden ham puanlar (Toplam: ${model.rawTotal})`
    }`;
    statusText.textContent = step.reversed
      ? model.scenario.reversedComment
      : model.scenario.rawComment;

    renderSvg(model);
  }

  btnK01.addEventListener("click", () => {
    stepIndex = 0;
    update();
  });

  btnHep5.addEventListener("click", () => {
    stepIndex = 2;
    update();
  });

  btnFlip.addEventListener("click", () => {
    const current = STEPS[stepIndex];
    const targetReversed = !current.reversed;
    const found = STEPS.findIndex(
      (s) =>
        s.scenarioKey === current.scenarioKey && s.reversed === targetReversed
    );
    if (found !== -1) {
      stepIndex = found;
      update();
    }
  });

  btnPrev.addEventListener("click", () => {
    if (stepIndex > 0) {
      stepIndex -= 1;
      update();
    }
  });

  btnNext.addEventListener("click", () => {
    if (stepIndex < STEPS.length - 1) {
      stepIndex += 1;
      update();
    }
  });

  btnReset.addEventListener("click", () => {
    stepIndex = initialScene === "hep5" ? 2 : 0;
    update();
  });

  update();
}
