---
title: "Ters Laplace ve Başlangıç Değer Problemleri: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — Kavram ve Yöntem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-24
description: "Ters Laplace kalıplarını seçme, kısmi kesirleri kurma ve başlangıç değer problemlerini Laplace dönüşümüyle çözme pratiği."
execute:
  echo: false
---

# Ters Laplace ve Başlangıç Değer Problemleri: Alıştırmalar

Ters dönüşümde amaç, $Y(s)$ ifadesini tablodan okunabilen kısa parçalara
ayırmaktır. Başlangıç koşulları türev formüllerinde hesaba girdiği için çözüm
sonunda ayrıca sabit belirleme adımı bulunmaz.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Önce $Y(s)$'yi yalnız bırakıp kısmi kesir kalıbını kendiniz yazın. Yapay
> zekâdan katsayıları çözmesini değil, payda çarpanına karşı doğru sayıda terim
> yazıp yazmadığınızı ve başlangıç koşullarının dönüşüme girip girmediğini
> kontrol etmesini isteyin.
:::

## Tanıma ve Karar

### Örnek 1: Ayrık Kök Kalıbı

$$
\frac{1}{s(s+2)}
$$

iki ayrık doğrusal çarpan taşır. Kısmi kesir kalıbı
$A/s+B/(s+2)$ olmalıdır.

### Örnek 2: Katlı Kök Kalıbı

$$
\frac{s}{(s+1)^2}
$$

için $A/(s+1)+B/(s+1)^2$ yazılır. İkinci terimin özgün karşılığı
$te^{-t}$ tipindedir.

### Örnek 3: Kompleks Kök Kalıbı

$$
\frac{2s+1}{s^2+4}
$$

payda sinüs–kosinüs satırına gider. Paydaki $s$ kosinüsü, sabit terim sinüsü
üretir; kısmi kesir gerekmez.

### Örnek 4: Yöntem Kararı

Başlangıç koşulları verilen sabit katsayılı bir denklemde Laplace yöntemi,
koşulları doğrudan dönüşüm denklemine taşır. Koşulsuz basit bir homojen
denklemde ise karakteristik denklem daha kısa olabilir.

## Mekanizmayı Kurma

### Örnek 5: Birinci Mertebe Kurulumu

$$
y'+2y=4,\q\quad y(0)=1
$$

Dönüşüm denklemi

$$
sY-1+2Y=\frac4s
$$

ve dolayısıyla

$$
Y=\frac{s+4}{s(s+2)}
$$

olur. Burada yalnız kurulum ölçülmektedir.

### Örnek 6: İkinci Mertebe Kurulumu

$$
y''+y=0,\q\quad y(0)=0,\quad y'(0)=3
$$

$$
s^2Y-3+Y=0,\q\quad
Y=\frac3{s^2+1}.
$$

Başlangıç eğimi $-y'(0)$ teriminden dönüşüm denklemine girmiştir.

## Temel Tam Çözümler

### Örnek 7: Birinci Mertebe Başlangıç Değeri

$$
y'+y=1,\q\quad y(0)=0
$$

Dönüşüm alalım:

$$
sY+Y=\frac1s,\q\quad
Y=\frac1{s(s+1)}.
$$

Kısmi kesirler

$$
\frac1{s(s+1)}=\frac1s-\frac1{s+1}
$$

verir. Ters dönüşümle

$$
\boxed{y(t)=1-e^{-t}}.
$$

$y(0)=0$ sağlanır ve $y'+y=1$ yerine koymayla doğrulanır.

### Örnek 8: İkinci Mertebe Başlangıç Değeri

$$
y''+3y'+2y=0,\q\quad y(0)=1,\quad y'(0)=0
$$

Dönüşüm denklemi

$$
(s^2Y-s)+3(sY-1)+2Y=0
$$

olur. Buradan

$$
Y=\frac{s+3}{(s+1)(s+2)}
=\frac2{s+1}-\frac1{s+2}
$$

ve

$$
\boxed{y(t)=2e^{-t}-e^{-2t}}
$$

bulunur. $y(0)=1$ ve $y'(0)=0$ koşulları doğrudan sağlanır.

## Hata Avı

### Örnek 9: İlk Hata Nerede?

Bir öğrenci $y''+y=0$, $y(0)=0$, $y'(0)=3$ için
$s^2Y+Y=0$ yazıyor. İlk hata, ikinci türev dönüşümündeki $-y'(0)$ terimini
atlamaktır. Doğru denklem $(s^2+1)Y=3$ olmalıdır.

## Karşılaştırma

### Örnek 10: Aynı Payda, Farklı Bilgi

$y''+3y'+2y=0$ denkleminde karakteristik yöntem $(r+1)(r+2)$ köklerini
bulur ve iki sabiti sonradan belirler. Laplace yönteminde aynı polinom
$Y(s)$'nin paydasında görünür; başlangıç koşulları payı belirler. İki yöntem
aynı yapıyı farklı sırayla kullanır.

## Hafif Karma Örnek

### Örnek 11: Homojen Olmayan Problem

$$
y''+4y=4,\q\quad y(0)=0,\quad y'(0)=0
$$

$$
(s^2+4)Y=\frac4s,\q\quad
Y=\frac4{s(s^2+4)}.
$$

Kısa ayrıştırma

$$
\frac4{s(s^2+4)}=\frac1s-\frac{s}{s^2+4}
$$

verir. Böylece

$$
\boxed{y(t)=1-\cos2t}.
$$

Başlangıç koşulları ve denklem doğrudan doğrulanır.

## Karma Çalışma Soruları

### Soru 1

$$
\mathcal L^{-1}\left\{\frac{5}{s(s+5)}\right\}
$$

ifadesini kısmi kesirlere ayırarak bulun.

### Soru 2

$$
\mathcal L^{-1}\left\{\frac{2s+3}{(s+1)^2}\right\}
$$

ifadesini temel tabloya uygun parçalara ayırın ve ters dönüşümü bulun.

### Soru 3

$$
\mathcal L^{-1}\left\{\frac{s+2}{(s+2)^2+9}\right\},
\q\quad
\mathcal L^{-1}\left\{\frac{6}{(s+2)^2+9}\right\}
$$

ters dönüşümlerini bulun.

### Soru 4

$$
y'+2y=3,
\q\quad
y(0)=1
$$

başlangıç değer problemini Laplace dönüşümüyle çözün.

### Soru 5

$$
y''+3y'+2y=0,
\q\quad
y(0)=0,\quad y'(0)=1
$$

problemini Laplace dönüşümüyle uçtan uca çözün.

### Soru 6

$$
y''+y=\sin t,
\q\quad
y(0)=0,\quad y'(0)=0
$$

problemini Laplace yöntemiyle çözün; $Y(s)$ paydasındaki katlı çarpanı doğru
ayrıştırın.

### Soru 7

Bir öğrenci $y'(0)=4$ koşulunu $\mathcal L\{y'\}=sY-4$ içinde kullanıyor.
Bu kullanımın ne zaman doğru olduğunu ve ikinci türev dönüşümünde koşulun
hangi terimde göründüğünü açıklayın.

### Soru 8

$$
(s^2+4s+5)Y(s)=s+5
$$

denkleminden $Y(s)$'yi yalnız bırakın, kareye tamamlama yapın ve ters Laplace
dönüşümünü bulun.

## Çalışmanızı Kontrol Etme

> Çözümümü $Y(s)$'yi yalnız bırakma, kısmi kesirlerde terim sayısı, sinüs ve
> kosinüs payları, başlangıç koşullarının türev formüllerine girişi ve son
> çözümün koşulları sağlaması açısından incele. Hata varsa doğru katsayıları
> vermeden ilk yanlış adımı belirt.
