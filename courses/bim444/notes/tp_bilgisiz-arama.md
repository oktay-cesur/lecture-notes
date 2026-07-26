---
title: Bilgisiz Arama
subtitle: BİM444 — Hafta 3
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-02-16
execute:
  echo: false
---

## Bilgisiz Arama Algoritmaları


---

## BFS — Breadth-First Search  (Enine Arama)

- Fikir: Katman katman genişle — bir derinlikteki tüm düğümler bitmeden sonraki derinliğe geçme
- Veri yapısı: FIFO kuyruğu — en eski (en sığ) düğüm önce çıkar
- Tam: Evet (b sonluysa) · Optimal: Evet (adım maliyetleri eşitse)
- Zaman: $O(b^d)$ · Yer: $O(b^d)$— tüm sınırı bellekte tutar



::: {.notes}

BFS (Breadth-First Search) arama ağacını katman katman genişletir. FIFO kuyruk kullanıldığı için önce en sığ düğümler açılır. Başlangıç düğümü `In(İst)` kuyruğa eklenir; her adımda kuyruğun başındaki düğüm genişletilir ve üretilen çocuklar kuyruğun sonuna eklenir. Bu mekanizma sayesinde algoritma önce derinlik $1$’i, sonra derinlik $2$’yi, ardından derinlik $3$’ü tarar. Dallanma faktörü $b$ sonluysa BFS tamdır; ayrıca tüm kenar maliyetleri eşitse en az kenarlı yolu bulduğu için optimal kabul edilir. 
:::

 --- 
 
<div data-anim="search" data-algo="BFS"></div>

:::{.notes}

Animasyonda bu süreç `In(İst)` düğümünden başlar. 
İlk genişletme

-  `kuyruk = {In(Adap)`, `In(Bol)`, `In(Bur)`, `In(Esk)`, `In(Tek)}`

BFS bu düğümleri sırayla açar. Burada kuyruğa girme sırasıyla $2$ derinlikli konumlara bakılır. Burada liste alfabetik verilmiş, başka bir sıralama da olaiblirdi.

1.  `Adap → Düzce`
2.  `Bolu → Ank`

`In(Bol)` genişletildiğinde `In(Ank)` bağlantısı görülür ve çözüm bulunur: `İst→Bol→Ank`. Bu yol $2$ kenarlıdır ve maliyeti $650\,\text{km}$’dir. Ancak bu en ucuz yol değildir; örneğin `İst→Bur→Kut→Esk→Ank` yolu $550\,\text{km}$’dir fakat $4$ kenar içerir. BFS maliyetleri dikkate almaz, yalnızca derinliğe göre ilerler.

Algoritma tamdır çünkü her derinlik seviyesini eksiksiz tarar. Çözüm derinliği $d$ ise BFS önce $0,1,2,\dots,d-1$ seviyelerini tamamen tarar ve sonra $d$ seviyesine ulaşır. Dallanma faktörü $b$ sonluysa ve çözüm varsa algoritma mutlaka bulur.

Optimal olması ise yalnızca tüm kenar maliyetleri eşitse geçerlidir. BFS ilk bulduğu çözümü döndürür; bu çözüm en az kenarlı olandır, fakat her zaman en düşük maliyetli yol olmayabilir.
:::

---

### BFS — Bellek Tablosu

| Derinlik | Düğüm | Süre | Bellek |
|---|---|---|---|
| $2$  | $110$   | $0.11\,\text{ms}$ | $107\,\text{KB}$ |
| $6$  | $10^6$  | $1.1\,\text{s}$   | $1\,\text{GB}$   |
| $8$  | $10^8$  | $2\,\text{dk}$    | $103\,\text{GB}$ |
| $10$ | $10^{10}$ | $3\,\text{saat}$ | $10\,\text{TB}$  |
| $12$ | $10^{12}$ | $13\,\text{gün}$ | $1\,\text{PB}$   |

::: {.notes}
Tablo BFS’nin temel zayıflığını gösterir: bellek kullanımı çok hızlı büyür. Arama derinliği arttıkça düğüm sayısı yaklaşık $b^d$ oranında artar; burada $b$ dallanma faktörü, $d$ ise çözüm derinliğidir. BFS aynı anda tüm sınır katmanını bellekte tuttuğu için bellek gereksinimi de aynı büyüme hızını izler.

Örneğin $d=6$ civarında yaklaşık $10^6$ düğüm oluşur ve bu yaklaşık $1\,\text{GB}$ bellek gerektirir. $d=10$ seviyesinde $10^{10}$ düğüm ve yaklaşık $10\,\text{TB}$ bellek gerekir. $d=12$’de ise gereksinim yaklaşık $1\,\text{PB}$ seviyesine çıkar. Bu nedenle pratikte BFS çoğu zaman zamandan önce bellek sınırına takılır.

Bir diğer teknik ayrım hedef testinin nerede yapıldığıdır. BFS’de hedef testi genellikle düğüm **üretilirken** yapılabilir; yani çocuk düğüm `frontier` kuyruğuna eklenmeden önce kontrol edilir. Buna karşılık maliyet tabanlı algoritmalarda (örneğin UCS veya A*) hedef testi genellikle düğüm **genişletildiğinde** yapılır; çünkü aynı duruma daha düşük maliyetli bir yol daha sonra bulunabilir.
:::

---


## UCS — Uniform-Cost Search (En Düşük Maliyetli Arama)

- Fikir: En düşük toplam yol maliyetine sahip düğümü önce genişlet
- Değerlendirme: $g(n)$ — başlangıçtan `n` düğümüne kadar biriken gerçek maliyet
- Veri yapısı: Öncelik kuyruğu
- Tam: Evet (adım maliyetleri pozitifse) · Optimal: Evet
- Zaman / Yer: $O\!\left(b^{1+\lfloor C^*/\varepsilon \rfloor}\right)$

::: {.notes}

Uniform-Cost Search (UCS), adım maliyetlerinin farklı olabildiği arama problemleri için kullanılan bir kör arama algoritmasıdır. BFS’den farklı olarak düğümleri derinliğe göre değil, başlangıç durumundan ilgili düğüme kadar oluşan toplam yol maliyetine göre değerlendirir. Bu nedenle amaç, en az kenarlı yolu değil, toplam maliyeti en düşük çözüm yolunu bulmaktır. Tüm adım maliyetleri pozitif olduğunda UCS hem tamdır hem de optimaldir.

UCS her adımda sınırdaki düğümler arasından $g(n)$ değeri en küçük olanı seçip genişletir. Burada $g(n)$, başlangıç düğümünden `n` düğümüne kadar biriken gerçek maliyettir. Bu seçim işlemini yapabilmek için algoritma bir öncelik kuyruğu kullanır. Aynı duruma daha düşük maliyetli bir yol bulunursa ilgili kayıt güncellenir; hedef testi ise düğüm üretilirken değil, öncelik kuyruğundan çıkarılıp genişletilirken yapılır. Böylece UCS, hedefe ulaşan ilk yolu değil, hedefe ulaşan en düşük maliyetli yolu döndürür.

UCS tamdır; çünkü pozitif adım maliyetlerinde toplam maliyet sürekli artar ve algoritma daha ucuz düğümleri sistematik olarak önce işler. Ayrıca optimaldir; çünkü hedef düğüm kuyruktan çıkarıldığında ona ulaşan yolun en düşük maliyetli yol olduğu garanti edilir.
:::

---

<div data-anim="search" data-algo="UCS"></div>


:::{.notes}

Animasyonda bu süreç `In(İst)` düğümünden başlar.  
İlk genişletmede komşular öncelik kuyruğuna birikmiş maliyetleriyle eklenir.

```text
frontier = [
  (100, In(Tek)),
  (130, In(Adap)),
  (150, In(Bur)),
  (300, In(Bol)),
  (400, In(Esk))
]
````

UCS bu düğümleri derinliğe göre değil, toplam yol maliyetine göre açar. Bu yüzden önce `In(Tek)`, sonra `In(Adap)`, ardından `In(Bur)` genişletilir. Burada seçim ölçütü en az kenar sayısı değil, en küçük $g(n)$ değeridir.

`In(Bur)` genişletildiğinde `Bur → Kut` ile `In(Kut)` düğümü $270$ maliyetle frontier’a eklenir. [^1]

```text
frontier = [
  (270, In(Kut)),
  (300, In(Bol)),
  (400, In(Esk))
]
```

Sıradaki en düşük maliyetli düğüm `In(Kut)` olduğu için bu düğüm genişletilir.  
`Kut → Esk` ile `In(Esk)` için yeni yolun toplam maliyeti

$$  
$270 + 80 = 350$  
$$

olur. Bu, frontier’daki mevcut $400$ maliyetli yoldan daha ucuz olduğu için `In(Esk)` güncellenir.

```text
frontier = [
  (300, In(Bol)),
  (350, In(Esk))
]
```

Bu noktada `In(Ank)` düğümü önce `İst→Bol→Ank` yolu üzerinden $650\,\text{km}$ maliyetle üretilebilir. Ancak UCS burada durmaz. Çünkü daha düşük maliyetli bir çözüm daha sonra gelebilir. Nitekim `İst→Bur→Kut→Esk→Ank` yolu toplam $550\,\text{km}$ maliyetle bulunur ve daha iyi çözüm olduğu anlaşılır.

Algoritmanın temel farkı budur: hedef testi düğüm üretilirken değil, öncelik kuyruğundan çıkarılıp genişletilirken yapılır. Böylece UCS ilk görülen hedefi değil, frontier’dan en düşük maliyetle çıkan hedefi çözüm olarak kabul eder.

Bu nedenle UCS, adım maliyetlerinin farklı olduğu problemlerde optimal çözüm bulabilir. BFS en az kenarlı yolu ararken, UCS en düşük toplam maliyetli yolu arar.  
:::



---


## DFS — Depth-First Search

- Fikir: Daima en derin genişletilmemiş düğümü seç — çıkmaz sokakta geri dön
- Veri yapısı: LIFO yığını
- Tam: Hayır — sonsuz yollarda takılır
- Optimal: Hayır — ilk bulduğu çözümü döndürür
- Zaman: $O(b^m)$ · Yer: $O(bm)$ — BFS'ye kıyasla devasa avantaj


::: {.notes}
DFS (Depth-First Search), her adımda en derindeki genişletilmemiş düğümü seçerek ilerler. Bu nedenle arama, bir dal boyunca mümkün olduğunca derine iner; çıkmaz bir duruma ulaştığında geri dönerek başka bir dalı dener. Algoritma bu davranışı LIFO yığını ile gerçekleştirir. Son eklenen düğüm ilk çıkarıldığı için arama sürekli en son keşfedilen dalı takip eder

DFS’de seçilen dalın sırası kritiktir. Algoritma ilk seçtiği dal boyunca mümkün olduğunca derine iner; bu nedenle komşuların hangi sırayla yığına eklendiği, hangi çözümün bulunacağını ve aramanın ne kadar verimli olacağını doğrudan etkiler.
:::


---

<div data-anim="search" data-algo="DFS"></div>



::: {.notes}

Animasyonda arama `In(İst)` düğümünden başlar. İlk adımda İstanbul’un komşuları yığına eklenir. DFS, LIFO yapısı nedeniyle yığına en son eklenen düğümü önce seçtiği için burada hangi komşunun önce açılacağı, ekleme sırasına bağlıdır.

Bu örnekte arama önce `In(Adap)` düğümüne gider. Ardından `In(Düz)` ve sonra `In(Kas)` düğümlerine ilerler. DFS bu dal boyunca derine inmeyi sürdürdüğü için başka alternatiflere bakmadan aynı yol üzerinde devam eder.

Sonraki adımda `In(Ank)` düğümüne ulaşılır ve çözüm bulunur. Böylece animasyonda elde edilen yol `İst→Adap→Düz→Kas→Ank` olur. Bu yolun toplam maliyeti $710\,\text{km}$’dir.

Bu animasyonun gösterdiği nokta şudur: DFS en iyi yolu aramaz; önce seçtiği dal boyunca mümkün olduğunca derine iner. Bu yüzden bulunan çözüm geçerli olsa da en kısa ya da en düşük maliyetli çözüm olmak zorunda değildir.


DFS tam değildir. Tree-search biçiminde kullanıldığında `İst→Bur→İst→Bur→...` gibi bir döngüye girip sonsuza kadar aynı yapıyı izleyebilir. Graph-search kullanıldığında tekrar ziyaretler engellenir; ancak durum uzayı sonsuzsa bu kez de DFS, çözüm daha sığ bir derinlikte bulunsa bile başka bir dal boyunca çok derine inmeyi sürdürebilir. Bu nedenle genel durumda çözümü bulacağı garanti değildir.

DFS’nin en önemli avantajı bellek kullanımındadır. BFS her seviyedeki tüm sınır düğümlerini bellekte tutar ve bu nedenle yer karmaşıklığı $O(b^d)$ olur. Buna karşılık DFS çoğunlukla yalnızca aktif arama yolunu ve geri dönüş için gerekli düğümleri saklar; bu yüzden yer karmaşıklığı $O(bm)$ düzeyindedir. Arama derinliği büyüdükçe bu fark pratikte çok belirgin hale gelir.

Bu özellik nedeniyle DFS, bellek kısıtının kritik olduğu problemlerde sık kullanılır. Özellikle kısıt çözme, SAT çözme ve mantıksal çıkarım gibi alanlarda amaç çoğu zaman en kısa yolu bulmak değil, geçerli bir çözüm durumuna ulaşmaktır. Bu tür durumlarda DFS’nin düşük bellek ihtiyacı önemli bir avantaj sağlar.
:::

---


## Derinlik Sınırlı Arama

- DFS'nin sonsuz yol sorununa basit çözüm: ℓ derinlik sınırı koy
- ℓ < d ise hedefi kaçırırsınız
- Tam değil, optimal değil (ℓ doğru seçilmezse)

::: {.notes}
Derinlik sınırlı arama, DFS’nin sonsuz derinliğe inme riskini azaltmak için geliştirilmiş bir yöntemdir. Temel fikir, aramaya bir $\ell$ derinlik sınırı koymak ve bu sınır aşıldığında ilgili dalı daha fazla genişletmemektir. Böylece algoritma sonsuz bir dal boyunca kontrolsüz biçimde ilerlemez; ancak bu kez de sınırın doğru seçilmesi problemi ortaya çıkar.

Eğer $\ell$ değeri gerçek çözüm derinliği $d$’den küçükse, algoritma çözüm var olsa bile ona ulaşamaz. Örneğin çözüm derinliği $4$ olan bir problemde $\ell = 3$ seçilirse hedef düğüm hiç görülemez. Buna karşılık $\ell$ çok büyük seçilirse bu kez DFS’ye benzer biçimde gereksiz derin dallar da araştırılmış olur. Bu nedenle yöntem, çözüm derinliği hakkında yaklaşık bilgi varsa yararlı olabilir; fakat genel durumda hem tamlık hem de optimallik garantisi vermez.
:::

---


## IDS — Iterative Deepening Search

- Motivasyon: BFS tam+optimal ama bellek sorunlu · DFS bellek verimli ama tam+optimal değil
- Fikir: Derinlik sınırını $0$'dan başlat, her seferinde artır, her seferinde DFS uygula
- BFS gibi: tam ve optimal · DFS gibi: bellek $O(bd)$
- $b=10$, $d=5$: IDS=$123{,}450$ · BFS=$111{,}110$ → fark $%11$, bellek farkı trilyonlarca kat



::: {.notes}
Iterative Deepening Search (IDS), derinlik sınırlı aramayı artan sınırlarla tekrar tekrar çalıştıran bir arama algoritmasıdır. Algoritma önce derinlik sınırını $\ell = 0$ alır ve yalnızca başlangıç düğümünü kontrol eder. Çözüm bulunmazsa sınır $\ell = 1$ yapılır; ardından aynı arama bu kez derinlik $1$’e kadar yürütülür. Bu süreç $\ell = 2, 3, 4, \dots$ şeklinde devam eder ve her iterasyonda arama baştan başlatılır.

Her iterasyonda kullanılan yöntem aslında DFS’dir; ancak DFS yalnızca o anki derinlik sınırına kadar ilerleyebilir. Sınıra ulaşıldığında daha derine inilmez ve geri dönülür. Böylece algoritma önce derinlik $0$’daki tüm düğümleri, sonra derinlik $1$’dekileri, sonra derinlik $2$’dekileri sistematik olarak kapsar. Bu nedenle IDS, çözümün bulunduğu en sığ derinliğe ulaştığında onu bulur.

Algoritmanın temel fikri şudur: DFS’nin düşük bellek kullanımını korurken, BFS’nin katman katman arama davranışını elde etmek. Bu yüzden birim adım maliyetli problemlerde IDS tamdır ve optimaldir. Bellek kullanımı DFS gibi düşüktür; buna karşılık üst seviyeler her iterasyonda yeniden üretildiği için bazı düğümler tekrar ziyaret edilir. Ancak arama ağacındaki düğümlerin büyük kısmı en alt seviyelerde bulunduğundan, bu tekrarın toplam maliyeti çoğu durumda kabul edilebilir düzeydedir.
:::

---


## Çift Yönlü Arama

- Fikir: İki arama eş zamanlı — başlangıçtan ileri, hedeften geri
- Sınırlar kesişince çözüm bulundu
- $b^d$ yerine $2 \times b^{d/2}$ — zaman ve yer: $O(b^{d/2})$
- $d=6$, $b=10$: BFS=$1{,}111{,}110$ düğüm · Çift yönlü=$2{,}220$ düğüm


::: {.notes}
Çift yönlü arama, aramayı tek bir başlangıç noktasından yürütmek yerine iki uçtan aynı anda başlatır. Bir arama başlangıç durumundan hedefe doğru ilerlerken, ikinci arama hedeften başlangıca doğru ilerler. Amaç, bu iki aramanın sınırlarının bir noktada kesişmesini sağlamaktır. Kesişme gerçekleştiğinde çözüm, başlangıçtan kesişim noktasına kadar bulunan yol ile hedeften kesişim noktasına kadar bulunan yolun birleştirilmesiyle elde edilir.

Bu yaklaşımın temel avantajı, arama derinliğini ikiye bölmesidir. Tek yönlü bir arama yaklaşık $b^d$ büyüklüğünde bir uzayı tararken, çift yönlü arama yaklaşık iki adet $b^{d/2}$ büyüklüğünde uzay üzerinde çalışır. Bu nedenle zaman ve bellek gereksinimi yaklaşık $O(b^{d/2})$ düzeyine düşer. Derinlik büyüdükçe bu fark çok belirgin hale gelir.

Ancak bu yöntem her problemde doğrudan uygulanamaz. Geri yönde arama yapabilmek için, bir durumdan hangi önceki durumlara gelinebileceğini belirleyen bir öncül fonksiyonuna ihtiyaç vardır. Ayrıca hedef durumun açık ve belirli olması gerekir; soyut ya da çok sayıda olası hedeften oluşan problemlerde geri arama pratik değildir. Buna karşılık yolların çift yönlü olduğu şehir grafı gibi yapılarda çift yönlü arama oldukça doğal ve etkilidir.
:::

---


## Karşılaştırma Tablosu

| Yöntem | Tam? | Optimal? | Zaman | Yer |
|--------|------|----------|-------|-----|
| BFS | Evet | Evet† | $O(b^d)$ | $O(b^d)$ |
| Uniform-Cost | Evet | Evet | $O(b^{C^*/\varepsilon})$ | $O(b^{C^*/\varepsilon})$ |
| DFS | Hayır | Hayır | $O(b^m)$ | $O(bm)$ |
| Derinlik Sınırlı | Hayır | Hayır | $O(b^\ell)$ | $O(b\ell)$ |
| IDS | Evet | Evet† | $O(b^d)$ | $O(bd)$ |
| Çift Yönlü | Evet | Evet† | $O(b^{d/2})$ | $O(b^{d/2})$ |

---

<div data-anim="search" data-algos="BFS,DFS,UCS,IDS,BIDIR"></div>

---

<div data-anim="search" data-view="summary" data-algos="BFS,DFS,UCS,IDS,BIDIR"></div>

::: {.notes}
Tablo bir seçim kılavuzu — hiçbir algoritma dört eksende birden dominant değil.

Bellek ekseni en kritik: BFS, UCS, Çift Yönlü hepsi $O(b^d)$ veya üzeri. Yalnızca DFS $O(bm)$, IDS $O(bd)$ — lineer bellek.

Satır satır seçim: BFS → eşit maliyet, küçük d, yeterli bellek. UCS → farklı maliyet, optimallik şart. DFS → bellek kritik, optimallik önemli değil. IDS → büyük uzayda default. Çift yönlü → hedef net, öncül tanımlanabilir, hız kritik.

Animasyon grafındaki sonuçlarla bu tablonun pratik karşılığını görüyorsunuz: BFS $8$ düğüm açtı ama suboptimal ($650$), UCS $12$ düğüm ama optimal ($550$), DFS $5$ düğüm ama en kötü ($710$), Greedy $3$ düğüm ama suboptimal ($650$), A* $9$ düğüm ve optimal ($550$). Bu tablo ve animasyon sonuçları aynı hikayeyi anlatıyor.

† işareti: eşit adım maliyeti varsayımı bozulunca optimallik gidiyor. UCS bu varsayım olmadan da optimal — tablodaki tek koşulsuz optimal.
:::




[^1]: Bu adımda `In(İzmir)` de frontier’a eklenir; ancak çözüm yolunu etkilemediği için gösterim dışında bırakılmıştır.
