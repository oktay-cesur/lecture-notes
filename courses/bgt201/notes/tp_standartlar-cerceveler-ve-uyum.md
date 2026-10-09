---
title: "Standartlar, Çerçeveler ve Uyum"
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

## Standartlar, çerçeveler ve uyum

Bir olaydan sonra biri “ISO'ya uyalım”, bir başkası “ITIL'e göre düzeltiriz” der.

Bu adlar hangi soruya cevap verir; hangi kararı kurumun yerine vermez?

::: {.notes}
Geçen hafta Kayıt ve Başvuru Birimi'nde bir BGYS'nin nasıl işlediğini izledik: kapsamı ve bağımlılıkları belirledik, kararı ölçütle yazdık, uygulamanın kaydını ölçütle karşılaştırdık ve bulguyu yeni karara bağladık. Bu hafta aynı birimde başka bir soruyla karşılaşıyoruz: dış referansların adları.

Haftanın sonunda dört şeyi yapabilmeliyiz. Bir güvenlik olayını ayrı yönetim sorularına bölüp her soruya katkı veren dış referansı (ISO/IEC 27001, ISO/IEC 27002, COBIT, ITIL, ulusal rehber) işleviyle eşlemek. Ders sunumundaki ISO/IEC 27001 tanıtımını açıklamak ve her iddianın bugün nasıl okunacağını bir doğrulama sınıfıyla göstermek. Standardın ana madde yapısını vakadaki bir karar ya da kayıtla ilişkilendirmek. Bir kontrol kararını gerekçeden kanıta uzanan bir kayıtla yazmak ve “kontrol var” ile “kontrol işliyor” kanıtını ayırmak.
:::

---

## Bir değişiklik, altı yanlış alıcı

Başvuru uygulamasını dış BT işletiyor; hesap işlemlerini de dış BT, e-posta hizmetini merkez BT yürütüyor.

| Ne oldu? | Hangi kayıt var? |
|---|---|
| Ekim sonu: birim sorumlusu dış BT'ye yazdı: “Başvuru belgesi adaya otomatik gitsin.” | Bir istek e-postası |
| 2 Kasım 2026 pazartesi: dış BT özelliği açtı | — |
| Değişikliği kim onayladı? | Yazılı kayıt yok |
| Hangi durumlarla denendi? | Test kaydı yok |
| Sorun çıkarsa nasıl geri alınacak? | Yazılı değil |

::: {.notes}
E-posta bir istekti, bir onay değil. İstek hizmette gerçek bir değişiklik başlattı; ama değişikliğin kimin kararıyla açıldığı, hangi durumlarla denendiği ve sorun çıkarsa kimin, nasıl geri alacağı hiçbir yerde yazmıyor. Olay bu yüzden iki katmanlıdır: bir yazılım kuralı ve bir karar süreci. Önce yazılım tarafında ne olduğuna, ilk beş iş gününün kayıtlarına bakalım.
:::

---

## Hatanın deseni

| İlk 5 iş günü (2–6 Kasım) | Değer |
|---|---:|
| Otomatik gönderilen e-posta | 240 |
| Başkasının belgesi eklenen e-posta | 6 |
| Hata oranı | 6 / 240 = %2,5 |
| Altı hatanın ortak noktası | Aynı gün başvuran, aynı soyadlı adaylar |

Uygulama belgeyi adaya şu iki alanla bağlıyor: **soyadı + başvuru tarihi**

::: {.notes}
Aynı gün başvuran iki Yılmaz bu iki alanla birbirinden ayrılamaz; kural iki belgeden hangisinin hangi adaya ait olduğunu belirleyemez. Oran hatanın büyüklüğünü, ortak desen ise olası nedenini gösterir. Bu desen sayesinde kontrol seçimini varsayımsal bir risk puanından değil, olay verisinden gerekçelendirebileceğiz.
:::

---

## Hata nasıl fark edildi, hizmet nasıl etkilendi?

| Ne zaman | Ne oldu |
|---|---|
| 5 Kasım (4. gün) | Bir aday, başka bir adayın belgesini aldığını telefonla bildirdi |
| Ardından | Birim sorumlusu durumu e-postayla dış BT'ye iletti |
| 6 Kasım akşamı | Dış BT nedeni inceledi, özelliği kapattı |
| 9 Kasım pazartesiden itibaren | Gönderimler elle yapılıyor; geçişte 35 başvurunun yanıtı gecikti |

Aynı olayda gizlilik, bütünlük ve erişilebilirlik birlikte etkilendi.

::: {.notes}
Yanlış alıcıya giden kimlik ve başvuru bilgisi gizliliği, belgenin yanlış adayla eşlenmesi bütünlüğü, özellik kapatıldığında geciken 35 yanıt da erişilebilirliği ilgilendirir.

Tablodaki ilk satır ayrıca okunmalı: hatayı kurum değil, aday buldu. Kurumun kendi kayıtlarından hatayı görememesi bir tespit eksikliğidir. Özelliği kimin durdurabileceği yazılı olmadığı için kapatma da gecikti. Kapatmak yeni yanlış gönderimi durdurdu ama hizmeti yavaşlattı. Gönderilmiş yanlış e-postalar için yapılabilecek olan, alıcılardan silme istemek ve olayı kayda geçirmektir; açılmış bir belge geri alınamaz. Bir kontrol kararı bu sonuçların hepsini birlikte görmelidir.
:::

---

## Üç öneri; hangisi kararı söylüyor?

| Söyleyen | Cümle |
|---|---|
| Birim sorumlusu | “ISO'ya uyalım, bu iş biter.” |
| Dış BT | “ITIL'e göre düzeltiriz.” |
| Başvuru görevlisi | “Bir kontrol ekleyelim.” |

Kim karar verecek? Ne uygulanacak? İşlediğini hangi kayıt gösterecek?

::: {.notes}
Üç cümle de iyi niyetlidir ve her biri bir şeye işaret eder. İlki bir yönetim sistemine, ikincisi hizmetin değiştirilme biçimine, üçüncüsü tek bir önleme bakıyor. Ama hiçbiri alttaki üç soruya cevap vermiyor. Bir referansın adını söylemek karar sahibi ya da kanıt oluşturmaz. Önce olayın hangi sorulara ayrıldığını bulmamız gerekir.
:::

---

## Aynı olay, dört yönetim sorusu

| Soru | Aranan şey |
|---|---|
| Kurumun güvenlik yönetimi bu hatayı nasıl ele alır? | Risk değerlendirmesi, kontrol kararı, izleme |
| Yanlış alıcı nasıl önlenir ve nasıl fark edilir? | Kontrolün uygulama tasarımı |
| BT değişikliğine kim karar verdi, kim izliyor? | Yetki, hedef, hesap verme |
| Hizmetteki değişiklik nasıl yürütülür? | Talep, test, devreye alma, kesinti yönetimi |

::: {.notes}
Bu sorular birbirine bağlıdır ama birbirinin yerine geçmez. Bir test kaydı değişikliğin denendiğini gösterir; riskin kabul edildiğini göstermez. Bir risk kaydı da testin yapıldığını göstermez. Aynı kanıt birden fazla karara destek olabilir, ama soruların işlevi ayrı kalır. Dört soruyu ayırmak, dış referansları doğru yerde kullanmanın başlangıcıdır.
:::

---

## “En yaygın bilgi güvenliği yönetim sistemleri”

> En yaygın bilgi güvenliği yönetim sistemleri: COBIT, ITIL, ISO 27001
>
> — BGT 201 ders sunumu 2, slayt 9

Bu üç ad olayın hangi sorularına katkı veriyor?

::: {.notes}
Cümle, bilgi güvenliği ve BT yönetimi konuşulurken sık duyulan üç adı bir araya getiriyor; bu adlarla iş hayatında karşılaşmamız beklenir. Her adın bu olayda hangi soruya katkı verdiğini düşünün. İşlevlerinin örtüşmesi bu belgelerin aynı tür olduğunu göstermez.
:::

---

## Dört soru, dört referans

| Soru | Referans · yayımlayıcı | İşlev |
|---|---|---|
| Güvenlik yönetimi | ISO/IEC 27001 · ISO ve IEC | BGYS gereksinimleri |
| Kontrol uygulaması | ISO/IEC 27002 · ISO ve IEC | Bilgi güvenliği kontrolleri için rehberlik |
| Karar hakkı ve hesap verme | COBIT · ISACA | Bilgi ve teknolojinin yönetişimi ve yönetimi için çerçeve |
| Hizmet değişikliği | ITIL · PeopleCert | Dijital ürün ve hizmet yönetimi için çerçeve |

::: {.notes}
Cevap hayırdır. ISO/IEC 27001 bir BGYS'nin gereksinimlerini koyan standarttır; COBIT ve ITIL ise BGYS değildir ve ISO ailesinin üyesi de değildir. İşlev sütunu, yayımlayıcıların kendi tanımlarından alınmıştır.

ISO/IEC 27001, kurumun güvenlik riskini değerlendirmesini, gerekli kontrolleri belirlemesini, sorumlulukları atamasını ve sonuçları izlemesini bekler. ISO/IEC 27002 kontrolleri nasıl uygulayabileceğimize dair seçenekler sunar. COBIT, BT kararlarının hangi hedefe hizmet ettiğine ve kimin hesap vereceğine bakar. ITIL ise değişikliğin, testin ve kesintinin hizmet içinde nasıl yürütüleceğine odaklanır.
:::

---

## Üçü neden aynı cümlede anılıyor?

*Fundamentals of Information Systems Security* (s. 225–226):

- COBIT ve ITIL, kurumların kendi süreçlerini karşılaştırabileceği “en iyi uygulama” setleri arasında sayılır.
- Denetimde kıyaslama ölçütü (benchmark) olarak kullanılabilirler.

Düzeltilmiş cümle:

> ISO/IEC 27001 BGYS gereksinimlerini koyar; COBIT ve ITIL, kararların yönetişim ve hizmet yönetimi bağlamına yardım eden çerçevelerdir.

::: {.notes}
Kitaba göre COBIT, BT'den en çok faydayı sağlamaya ve uygun BT yönetişimi ile kontrolünü geliştirmeye yardım eder; ITIL ise BT altyapısını, geliştirmeyi ve işletimi yönetmeye yönelik kavram ve uygulamalardan oluşur. Yani üçü de kurumların kendi uygulamalarını karşılaştırırken başvurabildiği dış referanslardır; ortak noktaları budur ve slayttaki cümlenin neden kurulduğunu da bu açıklar.

Aynı bağlamda anılmak türlerini eşitlemez. Cümleyi “bunlar üç BGYS” diye okumak yerine düzeltilmiş biçimiyle okuyoruz. Cümledeki “en yaygın” sıralaması ise bir ölçüme dayanmıyor; bu yüzden üçü arasında bir yaygınlık sıralaması kurmuyoruz.
:::

---

## Mevzuat, standart, çerçeve ve rehber

Bu metne uymak kurum için neden gerekli olur?

| Tür | Kurumu ne zaman bağlar? |
|---|---|
| Mevzuat (kanun, yönetmelik) | Kapsamına giren kurumu doğrudan bağlar |
| Standart | Kurum benimsediğinde, bir sözleşme ya da şartname istediğinde veya bir düzenleme şart koştuğunda |
| Çerçeve, rehber | Öneri ve uygulama yolu sunar; bağlayıcılık metnin kapsam bölümünden ve kurumu bağlayan düzenlemelerden okunur |

“Bu kurum ISO 27001'in önerilerini izleyecektir.” → Standart kurum içinde zorunlu hâle gelir.

::: {.notes}
Standart kendiliğinden bağlamaz. *Fundamentals* rehberi “kurumun önerdiği eylemler” olarak tanımlar ve tablonun altındaki cümleyi örnek verir: Bir yöneticinin bu cümlesi, o standardı kurum içinde zorunlu hâle getirir (s. 196). Bağlayıcılık metnin kendisinden değil, kurumun kararından doğmuştur.

Ulusal bir örnek olarak Siber Güvenlik Başkanlığı'nın yayımladığı *Bilgi ve İletişim Güvenliği Rehberi* (sürüm 1.1, 01.03.2026) gösterilebilir. Rehberin kimleri bağladığı ve hangi yükümlülükleri getirdiği, rehberin kendi kapsam bölümünden ve ilgili mevzuattan okunur. İlke şudur: Bir metnin adında “rehber” geçmesi, kurumumuz için bağlayıcı olup olmadığını söylemez.
:::

---

## Referansların bıraktığı boşluk

| Referans | Tek başına vermediği | Kurumda gereken iz |
|---|---|---|
| ISO/IEC 27001 | Eşlemenin teknik yöntemi | Risk ve kontrol kararı |
| ISO/IEC 27002 | Kurumun hangi seçeneği seçtiği | Uygulama tasarımı |
| COBIT | Ek dosyanın nasıl doğrulanacağı | Onay ve izleme sahibi |
| ITIL | Güvenlik riskinin kabulü | Talep, test ve kesinti kaydı |

::: {.notes}
ISO/IEC 27001 “aday numarasını kullanın” demez; eşleme yöntemini kurum, olay verisine bakarak seçer. ISO/IEC 27002'de bir uygulama seçeneğinin bulunması, o seçeneğin kurumda seçildiğini ya da uygulandığını göstermez. Değişiklik onayı hem COBIT'in karar hakkı sorusu hem de ITIL'in değişiklik akışı açısından ele alınabilir; bu durumda her referansın katkısı ayrı yazılır. Dördünün ortak sınırı şudur: hepsi kurum kararı ve kanıt gerektirir.
:::

---

## Etkinlik 1: Cümleyi soruya bağlamak

**Görev:** Her cümlenin hangi yönetim sorusuna ait olduğunu, o soruya hangi referansın katkı verdiğini ve gerekçesini yazın.

| Kod | Cümle |
|---|---|
| A | Dış desteğin hatalı değişiklik sayısını kim raporlar? |
| B | Aynı soyadlı test adaylarıyla deneme kaydı var mı? |
| C | Risk ve seçilen kontrolün gerekçesi nerede? |
| D | Alıcı doğrulamada hangi yöntemler düşünülebilir? |
| E | Birimimiz Bilgi ve İletişim Güvenliği Rehberi'ne tabi mi? |

**Teslim:** Beş satırlık tablo: kod, soru, referans, tek cümlelik gerekçe.

**Başarı ölçütü:** Referans, adından değil cümlenin istediği karar türünden çıkarılmış olmalı. E için kesin “evet” ya da “hayır” yerine hangi metne bakılacağı yazılmalı.

::: {.notes}
Dört yönetim sorusu ve dört referans tablosu çalışma boyunca açık kalabilir. Bir cümle birden fazla soruya dokunuyorsa önce cümlenin asıl sorduğu kararı seçin, diğer bağlantıyı gerekçede belirtin. Elinizdeki verilerin bir soruya cevap vermediğini fark ederseniz bunu yazmak da bir cevaptır; o durumda cevabın hangi metinde aranacağını söyleyin.
:::

---

## Etkinlik 1: Çözüm

| Kod | Soru | Referans | Gerekçe |
|---|---|---|---|
| A | Karar hakkı ve hesap verme | COBIT | Dış destek performansının kime, ne sıklıkla raporlandığı bir yönetişim kararıdır |
| B | Hizmet değişikliği | ITIL | Değişikliğin devreye alınmadan önce nasıl deneneceğine bakar |
| C | Güvenlik yönetimi | ISO/IEC 27001 | Kontrol seçiminin BGYS içindeki gerekçe izini arar |
| D | Kontrol uygulaması | ISO/IEC 27002 | Henüz seçim yapmaz, uygulama seçeneklerini araştırır |
| E | Bağlayıcılık | Rehber ve mevzuat | Cevap rehberin kapsam bölümünden ve kurumu bağlayan düzenlemelerden okunur |

::: {.notes}
B satırında test kaydının sonradan BGYS kanıtı olarak da kullanılabileceğini fark ettiyseniz bu doğru bir gözlemdir. Ama cümle önce devreye alma öncesi denemeyi sorguluyor; birincil eşleme bu yüzden ITIL'dir. Bir kaydın birden fazla kararı desteklemesi, soruları eş anlamlı yapmaz.

E satırının cevabı elimizdeki verilerde yok. Burada doğru cevap, cevabın hangi metinde aranacağını söyleyen cevaptır.
:::

---

## ISO/IEC 27001'i ders sunumu üzerinden okumak

| | |
|---|---|
| Ders sunumu 2, slayt 10–15 | Başlıklarda “ISO/IEC 27001:2013” |
| Standardın güncel yayımı | 2022 sürümü; ISO sayfası bu sürüme yayımlanmış bir değişiklik (amendment) de gösteriyor |
| Karşılaştırma metni | ISO/IEC 27001:2013'ün son taslak metni (FDIS) |

Her slaytta iki soru: Slayt ne söylüyor? Bu ifade bugün hangi sınırla okunmalı?

::: {.notes}
2013 bilgisi tarihli bir anlatımdır; ama içindeki kavramların çoğu bugün de geçerlidir. Güncel tam metni bu konuda incelemedik.

Karşılaştırma metni yayımlanmış 2013 metni değil, ondan önceki son taslaktır; madde başlıklarının yayımlanmış metinle aynı olması beklenir, ama 2022 sürümünün yerine geçmez. Bu metinden yapılan aktarımları “2013 son taslak metni, madde n” diye etiketliyoruz ve kısa Türkçe aktarım olarak veriyoruz. Madde başlıklarının Türkçe karşılıkları bu metinde kullanılan çalışma çevirileridir; TSE'nin resmî Türkçe metnindeki adlar farklı olabilir.
:::

---

## Bir iddiayı nasıl doğrularız?

```text
iddia → kaynak konumu → dönem → yetkili kaynak
      → doğrulama sorusu → sonuç sınıfı → gerekçe
```

| Sonuç sınıfı | Ayırıcı soru |
|---|---|
| Kavram olarak geçerli | İddia bugünkü yetkili metinle uyumlu mu? |
| Tarihli | Belirli bir sürüme ya da döneme mi bağlı? |
| Tür kayması | Farklı türden şeyler aynı sayılmış mı? |
| Nedensel abartı | Bir etikete, onun doğuramayacağı bir sonuç mu yüklenmiş? |
| Yetkili metinden okunmalı | Güncel ayrıntı elimizdeki kaynaklarda yok mu? |
| Bu kaynaklarla doğrulanamaz | Standart dışında başka bir metin mi gerekiyor? |

::: {.notes}
Aynı kayıt bir ders sunumundaki, bir web sayfasındaki ya da bir toplantıdaki iddia için kullanılabilir. Doğrulama her zaman bir hata bulmaz; iddianın kavram olarak bugün de geçerli olduğunu da gösterebilir.

Son iki sınıf kolayca karışır. “Yetkili metinden okunmalı” dediğimizde hangi metne bakılacağı bellidir; örneğin standardın güncel tam metni. “Bu kaynaklarla doğrulanamaz” dediğimizde ise cevap standartta değil, başka türden bir metindedir; örneğin bir sektörde belgenin zorunlu olup olmadığı mevzuattan ya da şartnameden öğrenilir. “Doğrulanamaz” cevabı, hangi metnin neden gerektiğini söylediğinde tam bir cevaptır. Slayt 9'daki COBIT–ITIL–ISO eşitlemesi bu kayıtla “tür kayması” sınıfına girer.
:::

---

## ISO/IEC 27001'in özellikleri

Ders sunumu 2, slayt 10

| Slayttaki ifade | Bugünkü okuma |
|---|---|
| Uluslararası geçerliliği olan bir standarttır | Kavram olarak geçerli |
| Sertifikasyon sürecidir | Tür kayması; düzeltilerek okunur |
| Dokümantasyon sistemidir | Tür kayması; düzeltilerek okunur |
| Sadece bilişim güvenliği ile ilgilenmez | Kavram olarak geçerli |
| Bilgi varlıklarının güvenliğini ve yönetimini sağlar | Kavram olarak geçerli; “sağlar” fiili kurumun işini standarda yükler |
| Esnek ve bağımsızdır | Kavram olarak geçerli |
| Risk tabanlı bir sistemdir | Kavram olarak geçerli |
| Süreklilik gerektirir | Kavram olarak geçerli |

::: {.notes}
Uluslararası geçerlilikten başlayalım. 2013 son taslak metninin önsözü, standardın ISO ve IEC'nin ortak teknik komitesinde hazırlandığını ve ulusal kuruluşların oylamasıyla yayımlandığını anlatır. Türkiye'de karşılaşacağımız “TS ISO/IEC 27001” adı, Türk Standardları Enstitüsü'nün (TSE) bu standardı kabul edip yayımladığı ulusal sürümü belirtir. Denetişim makalesi, anlattığı sürüm için ulusal kabulün içeriğinin uluslararası standartla aynı olduğunu yazar (dipnot 21). Aynı sürüm söz konusu olduğunda iki ayrı standart değil, aynı standardın iki gösterimi vardır. Tarihli bir TS metninin güncel ISO sürümüyle aynı olup olmadığı ise iki metnin sürüm bilgisinden ayrıca kontrol edilir.

:::

---

## Standart, sertifikasyon ve belge ayrı şeylerdir

| Slayttaki ifade | Aynı sayılan | Ayrım |
|---|---|---|
| Sertifikasyon sürecidir | Standart = sertifikasyon | Standart gereksinim metnidir; sertifikasyon bu gereksinimlere uygunluğun bağımsız bir kuruluşça değerlendirilmesidir (2013 son taslak, 0.1) |
| Dokümantasyon sistemidir | BGYS = belgeler | Belgelenmiş bilgi bir gereksinim alanıdır (7.5); miktarı kurumun büyüklüğüne, süreçlerine ve çalışanların yetkinliğine göre değişir (7.5.1 notu) |

::: {.notes}
2013 son taslak metni, standardın kurum içindeki ve dışındaki taraflarca, kurumun kendi güvenlik gereksinimlerini karşılama yeteneğini değerlendirmek için kullanılabileceğini söyler. Sertifikasyon bu kullanımlardan biridir. Standart ile sertifikasyon arasındaki ilişki, bir sınav yönetmeliği ile o yönetmeliğe göre yapılan sınav arasındaki ilişkiye benzer: yönetmelik sınavın kendisi değildir.

Dokümantasyonda da benzer bir ayrım var. BGYS belgelerden oluşmaz; belgeler kararın ve uygulamanın izidir. Geçen hafta “yaptığını yaz, yazdığını yap” ilkesini kural, uygulama ve kayıt olarak üç halkaya ayırmıştık; belgeler bu zincirin yalnız bir halkasıdır.
:::

---

## Bilgi ortamı, varlık ve yöntem seçimi

| Slayttaki ifade | Mekanizma | Vakadaki karşılık |
|---|---|---|
| Sadece bilişim güvenliği ile ilgilenmez | Bilgi hangi ortamda durursa dursun korunur (0.1) | Yazılım kuralı, e-posta eki, telefon şikâyeti, onay e-postası |
| Varlıkların güvenliğini ve yönetimini sağlar | Neyi koruduğunu bilmeyen riskini değerlendiremez | Varlıkları belirlemek ve korumak kurumun işidir |
| Esnek ve bağımsızdır | Gereksinimler geneldir, her kuruluşa uygulanır (1) | Eşleme kuralını standart değil kurum seçer |

::: {.notes}
Denetişim makalesindeki yanlış algılar tablosu ilk satırı “BGYS bir bilgi teknolojileri projesi değildir” diye vurgular. Aynı tablo bir şey daha söyler: BGYS kurulurken başka bir kurumdan danışmanlık alınabilir, ama sistemi kuracak olan kurumun kendisidir. Vakada değişikliği dış BT yaptı; değişikliğin onaylanıp onaylanmayacağı kararı ise birimde kalır.

“Esnek” sözcüğünü bir övgü olarak değil, bir mekanizma olarak okuyalım. Standart “belge ile aday arasında şu eşleme kuralını kullanın” demez; eşlemenin doğru olması gerektiğini, bunun riskini değerlendirmeyi ve kontrol kararını izlemeyi bekler. Yöntemi kurum seçer. Esnekliğin bedeli de buradadır: seçimin gerekçesini kurumun kendisi yazmak zorundadır.
:::

---

## Risk kararı ve süreklilik

| Slayttaki ifade | Mekanizma | Vakadaki karşılık |
|---|---|---|
| Risk tabanlıdır | Önce risk, sonra işleme seçeneği, sonra kontroller (6.1.2–6.1.3) | Kontrol seçimi olay verisine dayanır |
| Süreklilik gerektirir | Kur, uygula, sürdür, sürekli iyileştir (4.4, 10.2) | Kontrol kaydı gözden geçirmeyle yeniden açılır |

::: {.notes}
Süreklilikte geçen haftayı hatırlayalım: erişim vakasında döngüyü iki kez çevirdik; ikinci tur bir defalık düzeltmenin değil, değişen düzenin işleyişini sınıyordu.

Risk tabanlı olmak, risk değerlendirmesinden işleme seçeneğine ve gereken kontrole uzanan sırayı izlemektir (2013 son taslak metni, 6.1.2–6.1.3). Gözden geçirme bulgusu seçimin gerekçesini yeniden değerlendirmeye açar.
:::

---

## 27000 ailesi

Ders sunumu 2, slayt 11

| Numara | Ders sunumundaki tanım | Bugünkü okuma |
|---|---|---|
| ISO/IEC 27001 | Genel standart | Kavram olarak geçerli: gereksinim standardı |
| ISO/IEC 27002 | Uygulama pratikleri | Kavram olarak geçerli: kontrol rehberi |
| ISO/IEC 27010 | Sektörler ve kurumlar arası bilgi yönetimi kılavuzu | Yetkili metinden okunmalı |
| ISO/IEC 27011 | Telekomünikasyon sektörü için BGYS | Yetkili metinden okunmalı |
| ISO/IEC 27019 | Enerji sektörü için BGYS | Yetkili metinden okunmalı |
| 27799 | Sağlık kurumları için BGYS | Yetkili metinden okunmalı |

::: {.notes}
Ailenin mantığı şöyle kurulur: bir gereksinim standardı (27001), bir kontrol rehberi (27002), terimleri ve genel bakışı veren bir belge ile diğer destek belgeleri ve sektörlere özgü belgeler. 2013 son taslak metni terim ve genel bakışın ISO/IEC 27000'de verildiğini, ailede 27003, 27004 ve 27005 gibi başka belgeler de bulunduğunu belirtir (madde 0.1 ve 2).

İlk iki satırın işlevleri baştan ayrı yazılmıştır. Denetişim makalesine göre BGYS gereksinimleri İngiliz standardı BS 7799-2'den ISO/IEC 27001:2005'e, kontrollerden söz eden BS 7799-1 ise önce ISO/IEC 17799 adıyla, 2007'den itibaren ISO/IEC 27002 adıyla ISO'ya geçmiştir (s. 52). Biri “ne yönetilecek”, öbürü “kontrol nasıl uygulanabilir” sorusuna bakar.

Sektör satırlarında “… sektörü için BGYS” ifadesi, bu belgelerin ayrı birer BGYS gereksinim standardı mı, yoksa kontrol rehberliğini sektöre uyarlayan belgeler mi olduğunu söylemiyor; elimizdeki kaynaklar da bunu göstermiyor. Bir sektör belgesinin işlevi ve güncel sürümü ISO kataloğundaki kendi kaydından okunur. Sertifikasyonun hangi standarda göre yapıldığı da ayrı bir sorudur. 27799'un yayımlayıcı ön ekini doğrulamadığımız için yalnız numarasıyla anıyoruz.
:::

---

## ISO 27001 sertifikası nasıl ve kimden alınır?

Ders sunumu 2, slayt 12

| Slayttaki ifade | Bugünkü okuma | Sınıf |
|---|---|---|
| Gerekli standartları sağlayan kurumlar denetimlerin ardından belgeyi kazanır | Belgelendirmeyi kurumdan bağımsız bir belgelendirme kuruluşu yapar | Kavram olarak geçerli |
| Yetkilendirilmiş (akredite) kurumlar tarafından verilir | Akreditasyon belgeyi alan kurumla değil, belgeyi veren kuruluşla ilgilidir; genel olarak zorunlu değildir | Tür kayması |

```text
akreditasyon kuruluşu ─ yetkinliği tanır → belgelendirme kuruluşu
belgelendirme kuruluşu ─ denetler, belge verir → kurum
```

::: {.notes}
Slayttaki ikinci ifadede iki ayrı işlem tek bir yetki gibi birleşmiştir. Akreditasyon, bir akreditasyon kuruluşunun, belgelendirme kuruluşunun bu işi yapmaya yetkin olduğunu bağımsız biçimde tanımasıdır. ISO'nun belgelendirme açıklamasına göre belgelendirme kuruluşunun akredite olması genel olarak zorunlu değildir; bu, kuruluşun yetkinliğine dair ek bir güvencedir. Bir ihale, sözleşme ya da düzenleme “akredite kuruluştan alınmış belge” şart koşuyorsa bu koşul standarttan değil, o metinden doğar ve orada doğrulanır.

Hangi akreditasyon kuruluşunun yetki verdiği, denetimin aşamaları ve belgenin geçerlilik süresi elimizdeki kaynaklarda yoktur; bunlar belgelendirme kuruluşunun yayımladığı süreçten okunur.
:::

---

## Sertifika neyi gösterir, neyi sağlamaz?

| Slayttaki ifade | Bugünkü okuma |
|---|---|
| Kurum imajını güçlendirir; tedarikçi, müşteri ve çalışanlar için güvencedir | Dış taraflara bilgi verir: BGYS bağımsız bir kuruluşça değerlendirilmiştir. Güvence, değerlendirilen kapsam için geçerlidir |
| İnsan hatalarını azaltmayı sağlar; siber saldırılara önlem alınmasını sağlar | Nedensel abartı: hatayı işleyen bir kontrol azaltır; sertifika bir değerlendirmenin sonucudur |
| Çoğu firma için zorunlu değildir ama önerilir | “Çoğu” bir sayıma dayanmıyor. Standart kendi başına belge mecburiyeti getirmez |

Birimin sertifikası olsaydı, aynı gün başvuran iki Yılmaz soyadı + tarih kuralıyla ayrılabilir miydi?

::: {.notes}
2013 son taslak metni BGYS'nin ilgili taraflara risklerin yeterince yönetildiği konusunda güven verdiğini söyler (madde 0.1). Geçen hafta ders sunumunun başka bir sorusuna değinmiştik: Kurum sistemi gerçek bir ihtiyaç için mi, imaj için mi, yasal avantaj için mi kurmak istiyor (slayt 18)? İmaj için kurulan bir sistemde kapsam, şikâyet gelen süreci dışarıda bırakacak biçimde seçilebilir; belge alınır, ama sorun sürer.

Alttaki sorunun cevabı hayırdır. Soyadı ve başvuru tarihiyle eşleme yapan kural, sertifika olsa da aynı iki adayı karıştırırdı. Hatayı azaltacak olan eşleme kuralının değişmesi, değişikliğin test edilmesi ve gönderimlerin izlenmesidir.

Son satırın taşıdığı geçerli düşünce şudur: Bir kurum standardı uygulamayı seçebilir ve ayrıca sertifika almayı seçmeyebilir; bunlar iki ayrı karardır. Bir kurum için belge zorunlu hâle geliyorsa bunun kaynağı standart dışında bir karardır. Slayttaki son ifade, “ana ve ek maddelerden oluşur”, standardın gereksinimleri ile kontrol başvuru listesini ayırmayı gerektirir.
:::

---

## Ana maddeler ve Ek A

| | Madde 4–10 | Ek A |
|---|---|---|
| Ne içerir? | Gereksinimler | Kontrol hedefleri ve kontrollerden oluşan başvuru listesi |
| Dışarıda bırakılabilir mi? | Uygunluk iddiasında hayır (madde 1) | Gerekçesiyle evet (6.1.3 d) |

```text
risk işleme kararı
  → gerekli kontroller (kurum tasarlar ya da herhangi bir kaynaktan alır)
  → Ek A ile karşılaştırma: gerekli bir kontrol atlandı mı?
  → uygulanabilirlik bildirgesi: gerekli kontroller, gerekçe,
    uygulanıp uygulanmadığı, dışarıda bırakılanların gerekçesi
```

::: {.notes}
Akıştaki her adımın dayanağı 2013 son taslak metnindedir. Kurum risk işleme kararını uygulamak için gereken kontrolleri belirler; kontrolleri kendisi tasarlayabilir ya da herhangi bir kaynaktan alabilir (6.1.3 b ve notu). Sonra belirlediği kontrolleri Ek A ile karşılaştırır. Ek A kapsamlı bir listedir ama tam değildir; Ek A dışında kontrol de gerekebilir (6.1.3 c, not 2). Son olarak sonucu bir uygulanabilirlik bildirgesine yazar (6.1.3 d). Ek A, kurumun risk işleme kararına dayanan kontrol seçiminin yerine geçmez; seçilen kontrollerle karşılaştırılarak gerekli bir kontrolün atlanıp atlanmadığı denetlenir.

Ek A'nın 2013 yapısı A.5'ten A.18'e kadar alanlardan oluşur ve bu alanlar ISO/IEC 27002:2013'ün 5–18. maddelerinden türetilmiştir (Ek A girişi). Bu numaralar 2013 sürümüne bağlıdır. Güncel sürümün Ek A'sını elimizdeki kaynaklarla karşılaştırmadığımız için 2013 numaralarını güncel bir kayda doğrudan taşıyamayız; güncel kontrol adları, numaraları ve sayısı güncel sürümün tam metninden okunur.
:::

---

## ISO 27001 zorunluluğu nereden doğar?

Ders sunumu 2, slayt 13: kamu ihalelerine giren bilişim firmaları · telekomünikasyon firmaları · e-fatura özel entegratör yetkisi almak isteyen firmalar · gümrük işleri kolaylaştırma yetkisi almak isteyen firmalar

Sonuç sınıfı: bu kaynaklarla doğrulanamaz

| Zorunluluğun kaynağı | Nerede doğrulanır? |
|---|---|
| Mevzuat ya da bir kurumun yetki düzenlemesi | O düzenlemenin güncel metninde |
| İhale şartnamesi ya da sözleşme | Şartnamede, sözleşmede |
| Kurumun kendi politikası | Kurum kararında: standardı benimsemek ile sertifika almayı şart koşmak ayrı kararlardır |

::: {.notes}
Liste, ISO/IEC 27001:2013'ü anlatan slayt dizisinde yer alır; slaydın hazırlandığı kesin tarih belli değildir. Bugün geçerli olup olmadığını elimizdeki kaynaklarla doğrulayamayız; çünkü cevap standartta değil, ilgili düzenlemelerdedir. Listenin bize öğrettiği şey zorunluluğun nereden doğduğudur.

İkinci satır için 2013 son taslak metni de ilgili tarafların gereksinimlerinin yasal ve düzenleyici gereksinimleri ve sözleşme yükümlülüklerini içerebileceğini belirtir (4.2 notu). Üçüncü satırda iki kararı ayırıyoruz: *Fundamentals*'taki “Bu kurum ISO 27001'in önerilerini izleyecektir” örneği standardın gereksinimlerini kurum içinde bağlayıcı yapar, ama belge almayı şart koşmaz. Kurum ayrıca “sertifika alınacaktır” diye karar verirse belge de kurum içi bir zorunluluk olur. Üç yolun hiçbiri standardın kendisinden çıkmaz. Denetişim makalesi yazıldığı dönemde Türkiye'de bilgi güvenliği yönetişimi için genel bir yasal düzenleme bulunmadığını yazar (s. 55); bu 2014–15 dönemine ait bir gözlemdir, bugünkü durumu göstermez.

Kendi birimimize dönelim: “Birimimiz için ISO 27001 belgesi zorunlu mu?” Bu soruyu elimizdeki kaynaklarla cevaplayamayız. Cevap birimin bağlı olduğu kurumun düzenlemelerinde, dış BT ile yapılan sözleşmede ve kurumu bağlayan mevzuatta aranır. Doğru cevap bu üç metnin adını vermektir.
:::

---

## ISO 27001'in ana maddeleri

Ders sunumu 2, slayt 14 ile 2013 son taslak metninin içindekiler bölümü

| No | 2013 son taslak metni | Slayttaki karşılık | Karşılaştırma |
|---|---|---|---|
| 1–3 | Kapsam; Atıf yapılan standartlar; Terimler ve tanımlar | Kapsam; Atıf yapılan standart ve/veya dokümanlar; Terimler ve tarifler | Uyumlu |
| 4–7 | Kuruluşun bağlamı; Liderlik; Planlama; Destek | Aynı başlıklar | Uyumlu |
| 8 | İşletim | Yok; yerinde “İletişim” | Eksik ve kaymış |
| 9 | Performans değerlendirme | Değerlendirme | Kısaltılmış |
| 10 | İyileştirme | İyileştirme | Uyumlu |

::: {.notes}
Slayttaki listede 8. madde olan İşletim yok; onun yerinde İletişim duruyor. İletişim ise 2013 metninde ayrı bir ana madde değil, Destek maddesinin bir alt maddesidir (7.4). Bu farkı küçük bir yazım hatası diye geçmemek gerekir: vakamızın merkezindeki boşluk tam da eksik olan maddeye düşüyor.

İlk üç madde standardın nasıl okunacağını düzenler; gereksinimler 4. maddeden başlar.
:::

---

## Madde 4–7: bağlam, karar ve destek

2013 son taslak metni, kısa aktarım

| Madde | Ne ister? |
|---|---|
| 4 Kuruluşun bağlamı | İç ve dış koşullar, ilgili taraflar; kapsamı başka kuruluşların yürüttüğü işlerle arayüzleri ve bağımlılıkları dikkate alarak çizmek |
| 5 Liderlik | Politika ve hedefler, kaynak; rollerin sorumluluk ve yetkilerinin atanıp duyurulması |
| 6 Planlama | Riski değerlendirmek ve işlemek, kontrolleri belirlemek, uygulanabilirlik bildirgesi; hedefler için ne, hangi kaynak, kim, ne zaman, nasıl değerlendirilecek |
| 7 Destek | Kaynak, yetkinlik, farkındalık, iletişim, belgelenmiş bilgi |

Koşul, yetki, plan ve uygulama desteğini ayrı ayrı okuyun.

::: {.notes}
Bir gereksinim, kasım olayındaki karar, kayıt veya eksikle ilişkilendirildiğinde kurum için ne istediği açıklığa kavuşur. Her satırda önce istenen kararı veya işlemi belirleyin; sonra olay verisinde bu kararın izini arayın. Kayıt bulunmuyorsa hangi kaydın beklendiğini yazın.
:::

---

## Madde 8–10: uygulama, izleme ve iyileştirme

2013 son taslak metni, kısa aktarım

| Madde | Ne ister? |
|---|---|
| 8 İşletim | Planlı değişiklikleri kontrol etmek; dışarıdan alınan süreçleri belirleyip kontrol etmek; önemli değişiklikte risk değerlendirmesi |
| 9 Performans değerlendirme | Neyin, hangi yöntemle, ne zaman, kim tarafından izleneceği; iç tetkik; yönetimin gözden geçirmesi |
| 10 İyileştirme | Uygunsuzluğa tepki, neden, benzeri var mı, düzeltici faaliyetin etkinliği; sürekli iyileştirme |

Uygulandı mı? İşleyiş neyle değerlendirildi? Bulgu hangi değişikliği gerektirdi?

::: {.notes}
Bu başlık iskeleti yalnız bu standarda özgü değildir. 2013 son taslak metni, standardın ISO'nun yönetim sistemi standartları için tanımladığı ortak üst düzey yapıyı (Annex SL) kullandığını söyler; aynı ana başlıklar, ortak terimler ve ortak metin parçaları bu yüzden birden fazla yönetim sistemi standardında bulunur (madde 0.2). İki standardı birlikte uygulayan bir kurum için bu, tek bir yönetim sistemi kurmayı kolaylaştırır. 2022 sürümünün başlıklarının aynı kalıp kalmadığını elimizdeki kaynaklarla doğrulamadık; güncel başlıklar yetkili tam metinden okunur.

İşletim, belirlenen süreçlerin yürütülmesine ve değişikliklerin kontrolüne bakar. Performans değerlendirme bunun nasıl izlendiğini, iyileştirme ise bulgunun nedeni ve faaliyetin etkinliğini sorgular. Aynı olay bu üç soruya farklı kayıtlarla cevap verebilir.
:::

---

## Etkinlik 2: Ana maddeyi vakadaki ize bağlamak

**Görev:** Madde 4–10 tablosunu ve kasım olayının verilerini kullanın. Her madde için vakada bir iz bulun: alınmış bir karar, var olan bir kayıt ya da eksik kalan bir şey. Ardından slayt 14'teki listenin hangi satırının 2013 metninden ayrıldığını yazın.

| Madde (2013 metni) | Vakadaki iz | Mevcut / kısmen / eksik |
|---|---|---|
| 4 Bağlam · 5 Liderlik · 6 Planlama · 7 Destek · 8 İşletim · 9 Performans değerlendirme · 10 İyileştirme | | |

**Teslim:** Yedi satırlık tablo ve tek cümlelik açıklama: slayt 14'te eksik ve kaymış olan başlık.

**Başarı ölçütü:** En az beş satırda iz vakanın gerçek verisine dayanmalı (tarih, sayı, kayıt ya da kayıt yokluğu). 8. madde satırı dış BT'nin yaptığı değişikliğe bağlanmalı. Madde numaraları 2013 metnine ait olarak etiketlenmeli. Slayt farkı doğru adlandırılmalı.

::: {.notes}
Veri kaynağınız olayın ilk dört slaytıdır: değişikliğin nasıl istendiği ve açıldığı, ilk beş günün sayıları, hatanın kim tarafından ve ne zaman bulunduğu, özelliğin nasıl kapatıldığı. Geçen haftanın kapsam ve bağımlılık çalışmasını da kullanabilirsiniz. Bir kaydın yokluğu da bir izdir; ama “yok” yazdığınız her satırda hangi kaydın beklendiğini söyleyin.
:::

---

## Etkinlik 2: Çözüm

| Madde (2013) | Vakadaki iz | Durum |
|---|---|---|
| 4 Bağlam | Uygulamayı dış BT işletiyor; hesap işlemleri için bağımlılık kaydı geçen hafta kuruldu, uygulama değişiklikleri için kurulmadı | Kısmen |
| 5 Liderlik | Onaylayan ve durdurabilen kişi yazılı değil; durdurma bir gün gecikti | Eksik |
| 6 Planlama | Otomatik gönderim için risk değerlendirmesi ya da kontrol kararı yok | Eksik |
| 7 Destek | İstek e-postayla; onay ya da test için belgelenmiş bilgi yok | Eksik |
| 8 İşletim | Planlı değişiklik onaysız ve testsiz açıldı; dış BT'nin işlettiği süreç kontrol edilmedi | Eksik |
| 9 Performans değerlendirme | Gönderimler izlenmiyordu; hatayı 4. gün telefon eden aday buldu | Eksik |
| 10 İyileştirme | Özellik durduruldu, gönderim elle sürdü; kural değişikliği ve benzer kullanım taraması yapılmadı | Kısmen |

Slayt 14'te 8. madde İşletim yok; yerindeki İletişim, Destek'in alt maddesidir (7.4). 9. maddenin adı kısaltılmıştır.

::: {.notes}
Tabloda vakaya en doğrudan bağlanan satır 8. maddedir. 2013 metni kurumun planlı değişiklikleri kontrol etmesini ve dışarıdan aldığı süreçleri belirleyip kontrol etmesini ister (8.1); önemli bir değişiklik önerildiğinde risk değerlendirmesi yapılmasını da bekler (8.2). Vakadaki boşluk tam olarak budur. Slayt listesinde bu madde görünmediği için, yalnız slayta bakan biri vakanın merkezindeki boşluğu standart yapısında bulamaz. Bu maddenin 2022 sürümündeki karşılığını doğrulamadığımız için eşlemeyi “2013 metninde” diye kuruyoruz.

10. madde satırında üç şeyi ayıralım. Özelliği durdurmak uygunsuzluğa verilen tepkidir (10.1 a). Soyadı ve tarihle eşleme kuralını değiştirmek nedene yönelik faaliyettir. Aynı eşleme kuralının birimin başka bir otomatik işinde, örneğin bir hatırlatma e-postasında kullanılıp kullanılmadığına bakmak ise “benzer bir uygunsuzluk var mı ya da oluşabilir mi” sorusudur (10.1 b-3). Geçen hafta aç–uygula–kapa yapısında kök soruna inmeyi gördük (slayt 79); 10.1 bu düşünceyi bir adım genişletip aynı nedenin başka yerde de hata üretip üretmediğini sorar.
:::

---

## Belge alma süreci

Ders sunumu 2, slayt 15: başvuru yapılır → komite belirlenir → gerekli analizler ve dokümantasyon yapılır → denetimden geçilir → sertifika alınır. Net bir süresi yoktur.

| Hat | İşler | Kim yürütür? |
|---|---|---|
| Hazırlık | Komite, analizler, dokümantasyon | Kurumun kendisi |
| Belgelendirme | Başvuru, denetim, sertifika | Kurum ve belgelendirme kuruluşu |

“Net bir süresi yoktur”: kavram olarak geçerli. Süre kurumun büyüklüğüne, kapsamına ve hazırlık durumuna bağlıdır.

::: {.notes}
Komite burada slaytın verdiği bir organizasyon örneğidir. Standart sabit bir komite kurulmasını değil, güvenlikle ilgili rollerin sorumluluk ve yetkilerinin atanıp duyurulmasını ister (2013 son taslak metni, madde 5.3). Bu işi bir komite, tek bir sorumlu ya da mevcut bir kurul üstlenebilir; önemli olan kimin neye karar verdiğinin yazılı olmasıdır.

Slayt iki hattı tek bir çizgide gösterdiği için başvurunun hazırlıktan önce mi sonra mı yapılacağı kuruma ve belgelendirme kuruluşuna bağlıdır. Denetimin aşamaları, belge alındıktan sonraki gözetim denetimleri ve belgenin geçerlilik süresi elimizdeki kaynaklarda yoktur; bunlar belgelendirme kuruluşunun yayımladığı süreçten okunur. Sonuç sınıfı “yetkili metinden okunmalı”dır.

Geçen hafta iç tetkikte gördüğümüz gibi belge, yetkili kuruluşların dış denetimi sonucunda alınır ve bu denetimin başarılı olması için sistemin belirli aralıklarla içeriden denetlenmesi gerekir (slayt 71). İç tetkik hazırlık hattında yer alır; dış denetimin yerine geçmez.
:::

---

## BGYS adımları bir kurulum düzenidir

Ders sunumu 2, slayt 16

```text
hedefler ve planlama → komite oluşturma → mevcut durum–hedef farkı (gap) analizi
  → varlık yönetimi → risk yönetimi → kontrollerin uygulanması
  → dokümantasyon sistemi
```

Gereksinimlerin sunuluş sırası önem ya da uygulama sırası değildir (2013 son taslak metni, 0.1).

::: {.notes}
Bu liste sistem kurulurken nelerin düzenleneceğini gösterir; bir kez izlenen bir kurulum sırasıdır. 2013 son taslak metni gereksinimlerin sırasının uygulama sırası olmadığını açıkça söylediği için slayttaki adımlar kurumun seçebileceği bir kurulum düzenidir, standardın maddelerinin sırası değildir. Listedeki “komite oluşturma” adımı da belge alma sürecindeki komite gibi rol ve yetki atamasının bir örnek biçimidir.

Kurulmuş sistemde karar her bulguyla yeniden değerlendirilir.
:::

---

## Madde gruplarını PUKÖ ile okumak

Ders sunumu 2, slayt 17

| PUKÖ aşaması | 2013 metnindeki madde grubu |
|---|---|
| Planla | 4 Bağlam, 5 Liderlik, 6 Planlama |
| Uygula | 7 Destek, 8 İşletim |
| Kontrol Et | 9 Performans değerlendirme |
| Önlem Al | 10 İyileştirme |

Bu eşleme bir öğretim yorumudur; standardın bir maddesi değildir.

::: {.notes}
2013 son taslak metninin giriş bölümünde PUKÖ adı geçmez. 2005 sürümü döneminde yazılmış Denetişim makalesi ise PUKÖ'yü standardın temel aldığı model olarak anlatır (s. 52). Bu yüzden “PUKÖ standardın maddesidir” demiyoruz; madde yapısını derste kullandığımız döngüye göre okuyabiliyoruz.

Geçen haftaki ayrımı da hatırlayalım: Bir güvenlik kontrolü Uygula aşamasında çalışan bir önlemdir; Kontrol Et aşaması ise bu önlemin işleyişini önceden konmuş ölçütle karşılaştırır.
:::

---

## Gereksinimden kanıta uzanan zincir

```text
27001 gereksinimi
    → kurumun kontrol seçimi ve gerekçesi
    → 27002 rehberliğiyle uygulama tasarımı
    → sorumlu, tarih ve kanıt
    → gözden geçirme → gerekirse düzeltme
```

Birim bu olay için bir kontrol kararını nasıl yazar? Dış referanslar bu kararın neresinde durur?

::: {.notes}
Zincirdeki her ok bir kurum kararıdır. ISO/IEC 27001, BGYS içinde riskin ele alınmasını ve kontrol kararının izlenmesini bekler; teknik yöntemi seçmez. ISO/IEC 27002 uygulama tasarımına rehberlik eder; kurum adına karar vermez. Zinciri standart madde ya da kontrol numarası kullanmadan kuruyoruz; belirli bir maddeye uyum iddia etmek için güncel tam metin gerekir.
:::

---

## Seçim gerekçesi olay verisinden çıkar

| Gözlem | Korunma ihtiyacı |
|---|---|
| Kimlik ve başvuru bilgisi yanlış kişiye gitti | Gizlilik |
| Belge yanlış adayla eşlendi | Bütünlük |
| Özellik kapatılınca 35 yanıt gecikti | Erişilebilirlik |

Hatayı önleyen + oluşmuş hatayı fark eden + zararı sınırlayan önlemler birlikte

::: {.notes}
Bir kontrolün amacını “güvenliği artırmak” diye yazmak, hangi hatanın önleneceğini belirsiz bırakır. Gizlilik yanlış alıcıyı, bütünlük yanlış eşlemeyi, erişilebilirlik hizmet gecikmesini açıklar. Bu üç etki aynı olayda görüldüğü için tek bir önlem yetmez.

Bir sınırlama da var: önlem, gizliliği korurken erişilebilirliği gereksiz biçimde düşürmemelidir. Otomatik gönderimi tamamen kapatmak, hatalı eşleme kuralından doğan yeni yanlış gönderimleri durdurur; ama yanlış alıcı riskini ortadan kaldırmaz, çünkü elle gönderimde de yanlış ek seçilebilir. Üstelik her gün elle gönderim ve gecikme demektir.
:::

---

## Kontrol kaydının omurgası

```text
amaç → uygulama → sorumlu → tarih → kanıt → gözden geçirme
```

Örnek amaç: Belge yalnız ilgili adaya gider ve aday ile belge doğru eşlenir.

Ders sunumu 2, slayt 69: riskin önceliğine göre kontrol önerileri · gerekli kaynakların belirtilmesi · yetkili kişilerin belirlenmesi · tarihlerin belirlenmesi

::: {.notes}
Amaç hatayı tanımlar; uygulama somut işlemi, sorumlu bu işlemi kimin yürüteceğini gösterir. Ders sunumunun kontrollerin uygulanmasında istediği kaynak, yetkili kişi ve tarih alanları omurgadaki sorumlu ve tarih halkalarına karşılık gelir. 2013 metninin planlama maddesindeki sorular da aynı yöne bakar: ne yapılacak, hangi kaynak gerekiyor, kim sorumlu, ne zaman tamamlanacak, sonuç nasıl değerlendirilecek (6.2 f–j).

Kanıt yalnız kararın yazıldığını değil, kontrolün gerçekleştiğini ve işlediğini de gösterebilmelidir. Gözden geçirme ise bir bulgu oluştuğunda kararın yeniden ele alınmasını sağlar. Bu zincir, bir rehberdeki öneriyi doğrudan “uygulanıyor” diye yazmayı önler.
:::

---

## İki eksen: neyle ve ne için?

Ders sunumu 2, slayt 62–65: nitelik (teknik, yönetimsel, operasyonel) ve işlev (önleyici, tespit edici, düzeltici, destekleyici)

| Önlem | Nitelik | İşlev |
|---|---|---|
| Gönderim öncesi aday numarası ve doğum yılı karşılaştırması | Teknik | Önleyici |
| Haftalık gönderim örneklemi | Operasyonel | Tespit edici |
| Özelliği durdurma, silme isteği ve olay kaydı | Yönetimsel ve operasyonel | Düzeltici |
| Onay ve durdurma yetkisinin yazılması | Yönetimsel | Destekleyici |

::: {.notes}
“Teknik” ile “önleyici” aynı sınıflamanın iki seçeneği değildir; bir önlem hem teknik hem önleyici olabilir. İlk önlem hatayı oluşmadan durdurur, ikincisi oluşmuş hatayı bulur, üçüncüsü zararı sınırlar ve nedenin incelenmesini başlatır. Ders sunumu işlev ekseninde dördüncü bir sınıf da sayar: diğer kontrollerin çalışmasını mümkün kılan destekleyici kontroller, örneğin sorumluların belirlenmesi. Değişikliği kimin onaylayacağının ve özelliği kimin durdurabileceğinin yazılması bu sınıftadır; diğer üç önlemin işlemesi için gereken sorumluluk tanımını verir.

Bu iki eksen bir düşünme aracıdır; ders sunumundaki tarihli anlatımdan alınmıştır ve güncel ISO kontrol sınıflamasının yerine geçmez.
:::

---

## Önleyici kural nasıl çalışır?

```text
belgedeki aday no + doğum yılı  ↔  alıcı kaydındaki aday no + doğum yılı
    ikisi de eşleşirse → e-posta gönderilir
    biri eşleşmezse   → gönderim durur → belge başvuru görevlisine düşer
```

| Kural neyi yakalar? | Neyi yakalamaz? |
|---|---|
| Belge ile alıcı kaydı farklı adaylara ait | Alıcı kaydındaki e-posta adresi baştan yanlış girilmiş |

::: {.notes}
Aday numarası her adaya tek olarak verilir; iki Yılmaz'ın soyadı ve başvuru tarihi aynı olabilir, aday numaraları aynı olamaz. Karşılaştırmayı uygulama yapar; kuralı dış BT kurar ve test eder. Doğum yılı, aday numarasının belgeye yanlış işlenmesine karşı ikinci bir karşılaştırma alanıdır.

Tablonun sağ sütunu kuralın sınırını gösterir: e-posta adresi yanlış girilmişse belge ile kayıt aynı adaya aittir, karşılaştırma eşleşir ve gönderim yapılır. O hatayı başka bir önlem yakalamalıdır.

Ekin üzerine aday numarasının yazılması kendi başına bir şeyi engellemez; örneklemi inceleyen kişinin belgeyi alıcı kaydıyla karşılaştırmasını kolaylaştırır, yani tespit edici önlemin işini görür. Doğum yılının eşlemede kullanılması kişisel veri işlemek demektir; bu kullanımın hukuki dayanağı kontrol kararından ayrı olarak ilgili mevzuattan değerlendirilir.
:::

---

## Kontrol örnekleri: vakadaki karşılıklar

Ders sunumu 2, slayt 66–67

| Örnek | Vakadaki karşılığı |
|---|---|
| BGYS sorumlularını belirleme | Onay ve durdurma yetkisi kararı |
| Güvenlik önlemlerinin test edilmesi | Yeni eşleme kuralının testi |
| Acil durum ekiplerinin oluşturulması | Daha dar karşılık: sorun çıkınca kimin harekete geçeceği |
| Veriye erişimin kontrolü | Belgenin yalnız ilgili adaya gitmesi |

::: {.notes}
BGYS sorumlularını belirlemek, test etmek ve veriye erişimi kontrol etmek kasım olayındaki karar, uygulama ve doğrulama ihtiyaçlarına bağlanır. Acil durum ekibi örneği bu küçük birimde daha dar bir karşılık bulur: sorun çıktığında kimin harekete geçeceği bellidir. Bir örneğin kaynakta bulunması onu her kurumda gerekli yapmaz; karar olay verisi ve riske dayanır.
:::

---

## Kontrol örnekleri: diğer korunma ihtiyaçları

Ders sunumu 2, slayt 66–67

| Örnek | Vakadaki karşılığı |
|---|---|
| Sistem güvenlik planlarının geliştirilmesi | Başka bir iş: sistemin hangi önlemlerle korunacağının yazılı hâli |
| Kimlik kartlarının kullanılması | Başka risk: fiziksel giriş |
| Zararlı kaynaklara erişimi kısıtlama | Başka risk: zararlı yazılım ve siteler |
| Yedeklerin alınması | Erişilebilirlik ve bütünlük; gizliliği geri getirmez |
| Kamera kontrolleri | Başka risk: fiziksel giriş |

::: {.notes}
Sistem güvenlik planı, bir sistemin hangi önlemlerle korunacağının yazılı hâlidir. Kimlik kartları ve kameralar fiziksel girişe, zararlı kaynaklara erişimi kısıtlama zararlı yazılım ve sitelerden gelen riske bakar.

Yedek, bozulan ya da silinen belgeyi geri getirir; bu yüzden erişilebilirliği ve bütünlüğü korur. Yanlış alıcıya gitmiş bir belgenin gizliliğini geri getirmez; o zarar silme isteği ve olay kaydıyla sınırlanmaya çalışılır.
:::

---

## “Var” kanıtı ile “işliyor” kanıtı

| Kanıtın sorusu | Örnek |
|---|---|
| Kontrol kuruldu mu? | Onaylı değişiklik talebi; 10 test adayıyla yapılmış deneme |
| Kontrol sürekli çalıştı mı? | 4 haftalık gönderim örneklemi; bulgular ve kapanış notu |

Gönderim günlüğü ≠ incelenmiş gönderim günlüğü

::: {.notes}
Yeni eşleme kuralının 10 test adayında hata üretmemesi kurulumla ilgili bir kanıttır. Dört hafta boyunca gönderimlerin izlenmesi ise işleyişe ilişkin kanıttır.

Alt satırdaki ayrım şudur: Sistemin kayıt tutması, birinin bu kaydı incelediğini göstermez. İnceleme kanıtı, inceleyen kişiyi, tarihi, incelenen satırları ve bulgu sonucunu içerir. Geçen haftaki gönderim vakasında da paraf atılmış bir satırın, karşılaştırmanın gerçekten yapıldığını göstermediğini görmüştük.
:::

---

## Haftalık 20 örnek ne kadar yakalar?

Varsayım: %2,5 hata oranı sürüyor; örnekler bağımsız ve aynı olasılıkla seçiliyor.

```text
bir gönderimin doğru olma olasılığı = 1 − 0,025 = 0,975
20 örnekte hiç hata görmeme    = 0,975²⁰ ≈ 0,60
20 örnekte en az bir hata görme = 1 − 0,60 ≈ %40
80 örnekte hiç hata görmeme    = 0,975⁸⁰ ≈ 0,13
80 örnekte en az bir hata görme ≈ %87
```

::: {.notes}
Yirmi gönderimin hepsinin doğru olma olasılığı tek gönderiminkinin yirminci kuvvetidir. Hata oranı %2,5 olarak sürse bile, haftada 20 gönderime bakan bir inceleme o hafta hiçbir hata görmeyebilir; bunun olasılığı yaklaşık %60'tır. Dört haftada 80 örneğe çıkıldığında en az bir hata görme olasılığı yaklaşık %87'ye yükselir.

Hesabın iki sonucu var. Birincisi, bir haftalık temiz örneklem “sorun yok” anlamına gelmez. İkincisi, örneklemi rastgele seçmek tek seçenek değildir: altı hatanın hepsi aynı gün başvuran aynı soyadlı adaylarda olduğuna göre, örneklemi önce bu riskli çiftlerden seçmek aynı sayıda örnekle daha fazla şey gösterir. %40 ve %87 rastgele ve bağımsız seçilen örneklem modeline aittir; riskli çiftlere öncelik veren örneklemin yakalama oranı bu sayılarla ifade edilmez, bu sayılar yalnız karşılaştırma için bir taban verir. Hesap bir performans garantisi değildir ve tespit önleyici kuralın yerine geçmez; kural değişmeden örneklem yalnız hatayı daha erken görmemizi sağlar.
:::

---

## Çözümlü kayıt: yanlış alıcıya gönderim

Kayıt tarihi: 13 Kasım cuma

| Alan | Karar |
|---|---|
| Gerekçe | 6/240 hatalı gönderim (%2,5); altısı da aynı gün ve aynı soyadlı adaylarda |
| Amaç | Belge yalnız ilgili adaya gider; aday–belge eşlemesi doğrudur |
| Önleme | Gönderim öncesi aday numarası ve doğum yılı karşılaştırması; eşleşmezse gönderim durur. Ekte aday numarası (incelemeye yardım) |
| Tespit | Haftada 20 gönderim; önce aynı gün ve aynı soyadlı çiftler |
| Düzeltme | Hatalı gönderimde özellik durdurulur; alıcıdan silme istenir; olay kaydı açılır |
| Sorumlular | Dış BT kuralı uygular ve test eder; birim sorumlusu onaylar ve örneklemi inceler; başvuru görevlisi düzeltmeyi ve olay kaydını yürütür |
| Tarihler | Test 11–13 Kasım; devreye alma 16 Kasım; örneklem 16 Kasım–11 Aralık; gözden geçirme 14 Aralık |

::: {.notes}
Bu kayıtta referansların her biri kendi yerindedir. ISO/IEC 27001 riskin ele alınması ve kontrolün izlenmesi beklentisini temsil eder; ISO/IEC 27002 eşleme ve gönderim kontrolünün uygulama tasarımına rehberlik eder.

Sorumlular satırında bir ayrıntıya dikkat edelim: örneklemi inceleyen birim sorumlusu, gönderimi yapan kişi değildir. Önlemlerin işlevi farklı olduğu için yalnız birini yazmak olayın bütününü karşılamaz. Kaydın kanıt ve durum bölümünü yazarken ise kaydın tarihini unutmamalıyız.
:::

---

## 13 Kasım'da hangi kanıt var?

| Alan | 13 Kasım'da mevcut | Planlanan |
|---|---|---|
| Kurulum kanıtı (önleme) | Onaylı değişiklik talebi; 11–13 Kasım test kaydı: 10 test adayı, içinde 2 aynı soyadlı çift, 0 hata | 16 Kasım devreye alma kaydı |
| Kurulum kanıtı (tespit) | 9 Kasım'dan beri elle yapılan gönderimlerden seçilen örneklerin inceleme notu | — |
| İşleyiş kanıtı | Henüz yok; yeni kural devreye alınmadı | 16 Kasım–11 Aralık: 80 gönderimlik örneklem çizelgesi ve bulgular |
| Gözden geçirme | — | 14 Aralık: kural ve örneklem sıklığı bulgularla yeniden değerlendirilir |

::: {.notes}
13 Kasım'da elde olan kanıt ile sonraki haftalarda toplanacak kanıt aynı sütunda durursa, kayıt henüz var olmayan bir sonucu varmış gibi gösterir. İki sütun bu yüzden açıldı.

Kanıtın adını tabloya yazmak, o kanıtın var olduğunu göstermez; mevcut sütununa yalnız kayıt tarihinde elde olan kayıtlar girer. Standart maddesi ya da kontrol numarası, güncel tam metin görülmeden bu satıra yazılmaz.
:::

---

## Kontrolün durumu hangi kanıta dayanır?

Kayıt tarihi: 13 Kasım

| Durum | Bu kayıtta anlamı |
|---|---|
| Testte | Yeni eşleme kuralı denendi; hizmette devrede değil |
| Devrede; etkinlik izlemesi sürüyor | Elle gönderimlerde örneklem fiilen uygulanıyor |
| Etkinliği gösterilmiş | İşleyiş kanıtı gözden geçirilip yeterli bulunduğunda yazılabilir |

16 Kasım'da devreye alma kaydı görülürse yeni kuralın durumu “devrede; etkinlik izlemesi sürüyor” olur.

::: {.notes}
Durum satırında üç durumu ayırıyoruz. “Testte” olan bir kontrol henüz hizmette çalışmıyordur; yeni eşleme kuralı 13 Kasım'da bu durumdadır. “Devrede” olan kontrol fiilen çalışıyordur ama yeterli süre etkili çalıştığı henüz gösterilmemiş olabilir; elle gönderimlerdeki örneklem bu durumdadır ve doğru ifade “devrede; etkinlik izlemesi sürüyor”dur. “Etkinliği gösterilmiş” demek için işleyiş kanıtı gerekir; bu da ancak örneklem dönemi tamamlanıp 14 Aralık'ta bulgular gözden geçirildiğinde yazılabilir. 16 Kasım'dan sonra devreye alma kaydı görüldüğünde yeni kural için de doğru durum “devrede; etkinlik izlemesi sürüyor” olur; kayıt görülmeden bu durum yazılmaz.
:::

---

## Uygulanabilirlik bildirgesi

Ders sunumu 2, slayt 70 ile 2013 son taslak metni (6.1.3 d)

| Ders sunumundaki ifade | Karşılaştırma |
|---|---|
| Ek A maddelerinin uygulanıp uygulanmadığı belirtilir | Örtüşür; metin ayrıca gerekli kontrolleri ve dahil edilme gerekçesini ister |
| Ek maddelere çoğunlukla uyulması beklenir | Metinde yok; uygulanabilirliği risk değerlendirmesi ve bağlam belirler |
| Uyulmayanlar için gerekçe gösterilmeli | İki durumu birleştirir: gerekçeli dışlama ≠ gerekli ama henüz uygulanmamış kontrol |
| Genellikle tablo şeklinde hazırlanır | Biçim önerisi; metin bir biçim şart koşmaz |

::: {.notes}
Bildirgenin İngilizce adı *Statement of Applicability* (SoA). 2013 son taslak metni bildirgede dört şeyin bulunmasını ister: gerekli kontroller, bunların dahil edilme gerekçesi, uygulanıp uygulanmadıkları ve Ek A'dan dışarıda bırakılan kontrollerin gerekçesi.

Üçüncü satırdaki iki durumu açalım. Birincisinde kontrol gerekli değildir ve Ek A'dan gerekçesiyle dışarıda bırakılır. İkincisinde kontrol gereklidir ama henüz uygulanmamıştır; bu bir dışlama değil eksikliktir ve bildirgede “uygulanmadı” durumu ile planlanan eylem yazılır. İlkini gerekçe kapatır, ikincisini yalnız uygulama kapatır.

“Çoğunlukla uyulması beklenir” ifadesi en fazla bir uygulama gözlemini anlatabilir; ama bir kontrolün uygulanabilir olup olmadığının ölçütü olamaz. Bir gözlemi ölçüt yerine koymak, doğrulama kaydımızdaki tür kaymasının bir örneğidir. Gerekli kontrollerin listesi önce risk işleme kararından çıkar; Ek A bu listeyle karşılaştırılır. Ders sunumundaki Ek A tablosunda A.5–A.18 alanları yer alır; bugün yazılacak bir bildirgede karşılaştırma güncel sürümün Ek A'sına göre yapılır.
:::

---

## “Uygulanmaz” da gerekçe ister

| Önlem | Birimdeki karar | Durum ve kanıt yeri |
|---|---|---|
| Birim içinde bir sunucu odasına fiziksel giriş kontrolü | Uygulanmaz; birimde sunucu odası ya da yerel sunucu yok | Gerekçe: yerinde yapılan envanter kontrolü |
| Başvuru verisinin bulunduğu sunucunun fiziksel güvenliği | Uygulanabilir; dış BT tarafından uygulanır | Yükümlülük sözleşmede yazılır; uygulandığı tedarikçi kaydında ve dış BT'den alınan kanıtla izlenir |

::: {.notes}
Gerekçe, kontrolün korumaya çalıştığı bilgiye bakılarak yazılır; kimin sunucusu olduğuna bakılarak değil. Birimin kendi sunucu odası yok; başvuru verisi ise dış BT'nin işlettiği sunucuda duruyor ve kapsam içindeki bir bilgi. Fiziksel koruma ihtiyacı bu yüzden ortadan kalkmaz, iki ayrı satıra bölünür.

İlk satır gerekçeli bir dışlamadır. İkinci satır dışlama değildir; kontrol gereklidir, yalnız uygulayan dış BT'dir. Dışarıdan sağlanan bir hizmet, kapsam içindeki bilginin korunması gereğini kaldırmaz; 2013 son taslak metni de kurumun dışarıdan aldığı süreçleri belirleyip kontrol etmesini ister (8.1). Geçen hafta “kapsam dışında bırakmak ilişkiyi koparmak değildir” demiştik; dış BT'nin uyguladığı satır da aynı mantıkla bir bağımlılık kaydına bağlanır.
:::

---

## Etkinlik 3 · Kayıt A: değişiklik yönü

| Girdi | Değer |
|---|---|
| Talep ve açılış | E-postayla istek → 2 Kasım pazartesi açılış |
| Onay ve test | Yazılı kayıt yok |
| Hatanın bulunması | 4. gün, adayın telefonu |
| Durdurma | Durdurma yetkisi tanımsız; 6 Kasım akşamı kapatıldı |
| Hizmet etkisi | 9 Kasım'dan itibaren elle gönderim; elle işleme geçişte 35 başvuruda gecikme |

Soru: Bir değişikliğin onaysız ve testsiz devreye alınması nasıl engellenir; devreye alındıktan sonra sorun çıkarsa ne olur?

::: {.notes}
Kayıt A, kasım olayının yazılım kuralı tarafını değil karar ve değişiklik tarafını ele alır. Tablodaki her satır bir önceki slaytlarda gördüğümüz olgudur; yeni veri yoktur.
:::

---

## Etkinlik 3 · Kayıt B: personel dosyaları

Birimin ortak dosya alanında merkez İK'ya ait personel dosyaları bulundu. Özlük süreci geçen hafta kapsam dışında bırakılmıştı; ortak dosya alanı ise birimindir ve kapsamdadır.

| Ortak dosya alanı | Girdi |
|---|---:|
| Merkez İK'ya ait personel dosyası | 18 |
| Alana erişebilen çalışan | 4 |
| Dosyaları işi gereği kullanan | 1 |
| Son 3 ayda dosyaları açan başvuru görevlisi | 2; açma amacı belirsiz |

Soru: Dosyalara yalnız işi gereği olanlar erişsin; bunun sağlandığını nasıl gösteririz?

::: {.notes}
Özlük dosyalarının süreç sahibi merkez İK olduğu için bu süreç birimin kapsamı dışında kaldı. Dosyalar ise birimin ortak alanında duruyor. Kayıt yazılırken bu iki bilgi birlikte düşünülmelidir: dosyanın sahibi kim, dosyanın durduğu alanı kim yönetiyor?
:::

---

## Etkinlik 3: görev ve özdenetim

Sınıfın yarısı Kayıt A'yı, yarısı Kayıt B'yi yazar.

**Görev:** Seçtiğiniz veriyle 13 Kasım tarihli tam kontrol kaydı yazın.

| Ölçüt | Kontrol sorusu |
|---|---|
| Dayanak ve uygulama | Gerekçe girdideki sayı ve olgulara dayanıyor mu; önleyici ve tespit edici önlem var mı? |
| Kanıt | “Var” ile “işliyor” farklı kayıtlar mı; mevcut ile planlanan ayrılmış mı? |
| Gerçek durum | Durum tarihli mi; testte, devrede ve etkinliği gösterilmiş ayrımı kanıta dayanıyor mu? |
| Referans sınırı | A'da risk kabulü ITIL'e yüklenmiş mi; kontrol numarası varsa tam metinden doğrulama notu var mı? |

::: {.notes}
Her ölçütü kendi kaydınızdaki bir satırla kontrol edin. Bir tarih yazmak o tarihte uygulamanın gerçekleştiğini göstermez. Durumun hangi kayda dayanarak değişeceğini belirtin; kanıtı olmayan bir gerçekleşme ifadesi yazmayın.
:::

---

## Etkinlik 3: karar ve uygulama kaydı

Kayıt tarihi: 13 Kasım

| Alan | Kaydınız |
|---|---|
| Soru | |
| Referansların ayrı katkısı | |
| Olay verisinden gerekçe | |
| Kontrol amacı | |
| Uygulama ve işlevi: önleyici, tespit edici, düzeltici | |

::: {.notes}
Gerekçe, seçtiğiniz veri tablosundaki olgulara dayanmalıdır. Kontrol amacı hangi hatanın önleneceğini veya hangi bilginin korunacağını söylemelidir. Uygulama alanında somut işlemi ve işlevini birlikte yazın.
:::

---

## Etkinlik 3: sorumlu, kanıt ve durum kaydı

| Alan | Kaydınız |
|---|---|
| Sorumlu | |
| Başlangıç ve gözden geçirme tarihi | |
| “Var” kanıtı: mevcut / planlanan | |
| “İşliyor” kanıtı: mevcut / planlanan | |
| Bildirge satırı: uygulanabilirlik, gerekçe, tarihli gerçek durum, kanıt yeri | |
| Doğrulama durumu: tam metin gerektiren ayrıntı | |

**Teslim:** Karar ve uygulama alanlarıyla birlikte doldurulmuş kayıt tablosu.

::: {.notes}
Kaydınızı 13 Kasım tarihli bir karar olarak yazın. O tarihte elde olan kayıtlarla ileride toplanacak kanıtı ayırın. Çözümlü yanlış alıcı kaydındaki yapı bu ayrımı gösterir; kendi kaydınızı seçtiğiniz verilerle kurun.
:::

---

## Kayıt A çözümü: karar

| Alan | Örnek karar |
|---|---|
| Referansların katkısı | COBIT: onayı kimin vereceği, dış destek performansının kime raporlanacağı · ITIL: talep, test, devreye alma, geri alma akışı · ISO/IEC 27001: değişiklik riskinin BGYS'de değerlendirilmesi ve izlenmesi |
| Gerekçe | Yalnız e-posta; onay ve test kaydı yok; hata 4. gün dışarıdan bildirildi; durdurma yetkisi tanımsız, kapatma bir gün gecikti; 35 başvuru gecikti |
| Amaç | Birim onayı ve test kaydı olmadan hiçbir değişiklik devreye alınmaz; sorun çıkarsa kimin durduracağı bellidir |
| Önleme | Yazılı değişiklik talebi; birim sorumlusunun onayı; aynı soyadlı çiftleri de içeren test |
| Tespit | Devreye almadan sonraki ilk hafta günlük gönderim izlemesi |
| Düzeltme | Birim sorumlusu ya da yerine bakan kişi durdurma yetkisine sahip; geri alma ve adaylara bildirim adımları talepte yazılı |

::: {.notes}
Kaydın sorusu, bir değişikliğin onaysız ve testsiz devreye alınmasının nasıl engelleneceği ve sorun çıkarsa ne yapılacağıdır. Bu kontroller kayıttaki iki olgudan çıkar: e-postayla gelen istek onay ve testin yerine geçmedi; hatanın dışarıdan bulunması da devreye almadan sonra izleme yapılmadığını gösterdi. Durdurma yetkisinin yazılması bir destekleyici kontroldür; olayın gecikmesine yol açan boşluk budur.

Kayıtta bir sınır var: ITIL değişikliğin hizmet içinde nasıl yürütüleceğine katkı verir; değişiklikten kalan güvenlik riskinin kabul edilip edilmeyeceği ise BGYS'de, birim sorumlusunun kararıyla verilir. COBIT ve ITIL'in güncel sürümlerindeki belirli uygulama adları yayımlayıcı metinden doğrulanmadan kayda yazılmaz.
:::

---

## Kayıt A çözümü: sorumlu, kanıt, durum

Kayıt tarihi: 13 Kasım

Birim sorumlusu onaylar ve durdurur; dış BT test eder, devreye alır ve geri alır. Birim yönetimi dış desteği üç ayda bir izler.

| Alan | Mevcut | Planlanan |
|---|---|---|
| “Var” kanıtı | Yok | 16 Kasım: form ve görev tanımının yürürlük kaydı; ilk değişiklikte talep ve test kaydı |
| “İşliyor” kanıtı | Yok | 16 Kasım–14 Aralık izleme notu |
| Bildirge durumu | Uygulanabilir; uygulanmadı | Yürürlük kaydı görülürse devrede; etkinlik izlemesi sürüyor |

Gerekçe: kasım olayı. İlk gözden geçirme: 14 Aralık. Kanıt yeri: talep, test ve izleme kayıtları.

::: {.notes}
Bu çözüm 13 Kasım tarihli örnek karardır. Başlangıç 16 Kasım, ilk gözden geçirme 14 Aralık olarak planlanır. Yazılı onay, test ve durdurma yetkisi kaydı bulunmadığı için mevcut durum “uygulanmadı”dır.

| Alan | 13 Kasım'da mevcut | Planlanan ve doğrulama koşulu |
|---|---|---|
| “Var” kanıtı | Yok. 2 Kasım değişikliğinde yazılı onay ve test kaydı bulunmuyor; durdurma yetkisini tanımlayan bir kayıt da yok | 16 Kasım: onaylı değişiklik talebi formunun ve durdurma yetkisini yazan görev tanımının yürürlüğe girdiğini gösteren kayıt; sonraki ilk değişiklikte onaylı talep ve test kaydı |
| “İşliyor” kanıtı | Yok; kontrol henüz kurulmadı | 16 Kasım–14 Aralık izleme notu: dönem içindeki değişikliklerin kaçının onaylı talep ve test kaydıyla devreye alındığı |
| Uygulanabilirlik satırı | Değişiklik yönetimi: uygulanabilir; gerekçe kasım olayı; durum “uygulanmadı”; planlanan eylem 16 Kasım'da form ve görev tanımının yürürlüğe girmesi | Yürürlük kaydı görülürse durum “devrede; etkinlik izlemesi sürüyor” olarak güncellenir; kayıt görülmeden bu durum yazılmaz. 14 Aralık gözden geçirmesinde izleme notu değerlendirilmeden etkinliği gösterilmiş sayılmaz. Kanıt yeri: talep ve test kayıtları, izleme notu |

Farklı tarih veya sorumlu dağılımı seçilebilir; alanların olay verisiyle ve birbirleriyle tutarlı olması gerekir.
:::

---

## Kayıt B çözümü: karar

| Alan | Örnek karar |
|---|---|
| Referansların katkısı | ISO/IEC 27001: erişim riskinin değerlendirilmesi ve kontrol kararının izlenmesi · ISO/IEC 27002: erişim kısıtlamasının uygulama tasarımı |
| Gerekçe | 18 dosya 4 çalışana açık; işi gereği kullanan 1 kişi; son 3 ayda amacı belirsiz 2 erişim |
| Amaç | Personel dosyalarının gizliliği; dosyalara yalnız işi gereği olanların erişmesi |
| Önleme | İçeriğe erişim yalnız İK'nın iş ihtiyacını doğruladığı kişiye (girdilere göre bir kişi); diğer üç hesabın erişimi kaldırılır |
| Tespit | Aylık erişim incelemesi: erişim kayıtlarındaki hesaplar onaylı yetki listesiyle karşılaştırılır |
| Düzeltme | Listede olmayan ya da amacı belirsiz erişimde olay kaydı ve yetki düzeltmesi |

::: {.notes}
Kaydın sorusu, dosyalara yalnız işi gereği olanların erişmesinin nasıl sağlanacağı ve bunun nasıl gösterileceğidir. Kayıt B geçen haftanın kapsam kararıyla birlikte okunmalıdır. Özlük süreci kapsam dışında kaldı; ama dosyalar birimin ortak alanında durduğu için bu alanın erişim kararı birimin kapsamına girer. Dosyaların sahibi İK olduğu için kimin erişeceğini İK onaylar; birim bu onayı uygulatır ve izler. Bu durum iki taraf arasındaki bağımlılık kaydına da eklenir.

Sık duyulan bir yanıtı sınayalım: “Klasöre parola koyduk.” Parola, kişi bazında kimin eriştiğini göstermez ve işleyişin kanıtı değildir; ortak bir parola, geçen haftaki ortak hesap gibi, erişimi kişiye bağlamayı zorlaştırır. Amacı belirsiz iki erişimin nedeni de kayıtla netleşmeden kesin bir hüküm olarak yazılmaz; bu bir inceleme konusudur.
:::

---

## Kayıt B çözümü: sorumlu, kanıt, durum

Kayıt tarihi: 13 Kasım

İK erişimi onaylar; birim sorumlusu talebi iletir ve erişim kayıtlarını inceler; dış BT ayarı uygular.

| Alan | Mevcut | Planlanan |
|---|---|---|
| “Var” kanıtı | Yok; 4 hesap erişebiliyor | 16 Kasım: İK onaylı liste ve yetki ayarı kaydı |
| “İşliyor” kanıtı | Yok | 30 Kasım: ilk aylık inceleme notu |
| Bildirge durumu | Uygulanabilir; uygulanmadı | Ayar kaydı ve erişim dökümü doğrulanırsa devrede; etkinlik izlemesi sürüyor |

Gerekçe: dosya içeriği ve erişim kayıtları. Kanıt yeri: liste, ayar kaydı, inceleme notu.

::: {.notes}
Sorumluların yönetim görevi ile içerik okuma ihtiyacı ayrıdır: birim sorumlusu ortak alanın yöneticisi olarak erişim kayıtlarını inceler; bu görev ona personel dosyalarının içeriğini okuma ihtiyacı vermez. Yetki değişikliği 16 Kasım, ilk aylık inceleme 30 Kasım olarak planlanır. Yetki listesi görev değişikliğinde ve üç ayda bir gözden geçirilir.

| Alan | 13 Kasım'da mevcut | Planlanan ve doğrulama koşulu |
|---|---|---|
| “Var” kanıtı | Yok. Dosyalar 4 çalışana açık; işi gereği kullanan 1 kişi | 16 Kasım: İK onaylı yetki listesi ve dış BT'nin yetki ayarı kaydı |
| “İşliyor” kanıtı | Yok; kısıtlama henüz uygulanmadı | Aylık inceleme notu (inceleyen, tarih, erişen hesaplar, listeyle karşılaştırma sonucu, bulgu); ilki 30 Kasım'da |
| Uygulanabilirlik satırı | Erişim kısıtlama: uygulanabilir; gerekçe dosya içeriği ve erişim kayıtları; durum “uygulanmadı”; planlanan eylem 16 Kasım yetki değişikliği | Yetki ayarı kaydı ve alanın erişim dökümünde yalnız listedeki hesabın bulunduğu görülürse durum “devrede; etkinlik izlemesi sürüyor” olur; görülmeden yazılmaz. İlk inceleme notu 30 Kasım'da oluşur; işleyiş kanıtı o tarihten önce yoktur. Kanıt yeri: yetki listesi, ayar kaydı ve inceleme notu |

Bu çözüm de 13 Kasım tarihli örnek karardır. Yalnız listedeki hesabın eriştiği görülmeden “devrede” yazılmaz. Güncel kontrol adı ve numarası tam metin olmadan yazılmaz; personel verisinin hukuki boyutu kontrol kararından ayrı olarak ilgili mevzuattan değerlendirilir.
:::

---

## Bir uyum iddiasının izi

```text
referans + sürüm + yayımlayıcı
       → gerekçeli kurum kararı ve sorumlusu
       → kurulum ve işleyiş kanıtı
       → gözden geçirme ve düzeltme
```

“ISO'ya uyalım, bu iş biter.” cümlesi bu izi taşıyor mu?

::: {.notes}
Haftanın başındaki cümleyi şimdi yeniden yazabiliriz. Kasım olayı için bu izi taşıyan bir ifade şöyle olabilir: “Yanlış gönderim riskini BGYS'de kaydettik; alıcı doğrulamayı olay verisine göre seçtik; dış BT eşleme kuralını onaylı bir taleple değiştirdi ve aynı soyadlı çiftlerle test etti; sonucu dört haftalık örneklemle izleyip 14 Aralık'ta yeniden değerlendireceğiz.” Bu cümle referans adının yerine kararı ve kanıtı koyar. Belirli bir standart maddesine uyum iddia etmek için ise güncel tam metin gerekir.
:::

---

## Çıkış kontrolü: iki cümleyi düzeltin

1. “Uygulanabilirlik bildirgesinde her kontrole ‘uygulanıyor’ yazmak güvenlidir.”
2. “ITIL'e göre değişiklik yaptık; güvenlik riski kalmadı.”

**Görev:** Her cümle için hata türünü, gerekçesini ve düzeltilmiş cümleyi yazın.

**Teslim:** İki satır: hata türü · gerekçe · düzeltilmiş cümle.

**Başarı ölçütü:** Düzeltilmiş cümle hangi kurum kararının ya da hangi kanıtın eksik olduğunu söyler; yalnız “yanlış” demekle kalmaz.

::: {.notes}
İki cümle bu haftanın iki ayrımını sınar: bildirgedeki durum ile gerçek durumun ilişkisi ve hizmet değişikliği ile risk kararının ilişkisi. Cevabınızı yazarken Kayıt A çözümüne ve uygulanabilirlik bildirgesi slaytına dönebilirsiniz.
:::

---

## Kendi kendine çalışma: yanlış eşleştirmeler

1. “COBIT bir BGYS standardıdır; ISO yerine onu kullanırız.”
2. “27002 kontrollerini uyguladık, 27001'e uyumluyuz.”
3. “Uygulanabilirlik bildirgesinde her kontrole ‘uygulanıyor’ yazmak güvenlidir.”
4. “Gönderim kaydı var; alıcı kontrolü çalışıyor.”
5. “A.5–A.18 listesine göre güncel kontrol numarası verelim.”
6. “ITIL'e göre değişiklik yaptık; güvenlik riski kalmadı.”
7. “ISO 27001 sertifikası olan kurumda yanlış gönderim olmaz.”

Her biri için hata türünü, gerekçesini ve düzeltilmiş cümleyi yazın.

::: {.notes}
Çıkış kontrolündeki iki cümle bu listenin 3. ve 6. satırlarıdır. Listedeki 5. ve 7. cümleler ders sunumunu okurken karşılaştığımız iddiaların bugünkü biçimleridir: biri Ek A'nın 2013 yapısını, diğeri slayt 12'deki fayda söylemini taşır.
:::

---

## Yanlış eşleştirmeler: çözüm

| No | Hata türü | Düzeltilmiş ifade |
|---|---|---|
| 1 | Tür eşitlemesi | ISO/IEC 27001 BGYS gereksinimlerini koyar; COBIT karar hakkı ve hesap verme bakışı sağlar, 27001'in yerini tutmaz |
| 2 | Rehberliği uygunluk sayma | 27002 ile kontrol tasarlamak uygunluk kanıtı değildir; seçimin gerekçesi, izlemesi ve BGYS kaydı ayrıca gerekir |
| 3 | Durumu gizleme | Bildirgede uygulanabilirlik, gerekçe, tarihli gerçek durum ve kanıt yeri yazılır; gerekli ama uygulanmamış kontrol planlanan eylemiyle “uygulanmadı” diye yazılır |
| 4 | Kanıt türlerini karıştırma | Gönderim kaydı sistemin ne yaptığını gösterir; kontrolün işlediğini göstermek için inceleme sonucu gerekir |
| 5 | Eski yapıyı güncel sayma | A.5–A.18 2013 sürümünün yapısıdır; güncel kontrol adı ve numarası güncel tam metinden okunur |
| 6 | Hizmet yönetimi ile risk kararını eşitleme | ITIL değişikliğin hizmette yürütülmesine katkı verir; kalan risk BGYS'de değerlendirilir ve kabul kararı orada verilir |
| 7 | Sertifikaya sonuç yükleme | Sertifika bir değerlendirmenin sonucudur; yanlış gönderimi işleyen eşleme ve izleme kontrolleri azaltır |

::: {.notes}
Bir cümleyi yanlış bulmak yetmez; hangi kurum kararının ya da hangi kanıtın eksik olduğunu söylemek gerekir. 3. satırda gerekli olmayan bir kontrolün gerekçeyle dışlanabileceğini de unutmayalım; yanıltıcı olan, kanıtı olmayan “uygulanıyor” yazısıdır.
:::

---

## Kaynaklar

- BGT 201 ders sunumu 2, “Bilgi Güvenliği Yönetim Sistemleri”, slayt 9–17, 62–71; 2013 dönemi Ek A tablosu. Slayt 10–15'teki ISO/IEC 27001:2013 bilgileri tarihlidir.
- ISO/IEC FDIS 27001:2013, *Information technology — Security techniques — Information security management systems — Requirements* (2013 sürümünün son taslak metni), madde 0.1–0.2, 1–10 ve Ek A girişi. Yayımlanmış metin ve güncel sürüm değildir.
- [ISO/IEC 27001:2022 — ISO](https://www.iso.org/standard/27001) (erişim tarihi 07.10.2026)
- [ISO/IEC 27002:2022 — ISO](https://www.iso.org/standard/75652.html) (erişim tarihi 07.10.2026)
- [ISO, “Certification”](https://www.iso.org/certification.html) (erişim tarihi 07.10.2026)
- [COBIT — ISACA](https://www.isaca.org/resources/cobit) (erişim tarihi 07.10.2026)
- [ITIL — PeopleCert](https://www.peoplecert.org/browse-certifications/it-service-management/ITIL-1) (erişim tarihi 07.10.2026)
- “TS ISO/IEC 27001 Bilgi Güvenliği Yönetimi Standardı Kapsamında Bilgi Güvenliği Yönetim Sisteminin Kurulması ve Bilgi Güvenliği Risk Analizi”, *Denetişim*, 2014–15, s. 51–56 (ISO/IEC 27001:2005 dönemi).
- *Fundamentals of Information Systems Security*, 3. baskı, s. 196, 225–226.
- Siber Güvenlik Başkanlığı, *Bilgi ve İletişim Güvenliği Rehberi*, sürüm 1.1 (01.03.2026).

::: {.notes}
Standartların güncel tam metni bu konuda kullanılmadığı için belirli bir 2022 maddesine ya da kontrolüne uygunluk iddiası kurulmamıştır. Ulusal rehber adı, yayımlayıcısı ve sürümüyle anılmıştır; içeriği bu konuda kullanılmamıştır. Birim, kişiler, tarihler, sayılar ve olay kayıtları kurgusaldır; gerçek bir kurumu temsil etmez.
:::
