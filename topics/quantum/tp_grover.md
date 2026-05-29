---
title: "Grover Arama Algoritması"
subtitle: QBronze — S16
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-01-01
execute:
  echo: false
---

## Geçen Konudan Köprü

- Süperpozisyon, girişim, dönme, yansıma, dolanıklık
- Phase kickback, çoklu kontrollü kapılar
- Şimdi: tüm bu araçlar **algoritmik bir yapıda**

::: {.notes}
Grover algoritması bu anlatım hattının algoritmik doruk noktası. Daha önce öğrenilen her şey — süperpozisyon hazırlama, oracle (phase kickback), inversion about the mean (yansıma bileşimi) — burada bir araya geliyor.

Grover'ı "sihirli bir hız kazanımı" olarak değil, geometrik bir iterasyon olarak anlamak hedef.
:::

---

## Problem: Yapılandırılmamış Arama

$N$ elemanlı bir listede $M$ hedef eleman var ($M \ll N$). Listeye yalnızca "bu eleman hedef mi?" sorusu sorulabiliyor.

- **Klasik:** En kötü durumda $O(N)$ sorgu
- **Grover:** $O(\sqrt{N})$ sorgu — kare kök hızlanma

$N = 1.000.000$, $M = 1$:
- Klasik: ~500.000 sorgu beklenen
- Grover: ~785 sorgu ($\approx \pi/4 \cdot \sqrt{N}$)

::: {.notes}
Grover'ın kanıtlanmış kuantum avantajı var: $O(\sqrt{N})$ kuantum sorguda yapılabilen şey için klasik $O(N)$ gerekiyor (kare kök hızlanma). Bu polinom hızlanma, üstel hızlanmadan daha mütevazı ama gerçek.

Önemli not: bu "herhangi bir listeyi arayabilirim" değil — "oracle erişimi olan yapılandırılmamış listede". Oracle, "bu eleman hedef mi?" sorusuna evet/hayır cevabı veriyor.

Uygulama alanları: veritabanı araması (özellikle güvenli arama), kriptografi (hash çakışmaları bulma), optimizasyon.
:::

---

## Ortalama Etrafında Yansıma (Inversion About the Mean)

Bir vektörün bileşenleri: $[v_1, v_2, \ldots, v_N]$, ortalaması $\bar{v}$.

Yansıma:

$$
v_i \to 2\bar{v} - v_i
$$

- Ortalamanın üstündekiler aşağı çekiliyor
- Ortalamanın altındakiler yukarı itiyor

::: {.callout-note}
Görsel eklenecek: bar grafiği — amplitüdler, ortalama çizgisi, yansıma sonrası büyüyen hedef amplitüdü.
:::

::: {.notes}
Ortalama etrafında yansıma sezgisel: ortalamaya göre ayna tutmak. Ortalamanın iki katından bir bileşeni çıkar: $2\bar{v} - v_i$.

Örnek: $v = [0.3, 0.5, 0.1, 0.1]$, $\bar{v} = 0.25$. Yansıma: $2(0.25) - 0.3 = 0.2$, $2(0.25) - 0.5 = 0.0$, $2(0.25) - 0.1 = 0.4$, $2(0.25) - 0.1 = 0.4$.

Bu bir lineer dönüşüm ve uzunluğu koruyan (unitary) bir operatör. Grover'da tüm hedef olmayan amplitüdler eşit başlıyor, oracle bir hedef amplitüdünü işaretliyor (negatif yapıyor). Sonra ortalama etrafında yansıma bu işaretli amplitüdü büyütüyor.
:::

---

## Grover İterasyonunun Geometrik Anlamı

Grover her adımda iki yansıma yapıyor:

1. **Oracle yansıması**: hedef durumun amplitüdünü negatife çevirir
2. **Diffüzör yansıması**: $|+\rangle$ durumuna göre yansıma (inversion about the mean)

İki yansımanın bileşimi = **dönme**

::: {.callout-note}
Görsel eklenecek: iki boyutlu Hilbert uzayında hedef vektör, iki yansıma eksenini ve her iterasyondaki açı artışını gösteren geometrik diyagram.
:::

::: {.notes}
İki yansımanın geometrik yorumu: iki yansıma eksenine göre arka arkaya yansıma, bir dönme üretiyor. Dönme açısı $2\theta$ — burada $\theta = \arcsin(\sqrt{M/N})$.

Her iterasyon bu açı kadar döndürüyor. $\pi/(4\theta)$ iterasyon sonra hedef durum maksimum genliğe ulaşıyor.

Bu geometrik yorum, neden $\sqrt{N}$ iterasyon gerektiğini açıklıyor: küçük $M/N$ için $\theta \approx \sqrt{M/N}$ küçük, ve $\pi/(4\theta) \approx \pi\sqrt{N}/(4\sqrt{M}) = O(\sqrt{N/M})$.
:::

---

## Grover Algoritmasının Genel Yapısı

1. **Hazırlık**: tüm olası durumlarda eşit amplitüdlü süperpozisyon: $H^{\otimes n}|0\rangle^n$
2. **Oracle**: hedef durumun amplitüdünü negatife çevir
3. **Diffüzör**: ortalama etrafında yansıma uygula
4. **Tekrar**: adım 2-3'ü $\lfloor \pi\sqrt{N/M}/4 \rfloor$ kez
5. **Ölçüm**: yüksek olasılıkla hedef durum ölçülür

```
|0⟩^n → H^⊗n → [Oracle → Diffüzör]^k → Ölçüm → hedef
```

::: {.notes}
Algoritmanın her adımı ne yapıyor:

Hazırlık: $H^{\otimes n}$ her qubit'e Hadamard uyguluyor → tüm $2^n$ olası durumda eşit $1/\sqrt{N}$ amplitüd.

Oracle: "Bu durum hedef mi?" işlevini gerçekleştiriyor. Phase kickback mekanizmasıyla hedef durumun amplitüdünü negatife çeviriyor — diğerleri değişmez.

Diffüzör: $2|+\rangle\langle+| - I$ operatörü. Bu tam olarak "average etrafında yansıma." Uygulanış: $H^{\otimes n}$, ardından $|0\rangle$ etrafında faz işaretleme, ardından $H^{\otimes n}$.

İterasyon sayısı: çok az → hedef yeterince büyümemiş. Çok fazla → "geçti", amplitüd tekrar küçülüyor. Optimal: $\pi\sqrt{N/M}/4$.
:::

---

## Tek Qubit Temsili — Geometrik Sezgi

İki boyutlu alt uzay: $|w\rangle$ (hedef durumlar), $|w^\perp\rangle$ (hedef olmayan durumlar)

Başlangıç durumu bu iki yönün kombinasyonu:

$$
|s\rangle = \sin\theta |w\rangle + \cos\theta |w^\perp\rangle, \quad \sin\theta = \sqrt{M/N}
$$

Her Grover iterasyonu $2\theta$ döndürüyor. $k$ iterasyon sonrası:

$$
\sin\left((2k+1)\theta\right) \approx 1 \text{ için } k \approx \frac{\pi}{4\theta} \approx \frac{\pi}{4}\sqrt{\frac{N}{M}}
$$

::: {.callout-note}
Görsel eklenecek: iki boyutlu Bloch benzeri görsel — başlangıç açısı, her iterasyon dönme, hedef yönüne yaklaşma.
:::

::: {.notes}
Grover'ı tek qubit temsiliyle anlamak, neden kare kök kadar iterasyon gerektiğini geometrik olarak gösteriyor.

Başlangıç açısı $\theta = \arcsin(\sqrt{M/N})$. $M=1$, $N=4$ için $\theta=30°$. Hedefe ulaşmak için $90°$ gerekiyor (yani $|w\rangle$ yönünde olmak). Her iterasyon $2\times30°=60°$ döndürüyor. Bir iterasyonda $30° + 60° = 90°$: tam hedef. Gerçekten $\lfloor\pi/(4\times30°)\rfloor = 1$ iterasyon.

$M=1$, $N=100$ için $\theta \approx 5.74°$. Gerekli: $(90°-5.74°)/(2\times5.74°) \approx 7.3$ → 7 iterasyon. Doğrulama: 7 iterasyon sonra $P(\text{hedef}) \approx 96\%$.
:::

---

## Qiskit ile Grover Uygulaması

```python
from qiskit import QuantumCircuit, QuantumRegister, ClassicalRegister
from qiskit_aer import AerSimulator
from qiskit.visualization import plot_histogram

n = 3  # 8 elemanlı liste (2^3)
target = '101'  # hedef eleman

q = QuantumRegister(n)
c = ClassicalRegister(n)
qc = QuantumCircuit(q, c)

# Hazırlık: süperpozisyon
qc.h(q)

# Grover iterasyonu (tek iterasyon, N=8, M=1 için ~π/4*√8≈2.2 → 2 iterasyon)
for _ in range(2):
    # Oracle: hedef durumun fazını işaretle
    # ... (hedef bağlı MCX yapısı)
    
    # Diffüzör: ortalama etrafında yansıma
    qc.h(q)
    qc.x(q)
    qc.h(q[-1])
    qc.mcx(list(q[:-1]), q[-1])
    qc.h(q[-1])
    qc.x(q)
    qc.h(q)

qc.measure(q, c)
```

::: {.notes}
Bu iskelet kod. Oracle kısmı hedefe göre değişiyor — hangi durumu işaretleyeceğiniz, o durumu kontrol eden MCX yapısı.

Diffüzör standart yapı: H, X, (n-1 kontrollü Z), X, H. Bu tam olarak $2|+\rangle\langle+| - I$ operatörünü gerçekleştiriyor.

Ayrı örnek notuna (`ornek_q92_grover-devre.md`) taşınan materyal: farklı oracle yapıları, MCX derinliği ve devre optimizasyonu, çoklu hedef durumu için iterasyon sayısı hesabı.
:::

---

::: {.callout-warning}
## Dikkat — Karıştırılabilecek Noktalar

**İterasyon sayısı önemli — çok fazla bozuyor**\
$k_{\text{opt}} \approx \pi\sqrt{N/M}/4$. Fazlası amplitüdü tekrar düşürüyor.

**Oracle hedef bilmiyor, sadece tanıyor**\
Oracle "bu hedef mi?" sorusunu cevaplayabiliyor ama listeyi gezmiyoruz. Bu ayrım önemli.

**Kare kök hızlanma eksponansiyel değil**\
$O(\sqrt{N})$ ≠ $O(\log N)$. Grover güçlü ama her problemi üstel hızlandırmıyor.
:::

---

## Özet

1. **Grover** $O(\sqrt{N})$ sorguda yapılandırılmamış aramayı çözüyor
2. **Oracle**: hedef durumun amplitüdünü negatife çeviriyor (phase kickback)
3. **Diffüzör**: ortalama etrafında yansıma (inversion about the mean)
4. Her iterasyon $2\theta$ döndürüyor — $\pi/(4\theta)$ iterasyon yeterli
5. **Geometrik yorum**: iki boyutlu alt uzayda hedef yönüne yaklaşma

::: {.notes}
QBronze hattı bu konuyla tamamlanıyor. Bit → olasılıksal sistem → kuantum sistem → operatörler → dolanıklık → protokoller → algoritma yolculuğu Grover'da sonlanıyor.

Grover bir kapı değil, mihenk taşı: "kuantum algoritma nedir?" sorusunun en erişilebilir cevabı. Süperpozisyon + girişim + ölçüm üçlüsünü algoritmik değer üreten bir yapıda görmek, kuantum hesaplamanın özünü anlatıyor.
:::

---

*QBronze hattı tamamlandı.*
