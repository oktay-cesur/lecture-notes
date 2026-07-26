---
title: "Birinci Mertebeden Lineer Denklemler: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
description: "Birinci mertebeden lineer denklemi standart biçime getirip integrasyon çarpanıyla çözme pratiği."
execute:
  echo: false
---

# Birinci Mertebeden Lineer Denklemler: Alıştırmalar

Birinci mertebeden lineer denklem

$$
y'+p(x)y=q(x)
$$

standart biçiminde okunur. İntegrasyon çarpanı

$$
\mu(x)=e^{\int p(x)\,dx}
$$

seçildiğinde sol taraf $(\mu y)'$ olur. Yöntemin güvenli işlemesi için önce
$y'$ katsayısı bire eşitlenmelidir.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Standart biçime getirme, integrasyon çarpanını bulma ve başlangıç koşulu
> uygulama basamaklarını ayrı ayrı çalıştıran altı soru üret. Her basamakta
> cevabımı bekle; yanlışsam sonraki basamağa geçme.
:::

## Standart Biçim

### Örnek 1: Önce Bölme

$$
x^2y'+3xy=1,\qquad x\neq0.
$$

$x^2$ ile bölünür:

$$
y'+\frac3x y=\frac1{x^2}.
$$

Dolayısıyla $p(x)=3/x$, $q(x)=1/x^2$ ve çalışma aralıkları $x=0$'ı geçemez.

## İntegrasyon Çarpanı

### Örnek 2: Sabit Katsayı

$$
y'+3y=e^{-2x}.
$$

$$
\mu=e^{\int3\,dx}=e^{3x}.
$$

Denklem $e^{3x}$ ile çarpılınca

$$
(e^{3x}y)'=e^x.
$$

İntegrasyon:

$$
e^{3x}y=e^x+C,
\qquad
y=e^{-2x}+Ce^{-3x}.
$$

$y(0)=1$ ise $1=1+C$ ve $C=0$ olur.

### Örnek 3: $\mu=x^{-1}$ Durumu

$$
xy'-y=x^2,\qquad x>0.
$$

Standart biçim

$$
y'-\frac1x y=x
$$

olur. İntegrasyon çarpanı

$$
\mu=e^{\int-1/x\,dx}=e^{-\ln x}=\frac1x.
$$

Çarpınca

$$
\left(\frac yx\right)'=1,
$$

$$
\frac yx=x+C,\qquad y=x^2+Cx.
$$

## Sol Tarafı Doğrulama

### Örnek 4

$\mu$ ile çarpımdan sonra

$$
\mu y'+\mu p y
$$

ifadesi $(\mu y)'=\mu y'+\mu' y$ olmalıdır. Bu eşitlik
$\mu'=\mu p$ koşuluyla sağlanır; integrasyon çarpanı formülü buradan gelir.

## Ek Çözümlü Örnekler

### Örnek A: Değişken Katsayı ve Başlangıç Koşulu

$$
(1+x)y'+y=(1+x)^2,\qquad y(0)=1,\qquad x>-1.
$$

**Standart biçim.**

$$
y'+\frac1{1+x}y=1+x.
$$

**İntegrasyon çarpanı ve tam türev.**

$$
\mu=1+x,\qquad
((1+x)y)'=(1+x)^2.
$$

**İntegral ve koşul.**

$$
(1+x)y=\frac{(1+x)^3}{3}+C,
\qquad
1=\frac13+C.
$$

$$
\boxed{y=\frac{(1+x)^2}{3}+\frac{2}{3(1+x)}}.
$$

$x=-1$ seçilen çözüm aralığının dışındadır.

### Örnek B: Sol Taraf Zaten Tam Türev

$$
y'\cos x-y\sin x=1.
$$

Sol taraf $(y\cos x)'$ olduğundan

$$
y\cos x=x+C,
\qquad
\boxed{y=(x+C)\sec x}.
$$

Çözüm $\cos x$'in sıfır olmadığı tek bir bağlı aralıkta ele alınır.

## Hata Avı

### Örnek 5: $y'$ Katsayısını Atlamak

$2y'+4y=x$ denkleminde $p=4$ değildir. Önce ikiye bölünür:
$y'+2y=x/2$; dolayısıyla $p=2$'dir.

### Örnek 6: İntegrasyon Sabitini $\mu$ İçine Katmak

$e^{\int p\,dx}$ hesabında eklenen çarpımsal sabit gerekli değildir; sıfırdan
farklı sabit bir integrasyon çarpanının katı yine aynı yöntemi verir.

## Adım Adım İşlem Pratiği

### Örnek 7

$$
y'+2xy=x
$$

için $\mu=e^{x^2}$:

$$
(e^{x^2}y)'=xe^{x^2},
$$

$$
e^{x^2}y=\frac12e^{x^2}+C,
\qquad
y=\frac12+Ce^{-x^2}.
$$

$y(0)=0$ ise $C=-1/2$.

## Karma Çalışma Soruları

### Soru 1

$3y'+6y=x$ denklemini standart biçime getirin; $p$ ve $q$'yu belirleyin.

### Soru 2

$y'\cos x-y\sin x=1$ denklemini $\cos x\neq0$ olan bir aralıkta standart
biçime getirin.

### Soru 3

$y'+4y=e^x$ denklemini çözün.

### Soru 4

$y'+y=x,\ y(0)=2$ problemini çözün.

### Soru 5

$xy'+2y=x^3,\ x>0$ denklemini çözün.

### Soru 6

$y'-2xy=x$ denklemi için integrasyon çarpanını bulun ve çözümü kurun.

### Soru 7

$(1+x)y'+y=e^x,\ x>-1$ denklemini çözün.

### Soru 8

Bir öğrencinin $2y'+y=0$ için $\mu=e^x$ seçmesindeki hatayı bulun.

### Soru 9

Bulduğunuz bir çözümü orijinal, standartlaştırılmamış denklemde doğrulayın.

### Soru 10

Standart biçime geçerken bölülen ifadenin sıfır olduğu noktaların çözüm
aralığına etkisini açıklayın.

## Çalışmanızı Kontrol Etme

> Çözümümü y' katsayısını bire eşitleme, p ve q belirleme, integrasyon çarpanı,
> sol tarafın tam türev olması, integral, başlangıç koşulu ve çalışma aralığı
> açısından incele. Hata varsa sonraki adımı göstermeden ilk yanlış basamağı
> belirt.
