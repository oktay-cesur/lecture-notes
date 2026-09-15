---
title: "Veritabanı Temel Kavramları ve Mimari"
subtitle: "BLP 1005 — Veritabanı Yönetim Sistemleri"
author: "Öğr. Gör. Oktay Cesur"
date: 2026-09-15
description: Veritabanı, VTYS, ilişkisel veritabanı ve istemci-sunucu mimarisini veri yönetimi problemi üzerinden kuran birinci hafta ders notu.
tags:
  - blp1005
  - veritabani
  - hafta-1
---

## Ders içindeki yeri

- **Ders:** BLP 1005 — Veritabanı Yönetim Sistemleri
- **Hafta:** 1
- **Resmî konu:** Veritabanı Temel Kavramları ve Mimari
- **Süre:** 1 saat teori + 2 saat uygulama
- **Birincil öğrenme çıktısı:** ÖÇ1 — İlişkisel veritabanı sistemlerinin temel kavramlarını ve çalışma mimarisini açıklayabilme
- **Sonraki haftaya hazırlık:** H2 — Varlık-İlişki (E-R) Modeli

## Haftanın temel sorusu

> Veriyi bir dosyada saklayabiliyorsak neden ayrıca veritabanına ve bir veritabanı yönetim sistemine ihtiyaç duyarız?

Haftanın amacı tanım ezberletmek değil, veriyi **tutarlı, paylaşılabilir, sorgulanabilir ve yönetilebilir** biçimde saklama ihtiyacını görünür kılmaktır. Öğrenci önce veri problemini görür; ardından veritabanı, VTYS ve ilişkisel yapı kavramları bu probleme verilen teknik yanıtlar olarak konumlandırılır.

## Öğrenme hedefleri

Hafta sonunda öğrenci:

1. veri ile bilgi arasındaki farkı örnek üzerinden açıklayabilir,
2. bağımsız dosya / elektronik tablo yaklaşımının hangi gereksinimlerde yetersiz kalabileceğini tartışabilir,
3. **veritabanı**, **VTYS** ve **ilişkisel veritabanı** kavramlarını birbirinden ayırabilir,
4. tablo, sütun, satır ve veri tipi kavramlarını temel düzeyde kullanabilir,
5. istemci–sunucu–veritabanı ilişkisini basit bir mimari üzerinde açıklayabilir,
6. MySQL Workbench ile MySQL Server'ın aynı şey olmadığını açıklar,
7. bir gereksinim metninde hangi bilgilerin ayrı veri nesnelerine ait olabileceğini fark etmeye başlar.

## Anlatı hattı

**gereksinim → dağınık veri → tutarsızlık / belirsizlik → yönetim ihtiyacı → veritabanı + VTYS → ilişkisel yapı → istemci–sunucu mimarisi**

Anahtarlar, yabancı anahtarlar, E-R gösterimi, kardinalite, normalizasyon ve SQL sözdizimi bu hafta sistematik olarak öğretilmez. Gerektiği yerde yalnız sonraki haftalara ihtiyaç oluşturacak kadar sezdirilir.

---

## Kurucu vaka — Kampüs ekipman ödünç sistemi

Bir fakülte öğrencilerine kamera, mikrofon ve dizüstü bilgisayar ödünç vermektedir.

Mevcut durumda:

- öğrenci bilgileri bir elektronik tabloda,
- cihaz listesi başka bir dosyada,
- ödünç alma ve teslim bilgileri mesajlaşma kayıtlarında,
- geciken cihazlar ise elle takip edilmektedir.

İlk soru:

> K-014 numaralı kameranın şu anda kimde olduğunu güvenilir biçimde nasıl buluruz?

Ardından:

- Bir öğrencinin geçmişte aldığı tüm cihazları bulabilir miyiz?
- Aynı öğrencinin adı iki farklı biçimde yazılmışsa ne olur?
- Cihazın durumu iki dosyada farklı görünüyorsa hangisine güveniriz?
- İki kişi aynı veriyi aynı anda güncelliyorsa ne olur?
- Bir kaydı düzeltirken geçmiş bilgiyi kaybedebilir miyiz?

Bu aşamada çözüm verilmez. Amaç, “veriyi bir yere yazmak” ile “veriyi yönetmek” arasındaki farkı ortaya çıkarmaktır.

---

# Ders akışı

## 0–10 dk — Problemle giriş

Kurucu vaka sınıfa verilir. Öğrencilerden teknik terim kullanmadan yalnız şu soruyu cevaplamaları istenir:

> Bu sistemde hangi bilgilerin güvenilir biçimde tutulması gerekir?

Tahtada ham cevaplar toplanır: öğrenci, cihaz, cihaz türü, ödünç alma tarihi, teslim tarihi, durum vb.

**Öğretim amacı:** Kavramdan önce veri gereksinimini oluşturmak.

---

## 10–20 dk — Veri ve bilgi

Vaka üzerinden ayrım kurulur:

- `K-014`, `2026-09-10`, `Ayşe Demir` gibi tekil değerler **veridir**.
- “K-014 şu anda Ayşe Demir'de” veya “teslim süresi geçen 4 cihaz var” gibi bağlamlandırılmış sonuçlar **bilgidir**.

Vurgu:

> Veritabanının amacı yalnız veri biriktirmek değil, güvenilir bilgi üretilebilecek bir veri yapısı kurmaktır.

Uzun teorik veri–enformasyon tartışmasına girilmez.

---

## 20–35 dk — Dosya / elektronik tablo neden her durumda yetmez?

Elektronik tablo “yanlış araç” olarak sunulmaz. Küçük, tek kullanıcılı ve sınırlı veri problemlerinde uygun olabilir. Sorun, gereksinim büyüdükçe ortaya çıkar.

Vaka üzerinden dört sınır gösterilir:

1. **Tekrar:** Aynı öğrenci bilgisi her ödünç işleminde yeniden yazılabilir.
2. **Tutarsızlık:** Aynı öğrenci veya cihaz farklı dosyalarda farklı değerlerle bulunabilir.
3. **Paylaşımlı erişim:** Birden fazla kullanıcının aynı veriyi güvenli biçimde değiştirmesi gerekir.
4. **Sorgulama ve bütünlük:** “Şu anda kimde?”, “gecikenler hangileri?” gibi sorular için güvenilir, yapısal veri gerekir.

Burada henüz normalizasyon terminolojisi kullanılmaz. Öğrenci yalnız problemin varlığını görür.

---

## 35–50 dk — Veritabanı, VTYS ve ilişkisel veritabanı

### Veritabanı

Belirli bir problem alanına ait verilerin düzenli ve ilişkili biçimde saklandığı yapıdır.

### Veritabanı Yönetim Sistemi (VTYS)

Veritabanını oluşturma, değiştirme, sorgulama, erişim denetimi ve bütünlük gibi işlemleri yöneten yazılımdır.

Bu derste temel VTYS: **MySQL Server**.

### İlişkisel veritabanı

Veriyi tablolar biçiminde düzenleyen ve tablolar arasındaki bağlantıları tanımlayabilen veritabanı yaklaşımıdır.

Kritik ayrım:

```text
Veritabanı ≠ VTYS ≠ İlişkisel veritabanı
```

Veritabanı saklanan yapıdır; VTYS bu yapıyı yöneten yazılımdır; ilişkisel yaklaşım ise verinin nasıl modellenip düzenlendiğine ilişkin modeldir.

---

## 50–60 dk — Mimariye giriş

Tahtada / slaytta tek mimari gösterilir:

```text
Kullanıcı
   ↓
Uygulama / MySQL Workbench
   ↓
MySQL Server (VTYS)
   ↓
Veritabanı
   ↓
Tablolar ve kayıtlar
```

Vurgular:

- Kullanıcı doğrudan veri dosyasını düzenlemek zorunda değildir.
- İstemci, VTYS'ye bir istek gönderir.
- VTYS veritabanı üzerinde işlemi gerçekleştirir ve sonucu döndürür.
- **MySQL Workbench bir istemci aracıdır; MySQL Server değildir.**

Bu hafta ayrıntılı Workbench arayüz eğitimi yapılmaz.

---

# Uygulama bölümü

## 60–85 dk — Uygulama 1: “Bu tabloda ne sorun var?”

Öğrencilere aşağıdaki örnek verilir:

```text
ogrenci        telefon       cihaz     cihaz_turu   alis_tarihi   teslim_tarihi
Ayşe Demir     0532...       K-014     Kamera       2026-09-10   -
Ayşe Demir     0532...       M-008     Mikrofon     2026-09-11   2026-09-13
Ayşe D.        0532...       K-014     Kamera       2026-09-14   -
```

Sorular:

1. Burada hangi gerçek dünya nesneleri var?
2. Hangi bilgiler tekrar ediyor?
3. `K-014` şu anda kimde?
4. `Ayşe Demir` ile `Ayşe D.` aynı kişi mi?
5. Bir cihaz türü yanlış yazılmışsa kaç kaydı düzeltmemiz gerekebilir?
6. Aynı cihazın aynı anda iki kişide görünmesini ne engeller?

**Beklenen sonuç:** Öğrenci henüz çözümü bilmeden veri tekrarı, kimlik belirsizliği ve tutarlılık sorunlarını fark eder.

**Bu aşamada yapılmaz:** tablo ayrıştırma, normal form adlandırma, PK/FK tasarımı.

---

## 85–110 dk — İlişkisel yapının temel görünen öğeleri

### Tablo

Aynı türden kayıtların belirli sütunlarla yapılandırıldığı veri yapısıdır.

### Sütun

Kayıtların hangi özelliklerinin tutulacağını tanımlar.

### Satır / kayıt

Belirli bir nesne veya olay için tutulan değerler bütünüdür.

### Veri tipi

Bir sütunda hangi tür değerlerin saklanabileceğini sınırlar: metin, sayı, tarih vb.

Elektronik tablo benzetmesi kullanılabilir; ancak sınırı açıkça belirtilir:

> İlişkisel tablo yalnız hücrelerden oluşmaz; veri tipi, anahtar, kısıt ve ilişkilerle daha güçlü yapısal kurallar taşıyabilir.

### Şema fikri

Bu hafta yalnız şu düzeyde:

- yapı / tanım: hangi tablolar ve sütunlar var,
- veri / örnek: bu yapılarda hangi kayıtlar bulunuyor.

“Şema–instance” terminolojisi zorunlu değildir; ayrım sezdirilir.

---

## 110–130 dk — Uygulama 2: Gereksinimden veri nesnelerine

Kısa gereksinim:

> Sistem, öğrencinin adını ve okul numarasını; cihazın envanter numarasını ve türünü; cihazın ne zaman teslim alındığını ve ne zaman geri getirildiğini saklamalıdır.

Öğrencilerden üç grup oluşturmaları istenir:

```text
ÖĞRENCİYE AİT
- okul numarası
- ad

CİHAZA AİT
- envanter numarası
- cihaz türü

ÖDÜNÇ ALMA OLAYINA AİT
- alış tarihi
- teslim tarihi
```

Ardından şu soru sorulur:

> Neden “alış tarihi” öğrencinin veya cihazın kalıcı bir özelliği değildir?

**Amaç:** E-R modeline geçmeden önce “hangi bilgi neye aittir?” düşünme alışkanlığı oluşturmak.

---

## 130–150 dk — İstemci–sunucu mini gösterimi

Kurulum hazırsa MySQL Workbench yalnız mimariyi görünür kılmak için açılır.

Gösterilecekler:

1. Workbench'in bir **bağlantı** üzerinden MySQL Server'a eriştiği,
2. sunucunun bağlantıdan ayrı bir bileşen olduğu,
3. sunucuda birden fazla veritabanı / şema bulunabileceği,
4. tabloların sunucu tarafındaki veritabanı yapısının parçaları olduğu.

Menü, ikon veya ayrıntılı kullanım sırası öğretilmez.

Kurulum hazır değilse aynı bölüm yalnız mimari diyagram üzerinden yürütülür; haftanın öğrenme hedefi etkilenmez.

---

## 150–170 dk — Karşı örnekler ve kavram ayrımları

Sınıfa kısa ifadeler verilir; doğru / yanlış ve gerekçe istenir.

### İfade 1

> MySQL Workbench bir veritabanıdır.

**Yanlış.** Workbench istemci / yönetim aracıdır.

### İfade 2

> MySQL Server ile veritabanı aynı şeydir.

**Yanlış.** Server bir VTYS'dir; bir veya daha fazla veritabanını yönetebilir.

### İfade 3

> Elektronik tablo kullanılıyorsa veritabanına hiçbir zaman ihtiyaç yoktur.

**Yanlış.** Gereksinim çok kullanıcılı erişim, bütünlük, ilişkili veri ve güvenilir sorgulamaya doğru büyüyebilir.

### İfade 4

> Bir tabloda her satır aynı tür özelliklere göre yapılandırılır.

**Temel düzeyde doğru.** Sütunlar kayıtların ortak yapısını tanımlar.

### İfade 5

> Aynı öğrenciyi iki satırda nasıl güvenilir biçimde ayırt edeceğimiz bugün çözülmesi gereken bir sorudur.

**Problem doğrudur; çözüm bu hafta tamamlanmaz.** Bu soru ilerleyen haftalarda anahtar kavramına bağlanacaktır.

---

## 170–180 dk — Çıkış kontrolü

Öğrenci dört soruya kısa cevap verir:

1. Veritabanı ile VTYS arasındaki fark nedir?
2. Elektronik tablo hangi durumda yetersiz kalmaya başlayabilir? Bir örnek verin.
3. İlişkisel bir tabloda sütun ve satır neyi temsil eder?
4. MySQL Workbench ile MySQL Server arasındaki ilişki nedir?

### Hızlı değerlendirme ölçütü

- **Tam:** kavramları birbirinden ayırıyor ve nedenini açıklıyor.
- **Kısmi:** temel tanımı biliyor fakat kavramları birbirine karıştırıyor.
- **Eksik:** Workbench / Server / veritabanı veya tablo / dosya ayrımını kuramıyor.

---

# Tahtada / slaytta mutlaka görünmesi gerekenler

## 1. Problem tablosu

Kasıtlı olarak belirsizlik ve tekrar içeren küçük ödünç tablosu.

## 2. Üçlü kavram ayrımı

```text
VERİTABANI
Verinin düzenli olarak saklandığı yapı

VTYS
Bu yapıyı yöneten yazılım

İLİŞKİSEL VERİTABANI
Veriyi tablolar ve ilişkiler üzerinden düzenleyen yaklaşım
```

## 3. Mimari

```text
İstemci → MySQL Server → Veritabanı → Tablolar
```

## 4. Temel tablo anatomisi

```text
cihaz
---------------------------------
envanter_no | cihaz_turu | durum
---------------------------------
K-014       | Kamera      | ...
M-008       | Mikrofon    | ...
```

Sütun, satır ve veri tipi bu görsel üzerinde gösterilir.

---

# Sık karışabilecek noktalar

## “Veritabanı = tablo”

Hayır. Tablo veritabanı içindeki yapılardan biridir.

## “VTYS = veritabanı”

Hayır. VTYS veritabanını yöneten yazılımdır.

## “Workbench = MySQL”

Hayır. MySQL Server VTYS'dir; Workbench istemci / yönetim aracıdır.

## “Excel kötüdür, veritabanı iyidir”

Bu karşıtlık kurulmaz. Araç seçimi gereksinime bağlıdır. Veritabanı ihtiyacı; veri bütünlüğü, ilişkili veri, eşzamanlı erişim, güvenilir sorgulama ve yönetim gereksinimleri büyüdüğünde ortaya çıkar.

## “Her şeyi ilk haftada ilişkilere ayıralım”

Hayır. İlk hafta problemin görülmesi yeterlidir. E-R modeli H2'de, normalizasyon H3'te sistematik olarak ele alınacaktır.

---

# Sonraki haftaya geçiş

Ders şu açık soruyla kapatılır:

> Öğrenci, cihaz ve ödünç alma olaylarının farklı türde bilgiler olduğunu fark ettik. Peki bir gereksinim metninden bu veri nesnelerini sistematik biçimde nasıl çıkarır ve aralarındaki ilişkileri nasıl gösteririz?

Bu soru H2 — **Varlık-İlişki (E-R) Modeli** için doğrudan geçiştir.

---

# Kapsam dışı / sonraya bırakılanlar

- E-R sembolleri
- kardinalite ve katılım
- birincil anahtarın sistematik öğretimi
- yabancı anahtar ve referans bütünlüğü
- 1NF / 2NF / 3NF
- DDL / DML sözdizimi
- `SELECT` yazımı
- ayrıntılı MySQL Workbench arayüz kullanımı

Bu kavramlar yalnız öğrencinin fark ettiği problemlere isim vermek gerektiğinde kısa biçimde sezdirilebilir; çözüm olarak öğretilmez.

---

# Kaynak dayanağı ve tasarım notu

Bu hafta aşağıdaki proje kaynaklarıyla uyumlu tasarlanmıştır:

- `blp1005.pdf`: H1 “Veritabanı Temel Kavramları ve Mimari”, ÖÇ1 ve 1+2 ders yapısı.
- `02_DONEM_PLANI.md`: H1'in resmî kapsamı ve sonraki haftalarla sınırı.
- `03_ANLATIM_VE_ICERIK_YAKLASIMI.md`: gereksinim → veri problemi → karar → doğrulanabilir sonuç yaklaşımı; veritabanı / VTYS / ilişkisel veritabanı ayrımı.
- `05_KONU_HARITASI.md`: V1–V2 kavram alanları.
- `06_UYGULAMA_VE_MYSQL_YAKLASIMI.md`: Workbench'in arayüz ezberi yerine istemci–sunucu ayrımını ve veri davranışını görünür kılmak için kullanılması.
- `kitap_analizi.md`: problemi önce kurma, yetersiz yaklaşımı görünür kılma ve kavramı ihtiyaçtan doğurma pedagojik yaklaşımı. Kitaptaki kişi, kurum, şema, veri ve olay akışı kullanılmamış; özgün “kampüs ekipman ödünç sistemi” vakası oluşturulmuştur.

## Nihai tasarım kararı

H1'de **anahtarlar ve ilişkiler yalnız problem olarak sezdirilir; çözüm olarak öğretilmez.** Böylece ilk hafta ÖÇ1'e odaklanır, H2 ve H3'ün öğrenme gereksinimini önceden kurar ve ileriki konuları erkenden tüketmez.
