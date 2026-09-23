---
title: "Normalizasyon (1NF, 2NF, 3NF)"
subtitle: "BLP 1005 — Veritabanı Yönetim Sistemleri"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-09-29
description: Veri anomalileri, fonksiyonel bağımlılıklar ve 1NF, 2NF, 3NF ile ilişkisel şema normalizasyonu.
tags:
  - blp1005
  - veritabani
  - hafta-3
---

## Ele Alınacak Temel Sorular
- Neden ilişkili bütün verileri tek bir büyük tabloda toplamamalıyız?
- Güncelleme, ekleme ve silme anomalileri veritabanını nasıl tutarsızlığa sürükler?
- Fonksiyonel bağımlılık ($X \rightarrow Y$) nedir ve neden anlık verilere değil iş kurallarına dayanır?
- Aday anahtar ve bileşik anahtar nasıl belirlenir?
- Tabloya otomatik artan yapay bir numara eklemek tasarım arızalarını çözer mi?
- Birinci Normal Form (1NF) çoklu değerleri ve tekrarlayan grupları nasıl giderir?
- İkinci Normal Form (2NF) kısmi bağımlılığı hangi mekanizmayla ortadan kaldırır?
- Üçüncü Normal Form (3NF) geçişli bağımlılığı ($A \rightarrow B \rightarrow C$) nasıl ayrıştırır?
- Tabloları parçalamak bilgi kaybına yol açar mı; kayıpsız ayrıştırma nasıl doğrulanır?
- Normalizasyon sürecinde en sık tekrarlanan kavramsal yanılgılar nelerdir?

::: {.notes}
Bu sunumda ilişkisel veritabanı tasarımının en kritik aşamalarından biri olan normalizasyon sürecini inceliyoruz. Önceki konularda tek bir tablonun satır ve sütun yapısını, satırları tekil kılan birincil anahtarları ve tabloları birbirine bağlayan yabancı anahtarları gördük. Ancak yeni bir veritabanı tasarlarken ilk akla gelen refleks, ilişkili görünen tüm sütunları tek bir büyük tabloda birleştirmektir. Bu refleks başlangıçta kolay görünse de sistem işlemeye başladığında ciddi yapısal arızalara, yani anomalilere yol açar. Bu sunum boyunca tek tablonun neden tıkandığını somut bir mesleki eğitim senaryosu üzerinden görecek; fonksiyonel bağımlılıkları adım adım çıkararak verilerimizi 1NF, 2NF ve 3NF basamaklarıyla temiz ve tutarlı bir ilişkisel mimariye dönüştüreceğiz.
:::

---

## Tek Tabloda Toplama Yaklaşımı ve Mesleki Eğitim Senaryosu

### Somut Senaryo: Ders Kayıt ve Başarı Defteri
Bir meslek yüksekokulu programında öğrencilerin kayıtlı oldukları dersleri, dersi yürüten öğretim üyelerini ve dönem sonu notlarını tutmak istiyoruz.

### Kurumun İş Kuralları
- Her öğrencinin bir numarası ve adı vardır.
- Her dersin bir kodu ve adı vardır.
- Her ders tek bir öğretim üyesi tarafından yürütülür; her öğretim üyesinin bir sicil numarası, adı ve bağlı olduğu bölüm vardır.
- Bir öğrenci birden fazla ders alabilir; bir dersi birden fazla öğrenci seçebilir.
- Bir öğrencinin bir dersten aldığı başarı notu, o öğrenciye ve o derse özgüdür.

### İlk Akla Gelen Çözüm: Tek Parçalı Kayıt Defteri
```
kayit_defteri(ogrenci_numarasi, ogrenci_adi, alinan_dersler, not_listesi)
```

::: {.notes}
Tasarım sürecine daima kurumun iş kurallarını dinleyerek başlarız. Buradaki kurallar oldukça tanıdıktır: öğrenciler var, dersler var, dersleri yürüten öğretim üyeleri var ve dönem sonunda oluşan notlar var. Bu bilgileri kaydetmek isteyen bir yazılımcının ilk aklına gelen pratik düşünce şudur: "Neden tabloları bölüp karmaşık foreign key bağlarıyla uğraşalım? Her şeyi tek bir kayıt defterine alt alta yazalım, aradığımızda da her bilgi elimin altında olsun." Bu düşünce sezgisel olarak çekici görünse de ilk veri girişinde hemen duvara toslar. Şimdi tablonun ilk verilerine ve karşılaştığımız ilk yapısal probleme bakalım.
:::

---

## Hücrede Çoklu Değer Çıkmazı: Atomik Olmayan Veri

### `kayit_defteri` Tablosunun Veri Durumu

| ogrenci_numarasi | ogrenci_adi | alinan_dersler | not_listesi |
| --- | --- | --- | --- |
| 101 | Ahmet Yılmaz | BLP1005, MAT1002 | 85, 70 |
| 102 | Ayşe Kaya | BLP1005 | 90 |
| 103 | Mehmet Demir | MAT1002 | 65 |

### Karşılaşılan İlk Tıkanma: Atomiklik İhlali
- `alinan_dersler` ve `not_listesi` hücrelerinde virgülle ayrılmış birden fazla değer yer almaktadır.
- **Sorgulama Güçlüğü**: "Yalnızca MAT1002 dersini alan öğrencileri listele" sorgusu standart bir sütun eşitliği (`WHERE ders = 'MAT1002'`) ile çalışamaz; metin arama ve parçalama gerektirir.
- **Güncelleme Riski**: Ahmet'in MAT1002 notunu 75 yapmak istediğimizde hücre içindeki metin dizisini programlama katmanında ayıklamak gerekir.

::: {.notes}
Tabloya verileri girdiğimiz anda ilk kriz hücrelerin içinde patlak verir. 101 numaralı Ahmet iki ders aldığı için ders kodlarını ve notlarını aynı hücreye virgülle yazmak zorunda kaldık. İlişkisel veritabanı yönetim sistemleri hücreleri tekil değerler olarak işler. Hücrenin içine bir liste veya dizi gömdüğünüzde, veritabanının indeksleme gücü ve sorgu motoru devre dışı kalır. "MAT1002 alanları getir" demek için metin taraması yapmak gerekir ki bu işlem veri büyüdükçe sistemi kilitler. Doğal çözüm, hücreleri atomik hale getirmek, yani her hücrede tek bir değer tutacak şekilde satırları çoğaltmaktır.
:::

---

## Hücreleri Atomik Yapmak Çözüm mü? Düz Tablo ve Veri Tekrarı

### Satırlara Dağıtılmış Düz Tablo Şeması
```
kayit(ogrenci_numarasi, ogrenci_adi, ders_kodu, ders_adi,
      ogretim_uyesi_no, ogretim_uyesi_adi, ogretim_uyesi_bolumu, basari_notu)
```

### Tablonun Veri Durumu

| ogrenci_numarasi | ogrenci_adi | ders_kodu | ders_adi | ogretim_uyesi_no | ogretim_uyesi_adi | ogretim_uyesi_bolumu | basari_notu |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 101 | Ahmet Yılmaz | BLP1005 | Veritabanı Sistemleri | 501 | Dr. Can Aksoy | Bilgisayar Programcılığı | 85 |
| 101 | Ahmet Yılmaz | MAT1002 | Matematik II | 502 | Doç. Elif Demir | Temel Bilimler | 70 |
| 102 | Ayşe Kaya | BLP1005 | Veritabanı Sistemleri | 501 | Dr. Can Aksoy | Bilgisayar Programcılığı | 90 |
| 103 | Mehmet Demir | MAT1002 | Matematik II | 502 | Doç. Elif Demir | Temel Bilimler | 65 |

> **Durum**: Artık her hücre atomiktir (tekildir). Ancak tabloyu tek bir yapıda tutma ısrarı, bu kez devasa bir veri tekrarı ve yönetim arızaları üretmiştir.

::: {.notes}
Hücrelerdeki virgüllü listeleri parçaladık ve her öğrenci-ders ikilisini bağımsız bir satır haline getirdik. Artık her hücrede tek bir değer var; yani teknik olarak atomiklik sağlandı. Fakat dikkatle baktığımızda tablonun yeni bir batağa saplandığını görürüz: Ahmet Yılmaz ismi iki satırda tekrar ediyor; Dr. Can Aksoy'un adı ve bölümü her BLP1005 satırında aynen kopyalanıyor; ders adları defalarca yazılıyor. İşte bu kontrolsüz veri tekrarı, veritabanı teorisinde anomali olarak adlandırılan üç büyük operasyonel arızayı tetikler.
:::

---

## Tek Tablo Israrının Faturası: Üç Büyük Anomali

```
[ Tek Parçalı Denormalize Tablo ]
  ├── 1. Güncelleme Anomalisi ──> Bir ders veya hoca bilgisi yüzlerce satırda tekrar eder;
  │                               bazıları güncellenip bazıları unutulunca sistem çelişkiye düşer.
  ├── 2. Ekleme Anomalisi     ──> Henüz öğrencisi olmayan yeni bir ders veya öğretim üyesi,
  │                               öğrenci numarası (PK parçası) boş bırakılamayacağı için kaydedilemez.
  └── 3. Silme Anomalisi      ──> Tek bir öğrencinin kaydı silindiğinde, o dersin ve dersi yürüten
                                  öğretim üyesinin tüm kurumsal bilgileri de kazara yok olur.
```

### Somut Örnekler
- **Güncelleme**: Dr. Can Aksoy unvan değiştirdiğinde, dersi alan yüz öğrencinin yüz satırının birden güncellenmesi gerekir. Dokümanlardan biri atlanırsa aynı kişi için iki farklı kayıt kalır.
- **Ekleme**: Yeni açılan `PRG1004` dersini henüz öğrenci seçmediği için sisteme giremeyiz; çünkü `ogrenci_numarasi` alanı zorunludur ve boş kalamaz.
- **Silme**: 103 numaralı Mehmet Demir ayrıldığında MAT1002 dersini alan başka öğrenci yoksa, ders ve hoca envanteri sistemden tamamen silinir.

::: {.notes}
Anomali kavramı, bir tablonun kötü yapılandırılması nedeniyle veritabanında rutin işlemler yapılırken ortaya çıkan mantıksal bozulmaları ifade eder. Güncelleme anomalisinde, aynı bilginin kopyalarından biri değişip diğeri kaldığında veritabanı güvenilirliğini kaybeder. Ekleme anomalisinde, tamamen ilgisiz bir bilginin (öğrencinin) henüz var olmaması yüzünden eldeki meşru bir bilgiyi (yeni açılan dersi) veritabanına ekleyemezsiniz. Silme anomalisinde ise bir öğrenciyi silerken kurumun ders arşivini kazara yok edersiniz. Bu üç anomali, tabloların göz kararı değil, kurallara bağlı olarak mantıksal parçalara ayrıştırılması gerektiğini kanıtlar. Bu ayrıştırma disiplinine normalizasyon diyoruz.
:::

---

## Normalizasyonun Temel Pusulası: Fonksiyonel Bağımlılık

### Fonksiyonel Bağımlılık (Functional Dependency) Nedir?
Normalizasyon, tabloları sezgisel tahminlerle veya gelişigüzel bölmek değildir. Sütunların hangi tablolarda toplanacağını belirleyen matematiksel ilişki **fonksiyonel bağımlılık**tır.

### Tanım ve Matematiksel Gösterim
Bir tabloda $X$ ve $Y$ sütun grupları olsun. Eğer $X$'in aldığı her bir değer için $Y$'nin veritabanında **her zaman tek bir geçerli değeri** bulunuyorsa, "$Y$ sütunu $X$'e fonksiyonel olarak bağımlıdır" denir:

$$
X \rightarrow Y
$$

- Okunuşu: *"X, Y'yi belirler"* veya *"Y, X'e bağımlıdır"*.

### Belirleyici İlke: Veri Değil, İş Kuralı
- Bir fonksiyonel bağımlılık, tablodaki o anlık birkaç satıra bakılarak *"bakın burada değerler çakışmamış"* denilerek kurulamaz.
- Bağımlılıklar, doğrudan kurumun **değişmez iş kurallarından** ve alan kısıtlarından türetilir.

::: {.notes}
Tabloları nasıl böleceğimize karar verirken rehberimiz fonksiyonel bağımlılıktır. Matematiksel tanım basittir: X değerini bildiğinizde Y değeri tartışmasız tek bir sonuca kilitleniyorsa, Y X'e bağımlıdır. Örneğin Türkiye Cumhuriyeti kimlik numarasını bildiğinizde kişinin adı tek bir değere kilitlenir; dolayısıyla ad kimlik numarasına fonksiyonel bağımlıdır. Burada altını çizmemiz gereken hayati bir nokta vardır: Fonksiyonel bağımlılık ekrandaki tablonun o günkü üç satırına bakarak çıkarılamaz. Tabloda tesadüfen iki öğrencinin telefon numarası farklı olabilir; bu telefonun öğrenciyi belirlediği anlamına gelmez. Bağımlılık kurumun iş kuralından doğar.
:::

---

## Senaryodaki Fonksiyonel Bağımlılıkların Çıkarımı

```
İş Kuralı 1: Her öğrenci numarasının tek bir adı vardır.
             ogrenci_numarasi ──> ogrenci_adi

İş Kuralı 2: Her ders kodunun tek bir adı ve tek bir öğretim üyesi vardır.
             ders_kodu ──> ders_adi, ogretim_uyesi_no

İş Kuralı 3: Her öğretim üyesinin tek bir adı ve tek bir bölümü vardır.
             ogretim_uyesi_no ──> ogretim_uyesi_adi, ogretim_uyesi_bolumu

İş Kuralı 4: Not kime aittir?
             Yalnızca ogrenci_numarasi notu belirleyemez (birden çok dersi var).
             Yalnızca ders_kodu notu belirleyemez (derste birden çok öğrenci var).
             (ogrenci_numarasi, ders_kodu) ──> basari_notu
```

### Formel Fonksiyonel Bağımlılıklar
$$
\text{ogrenci\_numarasi} \rightarrow \text{ogrenci\_adi}
$$
$$
\text{ders\_kodu} \rightarrow \text{ders\_adi, ogretim\_uyesi\_no}
$$
$$
\text{ogretim\_uyesi\_no} \rightarrow \text{ogretim\_uyesi\_adi, ogretim\_uyesi\_bolumu}
$$
$$
(\text{ogrenci\_numarasi, ders\_kodu}) \rightarrow \text{basari\_notu}
$$

::: {.notes}
Senaryomuzdaki kuralları formel bağımlılıklara dönüştürelim. Birinci bağımlılık: Öğrenci numarasını bildiğimizde öğrencinin adı tek biçimde belirlenir. İkinci bağımlılık: Ders kodunu bildiğimizde dersin adı ve yürütücüsü belirlenir. Üçüncü bağımlılık: Öğretim üyesi sicil numarası hocanın adını ve bölümünü belirler. Dördüncü bağımlılık ise en dikkat edilmesi gereken yerdir: Başarı notu kime aittir? Yalnızca öğrenciye ait olamaz, çünkü öğrencinin her dersten ayrı notu vardır. Yalnızca derse ait olamaz, çünkü dersteki her öğrencinin notu farklıdır. Bir notun tekil olarak anlam kazanabilmesi için hem öğrencinin hem de dersin birlikte bilinmesi zorunludur. Dolayısıyla not, bu iki alanın bileşimine bağımlıdır.
:::

---

## Satır Kimliğini Kurmak: Aday Anahtarlar ve Bileşik Anahtar

### `kayit` Tablosunda Tekil Anahtar Arayışı
`kayit` tablosundaki bir satırı diğer bütün satırlardan kesin olarak ayırt etmek için hangi sütun gereklidir?

- **`ogrenci_numarasi` tek başına anahtar olamaz**: Bir öğrenci birden fazla ders alabildiği için tabloda aynı öğrenci numarasına sahip birden çok satır yer alır (101 numaralı Ahmet iki satırdadır).
- **`ders_kodu` tek başına anahtar olamaz**: Bir dersi birden fazla öğrenci seçebildiği için aynı ders kodu birden çok satırda tekrarlanır (BLP1005 iki satırdadır).
- **`(ogrenci_numarasi, ders_kodu)` İkilisi**: Bir öğrencinin aynı derse ait yalnızca tek bir nihai not kaydı bulunabileceği için bu çift tablodaki her satırı benzersiz biçimde tanımlar.

### Tablonun Birincil Anahtarı (Primary Key)
$$
\text{Birincil Anahtar} = (\text{ogrenci\_numarasi, ders\_kodu}) \quad \text{[Bileşik Anahtar (Composite Key)]}
$$

::: {.notes}
İlişkisel modelde her tablonun satırlarını benzersiz kılan bir birincil anahtara sahip olması şarttır. Tablomuzu incelediğimizde ne öğrenci numarasının ne de ders kodunun tek başlarına anahtar olamayacağını görürüz; çünkü her ikisi de tabloda defalarca tekrar etmektedir. Ancak ikisini bir araya getirdiğimizde oluşan bileşik anahtar, her satırı tekil kılar; çünkü bir öğrenci bir derse tek bir kez kayıt olur ve tek bir başarı notu alır. Bu bileşik anahtar, normalizasyon basamaklarının çalışabilmesi için kurmamız gereken temel zemindir.
:::

---

## "Yapay Anahtar Ekleyelim" Yanılgısı

### Sıkça Düşülen Tuzak: Otomatik Artan Sayaç Eklemek
```
kayit(kayit_id [PK], ogrenci_numarasi, ogrenci_adi, ders_kodu, ders_adi, ...)
```

```
[ kayit_id = 1 ] ──> 101, Ahmet Yılmaz, BLP1005, Veritabanı Sistemleri, 501, Dr. Can Aksoy, ...
[ kayit_id = 2 ] ──> 101, Ahmet Yılmaz, MAT1002, Matematik II,          502, Doç. Elif Demir, ...
[ kayit_id = 3 ] ──> 102, Ayşe Kaya,    BLP1005, Veritabanı Sistemleri, 501, Dr. Can Aksoy, ...
```

### Neden Çözüm Değildir?
- `kayit_id` sütunu satıra teknik bir tekillik kazandırır; ancak tablodaki **fonksiyonel bağımlılıkları değiştirmez**.
- `ders_adi` hâlâ `ders_kodu`'na bağımlıdır.
- `ogrenci_adi` hâlâ `ogrenci_numarasi`'na bağımlıdır.
- Yüz öğrenci BLP1005 aldığında ders adı ve öğretim üyesi bilgileri yine yüz kez tekrar eder; güncelleme, ekleme ve silme anomalileri aynen devam eder.

> **Kavramsal Çıkarım**: Yapay bir numara eklemek tasarımı normalize etmez. Çözüm yapay sütun eklemekte değil, bağımlılıkları ait oldukları bağımsız tablolara dağıtmaktadır.

::: {.notes}
Uygulamada ve öğrenci projelerinde en sık gördüğümüz yanılgılardan biri şudur: Tasarımcı tablonun başına bir id sütunu ekler ve "artık tek bir birincil anahtarım var, bütün problemler çözüldü" zanneder. Bu tamamen bir yanılsamadır. Otomatik artan bir id eklemek satırı fiziksel olarak ayırt etmeyi sağlar; ancak arkasındaki mantıksal bağımlılıkları yok etmez. BLP1005 dersinin adı değiştiğinde, başında ister id olsun ister olmasın, yine yüz satırı güncellemek zorunda kalırsınız. Yapay anahtar bir ağrı kesicidir; hastalığı tedavi eden ise bağımlılıkları ayrıştıran normalizasyondur.
:::

---

## Birinci Normal Form (1NF): Atomiklik ve Tekrarlayan Grupların Sonu

### 1NF Koşulları
Bir tablonun **Birinci Normal Form (1NF)** düzeyinde olması için iki temel kuralı sağlaması gerekir:

1. **Değerlerin Atomik Olması**: Tablodaki her sütun bölünemez, tekil değerler taşımalıdır. Virgülle ayrılmış listeler, diziler veya birleşik yapılar hücre içinde yer alamaz.
2. **Tekrarlayan Grupların Olmaması**: Aynı tür bilgiyi saklamak için açılmış `ders1`, `ders2`, `ders3` gibi yinelenen sütunlar bulunamaz.

### 1NF Düzeyindeki Tablomuz
```
kayit(ogrenci_numarasi, ogrenci_adi, ders_kodu, ders_adi,
      ogretim_uyesi_no, ogretim_uyesi_adi, ogretim_uyesi_bolumu, basari_notu)
```
- **Birincil Anahtar**: `(ogrenci_numarasi, ders_kodu)`
- **Durum**: Çoklu değerler satırlara dağıtılmıştır, her hücre atomiktir.

> **1NF'nin Sınırı**: Atomiklik sağlanmıştır; ancak bileşik anahtarın yalnızca bir parçasına bağlı olan alanlar hâlâ bu tablonun içindedir. Dolayısıyla veri tekrarları ve anomaliler sürmektedir.

::: {.notes}
1NF ilişkisel modelin giriş kapısıdır. İlk tablomuzdaki virgüllü ders ve not listelerini parçalayıp her biri için ayrı bir satır açtığımızda tabloyu 1NF düzeyine getirmiş olduk. Artık her hücrede tek bir değer var ve tekrarlayan sütun grupları yok. Tablomuzun anahtarı da öğrenci numarası ile ders kodunun bileşimidir. Ancak 1NF tek başına sorunlarımızı çözmeye yetmez. Çünkü tablonun içindeki bazı alanlar bu iki parçalı anahtarın tamamına değil, yalnızca bir yarısına bağlıdır. Bu durum bizi ikinci normal forma götürür.
:::

---

## 1NF Tablosunun Zayıf Halkası: Kısmi Bağımlılık

### İkinci Normal Form (2NF) Kuralı
1. Tablo 1NF düzeyinde olmalıdır.
2. Tablodaki anahtar-olmayan her sütun, birincil anahtarın **tamamına** tam fonksiyonel bağımlı olmalıdır.
   - Yani birincil anahtarın yalnızca bir parçasına bağlı hiçbir sütun (**kısmi bağımlılık - partial dependency**) bulunmamalıdır.

### Doğrudan Kural: Tek Sütunlu Anahtar ve 2NF
> Bir tablonun birincil anahtarı tek bir sütundan oluşuyorsa, anahtarın "parçası" olamaz. Dolayısıyla birincil anahtarı tek sütunlu olan ve 1NF sağlayan her tablo **doğrudan 2NF** koşulunu da sağlar. Kısmi bağımlılık riski yalnızca bileşik anahtarlı tablolarda ortaya çıkar.

### 1NF Tablomuzdaki Bağımlılık Sınaması
- **`ogrenci_adi`**: Öğrenci adını bilmek için ders koduna gerek yoktur. Yalnızca `ogrenci_numarasi`'na bağlıdır $\rightarrow$ **Kısmi Bağımlılık**.
- **`ders_adi`, `ogretim_uyesi_no`, `ogretim_uyesi_adi`, `ogretim_uyesi_bolumu`**: Bu bilgiler öğrenciye bağlı değildir. Yalnızca `ders_kodu`'na bağlıdır $\rightarrow$ **Kısmi Bağımlılık**.
- **`basari_notu`**: Yalnızca öğrenci veya ders yetmez; ikisi birlikte bilinmelidir $\rightarrow$ **Tam Fonksiyonel Bağımlılık**.

::: {.notes}
2NF'nin odaklandığı nokta kısmi bağımlılıklardır. Kısmi bağımlılık şu demektir: Tablonun anahtarı iki parçalıdır (öğrenci no ve ders kodu), fakat anahtar olmayan bir sütun bu anahtarın sadece tek bir parçasıyla belirlenebilmektedir. Öğrencinin adını bilmek için ders koduna ihtiyacımız var mıdır? Hayır, öğrenci numarası yeterlidir. Benzer şekilde bir dersin adını veya hocasını bilmek için sınıftaki öğrenciye ihtiyacımız var mıdır? Hayır, ders kodu yeterlidir. İşte bu durum kısmi bağımlılıktır. Anahtarın tamamına bağlı olan tek alan başarı notudur. 2NF'ye geçmek için bu kısmi bağımlılıkları cerrahi bir operasyonla tablodan ayırmamız gerekir.
:::

---

## İkinci Normal Form (2NF): Kısmi Bağımlılığı Ayrıştırma Mekanizması

### Ayrıştırma Kuralı
- Anahtarın yalnızca bir parçasına bağlı olan sütunlar, bağımlı oldukları o anahtar parçasıyla birlikte **yeni birer tabloya taşınır**.
- Bileşik anahtarın tamamına bağlı olan sütunlar ise orijinal tabloda kalır.

```
[ 1NF: kayit Tablosu ]
  ├── ogrenci_numarasi ──> ogrenci_adi                ==> Ayrılır: ogrenci Tablosu
  ├── ders_kodu        ──> ders_adi, ogretim_uyesi... ==> Ayrılır: ders Tablosu
  └── (ogrenci_numarasi, ders_kodu) ──> basari_notu   ==> Kalır:   kayit Tablosu
```

### 2NF Sonucunda Üretilen Tablolar
1. **`ogrenci` Tablosu**: `ogrenci(ogrenci_numarasi, ogrenci_adi)`
   - Birincil Anahtar: `ogrenci_numarasi`
2. **`ders` Tablosu**: `ders(ders_kodu, ders_adi, ogretim_uyesi_no, ogretim_uyesi_adi, ogretim_uyesi_bolumu)`
   - Birincil Anahtar: `ders_kodu`
3. **`kayit` Tablosu**: `kayit(ogrenci_numarasi, ders_kodu, basari_notu)`
   - Birincil Anahtar: `(ogrenci_numarasi, ders_kodu)`
   - Yabancı Anahtarlar: `ogrenci_numarasi` $\rightarrow$ `ogrenci`, `ders_kodu` $\rightarrow$ `ders`

::: {.notes}
Ayrıştırma mekanizmasını adım adım izleyelim. Kısmi bağımlılık yapan sütunları ait oldukları anahtar parçasıyla birlikte bağımsız tablolara çıkarıyoruz: Öğrenci numarası ve adını alıp ogrenci tablosunu kuruyoruz; anahtarı ogrenci_numarasi oluyor. Ders kodunu ve derse ait tüm alanları alıp ders tablosunu kuruyoruz; anahtarı ders_kodu oluyor. Orijinal tablomuzda ise bileşik anahtar ve bu anahtarın tamamına bağlı olan basari_notu kalıyor. Tablolar arasındaki bağı korumak için kayit tablosundaki ogrenci_numarasi ve ders_kodu sütunlarını birer yabancı anahtar (foreign key) olarak işaretliyoruz.
:::

---

## 2NF Sonrası Durum: Tablolar ve Çözülen Problemler

### 2NF Uyumluluk Kontrolü
- **`ogrenci` tablosu**: Anahtar tek sütunludur; kısmi bağımlılık olamaz $\rightarrow$ **2NF sağlandı**.
- **`ders` tablosu**: Anahtar tek sütunludur; kısmi bağımlılık olamaz $\rightarrow$ **2NF sağlandı**.
- **`kayit` tablosu**: Anahtar bileşiktir, fakat `basari_notu` anahtarın tamamına tam bağımlıdır $\rightarrow$ **2NF sağlandı**.

### Elde Edilen İyileşmeler
- Öğrencinin adı artık aldığı ders sayısı kadar tekrar etmez; `ogrenci` tablosunda tek bir satırda durur.
- Yeni bir öğrenci henüz hiç ders seçmemiş olsa bile sisteme kaydedilebilir (ekleme anomalisi öğrenci için çözüldü).
- Bir öğrenci kaydını sildirdiğinde `ders` tablosundaki kayıtlar etkilenmez.

### Hâlâ Çözülmeyen Problem Nerede Saklanıyor?
> `ders` tablosuna yakından bakalım: Dr. Can Aksoy iki farklı ders yürütürse ne olur?

::: {.notes}
2NF'ye ulaştığımızda tasarımımız belirgin biçimde ferahlar. Artık yüz öğrenci BLP1005 dersini alsa bile, öğrencilerin adları kayıt tablosunda tekrarlanmaz. Yeni bir öğrenci geldiğinde ders seçmesini beklemeden adını sisteme girebiliriz. Ancak işimiz henüz bitmedi. Gözlerimizi 2NF adımında oluşturduğumuz ders tablosuna çevirelim. Bu tabloda ders kodu hocayı belirliyor; peki hocanın bölümü derse mi aittir yoksa hocaya mı? İşte bu soru bizi 3NF basamağına taşır.
:::

---

## 2NF Tablosunda Gizlenen Risk: Geçişli Bağımlılık

### Üçüncü Normal Form (3NF) Kuralı
1. Tablo 2NF düzeyinde olmalıdır.
2. Tablodaki anahtar-olmayan hiçbir sütun, anahtar-olmayan başka bir sütuna fonksiyonel bağımlı olmamalıdır.
   - Yani tabloda **geçişli bağımlılık (transitive dependency)** bulunmamalıdır.

### Geçişli Bağımlılık Mekanizması ($A \rightarrow B \rightarrow C$)
Eğer $A \rightarrow B$ ve $B \rightarrow C$ bağımlılıkları varsa, mantıksal olarak $A \rightarrow C$ geçişi doğar. Burada $A$ birincil anahtar, $B$ ve $C$ anahtar-olmayan sütunlar ise $C$, anahtara dolaylı olarak bağlıdır.

```
[ ders Tablosu Analizi ]
  ders_kodu (PK) ──> ogretim_uyesi_no ──> ogretim_uyesi_adi, ogretim_uyesi_bolumu
        │                                                     ▲
        └──────────────────(Geçişli Bağımlılık)───────────────┘
```

### Bu Tabloda Süren Anomaliler
- **Veri Tekrarı**: Dr. Can Aksoy iki farklı ders yürüttüğünde adı ve bölümü iki kez yazılır.
- **Güncelleme**: Hoca bölüm değiştirdiğinde birden çok ders satırı güncellenmelidir.
- **Ekleme**: Henüz üzerine atanmış dersi bulunmayan yeni bir öğretim üyesi `ders_kodu` olmadan sisteme eklenemez.

::: {.notes}
Geçişli bağımlılık, anahtar olmayan bir sütunun yine anahtar olmayan başka bir sütun üzerinden dolaylı olarak anahtara bağlanmasıdır. ders tablomuzun birincil anahtarı ders_kodu'dur. Ders kodunu bildiğimizde öğretim üyesinin kim olduğunu biliriz: ders_kodu -> ogretim_uyesi_no. Ancak öğretim üyesinin adı ve bölümü doğrudan derse ait bir özellik değildir; hocanın kendi şahsına ait bir niteliktir. Yani ogretim_uyesi_no -> ogretim_uyesi_bolumu ilişkisi vardır. Dolayısıyla ders_kodu hocanın bölümünü dolaylı yoldan belirler. Bu durum, hocanın bilgilerinin her ders kaydında tekrar etmesine ve dersi olmayan hocanın sisteme eklenememesine yol açar.
:::

---

## Üçüncü Normal Form (3NF): Geçişli Bağımlılığı Ayrıştırma Mekanizması

### Ayrıştırma Kuralı
- Dolaylı olarak belirlenen sütunlar, kendilerini doğrudan belirleyen ara sütunla birlikte **ayrı bir tabloya çıkarılır**.
- Ara sütun yeni tablonun birincil anahtarı (PK) olurken, orijinal tabloda bir **yabancı anahtar (FK)** olarak bırakılır.

```
[ 2NF: ders Tablosu ]
  ├── ogretim_uyesi_no ──> ogretim_uyesi_adi, ogretim_uyesi_bolumu
  │   ==> Ayrılır: ogretim_uyesi(ogretim_uyesi_no [PK], ogretim_uyesi_adi, ogretim_uyesi_bolumu)
  └── ders_kodu ──> ders_adi, ogretim_uyesi_no [FK]
      ==> Kalır:   ders(ders_kodu [PK], ders_adi, ogretim_uyesi_no [FK])
```

### 3NF Sonucunda Oluşan Dört Tablolu Nihai Mimari
1. **`ogrenci`**: `(ogrenci_numarasi [PK], ogrenci_adi)`
2. **`ogretim_uyesi`**: `(ogretim_uyesi_no [PK], ogretim_uyesi_adi, ogretim_uyesi_bolumu)`
3. **`ders`**: `(ders_kodu [PK], ders_adi, ogretim_uyesi_no [FK])`
4. **`kayit`**: `(ogrenci_numarasi [PK, FK], ders_kodu [PK, FK], basari_notu)`

::: {.notes}
3NF ameliyatı da tıpkı 2NF gibi son derece temiz bir kural izler: Geçişli bağımlılığa neden olan hocaya ait sütunları alıyoruz, onları doğrudan belirleyen ogretim_uyesi_no ile birlikte yeni bir ogretim_uyesi tablosuna taşıyoruz. Yeni tablonun anahtarı ogretim_uyesi_no oluyor. ders tablosunda ise ders_kodu, ders_adi ve dersi veren hocayı işaret eden ogretim_uyesi_no yabancı anahtarı kalıyor. Böylece başlangıçtaki devasa tek tablo, birbiriyle ilişkili dört adet temiz 3NF tablosuna dönüşmüş oldu.
:::

---

## Bağımlılık ve Mimari Dönüşüm Şeması

```
BAŞLANGIÇ (1NF: Tek Büyük Tablo):
kayit( [ogrenci_numarasi, ders_kodu] [PK], ogrenci_adi, ders_adi, ogretim_uyesi_no, ogretim_uyesi_adi, ogretim_uyesi_bolumu, basari_notu )
       │                     │
       ├──(Kısmi Bağımlılık)─┼──────────> ogrenci_adi
       │                     └──(Kısmi)─> ders_adi, ogretim_uyesi_no, ogretim_uyesi_adi, ogretim_uyesi_bolumu
       └────────────────────────(Tam)───> basari_notu

DÖNÜŞÜM 1 (2NF: Kısmi Bağımlılıklar Giderildi):
ogrenci( ogrenci_numarasi [PK], ogrenci_adi )
ders( ders_kodu [PK], ders_adi, ogretim_uyesi_no, ogretim_uyesi_adi, ogretim_uyesi_bolumu )
      │                         │
      └──────(Geçişli Bağ.)─────┴───────> ogretim_uyesi_adi, ogretim_uyesi_bolumu
kayit( ogrenci_numarasi [PK, FK], ders_kodu [PK, FK], basari_notu )

SONUÇ (3NF: Geçişli Bağımlılıklar Giderildi - Dört Temiz Varlık/İlişki):
ogrenci( ogrenci_numarasi [PK], ogrenci_adi )
ogretim_uyesi( ogretim_uyesi_no [PK], ogretim_uyesi_adi, ogretim_uyesi_bolumu )
ders( ders_kodu [PK], ders_adi, ogretim_uyesi_no [FK] )
kayit( ogrenci_numarasi [PK, FK], ders_kodu [PK, FK], basari_notu )
```

<!-- Görsel İhtiyacı 1: Bağımlılık okları şeması. Şemanın üst kısmında 1NF halindeki `kayit` tablosunun sütunları gösterilir; `ogrenci_numarasi`'ndan `ogrenci_adi`'na ve `ders_kodu`'ndan ders/hoca sütunlarına giden kısmi bağımlılık okları ile `(ogrenci_numarasi, ders_kodu)` çiftinden `basari_notu` sütununa giden tam bağımlılık oku açıkça işaretlenir. Şemanın alt kısmında ise `ders` tablosu üzerinde `ders_kodu -> ogretim_uyesi_no -> ogretim_uyesi_bolumu` geçişli bağımlılık zinciri gösterilir. Amaç: Kısmi ve geçişli bağımlılık mekanizmalarını sütunlar arası yönlü oklarla somutlaştırmak. -->

<!-- Görsel İhtiyacı 2: Önce/Sonra ilişkisel şema karşılaştırması. Sol tarafta tüm verileri barındıran tek parçalı, anomalili denormalize tablo; sağ tarafta ise 3NF sonucunda ortaya çıkan dört tablolu (`ogrenci`, `ders`, `ogretim_uyesi`, `kayit`) temiz yapı gösterilir. Dört tablo arasındaki birincil anahtar (PK) ve yabancı anahtar (FK) bağlantı çizgileri net olarak görünür. Amaç: Normalizasyon sürecinin başlangıç ve bitiş durumunu mimari düzeyde karşılaştırmak. -->

::: {.notes}
Bu şema tüm normalizasyon yolculuğunu tek bir bakışta özetler. En üstte kısmi bağımlılıkların bileşik anahtarı nasıl çekiştirdiğini görüyoruz: bir grup sütun ilk parçaya, bir grup sütun ikinci parçaya bağımlı. 2NF adımıyla bu bağımlılıkları iki bağımsız tabloya taşıyarak cerrahi olarak ayırdık. Ardından ders tablosunun içindeki geçişli bağımlılığı tespit ettik ve hoca sütunlarını dördüncü bir tabloya dönüştürdük. Altta ortaya çıkan yapı, her bir tablonun tek bir gerçek dünya varlığını (öğrenci, hoca, ders) veya varlıklar arası ilişkiyi (kayıt) temsil ettiği saf ilişkisel şemadır.
:::

---

## Doğrulayalım: Ayrıştırma Bilgi Kaybettirir mi?

### Eleştirel Soru
Tek bir tabloyu dört ayrı tabloya parçaladık. Acaba bu süreçte orijinal verilerden bir şey kaybettik mi? Tabloları yabancı anahtarlar üzerinden birleştirdiğimizde başlangıçtaki satırları eksiksiz elde edebilir miyiz?

### 3NF Tablolarımızın Somut Veri Durumu

**Tablo: `ogrenci`**
| ogrenci_numarasi (PK) | ogrenci_adi |
| --- | --- |
| 101 | Ahmet Yılmaz |
| 102 | Ayşe Kaya |
| 103 | Mehmet Demir |

**Tablo: `ogretim_uyesi`**
| ogretim_uyesi_no (PK) | ogretim_uyesi_adi | ogretim_uyesi_bolumu |
| --- | --- | --- |
| 501 | Dr. Can Aksoy | Bilgisayar Programcılığı |
| 502 | Doç. Elif Demir | Temel Bilimler |

**Tablo: `ders`**
| ders_kodu (PK) | ders_adi | ogretim_uyesi_no (FK) |
| --- | --- | --- |
| BLP1005 | Veritabanı Sistemleri | 501 |
| MAT1002 | Matematik II | 502 |

**Tablo: `kayit`**
| ogrenci_numarasi (PK, FK) | ders_kodu (PK, FK) | basari_notu |
| --- | --- | --- |
| 101 | BLP1005 | 85 |
| 101 | MAT1002 | 70 |
| 102 | BLP1005 | 90 |
| 103 | MAT1002 | 65 |

::: {.notes}
Tasarımımızın matematiksel olarak geçerli olduğunu söylemek yetmez; veriler üzerinde sağlamasını yapmamız gerekir. Karşımızda normalizasyon sonucu ortaya çıkan dört bağımsız tablo duruyor. Öğrenci tablosunda sadece öğrenciler, hoca tablosunda hocalar, ders tablosunda dersler ve kayıt tablosunda ise sadece notlar ile kimlik köprüleri var. Şimdi en baştaki anomalili tablonun ilk satırını bu ayrık tablolardan yabancı anahtarları takip ederek adım adım yeniden kuralım.
:::

---

## Doğrulama Adımları: Kayıpsız Yeniden Kurulum

### Adım Adım Eşleştirme Mekanizması
1. **`kayit` tablosunun ilk satırını alalım**: `(101, BLP1005, 85)`
2. **Öğrenciyi Çözümleme**: `ogrenci_numarasi = 101` $\rightarrow$ `ogrenci` tablosundaki birincil anahtarla eşleşir:
   $$\rightarrow \text{Ahmet Yılmaz}$$
3. **Dersi Çözümleme**: `ders_kodu = BLP1005` $\rightarrow$ `ders` tablosundaki birincil anahtarla eşleşir:
   $$\rightarrow \text{Veritabanı Sistemleri, ogretim\_uyesi\_no} = 501$$
4. **Öğretim Üyesini Çözümleme**: `ogretim_uyesi_no = 501` $\rightarrow$ `ogretim_uyesi` tablosundaki birincil anahtarla eşleşir:
   $$\rightarrow \text{Dr. Can Aksoy, Bilgisayar Programcılığı}$$

### Yeniden Kurulan Orijinal Satır
```
101 | Ahmet Yılmaz | BLP1005 | Veritabanı Sistemleri | 501 | Dr. Can Aksoy | Bilgisayar Programcılığı | 85
```

### Doğrulama Sonuçları
- **Bilgi Kaybı Yoktur (Lossless Decomposition)**: Orijinal tablodaki hiçbir sütun ve değer kaybolmamıştır; yabancı anahtarlarla eksiksiz geri çatılabilmektedir.
- **Sahte Kayıt Türememiştir (No Spurious Tuples)**: Eşleştirmeler tekil birincil anahtarlar üzerinden yapıldığı için Ahmet'in almadığı bir dersle veya Doç. Elif Demir ile sahte bir biçimde eşleşmesi imkansızdır.
- **Bütünlük Korunmuştur**: Tüm ilişkiler yabancı anahtar köprüleriyle matematiksel olarak güvenceye alınmıştır.

::: {.notes}
Doğrulama adımını canlı olarak izledik. Kayıt tablosundaki 101 numaralı Ahmet'in BLP1005 kaydını aldık. 101 bizi Ahmet Yılmaz'a götürdü; BLP1005 bizi Veritabanı Sistemleri dersine ve 501 numaralı hocaya götürdü; 501 ise bizi Dr. Can Aksoy'a ve Bilgisayar Programcılığı bölümüne götürdü. Dört parçayı birleştirdiğimizde ilk tablomuzdaki satırın birebir aynısını elde ettik. Bu test bize iki hayati güvence verir: Birincisi, hiçbir veri kaybı yaşanmamıştır. İkincisi ve daha önemlisi, eşleştirme aday anahtarlar üzerinden yapıldığı için sistemde olmayan hayali, sahte bir kayıt türememiştir. Buna veritabanı kuramında kayıpsız ayrıştırma denir.
:::

---

## Sık Yapılan Hatalar: Anahtar ve Bağımlılık Yanılgıları

### 1. Yapay Tekil Anahtarın Normalizasyonu Çözdüğünü Sanmak
- **Yanılgı**: `id` sütunu ekleyince tablonun normalize olduğunu sanmak.
- **Doğrusu**: Yapay anahtar fonksiyonel bağımlılıkları değiştirmez; `ders_adi` yine `ders_kodu`'na bağımlı kalır, tekrar sürer.

### 2. Tek Sütunlu Birincil Anahtarda Kısmi Bağımlılık Aramak
- **Yanılgı**: Tek sütunlu anahtarlı tablolarda 2NF ihlali aramaya çalışmak.
- **Doğrusu**: Tek sütun "parça" olamaz; 1NF sağlayan tek-sütunlu-PK tablo zaten doğrudan 2NF'dir.

### 3. Bağımlılığı İş Kuralı Yerine Anlık Verilerden Çıkarmak
- **Yanılgı**: Örnek satırlara bakıp "burada tekrar yok, demek ki belirler" demek.
- **Doğrusu**: Anlık verideki rastlantısal tekillik kanıt değildir; bağımlılık daima iş kuralından çıkarılır.

::: {.notes}
Öğrencilerin ve yeni başlayan tasarımcıların en sık düştüğü üç kavram yanılgısını inceleyelim. Birincisi, yapay id ekleyince normalizasyon bitti sanmaktır. Tekrar vurgulayalım: id eklemek satır kimliği kurar ama bağımlılıkları ortadan kaldırmaz. İkinci hata, tek sütunlu anahtarlarda 2NF ihlali aramaktır. Tek bir sütundan oluşan anahtar bölünemeyeceği için kısmi bağımlılık barındıramaz; dolayısıyla doğrudan 2NF düzeyindedir. Üçüncü hata ise bağımlılığı ekrandaki üç satır veriye bakarak tahmin etmektir. Veri anlıktır ve değişkendir; bağımlılık ise kurumun çalışma tüzüğünden ve değişmez kurallarından gelir.
:::

---

## Sık Yapılan Hatalar: Ayrıştırma ve İlişki Yanılgıları

### 4. Normalizasyonu Yalnızca Tablo Bölmek Sanıp Yabancı Anahtarı Unutmak
- **Yanılgı**: Tabloyu bölerken aradaki ilişki köprüsünü kurmayı atlamak.
- **Doğrusu**: FK sütunu konulmazsa bağ kalıcı olarak kaybolur; ayrıştırma FK köprüsüyle yapılır.

### 5. Geçişli Bağımlılığı Yabancı Anahtar İlişkisiyle Karıştırmak
- **Yanılgı**: Tabloda FK görünce geçişli bağımlılık ihlali sanmak.
- **Doğrusu**: FK meşru bir köprüdür; ihlal, anahtar-olmayan bir alanın başka anahtar-olmayan alanı belirlemesidir.

::: {.notes}
Ayrıştırma aşamasında yapılan iki büyük hataya dikkat edelim. Dördüncü hata, tabloları bölerken yabancı anahtar koymayı unutmaktır. Hoca tablosunu ayırıp ders tablosuna hoca numarasını koymazsanız, dersler ile hocalar arasındaki bağı koparırsınız ve sistemi bir daha asla birleştiremezsiniz. Beşinci hata ise tam tersi bir aşırı yorumdur: Tabloda foreign key görünce "burada geçişli bağımlılık var" korkusuna kapılmaktır. Yabancı anahtar meşru bir köprüdür; geçişli bağımlılık ise o köprünün arkasındaki detayların (hocanın bölümünün) ısrarla ders tablosunda tutulmasıdır.
:::

---

## Kaynak ve Kapsam Notu

### Kapsam ve Sınırlar
- Bu derste ilişkisel veritabanı tasarımının temelini oluşturan **Birinci Normal Form (1NF)**, **İkinci Normal Form (2NF)** ve **Üçüncü Normal Form (3NF)** kuralları işlenmiştir.
- **Kapsam Dışı Bırakılanlar**: Boyce-Codd Normal Formu (BCNF), Dördüncü Normal Form (4NF), Beşinci Normal Form (5NF) ve biçimsel aksiyom ispatları (Armstrong aksiyomları) başlangıç düzeyindeki bu meslek yüksekokulu dersinin öğretim sınırlarının dışında tutulmuştur.

### Kaynak Uyarlaması
- Ders kaynağında ("Veritabanı Mantığı ve Kavramları") normalizasyon konusu biçimsel kurallara (1NF, 2NF, 3NF tanımları ve fonksiyonel bağımlılık mekaniği) girilmeden, yalnızca departman bilgilerinin ayrıştırılması üzerinden sezgisel olarak ele alınmıştır.
- Buradaki kavramsal akış, fonksiyonel bağımlılık çıkarımları ve tek adımlı mesleki eğitim senaryosu (öğrenci-ders-öğretim üyesi-not), kaynağın arıza-çözüm motivasyonundan faydalanılarak ders hedeflerine uygun biçimde özgün olarak yapılandırılmıştır.

::: {.notes}
Bu dersi tamamlarken kapsam sınırımızı da netleştirelim. Endüstride operasyonel sistemlerin çok büyük kısmı 3NF düzeyinde tasarlanır ve bu düzey anomalilerin neredeyse tamamını engellemek için yeterlidir. BCNF, 4NF, 5NF gibi daha ileri normal formlar ile Armstrong aksiyomları gibi matematiksel ispatlar, bu başlangıç dersinin kapsamı dışındadır. Ders kaynağındaki sezgisel departman örneğini, programımıza ve mesleki eğitim hedeflerimize uygun olarak öğrenci-ders-öğretim üyesi modeliyle yeniden kurduk. Bir sonraki konumuzda bu tasarladığımız şemaları MySQL Workbench üzerinde DDL komutlarıyla çalışan gerçek tablolara dönüştüreceğiz.
:::
