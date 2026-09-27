---
title: "Araştırma Sorusundan Veriye"
subtitle: "PSİ 303 — Davranışsal İstatistik için Yazılım Uygulamaları"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-09-23
description: Hedef evren ile örneklem ayrımı, betimleme–çıkarım farkı, gözlem birimi/değişken ve kimlik/değer alanı ayrımına giriş.
tags:
  - psi303
  - arastirma
  - hafta-1
---

## "Öğrencilerin uyku süresi" ne demek?

Bu üniversitede PSİ 303'e kayıtlı öğrenciler, ara sınavdan önceki gece kaç saat uyudu?

"Öğrencilerin uyku süresi" belirsiz kalıyor: hangi öğrenciler, hangi gece, kimin verisi?

::: {.notes}
Derse bu soruyla girilir; soru tahtaya yazılabilir. Amaç, ilk cümleden itibaren "elimizde veri olması" ile "kimin hakkında konuşmak istediğimiz" arasındaki boşluğu görünür kılmaktır. İstatistiğin ilk işi tam olarak bu boşluğu görünür kılmaktır: elimizdeki veriyle ne söyleyebileceğimizi, hangi topluluğa ne kadar güvenle taşıyabileceğimizden ayırmak. Bu slaytta çözüm verilmez, yalnız belirsizlik gösterilir — sonraki slaytta ayrım kurulur.
:::

---

## Hedef evren ile gözlenen örneklem

- **Hedef evren:** o dönem PSİ 303'e kayıtlı bütün öğrenciler.
- **Gözlenen örneklem:** elimizde gerçekten bulunan veri — örneğin bir oturumda gönüllü olarak veri veren sekiz kişi.

Örneklem, hedef evrenin **gözlenmiş bir alt kümesi**dir.

::: {.notes}
Sekiz kişilik bir grup kendiliğinden bütün evreni temsil etmez. Örneklemin evreni ne ölçüde yansıttığı — temsili olup olmadığı — ayrıca gerekçelendirilmesi gereken bir sorudur; sekiz kayda sahip olmak bu sorunun cevabını otomatik vermez. "Ölçülen kişi" ile "hakkında konuştuğumuz topluluk" arasındaki bu fark, dersin geri kalanındaki her ayrımın temelidir; bu slayt sonraki bütün slaytların önkoşuludur.
:::

---

## Öğretim tablosu: sekiz gönüllü, tek değişken

| Katılımcı kodu | Uyku saati (ara sınavdan önceki gece, öz-bildirim) |
|---|---|
| K01 | 5 |
| K02 | 6 |
| K03 | 6 |
| K04 | 7 |
| K05 | 8 |
| K06 | 5 |
| K07 | 6 |
| K08 | 7 |

::: {.notes}
Tablo gerçek bir katılımcı kaydı değildir, yalnızca ayrımı somutlaştırmak için kurgulanmıştır — bu açıkça söylenmeli, öğrenci gerçek veri sanmamalı. Her satır bir gözlemi, `uyku_saati` sütunu bu kişide ölçülen değeri gösterir. Bu tablo sekiz gönüllünün örneklem veri setidir — hedef evrenin (bütün PSİ 303 öğrencilerinin) kendisi değil. Bu tablo dersin geri kalanında (betimleme–çıkarım, sonra gözlem birimi/değişken) tekrar kullanılacak; öğrenciler tabloyu not almalı.
:::

---

## İki farklı cümle: betimleme ve çıkarım

1. *"Sekiz gönüllünün beşi ara sınavdan önceki gece yedi saatin altında uyudu."* → **betimleme**
2. *"PSİ 303'e kayıtlı öğrencilerin çoğu ara sınavdan önceki gece yedi saatin altında uyudu."* → **çıkarım**

::: {.notes}
Birinci cümle tabloyu sayarak (5, 6, 6, 7, 8, 5, 6, 7 içinden 7'nin altında olan beş tanesi: 5, 6, 6, 5, 6) doğrudan doğrulanabilir; öznesi "bu sekiz gönüllü", zamanı tablodaki tek gecedir. İkinci cümlenin öznesi artık sekiz gönüllü değil bütün hedef evrendir — bir çıkarım iddiasıdır ve tablodaki sayımdan kendiliğinden çıkmaz. Sekiz kişinin nasıl seçildiğini (gönüllü mü, rastgele mi) bilmeden "çoğu" ifadesini bütün derse genellemenin dayanağı eksik kalır; ayrıca tek bir geceye ait kayıt, kişinin genel uyku alışkanlığını doğrudan göstermez — ölçülen şey tek bir gecedir, bir alışkanlık değil. Gönüllü bir örneklemde gözlenen 5/8 oranı, hedef evrendeki gerçek oranın da 5/8 olduğunu göstermez; bu, oranların gerçekte aynı olma ihtimalini dışlamaz, yalnızca elimizdeki veri bunu tek başına kanıtlamaz demektir.
:::

---

## Çıkarımı hangi koşullar mümkün kılar?

- **Seçim yanlılığı:** kimler örnekleme girdi, hedef evreni tipik biçimde temsil ediyor mu?
- **Örneklem değişkenliği:** aynı evrenden başka bir örneklem aynı sonucu verir miydi?

::: {.notes}
Bu iki soru birbirinden farklı iki sorunu ayırt eder. Gönüllü olarak veri veren sekiz kişi, örneğin dersi daha düzenli takip eden ya da uyku düzenine daha dikkat eden öğrenciler olabilir — bu durumda örneklem evrenin tipik bir kesiti olmayabilir (seçim yanlılığı). Aynı evrenden seçilecek başka bir sekiz kişilik grup, salt rastlantısal olarak farklı bir sayı verebilir, diyelim 3/8 (örneklem değişkenliği). İyi bir seçim yöntemi yanlılığı azaltabilir ama sekiz kişilik bir örneklemin değişkenliğini ortadan kaldırmaz. Tersi de doğru değildir — "örneklemden hiçbir şey öğrenilemez" sonucuna varmak da hatalıdır; seçim ve değişkenlik hesaba katıldığında örneklem evrene dair bilgi taşımaya devam eder. Bu iki kavram formel olarak bu derste çözülmeyecek (örnekleme/çıkarım birimleri Hafta 4'te); burada yalnız farkı görmek hedeflenir.
:::

---

## İstatistiğin işleyiş sırası

Veri toplanır → düzenlenip özetlenir → araştırma sorusuyla ilişkili bir yorum kurulur → yorumun kapsamı ve belirsizliği kontrol edilir.

::: {.notes}
Bir hesaplama aracı (elle sayım, Excel, JASP, jamovi ya da SPSS) tabloyu saklayıp sayımı kolaylaştırabilir — ama hangi evrene ne söylenebileceğine tek başına karar veremez. Doğru hesaplanmış bir sayı kendiliğinden doğru bir yorum garantisi vermez: yorumun geçerliliği, sayının hangi kümeye ait olduğunun doğru belirlenmesine bağlıdır. Bu cümle, aracın (Excel/JASP/jamovi/SPSS) dönem boyunca yalnızca hesaplama katmanı olduğunu, yorumun her zaman öğrenciye ait kalacağını baştan yerleştirir.
:::

---

## Kısa geri kontrol

*"Bu sekiz gönüllüden kaçı yedi saatin altında uyudu?"* → hâlâ tablodan doğrudan doğrulanabilir.

Hedefi bütün derse genişletince: aynı beş kayıt artık tek başına yetmez.

::: {.notes}
Hedef daraldığında iddianın kapsamı da daralmıştır, sayım değişmemiştir. Hedef yeniden bütün derse genişletildiğinde hangi ek bilgiye ihtiyaç duyduğumuzu (seçimin nasıl yapıldığı, örneklem büyüklüğünün ve değişkenliğinin nasıl hesaba katılacağı) sormamız gerekir. Bu bir tanım testi değildir; iddia ile onu destekleyen verinin birbirine gerçekten eşlenip eşlenmediğini sınar. Bu soru sözlü olarak sorulup sınıfta birkaç öğrenciden yanıt istenebilir.
:::

---

## Şimdi aynı tabloya farklı bir soruyla bakalım

Bu tablo neden bu şekilde satır ve sütunlara ayrılmış, ve bu düzenlemenin kendisi bize ne söylüyor?

::: {.notes}
Geçiş cümlesi: az önce aynı tabloyu evren–örneklem ve betimleme–çıkarım ayrımı için kullandık; şimdi tanıdık tabloya dönüp farklı bir soru soracağız — bu tanıdıklık öğrenciye açıkça söylenmeli (yeni bir tablo değil, aynı tablo). Bu, dersin ikinci yarısının (veri yapısı girişi) başlangıcıdır.
:::

---

## Gözlem birimi ve değişken

| Katılımcı kodu | Uyku saati |
|---|---|
| K01 | 5 |
| K02 | 6 |
| ... | ... |

- Her satır (K01, K02, ...) bir **gözlem birimi**dir — burada bir katılımcı.
- Her sütun (`katilimci_kodu`, `uyku_saati`) bir **değişken**dir.

::: {.notes}
Bu genelleme kişiye özgü değildir: bir gözlem birimi her zaman bir kişi olmak zorunda değildir, bir oturum, bir madde ya da bir zaman noktası da olabilir; ilerideki birimlerde gözlem birimi yine katılımcı olacak, ama bu genelliği aklımızda tutmak gerekir — bu ayrıntı ileri haftalarda (örn. tekrarlı ölçüm) tekrar karşımıza çıkacak, burada yalnız adı konuyor.
:::

---

## Kimlik alanı mı, değer alanı mı?

- `katilimci_kodu` → **kimlik** alanı: yalnızca satırı ayırt eder, üzerinde istatistik hesaplanmaz.
- `uyku_saati` → **değer** alanı: betimleme ve çıkarımın asıl konusu olan ölçüm.

K01–K08 kodlarının "ortalamasını" almak ne anlama gelir?

::: {.notes}
Cevap: hiçbir şeye — kod numaraları kişiyi etiketlemek için seçilmiş rastgele işaretlerdir, aralarında sayısal bir büyüklük ilişkisi yoktur. Bir tabloya bakarken önce hangi sütunun kimlik, hangisinin değer olduğunu ayırmadan herhangi bir hesaba geçmek anlamsız bir işlemi meşrulaştırabilir. Bu soru sınıfa sorulup birkaç saniye beklenebilir; çoğu öğrenci "saçma" der, o tepkinin üzerine ayrım oturtulur.
:::

---

## Uygulama: iki cümleyi kendi verinle kur

Sekiz satırlık tabloyu (K01–K08, uyku saatleri 5, 6, 6, 7, 8, 5, 6, 7) seçtiğin bir ortamda (Excel, JASP, jamovi ya da SPSS) incele.

1. Yalnızca bu sekiz kişiyi tanımlayan, doğrudan doğrulanabilir bir sonuç.
2. Kayıtlı bütün PSİ 303 öğrencileri hakkında kurmak istediğin, ama mevcut veriden tek başına kesinleştiremeyeceğin bir iddia.

Beklenen ürün: bir soru için gözlem birimi ve hedef evren şeması; betimleme/çıkarım ayrımını gösteren iki kısa ifade.

::: {.notes}
Araç seçimi serbesttir; hiçbir araç zorunlu tutulmaz. Her cümle için öznesini ve geceye ait zaman sınırını işaretlemeleri istenir, sonra kendilerine şunu sormaları: "veri bu özneyi ve bu zamanı gerçekten kapsıyor mu?" İkinci cümle için evrene ilişkin bir yorum yapabilmek için hangi ek bilgiye (seçimin nasıl yapıldığı, örneklem değişkenliğinin ne olduğu) ihtiyaç duyduklarını tek cümleyle belirtmeleri istenir. Bu uygulama saatin 40 dakikalık uygulama dilimine karşılık gelir; ölçek düzeyleri ve veri sözlüğü ayrıntısı bilinçli olarak bu haftaya dahil edilmedi, gelecek haftada veri yapısı biriminin geri kalanıyla işlenecek — bu sınır öğrenciye açıkça söylenebilir ("bugün yalnız tabloyu tanıyoruz, ölçek düzeylerini gelecek hafta").
:::

---

## Kendini kontrol et

1. Hedef evren ile örneklem arasındaki fark nedir?
2. Bir cümlenin betimleme mi çıkarım mı olduğunu neye bakarak anlarsın?
3. Seçim yanlılığı ile örneklem değişkenliği neden aynı sorun değildir?
4. Gözlem birimi ile değişken arasındaki fark nedir?
5. Bir sütunun kimlik alanı mı değer alanı mı olduğunu neden önce belirlemek gerekir?

::: {.notes}
Bu sorulara yalnız kısa tanımlarla değil, gerekçeleriyle cevap verebilmek gerekir. Örneğin "örneklem evrenin bir parçasıdır" demek başlangıç için doğrudur; fakat daha güçlü cevap, örneklemin evreni ne ölçüde temsil ettiğinin ayrıca sınanması gerektiğini açıklamalıdır.

Haftanın sonunda hedef, hesaplama yapmak değildir. Hedef; elde edilen veriyle hakkında konuşulan topluluğu ayırabilmek, betimleme ile çıkarım arasındaki sınırı görebilmek ve bir tablodaki gözlem birimi/değişken/kimlik/değer yapısını tanıyabilmektir.
:::
