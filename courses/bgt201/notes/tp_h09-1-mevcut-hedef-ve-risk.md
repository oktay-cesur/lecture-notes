---
title: "Mevcut Durum, Hedefler ve Riskin Bileşenleri"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-11-17
execute:
  echo: false
---

## Kuralın yazılı olması ile sahada işlemesi aynı şey midir?

Bir kurumda şu kural yürürlüktedir: **"Her iş günü sonunda çalışma masalarındaki tüm evraklar kilitli dolaplara kaldırılır."**

Politika belgesi yönetim tarafından onaylanmış ve personele duyurulmuştur. Akşam saat 19:00'da ofisler gezildiğinde şu durum görülür:

- Üç masada kurum içi yazışmalar açıkta durmaktadır.
- İki dolabın kapağı aralık bırakılmıştır.

**Kural var mıdır? Evet. Peki güvenlik hedefine ulaşılmış mıdır?**

::: {.notes}
Geçtiğimiz haftalarda güvenlik politikalarının, prosedürlerin ve ölçülebilir hedeflerin nasıl tanımlandığını incelemiştik. Yönetim onaylı ve personele duyurulmuş bir politika belgesi, kurumun hangi güvenlik standardını beklediğini ortaya koyar; ancak bir kuralın yazılı olarak yayımlanması, sahada kendiliğinden işlediği ve amacına ulaştığı anlamına gelmez.

Politikanın gerçek bir korumaya dönüşmesi için günlük iş akışında uygulanması ve bu uygulamanın somut gözlem ya da kayıtlarla doğrulanması gerekir. Akşam saat 19:00'da yapılan ofis kontrolünde üç masada kurum içi yazışmaların açıkta kalması ve iki dolap kapağının aralık bırakılması, onaylı kural ile fiilî davranış arasında doğrudan bir uyuşmazlık olduğunu kanıtlar; evraklar yetkisiz erişime açık kaldığı için hedeflenen korumaya ulaşılamamıştır.

Bilgi güvenliği yönetiminde en sık düşülen yanılgılardan biri, klasördeki onaylı belgeyi sahadaki gerçek korumayla bir saymaktır. Yönetim "Kuralımız var" dediğinde, denetçi ya da analist "Uygulandığına dair kanıt nerede?" diye sorar; işte bu soru bizi bir sonraki slaytta tanımlayacağımız fark analizine, yani mevcut durum ile hedeflenen durum arasındaki mesafeyi ölçmeye götürür.
:::

---

## Fark analizi (Gap analizi) nedir?

**Fark analizi (gap analizi)**, belirli bir hedef ölçütünü mevcut durumun kanıtıyla karşılaştırıp aradaki farkı belirleme işidir.

- **Hedef (Olması gereken):** Politika, standart veya yasal düzenlemenin koyduğu ölçülebilir şart.
- **Mevcut durum (Olan):** Sahadan toplanan doğrulanabilir olgu ve kanıtlar.
- **Fark (Gap):** Olması gereken ile olan arasındaki karşılanmamış açıklık.

. . .

> Fark analizi kurumu cezalandırmak için değil, kendi durumunu olay yaşamadan önce tarafsız kanıtlarla görmesi için yapılan bir iç incelemedir.

::: {.notes}
Kurumların güvenlik hedeflerini belirledikten sonra "Şu an neredeyiz?" ve "Nereye varmak istiyorduk?" sorularını kişisel kanaatlerle değil, somut verilerle yanıtlaması gerekir. Fark analizi bir ceza kesme ya da suçlu arama aracı değildir; kurumun bir güvenlik olayı yaşamadan önce kendi durumunu tarafsız bir gözle görmesini sağlayan yapılandırılmış bir iç inceleme yöntemidir.

Analizin sağlıklı çalışabilmesi için karşılaştırmanın iki tarafının da net olması şarttır. Bir yanda politika, standart veya yasal düzenlemeden gelen açık bir hedef ölçütü, diğer yanda sistem günlükleri, imzalı formlar ya da fiziksel gözlem tutanakları gibi sahadan toplanmış gerçek bir kanıt bulunmalıdır; bu iki unsur yan yana konduğunda karşılanmamış kısım fark (gap) olarak belirlenir.

Uygulamada sık yapılan hata, sahadan kanıt toplamadan yalnızca çalışanların sözlü beyanına güvenerek fark olmadığını varsaymak ya da hedef ölçütü netleştirmeden rastgele eksiklik aramaktır. Karşılaştırmanın ilk ayağı olan hedef ölçütü eksik veya belirsiz olduğunda analizin neden yapılamayacağını bir sonraki slaytta inceleyeceğiz.
:::

---

## Ölçüt yoksa fark belirlenebilir mi?

Bir hedef ölçütü açık ve ölçülebilir değilse, mevcut durumun yeterli olup olmadığı söylenemez.

- *"Sistemlerimiz güvenli olsun."* $\rightarrow$ Ölçülebilir bir hedef değildir; ne zaman karşılandığı anlaşılamaz.
- *"Sunucu odasına girişler kartla yapılır ve her giriş sistemde kayıt altına alınır."* $\rightarrow$ Ölçülebilir hedeftir; kayıtlar incelenerek fark doğrudan tespit edilir.

. . .

> Karşılaştırma yapabilmek için soyut niyetlere değil, **doğrulanabilir ölçütlere** ihtiyaç vardır.

::: {.notes}
Geçmiş derslerimizde iyi bir güvenlik hedefinin ölçülebilir olması gerektiğini konuşmuştuk; çünkü ölçülebilirlik yalnızca hedef yazımında değil, o hedefin sahada denetlenmesinde de temel koşuldur. "Bilgilerimizi iyi koruyalım" veya "Sistemlerimiz güvenli olsun" gibi genel temenniler fark analizinde karşılaştırma ölçütü olarak kullanılamaz; iyi korumanın ne olduğu kişiden kişiye değişir.

Doğrulanabilir bir ölçüt; zaman, oran, yöntem veya somut bir uygulama kuralı içermelidir. Örneğin "Yedekler her gece saat 23:00'te alınmalı" dendiğinde ya da sunucu odasına girişlerin kartla yapılıp sistemde kayıt altına alınması şart koşulduğunda elimizde net bir kontrol cetveli vardır. Sistem günlüklerine bakarız: Saat 23:00'te yedek alınmış mı, sunucu odasına kartsız giriş olmuş mu? Kayıtlar incelendiğinde aradaki fark tartışmaya yer bırakmadan tespit edilir.

Sık karşılaşılan bir yanılgı, yazılı ölçüt net olmasa bile analistin kendi tecrübesine dayanarak "Burası yetersiz görünüyor" diyerek fark yazabileceğini düşünmektir; oysa dayanağı olmayan bir tespit kurumsal geçerlilik taşımaz. Ölçütün net olduğu bir durumda kanıtların bize neyi kesin olarak söyleyip neyi söylemediğini bir sonraki slayttaki kütüphane vakasında göreceğiz.
:::

---

## Örnek vaka: Kütüphanede ödünç cihazların sayımı

Bir üniversite kütüphanesinde öğrencilere proje çalışmaları için taşınabilir cihazlar ödünç verilmektedir.

- **Kurum kuralı:** Ödünç verilen cihazlar her teslim alındığında görevli tarafından fiziksel olarak sayılır ve teslim formuna imzalı sayım kaydı düşülür.
- **Mevcut durum (Son 1 ay):** Son beş teslim işleminden üçünde imzalı form mevcuttur; **ikisinde teslim sayım kaydı yoktur**.

**Soru: İki cihaz kayıp mıdır?**

. . .

> Kanıtlanan olgu, **iki sayım kaydının eksikliği**dir; iki cihazın kaybolduğu sonucu bu kanıttan doğrudan çıkarılamaz.

::: {.notes}
Kütüphanedeki ödünç cihaz vakası, fark analizinde "kanıtlanan olgu" ile "henüz kanıtlanmamış şüphe" arasındaki kritik sınırı anlamamızı sağlar. Analist sahada yalnızca elindeki kanıtın doğruladığı kadarını kesin bulgu olarak yazabilir; kanıtın ötesine geçen varsayımlar fark kaydının nesnelliğini bozar.

Son bir aydaki beş teslim işleminin incelenmesi sonucunda üç işlemde imzalı form bulunmuş, ikisinde ise teslim sayım kaydının olmadığı görülmüştür. Elimizdeki bu kanıt bize yalnızca iki işlemde fiziksel sayım ve imza kuralının işletilmediğini kesin olarak gösterir; cihazların çalındığını, kaybolduğunu ya da depoda olmadığını doğrudan söylemez.

Belki cihazlar teslim alınıp depoda rafa kondu ama görevli formu imzalamayı unuttu; belki de gerçekten biri cihazı teslim etmeden ayrıldı. Kanıtlanmış olan olgu kural ile kayıt arasındaki farktır, cihazın fiziki kaybı ise henüz doğrulanmamış bir şüphedir; bu nedenle ne "İki cihaz çalındı" diye aşırı yorum yapılmalı ne de "Sadece imza unutulmuş, cihazlar tamdır" diye rehavete kapılınmalıdır.

Hem kanıtlanan kural eksikliğini hem de henüz bilinmeyen fiziki durumu birbirine karıştırmadan raporlayabilmek için yapılandırılmış bir fark kaydı kullanılır; bir sonraki slaytta bu kaydın temel alanlarını inceleyeceğiz.
:::

---

## Bir fark kaydının temel alanları

Fark analizi havada kalan kişisel yorumlarla değil, yapılandırılmış bir kayıtla yürütülür.

| Alan | Taşıdığı anlam |
|---|---|
| **Hedef / Dayanak** | Hangi kural, politika ya da ölçüt esas alındı? |
| **Mevcut durum / Kanıt** | Sahada fiilen gözlenen olgu ve dayandığı kayıt nedir? |
| **Fark (Gap)** | Hedef ile mevcut durum arasındaki somut eksiklik nedir? |
| **Doğrulanamayan nokta** | Mevcut kanıtın sınırları nerede bitiyor, neyi henüz bilmiyoruz? |
| **İlgili iş sahibi** | Bu süreçten ve kuralın işletilmesinden sorumlu birim/rol kimdir? |

::: {.notes}
Bir fark kaydı açıldığında tablodaki beş alan birbirini tamamlayarak kişisel yorumların önüne geçer. İlk alan karşılaştırmaya esas alınan yazılı kuralın dayanağını koyar, ikinci alan sahada gözlenen olguyu ve incelenen kanıtı belgeler, üçüncü alan ise bu ikisi arasındaki karşılanmamış açıklığı net bir dille tanımlar.

Dördüncü alan olan "Doğrulanamayan nokta", analistin elindeki verinin sınırını çizdiği için büyük önem taşır; mevcut kanıtla neyin henüz bilinemediğini açıkça belirterek araştırmayı doğru yere yönlendirir. Beşinci alan olan "İlgili iş sahibi" ise süreçten ve kuralın işletilmesinden sorumlu birim ya da rolü kayıt altına alır; böylece bulgunun muhatabı ve düzeltmeyi takip edecek sorumlu netleşir.

Çalışmanızda fark kaydı oluştururken en çok dikkat etmeniz gereken nokta, "Mevcut durum / Kanıt" alanına tahmin karıştırmamak ve belirsiz kalan hususları mutlaka "Doğrulanamayan nokta" alanında ayırmaktır. Bu beş alanın kütüphane vakası için nasıl doldurulduğunu bir sonraki slayttaki çözümlü örnekte adım adım göreceğiz.
:::

---

## Çözümlü örnek: Kütüphane sayımının fark kaydı

| Alan | Çözümlü kayıt içeriği |
|---|---|
| **Hedef / Dayanak** | Ödünç Cihaz Prosedürü Md. 4.2: Her teslimde cihaz fiziksel olarak sayılır ve teslim formuna imzalı kayıt düşülür. |
| **Mevcut durum / Kanıt** | Son 1 aydaki 5 teslim işlemine ait formlar incelendi; 3 işlemde imzalı form mevcut, 2 işlemde form doldurulmamış. |
| **Fark (Gap)** | Son 5 teslimin 2'sinde (%40) teslim sayım ve kayıt şartı yerine getirilmemiştir. |
| **Doğrulanamayan nokta** | Sayım formu bulunmayan 2 cihazın depoda eksiksiz bulunup bulunmadığı fiziksel sayım yapılmadığı için doğrulanamamıştır. |
| **İlgili iş sahibi** | Kütüphane Hizmetleri Birim Yöneticisi |

::: {.notes}
Tablodaki çözümlü kayıtta özellikle "Fark (Gap)" satırının nasıl yazıldığına dikkat edin: "İki cihaz kayboldu" denmiyor, "Son 5 teslimin 2'sinde (%40) teslim sayım ve kayıt şartı yerine getirilmemiştir" deniyor. Çünkü incelenen beş teslim formunun doğrulamaya yettiği tek kesin olgu, prosedürün 4.2 maddesindeki sayım ve imza şartının iki işlemde uygulanmadığıdır.

Form incelemesinin yanıtlayamadığı fiziki durum ise "Doğrulanamayan nokta" alanında açıkça ayrılmıştır: Sayım formu bulunmayan iki cihazın depoda eksiksiz durup durmadığı fiziksel sayım yapılmadığı için henüz bilinmemektedir. Böylece ilgili iş sahibi olan Kütüphane Hizmetleri Birim Yöneticisi, kaydı okuduğunda hem kuralın %40 oranında işletilmediğini görür hem de derhal depoda fiziksel sayım yaptırarak cihazların durumunu netleştirmesi gerektiğini anlar.

Bu örnekte dayanak alınan prosedür maddesi "her teslimde" diyerek açık bir ölçüt koyduğu için farkı net bir oranla hesaplayabildik. Peki dayanak metninde böyle açık bir ölçüt yer almıyorsa fark analizi nasıl sonuçlanır? Bir sonraki slaytta bu sınır durumunu inceleyeceğiz.
:::

---

## Sınır durumu: Hedef ölçüt belirsiz olduğunda ne olur?

Aynı kütüphanede ikinci bir durum gözleniyor:

- **Gözlem:** Cihazların yazılım güncellemeleri düzensiz yapılıyor; kimi cihaz iki aydır güncellenmemiş, kimisi dün güncellenmiş.
- **Prosedür metni:** *"Ödünç cihazların yazılımları imkân buldukça güncellenir."*

**Soru: Buradaki farkın büyüklüğü nedir?**

. . .

> Dayanakta açık bir periyot veya ölçüt (örneğin "en geç 15 günde bir") belirtilmediği için **farkın kesin büyüklüğü hesaplanamaz**. Önce kuralın ölçülebilir hale getirilmesi gerekir.

::: {.notes}
Kütüphanedeki ikinci gözlem, fark analizinin en önemli sınırını ortaya koyar. Sahada kimi cihazın dün, kimi cihazın ise iki ay önce güncellendiği görülmektedir; ortada bir düzensizlik olduğu hissedilse de fark analizinde kişisel izlenimlerle büyüklük hesaplanamaz.

Prosedür metni güncellemelerin "imkân buldukça" yapılacağını söylediği için, kütüphane görevlisi "Geçen ay iş yoğunluğundan imkân bulamadım, yazılı kuralı çiğnemedim" diyebilir ve mevcut metin karşısında haklıdır. Dayanakta "en geç 15 günde bir" gibi açık bir periyot veya ölçüt bulunmadığından, iki aylık sürenin bir kural ihlali olup olmadığı ve farkın kesin büyüklüğü saptanamaz.

Ölçütün belirsiz olması fark analizini kilitler; bu durumda doğrudan "Yazılım güncellemeleri eksik" diye fark yazmak yerine, önce prosedürün ölçülebilir bir hedef koymadığı tespit edilmeli ve kural ölçülebilir hale getirilmelidir. Buraya kadar mevcut kurallara uyumu inceleyen fark analizini ele aldık; bir sonraki slayttan itibaren kuralların ötesine geçerek güvenlik olaylarının hedef aldığı bilgi varlığını ve riskin bileşenlerini incelemeye başlıyoruz.
:::

---

## Güvenlik olayları boşlukta gerçekleşmez: Varlık nedir?

**Bilgi varlığı**, kurum için değeri olan, zarar gördüğünde kurumun işini, itibarını ya da yasal uyumunu zedeleyen bilgi ve bu bilgiyi işleyen, saklayan, ileten tüm bileşenlerdir.

- **Bilginin kendisi:** Kursiyer sözleşmeleri, sınav soruları, mali tablolar.
- **Taşıyıcı ve ortam:** Sunucular, dizüstü bilgisayarlar, veritabanları, kâğıt arşivler.
- **Süreç ve hizmetler:** Öğrenci kayıt sistemi, kimlik doğrulama altyapısı, internet erişimi.

. . .

> Bir varlık ve onun kurum için değeri tanımlanmadan güvenlik riskinden söz edilemez.

::: {.notes}
Fark analizinden risk analizine geçerken ilk basamağımız H5 dersinde gördüğümüz "bilgi varlığı" kavramıdır. Tehlikeler, saldırılar ya da arızalar soyut bir boşlukta gerçekleşmez; güvenlikten söz ettiğimiz her an, zarar gördüğünde kurumun işini, itibarını ya da yasal uyumunu zedeleyecek belirli bir varlığı korumaya çalışırız.

Bilgi varlığı yalnızca kursiyer sözleşmeleri, sınav soruları ve mali tablolar gibi bilginin kendisinden ibaret değildir. Bu bilgileri barındıran sunucular, dizüstü bilgisayarlar, veritabanları ve kâğıt arşivler gibi taşıyıcı ortamlar ile bilginin işlenmesini sağlayan öğrenci kayıt sistemi, kimlik doğrulama altyapısı ve internet erişimi gibi süreç ve hizmetler de bilgi varlığı kapsamına girer; çünkü ortam veya hizmet aksadığında bilgiye ulaşmak ve işi sürdürmek imkânsız hale gelir.

Ortada korunmaya değer bir varlık ve onun kurum için tanımlanmış değeri yoksa güvenlik riskinden de söz edilemez; bu nedenle risk senaryosu yazarken ilk iş hangi varlıktan bahsettiğimizi netleştirmektir. Bir sonraki slaytta, risk kaydına yazacağımız bu varlık bilgisinin H5'te oluşturduğumuz varlık envanterinden nasıl beslendiğini göreceğiz.
:::

---

## Risk kaydındaki varlık, envanterden gelir

H5'te kurduğumuz **varlık envanteri**, risk kaydının ilk alanını besler:

| Envanterdeki alan | Risk kaydında nereye gider? |
|---|---|
| Varlık adı ve türü | Risk kaydının "bilgi varlığı" alanı |
| Sahip | Riski sahiplenen ve karar için sorulan kişi |
| Sınıf ve etki (H5) | Etki düzeyinin gerekçesi |
| Bağımlılık | Senaryoda hangi hizmetin etkilendiği |

Envanterde yer almayan bir arşiv sunucusu için risk kaydı yazılabilir mi?

. . .

**Önce envantere alınmalıdır.** Sahibi ve sınıfı bilinmeyen bir varlığın etkisi gerekçelendirilemez.

::: {.notes}
Risk kaydı ve varlık envanteri ayrı belgelerdir, ancak risk kaydı doğrudan envanter verilerine dayanır. H5'te kurduğumuz envanter "Kurumda hangi varlıklar var, kime ait, ne kadar önemli ve neye bağlı?" sorularını yanıtlarken, risk kaydı bu varlıklardan biri için "Ne ters gidebilir ve kuruma ne kadar zarar verir?" sorusunu yanıtlar; tablodaki eşleşmede gördüğümüz gibi envanter satırı risk kaydının varlık, sahip, etki gerekçesi ve etkilenen hizmet alanlarını doğrudan doldurur.

Envanterde yer almayan bir arşiv sunucusu veya veri dizini risk analizinde görünmez ve sahipsiz kalır. Kaydı bulunmayan bir sunucuda sorun çıktığında karar için hangi iş sahibine gidileceği, varlığın kritiklik sınıfının ne olduğu ve hangi hizmetin ona bağımlı çalıştığı bilinemez; bu yüzden sahada envanter dışı bir varlık tespit edildiğinde önce envantere eklenerek sahibi ve sınıfı tanımlanır, ardından risk kaydı yazılır.

Envanter ile risk kaydı arasındaki ilişki iki yönlüdür. Kuruma yeni bir varlık eklendiğinde, mevcut bir varlığın sınıfı değiştiğinde ya da varlık sahibi görevden ayrıldığında ilgili risk kaydı da yeniden gözden geçirilir. Varlığı envanterden alıp risk kaydının başına yerleştirdikten sonra, bu varlığa neyin ve nasıl zarar verebileceğini tanımlamak için bir sonraki slaytta tehdit ve zafiyet kavramlarını ele alacağız.
:::

---

## Tehdit ve zafiyet: Birbirine karışan iki kavram

**Tehdit**, bir bilgi varlığına zarar verme, onu yok etme, bozma ya da yetkisiz kişilere açma potansiyeli taşıyan dış veya iç olay ya da etkendir.

**Zafiyet (açıklık)**, tehdidin varlığa ulaşmasını, etkili olmasını veya zarar vermesini kolaylaştıran sistemsel, fiziksel ya da yönetsel zayıflıktır.

| Kavram | Doğası | Örnek |
|---|---|---|
| **Tehdit** | Dışarıdan veya içeriden gelen olumsuz olay potansiyeli | Şebeke elektriğinin kesilmesi, kötü niyetli yazılım, sel |
| **Zafiyet** | Kurumun kendi yapısındaki zayıflık / korumasızlık | Kesintisiz güç kaynağının (UPS) çalışmaması, parolasız hesap |

::: {.notes}
Tehdit ile zafiyet günlük konuşmada sıkça birbirinin yerine kullanılsa da bilgi güvenliğinde iki ayrı dünyayı anlatır. Bu ayrımı doğru kurmak, kurumun neyi kontrol edebileceğini ve güvenlik önlemlerini nereye yönlendireceğini anlamak açısından temel şarttır.

Tehdit, varlığa zarar verme potansiyeli taşıyan dış veya iç olay ya da etkendir ve çoğu zaman kurumun doğrudan kontrolü dışındadır. Yağmurun yağması ve sel oluşması, şebeke elektriğinin kesilmesi ya da dışarıdaki kötü niyetli yazılımlar birer tehdittir; kurum kendi kararıyla elektrik şebekesinin kesilmesini veya yağmurun yağmasını engelleyemez.

Zafiyet (açıklık) ise kurumun kendi sistemsel, fiziksel ya da yönetsel yapısındaki zayıflık ve korumasızlıktır; doğrudan kurumun sorumluluk alanındadır. Çatının akması, sunucu odasındaki kesintisiz güç kaynağının (UPS) çalışmaması veya sistemde parolasız hesap bırakılması birer zafiyettir; yağmuru ya da şebeke kesintisini durduramayız ama çatıyı onarabilir, UPS'i çalışır tutabilir ve parolasız hesapları kapatabiliriz.

Çalışmanızda senaryo kurarken en çok dikkat etmeniz gereken nokta, dış etkeni zafiyet gibi ya da iç kusuru tehdit gibi yazmamaktır. Güvenlik önlemleri zafiyetleri kapatarak tehditlerin varlığa zarar vermesini engellemeye odaklanır; bir sonraki slaytta varlık, tehdit ve zafiyetin bir araya gelerek bilgi güvenliği riskini nasıl doğurduğunu göreceğiz.
:::

---

## Bilgi güvenliği riski nedir?

**Bilgi güvenliği riski**, belirli bir tehdidin bir veya birden fazla zafiyetten yararlanarak bilgi varlığına zarar verme olasılığı ve bu zararın kurum üzerinde yaratacağı olumsuz sonuçların bütünüdür.

$$ \text{Varlık} + \text{Tehdit} + \text{Zafiyet} \longrightarrow \text{Olasılık ve Etki Değerlendirmesi} \longrightarrow \text{Risk} $$

. . .

- Bir tehdit var ama hedef alabileceği bir zafiyet yoksa $\rightarrow$ **Zarar oluşmaz**.
- Bir zafiyet var ama onu tetikleyecek bir tehdit yoksa $\rightarrow$ **Zarar oluşmaz**.
- İkisi bir araya geldiğinde $\rightarrow$ **Risk doğar**.

::: {.notes}
Bilgi güvenliği riski, varlık üzerinde tehdit ile zafiyetin kesiştiği yerde ortaya çıkar ve hem olayın gerçekleşme olasılığını hem de gerçekleştiğinde kurumda yaratacağı olumsuz etkiyi kapsar. Formüldeki bileşenlerden biri eksik olduğunda zarar oluşmaz; riskten söz edebilmek için değerli bir varlığın yanı sıra onu hedefleyen bir tehdit ve tehdidin yararlanabileceği bir zafiyetin aynı anda bulunması gerekir.

Bu kesişim koşulunu iki sınır durumuyla somutlaştırabiliriz. Çölün ortasında sel tehdidi yoktur; dolayısıyla binanın su yalıtımsız olması (zafiyet) orada bir sel riski üretmez. Tersine, çok şiddetli bir fırtına veya elektrik kesintisi tehdidi varken sunucu odanız sığınak standardında yapılmış ve yedek güç sistemleri eksiksiz çalışıyorsa (hedef alınacak zafiyet yoksa), tehdit gerçekleşse bile zarar oluşmaz ve risk yönetilmiş olur.

Riski değerlendirirken yalnızca "Olur mu?" (olasılık) sorusuna ya da yalnızca "Ne kadar zarar verir?" (etki) sorusuna bakmak yetmez; her iki boyutun birlikte tartılması gerekir. Bu değerlendirmenin nitel analiz matrisine nasıl taşınacağını bu haftanın ikinci dersinde göreceğiz; öncesinde bir sonraki slaytta tehdit ve zafiyet birleşiminin teknik olaydan kurumsal iş sonucuna nasıl uzandığını nedensel zincir şeması üzerinde inceleyeceğiz.
:::

---

## Nedensel zincir: Olay → CIA kaybı → İş sonucu

Bir risk senaryosu, teknik bir olgudan kurumun iş amacına uzanan bir zincirdir:

```
[Tehdit: Şebeke elektriğinin kesilmesi]
         +
[Zafiyet: Sunucu odasındaki kesintisiz güç kaynağının (UPS) arızalı olması]
         ↓
[Olay: Sunucuların aniden kapanması ve veritabanının kilitlenmesi]
         ↓
[CIA Kaybı: Kursiyer başvuru sistemine erişilememesi (Erişilebilirlik)]
         ↓
[İş Sonucu: Kayıt merkezinde işlemlerin 4 saat durması, 120 adayın işlem yapamaması]
```

::: {.notes}
Tam bir risk senaryosu kurabilmek için teknik bir arızadan kurumun faaliyet amacına uzanan nedensel zinciri eksiksiz izlememiz gerekir. Şema yukarıdan aşağıya doğru beş ardışık basamakta okunur: En üstte tehdit ile zafiyetin birleşimi yer alır, bu birleşim üçüncü basamakta somut olayı doğurur, dördüncü basamakta olayın bilgi güvenliği niteliklerinde (gizlilik, bütünlük, erişilebilirlik) yol açtığı CIA kaybı belirlenir ve en altta kurumun operasyonunda ortaya çıkan iş sonucuna ulaşılır.

Bu basamakların ayrı ayrı kurulmasının gövdede yer almayan temel gerekçesi, kurum içindeki farklı rollerin aynı senaryodan farklı bilgiler çıkarmasıdır. Üstteki tehdit ve zafiyet basamakları teknik uygulayıcıya hangi açığın kapatılması gerektiğini gösterirken, ortadaki olay ve CIA kaybı güvenlik analistinin etki türünü sınıflandırmasını sağlar; en alttaki iş sonucu ise teknik ayrıntılarla ilgilenmeyen iş sahibine ve karar yetkilisine riskin kuruma ne kaybettireceğini somut olarak anlatır.

Şemadaki örneği yukarıdan aşağıya adım adım takip edelim. İlk iki kutuda şebeke elektriğinin kesilmesi (tehdit) ile sunucu odasındaki UPS'in arızalı olması (zafiyet) bir araya gelir; eğer UPS sağlam olsaydı elektrik kesildiğinde devreye girecek ve zincir daha üçüncü basamağa inmeden kesilecekti. UPS çalışmadığı için üçüncü basamakta sunucular aniden kapanır ve veritabanı kilitlenir (olay); bu teknik kapanma dördüncü basamakta kursiyer başvuru sistemine erişilememesiyle erişilebilirlik kaybına (CIA kaybı) dönüşür ve nihayet en alt basamakta kayıt merkezinde işlemlerin 4 saat durması ve 120 adayın işlem yapamaması (iş sonucu) olarak kurumun işini vurur.

Bu şemayı okurken ve kendi senaryolarınızı yazarken sık yapılan hata, zinciri üçüncü basamakta bırakıp yalnızca "Sunucular kapanır" demek ya da basamakları birbirine karıştırıp "UPS arızası erişilebilirlik kaybıdır" diye yazmaktır. Oysa UPS arızası yalnızca bir zafiyettir; erişilebilirlik kaybı ve 4 saatlik iş durması ise ancak tehdit bu zafiyeti tetikleyip olay gerçekleştiğinde ortaya çıkan sonuçlardır.

Nedensel zincirin halkalarından biri eksik bırakıldığında riskin olasılığı ve etkisi doğru tartılamaz. Bir sonraki slaytta, teknik raporlarda sıkça gördüğümüz "yalnızca zafiyeti yazıp bırakma" alışkanlığının neden eksik kaldığını bu zincir üzerinden sorgulayacağız.
:::

---

## Yalnızca zafiyeti adlandırmak neden tam bir risk senaryosu değildir?

Bir kurumun teknik raporunda şu ifade yer alıyor:

> *"Sunucularda işletim sistemi güvenlik yamaları 3 aydır uygulanmamış."*

**Bu ifade tam bir risk senaryosu mudur?**

. . .

- **Eksik 1 — Hangi varlık?** İnternete açık web sunucusu mu, kapalı arşiv sunucusu mu?
- **Eksik 2 — Hangi tehdit?** Dışarıdan otomatik tarama yapan saldırgan mı, yerel ağdaki kullanıcı mı?
- **Eksik 3 — Hangi CIA kaybı ve iş sonucu?** Verilerin sızması (Gizlilik) mı, sistemin çökmesi (Erişilebilirlik) mi?

> Zafiyeti tek başına söylemek, ne olasılığı ne de etkiyi doğru değerlendirmeye yeter.

::: {.notes}
Teknik ekipler ve tarama raporları genellikle "Yama 3 aydır uygulanmamış", "Port açık" veya "Parola zayıf" gibi zafiyet odaklı ifadeler kullanır. Bu ifadeler doğru birer zayıflık tespitidir, ancak önceki slaytta incelediğimiz nedensel zincirin diğer bileşenlerini içermedikleri için tam bir risk senaryosu oluşturmazlar.

Yalnızca zafiyeti bilmenin neden yetmediğini görmek için iki farklı varlığı karşılaştıralım. İnternete kapalı, hiçbir dış ağ bağlantısı olmayan izole bir arşiv sunucusundaki 3 aylık yama eksikliği ile doğrudan internete açık bir web sunucusundaki aynı yama eksikliğinin riski aynı değildir; ilkinde dışarıdan otomatik tarama yapan bir saldırganın (tehdit) sunucuya ulaşma olasılığı çok düşükken, ikincisinde hem saldırı olasılığı hem de verilerin sızması (gizlilik) ya da sistemin çökmesi (erişilebilirlik) üzerinden doğacak iş kaybı çok yüksektir.

Varlık, tehdit, CIA kaybı ve iş sonucu tanımlanmadan yalnızca zafiyeti sıralamak, karar yetkilisinin hangi soruna öncelik vereceğini ve ne kadar kaynak ayıracağını görmesini engeller. Buraya kadar fark analizini ve risk senaryosunun bileşenlerini ayrı ayrı inceledik; bir sonraki slaytta bu iki yaklaşımı temel boyutlarıyla yan yana karşılaştıracağız.
:::

---

## Fark ile risk aynı soru mudur?

| Karşılaştırma boyutu | Fark analizi (Gap) | Risk değerlendirmesi |
|---|---|---|
| **Temel soru** | *"Bugün belirlenen kurala uyuluyor mu?"* | *"Yarın ne olabilir, olursa ne kadar zarar verir?"* |
| **Zaman odağı** | **Şimdiki zaman / Geçmiş:** İncelenen kanıtın tarihi | **Gelecek:** Olası olaylar ve senaryolar |
| **Dayanak** | Yazılı kural/ölçüt ile mevcut kanıtın karşılaştırılması | Tehdit, zafiyet, olasılık ve etki değerlendirmesi |
| **Temel çıktı** | **Fark kaydı:** Kural ile uygulama arasındaki açıklık | **Risk kaydı:** Olası zarar büyüklüğü ve tedbir ihtiyacı |

::: {.notes}
Dersimizin en temel kazanımlarından biri, fark analizi (gap analizi) ile risk değerlendirmesini birbirinden net biçimde ayırmaktır. Tabloyu dört karşılaştırma boyutu üzerinden okuduğumuzda, her iki çalışmanın da kurumu güçlendirmeye hizmet ettiğini ancak sordukları temel sorunun, baktıkları zaman diliminin, dayanaklarının ve ürettikleri kayıtların birbirinden farklı olduğunu görüyoruz.

Fark analizi şimdiki zamana ve geçmişteki kanıtlara odaklanan bir durum tespitidir: Elinize yazılı ölçütü (cetveli) alıp duvara koyarsınız; olması gereken yükseklik 2 metre iken mevcut duvar 1,80 metre çıkmışsa aradaki fark 20 santimetredir ve bu açıklık fark kaydına yazılır. Risk değerlendirmesi ise geleceğe bakar: "Duvar 1,80 metre olduğu için dışarıdan biri içeri atlayabilir mi, atlarsa içerideki kasaya ulaşabilir mi, ulaşırsa kurum ne kaybeder?" sorularını tehdit, zafiyet, olasılık ve etki üzerinden tartarak risk kaydına dönüştürür.

Uygulamada sık yapılan hata, fark kaydındaki her eksikliği doğrudan gerçekleşmiş bir zarar veya yüksek risk sanmak ya da gelecekteki bir tehlike senaryosunu bugünkü kural ihlaliyle karıştırmaktır. Fark analizi kural ile uygulama arasındaki açıklığı belgeler; risk değerlendirmesi ise o açıklığın (veya kural dışı başka zafiyetlerin) doğurabileceği tehlike senaryolarını ve olası zarar büyüklüğünü hesaplar.

Çoğu zaman bir yerde fark varsa orada risk de olduğu düşünülür; peki bir kurumda kurallara tam uyuluyor ve fark sıfır çıkıyorsa risk de sıfırlanmış olur mu? Bir sonraki slaytta bu ayrımı pekiştiren karşı örneği inceleyeceğiz.
:::

---

## Karşı örnek: Kural tam işlerken risk devam edebilir mi?

Bir kurumun yedekleme kuralı şöyledir:

> *"Tüm veritabanı yedekleri her gece saat 01:00'de bulut depolama alanına tam olarak aktarılır."*

- **Kanıt:** Son 30 günün yedekleme kayıtları incelendi; 30/30 başarılı. **Fark analizi sonucu: Fark yok (Gap = 0).**

. . .

**Peki bu sistemde risk sıfır mıdır?**

. . .

- Bulut servis sağlayıcısı küresel bir kesinti yaşarsa ne olur? (Dış tehdit)
- Yedekten geri yükleme (restore) hiç test edilmediyse ve veriler bozuk yedeklendiyse ne olur? (Zafiyet)

> Kuralın karşılanması (farkın olmaması), olası tüm risklerin ortadan kalktığı anlamına gelmez.

::: {.notes}
Yedekleme örneği, fark ile risk arasındaki ayrımı somutlaştıran çok önemli bir karşı örnektir. Kurumda "Tüm veritabanı yedekleri her gece saat 01:00'de bulut depolama alanına tam olarak aktarılır" kuralı yürürlüktedir ve son 30 günün kayıtları incelendiğinde 30 işlemin tamamının başarılı olduğu kanıtlanmıştır; dolayısıyla fark analizi yaptığımızda kural ile uygulama arasında hiçbir açıklık yoktur (Gap = 0).

Fakat farkın sıfır çıkması, risk analistinin soracağı soruları bitirmez; çünkü mevcut kural tüm tehdit ve zafiyetleri kapsamıyor olabilir. Örneğin yedekler her gece buluta yazılıyor ama yedekten geri yükleme (restore) hiç test edilmediyse ve dosyalar bozuk yedeklendiyse (zafiyet), ana veritabanı çöktüğünde yedekler işe yaramayacaktır. Benzer şekilde kurum dışındaki bulut servis sağlayıcısının küresel bir kesinti yaşaması (dış tehdit), yedekleme kuralına tam uyulmuş olsa bile ihtiyaç anında verilere erişilememesi riskini doğurur.

Yönetimde en tehlikeli yanılgılardan biri, fark analizinde "tam uyum / sıfır fark" sonucunu görünce kurumda hiçbir güvenlik riski kalmadığını varsaymaktır; oysa kuralın karşılanması yalnızca mevcut ölçütün işletildiğini kanıtlar, kuralın öngörmediği riskleri ortadan kaldırmaz. Şimdi bu ders boyunca öğrendiğimiz fark ve risk kavramlarını bağımsız olarak uygulamak üzere son slayttaki değerlendirme vakasına geçelim.
:::

---

## Kısa değerlendirme: Farkı ve riski ayırabilir misiniz?

Bir eğitim kurumunda şu durum tespit ediliyor:

- **Kurum Bilgi Güvenliği Politikası:** İşten ayrılan personelin sistem hesapları ve öğrenci kayıt sistemine erişim yetkileri, ayrılış günü mesai bitimine kadar kapatılır.
- **Mevcut Durum / Kanıt:** Sözleşmesi bitip kurumdan ayrılan iki personelin sisteme giriş hesapları, işten ayrılmalarının üzerinden 10 gün geçmesine rağmen kapatılmamış ve aktif kalmıştır.

**Aşağıdaki iki soruyu birbirinden bağımsız olarak yanıtlayın:**

1. **Tespit edilen fark nedir?** (Hangi kural veya ölçüt ile hangi mevcut kanıt karşılaştırılmıştır?)
2. **Olası risk nedir?** (Hangi varlık, hangi tehdit ve zafiyetle hangi CIA kaybına uğrayabilir?)

::: {.notes}
Dersin sonunda yer alan bu vaka, bu saatte öğrendiğimiz fark analizi ve risk bileşenlerini bir araya getiren bağımsız bir uygulama çalışmasıdır. Gövdedeki olay metnini okurken iki soruyu birbirinden tamamen ayırarak yanıtlamaya dikkat edin: Birinci soru mevcut kural ile saha kanıtının karşılaştırmasını, ikinci soru ise bu durumun gelecekte doğurabileceği zarar senaryosunu ister.

Birinci soruyu yanıtlarken, politikadaki "işten ayrılan personelin hesaplarının ayrılış günü mesai bitimine kadar kapatılması" hedef ölçütü ile "ayrılan iki personelin hesabının 10 gün geçmesine rağmen aktif kalması" kanıtını karşılaştırarak aradaki kural uyumsuzluğunu (farkı) yazıyoruz. İkinci soruyu yanıtlarken ise öğrenci kayıt sistemini (varlık) merkeze alarak, ayrılan personelin veya hesabı ele geçiren yetkisiz bir kişinin (tehdit) 10 gündür kapatılmamış aktif hesaptan (zafiyet) yararlanıp sisteme girmesi sonucunda öğrenci verilerinin sızması (gizlilik), değiştirilmesi (bütünlük) ya da hizmetin aksaması (erişilebilirlik) zincirini kuruyoruz.

Çalışmanızda kendi yanıtınızı kontrol ederken birinci soruya "Eski personel içerideki bilgileri çalabilir" gibi henüz kanıtlanmamış bir gelecek senaryosu yazmamaya, ikinci soruda ise yalnızca "Hesaplar 10 gündür açık" diyerek zafiyeti tekrar etmekle yetinmeyip varlık, tehdit ve CIA kaybını tam kurmaya özen gösterin. Bu haftanın ikinci dersinde, burada kurduğumuz risk senaryolarının olasılık ve etki düzeylerini nitel 3×3 risk matrisi üzerinde nasıl derecelendireceğimizi ve kabul ölçütleriyle nasıl karara bağlayacağımızı inceleyeceğiz.
:::
