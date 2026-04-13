---
title: "Denetimli Öğrenme"
subtitle: BİM444 — Hafta 8
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-03-23
execute:
  echo: false
---

## Denetimli Öğrenme

---

## Geçen Haftadan: Üç Paradigma

- Denetimli: giriş + **etiket** → karar fonksiyonu öğren
- Denetimsiz: yalnızca giriş → yapıyı keşfet
- Takviyeli: durum + **ödül** → politika öğren

**Bu hafta:** Denetimli öğrenmeyi derinleştiriyoruz

::: {.notes}
Geçen hafta üç öğrenme paradigmasını gördük. Bugün denetimli öğrenmeye odaklanıyoruz.

Hatırlatma: denetimli öğrenmede bir öğretmen var. Bize her giriş için doğru çıktıyı söylüyor. Model bu örneklerden girdi → çıktı eşlemesini öğreniyor. Öğretmen olmadan, yani etiketsiz, bu mümkün değil.

Doğal soru: bu etiketler nereden geliyor? İnsan emeğiyle. Binlerce X-ışını görüntüsünü tıp uzmanları tek tek inceleyip "pnömoni" ya da "normal" diye işaretliyor. Bu etiketleme süreci hem pahalı hem zaman alıcı. Denetimli öğrenmenin temel kısıtı bu.
:::

---

## Etiketli Veri Nedir?

**Her örnek iki parçadan oluşur: giriş + doğru cevap**

| Giriş | Etiket |
|---|---|
| E-posta metni | Spam / Değil |
| Hasta X-ışını görüntüsü | Pnömoni / Normal |
| Ev: metrekare, konum, yaş | Fiyat (TL) |
| Müşteri işlem geçmişi | Terk edecek / Etmeyecek |

- Etiket = öğretmenin verdiği doğru cevap
- Model bu örneklerden kalıpları çıkarıyor

::: {.notes}
Etiket, her örnek için önceden bilinen doğru cevap. Bunları insanlar üretiyor — doktorlar, uzmanlar, kullanıcılar.

Tabloya bakın: iki farklı etiket türü var. İlk üç satır kategorik: spam ya da değil, pnömoni ya da normal. Bunlara sınıflandırma problemi diyoruz. Dördüncü satır sayısal: fiyat 1.5 milyon, 3.2 milyon gibi bir değer. Buna regresyon problemi diyoruz.

Bu ayrım önemli çünkü kullanılacak karar fonksiyonları farklılaşıyor. Ama her iki durumda da temel mantık aynı: etiketli örneklerden öğren, yeni örnekleri tahmin et.
:::

---

## İki Temel Problem Türü

**Sınıflandırma (Classification)**
- Çıktı: kategori — "hangi sınıf?"
- Örnek: e-posta → spam / değil · görüntü → kedi / köpek / kuş

**Regresyon (Regression)**
- Çıktı: sayısal değer — "ne kadar?"
- Örnek: eve bakarak fiyat tahmini · sensör verisinden sıcaklık tahmini

::: {.notes}
Sınıflandırma ve regresyon denetimli öğrenmenin iki temel dalı.

Sınıflandırmada çıktı bir kategori. "Bu e-posta spam mı?" — cevap evet ya da hayır. "Bu görüntü hangi hayvan?" — cevap kedi, köpek ya da kuş gibi. Kategoriler önceden belirlenmiş.

Regresyonda çıktı sürekli bir sayı. "Bu evin fiyatı ne kadar?" — cevap 2.4 milyon gibi bir değer. Sonsuz olası çıktı var.

Pratikte bu ayrım algoritma seçimini etkiler. Ama kavramsal olarak ikisi de aynı çerçevede: etiketli veri → model → tahmin.

Küçük bir not: bazı problemler ikisi arasında gidip gelebiliyor. "Bu ev 3 milyon üzerinde mi?" diye sorarsanız regresyon problemini sınıflandırmaya dönüştürmüş oluyorsunuz.
:::

---

## Karar Fonksiyonu: Kara Kutu Sezgisi

$$
h(x) \to \hat{y}
$$

- Giriş $x$: özellikler (e-posta kelimeleri, piksel değerleri, metrekare...)
- Çıktı $\hat{y}$: tahmin edilen etiket
- Model = bu eşlemeyi yapan fonksiyon

**Öğrenme:** eğitim verisi üzerinde $h(x) \approx f(x)$ olacak şekilde ayarla

::: {.notes}
Modeli şimdilik bir kara kutu olarak düşünün. İçinde ne olduğu önemli değil — bir giriş alıyor, bir tahmin üretiyor.

Eğitim aşamasında bu kutuyu ayarlıyoruz: elimizdeki etiketli örneklere bakarak tahminlerin gerçek değerlere yaklaşması için iç parametreleri güncelliyoruz. Süreç bundan ibaret.

Farklı algoritmalar bu kutunun içini farklı yapılarla dolduruyor. Bazıları karar ağacı şeklinde yapılandırıyor, bazıları doğrusal bir denklem kullanıyor, bazıları örnek mesafelerine bakıyor. Ama dışarıdan bakınca hepsi aynı: giriş al, tahmin üret.

Önümüzdeki sayfada bu kutuların nasıl çalıştığını sezgi düzeyinde göreceğiz.
:::

---

## Doğrusal Regresyon

**Soru:** Sürekli bir değeri nasıl tahmin ederiz?

$$
\hat{y} = w_0 + w_1 x_1 + w_2 x_2 + \cdots + w_n x_n
$$

- $w$ ağırlıkları öğrenilecek parametreler
- Hedef: **Ortalama Kare Hata (MSE)** minimize et

$$
\text{MSE} = \frac{1}{n} \sum_{i=1}^n (y_i - \hat{y}_i)^2
$$

- Optimizasyon: gradyan inişi ya da analitik çözüm

::: {.notes}
Regresyon sürekli değer tahmini için. En basit hali doğrusal regresyon: özelliklerle etiket arasındaki ilişkiyi doğrusal bir fonksiyonla modelliyoruz.

Ev fiyatı tahmini için düşünelim. Metrekare, oda sayısı, kat, şehir içi mesafe — bunlar özellikler. Her özelliğin bir ağırlığı var. Metrekare ağırlığı 5000 TL diyelim — her ekstra metrekare fiyatı 5000 TL artırıyor.

Öğrenme: bu ağırlıkları bulmak. MSE'yi minimize eden ağırlıkları arıyoruz. Matematiksel olarak bu problemin analitik çözümü var — normal denklemler. Ama özellik sayısı çok fazlaysa gradyan inişi daha verimli.

Doğrusal regresyon güçlü ama doğrusal olmayan ilişkileri yakalayamıyor. Çözüm: özellik dönüşümü. Metrekareyi girdi olarak almak yerine metrekare ve metrekarenin karesini girin — bu hâlâ doğrusal regresyon ama kareköksel ilişkiyi yakalıyor.
:::

---

## Lojistik Regresyon

**Soru:** Doğrusal regresyonu sınıflandırmaya nasıl uyarlarız?

$$
P(y=1 \mid x) = \sigma(w^T x) = \frac{1}{1 + e^{-w^T x}}
$$

- Sigmoid fonksiyonu: doğrusal çıktıyı 0-1 arasına sıkıştırır
- Çıktı: sınıfa ait olma olasılığı
- Karar: $P > 0.5$ ise pozitif sınıf

::: {.notes}
"Lojistik regresyon" adına rağmen bir sınıflandırma algoritmasıdır.

Fikir: doğrusal regresyon gibi ağırlıklı toplam hesapla, ama çıktıyı sigmoid fonksiyonuyla 0-1 arasına sıkıştır. Bu sayede çıktıyı olasılık olarak yorumlayabiliyoruz. "Bu e-postanın spam olma olasılığı 0.87" gibi.

Sigmoid fonksiyonu güzel bir özelliğe sahip: pozitif sonsuzda 1'e, negatif sonsuzda 0'a yaklaşıyor. Ortada yumuşak bir geçiş var. Bu hem matematiksel açıdan temiz hem de yorumlanması kolay.

Karar sınırı varsayılan olarak 0.5, ama değiştirebilirsiniz. Spam filtresinde "olasılık 0.3'ü geçse spam say" derseniz daha hassas ama daha fazla yanlış alarm veren bir sistem kuruyorsunuz. Tıbbi tanıda "olasılık 0.1'i geçse test yap" derseniz daha güvenli ama daha pahalı bir sistem. Bu eşiği ayarlamak iş gereklilikleriyle ilgili bir karar.
:::

---

## Karar Ağacı

**Soru:** Veriyi en iyi ayıran soruyu nasıl seçeriz?

- Her düğüm: bir özellik üzerine soru
- Her dal: sorunun cevabı
- Her yaprak: karar (sınıf etiketi)
- Bölme ölçütü: **entropi** / bilgi kazancı

$$
H = -\sum_i p_i \log_2 p_i
$$

::: {.notes}
Karar ağacı en okunabilir modellerden biri. Sonucu yorumlamak kolay: "hangi soruları sorarak bu karara ulaştı?" diye takip edebiliyorsunuz.

Ama kritik soru şu: hangi özelliği, hangi sırayla soracaksınız? Rastgele sormak olmaz. Burada entropi devreye giriyor.

Entropi bir kümenin karışıklığını ölçüyor. Tüm örnekler aynı sınıftaysa entropi sıfır — çok saf. Sınıflar eşit dağılmışsa entropi maksimum — çok karışık.

Bilgi kazancı şunu hesaplıyor: "Bu soruyu sorarsam, entropi ne kadar düşer?" En fazla entropi düşüren soruyu seçiyoruz — yani veriyi en iyi ayıran özelliği.

Bu süreç özyinelemeli: kök düğümde en iyi soruyu sor, veriyi ikiye böl, her parçada tekrar en iyi soruyu sor, ta ki yapraklara ulaşana kadar.

Sorun: derin ağaçlar eğitim verisini ezberler — overfitting. Çözüm: budama (pruning). Belirli derinlikten sonra dalları kes, ya da minimum örnek sayısı şartı koy.
:::

---

## Karar Ağacı: Spam Örneği

```
            Kelime "indirim" var mı?
           /                       \
         Evet                      Hayır
          |                          |
   Gönderen bilinmiyor mu?      → Spam değil
     /           \
   Evet          Hayır
    |               |
 → Spam        → Spam değil
```

- Ağaç insan tarafından okunabilir — **yorumlanabilir model**
- Derinleştikçe güçlenir ama overfitting riski artar
- Random Forest: çok sayıda ağacın oyu → daha güçlü, daha dayanıklı

::: {.notes}
Bu örnek gerçek bir spam filtresinin çok basitleştirilmiş hali. Gerçekte yüzlerce özellik, onlarca düğüm olabilir.

Yorumlanabilirlik karar ağacının en büyük avantajı. "Model neden bu e-postayı spam saydı?" sorusuna kökten yaprağa giden yolu takip ederek cevap verebiliyorsunuz. Tıbbi karar destek, kredi değerlendirme, hukuki sistemler gibi hesap verebilirliğin önemli olduğu alanlarda bu kritik.

Random Forest bu fikri güçlendiriyor: tek bir ağaç yerine yüzlerce farklı ağaç oluştur, her biri verinin farklı bir rastgele alt kümesi üzerinde eğitilsin. Tahmin için tüm ağaçların oyunu al. Tek ağacın overfitting riski azalıyor, genel performans artıyor. Ensemble öğrenmesinin en yaygın örneği.
:::

---

## k-En Yakın Komşu (kNN)

**Soru:** Yeni örnek hangi bilinen örneklere benziyor?

- Tüm eğitim verisini sakla
- Yeni örnek gelince: en yakın k komşuyu bul
- Sınıflandırma: komşuların çoğunluk etiketi
- Regresyon: komşuların ortalama değeri
- "Yakınlık": Öklid mesafesi, kosinüs benzerliği...

$$
d(a, b) = \sqrt{\sum_i (a_i - b_i)^2}
$$

::: {.notes}
kNN'in güzelliği sadeliğinde. Eğitim aşaması yok — sadece veriyi hafızaya al. Tahmin aşamasında mesafeleri hesapla ve en yakın k komşuya bak.

k seçimi kritik. k=1: en yakın tek komşunun etiketini al. Gürültüye çok duyarlı — aykırı bir eğitim örneği tahminleri bozar. k büyüdükçe: daha gürültüye dayanıklı ama karar sınırı bulanıklaşıyor. Genellikle cross-validation ile en iyi k bulunuyor.

Mesafe ölçüsü de önemli. Öklid mesafesi varsayılan ama her zaman doğru değil. Metin verisinde kosinüs benzerliği daha anlamlı: iki belgenin kelime vektörlerinin ne kadar aynı yönü işaret ettiğine bakıyor, uzunluğa değil.

Büyük dezavantajı: tahmin zamanı yavaş ve hafıza açısından pahalı. Her tahmin için tüm eğitim verisine mesafe hesaplamak gerekiyor. Milyonlarca örnek varsa bu çok yavaş. Modern uygulamalarda yaklaşık en yakın komşu algoritmaları kullanılıyor.
:::

---

## Naive Bayes

**Bayes teoremini sınıflandırmaya uygula**

$$
P(C \mid x) = \frac{P(x \mid C) \cdot P(C)}{P(x)}
$$

- $P(C)$: öncül olasılık — bu sınıf ne kadar yaygın?
- $P(x \mid C)$: bu özellikler bu sınıfta ne kadar görülüyor?
- "Naive": özellikler birbirinden bağımsız varsayılır

**Örnek:** "kazandınız" kelimesi spam'de %80, normal e-postada %2 geçiyor

::: {.notes}
Naive Bayes olasılıksal bir bakış açısı sunuyor. Bayes teoremini sınıflandırmaya uyguluyoruz: "Bu özelliklere sahip bir örnek gördüğümde, hangi sınıfa ait olma olasılığı daha yüksek?"

"Naive" — saf — kelimesi önemli bir varsayımdan geliyor: özellikler birbirinden koşullu bağımsız kabul ediliyor. "kazandınız" kelimesinin geçmesi, "tıklayın" kelimesinin geçmesinden bağımsız sayılıyor. Bu gerçekte genellikle doğru değil — ama yine de çok iyi çalışıyor.

Neden bu kadar iyi çalışıyor? Sınıflandırma kararı için tam olasılık değeri değil, hangi sınıfın daha olası olduğu önemli. Bağımsızlık varsayımı bozulsa bile çoğunlukla doğru sınıf kazanıyor.

Spam filtreleme, metin sınıflandırma, tıbbi tanı gibi alanlarda çok yaygın. Eğitim çok hızlı, yorum kolay, küçük veriyle bile makul sonuç veriyor. Dezavantajı: bağımsızlık varsayımı çok güçlü ilişkileri kaçırıyor.
:::

---

## Destek Vektör Makinesi (SVM)

**Soru:** İki sınıfı ayıran en iyi çizgi hangisi?

- Sadece doğru ayırmak değil: **marjı maksimize et**
- Marj: karar sınırı ile en yakın örnekler arası mesafe
- Destek vektörleri: marjı belirleyen sınır örnekleri
- Çekirdek hilesi: doğrusal ayrılamayan veriler için boyutu artır

::: {.notes}
SVM farklı bir soru soruyor: sadece veriyi doğru ayıran bir sınır bulmak değil, en güvenli sınırı bulmak.

Sezgiyle düşünelim: iki sınıf var, aralarında sonsuz sayıda doğru çizebilirsiniz. Hepsi eğitim verisini doğru ayırıyor. Ama hangisi yeni verilere karşı en dayanıklı? SVM'in cevabı: iki sınıfa da mümkün olduğunca uzak olan çizgi. Bu "maksimum marj" prensibi.

Marjı belirleyen örnekler "destek vektörleri" — bunlar sınırın hemen kenarındaki noktalar. Model aslında sadece bu kritik örnekleri hatırlıyor, diğerleri karar için önemli değil.

Çekirdek hilesi daha ileri bir adım: veriler doğrusal olarak ayrılamıyorsa boyutu artır. 2D'de karışık olan veri 3D'de doğrusal ayrılabilir hale gelebilir. Çekirdek fonksiyonu bu dönüşümü hesaplamak zorunda kalmadan yapıyor — matematiksel bir kısayol.

SVM yüksek boyutlu veride güçlü. Biyoinformatik, metin sınıflandırma gibi onlarca-yüzlerce özelliğin olduğu problemlerde hâlâ rekabetçi.
:::

---

## Modelleri Karşılaştırma

| Model | Güçlü yan | Zayıf yan |
|---|---|---|
| Karar ağacı | Yorumlanabilir, hızlı | Overfitting riski |
| kNN | Basit, eğitim yok | Tahmin yavaş, hafıza |
| Doğrusal regresyon | Hızlı, yorumlanabilir | Doğrusal olmayan ilişki yok |
| Lojistik regresyon | Olasılık çıktısı | Doğrusal sınır |
| Naive Bayes | Hızlı, az veriyle çalışır | Bağımsızlık varsayımı |
| SVM | Yüksek boyut, marj | Büyük veride yavaş |

**"En iyi algoritma" yok — probleme, veriye, bağlama göre seçilir**

::: {.notes}
Bu tablo bir seçim kılavuzu — karar ağacının her zaman en iyi olduğunu ya da SVM'nin en kötü olduğunu söylemiyor.

Pratikte nasıl seçilir? Birkaç kural:

Yorumlanabilirlik kritikse: karar ağacı ya da lojistik regresyon. Kara kutu kabul edilebiliyorsa: SVM ya da daha sonra göreceğimiz sinir ağları.

Veri azsa: Naive Bayes, lojistik regresyon. Veri çoksa: kNN bile makul çalışır, karmaşık modeller iyice güçlenir.

Özellik sayısı çoksa: SVM güçlü. Özellik sayısı azsa: neredeyse her şey çalışır.

Zaman kısıtı varsa: Naive Bayes ve lojistik regresyon eğitimi çok hızlı. kNN eğitimi yok ama tahmini yavaş.

Gerçek hayatta genellikle birkaç model denenir, cross-validation ile karşılaştırılır, en iyi performans vereni seçilir. Bu süreç "model seçimi" olarak adlandırılıyor.
:::

---

## Modeli Değerlendirme

**Confusion Matrix — Karmaşıklık Matrisi**

|  | Tahmin: Pozitif | Tahmin: Negatif |
|---|---|---|
| **Gerçek: Pozitif** | TP (doğru pozitif) | FN (yanlış negatif) |
| **Gerçek: Negatif** | FP (yanlış pozitif) | TN (doğru negatif) |

- **Doğruluk:** $(TP + TN)$ / toplam
- **Kesinlik:** $TP / (TP + FP)$ — "pozitif dediklerimin kaçı gerçekten pozitif?"
- **Duyarlılık:** $TP / (TP + FN)$ — "gerçek pozitiflerin kaçını yakaladım?"

::: {.notes}
Doğruluk her zaman yeterli değil. Neden?

Düşünün: bir hastalık nüfusun yüzde birinde görülüyor. "Herkes sağlıklı" diyen bir model %99 doğruluk alıyor. Ama hiç işe yaramıyor.

İşte bu yüzden confusion matrix var. Dört hücre, dört senaryo: doğru pozitif, yanlış negatif, yanlış pozitif, doğru negatif.

Kesinlik: "pozitif dediklerimden kaçı gerçekten pozitif?" — yanlış alarm oranını ölçüyor.
Duyarlılık: "gerçek pozitiflerin kaçını yakaladım?" — kaçırma oranını ölçüyor.

Tıbbi tanıda duyarlılık kritik: hastayı kaçırmak, fazladan alarm vermekten daha tehlikeli. Spam filtresinde kesinlik önemli: gerçek e-postayı spam kutusuna atmak can sıkıcı.

Hangi metriğin önemli olduğu probleme göre değişiyor — her zaman doğruluğa bakmak yetmiyor.
:::

---

## Eğitim / Test Ayrımı ve Cross-Validation

**Temel kural:** test seti model tarafından hiç görülmemiş olmalı

**Cross-validation (Çapraz Doğrulama):**
- Veriyi k parçaya böl
- Her seferinde bir parçayı test, kalanları eğitim olarak kullan
- k tur sonunda ortalama performans → güvenilir tahmin

::: {.notes}
Geçen hafta eğitim/test ayrımından bahsettik. Bu hafta bir adım ileri gidiyoruz.

Basit eğitim/test ayrımında veriyi iki parçaya bölüyorsunuz: yüzde 80 eğitim, yüzde 20 test. Ama bu ayrımın şansı etkisi var — o yüzde 20'nin "kolay" ya da "zor" örnekler içermesi sonucu değiştirebilir.

Cross-validation daha sağlam bir çözüm. k parçaya bölüyorsunuz — diyelim 5. İlk turda parça 1 test, parça 2-3-4-5 eğitim. İkinci turda parça 2 test, diğerleri eğitim. Böyle k tur yapıyorsunuz ve performansları ortalıyorsunuz. Her örnek tam olarak bir kez test setinde yer alıyor.

Sonuç çok daha güvenilir. Küçük veri setlerinde özellikle önemli — her örneği hem eğitimde hem testte kullanmış oluyorsunuz.
:::

---

## Ajan Bağlantısı

- Denetimli öğrenme ile eğitilmiş model → ajanın **karar fonksiyonu**
- Ajan algı girdisini $h(x)$'e veriyor → eylem tavsiyesi alıyor
- Kural elle yazılmadı — **örneklerden öğrenildi**

::: {.notes}
Bu dersin ana temasına bağlayalım.

Daha önce ajanları konuşurken karar almak için arama yaptı, kuralları biz verdik. Şimdi farklı bir senaryo: ajan bir karar fonksiyonu kullanıyor ve bu fonksiyon etiketli örneklerden öğrenildi.

Örnek: bir ajan hastanenin yoğun bakım ünitesinde hangi hastanın riskli olduğunu belirliyor. Binlerce geçmiş hasta kaydı etiketlendi (iyileşti / kötüleşti). Denetimli öğrenme bu veriden bir model üretti. Şimdi ajan yeni hasta verilerini bu modele veriyor ve risk tahmini alıyor.

Kural elle yazılmadı — hasta kayıtlarından öğrenildi. Ajan bunu bir araç olarak kullanıyor. Önümüzdeki hafta etiketsiz veriden ne öğrenilebileceğini göreceğiz.
:::

---

## Özet

- Denetimli öğrenme: **etiketli veri** → karar fonksiyonu
- İki tür: Sınıflandırma (kategori) · Regresyon (sayısal değer)
- Karar fonksiyonu: karar ağacı · kNN · Naive Bayes — hepsi aynı amaca hizmet
- Değerlendirme: doğruluk yetmez → confusion matrix + kesinlik/duyarlılık
- Test güvenilirliği: eğitim/test ayrımı · cross-validation
- Ajan için: öğrenilmiş karar fonksiyonu = akıllı algı-eylem haritası

::: {.notes}
Bu hafta denetimli öğrenmenin kavramsal çerçevesini tamamladık.

Anahtar fikir: insan tarafından etiketlenmiş örnekler var; model bu örneklerden giriş → çıktı eşlemesini öğreniyor; yeni, görülmemiş örneklere genelliyor.

Algoritmalar burada birer araç. Karar ağacı, kNN, Naive Bayes — bunların hangisinin daha iyi çalıştığı probleme, veri miktarına ve özelliklerine göre değişiyor. Asıl soru şu değil: "Hangi algoritma en iyi?" Asıl soru: "Bu problem için ne kadar etiketli verim var ve değerlendirme kriterim ne?"

Önümüzdeki hafta etiket olmadığında ne yapabileceğimizi göreceğiz.
:::
