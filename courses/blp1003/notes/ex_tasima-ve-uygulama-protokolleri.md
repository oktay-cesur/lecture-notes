---
title: "Genel Özet: Taşıma ve Uygulama Protokolleri"
subtitle: "BLP 1003 — Çalışma Notu (Hafta 6)"
type: handout
author: "Öğr. Gör. Oktay Cesur"
sidebar: blp1003
lang: tr
execute:
  echo: false
---

# Genel Özet: Taşıma ve Uygulama Protokolleri

Bir bilgisayara ulaşmak, o bilgisayardaki belirli bir hizmetten sonuç almakla aynı şey değildir. Aynı bilgisayar web hizmeti, dosya paylaşımı ve başka uygulamalar çalıştırabilir. Gelen verinin hangi uygulama iletişimine ait olduğu, nasıl teslim edileceği ve orada ne anlama geldiği ayrı sorulardır.

1. **Port ve soket:** Uygulama uçları nasıl ayırt edilir?
2. **TCP ve UDP:** Hangi teslim özelliklerine ihtiyaç vardır?
3. **DHCP ve DNS:** Yapılandırma ve ad bilgileri nasıl edinilir?
4. **HTTP ve HTTPS:** Kaynak istemek ve iletişimi korumak nasıl ayrılır?
5. **Dosya, e-posta ve yönetim:** Benzer görünen hizmetler hangi farklı işleri yapar?

## 1. Port, soket ve bağlantı uçları

### 1.1 IP adresinden uygulama ucuna

::: {.callout-important appearance="simple"}
## Tanım
**Port numarası**, TCP veya UDP iletişiminde uygulama uçlarını ayırmak için kullanılan bilgidir. **Soket**, uygulamanın taşıma hizmetine eriştiği yazılım arayüzüdür. IP ve port birlikte bir iletişim ucunu belirtir.
:::

IP adresini apartmanın adresine, portu hangi daireye gidileceğine benzetebilirsin. Paket hedef sisteme ulaşmış olsa bile hangi uygulama iletişimine verileceği ayrıca belirlenmelidir. Ancak daire benzetmesinin sınırı vardır: port numarası, bir programın değişmez kimliği değildir.

Bir program çok sayıda bağlantı kullanabilir. Bazı hizmetlerin yaygın varsayılan portları bulunur; bu, istemcinin sunucuyu nerede arayacağını bilmesini kolaylaştırır. Sunucu başka bir portta da çalışabilir. Aynı sayısal port TCP ile UDP'de ayrı kullanımlara sahiptir.

Buradaki port yazılımsal iletişim bilgisidir; switch'in kablo takılan fiziksel portuyla aynı kavram değildir. `192.168.10.20:80` ifadesi IPv4 adresi ile portu birlikte gösterir. Soketin kendisi bu yazılı metinden ibaret değildir; programın iletişim hizmetini kullandığı arayüzdür.

### 1.2 İstek ve yanıtta iki port

Kaynaktaki HTTP/1.1 örneğinde istemci `192.168.10.10:52000`, sunucu `192.168.10.20:80` ucunu kullansın. 52000, seçilmiş örnek bir geçici istemci portudur.

| Mesaj | Kaynak uç | Hedef uç |
|---|---|---|
| İstek | 192.168.10.10:52000 | 192.168.10.20:80 |
| Yanıt | 192.168.10.20:80 | 192.168.10.10:52000 |

Sunucuya giden istekte hizmetin portu hedeftir; yanıtta ise kaynaktır. İstemcinin geçici portu yanıtın hangi iletişim ucuna döneceğinin bilgisini sağlar. İki yönde uçlar yer değiştirir, aynı bağlantı ilişkisi korunur.

### 1.3 Çok istemci, aynı sunucu portu

Sunucunun her istemci için yeni hizmet portu açması gerekmez. TCP bağlantısı iki tarafın IP ve port çiftleri birlikte kullanılarak ayırt edilir:

| Bağlantı | İstemci ucu | Sunucu ucu |
|---|---|---|
| Birinci | 192.168.10.10:52000 | 192.168.10.20:80 |
| İkinci | 192.168.10.30:52000 | 192.168.10.20:80 |

İki istemcinin port numarası aynı olsa da IP adresleri farklıdır. Böylece bağlantılar birbirine karışmaz. Aynı istemci aynı sunucuya ayrı TCP bağlantıları kurduğunda istemci portları farklı olabilir. Tarayıcı sekmeleriyle portlar arasında ise zorunlu bire bir eşleme yoktur: bir program farklı iletişimler kurabilir veya mevcut bağlantısını kullanabilir.

## 2. TCP ve UDP hizmetleri

### 2.1 Teslim niteliği

::: {.callout-important appearance="simple"}
## Tanım
**TCP**, uygulama uçlarına bağlantı yönelimli, güvenilir ve sıralı bayt akışı sunan taşıma protokolüdür. **UDP**, mesajları datagramlar hâlinde taşıyan; kendi içinde bağlantı kuruluşu, kayıp tamamlama ve sıralı teslim sağlamayan taşıma protokolüdür.
:::

| Özellik | TCP | UDP |
|---|---|---|
| Bağlantı durumu | Kurulur | TCP'deki gibi kurulmaz |
| Kayıp veriyi tamamlama | Yeniden gönderim mekanizmaları vardır | UDP'nin kendi hizmetinde yoktur |
| Sıralı teslim | Bayt akışını sıralı sunar | Datagramların sırasını garanti etmez |
| Uygulamaya sunulan | Bayt akışı | Ayrı datagramlar |
| Şifreleme | Kendi başına sağlamaz | Kendi başına sağlamaz |

“Güvenilir” sözcüğü, gönderilen verinin alınması ve sıralı sunulmasıyla ilgilidir. Gizlilik, kimlik doğrulama ve içeriğin doğru bilgi olması farklı konulardır. TCP üzerinden gönderilen şifresiz bir parola, güvenilir biçimde taşınırken başkası tarafından okunabilir.

TCP de bağlantının her koşulda başarıyla tamamlanacağını garanti etmez. Yol kalıcı olarak bozulabilir ve uygulama hata alabilir. Ayrıca taşıma katmanında alınan verinin, uygulama tarafından diske yazıldığı veya işlemin tamamlandığı sonucu çıkmaz.

### 2.2 Hangi ihtiyaç hangi seçimi destekler?

Bir dosyanın eksik baytlarla teslim edilmesi dosyanın kullanılmasını bozabilir. Böyle bir işte eksikliği bekleyerek tamamlamak ve doğru sırayı sağlamak önemlidir. Canlı görüşmede çok geç gelen ses parçası ise konuşmanın o anına yetişemez. Burada gecikme beklentisi ile kayıp toleransı farklıdır.

| İhtiyaç | Karar gerekçesi |
|---|---|
| İçeriğin eksiksiz ve sıralı alınması | TCP'nin hazır teslim mekanizmaları uygun olabilir |
| Eski veriyi beklemek yerine güncel akışın sürmesi | UDP tabanlı bir tasarım uygun olabilir |
| Küçük bir sorgunun yanıtsızlıkta yeniden sorulabilmesi | Uygulama kendi tekrar denemesini yapabilir |

Bunlar “her dosya TCP, her ses UDP” kuralları değildir. Uygulamanın eklediği mekanizmalar da hesaba katılır. UDP kullanan uygulama istek–yanıt yapabilir, kaybı fark edebilir veya yeniden deneyebilir; bu işleri UDP kendiliğinden sağlamaz. UDP tek yönlü değildir. Bağlantı kuruluşunun az olması da her durumda daha hızlı sonuç alınacağı anlamına gelmez.

### 2.3 Bağlantı neden üç mesajla kurulur?

İki tarafın yalnız birbirlerine mesaj yollaması değil, karşı tarafın kendi cevabını alabildiğinin de anlaşılması gerekir:

> **A:** “Sesim geliyor mu?”  
> **B:** “Evet, seni duyuyorum. Benim sesim geliyor mu?”  
> **A:** “Evet, seni de duyuyorum.”

İkinci mesaj A'ya ulaşınca A iki yön hakkında bilgi edinir: B, A'yı duyduğunu söylemiştir; A da B'yi duymuştur. B ise kendi cevabının A'ya ulaştığını henüz bilmez. Üçüncü mesaj bu bilgiyi B'ye getirir. TCP'de bu alışveriş aynı zamanda iki tarafın bağlantı başlangıç bilgilerini paylaşmasına ve karşılıklı onaylamasına yarar.

İki mesajlı bir düzende B, cevabını gönderir göndermez bağlantıyı kurulmuş saysaydı, cevabın kaybolduğu durumda A ile B farklı durumda kalabilirdi. B bağlantı beklerken A cevabı alamamış olurdu. Sahte kaynak bilgili bir istek de, cevabın gerçekten alınabildiği doğrulanmadan bağlantı kurulmuş sayılmasına yol açabilirdi. Üçüncü mesaj bu doğrulamaya hizmet eder; kimlik doğrulama veya bütün saldırılara karşı koruma değildir.

Hizmet portu bu alışverişten önce dinleme durumundadır. Üçüncü mesaj yeni bir açık port oluşturmayı önleyen işlem değildir. Portlar hangi uçların konuştuğunu, el sıkışma bu uçlar arasındaki bağlantı başlangıcını ilgilendirir. Kuruluştan sonra gönderilecek verinin gelecekte mutlaka ulaşacağı veya şifreleneceği de kanıtlanmış olmaz.

### 2.4 Teslimin kısa ayrıntıları

TCP sıra bilgisi bayt akışındaki konumları izler. Alım onayı, kesintisiz alınan veriden sonra beklenen konumu bildirir; segment adedi veya uygulamanın işi bitirdiği anlamına gelmez.

**Akış denetimi**, alıcının kabul kapasitesine; **yoğunluk denetimi**, ağ yoluna verilen yüke yöneliktir. Alıcının hızlı olması, aradaki ağda kuyruk oluşmayacağını göstermez. TCP ayrıca mesaj sınırlarını korumaz: gönderilen `MER` ve `HABA` parçaları uygulamada tek okumada `MERHABA` olarak alınabilir. Baytlar sıralıdır; uygulamanın mesaj sınırını kendi protokolü belirler.

UDP'de teslim edilen datagramın sınırı korunur; bir datagramın ulaşması diğerinin de ulaştığı anlamına gelmez. UDP başlığı portlar, uzunluk ve hata denetimi bilgisi taşır. Uzunluk başlıkla veriyi birlikte sayar; hata denetimi bir alım onayı veya kötü niyetli değişikliğe karşı şifreli koruma değildir.

## 3. DHCP: yapılandırmayı edinmek

### 3.1 Dağıtılan bilgilerin anlamı

::: {.callout-important appearance="simple"}
## Tanım
**DHCP**, istemcilerin IP yapılandırmasını otomatik edinmesini ve belirli süreli adres kiralamasını yöneten protokoldür.
:::

| Bilgi | Görevi |
|---|---|
| IPv4 adresi | İstemcinin arayüzünü adresleme |
| Alt ağ maskesi | Ağ kısmını ve aynı alt ağ ilişkisini değerlendirme |
| Varsayılan ağ geçidi | Başka ağdaki hedefe giderken kullanılacak çıkış |
| DNS sunucusu adresi | Ad sorgularının gönderileceği hizmeti belirtme |
| Kiralama süresi | Adresin kullanım süresini belirleme |

Bir DNS sunucusu adresinin verilmesi, o adresin istemcinin kendi IP adresi olması demek değildir. Her alan farklı soruyu cevaplar. Çok sayıda cihazda bu bilgileri tek tek elle yönetmek hata riskini artırır; DHCP dağıtım ve süre takibini birlikte yönetir.

### 3.2 Teklif, seçim ve onay

Normal başarılı başlangıç akışı **DORA** olarak adlandırılır:

```text
İstemci ── Discover: yapılandırma arıyorum ──> Sunucu
İstemci <── Offer: şu yapılandırmayı öneriyorum ─ Sunucu
İstemci ── Request: bu teklifi istiyorum ────> Sunucu
İstemci <── Acknowledge: kiralamayı onaylıyorum ─ Sunucu
```

**Okuma:** Oklar mesaj yönünü gösterir. Başlangıçta istemci sunucuyu bilmediği için yerel yayınla arama yapabilir; her okun unicast olduğu sonucu çıkarılmaz.

Offer bir tekliftir. Birden fazla sunucu teklif verebilir; istemci seçimini Request ile bildirir. Kiralamanın onayı ayrı mesajdır. Böylece bir adresin önerilmesi ile kullanılacak yapılandırmanın onaylanması birbirine karıştırılmaz.

Adres kalıcı mülkiyet değildir. Ağda kalan istemci süre dolmadan kiralamayı yenilemeye çalışır. Yenileme her seferinde başlangıçtaki dört mesajın aynen tekrarlanması olmak zorunda değildir. Burada yönetilen, belirli istemciye belirli süreyle ayrılan yapılandırmadır.

## 4. DNS: adla ilgili bilgiyi bulmak

::: {.callout-important appearance="simple"}
## Tanım
**DNS**, alan adlarıyla ilgili kayıtların sorgulanmasını sağlayan dağıtık sistemdir. **Çözümleyici**, istemci adına sorguyu yanıtlayan veya gerekli bilgiyi diğer ad sunucularından bulan bileşendir.
:::

Kaynaktaki yerel örnekte `ders.test` adı `192.168.10.20` adresini göstersin. İstemci sorgusunu `192.168.10.53` adresindeki çözümleyiciye gönderir. Yanıtın gösterdiği `.20` web sunucusudur; sorunun gönderildiği `.53` ile aynı görevde değildir.

Çözümleyici geçerli önbellek kaydı biliyorsa onu kullanabilir. Bilmiyorsa kök, üst düzey alan ve yetkili ad sunucularıyla ilgili çözümleme sürecini yürütebilir. **Yetkili sunucu**, ilgili alanın kayıtları için yetkili kaynaktır; **önbellek** ise daha önce edinilmiş bilginin geçici tutulmasıdır. Her sorguda bütün zincirin baştan çalışması gerekmez.

**A kaydı**, adı IPv4 adresiyle ilişkilendirir. **MX kaydı**, alan adına gelen e-postayı kabul edecek sunucuyu belirtir. DNS yalnız web sayfası adresi aramakla sınırlı değildir.

Önbellek kaydının yaşam süresi, eski bilginin süresiz kullanılmasını önlemeye yarar. Adres değiştiğinde geçerlilik süresi dolmamış önbelleklerde eski değer bulunabilir. Bu nedenle farklı istemcilerin bir süre farklı yanıtlarla çalışması mümkündür.

DNS'nin yanıt vermesi web hizmetinin çalıştığını kanıtlamaz. Ad bilgisi edinilmiştir; ilgili uygulamanın isteği karşılaması farklı bir iştir. Kısa DNS sorgularında UDP kullanılabilir; DNS'nin TCP desteği de vardır. “DNS her zaman yalnız UDP'dir” genellemesi doğru değildir.

## 5. HTTP ve HTTPS

### 5.1 Ad, kaynak yolu ve mesaj

::: {.callout-important appearance="simple"}
## Tanım
**HTTP**, web kaynaklarına ilişkin istek ve yanıtların biçimini ve anlamını düzenleyen uygulama protokolüdür.
:::

`http://ders.test/index.html` örneğinde `ders.test` adla ilgili çözümlemeye, `/index.html` sunucudan istenen kaynağa ilişkindir. DNS yolun içeriğini getirip sayfayı oluşturmaz; HTTP isteği hangi kaynağın istendiğini bildirir.

```http
GET /index.html HTTP/1.1
Host: ders.test

```

**Okuma:** GET işlem isteğini, yol kaynağı, Host hedef hizmetin adını belirtir. Başlık bölümünden sonraki boş satır, başlıkların bittiğini ayırır.

Bir HTTP/1.1 yanıtı durum satırı, başlıklar ve varsa gövde içerir. Boş satır gövdeyi başlıklardan ayırır; gövdenin uzunluğunu belirtmek gibi kurallar mesaj sınırını yorumlamaya yardım eder. TCP segmentinin bittiği yerde HTTP mesajının da bitmesi gerekmez.

### 5.2 Durum kodlarının sınıfları

| Sınıf | Genel anlam | Örnek durum |
|---|---|---|
| 2xx | İstek başarıyla karşılandı | İstenen kaynak başarıyla sunuldu |
| 3xx | Yönlendirme / başka işlem gerektiren yanıtlar | İstemcinin başka adrese yöneltilmesi |
| 4xx | İstek veya istemci tarafıyla ilişkili sorun | İstenen kaynağın bulunmaması, erişim isteğinin reddi |
| 5xx | Sunucu tarafındaki sorun | Sunucunun veya aradaki hizmetin isteği tamamlayamaması |

Kaynağa erişim yetkisi bulunmayan bir istekle, sunucunun başka bir hizmeti beklerken süreyi doldurması farklı sınıflardır. İlki 4xx, ikincisi 5xx ile ifade edilebilir. Kodun ilk basamağı, sorunun hangi genel sınıfa ait olduğunu ayırt etmeyi sağlar.

Bir HTTP hata yanıtı alınması “hiç iletişim kurulamadı” demek değildir. Yanıtı üreten HTTP bileşenine kadar mesajlaşma gerçekleşmiştir; sonuç istenen kaynak veya işlem bakımından başarısız olabilir. Ağ erişimi, hizmet yanıtı ve işin başarılı tamamlanması ayrı değerlendirilir.

### 5.3 Güvenilir teslim ve korunan iletişim

**TLS**, iletişimin gizliliğini ve bütünlüğünü korumaya, sunucu kimliğinin doğrulanmasına hizmet eder. **HTTPS**, HTTP iletişiminin TLS ile korunmasıdır. TCP baytları sıralı taşıyabilir; bu baytların başkası tarafından okunmaması için ayrı koruma gerekir.

Şifresiz uygulama protokollerinde mesajın, hatta parolanın açık taşınması riski bulunabilir. Ağların güven sınırları genişledikçe bu açık aktarımın sakıncası belirginleşir. HTTP/HTTPS ve FTP/FTPS karşılaştırmaları, aynı uygulama ihtiyacına koruma eklenmesini gösterir. Telnet yerine SSH ise farklı bir protokolle korunan uzak erişim sağlar.

Bu örneklerden bütün protokollerin yalnız iki basit “açık/güvenli sürüm” biçimi bulunduğu veya şifresiz iletişimin tamamen ortadan kalktığı sonucu çıkarılamaz. Kullanılan protokol ve yapılandırmanın hangi korumayı sağladığı incelenmelidir.

HTTPS, sunulan bilginin doğru veya sitenin iyi niyetli olduğunu garanti etmez. Korunan iletişim ile içerik doğruluğu farklıdır. Sunucu kimliğinin doğrulanmasının değeri de doğru doğrulama yapılmasına bağlıdır.

## 6. Dosya aktarımı

**FTP**, uzak sunucudaki dosyaları listeleme, indirme ve yükleme işlemlerini düzenler. Komutlar ve yanıtlar **kontrol bağlantısında**, dosya veya dizin listesi **veri bağlantısında** taşınır. Böylece dosyanın içeriği ile aktarımı yöneten konuşma ayrılır.

Etkin ve pasif kullanımda değişen, veri bağlantısını kimin başlattığıdır. Bu ayrım dosyanın indirilmesi veya yüklenmesiyle aynı değildir. Dosya sunucudan istemciye gelirken de bağlantıyı başlatan taraf farklı olabilir.

| Protokol | Temel yapı |
|---|---|
| FTP | Klasik kullanımda şifresiz dosya ve kontrol iletişimi |
| FTPS | FTP yapısına TLS koruması ekler |
| SFTP | SSH üzerinde dosya işlemleri sunan ayrı protokol |

FTPS'de kontrol/veri ayrımı sürer; dosya gizliliği için veri iletişiminin de korunması gerekir. SFTP ise FTP'nin başka adı değildir. İki araç aynı dosyayı taşıyabilse de karşılıklı uyulacak kurallar farklıdır. Benzer adları eşdeğer saymak, istemciyle sunucunun anlaşamamasına yol açabilir.

## 7. E-posta: göndermek, aktarmak, kutuya erişmek

### 7.1 Üç ayrı iş

```text
Gönderen istemci → SMTP → Gönderen posta sunucusu
Gönderen sunucu  → SMTP → Alıcının posta sunucusu / kutusu
Alıcı istemci   ↔ POP3 veya IMAP ↔ Alıcının posta kutusu
```

**Okuma:** Kullanıcının bilgisayarından gönderim, sunucular arasındaki aktarım ve alıcının kutuya erişimi ayrı hizmetlerdir. Alıcı bilgisayarın o anda açık olması, sunucudaki kutuya teslimin ön koşulu değildir.

**SMTP**, iletinin sunucuya sunulması ve sunucular arasında aktarılmasını düzenler. Posta sunucusu bir iletiyi kabul ettiğinde sonraki teslim işinin sorumluluğunu alabilir; bu, insan alıcının iletiyi okuduğunu göstermez. Geçici teslim sorununda sunucular yeniden denemek üzere iletiyi tutabilir.

**POP3** ve **IMAP**, alıcının posta kutusuna erişmesini sağlar. SMTP'nin gönderim işleviyle kutudan mesaj okuma birbirinin yerine geçmez. Mesaj gönderemeyen ama eski mesajları okuyabilen bir istemcide bu hizmetler ayrı değerlendirilebilir.

### 7.2 POP3 ve IMAP farkı

POP3, iletilerin listelenmesi ve indirilmesine dayanır; indirme sonrasında sunucuda tutulması veya silinmesi ayarlara bağlıdır. “POP3 her zaman sunucudaki mesajı siler” denemez.

IMAP, sunucudaki kutuyu, klasörleri ve mesaj durumlarını birlikte yönetmeye elverişlidir. Telefondan okunmuş işaretlenen mesajın bilgisayarda da okunmuş görünmesi bu durumun sunucuda tutulmasıyla sağlanabilir. Çok cihazlı kullanımda bu model önemlidir.

Tarayıcıdan e-posta okumak ise tarayıcıyla web posta hizmeti arasında HTTP/HTTPS iletişimi içerebilir. Ekranda e-posta bulunması bütün bağlantıların SMTP olduğu anlamına gelmez. Benzer eşzamanlı görünümün farklı uygulamalarla sağlanabilmesi de yalnız ekrandan kesin protokol teşhisi yapmayı sınırlar.

## 8. Uzak erişim ve ağ yönetimi

**Telnet** ve **SSH**, uzak sistemle terminal/komut iletişimine hizmet edebilir. Klasik Telnet oturumunda parola ve komutlar şifresiz taşınır. SSH korunan kanal sağlar; sunucu kimliği ile kullanıcının giriş yetkisi farklı doğrulama sorularıdır. “Doğru kullanıcı parolasını girdim” demek, bağlanılan sunucunun doğru olduğu kontrolünün yerine geçmez.

**SNMP**, ağ cihazlarının durum ve ölçüm bilgilerini tanımlı nesneler üzerinden sorgulamaya ve bildirim almaya yarar. Yönetici bir arayüzün sayacını sorabilir; cihazdaki ajan yanıtlayabilir. Bir bağlantı koptuğunda ajan ayrıca olay bildirimi gönderebilir.

| İş | İletişimi başlatan | Amaç |
|---|---|---|
| SNMP sorgusu | Yönetici | Belirli durum bilgisini öğrenmek |
| SNMP olay bildirimi | Cihazdaki ajan | Olayı yöneticinin sorgusunu beklemeden bildirmek |
| SSH oturumu | Bağlanan istemci | Yetkili uzak oturum veya komut yürütmek |

Bir insanın cihazda komut çalıştırmasıyla yönetim yazılımının düzenli durum verisi toplaması farklı işlerdir. SSH ve SNMP aynı “uzaktan yönetim” başlığına girse de birbirinin doğrudan yerine geçmez.

## Dikkat edilmesi gereken noktalar

- TCP bağlantısı tek bir portla değil iki uç birlikte kullanılarak ayırt edilir.
- TCP güvenilirliği şifreleme, UDP kullanımı da zorunlu hız üstünlüğü değildir.
- DHCP yapılandırmayı, DNS ad kayıtlarını sağlar; DNS yanıtı web hizmetinin başarısı değildir.
- HTTP hata yanıtı alınması, hiç iletişim kurulamadığı anlamına gelmez.
- FTPS ile SFTP; SMTP ile POP3/IMAP; SSH oturumu ile SNMP sorgusu farklı işlerdir.
- Bir onayın anlamı protokole bağlıdır: taşıma alımı, uygulama sonucu ve adres kiralama onayı birbirine eşitlenmez.

## Kontrol soruları

### 1. Uygulama uçları ve hizmet seçimi

1. 192.168.10.10:52000 ucundan 192.168.10.20:80 ucuna gönderilen isteğin yanıtında kaynak ve hedef uçlar nedir?
2. İki farklı istemci aynı kaynak portuyla aynı sunucunun 80 portuna bağlanıyor. TCP bağlantıları nasıl ayırt edilir?
3. “Her tarayıcı sekmesinin kalıcı bir port numarası vardır” doğru mudur?
4. Aynı sayısal TCP ve UDP portu tek bir ortak kullanım mıdır?
5. Eksiksiz dosya aktarımı ile canlı görüşmede gecikme beklentisini karşılaştır; taşıma seçimini gerekçelendir.
6. TCP'nin güvenilirliği mesajın şifreli olduğunu gösterir mi?
7. UDP kullanan uygulama yanıt bekleyip yeniden deneyebilir mi? Bu durumda tekrar denemesini kim sağlar?

::: {.callout-note collapse="true" title="Cevaplar — Uygulama uçları ve hizmet seçimi"}
1. Kaynak 192.168.10.20:80, hedef 192.168.10.10:52000 olur.
2. İstemci ve sunucu IP–port çiftleri birlikte kullanılır; istemci IP'leri farklıdır.
3. Hayır. Port programın veya sekmenin değişmez kimliği değildir; program birden çok iletişim kurabilir.
4. Hayır. TCP ve UDP ayrı taşıma protokolleridir; aynı sayı ayrı kullanımlara sahip olabilir.
5. Dosyada eksikliği tamamlamak ve sırayı korumak önemlidir; TCP uygun adaydır. Canlı görüşmede geç kalan içeriğin değeri azalabilir; UDP tabanlı bir tasarım uygun olabilir. Son seçim uygulamanın ek mekanizmalarıyla birlikte yapılır.
6. Hayır. Güvenilir teslim ile gizlilik ayrı özelliklerdir.
7. Evet. UDP iki yönlü mesajlaşmaya engel değildir; zaman aşımı ve tekrar gibi davranışları uygulama veya üzerindeki protokol sağlar.
:::

### 2. DHCP ve DNS

1. DHCP'nin verdiği IP ile DNS sunucusu adresinin görevlerini ayır.
2. DORA akışında teklif, seçim ve kesin kiralama onayı hangi mesajlardır?
3. Offer alınması kiralamanın onaylandığı anlamına gelir mi? Birden fazla teklif varsa ne olur?
4. Adres kiralaması kalıcı mıdır? Yenileme her seferinde dört mesajı baştan gerektirir mi?
5. İstemci .53 adresine DNS soruyor ve .20 yanıtını alıyor. Bu iki adresin görevleri nedir?
6. DNS çözümleyici, geçerli önbellek ve yetkili sunucu arasındaki fark nedir?
7. Her DNS sorgusu için bütün ad sunucusu zinciri baştan dolaşılmalı mıdır?
8. DNS adres yanıtı verdi. Web hizmetinin çalıştığı kesin midir?

::: {.callout-note collapse="true" title="Cevaplar — DHCP ve DNS"}
1. İlki istemcinin arayüzünü adresler; ikincisi ad sorularının gönderileceği hizmeti gösterir.
2. Offer teklif, Request istemcinin seçtiği teklifi istemesi, Acknowledge kiralamanın onayıdır. Discover sunucuyu arar.
3. Hayır. İstemci birini Request ile seçer; onay ayrı aşamadır.
4. Hayır, kullanım sürelidir. Yenileme başlangıcın aynen tekrarı olmak zorunda değildir.
5. .53 çözümleyicinin adresi, .20 adın gösterdiği örnek web sunucusunun adresidir.
6. Çözümleyici yanıtı bulma/iletme işini yapar; önbellek edinilmiş kaydı geçici tutar; yetkili sunucu ilgili alanın kayıtları için yetkilidir.
7. Hayır. Geçerli önbellek veya bilinen yerel kayıt kullanılabilir.
8. Hayır. Ad bilgisinin edinilmesi ile HTTP hizmetinin isteği karşılaması farklıdır.
:::

### 3. Web, dosya ve diğer hizmetler

1. `ders.test/index.html` ifadesinde ad çözümlemesi ile kaynak seçimi hangi parçalardır?
2. HTTP/1.1 mesajında başlıklarla gövdeyi hangi ayırıcı ayırır?
3. Başarı, yönlendirme, erişim isteğinin reddi ve sunucu kaynaklı tamamlayamama durumlarını kod sınıflarıyla eşleştir.
4. HTTP hata yanıtı alınması bütün ağ iletişiminin başarısız olduğunu gösterir mi?
5. HTTPS, TCP'nin hangi ayrı ihtiyacını tamamlar? Sitenin doğru bilgi verdiğini kanıtlar mı?
6. FTP'de kontrol bağlantısı ile veri bağlantısının işlerini ayır.
7. FTPS ile SFTP neden aynı değildir?
8. SMTP ile POP3/IMAP hangi işleri yapar? SMTP kabulü insanın mesajı okuduğunu gösterir mi?
9. Çok cihazda kutu ve okunma durumunu birlikte yönetmek için POP3 ve IMAP'i karşılaştır.
10. Uzak oturumda Telnet yerine SSH seçiminin gerekçesi nedir?
11. SNMP sorgusu ile olay bildirimini başlatan tarafları ayır. Bu işler SSH oturumundan nasıl farklıdır?

::: {.callout-note collapse="true" title="Cevaplar — Web, dosya ve diğer hizmetler"}
1. `ders.test` ad çözümlemesine, `/index.html` sunucuda istenen kaynağa ilişkindir.
2. Başlık bölümünün sonundaki boş satır. Gövde sınırı ayrıca ilgili mesaj kurallarıyla belirlenir.
3. Sırasıyla 2xx, 3xx, 4xx ve 5xx.
4. Hayır. HTTP yanıtı alınmıştır; sorun kaynağın veya işlemin karşılanmasıyla ilgili olabilir.
5. TLS gizlilik, bütünlük ve sunucu kimliği doğrulamasına hizmet eder; TCP bunları tek başına sağlamaz. Koruma, içeriğin doğru olduğu kanıtı değildir.
6. Kontrol komut ve yanıtları, veri bağlantısı dosya/dizin içeriğini taşır.
7. FTPS FTP'ye TLS ekler; SFTP SSH üzerinde ayrı dosya işlemleri protokolüdür.
8. SMTP sunma/aktarma, POP3 ve IMAP kutuya erişim içindir. SMTP kabulü okunma kanıtı değildir.
9. IMAP sunucudaki klasör ve mesaj durumlarını yönetmeye elverişlidir. POP3 indirmeye dayanır; sunucuda tutma/silme ayarlara bağlıdır.
10. SSH oturumun korunmasını ve kimlik doğrulama mekanizmalarını sağlar; klasik Telnet'te parola ve komutlar açık taşınabilir.
11. Sorguyu yönetici, olay bildirimini ajan başlatır. SNMP tanımlı durum bilgileriyle çalışır; SSH yetkili terminal/komut kanalı sağlar.
:::
