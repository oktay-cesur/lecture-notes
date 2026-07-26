---
title: Aramada Bağlam ve Motivasyon
subtitle: Bilgisiz Aramanın Sınırları ve Sezgisel Aramaya Geçiş
type: presentation
author: Öğr. Gör. Oktay Cesur
date: today
execute:
  echo: false
---


## Bu Yöntemler Nelere Çözüm Getirdi?

- **Navigasyon:** Harita üzerinde rota bulma
- **Bulmacalar:** 8-puzzle, 15-puzzle — algoritmaların test zemini
- **Planlama:** Robotik montaj sıralaması, lojistik — eylem dizisi üretme
- **Getirdiği üç şey:**
  - Tamlık garantisi — çözüm varsa bulunur
  - Maliyet optimizasyonu — en iyi yol garanti altında
  - Exponential uzayda yönetilebilir arama — IDS ile milyarlarca durumu belleğe sığmadan taramak

::: {.notes}
Bu algoritmalar olmadan ne vardı? Rastgele deneme ve sezgisel ama sistematik olmayan yöntemler. İkisi de tamlık garantisi vermiyordu — çözüm var ama bulunamayabilirdi.

Arama, karar almayı kör denemeden çıkarıp sistematik bir sürece dönüştürdü. Bu cümle aynı zamanda AI'ın 1950-1980 döneminin özetini veriyor — "zeki davranış = iyi arama" paradigması buradan geliyor.

IDS'nin getirdiği somut olarak: d=16'da BFS fiziksel olarak imkansız (10 exabyte), IDS 156 kilobayt bellekle çalışıyor. Milyarlarca durum, cep telefonu kadar bellekle taranabiliyor.
:::

---


## Tarihsel Yer

- **1950–1980:** AI'ın ana paradigması: "Zeki davranış = iyi arama"
- GPS (General Problem Solver), Logic Theorist, erken robotik planlama
- **A\* (1968)** — Hart, Nilsson, Raphael
  - Bugün hâlâ kullanılıyor: oyun motorları, harita uygulamaları, robotik

::: {.notes}
1950'lerden 1980'lere kadar AI'ın ana paradigması buydu. Zeka tanımlanması zor bir kavram — ama arama somut ve formalize edilebilir. Satranç oynayan, teorem ispatlayan, labirent çözen sistem = zeki sistem.

Bu dönemin somut sistemleri: Logic Theorist (1956, Newell ve Simon), GPS (1957, genel problem çözücü), STRIPS (1971, robotik planlama dili). Bunların hepsi öğrendiğiniz algoritmaların doğrudan uygulamaları.

A* neden özel? 1968'de Hart, Nilsson, Raphael ilk kez heuristik fonksiyonu formal olarak tanımladı ve optimallik ispatını verdi. 55+ yıl sonra hâlâ oyun motorlarında (NPC pathfinding), harita uygulamalarında (Google Maps), robotik navigasyonda (ROS navigation stack), VLSI tasarımında aktif. Neden ölmedi? Çünkü varsayımların geçerli olduğu problem sınıfı hâlâ var ve büyük.
:::

---


## Neden Yetersiz Kaldı?

- Bilgisiz arama algoritmalarının tümü şu varsayımlar üzerine kurulu:

| Varsayım | Gerçekte | Gereksinim |
|----------|----------|------------|
| Tam gözlem | Sensörler gürültülü, eksik | POMDP |
| Bilinen model | Çoğu zaman model yok | Model-free RL |
| Deterministik | Stokastik sonuçlar var | Olasılıksal planlama |
| Ayrık uzay | Robotik, fiziksel kontrol sürekli | Continuous control |

- Bunun ötesinde: durum uzayı büyüdükçe üstel büyüme engellenemez
- Satranç: $10^{120}$ durum — bilgisiz arama doğrudan uygulanamaz

::: {.notes}
Dört varsayımın her birinin nerede bozulduğuna bakalım.

Tam gözlemlenebilirlik: grafta ajan her an hangi şehirde olduğunu biliyor. Gerçekte GPS sinyal kaybedebilir, kamera sis altında göremez. Kısmen gözlemlenebilir ortamda ajan "neredeyim?" sorusunu cevaplayamıyor.

Bilinen model: grafta Git(Bursa) her zaman In(Bursa) üretiyor. Gerçekte robot yeni bir ortama girdi, harita yok — hangi eylemin ne yapacağı bilinmiyor. Model bilinmiyorsa arama neyin üzerinde çalışacak?

Deterministik: grafta sonuçlar kesin. Gerçekte rüzgarda uçan drone Git(Kuzey) dedi ama sürüklendi. Stokastik sonuçlar kapalı döngü varsayımını çökertiyor.

Ayrık uzay: grafta durumlar sayılabilir — In(İstanbul), In(Bursa). Gerçekte robot kolu 7 eklemli, her eklem sürekli açı değeri alıyor — sonsuz durum uzayı.

Ama varsayımlar geçerli olsa bile ayrı bir sorun var: üstel büyüme. Grafımızda 13 şehir, yönetilebilir. Satranç'ta 10^120 durum — IDS bile çalışamaz. Bu sorun bilgisiz aramayla çözülemiyor.
:::

---


## Modern AI ile Köprü

- **AlphaZero:** MCTS + sinir ağıyla öğrenilmiş değerlendirme fonksiyonu
  - Klasik ağaç araması, ama h(n) artık elle tasarlanmıyor — **öğreniliyor**
- **Robotik planlama:** PDDL tabanlı klasik planlama hâlâ aktif
  - Güvenlik gerektiren, açıklanabilir karar almanın zorunlu olduğu alanlarda

::: {.notes}
Bu yöntemler kaybolmadı, dönüştü.

AlphaZero'nun satranç'ta 10^120 durumu nasıl çözdüğüne bakın: MCTS (Monte Carlo Tree Search) + öğrenilmiş değerlendirme. MCTS klasik ağaç araması — düğüm genişletme, geri yayılım, sınır yönetimi. Öğrendiğiniz her şey burada var, sadece ölçeklendirilmiş. Fark: h(n) rolündeki değerlendirme fonksiyonu elle tasarlanmıyor, milyonlarca oyundan öğreniliyor.

PDDL tabanlı planlama neden hâlâ aktif? Derin öğrenme her problemi çözmüyor — özellikle güvenlik kritik alanlarda. Havacılık, tıbbi robotik, endüstriyel otomasyon: "Bu plan neden bu kararı verdi?" sorusuna cevap verebilmeniz gerekiyor. Sinir ağı bunu cevaplayamıyor — klasik planlama cevaplayabiliyor.

LLM bağlantısı — öğrenciler bunu soracak: "ChatGPT de arama yapıyor mu?" Örtük olarak evet — token uzayında. ReAct, chain-of-thought: adım adım düşünme = örtük arama. Henüz formal değil — aktif araştırma alanı.
:::

---


## Üstel Büyümeyi Aşmak: Sezgisel Arama Motivasyonu

- Bilgisiz arama algoritmaları **kör** — hangi yönün hedefe yakın olduğunu bilmiyor
- UCS grafımızda 12 düğüm açtı — Tekirdağ'ı, İzmir'i, Afyon'u gereksiz yere keşfetti
- Peki Ankara'nın **hangi yönde** olduğunu bilseydi?
- h(n): bir düğümden hedefe tahmini kalan maliyet — **sezgisel fonksiyon**
- Bu ek bilgi aramayı yönlendiriyor: gereksiz dalları budayarak verimliliği artırıyor

<div id="search-heuristic-table"></div>

::: {.notes}
Grafımızdaki UCS sonucuna bakın: 12 düğüm açtı, optimal yolu buldu ama Tekirdağ, İzmir, Afyon, Samsun gibi Ankara'dan uzak düğümleri de keşfetti. Neden? Çünkü g(n) değerleri düşük — ucuz ama yanlış yönde.

A* aynı grafta 9 düğüm açtı — aynı optimal yolu buldu. 3 düğüm daha az. Neden? Çünkü f(n) = g(n) + h(n) kullanıyor. Tekirdağ'ın h değeri 450 — Ankara'ya çok uzak. f = 100 + 450 = 550 — yüksek f değeri Tekirdağ'ı sıralamanın sonuna atıyor. UCS bunu göremez çünkü h bilgisi yok.

Bu, sezgisel aramanın temel motivasyonu: probleme özgü bilgiyi (h(n)) kullanarak arama uzayını daraltmak. İyi bir sezgi arama süresini üstelden doğrusala indirebilir.

Sezgisel arama konusunda ele alacağımız sorular: h(n) nereden geliyor? Nasıl tasarlanır? Ne zaman optimal garanti eder? A* bu soruların cevabı.
:::

---


## Kapanış

- _"Model bilinmediğinde ne anlama geldiğini görmek için, önce modelin bilindiği durumu kavramak gerekiyor."_
- Her varsayımın kaldırılması yeni bir alan doğuruyor:
  - Deterministik çöküyor → MDP, olasılıksal planlama
  - Tam gözlem çöküyor → POMDP
  - Bilinen model çöküyor → model-free RL, Q-learning
  - Ayrık uzay çöküyor → continuous control, policy gradient
- Bu konularda öğrendikleriniz hem A\*'ın temeliydi, hem AlphaZero'nun iskeletidir, hem de RL'nin neden gerekli olduğunu anlamak için şarttır.

::: {.notes}
Öğrenciye verilecek zihinsel çerçeve: "Şu an öğrendikleriniz en ideal durumu gösteriyor — her şey biliniyor, çevre kooperatif. Gerçek AI problemleri bu idealden ne kadar uzaklaştığını ölçmekle başlıyor. Her varsayımın kaldırılması bir soru: artık ne yapacağız?"

Bilgisiz aramanın karşılaştırma tablosundaki hiçbir satırda h(n) yok — problem hakkında ek bilgi kullanılmıyor. Tüm algoritmalar kör. h(n) eklenince: IDS → IDA*, UCS → A*. Aynı tablonun sezgisel versiyonu çok daha iyi görünecek.
:::
