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
K07'nin 25 değeri ile K05'in boş `kaygi_m1` hücresi aynı görünse de aynı sorunu temsil etmez. İlkinde olanaksız bir kayıt, ikincisinde yanıtsız bir madde vardır; uygulanacak işlemden önce bu fark kurulmalıdır.
:::

## İlk İlke: Ham Veriye Dokunmadan Çalışırız

Tablo üzerinde yapılan hiçbir dönüşüm ham tablonun üzerine yazılmaz. Her karar yeni bir sütun ya da yeni bir sürüm olarak eklenir.

Bunun gerekçesi geri döndürülebilirliktir: bir dönüşüm kararı yanlış çıkarsa (ör. ters madde yanlış yönde çevrilmişse) ham veri hâlâ duruyorsa geri dönüp düzeltilebilir. Ham veri kaybolduysa hatanın nerede başladığı artık iz sürülemez.

::: {.notes}
Ters puanlama, eksik değer işaretleme ve filtreleme aynı riski taşır: geri dönüşü olmayan bir üzerine-yazma. Ham tablo korunursa dönüşümün nerede ve neden yapıldığı denetlenebilir.
:::

## Kodlama Hatası mı, Eksik Kayıt mı: Hangi İşlem Uygulanır?

İki durum ayrı işlemlere yönlendirilmelidir:

- K07'de `uyku_saati=25` bir **olanaksız değerdir** — bir gecede 25 saat uyunamaz. Önce kaynağı sorgulanır (mümkünse orijinal forma ya da katılımcıya dönülür); düzeltilemiyorsa 0 ya da tahmini bir sayı ile doldurulmaz, **eksik olarak işaretlenir**.
- K05'te `kaygi_m1` gerçekten boş bırakılmış bir kayıttır — katılımcı maddeyi yanıtlamamıştır. Bu da ayrı, tutarlı bir kodla (sayısal 0'dan açıkça ayrılmış bir eksik-değer işareti) işaretlenir.

İki durum farklı kaynaklardan gelir, ama ortak bir kural paylaşır: hiçbiri sessizce satır silinerek ya da rastgele bir sayıyla doldurularak çözülmez.

::: {.notes}
Mekanizma burada "neden 0 yazılmaz" sorusuna dayanıyor: 0 yazmak "hiç kaygılanmadı" ya da "0 saat uyudu" gibi gerçekte ölçülmemiş bir bilgiyi uydurmak demektir — hem kayıt hatası hem gerçek yanıtsızlık için bu risk aynı. Karar ile gerekçe ayrı ayrı kayda geçirilir; işaretleme ham sütunda değil, yeni bir sütunda ya da kopyada yapılır (işlem kaydı bölümünde tutulacak biçimiyle).
:::

## Ters Puanlama: Aynı Yönde Okunabilir Hale Getirmek

`kaygi_m3` ters kodlanmış bir madde: düz maddelerde yüksek puan yüksek kaygı demekken, m3'te yüksek puan düşük kaygı demek. Bu maddeyi olduğu gibi toplama sokarsak düz maddelerin gösterdiği yönü bozarız.

Çözüm, ölçeğin uç noktalarına dayanan bir aritmetik ayna işlemi: `yeni_puan = (ölçek_max + ölçek_min) − eski_puan`. Ölçeğimiz 1–5 olduğu için `yeni = 6 − eski`.

**Doğrulayalım:** K01'in m3 puanı 2 iken dönüştürülmüş puanı `6 − 2 = 4` olur — artık m1'in (4) gösterdiği yüksek kaygı yönüyle aynı yönde. K06'nın m3 puanı 1 iken dönüştürülmüş puanı `6 − 1 = 5` olur — m1'i (5) ile aynı yönde. Dönüşümden önce m1 ile m3 ters yönde hareket ederken (K01: 4 ve 2; K06: 5 ve 1), dönüşümden sonra ikisi de aynı yönde okunuyor (K01: 4 ve 4; K06: 5 ve 5).

::: {.notes}
Ters madde olduğu gibi toplandığında düz maddelerle çelişen bir yön üretir. Aritmetik dönüşümden sonra en az bir düz–ters madde çifti yan yana kontrol edilmelidir. Hangi maddenin ters kodlandığı otomatik olarak tahmin edilmez; ölçeğin belgesinden doğrulanır. Dönüştürülmüş sütun ham `kaygi_m3`'ün yerine yazılmaz, yanına eklenir.
:::

## Toplam/Ortalama Puan: Yeni Bir Değişken Türetmek

Ters puanlaması tamamlanmış madde seti (`kaygi_m1`, `kaygi_m2`, `kaygi_m3_ters`) üzerinden bir toplam ya da ortalama kaygı puanı hesaplanır. Bu, ham maddelerin yerine geçen bir sayı değil, onlardan **türetilmiş yeni bir değişkendir**.

Örneğin K01 için ters puanlanmış m3 = 6 − 2 = 4 olduğundan toplam 4 + 4 + 4 = 12, ortalama 4'tür; K06 için 5 + 5 + 5 = 15, ortalama 5'tir.

Eksik maddesi olan bir katılımcıda (K05'in `kaygi_m1` hücresi boş) toplam puanı nasıl ele alacağımız açık bir kural gerektirir: burada seçilen kural, yalnızca üç maddenin tamamı doluysa toplam/ortalama hesaplanır, değilse toplam hücresi de eksik işaretlenir.

Bir Likert maddesi tek başına sıralı bir ölçümdür (Hafta 2'deki `uyku_kalitesi` gibi); maddelerin aralıklarının eşit olduğu varsayılmaz. Birkaç maddenin toplam ya da ortalaması ise davranış bilimlerinde çoğunlukla aralık ölçeğe yakın bir puan gibi işlenir. Bu bir varsayımdır, doğrulanmış bir gerçek değil; ölçeğin puanlama yönergesine dayanılarak kabul edilir.

::: {.notes}
Eksik maddeler için tek bir evrensel işlem yoktur. Kural ölçeğin puanlama yönergesine dayanmalı, analizden önce belirlenmeli ve hangi kayıtları etkilediğiyle birlikte yazılmalıdır.
:::

## Filtreleme: Kaydı Çıkarmanın Kayıt Sayısına Etkisi

Yalnızca kaygı puanı tam olan katılımcıları kullanmak istediğimizi varsayalım. Bu ölçüte göre K05 tabloya girmiyor: filtre öncesi 8 katılımcı, filtre sonrası 7. Çıkarılan katılımcının kim olduğu ve neden çıkarıldığı not edilir — "bir kayıt çıkarıldı" gibi belirsiz bir özet yetmez.

Bir kaydı çıkarmak örneklemi küçültür; sistematik olarak hep aynı tür katılımcının (ör. hep belirli bir maddeyi atlayanların) filtrelenmesi kalan örneklemi belli bir yönde çarpıtabilir; bu, Hafta 1'deki seçim yanlılığının veri temizleme aşamasında ortaya çıkan biçimidir.

::: {.notes}
Filtreleme bazen gereklidir; sorun işlemin görünmez kalmasıdır. Çıkarma ölçütü, etkilenen kayıtlar ve örneklem büyüklüğündeki değişim birlikte kaydedilmelidir.
:::

## İşlem Kaydı: Ham Veriden Son Tabloya Giden Her Adımın İzi

Buraya kadar yapılan her şey — hangi hücrenin neden değiştirildiği, hangi maddenin ters çevrildiği, hangi kaydın hangi gerekçeyle filtrelendiği — adım adım okunabilir bir günlükte tutulur:

- K07, `uyku_saati`: uygulamada özgün kayıt erişilemez varsayıldığı için 25 → yeni bir sütunda eksik olarak işaretlendi; ham sütun olduğu gibi kaldı. Doğrulanmış kaynak varsa 6'ya düzeltme ayrı bir karar olarak kaydedilir.
- K05, `kaygi_m1`: boş bırakılmış kayıt, yeni sütunda eksik olarak işaretlendi.
- `kaygi_m3` → `kaygi_m3_ters`: tüm satırlara `6 − kaygi_m3` uygulandı.
- `kaygi_toplam`: yalnızca üç madde de doluysa hesaplandı; K05 için eksik bırakıldı.
- Filtre: `kaygi_m1` boş olan katılımcı (K05) analiz alt kümesinden çıkarıldı. n=8 → n=7.

::: {.notes}
Bu günlük, "veri temizlendi" gibi tek cümlelik bir özetten farklıdır: ham veri ile analiz tablosu arasındaki her farkın gerekçesini taşır. Her adım hangi hücreyi veya sütunu etkilediğini, uygulanan işlemi ve gerekçesini okunabilir biçimde göstermelidir.
:::

## Teorik akış — 120 dakika

1. **Ham kayıt ve karar gerekçesi (30 dk):** K05'in boş maddesini, K07'nin 25 saatini ve tepki süresi veri setindeki negatif, boş ve çok uzun kayıtları karşılaştır. Her kayıt için “olanaksız mı, eksik mi, alışılmadık ama mümkün mü?” sorusuna kanıtla cevap verdir; özgün kaynağa erişilebilir ve erişilemez senaryoları ayır.
2. **Ters madde ve türetilmiş puan (30 dk):** `kaygi_m3` için 1→5 ve 5→1 dönüşümünü iki uçta göster; sonra K01 ve K06 toplamlarını öğrencilerle elle hesapla. K05'te eksik maddenin toplamı neden eksik bıraktığını ve bu kararın analizdeki kişi sayısına etkisini tartıştır.
3. **Merkez ölçülerini karşılaştır (25 dk):** Hafta 1'in temiz sekiz uyku değerini sıralayıp ortalama, medyan ve modu ayrı ayrı buldur. Tek bir uyku değeri değişirse üçünün aynı biçimde değişmeyeceğini karşı örnekle sınat; her ölçünün hangi soruyu yanıtladığını belirt.
4. **Yayılım ve örneklem değişkenliği (35 dk):** Eşit ortalamalı A/B grupları için açıklığı ve kareli sapmaları tahtada adım adım hesaplat. Örneklem varyansında `n−1` ve standart sapmada karekökün işlevini bağla. Puan grupları dosyasında ortalamalar eşitken standart sapmaların neden farklı çıktığını yorumlat; farklı sekiz kişilik örneklemlerin ortalamasının değişebileceği düşünce deneyine geç.

## Kısa Geri Kontrol — Veri Yönetimi

- K07'nin `uyku_saati` değeri neden düzeltilmeden bırakıldı, hangi kodla işaretlendi?
- `kaygi_m3` hangi yönde ters çevrildi, bunu hangi iki satırla doğrularsın?
- K05'in toplam kaygı puanı neden hesaplanmadı?
- Filtre öncesi ve sonrası kaç katılımcı vardı, aradaki fark kim ve neden?

::: {.notes}
Uygulamada küçük bir tabloda ters madde ve toplam puan kontrol edilir; filtre öncesi–sonrası kayıt sayıları karşılaştırılır ve kararlar işlem günlüğüne yazılır.
:::

## Aynı Sekiz Sayı, Tek Bir Soru: Tipik Değer Nedir?

K01–K08 `uyku_saati` verisine dönelim: 5, 6, 6, 7, 8, 5, 6, 7. Bu sekiz sayıyı tek tek aktarmak yerine grubun **tipik** değerini özetlemek isteriz.

**Ortalama:** $\bar{x} = \dfrac{5+6+6+7+8+5+6+7}{8} = \dfrac{50}{8} = 6{,}25$

**Medyan:** sıralı veri 5, 5, 6, 6, 6, 7, 7, 8; ortadaki iki değerin (6 ve 6) ortalaması = 6.

**Mod:** en sık görülen değer, 6 (üç kez).

::: {.notes}
Ortalama, her gözlemin katkıda bulunduğu bir denge noktasıdır; herhangi bir gözlem değişirse ortalama da değişir. Aynı sekiz gözlem için ortalama 6,25, medyan 6 ve mod 6 bulunması her ölçünün veriyi farklı bir mantıkla özetlediğini gösterir. Ortalama en az aralık düzeyi ister; medyan en az sıralı düzey ister; mod ise her ölçüm düzeyinde hesaplanabilir. Bu yüzden `bolum` için yalnız mod, `uyku_kalitesi` için medyan ve mod, `uyku_saati` için üçü de anlamlıdır.
:::

## Merkez Tek Başına Yeterli Değil

İki kurgusal sekiz kişilik grup: A grubu 5, 6, 6, 6, 6, 6, 6, 7 (5–7 arası sıkışık); B grubu 2, 3, 5, 6, 7, 8, 8, 9 (2–9 arası dağınık). İkisinin de toplamı 48, ortalaması 6.

A grubundaki bir kişiye "ortalama 6 saat uyuyorsunuz" demek gerçeği iyi temsil eder; B grubunda aynı cümle yanıltıcıdır, çünkü grup içinde büyük bir çeşitlilik vardır.

::: {.notes}
Sınır→kavram geçişi: aynı ortalamanın iki farklı dağılımı gizleyebildiğini somut sayılarla gösteriyoruz, hemen ardından bu sınırı aşan kavramı (yayılım) tanıtacağız — boşluk bırakmıyoruz. Merkez ölçüsü tek başına bu farkı yakalayamaz, bu yüzden verinin ne kadar "yayıldığını" gösteren ayrı bir ölçüye ihtiyaç duyulur.
:::

## Yayılım Ölçüleri: Açıklık, Varyans, Standart Sapma

**Açıklık:** en büyük − en küçük değer. K01–K08'de 8 − 5 = 3. Basittir ama yalnızca iki uç değere bakar, tek bir aşırı değer açıklığı tamamen değiştirebilir.

**Varyans**, her gözlemin ortalamadan sapmasını hesaba katar:

1. Sapma: $x_i - \bar{x}$.
2. Sapmaları doğrudan toplarsak sıfır çıkar (pozitif ve negatif birbirini iptal eder); bu yüzden kare alınır: $(x_i-\bar{x})^2$.
3. Örneklem varyansı için kareli sapmaların toplamı $n-1$'e bölünür: $s^2 = \dfrac{\sum (x_i-\bar{x})^2}{n-1}$. Sapmalar örneklemin kendi ortalamasına göre alındığından, bu ortalama verilere olabilecek en yakın nokta olur ve sapmalar evren ortalamasına göre alınsaydı olacağından küçük çıkar; $n$ yerine $n-1$ ile bölmek bu küçülmeyi dengelemek içindir.

K01–K08 için kareli sapmaların toplamı 7,5; 7'ye bölününce $s^2 \approx 1{,}07$ saat².

**Doğrulayalım (birim kontrolü):** varyansın birimi karedir (saat²). Karekök alarak orijinal birime dönülür: $s = \sqrt{1{,}07} \approx 1{,}04$ saat. Katılımcıların uyku süresi ortalamadan tipik olarak yaklaşık bir saat sapmaktadır.

Aynı hesabı A ve B grupları için yaptığımızda ortalamanın gizlediği fark görünür: A için kareli sapmaların toplamı 2, $s \approx 0{,}53$ saat, açıklık 2; B için toplam 44, $s \approx 2{,}51$ saat, açıklık 7. Ortalamaları aynı olan iki grubu ayıran ölçü yayılımdır.

::: {.notes}
Kare alma, pozitif ve negatif sapmaların birbirini götürmesini önler; karekök ise ölçüyü yeniden saat birimine taşır. Hesaplamada örneklem standart sapması kullanıldığı için payda $n-1$'dir.
:::

## Aynı Evrenden Çekilen Örneklemler Neden Aynı Ortalamayı Vermez?

K01–K08 için ortalama $\bar{x}=6{,}25$ saat, standart sapma $s\approx 1{,}04$ saat bulduk. Ama "ortalama 6,25 saat" cümlesi, sanki PSİ 303'e kayıtlı tüm öğrencilerin uyku süresini tek ve sabit bir sayıya indirgiyormuş gibi okunabilir. Aynı evrenden başka sekiz kişi seçilseydi, ortalama yine tam olarak 6,25 çıkar mıydı?

::: {.notes}
Sezgisel yanıt hayırdır. Örneklem ortalaması yalnız seçilen kişilere değil, örnekleme kimin girdiğine de bağlıdır; aynı evrenden seçilen başka bir grup farklı bir ortalama verebilir.
:::

## Örneklemler Arası Değişkenlik: Bir Düşünce Deneyi

Aynı evrenden (PSİ 303'e kayıtlı öğrenciler) tekrar tekrar sekiz kişilik örneklemler çekildiğini düşünelim — gerçek veri toplamıyoruz, yalnızca bir düşünce deneyi kuruyoruz. K01–K08 dışında, aynı evrenden çekilmiş varsayılan üç kurgusal karşılaştırma örneklemi: ikinci grup ortalaması 5,9 saat, üçüncü grup 6,6 saat, dördüncü grup 6,1 saat.

Bu dört değeri biz kurguladık; amaç bir kanıt sunmak değil, tekrarlı örnekleme durumunda ne beklendiğini göstermektir. Dört ortalama birbirinin aynısı değildir; ancak aynı evrenden geldikleri için 5,9 ile 6,6 arasında, evren ortalaması olduğunu varsaydığımız değerin çevresinde toplanırlar. Sekiz kişilik örneklemlerde 2 saat ya da 10 saat gibi evren ortalamasından çok uzak bir örneklem ortalaması beklenmez.

::: {.notes}
Örneklem ortalamalarının kendisi bir dağılım oluşturur. Tek bir sayı olarak düşündüğümüz "ortalama", mümkün örneklemler üzerinden bakıldığında değişen bir büyüklüktür. Verilen dört ortalama gerçek veri değil, değişkenlik fikrini somutlaştıran kurgusal değerlerdir.
:::

## Tek Bir Örneklem Ortalaması Neden Kesin Sonuç Değildir?

Tek bir örneklem ortalaması, evren ortalamasının kesin değeri değildir. Aynı evrenden seçilen farklı örneklemler başka ortalamalar üretebilir; bu nedenle evren hakkında çıkarım yalnız gözlenen ortalamaya dayanamaz.

::: {.notes}
Düşünce deneyinin sonucu iki parçalıdır: örneklem ortalamaları birbirinden farklıdır, fakat aynı evrenden geldikleri için genellikle ortak bir bölge çevresinde toplanırlar. Çıkarımın belirsizliği bu değişkenlikten doğar.
:::

## Uygulama: Veri Yönetimini Yazılımda Yapmak (60 dk)

1. **Ham tabloyu aç ve denetle (10 dk):** K01–K08 Excel dosyasını jamovi'de aç; satırları yukarıdaki kaynak tabloyla karşılaştır ve ham sütunlara dokunma.
2. **Eksikleri işaretle (10 dk):** özgün kayıt erişilemez senaryosunda K07 `uyku_saati` ve K05 `kaygi_m1` için yeni sütunlarda eksik değer işaretini ver; iki kaydın nedenlerini işlem kaydına ayrı ayrı yaz.
3. **Ters puanla (15 dk):** `kaygi_m3_ters = 6 − kaygi_m3` sütununu üret; K01 ve K06 satırlarını elle hesapladığın değerlerle karşılaştır.
4. **Toplam üret (10 dk):** `kaygi_toplam` sütununu yalnızca üç madde de doluyken hesapla; K01 için 12, K06 için 15 çıktığını doğrula, K05'in eksik kaldığını kontrol et.
5. **Filtrele ve kaydet (15 dk):** `kaygi_toplam` eksik olan kaydı analiz alt kümesinden çıkar; $n$'nin 8'den 7'ye düştüğünü ve çıkarılan kaydın kim olduğunu işlem kaydına yaz.

::: {.notes}
K01–K08 Excel dosyası ders sayfasında bulunur. Beklenen ürün, ham tablo + dönüştürülmüş jamovi dosyası + işlem kaydıdır; menü konumu ezberletilmez.
:::

## Kısa Geri Kontrol — Haftanın Tamamı

- Elinde ham tablo, dönüştürülmüş tablo ve işlem kaydı olduğunu düşün: K07 ve K05'in hücreleri nasıl işaretlendi, `kaygi_m3` hangi yönde çevrildi?
- K01–K08 verisinde ortalama, medyan ve mod neden farklı sayılar veriyor?
- A ve B gruplarının ortalaması aynıyken hangi ölçü ikisini birbirinden ayırır?
- Standart sapma yaklaşık 1,04 saat ne anlama gelir — "1,07 saat kare" (varyans) değil de neden bu sayı raporlanır?
- Aynı evrenden çekilen dört kurgusal örneklem ortalaması (6,25; 5,9; 6,6; 6,1) neden birbirinin aynı değil, ama tamamen rastgele de değil?

::: {.notes}
Uygulamada küçük tabloda ters madde ve toplam puan kontrol edilir, filtre öncesi–sonrası kayıt sayıları karşılaştırılır ve bütün dönüşümler işlem kaydına yazılır.
:::
