---
title: "Kuantum Durumu ve Görselleştirme"
subtitle: QBronze — S09
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-01-01
execute:
  echo: false
---

## Geçen Konudan Köprü

- Quantum state: norm=1 vektör, amplitude bileşenleri
- Ölçüm olasılığı = amplitüdün karesi
- Şimdi: bu vektörü **geometrik olarak görmek**

::: {.notes}
Soyut vektör dilini geometrik bir resme bağlamak hem sezgiyi güçlendiriyor hem de operatörleri hareket olarak okumayı mümkün kılıyor. Sonraki iki konuda (dönmeler ve yansımalar) bu görsel dil merkeze alınacak.
:::

---

## Birim Çember ve Temel Durumlar

Gerçek sayılı tek qubit durumları — birim çember üzerindeki noktalar:

$$
|\psi\rangle = \begin{bmatrix}a\\b\end{bmatrix}, \quad a^2+b^2=1 \quad \Leftrightarrow \quad (a,b) \text{ birim çemberde}
$$

Temel durumlar birim çemberde özel yönler:

$$
|0\rangle = (1,0) \quad |1\rangle = (0,1) \quad -|0\rangle = (-1,0) \quad -|1\rangle = (0,-1)
$$

::: {.callout-note}
Görsel eklenecek: koordinat düzleminde birim çember, |0⟩, |1⟩, |+⟩, |-⟩ vektörleri işaretli.
:::

::: {.notes}
Neden birim çember? $a^2+b^2=1$ koşulunun geometrik anlamı: $(a,b)$ noktası birim çember üzerinde. Tüm geçerli gerçek-değerli tek qubit durumları bu çemberin üzerindeki noktalara karşılık geliyor.

$|0\rangle$ çemberin sağ ucunda (1,0). $|1\rangle$ üstünde (0,1). Hadamard durumları: $|+\rangle = (1/\sqrt{2}, 1/\sqrt{2})$ — 45° açıda. $|-\rangle = (1/\sqrt{2}, -1/\sqrt{2})$ — -45°'de.

Bu görsel, operatörlerin ne yaptığını "hareket" olarak okumayı sağlıyor: bir operatör qubit'in vektörünü çember üzerinde başka bir noktaya taşıyor.
:::

---

## Açı Dili

Birim çember üzerindeki her noktayı açıyla tanımlayabiliriz:

$$
|\psi\rangle = \begin{bmatrix}\cos\theta\\\sin\theta\end{bmatrix}
$$

- $\theta = 0$: $|0\rangle$ durumu
- $\theta = 90°$: $|1\rangle$ durumu
- $\theta = 45°$: $|+\rangle$ durumu
- $\theta = -45°$: $|-\rangle$ durumu

Herhangi bir açı → geçerli bir quantum state

::: {.notes}
Trigonometrik parametrizasyon: $\cos^2\theta + \sin^2\theta = 1$ — norm koşulu otomatik sağlanıyor. Rastgele geçerli quantum state üretmek için rastgele $\theta$ seç ve $(\cos\theta, \sin\theta)$ al.

Bu parametrizasyonun avantajı: sonsuz sayıda quantum state var ve hepsini tek bir parametre ile temsil edebiliyoruz. Klasik bit iki nokta iken (0 veya 1), qubit birim çember üzerinde sonsuz nokta.

Dikkat: bu "gerçek-değerli qubit" modeli. Gerçek kuantum mekaniğinde kompleks amplitüdler var ve Bloch küresi üç boyutlu. Şimdilik gerçek sayılarla kalmak geometrik sezgiyi korumak için bilinçli bir seçim.
:::

---

## Olasılıkları Açıyla Okumak

$$
|\psi\rangle = \begin{bmatrix}\cos\theta\\\sin\theta\end{bmatrix}:
\quad Pr(0) = \cos^2\theta, \quad Pr(1) = \sin^2\theta
$$

Örnek: $\theta$ ile $\cos\theta = 3/5$, $\sin\theta = 4/5$:

$$
|\psi\rangle = \begin{bmatrix}3/5\\4/5\end{bmatrix}:
\quad Pr(0) = 9/25, \quad Pr(1) = 16/25
$$

Trigonometrik kimlik: $\sin^2\theta + \cos^2\theta = 1$ → toplam olasılık = 1 ✓

::: {.callout-note}
Görsel eklenecek: birim çemberde (3/5, 4/5) noktası ve Pr(0), Pr(1) gösterimi.
:::

::: {.notes}
Bu örnek (3/5, 4/5) kaynak notebook'ta özellikle seçilmiş: Pisagor üçgeni köşegenleri. $(3/5)^2 + (4/5)^2 = 9/25 + 16/25 = 25/25 = 1$ — güzel bir sayı.

Ölçüm olasılıklarını okuma: vektörü çemberde buluyorsunuz, yatay bileşenini (kos) karıyorsunuz → $Pr(0)$; dikey bileşenini (sin) karıyorsunuz → $Pr(1)$.

Geometrik sezgi: vektör ne kadar $|0\rangle$ eksenine (yatay) yakınsa $Pr(0)$ o kadar büyük. $|0\rangle$ yönünde tam olarak: $Pr(0)=1$, $Pr(1)=0$. $|1\rangle$ yönünde tam olarak: $Pr(0)=0$, $Pr(1)=1$.
:::

---

## Rastgele Geçerli Quantum State Üretmek

```python
import numpy as np

theta = np.random.uniform(0, 2*np.pi)  # rastgele açı
state = np.array([np.cos(theta), np.sin(theta)])

print(f"Durum: [{state[0]:.4f}, {state[1]:.4f}]")
print(f"Norm: {np.linalg.norm(state):.4f}")  # her zaman 1
print(f"Pr(0) = {state[0]**2:.4f}")
print(f"Pr(1) = {state[1]**2:.4f}")
```

- Her $\theta$ değeri geçerli bir state verir — ekstra doğrulama gereksiz

::: {.notes}
Bu kod parçası "rastgele quantum state üret" görevinin standart çözümü. Rastgele açı seç, trigonometrik fonksiyonlar norm koşulunu otomatik sağlıyor.

Alternatif: rastgele iki sayı seç ve normalleştir. Bu da işe yarıyor ama açı yöntemi daha temiz çünkü normalizasyon adımını atlıyor.

Öğrencilere göstermek için yararlı: norm kontrolü her zaman 1 çıkıyor. Bu, "birim çember üzerindeyiz" garantisi.
:::

---

## Özet

1. Gerçek-değerli tek qubit → birim çember üzerinde bir vektör
2. **Açı parametrizasyonu**: $|\psi\rangle = (\cos\theta, \sin\theta)^T$
3. Ölçüm olasılıkları: $Pr(0)=\cos^2\theta$, $Pr(1)=\sin^2\theta$
4. Sonsuz geçerli quantum state var — hepsi birim çemberin üzerinde
5. Operatörler birim çember üzerinde **hareket** olarak okunacak (sonraki konu)

::: {.notes}
Bu görsel dil bir sonraki konuda (süperpozisyon ve ölçüm) bağlam sağlamaya devam edecek. Dönmeler ve yansımalar konusunda ise tam olarak kullanılacak: operatörlerin etkisini "vektörü çevirmek" veya "eksen üzerinden yansıtmak" olarak okuyacağız.
:::

---

*Sonraki konu: süperpozisyon, girişim ve ölçümün collapse etkisi.*
