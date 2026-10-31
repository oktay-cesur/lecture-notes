---
title: "Genel Özet: Araştırma Sorusu ve Veri Yapısı"
subtitle: "PSİ 303 — Sınav Tekrar Notu (Hafta 1–3)"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-29
description: "Evren ve örneklem, veri tablosu, ölçme düzeyleri, veri sözlüğü ve veriyi analize hazırlama başlıklarının sınav öncesi tekrar için derlenmiş özeti."
sidebar: psi303
execute:
  echo: false
---

# Genel Özet: Araştırma Sorusu ve Veri Yapısı

::: {.callout-tip}
## Sesli özet

Bu notun konularını [Ses 1 — Veri yapısı](https://drive.google.com/drive/folders/1HdJgyzj0fEquA3zM7CFzQd9tWKgfDBVG?usp=sharing){target="_blank"} (yaklaşık 23 dk) anlatır.

Sesli özetler yapay zekâ ile üretilmiştir ve bu notun yerine geçmez; fark olduğunda yazılı not esastır. Dosyalar Drive klasöründe `psi303-ses-…` adlarıyla durur ve tarayıcıda dinlenebilir.
:::

Bu not, bu bölümdeki beş konu notunun tekrar için toplanmış özetidir. Her başlıkta önce **ne olduğu**, sonra **neden önemli olduğu**, ardından küçük bir örnek verilir. Ayrıntılı anlatım, görseller ve animasyonlar için başlıkların sonundaki konu notlarına dönün.

::: {.callout-tip}
## Bölümün tek cümlelik özeti

Bir sayıyı yorumlamadan önce üç soru sorulur: **Bu sayı kimin hakkında?** (evren/örneklem) · **Tablodaki her satır ve sütun neyi anlatıyor?** (gözlem birimi, değişken) · **Bu sütunla hangi hesap anlamlı?** (ölçme düzeyi). Ardından cevaplar veri sözlüğüne yazılır ve veri temizlenir.
:::

## 1. Evren, örneklem ve çıkarım

*Ayrıntı: [Kimin hakkında konuşuyoruz?](tp_evren-orneklem-ve-cikarim.md)*

| Kavram | Ne demek? | Örnek |
|---|---|---|
| **Hedef evren** | Hakkında konuşmak istediğimiz bütün grup | Bir üniversitenin 400 psikoloji öğrencisi |
| **Örneklem** | Evrenden gerçekten veri topladığımız parça | Ankete yanıt veren 120 öğrenci |
| **Parametre** | Evrene ait gerçek değer (çoğu zaman bilinmez) | Bütün öğrencilerin ortalama uyku süresi |
| **İstatistik** | Örneklemden hesaplanan değer | 120 öğrencinin ortalama uyku süresi |
| **Tam sayım** | Evrenin hepsinin ölçülmesi | 400 öğrencinin tamamı yanıtlarsa |

- **Betimsel istatistik:** Elimizdeki veriyi anlatır ("bu 120 kişide ortalama 6,8 saat").
- **Çıkarımsal istatistik:** Elimizdekinin ötesine, evrene geçer ("bölümün tamamında ortalama ne olabilir?"). Bir iddia hangi evrene genelleniyorsa o evrenden seçilmiş örnekleme dayanmalıdır.
- Her sonucun bir **öznesi** vardır: sayı örnekleme mi, evrene mi aittir? Bunu bilmeden yorum yapılmaz.

### Örneklem neden evreni yanıltabilir?

İki ayrı sorun vardır; karıştırılmaz:

| | **Kimler seçildi?** | **Kaç kişi seçildi?** |
|---|---|---|
| Sorun | **Yanlılık** (seçim sistematik olarak evreni yansıtmıyor) | **Örnekleme değişkenliği** (rastgele seçsek de sonuç her örneklemde biraz oynar) |
| Örnek | Spor salonu üyelerine sorup "Türk gençleri" hakkında konuşmak | Aynı bölümden başka 120 kişi seçince farklı ortalama bulmak |
| Çare | **Rastgele seçim** (her birimin seçilme şansı bilinir/eşit) | Daha büyük örneklem (oynama azalır) |
| Büyük *n* düzeltir mi? | **Hayır.** Yanlı seçimle 10.000 kişi de yanlıdır | Evet, oynama *n* arttıkça küçülür |

::: {.callout-note}
## Sık yapılan hata

"Çok kişiye ulaştık, o hâlde temsil edici." Kalabalık, seçimin nasıl yapıldığını telafi etmez. Gönüllü yanıtlayanlar (kendi kendini seçen grup) evreni yansıtmayabilir: ankete yanıt verme isteği, ölçülen konuyla ilişkiliyse sonuç sapar.
:::

## 2. Veri tablosu

*Ayrıntı: [Veri tablosu: Satır, sütun, değişken](tp_veri-tablosu-ve-gozlem-birimi.md)*

- **Satır = gözlem birimi.** Kişi olabilir; seans, okul ya da gün de olabilir.
- **Sütun = çoğunlukla bir değişken.** Hücre = bir satırın o değişkendeki değeri.
- **Kod (kimlik) sütunu** satırı tanımlar; analiz edilmez (ortalaması anlamsızdır).
- **Herkes aynı değeri taşıyorsa** (örneğin hepsi 18 yaşında) o sütun karşılaştırmada işe yaramaz; sonucun genellenebileceği alanı daraltır.

### Satır sayısı katılımcı sayısı değildir

Aynı kişi üç kez ölçülüp **uzun biçimde** yazılırsa 80 kişi 240 satır eder. **Geniş biçimde** ise bir kişi tek satırdır, ölçümler yan yana sütunlardır:

| kod | kaygi_t1 | kaygi_t2 | kaygi_t3 |
|---|---:|---:|---:|
| K01 | 32 | 27 | 24 |
| K02 | 28 | 26 | 25 |

Satır sayısını yorumlamadan önce **gözlem biriminin ne olduğuna** bakılır. Eşleştirilmiş t-testi gibi analizler jamovi'de geniş biçim ister.

### Değişken türleri

```
Değişken
├── Kategorik: grup bildirir (cinsiyet, terapi türü, bölüm)
└── Nicel: miktar bildirir
    ├── Kesikli: sayılır (kardeş sayısı, hata sayısı)
    └── Sürekli: ölçülür, iki değer arasında başka değer olabilir (boy, tepki süresi)
```

::: {.callout-note}
## Sık yapılan hata

**Sütunda sayı görmek, değişkenin nicel olduğu anlamına gelmez.** Terapi türü 1, 2, 3 diye kodlanmışsa hâlâ kategoriktir. Aynı kavram farklı ölçülürse farklı tür doğar: kaygı "düşük/orta/yüksek" yazılırsa kategorik (sıralı), 0–100 puanla ölçülürse nicel.
:::

## 3. Ölçme düzeyleri

*Ayrıntı: [Ölçme düzeyleri: Hangi hesap anlamlı?](tp_olcme-duzeyleri.md)*

**Ölçme düzeyi**, bir değişkenle hangi hesapların anlamlı olduğunu belirler. Düzeyi sütundaki sayılar değil, **ölçüm biçimi** belirler. Düzeyler bilgiyi basamak basamak artırır; her düzey bir öncekinin yapabildiklerini de yapar.

| Düzey | Sayı ne bilgi taşır? | Anlamlı özetler | Örnek | jamovi / SPSS |
|---|---|---|---|---|
| **Nominal** | Yalnızca ad / kategori | Mod, frekans, yüzde | Forma no, terapi türü, bölüm | Nominal |
| **Sıralı** | Ad + sıra (aralıklar eşit olmayabilir) | + Medyan | Eğitim düzeyi, tek Likert maddesi | Ordinal |
| **Aralık** | + Eşit aralıklı fark; sıfır keyfî | + Ortalama, SD | Sıcaklık (°C), çoğu ölçek puanı | Continuous / Scale |
| **Oran** | + Gerçek sıfır ("hiç yok") | + "Kaç kat" oranı | Boy, yaş, tepki süresi, gelir | Continuous / Scale |

**Hangi hesap hangi düzeyde?** Basketbol takımı örneği: forma numaralarının ortalaması (15,4) hesaplanır ama kimseyi anlatmaz; boyların ortalaması (200 cm) gerçek bir bilgidir. İkisi de aritmetik olarak doğrudur; fark sayıların neyi temsil ettiğindedir.

### Üç tuzak

1. **"İki kat" tuzağı.** 20 °C, 10 °C'nin "iki katı sıcak" değildir; sıfır keyfîdir (aralık düzeyi). Oran yorumu yalnız gerçek sıfırı olan değişkenlerde yapılır. Aynı mantıkla kaygı puanı 30 olan grup, 15 olandan "iki kat kaygılı" demek değildir; doğru cümle "15 puan yüksek"tir.
2. **Likert maddeleri.** Tek madde (1–5 katılım derecesi) **sıralıdır**; medyan ve mod güvenlidir. Birçok maddenin toplanmasıyla oluşan **ölçek puanı** uygulamada **aralık düzeyi** sayılır ve ortalama alınır. Bu kabul yaygındır ama tartışmalıdır; toplam puanda oran kurulmaz.
3. **Bilgi kaybı.** Yaş "18–24, 25–34, 35–44, 45+" gruplarıyla toplanmışsa artık sıralıdır; ortalama yaş hesaplanamaz. Veriyi toplarken ayrıntı kaybı geri alınamaz.

::: {.callout-note}
## Sık yapılan hata

"Medeni durumu 1–4 kodladım, ortalaması 2,1 çıktı." Nominal veride kodların ortalaması anlamsızdır; doğru özet her kategorinin sayısı ve yüzdesidir (en sık görülen durum mod olarak verilebilir).
:::

## 4. Veri sözlüğü

*Ayrıntı: [Veriyi yazılıma taşımak: Veri sözlüğü](tp_veri-sozlugu.md)*

**Veri sözlüğü**, her değişkenin ne anlama geldiğini kaydeden belgedir. Bir yıl sonra dosyayı açan kişinin (çoğu zaman sizin) her hücreyi doğru okuyabilmesini sağlar. Veri girişi başlamadan hazırlanır ve herkes aynı sözlüğü kullanır.

| Ad | Açıklama | Değerler | Birim | Düzey | Eksik kod |
|---|---|---|---|---|---|
| kod | Katılımcı kimliği | K01, K02, … | — | ID | — |
| cinsiyet | Beyan edilen cinsiyet | 1 = Kadın, 2 = Erkek, 3 = Diğer | — | Nominal | 99 |
| calisma | Bu hafta ders çalışma | 0–80 | saat | Continuous (oran) | 999 |
| kaygi | Sınav kaygısı toplam puanı | 10–50 | puan | Continuous (aralık) | 999 |

### Sözlüğün kuralları

- **Değişken adı** kısa, anlamlı, boşluksuz olur: `calisma`, `kaygi_t1` (kötü örnek: `s1`, `Bu hafta kaç saat çalıştınız`). Soru metni açıklama alanına yazılır.
- **Değer etiketi** kodun anlamını saklar (1 = Kadın). Etiket yoksa kodların anlamı zamanla kaybolur.
- **Eksik kodu** gerçek bir değerle karışmamalı ve yazılımda *eksik* olarak tanımlanmalıdır. 99 ya da 999 gibi olası aralığın dışındaki bir değer seçilir. **Eksik için 0 yazılmaz:** gelirini belirtmeyenlere 0 yazmak, onları geliri olmayanlarla birleştirir ve ortalamayı aşağı çeker.
- **Bir hücrede tek bilgi:** "6 saat" yerine 6 yazılır, birim sözlüğe gider. "20 / kadın" iki ayrı sütun olmalıdır. Ondalık ayırıcı (virgül/nokta) tutarlı olmalıdır.
- **Yazılımdaki yeri:** jamovi'de *Setup* paneli, SPSS'te *Variable View*. Yazılımın otomatik önerdiği tür başlangıçtır; sözlükle doğrulanır. Kodlanmış kategorik bir sütunu *Continuous* bırakmak, yazılımın anlamsız bir ortalamayı hesaplamaya hazır olması demektir.

## 5. Veriyi analize hazırlamak

*Ayrıntı: [Veriyi analize hazırlamak](tp_veriyi-analize-hazirlama.md)*

### Dört durum, dört karar

| Durum | Örnek | Ne yapılır? |
|---|---|---|
| **Eksik** | Çalışma saati boş | Eksik olarak kodlanır; sıfır yazılmaz |
| **Geçerli sıfır** | "Sigara içmiyorum" → 0 | Gerçek bir değerdir; kalır |
| **Olanaksız** | 250 yaş; 1–7 maddede 8 | Kaynağa dön → düzelt → düzeltilemezse eksik yap. **Tahminle doldurulmaz** |
| **Alışılmadık** | 45 yaş; haftada 60 saat çalışma | Nadir ama mümkündür; yalnız alışılmadık diye **silinmez** |

- **Nasıl bulunur?** Her değişkenin en küçük ve en büyük değerine bakılır; sözlükteki aralıkla karşılaştırılır. Kategorik değişkende frekans tablosu kullanılır (üç kategorili değişkende dördüncü bir kod belirmişse hata ya da tanımsız eksik kodudur). Eksik kodu 99 olan yaş sütununda en büyük değerin 99 çıkması, kodun eksik olarak tanımlanmadığını gösterir.
- **Ham veri korunur.** Her değişiklik kaydedilir: hangi satır, hangi değişken, eski değer, yeni değer, gerekçe.

### Ölçek puanı üretmek

1. **Ters puanlama:** Olumsuz ifade edilmiş maddeler, ölçeğin yönüyle aynı doğrultuya çevrilir.

   $$\text{ters puan} = (\text{en küçük} + \text{en büyük}) - \text{ham puan}$$

   1–5 maddede 6 − ham; 1–7 maddede 8 − ham; 0–4 maddede 4 − ham. Çevirdikten sonra yeni sütunun en küçük ve en büyük değerine bakılır; 1–7 maddede 6 − ham kullanılmışsa 7 → −1 çıkar ve hata hemen görünür.
2. **Toplam ya da ortalama puan** yeni değişken olarak türetilir ve sözlüğe işlenir. Ortalama puan madde ölçeğinin aralığında kalır (1–5), bu yüzden doğrudan okunur; toplam puan madde sayısına bağlıdır. Hangisinin kullanılacağını ölçeğin yönergesi söyler. Boş bırakılan madde sıfır sayılmaz, eksik kalır.
3. Yeni değişkenler orijinal sütunların üstüne yazılmaz.

### Gözlem seçme ve dosya birleştirme

- **Gözlem seçme (filtre)** satırları silmez, analizin dışında bırakır: jamovi *Data → Filters*; SPSS *Select Cases → Filter out unselected cases*. SPSS'te *Delete unselected cases* seçilirse satırlar silinir. Seçimden sonra kalan gözlem sayısı kontrol edilir ve raporda belirtilir.
- **Dosya birleştirme:** Aynı kişilerin ölçümleri ayrı dosyalardaysa **kimlik koduyla yan yana** birleştirilir. İkinci dosyada olmayan kişinin hücresi eksik kalır. K3 ile K03 gibi farklı yazımlar iki ayrı kişi sayılır. **Alt alta ekleme** farklı kişilerin satırlarını ekler; aynı kişinin ikinci ölçümünü eklemenin yolu değildir.
- Eksik verinin silme/tamamlama yöntemleriyle ele alınması bu dersin kapsamı dışındadır.

## Çalışma soruları

1. Bir anketin e-posta davetiyesi bölümdeki 400 öğrencinin hepsine gitmiş, 120'si yanıtlamış. Bu 120 kişi bölümü temsil eder mi?
2. Verinizde 240 satır var. "240 katılımcı" diyebilir misiniz?
3. Bir terapi türü sütunu 1, 2, 3 diye kodlanmış. Yazılım bu sütunu *Continuous* saymış. Sorun nedir, çözüm nedir?
4. "Gelir" sorusunu yanıtlamayanlara 0 yazılmış. Ortalama gelire etkisi ne olur?
5. 1–7 arası bir ölçekte ters madde "6 − ham puan" ile çevrilmiş. Hatayı nasıl yakalarsınız?
6. Yaş sütununda en büyük değer 250. Ne yaparsınız? Peki 62 çıksaydı (izin verilen aralık 17–60)?
7. "Grup A'nın kaygı puanı ortalaması 30, B'ninki 15; A iki kat daha kaygılı." Bu cümle neye dayanıyor?

::: {.callout-note collapse="true" title="Cevaplar"}
1. Garanti edilemez. Yanıt vermek gönüllüdür; yanıtlayanlar kendi kendini seçmiştir. Sonuç, yanıtlayan 120 kişi için söylenebilir; bölüm için söylemek yanıt vermeyenlerin benzer olduğu varsayımını gerektirir.
2. Hayır. Gözlem birimi öğrenilmeden olmaz; herkes üç kez ölçülüp uzun biçimde yazılmışsa 240 satır 80 kişidir.
3. Yazılım kodların ortalamasını hesaplamaya hazır olur ("ortalama terapi türü 2,1" anlamsızdır). Düzey *Nominal* yapılır; özet olarak her türün sayısı ve yüzdesi alınır.
4. Cevap vermeyenler geliri olmayanlarla aynı gruba girer ve ortalama gelir aşağı çekilir. Boş cevap eksik kodlanmalıdır.
5. Yeni sütunun en küçük ve en büyük değerine bakılır: 6 − ham ile 7 → −1 ve 1 → 5 çıkar; olması gereken aralık 1–7'dir. Doğru formül 8 − ham puandır.
6. 250 olanaksızdır: kaynağa dön, düzelt, düzeltilemezse eksik yap; tahminle doldurma. 62 yalnızca aralık dışındadır, olanaksız değildir; kaynağa bakılmadan hatalı denmez, gerçekse veride kalır.
7. Kaygı puanının oran düzeyinde olduğu (0 = hiç kaygı yok, eşit aralıklı) varsayımına. Ölçek puanları için savunulamaz; doğru cümle "A grubunun ortalaması 15 puan yüksek"tir.
:::
