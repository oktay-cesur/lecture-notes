---
title: "Varlık-İlişki (E-R) Modeli"
subtitle: "BLP 1005 — Veritabanı Yönetim Sistemleri"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-09-22
description: Gereksinimlerden varlık, nitelik, anahtar, kardinalite ve katılım kurallarına dayalı E-R modelleme.
tags:
  - blp1005
  - veritabani
  - hafta-2
---

## Ele Alınacak Temel Sorular
- Veritabanı tasarlarken neden doğrudan tablo çizmeye başlanmaz?
- Bir bilgi parçası ne zaman "varlık", ne zaman "nitelik" olarak modellenir?
- Aday anahtarlar arasından birincil anahtar hangi teknik ölçütlerle seçilir?
- Tek bir nitelik tekilliği sağlayamadığında bileşik anahtar nasıl kurulur?
- Kardinalite ile katılım arasındaki temel fark nedir?
- Crow's Foot notasyonundaki uç sembolleri iş kurallarını nasıl görselleştirir?
- 1:N, N:M ve 1:1 ilişkiler fiziksel tablolara ve yabancı anahtarlara nasıl dönüştürülür?
- Referans bütünlüğü veritabanındaki yetim kayıtları hangi mekanizmayla engeller?

::: {.notes}
Bu sunumda iş kurallarından başlayarak kavramsal veri modelleme sürecini ve bu modelin ilişkisel veritabanı şemasına dönüştürülme adımlarını inceliyoruz. Önceki konuda tek bir tablonun satır ve sütun düzenini, birincil anahtarın tekil kimlik işlevini görmüştük. Ancak kütüphane gibi birden fazla bileşenin etkileşimde olduğu gerçek dünya senaryolarında doğrudan yazılımı açıp tablo çizmeye başlamak tasarımı hızla çıkmaza sokar. Bu sunum boyunca varlık ve nitelik ayrımından başlayacak, kardinalite ve katılım kurallarını Crow's Foot notasyonuyla kuracak ve ardından yabancı anahtarlar ile bağlantı tabloları üzerinden ilişkisel şemaya kayıpsız dönüşümün kurallarını adım adım işleyeceğiz.
:::

---

## İş Kuralından Veri Modeline: Neden Doğrudan Tablo Çizilmez?

### Kütüphane Senaryosu ve Günlük İş Kuralları
- Kütüphaneye kayıt yaptıran **üyeler** bulunur.
- Raflarda okuyucuyu bekleyen binlerce **kitap** yer alır.
- Üyelerin bu kitapları ödünç alıp iade ettikleri hareketli bir **ödünç süreci** yürütülür.

### Doğrudan Tablo Çizme Girişiminin Tıkandığı Noktalar
- Kitap tablosuna ödünç alan üyeyi mi yazacağız?
- Bir üye aynı anda üç kitap ödünç aldığında ne olacak?
- Kitap iade edilip haftalar sonra başka bir üyeye verildiğinde eski üyenin kaydını silecek miyiz, yoksa aynı kitabı her ödünç işleminde yeni bir satır olarak tekrar mı ekleyeceğiz?

```
İş Kuralları (Sözel İstekler)
          │
          ▼
[ Kavramsal Tasarım: E-R Modeli ]  ──> Veritabanı yazılımından ve SQL sözdiziminden bağımsız modelleme
          │
          ▼
İlişkisel Şema (Fiziksel Tablolar)
```

::: {.notes}
Bir kurumun veritabanı ihtiyacı teknik terimlerle değil, işleyişi anlatan sözel kurallarla gelir. Kütüphane gibi birden çok parçanın bir arada çalıştığı bir ortamda ilk akla gelen refleks doğrudan veritabanı yönetim sistemini açıp tablolar oluşturmaktır. Ancak bu refleks hemen duvara toslar. Kitap tablosuna ödünç alan üyeyi yazdığımızda, kitap el değiştirdikçe eski kaydı silmek zorunda kalırız; üye tablosuna kitap yazdığımızda ise ikinci bir kitap için yapay sütunlar açmamız gerekir. Bu tıkanma, fiziksel kodlama ve tablo oluşturma öncesinde yapılması zorunlu bir tasarım katmanına işaret eder. Gerçek dünya nesnelerini ve aralarındaki bağları yazılımdan bağımsız modelleme ihtiyacına Varlık-İlişki Modeli diyoruz. İlk adım, bu gereksinimleri varlık ve nitelik olarak ayrıştırmaktır.
:::

---

## Gereksinimleri Çözümleme: Varlık ve Nitelik Ayrımı

### Kütüphane Gereksinim Metni
> "Kütüphanemize kayıtlı üyelerin adını, soyadını, üye numarasını ve telefon bilgisini tutmak istiyoruz. Ayrıca kütüphanedeki her kitabın demirbaş numarasını, başlığını, yazarını ve basım yılını kaydetmeliyiz."

### Kavramsal Yapı Taşları
- **Varlık (Entity)**: Gerçek dünyada var olan, hakkında bilgi toplanıp saklanmaya değer, diğer nesnelerden bağımsız olarak ayırt edilebilen somut veya soyut nesnelerdir.
  - Benzer varlıkların kümesine **varlık kümesi (entity set)** denir.
- **Nitelik (Attribute)**: Bir varlığın durumunu, boyutunu veya özelliklerini tanımlayan her bir bilgi parçasıdır.

### Kütüphane İçin Ayrım
| Kavramsal Düzey | Üye Alanı | Kitap Alanı |
| --- | --- | --- |
| **Varlık (Entity)** | `Üye` (Bağımsız nesne) | `Kitap` (Bağımsız nesne) |
| **Nitelikler (Attributes)** | `ad`, `soyad`, `uye_numarasi`, `telefon` | `demirbas_numarasi`, `baslik`, `yazar`, `basim_yili` |

> **Ayrım Ölçütü**: Bir kavramın varlık mı yoksa nitelik mi olduğunu belirleyen ölçüt, sistem içindeki **bağımsızlığıdır**. Telefon numarası kütüphanede tek başına dolaşan bağımsız bir nesne değildir; üyenin iletişim niteliğidir. Buna karşılık kitap tek başına bağımsız bir nesnedir; bu nedenle varlıktır.

::: {.notes}
Sözel gereksinimleri analiz ederken kullandığımız temel ölçüt bağımsızlıktır. Bir bilgi parçası kendi başına bağımsız bir kimliğe sahipse ve birden fazla özellikle tarif ediliyorsa varlıktır. Başka bir nesnenin sadece bir özelliğini tanımlıyorsa niteliktir. Telefon numarası tek başına bir varlık değildir; bir üye olmadan anlam taşımaz ve tek bir değerdir. Ancak kitap tek başına rafta duran, birden çok niteliği (yazarı, basım yılı, başlığı) olan bağımsız bir varlıktır. Bu ayrım yapıldıktan sonra, aynı varlık kümesindeki binlerce kaydın birbirine karışmasını önleyecek kimlik yapısını kurmamız gerekir.
:::

---

## Kimlik Arayışı: Aday Anahtar ve Birincil Anahtar Seçimi

### Problem: Varlık Örneklerini Ayırt Etme
- Kütüphanede aynı ad ve soyadı taşıyan iki farklı üye bulunabilir.
- Tamamen aynı başlığa sahip farklı basım kitaplar yer alabilir.

### Aday Anahtarlar (Candidate Keys)
Her bir kaydı tekil olarak tanımlayabilme potansiyeline sahip, boş bırakılamaz nitelik veya nitelik gruplarıdır.
- Üye Varlığı Adayları:
  - `uye_numarasi` (Kurum tarafından üretilen tekil numara)
  - `tc_kimlik_no` (Devlet tarafından verilen tekil kimlik)
  - `eposta` (Kişiye özel tekil iletişim adresi)

### Birincil Anahtar (Primary Key) Seçim Kriterleri
1. **Değişmezlik**: Seçilen değer zaman içinde değişmemelidir. E-posta adresi tekil olsa bile kullanıcının isteğiyle güncellenebilir; temel kimlik yapılması sakıncalıdır.
2. **Sadeliği ve Kurumsal Denetim**: `tc_kimlik_no` dış kuruma aittir, 11 hanelidir ve kişisel verilerin korunması açısından hassastır. Kurumun kendi ürettiği `uye_numarasi` ise kurum denetimindedir ve daha yalındır.
3. **Karar**: Üye varlığında birincil anahtar olarak **`uye_numarasi`** seçilir.

> **Kural**: Birincil anahtar mutlaka otomatik artan tamsayı olmak zorunda değildir. Kitap varlığı için seçilen `demirbas_numarasi`, kurum standardına uygun `KTP-2026-0042` gibi metinsel bir kod olabilir. Tekilliği sağladığı ve boş bırakılmadığı sürece metinsel kodlar da geçerli birincil anahtardır.

::: {.notes}
Aday anahtar ile birincil anahtar arasındaki ilişki bir aday havuzundan en uygun temsilciyi seçme sürecidir. Üyenin e-posta adresi, TC kimlik numarası ve kurum üye numarası teorik olarak satırı tekil yapabilir. Ancak tasarımcı keyfi davranmaz. Değişebilen alanlar (örneğin e-posta) birincil anahtar yapılmaz; çünkü birincil anahtar değiştiğinde ona bağlı bütün ilişkisel köprüler sarsılır. TC kimlik numarası ise hem gereksiz uzunluk taşır hem de yasal gizlilik riskleri barındırır. Kurumun kendi ürettiği üye numarası hem sade hem de tam denetimli olduğu için ideal birincil anahtardır. Kitap tarafında da demirbaş numarasını seçeriz. Peki tek bir niteliğin kimliği kurmaya yetmediği durumlarda ne yaparız?
:::

---

## Tek Nitelik Yetmediğinde: Bileşik Anahtar (Composite Key)

### Sorun: Tek Nitelik Tekilliği Sağlayamadığında
- Bazı varlık veya yerleşim modellerinde tek bir alan kaydı diğerlerinden ayırmaya yetmez.
- Tekilliği kurmak için iki veya daha fazla niteliğin birleşimi zorunlu hale gelir.

### Kütüphane Raf Konumu Senaryosu
Kitapların kütüphane binasındaki fiziksel raf konumlarını modelleyelim:

```
[ Oda 101 ] ──> Raf 1, Raf 2, Raf 3
[ Oda 102 ] ──> Raf 1, Raf 2, Raf 3
```

- `raf_no = 3` tek başına yetersizdir: Oda 101'de de Raf 3 vardır, Oda 102'de de Raf 3 vardır.
- `oda_no = 101` tek başına yetersizdir: Oda 101 içinde onlarca farklı raf bulunur.

### Mekanizma: Niteliklerin Birlikte Kimlik Oluşturması
- Çözüm: İki nitelik bir araya getirilerek **Bileşik Anahtar (Composite Key)** tanımlanır.
- **Bileşik Anahtar**: `(oda_no, raf_no)`
- `(101, 3)` ikilisi kütüphane genelinde tek bir fiziksel rafı kesin ve benzersiz olarak işaret eder.

::: {.notes}
Bileşik anahtar, tek bir niteliğin tekillik üretmediği durumlarda devreye girer. Kütüphanedeki oda ve raf örneği bunu netleştirir. Sadece raf numarasına bakarsak hangi odadaki raftan bahsettiğimizi bilemeyiz. Sadece oda numarasına bakarsak odanın içindeki hangi rafta durduğumuzu bilemeyiz. Ancak oda numarası ile raf numarasını birleştirdiğimizde, 101 numaralı odadaki 3 numaralı raf kütüphane koordinatlarında benzersiz bir konumu tanımlar. Artık varlıklarımızı ve kimlik mekanizmalarımızı kurduk. Şimdi bu varlıkların birbirleriyle kurdukları ilişkileri ve bu ilişkilerin kurallarını inceleyelim.
:::

---

## Varlıklar Arasındaki Bağ: İlişki ve Kardinalite

### İlişki (Relationship) Tanımı
İki veya daha fazla varlık arasındaki anlamsal bağlantıdır. Kütüphane senaryomuzda Üye ile Kitap arasındaki eylem **"Ödünç Alma"** ilişkisidir.

### Kardinalite: En Çok Kaç? (Üst Sınır)
Bir varlığın ilişkili olduğu diğer varlık kümesinden *en fazla* kaç varlıkla eşleşebileceğini belirler.

```
1. Bire Çok (1:N)
   Raf ──────────────< Kitap
   Bir rafta birden çok kitap bulunabilir; her kitap aynı anda yalnızca tek bir raftadır.

2. Çoka Çok (N:M)
   Üye >─────────────< Kitap
   Bir üye birden çok kitap ödünç alabilir; bir kitap zaman içinde farklı üyelerce ödünç alınabilir.

3. Bire Bir (1:1)
   Üye ─────────────── Kütüphane Kartı
   Her üyenin en fazla bir kartı olabilir; her kart yalnızca tek bir üyeye tanımlanır.
```

::: {.notes}
Varlıklar tek başlarına yalıtılmış adalar değildir; kurumun iş akışları varlıklar arasındaki ilişkilerle yürür. Bir ilişkinin davranışını tanımlayan ilk temel parametre kardinalitedir. Kardinalite "en çok kaç" sorusunu yanıtlar. Bir raf ile kitap arasındaki ilişki bire çoktur; rafta yüzlerce kitap durabilir ama bir kitap aynı anda iki farklı rafta duramaz. Üye ile kitap arasındaki ödünç ilişkisi ise çoka çoktur; çünkü öğrenci birden çok kitabı alabilir, kitap da iade edildikçe farklı öğrencilere verilebilir. Bire bir ilişkide ise her iki taraf da tekil bir eşleşmeyle sınırlıdır. Ancak ilişkinin kuralını tam tanımlamak için üst sınır yetmez; alt sınıra da bakmamız gerekir.
:::

---

## Katılım Kuralları: En Az Kaç Eşleşme? (Zorunlu mu?)

### Katılım (Participation) Tanımı
Bir varlığın o ilişkide yer almasının zorunlu olup olmadığını, yani *en az* kaç eşleşmenin bulunması gerektiğini belirler.

### İki Temel Katılım Türü
- **Zorunlu Katılım (Total / Mandatory - En az 1)**: Varlık kümesindeki her bir elemanın bu ilişkide mutlaka en az bir kez yer alması gerekir.
- **İsteğe Bağlı Katılım (Partial / Optional - En az 0)**: Varlık kümesindeki bir elemanın bu ilişkide yer alması zorunlu değildir; ilişkisiz olarak da sistemde varlığını sürdürebilir.

### Kütüphane Senaryosunda Katılım Analizi
- **Üye Varlığı**: Kütüphaneye yeni kaydolan bir üye henüz hiç kitap ödünç almamış olabilir.
  Katılım: **İsteğe Bağlı** (En az 0).
- **Kitap Varlığı**: Rafta yeni satın alınmış bir kitap henüz hiç ödünç verilmemiş olabilir.
  Katılım: **İsteğe Bağlı** (En az 0).
- **Ödünç Alma İşlem Kaydı**: Bir ödünç kaydının mutlaka bir üyeye ve bir kitaba ait olması şarttır; üyesiz veya kitapsız ödünç kaydı var olamaz.
  Katılım: **Zorunlu** (En az 1).

| Boyut | Soru | Değer Aralığı | Şemaya Etkisi |
| --- | --- | --- | --- |
| **Kardinalite** | En çok kaç? (Üst sınır) | 1 veya N | Yabancı anahtarın nereye konacağını belirler |
| **Katılım** | En az kaç? (Alt sınır) | 0 veya 1 | Alanın boş (`NULL`) kalıp kalamayacağını belirler |

::: {.notes}
Kardinalite ile katılım arasındaki ayrım, veritabanı tasarımında en sık karışan konulardan biridir. Kardinalite tavanı, yani üst sınırı belirler; katılım ise tabanı, yani alt sınırı belirler. Kütüphanemize yeni gelen bir öğrenciyi sisteme eklediğimiz anda hemen bir kitap ödünç almak zorunda mıdır? Hayır, henüz ödünç almadığı bir dönem olabilir; bu yüzden üyenin katılımı isteğe bağlıdır, yani en az sıfırdır. Yeni satın alınan bir kitap için de aynı durum geçerlidir. Fakat sisteme girilen bir ödünç alma işlemini düşünürsek, üyesi olmayan veya kitabı olmayan bir ödünç kaydı açılamaz; burada katılım zorunludur. Bu iki kural birlikte ele alındığında tablodaki kısıtları tam olarak tanımlayabiliriz. Şimdi bu kuralların diyagramda nasıl gösterildiğine bakalım.
:::

---

## Crow's Foot Notasyonu ve Uç Sembolleri

### Neden Crow's Foot (Karga Ayağı)?
Kavramsal modelleri görselleştirmede endüstri standardıdır; ilişkisel tablolara doğrudan eşlenebilen yalın bir sembol yapısına sahiptir.

### Temel Gösterim Kuralları
- **Varlık**: İki bölmeli dikdörtgen kutu (Üstte varlık adı, altta nitelikler; birincil anahtar yanında `PK` simgesi).
- **İlişki**: Varlıkları bağlayan düz çizgi ve üzerinde ilişkinin adı.
- **Uç Sembolleri**: Çizginin varlık kutusuna bağlandığı uç hem kardinaliteyi hem katılımı aynı anda gösterir:

```
Sembol      Adı                  Katılım (İç Sembol)     Kardinalite (Dış Sembol)
──────      ───                  ───────────────────     ────────────────────────
  ||        Tam Olarak Bir       Zorunlu (en az 1)       Tekil (en çok 1)
  o|        Sıfır veya Bir       İsteğe Bağlı (en az 0)  Tekil (en çok 1)
  >|        Bir veya Çok         Zorunlu (en az 1)       Çoğul (en çok N)
  o<        Sıfır veya Çok       İsteğe Bağlı (en az 0)  Çoğul (en çok N)
```

> **Kural**: Kutuya yakın olan **iç sembol katılımı** (alt sınır: daire = 0, dik çizgi = 1); çizginin ucundaki **dış sembol kardinaliteyi** (üst sınır: dik çizgi = 1, çatal = N) temsil eder.

::: {.notes}
Crow's Foot notasyonunun gücü, bir çizgi ucuna hem alt sınırı hem üst sınırı iki basit sembolle yerleştirebilmesinden gelir. Kutuya temas eden içteki sembol alt sınırdır; daire görüyorsak sıfırdır yani isteğe bağlıdır, düz çizgi görüyorsak birdir yani zorunludur. Dıştaki sembol ise üst sınırdır; tek çizgi bir demektir, karga ayağına benzeyen üç tırnaklı çatal ise çok demektir. Daire ve çatalı yan yana gördüğümüzde bunu "sıfır veya çok" olarak okuruz. Düz iki dik çizgi gördüğümüzde "tam olarak bir" olarak okuruz. Bu görsel sözdizimi, kütüphane modelimizi kağıt üzerinde eksiksiz biçimde resmetmemizi sağlar.
:::

---

## Kavramsal E-R Diyagramı: Kütüphane Modeli

<!-- Görsel İhtiyacı 1: Crow's Foot notasyonunda kütüphane kavramsal E-R diyagramı. ÜYE kutusu (uye_numarasi [PK], ad_soyad, telefon) ile KİTAP kutusu (demirbas_numarasi [PK], baslik, yazar) arasında doğrudan N:M ilişki çizgisi yer alır; her iki uçta da 'sıfır veya çok' (daire ve çatal) sembolü bulunur; çizginin üzerinde 'Ödünç Alma' ilişkisi ve ilişkiye bağlı alis_tarihi ile iade_tarihi nitelikleri gösterilir. Amaç: Varlık kutularının, niteliklerin, N:M ilişkinin ve uç sembollerinin kavramsal düzeydeki yerleşimini görselleştirmek. -->

```
+--------------------------+                               +--------------------------+
|           UYE            |                               |          KITAP           |
+--------------------------+                               +--------------------------+
| PK  uye_numarasi         |                               | PK  demirbas_numarasi    |
|     ad_soyad             |          Ödünç Alma           |     baslik               |
|     telefon              |o<───────────────────────────>o|     yazar                |
+--------------------------+          /          \         +--------------------------+
                                     /            \
                              [alis_tarihi]   [iade_tarihi]
```

### Diyagramın Anlattığı Kurallar
- `UYE` ile `KITAP` arasında N:M "Ödünç Alma" ilişkisi kurulmuştur.
- Her iki uçtaki `o<` sembolü, bir üyenin sıfır veya çok kitap alabileceğini; bir kitabın da sıfır veya çok kez ödünç verilebileceğini (isteğe bağlı katılım, çoğul kardinalite) belirtir.
- `alis_tarihi` ve `iade_tarihi` nitelikleri tek başına üyenin veya kitabın değil, bu ödünç eyleminin nitelikleridir.

> **Hatırlatma**: Bu diyagram henüz bir veritabanı tablosu değildir. İş kurallarının kağıt üzerindeki kavramsal mimarisidir.

::: {.notes}
Ekranda kütüphane sistemimizin kavramsal E-R diyagramını görüyoruz. İki varlık kutumuz var: Üye ve Kitap. Kutuların içinde birincil anahtarlar `PK` etiketiyle belirlenmiş durumda. Aralarındaki çizgi doğrudan ödünç alma eylemini temsil ediyor. Her iki uçta da daire ve çatal var; yani katılım isteğe bağlı, kardinalite çoğul. Çizginin üzerine sarkan iki nitelik görüyoruz: alış tarihi ve iade tarihi. Bu nitelikler neden üyenin içine yazılmadı? Çünkü üyenin doğum günü veya adı gibi sabit bir özelliği değildir. Neden kitabın içine yazılmadı? Çünkü kitap raftayken bir iade tarihi olamaz. Bu iki bilgi ancak ödünç alma eylemi gerçekleştiğinde anlam kazanır. Şimdi bu kavramsal tasarımı veritabanı motorunun anlayacağı tablolara dönüştürme aşamasına geçiyoruz.
:::

---

## Kavramsal Modelden İlişkisel Şemaya Dönüşüm

### Temel Kavram Ayrımı: Bağıntı vs İlişki
- **Bağıntı (`relation`)**: İlişkisel modelde iki boyutlu **tabloya** verilen matematiksel addır.
- **İlişki (`relationship`)**: Kavramsal modeldeki varlıklar arasındaki **bağa/eyleme** verilen addır.
- *İlişkisel veritabanı kavramı tabloların matematiksel bağıntılar olmasından gelir; aralarındaki oklardan türemez.*

### Dönüşümün Temel Kuralları
1. **Varlıklar Tablo Olur**:
   - `uye` tablosu: `(uye_numarasi, ad_soyad, telefon)`
   - `kitap` tablosu: `(demirbas_numarasi, baslik, yazar)`
2. **Çizgiler Bağımsız Kablo Değildir**:
   - Varlıklar arasındaki ilişkiler veritabanında fiziksel bağlantılarla değil, **Yabancı Anahtar (Foreign Key - FK)** sütunları ile kurulur.
3. **Yabancı Anahtar (FK) Tanımı**:
   - Bir tablodaki satırın, başka bir tablodaki tekil bir satırı (genellikle birincil anahtarı) işaret etmesini sağlayan referans sütunudur.

> **Soru**: Yabancı anahtar hangi tabloya, nasıl yerleştirilecek? Bu sorunun cevabını ilişkinin türü (1:N, N:M, 1:1) belirler.

::: {.notes}
Kavramsal model bittiğinde elimizde kutular ve çizgiler vardır; ancak veritabanı motorları çizgi tanımaz, sadece tablolar ve sütunlar tanır. Burada terminolojik bir ayrımı da kesinleştirelim: İngilizcedeki relation sözcüğü tablo anlamına gelir; relationship ise varlıklar arasındaki bağdır. İlişkisel veritabanı adı, tabloların bağıntı olmasından kaynaklanır. Varlıkları doğrudan birer tabloya dönüştürmek kolaydır: üye tablosu ve kitap tablosu oluşur. Asıl mühendislik kararı, varlıklar arasındaki çizgileri tablolara nasıl aktaracağımızdır. Bu aktarım yabancı anahtarlar aracılığıyla yapılır; anahtarın hangi tabloya konacağı ise ilişkinin kardinalitesine göre adım adım çözülür. İlk olarak 1:N ilişkileri inceleyelim.
:::

---

## 1:N İlişkilerin Dönüşümü: Çok Tarafına Yabancı Anahtar

### Senaryo: Raf (1) ↔ Kitap (N)
Bir rafta birden çok kitap durabilir; her kitap ise tek bir rafta yer alır.

### Seçenekleri Değerlendirelim
- **Seçenek 1: Yabancı anahtarı "1" tarafına (`raf` tablosuna) koymayı deneyelim:**
  - Rafta 100 kitap varsa, raf tablosundaki tek bir hücreye 100 farklı kitap numarası yazmamız gerekir. Bu durum atomiklik kuralını yıkar.
  - Alternatif olarak her kitap için raf satırını 100 kez kopyalarsak, raf adı ve konumu yüzlerce kez yinelenir; büyük veri tekrarı oluşur.
- **Seçenek 2: Yabancı anahtarı "çok" tarafına (`kitap` tablosuna) koyalım:**
  - `kitap` tablosuna `raf_kodu` (FK) sütunu eklenir.
  - Her kitap tek bir rafta durduğu için, kitap tablosundaki her satır tek bir `raf_kodu` taşır. Hücre bölünmez, raf bilgisi tekrar etmez.

```
[ raf ]                                      [ kitap ]
PK: raf_kodu                                 PK: demirbas_numarasi
    oda_no                                       baslik
                                             FK: raf_kodu  ───────> raf.raf_kodu
```

> **Kural**: 1:N ilişkilerin ilişkisel şemaya dönüşümünde yabancı anahtar daima **"çok" (N) tarafındaki tabloya** eklenir. Bağımsız ek tablo açılmaz.

::: {.notes}
1:N dönüşümünde iki seçeneğimiz vardır: Anahtarı 1 tarafına mı koyacağız, yoksa çok tarafına mı? 1 tarafına koymayı denersek, yani raf tablosuna kitap numarası yazmaya kalkarsak, raftaki elli kitabı tek bir hücreye virgüllerle sığdırmaya çalışırız ki bu ilişkisel modelin temel yapısını bozar. Ya da her kitap için raf kaydını tekrar tekrar yazarız ki bu da gereksiz veri tekrarı ve güncelleme çilesi demektir. Doğru ve temiz mekanizma, anahtarı çok tarafına koymaktır. Her kitap fiziksel olarak tek bir rafta durduğu için, kitap satırına rafın kodunu bir kez yazmak ilişkiyi kurmaya yeter. Ek tabloya gerek kalmaz. Şimdi çoka çok ilişkilere bakalım.
:::

---

## N:M İlişkilerin Dönüşümü: Basit Yaklaşımlar Neden Tıkanır?

### Senaryo: Üye (N) ↔ Kitap (M) (Ödünç Alma Eylemi)
Bir üye birden çok kitap alabilir; bir kitap zaman içinde birden çok üyeye verilebilir. Ayrıca bu eylemin `alis_tarihi` ve `iade_tarihi` nitelikleri vardır.

### Basit Yaklaşımların Çöküşü

```
Yaklaşım 1: Üye Tablosuna Kitap Bilgisi Eklemek
uye (uye_numarasi, ad_soyad, demirbas_numarasi)
└── Üye ikinci bir kitap aldığında ne olacak?
    ├── `demirbas_no_2`, `demirbas_no_3` sütunları açmak esnekliği yok eder.
    └── Üyeyi her kitap için yeni satır olarak yazmak üye bilgilerini sürekli tekrarlar.

Yaklaşım 2: Kitap Tablosuna Üye Bilgisi Eklemek
kitap (demirbas_numarasi, baslik, uye_numarasi)
└── Kitap ekimde Ahmet'e verildi (Ahmet yazıldı).
    Kasımda kitap Ayşe'ye verildiğinde Ayşe'nin numarası Ahmet'in üzerine yazılır.
    SONUÇ: Kitabın geçmişe dönük bütün ödünç hareketleri geri getirilemez biçimde silinir.
```

> **Sınır**: N:M ilişkiler, varlık tablolarından birinin içine yabancı anahtar eklenerek **çözülemez**.

::: {.notes}
Çoka çok ilişkileri 1:N gibi çözmeye çalışmak neden imkansızdır? Üye tablosuna kitap anahtarı koyarsak, öğrenci ikinci bir kitap aldığında ne yapacağız? Tabloya demirbaş_no_2, demirbaş_no_3 diye yapay sütunlar mı açacağız? Yoksa öğrencinin adını, soyadını, telefonunu her ödünçte yeni bir satır olarak kopyalayacak mıyız? İkisi de sistemi bozar. Tersini deneyelim: Kitap tablosuna üye anahtarı koyalım. Kitabı ekim ayında Ahmet aldı; kitap satırına Ahmet'in numarasını yazdık. Kasım ayında Ayşe ödünç aldığında ne olacak? Ayşe'nin numarası Ahmet'in numarasının üzerine yazılacak ve kütüphanenin bütün geçmiş ödünç arşivi yok olacaktır. Bu somut tıkanma, N:M ilişkilerin bambaşka bir mekanizma gerektirdiğini kanıtlar.
:::

---

## N:M İlişkilerin Çözümü: Bağlantı Tablosu (Junction Table)

### Çözüm Mekanizması: Üçüncü Tablo
İki varlık tablosu arasına bağımsız bir **bağlantı tablosu** (junction / bridge table) yerleştirilir. Kütüphanemizdeki bu tablo **`odunc`** tablosudur.

### `odunc` Bağlantı Tablosunun Anatomisi
1. Fiziksel bir nesneyi değil, gerçekleşen bir eylemi temsil eder.
2. İlişkili iki varlığın birincil anahtarlarını yabancı anahtar olarak barındırır:
   - `uye_numarasi` (FK ──> `uye.uye_numarasi`)
   - `demirbas_numarasi` (FK ──> `kitap.demirbas_numarasi`)
3. Eyleme özgü nitelikleri kendi üzerinde saklar: `alis_tarihi`, `iade_tarihi`.

```
[ uye ]                 [ odunc ] (Bağlantı Tablosu)                 [ kitap ]
uye_numarasi (PK) <───┐   uye_numarasi (FK)                           demirbas_numarasi (PK)
                      └── demirbas_numarasi (FK) ───────────────────>
                          alis_tarihi
                          iade_tarihi
```

### Mekanik Sonuç
- Çözülemeyen N:M ilişkisi, iki adet temiz **1:N ilişkiye** bölünmüş olur:
  - `uye` (1) ───< `odunc` (N)  *(Bir üyenin birden çok ödünç kaydı olabilir)*
  - `kitap` (1) ───< `odunc` (N)  *(Bir kitabın zaman içinde birden çok ödünç kaydı olabilir)*
- Tekillik: Ya `(uye_numarasi, demirbas_numarasi, alis_tarihi)` bileşik anahtarıyla ya da bağımsız bir `odunc_id (veya odunc_no)` anahtarıyla sağlanır.

::: {.notes}
N:M çıkmazının çözümü araya üçüncü bir tablo koymaktır. Bu tabloya bağlantı tablosu diyoruz. Kütüphanemizde bu tablo `odunc` tablosudur. Bu tablo bir nesneyi değil, gerçekleşen bir hareketi modeller. İçinde iki varlığın da birincil anahtarlarını yabancı anahtar olarak tutar. Ayrıca işleme ait alış tarihi ve iade tarihini de kendi sütunlarında saklar. Bu yapıyı kurduğumuz anda mucizevi bir dönüşüm gerçekleşir: Çözülemeyen o karmaşık N:M ilişki, iki adet tertemiz 1:N ilişkiye ayrışır. Bir üyenin odunc tablosunda onlarca satırı olabilir; bir kitabın da odunc tablosunda geçmişe dönük onlarca ödünç satırı birikebilir. Ne üye tablosundaki kişisel veriler tekrarlanır ne de kitabın geçmişi silinir. Şimdi 1:1 ilişkilerin dönüşümündeki kritik kurala bakalım.
:::

---

## 1:1 İlişkilerin Dönüşümü ve Tekillik Kısıtı

### Senaryo: Üye (1) ↔ Kütüphane Kartı (1)
Her üyenin en fazla bir kartı olabilir; her kart yalnızca tek bir üyeye aittir.

### Anahtar Yerleşimi
- Yabancı anahtar iki tablodan birine eklenebilir. Genellikle katılımı zorunlu olan veya daha sık sorgulanan tabloya konur.
- Örnek: `kutuphane_karti` tablosuna `uye_numarasi` (FK) ekleyelim.

### Kritik Sınır Koşulu: Yabancı Anahtar Tek Başına Yetmez
- Normal bir yabancı anahtar sütununa aynı değer birden fazla kez yazılabilir (tıpkı 1:N ilişkide olduğu gibi).
- Eğer ek bir kısıt koymazsak, `kutuphane_karti` tablosuna aynı `uye_numarasi` ile üç farklı kart satırı girilebilir.
- Bu durumda sistem farkında olmadan 1:N ilişkiye kayar ve bir üyenin birden çok kartı oluşur.

```
kutuphane_karti Tablosu
kart_id (PK) │ uye_numarasi (FK) │ kart_durumu
─────────────┼───────────────────┼────────────
K-501        │ 201               │ Aktif
K-502        │ 201               │ Aktif       <── Kısıt yoksa aynı üyeye ikinci kart açılabilir
```

> **Mekanizma**: 1:1 ilişkinin korunabilmesi için, yabancı anahtar sütununa kavramsal düzeyde bir **Tekillik (Benzersizlik - UNIQUE)** kuralı eklenmesi zorunludur.

::: {.notes}
1:1 ilişkilerde tasarımcıların en sık düştüğü tuzak şudur: Tablolardan birine yabancı anahtar koyunca işin bittiğini sanmak. Üye ile kütüphane kartı ilişkisinde kart tablosuna üye numarasını yabancı anahtar olarak ekledik diyelim. Normal bir yabancı anahtar sütunu neyi denetler? Sadece girilen üye numarasının üye tablosunda var olup olmadığını denetler. O numaranın kart tablosunda daha önce geçip geçmediğine bakmaz. Dolayısıyla kısıt koymazsanız, görevli aynı üye numarası için ikinci bir kart kaydı açabilir ve ilişki sessizce 1:N yapıya dönüşür. Bu bozulmayı engellemek için yabancı anahtar sütununa mutlaka bir tekillik, yani benzersizlik kuralı koymak şarttır. Şimdi üç ilişki türünün kurallarını tek bir tabloda karşılaştıralım.
:::

---

## İlişki Türlerinin Dönüşüm Karşılaştırması

| İlişki Türü | Örnek | Anahtar Yerleşimi | Şema Gereksinimi |
| --- | --- | --- | --- |
| **1:N** | Raf → Kitap | Yabancı anahtar "çok" tarafındaki (`kitap`) tabloya eklenir | Ek tablo gerekmez; tek bir FK sütunu yeterlidir |
| **N:M** | Üye ↔ Kitap | İki yabancı anahtarı barındıran bağımsız bağlantı tablosu (`odunc`) kurulur | İlişki iki adet 1:N bağa ayrışır; eylem nitelikleri bu ara tabloda saklanır |
| **1:1** | Üye ↔ Kart | Yabancı anahtar tablolardan birine (`kutuphane_karti`) eklenir | Yabancı anahtar sütununa tekillik (benzersizlik) kuralı konulması zorunludur |

<!-- Görsel İhtiyacı 2: İlişkisel şema tablosu ve yabancı anahtar bağlantıları. ÜYE, KİTAP ve ODUNC tabloları satır/sütun düzeninde gösterilir. ÜYE tablosundaki uye_numarasi (PK) ile KİTAP tablosundaki demirbas_numarasi (PK) sütunlarından çıkan oklar, ODUNC tablosundaki uye_numarasi (FK) ve demirbas_numarasi (FK) sütunlarına işaret eder. Amaç: N:M ilişkinin iki adet yabancı anahtar taşıyan bir bağlantı tablosuna nasıl dönüştüğünü sütun düzeyinde somutlaştırmak. -->

```
[ uye ]                                                [ kitap ]
PK: uye_numarasi ──┐                      ┌─────────── PK: demirbas_numarasi
    ad_soyad       │                      │                baslik
    telefon        │                      │                yazar
                   │   [ odunc ]          │
                   └──> FK: uye_numarasi  │
                        FK: demirbas_numarasi <──┘
                            alis_tarihi
                            iade_tarihi
```

::: {.notes}
Bu karşılaştırma tablosu, kavramsal tasarımdan ilişkisel şemaya geçişin tam özetidir. 1:N ilişkide ek tablo açılmaz, anahtar doğrudan çok tarafına gider. N:M ilişkide bağlantı tablosu kurmak kaçınılmazdır; eylemin nitelikleri ve her iki varlığın anahtarları buraya toplanır. 1:1 ilişkide ise anahtar tablolardan birine yazılır ama tekillik kuralıyla kilitlenir. Ekranda gördüğümüz ilişkisel şemada, üye ve kitap tablolarının birincil anahtarlarından çıkan okların odunc tablosundaki yabancı anahtar sütunlarına işaret ettiğini görüyoruz. Peki bu yabancı anahtarların işaret ettiği köprülerin zamanla bozulmasını ve havada kalmasını nasıl engelleriz? Yanıt referans bütünlüğüdür.
:::

---

## Referans Bütünlüğü ve Yetim Kayıt Riski

### Senaryo: Bozulma ve Tutarsızlık
Kütüphane görevlisi `odunc` tablosuna yeni bir satır girerken `uye_numarasi` alanına sehven `999` yazıyor. Ancak `uye` tablosunda `999` numaralı hiçbir üye kayıtlı değildir.

```
[ uye Tablosu ]                           [ odunc Tablosu ]
uye_numarasi                              uye_numarasi | demirbas_numarasi
────────────                              ─────────────┼──────────────────
201                                       201          | K-101
202                                       999          | K-102  <── Hedefi Yok (Yetim Kayıt)
(999 numaralı üye kaydı veritabanında yoktur)
```

### Yetim Kayıt (Orphan Record)
- Gösterdiği hedef kaydı bulunmayan sahipsiz verilere **yetim kayıt** denir.
- Kitap kütüphaneden çıkmış görünür; ancak kime verildiği belirsizdir. Bu durum veritabanında mantıksal tutarsızlık üretir ve ilişkisel güvenilirliği zedeler.

### Referans Bütünlüğü (Referential Integrity) Mekanizması
1. **Ekleme ve Güncelleme Koruması**: Bir yabancı anahtar sütununa değer girilirken, bu değerin hedef tablonun birincil anahtar sütununda mutlaka önceden var olması zorunludur. Var olmayan değerle kayıt eklenemez.
2. **Silme Koruması**: Bir üye silinmek istendiğinde veritabanı denetler: Üyenin `odunc` tablosunda açık bir kaydı varsa silme işlemi engellenir. Aksi halde ödünç satırları yetim kalır.

::: {.notes}
Yabancı anahtar tanımlamak sadece sütunun adını koymak demek değildir; arkasında referans bütünlüğü dediğimiz otomatik bir koruma kalkanı çalıştırır. Eğer bu kalkan olmasaydı, görevli ödünç tablosuna var olmayan bir üye numarası yazabilirdi. Kitap raftan gitmiş görünür ama alan kişinin kim olduğu veritabanında bulunamaz. Buna yetim kayıt diyoruz. Referans bütünlüğü iki yönlü çalışır: Birincisi, sisteme var olmayan bir üyenin ödünç kaydını sokmaz. İkincisi, elinde kitap olan bir öğrencinin üye kaydını veritabanından sildirmez. Böylece tablolar arasındaki köprülerin her an sağlam ve doğrulanabilir kalmasını güvenceye alır. Şimdi tüm bu yapıyı örnek veriler üzerinde test edelim.
:::

---

## Doğrulayalım: Şema Üzerinde Örnek Veri Adımları

### Tablo Şeması ve Başlangıç Verileri

**Tablo: `uye`**
| uye_numarasi (PK) | ad_soyad | telefon |
| --- | --- | --- |
| 201 | Ahmet Yılmaz | 05551112233 |
| 202 | Ayşe Kaya | 05552223344 |

**Tablo: `kitap`**
| demirbas_numarasi (PK) | baslik | yazar |
| --- | --- | --- |
| K-101 | Nutuk | Mustafa Kemal Atatürk |
| K-102 | Veritabanı Sistemleri | Ramez Elmasri |

**Tablo: `odunc`**
| uye_numarasi (FK) | demirbas_numarasi (FK) | alis_tarihi | iade_tarihi |
| --- | --- | --- | --- |
| 201 | K-101 | 2026-10-01 | 2026-10-15 |
| 201 | K-102 | 2026-10-05 | 2026-10-20 |
| 202 | K-101 | 2026-11-01 | NULL |

### Üç Tasarım Kriterinin Doğrulanması
1. **Çoklu Kitap Alma (1:N Davranışı)**: 201 numaralı Ahmet Yılmaz iki kitap almıştır. Ahmet'in adı ve telefonu `odunc` tablosunda tekrarlanmamış; yalnızca `uye_numarasi` taşınmıştır.
2. **Tarihçe ve Kitap Paylaşımı (Zaman Boyutu)**: K-101 numaralı kitap ekimde 201'e, kasımda 202'ye verilmiştir. Kitap bilgisi tek satır kalmış, ödünç geçmişi kayıpsız birikmiştir.
3. **Yetim Kayıt Denetimi**: `uye_numarasi = 209` ve `demirbas_numarasi = K-101` satırı eklenmek istendiğinde, sistem `uye` tablosunda 209'u bulamaz ve işlemi reddeder.

::: {.notes}
Tasarladığımız modelin kağıt üstünde doğru görünmesi yetmez; veri adımlarıyla doğrulanması gerekir. Tablolardaki somut satırları inceleyelim. Birinci doğrulama: 201 numaralı Ahmet iki ayrı kitap ödünç almış. Ahmet'in telefonunu değiştirmemiz gerekse sadece üye tablosundaki 201 satırını güncelleriz; ödünç tablosuna dokunmamız gerekmez. İkinci doğrulama: K-101 demirbaş numaralı Nutuk kitabı önce Ahmet tarafından alınıp iade edilmiş, ardından Ayşe tarafından alınmış ve şu an Ayşe'dedir (iade tarihi boştur). Kitabın başlığı hiçbir yerde gereksiz tekrarlanmamış ama ödünç hareketleri eksiksiz birikmiştir. Üçüncü doğrulama: Olmayan bir 209 numarasıyla satır eklemeye çalıştığımızda referans bütünlüğü işlemi anında reddeder. Tasarım başarıyla doğrulanmıştır. Şimdi sık yapılan hataları özetleyelim.
:::

---

## Sık Yapılan Hatalar ve Altında Yatan Mekanizmalar

### 1. Varlık ile Niteliği Bağlamdan Kopuk Değerlendirmek
- **Yanılgı**: Bir kavramın hep varlık ya da hep nitelik olduğunu sanmak.
- **Doğrusu**: Kararı iş kuralı verir — sadece ad saklanıyorsa nitelik, bağımsız nitelikleri varsa varlıktır.

### 2. Kardinalite ile Katılımı Birbirine Karıştırmak
- **Yanılgı**: Üst sınır ile alt sınırı eş tutmak.
- **Doğrusu**: Kardinalite üst sınırı (1/N), katılım alt sınırı (0/1) belirler; karıştırmak yanlış `NOT NULL` veya yanlış ilişkiye yol açar.

### 3. E-R Diyagramında Doğrudan Yabancı Anahtar Tanımlamak
- **Yanılgı**: Kavramsal kutunun içine karşı tablonun anahtarını sütun olarak eklemek.
- **Doğrusu**: Yabancı anahtar ilişkisel şemaya geçiş aracıdır; kavramsal düzeyde sadece öz nitelikler ve ilişki çizgileri olur.

### 4. N:M İlişkiyi Bağlantı Tablosuz Çözmeye Çalışmak
- **Yanılgı**: Bir tabloya karşı tarafın anahtarını ekleyerek ilişkiyi çözebileceğini sanmak.
- **Doğrusu**: Atomikliği yıkar veya geçmişi ezer; N:M mutlaka bağlantı tablosu gerektirir.

### 5. 1:1 İlişkide Yabancı Anahtarın Tek Başına Tekillik Sağladığını Sanmak
- **Yanılgı**: FK eklenince ilişkinin kendiliğinden 1:1 kalacağını varsaymak.
- **Doğrusu**: FK aynı değeri tekrar kabul edebilir; tekillik ancak `UNIQUE` kısıtıyla garanti edilir.

::: {.notes}
Bu beş hata, veritabanı modellemesinde en sık tekrarlanan kavram yanılgılarıdır. Bir kavramın varlık mı nitelik mi olduğunu ezbere değil kurumun ihtiyacına göre belirleriz. Kardinalite ile katılımı karıştırmamak gerekir; biri üst sınırdır, diğeri alt sınırdır. E-R diyagramı çizerken kutuların içine foreign key yazılmaz; foreign key ancak tablo aşamasında ortaya çıkar. Çoka çok ilişkiler mutlaka bağlantı tablosuyla iki adet bire çok ilişkiye dönüştürülmelidir. Bire bir ilişkilerde ise yabancı anahtarın üzerine tekillik kısıtı koyulması zorunludur. Bu kurallara dikkat edildiğinde, iş kurallarından sağlam ve tutarlı bir ilişkisel şemaya sorunsuz biçimde ulaşılır. Bir sonraki konumuzda bu şemalardaki veri tekrarlarını sistematik olarak gideren normalizasyon kurallarını inceleyeceğiz.
:::
