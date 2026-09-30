---
title: "Standartlar, Çerçeveler ve Uyum"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: today
execute:
  echo: false
---

## Standartlar, çerçeveler ve uyum


---

## Bir değişiklik, altı yanlış alıcı

Kayıt biriminde “başvuru belgesi adaya otomatik gitsin” isteği e-postayla dış BT desteğine iletildi. Özellik pazartesi açıldı.

**Yazılı onay yok. Test kaydı yok.**

::: {.notes}
Birim öğrenci ve aday kayıtlarını, personel belgelerini ve hizmet başvurularını yönetir. Birim sorumlusu, iki kayıt görevlisi ve bir belge/arşiv görevlisi vardır. Başvuru uygulamasını dış destek işletir. E-posta isteği hizmette gerçek bir değişiklik başlattı, ancak onay sahibi ve test sonucu kayda bağlanmadı. Olay hem yazılım kuralını hem karar sürecini ilgilendirir.
:::

---

## Hatanın deseni

| İlk 5 iş günü | Değer |
|---|---:|
| Otomatik e-posta | 240 |
| Başkasının belgesi eklenen e-posta | 6 |
| Hata oranı | 6 / 240 = **%2,5** |
| Altı hatanın ortak noktası | Aynı gün + aynı soyadlı adaylar |

**Sistem eşlemesi: soyadı + başvuru tarihi**

::: {.notes}
Hata rastgele görünmüyor: aynı gün başvuran iki Yılmaz, yalnız soyadı ve tarihle birbirinden ayrılamaz. Oran hatanın büyüklüğünü, ortak desen ise olası nedenini gösterir. Kontrol seçimini bu gözlemden gerekçelendirebiliriz; varsayımsal bir risk puanı üretmeye gerek yoktur.
:::

---

## Hatanın fark edilmesi ve hizmet etkisi

| Olay izi | Sonuç |
|---|---|
| 4. gün aday telefon etti | İçeride tespit edilmedi |
| Özellik kapatıldı | 1 iş günü elle gönderim |
| Elle işleme geçildi | 35 başvuru gecikti |

::: {.notes}
Yanlış alıcıya gönderim belgenin gizliliğini, yanlış eşleme kaydın doğruluğunu etkiler. Kurumun kendisinin hatayı bulamaması tespit eksikliğidir. Özelliği kapatmak yeni yanlış gönderimi durdururken hizmetin hızını düşürür. Kontrol kararı bu üç sonucu birlikte görmelidir.
:::

---

## Üç öneri neden yeterli değil?

| Söyleyen | Cümle |
|---|---|
| Birim sorumlusu | “ISO'ya uyalım, bu iş biter.” |
| Dış destek | “ITIL'e göre düzeltiriz.” |
| Kayıt görevlisi | “Bir kontrol ekleyelim.” |

**Kim karar verecek? Ne uygulanacak? İşlediğini hangi kayıt gösterecek?**

::: {.notes}
İlk cümle bir yönetim sistemine, ikinci hizmetin işleyişine, üçüncü tek bir önleme bakar. “Hepsi güvenlik standardı” açıklaması bu farkı yok eder. Referans adı söylemek karar sahibi ve kanıt oluşturmaz; önce olayın hangi sorulara ayrıldığını bulmak gerekir.
:::

---

## Aynı olay, dört yönetim sorusu

| Soru | Aranan şey |
|---|---|
| BGYS hatayı nasıl ele alır? | Risk, kontrol kararı, izleme |
| Yanlış alıcı nasıl önlenir ve fark edilir? | Kontrol uygulaması |
| BT değişikliğine kim karar verdi? | Yetki, hedef, hesap verme |
| Hizmet değişikliği nasıl yürütülür? | Test, devreye alma, kesinti |

::: {.notes}
Test kaydı riskin kabul edildiğini göstermez; risk kaydı da testin yapıldığını göstermez. Aynı kanıt farklı kararlara destek olabilir, fakat soruların işlevi ayrıdır. Dört soruyu ayırmak, dış referansları doğru yerde kullanmanın başlangıcıdır.
:::

---

## Dört soru, dört referans

| Soru | Referans ve yayımlayıcı | İşlev |
|---|---|---|
| BGYS | ISO/IEC 27001:2022 · ISO | BGYS gereksinimleri |
| Kontrol | ISO/IEC 27002:2022 · ISO | Kontrol rehberliği |
| Karar hakkı | COBIT · ISACA | Bilgi ve teknoloji yönetişimi/yönetimi |
| Hizmet | ITIL · PeopleCert | Dijital ürün ve hizmet yönetimi |

::: {.notes}
27001 kurumun güvenlik riskini, gerekli kontrolü, sorumluluğu ve izlemeyi yönetmesine ilişkin beklentiyi koyar. 27002 uygulama seçenekleri sunar. COBIT BT kararının hedef ve sorumluluk ilişkisine, ITIL değişiklik ve kesintinin hizmet içinde yürütülmesine bakar. COBIT ve ITIL ISO ailesinin üyeleri veya BGYS standardı değildir. İşlev tanımları sonda verilen yayımlayıcı kaynaklarına dayanır.
:::

---

## Referansların bıraktığı boşluk

| Referans | Tek başına vermediği | Kurumda gereken iz |
|---|---|---|
| 27001 | Eşlemenin teknik yöntemi | Risk ve kontrol kararı |
| 27002 | Kurumun hangi seçeneği seçtiği | Uygulama tasarımı |
| COBIT | Ek dosyanın doğrulama yöntemi | Onay ve izleme sahibi |
| ITIL | Güvenlik riskinin kabulü | Talep, test, kesinti kaydı |

::: {.notes}
27001 “aday numarası kullan” demez; kurum olay verisinden yöntemi seçer. 27002'de bir seçeneğin bulunması o seçeneğin seçildiğinin veya uygulandığının kanıtı değildir. Değişiklik onayı hem COBIT'in karar hakkı hem ITIL'in değişiklik akışı açısından ele alınabilir; her katkı ayrı yazılır. Dördünün ortak sınırı kurum kararı ve kanıt gerektirmesidir.
:::

---

## Kısa uygulama: cümleyi soruya bağlayın

| Kod | Cümle |
|---|---|
| A | Dış desteğin hatalı değişiklik sayısını kim raporlar? |
| B | Aynı soyadlı test adaylarıyla deneme kaydı var mı? |
| C | Risk ve seçilen kontrolün gerekçesi nerede? |
| D | Alıcı doğrulamada hangi yöntemler düşünülebilir? |

**Her cümle için referans ve gerekçe yazın.**

::: {.notes}
B'deki test kaydı sonradan BGYS kanıtı olarak da kullanılabilir. Cümle ilk olarak devreye alma öncesi denemeyi sorgular. Eşleme referans adından değil, cümlenin istediği karar türünden yapılmalıdır.
:::

---

## Kısa uygulamanın çözümü

| Kod | Referans | Gerekçe |
|---|---|---|
| A | COBIT | İzleme ve hesap verme sahibi |
| B | ITIL | Değişiklik öncesi test |
| C | ISO/IEC 27001 | Risk ve kontrol gerekçesi |
| D | ISO/IEC 27002 | Uygulama seçenekleri |

::: {.notes}
A'da dış destek performansının kime raporlandığı bir yönetişim kararıdır. B hizmet değişikliğinin nasıl güvenle devreye alınacağına bakar. C kontrol seçiminin BGYS içindeki izini arar. D henüz seçim yapmaz, seçenekleri araştırır. Bir test kaydı birden fazla kararı desteklese de sorular eş anlamlı hâle gelmez.
:::

---

## Gereksinimden kanıta zincir

```text
27001 gereksinimi
    → kurumun kontrol seçimi ve gerekçesi
    → 27002 rehberliğiyle uygulama
    → sorumlu ve kanıt
    → gözden geçirme → gerekirse düzeltme
```

::: {.notes}
Her ok kurum kararıdır. 27001, BGYS içinde riskin ele alınmasını ve kontrol kararının izlenmesini bekler; teknik yöntemi seçmez. 27002 uygulama tasarımına rehberlik eder; kurumun kararını vermez. Belirli bir maddeye uyum iddiası için güncel tam metin gerekir; burada madde veya kontrol numarası kullanılmaz.
:::

---

## Seçim gerekçesi olay verisinden çıkar

| Gözlem | Korunma ihtiyacı |
|---|---|
| Kimlik ve başvuru bilgisi yanlış kişiye gitti | Gizlilik |
| Belge yanlış adayla eşlendi | Bütünlük |
| Özellik kapatılınca 35 yanıt gecikti | Erişilebilirlik |

::: {.notes}
Kontrol amacını “güvenliği artırmak” diye bırakmak hangi hatanın önleneceğini belirsizleştirir. Gizlilik yanlış alıcıyı, bütünlük yanlış eşlemeyi, erişilebilirlik hizmet gecikmesini açıklar. Bu üç etki aynı olayda görüldüğü için önleme, tespit ve düzeltme birlikte düşünülür.
:::

---

## Kontrol kaydının omurgası

**Amaç → uygulama → sorumlu → kanıt → gözden geçirme**

Örnek amaç: **Belge yalnız ilgili adaya gider; aday–belge eşlemesi doğru olur.**

::: {.notes}
Amaç hatayı tanımlar, uygulama somut işlemi, sorumlu işlemi kimin yürüteceğini gösterir. Kanıt yalnız kararın yazıldığını değil gerçekleşip işlemesini de gösterebilmelidir. Gözden geçirme bulgu oluştuğunda kararın yeniden ele alınmasını sağlar. Bu zincir bir rehber önerisini doğrudan “uygulanıyor” diye yazmayı önler.
:::

---

## İki eksen: neyle ve ne için?

| Önlem | Nitelik | İşlev |
|---|---|---|
| Aday numarası + doğum yılı eşlemesi | Teknik | Önleyici |
| Haftalık gönderim örneklemi | Operasyonel | Tespit edici |
| Durdurma ve olay kaydı | Yönetimsel/operasyonel | Düzeltici |

::: {.notes}
“Teknik” ve “önleyici” aynı sınıflamanın iki alternatifi değildir. İlk önlem hatayı olmadan engeller, ikincisi oluşmuş hatayı bulur, üçüncüsü zararı sınırlar ve nedeni işler. Nitelik ve işlev ayrımı Ders sunumu 2'nin 62–67. slaytlarındaki tarihsel anlatımdan alınan düşünme aracıdır; güncel ISO kontrol taksonomisi sayılmaz.
:::

---

## “Var” kanıtı ile “işliyor” kanıtı

| Kanıtın sorusu | Örnek |
|---|---|
| Kontrol kuruldu mu? | Onaylı talep; 10 adayla test |
| Sürekli çalıştı mı? | 4 haftalık örneklem; bulgu ve kapanış notu |

**Gönderim günlüğü ≠ incelenmiş gönderim günlüğü**

::: {.notes}
Yeni kuralın 10 test adayında hata üretmemesi kurulumla ilgili kanıttır. Dört hafta boyunca hatanın izlenmesi ise işleyişe ilişkin kanıttır. Kayıt duruyor diye birinin kaydı incelediği varsayılamaz; inceleyen kişi, tarih ve bulgu sonucu kaydedilmelidir.
:::

---

## Haftalık 20 örnek ne kadar yakalar?

Olay haftasındaki **%2,5** hata oranı sürerse:

```text
20 örnekte hiç hata görmeme ≈ 0,975²⁰ ≈ %60
20 örnekte en az bir hata görme ≈ %40
80 örnekte en az bir hata görme ≈ %87
```

::: {.notes}
Hesap bağımsız ve aynı olasılıkla seçilen gönderimler varsayar; gerçek performans garantisi değildir. Tek gönderimin doğru olma olasılığı 0,975, yirmisinin doğru olma olasılığı bunun yirminci kuvvetidir. Dört haftalık 80 örnekte hiç hata görmeme yaklaşık %13'e iner. Hataların tamamı aynı gün ve soyadlı çiftlerde olduğundan örneklemi önce bu gruptan seçmek daha anlamlıdır. Tespit, önleyici eşleme kuralının yerine geçmez.
:::

---

## Çözümlü kayıt: yanlış alıcıya gönderim

| Alan | Karar |
|---|---|
| Gerekçe | 6/240 hata; aynı gün + aynı soyadı |
| Amaç | Doğru aday–belge eşlemesi |
| Önleme | Aday numarası + doğum yılı; ekte aday numarası |
| Tespit | Haftada 20 gönderim; önce riskli çiftler |
| Düzeltme | Durdur; silme iste; olay kaydı aç |

::: {.notes}
27001 riskin ele alınması ve kontrolün izlenmesi beklentisini, 27002 uygulama rehberliğini temsil eder. Dış BT eşleme kuralını uygular. Birim sorumlusu değişikliği onaylar ve gönderimi yapmayan kişi olarak örneklemi inceler. Kayıt görevlisi hatalı gönderimde düzeltme ve olay kaydını yürütür. Önlemlerin işlevi farklı olduğu için yalnız birini yazmak olayın bütününü karşılamaz.
:::

---

## Çözümlü kaydın kanıtı ve durumu

| Alan | Kayıt |
|---|---|
| Kurulum | Onaylı talep; 10 test adayı, 2 aynı soyadlı çift, 0 hata |
| İşleyiş | 4 hafta / 80 gönderim örneklemi ve bulgular |
| Gözden geçirme | 4. hafta sonunda kural ve sıklık yeniden değerlendirilir |
| Uygulanabilirlik | Evet; durum **kısmen**: örneklem başladı, yeni kural testte |

::: {.notes}
Uygulanabilirlik Bildirgesi (SoA), değerlendirilen kontrollerin uygulanabilirliğini, gerekçesini ve gerçek durumunu gösteren kayıt fikridir. Alıcı doğrulama olay verisi ve belge içeriği nedeniyle uygulanabilir. Yeni kural testteyse “uygulanıyor” yazmak yanlıştır; kanıt yeri test kaydı ve örneklem çizelgesidir. Standart maddesi veya kontrol numarası güncel tam metin görülmeden yazılmaz. Kişisel veri boyutu ayrı yetkili metinle değerlendirilir.
:::

---

## “Uygulanmaz” da bir karardır

| Önlem | Birimde karar | Açık bağımlılık |
|---|---|---|
| Sunucu odasına fiziksel giriş kontrolü | Birimin kendi sunucusu yok | Dış desteğin sorumluluğu sözleşme/tedarikçi kaydında izlenir |

::: {.notes}
Birimin sunucu odası olmaması fiziksel güvenliği önemsiz yapmaz; sorumluluğun dış destekte nasıl yürüdüğü izlenir. “Uygulanmaz” satırı da gerekçe ve bağımlılık kaydı ister. Ders sunumu 2'nin 70. slaytındaki “çoğunlukla uyulur” ifadesi ölçüt değildir; kararı kurumun bağlamı ve riski belirler.
:::

---

## Eski kaynakta tür hatası

**Ders sunumu 2, slayt 9:** “En yaygın BGYS'ler: COBIT, ITIL, ISO 27001.”

| Doğrulama sorusu | Sonuç |
|---|---|
| Üçü aynı tür referans mı? | **Yanlış tür eşitlemesi** |

::: {.notes}
ISO/IEC 27001 BGYS gereksinimidir. ISACA COBIT'i bilgi ve teknoloji yönetişimi/yönetimi, PeopleCert ITIL'i hizmet yönetimi çerçevesi olarak tanımlar. Düzeltilmiş ifade: “ISO/IEC 27001 BGYS gereksinimlerini koyar; COBIT ve ITIL kararların yönetişim ve hizmet bağlamına yardım eder.” İddianın kaynak konumu, dönemi, yetkili kaynak ve gerekçe birlikte kaydedilir.
:::

---

## Eski iddiayı doğrulama kaydı

```text
iddia → kaynak konumu → dönem → yetkili kaynak
      → doğrulama sorusu → sonuç sınıfı → gerekçe
```

| Sınıf | Ayırıcı soru |
|---|---|
| Yanlış tür eşitlemesi | Farklı referanslar aynı mı sayılmış? |
| Tarihsel / güncel değil | Eski sürüme mi bağlı? |
| Yetkili metinden okunmalı | Güncel ayrıntı elde mi? |
| Nedensel / abartılı | Etiket sonuç mu doğuruyor? |
| Bu kaynaklarla doğrulanamaz | Başka yetkili metin mi gerekir? |

::: {.notes}
Bir sektör zorunluluğu standart tanıtım sayfasından değil mevzuat veya şartnameden öğrenilir. Sertifikanın insan hatasını kendiliğinden azaltması ise sürüm farkından çok nedensel abartıdır. “Doğrulanamaz” cevabı hangi metnin niçin gerektiğini söylediğinde tam bir cevaptır.
:::

---

## Eski kaynak uygulaması: 1–4

| No | İddia | Konum |
|---|---|---|
| 1 | “ISO/IEC 27001:2013” | Slayt 10 |
| 2 | 27000 ailesi ve 27002 “uygulama pratikleri” | Slayt 11 |
| 3 | Sertifika insan hatasını azaltır, saldırıya önlem sağlar | Slayt 12 |
| 4 | ISO 27001 zorunlu sektörler listesi | Slayt 13 |

**Doğrulama sorusu, sınıf, gerekçe ve gereken kaynağı yazın.**

::: {.notes}
Birinci satır sürüm iddiasıdır. İkinci satırda 27002'nin rehberlik işlevinin doğru olması listedeki diğer üyelerin güncelliğini kanıtlamaz. Üçüncü satırda işleyen kontrol ile sertifika arasındaki nedensellik, dördüncüde zorunluluğun kaynağı sorgulanır.
:::

---

## Eski kaynak uygulaması: 5–8

| No | İddia | Konum |
|---|---|---|
| 5 | “ISO 27001 ana maddeleri” | Slayt 14 |
| 6 | Başvuru → komite → analiz → denetim → sertifika | Slayt 15 |
| 7 | “Ek maddelere çoğunlukla uyulması beklenir” | Slayt 70 |
| 8 | A.5–A.18 Ek A alanları | 2013 dönemi görseli |

**Doğrulama sorusu, sınıf, gerekçe ve gereken kaynağı yazın.**

::: {.notes}
Beşinci ve sekizinci satırlar eski yapıyı güncel yapıya taşıma riski içerir. Altıncı satır belgelendirme kuruluşunun güncel sürecine bağlıdır. Yedinci satırdaki “çoğunluk” kontrolün uygulanabilirliği için ölçüt olamaz. Eski görselin düşük çözünürlüklü kopyası kullanılmaz; iddianın kendisi tarihli kayıt olarak ele alınır.
:::

---

## Eski kaynak: 1–4 çözümü

| No | Sonuç | Gerekçe / gereken kaynak |
|---|---|---|
| 1 | Tarihsel / güncel değil | ISO 27001:2022 kaydı; güncel sürüm okunur |
| 2 | Yetkili metinden okunmalı | 27002 rehberlik işlevi uyumlu; diğer üyeler doğrulanmalı |
| 3 | Nedensel abartı | Sertifika sonuçtur; hatayı işleyen kontrol azaltır |
| 4 | Bu kaynaklarla doğrulanamaz | Mevzuat, şartname veya yetki düzenlemesi gerekir |

::: {.notes}
Sertifikalı bir birimde soyadı ve tarih eşlemesi aynı yanlış alıcıyı üretebilir; etkili değişiklik eşleme kuralı, test ve izlemedir. Zorunlu sektör listesi standart sayfasından türetilemez. 2013 başlığının tarihsel olduğunu görmek, eski içeriği kendiliğinden 2022'ye güncellemez.
:::

---

## Eski kaynak: 5–8 çözümü

| No | Sonuç | Gerekçe / gereken kaynak |
|---|---|---|
| 5 | Tarihsel / güncel değil | Eski liste; güncel başlıklar tam metinden okunur |
| 6 | Yetkili kaynaktan okunmalı | Süreç belgelendirme kuruluşuna bağlı |
| 7 | Normatif ölçüt değil | Uygulanabilirlik risk ve bağlamla gerekçelendirilir |
| 8 | Tarihsel / güncel değil | A.5–A.18, 2013 dönemi Ek A yapısıdır |

::: {.notes}
Eski slayt 14'te bazı başlıklar ana madde gibi görünürken işletime ilişkin başlık görünmez; liste kendi içinde de dikkatle okunmalıdır. 2022 madde veya kontrol adı gerektiğinde yetkili tam metin açılır. Eski Ek A numaraları yeni kayda taşınmaz.
:::

---

## Kayıt A: değişiklik yönü

| Girdi | Değer |
|---|---|
| Talep → açılış | E-posta → pazartesi |
| Onay/test | Yazılı kayıt yok |
| Hatanın bulunması | 4. gün, aday telefonu |
| Hizmet etkisi | 1 gün elle işlem; 35 gecikme |

**Soru:** Değişiklik onaysız ve testsiz nasıl engellenir?

::: {.notes}
Bağımsız kayıtta soru, referansların ayrı katkısı, gerekçe, kontrol amacı, uygulama ve işlev, sorumlu, “var” ve “işliyor” kanıtı, gözden geçirme, SoA satırı ve doğrulama durumu bulunmalıdır. COBIT karar hakkı ve dış desteği izlemeye, ITIL değişiklik, test ve kesintiye katkı verir. Risk kabulü ITIL'e yüklenmez.
:::

---

## Kayıt A: gerekçeli çözüm

| Alan | Örnek karar |
|---|---|
| Referans | COBIT: onay/izleme; ITIL: değişiklik/kesinti |
| Amaç | Onay ve test olmadan devreye alma yok |
| Önleme | Yazılı talep + birim onayı + test |
| Tespit/düzeltme | 1 hafta günlük izleme; geri alma/bildirim |
| Kanıt | Onaylı talep/test; izleme notu ve onaysız değişiklik sayısı |

::: {.notes}
E-posta talebi onay ve testin yerine geçmediği, hatanın dışarıdan bulunması da devreye alma sonrası izlemenin eksik olduğu için bu kontroller seçilir. Birim sorumlusu onaylar, dış BT test eder ve devreye alır, birim yönetimi dış destek performansını dönemsel izler. SoA satırı “değişiklik yönetimi: uygulanabilir; durum yeni başlıyor; kanıt yeri talep ve test kayıtları” olabilir. COBIT/ITIL'in belirli güncel pratik adı yayımlayıcı metinden doğrulanmadan yazılmaz.
:::

---

## Kayıt B: personel dosyaları

| Ortak dosya alanı | Girdi |
|---|---:|
| Merkez İK dosyası | 18 |
| Erişebilen çalışan | 4 |
| İşi gereği kullanan | 1 |
| Son 3 ayda açan kayıt görevlisi | 2; amaç belirsiz |

**Soru:** Yalnız işi gereği olanlar erişsin; bunu nasıl gösteririz?

::: {.notes}
İkinci kayıt farklı olay verisine dayanır. Gerekçe, dört çalışana açık 18 dosya, tek kişilik iş ihtiyacı ve amacı belirsiz iki erişimdir. 27001 risk ve kontrol kararının izlenmesine, 27002 erişim kısıtlamasının uygulama tasarımına katkı sağlar.
:::

---

## Kayıt B: gerekçeli çözüm

| Alan | Örnek karar |
|---|---|
| Amaç | Personel dosyasının gizliliği |
| Önleme | Erişim yalnız birim sorumlusu ve İK yetkilisi |
| Tespit/düzeltme | Aylık erişim incelemesi; olay ve yetki düzeltmesi |
| Kanıt | Tarihli yetki listesi; aylık inceleme notu |
| Gözden geçirme | Görev değişince ve 3 ayda bir |

::: {.notes}
Birim sorumlusu yetkiyi onaylar ve incelemeyi yapar; dış BT ayarı uygular; İK dosyaların sahibidir. SoA satırı “erişim kısıtlama: uygulanabilir; gerekçe dosya içeriği ve kayıtlar; durum yetki değişti, inceleme ilk ayında; kanıt yeri yetki listesi ve inceleme notu” olabilir. “Klasöre parola koyduk” kişi bazında yetkiyi ve işleyişi kanıtlamaz. Güncel kontrol adı/numarası tam metin olmadan yazılmaz; hukuki boyut ayrıca yetkili metinle değerlendirilir.
:::

---

## Yanlış eşleştirmeler: 1–4

1. “COBIT bir BGYS standardıdır; ISO yerine onu kullanırız.”
2. “27002 kontrollerini uyguladık, 27001'e uyumluyuz.”
3. “SoA'da her kontrole ‘uygulanıyor’ yazmak güvenlidir.”
4. “Gönderim kaydı var; alıcı kontrolü çalışıyor.”

**Her biri için hata türü, gerekçe ve düzeltilmiş cümle yazın.**

::: {.notes}
İlk ifade türü, ikinci gereksinim–rehberlik ilişkisini, üçüncü gerçek uygulama durumunu, dördüncü kanıt türünü karıştırır. Yanlış demek yetmez; hangi kurum kararı veya inceleme izi eksikse söylenmelidir.
:::

---

## Yanlış eşleştirmeler: 5–7

5. “A.5–A.18 listesine göre güncel kontrol numarası verelim.”
6. “ITIL'e göre değişiklik yaptık; güvenlik riski kalmadı.”
7. “ISO 27001 sertifikası olan kurumda yanlış gönderim olmaz.”

**Her biri için hata türü, gerekçe ve düzeltilmiş cümle yazın.**

::: {.notes}
Beşinci sürüm, altıncı hizmet ile risk kararı, yedinci sertifika ile işleyen kontrol arasındaki nedenselliği karıştırır. Yedinci iddia eski Ders sunumu 2'nin 12. slaytındaki fayda söylemiyle ilişkilidir.
:::

---

## Yanlış eşleştirmeler: 1–4 çözümü

| No | Hata ve düzeltilmiş ifade |
|---|---|
| 1 | Tür eşitlemesi: 27001 BGYS gereksinimi; COBIT karar sahipliği bakışı sağlar. |
| 2 | Rehberliği uygunluk sayma: kontrolün gerekçesi, izlemesi ve BGYS kaydı ayrıca gerekir. |
| 3 | Durumu gizleme: SoA'da uygulanabilirlik, gerekçe, gerçek durum ve kanıt yeri yazılır. |
| 4 | Kanıtı karıştırma: gönderim kaydına ek olarak inceleme sonucu gerekir. |

::: {.notes}
COBIT bir BGYS standardı olmadığı için 27001'in yerini tutmaz. 27002 ile kontrol tasarlamak, 27001 açısından yönetim sistemi, seçim gerekçesi ve izleme gösterilmeden uygunluk kanıtı olmaz. Gerekçeli “uygulanmaz” mümkündür; kanıtsız “uygulanıyor” yanıltır. Sistem günlüğü, bir insanın kaydı inceleyip bulgu ürettiğini göstermez.
:::

---

## Yanlış eşleştirmeler: 5–7 çözümü

| No | Hata ve düzeltilmiş ifade |
|---|---|
| 5 | Eski yapıyı güncel sayma: ad/numara güncel tam metinden doğrulanır. |
| 6 | Hizmet ile risk kararını eşitleme: değişiklik test edilir; kalan risk BGYS'de değerlendirilir. |
| 7 | Sertifikaya sonuç yükleme: yanlış gönderimi işleyen eşleme ve izleme kontrolleri azaltır. |

::: {.notes}
A.5–A.18 tarihsel 2013 yapısıdır. ITIL değişikliğin hizmette yürütülmesine katkı verir, güvenlik riskini ortadan kaldırdığı sonucunu vermez. Sertifika bir değerlendirme sonucudur; soyadı ve tarih kuralı aynı kaldığında iki aday yine karışabilir. Hata kural değişikliği, test ve izlemeyle azaltılır.
:::

---

## Bir uyum iddiasının izi

```text
referans + sürüm + yayımlayıcı
       → gerekçeli kurum kararı ve sorumlusu
       → kurulum ve işleyiş kanıtı
       → gözden geçirme ve düzeltme
```

::: {.notes}
Ortak olayda şu ifade sınanabilir: “Yanlış gönderim riskini BGYS'de kaydettik; alıcı doğrulamayı olay verisine göre seçtik; dış BT kuralı değiştirdi; test ve dört haftalık örneklemle sonucu izleyip yeniden değerlendireceğiz.” Bu, etiketin yerine kararı ve kanıtı koyar. Belirli standart maddesine uyum iddiası için güncel tam metin gerekir.
:::

---

## Kaynaklar

- [ISO/IEC 27001:2022 — ISO](https://www.iso.org/standard/27001?previewMode=true)
- [ISO/IEC 27002:2022 — ISO](https://www.iso.org/standard/75652.html)
- [COBIT — ISACA](https://www.isaca.org/resources/cobit)
- [ITIL — PeopleCert](https://www.peoplecert.org/browse-certifications/it-service-management/ITIL-1)
- Ders sunumu 2: slayt 9–15, 62–70 ve 2013 dönemi Ek A görseli (tarihsel doğrulama malzemesi).

::: {.notes}
Yayımlayıcı sayfalarının işlev tanımları 30.09.2026 tarihli kaynak denetiminden alınmıştır. Eski ders sunumu güncel kontrol numaralarının kaynağı değildir. Standartların tam metni görülmediği için belirli madde veya kontrol uygunluğu iddiası kurulmamıştır.
:::
