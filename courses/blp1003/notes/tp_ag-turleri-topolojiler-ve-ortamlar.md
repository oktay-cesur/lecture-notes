---
title: "Ağ Türleri, Topolojiler ve İletim Ortamları"
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

> Ağdaki cihazları fiziksel ve mantıksal olarak birbirine bağlarken hangi coğrafi kapsamları, rol modellerini ve topolojik yerleşimleri tercih etmeliyiz? Bir kablo koptuğunda tüm ağ mı çöker, yoksa sadece o cihaz mı izole olur?

- Bir bilgisayar her zaman sadece istemci midir?
- Topoloji neden ikiye ayrılır (fiziksel vs mantıksal)?
- Bakır ve fiber kablolar hangi ihtiyaçlara cevap verir?

::: {.notes}
Bu derste ağları ölçeklerine (coğrafi büyüklüklerine), çalışma modellerine (istemci-sunucu ve P2P) ve kablolama mimarilerine (topolojiler) göre sınıflandıracağız.

Ayrıca veriyi taşıyan fiziksel ortamları — bakır çift bükümlü kabloları, fiber optik kabloları ve kablosuz ortamı — inceleyerek iletim biçimlerini (unicast, broadcast, multicast) ayırt edeceğiz.
:::

---

## Coğrafi Kapsamına Göre Ağ Türleri

Ağlar fiziksel büyüklüklerine ve kapsadıkları coğrafi alana göre sınıflandırılır:

- **LAN (Local Area Network - Yerel Alan Ağı):** Ev, ofis, laboratuvar veya tek bir bina gibi sınırlı coğrafi alandaki ağlar. Yüksek veri iletim hızı, düşük gecikme, kurumun kendi mülkiyetindeki altyapı.
- **MAN (Metropolitan Area Network - Metropol Alan Ağı):** Bir şehri veya büyük bir üniversite kampüsünü kapsayan ağlar (örn. şehir belediyesi fiber ağı).
- **WAN (Wide Area Network - Geniş Alan Ağı):** Şehirler, ülkeler veya kıtalar arası mesafeleri birbirine bağlayan ağlar. Telekom operatörlerinin servis sağlayıcı altyapıları (ISP) kullanılır. İnternet, dünyanın en büyük WAN örneğidir.

::: {.notes}
LAN ile WAN arasındaki en kritik fark sadece mesafe değildir; **yönetim ve mülkiyet** sınırıdır. Bir LAN içinde kablolar, switch'ler ve cihazlar tamamen kurumun ya da kişinin kontrolündedir. Ancak başka bir binaya ya da şehre bağlanırken telekom altyapısı (kiralık hatlar, fiber omurgalar) kiralanmak zorundadır; bu da WAN teknolojilerini ve maliyet dinamiklerini farklılaştırır.
:::

---

## Host, İstemci ve Sunucu: Dinamik Rol Modeli

Bir ağa bağlı olan ve iletişimde IP/MAC adresi taşıyan tüm uç noktalara **host (uç sistem)** denir.

Ağ modellerinde cihazların üstlendiği roller:

- **İstemci (Client):** Hizmet talep eden, oturumu başlatan taraf (örn. web tarayıcısı, e-posta istemcisi).
- **Sunucu (Server):** Gelen istekleri dinleyen, işleyen ve yanıt üreten taraf (örn. Apache web sunucusu, dosya sunucusu).

::: {.callout-note}
### Kritik Pedagojik İlke
**Bir cihazın rolü donanımsal olarak sabit değildir!**
Bir bilgisayar aynı anda hem web'de gezinirken istemci, hem de üzerinde dosya paylaşımı açıksa diğer bilgisayarlar için bir sunucu olabilir. Rolü belirleyen şey donanım değil, o anda çalışan **yazılım ve hizmet davranışıdır**.
:::

::: {.notes}
Öğrenciler genellikle "sunucu" denildiğinde büyük kabinetlerdeki pahalı sunucu kasalarını düşünür. Donanım olarak sunucular yüksek güvenilirlik ve yedek güç kaynağı sunsa da, mantıksal olarak bir Raspberry Pi veya sıradan bir laptop da sunucu rolü üstlenebilir. Cihazın istemci mi sunucu mu olduğunu ağdaki o anki rolü belirler.
:::

---

## Eşler Arası (Peer-to-Peer - P2P) Model

Merkezi bir sunucunun bulunmadığı, her ucun hem istemci hem sunucu davranabildiği mimari:

```text
[PC A] <=============> [PC B]
   ^                     ^
   |                     |
   v                     v
[PC C] <=============> [PC D]
```

- **Özellikleri:** Merkezi sunucu maliyeti yoktur, kurulumu basittir.
- **Sınırları:** Merkezi güvenlik ve yetkilendirme zordur; cihaz sayısı arttıkça yönetim karmaşıklaşır.
- **Örnekler:** BitTorrent dosya paylaşımı, ev ağlarında basit dosya/yazıcı paylaşımı.

::: {.notes}
P2P ağlar küçük ev ortamlarında pratik olsa da kurumsal ağlarda merkezi istemci-sunucu (Client-Server) mimarisi tercih edilir. Çünkü kurumsal ağlarda kimlik doğrulama (Active Directory / LDAP), merkezi yedekleme ve güvenlik duvarı denetimi şarttır.
:::

---

## Fiziksel ve Mantıksal Topoloji

Topoloji, bir ağdaki cihazların ve bağlantı hatlarının geometrik ve işlevsel düzenidir.

İki farklı boyutta ele alınır:

1. **Fiziksel Topoloji:** Kabloların ve cihazların odada/binada fiziksel olarak nasıl yerleştirildiği ve bağlandığı.
2. **Mantıksal Topoloji:** Sinyalin ve verinin ağ içinde mantıksal olarak nasıl aktığı (veri yolu mu, nokta-nokta mı, halka mı?).

> Bir ağ fiziksel olarak **yıldız (star)** şeklinde kablolanmış olabilir; ancak içerideki cihazın çalışma mantığına göre mantıksal olarak **veri yolu (bus)** gibi davranabilir (eski hub'lı Ethernet).

::: {.notes}
Fiziksel ile mantıksal ayrımı ağ mühendisliğinde çok önemlidir. Günümüz modern ofislerinde duvardan çıkan tüm kablolar sistem odasındaki switch'e gider (fiziksel yıldız). Switch ise çerçeveyi yalnız hedef porta ileterek mantıksal olarak noktadan noktaya (point-to-point) mikro-iletişim sağlar.
:::

---

## Temel Topoloji Türleri

```text
Veri Yolu (Bus):       [PC]──────[PC]──────[PC]──────[PC] (Tek omurga hat, sonlandırıcılı)

Yıldız (Star):                 [PC]
                                 |
                        [PC]──[Switch]──[PC]       (Merkezi cihazlı, güncel standart)
                                 |
                               [PC]

Halka (Ring):          [PC] ───> [PC] ───> [PC] ───> [PC] ───> [PC] (Jeton dolaşımı)

Tam Örgü (Full Mesh):  Her düğüm diğer tüm düğümlere doğrudan bağlı: n*(n-1)/2 hat
```

::: {.notes}
- **Bus (Veri Yolu):** Tek bir koaksiyel kabloya tüm cihazlar T-konektörle bağlanırdı. Kablonun herhangi bir yerinde kopma olursa tüm ağ çökerdi (Tek Nokta Arızası / Single Point of Failure). Günümüzde terk edilmiştir.
- **Star (Yıldız):** Tüm uçlar merkezi bir cihaza (switch) bağlanır. Bir uçtaki kablo koparsa yalnızca o uç devre dışı kalır, ağın kalanı çalışmaya devam eder.
- **Ring (Halka):** Jeton (token) sırayla dolaşır. Token Ring tarihsel olarak önemli bir teknolojidir ancak yerini yüksek hızlı Ethernet'e bırakmıştır.
- **Mesh (Örgü):** En yüksek yedeklilik ve hata toleransına sahiptir. Ancak kablo maliyeti çok yüksektir ($n(n-1)/2$). Genellikle WAN omurgalarında ve veri merkezleri arasında kullanılır.
:::

---

## İletim Ortamları: Bakır Kablolar (Twisted Pair)

Modern yerel ağlarda en yaygın kullanılan fiziksel ortam: **Çift Bükümlü Kablo (Twisted Pair)**.

- Neden teller birbirine bükülür? **Elektromanyetik paraziti (EMI) ve hatlar arası çapraz konuşmayı (Crosstalk) engellemek için!**
- **UTP (Unshielded Twisted Pair):** Ekransız, esnek, ucuz, standart ofis ortamları.
- **STP (Shielded Twisted Pair):** Metal folyo/örgü zırhlı, endüstriyel parazitli ortamlar.
- **Kategori Standartları:**
  - Cat5e: 1 Gbps (100 MHz, 100 metre)
  - Cat6: 1–10 Gbps (250 MHz, 55–100 metre)
  - Cat6a: 10 Gbps (500 MHz, 100 metre)
- **Konektör:** Standart 8 pinli **RJ-45**.

::: {.notes}
Bakır kabloda elektrik sinyali akar. İki telden zıt yönlü akım geçtiğinde ürettikleri manyetik alanlar birbirini sönümler (diferansiyel sinyalleşme). Büküm sıklığı ne kadar yüksek ve düzenliyse parazit bağışıklığı o kadar artar (Cat5e vs Cat6). UTP kablolarda standart maksimum segment uzunluğu 100 metredir; 100 metrenin ötesinde sinyal zayıflar (attenuation).
:::

---

## İletim Ortamları: Fiber Optik Kablolar

Veriyi elektrik voltajı yerine **ışık darbeleri (fotonlar)** ile ileten ortam.

- **Çalışma Prensibi:** Tam iç yansıma (Total Internal Reflection). Çekirdek (Core) ve kılıf (Cladding) arasındaki kırılma indisi farkı.
- **Temel Türler:**
  - **Single-Mode Fiber (SMF):** Çok ince çekirdek (~9 µm), lazer ışık kaynağı, tek ışın yolu, onlarca kilometre menzil, yüksek maliyet (WAN ve omurga hatları).
  - **Multi-Mode Fiber (MMF):** Daha kalın çekirdek (50–62.5 µm), LED ışık kaynağı, birden çok yansıma yolu, 500 metreye kadar bina içi/kampüs hatları.
- **Avantajları:** Elektromanyetik parazitten kesinlikle etkilenmez, çok yüksek bant genişliği, dinlenmesi (kabloya fiziksel müdahale) son derece zordur.

::: {.notes}
Fiber optik kablolar elektrik taşımadığı için binalar arası yıldırım düşmesi ya da topraklama farklarından kaynaklanan yanma risklerini de sıfırlar. MYO öğrencileri için SMF ve MMF arasındaki temel farkı; çekirdek kalınlığı, ışık kaynağı (lazer vs LED) ve mesafe ekseninde kavramak yeterlidir.
:::

---

## İletim Biçimleri: Unicast, Broadcast, Multicast

Verinin hedef kitleye göre gönderilme yöntemleri:

```text
Unicast:     [A] ───────────────────────────> [B]              (Tek bir hedefe: 1-e-1)
                                              [C] (almaz)

Broadcast:   [A] ───────────┬───────────────> [B]              (Ağdaki herkese: 1-e-Tüm)
                            ├───────────────> [C]
                            └───────────────> [D]

Multicast:   [A] ───────────┬───────────────> [B] (Grupta)     (Yalnızca abone gruba: 1-e-Grup)
                            └───────────────> [C] (Grupta)
                                              [D] (almaz)
```

::: {.notes}
- **Unicast:** Normal web gezintisi, dosya transferi.
- **Broadcast:** Bir cihazın ağdaki diğer cihazları ararken (örneğin ARP isteği veya DHCP keşfi) herkese seslenmesi. Ağdaki her host broadcast paketini işlemek zorundadır; gereksiz broadcast trafiği ağı yavaşlatır.
- **Multicast:** Canlı video yayını, borsa veri akışı ya da routing protokol güncellemeleri (OSPF gibi). Sadece ilgilenen cihazlar paketi dinler.
:::

---

## Özet ve Gelecek Hafta

Bu derste öğrendiklerimiz:
- LAN, MAN ve WAN ayrımı ve mülkiyet sınırları,
- Host kavramı ve dinamik istemci/sunucu rol modeli,
- Topolojiler: Yıldız (modern standart), Bus, Halka ve Örgü,
- İletim kabloları: Bakır UTP (RJ-45) ve Fiber Optik (SMF/MMF),
- İletim biçimleri: Unicast, Broadcast ve Multicast.

**Gelecek Hafta:** Ağ cihazları (Switch, Router), Ethernet çerçevesi, MAC adresleri ve switch'in MAC tablosunu öğrenme süreci.
