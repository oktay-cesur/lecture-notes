---
title: "Taşıma ve Uygulama Katmanı Protokolleri"
subtitle: "BLP 1003 — Bilgisayar Ağları"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-09-12
execute:
  echo: false
---

::: {.callout-warning}
## Taslak Çalışma Notu
Bu doküman BLP 1003 Bilgisayar Ağları dersi için resmî izlence ve mevcut sunum malzemesi temel alınarak hazırlanmış ilk çalışma taslağıdır. Haftalık pedagojik revizyonlarla olgunlaştırılmaya devam edecektir.
Ana İzlence: [[crs-blp1003|Ders İzlence Merkezi]]
:::



## Bugünün Temel Sorusu

> Bilgisayarınızda aynı anda hem YouTube'dan video izleyip, hem Discord'da sesli konuşup, hem de web sayfalarında gezinebiliyorsunuz. Gelen paketlerin hepsi tek bir ağ kartından ve tek bir IP adresinden girdiği halde, işletim sistemi hangi paketin YouTube'a, hangisinin Discord'a ait olduğunu nasıl şaşırmadan ayırt eder?

- IP adresi bilgisayarı bulur; peki o bilgisayarın içindeki doğru programı kim bulur?
- Bir uygulama neden TCP yerine UDP'yi tercih eder?
- Tarayıcıya bir adres yazdığımızda arka planda DNS, DHCP ve HTTP nasıl birlikte çalışır?

::: {.notes}
Bu hafta ağın üst katmanlarına çıkıyoruz: **Taşıma Katmanı (Katman 4)** ve **Uygulama Katmanı (Katman 7/5)**.

IP protokolü veriyi doğru cihaza (host-to-host) ulaştırmakla görevlidir. Taşıma katmanı ise bu veriyi cihazın içindeki doğru uygulamaya/sürece (process-to-process) teslim eder. TCP ve UDP arasındaki kritik tasarım tercihlerini, port mantığını ve internetin can damarı olan DNS, DHCP ve HTTP/HTTPS protokollerini inceleyeceğiz.
:::

---

## Port Numaraları ve Soket (Socket) Kavramı

Bir bilgisayarda yüzlerce ağ programı aynı anda çalışabilir. İşletim sistemi bu süreçleri birbirinden ayırmak için **Port Numaralarını (16 bit: 0–65535)** kullanır.

```text
SOKET (SOCKET) = [IP Adresi] : [Port Numarası]
Örnek: 192.168.1.50:54321 ──────> 93.184.216.34:443 (Web Sunucusu HTTPS)
```

Port Aralıkları:
- **Tanınmış Portlar (Well-Known Ports: 0–1023):** Standart sistem servisleri için ayrılmıştır (Yönetici yetkisi gerektirir).
  - HTTP: `80` | HTTPS: `443` | DNS: `53` | DHCP: `67/68` | SSH: `22` | Telnet: `23` | FTP: `20/21`
- **Kayıtlı Portlar (Registered Ports: 1024–49151):** Şirket ve uygulamalara tahsis edilen portlar (MySQL: `3306`, MS RDP: `3389`).
- **Dinamik / Geçici Portlar (Dynamic / Ephemeral Ports: 49152–65535):** İstemcinin giden bağlantılar için anlık olarak işletim sisteminden kiraladığı rastgele kaynak portlar.

::: {.notes}
Bir istemci web sunucusuna bağlanırken hedef port daima bellidir (örn. HTTPS için 443). Ancak istemcinin kendi kaynak portu (Source Port) dinamik aralıktan rastgele atanır (örn. 52341). Sunucu yanıt dönerken bu kaynak porta yanıt gönderir; işletim sistemi de gelen yanıtı 52341 numaralı portu açmış olan web sekmesine yönlendirir.
:::

---

## Taşıma Katmanı İkilisi: TCP vs UDP

Ağ uygulamaları ihtiyaçlarına göre iki temel taşıma protokolünden birini seçer:

| Özellik | TCP (Transmission Control Protocol) | UDP (User Datagram Protocol) |
|---|---|---|
| **Bağlantı Durumu** | Bağlantı Yönelimli (Connection-Oriented) | Bağlantısız (Connectionless) |
| **Güvenilirlik** | Güvenilir (Kayıp paketleri yeniden iletir - ACK) | En İyi Çaba (Kayıp paket takibi yok) |
| **Veri Sırası** | Sıralı Teslimat (Garantili sıralama) | Sırasız (Paketler nasıl gelirse öyle işlenir) |
| **Akış/Tıkanıklık Kontrolü** | Var (Pencere boyutu / Windowing) | Yok (Ağı kontrol etmez, doğrudan basar) |
| **Başlık Ek Yükü (Header)** | 20–60 Bayt (Ağır yönetim yükü) | Yalnızca 8 Bayt (Çok hafif ve hızlı) |
| **Kullanım Alanları** | Web, E-posta, Dosya Transferi, SSH | Canlı Yayın, Sesli İletişim (VoIP), Oyun, DNS |

::: {.callout-note}
### Teknik Düzeltme
TCP "çift yönlü", UDP "tek yönlü" **değildir**! Her iki protokol de tam çift yönlü (full-duplex) çalışabilir. Aralarındaki fark hız ya da yön değil; **iletim güvenilirliği (reliability), akış kontrolü ve gecikme toleransı** arasındaki mühendislik takasıdır (trade-off).
:::

::: {.notes}
Bir bankacılık işleminde ya da yazılım indirmede tek bir baytın bile kaybolması kabul edilemez; bu yüzden gecikmeye katlanılır ve TCP kullanılır. Ancak canlı bir Zoom görüşmesinde ya da online oyunda kaybolan bir ses paketinin yarım saniye sonra yeniden gelmesinin hiçbir anlamı yoktur; önemli olan en düşük gecikmeyle anlık veriyi akıtmaktır, bu yüzden UDP tercih edilir.
:::

---

## TCP Üç Yollu El Sıkışma (Three-Way Handshake)

TCP, veri aktarmadan önce istemci ve sunucu arasında oturumu resmî olarak kurar:

```text
[İSTEMCİ (Client)]                                   [SUNUCU (Server)]
        │                                                    │
        ├─────── 1. SYN (Seq = x) ──────────────────────────>│ (Bağlanmak istiyorum)
        │                                                    │
        │<────── 2. SYN-ACK (Seq = y, Ack = x + 1) ──────────┤ (İsteğini aldım, ben de hazırım)
        │                                                    │
        ├─────── 3. ACK (Seq = x + 1, Ack = y + 1) ─────────>│ (Onayını aldım, veri başlayabilir)
        │                                                    │
        │<============== GÜVENLİ VERİ AKTARIMI =============>│
```

- **SYN (Synchronize):** Sıra numarasını senkronize etme isteği.
- **ACK (Acknowledgment):** Alındı teyidi.
- Bağlantı sonlandırılırken ise **FIN (Finish)** bayrağı kullanılarak 4 adımlı kapatma işletilir.

::: {.notes}
Üç yollu el sıkışma her iki tarafın da birbirini duyabildiğini ve sıra numaraları üzerinde anlaştığını teyit eder. Eğer sunucu portu kapalıysa istemciye `RST (Reset)` bayrağı döner. CPT Simulation Mode'da bir web sayfası açıldığında önce TCP SYN paketlerinin gittiği açıkça gözlemlenebilir.
:::

---

## DNS (Domain Name System - Alan Adı Sistemi)

İnsanlar isimleri hatırlar (`www.oktaycesur.com`); yönlendiriciler ve ağ cihazları ise sayısal IP adreslerini (`93.184.216.34`) anlar.

- **Görevi:** Alan adlarını IP adreslerine (ve tersine) çözümleyen dağıtık ve hiyerarşik veritabanı.
- **Çalışma Protokolü:** Genellikle **UDP Port 53** (hızlı sorgu-yanıt).

```text
Hiyerarşik Yapı:
                    . (Kök - Root DNS Sunucuları)
                    ├── .com, .org, .net, .edu (TLD - Üst Düzey Alan Adı Sunucuları)
                    └── google.com, oktaycesur.com (Yetkili - Authoritative DNS)
```

Sorgu Mantığı: İstemci önce yerel DNS önbelleğine bakar, yoksa Modem/ISP DNS'ine sorar, oradan kök ve yetkili sunuculara kadar kademeli çözümleme yapılır.

::: {.notes}
DNS internetin telefon rehberidir. Bir web sitesine girerken tarayıcınızın yaptığı ilk ağ eylemi bir HTTP isteği göndermek değil, önce DNS sunucusuna gidip "Bu sitenin IP adresi nedir?" diye sormaktır. DNS yanıtı gelmeden bağlantı kurulamaz.
:::

---

## DHCP (Dynamic Host Configuration Protocol)

Ağa katılan her cihaza elle (statik) IP, maske ve gateway girmek yüzlerce cihazlık bir ağda imkânsızdır. **DHCP** bu işlemi otomatikleştirir.

DORA Süreci:
1. **Discover (Keşif):** İstemci ağa bağlandığında IP'si yoktur. `0.0.0.0` kaynak ve `255.255.255.255` hedef adresiyle broadcast olarak ağa bağırır: *"Ağda DHCP sunucusu var mı?"*
2. **Offer (Teklif):** DHCP sunucusu istemciye havuzdan uygun bir IP adresi teklif eder.
3. **Request (İstek):** İstemci sunulan teklifi kabul ettiğini duyurur.
4. **Acknowledge (Onay - ACK):** Sunucu IP'yi istemcinin MAC adresine belirli bir süreyle (Lease Time) kiralar ve ağ parametrelerini teslim eder.

Dağıtılan Parametreler: **IP Adresi**, **Alt Ağ Maskesi**, **Varsayılan Ağ Geçidi (Gateway)** ve **DNS Sunucu IP'si**.

::: {.notes}
DHCP'nin 4 adımlı döngüsünü akılda tutmanın en kolay yolu "DORA" kısaltmasıdır: Discover, Offer, Request, Acknowledge. Bu süreç tamamlandığında bir host internete çıkmak için gereken tüm 3. katman konfigürasyonunu eksiksiz almış olur.
:::

---

## HTTP ve HTTPS (Web Protokolleri)

Dünya Çapında Ağ'ın (WWW) temel iletişim protokolü.

- **HTTP (Hypertext Transfer Protocol - Port 80):**
  - İstemci (tarayıcı) istek atar (`GET /index.html HTTP/1.1`), sunucu yanıt döner (`HTTP/1.1 200 OK`).
  - **Güvenlik Riski:** Veriler ağda **açık metin (cleartext)** olarak akar. Araya giren biri (Man-in-the-Middle) kullanıcı adı, şifre ve oturum çerezlerini dinleyebilir (Sniffing).
- **HTTPS (HTTP Secure - Port 443):**
  - HTTP trafiğinin **TLS (Transport Layer Security)** şifreleme tüneli içerisinden aktarılmasıdır.
  - Veri gizliliği, veri bütünlüğü ve sunucu kimlik doğrulaması (Sertifika) sağlar.

::: {.notes}
Kullanıcılar genellikle HTTPS'in ayrı bir protokol olduğunu düşünür. Aslında HTTPS, HTTP'nin aynısıdır; sadece Katman 4 (TCP) ile Katman 7 (HTTP) arasına bir şifreleme katmanı (TLS) yerleştirilmiştir. Böylece kablodan geçen veriler şifreli metne dönüşür.
:::

---

## Özet ve Gelecek Hafta

Bu derste öğrendiklerimiz:
- Port numaraları, soket kavramı ve süreçlerin ayırt edilmesi,
- TCP'nin güvenilir, sıralı ve bağlantı yönelimli doğası,
- 3 Yollu El Sıkışma (SYN → SYN-ACK → ACK),
- UDP'nin hafif, hızlı ve bağlantısız yapısı,
- Temel servisler: DNS (isim çözümleme), DHCP (DORA otomatik yapılandırma) ve HTTP/HTTPS.

**Gelecek Hafta:** Ara sınav hazırlığı, Hafta 1–6 kazanım matrisi, kavramlar arası büyük resim ve uçtan uca senaryo analizi.
