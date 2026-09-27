---
title: "Erişim Kontrolleri: Parola, Kayıt ve İzleme"
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

## Erişim Kontrolleri: Parola, Kayıt ve İzleme

::: {.notes}
Daha önceki adımlarda kurumumuzdaki rolleri belirledik ve kimin hangi varlığa erişebileceğini bir matris ile kayıt altına aldık.
Ancak izin kararları tek başına hataları, yetki aşımlarını veya kasıtlı suistimalleri engelleyemez. Yetki kararı eyleme dönüştüğü andan itibaren hesap verebilirlik (accountability) devreye girmelidir.
:::

---

## Parola Politikası: Yönetsel Bir Kontrol

- Parolalar teknik bir kilit değil, **yönetsel bir karardır**.
- Politikaların içeriği:
  - Kuralları kim belirler?
  - Çalışanlara nasıl tebliğ edilir?
  - İhlal durumunda süreç nasıl işler?

::: {.notes}
Genellikle parolaları teknik bir "kilit" veya aşılması gereken bir bariyer olarak düşünürüz.
Ancak, parolaların değiştirilme sıklığı, karmaşıklığı gibi kurallar doğrudan teknik sistemlerin değil, politikaların konusudur.
Örneğin, "Şifreler karmaşık olmalıdır" kuralı yerine, "Bu kuralı kim belirler ve sistem yöneticileri bunu teknik tarafta nasıl uygular?" sorusu bilgi güvenliği yönetiminin temelidir. Parola politikası, erişim kontrolünün yönetsel bir yansımasıdır.
:::

---

## Kayıt (Log) ve İzleme

- "Yetkilendirilmiş kullanıcı sistemde ne yaptı?"
- Erişim eylemlerinin kayıt altına alınması.
- Log kayıtlarının yanıtlaması gereken temel sorular:
  - **Kim?**
  - **Ne zaman?**
  - **Hangi veriye** erişti / değişiklik yaptı?

::: {.notes}
Yetkilendirilmiş bir kullanıcının sistemde ne yaptığını bilmek için kayıt (log) mekanizmaları devreye girer.
Başarılı ve başarısız giriş denemeleri, veri değişiklikleri veya silme işlemleri izlenmelidir.
Basit ama en kritik sorular: kim, ne zaman, hangi veriye dokundu?
:::

---

## Örnek Vaka: Personel Özlük Dosyaları

- İK Uzmanı yetkilendirilmişti.
- Peki İK uzmanı sisteme **ne zaman** girdi?
- Mesai dışı veya tatil günlerinde kritik dosya indirildi mi?
- Başarısız denemeler (saldırı riski)
- Olağandışı saatlerdeki girişler (iç tehdit riski)

::: {.notes}
Ortak kurum vakamızda personel özlük dosyalarına sadece İK uzmanının erişebileceğini kararlaştırmıştık.
Ancak bu yetki, izlenmediği anlamına gelmez. İK uzmanının mesai saatleri dışında veya tatil günlerinde dosya indirmesi olağandışı bir durum olabilir.
Başarısız denemeler dışarıdan bir saldırıyı gösterirken, yetkili hesabın olağandışı saatlerde kullanımı içerideki bir suistimale (iç tehdide) işaret edebilir.
:::

---

## Gözden Geçirme ve Denetim Kanıtı

- Loglar raflarda tozlanmak için değil, **incelenmek** içindir.
- Belirli aralıklarla gözden geçirme (Review):
  - Roller devam ediyor mu?
  - Şüpheli/anormal erişim paterni var mı?
- **Denetim Kanıtı (Audit Trail)**: Sürecin belgelenmesi, güvence.

::: {.notes}
Sistemlerin log verisi üretmesi yetmez, bunların incelenmesi gerekir.
Belirli aralıklarla yetkiler ve loglar yöneticiler tarafından gözden geçirilmelidir. İK uzmanı hala aynı görevde mi? Loglarda anormallik var mı?
İnceleme sonucu atılan tarih ve imza, denetim kanıtını oluşturur. Bu kanıt yönetime ve denetçilere sistemin planlandığı gibi çalıştığının güvencesini verir.
:::

---

## Vaka Dosyasına Eklenecek Çıktılar

Kurgusal kurumumuz için tasarlanacak gereksinimler:

1. **Kayıt Gereksinimi Tablosu** (Hedef, Rol, Kayıt Tipi, Saklama Süresi)
2. **Gözden Geçirme Sorumlusu** atanması
3. **Denetim Kanıtı Taslağı** (Onay tutanağı şablonu)

::: {.notes}
Bu aşamada sizden kurgusal kurumunuz için bu mekanizmaları tasarlamanızı bekliyoruz.
Kritik süreçler için kayıt gereksinimi tablosunu oluşturun.
Bu kayıtları ve yetkileri kimin inceleyeceğini (gözden geçirme sorumlusu) belirleyin.
Son olarak da yapılan log incelemelerinin belgeleneceği bir onay tutanağı şablonu hazırlayın.
:::
