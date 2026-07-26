---
title: "Mertebe İndirme: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
description: "İkinci mertebeden denklemde bir çözüm biliniyorken ikinci bağımsız çözümü mertebe indirme yöntemiyle bulma pratiği."
execute:
  echo: false
---

# Mertebe İndirme: Alıştırmalar

Standart biçimdeki

$$
y''+P(x)y'+Q(x)y=0
$$

denkleminin sıfırdan farklı bir $y_1$ çözümü biliniyorsa ikinci çözüm

$$
y_2=v(x)y_1(x)
$$

biçiminde aranabilir. Yerine koyma sonrası $v$'nin kendisi değil $v'$ için
birinci mertebeden denklem elde edilir.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Bir çözümü verilmiş beş ikinci mertebe homojen denklem üret. y2=v y1
> dönüşümünde türevleri benim yazmamı bekle. Sadeleşen y1 terimlerini ve
> v' için oluşan denklemi adım adım kontrol et.
:::

## Temel Dönüşüm

### Örnek 1: Türevleri Açma

$$
y_2=vy_1,
$$

$$
y_2'=v'y_1+vy_1',
$$

$$
y_2''=v''y_1+2v'y_1'+vy_1''.
$$

Denkleme koyulduğunda $v$ ile çarpılan terimler $y_1$ çözüm olduğu için
sadeleşir.

## Tam Çözüm Hattı

### Örnek 2: Çift Kökü Mertebe İndirmeyle Görmek

$$
y''-2y'+y=0,\qquad y_1=e^x.
$$

$y_2=ve^x$:

$$
y_2'=(v'+v)e^x,
\qquad
y_2''=(v''+2v'+v)e^x.
$$

Denkleme yerleştirme:

$$
(v''+2v'+v)-2(v'+v)+v=0.
$$

Bütün terimler sadeleşir ve

$$
v''=0
$$

kalır. $v=C_1x+C_2$; yeni bağımsız parça için $v=x$ seçilir:

$$
\boxed{y_2=xe^x}.
$$

### Örnek 3: $y''+y=0$

$y_1=\cos x$ bilinsin. $y_2=v\cos x$ dönüşümü yapıldığında sadeleştirme
sonrası

$$
v''\cos x-2v'\sin x=0
$$

elde edilir. $w=v'$ yazalım:

$$
w'\cos x-2w\sin x=0,
\qquad
\frac{w'}w=2\tan x.
$$

$$
w=C\sec^2x,\qquad
v=C\tan x.
$$

Bağımsız çözüm

$$
\boxed{y_2=\tan x\cos x=\sin x}.
$$

## Kısa Formül

### Örnek 4

Standart biçimde ikinci çözüm

$$
y_2=y_1\int\frac{e^{-\int P(x)\,dx}}{y_1^2}\,dx
$$

formülüyle de bulunabilir. Önce denklemde $y''$ katsayısı bire
eşitlenmelidir.

Örnek 2'de $P=-2$, $y_1=e^x$:

$$
y_2=e^x\int\frac{e^{2x}}{e^{2x}}\,dx=xe^x.
$$

### Örnek 5: Euler Tipi Denklem

$$
x^2y''-xy'+y=0,\qquad x>0,\qquad y_1=x.
$$

Standart biçimde $P=-1/x$. Kısa formül:

$$
y_2=x\int\frac{e^{\int1/x\,dx}}{x^2}\,dx
=x\int\frac{x}{x^2}\,dx
=x\ln x.
$$

## Hata Avı

### Örnek 6: Denklemi Standartlaştırmamak

Kısa formüldeki $P(x)$, $y''$ katsayısı bire eşitlendikten sonraki katsayıdır.

### Örnek 7: Eski Çözümün Katını Yeni Çözüm Sanmak

$v$ sabit seçilirse $y_2$ yalnız $y_1$'in katı olur. Bağımsız çözüm için
$v$ sabit olmayan kısmı taşımalıdır.

## Karma Çalışma Soruları

### Soru 1

$y''-4y'+4y=0$ ve $y_1=e^{2x}$ için ikinci çözümü bulun.

### Soru 2

$y''+4y=0$ ve $y_1=\cos2x$ için ikinci çözümü bulun.

### Soru 3

$y''-y=0$ ve $y_1=e^x$ için kısa formülü kullanın.

### Soru 4

$x^2y''-3xy'+4y=0$, $x>0$ ve $y_1=x^2$ için ikinci çözümü bulun.

### Soru 5

$y_2=vy_1$ dönüşümünün iki türevini eksiksiz yazın.

### Soru 6

Bulduğunuz ikinci çözümün hem denklemi sağladığını hem $y_1$'den bağımsız
olduğunu doğrulayın.

### Soru 7

Kısa formülün integrasyon sabitinin neden yeni bir bağımsız çözüm
üretmediğini açıklayın.

### Soru 8

Mertebe indirmenin uygulanabilmesi için hangi bilginin önceden verilmiş olması
gerektiğini belirtin.

## Çalışmanızı Kontrol Etme

> Çözümümü y2=v y1 türevleri, y1'in denklemi sağlamasından gelen sadeleşme,
> v' için mertebesi düşmüş denklem, standart biçimde P(x), geri dönüş ve
> Wronskian ile bağımsızlık açısından incele. Hata varsa doğru y2'yi vermeden
> ilk eksik türev terimini belirt.
