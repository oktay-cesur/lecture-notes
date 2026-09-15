---
title: "Veritabanı Temel Kavramları ve Mimari"
subtitle: "BLP 1005 — Veritabanı Yönetim Sistemleri"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-09-15
description: Veritabanı, VTYS, ilişkisel veritabanı ve istemci-sunucu mimarisine giriş.
tags:
  - blp1005
  - veritabani
  - hafta-1
---

## Bir cihaz şu anda kimde?

Bir fakültede öğrencilere kamera, mikrofon ve dizüstü bilgisayar ödünç veriliyor.

- Öğrenci bilgileri bir elektronik tabloda
- Cihaz listesi başka bir dosyada
- Ödünç alma ve teslim bilgileri mesajlarda
- Geciken cihazlar elle takip ediliyor

> `K-014` numaralı kamera şu anda kimde?

::: {.notes}
Bir veritabanını anlamaya başlamak için önce “veritabanı nedir?” tanımından değil, veriyi yönetmenin neden ayrı bir problem olduğundan başlamak daha yararlıdır.

Bir fakültenin öğrencilerine ekipman ödünç verdiğini düşünelim. Öğrencilerin adları ve numaraları bir elektronik tabloda, cihazların envanter kayıtları başka bir dosyada, ödünç alma ve teslim bilgileri ise mesajlaşma kayıtlarında tutuluyor olsun. İlk bakışta sistem çalışıyor gibi görünür; çünkü veriler bir yerlerde mevcuttur. Fakat “K-014 numaralı kamera şu anda kimde?” gibi basit görünen bir soru sorulduğunda, tek bir güvenilir kaynağa bakarak cevap vermek mümkün olmayabilir.

Sorun verinin hiç olmaması değildir. Sorun, aynı iş sürecine ait verilerin farklı yerlerde, farklı biçimlerde ve birbirinden bağımsız tutulmasıdır. Bir cihaz listesinde “ödünçte” görünürken mesaj kayıtlarında teslim edildiği yazabilir. Aynı öğrenci bir dosyada tam adıyla, başka bir yerde kısaltılmış biçimde kaydedilmiş olabilir. Böyle bir ortamda veriye sahip olmak ile güvenilir bilgi üretebilmek aynı şey değildir.

Veritabanı sistemlerinin ortaya çıkış nedenlerinden biri tam olarak budur: birbirine bağlı verileri yalnızca saklamak değil, onları tutarlı, sorgulanabilir ve kontrollü biçimde yönetmek.
:::

---

## Veriyi saklamak başka, veriyi yönetmek başka

Bir veri sistemi yalnızca “nerede saklanıyor?” sorusuna cevap vermez.

Ayrıca şunları da çözmelidir:

- Aynı veri farklı yerlerde çelişiyor mu?
- Bir kaydı diğerinden nasıl ayırt ederiz?
- Birden fazla kullanıcı aynı veriye erişirse ne olur?
- İstenen bilgi güvenilir biçimde sorgulanabiliyor mu?
- Hatalı veri girişini hangi kurallar engelliyor?

::: {.notes}
Dosya, elektronik tablo veya düz metin gibi araçlar veriyi saklayabilir. Küçük ve tek kullanıcılı işlerde bunlar yeterli de olabilir. Veritabanı yönetim sistemine geçişi zorunlu kılan şey, dosyanın varlığı veya yokluğu değil; veri üzerindeki gereksinimlerin karmaşıklaşmasıdır.

Örneğin aynı öğrenci bilgisi her ödünç işleminde yeniden yazılıyorsa veri tekrarı oluşur. Öğrencinin telefonu değiştiğinde bazı satırlar güncellenip bazıları güncellenmezse aynı kişi için birden fazla doğruymuş gibi görünen değer ortaya çıkar. Bir cihazın aynı anda iki kişiye verilmesini engelleyen hiçbir kural yoksa, sistem teknik olarak kayıt kabul etse bile gerçek dünyadaki iş kuralını koruyamaz.

Bir veri yönetim sisteminden beklenen yalnızca “değeri kaydetmesi” değildir. Hangi değerlerin kabul edileceğini, kayıtların birbirinden nasıl ayırt edileceğini, veriler arasındaki bağlantıların nasıl korunacağını ve kullanıcıların hangi işlemleri yapabileceğini de yönetebilmelidir.

Bu nedenle veritabanı dersinde temel soru sürekli şudur: Sakladığımız veri, gerçek dünyadaki durumu güvenilir biçimde temsil ediyor mu?
:::

---

## Veri ve bilgi

**Veri**, tek başına kaydedilmiş değerlerdir.

```text
K-014
2026-09-10
Ayşe Demir
```

**Bilgi**, verinin bir bağlam içinde anlamlı bir soruya cevap vermesidir.

```text
K-014 numaralı kamera Ayşe Demir'dedir.
Teslim süresi geçen 4 cihaz vardır.
```

::: {.notes}
Veri ile bilgi arasındaki ayrım, veritabanının neden yalnızca bir “depo” olmadığını anlamaya yardımcı olur.

`K-014`, `2026-09-10` ve `Ayşe Demir` tek tek saklanmış değerlerdir. Bu değerlerin neyi temsil ettiğini bilmeden anlamlı bir sonuca ulaşamayız. Ancak bu değerleri belirli bir yapı ve ilişki içinde yorumladığımızda “K-014 numaralı kamera 10 Eylül 2026 tarihinde Ayşe Demir tarafından ödünç alınmıştır” gibi bir bilgi elde ederiz.

Aynı şekilde “teslim süresi geçen kaç cihaz var?” sorusuna cevap verebilmek için yalnız cihaz adlarını saklamak yetmez. Cihazı, ödünç alan kişiyi, alış tarihini, beklenen veya gerçek teslim tarihini ve gerektiğinde cihazın durumunu birlikte değerlendirmek gerekir.

Veritabanı tasarımı bu yüzden hangi verilerin tutulacağı kadar, bu verilerin hangi yapılar içinde tutulacağını da belirler. İyi bir veri yapısı, daha sonra sorulacak soruların güvenilir biçimde cevaplanmasını mümkün kılar.
:::

---

## Elektronik tablo neden her zaman yeterli değildir?

Elektronik tablo yanlış bir araç değildir.

Fakat gereksinim büyüdükçe bazı sınırlar görünür hale gelir:

1. Veri tekrarı
2. Tutarsız güncellemeler
3. Çok kullanıcılı erişim
4. Veri bütünlüğünü koruma
5. Karmaşık ve tekrarlanabilir sorgular
6. Yetkilendirme ve erişim kontrolü

::: {.notes}
Elektronik tablo ile ilişkisel veritabanını karşılaştırırken “Excel kötüdür, veritabanı iyidir” gibi mutlak bir ayrım doğru değildir. Elektronik tablolar küçük veri kümelerinde, kişisel analizlerde, geçici listelerde ve hızlı hesaplamalarda son derece kullanışlıdır. Sorun, aracın tasarlandığı kullanım alanının ötesine geçildiğinde ortaya çıkar.

Bir iş sürecinde aynı veri çok sayıda yerde tekrar ediyorsa, her değişiklikte bütün kopyaların birlikte güncellenmesi gerekir. Birden fazla kullanıcı aynı dosya üzerinde çalışıyorsa eşzamanlı değişiklikleri yönetmek zorlaşır. Belirli alanların boş bırakılamaması, bazı değerlerin benzersiz olması veya bir kaydın başka bir kayda mutlaka bağlı bulunması gibi kuralların sistematik biçimde uygulanması gerekir.

İlişkisel veritabanı yönetim sistemleri bu tür gereksinimleri doğrudan veri katmanında tanımlayabilmemizi sağlar. Veri tipi, anahtar ve kısıt gibi yapılar yalnızca düzen sağlamaz; geçersiz durumların oluşmasını engellemeye de yardımcı olur.

Bu nedenle doğru soru “Neden Excel yerine veritabanı?” değil, “Bu problemin gerektirdiği veri bütünlüğü, paylaşım ve sorgulama düzeyi hangi aracı gerektiriyor?” sorusudur.
:::

---

## Veritabanı nedir?

Bir **veritabanı**, belirli bir problem alanına ait verilerin düzenli ve birbiriyle anlamlı biçimde ilişkili olarak saklandığı veri bütünüdür.

Örnek problem alanları:

- Öğrenci işleri
- Hastane randevuları
- E-ticaret siparişleri
- Kütüphane ödünç işlemleri
- Kampüs ekipman takibi

::: {.notes}
Veritabanı kavramını yalnızca “tabloların bulunduğu yer” diye tanımlamak eksik kalır. Temel fikir, belirli bir problem alanına ait verilerin düzenli bir yapı altında birlikte tutulmasıdır.

Örneğin kampüs ekipman sistemi için öğrenci, cihaz ve ödünç alma işlemi birbirinden bağımsız veri parçaları değildir. Bunlar aynı problem alanının parçalarıdır. Bir öğrencinin hangi cihazları aldığı veya bir cihazın geçmişte kimlere verildiği gibi sorular, bu parçalar arasındaki bağlantıların korunmasına bağlıdır.

Veritabanı burada fiziksel bir dosya formatından daha geniş bir kavramdır. Kullanıcı açısından önemli olan; sistemde hangi veri yapılarının bulunduğu, bu yapıların nasıl ilişkili olduğu ve verinin hangi kurallara göre saklandığıdır.

Bu derste ağırlıklı olarak ilişkisel veritabanları üzerinde çalışacağız. Ancak “veritabanı” ile “ilişkisel veritabanı” aynı kavram değildir. İlişkisel model, veritabanı oluşturmanın belirli bir yaklaşımıdır.
:::

---

## VTYS nedir?

**Veritabanı Yönetim Sistemi (VTYS)**, veritabanını yöneten yazılımdır.

Başlıca görevleri:

- Veritabanı ve tablo yapıları oluşturmak
- Veri eklemek, değiştirmek ve silmek
- Veriyi sorgulamak
- Kısıtları ve bütünlüğü uygulamak
- Kullanıcı erişimini yönetmek
- Birden fazla istemcinin çalışmasını koordine etmek

Bu derste temel VTYS: **MySQL Server**

::: {.notes}
Veritabanı ile veritabanı yönetim sistemi birbirine çok yakın kavramlar olduğu için sıklıkla karıştırılır. Veritabanı, saklanan veri ve onun yapısıdır. VTYS ise bu yapıyı oluşturmamızı ve yönetmemizi sağlayan yazılımdır.

Bir benzetme yapmak gerekirse, dosyalarınız ile işletim sistemi aynı şey değildir. Dosyalar saklanan içeriktir; işletim sistemi bu dosyalar üzerinde işlem yapabilmenizi sağlayan mekanizmaları sunar. Benzer biçimde MySQL Server, veritabanlarının kendisi değil, onları yöneten sistemdir.

VTYS kullanıcının verdiği SQL komutlarını yorumlar, istenen işlemi yürütür, veri tiplerini ve kısıtları denetler, yetkileri kontrol eder ve sonucu istemciye döndürür. Ayrıca çok sayıda kullanıcının aynı veri üzerinde çalıştığı durumlarda işlemlerin koordinasyonuna ilişkin mekanizmalar sağlar.

Bu ders bir veritabanı yöneticiliği uzmanlık dersi değildir. Ancak MySQL Server'ın yalnızca “SQL çalıştıran bir program” olmadığını, veri yönetiminin merkezindeki yazılım katmanı olduğunu bilmek sonraki konuları anlamak için önemlidir.
:::

---

## Veritabanı ≠ VTYS ≠ istemci

```text
Veritabanı        → saklanan veri ve yapı
MySQL Server      → VTYS
MySQL Workbench   → istemci / yönetim aracı
```

Aynı kavramlar değildir.

::: {.notes}
MySQL öğrenmeye başlayan öğrencilerde en sık görülen karışıklıklardan biri, MySQL Workbench'i veritabanının kendisi sanmaktır. Workbench yalnızca MySQL Server ile iletişim kurmak için kullanılan istemci araçlarından biridir.

MySQL Server arka planda çalışan veritabanı yönetim sistemidir. Veritabanları ve tablolar sunucu tarafından yönetilir. Workbench ise sunucuya bağlanmamızı, SQL komutları göndermemizi, şema yapısını incelememizi ve sonuçları görmemizi sağlayan grafiksel bir istemcidir.

Aynı MySQL Server'a Workbench dışında komut satırı istemcisi, Python programı, Java uygulaması veya bir web uygulaması da bağlanabilir. Bu ayrım önemlidir; çünkü ders boyunca arayüz değişse bile temel mimari değişmez: bir istemci sunucuya istek gönderir, sunucu veritabanı üzerinde işlemi gerçekleştirir ve sonucu döndürür.
:::

---

## İlişkisel veritabanı yaklaşımı

İlişkisel modelde veri, düzenli satır ve sütun yapılarıyla temsil edilir.

Bir tablo genellikle tek bir tür nesne veya olay hakkında veri tutar.

```text
OGRENCI
--------------------------------
ogrenci_no | ad          | telefon
--------------------------------
240101     | Ayşe Demir  | 0532...
240102     | Can Kaya    | 0533...
```

::: {.notes}
İlişkisel veritabanı yaklaşımı, veriyi relation adı verilen matematiksel yapılara dayalı olarak düzenler. Uygulamada bu yapı kullanıcıya tablo biçiminde görünür. Başlangıç düzeyinde tablo benzetmesi yeterlidir; ancak “relation” ile iki tablo arasındaki “relationship” kavramının aynı şey olmadığını akılda tutmak gerekir.

Bir tablo belirli bir tür nesne veya olay hakkında veri toplar. Örneğin öğrenci tablosu öğrenciler hakkında, cihaz tablosu cihazlar hakkında, ödünç işlemi tablosu ise belirli bir ödünç alma olayı hakkında bilgi tutabilir.

Bu ayrımın amacı yalnızca düzenli görünüm sağlamak değildir. Farklı türdeki bilgileri kendi anlamlı yapılarında tutmak; veri tekrarını azaltmayı, bütünlük kuralları tanımlamayı ve daha sonra bu yapıları sorgularla yeniden bir araya getirmeyi kolaylaştırır.

Tablolar arasındaki ilişkilerin nasıl kurulduğu ikinci haftadan itibaren E-R modeliyle, daha sonra birincil ve yabancı anahtarlarla ayrıntılı biçimde ele alınacaktır.
:::

---

## Tablo, sütun, satır ve veri tipi

| Kavram | Anlamı |
|---|---|
| **Tablo** | Aynı türdeki kayıtların yapısı |
| **Sütun** | Tutulan özelliğin tanımı |
| **Satır / kayıt** | Belirli bir nesne veya olaya ait değerler |
| **Veri tipi** | Sütunda hangi tür değerin tutulabileceği |

::: {.notes}
İlişkisel veritabanının görünen en temel yapısı tablodur. Bir tabloyu elektronik tabloya benzetmek başlangıçta yararlı olabilir, fakat ilişkisel tablonun daha güçlü kurallara sahip olduğunu unutmamak gerekir.

Sütunlar hangi özelliklerin tutulacağını tanımlar. Örneğin `ogrenci_no`, `ad` ve `telefon` sütunları öğrenci tablosunun yapısının parçalarıdır. Satır ise belirli bir öğrenci için bu sütunlara karşılık gelen değerleri içerir.

Veri tipi, bir sütunun kabul edeceği değerlerin türünü belirler. Tarih bilgisini serbest metin olarak tutmak teknik olarak mümkün olsa bile, tarih veri tipi kullanmak sıralama, karşılaştırma ve doğrulama açısından daha anlamlıdır. Benzer biçimde sayısal değerleri metin olarak saklamak, ileride hesaplama ve filtreleme işlemlerini zorlaştırabilir.

İlerleyen haftalarda veri tiplerinin MySQL karşılıklarını ve `NOT NULL`, `UNIQUE`, `PRIMARY KEY` gibi kısıtları ayrıntılı biçimde göreceğiz. Bu aşamada önemli olan, tablonun yalnız hücrelerden oluşmadığını; yapısının da verinin anlamını ve geçerliliğini belirlediğini fark etmektir.
:::

---

## Yapı ile içerik aynı şey değildir

Bir tablonun **yapısı** şunları tanımlar:

```text
ogrenci_no
ad
telefon
```

Tablonun **içeriği** ise zaman içinde değişir:

```text
240101 | Ayşe Demir | 0532...
240102 | Can Kaya   | 0533...
```

::: {.notes}
Veritabanı sistemlerinde önemli ayrımlardan biri, yapının kendisi ile bu yapının içindeki mevcut veridir.

Bir öğrenci tablosunun `ogrenci_no`, `ad` ve `telefon` sütunlarından oluşması tablonun yapısına ilişkin bir bilgidir. Bu yapı bugün de yarın da aynı kalabilir. Buna karşılık tabloya yeni öğrenciler eklenebilir, telefon numaraları değişebilir veya bazı kayıtlar silinebilir. Bunlar tablonun mevcut içeriğini değiştirir.

Veritabanı terminolojisinde yapının tanımı çoğu zaman şema kavramıyla ilişkilendirilir. Bir veritabanı şeması hangi tabloların, sütunların, anahtarların ve kısıtların bulunduğunu tarif eder. Belirli bir anda bu yapılarda bulunan kayıtlar ise veritabanının o andaki durumunu oluşturur.

Bu ayrım daha sonra DDL ve DML komutlarını anlamada temel olacaktır. `CREATE TABLE` gibi komutlar yapıyı tanımlarken, `INSERT` veya `UPDATE` gibi komutlar yapının içindeki veriyi değiştirir.
:::

---

## İstemci–sunucu mimarisi

```text
Kullanıcı
   ↓
İstemci / Uygulama
   ↓
MySQL Server (VTYS)
   ↓
Veritabanı
   ↓
Tablolar ve kayıtlar
```

İstemci isteği gönderir; VTYS işlemi yürütür ve sonucu döndürür.

::: {.notes}
MySQL tipik olarak istemci–sunucu mimarisiyle çalışır. Kullanıcı veritabanı dosyasını doğrudan açıp değiştirmez. Bunun yerine bir istemci uygulaması üzerinden MySQL Server'a bağlanır.

İstemci bir SQL sorgusu gönderdiğinde MySQL Server bu isteği alır, gerekli denetimleri yapar, veritabanındaki ilgili tablolara erişir ve sonucu geri döndürür. Bu istemci MySQL Workbench olabilir; ancak aynı görev bir programlama dili içindeki veritabanı sürücüsü tarafından da gerçekleştirilebilir.

Bu mimari, kullanıcı arayüzü ile veri yönetimi işlevlerini birbirinden ayırır. Bir web uygulamasının ekranı değişse bile veritabanı aynı sunucu üzerinde çalışmaya devam edebilir. Birden fazla uygulama aynı veritabanına kontrollü biçimde erişebilir.

İleride web programlama veya masaüstü uygulama geliştirme derslerinde görülen “uygulama veritabanına bağlanıyor” ifadesi tam olarak bu mimariyi anlatır. Uygulama veritabanı dosyasını elle düzenlemez; VTYS'ye belirli işlemleri yaptırır.
:::

---

## MySQL ekosisteminde hangi parça ne yapar?

```text
MySQL Workbench
      │
      │ bağlantı
      ▼
MySQL Server
      │
      ├── okul_db
      ├── kutuphane_db
      └── ekipman_db
```

Bir sunucu birden fazla veritabanını yönetebilir.

::: {.notes}
MySQL Workbench'te bir bağlantı tanımlarken aslında bir veritabanına değil, bir MySQL Server örneğine bağlanırız. Sunucu üzerinde birden fazla veritabanı bulunabilir.

Workbench'in sol tarafında görülen şema veya veritabanı listesi, istemci programının kendi içinde tuttuğu dosyalar değildir. Bunlar bağlandığımız MySQL Server tarafından yönetilen yapılardır. Workbench bu yapıları görüntüler ve sunucuya komut göndermemizi sağlar.

Bu ayrım hata teşhisinde de önemlidir. Workbench açılıyor olabilir ama MySQL Server çalışmıyorsa bağlantı kurulamaz. Sunucu çalışıyor olabilir fakat yanlış kullanıcı, yanlış parola veya yanlış bağlantı noktası nedeniyle erişim başarısız olabilir. Sunucuya bağlanılmış olsa bile yanlış veritabanı seçilmişse sorgu beklenen tabloyu bulamayabilir.

Bu nedenle ilerleyen laboratuvarlarda sorun giderme sırası önce sunucu ve bağlantıyı, ardından doğru şemayı, tabloyu ve sorguyu kontrol etmek üzerine kurulacaktır.
:::

---

## Tek tabloda her şeyi tutarsak ne olur?

```text
ogrenci      telefon   cihaz   cihaz_turu   alis_tarihi   teslim_tarihi
Ayşe Demir   0532...   K-014   Kamera       2026-09-10   -
Ayşe Demir   0532...   M-008   Mikrofon     2026-09-11   2026-09-13
Ayşe D.      0532...   K-014   Kamera       2026-09-14   -
```

Sorular:

- Aynı öğrenci kaç kez tekrar ediyor?
- `Ayşe Demir` ile `Ayşe D.` aynı kişi mi?
- `K-014` aynı anda iki kişide görünebilir mi?
- Cihaz türü yanlış yazılırsa kaç kayıt etkilenir?

::: {.notes}
Bu tablo ilk bakışta pratik görünebilir; çünkü bütün bilgiler tek yerde durmaktadır. Ancak birkaç kayıt eklendiğinde bile önemli sorunlar ortaya çıkar.

Öğrenci adı ve telefonu her ödünç alma işleminde tekrar edilmektedir. Öğrencinin telefonu değiştiğinde geçmiş satırların tamamını güncellemek gerekir. Bir satır atlanırsa aynı öğrenci için birden fazla telefon numarası oluşabilir. Benzer biçimde cihaz türü her işlem satırında tekrarlandığı için “Kamera” değerinin bir satırda yanlış yazılması sistemin kendi içinde çelişkili bilgi üretmesine neden olabilir.

Daha temel bir sorun kimliktir. “Ayşe Demir” ile “Ayşe D.” aynı kişi midir? İsim tek başına güvenilir bir kimlik tanımlayıcısı değildir. Aynı ada sahip iki farklı kişi de bulunabilir. Bir kaydı diğerinden güvenilir biçimde ayırmak için daha güçlü bir mekanizmaya ihtiyaç vardır.

Bu soruların çözümleri birincil anahtar, yabancı anahtar, ilişkiler ve normalizasyon konularına götürür. Bu hafta bu kavramları çözüm olarak ayrıntılı biçimde kullanmıyoruz; yalnızca hangi veri problemlerine cevap verdiklerini görmeye başlıyoruz.
:::

---

## Hangi bilgi neye aittir?

> Sistem öğrencinin adını ve okul numarasını; cihazın envanter numarasını ve türünü; cihazın ne zaman teslim alındığını ve geri getirildiğini saklamalıdır.

**Öğrenci**

- okul numarası
- ad

**Cihaz**

- envanter numarası
- cihaz türü

**Ödünç alma olayı**

- alış tarihi
- teslim tarihi

::: {.notes}
Veritabanı tasarımının önemli zihinsel adımlarından biri, bir gereksinim cümlesindeki her bilginin hangi nesneye veya olaya ait olduğunu belirlemektir.

Öğrencinin adı ve okul numarası öğrencinin özellikleridir. Cihazın envanter numarası ve türü cihazın özellikleridir. Buna karşılık alış tarihi öğrencinin kalıcı bir özelliği değildir; çünkü aynı öğrenci farklı tarihlerde birçok cihaz alabilir. Alış tarihi cihazın da kalıcı bir özelliği değildir; aynı cihaz farklı zamanlarda farklı öğrencilere verilebilir. Bu bilgi belirli bir ödünç alma olayına aittir.

Bu ayrım, ikinci haftada ele alınacak E-R modelinin temel sezgisini oluşturur. E-R modelinde gerçek dünyadaki nesneleri, bu nesnelerin özelliklerini ve aralarındaki ilişkileri sistematik biçimde temsil edeceğiz.

Burada amaç hemen tablo çizmek değil, gereksinimin içindeki farklı bilgi türlerini ayırabilmektir. İyi bir veritabanı tasarımının başlangıç noktası SQL komutu değil, problem alanını doğru anlamaktır.
:::

---

## Bu hafta bilerek çözmediğimiz sorular

- Bir öğrenciyi benzersiz olarak nasıl tanımlarız?
- Öğrenci ile ödünç işlemi arasındaki ilişki nasıl gösterilir?
- Tekrar eden veriyi nasıl azaltırız?
- Hangi alanların boş bırakılması yasak olmalıdır?
- Bir cihazın var olmayan bir öğrenciye atanmasını nasıl engelleriz?

Bu sorular sonraki haftaların konusudur.

::: {.notes}
İlk haftanın amacı veritabanı tasarımının bütün araçlarını bir anda öğretmek değildir. Önce hangi problemlerin çözülmesi gerektiğini netleştirmek gerekir.

Bir öğrenciyi benzersiz olarak ayırt etme problemi anahtar kavramına götürür. Öğrenci, cihaz ve ödünç alma arasındaki bağlantılar E-R modeli ve ilişkilerle açıklanacaktır. Tekrar ve güncelleme sorunları normalizasyon konusu içinde sistematik biçimde incelenecektir. `NOT NULL`, `UNIQUE`, `PRIMARY KEY` ve `FOREIGN KEY` gibi kısıtlar ise veritabanının geçersiz durumları nasıl engellediğini gösterecektir.

Bu sıralama önemlidir. Anahtar veya normalizasyon kavramını yalnızca tanım olarak ezberlemek yerine, hangi somut veri problemini çözdüğünü bildiğimizde tasarım kararlarının gerekçesi daha açık hale gelir.
:::

---

## Kendini kontrol et

1. Veritabanı ile VTYS arasındaki fark nedir?
2. MySQL Workbench neden veritabanının kendisi değildir?
3. Elektronik tablo hangi tür gereksinimlerde yetersiz kalabilir?
4. Tablo, sütun ve satır hangi rolleri üstlenir?
5. Veri tipi seçimi neden yalnızca biçimsel bir tercih değildir?
6. İstemci–sunucu mimarisinde SQL komutunu kim yürütür?
7. “Alış tarihi” neden öğrencinin kalıcı bir özelliği değildir?

::: {.notes}
Bu sorulara yalnız kısa tanımlarla değil, gerekçeleriyle cevap verebilmek gerekir.

Örneğin “VTYS veritabanını yönetir” demek başlangıç için doğrudur; fakat daha güçlü cevap, VTYS'nin veritabanı yapısını oluşturduğunu, sorguları yürüttüğünü, veri bütünlüğünü ve erişimi yönettiğini açıklamalıdır.

Benzer biçimde “Workbench istemcidir” ifadesi, Workbench'in MySQL Server'a bağlantı kurduğunu ve SQL komutlarını sunucuya gönderdiğini açıklayabildiğinizde anlam kazanır.

Haftanın sonunda hedef, SQL sözdizimi yazmak değildir. Hedef; veriyi saklama problemi ile veriyi yönetme problemini ayırabilmek, veritabanı–VTYS–istemci kavramlarını doğru yere oturtmak ve ilişkisel yapının temel bileşenlerini tanıyabilmektir.
:::
