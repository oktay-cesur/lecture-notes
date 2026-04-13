---
title: "Büyük Dil Modelleri"
subtitle: BİM444 — Hafta 12
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-04-20
execute:
  echo: false
---

## Büyük Dil Modelleri

---

## Makineye Dil Öğretmek: 30 Yıllık Yolculuk

**Dersin başında bir soru sormuştuk:**
> 2000'li yıllarda çeviri yazılımı nasıl yapılırdı?

Bu soruyu şimdi daha geniş bir zaman dilimiyle yeniden ele alıyoruz.

::: {.notes}
T06'da makine öğrenmesine girerken bir soru sormuştuk: 2000'li yıllarda çeviri uygulaması nasıl yapılırdı? RBMT, EBMT, SMT diye üç aşama gördük.

Bu hafta o soruyu daha geniş bir perspektiften ele alacağız. Dili bilgisayara öğretme çabası 1950'lere uzanıyor. Her on yılda yaklaşım köklü biçimde değişti. Bu değişimi izlemek — neyin işe yaramadığını, neyin neden işe yaradığını anlamak — büyük dil modellerini neden bu kadar önemli kılıyor sorusuna cevap veriyor.
:::

---

## 1990'lar: Biçimsel Dilbilgisi

**Fikir:** Dili matematiksel olarak tanımla — Chomsky'nin bağlamdan bağımsız dilbilgisi (CFG)

```
S  → NP VP
NP → Det N | N
VP → V NP | V
Det → "bir" | "the"
N  → "kedi" | "fare"
V  → "kovaladı"
```

- Her cümle bu kurallara göre türetilebilir
- Sözdizimi çözümleyici (parser): kurallara uygun tek yapıyı bul

::: {.notes}
Noam Chomsky 1950'lerde biçimsel dil teorisini geliştirdi. Temel fikir: insan dilinin üretim kuralları matematiksel olarak tanımlanabilir. Bağlamdan bağımsız dilbilgisi — Context-Free Grammar, CFG — bu kuralları üretim kuralları şeklinde ifade ediyor.

Örnekteki kurallara bakın: S (cümle) bir NP (isim öbeği) ve VP'den (yüklem öbeği) oluşur. NP bir Det (belirteç) ve N'den (isim) oluşabilir. Bu kurallar özyinelemeli biçimde uygulanıyor ve sonunda terminal sembollere — gerçek kelimelere — ulaşılıyor.

Bu yaklaşım bilgisayar bilimine çok uygun: belirli bir girdi dizisinin dilbilgisine uyup uymadığını kontrol edebiliyorsunuz. Programlama dilleri hâlâ bu yöntemle ayrıştırılıyor. Sorun şu: programlama dilleri kasıtlı olarak belirsizlikten arındırılmış yapay dillerdir. Doğal dil öyle değil.
:::

---

## Parse Tree: Cümleyi Ağaç Olarak Temsil Et

```
         S
        / \
       NP  VP
       |   / \
       N  V   NP
       |  |   |
     Kedi kovaladı fare
```

- Her düğüm bir dilbilgisel kategori
- Yaprak düğümler gerçek kelimeler
- Parser bu ağacı otomatik olarak inşa ediyor

::: {.notes}
Parse tree cümlenin sözdizimsel yapısını görselleştiriyor. "Kedi fareyi kovaladı" — S düğümünden NP ve VP ayrılıyor. NP'den kedi geliyor. VP'den kovaladı ve fare geliyor.

Bu yapı birçok NLP görevi için kullanışlı. Makine çevirisinde kaynak dildeki ağaç hedef dile dönüştürülüyor. Bilgi çıkarmada "özne kedi, eylem kovaladı, nesne fare" gibi ilişkiler çıkarılıyor. Soru cevaplama sistemlerinde sorunun ağacı analiz ediliyor.

1980-90'larda NLTK (Natural Language Toolkit) gibi araçlar bu ayrıştırıcıları araştırmacıya sundu. Penn Treebank projesiyle İngilizce için 40.000 cümle elle etiketlendi. Bu veri çok değerliydi — ama çok pahalıydı.

Sorun henüz görünmüyor. Ama bir sonraki slaytta dil gerçekte nasıl davranıyor, oraya bakacağız.
:::

---

## NLP Boru Hattı: Katman Katman İşlem

```
Ham metin
  ↓ Tokenizasyon    → ["Kedi", "fareyi", "kovaladı"]
  ↓ Sözcük türü     → [İsim, İsim+Belirteç, Fiil]
  ↓ Sözdizimi       → Parse tree
  ↓ Anlambilim      → "kovalama" eylemi: özne=kedi, nesne=fare
  ↓ Söylem          → Önceki cümlelerle bağlantı
```

- Her katman bir öncekinin çıktısına bağlı
- Her katman için ayrı kural tabanı yazıldı

::: {.notes}
1990'larda NLP bir boru hattı olarak tasarlandı. Herbir katman bağımsız bir modül — ve her modül için ayrı bir ekip, ayrı bir kural tabanı.

Tokenizasyon görece kolay: cümleyi kelimelere böl. Ama "İstanbul'da" bir kelime mi, üç mi? "Dr." bir cümle sonu mu? İngilizce'de "it's" iki token mı bir mi?

Sözcük türü etiketleme: her kelimeye isim, fiil, sıfat gibi etiket ver. "Koşu" — isim mi, fiil mi? Bağlama bağlı. Bu bağımlılığı çözmek için kural üstüne kural eklendi.

Anlambilim katmanı daha da zor: "kedi fareyi kovaladı" ile "fare kediyi kovaladı" aynı kelimeleri farklı sırayla içeriyor ama anlam tamamen farklı. Bu ilişkileri doğru çıkarmak için çok sayıda kural gerekiyor.

En kritik sorun: her katmandaki hata bir sonraki katmana geçiyor. Sözcük türü etiketleme yanlışsa sözdizimi de yanlış oluyor; sözdizimi yanlışsa anlambilim de yanlış oluyor. Hata birikim sistemi.
:::

---

## Belirsizlik: Duvarla Karşılaşma

**Sözcüksel belirsizlik:** tek kelime, çok anlam

> "Banka'ya gittim" → finans kurumu mu, nehir kıyısı mı?

**Sözdizimsel belirsizlik:** tek cümle, çok yapı

> "Dürbünle adama baktım" → dürbün bende mi, adamda mı?

**Referans belirsizliği:** "o" neye işaret ediyor?

> "Ali, Veli'ye söyledi. O çok şaşırdı." → kim şaşırdı?

::: {.notes}
İşte asıl sorun burada.

Sözcüksel belirsizlik her dilde var. İngilizcede "bank" aynı iki anlama geliyor. Türkçede "kıl" — saç mı, eylem mi? "Yüz" — sayı mı, yüz mü? Bağlam çözümlüyor ama bağlamı anlamak için zaten diğer belirsizlikleri çözmüş olmak gerekiyor. Kısır döngü.

Sözdizimsel belirsizlik daha derin. "Dürbünle adama baktım" — Türkçe için iki okuma mümkün: ya ben dürbün kullandım, ya da adamın dürbünü vardı. İkisi de dilbilgisi açısından geçerli. Bu ikisini ayırt etmek için cümle dışı bilgi gerekiyor: fiziksel bağlam, konuşmanın akışı, dünya bilgisi.

Referans çözümleme belki en zoru. "O çok şaşırdı" — kim? Bir önceki cümlede iki isim var: Ali ve Veli. Hangisi? İnsan bu soruyu anında cevaplıyor çünkü sosyal bağlamı, konuşmanın dinamiğini biliyor. Kural tabanına bunu kodlamak neredeyse imkânsız.

1990'ların sonunda bir gerçek kabul edildi: dil kurallarla değil, örüntülerle işliyor. Ve bu örüntüler ancak veriden öğrenilerek yakalanabilir.
:::

---

## 1990'ların Mirası

**İşe yarayanlar:**
- Programlama dilleri hâlâ CFG ile ayrıştırılıyor
- Sözdizimi ağaçları bugünkü modellerde eğitim verisi olarak kullanıldı
- NLP boru hattı mimarisi düşünsel çerçeve olarak kaldı

**İşe yaramayanlar:**
- El yapımı kural tabanı gerçek dil ölçeğine çıkamadı
- Katmanlı hata birikimi dayanılmaz hale geldi
- Belirsizlik çözümlemek için kural yetmiyor — bağlam ve dünya bilgisi şart

::: {.notes}
1990'ların NLP çalışmaları tamamen boşa gitmedi.

Pozitif miras: programlama dillerindeki derleyiciler, regex tabanlı metin işleme, sözdizimi ağacı formatları — bunlar hâlâ kullanımda. Penn Treebank gibi elle etiketlenmiş veri setleri sonraki on yılda denetimli öğrenme için altın veri oldu. Boru hattı düşüncesi — katmanlı işlem, her katmanın sorumluluğu — modern sistemlerde hâlâ var, sadece katmanlar artık sinir ağı.

Negatif ders: doğal dilin belirsizliği kural tabanıyla çözülemiyor. Dilin istatistiksel doğası var — hangi ifadenin hangi bağlamda olası olduğu büyük veri olmadan modellenemiyor. Bu kabul 2000'lerin istatistiksel NLP'sine kapı açtı.

Bir metafor: 1990'ların NLP'si dili bir satranç oyunu gibi ele aldı — sınırlı kurallar, sınırlı hamleler. Ama dil satranç değil, poker: kurallar var ama bağlam, olasılık ve belirsizlik oyunun özü.
:::

---

---

## 2000'ler: İstatistiksel Dil Modelleri

**Fikir:** Kuralı yazma — büyük veri üzerinde olasılık hesapla

- N-gram modeli: bir sonraki kelime önceki N kelimeye bağlı
- "yapay zeka" gördükten sonra "alanında" gelme olasılığı nedir?
- Gizli Markov Modeli (HMM): konuşma tanıma, sözcük tür etiketleme
- İstatistiksel Makine Çevirisi (SMT): büyük paralel korpustan öğren

::: {.notes}
2000'lerde paradigma kaydı: kural yazmak yerine istatistik. Eğer yeterince büyük metin koleksiyonunuz — korpusunuz — varsa, hangi kelimenin hangisinin peşinden geldiğini sayarak olasılık tahminleri yapabilirsiniz.

N-gram modeli en basit hali: bigram (2-gram) modeli her kelimenin olasılığını bir önceki kelimeye bağlı hesaplıyor. "yapay" gördükten sonra "zeka" gelme olasılığı yüksek, "muz" gelme olasılığı düşük.

Gizli Markov Modeli konuşma tanımada büyük başarı sağladı. Telefonla bankanızı aradığınızda "şikayetiniz için 1'e basın" diyen sistem HMM tabanlıydı.

SMT de aynı çerçevede: milyonlarca çevrilmiş cümle çiftinden "bu Türkçe dizisi için hangi İngilizce karşılık en olası?" diye hesaplıyorsunuz.

Sorun: n-gram modeli bağlamı çok kısa tutuyor. Üç kelime önce ne söylediğinizi biliyor, ama on kelime önce ne söylediğinizi bilmiyor. Uzun mesafe bağımlılıkları bu yaklaşımla yakalanmıyor.
:::

---

## 2013-2015: Sözcük Vektörleri

**Fikir:** Kelimeleri sayısal vektörlerle temsil et

$$
\text{kral} - \text{adam} + \text{kadın} \approx \text{kraliçe}
$$

- Word2Vec (2013, Google): bağlamdaki kelimelerden temsil öğren
- Benzer anlamdaki kelimeler vektör uzayında yakın
- İlk kez anlam sayısal olarak temsil edildi

::: {.notes}
2013'te Mikolov ve ekibinin Word2Vec makalesi küçük ama derin bir sarsıntı yarattı.

Fikir: her kelimeyi 100 ya da 300 boyutlu bir vektörle temsil et. Ama bu vektörleri rastgele atama — kelimenin bağlamından öğren. "Benzer bağlamlarda geçen kelimeler benzer vektörlere sahip olsun."

Sonuç şaşırtıcıydı: vektör aritmetiği anlam ilişkilerini yakalıyordu. kral - adam + kadın = kraliçe. Türkiye - Ankara + Paris = Fransa. Paris - Fransa + İtalya = Roma.

Bu, dili sayısal olarak temsil etmek açısından bir milat. Artık kelimeler vektör uzayında geometrik ilişkilerle tanımlanabiliyordu. Bu temsil tüm sonraki mimarilerin giriş katmanına yerleşti.
:::

---

## 2014-2017: Sıralı Sinir Ağları

**RNN ve LSTM: Dili sıralı işle**

- Her kelimeyi sırayla gör, gizli durumu güncelle
- LSTM uzun bağımlılıkları hatırlamak için kapı mekanizmaları ekledi
- Seq2Seq: cümleyi bir vektöre sıkıştır → başka dile aç
- Attention (2015): çıktı üretirken ilgili girdi bölgelerine bak

**Sorun:** Sıralı işlem paralelleştirilemiyor — eğitim yavaş

::: {.notes}
RNN ve LSTM daha uzun bağımlılıkları yakalamak için tasarlandı. Her kelimeyi sırayla işliyor ve gizli bir durum vektöründe geçmişi taşıyor.

Seq2Seq mimarisi makine çevirisinde büyük ilerleme sağladı: kaynak cümleyi bir "anlam vektörüne" kodla, o vektörden hedef dili oluştur. Google Translate 2016'da bu mimariye geçtiğinde kalite ciddi ölçüde arttı.

2015'te Bahdanau dikkat mekanizması eklendi: çeviri yaparken, her çıkış kelimesi üretilirken kaynak cümlenin ilgili bölgelerine bakılıyor. "Attention" ilk kez burada belirdi — ve çok işe yaradı.

Ama temel sorun kaldı: RNN sıralı işliyor. Yani 100 kelimelik cümleyi işlemek için 100 adım gerekiyor, adımlar paralel yapılamıyor. Büyük veri ile büyük model eğitmek çok yavaş.
:::

---

## 2017: Kırılma Noktası — Transformer

**"Attention is All You Need"** — Vaswani ve ark., 2017

- Sıralı işlemi at: tüm dizi **aynı anda** işlensin
- Her kelime her kelimeye bak → dikkat skoru hesapla
- Paralel hesaplama → GPU ile hızlı eğitim
- Hem kalite hem hız: RNN'i tüm görevlerde geçti

::: {.notes}
2017'deki makale başlığı cesur: "Attention is All You Need." RNN ve LSTM tamamen atılıyor, yerini sadece dikkat mekanizmaları alıyor.

Temel fikir: sıralı işlemi kaldır. Her kelime aynı anda tüm diğer kelimelere "bak." Her çift için bir dikkat skoru hesapla: "bu kelime için şu kelime ne kadar önemli?" Skorları ağırlık olarak kullan ve temsilieri güncelle.

Bu yaklaşım hem paralel hem daha güçlü. GPU'lar matris işlemlerinde çok hızlı — ve dikkat mekanizması temelde büyük matris çarpımlarına indirgenebiliyor. Eğitim süresi dramatik biçimde düştü.

Kalite de arttı: uzun mesafe bağımlılıklar artık gerçekten yakalanıyor. Cümlenin başındaki bir kelime, cümlenin sonundaki bir kelimeyle doğrudan ilişkilendirilebiliyor.

Bu makale sonraki beş yılın tüm büyük gelişmelerinin temeli oldu.
:::

---

## 2018-2020: Ön Eğitimli Modeller

| Model | Kim | Ne yaptı |
|---|---|---|
| BERT (2018) | Google | Çift yönlü transformer, maskelenmiş dil modeli |
| GPT-1 (2018) | OpenAI | Tek yönlü, ön eğitim + ince ayar |
| GPT-2 (2019) | OpenAI | 1.5 milyar parametre — "çok tehlikeli" diye gizlendi |
| GPT-3 (2020) | OpenAI | 175 milyar parametre, az örnekle öğrenme |

**Paradigma:** büyük korpus üzerinde ön eğitim → herhangi bir göreve ince ayar

::: {.notes}
Transformer'ın ardından "ön eğitimli büyük modeller" dönemi başladı.

BERT iki yönlü okuyarak bağlamı daha iyi yakalıyor: bir kelimeyi hem solundaki hem sağındaki bağlamla temsil ediyor. Maskelenmiş dil modeli: cümledeki bazı kelimeleri gizle, model tahmin etsin. Bu görev Google Arama'da bilgi çıkarma kalitesini büyük ölçüde artırdı.

GPT tek yönlü ama üretken: soldan sağa bir sonraki kelimeyi tahmin et. Bu "üretme" için doğal — konuşma, çeviri, özetleme.

GPT-2 çıktığında OpenAI modeli kamuoyuyla paylaşmayı geciktirdi — "yanlış bilgi üretmede kötüye kullanılabilir" diye. Bu karar büyük tartışma yarattı ama aynı zamanda modelin ne kadar güçlü olduğunu gösterdi.

GPT-3 gerçek bir sıçrama. 175 milyar parametre. Ama asıl önemli özelliği: birkaç örnek gösterin, görevi anlıyor ve yapıyor. Hiç ince ayar gerekmeden.
:::

---

## 2022+: Büyük Dil Modeli Çağı

**ChatGPT (Kasım 2022):** dil modellerini milyonlara taşıdı

- GPT-3.5 + RLHF: insan geri bildirimle hizalama
- "Yararlı, zararsız, dürüst" davranış öğretimi
- 100 milyon kullanıcıya ulaşma süresi: 2 ay

**Sonraki nesil:**
- GPT-4, Claude, Gemini, Llama — multimodal, daha büyük, daha hızlı
- Görüntü, ses, kod — yalnızca metin değil

::: {.notes}
ChatGPT kasım 2022'de çıktığında teknik bir yenilik getirmiyordu — GPT-3.5 zaten vardı. Ama arayüz ve hizalama her şeyi değiştirdi.

RLHF — İnsan Geri Bildirimli Pekiştirmeli Öğrenme — modeli sohbet için ince ayar yaptı. İnsan değerlendiriciler farklı cevapları karşılaştırdı, hangisi daha iyi dedi, bu tercihlerden ödül modeli öğrenildi, RL ile GPT bu ödülü maksimize etmek üzere ayarlandı. Sonuç: daha doğal, daha yardımsever, daha az zararlı bir model.

100 milyon kullanıcıya ulaşmak için Netflix 3.5 yıl, Instagram 2.5 yıl beklemişti. ChatGPT 2 ayda ulaştı.

Bugün GPT-4, Claude 3, Gemini, Meta'nın açık kaynak Llama modeli — bunlar artık metinle kalmıyor. Görüntü anlama, ses işleme, kod yazma, video analizi. "Büyük dil modeli" terimi yetersiz kalmaya başladı.
:::

---

## Nasıl Çalışıyor: Bir Sonraki Kelimeyi Tahmin Et

$$
P(\text{kelime}_t \mid \text{kelime}_1, \text{kelime}_2, \ldots, \text{kelime}_{t-1})
$$

- Eğitim: milyarlarca cümle → her adımda bir sonraki kelimeyi tahmin et
- Model parametreleri geri yayılımla güncellenir
- Eğitim verisi: web, kitaplar, makaleler, kod — trilyonlarca token

::: {.notes}
Tüm bu karmaşıklığın arkasında aslında basit bir görev var.

Model her adımda bir sonraki kelimeyi — daha doğrusu "token"ı — tahmin ediyor. Token bazen kelime, bazen kelimenin bir parçası. GPT-4'ün eğitim verisi tahminen 13 trilyon token.

Her tahmin adımı: mevcut bağlamı transformer katmanlarından geçir, tüm kelimelerin olasılık dağılımını üret, en yüksek olasılıklı kelimeyi seç ya da örnekle. Bu çok hızlı yapılabiliyor — GPU'da saniyede binlerce token.

Eğitim süreci bunun tersini çalıştırıyor: gerçek metni göster, modelin tahminini al, hatayı hesapla, geri yayılımla parametreleri güncelle. Milyarlarca parametre, trilyonlarca token, binlerce GPU, haftalar. GPT-4 eğitim maliyeti tahminen yüz milyon dolar.

Ama bu kadar basit bir görevi bu kadar büyük ölçekte yapmak, modelin içinde dil bilgisi, dünya bilgisi, akıl yürütme kapasitesi gibi şeyler "ortaya çıkarıyor."
:::

---

## Sınırlılıklar

- **Halüsinasyon:** özgüvenle yanlış bilgi üretme
- **Bilgi kesme tarihi:** eğitim sonrası dünyayı bilmiyor
- **Bağlam penceresi:** çok uzun metinlerde bağlam kaybolur
- **Önyargı:** eğitim verisindeki önyargıları yansıtır
- **Yorumlanamaz:** neden bu cevabı verdi — bilinmiyor

::: {.notes}
LLM'ler çok güçlü ama sınırlarını bilmek şart.

Halüsinasyon en tehlikeli sorun. Model tutarlı, özgüvenli, iyi yazılmış ama tamamen yanlış metinler üretebilir. "Şu makalenin kaynağı nedir?" diye sorduğunuzda var olmayan bir makale ve yazar uydurabilir. Bu modelin nasıl çalıştığından kaynaklanıyor: "bu bağlamdan sonra en olası token nedir?" sorusu "bu bilgi doğru mu?" sorusundan farklı.

Bilgi kesme tarihi: model eğitim verisiyle donmuş. Eğitimden sonraki olayları bilmiyor.

Önyargı: eğitim verisi internetten geliyor. İnternetteki toplumsal önyargılar modele yansıyor. Bu aktif araştırma ve mühendislik problemi.

Bu sınırlılıkları bilerek kullanmak şart: LLM güçlü bir araç ama bir otorite değil. Kritik bilgileri her zaman doğrulayın.
:::

---

## Özet: 30 Yıllık Yolculuk

| Dönem | Yaklaşım | Sınır |
|---|---|---|
| 1990'lar | Gramer kuralları | Dil kurallara sığmıyor |
| 2000'lar | İstatistiksel modeller | Kısa bağlam, zayıf anlam |
| 2013-15 | Sözcük vektörleri + RNN | Sıralı işlem, yavaş eğitim |
| 2017 | Transformer | — |
| 2018-20 | Ön eğitimli modeller | Hizalama sorunu |
| 2022+ | LLM + RLHF | Halüsinasyon, önyargı |

::: {.notes}
Her satır bir dönemin hem başarısını hem sınırını gösteriyor. Her sınır bir sonraki paradigma değişiminin nedeni oldu.

Kural tabanlı yaklaşım dilbilgisi açısından tutarlı ama gerçek dilin karmaşıklığına dayanamadı. İstatistiksel modeller veriyi kullanmayı öğretti ama anlamı sayısal olarak temsil edemedi. Sözcük vektörleri anlamı yakaladı ama sıralı işlem eğitimi zorlaştırdı. Transformer sıralı işlemi kaldırarak tüm kapıları açtı. Ön eğitimli modeller ölçeği artırdı. RLHF hizalamayı mümkün kıldı.

Şu an neredeyiz? Teknik olarak çok güçlü modeller var. Ama güvenilirlik, yorumlanabilirlik, hizalama hâlâ açık problemler.

Bu yolculuk bitmedi.
:::
