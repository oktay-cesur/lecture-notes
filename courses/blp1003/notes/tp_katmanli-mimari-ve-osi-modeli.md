---
title: "Katmanlı Ağ Mimarisi ve OSI Modeli"
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

> Bir arkadaşınıza internet üzerinden 100 MB boyutunda bir video göndermek istediğinizde, bu dosya tek bir blok halinde kabloya fırlatılabilir mi? Eğer yolda tek bir bit bozulursa 100 MB'ın tamamı baştan mı indirilmelidir?

- Katmanlama fikri neden zorunlu bir mühendislik tercihidir?
- Üniversite diploması analojisi ağ iletişimini nasıl açıklar?
- Veri kabloya inerken hangi dönüşümlerden geçer (`veri → segment → paket → çerçeve → bit`)?

::: {.notes}
Bu hafta bilgisayar ağlarının en temel kavramsal çerçevesine giriyoruz: **Katmanlı Mimari ve OSI Referans Modeli**.

Mühendislikte devasa ve karmaşık problemleri çözmenin tek yolu onları bağımsız modüllere (katmanlara) ayırmaktır. Katmanlama sayesinde donanım değiştiğinde yazılımı, kablo türü değiştiğinde uygulamayı baştan yazmak zorunda kalmayız.
:::

---

## 100 MB Video Problemi: Parçalama ve Kontrol İhtiyacı

Bir uçtan diğerine 100 MB boyutunda tek parça bir dosya gönderdiğimizi hayal edelim:

- **Hat Tekeli:** Dosya aktarılırken kablo dakikalarca meşgul olur, diğer hiçbir cihaz ağda tek bir bayt bile gönderemez!
- **Hata Maliyeti:** 99. megabaytta kabloda parazit oluşup tek bir bit bozulursa, dosyanın tamamı çöpe gider ve aktarım en baştan başlar!
- **Ara Bellek Sınırı:** Ağdaki switch ve router'ların belleği (RAM) sınırlıdır; yüzlerce megabaytlık blokları tek parça tamponlayamazlar.

> **Çözüm:** Büyük veriyi küçük parçalara (**segmentasyon / parçalama**) bölmek, her parçaya sıra numarası ve adres eklemek, hatalı parçayı bağımsız olarak yeniden istemek!

::: {.notes}
Bu pedagojik problem, öğrencilerin "segmentasyon" ve "katmanlama" ihtiyacını doğrudan hissetmelerini sağlar. Veri küçük paketlere bölündüğünde, hatlar zaman paylaşımlı (multiplexing) kullanılabilir ve yalnızca bozulan küçük parça yeniden iletilir.
:::

---

## Üniversite Diploması Analojisi

Bir üniversite mezuniyet diplomasının hazırlanıp öğrenciye teslim edilme süreci:

```text
1. Rektörlük / Senato Onayı    (Diplomanın hak edilmesi - Üst Karar)
        ↓
2. Öğrenci İşleri             (Not dökümü, kimlik kontrolü, metin formatlama)
        ↓
3. Matbaa / Baskı             (Özel kâğıt, mühür, imza)
        ↓
4. Posta / Kargo Departmanı   (Zarflama, adres yazımı, takip barkodu basımı)
        ↓
5. Taşıma / Dağıtım Aracı     (Fiziksel kamyon, uçak, kurye ile teslimat)
```

::: {.callout-tip}
### Analojinin Güçlü Yönü ve Sınırı
- **Güçlü Yönü:** Her birim yalnızca kendi görevini yapar. Kargo şirketi diplomanın hangi bölümden alındığını bilmez; yalnızca adrese bakar. Rektörlük ise kargonun hangi kamyonla taşındığıyla ilgilenmez. Bir katmandaki değişiklik diğer katmanları etkilemez.
- **Sınırı:** Ağda diplomadan farklı olarak tek bir kâğıt değil; milyonlarca küçük parçaya bölünmüş, sıralanması ve teyit edilmesi gereken paket akışları vardır.
:::

::: {.notes}
Diploma analojisi sorumluluk ayrımını (separation of concerns) mükemmel anlatır. Kargo şirketi motorlu kuryeden elektrikli araca geçtiğinde rektörün diploma onay prosedürünü değiştirmesi gerekmez. Katmanlı mimari tam olarak bu bağımsızlığı ve esnekliği sağlar.
:::

---

## Katmanlı Mimarinin Avantajları

1. **Karmaşıklığı Azaltır:** Büyük problemi küçük, yönetilebilir parçalara böler.
2. **Modülerlik ve Standartlaşma:** Katmanlar arası standart arayüzler tanımlanır; bir katmandaki teknoloji değiştiğinde diğer katmanlar etkilenmez (örn. Wi-Fi'dan Ethernet'e geçildiğinde web tarayıcısı değişmez).
3. **Farklı Üreticilerin Uyumu:** Farklı işletim sistemleri (Linux, Windows, macOS, Android) ve donanımlar aynı protokollerle sorunsuz konuşabilir.
4. **Sorun Giderme (Troubleshooting) Kolaylığı:** Bir arıza olduğunda sorun katman katman izole edilebilir ("Kablo takılı mı? → IP adresi var mı? → Servis çalışıyor mu?").

::: {.notes}
Ağ yöneticileri bir problemle karşılaştığında her zaman katmanlı mimari sırasıyla düşünür. "İnternete çıkamıyorum" diyen bir kullanıcıda önce 1. katman (kablo/Wi-Fi bağlı mı), sonra 2. katman (link ışığı yanıyor mu), sonra 3. katman (IP adresi almış mı) kontrol edilir.
:::

---

## OSI 7 Katmanlı Referans Modeli

ISO (International Organization for Standardization) tarafından tanımlanan teorik model:

```text
Katman 7: Uygulama (Application)   ─── Kullanıcıya ve uygulamaya en yakın arayüz (HTTP, DNS)
Katman 6: Sunum (Presentation)     ─── Veri formatı, şifreleme ve sıkıştırma (JPEG, ASCII, TLS)
Katman 5: Oturum (Session)         ─── İletişim oturumunun başlatılması ve yönetimi (RPC)
Katman 4: Taşıma (Transport)       ─── Uçtan uca güvenilirlik, portlar, parçalama (TCP, UDP)
Katman 3: Ağ (Network)             ─── Mantıksal adresleme, en iyi yol seçimi (IP, ICMP, Router)
Katman 2: Veri Bağı (Data Link)    ─── Fiziksel adresleme, çerçeveleme, yerel iletim (MAC, Switch)
Katman 1: Fiziksel (Physical)      ─── Bitlerin kablo/ortamda sinyal olarak iletimi (Kablo, NIC, Bit)
```

::: {.notes}
OSI modeli bir ürün ya da yazılım kodu değil; ağ iletişiminin kavramsal **referans haritasıdır**. Günlük hayatta kullandığımız İnternet doğrudan OSI modeline göre değil, TCP/IP mimarisine göre çalışır. Ancak ağ protokollerini, cihazları ve sorunları açıklarken dünya genelinde ortak dil olarak OSI katman numaraları kullanılır ("2. katman cihazı switch", "3. katman yönlendirici router").
:::

---

## Katmanların Temel Görevleri ve Ayrışması

- **Alt Katmanlar (1–4):** Verinin bir noktadan diğerine taşınmasıyla ilgilenir (Veri İletimi). Ağ cihazları (switch, router) bu katmanlarda çalışır.
- **Üst Katmanlar (5–7):** Uygulama ve verinin anlamıyla ilgilenir (Uygulama Alanı). Yalnızca uç bilgisayarların (host) işletim sisteminde çalışır.

::: {.callout-note}
### Teknik Düzeltme
Session (Oturum) katmanına port numaraları veya TCP bağlantı güvenilirliği **yüklenemez**! Port numaralandırması, akış kontrolü ve yeniden iletim kesinlikle **Katman 4 (Taşıma)** sorumluluğundadır. Session katmanı yalnızca oturumun kimliğini ve kontrol noktalarını (checkpoint) yönetir.
:::

::: {.notes}
Ders anlatımında yapılan en yaygın teknik hatalardan biri Session ile Transport katmanını birbirine karıştırmaktır. Taşıma katmanı uçtan uca veri aktarımını sağlar; Session ise oturum seviyesindeki senkronizasyonla ilgilenir.
:::

---

## Protokol Veri Birimi (PDU) ve Kapsülleme (Encapsulation)

Veri üst katmandan alt katmana inerken her katman verinin başına kendi yönetim başlığını (**Header**) ekler:

```text
[Uygulama Katmanı]  ───> Veri (Data)
                              ↓
[Taşıma Katmanı]    ───> [Taşıma Başlığı (Port)] + [Veri]                 ───> SEGMENT
                              ↓
[Ağ Katmanı]        ───> [Ağ Başlığı (IP)] + [Segment]                    ───> PAKET (Packet)
                              ↓
[Veri Bağı Katmanı] ───> [MAC Başlığı] + [Paket] + [FCS Kuyruğu]          ───> ÇERÇEVE (Frame)
                              ↓
[Fiziksel Katman]   ───> 01011001011010101100110100101...                  ───> BİT
```

::: {.notes}
- **Kapsülleme (Encapsulation):** Gönderici cihazda verinin yukarından aşağıya inerken her katmanda bir zarfın içine konulması.
- **Çözümleme (Decapsulation):** Alıcı cihazda kablodan gelen bitlerin yukarı doğru çıkarken her katmanda kendi başlığının soyularak verinin açılması.
:::

---

## Cihazların Katmanlardaki Rolü

Bir paket A bilgisayarından çıkıp Switch ve Router üzerinden B bilgisayarına giderken:

```text
[PC A]           [SWITCH]         [ROUTER]         [PC B]
 Kat 7             │                │               Kat 7
 Kat 4             │                │               Kat 4
 Kat 3             │             Kat 3 (IP)         Kat 3
 Kat 2 ──────> Kat 2 (MAC) ────> Kat 2 (Yeni MAC) > Kat 2
 Kat 1 ──────> Kat 1       ────> Kat 1 ───────────> Kat 1
```

- **Switch:** Yalnızca Katman 2'ye kadar bakar (MAC adresini okur, içeriğe dokunmaz).
- **Router:** Katman 3'e kadar açar (Çerçeveyi söker, IP başlığına bakar, yönlendirir, yeni çerçeve sarar).
- **Uç Bilgisayarlar:** Katman 7'ye kadar tüm başlıkları çözer.

::: {.notes}
Bu diyagram ağ mühendisliğinin en aydınlatıcı görselidir. Bir switch, içindeki IP paketini ya da taşınan web verisini görmez; sadece dıştaki MAC zarfına bakar. Router ise MAC zarfını yırtar, içindeki IP adresine bakar, yönlendirme tablosuna göre yeni bir MAC zarfı hazırlayarak bir sonraki cihaza iletir.
:::

---

## Özet ve Gelecek Hafta

Bu derste öğrendiklerimiz:
- 100 MB video problemi ile parçalama, sıralama ve hata denetimi gereksinimi,
- Üniversite diploması analojisi ve sorumlulukların katmanlara ayrılması,
- Katmanlı mimarinin getirdiği modülerlik ve uyumluluk avantajları,
- OSI 7 Katmanlı Modeli ve her katmanın özgün sorumlulukları,
- PDU dönüşüm hattı: `Veri → Segment → Paket → Çerçeve → Bit`,
- Kapsülleme ve cihazların katman çalışma sınırları.

**Gelecek Hafta:** TCP/IP protokol kümesi, IP protokolünün doğası, ARP ile yerel adres çözümleme ve ICMP (`ping`, `traceroute`) ile ağ teşhisi.
