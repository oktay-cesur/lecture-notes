---
title: "Üç ve Daha Fazla Grup: Tek Yönlü Varyans Analizi"
subtitle: "PSİ 303 — Davranışsal İstatistik için Yazılım Uygulamaları"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-19
description: Çoklu karşılaştırma ve Tip I hatanın şişmesi; gruplar arası ve grup içi değişkenlik; F istatistiğinin sezgisi; varsayımlar ve Welch ANOVA; eta kare; jamovi çıktısı ve APA raporu.
execute:
  echo: false
---

## Üç çalışma yöntemi

Beşer öğrenci üç farklı yöntemle sınava hazırlanıyor. Sınav puanları:

| Özet çıkarma | Soru çözme | Tekrar okuma |
|---:|---:|---:|
| 60 | 70 | 68 |
| 65 | 75 | 72 |
| 70 | 72 | 70 |
| 62 | 78 | 66 |
| 68 | 75 | 74 |
| ***M* = 65** | ***M* = 74** | ***M* = 70** |

> Yöntemler arasında fark var mı?

::: {.notes}
Üç grubun ortalamaları 65, 74 ve 70. Grupların ortalamaları farklı görünüyor; ama önceki notlardan biliyoruz ki farklı örneklemlerin ortalamaları, gerçekte hiçbir fark olmasa bile, şans eseri farklı çıkar. Soru yine aynı: bu farklar şansla açıklanabilir mi?

Önce bu üç grubun puanlarının grafikte nasıl dağıldığına bakalım.
:::

---

## Grafiği okuyalım

<svg viewBox="0 0 760 540" role="img" aria-label="Üç farklı çalışma yönteminin sınav puanlarını gösteren nokta ve kutu grafikleri. Özet çıkarma M=65, soru çözme M=74 ve tekrar okuma M=70 ortalamalarına sahiptir; grup içi yayılımlar dar ve benzerdir." style="width:100%;max-height:520px">
  <!-- Üst Panel: Nokta Grafiği ve Ortalamalar -->
  <text x="380" y="30" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Bireysel Puanlar ve Grup Ortalamaları</text>
  <!-- Y Ekseni (Üst) -->
  <line x1="95" y1="70" x2="95" y2="225" stroke="currentColor" stroke-width="1.5" />
  <text x="50" y="148" font-size="12" font-weight="bold" fill="currentColor" text-anchor="middle" transform="rotate(-90 50 148)">Puan</text>
  <!-- Y Tickleri (Üst) -->
  <line x1="88" y1="75" x2="95" y2="75" stroke="currentColor" stroke-width="1.5" />
  <text x="82" y="79" font-size="11" text-anchor="end" fill="currentColor">80</text>
  <line x1="95" y1="75" x2="710" y2="75" stroke="currentColor" stroke-dasharray="3 3" stroke-opacity="0.15" />
  <line x1="88" y1="110" x2="95" y2="110" stroke="currentColor" stroke-width="1.5" />
  <text x="82" y="114" font-size="11" text-anchor="end" fill="currentColor">75</text>
  <line x1="95" y1="110" x2="710" y2="110" stroke="currentColor" stroke-dasharray="3 3" stroke-opacity="0.15" />
  <line x1="88" y1="145" x2="95" y2="145" stroke="currentColor" stroke-width="1.5" />
  <text x="82" y="149" font-size="11" text-anchor="end" fill="currentColor">70</text>
  <line x1="95" y1="145" x2="710" y2="145" stroke="currentColor" stroke-dasharray="3 3" stroke-opacity="0.15" />
  <line x1="88" y1="180" x2="95" y2="180" stroke="currentColor" stroke-width="1.5" />
  <text x="82" y="184" font-size="11" text-anchor="end" fill="currentColor">65</text>
  <line x1="95" y1="180" x2="710" y2="180" stroke="currentColor" stroke-dasharray="3 3" stroke-opacity="0.15" />
  <line x1="88" y1="215" x2="95" y2="215" stroke="currentColor" stroke-width="1.5" />
  <text x="82" y="219" font-size="11" text-anchor="end" fill="currentColor">60</text>
  <line x1="95" y1="215" x2="710" y2="215" stroke="currentColor" stroke-dasharray="3 3" stroke-opacity="0.15" />
  <!-- Grup 1: Özet çıkarma (Noktalar & Ortalama M=65) -->
  <g fill="var(--anim-blue)" stroke="var(--anim-blue)">
    <circle cx="220" cy="215" r="4.5" />
    <circle cx="220" cy="201" r="4.5" />
    <circle cx="220" cy="180" r="4.5" />
    <circle cx="220" cy="159" r="4.5" />
    <circle cx="220" cy="145" r="4.5" />
    <line x1="170" y1="180" x2="270" y2="180" stroke-width="3" />
    <text x="278" y="184" font-size="12" font-weight="bold" stroke="none" fill="var(--anim-blue)">M = 65</text>
  </g>
  <text x="220" y="244" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">Özet çıkarma</text>
  <!-- Grup 2: Soru çözme (Noktalar & Ortalama M=74) -->
  <g fill="var(--anim-red)" stroke="var(--anim-red)">
    <circle cx="420" cy="145" r="4.5" />
    <circle cx="420" cy="131" r="4.5" />
    <circle cx="414" cy="110" r="4.5" />
    <circle cx="426" cy="110" r="4.5" />
    <circle cx="420" cy="89" r="4.5" />
    <line x1="370" y1="117" x2="470" y2="117" stroke-width="3" />
    <text x="478" y="121" font-size="12" font-weight="bold" stroke="none" fill="var(--anim-red)">M = 74</text>
  </g>
  <text x="420" y="244" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">Soru çözme</text>
  <!-- Grup 3: Tekrar okuma (Noktalar & Ortalama M=70) -->
  <g fill="var(--anim-green)" stroke="var(--anim-green)">
    <circle cx="620" cy="173" r="4.5" />
    <circle cx="620" cy="159" r="4.5" />
    <circle cx="620" cy="145" r="4.5" />
    <circle cx="620" cy="131" r="4.5" />
    <circle cx="620" cy="117" r="4.5" />
    <line x1="570" y1="145" x2="670" y2="145" stroke-width="3" />
    <text x="678" y="149" font-size="12" font-weight="bold" stroke="none" fill="var(--anim-green)">M = 70</text>
  </g>
  <text x="620" y="244" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">Tekrar okuma</text>
  <!-- Panel Ayırıcı Çizgi -->
  <line x1="70" y1="262" x2="710" y2="262" stroke="currentColor" stroke-dasharray="4 4" stroke-opacity="0.25" stroke-width="1.5" />
  <!-- Alt Panel: Kutu Grafikleri -->
  <text x="380" y="286" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Kutu Grafikleri (Dağılım ve Medyan)</text>
  <!-- Y Ekseni (Alt) -->
  <line x1="95" y1="315" x2="95" y2="470" stroke="currentColor" stroke-width="1.5" />
  <text x="50" y="393" font-size="12" font-weight="bold" fill="currentColor" text-anchor="middle" transform="rotate(-90 50 393)">Puan</text>
  <!-- Y Tickleri (Alt) -->
  <line x1="88" y1="320" x2="95" y2="320" stroke="currentColor" stroke-width="1.5" />
  <text x="82" y="324" font-size="11" text-anchor="end" fill="currentColor">80</text>
  <line x1="95" y1="320" x2="710" y2="320" stroke="currentColor" stroke-dasharray="3 3" stroke-opacity="0.15" />
  <line x1="88" y1="355" x2="95" y2="355" stroke="currentColor" stroke-width="1.5" />
  <text x="82" y="359" font-size="11" text-anchor="end" fill="currentColor">75</text>
  <line x1="95" y1="355" x2="710" y2="355" stroke="currentColor" stroke-dasharray="3 3" stroke-opacity="0.15" />
  <line x1="88" y1="390" x2="95" y2="390" stroke="currentColor" stroke-width="1.5" />
  <text x="82" y="394" font-size="11" text-anchor="end" fill="currentColor">70</text>
  <line x1="95" y1="390" x2="710" y2="390" stroke="currentColor" stroke-dasharray="3 3" stroke-opacity="0.15" />
  <line x1="88" y1="425" x2="95" y2="425" stroke="currentColor" stroke-width="1.5" />
  <text x="82" y="429" font-size="11" text-anchor="end" fill="currentColor">65</text>
  <line x1="95" y1="425" x2="710" y2="425" stroke="currentColor" stroke-dasharray="3 3" stroke-opacity="0.15" />
  <line x1="88" y1="460" x2="95" y2="460" stroke="currentColor" stroke-width="1.5" />
  <text x="82" y="464" font-size="11" text-anchor="end" fill="currentColor">60</text>
  <line x1="95" y1="460" x2="710" y2="460" stroke="currentColor" stroke-dasharray="3 3" stroke-opacity="0.15" />
  <!-- Kutu 1: Özet çıkarma (Min: 60, Q1: 62, Med: 65, Q3: 68, Max: 70) -->
  <g stroke="var(--anim-blue)" stroke-width="2">
    <!-- Alt whisker -->
    <line x1="220" y1="460" x2="220" y2="446" />
    <line x1="205" y1="460" x2="235" y2="460" />
    <!-- Kutu -->
    <rect x="195" y="404" width="50" height="42" fill="none" />
    <!-- Medyan -->
    <line x1="195" y1="425" x2="245" y2="425" stroke-width="3" />
    <!-- Üst whisker -->
    <line x1="220" y1="404" x2="220" y2="390" />
    <line x1="205" y1="390" x2="235" y2="390" />
  </g>
  <text x="254" y="429" font-size="11" fill="var(--anim-blue)">Medyan: 65</text>
  <text x="220" y="488" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">Özet çıkarma</text>
  <!-- Kutu 2: Soru çözme (Min: 70, Q1: 72, Med: 75, Q3: 76.5, Max: 78) -->
  <g stroke="var(--anim-red)" stroke-width="2">
    <!-- Alt whisker -->
    <line x1="420" y1="390" x2="420" y2="376" />
    <line x1="405" y1="390" x2="435" y2="390" />
    <!-- Kutu -->
    <rect x="395" y="345" width="50" height="31" fill="none" />
    <!-- Medyan -->
    <line x1="395" y1="355" x2="445" y2="355" stroke-width="3" />
    <!-- Üst whisker -->
    <line x1="420" y1="345" x2="420" y2="334" />
    <line x1="405" y1="334" x2="435" y2="334" />
  </g>
  <text x="454" y="359" font-size="11" fill="var(--anim-red)">Medyan: 75</text>
  <text x="420" y="488" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">Soru çözme</text>
  <!-- Kutu 3: Tekrar okuma (Min: 66, Q1: 68, Med: 70, Q3: 72, Max: 74) -->
  <g stroke="var(--anim-green)" stroke-width="2">
    <!-- Alt whisker -->
    <line x1="620" y1="418" x2="620" y2="404" />
    <line x1="605" y1="418" x2="635" y2="418" />
    <!-- Kutu -->
    <rect x="595" y="376" width="50" height="28" fill="none" />
    <!-- Medyan -->
    <line x1="595" y1="390" x2="645" y2="390" stroke-width="3" />
    <!-- Üst whisker -->
    <line x1="620" y1="376" x2="620" y2="362" />
    <line x1="605" y1="362" x2="635" y2="362" />
  </g>
  <text x="654" y="394" font-size="11" fill="var(--anim-green)">Medyan: 70</text>
  <text x="620" y="488" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">Tekrar okuma</text>
  <!-- Dipnot / Açıklama -->
  <text x="380" y="522" font-size="11" text-anchor="middle" fill="currentColor" stroke-opacity="0.8">Grup içi dağılımlar benzer genişliktedir (SD: 4,1 · 3,1 · 3,2); ortalamalar ise birbirinden belirgin biçimde ayrışır.</text>
</svg>

Okuma: "Soru çözme grubunun puanları en yüksek, özet çıkarma grubununki en düşük; tekrar okuma ortada. Gruplar kısmen örtüşüyor; her grubun kendi içindeki yayılımı benzer."

::: {.notes}
Bir varyans analizinden önce de grafiğe bakarız. Burada iki şeyi aynı anda değerlendiriyoruz: grupların ortalamaları birbirinden ne kadar uzak ve her grubun içindeki puanlar ne kadar dağınık. Ortalamalar arasındaki mesafe, grup içindeki dağınıklığa göre büyükse farkın şansla açıklanması zorlaşır; küçükse farklar şansla açıklanabilir.

Bu cümle, birazdan göreceğimiz F istatistiğinin sözlü tanımıdır. Ayrıca grafik, grupların yayılımlarının benzer olup olmadığını da gösterir; bu da varyans analizinin bir varsayımıdır.
:::

---

## Üç t-testinin sorunu

Her testte Tip I hata olasılığı α = 0,05.

| Test sayısı | Testler bağımsız olsaydı en az bir boş alarm olasılığı (α = 0,05) |
|---:|---:|
| 1 | %5 |
| 3 | yaklaşık %14 |
| 10 | yaklaşık %40 |
| 20 | yaklaşık %64 |

> Gerçekte hiçbir fark yokken bile, test sayısı arttıkça "anlamlı" bir sonuç bulma olasılığı hızla artar.

::: {.notes}
Üç olası çift özet çıkarma–soru çözme, özet çıkarma–tekrar okuma ve soru çözme–tekrar okumadır. Her birine ayrı t-testi yapmak boş alarm riskini artırır. Bu Fark Şans Olabilir mi? notunda (10. not) α'nın, sıfır hipotezi doğruyken onu yanlışlıkla reddetme olasılığı olduğunu görmüştük: her testte yüzde 5 boş alarm riski. Birden çok test yaptığımızda ise bu riskler üst üste biner: üç testte en az birinde boş alarm verme olasılığı yaklaşık yüzde 14'e çıkar; yirmi testte yüzde 64'e. Tablodaki sayılar şöyle bulunur: hiç boş alarm çıkmama olasılığı, test sayısı kadar 0,95'in çarpımıdır (3 testte 0,95³ ≈ 0,86); bunu 1'den çıkarınca tablodaki yüzde bulunur (1 − 0,86 ≈ 0,14). Bu hesap, testlerin birbirini etkilemediğini (burada "bağımsız" bu demektir; "bağımsız gruplar" ise farklı kişilerden oluşan gruplardır) varsayan bir sezgi örneğidir. Aynı grupların ikili karşılaştırmalarında gruplar ortak kullanıldığı için testler birbirinden bağımsız değildir ve kesin yüzde buna göre değişir. Ana mesaj yine de geçerlidir: çok sayıda karşılaştırma yanlış alarm riskini artırır.

Yirmi yüzlü bir zarı yirmi kez atmaya benzer: tek atışta belirli bir yüzün gelme olasılığı yalnızca %5'tir, ama yirmi atışta en az bir kez gelme olasılığı yaklaşık %64'e çıkar. Yeterince çok test yapan bir araştırmacı, gerçekte hiçbir etki olmasa bile büyük olasılıkla "anlamlı" bir sonuç bulur. Varyans analizi "bir yerde fark var mı?" sorusunu bütün grupları tek bir testte sorarak riski bire indirir; hangi çiftin farklı olduğu sorusu sonraki notta.
:::

---

## Tek bir soru, tek bir test

H0: μ₁ = μ₂ = μ₃ (bütün yöntemlerin evren ortalaması eşit)

H1: **En az bir** grubun ortalaması diğerlerinden farklı

Anlamlı *F*: en az bir fark var; hangi gruplar arasında olduğunu söylemez.

> **Tek yönlü varyans analizi (ANOVA):** Üç ya da daha fazla bağımsız grubun ortalamalarını tek bir testle karşılaştırır.

"Tek yönlü": gruplar **tek bir** değişkene (çalışma yöntemi) göre ayrılıyor.

::: {.notes}
Varyans analizinin sıfır hipotezi, bütün grupların evren ortalamalarının eşit olduğunu söyler. Alternatif hipotez en az bir grubun farklı olduğunu söyler. Anlamlı bir ANOVA sonucu hangi grupların farklı olduğunu söylemez, bir yerde fark olduğunu söyler. Hangi grupların farklı olduğu sorusunu bir sonraki notta cevaplayacağız.

"Tek yönlü" ifadesi, grupları ayıran tek bir değişken olduğunu belirtir: burada çalışma yöntemi. İki değişken birlikte (örneğin yöntem ve sınıf düzeyi) incelendiğinde iki yönlü varyans analizi kullanılır; bu vize sonrasının konusu.

Yöntem ortalamaları karşılaştırır; "varyans analizi" adı, toplam değişkenliği (varyansı) iki parçaya bölüştürmesinden gelir.
:::

---

## İki tür değişkenlik

<svg viewBox="0 0 760 520" role="img" aria-label="Gruplar arası ve grup içi değişkenlik bileşenlerini gösteren nokta grafiği. Kalın oklar grup ortalamalarının genel ortalamadan farkını, ince oklar ise bireysel puanların kendi grup ortalamalarından farkını gösterir." style="width:100%;max-height:500px">
  <defs>
    <!-- Kalın Ok Ucu (Gruplar arası) -->
    <marker id="arrow-between" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--anim-amber)" />
    </marker>
    <!-- İnce Ok Ucu (Grup içi) -->
    <marker id="arrow-within" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M 0 1 L 8 4 L 0 7 z" fill="var(--anim-teal)" />
    </marker>
  </defs>
  <!-- Üst Gösterge / Lejant -->
  <g font-size="12">
    <!-- Kalın Ok Tanımı -->
    <line x1="60" y1="30" x2="95" y2="30" stroke="var(--anim-amber)" stroke-width="4" marker-end="url(#arrow-between)" />
    <text x="105" y="34" font-weight="bold" fill="currentColor">Kalın oklar: Gruplar arası değişkenlik</text>
    <text x="105" y="48" font-size="11" fill="currentColor" stroke-opacity="0.8">(Grup ortalamalarının genel ortalamadan sapması)</text>
    <!-- İnce Ok Tanımı -->
    <line x1="430" y1="30" x2="465" y2="30" stroke="var(--anim-teal)" stroke-width="1.8" marker-end="url(#arrow-within)" />
    <text x="475" y="34" font-weight="bold" fill="currentColor">İnce oklar: Grup içi değişkenlik</text>
    <text x="475" y="48" font-size="11" fill="currentColor" stroke-opacity="0.8">(Kişilerin kendi grup ortalamasından sapması)</text>
  </g>
  <!-- Y Ekseni -->
  <line x1="95" y1="70" x2="95" y2="380" stroke="currentColor" stroke-width="1.5" />
  <text x="50" y="225" font-size="12" font-weight="bold" fill="currentColor" text-anchor="middle" transform="rotate(-90 50 225)">Puan</text>
  <!-- Y Tickleri -->
  <line x1="88" y1="80" x2="95" y2="80" stroke="currentColor" stroke-width="1.5" />
  <text x="82" y="84" font-size="11" text-anchor="end" fill="currentColor">80</text>
  <line x1="95" y1="80" x2="690" y2="80" stroke="currentColor" stroke-dasharray="3 3" stroke-opacity="0.12" />
  <line x1="88" y1="150" x2="95" y2="150" stroke="currentColor" stroke-width="1.5" />
  <text x="82" y="154" font-size="11" text-anchor="end" fill="currentColor">75</text>
  <line x1="95" y1="150" x2="690" y2="150" stroke="currentColor" stroke-dasharray="3 3" stroke-opacity="0.12" />
  <line x1="88" y1="220" x2="95" y2="220" stroke="currentColor" stroke-width="1.5" />
  <text x="82" y="224" font-size="11" text-anchor="end" fill="currentColor">70</text>
  <line x1="95" y1="220" x2="690" y2="220" stroke="currentColor" stroke-dasharray="3 3" stroke-opacity="0.12" />
  <line x1="88" y1="290" x2="95" y2="290" stroke="currentColor" stroke-width="1.5" />
  <text x="82" y="294" font-size="11" text-anchor="end" fill="currentColor">65</text>
  <line x1="95" y1="290" x2="690" y2="290" stroke="currentColor" stroke-dasharray="3 3" stroke-opacity="0.12" />
  <line x1="88" y1="360" x2="95" y2="360" stroke="currentColor" stroke-width="1.5" />
  <text x="82" y="364" font-size="11" text-anchor="end" fill="currentColor">60</text>
  <line x1="95" y1="360" x2="690" y2="360" stroke="currentColor" stroke-dasharray="3 3" stroke-opacity="0.12" />
  <!-- Genel Ortalama Referans Çizgisi (M = 69,7) -->
  <line x1="95" y1="225" x2="690" y2="225" stroke="currentColor" stroke-dasharray="6 4" stroke-width="2" stroke-opacity="0.8" />
  <text x="696" y="228" font-size="11" font-weight="bold" fill="currentColor">Genel M = 69,7</text>
  <!-- Grup 1: Özet çıkarma (M = 65, y = 290) -->
  <!-- Grup Ortalaması Çizgisi -->
  <line x1="160" y1="290" x2="275" y2="290" stroke="currentColor" stroke-width="2.5" />
  <text x="155" y="294" font-size="11" font-weight="bold" text-anchor="end" fill="currentColor">M = 65</text>
  <text x="215" y="405" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">Özet çıkarma</text>
  <!-- Kalın Ok: Gruplar arası sapma (M1=65 -> Genel M=69.7) -->
  <line x1="250" y1="290" x2="250" y2="231" stroke="var(--anim-amber)" stroke-width="4" marker-end="url(#arrow-between)" />
  <text x="258" y="262" font-size="10" font-weight="bold" fill="var(--anim-amber)">−4,7</text>
  <!-- İnce Oklar: Grup içi sapmalar (Puanlar -> M1=65) -->
  <g stroke="var(--anim-teal)" stroke-width="1.8">
    <line x1="195" y1="360" x2="195" y2="295" marker-end="url(#arrow-within)" />
    <line x1="195" y1="332" x2="195" y2="295" marker-end="url(#arrow-within)" />
    <line x1="195" y1="248" x2="195" y2="285" marker-end="url(#arrow-within)" />
    <line x1="195" y1="220" x2="195" y2="285" marker-end="url(#arrow-within)" />
  </g>
  <!-- Noktalar: 60, 62, 65, 68, 70 -->
  <g fill="var(--anim-blue)">
    <circle cx="195" cy="360" r="4.5" />
    <circle cx="195" cy="332" r="4.5" />
    <circle cx="195" cy="290" r="4.5" />
    <circle cx="195" cy="248" r="4.5" />
    <circle cx="195" cy="220" r="4.5" />
  </g>
  <!-- Grup 2: Soru çözme (M = 74, y = 164) -->
  <!-- Grup Ortalaması Çizgisi -->
  <line x1="360" y1="164" x2="475" y2="164" stroke="currentColor" stroke-width="2.5" />
  <text x="355" y="168" font-size="11" font-weight="bold" text-anchor="end" fill="currentColor">M = 74</text>
  <text x="415" y="405" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">Soru çözme</text>
  <!-- Kalın Ok: Gruplar arası sapma (M2=74 -> Genel M=69.7) -->
  <line x1="450" y1="164" x2="450" y2="219" stroke="var(--anim-amber)" stroke-width="4" marker-end="url(#arrow-between)" />
  <text x="458" y="196" font-size="10" font-weight="bold" fill="var(--anim-amber)">+4,3</text>
  <!-- İnce Oklar: Grup içi sapmalar (Puanlar -> M2=74) -->
  <g stroke="var(--anim-teal)" stroke-width="1.8">
    <line x1="395" y1="220" x2="395" y2="169" marker-end="url(#arrow-within)" />
    <line x1="395" y1="192" x2="395" y2="169" marker-end="url(#arrow-within)" />
    <line x1="390" y1="150" x2="390" y2="159" marker-end="url(#arrow-within)" />
    <line x1="400" y1="150" x2="400" y2="159" marker-end="url(#arrow-within)" />
    <line x1="395" y1="108" x2="395" y2="159" marker-end="url(#arrow-within)" />
  </g>
  <!-- Noktalar: 70, 72, 75, 75, 78 -->
  <g fill="var(--anim-red)">
    <circle cx="395" cy="220" r="4.5" />
    <circle cx="395" cy="192" r="4.5" />
    <circle cx="390" cy="150" r="4.5" />
    <circle cx="400" cy="150" r="4.5" />
    <circle cx="395" cy="108" r="4.5" />
  </g>
  <!-- Grup 3: Tekrar okuma (M = 70, y = 220) -->
  <!-- Grup Ortalaması Çizgisi -->
  <line x1="560" y1="220" x2="675" y2="220" stroke="currentColor" stroke-width="2.5" />
  <text x="555" y="224" font-size="11" font-weight="bold" text-anchor="end" fill="currentColor">M = 70</text>
  <text x="615" y="405" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">Tekrar okuma</text>
  <!-- Kalın Ok: Gruplar arası sapma (M3=70 -> Genel M=69.7) -->
  <line x1="650" y1="220" x2="650" y2="222" stroke="var(--anim-amber)" stroke-width="4" marker-end="url(#arrow-between)" />
  <text x="656" y="214" font-size="10" font-weight="bold" fill="var(--anim-amber)">≈ 0</text>
  <!-- İnce Oklar: Grup içi sapmalar (Puanlar -> M3=70) -->
  <g stroke="var(--anim-teal)" stroke-width="1.8">
    <line x1="595" y1="276" x2="595" y2="225" marker-end="url(#arrow-within)" />
    <line x1="595" y1="248" x2="595" y2="225" marker-end="url(#arrow-within)" />
    <line x1="595" y1="192" x2="595" y2="215" marker-end="url(#arrow-within)" />
    <line x1="595" y1="164" x2="595" y2="215" marker-end="url(#arrow-within)" />
  </g>
  <!-- Noktalar: 66, 68, 70, 72, 74 -->
  <g fill="var(--anim-green)">
    <circle cx="595" cy="276" r="4.5" />
    <circle cx="595" cy="248" r="4.5" />
    <circle cx="595" cy="220" r="4.5" />
    <circle cx="595" cy="192" r="4.5" />
    <circle cx="595" cy="164" r="4.5" />
  </g>
  <!-- Alt Formül / Vurgu Kutusu -->
  <rect x="120" y="435" width="520" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.3" />
  <text x="380" y="458" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">Toplam Değişkenlik = Gruplar Arası Değişkenlik + Grup İçi Değişkenlik</text>
  <text x="380" y="478" font-size="12" text-anchor="middle" fill="currentColor" stroke-opacity="0.8">F = (Gruplar arası değişkenlik) / (Grup içi değişkenlik)</text>
</svg>

| Kaynak | Ne gösterir? |
|---|---|
| **Gruplar arası** | Grup ortalamaları genel ortalamadan ne kadar uzak? |
| **Grup içi** | Aynı gruptaki kişiler kendi grup ortalamalarından ne kadar uzak? |

::: {.notes}
On beş öğrencinin puanları birbirinden farklıdır. Bu farklılığın iki kaynağı vardır. Birincisi, öğrencilerin farklı yöntemlerle çalışmış olmasıdır: soru çözenlerin puanları genel olarak daha yüksek, özet çıkaranlarınki daha düşük. Bu, gruplar arası değişkenliktir ve yöntemin etkisini (varsa) taşır.

İkincisi, aynı yöntemi kullanan öğrencilerin de birbirinden farklı puanlar almasıdır: özet çıkaran öğrencilerden biri 60, bir başkası 70 almış. Bu, grup içi değişkenliktir; yöntemle açıklanamayan, kişiden kişiye doğal farklılıktır. Varyans analizinin adı buradan gelir: toplam değişkenliği (varyansı) bu iki parçaya ayırır.
:::

---

## F istatistiği

$$
F = \frac{\text{gruplar arası değişkenlik}}{\text{grup içi değişkenlik}}
$$

| F | Anlamı |
|---|---|
| ≈ 1 | Grup ortalamaları, grup içi doğal farklılığın beklettiği kadar farklı → şansla açıklanabilir |
| ≫ 1 | Grup ortalamaları, doğal farklılığın açıklayabileceğinden çok daha farklı → gerçek fark olası |

::: {.notes}
F istatistiği bu iki değişkenliği birbirine oranlar. Grup içi değişkenlik, "yöntemin hiçbir etkisi yoksa grup ortalamaları da ne kadar farklı çıkardı?" sorusunun ölçüsü gibi çalışır. Sıfır hipotezi doğruysa gruplar arası değişkenlik de yalnızca bu doğal farklılıktan gelir ve F, 1 civarında çıkar.

Yöntemin gerçek bir etkisi varsa grup ortalamaları doğal farklılığın açıklayabileceğinden daha fazla ayrışır ve F büyür. t-testinde "fark / standart hata" olan mantık burada "gruplar arası / grup içi" biçimini alır. Ne kadar büyük bir F'nin yeterince büyük olduğuna yine bir p değeri karar verir.

Formüldeki "değişkenlikler", serbestlik derecesine bölünmüş hâlleriyle, yani aşağıdaki tablodaki kareler ortalamalarıyla alınır; η²'de ise kareler toplamları kullanılır.
:::

---

## F'yi değiştiren iki şey

<div data-anim="custom" data-src="anova-f-degisimi.js" data-css="anova-f-degisimi.css"></div>

::: {.notes}
Animasyonda iki deney yapabilirsiniz. Önce grup içi yayılımı sabit tutup ortalamaları birbirinden uzaklaştırın: F büyür, p küçülür. Sonra ortalamaları sabit tutup grup içi yayılımı artırın: aynı ortalama farkları artık doğal farklılığın içinde kaybolur, F küçülür, p büyür.

Bu, t-testinde gördüğümüz "sadece grafiğe bakarak" panellerinin üç gruplu karşılığıdır.
:::

---

## Örneğin sonucu

| Kaynak | Kareler toplamı | *sd* | Kareler ortalaması | *F* | *p* |
|---|---:|---:|---:|---:|---:|
| Gruplar arası | 203,3 | 2 | 101,7 | 8,36 | 0,005 |
| Grup içi | 146,0 | 12 | 12,2 | | |
| Toplam | 349,3 | 14 | | | |

*F* = KO gruplar arası / KO grup içi = 101,7 / 12,2 ≈ 8,36 (yuvarlanmamış kareler ortalamalarıyla; KO: kareler ortalaması)

*F*(2, 12) = 8,36, *p* = 0,005 → H0 reddedilir.

::: {.notes}
Varyans analizi tablosu, değişkenliğin nasıl paylaştırıldığını gösterir (*sd* serbestlik derecesidir, standart sapma *SD* değildir). Toplam değişkenlik (kareler toplamı 349,3) gruplar arası (203,3) ve grup içi (146) parçalara ayrılmıştır. Kareler toplamını 8. notta varyansı hesaplarken görmüştük; orada onu gözlem sayısının bir eksiğine bölmüştük. Burada da her parça kendi serbestlik derecesine bölünerek "kareler ortalaması" elde edilir, çünkü toplam, kaç değerin toplandığıyla büyür. F, bu iki ortalamanın oranıdır: 101,7 / 12,2 ≈ 8,36 (yuvarlanmamış kareler ortalamalarıyla); kareler toplamlarının oranı (203,3 / 146,0 ≈ 1,39) F değildir.

Serbestlik dereceleri: gruplar arası için grup sayısının bir eksiği (3 − 1 = 2), grup içi için toplam kişi sayısından grup sayısının çıkarılması (15 − 3 = 12). F raporlanırken iki serbestlik derecesi de yazılır.

p değeri 0,005'tir; sıfır hipotezi reddedilir: üç yöntemin evren ortalamaları eşit değildir. Bu tablodaki hesapları elle yapmanız beklenmiyor; ama hangi sayının neyi gösterdiğini okuyabilmeniz bekleniyor.
:::

---

## Etki büyüklüğü: η²

$$
\eta^2 = \frac{\text{gruplar arası kareler toplamı}}{\text{toplam kareler toplamı}} = \frac{203{,}3}{349{,}3} \approx 0{,}58
$$

> Puanlardaki toplam değişkenliğin yaklaşık **%58**'i yöntem farkıyla açıklanıyor.

Kaba yorum: 0,01 küçük · 0,06 orta · 0,14 büyük

::: {.notes}
Eta kare (η²), toplam değişkenliğin ne kadarının grup farkından kaynaklandığını gösterir. Bu örnekte puanlardaki farklılığın yarısından fazlası, öğrencilerin hangi yöntemi kullandığıyla ilişkilidir. Bu, kurgusal ve küçük bir örnekte çok büyük bir etkidir; gerçek psikoloji araştırmalarında çok daha küçük değerler tipiktir.

Kaba ölçütler (0,01–0,06–0,14) Cohen'in d için verdiği ölçütlere benzer biçimde yalnızca yön göstericidir. Bu dersin kapsamında η²'yi yorumlamak yeterlidir.
:::

---

## Varsayımlar

| Varsayım | Kontrol | Bozulursa |
|---|---|---|
| Bağımsızlık | Araştırma deseni: her kişi tek grupta | Tekrarlı ölçümler ANOVA (vize sonrası); kümeli veri bu dersin kapsamı dışında |
| Normallik | Gruplardaki puanların / artıkların Q–Q grafiği | Büyük örneklemde dayanıklı; küçükte dikkat |
| Varyans eşitliği | Grup SD'leri, Levene testi | **Welch ANOVA** |

Ölçüt 11. notla aynı: Welch baştan güvenli seçim; SD'ler ve Levene varyansların benzer olduğunu gösteriyorsa klasik tablo da kullanılabilir, şüphede Welch.

Bu örnekte grup SD'leri: 4,1 · 3,1 · 3,2 → benzer.

Bu veride Welch *F*(2; 7,89) = 7,13, *p* = 0,017 · Fisher *F*(2, 12) = 8,36, *p* = 0,005 → aynı karar.

::: {.notes}
Varyans analizinin varsayımları t-testininkilerle aynı mantıktadır. Tek grupta olan kişilerde bağımsızlık desenle sağlanır: aynı kişiler bütün yöntemleri denediyse bu test uygun değildir; bunun için tekrarlı ölçümler varyans analizi kullanılır. Aynı sınıf, aynı öğretmen gibi kümeli veri bu dersin kapsamı dışındadır.

Normallik, her grubun içindeki puanların yaklaşık normal dağılmasını ister; jamovi bunu artıklar (her puanın kendi grup ortalamasından farkı) üzerinden kontrol eder. Varyans eşitliği bozulduğunda, t-testindeki Welch düzeltmesinin bir benzeri olan Welch ANOVA kullanılır; jamovi'nin tek yönlü ANOVA penceresinde varsayılan seçenek budur. İlke 11. notla aynıdır: Welch baştan güvenli seçimdir; SD'ler ve Levene varyansların benzer olduğunu gösteriyorsa klasik tablo da kullanılabilir, şüphede Welch seçilir.

Bu örnekte grupların standart sapmaları birbirine yakındır; varyans eşitliği için ciddi bir sorun görünmüyor. Ama beşer kişilik gruplarda normalliği güvenilir biçimde değerlendirmek zordur; gerçek bir araştırmada grup büyüklükleri daha fazla olmalıdır.

Bu veride Welch ANOVA F(2; 7,89) = 7,13, p = 0,017 verir; Fisher'ın klasik testi F(2, 12) = 8,36, p = 0,005. Varyanslar benzer ve iki test aynı kararı veriyor. Raporda klasik tabloyu kullanıyoruz, çünkü kareler toplamı ve η² oradan okunur; varyanslar belirgin biçimde farklı olsaydı Welch satırını raporlardık.
:::

---

## jamovi'de tek yönlü ANOVA

*ANOVA → One-Way ANOVA*

- *Dependent Variables*: puan · *Grouping Variable*: yöntem
- *Variances*: Don't assume equal (**Welch's**) / Assume equal (Fisher's)
- *Additional Statistics*: Descriptives table, Descriptives plots
- *Assumption Checks*: Homogeneity, Normality, Q–Q plot
- *Post-Hoc Tests*: sonraki notta

Etki büyüklüğü için: *ANOVA → ANOVA* (*Effect Size*: η²)

::: {.callout-note title="Görsel yer tutucu: ANOVA çıktısı"}
**Tür:** ekran görüntüsü · **Gösterdiği:** jamovi One-Way ANOVA çıktısı (Welch ve Fisher satırları; F, df1, df2, p), grup betimsel istatistikleri, Levene tablosu ve ortalama + güven aralığı grafiği · **Öğrencinin görmesi gereken:** F ve iki serbestlik derecesinin yeri; Welch satırında df2'nin ondalıklı olması.
:::

::: {.notes}
jamovi'de tek yönlü varyans analizi için iki pencere vardır. "One-Way ANOVA" penceresi Welch ve klasik (Fisher) testleri, varsayım kontrollerini ve post-hoc testleri pratik biçimde sunar. Etki büyüklüğü η² ise daha genel "ANOVA" penceresinden istenir; bu pencere klasik ANOVA tablosunu (kareler toplamı, kareler ortalaması) da verir.

Veri uzun biçimdedir: bir sütunda puan, bir sütunda kişinin hangi yöntem grubunda olduğu. Yöntem değişkeninin kategorik (faktör) olarak tanımlanmış olması gerekir; bu tanımı veri sözlüğünden kontrol ederiz. Veri sözlüğü notunda tanımlamanın neden önemli olduğunu söylerken kastettiğimiz durumlardan biri budur.
:::

---

## Raporlamak

> Çalışma yönteminin sınav puanı üzerindeki etkisi tek yönlü varyans analiziyle incelendi. Yöntemler arasında anlamlı bir fark bulundu, *F*(2, 12) = 8,36, *p* = 0,005, η² = 0,58. Ortalama puanlar soru çözme grubunda en yüksek (*M* = 74,0, *SD* = 3,1), özet çıkarma grubunda en düşüktü (*M* = 65,0, *SD* = 4,1); tekrar okuma grubu ortadaydı (*M* = 70,0, *SD* = 3,2).

::: {.notes}
Rapor, hangi analizin yapıldığını, F değerini iki serbestlik derecesiyle, p değerini ve etki büyüklüğünü verir; ardından grupların betimsel istatistiklerini sunar. Welch ANOVA kullanıldıysa bu belirtilir ve onun serbestlik dereceleri yazılır.

Bu rapor hâlâ eksiktir: "yöntemler arasında fark var" diyor, ama hangi yöntemlerin birbirinden farklı olduğunu söylemiyor. Soru çözme ile tekrar okuma arasındaki 4 puanlık fark da anlamlı mı? Bu soruyu bir sonraki notta post-hoc testlerle cevaplayıp raporu tamamlayacağız.
:::

---

## Karar soruları

1. Dört grubu karşılaştıran bir araştırmacı bütün çiftleri t-testiyle karşılaştırıyor. Kaç test yapar ve sorun ne?
2. *F* = 0,9 çıktı. Ne söyleyebilirsiniz?
3. ANOVA anlamlı çıktı. "Üç yöntem birbirinden farklıdır" demek doğru mu?
4. Aynı 20 öğrenci üç farklı ortamda (sessiz, müzikli, kalabalık) test ediliyor. Bu notun ANOVA'sı uygun mu?

::: {.notes}
1. Dört grupta 6 çift vardır (4 × 3 / 2). Altı ayrı testte yanlış alarm riski belirgin biçimde artar; testler bağımsız olsaydı en az bir boş alarm olasılığı yaklaşık %26 olurdu. Önce tek yönlü ANOVA; ardından bu derste izlediğimiz sırayla düzeltilmiş çift karşılaştırmaları yapılır. Düzeltme, birden çok çifti sınadığımız için gerekir.
2. F 1'e yakın; grup ortalamaları arasındaki farklılık, grup içi doğal farklılığın beklettiği düzeyde. p büyük çıkacak; anlamlı bir fark bulunamadı.
3. Hayır. Anlamlı bir ANOVA en az bir grubun farklı olduğunu söyler; hangi grupların farklı olduğunu söylemez. Bunun için post-hoc testler gerekir.
4. Hayır. Aynı kişiler üç koşulda ölçülmüş; gruplar bağımsız değildir. Tekrarlı ölçümler varyans analizi gerekir (vize sonrası konu).
:::

---

## Bu nottan kalanlar

- Çok sayıda t-testi **Tip I hatayı şişirir**; ANOVA bütün grupları tek testte karşılaştırır.
- H0: bütün ortalamalar eşit; H1: **en az biri** farklı.
- **F = gruplar arası / grup içi değişkenlik**; ≈ 1 şans, ≫ 1 gerçek fark olası.
- **η²:** toplam değişkenliğin grup farkıyla açıklanan oranı.
- Varsayımlar: bağımsızlık, normallik, varyans eşitliği (şüphede **Welch ANOVA**).
- Anlamlı *F* hangi grupların farklı olduğunu söylemez.

**Bu notta ele alınmayanlar:** Kareler toplamının elle hesabı; iki yönlü ve tekrarlı ölçümler ANOVA (vize sonrası); parametrik olmayan alternatif (Kruskal–Wallis) yalnızca adıyla.

**Sıradaki konu:** Fark var; ama nerede?

::: {.notes}
Varyans analizi, t-testinin mantığını ikiden fazla gruba genişletti: bir farkı, o farkın şansla ne kadar oynayabileceğiyle karşılaştırmak. Değişen yalnızca karşılaştırmanın biçimi oldu: iki ortalama arasındaki fark yerine, grup ortalamaları arasındaki değişkenlik.

Ama ANOVA'nın cevabı genel bir cevaptır. Sıradaki notta hangi grupların birbirinden farklı olduğunu, Tip I hatayı yeniden şişirmeden bulmanın yolunu ve vize öncesi öğrendiğimiz bütün testleri bir arada kullanmamızı sağlayacak bir karar haritasını göreceğiz.
:::
