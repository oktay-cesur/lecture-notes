---
title: "Tek Qubit Operatörleri — Yansımalar"
subtitle: QBronze — S12
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-01-01
execute:
  echo: false
---

## Geçen Konudan Köprü

- Dönme $R(\theta)$: açıyı artırır, normu korur
- ry kapısı, state hazırlama
- Şimdi: **yansıma** — dönmeden farklı bir birim çember hareketi

::: {.notes}
Dönme operatörlerini gördük. Yansıma farklı: bir eksen üzerinden "ayna" etkisi. Önemli özellik: $F^2 = I$ — yansımayı iki kez yapmak geri döndürüyor. Hadamard bu sınıfta.
:::

---

## Yansıma Nedir?

Birim çemberde bir **eksen** belirle. Vektörü o eksene göre yansıt:

::: {.callout-note}
Görsel eklenecek: birim çemberde yatay eksene yansıma — (a,b) → (a,-b).
:::

Yatay eksene yansıma ($\theta = 0°$):

$$
F_0 = \begin{bmatrix}1 & 0\\0 & -1\end{bmatrix}:
\quad F_0\begin{bmatrix}a\\b\end{bmatrix} = \begin{bmatrix}a\\-b\end{bmatrix}
$$

Bu **Z kapısı**: $Z|0\rangle = |0\rangle$, $Z|1\rangle = -|1\rangle$

::: {.notes}
Yansıma operatörü bir eksene göre "ayna tutmak". Yatay eksene yansıma: x bileşeni değişmez, y bileşeninin işareti tersine döner.

Z kapısı $|0\rangle$'ı olduğu gibi bırakıyor, $|1\rangle$'in işaretini değiştiriyor. Ölçüm olasılıklarına etkisi yoktur: $|(-1/\sqrt{2})|^2 = 1/2$. Ama faz bilgisini değiştiriyor — bu girişim hesaplarında önem taşıyor.

Z kapısı faz kapısı olarak da adlandırılıyor: $Z|1\rangle = -|1\rangle$ — $|1\rangle$ bileşenine $\pi$ fazı ekliyor.
:::

---

## Genel Eksen Yansıması

$\phi$ açısındaki eksen etrafında yansıma:

$$
F_\phi = \begin{bmatrix}\cos(2\phi) & \sin(2\phi)\\\sin(2\phi) & -\cos(2\phi)\end{bmatrix}
$$

Özellik: $F_\phi^2 = I$ — iki kez yansımak özdeşlik

::: {.callout-note}
Görsel eklenecek: phi açısındaki eksen üzerinde yansıma, vektörün iki yönde eşit mesafede kalması.
:::

::: {.notes}
Eksen $\phi$ açısıyla belirtiliyor. $\phi=0$ → yatay eksen → Z kapısı. $\phi = \pi/4 = 45°$ → çapraz eksen → Hadamard.

$F^2 = I$ özelliği: bir nesneyi aynaya karşı iki kez yansıtmak başlangıca döndürüyor. Bu sezgisel. Matematiksel: $F^2 = I \Rightarrow F = F^{-1}$ — yansıma kendi tersi.

Bu özellik dönmeden farklı: $R(\theta)^2 = R(2\theta) \neq I$ genel olarak. Ama yansıma için her zaman $F^2 = I$.
:::

---

## Hadamard Bir Yansımadır

$\phi = \pi/8 = 22.5°$ eksenine göre yansıma:

$$
F_{\pi/8} = \frac{1}{\sqrt{2}}\begin{bmatrix}1 & 1\\1 & -1\end{bmatrix} = H
$$

Doğrulama: $H^2 = I$ ✓ (yansıma özelliği)

- $H|0\rangle = |+\rangle$: $|0\rangle$, yatay ve çapraz eksen arası doğrultusuna gidiyor
- $H|1\rangle = |-\rangle$

::: {.notes}
Hadamard'ın yansıma olduğunu görmek önemli. Dönme olduğu düşünülürse $H^2 = I$ açıklanamaz (dönmede $R(\theta)^2 = R(2\theta)$, sıfır için $\theta=0$ şartı gerekir). Ama yansıma için $F^2=I$ her zaman geçerli.

$\phi = \pi/8 = 22.5°$ değeri biraz sürpriz ama hesap tutarlı: $\cos(2\cdot\pi/8) = \cos(\pi/4) = 1/\sqrt{2}$, $\sin(2\cdot\pi/8) = \sin(\pi/4) = 1/\sqrt{2}$. Matris tam Hadamard.

Bu açıdan bakıldığında Hadamard, "0° ve 90° arasındaki ikinci büyük çaprazı" gösteren eksen üzerindeki yansıma. Bu geometrik okumanın pratikte kullanımı yok, ama Hadamard'ın neden iki kez uygulanınca geri döndürdüğünü açıklıyor.
:::

---

## Dönme ve Yansıma Karşılaştırması

| Özellik | Dönme $R(\theta)$ | Yansıma $F_\phi$ |
|---------|-------------------|-------------------|
| $\text{Op}^2$ | $R(2\theta)$ | $I$ |
| Ters | $R(-\theta)$ | $F_\phi$ (kendi tersi) |
| Determinant | $+1$ | $-1$ |
| Örnekler | ry, dönme | H, Z |

::: {.notes}
Bu tablo iki operator sınıfını ayırt ediyor.

Determinant farkı ilginç: dönme determinant +1, yansıma determinant -1. Bu, yansımanın "yönelimi ters çevirdiğinin" cebirsel ifadesi — aynadan bakınca sol/sağ yer değiştiriyor.

Öğrencilerin sıkça sorduğu soru: "Grover'da neden yansıma kullanılıyor?" Cevap: Grover'ın her adımı iki yansımadan oluşuyor. İki yansımanın bileşimi bir dönme — ve bu dönme hedef durumu doğru konuma getiriyor. Bu bağlantı Grover konusunda açıklanacak.
:::

---

## Özet

1. **Yansıma** $F_\phi$: $\phi$ açısındaki eksene göre ayna etkisi
2. $F_\phi^2 = I$ — yansımayı iki kez yapmak özdeşlik
3. **Z kapısı**: yatay eksen yansıması, $|1\rangle$'e $-1$ fazı ekler
4. **Hadamard**: 22.5° eksen yansıması, $H^2=I$ bu yüzden
5. Dönme $R(\theta)$: açı artırır; Yansıma $F_\phi$: kendi tersi

::: {.notes}
Tek qubit operatörleri bölümü tamamlandı. Sonraki konuda iki qubit sistemlere geçiyoruz: tensor çarpımı, CNOT ve dolanıklık. Bu konudaki dönme ve yansıma kavramları Grover algoritmasında doğrudan kullanılacak.
:::

---

*Sonraki konu: iki qubit, tensor çarpımı ve CNOT kapısı.*
