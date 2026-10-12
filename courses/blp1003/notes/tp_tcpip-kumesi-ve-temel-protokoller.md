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
Katmanlı mimari, iletişimi tek ve büyük bir problem olarak ele almak yerine birbirine hizmet sunan sorumluluklara böler. Her katman kendi sorusunu çözer: verinin anlamı, verinin hangi uygulama iletişimine ait olduğu, hangi uç sisteme gideceği, yerel bağlantıda hangi arabirime teslim edileceği ve bitlerin ortamda nasıl aktarılacağı ayrı sorulardır.

Bu bölünmenin kazancı bağımsız değişebilirliktir. Bir katmanın yöntemi değiştiğinde, örneğin bakır kablo yerine fiber kullanıldığında, sunulan hizmet korunduğu sürece üst katmanların değişmesi gerekmez. Karşı uçta aynı katmanın aynı kurallarla çalışması ise iki sistemin birbirini anlamasının koşuludur. TCP/IP protokol kümesi de bu ilke üzerine kuruludur.
:::

---

## OSI'nin rolü: sorumlulukları adlandırmak

- OSI bir **referans modelidir**: iletişimde yapılması gereken işleri yedi katmanda ayırır.
- Model görevleri adlandırır; iletişimi kullanılan **protokoller** yürütür.

**Soru:** Gerçek ağlarda kullanılan protokoller bu sorumlulukları nasıl gruplar?

::: {.notes}
OSI modeli, iletişimde yapılması gereken işleri yedi katmanda adlandıran bir referans çerçevesidir. Değeri ortak bir dil sağlamasıdır: bir sorunun yerel teslimle mi yoksa taşıma hizmetiyle mi ilgili olduğu bu çerçeve üzerinden tartışılabilir.

Model ile protokol farklı şeylerdir. Model hangi sorumlulukların bulunduğunu söyler; protokol ise mesajların biçimini ve alışveriş kurallarını tanımlar. Bu nedenle OSI'nin yedi katmanı, her iletişimde yedi ayrı başlık bulunduğu veya her katmanın ayrı bir yazılım parçası olduğu anlamına gelmez. Ethernet, IP, TCP ve HTTP ile yapılan sıradan bir web isteğinde ayrı bir sunum ya da oturum başlığı yoktur.

Gerçek ağlarda kullanılan protokoller aynı sorumlulukları farklı biçimde gruplar. TCP/IP bu gruplamanın en yaygın örneğidir.
:::

---

## Yedi katmandan dörde: OSI → TCP/IP

![](../../../images/bilgisayar-aglari/hafta-05/01-osi-tcpip-gecis.svg){height="620" fig-align="center" fig-alt="Solda OSI'nin yedi katmanı, sağda TCP/IP'nin dört katmanı; OSI'deki Uygulama, Sunum ve Oturum katmanları TCP/IP'de tek Uygulama katmanında toplanır"}

::: {.notes}
OSI uygulama tarafındaki sorumlulukları üç ayrı katmanda tanımlar. Uygulama katmanı hangi mesajlarla konuşulacağını, sunum katmanı verinin hangi biçimde temsil edileceğini, oturum katmanı ise süren etkileşimin nasıl düzenleneceğini belirler. TCP/IP bu üçlü ayrımı zorunlu tutmaz ve hepsini tek bir Uygulama (Application) katmanında toplar.

Katman sayısının yediden dörde inmesi, TCP/IP'nin daha az iş yaptığı anlamına gelmez. İşler aynıdır; değişen, hangi işlerin ayrı bir katman olarak tanımlandığıdır. Taşıma, ağ ve alt katmanların eşleşmesi de benzer bir gruplama mantığına dayanır. Bu eşleşme, TCP/IP'yi oluşturan protokoller tanındıktan sonra daha açık görülür.
:::

---

## TCP/IP: tek protokol değil, protokol ailesi

![](../../../images/bilgisayar-aglari/hafta-05/02-tcpip-protokol-kumesi.svg){height="620" fig-align="center" fig-alt="TCP/IP'nin dört katmanında birlikte çalışan protokoller: Uygulama katmanında HTTP, DNS ve SMTP; Taşıma katmanında TCP ve UDP; İnternet katmanında IP; Ağ erişimi katmanında Ethernet ve Wi-Fi"}

::: {.notes}
TCP/IP adı, yalnız TCP ve IP'nin kullanıldığı izlenimini verebilir. Oysa TCP/IP, farklı katmanlarda birlikte çalışan çok sayıda protokolü kapsayan bir protokol ailesidir. Web sayfası istemek için HTTP, alan adlarını adreslere çevirmek için DNS, e-posta göndermek için SMTP kullanılır. Taşıma katmanında TCP'nin yanında UDP de bulunur.

Bu protokoller birbirinin yerine geçmez; farklı işleri birlikte tamamlar. Bir web isteğinde HTTP isteğin anlamını, TCP verinin hangi uygulama iletişimine ait olduğunu ve nasıl teslim edileceğini, IP ise paketin hangi uç sisteme gideceğini belirler.

Ağ erişimi katmanındaki Ethernet ve Wi-Fi, IEEE standartlarıyla tanımlanan bağlantı teknolojileridir. TCP/IP, IP paketlerinin hangi bağlantı teknolojisi üzerinden taşınacağını tek bir seçeneğe bağlamaz. IP'nin kablolu, kablosuz veya başka türden çok farklı ağlar üzerinde çalışabilmesi bu esneklikten gelir.
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
TCP/IP sunum ve oturum görevlerini ortadan kaldırmaz; bunları ayrı ve zorunlu katmanlar olarak tanımlamaz. Bu görevlerin nasıl yerine getirileceği kullanılan uygulama protokolüne ve uygulama yazılımına bırakılır. Örneğin bir web yanıtındaki metnin karakter kodlaması (UTF-8 gibi) HTTP mesajında belirtilir ve tarayıcı tarafından yorumlanır. Kullanıcının bir web sitesinde oturumunun açık kalması ise çoğu zaman uygulamanın çerez (cookie) gibi kendi mekanizmalarıyla sağlanır.

Bu durum "uygulama katmanında ağla ilgili hiçbir şey yoktur" biçiminde yorumlanmamalıdır. HTTP, DNS ve SMTP, ağ üzerinden konuşan iki tarafın mesaj biçimlerini ve alışveriş kurallarını tanımlayan uygulama katmanı protokolleridir. Uygulama katmanında bulunan, ağ iletişiminin uygulamanın amacına göre düzenlenen kısmıdır.
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
TCP/IP adı, ailenin merkezinde yer alan iki protokolden, TCP ve IP'den gelir. Gündelik dilde "Aygaz" adının tüp gaz, "Sana" adının margarin yerine kullanılması gibi, iki protokolün adı da bütün ailenin adı olarak kullanılır. Benzetmenin işlevi yalnız bu adlandırmayı açıklamaktır; TCP/IP'nin nasıl geliştiğini anlatmaz. TCP/IP adı hem protokol ailesi hem de bu aileyi açıklayan dört katmanlı model için kullanılır.

TCP/IP ile Web sık karıştırılır. TCP/IP Web'den önce vardı: ARPANET 1983'te TCP/IP'ye geçti. World Wide Web 1989'da önerildi ve 1990'larda mevcut TCP/IP tabanlı İnternet altyapısı üzerinde yaygınlaştı. Web, İnternet'in kendisi değil, İnternet üzerinde HTTP ile çalışan bir uygulamadır.
:::

---

## Eşleşmeyi tamamlayalım

![](../../../images/bilgisayar-aglari/hafta-05/03-osi-tcpip-eslesme.svg){height="620" fig-align="center" fig-alt="OSI Uygulama, Sunum ve Oturum katmanları TCP/IP Uygulama katmanına; Taşıma Taşıma katmanına; Ağ İnternet katmanına; Veri bağlantısı ve Fiziksel katmanlar Ağ erişimi katmanına karşılık gelir"}

::: {.notes}
Taşıma katmanı iki modelde de aynı adı ve aynı sorumluluğu taşır: verinin hangi uygulama iletişimine ait olduğunu belirlemek ve teslim hizmetini düzenlemek. OSI'nin ağ katmanı TCP/IP'de İnternet (Internet) katmanı olarak adlandırılır. Bu katmanın merkezinde IP bulunur; görevi paketi farklı ağlar üzerinden hedef uç sisteme ulaştırmaktır.

OSI'nin veri bağlantısı ve fiziksel katmanları TCP/IP'de Ağ erişimi (Network Access) başlığında toplanır. Ethernet çerçevesinin oluşturulması da çerçevenin bitlerinin ortamda sinyallerle aktarılması da bu başlığın altındadır.

Bazı ders kitapları, örneğin Kurose ve Ross, ağ erişimi katmanını veri bağlantısı ve fiziksel katman olarak ikiye ayıran beş katmanlı bir gösterim kullanır. Bu yeni bir model değil, aynı görevlerin daha ayrıntılı gösterimidir. Eşleşme görevlerin yaklaşık karşılığıdır; bir protokolün bütün işlevleri her zaman tek bir kutuya bire bir yerleşmez.
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
Aynı veri, gönderici tarafta TCP/IP katmanlarından aşağı doğru geçerken her katmanda o katmanın sorumluluğu için gereken bilgiyle birlikte taşınır. Uygulama verisi taşıma katmanında segmente, segment İnternet katmanında pakete, paket ağ erişimi katmanında çerçeveye yerleştirilir. Çerçevenin bitleri de fiziksel ortamda sinyallerle aktarılır.

Her katman üstten gelen birimin tamamını yük olarak alır ve kendi başlığını ekler. Bu nedenle Ethernet çerçevesinin yükünde yalnız kullanıcı verisi değil, IP başlığı, TCP başlığı ve HTTP verisi birlikte bulunur. Birim adları ezberlenecek etiketler değildir; hangi protokolün sorumluluğuna bakıldığını belirtir. Taşıma katmanında TCP yerine UDP kullanıldığında birim datagram olarak adlandırılır.

Alıcı tarafta işlem ters yönde yürür: her katman kendi başlığını yorumlar ve yükü bir üst katmana iletir.
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
Bir ağda çok sayıda cihaz bulunur ve gönderilen paket bunlardan yalnız birine gidecektir. Paketin doğru hedefe ulaşabilmesi için iki koşul gerekir. Birincisi, bütün cihazların aynı biçimde yorumladığı ortak bir adresleme düzenidir. İkincisi, paketin hedef adresini kendi üzerinde taşımasıdır; böylece yol üzerindeki cihazlar ve alıcı paketin kime gittiğini paketin kendisinden okuyabilir.

Bu adresleme düzeni kullanılan bağlantı teknolojisinden bağımsız olmalıdır. Paket yolculuğu boyunca Ethernet, Wi-Fi veya başka türden bağlantılardan geçebilir; hedef adresin bu geçişlerde aynı anlamı koruması gerekir. Bu problem İnternet katmanının sorumluluğudur ve bu katmanın temel protokolü IP'dir (Internet Protocol).
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
IP paketi, başlığında kaynak ve hedef IP adreslerini, yükünde ise üst katmandan gelen birimi taşır. Kaynak adres paketi kimin gönderdiğini, hedef adres paketin hangi uç sisteme gideceğini belirtir. Paketi ileten cihazlar iletim kararını hedef IP adresine bakarak verir.

IP adresine mantıksal adres denir; çünkü ağ kartına üretim sırasında yazılmaz, cihaz bir ağa bağlandığında o ağın düzenine uygun biçimde atanır. Aynı bilgisayar başka bir ağa bağlandığında farklı bir IP adresi alabilir. Bu özellik, adresin cihazın ağdaki konumunu yansıtmasını ve paketlerin ağlar arasında iletilebilmesini sağlar.

IP adresinin yapısı, ikilik gösterimi ve ağ bölümünün hesaplanması 8. haftada; yönlendiricilerin iletim kararını nasıl verdiği 10. haftada ele alınır. Bu bölümdeki adresler hazır verilmiştir.
:::

---

## IP teslimi garanti etmez

IP paketi hedefe ulaştırmaya çalışır; ancak tek başına şunları garanti etmez:

- Paketin hedefe ulaşmasını.
- Paketlerin gönderildikleri sırayla gelmesini.
- Belirli bir süre içinde teslimi.

Bu yaklaşıma **en iyi çaba** (best effort) iletim denir.

::: {.notes}
IP paketi hedefe ulaştırmaya çalışır; ancak başarılı teslim, sıra veya süre için güvence vermez. Bu hizmet biçimine en iyi çaba (best effort) iletim denir. En iyi çaba, ağın bilerek kötü iletim yaptığı anlamına gelmez. Ağ mevcut koşullarda paketi iletmeye çalışır; fakat yoğunlukta cihazların tamponlarının dolması veya bir bağlantının kopması paket kaybına yol açabilir. Paketler gönderilme sırasından farklı bir sırayla da ulaşabilir.

IP ayrıca bağlantısız çalışır: paket göndermeden önce iki uç arasında bir bağlantı kurmaz ve her paketi ayrı bir iletim birimi olarak ele alır. Bağlantısız sözcüğü fiziksel bir kablonun bulunmadığını değil, iletimden önce uçlar arasında bir anlaşma yapılmadığını anlatır.

Eksiksiz ve sıralı teslim gerektiren uygulamalar için bu eksiklikler üst katmanlarda tamamlanır; bunun nasıl yapıldığı 6. haftanın konusudur.
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
IP paketi hazır olsa da paket iletim ortamına doğrudan çıkmaz; ağ erişimi katmanında bir Ethernet çerçevesine yerleştirilmesi gerekir. Çerçevenin hedef alanında IP adresi değil MAC adresi bulunur. Switch çerçeveyi bu hedef MAC adresine göre iletir; IP adresine bakmaz.

Bu örnekte PC-A, PC-B'nin IP adresini bilmektedir; ancak PC-B'nin MAC adresini henüz bilmemektedir. PC-A hedef MAC alanını dolduramadığı sürece çerçeveyi oluşturup gönderemez.

İki cihazın aynı yerel ağda bulunması bu örneğin başlangıç koşuludur. Bir cihazın hedefin aynı yerel ağda olup olmadığını nasıl belirlediği 8. haftada, farklı ağdaki bir hedefe nasıl gönderim yaptığı 10. haftada ele alınır.
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
IP ve MAC adresleri birbirinin yerine geçmez; iç içe birimlerde farklı sorulara cevap verir. IP adresi paketin içinde taşınır ve paketin mantıksal hedefini, yani hangi uç sisteme gideceğini belirtir. MAC adresi paketi taşıyan Ethernet çerçevesinin başlığında bulunur ve çerçevenin o yerel bağlantıda hangi ağ arabirimine teslim edileceğini belirtir. Çerçeveyi oluşturabilmek için ikisine birlikte ihtiyaç vardır.

Bu örnekte iki adres de PC-B'yi gösterir. Bu durum her gönderimde böyle olmak zorunda değildir; hedef başka bir ağdaysa çerçevenin yerel alıcısı ile paketin mantıksal hedefi farklı cihazlar olabilir. Bu durum yönlendirme haftasında incelenir.

PC-A'nın önündeki problem artık açıktır: bildiği IP adresinden, bilmediği MAC adresine nasıl ulaşacaktır?
:::

---

## "192.168.1.20'nin MAC adresi nedir?"

> 192.168.1.20'nin IP adresini biliyorum. MAC adresi nedir?

Bu soruyu yerel ağda sorup cevabını almayı sağlayan protokol:
**ARP** (Address Resolution Protocol, adres çözümleme protokolü).

ARP veriyi taşımaz; verinin Ethernet üzerinde taşınabilmesi için gereken **IP → MAC** eşlemesini sağlar.

::: {.notes}
ARP (Address Resolution Protocol), bilinen bir IPv4 adresine karşılık gelen MAC adresini yerel ağda bulmak için kullanılır. PC-A, 192.168.1.20 adresinin kime ait olduğunu yerel ağa sorar; adresin sahibi kendi MAC adresiyle cevap verir.

ARP kullanıcı verisini taşımaz. PC-A'nın göndermek istediği IP paketi ARP mesajının içine konmaz. Önce ARP ile IP–MAC eşlemesi öğrenilir; ardından paket, hedef MAC adresi tamamlanmış Ethernet çerçevesine yerleştirilir. Öğrenilen eşleme bir süre ARP tablosunda tutulur; böylece aynı hedefe gönderilen her pakette aynı soru yeniden sorulmaz.

ARP'nin görev alanı yerel ağdır; ARP istekleri yönlendiriciden geçip başka ağlara yayılmaz. ARP, IP ile Ethernet arasında köprü görevi gördüğü için kaynaklarda katman yerleşimi farklı gösterilebilir; belirleyici olan görevidir. [ARP tanımı: RFC 826](https://www.rfc-editor.org/rfc/rfc826.html).
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
PC-A hedef MAC adresini bilmediği için soruyu tek bir alıcıya yöneltemez. ARP isteği, Ethernet broadcast (yayın) adresi FF:FF:FF:FF:FF:FF ile yerel ağdaki bütün cihazlara gönderilir. Switch broadcast çerçevesini geldiği port dışındaki portlara iletir. Bu örnekte PC-B ve PC-C isteği alır; ancak sorulan IP adresi yalnız PC-B'ye aittir. PC-C isteği işler, adresin kendisine ait olmadığını görür ve yanıt vermez.

İstekte PC-A kendi IP ve MAC adresini de bildirir. Doğru cihaz, yanıtı kime göndereceğini bu bilgiden öğrenir.

Ethernet hedefinin broadcast olması ile aranan IP adresinin tek bir cihaza ait olması çelişmez: soru herkese duyurulur, aranan cihaz IP adresiyle belirtilir. ARP isteği bir IP paketinin içinde değil, doğrudan Ethernet çerçevesinin içinde taşınır.
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
PC-B, istekte PC-A'nın MAC adresini gördüğü için yanıtı yalnız PC-A'ya gönderebilir; bu nedenle ARP yanıtı tipik olarak unicast'tir. Yanıt, 192.168.1.20 adresinin 02:00:00:00:00:0B MAC adresine ait olduğunu bildirir. PC-A bu eşlemeyi ARP tablosuna yazar ve bekleyen IP paketini Ethernet çerçevesine yerleştirir. Böylece süreç tamamlanır: hedef MAC bilinmez, istek gönderilir, yanıt alınır, MAC öğrenilir ve çerçeve oluşturulur.

ARP hedef IP adresini değiştirmez; yalnız çerçevenin eksik hedef MAC alanını tamamlar. Öğrenilen eşlemeler Windows ve Packet Tracer PC komut satırında `arp -a` komutuyla görülebilir. Kayıtların ne kadar süre tutulduğu gibi ayrıntılar işletim sistemine bağlıdır ve bu dersin kapsamı dışındadır.
:::

---

## Paket gönderildi; hedefe ulaştı mı?

**Soru:** Paket hedefe doğru gönderildi. Peki hedefe ulaşılabiliyor mu? İletişim sırasında bir sorun olursa bunu nasıl anlayacağız?

- IP teslimi garanti etmez.
- IP paketi, ulaştığına ya da ulaşamadığına dair kendiliğinden bir bilgi geri getirmez.

Ağ hakkında geri bildirim taşıyan ayrı bir mekanizma gerekir.

::: {.notes}
ARP ile adres problemi çözüldükten sonra PC-A çerçeveyi oluşturup gönderebilir. Ancak gönderimin başarılı olup olmadığı ayrı bir sorudur. IP en iyi çaba hizmeti sunduğu için paket yolda kaybolabilir ve IP paketi, hedefe ulaştığına ya da ulaşamadığına dair kendiliğinden bir bilgi geri getirmez.

Hem kullanıcıların hem de ağ yöneticilerinin bir hedefin erişilebilir olup olmadığını sınayabilmesi ve iletim sırasında oluşan bazı sorunlardan haberdar olabilmesi gerekir. Bu ihtiyaç, IP ile birlikte çalışan bir kontrol ve hata bildirim mekanizmasıyla karşılanır.
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
ICMP (Internet Control Message Protocol), IP iletişimiyle ilgili kontrol ve hata bilgilerini taşır. Bir yönlendirici veya hedef cihaz, paketi iletemediği bazı durumlarda kaynağa ICMP mesajı gönderebilir; örneğin hedefe ulaşılamadığını bildirebilir. ICMP, kullanıcının dosyasını veya web sayfasını taşımak için kullanılan bir protokol değildir; iletişimin kendisi hakkında bilgi taşır.

ICMP mesajı TCP veya UDP kullanmaz, doğrudan IP paketinin içinde taşınır. ARP ile önemli bir farkı buradadır: ARP mesajı doğrudan Ethernet çerçevesinde, ICMP mesajı ise IP paketinin içinde taşınır.

ICMP de güvence sunmaz. Her sorun için mesaj üretilmeyebilir, üretilen mesaj kaybolabilir veya güvenlik nedeniyle engellenebilir. ICMP'nin çok sayıda mesaj türü vardır; en sık karşılaşılan kullanımı ping aracıdır. [ICMP mesajları: RFC 792](https://www.rfc-editor.org/rfc/rfc792.html).
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
Ping, belirli bir hedefin ICMP üzerinden yanıt verip veremediğini gözlemlemeye yarayan bir araçtır. Hedefe ICMP Echo Request (yankı isteği) mesajı gönderir ve karşılığında ICMP Echo Reply (yankı yanıtı) mesajı bekler. Hedef cihaz Echo Request aldığında, isteğin içeriğini geri döndüren bir Echo Reply ile yanıt verir.

Yanıt geldiğinde araç gidiş–dönüş süresini gösterir. Bu süre, isteğin gönderilmesinden yanıtın alınmasına kadar geçen toplam süredir; yalnız kablodaki yayılma süresini değil, cihazların mesajı işleme süresini ve yol üzerindeki beklemeleri de içerir. Komut Windows ve Packet Tracer PC komut satırında bu biçimde kullanılır; çıktının görünümü sisteme göre değişebilir.
:::

---

## Ping neyi gösterir, neyi göstermez?

| Gözlem | Söylenebilecek | Söylenemeyecek |
|---|---|---|
| Yanıt geldi | Hedef bu anda ICMP'ye yanıt veriyor; gidiş ve dönüş yolu çalışıyor | Web sunucusunun veya başka bir uygulamanın çalıştığı |
| Yanıt gelmedi | Bu yoklamaya süresinde yanıt alınmadı | Hedefin kesinlikle kapalı olduğu |

"Ping başarılıysa ağdaki her şey doğrudur" sonucu çıkarılamaz.

::: {.notes}
Başarılı bir ping, Echo Request ile Echo Reply alışverişinin o anda çalıştığını gösterir: istek hedefe ulaşmış, hedef yanıt vermiş ve yanıt geri dönmüştür. Ancak bu sonuç hedefte bir web sunucusunun çalıştığını, istenen sayfanın bulunduğunu veya başka bir uygulamanın doğru yanıt vereceğini kanıtlamaz. ICMP ile uygulama protokolleri farklı görevler yürütür.

Yanıt alınamaması da tek bir nedene işaret etmez. Hedef veya aradaki bir bağlantı çalışmıyor olabilir, istek ya da yanıt kaybolmuş olabilir, ICMP bir güvenlik duvarında engellenmiş olabilir veya adresleme hatalı olabilir. Tek bir gözlem tek bir nedeni kesinleştirmez; ping bir teşhisin sonucu değil, başlangıcıdır.
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
Bu senaryo, ayrı ayrı ele alınan IP, MAC, ARP ve ICMP kavramlarını tek bir gönderimde bir araya getirir. Topoloji en basit biçimiyle iki bilgisayar ve bir switch'ten oluşur. PC-A ve PC-B aynı yerel ağdadır; IP ve MAC adresleri yukarıda verilmiştir.

Başlangıç koşulu belirleyicidir: PC-A'nın ARP tablosu boştur. PC-A, `ping 192.168.1.20` komutuyla hedefin IP adresini bilir; fakat PC-B'nin MAC adresini bilmez. Bu nedenle ICMP mesajının gönderilebilmesi için önce ARP alışverişinin tamamlanması gerekir.
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
Adım 1–4 adres problemini çözer: PC-A, ARP isteği ve yanıtıyla PC-B'nin MAC adresini öğrenir. Adım 5–7 kapsüllemeyi gösterir: ICMP Echo Request mesajı IP paketine, IP paketi de Ethernet çerçevesine yerleştirilir. Adım 8–9 iletimi ve yanıtı gösterir: switch çerçeveyi hedef MAC adresine göre PC-B'nin portuna iletir, PC-B de Echo Reply ile yanıt verir.

Gerçek bir sistemde ICMP mesajı ve IP paketi önce hazırlanıp ARP tamamlanana kadar bekletilebilir. Adımların ARP ile başlaması, hedef MAC adresi bilinmeden çerçevenin gönderilemeyeceğini öne çıkarır.

Adım 9'da PC-B yeniden ARP isteği göndermez; PC-A'nın MAC adresini ARP isteğinden zaten öğrenmiştir. Echo Reply'da IP ve MAC adreslerinin yönü tersine döner: kaynak PC-B, hedef PC-A olur.
:::

---

## Echo Request çerçevesinin içi: hangi bilgi nereden geldi?

```text
Ethernet çerçevesi   hedef MAC: 02:00:00:00:00:0B   kaynak MAC: 02:00:00:00:00:0A   ← ARP ile öğrenildi
└── IP paketi        hedef IP:  192.168.1.20        kaynak IP:  192.168.1.10        ← ping komutundan
    └── ICMP mesajı  Echo Request                                                   ← ping aracı
```

::: {.notes}
Echo Request çerçevesindeki her bilgi farklı bir kaynaktan gelir. Hedef IP adresi kullanıcının yazdığı ping komutundan, hedef MAC adresi ARP alışverişinden, ICMP mesajı ise ping aracından gelir. Kaynak IP ve kaynak MAC adresleri PC-A'nın kendi yapılandırmasıdır.

Bu çerçevede haftanın bütün parçaları aynı anda görülür. ICMP mesajı IP paketinin içinde, IP paketi Ethernet çerçevesinin içinde taşınır. ARP bu çerçevenin içinde yer almaz; çerçevenin eksik hedef MAC alanını gönderimden önce tamamlamıştır.
:::

---

## Packet Tracer'da aynı akışı gözleyelim

1. PC-A, PC-B ve bir switch yerleştirin; PC'leri switch'e düz kabloyla (Copper Straight-Through) bağlayın.
2. PC'lere 192.168.1.10 ve 192.168.1.20 adreslerini girin.
3. Simulation Mode'a geçin; filtrede yalnız **ARP** ve **ICMP** kalsın.
4. PC-A komut satırında `ping 192.168.1.20` çalıştırın.
5. Event List'te sırayı izleyin: **ARP Request → ARP Reply → ICMP Echo Request → ICMP Echo Reply**.

::: {.notes}
Bu uygulamada yeni bir protokol yoktur; adım adım izlenen akış Packet Tracer'ın Simulation Mode'unda görünür hâle gelir. IP adresi girildiğinde Packet Tracer'ın otomatik doldurduğu maske değeri değiştirilmemelidir; maskenin anlamı 8. haftada ele alınır. Olay listesinin filtresi Event List altındaki "Edit Filters" ile ayarlanır.

Event List'teki her olaya tıklandığında açılan pencerede çerçevenin ve paketin ayrıntıları görülebilir. Bu pencerede ARP isteğinin hedef MAC adresinin broadcast olduğu ve ICMP mesajının IP paketi içinde taşındığı doğrulanabilir.

Aynı ping ikinci kez gönderildiğinde ARP olayları görülmez; PC-A eşlemeyi ARP tablosunda tuttuğu için soruyu yeniden sormaz. Bu kayıt PC-A komut satırında `arp -a` ile kontrol edilebilir.
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
Birinci soru, TCP/IP Uygulama katmanının OSI'deki uygulama, sunum ve oturum sorumluluklarını kapsadığını hatırlatır; sunum ve oturum görevleri ortadan kalkmaz, uygulama protokolü veya uygulama yazılımı tarafından yürütülür. İkinci soru adlandırma ile kapsam arasındaki farka dayanır: ad ailenin iki merkezi protokolünden gelir, aile ise HTTP, DNS, SMTP ve UDP gibi başka protokolleri de içerir.

Üçüncü ve dördüncü sorular ARP'nin gerekçesine yöneliktir. Çerçevenin hedef alanı MAC adresidir ve PC-A bu adresi bilmez. Hedef MAC bilinmediği için soru broadcast ile yerel ağdaki herkese sorulur; yanıt veren cihaz soranın MAC adresini istekten öğrendiği için yanıtını unicast olarak yalnız ona gönderir.

Beşinci soru taşınma biçimini ayırt eder: ICMP mesajı IP paketinin içinde, ARP mesajı doğrudan Ethernet çerçevesinin içinde taşınır. Altıncı sorunun yanıtı olumsuzdur; yanıtın alınamaması isteğin veya yanıtın kaybolmasından, ICMP'nin engellenmesinden ya da adresleme hatasından da kaynaklanabilir.
:::

---

## Kaynaklar

- Dersin öğretmen slaytları: **03 — OSI** ve **04 — TCP/IP**.
- Tanenbaum ve Wetherall, *Computer Networks*, 5. baskı, bölüm 1 ve 5.
- Forouzan, *Data Communications and Networking*, 5. baskı, bölüm 2.
- Kurose ve Ross, *Computer Networking: A Top-Down Approach*, 8. baskı, bölüm 1 ve 4–6.
- [RFC 826: ARP](https://www.rfc-editor.org/rfc/rfc826.html) · [RFC 792: ICMP](https://www.rfc-editor.org/rfc/rfc792.html).

::: {.notes}
Katmanlı model ve OSI–TCP/IP ilişkisi için Tanenbaum bölüm 1, Forouzan bölüm 2 ve Kurose bölüm 1 okunabilir. IP için Kurose bölüm 4; ICMP için Tanenbaum bölüm 5 (yerel PDF 112–113) ve Kurose bölüm 5; ARP için Tanenbaum bölüm 5 (yerel PDF 113–115) ve Kurose bölüm 6 (yerel PDF 32–34) temel kaynaklardır. ARP ve ICMP'nin özgün tanımları RFC 826 ve RFC 792'dedir.
:::
