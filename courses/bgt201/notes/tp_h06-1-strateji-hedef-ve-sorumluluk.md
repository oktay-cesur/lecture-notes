---
title: "Strateji, hedefler ve sorumluluklar"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-11-10
execute:
  echo: false
---

## Herkes çalışıyor, ama güvenliğin iyileştiğini nasıl anlarız?

Bir kurumda parolası zayıf hesapları temizleyen bir ekip, yedekleri izleyen başka bir ekip ve personele eğitim düzenleyen üçüncü bir ekip var. Üçü de düzenli çalışıyor.

Yönetim soruyor: "Bu çeyrekte güvenlik ne kadar iyileşti?"

**Üç ekibin yaptığı işler bu soruya yanıt oluyor mu?**

::: {.notes}
Ekiplerin her biri yaptığı işi sayabilir: kaç hesap temizlendi, kaç yedek alındı, kaç kişi eğitime katıldı. Bunlar yapılan işin ölçüsüdür ve durumun nasıl değiştiğini söylemez. Yönetimin sorusu ise bir durum sorusudur: yetkisiz erişim riski öncekine göre azaldı mı, bir arızadan sonra sistem geri getirilebiliyor mu?

Bu soruya yanıt verebilmek için üç şey gerekir. Birincisi, önce hangi durumu hangi başlangıç değerinden hangi hedef değere getirmek istediğimize karar vermemizdir. İkincisi bunun hesabını yönetime verecek kişinin belli olmasıdır. Üçüncüsü sonucu gösterecek kaydın baştan belirlenmesidir. Bu üç parçayı bir araya getiren iş, güvenlik stratejisinin ve güvenlik hedeflerinin belirlenmesidir.
:::

---

## Güvenlik stratejisi hangi kararlardan oluşur?

**Bilgi güvenliği stratejisi**, kurumun iş amaçlarını desteklemek için hangi güvenlik ihtiyaçlarına öncelik vereceğini, sınırlı kaynağını nereye yönelteceğini ve sonucu nasıl izleyeceğini belirleyen yönetim kararlarının bütünüdür.

| Halka | Sorduğu soru |
|---|---|
| İş amacı | Kurum ne için var? |
| Güvenlik ihtiyacı | Bu amacı hangi eksik zayıflatıyor? |
| Öncelik kararı | Önce hangisi ele alınacak? |
| Hedef | Hangi durumdan hangi duruma ulaşılacak? |
| Faaliyet | Bunun için ne yapılacak? |

::: {.notes}
Strateji tek bir karar sayılmaz, birbirine gerekçe olan kararların sırasıdır. Bir klinik üzerinden okuyalım. Klinik hastaya randevu verir ve kayıtlarını doğru tutar; bu iş amacıdır. Randevu kayıtlarının yedekten geri getirilebildiği hiç denenmemişse, ihtiyaç kayıtların bir arızadan sonra geri getirilebilmesidir. Bu ihtiyaç dönemin ilk işi olarak seçilirse hedef, geri yükleme denemelerinin başarı oranının belirli bir değere çıkmasıdır. Faaliyet ise geri yükleme denemesi yapmaktır.

Çoğu kurum zincire son halkadan, yani faaliyetten başlar: "yedekleri deneyelim" denir. O zaman işin hangi ihtiyaca hizmet ettiği, bittiğinin neyle anlaşılacağı ve neden başka bir işin değil de bunun seçildiği açık kalır. Zinciri yukarıdan aşağı okuyunca her halka bir sonrakine gerekçe olur. Aşağıdan yukarı okuyunca da bir faaliyetin hangi iş amacına hizmet ettiğini geriye doğru izleyebiliriz.
:::

---

## Gözlem ile güvenlik ihtiyacı aynı şey midir?

**İş amacı**, kurumun yaptığı işin varlık nedenini taşıyan sonuçtur.

**Gözlem**, ölçülmüş ya da sayılmış bir durumdur; ne yapılacağını söylemez.

**Güvenlik ihtiyacı**, iş amacını destekleyen bir bilginin ya da hizmetin korunmasında eksik olan ve giderilmesi gereken durumdur.

. . .

Aynı gözlem: *"Yedeklerin geri yüklenebildiği hiç denenmemiş."*

| Kurum | İş amacı | Ortaya çıkan ihtiyaç |
|---|---|---|
| Klinik | Hastaya randevu vermek, hasta kayıtlarını eksiksiz tutmak | Arızadan sonra randevu ve hasta kayıtları aynı gün geri getirilebilmeli (erişilebilirlik) |
| Hukuk bürosu | Müvekkil dosyalarını gizli ve değişmemiş biçimde saklamak | Geri yüklenen dosya özgün dosyayla aynı olmalı; yedekten geri yüklemenin bu doğruluğu sağladığı bilinmeli (bütünlük, erişilebilirlik) |

::: {.notes}
"Yedeklerin geri yüklenebildiği hiç denenmemiş" cümlesi bir olgudur. Ne yapılacağı bu cümleden çıkmaz; aynı olgu iki kurumun işine farklı yerden dokunur. Kliniğin işi hastayı zamanında kabul etmektir; geri yüklemenin denenmemesi, arızadan sonra kayıtlara kısa sürede ulaşılıp ulaşılamayacağını belirsiz bırakır, yani erişilebilirlik öne çıkar. Hukuk bürosunun işi dosyaların değişmemesidir; geri yükleme denenmediği için geri gelen dosyanın özgün dosyayla aynı olup olmadığı bilinmez, yani bütünlük öne çıkar.

İhtiyaç, gözlemin iş amacına bağlandığı yerde doğar. Bu yüzden ihtiyaç yazarken gözlem cümlesine değil, gözlemin hangi işi zayıflattığına bakmak gerekir. Burada bir ayrım önemli: iş amacı bir korumayı gerektirebilir, ama gözlem o korumanın eksik olduğunu göstermeyebilir. Hukuk bürosu için yedeklerin yetkisiz kişilerce okunamaması da gerekir; fakat bu gözlem gizlilikte bir açık göstermez. Gizlilik ihtiyacı yazmak için yedeklere kimlerin eriştiğine dair ayrı bir gözlem gerekir.
:::

---

## Her ihtiyaç aynı anda çözülemez: öncelik nasıl verilir?

**Öncelik kararı**, sınırlı kaynak ile iş etkisi karşılaştırılarak hangi güvenlik ihtiyacının önce ele alınacağına yönetimin verdiği karardır.

Yedek parça üreten bir tesiste hat durursa üretim durur; bir saatlik duruş günlük üretimin yaklaşık %12'sini kaçırır. BT'nin bu dönem için 10 saati var.

- **İhtiyaç A:** hat ağına izinsiz cihaz bağlanmasını önlemek (8 saat).
- **İhtiyaç B:** ofis misafir Wi-Fi parolasını yenilemek (4 saat).

**Hangisi önce yapılır?**

. . .

A + B = 12 saat, bütçe aşılır. A hatta doğrudan etki ettiği için seçilir; B bir sonraki bütçe dönemine kalır.

::: {.notes}
Karşılaştırma üç şeye dayanır: ihtiyacın iş amacına etkisi, gereken kaynak ve elde bulunan kaynak. Etki birkaç cümleyle yazılır, kaynak saat olarak yazılır ve ikisi kaynak sınırına karşı okunur. Burada hat ağındaki izinsiz cihaz üretimi doğrudan durdurabilir; misafir ağının parolası ise hatta dokunmaz. 12 saatlik toplam 10 saatlik bütçeye sığmadığı için biri ertelenir.

Öncelik vermek, hepsini birden yapmayı istemenin tersidir. Hepsi birden istendiğinde hangi işin aksayacağı kendiliğinden, kimse karar vermeden belirlenir. Yönetimin açık bir karar vermesi, sonradan "neden B değil de A?" sorusuna yanıt verilebilmesini sağlar. Başka bir kurumda aynı iki ihtiyaç ters sırada seçilebilir: sıralamayı kurumun işi, kaynağı ve etki değerlendirmesi belirler. Risklerin sayısal puanlanması ayrı bir yöntemdir; öncelik gerekçesi için okunabilir bir etki cümlesi ve gerçek bir kaynak sınırı çoğu zaman yeterlidir.
:::

---

## Hedef, bir durumun hangi değerden hangisine geçeceğini söyler

**Bilgi güvenliği hedefi**, bir güvenlik ihtiyacında hangi başlangıç durumundan hangi hedef duruma, hangi ölçütle ve sürede ulaşılacağını gösteren; sorumlusunu, kaynağını ve kanıtını da belirleyen ifadedir.

| Parça | Söylediği | Örnek |
|---|---|---|
| Başlangıç ölçümü | Bugün ölçülen değer | Sınama e-postasına tıklayan personel: 4/10 |
| Ölçüt | Durumun hangi sayıyla izlendiği | Tıklayan personel / sınamaya katılan personel |
| Payda | Oranın bölündüğü toplam | 10 (sınamaya katılan personel) |
| Hedef değer | Ulaşılmak istenen değer | 1/10 |
| Dönem | Değere ulaşılacak süre | Altı ay |

::: {.notes}
Bu parçalardan biri eksik kalırsa hedef tartışmaya açılır. Başlangıç değeri yoksa iyileşmenin ne kadar olduğu anlaşılmaz. Ölçüt yoksa iki kişi aynı hedefi farklı sayılarla ölçebilir. Dönem yoksa "bir gün yaparız" hedefi sonsuza kadar geçerli kalır.

Hedef değeri kurum seçer. Bir kurum 4/10'u 1/10'a indirmeyi yeterli bulabilir, bir başkası 0/10 isteyebilir. Hiçbir standart bu değeri ya da süreyi kuruma dayatmaz; önemli olan değerin yazılı olması ve başlangıç ölçümüyle karşılaştırılabilmesidir. Sorumluluk, kaynak ve kanıt hedefin geri kalan parçalarıdır ve sonraki slaytlarda ele alınır.
:::

---

## Yapılan iş, hedefin yerine geçer mi?

**Faaliyet**, bir hedefe ulaşmak için yapılan iştir.

*Kural: ayrılan personelin hesabı ayrıldığı gün kapatılır.*

| Cümle | Türü | Neden |
|---|---|---|
| İK, hesap kapatma talimatını tüm birimlere yeniden duyurur | Faaliyet | Yapılıp yapılmadığını söyler; durumun değişip değişmediğini söylemez |
| Ayrıldığı gün hesabı kapanan personel / ayrılan personel | Ölçüt | Durumu hangi sayıyla izleyeceğimizi söyler; başlangıç ve hedef değeri taşımaz |
| Ayrıldığı gün hesabı kapanan personel oranı bu çeyrekte 4/5'ten 5/5'e çıkar | Hedef | Başlangıcı, ölçütü, hedef değeri ve dönemi taşır |

::: {.notes}
Duyuru yapıldığında "işi yaptık" demek kolaydır, çünkü duyurunun yapıldığını herkes görür. Oysa asıl soru, duyurudan sonra hesapların ayrılış gününde kapanıp kapanmadığıdır. Hedef bunu 4/5'ten 5/5'e koyarak faaliyetin işe yarayıp yaramadığını sınanabilir hâle getirir.

Faaliyet gereksiz değildir; hedefe ulaşmanın yoludur. Aynı hedefe farklı faaliyetlerle de varılabilir: duyuru, kapatma işini İK formuna bağlamak ya da sistem tarafında otomatik kapatma. Faaliyet tamamlandığı hâlde sayı değişmediyse gözden geçirilen şey faaliyettir; hedef yerinde kalır.
:::

---

## Ölçüt ve payda: aynı sayı neyi sayıyor?

**Ölçüt**, durumun hangi sayı ya da gözlemle izleneceğini söyleyen tanımdır.

**Payda**, bir oranın bölündüğü toplamdır; "neyin yüzde kaçı?" sorusunun yanıtını verir.

Bir kurumun 25 ayrıcalıklı hesabından 19'unda belgelenmiş iş sorumlusu var: **19/25 (%76)**.

. . .

Aynı 19 sayısı 200 hesaplık bir envanterde yazılsaydı **19/200 (%9,5)** olurdu ve çok daha kötü bir durumu gösterirdi.

::: {.notes}
Ayrıcalıklı hesap, sıradan kullanıcıdan daha geniş yetkisi olan hesaptır; örneğin kayıtları değiştirebilir ya da başka hesapları yönetebilir. Böyle bir hesabın iş gereği neden var olduğunu söyleyebilen bir iş sorumlusunun belgelenmesi izlenebilecek bir ölçüttür: belgelenmiş iş sorumlusu olan hesap sayısı bölü toplam ayrıcalıklı hesap sayısı.

Payda olmadan 19 sayısı iyi ya da kötü olarak okunamaz. Payda ayrıca ölçüm sırasında değişebilir. Bazı hesaplar iş gerekçesi olmadığı için kapatılırsa başlangıç kesiti 19/25 olarak kalır, bitiş ölçümü ise güncel etkin hesap sayısıyla yazılır. 6 sorumlusuz hesabın 6'sı kapatılırsa ölçüm 19/19 olur ve 25/25 diye yazılamaz. Paydanın neyi saydığını hedef cümlesinde açık tutmak bu karışıklığı önler.
:::

---

## Üç sayı, üç ayrı soru

| Sayı | Ne tür sayı? | Payda |
|---|---|---|
| 19/25 hesapta belgelenmiş iş sorumlusu var | Bir andaki durum | Envanterdeki hesap sayısı |
| Bu ay işlenen 5 ayrılıştan 4'ünde hesap aynı gün kapandı: 4/5 | Yapılan işin zamanında bitme oranı | İşlenen ayrılış sayısı |
| Yedek hat için 5 deneme aramasından 4'ü bağlandı: 4/5 | Deneme sonucu | Yapılan deneme sayısı |

Bu oranlar birbiriyle toplanmaz ve tek bir "güvenlik yüzdesi" vermez.

::: {.notes}
İlk sayı bir fotoğraf gibidir: o gün envanterde duran hesaplara bakılır. İkincisi bir iş akışının sonucunu, yani kuralın uygulanıp uygulanmadığını gösterir. Üçüncüsü bir denemenin sonucudur ve yalnız yapılan denemeler için bir şey söyler. Paydalar farklı şeyleri saydığı için 19/25 ile 4/5'i toplayıp "toplam başarı" bulmak anlamsızdır.

Küçük örneklemlerde ayrıca dikkat gerekir. 5 denemeden 4'ünün başarılı olması bir sonraki denemenin başarılı olacağını garanti etmez; tek bir başarısız deneme oranı yirmi puan oynatır. Bu yüzden küçük paydalarda sayının yanına her zaman paydayı da yazarız.
:::

---

## Hedefin sorumluluğu kimlere dağılır?

**Üst yönetim**, kurumu yöneten ve kaynak ayırma yetkisi olan kişilerdir.

**Bilgi güvenliği komitesi**, üst yönetimin görevlendirdiği ve hedefleri ile sonuç raporlarını görüşen kuruldur; her kurumda bulunması zorunlu değildir.

**İş sahibi**, hedefin ilgili olduğu iş sürecinden ve hedefin gerçekleşmesinden yönetime karşı sorumlu yöneticidir.

**Teknik uygulayıcı**, işlemi sistemde ya da sahada yapan kişi veya birimdir.

**Değerlendiren**, kanıtı uygulayıcıdan bağımsız olarak kontrol eden kişi veya birimdir.

::: {.notes}
Her rol farklı bir soruya yanıt verir. Üst yönetim kaynağı ayırır ve sonucu ister. İş sahibi hedefin gerçekleşmesinden yönetime hesap verir. Teknik uygulayıcı işi yapar. Değerlendiren, yapılan işin kayıtlarını uygulayıcıdan bağımsız olarak kurala karşı okur. Aynı kişi hem uygulayıp hem değerlendirirse kontrol zayıflar; küçük bir kurumda kişi sayısı az olabilir, yine de rolün adı ve kimin hangi işi yaptığı yazılmalı, bağımsız kontrolün nerede yapıldığı belli olmalıdır.

Teknik uygulayıcının sistemde işlem yapabilmesi, işin gerekli olduğuna karar verdiği anlamına gelmez. Karar iş sahibine aittir. Bir de şu ayrım gerekir: hedefin konusu bir hesap, belge ya da sistem gibi bir varlıksa, o varlığın iş sorumlusu ile hedefin iş sahibi farklı kişiler olabilir. Bir hesabın iş sorumlusu, hesabın iş gereği neden var olduğunu söyleyebilen birim yöneticisidir. Hedefin iş sahibi ise bütün hesapların sorumlusunun belgelenmesi hedefinden yönetime karşı sorumlu olan yöneticidir.
:::

---

## Kaynak ve kanıt hedefe nasıl bağlanır?

**Kaynak**, hedefe ulaşmak için ayrılan uzman ve yönetici zamanı, bütçe ve araçlardır.

**Kanıt**, bir olgunun gerçekleştiğini ya da gerçekleşmediğini gösteren kayıt veya çıktıdır.

| Kanıt | Gösterdiği | Göstermediği |
|---|---|---|
| Yöneticinin imzaladığı onay listesi | Yöneticinin listeyi onayladığını beyan ettiğini | Listedeki işin sistemde yapıldığını |
| Sistemden alınmış tarihli döküm | O tarihte sistemde ilgili alanın dolu göründüğünü | Dökümü kimin, ne zaman aldığının ve başka kayıtlarla uyumunun doğru olduğunu |

Başlangıç için bir kanıt, sonuç için ayrı bir kanıt belirlenir.

::: {.notes}
Kaynağı yazılmayan hedef, kimsenin zamanı ayrılmamış bir niyet olarak kalır; hedefe kaynak bağlamak onu yapılabilir bir işe çevirir. Kanıtta ise iki ayrı iz gerekir. Başlangıç kanıtı hedefin neden konduğunu, sonuç kanıtı ise hedefe ulaşıldığını gösterir. Sonucu gösterecek kaydı baştan belirlemezsek dönem sonunda herkes kendi hatırladığını söyler.

İmza, imzalayanın kendi beyanını taşır. Bir yöneticinin imzası "bu listeyi uygun buldum" der; listedeki işin sistemde yapıldığını kendi başına göstermez. İşin yapıldığını göstermek için sistemden alınmış ayrı bir iz gerekir. Bu izin de güvenirliği ayrıca okunur: kim aldı, hangi tarihte, başka kayıtlarla tutarlı mı? Böylece beyan ile sistem izi yan yana durur ve biri diğerinin yerine geçmez.
:::

---

## Parçalar bir arada: tamamlanmış bir hedef nasıl görünür?

Bir meslek lisesinde not kayıt sisteminin yedeği her hafta alınmalı. Geçen çeyrekte 13 haftanın 9'unda yedek alınmış.

| Parça | Değer |
|---|---|
| İş amacı | Öğrenci not ve devam kayıtlarını doğru tutmak |
| Güvenlik ihtiyacı | Kayıt sisteminin yedeği her hafta düzenli olarak alınmalı |
| Hedef | Yedek alınan hafta sayısı 13 haftalık çeyrekte 9/13'ten 13/13'e çıkar |
| Faaliyet | Yedek işini zamanlanmış göreve bağlamak, aksayan haftada uyarı üretmek |
| Kaynak | Bilgi işlem sorumlusu 6 saat; müdür yardımcısı 1 saat |
| İş sahibi / uygulayıcı / değerlendiren | Müdür yardımcısı / bilgi işlem sorumlusu / kalite birimi temsilcisi |
| Başlangıç kanıtı | Geçen çeyreğin yedekleme günlüğü dökümü |
| Sonuç kanıtı | Bu çeyreğin yedekleme günlüğü dökümü ve kalite birimi temsilcisinin imzalı inceleme notu |

::: {.notes}
Bu tabloda önceki slaytlardaki parçaların hepsi var ve ihtiyaç, hedef ile kanıt aynı şeyi ölçüyor: yedeğin her hafta alınıp alınmadığını. Ölçüt "yedek alınan hafta sayısı bölü çeyreğin hafta sayısıdır", payda 13'tür; başlangıç 9/13'tür ve hedef değer 13/13'tür. Zamanlanmış görev yalnız faaliyettir; hedefe ulaşıldığını yedekleme günlüğü gösterir.

Günlüğün neyi gösterdiğine dikkat edelim: günlük yedeğin alındığını söyler, alınan yedeğin geri yüklenebildiğini söylemez. Bu hedef yalnız alınma sıklığını ölçer; arızadan sonra kayıtların geri getirilebilmesi ayrı bir ihtiyaç ve ayrı bir hedef olur, örneğin geri yükleme denemesinin başarı oranı. Alanların dolu olması tek başına yeterli değildir; ihtiyaç ile hedefin ölçtüğü şey de aynı olmalıdır. Kalite birimi temsilcisinin imzası, günlüğü incelediğini beyan eder; yedeğin sağlam olduğunu göstermez. İş sahibi, uygulayıcı ve değerlendirenin ayrı roller olması, uygulayanın kendi işini kendisinin onaylamasını önler.
:::

---

## Yönetim sisteminde hedefin yeri

**Bilgi güvenliği yönetim sistemi (BGYS)**, kurumun bilgi güvenliğini hedefler, sorumluluklar, belgeler ve izleme yoluyla sürekli yönettiği düzendir.

- **ISO/IEC 27001:2022:** BGYS kurmak ve işletmek için gereksinimleri koyan standart.
- **ISO/IEC 27002:2022:** güvenlik kontrollerini ve uygulama rehberliğini veren kılavuz.

::: {.notes}
BGYS yaklaşımında güvenlik, tek seferlik teknik önlemlerden oluşmaz. Hedefi olan, sorumlusu bilinen ve izlenen bir düzenden oluşur. Bu slaytlarda kurduğumuz zincir bu düzenin küçük bir kesitidir: ihtiyaç, öncelik, ölçülebilir hedef, sorumlu ve kanıt. 27001 kurumun yönetim sistemine ne tür gereksinimler getirdiğini söyler. 27002 ise kontrol seçerken ve uygularken yol gösterir; ikisi aynı işi yapmaz.

Standartlar kuruma belirli bir oranı, süreyi ya da saat sayısını dayatmaz. Hedef değerin, dönemin ve kaynağın seçimi kurumun kendi kararıdır; standart bu kararların yazılı, sahipli ve izlenebilir olmasını ister.
:::

---

## Bir hedef cümlesi yazıldıktan sonra nasıl sınanır?

1. **Veri:** Hangi gözleme dayanıyor, başlangıç değeri gözlemle uyuşuyor mu?
2. **Ölçüt:** Durumun değiştiği hangi sayıyla ve hangi paydayla görülecek? Hedef değer ve dönem yazılı mı?
3. **Rol:** İş sahibi, teknik uygulayıcı ve değerlendiren ayrı mı?
4. **Kanıt:** Başlangıcı ve sonucu hangi kayıt gösterecek?

Cümle "…yapılır" diye bitiyorsa büyük olasılıkla faaliyettir.

::: {.notes}
Birinci soru uydurulmuş veriyi yakalar: başlangıç değeri gözlemden gelmiyorsa hedef havada kalır. İkinci soru hedefi faaliyetten ayırır. Üçüncü soru kontrolün kendi kendine yapılmasını önler. Dördüncü soru hedefin sonradan nasıl gösterileceğini baştan düşündürür.

"Yapılır" ile biten cümle çoğunlukla eylemi anlatır ve durumun hangi değere geldiğini söylemez. Bunu kesin bir kural olarak değil, hızlı bir uyarı olarak kullanalım: bir eylem cümlesinin içine ölçüt ve değer de yerleştirilmişse cümle hedefe dönüşür.
:::

---

## Bağımsız görev: faaliyet, ölçüt ve hedefi ayırın

Bir muhasebe bürosunda 16 bilgisayarın 11'inde üreticinin yayımladığı güncel sürüm yüklü.

- **A:** "Büro yöneticisi bilgisayarlara güncellemeleri yükler."
- **B:** "Güncel sürüm yüklü bilgisayar sayısı / toplam bilgisayar sayısı."
- **C:** "Üç ay sonunda 16 bilgisayarın 16'sında güncel sürüm yüklüdür; bugün 11/16."

Her cümlenin türünü gerekçesiyle yazın. C'de hedefi tamamlamak için eksik olan iki alanı belirtin.

. . .

**Yanıt:** A faaliyettir; ne yapılacağını söyler, durumun değiştiğini göstermez. B ölçüttür; payda 16'dır. C hedeftir; başlangıç (11/16), hedef değer (16/16) ve dönem (üç ay) vardır. Eksik olanlar **iş sahibi** ve **kanıt** alanlarıdır; başlangıç ve sonucu hangi kaydın göstereceği belli değildir.

::: {.notes}
C cümlesi başlangıcı, ölçütü, hedef değeri ve dönemi taşıyor; iş sahibi ve kanıt boş olduğu için dönem sonunda sonuç tartışmaya açık kalır. B'ye dikkat edelim: ölçüt tek başına hedef değildir, çünkü hangi değerden hangisine gidileceğini söylemez. Büro yöneticisi güncellemeleri yükledi diye 16/16'ya ulaşıldığı varsayılmaz; sayıyı bir kayıt gösterir.
:::
