---
title: "Aynı Kişiler, İki Ölçüm: Eşleştirilmiş t-Testi"
subtitle: "PSİ 303 — Davranışsal İstatistik için Yazılım Uygulamaları"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-19
description: Eşleşmiş ölçümler; fark puanı; eşleştirilmiş t-testinin tek örneklem mantığıyla kurulması; eşleşmeyi yok sayan bağımsız testin neden uygun olmadığı; varsayım; jamovi çıktısı ve APA raporu.
execute:
  echo: false
---

## Gevşeme eğitimi işe yaradı mı?

Sekiz öğrenci, sınavdan önce dört haftalık gevşeme eğitimine katılıyor. Kaygı puanları eğitimden önce ve sonra ölçülüyor.

| Öğrenci | Önce | Sonra |
|---|---:|---:|
| K1 | 38 | 33 |
| K2 | 22 | 20 |
| K3 | 35 | 31 |
| K4 | 30 | 29 |
| K5 | 25 | 20 |
| K6 | 33 | 30 |
| K7 | 27 | 25 |
| K8 | 40 | 36 |
| ***M*** | **31,25** | **28,00** |

::: {.notes}
Bu kez iki ayrı grup yok; aynı sekiz kişi iki kez ölçülmüş. Ortalama kaygı puanı 31,25'ten 28'e düşmüş. Önceki notta öğrendiğimiz bağımsız örneklem t-testini burada kullanabilir miyiz?

Tabloya dikkatle bakın: bütün öğrencilerin puanı düşmüş, kimisinin 1, kimisinin 5 puan. Ama öğrenciler arasındaki farklar çok daha büyük: K2'nin başlangıç puanı 22, K8'inki 40. Bu iki tür farklılık, kişiden kişiye fark ve aynı kişide zamanla değişim, bu notun anahtarıdır.
:::

---

## Grafiği okuyalım

<svg viewBox="0 0 680 430" role="img" aria-label="Sekiz öğrencinin gevşeme eğitimi öncesi ve sonrası kaygı puanlarını gösteren çizgi grafiği. Sekiz çizginin tümü aşağı eğimli olup bireysel başlangıç puanları 22 ile 40 arasında değişmektedir." style="width:100%;max-height:440px">
  <!-- Başlık ve Açıklama -->
  <text x="340" y="30" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">Bireysel Değişim: Eğitim Öncesi ve Sonrası Kaygı Puanları</text>
  <text x="340" y="52" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.8">Her çizgi bir öğrenciyi gösterir · Sekiz öğrencinin tümünde kaygı puanı düşmüştür</text>
  <!-- Y Ekseni Izgara Çizgileri ve Değerleri (Aralık: 16 - 44) -->
  <g stroke="currentColor" stroke-opacity="0.15" stroke-dasharray="3 3">
    <line x1="160" y1="115" x2="520" y2="115"/>
    <line x1="160" y1="165" x2="520" y2="165"/>
    <line x1="160" y1="215" x2="520" y2="215"/>
    <line x1="160" y1="265" x2="520" y2="265"/>
    <line x1="160" y1="315" x2="520" y2="315"/>
  </g>
  <!-- Y Ekseni Ölçek Değerleri -->
  <g font-size="12" text-anchor="end" fill="currentColor" opacity="0.8">
    <text x="145" y="119">40</text>
    <text x="145" y="169">35</text>
    <text x="145" y="219">30</text>
    <text x="145" y="269">25</text>
    <text x="145" y="319">20</text>
    <text x="145" y="360" font-size="11">Kaygı</text>
  </g>
  <!-- Dikey Eksenler (Önce: x=210, Sonra: x=470) -->
  <line x1="210" y1="85" x2="210" y2="345" stroke="currentColor" stroke-width="2"/>
  <line x1="470" y1="85" x2="470" y2="345" stroke="currentColor" stroke-width="2"/>
  <!-- Eksen Başlıkları ve Ortalama Bilgileri -->
  <text x="210" y="370" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">Önce</text>
  <text x="210" y="390" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.85">Ortalama: 31,25</text>
  <text x="470" y="370" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">Sonra</text>
  <text x="470" y="390" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.85">Ortalama: 28,00</text>
  <!-- Öğrenci Çizgileri (8 Öğrenci: K1–K8) -->
  <!-- Formül: y = 355 - (puan - 16) * 10 -->
  <!-- K8: 40 -> 36 -->
  <line x1="210" y1="115" x2="470" y2="155" stroke="var(--anim-blue)" stroke-width="2.5"/>
  <circle cx="210" cy="115" r="4.5" fill="var(--anim-blue)"/>
  <circle cx="470" cy="155" r="4.5" fill="var(--anim-blue)"/>
  <text x="200" y="119" font-size="11" text-anchor="end" fill="currentColor">K8 (40)</text>
  <text x="480" y="159" font-size="11" text-anchor="start" fill="currentColor">36</text>
  <!-- K1: 38 -> 33 -->
  <line x1="210" y1="135" x2="470" y2="185" stroke="var(--anim-blue)" stroke-width="2.5"/>
  <circle cx="210" cy="135" r="4.5" fill="var(--anim-blue)"/>
  <circle cx="470" cy="185" r="4.5" fill="var(--anim-blue)"/>
  <text x="200" y="139" font-size="11" text-anchor="end" fill="currentColor">K1 (38)</text>
  <text x="480" y="189" font-size="11" text-anchor="start" fill="currentColor">33</text>
  <!-- K3: 35 -> 31 -->
  <line x1="210" y1="165" x2="470" y2="205" stroke="var(--anim-blue)" stroke-width="2.5"/>
  <circle cx="210" cy="165" r="4.5" fill="var(--anim-blue)"/>
  <circle cx="470" cy="205" r="4.5" fill="var(--anim-blue)"/>
  <text x="200" y="169" font-size="11" text-anchor="end" fill="currentColor">K3 (35)</text>
  <text x="480" y="209" font-size="11" text-anchor="start" fill="currentColor">31</text>
  <!-- K6: 33 -> 30 -->
  <line x1="210" y1="185" x2="470" y2="215" stroke="var(--anim-blue)" stroke-width="2.5"/>
  <circle cx="210" cy="185" r="4.5" fill="var(--anim-blue)"/>
  <circle cx="470" cy="215" r="4.5" fill="var(--anim-blue)"/>
  <text x="200" y="189" font-size="11" text-anchor="end" fill="currentColor">K6 (33)</text>
  <text x="480" y="219" font-size="11" text-anchor="start" fill="currentColor">30</text>
  <!-- K4: 30 -> 29 -->
  <line x1="210" y1="215" x2="470" y2="225" stroke="var(--anim-blue)" stroke-width="2.5"/>
  <circle cx="210" cy="215" r="4.5" fill="var(--anim-blue)"/>
  <circle cx="470" cy="225" r="4.5" fill="var(--anim-blue)"/>
  <text x="200" y="219" font-size="11" text-anchor="end" fill="currentColor">K4 (30)</text>
  <text x="480" y="229" font-size="11" text-anchor="start" fill="currentColor">29</text>
  <!-- K7: 27 -> 25 -->
  <line x1="210" y1="245" x2="470" y2="265" stroke="var(--anim-blue)" stroke-width="2.5"/>
  <circle cx="210" cy="245" r="4.5" fill="var(--anim-blue)"/>
  <circle cx="470" cy="265" r="4.5" fill="var(--anim-blue)"/>
  <text x="200" y="249" font-size="11" text-anchor="end" fill="currentColor">K7 (27)</text>
  <text x="480" y="269" font-size="11" text-anchor="start" fill="currentColor">25</text>
  <!-- K5: 25 -> 20 -->
  <line x1="210" y1="265" x2="470" y2="315" stroke="var(--anim-blue)" stroke-width="2.5"/>
  <circle cx="210" cy="265" r="4.5" fill="var(--anim-blue)"/>
  <text x="200" y="269" font-size="11" text-anchor="end" fill="currentColor">K5 (25)</text>
  <!-- K2: 22 -> 20 -->
  <line x1="210" y1="295" x2="470" y2="315" stroke="var(--anim-blue)" stroke-width="2.5"/>
  <circle cx="210" cy="295" r="4.5" fill="var(--anim-blue)"/>
  <circle cx="470" cy="315" r="4.5" fill="var(--anim-blue)"/>
  <text x="200" y="299" font-size="11" text-anchor="end" fill="currentColor">K2 (22)</text>
  <text x="480" y="319" font-size="11" text-anchor="start" fill="currentColor">20 (K2, K5)</text>
  <!-- Grup Ortalaması Çizgisi (31,25 -> 28,00) -->
  <line x1="210" y1="202.5" x2="470" y2="235" stroke="var(--anim-amber)" stroke-width="3.5" stroke-dasharray="6 4"/>
  <circle cx="210" cy="202.5" r="5.5" fill="var(--anim-amber)"/>
  <circle cx="470" cy="235" r="5.5" fill="var(--anim-amber)"/>
  <!-- Pedagojik Vurgu Kutusu / Açıklamalar -->
  <rect x="235" y="90" width="210" height="42" rx="6" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-opacity="0.2"/>
  <text x="340" y="106" font-size="11" font-weight="bold" text-anchor="middle" fill="currentColor">Kişiler arası başlangıç farkı büyük</text>
  <text x="340" y="122" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.85">22 ile 40 arasında geniş yayılım</text>
  <rect x="230" y="248" width="220" height="42" rx="6" fill="var(--anim-amber)" fill-opacity="0.1" stroke="var(--anim-amber)" stroke-opacity="0.3"/>
  <text x="340" y="264" font-size="11" font-weight="bold" text-anchor="middle" fill="var(--anim-amber)">Kişi içi değişim tutarlı</text>
  <text x="340" y="280" font-size="11" text-anchor="middle" fill="currentColor">Ortalama düşüş: 3,25 puan (tüm eğimler negatif)</text>
</svg>

Okuma: "Öğrencilerin başlangıç kaygı düzeyleri birbirinden çok farklı; ama sekizinin de puanı düşmüş ve düşüşler birbirine yakın (1 ile 5 puan arası)."

::: {.notes}
Eşleşmiş veriler için en öğretici grafik, her kişinin iki ölçümünü birleştiren çizgilerdir. Bu grafikte iki şey aynı anda görülür: çizgilerin hangi yükseklikte başladığı kişiler arasındaki farkı, çizgilerin eğimi ise kişinin kendi içindeki değişimini gösterir.

Burada çizgiler çok farklı yüksekliklerde başlıyor; ama hepsi aşağı iniyor ve eğimleri birbirine benziyor. Eğitim, herkesin kaygısını kendi başlangıç düzeyinden biraz aşağı çekmiş görünüyor. Bu grafiği iki ayrı histogram olarak çizseydik çizgileri, yani kimin kimle eşleştiğini kaybederdik.
:::

---

## Eşleşmiş ölçüm

> **Eşleşmiş (bağımlı) ölçümler:** Bir gruptaki her değerin öteki gruptaki belirli bir değerle eşleştiği ölçümler.

- Aynı kişinin önce–sonra ölçümü
- Aynı kişinin iki koşuldaki ölçümü (sabah / akşam dikkat testi)
- Eşleştirilmiş çiftler (ikizler, evli çiftler, yaş ve cinsiyete göre eşleştirilmiş katılımcılar)

::: {.notes}
Eşleşmiş ölçümlerde iki sütundaki değerler rastgele yan yana durmaz: her satır aynı kişiye ya da birbirine bağlı bir çifte aittir. "Bağımlı" burada ölçümlerin birbirine bağlı olması demektir, bağımlı değişkenle ilgisi yoktur. Bu yapı çeşitli araştırma desenlerinde ortaya çıkar. En yaygını aynı kişilerin bir müdahaleden önce ve sonra ölçülmesidir. Aynı kişilerin iki farklı koşulda ölçülmesi (örneğin sabah ve akşam yapılan bir dikkat testi) ya da birbirine benzeyen kişilerin çiftler hâlinde eşleştirilmesi de eşleşmiş veri üretir.

Veri tablosu notunda gördüğümüz geniş yazım burada işe yarar: bir satır bir kişi, iki ölçüm iki sütun. jamovi ve SPSS bu testi tam olarak bu biçimde bekler.
:::

---

## Fark puanı

| Öğrenci | Önce | Sonra | Fark (Önce − Sonra) |
|---|---:|---:|---:|
| K1 | 38 | 33 | 5 |
| K2 | 22 | 20 | 2 |
| K3 | 35 | 31 | 4 |
| K4 | 30 | 29 | 1 |
| K5 | 25 | 20 | 5 |
| K6 | 33 | 30 | 3 |
| K7 | 27 | 25 | 2 |
| K8 | 40 | 36 | 4 |

Farkların ortalaması **3,25**, standart sapması **1,49**

Yön, farkın alındığı **sıradan** okunur: Önce − Sonra → düşüş pozitif görünür.

::: {.notes}
Eşleştirilmiş t-testinin bütün fikri bu sütundadır. Her kişi için iki ölçüm arasındaki farkı alırız. Böylece her kişi kendi kontrolü olur: K2'nin başlangıç puanının düşük, K8'inkinin yüksek olması bu hesabı etkilemez; önemli olan her birinin ne kadar değiştiğidir.

Fark puanlarının ortalaması 3,25'tir: öğrencilerin kaygısı ortalama 3,25 puan düşmüştür. Bu, iki ortalama arasındaki farkın (31,25 − 28) aynısıdır. Ama fark puanlarının standart sapması yalnızca 1,49'dur; oysa ham puanların standart sapması 6,36 ve 5,86'dır. Kişiler arasındaki büyük farklılık, fark puanlarında ortadan kalkmıştır.

Farkın yönü, farkı hangi sırayla aldığımıza bağlıdır. Burada "önce − sonra" aldık, bu yüzden düşüş pozitif sayıyla görünüyor. "Sonra − önce" alsaydık fark −3,25, t ise negatif çıkardı. Negatif bir t "kötü sonuç" demek değildir; yön işaretten değil, farkın hangi sırayla alındığından okunur. Bu yüzden raporda ve yazılım çıktısında sırayı kontrol etmeliyiz.
:::

---

## Fark puanları üzerinde tek örneklem testi

H0: fark ortalaması = 0 (eğitim kaygıyı değiştirmiyor)

$$
SH_{\text{fark}} \approx 0{,}526 \text{ (yazılım çıktısı)}
\qquad
t = \frac{3{,}25}{0{,}526} \approx 6{,}18
$$

t(7) = 6,18, *p* < 0,001

> Eşleştirilmiş t-testi = fark puanları üzerinde, referans değeri 0 olan tek örneklem t-testi.

::: {.notes}
Fark puanlarını hesapladıktan sonra problem tanıdık hâle gelir: tek bir sütunumuz var ve ortalamasının sıfırdan farklı olup olmadığını soruyoruz. Bu tam olarak önceki notta öğrendiğimiz tek örneklem t-testidir; referans değer 8 saat yerine 0'dır.

Fark puanlarının standart hatası, yuvarlanmamış değerlerle yaklaşık 0,526'dır. Bu nedenle gösterimde 3,25 / 0,526 ≈ 6,18 bulunur. Ortalama düşüş, bu oynamanın altı katından fazladır. Serbestlik derecesi, fark puanı sayısının bir eksiği olan 7'dir. p değeri 0,001'in altındadır; sıfır hipotezi reddedilir: eğitim sonrasında kaygı puanları anlamlı olarak düşmüştür.
:::

---

## Aynı veri, yanlış test

Aynı sekiz kişinin puanlarını **iki ayrı grupmuş gibi** bağımsız t-testiyle karşılaştıralım. Sonuç nasıl değişir?

. . .

| Test | Fark | SH | t | *sd* | *p* |
|---|---:|---:|---:|---:|---:|
| Eşleştirilmiş | 3,25 | 0,526 | 6,18 | 7 | < 0,001 |
| Bağımsız (yanlış) | 3,25 | 3,06 | 1,06 | 14 | 0,306 |

> Aynı fark, bir testte açıkça anlamlı, ötekinde hiç anlamlı değil. Değişen paydadır: 3,25 / 0,526 ile 3,25 / 3,06.

::: {.notes}
Fark aynı, değişen paydadır: eşleştirilmiş test 3,25'i 0,526'ya böler, bağımsız test 3,06'ya. İki testin standart hatayı nasıl hesapladığı farklıdır. Bağımsız t-testi, farkı iki grubun ham puanlarındaki yayılıma göre değerlendirir. Bu veride ham puanlar 20 ile 40 arasında geniş bir aralığa yayılmıştır; 3,25 puanlık fark bu büyük yayılımın içinde kaybolur.

Eşleştirilmiş test ise farkı, fark puanlarının yayılımıyla karşılaştırır. Kişiden kişiye seviye farkları hesaptan çıktığı için yayılım küçüktür ve aynı 3,25 puan çok belirgin hâle gelir. İki ölçüm pozitif ilişkiliyse (bu veride öyle) eşleşmiş veriye bağımsız test uygulamak, bu yüzden gerçek bir etkiyi gözden kaçırma riskini artırır. Üstelik bağımsızlık varsayımı da ihlal edilmiş olur.
:::

---

## Eşleşme ne zaman fayda sağlar?

<svg viewBox="0 0 740 410" role="img" aria-label="Solda önce ve sonra puanlarının geniş aralıkta örtüştüğü ham puan dağılımı; sağda kişisel farklar çıkarıldığında tümü sıfırın üzerinde ve dar aralıkta toplanan fark puanı dağılımı." style="width:100%;max-height:440px">
  <!-- Başlık -->
  <text x="370" y="28" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">İki Tür Farklılık: Ham Puanlar vs. Fark Puanı</text>
  <text x="370" y="48" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.8">Kişiler arası seviye farkı çıkarıldığında değişimin kendisi belirgin hâle gelir</text>
  <!-- PANEL 1: Ham Puanlar (Bağımsız Bakış) -->
  <rect x="25" y="65" width="325" height="325" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.2" stroke-width="1.5"/>
  <text x="187" y="88" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">1. Ham Puanlar (Bağımsız Bakış)</text>
  <text x="187" y="104" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.75">Kişiler arası farklar dahil (SD ≈ 6)</text>
  <!-- Sol Panel Y Ekseni -->
  <line x1="75" y1="120" x2="75" y2="305" stroke="currentColor" stroke-width="1.5"/>
  <!-- Y Ticks (15-45 aralığı, y = 305 - (puan - 15)*6.5) -->
  <g font-size="11" text-anchor="end" fill="currentColor" opacity="0.8">
    <line x1="70" y1="142" x2="75" y2="142" stroke="currentColor"/>
    <text x="66" y="146">40</text>
    <line x1="70" y1="175" x2="75" y2="175" stroke="currentColor"/>
    <text x="66" y="179">35</text>
    <line x1="70" y1="207" x2="75" y2="207" stroke="currentColor"/>
    <text x="66" y="211">30</text>
    <line x1="70" y1="240" x2="75" y2="240" stroke="currentColor"/>
    <text x="66" y="244">25</text>
    <line x1="70" y1="272" x2="75" y2="272" stroke="currentColor"/>
    <text x="66" y="276">20</text>
  </g>
  <!-- Büyük Örtüşme Bölgesi Vurgusu (20–36 arası) -->
  <rect x="85" y="168" width="180" height="104" rx="5" fill="var(--anim-amber)" fill-opacity="0.1" stroke="var(--anim-amber)" stroke-dasharray="4 3"/>
  <text x="268" y="224" font-size="10" font-weight="bold" fill="var(--anim-amber)">Geniş Örtüşme</text>
  <text x="268" y="238" font-size="10" fill="var(--anim-amber)">(20–36)</text>
  <!-- Sol Panel Veri Noktaları (Önce: x=135, Sonra: x=215) -->
  <!-- Önce: 38, 22, 35, 30, 25, 33, 27, 40 -->
  <g fill="var(--anim-blue)">
    <circle cx="135" cy="155" r="4.5"/>
    <circle cx="135" cy="259" r="4.5"/>
    <circle cx="135" cy="175" r="4.5"/>
    <circle cx="135" cy="207" r="4.5"/>
    <circle cx="135" cy="240" r="4.5"/>
    <circle cx="135" cy="188" r="4.5"/>
    <circle cx="135" cy="227" r="4.5"/>
    <circle cx="135" cy="142" r="4.5"/>
  </g>
  <!-- Sonra: 33, 20(x2), 31, 29, 30, 25, 36 -->
  <g fill="var(--anim-teal)">
    <circle cx="215" cy="188" r="4.5"/>
    <circle cx="210" cy="272" r="4.5"/>
    <circle cx="220" cy="272" r="4.5"/>
    <circle cx="215" cy="201" r="4.5"/>
    <circle cx="215" cy="214" r="4.5"/>
    <circle cx="215" cy="207" r="4.5"/>
    <circle cx="215" cy="240" r="4.5"/>
    <circle cx="215" cy="168" r="4.5"/>
  </g>
  <!-- Sol Panel Ortalama Çizgileri -->
  <!-- Önce Ort = 31,25 (y=199) -->
  <line x1="115" y1="199" x2="155" y2="199" stroke="var(--anim-blue)" stroke-width="2.5"/>
  <!-- Sonra Ort = 28,00 (y=220) -->
  <line x1="195" y1="220" x2="235" y2="220" stroke="var(--anim-teal)" stroke-width="2.5"/>
  <!-- Sol Panel Sütun Etiketleri -->
  <text x="135" y="322" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">Önce</text>
  <text x="135" y="336" font-size="10" text-anchor="middle" fill="currentColor" opacity="0.8">Ort: 31,25</text>
  <text x="215" y="322" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">Sonra</text>
  <text x="215" y="336" font-size="10" text-anchor="middle" fill="currentColor" opacity="0.8">Ort: 28,00</text>
  <!-- Sol Panel İstatistik Kutusu -->
  <rect x="40" y="348" width="295" height="32" rx="4" fill="currentColor" fill-opacity="0.05"/>
  <text x="187" y="362" font-size="11" text-anchor="middle" fill="currentColor">Fark = 3,25 · SH = 3,06 · t(14) = 1,06</text>
  <text x="187" y="375" font-size="11" font-weight="bold" text-anchor="middle" fill="var(--anim-red)">p = 0,306 (Fark kayboldu)</text>
  <!-- PANEL 2: Fark Puanları (Eşleştirilmiş Bakış) -->
  <rect x="390" y="65" width="325" height="325" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.2" stroke-width="1.5"/>
  <text x="552" y="88" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">2. Fark Puanları (Eşleştirilmiş Bakış)</text>
  <text x="552" y="104" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.75">Kişiler arası fark silindi: Fark = Önce − Sonra</text>
  <!-- Sağ Panel Y Ekseni -->
  <line x1="440" y1="120" x2="440" y2="305" stroke="currentColor" stroke-width="1.5"/>
  <!-- Y Ticks (-1 ile 6 aralığı, y = 285 - fark*27) -->
  <g font-size="11" text-anchor="end" fill="currentColor" opacity="0.8">
    <line x1="435" y1="150" x2="440" y2="150" stroke="currentColor"/>
    <text x="431" y="154">5</text>
    <line x1="435" y1="177" x2="440" y2="177" stroke="currentColor"/>
    <text x="431" y="181">4</text>
    <line x1="435" y1="204" x2="440" y2="204" stroke="currentColor"/>
    <text x="431" y="208">3</text>
    <line x1="435" y1="231" x2="440" y2="231" stroke="currentColor"/>
    <text x="431" y="235">2</text>
    <line x1="435" y1="258" x2="440" y2="258" stroke="currentColor"/>
    <text x="431" y="262">1</text>
    <line x1="435" y1="285" x2="440" y2="285" stroke="currentColor"/>
    <text x="431" y="289">0</text>
  </g>
  <!-- Sıfır Referans Çizgisi (H0: Değişim yok) -->
  <line x1="440" y1="285" x2="675" y2="285" stroke="var(--anim-red)" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="680" y="289" font-size="11" font-weight="bold" fill="var(--anim-red)">0 (H₀)</text>
  <!-- Pozitif Değişim Alanı Vurgusu -->
  <rect x="475" y="138" width="150" height="135" rx="5" fill="var(--anim-green)" fill-opacity="0.08" stroke="var(--anim-green)" stroke-dasharray="4 3"/>
  <!-- Sağ Panel Veri Noktaları (Farklar: 1, 2, 2, 3, 4, 4, 5, 5; x=550 etrafında) -->
  <g fill="var(--anim-purple)">
    <!-- Fark = 1 -->
    <circle cx="550" cy="258" r="5"/>
    <!-- Fark = 2 (iki kişi: K2, K7) -->
    <circle cx="543" cy="231" r="5"/>
    <circle cx="557" cy="231" r="5"/>
    <!-- Fark = 3 -->
    <circle cx="550" cy="204" r="5"/>
    <!-- Fark = 4 (iki kişi: K3, K8) -->
    <circle cx="543" cy="177" r="5"/>
    <circle cx="557" cy="177" r="5"/>
    <!-- Fark = 5 (iki kişi: K1, K5) -->
    <circle cx="543" cy="150" r="5"/>
    <circle cx="557" cy="150" r="5"/>
  </g>
  <!-- Farkların Ortalaması: 3,25 (y = 285 - 3.25*27 = 197.25) -->
  <line x1="515" y1="197" x2="585" y2="197" stroke="var(--anim-amber)" stroke-width="3"/>
  <text x="595" y="201" font-size="11" font-weight="bold" fill="var(--anim-amber)">M = 3,25</text>
  <text x="550" y="322" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">Fark Puanı</text>
  <text x="550" y="336" font-size="10" text-anchor="middle" fill="currentColor" opacity="0.8">Tüm değerler sıfırın üstünde (1 ile 5)</text>
  <!-- Sağ Panel İstatistik Kutusu -->
  <rect x="405" y="348" width="295" height="32" rx="4" fill="currentColor" fill-opacity="0.05"/>
  <text x="552" y="362" font-size="11" text-anchor="middle" fill="currentColor">Fark = 3,25 · SH = 0,53 · t(7) = 6,18</text>
  <text x="552" y="375" font-size="11" font-weight="bold" text-anchor="middle" fill="var(--anim-green)">p &lt; 0,001 (Belirgin ve anlamlı etki)</text>
</svg>

Psikolojide kişiler arası farklar (zekâ, kişilik, başlangıç düzeyi) genellikle **büyüktür**; eşleştirme bu farkları hesaptan çıkarır.

Avantaj bir koşula bağlı: kişilerin iki ölçümdeki **sıralaması büyük ölçüde korunmalı**. Bunu tek sayıyla özetleyen *r*, iki ölçümün birlikte değişme derecesini −1 ile 1 arasında gösterir; burada *r* ≈ 0,97. Ölçümler ilişkisizse (*r* ≈ 0) eşleştirme avantaj sağlamaz; sıralama tersine dönerse zarar bile verebilir.

::: {.notes}
İnsanlar birbirinden çok farklıdır: başlangıç kaygı düzeyleri, tepki hızları, dikkat kapasiteleri. Bu kişiler arası farklılık, iki ayrı grubu karşılaştırırken "gürültü" gibi davranır ve küçük etkileri gizler. Aynı kişileri iki kez ölçtüğümüzde ise her kişi kendi karşılaştırma noktası olur ve bu gürültünün büyük kısmı ortadan kalkar.

Bu avantaj bir koşula bağlıdır: kişilerin iki ölçümdeki sıralaması büyük ölçüde korunmalıdır. Bu örnekte yüksek başlayan yüksek, düşük başlayan düşük kalıyor. Bunu tek sayıyla özetleyen r, iki ölçümün birlikte değişme derecesini −1 ile 1 arasında gösteren sayıdır. Burada r ≈ 0,97. Ölçümler ilişkisizse (r ≈ 0) eşleştirme bir avantaj sağlamaz; sıralama tersine dönerse eşleştirme zarar bile verebilir.

Eşleşmiş desenlerin kendi riskleri de vardır: ikinci ölçümde katılımcılar testi tanıyor olabilir (öğrenme etkisi) ya da zamanla kendiliğinden değişebilir. Gevşeme eğitimi örneğinde kaygının düşmesi sınavın yaklaşmasından ya da zamanla alışmadan da kaynaklanabilir. Kontrol grubu olmadan "eğitim kaygıyı düşürdü" demek için desen yeterli değildir; test yalnızca puanların anlamlı olarak düştüğünü söyler.
:::

---

## Varsayım ve etki büyüklüğü

- Normallik varsayımı **fark puanlarına** aittir (ham puanlara değil).
- Kontrol: fark puanlarının histogramı / Q–Q grafiği; küçük örneklemde dikkat.
- Fark puanları farklı kişilerden (ya da çiftlerden) geliyorsa birbirinden **bağımsız** olmalıdır.

<svg viewBox="0 0 740 390" role="img" aria-label="Sekiz fark puanının normallik varsayımı kontrolleri: Solda fark puanlarının histogramı, sağda tekrar eden 2, 4 ve 5 değerlerinin basamak oluşturduğu normal Q-Q grafiği." style="width:100%;max-height:430px">
  <!-- Genel Başlık -->
  <text x="370" y="28" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">Normallik Kontrolü: Fark Puanları (Önce − Sonra)</text>
  <text x="370" y="48" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.8">Eşleştirilmiş t-testinde varsayım ham puanlara değil, fark puanlarına aittir (n = 8)</text>
  <!-- PANEL 1: Histogram (Solda) -->
  <rect x="25" y="65" width="325" height="305" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.2" stroke-width="1.5"/>
  <text x="187" y="90" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Fark Puanları Histogramı</text>
  <text x="187" y="106" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.75">Değerler: 1, 2, 2, 3, 4, 4, 5, 5</text>
  <!-- Histogram Eksenleri -->
  <!-- Y Ekseni (Frekans 0-3): y=275'ten y=130'a -->
  <line x1="75" y1="130" x2="75" y2="275" stroke="currentColor" stroke-width="1.5"/>
  <line x1="75" y1="275" x2="315" y2="275" stroke="currentColor" stroke-width="1.5"/>
  <!-- Y Ticks (0, 1, 2, 3) -->
  <g font-size="11" text-anchor="end" fill="currentColor" opacity="0.8">
    <line x1="70" y1="275" x2="75" y2="275" stroke="currentColor"/>
    <text x="66" y="279">0</text>
    <line x1="70" y1="225" x2="75" y2="225" stroke="currentColor"/>
    <text x="66" y="229">1</text>
    <line x1="70" y1="175" x2="75" y2="175" stroke="currentColor"/>
    <text x="66" y="179">2</text>
    <line x1="70" y1="125" x2="75" y2="125" stroke="currentColor"/>
    <text x="66" y="129">3</text>
    <text x="70" y="112" font-size="10" text-anchor="middle">Frekans</text>
  </g>
  <!-- Histogram Çubukları (Fark puanları 1, 2, 3, 4, 5) -->
  <!-- Fark 1: Frekans 1 -->
  <rect x="95" y="225" width="35" height="50" fill="var(--anim-blue)" fill-opacity="0.35" stroke="var(--anim-blue)" stroke-width="2"/>
  <text x="112.5" y="217" font-size="11" font-weight="bold" text-anchor="middle" fill="currentColor">1</text>
  <!-- Fark 2: Frekans 2 -->
  <rect x="138" y="175" width="35" height="100" fill="var(--anim-blue)" fill-opacity="0.35" stroke="var(--anim-blue)" stroke-width="2"/>
  <text x="155.5" y="167" font-size="11" font-weight="bold" text-anchor="middle" fill="currentColor">2</text>
  <!-- Fark 3: Frekans 1 -->
  <rect x="181" y="225" width="35" height="50" fill="var(--anim-blue)" fill-opacity="0.35" stroke="var(--anim-blue)" stroke-width="2"/>
  <text x="198.5" y="217" font-size="11" font-weight="bold" text-anchor="middle" fill="currentColor">1</text>
  <!-- Fark 4: Frekans 2 -->
  <rect x="224" y="175" width="35" height="100" fill="var(--anim-blue)" fill-opacity="0.35" stroke="var(--anim-blue)" stroke-width="2"/>
  <text x="241.5" y="167" font-size="11" font-weight="bold" text-anchor="middle" fill="currentColor">2</text>
  <!-- Fark 5: Frekans 2 -->
  <rect x="267" y="175" width="35" height="100" fill="var(--anim-blue)" fill-opacity="0.35" stroke="var(--anim-blue)" stroke-width="2"/>
  <text x="284.5" y="167" font-size="11" font-weight="bold" text-anchor="middle" fill="currentColor">2</text>
  <!-- X Ticks -->
  <g font-size="12" text-anchor="middle" fill="currentColor">
    <text x="112.5" y="293">1</text>
    <text x="155.5" y="293">2</text>
    <text x="198.5" y="293">3</text>
    <text x="241.5" y="293">4</text>
    <text x="284.5" y="293">5</text>
    <text x="198.5" y="315" font-size="11" font-weight="bold">Fark Puanı (Önce − Sonra)</text>
  </g>
  <text x="187" y="348" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.85">Küçük örneklemde kaba simetri mevcut</text>
  <!-- PANEL 2: Q-Q Grafiği (Sağda) -->
  <rect x="390" y="65" width="325" height="305" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.2" stroke-width="1.5"/>
  <text x="552" y="90" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Normal Q–Q Grafiği</text>
  <text x="552" y="106" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.75">Basamaklar tekrar eden değerlerden kaynaklanır</text>
  <!-- Q-Q Eksenleri -->
  <!-- X Ekseni: Teorik z (-2 ile +2), Y Ekseni: Gözlenen Fark (0-6) -->
  <line x1="435" y1="120" x2="435" y2="280" stroke="currentColor" stroke-width="1.5"/>
  <line x1="435" y1="280" x2="685" y2="280" stroke="currentColor" stroke-width="1.5"/>
  <!-- Y Ticks (Gözlenen Fark: 1 - 5) -->
  <g font-size="11" text-anchor="end" fill="currentColor" opacity="0.8">
    <line x1="430" y1="254" x2="435" y2="254" stroke="currentColor"/>
    <text x="426" y="258">1</text>
    <line x1="430" y1="226" x2="435" y2="226" stroke="currentColor"/>
    <text x="426" y="230">2</text>
    <line x1="430" y1="198" x2="435" y2="198" stroke="currentColor"/>
    <text x="426" y="202">3</text>
    <line x1="430" y1="170" x2="435" y2="170" stroke="currentColor"/>
    <text x="426" y="174">4</text>
    <line x1="430" y1="142" x2="435" y2="142" stroke="currentColor"/>
    <text x="426" y="146">5</text>
    <text x="430" y="112" font-size="10" text-anchor="middle">Gözlenen</text>
  </g>
  <!-- X Ticks (Teorik Kuantil z: -2, -1, 0, 1, 2) -->
  <!-- Merkez z=0 x=560, her 1 z birimi = 52 px -->
  <g font-size="11" text-anchor="middle" fill="currentColor" opacity="0.8">
    <line x1="456" y1="280" x2="456" y2="285" stroke="currentColor"/>
    <text x="456" y="296">-2</text>
    <line x1="508" y1="280" x2="508" y2="285" stroke="currentColor"/>
    <text x="508" y="296">-1</text>
    <line x1="560" y1="280" x2="560" y2="285" stroke="currentColor"/>
    <text x="560" y="296">0</text>
    <line x1="612" y1="280" x2="612" y2="285" stroke="currentColor"/>
    <text x="612" y="296">1</text>
    <line x1="664" y1="280" x2="664" y2="285" stroke="currentColor"/>
    <text x="664" y="296">2</text>
    <text x="560" y="315" font-size="11" font-weight="bold">Teorik Kuantiller (z)</text>
  </g>
  <!-- Beklenen Normal Dağılım Doğrusu -->
  <!-- Line: Gözlenen = 3.25 + 1.49*z -->
  <line x1="465" y1="264" x2="655" y2="126" stroke="var(--anim-amber)" stroke-width="2" stroke-dasharray="5 4"/>
  <!-- Q-Q Noktaları (Tekrar eden 2, 4, 5 basamakları) -->
  <!-- k=1 (val=1, z=-1.53 -> x=480, y=254) -->
  <circle cx="480" cy="254" r="5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.2"/>
  <!-- k=2,3 (val=2, z=-0.89 -> x=514; z=-0.49 -> x=535, y=226) -->
  <line x1="514" y1="226" x2="535" y2="226" stroke="var(--anim-blue)" stroke-width="2"/>
  <circle cx="514" cy="226" r="5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="535" cy="226" r="5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.2"/>
  <text x="546" y="234" font-size="10" font-weight="bold" fill="var(--anim-blue)">Basamak (2 tekrarı)</text>
  <!-- k=4 (val=3, z=-0.16 -> x=552, y=198) -->
  <circle cx="552" cy="198" r="5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.2"/>
  <!-- k=5,6 (val=4, z=+0.16 -> x=568; z=+0.49 -> x=585, y=170) -->
  <line x1="568" y1="170" x2="585" y2="170" stroke="var(--anim-blue)" stroke-width="2"/>
  <circle cx="568" cy="170" r="5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="585" cy="170" r="5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.2"/>
  <text x="597" y="174" font-size="10" font-weight="bold" fill="var(--anim-blue)">Basamak (4 tekrarı)</text>
  <!-- k=7,8 (val=5, z=+0.89 -> x=606; z=+1.53 -> x=640, y=142) -->
  <line x1="606" y1="142" x2="640" y2="142" stroke="var(--anim-blue)" stroke-width="2"/>
  <circle cx="606" cy="142" r="5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="640" cy="142" r="5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.2"/>
  <text x="650" y="146" font-size="10" font-weight="bold" fill="var(--anim-blue)">Basamak (5 tekrarı)</text>
  <text x="552" y="348" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.85">Noktalar doğruyu izler; belirgin çarpıklık yoktur</text>
</svg>

Etki büyüklüğü:

$$
d = \frac{\text{farkların ortalaması}}{\text{farkların SD'si}} = \frac{3{,}25}{1{,}49} \approx 2{,}18
$$

*d* ≈ 2,2: ortalama düşüş, düşüşlerin yayılımının yaklaşık 2,2 katı. Eşleşmiş *d*, bağımsız gruplardaki *d* ile doğrudan karşılaştırılmaz.

::: {.notes}
Eşleştirilmiş t-testi, fark puanlarının yaklaşık normal dağıldığını varsayar. "Önce" ve "sonra" puanlarının ayrı ayrı normal olup olmadığı burada asıl soru değildir; testin üzerinde çalıştığı tek sütun fark puanlarıdır. Sekiz kişilik bir örneklemde bu varsayım önemlidir ve fark puanlarının histogramı ve Q–Q grafiğiyle kontrol edilmelidir. Bu sekiz farkta 2, 4 ve 5 ikişer kez görüldüğü için Q–Q grafiğinde noktalar basamak gibi dizilir; bu basamaklar çarpıklıktan değil, değerlerin tekrar etmesinden gelir. Sekiz gözlemle grafik yalnızca büyük sapmaları gösterebilir; burada belirgin bir sapma yok. Bir koşul daha var: fark puanları farklı kişilerden (ya da farklı eşleşmiş çiftlerden) geliyorsa birbirinden bağımsız olmalıdır. Bir kişinin iki ölçümü birbirine bağlıdır ve bu yüzden fark aldık; ama K1'in farkı ile K2'nin farkı birbirini etkilememelidir.

Etki büyüklüğü de fark puanları üzerinden hesaplanır: ortalama farkın, farkların standart sapmasına oranı. Ortalama düşüş, düşüşlerin kendi yayılımının yaklaşık 2,2 katıdır; kaba ölçütlere göre çok büyük bir etki. Ama fark puanlarının yayılımı küçük olduğu için eşleşmiş desenlerde d genellikle büyük çıkar; 0,2 · 0,5 · 0,8 ölçütleri burada yalnız kaba yön gösterir ve bu d bağımsız gruplardaki d ile doğrudan karşılaştırılmaz.
:::

---

## jamovi'de eşleştirilmiş t-testi

*T-Tests → Paired Samples T-Test*

- *Paired Variables*: `kaygi_once` ↔ `kaygi_sonra` (geniş biçim)
- *Additional Statistics*: Mean difference, Effect size, Confidence interval, Descriptives, Descriptives plots
- *Assumption Checks*: Normality (fark puanları için), Q–Q plot

::: {.callout-note title="Görsel yer tutucu: Eşleştirilmiş test çıktısı"}
**Tür:** ekran görüntüsü · **Gösterdiği:** jamovi Paired Samples T-Test çıktısı: test tablosu (t, df, p, ortalama fark, Cohen's d, güven aralığı), iki ölçümün betimsel istatistikleri ve normallik kontrolü · **Öğrencinin görmesi gereken:** Değişkenlerin çift olarak eşleştirildiği ve normallik kontrolünün farklar üzerinde yapıldığı.
:::

::: {.notes}
jamovi'de eşleştirilmiş t-testi için iki ölçüm yan yana iki sütunda durmalıdır; her satır bir kişidir. Değişkenler "Paired Variables" alanına bir çift olarak taşınır. Birden fazla çift aynı pencerede test edilebilir.

Çiftin sırası farkın yönünü belirler; çıktıda ortalama farkın işaretine bakarak hangi sırayla alındığını kontrol etmek gerekir. Çıktıda ortalama farkın ve güven aralığının yanında etki büyüklüğü de istenebilir. Normallik kontrolü, jamovi'de fark puanları üzerinde yapılır; ayrıca bir fark sütunu hesaplamanız gerekmez.
:::

---

## Raporlamak

> Gevşeme eğitimi sonrasında öğrencilerin kaygı puanları (*M* = 28,00, *SD* = 5,86), eğitim öncesine göre (*M* = 31,25, *SD* = 6,36) anlamlı olarak düşüktü, *t*(7) = 6,18, *p* < 0,001, *d* = 2,18. Önce − sonra ortalama farkı 3,25 puandı; bu fark için %95 GA [2,01; 4,49] puan. Kontrol grubu bulunmadığından düşüş eğitime bağlanamaz.

Aralık 0'ı içermez; sıfır fark hipotezinin reddiyle uyumludur.

::: {.notes}
Rapor yine dört öğeyi birlikte verir: iki ölçümün betimsel istatistikleri, test istatistiği ve serbestlik derecesi, p değeri ve etki büyüklüğü. Buradaki aralık, "önce − sonra" olarak tanımlanan evren ortalama farkı için makul değerleri gösterir; 2,01–4,49 puanlık düşüş yönündedir. Sıfır aralıkta olmadığı için bu yorum, *p* < 0,001 sonucunda sıfır fark hipotezinin reddedilmesiyle uyumludur. Tek bir %95 aralığı, evren farkının içinde bulunma olasılığının %95 olduğu anlamına gelmez.
:::

---

## Karar soruları

1. Aynı 30 öğrencinin dikkat testi puanları sabah ve akşam ölçülmüş. Hangi test?
2. 15 ikizden biri müzikle, öteki sessiz ortamda çalışıyor. Hangi test?
3. 40 öğrenci rastgele iki gruba ayrılıyor; 20'si bir yöntemle, 20'si ötekiyle ders görüyor ve öğrencilerin ölçümleri birbirinden bağımsız. Hangi test?
4. Eşleşmiş bir veride normallik varsayımını kontrol etmek için hangi değişkenin grafiğine bakarsınız?

::: {.notes}
1. Eşleştirilmiş t-testi: aynı kişiler iki koşulda ölçülmüş.
2. Eşleştirilmiş t-testi: ikizler çiftler hâlinde eşleşmiştir; her çiftin iki üyesi farklı koşulda. Eşleşme kişi düzeyinde değil çift düzeyindedir ama mantık aynıdır.
3. Bağımsız örneklem t-testi: öğrenciler bireysel olarak iki gruba atanmış, her öğrenci yalnızca bir yöntemi görmüş ve gözlemler birbirinden bağımsız. Varsayımları ve Welch seçeneğini unutmayın.
4. Fark puanlarının (önce − sonra) grafiğine. Test fark puanları üzerinde çalışır.
:::

---

## Bu nottan kalanlar

- **Eşleşmiş ölçüm:** her değer öteki koşuldaki belirli bir değerle eşleşir (aynı kişi, eşleştirilmiş çift).
- **Fark puanı** her kişiyi kendi kontrolü yapar; kişiler arası farklılık hesaptan çıkar.
- Eşleştirilmiş t-testi = fark puanları üzerinde **0'a karşı tek örneklem t-testi**.
- Eşleşmiş veriye bağımsız test uygulamak gerçek bir değişimi **gizleyebilir** ve varsayımı ihlal eder.
- Normallik **fark puanlarında** kontrol edilir; desenin sınırları (kontrol grubu yokluğu) yorumda belirtilir.

**Sıradaki konu:** İkiden fazla grup olunca ne yapacağız?

::: {.notes}
Artık iki ortalamayı karşılaştırmanın üç durumunu biliyoruz: bir ortalama ile sabit bir değer, iki bağımsız grup ve eşleşmiş iki ölçüm. Doğru testi seçmek için sorulacak soru her zaman aynıdır: veriler nasıl toplandı? Aynı kişiler mi, farklı kişiler mi?

Peki üç ya da dört grup olduğunda ne yapacağız? Her çifti ayrı ayrı t-testiyle karşılaştırmak ilk akla gelen yoldur; sıradaki notta bunun neden bir sorun yarattığını ve varyans analizinin bu soruna nasıl cevap verdiğini göreceğiz.
:::
