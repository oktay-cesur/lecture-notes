---
title: "Karakteristik Denklem ve Reel Kökler: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
description: "Sabit katsayılı ikinci mertebeden homojen denklemi karakteristik denkleme dönüştürme ve farklı reel köklerde çözme pratiği."
execute:
  echo: false
---

# Karakteristik Denklem ve Reel Kökler: Alıştırmalar

$$
ay''+by'+cy=0,\qquad a\neq0
$$

denkleminde $y=e^{rx}$ adayı karakteristik denklemi üretir:

$$
ar^2+br+c=0.
$$

İki farklı reel kök $r_1,r_2$ bulunduğunda temel çözüm kümesi
$\{e^{r_1x},e^{r_2x}\}$ ve genel çözüm
$y=C_1e^{r_1x}+C_2e^{r_2x}$ olur.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Farklı reel köklü sekiz sabit katsayılı ikinci mertebe denklem üret.
> Karakteristik denklemi, kökleri ve genel çözümü benim yazmamı bekle. Son iki
> soruda başlangıç koşulları ekle; sabitleri hemen çözme.
:::

## Çözüm Hattı

### Örnek 1: Çarpanlara Ayrılan Denklem

$$
y''-5y'+6y=0.
$$

**Karakteristik denklem.**

$$
r^2-5r+6=0.
$$

**Kökler.**

$$
(r-2)(r-3)=0,\qquad r_1=2,\quad r_2=3.
$$

**Genel çözüm.**

$$
\boxed{y=C_1e^{2x}+C_2e^{3x}}.
$$

**Doğrulama.** Her üstel çözüm ayrı ayrı denklemi sağlar; lineerlik nedeniyle
lineer birleşimleri de çözümdür.

### Örnek 2: Bir Pozitif, Bir Negatif Kök

$$
y''-y=0.
$$

$$
r^2-1=(r-1)(r+1)=0.
$$

$$
\boxed{y=C_1e^x+C_2e^{-x}}.
$$

Pozitif köklü bileşen $x$ arttıkça büyür, negatif köklü bileşen azalır.

### Örnek 3: Katsayıyı Önce Sadeleştirme

$$
2y''-2y'-4y=0.
$$

İkiye bölmek hesabı kısaltır:

$$
r^2-r-2=(r-2)(r+1)=0.
$$

$$
\boxed{y=C_1e^{2x}+C_2e^{-x}}.
$$

## Başlangıç Koşulları

### Örnek 4

$$
y''-5y'+6y=0,\qquad y(0)=1,\quad y'(0)=0.
$$

Genel çözüm $y=C_1e^{2x}+C_2e^{3x}$ ve türevi

$$
y'=2C_1e^{2x}+3C_2e^{3x}.
$$

$x=0$ için

$$
C_1+C_2=1,\qquad 2C_1+3C_2=0.
$$

İlk denklemin iki katını ikinciden çıkarınca $C_2=-2$ ve $C_1=3$:

$$
\boxed{y=3e^{2x}-2e^{3x}}.
$$

### Örnek 5: Kök Formülü

$$
y''+y'-2y=0
$$

için

$$
r=\frac{-1\pm\sqrt{1+8}}2=\frac{-1\pm3}{2}.
$$

$r_1=1$, $r_2=-2$ ve

$$
\boxed{y=C_1e^x+C_2e^{-2x}}.
$$

## Hata Avı

### Örnek 6: $y=e^{rx}$ Yerine $r$ Yazmak

Karakteristik denklem, $y'=re^{rx}$ ve $y''=r^2e^{rx}$ yazıp ortak
$e^{rx}\neq0$ çarpanını sadeleştirerek elde edilir.

### Örnek 7: İki Kök İçin Tek Sabit

Farklı iki kök iki bağımsız çözüm üretir; genel çözümde iki bağımsız sabit
bulunmalıdır.

## Karma Çalışma Soruları

### Soru 1

$y''-7y'+12y=0$ denklemini çözün.

### Soru 2

$y''+2y'-3y=0$ denklemini çözün.

### Soru 3

$3y''-3y'-6y=0$ denklemini çözün.

### Soru 4

$y''-4y=0,\ y(0)=2,\ y'(0)=0$ problemini çözün.

### Soru 5

$y''+y'-6y=0,\ y(0)=1,\ y'(0)=5$ problemini çözün.

### Soru 6

Kökleri $2$ ve $-3$ olan monik karakteristik denklemi ve karşılık gelen
diferansiyel denklemi kurun.

### Soru 7

Bulduğunuz bir genel çözümü türevlerini alıp orijinal denklemde doğrulayın.

### Soru 8

İki farklı reel kökten gelen üstel fonksiyonların neden bağımsız olduğunu
Wronskian ile gösterin.

## Çalışmanızı Kontrol Etme

> Çözümümü üstel aday, karakteristik polinomun işaretleri, kökler, her köke
> karşılık gelen üstel çözüm, iki sabit ve başlangıç koşulları açısından
> incele. Hata varsa doğru kökleri vermeden ilk yanlış cebir adımını belirt.
