---
title: "Tek Qubit Operatörleri — Dönmeler"
subtitle: QBronze — S11
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-01-01
execute:
  echo: false
---

## Geçen Konudan Köprü

- Süperpozisyon, girişim, ölçüm
- Quantum state → birim çemberde bir vektör
- Şimdi: operatörleri birim çember üzerindeki **hareket** olarak okumak

::: {.notes}
Birim çember modeli artık operatörleri görselleştirmek için kullanılıyor. Bir operatör, çemberdeki bir vektörü başka bir vektöre taşıyan bir harekete karşılık geliyor. Dönme = belirli bir açı kadar döndürmek.
:::

---

## Birim Çember Üzerinde İşlem

Quantum state $|v\rangle = (\cos\theta, \sin\theta)^T$ bir noktayı temsil ediyor.

Bir operatör:
- $|0\rangle = (1,0)$'ı $|+\rangle = (1/\sqrt{2}, 1/\sqrt{2})$'ye götürmüşse
- Aynı operatörü $|+\rangle$'a uygularsak nereye gideriz?

Bu soru, operatörün birim çember üzerindeki hareketi sistematik hale getiriyor.

::: {.callout-note}
Görsel eklenecek: birim çemberde |0⟩ → |+⟩ geçişi, ardından |+⟩ → ? sorusu.
:::

::: {.notes}
Q40 notebook'u tam bu soruyla başlıyor. Belirli bir başlangıç ve bitiş bilinen operatörü inşa etmek, operatörleri hareket olarak anlamayı gerektiriyor.

İki senaryo veriliyor: (1) $|0\rangle \to |+\rangle$ ve (2) $|1\rangle \to |-\rangle$. Her ikisi de 45° dönme. Bunu fark ettikten sonra dönme operatörü tanımlanabilir.
:::

---

## Keyfi State Hazırlama

Bilinmeyen herhangi bir $\theta$ açısındaki state'e ulaşmak:

$$
\begin{bmatrix}\cos\theta\\\sin\theta\end{bmatrix} = R(\theta)|0\rangle
$$

Başlangıç hep $|0\rangle$ — hedef $\theta$ açısındaki state.

**ry kapısı** bu dönmeyi gerçekleştiriyor:

```python
qc.ry(2*theta, q[0])  # Qiskit'te açı parametresi 2θ
```

::: {.callout-note}
Görsel eklenecek: |0⟩'dan θ açısındaki state'e birim çember üzerinde dönme yayı.
:::

::: {.notes}
ry kapısının Qiskit'te $2\theta$ almasının nedeni: tam Bloch küresi formalizminde $ry(\varphi)$ kapısı $\varphi/2$ açılı dönmeye karşılık geliyor. Gerçek-değerli qubit modelinde bu $\theta$ ile eşleşmek için $2\theta$ gönderilmesi gerekiyor.

Pratikte öğrencinin bilmesi gereken: "istenen state $\theta$ açısında ise Qiskit'te $2\theta$ yaz". Bu detay kafa karıştırabilir — dikkat.

Keyfi state hazırlama Grover algoritmasında önemli: algoritma başında tüm olası durumların süperpozisyonunu hazırlamak gerekiyor. Bu ry zinciriyle (veya Hadamard ile) yapılıyor.
:::

---

## Dönme Operatörü Matrisi

$$
R(\theta) = \begin{bmatrix}\cos\theta & -\sin\theta\\\sin\theta & \cos\theta\end{bmatrix}
$$

Etkisi:

$$
R(\theta)\begin{bmatrix}\cos\phi\\\sin\phi\end{bmatrix} = \begin{bmatrix}\cos(\phi+\theta)\\\sin(\phi+\theta)\end{bmatrix}
$$

- Açıyı $\theta$ kadar artırıyor — birim çemberde saat tersi yönde dönme

::: {.notes}
Dönme matrisi standart bir lineer cebir objesi. $R(\theta)$ açıyı $\theta$ artırıyor. $R(\theta_1) \cdot R(\theta_2) = R(\theta_1 + \theta_2)$ — açılar toplanıyor.

Özellikleri:
- $R(0) = I$ (sıfır dönme = Identity)
- $R(-\theta) = R(\theta)^{-1}$ (tersi, ters yönde dönme)
- $R(360°) = R(0°) = I$ (tam tur, başa dönüş)
- Determinant = 1, unitary ✓

Bu matrisin özel bir önemi var: quantum operatörlerin unitary olma zorunluluğunu görsel olarak karşılıyor. Birim çemberdeki nokta yeni bir birim çember noktasına gidiyor — norm korunuyor.
:::

---

## Dönme Özellikleri

| Özellik | İfade |
|---------|-------|
| Kimlik | $R(0) = I$ |
| Ters | $R(\theta)^{-1} = R(-\theta)$ |
| Bileşim | $R(\theta_1) R(\theta_2) = R(\theta_1 + \theta_2)$ |
| Norm korunumu | $\|R(\theta)|\psi\rangle\| = \||\psi\rangle\|$ |

Hadamard dönme mi? **Hayır** — Hadamard yansıma kategorisinde (sonraki konu).

::: {.notes}
Bu tablo dönme operatörünün cebirsel özelliklerini özetliyor. Bileşim özelliği özellikle kullanışlı: art arda iki dönme, tek büyük dönmeye eşdeğer.

Hadamard dönme değil — bu sık bir hata. Hadamard $H^2 = I$ sağlıyor (kendi tersi kendisi). Dönmede $R(\theta)^{-1} = R(-\theta)$, sadece $\theta = 180°$ için $R(180°)^{-1} = R(-180°) = R(180°)$ olur. Ama Hadamard başka özelliklere sahip — aslında yansıma kategorisinde.
:::

---

::: {.callout-warning}
## Dikkat — Karıştırılabilecek Noktalar

**ry parametresi: Qiskit'te $2\theta$, formülde $\theta$**\
Birim çember modelinde $\theta$ açı, Qiskit'e $2\theta$ gönderilir. Dikkat.

**$R(\theta)$'nın normu koruması ≠ "state değişmedi"**\
Norm 1'de kalıyor ama vektörün yönü değişiyor. Norm korunumu = geçerli state → geçerli state.

**Dönme ile yansıma karıştırılmamalı**\
$R(\theta)^2 = R(2\theta) \neq I$ (genel $\theta$ için). Yansıma ise her zaman $F^2 = I$.
:::

---

## Qiskit ile State Hazırlama

```python
import numpy as np
from qiskit import QuantumRegister, ClassicalRegister, QuantumCircuit
from qiskit_aer import AerSimulator
from qiskit.quantum_info import Statevector

theta = np.pi / 3  # 60°

q = QuantumRegister(1)
qc = QuantumCircuit(q)
qc.ry(2 * theta, q[0])  # θ açısındaki state'e git

sv = Statevector(qc)
print(sv)  # [cos(θ), sin(θ)]
```

- `Statevector` simülatörü ölçüm yapmadan state'i veriyor
- Ölçüm ile `AerSimulator` → olasılıksal sonuç

::: {.notes}
`Statevector` simülatörü ölçüm olmadan quantum state'i döndürüyor. Bu, araştırma ve doğrulama için kullanışlı — gerçek kuantum bilgisayarda bunu yapamazsınız, ama simülatörde eğitim amaçlı kullanılıyor.

`AerSimulator` ise ölçümlü devrelerle kullanılıyor. Sonuç rastgele shots — ölçüm olasılıklarını gözlemleyebilirsiniz.

Egzersiz: ry ile $\theta = 0, 45°, 90°$ deneyin. Ölçüm sonuçlarının nasıl değiştiğini gözlemleyin.
:::

---

## Özet

1. Gerçek-değerli qubit operatörleri birim çember üzerinde **hareket**
2. **Dönme** $R(\theta)$: açıyı $\theta$ kadar artırır
3. **ry kapısı**: Qiskit'te dönme operatörü ($2\theta$ parametresi dikkat)
4. Dönme unitary: normu koruyor, geçerli state → geçerli state
5. Açılar toplandığı için art arda dönme bileşim kolaylaştırıyor

::: {.notes}
Dönme operatörleri birim çember geometrisiyle tamamen örtüşüyor. Sonraki konuda yansıma operatörlerini göreceğiz. Hadamard yansıma sınıfında — bu onu özel kılıyor: $H^2=I$, yani iki kez uygulamak geri döndürüyor.
:::

---

*Sonraki konu: yansıma operatörleri ve Hadamard'ın yansıma olarak okunması.*
