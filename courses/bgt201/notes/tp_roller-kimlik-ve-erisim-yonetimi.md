---
title: "Roller, Kimlik ve Erişim Yönetimi"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: today
execute:
  echo: false
---

::: {.callout-warning}
## Taslak Çalışma Notu
Bu doküman BGT 201 Bilgi Güvenliği Yönetimi I dersi için resmî izlence ve kaynak analizi temel alınarak hazırlanmış ilk çalışma taslağıdır. Haftalık pedagojik revizyonlarla olgunlaştırılmaya devam edecektir.
Ana İzlence: [[crs-bgt201|Ders İzlence Merkezi]]
:::

## Roller, Kimlik ve Erişim Yönetimi

> Hangi rol, hangi varlık üzerinde, hangi iş gereğiyle ve hangi izinlere sahip olmalıdır?

::: {.notes}
- Öğrenci kayıtlarını ve personel işlemlerini yöneten kurgusal kurumu hatırlayalım. Herkes sistemde işlem yapıyor ancak farklı işleri var.
- Varlık envanteri ile hangi bilgilerin bulunduğunu sınıflandırdık. Şimdi bu varlıklara kimin nasıl erişeceğini kurala bağlamalıyız.
- Başlangıçtaki soru cevaplanmazsa yetkiler gelişigüzel dağıtılır. Görev değişikliklerinde sistem kontrol edilemez hale gelir. 
- Erişim yönetimi bu kararı kişisel tercihlerden çıkarıp iş sürecinin bir parçası yapar.
:::

---

## Bir Erişim Kararının Adımları

Sisteme giriş yapabilmek bütün soruları cevaplamaz.

1. **Kimlik saptama (Identification)**
2. **Kimlik doğrulama (Authentication)**
3. **Yetkilendirme (Authorization)**
4. **Hesap verebilirlik (Accountability)**

::: {.notes}
- Erişim süreci, bir kullanıcının login olmasından çok daha fazlasıdır.
- Dört adımın her biri farklı bir işi yerine getirir ve zincirin bir halkası eksikse sistemin genel güvenliği değişir.
:::

---

## 1. Kimlik Saptama ve 2. Doğrulama

**Kimlik Saptama:** "Kim olduğunu iddia ediyorsun?"
- Sicil numarası, benzersiz kullanıcı adı.
- *Paylaşılan hesaplar kişiye özgülüğü bozar.*

**Kimlik Doğrulama:** "Bu iddiayı nasıl kanıtlıyorsun?"
- Bilinen (Parola)
- Sahip olunan (Cihaz/Uygulama)
- Biyometrik (Fiziksel özellik)

::: {.notes}
- Kimlik saptama iddianın kendisidir. Ortak kullanılan bir "ogrenci_kayit" hesabı sisteme kimliği tanıtır ama işlemi kimin yaptığını gizler.
- Doğrulama ise iddianın kanıtıdır. Çok faktörlü doğrulama (MFA) farklı türden en az iki kanıtı kullanarak tekil zafiyetleri önler.
- Önemli sınır: Kimliğin doğrulanmış olması, her varlığa erişim hakkı kazandırmaz.
:::

---

## 3. Yetkilendirme

"Hangi varlıkta ne yapabilirsin?"

**doğrulanmış kullanıcı → iş rolü → varlık → izin verilen eylem**

- Okuma ≠ Değiştirme ≠ Silme ≠ Onaylama
- Rol = Unvan değil, **görev ve sorumluluk**

::: {.notes}
- Yetkilendirme, doğrulanmış kullanıcının sınırlarını çizer.
- Kayıt memuru başvuruyu güncelleyebilir ama onay vermesi veya silmesi gerekmeyebilir.
- İzin, "bu çalışan güvenilir" hissine değil, açık ve belgelenebilir iş ihtiyacına dayanmalıdır.
:::

---

## 4. Hesap Verebilirlik

"Eylem kime bağlanabiliyor?"

**kimlik iddiası → doğrulama → yetki kararı → eylemin kimliğe bağlanması**

- Ortak hesaplar sorumluluk zincirini kırar.
- Eylemlerin güvenilir kayıtlarla eşleştirilmesi gerekir.

::: {.notes}
- Kimlikler paylaşılıyorsa, sistemde eylemin kaydı tutulsa bile işlemi gerçekten kimin yaptığı kanıtlanamaz.
- Güçlü bir şifreleme yanlış verilmiş yetkiyi düzeltmez; aynı şekilde doğru yetkilendirme de ortak hesap kullanımının yarattığı belirsizliği çözemez. Adımlar birlikte çalışmalıdır.
:::

---

## Sorumluluk Ayrımı

Kuralı koyan, uygulayan ve kullanan aynı rol değildir:

- **Varlık Sahibi:** Değeri belirler, kuralı ve iş gerekçesini onaylar.
- **Sistem Yöneticisi:** Onaylanmış kuralı teknik olarak sisteme uygular.
- **Son Kullanıcı:** Verilen erişimi görevi kapsamında kullanır, kimliğini korur.

::: {.notes}
- Erişim yönetiminde görevler ayrılmalıdır.
- Kuralı uygulayan sistem yöneticisi, kimin neye erişmesi gerektiğine (iş gerekçesine) tek başına karar vermez.
- Bu ayrım, erişim talebi, onay ve uygulamanın birbirine karışmasını önleyen bir kontrol noktasıdır.
:::

---

## Mantıksal ve Fiziksel Erişim

- **Mantıksal Erişim:** Dijital klasör, veri tabanı, uygulama.
- **Fiziksel Erişim:** Çalışma odası, basılı belge, arşiv, sunucu.

> Soru aynıdır: Görevi gereği kim, hangi varlığa, hangi eylem için ulaşabilmelidir?

::: {.notes}
- İki erişim türü birbirinin yerine geçmez, birbirini tamamlar.
- Dijital ortamda erişimi kısıtlanmış "Gizli" sağlık raporları, fiziksel bir dolapta kilitsiz duruyorsa varlık güvende değildir.
- Tam tersi, kilitli odadaki bir bilgisayarda herkesçe bilinen ortak şifre kullanılıyorsa fiziksel sınır, mantıksal erişim sorununu çözemez.
:::

---

## Erişim Kontrol Modelleri

| Model | Kararın Dayanağı | Kurum Vakasındaki Soru |
|---|---|---|
| **DAC** | Varlık sahibinin kararı | Varlık sahibi bunu kiminle paylaşabilir? |
| **MAC** | Merkezi kural | Etiket ile erişim düzeyi eşleşiyor mu? |
| **RBAC** | İş rolü | Rolün görevi bu işlemi gerektiriyor mu? |

::: {.notes}
- Erişim kontrol modelleri, izin kararını farklı bir mantığa bağlar.
- DAC (İsteğe Bağlı) işbirliğini kolaylaştırır ama tutarsızlık yaratabilir.
- MAC (Zorunlu) kesin kurallar koyar, etiketler ve erişim seviyelerine dayanır.
- RBAC (Rol Temelli) doğrudan kişilere izin vermek yerine kişileri rollere atayarak yönetim yükünü çok azaltır. Ancak rolün yetkilerinin doğru tasarlanmasını kendiliğinden garanti etmez.
:::

---

## Rol–Varlık–İzin Matrisi

İş ihtiyacı ile erişim kuralı arasındaki taslaktır:

1. **Varlık:** Sınıflandırması nedir?
2. **Rol:** Hangi iş rolü kullanıyor?
3. **İzin:** Hangi eylemler görev için gerekli/gereksiz?

- *“Erişim yok” da bir karardır.*
- *Tam yetki yerine belirginleştirilmiş izinler yazılır (Okuma, Onaylama).*

::: {.notes}
- Matris bir yazılım ayarı değil, kararların alındığı planlama aşamasıdır.
- Roller görevine uygun izinler almalıdır. Sağlık görevlisi sağlık raporunu okurken, kayıt memurunun buna iş gereği erişimi olmamalıdır ("Erişim yok").
- Amaç olabildiğince çok izin vermek değil; her izni görev üzerinden açıklayabilmek ve gereksiz erişimleri engellemektir.
- Böylece kimlik ve yetki, kurumun varlıklarını koruyan izlenebilir bir erişim sürecine dönüşür.
:::
