---
title: "Hadamard Operatörü"
subtitle: QTEA26 — Salı Oturum 3/3
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-03-10
execute:
  echo: false
---

## Foton Deneylerini Hatırlayalım

- Deney 1: tek ışın bölücü → ≈%50/%50
- Deney 3: iki ışın bölücü, dedektör yok → **yalnızca B1, B2 hiç tetiklenmiyor**
- Klasik model Deney 3'ü açıklayamadı → yeni matematiksel model gerekli
- Bu oturumda: ışın bölücünün kuantum modelini yazıyoruz

::: {.notes}
İlk oturumda bıraktığımız soruyu hatırlayın: foton gözlemlenmediğinde her iki yolu eş zamanlı aldığında B2'ye giden katkılar birbirini siliyordu. Bu siliş mekanizmasını matematiksel olarak tanımlamamız gerekiyor.

Cevap Hadamard operatörü. Işın bölücünün kuantum mekaniğindeki tam karşılığı. Bu oturumda önce matematiksel tanımı yapacağız, sonra Qiskit ile foton deneylerini simüle edeceğiz.
:::

---

## Kubit ve Ket Notasyonu

- **Kubit** — kuantum mekaniğinin temel bilgi birimi
- Başlangıç durumu $|0\rangle$, karşı durum $|1\rangle$ — ikisi sütun vektörü olarak:

$$|0\rangle = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \qquad |1\rangle = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$$

- $|\cdot\rangle$ gösterimi: **ket notasyonu** — kuantum mekaniğinde sütun vektörü
- Kuantum operatörleri bu vektörler üzerine matris çarpımı olarak uygulanıyor

::: {.notes}
Ket notasyonu kuantum mekaniğinin standart gösterimi. $|0\rangle$ "ket sıfır" okunuyor. Sezgisel anlam: kuantum sistemi şu an kesin olarak 0 durumunda.

Vektör temsili neden gerekli? Çünkü kuantum mekaniğinde durumlar sayısal değil, vektör. $|0\rangle = (1, 0)$ ve $|1\rangle = (0, 1)$ bunların en basit örnekleri. Hadamard kapısı bu vektörleri matris çarpımıyla dönüştürüyor.

Klasik bitle karşılaştırın: klasik bit ya 0 ya 1 — skalar bir değer. Kubit $|0\rangle$ ya da $|1\rangle$ — ama bu ikisinin doğrusal kombinasyonu da mümkün. Bu, kuantum mekaniğinin klasikten temel ayrılış noktası.
:::

---

## Hadamard Kapısı

$$
H = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}
$$

- **FairCoin matrisi** ile karşılaştırın:

$$
\text{FairCoin} = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & 1/2 \end{pmatrix}
$$

- Fark: Hadamard'ın sağ sütununda $-1/\sqrt{2}$ var
- Bu negatif değer **girişime** imkân tanıyor

::: {.notes}
Hadamard matrisini FairCoin ile yan yana koymak kritik. İkisi de "iki çıkışa eşit dağılım" veriyor gibi görünüyor — ama Hadamard'ın sağ sütunundaki eksi işaret her şeyi değiştiriyor.

FairCoin matrisinde tüm girişler pozitif: $1/2$. Bu matris uygulandığında olasılıklar toplanıyor, sıfıra inemiyor. Hadamard matrisinde $-1/\sqrt{2}$ var: bu, genliklerin birbirini iptal edebileceği anlamına geliyor.

$1/\sqrt{2} \approx 0.707$ — neden bu sayı? Kuantum mekaniğinde durum vektörünün normu 1 olmak zorunda. $\|H|0\rangle\|^2 = (1/\sqrt{2})^2 + (1/\sqrt{2})^2 = 1$ — koşul sağlanıyor.
:::

---

## $H|0\rangle$ — Matematiksel Uygulama

$$
H|0\rangle = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \frac{1}{\sqrt{2}}|0\rangle + \frac{1}{\sqrt{2}}|1\rangle
$$

- Her iki durum için genlik: $+\tfrac{1}{\sqrt{2}}$
- Ölçüm olasılıkları: $\left(\tfrac{1}{\sqrt{2}}\right)^2 = \tfrac{1}{2}$ — %50/%50
- Sonuç: Deney 1'in matematiksel modeli

::: {.notes}
Matris çarpımını adım adım yapalım. $H$ matrisinin ilk satırı $(1, 1)$ — bunu $(1, 0)$ ile iç çarpım yaparsak $1 \cdot 1 + 1 \cdot 0 = 1$. İkinci satır $(1, -1)$ — iç çarpım $1 \cdot 1 + (-1) \cdot 0 = 1$. Sonuç: $(1, 1)$, $1/\sqrt{2}$ ile çarpılıyor.

Ölçüm olasılığı genliğin karesi: $P(0) = (1/\sqrt{2})^2 = 1/2$, $P(1) = (1/\sqrt{2})^2 = 1/2$. Tam olarak Deney 1'de gördüğümüz %50/%50.

Buradaki $\frac{1}{\sqrt{2}}|0\rangle + \frac{1}{\sqrt{2}}|1\rangle$ ifadesi bir süperpozisyon durumu. Ölçülmeden önce kubit bu iki durum arasında asılı — ölçüm yapıldığında %50 ihtimalle 0, %50 ihtimalle 1 çıkıyor.
:::

---

## $H|1\rangle$ — Başlangıç Durumu Farklıysa

$$
H|1\rangle = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} 0 \\ 1 \end{pmatrix} = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ -1 \end{pmatrix} = \frac{1}{\sqrt{2}}|0\rangle - \frac{1}{\sqrt{2}}|1\rangle
$$

- $|0\rangle$ genliği: $+\tfrac{1}{\sqrt{2}}$, $\;|1\rangle$ genliği: $-\tfrac{1}{\sqrt{2}}$
- Ölçüm olasılıkları: yine %50/%50 — işaret ölçümü değiştirmiyor
- Ama genliğin **işareti** bir sonraki kapı uygulandığında fark yaratır

::: {.notes}
İkinci sütunu hesaplayalım. İlk satır: $1 \cdot 0 + 1 \cdot 1 = 1$. İkinci satır: $1 \cdot 0 + (-1) \cdot 1 = -1$. Sonuç: $(1, -1)/\sqrt{2}$.

Ölçüm olasılıkları: $P(0) = (1/\sqrt{2})^2 = 1/2$, $P(1) = (-1/\sqrt{2})^2 = 1/2$. Negatif genliğin karesi pozitif — ölçüm sonucu değişmiyor.

Ama bu eksi işaret tek H uygulandığında görünmez; iki H ardışık uygulandığında ortaya çıkıyor. Görev 1'de $|1\rangle$'den başlayıp iki H uygulayacağız — o zaman bu işaretin önemi netleşecek.
:::

---

## Deney 1 — Qiskit ile

```python
from qiskit import QuantumRegister, ClassicalRegister, QuantumCircuit
from qiskit_aer import AerSimulator
from qiskit.visualization import plot_histogram

q  = QuantumRegister(1, "qreg")
c  = ClassicalRegister(1, "creg")
qc = QuantumCircuit(q, c)

qc.h(q[0])
qc.measure(q, c)

job    = AerSimulator().run(qc, shots=10000)
counts = job.result().get_counts(qc)

n0 = counts['0']
n1 = counts['1']
print("Durum 0: %", 100 * n0 / (n0 + n1))
print("Durum 1: %", 100 * n1 / (n0 + n1))
plot_histogram(counts)
```

::: {.notes}
`qc.h(q[0])` satırı Hadamard kapısını uyguluyor. Gerisi önceki oturumdan bilindik: AerSimulator, shots, counts.

10000 shot ile çalıştırıldığında 0 ve 1 sayıları birbirine yakın çıkıyor — tam 5000/5000 değil, ama istatistiksel olarak yakın. Her shot bağımsız bir deney.

Frekans hesabı: `100 * n0 / (n0 + n1)` toplam sayıya bölerek yüzde veriyor. `counts['0']` gibi anahtar erişimi counts sözlüğünden ham sayıya ulaşıyor.

Önceki oturumun x-gate devresinden fark nerede? x-gate deterministik sonuç üretiyordu: `{'1': 10000}`. Hadamard olasılıksal: her shot farklı olabilir. Kuantum sistemler olasılıksal çıktı üretiyor.
:::

---

## Deney 3 — İki Hadamard: Matematik

$$
H \cdot H|0\rangle = H \left(\frac{1}{\sqrt{2}}|0\rangle + \frac{1}{\sqrt{2}}|1\rangle\right) = \frac{1}{\sqrt{2}} H|0\rangle + \frac{1}{\sqrt{2}} H|1\rangle
$$

$$
= \frac{1}{\sqrt{2}} \cdot \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle) + \frac{1}{\sqrt{2}} \cdot \frac{1}{\sqrt{2}}(|0\rangle - |1\rangle)
$$

$$
= \frac{1}{2}|0\rangle + \frac{1}{2}|1\rangle + \frac{1}{2}|0\rangle - \frac{1}{2}|1\rangle = |0\rangle
$$

- $|1\rangle$'in genlikleri: $+\tfrac{1}{2}$ ve $-\tfrac{1}{2}$ → **birbirini iptal eder**
- $|0\rangle$'ın genlikleri: $+\tfrac{1}{2}$ ve $+\tfrac{1}{2}$ → **güçlenir** → kesin $|0\rangle$

::: {.notes}
Bu hesabı adım adım izleyelim. Birinci H, $|0\rangle$'ı $\frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)$'e taşıdı. İkinci H bunu alıyor ve doğrusallığı kullanarak her terime ayrı uyguluyor.

$H|0\rangle$ ve $H|1\rangle$ sonuçlarını yerine koyuyoruz. $|1\rangle$ terimlerine bakın: $+\frac{1}{2}|1\rangle$ ve $-\frac{1}{2}|1\rangle$ — toplamları sıfır, $|1\rangle$ tamamen iptal oldu. $|0\rangle$ terimleri: $+\frac{1}{2}|0\rangle$ ve $+\frac{1}{2}|0\rangle$ — toplamı $|0\rangle$.

FairCoin ile karşılaştırın: FairCoin'i iki kez uygularsak $v = (1/2, 1/2)$ kalıyor — değişmiyor. Hadamard ise geri döndürüyor. Bu, foton deneyindeki B2'nin hiç tetiklenmemesinin matematiksel açıklaması.
:::

---

## Deney 3 — Qiskit ile

```python
q2  = QuantumRegister(1, "qreg2")
c2  = ClassicalRegister(1, "creg2")
qc2 = QuantumCircuit(q2, c2)

qc2.h(q2[0])
qc2.h(q2[0])
qc2.measure(q2, c2)

job     = AerSimulator().run(qc2, shots=10000)
counts2 = job.result().get_counts(qc2)
print(counts2)  # {'0': 10000}
```

- İki Hadamard → tek sonuç: her zaman $|0\rangle$
- Matematiksel öngörü Qiskit ile doğrulandı
- $HH = I$ — Hadamard kendi tersine eşit

::: {.notes}
Simülatörde çalıştırıldığında sonuç net: `{'0': 10000}`. 10000 shot'un tamamı 0 çıkıyor. Foton deneyinde B2'ye hiç foton gitmeyen durumun tam karşılığı bu.

$HH = I$ ilişkisi bu sonuçtan doğrudan çıkıyor: Hadamard kendi tersiyle aynı operatör. Bunu matris çarpımıyla doğrulayabilirsiniz:

$$H \cdot H = \frac{1}{\sqrt{2}} \begin{pmatrix}1&1\\1&-1\end{pmatrix} \cdot \frac{1}{\sqrt{2}} \begin{pmatrix}1&1\\1&-1\end{pmatrix} = \frac{1}{2}\begin{pmatrix}2&0\\0&2\end{pmatrix} = \begin{pmatrix}1&0\\0&1\end{pmatrix} = I$$

Kuantum kapılarının genel özelliği: tüm kuantum kapıları tersine çevrilebilir. Hadamard özel bir durumda kendi tersiyle aynı.
:::

---

## FairCoin × 2 ile Hadamard × 2 Karşılaştırması

| | FairCoin $\times$ 2 | Hadamard $\times$ 2 |
|---|---|---|
| Başlangıç | $(1,\ 0)$ | $|0\rangle = (1,\ 0)$ |
| 1. adım sonrası | $(0.5,\ 0.5)$ | $\tfrac{1}{\sqrt{2}}(|0\rangle + |1\rangle)$ |
| 2. adım sonrası | $(0.5,\ 0.5)$ | $|0\rangle = (1,\ 0)$ |
| Açıklama | Olasılıklar toplanır | Genlikler iptal eder |

- Klasik modelde 2. adım 1. adımı **değiştirmez**
- Kuantum modelinde 2. adım 1. adımı **geri alır**

::: {.notes}
Bu tablo oturumun en önemli çıktısı. İki model aynı başlangıçtan yola çıkıyor ama tamamen farklı yerlere varıyor.

FairCoin satırında: $v_1 = (0.5, 0.5)$, ikinci FairCoin uygulandığında yine $(0.5, 0.5)$ — model sabit noktada. Değişiklik yok çünkü olasılıklar sadece toplanıyor.

Hadamard satırında: $v_1 = \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)$, ikinci Hadamard bunu $|0\rangle$'a geri döndürüyor. Negatif genlikler $|1\rangle$ bileşenini iptal etti.

Olasılıklar her zaman pozitif, toplanır, sıfırlanamaz. Genlikler pozitif ya da negatif olabilir, iptal edebilir. Bu ayrım kuantum hesaplamanın klasikten farkının özeti.
:::

---

## Görev: $|1\rangle$'den Başlarsak?

```python
# Deney A: x-gate → tek H → ölçüm
qc_a = QuantumCircuit(QuantumRegister(1), ClassicalRegister(1))
qc_a.x(qc_a.qregs[0][0])
qc_a.h(qc_a.qregs[0][0])
qc_a.measure(qc_a.qregs[0], qc_a.cregs[0])
# beklenti: %50/%50

# Deney B: x-gate → iki H → ölçüm
qc_b = QuantumCircuit(QuantumRegister(1), ClassicalRegister(1))
qc_b.x(qc_b.qregs[0][0])
qc_b.h(qc_b.qregs[0][0])
qc_b.h(qc_b.qregs[0][0])
qc_b.measure(qc_b.qregs[0], qc_b.cregs[0])
# beklenti: her zaman |1⟩
```

::: {.notes}
Bu görev $HH = I$ ilişkisini $|1\rangle$ başlangıç durumundan doğruluyor. $|1\rangle$'den başlayıp iki H uygularsak $|1\rangle$'e geri dönmeliyiz.

Matematiksel doğrulama: $HH|1\rangle = H \cdot \frac{1}{\sqrt{2}}(|0\rangle - |1\rangle) = \frac{1}{\sqrt{2}}(H|0\rangle - H|1\rangle)$. Açarsak: $= \frac{1}{\sqrt{2}}\left(\frac{|0\rangle + |1\rangle}{\sqrt{2}} - \frac{|0\rangle - |1\rangle}{\sqrt{2}}\right) = \frac{1}{2}\left(|0\rangle + |1\rangle - |0\rangle + |1\rangle\right) = |1\rangle$.

$|0\rangle$ terimleri iptal oluyor, $|1\rangle$ terimleri güçleniyor. Deney B'de `{'1': 10000}` çıkıyor — başlangıç $|1\rangle$ olduğu için geri dönen de $|1\rangle$.
:::

---

## Özet

- Hadamard = kuantum yazı-tura operatörü = ışın bölücünün matematiksel modeli
- $H|0\rangle$: eşit genlikli süperpozisyon → ölçümde %50/%50
- $H|1\rangle$: negatif genlikli süperpozisyon → ölçümde yine %50/%50
- $HH = I$ → iki kez uygulamak başlangıca döndürür; girişim B2'yi sıfırlar
- Negatif genlikler → girişim → klasik olasılık modelinde yok

::: {.notes}
Üç oturumu bağlayalım. Birinci oturumda foton deneyleriyle klasik modelin yetersizliğini gördük. İkinci oturumda Qiskit'te x-gate ile deterministik devreler yazdık. Bu oturumda Hadamard kapısıyla foton deneylerini simüle ettik ve matematiksel modelini yazdık.

Hadamard'ın getirdiği şey: negatif genlikler. Bu, girişime — ve dolayısıyla B2'nin hiç tetiklenmemesine — yol açıyor. Klasik model bunu üretemez çünkü olasılıklar negatif olamaz.
:::
