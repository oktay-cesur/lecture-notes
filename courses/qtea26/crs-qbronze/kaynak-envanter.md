---
title: QBronze — Kaynak Envanteri
type: reference
description: QBronze kaynak notebook'larının incelenen dosyaları, ana konuları ve sunum eşleştirmeleri.
---

# Kaynak Envanteri

Bu dosya üç amaca hizmet eder: (1) incelenen dosyaların listesi, (2) her dosyanın ana konusu, (3) her kaynak notun hangi sunum dosyasının hangi slaytlarına karşılık geldiği.

---

## İncelenen Kaynak Klasörleri

| Klasör | Açıklama |
|--------|----------|
| `QBronzeMD/classical-systems/` | Klasik sistemler (bit, olasılıksal durum, çoklu bit) |
| `QBronzeMD/photon/` | Foton deneyleri ve kuantum yazı-tura |
| `QBronzeMD/quantum-with-qiskit/` | Qiskit tabanlı kuantum sistemler |
| `QBronzeMD/math/` | Vektör, matris, tensör çarpımı ön-materyal |
| `QBronzeMD/python/` | Python ön-materyal (kapsam dışı) |
| `QBronzeMD/QBMD/` | Ana çalışma notları (10 bölüm) |
| `QBronzeMD/_cozumler/` | Egzersiz çözümleri (ayrı örnek notlarına malzeme) |

---

## Dosya Başına Ana Konu

### Klasik Sistemler

| Dosya | Ana Konu |
|-------|----------|
| `CS04_One_Bit.md` | Bit, dört temel operator, tablo gösterimi, tersinirlik |
| `CS08_Coin_Flip.md` | FairCoin, BiasedCoin, olasılıksal operator ilk tanışma |
| `CS12_Coin_Flip_Game.md` | Çift paramlı oyun, probabilistic state kavramı, sütun vektörü dili |
| `CS16_Probabilistic_States.md` | Probabilistic state tanımı, standart baz, stochastic vector |
| `CS20_Probabilistic_Operators.md` | Stochastic matrix, $v' = Av$ formülü, art arda evrim |
| `CS24_Two_Probabilistic_Bits.md` | İki bit birleşimi, tensor çarpımı, dört temel durum |
| `CS28_Correlation.md` | Bağımsızlık ve korelasyon, dolanıklık öncesi klasik zemin |
| `CS40_Operators_on_Multiple_Bits.md` | Çoklu bit üzerinde operator, CNOT benzeri klasik yapılar |
| `Exercises_Probabilistic_Systems.md` | Egzersiz seti (ayrı örnek notu) |
| `Problems_Probabilistic_Systems.md` | Problem seti (ayrı örnek notu) |

### Foton

| Dosya | Ana Konu |
|-------|----------|
| `Photon20_Quantum_Coin_Flipping.md` | Işın bölücü deneyleri, klasik modelin çöküşü, kuantuma motivasyon |

### Qiskit Temelleri

| Dosya | Ana Konu |
|-------|----------|
| `Q04_Qiskit_installation_and_test` | Kurulum, sürüm kontrolü, ilk test |
| `Q12_First_Quantum_Programs_with_Qiskit` | QuantumRegister, ClassicalRegister, QuantumCircuit, AerSimulator, x-gate |

### Temel Kuantum Sistemler

| Dosya | Ana Konu |
|-------|----------|
| `Q20_Hadamard.ipynb` | Hadamard matris tanımı, $H\|0\rangle$ ve $H\|1\rangle$, $HH=I$, girişim |
| `Q24_One_Qubit.ipynb` | $\|0\rangle$, $\|1\rangle$, X operatörü, amplitude, ket notasyonu |
| `Q28_Quantum_State.ipynb` | Geçerli quantum state koşulu, norm=1, bra-ket dili |
| `Q32_Visualization_of_a_Qubit.ipynb` | Birim çember, $(\cos\theta, \sin\theta)$ temsili, açı dili |
| `Q36_Superposition_and_Measurement.ipynb` | Süperpozisyon, interference, ölçüm, collapse, Deney 3 analizi |

### Tek Qubit Operatörleri (Gerçek Değerli)

| Dosya | Ana Konu |
|-------|----------|
| `Q40_Operations_on_the_Unit_Circle.ipynb` | Birim çember üzerindeki hareketler, keyfi state hazırlama, ry kapısı |
| `Q44_Rotations.ipynb` | Dönme operatörleri, açı parametresi |
| `Q48_Reflections.ipynb` | Yansıma operatörleri, eksen üzerinden yansıma |
| `Q52_Quantum_Tomography.ipynb` | Tomografi, bilinmeyen state tahmini (ayrı/opsiyonel) |

### Dolanıklık ve Protokoller

| Dosya | Ana Konu |
|-------|----------|
| `Q60_Two_Qubits.ipynb` | İki qubit uzayı, dört temel durum, tensor çarpımı |
| `Q64_Phase_Kickback.ipynb` | Phase kickback, kontrollü kapı etkisinin geri tepmesi |
| `Q72_Superdense_Coding.ipynb` | Bell durumu, superdense coding protokolü |
| `Q76_Quantum_Teleportation.ipynb` | Kuantum teleportasyon, durum aktarımı |
| `Q80_Multiple_Control_Constructions.ipynb` | Çoklu kontrollü kapılar, Toffoli |

### Grover Arama Algoritması

| Dosya | Ana Konu |
|-------|----------|
| `Q84_Inversion_About_the_Mean.ipynb` | Ortalama etrafında yansıma, Grover'ın amplifikasyon adımı |
| `Q88_Grovers_Search_One_Qubit_Representation.ipynb` | Grover'ı tek qubit temsiliyle anlamak |
| `Q92_Grovers_Search_Implementation.ipynb` | Tam Grover devresi, oracle, iterasyon sayısı |

### Matematik Ön-Materyal

| Dosya | Kapsam |
|-------|--------|
| `Math20_Vectors.md` | Vektörler (slaytlar içinde gerektiği yerde referans) |
| `Math24_Dot_Product.md` | Nokta çarpımı |
| `Math28_Matrices.md` | Matrisler |
| `Math32_Tensor_Product.md` | Tensör çarpımı (QBMD 03 ile eş zamanlı) |

---

## Notebook → Sunum Eşleştirme Tablosu

Her QBronze kaynak notu, hangi sunum dosyasının hangi bölümlerine karşılık gelir.

| Kaynak Notebook | QBMD Bölüm | Sunum Dosyası | Kapsam |
|-----------------|------------|---------------|--------|
| CS04_One_Bit | QBMD 01 | `tp_klasik-bit.md` | tam (Slayt 1–14) |
| CS08_Coin_Flip | QBMD 02 | `tp_olasiliksal-durum.md` | Bölüm 1–3 (FairCoin, BiasedCoin) |
| CS12_Coin_Flip_Game | QBMD 02 | `tp_olasiliksal-durum.md` | Bölüm 4–7 (çift para oyunu, sütun vektörü) |
| CS16_Probabilistic_States | QBMD 02 | `tp_olasiliksal-durum.md` | Bölüm 8–12 (stochastic vector tanımı) |
| CS20_Probabilistic_Operators | QBMD 02 | `tp_olasiliksal-operator.md` | tam (stochastic matrix, v'=Av) |
| CS24_Two_Probabilistic_Bits | QBMD 03 | `tp_bilesik-klasik-sistemler.md` | Bölüm 1–8 (tensor çarpımı, iki bit uzayı) |
| CS28_Correlation | QBMD 03 | `tp_bilesik-klasik-sistemler.md` | Bölüm 9–12 (korelasyon, bağımsızlık) |
| CS40_Operators_on_Multiple_Bits | QBMD 03 | `tp_bilesik-klasik-sistemler.md` | Bölüm 13–15 (çoklu bit operatörleri) |
| Photon20 | QBMD — | `fotonlar-kuantum-yazi-tura.md` (mevcut) | tam |
| Q04_Qiskit_install | QBMD 04 | `ilk-kuantum-programlar.md` (mevcut) | Slayt 1–3 (kurulum) |
| Q12_First_Programs | QBMD 04 | `ilk-kuantum-programlar.md` (mevcut) | Slayt 4–12 (devre, x-gate, ölçüm) |
| Q20_Hadamard | QBMD 05 | `hadamard.md` (mevcut) | tam |
| Q24_One_Qubit | QBMD 05 | `tp_tek-qubit.md` | Slayt 1–8 (X, amplitude, ket notasyonu) |
| Q28_Quantum_State | QBMD 05 | `tp_tek-qubit.md` | Slayt 9–14 (norm koşulu, geçerli state) |
| Q32_Visualization | QBMD 05 | `tp_kuantum-durum-gorsellestirme.md` | tam (birim çember, açı dili) |
| Q36_Superposition | QBMD 06 | `tp_superposition-olcum.md` | tam |
| Q40_Operations | QBMD 07 | `tp_tek-qubit-operatorler-a.md` | Slayt 1–6 (birim çember hareketi, ry) |
| Q44_Rotations | QBMD 07 | `tp_tek-qubit-operatorler-a.md` | Slayt 7–12 (dönme operatörleri) |
| Q48_Reflections | QBMD 07 | `tp_tek-qubit-operatorler-b.md` | Slayt 1–8 (yansıma) |
| Q52_Tomography | QBMD 07 | `tp_tek-qubit-operatorler-b.md` | Slayt 9–12 (opsiyonel/ileri) |
| Q60_Two_Qubits | QBMD 08 | `tp_iki-qubit.md` | Slayt 1–8 (tensor, 4 temel durum, CNOT) |
| Q64_Phase_Kickback | QBMD 08 | `tp_iki-qubit.md` | Slayt 9–14 (phase kickback) |
| Q72_Superdense_Coding | QBMD 08+09 | `dolaniklik-superdense-coding.md` (mevcut) | tam |
| Q76_Teleportation | QBMD 09 | `tp_kuantum-protokolleri.md` | Slayt 1–10 (teleportasyon) |
| Q80_Multiple_Control | QBMD 09 | `tp_kuantum-protokolleri.md` | Slayt 11–15 (çoklu kontrol) |
| Q84_Inversion_Mean | QBMD 10 | `tp_grover.md` | Slayt 1–7 (ortalama yansıması) |
| Q88_Grover_1Qubit | QBMD 10 | `tp_grover.md` | Slayt 8–13 (tek qubit temsili) |
| Q92_Grover_Impl | QBMD 10 | `tp_grover.md` | Slayt 14–20 (tam devre, iterasyon) |

---

## Ayrı Örnek Notlarına Taşınan Materyaller

Ana anlatıma gömülmeyen, ayrı "örnek notu" olarak işaretlenen materyal:

| Kaynak | Konu | Hedef |
|--------|------|-------|
| `CS04` görevleri | Tablo okuma, dört operatörü elle yazmak | `ornek_cs04_bit-operatorler.md` |
| `CS08-CS12` simülasyonları | Çok atışlı coin deneyleri (100, 1000, 10000 atış) | `ornek_cs08_coin-simulasyonu.md` |
| `CS16` oran problemleri | Yuklu zar, birden fazla durum normalize | `ornek_cs16_olasilik-hesabi.md` |
| `CS20` art arda evrim | Yakınsama deneyleri | `ornek_cs20_sabit-dagilim.md` |
| `Q28` rastgele state üretme | Normalizasyon, geçerlilik kontrolü | `ornek_q28_state-uretme.md` |
| `Q52` Tomography | İleri seviye, opsiyonel | `ornek_q52_tomografi.md` |
| `Q92` tam Grover uygulaması | Kodlama egzersizi | `ornek_q92_grover-devre.md` |

---

## Mevcut Sunum Dosyaları (Değiştirilmeyecek)

| Dosya | Karşılık Geldiği Kaynak | Durum |
|-------|-------------------------|-------|
| `fotonlar-kuantum-yazi-tura.md` | Photon20 | taslak — tamamlanmış |
| `ilk-kuantum-programlar.md` | Q04 + Q12 | taslak — tamamlanmış |
| `hadamard.md` | Q20 | taslak — tamamlanmış |
| `dolaniklik-superdense-coding.md` | Q72 | taslak — tamamlanmış |
