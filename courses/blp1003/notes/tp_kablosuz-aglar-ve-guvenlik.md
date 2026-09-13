---
title: "Kablosuz Ağlar ve Güvenlik"
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

> Kablolu bir ağda veri yalnızca kablonun içinden akar; bina dışından birinin fiziksel temas olmadan hattı dinlemesi neredeyse imkânsızdır. Kablosuz bir ağda ise veriler havaya radyo dalgalarıyla saçılır. Ortak bir hava sahasında hem sinyallerin birbirini ezmesini nasıl engelleriz, hem de komşumuzun trafiğimizi dinlemesini nasıl önleriz?

- Hava ortamında çarpışma neden algılanamaz (CSMA/CD neden çalışmaz)?
- 2.4 GHz ile 5 GHz arasındaki gerçek fark nedir?
- WEP ve WPA neden çöpe atıldı; WPA2 ve WPA3 güvenliği nasıl sağlar?

::: {.notes}
Bu hafta hareketliliğin (mobility) ve esnekliğin temeli olan **Kablosuz Yerel Alan Ağlarını (WLAN - IEEE 802.11)** inceliyoruz.

Kablolu Ethernet ile kablosuz Wi-Fi arasındaki temel mühendislik farklarını; ortak paylaşımlı hava ortamını, frekans bantlarını, kanal planlamasını ve kablosuz güvenlik protokollerini ele alacağız.
:::

---

## Ortak İletim Ortamı: Radyo Frekansı (RF)

Kablosuz ağlarda fiziksel ortam **havadır**. Veri, elektromanyetik radyo dalgaları (RF) modüle edilerek iletilir.

Hava Ortamının Getirdiği Fiziksel Zorluklar:
- **Ortak Yayın Doğası (Broadcast Medium):** Havadaki sinyali kapsama alanındaki herkes dinleyebilir. Fiziksel sınır veya duvar yoktur.
- **Zayıflama (Attenuation):** Sinyal mesafeyle hızla güç kaybeder.
- **Soğurulma ve Yansıma (Absorption & Reflection):** Beton duvarlar, metaller ve su molekülleri sinyali engeller veya yansıtır.
- **Girişim ve Parazit (Interference):** Mikrodalga fırınlar, Bluetooth cihazları, telsiz telefonlar ve komşu Wi-Fi ağları aynı frekansta gürültü üretir.

::: {.notes}
Kablolu ağda bakır tel sinyali dış etkenlerden izole eder. Kablosuz ağda ise ortamı herkes paylaşır. Bu durum hem ortama erişim kontrolünü (MAC) hem de güvenlik mimarisini kökten değiştirir.
:::

---

## Frekans Bantları: 2.4 GHz vs 5 GHz

Wi-Fi teknolojisi temel olarak iki ana lisanssız frekans bandında (ISM Band) çalışır:

| Karşılaştırma Ölçütü | 2.4 GHz Bandı | 5 GHz Bandı |
|---|---|---|
| **Dalga Boyu** | Daha uzun (~12.5 cm) | Daha kısa (~6 cm) |
| **Duvar Geçirgenliği** | Yüksek (Engellerin arkasına daha iyi geçer) | Düşük (Beton ve engellerde çabuk soğurulur) |
| **Kapsama Menzili** | Geniş menzil | Daha dar menzil |
| **Spektrum / Bant Genişliği** | Dar spektrum (~80 MHz toplam) | Çok geniş spektrum (~500+ MHz) |
| **Örtüşmeyen Kanal Sayısı** | **Yalnızca 3 Kanal (1, 6, 11)** | **20'den fazla bağımsız kanal** |
| **Kanal Birleştirme** | Genellikle 20 MHz ile sınırlı | 40, 80, 160 MHz kanal birleştirme |
| **Parazit Yoğunluğu** | Çok yüksek (Bluetooth, Mikrodalga, Bebek telsizi) | Düşük (Daha temiz spektrum) |

::: {.notes}
Öğrencilerin ezberlediği "2.4 yavaş ama uzağa gider, 5 hızlı ama yakına gider" sloganı eksiktir. Asıl neden fiziksel dalga boyudur. 5 GHz bandının asıl gücü geniş spektrumudur; kanallar 40 ya da 80 MHz genişliğinde birleştirilerek devasa veri hızlarına ulaşılabilir. 2.4 GHz'te ise spektrum o kadar dardır ki kanalları birleştirmek komşu ağları tamamen kilitler.
:::

---

## 2.4 GHz Kanal Planlaması: 1, 6 ve 11 Kuralı

2.4 GHz bandında her kanal 22 MHz genişliğindedir; ancak kanallar arası mesafe yalnızca 5 MHz'dir. Bu yüzden ardışık kanallar birbiriyle **örtüşür (overlap)** ve parazit üretir.

```text
Kanal 1:    [────── 22 MHz ──────]
Kanal 2:        [────── 22 MHz ──────]  <── ÇAKIŞMA!
Kanal 6:                     [────── 22 MHz ──────]
Kanal 11:                                         [────── 22 MHz ──────]
```

> **Altın Kural:** Birbirine yakın Access Point'ler yerleştirilirken **YALNIZCA 1, 6 ve 11 numaralı kanallar** kullanılır! Bu üç kanal birbiriyle sıfır örtüşmeyle çalışabilen yegane kümedir.

::: {.notes}
Ofis veya kampüs tasarımlarında en sık yapılan hata iki komşu AP'ye Kanal 1 ve Kanal 2 vermektir. Bu iki cihaz birbirinin sinyalini gürültü olarak görür ve sürekli paket tekrarı yaşanır. Doğru tasarım: AP1'e Kanal 1, AP2'ye Kanal 6, AP3'e Kanal 11 vermektir.
:::

---

## WLAN Bileşenleri ve Mimarisi

- **Access Point (AP - Erişim Noktası):** Kablosuz cihazları (istemcileri) kablolu Ethernet omurgasına bağlayan köprü.
- **İstemci (Station / STA):** Wi-Fi adaptörüne sahip telefon, laptop, tablet.
- **SSID (Service Set Identifier):** Kablosuz ağın yayınlanan insan dostu adı (örn. `Kampus_Ogrenci`).
- **BSSID (Basic Service Set Identifier):** O yayını yapan Access Point radyosunun 48-bitlik **MAC adresidir**.
- **Dolaşım (Roaming):** İstemcinin aynı SSID altında yürürken sinyali zayıflayan AP'den sinyali daha güçlü olan diğer AP'ye bağlantıyı koparmadan geçmesi.

::: {.notes}
Bir üniversite kampüsünde yüzlerce AP bulunabilir. Hepsi aynı SSID'yi (`Kampus`) yayınlar. Ancak bilgisayarınız arama yaptığında her bir AP'nin ayrı bir BSSID (MAC) adresi taşıdığını görür. Bilgisayar bu AP'ler arasında en güçlü sinyale sahip olana dinamik olarak bağlanır (roaming).
:::

---

## Ortama Erişim: CSMA/CA (Collision Avoidance)

Kablolu Ethernet'te kullanılan **CSMA/CD (Collision Detection)** kablosuz ortamda çalışamaz!

Neden?
- **Dinleme Körlüğü (Listening Blindness):** Bir ağ kartı havaya güçlü bir radyo sinyali yayarken, aynı anda havadaki çok zayıf bir başka çarpışma sinyalini fiziksel olarak duyamaz.
- **Gizli Terminal Problemi (Hidden Node):** A ve C cihazları birbirini duyamayacak kadar uzakta olabilir; ancak ikisi de ortadaki B cihazına veri gönderdiğinde B'de çarpışma oluşur.

> **Çözüm: CSMA/CA (Çarpışmayı Önleme):**
> 1. Kanalı dinle (Carrier Sense).
> 2. Kanal boşsa hemen gönderme; rastgele bir bekleme süresi (Random Backoff) bekle!
> 3. Gerektiğinde **RTS/CTS (Request to Send / Clear to Send)** el sıkışmasıyla hava sahasını rezerve et.

::: {.notes}
Kablolu Ethernet'te cihazlar "gönder, çarpışırsa durur yeniden deneriz" der (CSMA/CD). Kablosuzda ise çarpışmayı hissetmek imkânsız olduğu için "önce dinle, rastgele bekle, izin iste, sonra gönder" mantığı (CSMA/CA) işletilir.
:::

---

## Kablosuz Güvenlik Protokolleri ve Evrimi

Hava sahası açık olduğu için şifreleme ve kimlik doğrulama zorunludur:

- **WEP (Wired Equivalent Privacy - 1999):** RC4 şifrelemesi ve statik anahtarlar kullandı. Başlangıç vektörü (IV) zayıflığı nedeniyle dakikalar içinde şifresi kırılabilir. **Tamamen güvensizdir, kesinlikle kullanılmaz!**
- **WPA (Wi-Fi Protected Access - 2003):** WEP'in açığını yamamak için geçici olarak çıkarıldı (TKIP). Artık eski kabul edilir.
- **WPA2 (IEEE 802.11i - 2004):**
  - Güçlü **AES-CCMP** şifreleme standardı getirildi. Günümüzün en yaygın standardıdır.
  - **Personal (WPA2-PSK):** Evlerde kullanılan ortak parola (Pre-Shared Key).
  - **Enterprise (WPA2-802.1X):** Şirketlerde her kullanıcının kendi kullanıcı adı ve şifresiyle **RADIUS sunucusu** üzerinden kimlik doğrulaması yapması.
- **WPA3 (2018):**
  - **SAE (Simultaneous Authentication of Equals):** Sözlük ve kaba kuvvet (brute-force) parola kırma saldırılarına karşı tam koruma sağlar. Açık ağlarda bile bireysel trafik şifrelemesi sunar.

::: {.notes}
Kablosuz güvenlikte en kritik kural WEP ve eski WPA'yı tamamen kapatmaktır. Kurumsal ortamlarda ortak parola (WPA2-Personal) paylaşılamaz; çünkü ayrılan bir çalışanın ardından tüm şirketin parolasını değiştirmek imkânsızdır. Bu yüzden kurumsal ağlarda 802.1X / RADIUS (WPA2-Enterprise) kullanılır.
:::

---

## Özet ve Gelecek Hafta

Bu derste öğrendiklerimiz:
- Radyo frekansının (RF) getirdiği ortak ortam zorlukları,
- 2.4 GHz ve 5 GHz bantlarının fiziksel ve spektral farkları,
- 2.4 GHz'te örtüşmeyen kanallar: 1, 6 ve 11,
- WLAN bileşenleri: AP, SSID, BSSID ve Roaming,
- CSMA/CA ve gizli terminal problemini önleme mantığı,
- Kablosuz güvenlik evrimi: WEP'in çöküşü, WPA2-AES ve WPA3-SAE.

**Gelecek Hafta:** Temel ağ güvenliği prensipleri (CIA triad), parola/şifre ayrımı, NAT/PAT mekanizması ve dönem sonu bütünleşik ağ uygulaması.
