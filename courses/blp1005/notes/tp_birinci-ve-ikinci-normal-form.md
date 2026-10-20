---
title: "Birinci ve İkinci Normal Form"
subtitle: "BLP 1005 — Veritabanı Yönetim Sistemleri"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-10-20
description: Atomik hücre ve birinci normal form, tekrarlayan sütun grubu, kısmi ve tam bağımlılık, ikinci normal form, ayrıştırma ve giderilen anomaliler.
execute:
  echo: false
format:
  html:
    css:
    - ../../../styles.css
    - blp1005-diagrams.css
  revealjs:
    css:
    - ../../../slides.css
    - blp1005-diagrams.css
---

## Bir hücreye iki ders yazarsak

| ogrenci_numarasi | ad_soyad | telefon | ders_kodu | basari_notu |
| --- | --- | --- | --- | --- |
| 101 | Ahmet Yılmaz | 05554445566 | BLP1005, MAT1002 | 85, 70 |
| 102 | Ayşe Kaya | 05556667788 | BLP1005 | 90 |
| 103 | Mehmet Çelik | 05558889900 | BLP1005 | 65 |

> MAT1002'yi alanları bulalım. Ahmet'in MAT1002 notunu 75 yapalım.

**Atomik hücre:** Tek değer taşıyan, bölünemeyen hücre. Hücrenin tamamı, aradığımız ya da değiştirdiğimiz birimdir.

**Birinci normal form (1NF):** Her hücresi tek değer taşıyan ve aynı türden bilgi için tekrarlayan sütunlar içermeyen tablo.

`ad_soyad` iki sözcük içerir ama bu derste **ayrı aranmaz**, tek hücrede kalabilir.

::: {.notes}
Kayıt defterini ilk kez bir görevlinin kurduğunu düşünelim. Her öğrenciye tek satır ayırıyor ve derslerini, notlarını yan yana yazıyor. Ahmet'in satırında iki hücre birden çok değer taşıyor. Bu hücrelerle iki iş deneyelim.

MAT1002 dersini alan öğrencileri bulmak istiyoruz. `ders_kodu` sütununa bakıp “MAT1002'ye eşit mi?” diye soramıyoruz: 101'in hücresi `BLP1005, MAT1002` yazıyor ve hiçbir hücre tek başına MAT1002'ye eşit değil. Hücrenin içindeki metni parçalayıp aramamız gerekiyor.

Ahmet'in MAT1002 notunu 75 yapmak istiyoruz. Not `85, 70` hücresinin ikinci parçası; ama bunun MAT1002'ye ait olduğunu yalnız virgüllerin sırasına güvenerek biliyoruz. Dersler yer değiştirirse notlar da yer değiştirmek zorunda. Biri unutulursa Ahmet'in BLP1005 notu 70 olur.

İki işte de sorun aynı: aradığımız ya da değiştirdiğimiz değer hücrenin tamamı değil, içindeki bir parça. Her hücresi tek bir değer taşıyan ve aynı türden bilgiyi saklamak için tekrarlanan sütunlar içermeyen tabloya birinci normal formda diyoruz. Tek değer taşıyan hücreye de atomik, yani bölünemeyen hücre.

Atomikliği alanın kullanımı belirliyor. `ad_soyad` iki sözcük içeriyor ama bu derste adı ile soyadını hiç ayrı aramıyor, ayrı değiştirmiyoruz; bu yüzden tek hücrede kalması sorun değil. Öğrencileri soyadına göre sıralamamız gerekseydi ad ile soyadın ayrı sütunlara girmesi gerekirdi. Yani atomik olmanın ölçüsü, o bilgiyi nasıl kullandığımız.
:::

---

## Sütunlara bölmek çözüm değil

| ogrenci_numarasi | ders_1 | basari_notu_1 | ders_2 | basari_notu_2 |
| --- | --- | --- | --- | --- |
| 101 | BLP1005 | 85 | MAT1002 | 70 |
| 102 | BLP1005 | 90 | | |
| 103 | BLP1005 | 65 | | |

Üçüncü dersi alan öğrenci çıkarsa?

. . .

**Tekrarlayan sütun grubu:** Aynı türden bilginin birden çok sütuna dağılması. 1NF'de bulunamaz.

::: {.notes}
Akla gelen ilk düzeltme, her ders için ayrı sütun açmak. Hücreler tek değer taşıyor ama sorun yer değiştirdi.

Üçüncü dersi alan bir öğrenci çıktığında tabloya yeni sütunlar eklemek, yani tablonun yapısını değiştirmek gerekiyor. Çoğu öğrencinin ikinci ders hücreleri boş duruyor. MAT1002'yi kimin aldığını bulmak için hem `ders_1` hem `ders_2` sütununa bakmak gerekiyor. Aynı türden bilgi, yani ders, birden çok sütuna dağılmış. Buna tekrarlayan sütun grubu diyoruz.
:::

---

## Satırlara açmak

| ogrenci_numarasi | ad_soyad | telefon | ders_kodu | basari_notu |
| --- | --- | --- | --- | --- |
| 101 | Ahmet Yılmaz | 05554445566 | BLP1005 | 85 |
| 101 | Ahmet Yılmaz | 05554445566 | MAT1002 | 70 |
| 102 | Ayşe Kaya | 05556667788 | BLP1005 | 90 |
| 103 | Mehmet Çelik | 05558889900 | BLP1005 | 65 |

Her satır tek bir **öğrenci–ders çiftini** anlatır. Anahtar: `(ogrenci_numarasi, ders_kodu)`.

::: {.notes}
Çözüm, her satırın tek bir öğrenci–ders çiftini anlatması. Ahmet'in satırı iki satıra açılıyor.

Her hücrede tek değer var. Ders sayısı kaç olursa olsun sütun sayısı değişmiyor ve MAT1002'yi arayan tek bir sütuna bakıyor. Not artık kendi satırında, hangi derse ait olduğu yanında yazıyor.

Satırlara açmak anahtarı da değiştirdi. İlk biçimde öğrenci numarası satırı ayırt ediyordu. Şimdi 101 iki satırda geçiyor; ders kodu da tek başına yetmiyor, BLP1005 üç satırda var. Satırı, bağımlılıklardan bulduğumuz çift ayırt ediyor: `ogrenci_numarasi` ve `ders_kodu`. Her satır bir öğrencinin bir dersi alışını anlattığı için satırı tanıyan da o çift oldu; anahtar bu yüzden bileşik.

Satır bir öğrencinin bir dersi alışını anlattığına göre dersin adı ve öğretim üyesi bilgisi de o satıra yazılabilir. Dört sütun daha eklediğimizde dokuz sütunlu kayıt defterine ulaşıyoruz.
:::

---

## Birinci normal form yetmiyor

Tablo 1NF'de. Ama kayıt defterinin arızaları **gitmedi**:

- Ahmet'in telefonu hâlâ iki satırda yazılı.
- PRG1004 hâlâ öğrenci olmadan deftere girmiyor.
- MAT1002'nin tek kaydı silinirse dersin bilgisi de gidiyor.

> Telefonu belirlemek için anahtarın hepsi mi gerekir?

::: {.notes}
Bu tablo birinci normal formda: her hücrede tek değer var, tekrarlayan sütun yok. Ama geçen notta gördüğümüz arızaların hiçbiri gitmedi.

Birinci normal form tabloyu aranabilir ve değiştirilebilir bir düzene sokuyor, tekrarı bitirmiyor. Telefonu belirlemek için `ogrenci_numarasi` yeter; `ders_kodu` gerekmez. Satırı tanıyan çiftin bir parçası telefon bilgisini zaten belirliyor.
:::

---

## Bilgi anahtarın neresine bağlı? İkinci normal form

![Bileşik anahtar bileşenleri ile anahtar dışı sütunlar arasındaki bağımlılık şeması: ogrenci_numarasi ad_soyad ve telefon'u, ders_kodu ise ders_adi, ogretim_uyesi_no, ogretim_uyesi_adi ve ogretim_uyesi_bolumu'nu tek başına belirleyerek kısmi bağımlılık oluştururken; basari_notu ancak ogrenci_numarasi ve ders_kodu bileşiminin tamamına tam bağımlıdır.](../../../images/blp1005/kismi-tam-bagimlilik.svg){.blp-diagram}

**Kısmi bağımlılık:** Anahtar dışı bir sütunun bileşik anahtarın yalnız bir parçasına bağlı olması.

**İkinci normal form (2NF):** 1NF'de olan ve hiçbir anahtar dışı sütunu kısmi bağımlı olmayan tablo.

Bu tablo **2NF değil.**

Tek aday anahtar **tek sütunluysa** bölünemez; 1NF'deki tablo kendiliğinden 2NF'dedir.

::: {.notes}
Aynı soruyu anahtarda olmayan her sütun için soralım: bu sütunu belirlemek için anahtarın tamamı mı gerekir, bir parçası mı yeter?

Öğretim üyesinin adı ve bölümü de ders kodundan belli oluyor: bağımlılıklardan bildiğimiz gibi ders kodu öğretim üyesi numarasını, o da adı ve bölümü belirliyor. Not ise ne yalnız öğrenciden ne yalnız dersten belli oluyor.

Anahtar dışı bir sütunun bileşik anahtarın yalnız bir parçasına bağlı olmasına kısmi bağımlılık diyoruz. Anahtarın tamamına bağlı olup daha küçük bir parçasından belirlenememesine tam bağımlılık. Tabloda `basari_notu` dışındaki altı sütunun hepsi kısmi bağımlı.

Birinci normal formda olan ve hiçbir anahtar dışı sütunu kısmi bağımlı olmayan tabloya ikinci normal formda diyoruz. Bizim tablo bu ölçütü sağlamıyor.

Bir sınırlama: burada tek aday anahtarlı tablolarla çalışıyoruz. Tek aday anahtar tek sütunluysa onu daha küçük bir sütun grubuna bölemeyiz; kısmi bağımlılık oluşmaz. Bu koşulda 1NF'deki tablo kendiliğinden 2NF'de. Birden çok aday anahtar varsa yalnız seçilen birincil anahtara bakmak yetmez.
:::

---


## Kısmi bağımlı sütunları taşımak

**Ayrıştırma:** Bir tabloyu parçalara bölme.

`ogrenci` — Anahtar: `ogrenci_numarasi`

| ogrenci_numarasi | ad_soyad | telefon |
|---|---|---|
| 101 | Ahmet Yılmaz | 05554445566 |
| 102 | Ayşe Kaya | 05556667788 |
| 103 | Mehmet Çelik | 05558889900 |

`kayit` — Anahtar: `(ogrenci_numarasi, ders_kodu)`

| ogrenci_numarasi | ders_kodu | basari_notu |
|---|---|---|
| 101 | BLP1005 | 85 |
| 101 | MAT1002 | 70 |
| 102 | BLP1005 | 90 |
| 103 | BLP1005 | 65 |

::: {.notes}
Kısmi bağımlı sütunları, bağlı oldukları anahtar parçasıyla birlikte yeni bir tabloya taşıyoruz. Anahtarın tamamına bağlı sütun eski tabloda kalıyor.

Öğrenciye bağlı sütunlar `ogrenci` tablosuna gidiyor; anahtarı `ogrenci_numarasi`. Not ise `kayit` tablosunda kalıyor; anahtarı öğrenci–ders çifti.

`kayit` tablosunda `ogrenci_numarasi` ve `ders_kodu` birer yabancı anahtar: ilki `ogrenci` tablosundaki, ikincisi `ders` tablosundaki birincil anahtara işaret ediyor. Bu iki sütunu `kayit`'te bırakmasaydık hangi öğrencinin hangi dersten kaç aldığını bilemezdik. Tabloyu bölerken bağı taşıyan sütunlar bölünen tabloda kalıyor.
:::

---

## Ders tablosu: yeni ders öğrencisiz de girer

`ders` — Anahtar: `ders_kodu`

| ders_kodu | ders_adi | ogretim_uyesi_no | ogretim_uyesi_adi | ogretim_uyesi_bolumu |
|---|---|---|---|---|
| BLP1005 | Veritabanı Sistemleri | 501 | Dr. Can Aksoy | Bilgisayar Programcılığı |
| MAT1002 | Matematik II | 502 | Doç. Elif Demir | Temel Bilimler |
| PRG1004 | Görsel Programlama | 501 | Dr. Can Aksoy | Bilgisayar Programcılığı |

Üç tablo da **2NF'de.**

::: {.notes}
Derse bağlı sütunlar `ders` tablosuna gidiyor; anahtarı `ders_kodu`. Başlangıç defterine giremeyen PRG1004 dersi de buraya, öğrenci olmadan girebiliyor.

`ogrenci` ve `ders` tablolarının anahtarı tek sütunlu, kısmi bağımlılık yok. `kayit`'te bileşik anahtar var ama tek anahtar dışı sütunu `basari_notu` anahtarın tamamına bağlı. Üç tablo da ikinci normal formda.
:::

---

## Üç işlemi yeni tablolarda deneyelim

- **Telefon değişirse:** `ogrenci` tablosunda 101'in tek satırını değiştirmek yeter. Çelişecek ikinci kopya yok.
- **PRG1004 eklenirse:** `ders` tablosuna girer; öğrenci gerekmez.
- **Ahmet MAT1002'den çekilirse:** `kayit`'ten `(101, MAT1002)` silinir; ders `ders` tablosunda kalır.

> Hâlâ tekrar eden bir şey var mı?

. . .

`ders` tablosunda **Dr. Can Aksoy'un adı ve bölümü iki satırda yazılı.**

::: {.notes}
Üç anomaliyi yeni tablolarda sınayalım. Güncelleme anomalisi: Ahmet'in numarası yalnız `ogrenci` tablosunun 101 numaralı satırında yazılı; o satırı değiştirmek yeter. Ekleme anomalisi: PRG1004 `ders` tablosunda duruyor ve onu kaydetmek için öğrenci gerekmedi. Silme anomalisi: Ahmet MAT1002'den çekilirse `kayit` tablosunda `(101, MAT1002)` satırı silinir. MAT1002'nin adı ve öğretim üyesi `ders` tablosunda kalır.

Öğrenci tarafındaki tekrar bitti. Ama `ders` tablosuna bakalım: Dr. Can Aksoy'un adı ve bölümü iki satırda yazılı, BLP1005 satırında ve PRG1004 satırında. Aksoy başka bir bölüme geçerse iki satırı değiştirmemiz gerekir. İkinci normal form öğrenci ile ders bilgisini ayırdı, öğretim üyesi bilgisini ders satırlarının içinde bıraktı.
:::

---

## Karar soruları

1. Hücrede `05551112233, 05554445566` iki telefon yazılıysa hangi iş zorlaşır?
2. Anahtarı tek sütunlu bir tablo hiç kısmi bağımlılık taşıyabilir mi?
3. `ders` tablosunda öğretim üyesinin bölümü değişirse kaç satır güncellenir?

::: {.notes}
1. Telefonla arama yapmak zorlaşır: hiçbir hücre tek başına aranan numaraya eşit değil. Hangi numaranın değiştirildiğini bulmak da virgüllerin sırasına bağımlı olur.
2. Hayır. Kısmi bağımlılık için bileşik anahtar gerekir; tek sütunu bölemeyiz. Bu yüzden tek sütunlu anahtarlı 1NF tablosu kendiliğinden 2NF'dedir.
3. İki satır: BLP1005 ve PRG1004. Bu, ikinci normal formun bırakamadığı tekrar. Öğretim üyesi bilgisi ders satırlarının içinde duruyor.
:::

---

## Bu nottan kalanlar

- **1NF:** Her hücre tek değer taşır, tekrarlayan sütun grubu yoktur.
- **Kısmi bağımlılık:** Anahtar dışı sütun, bileşik anahtarın yalnız bir parçasına bağlıdır.
- **2NF:** 1NF + kısmi bağımlılık yok. Kısmi bağımlı sütunlar, bağlı oldukları parçayla yeni bir tabloya **taşınır.**
- Ayrıştırınca **bağı taşıyan sütunlar** (yabancı anahtarlar) kalır.

Öğretim üyesinin adı ve bölümü ders tablosunda neden hâlâ tekrar ediyor?

::: {.notes}
Bu notta iki normal formu gördük: önce hücreleri tek değere indirdik, sonra kısmi bağımlı sütunları ayrı tablolara taşıdık. Öğrenci tarafındaki tekrar bitti.

Ama `ders` tablosunda öğretim üyesinin adı ve bölümü hâlâ ders satırlarında tekrar ediyor. Burada anahtar bileşik değil, tek sütunlu; yani kısmi bağımlılık değil, başka bir bağımlılık türü var.
:::
