---
title: Sezgisel Aramaya Giriş
subtitle: Greedy, A* ve Temel Fikirler
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-02-16
execute:
  echo: false
---

[^1]: Bazı mesafeler gerçeğe pek uygun değildir. Örneklerin mantıklarını verebilmek için bazı ufak dokunuşlar yapılmıştır.

---  
  
## 1. Aramayla Problem Çözme: Nerede Kaldık? {auto-animate=true}  
  
::: {data-id="icerik" .nonincremental}


* Bir problemi arama problemi olarak tanımladık:  
* başlangıç durumu  
* eylemler  
* geçiş modeli  
* hedef testi  
* yol maliyeti  

:::  
  
---  

::: {.content-visible when-format="revealjs"}  


## Aramayla Problem Çözme: Nerede Kaldık? {auto-animate=true}  


:::  

::: {data-id="icerik" .nonincremental}  


Bu yapı üzerinde **bilgisiz arama** algoritmalarını gördük:  
* BFS  
* DFS  
* UCS  
* IDS  
* Böylece çözümü **sistematik olarak aramayı** mümkün hale getirdik  

:::  

::: {.notes}
Bir önceki konuda problem formülasyonunu gördük: başlangıç durumu, eylemler, geçiş modeli, hedef testi, yol maliyeti. Bu yapı üzerinde dört bilgisiz arama algoritması çalıştırdık.

Bu algoritmaların ortak katkısı somut: problem çözmeyi rastgele denemeden çıkarıp sistematik bir sürece dönüştürdüler. IDS'nin getirdiğini sayılarla hatırlayalım — d=16 derinliğinde BFS fiziksel olarak imkânsız (10 exabyte bellek), IDS aynı işi 156 kilobayt ile yapıyor.

Ama dört algoritmanın da ortak bir kör noktası var: hiçbiri hedefe doğru yönlenemiyor. Sıradaki soru tam olarak bu.


:::

---

## Peki Neden Bu Yetmedi?

* Bu algoritmalar çözüm bulabilir
* Ama aramayı **hedefe doğru yönlendiremez**
* Bu yüzden çok sayıda gereksiz düğüm açabilir.
* Soru: Hedefe yakın görünen durumları önce incelesek ne olur?

---


<div data-anim="search" data-view="graph"></div>
[^1]

::: {.notes}
Bilgisiz arama algoritmaları önemli bir adım sağlar; ancak ortak bir sınırlılıkları vardır. Hedefin hangi yönde olduğunu bilmeden çalışırlar. Yani çözümü ararlar, fakat bunu kör bir şekilde yaparlar.

Bizim örneklerimizde `İst→Tek` yolu üzerinden hiç ilerlemedik fakat FIFO yapısında bu şekilde başlanabilir, gidilmek istenen istikametin tersi yönde harekete başlanabilirdi. Bizim örneğimizde `In(Tek)` konumundan sadece  `Tek→Düzce` adımı olduğu için problemimiz açısından büyük bir fark yaratmayacaktı fakat bu rota bu yönde devam etse bizi hedeften uzaklaştırya devam edebilirdi.

Küçük problemlerde bu yaklaşım yeterli olabilir. Fakat durum uzayı büyüdükçe gereksiz düğüm sayısı hızla artar. Bu noktada doğal soru şudur: Eğer elimizde hedefe ne kadar yakın olduğumuza dair bir tahmin varsa, aramayı bununla yönlendirebilir miyiz? Sezgisel arama bu ihtiyaca cevap verir.
:::

---


## Rota Oluşturuluyor....

* Hedefe olan gerçek uzaklığı bilmiyoruz.
	* Peki aramayı yönlendirmek için ne kullanabiliriz?
	* İpucu: Bu yolculuğa biz çıksak Tekirdağ üzerinden gider miydik?
	* `İst→Ank` için $1000\,km$ yol yapılması makul mü?
	* Ör: `Tek→İps→Blk→Krm→Krs→Erz→Ank` rotası makul müdür?
		* Böyle bir rotaya girmiş bir ajan bundan ne zaman vazgeçer?
* Problemin yapısından gelen ek bilgi kullanabiliriz.
	* Ör: şehirler arası **kuş uçuşu mesafe**.
* Eğer bu mesafeyi biliyorsak,
	* ideal yolun bu değerin **çok üzerinde** olmasını beklemeyiz.


::: {.notes}

Bu noktaya kadar arama algoritmalarını gördük. Ancak bu algoritmaların çoğu  yalnızca problem tanımında verilen bilgiyi kullandılar. Yani başlangıç durumu, eylemler ve yol maliyetleri dışında ek bir bilgi kullanmadılar; hatta böyle bir bilginin varlığından bile haberdar değillerdi.

Gerçek hayatta ise karar verirken çoğu zaman refleks bir ajan gibi davranmayız. Durumlar hakkında bir ön sezimiz vardır. Hatta insanı diğer canlılardan ayıran önemli özelliklerden biri de örüntüleri fark etme ve geleceğe dair çıkarım yapabilme yetisidir. Bazı araştırmalara göre rasyonel düşünce ve modern medeniyet, bu sezgisel yetilerin ortaya çıkmasından çok sonra gelişmiştir.

Konuyu çok dağıtmadan tekrar problemimize dönelim. Bizim sezgilerimiz var ve İstanbul’dan Ankara’ya gitmemiz gerekiyor. Elbette yola Tekirdağ üzerinden çıkmayız. İpsala' dan geçip Balkanlar üzerinden Kırım’a uğrayıp Kars’tan ülkeye girip Erzurum üzerinden Ankara’ya ulaşmaya çalışmak da akla yatkın bir rota değildir.

Demek ki hedefe olan gerçek mesafeyi bilmesek bile bazı rotaların makul olmadığını hızlıca anlayabiliyoruz. Ajanın da bunu bir yerde fark etmesini bekleriz. Elbette bazen ideal yol için ters yönde yola çıkmak gerekebilir. Bazen de "Engeller söz konusuysa iki nokta arasındaki en kısa yol bir eğri olabilir."  [@brecht1984galileo, s. 52] Fakat çoğunlukla gerçek yaşamda karşımıza çıkan durum bu değildir.

Bu sezgiyi mümkün kılan şey, problemin yapısından gelen ek bilgilerdir. Şehirler arası yol bulma probleminde bunun en doğal örneği kuş uçuşu mesafedir. Bir şehrin Ankara’ya kuş uçuşu ne kadar uzak olduğunu biliyorsak, o noktadan hedefe ne kadar bir mesafede ulaşacağımız hakkında da bir fikir ediniriz.

Elbette bu değer bize gerçek yol maliyetini doğrudan vermez. Yolun kıvrılması, coğrafi engeller ya da bağlantı yapısı nedeniyle gerçek maliyet daha yüksek olabilir. Ama yine de bu bilgi işe yarar; çünkü arama sırasında hangi düğümlerin daha uygun göründüğünü tahmin etmemizi sağlar.

Sezgisel arama tam olarak bu noktada devreye girer. Amaç, hedefe kalan gerçek maliyeti bilmeden, ona dair makul bir tahmin kullanmak ve aramayı bütünüyle kör biçimde yürütmek yerine daha anlamlı yönlere doğru kaydırmaktır.

:::


---

## Sezgisel Fonksiyon — `h(n)`

- `h(n)`: n düğümünden hedefe olan **tahmini maliyet**
- Hedef düğümde `h(goal) = 0`
- Probleme özgü bilgi gerektirir
- Örnek: **kuş uçuşu mesafe** (hesaplaması ucuz bir tahmin)
- Gerçek yol maliyeti genellikle ≥ kuş uçuşu mesafe

::: {.notes}
Sezgisel fonksiyon, bir düğümden hedefe ulaşmanın ne kadar maliyetli olabileceğine dair bir tahmin üretir. Bu tahmin genellikle problemin yapısından gelen ek bilgileri kullanır.

Şehirler arası yol bulma probleminde en doğal örnek kuş uçuşu mesafedir. Bir şehirden Ankara’ya kuş uçuşu uzaklığı biliyorsak, o noktadan hedefe ulaşmanın yaklaşık ne kadar süreceği hakkında bir fikir ediniriz.

Bu değer gerçek yol maliyetini tam olarak vermez; yolların kıvrılması veya coğrafi engeller nedeniyle gerçek maliyet daha yüksek olabilir. Ancak yine de bu tahmin, arama algoritmasına hangi düğümlerin daha ideal göründüğünü anlamasında yardımcı olur.
:::


---

<div data-anim="search" data-view="heuristic"></div>


::: {.notes}
Burada sezgisel fonksiyonun önemli bir özelliğini görüyoruz: h(n) değeri gerçek maliyetten büyük olmuyor. Yani bu değer hedefe kalan maliyet için bir **alt sınır** gibi davranıyor.

Zaten gerçek mesafeyi tam olarak hesaplayabilseydik arama yapmamıza gerek kalmazdı; problemi doğrudan çözmüş olurduk. Sezgisel fonksiyonun amacı tam değeri vermek değil, sadece hangi düğümlerin daha umut verici göründüğünü tahmin etmektir.

Tabloda tüm şehirler için h(n) ≤ gerçek maliyet ilişkisini görebilirsiniz.
Eğer bir yerde h(n) gerçek maliyetten büyük olsaydı, algoritma bazı
yolları gereğinden erken elemiş olurdu ve A* optimal çözümü kaçırabilirdi.

Bu yüzden bu özelliğe daha sonra tekrar döneceğiz. A*'ın neden güvenilir çalıştığını açıklarken bu noktayı kullanacağız.
:::



---

## Sezgisel Arama Stratejileri

Bir sezgisel fonksiyon `h(n)` verildiğinde, arama algoritmaları
düğümleri bir **değerlendirme fonksiyonu** `f(n)` ile sıralar.

- **Açgözlü en iyi ilk arama (Greedy best-first)**  
  `f(n) = h(n)`  
  → Hedefe en yakın **görünen** düğüm seçilir.

- **A\***  
  `f(n) = g(n) + h(n)`  
  → Gerçek maliyet (`g`) ve tahmini kalan maliyet (`h`) birlikte kullanılır.

- Her iki algoritmada da frontier bir **öncelik kuyruğu** olarak tutulur     ve **en küçük `f(n)` değerine sahip düğüm** genişletilir.

::: {.notes}
Sezgisel arama algoritmalarının ortak fikri, frontier içindeki düğümleri bir değerlendirme fonksiyonuna göre sıralamaktır. Bu fonksiyon genellikle f(n) ile gösterilir.

Greedy aramada değerlendirme yalnızca sezgisel tahmine dayanır. Algoritma hedefe en yakın görünen düğümü seçer. Bu yüzden hızlı olabilir, ancak her zaman doğru yolu seçmeyebilir.

A* algoritması ise farklı bir yaklaşım izler. Burada yalnızca hedefe olan tahmini mesafe değil, o düğüme kadar gelmek için harcadığımız gerçek maliyet de hesaba katılır. Bu nedenle f(n) = g(n) + h(n) şeklinde tanımlanır.

Her iki yöntemde de frontier bir öncelik kuyruğu olarak tutulur ve en küçük f(n) değerine sahip düğüm genişletilmek üzere seçilir.
:::

---

## Açgözlü En İyi İlk Arama (Greedy Best-First)

- **Temel fikir:** Hedefe en yakın **görünen** düğümü seç
- **Değerlendirme fonksiyonu:** `f(n) = h(n)`
- Frontier içinden **en küçük `h(n)` değerine sahip düğüm** genişletilir

---

<div data-anim="search" data-algo="GREEDY"></div>

*Örnek akış (Greedy):*  
İstanbul → Bolu → Ankara  
*Toplam maliyet:* 650 km

*Daha kısa rota:*  
İstanbul → Bursa → Eskişehir → Ankara  
*Toplam maliyet:* 550 km


::: {.notes}
Greedy arama yalnızca hedefe olan tahmini mesafeye bakar. Bu yüzden ilk bakışta hedefe daha yakın görünen düğümleri seçer.

İstanbul'dan Ankara'ya giderken Bolu Ankara'ya kuş uçuşu daha yakın göründüğü için algoritma önce Bolu'ya yönelir. Ancak bu yolun toplam maliyeti daha yüksek olabilir.

Gerçekte Bursa ve Eskişehir üzerinden giden rota daha kısa olsa bile, Greedy bu yolu kaçırabilir. Çünkü algoritma yalnızca h(n) değerine bakar; o düğüme kadar gelmek için harcanan gerçek maliyeti dikkate almaz.
:::


---

## Açgözlülüğün Sonu

* **Tam mı?** Hayır — döngülere takılabilir
	* Örneğin `Düzce` düğümüne ulaşırsak `Düzce-Adap` döngüsüne sıkışırdık.
* **Optimal mi?** Hayır — ilk bulduğu çözüm en kısa olmayabilir
* **Zaman:** `O(b^m)` (kötü durumda)
* **Yer:** `O(b^m)` — tüm sınırı bellekte tutar
* **Avantaj:** İyi sezgiyle hızlı sonuç verebilir

* Geçmiş maliyeti (`g(n)`) dikkate almaz
* Kısa vadeli avantaja odaklanır, uzun vadede kötü olabilir

::: {.notes}
Greedy algoritmasının temel problemi, yalnızca hedefe olan tahmine bakmasıdır. Yani  düğüme gelmek için harcanan gerçek maliyeti dikkate almaz.

Bu yüzden algoritma bazen kısa vadede iyi görünen bir yolu seçebilir, ancak toplam maliyeti daha yüksek olan bir rotaya girebilir.

Doğal soru şu: Hedefe olan tahmini mesafeyi kullanmaya devam ederken, aynı amanda şimdiye kadar kat ettiğimiz gerçek maliyeti de hesaba katsak ne olur?
:::




---

## A* — Temel Fikir

- **Değerlendirme fonksiyonu:** `f(n) = g(n) + h(n)`

  - `g(n)`: başlangıçtan n'ye **gerçek maliyet**
  - `h(n)`: n'den hedefe **tahmini maliyet**
  - `f(n)`: n üzerinden giden yolun **tahmini toplam maliyeti**

- Frontier'dan **en küçük `f(n)` değerine sahip düğüm** seçilir

---

<div data-anim="search" data-algo="ASTAR"></div>

*Animasyon: A\*’ın UCS’den farkı — Bursa (f=470) Tekirdağ’dan (f=550) önce açılır.*

::: {.notes}

Animasyonda süreç `In(İst)` düğümünden başlar. İlk genişletmede komşular
`f(n) = g(n) + h(n)` değerleriyle frontier’a eklenir.

```text
frontier = [
  (550, In(Bur)),
  (650, In(Bol)),
  (700, In(Esk)),
  (780, In(Adap)),
  (820, In(Tek))
]
````

A* her adımda frontier’daki **en küçük `f(n)` değerine sahip düğümü**  
genişletir. Bu yüzden önce `In(Bur)` açılır.

`Bur → Kut` ile `In(Kut)` frontier’a eklenir.

```text
frontier = [
  (520, In(Kut)),
  (650, In(Bol)),
  (700, In(Esk)),
  (780, In(Adap)),
  (820, In(Tek))
]
```

Sonraki adımda en küçük `f(n)` değerine sahip düğüm `In(Kut)` olduğu için  
bu düğüm genişletilir. `Kut → Esk` ile `In(Esk)` için daha ucuz bir yol  
bulunursa frontier güncellenir.

```text
frontier = [
  (620, In(Esk)),
  (650, In(Bol)),
  (780, In(Adap)),
  (820, In(Tek))
]
```

Algoritma frontier’dan **en küçük `f(n)` değerine sahip düğümü** seçerek  
ilerlemeye devam eder ve sonunda `İst → Bur → Kut → Esk → Ank`  
yolu toplam **550 km** maliyetle bulunur.

:::

::: {.notes}
A* algoritmasının temel fikri, iki bilgiyi birlikte kullanmaktır.

Birincisi, o düğüme kadar gelmek için harcadığımız gerçek maliyet,
yani g(n). İkincisi ise hedefe kalan tahmini maliyet, yani h(n).

Bu iki değeri topladığımızda, o düğüm üzerinden giden bir çözümün
toplam maliyeti hakkında bir tahmin elde ederiz. Algoritma da frontier
içinden en küçük f(n) değerine sahip düğümü genişletir.
:::

---



## A*’da Hedef Testi Zamanlaması

* **Kural:** Hedef testi düğüm **genişletilirken** yapılır
* **Neden?** İlk üretilen hedef düğüm en düşük maliyetli olmayabilir

**Örnek:** İstanbul → Ankara
* `İst → Bol → Ank` (650 km) önce üretilir
* `İst → Bur → Kut → Esk → Ank` (550 km) sonra üretilir

Eğer üretme anında test etseydik, 650 km'lik çözümü döndürür, optimali kaçırırdık.

---