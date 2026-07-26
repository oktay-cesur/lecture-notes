---
title: "Denetimsiz Öğrenme"
subtitle: BİM444 — Hafta 9
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-03-30
execute:
  echo: false
---

## Denetimsiz Öğrenme

---

## Geçen Haftadan: Etiket Vardı

- Denetimli öğrenme: her örneğin bir doğru cevabı vardı
- Etiketler insan emeğiyle üretiliyordu — pahalı, zaman alıcı
- Peki ya etiket yoksa?

**Bu hafta:** Etiketsiz veriden ne öğrenebiliriz?

::: {.notes}
Geçen hafta denetimli öğrenmede bir öğretmen vardı: her örneğin doğru cevabını söylüyordu. Model bu örneklerden giriş → çıktı eşlemesini öğrendi.

Ama gerçek dünyada etiketli veri çoğunlukla kıt. Binlerce X-ışını görüntüsünü tıp uzmanına işaretletmek hem pahalı hem yavaş. Öte yandan etiketsiz veri her yerde: web'deki metinler, sosyal medya paylaşımları, sensör okumaları, müşteri işlemleri.

Denetimsiz öğrenme şu soruyu soruyor: kimse bize doğru cevabı söylemeden, bu veriden ne öğrenebiliriz?
:::

---

## Etiketsiz Veri: Örnekler

| Veri | Etiket yok | Öğrenilebilecek yapı |
|---|---|---|
| Müşteri alışveriş geçmişi | Segment bilgisi yok | Benzer müşteri grupları |
| Haber makaleleri | Konu etiketi yok | Konu kümeleri |
| Gen ekspresyon verisi | Hastalık tanısı yok | Benzer hasta profilleri |
| Kullanıcı tıklama verisi | Tercih etiketi yok | Davranış kalıpları |

- Veri içinde **gizli yapı** var
- Denetimsiz öğrenme bu yapıyı açığa çıkarıyor

::: {.notes}
Tabloya bakın. Her satırda milyonlarca örnek olabilir — ama hiçbirinde önceden belirlenmiş bir etiket yok.

Müşteri alışveriş geçmişi düşünün. Binlerce müşteri, binlerce ürün, milyonlarca işlem. Kimse bize "bu müşteri A segmenti" demedi. Ama veri içinde bir yapı var: bazı müşteriler benzer ürünler alıyor, benzer zamanlarda geliyor, benzer harcamalar yapıyor. Denetimsiz öğrenme bu yapıyı sayısal olarak ortaya çıkarıyor.

Bu yapıyı bilmek değerli: farklı müşteri segmentlerine farklı kampanya, farklı içerik, farklı öneri. Ama bunu yapmak için etiket üretmek zorunda değilsiniz — veri kendi içinde konuşuyor.
:::

---

## Kümeleme — Benzer Olanları Grupla

**Fikir:** Birbirine yakın örnekleri aynı gruba at

- "Yakınlık" = bir mesafe ölçüsü (Öklid, korelasyon...)
- Grupların ne anlama geldiğini biz yorumluyoruz
- Sınıflandırma değil: çıktı etiket değil, **grup ataması**

**Soru:** "Benzer" ne demek — bu seçim kritik

::: {.notes}
Kümeleme denetimsiz öğrenmenin en yaygın kullanım alanı. Temel soru basit: hangi örnekler birbirine benziyor?

Bunun için önce "benzerlik" ya da "uzaklık" tanımlamak gerekiyor. İki müşteri arasındaki uzaklık ne? Alışveriş sepetlerinin örtüşmesi? Harcama miktarlarının farkı? Bu seçim kritik çünkü algoritma bu ölçüye göre grupluyor.

Kümeleme ile sınıflandırma sık karıştırılıyor. Fark şu: sınıflandırmada etiketler önceden belirlenmiş ve modele öğretilmiş. Kümelemede etiket yok — model grupları kendi buluyor, biz bu gruplara sonradan anlam yüklüyoruz.
:::

---

## k-Means: Adım Adım

1. k merkez nokta rastgele yerleştir
2. Her örneği en yakın merkeze ata
3. Her kümenin yeni merkezini hesapla (ortalama)
4. Değişim duruncaya kadar 2-3'ü tekrarla

**k önceden seçilmeli — kaç küme istiyorsunuz?**

::: {.notes}
k-Means kümelemenin en klasik algoritması.

Adımları somutlaştıralım. 2 boyutlu veri noktaları var ve k=3 seçtiniz. İlk adımda üç merkezi rastgele koyuyorsunuz. Her noktayı "hangi merkeze daha yakın?" diye sorarak en yakın kümeye atıyorsunuz. Sonra her küme için ortalama koordinatı hesaplıyorsunuz — bu yeni merkez. Tekrar atama, tekrar ortalama, ta ki merkez konumları değişmeyene kadar.

k seçimi kritik ve zor. k=2 mi, k=5 mi? Genellikle farklı k değerlerini deneyip silhouette skoru gibi metriklerle değerlendiriyorsunuz. Ya da alana özgü bilgiyle karar veriyorsunuz: "pazarlama için 4 segment yeterli."

k-Means'in sınırlılıkları: başlangıç noktaları sonucu etkiliyor; kümelerin yuvarlak şekilli olduğunu varsayıyor; aykırı değerlere duyarlı.
:::

---

## Hiyerarşik Kümeleme

- Tek tek başla → en benzer ikileri birleştir → tekrarla
- Sonuç: **dendrogram** — ağaç yapısı
- Kaç küme istediğinize sonradan karar verebilirsiniz — k önceden belirlenmez

::: {.notes}
Hiyerarşik kümeleme farklı bir strateji izliyor. Başlangıçta her örnek kendi başına bir küme. Sonra en yakın iki kümeyi birleştiriyor, en yakın iki kümeyi daha birleştiriyor, ta ki tek bir küme kalana kadar.

Bu süreç bir ağaç — dendrogram — üretiyor. Ağacın altında tek tek noktalar var; yukarıya çıktıkça gruplar birleşiyor; en üstte tek bir küme.

Güçlü yanı: kaç küme istediğinize sonradan karar verebilirsiniz. Dendrogramı farklı seviyelerden kesiyorsunuz — düşük kesimde çok küme, yüksek kesimde az küme. k-Means'de bu esneklik yok.

Zayıf yanı: büyük veri setlerinde hesaplama maliyeti yüksek.
:::

---

## Boyut İndirgeme — Neden?

**Problem:** çok sayıda özellik var
- Görselleştirme imkânsız: 100 boyutlu veriyi çizemezsiniz
- Hesaplama pahalı: her boyut karmaşıklığı artırıyor
- Gürültü: bazı özellikler bilgi taşımıyor, bazıları birbiriyle tekrar ediyor

**Çözüm:** Bilgiyi koruyarak boyut sayısını azalt

::: {.notes}
Makine öğrenmesinde boyut — yani özellik sayısı — can sıkabilir. Bir genomik veri setinde on binlerce gen var; bir müşteri veri setinde yüzlerce değişken. Bu kadar boyutta hem çalışmak zor hem de görselleştirmek imkânsız.

Üstelik her boyut eşit bilgi taşımıyor. Bazı özellikler birbirleriyle yüksek korelasyonlu — ikisi de aslında aynı şeyi söylüyor. Bazıları saf gürültü.

Boyut indirgeme bu durumu çözüyor: bilgiyi mümkün olduğunca koruyarak boyut sayısını düşürüyor. Sonuç: görselleştirilebilir, hesaplanabilir, yorumlanabilir bir temsil.
:::

---

## PCA — Temel Bileşen Analizi

- Verideki **en fazla varyasyonu** açıklayan yönleri bul
- Bu yönler boyunca veriyi yeniden ifade et
- İlk birkaç bileşen çoğu bilgiyi taşır → geri kalanı at

**Sezgi:** 3D nesnenin 2D gölgesi — bilgiyi koruyarak boyutu azaltır

::: {.notes}
PCA en yaygın boyut indirgeme yöntemi.

Sezgiyle başlayalım: elinizde 3D bir nesne var, masaya yatırıp gölgesine bakıyorsunuz. Gölge 2D ama nesnenin şekli hakkında çok şey söylüyor. Tüm bilgiyi taşımıyor ama çoğunu taşıyor.

PCA bunu matematiksel olarak yapıyor. "Bu veri hangi yönde en çok değişiyor?" sorusunu soruyor. Bu yönler "temel bileşenler." İlk temel bileşen en fazla varyasyonu açıklayan yön; ikincisi ona dik olan ve ikinci en fazla varyasyonu açıklayan yön; böyle devam ediyor.

Sonra bu bileşenler üzerinden veriyi yeniden ifade ediyorsunuz. İlk iki ya da üç bileşeni tutarsanız veriyi görselleştirebilirsiniz — her örnek artık 2D ya da 3D bir noktaya karşılık geliyor.
:::

---

## t-SNE — Görselleştirme İçin

- Yüksek boyutlu veriyi **2D / 3D'ye** indir
- Birbirine yakın örnekler yakın kalsın
- Sonuç: küme yapıları gözle görülür hale gelir
- PCA'dan farkı: global yapıdan çok **yerel komşulukları** korur

::: {.notes}
t-SNE özellikle görselleştirme için tasarlanmış bir yöntem.

PCA global varyasyonu korumaya çalışıyor. t-SNE farklı bir strateji: "yüksek boyutlu uzayda yakın olan örnekler, düşük boyutlu temsilimde de yakın olsun." Yerel komşuluklara odaklanıyor.

Sonuç olarak t-SNE görselleştirmesi küme yapılarını çok güzel ortaya çıkarabiliyor. Yüzlerce boyutlu metin verisini 2D'ye indirgediğinizde, benzer konulardaki belgeler bir arada gruplanıyor.

Önemli uyarı: t-SNE yorumlanmaya dikkat gerektiriyor. Küme boyutları ve aralarındaki mesafeler mutlak anlam taşımıyor. Keşif aracı olarak kullanın, kesin çıkarım için değil.
:::

---

## Ajan Bağlantısı

- Denetimsiz öğrenme → ajanın **çevreyi anlamlandırması**
- Kümeleme: benzer durumları grupla → benzer eylemleri uygula
- Boyut indirgeme: karmaşık algı → özlü temsil → daha hızlı karar
- Etiket olmadan ortamdan **yapı çıkarma**

::: {.notes}
Ajan perspektifinden bakınca denetimsiz öğrenme farklı bir anlam kazanıyor.

Bir ajan çevreden sürekli algı alıyor. Bu algılar yüksek boyutlu: kamera görüntüleri, sensör değerleri, metin akışları. Denetimli öğrenme bunları etiketli örneklerle işledi. Ama etiket her zaman yok.

Denetimsiz öğrenme ajanın etiketsiz deneyimden yapı çıkarmasını sağlıyor. Kümeleme: "bu algılar benzer durumları temsil ediyor, benzer eylem uygula." Boyut indirgeme: karmaşık algıyı özlü bir temsile sıkıştır, o temsil üzerinden karar al.

Bu özellikle takviyeli öğrenmeyle birleştiğinde güçlü oluyor: ajan ortamı kendi başına keşfederek yapıyı anlıyor, sonra bu yapı üzerinde politika öğreniyor.
:::

---

## Özet

- Denetimsiz öğrenme: etiket yok → **veri içindeki yapıyı keşfet**
- Kümeleme: benzer örnekleri grupla
  - k-Means: k merkez, iteratif güncelleme
  - Hiyerarşik: dendrogram, k önceden belirlenmez
- Boyut indirgeme: bilgiyi koruyarak boyutu azalt
  - PCA: en fazla varyasyonu açıklayan yönler
  - t-SNE: yerel komşulukları koruyarak görselleştirme
- Ajan için: etiketsiz deneyimden çevre yapısını anlamlandır

::: {.notes}
Bu hafta denetimsiz öğrenmenin iki temel aracını gördük: kümeleme ve boyut indirgeme.

Her ikisi de etiket gerektirmiyor — veri içindeki gizli yapıyı kendi matematiğiyle açığa çıkarıyor. Kümeleme "benzer olanları bir araya getir" diyor; boyut indirgeme "karmaşıklığı azalt, özü koru" diyor.

Makine öğrenmesinde üç hafta boyunca bir çerçeve kurmuş olduk: neden öğrenme gerekli, denetimli öğrenme ne yapıyor, denetimsiz öğrenme ne yapıyor. Bundan sonraki haftalarda derin öğrenme ve diğer yaklaşımlar bu çerçevenin üzerine inşa edilecek.
:::
