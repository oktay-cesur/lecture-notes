---
title: "Nitel Risk Değerlendirmesi, Matris ve Kabul Ölçütleri"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-11-17
execute:
  echo: false
---

## Farkı gördük, peki hangi riske öncelik vereceğiz?

- Mevcut uygulamalar hedef politikalarla karşılaştırıldı, eksikler tespit edildi ve fark kayıtları çıkarıldı.
- Fark analizi sonucunda ortaya çıkan tipik tablo:
  - Kapatılmamış onlarca eski kullanıcı hesabı,
  - Düzenli denenmeyen yedekler,
  - Güncellenmemiş sunucu yazılımları,
  - Açık unutulmuş dosya paylaşım izinleri.
- Her eksik bir zafiyettir ve her zafiyet bir risk senaryosu doğurabilir.

**Yönetim sorar:** Sınırlı bütçemiz ve zamanımız var; önce hangisini ele almalıyız?

::: {.notes}
İlk saatte mevcut durum ile hedef politikalar arasındaki farkları inceledik ve her farkın olası bir olaya dönüştüğü risk senaryolarını kurduk. Ancak sahada fark analizi tamamlandığında masaya birkaç tane değil, onlarca hatta yüzlerce eksik gelir. Güvenlik sorumlusunun görevi yönetim karşısına çıkıp "hepsi çok tehlikeli, hepsini aynı anda kapatalım" demek değildir; çünkü hiçbir kurumun sınırsız bütçesi, teknik personeli veya zamanı yoktur.

Fark kayıtlarını yönetilebilir bir eylem sırasına sokmak için araya risk değerlendirmesi adımı girer. Değerlendirme, tanımlanan her senaryonun belirlenen dönemde ne kadar olası olduğunu ve gerçekleştiğinde kuruma ne boyutta zarar vereceğini kurumsal ölçütlerle tartma işidir. Örneğin Duru Eğitim Merkezi'nde ayrılan personelin açık kalan hesapları (`ayrilan-hesap`), düzenli test edilmeyen yedeklerden geri yükleme (`geri-yukleme`) ve ortak ağdaki takvim dosyasının yetkileri (`takvim-dosyasi`) aynı anda masada durduğunda, iş sahibi ve karar yetkilisinin kaynağı nereye ayıracağını bu tartı belirler.

Sık düşülen hata, tespit edilen her politika uyumsuzluğunu eşit ağırlıkta saymak ya da en kolay düzeltilecek teknik eksiği ilk sıraya koymaktır. Öncelik sırası düzeltme kolaylığına göre değil, senaryonun kurumsal işleyişte açacağı kayba göre kurulur; aksi hâlde kurum ufak aksaklıklarla vakit kaybederken kritik kayıtları tehlikeye atan açıkları gözden kaçırır. Şimdi bu önceliklendirmeyi neden uydurma sayılarla değil de nitel ölçütlerle yaptığımızı inceleyeceğiz.
:::

---

## Neden kesin sayılar yerine nitel değerlendirme yapıyoruz?

**Nitel risk değerlendirmesi**, risk senaryolarının olasılık ve etki düzeylerini kesin matematiksel veya finansal sayılar yerine, önceden tanımlanmış sözel ölçütlerle (düşük, orta, yüksek gibi) sınıflama yöntemidir.

. . .

- Siber güvenlikte bir riskin yıllık kesin frekansını veya itibar kaybının kuruşu kuruşuna maliyetini önceden hesaplamak çoğu zaman imkânsızdır.
- Dayanaksız sayılar uydurmak kararları bilimsel yapmaz; aksine yanıltıcı bir güven hissi doğurur.
- Nitel değerlendirme, yönetimin ortak ve anlaşılır bir ölçek üzerinden hızlı ve tutarlı öncelik kararı almasını sağlar.

::: {.notes}
Risk analizinde bazen "Bu saldırının gerçekleşme ihtimali yıllık yüzde 14,2'dir ve maliyeti 432.500 liradır" gibi kesin rakamlar aranır; bu yaklaşıma nicel (sayısal) değerlendirme denir. Sigorta veya finans sektörünün uzun yıllara dayalı istatistik bulunan alanlarında sayısal modeller işlese de kurumsal bilgi güvenliğinde tehditlerin yıllık kesin frekansını veya gizlilik kaybının tam parasal karşılığını önceden hesaplamak çoğu zaman olanaksızdır.

Örneğin eski bir çalışanın açık unutulan hesabının kötüye kullanılma ihtimalini yüzdeyle ifade edemezsiniz; çünkü karşımızdaki durum düzenli tekrarlayan bir makine arızası ya da doğa olayı değil, fırsat ve niyete bağlı insan davranışıdır. Sayısal dayanak yokken olasılığa keyfî puanlar vermek analizde sahte bir kesinlik yaratır. Bunun yerine kurumun önceden üzerinde uzlaştığı açık sözel ölçütlerle "Düşük, Orta, Yüksek" düzeylerini kullanmak, farklı değerlendiricilerin aynı olguya baktığında aynı sonuca ulaşmasını sağlar.

Nitel değerlendirmenin "öznel veya keyfî tahmin" olduğu düşüncesi yaygın bir yanılgıdır. Nitel yöntem, analistin içinden geçen sıfatı yazması değil; kurumun zaman dilimi, fırsat sıklığı, iş kesintisi süresi ve bilgi sınıfı için koyduğu somut eşiklere kanıt eşleştirmesidir. Bu eşleştirmeyi doğru kurabilmek için önce değerlendirmenin iki temel ayağı olan olasılık ve etki sorularını birbirinden ayırmamız gerekir.
:::

---

## Olasılık ve etki birbirinden bağımsız iki sorudur

**Olasılık**, belirlenen bir değerlendirme döneminde senaryonun gerçekleşmesine ilişkin kurumsal tahmindir.

**Etki**, senaryo gerçekleştiğinde ortaya çıkacak gizlilik, bütünlük veya erişilebilirlik (CIA) kaybı ile bunun kurumsal işleyişe yansıyan sonucudur.

. . .

**İki soru aynı gerekçeyle yanıtlanmaz:**

- Bir olayın sonucunun çok yıkıcı olması, onun hemen yarın gerçekleşeceği anlamına gelmez.
- Bir aksaklığın her gün yaşanması, kurumun faaliyetlerini tek başına durduracağı anlamına gelmez.

::: {.notes}
Değerlendirme çalışmasında en sık düşülen kavramsal tuzak, olasılık ile etkiyi tek bir duygu altında birleştirmektir. Oysa bu iki kavram risk senaryosunun bambaşka iki yönünü sorgular: Olasılık "Bu senaryo belirlenen dönemde ne kadar kolay ve ne sıklıkla tetiklenebilir?" sorusuna yanıt ararken, etki "Senaryo gerçekleştiğinde bilgi varlığının gizlilik, bütünlük veya erişilebilirliği (CIA) ne ölçüde bozulur ve kurum bundan nasıl zarar görür?" sorusuna odaklanır.

İki sorunun dayandığı kanıt kaynakları birbirinden tamamen ayrıdır. Olasılık değerlendirilirken zafiyetin oluşturduğu yolun açık olup olmadığına, tehdidin bu yolu kullanma fırsatının sıklığına ve yol üzerindeki engelleyici kontrollerin sahada gerçekten çalışıp çalışmadığına bakılır. Etki değerlendirilirken ise mevcut kontrollerin gücüne değil, doğrudan etkilenen bilginin kurumsal sınıfına ve iş sürecinde doğacak kesinti süresine bakılır.

Bu bağımsızlığı iki uç örnekle görebiliriz. Bir senaryonun doğuracağı zarar çok yıkıcı göründüğünde (örneğin tüm veritabanının silinmesi veya kursiyer sözleşmelerinin tamamen ifşa olması), analist korkuyla olasılığı da "Yüksek" yazma eğilimine girebilir; oysa veri çevrimdışı, yedekli ve sıkı erişim kontrolleriyle korunuyorsa zarar çok büyük olsa bile olasılık düşüktür. Tersi durumda kurum içinde her gün üç-beş personelin yanlış dosya adlandırması veya ufak yazım hatası yapması çok sık yaşanır (yüksek olasılık), ancak bunun kurumsal işleyişe etkisi düşüktür.

Risk kaydında olasılık gerekçesine "veri çok kritik olduğu için yüksek" yazmak ya da etki gerekçesine "kontrol var, bir şey olmaz" yazmak bu iki eksenin karıştırıldığını gösterir. Olasılık ve etkiyi birbirine bulaştırmadan değerlendirebilmek için her ikisinin kurumsal ölçüt tablosunu ayrı ayrı okumamız gerekir; önce olasılık ölçütünden başlıyoruz.
:::

---

## Olasılık değerlendirmesi: Dönem ve açık yol

- Olasılık kişisel bir his değil; değerlendirmenin geçerli olduğu **zaman dilimine** ve **yolun açıklığına** dayanan kurumsal tespittir.
- Her senaryoda tehdidin zafiyete ulaşma sıklığı ile engelleyici kontrolün çalışıp çalışmadığı birlikte incelenir.

**Duru Eğitim Merkezi Nitel Olasılık Ölçütü (Gelecek 3 Aylık Dönem):**

| Olasılık Düzeyi | Kurumun Değerlendirme Ölçütü |
|---|---|
| **Yüksek** | Zarara yol açan yol açıktır, her iş günü fırsat vardır ve işleyen engelleyici bir kontrol bulunmamaktadır. |
| **Orta** | Zarara yol açan yol açıktır; bu durumun ortaya çıkma fırsatı ayda birkaç kez oluşmaktadır. |
| **Düşük** | Fırsat seyrektir ve engelleyici kontrollerin çalıştığı testlerle gösterilmiştir. |

::: {.notes}
Olasılığı değerlendirirken ilk adım, tahminin hangi zaman dilimi için yapıldığını sabitlemektir. Duru Eğitim Merkezi'nde değerlendirme dönemi "gelecek 3 ay" olarak tanımlanmıştır; çünkü bir olayın 10 yıllık bir sürede gerçekleşme ihtimali ile önümüzdeki 3 ayda gerçekleşme ihtimali aynı ölçekle tartılamaz. Zaman penceresi netleştiğinde sezgisel tahmin yürütmek yerine tablodaki üç somut koşul sorgulanır: Zarara giden yol açık mı, fırsat ne sıklıkla doğuyor ve yolu kesen engelleyici bir kontrol çalışıyor mu?

Tablodaki düzeyler bu üç koşulun sahadaki kanıtına göre seçilir. Örneğin `ayrilan-hesap` vakasında işten ayrılan 10 personelden 2'sinin hesabı 7 gün boyunca açık kalmışsa, uzaktan erişim yolu açıktır, her iş günü fırsat vardır ve ayrılış günü saat 17.30'da hesabı kapatan işleyen bir kontrol bulunmamaktadır; bu durum doğrudan "Yüksek" olasılık ölçütünü karşılar. Fırsat her iş günü değil de ayda birkaç kez oluşuyorsa olasılık "Orta" düzeye iner.

"Düşük" olasılık seçebilmek için yalnızca fırsatın seyrek olması yetmez; aynı zamanda engelleyici kontrollerin sahada çalıştığının testlerle gösterilmiş olması şarttır. Yazılı bir kuralın varlığı tek başına kanıt sayılmaz ve ölçüt tablosunun dışındaki durumlar için varsayım yapılmayıp ek bilgi istenir. Olasılık düzeyini kanıtıyla sabitledikten sonra ikinci eksen olan etki ölçütüne geçilir.
:::

---

## Etki değerlendirmesi: CIA kaybı ve iş sonucu

- Etki yalnızca teknik donanım arızası değil; temel faaliyetlerin aksaması, yasal yaptırım veya gizli kayıtların ifşasıdır.

**Duru Eğitim Merkezi Nitel Etki Ölçütü:**

| Etki Düzeyi | Kurumun Değerlendirme Ölçütü |
|---|---|
| **Düşük** | Yalnızca yeniden üretilebilir, dışarıya açık bilgiler etkilenir; iş kesintisi 1 saatten kısadır. |
| **Orta** | Bir birimin işi 1–4 saat aksar veya sınırlı iç işlem hatası oluşur. |
| **Yüksek** | Dışarıya verilmemesi gereken kayıtlar yetkisiz erişime açılır ya da başvuru işi 4 saatten uzun durur. |

- **Kural:** Bir olayda birden fazla sonuç ortaya çıkıyorsa en yüksek etki düzeyi esas alınır.

::: {.notes}
Etkiyi belirlerken 5. haftada kurulan varlık envanteri ve bilgi sınıflandırma mantığını hatırlarız. Bir olay gerçekleştiğinde bilgi varlığının gizliliği, bütünlüğü veya erişilebilirliği bozulur; ancak yönetim açısından asıl soru bu kaybın kurumun işleyişinde neye yol açtığıdır. Duru Eğitim Merkezi bir eğitim kurumu olduğu için kursiyerlerin sözleşmeleri, ödeme bilgileri, kimlik kayıtları ve başvuru işlemlerinin sürekliliği korunması gereken en kritik değerlerdir.

Kurumun etki tablosu iki temel ölçütü birlikte kullanır: etkilenen bilginin gizlilik derecesi ve iş kesintisinin süresi. Örneğin 80 kursiyerin sözleşme ve iletişim kayıtlarını barındıran bir alana yetkisiz erişim açılması ya da merkezde başvuru kabulünün 4 saatten uzun durması doğrudan "Yüksek" etki olarak sınıflandırılır. Buna karşılık yalnızca kamuya açık bir duyuru tablosunun bozulması ve 20 dakikada yeniden üretilerek düzeltilebilmesi "Düşük" etkidir.

Tek bir olay bazen hem kısa süreli bir işlem hatasına hem de gizli kayıtların yetkisiz erişime açılmasına yol açabilir. Böyle durumlarda ortalama alınmaz; "en yüksek etki düzeyi esas alınır" kuralı gereği senaryo en ağır sonuca göre sınıflandırılır. Olasılık ve etki ölçütlerini öğrendiğimize göre, sahada bu ölçütleri uygularken en sık karşılaşılan yanıltıcı savunmayı inceleyebiliriz.
:::

---

## Bilgi eksikliği düşük olasılığın kanıtı değildir

**Kurum çalışanlarının risk değerlendirmesinde en sık düştüğü tuzak:**

> "Geçtiğimiz yıl bu konuda hiçbir güvenlik vakası yaşamadık; demek ki olasılık düşüktür."

. . .

- Bir olayın gerçekleştiğine dair kayıt bulunmaması, o olayın yaşanmadığını kanıtlamaz.
- Çoğu zaman kurumda izleme, denetim veya günlük kayıtları (log) olmadığı için olaylar fark edilmemiştir.
- Kontrolün varlığı ve işlediği kanıtla doğrulanmadıkça olasılık sırf "olay çıkmadı" diye düşük seçilemez.

::: {.notes}
Sahada risk değerlendirmesi yaparken güvenlikten sorumlu olmayan birimlerden en sık duyulan savunma, "Yıllardır böyle çalışıyoruz, bugüne kadar hiçbir sorun olmadı" cümlesidir. Bu yaklaşım geçmişte bilinen bir kriz çıkmamış olmasını geleceğe dönük bir güvenlik kanıtı sayar; oysa bilgi güvenliğinde kanıt yokluğu, tehlike yokluğu anlamına gelmez.

Bir olayın yaşandığının bilinebilmesi için önce onu tespit edecek izleme ve günlük kaydı (log) mekanizmasının çalışıyor olması gerekir. Eğer sistemde kimin ne zaman giriş yaptığını gösteren bir kayıt mekanizması yoksa, ayrılan bir çalışanın açık kalan hesabıyla sisteme girip kursiyer kayıtlarını kopyaladığını kimse fark edemez. Benzer biçimde yedeklerin düzenli geri yükleme testi (`geri-yukleme`) yapılmıyorsa, yedeklerin bozuk olduğu ancak gerçek bir kesinti anında anlaşılır; o güne kadar olay kaydının bulunmaması bir başarının değil, sistemdeki kör noktanın işaretidir.

Değerlendirme tablosunda "Düşük" olasılık seçebilmenin koşulu "geçmişte olay bildirilmemesi" değil, fırsatın seyrek olması ve engelleyici kontrolün çalıştığının test kayıtlarıyla doğrulanmasıdır. Kanıt ve gözlem eksikliği olduğunda olasılık düşürülmez; açık yol ve kontrol eksikliği olarak değerlendirilir. Şimdi ayrı ayrı kanıtlandırdığımız olasılık ve etki düzeylerini tek bir karar seviyesinde nasıl birleştireceğimize geçiyoruz.
:::

---

## Risk matrisi nedir?

**Risk matrisi**, olasılık ve etki düzeylerini iki eksende bir araya getirerek her senaryoyu kurumsal bir bileşik risk düzeyine eşleyen karar tablosudur.

. . .

- İki ayrı değerlendirme sonucunu (Olasılık ve Etki) yönetimin karar alabileceği tek bir seviyeye dönüştürür.
- Seviyeler matematiksel olarak çarpılmaz; kurumun risk iştahına ve politikasına göre kurgulanmış sözel tablodan okunur.
- Renkler (yeşil, sarı, kırmızı) kararın kendisi değil, görsel destekleyicisidir. Karar metindeki düzey adına dayanır.

::: {.notes}
Her senaryo için olasılık ve etkiyi ayrı ayrı belirledikten sonra elimizde "Orta Olasılık – Yüksek Etki" veya "Yüksek Olasılık – Düşük Etki" gibi ikili sonuçlar oluşur. Yönetimin onlarca senaryoyu birbiriyle kıyaslayıp öncelik sırasına koyabilmesi için bu iki boyutun tek bir bileşik risk düzeyine dönüştürülmesi gerekir; risk matrisi bu eşlemeyi yapan kurumsal karar tablosudur.

Nitel risk matrisi matematiksel bir formül değildir; düzeylere 1 ile 3 arasında sayılar verip bunları çarpmak nitel yöntemin mantığına aykırıdır. Matristeki her hücre, yönetimin "Hangi olasılık ve etki birleşimini ne kadar ciddiye alacağız?" sorusuna önceden verdiği politik yanıtı temsil eder. Standartlar kurumlara zorunlu tek bir matris dayatmaz; kurum kendi yapısına göre 3×3 veya 5×5 gibi ortak bir mutabakat haritası kurgular.

Uygulamada sık yapılan bir hata, matrisi yalnızca renklerle ("sarı çıktı", "kırmızı bölge") ifade etmek ve renklerin siyah-beyaz çıktıda veya erişilebilirlik açısından anlam kaybına uğradığını gözden kaçırmaktır. Renkler yalnızca görsel destektir; kayıtlarda karar her zaman "Düşük Risk, Orta Risk, Yüksek Risk" gibi metindeki düzey adına dayanır. Bir sonraki slaytta Duru Eğitim Merkezi'nin 3×3 matrisinin hücrelerini nasıl okuyacağımızı göreceğiz.
:::

---

## Duru Eğitim Merkezi 3×3 Risk Matrisi

| Olasılık \ Etki | Düşük Etki | Orta Etki | Yüksek Etki |
|---|---|---|---|
| **Yüksek Olasılık** | Orta Risk | Yüksek Risk | Yüksek Risk |
| **Orta Olasılık** | Düşük Risk | Orta Risk | Yüksek Risk |
| **Düşük Olasılık** | Düşük Risk | Düşük Risk | Orta Risk |

. . .

- **Yüksek Etki** durumunda olasılık orta veya yüksekse sonuç doğrudan **Yüksek Risk** çıkar.
- **Düşük Olasılık** durumunda etki yüksek bile olsa sonuç **Orta Risk** düzeyinde dengelenir.
- **Yüksek Olasılık ve Düşük Etki** birleşimi **Orta Risk**; **Düşük Olasılık ve Orta Etki** birleşimi ise **Düşük Risk** hücresine karşılık gelir.

::: {.notes}
Matrisi okurken her zaman önce sol sütundan senaryonun **Olasılık** satırı bulunur, ardından üst başlıktan **Etki** sütununa doğru sağa ilerlenir ve iki eksenin kesiştiği hücreden bileşik risk düzeyi okunur. Tablonun tamamına bakıldığında Duru Eğitim Merkezi'nin dokuz hücreyi üç Düşük Risk, üç Orta Risk ve üç Yüksek Risk olacak biçimde kurguladığı görülür; bu yapı kurumun hangi durumlarda alarma geçeceğini önceden sabitler.

Sağdaki **Yüksek Etki** sütununa dikkat ettiğinizde, olasılık "Yüksek" veya "Orta" olduğunda sonucun doğrudan **Yüksek Risk** çıktığını, olasılık "Düşük" olduğunda bile riskin **Düşük Risk**'e inmediğini ve **Orta Risk**'te tutulduğunu görürüz. Bunun gerekçesi kurumun dışarıya verilmemesi gereken kursiyer kayıtlarını ve 4 saati aşan başvuru kesintilerini çok kritik kabul etmesidir; etki yıkıcı olduğunda kontrol test edilmiş ve fırsat seyrek olsa dahi risk tamamen göz ardı edilmez, yönetim kararı ve gözden geçirme takibinde tutulur.

Matrisin hücrelerini somut örneklerle adım adım okuyalım. Gerçekleşme fırsatı ayda birkaç kez oluşan (**Orta Olasılık** satırı) ve gerçekleştiğinde kursiyer verilerinin yetkisiz erişime açılmasına yol açacak (**Yüksek Etki** sütunu) bir senaryo, ikinci satır ile üçüncü sütunun kesişiminde **Yüksek Risk** hücresini verir. Buna karşılık her iş günü yaşanabilen (**Yüksek Olasılık** satırı) ancak yalnızca kamuya açık bir duyuru bilgisini etkileyip 20 dakikada düzeltilebilen (**Düşük Etki** sütunu) bir aksaklık birinci satır ile birinci sütunun kesişiminde **Orta Risk** çıkarken; fırsatın seyrek ve kontrolün testli olduğu (**Düşük Olasılık** satırı) ve 1–4 saatlik birim aksamasına yol açabilecek (**Orta Etki** sütunu) bir senaryo **Düşük Risk** hücresine yerleşir.

Matris okurken en sık yapılan hata, satır ve sütun sırasını karıştırarak "Yüksek Olasılık – Düşük Etki" ile "Düşük Olasılık – Orta Etki" durumlarını aynı kefeye koymak ya da tabloya bakmadan zihinden ortalama almaktır. Her senaryoda satır ve sütun adı açıkça yazılarak kesişim hücresi gösterilmelidir. Matristen çıkan bileşik risk düzeyinin kurum için ne anlama geldiğini ise bir sonraki slayttaki risk kabul ölçütleri belirler.
:::

---

## Kurumun risk kabul ölçütleri

**Kabul ölçütü**, değerlendirme sonucunda ortaya çıkan bir risk düzeyinin hangi koşullarda ve hangi sorumlulukla kurum tarafından tolere edilebileceğini belirleyen kuraldır.

**Duru Eğitim Merkezi Kabul Ölçütleri:**

| Risk Düzeyi | Kurumsal Kabul Durumu ve Koşulu |
|---|---|
| **Düşük** | İş sahibinin rutin izleme kaydıyla kabul edilebilir. Ek bütçe veya acil proje gerektirmez. |
| **Orta** | Gerekçeli yönetim kararı ve tanımlı bir gözden geçirme tarihiyle kabul sınırında değerlendirilebilir. |
| **Yüksek** | Kurumun kabul sınırı dışındadır. Mevcut hâliyle kabul edilemez; öncelikli tedbir planlanması zorunludur. |

::: {.notes}
Matristen "Düşük", "Orta" veya "Yüksek Risk" sonucunu bulmak değerlendirmenin ilk adımıdır; bunun hemen ardından kurumun bu düzeye nasıl bir yönetim tepkisi vereceğini bilmesi gerekir. Hiçbir kurum bütün riskleri sıfırlayamaz; sıfır risk hedefi gerçekçi değildir ve kurumu çalışamaz hâle getirir. Kabul ölçütü, hangi risk düzeyinin mevcut kontrollerle üstlenilebileceğini ve hangisinin mevcut hâliyle kesinlikle bırakılamayacağını belirleyen kuraldır.

Tablodaki üç düzey karar yetkisini ve sorumluluğu kademelendirir. **Düşük Risk** düzeyindeki bir durum için üst yönetim toplanmaz; ilgili varlığın iş sahibi rutin izleme kaydını tutarak riski kabul edebilir. **Orta Risk** ise "kabul sınırında" yer alır; iş sahibi veya teknik uygulayıcı bunu kendi başına geçiştiremez, karar yetkilisinin gerekçeli yönetim kararı ve tanımlı bir gözden geçirme tarihi şarttır. **Yüksek Risk** hücresine düşen bir senaryo (örneğin `ayrilan-hesap`) kurumun kabul sınırı dışındadır; mevcut hâliyle kabul edilemez ve öncelikli tedbir planlanması zorunludur.

"Kabul edilebilir" veya "kabul sınırında" ifadeleri riskin unutulacağı ve kayıttan silineceği anlamına gelmez; özellikle Orta Risk'te gözden geçirme tarihi geldiğinde kontrollerin durumu yeniden denetlenir. Ayrıca riski analiz edip hazırlayan kişi ile kabul kararını onaylayan karar yetkilisi aynı kişi olamaz (hazırlayan ≠ onaylayan). Şimdi tüm bu değerlendirme verilerinin tek bir belgede nasıl bir araya getirildiğini, yani risk kaydının yapısını inceleyeceğiz.
:::

---

## Risk kaydı nedir ve değerlendirmede hangi alanlar bulunur?

**Risk kaydı (risk kütüğü)**, tanımlanan her bir risk senaryosunun dayanaklarını, değerlendirme verilerini, düzeyini ve sorumlusunu bir arada tutan belgelenmiş kurumsal kayıttır.

**Değerlendirme Aşamasındaki Temel Alanlar:**

1. **Risk Kimliği ve Adı:** Kısa ve anlaşılır ad (ör. `ayrilan-hesap`).
2. **Bilgi Varlığı ve Sahibi:** Etkilenen sistem ve hesap verecek iş yöneticisi.
3. **Senaryo (Tehdit ve Zafiyet):** Hangi zayıflık hangi tehditle tetiklenebilir?
4. **Mevcut Kontroller:** Sahada fiilen çalışan mekanizma ve kanıtı.
5. **Olasılık ve Gerekçesi:** Kurum ölçütüne göre seçilen düzey ve dayanağı.
6. **Etki ve Gerekçesi:** Olası CIA kaybı ve iş sonucunun dayanağı.
7. **Risk Düzeyi ve Kabul Durumu:** Matris hücresi ve kabul edilebilirlik hükmü.
8. **Temel Tedbir İhtiyacı:** Risk yolundaki hangi zayıflığın kapatılacağı.

::: {.notes}
Fark analizi formunda olduğu gibi risk değerlendirmesinde de sözlü yapılan tartışmalar risk kaydına (risk kütüğüne) işlenmedikçe yönetim sistemi içinde takip edilemez. Kaydın ilk dört alanı önceki adımlarda kurulan temeli taşır: `ayrilan-hesap` gibi kısa bir kimlik verilir, 5. haftada kurulan varlık envanterinden bilgi varlığı ve hesap verecek iş sahibi alınır, tehdit ve zafiyet çiftiyle senaryo tanımlanır ve sahada fiilen çalışan mevcut kontroller kanıtıyla yazılır. Envanterde sahibi ve sınıfı olmayan bir varlığın etkisi gerekçelendirilemez.

Beşinci ve altıncı alanlara yalnızca "Düşük" veya "Yüksek" kelimesi yazılmaz; kurumun olasılık ve etki tablolarındaki hangi ölçütün hangi saha kanıtıyla karşılandığı açıkça belirtilir. Yedinci alanda 3×3 matristeki kesişim hücresi ile kabul ölçütü tablosundaki karşılığı ("Kabul edilebilir", "Kabul sınırında" veya "Kabul edilemez") birlikte kaydedilir. Sekizinci alan olan **Temel Tedbir İhtiyacı** ise risk yolunu oluşturan zincirde hangi zayıf halkanın güçlendirilmesi gerektiğini özetler.

Risk kaydı doldurulurken sık yapılan hata, gerekçe alanlarını kanıtsız bırakmak ya da sekizinci alana henüz kararlaştırılmamış ayrıntılı satın alma ve proje planları yazmaktır. Ayrıca teknik uygulayıcıyı varlığın "iş sahibi" sanmak sorumluluk zincirini bozar; iş sahibi ilgili süreçten hesap veren birim yöneticisidir. Şimdi bu sekiz alanın somut bir vaka üzerinde nasıl doldurulduğunu çözümlü örneğimizde göreceğiz.
:::

---

## Çözümlü Örnek: Sınav soru bankası senaryosu

**Senaryo Verisi:**

Duru Eğitim Merkezi'nde gelecek 3 aylık dönemde sınav soru bankasının tek kopyası bir USB bellekte, sınav koordinatörünün kilitli dolabında tutulmaktadır. USB bu dönemde yalnızca bir kez, sınav koordinatörünün gözetiminde taşınacaktır. Son 3 aydaki 4 habersiz kontrolün dördünde de USB kilitli dolapta bulunmuş ve anahtarın koordinatörde olduğu doğrulanmıştır.

. . .

- **Bilgi Varlığı:** Soru bankası
- **İş Sahibi:** Sınav koordinatörü
- **Tehdit:** Taşımada kayıp veya yetkisiz kopya
- **Zafiyet:** Taşınma gününde kilidin kısa süre açık kalması
- **Mevcut Kontrol:** USB kilitli dolapta tutulmakta ve anahtar koordinatörde bulunmaktadır; son 3 aydaki 4 habersiz kontrolde kontrolün çalıştığı testle gösterilmiştir. Taşınma koordinatör gözetiminde tek sefer yapılacaktır.

::: {.notes}
Çözümlü örneğimizde olasılık, etki ve matris adımlarını Duru Eğitim Merkezi'nin sınav soru bankası senaryosu üzerinde uyguluyoruz. Değerlendirmeye geçmeden önce olgu metnindeki bilgileri risk kaydının ilk dört alanına ayrıştırıyoruz: Bilgi varlığı sınav soru bankasıdır ve iş sahibi sınav koordinatörüdür. Tehdit, taşınma sırasında belleğin kaybolması veya yetkisiz kopyalanması; zafiyet ise taşınma gününde dolap kilidinin kısa süre açık kalmasıdır.

Olgu metninde dikkat etmemiz gereken en önemli nokta mevcut kontrolün kanıt niteliğidir. Metin yalnızca "dolap kilitli tutulur" şeklinde yazılı bir niyet bildirmiyor; son 3 aydaki 4 habersiz kontrolün dördünde de USB belleğin kilitli dolapta bulunduğunun ve anahtarın koordinatörde olduğunun testle doğrulandığını gösteriyor. Ayrıca gelecek 3 aylık değerlendirme döneminde taşıma işleminin her iş günü değil, koordinatör gözetiminde yalnızca bir kez yapılacağı belirtiliyor.

Senaryoyu okurken "USB bellek kullanmak her zaman yüksek olasılıklıdır" gibi ölçüt dışı bir önyargıyla hareket etmiyoruz; yalnızca vaka metnindeki kanıtları kurumun nitel olasılık ve etki tablolarıyla eşleştiriyoruz. Şimdi bu verilerin olasılık, etki, matris ve kabul durumu alanlarına nasıl dönüştüğünü bir sonraki slayttaki kayıt tablosunda adım adım inceleyelim.
:::

---

## Çözümlü Örnek: Değerlendirme gerekçeleri ve kayıt

| Alan | Değerlendirme Çıktısı ve Gerekçesi |
|---|---|
| **Olasılık** | **Düşük** — Tehdidin gerçekleşme fırsatı seyrektir (3 aylık dönemde tek bir taşıma günü) ve engelleyici kontrolün çalıştığı testle (son 3 aydaki 4 habersiz kontrol) gösterilmiştir. |
| **Etki** | **Yüksek** — Soru bankası kurum dışına verilmemesi gereken gizli kurumsal bilgidir; yetkisiz erişim veya kayıp durumunda sınav güvenliği doğrudan ortadan kalkar. |
| **Bileşik Risk Düzeyi** | **Orta Risk** (3×3 Matriste: Düşük Olasılık satırı × Yüksek Etki sütunu kesişimi) |
| **Kabul Durumu** | **Kabul sınırında** (Kurum ölçütüne göre Orta Risk; gerekçeli yönetim kararı ve tanımlı bir gözden geçirme tarihiyle kabul sınırında değerlendirilebilir). |
| **Temel Tedbir İhtiyacı** | Taşınma günü teslim kaydının tutulması ve aynı gün kilit kontrolünün yapılması. |

::: {.notes}
Tablodaki gerekçeleri kurum ölçütlerimize göre incelediğimizde olasılığın neden "Orta" veya "Yüksek" seçilmediği açıkça görülür. Zarara yol açan yol her iş günü ya da ayda birkaç kez açık değildir; fırsat 3 aylık dönem boyunca seyrektir (tek bir taşıma günü). Ayrıca dolabın kilitli tutulduğu ve anahtarın koordinatörde olduğu son 3 aydaki 4 habersiz denetim testiyle gösterilmiştir. "Daha önce hiç kaybolmadı" ifadesi özneldir ve kurum ölçütümüzde bir gerekçe sayılamaz; ölçütün aradığı kanıt testle gösterilmiş engelleyici kontroldür ve bu kanıt mevcut olduğu için olasılık **Düşük** düzeydedir.

Etki ise doğrudan **Yüksek** düzeydedir; çünkü soru bankası dışarıya verilmemesi gereken gizli kurumsal bilgidir ve yetkisiz erişime açılması sınav güvenliğini ortadan kaldırır. 3×3 matrise baktığımızda **Düşük Olasılık** satırı ile **Yüksek Etki** sütununun kesişimi bizi **Orta Risk** hücresine götürür. Kurum kabul ölçütüne göre Orta Risk **kabul sınırındadır**: Gerekçeli yönetim kararı ve tanımlı bir gözden geçirme tarihiyle değerlendirilebilir.

Tablonun son satırındaki **Temel Tedbir İhtiyacı** alanına yalnızca taşınma günündeki zafiyeti kapatacak kontrol ihtiyacı, yani "taşınma günü teslim kaydının tutulması ve aynı gün kilit kontrolünün yapılması" yazılmıştır. Ürün, bütçe veya satın alma kararı değerlendirme aşamasında yazılmaz; bu sınırın neden korunduğunu bir sonraki slaytta netleştireceğiz.
:::

---

## Temel tedbir ihtiyacı ile işleme kararı arasındaki sınır

**Değerlendirme aşamasında riskin yönü belirlenir; ancak ayrıntılı işleme kararları verilmez.**

. . .

- **Değerlendirme (Bu saat):**
  - "Bu risk Orta Risk düzeyindedir ve kabul sınırındadır."
  - "Temel ihtiyaç, taşınma günü teslim kaydı ve aynı gün kilit kontrolüdür."
- **İşleme ve Aksiyon Planı (Gelecek hafta — Hafta 10):**
  - Riski azaltacak mıyız, devredecek miyiz, kaçınacak mıyız?
  - Hangi yazılım veya bulut çözümü seçilecek?
  - Bütçeyi kim onaylayacak, görevi hangi uzman ne zamana kadar tamamlayacak?

- **Temel ilke:** Bu sınır, değerlendiricinin yönetim adına yetkisiz harcama veya aksiyon kararı vermesini engeller.

::: {.notes}
Risk yönetim sürecinde değerlendirme aşaması ile işleme aşaması arasındaki sınır, kurumsal yetki ve sorumluluk ayrımını korur. Değerlendirme yapan analistin görevi riskin düzeyini, kabul durumunu ve hangi kontrol boşluğundan kaynaklandığını tarafsız kanıtlarla ortaya koymaktır; bütçe tahsis etmek, kurum adına ticari ürün seçmek veya yönetim tercihi yapmak değerlendiricinin yetkisinde değildir.

Bu saatte doldurduğumuz **Temel Tedbir İhtiyacı** alanı yalnızca "Risk yolundaki hangi zayıf halka güçlendirilmeli?" sorusuna yanıt verir. Soru bankası örneğinde "taşınma günü teslim kaydı ve aynı gün kilit kontrolü" yazmak bir temel tedbir ihtiyacıdır. Buna karşılık gelecek hafta (Hafta 10) ele alınacak **Risk İşleme ve Aksiyon Planı**, riski azaltma, devretme veya kaçınma seçeneklerinden hangisinin uygulanacağını, hangi yazılım veya bulut çözümünün seçileceğini, bütçe onayını ve görevin hangi uzman tarafından ne zamana kadar tamamlanacağını belirler.

Bu ayrım aynı zamanda kurumdaki karar yetkilisi, iş sahibi ve teknik uygulayıcı rollerinin birbirine karışmasını önler. Değerlendirmeyi hazırlayan kişi tabloya doğrudan "Şu kasayı satın alalım, şu sistemi kuralım" diye kesinleşmiş bir karar yazarsa yönetim adına yetkisiz aksiyon kararı vermiş olur; oysa kurumsal yapıda hazırlayan ile onaylayan aynı kişi olamaz.

Değerlendirme kaydında tedbir ihtiyacını tamamen boş bırakmak ne kadar eksikse, oraya henüz yönetimce onaylanmamış bir proje reçetesi yazmak da o kadar hatalıdır. Değerlendirme aşamasının kapsamını ve sınırlarını netleştirdiğimize göre, şimdi öğrendiğimiz tüm adımları sınıf içi görev senaryosu üzerinde uygulayabiliriz.
:::

---

## Sınıf içi değerlendirme görevi: Takvim dosyası senaryosu

**Duru Eğitim Merkezi vaka verisi:**

- **Durum:** Kurumun ders ve sınav programını içeren takvim tablosu ortak paylaşılan yerel ağ klasöründedir. Kurala göre bu dosyayı yalnızca ders planlama sorumlusu değiştirebilir.
- **Kanıt / Olay:** Yapılan incelemede dosyanın düzenleme yetkisinin sehven kurumdaki tüm çalışanlara açık bırakıldığı belirlenmiştir. Son bir ayda iki kez yanlış değişiklik yapılmış; durum fark edilince önceki günün kopyasından 30 dakikada düzeltilmiştir.
- **Koşul:** Gelecek 3 ay boyunca tüm personelin dosyayı değiştirme fırsatı her iş günü mevcuttur; dosya yalnızca herkese açık ders saatlerini içermektedir.

**Görev adımları:**

- **Yöntem:** Duru Eğitim Merkezi nitel olasılık/etki ölçütlerini ve 3×3 risk matrisini kullanınız.
- **Çıktı:** Senaryonun **olasılık**, **etki**, **bileşik risk düzeyi**, **kabul durumu** ve **temel tedbir ihtiyacını** gerekçeleriyle aşağıdaki tabloya yazınız.

| Alan | Değerlendirme Çıktınız ve Gerekçeniz |
|---|---|
| **Olasılık** | *(Düşük / Orta / Yüksek ve dayanağı)* |
| **Etki** | *(Düşük / Orta / Yüksek ve dayanağı)* |
| **Bileşik Risk Düzeyi** | *(Düşük / Orta / Yüksek Risk)* |
| **Kabul Durumu** | *(Kabul edilebilir / Kabul sınırında / Kabul edilemez)* |
| **Temel Tedbir İhtiyacı** | *(Güçlendirilecek temel kontrol)* |

::: {.notes}
Bu uygulamada amaç, verilen vaka metnindeki durum, kanıt ve koşulları Duru Eğitim Merkezi'nin nitel değerlendirme tablolarıyla eşleştirerek gerekçeli bir risk kaydı oluşturmaktır. Çalışmanızda önce gelecek 3 aylık dönem için tanımlanan olasılık ölçüt tablosuna ve etki ölçüt tablosuna dönerek olgu metnindeki verilerin hangi düzeye karşılık geldiğini belirleyin; seçtiğiniz her düzeyin yanına mutlaka senaryo metninden dayanak yazın.

Olasılık ve etki düzeylerini gerekçelendirdikten sonra 3×3 risk matrisinde ilgili satır ve sütunun kesişimini bularak bileşik risk düzeyini ve kurumun kabul ölçütleri tablosundaki kabul durumunu kaydedin. Son satırda ise ayrıntılı bir satın alma veya proje planına girmeden, yalnızca senaryodaki zafiyeti kapatacak temel tedbir ihtiyacını tanımlayın.
:::
