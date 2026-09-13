---
title: "Alt Ağlara Bölme (Subnetting) ve CIDR"
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

> Bir üniversite kampüsünde veya büyük bir şirkette 2000 bilgisayarın tamamını tek bir devasa yerel ağa (aynı switch bloğuna) bağlarsak ne olur? Neden büyük bir ağı küçük parçalara (alt ağlara) bölmek zorundayız?

- Broadcast fırtınası (broadcast storm) nedir ve ağı nasıl kilitler?
- Host bitlerinden ağ bitlerine "bit ödünç almak" ne anlama gelir?
- CIDR prefix (/24, /26, /30) mantığıyla IP adres israfı nasıl önlenir?

::: {.notes}
Bu hafta ağ mühendisliğinin en teknik ve pratik becerisini inşa ediyoruz: **Alt Ağlara Bölme (Subnetting) ve CIDR**.

Öğrenciler genellikle subnetting'i karmaşık bir matematik problemi gibi görür. Oysa subnetting'in arkasındaki motivasyon son derece basittir: devasa bir ağın gürültüsünü (broadcast) bölmek, departmanlar arası güvenliği sağlamak ve sınırlı IP adreslerini verimli yönetmektir.
:::

---

## 2000 Host Problemi: Neden Subnetting?

Eski sunumlardan gelen özgün pedagojik senaryo: Bir şirkette **2000 adet bilgisayar** var.

Senaryo A: Tüm cihazları tek bir C veya B sınıfı ağda (`172.16.0.0/16`) toplamak.
- **Broadcast Fırtınası:** Bir bilgisayar ARP ya da DHCP broadcast yaptığında, ağdaki 1999 bilgisayarın tamamı bu paketi işlemek için işlemcisini (CPU) yorar. Ağ trafiği kilitlenir.
- **Güvenlik Zaafı:** Muhasebe, İnsan Kaynakları, Öğrenci ve Misafir bilgisayarları aynı yerel ağda birbirine doğrudan erişebilir; ağ trafiği izole edilemez.
- **Yönetim Zorluğu:** Tek bir arıza veya virüs tüm ağa anında yayılır.

> **Çözüm:** Büyük ağı mantıksal ve fiziksel olarak daha küçük bağımsız parçalara (**Subnet**) bölmek! Her departmana ayrı bir alt ağ tahsis etmek ve aralarına Router koymak!

::: {.notes}
Subnetting yalnız matematiksel bir hesaplama değildir; bir ağ mimarisi tasarımıdır. Alt ağlara böldüğümüzde broadcast sınırlarını küçültürüz, güvenliği artırırız ve ağ trafiğini router'lar üzerinden denetlenebilir hale getiririz.
:::

---

## CIDR ve Prefix (/n) Gösterimi

Tarihsel sınıflı (Classful) mimaride A sınıfı (/8), B sınıfı (/16) ve C sınıfı (/24) sabit bloklar vardı. Bu durum devasa IP israfına yol açıyordu (Örn. 300 bilgisayar için 65.534 hostluk B sınıfı verilmek zorundaydı).

1993 yılında **CIDR (Classless Inter-Domain Routing)** standardına geçildi:
- Maske sınırı oktet sınırına bağlı değildir; herhangi bir bit konumundan bölünebilir!
- **Prefix Gösterimi (`/n`):** Maskede soldan sağa kaç tane **1** biti olduğunu gösterir.

```text
/24  ──> 11111111.11111111.11111111.00000000 ──> 255.255.255.0   (256 adres)
/25  ──> 11111111.11111111.11111111.10000000 ──> 255.255.255.128 (128 adres)
/26  ──> 11111111.11111111.11111111.11000000 ──> 255.255.255.192 (64 adres)
/27  ──> 11111111.11111111.11111111.11100000 ──> 255.255.255.224 (32 adres)
/28  ──> 11111111.11111111.11111111.11110000 ──> 255.255.255.240 (16 adres)
/29  ──> 11111111.11111111.11111111.11111000 ──> 255.255.255.248 (8 adres)
/30  ──> 11111111.11111111.11111111.11111100 ──> 255.255.255.252 (4 adres - 2 host)
```

::: {.notes}
Prefix gösterimi yazımı son derece kolaylaştırır. `192.168.1.0 255.255.255.192` yazmak yerine doğrudan `192.168.1.0/26` yazılır.
:::

---

## Alt Ağlara Bölmenin Mantığı: Bit Ödünç Alma

Elimizde standart bir `/24` ağı olsun (`192.168.1.0/24`).
Son oktette 8 adet host biti vardır: `[00000000]`.

Ağı 4 eşit alt ağa bölmek istiyoruz:
- 4 alt ağ üretmek için kaç bit gerekir? $\mathbf{2^n \ge 4 \implies n = 2\text{ bit}}$ ödünç almalıyız!
- Bu 2 bit artık **Ağ** kısmına geçer; geriye $8 - 2 = \mathbf{6\text{ bit}}$ host için kalır.

```text
Eski Durum (/24):  [Ağ: 24 bit] . [Host: 8 bit]
Yeni Durum (/26):  [Ağ: 24 bit] . [Alt Ağ: 2 bit][Host: 6 bit]
```

- **Üretilen Alt Ağ Sayısı:** $2^n = 2^2 = \mathbf{4\text{ alt ağ}}$.
- **Alt Ağ Başına Toplam Adres:** $2^h = 2^6 = \mathbf{64\text{ adres}}$.
- **Kullanılabilir Host Sayısı:** $2^h - 2 = 64 - 2 = \mathbf{62\text{ host}}$.
- **Yeni Alt Ağ Maskesi:** `/26` $\rightarrow$ `255.255.255.192` ($128 + 64 = 192$).

::: {.notes}
Her ödünç alınan bit alt ağ sayısını iki katına çıkarırken, alt ağ başına düşen host sayısını yarıya indirir. Bu bir pastayı eşit dilimlere bölmek gibidir.
:::

---

## Blok Büyüklüğü (Magic Number) Yöntemi

Alt ağların sınırlarını tek tek ikiliye çevirmeden zihinden hesaplamanın pratik yolu: **Blok Büyüklüğü (Magic Number)**.

$$
\text{Blok Büyüklüğü} = 256 - \text{Değişen Oktetteki Maske Değeri}
$$

Örnek (`/26` için maske: `255.255.255.192`):
$$
\text{Blok Büyüklüğü} = 256 - 192 = \mathbf{64}
$$

Bu şu anlama gelir: **Alt ağlar 64'er 64'er artar!**

- 1. Alt Ağ: `192.168.1.0`
- 2. Alt Ağ: `192.168.1.64`
- 3. Alt Ağ: `192.168.1.128`
- 4. Alt Ağ: `192.168.1.192`

::: {.notes}
Blok büyüklüğü yöntemiyle tahtada ya da sınavda saniyeler içinde alt ağ sınırları yazılabilir. Değişen oktetteki son 1 bitinin pozisyon değeri (ağırlığı) doğrudan blok büyüklüğüne eşittir (/26'da 2. bitin ağırlığı 64'tür).
:::

---

## Örnek Alt Ağ Tablosu (`192.168.1.0/26`)

4 alt ağın eksiksiz planlama tablosu:

| Alt Ağ # | Ağ Adresi | İlk Kullanılabilir Host | Son Kullanılabilir Host | Yayın (Broadcast) Adresi |
|:---:|---|---|---|---|
| **1** | `192.168.1.0` | `192.168.1.1` | `192.168.1.62` | `192.168.1.63` |
| **2** | `192.168.1.64` | `192.168.1.65` | `192.168.1.126` | `192.168.1.127` |
| **3** | `192.168.1.128` | `192.168.1.129` | `192.168.1.190` | `192.168.1.191` |
| **4** | `192.168.1.192` | `192.168.1.193` | `192.168.1.254` | `192.168.1.255` |

Kritik Kontrol Kuralı:
- Bir alt ağın Broadcast Adresi, bir sonraki alt ağın Ağ Adresinin 1 eksiğidir! (Örn: $64 - 1 = 63$).
- Kullanılabilir aralık, Ağ Adresinin 1 fazlası ile Broadcast Adresinin 1 eksiği arasındadır.

::: {.notes}
Tablonun mantığı kusursuz bir yapboz gibidir; hiçbir adres boşta kalmaz, hiçbir adres birbiriyle çakışmaz. Birinci alt ağ 63'te biter, ikinci alt ağ tam 64'te başlar.
:::

---

## Noktadan Noktaya Hatlar: `/30` Prefix Standartı

İki router arasındaki seri ya da Ethernet WAN bağlantısında yalnızca 2 adet IP adresine ihtiyaç vardır (Router A ucu ve Router B ucu).

- Eğer buraya standart bir `/24` ağı verirseniz: 254 host adresinden 252 tanesi **çöpe gider**!
- CIDR Çözümü: **`/30` Prefix** (`255.255.255.252`)
  - Toplam Adres: $2^2 = 4$
  - Kullanılabilir Host: $4 - 2 = \mathbf{2\text{ adet}}$ (Router1 ve Router2 için tam yeterli!).

```text
[Router A] (10.0.0.1/30) <─────────────────> [Router B] (10.0.0.2/30)
Ağ Adresi: 10.0.0.0/30 | Broadcast: 10.0.0.3/30 | Sıfır Adres İsrafı!
```

::: {.notes}
`/30` alt ağı ağ mühendislerinin en çok kullandığı şablondur. Router'lar arası hatlarda tek bir IP bile israf edilmeden kusursuz iki uçlu bağlantı kurulur.
:::

---

## Özet ve Gelecek Hafta

Bu derste öğrendiklerimiz:
- 2000 host problemi ve broadcast alanlarını bölme zorunluluğu,
- CIDR ve prefix (`/n`) gösteriminin esnekliği,
- Host bitlerinden ödünç alma mantığı ($2^n$ alt ağ, $2^h - 2$ host),
- Blok büyüklüğü ($256 - \text{maske}$) ile hızlı alt ağ sınırları bulma,
- Adım adım alt ağ tablosu kurma,
- İki router arası hatlarda `/30` kullanımının önemi.

**Gelecek Hafta:** Yönlendirme (Routing) temelleri, varsayılan ağ geçidi (default gateway), router mimarisi ve paketlerin ağlar arası yolculuğu.
