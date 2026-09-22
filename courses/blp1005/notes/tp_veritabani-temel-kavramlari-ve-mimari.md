---
title: "Veritabanı Temel Kavramları ve Mimari"
subtitle: "BLP 1005 — Veritabanı Yönetim Sistemleri"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-09-15
description: Veri, bilgi, düz dosya sınırları, VTYS, ilişkisel yapı ve istemci-sunucu mimarisinin temelleri.
tags:
  - blp1005
  - veritabani
  - hafta-1
---

## Ele Alınacak Temel Sorular
- Veri ile bilgi arasındaki fark nedir?
- Kayıtları düz dosyalarda tutmak neden yetersiz kalır?
- Veri tablo, satır ve sütun düzeninde nasıl yapılandırılır?
- Veritabanı ile Veritabanı Yönetim Sistemi (VTYS) aynı şey midir?
- İstemci ile sunucu arasında nasıl bir iş bölümü vardır?
- Aynı isimde iki kayıt çakıştığında birincil anahtar sorunu nasıl çözer?

::: {.notes}
Bu sunumda veritabanı yönetim sistemlerinin ortaya çıkış gerekçelerini, temel yapı taşlarını ve çalışma mimarisini adım adım inceliyoruz. Günlük hayatta sıkça birbirinin yerine kullanılan kavramları birbirinden ayıracak; verinin saklanmasından yönetilmesine, istemci-sunucu iletişiminden veri bütünlüğünün sağlanmasına kadar uzanan temel mekanizmaları somut senaryolar üzerinden kuracağız. İlk olarak, sistemlerin işlemeye başladığı en temel yapı taşı olan veri ve bilgi kavramlarıyla başlıyoruz.
:::

---

## Veri ile Bilgi Arasındaki Fark Nedir?

### Ham Veri (Data)
- Bağlamı, ilişkisi ve amacı henüz tanımlanmamış yalın kayıt.
- **Örnek Değer**: `"18"`
  - Bir öğrencinin yaşı mı?
  - Bir sınavın başarı notu mu?
  - Bir ürünün stok adedi mi?
  - Bir atölye kapısının numarası mı?

### Anlamlı Bilgi (Information)
- Belirli bir amaç doğrultusunda düzenlenen, ilişkilendirilen ve karara dayanak oluşturan anlamlı bütün.
- **Bağlamlandırılmış Sonuç**: *"Ahmet adlı öğrencinin haftalık laboratuvar katılım saati 18'dir."*

> **Kavramsal Çıkarım**: Ham veri tek başına bir işlem veya karar üretemez; kurumsal işleyiş verinin toplanmasını ve doğru bağlamla bilgiye dönüştürülmesini gerektirir.

::: {.notes}
Ekranda veya kağıtta gördüğümüz tekil bir sayı, arkasında bir etiket veya ilişki yoksa bize hiçbir şey söylemez. "18" değeri tek başına bir belirsizliktir; yaş da olabilir, kapı numarası da. Ne zaman ki bu değeri bir öğrenciyle ve laboratuvar katılım saatiyle ilişkilendiririz, o zaman bir anlama kavuşur ve "Ahmet ders şartını sağladı mı?" sorusuna yanıt verebilir hale gelir. Kurumların veritabanı kurma ihtiyacı da tam olarak buradan doğar: Milyonlarca ham veriyi kaybetmeden saklamak ve bunları ihtiyaç anında doğru bilgiye dönüştürebilmek. Peki bu verileri en başta nasıl saklamaya başlarız?
:::

---

## Kayıtları Saklamak: İlk Yaklaşım ve Atölye Senaryosu

### Somut Senaryo: Mesleki Eğitim Merkezi / Atölye Kayıtları
- Saklanacak Bilgiler: Öğrenci adı-soyadı, iletişim telefonu, kayıt tarihi.

### İlk Akla Gelen Çözüm: Düz Dosya (Flat File)
- Bilgileri bir deftere elle yazmak veya bilgisayarda bir metin belgesine (`.txt`, `.csv`) satır satır kaydetmek.

```text
Can Demir, 05551112233, 2026-09-10
Zeynep Aydın, 05552223344, 2026-09-11
Mert Doğan, 05553334455, 2026-09-11
```

### Durum Değerlendirmesi
- Kayıt sayısı **10–20** civarındayken bu yöntem doğrudan, masrafsız ve uygulanabilirdir.
- Kayıt sayısı **yüzlere ve binlere** ulaştığında ne olur?

::: {.notes}
Bir yazılım sistemi tasarlarken ilk akla gelen doğrudan çözümü görmek önemlidir. Küçük bir atölyede yirmi öğrenci varken bir Excel tablosu veya not defteri işi çözebilir. Öğrenci gelir, adını ve telefonunu satır sonuna yazarsınız. Ancak sistem büyüdüğünde, başvuru sayısı arttığında ve birden fazla kişi aynı verilerle çalışmak zorunda kaldığında bu dosya tabanlı yöntem yapısal sınırlara çarpar. Şimdi bu sınırları adım adım inceleyelim.
:::

---

## Düz Dosyaların Sınırları: Arama, Tekrar ve Tutarsızlık

```
[ Düz Metin Dosyası ]
├── 1. Arama Maliyeti      ──> Doğrusal Tarama: O(n) süre
├── 2. Veri Tekrarı         ──> Aynı öğrenci birden fazla başvuruda tekrar yazılır
└── 3. Tutarsızlık Riski    ──> Bir satır güncellenip diğeri unutulunca çelişkili kayıt
```

- **Arama ve Erişim Gecikmesi**:
  Belirli bir kaydı bulmak için dosya baştan sona taranır; kayıt sayısı arttıkça arama süresi doğrusal olarak uzar.
- **Veri Tekrarı (Redundancy)**:
  Öğrenci birden fazla atölyeye başvurduğunda adı ve telefonu her kayıtta yeniden yazılır; gereksiz yer kaplar ve giriş yükünü artırır.
- **Tutarsızlık Riski (Inconsistency)**:
  Öğrenci telefonunu değiştirdiğinde bütün satırların tek tek güncellenmesi gerekir. Biri unutulursa aynı kişi için iki farklı telefon kaydı oluşur; verinin güvenilirliği kaybolur.

::: {.notes}
Düz dosyalardaki bu üç sınır birbirini doğrudan tetikler. Arama süresinin uzaması performansı düşürür; ancak asıl tehlike veri tekrarından doğan tutarsızlıktır. Veri tekrarı yalnızca diskte yer israfı demek değildir; aynı gerçeğin birden fazla yerde kopyalanması anlamına gelir. Bir öğrenci numarasını güncellediğinde, görevli dosyadaki beş satırdan dördünü değiştirip birini unutursa, sistemde iki farklı telefon numarası kalır. Hangi numaranın güncel olduğunu dışarıdan anlamak imkansız hale gelir. Şimdi çok kullanıcılı ortamda yaşanan eşzamanlılık sınırına bakalım.
:::

---

## Düz Dosyaların Sınırları: Eşzamanlı Erişim ve Çakışma

```
Görevli A                                                   Görevli B
    │                                                           │
    ├─── 1. Dosyayı Açar (Can Demir: 05551112233) ──────────────┼─── 2. Dosyayı Açar (Aynı Kopya)
    │                                                           │
    ├─── 3. Telefonu Günceller (05559990011) ve Kaydeder ───────┤
    │    (Dosya güncellendi)                                    ├─── 4. Yeni Başvuru Ekler ve Kaydeder
    │                                                           │    (Kendi eski kopyasını yazar)
    ▼                                                           ▼
[ SONUÇ: Görevli A'nın yaptığı güncelleme sessizce ezildi ve kayboldu. ]
```

### Yapısal Eksiklik
- Düz dosyalarda aynı anda birden çok kullanıcının veriye zarar vermeden erişmesini sağlayacak **bağımsız bir denetim ve kilit mekanizması** bulunmaz.
- **Zorunlu İhtiyaç**: Verinin kuralları tanımlı, yapılandırılmış ve özel bir yazılım tarafından yönetilen bir sisteme emanet edilmesi.

::: {.notes}
Birden fazla kullanıcının çalıştığı ortamlarda düz dosyaların en zayıf halkası eşzamanlı erişim kontrolünün olmamasıdır. İki görevli aynı anda dosyayı açtığında, işletim sistemi ikisine de dosyanın o anki durumunu verir. Görevli A bir telefon güncellemesi yapıp kaydeder; birkaç saniye sonra Görevli B kendi ekranındaki dosyayı kaydettiğinde, Görevli A'nın yaptığı değişiklikten habersiz olduğu için önceki kaydı ezer. Buna kayıp güncelleme problemi denir. Bu risk, verinin dosya düzeyinde değil, kayıt düzeyinde merkezi bir yazılımla yönetilmesini zorunlu kılar.
:::

---

## Veri Nasıl Yapılandırılır: Tablo, Satır ve Sütun

### İki Boyutlu Yapı Düzeni
- **Sütun (Alan / Şablon)**: Tabloda saklanacak belirli bir bilgi türünü tanımlar. Şema yapısı sabittir.
- **Satır (Kayıt / Değer)**: Sütunların şablonuna uygun girilmiş somut bir kaydı temsil eder; tek bir varlığa ait ilişkili değerler kümesidir. Zamanla eklenir, güncellenir veya silinir.

### Atölye Kayıt Tablosu

| ad_soyad | telefon | kayit_tarihi |
| --- | --- | --- |
| Can Demir | 05551112233 | 2026-09-10 |
| Zeynep Aydın | 05552223344 | 2026-09-11 |
| Mert Doğan | 05553334455 | 2026-09-11 |

<!-- Görsel İhtiyacı 1: Aynı şemanın iki farklı veri durumu. Sol tarafta tablonun üç satırlı başlangıç durumu, sağ tarafta yeni bir kayıt eklendiğinde sütun yapısının değişmediği, yalnızca yeni bir satırın listeye katıldığı durum yan yana gösterilir. Amaç: Şema yapısının sabitliği ile satır verisinin değişkenliği arasındaki ilişkiyi görselleştirmek. -->

::: {.notes}
Düz metinlerdeki biçim karmaşasını çözmenin ilk adımı veriyi iki boyutlu tablolara oturtmaktır. Burada zihinsel olarak ayrılması gereken en temel nokta şema ile veri ayrımıdır: Sütunlar tablonun tasarımını, yani şemasını oluşturur ve kolay kolay değişmez. Satırlar ise o şablonun içini dolduran somut gerçekliklerdir. Yeni bir öğrenci başvurduğunda yeni bir sütun açmayız; var olan sütunların altına yeni bir satır ekleriz. Tablo yapısı veriyi düzenler; ancak bu tabloların nerede duracağını ve nasıl işleneceğini belirlemek için veritabanı ile yönetim sistemini birbirinden ayırmamız gerekir.
:::

---

## Veritabanı ile Veritabanı Yönetim Sistemi Aynı Şey midir?

### Kavramsal Ayrım

| Kavram | Tanım ve Görev | Somut Karşılık |
| --- | --- | --- |
| **Veritabanı (Database)** | Belirli bir düzen içinde bir arada tutulan verilerin kendisi ve organizasyon yapısı (tablolar, sütun tanımları, satırlar). | Diskteki veri ve katalog yapısı |
| **VTYS (DBMS)** | Veritabanını oluşturan, saklayan, okuma-yazma işlemlerini yürüten, güvenlik ve tutarlılığı sağlayan yazılım. | MySQL, PostgreSQL, Oracle |

### Kütüphane Benzetimi
- **Kitaplar, raflar ve sınıflandırma düzeni** $\rightarrow$ **Veritabanı**
- **Kataloglayan, kitabı raftan getiren ve kuralları uygulayan görevli** $\rightarrow$ **VTYS**

> **Temel İlke**: Saklanan verinin kendisi (veritabanı) ile o veriyi yöneten yazılım motoru (VTYS) teknik olarak birbirinden bağımsızdır.

::: {.notes}
Günlük dilde sıkça "MySQL veritabanımı açtım" veya "veritabanı kurdum" denir; ancak teknik olarak bu iki kavram aynı şey değildir. Kütüphane benzetimi bu ayrımı kavramak için güçlü bir araçtır. Raflardaki kitaplar kendi başlarına veridir; kuralları uygulayan, ödünç verme kaydını tutan ve kitabı raftan çekip getiren ise kütüphane görevlisidir. Okuyucu rafların arasına kontrolsüzce girip kitapları karıştıramaz; isteğini görevliye iletir. Benzer şekilde, veritabanındaki tablolara da doğrudan müdahale edilmez; tüm işlemler VTYS üzerinden yürütülür.
:::

---

## VTYS'nin Sağladığı Mekanik Güvence: Doğrudan Erişimin Engellenmesi

```
Geleneksel / Güvensiz Yaklaşım (Düz Dosya):
[ Kullanıcı / Uygulama ] ──────────(Doğrudan Erişim)──────────> [ Disk / Dosyalar ]
                                                                 (Eşzamanlı ezilme ve bozulma)

VTYS Mimarisi (Kontrollü ve Güvenli):
[ Kullanıcı / Uygulama ] ──(İstek)──> [ VTYS Motoru ] ──(Kontrollü Erişim)──> [ Disk / Veritabanı ]
                                      ├── Yetki Denetimi
                                      ├── Veri Bütünlüğü
                                      └── Eşzamanlılık Kilidi
```

### Mekanik Güvenceler
- **Doğrudan Müdahale Engeli**: Kullanıcılar ve yazılımlar işletim sistemi düzeyinde fiziksel veri dosyalarına doğrudan dokunamaz.
- **Tek Merkezden Denetim**: Bütün okuma ve yazma talepleri aradaki VTYS yazılımından geçer.
- **Bütünlük ve Eşzamanlılık**: Aynı veriye aynı anda gelen erişimler sıralanır, kurallara uymayan talepler reddedilir.

::: {.notes}
Düz dosyalarda yaşanan kayıp güncelleme ve veri bozulması problemlerinin temel nedeni, dosyaların korumasız olması ve herkesin doğrudan yazabilmesiydi. VTYS mimarisinde ise veritabanı dosyaları işletim sistemi düzeyinde kullanıcılara kapatılır. Hiçbir uygulama doğrudan diske gidip satır yazamaz. Araya giren VTYS motoru, gelen her isteği inceler; yetki var mı, veri tipi uygun mu, başka biri o sırada aynı kaydı değiştiriyor mu gibi kontrolleri yapar. Bu mimari sayesinde verinin fiziksel güvenliği ve mantıksal tutarlılığı güvence altına alınır.
:::

---

## İstemci ile Sunucu Nasıl İş Bölümü Yapar?

### Görev Dağılımı

- **İstemci (Client)**:
  - Kullanıcı arayüzünü sunar.
  - Kullanıcının niyetini komuta dönüştürür ve sunucuya iletir.
  - Gelen yanıtı ekranda anlaşılır biçimde biçimlendirir.
  - *Verinin diskte nerede ve nasıl tutulduğuyla ilgilenmez.*

- **Sunucu ve VTYS (Server / DBMS)**:
  - Veritabanını fiziksel depolama alanında barındırır.
  - İstemcilerden gelen istekleri kabul eder, yetki ve sözdizimini denetler.
  - Disk üzerinde okuma ve yazma işlemlerini yürütür, sonucu istemciye geri döner.

<!-- Görsel İhtiyacı 2: İstemci, sunucu/VTYS ve veritabanı arasındaki basit akış şeması. Şema iç motor veya ağ protokolü ayrıntılarına girmeden yalnızca üç kutudan oluşur: İstemci kutusundan sunucu/VTYS kutusuna giden 'İstek/Komut' oku; sunucu/VTYS kutusundan veritabanı depolama kutusuna giden 'Okuma/Yazma' oku; ve geriye dönen 'Yanıt/Sonuç' okları. Amaç: İsteği gönderen ile veriyi yöneten tarafın görev ayrımını ve döngüsünü göstermek. -->

::: {.notes}
Veritabanı uygulamalarında istemci ile sunucu genellikle farklı makinelerde çalışır; tek bir bilgisayarda çalışsalar bile mantıksal görevleri kesin çizgilerle ayrılmıştır. İstemci sadece bir kullanıcı yüzüdür; kayıt görevlisinin önündeki form ekranı veya bir web tarayıcısıdır. İstemci veritabanını içinde saklamaz, veriyi filtrelemek için kendi işlemcisini tüketmez. Bütün hesaplama, filtreleme ve depolama yükü sunucu tarafındaki VTYS'ye bırakılır. Bu ayrım sistemin ölçeklenebilmesini ve güvenliğini sağlar.
:::

---

## İstek ve Yanıt Döngüsünün Adımları

```
[ 1. İstemci ] ──(İstek Paketi)──> [ 2. VTYS Denetimi ]
                                          │ (Yetki ve Kural Geçerli mi?)
                                          ▼
[ 5. Kullanıcı Ekranı ] <──(Yanıt)── [ 4. Sonuç Üretimi ] <── [ 3. Disk Okuma/Yazma ]
```

1. **İstek Oluşturma**: İstemci kullanıcının işlemini alır, istek paketi haline getirir ve sunucuya iletir.
2. **Denetim**: Sunucuda çalışan VTYS isteği karşılar; kullanıcının yetkisini ve komutun sözdizim kurallarını denetler.
3. **Veritabanı İşlemi**: Geçerli istek için VTYS disk üzerindeki veritabanında gerekli okuma veya yazma işlemini yürütür.
4. **Sonuç Üretimi**: Elde edilen veri kümesi veya işlem başarı/hata durumu VTYS tarafından hazırlanır ve istemciye gönderilir.
5. **Sunum**: İstemci gelen yanıtı ekranda kullanıcıya anlaşılır biçimde sunar.

::: {.notes}
İstemci ile sunucu arasındaki etkileşim kapalı bir döngüdür. Bu döngüde belirleyici ara adım ikinci maddedir: VTYS gelen isteği doğrudan veritabanına uygulamaz; önce yetkiyi ve kuralları sınar. Hatalı veya yetkisiz bir istek geldiğinde 3. adıma hiç geçilmez, diske erişim yapılmadan doğrudan 4. adıma atlanarak istemciye hata bildirilir. Böylece disk gereksiz işlemlerden ve hatalı yazımlardan korunmuş olur. Şimdi tabloların içine dönelim ve mantıksal bir çakışma senaryosunu inceleyelim.
:::

---

## Aynı İsimde İki Kayıt Varsa Ne Olur: Kayıt Çakışması Problemi

### Yeni Başvuru Senaryosu
Atölyeye daha önce kaydolan "Can Demir" ile tamamen aynı ad ve soyada sahip yeni bir katılımcı başvurur:

| ad_soyad | telefon | kayit_tarihi |
| --- | --- | --- |
| Can Demir | 05551112233 | 2026-09-10 |
| Zeynep Aydın | 05552223344 | 2026-09-11 |
| Mert Doğan | 05553334455 | 2026-09-11 |
| Can Demir | 05559998877 | 2026-09-12 |

### Somut Arıza Durumu
- **Görevliye Gelen Talimat**: *"Can Demir'in telefon numarasını güncelleyiniz."*
- **Tıkanma**: Hangi Can Demir güncellenecek?
  - Güncelleme ad ve soyada dayanırsa, **her iki satırın telefonu da aynı yeni değerle ezilir**.
  - Son başvuran güncellenmek istenirken, ilk başvuranın iletişim bilgisi sessizce bozulur.
  - Telefon alanı tekil kimlik olabilir mi? Hayır; ortak aile telefonu kullanılabilir veya başvuru anında girilmemiş olabilir.

::: {.notes}
Gerçek hayatta isim benzerlikleri son derece yaygındır. Tablomuza baktığımızda 1. satır ile 4. satır iki farklı insanı temsil eder; telefonları ve başvuru tarihleri farklıdır. Ancak sisteme "Can Demir'in numarasını değiştir" dediğimiz anda sistem ad ve soyad üzerinden hangi kaydı seçeceğini bilemez. Eğer isim filtresiyle güncelleme çalıştırılırsa, sistem iki satırı birden günceller. Bu durumda birinci satırdaki öğrencinin numarası yok edilir ve veri tabanında geri dönülemez bir bozulma yaşanır. Doğal dil etiketleri bilgisayarda tekil kimlik olamaz.
:::

---

## Çözüm Mekanizması: Birincil Anahtar (Primary Key)

### Tanım ve Görev
Bir tabloda her satırı diğer bütün satırlardan kesin ve tavizsiz olarak tekil biçimde ayırt eden özel sütuna **birincil anahtar** (primary key) adı verilir.

### Zorunlu Teknik Kurallar
1. **Benzersizlik (Uniqueness)**: Tabloda hiçbir iki satır bu sütunda aynı değeri taşıyamaz.
2. **Boş Bırakılamazlık (`NOT NULL`)**: Her satır mutlaka geçerli bir anahtar değerine sahip olmak zorundadır.

### Birincil Anahtar Eklenmiş Atölye Tablosu

| ogrenci_no | ad_soyad | telefon | kayit_tarihi |
| --- | --- | --- | --- |
| **101** | Can Demir | 05551112233 | 2026-09-10 |
| **102** | Zeynep Aydın | 05552223344 | 2026-09-11 |
| **103** | Mert Doğan | 05553334455 | 2026-09-11 |
| **104** | Can Demir | 05559998877 | 2026-09-12 |

::: {.notes}
İsim çakışması krizini çözen mekanizma birincil anahtardır. Tabloya eklediğimiz `ogrenci_no` sütunu, tablonun kimlik eksenini kurar. Burada iki temel şart vardır: Hiçbir satırın anahtarı bir başkasıyla aynı olamaz ve bu alan asla boş bırakılamaz. İsimler, telefonlar veya tarihler ne kadar benzer ya da aynı olursa olsun, 101 ve 104 numaralı kayıtlar sistem için tamamen bağımsız iki nesnedir. Şimdi bu mekanizmanın çakışmayı nasıl çözdüğünü doğrulayalım.
:::

---

## Doğrulayalım: Birincil Anahtar Çakışmayı Nasıl Önler?

### İşlem Karşılaştırması

```
Eski Muğlak Yaklaşım:
"Can Demir'in telefonunu güncelle" ──> [İki satır eşleşir] ──> İki kayıt birden ezilir.

Birincil Anahtarlı Mekanizma:
"104 numaralı kaydın telefonunu güncelle"
   │
   ▼
[ VTYS: ogrenci_no = 104 arar ]
   ├──> Tabloda tekil satırı bulur.
   ├──> Yalnızca 104 numaralı satırın telefonunu günceller.
   └──> 101 numaralı Can Demir kaydı hiçbir biçimde etkilenmez.
```

### Doğrulama Sonucu
- Sistem artık kişilerin doğal adlarına göre değil, **kesin satır kimliğine** göre işlem yapar.
- Hedef dışındaki satırların sessizce bozulması engellenir; mantıksal veri bütünlüğü sağlanır.

::: {.notes}
Doğrulama adımı, tasarladığımız çözümün önceki arıza senaryosunu gerçekten çözüp çözmediğini test eder. Talimat artık ad üzerinden değil, tekil anahtar üzerinden verilir. VTYS `ogrenci_no` sütununa bakar; bu sütunda 104 değerine sahip tam olarak tek bir satır olduğunu bildiği için yalnızca o satırı değiştirir. 101 numaralı Can Demir'in verisi olduğu gibi korunur. Böylece veri tabanında güncelleme anomalisi ve veri bozulması riski ortadan kalkar.
:::

---

## Sık Yapılan Hatalar: Veritabanı ve Mimari Yanılgıları

### 1. "Veritabanı kurdum" (VTYS ile Veritabanını Eşit Görmek)
- **Kavram Yanılgısı**: MySQL'i veritabanının kendisi zannetmek.
- **Teknik Mekanizma**: MySQL yönetim yazılımıdır (VTYS). Veritabanı ise o yazılımın disk üzerinde sakladığı tablo, sütun ve satırlar bütünüdür. Yönetim yazılımı değiştirilse veya güncellense bile arkasındaki veritabanı yapısı korunabilir.

### 2. "İstemci verileri kendi içinde arar" (İstemci Sorumluluğu Yanılgısı)
- **Kavram Yanılgısı**: Arayüz programının bütün satırları kendi belleğine çekip filtrelemeyi kendisinin yaptığını düşünmek.
- **Teknik Mekanizma**: İstemci yalnızca kullanıcının isteğini bir komut olarak sunucuya gönderir. Veri dosyalarını tarayan, filtreleyen ve sonucu üreten sunucudaki VTYS'dir; istemci yalnızca dönen nihai sonucu gösterir.

::: {.notes}
Veritabanı dersine başlarken yapılan en yaygın hata araç ile veriyi birbirine karıştırmaktır. Bir öğrenci bilgisayarına MySQL kurduğunda aslında bir veritabanı kurmuş olmaz; veritabanlarını işletecek olan sunucu motorunu kurmuş olur. Veritabanı ancak tabloları ve verileri tasarladığımızda var olur. İkinci yanılgı ise istemcinin rolüdür: İstemci bir arama motoru değildir, sadece sunucuya komut gönderen bir aracıdır. Bu ayrım ağ trafiğini ve veritabanı performansını anlamak için esastır.
:::

---

## Sık Yapılan Hatalar: Anahtar ve Veri Yanılgıları

### 3. "Birincil anahtar mutlaka otomatik artan bir tamsayı olmalıdır"
- **Kavram Yanılgısı**: Birincil anahtarın her zaman 1, 2, 3 gibi ardışık bir sayaç olmak zorunda olduğunu düşünmek.
- **Teknik Mekanizma**: Birincil anahtarın zorunlu teknik şartı tekillik (benzersizlik) ve boş bırakılamaz (`NOT NULL`) olmasıdır. Standart ders kodları (`BLP1005`) veya ülke kodları (`TR`) gibi metinsel alanlar da geçerli birincil anahtarlardır; otomatik artan sayaç yalnızca pratik bir tasarım tercihidir.

### 4. "Sisteme girilen her veri doğrudan bir bilgidir"
- **Kavram Yanılgısı**: Veri ile bilginin eşanlamlı olduğunu varsaymak.
- **Teknik Mekanizma**: Tablo hücrelerinde saklanan değerler tek başlarına yalnızca birer ham veridir. Bu veriler filtrelendiğinde, gruplandığında veya bir karar sürecine dayanak olacak bir bağlam kazandığında bilgi niteliği kazanır.

::: {.notes}
Otomatik artan tamsayılar pratikte çok sık kullanıldığı için öğrenciler bunun kural olduğunu düşünebilir. Oysa veritabanı teorisinde önemli olan değerin sayısal olması değil, satırı benzersiz biçimde tanımlamasıdır. Doğal anahtarlar da aynı görevi eksiksiz yerine getirir. Veri-bilgi ayrımı ise dersin başından sonuna kadar aklımızda tutmamız gereken temel çizgidir: Tablolara doldurduğumuz değerler birer hammaddedir; bunları anlamlı hale getiren ise ilerleyen haftalarda yazacağımız ilişkisel sorgular ve analizlerdir.
:::
