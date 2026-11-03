---
title: "Genel Özet: Ağ Cihazları ve Katmanlı Mimari"
subtitle: "BLP 1003 — Çalışma Notu (Hafta 3–4)"
type: handout
author: "Öğr. Gör. Oktay Cesur"
sidebar: blp1003
lang: tr
execute:
  echo: false
---

# Genel Özet: Ağ Cihazları ve Katmanlı Mimari

Bir ağ çiziminde aynı kabloları farklı cihazlara bağlamak, iletişimin davranışını değiştirir. Gelen sinyali herkese tekrarlayan cihazla, mesajın hedefini okuyup bağlantı seçen cihaz aynı işi yapmaz. Bu farkı anlamak için cihazın hangi bilgiyi kullandığını ve hangi sorumluluğu üstlendiğini izlemek gerekir.

1. **Cihazlar:** Hangi iletişim problemini çözerler?
2. **Ethernet ve MAC:** Yerel teslim için hangi bilgiler taşınır?
3. **Switch:** Adreslerin yerini nasıl öğrenir, hangi bağlantıya gönderir?
4. **Katmanlı mimari:** İletişimin işleri neden ayrılır?
5. **OSI ve kapsülleme:** Görevler ve veri birimleri nasıl ilişkilidir?

## 1. Ağ cihazları ve görevleri

### 1.1 Ağ arayüzü ve MAC adresi

::: {.callout-important appearance="simple"}
## Tanım
**Ağ arayüzü (NIC)**, sistemin ağa bağlandığı ve ağ verilerini gönderip aldığı arabirimdir. **MAC adresi**, yerel bağlantı teknolojisinde arayüzün adreslenmesinde kullanılan bilgidir.
:::

Bir dizüstü bilgisayarın Ethernet bağlantısı ile Wi-Fi bağlantısı ayrı arayüzlerdir. Bluetooth modülü de kendi bağlantısında ayrı adres bilgisi kullanabilir. Bu nedenle “bilgisayarın MAC adresi” ifadesiyle hangi arayüzün kastedildiği belirtilmelidir. Bilgisayarın tamamına ait, bütün bağlantılarda kullanılan tek bir MAC adresi varsayamayız.

Ethernet'te yaygın MAC adresi 48 bittir ve okunabilirlik için `02:00:00:00:00:0A` gibi altı grup hâlinde yazılır. MAC, cihazın değiştirilemez seri numarası olarak da düşünülmemelidir: arayüz için kullanılan adres yazılımla yapılandırılabilir. Yerel teslimde önemli olan, o bağlantıda kullanılan arayüz adresidir.

### 1.2 Sinyali tekrarlamak ve çerçeveyi iletmek

**Repeater**, sayısal sinyali yeniden üreterek sonraki bağlantı bölümüne aktarır. Hedef adresini inceleyip alıcı seçmez. Sinyalin taşınmasına yardım etmekle, mesajın hangi bağlantıya gitmesi gerektiğine karar vermek ayrı işlerdir.

**Hub**, çok portlu repeater gibi davranır: bir bağlantıdan gelen sinyali diğer bağlantılara tekrarlar. A, B'ye mesaj gönderdiğinde C'nin bağlantısına da aynı sinyal ulaşabilir. Hub hedef MAC adresinden port seçimi yapmaz. Ortam paylaşıldığından aynı anda yapılan gönderimler çakışabilir.

**Bridge**, yerel ağın bölümleri arasında Ethernet çerçevelerini MAC bilgisine göre iletir veya filtreler. Kaynakla hedef aynı bölümdeyse çerçeveyi başka bölüme geçirmeyebilir. **Switch**, bu MAC tabanlı öğrenme ve seçici iletim yaklaşımını çok sayıda porta uygular.

Buradaki **port**, switch'in fiziksel bağlantı noktasıdır. Bir çerçevenin hangi bağlantıdan geldiğini ve hangi bağlantıya gönderileceğini ayırt eder.

Modern, full-duplex anahtarlamalı Ethernet'te her uçla switch arasında ayrı bağlantı vardır. Bu bağlantılardaki sinyaller hub'daki ortak elektriksel ortamı oluşturmaz. Switch'in belirli bir çerçeveyi birden fazla porta göndermesi de bağlantıları ortak bir elektriksel ortama dönüştürmez.

### 1.3 Ağları bağlamak, erişim sağlamak ve denetlemek

| Cihaz veya işlev | Çözdüğü problem | Karıştırılmaması gereken görev |
|---|---|---|
| Router | Farklı ağlar arasında IP paketlerini iletme | Aynı yerel ağdaki MAC–port seçimi |
| Access point (AP) | Kablosuz uçların yerel ağa katılması | Tek başına ağlar arasında yönlendirme |
| Firewall | Trafiğe güvenlik politikası uygulama | Her trafiği koşulsuz iletme |
| Modem / erişim birimi | Erişim teknolojisine uygun sinyal ve bağlantı uyarlaması | Bütün yerel ağ işlevlerinin tek adı |

Router, farklı ağlar arasındaki geçişe aracılık eder. Bir switch ile router'ın ikisinde de çok sayıda bağlantı noktası bulunması, aynı işi yaptıkları anlamına gelmez. Karar verirken kullandıkları bilgi ve çözmeye çalıştıkları problem farklıdır.

Access point, kablosuz cihazlarla yerel ağ arasında erişim sağlar. Firewall ise hangi iletişimlerin geçmesine izin verileceğini belirler. İletilebilecek bir mesajın politika gereği engellenmesi mümkündür; fiziksel bağlantının çalışması ile iletişime izin verilmesi ayrı koşullardır.

Evde “modem” denilen bir kutu bu işlevlerin birkaçını birleştirebilir: erişim birimi, router, switch, AP ve firewall aynı kutuda bulunabilir. Böyle bir cihazda kablosuz bağlantı kurulması AP işleviyle, kablolu uçların bağlanması switch işleviyle ilgilidir. İşlevleri kutu sayısına göre değil, yapılan işe göre ayırırız.

**Collision domain**, çakışmanın ortak etkileyebildiği alanı; **broadcast domain**, yerel yayın iletisinin ulaşabildiği kapsamı belirtir. Paylaşılan hub ortamında çakışma ortak olabilir. Full-duplex switch bağlantıları bu ortak sinyal ortamını ayırır; buna rağmen aynı yerel yayın kapsamındaki uygun portlara broadcast iletilebilir. Çakışma ile yayın kapsamı aynı kavram değildir.

## 2. Ethernet çerçevesi

::: {.callout-important appearance="simple"}
## Tanım
**Ethernet**, kablolu yerel ağ iletişiminde kullanılan teknoloji ailesidir. **Çerçeve (frame)**, Ethernet'in yerel teslim için işlediği veri birimidir.
:::

Ethernet'i yalnız kablo türü veya hız olarak tanımlamak eksik kalır. Yerel teslimde alıcının belirtilmesi ve taşınan içeriğin hata açısından denetlenmesi de gerekir. Bu bilgileri çerçevenin alanları taşır.

```text
[Hedef MAC | Kaynak MAC | Tür | Taşınan içerik (yük) | FCS]
```

**Okuma:** Kaynak ve hedef MAC yerel iletişimin uçlarını belirtir. Tür alanı içeride taşınan protokolü ayırt etmeye yardım eder. Yük taşınan içeriği, FCS sondaki hata denetim bilgisini gösterir. Şema alanların gerçek uzunluklarını göstermez.

| Alan | Görevi | Switch açısından önemi |
|---|---|---|
| Kaynak MAC | Çerçeveyi gönderen arayüzü belirtir | Bu adrese hangi porttan ulaşılacağını öğrenme |
| Hedef MAC | Yerel hedefi belirtir | İletilecek portu seçme |
| Yük | Üst protokolün verisini taşır | Uygulama içeriğini yorumlamak iletim için gerekmez |
| FCS | İletimde bozulmayı algılamaya yardım eder | Bozulmayı algılamak, veriyi düzeltmek değildir |

**FCS bir düzeltme mekanizması değildir.** Bir bozulmanın saptanması, doğru içeriğin kendiliğinden elde edildiği anlamına gelmez. Eksik veya hatalı verinin nasıl tamamlanacağı ayrıca düzenlenmelidir.

Ethernet yayın hedefi `FF:FF:FF:FF:FF:FF` olarak gösterilir. Broadcast çerçevesinde hedef bütün ilgili uçlar olsa da kaynak adres hâlâ belirli bir gönderici arayüzüne aittir. Bu nedenle broadcast çerçevesinden de kaynak konumu öğrenilebilir.

## 3. Switch'in öğrenme ve iletim mantığı

### 3.1 İki ayrı soru

::: {.callout-important appearance="simple"}
## Tanım
**MAC tablosu**, MAC adreslerini switch portlarıyla eşler. Switch kaynak adresten **öğrenir**, hedef adrese bakarak **iletim kararı verir**.
:::

Gelen çerçevenin giriş portu switch tarafından zaten bilinir. Çerçeve “kaynağım A” diyorsa switch, A adresine bu giriş portu üzerinden ulaşılabildiğini öğrenir. Hedef B yazması ise B'nin nerede olduğunu söylemez; hedef bilgisi bir istek yönünü belirtir, gözlenen kaynak konumunu değil.

| İşlem | Kullanılan bilgi | Sonuç |
|---|---|---|
| Öğrenme | Kaynak MAC + giriş portu | MAC tablosuna kayıt ekleme veya güncelleme |
| İletme | Hedef MAC + tablodaki port | Hedefe uygun çıkış seçme |

Tablo, switch'in kendi üzerinden gözlediği gönderimlerle oluşur. Sadece çerçeve alan ama hiç göndermeyen bir uç, bu yolla henüz öğrenilmiş olmaz. Bir portta başka bir ağ bölümü varsa o port üzerinden birden fazla kaynak adresi de öğrenilebilir; tablo “her portta tek MAC” listesi olmak zorunda değildir.

### 3.2 Hedef biliniyorsa ve bilinmiyorsa

| Hedef durumu | Davranış | Gerekçe |
|---|---|---|
| Bilinen unicast, başka portta | İlgili porta ilet | Hedefin konumu biliniyor |
| Bilinen unicast, giriş portunda | Başka porta iletme | Hedef zaten geldiği tarafta |
| Bilinmeyen unicast | Giriş dışındaki uygun portlara yay | Tek hedefin hangi tarafta olduğu bilinmiyor |
| Broadcast | Giriş dışındaki uygun portlara yay | Mesaj bütün ilgili uçlara yönelik |

Bilinmeyen hedefe yayma **flooding** olarak adlandırılır. Hedefin tek olması ile iletimin birden fazla porta yapılması birlikte mümkündür. Flooding sırasında hedef dışındaki uçlar çerçeveyi fiziksel olarak alabilse de normal unicast kabulünde hedef adresi kendilerine ait olmadığı için onu kendi mesajları olarak teslim almazlar.

::: {.callout-note}
## Sık yapılan hata
“Birden çok porta gönderildi, öyleyse broadcast oldu” yorumu yanlıştır. Bilinmeyen unicast'te hedef tek bir MAC adresidir. Switch'in hedefin yerini bilmemesi, çerçevenin hedef adresini değiştirmez.
:::

### 3.3 İki çerçeveli örnek

A, B ve C sırasıyla port 1, 2 ve 3'e bağlı olsun. MAC adreslerini kısaca AA, BB ve CC diye adlandıralım; bunlar örnekteki adres etiketleridir. Başlangıçta tablo boş ve başka trafik yok.

```text
A (AA) ── port 1 ──┐
B (BB) ── port 2 ──┼── Switch
C (CC) ── port 3 ──┘
```

**A, B'ye gönderdiğinde:** Çerçeve port 1'den gelir. Switch önce `AA → 1` kaydını oluşturur. BB tabloda bulunmadığından çerçeveyi port 2 ve 3'e yollar. B hedefi tanır; C hedef değildir. Bu olay CC'nin konumunu öğretmez: C henüz gönderim yapmamıştır.

**B yanıt verdiğinde:** Yanıt port 2'den gelir; switch `BB → 2` kaydını ekler. Hedef AA, port 1'de bilindiği için yanıt yalnız port 1'e gönderilir.

| An | MAC tablosu | İletim |
|---|---|---|
| Başlangıç | Boş | Henüz yok |
| A'nın çerçevesinden sonra | AA → 1 | Port 2 ve 3 |
| B'nin yanıtından sonra | AA → 1, BB → 2 | Yalnız port 1 |

Kayıtlar geçerliyken A'nın sonraki BB hedefli çerçevesi yalnız port 2'ye gidebilir. İlk yayma ile sonraki seçici iletim arasındaki fark, switch'in zaman içinde öğrendiği bilgidir.

## 4. Katmanlı mimari neden gerekir?

### 4.1 Tek aktarım, farklı sorumluluklar

Bir video dosyası göndermek; içeriği hazırlama, hedefi belirtme, veriyi taşınabilir birimlere ayırma ve bitleri fiziksel sinyale dönüştürme işlerini bir araya getirir. Bu işleri aynı mekanizma olarak düşünürsek değişiklik yapmak güçleşir. Bakır yerine fiber kullanılması, video uygulamasının bütün iletişim mantığını yeniden yazmayı gerektirmemelidir.

::: {.callout-important appearance="simple"}
## Tanım
**Katmanlı mimari**, iletişim sorumluluklarını ayıran ve her katmanın alt hizmetlerden yararlanarak üst katmana hizmet sunduğu düzendir.
:::

Üst katman alttaki işin nasıl yapıldığından çok hangi hizmeti sağladığına dayanır. Ancak bu bağımsızlık koşulludur: sağlanan hizmetin özellikleri veya hizmete erişim biçimi değişirse üst katman da etkilenebilir. “Alt katmanda her değişiklik üstten tamamen gizlidir” diye genellenemez.

### 4.2 Hizmet, arayüz ve protokol

| Kavram | Cevapladığı soru |
|---|---|
| Hizmet | Alt katman üsttekine hangi imkânı sunuyor? |
| Arayüz | Aynı sistemde bu imkân nasıl kullanılıyor? |
| Protokol | Karşı uçlardaki eşler hangi mesaj kurallarına uyuyor? |

İki filozofun yerel çevirmenleri ve sekreterleri üzerinden yazıştığını düşün. Filozof çevirmenin hizmetini kullanır; iki çevirmen ortak bir dilin kurallarına uyar. Çevirmenlerin birbirleriyle uyumlu olması, arada doğrudan fiziksel yol bulunduğu anlamına gelmez: mesaj sekreterler üzerinden taşınır.

Ağda da aynı sistemde katmanlar arasındaki ilişki ile karşı sistemdeki eşle kurulan mantıksal ilişki ayrıdır. Gönderici veriyi aşağıya aktarır, fiziksel ortamdan karşıya geçilir ve alıcıda yukarıya işlenir. “Eş katmanlar konuşur” ifadesi alt katmanların atlandığını söylemez.

## 5. OSI sorumlulukları

**OSI**, iletişim işlerini yedi katmanla açıklayan bir modeldir. Katman adları görevleri karşılaştırmayı sağlar; OSI tek başına çalışan bir aktarım protokolü değildir.

| No | Katman | Sorumluluk | Örnek soru |
|---|---|---|---|
| 7 | Uygulama | Uygulama amacına uygun mesajlaşma | Hangi web kaynağı isteniyor? |
| 6 | Sunum | Verinin temsil biçimi | Gelen baytlar hangi karakterleri gösteriyor? |
| 5 | Oturum | Süren etkileşimin düzenlenmesi | Etkileşimin durumu nasıl korunuyor? |
| 4 | Taşıma | Uygulama uçları arasındaki teslim | Hangi uygulama iletişimine teslim edilecek? |
| 3 | Ağ | Kaynaktan hedef uca paket taşıma | Hangi mantıksal hedefe gidecek? |
| 2 | Veri bağlantısı | Yerel bağlantıda çerçeve teslimi | Yerel hedef arayüz hangisi? |
| 1 | Fiziksel | Bit bilgisini sinyalle taşıma | Ortamda hangi fiziksel değişim oluşacak? |

Sunum sorumluluğunda kodlama, sıkıştırma ve şifreleme gibi temsil işleri tartışılır. Gerçek sistemlerde bu işlerin hangi bileşende yapıldığını kullanılan protokol belirler. Modelde sunum katmanının bulunması, bütün şifrelemenin ayrı bir sunum başlığıyla yapılacağı anlamına gelmez.

Taşıma, ağ ve veri bağlantısı görevleri de aynı “adrese gönderme” işi olarak birleştirilemez. Yerel arayüzü, ağ düzeyindeki hedefi ve hedefteki uygulama iletişimini ayırt etmek farklı bilgilere ihtiyaç duyar. Fiziksel katman ise bitleri ilk kez üretmez; mevcut bit bilgisinin ortamda nasıl taşınacağını ele alır.

## 6. Kapsülleme ve çözümleme

### 6.1 Başlık ve yük

::: {.callout-important appearance="simple"}
## Tanım
**PDU**, belirli bir katman protokolünün veri birimidir. **Başlık**, o protokolün kontrol ve teslim bilgilerini; **yük**, içinde taşıdığı içeriği barındırır. **Kapsülleme**, üst birimin alt protokolün yüküne yerleştirilmesidir.
:::

Kısa bir uygulama mesajının TCP, IP ve Ethernet üzerinden taşındığını düşün:

```text
Uygulama:                           [Mesaj]
TCP segmenti:         [TCP başlığı | Mesaj]
IP paketi:  [IP başlığı | TCP başlığı | Mesaj]
Ethernet: [Ethernet başlığı | IP başlığı | TCP başlığı | Mesaj | FCS]
```

**Okuma:** Bir alt satır, üstteki birimin tamamını içine alır. TCP başlığı TCP açısından kontrol bilgisiyken IP açısından yükün içindedir. Ethernet açısından IP ve TCP başlıkları da taşınan yükün parçalarıdır. FCS çerçevenin sonunda yer alır.

| İncelenen birim | Başlık | Yük |
|---|---|---|
| TCP segmenti | TCP başlığı | Uygulama verisi |
| IP paketi | IP başlığı | TCP başlığı ve uygulama verisi |
| Ethernet çerçevesi | Ethernet başlığı | IP başlığı, TCP başlığı ve uygulama verisi |

“Yük yalnız kullanıcının yazdığı metindir” demek bu yüzden yanlıştır. Yükün sınırı, incelenen protokole göre değişir. Gerçek başlık sayısı da OSI'nin yedi katmanından değil kullanılan protokollerden çıkar.

### 6.2 Alıcıda ne olur?

Alıcı sinyallerden bit bilgisini elde eder, Ethernet çerçevesini işler ve ilgili kontrolleri yapar. Taşınan IP birimi IP işlemesine, içindeki TCP birimi TCP işlemesine, uygulama verisi de ilgili uygulama iletişimine verilir. **Çözümleme**, başlıkları rastgele silmek değildir; her protokol kendi alanlarını yorumlar ve taşıdığı içeriği uygun işleme aktarır.

Büyük bir dosya çok sayıda aktarım birimine bölünebilir. Parçaların sıra bilgisi, gelenlerin doğru yere konmasına yardım eder; eksik parçanın içeriğini ise oluşturmaz. Benzer biçimde bir hata denetiminin bozulmayı saptaması, kaybın tamamlandığını göstermez. Sıralama, bozulmayı algılama ve eksikliği giderme ayrı işlerdir.

### 6.3 Ara cihaz hangi katmana kadar bakar?

Tipik yerel iletim görevinde link-layer switch, çerçevedeki MAC bilgisiyle karar verir; uygulama mesajının anlamını bilmesi gerekmez. Router ağ düzeyindeki bilgiyi işler. Uç sistem ise mesajı ilgili uygulamaya teslim edecek işlemleri yürütür.

Bir switch'in ayrıca yönetim hizmeti sunması bu ayrımı bozmaz. Cihazın kendi yönetim mesajlarını işlemesi ile başka uçların çerçevelerini iletmesi farklı işlerdir. “Switch katman 2'de çalışır” ifadesi tipik iletim işlevini anlatır.

## Dikkat edilmesi gereken noktalar

- MAC adresi ağ arayüzüyle ilişkilidir; aynı bilgisayar farklı arayüzler kullanabilir.
- Hub sinyali tekrarlar; switch kaynak MAC'ten öğrenir, hedef MAC'e göre iletir.
- Broadcast çerçevesi de belirli bir kaynaktan geldiği için öğrenme sağlayabilir.
- Flooding, unicast hedefi broadcast hedefe dönüştürmez.
- FCS bozulmayı algılamaya yardım eder; içeriği onarmaz.
- Katman, donanım kutusu ve protokol başlığı bire bir aynı şey değildir.

## Kontrol soruları

### 1. Cihazlar ve Ethernet

1. Aynı dizüstünde Ethernet ve Wi-Fi bulunuyor. “Bu bilgisayarın yalnız bir MAC adresi vardır” iddiasını değerlendir.
2. Repeater, hub, switch ve router'ı kullandıkları bilgi ve çözdükleri problemle karşılaştır.
3. Bir cihaz kablosuz erişim sağlıyor. Bundan router olduğu çıkar mı?
4. Sağlam bir bağlantıdaki trafik firewall tarafından engellenebilir mi? Neden?
5. Ethernet'te kaynak MAC, hedef MAC ve FCS'nin görevleri nelerdir?
6. FCS bozulma gösterdiğinde doğru içeriğin elde edildiği söylenebilir mi?

::: {.callout-note collapse="true" title="Cevaplar — Cihazlar ve Ethernet"}
1. Hayır. MAC arayüzle ilişkilidir; Ethernet ve Wi-Fi ayrı arayüzlerdir ve farklı adresler kullanabilir.
2. Repeater sinyali yeniden üretir; hub bir porttan aldığı sinyali diğerlerine tekrarlar. Switch kaynak MAC ile giriş portunu öğrenip hedef MAC'e göre yerel çerçeve iletir. Router farklı ağlar arasında paket iletir.
3. Hayır. AP işlevi kablosuz yerel erişimdir; yönlendirme ayrı bir işlevdir. İkisi aynı kutuda bulunabilir.
4. Evet. Bağlantının çalışması ile güvenlik politikasının iletişime izin vermesi farklı koşullardır.
5. Kaynak gönderici arayüzü, hedef yerel alıcıyı belirtir. FCS hata denetimine yardım eder.
6. Hayır. Saptama ve düzeltme farklıdır; FCS doğru veriyi yeniden oluşturmaz.
:::

### 2. Switch kararı

1. Boş tablolu örnekte A port 1'den B'ye gönderiyor. Hangi kayıt oluşur, hangi portlara iletilir?
2. B port 2'den yanıtladığında tablo ve çıkış nasıl değişir?
3. C ilk çerçeveyi aldı. Switch'in CC → 3 kaydı oluşturması için bu yeterli mi?
4. Kaynağı AA, hedefi broadcast olan çerçeve port 1'den gelirse öğrenme yapılabilir mi?
5. Tabloda BB → 2 var; BB hedefli çerçeve port 2'den geliyor. Başka portlara gönderilir mi?
6. Bilinmeyen unicast ile broadcast aynı portlara iletilebilir. Hedefleri bakımından farkları nedir?

::: {.callout-note collapse="true" title="Cevaplar — Switch kararı"}
1. AA → 1 öğrenilir; BB bilinmediğinden port 2 ve 3'e iletilir.
2. BB → 2 eklenir; AA bilindiğinden yanıt yalnız port 1'e gider.
3. Hayır. Öğrenme, C kaynaklı bir çerçevenin girişinden yapılır; almış olması konumunu öğretmez.
4. Evet. Kaynak hâlâ AA'dır; AA → 1 öğrenilebilir. Hedef yayın kapsamına uygun diğer portlara iletilir.
5. Hayır. Hedef geldiği tarafta bilindiğinden diğer portlara iletilmez.
6. Bilinmeyen unicast tek bir MAC'e yöneliktir ama konumu bilinmez. Broadcast bütün ilgili uçlara yöneliktir.
:::

### 3. Katmanlar ve kapsülleme

1. Katmanlama, bakırdan fibere geçerken uygulamanın değişmemesine nasıl yardım eder? Bunun koşulu nedir?
2. Aynı sistemde hizmet kullanımı ile karşı uçtaki eş katmanla protokol ilişkisini ayır.
3. Metnin kodlanması, yerel çerçeve teslimi, bitlerin sinyalle taşınması ve uygulama uçları arasındaki teslim OSI'de hangi katmanlardır?
4. OSI'de yedi katman bulunması her mesajda yedi ayrı başlık gerektiğini gösterir mi?
5. TCP/IP/Ethernet örneğinde TCP başlığı, Ethernet açısından başlık mı yük mü? IP açısından nedir?
6. FCS, Ethernet çerçevesinin başında mı sonundadır?
7. Switch neden her çerçevenin uygulama içeriğini anlamak zorunda değildir?
8. Eksik dosya parçasının sıra numarasını bilmek, eksik içeriği tamamlar mı?

::: {.callout-note collapse="true" title="Cevaplar — Katmanlar ve kapsülleme"}
1. Fiziksel temsil alt bileşenlerde yürütülür; uygulama aktarım hizmetini kullanır. Üste sunulan hizmet ve erişim biçimi korunmalıdır.
2. Hizmet ve arayüz yerel katmanların birlikte çalışmasını, protokol karşı uçlardaki eşlerin mesaj kurallarını açıklar. Veri fiziksel olarak alt hizmetlerden geçer.
3. Sırasıyla sunum (6), veri bağlantısı (2), fiziksel (1) ve taşıma (4).
4. Hayır. Katmanlar sorumlulukları, gerçek başlıklar kullanılan protokolleri gösterir.
5. Ethernet ve IP açısından taşınan yükün parçasıdır. TCP açısından kendi başlığıdır.
6. Sonda yer alan hata denetim alanıdır.
7. Tipik iletim kararı MAC tablosu ve hedef MAC'e dayanır. Uygulama içeriğinin anlamı bu karar için gerekli değildir.
8. Hayır. Konum bilinir, içerik yine eksiktir; ayrıca tamamlanması gerekir.
:::
