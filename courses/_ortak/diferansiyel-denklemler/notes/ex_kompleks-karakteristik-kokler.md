---
title: "Kompleks Karakteristik Kökler: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
description: "Kompleks eşlenik karakteristik köklerden gerçek değerli sinüs-kosinüs çözümünü kurma pratiği."
execute:
  echo: false
---

# Kompleks Karakteristik Kökler: Alıştırmalar

Karakteristik kökler

$$
r=\alpha\pm i\beta,\qquad \beta>0
$$

ise gerçek değerli genel çözüm

$$
\boxed{y=e^{\alpha x}\bigl(C_1\cos\beta x+C_2\sin\beta x\bigr)}
$$

olur. $\alpha$ zarfın büyüme veya sönmesini, $\beta$ salınım hızını belirler.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Kompleks eşlenik köklü sekiz denklem üret. Köklerde alfa ve beta değerlerini
> benim ayırmamı bekle. Gerçek çözümü yazarken üstel zarfı veya beta katsayısını
> unutursam yalnız eksik bileşeni belirt.
:::

## Çözüm Hattı

### Örnek 1: Saf İmajiner Kökler

$$
y''+9y=0.
$$

$$
r^2+9=0,\qquad r=\pm3i.
$$

$\alpha=0$, $\beta=3$:

$$
\boxed{y=C_1\cos3x+C_2\sin3x}.
$$

### Örnek 2: Sönen Salınım

$$
y''+2y'+5y=0.
$$

$$
r=\frac{-2\pm\sqrt{4-20}}2=-1\pm2i.
$$

$$
\boxed{y=e^{-x}(C_1\cos2x+C_2\sin2x)}.
$$

$e^{-x}$ zarfı genliği azaltır.

### Örnek 3: Büyüyen Salınım

$$
y''-4y'+13y=0.
$$

$$
r=2\pm3i,
\qquad
\boxed{y=e^{2x}(C_1\cos3x+C_2\sin3x)}.
$$

## Başlangıç Koşulları

### Örnek 4

$$
y''+4y=0,\qquad y(0)=2,\quad y'(0)=-4.
$$

$$
y=C_1\cos2x+C_2\sin2x.
$$

$C_1=2$. Türev

$$
y'=-2C_1\sin2x+2C_2\cos2x
$$

ve $2C_2=-4$ olduğundan $C_2=-2$:

$$
\boxed{y=2\cos2x-2\sin2x}.
$$

### Örnek 5: Kareye Tamamlama

$$
r^2+6r+13=0
\quad\Longleftrightarrow\quad
(r+3)^2+4=0.
$$

$r=-3\pm2i$ ve çözüm

$$
y=e^{-3x}(C_1\cos2x+C_2\sin2x).
$$

## Hata Avı

### Örnek 6: $\beta$ Yerine $\beta^2$ Yazmak

Kökün imajiner kısmı $\beta$ ise trigonometrik ifadelerde $\beta x$ bulunur;
$\beta^2x$ değil.

### Örnek 7: Üstel Zarfı Atlamak

$\alpha\neq0$ olduğunda yalnız sinüs-kosinüs yazmak denklemi sağlamaz.

## Karma Çalışma Soruları

### Soru 1

$y''+16y=0$ denklemini çözün.

### Soru 2

$y''+4y'+13y=0$ denklemini çözün.

### Soru 3

$y''-2y'+10y=0$ denklemini çözün.

### Soru 4

$y''+6y'+25y=0$ denklemini çözün.

### Soru 5

$y''+9y=0,\ y(0)=1,\ y'(0)=6$ problemini çözün.

### Soru 6

$y''+2y'+5y=0,\ y(0)=0,\ y'(0)=2$ problemini çözün.

### Soru 7

Kökleri $-2\pm5i$ olan monik karakteristik denklemi kurun.

### Soru 8

$\alpha$ ve $\beta$ değerlerinin çözüm grafiğinin zarfına ve periyoduna
etkisini açıklayın.

## Çalışmanızı Kontrol Etme

> Çözümümü diskriminant, alfa ve beta ayrımı, üstel zarf, sinüs-kosinüs
> katsayısı, türev ve başlangıç koşulları açısından incele. Hata varsa doğru
> formülü vermeden eksik zarfı veya yanlış frekansı belirt.
