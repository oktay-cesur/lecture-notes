---
title: "TCP/IP Protokol Kümesi ve Temel Protokoller"
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

> Bir bilgisayar yanındaki bilgisayara ya da dünyanın öbür ucundaki bir sunucuya paket göndermek istediğinde, IP adresini bildiği halde neden doğrudan kabloya basamaz? ARP bu gizli köprüyü nasıl kurar ve bağlantının çalıştığını `ping` ile nasıl doğrularız?

- TCP/IP modeli OSI'den nasıl farklılaşır?
- IP protokolü neden "güvenilmez ve bağlantısız" (best-effort) olarak tasarlanmıştır?
- ARP olmadan yerel ağda tek bir paket bile iletilebilir mi?

::: {.notes}
Geçtiğimiz hafta OSI modelini ve genel katmanlama mantığını gördük. Bu hafta ise İnternet'i fiilen çalıştıran **TCP/IP protokol kümesini** ve 3. katmanın (İnternet Katmanı) temel protokollerini inceliyoruz.

Özellikle yerel ağda IP adresini MAC adresine bağlayan **ARP** mekanizmasını ve ağ teşhisinin vazgeçilmez aracı olan **ICMP** (`ping`, `traceroute`) protokolünü adım adım analiz edeceğiz.
:::

---

## TCP/IP Protokol Mimarisi ve OSI Karşılaştırması

İnternet, ISO'nun 7 katmanlı modeli yerine DARPA tarafından geliştirilen pratik **TCP/IP protokol kümesi** üzerinde yükselmiştir:

```text
OSI 7 Katmanı                      TCP/IP (4 Katman)         TCP/IP (5 Katman - Güncel)
┌──────────────────────┐          ┌──────────────────────┐  ┌──────────────────────┐
│ 7. Uygulama          │ ───┐     │                      │  │ 5. Uygulama          │
│ 6. Sunum             │ ───┼───> │ 4. Uygulama          │  │ (HTTP, DNS, DHCP)    │
│ 5. Oturum            │ ───┘     │                      │  │                      │
├──────────────────────┤          ├──────────────────────┤  ├──────────────────────┤
│ 4. Taşıma            │ ───────> │ 3. Taşıma (TCP, UDP) │  │ 4. Taşıma (TCP, UDP) │
├──────────────────────┤          ├──────────────────────┤  ├──────────────────────┤
│ 3. Ağ                │ ───────> │ 2. İnternet (IP)     │  │ 3. İnternet (IP, ARP)│
├──────────────────────┤          ├──────────────────────┤  ├──────────────────────┤
│ 2. Veri Bağı         │ ───┐     │ 1. Ağ Arayüzü /      │  │ 2. Veri Bağı (Ethernet)
│ 1. Fiziksel          │ ───┴───> │    Ağ Erişimi        │  │ 1. Fiziksel (Kablo)  │
└──────────────────────┘          └──────────────────────┘  └──────────────────────┘
```

::: {.notes}
TCP/IP modeli üstteki 5, 6 ve 7. katmanları tek bir "Uygulama" katmanında birleştirmiştir. Çünkü şifreleme (Presentation) ya da oturum takibi (Session) ağın altyapısının değil, doğrudan uygulamanın kendi sorumluluğundadır.

Eğitimde ve modern ağ mühendisliğinde genellikle 5 katmanlı hibrit model kullanılır; böylece fiziksel kablo ile Ethernet çerçevesi birbirinden net olarak ayırt edilir.
:::

---

## İnternet Protokolü (IP / IPv4)

İnternet katmanının merkezinde **IP (Internet Protocol)** yer alır.

Temel Özellikleri:
- **Mantıksal Adresleme:** Her cihaza hiyerarşik ve yönlendirilebilir 32-bitlik bir kimlik (IPv4) atar.
- **Bağlantısız (Connectionless):** Veri göndermeden önce alıcıyla önceden bir bağlantı kurmaz (mektup atmak gibidir).
- **En İyi Çaba (Best-Effort Delivery - Güvenilmez):** IP, paketin hedefe mutlaka ulaşacağını, yolda kaybolmayacağını ya da sırayla gideceğini garanti **etmez**!
- **Paket Bağımsızlığı:** Her paket (datagram) ağda birbirinden bağımsız olarak farklı rotalardan gidebilir.

> **Soru:** IP güvenilmezse internette dosyalarımız nasıl eksiksiz iniyor?  
> **Cevap:** Güvenilirlik, sıralama ve kayıp paket kontrolü bir üst katmandaki **TCP** tarafından sağlanır!

::: {.notes}
IP'nin "güvenilmez" (unreliable) olarak tasarlanması bir hata değil, bilinçli bir mühendislik zaferidir (End-to-End Argument). Eğer aradaki tüm yönlendiriciler her paketin teyidini bekleseydi, İnternet dünya ölçeğinde ölçeklenemezdi. Ağın çekirdeği hızlı ve basit tutulmuş; akıllılık ve kontrol uç sistemlere (uç bilgisayarlara) bırakılmıştır.
:::

---

## Adres Çözümleme Problemi: IP'den MAC'e Geçiş

A bilgisayarı, aynı yerel ağdaki B bilgisayarına bir paket göndermek istiyor:

- A, B'nin **IP adresini** biliyor (`192.168.1.20`).
- Ancak kablodan veriyi geçirecek olan switch Katman 2'de çalışır; switch IP adresini anlamaz, **MAC adresine** ihtiyaç duyar!
- Eğer A, B'nin MAC adresini bilmiyorsa Ethernet çerçevesinin "Hedef MAC" alanına ne yazacaktır?

> **Çözüm:** **ARP (Address Resolution Protocol - Adres Çözümleme Protokolü)**!  
> "Mantıksal IP adresini bildiğim yerel cihazın fiziksel MAC adresi nedir?"

::: {.notes}
Bu problem ağın iki farklı katmanının nasıl köprülendiğini gösterir. Bir mektup gönderirken kişinin adını ve TC kimliğini bilmeniz yetmez; mektubu teslim edecek postacı sokak ve kapı numarasını (fiziksel adresi) bilmek zorundadır. ARP bu eşleştirmeyi dinamik olarak yapar.
:::

---

## ARP Nasıl Çalışır? (İstek ve Yanıt)

```text
[PC A] (192.168.1.10)                                   [PC B] (192.168.1.20)
MAC: AA:AA:AA                                           MAC: BB:BB:BB
       │                                                       │
       ├──── 1. ARP İsteği (Broadcast: FF:FF:FF:FF:FF:FF) ───>┤ (Herkes dinler)
       │     "192.168.1.20 kimdeyse MAC'ini söylesin!"        │
       │                                                       │
       │<─── 2. ARP Yanıtı (Unicast: AA:AA:AA) ────────────────┤ (Sadece A alır)
       │     "192.168.1.20 benim, MAC adresim BB:BB:BB!"      │
```

1. **ARP Request (İstek):** Hedef MAC bilinmediği için `FF:FF:FF:FF:FF:FF` broadcast adresiyle tüm ağa basılır.
2. Ağdaki tüm bilgisayarlar paketi açar; IP'si eşleşmeyenler paketi çöpe atar.
3. IP'si eşleşen PC B, kendi MAC adresini içeren **ARP Reply (Yanıt)** paketini doğrudan PC A'ya (Unicast) gönderir.
4. PC A bu bilgiyi **ARP Tablosuna (ARP Cache)** kaydeder.

::: {.notes}
Her seferinde yeniden broadcast yapıp ağı yormamak için bilgisayarlar öğrendikleri bu eşleşmeleri geçici belleklerinde (ARP Tablosu) saklar. Komut satırında `arp -a` yazılarak o anda öğrenilmiş IP-MAC eşleşmeleri listelenebilir.
:::

---

## ICMP (Internet Control Message Protocol)

IP protokolü veri taşır fakat hata bildirme mekanizmasına sahip değildir. Bu eksikliği **ICMP** kapatır.

- **Görevi:** Ağ katmanında operasyonel kontrol, hata bildirimi ve erişilebilirlik teşhisi.
- IP paketinin içinde taşınır (Katman 3 yardımcı protokolü).

Temel ICMP Mesaj Türleri:
- **Type 8:** Echo Request (Yankı İsteği - Ping gönderimi)
- **Type 0:** Echo Reply (Yankı Yanıtı - Ping cevabı)
- **Type 3:** Destination Unreachable (Hedefe Ulaşılamıyor - Rota yok, port kapalı)
- **Type 11:** Time Exceeded (TTL Süresi Doldu - Paket döngüye girdi veya mesafe tükendi)

::: {.notes}
ICMP asla doğrudan kullanıcı verisi taşımaz. Tamamen ağın kendi iç mekanizmasının birbirine haber vermesi için kullanılır. Bir router paketi yönlendirecek yol bulamadığında göndericiye "Type 3: Destination Unreachable" mesajı döner.
:::

---

## Ağ Teşhis Araçları: `ping` ve `traceroute`

ICMP mesajlarını kullanarak ağ sağlığını test eden temel araçlar:

### 1. `ping` (Erişilebilirlik ve RTT Testi)
- Hedefe ICMP Echo Request gönderir, Echo Reply bekler.
- **RTT (Round Trip Time):** Paketin gidip gelme süresi (milisaniye).
- Paket kaybı oranı (Packet Loss) ve bağlantı kararlılığı test edilir.

### 2. `traceroute` / `tracert` (Yol Haritası Keşfi)
- Paketin kaynaktan hedefe giderken hangi router'lardan geçtiğini listeler.
- **Mekanizma:** IP başlığındaki **TTL (Time to Live)** alanını adım adım ($1, 2, 3...$) artırarak gönderir.
- Her router TTL'i 1 azaltır; TTL sıfır olduğunda router paketi atar ve göndericiye `ICMP Time Exceeded` döner. Böylece yol üzerindeki her router tek tek kimliğini açık eder!

::: {.notes}
`traceroute` mekanizması ağ mühendisliğinin en dahice hilelerinden biridir. Bir hedefe giderken aradaki cihazların IP'lerini öğrenmek için bilinçli olarak TTL'i 1 olan bir paket atılır; ilk router paketi atıp hata döndüğünde ilk cihaz keşfedilmiş olur. Sonra TTL=2 yapılarak ikinci router keşfedilir.
:::

---

## Özet ve Gelecek Hafta

Bu derste öğrendiklerimiz:
- TCP/IP protokol kümesinin 4 ve 5 katmanlı yapısı,
- IP protokolünün bağlantısız ve en iyi çaba (best-effort) çalışma doğası,
- Yerel ağda IP'den MAC'e geçiş ihtiyacı ve ARP protokolünün istek/yanıt akışı,
- ARP tablosu (`arp -a`) mantığı,
- ICMP'nin hata bildirme rolü ve `ping` ile `traceroute` çalışma prensipleri.

**Gelecek Hafta:** Taşıma katmanı (Katman 4), TCP ve UDP karşılaştırması, portlar ve soketler, TCP 3 yollu el sıkışma, DNS, DHCP ve HTTP/HTTPS servisleri.
