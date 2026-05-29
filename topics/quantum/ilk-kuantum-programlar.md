---
title: "İlk Kuantum Programları"
subtitle: QTEA26 — Salı Oturum 2/3
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-03-10
execute:
  echo: false
---

## Tersine Çevrilebilirlik ve Kuantum Programı

- Klasik programlar çoğunlukla **tersine çevrilemez** — çıktıya bakıp giriş bulunamaz
- Ama bazı klasik operatörler **tersine çevrilebilir**: NOT, Identity, SWAP
- Tersine çevrilebilir klasik program = geçerli bir **kuantum programı**
- NOT operatörü bu kesişim noktasında: hem klasik hem kuantum

::: {.notes}
Önceki oturumda foton deneylerini klasik olasılık modeliyle tartışmıştık. Şimdi programlama tarafına geçiyoruz.

Tersine çevrilebilirlik kuantum mekaniğinin zorunlu bir sonucu. Klasik bir AND kapısını ele alın: iki giriş (A, B), bir çıkış (A AND B). Çıkış 0 olduğunda girişin ne olduğunu bilemeyiz — (0,0), (0,1) ya da (1,0) olabilir. Bilgi kaybolmuş. Kuantum mekaniğinde bu kayıp yasak: tüm operatörler birebir eşleme yapmak zorunda, bilgi korunuyor.

NOT operatörü bu açıdan idealdir: girişi 0 ise çıkış 1, girişi 1 ise çıkış 0. Her çıkışa bakıp giriş belirsizliksiz bulunabiliyor. Kuantum bilgisayarların programları bu tür tersine çevrilebilir operatörlerden oluşuyor. Bu derste bu operatörü Qiskit ile kodlayacağız.
:::

---

## Qiskit: Üç Temel Nesne

```python
from qiskit import QuantumRegister, ClassicalRegister, QuantumCircuit

q  = QuantumRegister(1, "qreg")   # kuantum bitleri
c  = ClassicalRegister(1, "creg") # ölçüm sonuçları
qc = QuantumCircuit(q, c)         # devre
```

| Nesne | Ne tutar? | Neden gerekli? |
|---|---|---|
| `QuantumRegister` | Kubitler | Üzerinde kapılar çalışıyor |
| `ClassicalRegister` | Klasik bitler | Ölçüm sonuçları buraya yazılıyor |
| `QuantumCircuit` | Devrenin tamamı | Kapıları ve ölçümleri bir arada tanımlıyor |

::: {.notes}
Qiskit'te bir devre her zaman bu üç nesneden oluşuyor. Sıra önemli: önce registerlar tanımlanıyor, sonra onlardan devre oluşturuluyor.

`QuantumRegister(1, "qreg")`: birinci parametre kaç kubit olduğunu söylüyor, ikincisi opsiyonel bir isim etiketi — devre çiziminde görünüyor.

Neden ayrı bir `ClassicalRegister` var? Kuantum mekaniğinde ölçüm sonuçları klasik bilgiye dönüşüyor — artık kuantum değiller. Qiskit bu ayrımı mimarisine yansıtıyor: ölçmeden önce bir klasik bit alanı açmanız gerekiyor. İkinci parametre yine opsiyonel isim.

`QuantumCircuit(q, c)`: iki registerı alıp birleştiriyor. Bundan sonra devre üzerine kapılar ve ölçümler eklenecek.
:::

---

## İlk Devre: NOT Kapısı

```python
qc.x(q[0])             # NOT operatörü — x-gate
qc.measure(q[0], c[0]) # ölç, sonucu c[0]'a yaz
```

- Kubitler ve klasik bitler indeks 0'dan başlar
- `x` → NOT operatörünün Qiskit adı (**x-gate**)
- `measure(q[0], c[0])` → kubiti ölç, sonucu klasik bite yaz
- Başlangıçta her kubit $|0\rangle$ durumunda
- x-gate sonrası: $|0\rangle \rightarrow |1\rangle$ → ölçüm her zaman 1

::: {.notes}
`qc.x(q[0])` ifadesi "devrenin q[0] kubitine x-gate uygula" diyor. Gate isminin `x` olmasının nedeni: NOT operatörü Bloch küresi üzerinde X ekseninde 180° dönüş olarak temsil ediliyor. Şimdilik bunu bilmek gerekmiyor ama terminoloji bu yüzden böyle.

$|0\rangle$ notasyonu hakkında: kuantum mekaniğinde durumlar bu "ket" gösterimiyle yazılıyor. $|0\rangle$ = başlangıç durumu, $|1\rangle$ = çevrilmiş durum. NOT kapısı tam olarak bu geçişi yapıyor: $|0\rangle \rightarrow |1\rangle$.

`measure(q[0], c[0])`: sol taraf kuantum biti, sağ taraf klasik biti. Ölçüm yapıldıktan sonra kubitin değeri klasik bite kopyalanıyor. Hangi kubiti hangi klasik bite bağladığınız önemli — 4 kubitli devrede bunu elle belirtmek de mümkün.

Bu devrenin beklenen sonucu deterministik: x-gate $|0\rangle$'ı $|1\rangle$'e çeviriyor, ölçüm her zaman 1 dönüyor.
:::

---

## Devre Görselleştirme

```python
qc.draw()                  # ASCII — metin tabanlı
qc.draw(output='mpl')      # matplotlib — grafik
```

- Her kuantum biti tek çizgi `─`, klasik bitler çift çizgi `═`
- Kapılar kare kutular içinde; ölçüm ayrı sembolle gösterilir
- Devre soldan sağa okunur — sol = zaman başlangıcı
- Başlangıç durumu sol tarafta: $|0\rangle$

::: {.notes}
İki çizim yöntemi farklı ortamlara göre kullanılıyor. ASCII çizimi, Jupyter dışında da (terminal, metin editörü) çalışır. matplotlib çizimi görsel olarak daha temiz, sunum için idealdir.

Çizimde dikkat edilecek şeyler: her kuantum biti yatay bir hat (wire) olarak gösterilir. Klasik bitler ise çift çizgiyle temsil edilir. Devre soldan sağa okunur — zaman sola göre ilerliyor. Kapılar kare kutular içinde, ölçüm operatörü ayrı bir sembolle gösterilir.

Öğrencilere sormak için iyi bir an: "x-gate'i iki kez uygularsak ne olur?" — $|0\rangle \rightarrow |1\rangle \rightarrow |0\rangle$, yani orijinal duruma dönüyoruz. Tersine çevrilebilirliği somutlaştırmak için kullanılabilir.
:::

---

## Devreyi Çalıştırma

```python
from qiskit_aer import AerSimulator

job    = AerSimulator().run(qc, shots=1024)
counts = job.result().get_counts(qc)
print(counts)  # {'1': 1024}
```

- `AerSimulator` — yerel klasik simülatör, gerçek donanım gerektirmiyor
- `shots` — devrenin kaç kez çalıştırılacağı
- `counts` — `{'sonuç': frekans}` sözlüğü
- NOT devresinde: `'1'` her seferinde → `{'1': 1024}`

::: {.notes}
`AerSimulator` Qiskit'in yerel klasik simülatörü. Adı "Aer" çünkü orijinal paket adı böyle; içerik olarak yerel bilgisayarda kuantum devre simülasyonu yapıyor.

`shots=1024` parametresi önemli: aynı devreyi 1024 kez çalıştırıyor ve her seferindeki ölçüm sonucunu kaydediyor. NOT devresinde sonuç her seferinde deterministik olarak 1, bu yüzden `{'1': 1024}` çıkıyor.

`get_counts` bir Python sözlüğü döndürüyor: anahtarlar ölçüm sonuçları (string olarak), değerler kaç kez o sonucun elde edildiği. Sonraki slaytlarda gürültülü bir durum gördüğümüzde bu sözlüğün birden fazla girdisi olacak.

Neden 1024? İki üssü sayılar simülatörlerde tercih ediliyor. Alternatif değerler de kullanılabilir: `shots=100`, `shots=8192` gibi. Daha fazla shot daha güvenilir olasılık tahmini veriyor.
:::

---

## Sonuçları Okuma

```python
from qiskit.visualization import plot_histogram
plot_histogram(counts)
```

- `plot_histogram`: counts sözlüğünden otomatik bar grafiği
- Y ekseni: frekans (ya da olasılık)
- NOT devresinde: tek bar, %100 `'1'`

::: {.notes}
`plot_histogram` fonksiyonu counts sözlüğünü alıp otomatik bir bar grafiği oluşturuyor. Deterministik bir devrede tek bar görünür.

Bu görselleştirme özellikle ilerleyen konularda önemli olacak: Hadamard kapısı eklediğimizde iki bar çıkacak, yaklaşık %50/%50 dağılımıyla. Counts sözlüğünü okumayı öğrenmek o zaman işe yarayacak.

`display(plot_histogram(counts))` şeklinde de kullanılabilir — Jupyter'da daha güvenilir render için tercih edilebilir.
:::

---

## Gerçek Kuantum Bilgisayar vs Simülatör

- Simülatör: **gürültüsüz**, her zaman beklenen sonuç
- Gerçek kuantum bilgisayar: **gürültülü** — fiziksel hata oranları var
- NOT devresini IBM gerçek donanımında çalıştırma sonucu (1024 shot):

```
{'0': 62, '1': 962}
```

- Beklenen: `{'1': 1024}` — gerçekte 62 hata (~%6 hata oranı)

::: {.notes}
Bu fark günümüz kuantum bilgisayarlarının temel sınırlılığını gösteriyor. "Gürültülü orta ölçekli kuantum" (NISQ) dönemindeyiz: mevcut cihazlar hata oranları nedeniyle sınırlı derinlikte devre çalıştırabiliyor.

IBM'in gerçek donanımında yapılan ölçümde 1024 shot'tan 62'si yanlış çıkmış — yaklaşık %6 hata oranı. Bu sayı donanımdan donanıma, kubitte kubite ve zaman içinde de değişiyor. Simülatörde ise hata sıfır çünkü klasik bilgisayarda deterministik hesaplama yapılıyor.

Bu derste simülatör kullanıyoruz. IBM Quantum Experience üzerinden ücretsiz erişim de mümkün, ama oturum süresinde gerçek donanıma bağlanmayacağız.
:::

---

## Çoklu Kubit Devresi

```python
q2  = QuantumRegister(4, "qreg")
c2  = ClassicalRegister(4, "creg")
qc2 = QuantumCircuit(q2, c2)

qc2.x(q2[0]); qc2.x(q2[0])                         # 2 kez → 0
qc2.x(q2[3])                                         # 1 kez → 1
qc2.x(q2[2]); qc2.x(q2[2]); qc2.x(q2[2])           # 3 kez → 1
qc2.x(q2[1]); qc2.x(q2[1]); qc2.x(q2[1]); qc2.x(q2[1])  # 4 kez → 0

qc2.barrier()
qc2.measure(q2, c2)
```

- `barrier()` — görsel ayırıcı; hesaplamayı etkilemez
- `qc2.measure(q2, c2)` — tüm kubitleri tek satırda ölç

::: {.notes}
Bu devre dört kubiti farklı sayıda NOT kapısıyla işliyor. Sonuçları tahmin edelim:

- `q2[0]`: iki kez NOT → çift sayı, geri döner → 0
- `q2[1]`: dört kez NOT → çift sayı, geri döner → 0
- `q2[2]`: üç kez NOT → tek sayı, çevrilir → 1
- `q2[3]`: bir kez NOT → 1

Çalıştırıldığında sonuç Qiskit'in okuma sırasına göre `'1100'` çıkıyor — bir sonraki slayt bunu açıklıyor.

`barrier()` yalnızca görsel amaçlı: devre çiziminde kapıları ölçüm bölümünden ayıran dikey bir çizgi çiziyor. Hesaplama üzerinde hiçbir etkisi yok. Büyük devrelerde okunabilirlik için kullanılıyor.

`qc2.measure(q2, c2)`: register boyutları eşit olduğunda tüm kubitleri tek satırda ölçebiliyoruz. `q2[i]` → `c2[i]` şeklinde indis bazlı eşleme otomatik yapılıyor.
:::

---

## Okuma Sırası

Qiskit dört kubiti şu sıraya göre birleştiriyor:

$$qreg[3],\ qreg[2],\ qreg[1],\ qreg[0]$$

- En solda `qreg[3]` — en anlamlı bit (MSB)
- En sağda `qreg[0]` — en az anlamlı bit (LSB)

**Çoklu kubit devresi sonucu:**

$$\underbrace{1}_{qreg[3]}\ \underbrace{1}_{qreg[2]}\ \underbrace{0}_{qreg[1]}\ \underbrace{0}_{qreg[0]} \rightarrow \texttt{'1100'}$$

```python
qc2.draw(output='mpl', reverse_bits=True)  # çizimde sırayı tersine çevir
```

::: {.notes}
Bu kural başlangıçta kafa karıştırıcı. Matematikteki standart ikili gösterimde en soldaki en anlamlı bit — buna big-endian denir. Qiskit bunu tersine kullanıyor: `qreg[0]` en sağda, en az anlamlı konumda.

Neden böyle? Tarihsel bir tercih. Bazı kuantum kütüphaneleri little-endian, bazıları big-endian kullanıyor. Qiskit'te öntanımlı little-endian ama `reverse_bits=True` parametresi ile çizim sırasını tersine çevirebiliyoruz — sonuçlar değişmiyor, yalnızca görselleştirme.

Pratik önemi: `counts` sözlüğünde sonuçlar string olarak geliyor — `'1100'` gibi. Soldaki bit `qreg[3]`'e, sağdaki `qreg[0]`'a karşılık geliyor. Sayısal değere çevirmek gerekirse `int('1100', 2)` Python'da bu dönüşümü yapıyor — sonuç 12.

Görev 1 için tahmin: `q2[0]=0, q2[1]=0, q2[2]=1, q2[3]=1` → Qiskit sırası `qreg[3]qreg[2]qreg[1]qreg[0]` = `'1100'`.
:::

---

## Görev: Rastgele 8-bit Sayı

```python
from qiskit import QuantumRegister, ClassicalRegister, QuantumCircuit
from qiskit_aer import AerSimulator
from random import randrange

q  = QuantumRegister(8)
c  = ClassicalRegister(8)
qc = QuantumCircuit(q, c)

for i in range(8):
    if randrange(2) == 0:  # Python ile yazı-tura: 0 = tura
        qc.x(q[i])

qc.barrier()
qc.measure(q, c)

display(qc.draw(output='mpl', reverse_bits=True))

job    = AerSimulator().run(qc, shots=128)
counts = job.result().get_counts(qc)
print(counts)
```

- `randrange(2)`: Python yazı-turası — 0 veya 1
- Her çalıştırmada farklı kapı dizisi → farklı ikili sayı
- `shots=128` → aynı deterministik devreyi 128 kez tekrarlar

::: {.notes}
Bu görev öğrencilerin kendi başlarına denemeleri için. `randrange(2)` Python'ın yerleşik sözde-rastgele sayı üreticisini kullanıyor — bu henüz klasik rastgelelik. Gerçek kuantum rastgeleliği ilerleyen konularda Hadamard kapısıyla elde edilecek.

Devrenin deterministik olduğuna dikkat: hangi kubitlere x-gate uygulanacağına Python karar verdi ve bu karar sabitlendikten sonra devre her çalışmasında aynı sayıyı üretiyor. Bu yüzden `shots=128` ile 128 kez çalıştırınca counts'ta tek bir giriş görülüyor: `{'01101100': 128}` gibi.

Güzel bir tartışma sorusu: "Bu sayı gerçekten rastgele mi?" — Python `randrange` işlemcinin durumuna bağlı sözde-rastgele sayı üretiyor. Kuantum ölçümünden gelen rastgelelik ise teorik olarak gerçek rastgelelik. İkisi arasındaki fark kriptografide kritik önem taşıyor.
:::

---

## Özet

- Tersine çevrilebilir klasik operatörler → doğrudan kuantum programı
- Qiskit'te devre: `QuantumRegister` + `ClassicalRegister` → `QuantumCircuit`
- x-gate = NOT operatörü — ilk kuantum kapısı; deterministik, gürültüsüz
- `AerSimulator().run(qc, shots=N)` → `counts` sözlüğü
- Okuma sırası: `qreg[N-1] ... qreg[0]` (MSB → LSB)
- Sonraki: Hadamard kapısı → ölçüm belirsizliği, foton deneyinin matematiksel karşılığı

::: {.notes}
Bugün öğrendiklerimizi özetleyelim. Qiskit'te bir devre yazmak için üç nesne yeterli. x-gate en basit kuantum kapısı — sonuç deterministik, klasikle özdeş. Simülatör gürültüsüz çalışıyor, gerçek donanım hatalı.

Bir sonraki konuda Hadamard kapısını göreceğiz. O kapı $|0\rangle$'ı $\frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)$ durumuna taşıyor — ölçüm yapıldığında %50/%50 olasılıkla 0 ya da 1 geliyor. Foton deneyindeki ışın bölücünün tam matematiksel karşılığı bu.
:::
