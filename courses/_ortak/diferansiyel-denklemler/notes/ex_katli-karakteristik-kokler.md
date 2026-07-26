---
title: "Katlı Karakteristik Kökler: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
description: "Çift reel köklü sabit katsayılı denklemlerde ikinci bağımsız çözümü kurma ve başlangıç koşullarını uygulama pratiği."
execute:
  echo: false
---

# Katlı Karakteristik Kökler: Alıştırmalar

Karakteristik denklemde aynı reel kök iki kez çıkarsa $e^{rx}$ tek başına
ikinci mertebeden çözüm uzayını doldurmaz. İkinci bağımsız çözüm
$xe^{rx}$ olur:

$$
\boxed{y=(C_1+C_2x)e^{rx}}.
$$

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Çift köklü altı ikinci mertebe denklem üret. Önce diskriminant veya
> çarpanlara ayırma ile katlı kökü bulmamı bekle. Genel çözümde x çarpanını
> unutursam yalnız bağımsızlık sorununu belirt.
:::

## Çözüm Hattı

### Örnek 1: Klasik Çift Kök

$$
y''-4y'+4y=0.
$$

$$
r^2-4r+4=(r-2)^2=0.
$$

Çift kök $r=2$:

$$
\boxed{y=(C_1+C_2x)e^{2x}}.
$$

### Örnek 2: Negatif Çift Kök

$$
y''+6y'+9y=0.
$$

$$
(r+3)^2=0,\qquad
\boxed{y=(C_1+C_2x)e^{-3x}}.
$$

### Örnek 3: Wronskian Kontrolü

$y_1=e^{rx}$, $y_2=xe^{rx}$ için

$$
W=
\begin{vmatrix}
e^{rx}&xe^{rx}\\
re^{rx}&(1+rx)e^{rx}
\end{vmatrix}
=e^{2rx}\neq0.
$$

Dolayısıyla iki çözüm bağımsızdır.

## Başlangıç Koşulları

### Örnek 4

$$
y''-4y'+4y=0,\qquad y(0)=1,\quad y'(0)=0.
$$

$$
y=(C_1+C_2x)e^{2x}.
$$

$y(0)=C_1=1$. Türev

$$
y'=\bigl(C_2+2C_1+2C_2x\bigr)e^{2x}.
$$

$y'(0)=C_2+2C_1=0$ olduğundan $C_2=-2$:

$$
\boxed{y=(1-2x)e^{2x}}.
$$

### Örnek 5: Sıfır Çift Kök

$$
y''=0
$$

için karakteristik denklem $r^2=0$ ve çift kök $r=0$'dır:

$$
y=C_1+C_2x.
$$

Bu sonuç doğrudan iki kez integrasyonla bulunan çözümle aynıdır.

## Hata Avı

### Örnek 6: Aynı Çözümü İki Kez Yazmak

$C_1e^{rx}+C_2e^{rx}=(C_1+C_2)e^{rx}$ tek bağımsız çözüm taşır. İkinci
çözümde $x$ çarpanı gerekir.

### Örnek 7: Türevde Çarpım Kuralı

$(C_1+C_2x)e^{rx}$ türevlenirken hem parantez hem üstel türevlenir.

## Karma Çalışma Soruları

### Soru 1

$y''-2y'+y=0$ denklemini çözün.

### Soru 2

$y''+8y'+16y=0$ denklemini çözün.

### Soru 3

$4y''-12y'+9y=0$ denklemini çözün.

### Soru 4

$y''-6y'+9y=0,\ y(0)=2,\ y'(0)=1$ problemini çözün.

### Soru 5

$y''+4y'+4y=0,\ y(0)=0,\ y'(0)=3$ problemini çözün.

### Soru 6

Kökü $r=-2$ olan çift köklü monik karakteristik denklemi kurun.

### Soru 7

$e^{rx}$ ile $xe^{rx}$ çözümlerinin ikisini de diferansiyel denklemde
doğrulayın.

### Soru 8

Katlı kökte neden iki ayrı sabite rağmen aynı üstel çözümü iki kez yazmanın
yeterli olmadığını açıklayın.

## Çalışmanızı Kontrol Etme

> Çözümümü çift kökün tanınması, ikinci çözümde x çarpanı, çarpım kuralıyla
> türev, iki bağımsız sabit ve başlangıç koşulları açısından incele. Hata varsa
> doğru çözümü vermeden bağımsızlığın kaybolduğu adımı belirt.
