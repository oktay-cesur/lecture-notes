---
title: "Özel Çözüm Yöntem Seçimi: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-23
description: "Homojen olmayan lineer denklemlerde belirsiz katsayılar ve sabitlerin değişimi arasında yöntem seçme, çakışmayı düzeltme ve tam çözüm kurma pratiği."
execute:
  echo: false
---

# Özel Çözüm Yöntem Seçimi: Alıştırmalar

Standart biçimdeki

$$
y''+P(x)y'+Q(x)y=g(x)
$$

denkleminde önce ilişkili homojen denklem çözülür. Genel çözüm

$$
y=y_h+y_p
$$

biçimindedir. Sabit katsayılı bir denklemde $g(x)$ polinom, üstel,
sinüs–kosinüs veya bunların sonlu toplam ve çarpımlarından oluşuyorsa
belirsiz katsayılar yöntemi genellikle daha kısadır. Bu yapı yoksa veya
katsayılar değişkense sabitlerin değişimi kullanılır.

Belirsiz katsayılarda aday $y_h$ ile çakışıyorsa, çakışma kalmayana kadar
$x$ ile çarpılır. Sabitlerin değişiminde denklem önce standart biçime
getirilir ve homojen çözümlerden Wronskian kurulur.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Önce yöntemi ve gerekçesini kendiniz yazın. Yapay zekâdan çözümü üretmesini
> değil, katsayıların sabit olup olmadığını, sağ tarafın aday ailesine girip
> girmediğini ve çakışma kontrolünü denetlemesini isteyin.
:::

## Çözümlü Örnekler

### Örnek 1: Polinom Sağ Taraf

$$
y''-3y'+2y=4x+6.
$$

**Tanı.** Katsayılar sabittir ve sağ taraf birinci dereceden polinomdur.
Belirsiz katsayılar yöntemi uygundur.

**Homojen çözüm.**

$$
r^2-3r+2=(r-1)(r-2)=0,
$$

$$
y_h=C_1e^x+C_2e^{2x}.
$$

**Özel çözüm adayı.** Polinom ailesi homojen çözümle çakışmaz:

$$
y_p=Ax+B.
$$

**Yerine koyma.**

$$
0-3A+2(Ax+B)=4x+6.
$$

Katsayılar eşleştirilirse

$$
2A=4,
\qquad
2B-3A=6
$$

elde edilir. $A=2$ ve $B=6$:

$$
\boxed{y=C_1e^x+C_2e^{2x}+2x+6}.
$$

**Kontrol.** $y_p'=2$ ve $y_p''=0$ olduğundan
$y_p''-3y_p'+2y_p=-6+4x+12=4x+6$ bulunur.

### Örnek 2: Basit Kökle Çakışma

$$
y''-3y'+2y=e^x.
$$

**Tanı.** Denklem sabit katsayılıdır ve sağ taraf üstel ailedendir.
Belirsiz katsayılar kullanılabilir. Ancak $r=1$ karakteristik kök olduğu
için $Ae^x$ adayı homojen çözümle çakışır.

**Düzeltilmiş aday.**

$$
y_p=Axe^x.
$$

Türevler

$$
y_p'=A(1+x)e^x,
\qquad
y_p''=A(2+x)e^x
$$

olur. Denklemde yerine koyunca

$$
A\bigl[(2+x)-3(1+x)+2x\bigr]e^x=e^x,
$$

$$
-A=1.
$$

Dolayısıyla $A=-1$ ve

$$
\boxed{y=C_1e^x+C_2e^{2x}-xe^x}.
$$

### Örnek 3: Aday Tablosuna Girmeyen Sağ Taraf

$$
y''+y=\sec x,
\qquad
-\frac{\pi}{2}<x<\frac{\pi}{2}.
$$

**Tanı.** $\sec x$ türev alındıkça sonlu bir polinom–üstel–trigonometrik
aile içinde kalmaz. Sabitlerin değişimi kullanılır.

**Homojen çözüm ve Wronskian.**

$$
y_1=\cos x,
\qquad
y_2=\sin x,
\qquad
W=1.
$$

Standart biçimde $g(x)=\sec x$ olduğundan

$$
u_1'=-\frac{y_2g}{W}=-\tan x,
\qquad
u_2'=\frac{y_1g}{W}=1.
$$

İntegraller

$$
u_1=\ln(\cos x),
\qquad
u_2=x
$$

verir. Seçilen aralıkta $\cos x>0$ olduğundan logaritma bu biçimde
yazılabilir.

$$
y_p=u_1y_1+u_2y_2
=\cos x\ln(\cos x)+x\sin x.
$$

Genel çözüm

$$
\boxed{
y=C_1\cos x+C_2\sin x+\cos x\ln(\cos x)+x\sin x
}
$$

olur.

### Örnek 4: Değişken Katsayılı Denklem

$$
x^2y''-2xy'+2y=x^3,
\qquad
x>0,
$$

ve homojen çözümler $y_1=x$, $y_2=x^2$ olarak verilsin.

**Tanı.** Katsayılar değişkendir. Denklem $x^2$'ye bölünmeden
sabitlerin değişimi formülleri uygulanamaz.

**Standart biçim.**

$$
y''-\frac{2}{x}y'+\frac{2}{x^2}y=x.
$$

Burada $g(x)=x$ ve

$$
W=
\begin{vmatrix}
x&x^2\\
1&2x
\end{vmatrix}
=x^2.
$$

Bu nedenle

$$
u_1'=-\frac{x^2\cdot x}{x^2}=-x,
\qquad
u_2'=\frac{x\cdot x}{x^2}=1.
$$

$$
u_1=-\frac{x^2}{2},
\qquad
u_2=x.
$$

Özel çözüm

$$
y_p=u_1x+u_2x^2
=-\frac{x^3}{2}+x^3
=\frac{x^3}{2}
$$

ve genel çözüm

$$
\boxed{y=C_1x+C_2x^2+\frac{x^3}{2},\qquad x>0}
$$

olur.

### Örnek 5: Trigonometrik Çakışma

$$
y''+4y=\sin 2x.
$$

**Tanı.** Sabit katsayılı denklem ve trigonometrik sağ taraf belirsiz
katsayılara uygundur. Homojen çözüm

$$
y_h=C_1\cos2x+C_2\sin2x
$$

olduğu için standart $A\cos2x+B\sin2x$ adayı bütünüyle çakışır. Aday bir
kez $x$ ile çarpılır:

$$
y_p=x(A\cos2x+B\sin2x).
$$

Katsayı hesabı sonucunda $A=-1/4$ ve $B=0$ bulunur:

$$
y_p=-\frac{x}{4}\cos2x.
$$

Dolayısıyla

$$
\boxed{
y=C_1\cos2x+C_2\sin2x-\frac{x}{4}\cos2x
}.
$$

**Kontrol.** $y_p''+4y_p=\sin2x$ eşitliği doğrudan türev alınarak
doğrulanır.

## Hata Avı

### Örnek 6: Sağ Tarafa Bakarak Acele Etmek

$$
x^2y''-xy'+y=x^2
$$

denkleminde sağ taraf polinom olsa da katsayılar sabit değildir. Yalnız
$g(x)$'in polinom olmasına bakarak belirsiz katsayılar seçilemez.

### Örnek 7: Çakışmayı Yöntem Hatası Sanmak

$$
y''-3y'+2y=e^x
$$

denkleminde $y_p=Ae^x$ yazınca sol tarafın sıfır olması, yöntemin
uygulanamadığını göstermez. Aday homojen çözümle çakışmıştır; $x$ ile
çarpılması gerekir.

### Örnek 8: Standart Biçimi Atlamak

$$
3y''+3y=\sec x
$$

denkleminde sabitlerin değişimi formülündeki sağ taraf $\sec x$ değil,
denklem $3$'e bölündükten sonra elde edilen $\frac13\sec x$'tir.

## Yöntem Seçme Soruları

Aşağıdaki denklemleri çözmeden uygun özel çözüm yöntemini seçin. Belirsiz
katsayılar seçiyorsanız aday biçimini ve varsa çakışma düzeltmesini yazın.

### Soru 1

$$
y''-y=xe^{2x}.
$$

### Soru 2

$$
y''+y=\tan x.
$$

### Soru 3

$$
y''-4y'+4y=e^{2x}.
$$

### Soru 4

$$
y''+9y=\cos3x.
$$

### Soru 5

$$
x^2y''-3xy'+3y=x^2.
$$

### Soru 6

$$
y''+2y'+y=x^2e^{-x}.
$$

### Soru 7

$$
y''-2y=e^{x^2}.
$$

### Soru 8

$$
y''+4y=3x+2\sin x.
$$

## Tam Çözüm Soruları

### Soru 9

$$
y''-5y'+6y=4x.
$$

Genel çözümü belirsiz katsayılar yöntemiyle bulun.

### Soru 10

$$
y''-2y'+y=e^x.
$$

Çakışma derecesini belirleyin ve genel çözümü bulun.

### Soru 11

$$
y''+y=\csc x,
\qquad
0<x<\pi.
$$

Genel çözümü sabitlerin değişimiyle bulun.

### Soru 12

$$
x^2y''-2xy'+2y=x^2,
\qquad
x>0,
$$

homojen çözümleri $y_1=x$, $y_2=x^2$ olmak üzere genel çözümü bulun.

### Soru 13

$$
y''+4y=\cos2x,
\qquad
y(0)=0,
\qquad
y'(0)=1.
$$

Başlangıç değer problemini çözün.

### Soru 14

$$
y''-y=e^x+\frac{1}{1+e^x}.
$$

Sağ tarafın iki parçası için yöntem seçimini ayrı yapın. Özel çözümü uygun
iki parçanın toplamı olarak kurun.

## Çalışmanızı Kontrol Etme

> Çözümümü standart biçim, homojen çözüm, yöntem seçiminin gerekçesi,
> belirsiz katsayılarda aday ailesi ve çakışma derecesi, sabitlerin
> değişiminde Wronskian ve işaretler, genel çözümün $y_h+y_p$ biçiminde
> tamamlanması açısından incele. Hata varsa doğru sonucu vermeden ilk yanlış
> kararı veya işlemi belirt.
