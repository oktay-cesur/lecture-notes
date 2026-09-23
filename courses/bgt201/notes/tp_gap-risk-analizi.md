---
title: "Gap ve Risk Analizi"
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

## Gap ve Risk Analizi

Kurumun güvenlik politikaları ile gerçek durumu arasındaki bağı kurmak.

::: {.notes}
Kurumun güvenlik politikalarını yazdık, varlıklarımızı listeledik. Peki şimdi ne olacak? Kâğıt üzerindeki hedeflerimizle kurumun gerçekte yaşadıkları her zaman örtüşmez. Bu noktada, "Neredeyiz?" ve "Nereye varmak istiyoruz?" sorularını sormamız gerekir. Bu sunumda güvenliği soyut bir kavram olmaktan çıkarıp, "Hangi varlık, hangi tehdide karşı korunmalı?" sorusunu merkeze alan belgelenebilir ve yönetilebilir bir sürece dönüştürmeyi konuşacağız.
:::

---

## Gap (Fark) Analizi Nedir?

*   **Olması Gereken (Hedef):** Kurumun politikaları veya standartları.
*   **Olan (Mevcut Durum):** Sahadaki gerçek uygulamalar ve kanıtlar.
*   **Gap:** İkisi arasındaki boşluğun tespit edilmesi.

::: {.notes}
Bir kurumda siber güvenlik önlemlerinin ne kadar yeterli olduğunu anlamanın en pratik yolu budur. Gap analizi, bir ISO sertifikasyon denetimi veya kurumu cezalandırmak için yapılan bir dış teftiş değildir. Aksine, kurumun kendi eksiklerini proaktif bir şekilde, olay yaşanmadan önce tespit edip düzeltmesi için yaptığı bir iç gözden geçirmedir.
:::

---

## Kavramsal Temelleri Hatırlayalım

Güvenlik olayları boşlukta gerçekleşmez, her zaman hedefleri vardır.

*   **Varlık (Asset):** Korunması gereken değer.
*   **Zafiyet (Vulnerability):** Sistem veya süreçteki zayıflık (açıklık).
*   **Tehdit (Threat):** Zafiyeti kullanarak varlığa zarar verebilecek unsur.
*   **Sonuç:** Tehdit zafiyeti kullanırsa CIA (Gizlilik, Bütünlük, Erişilebilirlik) ihlali oluşur → iş etkisine (itibar kaybı, yasal ceza, operasyon durması) dönüşür.

::: {.notes}
Risk analizine geçmeden önce bu temel bileşenleri ve aralarındaki ilişkiyi hatırlamak kritik. Bir tehdit zafiyeti kullandığında, kurumun gizlilik, bütünlük veya erişilebilirlik (CIA) üçgeninde bir ihlal gerçekleşir. Bu ihlal sadece teknik bir sorun olarak kalmaz; doğrudan itibar kaybı, yasal cezalar veya operasyon durması gibi iş etkilerine dönüşür.
:::

---

## Risk Analizi Süreci

Karmaşık formüllerden ziyade sistematik bir tanımlama ve karar destek aracıdır.

1.  **Tanımlama:** Neyi koruyoruz ve ne olabilir? (Varlık envanteri üzerinden senaryolar)
2.  **Nitel Değerlendirme:** Olasılık ve etkinin derecelendirilmesi.

::: {.notes}
Kurumun varlık envanterinden yola çıkarak olası senaryolar üretiriz. Sonrasında nitel değerlendirme ile her riskin olasılığını ve etkisini matris üzerinde belirleriz. Amacımız kesin finansal değerler (SLE/ARO/ALE) uydurmak değil, riski yönetim için anlamlı, Düşük/Orta/Yüksek gibi eylem kategorilerine ayırmaktır.
:::

---

## Olasılık ve Etki Matrisi

*[Görsel: Renklendirilmiş (Kırmızı/Sarı/Yeşil) basit bir 3x3 veya 5x5 Olasılık ve Etki Matrisi]*

*   **Kabul Edilebilir Bölge** (Yeşil)
*   **Dikkat Edilmeli** (Sarı)
*   **Acil Müdahale** (Kırmızı)

::: {.notes}
Matris, binlerce liralık hesaplardan ziyade yöneticilerin kolayca okuyabileceği bir eylem haritası sunar. Matrisin temel amacı "Hangi sorunlara acil müdahale edilmeli?" sorusunu görselleştirerek karar süreçlerini hızlandırmaktır.
:::

---

## Değerlendirme Nasıl Yapılır?

*   Grup çalışmaları
*   Beyin fırtınaları
*   Departman anketleri

::: {.notes}
Risk ve Gap analizi tek bir kişinin masa başında yapacağı bir iş değildir. Sürecin içine ilgili departmanları katmak şarttır. Önemli olan nokta, tüm bu değerlendirmelerin belgelenebilir bir kayda dönüşmesidir; çünkü konuşulanlar yazılmadıkça yönetilemez.
:::

---

## Kayıt ve Belgeleme (Mekanizma)

*   Analiz süreçlerinin en önemli çıktısı **kayıt formlarıdır.**
*   Kurumun mevcut risk profilini ortaya çıkarır.
*   "Risk İşleme" adımının doğrudan girdisini oluşturur.

::: {.notes}
Öğrenci kayıtları ve personel belgelerini yöneten kurgusal bir kurum üzerinden bu mekanizmayı ve kayıt formlarının yapısını inceleyelim.
:::

---

## Gap Kaydı Mantığı

**Yapı:** `hedef kontrol | mevcut kanıt | gap | sorumlu | aksiyon`

*   **Hedef:** Sisteme erişim izinleri düzenli gözden geçirilmeli.
*   **Kanıt:** Sadece işe girişte yetki veriliyor, kontrol edilmiyor.
*   **Gap:** Periyodik gözden geçirme süreci eksik — işten ayrılan veya görev değiştirenlerin yetkileri kalmaya devam ediyor.
*   **Aksiyon:** 6 ayda bir yetki kontrolü prosedürü oluşturulacak.

::: {.notes}
Gap kaydında olması gereken ile mevcut durum karşılaştırılarak bir eksiklik (gap) tanımlandı ve İnsan Kaynakları ile IT'nin sorumlu olacağı düzeltici bir eylem (aksiyon) planlandı. Bu sayede eksiklik havada kalmayıp bir iş planına dönüşür.
:::

---

## Risk Kaydı Mantığı

**Yapı:** `açıklama | etki | olasılık | azaltma (ön kontrol) | sorumlu | tarih`

*   **Açıklama:** Ortak ağdaki Excel personel listesine herkesin erişimi (Gizlilik ihlali potansiyeli).
*   **Etki:** Yüksek — personel özlük bilgilerinin açığa çıkması bir **Gizlilik (Confidentiality)** ihlalidir.
*   **Olasılık:** Yüksek — ağ klasörüne kurum içindeki herkes erişebiliyor.
*   **Azaltma:** Klasör yetkileri ilgili departmana sınırlandırılacak.

::: {.notes}
Burada ise varlık, tehdit ve zafiyet ilişkisi (açıklama) kurularak riske bir etki-olasılık skoru biçildi. Ardından önleyici kontrol belirlenerek sorumlusuna (IT Ağ Yöneticisine) atandı. Bu kayıtlar, risk işleme aşamasının temel referanslarıdır.
:::
