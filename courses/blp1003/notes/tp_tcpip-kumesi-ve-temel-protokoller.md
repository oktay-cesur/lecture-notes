---
title: "TCP/IP Protokol Kümesi ve Temel Ağ Protokolleri"
subtitle: "BLP 1003 — Bilgisayar Ağları · 5. Hafta"
type: presentation
lang: tr
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-05
execute:
  echo: false
---

## Geçen hafta: iletişimi sorumluluklara ayırdık

```text
Üst katman  → alt katmanın sunduğu hizmeti kullanır
Her katman  → kendi sorumluluğu için gereken bilgiyi ekler
Karşı uçta  → aynı katman, aynı kurallarla yorumlar
```

Bu hafta aynı fikri, gerçek ağlarda kullanılan protokol kümesiyle sürdürüyoruz.

::: {.notes}
Katmanlama, büyük bir iletişim problemini birbirinden ayrı değiştirilebilen sorumluluklara böler. Önceki haftanın video aktarımı örneğinde sıra, eksiklik, bozulma, alıcı kapasitesi ve yerel teslim ayrı sorulara dönüşmüştü. Bir katmanın yöntemi değiştiğinde, sunduğu hizmet korunduğu sürece üst katmanın değişmesi gerekmez.

Bu hafta yeni bir katmanlama fikri kurmuyoruz. Aynı ilkeyi, İnternet'te fiilen kullanılan protokol ailesine uyguluyoruz.
:::

---

## OSI'nin rolü: sorumlulukları adlandırmak

- OSI bir **referans modelidir**: iletişimde yapılması gereken işleri yedi katmanda ayırır.
- Model görevleri adlandırır; iletişimi kullanılan **protokoller** yürütür.

**Soru:** Gerçek ağlarda kullanılan protokoller bu sorumlulukları nasıl gruplar?

::: {.notes}
OSI'nin değeri ortak bir dil sağlamasıdır: "bu bir yerel teslim sorunu" ya da "bu taşıma katmanının işi" diyebilmemizi sağlar. Ancak yedi katman, her iletişimde yedi ayrı başlık bulunacağı veya her katmanın ayrı bir yazılım parçası olduğu anlamına gelmez.

Önceki haftanın sonunda Ethernet–IP–TCP–HTTP örneğinde ayrı bir sunum ya da oturum başlığı bulunmadığını görmüştük. Bu gözlem, TCP/IP'nin aynı sorumlulukları nasıl grupladığı sorusuna götürür.
:::

---

## Yedi katmandan dörde: OSI → TCP/IP

![](../../../images/bilgisayar-aglari/hafta-05/01-osi-tcpip-gecis.svg){height="620" fig-align="center" fig-alt="Solda OSI'nin yedi katmanı, sağda TCP/IP'nin dört katmanı; OSI'deki Uygulama, Sunum ve Oturum katmanları TCP/IP'de tek Uygulama katmanında toplanır"}

::: {.notes}
Görselde solda OSI'nin yedi katmanı, sağda TCP/IP'nin dört katmanı yer alıyor. Şimdilik yalnız üst kısımdaki birleşmeye bakıyoruz: OSI uygulama tarafındaki sorumlulukları uygulama, sunum ve oturum olarak üç ayrı katmanda tanımlar; TCP/IP bu ayrımı zorunlu tutmaz ve üçünü tek bir Uygulama (Application) katmanında toplar.

Alt katmanların eşleşmesini, TCP/IP'nin hangi protokollerden oluştuğunu gördükten sonra tamamlayacağız. Daha az katmanla gösterilmek daha az iş yapmak anlamına gelmez; aynı işler farklı biçimde gruplanır.
:::

---

## TCP/IP: tek protokol değil, protokol ailesi

![](../../../images/bilgisayar-aglari/hafta-05/02-tcpip-protokol-kumesi.svg){height="620" fig-align="center" fig-alt="TCP/IP'nin dört katmanında birlikte çalışan protokoller: Uygulama katmanında HTTP, DNS ve SMTP; Taşıma katmanında TCP ve UDP; İnternet katmanında IP; Ağ erişimi katmanında Ethernet ve Wi-Fi"}

::: {.notes}
TCP/IP adı yalnız TCP ve IP'nin kullanıldığını düşündürebilir. Oysa web sayfası istemek için HTTP, alan adlarını adreslere çevirmek için DNS, e-posta göndermek için SMTP kullanılır; taşıma katmanında TCP'nin yanında UDP de vardır. Bu protokoller birbirinin yerine geçmez, farklı işleri birlikte tamamlar: bir web isteğinde HTTP, TCP ve IP aynı anda görev alır.

Ağ erişimi katmanında Ethernet ve Wi-Fi gibi bağlantı teknolojileri kullanılır. Bunlar IEEE standartlarıyla tanımlanır; TCP/IP, IP paketlerinin hangi bağlantı teknolojisi üzerinden taşınacağını tek bir seçeneğe bağlamaz. IP'nin çok farklı ağlar üzerinde çalışabilmesi bu esneklikten gelir.
:::

---

## Uygulama katmanı: üç sorumluluk, tek katman

| OSI'de ayrı katman | Sorduğu soru | TCP/IP'de kim ele alır? |
|---|---|---|
| Uygulama | Hangi mesajlarla konuşuyoruz? | Uygulama protokolü (HTTP, DNS, SMTP) |
| Sunum | Veri hangi biçimde temsil ediliyor? | Uygulama protokolü veya uygulama yazılımı |
| Oturum | Süren etkileşim nasıl düzenleniyor? | Uygulama protokolü veya uygulama yazılımı |

Bu görevlerin nasıl gerçekleştirileceği büyük ölçüde uygulama geliştirme tarafına bırakılır.

::: {.notes}
TCP/IP sunum ve oturum görevlerini ortadan kaldırmaz; yalnız bunları ayrı ve zorunlu katmanlar olarak tanımlamaz. Örneğin bir web yanıtındaki metnin karakter kodlaması (UTF-8 gibi) HTTP mesajında belirtilir ve tarayıcı tarafından yorumlanır. Kullanıcının oturum açık kalması ise çoğu zaman web uygulamasının çerez (cookie) gibi kendi mekanizmalarıyla sağlanır.

Yanlış anlaşılmaya açık nokta: "Uygulama katmanında ağla ilgili hiçbir şey yoktur" demek doğru değildir. HTTP, DNS ve SMTP, ağ üzerinden konuşan iki tarafın mesaj biçimlerini ve alışveriş kurallarını tanımlayan uygulama katmanı protokolleridir. Uygulama katmanında bulunan, ağ iletişiminin uygulamanın amacına göre düzenlenen kısmıdır.
:::

---

## Neden "TCP/IP" adı?

```text
"Aygaz"   →  gündelik dilde tüp gaz
"Sana"    →  gündelik dilde margarin
"TCP/IP"  →  bütün protokol ailesi
```

Ad, ailenin iki merkezi protokolünden gelir; kapsamı bu ikisinden çok daha geniştir.

::: {.notes}
Benzetmenin tek işlevi adlandırmayı açıklamaktır. Bir marka adı gündelik dilde bütün ürün türü için kullanılabildiği gibi, TCP ve IP'nin adları da bütün protokol ailesinin adı olarak kullanılır. TCP/IP adı hem bu protokol ailesi hem de aileyi açıklayan dört katmanlı model için kullanılır.

Benzetme TCP/IP'nin nasıl geliştiğini anlatmaz. Tarihsel konumu kısaca şöyledir: TCP/IP, Web'den önce vardı. ARPANET 1983'te TCP/IP'ye geçti; World Wide Web 1989'da önerildi ve 1990'larda mevcut TCP/IP tabanlı İnternet altyapısı üzerinde yaygınlaştı. Web, İnternet'in kendisi değil, İnternet üzerinde HTTP ile çalışan bir uygulamadır.
:::

---

## Eşleşmeyi tamamlayalım

![](../../../images/bilgisayar-aglari/hafta-05/03-osi-tcpip-eslesme.svg){height="620" fig-align="center" fig-alt="OSI Uygulama, Sunum ve Oturum katmanları TCP/IP Uygulama katmanına; Taşıma Taşıma katmanına; Ağ İnternet katmanına; Veri bağlantısı ve Fiziksel katmanlar Ağ erişimi katmanına karşılık gelir"}

::: {.notes}
Taşıma katmanı iki modelde de aynı adı ve aynı sorumluluğu taşır. OSI'nin ağ katmanı TCP/IP'de İnternet (Internet) katmanı olarak adlandırılır; bu katmanın merkezinde IP bulunur. OSI'nin veri bağlantısı ve fiziksel katmanları TCP/IP'de Ağ erişimi (Network Access) başlığında toplanır: Ethernet çerçevesinin oluşturulması da bitlerin ortamda aktarılması da bu başlığın altındadır.

Bazı ders kitapları, Kurose–Ross gibi, son katmanı ikiye ayıran beş katmanlı bir öğretim gösterimi kullanır. Bu yeni bir model değil, aynı görevlerin daha ayrıntılı gösterimidir. Eşleşme görevlerin yaklaşık karşılığıdır; bir protokolün bütün işlevleri her zaman tek bir kutuya bire bir yerleşmez.
:::

---

## Aynı veri, dört katman

| TCP/IP katmanı | Birimin adı | Eklenen bilgi neyi sağlar? |
|---|---|---|
| Uygulama | Uygulama verisi | Mesajın anlamı (ör. HTTP isteği) |
| Taşıma | Segment | Hangi uygulama iletişimine ait olduğu |
| İnternet | Paket | Kaynak ve hedef IP adresi |
| Ağ erişimi | Çerçeve (frame) → bit | Yerel teslim (MAC) ve fiziksel aktarım |

```text
Ethernet çerçevesi [ IP paketi [ TCP segmenti [ HTTP verisi ] ] ]
```

::: {.notes}
Önceki haftanın PDU hattını TCP/IP katmanları üzerinde izliyoruz: uygulama verisi → segment → paket → çerçeve → bit. Amaç adları ezberlemek değil, aynı verinin her katmanda o katmanın sorumluluğu için gereken bilgiyle birlikte taşındığını görmektir.

Her katman üstten gelen birimin tamamını yük olarak alır ve kendi başlığını ekler. Taşıma katmanında TCP yerine UDP kullanıldığında birim datagram olarak adlandırılır. Ağ erişimi katmanında çerçeve oluşturulur ve çerçevenin bitleri fiziksel ortamda sinyallerle aktarılır. Şimdi bu zincirin ortasındaki İnternet katmanının hangi problemi çözdüğüne bakıyoruz.
:::

---

## Paket hedefini nereden bilecek?

```text
                ┌── PC-B
PC-A ── paket ──┼── PC-C
                └── PC-D  ...
```

**Soru:** Başka bir cihaza gönderilecek paket hangi hedefe gideceğini nasıl bilir?

::: {.notes}
Ağda çok sayıda cihaz vardır ve paket bunlardan yalnız birine gidecektir. Bunun için iki şey gerekir: bütün cihazların aynı biçimde yorumladığı ortak bir adresleme düzeni ve paketin bu düzene göre hedef adresini kendi üzerinde taşıması. Böylece yol üzerindeki cihazlar ve alıcı, paketin kime gittiğini paketin kendisinden okuyabilir.

Bu problem, İnternet katmanının sorumluluğudur. Bu katmanın protokolü IP'dir.
:::

---

## IP: paketin üzerindeki kaynak ve hedef

```text
IP paketi
├── Kaynak IP: 192.168.1.10
├── Hedef IP:  192.168.1.20
└── Yük:       üst katmandan gelen birim
```

- **Mantıksal adresleme:** IP adresi donanıma yazılı değildir; cihaza ağın düzenine göre atanır.
- **İletim:** Paket, hedef IP adresine göre ağlar üzerinden ilerletilir.

::: {.notes}
IP adresine mantıksal adres denmesinin nedeni, ağ kartına üretimde yazılmaması ve cihaz bir ağa bağlandığında o ağın düzenine uygun biçimde atanmasıdır. IP başlığı paketin kaynak ve hedef adresini taşır; paketi ileten cihazlar hedef adrese bakarak iletim kararı verir. Bu kararların nasıl verildiği yönlendirme haftasının konusudur.

Adresin yapısı, ikilik gösterimi ve ağ bölümünün hesabı 8. haftada ele alınacak. Bu haftaki örneklerde adresler hazır verilmiştir.
:::

---

## IP teslimi garanti etmez

IP paketi hedefe ulaştırmaya çalışır; ancak tek başına şunları garanti etmez:

- Paketin hedefe ulaşmasını.
- Paketlerin gönderildikleri sırayla gelmesini.
- Belirli bir süre içinde teslimi.

Bu yaklaşıma **en iyi çaba** (best effort) iletim denir.

::: {.notes}
En iyi çaba, ağın bilerek kötü iletim yaptığı anlamına gelmez. Ağ mevcut koşullarda paketi iletmeye çalışır; fakat başarılı teslim, sıra ve süre için bir sözleşme sunmaz. Yoğunlukta tamponların dolması veya bir bağlantının kopması paket kaybına yol açabilir.

IP ayrıca bağlantısız çalışır: paket göndermeden önce iki uç arasında kendi bağlantısını kurmaz; her paket ayrı bir iletim birimidir. Eksiksiz teslim isteyen uygulamalar için bu eksiklik üst katmanlarda tamamlanır; bunun nasıl yapıldığı 6. haftanın konusudur.
:::

---

## IP adresini biliyorum; çerçeveyi kime göndereceğim?

PC-A, PC-B'ye bir IP paketi gönderecek. İkisi de aynı switch'e bağlı, aynı Ethernet yerel ağında.

```text
Ethernet çerçevesi
┌──────────────┬───────────────────┬────────────────────────────────┬─────┐
│ Hedef MAC: ? │ Kaynak MAC: PC-A  │ IP paketi                      │ FCS │
│              │                   │ 192.168.1.10 → 192.168.1.20    │     │
└──────────────┴───────────────────┴────────────────────────────────┴─────┘
```

PC-A hedef IP adresini biliyor; çerçevenin hedef MAC alanını dolduramıyor.

::: {.notes}
IP paketi hazırdır, fakat paket ortama doğrudan çıkmaz: Ağ erişimi katmanında Ethernet çerçevesine yerleştirilmesi gerekir. Çerçevenin hedef alanında IP adresi değil MAC adresi bulunur. 3. haftada gördüğümüz gibi switch, çerçeveyi hedef MAC adresine göre iletir; IP adresine bakmaz.

PC-A'nın ARP tablosunun boş olduğunu, yani PC-B'nin MAC adresini henüz bilmediğini varsayıyoruz. Adresleri bizim tabloda görmemiz, PC-A'nın da bildiği anlamına gelmez. İki cihazın aynı yerel ağda olduğu bu örneğin başlangıç koşuludur; bunun nasıl belirlendiği 8. ve 10. haftaların konusudur.
:::

---

## Aynı gönderimde iki adres, iki görev

| | IP adresi | MAC adresi |
|---|---|---|
| Nerede taşınır? | IP paketinde | Ethernet çerçevesinde |
| Neyi belirtir? | Paketin mantıksal hedefini | Çerçevenin yerel bağlantıdaki alıcısını |
| Bu örnekte | 192.168.1.20 | PC-B'nin MAC adresi: **bilinmiyor** |

IP nereye gidileceğini, MAC bu bağlantıda kime teslim edileceğini belirtir.

::: {.notes}
İki adres birbirinin yerine geçmez; iç içe birimlerde farklı sorulara cevap verir. IP adresi paketin içinde, MAC adresi paketi taşıyan çerçevenin başlığında bulunur. Çerçeveyi oluşturmak için ikisine birlikte ihtiyaç vardır.

Bu örnekte ikisi de PC-B'yi gösterir. Bu durum her gönderimde böyle olmak zorunda değildir; farklı ağdaki bir hedefe gönderimi yönlendirme haftasında ele alacağız. Şimdilik problemimiz şudur: PC-A, bildiği IP adresinden PC-B'nin MAC adresine nasıl ulaşacak?
:::

---

## "192.168.1.20'nin MAC adresi nedir?"

> 192.168.1.20'nin IP adresini biliyorum. MAC adresi nedir?

Bu soruyu yerel ağda sorup cevabını almayı sağlayan protokol:
**ARP** (Address Resolution Protocol, adres çözümleme protokolü).

ARP veriyi taşımaz; verinin Ethernet üzerinde taşınabilmesi için gereken **IP → MAC** eşlemesini sağlar.

::: {.notes}
ARP'nin işi, bilinen bir IPv4 adresine karşılık gelen MAC adresini yerel ağda bulmaktır. PC-A'nın göndermek istediği IP paketi ARP mesajının içine konmaz: önce ARP ile eşleme öğrenilir, ardından paket çerçeveye yerleştirilir. Öğrenilen eşleme bir süre ARP tablosunda tutulur; böylece her pakette aynı soru yeniden sorulmaz.

ARP, IP ile Ethernet arasında köprü görevi gördüğü için kaynaklarda katman yerleşimi farklı gösterilebilir; bizim için belirleyici olan görevidir. ARP'nin görev alanı yerel ağdır: ARP istekleri yönlendiriciden geçip başka ağlara yayılmaz. [ARP tanımı: RFC 826](https://www.rfc-editor.org/rfc/rfc826.html).
:::

---

## ARP Request: soru herkese sorulur

```text
                        ┌──> PC-B  192.168.1.20   ✓ "Bu adres benim."
PC-A ── ARP Request ──> Switch
192.168.1.10            └──> PC-C  192.168.1.30   ✗ yanıt vermez

Ethernet hedef MAC:  FF:FF:FF:FF:FF:FF   (broadcast: yerel ağdaki herkes)
ARP sorusu:          192.168.1.20 kimde? Cevabı 192.168.1.10'a bildir.
```

::: {.notes}
Hedef MAC bilinmediği için soru tek bir alıcıya yöneltilemez; Ethernet broadcast (yayın) adresi FF:FF:FF:FF:FF:FF ile yerel ağdaki bütün cihazlara gönderilir. Switch, broadcast çerçevesini geldiği port dışındaki portlara iletir. PC-B ve PC-C isteği alır; ancak sorulan IP adresi yalnız PC-B'ye aittir.

PC-A istekte kendi IP ve MAC adresini de bildirir; doğru cihaz yanıtı kime göndereceğini buradan öğrenir. Ethernet hedefinin broadcast olması ile aranan IP adresinin tek bir cihaza ait olması çelişmez: soru herkese duyurulur, aranan cihaz IP adresiyle belirtilir. ARP isteği bir IP paketinin içinde değil, doğrudan Ethernet çerçevesinin içinde taşınır.
:::

---

## ARP Reply: cevap yalnız soran cihaza

```text
PC-B ── ARP Reply (unicast) ──> PC-A
        "192.168.1.20 → 02:00:00:00:00:0B"

PC-A artık çerçeveyi tamamlayabilir:
[ Hedef MAC: 02:00:00:00:00:0B | Kaynak MAC: 02:00:00:00:00:0A | IP paketi | FCS ]
```

Hedef MAC bilinmiyor → ARP Request → ARP Reply → MAC öğrenildi → çerçeve oluşturuldu

::: {.notes}
PC-B, istekte PC-A'nın MAC adresini gördüğü için yanıtı yalnız PC-A'ya gönderebilir; tipik durumda yanıt unicast'tir. PC-A eşlemeyi ARP tablosuna yazar ve bekleyen IP paketini Ethernet çerçevesine yerleştirir.

ARP hedef IP adresini değiştirmez; yalnız çerçevenin eksik hedef MAC alanını tamamlar. Öğrenilen eşlemeler Windows ve Packet Tracer PC komut satırında `arp -a` ile görülebilir. Kayıtların ne kadar süre tutulduğu gibi tablo yönetimi ayrıntıları işletim sistemine bağlıdır ve bu dersin kapsamında değildir.
:::

---

## Paket gönderildi; hedefe ulaştı mı?

**Soru:** Paket hedefe doğru gönderildi. Peki hedefe ulaşılabiliyor mu? İletişim sırasında bir sorun olursa bunu nasıl anlayacağız?

- IP teslimi garanti etmez.
- IP paketi, ulaştığına ya da ulaşamadığına dair kendiliğinden bir bilgi geri getirmez.

Ağ hakkında geri bildirim taşıyan ayrı bir mekanizma gerekir.

::: {.notes}
Adres problemini çözdük: PC-A artık çerçeveyi oluşturup gönderebilir. Ancak en iyi çaba iletimi nedeniyle paket kaybolabilir ve gönderici bunu IP'nin kendisinden öğrenemez.

Hem kullanıcıların hem de ağ yöneticilerinin bir hedefin erişilebilir olup olmadığını sınayabilmesi ve bazı sorunlardan haberdar olabilmesi gerekir. Bu ihtiyaç IP ile birlikte çalışan bir kontrol ve hata bildirim mekanizmasıyla karşılanır.
:::

---

## ICMP: IP'nin yanında kontrol ve hata bildirimi

- **ICMP** (Internet Control Message Protocol), IP ile birlikte çalışan kontrol ve hata bildirim protokolüdür.
- İletişimle ilgili bazı durumları bildirir; örneğin bir hedefe ulaşılamadığını.
- ICMP mesajı IP paketinin içinde taşınır.

```text
Ethernet çerçevesi [ IP paketi [ ICMP mesajı ] ]
```

::: {.notes}
ICMP iletişim hakkında bilgi taşır; kullanıcının dosyasını veya web sayfasını taşımak için kullanılan bir protokol değildir. Bir yönlendirici ya da hedef cihaz, paketi iletemediği bazı durumlarda kaynağa ICMP mesajı gönderebilir.

ICMP de garanti vermez: her sorun için mesaj üretilmeyebilir, üretilen mesaj kaybolabilir veya güvenlik nedeniyle engellenebilir. ICMP mesajı TCP veya UDP kullanmaz, doğrudan IP paketinin içinde taşınır. ARP ile farkı da buradadır: ARP mesajı doğrudan Ethernet çerçevesinde, ICMP mesajı IP paketinin içinde taşınır. ICMP'nin çok sayıda mesaj türü vardır; bu hafta yalnız en görünür kullanımına, ping'e odaklanıyoruz. [ICMP mesajları: RFC 792](https://www.rfc-editor.org/rfc/rfc792.html).
:::

---

## Ping: Echo Request ve Echo Reply

```text
PC-A ── ICMP Echo Request ──> PC-B
PC-A <── ICMP Echo Reply ──── PC-B
```

```text
C:\> ping 192.168.1.20
```

Her Echo Request için bir Echo Reply beklenir; araç yanıtın gelip gelmediğini ve gidiş–dönüş süresini gösterir.

::: {.notes}
Ping, belirli bir hedefin ICMP üzerinden yanıt verip veremediğini gözlemlemeye yarayan bir araçtır. Hedefe ICMP Echo Request gönderir ve ICMP Echo Reply bekler. Yanıt geldiğinde gösterilen süre, isteğin gidip yanıtın dönmesine kadar geçen toplam süredir; yalnız kablodaki yayılma süresi değil, cihazların işlemesi ve beklemeler de bu süreye katılır.

Komut Windows ve Packet Tracer PC komut satırında bu biçimde kullanılır; çıktının görünümü sisteme göre değişebilir.
:::

---

## Ping neyi gösterir, neyi göstermez?

| Gözlem | Söylenebilecek | Söylenemeyecek |
|---|---|---|
| Yanıt geldi | Hedef bu anda ICMP'ye yanıt veriyor; gidiş ve dönüş yolu çalışıyor | Web sunucusunun veya başka bir uygulamanın çalıştığı |
| Yanıt gelmedi | Bu yoklamaya süresinde yanıt alınmadı | Hedefin kesinlikle kapalı olduğu |

"Ping başarılıysa ağdaki her şey doğrudur" sonucu çıkarılamaz.

::: {.notes}
Başarılı bir ping, Echo Request ile Echo Reply alışverişinin çalıştığını gösterir. Hedefte bir web sunucusunun çalıştığını, istenen sayfanın bulunduğunu veya uygulamanın doğru yanıt vereceğini kanıtlamaz; ICMP ile uygulama protokolleri farklı görevler yürütür.

Yanıt alınamaması da tek bir nedene işaret etmez: hedef veya bir bağlantı çalışmıyor olabilir, istek ya da yanıt kaybolmuş olabilir, ICMP bir güvenlik duvarında engellenmiş olabilir ya da adresleme hatalı olabilir. Tek bir gözlem tek bir nedeni kesinleştirmez; ping bir teşhis başlangıcıdır.
:::

---

## Bütünleşik senaryo: PC – Switch – PC

```text
   PC-A                       Switch                       PC-B
   IP:  192.168.1.10   ───────[    ]───────   IP:  192.168.1.20
   MAC: 02:00:00:00:00:0A                     MAC: 02:00:00:00:00:0B
```

- Başlangıç: PC-A'nın ARP tablosu boş.
- PC-A'da çalıştırılan komut: `ping 192.168.1.20`

::: {.notes}
Bu bölümde yeni bir kavram eklemiyoruz; haftanın parçalarını tek bir akışta birleştiriyoruz. IP, MAC, ARP ve ICMP'nin aynı gönderimde nasıl birlikte çalıştığını izleyeceğiz. Aynı senaryoyu uygulamada Packet Tracer'da kuracağız.
:::

---

## Adım adım: önce adres, sonra mesaj

```text
1. Hedef IP biliniyor:              192.168.1.20
2. Hedef MAC bilinmiyor:            ARP tablosu boş
3. PC-A → herkes : ARP Request      (broadcast)
4. PC-B → PC-A   : ARP Reply        (unicast)   → PC-A, PC-B'nin MAC'ini öğrenir
5. PC-A ICMP Echo Request hazırlar
6. ICMP mesajı IP paketine konur:   192.168.1.10 → 192.168.1.20
7. IP paketi Ethernet çerçevesine konur:  …:0A → …:0B
8. Çerçeve switch üzerinden PC-B'ye iletilir
9. PC-B, Echo Reply ile yanıt verir
```

::: {.notes}
Adım 3–4 adres problemini, adım 5–7 kapsüllemeyi, adım 8–9 iletimi ve yanıtı gösterir. Gerçek bir sistemde ICMP mesajı ve IP paketi önce hazırlanıp ARP tamamlanana kadar bekletilebilir. Buradaki sıralama, hedef MAC adresi bilinmeden çerçevenin gönderilemeyeceğini vurgulamak için seçilmiştir.

Adım 9'da PC-B yeniden ARP sorusu sormaz: PC-A'nın MAC adresini ARP isteğinden zaten öğrenmiştir. Echo Reply'da IP ve MAC adreslerinin yönü tersine döner.
:::

---

## Echo Request çerçevesinin içi: hangi bilgi nereden geldi?

```text
Ethernet çerçevesi   hedef MAC: 02:00:00:00:00:0B   kaynak MAC: 02:00:00:00:00:0A   ← ARP ile öğrenildi
└── IP paketi        hedef IP:  192.168.1.20        kaynak IP:  192.168.1.10        ← ping komutundan
    └── ICMP mesajı  Echo Request                                                   ← ping aracı
```

::: {.notes}
Hedef IP adresi kullanıcının yazdığı ping komutundan, hedef MAC adresi ARP alışverişinden, ICMP mesajı ise ping aracından gelir. Kaynak adresler PC-A'nın kendi yapılandırmasıdır. Bu çerçevede haftanın bütün parçaları aynı anda görünür: ICMP IP'nin içinde, IP Ethernet'in içinde taşınır; ARP ise çerçevenin eksik alanını önceden tamamlamıştır.
:::

---

## Packet Tracer'da aynı akışı gözleyelim

1. PC-A, PC-B ve bir switch yerleştirin; PC'leri switch'e düz kabloyla (Copper Straight-Through) bağlayın.
2. PC'lere 192.168.1.10 ve 192.168.1.20 adreslerini girin.
3. Simulation Mode'a geçin; filtrede yalnız **ARP** ve **ICMP** kalsın.
4. PC-A komut satırında `ping 192.168.1.20` çalıştırın.
5. Event List'te sırayı izleyin: **ARP Request → ARP Reply → ICMP Echo Request → ICMP Echo Reply**.

::: {.notes}
IP adresi girildiğinde Packet Tracer'ın otomatik doldurduğu maske değerini değiştirmeyin; maskenin anlamı 8. haftanın konusudur. Filtre ayarı Event List altındaki "Edit Filters" ile yapılır.

Event List'teki her olaya tıklandığında açılan pencerede çerçevenin ve paketin ayrıntıları görülebilir: ARP isteğinin hedef MAC'inin broadcast olduğunu, ICMP mesajının ise IP paketi içinde taşındığını bu pencereden doğrulayın. İkinci kez ping gönderildiğinde ARP olaylarının görülmemesi, eşlemenin ARP tablosunda tutulduğunu gösterir; PC-A'da `arp -a` ile bu kaydı kontrol edin.

Uygulamanın amacı yeni bir protokol öğretmek değil, teoride kurulan veri akışını görünür kılmaktır.
:::

---

## Kontrol soruları

1. TCP/IP'nin Uygulama katmanı OSI'nin hangi sorumluluklarını kapsar? Bu sorumluluklar ortadan kalkar mı?
2. "TCP/IP" adı iki protokolden geldiği hâlde neden bütün aileyi temsil eder?
3. PC-A hedef IP adresini bildiği hâlde çerçeveyi neden hemen gönderemez?
4. ARP Request neden broadcast, ARP Reply neden unicast gönderilir?
5. ICMP mesajı hangi birimin içinde taşınır? ARP mesajından farkı nedir?
6. Ping yanıtı alınamadığında hedefin kapalı olduğu söylenebilir mi?

::: {.notes}
1: Uygulama, sunum ve oturum sorumluluklarını kapsar; sunum ve oturum görevleri kalkmaz, uygulama protokolü veya uygulama yazılımı tarafından yürütülür. 2: Ad, ailenin iki merkezi protokolünden gelir ve gündelik kullanımda bütün aileyi temsil eder; aile HTTP, DNS, SMTP, UDP gibi başka protokolleri de içerir.

3: Çerçevenin hedef alanı MAC adresidir ve PC-A bu adresi bilmemektedir. 4: Hedef MAC bilinmediği için soru yerel ağdaki herkese sorulur; yanıtı veren cihaz soranın MAC adresini istekten öğrendiği için yalnız ona yanıt verir. 5: ICMP mesajı IP paketinin içinde taşınır; ARP mesajı ise doğrudan Ethernet çerçevesinde taşınır. 6: Söylenemez; istek veya yanıt kaybolmuş, ICMP engellenmiş ya da adresleme hatalı olabilir.
:::

---

## Kaynaklar

- Dersin öğretmen slaytları: **03 — OSI** ve **04 — TCP/IP**.
- Tanenbaum ve Wetherall, *Computer Networks*, 5. baskı, bölüm 1 ve 5.
- Forouzan, *Data Communications and Networking*, 5. baskı, bölüm 2 ve 23–24.
- Kurose ve Ross, *Computer Networking: A Top-Down Approach*, 8. baskı, bölüm 1, 4 ve 6.
- [RFC 826: ARP](https://www.rfc-editor.org/rfc/rfc826.html) · [RFC 792: ICMP](https://www.rfc-editor.org/rfc/rfc792.html).

::: {.notes}
Anlatım sırası dersin OSI ve TCP/IP slaytlarındaki hattı izler: katmanlı model → TCP/IP'ye geçiş → protokol ailesi → IP → MAC ihtiyacı → ARP → ICMP. ARP örneği Tanenbaum bölüm 5, PDF 113–115 ve Kurose bölüm 6, PDF 32–34 ile; ICMP açıklaması Tanenbaum bölüm 5, PDF 112–113 ve RFC 792 ile desteklenmiştir.
:::
