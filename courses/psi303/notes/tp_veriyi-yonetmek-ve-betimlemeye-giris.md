---
title: "Veriyi Yönetmek ve Betimlemeye Giriş"
subtitle: "PSİ 303 — Davranışsal İstatistik için Yazılım Uygulamaları"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-09-23
description: Eksik ve hatalı kayıt kararları, ters puanlama, türetilmiş puanlar, merkez ve yayılım ölçüleri ile örneklemler arası değişkenliğe giriş.
tags:
  - psi303
  - veri-yonetimi
  - betimsel-istatistik
  - hafta-3
---

## Şüpheli Hücreyi Fark Etmek Yetmez

K01–K08 uyku tablosunda 25 gibi olanaksız bir değer ya da boş bir hücre gördüğümüzde ilk adım bunun şüpheli olduğunu fark etmektir. Asıl veri yönetimi sorusu bundan sonra başlar: *bu hücreyle ne yapacağız ve kararı nasıl kayda geçireceğiz?*

Aynı sekiz katılımcıya (K01–K08) üç maddelik bir "ders kaygısı" ölçeği uygulandığını varsayalım (1–5 aralığı, m3 ters kodlu):

| Katılımcı | uyku_saati | kaygi_m1 (düz) | kaygi_m2 (düz) | kaygi_m3 (ters) |
|---|---|---|---|---|
| K01 | 5 | 4 | 4 | 2 |
| K02 | 6 | 3 | 4 | 3 |
| K03 | 6 | 2 | 2 | 4 |
| K04 | 7 | 2 | 3 | 4 |
| K05 | 8 |  | 1 | 5 |
| K06 | 5 | 5 | 5 | 1 |
| K07 | 25 | 3 | 3 | 3 |
| K08 | 7 | 1 | 2 | 5 |

Bu kurgusal bir öğretim tablosudur, gerçek katılımcı verisi değildir. `uyku_saati` sütunu, temizlik alıştırması için bilerek bozulmuş bir kopyadır: Hafta 1'deki temiz öğretim tablosunda K07'nin değeri 6 saattir. İki karar senaryosunu ayırın: Temiz tablo doğrulanmış özgün kayıt kabul edilirse çalışma kopyasındaki 25, gerekçesi kaydedilerek 6'ya düzeltilebilir; özgün kayıt doğrulanamıyorsa 25 eksik işaretlenir. Aşağıdaki veri yönetimi uygulaması ikinci senaryoyu kullanır. Merkez ve yayılım bölümü ise ayrı olarak Hafta 1'in temiz sekiz değeriyle çalışır.

::: {.notes}
K07'nin uyku kaydını değiştirmek için gerçek değeri bilmemiz gerekir; yalnız 25'in olanaksız olduğunu bilmek doğru değeri vermez. K05'in boş hücresinde ise verilmemiş bir yanıtı arıyoruz. İkisinin analiz sütunu eksik kalabilir, fakat işlem kaydındaki nedenleri farklıdır.
:::

## İlk İlke: Ham Veriye Dokunmadan Çalışırız

Tablo üzerinde yapılan hiçbir dönüşüm ham tablonun üzerine yazılmaz. Her karar yeni bir sütun ya da yeni bir sürüm olarak eklenir.

Bunun gerekçesi geri döndürülebilirliktir: bir dönüşüm kararı yanlış çıkarsa (ör. ters madde yanlış yönde çevrilmişse) ham veri hâlâ duruyorsa geri dönüp düzeltilebilir. Ham veri kaybolduysa hatanın nerede başladığı artık iz sürülemez.

::: {.notes}
Örneğin ters maddeyi iki kez çevirdiğimizi sonradan fark edersek ham sütuna dönüp hangi işlemin uygulandığını denetleyebiliriz. Yalnız dönüştürülmüş toplamı saklarsak aynı toplamın hangi madde değerlerinden üretildiğini geri bulamayız. Yeni sütunun adı ile işlem kaydı bu bağı korur.
:::

## Kodlama Hatası mı, Eksik Kayıt mı: Hangi İşlem Uygulanır?

İki durum ayrı işlemlere yönlendirilmelidir:

- K07'de `uyku_saati=25` bir **olanaksız değerdir** — bir gecede 25 saat uyunamaz. Önce kaynağı sorgulanır (mümkünse orijinal forma ya da katılımcıya dönülür); düzeltilemiyorsa 0 ya da tahmini bir sayı ile doldurulmaz, **eksik olarak işaretlenir**.
- K05'te `kaygi_m1` gerçekten boş bırakılmış bir kayıttır — katılımcı maddeyi yanıtlamamıştır. Bu da ayrı, tutarlı bir kodla (sayısal 0'dan açıkça ayrılmış bir eksik-değer işareti) işaretlenir.

İki durum farklı kaynaklardan gelir, ama ortak bir kural paylaşır: hiçbiri sessizce satır silinerek ya da rastgele bir sayıyla doldurularak çözülmez.

::: {.notes}
0 saat uyku, gerçekten ölçülmüşse geçerli bir süre olabilir. Boş bir uyku hücresine 0 yazmak ise o kişinin hiç uyumadığı iddiasını ekler. Kaygı maddelerinin yanıt aralığı 1–5 olduğu için 0 ayrıca geçerli bir madde yanıtı değildir. Eksik işareti, sayısal bir ölçüm gibi ortalamaya veya toplama katılmamalıdır.
:::

## Ters Puanlama: Aynı Yönde Okunabilir Hale Getirmek

`kaygi_m3` ters kodlanmış bir madde: düz maddelerde yüksek puan yüksek kaygı demekken, m3'te yüksek puan düşük kaygı demek. Bu maddeyi olduğu gibi toplama sokarsak düz maddelerin gösterdiği yönü bozarız.

Çözüm, ölçeğin uç noktalarına dayanan bir aritmetik ayna işlemi: `yeni_puan = (ölçek_max + ölçek_min) − eski_puan`. Ölçeğimiz 1–5 olduğu için `yeni = 6 − eski`.

**Doğrulayalım:** K01'in m3 puanı 2 iken dönüştürülmüş puanı `6 − 2 = 4` olur — yüksek puan artık yüksek kaygı yönünü gösteriyor. K06'nın m3 puanı 1 iken dönüştürülmüş puanı `6 − 1 = 5` olur — yüksek puan yüksek kaygı yönündedir. Dönüşümden önce m1 ile m3 ters yönde hareket ederken (K01: 4 ve 2; K06: 5 ve 1), dönüşümden sonra ikisi de aynı yönde okunuyor (K01: 4 ve 4; K06: 5 ve 5).

::: {.notes}
Dönüşümü uçlardan kontrol edelim: 1 → 5, 5 → 1 ve 3 → 3 olur. İkinci kez dönüştürdüğümüzde 6 − (6 − eski) = eski elde ederiz. Düz ve ters maddelerin her kişide eşit çıkması gerekmez; çevrilen yanıtın yüksek puanı aynı kaygı yönünü göstermelidir. Madde yönü, yanıtlar arasındaki ilişkiye bakılarak otomatik seçilmez.
:::

## Toplam/Ortalama Puan: Yeni Bir Değişken Türetmek

Ters puanlaması tamamlanmış madde seti (`kaygi_m1`, `kaygi_m2`, `kaygi_m3_ters`) üzerinden bir toplam ya da ortalama kaygı puanı hesaplanır. Bu, ham maddelerin yerine geçen bir sayı değil, onlardan **türetilmiş yeni bir değişkendir**.

Örneğin K01 için ters puanlanmış m3 = 6 − 2 = 4 olduğundan toplam 4 + 4 + 4 = 12, ortalama 4'tür; K06 için 5 + 5 + 5 = 15, ortalama 5'tir.

Eksik maddesi olan bir katılımcıda (K05'in `kaygi_m1` hücresi boş) toplam puanı nasıl ele alacağımız açık bir kural gerektirir: burada seçilen kural, yalnızca üç maddenin tamamı doluysa toplam/ortalama hesaplanır, değilse toplam hücresi de eksik işaretlenir.

Bir Likert maddesi tek başına sıralı ölçümdür; yanıt aralıklarının eşitliği kendiliğinden kurulmaz. Birkaç maddenin toplamı veya ortalamasını aralık ölçeğe yakın ele almak da ek bir ölçme varsayımıdır; yalnız puanlama yönergesinde toplama işlemi olması bu varsayımı doğrulamaz. Gerçek ölçeğin ölçme özellikleri ve kullanım gerekçesi incelenir. Buradaki üç madde, geçerliği gösterilmiş bir ölçek değil, puanlama alıştırmasıdır.

::: {.notes}
K05'in iki dolu maddesini toplasaydık 1 + 1 = 2 elde ederdik; bu sayı diğer kişilerin üç madde toplamlarıyla aynı bilgiyi taşımaz. Bu alıştırmada herkesin toplamı aynı üç maddeyi kapsadığı için K05'in türetilmiş puanı eksik bırakılır. Gerçek bir ölçekte başka bir eksik madde kuralı varsa onu ölçeğin puanlama belgesinden doğrularız.
:::

## Filtreleme: Kaydı Çıkarmanın Kayıt Sayısına Etkisi

Yalnızca kaygı puanı tam olan katılımcıları kullanmak istediğimizi varsayalım. Bu ölçüte göre K05 tabloya girmiyor: filtre öncesi 8 katılımcı, filtre sonrası 7. Çıkarılan katılımcının kim olduğu ve neden çıkarıldığı not edilir — "bir kayıt çıkarıldı" gibi belirsiz bir özet yetmez.

Bir kaydı çıkarmak örneklemi küçültür; sistematik olarak hep aynı tür katılımcının (ör. hep belirli bir maddeyi atlayanların) filtrelenmesi kalan örneklemi belli bir yönde çarpıtabilir; bu, Hafta 1'deki seçim yanlılığının veri temizleme aşamasında ortaya çıkan biçimidir.

::: {.notes}
Kaygı puanı filtresi K05'i çıkarır, K07'yi tutar. Uyku süresi analizinde ise eksik işaretlenen K07 hesaba girmez; K05'in uyku kaydı kullanılabilir. İki analiz de n=7 verebilir, fakat aynı yedi kişiden oluşmaz. Kayıt sayısı kadar hangi kayıtların kullanıldığını da bilmemiz gerekir.
:::

## İşlem Kaydı: Ham Veriden Son Tabloya Giden Her Adımın İzi

Buraya kadar yapılan her şey — hangi hücrenin neden değiştirildiği, hangi maddenin ters çevrildiği, hangi kaydın hangi gerekçeyle filtrelendiği — adım adım okunabilir bir günlükte tutulur:

- K07, `uyku_saati`: uygulamada özgün kayıt erişilemez varsayıldığı için 25 → yeni bir sütunda eksik olarak işaretlendi; ham sütun olduğu gibi kaldı. Doğrulanmış kaynak varsa 6'ya düzeltme ayrı bir karar olarak kaydedilir.
- K05, `kaygi_m1`: boş bırakılmış kayıt, yeni sütunda eksik olarak işaretlendi.
- `kaygi_m3` → `kaygi_m3_ters`: tüm satırlara `6 − kaygi_m3` uygulandı.
- `kaygi_toplam`: yalnızca üç madde de doluysa hesaplandı; K05 için eksik bırakıldı.
- Filtre: `kaygi_m1` boş olan katılımcı (K05) analiz alt kümesinden çıkarıldı. n=8 → n=7.

::: {.notes}
Günlüğü ham tabloyla yan yana okuduğumuzda her farkın kaynağı görünmelidir. Örneğin K01'in dönüştürülmüş m3 puanı 4 ise ham 2'ye ve 6 − 2 işlemine geri dönebilmeliyiz. Bir değer değişmiş ama bu bağı kuran kayıt yoksa dönüşüm doğru görünse bile denetlenemez.
:::


## Boş, Olanaksız ve Alışılmadık Kayıt

[Tepki süresi dosyasındaki](../../../data/psi303/PSI303-hafta3-tepki-suresi.xlsx) 18 denemeden üçüne bakalım:

| Kayıt | Tepki süresi | Kayıt notu | İlk değerlendirme |
|---|---:|---|---|
| D11 | boş | Bu deneme kaydedilmedi. | Eksik gözlem |
| D09 | −180 ms | Sistem çıktısında negatif süre. | Olanaksız kayıt |
| D08 | 1170 ms | Katılımcı dikkati dağıldığını bildirdi. | Uzun ama mümkün kayıt |

Negatif süreyi eksik işaretlemek, 1170 ms'yi de silmemiz gerektiği anlamına gelmez. D08 için görevin koşulları, kayıt notu ve önceden belirlenmiş dışlama ölçütü incelenir.

::: {.notes}
Bir süre yalnız uzun olduğu için yanlış sayılmaz. 1170 ms kaydı gerçek bir gecikmeyi yansıtabilir; −180 ms ise tepkinin başlangıçtan önce tamamlandığını iddia eder. Boş hücrede bir süre bilgisi yoktur. Üçünün analizdeki karşılığı, ham sütunu koruyarak gerekçeyle belirlenir. Kaydı işaretleyen sayısal eşik, bu üç nedenin hangisinin geçerli olduğunu tek başına belirleyemez.
:::

## Kısa Geri Kontrol — Veri Yönetimi

- K07'nin `uyku_saati` değeri neden düzeltilmeden bırakıldı, hangi kodla işaretlendi?
- `kaygi_m3` hangi yönde ters çevrildi, bunu hangi iki satırla doğrularsın?
- K05'in toplam kaygı puanı neden hesaplanmadı?
- Filtre öncesi ve sonrası kaç katılımcı vardı, aradaki fark kim ve neden?

::: {.notes}
K05'in toplam puanının boş kalması, kişinin hiç kaygılanmadığını söylemez; toplamı kurmak için gereken maddelerden biri yoktur. K07'nin kaygı maddeleri ise tamdır. Hangi kaydın kullanılacağına bütün satırı tek seferde silerek karar verirsek bu iki bilgiyi birbirine karıştırabiliriz.
:::

## Aynı Sekiz Sayı, Tek Bir Soru: Tipik Değer Nedir?

K01–K08 `uyku_saati` verisine dönelim: 5, 6, 6, 7, 8, 5, 6, 7. Bu sekiz sayıyı tek tek aktarmak yerine grubun **tipik** değerini özetlemek isteriz.

**Ortalama:** $\bar{x} = \dfrac{5+6+6+7+8+5+6+7}{8} = \dfrac{50}{8} = 6{,}25$

**Medyan:** sıralı veri 5, 5, 6, 6, 6, 7, 7, 8; ortadaki iki değerin (6 ve 6) ortalaması = 6.

**Mod:** en sık görülen değer, 6 (üç kez).

::: {.notes}
Ortalamanın duyarlılığını aynı veri üzerinde kontrol edelim. K05'in 8 saatini varsayımsal olarak 12 yapsaydık toplam 4 artardı; sekiz kişide ortalama 4/8 = 0,5 saat yükselip 6,75 olurdu. Sıralamanın ortasındaki iki 6 değişmediği için medyan 6 kalır, mod da 6 olurdu. Her ölçünün değişime aynı yanıtı vermediğini buradan görüyoruz. Ortalama için farkların anlamı, medyan için sıralama gerekir; mod bütün ölçüm düzeylerinde kullanılabilir.
:::

## Merkez Tek Başına Yeterli Değil

İki kurgusal sekiz kişilik grup: A grubu 5, 6, 6, 6, 6, 6, 6, 7 (5–7 arası sıkışık); B grubu 2, 3, 5, 6, 7, 8, 8, 9 (2–9 arası dağınık). İkisinin de toplamı 48, ortalaması 6.

A grubunun ortalamasını 6 saat olarak vermek, bireysel değerlerin de bu merkeze yakın olduğunu düşündürebilir; B grubunda aynı beklenti yanıltıcıdır, çünkü grup içinde büyük bir çeşitlilik vardır.

::: {.notes}
Ortalama iki grupta da 48/8 = 6'dır. A'da değerler merkeze yakın, B'de daha uzaktadır. Birinin ortalamasını ötekine kopyalamak yayılım bilgisi vermez. Aynı merkez çevresindeki bu farklılığı açıklık ve standart sapmayla ayrı ayrı ölçeriz.
:::

## Yayılım Ölçüleri: Açıklık, Varyans, Standart Sapma

**Açıklık:** en büyük − en küçük değer. K01–K08'de 8 − 5 = 3. Basittir ama yalnızca iki uç değere bakar, tek bir aşırı değer açıklığı tamamen değiştirebilir.

**Varyans**, her gözlemin ortalamadan sapmasını hesaba katar:

1. Sapma: $x_i - \bar{x}$.
2. Sapmaları doğrudan toplarsak sıfır çıkar (pozitif ve negatif birbirini iptal eder); bu yüzden kare alınır: $(x_i-\bar{x})^2$.
3. Örneklem varyansı için kareli sapmaların toplamı $n-1$'e bölünür: $s^2 = \dfrac{\sum (x_i-\bar{x})^2}{n-1}$. Örneklem ortalaması kareli sapmalar toplamını en küçük yapan noktadır. Ortalamayı aynı veriden tahmin etmek, evren varyansını tahmin ederken bu toplamı ortalama olarak küçültür; $n-1$ böleni bu etkiyi dengeler. Bu gerekçe bağımsız ve aynı dağılımdan gelen gözlemler içindir.

K01–K08 için kareli sapmaların toplamı 7,5; 7'ye bölününce $s^2 \approx 1{,}07$ saat².

**Doğrulayalım (birim kontrolü):** varyansın birimi karedir (saat²). Karekök alarak orijinal birime dönülür: $s = \sqrt{1{,}07} \approx 1{,}04$ saat. Katılımcıların uyku süresi ortalamadan tipik olarak yaklaşık bir saat sapmaktadır.

Aynı hesabı A ve B grupları için yaptığımızda ortalamanın gizlediği fark görünür: A için kareli sapmaların toplamı 2, $s \approx 0{,}53$ saat, açıklık 2; B için toplam 44, $s \approx 2{,}51$ saat, açıklık 7. Ortalamaları aynı olan iki grubu ayıran ölçü yayılımdır.

::: {.notes}
5 ve 7 için ortalama 6 olduğunda sapmalar −1 ve +1'dir; toplamları sıfırdır, fakat iki gözlem aynı değildir. Kareli sapmalar 1 ve 1 olur ve uzaklık kaybolmaz. K01–K08'de örneklem ortalamasına göre sapmaların toplamı sıfır olmak zorundadır; ilk yedi sapma biliniyorsa sekizincisi belirlenir. Örneklem varyansında n−1 kullanmak, ortalamayı aynı veriden tahmin etmenin etkisini dengeler. Karekök, saat² birimini yeniden saate taşır.
:::

## Aynı Evrenden Çekilen Örneklemler Neden Farklı Ortalamalar Verebilir?

K01–K08 için ortalama $\bar{x}=6{,}25$ saat, standart sapma $s\approx 1{,}04$ saat bulduk. Ama "ortalama 6,25 saat" cümlesi, sanki PSİ 303'e kayıtlı tüm öğrencilerin uyku süresini tek ve sabit bir sayıya indirgiyormuş gibi okunabilir. Aynı evrenden başka sekiz kişi seçilseydi, ortalama yine tam olarak 6,25 çıkar mıydı?

::: {.notes}
Ortalamayı gözlemlerin toplamı belirler. Aynı büyüklükte başka bir gruba bir 5 saatlik kişi yerine 9 saatlik kişi girse, diğer değerler aynıyken toplam 4 artar ve ortalama 0,5 saat yükselir. Hangi kişiler seçildiğinde hangi değerlerin toplama katıldığını bilmeden yeni ortalamanın eskiyle eşit olmasını bekleyemeyiz.
:::

## Örneklemler Arası Değişkenlik: Bir Düşünce Deneyi

Aynı evrenden (PSİ 303'e kayıtlı öğrenciler) tekrar tekrar sekiz kişilik örneklemler çekildiğini düşünelim — gerçek veri toplamıyoruz, yalnızca bir düşünce deneyi kuruyoruz. K01–K08 dışında, aynı evrenden çekilmiş varsayılan üç kurgusal karşılaştırma örneklemi: ikinci grup ortalaması 5,9 saat, üçüncü grup 6,6 saat, dördüncü grup 6,1 saat.

Bu dört değeri biz kurguladık; amaç bir kanıt sunmak değil, tekrarlı örnekleme durumunda ne beklendiğini göstermektir. Dört ortalama birbirinin aynısı değildir. Bu kurgusal değerler yalnız değişkenliği gösterir; evren ortalamasını veya bütün olası ortalamaların aralığını belirlemez. Aynı rastgele seçim düzeninde ortalamaların ne kadar yayıldığı evrenin yayılımına ve örneklem büyüklüğüne bağlıdır.

::: {.notes}
Dört sayı, ortalamanın örneklemle değişebildiğini gösteren kurgusal değerlerdir. Bu dört değerin yakın olması bütün olası örneklem ortalamalarının bu aralıkta kaldığını göstermez. Ortalamaların yayılımı, aynı rastgele seçim düzeni altında evrenin yayılımına ve her örneklemde kaç gözlem bulunduğuna bağlıdır.
:::

## Tek Bir Örneklem Ortalaması Neden Kesin Sonuç Değildir?

Tek bir örneklem ortalaması, evren ortalamasının kesin değeri değildir. Aynı evrenden seçilen farklı örneklemler başka ortalamalar üretebilir; bu nedenle evren hakkında çıkarım yalnız gözlenen ortalamaya dayanamaz.

::: {.notes}
Belirsizliğin iki kaynağını ayıralım. Aynı rastgele seçim düzeninde başka kişiler farklı bir ortalama verebilir. Sürekli aynı tür gönüllüler seçiliyorsa ortalamalar birbirine yakın olsa bile evrenin başka kesimlerini temsil etmeyebilir. Örneklemler arası oynaklık ile seçim yanlılığı aynı sorun değildir.
:::

## Uygulama: Veri Yönetimini Yazılımda Yapmak (60 dk)

1. **Ham tabloyu aç ve denetle (10 dk):** [K01–K08 Excel dosyasını](../../../data/psi303/PSI303-hafta3-uyku-kaygi.xlsx) jamovi'de aç; satırları yukarıdaki kaynak tabloyla karşılaştır ve ham sütunlara dokunma.
2. **Eksikleri işaretle (10 dk):** özgün kayıt erişilemez senaryosunda K07 `uyku_saati` ve K05 `kaygi_m1` için yeni sütunlarda eksik değer işaretini ver; iki kaydın nedenlerini işlem kaydına ayrı ayrı yaz.
3. **Ters puanla (15 dk):** `kaygi_m3_ters = 6 − kaygi_m3` sütununu üret; K01 ve K06 satırlarını elle hesapladığın değerlerle karşılaştır.
4. **Toplam üret (10 dk):** `kaygi_toplam` sütununu yalnızca üç madde de doluyken hesapla; K01 için 12, K06 için 15 çıktığını doğrula, K05'in eksik kaldığını kontrol et.
5. **Filtrele ve kaydet (15 dk):** `kaygi_toplam` eksik olan kaydı analiz alt kümesinden çıkar; $n$'nin 8'den 7'ye düştüğünü ve çıkarılan kaydın kim olduğunu işlem kaydına yaz.

::: {.notes}
Kaydedilmiş dosyada ham m3 ve dönüştürülmüş m3 yan yana bulunmalıdır. K01 için 2 → 4 ve toplam 12, K06 için 1 → 5 ve toplam 15 eşleşmeleri dosyadaki işlemi elle denetlememizi sağlar. K05'in toplamı eksik kalmalı; kaygı filtresi açılıp kapandığında kayıt sayısı 8 ve 7 olmalıdır.
:::

## Uygulama: Aynı Ortalama, Farklı Yayılım

[Puan grupları dosyasında](../../../data/psi303/PSI303-hafta3-puan-gruplari.xlsx) her grup için n, ortalama, medyan, açıklık ve örneklem standart sapmasını hesapla. İki grubun ortalama ve medyanı 70'tir; A grubunda açıklık 4 ve s≈1,20, B grubunda açıklık 60 ve s=20 olur. Bu dosyanın değişkeni puandır; uyku örneğinin saat cinsinden sonuçlarıyla karıştırma.

::: {.notes}
Aynı ortalama ve medyanın yanında yayılımı raporladığımızda grupların ayrımı görünür. Puanlar kurgusaldır; rastgele atama veya müdahale bilgisi yoktur. B grubunun daha çok yayılması, bu yayılımın hangi nedenden doğduğunu göstermez.
:::

## Kısa Geri Kontrol — Haftanın Tamamı

- Elinde ham tablo, dönüştürülmüş tablo ve işlem kaydı olduğunu düşün: K07 ve K05'in hücreleri nasıl işaretlendi, `kaygi_m3` hangi yönde çevrildi?
- K01–K08 verisinde ortalama 6,25 iken medyan ve mod neden 6 oluyor?
- A ve B gruplarının ortalaması aynıyken hangi ölçü ikisini birbirinden ayırır?
- Standart sapma yaklaşık 1,04 saat ne anlama gelir — "1,07 saat kare" (varyans) değil de neden bu sayı raporlanır?
- Aynı evrenden çekilen dört kurgusal örneklem ortalaması (6,25; 5,9; 6,6; 6,1) örneklemler arası değişkenlik hakkında neyi gösterir, neyi göstermez?

::: {.notes}
Sonuçların denetlenebilirliği tablo, özet ve işlem kaydının birbirine bağlanmasına dayanır. Toplam kaygı puanı için hangi maddelerin kullanıldığını, uyku standart sapması için hangi kişilerden veri olduğunu ve hangi hücrelerin neden değiştiğini ayrı ayrı gösterebilmeliyiz. Aynı kayıt sayısı aynı analiz tablosunu garanti etmez.
:::
