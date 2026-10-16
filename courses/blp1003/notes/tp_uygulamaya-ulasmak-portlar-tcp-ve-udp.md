---
title: "Uygulamaya ulaşmak: Portlar, TCP ve UDP"
subtitle: "BLP 1003 — Bilgisayar Ağları · 6. Hafta · N3"
type: presentation
lang: tr
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-16
execute:
  echo: false
---

<!--
Sunum taslağı. Dayanak: draft/taslaklar/bilgisayar-aglari-hafta-05-06/n3-uygulamaya-ulasmak-portlar-tcp-ve-udp.md (id: cn5-6-n3, status: sunuma-kaynak-not, 16 Ekim 2026).
Üretim kuralları: _notes/cn_5-6/sunum-ajanina-yonerge.md.
Notes blokları öğrencinin sonradan çalışacağı konu anlatımıdır; sunucu yönlendirmesi içermez.
Sayısal örnekler (100/200 el sıkışması; 1000–1299 kayıp örneği; 4000/4060 onayları) kaynak nottan alınmıştır.
Geçici portlar (52000 vb.) öğretim değeridir; yakalanmış paket kaydı değildir.
-->

## Ping cevap verdi; peki hangi uygulama alacak?

```text
Aynı bilgisayarda:
Tarayıcı     Dosya aktarımı     Ses uygulaması
       ↖          ↑          ↗
          Gelen ağ verisi
```

IP adresi **bilgisayara** ulaştırır. Uygulamayı kim seçecek?

::: {.notes}
Ping yanıtı almak, hedef bilgisayara IP düzeyinde ulaşılabildiğini gösterir. Ancak bir bilgisayara ulaşmak, onun içinde çalışan bir uygulamaya ulaşmak anlamına gelmez. Aynı bilgisayarda bir web sunucusu, bir dosya aktarım programı ve bir müzik uygulaması aynı anda ağ kullanıyor olabilir. Gelen bir paketin bunlardan hangisine ait olduğunu söyleyen bir bilginin bulunması gerekir.

Bu soruyu **portlar** cevaplar. Ardından, IP'nin vermediği garantileri (N1) tamamlayan ve birbirinden çok farklı iki taşıma hizmeti olan **TCP** ve **UDP** gelir. Konunun ön bilgisi, IP'nin hizmet sınırları, kapsülleme ve N2'deki erişilebilirlik gözlemleridir.
:::

---

## Bina ve daire: IP adresi ve port

IP adresi **binayı**, port numarası **daireyi** gösterir.

- Port: 16 bitlik alan, 0–65535
- **Soket**: uygulamanın taşıma hizmetine eriştiği arayüz
- İletişim ucu: IP adresi + port, örneğin `192.168.10.20:80`

::: {.notes}
Bir apartmanın kapı numarası posta için yeterlidir: zarf binaya ulaşır. Ama zarf belirli bir daireye gidecekse üzerinde daire numarası da bulunmalıdır; yoksa kapıcı zarfı kime vereceğini bilemez. IP adresi binayı gösterir; bilgisayardaki hangi uygulamanın muhatap olduğunu ise **port numarası** gösterir. Taşıma katmanının temel işi budur: ağ katmanının getirdiği veriyi uygun uygulamaya ayırmak.

Port numarası 16 bitlik bir alandır; yani 0 ile 65535 arasında bir değer alır. Bir uygulamanın ağ kullanmak için taşıma hizmetine eriştiği arayüze **soket** (socket) denir. IP adresi ile port birlikte bir iletişim ucunu belirtir ve IPv4'te `192.168.10.20:80` biçiminde yazılır. Bu yazım bir gösterimdir; soketin kendisi uygulamanın taşıma hizmetine eriştiği araçtır, yazılan metin değildir.

Benzetmenin sınırı vardır: daire numarası dairenin sabit kimliği gibi durur, ama port öyle değildir (sonraki slayt).
:::

---

## Port bir uygulamanın kimlik numarası değil

- Bir program birden fazla soket açabilir.
- Bir uygulama aynı anda birden fazla bağlantı kurabilir.
- TCP 80 ile UDP 80 ayrı kullanımlardır.
- Yaygın portlar (80, 443) **gelenektir**; sunucu başka portta da çalışabilir.

::: {.notes}
Portu bir uygulamanın değişmez kimlik numarası saymak yanıltıcıdır. Bir program birden fazla soket açabilir ve bir uygulama aynı anda birden fazla bağlantı kurabilir. TCP ile UDP ayrı protokollerdir; aynı sayısal port bu ikisinde ayrı kullanımlara sahip olabilir.

Bazı hizmetlerin yaygın varsayılan portları vardır (web için 80 ve 443 gibi). Bu bir gelenektir ve istemcinin sunucuyu nerede arayacağını önceden bilmesine yarar; ama sunucu başka bir portta da çalışabilir.
:::

---

## İstek ve yanıtta portlar

```text
İstek: 192.168.10.10:52000 → 192.168.10.20:80
Yanıt: 192.168.10.20:80    → 192.168.10.10:52000
```

- Sunucu portu (80): hizmetin tipik portu; istemci önceden bilir.
- İstemci portu (52000): sistemin o bağlantı için seçtiği geçici değer.
- Yanıtta uçlar yer değiştirir.

::: {.notes}
İletişimin iki ucu olduğu için taşıma başlığında da iki port bulunur: **kaynak portu** ve **hedef portu**. Tarayıcı B'deki web sunucusuna HTTP/1.1 isteği gönderirken hedef port hizmetin tipik portu olan 80'dir; kaynak port ise sistemin o bağlantı için geçici olarak seçtiği bir değerdir. 52000 öğretim örneği olarak seçilmiştir; her tarayıcının bu değeri kullandığı söylenemez.

Yanıtta uçlar yer değiştirir: sunucu yanıtı istemcinin 52000 numaralı portuna gönderir. Aksi hâlde yanıt, hangi uygulamaya gideceğini bilemezdi. İstemcinin geçici bir port alması bu yüzden gereklidir.
:::

---

## Aynı sunucu portu, iki istemci

| Bağlantı | İstemci ucu | Sunucu ucu |
|---|---|---|
| 1 | `192.168.10.10:52000` | `192.168.10.20:80` |
| 2 | `192.168.10.30:52000` | `192.168.10.20:80` |

Kaynak portları aynı, **kaynak IP'ler farklı**; bağlantılar ayrılır.

::: {.notes}
Sunucu bütün web istemcilerini 80 numaralı portta karşılayabilir; her istemci için ayrı bir sunucu portu açılması gerekmez. İki TCP bağlantısında sunucu ucu aynı, istemci uçları farklıdır. İki istemcinin kaynak portu aynı sayı olabilir; kaynak IP'leri farklı olduğu için bağlantılar ayırt edilir.

Aynı bilgisayardaki iki tarayıcı sekmesi de benzer şekilde aynı sunucunun 80 numaralı portuna bağlanabilir. Sunucu iki bağlantıyı birbirinden ayıramazsa yanıtlar karışırdı; bu yüzden ikinci bağlantıda istemci, örneğin 52001 gibi başka bir kaynak portu seçebilir. Bu, sekmelerin portlarla bire bir eşleştiği anlamına gelmez; yalnız bağlantıların ayrı uçlar kullandığını gösterir.

Sunucu gelen bir TCP segmentini yalnız hedef portuna bakarak değil, bağlantının iki ucunu birlikte değerlendirerek yerleştirir. Portu "programın numarası" diye ezberlemek bu ayrıntıyı kaçırır: bir sunucu programı aynı anda çok sayıda bağlantıya hizmet verebilir.
:::

---

## TCP ve UDP: aynı iş, farklı hizmet

İkisi de IP'nin getirdiği veriyi **port** aracılığıyla uygulamaya teslim eder.

| Özellik | TCP | UDP |
|---|---|---|
| Bağlantı kurma | Var (el sıkışma) | Yok |
| Veri birimi | Bayt akışı | Datagram (mesaj sınırı korunur) |
| Kayıp giderme, yeniden gönderim | Var | Yok (uygulama yapabilir) |
| Sıralı teslim | Var | Yok |
| Akış ve yoğunluk denetimi | Var | Yok |
| Başlık yükü | Daha büyük | 8 bayt |

::: {.notes}
IP paketlerin kayıpsız, sıralı ve tekrarsız teslimini garanti etmez. Taşıma katmanı bu noktada iki farklı yol sunar.

**TCP** (Transmission Control Protocol) bağlantı yönelimlidir. İki uç, veri göndermeden önce bir bağlantı durumu kurar; gönderilen baytları numaralar, alınanları onaylar, kaybolanı yeniden gönderir ve uygulamaya veriyi sıralı bir bayt akışı olarak sunar. **UDP** (User Datagram Protocol) bağlantı kurmaz. Uygulamanın verdiği her mesaja küçük bir başlık ekleyerek onu bir **datagram** olarak gönderir; kaybı gidermez, sırayı düzeltmez, akışı ve yoğunluğu denetlemez. Aldığı mesajları sınırlarıyla korur, yani iki mesaj birleşmez.

UDP için "yok" yazan özellikler eksik gibi görünür, ama bunlar her uygulama için eksik sayılmaz. "TCP güvenli, UDP hızlı" cümlesi bu yüzden yetersizdir: güvenilirlik, gizlilik ve hız ayrı ölçütlerdir. TCP kendi başına şifreleme sağlamaz; UDP de her koşulda daha hızlı bir uygulama anlamına gelmez. Hangisinin uygun olduğu, uygulamanın istediği şeye bağlıdır.
:::

---

## Bayt akışı ve mesaj sınırı

Uygulama TCP'ye önce `MER`, sonra `HABA` verir.

```text
Gönderen:  [MER] [HABA]            (iki gönderim çağrısı)

Alıcı bir okumada:   MERHABA
Alıcı iki okumada:   MER + HABA    ya da   MERH + ABA
```

TCP **baytların sırasını** korur; **gönderim çağrısı sınırlarını** korumayı vaat etmez.

::: {.notes}
Bu örnek paket kaybı ya da karakterlerin yer değiştirmesi örneği değildir. Baytlar eksiksiz ve sıralı gelir; değişen, alıcı uygulamanın bunları kaç okumada alacağıdır. Gönderen önce `MER`, sonra `HABA` verdiğinde alıcı bunları tek okumada `MERHABA` olarak, iki okumada ya da daha fazla parçaya bölünmüş hâlde alabilir. TCP baytların sırasını korur; uygulamanın gönderirken kullandığı çağrı sınırlarını korumayı vaat etmez.

Bu nedenle alıcı uygulamanın "mesaj nerede bitti?" sorusuna kendi protokolüyle cevap vermesi gerekir. HTTP/1.1'de başlıkların sonundaki boş satır ve uygun durumlarda `Content-Length` alanı bu işi yapar. TCP sıralı baytları getirir; HTTP o baytların nasıl okunacağını söyler.

UDP'de durum farklıdır. Uygulama iki ayrı datagram gönderirse teslim edilen her datagram ayrı bir mesaj sınırına sahiptir. Ancak birinin ulaşması diğerinin de ulaştığını göstermez. TCP ile UDP'yi karşılaştırırken yalnız hızdan söz etmek, iki protokolün uygulamaya farklı veri sunumu yaptığını gözden kaçırır.
:::

---

## Üç yollu el sıkışma

```text
İstemci                          Sunucu
   ── SYN, Seq=100 ───────────────>
   <─ SYN+ACK, Seq=200, Ack=101 ───
   ── ACK, Seq=101, Ack=201 ──────>
```

- SYN, sıra uzayında **bir konum tüketir**: 100 → beklenen 101.
- Son ACK **veri taşımaz**; ek konum tüketmez.

::: {.notes}
TCP, veri göndermeden önce iki ucun bağlantı durumunu ve başlangıç sıra bilgilerini paylaşması için üç mesaj kullanır. Sıra ve onay ilişkisini izlemek kolay olsun diye başlangıç sayıları küçük seçilmiştir.

Birinci mesajda istemci SYN ile "ben 100'den başlıyorum" der. İkinci mesajda sunucu hem kendi başlangıcını bildirir (Seq=200) hem de istemciyi onaylar: Ack=101, yani "sıradaki beklediğim 101". SYN sıra uzayında bir konum tükettiği için onaydan sonra beklenen değer 100 değil 101 olur. Üçüncü mesajda istemci aynı mantıkla sunucunun SYN'ini onaylar: Ack=201. Bu örnekte son ACK veri taşımadığından ek bir konum tüketmez.

Bu üç mesajdan sonra iki uç da bağlantının durumunu ve hangi baytlardan başlandığını bilir. El sıkışma, sonradan gönderilen verinin kayıpsız ulaşacağını ya da şifreleneceğini kanıtlamaz; yalnız bağlantı durumunu ve başlangıç sıra bilgisini kurar.
:::

---

## Sıra numarası bayt sayar

Bağımsız bir kurulmuş bağlantı (100/200 örneğinin devamı değil):

```text
Seq=1000, veri uzunluğu = 100 bayt
Taşınan baytlar:        1000–1099
Beklenen sonraki bayt:  1100
Alıcının onayı:         Ack=1100
```

Ack=1100: "1099 dahil bütün baytları sırayla aldım, şimdi **1100'ü** bekliyorum."

::: {.notes}
TCP'nin sıra numarası segmentleri değil **baytları** sayar. Bir segmentin sıra numarası, taşıdığı ilk veri baytının akıştaki konumudur. 100 bayt veri taşıyan ve Seq=1000 olan bir segment, 1000'den 1099'a kadar olan aralığı kaplar; aralığın son değeri dahildir. Alıcının onayı ise beklenen sonraki baytı gösterir: Ack=1100.

Ack=1100'ü "1100. segment geldi" diye okumak yanlış olur; anlamı, 1099 dahil bütün baytların sırayla alındığı ve şimdi 1100'ün beklendiğidir. Bayt hesabı sayesinde segment boyları değişse bile akış izlenebilir.
:::

---

## Bir bölge kaybolunca

```text
1000–1099: alındı          → Ack=1100
1100–1199: KAYBOLDU
1200–1299: alındı          → Ack=1100   (boşluk kapanmadı)
1100–1199: yeniden geldi   → Ack=1300
```

- Onay **kesintisiz alınan sınırı** bildirir (kümülatif onay)
- Uygulama yalnız 1000–1299 sıralı akışını görür

::: {.notes}
IP kayıp verebileceğine göre TCP bu durumu nasıl telafi eder? Alıcı üç ardışık bölge bekliyor olsun ve ikincisi yolda kaybolsun. Üçüncü bölge (1200–1299) gelse bile ACK 1100'de kalır, çünkü onay **kesintisiz alınan sınırı** bildirir; buna kümülatif onay denir. 1100–1199 aralığı hâlâ boştur.

Alıcının 1200–1299'u tamponda tuttuğu varsayılırsa, eksik bölge yeniden geldiğinde kesintisiz sınır doğrudan 1300'e atlar. Gönderici, zaman aşımı gibi mekanizmalarla eksik bölgeyi yeniden göndermeye karar verir. Uygulama bu olayların hiçbirini görmez; kendisine yalnız 1000'den 1299'a sıralı bir bayt akışı sunulur.

TCP'nin güvenilirliği, dosyanın her koşulda tamamlanacağı anlamına gelmez. Bağlantı kalıcı olarak bozulabilir ve uygulama bir hata alabilir. TCP'nin sıralı bayt teslimi ile sunucunun alınan veriyi diske yazması da ayrı işlerdir.
:::

---

## Alıcı yavaşsa, ağ doluysa

| | Bakılan sorun | Hangi bilgiyle? |
|---|---|---|
| **Onay** | Hangi baytlar alındı? | Ack |
| **Akış denetimi** | Alıcı ne kadar ek veri kabul edebilir? | Alıcı penceresi |
| **Yoğunluk denetimi** | Ağ yolu ne kadar yük taşıyabilir? | Ağ koşulları |

::: {.notes}
Kayıp yalnız kablonun kopmasıyla oluşmaz. Sunucudan veri alan program, gelen baytları yeterince hızlı işleyemiyor olabilir; TCP'nin alıcı tamponu sınırlıdır. Alıcı kabul edebileceği veri miktarını göndericiye bildirir ve gönderici henüz onaylanmamış verisini bu sınır içinde tutar. **Akış denetimi**, hızlı göndericinin yavaş alıcıyı taşırmasını önlemeye yöneliktir.

Şimdi alıcının çok hızlı, ama aradaki yolun başka bağlantılarla dolu olduğunu düşünelim. Alıcının tamponunun boş olması, ağdaki kuyrukların büyümesini engellemez. **Yoğunluk denetimi** bu kez ağ koşullarına göre gönderimi ayarlar. Aynı bağlantıda hem alıcının kabul kapasitesi hem de ağın taşıyabildiği yük dikkate alınır.

Onay, akış denetimi ve yoğunluk denetimi birbirine temas eden ama farklı işlerdir. Onay hangi baytların alındığını, alıcı penceresi ne kadar ek verinin kabul edilebileceğini bildirir; yoğunluk denetimi ağ yoluna ne kadar yük verileceğini düzenler. Bu ayrımı görmek için algoritmaların ayrıntısını ezberlemek gerekmez.
:::

---

## UDP: dört alanlı başlık

```text
┌───────────┬──────────┬─────────┬──────────┐
│Kaynak port│Hedef port│ Uzunluk │ Checksum │  + Uygulama verisi
└───────────┴──────────┴─────────┴──────────┘
   2 bayt      2 bayt    2 bayt     2 bayt    = 8 bayt
```

- Uzunluk = başlık + veri: 20 bayt veri → **28**
- Checksum bozulmayı saptamak içindir; onay mesajı değildir

::: {.notes}
UDP başlığı yalnız dört alandan oluşur: kaynak port, hedef port, uzunluk ve checksum. Her biri iki bayt olduğundan başlık toplam 8 bayttır. **Uzunluk** alanı başlık ile veriyi birlikte sayar; örneğin 20 bayt veri taşıyan bir datagramda bu alanda 28 yazar.

**Checksum** bozulmayı saptamak içindir. Alıcının gönderene yolladığı bir onay mesajı değildir ve kötü niyetli değişikliğe karşı koruma da sağlamaz. Şekil alanların mantıksal gösterimidir; yakalanmış bir paket değildir.
:::

---

## UDP "güvenilmez" demek değil

- UDP ile istek gönderip **yanıt** alınabilir; tek yönlü değildir.
- Uygulama zaman aşımıyla yeniden deneyebilir, kendi sıralamasını yazabilir.
- **HTTP/3**, UDP üzerinde **QUIC** kullanır
- Güvenilirlik mekanizmaları QUIC'e aittir
- Yoğunluğu önemsemek TCP'de hazır gelir; UDP'de uygulamanın işi.

::: {.notes}
Bir UDP datagramının kaybolması, uygulamanın kaybı mutlaka kabul edeceği anlamına gelmez. Uygulama UDP ile istek gönderip yanıt alabilir (UDP tek yönlü değildir), zaman aşımından sonra yeniden deneyebilir ve gerekirse kendi sıralama kurallarını yazabilir.

Güncel web sürümlerinden HTTP/3, UDP üzerinde çalışan QUIC protokolünü kullanır ve güvenilir aktarım mekanizmalarına sahiptir. QUIC'in ayrıntısı bu dersin konusu değildir; ama örnek, UDP'nin "güvenilir olamaz" diye düşünülmemesi gerektiğini gösterir. Bu örnekte güvenilirliği sağlayan mekanizmalar QUIC'e aittir, UDP altta datagram hizmetini sunar. Aynı örnek, "web TCP'dir" gibi genellemelerin sınırını da gösterir.

UDP kullanmak, uygulamanın ağ yoğunluğunu önemsemeyebileceği anlamına gelmez. Yoğunluk denetimi TCP'de hazır gelir; UDP'de bu sorumluluk uygulamadadır.
:::

---

## Hangi uygulama ne bekliyor?

| İhtiyaç | Düşünülecek |
|---|---|
| Dosyanın bütün baytları gerekli | Kayıp giderme, sıralı teslim → TCP doğal bir tercih |
| Görüntülü görüşmede geç kalan ses işe yaramaz | Gecikme ile kayıp arasında tercih; eksiklik bazen kabul edilir |
| Kısa ad sorgusu; yanıt gelmezse tekrar sorulur | Küçük mesaj, uygulama düzeyinde zaman aşımı → UDP uygun olabilir |

Tek ölçüt ("hız" ya da "güven") yetmez. Birlikte tartılanlar:

- Kayıp toleransı
- Sıra gereksinimi
- Gecikme beklentisi

::: {.notes}
TCP ile UDP arasındaki seçim, uygulamanın gereksinimlerinden yapılır. 10 MB'lık bir dosyanın ortasındaki tek bir kayıp dosyayı kullanılamaz kılar; bu yüzden beklemek ve eksik bölgeyi tamamlamak mantıklıdır. Canlı bir görüşmede ise yarım saniye önceki bir ses parçasını yeniden almak işe yaramaz, çünkü oynatılmış zamanı geri getiremeyiz. Kısa bir ad sorgusunda ise yanıt gelmezse sorguyu tekrarlamak ucuzdur ve küçük bir mesaj için bağlantı kurmak gereksiz yük olabilir.

Bunlar evrensel kurallar değildir: dosya uygulamalarının hepsi TCP, ses uygulamalarının hepsi UDP kullanmaz. İhtiyaç tek bir ölçütle ("hız" ya da "güven") değil, kayıp toleransı, sıra gereksinimi ve gecikme beklentisiyle birlikte tartılır. N1'de zıt ihtiyaçlarıyla görülen iki uygulama böylece iki ayrı taşıma hizmetiyle karşılanır.
:::

---

## Küçük bir aktarımı yorumlamak

```text
Seq=4000, 60 bayt    → baytlar 4000–4059
Seq=4060, 40 bayt    → baytlar 4060–4099

Ayrı ayrı onay: Ack=4060, sonra Ack=4100
Birlikte onay:  doğrudan Ack=4100    (son onaylanan bayt: 4099)
```

Bu sayılar **tek yöndeki bayt akışının konumunu** izler; mesaj ya da dosya sayısını değil.

::: {.notes}
Bir segment Seq=4000 ile 60 bayt, sonraki segment Seq=4060 ile 40 bayt taşısın. İkisi de sırayla alınır ve her segment ayrı onaylanırsa ilk onay 4060, ikincisi 4100 olur. TCP her segmente hemen ayrı bir ACK göndermek zorunda değildir; iki segment birlikte onaylanırsa doğrudan 4100 görülebilir. Aralıkların son değerleri dahildir: son onaylanan bayt 4099'dur ve onay beklenen sonraki baytı, 4100'ü gösterir.

Alıcı TCP'nin 4100'ü onaylaması, sunucu uygulamasının veriyi diske kaydettiği ya da isteği başarıyla işlediği anlamına gelmez. Uygulama sonucu için daha üst düzeyde bir yanıt gerekir. Bir web isteğinin HTTP yanıtı, tam da bu nedenle TCP ACK'inden ayrı bir bilgi taşır.
:::

---

## Mesaj uygulamaya ulaştı; ne anlama geliyor?

Taşıma hizmeti baytları doğru uygulamaya getirdi.

- Web sunucusu bu baytları nasıl yorumlayacak?
- Hangi sayfa isteniyor?
- Yanıt nasıl biçimlenecek?

::: {.notes}
Taşıma katmanı veriyi doğru uygulamaya, doğru hizmet niteliğiyle ulaştırır; ama uygulamanın bu baytlarla ne yapacağını belirlemez. Hangi sayfanın istendiği, yanıtın nasıl biçimleneceği gibi sorular uygulamaların kendi protokollerine aittir. Bunlar N4'te ağ hizmetleriyle birlikte ele alınır.
:::
