---
title: "Bulanık Mantık"
subtitle: BİM444 — Hafta 13
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-04-27
execute:
  echo: false
---

## Bulanık Mantık

---

## Klasik Mantık: Siyah ve Beyaz

- Klasik mantıkta her önerme ya doğru (1) ya yanlış (0)
- "Hava sıcak mı?" → Evet / Hayır
- Ama gerçek dünya bu kadar net değil

**Peki 22°C sıcak mı?**

::: {.notes}
Bu derste farklı bir yapay zeka paradigmasına geçiyoruz. Son haftalarda makine öğrenmesi ve derin öğrenme gördük — bunlar veriden öğrenen sistemlerdi. Bulanık mantık ise bilgiyi temsil etmenin farklı bir yolu.

Klasik mantıkta her şey ikili: doğru ya da yanlış, 0 ya da 1. Bir kapı açık ya da kapalı. Bir sayı çift ya da tek.

Ama insan dili böyle çalışmıyor. "Hava sıcak" dediğimizde ne kastediyoruz? 30°C sıcak mı, 20°C? 22°C "biraz sıcak" mı, "serin" mi, "ilık" mı? Bu soru keskin bir sınır gerektirmiyor — bir dereceli üyelik gerektiriyor. Bulanık mantık tam olarak bunu yapıyor.
:::

---

## Bulanık Küme: Derece ile Üyelik

**Klasik küme:** ya içinde ya dışında

**Bulanık küme:** 0 ile 1 arasında üyelik derecesi

| Sıcaklık | "Sıcak" kümesine üyelik |
|---|---|
| 15°C | 0.0 |
| 20°C | 0.2 |
| 25°C | 0.6 |
| 30°C | 0.9 |
| 35°C | 1.0 |

::: {.notes}
Bulanık küme klasik kümenin genellemesi.

Klasik kümede bir eleman ya içinde (1) ya dışında (0). "Sıcak" kümesi: 30°C üzerindekiler içinde, geri kalanlar dışında. Ama 29.9°C dışarıda, 30.1°C içeride demek doğal değil.

Bulanık kümede her eleman 0 ile 1 arasında bir üyelik derecesiyle temsil ediliyor. 25°C "sıcak" kümesine 0.6 derecesiyle üye — yani "biraz sıcak." 35°C tam üye, 15°C hiç üye değil.

Bu temsil insan dilindeki belirsizliğe çok daha uygun. "Genç", "uzun", "hızlı" gibi kavramlar doğal olarak bulanık.
:::

---

## Üyelik Fonksiyonu

**Bir değerin bulanık kümedeki üyeliğini tanımlar**

- Üçgen: basit, yaygın kullanım
- Trapezoid: düz üst, gradüel geçiş
- Gaussian: yumuşak, doğal görünüm

**Örnek:** "Genç" üyelik fonksiyonu
- 0-20 yaş: üyelik = 1.0
- 20-35 yaş: giderek azalıyor
- 35+ yaş: üyelik = 0.0

::: {.notes}
Üyelik fonksiyonu bulanık kümeyi matematiksel olarak tanımlıyor: her girdi değeri için bir üyelik derecesi döndürüyor.

Üçgen fonksiyon en basiti: bir tepe noktası ve iki dik kenar. Trapezoid düz bir tepe bölgesi içeriyor — "tam üye" aralığı var. Gaussian ise en yumuşak geçişi sağlıyor, Gauss bell eğrisinin şekline sahip.

"Genç" kavramını üçgen fonksiyonla temsil edersek: 20 yaşa kadar tam üyelik, 20-35 arası azalarak 0'a iniyor. Bu seçim uzman bilgisiyle yapılıyor — "genç" kimi kastettiğimiz alana ve bağlama göre değişiyor.

Fonksiyonun şeklini ve sınırlarını belirlemek, bulanık mantık sisteminin tasarım kararlarından biri. Bu kararlar sistemi bilir kişiler tarafından verilir — ya da veriden öğrenilir.
:::

---

## Bulanık Çıkarım Sistemi

**Üç adım:**

1. **Bulanıklaştırma (Fuzzification):** kesin girdi → üyelik dereceleri
2. **Kural tabanı:** EĞER ... İSE ... kurallarını uygula
3. **Durulama (Defuzzification):** bulanık çıktı → kesin değer

**Örnek kural:**
> EĞER hava "sıcak" VE nem "yüksek" İSE fan hızı "çok yüksek"

::: {.notes}
Bulanık çıkarım sistemi üç aşamadan oluşuyor.

Bulanıklaştırma: gelen kesin değerleri — 28°C, %70 nem — tanımlı üyelik fonksiyonları üzerinden üyelik derecelerine dönüştürüyor. "28°C, sıcak kümesine 0.8 derecesiyle üye."

Kural tabanı: uzman bilgisi kurallar halinde kodlanmış. EĞER-İSE formatında. Her kuralın ateşlenme gücü, öncül koşulların üyelik derecelerine göre hesaplanıyor. Birden fazla kural aynı anda ateşlenebilir.

Durulama: bulanık çıktıları tek bir kesin değere dönüştürüyor. En yaygın yöntem ağırlık merkezi: her aktif kuralın çıktısını, ateşlenme gücüyle ağırlıklı ortalamasını alarak birleştir.

Tüm süreç: kesin girdi → bulanık temsil → kural uygulaması → bulanık çıktı → kesin çıktı.
:::

---

## Neden Bulanık Mantık?

**Avantajlar:**
- Uzman bilgisini doğal dille kodlama
- Veri gerekmez — kurallar yeterli
- Yorumlanabilir: hangi kural neden ateşlendi görülebilir
- Belirsiz girdilerle çalışabilir

**Kullanım alanları:**
- Çamaşır makinesi, buzdolabı, klima kontrolü
- Otomotiv: ABS, otomatik vites
- Endüstriyel kontrol sistemleri
- Tıbbi karar destek

::: {.notes}
Bulanık mantık neden hâlâ kullanılıyor? Makine öğrenmesi varken?

Birinci neden: veri gerektirmiyor. Eğer uzman bilginiz varsa — "sıcaklık yüksekse ve nem fazlaysa fan hızlı çalışsın" — bunu doğrudan kural olarak kodlayabilirsiniz. Binlerce etiketli örneğe ihtiyacınız yok.

İkinci neden: yorumlanabilirlik. Hangi kuralın ne zaman ateşlendiğini görebiliyorsunuz. Bir karar neden verildi sorusuna cevap verebiliyorsunuz. ML modellerinde bu çok zor.

Üçüncü neden: güvenilirlik ve tahmin edilebilirlik. Kontrol sistemlerinde, özellikle güvenlik kritik uygulamalarda, sistemin nasıl davranacağını önceden analiz edebilmek önemli.

Çamaşır makinenizin sensörleri kıyafet ağırlığını, kirlilik seviyesini ölçüyor; bulanık mantık kurallara göre yıkama süresini ve su miktarını ayarlıyor. Japon mühendisler 1980-90'larda bu teknolojiyi ev elektroniğine yaygınlaştırdı.
:::

---

## Makine Öğrenmesiyle Karşılaştırma

| | Bulanık Mantık | Makine Öğrenmesi |
|---|---|---|
| Bilgi kaynağı | Uzman kuralları | Veriden öğrenme |
| Veri ihtiyacı | Az / yok | Çok |
| Yorumlanabilirlik | Yüksek | Düşük |
| Esneklik | Kural tabanıyla sınırlı | Veri kadar esnek |
| Kullanım | Kontrol sistemleri | Sınıflandırma, tahmin |

**Not:** İkisi rakip değil — birlikte kullanılabiliyor (neuro-fuzzy sistemler)

::: {.notes}
Bu karşılaştırma önemli çünkü "hangisini kullanmalıyım?" sorusu pratik bir soru.

Elinizde çok veri varsa ve yorumlanabilirlik kritik değilse: makine öğrenmesi. Uzman bilgisi varsa, veri kıtsa ve kararların açıklanabilir olması gerekiyorsa: bulanık mantık.

İkisi birbiriyle rekabet etmek zorunda değil. Neuro-fuzzy sistemler: bulanık mantığın yorumlanabilir yapısını sinir ağlarının öğrenme kapasitesiyle birleştiriyor. Kurallar başta uzman tarafından konuluyor, sonra veriyle ince ayar yapılıyor.

ANFIS — Adaptive Neuro-Fuzzy Inference System — bu birleştirmenin en bilinen örneği. Hem yorumlanabilirlik hem öğrenme kapasitesi sağlıyor.
:::

---

## Özet

- Klasik mantık: 0 ya da 1 · Bulanık mantık: 0 ile 1 arası derece
- Üyelik fonksiyonu: bir değerin kümedeki üyeliğini tanımlar
- Bulanık çıkarım: bulanıklaştır → kural uygula → durula
- Avantaj: uzman bilgisini kodla, veri gerekmez, yorumlanabilir
- Kullanım: kontrol sistemleri, ev elektroniği, endüstriyel otomasyon
- ML ile birlikte: neuro-fuzzy — yorumlanabilirlik + öğrenme

::: {.notes}
Bulanık mantık yapay zekanın daha az konuşulan ama oldukça pratik bir alanı.

Derin öğrenmenin parlaması bulanık mantığı gölgede bıraktı ama silmedi. Hâlâ gömülü sistemlerde, kontrol mühendisliğinde, yorumlanabilirliğin kritik olduğu alanlarda tercih ediliyor.

Gelecek hafta son konumuz: genetik algoritmalar. Bu da veriden değil, evrim sürecinden ilham alan bir arama ve optimizasyon yöntemi.
:::
