---
title: "Bileşik Klasik Sistemler"
subtitle: QBronze — S04
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-01-01
execute:
  echo: false
---

## Geçen Konudan Köprü

- Tek bir probabilistic bit: $[p_0, p_1]$ sütun vektörü
- Operatör: stochastic matrix, $v' = Av$
- Şimdi: **iki bit** bir arada — durum uzayı nasıl genişliyor?

::: {.notes}
İki bit bir araya geldiğinde ne değişiyor? Yalnızca boyut büyümüyor — yeni kavramlar giriyor: tensor çarpımı, bağımsızlık ve korelasyon. Bu kavramlar ilerideki iki qubit ve dolanıklık konusunun doğrudan öncülü.
:::

---

## İki Bitin Ortak Durum Uzayı

İki bit birleşince dört temel durum var:

$$
00, \quad 01, \quad 10, \quad 11
$$

- İlk sembol: birinci bitin durumu
- İkinci sembol: ikinci bitin durumu

Deterministik bileşik durumlar: $[1,0,0,0]$, $[0,1,0,0]$, $[0,0,1,0]$, $[0,0,0,1]$

::: {.callout-note}
Tablo eklenecek: iki bitin tüm kombinasyonları ve vektör karşılıkları.
:::

::: {.notes}
İki bitten oluşan bir sistem için durum uzayı, her bitin kendi durum uzayının "kartezyen çarpımı": {0,1} × {0,1} = {00, 01, 10, 11}.

Dört temel durum var. Bunları standart baz vektörleri olarak yazıyoruz: $|00\rangle = [1,0,0,0]$, $|01\rangle = [0,1,0,0]$, $|10\rangle = [0,0,1,0]$, $|11\rangle = [0,0,0,1]$.

Genel probabilistic state bu dört üzerindeki bir dağılım: $[p_{00}, p_{01}, p_{10}, p_{11}]$, toplamı 1.
:::

---

## Tensor Çarpımı — Bağımsız Sistemlerin Birleşimi

İki **bağımsız** bitten bileşik durum:

$$
\begin{bmatrix}p_0\\p_1\end{bmatrix}
\otimes
\begin{bmatrix}q_0\\q_1\end{bmatrix}
=
\begin{bmatrix}p_0 q_0\\p_0 q_1\\p_1 q_0\\p_1 q_1\end{bmatrix}
$$

Örnek: Bit-1'de $[0.2, 0.8]$, Bit-2'de $[0.6, 0.4]$:

$$
\begin{bmatrix}0.2\\0.8\end{bmatrix}
\otimes
\begin{bmatrix}0.6\\0.4\end{bmatrix}
=
\begin{bmatrix}0.12\\0.08\\0.48\\0.32\end{bmatrix}
$$

::: {.notes}
Tensor çarpımı iki vektörü bir araya getirmenin standart yolu. İlk vektörün her bileşenini ikinci vektörün tüm bileşenleriyle çarpıyoruz.

Neden bu formül? Çünkü bağımsız olaylar için $Pr(A \cap B) = Pr(A) \cdot Pr(B)$. $Pr(00) = Pr(\text{Bit-1}=0) \cdot Pr(\text{Bit-2}=0) = 0.2 \times 0.6 = 0.12$.

Notasyon: $\otimes$ sembolü tensor çarpımını gösteriyor. Bu sembol ilerideki iki qubit anlatımında da aynı anlamda kullanılacak.

Toplam kontrol: $0.12+0.08+0.48+0.32 = 1.00$ ✓. Geçerli probabilistic state.
:::

---

## Bağımsız vs. Korelasyonlu Durum

**Bağımsız:** Aşağıdaki vektörün tensor çarpımı olarak yazılabilen durum:

$$
v = u_1 \otimes u_2
$$

**Korelasyonlu:** Tensor çarpımı olarak **yazılamayan** durum:

$$
\begin{bmatrix}0.5\\0\\0\\0.5\end{bmatrix} \neq u_1 \otimes u_2 \quad \text{hiçbir } u_1, u_2 \text{ için}
$$

::: {.notes}
Bu ayrım çok önemli ve sıklıkla karıştırılıyor.

Bağımsız durum: iki bitin durumları birbirinden bağımsız. Bir bitin durumunu bilmek, diğeri hakkında ekstra bilgi vermiyor. Bu durum, iki vektörün tensor çarpımı olarak yazılabilir.

Korelasyonlu durum: $[0.5, 0, 0, 0.5]$ örneğine bakın. Bu "ya ikisi de 0, ya ikisi de 1" demek. $Pr(00)=0.5$, $Pr(11)=0.5$, diğerleri 0. Bu durum tensor çarpımı olarak yazılamıyor: eğer $Pr(\text{Bit-1}=0)=p$ ise $Pr(00)=p \cdot q_0$ ve $Pr(11)=(1-p)(1-q_0)$. Bu ikisini eşzamanlı 0.5 yapmak mümkün değil $Pr(01)$ ve $Pr(10)$ aynı anda 0 kalmak zorundaysa.

Kuantum mekaniğindeki dolanıklık (entanglement) bu korelasyon kavramının kuantum analogu. Kuantum dolanıklık klasik korelasyondan daha güçlü ama yapısal benzerlik var.
:::

---

## Tek Bir Bite Operatör — Bileşik Sistemde

Bileşik bir sistemde yalnızca **birinci bite** NOT uygulamak:

$$
NOT \otimes I = \begin{bmatrix}0&1\\1&0\end{bmatrix} \otimes \begin{bmatrix}1&0\\0&1\end{bmatrix}
= \begin{bmatrix}0&0&1&0\\0&0&0&1\\1&0&0&0\\0&1&0&0\end{bmatrix}
$$

- Tek bitin operatörü → bileşik sistemde daha büyük bir matris

::: {.notes}
Tek bir bite operatör uygulamak, bileşik sistemi temsil eden büyük matris ile bu operatörün tensor çarpımını almayı gerektiriyor.

$NOT \otimes I$: birinci bite NOT, ikinciye Identity. Sonuç 4×4 matris. Bu matrisin her sütunu, ilgili başlangıç durumunun NOT uygulandıktan sonra nereye gittiğini gösteriyor.

İkinci bite NOT uygulamak için: $I \otimes NOT$. Sıra değişiyor.

Bu yapı ilerideki CNOT kapısı anlatımında doğrudan kullanılacak: CNOT bir bitin durumuna bağlı olarak diğer biti çeviriyor.
:::

---

## CNOT — Klasik Koşullu NOT

Klasik CNOT (Controlled-NOT):
- **Kontrol bit** değişmez
- **Hedef bit**: kontrol=1 ise NOT, kontrol=0 ise Identity

$$
CNOT =
\begin{bmatrix}
1&0&0&0\\
0&1&0&0\\
0&0&0&1\\
0&0&1&0
\end{bmatrix}
$$

::: {.callout-note}
Tablo eklenecek: CNOT'un dört temel durum üzerindeki etkisi (00→00, 01→01, 10→11, 11→10).
:::

::: {.notes}
CNOT'u satır satır okuyalım. Birinci ve ikinci sütun (kontrol=0): Identity uygular. Üçüncü sütun (giriş=10, kontrol=1): 11'e gidiyor — hedef bit çevriliyor. Dördüncü sütun (giriş=11, kontrol=1): 10'a gidiyor — hedef bit çevriliyor.

CNOT tersinir bir operatör. Tablodan okuyun: her sütunda tam bir tane 1. Ters işlemi de CNOT: CNOT'u iki kez uygulamak başa döndürüyor.

Bu yapı, kuantum CNOT kapısının doğrudan klasik analogu. Kuantum CNOT da aynı matrisle temsil ediliyor — tek fark, girişlerin ve çıkışların kuantum state olması.
:::

---

## Özet

1. İki bit → dört durum, tensor çarpımıyla birleştirilen sütun vektörü
2. **Bağımsız durum**: iki bitin tensor çarpımı olarak yazılabilir
3. **Korelasyonlu durum**: tensor çarpımı olarak yazılamaz
4. Tek bite operatör → tensor çarpımıyla büyük sisteme yükseltilir
5. CNOT klasik düzeyde koşullu tersinir operatöre örnek

::: {.notes}
Bu konu kuantum bilgisine üç önemli köprü kuruyor: tensor çarpımı (iki qubit dilinin temeli), korelasyon kavramı (dolanıklığın öncülü) ve CNOT (en temel iki qubit kapısı). Bu kavramlar ilerleyen konularda doğrudan aynı adlarla ve aynı matematikle karşımıza çıkacak.
:::

---

*Sonraki konu: foton deneyleri ve klasik modelin sınırları.*
