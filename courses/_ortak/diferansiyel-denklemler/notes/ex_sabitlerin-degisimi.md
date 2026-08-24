---
title: "Sabitlerin Değişimi: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-05
description: "Homojen çözümlerden Wronskian ve integrallerle özel çözüm kurma; aday kalıbı olmayan sağ taraflarda çalışma pratiği."
execute:
  echo: false
---

# Sabitlerin Değişimi: Alıştırmalar

Standart biçimdeki

$$
y''+P(x)y'+Q(x)y=g(x)
$$

denkleminde homojen çözümler $y_1$ ve $y_2$ biliniyorsa özel çözüm

$$
y_p=u_1y_1+u_2y_2,
\qquad
u_1'=-\frac{y_2\,g}{W},
\qquad
u_2'=\frac{y_1\,g}{W}
$$

ile kurulur. Burada $W=W(y_1,y_2)$'dir ve temel çözüm kümesinde hiçbir noktada
sıfır olmaz.

Yöntem sağ tarafın tipine bakmaz; karşılığında iki integral ister.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Aday kalıbı yazılamayan sağ taraflara sahip beş denklem üret; ikisi değişken
> katsayılı olsun ve homojen çözümleri verilsin. Wronskian'ı ve integralleri
> benim almamı bekle. Standart biçim adımını atlarsam yalnız onu hatırlat.
:::

## Çözüm Hattı

### Örnek 1: Aday Kalıbı Olmayan Sağ Taraf

$$
y''+y=\sec x,\qquad 0<x<\frac{\pi}{2}.
$$

**Homojen çözümler ve Wronskian.**

$$
y_1=\cos x,\quad y_2=\sin x,
\qquad
W=\cos^2x+\sin^2x=1.
$$

**Türevler.**

$$
u_1'=-\sin x\sec x=-\tan x,
\qquad
u_2'=\cos x\sec x=1.
$$

**İntegraller.**

$$
u_1=\ln(\cos x),
\qquad
u_2=x.
$$

$$
\boxed{y_p=\cos x\ln(\cos x)+x\sin x}.
$$

### Örnek 2: Aynı Denklem, Farklı Sağ Taraf

$$
y''+y=\csc x,\qquad 0<x<\pi.
$$

$$
u_1'=-\sin x\csc x=-1,
\qquad
u_2'=\cos x\csc x=\cot x.
$$

$$
u_1=-x,
\qquad
u_2=\ln(\sin x).
$$

$$
\boxed{y_p=-x\cos x+\sin x\ln(\sin x)}.
$$

### Örnek 3: Katlı Kök ve Bölmeli Sağ Taraf

$$
y''-2y'+y=\frac{e^{x}}{x},\qquad x>0.
$$

Çift kök $r=1$ olduğundan $y_1=e^{x}$, $y_2=xe^{x}$ ve

$$
W=e^{x}(e^{x}+xe^{x})-e^{x}\cdot xe^{x}=e^{2x}.
$$

$$
u_1'=-\frac{xe^{x}\cdot e^{x}/x}{e^{2x}}=-1,
\qquad
u_2'=\frac{e^{x}\cdot e^{x}/x}{e^{2x}}=\frac1x.
$$

$$
u_1=-x,
\qquad
u_2=\ln x.
$$

$$
\boxed{y_p=xe^{x}(\ln x-1)}.
$$

## Değişken Katsayılı Denklem

### Örnek 4: Önce Standart Biçim

$$
x^2y''-2xy'+2y=x^3,\qquad x>0,
$$

homojen çözümler $y_1=x$, $y_2=x^2$.

**Standart biçim.** $x^2$'ye bölünür:

$$
y''-\frac2xy'+\frac2{x^2}y=x
\quad\Longrightarrow\quad
g(x)=x.
$$

**Wronskian.**

$$
W=x\cdot2x-1\cdot x^2=x^2.
$$

$$
u_1'=-\frac{x^2\cdot x}{x^2}=-x,
\qquad
u_2'=\frac{x\cdot x}{x^2}=1.
$$

$$
u_1=-\frac{x^2}2,
\qquad
u_2=x.
$$

$$
y_p=-\frac{x^3}2+x^3,
\qquad
\boxed{y_p=\frac{x^3}2}.
$$

**Doğrulama.** $y_p'=\frac32x^2$, $y_p''=3x$ ve
$x^2(3x)-2x\left(\frac32x^2\right)+2\left(\frac{x^3}2\right)=x^3$ ✓.

### Örnek 5: Sabit Çarpanı Unutmamak

$$
3y''+3y=\sec x.
$$

Standart biçimde $g=\frac13\sec x$'tir. Örnek 1'in sonucu bu çarpanla
ölçeklenir:

$$
\boxed{y_p=\tfrac13\bigl(\cos x\ln(\cos x)+x\sin x\bigr)}.
$$

## Hata Avı

### Örnek 6: Çapraz Eşleşmeyi Kaçırmak

$u_1'$ ifadesinin payında $y_2$, $u_2'$ ifadesinin payında $y_1$ bulunur ve
birincisi negatiftir. İşaret ya da eşleşme kayarsa bulunan $y_p$ denklemi
sağlamaz.

### Örnek 7: $u'$ Bulup İntegrali Unutmak

Sistemden çıkan $u_1'$ ve $u_2'$'dür. $y_p$ ancak integraller alındıktan
sonra kurulur.

### Örnek 8: Homojen Terimi Hata Sanmak

Bulunan $y_p$ içinde $C y_1$ ya da $C y_2$ biçiminde bir terim çıkabilir. Bu
terim genel çözümde $C_1$ veya $C_2$ tarafından soğurulur; atmak da tutmak da
aynı çözüm ailesini verir.

## Karma Çalışma Soruları

### Soru 1

$y''+y=\tan x$ denkleminin genel çözümünü $\left(-\frac{\pi}2,\frac{\pi}2\right)$
aralığında bulun.

### Soru 2

$y''+4y=\sec2x$ denkleminin bir özel çözümünü bulun.

### Soru 3

$y''-y=\dfrac{1}{1+e^{x}}$ denkleminde $u_1'$ ve $u_2'$ ifadelerini yazın.

### Soru 4

$y''-3y'+2y=e^{x}$ denklemini sabitlerin değişimiyle çözün ve sonucu
belirsiz katsayılar yönteminin verdiği $y_p=-xe^{x}$ ile karşılaştırın.

### Soru 5

$x^2y''-3xy'+3y=x^2$, $x>0$, $y_1=x$, $y_2=x^3$ için özel çözümü bulun.

### Soru 6

$y''+y=\sec x$ çözümünde $W$'yi $y_1$ ve $y_2$'nin sırasını değiştirerek
hesaplayın; sonucun neden değişmediğini açıklayın.

### Soru 7

$u_1'y_1+u_2'y_2=0$ kısıtının neden serbestçe seçilebildiğini açıklayın.

### Soru 8

Hangi durumlarda sabitlerin değişimi yerine belirsiz katsayılar tercih
edilir? İki örnek denklemle gerekçelendirin.

## Çalışmanızı Kontrol Etme

> Çözümümü standart biçim, homojen çözümlerin doğruluğu, Wronskian, $u_1'$ ve
> $u_2'$ ifadelerindeki işaret ve çapraz eşleşme, integraller ve son
> birleştirme açısından incele. Hata varsa doğru $y_p$'yi vermeden ilk yanlış
> adımı belirt.
