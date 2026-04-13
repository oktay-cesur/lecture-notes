---
title: Makine Öğrenmesine Giriş
subtitle: BİM444 — Hafta 6
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-03-09
execute:
  echo: false
---

## Makine Öğrenmesine Giriş

---

## Buraya Nasıl Geldik?

- Önceki haftalar: ajan, çevreyi **önceden bilinen** bir modelle temsil ediyordu
- Durum uzayı, geçişler, maliyetler — hepsi verilmişti
- Peki ya çevre çok karmaşık ve model elle tanımlanamıyorsa?

::: {.notes}
Sekiz haftadır arama algoritmalarını konuştuk. BFS'den A*'a, minimaks'tan alfa-beta budamaya kadar hepsinin ortak bir varsayımı vardı: ajan, durum uzayını ve geçiş kurallarını önceden biliyordu. İstanbul-Ankara grafını biz verdik; ajan üzerinde arama yaptı.

Doğal soru şu: ya bu bilgi yoksa? Ya çevre o kadar karmaşık ki elle modellenemiyorsa? Bu noktada farklı bir yol açılıyor: öğrenme. Ajan, deneyimden kural çıkarıyor.
:::

---

## 2000'li Yıllarda Bir Problem: Çeviri

**Türkçe → İngilizce çeviri yazılımı yapın. Nasıl başlarsınız?**

- Kural Tabanlı (RBMT): dil bilgisi kurallarını elle yaz
- Örnek Tabanlı (EBMT): çevrilmiş cümle çiftlerinden eşleştir
- İstatistiksel (SMT): büyük veri + olasılık — **kural öğren, yazma**

::: {.notes}
Bu bir düşünce deneyi. 2000'li yıllarda Google Translate yoktu. Bir çeviri sistemi kurmak isteseydik ne yapardık?

İlk akla gelen: kuralları elle yaz. "Türkçe fiil sona gider", "bu yapı şöyle bağlanır"... Bu RBMT yaklaşımı. Sorun: dil muazzam karmaşık. Her kural yeni bir istisna doğuruyor. Onlarca dil için binlerce kural yazmak hem sürdürülemez hem de hiçbir zaman tam olmuyor.

Sonra gelen fikir: cümle çiftlerini kullan. Milyonlarca çevrilmiş metin var — bu metinlerdeki kalıpları bul, yenisine uygula. Artık kuralı biz yazmıyoruz; sistem veriden çıkarıyor.

SMT bunu olasılıksal olarak yapıyor: "Bu Türkçe cümleyi gördüğümde hangi İngilizce çıkışın olasılığı en yüksek?" Bu geçişin işaret ettiği şey şu: problemin çözümünü elle yazmaktan, veriden öğrenmek yoluna geçtik. İşte makine öğrenmesinin ruhu bu.
:::

---

## İnsanlar Nasıl Öğrenir?

**Dil nasıl öğrenilir?**
- Bebek: dinler → kalıpları içselleştirir → üretir → düzeltilir

**Başka her şey nasıl öğrenilir?**
- Deneme-yanılma: eylem → sonuç → ödül ya da ceza → strateji güncelle
- Gözlem: etiket olmadan yapıyı fark et

::: {.notes}
Bir adım geri çekilelim. Biz nasıl öğreniyoruz?

Bir bebeği düşünün. Dil öğrenirken kimse ona "özne + fiil + nesne" kuralını anlatmıyor. Duruyor, dinliyor, çevresindeki kalıpları içselleştiriyor. Bir süre sonra cümle kurmaya başlıyor. Yanlış yapıyor, düzeltiliyor, öğreniyor. Burada geri bildirim var: biri "evet" ya da "hayır" diyor. Bu denetimli öğrenme sezgisi.

Başka bir örnek: Edge of Tomorrow. Karakter her ölümünde sıfırlıyor ama deneyimini taşıyor. Kimse ona rehberlik etmiyor, kural vermiyor — sadece deney, sonuç, ödül ya da ceza. Zamanla en iyi stratejiyi buluyor. Bu takviyeli öğrenme.

Bir de şu var: elimizde binlerce müşteri işlem kaydı var. Kimse bize "bu müşteriler iki gruba ayrılıyor" demiyor; biz veriyi inceleyerek grubu kendimiz buluyoruz. Etiket yok, öğretmen yok — yapıyı veri içinden çıkarıyoruz. Bu denetimsiz öğrenme.

Makine öğrenmesi bu üç öğrenme biçimini sayısal olarak modellemeye çalışıyor.
:::

---

## Makine Öğrenmesi Nedir?

> Bilgisayarların açıkça programlanmadan veriden öğrenmesini sağlayan YZ dalı

- Geleneksel: **veri + kural → çıktı**
- MÖ: **veri + çıktı → kural**

**Alan haritası:**
- Yapay Zeka ⊃ Makine Öğrenmesi ⊃ Derin Öğrenme
- Veri Bilimi: örtüşen ama farklı odak

::: {.notes}
Tanımı iki satıra indirgelersek: geleneksel programlamada biz kuralı yazıyoruz, bilgisayar onu veri üzerinde uyguluyor. Makine öğrenmesinde ise veriyi ve istenen çıktıyı veriyoruz; bilgisayar kuralı kendisi buluyor.

Somut örnek: spam filtresi. Geleneksel yol — "konu 'kazandınız' içeriyorsa spam" gibi kurallar yaz. Spam gönderenler birkaç gün içinde adapte oluyor. MÖ yolu — milyonlarca etiketli e-posta ver, model kalıpları öğrensin, yeni taktiklere karşı da genelleme yapsın.

Alan haritası: YZ en büyük şemsiye. Altında makine öğrenmesi — veriden öğrenen sistemler. Onun altında derin öğrenme — çok katmanlı sinir ağları. Veri bilimi farklı bir odakla kesişiyor: analiz, görselleştirme, iş kararları. Örtüşen alan var ama eş anlamlı değiller.
:::

---

## Üç Öğrenme Paradigması

| Paradigma | Veri | Hedef | Sezgi |
|---|---|---|---|
| Denetimli | Giriş + **etiket** | Etiketi tahmin et | Öğretmenli öğrenme |
| Denetimsiz | Yalnızca giriş | Yapıyı keşfet | Kendi başına keşif |
| Takviyeli | Durum + **ödül** | Ödülü maksimize et | Deneme-yanılma |

::: {.notes}
Bu üç paradigma makine öğrenmesinin çatısını oluşturuyor.

Denetimli öğrenmede etiket var. Elimizde "bu X-ışını görüntüsü pnömoni, bu normal" bilgisi var; model bu örneklerden görüntü → tanı eşlemesini öğreniyor. Öğretmen gibi: doğruyu söylüyor, model kalıbı çıkarıyor.

Denetimsiz öğrenmede kimse size etiket vermiyor. Elimizde sadece müşteri alışveriş verisi var; model benzer müşterileri grupluyor. Grupların ne anlama geldiğini siz yorumluyorsunuz. Yapı veride zaten var — siz onu açığa çıkarıyorsunuz.

Takviyeli öğrenmede ajan çevreyle etkileşiyor. Her eylemden sonra ödül ya da ceza alıyor. Zamanla ödülü maksimize eden politikayı öğreniyor. Bu, daha önce konuştuğumuz hedef tabanlı ajanlarla doğrudan bağlantılı: ajan artık kuralları biz vermeden kendi deneyiminden öğreniyor.

Önümüzdeki iki haftada denetimli ve denetimsiz öğrenmeye odaklanacağız.
:::

---

## Öğrenme Formülasyonu

**Bilinmeyen bir $f(x)$ var. Veriyle $h(x) \approx f(x)$ bulmak istiyoruz.**

$$
1 \to 4 \quad 2 \to 11 \quad 3 \to 14 \quad 4 \to 21
$$

- Gözlem: $h(x) = 5x$ yakın bir tahmin
- $h$: hipotez · $f$: gerçek fonksiyon · fark: **hata**
- Öğrenme = hipotez uzayında hatayı minimize eden $h$'yi ara

::: {.notes}
Somutlaştıralım. Elinizde bu dört veri noktası var. Burada gerçek bir fonksiyon var — siz onu bilmiyorsunuz. Amacınız bu veriden o fonksiyonu tahmin eden h(x) bulmak.

Bakıyorsunuz: 5 × 1 = 5, gerçek 4. 5 × 2 = 10, gerçek 11. Tam tutmuyor ama yakın. Regresyon yaparak h(x) ≈ 5x + hata gibi bir model bulabilirsiniz.

İşte bu ML'in özü: bilinmeyen bir f(x) var; elimizdeki örneklerden h(x) öğreniyoruz; h ile f arasındaki fark hatadır, amacımız bu hatayı minimize etmek.

Hipotez uzayı kavramı da buradan çıkıyor: tüm olası h(x) fonksiyonlarının kümesi. Öğrenme bu uzayda en iyi h'yi aramak. Arama algoritmalarını konuşurken ne yapıyorduk? Durum uzayında en iyi yolu arıyorduk. ML de aynı mantığı hipotez uzayında uyguluyor.
:::

---

## Overfitting — Ezberleme mi, Genelleme mi?

- Model eğitim verisinde çok iyi → yeni veriye genelleyemiyor
- **Aşırı uyum (overfitting):** kalıbı değil, veriyi ezberledi
- **Yetersiz uyum (underfitting):** model çok basit, hiçbir şeyi yakalayamıyor
- Hedef: **görülmemiş** veride iyi performans

::: {.notes}
Bir öğrenciyi düşünün: sınav sorularını değil, geçmiş yıl cevaplarını ezberliyor. Geçmiş yıl sorularında 100 alıyor; fakat soruları biraz değiştirirseniz sıfır alıyor. İşte overfitting bu.

Model eğitim verisine o kadar iyi uyuyor ki, veriyi öğrenmiyor — ezberliyor. Gürültüyü bile ezberliyor. Yeni bir örnek geldiğinde bu ezberin faydası yok.

Öte tarafta underfitting var: model çok basit, ne eğitim verisini ne de yeni veriyi açıklayabiliyor. "Her evin fiyatı 5 milyon TL" demek gibi.

Makine öğrenmesinin asıl amacı bu ikisi arasındaki dengeyi bulmak. Eğitim verisinden öğren ama genel kalıpları öğren — özgül gürültüyü değil. Bu dengeye genelleme diyoruz ve ML'deki temel gerilim budur.
:::

---

## Değerlendirme: Görülmemiş Veriyle Test

- **Doğruluk (Accuracy):** doğru tahmin / toplam tahmin
- Modeli eğittiğiniz veri üzerinde test → **yanıltıcı**
- **Çözüm:** eğitim / test ayrımı

| Küme | Rol |
|---|---|
| Eğitim (train) | Model bu veriyle öğrenir |
| Test (test) | Yalnızca değerlendirmede kullanılır — model hiç görmedi |

::: {.notes}
Modeli nasıl değerlendireceğimizi bilmeden öğrendik mi bilemeyiz.

En basit metrik doğruluk: tahminlerin kaçı doğru? 100 e-posta var, 90'ını doğru sınıflandırdı; doğruluk %90.

Ama burada kritik bir tuzak var: modeli eğittiğiniz veri üzerinde test ederseniz sonuç yanıltıcıdır. Model o veriyi zaten gördü; ezberlemiş olabilir.

Çözüm basit ama önemli: veriyi ikiye böl. Eğitim setiyle öğren; test setiyle değerlendir. Test seti model tarafından hiç görülmemiş olmalı. Böylece gerçek genelleme performansını ölçebilirsiniz.

Bu ayrım makine öğrenmesindeki en temel pratik kuraldır. Önümüzdeki haftalarda confusion matrix ve cross-validation gibi daha ayrıntılı değerlendirme araçlarını göreceğiz.
:::

---

## ML Projesi Nasıl Yürür? — CRISP-DM

- **İş anlama:** problem ne? başarı kriteri ne?
- **Veri anlama:** elimizde ne var?
- **Veri hazırlama:** temizleme, dönüştürme — zamanın %60-80'i burada
- **Modelleme:** algoritma seç, eğit
- **Değerlendirme:** metrikler, overfitting kontrolü
- **Dağıtım:** modeli canlıya al

::: {.notes}
Makine öğrenmesi bir algoritma seçmekten ibaret değil. Bir proje yaşam döngüsü var.

CRISP-DM — Cross-Industry Standard Process for Data Mining — bu döngüyü standartlaştıran bir çerçeve. Altı adım, ama dikkat: bunlar doğrusal değil. Değerlendirme aşamasında sorun bulunursa veri hazırlama adımına geri dönülüyor. Model tutmuyorsa iş tanımı yeniden gözden geçiriliyor.

Pratikte zamanın büyük kısmı veri anlama ve veri hazırlama aşamalarında geçiyor. Çünkü gerçek dünya verisi dağınık, eksik, tutarsız. Güzel bir model için önce güzel veri gerekiyor.

Bu çerçeveyi dersin ilerleyen haftalarında da referans alacağız. Bir ML projesiyle karşılaştığınızda "şu an hangi adımdayım?" sorusunu bu çerçeveye göre yanıtlayabilirsiniz.
:::

---

## Özet

- MÖ: kural yazmak yerine **veriden kural öğrenmek**
- Üç paradigma: Denetimli · Denetimsiz · Takviyeli
- Formülasyon: $h(x) \approx f(x)$ — hipotez uzayında arama
- Temel gerilim: overfitting ↔ genelleme
- Değerlendirme: görülmemiş test verisi üzerinde
- Süreç: CRISP-DM — algoritma seçmekten önce problem ve veri anlama

::: {.notes}
Bu hafta kavramsal zemin kuruyoruz. Algoritmaları henüz derinlemesine ele almıyoruz; ama onlara zemin hazırlayan dili ve çerçeveyi öğrendik.

Bir sonraki hafta denetimli öğrenmeye geçeceğiz: etiketli veriden ne öğrenilir, sınıflandırma ve regresyon ne demek, karar fonksiyonu nasıl elde edilir. Algoritmalar orada birer araç olarak karşınıza çıkacak.
:::
