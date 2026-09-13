---
title: "Ağ Cihazları, Ethernet ve MAC Adresleme"
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

> Bir yerel ağda onlarca bilgisayar aynı anda veri göndermek istediğinde, bu veriler havada ya da kabloda birbiriyle çarpışmadan hedefine nasıl ulaşır? Switch bu kaosu nasıl engeller?

- Hub ile switch arasındaki devrimsel fark nedir?
- Ağ kartı (NIC) dünyadaki diğer milyarlarca karttan nasıl ayırt edilir?
- Bir switch, hangi bilgisayarın hangi porta bağlı olduğunu nereden bilir?

::: {.notes}
Geçtiğimiz haftalarda topolojileri ve kabloları inceledik. Bu derste yerel alan ağlarının (LAN) kalbine iniyoruz: ağ cihazları, Ethernet standardı, MAC adresleri ve anahtarlama (switching) mekanizması.

Eski paylaşımlı ağların neden yetersiz kaldığını, switch'in MAC tablosunu nasıl dinamik olarak öğrendiğini ve collision/broadcast domain farkını adım adım ele alacağız.
:::

---

## Temel Ağ Cihazları ve Görevleri

Bir kurumsal ağın omurgasını oluşturan temel bileşenler:

- **Ağ Arayüz Kartı (NIC - Network Interface Card):** Cihazı fiziksel ortama bağlayan donanım. Veriyi bit/sinyal haline dönüştürür ve donanımsal bir MAC adresi taşır.
- **Switch (Anahtar):** Yerel ağ içindeki cihazları birbirine bağlayan, MAC adreslerine göre mikro-anahtarlama yapan 2. katman cihazı.
- **Router (Yönlendirici):** Farklı ağları (farklı IP bloklarını) birbirine bağlayan, mantıksal IP adreslerine göre yönlendirme yapan 3. katman cihazı.
- **Kablosuz Erişim Noktası (AP - Access Point):** Kablolu ağı kablosuz sinyallere açan köprü.
- **Güvenlik Duvarı (Firewall):** Gelen ve giden trafiği güvenlik kurallarına göre denetleyen, filtreleyen cihaz/yazılım.

::: {.notes}
Her cihazın belirli bir çalışma katmanı ve görevi vardır. Switch aynı yerel ağ içindeki trafiği yönetirken, router farklı ağlar arasındaki sınır muhafızıdır. Bu ayrımı anlamak, ileride göreceğimiz katmanlı mimarinin temelini oluşturur.
:::

---

## Tarihsel Dönüşüm: Hub'dan Switch'e Geçiş

Eski ağlarda **Hub (Göbek)** adı verilen çok portlu tekrarlayıcılar (repeater) kullanılırdı:

```text
HUB Davranışı (Paylaşımlı Ortam - Dumb Device):
Port 1'den gelen sinyal ──────> Port 2, Port 3, Port 4'e KÖRLEMESİNE kopyalanır!
Sonuç: Tüm cihazlar aynı kabloyu paylaşıyormuş gibi çarpışma (collision) riski yaşar!

SWITCH Davranışı (Akıllı Mikro-Anahtarlama):
Port 1'den gelen çerçeve ────> SADECE Hedef Port 3'e iletilir!
Sonuç: Çarpışma riski sıfırlanır, her port kendi bağımsız bant genişliğine sahip olur.
```

::: {.notes}
Hub tamamen 1. katman (fiziksel) bir cihazdı; gelen elektrik sinyalini güçlendirip tüm portlara basardı. Bu yüzden aynı anda iki cihaz veri gönderirse elektrik dalgaları kabloda üst üste biner ve veri bozulurdu (çarpışma - collision). Cihazlar CSMA/CD kurallarıyla çarpışmayı yönetmeye çalışırdı.

Switch ise gelen çerçeveyi belleğe alır, hedef MAC adresine bakar ve sadece hedefin bulunduğu porta gönderir. Hub günümüz modern ağlarında tamamen terk edilmiştir.
:::

---

## Çarpışma ve Yayın Alanı (Collision vs Broadcast Domain)

Ağ performansını belirleyen iki kritik sınır:

- **Collision Domain (Çarpışma Alanı):** Aynı anda iki cihazın veri göndermesi durumunda sinyallerin çarpışabileceği ağ bölgesi.
  - Hub: Tüm portlar **tek bir** collision domain içindedir.
  - Switch: Her bir switch portu **ayrı bir** collision domain'dir!
- **Broadcast Domain (Yayın Alanı):** Gönderilen bir broadcast çerçevesinin (hedef: `FF:FF:FF:FF:FF:FF`) ulaştığı tüm cihazların oluşturduğu alan.
  - Switch: Standart olarak tüm switch tek bir broadcast domain'dir (yayın tüm portlara dağıtılır).
  - Router: Router portları broadcast trafiğini geçirmez; broadcast domain'i sınırlandırır!

::: {.notes}
Bu ayrım ağ mühendisliğinin en temel sınav ve tasarım kuralıdır:
- Switch: Collision domain'i böler, broadcast domain'i bölmez.
- Router: Hem collision domain'i böler hem de broadcast domain'i böler!
:::

---

## Ethernet ve IEEE 802.3 Standardı

Günümüz yerel ağlarının (LAN) fiili standardı **Ethernet**'tir (IEEE 802.3).

Ethernet Çerçeve (Frame) Yapısı:

```text
┌───────────┬─────┬───────────┬───────────┬───────────┬────────────────┬─────┐
│ Preamble  │ SFD │ Hedef MAC │ Kaynak MAC│ EtherType │ Veri (Payload) │ FCS │
│ (7 Byte)  │(1 B)│ (6 Byte)  │ (6 Byte)  │ (2 Byte)  │ (46-1500 Byte) │(4 B)│
└───────────┴─────┴───────────┴───────────┴───────────┴────────────────┴─────┘
```

- **Preamble & SFD:** Alıcı kartın saat frekansını senkronize eden bit dizisi.
- **Hedef ve Kaynak MAC:** Çerçevenin nereden çıkıp nereye gittiğini gösteren 48-bit fiziksel adresler.
- **EtherType:** Çerçevenin içinde hangi üst katman protokolünün taşındığını belirtir (örn. `0x0800` IPv4, `0x0806` ARP).
- **FCS (Frame Check Sequence / CRC):** Çerçevenin yolda bozulup bozulmadığını denetleyen 32-bit matematiksel hata sağlama alanı.

::: {.notes}
Ethernet çerçevesinde verinin boyutu en az 46 bayt, en fazla 1500 bayt (standart MTU) olabilir. Eğer üst katmandan gelen veri 46 bayttan küçükse, Ethernet çerçevenin altına dolgu (padding) bitleri ekler. FCS alanı alıcı tarafından yeniden hesaplanır; kabloda tek bir bit bile ters dönmüşse çerçeve sessizce çöpe atılır (drop).
:::

---

## MAC Adresi Anatomisi (Fiziksel Adres)

Her Ethernet arayüzü 48 bitlik (6 Bayt) bir **MAC (Media Access Control)** adresine sahiptir.
Onaltılık (hexadecimal) tabanda gösterilir: `00:1A:2B:3C:4D:5E` veya `001a.2b3c.4d5e`.

```text
┌─────────────────────────┬─────────────────────────┐
│     İlk 24 Bit (3 Byte) │    Son 24 Bit (3 Byte)  │
│          OUI            │       Cihaz Kimliği     │
│ (Üreticiye Özel Kod)    │  (Seri Numarası / NIC)  │
└─────────────────────────┴─────────────────────────┘
Örnek: Cisco, Intel, Realtek firmalarına IEEE tarafından tahsis edilir.
```

::: {.callout-note}
### Teknik Düzeltme
MAC adresleri fabrikada ROM/EEPROM'a yazıldığı için "fiziksel donanım adresi" olarak anılır. Ancak bu adresler **mutlak değişmez veya koşulsuz benzersiz değildir**! Yazılımsal olarak değiştirilebilir (MAC Spoofing), sanallaştırmada (VMware, VirtualBox) dinamik üretilir ve mobil cihazlarda gizlilik için rastgele MAC (Randomized MAC) kullanılır.
:::

::: {.notes}
IEEE ilk 24 biti (OUI - Organizationally Unique Identifier) donanım üreticilerine satar. Üretici (örneğin Intel), ürettiği her ağ kartının son 24 bitine benzersiz bir sıra numarası basar. Ancak günümüzde işletim sistemleri düzeyinde MAC adresi rahatlıkla değiştirilebilmektedir; bu nedenle MAC adresi tek başına kesin bir güvenlik veya kimlik doğrulama kanıtı sayılamaz.
:::

---

## Switch'in Öğrenme Mekanizması: MAC Adres Tablosu

Switch, kutudan ilk çıkarıldığında **MAC adres tablosu (CAM tablosu)** boştur! Hangi porta hangi bilgisayarın bağlı olduğunu bilmez.

Switch iki temel kuralı uygulayarak öğrenir:

1. **Öğrenme (Learning):** Bir porttan gelen çerçevenin **Kaynak MAC (Source MAC)** adresine bakar. "Bu MAC adresi bu porttan geldi, demek ki bu cihaz bu porta bağlı!" diyerek tabloya yazar.
2. **İletme / Yönlendirme (Forwarding / Flooding):**
   - Çerçevenin **Hedef MAC (Destination MAC)** adresine bakar.
   - Eğer hedef adres tabloda varsa: Çerçeveyi **yalnızca** o porta iletir (Forwarding / Filtering).
   - Eğer hedef adres tabloda yoksa (Unknown Unicast) veya adres Broadcast ise: Gelen port hariç **diğer tüm portlara** kopyalar (Flooding)!

::: {.notes}
Switch'in öğrenme süreci son derece zariftir:
- Öğrenme daima **KAYNAK** MAC adresinden yapılır.
- İletim kararı daima **HEDEF** MAC adresine bakılarak verilir.

Eğer hedef adres tabloda yoksa switch geçici olarak bir hub gibi davranır ve çerçeveyi her yere basar (flooding). Hedef bilgisayar yanıt verdiğinde, bu kez onun kaynak MAC adresi de tabloya kaydedilir ve sonraki iletişimler tamamen hedefe özel (unicast) akar.
:::

---

## Bir Paket Akışı Örneği

```text
[PC A] (Port 1) ───> [SWITCH] ───> [PC B] (Port 2)
MAC: AA:AA                        MAC: BB:BB
```

1. **PC A**, PC B'ye veri gönderir (Kaynak: `AA:AA`, Hedef: `BB:BB`).
2. Switch çerçeveyi Port 1'den alır.
   - Tabloya yazar: `Port 1 -> AA:AA`.
   - Hedef `BB:BB` tabloda henüz yok!
   - Çerçeveyi Port 2, 3, 4'e basar (Flooding).
3. **PC B** çerçeveyi alır ve yanıt döner (Kaynak: `BB:BB`, Hedef: `AA:AA`).
4. Switch yanıtı Port 2'den alır.
   - Tabloya yazar: `Port 2 -> BB:BB`.
   - Hedef `AA:AA` artık tabloda var (Port 1)!
   - Çerçeveyi SADECE Port 1'e iletir (Filtering / Direct Forwarding).
5. Artık her iki yönlü iletişim de doğrudan ilgili portlar arasında akar.

::: {.notes}
Bu süreç Cisco Packet Tracer üzerinde Simulation Mode ile adım adım gösterildiğinde öğrencilerin zihninde anahtarlama mantığı mükemmel biçimde somutlaşır.
:::

---

## Özet ve Gelecek Hafta

Bu derste öğrendiklerimiz:
- NIC, Switch, Router, AP ve Firewall cihazlarının temel rolleri,
- Hub'dan Switch'e geçişin mantığı ve paylaşımlı ortamın sonu,
- Collision Domain (Switch böler) ve Broadcast Domain (Router böler),
- Ethernet 802.3 çerçeve yapısı ve FCS hata kontrolü,
- 48-bit MAC adresi anatomisi (OUI + Cihaz Kimliği),
- Switch'in dinamik MAC tablosu öğrenme ve iletme kuralları.

**Gelecek Hafta:** Katmanlı ağ mimarisi, OSI Referans Modeli, üniversite diploması analojisi, 100 MB video problemi ve katmanlarda kapsülleme/çözümleme.
