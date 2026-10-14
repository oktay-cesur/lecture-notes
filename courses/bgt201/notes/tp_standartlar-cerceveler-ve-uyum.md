---
title: "BGYS: Kapsam, Roller ve PUKÖ"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I · Hafta 4"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: today
execute:
  echo: false
code-line-numbers: false
include-in-header:
  text: |
    <style>
    .reveal pre code { font-size: 32px; line-height: 1.35; }
    .reveal .column pre code { font-size: 26px; }
    </style>
---

# BGYS: bağlam, kapsam ve yönetim döngüsü

<!-- Kanonik kaynak: ../topics/bgys-ve-yonetim-dongusu.md; SHA-256: 654fd0bff91d68aa3657b6d5dbaedb9e618da38190b7312325d9b6fe24aa3f76; kesitler: baglam-kapsam-roller, puko, vaka-transferi. -->

## Güvenlik kararına hangi koşullar girer?

**Kurum bağlamı**, güvenlik kararlarını etkileyen iç ve dış koşulların bütünüdür.

- İç: başvuru işi, çalışanlar, bilgi ortamları.
- Dış: merkez İK, dış BT, merkez BT.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: başvuru alma → değerlendirme → gönderme; kâğıt, klasör, e-posta; iç/dış koşul okları. Amaç: güvenlik kararına hangi koşullar girer? ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Kayıt ve Başvuru Birimi başvuruyu alır, değerlendirir ve sonucu adaya gönderir. Kâğıt formlar, taranmış ekler ve sonuç e-postaları aynı işte farklı ortamlarda kullanılır. Bir erişim ayarı bütün akışı açıklamaz: dolap için verilen karar ile e-posta gönderimi için gereken karar farklıdır.

A birim sorumlusu, B, C ve D başvuru görevlileridir; D arşiv işlevini de yürütür. Stajyer E eylül başında birimde çalışmıştır. Personel bilgisi merkez İK’da, hesap işlemleri dış BT’de ve e-posta hizmeti merkez BT’dedir. Bu iş bölümü, güvenlik kararının hangi koşullarda uygulanacağını belirler. Birim, kişiler ve sayılar kurgusaldır; tarihler 2026 takvimine göredir.
:::

---

## Beklenti hangi karara dönüşür?

**İlgili taraf**, süreçten etkilenen veya süreci etkileyen kişi ya da kuruluştur.

| Taraf | Beklenti → karar |
|---|---|
| Başvuru sahibi | Bilgisi yanlış kişiye açılmasın → gönderim/erişim kuralı |
| Görevliler | İş için gereken erişim açık olsun → göreve bağlı yetki |
| Dış BT | Onaylı talep gelsin → talep ve işlem kaydı |

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: taraf → beklenti → karar bağlantıları. Amaç: beklenti hangi karara dönüşür? ilişkisinin okunmasını sağlamak. -->

::: {.notes}
İlgili tarafı belirlemek, bir kişi listesi çıkarmanın ötesinde o tarafın beklentisini karara bağlamayı gerektirir. Başvuru sahibinin beklentisi, sonuç yazısının yalnız doğru kişiye ulaşmasıdır. Görevlilerin beklentisi ise işlerini yapabilecekleri yetkinin açık olmasıdır; bu iki beklenti birlikte düşünülür.

Merkez İK özlük sürecinin kendi sorumluluğunda kalmasını, üst yönetim ise kaynak kullanımının gerekçesini görmek ister. Bunlar kapsam sınırı, bildirim akışı ve kaynak kararına dönüşür. A, başvuru işinin zamanında ve hatasız yürümesini izler. Her beklenti farklı bir karar girdisidir.
:::

---

## Kapsam: kararın sınırını çizmek

**Kapsam**, güvenlik yönetiminin ele aldığı süreç, bilgi, ortam ve kurum parçasının açık sınırıdır.

**Birim kapsamı:** başvuru alma, değerlendirme, sonuçlandırma; kâğıt formlar, “Başvurular” klasörü, sonuç yazıları.

**Özlük dosyalarının süreç sahibi:** merkez İK.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: birim sınırı içinde süreç ve ortamlar; dışında İK özlük dosyası. Amaç: kapsam: kararın sınırını çizmek ilişkisinin okunmasını sağlamak. -->

::: {.notes}
“Kurumun bilgi güvenliği” ifadesi hangi iş ve bilgi hakkında karar verildiğini belirtmez. Birim, kendi başvuru sürecini ve bu süreçteki bilgi ortamlarını kapsamına almıştır. Amaç, bilgilerin yetkili kişilerce doğru biçimde işlenmesi ve gerektiğinde erişilebilir olmasıdır.

Özlük dosyaları merkez İK’nın sürecindedir ve birim bu dosyaların yaşam döngüsüne karar vermez. Bu nedenle birimin seçtiği kapsamın dışında kalırlar. Daha geniş bir BGYS bütün kurumu kapsayabilir; özlük süreçlerinin bütün kurumlarda kapsam dışında kalacağı sonucu çıkarılmaz.
:::

---

## Kapsam sınırını geçen bilgi ve hizmet

**Bağımlılık**, kapsam dışındaki bir tarafın birimin işini etkileyen bilgi veya hizmeti sağlamasıdır.

| Sağlayan | Birimin ihtiyaç duyduğu |
|---|---|
| Merkez İK | Ayrılış/görev değişikliği bilgisi |
| Dış BT | Hesap işlemleri ve işlem kayıtları |
| Merkez BT | E-posta hizmeti |

Bağımlılık kaydı: **kim → ne → ne zaman → hangi kanıt**.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: sınırı geçen İK bilgisi, BT işlemi, e-posta hizmeti; yemekhane için ok yok. Amaç: kapsam sınırını geçen bilgi ve hizmet ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Kapsam dışında bırakılan bir süreç, birimin kararlarını etkileyebilir. Özlük dosyası İK’da kalırken bir çalışanın ayrıldığı bilgisinin birime ulaşması gerekir. Hesap işlemlerini dış BT yapsa da kimin yetkili olduğuna birim karar verir; uygulamanın sonucunu izleme sorumluluğu da sürer.

Bağımlılık, karşı tarafın sağlayacağı bilgi veya hizmeti ve bunun zamanını görünür kılar. Kapsam dışındaki her şey bağımlılık değildir. Başvuru süreciyle bilgi veya işlem bağı bulunmayan yemekhane kart sistemi, bu birim için böyle bir ilişki taşımaz.
:::

---

## Kapsam kartları: çözümlü örnek

| Kart | Etiket ve gerekçe |
|---|---|
| Kâğıt form ve dolap | **Dahil:** birimin başvuru bilgisi ve ortamı |
| Özlük dosyaları | **Kapsam dışı:** süreç sahibi merkez İK |
| Ayrılış bildirimi | **Bağımlılık:** erişim kararının girdisi |

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: özlük dosyası ile ayrılış bildiriminin ayrı kartları. Amaç: kapsam kartları: çözümlü örnek ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Bir unsurun adı, kapsamı tek başına belirlemez. Kâğıt formların birim tarafından işlenmesi ve korunması, onları seçilen kapsamın içine alır. Özlük dosyasının süreç sahibi farklıdır. Buna karşılık dosyadan doğan ayrılış bilgisi, birimin erişim kararını değiştirmelidir.

Bu nedenle özlük dosyası ile ayrılış bildirimi aynı etiketle okunmaz. Birinde süreç sınırı, diğerinde sınırı geçen gerekli bilgi değerlendirilir.
:::

---

## Dört kapsam kartını sınıflandırın

**Görev:** Her karta etiket ve bir cümlelik gerekçe yazın.

**Veri:** “Başvurular” klasörü; sonuç yazısı gönderimi; dış BT hesap işlemleri; yemekhane kart sistemi.

**Etiketler:** dahil / kapsam dışı ama bağımlılık var / kapsam dışı ve bağ yok.

**Ölçüt:** Süreç sahipliğini veya bilgi/işlem bağını gösterin. Bağımlılıkta karşı tarafın sağladığını belirtin.

**Üretim:** Dört satırlık karar tablosu.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: dört boş kart ve üç etiket alanı. Amaç: dört kapsam kartını sınıflandırın ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Kapsam kartının gerekçesi, unsurun teknik veya idari olmasına dayanmaz. Birim o süreçte hangi kararı verir ve başka bir tarafın sağladığı hangi bilgiye ihtiyaç duyar soruları kullanılır. Gönderim işini, e-posta hizmetini işletme işinden ayırmak gerekir.

Her kart için verilen gerekçe, etiketin hangi süreç veya bilgi bağıyla seçildiğini göstermelidir. Bir etiket birden fazla ilişkiyi kapsıyorsa ilişkiler ayrı cümlelerde belirtilir.
:::

---

## Kapsam kartlarının çözümü

| Kart | Sonuç |
|---|---|
| “Başvurular” klasörü | Dahil |
| Sonuç yazısı gönderimi | Dahil; e-posta hizmeti merkez BT’ye bağımlı |
| Dış BT hesap işlemleri | Kapsam dışı ama bağımlılık var |
| Yemekhane kartı | Kapsam dışı ve bağ yok |

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: dört kartın etiketlere yerleşmesi; gönderim/hizmet ayrımı. Amaç: kapsam kartlarının çözümü ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Klasörde birimin taranmış başvuruları bulunur ve yetki kararı birime aittir. Kime hangi sonucun gönderileceği de birimin kararıdır. E-posta hizmetini merkez BT’nin işletmesi, gönderim kararının sahipliğini değiştirmez.

Dış BT, birimin onayladığı yetkiyi uygular ve açma/kapama kayıtlarını sağlar. Bu kayıtlar birimin kendi kararını değerlendirmesi için gereklidir. Yemekhane kartı ise başvuru süreciyle ilişki taşımadığı için bağımlılık olarak kaydedilmez.
:::

---

## Sorumluluk işlevlere ayrılır

| İşlev | Birimdeki karşılık |
|---|---|
| Yön ve kaynak | A / üst yönetim |
| Karar sahibi | A |
| Uygulayıcı | Dış BT; B, C, D |
| Gözden geçiren | A veya görevlendirilen kişi |
| Dokümantasyon | A; kayıtları işi yapanlar üretir |

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: aynı karara bağlı beş işlev; A birden fazla işlevde gösterilsin. Amaç: sorumluluk işlevlere ayrılır ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Bir kararın onaylanması, uygulanması ve değerlendirilmesi ayrı işlevlerdir. Küçük bir birimde aynı kişi birden fazla işlev üstlenebilir. Bu durumda hangi işi ne zaman yaptığı ve hangi kanıta baktığı açık tutulur. A hem karar sahibi hem gözden geçiren olabilir; BT yetki dökümü gibi ayrı bir kaynaktan gelen kanıtı değerlendirebilir.

Kayıtları BT ve görevliler üretir; A onaylı kararların ve kayıtların güncel ve bulunabilir olmasını izler. Bu işlevler hiyerarşi veya işlem sırası değildir. A’nın aylık incelemesi operasyonel gözden geçirmedir; bağımsız iç tetkik değildir.
:::

---

## Yönetim desteği nasıl uygulanır?

**Yönetim desteği:** onay + zaman/kaynak + görevlendirme + gözden geçirme.

- İkinci kişi kontrolü için çalışma zamanı.
- Aylık yetki incelemesi için görevli.
- A’nın yetkisini aşan kaynak için üst yönetim kararı.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: onaydan uygulamaya zaman ve görev ataması bağlantısı. Amaç: yönetim desteği nasıl uygulanır? ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Bir kuralı onaylamak, onu yapacak kişiye zaman sağlamıyorsa günlük uygulama aksayabilir. İkinci kişinin gönderimi incelemesi mevcut iş yüküne ek bir görevdir. Aylık yetki incelemesinin de kimin tarafından ve hangi zaman ayrılarak yapılacağı belirlenmelidir.

Yönetim desteği bu kaynak kararlarını ve sonuçların değerlendirilmesini kapsar. Büyük kurumlarda komite ve farklı unvanlar kullanılabilir; küçük birimde aynı işlevleri daha az kişi yürütebilir. Her işlevin sahibi ve ayıracağı zaman açık olmalıdır.
:::

---

## ISO 27001 ile BGYS arasındaki bağ

**ISO/IEC 27001:** BGYS’yi kurma, uygulama, sürdürme ve sürekli iyileştirme için gereksinim standardı.

**Kurum kararı:** klasöre kim erişir, yetki ne kadar sürede kaldırılır, sonucu kim inceler?

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: standart gereksinimleri → kurumun bağlam/kapsam/rol kararları. Amaç: iso 27001 ile bgys arasındaki bağ ilişkisinin okunmasını sağlamak. -->

::: {.notes}
ISO/IEC 27001 ortak gereksinimler sunar; kurum bunları kendi işi, kapsamı, insanları ve kaynaklarıyla gerçekleştiren bir yönetim sistemi kurar. Gereksinim standardı ile kurumun BGYS’si bu nedenle farklı düzeylerdir.

Bir iş günü kapama veya ayın son iş günü inceleme, erişim vakasındaki birimin seçtiği ölçütlerdir. Bu değerler standardın bütün kurumlara dayattığı süreler olarak okunmaz. Bağlam, kapsam, rol ve kaynak kararları gereksinimleri birimin işine bağlar.
:::

---

## PUKÖ nedir?

**PUKÖ**, bir yönetim kararının planlanması, uygulanması, uygulamanın izlerinin önceden konmuş ölçütle karşılaştırılması ve bulguya göre önlem alınıp kararın yeniden kurulması döngüsüdür.

**Planla → Uygula → Kontrol Et → Önlem Al → Planla**

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: dört aşamalı döngü; Önlem Al’dan Planla’ya dönüş oku. Amaç: pukö nedir? ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Kapsam ve roller, uygulamanın sınırını ve sahiplerini belirler. Uygulama devam ederken değişen personel veya oluşan hata, kararın değerlendirilmesini gerektirir. PUKÖ bu değerlendirmeyi yeni karara bağlar.

Bir sistemin kurulum işlerinin bitmesi, günlük kararın doğru çalıştığını göstermez. Döngüde uygulamadan kanıt elde edilir, bu kanıt ölçütle karşılaştırılır ve bulgu karara dönüşür. Raporun üretilmesi bu bağlantının yalnız bir parçasıdır; bulgunun sorumluluk, kaynak veya kural kararına girmesi gerekir.
:::

---

## Planla: değerlendirilebilir karar

**Planla**, korunacak bilgiyi ve amacı belirleyip kararın ölçütünü, sorumlusunu, uygulayıcısını, kaynaklarını ve değerlendirme zamanını tanımlama aşamasıdır.

**Girdi:** durum + amaç + kapsam + roller.

**Çıktı:** ölçütlü karar.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: amaçtan ölçüt/sahip/uygulayıcı/kaynak/tarihe açılan karar kartı. Amaç: planla: değerlendirilebilir karar ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Bir kararı değerlendirmek için başarı koşulunun işlemden önce yazılması gerekir. “İlgili kişiler erişsin” ifadesinin hangi görev listesi ve onaylı talep üzerinden sınanacağı belirlenir. Değerlendirme zamanı ve gerekli kaynak kararda yer almazsa uygulayıcı ile gözden geçiren aynı beklentiyi paylaşamayabilir.

Planla aşaması amacı günlük işte uygulanabilecek karara dönüştürür. Kararın sahibi, uygulayıcısı ve kanıtın nereden geleceği birlikte belirlenir.
:::

---

## Uygula: karar günlük işe dönüşür

**Uygula**, planlanan kararı günlük işte gerçekleştirme ve yapılan işlemin izini kaydetme aşamasıdır.

**Karar → işlem → kayıt**

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: onaylı talep → BT işlemi → tarihli işlem kaydı. Amaç: uygula: karar günlük işe dönüşür ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Uygulama, onaylı yetki talebinin BT’ye iletilmesi ve BT’nin yetkiyi tanımlaması gibi gerçek işlemleri kapsar. Yazılı kural bu işlemin gerçekleştiğini kendi başına göstermez. Yapılan işlemin tarihi ve kapsamı kaydedildiğinde kararın nasıl uygulandığı değerlendirilebilir.

Kayıt üretimi de tek başına değerlendirme değildir. Açma ve kapama kayıtlarının tutulmasıyla bu kayıtları ölçüte göre incelemek farklı işlerdir.
:::

---

## Kontrol Et: kanıtı ölçütle karşılaştır

**Kontrol Et**, uygulama kanıtını önceden belirlenmiş ölçütle karşılaştırıp karşılanan ve karşılanmayan koşulları bulguya dönüştürme aşamasıdır.

**Kanıt + ölçüt → bulgu**

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: yetki dökümü ve görev listesi ölçüte girsin; sonuç bulgu olsun. Amaç: kontrol et: kanıtı ölçütle karşılaştır ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Yetki dökümü gerçek yetki durumunu, görev listesi güncel çalışanları gösterir. Tek başlarına bu kayıtlar aynı soruya cevap vermez. Kararın ölçütü her hesabın güncel görevli ve onaylı taleple eşleşmesiyse kayıtların karşılaştırılması gerekir.

Bir kaydın bulunmaması, işlemin yapılmadığını kesinleştirmez. Buna karşılık güncel dökümde hesabın açık görünmesi, inceleme anındaki yetki durumuna ilişkin doğrudan kanıttır.
:::

---

## Önlem Al: bulgu kararı değiştirir

**Önlem Al**, bulgulara göre uygunsuzluğu düzeltme, nedenleri inceleyerek tekrarını azaltacak değişiklikleri yapma ve etkilerini değerlendirmeyi karara bağlama aşamasıdır.

**Bulgu → düzeltme / neden incelemesi / değişen plan**

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: bulgudan mevcut durumu düzeltme ve tekrarını azaltma kolları. Amaç: önlem al: bulgu kararı değiştirir ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Bulunan uygunsuzluğun giderilmesi ile aynı tür sorunun tekrarını azaltmak ayrı hedeflerdir. Açık kalmış hesabı kapatmak düzeltmedir. Ayrılış bilgisinin karar sahibine ulaşma yolunu düzenlemek ise iş akışının değişmesidir.

Neden adayı kanıtla sınanır ve uygun değişiklik seçilir. Değişikliğin etkisi uygulama sonuçları üzerinden değerlendirilir. Böylece Önlem Al’ın çıktısı yeni Planla aşamasına girdi olur.
:::

---

## Güvenlik kontrolü ile Kontrol Et

| Güvenlik kontrolü | PUKÖ’de Kontrol Et |
|---|---|
| Seçilmiş önlem | Önlemin işleyişini değerlendirme |
| Klasörün yetki ayarı | Yetki dökümünü görev/taleple karşılaştırma |
| Uygula’da çalışır | Bulgu üretir |

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: ayar uygulama kolunda; döküm karşılaştırması değerlendirme kolunda. Amaç: güvenlik kontrolü ile kontrol et ilişkisinin okunmasını sağlamak. -->

::: {.notes}
“Kontrol” sözcüğü önlem ve değerlendirme için kullanılabilir. Klasörün yetki ayarı erişimi sınırlandıran bir güvenlik kontrolüdür. Kontrol Et ise bu ayarın kararın ölçütlerini karşılayıp karşılamadığını inceler.

Bir hesabın yetkili olması, yetkiyi hak eden güncel görevliye ait olduğunu söylemez. Bu ilişkiyi görev listesi, onaylı talep ve işlem kayıtlarıyla karşılaştıran değerlendirme gösterir.
:::

---

## Kararın izlenebilir omurgası

**Amaç → uygulama → sorumlu → tarih → kanıt → gözden geçirme**

Ölçüt ve gerekli kaynak kararda belirtilir.

**“Var”** ile **“işliyor”** ayrı kanıt ister.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: kuralın varlığı / düzeltme / sonraki işleyiş için üç ayrı kanıt kutusu. Amaç: kararın izlenebilir omurgası ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Onaylı karar kuralın varlığını gösterir. İşlem kaydı uygulamanın izini, kayıtların ölçütle karşılaştırılması ise değerlendirmeyi gösterir. Bu düzeyler birbirinin yerine kullanılmaz.

Bir defalık kapama mevcut hesabın durumunu düzeltir. Düzenin sonraki görev değişikliğinde çalıştığını söylemek için yeni olayın bildirim ve kapama kayıtları incelenir. Kuralın yazılması, kaydın tutulması ve sonucun değerlendirilmesi arasında bağlantı kurulmalıdır.
:::

---

## Erişim vakası: 1 Eylül kararı

| Karar | Ölçüt |
|---|---|
| Yalnız ilgili görevliler erişir | Her hesap güncel görevli ve onaylı taleple eşleşir |
| Ayrılış/görev değişiminde yetki kaldırılır | En geç 1 iş günü içinde |

**Sahip:** A. **Uygulayıcı:** dış BT.

**İnceleme:** ayın son iş günü.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: iki karar kartı; A onayı → BT uygulaması; eksik bildirim yolu. Amaç: erişim vakası: 1 eylül kararı ilişkisinin okunmasını sağlamak. -->

::: {.notes}
1 Eylül planı, taranmış başvuruların ilgisiz kişilerce görülmesini ve değiştirilmesini önlemeyi amaçlar. A talebi onaylar, BT hesabı tanımlar veya kapatır. Onaylı talepler, işlem kayıtları ve yetki dökümü bu kararın değerlendirilmesinde kullanılabilir.

Planın bir boşluğu vardır: kişinin ayrıldığı bilgisinin kimden ve hangi yolla A’ya ve BT’ye ulaşacağı yazılmamıştır. İşlem için gereken bilgi birim dışında doğduğundan bu bağlantının da düzenlenmesi gerekir.
:::

---

## E’nin ayrılışı ve kapama son tarihi

**11 Eylül cuma:** E ayrıldı; merkez İK kaydı var.

**14 Eylül pazartesi:** 1 iş günü ölçütüne göre son kapama tarihi.

**14 Eylül, gerçekleşmiş kapama tarihi değildir.**

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: 11 Eylül olay noktası; hafta sonu; 14 Eylül kesikli ölçüt sınırı. Amaç: e’nin ayrılışı ve kapama son tarihi ilişkisinin okunmasını sağlamak. -->

::: {.notes}
A, B, C, D ve E’nin başlangıç hesapları onaylı taleplere dayanır. E’nin stajı 11 Eylül’de bitmiştir. Cuma gününü izleyen ilk iş günü pazartesi olduğu için planın kapama sınırı 14 Eylül sonudur.

Bu tarih ölçütten hesaplanır. Vaka dosyasında 14 Eylül’de bir kapama işlemi yapıldığına ilişkin kayıt bulunmaz. Son tarih ile gerçekleşen işlem tarihi ayrı tutulmalıdır.
:::

---

## Erişim incelemesi: rehberli görev

**Görev:** 30 Eylül kayıtlarını karşılaştırın. Her uygunsuzluk için hesap, karşılanmayan ölçüt ve en az iki kanıt yazın.

**Veri:** yetki dökümü, görev listesi, talepler, kapama ve oturum kayıtları.

**Ölçüt:** Kayıt yokluğunu işlem yokluğu saymayın; süreyi planın koşuluyla karşılaştırın.

**Üretim:** Hesap–ölçüt–kanıt tablosu.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: hesap–ölçüt–kanıt için boş üç sütun. Amaç: erişim incelemesi: rehberli görev ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Yetki incelemesinde kayıtlar farklı soruları yanıtlar. Döküm hangi hesabın açık olduğunu, görev listesi kimin birimde çalıştığını ve talep kaydı yetkinin hangi onayla verildiğini gösterir. Bulgular bu kayıtların birlikte okunmasından çıkar.

Her iddiaya kaynağını bağlamak gerekir. Bir sözlü açıklama neden hakkında ipucu verebilir, fakat onay veya işlem kaydının yerine geçmez. İnceleme sonucu, bir hesabın güncel görev ve onay koşuluyla uyuşup uyuşmadığını belirtmelidir.
:::

---

## 30 Eylül: hesap, görev ve onay

| Kayıt | İçerik |
|---|---|
| BT yetki dökümü | A, B, C, D, E, **birim-ortak** |
| Güncel görev listesi | A, B, C, D |
| Onaylı talepler | A–E için 5 talep; **ortak için yok** |

D, birim-ortak hesapla taramaları yükler.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: altı hesap satırından dört görevliye ve beş talebe eşleme; boş eşlemeler. Amaç: 30 eylül: hesap, görev ve onay ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Birim-ortak hesap tarayıcı kurulumu sırasında açılmıştır ve D taranmış başvuruları bu hesapla yükler. D’nin bu hesabı kullanması, hesap için bir onaylı talebin bulunduğunu göstermez.

Hesapların kişi ve onayla eşleştirilmesi, dökümde kaç satır bulunduğunu saymaktan farklıdır. Aynı görevlinin kişisel hesabı ve ortak hesapla işlem yapması, ortak hesabın sahipliğini veya onayını açıklamaz.
:::

---

## 30 Eylül: kapama ve oturum kaydı

- E hesabı için kapama kaydı bulunmuyor.
- İncelenen kayıtta E’nin 11 Eylül sonrası oturumu görünmüyor.
- **Yetki dökümünde E hesabı hâlâ açık.**

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: kapama kaydı yok / oturum izi yok / açık yetki üç ayrı kanıt türü. Amaç: 30 eylül: kapama ve oturum kaydı ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Kapama kaydının bulunmaması tek başına kapamanın hiç yapılmadığını göstermez; işlem yapılıp kaydedilmemiş olabilir. E’nin hesabının inceleme anında açık olduğu bilgisi 30 Eylül yetki dökümünden gelir.

Oturum görülmemesi ise yalnız incelenen kayıtların kapsadığı kullanım hakkında bilgi verir. Kullanım izi bulunmasa da açık hesabın yetkisi devam etmektedir. Bu nedenle oturum kaydı, bir iş günü içinde kapama ölçütündeki ihlali ortadan kaldırmaz.
:::

---

## Öğrenci üretimi: bulguyu kayıtla yazın

| Hesap | Karşılanmayan ölçüt | En az iki kayıt |
|---|---|---|
| … | … | … |
| … | … | … |

Her satırda **olgu**, **ölçüt** ve **çıkarımı** ayırın.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: iki satırlı boş bulgu kartı; olgu–ölçüt–çıkarım ayrımı. Amaç: öğrenci üretimi: bulguyu kayıtla yazın ilişkisinin okunmasını sağlamak. -->

::: {.notes}
İnceleme tablosu bir hesap hakkındaki bilgiyi kararla karşılaştırır. “Kayıt yok” ifadesi gözlenen durumdur; bundan işlem yapılmadığı sonucu doğrudan çıkarılmaz. Aynı biçimde geçen takvim günü sayısı, planın iş günü koşulunun yerine kullanılmaz.

Bulgu metni hangi kaydın neyi gösterdiğini belirtmelidir. İncelenen veri bir iddiayı taşımıyorsa, iddia kesin sonuç olarak yazılamaz.
:::

---

## Erişim çözümü: E hesabı

**Olgu:** E 11 Eylül’de ayrıldı; 30 Eylül’de hesabı açık.

**Ölçüt:** En geç 14 Eylül sonuna kadar kapama.

**Bulgu:** 1 iş günü ölçütü karşılanmadı.

**Kanıt:** İK ayrılış kaydı + güncel görev listesi + yetki dökümü.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: E zaman çizelgesinde kapama sınırı ve 30 Eylül açık hesap. Amaç: erişim çözümü: e hesabı ilişkisinin okunmasını sağlamak. -->

::: {.notes}
E’nin ayrılışı İK kaydıyla, birimde çalışmaması görev listesiyle ve hesabının açık olması BT dökümüyle desteklenir. Bu karşılaştırma, kapama kaydı yokluğundan daha güçlü bir bulgu kurar. Ayrılıştan incelemeye 19 takvim günü geçmiş olması ayrı bir bilgidir; ölçüt bir iş günüdür.

İncelenen oturum kayıtlarında hesabın kullanılmamış görünmesi açık yetkiyi ortadan kaldırmaz. Bulguyu geçerli kılan, verilen karar ile inceleme anındaki yetki durumunun uyuşmamasıdır.
:::

---

## Erişim çözümü: birim-ortak hesabı

**Olgu:** Ortak hesabın kişi karşılığı ve onaylı talebi yok.

**Bulgu:** Güncel görevliyle ve onaylı taleple eşleşme ölçütü karşılanmıyor.

**Düzeltme birlikte yapılmalı:** ortak hesabı kapama + D’nin onaylı kişisel tarama yetkisi.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: ortak hesap kaldırılırken D kişisel yetkisine tarama akışı aktarımı. Amaç: erişim çözümü: birim-ortak hesabı ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Ortak hesabın tarayıcı kurulumu sırasında açılması nasıl ortaya çıkmış olabileceğini açıklar; kimin hangi onayla açtığını göstermez. D’nin beyanı ile onay kaydı bu nedenle ayrılır. Ortak hesap kullanımı, logdan işlemin hangi kişiye ait olduğunun belirlenmesini de güçleştirir.

Ortak hesap kapatılırken D’nin tarama işinin sürmesi gerekir. D’ye kendi hesabı üzerinden onaylı kişisel tarama yetkisi verilmesi, güvenlik ile erişilebilirliği aynı kararda tutar.
:::

---

## Neden adayı nasıl doğrulanır?

**Kayıtla bilinen:** planda bildirim yolu yazmıyor; ortak hesabın onaylı talebi yok.

**Neden adayı:** bildirim ve talep akışı işlemiyor.

**Doğrulama:** İK ve BT’den bildirim/talep/işlem kayıtlarını karşılaştırma.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: kesin olgu → iki neden adayı → kayıtla doğrulama. Amaç: neden adayı nasıl doğrulanır? ilişkisinin okunmasını sağlamak. -->

::: {.notes}
E’nin ayrılış bilgisinin erişim kararına yansımadığı görülür. Ancak İK’nın hiç bildirim yapmadığı veya bildirimin birimde işlenmediği seçenekleri dosyadan kesinleştirilemez. Ortak hesabın talep kaydı bulunmaması da BT’nin hiçbir talep almadan hesap açtığını tek başına göstermez.

Plan kaydındaki bilgi yolu boşluğu doğrudan görülebilir. A, neden adaylarını İK ve BT kayıtlarıyla sınamalıdır. İnceleme kişisel unutkanlık açıklamasına ulaşsa bile sorumluluk ve bilgi yolunun yazılması gereğini kaldırmaz.
:::

---

## Önlem Al: iki ayrı hedef

| Hedef | Önerilen iş |
|---|---|
| Mevcut uygunsuzluğu düzelt | E ve ortak hesabı kapat; D’ye kişisel tarama yetkisi ver |
| Tekrarı azalt | Aynı gün İK bildirimi; talep numarasız hesap açmama |

**Düzeltme kanıtı:** kapama kaydı + yeni döküm.

**İşleyiş kanıtı:** sonraki bildirim ve işlem kayıtları.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: düzeltme ve tekrar azaltma için ayrı kanıt okları. Amaç: önlem al: iki ayrı hedef ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Hesap kapama mevcut durumu değiştirir. Bunun yapılmış sayılması için BT’nin işlem kaydı ile yeni yetki dökümü gerekir; 30 Eylül dosyası kapamanın gerçekleştiğini söylemez. “Hallettik” mesajı, hangi hesabın ne zaman kapandığını açıklamıyorsa doğrulama için yeterli değildir.

Birim, İK’nın ayrılış veya görev değişimini aynı gün A’ya bildirmesi ve BT’nin talep numarası olmayan hesap açmaması kararlarını alır. Kararlar bağımlılık kaydına da işlenir. Bildirim süresi birimin seçtiği değerdir. Düzenin işlemesi yeni olayın kayıtlarıyla sınanır.
:::

---

## Faaliyet nasıl izlenir?

**Aç → uygula → sına → kapa**

- Bulgu ve ölçütü kaydet.
- Neden adayını doğrula; değişikliği uygula.
- Düzeltmeyi ve sonraki işleyişi ayrı sına.
- Sonucu, kanıt sınırını ve bildirimleri kaydet.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: dört adımlı faaliyet zinciri; sınama altında düzeltme/işleyiş ayrımı. Amaç: faaliyet nasıl izlenir? ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Faaliyetin açılması, bulgunun hangi ölçüte dayanarak kurulduğunun kaydedilmesidir. Uygulamada neden adayı sınanır ve gerekli hesap veya akış değişikliği yapılır. Sınama, kapama işlemiyle akışın sonraki olayda işlemesini ayrı değerlendirmelidir.

Kapanışta sonuç ve dayandığı kanıt kaydedilir, ilgili taraflara bildirilir. Vaka dosyası kapanış bildiriminin gönderildiğini söylemez; bu, kapanışta yerine getirilecek iştir.
:::

---

## 30 Ekim: değişen planın sınanması

**Yeni ölçüt:** talepsiz hesap sayısı = 0.

- B 15 Ekim’de ayrıldı; İK bildirimi aynı gün.
- BT kapaması 16 Ekim: **1 iş günü içinde**.
- F’nin onaylı talebi var.
- Döküm: **A, C, D, F**; talepsiz hesap **0**.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: 15 Ekim bildirim → 16 Ekim kapama; A/C/D/F dökümü. Amaç: 30 ekim: değişen planın sınanması ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Önlem Al’dan Planla’ya dönüşte A, talepsiz hesap sayısının sıfır olması ölçütünü ekler. 30 Ekim ayın son iş günüdür. B’nin geçişinde bildirim ve kapama tarihleri, bu olayda bir iş günü koşulunun sağlandığını gösterir. F’nin onaylı talebi yeni yetkinin talep akışına bağlandığını destekler.

Bunlar değiştirilmiş düzenin bir defalık hesabı kapatmaktan daha fazla şey yaptığını gösterir. Ancak tek ayrılış örneği bütün gelecekteki işlemleri kanıtlamaz. Kanıt sınırı kaydedilir ve aylık inceleme sürer.
:::

---

## Bulgu hangi yönetim kararına dönüşür?

**Bulgu → yetkili karar sahibi → kaynak / rol / hedef değişikliği**

Ertelenmenin bilgiye ve hizmete sonucu gerekçelendirilir.

Tarama erişimi korunmadan ortak hesap kapatılırsa iş aksar.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: iki öneri kartında erteleme sonucu, kaynak, yetkili ve önerilen zaman. Amaç: bulgu hangi yönetim kararına dönüşür? ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Bir bulgu, karar verebilecek kişiye ulaşmadığında raporda kalır. A kendi yetkisindeki hesabı ve iş akışını karara bağlar; İK ile bildirim düzeni veya ek çalışma zamanı yetkisini aşıyorsa üst yönetime taşır. Yönetimin gözden geçirmesi, amaç ve kaynaklarla birlikte iyileştirme kararını kurar.

Önerilerin sırası ertelemenin sonucuyla gerekçelendirilir. E ve ortak hesabın açık kalması uygunsuz yetkiyi sürdürür; D’nin kişisel yetkisi düzenlenmeden ortak hesap kapatılması ise tarama işini aksatır. İnceleme sonrası ilk iş günü gibi uygulama zamanları öneridir; gerçekleşmiş kapama tarihi olarak kaydedilmez.
:::

---

## Gönderim vakası: altı karar

**Görev:** Yedi kayıttan bir karar kaydı üretin.

1. Eksik planı tamamlayın.
2. Kayıtların gösterdiği/göstermediğini ayırın.
3. Sayısal bulguları hesaplayın.
4. Düzeltme ve iyileştirmeyi ayırın.
5. “Daha fazla eğitim” önerisini değerlendirin.
6. E-posta hizmetinin kapsam ilişkisini yazın.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: altı boş karar alanı; kayıt numarası bağlantı yerleri. Amaç: gönderim vakası: altı karar ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Gönderim kararının amacı sonuç yazısının doğru başvuru sahibine ulaşmasıdır. Erişim incelemesindeki ölçüt–kanıt–bulgu ilişkisi bu farklı işe uygulanır. Dosyadaki ifadelerin aynı tür kanıt olmadığını dikkate almak gerekir: kural, katılım kaydı, işlem izi, şikâyet, beyan ve neden adayı farklı iddiaları destekler.

Karar kaydında olgular kayıt numarasına bağlanmalı; önerilen adımlar gerçekleşmiş işlem gibi yazılmamalıdır. Bir ölçütü tamamlamak, dosyadaki boşluğa açık ve uygulanabilir bir öneri getirmektir.
:::

---

## Gönderim dosyası: plan, talimat, eğitim

**K1 · Plan:** “Gönderilmeden önce kontrol edilir.” Amaç: yanlış gönderimi önlemek. Sorumlu: “Birim.” Ölçüt, kanıt, inceleme boş.

**K2 · 1 Ekim:** A onaylı talimat: “Her yazı gönderilmeden önce ikinci kişi kontrol eder.”

**K3 · 2 Ekim:** “Gönderimde dikkat” eğitimi; A, B, C, D imzaları.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: K1 üç boş alan; K2 kural; K3 katılım kaydı ayrı kutular. Amaç: gönderim dosyası: plan, talimat, eğitim ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Plan kaydı belirli bir karar sahibi göstermez. “Birim” ifadesi hata görüldüğünde kimin ne yapacağını açık bırakır. İkinci kişi talimatı bir kuralın varlığını gösterir; belirli gönderimlerde uygulanmış olduğunu söylemez.

Eğitim kaydı A–D için belirtilen eğitime ilişkin imzalı katılım beyanları içerir; gerçekleşmiş katılımı tek başına doğrulamaz. Eğitimde hangi karşılaştırmanın anlatıldığı veya gönderim sonucunun nasıl değiştiği bu kayıttan çıkarılamaz. İmza bağlı olduğu katılım beyanıyla okunmalıdır.
:::

---

## Gönderim dosyası: kontrol listesi

**K4 · 1–9 Ekim:** 20 gönderim.

- 14 satırda kontrol eden parafı; 6 boş.
- Paraflı 14 satırın 9’unda gönderen ve paraf atan aynı kişi.
- Sütunlar: başvuru no, alıcı adresi, gönderen, kontrol eden parafı.
- Karşılaştırılan alanlar kayıtlı değil.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: 20 gönderim altında 14 paraflı / 6 boş; 14 altında 9 aynı kişi / boş hesap alanı. Amaç: gönderim dosyası: kontrol listesi ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Kontrol listesi paraf dağılımını ve satırlarda yazılı kişileri gösterir. Hangi belgenin hangi kayıtla karşılaştırıldığı yazılmadığı için karşılaştırmanın kapsamını göstermez. Paraf bulunması ile sonuç yazısının doğru adaya gitmesi bu nedenle ayrı iddialardır.

Boş kontrol eden alanı, kaydın eksikliğidir. Kontrol hiç yapılmamış veya yapılıp kaydedilmemiş olabilir. Satırların gönderim zamanları ayrı ayrı verilmediğinden kendi paraflı dokuz gönderimin kaçının eğitim sonrasında olduğu da belirlenemez.
:::

---

## Gönderim dosyası: olay, beyan, olasılık

**K5 · 9 Ekim:** B-117’de C başka adayın yazısını gönderdi; gönderen C, paraf C.

**K6 · A:** “Kontrol yapılıyor, talimat asıldı, eğitim verildi.”

**K7:** E-posta hizmeti merkez BT’de. C, otomatik tamamlamadan şüpheleniyor.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: K5 olgu / K6 beyan / K7 doğrulanmamış neden adayı. Amaç: gönderim dosyası: olay, beyan, olasılık ilişkisinin okunmasını sağlamak. -->

::: {.notes}
B-117 şikâyeti en az bir yanlış gönderim gerçekleştiğini gösterir. Diğer gönderimlerin sonucunu veya hatanın nedenini tek başına belirlemez. C’nin hem gönderen hem paraf atan olması liste üzerinden doğrulanabilir.

A’nın notu bir değerlendirme beyanıdır. Talimat ve eğitim kayıtları notun bu bölümlerini destekler, fakat doğru işleyişin kanıtı değildir. Otomatik tamamlama C’nin şüphesine dayanan neden adayıdır; BT incelemesiyle doğrulanması gerekir.
:::

---

## Karar kaydı: görünür ölçütler

- Her iddiayı kayıt numarasına bağlayın.
- Planın sahibi kişi; ölçüt sayılabilir; inceleme tarihli olsun.
- Kayıt yokluğunu işlem yokluğu saymayın.
- Olasılığı doğrulanmış neden yapmayın.
- Düzeltme/iyileştirme ve koşul/doğru sonuç ayrımını koruyun.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: iddia → kayıt numarası ve olgu/öneri/olasılık işaretleri. Amaç: karar kaydı: görünür ölçütler ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Başarı ölçütleri kararın izlenebilir olmasını sağlar. Bir kaydın desteklemediği hüküm, kesin sonuç yerine sınırlı çıkarım veya doğrulanması gereken iddia olarak yazılır. İşlem kaydı yokluğu, işlem yapılmadığı hükmüne dönüştürülmez.

Önerilen uygulama ile gerçekleşen olgu ayrı yazılmalıdır. Paraf koşuluna uyum oranının doğru gönderim oranı gibi sunulması, ölçülen değişkeni değiştirir. Her sayısal sonuç hangi koşulu ölçtüğünü belirtmelidir.
:::

---

## Öğrenci üretimi: tek sayfalık karar kaydı

**Üretim:** Altı başlık altında tek sayfa.

| Kayıt | Gösterir | Göstermez | Tür |
|---|---|---|---|
| … | … | … | … |

Plan, sayılar, düzeltme/iyileştirme, eğitim ve kapsam kararlarını ekleyin.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: altı başlıklı boş karar formu ve kayıt tablosu. Amaç: öğrenci üretimi: tek sayfalık karar kaydı ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Karar kaydı, planın boşluklarını tamamlayan öneriyi ve dosyanın desteklediği bulguları birlikte taşır. Kayıt–gösterir–göstermez tablosunda birden fazla iddia varsa bunların kanıt türleri ayrı belirtilir. Kuralın varlığı kesin olabilirken kuralın günlük uygulandığı iddiası sınırlı kalabilir.

Düzeltme ve iyileştirme için sorumlu ve kanıt yazılmalıdır. İnceleme tarihi seçilirken gerçekleşmiş bir inceleme sonucu uydurulmaz; bu alan önerilen planın parçasıdır.
:::

---

## Çözüm: planı uygulanabilir kılmak

**Sahip:** A.

**Uygulama:** gönderen + ondan farklı kontrol eden.

**Karşılaştırma:**

1. Yazıdaki başvuru no ve ad ↔ başvuru kaydı.
2. Kayıttaki e-posta ↔ gönderimin alıcı adresi.

**Sonuç:** üç eşleşme kontrol listesine yazılır.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: gönderilecek yazı → başvuru kaydı → alıcı adresi üç eşleşme. Amaç: çözüm: planı uygulanabilir kılmak ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Listeye doğru bir başvuru numarası ve adres yazılması, e-postaya doğru sonuç yazısının eklendiğini göstermez. Karşılaştırma gönderilecek belgenin kendisinden başlamalıdır. Yazıdaki başvuru numarası ve aday adı kayıtla, kayıtlı e-posta adresi de gönderimin adresiyle eşleştirilir.

Kontrol eden gönderenden farklı olmalı ve karşılaştırma sonucunu kaydetmelidir. A onay ve izleme sorumluluğunu üstlenir. İkinci kişinin kontrol zamanı da kaynağın parçasıdır; iş yükü bunu karşılamıyorsa görev ve kaynak kararı düzenlenir.
:::

---

## Çözüm: uygulama ve sonuç kanıtı

**Uygulama izi:** farklı kişi parafı + karşılaştırma sonuçları.

**Sonuç sınaması:** gönderilmiş belge–başvuru kaydı–alıcı eşleşmesi.

**Örnek öneri:** 12 Ekim yürürlük; 26 Ekim son 20 satırın incelemesi ve seçilen gönderimlerin yeniden karşılaştırılması.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: önerilen 12/26 Ekim kesikli çizgi; uygulama izi ve sonuç sınaması ayrı kollar. Amaç: çözüm: uygulama ve sonuç kanıtı ilişkisinin okunmasını sağlamak. -->

::: {.notes}
12 ve 26 Ekim tarihleri, iki haftalık aralık ve 20 satırlık inceleme bu çözümde önerilen düzenin parçalarıdır. Vaka dosyasında gerçekleşmiş olgular değildir. Başka açık ve uygulanabilir inceleme planı da gerekçesiyle seçilebilir.

Listenin doldurulması uygulama izini gösterir. Seçilen gönderimlerde belge, kayıt ve alıcının yeniden karşılaştırılması sonucun doğruluğunu sınar. Şikâyet kaydı ise yalnız fark edilip bildirilen hataları gösterir. İncelenen satırların sonucu bütün gönderimlere genellenmez.
:::

---

## Çözüm: kural ve katılım neyi gösterir?

| Kayıt | Gösterir | Göstermez |
|---|---|---|
| K2 talimat | Yazılı kural ve A onayı | Her gönderimde uygulama |
| K3 eğitim | A–D’nin imzalı katılım beyanları | Gerçekleşmiş katılım, doğru alıcı veya ikinci kişi kontrolü |

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: kural/katılım kaydından uygulama sonucuna atlanamayan ok. Amaç: çözüm: kural ve katılım neyi gösterir? ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Talimatın varlığı ve kimlerin katılım beyanı verdiği kayıtlarda görülür. Talimatın onaylanması kontrolün gerçekleştiği anlamına gelmez; katılım beyanı da doğru alıcı seçildiğini göstermez.

İmza, bağlı olduğu katılım beyanının sahibini gösterir. İşlemin gerçekleşmesini, tedbirin etkisini veya bütün hukuki sorumluluğu tek başına belirlemez. Görevlendirme, uygulama, kontrol ve onayın ayrı kaydı, çalışanların yaptığı işlerin sınırını da görünür tutar.
:::

---

## Çözüm: işlem izi, olay ve beyan

| Kayıt | Taşıdığı iddia | Sınır |
|---|---|---|
| K4 liste | Paraf dağılımı | Karşılaştırma alanları bilinmiyor |
| K5 şikâyet | En az bir yanlış gönderim | Tüm hata sayısı/nedeni bilinmiyor |
| K6 A notu | A’nın değerlendirmesi | İşleyiş kanıtı değil |

K7 otomatik tamamlama: **doğrulanmamış olasılık**.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: beş kayıt için iddia ve kanıt sınırı eşlemesi. Amaç: çözüm: işlem izi, olay ve beyan ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Listede beş farklı kişi parafı bulunması A’nın “kontrol yapılıyor” beyanını yalnız sınırlı biçimde destekler. Hangi alanların karşılaştırıldığı kayıtlı değildir. Kalan satırlarda ikinci kişi parafı koşulu kayıtta gösterilmez; bu durum fiilen kimsenin bakmadığı hükmüyle aynı değildir.

Şikâyet, belirli hatayı doğrular. Şikâyetsiz gönderimlerin doğru olduğu sonucunu taşımaz. Otomatik tamamlama ihtimalini neden kabul etmeden önce merkez BT’nin yazılı inceleme sonucu gerekir.
:::

---

## Çözüm: sayılar hangi koşulu ölçüyor?

**20 gönderim = 6 boş + 9 aynı kişi parafı + 5 farklı kişi parafı**

- 6/20 = **%30**: kontrol eden alanı boş.
- 9/14: paraflı satırlarda gönderenin kendi parafı.
- 5/20 = **%25**: farklı kişi parafı koşulu karşılanmış.

**%25, doğru gönderim oranı değildir.**

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: 20 → 6/14 → 9/5 ayrışması; yüzdeler paraf koşulu olarak etiketlensin. Amaç: çözüm: sayılar hangi koşulu ölçüyor? ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Paraflı 14 satırdan dokuzunda gönderen kendi parafını atmıştır; kalan beşinde farklı kişi vardır. Bu sayım ikinci kişi parafı koşulunun kayıtlı uygulanma izini ölçer. Alanlar karşılaştırılmış mı ve belge doğru kişiye gitmiş mi soruları ayrı kanıt ister.

B-117’de paraf bulunmasına rağmen gönderen ve paraf atan C’dir; yanlış gönderim gerçekleşmiştir. Diğer 19 gönderimde sonuç kaydı bulunmaması onların doğru olduğunu göstermez. Yalnız bu dosyadan gerçek doğru gönderim oranı hesaplanamaz.
:::

---

## Çözüm: gerçekleşen olayı düzeltmek

**Önerilen düzeltme:**

- Olayı ve etkilenen bilgiyi kaydet.
- Doğru yazıyı doğru başvuru sahibine, ayrı kişi kontrolüyle gönder.
- Yanlış alıcıya açılan bilginin etkisini sınırlamaya çalış.

**Sorumlu:** C + ayrı kontrol eden; olay kaydı A’da.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: yanlış açılma olayı ile doğru yeniden gönderim ayrı zaman noktaları. Amaç: çözüm: gerçekleşen olayı düzeltmek ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Doğru yazının gönderilmesi B-117 sahibinin kendi sonucunu öğrenmesini sağlar. Fakat başka adayın yazısının yanlış alıcıya açılmış olması geri alınamaz. Yanlış alıcıdan silme istemek gibi adımlar etkisini sınırlamaya yöneliktir; önceki açılmayı yok etmez.

Olay kaydı hangi bilginin kime ulaştığını ve hangi işlemlerin yapıldığını belirtmelidir. Yeni kontrol listesi satırı ve gönderim kaydı, önerilen düzeltmenin gerçekleştiğinin doğrulanmasında kullanılır.
:::

---

## Çözüm: akışı iyileştirmek

**A’nın önerilen değişikliği:** farklı kontrol eden + belge/kayıt/adres eşleştirmesi + kayıtlı sonuç.

**Merkez BT incelemesi:** otomatik tamamlama neden adayını doğrulama.

**Etki sınaması:** uygulama izi ve gönderim doğruluğunu ayrı inceleme.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: akış boşluğu için liste değişikliği; teknik neden adayı için BT doğrulaması. Amaç: çözüm: akışı iyileştirmek ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Kontrol eden sütunu zaten vardır; düzenin boşluğu neyin neyle karşılaştırılacağının kayıtlı olmaması ve gönderenin kendi parafıyla satırı tamamlayabilmesidir. A’nın liste ve iş akışı değişikliği bu boşluğa yönelir. Bu değişiklik yanlış gönderimin bütün nedenlerinin doğrulandığı anlamına gelmez.

Program ayarı değişikliği, otomatik tamamlama adayının merkez BT tarafından doğrulanmasına bağlıdır. Önerilen 26 Ekim incelemesinde hem farklı kişi ve karşılaştırma alanları hem seçilen gönderimlerin gerçek eşleşmesi değerlendirilmelidir. Dosyada bu inceleme sonucu bulunmaz; etki doğrulanmış sayılmaz.
:::

---

## Çözüm: daha fazla eğitim yeterli mi?

**K3:** Katılım beyanları var; içeriğin ayrıntısı yok.

**K5:** Eğitimden sonra en az bir yanlış gönderim var.

**K4:** Dokuz kendi parafının kaçının eğitim sonrası olduğu bilinmiyor.

Eğitim önerisi, iş akışı boşluklarıyla birlikte değerlendirilir.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: eğitim tarihi ile B-117 olayı; kendi paraflı satırlar için tarih ayrıntısı yok. Amaç: çözüm: daha fazla eğitim yeterli mi? ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Kayıtlar eğitimin tek başına yeterli olduğu sonucunu desteklemez. Ancak sorunun bilgi eksikliği veya iş akışı nedeniyle oluştuğunu da tek başına kanıtlamaz. Eğitimde hangi karşılaştırmanın anlatıldığı kayıtlı değildir; dokuz kendi parafı dönemin toplamıdır.

Eğitim eklenebilir, fakat farklı kişi, karşılaştırılacak alanlar ve kaydın nasıl doldurulacağı açık olmalıdır. E-posta gönderimi birimin kapsamındadır; hizmetin işletilmesi merkez BT’ye bağımlıdır. Neden adayının incelenmesi için bu hizmet ilişkisi kullanılır.
:::

---

## Üç kısa karar

**Görev:** Her soruyu bir kayıt veya tarihle gerekçelendirin.

1. A hem karar sahibi hem gözden geçiren olabilir mi?
2. İK kapsam dışındaysa ayrılış bilgisi önemsiz mi?
3. Kontrol Et, erişim kontrolü mü?

**Ölçüt/üretim:** Her yanıt 2–3 cümle; kavram ayrımı + vaka kanıtı.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: üç boş karar kartı; kanıt ve ayrım alanları. Amaç: üç kısa karar ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Kısa kararlar, bir rolün veya kapsam etiketinin tek başına yeterli olmadığını sınar. A’nın değerlendirmesinde kanıtın kaynağı, İK ilişkisinde sınırı geçen bilgi ve kontrol teriminde yapılan iş belirtilmelidir.

Yanıt bir tarih veya kayıtla ilişkilendirildiğinde genel iddianın vakada nasıl geçerli olduğu görülebilir. Kayıtların taşımadığı kesin sonuçlar eklenmemelidir.
:::

---

## Üç kararın gerekçeleri

- **A:** İki işlevi üstlenebilir; ayrı kaynaktan kanıtı inceler.
- **İK:** Özlük dosyası dışarıda; ayrılış bilgisi erişim kararı için gerekli.
- **Kontrol Et:** Yetki ayarını değil, ayarın ölçütle uyuşmasını değerlendirir.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: üç kararda işlev/kapsam/işlem ayrımını eşleyen şema. Amaç: üç kararın gerekçeleri ilişkisinin okunmasını sağlamak. -->

::: {.notes}
Küçük birimde A karar sahibi ve gözden geçiren olabilir. BT yetki dökümü gibi ayrı kaynaktan gelen kanıt değerlendirmeyi destekler; aylık operasyonel inceleme bağımsız iç tetkik yerine geçmez.

E’nin 11 Eylül ayrılışı ile 30 Eylül açık hesabı, İK bilgisinin erişim kararına ulaşmasının neden gerekli olduğunu gösterir. Yetki ayarı Uygula aşamasındaki önlemdir. Dökümün güncel görev ve taleple karşılaştırılması ise Kontrol Et aşamasıdır.
:::

---

## Kaynaklar

- [ISO/IEC 27001 tanıtım sayfası](https://www.iso.org/standard/27001)
- BGT 201 ders sunumu 2, slayt 16–20, 61, 69, 79.
- ISO/IEC 27001:2013 tarihli metin: bağlam/kapsam/roller, yönetimin gözden geçirmesi ve düzeltici faaliyet.

<!-- Görsel placeholder: Konum: gövdenin altında. Veri: kaynakların genel işlev / tarihli yapısal dayanak / kurgusal vaka olarak ayrılması. Amaç: kaynaklar ilişkisinin okunmasını sağlamak. -->

::: {.notes}
ISO’nun açık tanıtım sayfası yönetim sistemi gereksinimlerinin genel işlevi için kullanılmıştır. 2013 tarihli metin ve ders sunumu tarihli kaynaklardır; onların madde numaraları güncel standart iddiası olarak kullanılmaz. Karar süreleri ve sayısal vaka verileri kurgusal öğretim örneğine aittir.

Birimdeki kişiler, sayılar ve olay kayıtları gerçek bir kurumun verilerini temsil etmez.
:::
