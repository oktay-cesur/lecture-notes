---
title: "Klasik Bit ve Operatör"
subtitle: QBronze — S01
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-01-01
execute:
  echo: false
---


## {data-auto-animate=true data-auto-animate-duration="1.2"}

```{=html}
<div style="height: 72vh; display: flex; justify-content: center; align-items: center;">
  <div style="position: relative; width: 220px; height: 220px;">
    <svg data-id="pd-ring" style="position: absolute; top: 0; left: 0;"
         viewBox="0 0 100 100" width="220" height="220">
      <path d="M 64,34 A 28,28 0 1 1 36,34"
            fill="none" stroke="#6f8fcb" stroke-width="9" stroke-linecap="round"/>
    </svg>
    <svg data-id="pd-bar" style="position: absolute; top: 0; left: 0;"
         viewBox="0 0 100 100" width="220" height="220">
      <rect x="45" y="10" width="10" height="48" rx="5" fill="#6f8fcb"/>
    </svg>
  </div>
</div>
````

---

## {data-auto-animate=true data-auto-animate-duration="1.2"}

```{=html}
<div style="height:72vh; display:flex; justify-content:center; align-items:center;">
  <div style="display:flex; gap:220px; align-items:center;">

    <div style="width:220px; height:220px; display:flex; justify-content:center; align-items:center;">
      <svg data-id="pd-ring"
           viewBox="0 0 100 100"
           width="220" height="220">
        <path d="M 64,34 A 28,28 0 1 1 36,34"
              fill="none"
              stroke="#6f8fcb"
              stroke-width="9"
              stroke-linecap="round"/>
      </svg>
    </div>

    <div style="width:220px; height:220px; display:flex; justify-content:center; align-items:center;">
      <svg data-id="pd-bar"
           viewBox="0 0 100 100"
           width="220" height="220">
        <rect x="45" y="20"
              width="10" height="60"
              rx="5"
              fill="#6f8fcb"/>
      </svg>
    </div>

  </div>
</div>
```

---

## Bir Varmış Sıfır Yokmuş...

- Bilgisayarlarda her şey 01 dizileriyle tutulur
	- Ama nasıl?
- Bilgisayarlarda neleri tutuyoruz?
	- Sayılar
	- Metinler
	- Resimler
	- Dosyalar
	- Oyunlar

::: {.notes}
“Bilgisayarlarda her şey 0 ve 1 dizileriyle tutulur” cümlesini çoğu zaman duyarız. Peki bu cümle tam olarak ne söylüyor? Bir fotoğraf gerçekten 0 ve 1’lerden mi oluşur, yoksa 0 ve 1’ler fotoğrafı temsil etmek için kullanılan bir ara dil midir? Bir metin dosyasını açtığımızda harfler görüyoruz; ama bilgisayar belleğinde gerçekten harfler mi vardır, yoksa harflere karşılık gelen sayılar mı tutulur?

Bu noktada sorulması gereken temel soru şudur: Bilgisayar hangi tür şeyleri saklamak zorundadır? Sayılar, metinler, resimler, sesler, videolar, oyunlar ve programlar ilk bakışta birbirinden çok farklı görünür. Buna rağmen bilgisayar bunların hepsini aynı temel biçime indirger. O halde şu soru ortaya çıkar: Bu kadar farklı nesne nasıl olur da aynı temsil sistemiyle saklanabilir?

Günlük kullanımda bununla sürekli karşılaşırız. Bir mesaj gönderdiğimizde, bir fotoğraf çektiğimizde, bir PDF dosyası açtığımızda, bir oyunda karakter hareket ettirdiğimizde ya da bir web sayfası yüklediğimizde arka planda hep veri temsili çalışır. Ekranda gördüğümüz nesne anlamlıdır; fakat makine düzeyinde bu anlam, belirli kurallarla yorumlanan 0–1 dizileri üzerinden kurulur.

Eğer bilgisayar dünyasında her şey en sonunda 0 ve 1 dizilerine indirgeniyorsa, bu diziler nasıl anlam kazanıyor? Hangi kural bir diziyi sayı, başka bir diziyi harf, başka bir diziyi renk yapıyor? Klasik bit kavramına bu sorular üzerinden geçeceğiz.
:::

---

## 0 ve 1 ile Sayı Yazmak


::: columns  
  
::: {.column width="60%"}  

Onluk sistemde on sembol kullanırız:

$$
0,1,2,3,4,5,6,7,8,9
$$

İkilik sistemde yalnızca iki sembol kullanırız:

$$
0 \qquad 1
$$

- İki sembol yeterlidir; sadece basamak düzeni değişir
- Daha büyük sayılar daha uzun 0/1 dizileriyle yazılır

:::  
  
::: {.column width="40%"}  

| Onluk | İkilik |
|---:|---:|
| 0 | 0 |
| 1 | 1 |
| 2 | 10 |
| 3 | 11 |
| 4 | 100 |
| 5 | 101 |

:::  
  
:::



::: {.notes}
Buradaki temel fikir şu: "İki sayı kullanarak tüm doğal sayıları sistematik şekilde elde edebilir miyiz?" Evet. Onluk sistemde basamak değerleri 1, 10, 100 diye gider; ikilik sistemde 1, 2, 4, 8 diye gider.

Burada ayrıntılı ikilik dönüşüm hesabına girmek zorunda değiliz. Ama 2'nin `10`, 3'ün `11`, 4'ün `100` olması öğrencide şu fikri kurmalı: 0 ve 1 yetersiz değil; sistematik kullanıldığında tüm sayıları temsil edebilir.
:::

---

## 0 ve 1 ile Metin Yazmak


::: columns  
  
::: {.column width="60%"}  

- Her karaktere bir sayı ver
- Sayıyı ikilik biçimde sakla
- Okurken aynı tabloyu kullan
- ASCII gibi tablolar karakterleri sayılarla eşleştirir
- Böylece metin de bellekte 0/1 dizisi 

:::  
  
::: {.column width="40%"}  

| Karakter | Kod fikri |
|---|---:|
| `A` | 65 |
| `B` | 66 |
| `P` | 80 |
| `Y` | 89 |



:::

:::



::: {.notes}
PDF'deki ASCII tablosunun amacı, sayılarla metin arasında köprü kurmak. Burada tüm ASCII tablosunu vermek yerine temsil fikrini anlatmak yeterli.

Önemli vurgu: Bilgisayar "A harfi" diye özel bir fiziksel nesne tutmaz. Bellekte bir sayı tutulur; biz o sayıyı ASCII/Unicode gibi bir tabloya göre harf olarak yorumlarız. Aynı ham bit dizisi farklı yorum kurallarıyla farklı anlamlar kazanabilir.
:::

---

## Her Veri 0 ve 1'e İndirgenebilir

- Sayılar → ikilik gösterim
- Metinler → karakter kodları
- Renkler → örn. RGB: üç sayı
- Görseller → çok sayıda renk değeri
- Programlar → işlemcinin yorumladığı komut dizileri



Bilgisayar için ortak biçim:

$$
01001101\;01100101\;01110010\;\cdots
$$

- Farklı veri türleri aynı fiziksel temele iner
- Temel soru: bu 0/1 dizilerini bellekte nasıl tutacağız?

::: {.notes}
PDF'deki "Sayıları kullanarak metin ifadelerini kaydedebiliriz; renkleri 0-255 arası 3 sayı ile ifade edebiliriz; bilgisayarda tutulabilecek tüm verileri bu şekilde tutabiliriz" çizgisini burada ders anlatımına taşıyoruz.

Bu slayt kuantum öncesi klasik bilgisayar sezgisini kuruyor: bilgisayarın belleği ve işlemcisi, aslında sembolik olarak 0/1 diye anlattığımız fiziksel durumlarla çalışır. Bu bizi doğrudan bitin fiziksel yorumuna götürecek.
:::

---

## Bitin Fiziksel Yorumu

::: columns
::: {.column width="58%"}
<div data-anim="switch" data-scene="bit-switch"></div>
:::
::: {.column width="42%"}
<div data-anim="switch" data-scene="byte-switch"></div>
:::
:::

::: {.notes}
Bit fiziksel olarak herhangi bir iki durumlu sisteme karşılık gelir. Elektrik anahtarı en sezgisel örnektir: anahtar açıksa devre tamamlanamaz → 0; kapalıysa devre tamamlanır → 1.

Önemli olan fiziksel mekanizma değil, iki ayırt edilebilir durumun var olmasıdır. Transistör, manyetik disk, optik disk — hepsi bu iki-durumlu mantıkla çalışır.

Sağdaki byte animasyonunda her satıra tıklanarak bit değiştirilebilir. "Karıştır" butonu 8 biti rastgele belirler; altta oluşan ikili dizinin onluk karşılığı gösterilir. 8 bit → $2^8 = 256$ farklı desen.
:::

---

## Bit ve Byte

Bir bit iki olası durumu ayırt eder:

$$
0 \quad \text{veya} \quad 1
$$

Bir byte genellikle 8 bitten oluşur:

$$
01110011
$$

- 1 bit → iki seçenek
- 8 bit → $2^8 = 256$ farklı desen
- Bu yüzden 0-255 aralığı bilgisayar biliminde sık görünür

::: {.notes}
PDF'deki bit ve byte slaytlarının ders notuna karşılığı bu. Bit tek bir iki durumlu birim. Byte ise pratikte birlikte kullanılan 8 bitlik grup.

Öğrencinin aklında kalması gereken şey: 8 bitin 256 farklı desen üretmesi. Bu, karakter kodları ve RGB renk değerleriyle bağlantıyı açıklar. Örneğin bir renk kanalının 0-255 aralığında tutulması buradan gelir.

Buradan sonra artık soyut temsil düzeyinden matematiksel modele geçebiliriz: tek bir bitin üzerinde hangi işlemler tanımlanabilir?
:::

---

## Operatör Nedir?

- Bir **operatör**, bitin mevcut durumunu alıp yeni bir duruma götüren kuraldır
- Giriş: $0$ veya $1$
- Çıkış: $0$ veya $1$

$$
\text{operatör}: \{0, 1\} \to \{0, 1\}
$$

- Tüm tek bit operatörleri eksiksiz listelenebilir

::: {.notes}
Bir operatörü matematiksel bir fonksiyon gibi düşünün: her girişe tam olarak bir çıkış atıyor. Girişler kümesi {0, 1}, çıkışlar kümesi de {0, 1}. Tek bir bitin üzerinde tanımlanan her fonksiyon bir operatördür.

"Eksiksiz listelenebilir" dediğimizde şunu kastediyoruz: 0 girişine ne yaparsa yapsın (0 ya da 1 çıkarır) ve 1 girişine ne yaparsa yapsın (0 ya da 1 çıkarır) — toplamda 2 × 2 = 4 olasılık var. Yani tek bir bit üzerinde tanımlanabilecek operatörlerin sayısı tam olarak 4. Bu 4 operatörü teker teker yazabiliriz; sonsuz sayıda seçenek yoktur. Bu listelenebilirlik, sonraki tablolu gösterim için kritik.
:::

---

## Dört Temel Operatör — Tanım

Tek bit üzerindeki dört operatörün tamamı:

| Operatör | $0$ girişinde | $1$ girişinde |
|----------|--------------|--------------|
| Identity ($I$) | $0$ | $1$ |
| NOT | $1$ | $0$ |
| ZERO | $0$ | $0$ |
| ONE | $1$ | $1$ |

- **Identity:** Hiçbir şeyi değiştirmez
- **NOT:** Her girişi tersine çevirir
- **ZERO:** Her girişe $0$ verir
- **ONE:** Her girişe $1$ verir

::: {.notes}
Bu tabloyu sütun sütun okuyun. "0 girişinde" sütunu: 0 verildiğinde her operatörün ne döndürdüğünü söylüyor. "1 girişinde" sütunu: 1 verildiğinde.

Identity: giriş ne ise çıkış odur — hiçbir şey değişmiyor. NOT: giriş tersine çevriliyor. ZERO: giriş ne olursa olsun her zaman 0 çıkıyor. ONE: giriş ne olursa olsun her zaman 1 çıkıyor.

Bu dört operatör mümkün olan her davranışı kapsıyor. Başka bir tek-bit operatörü bulamazsınız, çünkü 0 için iki seçenek (0 veya 1) × 1 için iki seçenek (0 veya 1) = 4 toplam operatör.

Bu tablo ileride çok daha önemli hale gelecek: her satır bir "geçiş" kuralı. Matris gösterimine geçtiğimizde bu tablonun her girdisi matrisin bir elemanı olacak.
:::

---

## Tablo Gösterimi — Okuma Kuralı

Operatörleri **geçiş tablosu** olarak yazıyoruz:

$$
\text{sütunlar} = \text{başlangıç durumları}, \quad \text{satırlar} = \text{son durumlar}
$$

$$
I =
\begin{array}{c|cc}
\hookleftarrow & \mathbf{0} & \mathbf{1} \\ \hline
\mathbf{0} & 1 & 0 \\
\mathbf{1} & 0 & 1
\end{array}
$$

- $(0, 0)$ konumundaki $1$: "$0 \to 0$ geçişi var"
- $(1, 0)$ konumundaki $0$: "$0 \to 1$ geçişi yok"

::: {.notes}
Bu tablo gösterimini detaylı okuyalım. Tablonun sol üst köşesindeki `↵` simgesi, okuma yönünü hatırlatıyor: soldan (sütun = başlangıç) sağ-aşağıya (satır = son). "Satır × sütun" değil, "sütun → satır".

Identity tablosunu okuyalım. Birinci sütun (başlangıç 0): 0 satırında 1 var → "başlangıç 0, son 0" geçişi gerçekleşiyor. 1 satırında 0 var → "başlangıç 0, son 1" geçişi gerçekleşmiyor. İkinci sütun (başlangıç 1): 0 satırında 0 var → "başlangıç 1, son 0" geçişi yok. 1 satırında 1 var → "başlangıç 1, son 1" geçişi gerçekleşiyor.

Bu tablo gösterimi neden önemli? İki nedeni var. Birincisi: sütun toplamları her zaman 1 olmalı (bir başlangıç durumu tam olarak bir son duruma gidiyor). İkincisi: bu tablonun tam bir matris gibi okunduğunu görmek, ilerleyen konularda stochastic matrix ve ardından quantum operator'e geçişi kolaylaştırıyor.
:::

---

## NOT, ZERO, ONE — Tablolar

$$
NOT =
\begin{array}{c|cc}
\hookleftarrow & \mathbf{0} & \mathbf{1} \\ \hline
\mathbf{0} & 0 & 1 \\
\mathbf{1} & 1 & 0
\end{array}
\qquad
ZERO =
\begin{array}{c|cc}
\hookleftarrow & \mathbf{0} & \mathbf{1} \\ \hline
\mathbf{0} & 1 & 1 \\
\mathbf{1} & 0 & 0
\end{array}
\qquad
ONE =
\begin{array}{c|cc}
\hookleftarrow & \mathbf{0} & \mathbf{1} \\ \hline
\mathbf{0} & 0 & 0 \\
\mathbf{1} & 1 & 1
\end{array}
$$

- NOT: iki sütun birbirinin tersi → köşegen boş, karşı köşegen dolu
- ZERO: her sütunun üst satırı $1$ → her zaman son durum $0$
- ONE: her sütunun alt satırı $1$ → her zaman son durum $1$

::: {.notes}
NOT tablosunu okuyalım. Birinci sütun (başlangıç 0): 0 satırında 0, 1 satırında 1 — başlangıç 0 iken son durum 1. İkinci sütun (başlangıç 1): 0 satırında 1, 1 satırında 0 — başlangıç 1 iken son durum 0. Bu, tam olarak NOT'un tanımını doğruluyor.

ZERO tablosuna bakın: her iki sütunda da üst satır (son=0 satırı) 1, alt satır (son=1 satırı) 0. Bu demek ki başlangıç ne olursa olsun (0 ya da 1), son durum her zaman 0. ZERO operatörü gerçekten "her şeyi sıfıra götürüyor."

ONE tablosunda ise her iki sütunda alt satır (son=1 satırı) 1, üst satır 0. Başlangıç ne olursa olsun son durum her zaman 1.

Sütun toplamlarına dikkat: her tabloda her sütunun toplamı 1. Bu bir operatör olmanın zorunlu koşulu — "başlangıç durumu, tam olarak bir son duruma gidiyor." ZERO'da her sütunun toplamı gerçekten 1 (1+0=1). ONE'da da 1 (0+1=1).
:::

---

## Boolean Bağlantısı

- $0$ ve $1$ aynı zamanda $\text{False}$ ve $\text{True}$ olarak okunabilir
- Bu durumda NOT, mantıksal değillemeye karşılık gelir:

$$
NOT(False) = True, \qquad NOT(True) = False
$$

- Identity ise mantıksal özdeşlik: $I(p) = p$
- ZERO ve ONE sabit-değer fonksiyonları

::: {.notes}
Bit ve Boolean mantık arasındaki bu köprü sezgisel düzeyde önemli. Değişken $p$ bir önerme olsun — "Dışarıda yağmur var" gibi. Bu önerme ya doğru (True=1) ya yanlış (False=0). NOT operatörü bu önermenin olumsuzunu veriyor.

ZERO ve ONE operatörleri mantıksal bağlamda daha az kullanılıyor — çünkü girişi görmezden geliyorlar. "Her zaman False döndüren" veya "her zaman True döndüren" bir fonksiyon Boolean cebrinde sabit fonksiyon olarak adlandırılır.

Bu bağlantının ileriki konularda doğrudan bir önemi yok, ama "bit ve mantık dili aynı yapıyı paylaşıyor" gözlemini yerleştirmek faydalı. Kuantum devreleri de aynı anlamda "hesaplamalı" operatörler kullanıyor — tek fark, geniş genlikler ve girişim mekanizması.
:::

---

## Tersinirlik Sorusu

Bir operatör uygulandıktan sonra **başlangıç durumunu geri bulabilir miyiz?**

- Son durum $\to$ Başlangıç durumu geri kazanılabiliyorsa: **tersinir** (reversible)
- Son durum $\to$ Başlangıç durumu bulunamıyorsa: **tersinmez** (irreversible)

Hangi operatörler tersinir, hangileri tersinmez?

::: {.notes}
"Tersinirlik" bu anlatım hattının en kritik kavramlarından biri — kuantum mekaniğine giriş bölümündeki ilk köprü.

Soruyu somutlaştıralım. Bir arkadaşınız bir bit üzerinde gizlice bir operatör uyguladı. Size yalnızca son durumu söylüyor. Siz başlangıç durumunu güvenle söyleyebilir misiniz?

Eğer söyleyebiliyorsanız, operatör tersinirdir: son durumdan başlangıca geri gidebiliyoruz, bilgi korunmuş.
Eğer söyleyemiyorsanız, operatör tersinmezdir: başlangıç durumuna dair bilgi yok olmuş.

Bu soruyu dört operatör için ayrı ayrı soracağız. Cevaplar bazılarında "evet", bazılarında "hayır" olacak — ve hangilerin "hayır" olduğu bize kuantum mekaniğinin temel bir kısıtlamasını anlatıyor.
:::

---

## Tersinir Operatörler — Identity ve NOT

**Identity tersinirdir:**

Son durum $0$ ise → Başlangıç $0$ \  
Son durum $1$ ise → Başlangıç $1$

Her çıkışa karşılık tek bir giriş var.

**NOT tersinirdir:**

Son durum $0$ ise → Başlangıç $1$ \  
Son durum $1$ ise → Başlangıç $0$

Yine her çıkışa tek bir giriş karşılık geliyor.

::: {.notes}
Identity için şunu gözlemleyin: tablo köşegeni tam biri örüyor. Her başlangıç durumu tam olarak bir son duruma gidiyor ve her son duruma tam olarak bir başlangıç durumundan gelebiliyoruz. Bu matematik dilinde "bijection" — hem birebir (injective) hem örten (surjective) bir fonksiyon.

NOT için de aynı yapı geçerli, ama bu sefer çapraz: 0→1 ve 1→0. Yine her son duruma tam bir başlangıç karşılık geliyor.

Matematiksel formalizm: bir fonksiyon $f: \{0,1\} \to \{0,1\}$ tersinirdir ancak ve ancak bijection ise, yani her çıkış değeri tam olarak bir giriş değerinden geliyor. Sonlu kümeler için bijection ↔ injective (birebir) ↔ surjective (örten).

Bu ayrım kuantum mekaniğinde çok önemli. Kapalı bir kuantum sisteminde evrim her zaman tersinir olmalı. Bu nedenle kuantum kapıları her zaman tersinir operatörlere karşılık geliyor. NOT'un (X kapısı) kullanılabilmesinin sebebi tam olarak bu.
:::

---

## Tersinmez Operatörler — ZERO ve ONE

**ZERO tersinmezdir:**

$$
ZERO(0) = 0 \qquad ZERO(1) = 0
$$

Son durum $0$ ise → Başlangıç $0$ mı yoksa $1$ mi? **Bilinmiyor.**

**ONE tersinmezdir:**

$$
ONE(0) = 1 \qquad ONE(1) = 1
$$

Son durum $1$ ise → Başlangıç $0$ mı yoksa $1$ mi? **Bilinmiyor.**

::: {.notes}
ZERO operatörü her girişi 0'a gönderiyor: hem 0→0 hem 1→0. Bu durumda son durum 0 gördüğümüzde geriye gidemiyoruz — başlangıç 0 mıydı 1 miydi bilmiyoruz. Bilgi yok olmuş, geri kazanılamıyor.

ONE için tam simetrik durum var: hem 0→1 hem 1→1. Son durum 1 gördüğümüzde başlangıç belirsiz.

Tablo dilinde bu şöyle görünüyor: ZERO'nun tablosunda "son=0" satırında iki tane 1 var (her iki başlangıçtan da o satıra gelinebiliyor). ONE'da "son=1" satırında iki tane 1 var. Birden fazla başlangıç aynı son duruma gidiyorsa — bu tersinmezliğin tablosudur.

Fizik dilinde bu şu anlama geliyor: ZERO ve ONE uygulandığında bilgi kayboluyor. "Hangisi girmişti?" sorusu yanıtsız kalıyor. Bu tür işlemler kuantum mekaniğinde kapalı sistem evrimi için yasak — kuantum kapısı olamazlar.
:::

---

::: {.callout-warning}
## Dikkat — Karıştırılabilecek Noktalar

**ZERO ve ONE = "sabit çıktı" ≠ "işlem yapılmamış"**\
ZERO her girişe 0 veriyor — bu aktif bir operatör. Ama tersinmez çünkü giriş bilgisi kayboluyor.

**Tablo sütun toplamı = 1 her zaman geçerli**\
Deterministik operatörlerde her sütunda tam bir tane 1 var, gerisi 0. Bu, "bir başlangıç tek bir sona gidiyor" garantisi. Olasılıksal operatörlerde bu toplam yine 1 olacak ama sayılar kesirli olacak.

**"Tersinir" = bijection, "tersinmez" = many-to-one**\
Identity ve NOT ikisi de bijection. ZERO ve ONE ise many-to-one (çoktan-bire) fonksiyonlar.
:::

---

## Kuantuma Köprü

- **Kapalı kuantum sistemlerinde evrim operatörleri tersinirdir**
- Bu nedenle:
  - Identity ve NOT → geçerli kuantum kapısı olabilir
  - ZERO ve ONE → **geçerli kuantum kapısı olamaz**

- Kuantum kapıları matematiksel olarak **unitary matrislerle** temsil edilir
- Unitarity ↔ tersinirlik

::: {.notes}
Bu, tüm oturumun en önemli cümlesi: "Kapalı kuantum sistemlerinde evrim her zaman tersinirdir." Bu kısıtlama kuantum mekaniğinin temel postülatlarından biri — deneysel bir gözlem, türetilmiş bir sonuç değil.

Pratik sonucu nedir? Her kuantum kapısı tersinir olmak zorunda. X kapısı (kuantum NOT) tersinir olduğu için geçerli bir kuantum kapısı. Klasik ZERO ve ONE gibi "her zaman aynı şey çıkartan" operatörler ise bilgiyi yok ettiği için kuantum kapısı olamaz.

"Unitary matris" kavramı bu notlarda tam işlenmeyecek, ama bağlantısını belirtmek faydalı: bir matrisin unitary olması, onun tersinin konjuge transpozu olduğu anlamına geliyor. Bu otomatik olarak tersinirliği garanti ediyor ve normları koruyor — yani geçerli quantum state'leri geçerli quantum state'lere götürüyor.

Ön koşul bilgisi olarak şu yeter: tersinir klasik operatörlerin analog kuantum versiyonları var; tersinmez klasik operatörlerin ise yok. Bu yüzden klasik bitten tersinir operatörleri iyi kavramak, kuantum kapılarına geçişi kolaylaştırıyor.
:::

---

## Özet

1. **Bit**, iki durumlu ($0$ ve $1$) deterministik bir bilgi birimidir
2. **Tek bit üzerinde dört temel operatör** tanımlanabilir: Identity, NOT, ZERO, ONE
3. **Tablo gösterimi**: sütun=başlangıç, satır=son, toplam=1 (her sütun)
4. **Tersinir operatörler** (Identity, NOT): son durumdan başlangıç benzersiz olarak geri kazanılır
5. **Tersinmez operatörler** (ZERO, ONE): son durumdan başlangıç bulunamaz — bilgi yok olur
6. **Kuantum mekaniğine bağ**: kapalı sistemlerde yalnızca tersinir operatörler geçerlidir

::: {.notes}
Bu altı madde bir sonraki konunun (olasılıksal sistemler) tam zeminini oluşturuyor. Orada da durum, operatör ve evrim dilini kullanacağız — ama bu kez durum tek bir 0 veya 1 değil, bir olasılık dağılımı olacak. Sütun vektörü dili, tablo gösterimi ve tersinirlik kavramı orada da işlev görecek.

Olasılıksal sistemlere geçiş için akılda tutulması gereken tek fark şu: klasik bitin durumu {0, 1}'deyken, olasılıksal bitin durumu o ikisi üzerindeki bir dağılım. Bu fark, tablonun yorumunu değiştiriyor ama yapısını değiştirmiyor.
:::

---

*Bir sonraki konu: olasılıksal bit, FairCoin operatörü ve sütun vektörü dili.*
