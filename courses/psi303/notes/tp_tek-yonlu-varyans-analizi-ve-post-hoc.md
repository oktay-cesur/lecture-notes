---
title: "Tek Yönlü Varyans Analizi ve Post-Hoc Testler"
subtitle: "PSİ 303 — Davranışsal İstatistik için Yazılım Uygulamaları"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-09-23
description: Çok grup karşılaştırması, F oranı, aile-düzeyi Tip I hata, post-hoc karşılaştırmalar ve sonuçların raporlanması.
tags:
  - psi303
  - anova
  - post-hoc
  - hafta-6
---

## Üç grubu karşılaştırmak istiyoruz — t-testini tekrar tekrar mı koşacağız?

t-testi iki ortalamayı karşılaştırır. Elimizde üç çalışma yöntemi altında ölçülen sınav puanları varsa ne yaparız?

Akla gelen ilk çözüm: t-testini art arda koşmak.

- 3 grup → 3 ikili karşılaştırma (A-B, A-C, B-C)
- 4 grup → 6 ikili karşılaştırma

::: {.notes}
Her testin kendi α düzeyini koruması, bütün karşılaştırmaların toplam hata riskini sabit tutmaz. Karşılaştırma sayısı arttıkça en az bir yanlış alarm üretme olasılığı birikir; dört grupta altı ikili karşılaştırma oluşması bu artışı görünür kılar.
:::

---

## Neden bu tekrar bir sorun yaratır?

Tek bir karşılaştırmada α = .05: H0 doğruyken onu yanlışlıkla reddetme riski %5.

Ama bağımsız karşılaştırmalar art arda yapıldığında bu riskler birikir:

| Karşılaştırma sayısı | Birikmiş yanlış-alarm riski (yaklaşık) |
|---|---|
| 1 | %5 |
| 3 | %14 |
| 6 | %26'nın üzerinde |

Bu birikmiş riske **aile-düzeyi Tip I hata oranı** denir.

::: {.notes}
%14 ve %26 değerleri tek bir testin hata oranı değildir; aynı veri üzerinde yürütülen karşılaştırma ailesinin en az bir yanlış alarm üretme olasılığıdır. Sorun t-testinin kendisi değil, aynı aile içinde kontrolsüz biçimde tekrar edilmesidir.
:::

---

## Çözüm: tüm farkı tek bir testle değerlendirmek

Gruplar arasındaki tüm farkı, tek bir α eşiğiyle değerlendiren tek bir ortak test: **tek yönlü varyans analizi (one-way ANOVA)**.

**Ortak hipotez:**

- H0: μ₁ = μ₂ = μ₃ (tüm grup ortalamaları evrende eşittir)
- H1: en az bir grup ortalaması diğerlerinden farklıdır

::: {.notes}
Sık yapılan hata: H1'i "μ1 ≠ μ2 ≠ μ3, yani üçü de birbirinden farklı" diye okumak. Oysa H1 yalnız en az bir eşitsizliği iddia ediyor — üç grubun ikisi eşit, biri farklı olsa bile H1 doğru kabul edilir. Sınıfta sorulabilecek soru: "H0 reddedilirse, kaç grup ortalamasının birbirinden farklı olduğunu kesin biliyor muyuz?" — cevap hayır, bu bilgi F testinin kendisinde yok.
:::

---

## F oranı ne yapıyor? İki değişkenlik kaynağını ayırmak

Üç çalışma yöntemi altında ölçülen sınav puanlarını düşünelim. İki ayrı değişkenlik kaynağı var:

- **Grup içi değişkenlik**: her grubun kendi ortalaması etrafındaki dağılım — bireysel farklılık, ölçüm hatası; yöntemin etkisiyle ilgisi yok ("gürültü").
- **Gruplar arası değişkenlik**: grup ortalamalarının genel ortalamadan uzaklığı — yöntemin gerçekten fark yaratıp yaratmadığının işareti.

**F = gruplar arası değişkenlik / grup içi değişkenlik**

::: {.notes}
Her yöntem grubundaki öğrenciler arasında doğal puan farkları vardır. Grup içi değişkenliğin "gürültü" sayılmasının nedeni, bu farklılığın doğrudan yöntemler arasındaki farkı temsil etmemesidir; gruplar arası ayrışma bu arka plan değişkenliğine göre değerlendirilir.
:::

---

## F neden büyükse fark daha inandırıcı olur?

- Gruplar arasındaki fark yalnızca rastlantısal bireysel farklılıklardan ibaretse: gruplar arası değişkenlik ≈ grup içi değişkenlik → **F ≈ 1**
- Yöntemin gerçek bir etkisi varsa: grup ortalamaları gürültünün öngördüğünden daha fazla ayrışır → **F, 1'den belirgin biçimde büyür**

F ne kadar büyükse, farkın yalnız rastlantıyla açıklanması o kadar zorlaşır.

F'nin kendi olasılık dağılımından (F dağılımı), gözlenen F değerinin H0 doğruyken rastlantıyla bu kadar büyük çıkma olasılığı — yani **p-değeri** — hesaplanır.

Karar kuralı değişmez: p < α ise H0 reddedilir; p ≥ α ise H0 reddedilemez.

::: {.notes}
F oranı tek başına sabit bir eşikle yorumlanmaz; serbestlik derecelerine bağlı F dağılımı üzerinden p-değerine çevrilir ve α ile karşılaştırılır.
:::

---

## F anlamlı çıktı — peki hangi grup(lar) farklı?

F testi yalnızca **"en az bir grup ortalaması farklı"** der; *hangi* grup ya da grup çiftinin farklı olduğunu söylemez.

Üç grup varsa: fark A-B'de olabilir, A-C'de olabilir, üçü de birbirinden farklı olabilir — F kendisi bunlar arasında ayrım yapmaz.

::: {.notes}
F testi tek başına hangi çiftin farklı olduğunu göstermez. Üç grup varsa A-B, A-C ve B-C çiftlerinden herhangi biri ya da birkaçı toplam farktan sorumlu olabilir; omnibus sonuç bu çiftleri ayırmaz.
:::

---

## Post-hoc karşılaştırma: hangi çift gerçekten farklı?

F anlamlı çıktıktan **sonra**, hangi grup çiftlerinin birbirinden farklılaştığını görmek için ikili karşılaştırmalara dönülür.

Ama sıradan t-testlerine dönersek aynı aile-düzeyi hata riskine geri düşeriz. Bu yüzden ikili karşılaştırmalar, aile-düzeyi hatayı kontrol eden bir yöntemle yapılır: **post-hoc karşılaştırma** (Tukey, Bonferroni, Scheffé gibi birden fazla yöntem vardır).

**Önemli sınır:** post-hoc karşılaştırma yalnız F testi anlamlı çıktığında yapılır. F anlamlı değilse, "en az bir fark var" iddiası zaten desteklenmediği için ikili karşılaştırmaya geçmenin mantıksal gerekçesi yoktur.

::: {.notes}
Post-hoc yöntemi; karşılaştırma ailesine, varsayımlara ve hata oranını kontrol etme biçimine göre gerekçelendirilir. Çıktıda her grup çifti için düzeltilmiş p-değeri ve ortalama farkın yönü birlikte okunmalıdır.
:::

---

## Varsayımlar: ne zaman ANOVA geçerli sayılır?

Tek yönlü ANOVA'nın geçerliliği iki varsayıma dayanır:

- **Normallik**: her grup kendi içinde normal dağılıma yaklaşık uyar
- **Varyans homojenliği**: grupların varyansları birbirine yakındır

Bu varsayımlar hazır bir tanı çıktısıyla (histogram, varyans testi p-değeri) kontrol edilir.

::: {.notes}
Bir varsayım testinde p > .05 çıkması varsayımın kanıtlandığı anlamına gelmez; yalnızca eldeki verinin sapmayı göstermeye yetmediğini belirtir. Normallik ve varyans homojenliği tanıları grafikler, örneklem büyüklüğü ve araştırma deseniyle birlikte okunmalıdır.
:::

---

## Anlamlılık büyüklük değildir — F testi için de aynı ayrım

Anlamlılık ile büyüklük arasındaki ayrım F testi için de geçerlidir:

- F testinin anlamlı çıkması (p < α), farkın *ne kadar büyük* olduğunu söylemez — yalnız rastlantıyla açıklanmasının ne kadar zor olduğunu söyler.
- Büyük bir örneklemde küçük, pratikte önemsiz bir fark bile anlamlı çıkabilir.
- Küçük bir örneklemde gerçek bir fark anlamlı çıkmayabilir.

::: {.notes}
F(2, 297) = 4.1, p = .02 ile F(2, 27) = 4.1, p = .02 aynı p-değerini verse de örneklem büyüklükleri farklıdır. P-değeri doğrudan etkinin büyüklüğü gibi okunamaz.
:::

---

## Kendi ANOVA yorumunu denetle

Kendi yazdığını şu sorularla kontrol et:

- F anlamlı çıkmadan post-hoc yorumuna geçtin mi?
- Post-hoc çıktısını yeniden hesaplamak yerine yalnız okudun mu?
- Anlamlılığı etki büyüklüğüyle karıştırdın mı?
- Varsayım testinde p > .05'i "varsayım sağlandı" diye okudun mu?

::: {.notes}
Bu dört soru, ANOVA yorumundaki sıra ve mantık hatalarını denetler. Özellikle omnibus sonuç ile post-hoc yorum arasındaki ilişkinin korunup korunmadığını gösterir.
:::

---

## Analiz Kararlarını Raporlama Zincirine Yerleştirmek

Dört karar birbirine bağlanır:

1. Hangi gözlemin tutulduğu veya çıkarıldığı kaydedilir.
2. Araştırma sorusu H0/H1 biçiminde kurulur.
3. Anlamlılık eşiği ve karar kuralı belirlenir.
4. Araştırma desenine uygun test seçilir.

Bu kararların hiçbiri tek başına bir araştırma raporu değildir.

::: {.notes}
Bu kararlar bağımsız değildir. Örneğin aykırı bir gözlemin tutulması veya çıkarılması betimsel özeti, test istatistiğini ve sonuç yorumunu birlikte etkileyebilir; bu nedenle karar zinciri raporda izlenebilir olmalıdır.
:::

---

## Rapor neden bu sırayı izler?

Her adım bir öncekinin okuyucuya sağladığı bilgi üzerine kurulur:

- Önce veri kaydı → hangi veriyle karşı karşıya olduğumuz belirsiz kalmasın
- Sonra betimsel özet → test sonucunun hangi dağılım üzerinde hesaplandığı belirsiz kalmasın
- Sonra hipotez/test gerekçesi → test seçimi keyfi görünmesin
- Sonra test sonucu
- Sonra sınırlılık

::: {.notes}
Somut örnek: veri kaydı adımı atlanıp doğrudan "F(2,27) = 5.41, p = .01" ile başlanan bir rapor düşünelim — okuyucu bu F değerinin hangi gözlem kümesi üzerinden hesaplandığını, aykırı bir değerin çıkarılıp çıkarılmadığını bilemez ve sonucu sorgusuz kabul etmek zorunda kalır. Her adım, bir sonrakini bu türden sorgusuz kabulden kurtarıyor.
:::

---

## Veri kaydı ve betimsel özet — kısa örnek

**Veri/karar kaydı:**

> "Katılımcı K09'un uyku_saati değeri (1 saat) grubun geri kalanından belirgin biçimde sapmaktadır; katılımcı görüşme kaydında o gece vardiyalı çalıştığını bildirmiştir, dolayısıyla değer gerçek ama uç bir gözlemi yansıtmaktadır ve analizden çıkarılmamıştır."

**Betimsel özet:**

> "Grup A'nın ortalama puanı 24.6 (SS = 3.2), Grup B'nin ortalama puanı 19.8 (SS = 4.1) olarak bulunmuştur."

::: {.notes}
Veri kaydı, gözlemin gerçek bir uç değer mi yoksa kayıt hatası mı olduğuna ilişkin kanıtı görünür kılar. Betimsel özet ise test sonucundan önce grupların merkezi ve değişkenliği hakkında gerekli bağlamı sağlar.
:::

---

## Hipotez/test gerekçesi ve sonuç cümlesi

**Gerekçe (ANOVA örneği):**

> "Üç grup karşılaştırıldığından ve araştırma sorusu grup ortalamaları arasında herhangi bir fark olup olmadığını sorduğundan tek yönlü ANOVA kullanılmıştır."

**Sonuç cümlesi (model kalıp):**

> "F(2, 27) = 5.41, p = .01 bulunmuş, post-hoc karşılaştırmalar A ve C grupları arasındaki farkın anlamlı olduğunu göstermiştir."

Aynı kalıp t-testi için: **istatistik + df + p + sözel yorum** — fark yalnız sembol ve df sayısındadır.

::: {.notes}
Rapor cümlesi test istatistiğini, serbestlik derecesini, p-değerini ve sözel yorumu birlikte taşımalıdır. Omnibus F testi anlamlı değilse post-hoc sonuçları fark kanıtı gibi sunulamaz. t-testi için örnek: "t(28) = 2.34, p = .03 bulunmuş, Grup A'nın ortalamasının Grup B'den anlamlı biçimde yüksek olduğu görülmüştür."
:::

---

## Sınırlılıklar — rapor cümlesinin son adımı

- Anlamlılık ile etki büyüklüğü ayrı sorulardır; "p < .05" tek başına farkın büyüklüğünü söylemez.
- Örneklem büyüklüğü p-değerini etkiler; küçük bir p-değeri büyük bir örneklemde küçük bir farktan da kaynaklanabilir.
- Normallik tanısı "p > .05 = dağılım normaldir" biçiminde okunamaz.

::: {.notes}
Sınırlılık cümlesi raporun bulgusuyla doğrudan ilgili noktayı belirtir. Genel bir uyarı listesi eklemek yerine, sonucun yorumunu gerçekten sınırlayan koşul açıklanmalıdır.
:::

---

## Tek Test İçeren Raporun Omurgası

Betimleme ve tek bir test içeren rapor şu beş adımla kurulabilir: veri kaydı, betimsel özet, hipotez/test gerekçesi, sonuç cümlesi ve sınırlılık.

Rapor, hangi yazılımdan üretildiğine değil, kavramsal içeriğe (istatistik + df + p + yorum) dayanır.

::: {.notes}
Beş adımlık omurga geneldir; fakat test istatistiğinin, varsayımların ve yorumun nasıl raporlanacağı seçilen yönteme göre değişir. Yazılım çıktısı, bu kavramsal zincirin yerine geçmez.
:::
