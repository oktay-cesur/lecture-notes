---
title: "BGYS ve Belgeleme"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I · Hafta 3"
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

## Güvenlik yönetimi ve belgeleme

Sonuç yazısı doğru kişiye ulaşsın; başvuru işi aksamasın.

Önlem seçildikten sonra işi kimin, hangi zaman ve araçlarla yürüteceği belirlenir.

::: {.notes}
Bilgi güvenliğini yönetmek, bir önlem seçmekle başlayan fakat uygulamanın sonucunu incelemeyi de gerektiren kurumsal bir iştir. Gönderim öncesi karşılaştırma isteniyorsa görevlilerin buna ayıracağı zaman ve biri yokken işin nasıl süreceği belirlenmelidir. Belgeleme yöntemin aktarılmasına ve belirli bir işlemin sonradan incelenmesine yardım eder. Çalışan da hangi işi yaptığını gösterebilir.
:::

---

## Önlemler hangi adıma etki ediyor?

Kayıt ve Başvuru Birimi: **A sorumlu; B, C ve D görevli.**

Başvuru alma → değerlendirme → sonuç gönderme

- Kilitli dolap: kâğıt arşiv
- Parola: hesap üzerinden erişim
- “Gönderimde dikkat” uyarısı: gönderim davranışı

Sonuç yazıları zaman zaman yanlış kişiye gidiyor; “Başvurular” klasörüne kimlerin erişebildiği kesin bilinmiyor.

::: {.notes}
Kurgusal Kayıt ve Başvuru Birimi başvuruları alır, değerlendirir ve sonucu adaya gönderir. Başvuru formu, ekler, değerlendirme notu ve sonuç yazısı; kâğıt arşivde, paylaşılan klasörde ve e-postada bulunur. Eylülde 48 başvuru alınmıştır; ilk listedeki 12 aday bu toplamın alt kümesidir. D hem arşiv hem belge tarama işini yürütür; bunlar ayrı işlevlerdir.

Dolap kâğıt dosyaya erişimi sınırlar; parola hesabın başkası tarafından kullanılmasını zorlaştırır. İkisi de gönderilecek yazının alıcısını doğrulamaz. Uyarı, hangi alanların karşılaştırılacağını veya karşılaştırmanın yapıldığını neyin göstereceğini belirlemez. Yanlış gönderimin nedeni bu verilerden kesin çıkarılamaz; görülen, önlemler ile gönderim sonucu arasındaki yönetim kararlarının açık olmamasıdır.
:::

---

## İki önerinizi somutlaştırın

Birimin güvenliği için iki öneri yazın.

Her öneriyi belirli bir **bilgiye**, **iş adımına** ve **ortama** bağlayın.

::: {.notes}
“Güvenliği artıralım” ifadesinin hangi işi değiştireceği belli değildir. “Sonuç yazısını göndermeden önce alıcı bilgisini karşılaştıralım” önerisi ise bilgiyi ve işlem adımını belirler. Önerinin birimin işine bağlanması, uygulanabilirliğini ve sonucunu değerlendirmek için başlangıç sağlar. Bir önlemin adı, karar sahibini veya uygulayıcıyı kendiliğinden belirlemez.
:::

---

## Önlem, amaç ve sorumluluk

**Güvenlik önlemi / güvenlik kontrolü:** Belirli bir bilgiyi veya akışı belirli bir korunma amacıyla koruyan, seçilmiş teknik, fiziksel ya da idari düzenleme.

**Amaç:** Önlemin hangi bilginin veya akışın hangi gizlilik, bütünlük ya da erişilebilirlik koşulunu koruyacağı.

**Sorumluluk:** Bir kararın ya da işin belirli bir kişiye verilmiş olması.

::: {.notes}
Güvenlik kontrolü, bir korunma amacıyla seçilen önlemdir. Dolap fiziksel bir önlem, parola teknik bir önlem, gönderim öncesi karşılaştırmanın görev olarak belirlenmesi idari bir önlemdir. Bu türler birlikte çalışabilir. Amaç, hangi bilginin hangi koşulunun korunacağına bağlıdır; örneğin sonuç yazısının yanlış kişiye gitmesini önlemek gizliliği korumayı hedefler. Karar sahibi ile uygulayıcı farklı kişiler olabilir: kuralı A onaylayıp işin uygulanmasını bir görevliye verebilir. Bunlar önerinin adından çıkarılamayan ayrı kararlardır.
:::

---

## Yönetim

**Yönetim**, amaç koyma, karar verip onaylama, uygulayıcıyı ve kaynağı belirleme, uygulamanın sonucunu önceden belirlenmiş bir ölçüte göre değerlendirme ve gerekirse kararı değiştirme işlerinin birlikte yürütülmesidir.

::: {.notes}
Yönetim, bir önlemin kurumda hangi koşullarda işleyeceğini belirler. Gönderim öncesinde bir karşılaştırma isteniyorsa bu iş için kişinin ve zamanın ayrılması gerekir. Sonuca bakılacak ölçüt de belirlenmelidir; yalnız “dikkatli olunsun” demek neyin inceleneceğini açıklamaz. Sonuç beklenen amaçla uyuşmuyorsa yönetim kararın veya işleyişin değişmesine ilişkin karar verir. Onay bu işlerin bir parçasıdır; uygulama için kaynak ayrılması ve sonucun değerlendirilmesi de yönetimin işidir.
:::

---

## Önerinin dört sorusu

1. Neyi korur?
2. Kim karar verir?
3. Kim uygular?
4. İşe yaradığını ne gösterir?

Öneride bulunmayan yanıt: **belirtilmemiş**.

::: {.notes}
Dört soru, bir öneriyi değerlendirmek için gereken bilgiyi ayırır. Korunacak bilgi veya akış, karar sahibi, uygulayıcı ve sonuç kanıtı ayrı belirlenir. Log kaydını sistem üretebilir; hangi kişinin hangi sıklıkla inceleyeceği ise idari karardır. Bu karar yazılmadığında logun varlığı, incelendiğini göstermez. Öneride yer almayan bilgiyi tahminle tamamlamak eksik kararı görünmez kılar; “belirtilmemiş” ifadesi karar ihtiyacını açık tutar.
:::

---

## Çözümlü örnek: ortak bilgisayarda eğitim

**Kurgu:** Laboratuvarda önceki kullanıcı oturumunu açık bırakıyor; sonraki kişi dosyalarını görebiliyor.

**Öneri:** “Oturumu kapatmayı öğretelim.”

. . .

| Soru | Önerinin söylediği |
|---|---|
| Neyi korur? | Önceki kullanıcının dosyalarına erişimi sınırlamayı hedefler |
| Kim karar verir / uygular? | Belirtilmemiş |
| İşe yaradığını ne gösterir? | Katılım imzası sonucu göstermez |

::: {.notes}
Ortak bilgisayar örneğinde değişen kullanıcı, önceki kişinin açık dosyalarını görebiliyor. Eğitim önerisi bu durumu azaltmayı hedefleyebilir. Ancak içerik kararını kimin vereceği, eğitimi kimin yapacağı, hangi zamanın ve bilgisayarın ayrılacağı öneride yoktur. Katılım imzası katıldığına ilişkin beyanı taşır; oturumun kapandığını göstermez. Sonuç için belirlenmiş kullanıcı değişimlerinde önceki oturumun açık kalıp kalmadığı incelenebilir. Bu, yapılmış bir gözlem değil önerilen değerlendirmedir. Dört soru başka bir işte de eksik yönetim kararlarını görünür kılar.
:::

---

## Ana görev 1: iki öneriyi sınayın

**Öneriler:** güçlü parola · log kayıtları tutmak

**Üretim:** İki satır × dört soru tablosu.

**Başarı ölçütü:**

- Korunan bilgi veya akış birime bağlı olsun.
- Öneride bulunmayan yanıt “belirtilmemiş” olsun.
- En az bir hücre önlemin yapamadığı bir işi göstersin.

::: {.notes}
Görev verisi, birimin başvuru alma, değerlendirme ve sonuç gönderme işleri; kâğıt dolap, “Başvurular” klasörü ve e-posta ortamlarıdır. Güçlü parola ve log kaydı önerileri bu verilerle değerlendirilir. Her önerinin hedeflediği bilgi yazıldıktan sonra karar, uygulama ve sonuç sorularının öneride yanıtlanıp yanıtlanmadığı incelenir. Eksik kişi veya değerlendirme düzeni mevcutmuş gibi yazılmaz. Çıktı, öneriyi reddeden genel yargı yerine eksik kararları görünür kılan bir tablodur.
:::

---

## Ana görev 1: çözüm

| Öneri | Neyi korur? | Karar | Uygulama | Sonuç kanıtı |
|---|---|---|---|---|
| Güçlü parola | Başvurulara hesap üzerinden yetkisiz erişimi zorlaştırır | Belirtilmemiş | Belirtilmemiş | Ölçüt ve inceleme belirtilmemiş |
| Log | Erişimi sonradan izlemeye veri sağlar | Belirtilmemiş | Sistem ve inceleyen belirtilmemiş | İnceleme ve ölçüt belirtilmemiş |

::: {.notes}
Güçlü parola, başkasının hesabı kullanmasını zorlaştırır; hesabın sahibinin hâlâ o iş için yetkili olup olmadığını söylemez. Ayrılmış bir kişinin hesabı açık kalmışsa parolanın güçlü olması bu yönetim sorununu gidermez. Bu ifade koşullu bir sınırdır; birimde böyle bir olay yaşandığını bildirmez.

Log doğrudan erişimi engellemez. Hangi hesabın ne yaptığını incelemeye veri sağlayabilir; birden çok kişinin kullandığı bir hesap varsa işlem yapan kişiyi ayırt etmeyebilir. İnceleyen, sıklık ve karşılaştırma ölçütü belirtilmedikçe kayıt üretimi değerlendirmeye dönüşmez. İki satırdaki boşluklar, uygulayıcı ve değerlendirme konusunda verilmesi gereken yönetim kararlarını gösterir.
:::

---

## D'nin alışkanlığı nasıl sürdürülebilir?

**D:** “Her sonuç yazısını göndermeden önce bir daha kontrol ediyorum.”

- D izinliyken yerine bakan kişi neyi neyle karşılaştıracak?
- Bu işi kim üstlenecek; zamanı ayrılmış mı?
- Belirli bir gönderimin inceleme sonucu nerede görülecek?

::: {.notes}
D'nin kişisel karşılaştırması işe yarayabilir. D izinliyken yerine bakan kişi karşılaştırılacak alanları bilmiyorsa yararlı yöntem sürdürülemez. Önce yöntemin açıklanması, yedek görevlinin belirlenmesi ve iş için zaman ayrılması gerekir. Belirli bir gönderimin nasıl incelendiği sorulduğunda karşılaştırılan alanları ve sonucu taşıyan kayıt yardımcı olur. Böylece kişisel bilgi başka bir görevlinin de uygulayabileceği işe dönüşür; yapılmış bir işlem de incelenebilir. Başka bir kurumun önlem listesini kopyalamak bu görev dağılımını kendiliğinden kurmaz.
:::

---

## Bilgi Güvenliği Yönetim Sistemi

**Bilgi güvenliği yönetim sistemi (BGYS)**, bilginin gizliliğini, bütünlüğünü ve erişilebilirliğini kurumun işi ve tabi olduğu koşullarla birlikte korumayı amaçlayan; kararları tanımlı süreçler üzerinden günlük işe dönüştüren, bu kararları veren, uygulayan ve değerlendiren insanları, gerekli zaman ve araç gibi kaynakları ve her işin sorumluluğunu birbirine bağlayan, uygulama sonuçlarını değerlendirip kararları değiştirerek sürekli iyileşen bir yönetim sistemidir.

::: {.notes}
BGYS, güvenlik kararlarının günlük işte yürütülmesini ve sonuçlarının değerlendirilmesini birlikte düzenler. İnsanlar kararı verir, uygular ve değerlendirir; kaynaklar bu iş için ayrılan zaman, görevlendirme ve araçları içerir. Her kararın ve işin sahibi belirlenir. Yönetim desteği bu nedenle onay imzasıyla sınırlı değildir. Sürekli iyileştirme, uygulamanın sonucunun yeni karara girdi olmasıyla gerçekleşir. Sistem kurumun işiyle ilişkili olarak kurulur; güvenlik amacıyla seçilen tek bir araç veya belge tanımdaki bütün ilişkileri taşımaz.
:::

---

## Sonuç yönetim kararına nasıl döner?

| Amaç | İncelenecek sonuç |
|---|---|
| Yazı doğru adaya ulaşsın | Yanlış gönderim yaşandı mı? |
| Başvuru işi aksamasın | Sonuçlar zamanında ulaştı mı? |

Sonuca göre yöntem, yedek görevli veya ayrılan zaman değişebilir.

**Risk:** Bilginin gizlilik, bütünlük veya erişilebilirliğini kaybetmesine yol açabilecek bir olayın olasılığı ve sonucunun birlikte düşünülmesi.

::: {.notes}
Gönderim öncesi karşılaştırma yanlış kişiye gitmeyi azaltabilir. Fakat kontrol görevlisi bulunmadığında bütün yazılar bekliyorsa işin sürdürülmesi de çözülmelidir. Yönetim karşılaştırma yöntemini, yedek görevliyi ve zamanı birlikte belirler. Karşılaştırma kayıtları ve gönderim zamanları iki amacı incelemeye yardımcı olur. İstenen sonuç alınmıyorsa görev dağılımı, yöntem veya ayrılan zaman değiştirilir; sürekli iyileştirme bu değerlendirmenin yeni karara dönüşmesiyle gerçekleşir. Kurumun tabi olduğu koşullar da karar girdisidir; BGYS kurulması bütün yükümlülüklerin karşılandığını kendiliğinden göstermez.
:::

---

## Araç ve belge hangi parçayı taşır?

| Öğe | Taşıdığı iş | Tek başına göstermediği |
|---|---|---|
| Erişim aracı | Seçilmiş yetki kuralını uygular | Yetki kararının sahibi ve değerlendirilmesi |
| Politika belgesi | Amaç ve kuralı yazar | Kuralın uygulandığı |

::: {.notes}
Bir erişim aracı, belirlenen yetkiyi uygulayabilir. Kimin hangi bilgiye erişeceğine, bu yetkinin hangi amaçla verildiğine ve sonucun nasıl inceleneceğine ilişkin kararlar ayrıca gerekir. Politika belgesi kuralı görünür kılar; personelin o kurala göre iş yaptığını gösteren gerçekleşme kaydının yerini tutmaz. Araç ve belge sistemde farklı işlere katkı sağlar. BGYS'yi açıklamak için bu öğelerin birbirine ve yönetime nasıl bağlandığı gösterilmelidir.
:::

---

## Proje ve sertifika hangi parçayı taşır?

| Öğe | Taşıdığı iş | Tek başına göstermediği |
|---|---|---|
| İyileştirme projesi | Belirli bir değişikliği yapar | Sonucun sürekli değerlendirilmesi |
| Sertifika | Dış değerlendirmenin sonucunu taşır | Her gönderimin doğru olduğu |

::: {.notes}
Gönderim için yeni bir şablon getirildiğini varsayalım. Şablonun hazırlanması belirli bir değişikliği tamamlar; sonucunu kimin neye göre inceleyeceği belirlenmemişse sürekli değerlendirme ilişkisi eksiktir. Bu varsayımsal örnek gerçekleşmiş vaka kaydı değildir. Sertifika da belirli bir dış değerlendirmenin sonucudur; tek bir yanlış gönderimi önleyecek işleyişin veya bütün gönderimlerin doğruluğunun yerini tutmaz. Her iki öğe BGYS ile ilişkili olabilir; tanımdaki bütün öğeleri tek başına oluşturmaz.
:::

---

## Kısa kontrol 1: yazılım alımı

Birim yeni bir gönderim yazılımı alıp erişim ayarını yapıyor.

**Bu işlem tek başına BGYS kurar mı?**

**Ölçüt:** En az iki eksik bileşen ve bir birim olgusuyla gerekçelendirin.

::: {.notes}
Yazılım alımı ve erişim ayarı gerçekleştiği varsayılan iki işlemdir. Sorunun yanıtı BGYS tanımındaki insan, süreç, kaynak, sorumluluk ve değerlendirme bağlarıyla sınanır. Gerekçe, birimdeki yanlış gönderim veya D'nin tanımlanmamış kişisel alışkanlığı gibi verilen olgulara dayanır. Yalnız “evet” ya da “hayır” yazılması hangi yönetim işinin eksik kaldığını göstermez.
:::

---

## Kısa kontrol 1: çözüm

Tek başına BGYS kurmaz.

- Karar ve iş sahipleri belirtilmemiştir.
- Gönderim işleyişi ve sonuç değerlendirmesi belirtilmemiştir.

D'nin alışkanlığı yazılım alınca tanımlı göreve dönüşmez.

::: {.notes}
Yazılım erişim kuralını uygulayabilir; fakat yanlış gönderim sorununun hangi işleyişle ele alınacağını ve sonucun neyle değerlendirileceğini kendiliğinden belirlemez. Karar sahibi ve uygulayıcı da bu iki işlemden çıkarılamaz. En az bu iki bileşen grubunun eksikliği, sistemin yalnız araçla kurulamayacağını gösterir. D'nin kişisel karşılaştırma alışkanlığının kurumsal işleyişe dönüşmesi için ayrıca görev, yöntem ve uygulama izi belirlenmelidir.
:::

---

## Dış referans ve kurum kararı

**Dış referans:** Kurum dışında yayımlanan; güvenlik yönetimini kurarken, uygularken veya karşılaştırırken başvurulan metin.

**Ortak ölçüt:** Farklı kurumların aynı biçimde başvurabildiği beklenti.

**Kurum kararı:** Kurumun kendi işine, bilgisine ve ortamına göre seçtiği somut kural, sorumlu ve değer.

::: {.notes}
Bir kurum güvenlik yönetimini oluştururken yayımlanmış standart ve çerçevelerden yararlanabilir. Bu metinlerin katkısı ortak beklenti veya düzen sunmalarıdır. Metin kurumun yerine görevli atamaz veya bir dosyaya erişecek kişiyi seçmez. D'nin yaptığı karşılaştırmanın kurumda nasıl yürütüleceği, birimin işi ve kaynakları dikkate alınarak kararlaştırılır. Referansa başvurmak ile kurum kararını vermek bu nedenle ayrı işlerdir.
:::

---

## ISO/IEC 27001

**ISO/IEC 27001**, ISO ve IEC'nin yayımladığı, BGYS'nin gereksinimlerini tanımlayan uluslararası standarttır. BGYS'yi kurma, uygulama, sürdürme ve sürekli iyileştirme işlerini kapsar; insan, politika ve teknolojiyi birlikte ele alır.

Ortak gereksinim → birimin güvenlik yönetimi kararı

::: {.notes}
ISO/IEC 27001, kurumun BGYS'si için gereksinim kaynağıdır. Birimde yanlış gönderimin ve klasör erişiminin yönetim sistemi içinde ele alınması bu işlevle ilişkilidir. Standardın gereksinimlerine başvurmak, hangi önlemin seçileceğini veya hangi kişiye görev verileceğini kendiliğinden belirlemez. BGYS kurumun kendi sistemidir; standart o sistemin gereksinimlerini tanımlar. [ISO/IEC 27001](https://www.iso.org/standard/27001)
:::

---

## ISO/IEC 27002

**ISO/IEC 27002**, ISO ve IEC'nin yayımladığı, bilgi güvenliği kontrolleri ve bunların uygulanmasına yönelik rehberlik sağlayan uluslararası standarttır.

Kontrol ve uygulama rehberliği → birimin seçenek ve işleyiş kararı

::: {.notes}
ISO/IEC 27002, güvenlik kontrolünün uygulanmasına ilişkin seçenekleri incelemeye rehberlik sağlar. Birim gönderim öncesinde hangi alanları karşılaştıracağını ve bunu kimin yapacağını kendi işi üzerinden belirler. Bir seçeneğin rehberde bulunması, kurumda seçildiği veya uygulandığı anlamına gelmez. ISO/IEC 27001'in BGYS gereksinimleri işlevi ile ISO/IEC 27002'nin kontrol rehberliği işlevi bu noktada ayrılır. [ISO/IEC 27002](https://www.iso.org/standard/75652.html)
:::

---

## COBIT

**COBIT**, ISACA'nın yayımladığı, kurumsal bilgi ve teknolojinin yönetişimi ve yönetimi için kullanılan çerçevedir.

Yönetişim: kurumsal hedef, karar hakkı ve kimin kime hesap vereceği.

::: {.notes}
Birim ile dış ve merkez BT arasındaki işlerde karar hakkının kimde olduğu belirlenmelidir. Hangi BT kararının kurumun hangi hedefini desteklediği ve sonucun kime raporlanacağı da yönetişim sorusudur. COBIT bu ilişkileri kurmayı destekleyen bir çerçevedir; kişi atamasını kurum yapar. Bu işlev, bilgi güvenliği kontrolü uygulama rehberliğinden ve BGYS gereksinim standardından farklıdır. [ISACA — COBIT](https://www.isaca.org/resources/cobit)
:::

---

## ITIL

**ITIL**, PeopleCert'in sunduğu, dijital ürün ve hizmet yönetimi için kullanılan çerçevedir.

Hizmet yönetimi: talep, değişiklik ve kesintinin ele alınması.

::: {.notes}
E-posta hizmetinde bir değişiklik veya kesinti olduğunda talebin nereye iletileceği ve birime nasıl bilgi verileceği kararlaştırılmalıdır. Bu, BT hizmetinin yürütülmesiyle ilgili bir sorudur. ITIL hizmet yönetimine çerçeve sağlar. Birim ile merkez BT kendi bildirim yolunu ve muhatabını belirler. Bu hizmetin düzenli işletilmesi güvenlik yönetimine katkı sağlayabilir; fakat ITIL bir BGYS değildir. [PeopleCert — ITIL](https://www.peoplecert.org/Frameworks-Professionals/ITIL-framework)
:::

---

## Dört soru, dört katkı

| Sorunun istediği iş | Referansın katkısı |
|---|---|
| Güvenliği sistem olarak yönetmek | 27001: BGYS gereksinimleri |
| Güvenlik kontrolünü uygulamak | 27002: kontrol rehberliği |
| BT'de karar hakkını belirlemek | COBIT: yönetişim ve yönetim |
| BT hizmetini yürütmek | ITIL: hizmet yönetimi |

Her katkı kurumun somut kararından geçer.

::: {.notes}
Referans sorunun istediği işten seçilir. Bir hizmet değişikliği hem değişiklik bildirim yolunu hem karar hakkını etkileyebilir: birinci soru ITIL'in hizmet yönetimi, ikinci soru COBIT'in yönetişim işleviyle ilişkilidir. Aynı olayın iki referansa dokunması, soruları eş anlamlı yapmaz. Kurumda kalan karar da ayrı yazılır; bir referansın adını söylemek sorumlunun atanması veya önlemin uygulanması yerine geçmez.
:::

---

## Dört somut sorun hangi katkıyı ister?

| Somut sorun | Katkı veren referans | Kurumun belirleyeceği |
|---|---|---|
| Bir okulda güvenlik görevleri dağınık; sonuçları kimin değerlendireceği belirsiz | 27001: BGYS gereksinimleri | Yönetim düzeni, görevler, kaynak ve değerlendirme |
| Ortak laboratuvar bilgisayarında önceki kullanıcının dosyaları açık kalıyor | 27002: güvenlik kontrolleri ve uygulama rehberliği | Kullanıcı değişiminde uygulanacak önlem ve uygulayıcı |
| Okul yeni bir ders sistemi alacak; bütçeye ve hizmet önceliğine kimin karar vereceği belirsiz | COBIT: yönetişim ve yönetim | Karar yetkisi, kurumsal hedef ve rapor muhatabı |
| Ders sistemi kesildiğinde öğretmenler kimi arayacağını bilmiyor | ITIL: hizmet yönetimi | Bildirim yolu, muhatap ve hizmetin sürdürülme işleyişi |

::: {.notes}
Bu durumlar kurgusal öğretim örnekleridir; referanslarda bu olayların anlatıldığı ileri sürülmez. Okulun dağınık güvenlik görevlerini bir sistem içinde düzenlemesi 27001 gereksinimlerine başvurmayı gerektirir. Ortak bilgisayarda kullanıcı değişimi ise kontrol seçme ve uygulama sorusudur; 27002 rehberliğine başvurulur. Bütçe ve öncelik kararında yetkinin kimde olduğu COBIT, kesinti sırasında hizmetin nasıl ele alınacağı ITIL katkısıyla düşünülür. Aynı ders sistemiyle ilgili son iki durumun farklı sorular olması işlev ayrımını görünür kılar.
:::

---

## Kısa kontrol 2: referansı seçin

1. Okul güvenlik görevlerini ve değerlendirmeyi bir yönetim sisteminde düzenleyecek.
2. Laboratuvarda kullanıcı değişiminde açık kalan dosyalara karşı önlem seçilecek.
3. Ders sistemi bütçesi ve önceliği için karar yetkisi belirlenecek.
4. “Kesinti bildiriminde ITIL'e başvurduk; okulun BGYS'si kurulmuş oldu.”

**Üretim:** Soru · referans · kurumda kalan karar.

::: {.notes}
Her cümlede istenen iş belirlenir. İlkinde yönetim sisteminin düzeni, ikincide bir kontrolün seçimi ve uygulanması, üçüncüde karar yetkisi sorulmaktadır. Dördüncü cümlede hizmet yönetimine ilişkin bir düzenlemeden bütün güvenlik yönetimine geçilip geçilemeyeceği incelenir. Yanıtta yalnız referans adı değil, okulun veya laboratuvarın hâlâ vermesi gereken somut karar da yazılır.
:::

---

## Kısa kontrol 2: başarı ölçütü

- Soru, referans ve kalan karar ayrı yazılı.
- Seçim, referansın işleviyle gerekçeli.
- Kalan karar somut işe veya role bağlı.
- COBIT/ITIL BGYS sayılmıyor; referans kişi atamıyor.

::: {.notes}
Referansın katkısı ile kurumun yapacağı iş ayrı değerlendirilir. Örneğin laboratuvarın hangi önlemi kimin uygulayacağını seçmesi gerekir; 27002 adını söylemek bu görevlendirmeyi yapmaz. Bütçe sorusunda yetki sahibi ve rapor muhatabı, kesinti sorusunda ise bildirim yolu belirtilirse yanıtın hangi işe katkı verdiği görülebilir.
:::

---

## Kısa kontrol 2: çözüm

| Cümle | Referans | Kurumda kalan karar |
|---|---|---|
| 1 | 27001 | Güvenlik görevleri, kaynak ve değerlendirme |
| 2 | 27002 | Önlem, uygulayıcı ve uygulama biçimi |
| 3 | COBIT | Bütçe/öncelik yetkisi ve rapor muhatabı |
| 4 | ITIL hizmet yönetimine katkı verir | Okulun kendi BGYS düzenini kurması |

::: {.notes}
İlk üç eşleme sırasıyla yönetim sistemi gereksinimleri, kontrol rehberliği ve yönetişim işlevlerine dayanır. Dördüncü cümlede hizmet yönetimi BGYS ile eşitlenmiştir. Kesinti bildiriminin düzenlenmesi, okulun güvenlik amaçlarını, bütün süreçlerini, sorumlularını ve değerlendirme düzenini kendiliğinden kurmaz. Aynı ders sistemi hem yönetişim hem hizmet yönetimi sorusu doğurabilir; cevapta sorunun istediği iş esas alınır.
:::

---

## D yaptığı işi nasıl gösterebilir?

D: “Göndermeden önce karşılaştırdım.”

- Hangi işlem?
- Hangi alanlar?
- Ne zaman ve kim tarafından?

Aynı sorular kurumun uygulamayı incelemesi için de gerekir.

::: {.notes}
D'nin açıklaması bir işin yapıldığını söyleyen beyandır. Belirli bir yanlış gönderim incelendiğinde, hangi alanların ne zaman karşılaştırıldığını gösteren ayrıntı yoksa D yaptığı işi kayıt üzerinden gösteremez. A da uygulamanın gerçekleşmesini inceleyemez. Kayıt eksikliği işlemin yapılmadığını kanıtlamaz; gerçekleşenin gösterilmesini zorlaştırır. Belgeleme kurumu ve çalışanın kendi işini gösterebilmesini birlikte destekler.
:::

---

## Belge ve iki işlevi

**Belge (doküman)**, belirli bir amaçla kaydedilmiş bilgi ve onu taşıyan ortamdır.

- Beklenti belgesi: yapılacak işi belirler.
- Gerçekleşenin kaydı: belirli iş, karar veya gözlemi taşır.

Kayıt da belge olabilir.

::: {.notes}
Belge kavramı kâğıtla veya önceden yazılmış kuralla sınırlı değildir. Elektronik bir işlem satırı, yazılı karar veya doldurulmuş arşiv formu belge olabilir. Beklenti belgesi ile gerçekleşenin kaydı işlev olarak ayrılır: biri yapılacak işi belirler, diğeri belirli bir gerçekleşme hakkında bilgi taşır. Bu ayrım bütün belgelerin önceden hazırlanıp onaylandığı anlamına gelmez. Bir kararın belgesi, o kararın günlük işte uygulandığına ilişkin kaydın yerini tutmaz.
:::

---

## Boş form ve kayıt

**Boş form**, hangi bilginin hangi alanlara yazılacağını ve her imza alanının hangi beyana ait olduğunu önceden belirleyen şablondur.

**Kayıt**, gerçekleşmiş bir iş, karar veya gözlem için tutulan; ne olduğunu, ne zaman olduğunu ve kim tarafından yapıldığını taşıyan belgedir.

::: {.notes}
Boş form yalnız kayıt için alan açar; bir işin yapıldığını göstermez. Kayıt iş sırasında veya hemen ardından gerçeğe uygun tutulur. Sonradan düzeltme gerektiğinde önceki bilgi gizlenmez; düzeltmenin tarihi ve yapanı görünür kalır. Böylece kaydın bütünlüğü korunabilir. Kayıt bulunamadığında gerçekleşme gösterilemeyebilir; bu durum işin yapılmadığını kendiliğinden kanıtlamaz. Kaydın bulunabilir olması, değerlendirmede kullanılabilmesi için gereklidir.
:::

---

## Kuraldan değerlendirmeye

Politika / karar → amaç ve kural

Prosedür / talimat → kimin hangi adımı yaptığı

Form → kayıt alanları

Doldurulmuş kayıt → gerçekleşenin izi

**Değerlendirme:** Kayıtların toplu olarak kuralın amacına göre incelenmesi.

::: {.notes}
Politika veya karar ne istendiğini ve nedenini belirler. İşleyiş günlük adımları açıklar. Form alanları, gerçekleştiğinde hangi bilginin tutulacağını düzenler. Doldurulmuş kayıt belirli bir gerçekleşmenin beyanını taşır. Değerlendirme ise kayıtları kuralın amacı açısından birlikte inceler; sonucu yeni karara girdi olmalıdır. “Değerlendirildi” ifadesi sonuç yazılmadığında neyin değişmesi gerektiğini göstermez. Eğitim katılım kaydıyla gönderim sonucunun ayrılması, bir kaydın ancak belirli bir iddia için kanıt olmasını örnekler.
:::

---

## Görevlendirme, uygulama, kontrol, onay

**Görevlendirme:** İşin kime verildiğinin yetkili kişi tarafından yazılı belirlenmesi.

**Uygulama:** İşin fiilen yürütülmesi.

**Kontrol:** İşin veya sonucunun tanımlı ölçütle karşılaştırılması.

**Onay:** Kuralın veya kararın yetkili kişi tarafından kabul edilip yürürlüğe konması.

::: {.notes}
Görevlendirme uygulama kaydı değildir: D'nin arşiv işine atanması belirli bir dosyanın iadesini göstermez. Onay da kuralın kabul edilmesini gösterir; her işlemin incelendiğini göstermez. Kontrol burada tanımlı ölçütle karşılaştırma işidir; güvenlik kontrolü ise korunma amacıyla seçilen önlemdir. Karşılaştırmanın farklı kişi tarafından yapılması, belirli bir işleyişte ayrıca konabilecek kuraldır. Aynı kişi birden fazla işlev üstlenirse hangi işleve ilişkin beyan verdiği ayrı tutulur.
:::

---

## Beyan ve imza

**Beyan:** Bir kişinin bir olgu hakkında kendi adıyla yaptığı ifade.

**İmza / paraf:** İmzalayanı, bulunduğu alana bağlı belirli beyanla ilişkilendirir.

Beyanın kapsamını alanın metni belirler.

::: {.notes}
İmza, bağlı olduğu beyanın kime ait olduğunu gösterir. “Dosyayı aldım” ile “Dosyayı geri aldım; sayfa sayısı aynı” farklı işlere ilişkindir. Katılım imzası da katılımı beyan eder; bilginin öğrenildiğini veya davranışın değiştiğini göstermez. Alan metni belirsiz olduğunda paraf atan kişinin ne söylediği de belirsizdir. İşin doğruluğu için ayrıca dosyanın görülmesi, başka bir işlem kaydı veya başka bir kişinin gözlemi gerekebilir. Bir beyanın yazılı olması içeriğini kendiliğinden doğrulamaz.
:::

---

## Cihazı almak ile sınamak aynı beyan mı?

**Kurgusal cihaz teslimi:**

- “Dizüstü bilgisayarı teslim aldım.”
- “Cihazı açtım; ekran, klavye ve ağ bağlantısını sınadım.”

. . .

İkinci beyanı vermek için belirtilen sınamaların yapılmış olması gerekir.

::: {.notes}
Cihazı teslim alan çalışan yalnız teslim almayı bildirmiş olabilir. İlk alanın imzası cihazın çalışır durumda sınandığını söylemez. İkinci alan ise belirli sınamaların yapıldığı beyanını taşır. Çalışan bu işleri yapmadıysa onları yapılmış gibi imzalamamalıdır. Teslim tarihi ve cihaz numarası hangi teslimden söz edildiğini ayırır; sınamayı başka görevli yaptıysa onun yaptığı iş ayrı kaydedilir. Böylece çalışan hangi işi yaptığını gösterebilir. Bu karşılaştırmadan hukuki sorumluluğu bütünüyle belirleyen bir sonuç çıkarılmaz.
:::

---

## Gerçeğe uygun beyan

**Gerçeğe uygun beyan**, kişinin yaptığı veya gördüğü işi olduğundan geniş yazmadan bildirmesidir.

Yapılmamış işe “yapıldı” yazıp imzalamak, bu ifadeyi kişinin kendi beyanı hâline getirir.

İmza tek başına işlemin doğruluğunu, önlemin etkisini veya bütün hukuki sorumluluğu belirlemez.

::: {.notes}
Gerçeğe uygun kayıt için kişi kendi yaptığı ya da gördüğü işi açıkça yazar. Başkası adına veya iş yapılmadan önce imza atılmaz. Yapılmayan işin nedeni belirtilir; sonradan eklenen bilgi ekleme tarihiyle gösterilir. Bu davranışlar hangi gerçekleşmenin kimin beyanıyla kayda girdiğini açık tutar. Bir kişinin imzasından bütün olayın sorumluluğu çıkarılamaz. Gerçeğe aykırı geniş bir beyan ise kişinin yapmadığı işleri de ona ait ifade gibi gösterebilir.
:::

---

## Hesap verebilirlik

**Hesap verebilirlik**, bir iş veya kararın onu yapan kişiye ya da yürüten sürece bağlanabilmesi, ne yapıldığının ve neye dayanarak yapıldığının gösterilebilmesi ve başkasının bunu kayıt üzerinden inceleyebilmesidir.

::: {.notes}
Sorumluluk bir işin kime verildiğini belirler; hesap verebilirlik yapılan işin izlenebilmesiyle ilgilidir. Görevlendirme, uygulama, kontrol ve onay ayrıldığında kurum hangi işin kim tarafından yapıldığını inceleyebilir. Çalışan kendi yaptığı ile başkasının yaptığı işi ayırt edebilir. Ayrı bir teslim alanın iade beyanı, dosyayı alan kişinin iadeyi göstermesine yardımcı olur. Bu açıklama kusur veya yaptırım hükmü değildir; kayıtların sağladığı gösterme imkânını anlatır.
:::

---

## Arşiv örneği: amaç ve görevlendirme

**Kurgusal öğretim verisi — 17 Eylül 2026**

A'nın kararı: dosyanın yeri bilinsin, sayfaları eksilmesin, yalnız değerlendirme için kullanılsın.

Kural: kayıtla çıkış ve aynı gün iade.

Görevlendirme: arşiv işi D'de; yokluğunda yedek belirtilmemiş.

::: {.notes}
Arşiv düzeni ve işlemler, Kayıt ve Başvuru Birimi için oluşturulmuş kurgusal öğretim verisidir. A'nın kararı erişilebilirlik, bütünlük ve gizlilik amaçlarını dosya hareketiyle ilişkilendirir. Görevlendirme D'nin işini belirler, belirli bir iadeyi yaptığını göstermez. D'nin bulunmadığı gün için yedek belirtilmemesi, işin sürdürülmesine ilişkin ayrı bir yönetim kararı boşluğudur. Bu bilgiler gerçek bir çalışan hakkında hukuk veya kusur hükmü kurmaya elverişli değildir.
:::

---

## Arşiv örneği: işleyiş

1. Alan kişi çıkış kaydını imzalar.
2. Farklı görevli iadeyi alır; sayfa sayısını karşılaştırır.
3. Teslim alan iade beyanını imzalar.
4. A cuma günü açık satırları dolapla karşılaştırıp sonucu yazar.

Farklı kişi koşulu bu örneğin kuralıdır; atanmış teslim alan D'dir.

::: {.notes}
Arşiv işleyişinde çıkış ve iade iki ayrı beyanla izlenir. Dosyayı alan kişi çıkışı; teslim alan ise iadeyi ve sayfa sayısı karşılaştırmasını beyan eder. Farklı kişi koşulu genel kontrol tanımının parçası değildir; bu düzen için ayrıca seçilmiştir. A'nın açık satırları dolapla karşılaştırması, kayıt boşluğunun dosyanın gerçekten nerede olduğu ile ilişkilendirilmesini sağlar. Sonuç yazılmazsa bu incelemenin ne gösterdiği karara taşınamaz.
:::

---

## Arşiv örneği: form alanları

Tarih · dosya no · alan kişi · amaç · çıkış sayfa sayısı

**“Dosyayı aldım”** — alan imzası

İade tarihi/saati · **“Geri aldım; sayfa sayısı çıkıştakiyle aynı”** — teslim alan imzası

**“Kontrol”** — beyan metni ve işleyişte karşılığı belirtilmemiş paraf alanı

::: {.notes}
Boş arşiv formu gerçekleşecek iş için alanları belirler. Çıkış imzası dosyayı aldığını, iade imzası ise geri alma ve sayfa sayısını karşılaştırma beyanını taşır. Formdaki “Kontrol” sütunu hangi ölçüte göre hangi karşılaştırmanın beyan edildiğini açıklamaz; işleyişte de karşılığı yoktur. Sütunun adından bir görev veya ek güvence çıkarılamaz. Alan metni ile görev tanımının birlikte açık olması gerekir.
:::

---

## Çözümlü kayıt: satır 1

21 Eylül · dosya **07** · değerlendirme · **6 sayfa**

Çıkış: **C** — “Dosyayı aldım.”

İade, 21 Eylül 16.00: **D** — “Geri aldım; sayfa sayısı aynı.”

Sayfa sayısı eşleşmesi, içeriklerin değişmediğini göstermez.

::: {.notes}
C, dosyayı 21 Eylül'de değerlendirme için aldığını beyan etmiştir. D aynı gün dosyayı geri aldığını ve sayfa sayısını çıkıştakiyle karşılaştırdığını beyan etmiştir. İki ayrı kişinin beyanı işlem zincirini izlemeyi sağlar: C iadeye, D yaptığı karşılaştırmaya ilişkin kayıt gösterebilir. Ancak altı sayfanın içeriğinin değişmediği veya dosyanın yalnız belirtilen amaçla kullanıldığı bu satırdan çıkarılamaz. Tek satır bütün düzenin amacına ulaştığını da göstermez.
:::

---

## Görev verisi: satır 2 ve 3

| Satır | Çıkış | Dosya / amaç / sayfa | Çıkış imzası | İade | İade imzası |
|---|---|---|---|---|---|
| 2 | 22 Eylül | 19 / değerlendirme / 8 | B | Boş | Boş |
| 3 | 23 Eylül | 23 / değerlendirme / 5 | B | 23 Eylül 15.00 | B |

“Kontrol” alanları boş. **D, 23 Eylül'de izinli.**

::: {.notes}
İki arşiv satırının çıkış beyanı B'ye aittir. İade alanında kullanılan beyan metni “Dosyayı geri aldım; sayfa sayısı çıkıştakiyle aynı”dır. İkinci satırın iade alanı boş, üçüncü satırın iade imzası B'dir. D'nin 23 Eylül'de izinli olduğu bilgisiyle görevlendirmede yedek belirtilmediği bilgisi birlikte erişilebilirdir. Bunlar kurgusal öğretim kayıtlarıdır; boş alana fiili dosya durumu tahmin edilerek eklenmez.
:::

---

## Görev verisi: satır 4 ve toplu notlar

24 Eylül · dosya **31** · değerlendirme · **7 sayfa**

Çıkış: C · İade, 24 Eylül 16.00: D · “Kontrol” parafı: C

**A:** “25 Eylül: açık satırlar dolapla karşılaştırıldı.” Sonuç yazılmamış.

**D:** “Bu hafta arşivden çıkan bütün dosyalar iade edildi.”

::: {.notes}
Dördüncü satırda C'nin çıkış imzası ve D'nin iade imzası aynı alan metinlerine bağlıdır. Ayrıca C metinsiz “Kontrol” alanına paraf atmıştır. A'nın satırı karşılaştırma yapıldığı beyanını taşır; karşılaştırmanın sonucunu belirtmez. D'nin notu tüm dosyaları kapsayan bir iddiadır. Bu iki not, dört işlem satırıyla birlikte incelenecek veridir; doğrulandıkları varsayılmaz.
:::

---

## Ana görev 2: kaydı ve beyanı inceleyin

1. Satır 2–4: neyi gösterir, neyi göstermez?
2. Satır 3–4: imzalayan, alanın beyanı ve sınırı nedir?
3. D'nin notunu kaydın gösterdiği kadarını söyleyecek biçimde yazın.
4. Form veya görevlendirmede tek değişiklik önerin.

**Üretim:** kısa tablo · düzeltilmiş not · gerekçeli öneri.

::: {.notes}
Görevin verisi A'nın kararı, görevlendirme yazısı, işleyiş, form alanları, dört işlem satırı, D'nin izin bilgisi ve A ile D'nin notlarıdır. İddialar bu malzemeler üzerinden kurulmalıdır. İmzanın bağlı olduğu beyan, işlemin doğruluğu ve düzenin amacına ulaşması ayrı değerlendirilir. Öneri gerçekleşmiş işlem olarak yazılmaz; kaydın veya görevlendirmenin hangi belirsizliğini gidereceği belirtilir.
:::

---

## Ana görev 2: başarı ölçütü

- Her iddia satır numarasına veya malzemeye bağlı.
- İmzalayan, beyan ve beyanın sınırı ayrı.
- Eksik bilgi için “kayıt göstermiyor” yazılı.
- Kişi hakkında genel hüküm yerine gösterilebilen iş açıklanmış.
- Öneri, belirli alanı ve kimin beyanını netleştirdiğini söylüyor.

::: {.notes}
İade alanının boş olması, kaydın iadeyi göstermediği anlamına gelir; dosyanın nerede olduğu ayrıca gözlenmeden söylenemez. İmzalayanın hangi ifadeyi üstlendiği alan metninden çıkarılır. Formdaki eksik görev veya belirsiz alan, kişi hakkındaki yorumla doldurulmaz. Önerinin yeterliliği genel bir “daha dikkatli olma” çağrısıyla değil, belirli bir kayıt veya görevlendirme bilgisini netleştirmesiyle değerlendirilir.
:::

---

## Ana görev 2: satır 2 ve 3 çözümü

**Satır 2:** Çıkış B'nin beyanı; iade kayıtla gösterilemiyor. Dosyanın kaybolduğu sonucu çıkmaz.

**Satır 3:** İade beyanı B'ye ait. Farklı teslim alan koşulu karşılanmamış; D izinli, yedek belirtilmemiş.

::: {.notes}
Satır 2'de iadenin kaydı bulunmadığından iadenin olup olmadığı bu satırla gösterilemez. A'nın sonuç yazılmamış karşılaştırma satırı da bu boşluğu gidermez. Satır 3'te B'nin imzası, ayrı bir teslim alanın iadeyi gördüğünü göstermez. İşleyişin farklı kişi koşulu karşılanmamıştır. D'nin izniyle yedek görevlendirme boşluğu, işin sürdürülmesi için eksik yönetim kararını görünür kılar; B'nin niyetini veya kişisel kusurunu göstermez.
:::

---

## Ana görev 2: satır 4 ve D'nin notu

**Satır 4:** D iadeyi ve sayfa sayısını beyan eder. C'nin “Kontrol” parafının beyanı belirsizdir.

**D'nin düzeltilmiş notu:**

“07 ve 31'i geri aldım; sayfa sayılarını karşılaştırdım. 19'un iade alanı boş. 23'ün iade beyanı B'ye ait.”

::: {.notes}
Satır 4'te D'nin iade beyanı, dosyanın içeriğinin değişmediğini göstermez. C'nin “Kontrol” alanındaki parafından neyi karşılaştırdığı çıkarılamaz. D'nin toplu notu ise satır 2'deki boş iade alanını ve satır 3'te başka kişiye ait beyanı kendi yaptığı iş gibi kapsar. Düzeltilmiş not D'nin imzaladığı iadeleri ve diğer satırlardaki kayıt durumunu ayırır. Dosya 19'un kaybolduğunu söylemez; dosya 23'ün iadesini D'nin gözlemi gibi sunmaz.
:::

---

## Ana görev 2: değişiklik önerisi

**Örnek öneri:** A, D yokken iadeyi alacak farklı bir yedek görevli belirlesin.

Alternatifler:

- “Kontrol” alanı kaldırılır veya beyanı açık yazılır.
- Değerlendirme satırına karşılaştırma sonucu eklenir.

::: {.notes}
Yedek görevlendirme, D'nin yokluğunda farklı teslim alan koşulunu kimin yürüteceğini belirler. “Kontrol” alanının beyanının yazılması, imzalayanın yaptığı karşılaştırmayı açıklar; alan gereksizse kaldırılması belirsiz beyanı önler. A'nın değerlendirme sonucunun yazılması, açık satırların fiili durumunun karar için kullanılmasını sağlar. Bunlar kabul edilebilir önerilerdir; gerçekleştikleri söylenmez. Görev, uygulama, karşılaştırma ve onay ayrı görünür olduğunda kurum uygulamayı inceleyebilir, çalışan da kendi işiyle başkasının işini ayırt edebilir.
:::

---

## Kaynaklar

- [ISO/IEC 27001](https://www.iso.org/standard/27001) · [ISO/IEC 27002](https://www.iso.org/standard/75652.html)
- [ISACA — COBIT](https://www.isaca.org/resources/cobit) · [PeopleCert — ITIL](https://www.peoplecert.org/Frameworks-Professionals/ITIL-framework)
- BGT 201 ders sunumu 2, slayt 2–8, 24, 27, 39.
- *Fundamentals of Information Systems Security*, Bölüm 5, s. 137, 154; Bölüm 6, s. 192–195.

::: {.notes}
Standart ve çerçevelerin genel işlevleri ISO, ISACA ve PeopleCert'in tanıtım sayfalarına dayanır; bu sayfalar 14 Ekim 2026 tarihli yetkili kaynak kontrolünde incelenmiştir. Yönetim ihtiyacının kurulmasında ders sunumundaki önlemden sistematik yaklaşıma geçiş kullanılır. Belgeleme ve hesap verebilirlik açıklamaları seçilmiş kaynak bölümleriyle desteklenir. Birim örnekleri kurgusaldır; arşiv düzeni ve satırları öğretim için oluşturulmuştur.
:::
