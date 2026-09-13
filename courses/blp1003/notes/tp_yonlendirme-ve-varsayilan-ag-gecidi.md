---
title: "Yönlendirme Temelleri ve Varsayılan Ağ Geçidi"
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

> Bilgisayarınız yan odadaki yazıcıya yazdırırken paketi doğrudan gönderir; ancak Google'ın sunucusuna giderken paketi neden "Varsayılan Ağ Geçidi"ne teslim etmek zorundadır? Router bir paketi yönlendirirken paketin içindeki IP adresi mi değişir, yoksa dışındaki MAC adresi mi?

- Bir uç bilgisayar hedefin yerel mi uzak mı olduğuna nasıl karar verir?
- Varsayılan ağ geçidi (Default Gateway) yanlış girilirse ne olur?
- Paket yönlendiriciden (router) geçerken katman katman hangi ameliyat yapılır?

::: {.notes}
Geçtiğimiz hafta alt ağları (subnetting) gördük ve büyük bir ağı küçük parçalara böldük. Peki bu farklı alt ağlar birbiriyle nasıl konuşacak?

Bu hafta farklı ağlar arasındaki trafiği yöneten yönlendiricileri (**Router**), varsayılan ağ geçidi mantığını ve ağ mühendisliğinin en temel kuralı olan "MAC değişir, IP sabit kalır" ilkesini inceleyeceğiz.
:::

---

## İlk Karar: Hedef Yerel mi, Uzak mı?

Bir bilgisayar (Host A), bir IP paketini ağ kartına indirmeden önce zihninde şu matematiksel kontrolü yapar:

```text
Host A (192.168.1.10 /24):
1. Kendi IP'si AND Kendi Maskesi    ──> 192.168.1.0  (Benim Ağım)
2. Hedef IP   AND Kendi Maskesi    ──> Çıkan Sonuç?
```

- **Durum 1 (Yerel İletişim):** Hedef `192.168.1.50`.
  - Sonuç: `192.168.1.0` (Ağlar aynı!).
  - *Karar:* Hedef benimle aynı switch'te. Doğrudan hedefin MAC'ini ARP ile sor ve yerel çerçeveyle ilet.
- **Durum 2 (Uzak İletişim):** Hedef `8.8.8.8` veya `10.0.0.5`.
  - Sonuç: Kendi ağıyla eşleşmiyor (Farklı Ağ!).
  - *Karar:* Ben bu hedefe doğrudan ulaşamam! Paketi **Varsayılan Ağ Geçidine (Default Gateway)** teslim etmeliyim.

::: {.notes}
Bu mantıksal karar her bir giden paket için anında verilir. Eğer hedef yerel ağda değilse bilgisayar asla hedef IP'nin MAC adresini aramaz; doğrudan kendi router'ının MAC adresini arar.
:::

---

## Varsayılan Ağ Geçidi (Default Gateway) Nedir?

**Varsayılan Ağ Geçidi (Default Gateway)**; yerel ağdaki cihazların diğer ağlara ve İnternet'e çıkabilmek için kullandığı **çıkış kapısıdır** (Router'ın o yerel ağa bakan arayüzüdür).

Genellikle o alt ağın ilk ya da son kullanılabilir IP adresi verilir (örn. `192.168.1.1` veya `192.168.1.254`).

::: {.callout-important}
### Ağ Teşhis Senaryosu: Gateway Eksik / Hatalıysa Ne Olur?
Bir bilgisayarda IP ve Maske doğru girilmiş, ancak Default Gateway boş bırakılmış veya yanlış girilmişse:
- Bilgisayar kendi yerel ağındaki (aynı switch'teki) tüm cihazlarla sorunsuz konuşur, dosya paylaşır, ping atar.
- Ancak yerel ağın dışındaki hiçbir adrese (diğer departmanlara veya İnternet'e) **kesinlikle erişemez**!
:::

::: {.notes}
Kullanıcılar "ağ kablosu takılı, yan masadaki arkadaşıma dosya atabiliyorum ama internete giremiyorum" dediğinde, ağ uzmanının aklına gelen ilk şüpheli varsayılan ağ geçidi yapılandırmasıdır.
:::

---

## Router Donanımı ve Yönlendirme Tablosu

Router (Yönlendirici), birden çok fiziksel ağ arayüzüne sahip olan ve bu arayüzler arasında Katman 3 seviyesinde paket aktaran cihazdır.

Her router arayüzü:
- Ayrı bir IP adresine ve alt ağ maskesine sahiptir.
- Kendi başına bağımsız bir **Broadcast Domain** sınırıdır.

**Yönlendirme Tablosu (Routing Table):** Router'ın yol haritasıdır. Gelen bir paketin hedef IP'sine bakar ve bu tablodaki en uygun rotayı seçer.
- **Doğrudan Bağlı Rotalar (`C - Connected`):** Router'ın kendi portlarına takılı olan yerel ağlar.
- **Statik Rotalar (`S - Static`):** Ağ yöneticisinin elle yazdığı kurallar.
- **Varsayılan Rota (`Default Route - 0.0.0.0/0`):** Tabloda eşleşmeyen tüm bilinmeyen dış hedeflerin yönlendirileceği kapı (İnternet çıkışı).

::: {.notes}
Router bir postane dağıtım merkezi gibidir. Postacı gelen mektubun üzerindeki adrese bakar, "Bu Kadıköy mektubu, 2 numaralı minibüse ver; bu Ankara mektubu, 5 numaralı trene ver" der. Routing tablosu bu kararın verildiği listedir.
:::

---

## Paket Yönlendirme Mekanizması: Adım Adım Paket Ameliyatı

Ağ mühendisliğinin en kritik ilkesi:

```text
[PC A] (192.168.1.10) ────> [ROUTER] ────> [PC B] (10.0.0.20)
MAC: AA:AA:AA        G0/0: R1_MAC   G0/1: R2_MAC      MAC: BB:BB:BB
```

1. **PC A Paketi Hazırlar:**
   - Katman 3: Kaynak IP = `192.168.1.10`, Hedef IP = `10.0.0.20`
   - Katman 2: Kaynak MAC = `AA:AA:AA`, **Hedef MAC = `R1_MAC` (Router'ın Kapısı!)**
2. **Router Paketi Alır:**
   - Gelen çerçevenin hedef MAC'i kendisine aittir (`R1_MAC`).
   - Ethernet çerçevesini **söker ve çöpe atar (Decapsulation)**!
   - İçindeki IP paketini açar; Hedef IP: `10.0.0.20`.
   - Routing tablosuna bakar: `10.0.0.0` ağı `G0/1` portuna bağlıdır.
3. **Router Yeni Çerçeve Sarar (Re-encapsulation):**
   - **Kaynak IP ve Hedef IP KESİNLİKLE DEĞİŞMEZ!**
   - Yeni Katman 2: **Kaynak MAC = `R2_MAC`**, **Hedef MAC = `BB:BB:BB`**.
   - Paketi G0/1 portundan kabloya basar.
4. **PC B** paketi alır ve Katman 7'ye kadar çözer.

::: {.notes}
Bu slaytı tahtada renkli kalemlerle çizmek gerekir:
**"IP adresleri uçtan uca (kaynaktan nihai hedefe kadar) sabit kalır; MAC adresleri ise her router atlamasında (hop) silinir ve yeniden yazılır!"**
:::

---

## Temel Statik Yönlendirme (Static Routing)

Küçük ağlarda yönlendiricilere yollar ağ yöneticisi tarafından elle öğretilir.

Cisco IOS Komut Sözdizimi:
```text
Router(config)# ip route [Hedef-Ağ-Adresi] [Alt-Ağ-Maskesi] [Sonraki-Durak-IP]
```

Örnek Senaryo:
Router 1, kendi arkasındaki ağdan Router 2'nin arkasındaki `10.0.0.0/24` ağına ulaşmak istiyor. İki router arasındaki hat üzerinden sonraki durak IP `172.16.0.2`:

```text
Router1(config)# ip route 10.0.0.0 255.255.255.0 172.16.0.2
```

- **Avantajı:** CPU ve bant genişliği tüketmez, son derece güvenlidir.
- **Sınırı:** Ağ büyüdükçe elle rota girmek zorlaşır; bir kablo koptuğunda otomatik alternatif yol bulamaz (Dinamik yönlendirme gerekir).

::: {.notes}
BLP 1003 kapsamında OSPF ya da EIGRP gibi karmaşık dinamik routing protokollerinin algoritmalarına girilmez. Öğrencinin kavraması gereken şey; iki farklı alt ağ arasındaki geçişin statik bir rota ve varsayılan ağ geçidi üzerinden nasıl kurulduğudur.
:::

---

## Cisco Packet Tracer ile Yönlendirme Laboratuvarı

İki Farklı LAN Arasında Yönlendirme:
1. `LAN 1` (`192.168.1.0/24`) $\rightarrow$ Switch 1 $\rightarrow$ Router (Gig0/0: `192.168.1.1`).
2. `LAN 2` (`192.168.2.0/24`) $\rightarrow$ Switch 2 $\rightarrow$ Router (Gig0/1: `192.168.2.1`).
3. PC 1'in varsayılan ağ geçidi: `192.168.1.1`.
4. PC 2'nin varsayılan ağ geçidi: `192.168.2.1`.
5. PC 1'den PC 2'ye ping atma ve Simulation Mode'da router üzerindeki paket başlık değişimini (MAC değişimini) gözlemleme.

::: {.notes}
Packet Tracer'da bu kurgu yapıldığında ilk ping paketi ARP nedeniyle genellikle "time out" verir; ikinci ping'den itibaren başarı oranı %100'e çıkar. Öğrencilere ilk paketin neden düştüğü sorulup ARP keşif süreci hatırlatılacaktır.
:::

---

## Özet ve Gelecek Hafta

Bu derste öğrendiklerimiz:
- Bir ucun hedefin yerel mi uzak mı olduğuna karar verme mantığı,
- Varsayılan Ağ Geçidinin (Default Gateway) kritik görevi,
- Router'ın çoklu broadcast domain sınırı ve yönlendirme tablosu,
- Paket yönlendirme süreci: "IP sabit kalır, MAC her atlamada değişir",
- Temel statik rota (`ip route`) yapılandırması.

**Gelecek Hafta:** Kablosuz ağlar (WLAN), RF ortamı, 2.4 GHz ve 5 GHz bantları, SSID, CSMA/CA ve kablosuz güvenlik (WPA2/WPA3).
