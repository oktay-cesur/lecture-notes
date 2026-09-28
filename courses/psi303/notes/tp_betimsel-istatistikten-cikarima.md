---
title: "Betimsel İstatistikten Çıkarıma"
subtitle: "PSİ 303 — Davranışsal İstatistik için Yazılım Uygulamaları"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-09-23
description: Dağılım şekli, grafik seçimi, standart hata, normal dağılım, z-puanı ve hipotez testi karar mantığı.
tags:
  - psi303
  - betimsel-istatistik
  - cikarimsal-istatistik
  - hafta-4
---

## Ortalama ve Standart Sapma Neyi Gizleyebilir?

K01–K08 `uyku_saati` verisinde $\bar{x}=6{,}25$ ve $s\approx 1{,}04$ bulunur. Ancak bir sayı dizisini yalnızca ortalama ve standart sapmayla anlatmak, dağılımın **şeklini** göstermez: benzer merkez ve yayılım değerleri çarpık ya da simetrik dağılımlarda görülebilir.

::: {.notes}
Merkez ve yayılım iki önemli özettir, fakat dağılımın tamamı değildir. Aynı özet değerlerin altında farklı şekiller bulunabileceğini görmek için gözlemlerin dağılımına da bakmak gerekir.
:::

## Aynı Merkez, Farklı Şekil

Üç küçük dağılım düşünelim, üçünün de ortalaması ve yayılımı benzer:

- **Simetrik:** 4, 5, 6, 6, 6, 7, 8 — değerler ortalamanın iki yanına dengeli dağılır.
- **Sağa çarpık:** 4, 5, 5, 5, 6, 7, 12 — çoğu değer düşük tarafta yoğunlaşır, birkaç yüksek değer kuyruğu sağa uzatır.
- **Sola çarpık:** tersi durum — birkaç düşük değer kuyruğu sola uzatır.

Çarpıklık, ortalama ile medyan arasındaki ilişkiyi etkiler: sağa çarpık bir dağılımda birkaç yüksek uç değer ortalamayı yukarı çeker, ama medyan sıralamaya dayandığı için bu uç değerlerden etkilenmez — bu yüzden sağa çarpık dağılımlarda ortalama genellikle medyandan büyüktür.

::: {.notes}
Bu niteliksel okuma, histogram üzerinde dağılımın simetrik mi yoksa bir tarafa mı çarpık olduğunu ayırt etmeyi sağlar. Çarpıklık, merkez ölçüsünün seçim ve yorumunu doğrudan etkiler.
:::

## Değişken Türüne Uygun Grafik Seçimi

Grafik seçimi değişkenin ölçüm yapısına bağlıdır:

- Oran/aralık ölçekli sürekli bir değişken için (`uyku_saati` gibi) **histogram**: değer aralığı kutulara (bin) bölünür, her kutuya düşen gözlem sayısı çubuk yüksekliğiyle gösterilir.
- Nominal/ordinal bir değişken için (`bolum`, `uyku_kalitesi` gibi) **çubuk grafik**: her kategorinin sıklığı ayrı bir çubukla gösterilir, çubuklar arasında boşluk bırakılır çünkü kategoriler arasında sayısal bir süreklilik yoktur.

::: {.notes}
Histogramdaki kutu sayısı görünümü etkiler: çok az kutu dağılımın şeklini gizleyebilir, çok fazla kutu rastlantısal dalgalanmayı yapı gibi gösterebilir. Bu nedenle grafik, farklı makul kutu genişliklerinde kontrol edilmelidir.
:::

## Aykırı Bir Gözlem Geldiğinde: Önce Soru, Sonra Karar

K01–K08 tablosuna dokuzuncu bir kayıt ekleyelim: K09, `uyku_saati` = 1. Bu değer histogramda diğerlerinden ayrı, uzakta tek bir çubuk olarak görünür.

Böyle bir değerle karşılaşınca ilk soru **"bu değer neyi temsil ediyor?"** olmalıdır, "bu değeri silmeli miyim?" değil. İki farklı kaynak ayırt edilmelidir:

Gerçek ama uç bir gözlem olabilir — K09 kişisi o gece gerçekten çok az uyumuş olabilir (sınav, vardiyalı çalışma). Bu durumda değer veriyi doğru yansıtır ve yalnız uç olduğu için silinmemelidir. Ya da bir kayıt/ölçüm hatası olabilir — 25 saat gibi olanaksız bir kodlama buna örnektir. Bu durumda sorun gözlemde değil, kayıt sürecindedir.

::: {.notes}
"Ortalamadan iki standart sapma uzaktaysa sil" gibi otomatik bir eşik, değerin gerçek mi hatalı mı olduğunu belirleyemez; yalnızca merkeze uzaklığını gösterir. Gözlemin kaynağı sorgulanmalı, tutma veya çıkarma kararı gerekçesiyle kaydedilmelidir.
:::

## Betimlemenin Sınırı: Elimizdeki Veri, Bir Evren İddiası Değil

Betimleme yalnızca **eldeki veriyi** özetler; bu özetten bir evrene genelleme iddiası kurmaz. K01–K08'in ortalaması 6,25 saat demek, PSİ 303'e kayıtlı tüm öğrencilerin ortalamasının tam olarak bu olduğu anlamına gelmez.

::: {.notes}
Dört kurgusal örneklem ortalamasının 6,25; 5,9; 6,6 ve 6,1 olması, aynı evrenden gelen örneklem özetlerinin bile değişebildiğini gösterir. Bu değişkenliği bireysel gözlemlerin değişkenliğinden ayırmak gerekir.
:::

## İki Ayrı Değişkenlik: Standart Sapma ile Standart Hata

Standart sapma ($s\approx 1{,}04$ saat) K01–K08 içindeki **bireysel gözlemlerin** ortalamadan ne kadar saptığını ölçer. Dört kurgusal örneklem ortalamasında ise farklı bir soru sorulur: bu ortalamalar *kendi aralarında* ne kadar değişmektedir? Bu ikinci değişkenliği ölçen büyüklüğe **standart hata** denir.

$$SH = \frac{s}{\sqrt{n}}$$

- Standart sapma ($s$) → **ham gözlemlerin** dağılımına ait.
- Standart hata → **örneklem ortalamalarının** dağılımına ait; $n$ arttıkça küçülür.

::: {.notes}
"Değişkenlik" sözcüğü ikisi için de kullanılabilir; hangi dağılıma ait olduğu belirtilmezse iki farklı büyüklük birbirinin yerine geçer. Formülün temel sonucu şudur: $n$ büyüdükçe $SH$ küçülür ve örneklem ortalaması örneklemden örnekleme daha az oynar.
:::

## Normal Dağılım: Değişkenliğin Aldığı Şekil

Normal dağılım, simetrik dağılımların özel ve sık karşılaşılan bir biçimidir: tek tepeli, ortalama etrafında simetrik ve uçlara doğru giderek seyrekleşen bir çan eğrisi.

İki ayrı kullanım birbirine karıştırılmamalıdır: bazı ham değişkenler (ör. çok sayıda kişide ölçülen bir psikolojik özellik) yaklaşık normal dağılabilir — bu, dağılım şeklini gözle okuma alışkanlığının doğrudan devamı. Yukarıda kurduğumuz örnekleme dağılımı — örneklem ortalamalarının kendi dağılımı — de, örneklem yeterince büyükse yaklaşık normale yaklaşır.

::: {.notes}
Örneklem ortalamalarının dağılımının normale yaklaşması örneklem büyüklüğüne ve özgün dağılımın şekline bağlıdır. Bu nedenle "her örnekleme dağılımı normaldir" biçiminde koşulsuz bir genelleme kurulamaz.
:::

## Z-Puanı: Bir Gözlem Ne Kadar Tipik?

Bir gözlemin kendi dağılımı içinde ne kadar tipik ya da uç olduğunu ölçmek için **z-puanı** kullanılır:

$$z = \frac{x - \bar{x}}{s}$$

K01–K08 verisinde K05 (8 saat) için: $z = \dfrac{8-6{,}25}{0{,}97} \approx 1{,}80$.

**Doğrulayalım:** yaklaşık bir kural olarak gözlemlerin büyük çoğunluğu (kabaca %95'i) ortalamanın ±2 standart sapması içinde kalır. K05'in $z\approx 1{,}80$ değeri bu aralığın içinde, ama sınırına yakın — yani grubun en uç değerlerinden biri, ama aşırı uç sayılacak kadar da değil.

Aynı mantık bir ham gözlem için değil, bir örneklem ortalaması için de kurulabilir — standart sapma yerine standart hata devreye girer: $z = \dfrac{\bar{x}-\mu}{SH}$.

::: {.notes}
±2 kuralı kaba bir sezgidir, kesin bir aykırı değer kararı değildir. Z-puanı bir gözlemi veya örneklem ortalamasını kendi dağılımı içinde standartlaştırır; tek başına hipotez testi kararı üretmez.
:::

## Şimdi Elimizde Veri Var — Bu, H0'ı Çürütmeye Yeter mi?

Uyku süresi–sınav performansı sorusunu bir H0/H1 çiftine çevirelim: H0 evrende ilişki olmadığını, yönlü H1 ise uyku arttıkça performansın arttığını söylesin. K01–K08 verisine kurgusal bir `sinav_puani` sütunu ekleyip pozitif yönlü bir örüntü gözlemlediğimizi düşünelim.

Soru "gözlenen bu örüntü H0'ı reddetmeye yeter mi?" görünür, ama eksik bir karşılaştırma içerir — neye göre "yeter"? Az önce kurduğumuz sezgi burada devreye girer: H0 doğru olsa bile örneklem sonuçları değişkenlik gösterir. Asıl soru şöyle çevrilmelidir: *gözlenen örüntü, H0 doğruyken de rastlantısal olarak bu kadar (veya daha uç) çıkabilir miydi?*

::: {.notes}
"H0'ı reddetmeye yeter mi?" sorusu bir karşılaştırma ölçütü olmadan yanıtlanamaz. P-değeri, gözlenen sonucun H0 altındaki rastlantısal sonuçlara göre ne kadar uç olduğunu nicelleştirir.
:::

## P-Değeri: Bu Sorunun Sayısal Yanıtı

**P-değeri**, H0 doğruyken, gözlenenle en az aynı derecede uç bir sonucun rastlantısal olarak ortaya çıkma olasılığıdır — bir **koşullu olasılık**, koşulu H0'ın doğru olmasıdır.

Bu koşullu yapı fark edilmezse üç yanlış yorum ortaya çıkar:

P-değeri "H0'ın doğru olma olasılığı" değildir; H0 doğru **varsayılarak** hesaplanır ve bu varsayımın olasılığını vermez. Küçük bir p-değeri etkinin büyük olduğu anlamına gelmez. Ayrıca p-değeri örneklem büyüklüğünden bağımsız değildir: aynı büyüklükteki etki, büyük bir örneklemde daha küçük bir p-değeri üretebilir.

::: {.notes}
Üç yanlış yorum aynı hatalı sezgiden doğar: küçük bir p-değerinin hipotezi kesinleştirdiği düşüncesi.
:::

## Anlamlılık Düzeyi: Veriden Önce Belirlenen Eşik

P-değeri tek başına bir karar vermez — **anlamlılık düzeyi** (α, geleneksel olarak .05) ile karşılaştırılır. α, veri toplanmadan **önce** belirlenen bir karar eşiğidir; p-değeri ise veri toplandıktan **sonra** hesaplanır.

Karar kuralı: p < α ise H0 reddedilir; p ≥ α ise H0 reddedilemez. "H0 kabul edilir" denmez — veri H0'ı çürütmeye yetmemiş olması, H0'ın doğru olduğunu göstermez; yalnızca eldeki kanıtın reddetmeye yetersiz kaldığını gösterir.

::: {.notes}
Hipotez ve α veriye bakıldıktan sonra sonuca uyacak biçimde değiştirilemez. Ayrıca H0'ın reddedilememesi, onun doğrulandığı anlamına gelmez.
:::

## İki Türlü Yanlış Karar: Tip I ve Tip II Hata

| | H0 gerçekte doğru | H0 gerçekte yanlış |
|---|---|---|
| **H0 reddedildi** | Tip I hata ("yanlış alarm") | Doğru karar |
| **H0 reddedilemedi** | Doğru karar | Tip II hata ("kaçırılan etki") |

**Tip I hata**, H0 gerçekte doğruyken reddedilmesidir — evrende hiçbir ilişki yokken, örneklemde varmış gibi bir sonuca varmak. **Tip II hata** ise H0 gerçekte yanlışken reddedilememesidir — evrende gerçekten bir ilişki varken, örneklemin bunu yakalamaya yetmemesi.

::: {.notes}
α = .05, H0 doğru olduğunda onu yanlışlıkla reddetme olasılığını %5 düzeyinde sınırlamayı hedefler. Tip I hata var olmayan bir ilişkiyi bulgu gibi gösterebilir; Tip II hata gerçek bir etkiyi görünmez bırakabilir. Hangisinin daha maliyetli olduğu araştırma bağlamına bağlıdır.
:::

## Anlamlı Olmak, Büyük Olmak Değildir

"İstatistiksel olarak anlamlı" (p < α) ile "etkinin büyüklüğü" farklı sorulara yanıt verir: biri "bu örüntü rastlantıyla açıklanabilir mi?" sorusunu, diğeri "bu örüntü ne kadar büyük, pratikte önemli mi?" sorusunu yanıtlar.

Çok büyük bir örneklemde standart hata küçüldüğü için, pratikte önemsiz denecek kadar küçük bir fark bile anlamlı çıkabilir. Tersine, küçük bir örneklemde standart hata büyük olduğu için, evrende gerçekten var olan büyük bir fark bile anlamlı çıkmayabilir.

::: {.notes}
Örneklem büyüdükçe standart hatanın küçülmesi, aynı etkinin p-değerini de değiştirebilir. Bu nedenle anlamlılık ile etkinin büyüklüğü ayrı raporlanmalı ve ayrı yorumlanmalıdır.
:::

## Normallik Tanısı: Hazır Bir Çıktıyı Doğru Okumak

Bir histogram + normal eğri karşılaştırması ve buna eşlik eden bir normallik testi p-değeri elimize geldiğini varsayalım. Bu çıktıyı doğru okumak dört noktaya dikkat gerektirir:

Çıktı örneklem büyüklüğüyle birlikte okunmalıdır — küçük bir örneklemde normallik testi gerçekte var olan bir sapmayı yakalayamayabilir, büyük bir örneklemde küçük ve önemsiz sapmalar bile anlamlı çıkabilir. **P > .05, normalliğin kanıtı değildir** — H0'ın ("veri normal dağılımdan gelir") reddedilememesi H0'ın doğru olduğunu göstermez, yalnızca eldeki kanıtın onu reddetmeye yetmediğini gösterir. Tanı yalnız sayısal p-değeriyle değil, histogramla birlikte okunmalıdır. Ve "hangi değişkenin normalliği sorgulanıyor?" sorusu her seferinde yeniden sorulmalıdır.

::: {.notes}
Normallik tanısı tek bir p-değerine indirgenmez. Grafik, örneklem büyüklüğü ve analiz edilecek değişken birlikte değerlendirilir; `reddedilemedi ≠ doğrulandı` ayrımı burada da geçerlidir.
:::

## Betimsel Özet ile Çıkarım İddiası: Ayrımı Tek Tabloda Görmek

| Soru | Hangi araç | Ne söyler, ne söylemez |
|---|---|---|
| Bu sekiz kişinin tipik değeri, yayılımı, şekli nedir? | Ortalama/medyan/mod, varyans/$s$, histogram | Yalnız eldeki veriyi özetler; evrene genelleme iddiası kurmaz. |
| Bu örneklem ortalaması evren ortalamasına göre ne kadar tipik? | Standart hata, z-puanı | Bir gözlem/ortalamanın olağanlığına dair sezgi verir; hipotez testi kararı değildir. |
| Gözlenen örüntü rastlantıyla açıklanabilir mi? | P-değeri, α, H0 kararı | Rastlantı ihtimalini ölçer; etkinin büyüklüğünü ya da H0'ın doğruluğunu söylemez. |
| Yanılma riski nereden gelir? | Tip I/II hata | α Tip I'i kontrol eder; Tip II örneklem/etki büyüklüğüyle ilgilidir. |

::: {.notes}
Uygulamada küçük veri için özet tablo ve dağılım grafiği üretilir; normallik çıktısı grafik, örneklem büyüklüğü ve araştırma deseniyle birlikte yorumlanır.
:::

## Kısa Geri Kontrol

- Sağa çarpık bir dağılımda ortalama mı medyan mı daha büyük çıkar, ve neden?
- K09'un `uyku_saati=1` değeri karşısında ilk sorulması gereken soru nedir — "sil miyim" mi, yoksa başka bir şey mi?
- Standart sapma ile standart hata hangi soruya, hangi dağılıma ait cevap verir?
- p = .03, α = .05 çıkıyor. Karar ne olur? Bu, "H1 kanıtlanmıştır" anlamına gelir mi?
- Küçük bir örneklemde bir normallik testi p = .21 veriyor. Bu, "veri kesinlikle normaldir" anlamına gelir mi?

::: {.notes}
Yanıtlar dağılımın biçimini, standart sapma ile standart hata ayrımını ve p-değeriyle karar arasındaki ilişkiyi birlikte gerekçelendirmelidir.
:::
