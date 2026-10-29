---
title: "Veriyi Yazılıma Taşımak: Veri Sözlüğü"
subtitle: "PSİ 303 — Davranışsal İstatistik için Yazılım Uygulamaları"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-19
description: Veri sözlüğünün bileşenleri; değişken adları, değer etiketleri, ölçme düzeyi ve eksik değer kodları; jamovi'de ve SPSS'te değişken tanımlama; sık yapılan veri girişi hataları.
execute:
  echo: false
---

## Bir yıl sonra açılan dosya

| id | s1 | s2 | s3 | s4 |
|---:|---:|---:|---:|---:|
| 1 | 2 | 21 | 1 | 999 |
| 2 | 1 | 19 | 3 | 14 |
| 3 | 2 | 99 | 2 | 22 |

- s1 sütunundaki 1 ve 2 ne demek?
- s3'teki 3, 1'den "fazla" mı?
- 99 ve 999 gerçek değerler mi?

::: {.notes}
Bu tabloyu bir yıl önce siz girdiniz. O gün her şey çok açıktı. Bugün bunların hiçbiri dosyada yazmıyor.

Bu dosyayla şimdi analiz yaparsanız yazılım s3'ün ortalamasını hesaplamaya, 99'u ve 999'u gerçek değer saymaya hazırdır. Hatanın hiçbir uyarısı çıkmaz; yalnızca sonuçlar yanlış olur. Çözüm, sayıların anlamını dosyanın kendisine kaydetmektir: veri sözlüğü.
:::

---

## Veri sözlüğü nedir?

> **Veri sözlüğü:** Veri dosyasındaki her değişkenin ne olduğunu, hangi değerleri alabileceğini ve bu değerlerin ne anlama geldiğini kaydeden tanım listesi.

Her değişken için en az:

| Alan | Soru |
|---|---|
| Ad | Dosyada sütunun adı ne? |
| Açıklama | Hangi soru, hangi ölçüm? |
| Değerler ve etiketler | Hangi değerleri alabilir, kodlar ne demek? |
| Ölçme düzeyi | Nominal, sıralı, aralık, oran? |
| Birim | Saat mi, dakika mı, puan mı? |
| Eksik değer | Eksik bilgi nasıl kaydedildi? |

::: {.notes}
Veri sözlüğü, veri dosyasının kullanım kılavuzudur. Her değişken için adını, neyi ölçtüğünü, alabileceği değerleri, kodların anlamını, ölçme düzeyini, birimini ve eksik bilginin nasıl kaydedildiğini yazar.

Bu bilgilerin bir kısmı doğrudan yazılımın içine (değişken tanımlarına) girilir, bir kısmı ayrı bir belgede tutulur. İkisi de aynı amaca hizmet eder: dosyayı açan herkesin, aradan geçen zaman ya da kişi değişse bile, her hücreyi aynı biçimde okuyabilmesi.
:::

---

## Veri sözlüğü: kimlik ve demografi

| Ad | Açıklama | Değerler | Birim | Düzey (jamovi) | Eksik |
|---|---|---|---|---|---|
| kod | Katılımcı kimliği | K01, K02, … | — | ID | — |
| cinsiyet | Beyan edilen cinsiyet | 1 = Kadın, 2 = Erkek, 3 = Diğer/Belirtmek istemiyor | — | Nominal | 99 |
| yas | Yaş | 17–60 | yıl | Continuous (oran) | 99 |



::: {.notes}
Önceki slayttaki dosya bu sözlükle birlikte açıldığında her şey yerine oturur: s1 cinsiyetmiş, 2 erkek demekmiş; s3 yurt binasıymış ve 3, 1'den fazla bir şey değil, başka bir binaymış; 99 ve 999 ise eksik bilgiymiş. Düzey sütunu jamovi adlarını kullanır: aralık ve oran için Continuous, kimlik sütunu için ID yazılır.
:::

---

## Veri sözlüğü: yurt, çalışma ve kaygı

| Ad | Açıklama | Değerler | Birim | Düzey (jamovi) | Eksik |
|---|---|---|---|---|---|
| yurt | Kalınan yurt binası | 1 = A blok, 2 = B blok, 3 = C blok | — | Nominal | 99 |
| calisma | Bu hafta ders çalışma | 0–80 | saat | Continuous (oran) | 999 |
| kaygi | Sınav kaygısı ölçeği toplam puanı | 10–50 | puan | Continuous (aralık) | 999 |

> Eksik kodu, olası aralığın dışında ve gerçek değer sanılmayacak kadar uçta seçilir.

::: {.notes}
Eksik kodlarına dikkat edin. Ölçüt iki parçalıdır: kod değişkenin olası aralığının dışında olmalı ve gözle bakınca gerçek bir değer sanılmayacak kadar uçta durmalı. Üst sınırı belli olmayan değişkenlerde (tepki süresi, gelir) bu ölçüt işlemez, çünkü 999 ms gerçek bir yanıt olabilir; orada olamayacak bir değer (−99) ya da boş hücre seçilir. Yaşı 99 olan bir öğrenci beklemiyoruz, o yüzden yaş için 99 uygundur. Çalışma saati için 99 aralık dışıdır (0–80) ama dikkatsiz bir göze makul görünebilir; o yüzden orada 999 seçilmiş. Kaygı ölçeği 10–50 aralığında olduğu için 99 da, 999 da açıkça ölçek dışıdır; sözlükte tutarlı olması için 999 yazılmıştır.
:::

---

## Değişken adları

| Kötü | Neden? | Daha iyi |
|---|---|---|
| s1, s2, s3 | Anlamı yok | cinsiyet, yas, yurt |
| Bu hafta kaç saat çalıştınız | Uzun, boşluklu | calisma |
| kaygı puanı (son) | Boşluk ve parantez | kaygi_son |
| v1 | Hangi ölçüm? | kaygi_t1 |

Kısa, anlamlı, boşluksuz; Türkçe karakter ve özel işaretten kaçınmak dosyanın başka programlarda sorunsuz açılmasını sağlar.

::: {.notes}
Değişken adı, sütunun kimliğidir; analiz çıktılarında, grafiklerde ve formüllerde bu adı göreceksiniz. Adın kendisi ne olduğunu anlatırsa sözlüğe her seferinde bakmak gerekmez.

Uzun soru metinlerini ad olarak kullanmak yerine kısa bir ad seçip soru metnini açıklama alanına yazmak daha düzenlidir. Boşluk, parantez ve bazı özel karakterler, dosya başka bir programa aktarıldığında ya da formüllerde kullanıldığında sorun çıkarabilir. jamovi ve SPSS Türkçe karakterli adları genellikle kabul eder; ama dosyanın bir CSV olarak başka bir ortama taşınacağını düşünerek ASCII harflerle yazmak güvenli bir alışkanlıktır.
:::

---

## Değer etiketleri: kodun anlamı

Cinsiyet, iki araştırma asistanının ayrı ayrı girdiği iki dosyada:

| Dosya A | | Dosya B | |
|---|---|---|---|
| 1 | Kadın | 1 | Erkek |
| 2 | Erkek | 2 | Kadın |

İki dosya etiketlere bakılmadan birleştirilirse ne olur?

::: {.notes}
Kategorik değişkenleri sayıyla kodlamak veri girişini hızlandırır; ama kodların anlamı yalnızca etiketlerde yaşar. İki araştırma asistanı farklı kodlarla veri girip dosyaları birleştirdiğinde, B dosyasındaki bütün kadınlar erkek, erkekler kadın olarak sayılır.

Sayılarla görelim. Her dosyada 10 kadın ve 10 erkek olsun; kadınların kaygı ortalaması 30, erkeklerin 20 olsun. Birleştirilmiş dosyada 1 kodlu grup A'nın kadınları ile B'nin erkeklerinden oluşur, ortalaması 25 çıkar; 2 kodlu grup da 25 çıkar. 10 puanlık gerçek fark yok olur.

Yazılım uyarı vermez: iki sütun da 1 ve 2'lerden oluşur, yazılım farkı göremez. Önlemi basittir: kodları ve etiketlerini veri girişinden önce sözlükte sabitlemek, herkesin aynı sözlükle çalışmasını sağlamak ve etiketleri yazılımın değişken tanımına da işlemek.
:::

---

## Eksik değer: boş mu, kod mu?

Altı katılımcının kaygı puanı; biri cevap vermemiş ve **999** yazılmış:

20 · 25 · 30 · **999** · 22 · 28

| | Ortalama |
|---|---:|
| 999 gerçek değer sanılırsa | 1124 / 6 ≈ **187,3** |
| 999 eksik olarak tanımlanırsa | 125 / 5 = **25,0** |

::: {.notes}
Tek bir eksik kod, yazılıma eksik olduğu söylenmezse ortalamayı 25'ten 187'ye taşır. Yazılım için sütundaki her sayı bir ölçümdür; 999'un ölçek dışı olduğunu ancak biz ona söyleyebiliriz.

Eksik bilgiyi kaydetmenin iki yolu vardır: hücreyi boş bırakmak ya da özel bir kod yazmak. Boş bırakmak basittir ve yazılımlar sayısal bir sütunda boş hücreyi kendiliğinden eksik sayar. Kod kullanmak ise eksikliğin nedenini ayırt etmeye izin verir: "soruyu atladı" ile "bu soru kendisine sorulmadı" farklı durumlardır ve farklı kodlarla kaydedilebilir. Kod kullanıyorsanız, o kodu yazılımda eksik değer olarak tanımlamak zorunludur. Kod ile boş hücreyi aynı dosyada karışık kullanmaktan kaçının.
:::

---

## Bir sütunda tek bilgi

| Sorunlu giriş | Sorun | Doğrusu |
|---|---|---|
| "6 saat" | Sayı metne dönüştü | 6 (birim sözlükte) |
| "20 / kadın" | İki değişken tek sütunda | yas = 20, cinsiyet = 1 |
| "yaklaşık 5" | Sayı değil | 5 (ya da eksik + not) |
| 6,5 ile 6.5 karışık | Ondalık ayırıcı tutarsız | Tek biçim |

::: {.notes}
Yazılım bir sütunda tek bir harf ya da işaret gördüğünde o sütunun tamamını metin olarak okuyabilir; bu durumda ortalama gibi hesaplar yapılamaz ya da sütun yanlış türde tanınır. Birimi hücreye yazmak yerine sözlüğe yazmak, her hücrede yalnızca sayının kalmasını sağlar.

İki bilgiyi aynı hücreye yazmak, bu bilgilerin ayrı ayrı analiz edilmesini engeller; her bilgi kendi sütununu almalıdır. Ondalık ayırıcı ise Türkçe kullanımda virgül, pek çok yazılımda ve CSV dosyasında nokta olabilir. Veriyi içe aktardıktan sonra sayısal sütunların sayı olarak tanındığını kontrol etmek bu yüzden ilk iştir.
:::

---

## jamovi'de değişken tanımlamak

Her sütun için **Setup** panelinde:

- **Ad** ve **açıklama**
- **Ölçme düzeyi:** Nominal · Ordinal · Continuous · ID
- **Veri türü:** Integer · Decimal · Text
- **Düzeyler (levels):** kodlara etiket verme
- **Eksik değerler:** örneğin `== 99`

::: {.callout-note title="Görsel yer tutucu: jamovi Setup paneli"}
**Tür:** açıklamalı ekran görüntüsü · **Gösterdiği:** jamovi'de "cinsiyet" değişkeninin Setup paneli; ölçme düzeyi Nominal seçili, 1/2/3 kodlarının etiketleri girilmiş, eksik değer alanında `== 99` · **Öğrencinin görmesi gereken:** Sözlükteki her satırın yazılımda nereye girildiği.
:::

::: {.notes}
jamovi'de bir sütunun başlığına çift tıklandığında Setup paneli açılır. Burada değişkenin adı ve açıklaması, ölçme düzeyi ve veri türü seçilir. Kategorik değişkenlerde düzeyler listesinde her koda bir etiket verilebilir; böylece tablolarda ve grafiklerde 1 ve 2 yerine "Kadın" ve "Erkek" görünür. Kimlik sütunu için "ID" türü seçilir; jamovi bu sütunu analizlerde kullanmaz.

Eksik değer alanına yazılan kural, örneğin `== 99`, o değeri taşıyan hücrelerin bütün analizlerde eksik sayılmasını sağlar. Kod kullanıyorsanız bu adımı atlamak, önceki slayttaki 187,3'lük yanlış ortalamaya giden yoldur.
:::

---

## SPSS'te aynı tanımlar

**Variable View** ekranında her satır bir değişken:

| SPSS sütunu | Sözlükteki karşılığı |
|---|---|
| Name | Ad |
| Label | Açıklama |
| Values | Değer etiketleri |
| Missing | Eksik değer kodları |
| Measure | Ölçme düzeyi (Nominal, Ordinal, Scale) |

::: {.callout-note title="Görsel yer tutucu: SPSS Variable View"}
**Tür:** ekran görüntüsü · **Gösterdiği:** Sözlük örneğindeki altı değişkenin SPSS Variable View'da tanımlanmış hâli; Values penceresi cinsiyet için açık · **Öğrencinin görmesi gereken:** Aynı sözlüğün iki yazılımda aynı alanlara karşılık geldiği.
:::

::: {.notes}
SPSS'te veri iki görünümde tutulur: Data View'da tablonun kendisi, Variable View'da her değişkenin tanımı. Variable View'un her satırı bir değişkendir ve sütunları veri sözlüğünün alanlarına birebir karşılık gelir. Values hücresi kod etiketlerini, Missing hücresi eksik kodlarını, Measure hücresi ölçme düzeyini tutar.

Birim için iki yazılımda da ayrı bir alan yoktur; açıklamaya yazılır ya da sözlük belgesinde kalır. Bu dersin uygulamalarında jamovi'yi ana araç olarak kullanacağız; SPSS'te aynı adımların karşılığını bu tablo üzerinden bulabilirsiniz.
:::

---

## Tekrarlı ölçümleri adlandırmak

Ortak kök + zaman eki: `kaygi_t1`, `kaygi_t2`, `kaygi_t3`

Sözlükte: t1 = başlangıç · t2 = 4. hafta · t3 = 8. hafta

::: {.notes}
`kaygi_t1` ve `kaygi_t2` ortak kök sayesinde aynı ölçümün sütunları olarak bulunur. Ama `t2` adından bunun 4. hafta olduğu anlaşılmaz; zaman eşlemesini sözlükte saklamak, dosyayı sonradan açan kişinin ölçümleri doğru sıraya koymasını sağlar.
:::

---

## Uygulama: kısa bir anket

İkinci notta kurduğumuz dört soruluk anketin (yaş, kardeş sayısı, çalışma saati, hazır mı) altı katılımcısını jamovi'ye girin. Bölüm sütunu herkeste aynı olduğu için girmeyin.

1. Her soru için bir değişken adı seçin, açıklamasını yazın.
2. "Hazır mı?" değişkenini 1/2 ile kodlayıp etiketleyin.
3. Ölçme düzeylerini ayarlayın; kimlik (kod) sütununu ID olarak tanımlayın.
4. K04'ün çalışma saatini bilinmiyor kabul edin, 999 girin ve eksik olarak tanımlayın.
5. Çalışma saati ortalamasını (Analyses → Exploration → Descriptives) 999 tanımlanmadan ve tanımlandıktan sonra karşılaştırın.

::: {.notes}
Bu uygulamanın amacı, sözlüğün yazılımdaki karşılığını elinizle kurmaktır. jamovi'yi açıp tabloya hücre hücre yazabilirsiniz; bir sütunun tanımı için başlığa çift tıklamak yeter. Son adımda iki ortalamayı karşılaştırdığınızda, eksik değer tanımının sonuçları ne kadar değiştirebileceğini kendi dosyanızda görmüş olacaksınız.

Altı kişinin çalışma saatleri 6,5, 2, 9, 4, 7,5 ve 3'tü. K04'ün 4 saati yerine 999 girildiğinde toplam 1027 olur. 999 tanımlanmadan ortalama 1027/6 ≈ 171,2 çıkar; eksik olarak tanımlanınca kalan beş değerin toplamı 28'dir ve ortalama 28/5 = 5,6 olur. Yazılımdan aynı iki sayıyı görürseniz sözlüğün yazılımdaki karşılığını doğru kurdunuz demektir.
:::

---

## Karar soruları

1. Bir anketin "gelir" sorusunu yanıtlamayanlar için 0 girilmiş. Neden sorunlu?
2. Bir araştırmacı terapi türünü 1–3 diye kodlamış ama değişkeni jamovi'de "Continuous" bırakmış. Yazılım bu sütun için ne hesaplamaya hazır olur ve bu neden yanıltır?
3. Aynı veri dosyası üzerinde üç kişi çalışacak. Veri girişine başlamadan önce yapılacak ilk iş ne olmalı?

::: {.notes}
1. Sıfır, gelir için gerçek ve mümkün bir değerdir: geliri olmayan biri de 0 yazabilir. Cevap vermeyenlere 0 yazmak, onları geliri olmayanlarla aynı gruba koyar ve ortalama geliri aşağı çeker. Eksik bilgi, gerçek bir değerle karışmayacak biçimde kaydedilmelidir.
2. Kodların ortalamasını hesaplamaya hazır olur; "ortalama terapi türü 2,1" gibi bir sayı çıkar ve anlamsızdır. Kategorik bir değişken için beklenen özet, her türün sayısı ve yüzdesidir; düzey Nominal yapılınca yazılım da bunu sunar.
3. Ortak bir veri sözlüğü hazırlamak: değişken adları, kodlar ve etiketler, eksik değer kodları ve birimler giriş başlamadan sabitlenmeli ve herkes aynı sözlüğü kullanmalıdır.
:::

---

## Bu nottan kalanlar

- **Veri sözlüğü**, her değişkenin adını, anlamını, değerlerini, düzeyini, birimini ve eksik kodunu kaydeder.
- **Değer etiketleri** olmadan kodların anlamı kaybolur; farklı kodlamalar sessizce birleşir.
- **Eksik kodu** gerçek bir değerle karışmamalı ve yazılımda eksik olarak tanımlanmalıdır.
- Bir hücrede tek bilgi; birim sözlükte, sayı hücrede.
- jamovi'de Setup paneli, SPSS'te Variable View sözlüğün yazılımdaki yeridir.

**Bu notta ele alınmayanlar:** Eksik verinin analizde nasıl ele alınacağı (silme, tamamlama yöntemleri) bu dersin kapsamı dışındadır.

**Sıradaki konu:** Dosya şimdi kuruldu. İçindeki değerler doğru mu?

::: {.notes}
Veri sözlüğü hazırlamak zaman alıcı görünür; ama bir analizin bütün sonuçları bu tanımların doğruluğuna dayanır. İyi bir sözlük, bir yıl sonra dosyayı açan kişiye (çoğu zaman bu kişi sizsiniz) her hücreyi doğru okuma imkânı verir.

Sıradaki notta dosyanın içine bakacağız: olanaksız değerler, unutulmuş eksik kodlar ve ters puanlanması gereken maddeler. Kısacası, ham veriyi analize hazır hâle getirmek.
:::
