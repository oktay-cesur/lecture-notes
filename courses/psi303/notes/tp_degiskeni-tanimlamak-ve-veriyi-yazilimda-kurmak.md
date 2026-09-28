---
title: "Değişkeni Tanımlamak ve Veriyi Gerçek Yazılımda Kurmak"
subtitle: "PSİ 303 — Davranışsal İstatistik için Yazılım Uygulamaları"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-09-23
description: Kimlik/değer, veri türü/ölçüm düzeyi, bağımsız/eşleştirilmiş gözlem ve eksik-hatalı kayıt ayrımı; jamovi/SPSS'te veri sözlüğüne dayalı değişken tanımlama uygulaması.
tags:
  - psi303
  - veri-yapisi
  - hafta-2
---

## Geçen haftanın tablosu: bir satırı tam cümleyle okuyalım

| katilimci_kodu | uyku_saati | bolum | uyku_kalitesi |
|---|---:|---|---|
| K01 | 5 | psikoloji | kötü |
| K02 | 6 | psikoloji | orta |
| K03 | 6 | diğer | iyi |
| K04 | 7 | psikoloji | orta |

K03 satırı şu cümledir: "K03 kodlu gözlem biriminin, ara sınavdan önceki gece bildirdiği uyku süresi 6 saattir; bölümü diğer, uyku kalitesi iyidir."

::: {.notes}
Uygulamada jamovi ana yol olarak kullanılabilir; IBM SPSS Variable View eşdeğer bir yoldur. İkisini aynı anda kullanmak zorunlu değildir.

Bir satırı kişi, zaman ve ölçüm bağını kurarak sözlü biçimde okuyabilmek, yazılıma geçmeden önceki koşuldur. Aynı 6 değerinin K02 ve K03'te bulunması bu iki kişiyi tek gözlem yapmaz; kimlik ve ölçüm ayrımı burada işlev kazanır.
:::

---

## Bir sütun neyi saklıyor, neyi ölçüyor?

- `katilimci_kodu`: **kimlik/ID**; kayıtları eşlemek ve eksik satırı bulmak için kullanılır, sayısal büyüklük değildir.
- `uyku_saati`: **ölçüm değeri**; oran ölçeğinde süre.
- `bolum`: **kategori**; nominal.
- `uyku_kalitesi`: **sıralı kategori**; ordinal.

K01, K02, K03 kodlarını ortalamak anlamsızdır; ama K01–K04'ün tamamının bulunup bulunmadığını kontrol etmek anlamlıdır.

::: {.notes}
"Kimlik üzerinde istatistik hesaplanmaz" ifadesi dar ve doğru anlamıyla geçerlidir: ID ortalama alınacak bir ölçüm değildir, fakat kayıt eşleme ve satır sayısı denetiminde önemlidir. K01 etiketi A17 ile değiştirilip uyku değeri sabit bırakılırsa, kimlik kodunun büyüklük gibi davranmadığı bu karşı örnekle görülür.
:::

---

## Veri türü ile ölçüm düzeyi aynı karar değildir

**Veri türü**, yazılımın değeri nasıl sakladığını belirtir: tam sayı, ondalık sayı veya metin gibi.

**Ölçüm düzeyi**, değerin araştırma sorusunda ne anlam taşıdığını belirtir: nominal, ordinal, aralık veya oran.

| Değişken | Saklama biçimi | Kavramsal ölçüm düzeyi | Yazılımda olası rol |
|---|---|---|---|
| `katilimci_kodu` | metin/tam sayı | ölçüm düzeyi değil, kimlik | jamovi ID / SPSS nominal ama analiz dışı |
| `bolum` | metin veya kod | nominal | Nominal |
| `uyku_kalitesi` | metin veya kod | ordinal | Ordinal |
| `uyku_saati` | ondalık sayı | oran | jamovi Continuous / SPSS Scale |

::: {.notes}
jamovi interval ve ratioyu Continuous altında, SPSS Scale altında birleştirir; bu, dersin kavramsal aralık–oran ayrımını kaldırmaz. Öğrenci sözlüğünde ayrımı gerekçelendirmelidir. Yazılımın otomatik önerisi başlangıçtır, doğrulama değildir.
:::

---

## Nominal, ordinal, aralık, oran: hangi karşılaştırma anlamlı?

- Nominal: aynı/farklı; bölüm kodlarının büyüklük sırası yoktur.
- Ordinal: sıra vardır; aralıkların eşit olduğu varsayılmaz.
- Aralık: farklar anlamlı, sıfır noktası referans niteliğindedir; "iki kat" yorumu kurulmaz.
- Oran: fark ve oran anlamlı; 8 saat, 4 saatin iki katı süredir.

::: {.notes}
Her satır için sorulması gereken soru şudur: "bu değişkende hangi işlemi yapmak istiyoruz?" Amaç tanımları ezberlemek değil, veri sözlüğündeki kararın sonraki analiz seçimini nasıl sınırladığını görmektir. Test seçimi bu haftanın konusu değildir.
:::

---

## Bağımsız mı, aynı kişiye mi ait?

Sekiz farklı kişinin tek gecelik kaydı bağımsız gözlem düzenidir. Aynı kişiden üç gece ölçüm alınırsa üç satırın ortak kimliği vardır; bunlar eşleştirilmiş/ilişkili gözlemlerdir.

::: {.notes}
"Sekiz kişi × bir gece" ve "sekiz kişi × üç gece" düzenleri karşılaştırıldığında, satırların kimlik bilgisi değiştikçe veri yapısının da değiştiği görülür. Hangi testin seçileceği bu haftanın konusu değildir.
:::

---

## Eksik kayıt mı, kodlama hatası mı?

- Boş hücre: ölçüm alınmamış veya yanıt verilmemiş olabilir.
- `uyku_saati = 25`: olanaksız değer ya da kayıt hatası şüphesi.
- Eksikliği 0 ile doldurmak yeni bir ölçüm uydurur.

Önce işaretle ve kayda geçir; düzeltme/silme kararını gerekçesiz otomatikleştirme.

::: {.notes}
İki hatalı dosya karşılaştırıldığında (birinde K06 boş, diğerinde K06=25), "ikisini de 0 yap" önerisinin hangi yanlış iddiayı ürettiği görülür. Bu haftanın hedefi tanıma ve belgelemedir; ayrıntılı yöntem seçimi bu kapsamın dışındadır.
:::

---

## Veri sözlüğü: yazılım ayarının gerekçesi

| Ad | Etiket/açıklama | Veri türü | Ölçüm | Değer etiketleri | Eksik değer | Aralık |
|---|---|---|---|---|---|---|
| `katilimci_kodu` | Katılımcı kimliği | Metin | ID | — | boş | K01–K08 |
| `bolum` | Bölüm grubu | Metin | Nominal | psikoloji/diğer | boş | iki kategori |
| `uyku_kalitesi` | Öz-bildirim kategorisi | Metin | Ordinal | kötü/orta/iyi | boş | üç düzey |
| `uyku_saati` | Ara sınavdan önceki gece süre | Ondalık | Oran | — | boş | 0–24 |

::: {.notes}
Bu tablo yazılım ekranının kopyası değildir; yazılım ayarının araştırma anlamıyla eşleşip eşleşmediğini denetleyen kayıt belgesidir. Sözlük önce kurulur, yazılımdaki tanımlama ancak ondan sonra yapılır.
:::

---

## Gerçek yazılım uygulaması — 60 dakika

1. **Tanımla (15 dk):** dört değişkeni sözlüğe göre oluştur; ad, açıklama/etiket, veri türü ve ölçüm türünü ayarla.
2. **Etiketle (10 dk):** `bolum` ve `uyku_kalitesi` için kategori etiketlerini tanımla; `katilimci_kodu`nu ID olarak işaretle.
3. **Gir (15 dk):** sekiz satırı yaz; K03=6, K05=8 ve K06=5 eşleşmelerini kaynak tabloyla karşılaştır.
4. **Hata ekle ve denetle (10 dk):** bir hücreyi boş bırak, bir hücreye 25 yaz; hangisinin eksik, hangisinin hatalı olduğunu not et. Otomatik tür önerisini sözlükle karşılaştır.
5. **Kaydet–yeniden aç (10 dk):** dosyayı kapatıp yeniden aç; satır-sütun eşleşmesini, etiketleri, ölçüm türlerini ve eksik değer tanımını kontrol et.

::: {.notes}
jamovi'de sütun başlığına çift tıklayarak veya Data/Setup ile değişken düzenleyiciye gidilebilir. SPSS'te aynı iş Variable View üzerinden yapılır. Sürüm farkına göre menü konumu değişebilir; önemli olan ekran adımı değil, elde edilen üründür: kaydedilmiş veri dosyası, veri sözlüğü ve kısa bir denetim kaydı. En az üç satır eşleşmesi ve dört değişken özelliği kontrol listesinde gösterilmelidir.
:::

---

## Geri kontrol: yazılım doğruyu kendiliğinden bilemez

- Yazılım `uyku_saati`ni metin olarak algılarsa hangi işlemler risk altına girer?
- `bolum` kodlarını 1 ve 2 diye yazmak, bu sayıların aralık ölçeğinde olduğu anlamına gelir mi?
- `katilimci_kodu` yanlışlıkla Continuous olursa sorun nedir?
- Boş hücre ile 25 değerini aynı biçimde işaretlemek neden hatalıdır?
- Kaydedilmiş dosyada K03 satırını kaynak tabloyla nasıl doğrularsın?

::: {.notes}
Dosyaların çapraz kontrolünde bir yanlış ayar seçilip düzeltilir ve "hangi gözlem, hangi değişken, hangi anlam" zinciri tek cümleyle açıklanır. Bu haftanın ürünü veri tanımının ve ham kayıtların denetlenebilir olmasıdır.
:::
