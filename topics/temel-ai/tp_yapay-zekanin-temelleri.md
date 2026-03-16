---
title: Yapay Zekanın Temelleri
subtitle: BİM444 — Hafta 1
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-02-16
execute:
  echo: false
---

## Dersin Tanımı

- **Amaç:** Problem çözme teknikleri, temel ML yöntemleri
- Teknik bilgiden çok: tarihsel süreç, teorik altyapı
- Dönem boyunca algoritmik hat üzerinde ilerleyeceğiz
- Proje-ödev süreci dersin merkezinde

::: {.notes}
Bu ders yapay zeka kavramını tarihsel ve teorik çerçevede ele alır. Teknik detaylardan önce kavramların neden ve nasıl ortaya çıktığını anlamaya odaklanıyoruz.
:::

---

## Yapay Zekanın Tanım Sorunu

- Yapay zeka nedir?
  - Zeka nedir?
- Epistemolojik temel sorunu
- Çoklu tanım yaklaşımları

::: {.notes}
Yapay zeka günümüzün en revaçta konularından — belki de en revaçta olanı. Teknoloji firmalarının reklamlarından kahvehane sohbetlerine kadar geniş bir alanda karşımıza çıkıyor. Ancak "Yapay zeka nedir?" sorusunu teknik olarak cevaplayabilmek için önce daha temel bir soruya cevap vermek gerekir: Zeka nedir? Günlük yaşamda sezgisel olarak kullandığımız kavramları teknik olarak açıklamak gerektiğinde karşılaşılan genel bir engeldir bu. Terminoloji içinde herkes tarafından kabul gören tek bir tanım yoktur — farklı yaklaşımların farklı tanımları mevcuttur.
:::

---

## İki Temel Eksen

- **Düşünme vs Davranış:** İçsel süreç mi, dışsal çıktı mı?
- **İnsan-merkezli vs Rasyonel:** Kıyaslama noktası hangisi?
- Dört tanım yaklaşımı ortaya çıkar

::: {.notes}
Yapay zeka tanımları iki temel eksen boyunca kategorize edilebilir. İlk eksen, bir sistemin zeki olup olmadığını değerlendirirken neye odaklanacağımızı belirler. Düşünme süreçlerine odaklanan yaklaşım içsel bilişsel mekanizmaları incelerken, davranış odaklı yaklaşım dışarıdan gözlemlenebilir eylemlere bakar. İkinci eksen ise zekanın değerlendirilmesinde hangi standardın kullanılacağını belirler. İnsan-merkezli yaklaşım insan performansını kıyaslama noktası alırken, rasyonel yaklaşım matematiksel olarak tanımlanmış doğru davranışı hedefler. Bu iki eksenin kesişimi dört farklı tanım yaklaşımı üretir.
:::

---

## İnsanca Düşünmek

- Bilişsel bilim perspektifi
- Üç yöntem: İçgözlem, psikolojik deney, beyin görüntüleme
- GPS: Muhakeme adımlarının karşılaştırılması

::: {.notes}
Bilişsel bilim yaklaşımı, Turing Testinin davranışsal odağından farklı olarak, bir programın insan gibi düşünüp düşünmediğine bakar. İnsan düşüncesinin gerçek işleyişini anlamak için üç yöntem vardır: içgözlem, psikolojik deneyler ve beyin görüntüleme. Newell ve Simon tarafından geliştirilen GPS programı, sadece problemleri doğru çözmekle yetinmemiş, muhakeme adımlarının izini insan deneklerin aynı problemleri çözerken oluşturdukları izlerle karşılaştırmıştır. Modern yazarlar iki tür iddiayı ayırmaktadırlar: bir algoritmanın iyi performans gösterdiği iddiası ile bu algoritmanın insan performansının iyi bir modeli olduğu iddiası.
:::

---

## Rasyonellik Kavramı

- Performans ölçütü: Nesnel, dışarıdan tanımlanmış
- Dört kritik unsur: ölçüt, ön bilgi, eylemler, algı dizisi
- Mükemmel rasyonellik vs sınırlı rasyonellik

::: {.notes}
Bir ajanın rasyonel olması, her olası algı dizisi için performans ölçütünü maksimize etmesi beklenen eylemi seçmesi anlamına gelir. Bu tanımda dört kritik unsur bulunur: performans ölçütü, ajanın çevre hakkındaki ön bilgisi, gerçekleştirebileceği eylemler ve o ana kadar edindiği algı dizisi. Mükemmel rasyonellik karmaşık çevrelerde gerçekleştirilemez. Bu nedenle sınırlı rasyonellik kavramı ortaya çıkar. Rasyonelliği omniscience ile karıştırmamak kritiktir.
:::

---

## Ajan Formalizmi: $f: P^* \to A$

$$f: P^* \to A$$

- $P$: Olası algılar kümesi
- $P^*$: Tüm olası algı dizileri (Kleene kapanışı)
- $A$: Olası eylemler kümesi

::: {.notes}
Bir ajanın davranışı matematiksel olarak bir ajan fonksiyonu ile tanımlanabilir. Bu fonksiyon herhangi bir algı dizisini bir eyleme eşler. P yıldız notasyonu sıfır veya daha fazla algıdan oluşan tüm sonlu dizilerin kümesini temsil eder. Gerçek problemlerde bu tabloyu saklamak imkansızdır — yapay zekanın temel zorluğu devasa bir tablo yerine küçük bir programdan rasyonel davranış üretmektir.
:::

---

## Ajan Fonksiyonu vs Ajan Programı

- **Ajan fonksiyonu:** Kavramsal seviye (ne?)
- **Ajan programı:** Uygulama seviyesi (nasıl?)
- Tablonun imkansızlığı ve program ihtiyacı

::: {.notes}
Ajan fonksiyonu soyut bir matematiksel tanımlama iken, ajan programı belirli bir fiziksel mimari üzerinde çalışan gerçek koddur. Bir otomatik taksi için bir saatlik sürüş 10 üzeri 250 milyar girişli bir tabloya karşılık gelir. Evrendeki atom sayısının 10 üzeri 80 olduğu düşünülürse bu tablonun saklanması fiziksel olarak mümkün değildir.
:::

---

## Turing Testi: Metodolojik Tartışma

- Davranışsal tanım: İçsel işleyişten bağımsız
- Pragmatik değerlendirme kriteri
- Altı disiplinin birleşimi gerekir

::: {.notes}
Alan Turing 1950 yılında "Makineler düşünebilir mi?" sorusunu operasyonel bir teste dönüştürmüştür. Testin felsefi önemi zekanın tanımını davranışsal bir düzleme taşımasıdır. Bir bilgisayarın testi geçebilmesi için doğal dil işleme, bilgi temsili, otomatik muhakeme ve makine öğrenimi yeteneklerine sahip olması gerekir. Ancak yapay zeka araştırmacıları zekanın altında yatan ilkeleri çalışmayı, belirli bir örneği taklit etmekten daha önemli görmüşlerdir.
:::

---

## Erken Dönem: McCulloch-Pitts ve Hebb

- McCulloch & Pitts (1943): Yapay nöron modeli
- Evrensel hesaplama kapasitesi
- Hebb (1949): Sinaptik öğrenme kuralı

::: {.notes}
McCulloch ve Pitts üç kaynaktan faydalanmışlardır: nöronların fizyolojisi, önermsel mantık ve Turing'in hesaplama teorisi. Her nöron açık veya kapalı olarak karakterize edilir ve herhangi bir hesaplanabilir fonksiyonun bağlı nöronlardan oluşan bir ağ tarafından hesaplanabileceğini göstermişlerdir. Donald Hebb ise eşzamanlı olarak aktif olan nöronlar arasındaki sinaptik bağlantıların güçlenmesi prensibine dayanan öğrenme kuralını ortaya koymuştur.
:::

---

## Kavramsal Çerçevenin Önemi

- Çoklu yaklaşım: Bilişsel modelleme + mühendislik
- Ajan formalizmi: Birleştirici soyutlama
- Rasyonellik: Normatif temel

::: {.notes}
İnsan-merkezli ve rasyonel yaklaşımlar arasındaki gerilim hem bilişsel modelleme hem de mühendislik hedefli sistem tasarımı için verimli araştırma alanları yaratmıştır. Ajan fonksiyonu formalizmi soyut düzeyde tüm yapay zeka sistemlerinin ortak yapısını yakalar. Modern yapay zeka bu anlayış üzerine inşa edilmiştir: bir ajanın zeki olması için insan gibi olması gerekmez, ancak verilen kaynaklar ve bilgiler ışığında rasyonel davranmalıdır.
:::
