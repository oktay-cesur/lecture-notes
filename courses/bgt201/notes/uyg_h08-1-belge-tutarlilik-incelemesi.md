---
title: "Uygulama: Belge Tutarlılık İncelemesi"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I · Hafta 8 · Uygulama 1"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-11-11
execute:
  echo: false
---

## Dört rol ve bir karar

RotaLojistik'in sürücüleri mobil cihazlardan sevkiyat durumlarına, teslimat adreslerine ve teslim kanıtlarına erişir. Yönetim yalnız kayıtlı ve yönetilen cihazların kullanılmasını ister.

| Birim / rol | İşi |
|---|---|
| Sevkiyat Operasyonları | Sürücülerin günlük erişim ihtiyacını belirler |
| Birim yöneticisi | İş gerekçesini onaylar |
| BT Mobil Sistemler | Cihazı doğrular, onaylı erişimi tanımlar |
| BGYS belge sorumlusu | Politikaların ve prosedürlerin güncel sürümlerini yayımlar |

*Şirket, kişiler, saatler ve belge içerikleri kurgudur.*

::: {.notes}
Kurumsal bilgi güvenliğinde tek bir yönetim kararının sahada uygulanabilmesi, kararı hayata geçiren rollerin birbirinden ayrılmasına dayanır. RotaLojistik vakasında sürücülerin sevkiyat verilerine yalnızca kayıtlı ve yönetilen cihazlarla erişmesi kararı; iş ihtiyacını belirleyen operasyon birimi, bu gerekçeyi onaylayan birim yöneticisi, teknik doğrulamayı ve tanımlamayı yapan BT Mobil Sistemler ile belgelerin güncel sürümlerini yayımlayan BGYS belge sorumlusu arasında paylaştırılmıştır. İhtiyacı belirleyen, onaylayan, teknik olarak uygulayan ve belgeyi yayımlayan rollerin birbirinden bağımsız olması iç kontrolün temelini oluşturur.

Farklı tarihlerde ve farklı birimler için hazırlanmış belgeler aynı üst kararı kendi görev alanlarına göre aktarırken bazı adımları atlayabilir veya birbirleriyle çelişebilir. İnceleme yaparken iş sahibi, onaylayan karar yetkilisi ve teknik uygulayıcı rollerinin birbirinin yerine geçip geçmediğine dikkat edin; bir belgede bu rollerden birinin sorumluluğu yanlış anlatıldığında ya da tamamen atlandığında belge tutarsızlığı tam o noktada ortaya çıkar.

Çalışma boyunca genel bir "yanlış" ya da "eksik" yargısı yazmak bulgu sayılmaz; her bulgunun hangi ölçüte, hangi somut metne ve hangi gerekçeye dayandığı açıkça gösterilmelidir. Bir sonraki slaytta, bu dört rolün ürettiği ve kullandığı altı metnin kısa adlarını, belge türlerini ve yazılı belgeler ile kayıtlar arasındaki temel farkı inceleyeceğiz.
:::

---

## Belgeler ve kayıtlar: kısa adlar

| Kısa ad | Ne olduğu | Sürüm | Resmî kimlik |
|---|---|---|---|
| `mobil-erisim-politikasi` | Politika: yönetimin üst kuralı | 2 | P-01 |
| `erisim-proseduru` | Prosedür: rollerin işlem sırası | 1 | PR-04 |
| `surucu-talimati` | Talimat: sürücünün işi | 3 | TL-02 |
| `erisim-formu` | Erişim talep formu (boş şablon) | 1 | FR-06 |
| `kisisel-telefon-kaydi` | Uygulama kaydı: gerçekleşmiş bir erişim tanımlaması | — | K-01 |
| `kayip-bildirim-kaydi` | Olay kaydı: gerçekleşmiş bir cihaz kaybı olayı | — | K-02 |

*Tablolarınızda kısa adları kullanın; resmî kimlik yalnız belgeyi kurumun listesinde bulmak içindir.*

::: {.notes}
İnceleme boyunca kullanacağınız kısa adlar çalışma adlarınızdır ve her iki uygulamada da aynı belgeleri gösterir. Tablodaki resmî kimlikler kurumun belge listesindeki kodlamalardır; sürüm numarasıyla birlikte okunduğunda belgenin hangi hâlinin yürürlükte olduğunu ve kastedildiğini belirtir.

Tablonun ilk dört satırı kontrollü yazılı belgelerdir; sırasıyla yönetimin üst kuralını, rollerin işlem sırasını, tek bir rolün sahada yapacağı işi ve veri toplamaya yarayan boş şablonu taşır. Son iki satır ise kural koyan yazılı belge değil, geçmişte gerçekleşmiş işlemlerin ve olayların kayıtlarıdır. Bu ayrım tutarlılık incelemesinin yönünü belirler: yazılı belgeleri üst ölçütle karşılaştırırız, kayıtlara ise "bu kayıt neyi kanıtlıyor, neyi kanıtlamıyor?" sorusuyla bakarız.

Sürüm sütunu yalnızca ilk dört satırdaki yazılı belgeler için geçerlidir ve aynı belgenin hangi hâlinin yürürlükte olduğunu gösterir. Gerçekleşmiş işlem ve olay kayıtları kontrollü belge gibi sürüm numarasıyla yayımlanmaz; kayıtta sonradan bir tamamlama veya düzeltme yapılması gerekirse eski iz silinmeden yeni iz eklenir.

Sık yapılan bir hata, boş bir şablon olan formu gerçekleşmiş bir kayıtla karıştırmak ya da kayıttaki bilgi eksikliğini doğrudan belge sürümü sorunu sanmaktır. Bir sonraki slayttan başlayarak bu altı metnin içeriklerini sırasıyla okuyacak; önce üst kural olan politika ile işlem sırasını anlatan prosedürü yan yana getireceğiz.
:::

---

## Üst kural ve prosedür

**`mobil-erisim-politikasi` (politika, sürüm 2)**

> Sevkiyat sistemine yalnız kurum envanterinde kayıtlı ve yönetilen cihazlardan erişilir.

**`erisim-proseduru` (prosedür, sürüm 1)**

> Sürücünün mobil erişim talebi, birim yöneticisi onayından sonra BT tarafından uygulanır.

::: {.notes}
Üst kural olan `mobil-erisim-politikasi`, sevkiyat sistemine erişecek cihazın kime ait olduğunu sormaz; cihazın kurum envanterinde kayıtlı olup olmadığını ve yönetilen cihaz niteliği taşıyıp taşımadığını arar. Bu iki koşul "ve" bağlacıyla birbirine bağlanmıştır; dolayısıyla erişim izni verilebilmesi için her iki şartın birlikte sağlanması zorunludur.

İşlem sırasını anlatan `erisim-proseduru` ise akışı üç adımda kurar: talep sürücüden gelir, birim yöneticisi onaylar ve BT uygular. Prosedür metnini diğer belgelerle ve üst kural ile karşılaştırırken, politikanın zorunlu kıldığı iki koşulun bu işlem akışında bir yere bağlanıp bağlanmadığını sorgulamamız gerekir.

Okuma yaparken her işlem adımını "bu adım politikanın hangi koşulunu sağlıyor ve hangi rol tarafından doğrulanıyor?" sorusuyla denetleyin; yalnızca yönetici onayının varlığını görmek teknik doğrulama koşulunun sağlandığı anlamına gelmez. Bir sonraki slaytta, sahadaki sürücünün doğrudan okuduğu talimat ile talep bilgilerini toplayan form şablonunu inceleyeceğiz.
:::

---

## Sahaya giden talimat ve form

**`surucu-talimati` (talimat, sürüm 3)**

> Çalışan, sevkiyat uygulamasına kurum cihazından veya kendi kişisel telefonundan doğrudan giriş yapabilir; bağlantı hatasında uygulamayı yeniden başlatır.

**`erisim-formu` (form, sürüm 1)**

Alanlar: kullanıcı adı · talep tarihi · talep eden imzası

::: {.notes}
Talimat, sürücünün sahada doğrudan okuyup uygulayacağı metindir. Çalışan günlük işini yaparken üst politikaya değil elindeki talimata baktığı için, talimat metninde hangi cihaz türlerine ve hangi koşullara yer verildiğini üst kuraldaki ifadelerle dikkatle karşılaştırın.

Boş bir şablon olan `erisim-formu` ise erişim talebi sırasında hangi verilerin toplandığını gösterir. Formda yer alan alanlara bakarak şablonun hangi bilgileri kaydettiğini ve hangi bilgileri dışarıda bıraktığını belirleyebilir; bu alanların politikanın ve kurumun değerlendirme kurallarının gerektirdiği kararları (iş ihtiyacı, onay, cihaz kimliği, erişim kapsamı) karşılayıp karşılamadığını değerlendirebilirsiniz. Bir sonraki slaytta yazılı belgelerden çıkıp gerçekleşmiş iki olayın kayıtlarına geçeceğiz.
:::

---

## Gerçekleşmiş iki kayıt

**`kisisel-telefon-kaydi`**

> 11 Kasım'da sürücü Ece için kendisine ait (kişisel) telefondan sevkiyat erişimi tanımlandı. Kayıtta cihazın envanterle eşlendiğine dair bir bilgi ve birim yöneticisinin iş onayına dair bir bilgi yer almıyor.

**`kayip-bildirim-kaydi`**

> 12 Kasım 09.10'da sürücü Cem cihaz kaybını bildirdi. BT Mobil Sistemler erişimi 12 Kasım 09.48'de kaldırdı. Kayıtta bildirimin kime yapıldığı ve BT'ye hangi saatte ulaştığı yazmıyor.

::: {.notes}
Gerçekleşmiş iki kayıt incelemede iki ayrı soru alanı açar: `kisisel-telefon-kaydi` tanımlanmış bir erişim işlemini anlatırken iki bilginin kayıtta yer almadığını söyler; `kayip-bildirim-kaydi` ise bir cihaz kaybı olayına ait iki saati verirken aradaki bildirim akışına dair bilgileri içermez.

Kayıtları incelerken önce kayıtta açıkça yazan olguları, ardından kayıtta yazmayan noktaları birbirinden ayırın. Yazmayan noktalar işlemin sahada hiç yapılmamış olmasından ya da yapıldığı hâlde kayda geçirilmemiş olmasından kaynaklanabilir; kayıt tek başına bunlardan hangisinin gerçekleştiğini söylemez. Ayrıca kayıtta yazılı olan bir ifadenin kimin beyanına dayandığına dikkat edin: cihazın kaybolduğu bilgisi sürücünün bildirimidir, BT'nin kaybı doğrulaması ise ayrı bir işlemdir. Bir sonraki slaytta ilk kayıt üzerinden cihaz sahipliği ile yönetim durumu arasındaki farkı netleştireceğiz.
:::

---

## `kisisel-telefon-kaydi`'nda cihaz hakkında neyi biliyoruz?

| Bilgi | Kayıttaki durum |
|---|---|
| Cihazın sahibi | Kişisel (kayıtta yazılı) |
| Envanterde kayıtlı mı? | Kayıtta bilgi yok |
| Yönetilen mi? | Kayıtta bilgi yok |
| Yöneticinin iş onayı | Kayıtta bilgi yok |

**Yönetilen cihaz:** BT Mobil Sistemler'in güvenlik ayarlarını belirleyebildiği ve gerektiğinde erişimini kapatabildiği cihazdır.

::: {.notes}
Cihazın mülkiyeti ile envanter ve yönetim durumu birbirinden tamamen ayrı kavramlardır. Tablo, cihazın kime ait olduğunu gösteren sahiplik bilgisini, envanter kaydı ve yönetim durumundan ayırır; çünkü üst politika cihazın kimin malı olduğunu sormaz, envanterde kayıtlı ve yönetilen olup olmadığını sorar. Tanımda belirtildiği gibi yönetilen cihaz, BT Mobil Sistemler'in güvenlik ayarlarını belirleyebildiği ve gerektiğinde erişimini uzaktan kapatabildiği cihazdır.

Tablodaki her satır ayrı bir soruya yanıt verir ve kayıtta neyin yazılı olup neyin yazılı olmadığını açıkça gösterir. Cihazın kişisel olduğu kayıtta yazılı bir olgudur; buna karşılık envanter kaydı, yönetim durumu ve birim yöneticisinin iş onayı hakkında kayıtta hiçbir veri bulunmamaktadır.

İncelemede en sık yapılan hata, "kişisel telefon" ifadesini doğrudan "envanterde kayıtlı olmayan ve yönetilmeyen cihaz" şeklinde okumaktır. Oysa kişisel bir cihaz da kurumsal envantere kaydedilip yönetilebilir; bu yüzden yazacağınız her hükmün tahminle değil, elinizdeki kayıtta yer alan bilgiyle desteklenip desteklenmediğini kontrol etmelisiniz. Bir sonraki slaytta, belge ve kayıtları değerlendirirken kullanacağımız beş kurumsal kuralı inceleyeceğiz.
:::

---

## Kurumun değerlendirme kuralları

1. `mobil-erisim-politikasi` yürürlükteki üst kuraldır; diğer belgeler onunla tutarlı olmalıdır.
2. Mobil erişim için iş ihtiyacı, yetkili onay, envanterde kayıtlı cihaz kimliği ve erişim kapsamı birlikte bulunmalıdır.
3. BT, iş onayı olmadan yeni erişim tanımlamamalıdır; teknik uygulama iş onayının yerine geçmez.
4. Yeni sürüm yürürlüğe girince eski sürümlerin nerede kullanıldığı kontrol edilir ve dağıtım kaydı tutulur.
5. Olay kayıtlarındaki süreler, kurum belgelerinde tanımlı bir hedef süre yoksa tek başına uygunsuzluk ölçütü sayılmaz. `mobil-erisim-politikasi`, `erisim-proseduru`, `surucu-talimati` ve `erisim-formu`'nda erişimin kaldırılması için tanımlı bir hedef süre yoktur.

::: {.notes}
Sıralanan beş kural, incelemede kişisel görüş yerine kullanacağınız kurumsal değerlendirme ölçütleridir. Birinci kural `mobil-erisim-politikasi`'nı tüm belgelerin uyması gereken üst ölçüt olarak tanımlar. İkinci kuraldaki dört unsur (iş ihtiyacı, yetkili onay, envanterde kayıtlı cihaz kimliği ve erişim kapsamı) birlikte aranır; birinin varlığı diğerinin yerine geçmez ve bu bilgilerin erişim kaydında bulunması gerekir. Kayıtta bu bilgiler yoksa kayıt tutma şartı karşılanmamıştır; ancak bu bir eksik kayıt bulgusudur ve işlemin sahada fiilen yapılmadığı sonucunu tek başına içermez.

Üçüncü ve dördüncü kurallar rol ayrımını ve belge sürüm kontrolünü güvence altına alır. BT'nin teknik olarak erişim tanımlayabilmesi iş onayının alındığı anlamına gelmez; kayıtta onay bilgisi yoksa "BT onaysız tanımladı" demek için ek bilgi gerekirken, "kayıt, kural 2'nin istediği bilgiyi taşımıyor" demek için ek bilgiye ihtiyaç yoktur. Aynı şekilde yeni bir belge sürümü yayımlandığında sahadaki eski sürümlerin kontrol edilmesi ve dağıtım kaydının tutulması gerekir.

Beşinci kural olay kayıtlarındaki sürelerin nasıl yorumlanacağını belirler: bir sürenin uzun görünmesi, kurum belgelerinde tanımlı bir hedef süre yoksa tek başına ihlal kanıtı sayılmaz. İncelenen dört belgede erişimin kaldırılması için tanımlı bir hedef süre bulunmadığından, olay kaydındaki süreyi yalnızca gözlem ve hesaplanan olgu olarak yazar, hedef sürenin tanımlanması gerektiğini ise ek bilgi ve eşik ihtiyacı olarak belirtirsiniz. Bir sonraki slaytta bulgu türlerini ve her bulguda ayrı yazılacak üç hüküm bileşenini göreceğiz.
:::

---

## Bulguların dört türü ve üç hükmü

**Bulgu türleri**

- **Çelişki:** İki belge aynı konuda farklı şey söyler.
- **Eksik adım:** Prosedürde ya da talimatta ölçütün gerektirdiği bir işlem yoktur.
- **Eksik alan:** Formda ölçütün gerektirdiği bilgi için yer yoktur.
- **Eksik kanıt / eşik:** Kayıt, bir hükmü desteklemeye yetmez ya da hükmün dayanacağı ölçüt tanımsızdır.

**Her bulguda ayrı yazılan üç şey**

- **Kanıtlanan olgu:** Metinde ya da kayıtta açıkça yazan ya da yazılanlardan hesapla bulunan şeydir.
- **Doğrulanamayan nokta:** Söylemek istenebilen ama elimizdeki bilgiyle desteklenmeyen hükümdür.
- **Ek bilgi ihtiyacı:** Doğrulanamayan noktayı kanıtlayabilecek ya da çürütebilecek bilgidir.

**Tür sorunun yerini, hüküm bulgunun gücünü söyler.** Örnek (rehber satırdaki `erisim-proseduru`): tür *eksik adım*; doğrulanamayan nokta, BT'nin uygulamada fiilen bakıp bakmadığıdır.

::: {.notes}
Denetim ve tutarlılık incelemelerinde temel ayrım, sorunun nerede doğduğunu gösteren "bulgu türü" ile eldeki verinin neyi ispatladığını gösteren "hüküm gücü" arasındadır. Dört bulgu türü sorunun yerini adlandırır: iki belge birbiriyle çatışıyorsa **çelişki**, bir prosedür veya talimatta zorunlu işlem yer almıyorsa **eksik adım**, boş bir form şablonunda gerekli bilgi için kutucuk açılmamışsa **eksik alan**, gerçekleşmiş bir kayıtta bilgi boşluğu varsa ya da karşılaştırma yapılacak hedef süre tanımsızsa **eksik kanıt / eşik** söz konusudur.

Aynı belge birden fazla türde bulgu içerebileceği gibi, her bir bulgu kendi içinde üç ayrı hüküm bileşenine ayrılır. **Kanıtlanan olgu**, metinde doğrudan okuduğumuz ifade ya da kayıttaki saatlerden hesapla bulduğumuz kesin veridir. **Doğrulanamayan nokta**, bu olguya bakarak ileri sürmek isteyebileceğimiz ama eldeki metnin tek başına desteklemediği yargıdır. **Ek bilgi ihtiyacı** ise o doğrulanamayan noktayı kanıtlayabilecek veya çürütebilecek somut veri ya da kayıt alanıdır.

Rehber satırdaki `erisim-proseduru` örneği üzerinden okuduğumuzda; prosedür metninde cihazın kayıtlı ve yönetilen olduğunun doğrulanmasına dair bir işlem adımının yer almaması bulgunun türünü **eksik adım** yapar. Buna karşılık BT'nin sahada erişim açarken cihazlara fiilen bakıp bakmadığı **doğrulanamayan nokta**dır; çünkü yazılı metin sahadaki pratik alışkanlığı göstermez. Bunu netleştirecek **ek bilgi ihtiyacı** ise BT'nin başvuru kayıtları ve doğrulama sonuçlarıdır.

Çalışmada sık yapılan hata, bulgu türü olan "eksik kanıt / eşik" ile hüküm bileşeni olan "doğrulanamayan nokta"yı birbirine karıştırmaktır: ilki sorunun türünü, ikincisi ise o bulgudan çıkaramayacağımız hükmü adlandırır. Uygunsuzluk bir gereksinimin karşılanmamasıdır; kayıt tutma şartı karşılanmadığında kaydın eksikliği tek başına bir bulgudur, ancak işlemin yapılıp yapılmadığı ayrı bir sorudur ve bu ikisi aynı cümlede birleştirilmemelidir. Bir sonraki slaytta görev kapsamını ve başarı ölçütlerini inceleyeceğiz.
:::

---

## Görev ve başarı ölçütü

**Görev**

- **Ne yapacağız:** İncelenen metinleri ve kayıtları `mobil-erisim-politikasi` ve kurumun değerlendirme kurallarıyla karşılaştıracağız.
- **Hangi veriyle:** `surucu-talimati`, `erisim-formu`, `kisisel-telefon-kaydi` ve `kayip-bildirim-kaydi`.
- **Çıktı:** Tespit, gerekçe/düzeltme ve kanıt ayrımını gösteren üç tablo hazırlayacağız.

**Başarı ölçütü**

1. `mobil-erisim-politikasi` üst ölçüt olarak kullanılmış, bulgu ona bağlanmıştır.
2. Çelişki, eksik adım, eksik alan ve eksik kanıt birbirinden ayrılmıştır.
3. Kişisel sahiplik ile kayıt/yönetim durumu karıştırılmamıştır.
4. Tanımlı bir eşik yokken süreden ihlal çıkarılmamıştır.
5. Her bulguda doğrulanamayan nokta ile ek bilgi ihtiyacı ayrı yazılmıştır: belgeler için Tablo 2'de, kayıtlar için Tablo 3'te. Belgelerde kanıtlanan olgu Tablo 1'deki somut metindir.

::: {.notes}
Üç aşamalı tablo çalışmasında dört belge ve kayıt sırasıyla incelenecek; ilk tabloda bulgunun tespiti, ikinci tabloda gerekçe ve önerilen düzeltme, üçüncü tabloda ise kayıtlar için kanıt ayrımı yer alacaktır. Kendi tablolarınızı doldururken bir sonraki satıra geçmeden önce listedeki beş başarı ölçütünü tek tek kontrol edin.

Bir sonraki slaytta göreceğiniz rehber satır `erisim-proseduru` için doldurulmuş bir örnek sunar. Rehber satırı kopyalanacak bir kalıp olarak değil, çalışma yöntemi olarak kullanın: `erisim-proseduru`'nun sorunu sizin inceleyeceğiniz dört satırdan hiçbirinin birebir aynısı değildir, ancak bir ölçüt ile bir metni karşılaştırma mantığı aynıdır.
:::

---

## Rehber satır: `erisim-proseduru`

| Alan | Yazılan |
|---|---|
| Belge ve sürüm | `erisim-proseduru`, sürüm 1 (PR-04) |
| Ölçüt | `mobil-erisim-politikasi` sürüm 2: kayıtlı **ve** yönetilen cihaz; kural 2 |
| Somut metin | "Sürücünün mobil erişim talebi, birim yöneticisi onayından sonra BT tarafından uygulanır." |
| Problem türü | Eksik adım |
| Gerekçe | Metinde yalnız yönetici onayı ve BT uygulaması var. BT, cihazın kayıtlı ve yönetilen olduğuna bakmadan erişim açabilir. |
| Önerilen düzeltme | "BT, tanımlamadan önce cihazın envanterde kayıtlı ve yönetilen olduğunu doğrular, sonucu başvuru kaydına işler." |
| Doğrulanamayan nokta | BT'nin uygulamada fiilen bakıp bakmadığı bu metinden bilinmez. |
| Ek bilgi ihtiyacı | BT'nin başvuru kayıtları ya da cihaz doğrulama sonuçları; doğrulama sonucunun yazılacağı bir kayıt alanı. |

::: {.notes}
Rehber tabloda `erisim-proseduru` (PR-04, sürüm 1) metni, üst kural olan `mobil-erisim-politikasi` sürüm 2'nin "kayıtlı ve yönetilen cihaz" koşulu ve değerlendirme kuralı 2 ile karşılaştırılmıştır. Somut metinde yalnızca yönetici onayı ve BT uygulaması yer aldığı için problem türü olarak **eksik adım** seçilmiştir; çünkü prosedür politikaya aykırı bir ifade taşımamakta, yalnız politikanın koşulunu kontrol eden adımı içermemektedir.

Gerekçe satırı, bu eksik adımın sahada neye yol açabileceğini açıklar: BT personeli cihazın kayıtlı ve yönetilen olduğuna bakmadan erişim tanımlayabilir. Önerilen düzeltme ise hem yapılacak kontrolü ("cihazın envanterde kayıtlı ve yönetilen olduğunu doğrular") hem de bu kontrolün kanıtını ("sonucu başvuru kaydına işler") birlikte yazarak adımı denetlenebilir hâle getirir.

Son iki satırda kanıt sınırı çizilmiştir: prosedür metninden BT'nin uygulamada fiilen ne yaptığını çıkaramayız; belki BT her seferinde envanter kontrolü yapıyordur, ancak yazılı bir adım ve kayıt alanı yoksa bu kontrol kişinin alışkanlığına kalır ve sonradan kanıtlanamaz. Bir sonraki slaytta kendi dört inceleme satırınız için ilk çalışma tablosuna geçeceğiz.
:::

---

## Tablo 1 — Tespit

Dört satırı doldurun: `surucu-talimati`, `erisim-formu`, `kisisel-telefon-kaydi`, `kayip-bildirim-kaydi`.

| Kısa ad ve sürüm | Karşılaştırılan ölçüt | Somut metin veya olgu | Problem türü |
|---|---|---|---|
| `surucu-talimati`, sürüm 3 |  |  |  |
| `erisim-formu`, sürüm 1 |  |  |  |
| `kisisel-telefon-kaydi` |  |  |  |
| `kayip-bildirim-kaydi` |  |  |  |

*Kayıt satırlarında tür seçerken kaydın bir hükmü destekleyip desteklemediğine ve hükmün dayanacağı ölçütün tanımlı olup olmadığına bakın.*

::: {.notes}
İlk çalışma tablosunda karşılaştırılan ölçüt sütununa `mobil-erisim-politikasi`'ndan ya da kurumun değerlendirme kurallarından belirli bir maddeyi yazın; yalnızca "politikaya uymuyor" demek yeterli olmaz, hangi koşulun ya da kuralın karşılanmadığını açıkça belirtin. Somut metin veya olgu sütununda ise doğrudan belgeden yapılan alıntı ya da kayıtta yer alan somut veri bulunmalıdır.

Problem türü sütununda dört bulgu türünden uygun olanı seçin; bir satırda birden fazla problem tespit ediyorsanız satırı ikiye bölerek ayrı ayrı gösterebilirsiniz. Seçim yaparken incelediğiniz satırın yazılı bir belge mi, boş bir şablon mu, yoksa gerçekleşmiş bir olayın kaydı mı olduğunu göz önünde bulundurun ve rehber satırdaki belge türünü diğer satırlara kalıp olarak taşımayın.
:::

---

## Tablo 2 — Gerekçe ve düzeltme

| Belge | Gerekçe | Önerilen düzeltme | Doğrulanamayan nokta | Ek bilgi ihtiyacı |
|---|---|---|---|---|
| `surucu-talimati` |  |  |  |  |
| `erisim-formu` |  |  |  |  |

| Kayıt | Gerekçe | Önerilen düzeltme |
|---|---|---|
| `kisisel-telefon-kaydi` |  |  |
| `kayip-bildirim-kaydi` |  |  |

*İki kayıt için doğrulanamayan nokta ile ek bilgi ihtiyacı Tablo 3'te yazılır.*

::: {.notes}
İkinci tabloda yer alan gerekçe sütunu, tespit ettiğiniz bulgunun neden bir sorun oluşturduğunu ve sahada hangi sonuca yol açabileceğini açıklar. Önerilen düzeltme sütununu somut ifadelerle doldurun: yazılı belgede hangi ifadenin nasıl değiştirileceğini, şablonda neyin düzenleneceğini veya kayıt süreçleri için hangi işlemin yapılacağını belirtin. Kayıtlar geçmişte yaşanmış olayları anlattığı için kayıtlara yönelik düzeltme önerisinin geçmiş metni silip değiştirmek olmadığını, eksik bilginin tamamlanması ya da gelecekte kayıtların eksiksiz tutulmasına yönelik bir önlem olabileceğini dikkate alın.

Yazılı belgeler olan ilk iki satır için doğrulanamayan nokta ve ek bilgi ihtiyacı sütunlarını bu tabloda tamamlayın. Ek bilgi ihtiyacı yazarken genel bir "daha fazla bilgi" ifadesi yerine somut bir kayıt, log ya da doğrulama alanı adlandırın; gerçekleşmiş iki kayıt için ise bu ayrımı bir sonraki slayttaki Tablo 3'e bırakın.
:::

---

## Tablo 3 — Kayıtlarda kanıt ayrımı

| Kayıt | Kanıtlanan | Doğrulanamayan | Ek bilgi ihtiyacı |
|---|---|---|---|
| `kisisel-telefon-kaydi` |  |  |  |
| `kayip-bildirim-kaydi` |  |  |  |

**Kontrol (`kayip-bildirim-kaydi`):**

- **Kanıtlanan sütunu:** Bildirim saati (09.10) ile erişimin kaldırılması (09.48) arasındaki farkı hesaplayıp olgu olarak yazın.
- **Doğrulanamayan sütunu:** Kurum belgelerinde tanımlı hedef süre olmadığı için bu olgudan çıkaramayacağınız hükmü yazın.

::: {.notes}
Üçüncü çalışma tablosunda sütunları soldan sağa doğru doldurun. Kanıtlanan sütununa yalnızca kayıtta açıkça yazan ifadeleri ya da yazılan saatlerden hesapla bulunan kesin verileri koyun; olasılık veya tahmin bildiren ifadeleri bu sütuna yazmayın, çünkü kanıtlanmamış yargılar Doğrulanamayan sütununa aittir.

Kontrol adımı kapsamında `kayip-bildirim-kaydi` satırında bildirim saati (09.10) ile erişimin kaldırılma saati (09.48) arasındaki farkı hesaplayarak olgu olarak kaydedin. Bu farkı yorumlarken kurumun 5. değerlendirme kuralını ve kayıtta hangi ara bilgilerin yazılı olup olmadığını dikkate alın; tanımlı bir hedef süre bulunmadığı için süre farkından çıkaramayacağınız hükmü Doğrulanamayan sütununda, bu boşluğu kapatacak somut verileri ise Ek bilgi ihtiyacı sütununda gösterin.
:::

---

## Düzeltmeleri önceliklendirin

Bulduğunuz düzeltmeleri **öncelik sırasına** koyun ve her sıranın gerekçesini yazın.

**Öncelik ölçütü:** Sahadaki davranışı doğrudan etkileyen ya da başka bir belgenin çalışması için önkoşul olan düzeltme öne alınır.

| Sıra | Düzeltme | Neden bu sırada? |
|---|---|---|
| 1 |  |  |
| 2 |  |  |
| 3 |  |  |
| 4 |  |  |

**Grup kontrolü:** Tablolarınızı yan gruptakiyle değiştirin. Her bulgu için şunu sorun: Bu hüküm, kayıtta yazanla mı destekleniyor, yoksa tahminle mi?

::: {.notes}
İncelemenin son adımında, önerdiğiniz düzeltmeleri öncelik ölçütüne göre sıralamanız ve her sırayı gerekçelendirmeniz beklenir. Sıralama yaparken hangi düzeltmenin sahadaki davranışı doğrudan etkilediğini ve hangi düzeltmenin başka bir belgenin veya kontrolün çalışabilmesi için önkoşul oluşturduğunu değerlendirin; farklı bir sıralama da savunulabileceği için önemli olan seçtiğiniz sırayı ölçütlere dayandırarak açıklamanızdır.

Grup kontrolünde amaç, yazılan her hükmün gerçekten belgeye veya kayda dayanıp dayanmadığını çapraz olarak sınamaktır. Yan grubun tablosunda kesin yargı olarak yazılmış bir ifadeyi destekleyen somut bir olgu bulamıyorsanız, o ifadenin doğrulanamayan sütununa taşınması gerektiğini belirtin ve kontrol sonrasında kendi tablolarınızı gözden geçirerek son hâline getirin.
:::
