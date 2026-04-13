---
title: "Derin Öğrenmeye Giriş"
subtitle: BİM444 — Hafta 11
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-04-13
execute:
  echo: false
---

## Derin Öğrenmeye Giriş

---

## Makine Öğrenmesinde Ne Eksikti?

- Denetimli öğrenme: karar fonksiyonu öğreniyorduk
- Sorun: **özellikleri biz seçiyorduk**
- Görüntüde "kenar", "renk", "doku" — bunları elle tanımlamak gerekiyordu
- Karmaşık veride elle özellik çıkarmak: zor, pahalı, yetersiz

**Derin öğrenme:** özellikleri de veriden öğren

::: {.notes}
Geçen haftalarda makine öğrenmesinde bir şeyi hep sabit tuttuk: modele veriyi verirken, hangi özelliklerin önemli olduğuna biz karar veriyorduk.

Spam filtresinde: "konu satırı", "gönderen adresi", "kelime sıklığı" — bunları biz seçtik. Ev fiyat tahmininde: "metrekare", "oda sayısı", "konum" — bunları biz seçtik.

Peki görüntü sınıflandırmasında? Bir fotoğraftaki kedinin özelliği ne? Kulakların şekli? Bıyıklar? Gözlerin yuvarlak olması? Bunları elle tanımlamak hem zor hem eksik. Farklı kedi fotoğrafları çok farklı görünüyor.

Derin öğrenme bu sorunu çözüyor: özellikleri de modelin kendisi öğreniyor. Biz sadece ham veriyi — piksel değerleri, ham metin — veriyoruz. Hiyerarşik katmanlar her seviyede giderek daha soyut özellikler çıkarıyor.
:::

---

## Biyolojik İlham: Nöron

- Beyin ~86 milyar nörondan oluşuyor
- Her nöron: giriş sinyalleri alır → toplar → eşiği aşarsa ateşler
- Yapay nöron: aynı mantığın matematiksel modeli

$$
z = w_1 x_1 + w_2 x_2 + \cdots + w_n x_n + b
$$
$$
\text{çıkış} = f(z)
$$

- $w$: ağırlıklar · $b$: önyargı · $f$: aktivasyon fonksiyonu

::: {.notes}
Yapay sinir ağlarının ilhamı biyolojik sinir sisteminden geliyor — ama bu ilham sezgisel, birebir kopya değil.

Gerçek bir nöron dendritlerden sinyal alıyor, hücre gövdesinde topluyor, eşiği aşarsa akson boyunca iletim gerçekleştiriyor. Yapay nöron bunu sayısal olarak taklit ediyor.

z = w₁x₁ + w₂x₂ + ... formülü ağırlıklı toplam. Her giriş x bir ağırlık w ile çarpılıyor. Toplamın üzerine bir önyargı b ekleniyor. Sonra bu z değeri f aktivasyon fonksiyonundan geçiyor.

Ağırlıklar öğrenilen parametreler. Başta rastgele; eğitim süresince veriye göre ayarlanıyor. Bu ayarlama süreci öğrenmenin kendisi.

Tek bir nöronun gücü sınırlı. Ama binlerce, milyonlarca nöronu katmanlar halinde bağladığınızda çok güçlü şeyler oluyor.
:::

---

## Aktivasyon Fonksiyonu: Doğrusallığı Kır

**Neden gerekli?**
- Aktivasyonsuz: katmanlar ne kadar çok olursa olsun sonuç doğrusal
- Aktivasyon: modele doğrusal olmayan ilişkileri öğretir

**Yaygın fonksiyonlar:**

| Fonksiyon | Sezgi | Kullanım |
|---|---|---|
| ReLU | Negatifi sıfırla, pozitifte değiştirme | Derin ağlarda standart |
| Sigmoid | Çıktıyı 0-1 arasına sıkıştır | İkili sınıflandırma çıkışı |
| Softmax | K sınıf için olasılık dağılımı üret | Çok sınıflı çıkış |

::: {.notes}
Aktivasyon fonksiyonunu anlamak kritik.

Neden bu kadar önemli? Düşünün: aktivasyon olmadan her katman sadece ağırlıklı toplam yapıyor. İki doğrusal dönüşümü arka arkaya koyarsanız yine doğrusal dönüşüm elde edersiniz. Yüz katman da olsa — hepsi tek bir doğrusal katmana indirgenebilir.

Aktivasyon fonksiyonu bu doğrusallığı kırıyor. Modelin "eğer şu koşul varsa böyle davran, yoksa farklı davran" türünden karmaşık örüntüler öğrenmesine izin veriyor.

ReLU bugün en yaygın kullanılan: negatif girdileri sıfırla, pozitif girdileri olduğu gibi bırak. Basit ama şaşırtıcı derecede etkili. Gradyan kaybı sorununu azaltması nedeniyle derin ağlarda standart hale geldi.

Sigmoid ve Softmax çıkış katmanında: sigmoid "bu e-posta spam mı?" gibi ikili sorular için olasılık üretiyor; softmax "bu görüntü kedi mi, köpek mi, kuş mu?" için her sınıfın olasılığını veriyor.
:::

---

## Derin Ağ: Katmanlar

```
Giriş → [Gizli Katman 1] → [Gizli Katman 2] → ... → Çıkış
```

- **Giriş katmanı:** ham veri — pikseller, kelimeler, sayılar
- **Gizli katmanlar:** giderek soyutlaşan özellikler
- **Çıkış katmanı:** tahmin — sınıf, değer, olasılık

**"Derin" = birden fazla gizli katman**

::: {.notes}
"Derin" kelimesi buradan geliyor: birden fazla gizli katman.

Her katman bir öncekinin çıktısını alıyor ve daha soyut bir temsile dönüştürüyor. Görüntü sınıflandırmasında bunu somutlaştıralım: ilk katman piksel farklılıklarından kenarları öğreniyor. İkinci katman kenarlardan şekilleri öğreniyor. Üçüncü katman şekillerden nesne parçalarını öğreniyor. Dördüncü katman nesne parçalarından nesneyi tanıyor.

Bu hiyerarşik özellik öğrenimi derin öğrenmenin gücünün kaynağı. Önceki ML yöntemlerinde bu hiyerarşiyi biz elle tanımlamak zorundaydık. Derin ağ bunu veri üzerinden kendi buluyor.

Kaç katman? Kaç nöron? Bu sorular mimari tasarımı oluşturuyor ve hem sanat hem bilim. Genellikle deneme yanılmayla ve alandan gelen sezgiyle belirleniyor.
:::

---

## Öğrenme: Geri Yayılım

1. İleri geçiş: girdi ağdan geçer, tahmin üretilir
2. Kayıp hesaplanır: tahmin ile gerçek arasındaki fark
3. Geri yayılım: hata gradyanı katman katman geri taşınır
4. Ağırlıklar güncellenir: her ağırlık hataya katkısı kadar ayarlanır

**Gradyan inişi:** kayıp fonksiyonunun en derin noktasına in

::: {.notes}
Peki ağırlıklar nasıl öğreniliyor? Geri yayılım algoritmasıyla.

Süreç döngüsel: önce bir örneği ağdan ileri geçiriyorsunuz, tahmin çıkıyor. Tahmini gerçek etiketle karşılaştırıyorsunuz, fark "kayıp" olarak ölçülüyor. Sonra bu hatayı çıkış katmanından giriş katmanına doğru geri yayıyorsunuz. Her ağırlık "bu hataya ne kadar katkıda bulundum?" bilgisini alıyor ve buna göre biraz güncelleniyor.

Bu güncelleme gradyan inişi prensibiyle yapılıyor: kaybı bir dağ enenüstü olarak düşünün, ağırlıklar bir nokta. Amacınız bu dağdan aşağı inmek — yani kaybı azaltmak. Her adımda en dik iniş yönünü bulup o yönde küçük bir adım atıyorsunuz.

"Küçük adım" önemli: öğrenme hızı (learning rate) bu adım büyüklüğünü belirliyor. Çok büyük adım — kayıp minimumu atlayıp zıplar. Çok küçük adım — öğrenme çok yavaş.

Milyonlarca örnekle bu döngü tekrarlanıyor ve ağırlıklar yavaş yavaş doğru değerlere yaklaşıyor.
:::

---

## Mimariler: Farklı Problem, Farklı Yapı

**CNN — Evrişimli Sinir Ağı**
- Görüntü işleme için tasarlanmış
- Yerel örüntüleri tara — kenar, şekil, doku
- Kullanım: görüntü sınıflandırma, nesne tespiti

**RNN / LSTM — Tekrarlayan Sinir Ağı**
- Sıralı veri için tasarlanmış — zaman serisi, metin
- Geçmişi "hatırlayan" gizli durum
- Kullanım: dil modelleme, makine çevirisi

**Transformer**
- Dikkat (attention) mekanizması — her adımda tüm diziye bak
- LLM'lerin temeli: GPT, BERT
- Kullanım: metin, görüntü, ses

::: {.notes}
Derin öğrenme tek bir yapı değil. Problem türüne göre farklı mimariler geliştirilmiş.

CNN görüntü için optimize edilmiş. Piksel komşuluğunu kullanan filtreler — konvolüsyon işlemi — yerel görsel örüntüleri çıkarıyor. Sonra bu örüntüleri giderek daha büyük alanlarda birleştiriyor. ImageNet yarışmasında 2012'de AlexNet ile insanı geçen CNN, bilgisayarla görü alanında bir kırılma noktasıydı.

RNN ve LSTM sıralı veriler için. Bir cümledeki kelimeler birbiriyle ilişkili; önceki kelimeleri "hatırlamak" gerekiyor. RNN bu hafızayı gizli durum olarak taşıyor. LSTM daha uzun bağımlılıkları öğrenebiliyor — uzun cümlelerde önceki bağlamı korumak.

Transformer 2017'de "Attention is All You Need" makalesiyle geldi ve her şeyi değiştirdi. Sırayı adım adım değil, tüm diziyi aynı anda işliyor. Bu paralelleştirme hem hız hem performans avantajı sağlıyor. GPT, BERT, ve bugün kullandığımız tüm büyük dil modelleri transformer tabanlı.
:::

---

## Neden Şimdi?

**Derin öğrenme fikirleri 1980'lerdeydi — neden 2010'larda patladı?**

- **Veri:** internet, sosyal medya, sensörler → milyarlarca etiketli örnek
- **Hesaplama:** GPU'lar paralel matris işlemini hızlandırdı
- **Algoritmik gelişmeler:** ReLU, dropout, batch normalization

::: {.notes}
Bu iyi bir soru. Geri yayılım 1986'da Rumelhart, Hinton ve Williams tarafından yayınlandı. Neden 40 yıl beklendi?

Üç şeyin bir araya gelmesi gerekiyordu.

Veri: derin ağlar veri aç. 1990'larda yeterli etiketli veri yoktu. 2000'lerde internet, dijital fotoğraf, sosyal medya milyarlarca örnek üretti. ImageNet: 14 milyon görüntü, 1000 kategori. Bu olmadan derin öğrenme çalışmıyordu.

Hesaplama: derin ağ eğitimi matris çarpımlarına indirgenebiliyor. GPU'lar görüntü işleme için tasarlanmış ama matris işlemlerinde CPU'dan yüz kat hızlı. NVIDIA'nın CUDA'sı bunu erişilebilir kıldı.

Algoritmalar: ReLU gradyan kaybı sorununu azalttı. Dropout aşırı öğrenmeyi engelledi. Batch normalization eğitimi stabil kıldı. Küçük ama kritik katkılar.

Bu üçü 2010'larda buluştu ve derin öğrenme patlaması yaşandı.
:::

---

## Sınırlılıklar

- **Veri açlığı:** milyonlarca etiketli örnek gerekebilir
- **Yorumlanamaz:** "kara kutu" — neden bu kararı verdi?
- **Hesaplama maliyeti:** eğitim: saatler, günler, haftalar
- **Kırılganlık:** küçük gürültü → tamamen yanlış tahmin (adversarial örnekler)

::: {.notes}
Derin öğrenme güçlü ama sınırsız değil.

Veri açlığı en büyük kısıt. Denetimli öğrenmede yüzlerce örnekle çalışabiliyordunuz; derin öğrenmede yüz binler, milyonlar gerekebilir. Bu veriyi bulmak ya da üretmek her zaman mümkün değil.

Yorumlanamaz olması özellikle kritik uygulamalarda sorun. Bir model kredi başvurusunu reddettiyse — neden? Bir tıbbi karar verdiyse — hangi özelliğe dayanarak? Bu soruları cevaplamak çok zor.

Adversarial örnekler ilginç: bir görüntüye insan gözünün fark edemeyeceği küçük gürültü ekliyorsunuz — model aniden tamamen farklı bir şey görüyor. Bir panda fotoğrafına mikro gürültü: model %99 güvenle "gibbon" diyor. Bu güvenilirlik sorunu özellikle güvenlik açısından önemli.

Bu sınırlılıklar aktif araştırma alanları: az örnekle öğrenme, açıklanabilir YZ, sağlamlık. Derin öğrenme bitmedi — hâlâ gelişiyor.
:::

---

## Ajan Bağlantısı

- Derin ağ → ajanın **algı işleme** katmanı
- Kamera görüntüsü → CNN → durum temsili → karar
- RL + Derin öğrenme = **DRL (Derin Pekiştirmeli Öğrenme)**
- AlphaGo, AlphaStar, OpenAI Five — hepsi bu kombinasyon

::: {.notes}
Dersin bütününe bağlayalım.

Ajan algı alıyor: kamera görüntüleri, sensör verileri, metin. Bu ham algıyı doğrudan kullanmak zor — çok yüksek boyutlu, çok gürültülü. Derin ağ bu algıyı işliyor ve özlü bir temsile dönüştürüyor. Bu temsil üzerinden karar veriliyor.

Pekiştirmeli öğrenmeyle birleşince çok güçlü: ajan hem deneyimden strateji öğreniyor (RL) hem de karmaşık algıyı işleyebiliyor (derin öğrenme). AlphaGo tam olarak bu: piksel görüntüsünden kararlar, milyonlarca oyundan öğrenme.

OpenAI Five Dota 2 oyununu oynuyor: beş ajanın koordinasyonu, karmaşık stratejiler, uzun vadeli planlama. Hepsi bu kombinasyonla mümkün oldu.

Bir sonraki hafta bu temelin üzerine büyük dil modelleri konuşacağız: transformer mimarisinin dili nasıl modellediğini ve ChatGPT gibi sistemlerin nasıl ortaya çıktığını göreceğiz.
:::

---

## Özet

- Derin öğrenme: ham veriden hiyerarşik özellikler öğren
- Yapay nöron: ağırlıklı toplam + aktivasyon
- Aktivasyon fonksiyonu: doğrusallığı kır — ReLU, Sigmoid, Softmax
- Geri yayılım + gradyan inişi: ağırlıkları öğren
- Mimariler: CNN (görüntü) · RNN/LSTM (sıralı) · Transformer (dikkat)
- Neden şimdi: veri + GPU + algoritmik gelişmeler
- Ajan için: karmaşık algıyı işleyen katman

::: {.notes}
Derin öğrenme makine öğrenmesinin en güçlü kollarından biri ve bugünkü yapay zeka patlamasının motor gücü.

Temel fikir: yeterince derin ve geniş bir ağı yeterince veriyle eğitirseniz, elle tanımlamak imkânsız olan karmaşık örüntüleri öğrenebiliyorsunuz.

Ama bu güç beraberinde sorumluluk da getiriyor: yorumlanamaz kararlar, veri ihtiyacı, hesaplama maliyeti, kırılganlıklar. Bu sınırlılıkların farkında olmak, derin öğrenmeyi hangi problemlere uygulamanın mantıklı olduğunu bilmek en az tekniği bilmek kadar önemli.

Gelecek hafta bu altyapının üzerinde büyük dil modellerini konuşacağız.
:::
