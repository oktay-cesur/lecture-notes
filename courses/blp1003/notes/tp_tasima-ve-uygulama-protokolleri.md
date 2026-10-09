---
title: "Taşıma ve Uygulama Protokolleri"
subtitle: "BLP 1003 — Bilgisayar Ağları · 6. Hafta"
type: presentation
lang: tr
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-05
execute:
  echo: false
---

## Paket bilgisayara geldi; hangi uygulama alacak?

```text
Aynı bilgisayarda:
Tarayıcı     Dosya aktarımı     Ses uygulaması
       ↖          ↑          ↗
          Gelen ağ verisi
```

IP adresi ağ düzeyindeki hedefi belirtir. Portlar, taşıma uçlarının ayrılmasına yardım eder.

::: {.notes}
Bilgisayara ulaşmak ile doğru uygulama iletişimine ulaşmak ayrı problemlerdir. Birden fazla süreç, yani çalışan program, aynı anda ağ hizmetini kullanabilir. Taşıma katmanı bu uçlar arasında verinin uygun yere yöneltilmesini sağlar.

Portu uygulamanın değişmez kimlik numarası gibi düşünmemeliyiz. Bir süreç birden fazla soket kullanabilir; bir uygulama birden fazla bağlantı açabilir. İletişimin ayrımı, yalnız bir port numarasına bakılarak bütün koşullarda tamamlanmaz.
:::

---

## Port ve socket ilişkisi

- Port numarası: 16 bitlik alan; 0–65535.
- Socket: uygulamanın taşıma hizmetini kullandığı iletişim arayüzü.
- IPv4 socket adresi örneği: `192.168.10.20:80`.

```text
Uygulama ↔ Socket ↔ Taşıma hizmeti
```

::: {.notes}
Socket, yalnız ekrana yazılan IP:port metni değildir; programın veri gönderme ve alma hizmetine eriştiği arayüzdür. IP adresi ile port birlikte bir uç adresini ifade etmek için kullanılır. Buradaki iki noktalı gösterim IPv4 örneğidir.

TCP ve UDP ayrı taşıma protokolleridir; aynı sayısal port değeri bu iki protokolde ayrı kullanımlara sahip olabilir. Portların belli hizmetler için yaygın varsayılan değerleri bulunması, bütün sunucuların yalnız bu portlarda çalışabileceği anlamına gelmez. İstemciye ayrılan geçici portların aralığı sistemin seçimine bağlıdır.
:::

---

## İstek ve yanıtın portları

TCP üzerinde HTTP/1.1 örneği:

```text
İstek: 192.168.10.10:52000 → 192.168.10.20:80
Yanıt: 192.168.10.20:80    → 192.168.10.10:52000
```

İkinci bağlantı, istemcide başka bir geçici port kullanabilir.

::: {.notes}
52000, öğretim için seçilmiş bir istemci portudur; her tarayıcının bu portu kullandığı söylenmez. Sunucunun bu örnekte TCP 80 üzerinde hizmet verdiği varsayılır. Yanıtta kaynak ve hedef uçları yer değiştirir; sunucu yanıtı istemcinin 80 numaralı portuna göndermez.

Bir TCP bağlantısı yerel ve uzak IP–port çiftleriyle ayrılır. Aynı sunucu portuna farklı istemcilerden veya farklı istemci portlarından birden fazla bağlantı kurulabilir. Aynı istemcinin ikinci bağlantısında 52001 seçilmesi olası bir örnektir; port seçimini tarayıcı sekmeleriyle bire bir eşleyen bir kural değildir.
:::

---

## IP kaybedebiliyorsa dosya nasıl tamamlanır?

```text
Gönderilen:  A | B | C
Alınan:     A |   | C
```

TCP, bayt akışını izleyerek eksik veriyi yeniden gönderir ve veriyi uygulamaya sıralı sunar.

::: {.notes}
A, B ve C burada veri bölgelerini temsil eder; TCP sıra numarasının segment sayacı olduğu anlamına gelmez. IP'nin kayıp veya sıra garantisi vermemesi üzerine TCP, iki uçta durum tutar; hangi baytların gönderildiğini ve onaylandığını izler.

TCP'nin güvenilir hizmeti, her koşulda dosyanın tamamlanacağı garantisi değildir. Bağlantı kalıcı olarak bozulabilir ve uygulama aktarım hatasıyla karşılaşabilir. Başarılı işleyen bağlantıda kayıp giderme ve sıralı bayt teslimi yapılmasıyla, sunucunun veriyi diske kaydetmesi gibi uygulama sonuçları da ayrı işlerdir.
:::

---

## Üç yollu el sıkışma

Veri içermeyen bağlantı başlangıcı:

```text
İstemci                          Sunucu
   ── SYN, Seq=100 ───────────────>
   <─ SYN+ACK, Seq=200, Ack=101 ───
   ── ACK, Seq=101, Ack=201 ──────>
```

İki uç, başlangıç sıra bilgilerini paylaşır.

::: {.notes}
Bu sayılar öğretim için seçilmiş küçük değerlerdir; gerçek sistemlerin başlangıç sıra numaralarını bu küçük değerlerden seçtiğini varsaymıyoruz. SYN, kendi yönündeki sıra alanında bir konum tüketir. İstemci SYN'inden sonra beklenen değer 101, sunucu SYN'inden sonra 201 olur.

Son ACK istemciden sunucuya gider; sunucunun başlangıcını onaylar. Bu örnekte veri içermeyen saf ACK ayrıca bir bayt konumu tüketmez. El sıkışma bağlantı durumunu ve başlangıç sıra bilgisini kurar; sonraki bütün verinin kayıpsız gideceğini veya şifrelendiğini kanıtlamaz. [TCP bağlantı başlangıcı: RFC 9293](https://www.rfc-editor.org/rfc/rfc9293.html).
:::

---

## Sıra numarası segmentleri mi sayar?

Başka bir kurulmuş bağlantıda:

```text
Seq=1000, veri uzunluğu=100 bayt
Taşınan baytlar: 1000–1099
Beklenen sonraki bayt: 1100
Alıcının onayı: Ack=1100
```

ACK, bir sonraki beklenen baytı belirtir.

::: {.notes}
Bu yeni örnek el sıkışmadaki 100 başlangıç değerini sürdürmez; bayt hesabını görünür kılmak için bağımsız bir kurulmuş bağlantı kullanır. TCP segmentinin sıra numarası, taşıdığı ilk veri baytının akıştaki konumuyla ilişkilidir. Yüz bayt, 1000'den 1099'a kadar (uçlar dahil) olan aralığı doldurur.

Ack=1100, “1100 numaralı segment geldi” demek değildir. Bu basit kümülatif onay örneğinde 1100 öncesindeki baytların sırayla alındığını ve sırada 1100'ün beklendiğini ifade eder. Bayt hesabı, segmentlerin boyları değişse de akışın izlenebilmesini sağlar.
:::

---

## Arada boşluk kaldığında

```text
1000–1099: alındı     → Ack=1100
1100–1199: kayboldu
1200–1299: alındı     → Ack=1100
1100–1199: yeniden geldi → Ack=1300
```

Son satırda, sonraki veri alıcıda tutulmuş kabul edilmiştir.

::: {.notes}
1200–1299 bölgesi gelince 1100–1199 boşluğu ortadan kalkmış olmaz. Kümülatif ACK, kesintisiz alınan sınırı bildirir; bu nedenle örnekte 1100'de kalır. Alıcının sonraki bölgeyi tamponladığını varsaydığımızda, eksik yüz bayt tamamlanınca kesintisiz alınan sınır 1300'e ilerler.

Gönderici, zaman aşımı veya uygun onay örüntüleri gibi mekanizmalarla yeniden gönderime karar verebilir. Her ACK için ayrı bir yeniden gönderim yapılmaz. TCP uygulamaya sıralı bayt akışı sunar; ağda görülen geliş sırasını doğrudan uygulama sırası olarak kullanmaz. Ayrıntılı yeniden gönderim algoritmasını bu örneğin içine eklemiyoruz.
:::

---

## Akış ve yoğunluk denetimi

| Soru | TCP'nin ilgilendiği sınır |
|---|---|
| Alıcı veriyi yeterince hızlı tüketebiliyor mu? | Akış denetimi |
| Ağ yolunda aşırı yük oluşuyor mu? | Yoğunluk denetimi |

TCP, çift yönlü bir bayt akışı sağlar; kendi başına şifreleme sağlamaz.

::: {.notes}
Alıcının tampon kapasitesiyle ağ yolunun kapasitesi aynı şey değildir. Akış denetimi alıcının kabul edebileceği veriyi, yoğunluk denetimi ise ağdaki yükün yönetilmesini ilgilendirir. İki mekanizma da gönderimi etkileyebilir; tek bir “hızlı alıcı” ölçüsüyle açıklanmaz.

TCP veri akışında uygulama mesajlarının sınırlarını kendiliğinden korumaz. Uygulama, mesaj uzunluğu veya ayırıcı gibi kurallarla mesajlarını tanımlar. Şifreleme ve karşı tarafın kimliğini doğrulama için ayrıca TLS gibi mekanizmalar gerekir.
:::

---

## UDP hangi işi yapar?

```text
UDP datagramı
┌──────────┬──────────┬──────────┬──────────┐
│Kaynak port│Hedef port│ Uzunluk │ Checksum │
└──────────┴──────────┴──────────┴──────────┘
                         + Uygulama verisi
```

Başlık: 8 bayt. Uzunluk: başlık + veri.

::: {.notes}
Başlıktaki dört alanın her biri iki bayttır; toplam UDP başlığı sekiz bayttır. Yirmi bayt uygulama verisi taşıyan örnekte uzunluk alanı 28 baytı gösterir. Buradaki tablo alanların mantıksal gösterimidir; bir ekran görüntüsü veya yakalanmış paket değildir.

Kaynak ve hedef portlar, taşıma uçlarını ayırmaya yardım eder. Checksum bozulmayı saptamak için kullanılır; alıcının veriyi aldığını onaylayan bir ACK veya saldırgana karşı kriptografik koruma değildir. UDP datagram sınırları taşıma hizmetinde korunur; bu, TCP'nin bayt akışından farklıdır. [UDP başlığı: RFC 768](https://www.rfc-editor.org/rfc/rfc768.html).
:::

---

## UDP'nin sağlamadığı hizmetler

UDP kendi içinde:

- Bağlantı kurma el sıkışması yapmaz.
- Kayıp için yeniden gönderim yapmaz.
- Sıralı teslim garantisi vermez.
- TCP'nin akış ve yoğunluk denetimini sağlamaz.

Uygulama gereken ek mekanizmaları kurabilir.

::: {.notes}
Bir uygulama UDP üzerinde istek gönderebilir, yanıt alabilir ve zaman aşımı sonrası yeniden deneyebilir. Dolayısıyla UDP tek yönlü değildir. Uygulamanın yeniden denemesi, UDP'nin kendi başlığında güvenilirlik mekanizması bulunduğu anlamına gelmez.

Daha az taşıma mekanizması, her koşulda daha hızlı bir uygulama sonucu demek değildir. Kayıp, gecikme, uygulamanın yeniden deneme davranışı ve ağ koşulları sonucu etkiler. UDP kullanılması, uygulamanın ağ yoğunluğunu önemsememesi gerektiği anlamına da gelmez.
:::

---

## Protokolü gereksinimden seçelim

| Gereksinim | Düşünülmesi gereken mekanizma |
|---|---|
| Dosyanın bütün baytları gerekli | Kayıp giderme, sıralı teslim |
| Geç kalan ses parçası işe yaramıyor | Gecikme ve kayıp arasında tercih |
| Kısa sorgu; yanıt yoksa tekrar denenebilir | Uygulama düzeyinde zaman aşımı |

“TCP güvenli, UDP hızlı” tek başına seçim ölçütü değildir.

::: {.notes}
Dosya aktarımında eksik baytın tamamlanması önemlidir. Canlı ses akışında çok geç gelen bir parça, oynatılmış zaman dilimini geri getiremez; uygulama gecikmeyi sınırlamak için başka tercihler yapabilir. Bunlar bütün dosya uygulamalarının aynı protokolü, bütün ses uygulamalarının diğerini kullandığı evrensel kurallar değildir.

Gerçek uygulamalar taşıma hizmetine kendi mekanizmalarını ekleyebilir. Örneğin güncel web sürümlerinden HTTP/3, UDP üzerinde çalışan QUIC kullanır ve güvenilir aktarım mekanizmaları vardır. Bu hafta onun ayrıntısını öğretmiyoruz; örnek, UDP üzerinde de güvenilir bir uygulama iletişiminin kurulabileceğini gösterir.
:::

---

## Bir ad yazdım; hedef IP nereden geldi?

Laboratuvarda tanımlanmış örnek kayıt:

```text
ders.test → 192.168.10.20

İstemci ── ad sorgusu ──> DNS çözümleyici
İstemci <── adres yanıtı ─ DNS çözümleyici
```

DNS yanıtı web sayfasının kendisi değildir.

::: {.notes}
ders.test, bu dersin yerel laboratuvarında tanımlanacağı varsayılan örnek addır; genel İnternet'te çalışan bir site iddiası değildir. İstemci hedefin adını biliyorsa, bağlantı için gereken adres bilgisini DNS üzerinden elde edebilir. Bu örnekte yanıt tek bir IPv4 adresidir; gerçek adlar birden fazla veya başka tür kayıtlarla ilişkilendirilebilir.

DNS çözümleyici, sorguyu karşılayan hizmettir. İstemcinin DNS sunucusuna erişmek için o sunucunun adresini zaten bilmesi gerekir. İsim çözümleme tamamlandıktan sonra web iletişimi başka bir hedef ve protokol üzerinden başlar.

Çözümleyicinin önbelleğinde geçerli kayıt yoksa dağıtık yapıdaki ad sunucularına (kök, üst düzey alan, yetkili sunucu) başvurabilir. Bu sunucular genellikle çözümleyiciyi sonraki yetkili kaynağa yönlendirir ve istemci bu zinciri çoğunlukla kendisi yürütmez. Önbellekteki kayıtlar DNS bilgisindeki yaşam süresi boyunca kullanılır; adresin sonsuza kadar değişmez olduğu varsayılmaz. Yerel ders.test örneğinde laboratuvar sunucusu kaydı doğrudan biliyorsa dış sunuculara gidilmez. Bu derste sorgu zincirinin ayrıntısı değil, adın adrese çevrildiği temel akış esastır.
:::

---

## DNS portu ile web portunu ayıralım

| İletişim | Örnekteki hizmet |
|---|---|
| Ad sorgusu | DNS, port 53 |
| Sayfa isteği | HTTP/1.1, TCP port 80 |
| Korunan web iletişimi | HTTPS, yaygın port 443 |

DNS için hem UDP hem TCP kullanımı vardır.

::: {.notes}
Kısa bir DNS sorgusunu UDP üzerinden görmek yaygındır; buradan DNS'nin yalnız UDP kullandığı sonucu çıkmaz. Genel amaçlı DNS gerçekleştirimlerinde TCP desteği de gereklidir. [DNS taşıma gereksinimleri: RFC 7766, bölüm 5](https://www.rfc-editor.org/rfc/rfc7766.html).

DNS'nin yanıt vermesi, HTTP hizmetinin hazır olduğunu göstermez. Adres çözümleme ile hedefteki uygulama hizmeti ayrı ayrı sınanır. Aynı biçimde, adla erişim başarısızken hazır verilen IP adresiyle bir hizmete ulaşılabiliyorsa, isim çözümleme aşaması ayrıca araştırılabilir; bu gözlem tek başına bütün sorunun kesin teşhisi değildir.
:::

---

## Yeni bilgisayar adresini nasıl alır?

DHCP, istemciye ağ yapılandırması sağlayabilir:

- IPv4 adresi ve alt ağ maskesi.
- Varsayılan ağ geçidi bilgisi.
- DNS sunucusu bilgisi.
- Kiralama süresi.

Adresi almak ile bir site adını çözmek farklı işlerdir.

::: {.notes}
Bu alanlar aynı şeyin dört farklı adı değildir. IP adresi istemcinin adreslemesini, DNS sunucusu ad sorgularının gönderileceği hizmeti belirtir. Maske ve ağ geçidi de yapılandırmanın parçalarıdır; burada bunların değerlerinden ağ hesabı yapılmaz.

DHCP sunucusu web sayfasını veya her alan adının IP adresini dağıtmaz. İstemcinin aldığı DNS sunucusu adresi, daha sonra sorgu göndereceği hizmetin bilgisidir. Yapılandırma çoğunlukla süreli bir kiralamadır; istemci uygun koşullarda bunu yeniler.
:::

---

## Henüz IP adresim yok; nasıl soracağım?

Başlangıçtaki IPv4 istemcisi için örnek DHCPDISCOVER:

```text
Kaynak IPv4: 0.0.0.0       Hedef IPv4: 255.255.255.255
Kaynak UDP portu: 68       Hedef UDP portu: 67
Ethernet hedefi: FF:FF:FF:FF:FF:FF
```

İstemci, aynı yerel ağdaki sunucuları arar.

::: {.notes}
Bu alanlar henüz bir IPv4 adresi edinmemiş istemcinin başlangıç örneğine aittir. Sıfır adresi “istemcinin normal ve kalıcı adresi budur” anlamına gelmez. Broadcast kullanımı, istemcinin sunucuyu önceden tek bir hedef adresle bilmeden mesajını duyurmasını sağlar.

Ethernet broadcast adresi ile IPv4 broadcast adresi farklı başlıklara yazılır. UDP'nin istemci ve sunucu portları da karşı tarafın hizmetini ayırır. Bu dersin topolojisinde DHCP sunucusu aynı yerel ağdadır; farklı ağlar arasındaki DHCP relay mekanizması bu akışa eklenmez.
:::

---

## Teklif, seçim ve kabul

```text
İstemci                     DHCP sunucusu
   ── DISCOVER: hizmet arıyorum ──>
   <─ OFFER: yapılandırma teklifi ──
   ── REQUEST: teklifi istiyorum ──>
   <─ ACK: kiralama onayı ──────────
```

Dört mesajın yaygın kısa adı: DORA.

::: {.notes}
Sunucu teklifi, adresin istemciye kesin olarak verilmesiyle aynı adım değildir. Birden fazla sunucu teklif gönderebilir; istemci seçim isteğini bildirir ve sunucunun onayıyla yapılandırmayı kullanır. Bu çizim normal başarılı başlangıç akışını gösterir; hata, ret ve yeniden deneme durumlarının hepsini kapsamaz.

Okların sunucu ve istemci arasında çizilmesi, bütün mesajların mutlaka unicast taşındığını söylemez. Başlangıç durumu ve istemci yetenekleri, yanıtın nasıl iletildiğini etkiler. Kiralama yenilemesi her zaman bu dört mesajı baştan tekrarlamaz. [DHCP adres edinimi: RFC 2131, bölüm 3.1](https://www.rfc-editor.org/rfc/rfc2131.html).

DHCP onayı, sonraki iletişimlerin başarısını garanti etmez. İstemcinin adres alması, ders.test kaydının çözülmesi ve hedef uygulamanın yanıt vermesi ayrı gözlemlerdir; her aşamanın sonucu ayrıca doğrulanır. Bu aşamada yapılandırma değerleri gözlenir; henüz öğretilmeyen maske hesabı veya yönlendirme kararı beklenmez.
:::

---

## Adres bulundu; şimdi ne istenecek?

```text
http://ders.test/index.html
       └─ hedef adı ─┘└─ kaynak yolu ─┘

İstemci ── HTTP isteği ──> Web sunucusu
İstemci <── HTTP yanıtı ── Web sunucusu
```

Örneğimiz HTTP/1.1'i TCP üzerinde kullanır.

::: {.notes}
URL'deki ad, DNS çözümlemesi için kullanılır; yol ise web sunucusunda istenen kaynağı belirtir. Aynı sunucuya ulaşabilmek, her kaynak yolunun var olduğu anlamına gelmez. HTTP bu isteğin ve yanıtın nasıl ifade edildiğini tanımlar.

Tarayıcı bir sayfayı göstermek için resim veya stil dosyaları gibi başka kaynakları da isteyebilir. Burada ilk HTML kaynağının alışverişine odaklanıyoruz. Tek isteği, bütün sayfanın mutlaka tek paketle taşındığı veya tek ağ alışverişinde tamamlandığı şeklinde yorumlamıyoruz.
:::

---

## Bir HTTP/1.1 isteğini okuyalım

```http
GET /index.html HTTP/1.1
Host: ders.test

```

- `GET`: istenen işlem.
- `/index.html`: kaynak yolu.
- `Host`: hedef hizmetin adı.

::: {.notes}
İstek satırı ve başlık, en yalın GET örneğini gösterir; laboratuvar adı olarak ders.test kullanılır. Başlıkların ardından gelen boş satır başlık bölümünün sonunu belirtir. Ekranda az satır olması, mesajın anlamsız veya kuralsız olduğu anlamına gelmez.

GET, kaynak temsilinin alınmasını ister. POST, hedef kaynağa işlenmek üzere veri sunabilir. PUT, hedef kaynağın temsilini oluşturma veya değiştirme; DELETE ise hedef kaynak ilişkisinin kaldırılması isteği için kullanılır. HTTP yalnız bu dört yöntemden oluşmaz ve sunucu her yönteme izin vermek zorunda değildir. Bu hafta yöntemleri tam bir API tasarımı dersine dönüştürmüyoruz.
:::

---

## Yanıt bize ne söyler?

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 13

<h1>Ders</h1>
```

Örnek gövde, ASCII ile 13 bayttır.

::: {.notes}
Durum satırı isteğin sonucunu, başlıklar yanıtın özelliklerini, boş satırdan sonraki bölüm ise gövdeyi gösterir. Burada gövde tam olarak <h1>Ders</h1> metnidir; sonuna satır sonu eklenmediği kabul edilir. İçerik uzunluğu bu gövdenin bayt sayısıdır.

200 başarı durumunu, 404 istenen kaynağın bulunamadığını, 500 sunucu tarafında bir hata durumunu belirtir. 404 yanıtı almak, sunucuyla iletişimin hiç kurulamadığı anlamına gelmez: bir HTTP yanıtı alınmıştır, fakat istenen kaynak sağlanmamıştır. Taşıma başarısı ile uygulama sonucu böyle ayrılır.

HTTP isteklerinin arasında uygulama durumunun otomatik tutulması şart değildir; buna HTTP'nin durumsuzluğu denir. Bu, web uygulamasının kullanıcı bilgisi tutamayacağı anlamına gelmez: uygulama bir oturum tanımlayıcısını isteklerle ilişkilendirip durumu kendi tarafında saklayabilir. Cookie bu ilişkiyi kurmada kullanılan mekanizmalardan biridir. TCP bağlantısının bulunması da kullanıcının oturum açmış olması demek değildir; bağlantının yeniden kurulması oturumun kaybolacağı, her yeni HTTP isteğinin yeni bir TCP bağlantısı gerektireceği sonucunu doğurmaz.
:::

---

## HTTPS hangi korumayı ekler?

Bu haftanın TCP üzerindeki örneğinde:

```text
HTTP verisi → TLS koruması → TCP → IP
```

TLS; gizlilik, bütünlük ve sunucu kimliğinin doğrulanması için mekanizmalar sağlar.

::: {.notes}
TCP'nin sıralı ve güvenilir bayt hizmeti şifreleme değildir. TLS, iletişimin okunmasına ve değiştirilmesine karşı koruma kurar; uygun sertifika doğrulamasıyla sunucunun hedef kimliğiyle ilişkisi de sınanır. Korumanın işlemesi, doğrulamanın doğru yapılmasına bağlıdır. Sertifika uyarısını yok saymak bu mekanizmanın amacını bozar.

HTTPS adı HTTP iletişiminin TLS ile korunmasını anlatır; web içeriğindeki her iddianın doğru olduğunu garanti etmez. SSL, TLS'nin eski adıdır; güncel protokol TLS'dir. [TLS 1.3'ün amaçları: RFC 8446](https://www.rfc-editor.org/rfc/rfc8446.html).

Bu çizim TCP üzerindeki HTTPS örneğine aittir. HTTP/3, QUIC kullanır; bütün HTTPS iletişimini aynı TCP yığınına zorunlu olarak yerleştiremeyiz. [HTTP/3: RFC 9114](https://www.rfc-editor.org/rfc/rfc9114.html).
:::

---

## Aynı yerel ağda bir sayfanın açılması

Başlangıç: yapılandırma yok; ilgili önbellekler boş. Sunucular aynı Ethernet ağında ve hazır.

```text
DHCP → yapılandırma
ARP  → DNS sunucusunun yerel MAC'i
DNS  → ders.test için web sunucusunun IP'si
ARP  → web sunucusunun yerel MAC'i
TCP  → web sunucusuyla bağlantı
HTTP → /index.html isteği ve yanıtı
```

Bu akış HTTP/1.1 örneğidir.

::: {.notes}
Laboratuvarda DHCP sunucusu 192.168.10.2, DNS sunucusu 192.168.10.53, web sunucusu 192.168.10.20 olarak hazırdır. DHCP'nin istemciye 192.168.10.10 ve DNS hizmetinin adresini verdiği kabul edilir. Aynı yerel ağ koşulu önceden sağlanmıştır; ağ geçidi veya alt ağ hesabı gerektiren bir hedef seçilmez.

DHCP başlangıcı broadcast ile yapılabildiği için sunucunun MAC adresinin önce ARP ile bulunması şart değildir. Daha sonra DNS sunucusuna yerel unicast gönderirken, geçerli eşleşme yoksa ARP gerekir. DNS yanıtı web sunucusunun IP'sini sağlar; web sunucusu ayrı bir cihaz olduğundan onun MAC eşleşmesi de gerekebilir.

Önbellekler doluysa bazı adımlar atlanır. HTTPS'nin TCP üzerindeki örneğinde HTTP'den önce TLS kuruluşu da gerekir. Böylece bu sıra her sayfa açılışının zorunlu ve değişmez paket listesi değil, belirtilen başlangıç koşullarındaki temel akıştır.
:::

---

## Hangi bilgi hangi sorunu çözüyor?

| Protokol | Örnekte tamamladığı iş |
|---|---|
| DHCP | İstemci yapılandırması |
| DNS | Ad → adres bilgisi |
| ARP | Yerel IPv4 → MAC eşleşmesi |
| IP | Ağ düzeyindeki adresleme ve paket iletimi |
| TCP | Uygulama uçları arasında sıralı bayt akışı |
| HTTP | Web isteğinin ve yanıtının anlamı |
| TLS | İletişim koruması ve kimlik doğrulama mekanizmaları |

::: {.notes}
Tablo, aynı sonucu üretmek için kullanılan farklı bilgileri yan yana getirir. DNS'nin bulduğu adresi ARP tablosu sanmak, DHCP'nin verdiği DNS sunucusunu web sunucusu sanmak veya TCP ACK'ini HTTP başarı yanıtı sanmak bu ayrımları bozar.

Örneğin TCP onayı bayt akışındaki alımı ilgilendirir; HTTP 200 uygulama protokolünün yanıtıdır. İkisi farklı katmanlarda farklı anlam taşır. HTTPS'de TLS'nin koruduğu baytlar içinde HTTP mesajları bulunur; TCP'nin kendisi bu mesajların web anlamını değerlendirmez.
:::

---

## Gözlemden açıklamaya

- Ping çalışıyor, HTTP 404 geliyor: ne başarıldı, ne sağlanamadı?
- DNS yanıt verdi: web sunucusu kesin çalışıyor mu?
- TCP ACK=1100: 1100 segment mi alındı?
- DHCP ACK ile TCP ACK aynı onay mı?
- UDP uygulaması istek ve yanıt gönderebilir mi?

::: {.notes}
İlk durumda echo alışverişi ve bir HTTP yanıtı alınması gözlenmiştir; istenen kaynak bulunamamıştır. İkinci durumda yalnız ad çözümleme sonucu elde edilmiştir. Üçüncü durumda 1100 sonraki beklenen baytı belirtir; segment sayısı değildir.

DHCP ACK yapılandırma kiralamasının kabulüyle ilgili mesajdır; TCP ACK ise bağlantının bayt akışı ve sıra bilgisiyle ilgilidir. Aynı onay sözcüğünün kullanılması onları aynı protokol yapmaz. Son soruda UDP üzerinde karşılıklı datagramların gönderilebileceği, fakat UDP'nin kendi güvenilirlik mekanizmasını sağlamadığı açıklanmalıdır.

Hazır laboratuvar topolojisinde bu akış Simulation görünümünde incelenebilir. Araç bazı modern web/TLS sürümlerini modellemeyebilir; simülasyondaki basitleştirilmiş HTTP gözlemi tüm güncel web protokollerinin doğrulaması sayılmaz.
:::

---

## Kaynaklar

- Dersin öğretmen slaytları: taşıma ve uygulama katmanı bölümleri.
- Forouzan, *Data Communications and Networking*, 5. baskı, bölümler 23–24.
- Kurose ve Ross, *Computer Networking: A Top-Down Approach*, 8. baskı, bölümler 2–4.
- RFC 768 (UDP), RFC 9293 (TCP), RFC 2131 (DHCP), RFC 7766 (DNS taşıma), RFC 8446 (TLS 1.3), RFC 9114 (HTTP/3).

::: {.notes}
Port ve socket anlatımı Forouzan bölüm 23, PDF 3–6; TCP ve UDP açıklaması bölüm 24, PDF 4–5, 9–13, 17–18; bayt/onay örneği Kurose bölüm 3, PDF 51–54 ile desteklenmiştir. DNS için Kurose bölüm 2, PDF 43, 46–47, 49–51; DHCP için bölüm 4, PDF 39–42 kullanılmıştır. PDF sayfa numaraları dosyanın başından itibaren sayılır.
:::
