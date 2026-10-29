---
title: "Dağılımın Biçimi ve Normal Dağılım"
subtitle: "PSİ 303 — Davranışsal İstatistik için Yazılım Uygulamaları"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-19
description: Simetri, sağa ve sola çarpıklık, tepe sayısı ve basıklık; çarpıklık ve basıklık katsayılarının okunması; normal dağılım, 68–95–99,7 kuralı ve z puanı.
execute:
  echo: false
---

## Aynı ortalama, aynı standart sapma

<svg viewBox="0 0 920 310" role="img" aria-label="Ortalaması 50 ve standart sapması 10 olan üç farklı dağılım biçimi: simetrik tek tepeli, sağa uzayan çarpık ve iki tepeli histogramlar" style="width:100%;max-height:360px">
  <style>
    .axis-line { stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; }
    .tick-line { stroke: currentColor; stroke-width: 1.2; }
    .tick-text { font-family: system-ui, -apple-system, sans-serif; font-size: 11px; fill: currentColor; text-anchor: middle; }
    .title-text { font-family: system-ui, -apple-system, sans-serif; font-size: 13px; font-weight: 600; fill: currentColor; text-anchor: middle; }
    .badge-bg { fill: currentColor; fill-opacity: 0.08; rx: 5px; }
    .badge-text { font-family: system-ui, -apple-system, sans-serif; font-size: 13px; font-weight: 700; fill: var(--anim-blue); text-anchor: middle; }
    .mean-line { stroke: var(--anim-red); stroke-width: 2; stroke-dasharray: 4 3; }
    .bar-sym { fill: var(--anim-blue); fill-opacity: 0.75; stroke: var(--anim-blue); stroke-width: 1; }
    .bar-skew { fill: var(--anim-amber); fill-opacity: 0.75; stroke: var(--anim-amber); stroke-width: 1; }
    .bar-bimod { fill: var(--anim-purple); fill-opacity: 0.75; stroke: var(--anim-purple); stroke-width: 1; }
  </style>
  <!-- PANEL 1: Simetrik ve Tek Tepeli -->
  <g id="panel-simetrik">
    <text x="160" y="32" class="title-text">1. Simetrik ve Tek Tepeli</text>
    <!-- Histogram Çubukları (Ortalama 50 civarında simetrik) -->
    <rect x="56"  y="196" width="26" height="14" class="bar-sym"/>
    <rect x="85"  y="166" width="26" height="44" class="bar-sym"/>
    <rect x="114" y="120" width="26" height="90" class="bar-sym"/>
    <rect x="143" y="70"  width="26" height="140" class="bar-sym"/>
    <rect x="172" y="120" width="26" height="90" class="bar-sym"/>
    <rect x="201" y="166" width="26" height="44" class="bar-sym"/>
    <rect x="230" y="196" width="26" height="14" class="bar-sym"/>
    <!-- Eksen çizgisi ve işaretleri -->
    <line x1="45" y1="210" x2="275" y2="210" class="axis-line"/>
    <line x1="69" y1="210" x2="69" y2="216" class="tick-line"/>
    <line x1="156" y1="210" x2="156" y2="216" class="tick-line"/>
    <line x1="243" y1="210" x2="243" y2="216" class="tick-line"/>
    <text x="69" y="230" class="tick-text">30</text>
    <text x="156" y="230" class="tick-text">50</text>
    <text x="243" y="230" class="tick-text">70</text>
    <!-- Ortalama göstergesi -->
    <line x1="156" y1="65" x2="156" y2="210" class="mean-line"/>
    <!-- Rozet: M = 50, SD = 10 -->
    <rect x="85" y="248" width="150" height="32" class="badge-bg"/>
    <text x="160" y="269" class="badge-text">M = 50, SD = 10</text>
  </g>
  <!-- PANEL 2: Sağa Uzayan (Çarpık) -->
  <g id="panel-saga-uzayan">
    <text x="460" y="32" class="title-text">2. Sağa Uzayan (Çarpık)</text>
    <!-- Histogram Çubukları (Tepe solda, sağa uzun kuyruk) -->
    <rect x="356" y="160" width="26" height="50" class="bar-skew"/>
    <rect x="385" y="70"  width="26" height="140" class="bar-skew"/>
    <rect x="414" y="112" width="26" height="98" class="bar-skew"/>
    <rect x="443" y="148" width="26" height="62" class="bar-skew"/>
    <rect x="472" y="174" width="26" height="36" class="bar-skew"/>
    <rect x="501" y="188" width="26" height="22" class="bar-skew"/>
    <rect x="530" y="198" width="26" height="12" class="bar-skew"/>
    <!-- Eksen çizgisi ve işaretleri -->
    <line x1="345" y1="210" x2="575" y2="210" class="axis-line"/>
    <line x1="369" y1="210" x2="369" y2="216" class="tick-line"/>
    <line x1="456" y1="210" x2="456" y2="216" class="tick-line"/>
    <line x1="543" y1="210" x2="543" y2="216" class="tick-line"/>
    <text x="369" y="230" class="tick-text">30</text>
    <text x="456" y="230" class="tick-text">50</text>
    <text x="543" y="230" class="tick-text">70</text>
    <!-- Ortalama çizgisi (Kuyruğa çekilmiş: 50 hizasında) -->
    <line x1="456" y1="65" x2="456" y2="210" class="mean-line"/>
    <!-- Rozet: M = 50, SD = 10 -->
    <rect x="385" y="248" width="150" height="32" class="badge-bg"/>
    <text x="460" y="269" class="badge-text">M = 50, SD = 10</text>
  </g>
  <!-- PANEL 3: İki Tepeli -->
  <g id="panel-iki-tepeli">
    <text x="760" y="32" class="title-text">3. İki Tepeli</text>
    <!-- Histogram Çubukları (İki tepe: 40 ve 60, ortada vadi) -->
    <rect x="656" y="180" width="26" height="30" class="bar-bimod"/>
    <rect x="685" y="85"  width="26" height="125" class="bar-bimod"/>
    <rect x="714" y="150" width="26" height="60" class="bar-bimod"/>
    <rect x="743" y="196" width="26" height="14" class="bar-bimod"/>
    <rect x="772" y="150" width="26" height="60" class="bar-bimod"/>
    <rect x="801" y="85"  width="26" height="125" class="bar-bimod"/>
    <rect x="830" y="180" width="26" height="30" class="bar-bimod"/>
    <!-- Eksen çizgisi ve işaretleri -->
    <line x1="645" y1="210" x2="875" y2="210" class="axis-line"/>
    <line x1="669" y1="210" x2="669" y2="216" class="tick-line"/>
    <line x1="756" y1="210" x2="756" y2="216" class="tick-line"/>
    <line x1="843" y1="210" x2="843" y2="216" class="tick-line"/>
    <text x="669" y="230" class="tick-text">30</text>
    <text x="756" y="230" class="tick-text">50</text>
    <text x="843" y="230" class="tick-text">70</text>
    <!-- Ortalama çizgisi (İki tepenin ortasındaki boşlukta: 50) -->
    <line x1="756" y1="65" x2="756" y2="210" class="mean-line"/>
    <!-- Rozet: M = 50, SD = 10 -->
    <rect x="685" y="248" width="150" height="32" class="badge-bg"/>
    <text x="760" y="269" class="badge-text">M = 50, SD = 10</text>
  </g>
</svg>

> Ortalama ve standart sapma bir dağılımı tam olarak anlatır mı?

::: {.notes}
Önceki iki notta bir dağılımı iki sayıyla özetlemeyi öğrendik: ortası nerede, değerler ortadan ne kadar uzaklaşıyor. Üç histogramın üçünde de bu iki sayı aynı (*M* ortalamayı, *SD* standart sapmayı gösterir; önceki notlardaki $\bar{x}$ ve $s$ ile aynı şeylerdir). Ama birinde değerler ortada toplanıp iki yana eşit biçimde azalıyor, ikincisinde değerlerin çoğu solda toplanmış ve sağa doğru uzun bir kuyruk var, üçüncüsünde ise iki ayrı yoğunlaşma var ve ortada neredeyse hiç kimse yok.

Bu fark, dağılımın biçimidir. Biçim, merkez ve yayılım ölçülerinin ne kadar güvenilir birer özet olduğunu da belirler: önceki notlarda gördüğümüz gibi, bir yana uzayan dağılımda ortalama kuyruğa çekilir, iki tepeli dağılımda ise kimseyi anlatmayabilir. Bu notun ilk yarısında biçimi tarif etmeyi ve ölçmeyi, ikinci yarısında da en önemli biçimi, normal dağılımı göreceğiz.
:::

---

## Simetri

<svg viewBox="0 0 680 340" role="img" aria-label="Simetrik tek tepeli histogram. Ortadan geçen kesikli dikey çizgide ortalama, medyan ve mod buluşur; sağ ve sol yarılar birbirinin ayna görüntüsüdür" style="width:100%;max-height:380px">
  <style>
    .axis-base { stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; }
    .tick-mark { stroke: currentColor; stroke-width: 1.2; }
    .label-text { font-family: system-ui, -apple-system, sans-serif; font-size: 12px; fill: currentColor; text-anchor: middle; }
    .center-line { stroke: var(--anim-red); stroke-width: 2.2; stroke-dasharray: 6 4; }
    .bar-rect { fill: var(--anim-blue); fill-opacity: 0.7; stroke: var(--anim-blue); stroke-width: 1.2; }
    .fold-arrow { fill: none; stroke: var(--anim-purple); stroke-width: 1.6; stroke-dasharray: 3 3; }
    .annotation-box { fill: currentColor; fill-opacity: 0.07; rx: 6px; }
    .main-title { font-family: system-ui, -apple-system, sans-serif; font-size: 14px; font-weight: 700; fill: var(--anim-red); text-anchor: middle; }
    .side-text { font-family: system-ui, -apple-system, sans-serif; font-size: 12px; font-weight: 600; fill: currentColor; fill-opacity: 0.85; text-anchor: middle; }
    .sub-note { font-family: system-ui, -apple-system, sans-serif; font-size: 11px; fill: currentColor; fill-opacity: 0.75; text-anchor: middle; }
  </style>
  <!-- Histogram Çubukları (Tam simetrik 9 sütun) -->
  <rect x="156" y="232" width="36" height="18" class="bar-rect"/>
  <rect x="197" y="205" width="36" height="45" class="bar-rect"/>
  <rect x="238" y="162" width="36" height="88" class="bar-rect"/>
  <rect x="279" y="115" width="36" height="135" class="bar-rect"/>
  <rect x="320" y="80"  width="40" height="170" class="bar-rect"/>
  <rect x="365" y="115" width="36" height="135" class="bar-rect"/>
  <rect x="406" y="162" width="36" height="88" class="bar-rect"/>
  <rect x="447" y="205" width="36" height="45" class="bar-rect"/>
  <rect x="488" y="232" width="36" height="18" class="bar-rect"/>
  <!-- Eksen Çizgisi ve İşaretleri -->
  <line x1="130" y1="250" x2="550" y2="250" class="axis-base"/>
  <line x1="174" y1="250" x2="174" y2="256" class="tick-mark"/>
  <line x1="256" y1="250" x2="256" y2="256" class="tick-mark"/>
  <line x1="340" y1="250" x2="340" y2="258" class="tick-mark"/>
  <line x1="424" y1="250" x2="424" y2="256" class="tick-mark"/>
  <line x1="506" y1="250" x2="506" y2="256" class="tick-mark"/>
  <text x="174" y="272" class="label-text">20</text>
  <text x="256" y="272" class="label-text">35</text>
  <text x="340" y="272" class="label-text" style="font-weight:700;">50</text>
  <text x="424" y="272" class="label-text">65</text>
  <text x="506" y="272" class="label-text">80</text>
  <!-- Merkez Simetri Çizgisi -->
  <line x1="340" y1="62" x2="340" y2="250" class="center-line"/>
  <!-- Üst Başlık / Merkez Ölçüleri Kutusu -->
  <rect x="200" y="20" width="280" height="34" class="annotation-box"/>
  <text x="340" y="42" class="main-title">Ortalama = Medyan = Mod</text>
  <!-- Ayna Yansıma Göstergeleri -->
  <path d="M 270 95 C 295 75, 315 75, 332 85" class="fold-arrow"/>
  <path d="M 410 95 C 385 75, 365 75, 348 85" class="fold-arrow"/>
  <text x="220" y="145" class="side-text">Sol Yarı</text>
  <text x="460" y="145" class="side-text">Sağ Yarı</text>
  <text x="460" y="162" class="sub-note">(Ayna görüntüsü)</text>
  <!-- Alt Açıklama -->
  <text x="340" y="312" class="label-text" style="font-size:12px; fill-opacity:0.85;">
    Ortadan katlandığında iki yarı birbiriyle tam çakışır
  </text>
</svg>

- Ortadan katlanınca iki yarı üst üste gelir.
- Tek tepeliyse: ortalama ≈ medyan ≈ mod
- Örnek: boy ve zekâ testi puanları

::: {.notes}
Bir dağılım ortadaki bir çizgiye göre ayna görüntüsü gibiyse simetriktir: ortanın sağındaki değerlerin dağılışı solundakilerin dağılışına benzer. Gerçek verilerde tam simetri neredeyse hiç görülmez; "yaklaşık simetrik" demek daha doğrudur.

Simetrik ve tek tepeli bir dağılımda üç merkez ölçüsü aynı noktaya düşer. Bu durumda ortalama ve standart sapma, dağılımı oldukça iyi özetler. İleride göreceğimiz pek çok test de verinin, ya da ortalamaların, yaklaşık simetrik olduğu varsayımına dayanır.
:::

---

## Çarpıklık: sağa ve sola, kuyruğa bakın

<svg viewBox="0 0 840 360" role="img" aria-label="Yan yana sağa ve sola çarpık iki histogram. Sağa çarpık dağılımda kuyruk sağdadır ve ortalama medyanı sağa çeker. Sola çarpık dağılımda kuyruk soldadır ve ortalama medyanı sola çeker" style="width:100%;max-height:400px">
  <style>
    .axis-base { stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; }
    .tick-line { stroke: currentColor; stroke-width: 1.2; }
    .tick-label { font-family: system-ui, -apple-system, sans-serif; font-size: 11px; fill: currentColor; text-anchor: middle; }
    .panel-head { font-family: system-ui, -apple-system, sans-serif; font-size: 14px; font-weight: 700; fill: currentColor; text-anchor: middle; }
    .example-label { font-family: system-ui, -apple-system, sans-serif; font-size: 11px; fill: currentColor; fill-opacity: 0.7; text-anchor: middle; }
    .bar-r { fill: var(--anim-amber); fill-opacity: 0.75; stroke: var(--anim-amber); stroke-width: 1; }
    .bar-l { fill: var(--anim-blue); fill-opacity: 0.75; stroke: var(--anim-blue); stroke-width: 1; }
    .line-mod { stroke: var(--anim-purple); stroke-width: 2; stroke-dasharray: 4 3; }
    .line-med { stroke: var(--anim-blue); stroke-width: 2; }
    .line-mean { stroke: var(--anim-red); stroke-width: 2; stroke-dasharray: 5 3; }
    .tail-arrow { stroke: currentColor; stroke-width: 2; fill: none; marker-end: url(#arrow-head); }
    .order-box { fill: currentColor; fill-opacity: 0.06; rx: 5px; }
    .order-text { font-family: system-ui, -apple-system, sans-serif; font-size: 12px; font-weight: 600; text-anchor: middle; }
  </style>
  <defs>
    <marker id="arrow-head" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="currentColor"/>
    </marker>
  </defs>
  <!-- PANEL 1: Sağa Çarpık (Pozitif Çarpık) -->
  <g id="panel-saga-carpik">
    <text x="210" y="28" class="panel-head">Sağa Çarpık (Pozitif)</text>
    <text x="210" y="45" class="example-label">Örnek: Gelir, tepki süresi</text>
    <!-- Histogram çubukları -->
    <rect x="75"  y="160" width="24" height="65" class="bar-r"/>
    <rect x="103" y="75"  width="24" height="150" class="bar-r"/>
    <rect x="131" y="110" width="24" height="115" class="bar-r"/>
    <rect x="159" y="145" width="24" height="80" class="bar-r"/>
    <rect x="187" y="172" width="24" height="53" class="bar-r"/>
    <rect x="215" y="190" width="24" height="35" class="bar-r"/>
    <rect x="243" y="202" width="24" height="23" class="bar-r"/>
    <rect x="271" y="211" width="24" height="14" class="bar-r"/>
    <rect x="299" y="217" width="24" height="8"  class="bar-r"/>
    <rect x="327" y="221" width="24" height="4"  class="bar-r"/>
    <!-- Eksen -->
    <line x1="65" y1="225" x2="365" y2="225" class="axis-base"/>
    <line x1="115" y1="225" x2="115" y2="231" class="tick-line"/>
    <line x1="215" y1="225" x2="215" y2="231" class="tick-line"/>
    <line x1="315" y1="225" x2="315" y2="231" class="tick-line"/>
    <text x="115" y="244" class="tick-label">Düşük</text>
    <text x="215" y="244" class="tick-label">Orta</text>
    <text x="315" y="244" class="tick-label">Yüksek</text>
    <!-- Mod, Medyan, Ortalama çizgileri -->
    <line x1="115" y1="70"  x2="115" y2="225" class="line-mod"/>
    <line x1="150" y1="100" x2="150" y2="225" class="line-med"/>
    <line x1="185" y1="120" x2="185" y2="225" class="line-mean"/>
    <!-- Kuyruk Oku -->
    <path d="M 230 150 L 335 150" class="tail-arrow"/>
    <text x="285" y="140" class="tick-label" style="font-weight:600;">Kuyruk sağda</text>
    <!-- Sıralama Kutusu -->
    <rect x="75" y="265" width="270" height="34" class="order-box"/>
    <text x="210" y="286" class="order-text" style="fill:currentColor;">
      <tspan fill="var(--anim-purple)">Mod</tspan> &lt;
      <tspan fill="var(--anim-blue)">Medyan</tspan> &lt;
      <tspan fill="var(--anim-red)">Ortalama</tspan>
    </text>
    <text x="210" y="322" class="tick-label" style="fill-opacity:0.85;">Kuyruk ortalamayı sağa (yukarı) çeker</text>
  </g>
  <!-- PANEL 2: Sola Çarpık (Negatif Çarpık) -->
  <g id="panel-sola-carpik">
    <text x="630" y="28" class="panel-head">Sola Çarpık (Negatif)</text>
    <text x="630" y="45" class="example-label">Örnek: Kolay sınav notları, yaşam doyumu</text>
    <!-- Histogram çubukları -->
    <rect x="489" y="221" width="24" height="4"  class="bar-l"/>
    <rect x="517" y="211" width="24" height="14" class="bar-l"/>
    <rect x="545" y="202" width="24" height="23" class="bar-l"/>
    <rect x="573" y="190" width="24" height="35" class="bar-l"/>
    <rect x="601" y="172" width="24" height="53" class="bar-l"/>
    <rect x="629" y="145" width="24" height="80" class="bar-l"/>
    <rect x="657" y="110" width="24" height="115" class="bar-l"/>
    <rect x="685" y="75"  width="24" height="150" class="bar-l"/>
    <rect x="713" y="160" width="24" height="65" class="bar-l"/>
    <rect x="741" y="215" width="24" height="10" class="bar-l"/>
    <!-- Eksen -->
    <line x1="475" y1="225" x2="775" y2="225" class="axis-base"/>
    <line x1="525" y1="225" x2="525" y2="231" class="tick-line"/>
    <line x1="625" y1="225" x2="625" y2="231" class="tick-line"/>
    <line x1="725" y1="225" x2="725" y2="231" class="tick-line"/>
    <text x="525" y="244" class="tick-label">Düşük</text>
    <text x="625" y="244" class="tick-label">Orta</text>
    <text x="725" y="244" class="tick-label">Yüksek</text>
    <!-- Ortalama, Medyan, Mod çizgileri -->
    <line x1="655" y1="120" x2="655" y2="225" class="line-mean"/>
    <line x1="690" y1="100" x2="690" y2="225" class="line-med"/>
    <line x1="697" y1="70"  x2="697" y2="225" class="line-mod"/>
    <!-- Kuyruk Oku -->
    <path d="M 610 150 L 505 150" class="tail-arrow"/>
    <text x="555" y="140" class="tick-label" style="font-weight:600;">Kuyruk solda</text>
    <!-- Sıralama Kutusu -->
    <rect x="495" y="265" width="270" height="34" class="order-box"/>
    <text x="630" y="286" class="order-text" style="fill:currentColor;">
      <tspan fill="var(--anim-red)">Ortalama</tspan> &lt;
      <tspan fill="var(--anim-blue)">Medyan</tspan> &lt;
      <tspan fill="var(--anim-purple)">Mod</tspan>
    </text>
    <text x="630" y="322" class="tick-label" style="fill-opacity:0.85;">Kuyruk ortalamayı sola (aşağı) çeker</text>
  </g>
</svg>

> **Çarpıklığın adı kuyruğun bulunduğu taraftan gelir, tepenin bulunduğu taraftan değil.**

::: {.notes}
Sağa çarpık bir dağılımda değerlerin büyük kısmı düşük taraftadır ve az sayıda yüksek değer sağa doğru uzanan bir kuyruk oluşturur. Gelir bunun klasik örneğidir: insanların çoğu orta ya da düşük gelirlidir, çok azı çok yüksek gelire sahiptir. Tepki süreleri de böyledir: bir tepkinin süresi belirli bir sınırın altına inemez, ama dikkatin dağıldığı denemelerde çok uzayabilir. Kuyruktaki büyük değerler ortalamayı yukarı çeker; 7. notta bunu görmüştük. Bu dersteki tek tepeli tipik örneklerde sağa çarpık bir dağılımda ortalama medyandan büyük çıkar.

Sola çarpık dağılım ayna görüntüsüdür: değerlerin çoğu yüksek taraftadır, az sayıda düşük değer sola doğru bir kuyruk oluşturur. Kolay bir sınavda öğrencilerin çoğu yüksek not alır, birkaç öğrenci çok düşük not alır; bu birkaç not ortalamayı aşağı çeker.
:::

---

## Çarpıklıkta ortalama ve medyan

| Tepe | Kuyruk | Ad | Ortalama ile medyan | Örnek |
|---|---|---|---|---|
| Solda | Sağda | Sağa çarpık (pozitif) | Genellikle ortalama > medyan | Gelir, tepki süresi |
| Sağda | Solda | Sola çarpık (negatif) | Genellikle ortalama < medyan | Kolay sınav notları, yaşam doyumu |

::: {.notes}
Çarpıklığın yönünde en sık yapılan hata, dağılımın "yığıldığı" tarafa bakmaktır. Gelir dağılımında değerler solda yığılır; ama bu dağılım sağa çarpıktır, çünkü kuyruk sağa uzanır. Kuyruk, dağılımın "çekildiği" yönü gösterir; ortalama da o yöne çekilir. Ortalama ile medyan arasındaki ilişki, grafik elimizde değilken bile kuyruğun yönü için ipucu verir: ortalama medyandan belirgin biçimde büyükse sağ tarafta bir kuyruk, küçükse sol tarafta bir kuyruk olması beklenir. 7. notta tepki süresinin ortalaması 620 ms, medyanı 540 ms çıkmıştı; ortalama büyük olduğu için dağılımın büyük olasılıkla sağa çarpık olduğunu söylemiştik. Ama ortalama medyandan büyükken histogram simetrik görünüyorsa kuyruğa güvenmeyiz; kuyruğu grafikten okuruz.
:::

---

## Tepe sayısı

<svg viewBox="0 0 840 340" role="img" aria-label="Tek tepeli ve iki tepeli yatış saati histogramları. Tek tepeli dağılım tek homojen grubu, iki tepeli dağılım gündüz ve gece çalışan iki farklı grubun karışımını gösterir" style="width:100%;max-height:380px">
  <style>
    .axis-line { stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; }
    .tick-line { stroke: currentColor; stroke-width: 1.2; }
    .tick-text { font-family: system-ui, -apple-system, sans-serif; font-size: 11px; fill: currentColor; text-anchor: middle; }
    .panel-head { font-family: system-ui, -apple-system, sans-serif; font-size: 14px; font-weight: 700; fill: currentColor; text-anchor: middle; }
    .panel-sub { font-family: system-ui, -apple-system, sans-serif; font-size: 11px; fill: currentColor; fill-opacity: 0.7; text-anchor: middle; }
    .bar-uni { fill: var(--anim-blue); fill-opacity: 0.75; stroke: var(--anim-blue); stroke-width: 1; }
    .bar-bim-day { fill: var(--anim-teal); fill-opacity: 0.75; stroke: var(--anim-teal); stroke-width: 1; }
    .bar-bim-night { fill: var(--anim-purple); fill-opacity: 0.75; stroke: var(--anim-purple); stroke-width: 1; }
    .annot-arrow { stroke: currentColor; stroke-width: 1.5; fill: none; marker-end: url(#arrow-point); }
    .annot-text { font-family: system-ui, -apple-system, sans-serif; font-size: 11px; font-weight: 600; fill: currentColor; }
    .info-card { fill: currentColor; fill-opacity: 0.06; rx: 5px; }
    .info-text { font-family: system-ui, -apple-system, sans-serif; font-size: 11px; fill: currentColor; text-anchor: middle; }
  </style>
  <defs>
    <marker id="arrow-point" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="currentColor"/>
    </marker>
  </defs>
  <!-- PANEL 1: Tek Tepeli (Unimodal) -->
  <g id="panel-tek-tepeli">
    <text x="210" y="28" class="panel-head">Tek Tepeli Dağılım</text>
    <text x="210" y="45" class="panel-sub">Tek homojen grup (Örn. genel çalışanlar)</text>
    <!-- Histogram çubukları -->
    <rect x="75"  y="195" width="30" height="25" class="bar-uni"/>
    <rect x="110" y="160" width="30" height="60" class="bar-uni"/>
    <rect x="145" y="115" width="30" height="105" class="bar-uni"/>
    <rect x="180" y="70"  width="30" height="150" class="bar-uni"/>
    <rect x="215" y="105" width="30" height="115" class="bar-uni"/>
    <rect x="250" y="160" width="30" height="60" class="bar-uni"/>
    <rect x="285" y="195" width="30" height="25" class="bar-uni"/>
    <!-- Eksen çizgisi ve işaretleri -->
    <line x1="65" y1="220" x2="345" y2="220" class="axis-line"/>
    <line x1="90" y1="220" x2="90" y2="225" class="tick-line"/>
    <line x1="160" y1="220" x2="160" y2="225" class="tick-line"/>
    <line x1="230" y1="220" x2="230" y2="225" class="tick-line"/>
    <line x1="300" y1="220" x2="300" y2="225" class="tick-line"/>
    <text x="90" y="240" class="tick-text">21:00</text>
    <text x="160" y="240" class="tick-text">23:00</text>
    <text x="230" y="240" class="tick-text">01:00</text>
    <text x="300" y="240" class="tick-text">03:00</text>
    <!-- Tepe Açıklaması -->
    <text x="195" y="60" class="annot-text" text-anchor="middle">Tek yoğunlaşma (~00:00)</text>
    <!-- Alt Bilgi Kartı -->
    <rect x="65" y="260" width="280" height="48" class="info-card"/>
    <text x="205" y="280" class="info-text" style="font-weight:600;">Tek bir merkez ölçüsü yeterlidir</text>
    <text x="205" y="297" class="info-text" style="fill-opacity:0.75;">Ortalama ve standart sapma güvenilir özet sunar</text>
  </g>
  <!-- PANEL 2: İki Tepeli (Bimodal) -->
  <g id="panel-iki-tepeli">
    <text x="630" y="28" class="panel-head">İki Tepeli Dağılım</text>
    <text x="630" y="45" class="panel-sub">Gündüz ve gece çalışanlarının karışımı</text>
    <!-- Histogram çubukları (1. Tepe: Gündüz; 2. Tepe: Gece) -->
    <rect x="475" y="170" width="26" height="50" class="bar-bim-day"/>
    <rect x="505" y="80"  width="26" height="140" class="bar-bim-day"/>
    <rect x="535" y="130" width="26" height="90" class="bar-bim-day"/>
    <rect x="565" y="195" width="26" height="25" fill="currentColor" fill-opacity="0.25" stroke="currentColor"/>
    <rect x="595" y="205" width="26" height="15" fill="currentColor" fill-opacity="0.25" stroke="currentColor"/>
    <rect x="625" y="195" width="26" height="25" fill="currentColor" fill-opacity="0.25" stroke="currentColor"/>
    <rect x="655" y="125" width="26" height="95" class="bar-bim-night"/>
    <rect x="685" y="85"  width="26" height="135" class="bar-bim-night"/>
    <rect x="715" y="165" width="26" height="55" class="bar-bim-night"/>
    <!-- Eksen çizgisi ve işaretleri -->
    <line x1="465" y1="220" x2="755" y2="220" class="axis-line"/>
    <line x1="488" y1="220" x2="488" y2="225" class="tick-line"/>
    <line x1="578" y1="220" x2="578" y2="225" class="tick-line"/>
    <line x1="668" y1="220" x2="668" y2="225" class="tick-line"/>
    <line x1="728" y1="220" x2="728" y2="225" class="tick-line"/>
    <text x="488" y="240" class="tick-text">21:00</text>
    <text x="578" y="240" class="tick-text">00:00</text>
    <text x="668" y="240" class="tick-text">03:00</text>
    <text x="728" y="240" class="tick-text">05:00</text>
    <!-- Tepe Okları ve Açıklamaları -->
    <text x="518" y="70" class="annot-text" style="fill:var(--anim-teal); text-anchor:middle;">1. Tepe: Gündüzcüler</text>
    <text x="698" y="75" class="annot-text" style="fill:var(--anim-purple); text-anchor:middle;">2. Tepe: Gece vardiyası</text>
    <!-- Alt Bilgi Kartı -->
    <rect x="475" y="260" width="300" height="48" class="info-card"/>
    <text x="625" y="280" class="info-text" style="font-weight:600; fill:var(--anim-red);">Tek ortalama yanıltıcıdır!</text>
    <text x="625" y="297" class="info-text" style="fill-opacity:0.75;">Grupları ayıran değişken bulunup ayrı betimlenmelidir</text>
  </g>
</svg>

- **Tek tepeli:** bir yoğunlaşma bölgesi
- **İki (çok) tepeli:** birden fazla yoğunlaşma; çoğunlukla karışmış gruplar
- Çözüm: grupları ayırıp ayrı ayrı betimlemek

::: {.notes}
Dağılımın kaç tepesi olduğu, verinin tek bir gruptan mı yoksa birkaç gruptan mı geldiğine dair ipucu verir. İki tepeli bir yatış saati dağılımı, erken yatanlarla geç yatanların aynı veri setinde bulunduğunu düşündürür.

Böyle bir dağılımı tek bir ortalama ve standart sapmayla özetlemek yanıltıcıdır. İkinci tepeyi fark ettiğinizde ilk sorulacak soru, bu iki grubu ayıran bir değişkenin (çalışma vardiyası, sınıf, cinsiyet) veride bulunup bulunmadığıdır. Bulunuyorsa grupları ayrı ayrı betimlemek, verinin söylediğini çok daha iyi anlatır.
:::

---

## Basıklık

<svg viewBox="0 0 840 370" role="img" aria-label="Aynı ortalama ve standart sapmaya sahip üç simetrik eğri: normal referans, ortası sivri ve kuyrukları kalın dağılım, ortası yayvan ve kuyrukları ince dağılım" style="width:100%;max-height:400px">
  <style>
    .axis-line { stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; }
    .tick-line { stroke: currentColor; stroke-width: 1.2; }
    .tick-text { font-family: system-ui, -apple-system, sans-serif; font-size: 11px; fill: currentColor; text-anchor: middle; }
    .curve-sharp { stroke: var(--anim-purple); stroke-width: 2.6; fill: none; }
    .curve-norm  { stroke: var(--anim-blue); stroke-width: 2.2; fill: none; stroke-dasharray: 6 3; }
    .curve-flat  { stroke: var(--anim-amber); stroke-width: 2.4; fill: none; }
    .center-ref  { stroke: currentColor; stroke-width: 1.2; stroke-dasharray: 3 3; stroke-opacity: 0.5; }
    .legend-box  { fill: currentColor; fill-opacity: 0.06; rx: 6px; }
    .legend-text { font-family: system-ui, -apple-system, sans-serif; font-size: 11px; fill: currentColor; }
    .callout-txt { font-family: system-ui, -apple-system, sans-serif; font-size: 11px; font-weight: 600; }
  </style>
  <!-- Gösterge Kartı (Lejant) -->
  <rect x="70" y="20" width="700" height="44" class="legend-box"/>
  <line x1="90" y1="42" x2="125" y2="42" class="curve-sharp"/>
  <text x="135" y="46" class="legend-text" style="font-weight:600;">Sivri &amp; Kalın Kuyruklu</text>
  <text x="255" y="46" class="legend-text" style="fill-opacity:0.7;">(Basıklık &gt; 0, Leptokurtik)</text>
  <line x1="400" y1="42" x2="435" y2="42" class="curve-norm"/>
  <text x="445" y="46" class="legend-text" style="font-weight:600;">Normal Referans</text>
  <text x="545" y="46" class="legend-text" style="fill-opacity:0.7;">(Basıklık = 0)</text>
  <line x1="630" y1="42" x2="665" y2="42" class="curve-flat"/>
  <text x="675" y="46" class="legend-text" style="font-weight:600;">Yayvan &amp; İnce Kuyruklu</text>
  <!-- Ortalama Merkez Çizgisi -->
  <line x1="420" y1="75" x2="420" y2="280" class="center-ref"/>
  <!-- EĞRİ 1: Sivri & Kalın Kuyruklu (Tepe yüksek ve dar; uç kuyruklar daha kalın) -->
  <path d="M 100 274 C 180 270, 290 260, 360 215 C 390 190, 405 75, 420 75 C 435 75, 450 190, 480 215 C 550 260, 660 270, 740 274" class="curve-sharp"/>
  <!-- EĞRİ 2: Normal Dağılım (Referans çan eğrisi) -->
  <path d="M 100 278 C 220 278, 320 250, 370 195 C 400 155, 408 128, 420 128 C 432 128, 440 155, 470 195 C 520 250, 620 278, 740 278" class="curve-norm"/>
  <!-- EĞRİ 3: Yayvan & İnce Kuyruklu (Tepe alçak ve yayvan; uçlar daha erken söner) -->
  <path d="M 120 280 C 260 280, 330 250, 365 205 C 395 168, 405 160, 420 160 C 435 160, 445 168, 475 205 C 510 250, 580 280, 720 280" class="curve-flat"/>
  <!-- Eksen -->
  <line x1="80" y1="280" x2="760" y2="280" class="axis-line"/>
  <line x1="180" y1="280" x2="180" y2="286" class="tick-line"/>
  <line x1="260" y1="280" x2="260" y2="286" class="tick-line"/>
  <line x1="340" y1="280" x2="340" y2="286" class="tick-line"/>
  <line x1="420" y1="280" x2="420" y2="288" class="tick-line"/>
  <line x1="500" y1="280" x2="500" y2="286" class="tick-line"/>
  <line x1="580" y1="280" x2="580" y2="286" class="tick-line"/>
  <line x1="660" y1="280" x2="660" y2="286" class="tick-line"/>
  <text x="180" y="302" class="tick-text">M − 3 SD</text>
  <text x="260" y="302" class="tick-text">M − 2 SD</text>
  <text x="340" y="302" class="tick-text">M − 1 SD</text>
  <text x="420" y="302" class="tick-text" style="font-weight:700;">M</text>
  <text x="500" y="302" class="tick-text">M + 1 SD</text>
  <text x="580" y="302" class="tick-text">M + 2 SD</text>
  <text x="660" y="302" class="tick-text">M + 3 SD</text>
  <!-- Açıklamalar ve Vurgular -->
  <text x="420" y="96" class="callout-txt" style="fill:var(--anim-purple); text-anchor:middle;">Sivri tepe</text>
  <text x="420" y="180" class="callout-txt" style="fill:var(--anim-amber); text-anchor:middle;">Yayvan tepe</text>
  <!-- Kuyruk Açıklamaları -->
  <text x="175" y="248" class="callout-txt" style="fill:var(--anim-purple); text-anchor:start;">Kalın kuyruk: uç değerler sık</text>
  <text x="665" y="248" class="callout-txt" style="fill:var(--anim-purple); text-anchor:end;">Kalın kuyruk: uç değerler sık</text>
  <text x="420" y="342" class="legend-text" style="text-anchor:middle; font-weight:600; fill-opacity:0.9;">
    Üç dağılımın da ortalaması (M) ve yayılımı (SD) aynıdır; fark değerlerin ortada ve kuyruklardaki payıdır
  </text>
</svg>

- Dağılımın kuyruklarının kalınlığıyla ilgilidir.
- **Kalın kuyruk:** uç değerler beklenenden sık
- **İnce kuyruk:** uç değerler seyrek
- Tepenin sivriliği katsayıdan değil histogramdan okunur

::: {.notes}
Basıklık, dağılımın kuyruklarının kalınlığıyla ilgili bir ipucudur. Aynı standart sapmaya sahip iki simetrik dağılımdan birinde değerlerin çoğu ortaya çok yakındır, ama ara sıra çok uç değerler de görülür (kalın kuyruk); ötekinde uç değerler seyrektir (ince kuyruk). Bu derste basıklığı sezgisel düzeyde tanımak yeterli.
:::

---

## Çıktıda çarpıklık ve basıklık

| Katsayı | 0 civarı | Pozitif | Negatif |
|---|---|---|---|
| Çarpıklık | Simetrik | Sağa çarpık | Sola çarpık |
| Basıklık | Normal benzeri | Kalın kuyruk (uç değerler sık) | İnce kuyruk |

Kaba bir yorum (çarpıklık katsayısı için): |katsayı| < 1 hafif; 1–2 belirgin; > 2 güçlü sapma.

> Katsayıyı **grafikle birlikte** okuyun.

::: {.notes}
Yazılımlar biçimi iki sayıyla özetler. Çarpıklık katsayısı simetrik bir dağılımda sıfıra yakındır; pozitif değerler sağa, negatif değerler sola çarpıklığı gösterir. jamovi ve SPSS'in verdiği basıklık katsayısı normal dağılımda sıfır olacak biçimde ayarlanmıştır; pozitif değer kuyrukların normalden kalın olduğuna, yani uç değerlerin beklenenden sık görüldüğüne işaret eder, negatif değer ince kuyruklara. Tepenin sivriliği katsayıdan değil histogramdan okunur.

Çarpıklık için kaba bir yorum: |katsayı| 1'den küçükse hafif, 1 ile 2 arasındaysa belirgin, 2'den büyükse güçlü sapmadır; bir sınırın hemen iki yanındaki katsayılar için kesin konuşmayız. Örneğin 0,4 hafif, 1,6 belirgin bir sağa çarpıklıktır. Basıklıkta yalnız işarete bakarız: +2,4 kalın kuyruk işaretidir, −0,5 hafifçe ince kuyruk. Küçük örneklemde katsayılar çok oynar, tek bir uç değer onu büyük ölçüde değiştirir ve iki tepeli bir dağılım sıfıra yakın bir çarpıklıkla görünebilir. Bu yüzden katsayı histogramla birlikte okunur.
:::

---

## Grafiği okuyalım

<svg viewBox="0 0 920 320" role="img" aria-label="Üç histogram ve çarpıklık katsayıları: A haftalık sosyal medya saatleri sağa çarpık katsayı 1,6; B yaşam doyumu sola çarpık katsayı eksi 0,9; C tepki doğruluğu yaklaşık simetrik katsayı 0,1" style="width:100%;max-height:360px">
  <style>
    .panel-bg { fill: currentColor; fill-opacity: 0.04; rx: 8px; }
    .panel-title { font-family: system-ui, -apple-system, sans-serif; font-size: 13px; font-weight: 700; fill: currentColor; }
    .axis-line { stroke: currentColor; stroke-width: 1.4; stroke-linecap: round; }
    .bar-a { fill: var(--anim-amber); fill-opacity: 0.75; stroke: var(--anim-amber); stroke-width: 1; }
    .bar-b { fill: var(--anim-blue); fill-opacity: 0.75; stroke: var(--anim-blue); stroke-width: 1; }
    .bar-c { fill: var(--anim-green); fill-opacity: 0.75; stroke: var(--anim-green); stroke-width: 1; }
    .badge-card { fill: currentColor; fill-opacity: 0.08; rx: 6px; }
    .badge-val { font-family: system-ui, -apple-system, sans-serif; font-size: 14px; font-weight: 700; text-anchor: middle; }
    .badge-desc { font-family: system-ui, -apple-system, sans-serif; font-size: 11px; fill: currentColor; text-anchor: middle; }
    .stat-tip { font-family: system-ui, -apple-system, sans-serif; font-size: 10px; fill: currentColor; fill-opacity: 0.75; text-anchor: middle; }
  </style>
  <!-- PANEL A: Haftalık Sosyal Medya Saatleri (Sağa Çarpık) -->
  <g id="panel-a">
    <rect x="20" y="15" width="275" height="290" class="panel-bg"/>
    <text x="35" y="40" class="panel-title">A: Sosyal Medya Süresi</text>
    <!-- Histogram çubukları (tepe solda, sağa uzayan kuyruk) -->
    <rect x="45"  y="120" width="24" height="60" class="bar-a"/>
    <rect x="73"  y="65"  width="24" height="115" class="bar-a"/>
    <rect x="101" y="95"  width="24" height="85" class="bar-a"/>
    <rect x="129" y="130" width="24" height="50" class="bar-a"/>
    <rect x="157" y="152" width="24" height="28" class="bar-a"/>
    <rect x="185" y="165" width="24" height="15" class="bar-a"/>
    <rect x="213" y="172" width="24" height="8"  class="bar-a"/>
    <rect x="241" y="176" width="24" height="4"  class="bar-a"/>
    <line x1="38" y1="180" x2="278" y2="180" class="axis-line"/>
    <!-- Katsayı ve Yorum Kartı -->
    <rect x="35" y="200" width="245" height="90" class="badge-card"/>
    <text x="157" y="222" class="badge-val" style="fill:var(--anim-amber);">Çarpıklık = +1,6</text>
    <text x="157" y="242" class="badge-desc" style="font-weight:600;">Belirgin sağa çarpık</text>
    <text x="157" y="260" class="stat-tip">Tepe solda, kuyruk sağda (Ortalama &gt; Medyan)</text>
    <text x="157" y="276" class="stat-tip" style="font-weight:600;">Rapor: Medyan ve Çeyrekler Açıklığı</text>
  </g>
  <!-- PANEL B: Yaşam Doyumu Puanları (Sola Çarpık) -->
  <g id="panel-b">
    <rect x="322" y="15" width="275" height="290" class="panel-bg"/>
    <text x="337" y="40" class="panel-title">B: Yaşam Doyumu</text>
    <!-- Histogram çubukları (tepe sağda, sola uzayan kuyruk) -->
    <rect x="348" y="176" width="24" height="4"  class="bar-b"/>
    <rect x="376" y="172" width="24" height="8"  class="bar-b"/>
    <rect x="404" y="165" width="24" height="15" class="bar-b"/>
    <rect x="432" y="152" width="24" height="28" class="bar-b"/>
    <rect x="460" y="130" width="24" height="50" class="bar-b"/>
    <rect x="488" y="95"  width="24" height="85" class="bar-b"/>
    <rect x="516" y="65"  width="24" height="115" class="bar-b"/>
    <rect x="544" y="120" width="24" height="60" class="bar-b"/>
    <line x1="340" y1="180" x2="580" y2="180" class="axis-line"/>
    <!-- Katsayı ve Yorum Kartı -->
    <rect x="337" y="200" width="245" height="90" class="badge-card"/>
    <text x="459" y="222" class="badge-val" style="fill:var(--anim-blue);">Çarpıklık = −0,9</text>
    <text x="459" y="242" class="badge-desc" style="font-weight:600;">Hafif / sınıra yakın sola çarpık</text>
    <text x="459" y="260" class="stat-tip">Tepe sağda, kuyruk solda (Ortalama &lt; Medyan)</text>
    <text x="459" y="276" class="stat-tip" style="font-weight:600;">Rapor: Medyan ve Çeyrekler Açıklığı</text>
  </g>
  <!-- PANEL C: Tepki Doğruluğu (Yaklaşık Simetrik) -->
  <g id="panel-c">
    <rect x="625" y="15" width="275" height="290" class="panel-bg"/>
    <text x="640" y="40" class="panel-title">C: Tepki Doğruluğu</text>
    <!-- Histogram çubukları (yaklaşık simetrik çan biçimi) -->
    <rect x="650" y="168" width="24" height="12" class="bar-c"/>
    <rect x="678" y="145" width="24" height="35" class="bar-c"/>
    <rect x="706" y="105" width="24" height="75" class="bar-c"/>
    <rect x="734" y="65"  width="24" height="115" class="bar-c"/>
    <rect x="762" y="100" width="24" height="80" class="bar-c"/>
    <rect x="790" y="142" width="24" height="38" class="bar-c"/>
    <rect x="818" y="168" width="24" height="12" class="bar-c"/>
    <line x1="643" y1="180" x2="883" y2="180" class="axis-line"/>
    <!-- Katsayı ve Yorum Kartı -->
    <rect x="640" y="200" width="245" height="90" class="badge-card"/>
    <text x="762" y="222" class="badge-val" style="fill:var(--anim-green);">Çarpıklık = +0,1</text>
    <text x="762" y="242" class="badge-desc" style="font-weight:600;">Yaklaşık simetrik (|k| &lt; 1)</text>
    <text x="762" y="260" class="stat-tip">İki yarı ayna görüntüsü (Ortalama ≈ Medyan)</text>
    <text x="762" y="276" class="stat-tip" style="font-weight:600;">Rapor: Ortalama ve Standart Sapma</text>
  </g>
</svg>

Her biri için: tepe nerede, kuyruk hangi yanda, ortalama medyandan büyük mü küçük mü, hangi merkez ve yayılım ölçüsü raporlanmalı?

::: {.notes}
A histogramında değerler solda yığılmış ve sağa doğru uzun bir kuyruk var; sağa çarpık bir dağılım. Ortalama büyük olasılıkla medyandan büyük olacaktır; özet için medyan ve çeyrekler açıklığı daha uygundur. Katsayının 1,6 olması bu okumayı doğrular.

B histogramında tepe sağda, kuyruk solda; sola çarpık. Ortalama büyük olasılıkla medyandan küçük olacaktır. Katsayı −0,9, hafif, ama 1'lik sınıra yakın bir sola çarpıklık gösteriyor.

C histogramı yaklaşık simetrik; katsayı sıfıra çok yakın. Ortalama ve standart sapma iyi bir özettir. Her histogramı bu dört soruyla okumak, biçimi bir alışkanlık hâline getirir.
:::

---

## Normal dağılım

<svg viewBox="0 0 820 350" role="img" aria-label="Çan biçimli normal eğri. Ortada ortalama çizgisi, eksende eksi 3, eksi 2, eksi 1, ortalama, artı 1, artı 2 ve artı 3 standart sapma işaretleri" style="width:100%;max-height:380px">
  <style>
    .axis-line { stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; }
    .tick-line { stroke: currentColor; stroke-width: 1.4; }
    .tick-label { font-family: system-ui, -apple-system, sans-serif; font-size: 11px; fill: currentColor; text-anchor: middle; }
    .curve-fill { fill: var(--anim-blue); fill-opacity: 0.15; }
    .curve-stroke { stroke: var(--anim-blue); stroke-width: 2.6; fill: none; stroke-linecap: round; }
    .center-mean { stroke: var(--anim-red); stroke-width: 2.2; stroke-dasharray: 6 4; }
    .sd-guide { stroke: currentColor; stroke-width: 1; stroke-dasharray: 3 3; stroke-opacity: 0.45; }
    .mean-badge { fill: var(--anim-red); rx: 4px; }
    .mean-badge-text { font-family: system-ui, -apple-system, sans-serif; font-size: 12px; font-weight: 700; fill: currentColor; text-anchor: middle; }
    .feature-title { font-family: system-ui, -apple-system, sans-serif; font-size: 14px; font-weight: 700; fill: currentColor; text-anchor: middle; }
    .feature-desc { font-family: system-ui, -apple-system, sans-serif; font-size: 11px; fill: currentColor; fill-opacity: 0.8; text-anchor: middle; }
  </style>
  <!-- Üst Başlık ve Tanım -->
  <text x="410" y="30" class="feature-title">Normal Dağılım Modeli (Çan Eğrisi)</text>
  <text x="410" y="48" class="feature-desc">Simetrik, tek tepeli ve iki yana doğru düzenli biçimde incelen kuramsal model</text>
  <!-- Eğri Altı Alan Dolgusu -->
  <path d="M 90 260
           C 150 260, 200 254, 240 240
           C 285 220, 325 175, 365 125
           C 390 92, 402 78, 410 78
           C 418 78, 430 92, 455 125
           C 495 175, 535 220, 580 240
           C 620 254, 670 260, 730 260
           Z" class="curve-fill"/>
  <!-- Standart Sapma Düşey İnceltme Çizgileri -->
  <line x1="155" y1="256" x2="155" y2="260" class="sd-guide"/>
  <line x1="240" y1="240" x2="240" y2="260" class="sd-guide"/>
  <line x1="325" y1="172" x2="325" y2="260" class="sd-guide"/>
  <line x1="495" y1="172" x2="495" y2="260" class="sd-guide"/>
  <line x1="580" y1="240" x2="580" y2="260" class="sd-guide"/>
  <line x1="665" y1="256" x2="665" y2="260" class="sd-guide"/>
  <!-- Merkez Ortalama Çizgisi -->
  <line x1="410" y1="78" x2="410" y2="260" class="center-mean"/>
  <!-- Normal Dağılım Eğrisi -->
  <path d="M 90 260
           C 150 260, 200 254, 240 240
           C 285 220, 325 175, 365 125
           C 390 92, 402 78, 410 78
           C 418 78, 430 92, 455 125
           C 495 175, 535 220, 580 240
           C 620 254, 670 260, 730 260" class="curve-stroke"/>
  <!-- Yatay Eksen -->
  <line x1="80" y1="260" x2="740" y2="260" class="axis-line"/>
  <!-- Eksen Çentikleri (Tick Marks) -->
  <line x1="155" y1="260" x2="155" y2="268" class="tick-line"/>
  <line x1="240" y1="260" x2="240" y2="268" class="tick-line"/>
  <line x1="325" y1="260" x2="325" y2="268" class="tick-line"/>
  <line x1="410" y1="260" x2="410" y2="272" class="tick-line" style="stroke:var(--anim-red); stroke-width:2;"/>
  <line x1="495" y1="260" x2="495" y2="268" class="tick-line"/>
  <line x1="580" y1="260" x2="580" y2="268" class="tick-line"/>
  <line x1="665" y1="260" x2="665" y2="268" class="tick-line"/>
  <!-- Eksen Standart Sapma Birim Etiketleri -->
  <text x="155" y="286" class="tick-label">M − 3 SD</text>
  <text x="240" y="286" class="tick-label">M − 2 SD</text>
  <text x="325" y="286" class="tick-label">M − 1 SD</text>
  <text x="410" y="286" class="tick-label" style="font-weight:700; font-size:12px; fill:var(--anim-red);">M (Ortalama)</text>
  <text x="495" y="286" class="tick-label">M + 1 SD</text>
  <text x="580" y="286" class="tick-label">M + 2 SD</text>
  <text x="665" y="286" class="tick-label">M + 3 SD</text>
  <!-- z Puanı Eksen İpuçları -->
  <text x="155" y="304" class="tick-label" style="fill-opacity:0.6;">z = −3</text>
  <text x="240" y="304" class="tick-label" style="fill-opacity:0.6;">z = −2</text>
  <text x="325" y="304" class="tick-label" style="fill-opacity:0.6;">z = −1</text>
  <text x="410" y="304" class="tick-label" style="fill:var(--anim-red); font-weight:600;">z = 0</text>
  <text x="495" y="304" class="tick-label" style="fill-opacity:0.6;">z = +1</text>
  <text x="580" y="304" class="tick-label" style="fill-opacity:0.6;">z = +2</text>
  <text x="665" y="304" class="tick-label" style="fill-opacity:0.6;">z = +3</text>
  <!-- Alt Dipnot -->
  <text x="410" y="335" class="feature-desc" style="font-weight:500;">
    Normal eğri yalnızca ortalama ve standart sapma bilinerek tam olarak çizilir
  </text>
</svg>

- Simetrik, tek tepeli, çan biçimli
- Ortalama = medyan = mod
- Yalnızca **ortalama** ve **standart sapma** ile tanımlanır

::: {.notes}
Normal dağılım, simetrik ve tek tepeli dağılımların özel bir türüdür: belirli bir matematiksel biçime sahip bir modeldir. Ortalaması ve standart sapması bilindiğinde eğrinin tamamı belirlenir. Bu yüzden normal dağılan bir değişken hakkında yalnızca iki sayıyla çok şey söylenebilir.

"Normal" modelin adıdır ve değer yargısı taşımaz; normal dağılmayan veri bozuk değildir. Gelir ve tepki süresi gibi değişkenler doğası gereği normal dağılmaz. Normal dağılım bir idealdir; gerçek veriler ona ancak yaklaşık olarak uyar. Boy, pek çok zekâ ve yetenek testinin puanları ve ölçüm hataları yaklaşık normal dağılan değişkenlere örnektir. Asıl önemi bir sonraki notta ortaya çıkacak: tek tek değerler normal dağılmasa bile yeterince büyük örneklemlerin ortalamaları normal dağılıma yaklaşır. İstatistiksel testlerin büyük kısmı bu yüzden normal dağılım üzerine kuruludur.
:::

---

## 68–95–99,7 kuralı

Normal dağılımda değerlerin yaklaşık:

| Aralık | Oran |
|---|---:|
| Ortalama ± 1 SD | %68 |
| Ortalama ± 2 SD | %95 |
| Ortalama ± 3 SD | %99,7 |

Zekâ testi (M = 100, SD = 15): %95'i 70 ile 130 arasında.

::: {.notes}
Normal dağılımın kullanışlı bir özelliği, standart sapmanın her zaman aynı oranları ayırmasıdır. Değerlerin yaklaşık üçte ikisi ortalamadan en fazla bir standart sapma uzaktadır; yaklaşık %95'i iki, neredeyse tamamı üç standart sapma içindedir.

Zekâ testleri ortalaması 100, standart sapması 15 olacak biçimde ölçeklenir. Kural, insanların yaklaşık %68'inin 85 ile 115, %95'inin 70 ile 130 arasında puan aldığını söyler. Dışarıda kalan %5 iki kuyruğa eşit paylaşılır; bu yüzden 130'un üstünde kabaca %2,5 (ince hesapla %2,3) kişi bulunur.

Bu kural yalnızca dağılım yaklaşık normal olduğunda geçerlidir. Sağa çarpık bir gelir dağılımında oranlar tutmaz: ortalama ± 1 SD aralığındaki oran %68'den belirgin biçimde farklı çıkar, çünkü ortalamadan bir SD aşağısı gerçek gelirlerin alt sınırına çok yakın kalır ve dışarıdaki pay yalnız üst kuyrukta toplanır. Bu yüzden bir değişkene kuralı uygulamadan önce histogramına bakarız.
:::

---

## z puanı: kaç standart sapma uzakta?

Bir öğrencinin iki sınavı: Kendi sınıfına göre hangi derste daha öndedir?

| Ders | Puan | Sınıf ortalaması | SD |
|---|---:|---:|---:|
| Matematik | 70 | 60 | 5 |
| Türkçe | 80 | 75 | 10 |

. . .

| Ders | z |
|---|---:|
| Matematik | (70 − 60) / 5 = **2,0** |
| Türkçe | (80 − 75) / 10 = **0,5** |

> Ham puanı yüksek olan Türkçe; sınıfına göre daha önde olduğu ders matematik.

Sözle: $z = (\text{puan} - \text{ortalama}) / \text{SD}$

$$
z = \frac{x - M}{SD}
$$

::: {.notes}
Farklı ölçeklerde ya da farklı gruplarda alınmış puanları karşılaştırmak için ham puanlar yanıltıcı olabilir. Türkçe puanı daha yüksek, ama Türkçe sınavında puanlar daha dağınık. Asıl soru şu: öğrenci kendi sınıfına göre hangi derste daha öndedir?

z puanı bu soruyu cevaplar: bir değerin ortalamadan kaç standart sapma uzakta olduğunu söyler. Formülü sözle okuyalım: puandan ortalamayı çıkar, sonucu standart sapmaya böl. Matematikte 70, ortalamanın iki standart sapma üstündedir; sınıfın büyük çoğunluğundan iyidir. Türkçede 80 ise ortalamanın yalnızca yarım standart sapma üstündedir. Ham puanı yüksek olan Türkçedir; ortalamasından daha çok SD uzaklaştığı, yani sınıfında daha önde olduğu ders matematiktir (iki sınav da yaklaşık normal dağılıyorsa). Pozitif z ortalamanın üstünü, negatif z altını, sıfır ortalamanın kendisini gösterir.

z puanı birimden bağımsızdır: puan, saat, kilogram fark etmeksizin "standart sapma cinsinden uzaklık" verir. Bu yüzden farklı ölçümleri ortak bir dile çevirir.
:::

---

## z ile oran: bir puan ne kadar sıra dışı?

Bir danışanın kaygı ölçeği puanı 52; norm grubunda M = 40, SD = 8.

$$
z = \frac{52 - 40}{8} = 1{,}5
$$

Normal dağılımda z = 1,5'in altında kalan oran ≈ **%93**

> Norm grubu yaklaşık normal dağılıyorsa, danışan grubun yaklaşık %93'ünden daha yüksek kaygı puanı almıştır.

::: {.notes}
Norm grubu, ölçeğin geliştirilirken puanlanan ve yorumda karşılaştırma ölçütü olan referans gruptur. Bir değişken yaklaşık normal dağılıyorsa z puanı, değerin dağılımın neresinde durduğunu yüzde olarak da söyler. Sütun yükseklikleri kişi sayısıysa oran, sütunun toplam içindeki payıdır; toplam alan 1 olacak biçimde ölçeklenince alanın kendisi orandır; normal eğri altındaki alan da aynı biçimde okunur. Eğrinin toplam alanı 1'dir (bütün kişiler) ve bir noktanın solunda kalan alan, o noktadan daha düşük değer alanların oranıdır. z = 1,5 için bu alan yaklaşık 0,93'tür: norm grubundaki kişilerin yaklaşık %93'ü bu danışandan daha düşük puan almıştır.
:::

---

## z puanı değişince alan nasıl değişir?

<div data-anim="custom" data-src="z-ve-alan.js" data-css="z-ve-alan.css"></div>

::: {.notes}
Bu notta oranlar hazır verilir (z = 1 için yaklaşık %84, 1,5 için %93, 2 için %98); önemli olan z değerini ve oranı doğru yorumlamaktır. Bir uyarı: bu yorum, norm grubundaki puanların yaklaşık normal dağıldığı varsayımına dayanır.
:::

---

## Her veri normal değildir

- Gelir, tepki süresi, sayım verileri çoğunlukla **çarpıktır**; bu veriyi bozuk yapmaz.
- z puanına çevirmek dağılımın **biçimini değiştirmez**; sağa çarpık bir dağılımın z puanları da sağa çarpıktır.
- Normal dağılıma dayalı oranlar (%68, %95) yalnızca dağılım **yaklaşık normalse** geçerlidir.

> Önce grafiğe bakın; sonra normal dağılım varsayımına güvenin.

::: {.notes}
Normal dağılımın kullanışlı olması, her verinin normal dağıldığı anlamına gelmez. Psikolojide ölçülen bazı değişkenler, özellikle tepki süresi, belirgin biçimde çarpık olabilir. z puanı yalnızca değerleri kaydırıp ölçekler; dağılımın biçimine dokunmaz. Sağa çarpık bir verinin z puanlarına çevrilmiş hâli de aynı ölçüde sağa çarpıktır ve "z = 2'nin üstünde yaklaşık %2,3 kişi vardır" gibi bir yorum burada yanlış olur.

Bir değişkenin normal dağılıp dağılmadığına ilk olarak histogramla bakılır. t-testi notunda bu kontrolü bir adım ileri götürüp normallik için özel bir grafiği ve çıktıları da okuyacağız.
:::

---

## Yazılımda biçim ve z puanı

**jamovi:**

- *Descriptives* → *Distribution*: *Skewness*, *Kurtosis*; *Plots*: *Histogram* (+ *Density*)
- z puanı: hesaplanmış değişken, `Z(kaygi)`

**SPSS:** *Analyze → Descriptive Statistics → Descriptives* → "*Save standardized values as variables*"

::: {.callout-note title="Görsel yer tutucu: Biçim çıktısı"}
**Tür:** ekran görüntüsü · **Gösterdiği:** jamovi Descriptives tablosunda çarpıklık ve basıklık satırları ve yoğunluk eğrisi eklenmiş histogram; yanında hesaplanmış z sütunu · **Öğrencinin görmesi gereken:** Katsayının ve grafiğin aynı ekranda birlikte okunması.
:::

::: {.notes}
jamovi'de çarpıklık ve basıklık katsayıları Descriptives analizinin dağılım seçeneklerinden eklenir.

z puanları yeni bir hesaplanmış değişken olarak eklenebilir; jamovi'nin `Z()` fonksiyonu her değerden sütunun ortalamasını çıkarıp standart sapmasına böler. Bu notta z'ye karşılık gelen oranlar hazır verilir. SPSS'te aynı iş Descriptives penceresindeki bir onay kutusuyla yapılır ve yeni sütun "Z" önekiyle eklenir.
:::

---

## Karar soruları

1. Bir değişkende ortalama 12, medyan 8. Dağılımın biçimi hakkında ne beklersiniz?
2. Bir öğrencinin z puanı −1. Bu ne anlama gelir?
3. Sosyal medya süresi verisi sağa çarpık. Bir araştırmacı "z > 2 olan öğrenciler en üst yaklaşık %2,3'tür" diyor. Doğru mu?
4. Bir histogramda iki belirgin tepe ve sıfıra yakın bir çarpıklık katsayısı görüyorsunuz. Dağılım normal mi?

::: {.notes}
1. Ortalama medyandan belirgin biçimde büyük; sağ tarafta ortalamayı yukarı çeken büyük değerler var. Sağa çarpık bir dağılım beklenir; histogramla doğrulanmalıdır.
2. Öğrencinin puanı, grubunun ortalamasından bir standart sapma aşağıdadır. Dağılım yaklaşık normalse öğrencilerin yaklaşık %16'sı bundan daha düşük puan almıştır.
3. Hayır. Yaklaşık %2,3 oranı (P(Z > 2) ≈ 0,0228) normal dağılıma özgüdür. Sağa çarpık bir dağılımda z > 2 bölgesindeki oran farklıdır; kesin oran verinin kendisinden sayılarak bulunmalıdır.
4. Hayır. Simetrik olabilir, ama iki tepeli bir dağılım normal değildir. Çarpıklık katsayısı sıfıra yakın çıkabilir, çünkü iki tepe birbirini dengeler.
:::

---

## Bu nottan kalanlar

- Biçim: **simetri**, **çarpıklık** (adı kuyruğun bulunduğu yandan), **tepe sayısı**, **basıklık**.
- Tek tepeli tipik örneklerde sağa çarpıkta ortalama genellikle medyandan büyük, sola çarpıkta küçüktür.
- Çarpıklık ve basıklık katsayıları **grafikle birlikte** okunur.
- **Normal dağılım:** simetrik, çan biçimli; ortalama ve SD ile tanımlanır; 68–95–99,7 yalnız yaklaşık normal dağılımda geçerlidir.
- **z puanı:** ortalamadan kaç SD uzakta; farklı ölçümleri karşılaştırır, biçimi değiştirmez.

**Sıradaki konu:** Tek tek puanlar yerine örneklem ortalamalarının dağılımına bakarsak ne görürüz?

::: {.notes}
Artık bir dağılımı üç yönden tarif edebiliyoruz: ortası, yayılımı ve biçimi. Normal dağılım ve z puanı ise tek bir değerin bu dağılım içinde ne kadar sıra dışı olduğunu söylememizi sağladı.

Sıradaki notta aynı soruyu bir üst düzeyde soracağız: bir değer yerine bir örneklem ortalaması ne kadar sıra dışı? Bu soru, ilk notta gördüğümüz örnekleme değişkenliğini ölçmeye ve "bu fark şans olabilir mi?" sorusunu cevaplamaya götürecek.
:::
