---
title: "Genel Özet: TCP/IP ve Yerel Ağda İletişim"
subtitle: "BLP 1003 — Çalışma Notu (Hafta 5)"
type: handout
author: "Öğr. Gör. Oktay Cesur"
sidebar: blp1003
lang: tr
execute:
  echo: false
---

# Genel Özet: TCP/IP ve Yerel Ağda İletişim

Bir yazıcıya IP adresini kullanarak ulaşırken kullanıcının MAC adresini yazması gerekmez. Buna rağmen Ethernet çerçevesi hedef MAC adresiyle gönderilir ve switch bu bilgiye göre iletir. İki adresin birlikte nasıl kullanıldığını anlamak, yerel iletişimin temelidir.

1. **TCP/IP mimarisi:** OSI görevleri gerçek protokollerle nasıl ilişkilendirilir?
2. **IP hizmeti:** Hangi hedefi belirtir, hangi garantileri vermez?
3. **ARP:** Bilinen IPv4 adresi için yerel MAC nasıl öğrenilir?
4. **İki tablo:** Uçtaki ARP tablosuyla switch tablosu hangi işi yapar?
5. **ICMP ve ping:** Erişim gözlemi neyi gösterir, neyi göstermez?

## 1. TCP/IP modeli ve protokol ailesi

### 1.1 Model, protokol ve küme

::: {.callout-important appearance="simple"}
## Tanım
**Model**, iletişim görevlerini katmanlarla açıklayan çerçevedir. **Protokol**, belirli bir iletişimin mesaj ve davranış kurallarıdır. **Protokol kümesi**, birlikte çalışan protokoller ailesidir.
:::

OSI görevleri yedi katmanda adlandırır. TCP/IP adı ise hem birlikte çalışan protokol ailesi hem bu aileyi anlatan katman modeli için kullanılır. Adında iki protokol bulunması ailenin yalnız TCP ile IP'den oluştuğu anlamına gelmez. UDP, ICMP ve uygulama protokolleri de bu yapıda birlikte çalışır.

Bir uygulama UDP kullanıyorsa “TCP/IP kullanmıyor” denemez. Burada TCP ile belirli bir taşıma protokolü, TCP/IP ile bütün aile kastedilmektedir.

### 1.2 Dört ve beş katmanlı gösterim

| OSI görevi | Dört katmanlı TCP/IP karşılığı |
|---|---|
| Uygulama, sunum, oturum | Uygulama |
| Taşıma | Taşıma |
| Ağ | İnternet |
| Veri bağlantısı, fiziksel | Ağ erişimi |

Üstteki üç görevin uygulama adı altında toplanması, verinin temsil edilmesi veya etkileşimin düzenlenmesi işlerinin kaybolması anlamına gelmez. Bu işler kullanılan uygulama protokolü ve yazılım içinde yürütülebilir. Örneğin metnin nasıl yorumlanacağına ilişkin bilgi yine gerekir; bunun için zorunlu, ayrı bir sunum protokolü olması gerekmez.

Beş katmanlı öğretim gösteriminde ağ erişimi, **veri bağlantısı** ve **fiziksel** olarak ikiye ayrılır. Diğer katmanlar uygulama, taşıma ve ağdır. Böylece çerçeve teslimi ile sinyal aktarımı ayrı gösterilir. Beş katmanlı gösterim, dört katmanın yeni sürümü değildir; görevlerin farklı ayrıntıyla gruplanmasıdır. OSI–TCP/IP eşlemesi de görevleri karşılaştırır; her protokolün tek ve tartışmasız bir katman numarası bulunduğu sonucunu vermez.

## 2. IP, MAC ve port neden birlikte bulunur?

### 2.1 Üç farklı seçim

::: {.callout-important appearance="simple"}
## Tanım
**IP**, ağ düzeyinde adresleme ve paket iletimi için kullanılan protokoldür. IP paketi kaynak ve hedef IP bilgilerini taşır. Ethernet'te yerel teslim MAC adresiyle; uygulama iletişimlerinin ayrılması taşıma katmanındaki port bilgisiyle ilişkilidir.
:::

| Bilgi | Cevapladığı soru | Bulunduğu yer |
|---|---|---|
| Hedef IP | Ağ düzeyindeki hedef hangi uç? | IP başlığı |
| Hedef MAC | Bu yerel Ethernet çerçevesi hangi arayüze yönelik? | Ethernet başlığı |
| Hedef port | Hedefteki hangi uygulama ucuna yönelik? | TCP/UDP başlığı |

Aynı yerel ağdaki bir yazıcıya gönderimde yazıcının IP adresi paket içinde, yazıcı arayüzünün MAC adresi çerçeve içinde bulunabilir. Biri ötekini gereksiz kılmaz: paket ile çerçeve farklı sorumluluklarla işlenir.

Aynı bilgisayarda birden fazla uygulama ağ kullanabilir. IP adresinin bilinmesi bu uygulamalardan hangisinin muhatap olduğunu belirtmez. Ayrıca bir bilgisayarın birden fazla arayüzü ve IP adresi bulunabilir; “her fiziksel kutunun her zaman tek IP'si vardır” varsayımı doğru değildir.

### 2.2 Alıcı iç içe birimleri nasıl ayırır?

Ethernet'in **tür (EtherType)** alanı yükte hangi protokol bulunduğunu ayırt etmeye yardım eder. Bir IPv4 başlığının **Protocol** alanı içeriğin TCP, UDP veya ICMP işlemesine verilmesini sağlar. TCP/UDP'deki portlar ise uygulama ucunu ayırmaya katılır. Bunlar aynı katmandaki, aynı işi yapan üç numara değildir: her biri çözümlemenin başka bir aşamasında kullanılır.

## 3. IP'nin hizmet sınırı

### 3.1 Bağlantısızlık

::: {.callout-important appearance="simple"}
## Tanım
**IP'nin bağlantısız olması**, paket göndermeden önce uçlar arasında IP düzeyinde bağlantı durumu kurulmasının gerekmemesidir.
:::

“Bağlantısız” sözcüğü kablonun bulunmadığını veya cihazın ağa bağlı olmadığını söylemez. Fiziksel yolun çalışmasıyla protokolün bağlantı durumu tutması farklı konulardır. Paket hedef adresini taşır ve iletim işlemlerine verilir; IP, her aktarım için önce karşı uçla bir konuşma başlatıp onay beklemez.

Bir üst protokolün bağlantı kurmasıyla IP'nin bağlantısız olması da çelişmez. Farklı katmanlar farklı işler yürütür; üstteki bağlantıya ait mesajlar da IP paketleriyle taşınabilir.

### 3.2 Best effort: elinden geleni yapmak

::: {.callout-important appearance="simple"}
## Tanım
**En iyi çaba (best-effort) hizmeti**, paketi mevcut koşullarda iletmeye çalışan fakat teslim, sıra ve gecikme garantisi vermeyen hizmettir.
:::

“En iyi” ifadesini kusursuz teslim sözü gibi okumamak gerekir. Ağın elindeki kaynaklar yetersiz kalabilir. Bir cihazın bekleyen paketleri tuttuğu alan dolduğunda yeni paket atılabilir; yol üzerindeki bağlantı arızalanabilir; paketlerin bekleme süreleri değişebilir. Paket gönderilmiş olması hedefin aldığı anlamına gelmez.

IP'nin sağlamadığı garantiler birbirinden ayrılmalıdır:

| Özellik | Garantinin bulunmamasının anlamı |
|---|---|
| Teslim | Gönderilen paket kaybolabilir |
| Sıra | Gönderim sırası ile varış sırası farklı olabilir |
| Gecikme | Belirli süre içinde varış sözü yoktur |

Bu sınır, IP'nin her paketi mutlaka kaybedeceğini söylemez. Ağ iyi koşullarda çok sayıda paketi başarıyla iletebilir; hizmetin verdiği söz yine değişmez. **Başarılı gözlem ile garanti farklıdır.**

Dosya aktarımı eksik içeriğin tamamlanmasını gerektirirken canlı konuşmada çok geç gelen sesin değeri azalabilir. Bu iki ihtiyacı aynı şekilde karşılamak zorunlu değildir. IP'nin üzerine eklenen mekanizmalar uygulamanın ihtiyacına göre teslim özellikleri sağlayabilir; IP'nin kendisi bu garantilerin kaynağı değildir.

## 4. ARP: hedef MAC adresini bulmak

### 4.1 Sorun ve önbellek

::: {.callout-important appearance="simple"}
## Tanım
**ARP (Adres Çözümleme Protokolü)**, yerel IPv4 iletişiminde bir IPv4 adresi için gerekli MAC eşlemesini öğrenmeyi sağlar. **ARP tablosu**, uçta tutulan IP–MAC eşleşmeleridir.
:::

A dizüstü bilgisayarı, B yazıcısına gönderim yapacak olsun. B'nin IP adresi `192.168.10.20` olarak bilinsin. C ise aynı Ethernet ağına bağlı başka bir uç olsun. Adresler hazır ve geçerli; A, B ve C sırasıyla switch'in 1, 2 ve 3. portunda.

MAC adreslerini A için AA, B için BB, C için CC etiketleriyle gösterelim. Dışarıdan bu etiketleri görüyor olmamız A'nın B'nin adresini zaten bildiği anlamına gelmez. A, gönderimden önce kendi ARP önbelleğine bakar. B için geçerli kayıt yoksa adresi öğrenmesi gerekir.

### 4.2 İstek: bilinen IP'yi sormak

A “192.168.10.20 kimde?” sorusunu ARP isteğiyle gönderir. Sorulan IP bellidir; çerçeve kurulurken kullanılacak MAC henüz bilinmez. Ethernet hedefi bu yüzden yayın adresidir.

```text
A → Switch → B ve C
Ethernet kaynak: AA
Ethernet hedef: FF:FF:FF:FF:FF:FF
ARP sorusu: 192.168.10.20 adresi kimde?
```

**Okuma:** Çerçevenin alıcı kapsamı bütün yerel uçlardır; sorunun aradığı IP ise belirli bir adrestir. B ve C soruyu alır, ama verilen örnekte yalnız B bu IP'nin sahibidir.

Switch isteğin kaynak alanından `AA → 1` öğrenir ve yayın çerçevesini port 2 ile 3'e iletir. C'nin alıcı olması `CC → 3` kaydını öğretmez. Kaynak adresinden öğrenme ile hedefe yayma burada da ayrı işlemlerdir.

ARP isteği IP paketinin içinde değildir. Doğrudan Ethernet çerçevesinde taşınır. İçinde IP adresi sorulması, ARP'nin kendisinin bir IP paketi olduğu anlamına gelmez.

### 4.3 Yanıt ve asıl veri

B istekte A'nın IP ve MAC bilgisini görür. Yanıtını AA hedefiyle, unicast gönderir. Switch bu yanıtın kaynağından `BB → 2` öğrenir. AA'nın portu istekte öğrenildiği için yanıt yalnız port 1'e iletilir.

A yanıtı aldığında `192.168.10.20 → BB` eşlemesini tutabilir. Artık bekleyen IP paketini hedef MAC'i BB olan Ethernet çerçevesine yerleştirir. Switch BB'yi port 2'de bildiği için bu çerçeveyi yalnız port 2'ye yollar.

| Gönderilen | Ethernet hedefi | İçerideki protokol | İş |
|---|---|---|---|
| ARP isteği | Broadcast | ARP | IP'nin MAC karşılığını sormak |
| ARP yanıtı | AA | ARP | Eşlemeyi bildirmek |
| Asıl veri çerçevesi | BB | IPv4 | IP paketini taşımak |

Asıl çerçevede ARP mesajı yoktur. ARP, onun hedef MAC alanını doldurmaya yardımcı olan ayrı alışveriştir. IP hedefi yine `192.168.10.20` kalır; IP adresi MAC adresine dönüştürülüp paketten çıkarılmış değildir.

## 5. ARP tablosu ile switch tablosu

| Özellik | A'nın ARP tablosu | Switch MAC tablosu |
|---|---|---|
| Eşleme | IPv4 → MAC | MAC → switch portu |
| Kullanım | Çerçeveye hedef MAC yazma | Gelen çerçeve için çıkış seçme |
| Nerede? | Uç sistemde | Switch'te |
| Örnek kayıt | 192.168.10.20 → BB | BB → 2 |

A, switch'in tablosunu okuyarak MAC seçmez; switch de bu tipik iletimde A adına hedef IP'yi çözmez. İki taraf kendi işi için farklı bilgiyi kullanır.

**ARP kaydı geçerliyse** A yeni ARP isteği sormadan çerçeve gönderebilir. Her IP paketinin önünde mutlaka ARP isteği bulunması gerekmez.

**Yalnız switch tablosu boşaldıysa**, A'daki geçerli IP–MAC kaydı hâlâ kullanılabilir. A hedefi BB olan unicast çerçeveyi gönderir; switch BB'nin portunu bilmediği için flooding yapabilir. Bu olay yeni ARP isteği gerektirmez. Bir tablonun boş olması ile ötekinin boş olması farklı sonuçlar doğurur.

Kayıtların varlığı, son gözlenen mesajda nasıl öğrenildiğini de tek başına göstermez. Eşleme önceki bir alışverişten kalmış olabilir. Olay sırasını açıklarken başlangıçta tabloların boş olup olmadığı belirtilmelidir.

## 6. ICMP ve ping sonucunu yorumlamak

### 6.1 Kontrol mesajı ve erişim yoklaması

::: {.callout-important appearance="simple"}
## Tanım
**ICMP**, IP iletişimine ilişkin kontrol ve hata mesajlarını taşır. **Ping**, hedefe Echo Request gönderip Echo Reply bekleyerek erişime ilişkin gözlem elde eder.
:::

ICMP mesajı doğrudan IP paketinin içinde taşınır; TCP veya UDP portu kullanmaz. ARP ile temel fark budur:

```text
ARP:   [Ethernet | ARP]
Ping:  [Ethernet | IP | ICMP Echo mesajı]
```

**Okuma:** ICMP'yi taşıyan IP paketi yerel Ethernet çerçevesinin yüküdür. ARP'de arada IP başlığı yoktur. Bir mesajın IP içinde taşınması için TCP veya UDP kullanması şart değildir.

B, Echo isteğine karşı yeni bir yanıt oluşturur. A'nın kendi paketi fiziksel olarak geri dönmüş olmaz. Aynı yerel örnekte yanıtın IP ve Ethernet kaynak/hedefleri ters yöndedir. Gidişin yanında dönüşün de çalışması, A'nın yanıtı görmesi için gereklidir.

ICMP her paket kaybında mutlaka bir hata mesajı üretileceğini veya hata mesajının kaynağa varacağını garanti etmez. Geri bildirim bulunması IP'yi güvenilir teslim hizmetine dönüştürmez.

### 6.2 Yanıt ve zaman aşımı

| Gözlem | Söylenebilecek sonuç | Bu gözlemden çıkmayan sonuç |
|---|---|---|
| Echo yanıtı alındı | Yoklama sırasında gidiş–dönüş IP erişimi gerçekleşti | Web hizmeti ve istenen sayfa çalışıyor |
| Süre doldu, yanıt yok | Belirlenen sürede Echo Reply alınmadı | Hedef kesin kapalı |
| İlk deneme yanıtsız, sonraki başarılı | Koşullar veya hazır bilgi değişmiş olabilir | İlk ping her zaman başarısızdır |

Hedefin açık olması ile ICMP yanıtı vermesi aynı şey değildir. İstek ya da yanıt kaybolabilir, filtrelenebilir veya süresinde işlenmeyebilir. Bu nedenle yanıtsızlıktan tek bir neden kesinleştirilemez. Yanıt alınması da hedefteki bütün uygulamaların çalıştığını göstermez.

### 6.3 Gidiş–dönüş süresi

**RTT**, yoklama isteğinin gönderilmesinden yanıtın alınmasına kadar geçen süredir. Yolculuk, bekleme ve işlem sürelerini birlikte içerir. Kaynaktaki örnek gibi 6 ms görülmesi, gidişin 3 ms olduğu sonucunu vermez; iki yönün süresi eşit olmak zorunda değildir.

Süreyi yorumlarken ölçülen şeyin bir tam gidiş–dönüş olduğu korunmalıdır. Bu değer yalnız kablonun sinyal yayma süresini veya yalnız hedefin işlem süresini ölçmez.

## Kontrol soruları

### 1. Mimari ve IP

1. TCP yerine UDP kullanan uygulama TCP/IP ailesinin dışında mıdır?
2. OSI'nin sunum ve oturum sorumlulukları dört katmanlı TCP/IP'de nasıl ele alınır?
3. Dört ve beş katmanlı gösterimin farkı nedir? Yeni sürüm ilişkisi var mı?
4. Aynı yerel yazıcıya gönderimde IP ve MAC bilgileri neden birlikte bulunur?
5. Hedef IP'yi bilmek hedefteki uygulamayı seçmeye yeter mi?
6. IP'nin bağlantısız olması fiziksel bağlantının olmadığı anlamına gelir mi?
7. Ağ yüzlerce paketi sorunsuz iletti. Sonraki paket için teslim ve süre garantisi çıkar mı?
8. Yoğun cihazın bekleme alanı dolduğu için paketi atması best-effort hizmetiyle çelişir mi?

::: {.callout-note collapse="true" title="Cevaplar — Mimari ve IP"}
1. Hayır. TCP/IP protokol ailesinin adı, yalnız TCP kullanan uygulamalarla sınırlı değildir.
2. Uygulama katmanı altında ele alınır; ayrı katman adları kaldırılırken görevler kaybolmaz.
3. Beş katmanda ağ erişimi veri bağlantısı ve fiziksel olarak ayrılır. Bu bir öğretim gruplamasıdır; yeni sürüm değildir.
4. IP paketin ağ düzeyindeki hedefini, MAC yerel Ethernet arayüzünü belirtir; iki birim farklı sorumluluklarla işlenir.
5. Hayır. TCP/UDP iletişiminde uygulama uçlarını ayırmaya port bilgisi katılır.
6. Hayır. Paket göndermeden önce IP düzeyinde bağlantı durumu kurulmamasıdır.
7. Hayır. Başarılı örnekler hizmet sözleşmesine yeni garanti eklemez.
8. Hayır. Kaynaklar yetersiz kaldığında kayıp mümkündür; IP teslim sözü vermez.
:::

### 2. ARP ve iki tablo

1. Başlangıç örneğinde A'nın bildiği IP ile bilmediği MAC hangisidir?
2. ARP isteği neden broadcast, yanıt neden unicast gider?
3. ARP yanıtı sonrasında A'nın ARP tablosuyla switch'in tablosuna hangi farklı kayıtlar eklenir?
4. C isteği aldı ama göndermedi. Switch C'yi öğrenmiş midir?
5. A, B'nin IP adresini ARP ile MAC'e çevirdiği için artık IP hedefine gerek olmadığını söylüyor. Hata nedir?
6. Aynı B'ye yeni paket gönderilirken geçerli ARP kaydı varsa yeni istek gerekir mi?
7. A'nın ARP kaydı geçerli, switch tablosu boş. Yeni IP veri çerçevesine ne olur?
8. ARP ve ICMP'nin taşındığı yapıları karşılaştır.

::: {.callout-note collapse="true" title="Cevaplar — ARP ve iki tablo"}
1. B'nin 192.168.10.20 IP'sini bilir; BB eşlemesini henüz bilmez.
2. İstekte yerel hedef MAC bilinmez, bilinen IP'nin sahibi sorulur. B, A'nın adresini istekten gördüğünden yanıtı doğrudan A'ya gönderebilir.
3. A'da 192.168.10.20 → BB; switch'te BB → port 2. Switch AA → port 1'i daha önce istekten öğrenmiştir.
4. Hayır. C kaynaklı giriş görülmediği için alma olayı tek başına öğrenme sağlamaz.
5. IP paketinin hedefi korunur. MAC, paketi taşıyan yerel çerçevenin hedef alanını tamamlar.
6. Hayır. Geçerli eşleme kullanılabilir.
7. A BB hedefli unicast gönderir; switch BB'nin portunu bilmediğinden diğer uygun portlara flooding yapabilir. A adına yeni ARP sormaz.
8. ARP doğrudan Ethernet'te, ICMP IP paketinin içinde taşınır; ICMP TCP/UDP portu kullanmaz.
:::

### 3. Gözlem ve yorum

1. Ping yanıtı geldi. Web sayfasının açılacağı kesin midir?
2. Yanıt gelmedi. “Hedef kesin kapalı” denebilir mi?
3. RTT 6 ms ise tek yönün 3 ms olduğu söylenebilir mi?
4. ICMP geri bildirimi IP'nin kayıpsız olduğunu gösterir mi?
5. İlk ping'in yanıtsız kalıp sonraki ping'in başarılı olması, ilk ping'in her zaman başarısız olduğu kuralını verir mi?

::: {.callout-note collapse="true" title="Cevaplar — Gözlem ve yorum"}
1. Hayır. Echo erişimi ile web hizmetinin isteği işleyebilmesi farklı işlerdir.
2. Hayır. Yalnız süresinde yanıt alınmadığı bilinir; farklı kayıp, filtreleme veya bağlantı nedenleri bulunabilir.
3. Hayır. Gidiş ve dönüş simetrik olmak zorunda değildir; RTT işlem ve beklemeyi de içerir.
4. Hayır. Her kayıp için ulaşan bir geri bildirim garantisi yoktur.
5. Hayır. Önbellek veya koşullar değişmiş olabilir; tek örnek evrensel kural oluşturmaz.
:::
