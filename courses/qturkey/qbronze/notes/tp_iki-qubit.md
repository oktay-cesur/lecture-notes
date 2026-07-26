---
title: "İki Qubit ve Phase Kickback"
subtitle: QBronze — S13
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-01-01
execute:
  echo: false
---

## Geçen Konudan Köprü

- Tek qubit: amplitude, ölçüm, dönme, yansıma
- Bileşik klasik sistemler: tensor çarpımı, korelasyon
- Şimdi: iki qubitli sistemler ve dolanıklık

::: {.notes}
Tek qubit dilini kuantum sistemlere taşıdık. Şimdi iki qubitli sistemlere geçiyoruz. Klasik iki bit konusundaki tensor çarpımı ve korelasyon kavramları burada da geçerli ama yeni bir olgu giriyor: kuantum dolanıklık.
:::

---

## İki Qubitin Dört Temel Durumu

$$
|00\rangle, \quad |01\rangle, \quad |10\rangle, \quad |11\rangle
$$

$$
|00\rangle = |0\rangle \otimes |0\rangle = \begin{bmatrix}1\\0\\0\\0\end{bmatrix},
\quad
|01\rangle = |0\rangle \otimes |1\rangle = \begin{bmatrix}0\\1\\0\\0\end{bmatrix}
$$

$$
|10\rangle = |1\rangle \otimes |0\rangle = \begin{bmatrix}0\\0\\1\\0\end{bmatrix},
\quad
|11\rangle = |1\rangle \otimes |1\rangle = \begin{bmatrix}0\\0\\0\\1\end{bmatrix}
$$

::: {.notes}
İki qubitli sistemin durum uzayı dört boyutlu. Temel durumlar iki qubitin tensor çarpımı.

Notasyon: $|ab\rangle$ ilk karakter birinci qubit, ikinci karakter ikinci qubit. $|10\rangle$: birinci qubit 1, ikinci qubit 0.

Tensor çarpımı hesabı: $[a_1, a_2]^T \otimes [b_1, b_2]^T = [a_1 b_1, a_1 b_2, a_2 b_1, a_2 b_2]^T$.
:::

---

## İki Qubitte Genel Durum

Genel iki-qubit durumu:

$$
|\psi\rangle = \alpha_{00}|00\rangle + \alpha_{01}|01\rangle + \alpha_{10}|10\rangle + \alpha_{11}|11\rangle
$$

Koşul: $|\alpha_{00}|^2 + |\alpha_{01}|^2 + |\alpha_{10}|^2 + |\alpha_{11}|^2 = 1$

Ölçüm sonucu $|xy\rangle$: $Pr(xy) = |\alpha_{xy}|^2$

::: {.callout-note}
Tablo eklenecek: dört temel durum, amplitüdleri ve ölçüm olasılıkları örneği.
:::

::: {.notes}
Dört amplitüd, dört olasılık. Norm koşulu dört amplitüdün karelerinin toplamına genişliyor.

Ölçüm iki sonuç verebilir: ya iki qubit birden ölçülür (dört olası çıktı) ya da bir qubit ölçülür (diğeri süperpozisyonda kalabilir, collapse kısmı). Şimdilik tüm sistemi bir arada ölçüyoruz.
:::

---

## CNOT Kapısı

**C**ontrolled-**NOT**: kontrol qubit 1 ise hedef qubit tersine çevriliyor.

$$
CNOT =
\begin{bmatrix}
1&0&0&0\\
0&1&0&0\\
0&0&0&1\\
0&0&1&0
\end{bmatrix}
$$

| Giriş | Çıkış |
|-------|-------|
| $\|00\rangle$ | $\|00\rangle$ |
| $\|01\rangle$ | $\|01\rangle$ |
| $\|10\rangle$ | $\|11\rangle$ |
| $\|11\rangle$ | $\|10\rangle$ |

```python
qc.cx(q[0], q[1])  # q[0] kontrol, q[1] hedef
```

::: {.notes}
CNOT tablosunu okuyalım. Giriş 00 ve 01: kontrol qubit=0, hedef değişmez. Giriş 10: kontrol=1, hedef 0→1 (00→11 oldu değil — 10→11: kontrol=1, hedef=0→1). Giriş 11: kontrol=1, hedef 1→0 (11→10).

CNOT tersinir bir kapı: CNOT'u iki kez uygulamak başa döndürüyor. Bu beklenen — kuantum kapıları tersinir olmalı.

Qiskit'te `qc.cx(q[0], q[1])`: birinci argüman kontrol, ikinci hedef.
:::

---

## Bell Durumu — Dolanıklık

$H$ + CNOT ile Bell durumu üretmek:

```python
qc.h(q[0])   # birinci qubit süperpozisyona
qc.cx(q[0], q[1])  # CNOT
```

Hesap:
$$
|00\rangle \xrightarrow{H\otimes I} \frac{1}{\sqrt{2}}(|0\rangle+|1\rangle)\otimes|0\rangle = \frac{1}{\sqrt{2}}(|00\rangle+|10\rangle)
\xrightarrow{CNOT} \frac{1}{\sqrt{2}}(|00\rangle+|11\rangle)
$$

Sonuç: $|\Phi^+\rangle = \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)$ — Bell durumu

::: {.notes}
Bu hesap iki adım:

Adım 1 — $H \otimes I$: sadece birinci qubit'e H uyguluyoruz. $H|0\rangle = \frac{1}{\sqrt{2}}(|0\rangle+|1\rangle)$. İkinci qubit değişmez: $|0\rangle$. Tensor çarpımı: $\frac{1}{\sqrt{2}}(|00\rangle + |10\rangle)$.

Adım 2 — CNOT: $|00\rangle \to |00\rangle$ (kontrol=0, hedef değişmez). $|10\rangle \to |11\rangle$ (kontrol=1, hedef 0→1). Sonuç: $\frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)$.

Bu Bell durumu dolanık: tensor çarpımı olarak yazılamıyor. $|00\rangle + |11\rangle$: ya ikisi de 0 ya ikisi de 1 — birbiriyle korelasyonlu. Birini ölçünce diğerinin durumu belirleniyor.
:::

---

## Phase Kickback Mekanizması

$H|1\rangle = |-\rangle = \frac{1}{\sqrt{2}}(|0\rangle - |1\rangle)$ durumunu hedef alarak CNOT:

$$
CNOT \cdot |0\rangle \otimes |-\rangle = CNOT \cdot \frac{1}{\sqrt{2}}(|00\rangle - |01\rangle)
$$

$$
= \frac{1}{\sqrt{2}}(|00\rangle - |01\rangle) \xrightarrow{\text{kontrol=0, değişmez}}
$$

Kontrol qubit $\frac{1}{\sqrt{2}}(|0\rangle+|1\rangle)$ iken:

$$
|+\rangle \otimes |-\rangle \xrightarrow{CNOT} |-\rangle \otimes |-\rangle
$$

Faz kontrole "tepti"!

::: {.notes}
Phase kickback CNOT kapısının çarpıcı bir özelliği. Hedef qubit $|-\rangle$ durumundayken CNOT uygulamak, hedefi değiştirmiyor ama kontrolün fazını değiştiriyor.

Mekanizma: $CNOT|+\rangle|-\rangle = |-\rangle|-\rangle$. Kontrol $|+\rangle \to |-\rangle$ oldu — yani $Z$ uygulanmış gibi davrandı. Ama hedefte Z uygulanmadı.

Bu mekanizma Grover algoritmasında oracle'ın işleyişinde kritik rol oynuyor. Oracle hedef bit üzerinden fazı geri tepiyor — kontrol qubitinin fazını işaretliyor. Bu, arama probleminde "işaretleme" mekanizması.
:::

---

::: {.callout-warning}
## Dikkat — Karıştırılabilecek Noktalar

**$|ab\rangle$: birinci karakter birinci qubit**\
$|10\rangle$: birinci qubit=1, ikinci qubit=0. Sıra önemli.

**CNOT'ta kontrol değişmiyor (genellikle)**\
CNOT standart durumda kontrol qubit korunur. Phase kickback istisnai bir durum.

**Bell durumu tensor çarpımıyla yazılamaz**\
$\frac{1}{\sqrt{2}}(|00\rangle+|11\rangle) \neq u_1 \otimes u_2$ hiçbir $u_1, u_2$ için. Bu dolanıklığın tanımı.
:::

---

## Özet

1. İki qubitli sistem: dört temel durum, dört boyutlu uzay
2. **CNOT**: kontrol 1 ise hedefi çevir — iki qubitli tersinir kapı
3. **Bell durumu**: $H + CNOT$ ile üretilir, tensor çarpımı olarak yazılamaz
4. **Dolanıklık**: iki qubit bağımsız değil, ölçüm sonuçları korelasyonlu
5. **Phase kickback**: hedef $|-\rangle$ iken CNOT, faz kontrole "tepiyor"

::: {.notes}
Bu konu dolanıklık kavramını net ortaya koydu. Sonraki konuda (superdense coding) bu Bell durumunu protokolün kaynağı olarak kullanacağız. Phase kickback ise Grover algoritmasında oracle mekanizmasının temeli.
:::

---

*Sonraki konu: superdense coding — Bell durumu ile iki bit taşımak.*
