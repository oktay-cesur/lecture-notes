---
title: "Bernoulli Denklemi: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
description: "Bernoulli denklemini tanıma, uygun kuvvet dönüşümüyle lineerleştirme ve geri dönüş pratiği."
execute:
  echo: false
---

# Bernoulli Denklemi: Alıştırmalar

Bernoulli denklemi

$$
y'+p(x)y=q(x)y^n
$$

biçimindedir. $n=0$ veya $n=1$ olduğunda denklem zaten lineerdir. Diğer
durumlarda

$$
v=y^{1-n}
$$

dönüşümü $v$ için birinci mertebeden lineer denklem üretir.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Bernoulli biçiminde beş denklem ve biçime uymayan iki karşı örnek üret.
> Önce n değerini bulmamı bekle. v=y^(1-n) dönüşümünü ve v' bağıntısını ben
> yazmadan lineer denklemi gösterme.
:::

## Bernoulli Biçimini Tanıma

### Örnek 1

$$
y'-y=xy^2
$$

denkleminde $p(x)=-1$, $q(x)=x$ ve $n=2$'dir. $n\neq0,1$ olduğundan Bernoulli
dönüşümü gerekir.

### Örnek 2: Negatif Kuvvet

$$
y'+xy=\frac{x}{y}=xy^{-1}
$$

Bernoulli biçimindedir ve $n=-1$'dir.

## Lineerleştirme

### Örnek 3: $n=2$

$$
y'-y=xy^2.
$$

$v=y^{-1}$ seçilir. $v'=-y^{-2}y'$ olduğundan denklem $y^{-2}$ ile
çarpılır:

$$
y^{-2}y'-y^{-1}=x.
$$

$$
-v'-v=x,
\qquad
v'+v=-x.
$$

Bu lineer denklemin integrasyon çarpanı $e^x$'tir:

$$
(e^xv)'=-xe^x.
$$

İntegrasyonla

$$
v=1-x+Ce^{-x}.
$$

$v=1/y$ olduğundan

$$
y=\frac{1}{1-x+Ce^{-x}}.
$$

### Örnek 4: Genel Türev Bağıntısı

$v=y^{1-n}$ için

$$
v'=(1-n)y^{-n}y'.
$$

Denklem $y^{-n}$ ile çarpıldığında $y^{-n}y'$ terimi
$v'/(1-n)$ olarak yazılır. İşaret ve $1-n$ çarpanı yöntemin en sık hata
yapılan adımıdır.

## Kayıp Çözümler

### Örnek 5

Bernoulli dönüşümünde $y$'nin bir kuvvetine bölme yapılabilir. $y=0$
orijinal denklemi sağlıyorsa dönüşüm bu çözümü dışarıda bırakır; sıfır çözümü
başta ayrıca sınanmalıdır.

## Ek Çözümlü Örnekler

### Örnek A: Karekök Kuvveti

$$
y'+y=y^{1/2},\qquad y>0.
$$

**Dönüşüm.** $n=1/2$ ve $v=y^{1/2}$ seçilir. $y=v^2$,
$y'=2vv'$:

$$
2vv'+v^2=v.
$$

$v>0$ bölgesinde $v$'ye bölünür:

$$
v'+\frac12v=\frac12.
$$

**Lineer çözüm ve geri dönüş.**

$$
v=1+Ce^{-x/2},
\qquad
\boxed{y=\left(1+Ce^{-x/2}\right)^2}.
$$

$v$'ye bölme sırasında dışarıda kalan $y=0$ sabit çözümü orijinal denklemde
ayrıca doğrulanır.

### Örnek B: Negatif Kuvvet

$$
y'+xy=\frac{x}{y},\qquad y\neq0.
$$

$n=-1$ ve $v=y^2$ seçilir. Denklem $y$ ile çarpılır:

$$
yy'+xy^2=x.
$$

$v'=2yy'$ kullanılır:

$$
v'+2xv=2x.
$$

İntegrasyon çarpanı $e^{x^2}$:

$$
(e^{x^2}v)'=2xe^{x^2},
\qquad
v=1+Ce^{-x^2}.
$$

$$
\boxed{y=\pm\sqrt{1+Ce^{-x^2}}}.
$$

Gerçek çözüm, kök içinin pozitif ve $y$'nin sıfırdan farklı olduğu bağlı bir
aralıkta seçilir.

## Hata Avı

### Örnek 6: Toplam Sağ Taraf

$$
y'+y=x+y^3
$$

denkleminde doğrusal olmayan terim dışında ayrıca $x$ vardır. Denklem
$y'+p(x)y=q(x)y^n$ biçiminde tek bir sağ taraf kuvvetine indirgenemez; standart
Bernoulli biçiminde değildir.

### Örnek 7: Yanlış Dönüşüm Kuvveti

$n=3$ için $v=y^2$ değil, $v=y^{1-3}=y^{-2}$ seçilir.

## Adım Adım İşlem Pratiği

### Örnek 8

$$
y'+\frac yx=xy^3,\qquad x>0.
$$

$n=3$, $v=y^{-2}$ ve $v'=-2y^{-3}y'$:

$$
v'-\frac{2}{x}v=-2x.
$$

Bu noktadan sonra problem $v$ için lineer denklem olarak çözülür.

## Karma Çalışma Soruları

### Soru 1

$y'+2y=xy^3$ denkleminde $p$, $q$, $n$ ve dönüşüm değişkenini belirleyin.

### Soru 2

$y'-y=xy^2$ denklemini çözün ve sıfır çözümünü ayrıca kontrol edin.

### Soru 3

$y'+y=y^{1/2}$ denklemini Bernoulli dönüşümüyle çözün.

### Soru 4

$y'+xy=x/y$ denklemini çözün.

### Soru 5

$y'+y=x+y^3$ denkleminin neden standart Bernoulli biçiminde olmadığını
açıklayın.

### Soru 6

$y'-2y=e^x y^{-1}$ için uygun dönüşümü ve ortaya çıkan lineer denklemi yazın.

### Soru 7

$xy'+y=x^2y^2,\ x>0$ denklemini standart Bernoulli biçimine getirip çözün.

### Soru 8

$n=0$ ve $n=1$ durumlarında Bernoulli denkleminin neden zaten lineer olduğunu
ayrı ayrı gösterin.

### Soru 9

Dönüşüm sonrası bulduğunuz $v$ çözümünün $y$'ye geri dönüşünde oluşabilecek
tanımsızlıkları açıklayın.

## Çalışmanızı Kontrol Etme

> Çözümümü Bernoulli biçimi, n değeri, v=y^(1-n) seçimi, v' hesabındaki
> 1-n çarpanı, ortaya çıkan lineer denklem, geri dönüş ve kayıp sıfır çözümü
> açısından incele. Hata varsa doğru dönüşümü hemen verme; yanlış kuvveti veya
> işareti belirt.
