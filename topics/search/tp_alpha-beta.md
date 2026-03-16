---
title: "Alpha-Beta Budama ve Modern Oyun Yapay Zekası"
subtitle: "BİM444 — Hafta 5 · Ders 3"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-03-23
execute:
  echo: false
---

## Minimax Neden Ölçeklenmiyor?

Önceki derste minimax kararı nasıl verdiğini gördük.

Sorun: **tüm ağacı geziyor**.

- Satranç: b≈35, m≈100 → **10^120 durum** → fiziksel olarak imkânsız

İki temel çözüm:

1. Bazı dalları **hiç açmadan** kesmek — karar değişmeden
2. Terminale gitmeden **yaklaşık değerleme** yapmak

::: {.notes}
Geçen derste minimax mekanizmasını anladık: değerler yapraktan köke taşınıyor, MAX büyüğü seçiyor, MIN küçüğü. Küçük ağaçlarda mükemmel çalışıyor.

Ama sayılara bakın: satranç için 10^120 durum. Evrendeki atom sayısı ~10^80. Tam minimax uygulanabilir değil. Deep Blue bile tam minimax yapmıyordu — yaklaşık bir versiyonunu çalıştırıyordu.

Bugünkü ders bu iki çözüm fikrinin üzerine kurulu. Birincisi alpha-beta budaması: sonucu değiştirmeyen dalları hiç incelememek. İkincisi değerlendirme fonksiyonu: terminale kadar gitmek yerine belli bir derinlikte durarak pozisyonu yaklaşık puanlamak.
:::

---

## Alpha-Beta Fikri

Bazı dalların sonucu **kesinlikle etkilemeyeceği** önceden bilinebilir.

Bu dalları hiç açmadan kes → **aynı karar, daha az hesap**

::: {.notes}
Sezgi şu: minimax bir dalı incelerken, başka bir daldan zaten daha iyi bir seçenek bulunmuşsa bu dalı daha ileri götürmeye gerek yok. MAX zaten daha iyisini biliyor; MIN zaten daha kötüsünü biliyor.

Alpha-beta budaması minimax kararını değiştirmiyor. Hangi hamlenin seçileceği değişmiyor; sadece gereksiz alt ağaçlar hiç gezilmiyor. Bu çok önemli bir nokta: budama sonucu bozmaz, sadece hesabı kısaltır.
:::

---

## Budama Örneği

<div
  data-anim="custom"
  data-src="alpha-beta-prune.js"
  data-css="alpha-beta-prune.css"
></div>

**Adım adım:**

1. Sol dal incelenir → MIN sol = min(3,5) = 3 → **α = 3**
2. Orta dal incelenir → MIN orta = min(6,9) = 6 → **α = 6**
3. Sağ dal: ilk yaprak = 1 → MIN sağ ≤ 1 < α=6 → MAX bu dalı seçmez
4. **7 yaprağı incelenmeden kesildi**

::: {.notes}
Geçen dersteki ağacı kullanıyoruz. Sol dalı inceliyoruz: MIN 3 ve 5 arasından 3'ü seçer. MAX sol daldan 3 biliyor; α=3 güncellendi. Orta dala geçiyoruz: MIN 6 ve 9 arasından 6'yı seçer. α=6'ya yükseldi — MAX artık en az 6 garantileyebilir.

Şimdi sağ dala geliyoruz. İlk yaprağı görüyoruz: 1. MIN bu düğümde en iyi ihtimalle 1 değerini verebilir — çünkü MIN küçüğü seçiyor ve zaten 1 görüldü. MAX şunu biliyor: "Bu daldan gelen değer ≤1, ama ben zaten 6 garantiledim." MAX bu dalı seçmez. Dolayısıyla 7 yaprağını açmaya gerek yok — sonucu değiştirmiyor.

Bu kesme kararı α değeri sayesinde alındı: α=6 olan bir MAX için ≤1 değer üreten dal ilgisiz.
:::

---

## Alpha ve Beta Sınırları

- **α (alpha):** MAX'ın bulduğu en iyi değer — **alt sınır**
- **β (beta):** MIN'in bulduğu en iyi değer — **üst sınır**

**Budama koşulları:**

- MIN düğümünde `v ≤ α` → dal kesilir — MAX bu yolu zaten seçmez
- MAX düğümünde `v ≥ β` → dal kesilir — MIN bu yolu zaten seçmez

::: {.notes}
Alpha ve beta iki izleme değeri; arama boyunca sürekli güncelleniyor. Alpha MAX'ın garanti edebildiği alt sınırı tutuyor: "Buraya kadar gördüğümde en az bu kadarı alabilirim." Beta MIN'in garanti edebildiği üst sınırı tutuyor: "Buraya kadar gördüğümde en fazla bunu veririm."

Budama koşuluna bakın: MIN düğümünde bir değer α'dan küçük eşit bulunursa dal kesilir. Çünkü MAX zaten α kadarını garantilemiş; MIN'in bu dalda vereceği değer α'dan düşük olacak — MAX bu dalı seçmez. Simetrik olarak MAX düğümünde β'dan büyük eşit değer bulunursa dal kesilir: MIN zaten β kadarını garantilemiş; bu daldan daha yüksek bir değer gelse bile MIN seçmez.

Bu iki koşul birlikte hem MAX hem MIN tarafında gereksiz alanı kesiyor.
:::

---

## Sıralama Neden Önemli?

Alpha-beta'nın kazancı doğrudan **inceleme sırasına** bağlı:

| Hamle sıralaması | Zaman karmaşıklığı |
|---|---|
| **Mükemmel** (en iyi hamleler önce) | O(b^(m/2)) |
| **Rastgele** | O(b^(3m/4)) |
| **En kötü** (en kötü hamleler önce) | O(b^m) — budama yok |

Mükemmel sıralamada: satranç b=35 → etkin b≈6 · **aynı sürede iki kat daha derin**

::: {.notes}
Mükemmel sıralama ne demek? En iyi hamlelerin önce incelenmesi. MAX için en yüksek değeri veren hamle ilk açılırsa α hızlı yükseliyor ve sonraki dallarda daha agresif budama yapılabiliyor. MIN için simetrik: en düşük değeri veren hamle ilk açılırsa β hızlı düşüyor.

Pratikte mükemmel sıralamayı önceden bilemeyiz — bunu bilseydik zaten cevabı bilirdik. Ama iyi tahminlerle yaklaşabiliriz. Killer heuristic bunun bir örneği: aynı derinlik seviyesinde daha önce iyi kesme sağlamış hamleyi tekrar dene. Iterative deepening ile sıralama da kullanılıyor: önceki daha yüzeysel aramada iyi bulunan hamleler bir sonraki aramada önce inceleniyor.

Tabloya bakın: mükemmel sıralamada O(b^(m/2)). Satranç için bu b=35'ten etkin b≈6'ya düşmek demek — aynı sürede ağacın iki kat daha derine bakılabilmesi.
:::

---

## Kesme ve Değerlendirme Fonksiyonu

Alpha-beta sonrasında da ağaç büyük — başka araç gerekiyor:

- **Kesme testi `CUTOFF(s, d)`:** belli derinlikte dur
- **Değerlendirme fonksiyonu `EVAL(s)`:** terminal olmayan duruma sayısal değer ver

**H-Minimax** = Minimax + kesme testi + eval

::: {.notes}
Alpha-beta budaması teorik sınırı O(b^(m/2))'ye indiriyor ama satranç için bu bile yetersiz. O zaman ikinci araç devreye giriyor: terminale kadar gitmek yerine belli bir derinlikte dur, o noktadaki konumu eval fonksiyonuyla puan.

H-Minimax'ta yapraktan köke yayılım mantığı aynı kalıyor; fark şu: "yapraklar" artık gerçek terminal durumlar değil, kesme derinliğindeki pozisyonlar. Ve bu pozisyonların değerleri gerçek fayda değil, eval'in tahmini.

Eval fonksiyonu ne kadar iyi ise o kadar iyi karar veriliyor. Ama eval hesaplamak hızlı olmalı — derin aramada binlerce pozisyon puanlanacak. Hız ve kalite arasındaki bu denge eval tasarımının çekirdeği.
:::

---

## Satrançta Eval Fonksiyonu

| Taş | Değer |
|---|---|
| Vezir | 9 |
| Kale | 5 |
| Fil / At | 3 |
| Piyon | 1 |

Üzerine eklenen: merkez kontrolü · kale açıklığı · şah güvenliği · piyon yapısı

::: {.notes}
Satranç eval fonksiyonunun temelinde madde sayısı var. Her taşın sayısal değeri toplanıyor ve pozisyon puanlanıyor. Ama bu kaba bir başlangıç; iyi bir eval üzerine konum değerleri ekliyor. Örneğin merkezi kontrol eden piyonlar köşedekilerden daha değerli; açık sütundaki kale kapalı sütundakinden daha tehlikeli.

İyi bir eval üç koşulu sağlar: terminal durumlarda gerçek fayda değeriyle aynı sıralamayı vermeli; hesaplaması hızlı olmalı; gerçek kazanma olasılığıyla güçlü korelasyonu olmalı. Deep Blue'da 8.000'den fazla elle yazılmış özellik vardı. AlphaZero'da bu özelliklerin tamamı sinir ağı tarafından öğrenildi — elle hiçbir şey yazılmadı. Bu dönüşümün anlamına dersin sonunda döneceğiz.
:::

---

## Yataysallık Etkisi (Horizon Effect)

Sabit derinlikte kesince: tehlikeli durum **kesim noktasının hemen ötesinde** kalabilir

| | Ajan ne görüyor | Gerçekte |
|---|---|---|
| d=4'te kes | Pozisyon dengeli | d=5'te vezir kaybı var |

- Ajan tehlikeyi görmüyor → **sahte iyi değerlendirme**
- Çözüm: **quiescence search** — taktiksel açıdan sakin olmayan pozisyonları daha derine tara

::: {.notes}
Horizon effect sabit derinlikte kesmenin doğal bir sonucu. Tehlikeli bir hamle tam kesim noktasının hemen ötesindeyse ajan bunu göremez; pozisyonu olduğundan iyi değerlendirir ve yanlış karar verir.

Klasik örnek: satranç'ta ele geçirme dizisi. d=4'te kesiyorsunuz; pozisyon dengeli görünüyor. Ama d=5'te bir vezir kaybı var ve bunu önlemenin yolu yok. Quiescence search bunu kısmen çözüyor: yakalama, şah, tehdit gibi taktiksel durumlar varsa aramayı otomatik olarak biraz daha derine taşı. Horizon etkisini tamamen çözmez ama pratikte önemli ölçüde azaltır; modern satranç motorlarında standart bir bileşen.
:::

---

## Kısa Ufuk: Stochastic Games

Tavla gibi oyunlarda şans unsuru var: **zar atışı**

Oyun ağacına **şans düğümleri** ekleniyor:

MAX → chance → MIN → chance → MAX → ...

**ExpectiMinimax:** Şans düğümünün değeri = çocukların **olasılık-ağırlıklı ortalaması**

::: {.notes}
Bugüne kadar deterministik oyunlarda çalıştık: bir hamlenin sonucu kesin. Ama tavlada zarı attıktan sonra mevcut hamleler değişiyor. Bu rastgeleliği modellemek için oyun ağacına şans düğümleri ekliyoruz: MAX ve MIN katmanlarının arasına olasılık dağılımlı bir katman giriyor.

Şans düğümünün değeri beklenen değerle hesaplanıyor: her sonucun olasılığıyla ağırlıklı ortalaması. Buna ExpectiMinimax diyoruz.

Önemli bir fark: şans düğümleri varlığında eval fonksiyonunun doğrusal dönüşümlere karşı sabit olması gerekiyor. Satrançta işe yarayan bir eval tavlada çalışmayabilir — sayısal ölçek burada anlam kazanıyor.
:::

---

## Kısa Ufuk: Deep Blue'dan AlphaZero'ya

| Sistem | Eval Kaynağı | Arama |
|---|---|---|
| **Deep Blue** (1997) | Elle yazılmış ~8.000 kural | Minimax + α-β |
| **AlphaGo** (2016) | Policy + value ağı (insan verisi) | MCTS |
| **AlphaZero** (2017) | Tek ağ — self-play ile öğrenilmiş | MCTS |

**Büyük fikir:** Problem değişmedi — büyük uzayda iyi karar. Değişen: **eval'in kaynağı**.

::: {.notes}
Deep Blue'dan AlphaZero'ya giderken minimax'ın özü değişmedi: hâlâ ileriye bakıyoruz, hâlâ pozisyonları değerlendiriyoruz. Değişen şey eval fonksiyonunun kaynağı.

Deep Blue'da bu fonksiyon elle yazılmıştı: satranç ustalarının bilgisi binlerce kural olarak kodlanmıştı. AlphaGo'da policy ve value ağları insan oyunlarından öğrendi; arama için Monte Carlo Tree Search kullandı — minimax'ın istatistiksel bir versiyonu. AlphaZero ise daha radikal: insan verisi yok, sadece self-play. Kendi kendine milyonlarca oyun oynayarak hem eval fonksiyonunu hem politikayı öğrendi.

Bu köprü önemli: minimax mekanizması hâlâ merkezde ama değerlendirme artık elle tasarlanmıyor — öğreniliyor. Bu, derin öğrenme ile klasik arama arasındaki bağı gösteren en net örnek.
:::

---

## Kapanış: Bu Hafta Neyi Gördük?

**İki sınır vakası:**

- **Yerel arama:** yolun değil varış noktasının önemli olduğu durumlar
- **Düşmanca arama:** çevrenin bize karşı oynadığı durumlar

**Ortak kısıt:** Tam arama ağacı oluşturmak imkânsız — her biri farklı biçimde başa çıkıyor

_Bilgisiz aramadan A\*'a, minimax'a, AlphaZero'ya — hepsinin özünde aynı soru: çok büyük uzaylarda nasıl iyi karar alınır?_

::: {.notes}
Bu hafta iki farklı varsayım kırılmasını işledik. Yerel aramada yol-tabanlı arama varsayımı kırıldı: artık yol değil son durum önemli. Düşmanca aramada pasif ortam varsayımı kırıldı: artık ortam bize karşı oynuyor.

Her iki kırılmada da aynı temel sorunla karşılaştık: tam arama ağacı oluşturmak imkânsız. Yerel arama bunu hill climbing ve simulated annealing ile aştı — tam arama yerine akıllı yerel hareket. Düşmanca arama bunu alpha-beta ve eval ile aştı — tam minimax yerine budamalı, yaklaşık minimax.

Sonraki haftalarda bu düşünce biçimini farklı ortamlara taşıyacağız. Ama temel soru değişmiyor: büyük uzaylarda nasıl iyi karar alınır?
:::
