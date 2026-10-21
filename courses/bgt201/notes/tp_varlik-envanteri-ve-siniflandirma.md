---
title: "Varlık Envanteri ve Sınıflandırma"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-21
execute:
  echo: false
---

## Koridordaki yazıcı bozuldu: kim bakacak?

Sekreterlik servis çağıracak. Koridorda iki yazıcı var.

- Bozulan hangisi, hangi birimin?
- Bakımından kim sorumlu?
- Neler basılıyor, çıktıları kimler alıyor?
- Çalışmazsa hangi iş aksıyor?

::: {.notes}
Bu kurgusal olayda soruların cevabını bilen çalışan izindedir; bilgiler bir yerde yazılı değildir. Servis çağırmak için bile önce cihazı ayırt etmek ve sorumlusunu bulmak gerekir. Basılan evrakları bilmek ise arızanın hangi işi aksattığını ve çıktılarda hangi bilginin bulunduğunu anlamayı sağlar. Aynı sorun bir bilgisayar, arşiv dolabı veya sözleşme dosyasında da çıkabilir. Korunacak şeyi tanımak, yerini ve sorumlusunu bilmek güvenlikle ilgili kararların başlangıcıdır. Örnekler ders içi çalışmalardan uyarlanmıştır; kurum, konum ve rol ayrıntıları eğitim amacıyla kurgulanmıştır.
:::

---

## Varlık nedir?

**Varlık**, bilgi güvenliği açısından korunacak bilgi veya kurumun yürüttüğü işlerle ve sunduğu hizmetlerle ilişkili değer taşıyan unsurdur.

- Yazıcı bozulursa çıktı alınamaz.
- Yoklama listesi kaybolursa devam durumu belirlenemez.
- Satın alma bedeli ile güvenlik önemi ayrı ölçülerdir.

::: {.notes}
Birkaç sayfalık yoklama listesinin satın alma bedeli olmayabilir. Buna rağmen kaybolması öğrencilerin devam durumuyla ilgili kararları etkiler. Bir cihazın pahalı olması da hangi bilgiyi veya işi desteklediğini açıklamaz. Varlık belirlerken kurumun ne yaptığını ve bunun için ne kullandığını sorarız. Bu yaklaşım cihazların yanında bilgiyi, yazılımı ve hizmeti de görmemizi sağlar. Koruma ihtiyacının gerekçesi, ilgili varlığın zarar görmesinin iş üzerindeki sonucudur.
:::

---

## Bilgisayarın yanında neler varlık sayılır?

**Tür**, varlığın ne çeşit bir unsur olduğunu gösteren kategoridir.

| Anlaşılır örnek | Tür | İşle ilişkisi |
|---|---|---|
| Yazıcı, eğitmen bilgisayarı | Donanım | Çıktı ve ders hazırlığı |
| Kâğıt iş sözleşmesi, yoklama listesi, log | Bilgi | Koşulları, devamı ve olayları kaydetme |
| İşletim sistemi, dosya sunucusu yazılımı | Yazılım ve sistem | Bilgiyi işleme ve paylaşma |
| Öğrenci belge taleplerini yanıtlama | Hizmet | Öğrenciye belge ulaştırma |
| UPS ve jeneratör | Altyapı ve destek | Elektrik kesintisinde çalışma |
| Arşivin düzenini bilen çalışan | İnsan ve iş bilgisi | Aranan belgeye ulaşma |

::: {.notes}
Log, sistemde gerçekleşen olayları kaydeden günlük bilgisidir; bir olayın ardından ne olduğunu anlamaya yardım eder. Kâğıt sözleşme de bilgi taşır ve yetkisiz kişilere görünmesi sorun yaratabilir. Varlığı yalnız ekranı veya satın alma faturası olan şeylerle sınırlarsak bu kayıtlar gözden kaçar. Yazıcı bakımını yapan dış firma da hizmet sağlayıcı olarak işle ilişkilidir. Türler burada kullanılan çalışma ayrımıdır; kurumlar başka kategoriler seçebilir. Ders kaynaklarında insan kaynakları, hizmetler ve süreçler de varlık türleri arasında yer alır.
:::

---

## Bilgi ile onu taşıyan ve işleyen unsurları ayırın

**Bilgi varlığı**, korunan içeriğin kendisidir: sözleşme, yoklama listesi, log.

**İlişkili unsurlar**, bilgiyi taşıyan, işleyen veya ulaştıran şeylerdir: bilgisayar, yazıcı, yazılım, dolap ve hizmet.

Hizmet sunarken kullanılan kayıtlar bilgi varlığıdır; hizmetin yürütülmesi ise bilgiyle ilişkili unsurlar arasındadır. Çalışanın iş bilgisi korunan içerik, bu bilgiyi kullanan çalışan ise ilişkili insan unsurudur.

Yoklama bilgisi → bilgisayarda hazırlanır → yazıcıdan çıkar → arşivde saklanır.

::: {.notes}
Bilginin korunması onu destekleyen unsurların çalışmasına da bağlıdır. Arşiv dolabı açılamıyorsa içerik sağlam olsa bile kâğıda ulaşılamaz; bilgisayar çalışmıyorsa liste hazırlanamayabilir. Bu nedenle içeriği ve ilişkili unsurları birlikte tanırız. İnsan ve iş bilgisi ayrı satırda veya ilgili işin ihtiyaçları arasında gösterilebilir. İtibar kimi kaynaklarda soyut varlık sayılır; bir olayın etkisini açıklarken de kullanılabilir. Bu unsurların kayıtta nasıl gösterildiği kurumun tutarlı seçimine bağlıdır; hepsine aynı cihaz sütunlarını doldurtmak gerekmez.
:::

---

## Envanter nedir, ne işimize yarar?

**Varlık envanteri**, kurumun varlıklarını tek yerde, tutarlı biçimde kaydeden ve güncel tutulan listedir.

- Arıza veya kayıpta neyin, nerede ve kimde olduğunu gösterir.
- Toplu güncellemede ilgili cihaz ve yazılımları buldurur.
- Sorumluluğun ve koruma ihtiyacının görünmesini sağlar.

Tablo, elektronik çizelge veya veri tabanı kullanılabilir.

::: {.notes}
Bir yazılımın yüz bilgisayarda kurulu olduğunu bilmek yalnız sayıyı verir. Hangi cihazlarda kurulu olduğunu, kayda bağlı cihaz listesinden bulabiliriz. Yazıcının konumu ve bakım sorumlusu belliyse arızada başvurulacak kişi de bellidir. Koruma için de benzer bir ihtiyaç vardır: her varlığa aynı sıkılıkta önlem uygulamak maliyeti artırabilir ve işi yavaşlatabilir. Envanter, hangi varlığın neden önemli olduğunu görünür kılar. Liste kurumdaki değişikliklerle birlikte yenilenmelidir. “Tek yerde” ifadesi ortak bir kayıt düzenini anlatır; bağlantılı bilgi ve donanım listelerinin tek bir fiziksel dosyada bulunması zorunlu değildir.
:::

---

## Küçük tabloyu ne var sorusuyla kurun

Kurgusal bir birimde iki yazıcı, bir bilgisayar ve iki bilgi grubu var.

| Varlık | Tür |
|---|---|
| Koridor yazıcıları, 2 adet | Donanım |
| Eğitmen bilgisayarı | Donanım |
| Yoklama listeleri | Bilgi |
| İş sözleşmeleri | Bilgi |

::: {.notes}
İlk iki alan farklı soruları yanıtlar. Varlık adı neyi izlediğimizi, tür ise bunun hangi çeşit unsur olduğunu söyler. “Bilgi” yazmak yoklama listelerinin yerine geçmez; hangi bilginin izlendiği de belirtilmelidir. İki yazıcı henüz topluca yazılmıştır. Bu başlangıç listesi saymayı kolaylaştırır fakat bir yazıcı arızalandığında hangisini kastettiğimizi göstermez. Kayıtları ayırt etme ihtiyacı doğduğunda tablo da buna göre düzenlenir. Sütunları işin sorularından çıkararak kurmak, alanların neden bulunduğunu anlamayı sağlar.
:::

---

## Nerede arayacağım, kime soracağım?

| Varlık | Konum / ortam | Sorumlu | Kullanan |
|---|---|---|---|
| Koridor yazıcıları | MYO koridoru | BT sorumlusu | Genel kullanım |
| Eğitmen bilgisayarı | Eğitmenin odası | BT personeli | Eğitmen |
| Yoklama listeleri | Arşiv; kâğıt | Arşiv personeli | Eğitmen |
| İş sözleşmeleri | İK ofisi; kâğıt | İK personeli | İK |

**Konum:** nerede? **Sorumlu:** kime sorarım? **Kullanan:** kim iş yapar?

::: {.notes}
Konum, ihtiyaç anında varlığı bulmayı sağlar. Bilgide kâğıt veya dijital ortamın da belirtilmesi gerekir; aynı isimli belge farklı ortamlarda bulunabilir. Sorumlu alanı ilk başvurulacak kişiyi gösterirken kullanan alanı günlük işi yapanları gösterir. Bilgisayarı eğitmenin kullanması, bakımını da eğitmenin yaptığı anlamına gelmez. Bu küçük tablodaki sorumlu alanı genel bir başlangıçtır. İşle ilgili karar verme ve teknik uygulama görevlerini ayrıca ayırmak gerektiğinde iki ayrı rol alanı kullanılır. Böylece “sorumlu” sözcüğünün hangi görevi karşıladığı açık olur.
:::

---

## Bu varlık olmazsa ne olur?

| Varlık | Neden önemli? |
|---|---|
| Koridor yazıcıları | Çıktı alınamaz; evrak yanlış kişiye gidebilir. |
| Eğitmen bilgisayarı | Ders ve yoklama hazırlığı aksar. |
| Yoklama listeleri | Devam durumu bunlara bakılarak belirlenir. |
| İş sözleşmeleri | Çalışma koşullarını gösterir; yetkisizlere görünmemelidir. |

::: {.notes}
“Neden önemli” alanı varlığı yaptığı işe bağlar. “Çok önemli” veya gerekçesiz bir sayı yazmak yerine somut sonucu belirtiriz. Yazıcı için hem çıktı alınamaması hem basılan bilginin yanlış kişinin eline geçmesi düşünülür. Yoklama listesinin önemi ise devam kararının dayanağı olmasından gelir. Bu bilgiler hangi önlemin gerekli olduğunu açıklamaya yardım eder. Bir bilgisayarın satın alma bedeli mali bilgi verir; devam kaydındaki yanlışlığın öğrenciyi nasıl etkileyeceğini anlatmaz. Bu yüzden fiyat ile güvenlik önemini birbirine çevirmeyiz.
:::

---

## İki yazıcıyı nasıl ayıracağız?

“Koridordaki yazıcı bozuk” ifadesi hangisini gösteriyor?

. . .

**Kimlik**, aynı türdeki varlıkları ayıran kayıt numarasıdır.

| No | Varlık | İzleme kararı |
|---|---|---|
| 1 | Koridorun 1. yazıcısı | Ayrı satır |
| 2 | Koridorun 2. yazıcısı | Ayrı satır |
| 3 | Eğitmen bilgisayarı | Ayrı satır |
| 4 | Aynı gruptaki yoklama listeleri, 13 adet | Birlikte izlenen tek satır |

Bu örnekte ayrı cihazı tespit etmek için yazıcıları ayırırız; ortak iş ve kararla birlikte izlenen kayıtları adetle gruplarız.

::: {.notes}
Bu örnekte arızalanan veya taşınan yazıcının hangisi olduğunu ayrı izlemek istiyoruz. Bu tercih izleme ihtiyacına dayanır; her fiziksel şeyin ayrı arızalanabilmesi evrensel bir ayrı satır kuralı değildir. Ortak “2 adet” kaydı, hangisinin durumunun değiştiğini saklar; ayrı kimlikler bu sorunu giderir. Aynı gruptaki yoklama dosyaları ise bu örnekte birlikte izlenir ve adet belirtilir. No 4, küçük tablonun yoklama satırıdır; No 3 eğitmen bilgisayarına ayrılmıştır. Satır açma kararı neyi ayrı izlemek gerektiğine dayanır. Kimlik, cihazın seri numarasıyla aynı şey olmak zorunda değildir. Dosya grubu için de kayıt kimliği kullanılabilir; bilgisayara özgü seri numarası alanını her varlığa uygulamayız.
:::

---

## Yoklama listelerinin ilk kaydını okuyun

| Alan | Çözümlü kayıt | Yanıtladığı soru |
|---|---|---|
| Kimlik ve ad | 4 — Yoklama listeleri | Hangi varlık? |
| Tür | Bilgi | Ne çeşit? |
| Konum / ortam | Arşiv; kâğıt; 13 adet | Nerede, hangi ortamda? |
| Sorumlu | Arşiv personeli | Sorun çıkınca kime sorarım? |
| Kullanan | Eğitmen | İş için kim kullanır? |
| Neden önemli | Devam durumu belirlenir. | Kaybolursa hangi iş etkilenir? |

::: {.notes}
Bu tablo, geniş bir yatay satırın alanlarını okumayı kolaylaştırmak için dikey gösterir. Kaydı başka bir kişi okuduğunda varlığı bulabilmeli ve neden izlendiğini anlayabilmelidir. Seri numarası yoktur; kâğıt listeleri bulmak için arşiv konumu ve ait olduğu grup daha işe yarar. Donanımda marka, model ve seri numarası; yazılımda sürüm ve kurulu cihaz sayısı; hizmette sunan birim ve kritik saatler eklenebilir. Alanlar varlığın türüne ve izleme ihtiyacına göre seçilir. Buradaki 13 adet ve rol atamaları eğitim örneğinin verileridir; kurumlar için zorunlu alan veya eşik değildir.
:::

---

## Varlıkları bulmak için işin adımlarına bakın

Yoklama al → listeyi sakla → arşive kaldır → devam kararında kullan.

| Sorulacak | Bulunan aday |
|---|---|
| Hangi bilgi kullanılıyor? | Yoklama listeleri |
| Hangi araç gerekiyor? | Bilgisayar, yazıcı |
| Nerede saklanıyor? | Arşiv dolabı ve odası |
| Hangi bilgi veya kişi gerekiyor? | Arşiv düzenini bilen personel |

::: {.notes}
Yalnız odada görünen cihazları saymak sözleşme, log ve yoklama gibi bilgileri atlayabilir. İşin adımlarını izlemek bu eksikliği azaltır. Her aday için bu işte gerçekten kullanılıp kullanılmadığını ve zarar görmesinin işi etkileyip etkilemediğini sorarız. Kurgusal bir kayıt düzeninde birim sorumlusu aday listeyi çıkarır, yerinde kontrol yapılır ve ilgili iş kararını veren kişi satırı doğrular. Kaydı yazan kişi ile doğruluğunu onaylayan kişi farklı olabilir. Bu ayrım, envanteri tutma görevini bütün varlıklarla ilgili karar yetkisi gibi görmeyi önler.
:::

---

## Kâğıt ile tarama aynı bilgi olabilir

**Taşıyıcı**, bilginin üzerinde durduğu ortamdır.

**Kopya**, aynı bilginin başka taşıyıcıdaki nüshasıdır; **asıl**, kurumun referans aldığı nüshadır.

Aynı yoklama listesi: kâğıt asıl + ortak klasörde tarama.

. . .

İçerik, amaç ve sahip aynıysa **tek bilgi satırı, iki konum / ortam** yazılır.

::: {.notes}
Kâğıt ve taramayı iki bağımsız bilgi gibi kaydetmek, aynı içeriğin nerelerde bulunduğunu izlemeyi zorlaştırabilir. Tek bilgi satırında iki ortamı belirtmek kopyaları birlikte görmeyi sağlar. Yalnız toplam devamsızlık oranını yayımlayan özetin içeriği ve amacı ise farklıdır; başka bir bilgi kaydı olabilir. Eğitmenin kendi telefonuna çektiği izinsiz fotoğraf da aynı bilginin bir kopyasıdır. Bu kurgusal durumda kopya, ilgili satırda bulgu olarak kaydedilir ve kaldırılmasını takip edecek sorumlu belirlenir. Bir kopyanın bulunması ona kullanım izni verildiği anlamına gelmez.
:::

---

## Karar veren, işleten ve kullanan kim?

**Sahip**, varlığın amacına, kullanıcılarına ve sınıfına karar veren, gözden geçirmeyi başlatan roldür.

**Teknik sorumlu**, sahibin kararını uygulayan ve ortamı işletendir.

**Kullanıcı**, varlığı kendi işi ve izni kapsamında kullanır.

Yoklama listeleri: bölüm başkanlığı → arşiv personeli → eğitmen.

::: {.notes}
Sahiplik burada mülkiyeti değil, işle ilgili karar yetkisini gösterir. Yoklama örneğinde bölüm başkanlığının sahipliği eğitim amacıyla atanmıştır; başlangıç tablosunda yalnız arşiv personeli ve eğitmen bulunuyordu. Bölüm başkanlığı kimlerin hangi amaçla kullanabileceğine karar verir, arşiv personeli saklama düzenini uygular, eğitmen listeyi kullanır. Aynı kişi birden çok rolü üstlenebilir; yine de karar ve uygulama görevleri ayrı yazılır. Bir işi başka kişiye vermek sahipliği kendiliğinden devretmez. Yeni kişi bakım veya kullanım görevini üstlenirken iş kararını veren rol aynı kalabilir.
:::

---

## Görev 1: laboratuvarın üç kaydını kurun

- Ölçüm cihazı 2. kattaki laboratuvarda; laboratuvar sorumlusu tahsis eder, teknisyen bakımını yapar.
- Deney föyleri dolapta basılı ve öğretim elemanının bilgisayarında PDF; içeriği öğretim elemanı belirler.
- Aynı ölçüm yazılımı laboratuvardaki 12 bilgisayarda kurulu.

**Her biri için:** tür, konum / ortam, sahip, teknik sorumlu, kullanıcı ve neden önemli alanlarını yazın.

**Ölçüt:** Satır ve kopya kararını gerekçelendirin; verilmeyen rolü atama önerisi olarak belirtin.

::: {.notes}
Önce bilgi ile cihazı ayırın, sonra her satırda hangi işi izlediğinizi açıklayın. Basılı ve PDF föyleri aynı içeriktir; iki ortamın varlığı otomatik olarak iki bilgi oluşturmaz. Cihazı tahsis eden ile bakımını yapanın yetkileri verilmiştir. Yazılımın sahibi ve bazı uygulama görevleri ise doğrudan belirtilmemiştir. Böyle alanlarda olgu ile önerilen atamayı ayırmak gerekir. Kaydın yeterliliği bütün hücreleri tahminle doldurmaktan değil, verilenleri doğru yazmaktan ve tamamlanması gereken kararı açık tutmaktan gelir.
:::

---

## Görev 1 çözümü: satırları ve ortamları ayırın

| Varlık | Tür | Konum / ortam | Neden önemli? |
|---|---|---|---|
| Ölçüm cihazı | Donanım | Laboratuvar, 2. kat | Arıza veya yanlış ayar deneyi ve ölçümü etkiler. |
| Deney föyleri | Bilgi | Dolapta basılı; bilgisayarda PDF | Yanlış içerik yanlış deney yaptırır. |
| Ölçüm yazılımı | Yazılım | Laboratuvarın 12 bilgisayarı | Yazılım olmadan ölçüm yapılamaz. |

Föyler tek bilgi, iki taşıyıcıdır. Aynı yazılım bu örnekte adetle izlenir.

::: {.notes}
Ölçüm cihazı ayrı izlenen tek cihazdır ve kendi kaydını alır. Föyler aynı amaç ve içerikle kullanıldığından basılı nüsha ile PDF tek bilgi satırında yer alır; her iki konum da bulunabilmelidir. Yazılım bu küçük örnekte aynı kurulumun 12 bilgisayardaki kullanımı olarak birlikte izlenir. Cihazların kendileri için ayrı donanım kayıtları bulunmasıyla bu karar çelişmez. Hangi kaydı tuttuğumuzu belirtmek önemlidir: yazılım kaydı ile bilgisayar kaydı farklı soruları yanıtlar.
:::

---

## Görev 1 çözümü: rolleri ayrı yazın

| Varlık | Sahip | Teknik sorumlu | Kullanıcı |
|---|---|---|---|
| Ölçüm cihazı | Laboratuvar sorumlusu | Teknisyen | Öğrenciler ve öğretim elemanları |
| Deney föyleri | Öğretim elemanı | Dijital: öğretim elemanı; dolap: laboratuvar sorumlusu | Öğrenciler ve öğretim elemanları |
| Ölçüm yazılımı | Laboratuvar sorumlusu | Teknisyen | Öğrenciler ve öğretim elemanları |

Görevde verilmeyen roller burada **eğitim amacıyla önerilen atamalardır**.

::: {.notes}
Cihazın derslere tahsisini laboratuvar sorumlusu yapar; bu, sahip alanına dayanak sağlar. Teknisyenin bakım yapması ona ders tahsisi yetkisi vermez. Föylerin içeriğini öğretim elemanı belirlediğinden bilgiyle ilgili karar rolü ondadır. Yazılımın sahipliği, föylerin iki ortamdaki uygulama görevleri ve kullanıcı atamaları çözümün eğitim amaçlı tamamlamalarıdır. Kullanıcı önerisi deney işine, föylerin teknik görevleri bulundukları ortamı yönetenlere, yazılım rolleri cihazın tahsis ve bakım düzenine dayanır. Gerçek bir envanterde önerilen atamaların ilgili kişilerle doğrulanması gerekir. Bu tablo, görevin verilerinin bütün bu rolleri zaten kesinleştirdiği anlamına gelmez.
:::

---

## Bir varlık neye dayanır, neyi destekler?

**Dayanır**, varlığın çalışmak için ihtiyaç duyduğu varlık, kişi veya dış tarafı gösterir.

**Destekler**, bu varlığa ihtiyaç duyan işi veya varlığı gösterir.

| Varlık | Dayanır | Destekler |
|---|---|---|
| Yoklama listeleri | Koridor yazıcısı, arşiv personeli | Devam durumunun belirlenmesi |
| Koridor yazıcısı | Elektrik, BT, bakım firması | Yoklama listelerinin çıktıları |

::: {.notes}
Tablo, ilişkinin okunmasını kolaylaştırmak için yalnız birkaç bağlantıyı gösterir. Yoklama listelerinin kaydında yazıcıya ihtiyaç olduğu yazıyorsa yazıcının kaydında da yoklama çıktısını desteklediği görünmelidir. Böylece arızalanan cihazın etkilediği iş bulunur. Arşiv anahtarının tek kişide olması da bir ihtiyaç ilişkisidir: kişi izindeyken kâğıt asıla ulaşılamayabilir. Bu tür ilişkileri görmek için bütün kurumu karmaşık bir ağ olarak çizmek gerekmez; somut iş ve karşılıklı iki kayıt yeterli olabilir. Aynı kimlik kullanılarak iki taraftaki bağlantının tutarlılığı kontrol edilir.
:::

---

## Bir olayın etkisini üç ayrı yönden değerlendirin

**Etki düzeyi**, bir olayın sonucunun ciddiyetini gizlilik, bütünlük ve erişilebilirlik için ayrı ayrı belirtir.

| Yön | Sorulacak soru |
|---|---|
| Gizlilik | Yetkisiz kişi görürse ne olur? |
| Bütünlük | Yanlış veya yetkisiz değişirse ne olur? |
| Erişilebilirlik | Kullanılamazsa ne olur? |

Her yön için Düşük, Orta veya Yüksek ve **ayrı gerekçe** yazılır.

::: {.notes}
Üç yön farklı olay sonuçlarını anlatır. Yoklama kaydını yetkisiz birinin görmesi ile devamsızlık sayısının yanlış yazılması aynı sorun değildir; dosyaya hiç ulaşılamaması da başka bir sorundur. Bu yüzden tek bir “önemli” etiketiyle üçünü kapatmayız. Düzeyler toplanıp puana çevrilmez. Sorulan, olayın gerçekleşme olasılığı değil, gerçekleşirse neye yol açacağıdır. Kararı vermeden önce kurumun Düşük, Orta ve Yüksek ile neyi kastettiğini açıklayan ölçütler bulunmalıdır. Aşağıdaki ölçütler kurgusal birime aittir.
:::

---

## Bu birimde etki düzeyleri nasıl seçiliyor?

**Kurgusal ölçütler; standart veya mevzuat eşiği değildir.**

| Düzey | Gizlilik | Bütünlük | Erişilebilirlik |
|---|---|---|---|
| Düşük | Bu kurumda görünmesi iş zararı doğurmayan bilgi; görevli adı ve iş ataması dahil | Aynı gün fark edilir ve düzeltilir. | İş aynı gün alternatif yolla sürer. |
| Orta | Öğrencinin ad, numara ve devam kaydı kurum içinde yetkisize görünür | Düzeltme veya gecikme bir iş gününe kadardır. | Bir iş gününe kadar gecikme; alternatif vardır. |
| Yüksek | Kimlik, iletişim, sağlık, maaş gibi bilgi yetkisize veya kurum dışına görünür. | Yanlış bilgi bir kararı etkiler ve fark edilmeyebilir. | Kritik tarih kaçar veya iş birden fazla gün durur. |

::: {.notes}
Ölçütün işlevi gerekçeyi karşılaştırılabilir kılmaktır. Örneğin yanlış kayıt aynı gün fark edilip düzeltilebiliyorsa bütünlük etkisiyle ilgili koşul Düşük satırına uyar. Yanlış kayıt öğrencinin sınav hakkını etkileyen bir karara yol açabiliyor ve fark edilmeyebiliyorsa Yüksek satırına uyar. Kısa kesintide işin başka yolla sürmesiyle kritik tarihin kaçması da ayrı sonuçlardır. Bu sınırlar kurumun örnek kararlarıdır; evrensel süre veya zarar eşikleri gibi kullanılamaz. Düzeyin yanına olay ve sonucunu yazmak, yalnız renk veya sayı kullanmaktan daha açıklayıcıdır.
:::

---

## Sınıf kimlerin görebileceğini belirler

**Sınıf**, bilginin kimlerce görülebileceğini belirleyen erişim grubudur.

| Bu birimin sınıfı | Ölçüt |
|---|---|
| Kamuya açık | Yayımlanması yönetim tarafından onaylı bilgi |
| Kurum içi | Bu kurumda görünmesi iş zararı doğurmayan görevli adı ve iş ataması gibi iş düzeni bilgileri |
| Sınırlı erişim | Öğrencinin ad, numara ve devam kayıtları veya sağlık, maaş, izin nedeni gibi özel bilgiler; yalnız görevli kişiler iş için kullanır |

**Sınıf ile üç ayrı etki düzeyi farklı soruları yanıtlar.**

::: {.notes}
Bu sınıf adları ve ölçütleri kurgusal birime aittir. Kurum içi sınıfında görevli adları ve iş atamaları bulunabilir; bu sınıf, kişiye ilişkin hiçbir sözcük yok anlamına gelmez. Sağlık veya izin nedeni gibi bilgiler eklenirse aynı çizelgenin değerlendirmesi değişebilir. Kamuya açık sınıfını seçmek için bilginin yayımlanmasının onaylanmış olması gerekir. İnternetten ulaşılabilir olmak tek başına yayım onayı göstermez. Sınıf, üç etki düzeyinin toplamından çıkmaz; bilginin hangi gruba açılacağına ilişkin kurala göre seçilir. Kurumlar başka adlar ve ölçütler kullanabilir.
:::

---

## Sınıfı uygulamak için kural ve etiket gerekir

**İşleme kuralı**, sınıfa bağlı olarak okuma, değiştirme, kopyalama, saklama ve yedekleme koşullarını belirler.

**Etiket**, bu kararı varlığın üzerinde gösteren kısa işarettir.

Yoklama için kurgusal karar:

- Eğitmen ve bölüm sekreteri okur; kişisel cihazda kopya tutulmaz.
- Tarama bölümün ortak klasöründedir ve yedeklenir.
- Kapakta ve klasörde “Sınırlı erişim” etiketi bulunur.

::: {.notes}
Sınıf adını yazmak, bilgiyi nasıl kullanacağımızı bütün ayrıntılarıyla açıklamaz. İşleme kuralı kimlerin kullanacağını ve kopyaların nerede tutulabileceğini somutlaştırır. Bu örnekte kâğıt asıl arşivde kilitli dolaptadır. Düzeltmede eski değerin okunur kalması ve değişikliğin tarihinin yazılması da kurgusal kurala dahildir. Etiket, kapağa veya klasöre bakan kişiye geçerli sınıfı hatırlatır; erişim izninin uygulanmasının yerine geçmez. Bu kararlar örnek kuruma aittir ve bütün envanterlerde aynı klasör, dolap veya sınıf adının bulunması gerektiğini göstermez.
:::

---

## Yoklama kaydına etki ve sınıfı ekleyin

**Bu değerlendirmede kâğıt asıl ve tarama birlikte bulunuyor.**

| Alan | Karar | Olayın gerekçesi |
|---|---|---|
| Gizlilik | Orta | Ad, numara ve devam durumu kurum içinde yetkisize görünür. |
| Bütünlük | Yüksek | Yanlış devamsızlık sınav hakkını etkileyebilir. |
| Erişilebilirlik | Orta | Bir taşıyıcı yoksa diğeriyle iş sürer; bir iş günü gecikme olabilir. |
| Sınıf | Sınırlı erişim | Öğrenciye ait bilgiyi görevliler iş için kullanır. |

::: {.notes}
Bu tablo ilk kayıttaki “neden önemli” alanını ayrıntılandırır. İlk kayıt yalnız kâğıt ortamı gösteriyordu; şimdi taramanın da eklendiği durumu değerlendiriyoruz. Güncelleme bölümünde bu geçişi kayda işleyeceğiz. Erişilebilirlik gerekçesi bu koşula dayanır. Gizlilik olayının sonucu Orta ölçütüne uyarken sınıf yine Sınırlı erişimdir; biri olayın ciddiyetini, diğeri kullanım grubunu gösterir. Başka bir olay tarif edilirse aynı bilginin etkisi yeniden incelenir. Örneğin burada değerlendirilen kurum içi görünme olayıyla bilginin kurum dışına açılması aynı olay değildir. Seçimin dayanağını yazmak bu farkı görünür kılar.
:::

---

## Kamuya açık duyuruda ne korunur?

Yönetim onaylı sınav takvimi herkesçe okunabiliyor.

Yanlış sınav tarihi yazılırsa veya sınav haftasında sayfa açılmazsa ne olur?

. . .

- Sınıf **Kamuya açık**, gizlilik etkisi **Düşük**.
- Yanlış tarih öğrenciyi yanıltır: bütünlük **Yüksek**.
- Sınav haftasında erişilebilirlik **Yüksek** olabilir.
- Okuma herkese açıkken değiştirme yetkisi sınırlıdır.

::: {.notes}
Duyurunun herkese ulaşması amaçlanır; onu okumak gizlilik sorunu doğurmaz. Ancak doğru kişilerin yanlış tarihe göre hareket etmesi ciddi sonuç yaratabilir. Açık bilgi için bütünlüğün korunması bu nedenle gereklidir. Erişilebilirlik değerlendirmesinde zaman da önemlidir: sınav haftasında duyuruya ulaşamamak işin kritik zamanını etkileyebilir. Bu örnek sınıfı koruma öneminin tek ölçüsü saymanın neden yetersiz kaldığını gösterir. Her yön, kendi olayı ve iş sonucu üzerinden değerlendirilir.
:::

---

## Bilgiyi taşıyan cihazda hangi kural uygulanır?

Kurgusal yerel kural: taşıyan veya işleyen unsur, içerdiği bilginin **en yüksek sınıfının işleme kuralını** devralır.

Yazıcıdan duyuru ve yoklama listesi çıkıyor.

. . .

Yoklama çıktısı tepside bırakılmaz; alan kişi başında bekler.

Cihazın etkileri yine kendi olaylarına göre değerlendirilir.

::: {.notes}
Aynı yazıcıdan kamuya açık duyuru da Sınırlı erişim yoklama listesi de çıkabilir. Duyurunun açık olması yoklama çıktısının ortada bırakılmasını uygun kılmaz. Bu birimin seçtiği kural, işlenen bilginin korunmasını destekleyen unsura taşır. Bunun bütün kurumlar için standart hükmü olduğu sonucu çıkarılamaz. Kuralın aktarılması etkilerin eşitlenmesi de değildir: yazıcı arızası çıktı işini durdururken dolap anahtarının kaybı asıl belgeye ulaşmayı engeller. İki olayın alternatifleri ve sonuçları farklı olabilir.
:::

---

## Envanter hangi olaylarda yenilenir?

**Gözden geçirme tetikleyicisi**, satırı yeniden inceleten değişim veya olaydır.

| Değişim | Kayda yansıması |
|---|---|
| Yeni varlık | Yeni satır, roller ve ilgili bağlantılar |
| Taşınma | Konum / ortam; yeni yerde etiket kontrolü |
| Sorumlu veya kullanıcı değişimi | Rol, izin ve kullanım kuralı |
| Amaç değişimi veya olay | Etki gerekçeleri, sınıf ve kuralın gözden geçirilmesi |
| Kullanımdan kalkma | Durum, tarih ve üzerindeki bilginin ne olacağı |

**Revizyon notu:** ne zaman, ne, neden değişti?

::: {.notes}
Kullanımdan kalkan varlığın satırı silinirse geçmiş konumunu ve hangi işlemle devreden çıkarıldığını izlemek zorlaşır. Bu nedenle durum ve tarih kaydedilir; taşıdığı bilginin ne olacağı da belirtilir. Taşınmada ise genellikle yeni varlık oluşmaz, mevcut satırın konumu değişir. Bakımı yeni bir personelin üstlenmesi iş kararını veren sahibin de değiştiği anlamına gelmez. Her değişiklikte hangi olgunun değiştiğini belirlemek gerekir. Revizyon notu bu olguyu gerekçesi ve tarihiyle saklar; kurumun seçtiği aralıklarla sahiplerin satırları gözden geçirmesi de güncelliği destekler.
:::

---

## Tarama ortak klasöre eklenince ne değişir?

Yoklama listeleri taranıp bölümün ortak klasörüne konuyor; amaç ve sahip aynı.

. . .

- Yeni bilgi satırı açılmaz; konum / ortama tarama eklenir.
- Dayandığı unsurlara ortak klasör ve işleten birim eklenir.
- Klasörde “Sınırlı erişim”; izinler eğitmen ve bölüm sekreterine.
- Sahip ve sınıf korunur; tarama erişim için alternatif sağlar.
- Önceki Orta erişilebilirlik kararı bu iki taşıyıcılı duruma aittir.

::: {.notes}
Tarama, aynı bilginin ikinci taşıyıcısıdır. Bilginin amacı ve karar sahibi değişmediği için yeni bilgi kaydı gerekmez. Kayıtta iki ortamın da yeri bulunmalı, klasörü işleten birim ve ilgili kullanım kuralları görülmelidir. Revizyon notu örneği: “Yoklama listeleri taranarak ortak klasöre eklendi; tarih: işlem tarihi; neden: arşive erişim kısıtını azaltmak.” Bu cümlede işlem tarihi gerçek uygulamada doldurulur. Taşıyıcı eklemek etkileri otomatik olarak aynı bırakmaz. Yalnız kâğıt için yeni bir düzey verilmemiştir. Kurum içinde yetkisize görünme ve yanlış devamsızlığın karara etkisi olayları değişmediğinden gizlilik ve bütünlük gerekçeleri korunur; klasör izinleri ayrıca kontrol edilir. Etki gerekçesi değerlendirilirken hangi taşıyıcıların fiilen kullanılabilir olduğu dikkate alınır; iki taşıyıcılı yoklama örneğinin Orta erişilebilirlik gerekçesi bu koşulu açıkça belirtir.
:::

---

## ISO 27001 bağlamında bu kayıt neyi destekler?

**Bilgi Güvenliği Yönetim Sistemi (BGYS)** bağlamında:

- **ISO/IEC 27001:2022:** kurma, uygulama, sürdürme ve sürekli iyileştirme gereksinimleri.
- **ISO/IEC 27002:2022:** kontroller için uygulama rehberi.
- Rehberde kontrol **5.9:** bilgi ve diğer ilişkili varlıkların envanteri.

Tablonun biçimi ve kullanılan araç, kurumun işine göre seçilir.

::: {.notes}
Bilgi ve ilişkili varlıkların birlikte ele alınması, envanterin yalnız BT donanımı sayımı olmamasını sağlar. ISO komitesi sitesindeki açıklayıcı uzman makalesi bağlantılı birden fazla envanter ve farklı sorumluluk atamalarını örnekler; bu makale standardın normatif tam metni değildir. Buradaki şirket örneği eğitim amaçlıdır, zorunlu uygulama sırası veya sütun listesi göstermez. ISO 27001'in gereksinim standardı oluşuyla ISO 27002'nin uygulama rehberi oluşunu ayırmak gerekir. Bu açıklamada kullanılan sürümler 2022'dir.
:::

---

## Destek şirketi önce işi ve varlıklarını belirliyor

**Kurgusal şirketin kapsamı:** müşteri destek taleplerinin alınması ve yanıtlanması.

Talep gelir → kayıt açılır → uzman çözer → müşteriye yanıt gider.

| Bulunan bilgi | İlişkili unsurlar |
|---|---|
| Talep kayıtları | Destek yazılımı, destek e-posta kutusu |
| Destek ekibinin vardiya bilgisi | Destek ekibi ve kullanılan araçlar |

Uzaktan bağlantı aracı da iş akışından bulunan adaylar arasındadır.

::: {.notes}
Şirket kurumda bulunan bütün cihazları gelişigüzel saymak yerine kapsama aldığı işin nasıl yürüdüğünü inceler. Talep kayıtları hangi isteğin alındığını ve nasıl yanıtlandığını taşır. Destek yazılımı ve e-posta kutusu ise bu bilginin işlenmesini ve müşteriye ulaşmasını sağlar. Vardiya bilgisi, ilgili işi hangi ekibin yürüttüğünü anlamaya yardım eder. Bu tablo bütün varlıkları veya ilişkileri tüketmez; işten başlayarak bilgi ve ilişkili unsurları bulma yöntemini gösterir. Kapsam kararı hangi iş için kayıt tutulduğunu anlaşılır kılar.
:::

---

## Destek şirketi sorumluyu ve güncellemeyi belirliyor

| Karar | Kurgusal uygulama |
|---|---|
| Bilginin sahibi | Destek müdürü, talep kayıtlarını kimlerin kullanacağına karar verir. |
| Teknik uygulama | BT yöneticisi destek yazılımını işletir. |
| Kayıt düzeni | Bilgi ve yazılım envanterleri kimlikle bağlanır; sürüm ve tarih tutulur. |
| Güncelleme | Yeni yazılım, ekip değişimi veya olayda ilgili kayıt yenilenir. |
| Gözden geçirme | Sahipler belirlenen aralıklarla kayıtlarını inceler. |

::: {.notes}
Şirketin iki ayrı liste seçmesi ortak bir envanter düzeni kurmasına engel değildir. Bilgi kaydından onu işleyen yazılıma ulaşılabiliyorsa kayıtlar birlikte kullanılabilir. Destek müdürünün iş kararıyla BT yöneticisinin işletim görevi ayrı tutulur. Yeni yazılım geldiğinde yalnız yazılım listesi değil, bu yazılımla ilişkili bilgi kaydı da incelenir. Sürüm ve tarih hangi düzenlemenin geçerli olduğunu izlemeye yardım eder. Bunlar bu şirket için seçilmiş eğitim örneği kararlarıdır; ISO'nun her kurumda aynı tabloyu veya Excel kullanımını zorunlu tuttuğu iddiası değildir.
:::

---

## Görev 2: çizelgeyi sınıflandırın, yazıcıyı güncelleyin

**A — Nöbet çizelgesi:** eğitmen adı ve nöbet günü var; sağlık veya izin nedeni yok. Bu kurumda görevli adı ve iş atamasının görünmesi iş zararı doğurmuyor; ad yine kişiye ilişkin bilgidir. Yanlışlık bir iş günü aksama yaratıyor. Açılmazsa sekreter aynı gün sözlü dağılım yapabiliyor.

**Gizlilik, bütünlük, erişilebilirlik ve sınıfı ayrı gerekçelendirin.**

**B — 2. yazıcı:** BT odasına taşındı, bakım sorumlusu başka personel oldu.

**Değişen / değişmeyen alanları ve revizyon notunu yazın.**

::: {.notes}
Çizelge için önce olayın sonucunu etki ölçütleriyle karşılaştırın, sonra içeriği sınıf ölçütüyle karşılaştırın. Eğitmen adının görünmesiyle sağlık veya izin nedeninin görünmesi bu örneğin yerel ölçütlerinde farklı değerlendirilir. Yazıcıda ise verilen değişim konum ve bakım görevidir; bundan kullanım amacı veya sahiplik devri çıkmaz. Revizyon notunda gerçek uygulamada tarih yer alır. Görevde taşınmanın nedeni belirtilmediğinden neden alanı için doğrulanacak bilgiyi açık bırakmak uygundur. Ölçüt, her kararı verilen olguya bağlamak ve eksik bilgiyi tahminle kesinleştirmemektir.
:::

---

## Görev 2 çözümü: dört kararı ayrı gerekçelendirin

| Alan | Karar | Gerekçe |
|---|---|---|
| Gizlilik | Düşük | Görevli adı ve iş ataması, bu ölçütte iş zararı doğurmuyor. |
| Bütünlük | Orta | Yanlış nöbet bir iş günü aksama yaratıyor. |
| Erişilebilirlik | Düşük | Aynı gün sözlü dağılımla iş sürdürülebiliyor. |
| Sınıf | Kurum içi | İş düzeni; görevli adı ve ataması içeriyor. |

::: {.notes}
Gizlilik etkisinin Düşük olması otomatik olarak Kamuya açık sınıfını seçtirmez. Bu sınıf için yayım onayı gerekir; verilen olgular ise kurum içindeki iş düzenini anlatır. Çizelgede ad bulunması da bu örneğin ölçütlerine göre kendiliğinden Sınırlı erişim sonucu üretmez; görevli adı ve iş ataması Kurum içi ölçütüne dahil edilmiştir. Sağlık veya izin nedeni eklenmiş olsaydı içerik değişirdi ve sınıf yeniden değerlendirilirdi. Çözüm bu birimin tanımlı ölçütlerine dayanır; başka kurumlar için evrensel sınıf kararı vermez.
:::

---

## Görev 2 çözümü: aynı yazıcının kaydını yenileyin

| Alan | İşlem |
|---|---|
| Konum | MYO koridoru → BT odası |
| Teknik / bakım sorumlusu | Önceki personel → yeni personel |
| Etiket ve erişim | Yeni yerde bulunduğu ve kullanımın uygunluğu kontrol edilir. |
| Kimlik, tür, sahip, sınıf | Verilen olgulara göre aynı kalır. |

**Revizyon:** “2. yazıcı BT odasına taşındı, bakım sorumlusu değişti; tarih: işlem tarihi; neden: doğrulanacak.”

::: {.notes}
Taşınan hâlâ aynı cihazdır; yeni kimlik açmak gerekmez. Bakım sorumlusunun değişmesi de varlığın amacını ve kullanıcılarını belirleyen rolün devredildiğini göstermez. Kullanıcılar ve neden önemli alanı verilen olgularla değişmez; yeni yerde erişimin uygunluğu yine kontrol edilir. Görev taşınma nedeni vermediğinden revizyon notu bu nedeni uydurmaz. “Bakım kolaylığı” ancak kurumdan doğrulanırsa kayda yazılabilir. Tarih ve nedenin doğru olması geçmişte hangi değişikliğin yapıldığını anlamak açısından önemlidir.
:::

---

## Yazıcı bozulduğunda kayıttan ne öğrenirsiniz?

- **Kimlik:** 1. yazıcı mı, 2. yazıcı mı?
- **Konum ve sorumlu:** nerede, kimi arayacağım?
- **Desteklediği iş:** yoklama çıktıları aksar mı?
- **İşleme kuralı:** yoklama çıktısı tepside bırakılabilir mi?
- **Güncellik:** son taşınma ve sorumlu değişimi kayda işlendi mi?

::: {.notes}
Açılıştaki arızada bilinmeyenler, artık kaydın alanlarından yanıtlanabilir. Cihazın kimliği ve konumu onu bulmayı, teknik sorumlu bakım için doğru kişiye ulaşmayı sağlar. Desteklediği iş arızanın sonucunu gösterir. Yoklama listesinin işleme kuralı ise yazıcı çalışırken de çıktıların dikkatle alınmasını gerektirir. Kayıt taşınma veya görev değişiminden sonra yenilenmediyse bu cevapların bir kısmı yanlış olur. Envanterin işe yaraması, varlığı tanıtan alanlarla kararları açıklayan gerekçelerin ve değişikliklerin birlikte güncel tutulmasına bağlıdır.
:::

---

## Kaynaklar

- BGT 201 ders içi envanter örnekleri ve ders sunumları: bilgi güvenliği s. 14–16; yönetim sistemleri s. 22–23.
- *Fundamentals of Information Systems Security*, Bölüm 6, s. 196–199.
- *Denetişim*, 2014, s. 9, 12–13.
- [ISO/IEC 27001:2022 — ISO tanıtımı](https://www.iso.org/standard/27001).
- [ISO/IEC 27002:2022 — ISO tanıtımı](https://www.iso.org/standard/75652.html).
- [SC27 Journal, “Inventory of information and other associated assets”, s. 29–33](https://committee.iso.org/files/live/sites/jtc1sc27/files/resources/ISO-IEC%20JTC%201-SC%2027_N22755_SC27%20Journal%20Vol%202%20Issue%202%20%28update%20Dec%202022%29.pdf).

::: {.notes}
Varlık örnekleri ve öğretim hattı ders notuna dayanır. Yerel envanter alanları, sınıflar, etki ölçütleri ve kurum atamaları eğitim amaçlıdır. ISO bağlantıları 2022 sürümlerinin rolünü ve bilgi ile ilişkili varlıkların birlikte ele alınmasını destekler. SC27 Journal yazısı açıklayıcı uzman makalesidir; normatif standart metni yerine kullanılmaz. Kaynakların eski sürümlerindeki madde veya örnekler güncel zorunluluk diye aktarılmamıştır. Aynı envanter işini başka kurumlar farklı sınıf adları, bağlantılı listeler ve farklı kayıt araçlarıyla yürütebilir.
:::
