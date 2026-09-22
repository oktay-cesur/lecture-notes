---
title: "DDL ve Tablo Oluşturma"
subtitle: "BLP 1005 — Veritabanı Yönetim Sistemleri"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-13
description: MySQL üzerinde veritabanı ve tablo oluşturma, veri tipleri, kısıtlar, yabancı anahtarlar ve yapı doğrulama.
tags:
  - blp1005
  - veritabani
  - hafta-5
---

## Ele Alınacak Temel Sorular
- Tasarlanan bir veri modeli doğrudan sunucuya neden veri alamaz?
- Veri Tanımlama Dili (DDL) nedir ve neyi amaçlar?
- Kavramsal modeldeki nitelikler SQL tanımlayıcılarına nasıl dönüştürülür?
- Tablo ve sütun adlandırmasında neden küçük harf ve ASCII standardı zorunludur?
- Veri tipi seçimi iş kurallarıyla nasıl ilişkilendirilir?
- Sayısal karakterler içeren her alan neden sayısal tip (`INT`) yapılmaz?
- Çalışma alanı (şema/veritabanı) nasıl açılır ve neden etkin kılınmalıdır?
- Tablo sütunları ve kısıtları (constraints) hangi sözdizimiyle tanımlanır?
- `NULL` değeri ne anlama gelir; sıfır veya boş metinden farkı nedir?
- `AUTO_INCREMENT` ile birincil anahtar arasındaki kesin mekanizma ayrımı nedir?
- `PRIMARY KEY` ile `UNIQUE` kısıtları arasındaki yapısal farklar nelerdir?
- Çoka çok (N:M) ilişki fiziksel bağlantı tablosuna ve yabancı anahtara nasıl dönüştürülür?
- Tablolar hangi sırayla oluşturulmalıdır ve sıra ihlalinde hangi hata ile karşılaşılır?
- Oluşturulan tabloların sütun yapısı ve kısıtları (`DESCRIBE`, `SHOW CREATE TABLE`) ile nasıl doğrulanır?
- Kısıtların çalıştığı kasıtlı hata denemesiyle (`ERROR 1452`) nasıl kanıtlanır?
- Değişen kurumsal ihtiyaçlarda tablo yapısı veriler kaybedilmeden (`ALTER TABLE`) nasıl genişletilir?

::: {.notes}
Bu sunumda, önceki konularda kavramsal düzeyde tasarladığımız ve normalizasyon kurallarıyla arındırdığımız ilişkisel veri modellerini MySQL sunucusu üzerinde çalışan fiziksel tablolara nasıl dönüştüreceğimizi adım adım inceliyoruz. Kağıt üzerindeki bir tasarım ile canlı bir veritabanı arasındaki köprüyü Veri Tanımlama Dili (DDL) komutlarıyla kuracağız. SQL tanımlayıcılarının adlandırma kurallarından veri tiplerinin iş kurallarına göre seçimine, tablo oluşturma sırasından referans bütünlüğü kısıtlarına kadar uzanan teknik mekanizmaları kütüphane senaryomuz üzerinden somutlaştıracağız. İlk olarak, tasarımdan fiziksel veritabanına geçiş ihtiyacını ve DDL'in rolünü ele alıyoruz.
:::

---

## Tasarlanan Şemadan Fiziksel Veritabanına: Neden Doğrudan Veri Eklenemez?

### Önceki Adımlarda Ne Yaptık?
- İş kurallarını inceleyip varlıkları, nitelikleri ve ilişkileri belirledik.
- Varlık-İlişki modelini kurarak kütüphane senaryomuzu kavramsal düzeyde ayrıştırdık.
- 1NF, 2NF ve 3NF normalizasyon kurallarını işleterek veri anomalilerini giderdik.
- MySQL sunucusu ve MySQL Workbench çalışma ortamı arasındaki bağlantıyı doğruladık.

### Doğrudan Veri Eklemeye Çalışırsak Ne Olur?
- Tasarım kağıt üzerinde veya E-R diyagramında tamamlanmış olsa bile sunucuda henüz fiziksel bir karşılık yoktur.
- Sunucuya bağlanıp doğrudan `INSERT` komutu çalıştırmak sonuç vermez.
- **Mekanik Engel**: Sunucu hafızasında;
  - `uye` veya `kitap` adında hangi tabloların bulunduğu,
  - Bu tablolarda hangi sütunların yer aldığı,
  - Hangi sütuna hangi tür verilerin yazılabileceği,
  - Satırların hangi kısıt ve kurallarla denetleneceği henüz tanımlı değildir.

### Fiziksel İskelet İhtiyacı: Veri Tanımlama Dili (DDL)
- Verilerin kaydedilebilmesi için öncelikle veritabanının fiziksel iskeleti (şeması) kurulmalıdır.
- **Veri Tanımlama Dili (Data Definition Language - DDL)**:
  İlişkisel veritabanlarında tabloları, sütunları, veri tiplerini ve kısıtları tanımlamak, değiştirmek veya silmek için kullanılan komut kümesidir.
- DDL komutları verilerin kendisiyle değil; verilerin içinde yaşayacağı **yapısal düzenle** ilgilenir.

::: {.notes}
Öğrencilerin veritabanı uygulamalarına başlarken en sık yaşadığı kafa karışıklığı, bir E-R diyagramı çizdikten hemen sonra veritabanına veri kaydedebileceklerini düşünmeleridir. Oysa bir mimari çizim nasıl içinde doğrudan oturulacak bir bina değilse, kavramsal model de içine veri yazılabilecek bir depo değildir. MySQL sunucusuna gidip "Ahmet'i üye olarak ekle" dediğimizde, sunucu "üye nedir, adı nerede saklanır, hangi veri tipindedir" sorularının hiçbirinin yanıtını bilmez. İşte bu yapısal çatıyı kurma işine DDL diyoruz. DDL ile önce boş odaları ve kuralları inşa ederiz; verileri ise daha sonra bu odaların içine dolduracağız. Şimdi bu yapıları adlandırırken uymamız gereken teknik kurallara bakalım.
:::

---

## Kavramsal Modelden SQL Tanımlayıcılarına: Adlandırma Nasıl Kurulmalıdır?

### Sözel Nitelikten SQL Tanımlayıcısına (Identifier) Geçiş
- Kavramsal modelde nitelikler sözel iş kurallarından gelir: *"Üye Numarası"*, *"İletişim Bilgisi"*, *"Demirbaş Numarası"*.
- Veritabanı yönetim sistemine aktarılırken bu kavramlar birer **SQL tanımlayıcısına (identifier)** dönüşür.

### Üç Temel Adlandırma Kuralı

```
1. Karakter ve Harf Standardı:
   - Yalnızca küçük harfli ASCII (a-z), rakamlar (0-9) ve alt çizgi (_) kullanılır.
   - Türkçe karakterler (ç, ğ, ı, ö, ş, ü) ve boşluk kesinlikle kullanılmaz.

2. Görsel Ayrım:
   - SQL dilinin anahtar sözcükleri BÜYÜK HARFLE yazılır: CREATE, TABLE, INT, PRIMARY KEY.
   - Kullanıcı tanımlı nesne adları küçük harfle yazılır: uye, kitap, ad_soyad.

3. Anlamlılık:
   - Belirsiz kısaltmalar (u_no, tar1, bilgi) yerine nesneyi açıkça ifade eden adlar seçilir.
```

### Mekanik Gerekçe: İşletim Sistemi ve Dosya Sistemi Farkları
- Linux dosya sistemleri büyük/küçük harf duyarlıdır (`case-sensitive`).
- Windows dosya sistemleri büyük/küçük harf duyarsızdır (`case-insensitive`).
- MySQL, veritabanı ve tablo adlarını doğrudan disk üzerindeki dizin ve dosya adlarıyla eşleştirir (`lower_case_table_names`).
- Küçük harf ve ASCII standardı, kodların işletim sistemleri arasında taşınırken nesne erişim hatası vermesini engeller.

### Kütüphane Niteliklerinin Dönüşüm Tablosu

| Kavramsal Nitelik | SQL Tanımlayıcısı | Gerekçe |
| --- | --- | --- |
| Üye Numarası | `uye_numarasi` | Küçük harf ASCII, alt çizgi, anlamlı ad |
| Ad Soyad | `ad_soyad` | Boşluksuz, alt çizgili, Türkçe karaktersiz |
| Demirbaş Numarası | `demirbas_numarasi` | Açıklayıcı kimlik tanımlayıcısı |
| Alış Tarihi | `alis_tarihi` | ASCII standartlaştırması (`s` harfi) |
| İade Tarihi | `iade_tarihi` | Zaman olayını gösteren net tanımlayıcı |

::: {.notes}
Tanımlayıcı kuralları yalnızca estetik bir yazım tercihi değildir; arkasında doğrudan işletim sistemi çekirdeğine kadar uzanan mekanik bir zorunluluk yatar. Windows ortamında geliştirdiğiniz ve `Uye` adını verdiğiniz bir tabloyu yarın bir Linux sunucuya taşıdığınızda, `uye` sorgusu çalışmayabilir. Çünkü Linux için `Uye` ile `uye` iki tamamen farklı dosyadır. Ayrıca Türkçe karakterler farklı karakter kodlamalarında (`UTF-8`, `ISO-8859-9`) bozulabilir. Bu nedenle tanımlayıcılarda daima küçük harf ASCII ve alt çizgi standardını uyguluyoruz. SQL komutlarını büyük, kendi nesnelerimizi küçük yazarak da komut satırında kodun okunabilirliğini artırıyoruz.
:::

---

## Veri Tipi Seçimi: İş Kuralı Depolama Türünü Nasıl Belirler?

### Veri Tipi Ne İşe Yarar?
- Sunucuya o sütunda ne tür değerlerin saklanabileceğini bildirir.
- Depolama için ayrılacak bellek ve disk alanını sınırlar.
- Girilebilecek verilerin sınırlarını ve geçerlilik kurallarını belirler.

### Ezber Liste Değil, Üç Temel Soru

```
                    [ Sütunun Temsil Ettiği Bilgi ]
                                   │
         ┌─────────────────────────┼─────────────────────────┐
         ▼                         ▼                         ▼
   1. Aritmetik?             2. Uzunluk?                3. Zaman?
   Matematiksel işlem        Sabit mi, değişken mi?     Takvim ve gün farkı
   yapılacak mı?             Boyut sınırı nedir?        hesabı var mı?
```

### MySQL Temel Veri Tipleri Sınıflandırması

- **Sayısal Tipler**:
  - `INT`: Standart 4 bayt tamsayı. Sayaçlar, miktarlar ve matematiksel işleme girecek tamsayılar için kullanılır.
  - `DECIMAL(M, D)`: Kesin basamaklı sayısal değerler. `M` toplam basamak sayısı (hassasiyet), `D` virgülden sonraki basamak sayısıdır (ölçek). Kayan noktalı (`FLOAT`, `DOUBLE`) yuvarlama hatalarına izin vermez; finansal ve parasal tutarlar için zorunludur.
- **Metinsel Tipler**:
  - `VARCHAR(N)`: Değişken uzunluklu metin (`N` en fazla karakter sayısı). Bellekte yalnızca girilen karakter kadar (artı 1–2 bayt uzunluk bilgisi) yer tutar; disk tasarrufu sağlar.
  - `TEXT`: Boyutu önceden kestirilemeyen uzun açıklamalar ve gövdeler için kullanılır.
- **Tarih ve Zaman Tipleri**:
  - `DATE`: `YYYY-MM-DD` biçiminde takvim tarihi saklar. 30 Şubat gibi geçersiz tarihlerin girilmesini engeller; tarihler arası gün farkı hesaplamaya olanak tanır.

::: {.notes}
Veri tipi seçimi ezberlenen bir tablo üzerinden yapılmaz; her alanın iş kuralı sorgulanır. Bir para birimi tutuyorsanız asla `FLOAT` veya `DOUBLE` kullanamazsınız; çünkü kayan noktalı sayılar ikili sistemde yuvarlama kusurları üretir ve kuruş farklarına yol açar. Parasal alanlarda tam kesinlik veren `DECIMAL` tipi seçilir. Metinlerde ise uzunluğu kişiden kişiye değişen ad, e-posta gibi alanlarda `VARCHAR` standarttır; böylece 100 karakterlik yere 10 karakter yazıldığında diskte boşuna 90 karakterlik yer işgal edilmez. Şimdi en sık yapılan veri tipi hatasını inceleyelim.
:::

---

## Sayısal Görünen Her Değer Sayı mıdır?

### En Sık Düşülen Tasarım Tuzağı
- Yalnızca rakamlardan oluşan her veriyi sayısal (`INT`) veri tipiyle tanımlamaya çalışmak.

### Temel Karar Ölçütü
- **"Bu değer üzerinde matematiksel hesaplama (toplama, çıkarma, ortalama alma) yapılması anlamlı mıdır?"**

### Karşılaştırmalı Örnek Analizi

```
[ Alan: demirbas_numarasi ]                [ Alan: uye_numarasi ]
- Kurum kodları: '1001', '1002'            - Sistem sıra sayacı: 1, 2, 3...
- İki demirbaşı toplamak anlamsızdır.      - Birer birer artan sıra numarasıdır.
- Aritmetik ortalama alınamaz.             - Sayısal dizi takibi yapılır.
- Başındaki sıfırlar kritiktir ('0042').   - Başında sıfır barındırmaz.
- Harfli koda geçilebilir ('KTP-101').     - Sayısal kimlik üretimidir.
             │                                          │
             ▼                                          ▼
     VARCHAR(20) SEÇİLİR                            INT SEÇİLİR
```

### Sayısal Alanlara `INT` Vermenin İki Büyük Tehlikesi
1. **Baştaki Sıfırların Kaybı**:
   Telefon numarası (`05551112233`) veya kurum kodu (`0042`) `INT` yapılırsa, sunucu baştaki sıfırları otomatik olarak düşürür (`5551112233` ve `42` kalır); veri bozulur.
2. **Biçimlendirme ve Kod Esnekliğinin Yitirilmesi**:
   Kurum kodlama sistemine tire, boşluk veya harf eklediğinde (`KTP-2026-0042`) `INT` tipine bu değerler kaydedilemez.

> **Tasarım İlkesi**: Üzerinde aritmetik hesaplama yapılmayacak olan; kimlik, kod, telefon veya etiket işlevi gören nitelikler sayısal değil, metinsel (`VARCHAR`) tanımlanmalıdır.

::: {.notes}
Öğrenciler bir sütunda rakam gördükleri anda hemen `INT` yazma eğilimindedir. Oysa rakam taşımak ayrıdır, sayısal bir büyüklük olmak ayrıdır. Telefon numarasını kimseyle toplayamazsınız; iki öğrencinin TC kimlik numarasının ortalamasını alamazsınız. Bir alana `INT` dediğiniz anda veritabanı onu bir matematiksel büyüklük sayar ve baştaki sıfırları atar. Örneğin `0555` ile başlayan telefon numaranız `555` olur; `0042` nolu demirbaş kodunuz `42`'ye düşer. Yarın kütüphane barkod formatını `KTP-0042` yaptığında tüm şema kilitlenir. Bu yüzden kimlik ve kod alanları mutlaka `VARCHAR` olmalıdır.
:::

---

## Çalışma Alanını Açmak: Şema Oluşturma ve Etkin Kılma

### Şema (Veritabanı) Çatısı Neden Zorunludur?
- Tablolar sunucu boşluğunda kendi başına açılamaz; mutlaka mantıksal bir veritabanı (şema) çatısı altında yer almalıdır.

### 1. Şemayı Oluşturmak: `CREATE DATABASE`

```sql
CREATE DATABASE IF NOT EXISTS kutuphane;
```

- **`IF NOT EXISTS` Mekanizması**:
  `kutuphane` adında bir veritabanı sunucuda zaten varsa komut hata vermez ve yürütmeyi durdurmaz; nesne yoksa oluşturur, varsa mevcut yapıya dokunmadan geçer.
- Betiklerin hata vermeden tekrar tekrar çalıştırılabilmesini (idempotency) garanti eder.

### 2. Şemayı Etkin Kılmak: `USE`

```sql
USE kutuphane;
```

- Bir MySQL sunucusunda onlarca bağımsız veritabanı bulunabilir.
- `USE` komutu, bundan sonra gönderilecek komutların hangi veritabanı çatısı altında yürütüleceğini oturum düzeyinde kilitler.

### Etkin Şema Seçilmezse Ne Olur?

```text
ERROR 1046 (3D000): No database selected
```

- **Hatanın Analizi**:
  Sunucu tablo yapısında veya SQL sözdiziminde bir hata bulmamıştır; yalnızca tablonun hangi veritabanı çatısı altına yerleştirileceğini bilemediği için işlemi durdurmuştur.

::: {.notes}
Tablo oluşturmaya geçmeden önce çalışma zeminimizi hazırlamalıyız. `CREATE DATABASE IF NOT EXISTS` komutu profesyonel bir betik yazım refleksidir. Eğer bunu kullanmazsanız, betiği ikinci kez çalıştırdığınızda "veritabanı zaten var" hatası alırsınız ve betik durur. `USE` komutu ise sunucuya bağlam bildirmektir. Bir MySQL sunucusunda birden fazla proje yaşayabilir. Eğer sunucuya "ben kutuphane veritabanındayım" demezseniz, tablo oluşturma isteğinizi `ERROR 1046: No database selected` diyerek reddeder. Bu hata kodunu görmek çok yaygındır ve çözümü basitçe `USE` komutunu çalıştırmaktır.
:::

---

## Tek Tablo Yapısını Kurmak: Sütunlar ve Kısıtlar

### `CREATE TABLE` Genel Sözdizim İskeleti

```sql
CREATE TABLE tablo_adi (
    sutun_adi veri_tipi sutun_kisiti,
    ...
    tablo_kisitlari
);
```

### Kısıtlar (Constraints) Ne İşe Yarar?
- Tabloya yalnızca veri tipi tanımlamak yetmez; iş kuralını güvenceye alan kurallar da eklenir.
- Kısıtlar, geçersiz verilerin veritabanına girmesini donanım ve yazılım düzeyinde engelleyen mekanik denetim bekçileridir.

### Temel Sütun Kısıtları

- **`NOT NULL`**:
  Bir sütunun boş (tanımsız) bırakılmasını kesin olarak yasaklar. Veri girişi sırasında geçerli bir değer verilmezse sunucu ekleme işlemini reddeder.
- **`UNIQUE`**:
  Sütundaki değerlerin tüm tablo boyunca benzersiz olmasını şart koşar. İki farklı satır aynı değeri taşıyamaz.
- **`DEFAULT`**:
  Satır eklenirken değer belirtilmemişse sunucunun otomatik atayacağı varsayılan değeri belirler.
  - Örnek: `kayit_tarihi DATE DEFAULT (CURRENT_DATE)` (Parantez kullanımı zorunludur ve fonksiyonel varsayılan değer mekanizması MySQL 8.0.13+ gerektirir).
- **`AUTO_INCREMENT`**:
  MySQL'e özgü sayaç mekanizmasıdır. Yeni satır eklendiğinde değeri otomatik olarak bir önceki değerin bir fazlası olacak şekilde üretir.

::: {.notes}
Tablo yapısı oluşturulurken yazılan kısıtlar, veritabanının savunma hattıdır. Bir yazılımcı arayüzde kontrol yapmayı unutabilir, kullanıcı hatalı form gönderebilir; ancak veritabanı düzeyine yerleştirilen bir `NOT NULL` veya `UNIQUE` kısıtı, hiçbir hatalı verinin disk bloklarına yazılmasına izin vermez. `DEFAULT` kısıtı girilmeyen verileri mantıklı bir başlangıç değeriyle doldururken, `AUTO_INCREMENT` bizi her yeni satır için en son numarayı arayıp bir artırma zahmetinden kurtarır. Şimdi veri tabanı teorisinin en kritik kavramlarından biri olan `NULL` kavramını netleştirelim.
:::

---

## NULL Kavramı: Sıfır veya Boş Metinden Farkı Nedir?

### `NULL` Neyi İfade Eder?
- Sayı doğrusundaki sıfır (`0`) sayısı değildir.
- Bellekte tanımlı sıfır uzunluklu boş metin (`''`) değildir.
- **`NULL`**: Değerin **"bilinmediği"**, **"henüz girilmediği"** veya **"bu kayıt için uygulanamaz olduğu"** anlamına gelen bir tanımsızlık durumudur.

### Karşılaştırma Matrisi

| Kavram | Tür | Anlamı | Mantıksal ve Aritmetik Durum |
| --- | --- | --- | --- |
| Sıfır (`0`) | Sayısal | Kesin bir büyüklük (miktar yokluğu) | Değer tanımlıdır; matematiksel işlemlere normal biçimde girer. |
| Boş Metin (`''`) | Karakter | Bilinen, tanımlı boş karakter dizisi | Değer tanımlıdır; uzunluğu `0` olan bir metindir. |
| `NULL` | Tanımsız | Bilinmeyen / Henüz gerçekleşmemiş | Değer tanımsızdır; herhangi bir aritmetik işlemde sonuç yine `NULL` üretir. |

### İş Kuralı Yansıması
- Kütüphaneye kaydolan bir üyenin adı ve soyadı mutlaka bilinmek zorundadır.
- Bu nedenle `ad_soyad` alanı `NOT NULL` tanımlanır:

```sql
ad_soyad VARCHAR(100) NOT NULL
```

- Adı bilinmeyen bir kişi veritabanına kaydedilemez; sunucu işlemi anında reddeder.

::: {.notes}
`NULL` kavramı programlamaya yeni başlayanların en çok zorlandığı kavramdır. `NULL`, boşluk veya sıfır demek değildir. Banka hesabınızda sıfır lira olması tanımlı bir durumdur; paranızın olmadığını kesin olarak bilirsiniz. Ama hesap bakiyenizin `NULL` olması, sistemin bakiyenizi bilmediği, belki de hesap açılış işleminin henüz tamamlanmadığı anlamına gelir. Bir kitabın ödünç tablosundaki iade tarihi başlangıçta `NULL`'dır; çünkü kitap henüz iade edilmemiştir, gelecekteki iade tarihi bilinemez. Buraya sıfır veya boşluk yazamazsınız. `NOT NULL` kısıtı ise "bu alan asla bilinmez kalamaz" demektir.
:::

---

## Birincil Tablomuz: uye Tablosunun Oluşturulması

### Senaryonun İlk Bağımsız Tablosu
- Kütüphanemizin üye varlığını fiziksel tabloya dönüştüren DDL komutunu yazalım:

```sql
CREATE TABLE uye (
    uye_numarasi INT AUTO_INCREMENT,
    ad_soyad VARCHAR(100) NOT NULL,
    eposta VARCHAR(100) UNIQUE,
    kayit_tarihi DATE DEFAULT (CURRENT_DATE),
    PRIMARY KEY (uye_numarasi)
);
```

### Kod ile İş Kuralı Eşleşmesi

```
uye_numarasi INT AUTO_INCREMENT  ──> Otomatik artan tamsayı sayaç (1, 2, 3...)
ad_soyad VARCHAR(100) NOT NULL   ──> İsimsiz üye kaydedilemez (Zorunlu alan)
eposta VARCHAR(100) UNIQUE       ──> İki üyeye aynı e-posta atanamaz (Tekillik)
kayit_tarihi DATE DEFAULT (...)  ──> Değer girilmezse günün takvim tarihi basılır
PRIMARY KEY (uye_numarasi)       ──> Tablonun tekil kimlik omurgası ilan edilir
```

- `PRIMARY KEY (uye_numarasi)`:
  Tablo kısıtı olarak tanımlanmıştır; `uye_numarasi` sütununun hem tekil olduğunu hem de asla `NULL` alamayacağını sunucuya bildirir.

::: {.notes}
`uye` tablosu kütüphane sistemimizin ilk bağımsız ana tablosudur. Komuttaki her bir satır doğrudan sözel bir iş kuralını karşılar. Üye numarasını `INT AUTO_INCREMENT` yaptık; böylece sisteme her yeni üye geldiğinde numara otomatik olarak bir artar. Ad ve soyadı `NOT NULL` ile zorunlu tuttuk. E-posta alanına `UNIQUE` kısıtı koyduk; böylece bir üyenin e-postasıyla ikinci bir kişinin kaydolmasını engelledik. Kayıt tarihini boş bırakırsak `DEFAULT (CURRENT_DATE)` ifadesi devreye girer ve o anki tarihi yazar. En altta ise bu tablonun birincil anahtarının `uye_numarasi` olduğunu belirttik. Şimdi ikinci bağımsız tablomuzu kuralım.
:::

---

## İkinci Bağımsız Tablomuz: kitap Tablosunun Oluşturulması

### İkinci Varlığımız: kitap
- Modelimizdeki kitap varlığını temsil eden fiziksel tabloyu kuralım.
- Bu tabloda birincil anahtar otomatik artan bir sayaç değil; kurumun belirlediği metinsel demirbaş kodudur.

```sql
CREATE TABLE kitap (
    demirbas_numarasi VARCHAR(20) NOT NULL,
    baslik VARCHAR(200) NOT NULL,
    yazar VARCHAR(100),
    PRIMARY KEY (demirbas_numarasi)
);
```

### Kod ile İş Kuralı Eşleşmesi

- **`demirbas_numarasi VARCHAR(20) NOT NULL`**:
  Kurumun fiziki kitaplara yapıştırdığı etiket kodu (`KTP-101`). Açıkça `NOT NULL` belirtilmiştir.
- **`baslik VARCHAR(200) NOT NULL`**:
  Başlığı olmayan bir kitap kütüphaneye kaydedilemez; zorunlu alandır.
- **`yazar VARCHAR(100)`**:
  Bu sütunda bilerek `NOT NULL` kullanılmamıştır. Anonim veya derleme eserlerde yazar bilgisi bilinmeyebilir; yazar hücresinin `NULL` kalmasına izin verilir.
- **`PRIMARY KEY (demirbas_numarasi)`**:
  Sayaç mekanizması olmaksızın metinsel bir sütunun tablonun birincil anahtarı olabileceğini somutlaştırır.

::: {.notes}
`kitap` tablosu temel bir ilkeyi gösterir: Birincil anahtar mutlaka otomatik artan bir tamsayı olmak zorunda değildir. Burada kütüphane idaresinin kitaplara verdiği demirbaş numarasını (`KTP-101`, `KTP-102`) doğrudan anahtar yaptık. Bu metinsel bir koddur ama tekildir. `baslik` alanını `NOT NULL` yaparak başlıksız kitap girişini önledik. Dikkat ederseniz `yazar` alanına `NOT NULL` koymadık; çünkü bazı tarihi el yazmalarının veya derlemelerin yazarı belli olmayabilir. Yazar bilinmiyorsa o hücre `NULL` kalacaktır. Şimdi bu iki örnek üzerinden sayaç ve anahtar farkını derinleştirelim.
:::

---

## AUTO_INCREMENT ile Birincil Anahtar Aynı Şey midir?

### Yaygın Bir Kavram Yanılgısı
- `AUTO_INCREMENT` özelliğinin bir sütunu kendiliğinden birincil anahtar yaptığını varsaymak.

### İki Kavramın Kesin Mekanik Ayrımı

```
+------------------------------------+------------------------------------+
|          AUTO_INCREMENT            |            PRIMARY KEY             |
+------------------------------------+------------------------------------+
| Yalnızca bir DEĞER ÜRETİM          | Mantıksal bir KİMLİK KURALIDIR.    |
| mekanizmasıdır.                    |                                    |
| Boş bırakılan alana ardışık sayı   | Satırı diğer tüm satırlardan       |
| yazmaktan ibarettir.               | tekil olarak ayırt eder.           |
| Tek başına tekillik veya anahtar   | Kesinlikle boş (NULL) değer        |
| garantisi taşımaz.                 | kabul etmez.                       |
+------------------------------------+------------------------------------+
```

### Mekanik Kanıt
- Bir sütun `AUTO_INCREMENT` olmadan da birincil anahtar olabilir:
  `kitap` tablosundaki `demirbas_numarasi` sütununda hiçbir sayaç yoktur; değerler dış dünyadan gelir (`KTP-101`), buna rağmen tablonun geçerli birincil anahtarıdır.
- MySQL Kuralları:
  - Bir tabloda en fazla **bir adet** `AUTO_INCREMENT` sütun bulunabilir.
  - Bu sütunun mutlaka bir anahtar veya indeks kapsamında tanımlanması zorunludur.
- **Sonuç**: Otomatik sayaç birincil anahtar olmanın nedeni değil; yalnızca tamsayı kimlik üretimini kolaylaştıran bir araçtır.

::: {.notes}
Bu ayrım sınavlarda ve mülakatlarda en çok sorulan noktalardan biridir. Öğrenciler genellikle "birincil anahtar otomatik artan sayıdır" gibi eksik bir ezbere sahiptir. Oysa `AUTO_INCREMENT` bir fonksiyondur; sadece yeni satır geldiğinde sayacı bir artırıp boş alana yazar. Bir sütunu birincil anahtar yapan şey ise onun mantıksal kuralıdır: Tabloda tekil olması ve asla `NULL` almamasıdır. `kitap` tablomuzda gördüğümüz gibi sayaç olmadan da birincil anahtar pekala kurulabilir. Sayaç yalnızca işimizi kolaylaştıran bir araçtır; anahtarın kendisi değildir.
:::

---

## UNIQUE ile PRIMARY KEY Arasındaki Fark Nedir?

### İki Kısıtın Ortak Noktası
- Hem `PRIMARY KEY` hem de `UNIQUE` kısıtları verilerin tekilliğini denetler; sütunda mükerrer kayıt bulunmasını engeller.

### İki Kritik Yapısal Fark

```
1. Sayı Sınırı:
   - Bir tabloda YALNIZCA BİR ADET PRIMARY KEY tanımlanabilir.
   - Aynı tabloda BİRDEN ÇOK sütun bağımsız olarak UNIQUE kısıtı alabilir.
   (Örnek: uye tablosunda PRIMARY KEY uye_numarasi iken; eposta alanı da UNIQUE'tir.)

2. NULL Değer Kabulü:
   - PRIMARY KEY sütunları kesinlikle NULL kabul etmez (örtük NOT NULL kuralı).
   - UNIQUE sütunlar (açıkça NOT NULL yazılmadıkça) NULL değer kabul edebilir.
```

### InnoDB Depolama Motorunda `UNIQUE` ve `NULL` Davranışı
- MySQL InnoDB motorunda `UNIQUE` olarak tanımlı bir sütuna birden fazla satırda `NULL` yazılabilir.
- **Gerekçe**: İlişkisel teoride her `NULL`, "bilinmeyen" ayrı bir durum kabul edilir ve iki bilinmeyen birbirine eşit sayılamaz.

### E-R Dönüşümündeki Rolü
- Varlık-İlişki modelindeki **1:1 ilişkilerin** fiziksel şemaya dönüştürülmesinde anahtar rol oynar.
- 1:1 ilişkide yabancı anahtar alanına tekillik şartı koymak için `UNIQUE` kısıtı kullanılır.

::: {.notes}
`PRIMARY KEY` ile `UNIQUE` arasındaki farkı bilmek veritabanı tasarımı için temel bir şarttır. Bir insanın TC kimlik numarası da tekildir, cep telefonu da tekildir, e-posta adresi de tekildir. Ancak bunların hepsini birincil anahtar yapamazsınız; çünkü bir tabloda yalnızca tek bir birincil anahtar omurgası olabilir. Diğer tekil alanlar ise `UNIQUE` kısıtı ile korunur. İkinci büyük fark ise `NULL` davranışıdır. Birincil anahtar asla boş kalamaz. Fakat `UNIQUE` bir alana (örneğin e-postası henüz olmayan üyeler için) `NULL` girilebilir; hatta MySQL InnoDB motoru birden çok satırın `NULL` almasına izin verir, çünkü her `NULL` birbirinden farklı bir tanımsızlık sayılır.
:::

---

## İlişkiyi Koda Dökmek: Yabancı Anahtar ve odunc Tablosu

### N:M İlişkiden İki 1:N İlişkiye Geçiş
- E-R modelleme aşamasında üyeler ile kitaplar arasındaki N:M ödünç ilişkisini iki adet 1:N ilişkiye ayırmıştık.
- Araya `odunc` adında bir bağlantı tablosu yerleştirdik.

### `odunc` Bağlantı Tablosunun DDL Komutu

```sql
CREATE TABLE odunc (
    odunc_id INT AUTO_INCREMENT,
    uye_numarasi INT NOT NULL,
    demirbas_numarasi VARCHAR(20) NOT NULL,
    alis_tarihi DATE NOT NULL,
    iade_tarihi DATE,
    PRIMARY KEY (odunc_id),
    CONSTRAINT fk_odunc_uye FOREIGN KEY (uye_numarasi) REFERENCES uye (uye_numarasi),
    CONSTRAINT fk_odunc_kitap FOREIGN KEY (demirbas_numarasi) REFERENCES kitap (demirbas_numarasi)
);
```

### Tablodaki Kritik Kararların Analizi
- **`odunc_id`**: Her ödünç hareketini tekil olarak ayırt eden bağımsız yapay birincil anahtardır.
- **`alis_tarihi DATE NOT NULL`**: Ödünç alma anında kitabın teslim tarihi zorunludur.
- **`iade_tarihi DATE`**: Bilerek `NOT NULL` yapılmamıştır. Kitap alındığı anda henüz iade edilmemiştir; teslim tarihi bilinmez. Kitap teslim edilene kadar hücrede `NULL` değeri duracaktır.
- **`CONSTRAINT ... FOREIGN KEY ... REFERENCES`**:
  Referans bütünlüğünü fiziksel kurala bağlar; girilen anahtarın ana tabloda var olmasını şart koşar.

::: {.notes}
Kavramsal tasarımda modellediğimiz çoka çok ilişkiyi şimdi fiziksel kodla inşa ediyoruz. `odunc` tablosu hem `uye` hem de `kitap` tablosunu birbirine bağlayan köprüdür. Bu köprüyü kuran sözdizimi `FOREIGN KEY ... REFERENCES` ifadesidir. Burada ayırt edici bir tasarım tercihi vardır: `alis_tarihi` sütununa `NOT NULL` dedik, çünkü kitap verilirken tarih bellidir. Ancak `iade_tarihi` sütununa kısıt koymadık; çünkü kitap teslim edilene kadar iade tarihi gerçekleşmemiştir ve hücre `NULL` kalmalıdır. Öğrenci kitabı getirip masaya koyduğunda bu `NULL` alan güncellenecektir. Bu, `NULL`'ın "henüz gerçekleşmemiş işlem" işlevini somut biçimde sergiler.
:::

---

## Fiziksel Şema ve Yabancı Anahtar Köprüleri

<!-- Görsel İhtiyacı 1: Üç tablonun (uye, kitap, odunc) CREATE TABLE çıktısının yan yana şema görünümü. uye ve kitap tabloları üstte veya yanlarda bağımsız bloklar olarak durur; sutun adları, MySQL veri tipleri ve kısıtları listelenir. uye_numarasi ve demirbas_numarasi sütunları PRIMARY KEY olarak kalın ve anahtar simgesiyle işaretlenir. Altta yer alan odunc tablosunun uye_numarasi ve demirbas_numarasi sütunlarından çıkan yönlü referans okları, sırasıyla uye tablosunun uye_numarasi ve kitap tablosunun demirbas_numarasi sütunlarına işaret eder. Amaç: E-R aşamasındaki kavramsal bağlantı tablosunun fiziksel DDL karşılığını ve sütun düzeyindeki yabancı anahtar köprülerini görselleştirmek. -->

```
+------------------------------------+       +------------------------------------+
|                uye                 |       |               kitap                |
+------------------------------------+       +------------------------------------+
| PK  uye_numarasi : INT (AI)        |       | PK  demirbas_numarasi: VARCHAR(20) |
|     ad_soyad     : VARCHAR(100) NN |       |     baslik           : VARCHAR(200)|
|     eposta       : VARCHAR(100) UQ |       |     yazar            : VARCHAR(100)|
|     kayit_tarihi : DATE (DF:CURDATE)|      +------------------------------------+
+------------------------------------+                         ▲
                  ▲                                            │
                  │ [REFERENCES]                               │ [REFERENCES]
                  │                                            │
+-----------------┴────────────────────────────────────────────┴------------------+
|                                      odunc                                      |
+---------------------------------------------------------------------------------+
| PK  odunc_id          : INT (AUTO_INCREMENT)                                    |
| FK  uye_numarasi      : INT NOT NULL ────────────────────────┘                  |
| FK  demirbas_numarasi : VARCHAR(20) NOT NULL ───────────────────────────────────┘
|     alis_tarihi       : DATE NOT NULL                                           |
|     iade_tarihi       : DATE (NULL kabul eder)                                  |
+---------------------------------------------------------------------------------+
```

### Veri Tipi Uyumu Zorunluluğu
- `odunc.uye_numarasi` (`INT`) ile `uye.uye_numarasi` (`INT`) veri tipi tam eşleşmelidir.
- `odunc.demirbas_numarasi` (`VARCHAR(20)`) ile `kitap.demirbas_numarasi` (`VARCHAR(20)`) birebir aynı tip ve uzunlukta olmalıdır.
- Tip veya boyut uyuşmazlığı durumunda MySQL InnoDB kısıt motoru hata üretir (`ERROR 3780 / 1215`).

::: {.notes}
Bu slayt, üç tablonun veritabanı motoru içindeki fiziksel yerleşimini ve yabancı anahtar köprülerini bir arada gösteriyor. `uye` ve `kitap` tabloları üstte bağımsız ana (parent) tablolar olarak duruyor. Alttaki `odunc` tablosu ise iki yabancı anahtarla bu tablolara kilitlenmiş durumdadır. Burada teknik bir ayrıntıya dikkat edelim: Yabancı anahtar sütunu ile referans verilen birincil anahtar sütununun veri tipleri ve boyutları birebir örtüşmelidir. Eğer `uye_numarasi` ana tabloda `INT` iken bağlantı tablosunda `BIGINT` veya `SMALLINT` yaparsanız, MySQL kısıtı reddeder ve ilişkiyi kurmaz. Şimdi bu bağımlılığın getirdiği oluşturma sırası kuralına bakalım.
:::

---

## Tablolar Hangi Sırayla Oluşturulmalıdır?

### Komutlar Rastgele Sırada Çalıştırılabilir mi?
- DDL betikleri hazırlanırken komutların yazılış sırası rastgele belirlenemez.
- `FOREIGN KEY` kısıtı, hedef tablonun ve hedef sütunun veritabanında **zaten var olmasını** şart koşar.

### Hatalı Sıra Denemesi: `odunc` Tablosunu İlk Sırada Çalıştırmak

```text
ERROR 1824 (HY000): Failed to open the referenced table 'uye'
```

- **Hatanın Mekanik Sebebi**:
  MySQL sunucusu `REFERENCES uye (uye_numarasi)` satırına geldiğinde katalogda `uye` adında bir tablo arar. Tabloyu bulamadığı anda işlemi derhal durdurur.

<!-- Görsel İhtiyacı 2: Sıra hatası, hata iletisi ve doğru sıra akışını gösteren iki adımlı karşılaştırma şeması. Solda 'Hatalı Sıra': odunc tablosunun uye tablosundan önce çalıştırılma denemesi ve altında beliren 'ERROR 1824: Failed to open the referenced table' hata kutusu gösterilir. Sağda 'Doğru Sıra': Önce bağımsız ana tabloların (uye, kitap), ardından bağımlı tablonun (odunc) çalıştırıldığı ve her iki adımda yeşil onay simgesiyle tablonun başarıyla kurulduğu akış gösterilir. Amaç: Tablo oluşturma sırası ile referans bütünlüğü arasındaki nedensel bağı ve karşılaşılan somut hata iletisini görselleştirmek. -->

```
HATALI SIRA:                                 DOĞRU SIRA:
┌───────────────────────────────┐            ┌────────────────────────────────────────┐
│ 1. Adım: odunc oluşturulur    │            │ 1. Adım: uye ve kitap tabloları        │
│    (REFERENCES uye)           │            │    oluşturulur (Bağımsız ana tablolar) │
│               │               │            │    [BAŞARILI: Tablolar katalogda]      │
│               ▼               │            └───────────────────┬────────────────────┘
│ [ ERROR 1824: Failed to open  │                                │
│   the referenced table 'uye' ]│                                ▼
└───────────────────────────────┘            ┌────────────────────────────────────────┐
                                             │ 2. Adım: odunc tablosu oluşturulur     │
                                             │    (Bağımlı çocuk tablo)               │
                                             │    [BAŞARILI: Referanslar bağlandı]    │
                                             └────────────────────────────────────────┘
```

> **Kesin İnşa Kuralı**: Referans verilen (ana / parent) tablolar, referans veren (bağımlı / child) tablolardan önce oluşturulmalıdır.

::: {.notes}
Veritabanı yöneticiliğinde en sık yapılan sıra hatası budur. Henüz annesi babası doğmamış bir çocuğu sisteme kaydedemezsiniz. `odunc` tablosu `uye` tablosuna işaret eden bir yabancı anahtar taşır. Eğer siz önce `odunc` tablosunu çalıştırmaya kalkarsanız, MySQL "ben `uye` diye bir tablo tanımıyorum" der ve `ERROR 1824` kodunu fırlatır. Sunucu var olmayan bir nesneye referans verilmesine kesinlikle izin vermez. Bu nedenle DDL betiklerinde her zaman önce bağımsız ana tablolar (`uye`, `kitap`), ardından bu tabloları referans alan bağımlı tablolar (`odunc`) oluşturulur.
:::

---

## Doğrulayalım: Tablo Sütun Yapısını İnceleme (DESCRIBE)

### Şema Yapısını Doğrulama: `DESCRIBE`
- DDL komutları çalıştırıldıktan sonra tabloların hedeflenen sütun ve kısıt düzeninde kurulup kurulmadığı bağımsız olarak incelenir:

```sql
DESCRIBE uye;
```

### Sunucunun Döndürdüğü Katalog Çıktısı

| Field | Type | Null | Key | Default | Extra |
| --- | --- | --- | --- | --- | --- |
| `uye_numarasi` | int | NO | PRI | NULL | auto_increment |
| `ad_soyad` | varchar(100) | NO | | NULL | |
| `eposta` | varchar(100) | YES | UNI | NULL | |
| `kayit_tarihi` | date | YES | | curdate() | DEFAULT_GENERATED |

### Çıktının Sütun Sütun Analizi
- **`Null`**:
  `uye_numarasi` ve `ad_soyad` alanlarında `NO` yazar; bu alanların boş bırakılamayacağı (`NOT NULL`) doğrulanır.
- **`Key`**:
  `uye_numarasi` sütununda `PRI` (`PRIMARY KEY`), `eposta` sütununda `UNI` (`UNIQUE`) işareti yer alır; tekillik kurallarının kataloğa işlendiği görülür.
- **`Extra`**:
  `uye_numarasi` alanında `auto_increment` ibaresi yer alır; sayacın devrede olduğu doğrulanır.
- **`Default` & `Extra`**:
  `kayit_tarihi` alanında `curdate()` ve `DEFAULT_GENERATED` ibareleri yer alır; MySQL 8.0.13+ fonksiyonel varsayılan değer mekanizmasının başarıyla çalıştığı kanıtlanır.

::: {.notes}
Tabloyu oluşturduktan sonra "komut başarıyla tamamlandı" iletisine güvenip bırakmayız; doğrulama refleksini işletiriz. `DESCRIBE` komutu tablonun röntgenini çeker. Çıktıdaki her sütun bize bir kanıt sunar: `Null` sütununda `NO` görüyorsak `NOT NULL` çalışıyor demektir. `Key` sütununda `PRI` görüyorsak birincil anahtar, `UNI` görüyorsak tekil anahtar tanımlanmıştır. `Extra` sütunundaki `auto_increment` sayacın devrede olduğunu belgeler. `kayit_tarihi`nde ise `DEFAULT_GENERATED` ifadesi, o anki tarihin otomatik atanacağını doğrular. Şimdi aynı doğrulamayı bağlantı tablomuz için yapalım.
:::

---

## Doğrulayalım: Yabancı Anahtarlar ve Tam Tanım (SHOW CREATE TABLE)

### Bağlantı Tablosunu İnceleme: `DESCRIBE odunc`

```sql
DESCRIBE odunc;
```

| Field | Type | Null | Key | Default | Extra |
| --- | --- | --- | --- | --- | --- |
| `odunc_id` | int | NO | PRI | NULL | auto_increment |
| `uye_numarasi` | int | NO | MUL | NULL | |
| `demirbas_numarasi` | varchar(20) | NO | MUL | NULL | |
| `alis_tarihi` | date | NO | | NULL | |
| `iade_tarihi` | date | YES | | NULL | |

### Çıktıdaki Kritik İşaretler
- **`Key = MUL`**:
  `uye_numarasi` ve `demirbas_numarasi` alanlarında `MUL` (`multiple`) işareti belirir. Bu sütunların başka tablolara bağlanan **yabancı anahtarlar** olduğunu veya tekil olmayan indeksler taşıdığını gösterir.
- **`Null = YES`**:
  `iade_tarihi` sütununda boş bırakılmaya (kitap teslim edilene kadar `NULL` kalmasına) izin verildiği doğrulanır.

### Tam Tanımı Doğrulama: `SHOW CREATE TABLE`

```sql
SHOW CREATE TABLE odunc;
```

- Tablonun sunucu hafızasında saklanan eksiksiz DDL ifadesini döndürür.
- Kısıt adlarının (`CONSTRAINT fk_odunc_uye`), InnoDB motorunun (`ENGINE=InnoDB`) ve karakter setinin eksiksiz tanımlandığını belgeler.

::: {.notes}
`odunc` tablosunun `DESCRIBE` çıktısında çok ilginç bir işaretle karşılaşırız: `Key` sütununda `MUL` yazar. `MUL`, "multiple" yani çoklu demektir. Bu sütunların yabancı anahtar olduğunu ve aynı üyenin ya da aynı kitabın bu tabloda birden çok satırda yer alabileceğini (ilişkinin "çok" tarafı olduğunu) belgeler. `iade_tarihi`nde `Null = YES` görerek teslim edilmemiş kitaplar için boş bırakma iznini teyit ederiz. Eğer tablonun tüm kısıt isimleriyle birlikte tam SQL sözdizimini görmek istersek `SHOW CREATE TABLE` komutunu çalıştırırız; bu bize InnoDB motorunun arka planda sakladığı orijinal ifadeyi verir.
:::

---

## Doğrulayalım: Kısıtın Çalıştığını Kasıtlı Hata ile Test Etmek

### Kısıtlar Süs mü, Yoksa Aktif Bekçi mi?
- Tanımladığımız `FOREIGN KEY` kısıtının gerçekten çalışıp çalışmadığını test etmek için kasıtlı olarak kural dışı bir kayıt ekleme denemesi yapalım.

### Kasıtlı Hata Senaryosu
- Veritabanında henüz hiçbir üye kaydı bulunmamaktadır (`uye` tablosu tamamen boştur).
- `odunc` tablosuna sistemde var olmayan `999` numaralı üye için ödünç kaydı eklemeyi deneyelim:

```sql
INSERT INTO odunc (uye_numarasi, demirbas_numarasi, alis_tarihi)
VALUES (999, 'KTP-101', '2026-10-01');
```

### Sunucunun Döndürdüğü Hata İletisi

```text
ERROR 1452 (23000): Cannot add or update a child row: a foreign key constraint fails
(`kutuphane`.`odunc`, CONSTRAINT `fk_odunc_uye` FOREIGN KEY (`uye_numarasi`) REFERENCES `uye` (`uye_numarasi`))
```

### Hata İletisinin 4 Aşamalı Anatomisi

```
1. Cannot add or update a child row  ──> Bağımlı (çocuk) tabloya satır eklenemez / güncellenemez.
2. a foreign key constraint fails    ──> Yabancı anahtar kısıtı ihlal edilmiştir.
3. CONSTRAINT fk_odunc_uye           ──> İhlal edilen kısıtın açık adıdır.
4. REFERENCES uye (uye_numarasi)     ──> uye tablosunda 999 numaralı bir anahtar bulunamamıştır.
```

> **Kanıtlanan Mekanizma**: Kısıtlar kağıt üzerinde kalan birer etiket değildir; her `INSERT` ve `UPDATE` işleminde sunucu tarafından aralıksız denetlenen aktif güvenlik bariyerleridir.

::: {.notes}
Öğretimde en etkili doğrulama, sistemi kasıtlı olarak sınır koşullarında zorlamaktır. Kısıt yazdık ama gerçekten çalışıyor mu? `uye` tablomuz bomboşken gidip `odunc` tablosuna `999` numaralı üye için kitap vermeye kalkıyoruz. MySQL sunucusu bu komutu görür görmez durdurur ve `ERROR 1452` hatası verir. Hatanın metnini okumak bile bir eğitimdir: "Child row ekleyemezsin, çünkü `fk_odunc_uye` kısıtı başarısız oldu; `uye` tablosunda `999` numaralı referans bulunamadı." Bu hata, ilişkisel modelin temel vaadi olan referans bütünlüğünün disk düzeyinde tavizsiz korunduğunun kesin kanıtıdır.
:::

---

## Değişen Gereksinimler: ALTER TABLE ile Tabloyu Genişletme

### Değişen Kurumsal İhtiyaç
- Veritabanı kurulup canlı kullanıma açıldıktan sonra kütüphane yönetiminden yeni bir talep geldi:
- Görevliler ödünç alma işlemine özel durum notu eklemek istemektedir (*"Kitabın 12. sayfasında çizikler var"* gibi).

### Yanlış Refleks vs Doğru Mekanizma

```
YANLIŞ VE YIKICI YOL:                              DOĞRU VE KORUYUCU YOL:
┌───────────────────────────────────────┐          ┌──────────────────────────────────────┐
│ DROP TABLE odunc;                     │          │ ALTER TABLE odunc                    │
│ -- Sütunu ekleyip baştan oluştur        │          │ ADD notlar VARCHAR(255);             │
│                                       │          │                                      │
│ SONUÇ: O güne kadar kaydedilmiş tüm   │          │ SONUÇ: Mevcut hiçbir ödünç verisi    │
│ ödünç geçmişi kalıcı olarak yok olur    │          │ silinmez; yeni sütun tabloya eklenir │
└───────────────────────────────────────┘          └──────────────────────────────────────┘
```

### Şemayı Genişletmek: `ALTER TABLE` Komutu

```sql
ALTER TABLE odunc ADD notlar VARCHAR(255);
```

### `DESCRIBE odunc` ile Değişikliği Doğrulama

| Field | Type | Null | Key | Default | Extra |
| --- | --- | --- | --- | --- | --- |
| `odunc_id` | int | NO | PRI | NULL | auto_increment |
| `uye_numarasi` | int | NO | MUL | NULL | |
| `demirbas_numarasi` | varchar(20) | NO | MUL | NULL | |
| `alis_tarihi` | date | NO | | NULL | |
| `iade_tarihi` | date | YES | | NULL | |
| `notlar` | varchar(255) | YES | | NULL | |

- `Null = YES`: Zorunluluk belirtilmediği için var olan eski kayıtlar bozulmaz; önceden eklenmiş satırlarda bu alan güvenle `NULL` kalır.

::: {.notes}
Canlı bir sistemde çalışan veritabanları zamanla yeni iş kurallarıyla karşılaşır. Yeni bir alan gerektiğinde acemi bir geliştiricinin aklına gelen ilk refleks tabloyu silip (`DROP TABLE`) yeni sütunla baştan oluşturmaktır. Ancak canlı sistemde bunu yaptığınız anda kurumun tüm geçmiş verisini çöpe atmış olursunuz. Veritabanı motorları var olan tablolara ve verilere dokunmadan şemayı değiştirmek için `ALTER TABLE` komutunu sağlar. `ADD notlar VARCHAR(255)` dediğimizde sütun mevcut tablonun sonuna eklenir. `Null = YES` olduğu için geçmişte kaydedilmiş yüzlerce ödünç satırı bozulmaz, o satırlarda not alanı `NULL` olarak kalır.
:::

---

## Kaynak Notu: Standartlar ve Tasarım Çıkarımları

### MySQL 8.0 Referans Standartları
- Bu sunumdaki DDL komutları, temel veri tipleri ve InnoDB kısıt motoru davranışları güncel MySQL 8.0 standartlarına dayanır.
- `DATE DEFAULT (CURRENT_DATE)` fonksiyonel varsayılan değer mekanizması, parantezli sözdizimi ile **MySQL 8.0.13 ve üzeri sürümleri** gerektirir.
- Eski Access / Jet SQL diyalektine özgü tipler (`NUMBER`, `MEMO`), tarih sınırlayıcıları (`#tarih#`) ve büyük harfli tanımlayıcılar dersimizin MySQL standardı ve Türkçe tanımlayıcı politikası gereği bilinçli olarak dışarıda bırakılmıştır.

### Kaynaktan Devralınan İki Kalıcı Tasarım Mantığı

```
1. Birincil Anahtar Tasarım Kararıdır:
   - Birincil anahtarın adı ve tipi mutlak bir kural değil; kurumun gereksinimlerine göre
     şekillenen bir mühendislik kararıdır.
   - Sayısal sayaç (uye_numarasi INT) ile metinsel doğal kod (demirbas_numarasi VARCHAR)
     ihtiyaca göre seçilir.

2. Şemalar Artımlı Genişletilir:
   - Değişen kurumsal ihtiyaçlar çalışan sisteme yıkıcı silmelerle değil;
     veriyi koruyan artımlı şema dönüşümleriyle (ALTER TABLE) yansıtılır.
```

::: {.notes}
Kaynak notu, dersin standartlarını ve dayanaklarını şeffaf biçimde belgeler. DDL sözdizimimiz tamamen MySQL 8.0 standartlarına oturmaktadır. Özellikle fonksiyonel varsayılan değer olan `DEFAULT (CURRENT_DATE)` ifadesinin MySQL 8.0.13 öncesi sürümlerde parantezsiz çalışmayacağını bilmek önemlidir. Eski Access kitaplarında gördüğünüz `MEMO` veya `NUMBER` gibi tipler ilişkisel MySQL dünyasında yer almaz; bunların yerine `TEXT` ve `INT`/`DECIMAL` kullanılır. Kaynaklardan aldığımız iki temel felsefe ise şudur: Birincil anahtar tipi kurumsal ihtiyaca göre seçilir ve şema değişiklikleri daima veriyi koruyan `ALTER TABLE` ile yapılır.
:::

---

## Sık Yapılan Hatalar: DDL ve Tablo Tasarımı Yanılgıları (1/2)

### 1. `AUTO_INCREMENT` Mekanizmasını Birincil Anahtar ile Özdeşleştirmek
- **Kavram Yanılgısı**: Birincil anahtarın mutlaka otomatik artan bir sayaç olmak zorunda olduğunu düşünmek.
- **Teknik Mekanizma**: `AUTO_INCREMENT` yalnızca satır eklendikçe sıralı tamsayı üreten bir sayaçtır. Birincil anahtar ise tekillik ve `NOT NULL` mantıksal kuralıdır. Otomatik sayacı olmayan metinsel kodlar (`demirbas_numarasi VARCHAR(20)`) da güvenilir birincil anahtarlardır.

### 2. Sayısal Karakterler İçeren Her Alana `INT` Atamak
- **Kavram Yanılgısı**: Rakamlardan oluşan her veriyi matematiksel bir büyüklük zannetmek.
- **Teknik Mekanizma**: Üzerinde toplama, çıkarma veya ortalama alma gibi aritmetik işlemler yapılmayacak olan telefon, TC kimlik veya demirbaş kodları `VARCHAR` tanımlanmalıdır. `INT` verilmesi baştaki sıfırları (`0042` -> `42`) siler ve harfli kodlara (`KTP-101`) geçişi engeller.

### 3. `NULL` Değerini Sıfır veya Boş Metin ile Aynı Görmek
- **Kavram Yanılgısı**: `NULL`'ı sayısal sıfır (`0`) ya da boşluk (`''`) saymak.
- **Teknik Mekanizma**: Sıfır sayı doğrusunda kesin bir değerdir; boş metin bilinen bir dizgidir. `NULL` ise değerin henüz girilmediği veya bilinmediği tanımsızlık durumudur. İade edilmemiş bir kitabın `iade_tarihi` alanında `NULL` bulunması "tarih henüz yok / kitap teslim edilmedi" demektir.

::: {.notes}
Bu slaytta DDL konularında öğrencilerin en çok aldandığı ilk üç hatayı özetliyoruz. İlki, sayacı anahtar sanmaktır. Sayaç sadece numara basar; anahtarı anahtar yapan şey satırı tekil kılmasıdır. İkincisi, rakam gördüğü her yere `INT` yapıştırmaktır. Telefon numarasına `INT` verirseniz baştaki sıfır uçar gider. Üçüncüsü ise `NULL`'ı sıfır sanmaktır. Bir öğrencinin sınav notunun 0 olması ile sınav notunun `NULL` olması tamamen farklıdır; sıfır sınava girip başarısız olduğunu gösterir, `NULL` ise sınava henüz girmediğini veya notun henüz okunmadığını gösterir. Şimdi diğer üç yaygın hataya bakalım.
:::

---

## Sık Yapılan Hatalar: DDL ve Tablo Tasarımı Yanılgıları (2/2)

### 4. `UNIQUE` Kısıtının Birincil Anahtar Yerine Geçeceğini Varsaymak
- **Kavram Yanılgısı**: Bir sütun tekil (`UNIQUE`) tanımlandığında ayrıca birincil anahtar belirlemeye gerek olmadığını düşünmek.
- **Teknik Mekanizma**: Bir tabloda yalnızca tek bir `PRIMARY KEY` olabilir ve kesinlikle `NULL` kabul etmez. Buna karşılık tabloda birden çok `UNIQUE` sütun yer alabilir ve `UNIQUE` alanlar `NULL` kabul edebilir. Bu ayrım tablonun asıl kimlik omurgasını korur.

### 5. Bağımlı Tabloyu Referans Verdiği Tablodan Önce Oluşturmaya Çalışmak
- **Kavram Yanılgısı**: Tablo oluşturma komutlarının rastgele sırayla çalıştırılabileceğini varsaymak.
- **Teknik Mekanizma**: `FOREIGN KEY` kısıtı, hedef tablonun ve sütunun katalogda önceden tanımlı olmasını şart koşar. Henüz `uye` tablosu yokken `odunc` tablosu çalıştırılırsa sunucu nesneyi bulamaz ve `ERROR 1824` üretir. Tablolar daima ana tablolardan bağımlı tablolara doğru kurulmalıdır.

### 6. Tablo Yapısını Değiştirmek İçin Tabloyu Silip Baştan Oluşturmak
- **Kavram Yanılgısı**: Yeni bir sütun eklemek için `DROP TABLE` yoluna gitmek.
- **Teknik Mekanizma**: Canlı bir veritabanında `DROP TABLE` komutu, o güne kadar kaydedilmiş tüm verileri geri dönüşsüz biçimde yok eder. Şema genişletmeleri daima veriyi koruyan `ALTER TABLE` komutlarıyla yürütülmelidir.

::: {.notes}
Dördüncü hata, `UNIQUE` ile `PRIMARY KEY`'i birbiri yerine ikame etmeye çalışmaktır. Birincil anahtar tablonun yegane kimliğidir; diğer tekil alanlar ise ek denetimlerdir. Beşinci hata, tablo çalıştırma sırasını gözetmemektir. Yabancı anahtar hedef tablonun varlığını zorunlu kılar; önce ana tabloları, sonra bağımlı tabloları oluşturmalıyız. Son hata ise en tehlikelisidir: Sütun eklemek için tabloyu silmek. Çalışan hiçbir sistemde `DROP TABLE` ile sütun eklenmez; daima veriyi koruyan `ALTER TABLE` komutu kullanılır. Bu altı kuralı zihnimizde tuttuğumuzda, sağlam ve hatasız bir fiziksel şema inşa etmiş oluruz.
:::
