---
title: "Olasılıksal Durum"
subtitle: QBronze — S02
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-01-01
execute:
  echo: false
---

## Geçen Konudan Köprü

- Bit: deterministik, ya $0$ ya $1$
- Şimdi: sonucu **bilmiyoruz** — ne yaparız?
- Fark: "sistem belirsizdir" değil, **"bilgimiz belirsizdir"**
- Araç: olasılık dağılımı → sütun vektörü

::: {.notes}
Bağlam: geçen oturumda bit ve dört temel operatörü gördük. Her şey deterministikti. Şimdi bir para attığımızda sonucu görmeden önce ne biliyoruz? Fiziksel sonuç belirli — para ya yazı ya tura düştü. Ama biz bilmiyoruz. Bu "bilmeme"yi bir nesne olarak temsil etmemiz gerekiyor. Olasılıksal bit dili tam bunu yapıyor.
:::

---

## Yazı-Tura ve Bit Eşleştirmesi

$$
Head \equiv 0, \qquad Tail \equiv 1
$$

Adil bir para için:

$$
Pr(Head) = Pr(Tail) = \frac{1}{2}
$$

**FairCoin operatörü** (herhangi bir girişten çıkış dağılımı):

$$
FairCoin(0) = \frac{1}{2} \cdot 0 + \frac{1}{2} \cdot 1
\qquad
FairCoin(1) = \frac{1}{2} \cdot 0 + \frac{1}{2} \cdot 1
$$

::: {.notes}
Notasyon ön-koşul: Head=0, Tail=1 eşleştirmesi bu anlatım hattında tutarlı korunuyor.

FairCoin operatörü özel: giriş ne olursa olsun çıkış dağılımı aynı — 1/2, 1/2. Bu, "adil para atılınca sonuç başlangıçtan bağımsız" sezgisini formalleştiriyor.

FairCoin'in klasik tek bit operatörlerinden farkı: tek bir giriş, tek bir çıkış yerine — tek bir giriş, bir dağılım veriyor. Bu, olasılıksal operatör kavramına adım.
:::

---

## FairCoin Tablo Gösterimi

$$
FairCoin =
\begin{array}{c|cc}
\hookleftarrow & \mathbf{0} & \mathbf{1} \\ \hline
\mathbf{0} & \frac{1}{2} & \frac{1}{2} \\[6pt]
\mathbf{1} & \frac{1}{2} & \frac{1}{2}
\end{array}
$$

- Sütun toplamları: $\frac{1}{2} + \frac{1}{2} = 1$ ✓
- Her iki sütun aynı: başlangıç bilgisi sonucu etkilemiyor
- Karşılaştırın: Identity sütunlarında tam 0/1 vardı

::: {.notes}
Tablo gösterimini bir önceki konudan hatırlayın: sütunlar başlangıç durumu, satırlar son durum. Değişen şey: artık girişler 0 ya da 1 değil, olasılıklar.

FairCoin tablosunda her sütun [1/2, 1/2]. Bu "başlangıç ne olursa olsun çıkış dağılımı aynı" gerçeğinin tablo yansıması.

Sütun toplamı neden 1 olmak zorunda? Çünkü "bir şey olacak" — para bir yüzüyle düşecek. Tüm olasılıkların toplamı 1.

Eski Identity tablosundan fark: Identity'de her sütunda tam bir tane 1, gerisi 0 vardı. FairCoin'de her sütunun tüm girdileri kesirli — olasılıksal geçiş.
:::

---

## Biased Coin — Eşit Olmayan Dağılım

Para eşit olmayabilir:

$$
Pr(Head) = 0.6, \qquad Pr(Tail) = 0.4
$$

$$
BiasedCoin =
\begin{array}{c|cc}
\hookleftarrow & \mathbf{0} & \mathbf{1} \\ \hline
\mathbf{0} & 0.6 & 0.6 \\
\mathbf{1} & 0.4 & 0.4
\end{array}
$$

- Sütun toplamları: $0.6 + 0.4 = 1$ ✓
- Her iki sütun hâlâ aynı → başlangıç yine sonucu etkilemiyor

::: {.notes}
Adil paradan eşitsiz paraya geçiş, "para atma" modelinin genelleştirilmesi. Gerçek dünyada hiçbir para tam adil değil; bias her zaman var. Bu modeli formalize etmek, olasılıksal sistemlerde gerçekçi parametreleri temsil etmemizi sağlıyor.

Dikkat: bu tabloda da iki sütun birbirinin aynısı — bias parası da "durumdan bağımsız bir dağılım" veriyor. Bu FairCoin ile BiasedCoin'in ortak özelliği: her ikisinde de çıkış dağılımı girişten bağımsız.

GameCoins operatöründe bu bağımsızlık kırılacak: hangi paradan başlandığına bağlı olarak farklı dağılımlar elde edilecek.
:::

---

## İki Paramlı Oyun — GameCoins

Asja'nın iki parası var:
- **one euro:** $Pr(Head) = 0.6$, $Pr(Tail) = 0.4$
- **one cent:** $Pr(Head) = 0.3$, $Pr(Tail) = 0.7$

Kural: Head → sonraki tur one euro; Tail → sonraki tur one cent

$$
GameCoins =
\begin{array}{c|cc}
\hookleftarrow & \mathbf{Head} & \mathbf{Tail} \\ \hline
\mathbf{Head} & 0.6 & 0.3 \\
\mathbf{Tail} & 0.4 & 0.7
\end{array}
$$

::: {.notes}
Bu oyun çok kritik bir kavramı kuruyor: duruma bağlı operatör. Önceki FairCoin ve BiasedCoin'de başlangıç durumu sonucu etkilemiyordu. GameCoins'te ise hangi para ile başlandığına bağlı olarak farklı geçiş olasılıkları var.

Tablo artık farklı: birinci sütun (başlangıç=Head/one euro), ikinci sütun (başlangıç=Tail/one cent). İkisi farklı olasılıklara sahip.

Bu tablonun bir özelliği: sütun toplamları hâlâ 1. Birinci sütun: 0.6+0.4=1. İkinci sütun: 0.3+0.7=1. Bu zorunlu koşul değişmiyor.

Bu oyun ve bu tablo, bir sonraki konunun merkezinde yer alacak: bu tabloyu bir matrise ve evrim hesabını matris-vektör çarpımına dönüştüreceğiz.
:::

---

## Probabilistic State — Sütun Vektörü

Bir bit atıldı ama sonucu görmedik. Bilgimiz:

$$
\begin{bmatrix} Pr(0) \\ Pr(1) \end{bmatrix}
= \begin{bmatrix} 0.3 \\ 0.7 \end{bmatrix}
$$

- İlk bileşen: 0 olma olasılığı
- İkinci bileşen: 1 olma olasılığı
- Her iki bileşen $\geq 0$, toplamları $= 1$

Deterministik durumlar bu dilin özel halleri:

$$
\begin{bmatrix}1\\0\end{bmatrix} = \text{kesin 0} \qquad \begin{bmatrix}0\\1\end{bmatrix} = \text{kesin 1}
$$

::: {.notes}
Anahtar geçiş burada. Artık "bit 0'da" ya da "bit 1'de" demiyoruz. Bunun yerine bilgi dağılımını bir vektör olarak yazıyoruz.

Neden vektör? Çünkü birden fazla durum olasılığı var ve bunları bir arada tutmamız gerekiyor. Skalar bir sayı yetmiyor. Vektör, her durum için ayrı bir bileşen tutuyor.

Deterministik durumlar bu dilde standart baz vektörleri oluyor. [1, 0] = "kesinlikle 0 durumunda". [0, 1] = "kesinlikle 1 durumunda". Olasılıksal durum ise bu iki ekstrem arasında bir noktada.

Teknik isim: "stochastic vector" veya "probability vector". İki koşul: negatif olmayan bileşenler + toplam 1.
:::

---

## Stochastic Vector — Formal Tanım

Bir **probabilistic state (stochastic vector)**:

$$
v = \begin{bmatrix} p_0 \\ p_1 \end{bmatrix}, \qquad p_0 \geq 0,\ p_1 \geq 0,\ p_0 + p_1 = 1
$$

Genel $n$ durumlu sistem için:

$$
v = \begin{bmatrix} p_1 \\ p_2 \\ \vdots \\ p_n \end{bmatrix}, \qquad \forall i: p_i \geq 0, \quad \sum_{i=1}^n p_i = 1
$$

::: {.callout-note}
Görsel eklenecek: $n=2$ durumda birim doğruda geçerli stochastic vector bölgesi (0–1 arası segment).
:::

::: {.notes}
Bu tanım iki koşul içeriyor. Birincisi: her bileşen negatif olmayan bir sayı. Olasılıklar negatif olamaz — bu olasılık teorisinin temel koşulu. İkincisi: bileşenlerin toplamı 1. Tüm olasılıkların toplamı tam olarak 1 olmalı — "bir şey mutlaka olacak."

İki koşul birlikte geçerli bir olasılık dağılımını tam olarak tanımlıyor.

Büyük boyutlu örnek (n=4): $[0.20, 0.25, 0.40, 0.15]$. Toplamı 0.20+0.25+0.40+0.15 = 1.00. Geçerli bir probabilistic state.

Dikkat edilecek nokta: bu tanımı bir sonraki konudaki quantum state tanımıyla karşılaştıracağız. Quantum state de bir vektör, ama koşullar farklı (bileşenler negatif olabilir, karelerinin toplamı 1). Bu fark, olasılık ile genlik arasındaki temel ayrımı yansıtıyor.
:::

---

## Özet

1. Olasılıksal bit dilinde sistem durumu değil, **bilgi durumu** temsil edilir
2. Bu bilgi **sütun vektörü** ile yazılır
3. **FairCoin**: her başlangıçtan aynı dağılım → bağımsız operatör
4. **GameCoins**: başlangıca bağlı farklı dağılım → duruma bağlı operatör
5. **Stochastic vector**: negatif olmayan bileşenler + toplam = 1
6. Deterministik durum, stochastic vector'ün özel hali

::: {.notes}
Bu konunun kurduğu dil, sonraki oturumun (olasılıksal operatör) doğrudan altyapısı. Sütun vektörü dilini öğrendik; bir sonraki adım bu vektörü GameCoins gibi operatörlerle nasıl evrilteceğimizi göstermek. Cevap: matris-vektör çarpımı, yani $v' = Av$.
:::

---

*Sonraki konu: olasılıksal operatör, stochastic matrix ve $v' = Av$ formülü.*
