---
title: "Değişimi Okumak"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-07-26
execute:
  echo: false
---

## Türev ve Değişim Modeli

> Türev = bir niceliğin **belirli bir andaki** değişim hızı
> (ortalama değişim hızından farklı)
>
> Bir değişim modeli, çoğu zaman niceliğin kendisini değil, **türevini** tarif eder.
>
> Soru: "bu büyüklük nedir" değil → "türevi biliniyorsa büyüklüğün kendisi nasıl geri kurulur"

::: {.notes}

Ortalama hız, iki nokta arasındaki farkı zaman aralığına böler; türev ise bu aralığı sıfıra götürdüğümüzde ortaya çıkan sınır değerdir — "o an" ne olduğunun matematiksel karşılığıdır. Fizikte, biyolojide ve ekonomide kurulan modellerin çoğu, doğrudan niceliğin kendisini değil, onun anlık değişim hızını tarif eder. Bu yüzden bu derste ilk soru neredeyse hiç "bu fonksiyon nedir" değildir; "türeviyle verilen bu ilişkiyi sağlayan fonksiyon hangisidir" sorusudur. İzleyen örnekler bunu somut biçimde gösterecektir.

:::

---

## Problem: düşen cisim

Bir cisim, hava direnci ihmal edilerek, $20$ m yükseklikten serbest bırakılıyor. ($g\approx 10\ \text{m/s}^2$)

**Soru:** Cisim yere hangi hızla çarpar?

::: {.notes}

Bu sorunun doğal yanıtı, toplam alınan yolu toplam süreye bölmektir — yani ortalama hız hesaplamaktır. Bu yaklaşım yanlış değildir, ama eksiktir: ortalama hız, hareketin tamamını tek bir sayıyla özetler, oysa çarpma anında belirleyici olan o anki hızdır. Bu ayrımı somut sayılarla görmek için önce ortalama hızı hesaplayalım, sonra bunun gerçek çarpma hızından neden farklı olduğunu inceleyelim.

:::

---

## Çözüm denemesi: ortalama hız

$$
s(t)=\frac12 gt^2 \quad\Longrightarrow\quad t=2\ \text{s} \quad (\text{20 m için})
$$

Ortalama hız:
$$
\frac{20}{2}=10\ \text{m/s}
$$

::: {.notes}

$\tfrac12 gt^2=20$ denkleminden $t=2$ s bulunur: cisim iki saniyede yere ulaşır. Bu iki saniyede toplam $20$ metre alındığına göre, ortalama hız $20/2=10$ m/s'dir. Bu, henüz türev kullanılmayan, düz bir oran hesabıdır — toplam mesafeyi toplam süreye bölmekten ibarettir. Ancak bu değerin cismin çarpma anındaki gerçek hızını verip vermediği ayrı bir sorudur; bunu bir sonraki adımda inceleyeceğiz.

:::

---

## Doğru çözüm: anlık hız (türev)

$$
v(t)=s'(t)=gt \quad\Longrightarrow\quad v(2)=20\ \text{m/s}
$$

Ortalama hız (10 m/s) ≠ çarpma anındaki hız (20 m/s)

Enerji karşılaştırması:
$$
\tfrac12 m(10)^2=50m \qquad\text{vs.}\qquad \tfrac12 m(20)^2=200m
$$

İşlem yönü: **mesafe → (türev) → anlık hız**

::: {.notes}

Cisim durgun hâlde başlayıp giderek hızlandığı için, çarpma anındaki hız, süreç boyunca hesaplanan ortalama hızdan büyük olmalıdır. Anlık hızı bulmak için mesafe fonksiyonunun türevini alırız: $v(t)=s'(t)=gt$, dolayısıyla $v(2)=20$ m/s — gerçekten de ortalama hızın iki katı. Bu farkın önemsiz olmadığını göstermek için kinetik enerjiyle bağlantı kurulabilir: enerji hızın karesine bağlı olduğundan ($E_k=\tfrac12 mv^2$), ortalama hızla hesaplanan enerji ($50m$) gerçek değerin ($200m$) yalnızca dörtte biridir. Çarpışmanın fiziksel etkisini belirleyen, hareketin ortalaması değil, o anki hızıdır — türevin neden ortalamadan daha fazla bilgi taşıdığının somut gerekçesi budur.

:::

---

## Problem: yön tersine döner

Bu kez cismin hızı biliniyor: $v(t)=gt$.

**Soru:** Cismin $t$ anına kadar aldığı toplam yolu nasıl buluruz?

::: {.notes}

Az önce türev alarak mesafeden hıza gittik. Şimdi bu işlemin tersini soruyoruz: hız bilindiğinde mesafeyi geri kurabilir miyiz? Bu, kalkülüsün temel simetrisidir — türev ve integral birbirinin tersidir; bunu bir sonraki adımda somut biçimde göreceğiz.

:::

---

## Çözüm: integral

$$
\frac{ds}{dt}=gt \quad\Longrightarrow\quad \int_0^t \frac{ds}{d\tau}\,d\tau=\int_0^t g\tau\,d\tau
$$

$$
s(t)-s(0)=\tfrac12 gt^2 \quad (s(0)=0 \text{ ise } s(t)=\tfrac12 gt^2)
$$

İşlem yönü: **hız → (integral) → toplam yol**

::: {.notes}

Hız, mesafenin zamana göre türevi olduğundan, iki tarafın integralini alırız. İntegral değişkeni ile üst sınırı karıştırmamak için integral içindeki değişkeni $\tau$ ile gösteririz. Sonuç, en baştaki mesafe formülünün kendisidir — bu, türev ve integralin birbirinin tersi olduğunu somut biçimde gösterir. Sezgisel olarak: çok kısa bir $\Delta t$ süresinde alınan yol yaklaşık $v(t)\Delta t$ kadardır; integral, bu küçük katkıları zaman boyunca toplar. Birim analizi de bunu doğrular: metre/saniye × saniye = metre.

:::

---

## Depo: Sabit Giriş ve Doğrudan İntegral

Bir depoya dakikada sabit $c$ litre su giriyor.

$$
\frac{dQ}{dt}=c \quad\Longrightarrow\quad Q(t)=Q(0)+ct
$$

Genel yapı: $\dfrac{dy}{dt}=f(t)$ → doğrudan integral

::: {.notes}

Sezgisel olarak, giren su zamanla birikir; soru, bu birikimi kesin biçimde ifade etmektir. Bu aslında bir diferansiyel denklem problemidir — değişim hızı ($c$, sabit) bilinmektedir, aranan ise bu hıza karşılık gelen miktar fonksiyonudur.

Sağ taraf açıkça bilinen bir sabit olduğundan, denklem doğrudan integralle çözülür: $Q(t)=Q(0)+ct$. Buradaki genel yapı önemlidir — sağ taraf yalnızca zamana (ya da bir sabite) bağlıysa, bilinmeyen fonksiyon doğrudan integral alınarak geri kurulabilir. Şimdi bu yapıyı biraz karmaşıklaştıracak ve bu yöntemin nerede yetersiz kaldığını göreceğiz.

:::

---

## Vanalı Depo: Doğrudan İntegralin Sınırı

Depoya sabit $c$ litre/dakika su giriyor. Bu kez bir çıkış vanası da var: çıkış hızı, depodaki **mevcut** su miktarıyla orantılı.

$$
\frac{dQ}{dt}=c-kQ, \qquad k>0
$$

Doğrudan integral denemesi:
$$
Q(t)=Q(0)+\int_0^t\bigl(c-kQ(\tau)\bigr)\,d\tau
$$

$Q(\tau)$ hâlâ bilinmiyor → doğrudan integral **yetmez**

::: {.notes}

Bu kez çıkış hızı sabit değildir; depodaki mevcut su miktarına bağlıdır. Bu fark önemlidir: önceki örnekte sağ taraf yalnızca zamana bağlıydı, doğrudan integral yeterliydi. Burada ise çıkış hızı aranan $Q(t)$'nin kendisine bağlı olduğundan, aynı yöntemin işe yarayıp yaramayacağı sorgulanmalıdır.

İntegral almayı denersek, sağ taraftaki integralin içinde hâlâ bilinmeyen $Q(\tau)$ fonksiyonu vardır — bu bir çözüm değildir, aynı ilişkinin integral biçiminde yeniden yazımıdır. Diferansiyel denklem problemi tam burada belirginleşir: değişim hızı aranan niceliğin kendisine bağlıysa, doğrudan integral yetmez; denklemin yapısına uygun ayrı bir yöntem gerekir. Bir gözlem: $Q=c/k$ olduğunda giren ve çıkan debiler birbirini eşitler, miktar sabit kalır — bu, bir denge değeridir ve az önce sorulan denge sorusunun cevabıdır. Bu kavram ileride sistematik biçimde ele alınacaktır.

:::

---

## Problem: soğuma

Sıcak bir kahve, oda sıcaklığındaki bir masaya bırakılıyor.

**Soru:** Kahvenin sıcaklığı zamanla nasıl değişir?

::: {.notes}

Kahve sabit bir hızla mı soğur, yoksa soğuma hızı zamanla değişir mi? Bu soruyu yanıtlamak için önce basit bir model deneyeceğiz, sonra bu modelin neden yetersiz kaldığını göreceğiz.

:::

---

## Naif model, düzeltme ve yapısal benzerlik

Naif model (sorunlu): $\dfrac{dT}{dt}=-5$ → hiç durmadan soğumaya devam eder

Doğru model: $\dfrac{dT}{dt}=-k(T-T_a)$

- $T>T_a \Rightarrow T'<0$ (soğur)
- $T=T_a \Rightarrow T'=0$ (durur)
- $T<T_a \Rightarrow T'>0$ (ısınır)

::: {.notes}

Sabit hızlı model fiziksel olarak sorunludur: kahve ortam sıcaklığına ulaştıktan sonra da aynı hızla soğumaya devam eder, bir süre sonra ortamdan daha soğuk hâle gelir — denklemde bunu durduracak bir mekanizma yoktur. Gerçek modelde fark büyükken hızlı, küçüldükçe yavaş soğuma vardır; bu denklemi çözmeden, yalnız işaretine bakarak davranışı okuyabiliriz — bu, "çözmeden nitel yorum" fikrinin ilk örneğidir.

Yapısal benzerlik de dikkat çekicidir: tank denklemi yeniden düzenlenirse $\frac{dQ}{dt}=c-kQ=-k(Q-c/k)$ olur — soğuma denklemiyle birebir aynı yapıdadır. Biri su miktarını, diğeri sıcaklığı temsil eder; fiziksel anlamları farklı olsa da çözüm yöntemi denklemin yapısına bağlıdır. Bu, farklı sistemlerdeki ortak değişim yapılarını aynı matematiksel dil içinde inceleme fikrinin ilk örneğidir.

:::

---

## Terminoloji

- **Bağımsız değişken:** $t$
- **Bağımlı değişken:** $Q$ veya $T$ (aranan fonksiyon)
- **Parametreler:** $c$, $k$, $T_a$
- **Mertebe:** en yüksek türev derecesi → burada 1 (**birinci mertebe**)
- **Adi diferansiyel denklem:** tek bağımsız değişken, yalnız adi türevler

::: {.notes}

Bu terimler, az önce gördüğümüz tank ve soğuma örnekleri üzerinden somutlaşır: her ikisinde de bağımsız değişken zamandır, bağımlı değişken aranan fonksiyondur (su miktarı ya da sıcaklık), $c$, $k$, $T_a$ gibi sabitler ise modele özgü parametrelerdir. Her iki denklemde de yalnızca birinci türev bulunduğundan, ikisi de birinci mertebe denklemdir. Vurgulanması gereken temel nokta şudur: diferansiyel denklemin bilinmeyeni tek bir sayı değildir; aranan şey, türeviyle verilen ilişkiyi sağlayan bir fonksiyondur. Bu cümle, ders boyunca geri dönülecek bir çerçeve cümlesidir.

$k$ ve $T_a$ gibi parametreler, modelin kendisine ait sabitlerdir — hangi fiziksel sistemi tanımladığımızı belirlerler. Bunları **keyfî sabit** ile karıştırmamak gerekir: parametre modelin tanımında bulunur, keyfî sabit ise denklem çözülürken ortaya çıkar. Bu ayrım, çözüm ailesi kavramı incelenirken somutlaşacaktır.

:::

---

## Notasyon: aynı ilişkiyi farklı biçimlerde yazmak

| Gösterim | Birinci türev | Tipik kullanım |
|---|---|---|
| Leibniz | $\dfrac{dy}{dx}$ | Bağımsız değişken açık; zincir kuralında tercih edilir |
| Lagrange (üs işareti) | $y'$ | Kısa, sık kullanılır |
| Newton (nokta) | $\dot y$ | Genellikle zamana göre türev |
| Operatör | $Dy$ | Lineer çözüm teorisinde kullanılacak |

$$
\frac{dy}{dx} = ky \;\Longleftrightarrow\; y' = ky \;\Longleftrightarrow\; \dot y = ky \;\Longleftrightarrow\; Dy = ky
$$

::: {.notes}

Aynı türev kavramı farklı gösterimlerle yazılabilir; hangisinin kullanılacağı bağlama göre değişir. Leibniz gösterimi ($dy/dx$) bağımsız değişkeni açıkça gösterir ve zincir kuralı ile değişken dönüşümlerinde tercih edilir. Lagrange gösterimi ($y'$) kısa ve sık kullanılır, fakat bağımsız değişkeni açıkça yazmaz. Newton'un nokta gösterimi ($\dot y$) genellikle zamana göre türevi belirtir ve fizik/mühendislik metinlerinde yaygındır. Operatör gösterimi ($Dy$) türevi bir işlem olarak ele alır ve ilerleyen bölümde, lineer denklemlerin çözüm teorisinde karşımıza çıkacaktır. Bu dört gösterim aynı ilişkiyi ifade eder — hepsi aynı denklemdir, fark yalnızca yazım biçimindedir.

:::

---

## Örtük bağımsız değişken

$y'=ky$ — bağımsız değişkenin adı hiçbir yerde yazılmıyor.

- Üs işareti → genellikle $x$
- Nokta → genellikle $t$
- Belirsizlikte: Leibniz gösterimi kullan → $\dfrac{dy}{dt}=ky$

::: {.notes}

$y'=ky$ gibi bir ifadede bağımsız değişkenin adı hiçbir yerde açıkça yazılmaz; yalnızca "bir değişkene göre türev alınıyor" bilgisi $'$ işaretiyle taşınır. Bu, bağımsız değişkenin örtük olduğu anlamına gelir. Gösterim seçimi bir ipucu verebilir: üs işaretli gösterim genellikle bağımsız değişkenin $x$ olduğunu varsayar — matematik metinlerindeki yaygın kural budur. Nokta gösterimi ise genellikle bağımsız değişkenin $t$ (zaman) olduğunu ima eder; bu yüzden fizik ve mühendislik metinlerinde neredeyse her zaman zamana göre türevi belirtir. Bu kesin bir kural değil, bir okuma kuralıdır: denklemin geldiği bağlam (bir zaman süreci mi, bir uzamsal dağılım mı) hangi değişkenin kastedildiğini netleştirir. Belirsizlik varsa, bağımsız değişken Leibniz gösterimiyle açıkça yazılmalıdır.

:::

---

## Aynı ilişkinin farklı biçimleri

$$
\frac{dy}{dx} = -\frac{x}{y} \quad\Longrightarrow\quad x\,dx + y\,dy = 0 \quad (\text{diferansiyel biçim})
$$

$$
y' = ky \quad\Longleftrightarrow\quad y'-ky=0 \quad (\text{standart biçim})
$$

::: {.notes}

Bir diferansiyel denklem, çözülmüş biçimde ($y'=\dots$) değil, diferansiyel biçimde de yazılabilir. Örneğin $dy/dx=-x/y$ denklemi, çapraz çarparak $x\,dx+y\,dy=0$ biçimine de taşınabilir. Bu ikinci yazım $y'$'yi tek başına yalnız bırakmaz; $dx$ ve $dy$ terimlerini bir arada tutar. Bu biçim, ilerleyen bir konuda (tam diferansiyel denklemler) ayrı bir çözüm yaklaşımının temelini oluşturacaktır; burada yalnızca aynı ilişkinin farklı biçimlerde yazılabildiğini görmek yeterlidir.

Aynı denklem "standart biçime" de taşınabilir — bağımlı değişken ve türevleri sol tarafta, geri kalan sağ tarafta toplanacak biçimde: $y'=ky \Leftrightarrow y'-ky=0$. Bu yeniden yazım, ilerleyen sınıflandırmalarda (denklemin lineer olup olmadığını görmek gibi) kullanışlıdır.

:::

---

## Mertebe: daha yakından bakış

$$
y'' + 3y' - 2y = \sin x \quad\Longrightarrow\quad \text{2. mertebe}
$$

| Denklem | Mertebe |
|---|---|
| $y'=ky$ | 1 |
| $x''+\omega^2 x=0$ | 2 |
| $\dfrac{d^3y}{dx^3}-y=e^x$ | 3 |
| $y'+y^2=x$ | 1 |

$$
(y')^3+y=0 \quad\Longrightarrow\quad \text{hâlâ 1. mertebe (kuvvet} \neq \text{mertebe)}
$$

::: {.notes}

$y''+3y'-2y=\sin x$ denkleminde bağımlı değişken $y$, bağımsız değişken $x$'tir; en yüksek türev ikincidir ($y''$), bu yüzden denklem ikinci mertebedendir (çözümü burada aranmıyor, yalnızca sınıflandırma yapılıyor). Birkaç denklem üzerinde daha aynı sınıflandırmayı pratik edersek: $y'=ky$ birinci mertebe, $x''+\omega^2x=0$ ikinci mertebe, $d^3y/dx^3-y=e^x$ üçüncü mertebe, $y'+y^2=x$ ise — $y^2$ terimi bulunmasına rağmen — birinci mertebedir, çünkü en yüksek türev derecesi birdir.

Bu son örnek özellikle önemli bir karışıklığı önler: mertebe, denklemdeki en yüksek türev derecesine bakılarak belirlenir; denklemin kaç terim içerdiğine veya bağımlı değişkenin kendisinin kaçıncı kuvvetten göründüğüne değil. Örneğin $(y')^3+y=0$ hâlâ birinci mertebedendir, çünkü en yüksek türev derecesi birdir. Türevin kuvveti ile denklemin mertebesi farklı kavramlardır.

:::

---

## Adi ve kısmi diferansiyel denklemler

Adi diferansiyel denklem: tek bağımsız değişken, yalnız adi türevler.

$$
\frac{\partial u}{\partial t} = \frac{\partial^2 u}{\partial x^2} \quad\Longrightarrow\quad \text{kısmi diferansiyel denklem (bu dersin kapsamı dışında)}
$$

::: {.notes}

Bilinmeyen fonksiyon tek bir bağımsız değişkene bağlıysa ve denklemde yalnızca adi türevler bulunuyorsa, buna adi diferansiyel denklem denir. Bilinmeyen fonksiyon birden fazla değişkene bağlıysa, kısmi türevler devreye girer. Örneğin $\partial u/\partial t=\partial^2 u/\partial x^2$ denkleminde $u$, hem $t$ hem $x$'e bağlıdır; bu bir kısmi diferansiyel denklemdir ve farklı bir inceleme alanına aittir. Bu ders yalnız adi diferansiyel denklemlerle ilgilenir; bu ayrım yalnızca sınırı görünür kılmak içindir, kısmi diferansiyel denklemler burada işlenmeyecektir.

:::

---

## Problem: her denklem aynı yöntemle çözülmez

$$
y'=x+y^2
$$

**Soru:** Şimdiye kadar gördüğümüz yöntem (doğrudan integral) burada işe yarar mı? Sağ tarafı $x$'e ve $y$'ye ait ayrı parçalara bölebilir misiniz?

::: {.notes}

Sağ taraf hem $x$'e hem $y$'ye bağlıdır ve bir $x$ fonksiyonu ile bir $y$ fonksiyonunun çarpımı biçiminde ayrılamaz. Bu yüzden ne doğrudan integral işe yarar ne de $x$ ve $y$'yi ayrı taraflara toplama fikri burada uygulanabilir. Çarpım biçiminde ayrışan denklemler için bu fikir, ayrılabilir denklemler yöntemiyle sistematik hâle getirilecektir.

:::

---

## Denklem Yapısına Göre Yöntem Seçimi

$y'=x+y^2$ çözülemez değil — **farklı** analitik araç, nitel inceleme veya sayısal yöntem gerekir.

→ İlk soru çoğu zaman "hangi formülü kullanmalıyım" değil, **"bu denklem hangi sınıfa aittir"**dir.

**Türev:** fonksiyon → değişim hızı
**İntegral:** değişim hızı → fonksiyon (sağ taraf yalnız $t$'ye bağlıysa)
**Diferansiyel denklem:** değişim hızı **aranan fonksiyona bağlı** olduğunda ortaya çıkan soru

→ Devam etmek için: **çözüm** kavramını netleştir ve denklem sınıflarını tanı.

::: {.notes}

Az önceki denemenin doğrudan sonuç vermemesi, ilk sorunun neden "hangi formülü kullanmalıyım" değil "bu denklem hangi sınıfa aittir" olduğunu somut biçimde gösterir. Türev, bilinen bir fonksiyondan değişim hızına gider; integral, bilinen bir değişim hızından fonksiyona geri döner; diferansiyel denklem ise değişim hızının aranan fonksiyona bağlı olduğu durumları ele alır. Artık soru "bu fonksiyonun türevi nedir" değil, "türeviyle bu ilişkiyi sağlayan fonksiyon hangisidir"dir. **Çözüm Nedir?** notu ilk soruyu, **Lineerlik ve Otonomluk** notu ise sınıflandırmanın iki temel ölçütünü ayrıntılandırır.

:::

---

## Sık Yapılan Hatalar

1. Ortalama değişim hızını anlık değişim hızı sanmak
2. Sağ tarafta bilinmeyen fonksiyon varken doğrudan integral almak
3. Parametre ile keyfî sabiti karıştırmak
4. Türevin kuvvetini denklemin mertebesi sanmak

::: {.notes}

İlk hata düşen cisim örneğinde görünür: toplam yolu toplam süreye bölmek ortalama hızı verir, çarpma anındaki hızı değil. İkinci hata, $Q'=c-kQ$ denkleminde iki tarafın integralini alınca çözüm elde edildiğini sanmaktır; integralin içinde bilinmeyen $Q$ kaldığı sürece problem çözülmüş değildir.

Parametreler model kurulurken belirlenir; $k$ ve $T_a$ bunun örnekleridir. Keyfî sabit ise bir diferansiyel denklem çözüldüğünde ortaya çıkan çözüm ailesini gösterir. Son hata mertebeyle ilgilidir: $(y')^3+y=0$ denkleminde türev küp alınmış olsa da en yüksek türev $y'$ olduğu için denklem birinci mertebedendir.

:::

---

## Karar Soruları

1. $Q'=4$ denklemi neden doğrudan integralle çözülebilir?
2. $Q'=4-2Q$ için aynı işlem neden çözümü tamamlamaz?
3. $y''+y'=0$ denkleminin mertebesi nedir?

::: {.notes}

Birinci denklemde sağ taraf bütünüyle bilinir; integrali alınarak $Q=4t+C$ ailesi elde edilir. İkinci denklemde ise sağ taraf aranan $Q(t)$ fonksiyonunu içerir. İntegral almak, bilinmeyeni ortadan kaldırmaz ve yalnızca denklemin integral biçimini üretir.

Üçüncü denklem ikinci mertebedendir, çünkü görünen en yüksek türev $y''$dir. Terim sayısı, katsayıların biçimi veya $y'$ teriminin de bulunması mertebeyi değiştirmez.

:::

---

## Kavramları Derinleştirmek

- **Çözüm Nedir?** → bir fonksiyonun denklemi sağlaması, çözüm ailesi ve başlangıç koşulu
- **Lineerlik ve Otonomluk** → yöntemi seçmeden önce denklemin yapısını adlandırma
- **Doğrudan İntegral ve Yön Alanı** → integralin çalıştığı sınır ve çözmeden nitel okuma

::: {.notes}

Bu not, türevle verilen bir ilişkinin neden bir fonksiyon arama problemine dönüştüğünü kurdu. Buradan sonra üç ayrı soru izlenebilir: "çözüm" sözcüğünün kesin anlamı, denklemlerin yapısal olarak nasıl sınıflandırıldığı ve doğrudan integralin hangi denklemlerde gerçekten sonuç verdiği.

Bu başlıklar zorunlu bir okuma sırası oluşturmaz. Her not kendi sorusunu bağımsız biçimde ele alır; ihtiyaç duyduğunuz kavrama göre ilgili nota dönebilirsiniz.

:::

---
