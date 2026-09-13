---
title: "IPv4 Adresleme Temelleri"
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

> Her ağ kartının fabrikada basılmış benzersiz bir 48-bit MAC adresi varken, İnternet neden bu adreslerle doğrudan çalışamaz? Neden ayrıca 32-bitlik bir IP adresine ve alt ağ maskesine ihtiyaç duyarız?

- MAC düz (flat) bir adresken, IP adresi nasıl hiyerarşi sağlar?
- Bir bilgisayar kendi IP adresine ve alt ağ maskesine bakarak hangi ağda olduğunu nasıl hesaplar?
- Ağ adresi ve yayın (broadcast) adresi neden bir bilgisayara statik olarak atanamaz?

::: {.notes}
Bu hafta bilgisayar ağlarının en kritik matematiksel ve mantıksal omurgasına giriyoruz: **IPv4 Adresleme**.

Bir paketin dünya üzerindeki milyarlarca cihaz arasından hedefi bulabilmesi, posta sistemindeki şehir/ilçe/sokak hiyerarşisine benzer mantıksal bir adresleme mimarisi gerektirir. İkili (binary) taban mantığını, maske ile yapılan AND işlemini ve özel IP bloklarını bu derste inşa edeceğiz.
:::

---

## Neden Mantıksal Adresleme (IP)?

MAC adresi bir insanın T.C. Kimlik Numarası gibidir; cihazı tekil olarak tanımlar ancak **nerede olduğunu söylemez**.

- **MAC Adresinin Sınırı:** Dünyadaki tüm yönlendiriciler (router) her ağ kartının MAC adresini tutmaya kalksaydı, milyarlarca satırlık devasa ve aranamaz tablolar oluşurdu.
- **IP Adresinin Gücü:** IP adresi posta adresi gibidir:
  - Ülke / Şehir / İlçe $\rightarrow$ **Ağ Kısmı (Network ID)**
  - Bina / Kapı Numarası $\rightarrow$ **Host Kısmı (Host ID)**

> Bir paket Amerika'dan yola çıktığında yönlendiriciler paket Türkiye sınırına gelene kadar sadece "Türkiye" ağına bakar; alıcının tam olarak hangi bilgisayar olduğunu bilmeleri gerekmez!

::: {.notes}
Hiyerarşik adresleme, İnternet'in küresel ölçekte çalışabilmesinin tek nedenidir. Yönlendiriciler tek tek bilgisayarları değil, ağ bloklarını (Network ID) yönlendirir.
:::

---

## IPv4 Adresinin Anatomisi

IPv4 adresi toplam **32 bit** uzunluğundadır. İnsanların okuyabilmesi için her biri 8 bitten oluşan 4 gruba (**Oktet**) ayrılır ve noktalı ondalık (Dotted-Decimal) biçimde yazılır:

```text
Oktet 1   .   Oktet 2   .   Oktet 3   .   Oktet 4
  192     .     168     .      1      .     10      (Ondalık Gösterim)
   │             │             │             │
11000000  .  10101000  .  00000001  .  00001010     (İkili - Binary Gösterim)
 8 bit         8 bit         8 bit         8 bit    = TOPLAM 32 BİT
```

Her oktet ikili tabanda en az $00000000_2$ ($0$), en fazla $11111111_2$ ($255$) değerini alabilir.
Dolayısıyla bir IPv4 adresindeki sayılar $0$ ile $255$ arasında olmak zorundadır.

::: {.notes}
Öğrencilerin yaptığı yaygın hatalardan biri `192.168.1.256` gibi geçersiz adresler yazmaktır. 8 bitin alabileceği maksimum değer $2^8 - 1 = 255$'tir; 256 diye bir oktet değeri matematiksel olarak var olamaz.
:::

---

## İkili ve Ondalık Dönüşümü (Sihirli Tablo)

Bir okteti ikili tabandan ondalığa çevirirken 2'nin kuvvetleri kullanılır:

| Pozisyon Değeri | $2^7$ | $2^6$ | $2^5$ | $2^4$ | $2^3$ | $2^2$ | $2^1$ | $2^0$ | Toplam |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Ağırlık** | **128** | **64** | **32** | **16** | **8** | **4** | **2** | **1** | — |
| **Örnek 1:** `11000000` | 128 | 64 | 0 | 0 | 0 | 0 | 0 | 0 | **192** |
| **Örnek 2:** `10101000` | 128 | 0 | 32 | 0 | 8 | 0 | 0 | 0 | **168** |
| **Örnek 3:** `00001010` | 0 | 0 | 0 | 0 | 8 | 0 | 2 | 0 | **10** |

::: {.notes}
Bu 8 sütunlu tablo ($128, 64, 32, 16, 8, 4, 2, 1$), ağ hesaplamalarının temelidir. Tahtada bu değerlerin toplamı üzerinden pratik dönüşümler yaptırılacaktır.
:::

---

## Alt Ağ Maskesi (Subnet Mask) ve Mantıksal AND İşlemi

Bir IP adresinin tek başına hangi kısmının "Ağ" (Network), hangi kısmının "Host" olduğunu bilemeyiz. Bunu belirleyen anahtar **Alt Ağ Maskesi (Subnet Mask)**'dir.

- Maskede bit değeri **1** olan kısımlar $\rightarrow$ **Ağ Kısmı (Network)**
- Maskede bit değeri **0** olan kısımlar $\rightarrow$ **Host Kısmı (Host)**

Cihaz kendi ağ adresini bulmak için IP adresi ile Maskeyi **bit düzeyinde mantıksal VE (AND)** işlemine sokar:

```text
IP Adresi:    192.168.1.10   ──>  11000000.10101000.00000001.00001010
Maske:        255.255.255.0  ──>  11111111.11111111.11111111.00000000 (AND)
─────────────────────────────────────────────────────────────────────────────
Ağ Adresi:    192.168.1.0    ──>  11000000.10101000.00000001.00000000
```

> **Kural:** $1 \land 1 = 1$, diğer tüm durumlarda sonuç $0$'dır!

::: {.notes}
AND işlemi bilgisayar donanımı için en hızlı mantıksal kapı işlemidir. Cihaz, hedef IP adresi ile kendi alt ağ maskesini AND'ler. Çıkan sonuç kendi ağ adresiyle aynıysa "Hedef benimle aynı yerel ağda, switch üzerinden doğrudan konuşabilirim" der. Sonuç farklıysa "Hedef uzak ağda, paketi router'a göndermeliyim" kararını verir.
:::

---

## Bir Ağdaki Kritik Adresler

Bir IP bloğunda her adres bilgisayarlara verilemez. Her alt ağda iki özel adres ayrılmıştır:

1. **Ağ Adresi (Network Address):** Host bitlerinin tamamı **0** olan adrestir. Ağın kendisini temsil eder (Örn: `192.168.1.0`). Hiçbir cihaza atanamaz.
2. **Yayın Adresi (Broadcast Address):** Host bitlerinin tamamı **1** olan adrestir. O ağdaki tüm cihazlara aynı anda seslenmek için kullanılır (Örn: `192.168.1.255`). Hiçbir cihaza atanamaz.
3. **Kullanılabilir Host Aralığı (Usable Host Range):** Ağ Adresi + 1 ile Yayın Adresi - 1 arasındaki adreslerdir (Örn: `192.168.1.1` – `192.168.1.254`).

$$
\text{Toplam Adres Sayısı} = 2^h \qquad\text{ve}\qquad \text{Kullanılabilir Host Sayısı} = 2^h - 2
$$
*(Burada $h$, host bitlerinin sayısıdır).*

::: {.notes}
Formüldeki $-2$ ifadesi daima bu iki adresi temsil eder: biri Ağ Adresi, diğeri Broadcast Adresi. Eğer bir alt ağda 8 host biti varsa, toplam $2^8 = 256$ adres vardır; ancak cihazlara atanabilecek kullanılabilir adres sayısı $256 - 2 = 254$'tür.
:::

---

## Özel IPv4 Blokları (RFC 1918 Private IP)

İnternet'te IPv4 adreslerinin tükenmesini önlemek için belirli bloklar yerel ağlar için "Özel (Private)" olarak ayrılmıştır.

| Sınıf | Özel IP Aralığı | Varsayılan Maske | Prefix |
|---|---|---|---|
| **A Sınıfı** | `10.0.0.0` — `10.255.255.255` | `255.0.0.0` | `/8` |
| **B Sınıfı** | `172.16.0.0` — `172.31.255.255` | `255.240.0.0` | `/12` |
| **C Sınıfı** | `192.168.0.0` — `192.168.255.255` | `255.255.0.0` | `/16` |

- **Özellikleri:** Bu adresler İnternet omurgasında yönlendirilmez (Non-Routable).
- Dünyadaki milyonlarca ev ve şirket aynı anda `192.168.1.X` bloğunu ücretsiz ve çakışma yaşamadan kullanabilir.
- İnternete çıkarken bu özel adresler genel (public) bir IP'ye dönüştürülür (**NAT**).

::: {.notes}
Evdeki modeminizin arkasındaki bilgisayarınızın IP'si büyük ihtimalle `192.168.1.X` veya `10.0.0.X`'tir. Komşunuzun evindeki bilgisayarın IP'si de aynıdır. Bu bir çakışma yaratmaz çünkü bu adresler yerel ağın içinde yaşar; dış dünyaya çıkarken modemin genel IP'si kullanılır.
:::

---

## Diğer Özel Amaçlı IPv4 Adresleri

- **Loopback (Geri Döngü - `127.0.0.1`):** Cihazın kendi TCP/IP protokol yığınını test etmek için kullanılır. Paket ağ kartından dışarı çıkmaz; işletim sisteminin içinde geri döner (`ping 127.0.0.1` çalışıyorsa TCP/IP yığını sağlamdır).
- **APIPA (Automatic Private IP Addressing - `169.254.0.0/16`):** Bir bilgisayar DHCP'den IP alamazsa (sunucu çöktüyse veya kablo takılı ama bağlantı yoksa), işletim sistemi cihaza geçici olarak `169.254.X.X` aralığından bir adres atar.
  - *Teşhis İpucu:* Bir bilgisayarda `169.254.X.X` görüyorsanız, ilk kontrol edeceğiniz şey DHCP sunucudur!

::: {.notes}
Ağ destek uzmanlarının ilk baktığı şeylerden biri APIPA adresidir. Kullanıcı "ağa bağlanamıyorum" dediğinde `ipconfig` çıktısında 169.254 görüyorsanız, switch'e bağlı olsa bile cihazın DHCP sunucusuna erişemediği hemen teşhis edilir.
:::

---

## Özet ve Gelecek Hafta

Bu derste öğrendiklerimiz:
- Mantıksal IP adreslemesinin hiyerarşik yönlendirme gücü,
- 32-bit IPv4 yapısı ve ikili-ondalık dönüşüm tablosu,
- Alt ağ maskesi ve ağ adresini bulan mantıksal AND işlemi,
- Ağ Adresi, Yayın (Broadcast) Adresi ve Kullanılabilir Host ($2^h - 2$) formülü,
- RFC 1918 Özel IP blokları (`10.X`, `172.16.X`, `192.168.X`),
- Loopback (`127.0.0.1`) ve APIPA (`169.254.X.X`).

**Gelecek Hafta:** Alt ağlara bölme (Subnetting), 2000 host problemi, CIDR ve prefix mantığı, adım adım alt ağ hesabı ve adres planlaması.
