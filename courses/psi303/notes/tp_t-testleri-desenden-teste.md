---
title: "t-Testleri: Desenden Teste"
subtitle: "PSİ 303 — Davranışsal İstatistik için Yazılım Uygulamaları"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-09-23
description: Tek örneklem, bağımsız örneklem ve eşleştirilmiş örneklem t-testlerinin araştırma desenine göre seçimi ve yorumu.
tags:
  - psi303
  - t-testi
  - cikarimsal-istatistik
  - hafta-5
---

## P-Değerinden Somut Bir Teste

P-değeri, α ve karar kuralı tek başına hangi testin kullanılacağını belirlemez. Araştırma sorusu bir ya da iki ortalamanın karşılaştırılmasını gerektiriyorsa **t-testi**, gözlenen ortalama farkının rastlantısal değişkenlikle açıklanıp açıklanamayacağını sınar.

::: {.notes}
"t-testi uygula" tek bir işlem değildir. Karşılaştırmanın tek örneklem, bağımsız gruplar veya aynı kişilerin iki ölçümü üzerinden kurulması t değerinin nasıl hesaplanacağını değiştirir.
:::

## Doğru Testi Seçmenin Yolu: Veriye Değil, Soruya Bakmak

Bir araştırma sorusuyla karşılaşıldığında sırayla iki soru sorulur.

**Birinci soru — kaç ortalama karşılaştırılıyor?** Ya tek bir grubun ortalaması bilinen/varsayılan bir değerle karşılaştırılır, ya iki farklı grubun ortalaması karşılaştırılır.

**İkinci soru (yalnız iki grup varsa) — bu iki grup bağımsız mı, eşleştirilmiş mi?** İki grup farklı kişilerden mi oluşuyor (bağımsız gözlem), yoksa aynı kişilerden iki farklı zamanda veya koşulda mı alınmış (eşleştirilmiş gözlem)?

::: {.notes}
İki grup karşılaştırmasını tek örneklem testi gibi kurmak, dışarıdan gelmesi gereken referans değerini veriden üretmek anlamına gelir. Bağımsızlık veya eşleştirme kararı sayılara bakılarak değil, verinin nasıl toplandığı incelenerek verilir.
:::

## Üç Desen, Üç Test

| Araştırma sorusu | Kaç grup/ölçüm | Gözlem yapısı | Test |
|---|---|---|---|
| Bir grubun ortalaması bilinen bir değerden farklı mı? | Tek grup, sabit bir referansla | — | Tek örneklem t-testi |
| İki farklı gruba ait kişilerin ortalaması farklı mı? | İki grup | Bağımsız | Bağımsız örneklem t-testi |
| Aynı kişilerin iki ölçümü farklı mı? | İki ölçüm, aynı kişiler | Eşleştirilmiş | Eşleştirilmiş (bağımlı) örneklem t-testi |

Örnekler: PSİ 303 öğrencilerinin ortalama uyku süresi ulusal bir referans değerden farklı mı (tek örneklem)? Erken kayıt olan öğrencilerle geç kayıt olanların ortalama sınav kaygısı farklı mı (bağımsız — her katılımcı yalnız bir gruba ait)? Aynı öğrencilerin dönem başı ve dönem sonu sınav kaygısı farklı mı (eşleştirilmiş — iki ölçüm aynı kişilerden)?

::: {.notes}
Bu tablo bir ezber listesi değil, yukarıdaki iki sorunun özetlenmiş hâlidir; bir araştırma sorusuyla karşılaşıldığında önce o iki soru yeniden sorulmalı, doğrudan tabloya bakılıp eşleştirilmemelidir. Üçünün ortak paydası "bir ortalama farkını sınamak"tır; ayrıldıkları yer, bu farkın hangi karşılaştırma yapısından geldiğidir.
:::

## Varsayımlar: Aynı Soru, Her Desende Farklı Yere Sorulur

Her üç test de aralık veya oran ölçekte ölçülmüş bir değişken gerektirir — nominal ya da ordinal bir değişkenin ortalamasını almak zaten anlamsızdı, bu t-testi için de değişmez.

Normallik varsayımının hangi dağılıma uygulanacağı desene göre değişir:

- Tek örneklem t-testinde: tek grubun ham ölçüm dağılımı.
- Bağımsız örneklem t-testinde: her iki grubun kendi dağılımı — iki ayrı grubun ayrı ayrı dağılımı olduğu unutulmamalı.
- Eşleştirilmiş örneklem t-testinde: iki ham ölçümün kendisi değil, **her kişi için hesaplanan fark puanının** dağılımı. Dönem başı ve dönem sonu puanları ayrı ayrı normal olmak zorunda değildir; sınanması gereken bu ikisinin farkının dağılımıdır.

Bağımsız örneklem t-testi ayrıca iki grubun **birbirinden bağımsız** olmasını varsayar — testin adının kaynağı budur. Eşleştirilmiş örneklem t-testi ise tam tersini, gözlemlerin **eşleştirilmiş** olmasını bir varsayım değil, testin kendi yapısının parçası olarak alır: fark puanı hesaplanabilmesi için her iki ölçümün aynı kişiye ait olması zorunludur.

::: {.notes}
Üç test aynı normallik varsayımını farklı dağılımlarda değerlendirir. Her durumda p > .05 normalliği kanıtlamaz; tanı grafik ve örneklem büyüklüğüyle birlikte okunur.
:::

## Fark Nereden Geliyor, Hangi Yönde?

Her üç testte de ilk bakılacak sayı, gözlenen ortalama farkın kendisidir: tek örneklem testte grup ortalaması ile referans değer arasındaki fark; bağımsız örneklem testte iki grup ortalaması arasındaki fark; eşleştirilmiş testte fark puanlarının ortalaması. Bu fark, testin çıktısını yorumlamadan önce tek başına okunmalıdır — yönü nedir, hangi grup ya da koşul daha yüksek çıkmıştır?

Araştırma sorusu veri toplanmadan önce yönlü bir hipotezle kurulmuşsa ("A grubu B grubundan daha yüksek puan alır"), gözlenen farkın bu yönle tutarlı olup olmadığı ayrıca değerlendirilir.

::: {.notes}
Ters yönlü bir bulgu, yönlü hipotezi destekleyecek biçimde yeniden yorumlanamaz. Veriye bakıldıktan sonra hipotezin yönü sonuca uyacak biçimde değiştirilemez.
:::

## Farkın Kendisi mi, Farkın Güvenilirliği mi?

Gözlenen ortalama fark tek başına bir karar vermeye yetmez: aynı evrenden çekilen farklı örneklemler farklı ortalamalar ve ortalama farkları üretir. Küçük bir örneklemde büyük görünen fark rastlantıdan kaynaklanabilir; büyük bir örneklemde küçük bir fark bile istatistiksel olarak ayırt edilebilir.

t-testi, gözlenen farkı bu değişkenlikle **ölçeklendirerek** bir t değeri üretir: fark ne kadar büyükse ve örneklemler arası beklenen rastlantısal oynaklık (standart hata) ne kadar küçükse, t değeri o kadar büyür.

::: {.notes}
Aynı büyüklükteki ortalama fark, örneklem büyüklüğü arttıkça standart hata küçüldüğü için daha büyük bir t değeri ve daha küçük bir p-değeri üretme eğilimindedir.
:::

## Karar: p, α ve Tip I/II Hata — Aynı Mantık, Şimdi t Değeri Üzerinden

t değerine karşılık gelen p-değeri, H0 doğruyken gözlenenle en az aynı derecede uç bir farkın rastlantısal olarak ortaya çıkma olasılığını verir. p < α ise H0 reddedilir; p ≥ α ise H0 reddedilemez — "H0 kabul edilir" denmez.

Tip I ve Tip II hata da aynı şekilde somutlaşır: bağımsız örneklem t-testinde Tip I hata, iki grup arasında evrende gerçekte fark yokken "fark var" sonucuna varmaktır; Tip II hata, evrende gerçekten bir fark varken bunu örneklemle yakalayamamaktır.

::: {.notes}
Üç desende de aynı p/α karar kuralı geçerlidir; değişen, t değerinin hangi karşılaştırma yapısından üretildiğidir.
:::

## Anlamlı Çıkması, Büyük Olduğu Anlamına Gelmez

t-testinin anlamlı çıkması ("p < α"), farkın ne kadar büyük veya pratikte önemli olduğunu söylemez — yalnızca gözlenen farkın rastlantıyla açıklanabilirliğinin düşük olduğunu söyler. Büyük bir örneklemde küçük, pratikte önemsiz bir ortalama fark bile anlamlı çıkabilir; küçük bir örneklemde gerçekten büyük bir fark bile anlamlı çıkmayabilir.

::: {.notes}
Anlamlılık sorusu ("bu fark rastlantıyla açıklanabilir mi?") ile büyüklük sorusu ("bu fark ne kadar büyük ve pratikte önemli mi?") ayrı sorulardır. Gözlenen ortalama fark yönü ve ham büyüklüğü gösterir; standartlaştırılmış etki büyüklüğü ayrıca raporlanmalıdır.
:::

## Tek Örneklem t-Testinde Referans Değer

Tek örneklem t-testindeki referans değer, gözlenen örneklemden türetilmez; kuramsal, klinik veya daha önce belirlenmiş dış bir ölçüte dayanır. Test, örneklem ortalaması ile bu sabit değer arasındaki farkı standart hatayla ölçeklendirir. $n$ gözlem için serbestlik derecesi $df=n-1$'dir.

::: {.notes}
Referans değerin örnekleme bakıldıktan sonra seçilmesi araştırma sorusunu sonuca göre değiştirir. Bu nedenle değerin kaynağı ve gerekçesi analizden önce kaydedilmelidir.
:::

## Üç Kısa Senaryo: Hangi Test?

**Senaryo 1.** Bir araştırmacı, PSİ 303 öğrencilerinin ortalama haftalık ders çalışma süresinin, üniversitenin genelinde bildirdiği ortalama değerden farklı olup olmadığını soruyor. — Tek grup var (PSİ 303 öğrencileri), karşılaştırılan ikinci "grup" veriden gelmeyen dışarıdan bir referans değer → **tek örneklem t-testi**.

**Senaryo 2.** Bir araştırmacı, sabah dersine kayıtlı öğrencilerle akşam dersine kayıtlı öğrencilerin ortalama sınav kaygısını karşılaştırıyor; her öğrenci yalnızca bir gruba kayıtlı. — İki grup, her katılımcı yalnız birine ait, farklı kişiler → **bağımsız örneklem t-testi**.

**Senaryo 3.** Bir araştırmacı, aynı öğrencilerin bir müdahale programı öncesi ve sonrası ortalama stres puanını karşılaştırıyor. — İki ölçüm, ama aynı kişilerden, iki farklı zamanda → **eşleştirilmiş örneklem t-testi**.

::: {.notes}
Her seçimin gerekçesi iki soruya geri gider: kaç ortalama karşılaştırılıyor ve iki ölçüm varsa gözlemler bağımsız mı eşleştirilmiş mi? Karar, yalnız sayısal değerlere değil sorunun ve veri toplama düzeninin yapısına dayanır.
:::

## Kısa Geri Kontrol

- Bir araştırmacı "bu iki grubun ortalaması farklı mı?" diye soruyor; grup üyeliği farklı kişilerden mi geliyor, yoksa aynı kişilerin iki ölçümünden mi? Bu soru hangi testi belirler?
- Eşleştirilmiş örneklem t-testinde normallik sorgusu hangi değişkene sorulur — ham ölçümlere mi, yoksa başka bir şeye mi?
- p = .04, α = .05 çıktı. Karar ne olur? Bu, farkın büyük olduğu anlamına mı gelir?
- Tek örneklem t-testindeki referans değer neden örneklemden üretilemez?

::: {.notes}
Uygulamada bir desen veriyle baştan sona çözülür; diğer iki desenin hazır çıktıları test seçimi, farkın yönü, t, df ve p bakımından karşılaştırılarak kısa sonuç cümleleri yazılır.
:::
