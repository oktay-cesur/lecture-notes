---
title: "Ara Sınav Hazırlık ve Kapsam Tekrarı"
subtitle: "BLP 1003 — Bilgisayar Ağları"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-09-12
execute:
  echo: false
---

::: {.callout-warning}
## Taslak Çalışma Notu
Bu doküman BLP 1003 Bilgisayar Ağları dersi için ara sınav haftası hazırlık ve sentez yüzeyi olarak hazırlanmıştır. Yeni bir teknik konu içermez; Hafta 1–6 kapsamındaki kazanımları (ÖÇ1–ÖÇ3) ve uçtan uca paket akışlarını birleştiren çalışma rehberidir. Haftalık pedagojik revizyonlarla olgunlaştırılmaya devam edecektir.
Ana İzlence: [[crs-blp1003|Ders İzlence Merkezi]]
:::



## Ara Sınav Kapsam Haritası (Hafta 1–6)

Dönemin ilk yarısında bilgisayar ağlarının temel kavramsal ve mekanik altyapısını tamamladık:

- **Hafta 1:** Ağ temelleri, veri iletiminin 5 bileşeni, akış yönleri (simplex, half/full-duplex), seri/paralel iletim, bit/sinyal temsili.
- **Hafta 2:** Ağ ölçekleri (LAN, MAN, WAN), dinamik host/istemci/sunucu rolü, topolojiler (yıldız, bus, ring, mesh), kablo türleri (bakır UTP, fiber SMF/MMF), iletim biçimleri (unicast, broadcast, multicast).
- **Hafta 3:** Ağ cihazları (Switch, Router, AP, Firewall, Hub farkı), Ethernet çerçevesi, 48-bit MAC adresi, switch'in dinamik MAC tablosu öğrenmesi, collision domain ve broadcast domain.
- **Hafta 4:** Katmanlı mimari gereksinimi, 100 MB video problemi, diploma analojisi, OSI 7 katmanı, PDU dönüşümü (`veri → segment → paket → çerçeve → bit`) ve kapsülleme.
- **Hafta 5:** TCP/IP mimarisi, IP'nin bağlantısız ve best-effort yapısı, ARP protokolü (istek broadcast, yanıt unicast), ICMP ve ağ teşhis araçları (`ping`, `traceroute`).
- **Hafta 6:** Taşıma katmanı, port numaraları ve soketler, TCP ve UDP karşılaştırması, TCP 3 yollu el sıkışma, DNS çözümleme, DHCP (DORA) ve HTTP/HTTPS.

::: {.notes}
Ara sınav, öğrencilerin formülleri ezberlemesinden ziyade; bir verinin ağda nasıl yol aldığını, hangi cihazın hangi katmanda neye baktığını ve protokollerin birbiriyle nasıl paslaştığını kavrayıp kavramadığını ölçer. Bu tekrar dokümanı tüm bu parçaları tek bir büyük senaryoda birleştirir.
:::

---

## Büyük Resim: Katmanlar, Adresler ve Cihazlar Matrisi

Hangi katmanda hangi adres türü, protokol ve donanım çalışır?

| Katman Adı | PDU Adı | Adres Türü | Örnek Protokoller | İlgili Cihaz |
|---|---|---|---|---|
| **Uygulama** (Katman 7/5) | Veri (Data) | URL / E-posta / Servis | HTTP, HTTPS, DNS, DHCP, SSH | Bilgisayar / Sunucu |
| **Taşıma** (Katman 4) | Segment | Port Numarası (16-bit) | TCP, UDP | Bilgisayar (İşletim Sistemi) |
| **İnternet / Ağ** (Katman 3) | Paket (Packet) | IP Adresi (32-bit IPv4) | IP, ICMP, ARP (yardımcı) | Router (Yönlendirici) |
| **Veri Bağı** (Katman 2) | Çerçeve (Frame) | MAC Adresi (48-bit) | Ethernet (802.3), Wi-Fi (802.11) | Switch, Ağ Kartı (NIC) |
| **Fiziksel** (Katman 1) | Bit | Sinyal / Voltaj / Işık | Kablo Standartları (Cat6, Fiber) | Hub, Repeater, Kablo |

::: {.notes}
Sınav öncesi bu tablo zihinde tam olarak oturmalıdır. Bir switch'in IP adresine göre yönlendirme yapamayacağı, bir router'ın port bazında web trafiğini ayıramayacağı (standart L3 düzeyinde) ve MAC adresinin yerel ağın dışına çıkamayacağı bu tablodan okunabilir.
:::

---

## Uçtan Uca Senaryo Analizi: "Tarayıcıya Adres Yazınca Ne Olur?"

Bir istemci bilgisayarı ağa bağlayıp `http://www.ornek.com` adresini açtığımızda arka planda gerçekleşen kusursuz orkestrasyon:

```text
Adım 1: DHCP (IP Alma)
İstemci ağa bağlandığında IP'si yoktur. 
Broadcast DHCP Discover gönderir -> DORA süreciyle IP, Maske, Gateway ve DNS IP'sini alır.

Adım 2: DNS (İsim Çözümleme)
Tarayıcı "www.ornek.com" adresinin IP'sini bilmez.
DNS sunucusuna UDP Port 53 ile sorgu atar -> Hedef IP adresi (örn. 93.184.216.34) öğrenilir.

Adım 3: ARP (Yerel Ağ Geçidini Bulma)
Hedef IP yerel ağda değildir (farklı ağ). Paket Router'a (Varsayılan Ağ Geçidine) gitmelidir.
İstemci router'ın IP'sini bilir ama MAC'ini bilmez -> ARP İsteği atar -> Router'ın MAC'i öğrenilir.

Adım 4: TCP 3 Yollu El Sıkışma (Oturum Kurma)
İstemci hedef sunucunun 80 numaralı portuna TCP SYN paketi gönderir.
Sunucudan SYN-ACK gelir -> İstemci ACK döner -> Güvenilir TCP tüneli kurulur!

Adım 5: HTTP (Veri İletişimi)
İstemci "GET /index.html HTTP/1.1" isteği gönderir.
Sunucu "HTTP/1.1 200 OK" ve sayfa içeriğini paketler halinde teslim eder.
```

::: {.notes}
Bu 5 adımlı senaryo, ilk 6 haftanın bütün protokollerini (DHCP, DNS, ARP, TCP, IP, HTTP ve Ethernet) mantıksal bir zincirde birbirine bağlar. Öğrencinin bu adımları sırasıyla anlatabilmesi, dersin ilk yarısının tamamen anlaşıldığının en net kanıtıdır.
:::

---

## Karar ve Kavram Kontrol Soruları

Ara sınava hazırlanırken kendi kendinize yanıtlamanız gereken kritik sorular:

1. **Topoloji:** 10 bilgisayarlık bir ağda fiziksel yıldız topolojisi kullanmanın veri yolu (bus) topolojisine göre en büyük avantajı nedir?
2. **Cihaz Mantığı:** Bir switch, portuna gelen bir çerçevenin hedef MAC adresini tablosunda bulamazsa ne yapar?
3. **Collision vs Broadcast:** Bir switch 24 porta sahipse, o ağda kaç adet collision domain, standart olarak kaç adet broadcast domain vardır?
4. **Katmanlama:** 100 MB'lık dosya neden doğrudan tek parça halinde kabloya gönderilemez?
5. **Taşıma:** Canlı ses görüşmesi yapan bir uygulama neden TCP yerine UDP tercih eder?
6. **ARP:** Bir bilgisayar neden yerel ağ dışındaki bir sunucunun MAC adresini asla ARP ile soramaz?
7. **ICMP:** `traceroute` komutu, aradaki router'ların IP adreslerini keşfetmek için IP başlığındaki hangi alanı kullanır?

::: {.notes}
Cevap ipuçları:
1. Tek kablo koptuğunda yalnızca o PC etkilenir, tüm ağ çökmez.
2. Gelen port hariç tüm portlara çerçeveyi kopyalar (Flooding).
3. 24 collision domain, 1 broadcast domain vardır.
4. Hat tekeli, devasa hata maliyeti ve router bellek yetersizliği yüzünden.
5. Gecikmeyi en aza indirmek için; kaybolan ses paketinin gecikmeli tekrarı anlamsızdır.
6. Çünkü ARP Katman 2 (Ethernet) protokolüdür ve router sınırını (broadcast sınırını) asla geçemez.
7. TTL (Time to Live) alanını kullanır.
:::

---

## Packet Tracer Sınav Hazırlık Kontrol Listesi

Simülatör ortamında pratik olarak test etmeniz gereken temel yetkinlikler:

- [ ] PC, Switch ve Router cihazlarını çalışma alanına ekleyebilme.
- [ ] Düz (Straight-Through) ve Çapraz (Cross-Over) kablo ayrımını yapabilme.
- [ ] PC ağ kartına statik IP adresi ve alt ağ maskesi tanımlayabilme.
- [ ] Komut satırından (Command Prompt) `ipconfig`, `ping` ve `arp -a` komutlarını çalıştırabilme.
- [ ] **Simulation Mode:** Filtrelerden yalnızca ICMP, ARP ve TCP seçip paketin cihazlar arasındaki adım adım hareketini izleyebilme.
- [ ] Bir switch'in CLI ekranında `show mac-address-table` yazarak öğrendiği MAC adreslerini listeleyebilme.

::: {.notes}
Packet Tracer üzerinde bu adımları en az bir kez uygulamış bir öğrenci, sınavdaki senaryo ve topoloji sorularını kolaylıkla çözümleyebilir.
:::

---

## Dönemin İkinci Yarısına Bakış

Ara sınavın ardından ele alacağımız konular:

- **Hafta 8:** IPv4 adresleme, ikili taban matematiği, ağ ve host kısımları, özel/genel IP blokları.
- **Hafta 9:** Alt ağlara bölme (Subnetting), CIDR prefix mantığı ve adres planlaması.
- **Hafta 10:** Yönlendirme (Routing) temelleri, varsayılan ağ geçidi ve temel statik yönlendirme.
- **Hafta 11:** Kablosuz ağlar (WLAN), 2.4/5 GHz bantları ve WPA2/WPA3 güvenliği.
- **Hafta 12:** Temel ağ güvenliği, NAT/PAT mekanizması ve dönem sonu bütünleşik ağ uygulaması.
