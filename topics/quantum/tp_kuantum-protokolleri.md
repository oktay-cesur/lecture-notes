---
title: "Kuantum Protokolleri"
subtitle: QBronze — S15
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-01-01
execute:
  echo: false
---

## Geçen Konudan Köprü

- Bell durumu: $|\Phi^+\rangle = \frac{1}{\sqrt{2}}(|00\rangle+|11\rangle)$
- Superdense coding: tek qubit → iki klasik bit
- Şimdi: **teleportasyon** ve çoklu kontrollü kapılar

::: {.notes}
Superdense coding'de dolanıklık bilgi taşıma kapasitesini artırıyordu. Teleportasyonda ise dolanıklık bir quantum state'in "bilgisini" fiziksel taşıma olmaksızın aktarmak için kullanılıyor.
:::

---

## Kuantum Teleportasyon — Ana Fikir

**Hedef:** $|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$ durumunu Asja'dan Balvis'e aktarmak

**Kısıtlar:**
- $\alpha, \beta$ bilinmiyor (ya da öğrenilemez — klonlama yasağı)
- Klasik kanal mevcut
- Dolanık çift paylaşılıyor (önceden hazırlanmış)

**Sonuç:** Klasik 2 bit gönderilerek Balvis $|\psi\rangle$'yi yeniden üretiyor

::: {.notes}
Teleportasyon için "ışıktan hızlı bilgi iletimi" düşünülebilir — bu yanlış. Klasik kanal gerekiyor (2 bit). Klasik kanal ışıktan hızlı olamaz. Dolayısıyla teleportasyon Einstein nedenselliğini çiğnemiyor.

Taşınan şey ne? Quantum state'in bilgisi. Asja'da state yok oluyor, Balvis'te yeniden oluşuyor. Fiziksel parçacık taşınmıyor.

Klonlama yasağı (no-cloning theorem): bilinmeyen bir quantum state'i kopyalamak mümkün değil. Bu yüzden "kopyala-yapıştır" mümkün değil, "kes-yapıştır" gibi çalışıyor.
:::

---

## Teleportasyon Protokolü — Adımlar

**Başlangıç:** Asja'da $|q_0\rangle = |\psi\rangle$, $|q_1\rangle$; Balvis'te $|q_2\rangle$. $(|q_1\rangle, |q_2\rangle)$ dolanık çift.

1. Asja Bell ölçümü uygular: $|q_0\rangle$ ve $|q_1\rangle$ üzerine $CNOT + H$ + ölçüm
2. Asja iki klasik bit gönderir $(c_0, c_1)$
3. Balvis sonuca göre düzeltme uygular:
   - $(0,0)$: hiçbir şey yapma
   - $(0,1)$: $X$ uygula
   - $(1,0)$: $Z$ uygula
   - $(1,1)$: $ZX$ uygula

Sonuç: Balvis'in $|q_2\rangle$, Asja'nın orijinal $|\psi\rangle$'si oldu.

::: {.callout-note}
Devre diyagramı eklenecek: 3 qubit, Bell ölçümü + klasik kanal + düzeltme adımları.
:::

::: {.notes}
Protokol ayrıntısı:

Adım 1 — Bell ölçümü: Asja'nın $|q_0, q_1\rangle$'ye CNOT (q0 kontrol, q1 hedef) + H(q0) + her iki kubiti ölçmesi. Bu Bell ölçümü adı verilen işlem. Sonuç dört olasılıktan biri.

Adım 2 — Klasik kanal: ölçüm sonucu iki klasik bit (c0, c1). Bu iki bit Balvis'e gönderiliyor.

Adım 3 — Düzeltme: Balvis alınan bitlere göre doğru kapıyı uyguluyor. c1=1 ise X (bit çevirme gerekiyor), c0=1 ise Z (faz düzeltmesi gerekiyor).

Neden bu dört seçenek? Bell ölçümü dört olası sonuç veriyor. Her sonuç, Balvis'in $|q_2\rangle$'sinin $|\psi\rangle$'den nasıl "saptığını" kodluyor. Uygun düzeltme bu sapmanın tersini uyguluyor.

Qiskit'te devre: 3 kubit, 2 klasik bit, koşullu kapılar (if_test).
:::

---

## Teleportasyon Devresinde Çalıştırma

```python
from qiskit import QuantumRegister, ClassicalRegister, QuantumCircuit
from qiskit_aer import AerSimulator
from qiskit.quantum_info import Statevector

# 3 qubit, 2 klasik bit
q = QuantumRegister(3)
c = ClassicalRegister(2)
qc = QuantumCircuit(q, c)

# Teleport edilecek state hazırlama (q[0])
# ... (ry veya benzeri kapılar)

# Dolanık çift oluşturma (q[1], q[2])
qc.h(q[1])
qc.cx(q[1], q[2])

# Bell ölçümü (q[0], q[1])
qc.cx(q[0], q[1])
qc.h(q[0])
qc.measure(q[0], c[0])
qc.measure(q[1], c[1])

# Koşullu düzeltmeler
with qc.if_test((c[1], 1)):
    qc.x(q[2])
with qc.if_test((c[0], 1)):
    qc.z(q[2])
```

::: {.notes}
Bu kod iskelet. Qiskit'in `if_test` sözdizimi koşullu kapılar için — klasik bit değerine göre kapı uygulama. Bu dinamik devre (dynamic circuit) kavramı, gerçek kuantum bilgisayarlarında feed-forward olarak biliniyor.

Doğrulama: Statevector simülatörü ile teleportasyon öncesi ve sonrasını karşılaştırmak, $|q_2\rangle$'nin orijinal $|\psi\rangle$'ye eşit olduğunu gösteriyor.

Not: ölçüm sonrası $|q_0\rangle$ ve $|q_1\rangle$ bozulmuş (collapse olmuş). Orijinal state artık Asja'da yok. Bu "kes-yapıştır" karakteri — klonlama yasağıyla tutarlı.
:::

---

## Çoklu Kontrollü Kapılar

**Toffoli kapısı (CCX):** iki kontrol bit, bir hedef

$$
CCX|abc\rangle = |ab, c \oplus (a \cdot b)\rangle
$$

- Her iki kontrol da 1 ise hedef tersine çevrilir
- Tersine çevrilebilir klasik AND kapısının kuantum analogu

```python
qc.ccx(q[0], q[1], q[2])  # Toffoli
qc.mcx([q[0], q[1], q[2]], q[3])  # Çoklu kontrol (MCX)
```

::: {.callout-note}
Devre sembolü eklenecek: Toffoli kapısı ile üç qubit devresi.
:::

::: {.notes}
Toffoli kapısı (Fredkin ile birlikte) evrensel tersinir klasik hesaplama için yeterli. Yani yalnızca Toffoli kapıları kullanarak herhangi bir klasik mantık devresi inşa edilebilir.

Kuantum hesaplamada önemli: Grover oracle'ı ve diğer arama/çarpanlara ayırma devrelerinde çok kullanılıyor.

MCX (Multi-Controlled X): $n$ kontrol qubit. Tüm kontroller 1 ise hedef tersine çevriliyor.

`qc.ccx(a, b, c)`: a ve b kontrol, c hedef. `qc.mcx([a, b, c], d)`: a, b, c kontrol, d hedef.
:::

---

::: {.callout-warning}
## Dikkat — Karıştırılabilecek Noktalar

**Teleportasyon ≠ ışıktan hızlı iletim**\
Klasik kanal gerekiyor. Toplam bilgi iletimi ışık hızıyla sınırlı.

**Teleportasyon state'i aktarır, parçacığı taşımaz**\
Fiziksel parçacık A'dan B'ye gitmiyor. Quantum state bilgisi aktarılıyor.

**Toffoli AND kapısı değil, tersinir AND**\
Klasik AND tersinmez ($1\cdot0=0$ ve $0\cdot0=0$ ayrılamaz). Toffoli bunu ekstra bit ile çözüyor.
:::

---

## Özet

1. **Teleportasyon**: dolanık çift + klasik 2 bit → quantum state aktarımı
2. Protokol: Bell ölçümü → klasik kanal → koşullu düzeltme
3. Klonlama yasağı ile tutarlı: orijinal state yok oluyor
4. **Toffoli**: iki kontrollü NOT, tersinir AND kapısı
5. **MCX**: çoklu kontrollü kapı, Grover oracle'ında kullanılıyor

::: {.notes}
Protokoller bölümü tamamlandı. Son konu Grover arama algoritması — bu konudaki tüm kavramlar (süperpozisyon, dönme, phase kickback, MCX) orada bir araya geliyor.
:::

---

*Sonraki konu: Grover arama algoritması — ortalama etrafında yansıma.*
