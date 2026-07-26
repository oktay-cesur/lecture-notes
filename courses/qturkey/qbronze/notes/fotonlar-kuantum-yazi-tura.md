---
title: "Fotonlar ve Kuantum Yazı-Tura"
subtitle: QTEA26 — Salı Oturum 1/3
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-03-10
execute:
  echo: false
---

## Klasikten Kuantuma Geçiş

- Önceki Bölüm: **olasılıksal bit**, stokastik matris, FairCoin operatörü
- Bugün: aynı çerçeveyi gerçek bir fiziksel sisteme uyguluyoruz
- Araç: **foton** (ışık parçacığı)
- Soru: foton davranışı klasik olasılıkla açıklanabilir mi?

::: {.notes}
Pazartesi inşa ettiğimiz matematiksel çerçeveyi hatırlayın: bir bit, ya durumda 0'da ya durumda 1'de. Yazı-tura atınca %50 olasılıkla 0, %50 olasılıkla 1 elde ediyorduk. Bunu FairCoin operatörü olarak matris biçiminde yazmıştık.

Bugün şunu soruyoruz: bu model gerçek dünyadaki bir fiziksel deneyle ne kadar örtüşüyor? Bunun için ışık parçacıklarını — fotonları — kullanacağız. Foton sezgiye göre ideal bir denek: bölünemiyor, her seferinde ya şurada ya burada bulunuyor, ikili durum mantığına uygun.

Üç deneyi sırayla yapacağız. İlk ikisinde klasik model çalışıyor ve güven inşa ediyoruz. Üçüncüsünde model tamamen çöküyor. Amacımız bu çöküşü hem gözlemsel hem matematiksel olarak net görmek.
:::

---

## Deney Düzeneği

- **Foton kaynağı** — deney boyunca tek tek foton gönderir
- **Işın bölücü (beam splitter)** — fotonu ya iletir ya yansıtır
- **Foton dedektörü** — fotonu yakalar ve sayar

| Bileşen | Klasik analoji |
|---|---|
| Foton | Madeni para |
| Işın bölücü | Para atma |
| Dedektör | Sonucu gözlemleme |

::: {.notes}
Işın bölücü yarı saydam bir ayna gibi davranır: üzerine düşen fotonun bir kısmını iletir, bir kısmını yansıtır. Klasik beklenti doğruysa gelen fotonların yarısı bir yöne, yarısı diğer yöne gider.

Foton dedektörü sıradan bir ışık ölçer değil — tek bir parçacığa duyarlı. Foton geldiğinde "tık" sesi çıkarır; gelmediğinde sessiz kalır. Bu ikili gözlem, fotonun durumu için doğal bir 0/1 temsili sağlıyor.

Deney boyunca fotonları teker teker gönderiyoruz — aynı anda birden fazla foton yok. Bu, bir fotonun başka bir fotonla etkileşime girme ihtimalini ortadan kaldırıyor.
:::

---

## Deney 1: Tek Işın Bölücü

<div data-anim="quantum" data-scene="bs-single"></div>

- **Gözlem:** fotonların ≈ %50'si iletilir (D0), ≈ %50'si yansır (D1)
- **Yorum:** ışın bölücü adil bir yazı-tura gibi davranıyor

::: {.notes}
"Foton Gönder" butonu ile tek tek deneyebilirsiniz. Her gönderide foton ya D0'a ya D1'e gidiyor — ikisi birden asla. "Otomatik ×20" ile 20 foton ardı ardına gönderip büyük resme bakın.

Yeterince büyük örneklemde D0 ve D1 sayıları birbirine yakın çıkıyor: yaklaşık %50/%50. Bu, Pazartesi'nin FairCoin operatörüyle tam örtüşüyor. Başlangıç durumu durum 0 (foton kaynakta). Işın bölücü FairCoin dönüşümünü uyguluyor: $v_0 = (1, 0)$ → $v_1 = (1/2, 1/2)$. D0 durumu 0'a (iletildi), D1 ise durumu 1'e (yansıdı) karşılık geliyor.

Bu noktada klasik model mükemmel çalışıyor. Güven inşa ediyoruz; model bir sonraki adımda da geçerli olacak gibi görünüyor.
:::

---

## Olasılıksal Model

İlk deneyi olasılıksal bir bit olarak modelleyelim:

$$
v_0 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}
\xrightarrow{\text{FairCoin}}
v_1 = \begin{pmatrix} 1/2 \\ 1/2 \end{pmatrix}
= \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & 1/2 \end{pmatrix} \begin{pmatrix} 1 \\ 0 \end{pmatrix}
$$

- Başlangıç: foton durum $0$'da — kaynakta
- Işın bölücü = FairCoin matrisi
- Sonuç: D0 veya D1'de $1/2$ olasılıkla

::: {.notes}
Matrisin nasıl okunduğuna dikkat edin. Sütun toplamları 1 — stokastik matrisin gereği. İlk sütun "durum 0'dan" iken ne olduğunu söylüyor: $1/2$ ihtimalle durum 0'da kalıyoruz (iletildi), $1/2$ ihtimalle durum 1'e geçiyoruz (yansıdı). İkinci sütun da aynı — nereden başlanırsa başlanılsın sonuç $1/2$/$1/2$.

Bu modelin güçlü yanı: deney 1'i tam olarak açıklıyor. Zayıf yanını ise bir sonraki deneyde göreceğiz.
:::

---

## Deney 2: İki Ayna + İkinci Işın Bölücü (Dedektör A Var)

<div data-anim="quantum" data-scene="mz-with-a"></div>

- BS1 → iki ayna → BS2, üç dedektör: A, B1, B2
- Dedektör **A** birinci ile ikinci ışın bölücü arasında
- **Beklenti (klasik model):** $P(A) = 1/2$, $\ P(B1) = P(B2) = 1/4$
- **Gözlem:** ✓ Beklentiyle uyuşuyor

::: {.notes}
Düzeneği genişlettik: birinci ışın bölücünün çıkışına iki ayna ve ikinci bir ışın bölücü ekledik. Dedektör A, ikinci ışın bölücüden önce, alt yol üzerinde duruyor.

Beklentiyi hesaplayalım. Birinci ışın bölücüde fotonun $1/2$ ihtimalle iletildiğini biliyoruz. İletilen foton alt yolu takip ediyor ve A'ya çarpıyor: $P(A) = 1/2$. Yansıyan foton üst yolu takip ediyor, iki aynadan geçip ikinci ışın bölücüye ulaşıyor. İkinci ışın bölücü bu fotonu tekrar ikiye bölüyor: $1/2 \times 1/2 = 1/4$ ihtimalle B1'de, $1/4$ ihtimalle B2'de. Toplam: $1/2 + 1/4 + 1/4 = 1$ — tutarlı.

"Otomatik ×30" ile deneyin. Barlar yaklaşık %50/%25/%25'e oturuyor. Klasik model burada da geçerli. Güven daha da arttı — her şey planlandığı gibi.
:::

---

## Deney 3: Dedektör A Kaldırılıyor

<div data-anim="quantum" data-scene="mz-no-a"></div>

**Klasik beklenti:** Foton iki kez yazı-tura — B1 ve B2'de $1/2$/$1/2$

$$
v_2 = \begin{pmatrix} 1/2 \\ 1/2 \end{pmatrix}
= \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & 1/2 \end{pmatrix}
\begin{pmatrix} 1/2 \\ 1/2 \end{pmatrix}
$$

**Gerçek sonuç: Fotonlar yalnızca B1'de gözlemleniyor — B2'ye hiç gitmiyor.**

::: {.notes}
Tek değişiklik: dedektör A'yı kaldırdık. Düzenek aynı, ikinci ışın bölücü yerinde duruyor. Klasik modele göre ne olmalı? Birinci ışın bölücüden çıkan foton $1/2$/$1/2$ ihtimalle alt ya da üst yolda. Her iki yol ikinci ışın bölücüde buluşuyor. İkinci ışın bölücü tekrar $1/2$/$1/2$ uyguluyor. Net sonuç: $P(B1) = 1/2$, $P(B2) = 1/2$. Bunu matematiksel olarak da gösterdik: FairCoin'i FairCoin'e uygulamak yine $v = (1/2, 1/2)$ üretiyor.

"Foton Gönder" ile tek tek deneyin. Sonra "Otomatik ×10" ile çoğaltın. B2 çubuğu sıfırda kalıyor. Ne kadar tekrar edilirse edilsin, foton B2'ye gitmiyor.

Bu nasıl mümkün? Klasik model açık bir öngörüde bulunuyor: $P(B2) = 1/2$. Deney bu öngörüyü tamamen çürütüyor. Bir model bir deneyi yanlış öngörüyorsa o model yanlış — ya da en azından eksik.

Stuart'ın bu konudaki tespiti: "Classical (Newtonian) mechanics fails to explain the behaviors of particles. We need a new (mathematical) model." Tam olarak bu noktadayız.
:::

---

## Klasik Model Neden Başarısız?

- Klasik modelde foton **ya** alt yolu **ya** üst yolu alır — biri seçilir, diğeri değil
- Dedektör A varken: foton bir yolda yakalanıyor, diğer yol işlevsiz kalıyor
- Dedektör A yokken: fotonun hangi yolu seçtiğini gözlemleyemiyoruz
- Gözlemleyemediğimizde model çöküyor — **iki yol arasındaki ayrım belirsizleşiyor**
- **Yeni bir matematiksel modele ihtiyacımız var**

> Kuantum mekaniği bu deneyi açıklayabiliyor — nasıl olduğunu ilerleyen konularda göreceğiz.

::: {.notes}
Sorun şu: dedektör A varken foton ya alt yolda (A'da yakalanıyor) ya üst yolda (BS2'ye ulaşıyor) bulunuyor. İki yol birbirinden bağımsız. Bu durum klasik olasılıkla tam açıklanıyor.

Ama A'yı kaldırdığımızda fotonun hangi yolu seçtiğini bilmiyoruz — gözlemleyemiyoruz. Klasik yaklaşım "hâlâ ya birinde ya diğerinde" diyor ve toplamı hesaplıyor. Bu hesap $1/2$/$1/2$ veriyor. Deney bunu yanlışlıyor.

Yeni modelde foton gözlemlenmediğinde her iki yolu eş zamanlı alıyor. İki yoldan gelen katkılar BS2'de birleştiğinde bazı çıkışlar için birbirini güçlendiriyor, bazıları için birbirini zayıflatıyor — hatta tamamen siliyor. B2'ye giden katkılar tam olarak birbirini sildiği için B2 hiç tetiklenmiyor. Bunu açıklamak için klasik olasılık yetmiyor; başka bir matematiksel yapıya geçmek gerekiyor.
:::

---

## İlerleyen Konular: Önizleme

*Bu slayt ileriki oturumlar için bir harita — bugün ayrıntıya girilmeyecek.*

<div data-anim="quantum" data-scene="amplitude-cancel"></div>

Kuantum modeli iki yoldan gelen katkıların **toplanıp sıfırlanabildiğini** gösteriyor.
Bunun nasıl çalıştığı — yeni matematiksel çerçeve, matris gösterimi — sonraki konularda.

::: {.notes}
İsteğe bağlı: sınıfta zaman varsa "Göster" butonuna basıp görseli kısaca tanıtın. Animasyon, iki yolun B2 çıkışına yaptığı katkıların zıt yönlü olduğunu ve toplamın sıfır verdiğini gösteriyor. Bu, klasik olasılıkla mümkün değil: olasılıklar pozitif sayılar, toplanamaz sıfıra.

Bu mekanizmanın tam matematiksel açıklaması — hangi matris, neden bu değerler, neden B2 için sıfır ama B1 için değil — sonraki konunun çekirdeği.
:::

---

## Özet

| Deney | Düzenek | Sonuç | Klasik model |
|---|---|---|---|
| 1 | Tek BS | %50/%50 | ✓ açıklar |
| 2 | İki ayna + BS2, Ded. A var | %50/%25/%25 | ✓ açıklar |
| 3 | İki ayna + BS2, Ded. A yok | %100/%0 | ✗ **başarısız** |

Klasik olasılık modeli foton davranışını tam olarak açıklayamıyor.
Yeni bir matematiksel çerçeveye ihtiyaç var → **kuantum mekaniği**.

::: {.notes}
Üç deneyin mantıksal zincirini tekrar kuralım. Deney 1 ve 2 güven inşa etti: klasik model iki farklı düzenekte de doğru öngörüyordu. Deney 3 o güveni yıktı: tek bir değişiklik — gözlemci kaldırmak — modelin öngörüsünü tamamen tersine çevirdi.

Bu, kuantum mekaniğinin merkezi sezgisine kapı açıyor: gözlem sadece bilgi toplamıyor, sistemi etkiliyor. Dedektör A varken foton "hangi yolda" sorusunun bir cevabı var. Yokken yok. Ve bu fark fiziksel olarak ölçülebilir bir sonuç üretiyor.
:::

---

## Sonraki Adım

- Foton davranışı için yeni matematiksel model gerekiyor
- Bu modeli ilerleyen oturumlarda adım adım inşa edeceğiz
- Işın bölücünün matematiksel karşılığı → sonraki konu
- Qiskit ile ilk kuantum devresi → ikinci oturum

::: {.notes}
Son cümleyi bırakın: "Az önce gördüğünüz şey — B2'nin hiç tetiklenmemesi — kuantum hesaplamanın en temel deneysel gözlemlerinden biridir. Şimdi bunu bilgisayarda nasıl modelleyeceğimize bakacağız."

Sonraki oturuma geçişi net yapın: ışın bölücünün matematiksel temsilini yazacağız ve Qiskit ile ilk kuantum devresini çalıştıracağız.
:::


:::{.notes}
Ekle: Hadamart kapısı için burada ışın ayırıcı kullandık. Gadamartın uygulandığı başka gerçek örnekler, hangi tip atomlara hangi tip işlemler yaılarak elde ediliyor.



:::
