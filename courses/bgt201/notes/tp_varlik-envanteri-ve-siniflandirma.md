---
title: "Varlık Envanteri ve Sınıflandırma"
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

## Varlık Envanteri ve Sınıflandırma

---

## Neyi Koruyoruz?

- Sadece sunucuyu korumak yeterli midir?
- Veriler, süreçler, altyapı, personel ve kurumun itibarı birbirine bağlıdır.
- **Varlık (Asset):** Kurumun amaçları ve işleyişi bakımından değer taşıyan, korunması gereken unsurdur.
- Donanım ve yazılımın ötesinde bilgi, hizmet, destekleyici altyapı ve personel de varlıktır.

::: {.notes}
Kurgusal bir kurum birimini düşünelim. Kayıt sunucusu çökerse hizmet durur; ancak sunucu çalışsa bile kayıt görevlisi olmadığında işlemler yine yapılamaz. Varlık denilince akla ilk donanım gelse de kurum için değer taşıyan unsur yelpazesi çok daha geniştir. Aday başvuru kayıtlarından iş süreçlerine, personelin kurum bilgisinden kurumun itibarına kadar sistemin çalışmasını sağlayan her yapı taşı varlık olarak değerlendirilmelidir. Sınıflandırma etiketlerini ezberlemekten çok, kaybın etkisini görünür kılmak önemlidir.
:::

---

## Varlığı Kim Sahiplenir?

- **Varlık Sahibi:** Varlığın iş amacını ve değerini bilen; kullanım ve koruma gereksinimlerine karar veren rol (Örn: Öğrenci İşleri Yöneticisi).
- **Teknik Sorumlu:** Bakım, yapılandırma ve onaylanan kuralların teknik uygulamasını yürüten rol (Örn: Bilgi İşlem Birimi).

::: {.notes}
Teknik işletim sorumluluğu ile iş kararının sorumluluğu birbirinden ayrılmalıdır. Bir sunucunun bakımını bilgi işlem yapabilir ama içindeki kayıtlara kimin, ne amaçla erişebileceği iş kararıdır; buna bilgi işlem tek başına karar veremez. Sahiplik kavramı, varlığı mülkiyette bulundurmak demek değildir, kararın sahipsiz kalmamasını sağlamaktır. Teknik sorumlu, varlık sahibinin verdiği "kim erişmeli?" kararını sisteme uygular.
:::

---

## Bağımlılık Zincirleri

**Kayıt Hizmeti** → Aday Kayıtları → Uygulama → Sunucu → Altyapı → Personel

- Bir hizmetin sürekliliğini yalnız görünen sistem belirlemez.
- Bağımlılıklar zincirleme etki doğurur.
- Kritik hizmetlerin aksaması, sıradan görünen altyapı varlıklarının önemini artırır.

::: {.notes}
Her varlık birbirini destekler. Ok, mutlak bir bağlılıktan çok incelenmesi gereken bir ilişkiyi işaret eder. Elektrik kesintisi sunucuyu, sunucu uygulamayı, uygulama hizmeti durdurur. Görünen sistem (uygulama) çalışsa bile veri bozulmuşsa veya işlemi yapacak personel yoksa hizmet doğru sonuç üretemez. Bağımlılıkları belgelemenin amacı her kabloyu çizmek değil, risk değerlendirmesi yaparken koruma gereksinimini etkileyen unsurların unutulmasını engellemektir.
:::

---

## Neden Her Şeyi Aynı Korumuyoruz?

- Her kurum verisi veya cihazı aynı değere ve etkiye sahip değildir.
- Her güvenlik önleminin kurulum, kullanım ve yönetim maliyeti vardır.
- **Sınıflandırma:** Varlıkları ortak koruma gereksinimlerine göre gruplama ve kararları gerekçelendirme işidir.
- Değerlendirme ölçütleri: **Gizlilik**, **Bütünlük**, **Erişilebilirlik**

::: {.notes}
Kurum iletişim rehberi ile aday disiplin kayıtlarını aynı şekilde koruyamayız. Rehberi sıkı korumak kullanımını zorlaştırır, disiplin kayıtlarını serbest bırakmak ciddi zararlara yol açar. Mesele, teknik olarak ne yapılabildiği değil, varlığın iş değeri ve zarar görmesi halinde oluşacak etkinin ne olduğudur. Bu değerlendirme Gizlilik, Bütünlük ve Erişilebilirlik etkisi üzerinden yapılır. Bir rehberde gizlilik düşük olabilir ama yanlış yönlendirmeyi engellemek için bütünlük hâlâ önemlidir. "Gizliliği düşük varlık değersizdir" algısına düşülmemelidir.
:::

---

## Sınıflandırmadan Kurala

İş bağlamı → Sahip → CIA Etkisi → **Sınıflandırma Kararı** → İşleme Kuralları → Kayıt ve Onay

- Etiket ("Gizli", "Genel" vb.) değerlendirmenin kendisi değil, kısa ifadesidir.
- Karar; erişim, saklama, iletim ve imha kurallarına dönüşmelidir.
- Sınıflandırma bir kez verilip bırakılamaz; şartlar değiştiğinde yeniden değerlendirilmelidir.

::: {.notes}
Sınıflandırmanın amacı bir tablo hücresini doldurmak değil, varlıkla ilgili işlemlere gerekçe sağlamaktır. Etiketlerin anlamı tanımlanmamışsa herkes kendi kuralını koyar. Sınıflandırma kararı; "Kimler erişim talep edebilir?", "Kayıt nasıl iletilir?" gibi net kurallara dönüşmeli ve teknik sorumlu tarafından uygulanıp izlenmelidir. Sınıflandırma daha gizli olanın her zaman daha değerli olduğunu değil, korumanın kullanım amacıyla uyumlu olması gerektiğini anlatır.
:::

---

## Envanter Cihaz Listesi Değildir

Varlık envanteri; sahiplikleri, iş bağlamlarını, sınıflandırma kararlarını ve işleme kurallarını izleyen **yaşayan bir kayıttır**.

- **Tür:** Kurum işleyişinde ne rol oynuyor?
- **Sahip/Teknik Sorumlu:** Karardan kim sorumlu, kim uyguluyor?
- **Sınıf/Gerekçe:** Hangi CIA etkileri bu kararı doğurdu?
- **Erişim/Saklama:** Kim, nasıl erişebilir ve varlık nerede tutulur?
- **Bağımlılık:** Hangi hizmeti destekliyor?

::: {.notes}
Envanter olmadan kurum neyi koruyacağını, kimin sorumlu olduğunu bilemez. Bu kayıt, risk değerlendirmesinin temel girdisidir; envanterde eksik olan bir varlık risk değerlendirmesinin de dışında kalır. Envanterin doğruluğu satır sayısıyla değil, gerçeği yansıtmasıyla ölçülür. Görevden ayrılan bir sahip hala listedeyse veya kullanım amacı değişen bir verinin sınıfı güncellenmemişse envanter amacını yitirmiş demektir.
:::

---

## Vaka: İş Amacı ve Etki Orantısı

| Ölçüt | İletişim Rehberi | Disiplin Kayıtları |
| :--- | :--- | :--- |
| **Gizlilik** | Geniş erişim amaca uygundur. | Yetkisiz açıklamanın etkisi yüksektir. |
| **Bütünlük** | Yanlış bilgi süreci yavaşlatır. | Hatalı kayıt adaya zarar verir. |
| **İşleme Kuralı** | Okuma açık; değiştirme kısıtlı ve kontrollü. | Okuma/değiştirme yetkiliye özel ve onaylı. |

- Sınıflandırma, koruma kararını iş amacı ve risk ile uyumlu hâle getirir.

::: {.notes}
İki veri varlığını yan yana koyduğumuzda, farklılığın teknik kapasiteden değil amaca hizmetten doğduğunu görüyoruz. İletişim rehberine kısıtlı erişim kuralı uygulamak, onu işlevsizleştirir. Disiplin kaydına gevşek bir kural uygulamak kurumun kabul edemeyeceği bir etki yaratır. Güvenlik, varlığın amaca uygun ve güvenilir biçimde kullanılmasını sağlamak için vardır; sınıflandırma da tam olarak bu orantıyı kurar.
:::
