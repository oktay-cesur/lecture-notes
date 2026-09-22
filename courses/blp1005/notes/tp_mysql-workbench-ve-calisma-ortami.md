---
title: "MySQL Workbench ve Çalışma Ortamı"
subtitle: "BLP 1005 — Veritabanı Yönetim Sistemleri"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-06
description: MySQL Server ve Workbench görev ayrımı, bağlantı, şema, betik çalıştırma, hata teşhisi ve doğrulama.
tags:
  - blp1005
  - veritabani
  - hafta-4
---

## Ele Alınacak Temel Sorular
- Kağıt üzerindeki bir tablo tasarımı çalışan bir veri yönetim sistemine nasıl dönüştürülür?
- MySQL sunucusu ile MySQL Workbench istemcisi arasındaki kesin görev ayrımı nedir?
- "MySQL'i açtım" ifadesi teknik açıdan neden belirsizdir?
- Bir veritabanı bağlantısı (connection) hangi parametrelerle kurulur?
- Workbench çalışma ortamının üç temel yüzeyi (editör, sonuç ızgarası, çıktı alanı) hangi görevleri üstlenir?
- Etkin şema (active schema) kavramı neden bilinmek ve doğrulanmak zorundadır?
- Fiziksel veritabanı şeması salt okunur olarak sistem üzerinden nasıl incelenir?
- Uygulama sürecinde güvenli ve izole çalışma ilkeleri neden uygulanır?
- Hazır bir SQL betiği sunucu ortamında hangi adımlarla çalıştırılır?
- Karşılaşılan bir hata iletisi 4 aşamalı hiyerarşik teşhis zincirinde nasıl çözümlenir?
- Çalıştırılan bir veritabanı işleminin doğruluğu bağımsız olarak nasıl test edilir?
- SQL betiklerini yerel dosya olarak kaydetmek neden zorunludur?

::: {.notes}
Bu sunumda, önceki konularda kağıt üzerinde ve kavramsal düzeyde tasarladığımız ilişkisel veri modellerini çalışan bir veritabanı ortamına nasıl aktaracağımızı inceliyoruz. Bir tablonun sütunlarını, veri tiplerini ve anahtarlarını belirlemek tasarımın ilk adımıdır; ancak verinin fiziksel olarak depolanabilmesi, kısıtların denetlenebilmesi ve sorguların işletilebilmesi için gerçek bir yazılım altyapısına ihtiyaç duyarız. Bu ders boyunca ilişkisel veritabanı yönetim sistemi (VTYS) olarak MySQL'i, bu sistemle iletişim kurup görsel yönetim sağlayan istemci aracı olarak ise MySQL Workbench'i kullanacağız. Sunucu ile istemci arasındaki mimari ayrımı kuracak; bağlantı, şema seçimi, betik çalıştırma, hata teşhisi ve doğrulama iş akışını adım adım somutlaştıracağız. İlk olarak, tasarımdan çalışan sisteme geçiş ihtiyacını ele alıyoruz.
:::

---

## Kağıt Üzerindeki Tasarımdan Çalışan Sisteme Nasıl Geçilir?

### Mantıksal Tasarımın Sınırı
- Önceki konularda öğrenci kayıt yapısının mantıksal sütunlarını ve kurallarını modelledik.
- Birincil anahtarları belirledik, yabancı anahtar ilişkilerini ve kısıtları tanımladık.
- **Yapısal Gerçek**: Bir tablonun kağıt üzerinde, tahtada veya metin belgesinde tasarlanmış olması verilerin kalıcı olarak saklanması ve işlenmesi için tek başına yeterli değildir.

### Çalışan Bir Sistem İçin Gereken İki Temel Bileşen

```
[ Mantıksal Tasarım: Tablolar, Sütunlar, Anahtarlar ]
                          │
         ┌────────────────┴────────────────┐
         ▼                                 ▼
1. Veritabanı Yönetim Sistemi      2. Grafiksel İstemci Arayüzü
   (MySQL Sunucu Motoru)              (MySQL Workbench)
   - Verileri diskte saklar          - Komutları metin olarak alır
   - Bütünlük kısıtlarını denetler   - Sunucuya iletişimle iletir
   - Talepleri yürüten motordur      - Tabloları ve durumları gösterir
```

> **Temel İlke**: Veritabanı yönetimi tek bir monolitik programdan ibaret değildir; depolama ve yürütmeyi üstlenen bir arka plan motoru ile kullanıcı etkileşimini sağlayan bir ön yüz aracının birlikte çalışmasını gerektirir.

::: {.notes}
Öğrencilerin veritabanına başlarken en sık düştüğü yanılgılardan biri, kağıda çizilen bir E-R diyagramının veya Word belgesine yazılan bir tablonun kendiliğinden bir veritabanı oluşturduğunu düşünmeleridir. Oysa bir tasarım, yalnızca inşa edilecek yapının mimari projesidir. Bu projenin yaşayan bir sisteme dönüşebilmesi için iki ayrı yazılıma ihtiyaç vardır: İlki, işletim sistemi üzerinde arka planda çalışan, diskteki verileri organize eden, bellek yönetimini yapan ve bütünlük kurallarını zorlayan veritabanı motorudur; bu derste bunu MySQL üstlenir. İkincisi ise insanın bu motorla konuşmasını sağlayan arayüzdür; bunu da MySQL Workbench sağlar. Şimdi bu iki yazılım arasındaki görev sınırını netleştirelim.
:::

---

## Sunucu ile İstemci Arasındaki Görev Ayrımı Nedir?

```
+--------------------------+                         +-------------------------+                         +---------------------------+
|     MySQL Workbench      |                         |      MySQL Sunucusu     |                         |    Fiziksel Depolama      |
|        (İstemci)         |                         |      (VTYS Motoru)      |                         |       (Yerel Disk)        |
+--------------------------+                         +-------------------------+                         +---------------------------+
             │                                                    │                                                    │
             ├─── 1. SQL Komutu / İstek Gönderir ────────────────>│                                                    │
             │    (İletişim Kanalı: Port 3306)                    ├─── 2. Kısıtları Denetler, Veriyi Yazar/Okur ──────>│
             │                                                    │    (Fiziksel Dosya Giriş/Çıkış İşlemi)             │
             │                                                    │<── 3. Diskten Veri Bloklarını Alır ────────────────┤
             │<── 4. Sonuç Kümesi / Hata Durumu Bildirir ─────────┤                                                    │
             │    (Result Grid veya Hata Mesajı)                  │                                                    │
```

<!-- Görsel İhtiyacı 1: İstemci (MySQL Workbench), veritabanı sunucusu (MySQL) ve disk üzerindeki veritabanı dosyaları arasındaki üçlü akış şeması. Workbench kutusundan MySQL sunucusuna giden 'SQL Komutu / İstek' oku, sunucudan diskteki veritabanına giden 'Okuma / Yazma' işlemi ve sunucudan Workbench ekranına dönen 'Sonuç Kümesi / Hata İletisi' oku açıkça gösterilir. Amaç: Workbench'in veriyi saklayan değil, istek gönderen istemci konumunda olduğunu görselleştirmek. -->

### Görev Alanlarının Kesin Sınırları

- **MySQL Sunucusu (Server)**:
  - Veritabanını oluşturan fiziksel dosyaları disk üzerinde barındırır.
  - Arka planda kesintisiz bir işletim sistemi servisi olarak çalışır.
  - Bellek tahsisini, veri güvenliğini, eşzamanlılığı ve kısıt denetimlerini yürütür.
- **MySQL Workbench (Client)**:
  - Doğrudan veriyi saklayan bir depolama motoru değildir.
  - Kullanıcının SQL ifadelerini girdiği, bunları ağ/yerel iletişim kanalıyla sunucuya ilettiği grafiksel çalışma yüzeyidir.
  - Sunucudan dönen tabloları ve durum bildirimlerini düzenleyerek ekranda sunar.

::: {.notes}
Buradaki akış şeması dersin en temel mimari omurgasıdır. MySQL Workbench kesinlikle tabloları kendi bünyesinde saklamaz. Workbench bilgisayardan kaldırılsa dahi diskteki veritabanı dosyaları ve MySQL sunucusu varlığını sürdürür. Workbench yalnızca bir elçidir: Kullanıcının klavyeden yazdığı SQL cümlelerini paketler, yerel veya uzak iletişim kanalı üzerinden MySQL sunucusuna iletir. Sunucu bu komutu inceler, diske yazar veya diskten okur, ardından elde ettiği sonucu ya da oluşan hatayı tekrar istemciye geri gönderir. Ekranda gördüğümüz grid ve pencereler bu yanıtın görsel bir tercümesidir.
:::

---

## "MySQL'i Açtım" İfadesi Neden Belirsizdir?

### Günlük Konuşma Dili ile Teknik Gerçeklik Arasındaki Çelişki

| Günlük Konuşma İfadesi | Teknik Olarak Gerçekte Olan | Sistem Durumu |
| --- | --- | --- |
| *"MySQL'i açtım"* | Yalnızca MySQL Workbench istemci uygulaması başlatılmıştır. | Sunucu servisinin açık olup olmadığı henüz test edilmemiştir. |
| *"MySQL çalışmıyor"* | İstemci arayüzü sunucuya ulaşamamaktadır; arka plan servisi durmuş veya kapı erişimi engellenmiştir. | İstemci sağlamdır; fakat hedef sunucu oturumu kapalıdır. |

### İletişim Durumları

```
Durum 1 (Çalışan Sistem):
[ Workbench İstemcisi Açık ] ──( İletişim Kanalı Açık )──> [ MySQL Sunucu Servisi Aktif ]  ==> İŞLEM BAŞARILI

Durum 2 (Hatalı Sistem):
[ Workbench İstemcisi Açık ] ──( İletişim Kanalı Kapalı )──X  [ MySQL Servisi Durmuş / Kapalı ] ==> BAĞLANTI HATASI
```

- **Temel Çıkarım**: Arka planda çalışan MySQL sunucu servisi aktif değilse veya istemci ile sunucu arasında bir iletişim kanalı kurulmamışsa, Workbench açık olsa dahi hiçbir veritabanı nesnesine ulaşılamaz ve komut işletilemez.

::: {.notes}
Öğrencilerden laboratuvarda en sık duyulan cümle "Hocam MySQL'i açtım ama tablolarım gelmiyor" cümlesidir. Bu ifade teknik açıdan eksiktir; çünkü masaüstündeki simgeye tıklanıp açılan program MySQL değil, MySQL Workbench arayüzüdür. Eğer işletim sisteminin servisler bölümünde MySQL sunucusu çalışmıyorsa, Workbench tek başına bir iş göremez; çünkü bağlanabileceği ve istek gönderebileceği bir sunucu motoru yoktur. Bir sorunla karşılaştığımızda ilk sormamız gereken soru "Arayüz açık mı?" değil, "Arka plandaki MySQL servisi ayakta mı?" sorusudur.
:::

---

## Bağlantı Kurmak Ne Anlama Gelir?

### Bağlantı Profili (Connection Profile) Nedir?
- Workbench başlatıldığında kullanıcıyı doğrudan açık tablolar karşılamaz; ilk olarak bir **bağlantı** seçilmeli veya tanımlanmalıdır.
- Bağlantı profili, istemcinin hangi sunucuya, hangi iletişim kapısından ve hangi kullanıcı kimliğiyle başvuracağını tanımlayan parametreler kümesidir.

```
[ Workbench İstemcisi ]
           │
           │  1. Bağlantı Parametreleri:
           │     ├── Sunucu Adresi : localhost (127.0.0.1)
           │     ├── İletişim Kapısı: Port 3306 (MySQL Varsayılanı)
           │     └── Kimlik Bilgisi : Kullanıcı Adı + Parola
           │
           ▼
[ Hedef MySQL Sunucusu ] ──> 2. Kimlik Denetimi Yapar ──> 3. Oturumu Açar
```

### Bağlantının Zorunlu Bileşenleri
- **Sunucu Adresi ve Kapısı**: Uygulama aynı makinede yürütülüyorsa yerel adres (`localhost` ya da `127.0.0.1`) ve MySQL'in varsayılan iletişim kapısı olan **port 3306** kullanılır.
- **Kullanıcı Kimliği ve Parola**: Sunucunun hangi hesap adına işlem yapılacağını doğrulamak için talep ettiği güvenlik parametreleridir.

> **Kritik Kural**: Bağlantı açılmadan SQL editörüne yazılan ifadeler hiçbir hedefe ulaşamaz; çünkü komutun iletilebileceği etkin bir sunucu oturumu henüz kurulmamıştır.

::: {.notes}
Workbench'in ana ekranında gördüğümüz kutucuklar birer bağlantı profilidir. Bir bağlantı tanımlamak, istemciye "Sen şu IP adresindeki makineye git, 3306 numaralı kapıyı çal, şu kullanıcı adı ve parolayı vererek bir çalışma oturumu talep et" talimatını vermektir. Kendi bilgisayarımızda çalışırken sunucu da istemci de aynı işletim sistemi üzerinde bulunur; bu nedenle yerel adres olan localhost veya 127.0.0.1 kullanılır. Sunucu parolayı onayladığında bir ağ oturumu başlatılır. Bu oturum kurulmadan editörde yazılan komutların bir anlamı yoktur; çünkü gidecekleri bir hedef sunucu soketi mevcut değildir.
:::

---

## Çalışma Alanının Üç Yüzeyi: Kim Hangi Görevi Üstlenir?

```
+-------------------------------------------------------------------------+
| SQL Editor (Komut Taslağı ve Yazma Yüzeyi)                              |
|   SELECT ogrenci_no, ad_soyad FROM atolye_kayit;                        |
+-------------------------------------------------------------------------+
| Sonuç Izgarası / Result Grid (Veri Listeleme Yüzeyi)                    |
|   ogrenci_no | ad_soyad                                                 |
|   101        | Can Demir                                                |
|   102        | Zeynep Aydın                                             |
+-------------------------------------------------------------------------+
| Çıktı ve Hata Bildirim Alanı (Sunucu Durum ve Yanıt Yüzeyi)             |
|   Status: Action Output                                                 |
|   [✓] SELECT ogrenci_no... 2 row(s) returned (0.0008 sec)               |
+-------------------------------------------------------------------------+
```

<!-- Görsel İhtiyacı 2: MySQL Workbench ana çalışma ekranının üç işlevsel bölgesini gösteren kavramsal yerleşim şeması. Üst panelde komutların girildiği 'SQL Editor', orta panelde sorgu çıktılarının iki boyutlu tablo olarak belirdiği 'Sonuç Izgarası (Result Grid)' ve alt panelde sunucudan dönen durum iletilerini gösteren 'Çıktı ve Hata Bildirim Alanı' sınırlarıyla işaretlenir. Amaç: Kullanıcının komut yazma, veri okuma ve durum takip yüzeylerini işlevlerine göre ayırt etmesini sağlamak. -->

### Üç Yüzeyin İşlev Dağılımı

1. **SQL Editor**:
   - Komutların yazıldığı ve düzenlendiği metin alanıdır.
   - Kullanıcı çalıştırma komutunu verene kadar buradaki metinler istemci belleğinde **yerel taslak** olarak kalır.
2. **Sonuç Izgarası (Result Grid)**:
   - Yalnızca veri listeleme sorguları (`SELECT`) satır ve sütun döndürdüğünde aktifleşir.
   - İki boyutlu tablo düzeninde kayıtları görselleştirir.
3. **Çıktı ve Hata Alanı (Output Area)**:
   - Sunucunun her bir komuta verdiği yürütme durumunu bildirir.
   - İşlemin başarısı, süresi, etkilenen satır sayısı veya arıza durumunda sunucu hata iletisi burada listelenir.

::: {.notes}
Bir bağlantı açıldığında karşımıza çıkan ekranı üç temel çalışma yüzeyine ayırıyoruz. Bu bölgelerin görevlerini birbirine karıştırmamak hata teşhisinin birinci şartıdır. Üstteki SQL Editor yalnızca bir not defteridir; oraya komut yazmak sunucuda hiçbir şeyi değiştirmez. Ne zaman ki çalıştır düğmesine basarsınız, metin sunucuya gider. Ortadaki Sonuç Izgarası yalnızca sunucudan bir veri tablosu döndüğünde açılır. Alttaki Çıktı Alanı ise sunucunun resmi raporlama merkezidir. Çalıştırdığımız her komutun ardından gözümüz ilk olarak alttaki çıktı alanına gitmelidir: Yeşil onay mı geldi, kırmızı hata mı düştü? Şimdi bu üç yüzeyin teşhisteki rollerini karşılaştıralım.
:::

---

## Üç Yüzey Arasındaki İşlevsel Ayrım ve Teşhis Rolü

### Çalışma Yüzeyleri Karşılaştırma Matrisi

| Çalışma Yüzeyi | Temsil Ettiği Aşama | Girdi / Çıktı Niteliği | Hata Teşhisindeki Rolü |
| --- | --- | --- | --- |
| **SQL Editor** | İsteğin ne olduğunu tanımlar | İstemcide hazırlanan yerel SQL metni | Sözdizimi hatalarının yazıldığı ve düzeltildiği yerdir. |
| **Sonuç Izgarası** | İsteğin getirdiği veriyi gösterir | Sunucudan dönen dinamik satır ve sütunlar | Yalnızca veri döndüren sorgularda kontrol edilir; hata durumunda boş kalır. |
| **Çıktı ve Hata Alanı** | İsteğin sunucudaki sonucunu bildirir | Sunucu durum iletisi, hata kodu, çalışma süresi | **Birinci teşhis noktasıdır**: Arızanın türü ve kaynağı doğrudan buradan okunur. |

### Teşhis Kuralı: Boş Izgara Neyi Gösterir?
- Bir sorgu çalıştırıldığında sonuç ızgarasında satır görünmemesi verilerin silindiği anlamına gelmez.
- Komut sunucuda bir kısıta, adlandırma hatasına veya sözdizimi arızasına takılmış olabilir.
- **Doğru Refleks**: Sonuç ızgarasına değil, doğrudan alt kısımdaki çıktı bildirim alanına bakılmalıdır.

::: {.notes}
Hata teşhisinde yapılan en büyük yanlış, öğrencinin gözünü sonuç ızgarasına dikip "Hocam tablom gelmedi, her şey silindi mi?" paniğine kapılmasıdır. Sonuç ızgarası bir hata göstergesi değildir; o yalnızca başarılı olmuş ve satır döndüren sorguların ekranıdır. Bir komut arızalandığında sonuç ızgarası güncellenmez veya boş görünür. Asıl teşhis verisi en alttaki çıktı alanındadır. Orada sunucu bize kırmızı bir simgeyle açıkça hatanın nedenini söyler: "Böyle bir tablo yok", "Parantez eksik" veya "Şema seçilmedi". Dolayısıyla teşhis refleksimiz her zaman editörden çıktı alanına, oradan da gerekiyorsa sonuç ızgarasına doğru akmalıdır.
:::

---

## Etkin Şema Neden Bilinmek Zorundadır?

### Çoklu Şema Mimarisi
- Bir MySQL sunucusu üzerinde birden fazla bağımsız veritabanı (şema) aynı anda barınabilir.
- Örneğin aynı sunucu içinde hem `kutuphane` şeması hem de `ogrenci_isleri` şeması yan yana varlığını sürdürür.

```
+-----------------------------------------------------------------+
|                       MySQL Sunucusu                            |
|                                                                 |
|   ┌───────────────────────────┐     ┌────────────────────────┐  |
|   | Şema: atolye_db (ETKİN)   |     | Şema: universite_db    |  |
|   | ├── atolye_kayit tablosu  |     | ├── ogrenci tablosu    |  |
|   | └── atolye_liste tablosu  |     | └── ders tablosu       |  |
|   └───────────────────────────┘     └────────────────────────┘  |
+-----------------------------------------------------------------+
```

### Etkin Şema (Active Schema) Nedir?
- Sunucu oturumunda üzerinde işlem yapılacağı varsayılan güncel veritabanına **etkin şema** denir.
- Sunucu, tablo adını aldığında bu tabloyu hangi şemanın sınırları içinde arayacağını bilmek zorundadır.

### Tıkanma Senaryosu: Şema Seçilmezse Ne Olur?
- Komut biçimsel açıdan tamamen doğru olabilir:
  ```sql
  SELECT * FROM atolye_kayit;
  ```
- Eğer etkin şema belirlenmemişse sunucu sorguyu durdurur:
  - Sunucu uyarısı: `Error Code: 1046. No database selected`
- Eğer yanlış şema etkinse sunucu tabloyu bulamaz:
  - Sunucu uyarısı: `Error Code: 1146. Table 'universite_db.atolye_kayit' doesn't exist`

::: {.notes}
MySQL sunucusu tek bir çekmeceden ibaret değildir; içinde çok sayıda bağımsız çekmece (şema) barındıran bir dolaptır. Siz sunucuya "Bana atolye_kayit tablosunu getir" dediğinizde, sunucu haklı olarak "Hangi çekmecenin içindeki atolye_kayit tablosu?" diye sorar. İşte oturum açıldığında hangi çekmecede çalışacağımızı belirtmeye etkin şema seçimi diyoruz. Workbench sol tarafındaki schemas panelinde çift tıklanarak kalın (bold) hale getirilen şema, o anki etkin şemadır. Şema seçilmeden yazılan bir SQL sorgusu biçimsel açıdan ne kadar doğru olursa olsun sunucu tarafından "No database selected" denilerek reddedilir.
:::

---

## Fiziksel Şema Yapısı Salt Okunur Olarak Nasıl İncelenir?

### Gezgin (Schema / Object Explorer) Paneli
- Workbench arayüzünün sol tarafında yer alan gezgin paneli, sunucudaki tüm şemaları, tabloları, sütunları ve kısıtları hiyerarşik bir ağaç yapısında listeler.
- Kavramsal tasarımın fiziksel veritabanındaki karşılığını doğrulamak için kullanılır.

```
[ Schemas Gezgin Ağacı ]
└── atolye_db (Etkin Şema)
    └── Tables
        └── atolye_kayit
            ├── Columns
            │   ├── ogrenci_no (int, PK)  ── [ Birincil Anahtar Simgesi ]
            │   ├── ad_soyad (varchar)
            │   ├── telefon (varchar)
            │   └── kayit_tarihi (date)
            └── Indexes
```

### Gezgin Üzerinden Okunan Yapısal Öğeler
- **Tablo ve Sütun İsimleri**: Tasarlanan alanların (`ogrenci_no`, `ad_soyad`, `telefon`, `kayit_tarihi`) fiziksel olarak var olduğu doğrulanır.
- **Sütun Kısıtları ve Simgeler**: Tekil kimliği sağlayan birincil anahtar sütununun yanında anahtar simgesi yer alır.

> **Salt Okunur İnceleme İlkesi**: Bu aşamadaki rol yeni bir tablo oluşturmak veya yapıyı değiştirmek değildir; önceden kurulmuş bir veritabanının bileşenlerini doğrudan sistem kataloğundan okuma alışkanlığı kazanmaktır.

::: {.notes}
Workbench'in sol panelindeki Schema gezgini, kağıt üzerindeki tasarımımızın somutlaşmış halini gösteren katalog penceresidir. Burada ağaç yapısını genişleterek `Tables` altına bakarız. Tablomuzun adını, altındaki sütunları ve bu sütunların veri tiplerini görürüz. Sütunun yanındaki sarı anahtar simgesi, o alanın `PRIMARY KEY` olarak tanımlandığını gösterir. Bu aşamada öğrencilerden beklenen şey arayüzden butonlara basarak tablo tasarlamak değildir; oluşturulmuş bir tablonun katalog yapısını doğru okuyabilmek ve fiziksel durumunu kontrol edebilmektir.
:::

---

## Uygulamada Güvenli ve İzole Çalışma İlkeleri

```
[ Güvenli ve İzole Çalışma Düzeni ]
├── 1. İzole Yerel Şema       ──> Canlı/üretim sisteminden bağımsız, yerel laboratuvar ortamı
├── 2. Kurgusal Veri Seti     ──> Gerçek kimlik, telefon ve parola içermeyen güvenli örnekler
└── 3. Yeniden Kurulabilirlik ──> Bozulma anında tek betikle temiz duruma dönebilme güvencesi
```

### Güvenli Çalışmanın Üç Temel İlkesi

1. **Yerel ve İzole Şema**:
   - Çalışmalar kurumsal veya canlı sistemler üzerinde değil, öğrenciye özel tanımlanmış yerel test şemalarında yürütülür.
   - Hatalı veya yıkıcı bir komut (`DROP`, `DELETE`) gerçek sistemlere zarar veremez.
2. **Kurgusal Veri Kullanımı**:
   - Gerçek kişilere ait T.C. kimlik numaraları, gerçek telefonlar veya şahsi parolalar betiklere dahil edilmez.
   - Tüm uygulamalar bütünüyle senaryo gereği üretilmiş kurgusal kayıtlar üzerinden yürütülür.
3. **Yeniden Kurulabilirlik (Reproducibility)**:
   - Veritabanı çalışmaları deneme-yanılma sürecinde bozulabilir.
   - Sistem gerektiğinde tamamen sıfırlanabilmeli ve hazır bir kurulum betiği çalıştırılarak temiz durumdan tekrar ayağa kaldırılabilmelidir.

::: {.notes}
Veritabanı yöneticiliğinin ve yazılım geliştirmenin en temel meslek ahlakı güvenlik ve izolasyondur. Öğrencilerimizin ilk andan itibaren kazanması gereken refleks, gerçek kişisel verileri hiçbir zaman test veritabanlarında kullanmamaktır. İkinci ilke ise yeniden kurulabilirliktir: Bir veritabanında çalışırken "Eyvah yanlış bir şey sildim, her şey mahvoldu" korkusu yaşanmamalıdır. Eğer sistem doğru tasarlanmışsa ve elinizde temiz bir SQL kurulum betiği varsa, şemayı silip betiği yeniden çalıştırarak saniyeler içinde ilk temiz durumunuza dönebilirsiniz. Şimdi bu hazır betiklerin nasıl çalıştırıldığına bakalım.
:::

---

## Hazır Bir SQL Betiği Nasıl Çalıştırılır?

### SQL Betiği (`.sql`) Nedir?
- Veritabanı üzerinde sırayla yürütülmesi amaçlanan SQL komutlarını bir arada barındıran düz metin dosyasıdır.

### 4 Adımlı Yürütme Döngüsü

```
[ 1. Betik Dosyasını Aç ]  ──> .sql dosyasını Workbench SQL Editor alanına yükle
            │
            ▼
[ 2. Ortamı Doğrula ]      ──> Bağlantının aktif ve doğru şemanın etkin olduğunu denetle
            │
            ▼
[ 3. Komutları İlet ]      ──> Çalıştır komutuyla ifadeleri sırayla sunucuya gönder
            │
            ▼
[ 4. Yanıtı Takip Et ]     ──> Çıktı alanında her bir komutun durum iletisini incele
```

- **Öğretim Hedefi**: Bu aşamada amaç karmaşık komutları sıfırdan ezbere yazmak değildir; hazırlanmış bir betiğin sunucuya nasıl iletildiğini, tabloların nasıl oluşturulduğunu ve sunucunun durum yanıtlarının nasıl izlendiğini kavramaktır.

::: {.notes}
Bir `.sql` dosyası sihirli bir ikili dosya değildir; bildiğimiz düz metin belgesidir. İçinde sırayla çalıştırılacak SQL komutları yer alır. Workbench'te bir betiği çalıştırmak dört aşamalı disiplinli bir döngüdür. İlk olarak dosya editöre yüklenir. İkinci adımda en kritik kontrol yapılır: Bağlantım açık mı ve doğru şemada mıyım? Üçüncü adımda çalıştırma simgesine basılarak komutlar sunucuya iletilir. Dördüncü adımda ise alt kısımdaki çıktı paneli izlenir. Her bir `CREATE` veya `INSERT` satırının karşısında yeşil bir onay işareti belirmeli, kaç satırın eklendiği kontrol edilmelidir. Peki bir satırda hata ile karşılaşılırsa ne yapılır?
:::

---

## Hata İletisi Hangi Sorunu İşaret Ediyor? 4 Aşamalı Teşhis Zinciri

```
[ 1. Bağlantı Düzeyi Kontrolü ]   ──> Sunucu servisi çalışıyor mu? Port 3306 erişilebilir mi?
               │ (Bağlantı Başarılı)
               ▼
[ 2. Etkin Şema Düzeyi Kontrolü ] ──> Doğru veritabanı etkinleştirildi mi (bold şema)?
               │ (Şema Seçili)
               ▼
[ 3. Nesne Adı Düzeyi Kontrolü ]  ──> Tablo ve sütun adları şemadakiyle birebir örtüşüyor mu?
               │ (İsimler Doğru)
               ▼
[ 4. Sözdizimi Düzeyi Kontrolü ]  ──> SQL anahtar sözcükleri, parantezler ve noktalı virgül kurallara uygun mu?
```

<!-- Görsel İhtiyacı 3: Bir hata iletisiyle karşılaşıldığında izlenecek dört adımlı teşhis akış şeması. Sırasıyla '1. Bağlantı Aktif mi?' kontrolünden başlayıp, '2. Doğru Şema Etkin mi?', '3. Tablo ve Sütun Adları Birebir Doğru mu?' ve '4. SQL Sözdizimi Kurallara Uygun mu?' karar kutularına ilerleyen mantıksal kontrol zinciri gösterilir. Amaç: Rastgele komut değiştirmek yerine hatayı katmanlarına göre sıralı teşhis etme yöntemini göstermek. -->

> **Teşhis Disiplini**: Hata mesajı alındığında rastgele komut değiştirmek veya paniklemek yerine sorun katmanlarına göre sıralı kontrol zinciriyle teşhis edilir.

::: {.notes}
Laboratuvarda öğrencilerin en sık yaptığı hatalardan biri, ekranda kırmızı bir hata mesajı gördüklerinde hata metnini okumadan SQL kodundaki rastgele virgülleri veya sözcükleri değiştirmeye başlamalarıdır. Bu deneme-yanılma yaklaşımı zaman kaybettirir ve yeni hatalar üretir. Doğru mühendislik yaklaşımı, hatayı dış katmandan iç katmana doğru dört adımlı bir filtreyle elemektir: Komut sunucuya ulaştı mı? Şema doğru mu? Tablo adı doğru mu? En son basamakta sözdizimi kuralları doğru mu? Şimdi bu dört katmanda karşılaşılan tipik arıza mekanizmalarını inceleyelim.
:::

---

## Hata Katmanlarının Ayrıntılı Mekanizmaları

### 1. Bağlantı Düzeyi Hataları
- **Belirti**: Komut sunucuya hiç ulaşamaz. İstemci hedef sunucuyla iletişim kurulamadığını bildirir.
- **Mekanizma**: Arka plandaki MySQL sunucu servisi durmuş, kapatılmış veya bağlantı adresi/kapısı yanlış girilmiştir.

### 2. Etkin Şema Düzeyi Hataları
- **Belirti**: Sunucuya erişim vardır; ancak `No database selected` iletisi döner.
- **Mekanizma**: Sunucu oturumu açılmıştır fakat komutun hangi şema içinde aranacağı belirtilmemiştir.

### 3. Nesne Adı Düzeyi Hataları
- **Belirti**: `Table 'atolye_db.ogrenci_kayit' doesn't exist` uyarısı alınır.
- **Mekanizma**: Şema doğrudur; ancak SQL ifadesindeki tablo adı veritabanında kayıtlı adla eşleşmiyordur (`atolye_kayit` yerine yanlışlıkla `ogrenci_kayit` yazılmıştır). Sorun SQL dilinde değil, tanımlayıcı adındadır.

### 4. Sözdizimi Düzeyi Hataları
- **Belirti**: `You have an error in your SQL syntax` iletisi döner.
- **Mekanizma**: SQL dil kuralları ihlal edilmiştir; anahtar sözcük yanlış sırada yazılmış, parantez kapatılmamış veya noktalı virgül unutulmuştur.

::: {.notes}
Arıza iletisi ile altta yatan sistem durumu arasındaki ilişki doğrudan bir nedensellik zincirine dayanır. Bağlantı hatasında arıza işletim sistemi ve ağ katmanındadır. Şema hatasında arıza oturum bağlamındadır. Üçüncü katman olan nesne adı hatası ise en kritik ayrımdır: Öğrenci `SELECT * FROM ogrenci_kayit` yazar ve hata alır; ardından `SELECT` sözcüğünü silip yeniden yazmaya çalışır. Oysa `SELECT` sözcüğünde hiçbir hata yoktur; veritabanındaki tablonun adı `atolye_kayit`tır. Dördüncü katmanda ise SQL gramerinin kendisi bozulmuştur. Hatayı bu dört kategoriden hangisine ait olduğuna göre ayırdığımızda çözüme doğrudan ulaşırız.
:::

---

## Çalıştırılan İşlem Nasıl Doğrulanır?

### Hata İletisinin Olmaması Yeterli midir?
- Bir betik yürütüldükten sonra kırmızı hata iletisiyle karşılaşılmaması, tablonun ve verilerin hedeflenen biçimde oluştuğunu tek başına kanıtlamaz.
- İşlemin fiziksel etkisini **bağımsız bir doğrulama adımıyla** test etmek gerekir.

### Doğrulayalım: Bağımsız Sorgulama Adımı
- Öğrenci kayıt betiği çalıştırıldıktan sonra, SQL Editor alanına yalnızca tablodaki verileri okumaya yarayan temel bir sorgu yazılır:

```sql
SELECT ogrenci_no, ad_soyad, telefon, kayit_tarihi FROM atolye_kayit;
```

### Sonuç Izgarasında Gözlenen Doğrulama Tablosu

| ogrenci_no | ad_soyad | telefon | kayit_tarihi |
| --- | --- | --- | --- |
| 101 | Can Demir | 05551112233 | 2026-09-10 |
| 102 | Zeynep Aydın | 05552223344 | 2026-09-11 |
| 103 | Mert Doğan | 05553334455 | 2026-09-11 |

> **Doğrulama Sonucu**: Sonuç ızgarasında beklenen satırların listelenmesi; sunucu bağlantısının aktif olduğunu, doğru şemanın seçildiğini, tablonun başarıyla üretildiğini ve kayıtların disk üzerine yazıldığını eşzamanlı olarak kanıtlar.

::: {.notes}
Her başarılı teknik işlemin ardından eğitmen profilimizin temel refleksi olan "Doğrulayalım" adımını işletiyoruz. Bir kurulum betiği çalıştırdınız ve altta yeşil ışık yandı; bu yeterli midir? Hayır. Sistem gerçekten istediğimiz tabloyu kurdu mu ve verileri yerleştirdi mi? Bunu test etmenin en doğrudan yolu, sadece okuma yapan bir `SELECT` sorgusu çalıştırmaktır. Sorguyu çalıştırdığımızda sonuç ızgarasında tasarladığımız Can Demir, Zeynep Aydın ve Mert Doğan kayıtlarını görüyorsak, dört bağımsız zincir aynı anda doğrulanmış olur: Bağlantı kurulmuştur, şema doğrudur, tablo fiziksel olarak açılmıştır ve veriler diske kaydedilmiştir.
:::

---

## Betiği Dosya Olarak Kaydetmek Neden Zorunludur?

### SQL Editor Geçici Bir Çalışma Alanıdır
- SQL Editor penceresi işletim sisteminin geçici bellek (RAM) tamponudur.
- Editörde yazılan veya düzenlenen komutlar yerel diske kaydedilmediği takdirde oturum veya program kapatıldığında tamamen kaybolur.

```
[ SQL Editor Penceresi (Geçici Bellek) ]
                   │
         ┌─────────┴─────────┐
         ▼                   ▼
[ Diske Kaydedilmezse ]   [ .sql Olarak Kaydedilirse ]
  - Oturum kapanınca        - Tekrarlanabilir çalışma ortamı
    metinler kaybolur       - Arşivleme ve ekip içi paylaşım
  - Emek ve kod zayiatı     - Temiz sıfırdan yeniden kurabilme
```

### Kayıtlı Betiklerin Sağladığı Üç Temel Güvence
1. **Tekrarlanabilirlik**: Aynı veritabanı yapısını farklı bir bilgisayarda veya laboratuvarda tek bir tıklamayla yeniden kurabilme imkanı verir.
2. **Arşivleme**: Yapılan tasarım adımlarının sürümünü ve geçmişini saklar.
3. **Temiz Sıfırlama**: Veritabanı bozulduğunda sistemi sıfırdan ayağa kaldırmanın tek anahtarı kaydedilmiş betik dosyalarıdır.

::: {.notes}
Öğrencilerin yaşadığı bir diğer büyük hayal kırıklığı, laboratuvar sonunda bilgisayarı kapatıp ertesi hafta geldiklerinde editördeki tüm kodların silindiğini görmeleridir. Veritabanı motoru kendisine gelen tabloları ve satırları diske kaydeder; ancak arayüz ekranında açık duran SQL yazılarını veritabanı saklamaz. Editördeki metin yerel bir `.sql` dosyası olarak kaydedilmezse pencere kapandığı anda yok olur. Bu nedenle her çalışmanın sonunda dosya diske kaydedilmeli, taşınabilir bir arşiv haline getirilmelidir.
:::

---

## Sık Yapılan Hatalar: Arayüz ve Sunucu Yanılgıları

### 1. MySQL Workbench'i Açmayı Sunucuyu Başlatmakla Eşit Görmek
- **Kavram Yanılgısı**: Ekranda Workbench penceresi açıldığında veritabanı sunucusunun da otomatikman hazır olduğunu varsaymak.
- **Teknik Mekanizma**: Workbench yalnızca istemci arayüzüdür. Bilgisayarda çalışan bağımsız bir MySQL sunucu servisi bulunmadığı sürece arayüzün açık olması veritabanı işlemlerini yürütmeye yetmez; komutların işlenebilmesi için arka plandaki servis sürecinin aktif olması şarttır.

### 2. Sorgu Sonucunun Dönmemesini Tablonun Silindiği Şeklinde Yorumlamak
- **Kavram Yanılgısı**: Çalıştırılan bir komut başarısız olduğunda sonuç ızgarasında veri göremeyince tabloların veya verilerin silindiğini düşünmek.
- **Teknik Mekanizma**: Çalıştırılan komut sunucu tarafında bir hataya takıldığında sonuç ızgarasında yeni bir tablo oluşturulmaz. Bu durum verilerin silindiğini göstermez; işlemin yürütülemediğini gösterir. Doğru bilgiye ulaşmak için sonuç ızgarasına değil, çıktı alanındaki hata iletisine bakılmalıdır.

::: {.notes}
Buradaki iki hata arayüz ile sunucu arasındaki zihinsel modelin oturmaması durumunda ortaya çıkar. Tekrar vurgulayalım: Workbench bir araba gösterge paneli gibidir; panelin ışıklarının yanması arabanın motorunun çalıştığı anlamına gelmez. Motor arka plandaki MySQL servisidir. İkinci yanılgı da aynı kökten beslenir: Göstergede hız sıfır görünüyorsa araba yok olmuş demek değildir; motor stop etmiş olabilir. Sonuç ızgarasında satır göremeyen öğrencinin paniğe kapılmak yerine alttaki bildirim alanını okuması bu dersin en kritik davranış kazanımlarından biridir.
:::

---

## Sık Yapılan Hatalar: Nesne ve Saklama Yanılgıları

### 3. Nesne Adı Hatasını SQL Sözdizimi Kuralı Hatasıyla Karıştırmak
- **Kavram Yanılgısı**: Sunucu `Table doesn't exist` iletisi verdiğinde komutun SQL yazım kurallarını (`SELECT`, `FROM` sözdizimini) değiştirmeye çalışmak.
- **Teknik Mekanizma**: `SELECT` veya `FROM` sözdizimi tümüyle standartlara uygun olabilir. Ancak aranan tablo seçili şemada yer almıyorsa ya da adı yanlış yazılmışsa (`atolye_kayit` yerine `ogrenci_kayit`) sorun SQL gramerinde değil, katalogdaki nesne adlandırmasındadır.

### 4. SQL Editöründe Görünen Komutların Veritabanında Saklandığını Sanmak
- **Kavram Yanılgısı**: Editör ekranında açık duran SQL metinlerinin veritabanı motoru tarafından otomatik olarak veritabanı içine kaydedildiğini düşünmek.
- **Teknik Mekanizma**: Veritabanı sunucusu kendisine iletilen tabloları ve verileri depolar; ancak istemci ekranında açık duran SQL metinlerini kendi bünyesinde saklamaz. Betik dosyası yerel olarak diske kaydedilmediğinde pencere kapatıldığı anda yazılmış olan komut geçmişi bütünüyle kaybolur.

::: {.notes}
Nesne adı hatasını sözdizimiyle karıştırmak çok yaygın bir vakit kaybı nedenidir. Öğrenci "Table doesn't exist" uyarısını gördüğünde "Acaba SELECT'i büyük harfle mi yazsaydım, tırnak işareti mi koysaydım?" gibi gereksiz arayışlara girer. Oysa sunucu açıkça söylemektedir: Sözdizimini anladım, ancak bana sorduğun isimde bir tablo bu şemada yok. Dördüncü hata ise veri ile kodun saklama yerini ayırmaktır. Veriler sunucunun diskinde saklanır; SQL betiklerimiz ise kendi geliştirme klasörümüzde dosya olarak saklanmalıdır. Bu iki depolama alanı birbirinden tamamen bağımsızdır.
:::

---

## İş Akışı Özeti: Tasarımdan Çalışan Şemaya Uçtan Uca Süreç

```
[ 1. Bağlantı Profili ] ──> localhost:3306 ve kullanıcı kimliğiyle sunucu oturumu aç
            │
            ▼
[ 2. Etkin Şema ]       ──> İşlem yapılacak hedef veritabanını doğrula (çift tıkla)
            │
            ▼
[ 3. SQL Editor ]       ──> Hazır .sql betiğini yükle veya komut taslağını yaz
            │
            ▼
[ 4. Çalıştırma ]       ──> Komutları iletişim kanalı üzerinden sunucuya ilet
            │
            ▼
[ 5. Durum Takibi ]     ──> Çıktı alanında yeşil onay / hata durumunu incele
            │
            ▼
[ 6. Bağımsız Kontrol ] ──> SELECT sorgusu ile sonuç ızgarasında veriyi doğrula
            │
            ▼
[ 7. Betik Arşivleme ]  ──> Çalışmayı yerel diske .sql dosyası olarak kaydet
```

> **Bir Sonraki Adım**: Çalışma ortamı işleyişi doğrulandıktan sonra, SQL Veri Tanımlama Dili (DDL) komutlarıyla sıfırdan tablolar ve kısıtlar oluşturma aşamasına geçilir.

::: {.notes}
Bu özet şema, bugün incelediğimiz bütün kavramsal adımları tek bir mantıksal hatta birleştiriyor: Bağlantı kurulur, şema seçilir, editöre betik alınır, sunucuya gönderilir, çıktı alanından durumu kontrol edilir, SELECT ile fiziksel etkisi doğrulanır ve son olarak betik diske kaydedilir. Bu yedi adımlı döngü, yalnızca bu dersin değil, profesyonel hayatınız boyunca herhangi bir veritabanı yönetim sistemiyle çalışırken izleyeceğiniz evrensel çalışma disiplinidir. Artık çalışma ortamımızı, sunucu-istemci mimarisini ve hata teşhis mekanizmalarını tam olarak anladığımıza göre, bir sonraki aşamada kendi tablolarımızı DDL komutlarıyla sıfırdan inşa etmeye hazırız.
:::
