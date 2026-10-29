---
title: "Veriyi Görmek: Grafik Okumak"
subtitle: "PSİ 303 — Davranışsal İstatistik için Yazılım Uygulamaları"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-19
description: Frekans, yüzde ve birikimli yüzde; kategorik veri için çubuk ve pasta grafik; nicel veri için histogram; grafik okuma sırası; aralık genişliği ve yanıltıcı grafikler.
execute:
  echo: false
---

## Elli sayı

Elli öğrencinin bu hafta ders çalışma saatleri:

12 · 7 · 9 · 15 · 4 · 10 · 8 · 11 · 6 · 13 · 9 · 5 · 17 · 10 · 7 · 3 · 12 · 9 · 14 · 8 · 6 · 11 · 10 · 2 · 9 · 16 · 7 · 12 · 5 · 10 · 8 · 13 · 6 · 9 · 21 · 11 · 7 · 4 · 10 · 14 · 9 · 6 · 12 · 8 · 15 · 5 · 11 · 7 · 18 · 10

- En çok kaç saat civarında çalışılmış?
- En az ve en çok çalışan arasında ne kadar fark var?
- Diğerlerinden çok uzak bir değer var mı?

::: {.notes}
Önceki notta veriyi analize hazır hâle getirdik; şimdi ona ilk kez bütün olarak bakıyoruz. Elli sayının hepsi önümüzde, ama sorulara cevap vermek için sayıları tek tek taramak ve karşılaştırmak gerekiyor.

Bu notun konusu, veriyi bir bütün olarak görmenin iki yolu: değerleri sayıp düzenleyen frekans tabloları ve bu düzeni göze taşıyan grafikler. Grafik, çoğu zaman bir veri setine ilk bakışın ve veri hazırlamada gözden kaçan sorunları yakalamanın en hızlı yoludur.
:::

---

## Kategorik veri: frekans tablosu

"Sınava hazırlanırken en çok hangi yöntemi kullanırsınız?" (n = 50)

| Yöntem | Frekans | Yüzde |
|---|---:|---:|
| Özet çıkarma | 18 | 36 |
| Soru çözme | 15 | 30 |
| Tekrar okuma | 10 | 20 |
| Grup çalışması | 7 | 14 |
| **Toplam** | **50** | **100** |

> **Frekans:** Bir değerin ya da kategorinin kaç kez görüldüğü.

::: {.notes}
Kategorik bir değişkeni özetlemenin en temel yolu her kategoriyi saymaktır. Frekans, bir kategoride kaç gözlem olduğunu; yüzde ise bu sayının toplam içindeki payını söyler: 18 / 50 = 0,36, yani %36.

Yüzde, farklı büyüklükteki grupları karşılaştırmayı mümkün kılar. Elli kişilik bir sınıfta 18 kişi ile iki yüz kişilik bir sınıfta 72 kişi aynı payı, %36'yı temsil eder. Bu yüzden raporlarda ikisi birlikte verilir: yüzde payı, frekans ise bu payın kaç kişiye dayandığını gösterir.
:::

---

## Sıralı veri: birikimli yüzde

"Sınavdan önceki gece ne sıklıkla uykusuz kalırsınız?" (n = 50)

| Cevap     | Frekans | Yüzde | Birikimli yüzde |
| --------- | ------: | ----: | --------------: |
| Hiç       |       8 |    16 |              16 |
| Nadiren   |      14 |    28 |              44 |
| Bazen     |      16 |    32 |              76 |
| Sık sık   |       9 |    18 |              94 |
| Her zaman |       3 |     6 |             100 |

> **Birikimli yüzde:** Bir kategoriye kadar, kendisi dahil, bütün cevapların toplam payı.

"Öğrencilerin %76'sı **en fazla bazen** uykusuz kalıyor."

::: {.notes}
Kategoriler sıralı olduğunda yüzdeleri yukarıdan aşağı biriktirmek anlamlı hâle gelir. Birikimli yüzde, bir kategoriye kadar olan (o kategori dahil) bütün cevapların payını verir: "hiç" ve "nadiren" diyenler birlikte %44, "bazen"e kadar olanlar %76.

Bu sütun "en fazla", "en az" türünden soruları doğrudan cevaplar: öğrencilerin dörtte üçü en fazla bazen uykusuz kalıyor; tersinden okunursa %24'ü sık sık ya da her zaman uykusuz kalıyor. Nominal bir değişkende ise birikimli yüzde anlamsızdır: "özet çıkarma ve soru çözmeye kadar olanlar" diye bir sıra yoktur.
:::

---

## Eksik cevap varsa: hangi yüzde?

| Cevap | Frekans | Yüzde (tüm katılımcılar) | Geçerli yüzde (cevap verenler) |
|---|---:|---:|---:|
| Evet | 30 | 50 | 60 |
| Hayır | 20 | 33,3 | 40 |
| Eksik | 10 | 16,7 | — |
| **Toplam** | **60** | **100** | **100** |

**Evet yanıtı:** yüzde = 30 / 60 = **%50** · geçerli yüzde = 30 / 50 = **%60**

::: {.notes}
Altmış katılımcıdan on kişi bir soruyu cevaplamamışsa iki farklı yüzde hesaplanabilir. Yüzde tüm katılımcıların sayısına bölünür: "evet" diyenler 30 / 60 = %50. Geçerli yüzde yalnız cevap verenlerin sayısına bölünür: 30 / 50 = %60. Birikimli yüzde ise bu yüzdelerden birinin yukarıdan aşağı toplanmasıdır ve yeni bir payda getirmez. İkisi de doğrudur: biri tüm katılımcıları, öteki yalnız cevap verenleri paydaya koyar.

SPSS bu ikinci yüzdeye "Valid Percent" (geçerli yüzde) der; jamovi'nin frekans tablosu da eksik cevapları ayrı gösterir. Raporda hangi yüzdeyi verdiğinizi ve kaç kişinin cevap vermediğini belirtmek gerekir. "Katılımcıların %60'ı evet dedi" cümlesi, aslında katılımcıların %50'sini anlatıyorsa okuru yanıltır.
:::

---

## Çubuk grafik

<svg viewBox="0 0 640 370" role="img" aria-label="Dört çalışma yönteminin frekanslarını gösteren çubuk grafik: Özet çıkarma 18, Soru çözme 15, Tekrar okuma 10, Grup çalışması 7 öğrenci. y ekseni sıfırdan başlar, çubuklar arasında ayrık boşluklar bulunur." style="width:100%;max-height:420px">
  <line x1="85" y1="50" x2="600" y2="50" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.15"/>
  <line x1="85" y1="110" x2="600" y2="110" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.15"/>
  <line x1="85" y1="170" x2="600" y2="170" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.15"/>
  <line x1="85" y1="230" x2="600" y2="230" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.15"/>
  <line x1="85" y1="50" x2="85" y2="290" stroke="currentColor" stroke-width="2"/>
  <line x1="85" y1="290" x2="605" y2="290" stroke="currentColor" stroke-width="2"/>
  <line x1="79" y1="290" x2="85" y2="290" stroke="currentColor" stroke-width="1.5"/>
  <text x="73" y="294" font-size="12" text-anchor="end" fill="currentColor">0</text>
  <line x1="79" y1="230" x2="85" y2="230" stroke="currentColor" stroke-width="1.5"/>
  <text x="73" y="234" font-size="12" text-anchor="end" fill="currentColor">5</text>
  <line x1="79" y1="170" x2="85" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <text x="73" y="174" font-size="12" text-anchor="end" fill="currentColor">10</text>
  <line x1="79" y1="110" x2="85" y2="110" stroke="currentColor" stroke-width="1.5"/>
  <text x="73" y="114" font-size="12" text-anchor="end" fill="currentColor">15</text>
  <line x1="79" y1="50" x2="85" y2="50" stroke="currentColor" stroke-width="1.5"/>
  <text x="73" y="54" font-size="12" text-anchor="end" fill="currentColor">20</text>
  <text x="25" y="170" transform="rotate(-90 25 170)" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Öğrenci sayısı</text>
  <rect x="120" y="74" width="80" height="216" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="245" y="110" width="80" height="180" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="370" y="170" width="80" height="120" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="495" y="206" width="80" height="84" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.5"/>
  <text x="160" y="64" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">18</text>
  <text x="285" y="100" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">15</text>
  <text x="410" y="160" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">10</text>
  <text x="535" y="196" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">7</text>
  <text x="160" y="312" font-size="13" text-anchor="middle" fill="currentColor">Özet çıkarma</text>
  <text x="285" y="312" font-size="13" text-anchor="middle" fill="currentColor">Soru çözme</text>
  <text x="410" y="312" font-size="13" text-anchor="middle" fill="currentColor">Tekrar okuma</text>
  <text x="535" y="312" font-size="13" text-anchor="middle" fill="currentColor">Grup çalışması</text>
  <text x="160" y="328" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.75">(%36)</text>
  <text x="285" y="328" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.75">(%30)</text>
  <text x="410" y="328" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.75">(%20)</text>
  <text x="535" y="328" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.75">(%14)</text>
  <text x="345" y="356" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.8">Ayrık çubuklar: kategoriler süreklilik göstermez</text>
</svg>

- Her çubuk bir **kategori**; yüksekliği **frekans** ya da **yüzde**.
- Çubuklar arasında **boşluk** var: kategoriler birbirinden ayrık.
- Nominal veride çubukların sırası değiştirilebilir, sıralı veride doğal sıra korunur.

::: {.notes}
Çubuk grafikte y eksenini kontrol edin: yükseklik sayı mı, yüzde mi? İki çubuğun yüksekliğini karşılaştırmadan önce hangi paydanın kullanıldığını bilmek gerekir.

Nominal bir değişkende çubukların sırası bir bilgi taşımaz; okura kolaylık olsun diye büyükten küçüğe dizilebilir. Sıralı bir değişkende ise kategorilerin doğal sırası korunmalıdır: "hiç, nadiren, bazen, sık sık, her zaman" çubuklarını büyüklüğe göre dizmek, sıranın taşıdığı bilgiyi kaybettirir.
:::

---

## Pasta mı, çubuk mu?

- **Pasta grafik** bir bütünün parçalarını gösterir (dilimlerin toplamı %100); az sayıda ve belirgin farklı kategoriyle işe yarar.
- Benzer büyüklükteki dilimleri karşılaştırmak zordur: göz açıları iyi karşılaştırmaz.

<svg viewBox="0 0 760 380" role="img" aria-label="Beş kategorinin pasta ve çubuk grafik karşılaştırması. Pasta grafikte yüzde 22, 20, 19, 21 ve 18 dilimleri birbirine çok yakın olduğu için en büyük dilimi seçmek zordur; çubuk grafikte ise sıralama ve farklar hemen görülür." style="width:100%;max-height:420px">
  <text x="195" y="34" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">Pasta Grafik</text>
  <text x="195" y="54" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.8">Açı ve alanları karşılaştırmak zor</text>
  <path d="M 195 205 L 195 95 A 110 110 0 0 1 303.1 184.4 Z" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 195 205 L 303.1 184.4 A 110 110 0 0 1 248.0 301.4 Z" fill="var(--anim-teal)" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 195 205 L 248.0 301.4 A 110 110 0 0 1 124.9 289.8 Z" fill="var(--anim-purple)" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 195 205 L 124.9 289.8 A 110 110 0 0 1 95.5 158.2 Z" fill="var(--anim-amber)" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 195 205 L 95.5 158.2 A 110 110 0 0 1 195 95 Z" fill="var(--anim-green)" stroke="currentColor" stroke-width="1.5"/>
  <text x="240" y="153" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">%22</text>
  <text x="258" y="237" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">%20</text>
  <text x="188" y="277" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">%19</text>
  <text x="127" y="222" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">%21</text>
  <text x="156" y="148" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">%18</text>
  <text x="195" y="336" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.85">En büyük dilim hangisi?</text>
  <line x1="380" y1="30" x2="380" y2="340" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.25"/>
  <text x="580" y="34" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">Çubuk Grafik</text>
  <text x="580" y="54" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.8">Uzunluk farkı ve sıra bir bakışta açık</text>
  <line x1="445" y1="90" x2="710" y2="90" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.15"/>
  <line x1="445" y1="130" x2="710" y2="130" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.15"/>
  <line x1="445" y1="170" x2="710" y2="170" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.15"/>
  <line x1="445" y1="210" x2="710" y2="210" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.15"/>
  <line x1="445" y1="250" x2="710" y2="250" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.15"/>
  <line x1="445" y1="90" x2="445" y2="290" stroke="currentColor" stroke-width="2"/>
  <line x1="445" y1="290" x2="715" y2="290" stroke="currentColor" stroke-width="2"/>
  <line x1="439" y1="290" x2="445" y2="290" stroke="currentColor" stroke-width="1.5"/>
  <text x="435" y="294" font-size="11" text-anchor="end" fill="currentColor">%0</text>
  <line x1="439" y1="250" x2="445" y2="250" stroke="currentColor" stroke-width="1.5"/>
  <text x="435" y="254" font-size="11" text-anchor="end" fill="currentColor">%5</text>
  <line x1="439" y1="210" x2="445" y2="210" stroke="currentColor" stroke-width="1.5"/>
  <text x="435" y="214" font-size="11" text-anchor="end" fill="currentColor">%10</text>
  <line x1="439" y1="170" x2="445" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <text x="435" y="174" font-size="11" text-anchor="end" fill="currentColor">%15</text>
  <line x1="439" y1="130" x2="445" y2="130" stroke="currentColor" stroke-width="1.5"/>
  <text x="435" y="134" font-size="11" text-anchor="end" fill="currentColor">%20</text>
  <line x1="439" y1="90" x2="445" y2="90" stroke="currentColor" stroke-width="1.5"/>
  <text x="435" y="94" font-size="11" text-anchor="end" fill="currentColor">%25</text>
  <rect x="465" y="114" width="36" height="176" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="515" y="130" width="36" height="160" fill="var(--anim-teal)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="565" y="138" width="36" height="152" fill="var(--anim-purple)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="615" y="122" width="36" height="168" fill="var(--anim-amber)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="665" y="146" width="36" height="144" fill="var(--anim-green)" stroke="currentColor" stroke-width="1.5"/>
  <text x="483" y="106" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">%22</text>
  <text x="533" y="122" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">%20</text>
  <text x="583" y="130" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">%19</text>
  <text x="633" y="114" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">%21</text>
  <text x="683" y="138" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">%18</text>
  <text x="483" y="310" font-size="12" text-anchor="middle" fill="currentColor">K1</text>
  <text x="533" y="310" font-size="12" text-anchor="middle" fill="currentColor">K2</text>
  <text x="583" y="310" font-size="12" text-anchor="middle" fill="currentColor">K3</text>
  <text x="633" y="310" font-size="12" text-anchor="middle" fill="currentColor">K4</text>
  <text x="683" y="310" font-size="12" text-anchor="middle" fill="currentColor">K5</text>
  <text x="580" y="336" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.85">K1 > K4 > K2 > K3 > K5 hemen okunur</text>
  <text x="380" y="365" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">Göz alanları değil, uzunlukları çok daha hassas karşılaştırır</text>
</svg>

::: {.notes}
Pasta, "yarısından fazlası", "dörtte biri" gibi büyük farkları anlatmakta iyidir. Ancak insan gözü açıları ve alanları, uzunlukları karşılaştırdığı kadar iyi karşılaştıramaz. Payları birbirine yakın beş kategoriyi pastada sıralamak neredeyse imkânsızdır; aynı veri çubuk grafikte bir bakışta okunur.

Bu yüzden kategorik veride varsayılan tercih çubuk grafiktir. Pasta, az sayıda kategoriyle bütünün bölünüşünü vurgulamak istediğiniz durumlara kalır.
:::

---

## Nicel veri: değerleri aralıklara toplamak

Elli çalışma saatini 4 saatlik aralıklara ayıralım:

| Aralık (saat) | Frekans |
|---|---:|
| 0–4 | 2 |
| 4–8 | 14 |
| 8–12 | 20 |
| 12–16 | 10 |
| 16–20 | 3 |
| 20–24 | 1 |
| **Toplam** | **50** |

Sınırdaki değer üstteki aralığa yazılır: 4 saat → 4–8.

::: {.notes}
Nicel bir değişken az sayıda değer alıyorsa (kardeş sayısı gibi) her değer ayrı bir çubukla gösterilir. Çalışma saati ise sürekli ölçülür; tam saate yuvarlanmış olsa da burada 18 farklı değer var, ölçüm inceldikçe (dakika) hemen her değer bir kez görünür ve tablo biçimi göstermez. Bunun yerine değer aralığını eşit genişlikte aralıklara bölüp her aralığa düşen gözlemleri sayarız. Burada 0–4, 4–8 gibi dört saatlik aralıklar seçildi; aralık sınırına denk gelen bir değerin hangi aralığa yazılacağı baştan tek bir kurala bağlanır; burada 4 saat 4–8 aralığına, 8 saat 8–12 aralığına yazıldı.

Elli öğrenciden 34'ü (14 + 20) 4 ile 12 saat arasında çalışmış, 16 saat ve üzeri çalışan yalnızca dört kişi var. Bu tablonun grafiği histogramdır.
:::

---

## Histogram

<svg viewBox="0 0 680 380" role="img" aria-label="Elli öğrencinin haftalık çalışma saatlerinin histogramı. 0-4 aralığında 2, 4-8 aralığında 14, 8-12 aralığında 20, 12-16 aralığında 10, 16-20 aralığında 3 ve 20-24 aralığında 1 öğrenci bulunmaktadır. Çubuklar bitişiktir ve en yüksek çubuk 8-12 aralığındadır." style="width:100%;max-height:420px">
  <text x="360" y="30" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">Haftalık Çalışma Saati Histogramı (n = 50)</text>
  <line x1="90" y1="50" x2="630" y2="50" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.15"/>
  <line x1="90" y1="110" x2="630" y2="110" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.15"/>
  <line x1="90" y1="170" x2="630" y2="170" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.15"/>
  <line x1="90" y1="230" x2="630" y2="230" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.15"/>
  <line x1="90" y1="50" x2="90" y2="290" stroke="currentColor" stroke-width="2"/>
  <line x1="90" y1="290" x2="635" y2="290" stroke="currentColor" stroke-width="2"/>
  <line x1="84" y1="290" x2="90" y2="290" stroke="currentColor" stroke-width="1.5"/>
  <text x="78" y="294" font-size="12" text-anchor="end" fill="currentColor">0</text>
  <line x1="84" y1="230" x2="90" y2="230" stroke="currentColor" stroke-width="1.5"/>
  <text x="78" y="234" font-size="12" text-anchor="end" fill="currentColor">5</text>
  <line x1="84" y1="170" x2="90" y2="170" stroke="currentColor" stroke-width="1.5"/>
  <text x="78" y="174" font-size="12" text-anchor="end" fill="currentColor">10</text>
  <line x1="84" y1="110" x2="90" y2="110" stroke="currentColor" stroke-width="1.5"/>
  <text x="78" y="114" font-size="12" text-anchor="end" fill="currentColor">15</text>
  <line x1="84" y1="50" x2="90" y2="50" stroke="currentColor" stroke-width="1.5"/>
  <text x="78" y="54" font-size="12" text-anchor="end" fill="currentColor">20</text>
  <text x="25" y="170" transform="rotate(-90 25 170)" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Öğrenci sayısı</text>
  <rect x="90" y="266" width="90" height="24" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="180" y="122" width="90" height="168" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="270" y="50" width="90" height="240" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="360" y="170" width="90" height="120" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="450" y="254" width="90" height="36" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="540" y="278" width="90" height="12" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.5"/>
  <text x="135" y="258" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">2</text>
  <text x="225" y="114" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">14</text>
  <text x="315" y="42" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">20</text>
  <text x="405" y="162" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">10</text>
  <text x="495" y="246" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">3</text>
  <text x="585" y="270" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">1</text>
  <line x1="90" y1="290" x2="90" y2="296" stroke="currentColor" stroke-width="1.5"/>
  <line x1="180" y1="290" x2="180" y2="296" stroke="currentColor" stroke-width="1.5"/>
  <line x1="270" y1="290" x2="270" y2="296" stroke="currentColor" stroke-width="1.5"/>
  <line x1="360" y1="290" x2="360" y2="296" stroke="currentColor" stroke-width="1.5"/>
  <line x1="450" y1="290" x2="450" y2="296" stroke="currentColor" stroke-width="1.5"/>
  <line x1="540" y1="290" x2="540" y2="296" stroke="currentColor" stroke-width="1.5"/>
  <line x1="630" y1="290" x2="630" y2="296" stroke="currentColor" stroke-width="1.5"/>
  <text x="90" y="312" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <text x="180" y="312" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <text x="270" y="312" font-size="12" text-anchor="middle" fill="currentColor">8</text>
  <text x="360" y="312" font-size="12" text-anchor="middle" fill="currentColor">12</text>
  <text x="450" y="312" font-size="12" text-anchor="middle" fill="currentColor">16</text>
  <text x="540" y="312" font-size="12" text-anchor="middle" fill="currentColor">20</text>
  <text x="630" y="312" font-size="12" text-anchor="middle" fill="currentColor">24</text>
  <text x="360" y="340" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Haftalık çalışma (saat)</text>
  <text x="360" y="362" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.8">Aralıklar süreklidir; çubuklar birbirine bitişiktir</text>
</svg>

- x ekseni **sürekli** bir ölçek; çubuklar **bitişik**.
- Çubuğun yüksekliği o aralıktaki **gözlem sayısı**.

::: {.notes}
Histogramda yatay eksen sayı aralıklarından oluştuğu için komşu çubukları yer değiştiremeyiz. Bir çubuğun yüksekliğini okurken önce aralığı, sonra y eksenindeki kişi sayısını eşleştirin: "8–12 saatte kaç öğrenci var?"

Çubuk grafikle görünüşteki bu küçük fark, büyük bir anlam farkını taşır. Nominal bir değişkenin çubuk grafiğinde kategorilerin sırası değiştirilebilir, sıralı değişkende doğal sıra korunur. Histogramda yatay eksen bir sayı doğrusudur ve sıra hiç değişmez. Bir histogramı "hangi aralıkta kaç kişi var?" diye okumak, birbirinden ayrık grupları sayan bir çubuk grafiği okumaktan bu yüzden farklıdır.
:::

---

## Bir grafiği okuma sırası

1. **Eksenler ve birim:** Ne gösteriliyor, y ekseni nereden başlıyor?
2. **Yoğunlaşma:** Değerler nerede toplanmış?
3. **Yayılım:** En küçük ve en büyük değer nerede?
4. **Boşluklar ve uçlar:** Kopuk değer var mı?
5. **Biçim:** Simetrik mi, bir yana mı uzuyor; kaç tepe var?

::: {.notes}
Yayılım burada değerlerin kapladığı aralığı anlatır; henüz sayısal ölçüsünü hesaplamıyoruz. Kuyruk, çubukların giderek seyrekleşerek uzandığı taraftır. Tepe, en yüksek çubuğun bulunduğu yoğun bölgedir. Bu sözcükler grafik için ilk gözlemi kurar; kesin ölçü veya uç değer kararı yerine geçmez.
:::

---

## Histogramı bu sırayla oku

<svg viewBox="0 0 720 420" role="img" aria-label="Histogramı okuma sırasını gösteren grafik: Eksenler ve birim, 4-12 saat arasındaki yoğunlaşma, 8-12 saatteki tepe, sağa uzanan kuyruk ve 20-24 saat aralığındaki 21 saatlik uç değer adayı." style="width:100%;max-height:450px">
  <defs>
    <marker id="arrow-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="var(--anim-purple)"/>
    </marker>
    <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="var(--anim-red)"/>
    </marker>
  </defs>
  <text x="360" y="26" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">Histogramı Okuma Sırası: Yoğunlaşma, Yayılım ve Uçlar</text>
  <line x1="90" y1="70" x2="630" y2="70" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.15"/>
  <line x1="90" y1="130" x2="630" y2="130" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.15"/>
  <line x1="90" y1="190" x2="630" y2="190" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.15"/>
  <line x1="90" y1="250" x2="630" y2="250" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.15"/>
  <line x1="90" y1="70" x2="90" y2="310" stroke="currentColor" stroke-width="2"/>
  <line x1="90" y1="310" x2="635" y2="310" stroke="currentColor" stroke-width="2"/>
  <line x1="84" y1="310" x2="90" y2="310" stroke="currentColor" stroke-width="1.5"/>
  <text x="78" y="314" font-size="12" text-anchor="end" fill="currentColor">0</text>
  <line x1="84" y1="250" x2="90" y2="250" stroke="currentColor" stroke-width="1.5"/>
  <text x="78" y="254" font-size="12" text-anchor="end" fill="currentColor">5</text>
  <line x1="84" y1="190" x2="90" y2="190" stroke="currentColor" stroke-width="1.5"/>
  <text x="78" y="194" font-size="12" text-anchor="end" fill="currentColor">10</text>
  <line x1="84" y1="130" x2="90" y2="130" stroke="currentColor" stroke-width="1.5"/>
  <text x="78" y="134" font-size="12" text-anchor="end" fill="currentColor">15</text>
  <line x1="84" y1="70" x2="90" y2="70" stroke="currentColor" stroke-width="1.5"/>
  <text x="78" y="74" font-size="12" text-anchor="end" fill="currentColor">20</text>
  <text x="25" y="190" transform="rotate(-90 25 190)" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Öğrenci sayısı</text>
  <rect x="90" y="286" width="90" height="24" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.5" opacity="0.65"/>
  <rect x="180" y="142" width="90" height="168" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="270" y="70" width="90" height="240" fill="var(--anim-blue)" stroke="currentColor" stroke-width="2"/>
  <rect x="360" y="190" width="90" height="120" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="450" y="274" width="90" height="36" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.5" opacity="0.65"/>
  <rect x="540" y="298" width="90" height="12" fill="var(--anim-red)" stroke="currentColor" stroke-width="1.5"/>
  <text x="135" y="278" font-size="12" text-anchor="middle" fill="currentColor">2</text>
  <text x="225" y="134" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">14</text>
  <text x="315" y="86" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">20</text>
  <text x="405" y="182" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">10</text>
  <text x="495" y="266" font-size="12" text-anchor="middle" fill="currentColor">3</text>
  <text x="585" y="290" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">1</text>
  <text x="315" y="48" font-size="13" font-weight="bold" text-anchor="middle" fill="var(--anim-amber)">Tepe: 8–12 saat (20 kişi)</text>
  <line x1="315" y1="52" x2="315" y2="66" stroke="var(--anim-amber)" stroke-width="2"/>
  <path d="M 185 124 L 185 112 L 270 112 L 270 102 L 270 112 L 355 112 L 355 124" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="270" y="96" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">Yoğunlaşma: 4–12 saat (34 öğrenci, %68)</text>
  <path d="M 405 180 Q 465 230 520 270" fill="none" stroke="var(--anim-purple)" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#arrow-purple)"/>
  <text x="495" y="212" font-size="12" font-weight="bold" fill="var(--anim-purple)">Sağ kuyruk</text>
  <text x="495" y="226" font-size="11" fill="var(--anim-purple)">(seyrekleşen değerler)</text>
  <line x1="585" y1="236" x2="585" y2="290" stroke="var(--anim-red)" stroke-width="2" marker-end="url(#arrow-red)"/>
  <text x="585" y="210" font-size="12" font-weight="bold" text-anchor="middle" fill="var(--anim-red)">Uç değer adayı</text>
  <text x="585" y="225" font-size="11" text-anchor="middle" fill="var(--anim-red)">21 saat (1 kişi)</text>
  <line x1="90" y1="310" x2="90" y2="316" stroke="currentColor" stroke-width="1.5"/>
  <line x1="180" y1="310" x2="180" y2="316" stroke="currentColor" stroke-width="1.5"/>
  <line x1="270" y1="310" x2="270" y2="316" stroke="currentColor" stroke-width="1.5"/>
  <line x1="360" y1="310" x2="360" y2="316" stroke="currentColor" stroke-width="1.5"/>
  <line x1="450" y1="310" x2="450" y2="316" stroke="currentColor" stroke-width="1.5"/>
  <line x1="540" y1="310" x2="540" y2="316" stroke="currentColor" stroke-width="1.5"/>
  <line x1="630" y1="310" x2="630" y2="316" stroke="currentColor" stroke-width="1.5"/>
  <text x="90" y="330" font-size="12" text-anchor="middle" fill="currentColor">0</text>
  <text x="180" y="330" font-size="12" text-anchor="middle" fill="currentColor">4</text>
  <text x="270" y="330" font-size="12" text-anchor="middle" fill="currentColor">8</text>
  <text x="360" y="330" font-size="12" text-anchor="middle" fill="currentColor">12</text>
  <text x="450" y="330" font-size="12" text-anchor="middle" fill="currentColor">16</text>
  <text x="540" y="330" font-size="12" text-anchor="middle" fill="currentColor">20</text>
  <text x="630" y="330" font-size="12" text-anchor="middle" fill="currentColor">24</text>
  <text x="360" y="356" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Haftalık çalışma (saat)</text>
  <line x1="90" y1="382" x2="630" y2="382" stroke="currentColor" stroke-width="1.5"/>
  <line x1="90" y1="376" x2="90" y2="388" stroke="currentColor" stroke-width="1.5"/>
  <line x1="630" y1="376" x2="630" y2="388" stroke="currentColor" stroke-width="1.5"/>
  <text x="360" y="402" font-size="12" text-anchor="middle" fill="currentColor">Yayılım: Değerler 0–24 saat aralığında (Ham veride en küçük 2, en büyük 21; fark 19 saat)</text>
</svg>

> Çoğu öğrenci 4–12 saat çalışmış; en yoğun aralık 8–12 saat. Sağda seyrekleşen bir kuyruk ve 21 saatlik bir uç değer adayı var.

::: {.notes}
Grafikte x ekseni haftalık çalışma saatini, y ekseni öğrenci sayısını verir. Ham listede en küçük değer 2, en büyük değer 21 saattir; aralarındaki fark 19 saattir. 21 saatlik gözlem kalabalıktan kopuk göründüğü için şimdilik yalnız uç değer adayıdır; görsel izlenim kesin karar değildir. Eksen, yoğunlaşma, yayılım, uç ve biçim sırasını bu tek örnekte birlikte okuyabiliriz.
:::

---

## Aralık genişliği görünüşü değiştirir

<div data-anim="custom" data-src="aralik-genisligi.js" data-css="aralik-genisligi.css"></div>

::: {.notes}
Aynı veri farklı aralık genişlikleriyle çizildiğinde histogram farklı görünür. Bir saatlik aralıklarla çizilmiş histogram çok sayıda alçak ve dişli çubuktan oluşur; genel biçimi seçmek zorlaşır. On iki saatlik aralıklarla çizildiğinde ise bütün veri iki çubuğa sıkışır ve sağdaki kuyruk, tek başına duran 21 saatlik değer görünmez olur.

Yazılımlar aralık genişliğini kendiliğinden seçer; ama bir histogramdan çıkarım yaparken, özellikle "iki tepe var" ya da "uç değer yok" gibi bir sonuca varmadan önce, farklı bir aralık genişliğinin aynı izlenimi verip vermediğini kontrol etmek iyi bir alışkanlıktır.
:::

---

## Yanıltıcı grafik 1: kesilmiş eksen

İki grubun ortalama sınav puanı: A = 72, B = 75

<svg viewBox="0 0 740 380" role="img" aria-label="Kesilmiş y ekseni ile sıfırdan başlayan y ekseninin karşılaştırması. Solda y ekseni 70'ten başladığında 75 puan alan Grup B, 72 puan alan Grup A'nın iki buçuk katı gibi görünür. Sağda eksen sıfırdan başladığında 3 puanlık farkın gerçekte ne kadar küçük olduğu görülür." style="width:100%;max-height:420px">
  <text x="195" y="34" font-size="15" font-weight="bold" text-anchor="middle" fill="var(--anim-red)">Yanıltıcı Görünüm</text>
  <text x="195" y="54" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.8">y ekseni 70'ten başlıyor</text>
  <line x1="80" y1="90" x2="310" y2="90" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.15"/>
  <line x1="80" y1="150" x2="310" y2="150" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.15"/>
  <line x1="80" y1="210" x2="310" y2="210" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.15"/>
  <line x1="80" y1="90" x2="80" y2="270" stroke="currentColor" stroke-width="2"/>
  <line x1="80" y1="270" x2="315" y2="270" stroke="currentColor" stroke-width="2"/>
  <line x1="74" y1="270" x2="80" y2="270" stroke="currentColor" stroke-width="1.5"/>
  <text x="70" y="274" font-size="11" text-anchor="end" fill="currentColor">70</text>
  <line x1="74" y1="210" x2="80" y2="210" stroke="currentColor" stroke-width="1.5"/>
  <text x="70" y="214" font-size="11" text-anchor="end" fill="currentColor">72</text>
  <line x1="74" y1="150" x2="80" y2="150" stroke="currentColor" stroke-width="1.5"/>
  <text x="70" y="154" font-size="11" text-anchor="end" fill="currentColor">74</text>
  <line x1="74" y1="90" x2="80" y2="90" stroke="currentColor" stroke-width="1.5"/>
  <text x="70" y="94" font-size="11" text-anchor="end" fill="currentColor">76</text>
  <rect x="115" y="210" width="65" height="60" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="215" y="120" width="65" height="150" fill="var(--anim-amber)" stroke="currentColor" stroke-width="1.5"/>
  <text x="147" y="200" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">72</text>
  <text x="247" y="110" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">75</text>
  <path d="M 285 210 L 293 210 L 293 120 L 285 120" fill="none" stroke="var(--anim-red)" stroke-width="1.5"/>
  <text x="300" y="162" font-size="12" font-weight="bold" fill="var(--anim-red)">2,5 kat</text>
  <text x="300" y="176" font-size="11" fill="var(--anim-red)">görünüm</text>
  <text x="147" y="292" font-size="13" text-anchor="middle" fill="currentColor">Grup A</text>
  <text x="247" y="292" font-size="13" text-anchor="middle" fill="currentColor">Grup B</text>
  <text x="195" y="325" font-size="12" font-weight="bold" text-anchor="middle" fill="var(--anim-red)">Çubuk boyu 2'ye karşı 5 birim (yanıltıcı)</text>
  <line x1="370" y1="30" x2="370" y2="340" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.25"/>
  <text x="555" y="34" font-size="15" font-weight="bold" text-anchor="middle" fill="var(--anim-green)">Doğru Görünüm</text>
  <text x="555" y="54" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.8">y ekseni 0'dan başlıyor</text>
  <line x1="440" y1="90" x2="670" y2="90" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.15"/>
  <line x1="440" y1="135" x2="670" y2="135" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.15"/>
  <line x1="440" y1="180" x2="670" y2="180" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.15"/>
  <line x1="440" y1="225" x2="670" y2="225" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.15"/>
  <line x1="440" y1="90" x2="440" y2="270" stroke="currentColor" stroke-width="2"/>
  <line x1="440" y1="270" x2="675" y2="270" stroke="currentColor" stroke-width="2"/>
  <line x1="434" y1="270" x2="440" y2="270" stroke="currentColor" stroke-width="1.5"/>
  <text x="430" y="274" font-size="11" text-anchor="end" fill="currentColor">0</text>
  <line x1="434" y1="225" x2="440" y2="225" stroke="currentColor" stroke-width="1.5"/>
  <text x="430" y="229" font-size="11" text-anchor="end" fill="currentColor">25</text>
  <line x1="434" y1="180" x2="440" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <text x="430" y="184" font-size="11" text-anchor="end" fill="currentColor">50</text>
  <line x1="434" y1="135" x2="440" y2="135" stroke="currentColor" stroke-width="1.5"/>
  <text x="430" y="139" font-size="11" text-anchor="end" fill="currentColor">75</text>
  <line x1="434" y1="90" x2="440" y2="90" stroke="currentColor" stroke-width="1.5"/>
  <text x="430" y="94" font-size="11" text-anchor="end" fill="currentColor">100</text>
  <rect x="475" y="140.4" width="65" height="129.6" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="575" y="135" width="65" height="135" fill="var(--anim-amber)" stroke="currentColor" stroke-width="1.5"/>
  <text x="507" y="130" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">72</text>
  <text x="607" y="125" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">75</text>
  <path d="M 645 140.4 L 653 140.4 L 653 135 L 645 135" fill="none" stroke="var(--anim-green)" stroke-width="1.5"/>
  <text x="660" y="142" font-size="11" font-weight="bold" fill="var(--anim-green)">3 puan</text>
  <text x="507" y="292" font-size="13" text-anchor="middle" fill="currentColor">Grup A</text>
  <text x="607" y="292" font-size="13" text-anchor="middle" fill="currentColor">Grup B</text>
  <text x="555" y="325" font-size="12" font-weight="bold" text-anchor="middle" fill="var(--anim-green)">100 puanlık sınavda çubuklar neredeyse eşit</text>
  <text x="370" y="362" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">Çubuk boyu sayının kendisini temsil eder; y ekseni mutlaka sıfırdan başlamalıdır</text>
</svg>

> Grafiğe bakmadan önce eksene bakın.

::: {.notes}
y ekseni 70'ten başladığında A'nın çubuğu 2, B'ninki 5 birim yüksekliğinde çizilir; B, A'nın iki buçuk katı gibi görünür. Gerçek fark ise yüz puanlık bir sınavda yalnızca 3 puandır. Eksen sıfırdan başlatıldığında iki çubuk neredeyse aynı yükseklikte görünür ve görüntü gerçeğe uygun hâle gelir.

Okuma sırasındaki ilk adımın "eksenler" olması bu yüzdendir. Çubuk grafiklerde y ekseninin sıfırdan başlaması bir kuraldır, çünkü çubuğun boyu sayının kendisini temsil eder.
:::

---

## Yanıltıcı grafik 2: sayı mı, yüzde mi?

İki bölümde "sınav kaygısı yüksek" öğrenciler:

| Bölüm | Öğrenci sayısı | Kaygısı yüksek | Yüzde |
|---|---:|---:|---:|
| A | 200 | 40 | 20 |
| B | 50 | 20 | 40 |

Sayılarla çizilen grafik: "A'da sorun daha büyük."
Yüzdelerle çizilen grafik: "B'de sorun daha büyük."

::: {.notes}
A bölümünde kaygısı yüksek öğrenci sayısı daha fazladır (40'a karşı 20); ama A dört kat daha kalabalıktır. Oran olarak bakıldığında B'deki öğrencilerin %40'ı, A'dakilerin %20'si kaygısı yüksek gruptadır.

Hangi grafik doğrudur? İkisi de doğru sayıları gösterir; ama farklı soruları cevaplar. "Kaç öğrenciye destek gerekiyor?" sorusu için sayılar, "hangi bölümde sorun daha yaygın?" sorusu için yüzdeler anlamlıdır. Grup büyüklükleri farklıyken grafiğin hangisini gösterdiğine ve sorulan soruya uyup uymadığına bakmak gerekir.
:::

---

## Yazılımda tablo ve grafik

**jamovi:** *Exploration → Descriptives*

- *Frequency tables* kutusu: frekans ve yüzde tablosu
- *Plots*: kategorik değişken için *Bar plot*, sürekli değişken için *Histogram*

**SPSS:** *Analyze → Descriptive Statistics → Frequencies* (*Charts* düğmesi)

::: {.callout-note title="Görsel yer tutucu: jamovi frekans ve grafik çıktısı"}
**Tür:** ekran görüntüsü · **Gösterdiği:** jamovi Descriptives panelinde "yöntem" için Frequency tables ve Bar plot, "calisma" için Histogram seçili; sağda tablo ve iki grafik · **Öğrencinin görmesi gereken:** Hangi kutunun hangi çıktıyı ürettiği; değişken türüne göre doğru grafiğin seçilmesi.
:::

::: {.notes}
jamovi'de frekans tabloları ve temel grafikler aynı analiz penceresinden üretilir. Değişkenin ölçme düzeyi doğru tanımlandıysa yazılım uygun seçenekleri sunar: nominal ve sıralı değişkenler için frekans tablosu ve çubuk grafik, sürekli değişkenler için histogram.

Burada da önceki notların bir sonucu görülür: terapi türü gibi kategorik bir değişken yanlışlıkla "Continuous" tanımlanmışsa, yazılım ona bir histogram çizmeye hazırdır; kodlar 1, 2, 3 sayılara dönüşür ve anlamsız bir grafik çıkar.
:::

---

## Karar soruları

1. Bir haberde iki ilin işsizlik oranları 9,8 ve 10,4 olarak, y ekseni 9,5'ten başlayan bir çubuk grafikle veriliyor. Grafik hangi izlenimi yaratır?
2. Bir öğrenci "en çok tercih edilen bölüm" verisini histogramla göstermiş. Ne söylersiniz?
3. Bir histogramda sağ uçta, diğer çubuklardan uzakta tek bir çubuk görüyorsunuz. Analize geçmeden önce ne yaparsınız?

::: {.notes}
1. 0,6 puanlık fark, eksen 9,5'ten başladığı için ikinci ilin çubuğu birincininkinin üç katı kadar (0,3'e karşı 0,9 birim) uzun görünür; iki il arasında büyük bir fark varmış izlenimi doğar.
2. Bölüm nominal bir değişkendir; çubuk grafik gerekir. Histogram, yatay ekseni sürekli bir sayı doğrusu sayar ve çubukları bitişik çizer; kategoriler arasında olmayan bir süreklilik ve sıra varmış gibi gösterir.
3. Önce o değerin olanaksız mı yoksa alışılmadık mı olduğunu kontrol etmek: veri sözlüğündeki aralığa ve kaynağa bakmak. Olanaksızsa önceki notta gördüğümüz yolla düzeltilir ya da eksik yapılır; alışılmadıksa veride kalır ve özet ölçülerini seçerken hesaba katılır.
:::

---

## Bu nottan kalanlar

- **Frekans tablosu:** sayı ve yüzde; sıralı veride **birikimli yüzde**; eksik varsa **geçerli yüzde** (paydaları farklıdır).
- **Kategorik veri → çubuk grafik** (aralarında boşluk); pasta yalnızca az ve belirgin parçalar için.
- **Nicel veri → histogram** (bitişik çubuklar); aralık genişliği görüntüyü değiştirir.
- Okuma sırası: **eksen → yoğunlaşma → yayılım → uçlar → biçim**.
- Kesilmiş eksen ve sayı–yüzde karışıklığı grafiği yanıltıcı yapar.

**Bu notta ele alınmayanlar:** Kutu grafiği ve dağılım biçiminin sayıyla ölçülmesi.

**Sıradaki konu:** Grafikte gördüğümüz yoğunlaşmayı tek bir sayıyla söylemek: merkezî eğilim ölçüleri.

::: {.notes}
Bir veri setiyle karşılaştığınızda ilk işiniz bir tablo ya da grafik üretmek ve gördüğünüzü bir iki cümleyle söylemek olsun. Bu cümleler, sonraki adımlarda hesaplayacağınız sayıların neden öyle çıktığını anlamanızı sağlar; bir sayı grafikle çelişiyorsa da bir şeylerin ters gittiğini fark ettirir.

Grafikteki yoğunlaşmayı tek bir sayıyla söyleyebilir miyiz? Grafiğin anlattığını bir özet sayıya indirgediğimizde hangi ayrıntılar geride kalır?
:::
