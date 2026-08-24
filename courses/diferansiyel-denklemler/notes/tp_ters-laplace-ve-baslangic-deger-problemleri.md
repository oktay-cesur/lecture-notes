---
title: "Ters Dönüşüm ve Başlangıç Değer Problemleri"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-08-22
execute:
  echo: false
---

## Geri Dönüş

$$
Y(s)=\frac{s+3}{s^2+3s+2}
$$

Cebirsel denklem çözüldü. Aranan hâlâ $y(t)$.

$$
\mathcal{L}^{-1}\{Y\}=y
$$

::: {.notes}

Türev kuralı diferansiyel denklemi cebirsel denkleme çevirdi ve $Y(s)$ bulundu. Ama problem $y(t)$ ile sorulmuştu; dönüşüm uzayında kalmak çözüm sayılmaz.

$F(s)$ verildiğinde $\mathcal{L}\{f\}=F$ olacak biçimdeki $f$ fonksiyonuna $F$'nin ters Laplace dönüşümü denir ve $f=\mathcal{L}^{-1}\{F\}$ yazılır.

Böyle bir $f$'nin tek olup olmadığı sorusu meşrudur. Sonlu sayıda noktada değişen iki fonksiyonun integralleri aynı olacağından dönüşümleri de aynıdır; bu anlamda teklik yoktur. Ama sürekli fonksiyonlarla sınırlanınca teklik sağlanır: iki sürekli fonksiyonun dönüşümü aynıysa fonksiyonlar da aynıdır. Uygulamada aranan çözüm sürekli olduğu için bu belirsizlik sorun çıkarmaz.

Ters dönüşümün kapalı bir formülü vardır, ama kompleks düzlemde integral gerektirir. Bu derste kullanılacak yol tablodur: $Y(s)$ ifadesi tanınabilir parçalara ayrılır ve her parçanın karşılığı yazılır.

:::

---

## Ters Dönüşüm de Lineerdir

$$
\mathcal{L}^{-1}\{\alpha F+\beta G\}
=\alpha\mathcal{L}^{-1}\{F\}+\beta\mathcal{L}^{-1}\{G\}
$$

Bu yüzden $Y(s)$ **parçalara ayrılır**.

::: {.notes}

Dönüşüm lineer olduğuna göre tersi de lineerdir. Bunun pratik sonucu, bütün yöntemin dayandığı adımdır: karmaşık bir $Y(s)$ ifadesini, her biri tablodan okunabilen parçaların toplamı olarak yazmak.

Örneğin $\dfrac{3}{s}+\dfrac{2}{s-4}$ ifadesinin ters dönüşümü $3+2e^{4t}$'dir; her terim ayrı ayrı çevrilir ve toplanır.

Ayırma işlemi rasyonel fonksiyonlarda kısmi kesirlerle yapılır. Laplace yöntemiyle çözülen sabit katsayılı denklemlerde $Y(s)$ her zaman rasyonel çıktığı için bu araç yeterlidir.

Bir uyarı: ayırma toplama üzerinden yapılır, çarpma üzerinden değil. $\dfrac{1}{s(s-2)}$ ifadesini görüp $1\cdot e^{2t}$ yazmak yanlıştır; çarpımın ters dönüşümü, ters dönüşümlerin çarpımı değildir.

:::

---

## Kısmi Kesirler: Ayrık Kökler

$$
\frac{s+3}{(s+1)(s+2)}
=\frac{A}{s+1}+\frac{B}{s+2}
$$

$$
s+3=A(s+2)+B(s+1)
$$

::: {.notes}

Payda çarpanlarına ayrılır: $s^2+3s+2=(s+1)(s+2)$. Kökler ayrık ve reel olduğundan her çarpan bir kesir verir.

Katsayıları bulmak için paydaları eşitleyip payları karşılaştırırız: $s+3=A(s+2)+B(s+1)$. Bu eşitlik her $s$ için geçerlidir, dolayısıyla uygun $s$ değerleri seçilerek katsayılar tek tek okunabilir.

$s=-1$ koyalım: sol taraf $2$, sağ taraf $A(1)$ olur, yani $A=2$. $s=-2$ koyalım: sol taraf $1$, sağ taraf $B(-1)$ olur, yani $B=-1$.

Kök değerlerini yerine koyma yöntemi, katsayıları eşitleyip sistem çözmekten hızlıdır. Her kök diğer terimleri sıfırlar ve bir katsayıyı yalnız bırakır.

:::

---

## Çözümü Okumak

$$
Y(s)=\frac{2}{s+1}-\frac{1}{s+2}
$$

$$
\boxed{y(t)=2e^{-t}-e^{-2t}}
$$

::: {.notes}

Her terim üstel satırına uyuyor: $\dfrac{1}{s-a}$ karşılığı $e^{at}$'dir. Birinci terimde $a=-1$, ikincisinde $a=-2$'dir.

Çözüm $y(t)=2e^{-t}-e^{-2t}$'dir. Başlangıç koşullarını kontrol edelim: $y(0)=2-1=1$ ✓ ve $y'(t)=-2e^{-t}+2e^{-2t}$ ile $y'(0)=-2+2=0$ ✓.

Koşullar sağlandı, üstelik onları uygulamak için ayrı bir adım gerekmedi. Klasik yolda genel çözüm $c_1e^{-t}+c_2e^{-2t}$ kurulur, sonra iki denklemli bir sistem çözülürdü. Laplace yönteminde sabitler hiç ortaya çıkmadı; koşullar dönüşüm formülünün içinden geldi ve doğrudan belirli çözümü verdi.

Payda köklerinin $-1$ ve $-2$ olması ile karakteristik denklemin köklerinin aynı olması da rastlantı değil. Laplace yöntemi karakteristik denklemi ortadan kaldırmıyor, onu paydanın içine yerleştiriyor.

:::

---

## Kısmi Kesir Kalıpları

| Payda çarpanı | Kesir biçimi |
|---|---|
| $s-a$ | $\dfrac{A}{s-a}$ |
| $(s-a)^2$ | $\dfrac{A}{s-a}+\dfrac{B}{(s-a)^2}$ |
| $(s-a)^2+b^2$ | $\dfrac{As+B}{(s-a)^2+b^2}$ |

::: {.notes}

Üç kalıp, sabit katsayılı denklemlerden çıkan bütün paydaları karşılar. Payda kökleri ayrıksa birinci satır, katlıysa ikinci satır, kompleksse üçüncü satır kullanılır.

Katlı kök durumunda hem $\dfrac{A}{s-a}$ hem $\dfrac{B}{(s-a)^2}$ terimlerinin yazılması gerekir. Yalnız yüksek kuvvetli terimi yazmak yetmez; katsayılar tutmaz. Karşılıkları sırasıyla $Ae^{at}$ ve $Bte^{at}$'dir — katlı köklerde çıkan $te^{at}$ çözümü dönüşüm tarafında bu satırdan geliyor.

Kompleks paydada payın birinci dereceden bırakılması gerekir. Karşılığa geçmek için payda tam kareye tamamlanır ve pay da aynı kaydırmaya uydurulur; sonuç $e^{at}\cos bt$ ve $e^{at}\sin bt$ terimlerinin birleşimidir.

Kısmi kesir hesabı bu derste bir amaç değil, ters dönüşüme geçmek için kullanılan bir ara adımdır. Payda üçten fazla çarpana ayrıldığında hesap uzar; böyle durumlarda konvolüsyon daha kısa bir yol açacak.

:::

---

## Yöntemin Adımları

1. Denklemin dönüşümünü al
2. $Y(s)$'i yalnız bırak
3. Kısmi kesirlere ayır
4. Tablodan geri oku
5. Başlangıç koşullarını doğrula

::: {.notes}

Beş adım, Laplace yöntemiyle çözülen her başlangıç değer probleminde aynıdır.

Birinci adımda türev kuralı uygulanır ve başlangıç koşulları hesaba girer. İkinci adımda $Y$ parantezine alınıp bölme yapılır; bu noktada payda karakteristik polinomdur.

Üçüncü ve dördüncü adımlar geri dönüşü oluşturur. Beşinci adım isteğe bağlı görünür ama ucuzdur: bulunan $y(t)$ fonksiyonunun $t=0$ değerlerine bakmak, kısmi kesir hesabındaki bir işaret hatasını hemen yakalar.

Sıranın bozulmaması gerekir. Özellikle kısmi kesirlere ayırmadan önce $Y$'nin tamamen yalnız bırakıldığından emin olmak gerekir; sağ tarafta $Y$ içeren bir terim kalırsa ayrıştırma anlamsızlaşır.

:::

---

## Soru: Ders İçi Kısa Örnek

$$
y''+4y=2,
\qquad
y(0)=0,
\qquad
y'(0)=1
$$

Laplace dönüşümüyle çözün.

::: {.notes}

Bu örnek, dönüşüm hattını baştan sona kısa bir hesapta gösterir. Denklem ikinci mertebe, sağ taraf sabit ve iki başlangıç koşulu verilmiş. Klasik yöntem de çalışır; burada amaç türev kuralının başlangıç koşullarını nasıl doğrudan $Y(s)$ denklemine taşıdığını görmek.

Önce denklemin her teriminin dönüşümünü alacağız. Ardından $Y(s)$'i yalnız bırakacak, ifadeyi temel dönüşüm tablosuna uygun parçalara ayıracak ve sonucu başlangıç koşullarıyla doğrulayacağız.

:::

---

## Dönüşüm Uzayında

$$
(s^2Y-1)+4Y=\frac2s
$$

$$
Y(s)=\frac{1}{s^2+4}+\frac{2}{s(s^2+4)}
$$

$$
Y(s)=\frac{1}{s^2+4}+\frac{1}{2s}-\frac{s}{2(s^2+4)}
$$

::: {.notes}

$\mathcal{L}\{y''\}=s^2Y-sy(0)-y'(0)$ kuralında $y(0)=0$ ve $y'(0)=1$ yazılınca $s^2Y-1$ elde edilir. Sağ taraftaki sabit $2$ fonksiyonunun dönüşümü $2/s$'dir. Böylece $(s^2+4)Y=1+2/s$ olur.

$Y$ yalnız bırakıldıktan sonra ilk terim doğrudan sinüs satırına uyar. İkinci terimi kısmi kesirlere ayırdığımızda $2/[s(s^2+4)]=1/(2s)-s/[2(s^2+4)]$ elde edilir. Artık bütün terimler tablodan okunabilir.

:::

---

## Geri Dönüş ve Kontrol

$$
\boxed{y(t)=\frac12+\frac12\sin2t-\frac12\cos2t}
$$

$$
y(0)=0,
\qquad
y'(0)=1
$$

$$
y''+4y=2
$$

::: {.notes}

$1/(s^2+4)$ terimi $(1/2)\sin2t$, $1/(2s)$ terimi $1/2$, $-s/[2(s^2+4)]$ terimi ise $-(1/2)\cos2t$ verir. Bu üç katkı toplanınca belirtilen çözüm elde edilir.

Kontrol için $t=0$ yazıldığında $y(0)=1/2-1/2=0$ olur. Türev $y'(t)=\cos2t+\sin2t$ olduğundan $y'(0)=1$ çıkar. İkinci türev denklemde yerine konduğunda sinüs ve kosinüs terimleri sadeleşir, geriye $2$ kalır. Böylece dönüşüm, geri dönüş ve doğrulama zinciri tamamlanır.

:::

---

## Soru: Sağ Tarafı Sıfır Olmayan Denklem

$$
y''+4y'+3y=6,
\qquad
y(0)=0,\; y'(0)=0
$$

::: {.notes}

Homojen olmayan bir denklem. Klasik yolda önce $y_h$, sonra belirsiz katsayılarla $y_p$, en sonda başlangıç koşulları gelirdi — üç ayrı aşama.

Laplace yönteminde ayrım yok. Denklemin her terimi dönüştürülür; sağ taraf da dönüşür.

Sabit $6$ fonksiyonunun dönüşümü $\dfrac{6}{s}$'tir. Başlangıç koşullarının ikisi de sıfır olduğundan türev kurallarındaki koşul terimleri düşer: $\mathcal{L}\{y''\}=s^2Y$ ve $\mathcal{L}\{y'\}=sY$.

Sıfır başlangıç koşulları hesabı kısaltıyor, ama yöntemi değiştirmiyor. Sıfırdan farklı koşullarda aynı adımlar fazladan birkaç terimle yürür.

:::

---

## Çözüm: Cebirsel Denklem

$$
(s^2+4s+3)Y=\frac{6}{s}
$$

$$
Y(s)=\frac{6}{s(s+1)(s+3)}
$$

::: {.notes}

Dönüşüm sonrası denklem $s^2Y+4sY+3Y=\dfrac{6}{s}$ olur. $Y$ parantezine alalım: $(s^2+4s+3)Y=\dfrac{6}{s}$.

Payda çarpanlarına ayrılır: $s^2+4s+3=(s+1)(s+3)$. Buradan $Y(s)=\dfrac{6}{s(s+1)(s+3)}$ elde edilir.

Paydadaki üç çarpanın kaynağına dikkat edin. $(s+1)$ ve $(s+3)$ karakteristik polinomdan, yani denklemin kendisinden geliyor. Yalnız $s$ çarpanı ise sağ taraftan, sabit girdinin dönüşümünden geliyor.

Bu ayrım genel bir örüntüdür: denklemin payda çarpanları homojen çözümü, girdinin getirdiği çarpanlar özel çözümü üretir. Klasik yöntemdeki $y_h+y_p$ ayrımı burada kısmi kesirlerin içinde saklı duruyor.

:::

---

## Çözüm: Üç Kesir

$$
6=A(s+1)(s+3)+Bs(s+3)+Cs(s+1)
$$

$$
A=2,\quad B=-3,\quad C=1
$$

$$
\boxed{y(t)=2-3e^{-t}+e^{-3t}}
$$

::: {.notes}

Üç ayrık kök var, dolayısıyla üç kesir yazılır: $\dfrac{A}{s}+\dfrac{B}{s+1}+\dfrac{C}{s+3}$. Paydalar eşitlenince payların eşitliği çıkar.

Kökleri yerine koyalım. $s=0$: $6=A(1)(3)=3A$, yani $A=2$. $s=-1$: $6=B(-1)(2)=-2B$, yani $B=-3$. $s=-3$: $6=C(-3)(-2)=6C$, yani $C=1$.

Ters dönüşüm: $\dfrac{2}{s}\to2$, $\dfrac{-3}{s+1}\to-3e^{-t}$, $\dfrac{1}{s+3}\to e^{-3t}$. Çözüm $y(t)=2-3e^{-t}+e^{-3t}$'dir.

Doğrulayalım: $y(0)=2-3+1=0$ ✓. Türev $y'(t)=3e^{-t}-3e^{-3t}$ ve $y'(0)=3-3=0$ ✓.

Çözümü yorumlayalım. Üstel terimler $t$ büyüdükçe sönüyor ve geriye sabit $2$ kalıyor. Sistem, sabit bir girdiye karşı $2$ değerinde bir denge durumuna yerleşiyor. Bu değer denklemden doğrudan da okunabilir: $y$ sabitse $3y=6$ olur.

:::

---

## Klasik Yolla Karşılaştırma

| Adım | Klasik | Laplace |
|---|---|---|
| Homojen çözüm | Ayrı hesap | Paydada |
| Özel çözüm | Ayrı yöntem | Paydada |
| Başlangıç koşulu | En sonda | Formülde |

::: {.notes}

İki yol da aynı çözüme varır, ama iş bölümü farklıdır. Klasik yolda üç ayrı aşama vardır ve her aşama kendi tekniğini ister: karakteristik denklem, aday kalıbı ya da Wronskian, sonra sabit sistemi.

Laplace yönteminde tek bir hesap zinciri var. Homojen ve özel çözüm ayrımı yapılmaz; ikisi de paydanın çarpanları olarak görünür ve kısmi kesirler onları kendiliğinden ayırır.

Bunun bedeli kısmi kesir hesabıdır. Payda üç dört çarpana ayrıldığında bu adım klasik yoldaki cebirden daha uzun sürebilir. Yöntem seçiminde ölçüt şudur: başlangıç koşulları sıfırdan farklıysa ya da sağ taraf parçalı/süreksizse Laplace açık ara kısadır; basit sağ taraflı ve koşulsuz denklemlerde klasik yol daha hızlıdır.

:::

---

## Sık Yapılan Hatalar

1. $Y$'yi yalnız bırakmadan ayrıştırmaya geçmek
2. Katlı kökte tek terim yazmak
3. Sinüs satırında $b$ çarpanını atlamak
4. Sağ tarafın dönüşümünü almayı unutmak
5. Çarpımın ters dönüşümünü çarpım sanmak

::: {.notes}

Birinci hata sıra hatasıdır. Denklemin her iki tarafında $Y$ bulunuyorsa önce toplanır, sonra bölme yapılır.

İkinci hata $(s+2)^2$ gibi bir payda görüldüğünde yalnız $\dfrac{B}{(s+2)^2}$ yazmaktır. İki terim gerekir ve karşılıkları $e^{-2t}$ ile $te^{-2t}$'dir; biri eksik kalırsa başlangıç koşulları sağlanmaz.

Dördüncü hata homojen olmayan denklemlerde olur. Sağ taraf da bir fonksiyondur ve dönüştürülmesi gerekir; $6$ yerine $6$ yazıp geçmek, $\dfrac{6}{s}$ yerine sabit bırakmak demektir ve payda yapısını bozar.

Beşinci hata en pahalıya mal olanıdır. $\dfrac{1}{s^2+1}\cdot\dfrac{1}{s-1}$ ifadesinin karşılığı $\sin t\cdot e^{t}$ değildir. Çarpımın karşılığı ayrı bir işlemle — konvolüsyonla — verilir ve o işlem ilerideki bir konuda kurulacak.

:::

---

## Karar Soruları

Hangi kalıp, kaç terim?

1. $\dfrac{1}{s^2(s-1)}$
2. $\dfrac{s}{(s+2)^3}$
3. $\dfrac{4}{(s^2+4)(s-1)}$

::: {.notes}

Birincisinde payda $s^2$ ve $s-1$ çarpanlarından oluşuyor. $s=0$ çift kök olduğundan iki terim gerekir: $\dfrac{A}{s}+\dfrac{B}{s^2}$. Üçüncü terim $\dfrac{C}{s-1}$'dir. Karşılıklar sırasıyla sabit, $t$ ve $e^{t}$ tipindedir.

İkincisinde $s=-2$ üç katlıdır; üç terim yazılır: $\dfrac{A}{s+2}+\dfrac{B}{(s+2)^2}+\dfrac{C}{(s+2)^3}$. Karşılıklarda $e^{-2t}$, $te^{-2t}$ ve $t^2e^{-2t}$ görünür.

Üçüncüsünde $s^2+4$ çarpanı kompleks köklüdür ve payı birinci dereceden bırakılır: $\dfrac{As+B}{s^2+4}+\dfrac{C}{s-1}$. Çözümde $\cos2t$, $\sin2t$ ve $e^{t}$ terimleri bulunur.

Üç soruda da hesap yapılmadı; yalnız payda okunup kalıp ve terim sayısı belirlendi. Bu karar doğru verildiğinde geri kalan işlem mekaniktir.

:::

---

## Sonraki Adım: Girdi Sıçrarsa

$$
g(t)=
\begin{cases}
0, & t<2\\
1, & t\ge2
\end{cases}
$$

Bir sistem $t=2$'de devreye giriyor.

Bunu tek bir formülle nasıl yazarız?

::: {.notes}

Laplace yöntemi artık uçtan uca çalışıyor, ama şu ana kadar çözülen denklemlerin sağ tarafları süreklidiydi. Bu, yöntemin asıl üstünlüğünü henüz kullanmadığımız anlamına gelir.

Mühendislik modellerinde girdi çoğu zaman sürekli değildir: bir anahtar kapanır, bir kuvvet devreye girer, bir kaynak kesilir. Böyle bir girdi parçalı tanımlıdır ve klasik yöntemlerle çalışmak için denklem parçalara bölünmelidir.

Laplace tarafında sıçrama sorun çıkarmıyordu — parçalı bir fonksiyonun dönüşümünü doğrudan integralle hesaplamıştık ve sonuçta $e^{-3s}$ tipi bir çarpan belirmişti.

Bu çarpanı sistematik hâle getiren araç birim basamak fonksiyonudur: parçalı girdileri tek formülde yazar ve dönüşüm tarafında bir karşılığı vardır.

:::

---

## Kaynak Notu

Ana kaynak: Nagle, Saff ve Snider.

::: {.notes}

Ters dönüşüm ve başlangıç değer problemlerinin buradaki kurulumu — kısmi kesirlerle ayrıştırma, tablo üzerinden geri okuma ve beş adımlı çözüm akışı — Nagle, Saff ve Snider kaynağındaki klasik yaklaşımla uyumludur. Kısmi kesir cebri burada bir amaç değil, geri dönüşün aracıdır; asıl ağırlık payda yapısının çözümün bileşenlerini nasıl belirlediğindedir.

:::

---
