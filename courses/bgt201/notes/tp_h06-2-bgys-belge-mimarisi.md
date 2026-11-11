---
title: "BGYS dokümantasyon mimarisi"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-11-10
execute:
  echo: false
---

## Aynı kapı üç yöntemle yönetilirse ne olur?

Yedek disklerin ve ağ cihazlarının durduğu bir teknik odaya girişi üç birim üç ayrı yöntemle yürütüyor:

- BT, odaya girecek kişiye kapı kartı tanımlıyor.
- İK, ziyaretçi geleceğini sözlü haber veriyor.
- Operasyon, anahtarı elden teslim ediyor.

Üç ay sonra bir yedek diskin yerinde olmadığı fark ediliyor. **Kim girdi? Kim izin verdi?**

::: {.notes}
Hiçbir birim kötü niyetli değil; her biri girişi kendi alışkanlığıyla çözmüş. Sorun soru sorulduğunda ortaya çıkıyor. BT kart kayıtlarında bir isim bulabilir ama iznin kimden geldiğini bilmez. İK'nın sözlü haberinin izi yoktur. Anahtarın teslimi hiçbir yere yazılmamıştır. Kişi değişince karar da değişir.

Aynı dağınıklık erişim taleplerinde, yedek alma işinde ya da personel ayrılışında da görülebilir. İki şey eksiktir: kararın kişilerden bağımsız olarak aynı biçimde alınmasını sağlayan yazılı bir düzen ve kararın alındığını sonradan gösterecek izler. Belge düzeni bu iki ihtiyaç için kurulur.
:::

---

## Bir hedefe ulaşıldıktan sonra ne gerekir?

Bir güvenlik hedefine ulaşıldıktan altı ay sonra:

- Yeni açılan bir kaydın sorumlusu yazılmadı.
- Yeni gelen çalışan kuralı bilmiyor.
- Biri "bunu zaten yaptık" diyor, ama yapıldığını gösteren kayıt yok.

**Ulaşılan durum bu koşullarda kendiliğinden sürer mi?**

. . .

Durumu sürdürmek için üç şey gerekir: **yazılı bir karar**, **bir işleyiş tarifi** ve **kayıtlar**.

::: {.notes}
Hedefe ulaşmak bir faaliyetin sonucudur ve çoğunlukla büyük emekle elde edilir. Ama yeni kayıtlar açılmaya, personel değişmeye devam eder. Kuralın nerede yazılı olduğu, yeni gelen kişinin işi nasıl öğreneceği ve yapılan işin nasıl gösterileceği belirlenmezse aynı sorun yeniden doğar.

Üç ihtiyaç üç ayrı belge işine karşılık gelir. Yazılı karar kuralı sabitler. İşleyiş tarifi kuralın kim tarafından, hangi sırayla uygulanacağını gösterir. Kayıtlar yapılanın izini bırakır. Yazılı kuralın gerçek uygulamayla örtüşmesi ve kayıtların gerçeğe uygun tutulması bu düzenin çalışması için gerekir; bir kaydın sonradan düzenlenmesi hem kurumu hem çalışanı zayıflatır.
:::

---

## Belge ile kayıt arasındaki fark nedir?

**Belge**, bir kararı, kuralı ya da işin nasıl yapılacağını yazılı olarak ortaya koyan metindir.

**Kayıt**, iş yapılırken veya hemen sonra oluşan, olaya ilişkin izlenebilir bilgidir. İşin yapıldığına dair kanıt adayıdır; tek başına kesin hüküm değildir, güvenirliği ayrıca okunur.

| | Belge | Kayıt |
|---|---|---|
| Yanıtladığı soru | Ne yapılmalı? | Ne yapıldı? |
| Ne zaman oluşur? | İş başlamadan önce | İş yapılırken veya hemen sonra |
| Yedekleme örneğinde | "Yedekler her gece alınır" kuralı | 12 Ekim gecesinin yedeğinin tamamlandığını yazan günlük satırı |

::: {.notes}
İki kavramı karıştırmak çok yaygındır: klasörde bir prosedür duruyorsa "bu iş bizde yürüyor" denir. Prosedür kurumun ne yapmayı amaçladığını gösterir; yapıldığını göstermez. Dolu bir kayıt ise belirli bir gün ve işlem için iz bırakır. Kaydın kim tarafından, ne zaman yazıldığı ve başka izlerle uyumu ayrıca okunur.

Boş bir form belge düzenine aittir, doldurulmuş hâli kayda. Dokümantasyon düzeni dört halkadan oluşur: yazılı karar, işleyiş, gerçekleşene ilişkin kayıt ve değerlendirme. Değerlendirme, kaydı kurala karşı okumaktır; kural ile kayıt yan yana konmadan uygulanıp uygulanmadığı söylenemez.
:::

---

## Politika ile prosedür nasıl ayrılır?

**Politika**, üst yönetimin bir konudaki ilkesini ve kuralını yazılı olarak koyduğu, kurum genelinde geçerli belgedir.

**Prosedür**, bir kuralın hangi roller arasında hangi sırayla yürütüleceğini yazan iş akışı belgesidir.

> Teknik odaya yalnız görevlendirilmiş personel ve refakat edilen ziyaretçi girer; her giriş sonradan sorgulanabilir olmalıdır. *(politika düzeyinde kural)*

| Sıra | Rol | İş |
|---|---|---|
| 1 | Talep eden birim yöneticisi | Girişi forma yazar: kim, ne zaman, ne için |
| 2 | BT Hizmetlerinden Sorumlu Yönetici | Gerekçeyi değerlendirir, onaylar ya da reddeder |
| 3 | İdari İşler görevlisi | Onaylı talebe göre kartı etkinleştirir, ziyaretçiyi karşılar |
| 4 | İdari İşler görevlisi | Giriş ve çıkış saatini forma işler |
| 5 | Komite temsilcisi | Ayda bir kayıtları inceler |

::: {.notes}
Politika cümlesi neyin korunacağını ve genel kuralı söyler; kapıdaki görevliye "tam olarak ne yapacağım?" sorusunun yanıtını vermez. O yanıtı prosedür verir ve bunu birden fazla rol arasındaki sırayla yapar: kim ister, kim onaylar, kim uygular, kim kontrol eder.

Üçüncü adımdaki görev onaydan ayrı bir kişiye aittir; bu ayrım kararın ve uygulamanın farklı kişilerden geçmesini sağlayan bir tasarım tercihidir. Beşinci adımdaki aylık inceleme yazılan akışın gerçekten işleyip işlemediğine bakar. Politika kurum genelinde uzun süre geçerli kalır; prosedür ise iş akışı değiştikçe güncellenir.
:::

---

## Talimat bir rolün tek işini nasıl anlatır?

**Talimat**, tek bir rolün belirli bir işi adım adım nasıl yapacağını gösteren kılavuzdur.

**İdari İşler görevlisi: ziyaretçiyi teknik odaya alma**

1. Onaylı giriş talebini bul; onay tarihinin ve onaylayan adının yazılı olduğuna bak.
2. Ziyaretçinin kimliğini talepteki adla karşılaştır.
3. Ziyaretçiyi odaya kendin götür ve odanın içinde yanından ayrılma.
4. Girişte ve çıkışta saati forma yaz.
5. Tamamlanan formu aynı gün BT Hizmetlerinden Sorumlu Yönetici'nin dosyasına bırak.

::: {.notes}
Prosedür beş rolü birbirine bağlarken talimat yalnız İdari İşler görevlisine hitap eder ve tek bir işi, ziyaretçiyi odaya almayı anlatır. Adımlar görevlinin gerçekten yapabileceği küçük eylemlerdir. "Gerekli kontrolü yap" gibi soyut bir cümle burada işe yaramaz, çünkü görevliye neyi kontrol edeceğini söylemez.

Talimat, işin nasıl yapıldığını bilmeyen birine yöneliktir: yeni gelen bir görevli bu beş adımı okuyarak işi doğru yapabilmelidir. Prosedür ile talimat arasındaki fark bu yüzden sayıda değil, hitap ettiği kişi sayısında ve ayrıntı düzeyindedir.
:::

---

## Form ve imza: bilgi nasıl toplanır, kayda nasıl dönüşür?

**Form**, bir iş yapılırken gerekli bilgilerin eksiksiz toplanması için hazırlanmış boş şablondur.

| Giriş formu alanı | Alan dolunca ne taşır? |
|---|---|
| Ziyaretçi adı | Kimin geldiği |
| Giriş nedeni, talep eden, onaylayan | Gerekçe, talep ve onay beyanı |
| Refakat eden, giriş ve çıkış saati | Kimin hangi saatte içeride göründüğü |

**İmza**, imzalayanın kendi beyanını gösterir; işlemin yapıldığını kendi başına göstermez.

::: {.notes}
Klasörde duran boş form belge düzenine aittir; doldurulup imzalanmış form ise o girişin kaydıdır. Formun alanları, hangi bilginin kayıtta bulunacağını önceden belirler. Alanı olmayan bilgi çoğu zaman hiç toplanmaz.

İmzanın neyi gösterdiğine dikkat etmek gerekir. Onaylayanın imzası "bu giriş için gerekçeyi uygun buldum" der. Refakat edenin imzası "ziyaretçiyle birlikteydim" der. İmzanın hangi beyana ait olduğu açık yazılmazsa, sonradan herkes imzayı kendine uygun biçimde yorumlar.
:::

---

## Dış kaynaklı belge ve yönetimsel ile teknik belge nasıl ayrılır?

**Dış kaynaklı doküman**, kurum dışında hazırlanmış olup kurumun işinde uyduğu ya da dayandığı belgedir.

| Tür | Ne yapar? | Örnek |
|---|---|---|
| Yönetimsel belge | Yetki, sorumluluk, onay ve kuralı belirler | Erişim politikası, giriş prosedürü |
| Teknik belge | Bir sistemin kurulum ya da kullanım adımlarını anlatır | Kapı kartı okuyucusunun tanımlama adımları |
| Dış kaynaklı doküman | Kurum dışında üretilmiştir | Kart okuyucusu üreticisinin kullanım kılavuzu |

::: {.notes}
Yönetimsel belge "kim karar verir, kim onaylar" sorusuna, teknik belge "bu cihazda ya da sistemde adım adım ne yapılır" sorusuna yanıt verir. Teknik talimatlar çoğu zaman dış kaynaklı belgeye dayanır: üreticinin kılavuzu cihazın nasıl tanımlanacağını anlatır, ama kurumun kendi kuralını söylemez.

Kurum dış belgeyi kendi belgesi gibi düzenlemez; hangi sürümüne dayandığını bilir. Üretici kılavuzunu güncellediğinde kurum kendi talimatını gözden geçirir. Yönetimsel belge değiştiğinde yetki ve onay düzeni etkilenir; teknik belge değiştiğinde çoğu zaman yalnız adımlar değişir.
:::

---

## Bir belgenin hazırlayanı, onaylayanı ve sahibi kimdir?

**Hazırlayan**, belgenin metnini yazan kişidir.

**Onaylayan**, belgenin yürürlüğe girmesine karar veren kişi ya da kuruldur.

**Belge sahibi**, belgenin güncel ve doğru kalmasından sorumlu roldür.

**Yürürlük tarihi**, belgenin geçerli olmaya başladığı gündür. **Sürüm**, aynı belgenin hangi düzeltilmiş hâli olduğunu gösteren numara ya da işarettir.

| Belge | Hazırlayan | Onaylayan | Belge sahibi |
|---|---|---|---|
| Parola politikası | BT yöneticisi | Genel müdür | BT yöneticisi |
| Yedek geri yükleme talimatı | Sistem yöneticisi | BT yöneticisi | Sistem yöneticisi |

::: {.notes}
Hazırlayan ile onaylayanın ayrı kişiler olması, metnin yürürlüğe girmeden önce farklı bir gözden geçmesini sağlar. Aynı kişi iki rolü taşıyorsa bu tek başına inceleme yapılmadığını kanıtlamaz; yine de başka bir incelemenin nerede yapıldığı yazılmalıdır.

Belge sahibi belgeyi yazmış olmak zorunda değildir. Belge eskirse "bu belge kimin?" sorusunu yanıtlayan roldür. Politikayı genel müdür onaylar, çünkü kurumun ilkesini koyar; talimatı işi bilen yönetici onaylar. Belgenin üstündeki yürürlük tarihi ve sürüm bilgisi, güncel olmayan belgenin kullanılmasını önler. Bir çalışanın tuttuğu tarihsiz ve sürümsüz bir not, yan yana duran iki kopyadan hangisinin geçerli olduğunu göstermez; eski adımlar yanlışlıkla uygulanabilir.
:::

---

## Karardan kayda uzanan zincir neyi sağlar?

| Halka | İşi | Doğruladığı soru |
|---|---|---|
| Karar | Kurumun ne istediğini söyler | Kurum ne istiyor? |
| Politika | Kuralı yazılı koyar | Kural yazılı mı? |
| Prosedür | Roller arası sırayı kurar | Kim hangi sırada ne yapıyor? |
| Talimat | Tek rolün tek işini anlatır | Görevli işi nasıl yapıyor? |
| Form | Gerekli bilgiyi toplar | Hangi bilgi toplanıyor? |
| Kayıt | Gerçekleşeni gösterir | Gerçekte ne oldu? |

Kayıtlar yalnız doldurulmuş alanların taşıdığı olguyu destekler; kayıtta yer almayan ayrıntı olgu ifadesine yazılmaz.

::: {.notes}
Zinciri yukarıdan aşağı okuyunca karar uygulamaya iner; aşağıdan yukarı okuyunca bir kayıt hangi kurala dayandığını gösterir. Bir halka eksikse sonuç hemen görünür. Kayıt yoksa yalnızca kurala inanırız. Kural yoksa kaydın neye göre tutulduğu belli olmaz. Talimat yoksa her görevli işi kendi bildiği gibi yapar.

Teknik oda örneğinde, ilgili alanları dolu bir giriş formu şunu destekler: odaya belirli bir tarihte onaylı ve refakatli giriş yapılmış. Formda saati olmayan bir ayrıntı olgu ifadesine eklenmez. Kayıtlar kurala karşı okunduğunda hangi alanın hangi iddiayı taşıdığı da belli olur.
:::

---

## Belge var demek, iş yapıldı demek midir?

| Elinizde | Gösterir | Göstermez |
|---|---|---|
| Klasörde duran boş form | Bilgi toplama aracının hazır olduğunu | Bir işlemin yapıldığını |
| Prosedür dosyası | Beklenen akışı | Akışın izlendiğini |
| Onaylayanın imzası | Onaylayanın kendi beyanını | Sürecin güvenli sonuçlandığını |
| Doldurulmuş ve tarihli kayıt | İşleme ilişkin bir iz bulunduğunu | Gerekçenin ve sürecin uygun olduğunu (ilgili alanlar okunur; kayıt tek başına kesin değildir) |

::: {.notes}
Belgenin varlığı ile uygulamanın gerçekleşmesi ayrı sorulardır ve ayrı kanıtlarla yanıtlanır. Gerçeğe uygun kayıt kurumu ve çalışanı birlikte korur: kayıt gerçeği yansıtırsa kurum bir olayı sonradan anlayabilir, çalışan da kendi yetkisi içinde hareket ettiğini gösterebilir. Geriye dönük doldurulmuş bir form ikisini de zayıflatır.

Bu tablo belirli bir olayda kimin sorumlu olduğunu hukuken belirlemez; kayıtların neyi gösterdiğini doğru okumaya yarar.
:::

---

## Uygunsuzluk, eksik kanıt ve ek bilgi ihtiyacı nasıl ayrılır?

**Uygunsuzluk**, bir gereksinimin karşılanmadığının kayıt, sistem çıktısı ya da doğrudan gözlemle doğrulandığı durumdur.

**Eksik kanıt**, gereksinim karşılanmış olabilir ama bunu gösterecek kaydın ya da kaydın gerekli bir alanının bulunmadığı durumdur; önce araştırılır.

**Ek bilgi ihtiyacı**, kayıtlar tam olduğu hâlde karar için sorulması gereken bir olgunun kaldığı durumdur.

Örnek kural: *"Teknik odaya her giriş için onaylı bir giriş formu bulunur."*

| Kayıt durumu | Sınıf | Neden |
|---|---|---|
| Formun onaylayan alanında "Reddedildi" yazıyor; kart kaydı aynı gün girişi gösteriyor | Uygunsuzluk | Kayıtlar birlikte kuralın karşılanmadığını gösteriyor |
| İdari İşler "17 Ekim'de ziyaretçi geldi, formu doldurduk" diyor; klasörde o tarihli form yok | Eksik kanıt | Form başka yerde saklanıyor olabilir; önce aranır. Aranınca da bulunmazsa form bulundurma şartı karşılanmamıştır, bu ayrı bir uygunsuzluktur |
| Form onaylı, tarihli ve imzalı; refakat eden alanında Z. Yalçın yazılı; İK listesine göre Z. Yalçın o hafta izinli | Ek bilgi ihtiyacı | Kayıtlar tam; ama refakatin nasıl sağlandığı sorulmadan karar verilemez |

::: {.notes}
Üç sınıfı ayıran şey, elimizdeki kaydın ne söylediğidir. İkinci satırda yalnız bir kişinin sözü var, kayıt yok. Bu aşamada formun nerede olduğu bilinmez, bu yüzden önce aranır; "form yok" demek için araştırmanın bitmesi gerekir. Araştırma sonunda formun hiç oluşturulmadığı ya da saklanmadığı doğrulanırsa, kural her giriş için onaylı form istediğinden bu şart karşılanmamıştır ve uygunsuzluk vardır. Ziyaretçinin onaysız girip girmediği ise başka bir sorudur; onu da ayrı bir kanıt gösterir, formun yokluğundan çıkarılmaz.

Üçüncü satırda kayıtların hepsi yerinde, ama iki kayıt yan yana konunca yanıtı kayıtlarda olmayan bir soru çıkıyor: izinli kişi o gün gerçekten refakat etti mi, yoksa görev devredildi mi? Bu soru sorulmadan ne uygunsuzluk ne uygunluk denebilir.

Sınıflama sonraki işi de belirler. Uygunsuzlukta düzeltici işlem gerekir. Eksik kanıtta önce kayıt aranır; bulunursa sorun kapanır, bulunmazsa kayıt şartı karşılanmamış olur. Sonradan düzenlenen bilgi, gerçek düzenleme tarihi ve dayanağıyla yeni bir kayıttır; geçmiş tarihli özgün kaydın yerine geçirilemez. Ek bilgi ihtiyacında ilgili kişiye soru sorulur.
:::

---

## Her sorun için yeni belge mi gerekir?

Bir belge ancak şu işlerden birini taşıyorsa yerindedir:

- bir **kural** koyar,
- kişiler arası bir **akışı** kurar,
- tek bir **işin adımlarını** gösterir,
- ya da bir olgunun **kanıtını** oluşturur.

Aynı işi yapan iki belge, bakım yükü ve çelişme riskidir.

::: {.notes}
Belge sayısı bir başarı ölçütü değildir. Yirmi sayfalık bir belge yığını kimsenin okumadığı ve güncellemediği metinlere dönüşebilir. Her belgeye "bu belge hangi kararı, akışı, adımı ya da kanıtı taşıyor?" diye sormak gereksiz belgeyi ayıklar.

BGYS yaklaşımı belgelerin kurum için gerekli ve güncel olmasını ister. Belgelerin sayısı ve ayrıntısı kurumun büyüklüğüne, işine ve ihtiyacına göre değişir; her kurumda aynı belge listesi bulunmaz.
:::

---

## Bağımsız görev: beş öğenin belge işlevini ayırın

Bir kurum dizüstü bilgisayarlarını çalışanlara zimmetle teslim ediyor. Elinizde şunlar var:

1. "Dizüstü bilgisayarlar yalnız zimmet formuyla teslim edilir."
2. Birim yöneticisi talep eder, İdari İşler hazırlar ve teslim eder, BT bilgisayarı hazırlar; sıra ve roller yazılı.
3. "İdari İşler görevlisi seri numarasını forma yazar, teslim alanın kimliğini kontrol eder, formu iki nüsha imzalatır."
4. Zimmet formunun boş şablonu.
5. Ayşe Kaya'nın 3 Kasım tarihli imzalı zimmet formu ve envanter listesindeki güncel satır.

Her öğenin belge işlevini yazın. Hangisi uygulamanın gerçekleştiğine kanıt olur? Ayşe Kaya'nın imzası neyi gösterir, neyi göstermez?

. . .

**Yanıt:** 1 politikadır (kural). 2 prosedürdür (roller arası akış). 3 talimattır (tek rolün tek işi). 4 formdur (boş şablon, kanıt değil). 5 gerçekleşen teslime ilişkin kayıttır; diğer öğeler kural, akış, adım ya da boş şablondur. İmza, Ayşe Kaya'nın bilgisayarı teslim aldığını beyan ettiğini gösterir. Envanter satırı, varlığın kayıtlarda kime göründüğüne dair ayrı bir izdir. İkisi birlikte teslim iddiasını destekler; ikisi de değiştirilemez kesin kanıt değildir. Bilgisayarın uygun hazırlandığı bu iki izden çıkmaz.

::: {.notes}
Beş öğe aynı işin farklı katmanlarını taşıyor. İmzanın yanına bir de envanter satırına bakmak, tek bir kaynağa güvenmemenin örneğidir. Hangi belgenin hangi işlevi gördüğünü ayırabilen biri, bir kurumun belge düzenine baktığında eksik halkayı bulabilir.
:::
