---
title: QBronze — Sunum Haritası
type: reference
description: Her sunum için başlık, kaynak dosyalar, öğrenme hedefleri, ön koşullar ve kapsam kararları.
---

# Sunum Haritası

Her sunum için başlık, kaynak dosyalar, öğrenme hedefleri, ana kavramlar, ön koşullar ve kapsam kararı aşağıda listelenmiştir. Sıralama anlatım hattını izler.

---

## Bölüm A — Klasik Sistemler

---

### S01 · Klasik Bit ve Operatör

**Dosya:** `topics/quantum/tp_klasik-bit.md`
**Kaynak:** CS04_One_Bit — QBMD 01
**Durum:** tam (içerik üretildi)

**Öğrenme Hedefleri:**
- Bit kavramını iki durumlu bir bilgi birimi olarak tanımlamak
- Tek bit üzerindeki dört temel operatörü (Identity, NOT, ZERO, ONE) açıklamak ve tablo gösterimiyle okumak
- Tersinir ve tersinmez operatörleri ayırt etmek
- Tersinirliğin kuantum mekaniğindeki önemini sezgisel düzeyde kavramak

**Ana Kavramlar:** bit, binary digit, operator, Identity, NOT, ZERO, ONE, tablo gösterimi, tersinirlik, tersinmezlik

**Ön Koşullar:** Yok

**Kapsam Kararı:** Tek sunum

**Not:** CS04'teki tüm egzersizler ayrı örnek notuna (`ornek_cs04_bit-operatorler.md`) taşınmıştır. Ana anlatımda formüller, tablolar ve tersinirlik kanıtı yer almaktadır.

---

### S02 · Olasılıksal Durum

**Dosya:** `topics/quantum/tp_olasiliksal-durum.md`
**Kaynak:** CS08, CS12, CS16 — QBMD 02 (§1–12)
**Durum:** taslak

**Öğrenme Hedefleri:**
- Olasılıksal bit kavramını deterministik bitten ayırt etmek
- FairCoin ve BiasedCoin operatörlerini tablo ile ifade etmek
- Probabilistic state'i sütun vektörü olarak yazmak
- Stochastic vector tanımını (negatif olmayan + toplam=1) uygulamak

**Ana Kavramlar:** probabilistic bit, FairCoin, BiasedCoin, sütun vektörü, probabilistic state, stochastic vector, standart baz

**Ön Koşullar:** S01 (bit, operator, tablo gösterimi)

**Kapsam Kararı:** Tek sunum; CS12'deki `GameCoins(a,b)` genel ailesi ve `CS16`'daki büyük-boyutlu örnekler ayrı örnek notuna taşınmıştır.

---

### S03 · Olasılıksal Operatör

**Dosya:** `topics/quantum/tp_olasiliksal-operator.md`
**Kaynak:** CS20 — QBMD 02 (§13–24)
**Durum:** taslak

**Öğrenme Hedefleri:**
- Stochastic matrix'i (tüm girişler ≥0, sütun toplamları=1) tanımlamak
- Sistem evrimini $v' = Av$ formülüyle hesaplamak
- Bir probabilistic state'e operatör uygulamak
- Art arda evrimde yakınsama fikrine sezgisel giriş yapmak

**Ana Kavramlar:** stochastic matrix, $v' = Av$, matris-vektör çarpımı, art arda evrim, limit dağılım

**Ön Koşullar:** S01–S02 (tablo dili, probabilistic state)

**Kapsam Kararı:** Tek sunum; `CS20`'deki 3×3 operatör örneği ve art arda evrim simülasyonları ayrı örnek notuna taşınmıştır.

---

### S04 · Bileşik Klasik Sistemler

**Dosya:** `topics/quantum/tp_bilesik-klasik-sistemler.md`
**Kaynak:** CS24, CS28, CS40 — QBMD 03
**Durum:** taslak

**Öğrenme Hedefleri:**
- İki probabilistic bitten oluşan bileşik sistemi tensor çarpımıyla yazmak
- Dört temel ortak durumu ($00, 01, 10, 11$) tanımak
- Bağımsızlık ve korelasyon kavramlarını sütun vektörü diliyle ayırt etmek
- Tek bir bit üzerindeki operatörü bileşik sistemde temsil etmek

**Ana Kavramlar:** tensor çarpımı ($\otimes$), bileşik sistem, iki-bit uzayı, bağımsız durum, korelasyonlu durum, yükseltilmiş operatör

**Ön Koşullar:** S01–S03

**Kapsam Kararı:** Tek sunum, kavramsal olarak yoğun ancak bölünmüyor; CS40'taki kapsamlı çoklu-bit örnekleri ayrı örnek notuna taşınmıştır.

---

## Bölüm B — Foton ve Qiskit Girişi

---

### S05 · Fotonlar ve Kuantum Yazı-Tura

**Dosya:** `topics/quantum/fotonlar-kuantum-yazi-tura.md` **(mevcut)**
**Kaynak:** Photon20
**Durum:** tamamlanmış

**Öğrenme Hedefleri:**
- Foton deneylerini (tek ışın bölücü, çift ışın bölücü + gözlemci, çift ışın bölücü) açıklamak
- Klasik modelin Deney 3'te neden başarısız olduğunu göstermek
- Yeni bir matematiksel modele duyulan ihtiyacı gözlemsel olarak gerekçelendirmek

**Ön Koşullar:** S01–S03 (olasılıksal dil, sütun vektörü)

---

### S06 · İlk Kuantum Programları

**Dosya:** `topics/quantum/ilk-kuantum-programlar.md` **(mevcut)**
**Kaynak:** Q04, Q12
**Durum:** tamamlanmış

**Öğrenme Hedefleri:**
- Qiskit'te QuantumRegister, ClassicalRegister, QuantumCircuit nesnelerini kullanmak
- x-gate (NOT operatörü) uygulayan bir devre yazmak ve çalıştırmak
- AerSimulator ile ölçüm sonuçlarını okumak

**Ön Koşullar:** S01–S05

---

## Bölüm C — Tek Qubit

---

### S07 · Hadamard Operatörü

**Dosya:** `topics/quantum/hadamard.md` **(mevcut)**
**Kaynak:** Q20
**Durum:** tamamlanmış

**Öğrenme Hedefleri:**
- Hadamard matrisini yazmak ve FairCoin ile karşılaştırmak
- $H\|0\rangle$ ve $H\|1\rangle$ hesaplamalarını yapmak
- $HH = I$ ilişkisini hem hesapla hem Qiskit ile doğrulamak
- Negatif genliklerin girişim mekanizmasındaki rolünü açıklamak

**Ön Koşullar:** S05–S06 (foton deneyleri, Qiskit temelleri)

---

### S08 · Tek Qubit

**Dosya:** `topics/quantum/tp_tek-qubit.md`
**Kaynak:** Q24, Q28 — QBMD 05 (§1–14)
**Durum:** taslak

**Öğrenme Hedefleri:**
- $\|0\rangle$ ve $\|1\rangle$ temel durumlarını sütun vektörü olarak tanımlamak
- X operatörünü (kuantum NOT) matris çarpımıyla uygulamak
- Amplitude ve olasılık arasındaki farkı açıklamak ($P = |\text{amplitude}|^2$)
- Geçerli quantum state koşulunu (norm=1) kontrol etmek
- $\|+\rangle$ ve $\|-\rangle$ özel durumlarını tanımak

**Ana Kavramlar:** ket notasyonu, $\|0\rangle$, $\|1\rangle$, X operatörü, amplitude, olasılık, norm koşulu, $\|+\rangle$, $\|-\rangle$

**Ön Koşullar:** S06–S07

**Kapsam Kararı:** Tek sunum (Q24 ve Q28 birlikte)

---

### S09 · Kuantum Durumu ve Görselleştirme

**Dosya:** `topics/quantum/tp_kuantum-durum-gorsellestirme.md`
**Kaynak:** Q32 — QBMD 05 (§20–27)
**Durum:** taslak

**Öğrenme Hedefleri:**
- Tek qubit durumunu birim çember üzerinde bir vektör olarak görmek
- Açı-state eşleştirmesini $(\cos\theta, \sin\theta)$ biçiminde yazmak
- Bilinmeyen amplitüdü norm koşulundan bulmak
- Rastgele geçerli quantum state üretmek

**Ana Kavramlar:** birim çember, $(\cos\theta, \sin\theta)$, açı dili, geometrik temsil

**Ön Koşullar:** S08 (amplitude, norm koşulu)

**Kapsam Kararı:** Tek sunum; Q52 (tomografi) ayrı opsiyonel notta

---

### S10 · Süperpozisyon ve Ölçüm

**Dosya:** `topics/quantum/tp_superposition-olcum.md`
**Kaynak:** Q36 — QBMD 06
**Durum:** taslak

**Öğrenme Hedefleri:**
- Süperpozisyonu klasik olasılık dağılımından ayırt etmek
- Girişim mekanizmasını iki Hadamard örneği üzerinden açıklamak
- Ölçüm ve collapse kavramlarını tanımlamak
- Ölçümün devreye araya girdiğinde nasıl farklı sonuç ürettiğini analiz etmek

**Ana Kavramlar:** süperpozisyon, girişim, ölçüm, collapse, olasılıksal çıktı

**Ön Koşullar:** S07–S09

**Kapsam Kararı:** Tek sunum

---

## Bölüm D — Tek Qubit Operatörleri (Gerçek Değerli)

---

### S11 · Birim Çember Üzerindeki İşlemler ve Dönmeler

**Dosya:** `topics/quantum/tp_tek-qubit-operatorler-a.md`
**Kaynak:** Q40, Q44 — QBMD 07 (§1–13)
**Durum:** taslak

**Öğrenme Hedefleri:**
- Birim çember üzerindeki hareketi operatör etkisi olarak okumak
- ry kapısını açı parametresiyle kullanmak
- Dönme operatörünü matris biçiminde yazmak
- Keyfi bir gerçek-değerli state'i $\|0\rangle$'dan hazırlamak

**Ana Kavramlar:** ry kapısı, dönme operatörü, açı parametresi, state hazırlama

**Ön Koşullar:** S08–S10

**Kapsam Kararı:** Tek sunum (Q40 ve Q44 birlikte); Q40'taki tüm görevler ayrı örnek notuna taşınmıştır.

---

### S12 · Yansımalar

**Dosya:** `topics/quantum/tp_tek-qubit-operatorler-b.md`
**Kaynak:** Q48, Q52 — QBMD 07 (§14–sonuna)
**Durum:** taslak

**Öğrenme Hedefleri:**
- Yansıma operatörünü bir eksen üzerinden tanımlamak
- Yansımayı birim çember geometrisiyle okumak
- Dönme ile yansıma arasındaki farkı matris düzeyinde görmek

**Ana Kavramlar:** yansıma operatörü, eksen yansıması, Householder dönüşümü

**Ön Koşullar:** S11

**Kapsam Kararı:** Tek sunum; Q52 (Quantum Tomography) anlatımda kısaca yer alır ancak detaylar ayrı nottur.

---

## Bölüm E — İki Qubit ve Dolanıklık

---

### S13 · İki Qubit ve Phase Kickback

**Dosya:** `topics/quantum/tp_iki-qubit.md`
**Kaynak:** Q60, Q64 — QBMD 08
**Durum:** taslak

**Öğrenme Hedefleri:**
- İki qubitli sistemin dört temel durumunu tensor çarpımıyla yazmak
- CNOT kapısını kontrol-hedef yapısıyla uygulamak
- Dolanık Bell durumunu (ör. $\|00\rangle + \|11\rangle$) hesapla üretmek
- Phase kickback mekanizmasını devre düzeyinde gözlemlemek

**Ana Kavramlar:** tensor çarpımı, $\|00\rangle$, $\|01\rangle$, $\|10\rangle$, $\|11\rangle$, CNOT, dolanıklık, Bell durumu, phase kickback

**Ön Koşullar:** S08–S12

**Kapsam Kararı:** Tek sunum; Q72'nin dolanıklık kısmı burada özetlenir, protokol detayı S14'tedir.

---

### S14 · Dolanıklık ve Superdense Coding

**Dosya:** `topics/quantum/dolaniklik-superdense-coding.md` **(mevcut)**
**Kaynak:** Q72
**Durum:** tamamlanmış

**Öğrenme Hedefleri:**
- Bell durumunu superdense coding protokolünde kaynak olarak kullanmak
- Tek qubit göndererek iki klasik bit taşımanın nasıl mümkün olduğunu açıklamak

**Ön Koşullar:** S13

---

## Bölüm F — Protokoller

---

### S15 · Kuantum Protokolleri

**Dosya:** `topics/quantum/tp_kuantum-protokolleri.md`
**Kaynak:** Q76, Q80 — QBMD 09
**Durum:** taslak

**Öğrenme Hedefleri:**
- Kuantum teleportasyon protokolünü adım adım izlemek
- Ölçüm → klasik kanal → düzeltme zincirini anlamak
- Çoklu kontrollü yapıların (Toffoli, MCX) mantığını görmek

**Ana Kavramlar:** teleportasyon, klasik kanal, Toffoli kapısı, çoklu kontrol, MCX

**Ön Koşullar:** S13–S14

**Kapsam Kararı:** Tek sunum; Q80'deki devre örnekleri kısmen ayrı örnek notuna taşınmıştır.

---

## Bölüm G — Grover Arama Algoritması

---

### S16 · Grover Arama Algoritması

**Dosya:** `topics/quantum/tp_grover.md`
**Kaynak:** Q84, Q88, Q92 — QBMD 10
**Durum:** taslak

**Öğrenme Hedefleri:**
- Ortalama etrafında yansıma dönüşümünü açıklamak
- Grover iterasyonunun genel yapısını (hazırlama, oracle, amplifikasyon) tanımlamak
- Grover'ı tek qubit temsiliyle görselleştirmek
- Tam Grover devresini Qiskit ile çalıştırmak

**Ana Kavramlar:** inversion about the mean, oracle, Grover iterasyonu, amplifikasyon, arama karmaşıklığı

**Ön Koşullar:** S10, S11, S13 (süperpozisyon, dönmeler, CNOT)

**Kapsam Kararı:** Tek sunum ancak kavramsal olarak yoğun; Q92'deki tam uygulama egzersizleri ayrı örnek notuna taşınmıştır. Gerekirse S16a (Q84+Q88) ve S16b (Q92) olarak bölünebilir.

---

## Özet Tablo

| Sunum | Dosya | Kaynak | Durum | Bölünmeli mi? |
|-------|-------|--------|-------|---------------|
| S01 | tp_klasik-bit.md | CS04 | **tam** | hayır |
| S02 | tp_olasiliksal-durum.md | CS08, CS12, CS16 | taslak | hayır |
| S03 | tp_olasiliksal-operator.md | CS20 | taslak | hayır |
| S04 | tp_bilesik-klasik-sistemler.md | CS24, CS28, CS40 | taslak | hayır |
| S05 | fotonlar-kuantum-yazi-tura.md | P20 | mevcut | — |
| S06 | ilk-kuantum-programlar.md | Q04, Q12 | mevcut | — |
| S07 | hadamard.md | Q20 | mevcut | — |
| S08 | tp_tek-qubit.md | Q24, Q28 | taslak | hayır |
| S09 | tp_kuantum-durum-gorsellestirme.md | Q32 | taslak | hayır |
| S10 | tp_superposition-olcum.md | Q36 | taslak | hayır |
| S11 | tp_tek-qubit-operatorler-a.md | Q40, Q44 | taslak | hayır |
| S12 | tp_tek-qubit-operatorler-b.md | Q48, Q52 | taslak | hayır |
| S13 | tp_iki-qubit.md | Q60, Q64 | taslak | hayır |
| S14 | dolaniklik-superdense-coding.md | Q72 | mevcut | — |
| S15 | tp_kuantum-protokolleri.md | Q76, Q80 | taslak | hayır |
| S16 | tp_grover.md | Q84, Q88, Q92 | taslak | opsiyonel |
