---
title: "TCP/IP Kümesi ve Temel Protokoller"
subtitle: "BLP 1003 — Bilgisayar Ağları · 5. Hafta"
type: presentation
lang: tr
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-05
execute:
  echo: false
---

## Aynı iletişimi başka bir modelle anlatabilir miyiz?

Bir web isteği için şu işler birlikte yürütülür:

```text
İsteği oluştur → Uygulamaya taşı → IP ile adresle → Yerel bağlantıda ilet
```

OSI bu işleri yedi katmanda ele alır. TCP/IP gösterimi bazı görevleri birlikte gruplar.

::: {.notes}
Önceki haftada ayrı sorumlulukları tanımlamak için OSI modelini kullandık. Bu hafta gerçek iletişimde sık karşılaştığımız protokolleri bu sorumluluklara yerleştiriyoruz. Aynı iletişimin farklı sayıda katmanla gösterilebilmesi, işlerin bir modelde yapılıp diğerinde yapılmadığı anlamına gelmez.

Bir tarayıcı isteği oluştururken HTTP kurallarını, veriyi taşırken uygun taşıma protokolünü, ağ adreslemesinde IP'yi ve yerel bağlantıda Ethernet'i kullanabilir. Protokoller farklı işleri birlikte tamamlar; tek başına IP, web sayfasının anlamını belirlemez.
:::

---

## Model ile protokol kümesi

| Kavram | Ne anlatır? |
|---|---|
| Model | İletişim görevlerini ve aralarındaki ilişkileri |
| Protokol | Belirli bir iletişimin kurallarını |
| Protokol kümesi | Birlikte çalışan protokoller ailesini |

TCP/IP adı hem protokol ailesi hem de bu aileyi açıklayan katmanlı model için kullanılır.

::: {.notes}
TCP ve IP, bu ailenin yalnız iki üyesidir. UDP, ICMP, DNS ve HTTP gibi başka protokoller de birlikte kullanılır. “TCP/IP kullanıyoruz” demek bütün uygulamaların mutlaka TCP kullandığını söylemek değildir.

Model bir açıklama çerçevesidir; protokol ise mesaj biçimleri ve davranış kurallarıyla gerçekleştirilen iletişimi tanımlar. TCP/IP'nin gerçek ağlarda kullanılması, model olarak karşılaştırılamayacağı veya protokollerinin standartlarının bulunmadığı anlamına gelmez.
:::

---

## Dört ve beş katmanlı gösterim

| OSI görevleri | TCP/IP: dört katman | Beş katmanlı öğretim gösterimi |
|---|---|---|
| Uygulama, sunum, oturum | Uygulama | Uygulama |
| Taşıma | Taşıma | Taşıma |
| Ağ | İnternet | Ağ |
| Veri bağlantısı | Ağ erişimi | Veri bağlantısı |
| Fiziksel | Ağ erişimi | Fiziksel |

Fark, alt görevlerin birlikte veya ayrı gösterilmesidir.

::: {.notes}
Dört katmanlı gösterim, yerel bağlantı ve fiziksel iletim görevlerini ağ erişimi başlığında toplar. Beş katmanlı öğretim gösterimi bu iki sorumluluğu ayırır. Beş katman, dört katmanın yeni sürümü değildir.

Bu tablo görevlerin yaklaşık karşılığını gösterir; bütün protokoller için bire bir eşleme veya ayrı bir yazılım modülü zorunluluğu kurmaz. Örneğin uygulamanın veri temsilini ve oturum durumunu nasıl yönettiği, seçilen uygulama protokolüne ve gerçekleştirimine bağlıdır.
:::

---

## Paketin içinde hangi protokoller var?

```text
Ethernet frame'i
└── IP paketi
    └── TCP segmenti
        └── HTTP verisi
```

Örnek: HTTP/1.1 isteğinin TCP üzerinden, Ethernet bağlantısında taşınması.

::: {.notes}
Buradaki iç içe yapı tek bir iletişim örneğidir. Ethernet bağlantısında bir IP paketi, onun içinde TCP segmenti ve segmentin yükünde HTTP verisinin bir bölümü taşınabilir. Bir HTTP mesajının tamamı mutlaka tek TCP segmentine sığmaz.

Her başlık kendi görevi için bilgi taşır: Ethernet yerel frame alıcısını, IP ağ adreslerini, TCP taşıma uçlarını ve akış bilgisini belirtir. HTTP ise isteğin ne anlama geldiğini tanımlar. ARP bu çizimde TCP veya IP'nin içine yerleştirilmez; yerel Ethernet üzerinde ayrı mesajlarla adres çözümlemeye yardım eder.
:::

---

## IP adresi hangi soruyu cevaplar?

```text
Kaynak IP: 192.168.10.10
Hedef IP:  192.168.10.20
```

IP, paketin ağ düzeyindeki kaynak ve hedef adreslerini taşır.

Hangi uygulamanın veriyi alacağı ayrıca belirlenmelidir.

::: {.notes}
IP adresi, ağ arayüzüyle ilişkili mantıksal adreslemenin parçasıdır. Bu örnekte adresler önceden verilmiştir. Sayıların ikilik dönüşümünü veya ağ sınırının hesabını yapmıyoruz.

Aynı bilgisayarda birden fazla ağ uygulaması çalışabilir. Hedef IP, tek başına tarayıcı, dosya aktarımı veya başka bir uygulama arasında seçim yapmaz. Taşıma katmanındaki portlar bu ayrımı tamamlar. IP adresinin verilmesiyle adresin hangi yöntemle yapılandırıldığı da ayrı konulardır.
:::

---

## Bağlantısız iletim

IP, veri göndermeden önce iki uç arasında kendi bağlantı kurma el sıkışmasını yapmaz.

```text
IP paketi 1 →
IP paketi 2 →
IP paketi 3 →
```

Her paket, IP iletiminin ayrı bir birimidir.

::: {.notes}
Bağlantısız sözcüğü, bilgisayarın kablosunun bulunmadığını veya fiziksel bağlantının gereksiz olduğunu söylemez. IP'nin paketleri taşımadan önce TCP'dekine benzer uçtan uca bağlantı durumu kurmamasını anlatır.

Üst katmandaki TCP bir bağlantı kurabilir; bu bağlantının mesajları yine IP paketlerinde taşınır. Dolayısıyla aynı iletişimde IP'nin bağlantısız olmasıyla TCP'nin bağlantı yönelimli olması çelişmez.
:::

---

## En iyi çaba hangi garantileri vermez?

IP tek başına şunları garanti etmez:

- Her paketin hedefe ulaşmasını.
- Paketlerin gönderildikleri sırada gelmesini.
- Bir paketin yalnız bir kez gelmesini.
- Belirli bir sürede teslimi.

Uygulamanın ihtiyacı, üst katmanlarda tamamlanır.

::: {.notes}
En iyi çaba, ağın bilerek kötü iletim yaptığı anlamına gelmez. Ağ, mevcut koşullarda paketleri iletmeye çalışır; fakat IP hizmeti başarılı teslim, sıra ve gecikme için bir sözleşme sunmaz. Yoğunlukta tampon dolması veya bağlantı arızası gibi koşullar kayba neden olabilir.

Eksiksiz dosya aktarımı isteyen bir uygulama kaybı giderecek mekanizmalara ihtiyaç duyar. TCP bu mekanizmaların bir bölümünü sağlar. Canlı ses gibi başka uygulamalar gecikmiş verinin yeniden gönderilmesini her durumda yararlı bulmayabilir. Bu seçim IP adresiyle değil, uygulamanın gereksinimiyle ilgilidir.
:::

---

## IP adresini biliyorum; frame kime gidecek?

A, B'ye bir IP paketi gönderecek. Üç bilgisayar aynı Ethernet yerel ağındadır.

| Bilgisayar | IPv4 adresi | MAC adresi |
|---|---|---|
| A | 192.168.10.10 | 02:00:00:00:00:0A |
| B | 192.168.10.20 | 02:00:00:00:00:0B |
| C | 192.168.10.30 | 02:00:00:00:00:0C |

A, hedef IP'yi biliyor; hedef MAC'i henüz bilmiyor.

::: {.notes}
Adresleri bizim bilmemiz, A bilgisayarının B'nin MAC adresini önceden bildiği anlamına gelmez. A'nın ARP önbelleğinin boş olduğunu varsayıyoruz. Göndereceği IP paketinin hedef adresi B'dir; Ethernet frame'ini oluşturmak için yerel alıcının MAC adresi de gerekir.

Bu örnekte B'nin aynı yerel ağda olduğu başlangıç koşuludur. A'nın bunun hesabını nasıl yaptığı veya uzaktaki bir hedef için hangi sonraki adıma gönderdiği burada çözülmez. Önceden belirlenen yerel örnek, IP–MAC ilişkisini ayrı bir problem olarak görmemizi sağlar.
:::

---

## Önce bilinen eşleşme aranır

```text
Hedef IPv4: 192.168.10.20
           ↓
A'nın ARP tablosunda eşleşme var mı?
    Var → MAC adresini kullan
    Yok → ARP isteği gönder
```

Önbellek, her gönderimde aynı sorunun yeniden sorulmasını azaltır.

::: {.notes}
ARP tablosu yerel ağda öğrenilen IPv4–MAC eşleşmelerini tutar. Geçerli bir eşleşme varsa A, bu bilgiyi frame oluştururken kullanabilir; her IP paketinden önce broadcast yapmak gerekmez.

Dinamik kayıtlar süresiz ve değişmez değildir. İşletim sistemi bunları yaşlandırabilir veya yeniden doğrulayabilir; sabit tek bir zaman aşımı değeri bütün cihazlar için geçerli değildir. Elle girilmiş kayıtların da bulunabilmesi, “tablodaki her kayıt biraz önce broadcast ile öğrenildi” çıkarımını engeller.
:::

---

## ARP isteği: soruyu herkes duyar

```text
Ethernet kaynak MAC: A'nın MAC adresi
Ethernet hedef MAC:  FF:FF:FF:FF:FF:FF
ARP sorusu:         192.168.10.20 kimde?
```

A, kendi IPv4 ve MAC bilgisini de istekte bildirir.

::: {.notes}
Ethernet hedefi broadcast adresidir; ARP mesajında aranan hedef IPv4 ise B'nin adresidir. Bu iki alanın farklı olması beklenir: soru, MAC adresi bilinmediği için bütün yerel alıcılara duyurulur; aranan kişi IPv4 adresiyle belirtilir.

Switch frame'in kaynak MAC'inden A'nın bağlı olduğu portu öğrenir. Broadcast frame'ini aynı yerel broadcast alanındaki ilgili diğer portlara iletir. B ve C isteği alır, fakat sorulan IPv4 adresi yalnız B'ye aittir. ARP isteği bir IP paketinin içinde taşınmaz; bu örnekte doğrudan Ethernet içinde taşınır.
:::

---

## ARP yanıtı: eşleşme öğrenilir

```text
B → A: 192.168.10.20 adresi 02:00:00:00:00:0B'ye ait.

A'nın ARP tablosu:
192.168.10.20 → 02:00:00:00:00:0B

A → B: hedef MAC'i tamamlanmış Ethernet frame'i
```

Bu olağan isteğin yanıtı A'ya unicast gönderilir.

::: {.notes}
B, istekte A'nın kaynak IPv4 ve MAC bilgilerini gördüğü için yanıtını A'ya yöneltebilir. Switch, bu yanıtın kaynak MAC'inden B'nin portunu öğrenir. A'nın portu istekte öğrenilmiş olduğundan, bu koşullarda yanıtı A'nın portuna iletir.

A, yanıtla eşleşmeyi öğrenir ve bekleyen IP paketini Ethernet frame'ine yerleştirebilir. ARP hedef IP adresini değiştirmez; frame için gereken yerel adres bilgisini tamamlar. Bu istek–yanıt işlemi yerel broadcast alanına aittir; broadcast isteği yönlendiriciler üzerinden bütün İnternet'e yayılmaz. [ARP tanımı: RFC 826](https://www.rfc-editor.org/rfc/rfc826.html).
:::

---

## ARP tablosu ile switch tablosu aynı mı?

| Tablo | Nerede? | Eşleştirdiği bilgi | Ne için? |
|---|---|---|---|
| ARP tablosu | Uç bilgisayarda | IPv4 → MAC | Yerel frame alıcısını adreslemek |
| MAC tablosu | Switch'te | MAC → port | Frame'i uygun porta iletmek |

A, hedef MAC'i seçer. Switch, frame'in hedef MAC'ine göre iletir.

::: {.notes}
A'nın B'nin IPv4 adresini bilmesi, switch'in B'nin portunu bilmesiyle aynı bilgi değildir. A'nın adres çözümlemesi ve switch'in port öğrenmesi ayrı işlemlerdir. Aynı ARP alışverişi sırasında her ikisi de gerçekleşebilir; bu durum tabloları tek bir tablo yapmaz.

Switch, sıradan Ethernet iletiminde B'nin IP adresini çözümleyip A adına hedef MAC seçmez. Kaynak MAC'ten port öğrenir; hedef MAC'i biliniyorsa ilgili porta iletir. Hedef MAC bilinmiyorsa unicast frame'ini ilgili diğer portlara yayabilir. Broadcast'i yayması ile bilinmeyen unicast'i yayması farklı nedenlere dayanır.
:::

---

## Paketin başına ne geldiğini nasıl öğreniriz?

ICMP, IP iletişimiyle ilgili kontrol ve hata bildirimlerini taşır.

- Echo Request / Echo Reply: erişim yoklaması.
- Destination Unreachable: bazı teslim sorunları.
- Time Exceeded: yaşam sınırının aşılması.

ICMP mesajı IP içinde taşınır; TCP/UDP portu kullanmaz.

::: {.notes}
IP'nin en iyi çaba hizmeti, ağda hiçbir geri bildirim bulunmadığı anlamına gelmez. ICMP, belirli koşullarda sorun veya durum bildirebilir. Ancak her kayıp için mutlaka bir ICMP mesajı üretileceği ve bu mesajın kaynağa ulaşacağı garanti edilmez.

ICMP uygulama dosyasını taşımak için kullandığımız genel bir taşıma hizmeti değildir. Yine de “ICMP veri taşımaz” demek yanlıştır: echo mesajlarının veri alanı vardır ve yanıt bu veriyi geri taşıyabilir. Burada TCP veya UDP segmenti kullanılmadığı için hedef uygulama portu üzerinden ayrım yapılmaz. [ICMP mesajları: RFC 792](https://www.rfc-editor.org/rfc/rfc792.html).
:::

---

## Ping neyi ölçer?

```text
A ── Echo Request ──> B
A <── Echo Reply ──── B

Örnek üç ölçüm: 5 ms, 5 ms, 6 ms
```

Süre, isteğin gidip yanıtın geri gelmesidir.

::: {.notes}
Bu sayılar örnek ölçümlerdir, yapılmış bir laboratuvar çalışmasının çıktısı değildir. Gidiş–dönüş süresi yalnız kablodaki yayılma süresini ölçmez; uçların işlemesi, bekleme ve yolun koşulları da sonucu etkiler. İki yönün sürelerinin eşit olduğu bilinmeden değeri ikiye bölüp tek yön gecikmesi diyemeyiz.

Yanıt, bu yoklama sırasında gidiş ve dönüş iletişiminin çalıştığını gösterir. B'de web sunucusunun çalıştığını, doğru sayfanın bulunduğunu veya HTTPS işleminin başarılı olacağını kanıtlamaz. ICMP ile web hizmeti farklı görevler yürütür.
:::

---

## Yanıt yoksa bilgisayar kapalı mı?

Yanıt alınamamasının olası nedenleri:

- Hedefin veya bir bağlantının çalışmaması.
- İsteğin ya da yanıtın kaybolması.
- ICMP'nin filtrelenmesi veya yanıtlanmaması.
- Adresleme ya da erişim koşullarında sorun.

Tek gözlem, tek nedeni kesinleştirmez.

::: {.notes}
Bir zaman aşımı, belirlenen bekleme süresinde echo yanıtı alınamadığını bildirir. Bu sonuçtan tek başına hedefin kapalı olduğunu çıkaramayız. Gidiş yolu, hedefin yanıt davranışı ve dönüş yolu birlikte değerlendirilmelidir.

Aynı yerel ağdaki ilk yoklamada adres çözümlemesi henüz tamamlanmamışsa, aracın ve sistemin davranışına bağlı olarak gecikme veya bir yanıtsız yoklama görülebilir. “İlk ping her zaman başarısız olur” kuralı yoktur. ARP tablosuna bakmak, gözlemin yerel adres çözümlemesiyle ilişkisini araştırmaya yardım eder.
:::

---

## Traceroute yolu nasıl görünür kılar?

```text
Yoklama: TTL 1 → R1'den süre aşımı bildirimi
Yoklama: TTL 2 → R2'den süre aşımı bildirimi
Yoklama: TTL 3 → hedefe ulaşan yoklama
```

Araç, sınırı kademeli artırarak yanıt veren adımları gösterir.

::: {.notes}
IPv4 TTL alanı uygulamada yönlendirici geçişlerini sınırlar; yönlendirici bu değeri azaltır. Sınır tükendiğinde paket iletilmez ve uygun koşullarda ICMP Time Exceeded mesajı döner. TTL 1 ile ilk, TTL 2 ile sonraki yanıt veren adım görünür hale getirilebilir.

Çizimdeki R1 ve R2 öğretim etiketleridir; hazırlanmış bir yolun davranışını açıklıyoruz. Komutun adı ortama göre değişir: Windows ve Packet Tracer PC komut satırında `tracert`, Cisco IOS CLI'da `traceroute` kullanılır. Traceroute gerçekleştirimleri UDP, ICMP veya TCP yoklamaları kullanabilir. Hedefe ulaşıldığını bildiren son yanıt, seçilen yoklama biçimine bağlıdır. Bir yıldız, ilgili yoklamaya süresinde yanıt alınmadığını gösterir; tek başına o yönlendiricinin veri iletmediğini kanıtlamaz.
:::

---

## Aynı yerel ağda gözlemleri birleştirelim

Hazır yapılandırılmış A ve B üzerinde:

```text
ping 192.168.10.20
arp -a
```

1. Yanıtı ve gidiş–dönüş süresini gözle.
2. B'nin IPv4–MAC eşleşmesini ara.
3. Switch tablosuyla aynı bilgi olup olmadığını açıkla.

::: {.notes}
Komutlar Windows ve yaygın Packet Tracer PC arayüzü için tanıdık örneklerdir; çıktının alanları kullanılan sisteme göre değişebilir. Linux'ta komşuluk tablosu için ip neigh gibi araçlar da kullanılabilir.

Öğrenciye önce “B'nin MAC'ini kim öğreniyor?” sorusu sorulur. Ardından switch üzerinde görülen MAC–port eşleşmesiyle uçtaki IPv4–MAC eşleşmesi karşılaştırılır. Hazır adresleme kullanılır; IP hesabı veya varsayılan ağ geçidi seçimi bu gözlemin koşulu haline getirilmez.
:::

---

## Bir paketin yolculuğunu açıklayabiliyor muyuz?

- IP'nin bağlantısız olması kablonun gereksiz olduğunu mu söyler?
- ARP isteğinin Ethernet hedefi neden broadcast'tir?
- Switch, ARP yanıtından hangi bilgiyi öğrenir?
- ARP tablosu doluyken yeniden istek gerekir mi?
- Ping yanıtı, web sayfasının açılacağını kanıtlar mı?

::: {.notes}
İlk soruda IP'nin bağlantı kurma davranışı ile fiziksel bağlantı ayrılmalıdır. İkinci soruda aranan IPv4 adresinin bilindiği, yerel MAC adresinin bilinmediği söylenmelidir. Üçüncü soruda switch'in kaynak MAC–giriş portu eşleşmesini öğrendiği belirtilmelidir.

Dördüncü sorunun cevabı geçerli eşleşme bulunduğunda onun kullanılabileceğidir; önbellekte herhangi bir kayıt bulunması yeterli değildir. Son soruda ping'in echo alışverişini sınadığı, uygulama hizmetini doğrulamadığı açıklanmalıdır. Bu ayrımlar, sonraki haftada portlar ve uygulama protokollerinin neden gerekli olduğunu kurar.
:::

---

## Kaynaklar

- Dersin öğretmen slaytları: **04 — TCP/IP**; OSI ile ilişki için **03 — OSI**.
- Tanenbaum ve Wetherall, *Computer Networks*, 5. baskı, bölüm 5.
- Forouzan, *Data Communications and Networking*, 5. baskı, bölümler 23–24.
- Kurose ve Ross, *Computer Networking: A Top-Down Approach*, 8. baskı, bölümler 2–4 ve 6.

::: {.notes}
Bu haftanın ARP örneği Tanenbaum bölüm 5, PDF 113–115 ve Kurose bölüm 6, PDF 32–34 ile; ICMP açıklaması Tanenbaum bölüm 5, PDF 112–113 ve RFC 792 ile desteklenmiştir.
:::
