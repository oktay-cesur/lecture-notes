---
title: "Tipik Değer: Merkezî Eğilim Ölçüleri"
subtitle: "PSİ 303 — Davranışsal İstatistik için Yazılım Uygulamaları"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-19
description: Ortalama, medyan ve mod; elle hesap ve yazılım çıktısı; uç değerlere duyarlılık; grafikte üç ölçünün yeri; ölçme düzeyine ve dağılıma göre seçim; raporlama.
execute:
  echo: false
---

## Dağılımın ortası nerede?

Önceki nottaki elli öğrencinin haftalık çalışma saatleri:

<svg viewBox="0 0 680 360" role="img" aria-label="Elli öğrencinin haftalık çalışma saatleri histogramı; 4 saatlik aralıklarla değerler 0 ile 24 saat arasında dağılmakta, en yüksek sütun 20 öğrenciyle 8-12 saat aralığındadır" style="width:100%;max-height:440px">
  <text x="355" y="30" font-size="14" font-weight="600" text-anchor="middle" fill="var(--anim-amber)">En yoğun aralık: 8–12 saat (20 öğrenci) — Dağılımın "ortası" tam neresi?</text>
  <path d="M 260 44 L 260 38 L 355 38 L 355 44" fill="none" stroke="var(--anim-amber)" stroke-width="1.5"/>
  <path d="M 307.5 38 L 307.5 48" fill="none" stroke="var(--anim-amber)" stroke-width="1.5"/>
  <line x1="70" y1="240" x2="640" y2="240" stroke="var(--anim-border)" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="70" y1="190" x2="640" y2="190" stroke="var(--anim-border)" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="70" y1="140" x2="640" y2="140" stroke="var(--anim-border)" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="70" y1="90" x2="640" y2="90" stroke="var(--anim-border)" stroke-width="1" stroke-dasharray="3 3"/>
  <!-- 0-4 saat: 2 öğrenci -->
  <rect x="70" y="270" width="95" height="20" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="2"/>
  <text x="117.5" y="262" font-size="14" font-weight="600" text-anchor="middle" fill="var(--anim-blue)">2</text>
  <!-- 4-8 saat: 14 öğrenci -->
  <rect x="165" y="150" width="95" height="140" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="2"/>
  <text x="212.5" y="142" font-size="14" font-weight="600" text-anchor="middle" fill="var(--anim-blue)">14</text>
  <!-- 8-12 saat: 20 öğrenci -->
  <rect x="260" y="90" width="95" height="200" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="2"/>
  <text x="307.5" y="82" font-size="14" font-weight="600" text-anchor="middle" fill="var(--anim-blue)">20</text>
  <!-- 12-16 saat: 10 öğrenci -->
  <rect x="355" y="190" width="95" height="100" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="2"/>
  <text x="402.5" y="182" font-size="14" font-weight="600" text-anchor="middle" fill="var(--anim-blue)">10</text>
  <!-- 16-20 saat: 3 öğrenci -->
  <rect x="450" y="260" width="95" height="30" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="2"/>
  <text x="497.5" y="252" font-size="14" font-weight="600" text-anchor="middle" fill="var(--anim-blue)">3</text>
  <!-- 20-24 saat: 1 öğrenci -->
  <rect x="545" y="280" width="95" height="10" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="2"/>
  <text x="592.5" y="272" font-size="14" font-weight="600" text-anchor="middle" fill="var(--anim-blue)">1</text>
  <!-- Y ekseni -->
  <line x1="70" y1="290" x2="70" y2="70" stroke="currentColor" stroke-width="2"/>
  <line x1="64" y1="290" x2="70" y2="290" stroke="currentColor" stroke-width="1.5"/>
  <line x1="64" y1="240" x2="70" y2="240" stroke="currentColor" stroke-width="1.5"/>
  <line x1="64" y1="190" x2="70" y2="190" stroke="currentColor" stroke-width="1.5"/>
  <line x1="64" y1="140" x2="70" y2="140" stroke="currentColor" stroke-width="1.5"/>
  <line x1="64" y1="90" x2="70" y2="90" stroke="currentColor" stroke-width="1.5"/>
  <text x="58" y="290" font-size="13" text-anchor="end" dominant-baseline="central" fill="currentColor">0</text>
  <text x="58" y="240" font-size="13" text-anchor="end" dominant-baseline="central" fill="currentColor">5</text>
  <text x="58" y="190" font-size="13" text-anchor="end" dominant-baseline="central" fill="currentColor">10</text>
  <text x="58" y="140" font-size="13" text-anchor="end" dominant-baseline="central" fill="currentColor">15</text>
  <text x="58" y="90" font-size="13" text-anchor="end" dominant-baseline="central" fill="currentColor">20</text>
  <text x="22" y="180" font-size="15" font-weight="600" text-anchor="middle" fill="currentColor" transform="rotate(-90 22 180)">Öğrenci sayısı</text>
  <!-- X ekseni -->
  <line x1="70" y1="290" x2="650" y2="290" stroke="currentColor" stroke-width="2"/>
  <line x1="70" y1="290" x2="70" y2="296" stroke="currentColor" stroke-width="1.5"/>
  <line x1="165" y1="290" x2="165" y2="296" stroke="currentColor" stroke-width="1.5"/>
  <line x1="260" y1="290" x2="260" y2="296" stroke="currentColor" stroke-width="1.5"/>
  <line x1="355" y1="290" x2="355" y2="296" stroke="currentColor" stroke-width="1.5"/>
  <line x1="450" y1="290" x2="450" y2="296" stroke="currentColor" stroke-width="1.5"/>
  <line x1="545" y1="290" x2="545" y2="296" stroke="currentColor" stroke-width="1.5"/>
  <line x1="640" y1="290" x2="640" y2="296" stroke="currentColor" stroke-width="1.5"/>
  <text x="70" y="312" font-size="13" text-anchor="middle" fill="currentColor">0</text>
  <text x="165" y="312" font-size="13" text-anchor="middle" fill="currentColor">4</text>
  <text x="260" y="312" font-size="13" text-anchor="middle" fill="currentColor">8</text>
  <text x="355" y="312" font-size="13" text-anchor="middle" fill="currentColor">12</text>
  <text x="450" y="312" font-size="13" text-anchor="middle" fill="currentColor">16</text>
  <text x="545" y="312" font-size="13" text-anchor="middle" fill="currentColor">20</text>
  <text x="640" y="312" font-size="13" text-anchor="middle" fill="currentColor">24</text>
  <text x="355" y="342" font-size="15" font-weight="600" text-anchor="middle" fill="currentColor">Haftalık çalışma süresi (saat)</text>
</svg>

> "Bu öğrenciler tipik olarak kaç saat çalışıyor?" sorusuna tek bir sayıyla cevap verebilir miyiz?

::: {.notes}
Grafiğe bakınca değerlerin 8–12 saat civarında toplandığını görüyoruz. Ama "tipik olarak 8 ile 12 arası" demek, bir raporda iki grubu karşılaştırmak ya da bir değeri başka bir çalışmanın sonucuyla kıyaslamak için yeterince kesin değil. Dağılımın ortasını tek bir sayıyla ifade etmek istiyoruz.

Bu iş için üç ölçü kullanılır: ortalama, medyan ve mod. Üçü de "tipik değer" sorusuna cevap verir, ama "tipik" kelimesini farklı anlamlarda okur.
:::

---

## Ortalama

Yedi öğrencinin dün geceki uyku süresi (saat):

6 · 7 · 5 · 8 · 7 · 6 · 7

$$
\bar{x} = \frac{6 + 7 + 5 + 8 + 7 + 6 + 7}{7} = \frac{46}{7} \approx 6{,}57
$$

> **Ortalama:** Bütün değerlerin toplamının değer sayısına bölümü. $\bar{x} = \dfrac{\sum x}{n}$

::: {.notes}
Aritmetik ortalama günlük hayattan tanıdığımız ortalamadır: bütün değerleri toplar, kaç değer olduğuna böleriz. Yedi öğrencinin toplam uykusu 46 saat; bu süreyi yedi kişiye eşit paylaştırsaydık her birine yaklaşık 6,57 saat düşerdi.

Gösterimde $\bar{x}$ (iks bar) örneklem ortalamasını, $\sum x$ bütün değerlerin toplamını, $n$ değer sayısını gösterir. Formül yeni bir şey söylemiyor; az önce yaptığımız hesabın kısa yazımı. Ortalamanın 6,57 gibi kimsenin tam olarak uyumadığı bir değer çıkması da şaşırtıcı değil: ortalama, verideki bir değeri seçmez, bütün değerlerden yeni bir sayı üretir.
:::

---

## Ortalama bir denge noktasıdır

<div data-anim="custom" data-src="mean-seesaw.js" data-css="mean-seesaw.css"></div>

> Ortalama, değerlerin iki yandaki toplam uzaklığını eşitleyen denge noktasıdır.

::: {.notes}
Ortalamayı fiziksel bir sezgiyle düşünmek, onun en önemli özelliğini anlamayı kolaylaştırır. Her değeri bir sayı doğrusuna konmuş eşit ağırlıklar gibi düşünün. Ortalama, bu doğruyu dengede tutan destek noktasıdır: ortalamanın solundaki değerlerin ortalamaya toplam uzaklığı, sağındakilerin toplam uzaklığına eşittir.
:::

---

## Medyan

Aynı yedi değeri **sıralayalım**:

5 · 6 · 6 · **7** · 7 · 7 · 8 → medyan = **7**

Bir öğrenci daha ekleyelim (9 saat):

5 · 6 · 6 · **7 · 7** · 7 · 8 · 9 → medyan = (7 + 7) / 2 = **7**

> **Medyan:** Değerler sıralandığında sıra olarak tam ortada kalan değer; sıralamanın yarısı ondan önce, yarısı ondan sonra gelir. Değer sayısı çiftse ortadaki iki değerin ortalaması.

::: {.notes}
Medyan, değerleri küçükten büyüğe dizip ortadakine bakarak bulunur. Yedi değer varsa dördüncü değer ortadadır: önünde üç, arkasında üç değer vardır. Değer sayısı çift olduğunda ortada tek bir değer yoktur; ortadaki iki değerin ortalaması alınır. Sekiz değerde bu, dördüncü ve beşinci değerdir.

Medyan, sıralamanın yarısının ondan önce, yarısının ondan sonra geldiği değerdir. Bu tanım yalnızca sıraya dayandığı için medyan sıralı veriler için de kullanılabilir.

Sık yapılan hata, değerleri sıralamadan ortadakini almaktır: sıralanmamış listede (6 · 7 · 5 · **8** · 7 · 6 · 7) ortadaki değer 8'dir ve medyan değildir.
:::

---

## Mod

Uyku verisi: 5 · 6 · 6 · 7 · 7 · 7 · 8 → mod = **7** (üç kez; mod 3 değildir)

Kategorik veride tek seçenek:

| Yöntem | Frekans |
|---|---:|
| **Özet çıkarma** | **18** |
| Soru çözme | 15 |
| Tekrar okuma | 10 |
| Grup çalışması | 7 |

> **Mod:** En sık görülen değer ya da kategori. Tabloda mod **Özet çıkarma**dır (18 kez).

::: {.notes}
Mod, veride en çok tekrarlanan değerdir. Uyku verisinde 7 saat üç kez görülüyor; mod 7'dir. "Mod 3" değil, "mod 7, üç kez görülüyor" deriz: 3 frekans, 7 değerin kendisidir. Bir veri setinin birden fazla modu olabilir (iki değer eşit sıklıkta en çok görülüyorsa) ya da her değer bir kez görülüyorsa anlamlı bir modu olmayabilir.

Mod'un asıl önemi kategorik verilerde ortaya çıkar. Çalışma yöntemleri için ortalama ya da medyan hesaplanamaz; kategorilerin toplamı ya da sırası yoktur. Ama en çok tercih edilen yöntemi söyleyebiliriz: özet çıkarma. Nominal düzeydeki bir değişken için kullanılabilecek tek merkezî eğilim ölçüsü moddur.
:::

---

## Üçü aynı veride

Elli öğrencinin çalışma saatleri:

| Ölçü | Değer |
|---|---:|
| Ortalama | 9,62 |
| Medyan | 9 |
| Mod | 9 **ve** 10 (altışar kez) |

> Üç ölçü birbirine yakın; ama aynı değil.

::: {.notes}
Elli değerin toplamı 481; elliye bölündüğünde ortalama 9,62 çıkar. Değerler sıralandığında 25. ve 26. değerin ikisi de 9'dur, medyan 9'dur. En sık görülen değerler 9 ve 10'dur; ikisi de altı kez görülür, bu veride iki mod vardır.

Üç ölçünün birbirine yakın olması, dağılımın ortasının oldukça belirgin olduğunu gösterir. Ortalamanın medyandan biraz büyük olmasının nedeni sağdaki kuyruktur: 17, 18 ve 21 saatlik değerler ortalamayı yukarı çekiyor. Fark burada küçük; bir sonraki örnekte büyüyecek.
:::

---

## Bir uç değer neyi değiştirir?

Küçük bir şirkette sekiz çalışanın aylık maaşı (bin TL):

25 · 27 · 28 · 30 · 30 · 32 · 35 · 38

Şirket sahibinin maaşı da eklenince: + **400**

> **Uç değer:** Diğerlerinden çok uzakta kalan gerçek bir değer.

| | Ortalama | Medyan | Mod |
|---|---:|---:|---:|
| Sekiz çalışan | 30,6 | 30 | 30 |
| Şirket sahibiyle (dokuz kişi) | **71,7** | 30 | 30 |

> "Şirkette ortalama maaş 71,7 bin TL" cümlesi aritmetik olarak doğrudur, ama tipik bir çalışanın durumunu anlatmaz.

::: {.notes}
Sahibin maaşı hatalı kayıt değildir; 5. notta ayıkladığımız olanaksız değerler gibi silinmez. Sekiz çalışanın maaşları birbirine yakın ve üç ölçü de 30 bin TL civarında. Şirket sahibinin 400 bin TL'lik maaşı eklendiğinde ortalama 71,7 bin TL'ye fırlar; sekiz çalışanın en çok kazananı bile (38 bin TL) bu ortalamanın yaklaşık yarısı kadar kazanıyor. Medyan ise hiç değişmez: dokuz değer sıralandığında beşinci değer hâlâ 30'dur. Mod da yerinde durur.

"Şirkette ortalama maaş 71,7 bin TL" cümlesi aritmetik olarak doğrudur, ama tipik bir çalışanın durumunu anlatmaz. Gelir, konut fiyatı, tepki süresi gibi tek yöne uzayan verilerde ortalamanın yanında medyanı da vermek bu yüzden yaygın bir uygulamadır; haberlerde "medyan hane geliri" ifadesiyle karşılaşmamızın nedeni budur.
:::

---

## Neden medyan dayanıklı?

<div data-anim="custom" data-src="median-outlier.js" data-css="median-outlier.css"></div>

> **Medyan** yalnızca sıradaki yere bakar; en büyük değer ne kadar büyürse büyüsün ortadaki değer değişmez. **Ortalama** ise her değerin büyüklüğünü toplama katar.

::: {.notes}
Medyanın uç değerlere dayanıklı olmasının nedeni tanımında saklıdır. Medyan, değerlerin ne kadar büyük olduğuna değil, sıralamadaki yerlerine bakar. En büyük değeri 38'den 400'e, hatta 4.000'e çıkarsak da o değer sıralamada yine sonda kalır; ortadaki değer değişmez.

Ortalama ise her değerin büyüklüğünü toplama katar; bütün bilgiyi kullanır, ama verinin bir yanında uzak değerler varsa o yana çekilir.
:::

---

## Grafiği okuyalım: üç ölçünün yeri

<svg viewBox="0 0 880 380" role="img" aria-label="Simetrik ve sağa çarpık iki dağılımda ortalama, medyan ve modun konumlarını karşılaştıran grafik; simetrik dağılımda üç ölçü merkezde üst üste binerken, sağa çarpık dağılımda mod tepede, medyan ortada, ortalama ise kuyruk yönünde en sağda yer alır" style="width:100%;max-height:440px">
  <!-- SOL PANEL: Simetrik Dağılım -->
  <text x="240" y="35" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">Simetrik, Tek Tepeli Dağılım</text>
  <text x="240" y="55" font-size="13" text-anchor="middle" fill="var(--anim-muted)">Üç ölçü tam ortada çakışır</text>
  <!-- Simetrik sütunlar -->
  <rect x="82.5" y="290" width="35" height="20" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <rect x="117.5" y="260" width="35" height="50" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <rect x="152.5" y="210" width="35" height="100" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <rect x="187.5" y="155" width="35" height="155" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <rect x="222.5" y="120" width="35" height="190" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <rect x="257.5" y="155" width="35" height="155" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <rect x="292.5" y="210" width="35" height="100" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <rect x="327.5" y="260" width="35" height="50" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <rect x="362.5" y="290" width="35" height="20" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <!-- Simetrik merkez çizgisi ve etiketi -->
  <line x1="240" y1="96" x2="240" y2="310" stroke="var(--anim-purple)" stroke-width="2.5"/>
  <rect x="145" y="72" width="190" height="24" rx="4" fill="var(--anim-purple-bg)" stroke="var(--anim-purple)" stroke-width="1.5"/>
  <text x="240" y="88" font-size="12" font-weight="700" text-anchor="middle" fill="var(--anim-purple)">Mod = Medyan = Ortalama</text>
  <!-- Sol eksenler -->
  <line x1="70" y1="310" x2="415" y2="310" stroke="currentColor" stroke-width="2"/>
  <line x1="70" y1="310" x2="70" y2="105" stroke="currentColor" stroke-width="2"/>
  <line x1="100" y1="310" x2="100" y2="316" stroke="currentColor" stroke-width="1.5"/>
  <line x1="170" y1="310" x2="170" y2="316" stroke="currentColor" stroke-width="1.5"/>
  <line x1="240" y1="310" x2="240" y2="316" stroke="var(--anim-purple)" stroke-width="2"/>
  <line x1="310" y1="310" x2="310" y2="316" stroke="currentColor" stroke-width="1.5"/>
  <line x1="380" y1="310" x2="380" y2="316" stroke="currentColor" stroke-width="1.5"/>
  <text x="240" y="330" font-size="12" font-weight="700" text-anchor="middle" fill="var(--anim-purple)">Merkez</text>
  <text x="240" y="355" font-size="14" font-weight="600" text-anchor="middle" fill="currentColor">Ölçülen Değişken (X)</text>
  <text x="50" y="200" font-size="13" font-weight="600" text-anchor="middle" fill="currentColor" transform="rotate(-90 50 200)">Frekans</text>
  <!-- SAĞ PANEL: Sağa Çarpık Dağılım -->
  <text x="660" y="35" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">Sağa Çarpık Dağılım (Örn. Gelir)</text>
  <text x="660" y="55" font-size="13" text-anchor="middle" fill="var(--anim-muted)">Kuyruktaki uç değerler ortalamayı çeker</text>
  <!-- Çarpık sütunlar -->
  <rect x="510" y="245" width="31" height="65" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <rect x="541" y="120" width="31" height="190" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <rect x="572" y="165" width="31" height="145" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <rect x="603" y="210" width="31" height="100" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <rect x="634" y="245" width="31" height="65" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <rect x="665" y="268" width="31" height="42" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <rect x="696" y="284" width="31" height="26" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <rect x="727" y="294" width="31" height="16" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <rect x="758" y="301" width="31" height="9" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <rect x="789" y="306" width="31" height="4" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <!-- Mod çizgisi (Tepede) -->
  <line x1="556" y1="80" x2="556" y2="310" stroke="var(--anim-blue)" stroke-width="2.5"/>
  <text x="556" y="74" font-size="12" font-weight="700" text-anchor="middle" fill="var(--anim-blue)">Mod</text>
  <!-- Medyan çizgisi (Sıra ortası) -->
  <line x1="605" y1="98" x2="605" y2="310" stroke="var(--anim-amber)" stroke-width="2.5" stroke-dasharray="5 3"/>
  <text x="605" y="92" font-size="12" font-weight="700" text-anchor="middle" fill="var(--anim-amber)">Medyan</text>
  <!-- Ortalama çizgisi (Kuyruğa çekilmiş) -->
  <line x1="660" y1="80" x2="660" y2="310" stroke="var(--anim-red)" stroke-width="2.5"/>
  <text x="660" y="74" font-size="12" font-weight="700" text-anchor="middle" fill="var(--anim-red)">Ortalama</text>
  <!-- Sağ eksenler -->
  <line x1="500" y1="310" x2="840" y2="310" stroke="currentColor" stroke-width="2"/>
  <line x1="500" y1="310" x2="500" y2="105" stroke="currentColor" stroke-width="2"/>
  <line x1="556" y1="310" x2="556" y2="316" stroke="var(--anim-blue)" stroke-width="2"/>
  <line x1="605" y1="310" x2="605" y2="316" stroke="var(--anim-amber)" stroke-width="2"/>
  <line x1="660" y1="310" x2="660" y2="316" stroke="var(--anim-red)" stroke-width="2"/>
  <text x="556" y="330" font-size="12" font-weight="700" text-anchor="middle" fill="var(--anim-blue)">Mod</text>
  <text x="605" y="330" font-size="12" font-weight="700" text-anchor="middle" fill="var(--anim-amber)">Medyan</text>
  <text x="660" y="330" font-size="12" font-weight="700" text-anchor="middle" fill="var(--anim-red)">Ortalama</text>
  <text x="660" y="355" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">Mod &lt; Medyan &lt; Ortalama</text>
  <text x="480" y="200" font-size="13" font-weight="600" text-anchor="middle" fill="currentColor" transform="rotate(-90 480 200)">Frekans</text>
</svg>

> **Simetrik ve tek tepeli** dağılımda üç ölçü buluşur; dağılım bir yana uzadıkça ortalama genellikle o yana çekilir.

- Ortalama ile medyan arasındaki fark dağılımın hangi yöne uzadığının ipucudur.
- Tek başına kesin kanıt değildir; her zaman histogramla kontrol edilir.

::: {.notes}
Histograma üç ölçüyü işaretlemek, aradaki ilişkiyi gözle görmeyi sağlar. Simetrik ve tek tepeli bir dağılımda üç ölçü aynı noktada ya da birbirine çok yakın durur; tepe aynı zamanda ortadır. Simetri tek başına yetmez: iki tepeli simetrik bir dağılımda ortalama ve medyan ortada kalır, ama modlar iki tepede durur.

Tek tepeli bir dağılım bir yana uzadığında üç ölçü genellikle ayrılır. En sık görülen değerler tepede kalır (mod); sıralamanın ortası tepenin biraz kuyruk tarafına geçer (medyan); kuyruktaki büyük değerler ise ortalamayı en uzağa çeker. Bu yüzden ortalama ile medyan arasındaki fark, bir dağılımın ne yöne uzadığının ipucudur; ama tek başına kesin kanıt değildir, histogramla kontrol edilir.
:::

---

## Görünmeyen tuzak: kimseyi anlatmayan ortalama

Sabah çalışanlar ile gece çalışanların karıştığı bir grupta yatış saatleri:

<svg viewBox="0 0 760 380" role="img" aria-label="Yatış saati verisinde iki tepeli bimodal dağılım histogramı; 22.00-23.00 ve 02.00-03.00 saatlerinde iki belirgin tepe bulunurken, aritmetik ortalama olan 00.30 neredeyse hiç kimsenin yatmadığı boş vadi bölgesine denk düşer" style="width:100%;max-height:440px">
  <!-- Y ekseni kılavuz çizgileri -->
  <line x1="80" y1="255" x2="682" y2="255" stroke="var(--anim-border)" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="80" y1="200" x2="682" y2="200" stroke="var(--anim-border)" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="80" y1="145" x2="682" y2="145" stroke="var(--anim-border)" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="80" y1="90" x2="682" y2="90" stroke="var(--anim-border)" stroke-width="1" stroke-dasharray="3 3"/>
  <!-- Sütunlar (Toplam n = 52) -->
  <!-- 21.00-22.00 (3 kişi) -->
  <rect x="80" y="277" width="86" height="33" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="2"/>
  <!-- 22.00-23.00 (1. Tepe: 18 kişi) -->
  <rect x="166" y="112" width="86" height="198" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="2"/>
  <!-- 23.00-00.00 (4 kişi) -->
  <rect x="252" y="266" width="86" height="44" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="2"/>
  <!-- 00.00-01.00 (Boş Vadi: 2 kişi) -->
  <rect x="338" y="288" width="86" height="22" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="2"/>
  <!-- 01.00-02.00 (4 kişi) -->
  <rect x="424" y="266" width="86" height="44" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="2"/>
  <!-- 02.00-03.00 (2. Tepe: 18 kişi) -->
  <rect x="510" y="112" width="86" height="198" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="2"/>
  <!-- 03.00-04.00 (3 kişi) -->
  <rect x="596" y="277" width="86" height="33" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="2"/>
  <!-- 1. Tepe Açıklaması -->
  <rect x="139" y="52" width="140" height="42" rx="4" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <text x="209" y="69" font-size="13" font-weight="700" text-anchor="middle" fill="var(--anim-blue)">1. Tepe: Erken Yatanlar</text>
  <text x="209" y="85" font-size="12" text-anchor="middle" fill="currentColor">22.00–23.00 (18 kişi)</text>
  <line x1="209" y1="94" x2="209" y2="108" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <!-- 2. Tepe Açıklaması -->
  <rect x="483" y="52" width="140" height="42" rx="4" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <text x="553" y="69" font-size="13" font-weight="700" text-anchor="middle" fill="var(--anim-blue)">2. Tepe: Geç Yatanlar</text>
  <text x="553" y="85" font-size="12" text-anchor="middle" fill="currentColor">02.00–03.00 (18 kişi)</text>
  <line x1="553" y1="94" x2="553" y2="108" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <!-- Ortalama Çizgisi (00.30 / 24,5) -->
  <line x1="381" y1="62" x2="381" y2="310" stroke="var(--anim-red)" stroke-width="2.5" stroke-dasharray="6 4"/>
  <rect x="296" y="18" width="170" height="40" rx="4" fill="var(--anim-red-bg)" stroke="var(--anim-red)" stroke-width="1.5"/>
  <text x="381" y="34" font-size="13" font-weight="700" text-anchor="middle" fill="var(--anim-red)">Ortalama: 00.30 (24,5)</text>
  <text x="381" y="50" font-size="11" font-weight="600" text-anchor="middle" fill="var(--anim-red)">İki grubun tam ortası</text>
  <!-- Boş Bölge Uyarısı -->
  <rect x="296" y="218" width="170" height="36" rx="4" fill="var(--anim-surface)" stroke="var(--anim-red-soft)" stroke-width="1"/>
  <text x="381" y="233" font-size="11" font-weight="700" text-anchor="middle" fill="var(--anim-red-soft)">BOŞ BÖLGE (Yalnız 2 kişi)</text>
  <text x="381" y="247" font-size="11" text-anchor="middle" fill="currentColor">Ortalama kimseyi anlatmıyor!</text>
  <!-- Y ekseni -->
  <line x1="80" y1="310" x2="80" y2="75" stroke="currentColor" stroke-width="2"/>
  <line x1="74" y1="310" x2="80" y2="310" stroke="currentColor" stroke-width="1.5"/>
  <line x1="74" y1="255" x2="80" y2="255" stroke="currentColor" stroke-width="1.5"/>
  <line x1="74" y1="200" x2="80" y2="200" stroke="currentColor" stroke-width="1.5"/>
  <line x1="74" y1="145" x2="80" y2="145" stroke="currentColor" stroke-width="1.5"/>
  <line x1="74" y1="90" x2="80" y2="90" stroke="currentColor" stroke-width="1.5"/>
  <text x="68" y="310" font-size="12" text-anchor="end" dominant-baseline="central" fill="currentColor">0</text>
  <text x="68" y="255" font-size="12" text-anchor="end" dominant-baseline="central" fill="currentColor">5</text>
  <text x="68" y="200" font-size="12" text-anchor="end" dominant-baseline="central" fill="currentColor">10</text>
  <text x="68" y="145" font-size="12" text-anchor="end" dominant-baseline="central" fill="currentColor">15</text>
  <text x="68" y="90" font-size="12" text-anchor="end" dominant-baseline="central" fill="currentColor">20</text>
  <text x="30" y="190" font-size="14" font-weight="600" text-anchor="middle" fill="currentColor" transform="rotate(-90 30 190)">Öğrenci sayısı</text>
  <!-- X ekseni -->
  <line x1="80" y1="310" x2="690" y2="310" stroke="currentColor" stroke-width="2"/>
  <line x1="80" y1="310" x2="80" y2="316" stroke="currentColor" stroke-width="1.5"/>
  <line x1="166" y1="310" x2="166" y2="316" stroke="currentColor" stroke-width="1.5"/>
  <line x1="252" y1="310" x2="252" y2="316" stroke="currentColor" stroke-width="1.5"/>
  <line x1="338" y1="310" x2="338" y2="316" stroke="currentColor" stroke-width="1.5"/>
  <line x1="424" y1="310" x2="424" y2="316" stroke="currentColor" stroke-width="1.5"/>
  <line x1="510" y1="310" x2="510" y2="316" stroke="currentColor" stroke-width="1.5"/>
  <line x1="596" y1="310" x2="596" y2="316" stroke="currentColor" stroke-width="1.5"/>
  <line x1="682" y1="310" x2="682" y2="316" stroke="currentColor" stroke-width="1.5"/>
  <text x="80" y="330" font-size="12" text-anchor="middle" fill="currentColor">21.00</text>
  <text x="166" y="330" font-size="12" text-anchor="middle" fill="currentColor">22.00</text>
  <text x="252" y="330" font-size="12" text-anchor="middle" fill="currentColor">23.00</text>
  <text x="338" y="330" font-size="12" text-anchor="middle" fill="currentColor">00.00</text>
  <text x="424" y="330" font-size="12" text-anchor="middle" fill="currentColor">01.00</text>
  <text x="510" y="330" font-size="12" text-anchor="middle" fill="currentColor">02.00</text>
  <text x="596" y="330" font-size="12" text-anchor="middle" fill="currentColor">03.00</text>
  <text x="682" y="330" font-size="12" text-anchor="middle" fill="currentColor">04.00</text>
  <text x="381" y="358" font-size="14" font-weight="600" text-anchor="middle" fill="currentColor">Yatış Saati</text>
</svg>

> Hesaplamadan önce grafiğe bakmanın bir nedeni daha.

::: {.notes}
Bazı veri setleri iki ayrı grubun karışımıdır. Erken yatanlar ile geç yatanların aynı veri setinde bulunduğu bir durumda yatış saatinin ortalaması, iki grubun tam ortasına, neredeyse kimsenin yatmadığı bir saate düşebilir. Gece yarısından sonrasını 24, 25… diye sayarsak (01.00 = 25), 22.30 ile 02.30 (26,5) arasındaki ortalama 24,5 yani 00.30 olur. Bu ortalama aritmetik olarak doğrudur, ama "tipik" bir öğrenciyi anlatmaz; aslında iki farklı tipik öğrenci vardır.

Bu durumu yalnızca sayılara bakarak fark etmek zordur. Histogram iki tepeyi hemen gösterir. Bir merkezî eğilim ölçüsü raporlamadan önce grafiğe bakmak, özetin veriyi gerçekten özetleyip özetlemediğini kontrol etmenin en kolay yoludur. İki tepe görüyorsak tek bir ortalama yerine grupları ayrı ayrı özetlemeyi düşünmek gerekir.
:::

---

## Hangisini ne zaman?

| Durum | Önerilen ölçü |
|---|---|
| Nominal veri (bölüm, terapi türü) | Mod |
| Sıralı veri, tek Likert maddesi (1–5 gibi derecelendirme) | Medyan (gerekirse mod) |
| Simetrik nicel veri, ölçek puanları | Ortalama |
| Bir yana uzayan nicel veri (gelir, tepki süresi) | Medyan; ortalamayla birlikte verilebilir |
| İki tepeli veri | Grupları ayrı özetlemeyi düşün |

::: {.notes}
Seçimde iki soru belirleyicidir: değişkenin ölçme düzeyi nedir ve dağılımı nasıl görünüyor? Ölçme düzeyi hangi ölçülerin anlamlı olduğunu sınırlar: nominal veride yalnızca mod, sıralı veride medyan ve mod, aralık ve oran düzeyinde üçü de kullanılabilir. Dağılımın biçimi ise anlamlı ölçüler arasından hangisinin daha iyi bir özet olduğunu belirler: uç değer ya da bir yana uzama varsa medyan, tek tepeli ve simetriye yakınsa ortalama.

Ölçek puanlarında ortalama kullanılmasıyla tek Likert maddesinde medyan kullanılması arasındaki fark, üçüncü notta gördüğümüz aralık kabulüne dayanır: toplam ölçek puanı uygulamada aralık düzeyi sayıldığı için ortalaması anlamlıdır, tek madde sıralı olduğu için medyan daha güvenlidir.
:::

---

## Yazılımda merkezî eğilim

**jamovi:** *Exploration → Descriptives* → *Statistics*: *Mean*, *Median*, *Mode*

**SPSS:** *Analyze → Descriptive Statistics → Frequencies* → *Statistics* düğmesi

::: {.callout-note title="Görsel yer tutucu: Descriptives çıktısı"}
**Tür:** ekran görüntüsü · **Gösterdiği:** jamovi Descriptives tablosu; "calisma" değişkeni için N = 50, Mean = 9,62, Median = 9, Mode = 9 (birden fazla mod olduğuna dair dipnotla) · **Öğrencinin görmesi gereken:** Tablonun hangi satırının hangi ölçü olduğu; birden fazla mod varsa yazılımın bunu nasıl bildirdiği.
:::

::: {.notes}
jamovi'de üç ölçü Descriptives analizinin Statistics bölümünden seçilir; çıktı tablosunda her değişken için ayrı satırlar hâlinde görünür. Birden fazla mod olduğunda jamovi bunlardan birini gösterip tablonun altına bir not ekler. çalışma saati verisinde 9 ile birlikte 10 da bir moddur ve raporda ikisini de yazarız.

Çıktıyı okurken ilk olarak N'ye bakmayı alışkanlık hâline getirelim: ortalamanın kaç gözleme dayandığını söyler. Yazılımın N'si burada örneklemdeki gözlem sayısıdır (*n*); 1. notta evren için kullandığımız N değildir. Eksik değerler varsa N, örneklem büyüklüğünden küçük çıkar; önceki notlardaki eksik değer tanımlarının doğru yapılıp yapılmadığını bu sayı da gösterir.
:::

---

## Raporlamak

> Katılımcıların haftalık çalışma süresinin ortalaması 9,62 saatti (*Mdn* = 9).

> Şirketteki dokuz kişinin aylık maaşının medyanı 30 bin TL'ydi; sahibinin yüksek maaşı nedeniyle ortalama (*M* = 71,7 bin TL) tipik değeri yansıtmamaktadır.

- *M* = ortalama, *Mdn* = medyan (italik)
- Yayılım ölçüsüyle birlikte verilir (sonraki not)

::: {.notes}
Psikoloji yazımında (APA, Amerikan Psikoloji Derneği'nin yazım kuralları) ortalama *M*, medyan *Mdn* kısaltmasıyla ve italik olarak yazılır. Nicel bir değişkenin merkezî eğilimi tek başına raporlanmaz; değerlerin ne kadar yayıldığını gösteren bir ölçüyle birlikte verilir. Bu ölçüleri bir sonraki notta göreceğiz; o zaman cümle "*M* = …, *SD* = …" biçimini alacak.

İkinci örnek, ortalama ile medyanın birbirinden çok ayrıldığı durumda raporun bu farkı nasıl açıklayabileceğini gösteriyor. Hangi ölçüyü neden seçtiğimizi bir cümleyle belirtmek, okurun sonucu doğru yorumlamasını sağlar.
:::

---

## Karar soruları

1. Bir sınıftaki öğrencilerin doğdukları illerin "ortalamasını" almak için plaka kodları kullanılmış. Hangi ölçü raporlanmalıydı?
2. Tepki süresi verisinde ortalama 620 ms, medyan 540 ms çıkmış. Dağılım hakkında ne söyleyebilirsiniz?
3. Bir öğrenci "veride uç değer olduğu için ortalamayı değil medyanı raporladım" diyor; ama değişken 1–5 arası tek bir Likert maddesi. Gerekçesi doğru mu?

::: {.notes}
1. Doğum yeri nominal bir değişkendir; plaka kodları yalnızca etikettir. Raporlanabilecek tek merkezî eğilim ölçüsü moddur: en çok öğrencinin doğduğu il.
2. Ortalama medyandan belirgin biçimde büyük; demek ki sağ tarafta ortalamayı yukarı çeken uzun tepki süreleri var. Dağılımın büyük olasılıkla sağa doğru uzadığı düşünülür. Tepki süreleri için bu tipik bir durumdur; histogramla doğrulanır.
3. Medyan seçimi doğru, ama gerekçe eksik. 1–5 arası tek bir Likert maddesi sıralı düzeydedir; uç değer olmasa bile medyan, ölçme düzeyi açısından savunulabilir seçimdir. Asıl gerekçe ölçme düzeyidir.
:::

---

## Bu nottan kalanlar

- **Ortalama:** toplam / n; bütün değerleri kullanır, uç değerlere duyarlıdır.
- **Medyan:** sıralamanın ortası; yalnızca sıraya bakar, uç değerlere dayanıklıdır.
- **Mod:** en sık değer; nominal veride tek seçenek.
- Simetrik, tek tepeli dağılımda üçü buluşur; dağılım bir yana uzadıkça **ortalama genellikle o yana çekilir**.
- Seçimi **ölçme düzeyi** ve **dağılımın biçimi** belirler; hesaplamadan önce grafiğe bakılır.

**Sıradaki konu:** Ortalaması aynı iki grup birbirine benzer mi? Yayılım ölçüleri.

::: {.notes}
Merkezî eğilim ölçüleri bir dağılımın ortasını söyler, ama dağılımın geri kalanı hakkında çok az şey söyler. Aynı ortalamaya sahip iki sınıftan birinde herkes birbirine yakın notlar almış, ötekinde ise notlar 20'den 100'e yayılmış olabilir. Bu iki sınıf, ortalamaları aynı olsa da çok farklıdır.

Değerler ortadan ne kadar uzaklaşıyor? Aynı ortalamaya sahip iki grubun neden farklı görünebildiğini bu soruyla inceleyeceğiz.
:::
