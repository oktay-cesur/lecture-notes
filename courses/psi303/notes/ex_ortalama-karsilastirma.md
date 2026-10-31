---
title: "Genel Özet: Ortalamaların Karşılaştırılması"
subtitle: "PSİ 303 — Sınav Tekrar Notu (Hafta 4–6)"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-29
description: "Standart hata ve hipotez testi mantığı; tek örneklem, bağımsız ve eşleştirilmiş t-testi, tek yönlü varyans analizi, post-hoc testler ve test seçim haritasının sınav öncesi tekrar için derlenmiş özeti."
sidebar: psi303
execute:
  echo: false
---

# Genel Özet: Ortalamaların Karşılaştırılması

::: {.callout-tip}
## Sesli özet

Hipotez testi mantığı (1. başlık) için [Ses 4 — Çıkarım: hipotez testi mantığı](https://drive.google.com/drive/folders/1HdJgyzj0fEquA3zM7CFzQd9tWKgfDBVG?usp=sharing){target="_blank"} (yaklaşık 24 dk). t-testleri, ANOVA ve post-hoc için sesli özet henüz hazırlanmadı.

Sesli özetler yapay zekâ ile üretilmiştir ve bu notun yerine geçmez; fark olduğunda yazılı not esastır. Dosyalar Drive klasöründe `psi303-ses-…` adlarıyla durur ve tarayıcıda dinlenebilir.
:::

Bu not, hipotez testi mantığını ve onun dört uygulamasını (tek örneklem *t*, bağımsız *t*, eşleştirilmiş *t*, tek yönlü ANOVA + post-hoc) tek akışta toplar. Bütün testler aynı soruyu sorar: **Gördüğümüz fark, şansın tek başına üretebileceğinden büyük mü?** Değişen yalnızca neyin karşılaştırıldığı ve şans oynamasının nasıl ölçüldüğüdür.

::: {.callout-tip}
## Bölümün tek cümlelik özeti

**Önce betimle ve grafiğe bak → varsayımları kontrol et → testi yap → etki büyüklüğüyle yorumla → APA biçiminde raporla.** Hangi test? Üç soruyla seçilir: *amaç ne?*, *kaç grup/ölçüm var?*, *aynı kişiler mi?*
:::

## 1. Mantık: şans mı, gerçek fark mı?

*Ayrıntı: [Standart hata ve hipotez testi mantığı](tp_standart-hata-ve-hipotez-testi.md)*

### Örnekleme dağılımı ve standart hata

Başka bir örneklem seçsek ortalama farklı çıkardı. **Örneklem ortalamalarının dağılımına örnekleme dağılımı** denir: evren ortalamasında toplanır, *n* büyüdükçe daralır, çana yaklaşır.

$$SH=\frac{s}{\sqrt{n}}$$

| | Standart sapma (*SD*) | Standart hata (*SH*) |
|---|---|---|
| Neyin yayılımı? | **Bireysel değerlerin** | **Örneklem ortalamalarının** |
| Soru | Kişiler birbirinden ne kadar farklı? | Ortalama örneklemden örnekleme ne kadar oynar? |
| *n* büyüyünce | Değişmez (evrenin özelliği) | **Küçülür** (√*n*'e bölünür) |

Standart hata, yanlı seçimi düzeltmez; yalnız rastgele oynamayı ölçer.

### Hipotez testinin dört adımı

| Adım | İçerik |
|---|---|
| 1. **Hipotez kur** | **H0:** etki/fark yok (örn. μ = 75). **H1:** etki/fark var (μ ≠ 75 yönsüz; μ > 75 ya da < 75 yönlü). Yön, veriye bakmadan **önce** kuramsal gerekçeyle seçilir |
| 2. **Gözlenen farkı oynamayla karşılaştır** | Fark kaç standart hata? (Örnek: 78 − 75 = 3 puan, *SH* = 10/√25 = 2 → 1,5 *SH*) |
| 3. ***p* değerini bul** | ***p*: H0 doğru olsaydı, gözlenen kadar ya da daha uç bir sonuç görme olasılığı** (örnekte yönsüz *p* ≈ 0,13) |
| 4. **Karar ver** | *p* < α (genelde 0,05) → H0 **reddedilir**, sonuç anlamlı. *p* ≥ α → H0 **reddedilemez**; fark şansla açıklanabilir |

### *p* değeri ne değildir?

- *p*, **H0'ın doğru olma olasılığı değildir**; H0 doğru *varsayılarak* hesaplanır.
- *p* **farkın büyüklüğünü söylemez**; küçük bir fark da büyük örneklemde anlamlı çıkar. Anlamlı her sonuç önemli değildir; etki büyüklüğü ayrıca raporlanır.
- **H0'ı reddedememek, H0'ın doğru olduğunu kanıtlamaz.** "Fark bulunamadı", "fark yok" demek değildir.

### İki tür hata

| | **H0 doğru** (gerçekte fark yok) | **H0 yanlış** (gerçekte fark var) |
|---|---|---|
| **H0 reddedildi** | **Tip I hata** (boş alarm); olasılığı = α | Doğru karar |
| **H0 reddedilemedi** | Doğru karar | **Tip II hata** (kaçırılan etki) |

Çok sayıda test yapmak Tip I hata payını **biriktirir**: α = 0,05 ile 3 testte en az bir boş alarm olasılığı yaklaşık %14, 10 testte yaklaşık %40'tır (testler bağımsız olsaydı). Bu, ANOVA ve post-hoc düzeltmesinin nedenidir.

## 2. Etki büyüklüğü: fark ne kadar büyük?

*p* "şans mı?" sorusunu cevaplar; **etki büyüklüğü "fark ne kadar büyük?" sorusunu cevaplar.** İkisi birlikte verilir.

| Ölçü | Ne zaman? | Hesap | Kaba yorum |
|---|---|---|---|
| **Cohen'in *d*** | *t*-testleri | Fark / *SD* (grupların ortak *SD*'si; eşleşmişte farkların *SD*'si) | 0,2 küçük · 0,5 orta · 0,8 büyük |
| **η²** (eta kare) | ANOVA | Gruplar arası kareler toplamı / toplam kareler toplamı | 0,01 küçük · 0,06 orta · 0,14 büyük |
| **%95 güven aralığı** | Genel | Evren değeri için makul değerler aralığı | Sıfırı içermiyorsa sıfır fark hipotezinin reddiyle uyumlu |

Ölçütler yalnız kaba yön göstericidir; önem alana ve bağlama göre değerlendirilir. Eşleşmiş desenlerde *d* genellikle büyük çıkar ve bağımsız gruplardaki *d* ile doğrudan karşılaştırılmaz.

## 3. Tek örneklem ve bağımsız örneklem *t*-testi

*Ayrıntı: [Bir grup, iki grup: t-Testi](tp_tek-ve-bagimsiz-orneklem-t-testi.md)*

$$t=\frac{\text{fark}}{\text{farkın standart hatası}}$$

***t*, farkın kaç standart hata olduğunu söyler.** Yaklaşık ±2'den uzak *t* değerleri nadirdir. Evren *SD*'si bilinmediği ve örneklemden tahmin edildiği için normal dağılım yerine ***t* dağılımı** kullanılır; küçük örneklemde kuyrukları daha kalındır, *n* arttıkça normale yaklaşır.

| | **Tek örneklem *t*** | **Bağımsız örneklem *t*** |
|---|---|---|
| Soru | Bir ortalama, **sabit bir değerden** farklı mı? | **İki ayrı grubun** ortalaması farklı mı? |
| H0 | μ = referans değer | μ₁ = μ₂ |
| Örnek | 25 öğrencinin uykusu (*M* = 6,8, *SD* = 1,5) önerilen 8 saatten farklı mı? | Kafeinli (*M* = 480, *SD* = 50) ve kafeinsiz (*M* = 520, *SD* = 60) grupta, her grupta 20 kişi |
| Sonuç | *t*(24) = −4,00, *p* < 0,001, *d* = −0,80 | *t*(38) = −2,29, *p* = 0,028, *d* = −0,72 |
| Serbestlik derecesi | *n* − 1 | *n*₁ + *n*₂ − 2 |
| jamovi | *T-Tests → One Sample T-Test* (Test value) | *T-Tests → Independent Samples T-Test* |
| Veri biçimi | Bir sütun | **Uzun biçim**: bir sütunda ölçüm, bir sütunda grup |

### Varsayımlar (bağımsız örneklem)

| Varsayım | Ne demek? | Nasıl bakılır? | Bozulursa |
|---|---|---|---|
| **Bağımsızlık** | Her kişi tek grupta, ölçümler birbirini etkilemiyor | Araştırma deseni | Eşleştirilmiş test (aynı kişilerse) |
| **Normallik** | Her grup **kendi içinde** yaklaşık normal | Grup başına histogram, Q–Q grafiği, Shapiro–Wilk | Büyük örneklemde daha az önemli; ciddi bozulmada parametrik olmayan alternatif (Mann–Whitney U, ayrıntısı kapsam dışı) |
| **Varyans eşitliği** | Grupların yayılımı benzer | *SD*'leri karşılaştır, Levene testi | **Welch *t*-testi** |

- **İki grubu birleştirip tek histograma bakmak yanıltır;** normallik her grupta ayrı değerlendirilir.
- **Welch** eşit varyans varsaymaz (ondalıklı serbestlik derecesi verir: *t*(36,8)) ve varyanslar eşitken çok az şey kaybettirir; birçok kaynak onu varsayılan önerir. Levene anlamsız çıkması eşitliği kanıtlamaz.
- **Nedensel yorum** testten değil, **araştırma deseninden** gelir. Kafein örneğinde farkın kafeine bağlanması için katılımcıların gruplara **rastgele atanmış** olması gerekir; kendi tercihleriyle gruplanmışlarsa başka farklar da (uyku, alışkanlık) devrede olabilir.

### Rapor örneği (bağımsız)

> Kafein alan katılımcıların tepki süresi (*M* = 480, *SD* = 50) almayanlarınkinden (*M* = 520, *SD* = 60) anlamlı olarak kısaydı, Welch *t*(36,8) = −2,29, *p* = 0,028, *d* = −0,72.

## 4. Eşleştirilmiş *t*-testi

*Ayrıntı: [Aynı kişiler, iki ölçüm: Eşleştirilmiş t-Testi](tp_eslestirilmis-t-testi.md)*

**Eşleşmiş ölçüm:** Her değer, öteki koşuldaki belirli bir değerle eşleşir: aynı kişinin önce/sonra puanı ya da eşleştirilmiş çiftler.

**Fikir:** Her kişi için **fark puanı** alınır; böylece **her kişi kendi kontrolü olur** ve kişiler arası farklılık hesaptan çıkar. Eşleştirilmiş *t*-testi = **fark puanları üzerinde, referans değeri 0 olan tek örneklem *t*-testi.**

| Öğrenci | Önce | Sonra | Fark (Önce − Sonra) |
|---|---:|---:|---:|
| K1 | 38 | 33 | 5 |
| K2 | 22 | 20 | 2 |
| … | … | … | … |
| Ortalama | 31,25 | 28,00 | **3,25** (*SD* = 1,49) |

- Ham puanların *SD*'si yaklaşık 6'dır; fark puanlarının *SD*'si yalnız 1,49. Kişiler arası büyük farklılık fark puanlarında ortadan kalkmıştır; test bu yüzden güçlüdür.
- $t=\dfrac{3{,}25}{0{,}526}\approx 6{,}18$; *t*(7) = 6,18, *p* < 0,001; $d=\dfrac{3{,}25}{1{,}49}\approx 2{,}18$. Serbestlik derecesi **çift sayısı − 1** (8 − 1 = 7).
- **Yön, farkın alındığı sıradan okunur.** "Önce − Sonra" alınırsa düşüş pozitif görünür; negatif *t* "kötü sonuç" demek değildir. Çıktıda sırayı kontrol edin.
- **Normallik fark puanlarında** kontrol edilir (jamovi bunu yapar, ayrıca fark sütunu hesaplamak gerekmez).
- **Aynı veriye bağımsız test uygulamak** gerçek bir değişimi gizleyebilir (kişiler arası farklılık gürültü olarak kalır) ve bağımsızlık varsayımını ihlal eder.
- **jamovi:** *T-Tests → Paired Samples T-Test*; iki ölçüm **geniş biçimde**, yan yana iki sütunda durmalıdır.
- **Desenin sınırı:** Kontrol grubu yoksa düşüş eğitime bağlanamaz (başka etkenler ya da zaman da değişimi açıklayabilir).

### Rapor örneği (eşleştirilmiş)

> Gevşeme eğitimi sonrasında öğrencilerin kaygı puanları (*M* = 28,00, *SD* = 5,86), eğitim öncesine göre (*M* = 31,25, *SD* = 6,36) anlamlı olarak düşüktü, *t*(7) = 6,18, *p* < 0,001, *d* = 2,18. Kontrol grubu bulunmadığından düşüş eğitime bağlanamaz.

## 5. Tek yönlü varyans analizi (ANOVA)

*Ayrıntı: [Üç ve daha fazla grup: Tek yönlü varyans analizi](tp_tek-yonlu-varyans-analizi.md)*

**Neden *t*-testlerini tekrarlamıyoruz?** Üç grupta 3 çift, beş grupta 10 çift vardır; her çifte ayrı test yapmak Tip I hata payını şişirir. ANOVA **bütün grupları tek testte** karşılaştırır.

| | |
|---|---|
| **Ne zaman?** | Üç ya da daha fazla **bağımsız** grup, nicel sonuç |
| **H0** | Bütün evren ortalamaları eşit: μ₁ = μ₂ = μ₃ |
| **H1** | **En az bir** grubun ortalaması farklı |
| **"Tek yönlü"** | Gruplar **tek bir** değişkene (örn. çalışma yöntemi) göre ayrılıyor |

### *F* istatistiği

$$F=\frac{\text{gruplar arası değişkenlik}}{\text{grup içi değişkenlik}}$$

- **Grup içi değişkenlik**, aynı gruptaki kişilerin doğal farklılığıdır ("yöntemin etkisi yoksa grup ortalamaları da bu kadar oynardı").
- ***F* ≈ 1:** Ortalamalar arasındaki fark, doğal farklılığın beklettiği kadar → şansla açıklanabilir.
- ***F* ≫ 1:** Ortalamalar doğal farklılığın açıklayabileceğinden çok daha farklı → gerçek fark olası.
- **Fikir *t*'yle aynı:** *t*'de fark / standart hata, burada gruplar arası / grup içi.
- *F* büyür: ortalamalar birbirinden uzaklaşırsa ya da grup içi yayılım küçülürse. *F* küçülür: grup içi yayılım büyürse.

### Tablonun okunması

Beşer öğrenci; üç çalışma yöntemi (özet çıkarma *M* = 65, soru çözme *M* = 74, tekrar okuma *M* = 70):

| Kaynak | Kareler toplamı | *sd* | Kareler ortalaması | *F* | *p* |
|---|---:|---:|---:|---:|---:|
| Gruplar arası | 203,3 | 2 | 101,7 | 8,36 | 0,005 |
| Grup içi | 146,0 | 12 | 12,2 | | |
| Toplam | 349,3 | 14 | | | |

- ***sd*** serbestlik derecesidir (standart sapma değildir). Gruplar arası: grup sayısı − 1 = 2; grup içi: toplam kişi − grup sayısı = 15 − 3 = 12. *F* raporlanırken **iki serbestlik derecesi de** yazılır: *F*(2, 12).
- *F* = kareler ortalaması (gruplar arası) / kareler ortalaması (grup içi) = 101,7 / 12,2 ≈ 8,36.
- **η² = 203,3 / 349,3 ≈ 0,58:** puanlardaki toplam değişkenliğin yaklaşık %58'i yöntem farkıyla açıklanıyor (küçük, kurgusal örnekte çok büyük; gerçek psikoloji araştırmalarında tipik olarak çok daha küçüktür).
- Tabloyu elle hesaplamanız beklenmez; **hangi sayının neyi gösterdiğini okuyabilmeniz** beklenir.

### Varsayımlar ve Welch ANOVA

| Varsayım | Kontrol | Bozulursa |
|---|---|---|
| **Bağımsızlık** | Araştırma deseni: her kişi tek grupta | Aynı kişiler tüm koşullardaysa tekrarlı ölçümler ANOVA (vize sonrası) |
| **Normallik** | Her grupta Q–Q grafiği / artıklar | Büyük örneklemde dayanıklı, küçükte dikkat |
| **Varyans eşitliği** | Grup *SD*'leri, Levene | **Welch ANOVA** |

jamovi: *ANOVA → One-Way ANOVA* (*Variances*: Welch / Fisher). η² için *ANOVA → ANOVA* penceresi. Veri uzun biçimdedir; grup değişkeni **faktör (kategorik)** olarak tanımlı olmalıdır.

::: {.callout-note}
## Anlamlı *F* ne söyler, ne söylemez?

**"Bir yerde fark var" der; hangi gruplar arasında olduğunu söylemez.** Bu yüzden rapor, post-hoc testlerle tamamlanır.
:::

## 6. Post-hoc testler: fark nerede?

*Ayrıntı: [Post-hoc ve karar haritası](tp_post-hoc-ve-karar-haritasi.md)*

**Post-hoc ("sonradan") testler**, bütün grup çiftlerini **toplam Tip I hatayı kontrol ederek** karşılaştırır.

- **Çift sayısı:** *k* × (*k* − 1) / 2. Üç grup → 3, dört grup → 6, beş grup → 10.
- **Bu derste sıra:** Önce genel ANOVA, sonra çiftler. ANOVA anlamsızsa sonuç aramak için çiftlere geçilmez. Düzeltmenin nedeni çiftlerin çokluğudur; genel *F* bunun matematiksel önkoşulu olarak öğretilmez.
- **Düzeltmenin mantığı (Bonferroni fikri):** Eşiği karşılaştırma sayısına böl (0,05 / 3 ≈ 0,017); ya da eşdeğeri olarak *p* değerlerini büyüt. **Bedeli:** her karşılaştırma daha temkinli olur, gerçek farkları kaçırma (Tip II hata) riski artar.

| Durum | Test |
|---|---|
| Varyanslar benzer | **Tukey** |
| Varyanslar belirgin farklı ya da şüphe var (Welch ANOVA kullanıldıysa) | **Games–Howell** |

### Tukey sonuçları (örnek)

| Karşılaştırma | Ortalama farkı | Tukey *p* |
|---|---:|---:|
| Soru çözme − Özet çıkarma | 9 | **0,004** |
| Tekrar okuma − Özet çıkarma | 5 | 0,100 |
| Soru çözme − Tekrar okuma | 4 | 0,207 |

Yalnız soru çözme ile özet çıkarma arasındaki fark anlamlıdır. **"Anlamlı fark yok" eşitlik demek değildir:** tekrar okuma grubu ortadadır, iki uçla da anlamlı biçimde ayrışmaz; bu veriyle konumunu kesin belirleyemiyoruz. Genel *F* ile çift karşılaştırmaları farklı eşiklerle çalıştığı için biri anlamlı çıkıp öbürü çıkmayabilir.

### Rapor örneği (ANOVA + post-hoc)

> Çalışma yönteminin sınav puanı üzerindeki etkisi anlamlıydı, *F*(2, 12) = 8,36, *p* = 0,005, η² = 0,58. Tukey post-hoc karşılaştırmaları, soru çözme grubunun (*M* = 74,0, *SD* = 3,1) özet çıkarma grubundan (*M* = 65,0, *SD* = 4,1) anlamlı olarak yüksek puan aldığını gösterdi (*p* = 0,004). Tekrar okuma grubu (*M* = 70,0, *SD* = 3,2) diğer iki gruptan anlamlı olarak farklı değildi.

## 7. Karar haritası: hangi analiz?

Üç soru:

1. **Amaç ne?** Yalnızca betimleme mi, ortalama karşılaştırması mı?
2. **Kaç grup ya da ölçüm var?**
3. **Aynı kişiler mi?**

| Soru | Veri | Analiz |
|---|---|---|
| Yalnızca betimleme | Kategorik / nicel | Frekans, yüzde, çubuk; *M*/*SD* ya da *Mdn*/*IQR* + histogram/kutu |
| Bir grup sabit bir değerden farklı mı? | 1 grup, nicel | **Tek örneklem *t*** |
| İki ayrı grup farklı mı? | 2 bağımsız grup | **Bağımsız örneklem *t*** (Welch) |
| Aynı kişiler iki ölçümde farklı mı? | 2 eşleşmiş ölçüm | **Eşleştirilmiş *t*** |
| Üç ve daha fazla ayrı grup farklı mı? | ≥ 3 bağımsız grup | **Tek yönlü ANOVA + post-hoc** |
| Henüz işlenmemiş | ≥ 3 eşleşmiş ölçüm, iki faktör, ilişki, yordama | Vize sonrası |

Harita **nicel sonuç değişkeninin ortalaması** içindir. Sonuç kategorikse ya da normallik (özellikle küçük örneklemde) açıkça bozuksa harita bu noktada biter; başka testler gerekir.

### Rapor kontrol listesi

Her analiz raporu şunları içerir: **betimsel istatistikler** (*M*, *SD*; uç değerde *Mdn*, *IQR*) · **test istatistiği ve serbestlik derecesi** (*t*(38), *F*(2, 12)) · **kesin *p*** (0,001'den küçükse *p* < 0,001) · **etki büyüklüğü** (*d*, η²) · gerekirse **güven aralığı** · farkın **yönünün sözle ifadesi** · kullanılan düzeltme (Welch, Tukey) · yorumun **sınırı** (desen, kontrol grubu yokluğu).

## Çalışma soruları

Her senaryoda hangi analiz uygundur?

1. Bir terapinin, katılımcıların tedavi öncesi ve sonrası depresyon puanlarını değiştirip değiştirmediği.
2. Üç farklı reklamın satın alma niyeti puanlarını karşılaştırmak; her katılımcı yalnız bir reklam görüyor.
3. Bir bölümün öğrencilerinin en çok kullandığı sosyal medya platformunu göstermek.
4. Kadın ve erkek katılımcıların sınav kaygısı puanlarını karşılaştırmak.
5. Fabrika işçilerinin haftalık çalışma saatinin yasal sınır olan 45 saatten farklı olup olmadığı.
6. Aynı öğrencilerin sabah ve akşam yapılan iki dikkat testindeki puanları.
7. Dört şehirdeki öğrencilerin yaşam doyumu puanları; ANOVA anlamlı, Levene testi de anlamlı.

Kavram soruları:

8. Bir araştırmacı *p* = 0,03 buldu ve "H0'ın doğru olma olasılığı %3" dedi. Neden yanlış?
9. Beş grubu ikişerli *t*-testleriyle karşılaştırmak neden sorun yaratır?
10. ANOVA anlamlı çıkmış, Tukey'de tekrar okuma grubu ne soru çözmeden ne özet çıkarmadan ayrılıyor. Bu çelişki midir?
11. Aynı kişilerin önce–sonra puanlarına bağımsız örneklem *t*-testi uygulamak neden yanlıştır?

::: {.callout-note collapse="true" title="Cevaplar"}
1. **Eşleştirilmiş *t*-testi:** aynı kişiler, iki ölçüm.
2. **Tek yönlü ANOVA:** üç bağımsız grup; anlamlıysa post-hoc.
3. **Betimleme:** kategorik değişken; frekans ve yüzde tablosu, çubuk grafik. Test gerekmez.
4. **Bağımsız örneklem *t*-testi** (Welch): iki ayrı grup.
5. **Tek örneklem *t*-testi:** bir grup, referans değer 45.
6. **Eşleştirilmiş *t*-testi:** aynı kişiler, iki koşul.
7. Varyanslar farklı: **Welch ANOVA** raporlanır ve post-hoc olarak **Games–Howell** kullanılır.
8. *p*, H0 **doğru olsaydı** bu kadar uç bir sonuç görme olasılığıdır; H0'ın kendisinin olasılığı değildir.
9. Çift sayısı hızla artar (5 grup = 10 çift); her testte %5 boş alarm payı birikir, gerçekte hiç fark yokken bile en az bir "anlamlı" sonuç olasılığı yaklaşık %40'a çıkar. ANOVA tek testte sorar; post-hoc düzeltme yapar.
10. **Çelişki değil.** "Anlamlı fark bulunamadı" eşitlik demek değildir; ortadaki grup iki uçla da örtüşebilir, uçlar birbirinden ayrılır.
11. Aynı kişiler iki grup sayılmış olur; bağımsızlık varsayımı ihlal edilir. Kişiler arası farklılık gürültü olarak kalır ve gerçek değişim gizlenebilir. Doğrusu fark puanları üzerinde eşleştirilmiş testtir.
:::
