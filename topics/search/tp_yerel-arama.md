---
title: "Yerel Arama"
subtitle: "BİM444 — Hafta 5 · Ders 1"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-03-23
execute:
  echo: false
---

## Nerede Kaldık?

- A* ile **optimal yol** bulmayı öğrendik: g(n) + h(n)
- Yol-tabanlı arama üç varsayıma dayanıyordu:
  - Çevre **tam gözlemlenebilir**
  - Eylemler **deterministik**
  - Durum uzayı **biliniyor**
- Çözüm tipi: başlangıçtan hedefe **sabit bir eylem dizisi**

::: {.notes}
Önceki bölümde arama problemini formal olarak tanımladık, bilgisiz ve sezgisel yöntemleri gördük, A*'ın optimallik garantisini inceledik. Tüm bu yöntemler bir ortak yapıya dayanıyordu: bir başlangıç durumundan bir hedef durumuna giden yolu arıyorduk ve çözüm bu yolun kendisiydi — adım adım bir eylem dizisi. Bu varsayımlar kırıldığında çözüm yapısı da değişiyor. 
:::

---

## Neleri yapmadık?

- Yol tabanlı aramada ne yapamıyoruz?
	-  Yolun önemsiz olduğu optimizasyon problemleri.
	- Ortamdaki tek ajanın bizimki olmadığı durumlar.


::: {.notes}
Bu hafta iki farklı kırılmayı göreceğiz: yolun önemsiz olduğu optimizasyon problemleri ve çevrenin bize karşı oynadığı rakipli ortamlar.
:::

---

## 8-Queens: Yeni Tür Bir Problem

- n × n tahtaya n vezir yerleştirin; hiçbiri diğerini tehdit etmesin
- **Başlangıç durumu:** Her sütuna rastgele bir vezir koy
- **Hedef:** Saldıran çift sayısı = 0 olan bir konfigürasyon
- Hedefe **nasıl vardığımız** önemsiz; yalnızca **son durum** önemli

::: {.notes}

8-queens problemini düşünün. BFS veya A* ile yaklaşsak ne olurdu? Başlangıç-hedef çifti yok; yol maliyeti anlamsız, hangi adımlarla vardığımız önemli değil. Üstelik durum uzayı büyük: 8^8 ≈ 17 milyon olası konfigürasyon. Ağacı kurmak, frontier yönetmek, yolu saklamak  hepsi gereksiz. Bize lazım olan tek şey geçerli bir son durum. Bu yalnız 8-queens'e özgü değil: seyahat satıcısı problemi, VLSI devre yerleşimi, çizelgeleme, sinir ağı eğitimi  hepsi aynı sınıftan.
:::





---

## Yerel Arama Fikri

- Tek bir **mevcut durum** tut; yalnızca komşularına bak
- Daha iyi bir komşu varsa oraya geç; **yolu hatırlama**
- Frontier yönetimi yok, yol korunmaz
- **İki büyük avantaj:**
  - Bellek O(1) — yalnızca mevcut durum tutulur
  - Çok büyük veya **sürekli** durum uzaylarında çalışabilir

::: {.notes}
Yol-tabanlı aramada frontier'i yönetiyorduk: her adımda komşuları genişletip bellekte tutuyorduk, çünkü çözüme giden yolu korumak zorunluydu. Bir önceki bölümde kullandığımız İstanbul' dan Ankara' ya gidiş örneğinde incelediğimiz her yöntemde gidilen yolların maliyetlerini hesaplamamız gerekti. Ama hedef yalnızca iyi bir son durum bulmaksa bu mekanizmaya gerek yok. Mevcut durumu tut, komşularına bak, daha iyisine geç. Dezavantaj açık: geriye dönüş yok, alternatif yol deneme şansı yok. Dolayısıyla yerel arama ne tam ne de optimal — global optimumu garanti etmiyor. Ama BFS'nin ağacı oluşturamadığı uzaylarda makul sürede iyi çözüm bulabiliyor.
:::

---

## Yerel Aramanın Üç Unsuru

Her yerel arama algoritması üç bileşen üzerine kuruludur:

1. **Başlangıç noktası:** Arama nerede başlıyor? Rastgele mi, sezgisel mi?
2. **Komşuluk yapısı:** Mevcut durumdan hangi durumlara geçilebilir?
3. **İlerleme algoritması:** Komşular arasından hangisine geçileceğini belirleyen kural

Hill climbing, SA ve beam search → aynı çerçevenin **farklı ilerleme kuralları**

::: {.notes}
Bu üç unsur bundan sonra göreceğimiz tüm algoritmaları aynı çatı altında tutar. 8-queens'de komşuluk yapısını somutlaştıralım: her adımda tek bir veziri kendi sütununda farklı bir satıra kaydırıyoruz — bu 8 sütun × 7 alternatif satır = 56 komşu demek. Başlangıç noktası rastgele bir konfigürasyon. İlerleme kuralı ise algoritmanın kimliğini belirleyen şey: en iyi komşuyu mu seçeceğiz, rastgele mi seçeceğiz, olasılıklı mı kabul edeceğiz? Dersin geri kalanında bu üçüncü unsurdaki farklılıkları izleyeceğiz.
:::

---

## Durum Uzayı Manzarası

- Durum uzayını **topografik harita** olarak düşünün
- Her nokta = bir durum · Yükseklik = durumun **değeri** (objective function)
- Amaç: **global maksimuma** (veya minimuma) ulaşmak

| Tuzak | Ne oluyor | Sonuç |
|---|---|---|
| **Yerel maksimum** | Çevresiyle en iyi ama global değil | Ajan takılır |
| **Plato** | Tüm komşular eşit değerde | Yön yok |
| **Sırt** | Dar çıkıntı boyunca dik eğim | Zigzag, yavaş ilerleme |

<!-- TODO: State-space landscape diyagramı — global/yerel maks, plato, sırt işaretli -->

::: {.notes}
Bu metafor yerel aramanın doğasını anlamak için çok faydalı. Yükseklik amaç fonksiyonuna karşılık geliyorsa en yüksek tepeyi, maliyete karşılık geliyorsa en derin vadiyi arıyoruz. Sorun şu: arama yalnızca komşulara baktığı için bu üç tuzaktan herhangi birine düşebilir. Yerel maksimumda ajan takılır çünkü her komşu daha kötü. Platoda yön bilgisi sıfır — nereye giderse gitsin değer değişmiyor. Sırtta ise doğru yön var ama adım yapısı ona izin vermiyor, zigzag zorunlu. Eksiksiz bir algoritma varsa her zaman hedef bulur; optimal bir algoritma global optimumu bulur. Yerel arama ikisini de garanti etmiyor.
:::

---

## Hill Climbing — Tepe Tırmanma

- Her adımda en iyi komşuya geç; daha iyi komşu yoksa **dur**
- Mevcut durumun yakın komşularının ötesine **bakmaz**
- Geri dönüş mekanizması **yok**

```
function HILL-CLIMBING(problem) returns a state
  current ← problem.INITIAL-STATE
  loop do
    neighbor ← highest-valued successor of current
    if neighbor.VALUE ≤ current.VALUE then return current
    current ← neighbor
```

::: {.notes}
Hill climbing önceki haftalardaki best-first search'e benzer ama kritik bir farkla: yalnızca h(n) değerlendirmesine göre hareket eder, g(n) yol maliyetini kullanmaz. Frontier tutmaz, yol hatırlamaz. Bu onu çok hızlı yapar — ama kırılgan. Bir defa yerel maksimuma ulaştığında geri dönemez, alternatif yol deneyemez. Pseudocode'a dikkat edin: döngü yalnızca komşu kesinlikle daha iyiyse devam eder; eşit veya kötüyse durur. "Greedy local search" da denen bu yaklaşım, üç unsur çerçevesinde en basit ilerleme kuralıdır.
:::

---

## Hill Climbing: 8-Queens Üzerinde

- **h** = birbirine saldıran vezir çiftlerinin sayısı · Hedef: h = 0
- Başlangıç: h = 17 → en iyi komşu h = 12 → birkaç adımda h = 1
- h = 1'de: tek çift sorunlu ama **her olası tek-vezir hareketi h'yi artırıyor**
- Algoritma **yerel minimumda takıldı**

---

---

:::: columns  
::: column  

<div data-anim="custom" data-src="chessboard.js" data-css="chessboard.css"
     data-queens="3,2,1,4,3,2,1,2" data-label="Yerel Minimum" data-editable="true"></div>
     
:::  
  
::: column  


<div data-anim="custom" data-src="chessboard.js" data-css="chessboard.css"
     data-queens="0,5,1,4,6,3,7,2" data-label="Yerel Minimum" data-editable="true"></div> 

:::  
:::



::: {.notes}

Yukarıdaki konumda bazı hamleler bizi daha kötü konuma götürürken bazıları daha iyi konuma götürür. Bu örnekte bir adımda minimum h = 12 olmaktadır.

:::

<!-- TODO: 8-queens tahtası — h=17 ve h=1 durumları yan yana, hücrelerde h değerleri -->

::: {.notes}
Somut bir senaryo izleyelim. Rastgele başlangıçta h=17 — yani 17 vezir çifti birbirine saldırıyor. Steepest-ascent hill climbing 56 komşuyu değerlendiriyor, en iyisini seçiyor: h=12. Birkaç adımda h=1'e kadar iniyor — neredeyse çözüm. Ama h=1 durumunda tek bir vezir çifti sorunlu olmasına rağmen, 56 komşunun hiçbiri h'yi düşürmüyor. Her hamle ya h'yi aynı bırakıyor ya artırıyor. Algoritma burada duruyor. Bu, yerel aramanın temel kırılganlığının somut gösterimidir: çok yaklaşabilirsiniz ama son adımı atamazsınız.
:::

---

## Hill Climbing: Performans ve Takılma

- 8-queens'de steepest-ascent: **%14 başarı**, %86 yerel minimuma takılıyor
- Her başarılı deneme ortalama **4 adım**
- **Sideways move** izni eklenirse: başarı %14 → **%94**
  - Ama maliyet artar: başarılı ortalama 21 adım, başarısız 64 adım

::: {.notes}
8^8 ≈ 17 milyon durumluk uzayda %14 başarı oranı düşük görünebilir ama her deneme sadece 4 adım sürüyor — çok ucuz. Sideways move fikri ilginç bir ara çözüm: eşit değerdeki komşuya geçmeye izin verirseniz platoları aşma şansı doğuyor ve başarı %94'e çıkıyor. Ama bedeli var: başarısız denemelerin ortalama uzunluğu 64 adıma çıkıyor. Plato üzerinde yürümek ya çıkışa götürüyor ya uzun süre döndürüyor. Asıl soru şu: takılmayı nasıl sistematik olarak çözeriz?
:::

---

## Yerel Maksimumdan Kaçış

**Random-restart** — merkezde olan strateji:

- Takılınca rastgele yeni başlangıç noktası seç, tekrar tırman
- p ≈ 0.14 başarı → ortalama **7 deneme** → toplamda ~22 adım
- Basit, ucuz, güçlü: her başarısız deneme sadece ~4 adım maliyetinde

Diğer varyantlar:

| Varyant | Fikir |
|---|---|
| **Stochastic HC** | Daha iyi komşular arasından rastgele seç |
| **First-choice HC** | İlk bulduğun daha iyi komşuya geç (b çok büyükse pratik) |

::: {.notes}
Random-restart hill climbing yerel maksimumlara karşı en basit ama en etkili mekanizmadır. Mantığı şu: eğer başarı olasılığı p ise, ortalama 1/p denemede çözüm bulunur. 8-queens'de p≈0.14, her deneme ~4 adım: toplamda yaklaşık 22 adımda çözüm. 17 milyon durumluk uzayda bu etkileyici bir performans. Stochastic ve first-choice varyantları farklı yaklaşımlar: stochastic, bazı manzaralarda steepest-ascent'ten daha iyi sonuç verir çünkü en iyiye takılmak yerine çeşitlilik sağlar. First-choice ise komşu sayısı çok büyük olduğunda tüm komşuları karşılaştırmak yerine ilk daha iyiyi kabul eder — pratik bir kestirme. Ama bunların hiçbiri yerel maksimum sorununu kökten çözmez; bunun için farklı bir fikir gerekiyor.
:::

---

## Simulated Annealing — Motivasyon

- Hill climbing: aşağı hamle yapmak istemediği için **yerel maksimumda takılıyor**
- Tamamen rastgele yürüyüş: tam ama son derece **verimsiz**
- SA = **hill climbing'in hızlı tırmanması** + **random walk'ın keşif gücü**

::: {.notes}
Hill climbing'in sorunu net: yukarı doğru gidiyor ama bir defa tepeye varınca orada kalıyor, çünkü kötü hamle yapmayı reddediyor. Öte yandan tamamen rastgele yürüyüş — her adımda rastgele komşuya geç — tamdır ama çözüme ulaşması astronomik süre alır. Simulated annealing bu iki ucun dengesini kurar. İsim fizikten geliyor: metallurjide tavlama işleminde metal yavaşça soğutularak kristal yapının düşük enerji durumuna ulaşması sağlanır. Hızlı soğutursanız kristaller düzensiz kalır, yerel minimumda takılırsınız. Yavaş soğutursanız düzenli yapıya ulaşırsınız — global minimum.
:::

---

## Simulated Annealing — Algoritma

```
function SIMULATED-ANNEALING(problem, schedule) returns a state
  current ← problem.INITIAL-STATE
  for t = 1 to ∞ do
    T ← schedule(t)
    if T = 0 then return current
    next ← randomly selected successor of current
    ΔE ← next.VALUE − current.VALUE
    if ΔE > 0 then current ← next
    else current ← next only with probability e^(ΔE/T)
```

::: {.notes}
Pseudocode'u adım adım okuyalım. Başlangıç çözümü oluşturuluyor. Her iterasyonda sıcaklık T soğuma çizelgesinden okunuyor; T sıfıra düştüğünde algoritma duruyor. Kritik fark 6. satırda: komşu rastgele seçiliyor — steepest-ascent değil. Eğer komşu daha iyiyse her zaman kabul ediliyor. Eğer daha kötüyse, e^(ΔE/T) olasılığıyla kabul ediliyor. Hill climbing'den tek fark bu son satır: kötü hamlelere kontrollü izin verme. Soğuma çizelgesi T'nin nasıl düşeceğini belirler ve algoritmanın en kritik tasarım kararıdır.
:::

---

## SA — Kabul Formülünün Üç Sezgisi

**Kötü hamle kabulü:** e^(ΔE/T) olasılığıyla

- ΔE küçük negatif, T büyük → olasılık yüksek → **başta özgürce keşfet**
- ΔE küçük negatif, T küçük → olasılık ≈ 0 → **sonda yalnızca iyileştir**
- ΔE çok negatif (felaket hamle) → T ne olursa olsun olasılık düşük

<!-- TODO: Kabul olasılığı grafiği — T ekseninde farklı ΔE eğrileri -->

::: {.notes}
Formülün sezgisini üç durumda düşünün. Birincisi: başlangıçta sıcaklık yüksek, küçük kötü hamleler büyük olasılıkla kabul ediliyor — algoritma uzayı özgürce keşfediyor. İkincisi: sıcaklık düştükçe aynı kötü hamlenin kabul olasılığı sıfıra yaklaşıyor — algoritma artık yalnızca iyileştirme yapıyor, hill climbing gibi davranıyor. Üçüncüsü ve sıklıkla gözden kaçan: ΔE çok negatifse, yani hamle felaketse, T yüksek bile olsa olasılık düşük kalır. Formül "başta her şeyi kabul et" demiyor; kötülüğün derecesine de duyarlı. Bu üçüncü sezgi SA'yı tamamen rastgele yürüyüşten ayıran şeydir.
:::

---

## SA — Özellikler ve Uygulamaları

- **Teori:** T yeterince yavaş azaltılırsa → global optimuma yaklaşma olasılığı 1'e yaklaşır
- **Pratik:** "Yeterince yavaş" kabul edilemez uzunlukta olabilir; çizelge deneysel ayarlanır
- Soğuma çizelgesi kritik: çok hızlı → yerel maks; çok yavaş → çok uzun süre
- **Uygulamalar:** VLSI yerleşimi · çizelgeleme · havayolu planlaması · protein konfigürasyonu

::: {.notes}
Teorik garanti etkileyici ama pratikte aldatıcı: "yeterince yavaş" soğutma, pratikte kabul edilemeyecek kadar uzun süre anlamına gelebilir. Evrensel bir formül yok; iyi bir soğuma çizelgesi tasarımı probleme özgü ve deneysel olarak ayarlanır. SA 1980'lerde kombinatoryal optimizasyonun standart aracı oldu. VLSI devre yerleşiminden fabrika çizelgelemesine, havayolu rotalarından proteinlerin minimum enerji konfigürasyonuna kadar geniş bir uygulama alanı var. Bugün bile hiperparametre optimizasyonunda SA varyantları kullanılıyor.
:::

---

## Local Beam Search

- Tek durum yerine aynı anda **k durum** takip et
- Her adımda: tüm k durumun tüm komşuları üret → **en iyi k tanesi** seç
- Random-restart'tan farkı: k arama **bağımsız değil** — bilgi paylaşımı var

| k değeri | Davranış |
|---|---|
| k = 1 | Hill climbing |
| k = ∞ | Breadth-first search |
| Pratik k | İkisi arasında ayarlanabilir denge |

::: {.notes}
Local beam search aynı anda k farklı noktadan arama yapar, ama bunlar bağımsız paralel aramalar değil. Her adımda tüm k durumun tüm komşuları tek havuza giriyor ve en iyi k tanesi seçiliyor. İyi bir bölge bulan arama dizisi diğerlerini de o bölgeye çekiyor; kötü bölgedekiler hızla terk ediliyor. k, bellek ve zaman bütçesi ile arama kapsamı arasında bir kontrol düğmesidir. Zayıflığı: zamanla tüm k durum aynı bölgeye yığılabilir — çeşitlilik ölür. Stochastic beam search bunu olasılıklı seçimle çözmeye çalışır: en iyileri deterministik seçmek yerine, daha iyi durumların daha yüksek olasılıkla seçildiği bir mekanizma kullanır. Doğal seçilim analojisi: iyi bireyler daha çok ürer ama kötüler de şans tanır.
:::

---

## Kapanış: Yerel Arama Ailesi

| Algoritma | İlerleme kuralı | Güçlü yön | Zayıf yön |
|---|---|---|---|
| **Hill climbing** | En iyi komşu | Hızlı, basit | Yerel maks'ta takılır |
| **Simulated annealing** | Rastgele komşu + kontrollü kabul | Yerel maks'tan kaçar | Çizelge tasarımı kritik |
| **Local beam search** | k paralel + en iyi k seçim | Bilgi paylaşımı | Çeşitlilik kaybı riski |

Aynı problem tipine — **yolun değil son durumun önemli olduğu** optimizasyon — üç farklı tasarım cevabı.

**Sıradaki soru:** Ya çevre pasif değilse? Ya her hamlemizden sonra bir **rakip**  bize en ters gelecek karşılığı veriyorsa?

::: {.notes}
Bu derste yerel aramanın üç temel algoritmasını aynı çerçevede gördük. Üçü de aynı üç unsur üzerine kurulu: başlangıç noktası, komşuluk yapısı, ilerleme kuralı. Fark yalnız üçüncü unsurda — ilerleme kuralında. Hill climbing hızlı ama kırılgan; simulated annealing kötü hamlelere kontrollü izin vererek yerel maksimumdan kaçar; beam search çoklu adayla ilerleyerek bilgi paylaşımı sağlar. Bir sonraki derste bambaşka bir problem yapısına geçeceğiz: ortamın artık pasif olmadığı, bir rakibin aktif olarak bize karşı oynadığı durumlar — düşmanca arama.
:::
