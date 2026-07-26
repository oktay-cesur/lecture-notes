---
title: "Ortogonal Yörüngeler: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
description: "Bir eğri ailesinin diferansiyel denklemini çıkarıp dik kesişen yörünge ailesini bulma pratiği."
execute:
  echo: false
---

# Ortogonal Yörüngeler: Alıştırmalar

Ortogonal yörüngeler verilen eğri ailesini kesiştikleri noktalarda dik kesen
ikinci bir eğri ailesidir. Önce verilen ailedeki parametre elenir ve eğim
denklemi bulunur. Sonlu ve sıfırdan farklı $m$ eğiminde dik eğim $-1/m$'dir.
Yatay ve dikey teğetler ayrıca örtük biçimde yorumlanır.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Parametreli beş eğri ailesi üret. Önce parametreyi türev ve özgün bağıntı
> yardımıyla elememi bekle. Dik eğimi yazdıktan sonra ortaya çıkan denklemin
> sınıfını benim seçmemi iste.
:::

## Ailenin Diferansiyel Denklemi

### Örnek 1: $y=cx^3$

Türev:

$$
y'=3cx^2.
$$

Özgün bağıntıdan $c=y/x^3$ yazılır:

$$
y'=3\frac{y}{x}.
$$

Verilen ailenin eğimi budur.

## Dik Eğimi Kurma

### Örnek 2

$m=3y/x$ olduğundan ortogonal eğim

$$
y'_{\perp}=-\frac{x}{3y}.
$$

Bu denklem ayrılabilirdir:

$$
3y\,dy=-x\,dx.
$$

$$
\frac32y^2=-\frac12x^2+C,
$$

$$
\boxed{x^2+3y^2=C}.
$$

Elips ailesi, $y=cx^3$ eğrilerini uygun noktalarda dik keser.

## Parametreyi Eleme

### Örnek 3: Çember Ailesi

$$
x^2+y^2=c^2
$$

ailesinin türevi

$$
2x+2yy'=0,\qquad y'=-\frac{x}{y}.
$$

Dik eğim $y/x$ olur:

$$
y'=\frac yx.
$$

Çözüm $y=Cx$ doğrularıdır.

## Ek Çözümlü Örnekler

### Örnek A: Üstel Eğri Ailesi

$$
y=ce^x.
$$

**Parametreyi eleme.** Türev $y'=ce^x=y$ olduğundan verilen ailenin eğimi
$m=y$'dir.

**Dik eğim ve çözüm.**

$$
y'_\perp=-\frac1y,
\qquad
y\,dy=-dx.
$$

$$
\boxed{y^2+2x=C}.
$$

Örtük türev $2yy'+2=0$ ve $y'=-1/y$ verir; $y\neq0$ olan kesişimlerde
eğimlerin çarpımı $-1$'dir.

### Örnek B: Hiperbol Ailesi

$$
x^2-y^2=c.
$$

Türevden

$$
y'=\frac{x}{y}
$$

bulunur. Dik eğim $-y/x$:

$$
\frac{dy}{y}=-\frac{dx}{x},
\qquad
\ln|y|=-\ln|x|+C.
$$

Ortogonal aile

$$
\boxed{xy=C}
$$

olur.

## Hata Avı

### Örnek 4: Yalnız İşareti Değiştirmek

Dik eğim $-m$ değil, $-1/m$'dir. Örneğin $m=2$ için dik eğim $-1/2$ olur.

### Örnek 5: Parametreyi Denklemde Bırakmak

Ortogonal aile bulunmadan önce $c$ elimine edilmelidir. Aksi hâlde tek bir
eğriye değil, başlangıç ailesinin parametresine bağlı bir denklem kalır.

### Örnek 6: Sıfır Eğim

Verilen aile yatay teğete sahipse ortogonal yörünge o noktada dikey teğet
taşır. $-1/m$ formülü $m=0$ için sayısal bir eğim vermez; geometrik yorum
örtük denklem üzerinden yapılır.

## Adım Adım İşlem Pratiği

### Örnek 7

$y=cx$ doğrularının eğimi $y'=c=y/x$'tir. Dik aile

$$
y'=-\frac{x}{y}
$$

ve çözümü $x^2+y^2=C$ çemberleridir.

## Karma Çalışma Soruları

### Soru 1

$y=cx^2$ ailesinin ortogonal yörüngelerini bulun.

### Soru 2

$x^2+y^2=c$ çember ailesinin ortogonal ailesini bulun.

### Soru 3

$y=ce^x$ ailesinin parametresini eleyip ortogonal yörünge denklemini çözün.

### Soru 4

$x^2-y^2=c$ ailesinin ortogonal yörüngelerini bulun.

### Soru 5

$y=c/x$ ailesinin ortogonal ailesini bulun ve iki ailenin kesişme eğimlerini
kontrol edin.

### Soru 6

Bir çözüm noktasında verilen ailenin eğimi $-3$ ise ortogonal eğimi bulun.

### Soru 7

Yatay ve dikey teğetlerin neden $m_1m_2=-1$ formülüyle doğrudan
hesaplanamadığını açıklayın.

### Soru 8

Bulduğunuz bir ortogonal aileyi örtük türevle doğrulayın.

## Çalışmanızı Kontrol Etme

> Çözümümü parametreyi eleme, verilen ailenin eğimi, negatif karşıt eğim,
> ortaya çıkan diferansiyel denklemin çözümü ve yatay/dikey teğetlerin örtük
> yorumu açısından incele. Hata varsa doğru aileyi vermeden ilk yanlış eğim
> adımını belirt.
