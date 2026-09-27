---
title: "BGYS ve Yönetim Döngüsü: Güvenliği Yönetilebilir Kılmak"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: today
execute:
  echo: false
---

::: {.callout-warning}
## Taslak Çalışma Notu
Bu doküman BGT 201 Bilgi Güvenliği Yönetimi I dersi için resmî izlence ve kaynak analizi temel alınarak hazırlanmış ilk çalışma taslağıdır. Haftalık pedagojik revizyonlarla olgunlaştırılmaya devam edecektir.
Ana İzlence: [[crs-bgt201|Ders İzlence Merkezi]]
:::

## BGYS ve yönetim döngüsü

**Güvenlik kararlarını kurum içinde yaşatmak**

BGT 201 — Bilgi Güvenliği Yönetimi I

::: {.notes}
Önceki konuda bir bilgi varlığını gizlilik, bütünlük ve erişilebilirlik açısından gerekçelendirdik. Buradaki yeni sorun, bu gereksinimleri tek tek bilmenin kurum adına karar vermeye yetmemesidir. Bir gereksinimin kim tarafından sahiplenileceği, nasıl uygulanacağı ve uygulamanın sürdüğünün nasıl anlaşılacağı da belirlenmelidir. BGYS bu ilişkileri kuran yönetim sistemi olarak ele alınacaktır.
:::

---

## Kurumun cevaplaması gereken üç soru

Kurgusal birim; öğrenci/aday kayıtları, personel belgeleri ve hizmet başvurularıyla çalışıyor.

1. **Neyi ve hangi faaliyeti yöneteceğiz?**
2. **Kararın ve uygulamanın sahibi kim?**
3. **İşleyişin sürdüğünü hangi kanıt gösterecek?**

::: {.notes}
Bir başvuru kaydının gizli olması gerektiğini söylemek ilk sorunun yalnız küçük bir bölümünü yanıtlar. Bu gereksinim, personel dosyalarının da aynı süreçte olup olmadığını, yetki kararını kimin verdiğini ya da yanlış uygulamanın nasıl fark edileceğini belirlemez. Güvenlik gereksiniminin kurumsal karara dönüşmesi için kapsam, sorumluluk ve kanıt birlikte görünmelidir. Bu ihtiyaç BGYS tanımına geçişi kurar.
:::

---

## BGYS hangi ilişkiyi kurar?

**Bilgi güvenliği yönetim sistemi (BGYS)**, kurumun güvenlik kararlarını bağlamına göre yönetmesini sağlar.

```text
kararı kur → uygula → kanıtla → gözden geçir → iyileştir
       ↑                                      │
       └──────── değişen bilgi ve bulgu ──────┘
```

::: {.notes}
Tanımdaki fiiller birbirinden kopuk görevler değildir. Kurum önce neyi, hangi amaçla yöneteceğine karar verir; kararı sorumlular aracılığıyla uygular; uygulamanın izini üretir; bu izi hedef ve kurallarla karşılaştırır; bulgu ya da değişen koşul varsa kararı yeniler. Böylece güvenlik, bir defada tamamlanan iş olmaktan çıkar ve geri beslemeli bir yönetim davranışına dönüşür.
:::

---

## BGYS neyle eşitlenemez?

| Tek başına unsur | Sistemdeki olası rolü | Neden BGYS'nin tamamı değildir? |
|---|---|---|
| Erişim aracı | Bir kontrolü uygular | Amaç, sahiplik ve gözden geçirme kararını tek başına kurmaz |
| Politika belgesi | Yönü ve kuralı kaydeder | İşleyişin gerçekleştiğini tek başına göstermez |
| İyileştirme projesi | Belirli bir değişikliği başlatır | Kararların zaman içinde yeniden ele alınmasını tek başına sağlamaz |

::: {.notes}
Bu karşılaştırma, araç, belge ve projenin değersiz olduğunu söylemez. Ayrım bunların sistem içindeki görevini sınırlar. Örneğin bir erişim aracı seçilmiş kuralı uygular; fakat kimin hangi iş için erişeceği ve bu yetkinin ne zaman yeniden inceleneceği yönetim kararıdır. Aynı nedenle politika yazılmış olması, politikanın işletildiğini ve sonuç verdiğini kanıtlamaz. Bu ayrımın ardından yönetim kararının ilk girdisine, kurum bağlamına geçilir.
:::

---

## Güvenlik kararı boşlukta alınmaz

```text
kurumun hizmeti ─┐
işlenen bilgiler ├─→ BAĞLAM → yönetilecek karar alanı
iç/dış etkenler  ┤
ilgili taraflar ─┘
```

**Vaka örneği**

- Başvuru sahibi: kaydın doğru işlenmesi ve ilgisiz kişilere açılmaması
- Birim yöneticisi: sürecin zamanında yürüdüğünün bilinmesi
- Çalışan: hangi kayda, hangi amaçla erişebileceğinin açıklığı

::: {.notes}
Bağlam, hazır bir güvenlik önlemleri listesinden önce gelir. Aynı kayıt, farklı hizmetlerde farklı amaçlara, taraflara ve sorumlulara bağlanabilir. Bu nedenle kurumun yaptığı iş ile ilgili tarafların karar ihtiyacı anlaşılmadan uygulanabilir bir güvenlik sınırı kurulamaz. Bağlamın işlevi bütün ayrıntıları toplamak değil, hangi kararların yönetileceğini anlamlı biçimde sınırlandıracak girdileri sağlamaktır.
:::

---

## “Tüm kurumun güvenliği” neden kapsam değildir?

Bu ifade şu soruları yanıtsız bırakır:

- Hangi hizmet ve süreç?
- Hangi bilgi?
- Hangi organizasyon parçası?
- Hangi kararın sahibi?

**Kapsam**, güvenlik yönetiminin ele aldığı hizmeti, süreci, bilgiyi ve organizasyon parçasını anlaşılır biçimde sınırlar.

::: {.notes}
Geniş bir ifade güçlü görünebilir; fakat uygulanabilir karar üretmiyorsa yönetilebilir değildir. Kapsamın işi kurumu küçük göstermek değil, sorumluluk ile karar alanını eşleştirmektir. Bir sınırın belirtilmesi de tek başına yeterli olmaz; sınırın kurum işleyişine dayanan bir gerekçesi bulunmalıdır. Bu ölçütle vaka için örnek kapsam ifadesi okunabilir.
:::

---

## Kapsam ifadesi üç parçayı bağlar

| Parça | Vaka karşılığı |
|---|---|
| **Dahil edilen iş ve bilgi** | Başvuruları alma, değerlendirme ve sonuçlandırma; bu süreçlerdeki başvuru kayıtları |
| **Bilinçli sınır ve gerekçesi** | Personel özlük dosyalarının tüm yaşam döngüsü; farklı süreç sahibi ve işleyiş |
| **Güvenlik amacı** | Kayıtların yetkili kişilerce doğru ve gerektiğinde erişilebilir işlenmesi |

::: {.notes}
Bu yapı gerçek bir kurum beyanı ya da uyum belgesi değildir; kapsam kararının mantığını görünür kılan vaka ifadesidir. Dahil edilen bölüm hangi işin yönetileceğini, sınır sorumluluğun nerede değiştiğini, amaç ise güvenlik kararının neyi korumaya çalıştığını gösterir. Kapsam donmuş değildir: hizmet, bilgi veya sorumluluk değişirse sınır yeniden değerlendirilebilir. Yeniden değerlendirmeyi kimin yapacağı sorusu rol ilişkisine götürür.
:::

---

## Sorumluluk tek kişiye yüklenmez

| Rol / işlev | Sorumluluk |
|---|---|
| **Yönetim** | Yön verir, öncelik ve sahiplik kararlarını destekler |
| **Süreç/varlık sahibi** | Uygulamayı ve gereksinimin karşılanmasını takip eder |
| **Uygulayıcı** | Tanımlı işleyişe göre işler, kaydı üretir |
| **Gözden geçiren işlev** | Kanıt ve bulguyu değerlendirir |

Bunlar zorunlu unvanlar ya da ardışık aşamalar değildir; belirsiz kalmaması gereken farklı sorumluluklardır.

::: {.notes}
Bu tablo bir komuta hiyerarşisi veya iş sırası değildir — dört satır aynı anda, farklı sorumluluk türlerini temsil eder. Küçük bir birimde aynı kişi birden fazla rolü üstlenebilir; öğretim açısından gerekli ayrım, kararın verilmesi, uygulanması ve değerlendirilmesinin belirsiz kalmamasıdır. Rol adları kurumdan kuruma değişebilir. Önemli olan unvan değil, her karar için sahipliğin ve doğrulama sorumluluğunun izlenebilir olmasıdır. Bu roller birlikte, kontrolün amaç–sorumlu–kanıt–gözden geçirme zincirinde sahipliği belirsiz bırakmaz.
:::

---

## Bir kontrolü yönetilebilir yapan dört soru

**Kural:** Başvuru kayıtlarına yalnızca yetkili değerlendirme personeli erişir.

| Soru | Vaka yanıtı |
|---|---|
| Amaç nedir? | Yetkisiz görüntüleme ve değişikliği önlemek |
| Sorumlu kimdir? | Başvuru süreci sahibi |
| Uygulama kanıtı nedir? | Yetki ataması ve erişim incelemesi kaydı |
| Ne gözden geçirilir? | Yetkinin rol ve iş ihtiyacına hâlâ uygunluğu |

::: {.notes}
Kontrol, riski veya bir gereksinimi yönetmek için seçilen ve işletilen önlem ya da uygulamadır. Yalnız kural cümlesi kontrolün nasıl yönetileceğini göstermez. Amaç kontrolün neden var olduğunu, sorumlu uygulamayı kimin takip edeceğini, kanıt işleyişin izini ve gözden geçirme de bu izin hangi ölçüte göre değerlendirileceğini açıklar. Dört soru birlikte cevaplandığında kontrol, satın alınmış bir üründen ya da yazılmış bir cümleden yönetim döngüsünün parçasına dönüşür.
:::

---

## Kanıt, yalnızca “bir dosya var” demek değildir

```text
kararlaştırılan uygulama
          ↓
doğrulanabilir iz / kayıt
          ↓
hedef ve kurallarla karşılaştırma
          ↓
bulgu ve gerekiyorsa aksiyon
```

**Gözden geçirme**, işleyişi kanıt ve bulgular üzerinden değerlendirir; saldırı testiyle aynı iş değildir.

::: {.notes}
Bir kaydın kanıt değeri, kararlaştırılmış uygulamanın yürüyüp yürümediğini değerlendirmeyi mümkün kılmasından gelir. Örneğin yalnızca dosyanın bulunması, yetkinin doğru kişiye verildiğini veya güncelliğini göstermez; kayıt, yetki kararı ve inceleme ölçütüyle ilişkilendirilmelidir. Gözden geçirme de tek bir teknik test türüne indirgenmez. Buradaki işlev, sistemin hedeflere ve kararlaştırılmış kurallara göre çalışıp çalışmadığını değerlendirmektir.
:::

---

## Yönetim döngüsü nasıl işler?

```text
PLANLA
bağlam · kapsam · amaç · sorumluluk
   ↓
UYGULA
kontrol · işleyiş · kayıt
   ↓
İZLE ve DEĞERLENDİR
kanıt · gözden geçirme · bulgu
   ↓
İYİLEŞTİR
aksiyon · yeniden değerlendirme
   └──────────────→ PLANLA
```

::: {.notes}
Planlama hangi kararların yönetileceğini kurar. Uygulama, seçilen kontrolü sorumlularıyla birlikte işletir ve iz üretir. İzleme ile değerlendirme, kanıtı amaç ve kurallarla ilişkilendirerek bulguya dönüştürür. İyileştirme ise yalnız hatayı düzeltmekle kalmaz; gerekirse kapsamı, sorumluluğu ya da uygulama biçimini yeniden ele alır. Okun yönü bu nedenle başlangıca döner. Bu model, bir standardın madde sırası veya sertifikasyon yolu olarak okunmamalıdır.
:::

---

## Geri besleme kararı nasıl değiştirir?

### Değişen koşul

Yeni başvuru yazılımı devreye girer  
→ kapsam ve erişim sorumlulukları yeniden değerlendirilir.

### Bulgu

Eski çalışanın erişimi kaldırılmamıştır  
→ erişim düzeltilir **ve** yetki değişikliklerinin izlenme biçimi gözden geçirilir.

::: {.notes}
İki örnek geri beslemenin farklı kaynaklarını gösterir. İlkinde hata bulunması gerekmez; hizmetteki değişiklik eski kapsam ve sorumluluk kararını geçersiz kılabilir. İkincisinde tekil uygunsuzluğu gidermek gereklidir ama yeterli değildir. Aynı durumun yeniden oluşmasını engellemek için yetki değişikliklerinin nasıl izlendiği de değerlendirilir. Risk sürecinin periyodik değerlendirmeye dönmesi de aynı tekrar mantığını destekler: yeni bilgi, önceki kararı yeniden açabilir.
:::

---

## Vaka çalışması 1 — kapsam ifadesi

Kısa bir taslakta şu üç soruyu yanıtlayın:

1. Hangi hizmet/süreç ve hangi bilgi varlıkları kapsama giriyor?
2. Bilinçli sınır nerede ve gerekçesi ne?
3. Güvenlik amacı neyi korumayı hedefliyor?

**Kontrol sorusu:** Sınır, sorumluluğu ve uygulanabilir karar alanını görünür kılıyor mu?

::: {.notes}
Amaç bir sertifikasyon dosyası üretmek değil, kapsam kararının bileşenlerini açıkça ilişkilendirmektir. “Personel belgeleri kapsam dışıdır” gibi gerekçesiz bir etiket yeterli değildir; süreç sahibinin ve işleyişin neden farklı olduğu belirtilmelidir. Benzer biçimde güvenlik amacı genel bir “güvenliği sağlamak” cümlesi yerine vakadaki bilgiyle ilişki kurmalıdır. Bu kapsam, ikinci kayıttaki rollerin hangi karar alanında çalışacağını belirler.
:::

---

## Vaka çalışması 2 — ilgili taraf ve rol taslağı

| İlgili taraf / rol | Karar ihtiyacı | Sorumluluk | Kanıt / gözden geçirme |
|---|---|---|---|
| Birim yöneticisi | Hizmetin güvenilir yürütülmesi | Amaç ve sahipliğin açıklığı | Kapsam ve sorumluluk kararı |
| Süreç sahibi | Kimin hangi iş için erişeceği | Uygunluğu takip etmek | Yetki ataması ve inceleme kaydı |
| Uygulayıcı | İş için gereken erişim | Tanımlı işleyişi izlemek | İşlem kaydı / uygulama izi |
| Gözden geçiren | Kurala uygun işleyiş | Kanıt ve bulguyu değerlendirmek | Bulgu, aksiyon, yeniden inceleme |

::: {.notes}
Tablodaki adlar evrensel unvanlar değildir; vaka yorumuna göre değiştirilebilir. Her satırın öğretim işi, bir beklentiyi belirli bir sorumluluğa ve doğrulanabilir ize bağlamaktır. Bir rolün kanıt alanı boş kalıyorsa uygulamanın nasıl değerlendirileceği belirsizdir. Sorumluluk alanı boş kalıyorsa kaydın sahibi yoktur. Taslak bu iki boşluğu görünür kılar ve kontrolün yönetim döngüsünde nasıl yer aldığını sınar.
:::

---

## Döngünün taşıdığı kayıtlar

```text
bağlam + kapsam + roller
             ↓
varlık · erişim · dokümantasyon · risk/gap · aksiyon kayıtları
             ↓
       yeni kanıt ve bulgu
             └────────→ kararların yeniden değerlendirilmesi
```

**Son karar sorusu:** Bu kararın sahibi kim, uygulandığını ne gösterecek ve bilgi değiştiğinde kim yeniden bakacak?

::: {.notes}
Kapsam ve rol kararları daha sonra üretilecek kayıtların hangi kuruma, sürece ve sorumluluğa ait olduğunu anlamlı kılar. Döngü bu kayıtların bütün ayrıntılarını önceden çözmez; yeni kanıtı önceki kararla ilişkilendirecek yapıyı kurar. Bu sunum ayrıntılı bir risk yöntemi veya puanlama kurmaz — risk/gap kaydı burada yalnız köprü olarak görünür; bağlam, kapsam ve sahiplik, daha sonra üretilecek risk/aksiyon kayıtlarının hangi karar alanına bağlanacağını gösterir. ISO 27001 adı BGYS bağlamında bir referans olarak anılabilir, fakat bu yönetim döngüsü güncel madde listesi, kontrol kataloğu veya sertifikasyon adımları yerine geçmez. Kapanış sorusu, öğrencinin herhangi bir kontrolü araç adıyla değil sahiplik, kanıt ve geri besleme ilişkisiyle değerlendirmesini sağlar.
:::
