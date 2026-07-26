---
title: "Tek Qubit"
subtitle: QBronze — S08
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-01-01
execute:
  echo: false
---

## Geçen Konudan Köprü

- Hadamard: negatif genlik → girişim → $HH = I$
- İlk Qiskit deneyimi: x-gate, ölçüm, AerSimulator
- Şimdi: qubitin **formal tanımı** ve amplitude kavramı

::: {.notes}
Hadamard kapısını gördük, Qiskit'te devreleri yazdık. Şimdi bu operatörlerin üzerinde çalıştığı nesneyi — qubit'i — daha sistematik tanımlıyoruz. Amplitüd nedir? Ket notasyonu ne anlama geliyor? Geçerli quantum state hangi koşulu sağlamalı?
:::

---

## Qubitin İki Temel Durumu

$$
|0\rangle = \begin{bmatrix}1\\0\end{bmatrix}, \qquad |1\rangle = \begin{bmatrix}0\\1\end{bmatrix}
$$

- $|\cdot\rangle$ : **ket notasyonu** — sütun vektörü için Dirac gösterimi
- $|0\rangle$ ve $|1\rangle$ birim uzunluklu ortogonal vektörler
- Klasik bitin kuantum analogu

::: {.notes}
Ket notasyonu Dirac'ın 1939'da önerdiği gösterim. "$|0\rangle$" okunuşu: "ket sıfır". Matematiksel anlamı: sütun vektörü $(1, 0)^T$.

Kuantum sistemler lineer sistemler: durumlar vektörle, operatörler matrislerle temsil ediliyor. Bu, olasılıksal sistemlerin dilinin birebir devamı — tek fark bileşenlerin özellikleri.

Klasik bit ile karşılaştırın: klasik 0 durumu $[1, 0]$ ile, klasik 1 durumu $[0, 1]$ ile temsil ediliyor. Qubit de aynı temel durumlara sahip ama bunların süperpozisyonuna izin veriyor.
:::

---

## X Operatörü — Kuantum NOT

$$
X = \begin{bmatrix}0 & 1\\1 & 0\end{bmatrix}
$$

Etkisi:

$$
X|0\rangle = \begin{bmatrix}0&1\\1&0\end{bmatrix}\begin{bmatrix}1\\0\end{bmatrix} = \begin{bmatrix}0\\1\end{bmatrix} = |1\rangle
\qquad
X|1\rangle = |0\rangle
$$

- Klasik NOT'un kuantum karşılığı
- Tersinir: $X^2 = I$

::: {.notes}
X kapısını "x-gate" olarak da biliyoruz — Qiskit'te `qc.x(q[0])` ile uygulanıyor. Matris çarpımını elle göstermek öğrencilerin vektör-matris dilini yerleştirmesine yardımcı oluyor.

Neden "X" adı? Bloch küresi geometrisinde X kapısı, qubitin $x$ ekseni etrafında $180°$ döndürülmesine karşılık geliyor. Bu açıklama şimdi önemli değil ama terminolojinin kaynağı bu.

$X^2 = I$ ilişkisi tersinirliğin doğal sonucu: X'i iki kez uygulamak başa döndürüyor. Klasik NOT gibi.
:::

---

## Hadamard Matrisini Hatırlayalım

$$
H = \frac{1}{\sqrt{2}}\begin{bmatrix}1 & 1\\1 & -1\end{bmatrix}
$$

$$
H|0\rangle = \frac{1}{\sqrt{2}}\begin{bmatrix}1\\1\end{bmatrix}, \qquad H|1\rangle = \frac{1}{\sqrt{2}}\begin{bmatrix}1\\-1\end{bmatrix}
$$

Bu iki özel duruma isim veriyoruz:

$$
|+\rangle = H|0\rangle = \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)
\qquad
|-\rangle = H|1\rangle = \frac{1}{\sqrt{2}}(|0\rangle - |1\rangle)
$$

::: {.notes}
$|+\rangle$ ve $|-\rangle$ isimleri standart notasyon. Sonraki konularda çok sık karşılaşacağız — özellikle phase kickback ve Grover algoritmalarında.

$|+\rangle$: iki temel durumun eşit ağırlıklı, aynı işaretli süperpozisyonu. $|-\rangle$: eşit ağırlıklı ama $|1\rangle$ bileşeninin işareti eksi.

Bu iki durumun ölçüm olasılıkları aynı: her ikisinde de %50/%50. Ama kuantum bilgi içerikleri farklı — faz bilgisi farklı. Bu fark ilerleyen konularda girişim ve phase kickback hesaplarında belirleyici oluyor.
:::

---

## Amplitude Kavramı

Quantum state'in bir duruma karşılık gelen bileşenine **amplitude** denir.

$$
|\psi\rangle = \begin{bmatrix}a\\b\end{bmatrix}:
\quad a = |0\rangle \text{ amplitüdü}, \quad b = |1\rangle \text{ amplitüdü}
$$

**Ölçüm olasılığı = amplitüdün karesi:**

$$
Pr(0) = a^2, \qquad Pr(1) = b^2
$$

Amplitüd negatif olabilir; olasılık her zaman ≥ 0:

$$
a = -\frac{1}{\sqrt{2}} \Rightarrow Pr = \left(-\frac{1}{\sqrt{2}}\right)^2 = \frac{1}{2}
$$

::: {.notes}
"Amplitude" ve "olasılık" kavramları karıştırılmamalı. Olasılıksal sistemde sütun vektörünün bileşenleri doğrudan olasılıktı — negatif olamazlardı. Quantum state'de bileşenler amplitude; bunlar negatif (hatta kompleks) olabilir. Ölçüm olasılığını almak için kare alıyoruz.

Neden kare? Kuantum mekaniğinin Born kuralı: $Pr(i) = |\langle i | \psi \rangle|^2$. Gerçek sayılı durumda bu $a_i^2$.

Pratik sonuç: iki farklı işaretli amplitude, aynı ölçüm olasılığı verebilir. $1/\sqrt{2}$ ve $-1/\sqrt{2}$: ölçüm olasılıkları aynı ($1/2$). Ama gelecekteki bir kapı uygulamasında işaret farkı girişim yaratabilir.
:::

---

## Geçerli Quantum State Koşulu

$$
|\psi\rangle = \begin{bmatrix}a\\b\end{bmatrix} \text{ geçerli} \iff a^2 + b^2 = 1
$$

Eşdeğer ifadeler:
- Vektörün **normu 1** olmalı: $\||\psi\rangle\| = 1$
- $\langle\psi|\psi\rangle = 1$

Geçersiz örnekler:

$$
\begin{bmatrix}1/2\\1/2\end{bmatrix}: \left(\frac{1}{2}\right)^2 + \left(\frac{1}{2}\right)^2 = \frac{1}{2} \neq 1
\qquad
\begin{bmatrix}\sqrt{3}/2\\1/\sqrt{2}\end{bmatrix}: \frac{3}{4}+\frac{1}{2} = \frac{5}{4} \neq 1
$$

::: {.notes}
Norm koşulu: $a^2 + b^2 = 1$. Bu, tüm olasılıkların toplamının 1 olması zorunluluğundan geliyor. Ölçüm sonucu 0 veya 1 çıkmalı; toplam olasılık $a^2 + b^2 = 1$ olmalı.

İlk geçersiz örnek: $[1/2, 1/2]$. Bu olasılıksal sistemde geçerli bir durum olurdu (toplam 1). Ama quantum state dilinde bu bir amplitude vektörü. $(1/2)^2 + (1/2)^2 = 1/2 \neq 1$. Geçersiz.

İkinci örnek: $[\sqrt{3}/2, 1/\sqrt{2}]$. Kare toplamı $3/4 + 1/2 = 5/4 \neq 1$. Geçersiz.

Sık karışıklık: "$[1/2, 1/2]$'nin toplamı 1, neden geçersiz?" Çünkü quantum state'de **kareler** toplanıyor, bileşenler değil.
:::

---

::: {.callout-warning}
## Dikkat — Karıştırılabilecek Noktalar

**Amplitude ≠ olasılık**\
$a = -3/5$ geçerli amplitude. $Pr(0) = (3/5)^2 = 9/25$.

**Norm koşulu: kareler toplamı = 1, bileşenler toplamı değil**\
$[0.6, 0.8]$ geçerli quantum state: $0.36+0.64=1$. $[0.5, 0.5]$ geçersiz: $0.25+0.25=0.5$.

**$|+\rangle$ ile $|-\rangle$ ölçümde aynı görünür**\
Her ikisi de %50/%50 ölçüm olasılığı verir. Ama ikinci bir kapı uygulandığında faz farkı belirleyici olur.
:::

---

## Özet

1. Qubitin iki temel durumu: $|0\rangle = [1,0]^T$, $|1\rangle = [0,1]^T$
2. X kapısı: $X|0\rangle = |1\rangle$, $X|1\rangle = |0\rangle$ — kuantum NOT
3. **Amplitude**: quantum state'in bileşeni; negatif olabilir
4. **Ölçüm olasılığı**: amplitüdün karesi
5. **Geçerli quantum state**: $a^2 + b^2 = 1$ (norm = 1)
6. $|+\rangle = H|0\rangle$, $|-\rangle = H|1\rangle$ — ileride çok kullanılacak

::: {.notes}
Bu sunum quantum state dilinin temelini kuruyor. Sonraki konuda (Q32) bu state'leri birim çember üzerinde geometrik olarak göreceğiz. Q36'da ise ölçüm ve collapse mekanizmasını daha detaylı işleyeceğiz.
:::

---

*Sonraki konu: qubit durumlarını birim çember üzerinde görselleştirme, açı dili.*
