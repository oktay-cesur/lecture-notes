---
title: "Politika, Prosedür, Talimat, Form ve Kayıt: Belge Metnini Okumak"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I · Hafta 8 · Teori 1"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-11-11
execute:
  echo: false
---

## Bir karar yazıldıktan sonra üç soru açık kalır

Bir kurum şu kararı aldı: **Kurum hesaplarında parola en az 12 karakter olsun.**

Karara üç kişi bakıyor: parolasını belirleyecek çalışan, hesabı açan BT uzmanı ve kuralı onaylayan yönetici. Üçünün sorusu aynı mı?

. . .

- Çalışan: parolamı nasıl belirleyeceğim?
- BT uzmanı: hesabı kimin talebiyle, hangi sırayla açacağım?
- Yönetici: karar değişirse neyi değiştirmem gerekir?

::: {.notes}
Karar tek cümle ama ona bakan her kişi başka bir şey öğrenmek istiyor. Çalışan kendi yapacağı işin adımlarını arıyor. BT uzmanı birden fazla kişinin bulunduğu bir sıranın içinde kendi yerini ve onay koşulunu arıyor. Yönetici ise kararın bağlı olduğu diğer belgeleri ve karar değiştiğinde nelerin etkileneceğini bilmek istiyor.

Kurumlar bu farklı ihtiyaçları işlevi farklı belgelerle karşılar. Politika herkesin uyacağı üst kuralı koyar; prosedür sürecin hangi rollerle ve hangi sırayla yürütüleceğini, talimat ise işin yapılma ayrıntılarını açıklar. Form süreç işletilirken toplanacak bilgiyi şablon olarak tanımlar, kayıt ise gerçekleşmiş işin kanıt izini taşır.

Güvenlik kararını tek bir cümle olarak yazmanın işi bitirdiği düşünülürse uygulamada belirsizlik çıkar. Kuralın yanına süreç akışı, uygulama adımı ve kanıt düzeni konmadığında ya herkes kuralı kendi bildiği gibi uygular ya da bütün bu farklı işler tek bir metnin içine sıkıştırılır. Bir sonraki slaytta dört farklı işin aynı paragrafta toplandığında nasıl bir karışıklık doğduğunu göreceğiz.
:::

---

## Bir paragrafta kaç ayrı iş var?

Bir kurumun parola notundan:

> Hesaplarda parola en az 12 karakter olur. Yeni hesap talebini birim yöneticisi onaylar, BT hesabı açar. Geçici parolanı ilk girişte değiştir. 4 Mart'ta muhasebeden Selin için hesap açıldı.

Dört cümleyi sırayla okuyun: her biri kime ne söylüyor?

. . .

1. Herkes için **üst kural**.
2. Birkaç rolün **sırayla yaptığı iş akışı**.
3. Tek bir kişiye **iş talimatı**.
4. Gerçekleşmiş bir işin **kaydı**.

::: {.notes}
Dört cümle aynı konudan söz ediyor ama okuyucuları, ömürleri ve değişme nedenleri farklı. İlk cümle yönetimin kararıdır; yönetim fikrini değiştirmedikçe aynı kalır. İkinci cümle iki rolün sırasını anlatır: BT'nin onay gelmeden hesap açmaması bu sıraya bağlıdır. Üçüncü cümle yalnız yeni çalışana seslenir ve yapacağı tek işi söyler. Dördüncü cümle kural değildir; 4 Mart'ta bir şeyin olduğunu bildirir.

Dördü aynı paragrafta durursa sorun çıkar. Kural değiştiğinde paragrafın tamamı yeniden yazılır, çalışan kendisini ilgilendirmeyen onay sırasını okumak zorunda kalır ve geçmişte olmuş bir olay, her yeni sürümde güncellenmesi gereken bir metne karışır. Ayrı belgelerin nedeni budur: her belge tek bir işi taşır ve kendi hızında değişir.

Bir metni incelerken cümlenin konusuna ("parola" ya da "hesap") bakmak yanıltıcıdır; asıl ölçüt cümlenin yaptığı iş ve seslendiği roldür. Aynı konudaki dört cümle dört ayrı belge türüne dağılır. Şimdi bu belge türlerinin ilkinden, yani üst kuralı koyan politikadan başlayarak her birinin sınırını tek tek ele alacağız.
:::

---

## Politika, kuralı koyar

**Politika**, yönetimin güvenlik yönünü ve herkesin uyacağı üst kuralı koyan, yönetim onayıyla yürürlüğe giren belgedir.

Örnek hüküm:

> Kurumun bilgi varlıklarının yedekleri, kaynak sistemden ayrı bir ortamda saklanır.

Politika "ne olacak"ı söyler. Kimin hangi sırayla yapacağını söylemez.

::: {.notes}
Politikanın gücü kısa olmasından ve bir karar vermiş olmasından gelir. Yukarıdaki hüküm yedeğin hangi programla, günün hangi saatinde alınacağını anlatmaz; bunlar başka belgelerin işidir. Politikaya ayrıntı doldurulursa yönetim kararı ile uygulama ayrıntısı birbirine karışır ve küçük bir teknik değişiklik için üst yönetimin onayı gerekir hâle gelir.

Politika üst kural olduğu için diğer belgeler ona bağlıdır. Bir prosedür ya da talimat politikaya aykırı bir şey söylüyorsa hata politikada değil, o belgededir. Belgeleri karşılaştırırken politika bu yüzden ölçüt olarak alınır: diğer metinlerin ona uyup uymadığı sorulur.

Örnek hükme dikkat edersek "kaynak sistemden ayrı bir ortamda saklanır" ifadesi bağlayıcı sınırı çizer; yedeğin aynı sunucu üzerindeki başka bir klasörde tutulması bu hükmü karşılamaz. Bir politika hükmünün neye izin verip neyi kapattığını hatasız okumak için cümleyi bileşenlerine ayırmak gerekir; bir sonraki slaytta bunu adım adım yapacağız.
:::

---

## Bir hüküm cümlesi parçalarına ayrılır

> Kurumun e-posta sistemine yalnız iki adımlı doğrulaması açık hesaplarla girilir.

| Hükümden parça | Ne söylüyor? |
|---|---|
| e-posta sistemine | Korunan erişim |
| yalnız | Sınır: başka yol yok |
| iki adımlı doğrulaması açık | Koşul: **hesabın durumu** |
| hesaplarla | Erişimin yapıldığı araç |

İki adımlı doğrulaması kapalı olan yönetici hesabı bu hükme göre girebilir mi?

. . .

**Giremez.** Hesabın yönetici olması bir koşul değildir; hükmün aradığı tek şey doğrulamanın açık olmasıdır.

::: {.notes}
Bir hükmü okurken önce hangi koşulların bulunduğuna, sonra bulunmayanlara bakılır. Bu hükümde tek koşul var ve cümlede unvan, birim ya da hesabın sahibi hakkında hiçbir şey yazmıyor. Bu yüzden "yönetici olduğuna göre bir istisna olabilir" yorumu metinden çıkmaz.

Koşul birden fazlaysa "ve" ya da "veya" bağlacı belirleyicidir: "ve" ile bağlanan koşulların hepsi sağlanmalıdır, "veya" ile bağlananlardan biri yeter. "Yalnız" sözcüğü ise yazılanın dışında kalan bütün yolları kapatır. Bu üç işaret, bir hükmün neye izin verdiğini ve neye vermediğini söyler.

Hükümleri okurken sık yapılan bir hata, cümlede yazmayan bir özelliği varsaymak ya da yakın kavramları birbirinin yerine kullanmaktır. Koşul "hesabın durumu" iken kişinin unvanına bakmak nasıl yanlışsa, cihaza ilişkin hükümlerde sahiplik, kayıt ve yönetim durumlarını birbirine karıştırmak da aynı ölçüde hatalı sonuç üretir; bir sonraki slaytta bu üç kavramı karşılaştıracağız.
:::

---

## Sahiplik, kayıt durumu ve yönetim durumu farklı sorulardır

Bir kurum şu hükmü yazmış olsun: *Sevkiyat sistemine yalnız kurum envanterinde kayıtlı ve yönetilen cihazlardan erişilir.*

**Sahiplik**, cihazın kime ait olduğudur (kurum ya da çalışan).

**Kayıt durumu**, cihazın kimliğiyle kurum envanterinde yazılı olup olmadığıdır.

**Yönetim durumu**, BT'nin cihazın güvenlik ayarlarını belirleyebildiği ve gerektiğinde erişimini kapatabildiği durumdur.

| Cihaz | Sahibi | Envanterde kayıtlı | Yönetilen |
|---|---|---|---|
| A | Kurum | Evet | Evet |
| B | Çalışan | Evet | Evet |
| C | Çalışan | Hayır | Hayır |
| D | Kurum | Hayır | Hayır |

Hükmün şartını hangi cihazlar karşılar?

. . .

**A ve B yazılı iki koşulu karşılar.** C ve D karşılamaz. Bu koşulları sağlamak, başka bir onay aranmadan erişim izni verildiği anlamına gelmez.

::: {.notes}
D cihazı kurumundur ama envanterde yoktur ve BT onu yönetmez; hükmün şartını karşılamaz. B cihazı çalışanındır ama kayıtlı ve yönetilir; yazılı iki koşulu sağlar. Gerekçe güvenlik tarafında görünür: kurum, kaybolan bir cihazın erişimini kapatabilmek ve hangi cihazdan kimin eriştiğini bilmek istiyor. Bu iki yetenek cihazın kime ait olduğundan çok kayıt ve yönetim durumuna bağlıdır.

Hükümde "kurum cihazı" diye bir koşul yok; buna rağmen kayıtlı ve yönetilen her cihaza otomatik erişim hakkı da verilmiyor. "Kişisel telefon kullanılmaz" biçimindeki ek kısıt, yazılı iki koşulu ihlal etmez; bu kısıtı koyanın yetkili olup olmadığı ayrıca değerlendirilir. Buna karşılık kayıtsız veya yönetilmeyen bir cihaza erişim izni veren alt hüküm, üst koşulla çelişir.

Belgeleri incelerken üçüncü bir durum da çıkar: cihaz hakkında hiçbir bilgi yoktur. O zaman cihazın kayıtsız olduğunu da kayıtlı olduğunu da söyleyemeyiz. Eksik bilgi, "hayır" cevabı değildir.

Politika hükmü hangi koşulun sağlanması gerektiğini söyler; ancak bu koşulun kim tarafından, hangi sırayla ve neye bakılarak kontrol edileceğini açıklamaz. Üst kuralın işleyişte nasıl yürütüleceğini görmek için politikadan prosedüre geçmemiz gerekir.
:::

---

## Prosedür, sürecin nasıl yürütüleceğini yazar

**Prosedür**, bir faaliyetin veya sürecin nasıl yürütüleceğini, sorumluluklarını, adım sırasını ve gerekli onay ve kontrolleri açıklayan belgedir.

Bir prosedür adımı dört şeyi taşır:

- **Rol:** Kim yapıyor?
- **Eylem:** Ne yapıyor?
- **Dayanak:** Neye bakarak karar veriyor?
- **Çıktı:** Geriye hangi iz kalıyor?

::: {.notes}
Prosedür bir veya birden fazla rolün yürüttüğü süreci açıklayabilir. Birden fazla rol varsa geçişlerde kimin neyi alıp neyi bıraktığı belli olmalıdır; aksi hâlde adım eksik kalır. "Onaylanır" gibi özne belirtmeyen cümleler bu yüzden zayıftır; kimin onayladığı yazılmazsa iş sahipsiz kalır.

Dayanak ve çıktı alanları da önemlidir. Bir adım "bilgiyi doğrular" diyorsa neye bakarak doğruladığı (personel kaydı, envanter gibi) ve doğrulamanın nerede görüneceği yazılmalıdır. Çıktısı olmayan adımın yapılıp yapılmadığı sonradan anlaşılamaz.

Görev ayrılığı ilkesi gereği prosedürde talebi hazırlayan, iş açısından onaylayan ve teknik olarak uygulayan roller birbirinden ayrılır. Bir sonraki slaytta bu dört bileşenin gerçek bir hesap açma prosedüründe nasıl tabloya yerleştiğini ve her adımın bir sonrakine nasıl bağlandığını göreceğiz.
:::

---

## Hesap açma prosedüründen bir parça

Karar: **Yeni çalışanın hesabı, görevi doğrulandıktan ve yöneticisi onayladıktan sonra açılır.**

| Sıra | Rol | Eylem | Dayanak | Çıktı |
|---|---|---|---|---|
| 1 | Birim yöneticisi | Hesap talebini iş gerekçesiyle yazar | Yeni çalışanın görevi | Talep |
| 2 | İnsan Kaynakları | İşe başlama tarihini ve birimi doğrular | Personel kaydı | Doğrulama notu |
| 3 | BT | Talep ve doğrulama notu birlikte varsa hesabı açar | Onaylı talep, doğrulama notu | Hesap açma kaydı |
| 4 | BT | Hesabın açıldığını yöneticiye bildirir | Hesap açma kaydı | Sonuç bildirimi |

::: {.notes}
Üç rol var ve her adımın bir çıktısı var. Üçüncü adım iki girdiye bağlanmıştır: BT, talep ve doğrulama notu yoksa hesabı açmaz. Böylece "onay gelmeden uygulama" durumu prosedürün kendisinde kapatılır. Çıktılar yazılmasaydı hesabın hangi talebe dayanarak açıldığı sonradan söylenemezdi.

Tabloyu yukarıdan aşağıya okuduğumuzda bir adımın çıktısının sonraki adımın dayanağına dönüştüğünü görüyoruz. Birinci adımdaki talep ile ikinci adımdaki doğrulama notu birlikte üçüncü adımda BT'nin dayanağını oluşturur; üçüncü adımın çıktısı olan hesap açma kaydı ise dördüncü adımdaki bildirime dayanak olur. Bu zincirde ikinci adım atlansaydı, henüz işe başlamamış veya başka bir birime atanmış bir kişi için yalnız yönetici talebiyle hesap açılması riski doğardı.

Prosedürün çalışana "parolanı nasıl belirleyeceğini" söylemediğine dikkat edin. Bu, çalışanın kendi başına yaptığı işin ayrıntısıdır ve talimatın konusudur. Prosedür rolleri ve sırayı taşır; bir sonraki slaytta işin yapılma ayrıntısını veren talimata geçeceğiz.
:::

---

## Talimat, işin yapılma ayrıntılarını açıklar

**Talimat**, belirli bir işin nasıl yapılacağını uygulanabilir ayrıntılı adımlarla anlatan belgedir.

İyi bir talimat adımı:

- Sorumlu açık: adımı kimin yapacağını belirtir.
- Görünür eylem: kişinin yapıp kontrol edebileceği bir şeydir.
- Durma koşulu: ne olursa işlemi bırakıp kime haber vereceğini söyler.

::: {.notes}
Talimat, işin başındaki kişinin uygulayabileceği ayrıntıyı verir. Tek kişinin yaptığı bir işe veya birlikte çalışan kişilerin görevlerine yönelik olabilir; her adımın sorumlusu açık kalmalıdır. Yeni çalışan örneği tek kişiye yöneliktir. Sürecin genel akışı prosedürde, o akıştaki işin yapılma ayrıntıları talimatta bulunur.

Talimatta ekran, menü ya da düğme adı ancak o ekran gerçekten biliniyorsa yazılır. Olmayan bir yeri arayan kişi talimata güvenini kaybeder. Bu yüzden kişinin yapıp doğrulayabileceği eylemler yazılır: giriş yap, parolayı değiştir, uzunluğunu say, ara.

Durma koşulu, talimatın güvenlik açısından en kritik parçalarından biridir. İşlem beklenen şekilde gitmediğinde uygulayıcının deneme-yanılma yoluyla sistemi zorlamasını veya güvensiz bir kestirme yol aramasını önler. Bir sonraki slaytta bu üç özelliğin yeni çalışan için yazılmış ilk giriş talimatında nasıl somutlaştığını inceleyeceğiz.
:::

---

## Yeni çalışan için ilk giriş talimatı

**Hesabını ilk kez kullanırken yapacakların**

1. BT'nin sana ilettiği geçici parolayla hesabına giriş yap.
2. Parolanı değiştir ve yeni parolanın en az 12 karakter olduğunu say.
3. Giriş yapamazsan denemeyi bırak ve BT'yi ara.

*Ait olduğu prosedür: hesap açma prosedürü.*

::: {.notes}
Her adım bir kişinin yapabileceği somut bir eylem. İkinci adımdaki "say" sözü kuralı kişinin kendi kontrol edebileceği bir işe çevirir: 12 karakter politikanın koşuludur, talimatta ise sayılabilir bir adım olur. Üçüncü adım durma koşuludur. Bu adım yoksa giriş yapamayan çalışan kendi çözümünü üretir; başkasının hesabını ya da eski bir parolayı denemek bunlardan biri olabilir.

Talimatta hesap açma onayı, BT'nin kaydı ya da politikanın gerekçesi yer almaz. Bunlar prosedürün ve politikanın işidir; talimat yalnız çalışanın kendi işini taşır.

Alt satırdaki "Ait olduğu prosedür: hesap açma prosedürü" bilgisi, talimatın tek başına boşlukta durmadığını ve hangi sürecin parçası olduğunu gösterir. Hesap açma süreci ya da parola kuralı değiştiğinde hangi talimatın gözden geçirileceği bu bağ sayesinde anlaşılır. Bir sonraki slaytta prosedür ile talimatı yan yana koyarak iki belge türünü ayıran ölçütleri karşılaştıracağız.
:::

---

## Aynı iş, iki belge

| Soru | Prosedür | Talimat |
|---|---|---|
| Kim okur? | Süreci yürüten ve yönetenler | İşi uygulayanlar |
| Ne anlatır? | Sürecin yürütülüşü, sorumluluk ve kontroller | İşin ayrıntılı uygulama adımları |
| Çıktısı | Her adımda iz | Kişinin işi tamamlaması |
| Değişme nedeni | Roller ya da sıra değişti | İşin yapılış yolu değişti |
| Yanlışsa | Onay ya da kontrol atlanır | Kişi işi yanlış yapar |

::: {.notes}
Ayırıcı ölçüt kişi sayısı değil, belgenin taşıdığı işlev ve ayrıntı düzeyidir. Bir kişi bütün süreci yürütebilir; prosedür yine sürecin sırasını ve kontrollerini açıklar. Bir iş birlikte yapılıyorsa talimat ilgili kişilerin uygulama adımlarını ayrıntılandırabilir.

Tablodaki "Değişme nedeni" satırı iki belgenin neden ayrı tutulduğunu açıklar. Örneğin kurumda hesap açma doğrulaması veya onay sırası değiştiğinde süreç akışı değişmiş olur; bu durumda prosedür güncellenir ama çalışanın ilk girişte parolasını değiştirme talimatı aynı kalır. Tersine, parolanın değiştirildiği ekran veya uygulama adımı değiştiğinde yalnız talimat güncellenir; onay sırasını anlatan prosedüre dokunulmaz.

"Yanlışsa" satırı ise iki belgedeki eksikliğin doğurduğu farklı riskleri gösterir. Prosedür hatalı kurgulanmışsa onay veya doğrulama kontrolü atlanır ve yetkisiz bir işlem gerçekleşebilir. Talimat hatalıysa onaylar tam olsa bile uygulayıcı adımı yanlış yapar ya da hata anında ne zaman duracağını bilemez.

Bir cümlenin hangi belgeye ait olduğuna karar verirken dört soru işe yarar: Cümle herkes için bir kural mı koyuyor? Bir sürecin yürütülüşünü ve kontrollerini mi veriyor? Bir işin nasıl yapılacağını ayrıntılandırıyor mu? Geçmişte olmuş bir şeyi mi anlatıyor? Sonuncusuna "evet" cevabı veriliyorsa cümle bir kayda aittir; bir sonraki slaytta form ile kayıt arasındaki ayrımı ele alacağız.
:::

---

## Form şablondur, kayıt gerçekleşenin izidir

**Form**, bir süreç işletilirken toplanması gereken veri ve onay alanlarını taşıyan boş şablondur.

**Kayıt**, bir işlem hakkında kimin, ne zaman ve hangi veriyle iz bıraktığını gösteren doldurulmuş belgedir.

**İmza**, imzalayanın yalnız o imzayla bağlı beyanını taşır.

Kayıp bildirimi örneği (kurgusal):

| Alan | Boş formda | Doldurulmuş kayıtta |
|---|---|---|
| Bildiren sürücü | (boş) | Mert |
| Cihaz kimliği | (boş) | RL-T-027 |
| Kaybolma saati ve yeri | (boş) | 15 Kasım 08.40, depo çıkışı |
| Bildirimin alındığı saat | (boş) | 08.55 |
| Bildirimi alan | (boş) | BT Mobil Sistemler |
| Sürücü imzası | (boş) | Mert; beyan: "yazdığım bilgiler bana aittir" |

::: {.notes}
Tablonun ikinci sütunu boş formdur: yalnız hangi bilgilerin toplanacağını söyler. Üçüncü sütun, Mert'in bildirimini kimin, ne zaman ve hangi veriyle bıraktığını gösteren kayıttır. Bir denetimde form şablonu değil, doldurulmuş kayıtlar aranır. Formun kurumun dolabında bulunması hiçbir işlemin yapıldığını göstermez.

İmzaya "kim, neyi imzaladı?" sorusuyla bakılır. Mert'in beyanı "yazdığım bilgiler bana aittir"dir. İmza bu bilgilerin Mert'e ait olduğunu söyler; cihazın gerçekten RL-T-027 olduğunu ya da kaybın 08.40'ta depo çıkışında yaşandığını doğrulamaz. Kaybın saati ve yeri sürücünün beyanıdır. 08.55 ise BT'nin bildirimi aldığı saattir; bu iz bildirimin ulaştığını gösterir, kaybın ne zaman ve nerede olduğunu kanıtlamaz. BT'nin olayı doğrulaması ise ayrı bir iştir ve kendi kaydıyla görünür.

Aynı ilke başka imzalar için de geçerlidir. Bir erişim talep formunda yönetici imzası iş gerekçesinin onaylandığını söyler; teknik işin yapıldığını BT'nin işlem kaydı gösterir. Her imza kendi beyanını taşır.

Buraya kadar politika, prosedür, talimat, form ve kaydın ayrı işlevlerini gördük. Bir sonraki slaytta ise bir belgenin kendi içindeki bölümlerin nasıl düzenlendiğini ve her bölümün hangi soruya cevap verdiğini, yani belge anatomisini inceleyeceğiz.
:::

---

## Belge anatomisi: her bölüm bir soruya cevap verir

**Belge anatomisi**, bir belgenin okuyucunun işine yarayan bölümlere ayrılmış düzenidir.

| Bölüm | Cevapladığı soru |
|---|---|
| Amaç | Belge hangi kararı uyguluyor? |
| Kapsam | Kimi, hangi sistemi, hangi durumu kapsıyor? |
| Tanımlar | Metindeki terimler ne anlama geliyor? |
| Sorumluluklar | Hangi rol neden sorumlu? |
| Uygulama | Hüküm, adım ya da işlem basamakları |
| İlgili belgeler | Hangi belgelere kimlik ve sürümle bağlı? |
| Referanslar | Belge hangi üst karara ya da dış metne dayanıyor? |
| Künye | Hazırlayan, inceleyen, onaylayan, yürürlük, revizyon |

Her bölümün her belgede bulunması gerekmez; küçük bir talimatın tanımlar bölümü olmayabilir.

::: {.notes}
Tanımlar bölümü "yönetilen cihaz" ya da "geçici parola" gibi bir terimin her okuyucuda aynı anlama gelmesini sağlar. Kapsam, belgenin kimi bağladığını söyler; kapsamı belirsiz bir belgeyi hangi birimin uygulayacağı tartışmalı kalır. Sorumluluklar bölümü roller ile uygulama bölümünü birbirine bağlar: uygulamada "BT hesabı açar" yazıyorsa sorumluluklarda da BT'nin bu işten sorumlu olduğu yazar.

İlgili belgeler ve künye bölümleri zincirin ve sürümün izlenebilmesi içindir. Künyede belgenin hazırlayanı, inceleyeni ve onaylayanı ayrı yazılır; hazırlayan ile onaylayan aynı kişi olmaz. Hepsinin her belgede aynı uzunlukta olması gerekmez, ama belgenin hangi kararı uyguladığı ve hangi sürüm olduğu belli olmalıdır.

Tabloda sık karıştırılan iki bölüm "İlgili belgeler" ile "Referanslar"dır. Referanslar, belgenin dayandığı üst kararı ya da dış metni (örneğin parola politikasını) gösterir; ilgili belgeler ise bu süreç işletilirken kullanılan talimat, form ve kayıt gibi bağlantılı belgeleri listeler. Bir sonraki slaytta bu bölümlerin hesap açma prosedüründe nasıl karşılık bulduğunu göreceğiz.
:::

---

## Hesap açma prosedürünün bölümleri

| Bölüm | Örnek cümle |
|---|---|
| Amaç | Bu prosedür, yeni çalışanın hesabının görevi doğrulandıktan ve yönetici onayından sonra açılması kararını uygular. |
| Kapsam | Hesap talep eden birim yöneticileri, İnsan Kaynakları ve BT. |
| Sorumluluklar | Yönetici talebi yazar; İnsan Kaynakları görevi doğrular; BT hesabı açar ve sonucu bildirir. |
| Uygulama | Dört adım: talep, doğrulama, hesap açma, sonuç bildirimi. |
| İlgili belgeler | İlk giriş talimatı; hesap talep formu; hesap açma kaydı. |
| Referanslar | Yönetimin hesap açma kararı; parola politikası. |
| Künye | Sürüm, hazırlayan, inceleyen, onaylayan ve yürürlük tarihi. |

**Soru:** "Yönetici talebi yazar; İnsan Kaynakları görevi doğrular; BT hesabı açar ve sonucu bildirir" cümlesindeki her rolü, Uygulama bölümünün dört adımından hangisi karşılıyor?

. . .

Yönetici → talep; İnsan Kaynakları → doğrulama; BT → hesap açma ve sonuç bildirimi.

::: {.notes}
Sorumluluklar bölümündeki her cümlenin uygulamada karşılığı olmalıdır; olmayan bir karşılık, bir rolün sorumluluğunun yalnız yazıda kaldığını gösterir. Tersi de geçerlidir: uygulamada bir adım varsa o adımı yapan rol sorumluluklarda görünmelidir. Soruda BT iki adımı üstleniyor, çünkü hem hesabı açıyor hem sonucu bildiriyor; bu durumda sorumluluk cümlesi iki eylemi birlikte taşır.

Aynı iç tutarlılık Kapsam ile Sorumluluklar arasında da aranır. Kapsam satırında birim yöneticileri, İnsan Kaynakları ve BT sayılmıştır; Sorumluluklar ve Uygulama bölümlerinde de tam olarak bu üç rol yer alır. Uygulamada dördüncü bir rolün adımından söz edilip o rol kapsamda ve sorumluluklarda yazılmasaydı belgenin kendi içinde tutarsız olduğu anlaşılırdı.

İlgili belgeler satırı bu prosedürün hangi talimat, form ve kayıtla bağlantılı olduğunu gösterir. Bu satır yoksa prosedür değiştiğinde hangi belgelerin birlikte gözden geçirileceği tahmine kalır. Bir sonraki slaytta süreç ve belge etrafındaki üç ayrı sorumluluğu —iş onayını, teknik uygulamayı ve belge sahipliğini— karşılaştıracağız.
:::

---

## Üç ayrı iş: iş onayı, teknik uygulama, belge sahipliği

**İş onayı**, bir erişimin ya da işlemin işte gerekli olduğuna yetkili kişinin karar vermesidir.

**Teknik uygulama**, onaylanan işlemin sistemde fiilen yapılmasıdır.

**Belge sahipliği**, bir belgenin içeriğinin doğru, işe uygun ve güncel kalmasını sağlama ve gerektiğinde gözden geçirmeyi başlatma sorumluluğudur.

| İş | Kim | Hesap açma örneğinde |
|---|---|---|
| İş onayı | Birim yöneticisi | Hesabın görev için gerektiğini onaylar |
| Teknik uygulama | BT | Hesabı açar |
| Belge sahipliği | Hesap açma sürecinden sorumlu yönetici | Prosedürün süreci doğru anlattığını kontrol eder, değişiklikte incelemeyi başlatır |

BT'nin hesabı açmış olması iş onayı yerine geçer mi?

. . .

**Geçmez.** Teknik uygulama, işte gerekli olup olmadığına karar vermez.

::: {.notes}
Üç iş farklı sorulara cevap verir: hesap işin gerektirdiği bir şey mi, hesap doğru kişiye ve doğru yetkiyle açıldı mı, bu işi anlatan belgenin içeriği doğru ve güncel mi. Küçük kurumlarda bunları tek kişi üstlenebilir. Belgede yine de ayrı yazılmaları gerekir; yoksa hangi kişinin hangi beyandan sorumlu olduğu bilinmez.

Belge listesini tutma, yayımlama ve dağıtım ayrı işlerdir. Bu örnekte bunları BGYS belge sorumlusu yürütür; içerik sorumluluğu süreç yöneticisindedir. Küçük bir kurumda aynı kişi iki işi de üstlenebilir.

Belgenin onaylayanı ile bir erişim talebini onaylayan farklı görevler üstlenir. Künyedeki "onaylayan", belgeyi yetkili olarak kabul eder; yürürlük tarihi bu onayla birlikte veya ayrı kararla belirlenir. Form üzerindeki onay ise tek bir kişinin tek bir erişimine ilişkindir. Künyedeki onay belge onayı, form üzerindeki onay iş onayıdır.

Uygulamada sık karşılaşılan bir hata, işlemin BT tarafından sistemde yapılmış olmasını yeterli sayıp iş onayını aramamaktır. Oysa karar yetkilisi, iş sahibi ve teknik uygulayıcı ayrı sorulardan sorumludur; teknik uygulama iş gerekçesi kararının yerine geçmez. Son slaytta, buraya kadar gördüğümüz belge türlerini ve belge bölümlerini beş cümle üzerinde ayırt edeceğiniz uygulama görevine geçiyoruz.
:::

---

## Beş cümleyi belge türüne ve bölümüne yerleştirin

- **Görev:** Aşağıdaki beş cümlenin hangi belge türüne ya da belge bölümüne ait olduğunu belirleyin.
- **Çıktı:** Seçiminizi çalışma tablosunda tek cümleyle gerekçelendirin.
- **Ölçüt:** Gerekçede cümlenin işlevi (kural, süreç akışı, ayrıntılı iş adımı, gerçekleşmiş olgu, belge bölümü) ve bunu gösteren ifade yer alsın.

1. Teslim kanıtı fotoğrafı sevkiyat kaydına eklenmeden teslimat kapatılmaz.
2. Fotoğraf yüklenemezse sürücü birim yöneticisine bildirir; yönetici BT Mobil Sistemler'e arıza talebi açar; BT sorunu giderince yöneticiyi bilgilendirir.
3. Fotoğraf yüklenmezse bulunduğun yerde mobil bağlantı olup olmadığına bak; varsa yeniden dene; iki denemede yüklenmezse fotoğrafı telefonda sakla ve yöneticini ara.
4. 14 Kasım'da 5821 numaralı teslimat için yükleme hatası 11.20'de bildirildi; arıza talebi 11.32'de açıldı.
5. Bu belge, teslim kanıtı fotoğraflarının sevkiyat kaydına eklenmesini ve yükleme arızalarının izlenmesini düzenler.

**Rehber satır** (beş cümleden biri değil): "Ece 12 Kasım'da cihaz kimliğini BT'ye bildirdi."

| Cümle | Belge türü / bölümü | Gerekçe |
|---|---|---|
| Rehber | Kayıt | Fiil geçmiş zamanda ("bildirdi") ve tarih var; gerçekleşmiş bir bildirim anlatılıyor. Cümle kural ya da sıra koymuyor, olmuş bir işi anlatıyor. |

Sizin tablonuz:

| Cümle | Belge türü / bölümü | Gerekçe |
|---|---|---|
| 1 |  |  |
| 2 |  |  |
| 3 |  |  |
| 4 |  |  |
| 5 |  |  |

::: {.notes}
Çalışmanızda beş cümlenin her birini okurken yalnızca konusuna değil, kime seslendiğine, zaman kipine ve metin içinde hangi işi yaptığına dikkat edin. Tablo başlığında belirtildiği gibi cümlelerden bazıları doğrudan bir belge türüne (politika, prosedür, talimat, kayıt gibi), bazıları ise bir belgenin içindeki anatomi bölümüne ait olabilir; seçiminizi ilgili bölümün veya belge türünün cevapladığı soruyla ilişkilendirin.

Gerekçe sütununu doldururken rehber satırdaki yöntemi izleyin: önce cümlenin taşıdığı işlevi (kural, süreç akışı, ayrıntılı iş adımı, gerçekleşmiş olgu veya belge bölümü) yazın, ardından bu yargıyı cümledeki hangi fiil kipine, bağlaca veya ifadeye dayandırdığınızı gösterin. "Kural gibi görünüyor" benzeri genel ifadeler yerine doğrudan cümledeki dilsel kanıtı belirtin.
:::
