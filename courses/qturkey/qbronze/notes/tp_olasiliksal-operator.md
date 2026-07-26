---
title: "Olasılıksal Operatör"
subtitle: QBronze — S03
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-01-01
execute:
  echo: false
---

## Geçen Konudan Köprü

- Probabilistic state: sütun vektörü, toplam=1, negatif olmayan
- GameCoins tablo: başlangıca bağlı dağılım
- Bu konu: tabloyu **matrise**, hesabı **$v' = Av$** formülüne dönüştürmek

::: {.notes}
GameCoins'in tablosunu elimizde tutuyoruz. Ama "tabloya bakıp elle hesapla" yerine, bu tabloyu doğrudan bir matrise çevirip matris-vektör çarpımıyla yeni durumu bulmak istiyoruz. Bu, sistemleri ölçeklenebilir şekilde temsil etmenin yolu.
:::

---

## GameCoins'ten Matrise

Tablo gösterimi:

$$
GameCoins =
\begin{array}{c|cc}
\hookleftarrow & \mathbf{0} & \mathbf{1} \\ \hline
\mathbf{0} & 0.6 & 0.3 \\
\mathbf{1} & 0.4 & 0.7
\end{array}
$$

Matris biçimi:

$$
A = \begin{bmatrix} 0.6 & 0.3 \\ 0.4 & 0.7 \end{bmatrix}
$$

- Tablonun girişleri **doğrudan** matris girdisi olur
- Sütun = başlangıç durumu → matrisin sütunlarına karşılık gelir

::: {.notes}
Tablodan matrise geçiş mekanik: tablo girdilerini matris girdisi olarak al. Birinci sütun (başlangıç=0): [0.6, 0.4]. İkinci sütun (başlangıç=1): [0.3, 0.7]. Bu iki sütun yan yana geliyor → 2×2 matris.

Bu geçiş neden önemli? Çünkü matris-vektör çarpımı tanımlı bir işlem. Artık "tabloya bakarak elle hesapla" yapmak yerine standart lineer cebir araçları kullanabiliriz.

Sütun toplamları matrise de taşınıyor: birinci sütun toplamı 0.6+0.4=1, ikinci sütun toplamı 0.3+0.7=1.
:::

---

## İlk Evrim: $v' = A v$

Başlangıç durumu $v_0 = \begin{bmatrix}1\\0\end{bmatrix}$ (kesin Head):

$$
v_1 = \begin{bmatrix} 0.6 & 0.3 \\ 0.4 & 0.7 \end{bmatrix}
\begin{bmatrix} 1 \\ 0 \end{bmatrix}
=
\begin{bmatrix} 0.6 \cdot 1 + 0.3 \cdot 0 \\ 0.4 \cdot 1 + 0.7 \cdot 0 \end{bmatrix}
=
\begin{bmatrix} 0.6 \\ 0.4 \end{bmatrix}
$$

- One euro ile başlanıldı → bir tur sonra Pr(Head)=0.6

::: {.notes}
Matris-vektör çarpımını adım adım gösterelim. İlk bileşen: matrisin birinci satırı [0.6, 0.3] ile vektör [1, 0]'ın iç çarpımı = 0.6×1 + 0.3×0 = 0.6. İkinci bileşen: [0.4, 0.7] ile [1, 0] iç çarpımı = 0.4×1 + 0.7×0 = 0.4. Sonuç [0.6, 0.4].

Bu [0.6, 0.4] tam olarak one euro (Head) ile başlanıldığında beklediğimiz dağılım — BiasedCoin'in bias'ı 0.6/0.4.

Önemli: başlangıç vektörü deterministik ([1, 0]), sonuç vektörü olasılıksal ([0.6, 0.4]). Tek bir matris-vektör çarpımı bu geçişi yapıyor.
:::

---

## İkinci Evrim: Genel Durumdan Evrim

Başlangıç deterministik olmak zorunda değil. $v_1 = \begin{bmatrix}0.8\\0.2\end{bmatrix}$ iken:

$$
v_2 = \begin{bmatrix} 0.6 & 0.3 \\ 0.4 & 0.7 \end{bmatrix}
\begin{bmatrix} 0.8 \\ 0.2 \end{bmatrix}
=
\begin{bmatrix} 0.6 \cdot 0.8 + 0.3 \cdot 0.2 \\ 0.4 \cdot 0.8 + 0.7 \cdot 0.2 \end{bmatrix}
=
\begin{bmatrix} 0.54 \\ 0.46 \end{bmatrix}
$$

- Operatör yalnızca kesin durumlar için değil, **her probabilistic state için** çalışır

::: {.notes}
Bu örnek kritik bir kavramsal noktayı pekiştiriyor: $A$ operatörünü deterministik durumlara değil, genel probabilistic state'lere de uygulayabiliriz. [0.8, 0.2] olasılıksal bir başlangıç — bit 0.8 olasılıkla 0, 0.2 olasılıkla 1.

Hesap aynı mekanizma: satır × sütun iç çarpımı. Sonuç [0.54, 0.46] de geçerli bir probabilistic state: 0.54+0.46=1, her ikisi de ≥0.

Bu genellik, olasılıksal sistemlerin temel özelliği. Operatör, giriş bir baz vektör bile olsa, genel bir dağılım üzerinde de çalışıyor.
:::

---

## Stochastic Matrix — Formal Tanım

Bir **stochastic matrix** (olasılıksal operatör):

- Kare matris
- Tüm girişler $\geq 0$
- Her **sütunun** toplamı $= 1$

$$
A = \begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{bmatrix},
\qquad
a_{ij} \geq 0, \quad a_{1j} + a_{2j} = 1 \; \forall j
$$

**Stochastic matrix × stochastic vector = stochastic vector**

::: {.notes}
Formal tanım: sütun toplamları 1 olan negatif olmayan kare matris. Dikkat: satır toplamları 1 değil, **sütun** toplamları. (Bu, "sütun stochastic matrix" adını da alır. Kimi kaynaklarda "satır stochastic matrix" görebilirsiniz — buradaki anlatımda sütun toplamları 1 olan versiyon kullanılıyor.)

Neden sütun toplamları 1? Çünkü bir başlangıç durumundan sistemin bir yere gitmesi gerekiyor, ve tüm olası geçiş olasılıklarının toplamı 1 olmalı.

"Stochastic matrix × stochastic vector = stochastic vector" ifadesi önemli. Bu, operatörün geçerli probabilistic state'i geçerli bir başka probabilistic state'e götürdüğünü garanti ediyor. Sistem tutarlı kalıyor.
:::

---

## Ana Formül

$$
\boxed{v' = A v}
$$

- $v$: şimdiki probabilistic state (sütun vektörü)
- $A$: stochastic matrix (olasılıksal operatör)
- $v'$: bir adım sonraki probabilistic state

Sistem evrimi = matris-vektör çarpımı

::: {.notes}
Bu formül tüm klasik olasılıksal lineer sistem dilini tek satırda topluyor:
- Durum = vektör
- İşlem = matris
- Evrim = matris-vektör çarpımı

Bu yapı ilerleyen konularda kuantum sistemlere taşınacak. Tek fark: kuantum sistemlerde vektör bileşenleri olasılık değil amplitude (genlik) olacak, matris stochastic değil unitary olacak. Ama formül aynı: yeni durum = matris × eski durum.

Bu soyut yapıyı yerleştirmek, kuantum hesaplama matrislerini "nereden geldi?" sorgulamadan okumayı sağlıyor.
:::

---

## Art Arda Evrim

Aynı operatörü $k$ kez uygulamak:

$$
v_k = A^k v_0
$$

| Adım | Başlangıç $v_0 = [1, 0]$ |
|------|--------------------------|
| $v_0$ | $[1.000,\ 0.000]$ |
| $v_1$ | $[0.600,\ 0.400]$ |
| $v_2$ | $[0.480,\ 0.520]$ |
| $v_3$ | $[0.444,\ 0.556]$ |
| $v_{10}$ | $\approx [0.429,\ 0.571]$ |
| $v_\infty$ | $[0.429,\ 0.571]$ |

- Sistem uzun vadede **başlangıçtan bağımsız** bir dağılıma yakınsıyor

::: {.notes}
Bu tablo önemli bir gözlemi gösteriyor: art arda aynı operatörü uygulamak, sistemi belli bir "limit dağılım"a götürüyor. Bu dağılım, başlangıç durumundan bağımsız.

GameCoins için bu limit dağılım $[3/7, 4/7] \approx [0.429, 0.571]$. Neden? $A v^* = v^*$ denkleminin çözümü bu. Sistemi "sabit noktası" — bir kez bu noktaya ulaşıldığında operatör uygulamak durumu değiştirmiyor.

Bu Markov zinciri kavramıyla bağlantılı ama burada adı verilmeden, hesap üzerinden sezdirildi. Öğrencilerin görmesi gereken: bazı sistemler uzun vadede düzene giriyor.
:::

---

::: {.callout-warning}
## Dikkat — Karıştırılabilecek Noktalar

**Satır toplamı değil, sütun toplamı = 1**\
Stochastic matrix tanımında sütun toplamları 1. Satır toplamları rastgele olabilir.

**$v' = Av$ hesabında satır × sütun sırası**\
$A$ solda, $v$ sağda. Yer değiştirilemez: $Av \neq vA$ (matris çarpımı genel olarak değişmeli değil).

**Tablo ile matris aynı yapıda**\
Tablodaki her sütun, matrisin ilgili sütunu. Geçiş şöyle: tablodaki $(i, j)$ girişi, matrisin $i$. satırı $j$. sütunundaki girişidir.
:::

---

## Özet

1. **Stochastic matrix**: sütun toplamları 1, tüm girişler ≥0
2. **Evrim formülü**: $v' = Av$
3. Operatör yalnızca deterministik değil, **her probabilistic state'e** uygulanabilir
4. Art arda evrimde sistem bir **limit dağılıma** yakınsayabilir
5. Bu dil kuantum sistemlerin lineer cebir altyapısına köprü

::: {.notes}
Üç konuluk klasik sistemler bloğu burada tamamlandı (Bit, Olasılıksal Durum, Olasılıksal Operatör). Bir sonraki adım iki konuda: iki bitten oluşan sistemler ve Qiskit girişi. İki bit konusunda tensor çarpımı kavramı ortaya çıkacak — bu, ilerideki iki qubit ve dolanıklık konusunun doğrudan tabanı.
:::

---

*Sonraki konu: iki probabilistic bit, tensor çarpımı ve bağımsız sistemlerin birleşimi.*
