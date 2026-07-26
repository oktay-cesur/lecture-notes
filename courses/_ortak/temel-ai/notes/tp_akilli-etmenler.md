---
title: "Akıllı Etmenler"
type: presentation
description: "Etmen kavramı, rasyonellik, etmen mimarileri"
tags: []
execute:
  echo: false
---


---

## Bölüm 1 - Ajan Nedir

---

## İki Eksen, Dört Yaklaşım

- **Düşünme vs Davranış:** İçsel süreç mi, dışsal çıktı mı?
- **İnsan-merkezli vs Rasyonel:** Kıyaslama noktası hangisi?
- Dört tanım yaklaşımı:

||İnsan-merkezli|Rasyonel|
|---|---|---|
|**Düşünme**|Bilişsel bilim (GPS)|Mantık geleneği|
|**Davranış**|Turing Testi|**Akılcı ajan** ← modern YZ|

::: {.notes}  
Etmen kavramına detaylıca değinmeden önce yapay zekanın tanımına yönelik yaklaşımları gözden geçirelim.

- İnsanca düşünme yaklaşımı, bilişsel bilim perspektifinden programın insan zihnine benzer şekilde çalışıp çalışmadığını inceler. 
- İnsanca davranma, Turing Testi ile sembolize edilen davranışsal bir kriterdir — içsel işleyiş değil dışsal çıktı önemlidir. 
- Rasyonel düşünme, Aristoteles'ten gelen mantık geleneğine dayanır ancak formalizasyon ve hesaplama sınırlılıkları vardır. 
- Modern yapay zekanın benimsediği yaklaşım ise rasyonel davranmadır: akılcı ajan kavramı. Neden bu yaklaşım? Çünkü rasyonellik matematiksel olarak kesin tanımlanabilir ve bilimsel ilerlemeye uygun bir zemin sağlar. 


Ancak mantıksal çıkarım, rasyonelitenin tek mekanizması değildir — sıcak sobaya değen eli mantıksal süreçlere girmeden refleksle geri çekmek daha başarılı bir eylem olabilir.  Bu bizi doğrudan bir soruya getirir: rasyonel davranma dediğimizde bir ajan var. Peki ajan tam olarak nedir?  

:::
## Ajan (Etmen) Nedir?

- Çevreyi **algılayıcılarla** (sensors) algılar
- **Eyleyicilerle** (actuators) çevreye etki eder
- İnsan: göz, kulak → el, ayak
- Robot: kamera, LIDAR → motor, gripper
- Yazılım: klavye/ağ girdisi → ekran/ağ çıktısı 

::: {.notes}  
Ajan ya da etmen, çevresini algılayıcılar aracılığıyla algılayan ve bu çevreye 
eyleyiciler aracılığıyla etki eden herhangi bir varlıktır. Bazı kaynaklar ajan 
tanımını **yazılım/otonom sistem** için kullanırken [@wooldridge2009introduction], 
bazılarında bu şartları sağlayan her sistem ajan olarak adlandırılır 
[@russell2021artificial]. Bu noktada hangi tanımın tercih edildiği bizim için 
önemli bir fark yaratmamaktadır. Uygulama aşamasında her iki yaklaşım da 
yazılımsal süreçlere odaklandığından biyolojik etmenlerin dahil edilip edilmemesi 
konuyu doğrudan etkilemez; ancak kavramı somutlaştırmak için verilen örneklerde 
yararlı olabilir.

İnsan bir ajandır: gözleri ve kulakları algılayıcı, elleri ve ayakları 
eyleyicidir. Bir robot da ajandır: kameraları ve sensörleri algılayıcı, motorları 
ve kavrayıcıları eyleyicidir. Yazılım da ajan olabilir: klavye girdileri veya ağ 
istekleri algılayıcı, ekrana veya ağa verdiği çıktılar eyleyicidir.

Burada önemli bir nokta vardır: ajan kavramı, dünyadaki her şeyi ajan olan ve 
olmayan diye ikiye ayırmak için değil, karmaşık karar süreçlerini analiz etmek 
amacıyla kullanılan bir soyutlama aracıdır. Pille çalışan basit bir hesap makinesi 
de teknik olarak bir ajan sayılabilir — girdi alır, çıktı üretir — ancak bu 
tanım onu analiz etmemize ek bir fayda sağlamaz.

Yapay zeka ise genellikle önemli hesaplama kaynakları gerektiren ve karmaşık 
karar süreçlerinin söz konusu olduğu problemlere odaklanır. Biz çoğunlukla konunun bu tarafına odaklanacağız.
:::

---

## Algı ve Algı Dizisi

- **Algı (percept):** Belirli bir andaki duyusal girdi
- **Algı dizisi (percept sequence):** Ajanın tüm algı geçmişi
- Ajanın seçeceği eylem, algı dizisine bağlıdır
- Sadece son algıya değil — tüm geçmişe

::: {.notes}  
Algı (percept), bir ajanın belirli bir anda çevresinden aldığı duyusal girdidir. 
Algı dizisi (percept sequence) ise ajanın var olduğu andan itibaren algıladığı 
her şeyin eksiksiz geçmişidir. Bu ayrım kritiktir: bir ajanın herhangi bir anda 
seçeceği eylem her zaman yalnızca o anki algısına bağlı değildir; bazı 
durumlarda o ana kadar edindiği tüm algı dizisine bağlı olabilir.

Hava sıcaklığı $27$ derecenin üzerine çıktığında klimayı açan bir ajan için 
algı geçmişi önemli değildir. Buna karşılık otonom sürüş gibi görevlerde 
geçmiş algılar kritik olabilir.

Hatta ilk bakışta yalnızca mevcut durumun yeterli olduğu düşünülen 
durumlarda bile algı geçmişi önemli olabilir. Örneğin satranç oyununu 
düşünelim. Tahtanın mevcut durumuna bakmak çoğu zaman yeterli görünür; 
ancak rakibin oyun tarzı ve önceki hamleleri kararınızı etkileyebilir. 
Örneğin karşınızda Mikhail Tal gibi bir oyuncu varsa ve size bir 
taş fedası yaptıysa, görünen durumdan daha tehlikeli bir konumda 
olabilirsiniz.
:::

---

## Ajan Fonksiyonu: $f: P^* \to A$

- $P$: Olası algılar kümesi
- $P^*$: Tüm olası algı dizileri (Kleene kapanışı)
- $A$: Olası eylemler kümesi
- Kavramsal bir tablo: her algı dizisi → bir eylem

::: {.notes}
Bir ajanın davranışı matematiksel olarak bir **ajan fonksiyonu** ile tanımlanabilir. 
Bu fonksiyon, herhangi bir **algı dizisini** bir **eyleme** eşler.

$P$ ile olası algıların kümesini, $P^*$ ile tüm olası algı dizilerini, 
$A$ ile de olası eylemlerin kümesini gösterdiğimizde ajan fonksiyonu

$f : P^* \to A$

şeklinde ifade edilir.

Bunu kavramsal olarak bir tablo gibi düşünebiliriz: tablonun her satırı 
bir **algı dizisini** temsil eder ve her satırın karşısında o algı dizisine 
karşılık gelen **eylem** bulunur.

Ancak burada önemli bir sorun vardır. Gerçek dünyada olası algı dizilerinin 
sayısı son derece büyüktür. Bu nedenle tüm algı dizileri için ayrı ayrı 
eylem belirleyen böyle bir tabloyu açık biçimde saklamak -bir nevi tüm olası durumları tek tek listelemek- pratik değildir. 
Yapay zekâ sistemlerinin amacı da tam olarak bu sorunu çözmektir: 
astronomik büyüklükteki bu tabloyu saklamak yerine, aynı davranışı 
üretebilecek **küçük ve genel bir ajan programı** tasarlamak.
:::

---

## Ajan Fonksiyonu ≠ Ajan Programı

- **Ajan fonksiyonu:** Kavramsal seviye — "ne yapılacak?" (soyut tablo)
- **Ajan programı:** Uygulama seviyesi — "nasıl yapılacak?" (gerçek kod)
- Tablonun imkansızlığı: otonom araç kamerası → ~$27$ MB/s giriş
- Evrendeki atom sayısı: ~$10^{80}$
- **YZ'nin asıl görevi:** Devasa tablo yerine küçük programdan rasyonel davranış üretmek

::: {.notes}  
Ajan fonksiyonu ile ajan programı arasındaki ayrım kritiktir. Ajan fonksiyonu soyut bir matematiksel tanımlama, tüm algı dizilerini eylemlere eşleyen kavramsal bir tablodur. Ajan programı ise bu fonksiyonu fiziksel bir mimari üzerinde gerçekleştiren algoritmadır. Başka bir deyişle fonksiyon **“ne yapılması gerektiğini”**, program ise **“bunun nasıl yapılacağını”** ifade eder.

Bu ayrımın önemi, ajan fonksiyonunun açık bir tablo olarak saklanmasının pratikte imkânsız olmasından kaynaklanır. Bir otonom araç düşünelim: kameradan gelen görsel veri yaklaşık **$27$ MB/s** hızındadır. [@russell2021artificial] Bu tür bir sistem için tüm olası algı dizilerini tablo halinde saklamak astronomik büyüklükte bir veri gerektirir. Karşılaştırma için, gözlemlenebilir evrendeki atom sayısı yaklaşık **$10^{80}$** civarındadır. Yapay zekâ araştırmasının temel amacı da tam olarak budur: bu devasa tabloyu saklamak yerine, aynı davranışı üretebilen **küçük ve genel bir ajan programı** tasarlamak.
:::

---

## Bölüm 2 — PEAS Çerçevesi

---

## PEAS Nedir?

- **P**erformance: Başarı ölçütü
- **E**nvironment: Görev ortamı
- **A**ctuators: Eyleyiciler (çıktı)
- **S**ensors: Algılayıcılar (girdi)

::: {.notes}  
Bir ajanın tasarımına başlamadan önce, görev ortamını tam olarak belirtmemiz gerekir. PEAS çerçevesi bu belirtim için standart bir yapı sunar. Performance, ajanın ne kadar başarılı olduğunu ölçen nesnel kriterdir — geçen hafta tartıştığımız performans ölçütünün kendisidir. Environment, ajanın içinde çalıştığı dünyayı tanımlar. Actuators, ajanın çevresi üzerinde etki yaratmak için kullandığı mekanizmalardır. Sensors ise ajanın çevresinden bilgi almak için kullandığı araçlardır. Bu dört bileşenin doğru tanımlanması, doğru ajan mimarisinin seçilmesi için ön koşuldur.  
:::

---

## PEAS Örneği: Otomatik Taksi

|Bileşen|Tanım|
|---|---|
|**Performance**|Güvenli varış, minimum süre, konfor, yasal uyum|
|**Environment**|Yollar, diğer trafik, yayalar, hava koşulları|
|**Actuators**|Direksiyon, gaz, fren, sinyal, korna|
|**Sensors**|Kameralar, LIDAR, GPS, hız ölçer, motor sensörleri|

::: {.notes}  
Otomatik taksi örneği, PEAS çerçevesinin nasıl uygulandığını göstermek için klasik bir örnektir. Performans ölçütü çok boyutludur: yolcuyu güvenli bir şekilde doğru hedefe ulaştırma, trafik kurallarına uyma, sürüş konforunu sağlama ve yakıt tüketimini minimize etme gibi birden fazla kriter birlikte değerlendirilir. Dikkat edilmesi gereken önemli bir nokta, bu kriterlerin bazen çelişebilmesidir — örneğin minimum süre ile konfor arasında bir denge kurulması gerekir.  Ortam son derece karmaşıktır: diğer araçlar, yayalar, bisikletliler, trafik işaretleri, yol koşulları ve hava durumu gibi birçok değişken içerir. Eyleyiciler araç kontrol mekanizmalarıdır ve algılayıcılar modern otonom araçlarda kullanılan zengin sensör paketini kapsar.  
:::

---

## PEAS Örneği: Tıbbi Teşhis Sistemi

|Bileşen|Tanım|
|---|---|
|**Performance**|Doğru teşhis oranı, maliyet, hasta sağlığı|
|**Environment**|Hasta, hastane, personel|
|**Actuators**|Ekran çıktısı, testler, tedaviler, yönlendirmeler|
|**Sensors**|Semptomlar, hasta yanıtları, test sonuçları|

::: {.notes}  
Tıbbi teşhis sistemi, otomatik taksiden çok farklı bir görev ortamına sahiptir. Performans ölçütü burada da çok boyutludur ancak hasta sağlığı en kritik kriterdir — yanlış teşhisin maliyeti çok yüksektir. Ortam, hasta ile etkileşimi ve hastane sistemlerini kapsar. Eyleyiciler fiziksel değil bilgiseldir: teşhis önerileri, ek test talepleri ve tedavi planları. Algılayıcılar ise hastanın bildirdiği semptomlar, muayene bulguları ve laboratuvar test sonuçlarıdır.

Bu noktada önemli bir başka konu da **performans ölçütlerinin bazen birbiriyle çelişebilmesidir**. Hastalar için en iyi sistem genellikle doğru teşhis oranı en yüksek olan sistemdir. Ancak sağlık sistemi veya sigorta kurumları açısından değerlendirildiğinde maliyet de önemli bir faktör haline gelir. Bu durumda farklı paydaşlar için “en iyi” çözüm farklı olabilir.

Örneğin aşağıdaki iki yöntemi düşünelim.

|Yöntem|Doğru teşhis oranı|Maliyet|
|---|---|---|
|**A**|$%90$|$500$|
|**B**|$%70$|$100$|

Hasta perspektifinden bakıldığında doğal olarak **A yöntemi** tercih edilir. Ancak sistem düzeyinde sabit bir bütçe olduğunu varsayalım. Örneğin toplam bütçe $500\,000$ birim olsun.

- A yöntemi kullanılırsa: $1000$ kişi test edilir → $900$ doğru teşhis
    
- B yöntemi kullanılırsa: $5000$ kişi test edilir → $3500$ doğru teşhis
    

Bu durumda tek tek bireyler için daha kötü görünen bir yöntem, sistem düzeyinde **daha fazla kişinin doğru teşhis almasını sağlayabilir**. Bu noktada etik konusu karşımıza çıkmaktadır. Bu durumun tartışılma yeri burası konumuz kapsamında burası değil; ancak yapay zeka çalışmalarında oldukça revaçta ve örnekte gördüğünüz gibi insanı can sıkıcı çıkmazlara sokabilen bir konudur.

:::

---

## PEAS Örneği: Satranç Programı

|Bileşen|Tanım|
|---|---|
|**Performance**|Kazanma/kaybetme/berabere, stil puanı|
|**Environment**|Satranç tahtası, rakip|
|**Actuators**|Hamle yapma (ekran/robot kol)|
|**Sensors**|Tahta durumu (dijital girdi veya kamera)|

::: {.notes}  
Satranç programı, oldukça kısıtlı ve iyi tanımlanmış bir görev ortamına sahiptir. Performans ölçütü birincil olarak oyunun sonucudur: kazanma, kaybetme veya berabere. Bazı durumlarda stil puanı da dikkate alınabilir. Ortam, bir satranç tahtası ve rakipten oluşur — fiziksel dünya ile karşılaştırıldığında çok daha basit ve sınırlıdır. Eyleyiciler tek bir türdedir: hamle yapmak. Algılayıcılar da basittir: tahtanın mevcut durumunu okumak. Bu sadelik, satranç programlarının yapay zeka araştırmalarında neden bu kadar popüler olduğunu açıklar — karmaşık algılama ve eylem sorunları minimize edilerek, karar verme ve arama algoritmalarına odaklanılabilir.  
:::

---

## Bölüm 3 — Ortam Özellikleri

---

## Tam Gözlenebilir vs Kısmi Gözlenebilir

- **Tam gözlenebilir:** Sensörler çevrenin tam durumuna erişim sağlar
- **Kısmi gözlenebilir:** Gürültü, eksik veri veya sensör sınırlılığı
- Örnek: Satranç (tam) vs poker (kısmi)

::: {.notes}  
Bir görev ortamı, ajanın sensörleri her an çevrenin tam durumuna erişim sağlıyorsa tam gözlenebilirdir. Satranç buna iyi bir örnektir: her iki oyuncu da tahtadaki tüm taşların konumunu görebilir. Kısmi gözlenebilirlik ise sensörlerin çevrenin durumunun yalnızca bir kısmını algıladığı durumlarda ortaya çıkar. Bu, sensörlerin yetersizliğinden, gürültüden veya çevrenin doğasından kaynaklanabilir. Poker, kısmi gözlenebilirliğin klasik örneğidir: her oyuncu kendi kartlarını görebilir ancak rakiplerin kartlarını göremez. Otonom araç da kısmi gözlenebilir bir ortamda çalışır — sensörlerin menzili sınırlıdır ve kör noktalar vardır. Kısmi gözlenebilirlik, ajan tasarımını önemli ölçüde zorlaştırır çünkü ajan, gözlemleyemediği durumları tahmin etmek için bir iç model tutmak zorundadır.  
:::

---

## Deterministik vs Stokastik

- **Deterministik:** Mevcut durum + eylem → sonraki durum kesin
- **Stokastik:** Mevcut durum + eylem → olasılıksal sonuç
- Stratejik: Çevrenin belirsizliği diğer ajanlardan kaynaklanır

::: {.notes}  
Deterministik bir ortamda, çevrenin bir sonraki durumu tamamen mevcut durum ve ajanın yaptığı eylem tarafından belirlenir. Yani aynı durumda aynı eylem yapılırsa sonuç her zaman aynıdır. Satranç buna iyi bir örnektir: bir hamle yapıldığında ortaya çıkacak yeni tahta durumu kesindir.

Stokastik ortamlarda ise durum farklıdır. Aynı durumda aynı eylem farklı sonuçlara yol açabilir. Zar atma içeren oyunlar, hava durumu veya gerçek dünya trafik ortamları buna örnek verilebilir.

Stratejik ortam ise biraz farklı bir durumdur. Çevre kendi başına deterministik olabilir, ancak ortamda başka ajanlar da varsa onların davranışları belirsizlik yaratır. Örneğin satranç kuralları deterministiktir, fakat rakibin hangi hamleyi yapacağını kesin olarak bilemeyiz.

Deterministik ortamlar genellikle daha kolay modellenir çünkü yapılan bir eylemden sonra ortaya çıkacak durumu tahmin etmek mümkündür. Stokastik ortamlarda ise bu mümkün değildir; bu nedenle olasılık teorisi ve karar teorisi gibi araçlara ihtiyaç duyulur.

Bir noktaya daha dikkat etmek gerekir. Ortam tam gözlenebilir ve deterministik olsa bile ajan algı bilgisini tam olarak işleyemiyorsa, ortam ajan açısından yine de stokastik görünebilir. Yani belirsizlik bazen çevreden değil, ajanın sınırlılıklarından kaynaklanır.
:::

---

## Episodik vs Ardışık

- **Episodik:** Her karar bağımsız — önceki eylemler sonraki bölümleri etkilemez
- **Ardışık:** Mevcut karar gelecekteki seçenekleri etkiler
- Örnek: Kalite kontrol (episodik) vs satranç (ardışık)

::: {.notes}  
Episodik bir ortamda ajanın deneyimi bağımsız bölümlere ayrılır. Her bölümde ajan bir algı alır ve tek bir eylem gerçekleştirir ve bu eylemin gelecekteki bölümler üzerinde etkisi yoktur. Montaj hattındaki kalite kontrol buna örnektir: her parça bağımsız olarak değerlendirilir ve bir parça hakkındaki karar diğer parçaların değerlendirmesini etkilemez. Ardışık ortamda ise mevcut karar gelecekteki tüm kararları etkiler. Satranç buna örnektir: her hamle tahtanın durumunu değiştirir ve gelecekteki tüm olası hamleleri etkiler. Ardışık ortamlar episodik ortamlardan çok daha karmaşıktır çünkü ajan uzun vadeli sonuçları düşünmek zorundadır. Bir şehir planlama kararı veya bir iş başvurusu kararı da ardışık örneklerdir.  
:::

---

## Statik vs Dinamik

- **Statik:** Ajan düşünürken ortam değişmez
- **Dinamik:** Ortam ajan karar verirken de değişir
- **Yarı-dinamik:** Ortam değişmez ama puan değişir

::: {.notes}  
Statik bir ortam, ajan bir karar verene kadar değişmez. Satranç ve bulmacalar statik ortam örnekleridir — rakip hamlesini yaptıktan sonra tahta, siz düşünürken değişmez. Dinamik bir ortam ise sürekli değişir, ajan ne yapacağına karar verirken bile. Gerçek dünya trafiği buna örnektir: siz düşünürken diğer araçlar hareket etmeye devam eder. Dinamik ortamlar statik ortamlardan çok daha zordur çünkü ajan, eylemden kaçınma da bir eylemdir ve sonuçları vardır. Ayrıca çok uzun süre düşünmek performans kaybına yol açar. Yarı-dinamik ortamlar özel bir durumdur: fiziksel ortam değişmez ancak ajanın performans puanı zamanla değişir. Süre sınırlı satranç buna örnektir — tahta değişmez ama saatiniz işlemeye devam eder.  
:::

---

## Ayrık vs Sürekli

- **Ayrık:** Sonlu sayıda durum, algı ve eylem
- **Sürekli:** Sonsuz/sürekli değerler
- Satranç (ayrık) vs otonom araç sürüşü (sürekli)

::: {.notes}  
Ayrık-sürekli ayrımı, durumların, zamanın, algıların ve eylemlerin nasıl ele alındığıyla ilgilidir. Satranç ayrıktır: sonlu sayıda tahta durumu, sonlu sayıda hamle vardır. Otonom araç sürüşü süreklidir: direksiyon açısı, hız ve konum sürekli değerlerdir. Dijital fotoğraflar teknik olarak ayrıktır — sonlu sayıda piksel — ancak genellikle sürekli olarak ele alınır. Bu ayrım, kullanılacak algoritmaları doğrudan etkiler. Ayrık ortamlar için arama ve kombinatorik optimizasyon algoritmaları uygunken, sürekli ortamlar için kontrol teorisi ve sürekli optimizasyon yöntemleri gerekir. Birçok gerçek dünya problemi süreklidir ancak ayrıklaştırma (discretization) ile yaklaşık olarak ayrık hale getirilebilir.  
:::

---

## Tekli Ajan vs Çoklu Ajan

- **Tekli ajan:** Ortamda yalnız bir karar verici
- **Çoklu ajan:** Birden fazla ajan, işbirlikçi veya rekabetçi
- Çoklu ajan → iletişim, strateji, oyun teorisi

::: {.notes}  
Tekli ajan ortamlarında, çevrede yalnızca bir karar verici vardır. Bulmaca çözmek veya bir labirentten çıkmak tekli ajan örnekleridir. Çoklu ajan ortamlarında ise birden fazla ajan aynı ortamda etkileşim içindedir. Bu etkileşim işbirlikçi veya rekabetçi olabilir. Satranç iki ajanlı rekabetçi bir ortamdır, futbol ise çok ajanlı hem işbirlikçi hem rekabetçi bir ortamdır. Çoklu ajan ortamları, tekli ajan ortamlarından çok daha karmaşıktır çünkü bir ajanın en iyi eylemi diğer ajanların davranışlarına bağlıdır. Bu durum, oyun teorisi kavramlarını devreye sokar. Bir başka önemli nokta: diğer ajanların varlığı, çevreyi kısmen gözlenebilir ve stokastik hale getirebilir çünkü diğer ajanların gelecekteki eylemleri tahmin edilemez.  
:::

---

## Ortam Özellikleri — Özet Tablosu

|Ortam|Gözlenebilir|Determinizm|Episodik|Statik|Ayrık|Ajan|
|---|---|---|---|---|---|---|
|Satranç|Tam|Deterministik|Ardışık|Yarı|Ayrık|Çoklu|
|Poker|Kısmi|Stokastik|Ardışık|Statik|Ayrık|Çoklu|
|Otonom araç|Kısmi|Stokastik|Ardışık|Dinamik|Sürekli|Çoklu|
|Spam filtre|Kısmi|Stokastik|Episodik|Statik|Ayrık|Tekli|

::: {.notes}  
Bu tablo, farklı görev ortamlarının özelliklerini karşılaştırmalı olarak göstermektedir. Her ortamın zorluk düzeyi, bu özelliklerin kombinasyonuna bağlıdır. Genel olarak, kısmi gözlenebilir, stokastik, ardışık, dinamik, sürekli ve çoklu ajan ortamları en zor olanlardır. Otonom araç sürüşü bu kriterlerin hemen hemen hepsinde zor kategoride yer aldığı için yapay zekanın en zorlu uygulama alanlarından biridir. Spam filtre ise nispeten kolay bir ortamdır: her e-posta bağımsız olarak değerlendirilir (episodik) ve ortam statiktir. Ancak kısmi gözlenebilirlik ve stokastiklik nedeniyle yine de zorluklar içerir — spam gönderenler sürekli yeni stratejiler geliştirirler.  
:::

---

## Bölüm 4 — Etmen Mimarileri

---

## Basit Refleks Etmeni

- **Koşul → Eylem** kuralları
- Algıya doğrudan tepki
- Tam gözlenebilir ortamlar için uygun
- Sınırlılık: geçmişi ve geleceği görmez

::: {.notes}  
Basit refleks etmeni, en temel ajan mimarisidir. Bu ajan, mevcut algıya dayalı koşul-eylem kurallarına göre hareket eder. Geçmiş algıları veya gelecekteki sonuçları dikkate almaz. "Eğer fren lambası yanıyorsa, fren yap" gibi kurallar bu tipe örnektir. Avantajı basitliğidir: tasarımı ve uygulaması kolaydır, hızlı tepki verir. Ancak ciddi sınırlılıkları vardır. Birincisi, yalnızca tam gözlenebilir ortamlarda doğru çalışır çünkü eylem yalnızca mevcut algıya bağlıdır. İkincisi, sonsuz döngülere düşebilir — örneğin bir robotun sürekli aynı iki duvar arasında gidip gelmesi. Kısmi gözlenebilir ortamlarda, koşul-eylem kuralları yanlış sonuçlar üretebilir çünkü aynı algı farklı gerçek durumları temsil edebilir.  
:::

---

## Model-Tabanlı Refleks Etmeni

- İç durum modeli: "Dünya şu an nasıl?"
- Geçiş modeli: Eylemler dünyayı nasıl değiştirir?
- Sensör modeli: Dünya durumu algıya nasıl yansır?
- Kısmi gözlenebilirliği aşar

::: {.notes}  
Model-tabanlı refleks etmeni, basit refleks etmeninin sınırlılıklarını bir iç durum modeli ekleyerek aşar. Bu ajan, çevrenin gözlenemeyen kısımlarını takip etmek için bir iç temsil tutar. Bu iç temsili güncellemek için iki tür bilgiye ihtiyaç duyar. İlk olarak, bir geçiş modeli: eylemlerin dünyayı nasıl değiştirdiğine dair bilgi. Örneğin, bir araç sola dönerse yeni konumunun ne olacağı. İkinci olarak, bir sensör modeli: dünyanın mevcut durumunun ajanın algılarına nasıl yansıdığına dair bilgi. Örneğin, öndeki araç fren yaptığında kamerada kırmızı ışıklar görülür. Her adımda ajan, önceki iç durumu, son eylemi ve yeni algıyı kullanarak iç durumunu günceller ve ardından koşul-eylem kurallarını bu güncellenmiş iç duruma uygular. Bu mimari, kısmi gözlenebilir ortamlarda çalışabilir ancak hâlâ uzun vadeli hedefleri dikkate almaz.  
:::

---

## Hedef-Tabanlı Etmen

- İç durum + hedef bilgisi
- "Bu eylem beni hedefe yaklaştırır mı?"
- Arama ve planlama algoritmaları
- Daha esnek, değişen hedeflere uyum sağlar

::: {.notes}  
Hedef-tabanlı etmen, model-tabanlı refleks etmenin üzerine bir hedef bileşeni ekler. Bu ajan yalnızca dünyanın mevcut durumunu bilmekle kalmaz, aynı zamanda ulaşmak istediği bir hedef durumu da bilir. Karar verirken, her olası eylemin hedefe yaklaştırıp yaklaştırmadığını değerlendirir. Bu değerlendirme, basit bir karşılaştırma olabilir veya uzun bir arama ve planlama süreci gerektirebilir. Hedef-tabanlı etmenin önemli avantajı esnekliktir. Basit refleks etmeninde, hedef değiştiğinde tüm koşul-eylem kurallarının yeniden yazılması gerekir. Hedef-tabanlı etmende ise sadece hedefin güncellenmesi yeterlidir ve ajan davranışını otomatik olarak uyarlar. Örneğin, bir navigasyon ajanının hedef adresi değiştirildiğinde rota otomatik olarak yeniden hesaplanır. Arama ve planlama algoritmaları — ki ileriki haftalarda detaylı işleyeceğiz — bu tür ajanların temelini oluşturur.  
:::

---

## Fayda-Tabanlı Etmen

- Hedef yerine **fayda fonksiyonu**: 
- Hedef = ikili (başarılı/başarısız), fayda = derecelendirme
- Çelişen hedefler arasında denge kurabilir
- Belirsizlik altında beklenen fayda hesabı

::: {.notes}  
Fayda-tabanlı etmen, hedef-tabanlı etmenin bir genellemesidir. Hedefler ikili bir değerlendirme sağlar: ya hedefe ulaşıldı ya da ulaşılmadı. Ancak gerçek dünyada çoğu zaman birden fazla hedef vardır ve bu hedefler çelişebilir. Fayda fonksiyonu, her durum için sayısal bir değerlendirme sağlayarak bu sorunu çözer. Örneğin, otomatik taksi için hem hızlı varış hem konforlu sürüş hedeflerini tek bir fayda fonksiyonunda birleştirmek mümkündür. Stokastik ortamlarda ise beklenen fayda hesabı yapılır: her olası sonucun faydasının olasılıkla çarpımının toplamı. Fayda-tabanlı yaklaşım, ekonomi ve karar teorisinin temellerinden biridir. Rasyonel ajan tanımıyla doğrudan örtüşür: rasyonel ajan, beklenen faydasını maksimize eden eylemi seçen ajandır. Bu mimari en genel ve en güçlü olanıdır ancak fayda fonksiyonunun doğru tasarlanması zorlu bir problemdir.  
:::

---

## Mimarilerin Karşılaştırması

|Mimari|İç Durum|Hedef|Fayda|Ortam|
|---|---|---|---|---|
|Basit refleks|Yok|Yok|Yok|Tam gözlenebilir, basit|
|Model-tabanlı|Var|Yok|Yok|Kısmi gözlenebilir|
|Hedef-tabanlı|Var|Var|Yok|Planlama gerektiren|
|Fayda-tabanlı|Var|Var|Var|Çelişen hedefler, belirsizlik|

::: {.notes}  
Bu tablo dört temel etmen mimarisini karşılaştırır. Her bir mimari, bir öncekinin üzerine yeni bir bileşen ekler ve böylece daha karmaşık ortamlarla başa çıkabilir hale gelir. Basit refleks etmeni yalnızca algı-eylem eşleştirmesi yapar ve tam gözlenebilir, basit ortamlar için yeterlidir. Model-tabanlı etmen bir iç durum ekleyerek kısmi gözlenebilirliği aşar. Hedef-tabanlı etmen bir hedef bileşeni ekleyerek proaktif davranış ve planlama yeteneği kazanır. Fayda-tabanlı etmen ise bir fayda fonksiyonu ekleyerek çelişen hedefler ve belirsizlik altında optimal karar verebilir. Genel kural olarak, ortamın karmaşıklığı arttıkça daha sofistike bir mimari gerekir ancak daha basit bir mimari yeterliyse tercih edilmelidir — gereksiz karmaşıklık performansı düşürür.  
:::

---

## Öğrenen Etmen

- Dört bileşen:
    1. **Öğrenme elemanı:** Deneyimden iyileştirme
    2. **Performans elemanı:** Eylem seçimi (dört tipten biri)
    3. **Eleştirmen:** Geri bildirim sağlama
    4. **Problem üreteç:** Keşif eylemleri önerme

::: {.notes}  
Öğrenen etmen, tüm ajan mimarilerine uygulanabilecek genel bir çerçevedir. Bu çerçevenin amacı, ajanın başlangıç tasarımındaki eksiklikleri deneyim yoluyla gidermesidir. Performans elemanı, daha önce tartıştığımız dört mimariden herhangi biri olabilir. Öğrenme elemanı, performans elemanının bileşenlerini — koşul-eylem kurallarını, modeli, hedefleri veya fayda fonksiyonunu — deneyimden öğrenerek iyileştirir. Eleştirmen, performans elemanının ne kadar iyi çalıştığına dair geri bildirim sağlar ve bu geri bildirimi sabit bir performans standardına göre verir. Problem üreteç ise ajana bilgilendirici ve keşifsel eylemler önerir. Kısa vadede bu eylemler optimal olmayabilir ancak uzun vadede ajanın daha iyi kararlar almasına yardımcı olan deneyimler sağlarlar. Örneğin, bir restoran ajanı her zaman bildiği en iyi restorana gitmek yerine bazen yeni restoranları denemeli — bu exploration vs exploitation dengesidir.  
:::

---

## Etmen Mimarisi Seçimi

- Ortam özelliklerini analiz et (PEAS)
- En basit yeterli mimariyi seç
- Öğrenme bileşeninin gerekliliğini değerlendir

```
Basit refleks  →  Model-tabanlı  →  Hedef-tabanlı  →  Fayda-tabanlı
  (en basit)                                            (en genel)
                    Karmaşıklık artar →
```

::: {.notes}  
Doğru etmen mimarisinin seçimi, görev ortamının özelliklerinin doğru analiz edilmesine bağlıdır. PEAS analizi bu seçimin temelini oluşturur. Temel prensip, görev için yeterli olan en basit mimariyi seçmektir. Eğer ortam tam gözlenebilir ve basitse, basit refleks etmeni yeterli olabilir. Kısmi gözlenebilirlik varsa model-tabanlı bir yaklaşım gerekir. Ajan proaktif olarak hedeflere ulaşmak zorundaysa hedef-tabanlı mimari uygun olur. Çelişen hedefler veya belirsizlik altında optimal karar gerekiyorsa fayda-tabanlı mimari tercih edilir. Pratik uygulamalarda genellikle bu mimarilerin hibrit versiyonları kullanılır. Öğrenme bileşeni ise çevrenin dinamik olduğu, başlangıç bilgisinin yetersiz olduğu veya optimal davranışın önceden bilinmediği durumlarda eklenir.  
:::

---

## Özet

- **PEAS:** Görev ortamını yapılandırılmış şekilde tanımlar
- **$6$ özellik ekseni:** Ortam zorluğunu belirler
- **$4$ mimari + öğrenen etmen:** Artan karmaşıklık, artan yetenek
- **Genel prensip:** En basit yeterli mimariyi seç


::: {.notes}  
Bu noktada ulaşabileceğimiz temel çıkarımları şunlardır. Birincisi, herhangi bir yapay zeka sistemi tasarlamadan önce görev ortamının PEAS çerçevesiyle tam olarak belirtilmesi gerekir. İkincisi, ortamın altı temel özelliği — gözlenebilirlik, determinizm, episodik yapı, dinamiklik, süreklilik ve ajan sayısı — hangi tekniklerin uygun olacağını belirler. Üçüncüsü, dört temel ajan mimarisi artan karmaşıklık ve yetenek sunar: basit refleks, model-tabanlı refleks, hedef-tabanlı ve fayda-tabanlı. Öğrenen etmen çerçevesi ise tüm bu mimarilere uygulanabilir. Tasarım prensibi olarak en basit yeterli mimari tercih edilmelidir. Gelecek hafta, hedef-tabanlı ajanların kullandığı arama algoritmalarını incelemeye başlayacağız ve problem çözmenin sistematik yollarını tartışacağız.  
:::
