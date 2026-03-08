---
title: A*'ın Garantileri ve Sınırları
subtitle: Admissible, Consistent, Bellek Sorunu ve Heuristic Tasarımı
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-02-23
execute:
  echo: false
---

## A* ile Nerede Kalmıştık?

* A* düğümleri $f(n)=g(n)+h(n)$ ile sıralıyordu
* $g(n)$ geçmişte kat edilen gerçek maliyetti
* $h(n)$ ise hedefe kalan tahmini maliyetti
* Bu sayede Greedy'den daha dengeli seçim yapabiliyordu

::: {.notes}
Bir önceki bölümde A* algoritmasının temel fikrini gördük. Greedy yalnızca hedefe olan tahmine bakarken, A* hem şimdiye kadar kat edilen gerçek maliyeti hem de hedefe kalan tahmini maliyeti birlikte kullanıyordu.

Bu yüzden A* daha dengeli bir seçim yapabiliyordu. Ancak burada önemli bir soru ortaya çıkıyor: Her sezgisel fonksiyonla A* güvenilir çalışır mı? Yani algoritmanın gerçekten en iyi çözümü bulmasını hangi koşullar garanti eder? Bu bölümde bunu inceleyeceğiz.
:::

---

## Peki A* Neden Güvenilir?

* A* yalnızca hızlı olmak için tasarlanmamıştır
* Uygun koşullar altında **optimal çözüm** de bulabilir
* Bunun anahtarı, kullanılan sezgisel fonksiyonun özellikleridir

**Soru:**  
Her $h(n)$ tahmini A* için güvenli midir?

::: {.notes}
Greedy'nin temel problemi, yalnızca hedefe olan tahmine bakmasıydı. A* bunu düzeltti; ama bu tek başına yeterli değildir. Çünkü A*'ın doğru çalışabilmesi, kullandığı sezgisel fonksiyonun nasıl davrandığına bağlıdır.

Eğer sezgisel fonksiyon hedefe kalan maliyeti makul biçimde tahmin ediyorsa A* çok güçlü hale gelir. Ama bu tahmin kötü seçilirse algoritma optimal çözüm garantisini kaybedebilir. Bu yüzden önce sezgisel fonksiyonun hangi koşulları sağlaması gerektiğini görmemiz gerekiyor.
:::

---

## Kabul Edilebilir Sezgisel (Admissible)

Bir sezgisel fonksiyon aşağıdaki koşulu sağlıyorsa **kabul edilebilir** denir:

$$ h(n) \leq h^*(n) $$

* $h(n)$ : tahmini kalan maliyet
* $h^*(n)$ : gerçek en düşük kalan maliyet

Yani sezgisel fonksiyon **asla fazla tahmin yapmaz**.

::: {.notes}
Kabul edilebilirlik fikri aslında daha önce sezdirilmişti. Kuş uçuşu mesafe örneğinde, bu değerin gerçek yol maliyetinden büyük olmadığını söylemiştik. İşte bunun formal hali admissible kavramıdır.

Buradaki temel fikir şudur: Sezgisel fonksiyon hedefe kalan maliyeti olduğundan daha büyük göstermemelidir. Tahmin düşük olabilir, kaba olabilir, eksik olabilir; ama abartmamalıdır. Çünkü fazla tahmin yaparsa bazı umut verici yolları gereğinden erken geri plana iter.
:::

---

## Neden Önemli?

* Eğer $h(n)$ fazla tahmin yaparsa,
  * bazı düğümler olduğundan **daha kötü** görünebilir
  * algoritma optimal çözümü kaçırabilir
* Eğer $h(n)$ admissible ise,
  * A* çözüm yolunu gereksiz yere dışlamaz

::: {.notes}
Burada kritik nokta şu: A* düğümleri $f(n)$ değerine göre seçiyor. Eğer $h(n)$ gerçek maliyeti abartırsa, bu düğümün $f(n)$ değeri de yapay olarak büyür. Böylece aslında iyi olan bir yol kötüymüş gibi görünebilir.

Admissible sezgisel fonksiyon bunu engeller. Algoritma bazı yolları olduğundan daha pahalı sanmaz. Bu da optimal çözümü bulabilmesinin temel koşullarından biridir.
:::

---

## Tree-Search A* ve Optimalite

* Eğer $h(n)$ **admissible** ise
* **tree-search A\*** optimal çözüm bulur

Yani:

* A* ilk bulduğu çözümü değil,
* gerçekten en düşük maliyetli çözümü döndürür

::: {.notes}
Tree-search bağlamında aynı durum birden fazla kez tekrar üretilebilir. Buna rağmen sezgisel fonksiyon admissible ise, A* yanlış bir çözümü optimalmiş gibi kabul etmez.

Buradaki ispatı detaylı vermeyeceğiz; ama sezgisel fonksiyonun fazla tahmin yapmaması sayesinde, optimal yoldaki düğümler frontier içinde yeterince güçlü kalır. Bu da A*'ın daha pahalı bir çözümü erken seçmesini engeller.
:::

---

## Tutarlılık (Consistency)

Bir sezgisel fonksiyon aşağıdaki koşulu sağlıyorsa **tutarlı** denir:

$$h(n) \leq c(n,a,n') + h(n')$$

* Bu, bir tür **üçgen eşitsizliği**dir
* Tahmini mesafe, bir adım gidip devam etme maliyetinden daha büyük olmamalıdır

::: {.notes}
Tutarlılık, admissible kavramından biraz daha güçlü bir koşuldur. Burada yalnızca hedefe olan toplam tahmine değil, komşu düğümler arasındaki ilişkiye de bakılır.

Mantık şu: Bir düğümden hedefe kalan tahmin, komşuya gitmenin maliyeti ile komşudan hedefe kalan tahminin toplamından büyük olmamalıdır. Eğer böyle olursa sezgisel fonksiyon düzensiz davranıyor demektir.
:::

---

## Sezgisel Fonksiyon Düzenli Davranmalı

Tutarlılık sayesinde:

* $f(n)$ değerleri yol boyunca **azalmaz**
* Yani A* arama sırasında daha öngörülebilir davranır
* Aynı düğümü daha iyi maliyetle tekrar tekrar açma ihtiyacı azalır

::: {.notes}
Tutarlılığın önemli sonucu, f değerlerinin yol boyunca dalgalanmasını engellemesidir. Böylece algoritma frontier yönetimini daha düzenli yapar.

Bu özellikle graph-search bağlamında önemlidir. Çünkü aynı duruma birden fazla yoldan ulaşılabildiğinde, tutarlı sezgisel fonksiyon bu durumların ele alınmasını daha güvenli hale getirir.
:::

---

## Graph-Search A* ve Optimalite

| Arama tipi | Yeterli koşul | Sonuç |
|---|---|---|
| Tree-search A* | Admissible | Optimal |
| Graph-search A* | Consistent | Optimal |

* Tutarlı her sezgisel aynı zamanda admissible'dır
* Ama her admissible sezgisel mutlaka tutarlı değildir

::: {.notes}
Bu ayrım önemlidir. Tree-search ve graph-search aynı algoritmanın iki farklı çalışma biçimidir ve aynı garanti koşuluna sahip değildir.

Graph-search'te tekrar durumlar bastırıldığı için sezgisel fonksiyonun daha düzenli davranması gerekir. Bu yüzden graph-search A* için tutarlılık öne çıkar. Ders açısından hatırlanması gereken kısa kural şudur: tree-search için admissible, graph-search için consistent güvenli koşuldur.
:::

---

## Kuş Uçuşu Mesafe Neden İyi Bir Örnek?

* Bir şehirden Ankara'ya kuş uçuşu mesafe
  * gerçek yol maliyetinden küçük veya eşit olur
* Bu yüzden genelde **admissible** bir sezgiseldir
* Ayrıca çoğu durumda üçgen eşitsizliğini de sağladığı için **consistent** davranır

::: {.notes}
Şehirler arası rota probleminde kuş uçuşu mesafe çok doğal bir sezgisel fonksiyondur. Çünkü iki nokta arasındaki gerçek kara yolu genellikle doğrudan çizilen düz çizgiden daha kısa olmaz.

Bu yüzden kuş uçuşu mesafe, hem sezgisel kavramını sezgisel olarak anlamak için uygundur, hem de A*'ın garanti koşullarını anlatmak için iyi bir örnektir.
:::

---

## A*'ın Asıl Problemi

* A* iyi seçim yapar
* Ama bunun bir bedeli vardır:
  * çok sayıda düğüm üretir
  * frontier'ı bellekte tutar

**Sonuç:**  
A* çoğu zaman zamandan önce **bellek sınırına** takılır.

::: {.notes}
A* anlatılırken çoğu zaman optimalite ön planda olur. Ama pratikte asıl sorun çoğu zaman zaman değil, bellek tüketimidir. Çünkü algoritma frontier'daki düğümleri ve çoğu uygulamada ek kayıtları bellekte tutar.

Bu yüzden A* teorik olarak güçlü olsa da büyük problemlerde doğrudan uygulanması zor olabilir.
:::

---

## Zaman ve Bellek Karmaşıklığı

* Zaman: $O(b^d)$
* Yer: $O(b^d)$

Burada:

* $b$ : dallanma faktörü
* $d$ : çözüm derinliği

Yani problem büyüdükçe hem zaman hem bellek **üstel** büyür.

::: {.notes}
Bu ifade ilk bakışta bildiğimiz BFS karmaşıklığına benziyor; çünkü burada da frontier çok büyüyebilir. İyi bir sezgisel pratikte açılan düğüm sayısını ciddi biçimde düşürür, ama en kötü durum analizi yine de üstel kalır.

Dolayısıyla A* çok akıllı bir seçim yapıyor olsa bile, büyük durum uzaylarında bellek maliyeti ciddi bir sınır oluşturmaya devam eder.
:::

---

## Bellek Sorunu İçin Bir Fikir: IDA*

* **IDA\*** = Iterative Deepening A*
* Derinlik sınırı yerine **$f$-maliyeti sınırı** kullanır
* DFS benzeri çalışır
* Bellek kullanımı yaklaşık $O(bd)$ düzeyine iner

::: {.notes}
IDA*'ın temel fikri, IDS'teki yinelemeli derinleştirme yaklaşımını A*'a uyarlamaktır. Ancak burada sınır derinlik değil, f değeri üzerinden konur.

Böylece algoritma A* fikrini tamamen kaybetmeden, çok daha düşük bellekle çalışabilir. Bunun bedeli ise bazı düğümlerin tekrar tekrar üretilmesidir.
:::

---

## IDA* Ne Kazandırır, Ne Kaybettirir?

**Kazandırır:**
* Çok daha düşük bellek kullanımı

**Kaybettirir:**
* Aynı düğümleri tekrar tekrar üretme
* Bazı durumlarda daha fazla çalışma süresi

Yani:

* A* → güçlü ama pahalı
* IDA* → daha hafif ama tekrar üretim maliyeti var

::: {.notes}
Burada amaç IDA*'ı ayrıntılı öğretmek değil; A*'ın doğal bir devamı olarak göstermek. Çünkü öğrenci artık şunu görmeli: algoritmalar yalnızca doğruluk açısından değil, kaynak kullanımı açısından da değerlendirilir.

Bu yüzden IDA*'ı bir çözüm ailesinin örneği olarak düşünmek yeterlidir.
:::

---

## İyi Bir Heuristic Nereden Gelir?

* Güçlü bir sezgisel fonksiyon aramayı ciddi biçimde hızlandırabilir
* Ama bunu tasarlamak her zaman kolay değildir
* Bir yöntem: **gevşetilmiş problem** kurmak

::: {.notes}
Buraya kadar $h(n)$'i kullandık; şimdi kısa bir süre için onun nereden gelebileceğini düşünelim. Çünkü iyi bir heuristic kendiliğinden ortaya çıkmaz.

Bu bölümde yalnızca bir temel fikir vereceğiz: orijinal problemin daha kolay bir versiyonunu çözmek. Buna gevşetilmiş problem yaklaşımı denir.
:::

---

## Gevşetilmiş Problem Fikri

* Orijinal problemin bazı kısıtlarını kaldır
* Daha kolay bir problem elde et
* Bu kolay problemin çözüm maliyetini sezgisel olarak kullan

Bu fikir genelde:

* hesaplaması daha kolay
* ama yine de anlamlı bir alt sınır üreten
bir $h(n)$ verir

::: {.notes}
Buradaki mantık basittir. Eğer problemin daha kolay bir versiyonunu kurarsak, bu kolay problemde bulunan maliyet genellikle gerçek problemdeki maliyetten büyük olmaz. Bu yüzden admissible bir tahmin elde etme şansı doğar.

Bu yaklaşım yapay zekada çok temel bir heuristic tasarım yöntemidir.
:::

---

## 8-Puzzle Örneği

İki klasik sezgisel:

* **Yanlış yerde taş sayısı**
* **Manhattan mesafesi**

Manhattan mesafesi genelde daha güçlüdür; çünkü hedefe kalan hareket ihtiyacını daha ayrıntılı yansıtır.

::: {.notes}
8-puzzle probleminde en basit sezgisel, yanlış konumda duran taşların sayısıdır. Daha güçlü olan ise her taşın hedef yerine olan satır-sütun uzaklığını toplayan Manhattan mesafesidir.

Bu örnek önemli; çünkü iyi heuristic ile daha zayıf heuristic arasındaki farkı çok net gösterir. Aynı algoritma, farklı $h(n)$ seçimleriyle çok farklı performans gösterebilir.
:::

---

## Bu Bölümün Özeti

* A* yalnızca hızlı değil, uygun koşullarda **optimaldir**
* Bunun için sezgisel fonksiyonun özellikleri önemlidir
  * **admissible**
  * **consistent**
* A* güçlüdür ama bellek maliyeti yüksektir
* IDA* ve benzeri yaklaşımlar bu soruna cevap arar
* İyi heuristic tasarımı performansı belirleyen ana unsurdur

::: {.notes}
Bu bölümde A*'ın neden güvenilir çalışabildiğini, hangi koşullarda optimal olduğunu ve nerede zorlandığını gördük. Ayrıca heuristic tasarımının yalnızca yardımcı bir detay değil, algoritmanın başarısını doğrudan etkileyen bir unsur olduğunu da görmüş olduk.
:::

---

## Sonraki Adım

Şimdiye kadar gördüğümüz tüm arama yöntemlerinde amaç, tek bir ajanın hedefe ulaşmasıydı.

Sıradaki soru:

**Eğer ortamda bir rakip varsa ne olur?**

Bir sonraki konu: **Çekişmeli Arama**
* minimax
* oyun ağacı
* alpha-beta budama

::: {.notes}
Buraya kadar tek ajanlı arama dünyasındaydık. Karar verici tekti ve çevre pasifti. Çekişmeli aramada ise artık başka bir karar verici vardır ve bu, problemi kökten değiştirir. Sonraki bölümde bu durumu ele alacağız.
:::
