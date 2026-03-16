---
title: "Oyun Problemleri ve Minimax"
subtitle: "BİM444 — Hafta 5 · Ders 2"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-03-23
execute:
  echo: false
---


## Pasif Ortamdan Rakipli Ortama  
  
 Yerel aramada ortam **pasifti** — siz optimize ediyordunuz, çevre bekliyordu.  
  
 Şimdi yeni bir senaryo:  
  
 - Her hamlenizden sonra **rakip** en kötü karşılığı veriyor  
 - "İyi durum bulmak" yetmiyor → **rakibin stratejisine rağmen iyi kalmak** gerekiyor  
  
::: {.notes}  
 Yerel aramada landscape değişmiyordu; siz bir tepe üzerinde yürüyor, ortam tepkisiz bekliyordu. Şimdi farklı bir senaryo var: siz bir hamle yapıyorsunuz, sonra rakip en kötü karşılığı veriyor, sonra siz tekrar hamle yapıyorsunuz. Ortam artık aktif ve düşmanca.  
  
 Bu küçük fark her şeyi değiştiriyor. "İyi bir duruma ulaşmak" yetmiyor; çünkü rakip sizi iyi durumdan uzaklaştırmak için elinden geleni yapacak. Hedefiniz artık şu: rakip ne yaparsa yapsın, en az zarar göreceğiniz hamleyi seçmek.  
:::  
  
 ---  
  
## Oyunlar Neden Ayrı Bir Problem?  
  
 - Kendi hamlelerimizin değeri **rakibin cevabına bağımlı**  
 - "Bu iyi görünüyor" yetmez → "Rakip buna nasıl cevap verir?" sorusu zorunlu  
 - Rakibi modellememiz gerekiyor: o da rasyonel, o da ileriye bakıyor  
  
 Odak: **deterministik, tam bilgili, sıfır toplamlı, iki oyunculu** oyunlar  
  
::: {.notes}  
 Standart arama problemlerinde ortamın nasıl tepki vereceği belliydi: "bu hareketi yaparsam şu duruma geçerim." Oyun problemlerinde ortamın bir parçası başka bir ajan. Bu ajan da ileriye bakıyor, sizin hamlelerinizi biliyor ve buna en iyi karşılığı vermek için çalışıyor.  
  
 Bu yüzden oyunlar ayrı bir problem sınıfı. Sadece kendi optimal yolunuzu bulmuyorsunuz; rakibin tüm olası cevaplarını da hesaba katarak karar veriyorsunuz. Bugünkü odak en temiz durumu: iki oyuncu, deterministik hamleler, tam bilgi — her iki taraf da tahtanın tam durumunu  
 görüyor — ve sıfır toplamlı; birinin kazancı diğerinin kaybı.  
:::  
  
 ---  
  
## Formal Tanım  
  
| Unsur| Açıklama|  
|---|---|  
| **Oyuncular**| MAX (ajan), MIN (rakip)|  
| **Başlangıç durumu**| Oyunun ilk konfigürasyonu|  
| **Eylemler(s)**| O durumda geçerli hamleler|  
| **Geçiş modeli**| `RESULT(s, a)`|  
| **Terminal testi**| Oyun bitti mi?|  
| **Fayda fonksiyonu**| Terminal durumda MAX için sayısal skor|  
  
::: {.notes}  
 Oyun problemini formal olarak tanımlarken standart arama probleminin bileşenlerini alıp iki oyuncuya göre genişletiyoruz. Fark şu: artık tek bir "hedef durum" değil, iki taraf için farklı değer taşıyan terminal durumlar var. Bu terminal durumların değerini fayda fonksiyonu  
 sayısal olarak veriyor.  
  
 MAX ajan, fayda fonksiyonunu maksimize etmek istiyor. MIN rakip, aynı fonksiyonu minimize etmeye çalışıyor. Bu simetri minimax algoritmasının çekirdeği. Satrançta fayda genellikle basit: kazanç +1, beraberlik 0, kayıp −1. Bu sayısal değerler oyun ağacının yapraklarında  
 duruyor; minimax bu değerleri yapraktan köke taşıyan mekanizma.  
:::  
  
 ---  
  
## Sıfır Toplamlı Oyun  
  
 MAX +1 kazanırsa MIN −1 alır. Bir tarafın kazancı diğerinin tam kaybı.  
  
 Bu varsayım minimax mantığını temizler:  
  
 - MIN'in hedefi → fayda fonksiyonunu **minimize** et  
 - MAX'ın hedefi → fayda fonksiyonunu **maksimize** et  
 - İki hedef tamamen zıt — MIN için ayrı model kurmaya gerek yok  
  
::: {.notes}  
 Sıfır toplamlı oyun varsayımı bir basitleştirme. Gerçek hayatta her rekabet böyle değil; bazı durumlarda her iki taraf da kazanabilir. Ama satranç, tic-tac-toe, go gibi klasik oyunlar için bu varsayım tam oturuyor.  
  
 Neden önemli? Çünkü MIN için ayrı bir "ne ister?" modeli kurmamıza gerek kalmıyor. MIN'in tek hedefi fayda fonksiyonunu minimize etmek — yani MAX'ın mümkün olan en az kazanmasını sağlamak. "Rakip ne ister?" sorusunun cevabı basit: benim için en kötüyü. Bu varsayım olmadan  
 oyun teorisi çok daha karmaşık hale geliyor; bugün ele aldığımız minimax tam olarak bu sıfır toplamlı senaryoya özgü.  
:::  
  
 ---  
  
## Oyun Ağacı  
  
 - **Kök:** başlangıç durumu · **Katmanlar:** MAX → MIN → MAX → ...  
- **Yapraklar:** terminal durumlar + fayda değerleri  
  
| Oyun| Dallanma b| Derinlik m| Durum sayısı|  
|---|---|---|---|  
| Tic-tac-toe| ~5| 9| ~10^5|  
| Satranç| ~35| ~100| ~10^120|  
| Go| ~250| ~150| ~10^360|  
  
 Örneğimizde: **kök (MAX) · 3 MIN çocuğu · 6 yaprak**  
  
::: {.notes}  
 Oyun ağacı standart arama ağacından şu farkla kurulur: katmanlar art arda iki oyuncuya ait. Bir katmanda MAX hamle yapıyor, bir alt katmanda MIN cevap veriyor. Bu değişimli yapı, her katmanın farklı yorumlanması anlamına geliyor: MAX katmanında en büyük değer seçilir, MIN  
 katmanında en küçük.  
  
 Bu ağacın büyüklüğüne bakın. Tic-tac-toe için 10^5 durum — hesaplanabilir. Satranç için 10^120 — evrendeki atom sayısı ~10^80, bu değerin çok ötesinde, fiziksel olarak tam arama imkânsız. Go için 10^360. Bugün minimax algoritmasının nasıl çalıştığını anlayacağız. Asıl soru  
 şu: "Bu kadar büyük bir ağaçta minimax nasıl kullanılabilir?" Bu soruyu üçüncü derste cevaplayacağız.  
  
 Bugün küçük bir soyut ağaçla çalışacağız — kök MAX, üç MIN çocuğu, her MIN çocuğunun iki yaprağı. Yaprak değerleri: sol dal [3, 5], orta dal [6, 9], sağ dal [1, 7]. Bu ağacı iki slayt boyunca adım adım işleyeceğiz.  
:::  
  
 ---  
  
## Minimax Varsayımı  
  
 MIN **rasyonel ve düşmanca** oynuyor: MAX için en kötü sonucu üretecek hamleyi seçiyor.  
  
 MAX bu varsayımla karar veriyor:  
  
 > _"Rakibim her adımda benim için en kötüyü yapacak.  
 > Ben bunu bilerek — o en kötüyü yapsa bile — en iyi sonucu sağlayan hamleyi seçmeliyim."_  
  
::: {.notes}  
 Bu varsayım güçlü ama yerinde. Rakibin optimal oynadığını varsaymak, en kötü duruma karşı hazırlıklı olmak demek. Eğer rakip hata yaparsa zaten daha iyi bir sonuç elde edersiniz; zarar görmezsiniz. Ama rakip optimal oynuyorsa bu varsayım sizi koruyor.  
  
 "Düşmanca" kelimesine dikkat: bu rakibin kötü niyetli olduğu değil, onun da kendi faydasını optimize ettiği anlamına geliyor. Sıfır toplamlı oyunda zaten aynı kapıya çıkıyor. Bu yaklaşım minimax kararını konservatif yapıyor: en iyi hamleyi değil, en kötü durumda en iyi  
 sonucu veren hamleyi seçiyoruz. Oyun teorisinde buna maximin strateji de deniyor.  
:::  
  
 ---  
  
## Minimax Tanımı  
  
 MINIMAX(s):  
   eğer TERMINAL(s)   →  UTILITY(s) döndür  
   eğer MAX sırası    →  max { MINIMAX(RESULT(s,a))| a ∈ ACTIONS(s) }  
   eğer MIN sırası    →  min { MINIMAX(RESULT(s,a))| a ∈ ACTIONS(s) }  
  
 - Terminal değerlerden başlanır, **yapraktan köke** yayılır  
 - MAX katmanlar en büyüğü · MIN katmanlar en küçüğü seçer  
  
::: {.notes}  
 Tanım özyinelemeli. Yapraklara ulaşınca fayda değerini döndür; her iç düğümde oyuncu sırasına göre ya maksimum ya minimum seç ve bir üst düğüme aktar. Bu, sonuçların yapraktan köke taşınması demek.  
  
 Formül sade görünüyor ama mekanizmayı gizliyor. Bu özyineleme, ağacın tamamını derinlemesine geziyor. Her yaprak ziyaret edilmeden üst düğümlerin değeri hesaplanamıyor. Dolayısıyla zaman karmaşıklığı O(b^m) — tüm ağacın gezilmesi. Şimdi bu mekanizmayı somut ağacımızda adım  
 adım görelim.  
:::  
  
 ---  
  
## Geri Yayılım — Adım 1: MIN Seçiyor  
  
 > **[Görsel: 3 katmanlı oyun ağacı, MIN seçimleri vurgulanmış]**  
 > Kök: MAX · Üç MIN çocuğu (sol, orta, sağ) · Her MIN'in iki yaprağı  
 > Yaprak değerleri: sol [3, 5] · orta [6, 9] · sağ [1, 7]  
 > Gösterim: MIN düğümlerinin seçtiği değerler kutucuk içinde; diğer yapraklar soluk  
  
 MIN her dalda **en küçük değeri** seçiyor:  
  
| Dal| Yapraklar| MIN seçimi|  
|---|---|---|  
| Sol| 3, 5| **3**|  
| Orta| 6, 9| **6**|  
| Sağ| 1, 7| **1**|  
  
::: {.notes}  
 Ağacımıza bakın. Kök MAX sırası, bir alt katman MIN sırası. Sol dalda iki yaprak: 3 ve 5. MIN bu ikisi arasından hangisini seçer? 3'ü — çünkü MAX için daha kötü. Orta dalda 6 ve 9; MIN 6'yı seçer. Sağ dalda 1 ve 7; MIN 1'i seçer.  
  
 Bu adımdan sonra MIN katmanındaki üç düğümün değerleri belirlendi: 3, 6, 1. Bunlar MAX'ın görebileceği, her hamle için rakibin garantileyeceği en kötü sonuçlar.  
  
 Burada duralım: MIN düğümlerinin değerleri "rakibin bize bıraktığı en kötü durum" demek. Sol hamle yaparsak rakip bizi en fazla 3'e düşürür; ortaya gidersek 6'ya; sağa gidersek 1'e. MAX artık bu üç değer arasından seçecek.  
:::  
  
 ---  
  
## Geri Yayılım — Adım 2: MAX Seçiyor  
  
 > **[Görsel: Aynı ağaç, MAX kök seçimi vurgulanmış]**  
 > MIN katmanı değerleri [3, 6, 1] sabitlenmiş · Kök MAX bu değerleri görüyor  
 > Gösterim: Orta dal kalın çizgi ile kökten aşağıya; sol ve sağ dallar soluk  
  
 MAX **en büyük değeri** seçiyor:  
  
 max(3, 6, 1) = **6** → orta hamle optimal  
  
 **Minimax kararı:** Orta hamleyi seç — rakip ne yaparsa yapsın, en az 6 elde edersin.  
  
::: {.notes}  
 MAX şimdi elindeki bilgiye bakıyor: sol hamle yaparsam rakip beni 3'e düşürür; orta hamle yaparsam 6'ya; sağ hamle yaparsam 1'e. MAX'ın optimal kararı açık: orta hamle.  
  
 Burada minimax'ın çekirdeğini gördük. Değerler yapraktan köke taşındı: MIN katmanı "rakip sizi nereye götürür?" sorusunu yanıtladı; MAX kökü "o sonuçların en iyisi hangisi?" sorusunu yanıtladı.  
  
 Minimax kararı bu: orta hamleyi seç. Rakip her zaman en kötüyü yapacak varsayımıyla bile, bu elde edilebilecek en iyi garantili sonuç. Orta hamle hem sola hem sağa kıyasla daha yüksek bir taban değeri sunuyor.  
:::  
  
 ---  
  
## Özellikler ve Sınır  
  
 - **DFS traversal:** O(b^m) zaman · O(bm) yer  
 - **Tam ve optimal** — rakip de optimal oynuyorsa  
 - Satranç: b≈35, m≈100 → **10^120 durum → tam arama imkânsız**  
  
::: {.notes}  
 Minimax DFS gibi çalışıyor: tüm ağacı derinlemesine geziyor. Bellek avantajı var — O(bm), BFS'in O(b^m)'ine kıyasla çok daha makul. Ama zaman hâlâ O(b^m); büyük oyunlarda bu imkânsız.  
  
 Tam ve optimal olma koşuluna dikkat: "rakip de optimal oynuyorsa." Bu koşul altında minimax garantili optimal. Rakip hata yaparsa daha iyi sonuç gelir; zarar yok. Ama optimal rakibe karşı başka hiçbir strateji daha iyi sonuç veremez.  
  
 Satranç için sayılara bakın: 10^120 durum, evrendeki atom sayısının çok ötesinde. Minimax teorik olarak güçlü ama pratik olarak sınırlı. Sıradaki soru tam olarak bu.  
:::  
  
 ---  
  
## Sıradaki Adım  
  
 Tam minimax büyük oyunlar için imkânsız. İki temel araç:  
  
 1. **Alpha-beta budaması** → kararı değiştirmeden gereksiz dalları kes  
 2. **Değerlendirme fonksiyonu + kesme** → terminale kadar gitme, belli derinlikte dur  
  
 _"Tam minimax ile budamalı minimax aynı kararı veriyor. Budama hesaplamayı kısaltıyor, sonucu değiştirmiyor."_  
  
::: {.notes}  
 Minimax'ı anladık; mekanizma netleşti. Ama pratik sorunu da gördük: büyük oyunlarda tam arama fiziksel olarak imkânsız.  
  
 Bir sonraki derste bu soruna iki farklı açıdan yaklaşacağız. Birincisi: ağacın bazı dallarının sonucu kesinlikle değiştirmeyeceği önceden bilinebilir — bu dalları hiç açmadan keseriz. Alpha-beta budaması tam olarak bu. İkincisi: terminale kadar gitmeye gerek yok; belli  
 derinlikte durur, o noktadaki durumu yaklaşık puanlarız. Bu değerlendirme fonksiyonu ve h-minimax fikri.  
  
 Bu iki araç birlikte 1997'de Deep Blue'un Kasparov'u yenmesini mümkün kıldı. Ama değerlendirme fonksiyonu elle yazılmak zorunda mıydı? AlphaZero bunu da değiştirdi — o köprü üçüncü dersin sonunda.  
:::