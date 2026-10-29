---
title: "Ne Kadar Farklılar? Yayılım Ölçüleri"
subtitle: "PSİ 303 — Davranışsal İstatistik için Yazılım Uygulamaları"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-19
description: Açıklık, varyans ve standart sapma; çeyrekler ve çeyrekler açıklığı; kutu grafiği ve okunması; merkez ve yayılımın birlikte raporlanması.
execute:
  echo: false
---

## Aynı ortalama, iki sınıf

Beşer öğrencinin sınav notları:

| Sınıf | Notlar | Ortalama |
|---|---|---:|
| A | 65 · 68 · 70 · 72 · 75 | 70 |
| B | 40 · 55 · 70 · 85 · 100 | 70 |

> Ortalamaları aynı. Bu iki sınıf birbirine benziyor mu?

<svg viewBox="0 0 800 320" role="img" aria-label="A ve B sınıflarının sınav notlarını gösteren iki paralel sayı doğrusu. İki sınıfın da ortalaması 70 ancak A sınıfının notları 65 ile 75 arasında sıkışık, B sınıfının notları ise 40 ile 100 arasına geniş yayılmıştır." style="width:100%;max-height:380px">
  <!-- Ortak Ortalama Göstergesi (x = 554, Not = 70) -->
  <line x1="554" y1="36" x2="554" y2="252" stroke="var(--anim-red)" stroke-width="2" stroke-dasharray="6 4"/>
  <rect x="484" y="10" width="140" height="26" rx="4" fill="var(--anim-surface)" stroke="var(--anim-red)" stroke-width="1.5"/>
  <text x="554" y="27" font-size="12" font-weight="bold" text-anchor="middle" fill="var(--anim-red)">Ortalama (x̄ = 70)</text>
  <!-- A SINIFI -->
  <text x="20" y="92" font-size="16" font-weight="bold" fill="currentColor">A Sınıfı</text>
  <text x="20" y="110" font-size="12" fill="var(--anim-muted)">Açıklık = 10 (65–75)</text>
  <!-- A Sınıfı Yayılım Vurgusu (65 ile 75 arası) -->
  <rect x="523" y="78" width="62" height="42" rx="4" fill="var(--anim-blue-bg)" stroke="var(--anim-blue)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <!-- A Sınıfı Sayı Doğrusu -->
  <line x1="120" y1="99" x2="740" y2="99" stroke="var(--anim-border-strong)" stroke-width="2"/>
  <!-- Kene çizgileri -->
  <line x1="120" y1="94" x2="120" y2="104" stroke="var(--anim-border-strong)" stroke-width="1.5"/>
  <line x1="244" y1="94" x2="244" y2="104" stroke="var(--anim-border-strong)" stroke-width="1.5"/>
  <line x1="368" y1="94" x2="368" y2="104" stroke="var(--anim-border-strong)" stroke-width="1.5"/>
  <line x1="492" y1="94" x2="492" y2="104" stroke="var(--anim-border-strong)" stroke-width="1.5"/>
  <line x1="616" y1="94" x2="616" y2="104" stroke="var(--anim-border-strong)" stroke-width="1.5"/>
  <line x1="740" y1="94" x2="740" y2="104" stroke="var(--anim-border-strong)" stroke-width="1.5"/>
  <!-- A Sınıfı Veri Noktaları (65, 68, 70, 72, 75) -->
  <circle cx="523" cy="99" r="6" fill="var(--anim-blue)" stroke="var(--anim-strong)" stroke-width="1.5"/>
  <circle cx="541.6" cy="99" r="6" fill="var(--anim-blue)" stroke="var(--anim-strong)" stroke-width="1.5"/>
  <circle cx="554" cy="99" r="6.5" fill="var(--anim-red)" stroke="var(--anim-strong)" stroke-width="1.5"/>
  <circle cx="566.4" cy="99" r="6" fill="var(--anim-blue)" stroke="var(--anim-strong)" stroke-width="1.5"/>
  <circle cx="585" cy="99" r="6" fill="var(--anim-blue)" stroke="var(--anim-strong)" stroke-width="1.5"/>
  <!-- A Sınıfı Nokta Etiketleri (üst ve alt kademeli) -->
  <text x="523" y="73" font-size="11" font-weight="bold" text-anchor="middle" fill="currentColor">65</text>
  <text x="541.6" y="132" font-size="11" font-weight="bold" text-anchor="middle" fill="currentColor">68</text>
  <text x="554" y="73" font-size="11" font-weight="bold" text-anchor="middle" fill="var(--anim-red)">70</text>
  <text x="566.4" y="132" font-size="11" font-weight="bold" text-anchor="middle" fill="currentColor">72</text>
  <text x="585" y="73" font-size="11" font-weight="bold" text-anchor="middle" fill="currentColor">75</text>
  <!-- B SINIFI -->
  <text x="20" y="192" font-size="16" font-weight="bold" fill="currentColor">B Sınıfı</text>
  <text x="20" y="210" font-size="12" fill="var(--anim-muted)">Açıklık = 60 (40–100)</text>
  <!-- B Sınıfı Yayılım Vurgusu (40 ile 100 arası) -->
  <rect x="368" y="178" width="372" height="42" rx="4" fill="var(--anim-purple-bg)" stroke="var(--anim-purple)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <!-- B Sınıfı Sayı Doğrusu -->
  <line x1="120" y1="199" x2="740" y2="199" stroke="var(--anim-border-strong)" stroke-width="2"/>
  <!-- Kene çizgileri -->
  <line x1="120" y1="194" x2="120" y2="204" stroke="var(--anim-border-strong)" stroke-width="1.5"/>
  <line x1="244" y1="194" x2="244" y2="204" stroke="var(--anim-border-strong)" stroke-width="1.5"/>
  <line x1="368" y1="194" x2="368" y2="204" stroke="var(--anim-border-strong)" stroke-width="1.5"/>
  <line x1="492" y1="194" x2="492" y2="204" stroke="var(--anim-border-strong)" stroke-width="1.5"/>
  <line x1="616" y1="194" x2="616" y2="204" stroke="var(--anim-border-strong)" stroke-width="1.5"/>
  <line x1="740" y1="194" x2="740" y2="204" stroke="var(--anim-border-strong)" stroke-width="1.5"/>
  <!-- B Sınıfı Veri Noktaları (40, 55, 70, 85, 100) -->
  <circle cx="368" cy="199" r="6" fill="var(--anim-purple)" stroke="var(--anim-strong)" stroke-width="1.5"/>
  <circle cx="461" cy="199" r="6" fill="var(--anim-purple)" stroke="var(--anim-strong)" stroke-width="1.5"/>
  <circle cx="554" cy="199" r="6.5" fill="var(--anim-red)" stroke="var(--anim-strong)" stroke-width="1.5"/>
  <circle cx="647" cy="199" r="6" fill="var(--anim-purple)" stroke="var(--anim-strong)" stroke-width="1.5"/>
  <circle cx="740" cy="199" r="6" fill="var(--anim-purple)" stroke="var(--anim-strong)" stroke-width="1.5"/>
  <!-- B Sınıfı Nokta Etiketleri -->
  <text x="368" y="173" font-size="11" font-weight="bold" text-anchor="middle" fill="currentColor">40</text>
  <text x="461" y="173" font-size="11" font-weight="bold" text-anchor="middle" fill="currentColor">55</text>
  <text x="554" y="173" font-size="11" font-weight="bold" text-anchor="middle" fill="var(--anim-red)">70</text>
  <text x="647" y="173" font-size="11" font-weight="bold" text-anchor="middle" fill="currentColor">85</text>
  <text x="740" y="173" font-size="11" font-weight="bold" text-anchor="middle" fill="currentColor">100</text>
  <!-- ALT ORTAK ÖLÇEK EKSENİ -->
  <line x1="120" y1="255" x2="740" y2="255" stroke="currentColor" stroke-width="1.5"/>
  <!-- Ölçek keneleri (ticks) -->
  <line x1="120" y1="255" x2="120" y2="263" stroke="currentColor" stroke-width="1.5"/>
  <line x1="182" y1="255" x2="182" y2="260" stroke="var(--anim-border-strong)" stroke-width="1"/>
  <line x1="244" y1="255" x2="244" y2="263" stroke="currentColor" stroke-width="1.5"/>
  <line x1="306" y1="255" x2="306" y2="260" stroke="var(--anim-border-strong)" stroke-width="1"/>
  <line x1="368" y1="255" x2="368" y2="263" stroke="currentColor" stroke-width="1.5"/>
  <line x1="430" y1="255" x2="430" y2="260" stroke="var(--anim-border-strong)" stroke-width="1"/>
  <line x1="492" y1="255" x2="492" y2="263" stroke="currentColor" stroke-width="1.5"/>
  <line x1="554" y1="255" x2="554" y2="265" stroke="var(--anim-red)" stroke-width="2"/>
  <line x1="616" y1="255" x2="616" y2="263" stroke="currentColor" stroke-width="1.5"/>
  <line x1="678" y1="255" x2="678" y2="260" stroke="var(--anim-border-strong)" stroke-width="1"/>
  <line x1="740" y1="255" x2="740" y2="263" stroke="currentColor" stroke-width="1.5"/>
  <!-- Ölçek Sayıları -->
  <text x="120" y="278" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <text x="244" y="278" font-size="12" text-anchor="middle" fill="currentColor">20</text>
  <text x="368" y="278" font-size="12" text-anchor="middle" fill="currentColor">40</text>
  <text x="492" y="278" font-size="12" text-anchor="middle" fill="currentColor">60</text>
  <text x="554" y="280" font-size="13" font-weight="bold" text-anchor="middle" fill="var(--anim-red)">70</text>
  <text x="616" y="278" font-size="12" text-anchor="middle" fill="currentColor">80</text>
  <text x="740" y="278" font-size="12" text-anchor="middle" fill="currentColor">100</text>
  <!-- Eksen Adı -->
  <text x="430" y="306" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">Sınav Notu</text>
</svg>

::: {.notes}
Geçen notta ortalama maaşın tek bir yüksek maaşla kaydığını gördük. Şimdi ortalamanın aynı kaldığı ama grupların çok farklı olabildiği bir durum düşünelim: iki grubun ortalama maaşı aynı olsun. Birinci grup yalnız devlet memurlarından oluşuyor; herkes aynı kadro sisteminde, maaşlar birbirine yakın. İkinci grup işçilerden ve yöneticilerden oluşuyor; birkaç düşük ve birkaç çok yüksek maaş var. Ortalamalar eşit. Peki gruplar özdeş mi?

A sınıfında herkes 65 ile 75 arasında not almış; öğrenciler birbirine benzer bir düzeyde. B sınıfında ise 40 alan da var, 100 alan da; sınıf çok farklı düzeylerdeki öğrencilerden oluşuyor.

Önceki notta öğrendiğimiz merkezî eğilim ölçüleri bu farkı göremez; iki sınıfın ortalaması da medyanı da 70'tir. Eksik olan bilgi, değerlerin ortadan ne kadar uzaklaştığıdır. Bu uzaklığı ölçen sayılara yayılım ölçüleri diyoruz.
:::

---

## Grafiği okuyalım

<div data-anim="custom" data-src="degisen-yayilim.js" data-css="degisen-yayilim.css"></div>

- Dar ve yüksek histogram → değerler birbirine **yakın**
- Geniş ve basık histogram → değerler birbirinden **uzak**

::: {.notes}
Histogramda yayılım, dağılımın genişliği olarak görünür. Değerler birbirine yakınsa histogram dar ve yüksektir; değerler uzaklaştıkça aynı sayıda gözlem daha geniş bir alana yayılır, histogram yayvanlaşır.

Grafiğe bakarak "bu grup daha dağınık" demek kolaydır; ama iki grubu karşılaştırmak, bir değişikliğin yayılımı ne kadar artırdığını söylemek ya da raporda bu bilgiyi vermek için bir sayıya ihtiyacımız var. Bu sayıyı üç farklı yoldan üreteceğiz: en uçlar arasındaki mesafe, ortalamadan uzaklıkların tipik büyüklüğü ve ortadaki yarının genişliği.
:::

---

## Açıklık

> **Açıklık:** En büyük değer − en küçük değer

| Sınıf | En küçük | En büyük | Açıklık |
|---|---:|---:|---:|
| A | 65 | 75 | 10 |
| B | 40 | 100 | 60 |

Kolay hesaplanır; ama yalnızca **iki değere** bakar.

::: {.notes}
Açıklık, yayılımın en basit ölçüsüdür: en büyük değerden en küçük değeri çıkarırız. A sınıfında notlar 10 puanlık, B sınıfında 60 puanlık bir aralığa yayılmış.

Açıklığın zayıf yanı, yalnızca iki değere dayanmasıdır. Yüz kişilik bir sınıfta doksan dokuz öğrenci 65 ile 75 arasında, bir öğrenci 20 almış olsun; açıklık 55 çıkar ve sınıf B sınıfı kadar dağınık görünür. Tek bir uç değer açıklığı tek başına çok büyütebilir; değerlerin çoğunun nasıl dağıldığını açıklık anlatmaz.
:::

---

## Ortalamadan uzaklıklar

A sınıfı (ortalama 70):

| Not | 65 | 68 | 70 | 72 | 75 | Toplam |
|---|---:|---:|---:|---:|---:|---:|
| Ortalamadan fark | −5 | −2 | 0 | 2 | 5 | **0** |
| Farkın karesi | 25 | 4 | 0 | 4 | 25 | **58** |

Farkların toplamı **her zaman 0** → kareleri alırız.

::: {.notes}
Bütün değerleri kullanan bir yayılım ölçüsü kurmak için her değerin ortalamadan ne kadar uzak olduğuna bakabiliriz. A sınıfında 65 alan öğrenci ortalamanın 5 puan altında, 75 alan 5 puan üstünde.

Bu farkların ortalamasını almak istediğimizde bir sorunla karşılaşırız: ortalamanın altındaki ve üstündeki farklar birbirini tam olarak götürür, toplam her zaman sıfırdır. İşaretlerden kurtulmak için farkların karesini alırız: kare hiçbir zaman negatif olmaz. Mutlak değer de işareti giderirdi; kare ise büyük farklara daha çok ağırlık verir ve sonraki yöntemler buna dayanır. A sınıfında kareler toplamı 58 çıkıyor.
:::

---

## Varyans ve standart sapma

$$
s^2 = \frac{\sum (x - \bar{x})^2}{n - 1} = \frac{58}{4} = 14{,}5
\qquad
s = \sqrt{14{,}5} \approx 3{,}81
$$

| Sınıf | Varyans | Standart sapma |
|---|---:|---:|
| A | 14,5 | 3,81 |
| B | 562,5 | 23,72 |

> **Standart sapma:** Uzaklıkların tipik büyüklüğü; verinin kendi biriminde.

::: {.notes}
Kareler toplamını gözlem sayısının bir eksiğine böldüğümüzde varyansı elde ederiz; varyansın karekökü de standart sapmadır. A sınıfında varyans 14,5, standart sapma yaklaşık 3,81 puandır. B sınıfında aynı adımlar farkları −30, −15, 0, 15, 30 verir; kareler 900, 225, 0, 225, 900 ve toplamları 2250'dir. 2250 / 4 = 562,5 varyans, karekökü yaklaşık 23,72 standart sapmadır. Gösterimi sözle okuyalım: $\sum$ "hepsini topla" demektir, $x - \bar{x}$ bir değerin ortalamadan farkıdır, $n$ değer sayısıdır ve $s$ örneklem standart sapmasını gösterir. Raporlarda ve yazılım çıktısında $\bar{x}$ yerine *M*, $s$ yerine *SD* yazılır; aynı sayılardır.

Varyansın birimi verinin biriminin karesidir ("puan kare"); bu yüzden doğrudan yorumlamak zordur. Karekök almak bizi verinin kendi birimine geri getirir. Standart sapma, uzaklıkların tipik büyüklüğüdür: "notlar ortalamadan tipik olarak kaç puan uzaklaşıyor?" sorusuna cevap verir. A sınıfında yaklaşık 4 puan, B sınıfında yaklaşık 24 puan. Mutlak uzaklıkların düz ortalamasından (A'da 2,8, B'de 18) biraz büyük çıkar, çünkü büyük farklar karede daha çok ağırlık taşır.

Neden n değil n − 1? Kısaca: kareler toplamını n'ye bölseydik örneklemin varyansı evrenin varyansını biraz küçük tahmin ederdi; n − 1'e bölmek bunu düzeltir. Kuramsal gerekçesine girmiyoruz; yazılımlar zaten n − 1 ile hesaplar.
:::

---

## Standart sapmayı okumak

Ortalaması aynı iki otobüs hattında beş günlük bekleme süreleri (dakika):

| Hat | Süreler | Ortalama | Standart sapma (SD) |
|---|---|---:|---:|
| 1 | 10 · 10 · 11 · 9 · 10 | 10 | 0,7 |
| 2 | 2 · 18 · 5 · 15 · 10 | 10 | 6,7 |

> Hangi hatta toplantıya geç kalma riskiniz daha yüksek?

. . .

Standart sapma burada **öngörülebilirliği** gösterir; küçük SD her zaman "iyi" anlamına gelmez.

::: {.notes}
Birinci hatta otobüs neredeyse her gün aynı sürede geliyor; standart sapma bir dakikanın altında. İkinci hatta ise bazen 2 dakikada, bazen 18 dakikada geliyor; standart sapma yaklaşık 7 dakika.

Bir toplantıya yetişmeniz gerekiyorsa birinci hatta "on dakika beklerim" diye plan yapabilirsiniz. İkinci hatta ortalama aynı olsa da hangi gün ne kadar bekleyeceğinizi kestiremezsiniz. Standart sapma burada öngörülebilirliğin ölçüsüdür.

Küçük standart sapmanın her zaman "iyi" olduğunu düşünmek yanıltıcıdır. Bir terapi grubunda kaygı puanlarının yayılımı artıyorsa, bazı katılımcılar belirgin düzelirken bazıları aynı kalmış olabilir; ortalama az değişse de SD büyür ve bu önemli bir klinik bilgidir. Yayılım bir kalite notu değil, verinin nasıl dağıldığına dair bir bilgidir.
:::

---

## Çeyrekler: veriyi dörde bölmek

On bir öğrencinin haftalık spor saatleri, sıralanmış:

2 · 3 · **4** · 5 · 6 · **7** · 8 · 9 · **10** · 12 · 25

| | Değer | Anlamı |
|---|---:|---|
| 1. çeyrek (Q1) | 4 | Değerlerin yaklaşık dörtte biri bunun altında |
| Medyan (Q2) | 7 | Yarısı altında |
| 3. çeyrek (Q3) | 10 | Yaklaşık dörtte üçü altında |

Alt yarı: 2 · 3 · **4** · 5 · 6 → Q1 = 4; üst yarı: 8 · 9 · **10** · 12 · 25 → Q3 = 10.

> **Çeyrekler açıklığı (IQR):** Q3 − Q1 = 10 − 4 = **6**

::: {.notes}
Medyan veriyi iki eşit parçaya bölüyordu. Her parçanın da ortasını bulursak veriyi yaklaşık dörtte birlik parçalara bölmüş oluruz. Alt yarının (2, 3, 4, 5, 6) ortası 4, üst yarının (8, 9, 10, 12, 25) ortası 10'dur. Bunlar birinci ve üçüncü çeyrektir. Gözlem sayısı tekse medyan iki yarıya katılmaz; çiftse medyan iki ortadaki değerin ortasıdır ve her yarıya eşit sayıda değer düşer.

Üçüncü ve birinci çeyrek arasındaki fark, çeyrekler açıklığıdır: verinin ortadaki yarısının genişliği. Bu örnekte ortadaki öğrencilerin spor saatleri 6 saatlik bir aralığa yayılmış. 25 saatlik değer, açıklığı 23'e çıkarırken çeyrekler açıklığını hiç etkilemez; tıpkı medyan gibi, çeyrekler de uç değerlere dayanıklıdır.

Çeyrekleri hesaplamanın birkaç yöntemi vardır ve küçük veride sonuçlar ayrışır. Burada yarıların ortasını aldık (Q1 = 4, Q3 = 10, IQR = 6); doğrusal ara değerleme yapan bir yöntem Q1 = 4,5, Q3 = 9,5 ve IQR = 5 verir. Yazılım ve yönteme göre IQR 5 ya da 6 çıkabilir; IQR 5 çıkarsa bıyık sınırı 19 yerine 17 olur, 25 yine ayrı nokta kalır.
:::

---

## Kutu grafiği

<svg viewBox="0 0 840 370" role="img" aria-label="Haftalık spor saatleri verisinin kutu grafiği anatomisi. Kutu Q1 olan 4 ile Q3 olan 10 arasında yer alır, medyan 7'dir. Bıyıklar 2 ile 12 arasındaki değerleri kapsar. 25 değeri 1,5 IQR sınırının dışında kaldığı için ayrı bir uç değer noktası olarak gösterilmiştir. Grafiğin altında aynı 11 veri noktasının sayı doğrusundaki dizilişi yer alır." style="width:100%;max-height:440px">
  <!-- Üst Etiketler ve Kılavuz Çizgileri -->
  <!-- Alt Bıyık Ucu (2) -->
  <line x1="142.3" y1="52" x2="142.3" y2="78" stroke="var(--anim-border-strong)" stroke-width="1.2" stroke-dasharray="2 2"/>
  <text x="142.3" y="44" font-size="11" text-anchor="middle" fill="currentColor">Alt uç</text>
  <text x="142.3" y="30" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">2</text>
  <!-- Q1 (4) -->
  <line x1="194.6" y1="52" x2="194.6" y2="78" stroke="var(--anim-blue)" stroke-width="1.2" stroke-dasharray="2 2"/>
  <text x="194.6" y="44" font-size="11" text-anchor="middle" fill="var(--anim-blue-strong)">Q1 (%25)</text>
  <text x="194.6" y="30" font-size="12" font-weight="bold" text-anchor="middle" fill="var(--anim-blue-strong)">4</text>
  <!-- Medyan (7) -->
  <line x1="273.1" y1="52" x2="273.1" y2="78" stroke="var(--anim-amber)" stroke-width="1.5"/>
  <text x="273.1" y="44" font-size="11" text-anchor="middle" fill="var(--anim-amber-soft)">Medyan (Q2)</text>
  <text x="273.1" y="30" font-size="13" font-weight="bold" text-anchor="middle" fill="var(--anim-amber-soft)">7</text>
  <!-- Q3 (10) -->
  <line x1="351.5" y1="52" x2="351.5" y2="78" stroke="var(--anim-blue)" stroke-width="1.2" stroke-dasharray="2 2"/>
  <text x="351.5" y="44" font-size="11" text-anchor="middle" fill="var(--anim-blue-strong)">Q3 (%75)</text>
  <text x="351.5" y="30" font-size="12" font-weight="bold" text-anchor="middle" fill="var(--anim-blue-strong)">10</text>
  <!-- Üst Bıyık Ucu (12) -->
  <line x1="403.8" y1="52" x2="403.8" y2="78" stroke="var(--anim-border-strong)" stroke-width="1.2" stroke-dasharray="2 2"/>
  <text x="403.8" y="44" font-size="11" text-anchor="middle" fill="currentColor">Üst bıyık</text>
  <text x="403.8" y="30" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">12</text>
  <!-- 1,5 x IQR Sınırı (19) -->
  <line x1="586.9" y1="72" x2="586.9" y2="138" stroke="var(--anim-red-soft)" stroke-width="1.5" stroke-dasharray="4 4"/>
  <text x="586.9" y="58" font-size="11" text-anchor="middle" fill="var(--anim-red-soft)">1,5 × IQR Sınırı</text>
  <text x="586.9" y="44" font-size="11" font-weight="bold" text-anchor="middle" fill="var(--anim-red-soft)">(10 + 9 = 19)</text>
  <!-- Uç Değer (25) -->
  <line x1="743.9" y1="52" x2="743.9" y2="98" stroke="var(--anim-red)" stroke-width="1.5"/>
  <text x="743.9" y="44" font-size="11" text-anchor="middle" fill="var(--anim-red)">Uç değer adayı</text>
  <text x="743.9" y="30" font-size="13" font-weight="bold" text-anchor="middle" fill="var(--anim-red)">25</text>
  <!-- KUTU GRAFİĞİ -->
  <!-- Sol Bıyık (2'den 4'e) -->
  <line x1="142.3" y1="105" x2="194.6" y2="105" stroke="currentColor" stroke-width="2"/>
  <line x1="142.3" y1="88" x2="142.3" y2="122" stroke="currentColor" stroke-width="2.5"/>
  <!-- Kutu Gövdesi (Q1 = 4'ten Q3 = 10'a) -->
  <rect x="194.6" y="78" width="156.9" height="54" rx="3" fill="var(--anim-blue-bg)" stroke="var(--anim-blue-strong)" stroke-width="2.5"/>
  <!-- Medyan Çizgisi (7) -->
  <line x1="273.1" y1="78" x2="273.1" y2="132" stroke="var(--anim-amber)" stroke-width="3.5"/>
  <!-- Sağ Bıyık (10'dan 12'ye) -->
  <line x1="351.5" y1="105" x2="403.8" y2="105" stroke="currentColor" stroke-width="2"/>
  <line x1="403.8" y1="88" x2="403.8" y2="122" stroke="currentColor" stroke-width="2.5"/>
  <!-- Uç Değer Noktası (25) -->
  <circle cx="743.9" cy="105" r="7" fill="var(--anim-red)" stroke="var(--anim-strong)" stroke-width="2"/>
  <!-- Kutu Altı IQR Açıklama Bandı -->
  <line x1="194.6" y1="144" x2="351.5" y2="144" stroke="var(--anim-blue-strong)" stroke-width="1.5"/>
  <line x1="194.6" y1="140" x2="194.6" y2="148" stroke="var(--anim-blue-strong)" stroke-width="1.5"/>
  <line x1="351.5" y1="140" x2="351.5" y2="148" stroke="var(--anim-blue-strong)" stroke-width="1.5"/>
  <text x="273.1" y="159" font-size="11" font-weight="bold" text-anchor="middle" fill="var(--anim-blue-strong)">Kutu: Ortadaki %50 (IQR = 10 − 4 = 6)</text>
  <!-- BİREYSEL VERİ NOKTALARI DİZİLİŞİ -->
  <text x="90" y="196" font-size="12" font-weight="bold" fill="currentColor">Aynı veri noktalarının dağılımı (n = 11):</text>
  <!-- Veri Doğrusu Ekseni -->
  <line x1="90" y1="225" x2="770" y2="225" stroke="var(--anim-border)" stroke-width="1.5"/>
  <!-- İzdüşüm Kılavuzları -->
  <line x1="142.3" y1="122" x2="142.3" y2="220" stroke="var(--anim-border)" stroke-width="1" stroke-dasharray="2 3"/>
  <line x1="194.6" y1="148" x2="194.6" y2="220" stroke="var(--anim-blue)" stroke-width="1" stroke-dasharray="2 3"/>
  <line x1="273.1" y1="162" x2="273.1" y2="220" stroke="var(--anim-amber)" stroke-width="1" stroke-dasharray="2 3"/>
  <line x1="351.5" y1="148" x2="351.5" y2="220" stroke="var(--anim-blue)" stroke-width="1" stroke-dasharray="2 3"/>
  <line x1="403.8" y1="122" x2="403.8" y2="220" stroke="var(--anim-border)" stroke-width="1" stroke-dasharray="2 3"/>
  <line x1="743.9" y1="114" x2="743.9" y2="220" stroke="var(--anim-red)" stroke-width="1" stroke-dasharray="2 3"/>
  <!-- 11 Veri Noktası: 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 25 -->
  <circle cx="142.3" cy="225" r="5" fill="currentColor"/>
  <circle cx="168.5" cy="225" r="5" fill="currentColor"/>
  <circle cx="194.6" cy="225" r="5.5" fill="var(--anim-blue-strong)"/>
  <circle cx="220.8" cy="225" r="5" fill="var(--anim-blue-strong)"/>
  <circle cx="246.9" cy="225" r="5" fill="var(--anim-blue-strong)"/>
  <circle cx="273.1" cy="225" r="6" fill="var(--anim-amber)"/>
  <circle cx="299.2" cy="225" r="5" fill="var(--anim-blue-strong)"/>
  <circle cx="325.4" cy="225" r="5" fill="var(--anim-blue-strong)"/>
  <circle cx="351.5" cy="225" r="5.5" fill="var(--anim-blue-strong)"/>
  <circle cx="403.8" cy="225" r="5" fill="currentColor"/>
  <circle cx="743.9" cy="225" r="6" fill="var(--anim-red)"/>
  <!-- Noktaların Sayısal Değerleri -->
  <text x="142.3" y="244" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <text x="168.5" y="244" font-size="11" text-anchor="middle" fill="currentColor">3</text>
  <text x="194.6" y="244" font-size="11" font-weight="bold" text-anchor="middle" fill="var(--anim-blue-strong)">4</text>
  <text x="220.8" y="244" font-size="11" text-anchor="middle" fill="currentColor">5</text>
  <text x="246.9" y="244" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <text x="273.1" y="244" font-size="11" font-weight="bold" text-anchor="middle" fill="var(--anim-amber-soft)">7</text>
  <text x="299.2" y="244" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <text x="325.4" y="244" font-size="11" text-anchor="middle" fill="currentColor">9</text>
  <text x="351.5" y="244" font-size="11" font-weight="bold" text-anchor="middle" fill="var(--anim-blue-strong)">10</text>
  <text x="403.8" y="244" font-size="11" text-anchor="middle" fill="currentColor">12</text>
  <text x="743.9" y="244" font-size="11" font-weight="bold" text-anchor="middle" fill="var(--anim-red)">25</text>
  <!-- ALT ÖLÇEK EKSENİ (0–26 saat) -->
  <line x1="90" y1="280" x2="770" y2="280" stroke="currentColor" stroke-width="1.5"/>
  <!-- Kene çizgileri ve sayılar -->
  <line x1="90" y1="280" x2="90" y2="287" stroke="currentColor" stroke-width="1.5"/>
  <text x="90" y="302" font-size="11" text-anchor="middle" fill="currentColor">0</text>
  <line x1="142.3" y1="280" x2="142.3" y2="287" stroke="currentColor" stroke-width="1.5"/>
  <text x="142.3" y="302" font-size="11" text-anchor="middle" fill="currentColor">2</text>
  <line x1="194.6" y1="280" x2="194.6" y2="287" stroke="currentColor" stroke-width="1.5"/>
  <text x="194.6" y="302" font-size="11" text-anchor="middle" fill="currentColor">4</text>
  <line x1="246.9" y1="280" x2="246.9" y2="287" stroke="currentColor" stroke-width="1.5"/>
  <text x="246.9" y="302" font-size="11" text-anchor="middle" fill="currentColor">6</text>
  <line x1="299.2" y1="280" x2="299.2" y2="287" stroke="currentColor" stroke-width="1.5"/>
  <text x="299.2" y="302" font-size="11" text-anchor="middle" fill="currentColor">8</text>
  <line x1="351.5" y1="280" x2="351.5" y2="287" stroke="currentColor" stroke-width="1.5"/>
  <text x="351.5" y="302" font-size="11" text-anchor="middle" fill="currentColor">10</text>
  <line x1="403.8" y1="280" x2="403.8" y2="287" stroke="currentColor" stroke-width="1.5"/>
  <text x="403.8" y="302" font-size="11" text-anchor="middle" fill="currentColor">12</text>
  <line x1="456.2" y1="280" x2="456.2" y2="287" stroke="currentColor" stroke-width="1.5"/>
  <text x="456.2" y="302" font-size="11" text-anchor="middle" fill="currentColor">14</text>
  <line x1="508.5" y1="280" x2="508.5" y2="287" stroke="currentColor" stroke-width="1.5"/>
  <text x="508.5" y="302" font-size="11" text-anchor="middle" fill="currentColor">16</text>
  <line x1="560.8" y1="280" x2="560.8" y2="287" stroke="currentColor" stroke-width="1.5"/>
  <text x="560.8" y="302" font-size="11" text-anchor="middle" fill="currentColor">18</text>
  <line x1="613.1" y1="280" x2="613.1" y2="287" stroke="currentColor" stroke-width="1.5"/>
  <text x="613.1" y="302" font-size="11" text-anchor="middle" fill="currentColor">20</text>
  <line x1="665.4" y1="280" x2="665.4" y2="287" stroke="currentColor" stroke-width="1.5"/>
  <text x="665.4" y="302" font-size="11" text-anchor="middle" fill="currentColor">22</text>
  <line x1="717.7" y1="280" x2="717.7" y2="287" stroke="currentColor" stroke-width="1.5"/>
  <text x="717.7" y="302" font-size="11" text-anchor="middle" fill="currentColor">24</text>
  <line x1="770" y1="280" x2="770" y2="287" stroke="currentColor" stroke-width="1.5"/>
  <text x="770" y="302" font-size="11" text-anchor="middle" fill="currentColor">26</text>
  <!-- Eksen Başlığı ve Açıklama -->
  <text x="430" y="332" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">Haftalık Spor Süresi (saat)</text>
  <text x="430" y="354" font-size="11" text-anchor="middle" fill="var(--anim-muted)">Kutu ortadaki %50'yi, bıyıklar 1,5 × IQR içindeki değerleri (2 ve 12), ayrı nokta ise uç değeri (25) gösterir.</text>
</svg>

- **Kutu:** Q1'den Q3'e, verinin yaklaşık ortadaki yarısı
- **Çizgi:** medyan
- **Bıyıklar:** kutudan en fazla 1,5 × IQR uzaktaki en uç değerler (örnekte üst sınır: 10 + 1,5 × 6 = 19 → 12 bıyık ucunda)
- **Noktalar:** bu sınırın dışındaki değerler (25 uç değer adayı)

Uzun kutu yarısı veya bıyık, daha çok kişi demek değildir.

::: {.notes}
Kutu grafiği, çeyrekleri ve uç değerleri tek bir şekilde gösterir. Kutunun kenarları birinci ve üçüncü çeyrektir; kutu, değerlerin ortadaki yarısını kapsar. Kutunun içindeki çizgi medyandır. Kutunun iki yanından uzanan çizgiler (bıyıklar), kutudan çeyrekler açıklığının 1,5 katından daha uzak olmayan en uç değerlere kadar gider. Bu sınırın dışında kalan değerler ayrı noktalar olarak çizilir.

Örneğimizde üst sınır 10 + 1,5 × 6 = 19'dur. 12 bu sınırın içindedir ve bıyığın ucunu oluşturur; 25 ise dışında kalır ve ayrı bir nokta olarak görünür. Bu noktalar "uç değer adayıdır"; veri hazırlama notunda gördüğümüz gibi, bir değerin silinip silinmeyeceğine kutu grafiği değil, değerin olanaksız olup olmadığı karar verir.

Kutunun uzun yarısında ya da uzun bir bıyıkta daha çok kişi bulunduğu sonucu çıkmaz; uzunluk, değerlerin orada ne kadar dağıldığını gösterir. Parçalar zaten yaklaşık dörtte birliktir: 11 gözlemi dört eşit tam sayılı parçaya bölemeyiz.
:::

---

## Grafiği okuyalım: iki sınıfın kutu grafiği

<svg viewBox="0 0 740 420" role="img" aria-label="Aynı sınav notu ekseninde C ve D sınıflarının yan yana kutu grafikleri. İki sınıfın da medyanı 70 puan ile aynı yatay hizada buluşur. C sınıfı dar bir kutu ve kısa bıyıklarla küçük yayılım gösterirken, D sınıfı geniş bir kutu, uzun bıyıklar ve alt uçta ayrı bir uç değer noktası ile büyük bir yayılım gösterir." style="width:100%;max-height:440px">
  <!-- Izgara çizgileri -->
  <line x1="110" y1="50" x2="640" y2="50" stroke="var(--anim-border)" stroke-width="1" stroke-dasharray="2 4"/>
  <line x1="110" y1="110" x2="640" y2="110" stroke="var(--anim-border)" stroke-width="1" stroke-dasharray="2 4"/>
  <line x1="110" y1="170" x2="640" y2="170" stroke="var(--anim-border)" stroke-width="1" stroke-dasharray="2 4"/>
  <line x1="110" y1="230" x2="640" y2="230" stroke="var(--anim-border)" stroke-width="1" stroke-dasharray="2 4"/>
  <line x1="110" y1="290" x2="640" y2="290" stroke="var(--anim-border)" stroke-width="1" stroke-dasharray="2 4"/>
  <line x1="110" y1="350" x2="640" y2="350" stroke="var(--anim-border)" stroke-width="1"/>
  <!-- Ortak Medyan Referans Çizgisi (y = 140, Not = 70) -->
  <line x1="110" y1="140" x2="640" y2="140" stroke="var(--anim-amber)" stroke-width="2" stroke-dasharray="6 4"/>
  <rect x="580" y="126" width="145" height="26" rx="4" fill="var(--anim-surface)" stroke="var(--anim-amber)" stroke-width="1.5"/>
  <text x="652" y="143" font-size="12" font-weight="bold" text-anchor="middle" fill="var(--anim-amber-soft)">Ortak Medyan = 70</text>
  <!-- Y DİKEY EKSENİ (Sınav Notu: 0–100) -->
  <line x1="110" y1="50" x2="110" y2="350" stroke="currentColor" stroke-width="1.5"/>
  <!-- Kene çizgileri ve sayılar -->
  <line x1="104" y1="50" x2="110" y2="50" stroke="currentColor" stroke-width="1.5"/>
  <text x="98" y="54" font-size="11" text-anchor="end" fill="currentColor">100</text>
  <line x1="104" y1="80" x2="110" y2="80" stroke="var(--anim-border-strong)" stroke-width="1"/>
  <text x="98" y="84" font-size="11" text-anchor="end" fill="currentColor">90</text>
  <line x1="104" y1="110" x2="110" y2="110" stroke="currentColor" stroke-width="1.5"/>
  <text x="98" y="114" font-size="11" text-anchor="end" fill="currentColor">80</text>
  <line x1="102" y1="140" x2="110" y2="140" stroke="var(--anim-amber)" stroke-width="2"/>
  <text x="98" y="144" font-size="12" font-weight="bold" text-anchor="end" fill="var(--anim-amber-soft)">70</text>
  <line x1="104" y1="170" x2="110" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <text x="98" y="174" font-size="11" text-anchor="end" fill="currentColor">60</text>
  <line x1="104" y1="200" x2="110" y2="200" stroke="var(--anim-border-strong)" stroke-width="1"/>
  <text x="98" y="204" font-size="11" text-anchor="end" fill="currentColor">50</text>
  <line x1="104" y1="230" x2="110" y2="230" stroke="currentColor" stroke-width="1.5"/>
  <text x="98" y="234" font-size="11" text-anchor="end" fill="currentColor">40</text>
  <line x1="104" y1="260" x2="110" y2="260" stroke="var(--anim-border-strong)" stroke-width="1"/>
  <text x="98" y="264" font-size="11" text-anchor="end" fill="currentColor">30</text>
  <line x1="104" y1="290" x2="110" y2="290" stroke="currentColor" stroke-width="1.5"/>
  <text x="98" y="294" font-size="11" text-anchor="end" fill="currentColor">20</text>
  <line x1="104" y1="320" x2="110" y2="320" stroke="var(--anim-border-strong)" stroke-width="1"/>
  <text x="98" y="324" font-size="11" text-anchor="end" fill="currentColor">10</text>
  <line x1="104" y1="350" x2="110" y2="350" stroke="currentColor" stroke-width="1.5"/>
  <text x="98" y="354" font-size="11" text-anchor="end" fill="currentColor">0</text>
  <!-- Y Eksen Başlığı -->
  <text x="45" y="200" transform="rotate(-90 45 200)" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">Sınav Notu</text>
  <!-- C SINIFI KUTU GRAFİĞİ (Merkez x = 250) -->
  <!-- Üst Bıyık (80'e kadar) -->
  <line x1="250" y1="128" x2="250" y2="110" stroke="currentColor" stroke-width="2"/>
  <line x1="225" y1="110" x2="275" y2="110" stroke="currentColor" stroke-width="2"/>
  <text x="282" y="114" font-size="11" fill="var(--anim-muted)">En yüksek: 80</text>
  <!-- Kutu Gövdesi (Q1 = 66, Q3 = 74) -->
  <rect x="200" y="128" width="100" height="24" rx="2" fill="var(--anim-blue-bg)" stroke="var(--anim-blue-strong)" stroke-width="2.5"/>
  <!-- Medyan Çizgisi (70) -->
  <line x1="200" y1="140" x2="300" y2="140" stroke="var(--anim-amber)" stroke-width="3.5"/>
  <!-- Alt Bıyık (60'a kadar) -->
  <line x1="250" y1="152" x2="250" y2="170" stroke="currentColor" stroke-width="2"/>
  <line x1="225" y1="170" x2="275" y2="170" stroke="currentColor" stroke-width="2"/>
  <text x="282" y="174" font-size="11" fill="var(--anim-muted)">En düşük: 60</text>
  <!-- C Sınıfı Başlık ve Etiketler -->
  <text x="250" y="94" font-size="12" font-weight="bold" text-anchor="middle" fill="var(--anim-blue-strong)">Dar kutu · Kısa bıyıklar</text>
  <text x="250" y="380" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">C Sınıfı</text>
  <text x="250" y="398" font-size="12" text-anchor="middle" fill="var(--anim-muted)">n = 30 · Küçük yayılım</text>
  <!-- D SINIFI KUTU GRAFİĞİ (Merkez x = 460) -->
  <!-- Üst Bıyık (94'e kadar) -->
  <line x1="460" y1="104" x2="460" y2="68" stroke="currentColor" stroke-width="2"/>
  <line x1="435" y1="68" x2="485" y2="68" stroke="currentColor" stroke-width="2"/>
  <text x="492" y="72" font-size="11" fill="var(--anim-muted)">En yüksek: 94</text>
  <!-- Kutu Gövdesi (Q1 = 58, Q3 = 82) -->
  <rect x="410" y="104" width="100" height="72" rx="2" fill="var(--anim-purple-bg)" stroke="var(--anim-purple)" stroke-width="2.5"/>
  <!-- Medyan Çizgisi (70) -->
  <line x1="410" y1="140" x2="510" y2="140" stroke="var(--anim-amber)" stroke-width="3.5"/>
  <!-- Alt Bıyık (36'ya kadar) -->
  <line x1="460" y1="176" x2="460" y2="242" stroke="currentColor" stroke-width="2"/>
  <line x1="435" y1="242" x2="485" y2="242" stroke="currentColor" stroke-width="2"/>
  <text x="492" y="246" font-size="11" fill="var(--anim-muted)">En düşük sınır-içi: 36</text>
  <!-- Alt Uçta Uç Değer Noktası (15) -->
  <circle cx="460" cy="305" r="6.5" fill="var(--anim-red)" stroke="var(--anim-strong)" stroke-width="2"/>
  <line x1="472" y1="305" x2="505" y2="305" stroke="var(--anim-red)" stroke-width="1.2"/>
  <text x="510" y="309" font-size="11" font-weight="bold" fill="var(--anim-red)">Uç değer adayı (15)</text>
  <!-- D Sınıfı Başlık ve Etiketler -->
  <text x="460" y="52" font-size="12" font-weight="bold" text-anchor="middle" fill="var(--anim-purple)">Geniş kutu · Uzun bıyıklar</text>
  <text x="460" y="380" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">D Sınıfı</text>
  <text x="460" y="398" font-size="12" text-anchor="middle" fill="var(--anim-muted)">n = 30 · Büyük yayılım</text>
</svg>

Okuma: "İki sınıfın medyanı benzer. C sınıfındaki notlar çok daha dar bir aralıkta toplanmış; D sınıfında ortadaki yarı bile geniş bir aralığa yayılıyor ve alt uçta diğerlerinden ayrılan bir öğrenci var."

::: {.notes}
Kutu grafiklerinin asıl gücü grupları yan yana karşılaştırmaktır. Bu kez otuzar öğrencilik iki başka sınıf (C ve D) olsun. Her grubun medyanı, yayılımı ve uç değerleri tek bakışta görünür. Okurken grafik okuma notunda gördüğümüz sırayı izleyebiliriz: önce eksen ve birim, sonra yoğunlaşma (burada medyanların hizası), kutuların ve bıyıkların genişliği (yayılım), ayrı noktalar (uçlar) ve kutunun içinde medyanın ortada mı bir kenara yakın mı durduğu (biçim).

İleride iki ya da daha fazla grubu karşılaştıran testlere geçtiğimizde, her testten önce bu tür bir grafiğe bakmak alışkanlığımız olacak. Testin söyleyeceği şeyin büyük kısmı çoğu zaman grafikte zaten görünür.
:::

---

## Hangi merkezle hangi yayılım?

| Merkez | Yayılım | Ne zaman? |
|---|---|---|
| Ortalama | Standart sapma | Simetrik nicel veri, ölçek puanları |
| Medyan | Çeyrekler açıklığı | Bir yana uzayan nicel veri, uç değerler |

Spor saatleri: *M* = 8,27 saat, *SD* = 6,33 saat · *Mdn* = 7 saat, *IQR* = 6 saat (yarıların ortası yöntemiyle)

::: {.notes}
Merkez ve yayılım ölçüleri çift olarak raporlanır: ortalamanın yanına standart sapma, medyanın yanına çeyrekler açıklığı. Ortalama ve standart sapma bütün değerleri kullanır, ikisi de uç değerden etkilenir; medyan ve IQR sıralamaya dayanır ve dayanıklıdır. Spor saatleri verisinde ortalama ve standart sapma *M* = 8,27 saat, *SD* = 6,33 saattir; 25 saatlik değeri çıkarınca SD 3,20'ye düşer, yani o tek değer SD'yi yaklaşık iki katına çıkarır. Bu veri için medyan ve IQR daha iyi bir özettir; raporda birim ve yöntem yazılır: "*Mdn* = 7 saat, *IQR* = 6 saat (yarıların ortası yöntemiyle)." Yazılımın IQR'si farklı çıkarsa önce çeyrek yöntemine bakarız.

Sıralı veride (örneğin nadiren–bazen–sık sık) kodlar arasındaki farklar ölçülmüş uzaklık olmadığı için Q3 − Q1 sayısal uzaklığı yorumlanmaz; medyan ile Q1 ve Q3 kategorileri bildirilir. IQR, toplam ölçek puanı gibi aralık kabulüyle kullanılan puanlarda ve spor saati gibi gerçek nicel verilerde anlamlıdır.
:::

---

## Yazılımda yayılım ölçüleri

**jamovi:** *Exploration → Descriptives* → *Dispersion*: *Std. deviation*, *Variance*, *Range*, *IQR*; *Percentile Values*: *Quartiles*; *Plots*: *Box plot*

**SPSS:** *Analyze → Descriptive Statistics → Explore* (kutu grafiği dahil)

::: {.callout-note title="Görsel yer tutucu: Yayılım çıktısı"}
**Tür:** ekran görüntüsü · **Gösterdiği:** jamovi Descriptives tablosunda iki sınıf için ortalama, medyan, standart sapma, açıklık, IQR satırları ve altında yan yana iki kutu grafiği · **Öğrencinin görmesi gereken:** Tablodaki sayılar ile kutu grafiğindeki şekiller arasındaki karşılık.
:::

::: {.notes}
Bir grup değişkeni (örneğin sınıf) "Split by" alanına konduğunda her grup için ayrı sütunlar ve yan yana kutu grafikleri üretilir.

Çıktıyı okurken tablodaki sayılarla grafikteki şekli birbirine bağlayalım: standart sapması büyük olan grubun kutusu ve bıyıkları da genellikle geniştir. Standart sapma büyük ama kutu dar çıkıyorsa, bir ya da birkaç uç değer standart sapmayı şişiriyor olabilir; kutu grafiğindeki ayrı noktalara bakmak gerekir. Örneğin 0 · 0 · 50 · 50 · 50 · 50 · 50 · 50 · 100 · 100 verisinde çoğu çeyrek yönteminde IQR 0'dır, SD ise yaklaşık 33,3: uçlardaki dört değer SD'yi büyütür, kutuyu etkilemez.
:::

---

## Karar soruları

1. İki grubun standart sapması 5 ve 15. Hangi grubun ortalaması daha yüksektir?
2. Bir sınıfta herkes aynı notu almış. Standart sapma kaçtır?
3. Gelir verisi için bir araştırmacı ortalama ve standart sapma raporlamış. Ne önerirsiniz?
4. Bir kutu grafiğinde üç ayrı nokta görüyorsunuz. Bu üç kişiyi analizden çıkarmalı mısınız?

::: {.notes}
1. Bu bilgiyle söylenemez. Standart sapma merkez hakkında bir şey söylemez; değerlerin kendi ortalamaları çevresinde ne kadar dağıldığını gösterir.
2. Sıfır. Bütün değerler ortalamaya eşitse ortalamadan uzaklıkların hepsi sıfırdır. Standart sapma negatif olamaz; sıfır hiç yayılım olmadığı anlamına gelir.
3. Gelir genellikle sağa uzayan bir dağılım gösterir ve birkaç çok yüksek gelir ortalamayı da standart sapmayı da şişirir. Medyan ve çeyrekler açıklığı daha iyi bir özettir.
4. Hayır. Kutu grafiğinde ayrı görünmek tek başına silme nedeni değildir; önce değerin olanaksız mı yoksa alışılmadık mı olduğuna bakılır, olanaksız değilse veride kalır.
:::

---

## Bu nottan kalanlar

- **Açıklık** en büyük − en küçüktür; iki uca bağlıdır.
- **Standart sapma** uzaklıkların tipik büyüklüğüdür ve verinin kendi birimindedir; **IQR** ortadaki yarının genişliğidir ve uç değere dayanıklıdır. Kutu grafiği bu ikincisini, medyanla birlikte, uç değer adaylarını da göstererek çizer.
- Ortalama ile SD, medyan ile IQR birlikte raporlanır.

**Sıradaki konu:** Ortası ve yayılımı aynı iki dağılım hâlâ farklı olabilir mi? Dağılımın biçimi.

::: {.notes}
Artık bir dağılımı iki sayıyla özetleyebiliyoruz: ortası nerede ve değerler ortadan ne kadar uzaklaşıyor. Bu iki bilgi sonraki analizler için temel oluşturur; ikisi de dağılımın her özelliğini söylemez.

Bu sınıflardaki 70 ortalaması beşer öğrenciye dayanıyor. Aynı sınıflardan başka beşer öğrenci seçsek ortalama farklı çıkardı. Bu oynamanın ne kadar olduğunu ölçmek standart sapmadan ayrı bir iştir; ona ilerleyen notlarda döneceğiz.

Ama iki sayı da her şeyi söylemez. Ortalaması ve standart sapması aynı iki dağılımdan biri simetrik, öteki bir yana uzayan olabilir. Sıradaki notta dağılımın biçimini ve onun en ünlü örneğini, normal dağılımı göreceğiz.
:::
