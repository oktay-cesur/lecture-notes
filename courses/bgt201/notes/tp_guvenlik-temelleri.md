---
title: "Güvenlik Temelleri: Bilgi Varlığını Korumak"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: today
execute:
  echo: false
---

::: {.callout-warning}
## Taslak Çalışma Notu
Bu doküman BGT 201 Bilgi Güvenliği Yönetimi I dersi için resmî izlence ve kaynak analizi temel alınarak hazırlanmış ilk çalışma taslağıdır. Haftalık pedagojik revizyonlarla olgunlaştırılmaya devam edecektir.
Ana İzlence: [[crs-bgt201|Ders İzlence Merkezi]]
:::

## Güvenlik temelleri: bilgi varlığını korumak

BGT 201 — Bilgi Güvenliği Yönetimi I · Hafta 1

::: {.notes}
Dersin ilk oturumu. Öğrencinin bu derse girerken kafasındaki "güvenlik" imgesi muhtemelen bir güvenlik duvarı, antivirüs ya da hacker'dır — yani bir araç ya da bir saldırgan. Bu oturumun amacı bu imgeyi düzeltmek: güvenlik konuşması bir araç listesiyle değil, kurumun hangi bilgiyle iş yaptığı sorusuyla başlar. Bunu ilk slaytta söylemiyoruz, ama kendi zihnimizde çerçeveyi böyle kuruyoruz; bir sonraki slaytta öğrenciye doğrudan bu soruyu soracağız.
:::

---

## Bugünün sorusu

**"Hangi araç kullanılıyor?" değil — "Kurum hangi bilgiyle hangi işi yürütüyor?"**

Örnek kurum birimi: öğrenci/aday kayıtları, personel belgeleri ve hizmet başvurularını yöneten kurgusal bir birim.

::: {.notes}
Bu soruyu tahtaya yazıp öğrenciye sormakla başlanabilir: "Bir kurumu güvenlik açısından tanımak isteseniz ilk sorunuz ne olurdu?" Çoğu öğrenci "hangi yazılımı/donanımı kullanıyorlar" der — bu doğal ama yanlış giriş noktasıdır, çünkü araç listesi kurumun neyi koruması gerektiğini söylemez. Doğru giriş noktası kurumun hangi bilgiyle hangi kararı verdiğidir. Dönem boyunca kullanacağımız örnek birimi burada tanıtıyoruz: başvuru alan, değerlendiren, yönlendiren ve sonucu kayıt altına alan kurgusal bir birim. Bunun gerçek bir kurum olmadığını, ders boyunca tekrar döneceğimiz ortak bir vaka olduğunu belirt. Geçiş: "Peki bu birimin elindeki kayıtların hepsi aynı ağırlıkta mı? Hayır — şimdi bunu ayıracağız."
:::

---

## Veriden bilgiye

| | Tek başına | Bağlamıyla birlikte |
|---|---|---|
| Örnek | Bir tarih alanı | Tarih + başvuru no + kimlik + işlem aşaması |
| Ne olur? | **Veri** — işlenmemiş, bağlamsız gözlem | **Bilgi** — karar vermeyi destekler |

*Aynı unsur, kullanım bağlamına göre rol değiştirir.*

::: {.notes}
Somut örnek üzerinden ilerle: tek başına bir tarih, istatistik raporunda kalsa yalnızca veridir. Aynı tarih başvuru numarası, başvuranın kimliği ve işlem aşamasıyla birlikte okunduğunda "bu başvuruyu ne zaman sonuçlandırmalıyız?" sorusuna cevap üretir — bu da onu bilgiye çevirir. Kritik nokta: bu bir sınıflandırma etiketi değil, bir rol farkı. Aynı tarih alanı başka bir bağlamda (istatistik raporu) yine veri olarak kalabilir. Öğrenciye sor: "Sizin telefonunuzdaki bir tarih hatırlatıcısı ne zaman bilgiye dönüşür?" gibi bir soru bağlamı netleştirebilir. Geçiş: "Bilgi tek başına dolaşmaz, bir şeyin içinde taşınır — buna varlık diyoruz."
:::

---

## Bilgi varlığı: dört tür

- **Veri/belge:** başvuru dosyası, personel belgesi
- **Hizmet/süreç:** başvuruyu değerlendirme hizmeti
- **İnsan/rol:** değerlendirmeye yetkili personel rolü
- **Uygulama:** başvuruların kaydedildiği yazılım

*Varlık = korunması gereken, kurum için değer taşıyan her şey — yalnızca cihaz değil.*

::: {.notes}
Öğrencinin ilk refleksi "varlık = cihaz/bilgisayar" olur; bu slaytın işi bu refleksi kırmak. Dört türü sırayla say ve her birinin diğerine bağımlı olduğunu ama ayrı bir korunma gerekçesi taşıdığını vurgula: uygulama olmadan dosya işlenemez, yetkili rol olmadan karar verilemez — ama uygulamanın güvenliği ile personelin yetkilendirilmesi farklı sorulardır. Bu dersde her biri kendi başına bir varlık olarak ele alınabilir demek, ileride (varlık envanteri biriminde) bunların ayrı ayrı kayıt altına alınacağının habercisidir; o ayrıntıya şimdi girme. Geçiş: "Şimdi bu varlıklardan birini seçip, onu korumak ne demek, buna bakacağız — üç soru soracağız."
:::

---

## CIA: bir varlığa üç soru

Bir varlığı korurken sorulan üç soru:

1. **Gizlilik (confidentiality)** — yalnızca yetkili görüntüleme mi?
2. **Bütünlük (integrity)** — yalnızca yetkili ve doğru değiştirme mi?
3. **Erişilebilirlik (availability)** — gerektiğinde yetkili erişim mi?

Odak varlık: **öğrenci/aday başvuru kaydı**

::: {.notes}
Bu üçlüye kısaca CIA denildiğini söyle ama hemen ekle: bunlar soyut ilke değil, seçilen varlığa özgü somut gereksinimlerdir — her varlık için ayrı ayrı gerekçelendirilmesi gerekir. Bunu tanım listesi olarak bırakmayacağımızı, tek bir varlık üzerinden (öğrenci/aday başvuru kaydı) sırayla cevaplayacağımızı söyle. Bu slayt bir çerçeve slaydı; sonraki üç slaytta her soruyu ayrı ayrı derinleştireceğiz. Geçiş: "Önce gizlilik: bu kaydı kim görebilmeli?"
:::

---

## Gizlilik — yalnızca yetkili görüntüleme

**Soru:** Bu kaydı yalnızca yetkili kişiler görüntüleyebilmeli mi?

**İhlal olursa:** Başvuranın kişisel bilgileri ilgisiz kişilere ulaşır, sürece duyulan güven zedelenir.

::: {.notes}
Başvuru kaydının içeriğini hatırlat: kimlik bilgileri ve değerlendirme notları. Sözlük tanımıyla yetinme — "gizlilik ihlali oldu" demek yeterli değil, bunun kurum için somut sonucunu söylet: kişisel bilgi sızıntısı + güven kaybı. Öğrenciye sorulabilecek soru: "Bu bilgiye kimlerin erişmemesi gerekir, ve neden?" Bu, ilerleyen erişim/rol dersinin (roller-kimlik-ve-erisim-yonetimi) habercisi ama şimdi rol tasarımına girme — yalnızca "yetkisiz olursa ne olur" sorusuna cevap veriyoruz. Geçiş: "Aynı kayıt için ikinci soru: kim değiştirebilir?"
:::

---

## Bütünlük — yalnızca yetkili ve doğru değiştirme

**Soru:** Bu kayıt yalnızca yetkili kişilerce ve doğru biçimde değiştirilebilmeli mi?

**İhlal olursa:** Başvuru durumu ("değerlendiriliyor" → "kabul edildi") yanlış/yetkisiz değişirse, kurum hatalı karara dayanır; başvuran haksız reddedilir ya da hak etmediği sonucu alır.

::: {.notes}
Somut durum geçişi örneğini kullan: "değerlendiriliyor" → "kabul edildi". Vurgulanacak nokta: bütünlük ihlali illa kötü niyetli olmak zorunda değil — yanlışlıkla yapılan bir değişiklik de bütünlüğü bozar. Sonuç yine iş sonucuna bağlanmalı: yanlış karar, haksız ret/kabul. Öğrenci burada "peki kim doğru değiştirebilir, nasıl anlarız?" diye sorarsa, bunun cevabının rol/yetki tasarımı olduğunu ama bu dersin sınırının bu soruyu sormakla bittiğini, cevabının ileride geleceğini belirt. Geçiş: "Üçüncü soru: kayda gerektiğinde erişilebiliyor mu?"
:::

---

## Erişilebilirlik — gerektiğinde yetkili erişim

**Soru:** Bu kayıt, gerektiğinde yetkili kişilerce erişilebilir olmalı mı?

**İhlal olursa:** Değerlendirme son gününde kayda erişilemezse, birim süresi içinde karar veremez; başvuru süreci aksar, başvuran mağdur olur.

::: {.notes}
Erişilebilirlik genelde öğrenciye "en az önemli" gibi görünür (gizlilik ve bütünlük daha "güvenlik" hissi verir) — bunu düzelt: bir sistem son teslim gününde çökerse sonuç gizlilik/bütünlük ihlali kadar ciddi bir iş aksaması olur. Somut zaman baskısını vurgula: "son gün" ifadesi tesadüfi değil, erişilebilirliğin neden zaman-duyarlı bir gereksinim olduğunu gösteriyor. Geçiş: "Şimdi önemli bir uyarı: bu üç soru birbirinden bağımsız kutular değil."
:::

---

## CIA bağımsız kutular değildir

Aynı kontrol birden fazla boyutu aynı anda etkileyebilir.

*Örnek: kayda kimin erişebileceğini belirleyen bir yetkilendirme kuralı — hem gizliliği hem bütünlüğü etkiler.*

CIA tek başına: sınıflandırma etiketi, risk puanı veya hazır kontrol listesi **üretmez**.

::: {.notes}
Bu slayt bir düzeltme slaydı — önceki üç slaytta CIA'yı ayrı ayrı sorduk, şimdi bunun yapay bir ayrım olmadığını, gerçekte iç içe geçtiğini söylüyoruz. Yetkilendirme kuralı örneğini somutlaştır: aynı kural "kim görebilir" (gizlilik) ve "kim değiştirebilir" (bütünlük) sorularının ikisine de cevap verir. Bunu vurgulamazsak öğrenci CIA'yı üç ayrı checkbox gibi ezberler; oysa amaç "bu varlıkta neyi, kimden, hangi bozulmaya karşı koruyoruz?" sorusunu netleştirmek. Bu slaytta risk puanlama veya kontrol seçimine girmediğimizi açıkça söyle — o iş ileri derslerin (gap-risk-analizi) konusu. Geçiş: "CIA bize neyin bozulabileceğini gösterdi. Şimdi bu bozulmayı doğru kelimelerle konuşmayı öğreneceğiz."
:::

---

## Üç terim, üç farklı rol

| Terim | Tanım | Örnek |
|---|---|---|
| **Tehdit (threat)** | Varlığa zarar verebilecek neden/olay | Yetkisiz erişim denemesi (dışarıdan) ya da yanlışlıkla hatalı yetki ataması yapılması (içeriden) |
| **Açıklık/zafiyet (vulnerability)** | Tehdidin istismar edebileceği zayıflık | Gözden geçirilmemiş yetki ataması |
| **Risk (risk)** | Varlık üzerindeki olası olumsuz etki | Mahremiyet ihlali, hatalı karar, hizmet aksaması |

::: {.notes}
Bu üç terim sınıfta en sık birbirine karıştırılan terimlerdir — özellikle "risk" kelimesi gündelik dilde "tehdit" yerine kullanılır. Her satırı aynı örnek üzerinden anlat, tabloyu satır satır oku: önce tehdit (kim/ne zarar verebilir), sonra açıklık (bunu hangi boşluk kolaylaştırıyor), sonra risk (bu gerçekleşirse varlıkta ne olur). Tehdidin iki örneği kasıtlı: yalnız "dışarıdan saldırgan" değil, "içeriden kasıtsız hata" da bir tehdittir — açılış slaydındaki "güvenlik = hacker" imgesini burada düzeltiyoruz. Risk örneğindeki üç unsur (mahremiyet ihlali, hatalı karar, hizmet aksaması) sırasıyla gizlilik/bütünlük/erişilebilirlik boyutlarına karşılık gelir; CIA'nın üçü de risk tablosuna yansımalı. Vurgu: bunlar eş anlamlı değildir ve birini diğerinin yerine kullanmak (örneğin "açıklık" yerine "risk" demek) ayrımı bozar. Öğrenciye küçük bir alıştırma sorulabilir: "yetkisiz erişim" tehdit mi açıklık mı? (tehdit — çünkü olay/neden; açıklık ayrı bir şeydir, olayı kolaylaştıran zayıflıktır). Geçiş: "Bu üçünü tek cümlede birleştirmenin bir yolu var."
:::

---

## Tek cümlelik model

> **"[Açıklık] nedeniyle [tehdit] gerçekleşirse, [varlık] üzerinde [risk] doğar."**

**Doldurulmuş örnek:**
> Yetki ataması gözden geçirilmediği için, yetkisiz bir kişi başvuru kaydına eriştiğinde, başvuru sahibinin mahremiyeti ve kurumun karar doğruluğu tehlikeye girer.

*Bu kesin bir matematiksel formül (olasılık × açıklık gibi) değildir — üç terimi doğru yerde kullanma alışkanlığıdır.*

::: {.notes}
Bu slayt kartın son satırını doldururken öğrencinin başvuracağı şablon; ezberletmeye değer tek cümle budur. Şablonu önce boş haliyle göster, sonra bizim örneğimizle doldur — öğrenci bunu kendi seçtiği varlıkla tekrar dolduracak (vaka kartında). Kritik uyarı: bu bir risk formülü değil (olasılık × etki gibi sayısal bir hesap değil); amaç kesin sayı üretmek değil, üç terimi doğru yerde kullanabilmek. Bunu netleştirmezsen öğrenci ileride gap-risk-analizi dersinde gerçek bir formülle karşılaştığında kafası karışır — orada gerçek bir olasılık×etki hesabı görecek, bu farklı bir şey. Geçiş: "Bu varlık gerçekte tek başına durmuyor — etrafında başka varlıklar var. Ama bugün oraya girmeyeceğiz."
:::

---

## Bağımlılık var, ama bu dersin sınırı burada biter

Başvuru kaydı → personel (kullanıcı) → bilgisayar (uç nokta) → uygulama → ağ

*Bir varlığın güvenliği, ona bağlı diğer varlıkların güvenliğinden de etkilenir.*

**Bu ders bu bağımlılığın teknik mimarisini çözümlemez.**

::: {.notes}
Zincirin var olduğunu göster ama her halkasını açmaya kalkma — bu tuzağa düşmek kolay, çünkü öğrenci "ağ nasıl korunur" diye sorabilir. Cevap: bu sorunun kendisi meşru ama bu dersin kapsamı dışında; bu ders yalnızca bir varlığı tamamen izole düşünmemek gerektiğini gösteriyor. Hangi varlığın kime ait olduğu, nasıl kullanıldığı ve CIA açısından ne gerektirdiği sorusu ilerleyen varlık envanteri/sınıflandırma çalışmasının konusu — bunu söyleyerek köprüyü şimdiden kur. Geçiş: "Şimdi öğrendiklerimizi tek bir kayıt üzerinden somutlaştıralım — kartı birlikte dolduracağız."
:::

---

## Vaka kartı (1/3) — kimlik ve kullanım

**Odak varlık: öğrenci/aday başvuru kaydı**

| Kart alanı | Bu varlık için gerekçe |
|---|---|
| Varlık adı ve işlevi | Başvurunun değerlendirilip sonuçlandırılması kararını destekler |
| Sahip/sorumlu rol | Başvuru değerlendirme biriminin yetkili personel rolü (rol düzeyinde, kişi adı değil) |
| Kimler hangi amaçla kullanır? | Değerlendirme personeli (karar), birim yöneticisi (onay), başvuru sahibi (durum sorgulama) |

::: {.notes}
Kartı doldururken vurgulanacak disiplin: "sahip/sorumlu rol" alanına kişi adı değil rol yazılır — bu, sorumluluğun kişiye değil göreve bağlı olduğunu gösterir (bir personel işten ayrılsa bile sorumluluk rolde kalır). "Kimler hangi amaçla kullanır" alanında üç farklı kullanıcı grubunun üç farklı amacı olduğunu ayırt ettir — bu ayrım birazdan CIA satırlarını doldururken işe yarayacak (örneğin başvuru sahibinin kendi kaydını görmesi ile personelin başka birinin kaydını görmesi aynı gizlilik sorusu değildir). Geçiş: "Şimdi bu varlık için CIA'nın üç sorusunu tek tek cevaplayalım."
:::

---

## Vaka kartı (2/3) — CIA gereksinimleri

| Kart alanı | Bu varlık için gerekçe |
|---|---|
| Gizlilik + ihlal etkisi | Yalnızca yetkili görüntüleme; ihlalinde kişisel bilgiler ilgisiz kişilere ulaşır, sürece güven zedelenir |
| Bütünlük + ihlal etkisi | Yalnızca yetkili ve doğru değiştirme; ihlalinde başvuru durumu yanlış kaydedilir, hatalı karar doğar |
| Erişilebilirlik + ihlal etkisi | Gerektiğinde yetkili erişim; ihlalinde süresi içinde karar verilemez, süreç aksar |

::: {.notes}
Bu üç satır, birkaç slayt önce ayrı ayrı işlediğimiz gizlilik/bütünlük/erişilebilirlik slaytlarının doğrudan tekrarı değil, onların kart formatına dökülmüş hali — öğrenciye bunun aynı akıl yürütme olduğunu, sadece şimdi yazılı hale geldiğini hatırlat. Sınıf pratiğinde burada dur ve öğrencilere sor: "personel belgesi için bu üç satırı siz doldursanız ne yazardınız?" — cevap istemeden devam etme, çünkü kartın asıl amacı öğrencinin kendi gerekçesini kurmasıdır, bizim cevabımızı ezberlemesi değil. Geçiş: "Son satır: bir tehdit, bir açıklık, bir olası risk."
:::

---

## Vaka kartı (3/3) — tehdit, açıklık, risk

| Kart alanı | Bu varlık için gerekçe |
|---|---|
| Tehdit | Yetkisiz kişinin kayda erişme girişimi |
| Açıklık | Yetki ataması gözden geçirilmemiş |
| Risk | Mahremiyet ihlali ve hatalı karar olasılığı |

*Üç terim ayrı cümlelerde ve varlıkla bağlı kurulmalı; birini diğerinin yerine kullanmak (örn. "açıklık" yerine "risk") ayrımı bozar.*

::: {.notes}
Bu satırı doldururken en sık yapılan hata: öğrencinin tehdit ile açıklığı ters yazması ya da ikisini tek cümlede birleştirip riski atlaması. Tahtada üç ayrı cümle kurdur, tek cümlede birleştirtme. Kartın resmî sınıflandırma etiketi, kesin olasılık/etki puanı veya çözüm reçetesi içermediğini bir kez daha hatırlat — bunlar ileri derslerin konusu. Geçiş: "Muhtemelen içinizden biri şimdi 'güçlü parola kullanılmalı' demek istiyor — buna bakalım."
:::

---

## "Güçlü parola kullanılmalı" desem, olur mu?

Bu öneri **yanlış değil** — ama kart bu aşamada bir çözüm reçetesi istemiyor.

**Önce sor:** Bu öneri hangi CIA gereksinimine, hangi tehdit/açıklığa cevap veriyor?

::: {.notes}
Bu slayt neredeyse kesin gerçekleşecek bir sınıf anını önceden karşılıyor — bir öğrenci mutlaka "şifreleme" ya da "güçlü parola" önerecek. Bu öneriyi reddetme, ama kabul de etme: önce hangi CIA gereksinimine (muhtemelen gizlilik) ve hangi tehdit/açıklığa (muhtemelen zayıf kimlik doğrulama) cevap verdiğini sordur. Kontrol seçimi ve gerekçelendirmesi bu dersin değil, sonraki derslerin (erişim-kontrolleri-parola-kayit-ve-izleme, gap-risk-analizi) konusu — bunu açıkça söyle ki öğrenci "neden şimdi çözmüyoruz" diye sormasın. Geçiş: "Bugün kurduğumuz kart burada bitmiyor."
:::

---

## Sonraki adım

Bugünkü kart: **tek bir varlığın** CIA gereksinimlerini ve tehdit-açıklık-risk ayrımını gerekçeli biçimde ortaya koyan bir **başlangıç kaydı**.

- İlerleyen ders → **varlık envanteri ve sınıflandırma:** birden fazla varlığı sahiplik/kullanım/CIA etkisi açısından sistematik kaydetme
- İlerleyen ders → **bilgi güvenliği yönetim döngüsü:** bu kararların kurumun yönetim sistemi içinde nasıl sürdürüleceği

::: {.notes}
Kapanış — bugünkü kartın nihai bir teslim değil, bir başlangıç kaydı olduğunu vurgula. İki köprüyü açıkça isimlendir: varlık envanteri (aynı kartın birden fazla varlık için sistematik hale gelmesi) ve BGYS/yönetim döngüsü (bu kararların nasıl sürdürüleceği). Bugün sınıflandırma etiketi, yönetim sistemi ya da standart ayrıntısına girmediğimizi, bunun bilinçli bir kapsam sınırı olduğunu söyle — öğrenci "ISO 27001 nerede?" diye sorarsa cevap "üçüncü haftada" olacak. Dersi, kartı elle doldurma alıştırmasıyla (uygulama saati) kapat: öğrenciler kendi seçtikleri bir varlık için (personel belgesi ya da hizmet başvurusu) aynı kartı dolduracak.
:::
