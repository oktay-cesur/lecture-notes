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
Bu hafta 180 dakikadır: 120 dakika kavramsal çalışma, 60 dakika gerçek yazılım uygulaması. Uygulamada jamovi ana yol olarak kullanılabilir; IBM SPSS Variable View eşdeğer bir yoldur. İkisini aynı anda kullanmak zorunlu değildir.

İlk 10 dakikada öğrencilerden bir satırı sözlü olarak okumalarını isteyin. Satırın kişi, zaman ve ölçüm bağını kuramayan öğrenci yazılıma geçmemelidir. Aynı 6 değerinin K02 ve K03'te bulunması bu iki kişiyi tek gözlem yapmaz; kimlik ve ölçüm ayrımı burada işlev kazanır.
:::

---

## Bir sütun neyi saklıyor, neyi ölçüyor?

- `katilimci_kodu`: **kimlik/ID**; kayıtları eşlemek ve eksik satırı bulmak için kullanılır, sayısal büyüklük değildir.
- `uyku_saati`: **ölçüm değeri**; oran ölçeğinde süre.
- `bolum`: **kategori**; nominal.
- `uyku_kalitesi`: **sıralı kategori**; ordinal.

K01, K02, K03 kodlarını ortalamak anlamsızdır; ama K01–K04'ün tamamının bulunup bulunmadığını kontrol etmek anlamlıdır.

::: {.notes}
"Kimlik üzerinde istatistik hesaplanmaz" cümlesini dar ve doğru kullanın: ID ortalama alınacak bir ölçüm değildir, fakat kayıt eşleme ve satır sayısı denetiminde önemlidir. K01 etiketini A17 ile değiştirip uyku değerini sabit bırakma karşı örneğiyle kimlik kodunun büyüklük gibi davranmadığını gösterin.
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
Her satırdan sonra "bu değişkende hangi işlemi yapmak istiyoruz?" diye sorun. Amaç tanımları ezberletmek değil, veri sözlüğündeki kararın sonraki analiz seçimini nasıl sınırladığını görmektir. Test seçimi bu haftanın işi değildir.
:::

---

## Bağımsız mı, aynı kişiye mi ait?

Sekiz farklı kişinin tek gecelik kaydı bağımsız gözlem düzenidir. Aynı kişiden üç gece ölçüm alınırsa üç satırın ortak kimliği vardır; bunlar eşleştirilmiş/ilişkili gözlemlerdir.

::: {.notes}
İki tablo çizdirin: "sekiz kişi × bir gece" ve "sekiz kişi × üç gece". Satırların kimlik bilgisi değişince veri yapısının da değiştiğini belirtin. Hangi testi seçeceğimizi bu hafta söylemeyin.
:::

---

## Eksik kayıt mı, kodlama hatası mı?

- Boş hücre: ölçüm alınmamış veya yanıt verilmemiş olabilir.
- `uyku_saati = 25`: olanaksız değer ya da kayıt hatası şüphesi.
- Eksikliği 0 ile doldurmak yeni bir ölçüm uydurur.

Önce işaretle ve kayda geçir; düzeltme/silme kararını gerekçesiz otomatikleştirme.

::: {.notes}
İki hatalı dosyayı karşılaştırın: birinde K06 boş, diğerinde K06=25. "İkisini de 0 yap" önerisinin hangi yanlış iddiayı ürettiğini sordurun. Bu hafta hedef tanıma ve belgelemedir; ayrıntılı yöntem seçimi ileriki veri yönetimi biriminde işlenecektir.
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
Bu tablo yazılım ekranının kopyası değildir; yazılım ayarının araştırma anlamıyla eşleşip eşleşmediğini denetleyen kayıt belgesidir. Öğrenciler önce sözlüğü kurmalı, sonra yazılımda tanımlamalıdır.
:::

---

## Gerçek yazılım uygulaması — 60 dakika

1. **Tanımla (15 dk):** dört değişkeni sözlüğe göre oluştur; ad, açıklama/etiket, veri türü ve ölçüm türünü ayarla.
2. **Etiketle (10 dk):** `bolum` ve `uyku_kalitesi` için kategori etiketlerini tanımla; `katilimci_kodu`nu ID olarak işaretle.
3. **Gir (15 dk):** sekiz satırı yaz; K03=6, K05=8 ve K06=5 eşleşmelerini kaynak tabloyla karşılaştır.
4. **Hata ekle ve denetle (10 dk):** bir hücreyi boş bırak, bir hücreye 25 yaz; hangisinin eksik, hangisinin hatalı olduğunu not et. Otomatik tür önerisini sözlükle karşılaştır.
5. **Kaydet–yeniden aç (10 dk):** dosyayı kapatıp yeniden aç; satır-sütun eşleşmesini, etiketleri, ölçüm türlerini ve eksik değer tanımını kontrol et.

::: {.notes}
jamovi'de sütun başlığına çift tıklayarak veya Data/Setup ile değişken düzenleyiciye gidilebilir. SPSS'te aynı iş Variable View üzerinden yapılır. Sürüm farkları nedeniyle ekran konumunu ezberletmeyin; beklenen ürün, kaydedilmiş veri dosyası + veri sözlüğü + kısa denetim kaydıdır. En az üç satır eşleşmesini ve dört değişken özelliğini kontrol listesinde gösterin.
:::

---

## Geri kontrol: yazılım doğruyu kendiliğinden bilemez

- Yazılım `uyku_saati`ni metin olarak algılarsa hangi işlemler risk altına girer?
- `bolum` kodlarını 1 ve 2 diye yazmak, bu sayıların aralık ölçeğinde olduğu anlamına gelir mi?
- `katilimci_kodu` yanlışlıkla Continuous olursa sorun nedir?
- Boş hücre ile 25 değerini aynı biçimde işaretlemek neden hatalıdır?
- Kaydedilmiş dosyada K03 satırını kaynak tabloyla nasıl doğrularsın?

::: {.notes}
Son 15 dakikada öğrenciler dosyalarını çapraz kontrol eder. Bir yanlış ayarı seçip düzeltir ve "hangi gözlem, hangi değişken, hangi anlam" zincirini tek cümleyle açıklar. Bu haftanın ürünü veri tanımının ve ham kayıtların denetlenebilir olmasıdır.
:::
