---
title: Arama Probleminin Anatomisi
subtitle: Problem Formülasyonu ve Arama Mekanizması
type: presentation
author: Öğr. Gör. Oktay Cesur
date: today
execute:
  echo: false
---

[^1]: Bazı mesafeler gerçeğe pek uygun değildir. Örneklerin mantıklarını verebilmek için bazı ufak dokunuşlar yapılmıştır.

---

<!--
## {auto-animate=true}
**Soru:** İstanbul'dasınız. Ankara'ya gitmeniz gerekiyor.



## {auto-animate=true}

**Soru:** İstanbul'dasınız. Ankara'ya gitmeniz gerekiyor.




::: {data-id="istanbul" style="background:#1A6B8A; color:white; padding:20px 40px; border-radius:8px; font-size:1.4em; font-weight:bold;"}
İstanbul
:::

::: {data-id="ankara" style="background:#4A148C; color:white; padding:20px 40px; border-radius:8px; font-size:1.4em; font-weight:bold;"}
Ankara
:::

:::
-->




## {auto-animate=true}

**Soru:** İstanbul' dasınız. Ankara'ya gitmeniz gerekiyor.

**Problem:** Birden fazla yol var. Hangisini seçeceksiniz?[^1]

::: {data-anim="search" data-view="graph"}  
:::



---

## Akla ilk gelecek soru: Graf Teorisi Yetmez mi?


- Bu problemi tanıyorsunuz — Dijkstra ile çözülür. Veri Yapıları dersinden biliyorsunuz.
- Ama burada öğretilen şey Dijkstra değil.


::: {.notes}
::: {.callout-important}

## Fark nerede?

Bu problemi tanıyorsunuz. Bir graf üzerinde en kısa yol bulmak — Dijkstra algoritmasıyla Veri Yapıları dersinde çözdüğünüz bir problem. O zaman burada ne öğreniyoruz?

Graf teorisinde problem size hazır gelir: düğümler, kenarlar ve ağırlıklar tanımlıdır, sizden yalnızca en kısa yolu bulmanız istenir. Algoritma bu yapı üzerinde çalışır. AI'daki arama ise bunun bir adım gerisinden başlar. Ortada henüz bir graf yoktur. Bir ajan vardır, bir çevre vardır, olası eylemler vardır — ama neyin düğüm, neyin kenar olacağına henüz karar verilmemiştir. Problem formülasyonu tam olarak bu dönüşümü yapar: gerçek dünya problemini, üzerinde arama yapılabilecek bir yapıya çevirir. Bu dönüşümün parçası olan soyutlama kararı da önemsiz değildir — şehirleri düğüm yapıp trafiği dışarıda bırakmak bilinçli bir mühendislik seçimidir.

Karayolu örneğinde bu ayrım görünmez çünkü soyutlama çok doğaldır — herkes şehirleri düğüm olarak düşünür. Ama aynı çerçeveyi bir bulmacaya, bir robotun hareket planlamasına ya da bir protein katlanma problemine uyguladığınızda "durum nedir, eylem nedir, kenar nedir" soruları hiç bariz değildir. Burada karayolu grafını kullanmamızın sebebi kavramları tanıdık bir zemin üzerinde oturtmaktır. Odaklanılan şey Dijkstra'nın kendisi değil, bir problemi aranabilir hale getirme becerisidir.

::: 
::: 

---


## Refleks Ajanın Sınırı

Refleks ajan bu problemde çöküyor. Çünkü:

- İstanbul'dan $5$ farklı yöne gidilebilir: Tekirdağ, Adapazarı, Bursa, Eskişehir, Bolu
- Her yön mevcut algıda eşit görünüyor — hepsi "İstanbul'dan çıkış"
- Hangi yolun Ankara'ya en ucuza ulaştırdığını hesaplayamıyor
- Bolu hedefe yakın görünüyor ama İst→Bol→Ank ($650$ km), Bursa üzerinden ($550$ km) daha pahalı
- Bunu anlamak için **ileriye bakması** gerekiyor — refleks ajan bunu yapamıyor

::: {.notes}
Refleks ajan algı→eylem eşlemesiyle çalışır. Tek adımlık düşünür, eylemlerin öncesi sonrası vs yoktur. İstanbul'dan beş komşu görüyor: Tekirdağ ($100$ km), Adapazarı ($130$ km), Bursa ($150$ km), Bolu ($300$ km), Eskişehir ($400$ km).

Refleks ajan algı→eylem eşlemesiyle çalışır. İstanbul'dan beş komşu görüyor: Tekirdağ, Adapazarı, Bursa, Bolu, Eskişehir. Ne yapıyor? Kuralında ne yazıyorsa onu — belki Bolu'ya gidiyor çünkü kuralı öyle diyor, belki Tekirdağ'a çünkü sırada ilk o. Ama bu seçimi bir karşılaştırmaya dayandırmıyor. Hangi yolun Ankara'ya ulaştırdığını bilmiyor, toplam maliyeti hesaplamıyor, alternatifleri değerlendirmiyor. Çünkü refleks ajanın mimarisinde hedef temsili, maliyet karşılaştırması ve ileriye bakma yok.

Sorun şu: her kararın sonucu bir sonraki kararı etkiliyor. Bursa'ya gitmenin maliyeti $150$ km, ama Bursa'dan Kütahya'ya ($120$), Kütahya'dan Eskişehir'e ($80$), Eskişehir'den Ankara'ya ($200$) toplam $550$ km — bu en ucuz yol. Bunu görebilmek için $4$ adım ileriye bakmak gerekiyor.

Refleks ajan yalnızca şu anki algıyı işleyebiliyor. Gelecek durumları simüle etmek mimarisinde yok. Model-tabanlı refleks ajan da yetmiyor — gözleyemediği bilgiyi iç modelle tamamlıyor, dolayısıyla mevcut durumu daha doğru temsil ediyor, ama hâlâ o duruma bakıp koşul-eylem kuralını uyguluyor. Alternatifleri karşılaştırmak, bir hedefe doğru plan yapmak onun da mimarisinde yok.

Bu sınır hedef-tabanlı ajana geçişi zorunlu kılıyor.
:::

---


## Hedef-Tabanlı Ajan: Problem-Solving Agent

- Refleks ajan: algı → eylem (doğrudan eşleme)
- Hedef-tabanlı ajan: algı → **hedef temsili** → **arama** → eylem dizisi → eylem
- Fark: ajan eylemi seçmeden önce **gelecek durumları simüle ediyor**
- Stuart: **"Formüle et, ara, çalıştır"**

::: {.notes}
Hedef-tabanlı ajan — ya da Stuart'ın terminolojisiyle problem-solving agent — refleks ajanın yapamadığını yapıyor: ileriye bakıyor.

Refleks ajanda mimari algıdan eyleme doğrudan bir eşlemeydi. Hedef-tabanlı ajanda bu eşlemenin arasına üç katman giriyor. Ajan önce bir hedef durumu temsil edebiliyor — In(Ankara) gibi. Sonra mevcut durumundan bu hedefe götürebilecek olası eylem dizilerini zihinsel olarak değerlendiriyor: her eylemin sonucunu geçiş modeliyle hesaplayarak "Bursa'ya gidersem oradan nereye gidebilirim, oradan nereye" zincirini kuruyor. Son olarak bu diziler arasından en iyisini seçip uyguluyor. Stuart bu süreci "formüle et, ara, çalıştır" olarak özetliyor ve üç adım sıralı — ajan arama tamamlanmadan hareket etmiyor.

Fayda-tabanlı ajandan farkı şurada: hedef-tabanlı ajan "Ankara'ya ulaştım mı, ulaşmadım mı" diye ikili bir değerlendirme yapıyor. Fayda-tabanlı ajan ise "hangi yol daha iyi" sorusunu soruyor — yani çözümler arasında derecelendirme yapabiliyor. Ancak pratikte bu sınır keskin değil. Yol maliyeti fonksiyonu eklendiğinde hedef-tabanlı ajan da çözümler arasında karşılaştırma yapmaya başlıyor — UCS "en ucuz yolu bul" derken aslında fayda benzeri bir değerlendirme yapıyor. Bu derste ikisi arasındaki geçişi çok keskin çizmeye gerek yok; önemli olan refleks ajandan hedef-tabanlı ajana geçişte ne değiştiğini anlamak.
:::

---


## Problem Nedir?

- Ajanın mevcut durumdan hedef duruma nasıl ulaşacağını **bilmediği** her durum
- **Bilmemek** kritik — cevap biliniyorsa arama gerekmez
- Temel soru: Bir problemi bilgisayara nasıl tanımlarız?

::: {.notes}
Bir problem, ajanın cevabı bilmediği her durumdur. Bilmemek neden kritik? Eğer ajan İstanbul'dan Ankara'ya en ucuz yolu zaten biliyorsa doğrudan gider — arama gerekmez. Refleks ajan tam olarak bunu yapar: bilinen durumlar için bilinen eylemler.

Arama yalnızca belirsizlik olduğunda anlam kazanıyor. Belirsizlik: İstanbul'dan Ankara'ya giden en ucuz yolun bilinmemesi. Grafta $5+$ farklı rota var, hangisi $550$ km, hangisi $710$ km — bunu hesaplamadan bilmiyoruz.

Bir problemi bilgisayara tanımlamak gerçek dünyayı soyutlamayı gerektiriyor. Neyin önemli neyin önemsiz olduğuna karar vermek — bu soyutlama kararı problem formülasyonunun yarısı.
:::

---


## Problem Tanımı — $5$ Bileşen

|Bileşen|Ne soruyor?|Örnek (İstanbul→Ankara)|
|---|---|---|
|Başlangıç durumu|Nereden başlıyorum?|In(İstanbul)|
|Eylemler|Ne yapabilirim?|Git(Bursa), Git(Bolu), Git(Adapazarı)...|
|Geçiş modeli|Eylem ne değiştirir?|RESULT(In(İstanbul), Git(Bursa)) = In(Bursa)|
|Hedef testi|Hedefe ulaştım mı?|In(Ankara)?|
|Yol maliyeti|Hangi yol daha iyi?|Toplam mesafe (km)|

::: {.notes}
Yukarıdaki tablo bir arama probleminin nasıl tanımlandığını özetler. Her problem beş temel bileşenle ifade edilir: başlangıç durumu ajanın nereden başladığını, eylemler bulunduğu durumdan hangi hareketlerin yapılabileceğini, geçiş modeli bu eylemlerin durumu nasıl değiştirdiğini gösterir. Hedef testi istenen duruma ulaşılıp ulaşılmadığını kontrol eder; yol maliyeti ise farklı yollar arasında hangisinin daha iyi olduğunu belirlemek için kullanılır. Bu bileşenler birlikte problem uzayını tanımlar ve arama algoritması bu tanım üzerinde çalışarak çözümü bulur.
:::

---


## Soyutlama

- Gerçek yolculukta: trafik, hava durumu, yakıt fiyatı, yorgunluk, yol çalışması...
- Bunlar modele dahil edilmiyor — neden?
- İstanbul'dan Ankara'ya en kısa yolu bulmak için gereksizler
- Neyi dahil edip neyi dışarıda bırakacağını bilmek → iyi problem formülasyonunun yarısı

::: {.notes}
Haritamızda $13$ şehir ve $17$ kenar var. Gerçek Türkiye karayolu ağında yüzlerce şehir, binlerce yol var.

**Neden $13$ şehir yeterli?** Problem-spesifik bir karar: İstanbul'dan Ankara'ya en ucuz yolu bulmak için Antalya veya Trabzon'u modele dahil etmeye gerek yok — optimal rota oradan mantıksal olarak geçmeyeceğini biliyoruz. Bunu domain bilgisiyle belirledik, ajanın bunu keşfetmesi gerekmedi.

**Soyutlamanın gerçek nedeni ise hesaplama karmaşıklığı:** Her detayı dahil etmek durum sayısını katlanarak artırır. Trafik değişkenini ekleyin: $13$ şehir $\times 5$ trafik seviyesi $= 65$ durum — tek değişken $5$ katına çıkardı. Hava durumunu da ekleyin: $65 \times 3 = 195$. Soyutlama olmadan uzay patlar. (Antalya'yı eklesen de aynı problem var — şehir sayısı iki seviyede çalışır.)

Geçerli soyutlama: her soyut çözüm gerçekte de uygulanabilir olmalı. İst→Bur→Kut→Esk→Ank rotası gerçekte de var ve gidilebilir. Yararlı soyutlama: soyut problemin çözümü gerçek problemden daha kolay olmalı — $13$ düğümlü grafta arama, gerçek haritada aramadan çok daha hızlı.

Soyutlama kararı değişirse formülasyon değişir ama arama algoritması değişmez. Bu esneklik iyi bir formülasyonun işareti.
:::


---


## Çözüm ve Arama

- **Çözüm:** Başlangıçtan hedefe götüren eylem dizisi
- **Optimal çözüm:** En düşük maliyetli olan
- **Arama:** Olası eylem dizilerini sistematik olarak keşfetme süreci
- Ajan **zihinsel** olarak keşfediyor — fiziksel olarak değil

::: {.notes}
Burada çözümümüz tek bir eylem değil, bir dizidir. İstanbul→Ankara örneğinde:  

- Git(Bursa) → Git(Kütahya) → Git(Eskişehir) → Git(Ankara). 

  
Bu dizinin her adımı bir öncekinin sonucuna bağlı. Bu şekilde bir dizi eylemin sonucu olarak isteğimize ulaşabileceğimiz çokça seçenek vardır.

- İst→Bol→Ank ($650$ km)
- İst→Adn→Düz→Kas→Ank ($710$ km)
- İst→Bur→Kut→Esk→Ank ($550$ km)

Hepsi hedefe ulaştırır ama maliyetleri farklı. Optimal çözüm en düşük maliyetli olan — $550$ km.

Aramanın sistematik olması zorunlu çünkü olası eylem dizisi sayısı çok büyük ve grafta döngüler var — İst→Bur→İst→Bur şeklinde aynı düğümler arasında sonsuza kadar gidip gelmek mümkün. Rastgele deneme yapan bir yaklaşım bu döngülere takılabilir veya var olan çözümü atlayabilir. Sistematik arama her durumun kontrollü biçimde ziyaret edilmesini sağlayarak hem döngüleri kırıyor hem de çözüm varsa bulunacağını garanti ediyor.

Burada önemli bir nokta var: ajan bu keşfi fiziksel olarak yapmıyor. Gerçekten Bursa'ya gitmiyor — Bursa'ya gitmenin ne sonuç vereceğini geçiş modeliyle hesaplıyor, oradan Kütahya'ya gitmenin ne sonuç vereceğini hesaplıyor, ve böyle devam ediyor. Bu bir planlama evresidir. Ajan önce zihinsel olarak alternatifleri değerlendiriyor, uygun diziyi buluyor, ancak ondan sonra fiziksel eyleme geçiyor. Bu hesaplamanın kendisi bellek ve zaman gerektiriyor — algoritmaların karmaşıklığı tam olarak buradan kaynaklanıyor.
:::

---


## Kapalı Döngü Varsayımı

- Ajan eylem dizisini bulduktan sonra **kapalı döngüde** çalıştırıyor
- Yürütme sırasında çevreyi tekrar **sorgulamıyor**
- Bu nedenle çevrenin:
  - **Deterministik** olması şart
  - **Tam gözlemlenebilir** olması şart
- _Bu varsayımı aklınızda tutun — sezgisel arama konusunun sonunda döneceğiz._

::: {.notes}
Ajan planı uygulamaya başladığında çevreyi artık sorgulamıyor. Git(Bursa) → Git(Kütahya) → Git(Eskişehir) → Git(Ankara) dizisini gözlerini kapatarak uyguluyor.

Neden böyle çalışıyor? Çevre deterministik: Git(Bursa) her zaman In(Bursa) üretiyor. Çevre tam gözlemlenebilir: ajan her an nerede olduğunu biliyor. Bu iki koşul sağlandığında plan değişmeden uygulanabilir.

Bu varsayım ne zaman bozuluyor? İst→Bur arasında yol kapandı — Git(Bursa) başarısız. Ya da Eskişehir→Ankara yolunda beklenmedik uzunluk — maliyet tahmini tutmuyor. Bu durumlar deterministik varsayımını bozuyor ve yeniden planlama gerektiriyor.

Bu konu boyunca varsayımımız: deterministik, tam gözlemlenebilir, bilinen model. Bu varsayımlar bilinçli — karmaşıklığı kademeli şekilde artıracağız.
:::

---


## Durum Uzayı → Arama Ağacı → Algoritma

|Katman|Ne?|Örnek (İstanbul→Ankara)|
|---|---|---|
|**Durum uzayı (state space)**|Problemin soyut graf yapısı. Her düğüm bir durum.|Şehirler ve yollar|
|**Arama ağacı (search tree)**|Algoritmanın keşif sırasında ürettiği yapı.|İstanbul’dan başlayan dallanan ağaç|
|**Algoritma**|Sınırdan hangi düğümün seçileceğini belirler.|BFS, DFS, UCS|

::: {.notes}  
Arama problemlerini anlamak için üç farklı seviyeyi ayırmak gerekir.

En altta **durum uzayı** vardır. Bu, problemin gerçek yapısıdır: hangi durumların var olduğu ve bunların hangi eylemlerle birbirine bağlandığı. İstanbul–Ankara örneğinde bu bir şehir grafıdır.

Algoritma bu graf üzerinde doğrudan çalışmaz. Bunun yerine keşif sürecinde bir **arama ağacı** üretir. Ağaç, başlangıç durumundan itibaren olası eylem dizilerini temsil eder. Aynı durum farklı yollarla üretilebildiği için arama ağacında aynı durumu temsil eden birden fazla düğüm bulunabilir.

Üçüncü katman ise **arama algoritmasıdır**. Algoritmanın yaptığı tek kritik seçim, sınırdaki düğümler arasından hangisinin genişletileceğini belirlemektir. Bu seçim değiştiğinde algoritma da değişir. FIFO seçim BFS’i, LIFO seçim DFS’i, en düşük maliyet seçimi ise UCS’i üretir.

Bu nedenle arama algoritmaları, aynı durum uzayı üzerinde yalnızca farklı keşif stratejileri uygular.  
:::

---

## Arama Ağacı

- Her düğüm bir durumu temsil eder
- Kök = başlangıç durumu (İstanbul)
- Bir düğümü **genişletmek:** o durumdan tüm eylemleri uygulayıp yeni durumlar üretmek
- **Düğüm ≠ Durum** — aynı durum farklı yollarla üretilebilir

::: {.notes}
Arama sürecini somut bir yapı üzerinde takip edebilmek için arama ağacını kullanıyoruz.

Ağacın kökü başlangıç durumu — In(İstanbul). Bir düğümü genişletmek, o durumdan uygulanabilir tüm eylemleri uygulayıp yeni düğümler üretmek demek. İstanbul genişletildiğinde beş çocuk ortaya çıkıyor:

* `In(Tek), In(Adap), In(Bur), In(Esk), In(Bolu). `

Bu çocuklar sınıra ekleniyor ve genişletilmeyi bekliyorlar. Her düğüm dört bilgi taşıyor: 

- Temsil ettiği durum`(In(Bursa))`, 
- hangi düğümden üretildiği `(In(İstanbul))`
- hangi eylemle üretildiği `(Git(Bursa))`
- ve kökten o düğüme kadar biriken toplam maliyet — yani `g(n)`.

Bu son bilgi önemli çünkü aynı duruma farklı maliyetlerle ulaşılabiliyor.

Burada kritik bir ayrım var: düğüm ve durum aynı şey değil. Eskişehir'e iki farklı yoldan ulaşılabiliyor;

- `İst→Esk` ($400$ km direkt) 
- `İst→Bur→Kut→Esk` ($350$ km). 

İkisi de In(Eskişehir) durumunu temsil ediyor ama ağaçta iki ayrı düğüm olarak görünüyorlar çünkü g(n) değerleri farklı. Düğüm hangi yoldan gelindiğini biliyor, durum bilmiyor. Bu ayrım olmasaydı hangi yolun daha ucuz olduğunu karşılaştırmak mümkün olmazdı.

Bu yapının bir tehlikesi var: `İst→Bur→İst→Bur` şeklinde döngüler ağacı sonsuza kadar büyütebilir. Bunu çözmek için genişletilmiş düğümleri takip eden bir mekanizma gerekiyor — bu da bizi sınır ve keşfedilen küme kavramlarına getiriyor.
:::

---


## Sınır ve Keşfedilen Küme

- **Sınır (frontier):** Genişletilmeyi bekleyen düğümler
- **Keşfedilen küme:** Ziyaret edilmiş durumlar — tekrar ziyareti önler
- Sınırdan **hangi düğümün seçileceği** algoritmayı belirliyor:
  - En eski → BFS · En yeni → DFS · En ucuz → UCS

::: {.notes}
Arama süreci iki veri yapısı üzerinde çalışıyor: sınır ve keşfedilen küme.

Sınır, üretilmiş ama henüz genişletilmemiş düğümleri tutuyor. Başlangıçta yalnızca kök düğüm var: In(İstanbul). İstanbul genişletildiğinde beş çocuk üretiliyor ve sınıra ekleniyor: 

`In(Tek), In(Adap), In(Bur), In(Esk), In(Bolu). `



Arama her adımda sınırdan bir düğüm seçiyor, onu genişletiyor, çocuklarını sınıra ekliyor ve devam ediyor. Tüm süreç bu döngüden ibaret.

Bu döngüde belirleyici olan tek karar sınırdan hangi düğümün seçileceğidir — ve bu karar algoritmayı tanımlıyor. Sınır bir FIFO kuyruğuysa en eski eklenen düğüm çıkar, bu BFS'tir. LIFO yığınıysa en yeni eklenen çıkar, bu DFS'tir. Öncelik kuyruğuysa en düşük maliyetli çıkar, bu UCS'dir. Algoritmaların arasındaki fark bu tek seçime indirgenebilir.

Keşfedilen küme ise genişletilmiş düğümlerin durumlarını tutuyor. Amacı döngüleri kırmak. Yeni üretilen bir düğümün durumu bu kümede zaten varsa, o düğüm sınıra eklenmiyor ve atlanıyor. Bu sayede `İst→Bur→İst→Bur` gibi sonsuz döngüler engellenmiş oluyor.

İkisi birlikte durum uzayını üç bölgeye ayırıyor: genişletilmiş durumlar (keşfedilen küme — bunlarla işimiz bitti), sınırdaki düğümler (sırada bekleyenler — henüz genişletilmedi ama ulaşıldı), ve henüz hiç ulaşılmamış durumlar. Arama her adımda sınırı keşfedilmemiş bölgeye doğru genişletiyor.
:::

---


## Tree-Search vs Graph-Search

- **Tree-search:** 
	- Keşfedilen kümeyi tutmuyor
	- Döngüye girebilir
	- Bellek ihtiyacı yok
- **Graph-search:** 
	- Keşfedilen kümeyi tutuyor 
	- Sonlu uzaylarda her zaman tam
	- Daha fazla bellek ister ama döngü problemi yok

::: {.notes}
Ağaç araması en basit haliyle şu şekilde çalışıyor: sınırdan bir düğüm seç, hedef mi kontrol et, değilse genişlet ve çocukları sınıra ekle. Bu süreçte daha önce hangi durumların ziyaret edildiğine dair bir kayıt tutulmuyor. Algoritma sadece sınırı ve ondan çıkan düğümleri görüyor.

Graf araması ise aynı sürece bir ekleme yapıyor: keşfedilen küme (`explored set`). Her düğüm genişletildiğinde durumu bu kümeye ekleniyor. Sınırdan bir düğüm çekildiğinde, eğer durumu zaten keşfedilen kümedeyse atlanıyor. Bu sayede aynı durum birden fazla kez genişletilmiyor.

Bu ayrım neden önemli? Ağaç aramasında `İst→Bur→İst→Bur→...` gibi sonsuz döngüler mümkün çünkü algoritma `In(İstanbul)` durumunu daha önce gördüğünü bilmiyor. Graf aramasında ise `In(İstanbul)` keşfedilen kümeye girdiği anda bir daha genişletilmiyor — sonlu uzaylarda her durum en fazla bir kez işleniyor, dolayısıyla algoritma her zaman sonlanıyor.

Peki neden graf araması her zaman tercih edilmiyor? Keşfedilen küme bellekte yer tutuyor. DFS gibi bellek verimli algoritmalarda bu avantajı ortadan kaldırıyor. Bu yüzden DFS çoğunlukla ağaç araması versiyonuyla kullanılıyor — döngü kontrolü yalnızca aktif yol üzerinde yapılıyor.

Slayttaki animasyonlarda algoritmalar graf araması versiyonuyla çalışıyor — hepsi `visited` kümesi kullanıyor.
:::

---


## Performans Kriterleri

- **Tamlık:** Çözüm varsa bulur mu?
- **Optimallik:** En iyi çözümü bulur mu?
- **Zaman karmaşıklığı:** Kaç düğüm üretilir?
- **Yer karmaşıklığı:** Bellekte kaç düğüm tutulur?
- Parametreler: $b$ (dallanma faktörü), $d$ (en sığ çözümün derinliği), $m$ (maksimum derinlik)

::: {.notes}
Tamlık en temel garanti: çözüm varsa algoritma onu bulabiliyor mu? Eğer bir çözüm var ama algoritma onu bulamıyorsa, geri kalan kriterlerin bir anlamı yok. Örneğin DFS sonsuz bir yolda takılabilir — çözüm ağacın başka bir dalında olsa bile ona asla ulaşamayabilir. Bu yüzden DFS tam değil.

Optimallik bir adım ötesi: sadece bir çözüm bulmak değil, en iyi çözümü bulmak. Bu ikisi farklı şeyler. DFS grafımızda `İst→Adap→Düz→Kas→Ank` yolunu bulabilir — bu $710$ km ve geçerli bir çözüm. Ama `İst→Bur→Kut→Esk→Ank` yolu $590$ km. Birincisi çözüm, ikincisi optimal çözüm.

Zaman karmaşıklığı üretilen düğüm sayısıyla ölçülüyor. Dallanma faktörü $b$, en sığ çözümün derinliği $d$ olduğunda, en kötü durumda $O(b^d)$ düğüm üretiliyor. Somut bir örnek: $b=10$, $d=8$ olduğunda bu $100$ milyon düğüm demek.

Yer karmaşıklığı ise bellekte aynı anda kaç düğüm tutulduğu. Pratikte bellek çoğu zaman zamandan daha kritik bir kısıt. BFS tüm sınırı bellekte tutuyor: $O(b^d)$. DFS ise yalnızca aktif yolu tutuyor: $O(bm)$ — burada $m$ ağacın maksimum derinliği.

Animasyon grafımızda bu parametreler şöyle karşılık geliyor: $b$ İstanbul için $5$ (beş komşu), $d$ optimal çözüm için $4$ (`İst→Bur→Kut→Esk→Ank`), $m$ ise grafın en derin yoluna bağlı.

Bu dört kriter ve üç parametre, bundan sonra bakacağımız her algoritmayı aynı çerçevede karşılaştırmamızı sağlıyor.
:::

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

Gerçek AI problemleri bu idealden ne kadar uzaklaştığını ölçmekle başlıyor. Her varsayımın kaldırılması bir soru: artık ne yapacağız?"

Bilgisiz aramanın karşılaştırma tablosundaki hiçbir satırda h(n) yok — problem hakkında ek bilgi kullanılmıyor. Tüm algoritmalar kör. h(n) eklenince: IDS → IDA*, UCS → A*. Aynı tablonun sezgisel versiyonu çok daha iyi görünecek.

:::
