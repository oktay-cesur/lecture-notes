---
title: "Uygulama: Belge Düzeltme, Revizyon ve Dağıtım"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I · Hafta 8 · Uygulama 2"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-11-11
execute:
  echo: false
---

## RotaLojistik: roller, kısa adlar ve yürürlükteki üst kural

| Rol | İşi |
|---|---|
| Sevkiyat Operasyonları | Sürücülerin erişim ihtiyacını belirler |
| Birim yöneticisi | İş gerekçesini onaylar |
| BT Mobil Sistemler | Cihazı doğrular, erişimi tanımlar |
| BGYS belge sorumlusu | Güncel sürümleri yayımlar, belge listesini tutar |

**`mobil-erisim-politikasi` (politika, sürüm 2, yürürlükte):** Sevkiyat sistemine yalnız kurum envanterinde kayıtlı ve yönetilen cihazlardan erişilir.

| Kısa ad | Ne olduğu | Resmî kimlik |
|---|---|---|
| `erisim-proseduru` | Prosedür | PR-04 |
| `surucu-talimati` | Talimat | TL-02 |
| `erisim-formu` | Form | FR-06 |
| `kisisel-telefon-kaydi`, `kayip-bildirim-kaydi` | Gerçekleşmiş kayıtlar | K-01, K-02 |

*Şirket, kişiler, tarihler ve belge içerikleri kurgudur.*

::: {.notes}
Uygulama boyunca alt kademedeki belgeleri yeniden yazarken dayanak alacağımız üst kural `mobil-erisim-politikasi` metnidir ve bu kural sabit kalır. Politikada geçen "kayıtlı ve yönetilen cihaz" ifadesi, kurum envanterine işlenmiş olan, BT Mobil Sistemler biriminin güvenlik ayarlarını belirleyebildiği ve gerektiğinde erişimini kapatabildiği cihaz anlamına gelir. Düzelteceğiniz her metin bu üst kuralla tutarlı olmalıdır.

Tablodaki dört rol, erişim sürecinde görev ayrılığının nasıl kurulduğunu ortaya koyar. İhtiyacı belirleyen Sevkiyat Operasyonları, iş gerekçesini onaylayan birim yöneticisi ve cihazı doğrulayıp erişimi tanımlayan BT Mobil Sistemler birbirinden ayrıdır; yeni yazacağınız metinlerde iş gerekçesi onayı ile teknik doğrulama işlerinin yerlerini birbirine karıştırmayın. BGYS belge sorumlusu ise sürecin sahadaki adımlarını değil, güncel sürümlerin yayımlanmasını ve belge listesinin tutulmasını yürütür.

Kısa adlar önceki uygulamadaki adlarla aynıdır. Resmî kimlik sütunu yalnız belgenin kurum listesindeki kodunu verir; çalışma tablolarınızda belgeleri kısa adlarıyla yazmanız yeterlidir. Bir sonraki slaytta bu üst kuralın altında çalışan mevcut prosedür, talimat ve form metinlerini inceleyerek hangi noktalarda eksik kaldıklarını göreceğiz.
:::

---

## Elimizdeki belgeler

**`erisim-proseduru` (sürüm 1):** Sürücünün mobil erişim talebi, birim yöneticisi onayından sonra BT tarafından uygulanır.

**`surucu-talimati` (sürüm 3):** Çalışan, sevkiyat uygulamasına kurum cihazından veya kendi kişisel telefonundan doğrudan giriş yapabilir; bağlantı hatasında uygulamayı yeniden başlatır.

**`erisim-formu` (sürüm 1):** Alanlar: kullanıcı adı, talep tarihi, talep eden imzası.

::: {.notes}
Yürürlükteki `mobil-erisim-politikasi` ile elimizdeki üç alt belgeyi yan yana okuduğumuzda, üst kuraldaki temel koşulun alt belgelere taşınmadığını görüyoruz. `erisim-proseduru` (sürüm 1) yalnızca talep ve birim yöneticisi onayından söz ediyor; BT Mobil Sistemler'in erişimi tanımlamadan önce cihazın envanterde kayıtlı ve yönetilen olduğunu doğrulamasını gerektiren hiçbir adım içermiyor.

`surucu-talimati` (sürüm 3) ise çalışana kurum cihazından veya kendi kişisel telefonundan doğrudan giriş izni veriyor. Buradaki çelişkinin kaynağı cihazın kişisel mülkiyette olması değil, politikanın koyduğu "kayıtlı ve yönetilen cihaz" koşulunun hiç aranmamasıdır. `erisim-formu` (sürüm 1) ise yalnızca üç alan taşıyor ve prosedürün gerektirdiği onay ile doğrulama bilgilerinin çoğunu toplayamıyor.

Sık yapılan hata, incelemede yalnız talimattaki "kişisel telefon" ifadesine odaklanıp prosedür ve formdaki boşlukları gözden kaçırmaktır. Oysa prosedür doğrulama adımı tanımlamadığında ve form bu adımın çıktısını kayda geçirmediğinde, tek başına talimatı değiştirmek süreci güvenceye almaz. Bu belge boşluklarının sahadaki olay kayıtlarına nasıl yansıdığını bir sonraki slaytta inceleyeceğiz.
:::

---

## Gerçekleşmiş kayıtlar ve inceleme sonucu

**`kisisel-telefon-kaydi`:** 11 Kasım'da sürücü Ece için kişisel telefondan erişim tanımlandı. Kayıtta cihazın envanterle eşlendiğine ve yöneticinin iş onayına dair bilgi yok.

**`kayip-bildirim-kaydi`:** 12 Kasım'da sürücü Cem 09.10'da cihaz kaybını bildirdi; BT erişimi 09.48'de kaldırdı. Bildirimin kime yapıldığı ve BT'ye ulaştığı saat yazmıyor.

| İnceleme sonucu | |
|---|---|
| Kanıtlanan | `kisisel-telefon-kaydi`, kuralın gerektirdiği bilgileri taşımıyor; `surucu-talimati`, politikanın kayıtlı ve yönetilen cihaz koşulunu aramıyor |

Kurum belgelerinde erişimin kaldırılması için tanımlı bir hedef süre yoktur.

::: {.notes}
Düzeltme çalışmasının girdisi bu iki somut olgudur: `kisisel-telefon-kaydi`'ndaki bilgi eksikliği bir kayıt tutma ve form eksikliğidir; `surucu-talimati`'nın politikanın koşulunu aramaması ise doğrudan bir belge eksikliğidir. Yapacağımız revizyon bu iki sorunu birbirine karıştırmadan ayrı ayrı ele alır.

Tablodaki "Kanıtlanan" satırı bilerek dar tutulmuştur; mevcut kayıtlardan "yönetici onayı hiç alınmadı" ya da "BT erişimi kaldırmakta gecikti" gibi hükümler çıkmaz. `kisisel-telefon-kaydi`'nda onay bilgisinin yazmaması, onayın gerçekte alınmadığını değil kaydın bu veriyi tutmadığını gösterir; `kayip-bildirim-kaydi`'nda ise hem bildirimin kime yapıldığı ve BT'ye ulaştığı saat eksiktir hem de kurum belgelerinde erişimin kaldırılması için tanımlı bir hedef süre yoktur.

Kayıttaki veri eksikliği ile kanıtlanmış kural ihlalini birbirinden ayırmak, doğru belge tasarımının temelidir. Kanıtlanamayan iddialar üretmek yerine, kayıtların neden eksik kaldığını belge zincirinde aramamız gerekir. Bir sonraki slaytta, tek bir metni yamamak yerine prosedür, talimat ve formdan oluşan zinciri birlikte düzeltmenin ilkelerini ele alacağız.
:::

---

## Düzeltme, tek metni değil zinciri düzeltir

**Revizyon**, yürürlükteki belgenin değişen karara ya da ihtiyaca göre yeni sürüme dönüştürülmesi ve bu değişikliğin kaydedilmesidir.

Düzeltilen metinde aranan dört özellik:

1. Politikayla **çelişmez**.
2. **Prosedür** rollerin sırasını ve her adımın çıktısını taşır.
3. **Talimat** tek rolün tek işini, görünür adımlarla anlatır; var olmayan bir yazılım menüsü yazmaz.
4. **Form**, prosedürdeki her adımın çıktısı için alan taşır.

::: {.notes}
Bir belgeyi düzeltmek, o belgeye bağlı çalışan diğer belgeleri de doğrudan etkiler. Prosedüre envanter doğrulama adımı eklendiğinde, bu doğrulamanın sonucunun yazılacağı yerin formda ya da kayıtta bulunması gerekir; talimat ise sürücünün bu adımdan haberdar olması ve kendi payına düşen kontrolü yapması için güncellenir.

Her belge türü kendi işlev sınırını korumalıdır. Prosedür farklı roller arasındaki akışı ve çıktıları kurarken, talimat tek bir rolün yapabileceği ve sonucunu görebileceği tekil eylemleri sıralar. Gerçek bir sistem ekranı doğrulanmadan talimata ekran, menü ya da düğme adı yazılmaz; sahada olmayan bir yeri arayan sürücü talimata güvenini kaybeder.

Her düzeltmede önce üst kural olan politikaya uyumu, ardından belgenin kendi türüne uygunluğunu kontrol edin. Üst kuraldan forma kadar uzanan bu dört özelliğin `erisim-proseduru` sürüm 2 üzerinde nasıl uygulandığını bir sonraki slayttaki rehber örnekte göreceğiz.
:::

---

## Rehber örnek: `erisim-proseduru` sürüm 2

**Erişim talebi prosedürü (sürüm 2)**

1. **Sürücü** `erisim-formu` ile erişim talebi açar.
2. **Birim yöneticisi** iş gerekçesini ve erişim kapsamını onaylar.
3. **BT Mobil Sistemler** cihazın envanterde kayıtlı ve yönetilen olduğunu doğrular. Doğrulama olumluysa erişimi tanımlar ve sonucu kayda işler; olumsuzsa erişimi tanımlamaz ve yöneticiyi bilgilendirir.
4. **BT Mobil Sistemler** sürücüye tanımlanan erişimi ve doğruladığı cihaz kimliğini yazılı bildirir.

::: {.notes}
Yeniden yazılan prosedürde dört adım dört ayrı iş taşıyor ve her birinin öznesi açıkça belirtiliyor. İkinci adım iş gerekçesi ve kapsam onayını birim yöneticisine verirken, üçüncü adım teknik uygulamayı ve cihaz doğrulamasını BT Mobil Sistemler'e bırakır. Böylece iş onayı veren karar verici ile teknik kontrolü yapan uygulayıcı birbirinden ayrılır.

Üçüncü adım, politikanın "kayıtlı ve yönetilen cihaz" koşulunu prosedüre bağlayan kilit adımdır. Burada doğrulamanın olumsuz çıktığı sınır durumu da açıkça yazılmıştır: bir prosedür yalnız her şeyin yolunda gittiği durumu anlatırsa, doğrulama başarısız olduğunda uygulayıcının ne yapacağı belirsiz kalır.

Dördüncü adım ise sürücüye hangi cihaz için erişim tanımlandığını yazılı olarak bildirir; sürücü kendi talimatını uygularken bu cihaz kimliğini kullanacaktır. Her adımın somut bir çıktısı olduğuna dikkat edin: talep, yönetici onayı, doğrulama kaydı ve yazılı bildirim. Bir sonraki slaytta bu prosedür revizyonunun kayıt ve dağıtım tablolarına nasıl işlendiğini inceleyeceğiz.
:::

---

## Rehber örnek: `erisim-proseduru`'nun revizyon ve dağıtım satırları

**Parça A**

| Belge | Sürüm | Gerekçe | Hazırlayan | İnceleyen | Onaylayan |
|---|---|---|---|---|---|
| `erisim-proseduru` | 1 → 2 | Politikanın cihaz koşuluna bağlı doğrulama adımı eklendi | BT Mobil Sistemler | Birim yöneticisi, BGYS belge sorumlusu | Üst yönetim |

**Parça B**

| Belge | Yürürlük | Dağıtım | Eski sürüm | Kanıt |
|---|---|---|---|---|
| `erisim-proseduru` | 18 Kasım | Birim klasörü, BT Mobil Sistemler dosyası, belge listesi | Sürüm 1 kullanım dışı, arşiv kopyası belge sorumlusunda | Teslim alma listesi, belge listesi güncellemesi |

::: {.notes}
Parça A tablosunda gerekçe sütunu, yapılan değişikliğin hangi karardan ve hangi eksiklikten kaynaklandığını açıkça gösterir. İncelemeyi iki ayrı rol birlikte yapar: birim yöneticisi sürecin sahadaki işleyişini, BGYS belge sorumlusu ise belge kimliğini ve politika uyumunu gözden geçirir. Hazırlayan BT Mobil Sistemler kendi metnini onaylamaz; yürürlük onayını üst yönetim verir.

Parça B tablosunda yeni sürümün yürürlük tarihi, dağıtılacağı yerler ve eski sürümün durumu somut olarak yazılmıştır. Sürüm 1'in kullanım dışı bırakıldığı ve arşiv kopyasının belge sorumlusunda tutulduğu belirtilerek sahada eski metnin kullanılması önlenir.

Kanıt sütunundaki teslim alma listesi ve belge listesi güncellemesi, kimin hangi sürümü aldığını ve üst kaydın yenilendiğini gösterir; sahadaki fiilî kullanımı ise yerinde kontrol doğrular. Bir sonraki slaytta, sizin hazırlayacağınız yeni sürümler için kullanacağınız kurumsal bilgileri göreceğiz.
:::

---

## Yeni sürümler için verilen bilgiler

- `surucu-talimati` sürüm 4 ve `erisim-formu` sürüm 2'nin onayı **16 Kasım'da**, yürürlüğü **18 Kasım'da** olacak.
- **Onay düzeni:** `surucu-talimati` sürüm 4'ü sürücünün işini bilen Sevkiyat Operasyonları, `erisim-formu` sürüm 2'yi alanları işleten BT Mobil Sistemler hazırlar; birim yöneticisi iş açısından, BGYS belge sorumlusu belge kimliği ve politika uyumu açısından inceler; yürürlük onayını üst yönetim verir.
- **Dağıtılabilecek yerler:** sürücülere gönderilen bilgilendirme mesajı, depo çıkış kapısındaki basılı klasör, BT Mobil Sistemler ekip dosyası, belge listesi.
- **Eski sürümlerin bulunduğu yerler:** `surucu-talimati` sürüm 3 ve `erisim-formu` sürüm 1, bilgilendirme mesajında, basılı klasörde ve BT ekip dosyasında kopya olarak bulunuyor. Belge listesi kopya değil kayıt yeridir; orada bu sürümler geçerli sürüm olarak yazılıdır.
- Sürücü, cihazın kimliğini cihazın arkasındaki etiketten okuyabilir; bunu BT'nin yazılı bildirdiği kimlikle (`erisim-proseduru` sürüm 2, 4. adım) karşılaştırabilir.

::: {.notes}
İzleyen görevlerde hazırlayan, inceleyen ve onaylayan rollerini, yürürlük tarihlerini ve cihaz kimliği kontrol bilgisini buradaki verilere göre kullanacaksınız. Yeni sürümü hangi belge için hangi noktalara dağıtacağınızı belgenin kullanım amacına göre siz belirlersiniz. Eski sürümler ise yukarıdaki dört noktada yer alıyor; belge listesi bir kopya yeri değil kayıt yeri olduğundan, oradaki işlem kopya toplamak değil geçerli sürüm kaydını güncellemektir.

Eski sürümün durumunu yazarken genel ifadeler yerine somut işlemler tanımlayın: yalnız "kaldırılacak" demek yerine hangi kopyanın hangi yerden çekileceğini ve arşiv kaydının nasıl tutulacağını belirtin. Dosyada verilmeyen saklama süresi gibi ayrıntılar için yeni bir sayı uydurmanız gerekmiyor.
:::

---

## Görev 1 — `surucu-talimati` sürüm 4

- **Görev:** Sürücü için sevkiyat uygulamasına giriş talimatını `mobil-erisim-politikasi` ile uyumlu olarak yeniden yazın.
- **Veri:** `mobil-erisim-politikasi`, `erisim-proseduru` sürüm 2 ve yeni sürümler için verilen bilgiler.
- **Çıktı:** Aşağıdaki 3–4 adımlık `surucu-talimati` sürüm 4 tablosu.

**Ölçüt**

1. 3–4 adım; her adımı tek özne olan sürücü yapıyor.
2. Politikanın kayıtlı ve yönetilen cihaz koşulu bir adımda sürücünün yapabileceği bir eyleme dönüşmüş; kimliğin nereden okunacağı ve neyle karşılaştırılacağı verilen bilgilerdeki kaynaklardan alınmış.
3. Cihaz uygun değilse ya da kaybolursa ne yapılacağı yazılmış.
4. Ekran, menü ya da düğme adı yazılmamış.
5. Cihazın sahibine göre bir yasak getirilmemiş.

| Adım | Sürücü ne yapar? | Ne zaman / hangi koşulda? |
|---|---|---|
| 1 |  |  |
| 2 |  |  |
| 3 |  |  |
| 4 |  |  |

::: {.notes}
Bu görevde sürücünün sevkiyat uygulamasına girerken izleyeceği adımları üst politikayla ve yeni prosedürle uyumlu biçimde yeniden kurguluyoruz. Talimatın dayanağı politikadır; politika cihazın kime ait olduğunu sormaz, envanterde kayıtlı ve yönetilen olmasını arar. Bu nedenle talimatta cihazın mülkiyetine göre bir yasak yazmak, kurumun vermediği bir kararı alt belgede üretmek olur; kurum kişisel cihazları yasaklamak isterse bunu politikanın revizyonuyla yapar.

Tabloyu doldururken yalnız sürücünün bizzat yapabileceği ve sonucunu görebileceği eylemleri adım hâline getirin. "Cihazı kontrol et" gibi belirsiz ifadeler yerine, bir önceki slaytta verilen kaynakları kullanarak neye bakılacağını ve neyle karşılaştırılacağını açıkça yazın. Ayrıca cihazın uygun olmaması, bağlantı hatası veya kayıp gibi durumlarda sürücünün ne yapacağını ilgili koşul sütununda belirtmeyi unutmayın.
:::

---

## Görev 2 — `erisim-formu` sürüm 2

- **Görev:** `erisim-proseduru` sürüm 2'nin dört adımının çıktılarını taşıyacak `erisim-formu` sürüm 2 alanlarını tasarlayın.
- **Veri:** `erisim-proseduru` sürüm 2'deki dört adım ve rollerin görev ayrılığı.
- **Çıktı:** Her alanın kim tarafından ve hangi adım/karar için doldurulduğunu gösteren form tablosu.

**Ölçüt**

1. Prosedürdeki her adımın çıktısı için en az bir alan var.
2. İş onayı ile BT doğrulaması ayrı alanlarda.
3. Her alanın kim tarafından doldurulduğu belli.
4. Her imza için hangi beyanı taşıdığı yazılmış.

| Alan | Kim doldurur? | Hangi adım/karar için gerekli? |
|---|---|---|
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

::: {.notes}
Form, prosedürdeki adımların sahada uygulandığını kanıtlayan veri toplama aracıdır. Bu görevde `erisim-proseduru` sürüm 2'nin dört adımını sırayla inceleyerek, her adımda üretilen karar veya işlemin kayda geçmesi için formda hangi alanların yer alması gerektiğini belirleyeceksiniz. Çalışma tablosundaki satır sayısı sınırlayıcı değildir; tüm çıktıları karşılayacak sayıda satır ekleyebilirsiniz.

Alanları kurgularken iş gerekçesi onayı ile teknik doğrulama işlemini birbirinden ayrı tutun ve her alanı hangi rolün dolduracağını netleştirin. İmza alanlarında ise yalnızca "imza" yazmakla yetinmeyip o imzanın hangi beyanı taşıdığını açıkça belirtin; yanında beyanı yazılı olmayan bir imzanın neyi onayladığı ve neyi kanıtladığı denetimde belirsiz kalır.
:::

---

## Görev 3 — Revizyon kaydı, Parça A

| Belge | Eski → yeni sürüm | Değişiklik gerekçesi | Hazırlayan | İnceleyen | Onaylayan |
|---|---|---|---|---|---|
| `surucu-talimati` |  |  |  |  |  |
| `erisim-formu` |  |  |  |  |  |

**Ölçüt:** Gerekçe, hangi bulguya ve hangi ölçüte dayandığını söylesin; roller verilen onay düzenine uysun.

::: {.notes}
Revizyon kaydının ilk parçasında, yeniden tasarladığınız iki belgenin sürüm geçişlerini ve onay sorumluluklarını kayıt altına alıyoruz. Değişiklik gerekçesi sütununa yalnızca "güncellendi" yazmak yeterli değildir; yapılan değişikliğin politikadaki hangi koşula ya da incelemede saptanan hangi eksikliğe karşılık geldiğini açıkça ifade edin.

Hazırlayan, inceleyen ve onaylayan rollerini "Yeni sürümler için verilen bilgiler" slaydındaki onay düzenine bağlı kalarak dağıtın. Rolleri yerleştirirken görev ayrılığını koruyun: hazırlayan işi yürüten birimdir, inceleyenler iş akışı ve belge uyumunu denetler, onaylayan ise belgenin yürürlüğe girmesine karar verir.
:::

---

## Görev 3 — Revizyon kaydı, Parça B

| Belge | Yürürlük | Dağıtılacak yerler | Eski sürümün durumu | Dağıtım / kullanım kanıtı |
|---|---|---|---|---|
| `surucu-talimati` |  |  |  |  |
| `erisim-formu` |  |  |  |  |

**Ölçüt:** Eski sürümün her bulunduğu yer için bir işlem yazılmış; kanıt sütunu dağıtımın yapıldığını ve eski kopyanın çekildiğini gösterebilecek kayıtları adlandırmış.

::: {.notes}
Revizyon kaydının ikinci parçasında yeni sürümlerin yürürlük tarihini, dağıtım noktalarını ve eski sürümlerin nasıl devre dışı bırakılacağını planlıyoruz. Verilen bilgilerdeki dağıtım yerlerini inceleyerek her belgenin kimler tarafından ve nerede kullanıldığına göre uygun dağıtım kanallarını seçin.

Eski sürümün durumu sütununda, eski kopyaların bulunduğu her nokta ve belge listesi için yapılacak işlemi ayrı ayrı tanımlayın. Dağıtım ve kullanım kanıtı sütununda ise yalnızca "dağıtım yapıldı" gibi genel bir ifade kullanmayın; hem yeni sürümün ilgili yerlere ulaştığını hem de eski sürümün kullanımdan kalktığını doğrulayabilecek somut kayıtları adlandırın.
:::

---

## Çapraz kontrol

Tablolarınızı başka bir grupla değiştirin ve şunları kontrol edin:

1. `surucu-talimati` sürüm 4, politikayla çelişiyor mu? Cihaz sahibine göre bir yasak koymuş mu?
2. Talimattaki her adım sürücünün yapabileceği ve kontrol edebileceği bir eylem mi?
3. `erisim-formu`'nda prosedürün her adımının çıktısı için alan var mı?
4. Revizyon kaydında eski sürümün her bulunduğu yer için bir işlem var mı?
5. Dağıtım kanıtı sütunu, yeni sürümün ulaştığını gösterebilir mi?

Bulduğunuz her eksikliği, **neden eksik** olduğuyla birlikte yazıp geri verin.

::: {.notes}
Başka bir grubun gözüyle yapılan inceleme, kendi yazdığınız metindeki örtük varsayımları ve atlanan adımları yakalamanızı sağlar. Kontrol sorularından birine "uygun" diyorsanız bunun tablodaki dayanağını gösterin; bir eksiklik buluyorsanız eksikliğin nerede olduğunu ve hangi ölçütü karşılamadığını gerekçesiyle yazın.

Geri bildirim sonrasında kendi tablolarınızı düzeltebilirsiniz. Düzeltme yaparken belgeler arasındaki zincir bağlantısını koruyun: forma yeni bir alan eklerseniz prosedürde karşılığı olup olmadığına, talimatta bir adımı değiştirirseniz prosedür ve politikayla uyumlu kalıp kalmadığına birlikte bakın.
:::

---

## Görev 4 — Kayıtlardan hangi iddialar çıkarılamaz?

- **Kapsam:** `erisim-proseduru` ve `erisim-formu` erişim talebi içindir; `surucu-talimati` sürücünün girişini ve kayıp durumunda ne bildireceğini taşır.
- **1. adım:** `kisisel-telefon-kaydi` ve `kayip-bildirim-kaydi`'ndaki eksik bilgileri düzeltilen belgelerde arayın; yoksa **"karşılığı yok"** yazın.
- **2. adım:** Yeni belgeler geçmiş kaydı doldurmayacağı için, mevcut kayıtlardan hangi iddiaların **yine de çıkarılamayacağını** ve gerekli bilgiyi yazın.

| Kayıt | Düzeltilen belgelerde karşılığı | Mevcut veriden çıkarılamayan iddia | İddiayı sınamak için gerekli bilgi |
|---|---|---|---|
| `kisisel-telefon-kaydi` |  |  |  |
| `kayip-bildirim-kaydi` |  |  |  |

- **Örnek** (*"Kayıtta teslim alan kişi yazmıyor"*): Karşılığı belge listesi ve teslim alma kaydı alanı; çıkarılamayan iddia kopyanın verilmediği; gerekli bilgi teslim alma listesi.
- **Ölçüt 1:** Eksik bilginin hangi belge/alanda karşılığı olduğu (yoksa "karşılığı yok") ve çıkarılamayan iddianın tek cümlelik gerekçesi yazılmış.
- **Ölçüt 2:** Kişisel sahiplik tek başına bulgu sayılmamış; tanımlı eşik olmadan süreden ihlal çıkarılmamış.

::: {.notes}
Düzeltilen belgeler yalnız kendi konularında kayıt alanı sağlar: `erisim-proseduru` ve `erisim-formu` erişim talebini, `surucu-talimati` ise sürücünün girişini ve kayıp durumunda ne bildireceğini düzenler. İlk adımda her belgenin kapsamını dikkate alarak iki olay kaydında eksik görünen bilgilerin düzeltilen belgelerde karşılığı olup olmadığını belirleyin; kapsam dışında kalan bir adım varsa "karşılığı yok" yazın.

İkinci adımda, düzeltilmiş belgelerin geçmişte tutulmuş kayıtları geriye dönük doldurmayacağını unutmayın; kayıtta olmayan bilgi o işlemin hiç yapılmadığını göstermez. Örnek satırda olduğu gibi, formda veya listede tasarım düzeyinde bir alan bulunması ile geçmişteki bir kayıtta o bilginin yer almamasını birbirinden ayırın ve kayıttaki olgunun hangi iddiayı desteklemediğini tek cümlelik gerekçeyle açıklayın.
:::

---

## Aktarım: yeni bir karar, aynı zincir

RotaLojistik yönetimi yeni bir karar aldı: **Görevinden ayrılan sürücünün sevkiyat erişimi ayrılış gününde kaldırılır.**

Karardan kayda zinciri kurun:

| Halka | Sizin yanıtınız |
|---|---|
| Politika cümlesi (kural olarak) |  |
| Prosedür: roller ve sıra |  |
| Talimat: kim hangi tek işi yapar? |  |
| Kayıt: neyi gösterir? |  |
| Belge değişince kontrol edilecek eski belge ve kopyalar |  |

- **Ölçüt (Metinler):** Politika yalnız kuralı söylemeli; prosedür en az iki rolün sırasını taşımalı; talimat tek rolün işi olmalı.
- **Ölçüt (Kayıt ve kontrol):** Kayıt gerçekleşmiş bir işlemi göstermeli; kontrol satırı değişecek belgeleri ve geri çekilecek kopyaları adlandırmalı.

::: {.notes}
Bu aktarım çalışmasında, yeni yönetim kararını önce yalnız kuralı söyleyen bir politika cümlesine dönüştürün; ardından kararı uygulayan roller arasındaki sırayı prosedür satırında kurun. Talimat satırı bu rollerden yalnız birinin yapacağı tek işi anlatmalıdır. Kayıt satırında ise gerçekleşmiş bir kaldırma işlemini gösteren somut çıktıyı tanımlayın; boş bir form şablonu ya da yalnız kararın kendisi kayıt değildir.

Tablonun son satırı belge yaşam döngüsüyle ilgilidir: yeni karar yürürlüğe girdiğinde mevcut belgelerden hangilerinin değişmesi gerektiğini ve eski sürümlerin hangi kopyalarının kontrol edilip geri çekileceğini belirleyin. Bu satırda kuracağınız bağ, bir yönetim kararının yalnız tek bir metni değil zincirdeki diğer belgeleri ve dağıtım noktalarını da etkilediğini gösterecektir.
:::
