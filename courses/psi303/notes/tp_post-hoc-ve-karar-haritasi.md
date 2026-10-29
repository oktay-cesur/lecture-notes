---
title: "Fark Nerede? Post-Hoc ve Vize Karar Haritası"
subtitle: "PSİ 303 — Davranışsal İstatistik için Yazılım Uygulamaları"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-19
description: Anlamlı bir ANOVA sonrasında post-hoc karşılaştırmalar; Tukey ve Games-Howell; çoklu karşılaştırma düzeltmesinin mantığı; sonuçların raporlanması; vize öncesi konuları birleştiren karar haritası ve senaryolar.
execute:
  echo: false
---

## Kaldığımız yer

Üç çalışma yöntemi: *F*(2, 12) = 8,36, *p* = 0,005

| Yöntem | *M* |
|---|---:|
| Özet çıkarma | 65 |
| Tekrar okuma | 70 |
| Soru çözme | 74 |

> En az bir yöntem farklı. **Hangisi, hangisinden?**

::: {.notes}
Önceki notta varyans analizi bize "yöntemler arasında bir yerde fark var" dedi. Ama bu cevap bir öğretmene ya da bir öğrenciye pek yardımcı olmaz: soru çözme özet çıkarmaktan mı iyi, tekrar okumadan mı, yoksa ikisinden de mi? Tekrar okuma özet çıkarmaktan farklı mı?

Bu soruları cevaplamak için grupları ikişer ikişer karşılaştırmamız gerekiyor. Ama önceki notta, "Üç t-testinin sorunu" slaydında gördüğümüz sorun yerinde duruyor: her karşılaştırma ayrı bir boş alarm riski taşır. Önce ikili karşılaştırmaları bu riski kontrol ederek nasıl yapacağımıza bakacağız; ardından vize öncesi gördüğümüz bütün araçları tek bir karar haritasında birleştireceğiz.
:::

---

## Post-hoc karşılaştırmalar

> **Post-hoc ("sonradan") testler:** Bütün grup çiftlerini toplam Tip I hatayı kontrol ederek karşılaştıran testler.

- Üç grup → 3 çift · Dört grup → 6 çift · Beş grup → 10 çift
- Her çiftin p değeri, yapılan **karşılaştırma sayısını hesaba katarak** düzeltilir.
- Bu derste sıra: önce genel ANOVA, sonra çiftler; ANOVA anlamsızsa sonuç aramak için çiftlere geçmeyiz.
- Düzeltmenin nedeni çiftlerin çokluğudur; genel *F* bunun matematiksel önkoşulu değil, yalnızca bu dersin sırasıdır.

::: {.notes}
Post-hoc testler, adlarından da anlaşılacağı gibi, ana analizden sonra yapılır. Bu derste izlediğimiz sıra şudur: önce genel ANOVA, sonra çiftler; ANOVA anlamsız çıkmışsa sonuç aramak için çiftlere geçmeyiz. Düzeltmenin nedeni çiftlerin çokluğudur; genel F'nin anlamlı çıkması düzeltilmiş karşılaştırmaların matematiksel bir önkoşulu değildir, yalnızca bu dersin sırasıdır.

Grup sayısı arttıkça çift sayısı hızla artar: k grup için k × (k − 1) / 2 çift vardır. Düzeltme yapılmazsa beş grupta on karşılaştırma yapılır ve gerçekte hiçbir fark yokken bile en az bir "anlamlı" sonuç çıkma olasılığı yaklaşık %40'tır (önceki notun tablosundaki 10 test; testler bağımsız olsaydı. Ortak gruplar yüzünden kesin değer farklıdır, ama risk yine belirgin biçimde artar). Post-hoc testler bu toplam riski α düzeyinde tutmaya çalışır.
:::

---

## Düzeltmenin mantığı

En basit fikir (Bonferroni): eşiği karşılaştırma sayısına böl.

$$
\frac{0{,}05}{3} \approx 0{,}017
$$

- Her çift için p < 0,017 aranır.
- Toplam boş alarm riski yaklaşık 0,05'te kalır.
- Bedeli: her karşılaştırma **daha temkinli** → gerçek farkları kaçırma riski artar.

::: {.notes}
Düzeltmenin en sezgisel biçimi, toplam α'yı karşılaştırmalar arasında paylaştırmaktır. Üç karşılaştırma yapıyorsak her birine 0,05'in üçte birini, yaklaşık 0,017'yi veririz; böylece üç testin toplam boş alarm riski 0,05'i aşmaz. Yazılımlar bunu genellikle tersinden yapar: eşiği küçültmek yerine p değerlerini büyütür ve düzeltilmiş p'yi yine 0,05 ile karşılaştırmanızı ister. Birazdan göreceğimiz yöntemler de karşılaştırma sayısını kendi yollarıyla hesaba katar; tablodaki düzeltilmiş p yeter.

Her düzeltmenin bir bedeli vardır: boş alarmları azaltırken gerçek farkları gözden kaçırma (Tip II hata) olasılığını artırır. Önceki notlarda gördüğümüz dengenin aynısı.
:::

---

## Hangi post-hoc test?

| Durum | Önerilen test |
|---|---|
| Varyanslar benzer | **Tukey** |
| Varyanslar belirgin biçimde farklı ya da şüphe var (Welch ANOVA) | **Games–Howell** |

Ölçüt 11. ve 13. notlarla aynı: Welch baştan güvenli seçim; SD'ler ve Levene varyansların farklı olduğunu gösteriyorsa ya da şüphe varsa Welch ANOVA ve Games–Howell, varyanslar benzerse klasik ANOVA ve Tukey. Levene anlamsızsa bu eşitliği kanıtlamaz.

Bu örnekte varyanslar benzer → **Tukey**

::: {.notes}
Bütün çiftleri karşılaştırmak için en yaygın kullanılan test Tukey testidir; grupların varyanslarının benzer olduğunu varsayar. Games–Howell bu varsayımı yapmaz ve Welch ANOVA ile birlikte kullanılır. Ölçüt 11. ve 13. notlardaki gibidir: Welch baştan güvenli seçimdir; SD'ler ve Levene testi varyansların belirgin biçimde farklı olduğunu gösteriyorsa ya da şüphe varsa Welch ANOVA ve Games–Howell, varyanslar benzerse klasik ANOVA ve Tukey. Levene anlamsız çıkarsa bu eşitliği kanıtlamaz.

Bu örnekte grupların standart sapmaları birbirine yakındır (4,1, 3,1, 3,2); Tukey testi uygun.
:::

---

## Tukey sonuçları

| Karşılaştırma | Ortalama farkı | Tukey *p* |
|---|---:|---:|
| Soru çözme − Özet çıkarma | 9 | **0,004** |
| Tekrar okuma − Özet çıkarma | 5 | 0,100 |
| Soru çözme − Tekrar okuma | 4 | 0,207 |

> Yalnızca **soru çözme ile özet çıkarma** arasındaki fark anlamlı.
> Anlamlı olmayan çiftler eşit demek değildir: tekrar okuma iki uçtan ayrılmıyor, uçlar birbirinden ayrılıyor. Genel test ile çiftlerin sonuçları da farklılaşabilir.

::: {.notes}
Üç çiftten yalnızca biri anlamlıdır (önceki notun 4 puanlık farkı üçüncü satırdır): soru çözen öğrencilerin puanları özet çıkaran öğrencilerinkinden ortalama 9 puan yüksektir. Diğer iki farkın p değeri 0,05'in üzerindedir; bu küçük örneklemde şansla açıklanabilirler.

Burada ilk bakışta çelişkili görünen bir durum var: tekrar okuma grubu ortadadır ve ne özet çıkarmadan ne de soru çözmeden anlamlı olarak farklıdır; ama bu iki grup birbirinden farklıdır. Bu bir çelişki değildir. "Anlamlı fark bulunamadı" eşitlik demek değildir; tekrar okumanın tam olarak nerede durduğunu bu veriyle belirleyemiyoruz.

Genel test ile düzeltilmiş çift karşılaştırmaları farklı eşiklerle çalıştığı için iki ters durum da mümkündür: genel ANOVA anlamlı çıkıp hiçbir çiftin anlamlı çıkmaması, ya da genel test anlamsızken bir çiftin anlamlı çıkması. İlkinde ANOVA'nın söylediği "bir yerde fark var" yine geçerlidir, ama çift düzeyinde bunu gösteremediğimizi raporlarız.
:::

---

## Grafiği okuyalım

<svg viewBox="0 0 680 430" role="img" aria-label="Üç çalışma yönteminin (özet çıkarma M=65, tekrar okuma M=70, soru çözme M=74) ortalamalarını ve yüzde 95 güven aralıklarını gösteren dikey hata çubuklu grafik. Soru çözme ile özet çıkarma aralıkları örtüşmezken üstteki köprüyle p eşittir 0,004 anlamlı farkı gösterilmiştir; tekrar okumanın güven aralığı her iki grubun aralığıyla da örtüşmektedir." style="width:100%;max-height:430px">
  <defs>
    <marker id="bridge-tick" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto">
      <circle cx="5" cy="5" r="3" fill="currentColor"/>
    </marker>
  </defs>
  <!-- Y Eksen Kılavuz Çizgileri ve Değerleri -->
  <line x1="90" y1="350" x2="630" y2="350" stroke="currentColor" stroke-width="2"/>
  <line x1="90" y1="65" x2="90" y2="350" stroke="currentColor" stroke-width="2"/>
  <!-- Kılavuz çizgileri ve ölçek işaretleri -->
  <g stroke="currentColor" stroke-opacity="0.15" stroke-dasharray="4 4" stroke-width="1">
    <line x1="90" y1="295" x2="630" y2="295"/>
    <line x1="90" y1="240" x2="630" y2="240"/>
    <line x1="90" y1="185" x2="630" y2="185"/>
    <line x1="90" y1="130" x2="630" y2="130"/>
    <line x1="90" y1="75" x2="630" y2="75"/>
  </g>
  <!-- Y Ekseni Değer Etiketleri ve Tikleri -->
  <g font-size="12" text-anchor="end" fill="currentColor">
    <line x1="84" y1="350" x2="90" y2="350" stroke="currentColor" stroke-width="1.5"/>
    <text x="80" y="354">55</text>
    <line x1="84" y1="295" x2="90" y2="295" stroke="currentColor" stroke-width="1.5"/>
    <text x="80" y="299">60</text>
    <line x1="84" y1="240" x2="90" y2="240" stroke="currentColor" stroke-width="1.5"/>
    <text x="80" y="244">65</text>
    <line x1="84" y1="185" x2="90" y2="185" stroke="currentColor" stroke-width="1.5"/>
    <text x="80" y="189">70</text>
    <line x1="84" y1="130" x2="90" y2="130" stroke="currentColor" stroke-width="1.5"/>
    <text x="80" y="134">75</text>
    <line x1="84" y1="75" x2="90" y2="75" stroke="currentColor" stroke-width="1.5"/>
    <text x="80" y="79">80</text>
  </g>
  <text transform="translate(28, 208) rotate(-90)" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Sınav Puanı</text>
  <!-- Örtüşme İpuçları (Kılavuz Bantları) -->
  <line x1="190" y1="200" x2="360" y2="200" stroke="var(--anim-amber)" stroke-opacity="0.35" stroke-dasharray="2 3" stroke-width="1.5"/>
  <line x1="190" y1="220" x2="360" y2="220" stroke="var(--anim-blue)" stroke-opacity="0.35" stroke-dasharray="2 3" stroke-width="1.5"/>
  <line x1="360" y1="176" x2="530" y2="176" stroke="var(--anim-green)" stroke-opacity="0.35" stroke-dasharray="2 3" stroke-width="1.5"/>
  <line x1="360" y1="150" x2="530" y2="150" stroke="var(--anim-blue)" stroke-opacity="0.35" stroke-dasharray="2 3" stroke-width="1.5"/>
  <!-- Anlamlı Çift Köprüsü (Özet vs Soru Çözme) -->
  <path d="M 190 60 L 190 42 L 530 42 L 530 60" fill="none" stroke="currentColor" stroke-width="2"/>
  <rect x="300" y="30" width="120" height="24" rx="12" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1"/>
  <text x="360" y="46" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--anim-blue)">p = 0,004 (Tukey)</text>
  <!-- Grup 1: Özet çıkarma (M = 65,0; GA: 61,4 - 68,6) -->
  <g>
    <line x1="190" y1="200" x2="190" y2="280" stroke="var(--anim-amber)" stroke-width="3"/>
    <line x1="176" y1="200" x2="204" y2="200" stroke="var(--anim-amber)" stroke-width="3"/>
    <line x1="176" y1="280" x2="204" y2="280" stroke="var(--anim-amber)" stroke-width="3"/>
    <circle cx="190" cy="240" r="6" fill="var(--anim-amber)" stroke="currentColor" stroke-width="2"/>
    <text x="210" y="244" font-size="13" font-weight="bold" fill="currentColor">M = 65,0</text>
    <text x="210" y="260" font-size="11" fill="currentColor" fill-opacity="0.8">%95 GA: [61,4, 68,6]</text>
    <text x="190" y="375" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Özet çıkarma</text>
    <text x="190" y="394" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.75">SD = 4,1 · n = 5</text>
  </g>
  <!-- Grup 2: Tekrar okuma (M = 70,0; GA: 66,8 - 73,2) -->
  <g>
    <line x1="360" y1="150" x2="360" y2="220" stroke="var(--anim-blue)" stroke-width="3"/>
    <line x1="346" y1="150" x2="374" y2="150" stroke="var(--anim-blue)" stroke-width="3"/>
    <line x1="346" y1="220" x2="374" y2="220" stroke="var(--anim-blue)" stroke-width="3"/>
    <circle cx="360" cy="185" r="6" fill="var(--anim-blue)" stroke="currentColor" stroke-width="2"/>
    <text x="380" y="189" font-size="13" font-weight="bold" fill="currentColor">M = 70,0</text>
    <text x="380" y="205" font-size="11" fill="currentColor" fill-opacity="0.8">%95 GA: [66,8, 73,2]</text>
    <text x="360" y="375" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Tekrar okuma</text>
    <text x="360" y="394" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.75">SD = 3,2 · n = 5</text>
  </g>
  <!-- Grup 3: Soru çözme (M = 74,0; GA: 70,8 - 77,2) -->
  <g>
    <line x1="530" y1="106" x2="530" y2="176" stroke="var(--anim-green)" stroke-width="3"/>
    <line x1="516" y1="106" x2="544" y2="106" stroke="var(--anim-green)" stroke-width="3"/>
    <line x1="516" y1="176" x2="544" y2="176" stroke="var(--anim-green)" stroke-width="3"/>
    <circle cx="530" cy="141" r="6" fill="var(--anim-green)" stroke="currentColor" stroke-width="2"/>
    <text x="550" y="145" font-size="13" font-weight="bold" fill="currentColor">M = 74,0</text>
    <text x="550" y="161" font-size="11" fill="currentColor" fill-opacity="0.8">%95 GA: [70,8, 77,2]</text>
    <text x="530" y="375" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Soru çözme</text>
    <text x="530" y="394" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.75">SD = 3,1 · n = 5</text>
  </g>
  <!-- Pedagojik Açıklama Etiketi -->
  <rect x="250" y="85" width="220" height="22" rx="4" fill="currentColor" fill-opacity="0.05"/>
  <text x="360" y="100" text-anchor="middle" font-size="11" fill="currentColor">Özet ile Soru çözme örtüşmez (farklı)</text>
  <text x="275" y="213" text-anchor="middle" font-size="10" fill="var(--anim-amber)">örtüşür</text>
  <text x="445" y="166" text-anchor="middle" font-size="10" fill="var(--anim-green)">örtüşür</text>
</svg>

Okuma: "Soru çözme en yüksek, özet çıkarma en düşük ortalamaya sahip ve bu iki grup belirgin biçimde ayrışıyor. Tekrar okuma ikisinin arasında ve her ikisiyle de örtüşüyor."

::: {.notes}
Ortalamaları ve güven aralıklarını gösteren bir grafik, post-hoc tablosunun söylediklerini bir bakışta gösterir. Aralıkları birbirinden belirgin biçimde ayrılan gruplar büyük olasılıkla farklıdır; aralıkları geniş ölçüde örtüşen gruplar arasında güvenilir bir fark söylenemez.

Bu tür grafikleri okurken bir uyarı: iki güven aralığının biraz örtüşmesi, farkın anlamsız olduğunu kesin olarak göstermez. Kesin karar post-hoc testindir; grafik, sonucu görmenin ve anlatmanın aracıdır.
:::

---

## jamovi'de post-hoc

*ANOVA → One-Way ANOVA* → *Post-Hoc Tests*:

- Games–Howell (varyanslar eşit varsayılmıyor)
- Tukey (varyanslar eşit varsayılıyor)

t ve serbestlik derecesi sütunları için post-hoc test istatistiği seçeneği ayrıca açılır (varsayılan: kapalı)

Fark = ilk grup − ikinci grup; negatifse ilk grubun ortalaması daha düşüktür.

::: {.callout-note title="Görsel yer tutucu: Post-hoc tablosu"}
**Tür:** ekran görüntüsü · **Gösterdiği:** jamovi'de üç yöntem için Tukey post-hoc tablosu (her çift için ortalama farkı, t, df, düzeltilmiş p) · **Öğrencinin görmesi gereken:** Tablodaki her satırın bir çifte karşılık geldiği; raporlanacak p'nin düzeltilmiş p olduğu.
:::

::: {.notes}
jamovi'nin One-Way ANOVA penceresinde post-hoc test türü, varyans varsayımına göre seçilir: Welch ANOVA kullanıyorsanız Games–Howell, klasik ANOVA kullanıyorsanız Tukey. Tabloda ortalama farkı ve düzeltilmiş p yanında t ve serbestlik derecesi de görmek istiyorsanız post-hoc test istatistiği seçeneğini ayrıca açmanız gerekir; jamovi belgelerine göre bu seçenek varsayılan olarak kapalıdır.

Tabloyu okurken her satırın bir grup çiftine karşılık geldiğine ve raporlanacak p değerinin düzeltilmiş p olduğuna dikkat edin. Bazı tablolar farkın yönünü "A − B" biçiminde verir; negatif bir fark, ilk grubun ortalamasının daha düşük olduğu anlamına gelir. Yönü, hangi grubun hangi sırada yazıldığından okuruz.
:::

---

## Raporlamak

> Çalışma yönteminin sınav puanı üzerindeki etkisi anlamlıydı, *F*(2, 12) = 8,36, *p* = 0,005, η² = 0,58. Tukey post-hoc karşılaştırmaları, soru çözme grubunun (*M* = 74,0, *SD* = 3,1) özet çıkarma grubundan (*M* = 65,0, *SD* = 4,1) anlamlı olarak yüksek puan aldığını gösterdi (*p* = 0,004). Tekrar okuma grubu (*M* = 70,0, *SD* = 3,2) diğer iki gruptan anlamlı olarak farklı değildi (*p*'ler ≥ 0,10).

::: {.notes}
Önceki nottaki rapor, post-hoc sonuçlarıyla tamamlanmış oldu: önce genel sonuç (F, p, η²), sonra hangi post-hoc testin kullanıldığı, ardından anlamlı ve anlamlı olmayan karşılaştırmalar.
:::

---

## Vize öncesi: tek bir zincir

<svg viewBox="0 0 980 300" role="img" aria-label="Araştırma sorusundan rapora kadar olan 7 aşamalı analiz süreci zinciri. Soldan sağa: Araştırma sorusu ve evren, veri kaydı ve sözlük, veri hazırlığı, grafik ve betimleme, belirsizlik ve hipotez, hipotez testleri ve bilimsel rapor. Testlerin en son halka olduğu ve önceki bir halkadaki hatanın tüm sonucu geçersiz kılacağı vurgulanır." style="width:100%;max-height:320px">
  <defs>
    <filter id="chain-shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="currentColor" flood-opacity="0.1"/>
    </filter>
  </defs>
  <!-- Birbirine Geçen Zincir Halkaları (Bağlantılar) -->
  <g fill="none" stroke="currentColor" stroke-width="3" stroke-opacity="0.4">
    <rect x="131" y="98" width="28" height="28" rx="14"/>
    <rect x="267" y="98" width="28" height="28" rx="14"/>
    <rect x="403" y="98" width="28" height="28" rx="14"/>
    <rect x="539" y="98" width="28" height="28" rx="14"/>
    <rect x="675" y="98" width="28" height="28" rx="14"/>
    <rect x="811" y="98" width="28" height="28" rx="14"/>
  </g>
  <!-- Halka 1: Araştırma Sorusu (Not 1) -->
  <g>
    <rect x="18" y="38" width="116" height="152" rx="10" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.5"/>
    <rect x="28" y="48" width="96" height="22" rx="11" fill="currentColor" fill-opacity="0.1"/>
    <text x="76" y="63" text-anchor="middle" font-size="11" font-weight="bold" fill="currentColor">1. NOT</text>
    <text x="76" y="96" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">Araştırma</text>
    <text x="76" y="112" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">Sorusu</text>
    <text x="76" y="142" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.8">• Evren</text>
    <text x="76" y="158" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.8">• Örneklem</text>
  </g>
  <!-- Halka 2: Veri Kaydı ve Sözlük (Not 2-4) -->
  <g>
    <rect x="154" y="38" width="116" height="152" rx="10" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.5"/>
    <rect x="164" y="48" width="96" height="22" rx="11" fill="currentColor" fill-opacity="0.1"/>
    <text x="212" y="63" text-anchor="middle" font-size="11" font-weight="bold" fill="currentColor">2–4. NOTLAR</text>
    <text x="212" y="96" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">Veri Kaydı</text>
    <text x="212" y="112" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">&amp; Yapısı</text>
    <text x="212" y="136" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.8">• Veri tablosu</text>
    <text x="212" y="152" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.8">• Ölçme düzeyi</text>
    <text x="212" y="168" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.8">• Veri sözlüğü</text>
  </g>
  <!-- Halka 3: Veriyi Hazırlamak (Not 5) -->
  <g>
    <rect x="290" y="38" width="116" height="152" rx="10" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.5"/>
    <rect x="300" y="48" width="96" height="22" rx="11" fill="currentColor" fill-opacity="0.1"/>
    <text x="348" y="63" text-anchor="middle" font-size="11" font-weight="bold" fill="currentColor">5. NOT</text>
    <text x="348" y="96" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">Veriyi</text>
    <text x="348" y="112" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">Hazırlama</text>
    <text x="348" y="136" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.8">• Eksik kodlar</text>
    <text x="348" y="152" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.8">• Temizleme</text>
    <text x="348" y="168" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.8">• Ters maddeler</text>
  </g>
  <!-- Halka 4: Grafik ve Betimleme (Not 6-9) -->
  <g>
    <rect x="426" y="38" width="116" height="152" rx="10" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.5"/>
    <rect x="436" y="48" width="96" height="22" rx="11" fill="currentColor" fill-opacity="0.1"/>
    <text x="484" y="63" text-anchor="middle" font-size="11" font-weight="bold" fill="currentColor">6–9. NOTLAR</text>
    <text x="484" y="96" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">Grafik &amp;</text>
    <text x="484" y="112" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">Betimleme</text>
    <text x="484" y="136" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.8">• Merkez (Ort/Med)</text>
    <text x="484" y="152" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.8">• Yayılım (SS/IQR)</text>
    <text x="484" y="168" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.8">• Dağılım biçimi</text>
  </g>
  <!-- Halka 5: Belirsizlik ve Karar (Not 10) -->
  <g>
    <rect x="562" y="38" width="116" height="152" rx="10" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.5"/>
    <rect x="572" y="48" width="96" height="22" rx="11" fill="currentColor" fill-opacity="0.1"/>
    <text x="620" y="63" text-anchor="middle" font-size="11" font-weight="bold" fill="currentColor">10. NOT</text>
    <text x="620" y="96" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">Belirsizlik</text>
    <text x="620" y="112" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">&amp; Karar</text>
    <text x="620" y="136" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.8">• Standart hata</text>
    <text x="620" y="152" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.8">• Hipotez mantığı</text>
    <text x="620" y="168" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.8">• Tip I hata &amp; p</text>
  </g>
  <!-- Halka 6: Testler (Not 11-14) VURGULU -->
  <g>
    <rect x="698" y="38" width="116" height="152" rx="10" fill="currentColor" fill-opacity="0.06" stroke="var(--anim-blue)" stroke-width="2.5"/>
    <rect x="708" y="48" width="96" height="22" rx="11" fill="var(--anim-blue)" fill-opacity="0.2"/>
    <text x="756" y="63" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--anim-blue)">11–14. NOTLAR</text>
    <text x="756" y="96" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">Hipotez</text>
    <text x="756" y="112" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">Testleri</text>
    <text x="756" y="136" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.9">• t-testleri</text>
    <text x="756" y="152" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.9">• ANOVA (F)</text>
    <text x="756" y="168" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.9">• Post-hoc çiftler</text>
  </g>
  <!-- Halka 7: Rapor (Sonuç) VURGULU -->
  <g>
    <rect x="834" y="38" width="116" height="152" rx="10" fill="currentColor" fill-opacity="0.06" stroke="var(--anim-green)" stroke-width="2.5"/>
    <rect x="844" y="48" width="96" height="22" rx="11" fill="var(--anim-green)" fill-opacity="0.2"/>
    <text x="892" y="63" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--anim-green)">SONUÇ</text>
    <text x="892" y="96" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">Bilimsel</text>
    <text x="892" y="112" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">Rapor</text>
    <text x="892" y="136" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.9">• F, p, etki (η²)</text>
    <text x="892" y="152" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.9">• Güven aralıkları</text>
    <text x="892" y="168" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.9">• Karar &amp; yön</text>
  </g>
  <!-- Alt Vurgu Kutusu: Zincir Kuralı -->
  <rect x="18" y="212" width="932" height="66" rx="8" fill="currentColor" fill-opacity="0.03" stroke="var(--anim-amber)" stroke-width="1.5" stroke-dasharray="6 4"/>
  <text x="36" y="238" font-size="13" font-weight="bold" fill="var(--anim-amber)">ZİNCİR KURALI: Testler sürecin en görünür ama en son halkasıdır.</text>
  <text x="36" y="260" font-size="12" fill="currentColor">Önceki halkalardan tek bir hata (ör. sözlükte tanımlanmamış eksik kod 99) F değerini 8,36'dan 0,24'e düşürür ve gerçek farkı bütünüyle yok eder.</text>
</svg>

> Zincirin önceki halkalarındaki tek bir hata (ör. tanımsız eksik kod), sondaki *p* değerini anlamsız kılabilir. Bir tanımsız kod: *F* 8,36 → 0,24.

::: {.notes}
Vize öncesi öğrendiğimiz konular tek bir sürecin halkalarıdır. Bir araştırma sorusu, kimin hakkında konuştuğumuzla başlar; veri doğru biçimde tabloya ve yazılıma aktarılır, analize hazırlanır; grafiklerle ve betimsel istatistiklerle tanınır; ancak bundan sonra bir test yapılır ve sonuç etkinin büyüklüğüyle birlikte raporlanır.

Zincirin herhangi bir halkasındaki bir sorun (yanlı bir örneklem, tanımlanmamış bir eksik kodu, çevrilmemiş ters madde, grafiğe hiç bakılmadan seçilmiş bir test) sonundaki p değerini anlamsız kılabilir. Kendi verimizde: özet çıkarma grubundaki bir 70 yerine sözlükte tanımlanmamış bir eksik kod olan 99 kalırsa grubun ortalaması 65'ten 70,8'e çıkar ve üç ortalama 70,8 · 74 · 70 olur; F(2, 12) 8,36'dan 0,24'e, p 0,005'ten 0,79'a değişir. Tek bir tanımsız kod bu veride farkı görünmez kılar: grup içi değişkenlik 12,2'den yaklaşık 92'ye şişer ve gruplar arası / grup içi oranı, yani F çöker. Testler zincirin en görünür, ama en son halkasıdır.
:::

---

## Karar haritası

<svg viewBox="0 0 1000 620" role="img" aria-label="İstatistiksel test seçim karar haritası akış şeması. Üç soru ile test seçilir: Amaç (yalnızca betimleme mi yoksa ortalama karşılaştırması mı?), grup veya ölçüm sayısı (bir, iki ya da üç ve üzeri) ve ölçüm ilişkisi (aynı kişiler mi, bağımsız mı?). Tek örneklem t, bağımsız t, eşleştirilmiş t, tek yönlü ANOVA ve Tukey ile Games-Howell testlerine yönlendirir. Harita sınırında kategorik bağımlı değişken, açıkça bozuk normallik ve vize sonrası desenler için kapsam dışı uyarıları yer alır." style="width:100%;max-height:600px">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="currentColor"/>
    </marker>
    <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--anim-blue)"/>
    </marker>
    <marker id="arrow-amber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--anim-amber)"/>
    </marker>
    <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--anim-green)"/>
    </marker>
  </defs>
  <!-- ==================== ANA AKIŞ ŞEMASI ALANI ==================== -->
  <!-- SORU 1: Amaç -->
  <rect x="130" y="20" width="340" height="46" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
  <text x="300" y="48" text-anchor="middle" font-size="13" font-weight="bold" fill="currentColor">(1) Amaç yalnızca betimlemek mi?</text>
  <!-- Soru 1 -> Evet Yolu (Betimleme) -->
  <path d="M 470 43 L 530 43" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="495" y="36" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--anim-teal)">Evet</text>
  <rect x="535" y="12" width="195" height="74" rx="8" fill="currentColor" fill-opacity="0.04" stroke="var(--anim-teal)" stroke-width="1.5"/>
  <text x="632" y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--anim-teal)">Yalnızca Betimleme</text>
  <text x="545" y="49" font-size="11" fill="currentColor">• Kategorik: Frekans, % + Çubuk</text>
  <text x="545" y="67" font-size="11" fill="currentColor">• Nicel: Ort/Med, SS/IQR + Hist/Kutu</text>
  <!-- Soru 1 -> Hayır Yolu (Ortalama Karşılaştırması) -->
  <path d="M 300 66 L 300 114" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="305" y="94" font-size="11" font-weight="bold" fill="currentColor">Hayır (Ortalama karşılaştırması)</text>
  <!-- SORU 2: Grup ya da Ölçüm Sayısı -->
  <rect x="120" y="118" width="360" height="46" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
  <text x="300" y="146" text-anchor="middle" font-size="13" font-weight="bold" fill="currentColor">(2) Kaç grup ya da ölçüm var?</text>
  <!-- Kol 1: 1 Grup ve Sabit Değer -->
  <path d="M 180 164 L 180 185 L 105 185 L 105 214" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-blue)"/>
  <text x="135" y="180" text-anchor="middle" font-size="11" fill="currentColor">1 grup + sabit değer</text>
  <rect x="20" y="218" width="170" height="92" rx="8" fill="currentColor" fill-opacity="0.04" stroke="var(--anim-blue)" stroke-width="2"/>
  <text x="105" y="240" text-anchor="middle" font-size="13" font-weight="bold" fill="var(--anim-blue)">Tek Örneklem t</text>
  <text x="30" y="262" font-size="11" fill="currentColor">• 1 grup, nicel değişken</text>
  <text x="30" y="280" font-size="11" fill="currentColor">• Referans değerle kıyas</text>
  <text x="30" y="298" font-size="10" fill="currentColor" fill-opacity="0.8">Örn: Çalışma saati = 45 mi?</text>
  <!-- Kol 2: 2 Grup ya da Ölçüm -->
  <path d="M 300 164 L 300 214" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow)"/>
  <text x="305" y="195" font-size="11" fill="currentColor">2 grup / ölçüm</text>
  <!-- SORU 3: Aynı kişiler mi? -->
  <rect x="210" y="218" width="180" height="44" rx="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/>
  <text x="300" y="245" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">(3) Aynı kişiler mi?</text>
  <!-- Soru 3 -> Evet (Eşleştirilmiş t) -->
  <path d="M 255 262 L 255 292 L 245 292 L 245 316" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-blue)"/>
  <text x="230" y="282" font-size="11" font-weight="bold" fill="var(--anim-teal)">Evet</text>
  <rect x="195" y="320" width="115" height="110" rx="8" fill="currentColor" fill-opacity="0.04" stroke="var(--anim-teal)" stroke-width="2"/>
  <text x="252" y="342" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--anim-teal)">Eşleştirilmiş t</text>
  <text x="204" y="364" font-size="11" fill="currentColor">• Aynı kişiler</text>
  <text x="204" y="382" font-size="11" fill="currentColor">• 2 ilişkili ölçüm</text>
  <text x="204" y="405" font-size="10" fill="currentColor" fill-opacity="0.8">Örn: Ön–son test,</text>
  <text x="204" y="419" font-size="10" fill="currentColor" fill-opacity="0.8">sabah–akşam</text>
  <!-- Soru 3 -> Hayır (Bağımsız t) -->
  <path d="M 345 262 L 345 292 L 365 292 L 365 316" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-blue)"/>
  <text x="375" y="282" font-size="11" font-weight="bold" fill="var(--anim-blue)">Hayır</text>
  <rect x="320" y="320" width="120" height="110" rx="8" fill="currentColor" fill-opacity="0.04" stroke="var(--anim-blue)" stroke-width="2"/>
  <text x="380" y="342" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--anim-blue)">Bağımsız t</text>
  <text x="328" y="364" font-size="11" fill="currentColor">• 2 ayrı grup</text>
  <text x="328" y="382" font-size="11" fill="currentColor">• Welch önerilir</text>
  <text x="328" y="405" font-size="10" fill="currentColor" fill-opacity="0.8">Örn: Kadın–Erkek</text>
  <text x="328" y="419" font-size="10" fill="currentColor" fill-opacity="0.8">kaygı puanı</text>
  <!-- Kol 3: 3 ve Daha Fazla Bağımsız Grup -->
  <path d="M 420 164 L 420 185 L 585 185 L 585 214" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-amber)"/>
  <text x="510" y="180" text-anchor="middle" font-size="11" fill="currentColor">≥ 3 bağımsız grup</text>
  <rect x="465" y="218" width="240" height="80" rx="8" fill="currentColor" fill-opacity="0.04" stroke="var(--anim-amber)" stroke-width="2"/>
  <text x="585" y="240" text-anchor="middle" font-size="13" font-weight="bold" fill="var(--anim-amber)">Tek Yönlü ANOVA (Welch)</text>
  <text x="478" y="262" font-size="11" fill="currentColor">• ≥ 3 bağımsız grup, nicel BD</text>
  <text x="478" y="280" font-size="11" fill="currentColor">• Genel fark testi: F(k-1, N-k)</text>
  <!-- ANOVA -> Post-hoc -->
  <path d="M 585 298 L 585 330" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-green)"/>
  <text x="590" y="318" font-size="11" font-weight="bold" fill="var(--anim-green)">Anlamlıysa (p &lt; 0,05)</text>
  <rect x="465" y="334" width="240" height="126" rx="8" fill="currentColor" fill-opacity="0.04" stroke="var(--anim-green)" stroke-width="2"/>
  <text x="585" y="356" text-anchor="middle" font-size="13" font-weight="bold" fill="var(--anim-green)">Post-Hoc Karşılaştırmalar</text>
  <text x="478" y="378" font-size="11" fill="currentColor">• Varyanslar benzer: <tspan font-weight="bold">Tukey</tspan></text>
  <text x="478" y="398" font-size="11" fill="currentColor">• Varyanslar farklı / şüphe:</text>
  <text x="492" y="416" font-size="11" font-weight="bold" fill="var(--anim-green)">Games–Howell (Welch ile)</text>
  <text x="478" y="442" font-size="10" fill="currentColor" fill-opacity="0.85">Tablodan düzeltilmiş p okunur</text>
  <!-- Alt İlke Şeridi -->
  <rect x="20" y="480" width="690" height="50" rx="8" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.25"/>
  <text x="365" y="501" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">Temel Varsayım: Bağımlı değişken nicel olmalı ve ortalama anlamlı bir özet sunmalıdır.</text>
  <text x="365" y="520" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.8">Anlamlı fark bulunamaması grupların eşit olduğunun kanıtı değildir.</text>
  <!-- ==================== HARİTA DIŞI / KAPSAM DIŞI PANELİ ==================== -->
  <!-- Panel Başlığı -->
  <rect x="745" y="12" width="240" height="34" rx="6" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/>
  <text x="865" y="34" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">HARİTA NEREDE BİTER?</text>
  <!-- Harita Dışı Kutu 1: Varsayım İhlali ve Kategorik Veri -->
  <rect x="745" y="58" width="240" height="232" rx="8" fill="currentColor" fill-opacity="0.03" stroke="var(--anim-red)" stroke-width="2" stroke-dasharray="6 4"/>
  <rect x="755" y="68" width="130" height="20" rx="4" fill="var(--anim-red)" fill-opacity="0.15"/>
  <text x="820" y="82" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--anim-red)">DERSİN DIŞINA ÇIKIŞ</text>
  <text x="755" y="108" font-size="12" font-weight="bold" fill="currentColor">Kategorik BD / Bozuk Dağılım</text>
  <text x="755" y="130" font-size="11" fill="currentColor">• Bağımlı değişken kategorikse</text>
  <text x="755" y="148" font-size="11" fill="currentColor">• Histogram ve Q–Q grafiğinde</text>
  <text x="765" y="164" font-size="11" fill="currentColor">normallik açıkça bozuksa</text>
  <text x="765" y="180" font-size="10" fill="currentColor" fill-opacity="0.8">(özellikle küçük örneklemde)</text>
  <text x="755" y="206" font-size="11" font-weight="bold" fill="var(--anim-red)">→ Parametrik test yapılmaz</text>
  <text x="755" y="226" font-size="11" fill="currentColor">• Ki-kare testleri</text>
  <text x="755" y="244" font-size="11" fill="currentColor">• Parametrik olmayan testler</text>
  <text x="765" y="260" font-size="10" fill="currentColor" fill-opacity="0.8">(Mann–Whitney, Wilcoxon, vb.)</text>
  <!-- Harita Dışı Kutu 2: Vize Sonrası Gelişmiş Durumlar -->
  <rect x="745" y="302" width="240" height="228" rx="8" fill="currentColor" fill-opacity="0.03" stroke="var(--anim-purple)" stroke-width="2" stroke-dasharray="6 4"/>
  <rect x="755" y="312" width="105" height="20" rx="4" fill="var(--anim-purple)" fill-opacity="0.15"/>
  <text x="807" y="326" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--anim-purple)">VİZE SONRASI</text>
  <text x="755" y="352" font-size="12" font-weight="bold" fill="currentColor">İleri Araştırma Desenleri</text>
  <text x="755" y="374" font-size="11" fill="currentColor">• ≥ 3 eşleşmiş ölçüm</text>
  <text x="765" y="390" font-size="10" fill="currentColor" fill-opacity="0.8">→ Tekrarlı Ölçüm ANOVA</text>
  <text x="755" y="412" font-size="11" fill="currentColor">• İki bağımsız faktör</text>
  <text x="765" y="428" font-size="10" fill="currentColor" fill-opacity="0.8">→ İki Yönlü ANOVA</text>
  <text x="755" y="450" font-size="11" fill="currentColor">• Değişkenler arası ilişki</text>
  <text x="765" y="466" font-size="10" fill="currentColor" fill-opacity="0.8">→ Korelasyon (r)</text>
  <text x="755" y="488" font-size="11" fill="currentColor">• Değişkenden yordama</text>
  <text x="765" y="504" font-size="10" fill="currentColor" fill-opacity="0.8">→ Regresyon analizi</text>
</svg>

::: {.notes}
Doğru analizi üç soru seçtirir. Birincisi amaçtır: veriyi yalnızca betimlemek mi istiyorum, yoksa bir karşılaştırma yapıp evren hakkında karar mı vereceğim? İkincisi karşılaştırılan şeylerin sayısıdır: bir ortalama ve bir referans değer mi, iki grup mu, daha fazlası mı? Üçüncüsü verinin nasıl toplandığıdır: aynı kişiler mi ölçüldü, farklı kişiler mi?
:::

---

## Araştırma sorusundan analiz seçimine

| Soru | Veri | Analiz |
|---|---|---|
| Bir grup sabit bir değerden farklı mı? | 1 grup, nicel | Tek örneklem *t* |
| İki ayrı grup farklı mı? | 2 bağımsız grup | Bağımsız örneklem *t* (Welch) |
| Aynı kişiler iki ölçümde farklı mı? | 2 eşleşmiş ölçüm | Eşleştirilmiş *t* |
| Üç ve daha fazla ayrı grup farklı mı? | ≥ 3 bağımsız grup | Tek yönlü ANOVA + post-hoc |
| Henüz işlenmemiş durumlar | Üç ve daha fazla eşleşmiş ölçüm, iki faktör, ilişki ve yordama | Vize sonrası |

> Betimleme haritanın ilk dalıdır. Karşılaştırma satırları nicel değişkenin ortalamaları içindir; kategorik sonuç için test gerekiyorsa, normallik açıkça bozuksa veya son satırdaki durumda harita biter.

::: {.notes}
Bu üç soru vize öncesi öğrendiğimiz analizlerden birine götürür; tablonun son satırındaki durumlar haritanın dışındadır. Her durumda bağımlı değişkenin nicel olduğu ve ortalamanın anlamlı bir özet olduğu varsayılıyor. Değişken kategorikse ya da histogram ve Q–Q grafiğinde normallik açıkça bozuksa (özellikle küçük örneklemde) harita burada bitiyor: o durumlar için başka testler vardır (ki-kare, parametrik olmayan testler) ve bu dönemin kapsamı dışındadır.
:::

---

## Senaryolar: hangi analiz?

1. Bir terapinin, katılımcıların tedavi öncesi ve sonrası depresyon puanlarını değiştirip değiştirmediği.
2. Üç farklı reklamın satın alma niyeti puanlarını karşılaştırmak; her katılımcı yalnızca bir reklam görüyor.
3. Bir bölümün öğrencilerinin hangi sosyal medya platformunu en çok kullandığını göstermek.
4. Kadın ve erkek katılımcıların sınav kaygısı puanlarını karşılaştırmak.
5. Bir fabrikadaki işçilerin haftalık çalışma saatinin, yasal sınır olan 45 saatten farklı olup olmadığı.
6. Aynı öğrencilerin sabah ve akşam yapılan iki dikkat testindeki puanları.
7. Dört farklı şehirdeki üniversite öğrencilerinin yaşam doyumu puanları; ANOVA anlamlı çıkmış, Levene testi de anlamlı.
8. Tepki süresi verisinde ortalama 650 ms, medyan 520 ms çıkmış; araştırmacı yalnızca ortalamayı raporlamak istiyor.

::: {.notes}
1. Eşleştirilmiş t-testi: aynı kişiler, iki ölçüm.
2. Tek yönlü ANOVA: üç bağımsız grup; anlamlıysa post-hoc.
3. Betimleme: kategorik değişken; frekans ve yüzde tablosu ile çubuk grafik. Test gerekmez.
4. Bağımsız örneklem t-testi (Welch): iki ayrı grup.
5. Tek örneklem t-testi: bir grup, referans değer 45.
6. Eşleştirilmiş t-testi: aynı kişiler, iki koşul.
7. Varyanslar farklı: Welch ANOVA sonucu raporlanır ve post-hoc için Games–Howell kullanılır.
8. Ortalama medyandan çok büyük: dağılım sağa çarpık. Medyan ve çeyrekler açıklığı da raporlanmalı, histogram incelenmelidir; yalnızca ortalama tipik değeri yansıtmaz.
:::

---

## Bu nottan kalanlar

- Bu derste önce genel ANOVA, sonra **post-hoc** çiftler izlenir; düzeltme çoklu karşılaştırma yüzünden gerekir, genel *F* bunun matematiksel önkoşulu değildir.
- Düzeltme, çoklu karşılaştırmada toplam Tip I hatayı kontrol eder; bedeli temkindir.
- Varyanslar benzerse klasik ANOVA ve **Tukey**; belirgin biçimde farklıysa ya da şüphe varsa Welch ANOVA ve **Games–Howell**.
- "Anlamlı fark yok" eşitlik demek değildir; ortadaki grup iki uçla da örtüşebilir.
- Analiz seçimi üç soruyla yapılır: **amaç**, **kaç grup/ölçüm**, **aynı kişiler mi?** Harita kategorik veride, açıkça bozuk normallikte ve vize sonrası durumlarda biter.

**Bu notta ele alınmayanlar:** Planlı karşıtlıklar; diğer düzeltme yöntemleri (Holm, Scheffé); kategorik veriler için testler.

**Vize sonrası:** İki faktörün birlikte etkisi, aynı kişilerin ikiden çok ölçümü, iki değişken arasındaki ilişki ve yordama.

::: {.notes}
Bu notla vize öncesi bölüm tamamlanıyor. Bir araştırma sorusundan başlayıp verinin nasıl toplandığını, tabloya ve yazılıma nasıl aktarıldığını, nasıl hazırlandığını, grafiklerle ve sayılarla nasıl betimlendiğini ve gruplar arası farklar hakkında nasıl karar verildiğini gördük.

Vize sonrasında aynı mantığı daha karmaşık sorulara taşıyacağız: iki faktörün birlikte etkisi, aynı kişilerin birçok kez ölçülmesi, iki değişken arasındaki ilişki ve bir değişkenden ötekini yordamak. Değişen yine neyin karşılaştırıldığı olacak; betimle, grafiğe bak, varsayımları kontrol et, test et, etkiyle birlikte raporla zinciri ise aynı kalacak.
:::
