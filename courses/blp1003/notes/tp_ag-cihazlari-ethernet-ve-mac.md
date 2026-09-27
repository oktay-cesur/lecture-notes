---
title: "Ağ Cihazları, Ethernet ve Yerel Ağ İletişimi"
subtitle: "BLP 1003 — Bilgisayar Ağları"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-09-21
execute:
  echo: false
---

## Yerel Ağda Görev ve Teslim Problemi

Cihazları birbirine bağladık ve ortamın nasıl paylaşıldığını gördük.

> Ağdaki her cihazın görevi nedir ve bir Ethernet iletisi doğru hedefe nasıl ulaşır?

- İletişimi başlatan veya tüketen sistemler
- Trafiğin iletilmesine aracılık eden cihazlar
- Hedefi belirleyen adres bilgisi

::: {.notes}
Fiziksel bağlantıları kurulmuş bir yerel ağda iletişim kendiliğinden gerçekleşmez. Bazı sistemler veriyi üretir veya tüketir. Bazı cihazlar ise bu sistemler arasındaki trafiğin taşınmasına aracılık eder.

Ethernet iletişiminde verinin yalnızca kablodan geçmesi yeterli değildir. Verinin yerel ağdaki doğru arayüze teslim edilmesi gerekir. Ağdaki işlevsel roller, Ethernet frame'i ve switch'in karar mekanizması bu teslim sürecinin birbirine bağlı parçalarıdır.
:::

---

## Öğrenme Hedefleri

- Uç sistemler ile ara ağ cihazlarını işlevlerine göre ayırmak
- Temel ağ cihazlarını çözdükleri problemle eşleştirmek
- Ethernet frame'i ile MAC adresi arasındaki ilişkiyi açıklamak
- Switch'in MAC öğrenme ve iletim kararını çözümlemek
- Basit bir yerel ağdaki iletişim yolunu yorumlamak

::: {.notes}
Ağ cihazlarını tanımak, cihaz adlarını ve simgelerini ezberlemekten daha kapsamlıdır. Bir cihazın hangi problemi çözdüğü, aldığı bilgiyi nasıl değerlendirdiği ve ağ davranışını nasıl değiştirdiği anlaşılmalıdır.

Yerel Ethernet iletişiminde NIC, frame, MAC adresi ve switch aynı sürecin parçalarıdır. Bu kavramlar birlikte değerlendirildiğinde bir frame'in switch'e nasıl ulaştığı, switch'in ne öğrendiği ve frame'i hangi porta gönderdiği açıklanabilir.
:::

---

## Ağdaki İşlevsel Roller

:::: {.columns}

::: {.column width="48%"}
### Uç sistemler

- İletişimi başlatır veya tüketir.
- Kullanıcı verisini işler.
- Bir ağ hizmetini sunabilir veya kullanabilir.
:::

::: {.column width="48%"}
### Ara ağ cihazları

- Trafiğin aktarılmasına aracılık eder.
- Bağlantıları veya ağları bir araya getirir.
- İletim ve denetim kararları uygular.
:::

::::

::: {.notes}
Bilgisayar, yazıcı, telefon veya sunucu çoğunlukla iletişimin uç noktasıdır. Bu sistemler mesaj üretir, alır veya bir ağ hizmetini kullanır. Switch ve router gibi cihazların temel işi kullanıcı mesajını tüketmek değil, trafiğin ilerlemesine aracılık etmektir.

Bu ayrım donanımın görünüşüne değil, iletişimde üstlendiği işleve dayanır. Aynı fiziksel kutu birden fazla işlevi birleştirebilir. Evlerde kullanılan tek bir cihazın modem, router, switch, access point ve firewall işlevlerini birlikte sağlaması buna örnektir.
:::

---

## Node, Host ve Uç Sistem

- **Node:** Ağdaki bir bağlantı veya işlem noktası için kullanılan geniş terim
- **Uç sistem:** İletişimin başladığı veya sonlandığı sistem
- **Host:** Kapsamı kaynağa ve mimari bağlama göre değişebilen terim

> Host teriminin kapsamı kullanılan kaynak ve mimari bağlama göre değişebilir.

::: {.notes}
Node, bir ağ içindeki uç sistemleri ve ara cihazları kapsayabilecek geniş bir terimdir. Ağ üzerinde bağlantısı ve işlevi bulunan bir nokta node olarak adlandırılabilir.

Host sözcüğü bazı kaynaklarda iletişimin uç noktasını, bazı kaynaklarda veri işleyerek ağ hizmeti kullanan sistemi ifade eder. Daha geniş kullanımlarda başka ağ cihazları da host kapsamında değerlendirilebilir. Bu nedenle router veya switch için bağlamdan bağımsız, mutlak bir host hükmü vermek doğru değildir.

Ağ davranışını açıklarken daha belirgin olan ayrım kullanılır: İletişimi başlatan veya tüketen uç sistemler ile trafiğin iletilmesine aracılık eden ara ağ cihazları.
:::

---

## İstemci ve Sunucu Rolleri

```text
Dosya hizmeti:       Bilgisayar A ──istek──> Bilgisayar B
                     istemci                 sunucu

Yazdırma hizmeti:    Bilgisayar B ──istek──> Bilgisayar A
                     istemci                 sunucu
```

**İstemci ve sunucu, sabit donanım türleri değil iletişim rolleridir.**

::: {.notes}
İstemci bir hizmeti talep eden, sunucu ise o hizmeti sağlayan taraftır. Bu roller kullanılan hizmete göre belirlenir. Bir bilgisayar dosya hizmeti sunarken sunucu, başka bir sistemden yazdırma hizmeti isterken istemci olabilir.

Aynı cihaz farklı hizmetlerde aynı anda farklı roller üstlenebilir. Bir bilgisayarı yalnızca fiziksel özelliklerine bakarak kalıcı biçimde istemci veya sunucu olarak sınıflandırmak doğru değildir.
:::

---

## NIC: Uç Sistem ile Ağ Arasındaki Arabirim

```text
[Uygulama ve işletim sistemi] ── [NIC / ağ arabirimi] ── [İletim ortamı]
```

- Fiziksel bağlantıyı sağlar.
- Ethernet frame'lerinin gönderilmesine ve alınmasına katılır.
- Bir cihazda birden fazla ağ arabirimi bulunabilir.
- MAC adresi ağ arabirimiyle ilişkilidir.

::: {.notes}
NIC, Network Interface Card ifadesinin kısaltmasıdır. Ağ arabirimi, uç sistemin kablolu veya kablosuz ağa katıldığı bağlantı noktasıdır.

Bir dizüstü bilgisayarın kablolu Ethernet arabirimi ile kablosuz ağ arabirimi birbirinden ayrı bağlantılardır. Her arabirim kendi bağlantı durumuna ve adres bilgilerine sahip olabilir. MAC adresi doğrudan bilgisayarın tamamını değil, Ethernet iletişimine katılan ağ arabirimini tanımlar.
:::

---

## Ağ Cihazlarına Neden İhtiyaç Duyulur?

| Ağdaki problem | Gerekli işlev |
|---|---|
| Sinyalin erişim mesafesi | Sinyali yeniden üretme |
| Birden fazla cihazı bağlama | Bağlantıları bir araya getirme |
| Gereksiz trafiği azaltma | Trafiği filtreleme |
| Yerel hedefe teslim | MAC bilgisine göre iletme |
| Farklı ağları bağlama | Ağlar arasında paket iletme |
| Kablosuz istemciyi LAN'a katma | Kablosuz erişim sağlama |
| Trafiği denetleme | Güvenlik politikası uygulama |
| Erişim teknolojisine bağlanma | Sinyal ve iletişim uyarlaması |

::: {.notes}
Ara ağ cihazları aynı işi yapan farklı kutular değildir. Her cihaz belirli bir iletişim problemini çözer. Repeater fiziksel sinyalin erişimini uzatırken switch Ethernet frame'lerinin yerel ağ içinde hangi bağlantıya iletileceğini belirler. Router ise farklı ağlar arasındaki iletişime aracılık eder.

Bir cihazın adından önce çözdüğü problem düşünülürse benzer görünen cihazların sınırları daha kolay anlaşılır. Switch ile router üzerinde çok sayıda bağlantı noktası bulunabilir, ancak ikisi aynı bilgiye bakarak aynı kararı vermez.
:::

---

## Repeater

```text
zayıflayan sinyal ──> [ REPEATER ] ──> yeniden üretilen sinyal
```

- Fiziksel sinyalle ilgilenir.
- Beklenen sinyal biçimini yeniden üretir.
- Adres veya frame hedefi yorumlamaz.
- Erişim mesafesini artırmak için kullanılmıştır.

::: {.notes}
Fiziksel sinyal iletim ortamında ilerlerken zayıflayabilir ve bozulabilir. Repeater yalnızca bir yükselteç gibi düşünülmemelidir. Sayısal iletişimde beklenen bit değerlerini temsil eden sinyali yeniden oluşturur ve sonraki bölüme iletir.

Repeater kaynak veya hedef MAC adresine bakmaz. Görevi fiziksel iletimle sınırlıdır. Bağımsız Ethernet repeater'ları güncel anahtarlamalı yerel ağların merkezi cihazı değildir; ağ cihazlarının gelişimini anlamada kavramsal bir basamaktır.
:::

---

## Hub

```text
          [PC A]
             |
[PC B] ─── [HUB] ─── [PC C]
             |
          [PC D]
```

- Çok portlu repeater gibi çalışır.
- Bir porttan gelen sinyali diğer portlara tekrarlar.
- Bütün cihazlar aynı Ethernet ortamını paylaşır.
- Ortak collision domain içinde CSMA/CD kullanılır.

::: {.notes}
Hub, cihazları fiziksel yıldız düzeninde bir araya getirir. Buna rağmen portları bağımsız Ethernet bağlantıları oluşturmaz. Bir porttan aldığı fiziksel sinyali diğer portlarına tekrarlar. Bağlı cihazlar ortak bir iletim ortamını paylaşır.

Aynı anda yapılan gönderimler ortak ortamda çarpışabilir. Geleneksel paylaşımlı Ethernet bu durumu CSMA/CD ile yönetir. Hub hedef MAC adresini okuyarak yalnızca ilgili porta iletim yapmaz.
:::

---

## Bridge

```text
[Ethernet segmenti A] ── [ BRIDGE ] ── [Ethernet segmenti B]
```

- Ethernet ortamını segmentlere ayırır.
- Kaynak MAC adreslerinden konum bilgisi öğrenebilir.
- Hedef MAC bilgisine göre frame'i iletir veya filtreler.
- Gereksiz trafiğin her segmente geçmesini azaltır.

::: {.notes}
Bridge, Ethernet segmentleri arasında frame aktarır. Hub'dan farklı olarak her frame'i koşulsuz biçimde bütün bağlantılara tekrarlamaz. MAC adreslerinden yararlanarak bir frame'in başka bir segmente geçirilip geçirilmeyeceğine karar verebilir.

Kaynak ve hedef aynı segmentteyse bridge frame'i diğer segmente aktarmayabilir. Bridge kavramı, MAC tabanlı filtreleme ile modern Ethernet switch'inin çalışma mantığı arasında doğrudan bağlantı kurar.
:::

---

## Switch

```text
           port 1 ── PC A
                  |
PC B ── port 2 [ SWITCH ] port 3 ── PC C
                  |
           port 4 ── PC D
```

- Ethernet frame'lerini portlar arasında iletir.
- MAC adresleri ile portlar arasındaki ilişkileri öğrenir.
- Hedef biliniyorsa ilgili porta iletim yapar.
- Her uçla ayrı point-to-point bağlantı kurabilir.

::: {.notes}
Switch, yerel Ethernet iletişiminin merkezindeki ara cihazdır. Bir portundan aldığı frame'in kaynak MAC adresini kullanarak adresin hangi bağlantıda bulunduğunu öğrenir. Ardından hedef MAC adresine göre frame'in hangi porta iletileceğini belirler.

Modern anahtarlamalı Ethernet'te her uç cihaz ile switch portu arasında ayrı bir bağlantı bulunur. Full-duplex çalışan bu bağlantılar ortak elektriksel ortam oluşturmaz ve collision meydana gelmez. Switch yalnızca daha hızlı bir hub değildir; frame içindeki adres bilgisini değerlendirir.
:::

---

## Hub, Bridge ve Switch Gelişimi

| Yapı | Temel davranış | Sonuç |
|---|---|---|
| Hub | Sinyali diğer portlara tekrarlar | Ortak ortam ve gereksiz trafik |
| Bridge | Segmentler arasında MAC'e göre filtreler | Trafik segmentlere ayrılır |
| Switch | Çok sayıda portta MAC tabanlı iletim yapar | Port başına ayrı bağlantı |

::: {.notes}
Hub bütün cihazları aynı paylaşılan Ethernet ortamında tutar. Bridge ağı segmentlere ayırarak her frame'in bütün bölümlere taşınmasını önler. Switch bu MAC tabanlı filtreleme ve iletim yaklaşımını çok sayıda porta uygular.

Bu gelişim yalnızca cihazların hızlanması değildir. Ağ davranışı ortak ortamdan, frame'lerin hedef bilgisine göre seçilen bağlantılara iletildiği anahtarlamalı yapıya dönüşmüştür.
:::

---

## Router

```text
[Yerel ağ A] ── [ ROUTER ] ── [Yerel ağ B]
```

- Farklı ağları birbirine bağlar.
- Ağlar arasındaki paket iletimine aracılık eder.
- Yerel switch ile aynı görevi üstlenmez.

::: {.notes}
Switch'in temel görevi aynı yerel Ethernet yapısındaki frame'leri uygun portlara iletmektir. Router ise farklı ağlar arasındaki paketlerin ilerlemesine aracılık eder. Bu nedenle switch ve router aynı bağlantı problemine çözüm değildir.

Router'ın karar mekanizması, yerel Ethernet tesliminde kullanılan switch MAC tablosundan farklıdır. Bu ayrım, tek bir yerel ağ içindeki teslim ile ağlar arasındaki iletimin birbirine karıştırılmasını önler.
:::

---

## Access Point

```text
[Kablosuz istemci] ))) [ ACCESS POINT ] ── [Switch] ── [LAN]
```

- Kablosuz istemcilerin yerel ağa katılmasını sağlar.
- Kablosuz bağlantı ile kablolu LAN arasında erişim noktası oluşturur.
- Router olmak zorunda değildir.

::: {.notes}
Access point, kablosuz istemcilerin yerel ağa bağlanmasını sağlar. Kablosuz cihazlardan aldığı trafiği bağlı olduğu yerel ağ yapısına taşır ve ters yöndeki trafiği kablosuz istemcilere ulaştırır.

Bir access point'in temel rolü farklı ağlar arasında yönlendirme yapmak değildir. Ev tipi birleşik cihazlarda access point ve router işlevleri aynı kutuda bulunabildiği için bu iki görev gündelik kullanımda karıştırılabilir.
:::

---

## Firewall

```text
[Ağ / sistem] ── [ FIREWALL: güvenlik politikası ] ── [Diğer ağ / sistem]
```

- Ağ trafiğini belirlenen güvenlik politikasına göre denetler.
- İzin verilen ve engellenen iletişimleri ayırır.
- Donanım, yazılım veya birleşik cihaz işlevi olabilir.

::: {.notes}
Firewall, ağ trafiğine güvenlik politikası uygular. Politika, hangi iletişimlerin geçmesine izin verileceğini ve hangilerinin engelleneceğini belirler. Böylece ağlar veya sistemler arasındaki trafik kontrolsüz biçimde aktarılmaz.

Firewall bağımsız bir cihaz, bir işletim sistemi yazılımı veya başka bir ağ cihazıyla birleştirilmiş işlev olabilir. Temel rolü trafik iletmekten çok, trafiğin güvenlik koşullarına uygunluğunu denetlemektir.
:::

---

## Modem ve Erişim Teknolojisi

```text
[Yerel ağ] ── [ MODEM / erişim birimi ] ── [Servis sağlayıcı erişim ağı]
```

- Yerel ağ ile erişim teknolojisi arasında gerekli uyarlamayı sağlar.
- Kullanılan teknolojiye uygun sinyal veya iletişim biçimini üretir.
- Tek başına “interneti dağıtan cihaz” anlamına gelmez.

::: {.notes}
Modem, yerel ağın servis sağlayıcının kullandığı erişim teknolojisiyle iletişim kurabilmesini sağlayan uç birimdir. Gerekli dönüşüm ve uyarlama kullanılan erişim teknolojisine göre değişir. Modemi yalnızca genel bir dijital ve analog dönüştürücü olarak tanımlamak bütün kullanım biçimlerini kapsamaz.

Gündelik dilde modem adı verilen ev cihazı çoğu zaman erişim birimi, router, Ethernet switch, access point ve firewall işlevlerini tek kutuda birleştirir. Kutunun tek olması, bu işlevlerin kavramsal olarak aynı olduğu anlamına gelmez.
:::

---

## Ethernet

Ethernet, kablolu yerel ağ iletişiminde kullanılan bir teknoloji ailesidir.

```text
[Ethernet arayüzü] ── frame ── [Switch] ── frame ── [Ethernet arayüzü]
```

- Yerel iletişim frame'ler hâlinde yürütülür.
- Frame kaynak ve hedef MAC bilgisi taşır.
- Switch frame'leri MAC bilgisine göre iletir.

::: {.notes}
Ethernet tek bir kablo adı veya tek bir hız değildir. Kablolu yerel ağlarda frame biçimini, adreslemeyi ve ortama erişim davranışını tanımlayan bir teknoloji ailesidir.

Modern yerel ağlarda uç sistemin Ethernet arabirimi bir frame üretir. Switch frame'i alır, içindeki kaynak ve hedef MAC adreslerini değerlendirir ve uygun bağlantıya iletir. NIC, Ethernet frame'i, MAC adresi ve switch tek bir teslim sürecinde birleşir.
:::

---

## Ethernet Frame

```text
┌─────────────┬───────────┬─────────────┬─────────┬─────────┐
│ Hedef MAC   │ Kaynak MAC│ Type/Length │ Payload │   FCS   │
└─────────────┴───────────┴─────────────┴─────────┴─────────┘
```

- **Hedef MAC:** Yerel teslimin hedefi
- **Kaynak MAC:** Frame'i gönderen arayüz
- **Type/Length:** Taşınan verinin türü veya uzunluk bilgisi
- **Payload:** Taşınan veri
- **FCS:** İletim hatalarını algılamaya yardımcı olan denetim bilgisi

::: {.notes}
Frame, Ethernet'in yerel iletişimde kullandığı veri birimidir. Payload alanı taşınan veriyi içerir. Ethernet bu veriye yerel teslim ve hata denetimi için gerekli alanları ekler.

Kaynak ve hedef MAC alanları 48 bittir. Switch kaynak alanını adres öğrenmek, hedef alanını ise iletim kararını vermek için kullanır. FCS, frame'in iletim sırasında bozulup bozulmadığını algılamaya yardımcı olur; bozuk frame'i düzeltmez.
:::

---

## Frame Neden İki MAC Adresi Taşır?

```text
Kaynak MAC                      Hedef MAC
AA:AA:AA:AA:AA:AA              BB:BB:BB:BB:BB:BB
        \                         /
         └──── Ethernet frame ───┘
```

- Kaynak bilgisi frame'in hangi arayüzden geldiğini gösterir.
- Hedef bilgisi yerel teslimin hangi arayüze yönelik olduğunu gösterir.
- Switch iki alanı farklı amaçlarla kullanır.

::: {.notes}
Kaynak MAC adresi frame'i oluşturan Ethernet arayüzünü, hedef MAC adresi ise frame'in yerel ağdaki hedefini belirtir. İki adres hem göndericinin tanınmasını hem de teslim kararının verilmesini sağlar.

Switch kaynak MAC adresinden adres ile giriş portu arasındaki ilişkiyi öğrenir. Hedef MAC adresini ise frame'in hangi porta iletileceğini belirlemek için arar. Öğrenme ve iletim kararı arasındaki temel ayrım budur.
:::

---

## MAC Adresi

```text
00:1A:2B:3C:4D:5E
└──────┬──────┘
       48 bit
```

- Ethernet arayüzüyle ilişkilidir.
- Temel biçimi 48 bittir.
- Genellikle altı hexadecimal ikiliyle gösterilir.
- Yerel Ethernet tesliminde kullanılır.

::: {.notes}
MAC, Media Access Control ifadesinin kısaltmasıdır. Ethernet arayüzleri için yaygın MAC adresi uzunluğu 48 bittir. Adres, okunabilirliği artırmak için hexadecimal rakamlarla altı grup hâlinde gösterilebilir. Hexadecimal gösterim adresin yazılış biçimidir.

Bir cihazın kablolu ve kablosuz arabirimleri farklı MAC adreslerine sahip olabilir. Bu durum adresin cihazın tamamından çok ağ arabirimiyle ilişkili olduğunu gösterir.
:::

---

## MAC Adresinin Kaynağı

```text
00:1A:2B : 3C:4D:5E
   OUI      arayüze ayrılan bölüm
```

- Evrensel olarak yönetilen adreslerde üreticiye ayrılan bir OUI bulunabilir.
- Adres donanımla birlikte atanabilir.
- Yazılım veya sanallaştırma ortamı farklı bir adres kullanabilir.

**MAC adresi mutlak biçimde değişmez değildir.**

::: {.notes}
Üreticiler, evrensel olarak yönetilen MAC adreslerinin bir bölümünde IEEE tarafından tahsis edilen Organizationally Unique Identifier bilgisini kullanabilir. Kalan bölüm üretici tarafından arayüzü ayırt edecek biçimde atanır.

Bu yapı bütün MAC adreslerinin fabrikada kalıcı ve değiştirilemez olduğu anlamına gelmez. İşletim sistemi bir arayüz için farklı bir adres yapılandırabilir. Sanal makineler ve gizlilik amacıyla adres rastgeleleştiren sistemler de yazılımsal olarak oluşturulan MAC adresleri kullanabilir.
:::

---

## Ethernet Hedefleme Biçimleri

| Hedefleme | Frame'in amacı | Temel örnek |
|---|---|---|
| Unicast | Tek bir hedef arayüze ulaşmak | PC-A'dan PC-B'ye frame |
| Broadcast | Yerel ağdaki bütün ilgili arayüzlere ulaşmak | `FF:FF:FF:FF:FF:FF` |
| Multicast | Belirli bir alıcı grubuna ulaşmak | Gruba yönelik MAC hedefi |

::: {.notes}
Unicast frame tek bir hedef MAC adresine yöneliktir. Switch hedef adresi öğrendiyse frame'i yalnızca ilgili bağlantıya iletebilir.

Broadcast frame ilgili yerel ağdaki bütün cihazlara yöneliktir. Ethernet broadcast hedef adresi `FF:FF:FF:FF:FF:FF` biçiminde gösterilir. Multicast ise tek bir cihaz yerine belirli bir alıcı grubunu hedefler.
:::

---

## Switch'in Temel Sorusu

```text
Frame port 1'den geldi

Kaynak MAC: AA:AA:AA:AA:AA:AA
Hedef MAC:  BB:BB:BB:BB:BB:BB
```

Switch iki ayrı işlem yapar:

1. Kaynak MAC adresinin yerini öğrenir.
2. Hedef MAC adresine göre iletim kararı verir.

::: {.notes}
Switch'e bir frame ulaştığında frame'in geldiği port bellidir. Frame başlığındaki kaynak MAC adresi, o adrese hangi port üzerinden ulaşılabileceğini gösterir. Switch bu ilişkiyi MAC adres tablosuna kaydedebilir veya mevcut kaydı güncelleyebilir.

Öğrenme işleminden sonra switch hedef MAC adresini tablosunda arar. Hedefin bilinmesi veya bilinmemesi uygulanacak iletim davranışını değiştirir.
:::

---

## Kaynak MAC Adresinden Öğrenme

```text
PC-A ── port 1 ──> [ SWITCH ]

Gelen frame: kaynak MAC = AA:AA:AA:AA:AA:AA

MAC tablosu:
AA:AA:AA:AA:AA:AA  →  port 1
```

**Switch adresi kaynak MAC alanından öğrenir.**

::: {.notes}
PC-A'nın gönderdiği frame switch'in 1 numaralı portuna ulaştığında switch kaynak MAC alanını okur. Kaynak adres AA ise bu adrese port 1 üzerinden ulaşılabileceği sonucuna varır ve ilişkiyi MAC tablosuna ekler.

Aynı kaynak daha sonra farklı bir porttan görülürse switch kaydı yeni giriş portuna göre güncelleyebilir. Switch hedef MAC adresinden konum öğrenmez. Hedef adres yalnızca iletim kararında kullanılır.
:::

---

## Hedef MAC Adresini Arama

```text
Hedef MAC tabloda mı?

Evet ──> Kayıtlı portu değerlendir
Hayır ─> Gelen port dışındaki uygun portlara ilet
```

- Bilinen unicast hedef: ilgili porta iletim
- Bilinmeyen unicast hedef: flooding
- Broadcast hedef: uygun diğer portlara yayma

::: {.notes}
Switch hedef MAC adresini tablosunda bulduğunda frame yalnızca gerekli bağlantıya iletilebilir. Hedef adres tabloda bulunmuyorsa switch hedefin hangi portta olduğunu henüz bilmiyordur. Frame gelen port dışında uygun diğer portlara iletilir. Bu davranış unknown unicast flooding olarak adlandırılır.

Broadcast frame'ler de hedefleri gereği uygun diğer portlara yayılır. Unknown unicast durumunda hedef tektir, fakat konumu bilinmez. Broadcast durumunda frame'in amacı bütün ilgili cihazlara ulaşmaktır.
:::

---

## Bilinen ve Bilinmeyen Unicast

:::: {.columns}

::: {.column width="48%"}
### Bilinen hedef

```text
AA... → port 1
BB... → port 2
```

Hedef `BB...` ise frame yalnız port 2'ye iletilir.
:::

::: {.column width="48%"}
### Bilinmeyen hedef

```text
BB... → tabloda yok
```

Frame gelen port dışındaki uygun portlara iletilir.
:::

::::

::: {.notes}
Bilinen unicast hedef için switch tablodaki port bilgisini kullanır ve frame'i yalnızca ilgili bağlantıya iletir. Hedef adres frame'in geldiği portla aynı portta kayıtlıysa switch frame'i başka bir porta iletmez.

Unknown unicast hedef için switch hedefin bağlantısını bilmediğinden flooding uygular. Hedef olmayan cihazlar frame'i fiziksel olarak alabilir, ancak hedef MAC adresi kendilerine ait olmadığı için frame'i teslim almaz. Flooding, switch portlarının ortak bir collision domain oluşturduğu anlamına gelmez.
:::

---

## Broadcast Frame

```text
Hedef MAC = FF:FF:FF:FF:FF:FF

                ┌── PC-B
PC-A ── [ SWITCH ]
                ├── PC-C
                └── PC-D
```

- Frame bütün ilgili cihazlara yöneliktir.
- Switch frame'i geldiği port dışındaki uygun portlara iletir.
- Switch kaynak MAC adresini yine öğrenebilir.

::: {.notes}
Broadcast frame tek bir hedefe değil, ilgili yerel ağdaki bütün cihazlara yöneliktir. Switch hedef adresin broadcast olduğunu gördüğünde frame'i geldiği port dışındaki uygun portlara iletir.

Frame'in hedefi broadcast olsa da kaynak MAC alanı belirli bir göndericiye aittir. Switch bu nedenle broadcast frame'den de kaynak adres ile giriş portu ilişkisini öğrenebilir.
:::

---

## İlk Frame: PC-A'dan PC-B'ye

```text
PC-A             SWITCH              PC-B       PC-C
AA... ──port 1── [     ] ──port 2── BB...       CC...
                     └─────port 3───────────────┘

Frame: kaynak AA... / hedef BB...
Başlangıç MAC tablosu: boş
```

1. Switch `AA... → port 1` ilişkisini öğrenir.
2. `BB...` tabloda bulunmaz.
3. Frame port 2 ve port 3'e iletilir.
4. Yalnız PC-B frame'i hedef olarak kabul eder.

::: {.notes}
PC-A'nın PC-B'ye gönderdiği frame port 1'den gelir. Switch önce kaynak MAC adresi AA ile port 1 arasındaki ilişkiyi kaydeder.

Hedef BB tabloda bulunmadığı için switch frame'i port 2 ve port 3'e iletir. PC-B hedef adresin kendisine ait olduğunu görerek frame'i kabul eder. PC-C frame'i alabilse de hedef MAC adresi kendi adresi olmadığı için teslim almaz.
:::

---

## Yanıt Frame'i: PC-B'den PC-A'ya

```text
PC-A             SWITCH              PC-B
AA... ──port 1── [     ] ──port 2── BB...

Frame: kaynak BB... / hedef AA...

MAC tablosu:
AA... → port 1
BB... → port 2
```

1. Switch `BB... → port 2` ilişkisini öğrenir.
2. Hedef `AA...` tabloda bulunur.
3. Yanıt yalnız port 1'e iletilir.

::: {.notes}
PC-B yanıt frame'i gönderdiğinde frame switch'e port 2 üzerinden gelir. Switch kaynak MAC adresi BB ile port 2 arasındaki ilişkiyi öğrenir. Böylece tabloda hem PC-A hem de PC-B için port bilgisi bulunur.

Yanıtın hedefi AA adresidir. Bu adres port 1 ile eşleştirildiği için switch frame'i yalnızca port 1'e iletir. Öğrenilmiş kayıtlar kullanıldığı sürece sonraki iletişimlerde gereksiz flooding yapılmaz.
:::

---

## Switch Karar Akışı

```text
Frame porta gelir
       ↓
Kaynak MAC + giriş portu öğrenilir veya güncellenir
       ↓
Hedef MAC tabloda aranır
       ↓
       ├─ Bilinen unicast ──> ilgili porta ilet
       ├─ Bilinmeyen unicast > diğer uygun portlara ilet
       └─ Broadcast ─────────> diğer uygun portlara ilet
```

::: {.notes}
Switch davranışı iki ana aşamada özetlenebilir. Öğrenme aşaması kaynak MAC adresine ve frame'in geldiği porta dayanır. İletim aşaması hedef MAC adresinin tablodaki durumuna dayanır.

MAC tablosu, adresleri fiziksel portlarla ilişkilendirerek yerel Ethernet trafiğinin seçici biçimde iletilmesini sağlar. Bilinen unicast hedef seçici olarak iletilir. Bilinmeyen unicast hedef ve broadcast frame uygun diğer portlara gönderilir.
:::

---

## Cihazların Aynı Ağ Üzerindeki Rolleri

```text
Kablosuz istemci ))) Access Point ─┐
                                   |
PC ─ NIC ─────────────────────── Switch ── Firewall / Router ── Modem ── Erişim ağı
                                   |
Sunucu ─ NIC ──────────────────────┘
```

- NIC, uç sistemi Ethernet bağlantısına katar.
- Switch, yerel frame'leri MAC bilgisine göre iletir.
- Access point, kablosuz istemciyi LAN'a bağlar.
- Router, farklı ağlar arasındaki iletişime aracılık eder.
- Firewall, trafiğe güvenlik politikası uygular.
- Modem, erişim teknolojisiyle gerekli uyarlamayı sağlar.

::: {.notes}
Uç sistemin NIC'i Ethernet frame'lerini gönderir ve alır. Switch aynı yerel ağ içindeki frame'leri kaynak ve hedef MAC bilgileriyle işler. Kablosuz istemciler access point üzerinden yerel yapıya katılabilir.

Trafik başka bir ağa gidecekse router ağlar arasındaki geçişe aracılık eder. Firewall trafiği güvenlik politikasına göre denetleyebilir. Modem veya başka bir erişim birimi servis sağlayıcının erişim teknolojisiyle gerekli uyarlamayı sağlar.

İşlevler ayrı cihazlarda bulunabileceği gibi tek bir fiziksel kutuda da birleşebilir. Ağ davranışını anlamak için kutu sayısından çok her işlevin çözdüğü probleme bakılır.
:::

---

## Yerel Ethernet İletişiminin Ana Zinciri

```text
uç sistem
   ↓
NIC ve MAC adresi
   ↓
Ethernet frame
   ↓
switch'in kaynak MAC öğrenmesi
   ↓
hedef MAC araması
   ↓
uygun porta iletim veya flooding
   ↓
hedef Ethernet arayüzü
```

::: {.notes}
Yerel Ethernet iletişimi birbirinden kopuk cihaz ve adres kavramlarından oluşmaz. Uç sistemin ağ arabirimi, kaynak ve hedef MAC bilgilerini taşıyan bir Ethernet frame'i gönderir. Switch frame'in kaynak adresinden konum bilgisi öğrenir ve hedef adresine göre iletim kararı verir.

Hedef MAC adresi tabloda biliniyorsa frame seçilen porta iletilir. Hedef bilinmiyorsa switch geldiği port dışındaki uygun portlara flooding uygular. Bu zincir, modern anahtarlamalı yerel ağda cihaz rollerini ve Ethernet teslim mekanizmasını tek bir süreç içinde açıklar.
:::