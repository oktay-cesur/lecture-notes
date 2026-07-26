---
title: "Homojen Tip Denklemler: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
description: "Sağ tarafı y/x oranına bağlı denklemleri tanıma ve y=vx dönüşümüyle çözme pratiği."
execute:
  echo: false
---

# Homojen Tip Denklemler: Alıştırmalar

Birinci mertebeden bir denklem

$$
y'=F\!\left(\frac{y}{x}\right)
$$

biçimine getirilebiliyorsa $y=vx$ dönüşümü oranı yeni bilinmeyen yapar.
Türev $y'=v+xv'$ olduğundan dönüşüm sonrası denklem çoğunlukla ayrılabilir
hâle gelir. Bu yöntem, lineer denklemlerdeki “homojen” sözcüğüyle aynı
anlamda değildir.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Beşi homojen tip, ikisi homojen tip olmayan yedi denklem üret. Önce sağ
> tarafı y/x oranıyla yazmamı bekle. Dönüşümde y'=v+xv' terimini eksik
> yazarsam yalnız türev hatasını belirt.
:::

## Homojen Tipi Tanıma

### Örnek 1: Oranı Görünür Kılma

$$
y'=\frac{x+2y}{x}=1+2\frac{y}{x}
$$

olduğundan sağ taraf yalnız $y/x$ oranına bağlıdır.

### Örnek 2: Derece Kontrolü

$$
y'=\frac{x^2+2y^2}{xy}
=\frac{x}{y}+2\frac{y}{x}
=\frac{1}{y/x}+2\frac{y}{x}.
$$

Bu da yalnız $y/x$ oranının fonksiyonudur.

## $y=vx$ Dönüşümü

### Örnek 3: Temel Uygulama

$$
y'=\frac{x+y}{x-y}.
$$

$y=vx$ ve $y'=v+xv'$ yazılır:

$$
v+xv'=\frac{1+v}{1-v}.
$$

Buradan

$$
xv'=\frac{1+v}{1-v}-v
=\frac{1+v^2}{1-v}.
$$

Değişkenler ayrılır:

$$
\frac{1-v}{1+v^2}\,dv=\frac{dx}{x}.
$$

İntegrasyon

$$
\arctan v-\frac12\ln(1+v^2)=\ln|x|+C
$$

verir. Son adımda $v=y/x$ geri yazılır.

### Örnek 4: Dönüşümden Sonra Basit Denklem

$$
xy'=y+2x.
$$

$x\neq0$ için $y'=y/x+2$. $y=vx$ yazınca

$$
v+xv'=v+2,\qquad xv'=2.
$$

$$
v=2\ln|x|+C,\qquad
y=x\bigl(2\ln|x|+C\bigr).
$$

## Çözüm Bölgesi

### Örnek 5: Paydaların Koşulu

Homojen tip dönüşümünde $y/x$ kullanıldığı için $x=0$ baştan dışarıdadır.
Orijinal denklemde $x-y$ paydası varsa $y=x$ doğrusu da tanımsızlık
oluşturur. Çözüm aralığı bu doğruların geçilemeyeceği dikkate alınarak
yorumlanır.

## Ek Çözümlü Örnekler

### Örnek A: Başlangıç Koşuluyla Tam Hat

$$
y'=1+\frac{y}{x},\qquad x>0,\qquad y(1)=2.
$$

**Tanı ve dönüşüm.** Sağ taraf yalnız $y/x$ oranına bağlıdır. $y=vx$,
$y'=v+xv'$ yazılır:

$$
v+xv'=1+v.
$$

**Ayrılabilir denklem ve integral.**

$$
xv'=1,\qquad v'=\frac1x,\qquad v=\ln x+C.
$$

**Geri dönüş ve başlangıç koşulu.**

$$
y=x(\ln x+C),\qquad 2=y(1)=C.
$$

$$
\boxed{y=x(\ln x+2)},\qquad x>0.
$$

**Doğrulama.** $y'=\ln x+3$ ve $1+y/x=\ln x+3$ eşittir.

### Örnek B: Sabit Oran Çözümleri

$$
y'=\left(\frac yx\right)^2
$$

için $y=vx$ dönüşümü

$$
v+xv'=v^2,\qquad
\frac{dv}{v(v-1)}=\frac{dx}{x}
$$

verir. $v(v-1)$'e bölmeden önce $v=0$ ve $v=1$ durumları sınanır. Bunlar
sırasıyla $y=0$ ve $y=x$ çözümlerini verir.

## Hata Avı

### Örnek 6: $y'=xv'$ Yazmak

$y=vx$ bir çarpımdır. Türevi $y'=v+xv'$ olur; $v$ terimini atmak dönüşümün
tamamını bozar.

### Örnek 7: Her Kesirli Denklemi Homojen Sanmak

$y'=y/x^2$ sağ tarafı yalnız $y/x$ oranıyla yazılamaz; ayrıca $x$ bağımlılığı
kalır. Denklem ayrılabilir olsa da homojen tip değildir.

## Adım Adım İşlem Pratiği

### Örnek 8

$$
y'=1+\frac{y}{x}
$$

için $v+xv'=1+v$, dolayısıyla $v' =1/x$ ve

$$
y=x(\ln|x|+C).
$$

## Karma Çalışma Soruları

### Soru 1

$y'=(x+3y)/x$ denkleminin homojen tip olduğunu gösterip çözün.

### Soru 2

$y'=(x^2+y^2)/(xy)$ denklemini $y=vx$ ile dönüştürün ve ayrılabilir denklemi
yazın.

### Soru 3

$y'=(2x-y)/(x+2y)$ denklemini çözün.

### Soru 4

$xy'=y+x$ denklemini çözün.

### Soru 5

$y'=y/x^2$ denkleminin neden homojen tip olmadığını, buna rağmen hangi
yöntemle çözülebileceğini açıklayın.

### Soru 6

$y'=(x+y+1)/(x-y)$ denkleminin doğrudan homojen tip olup olmadığını inceleyin.

### Soru 7

$y'=(y/x)^2$ denklemini çözün ve $y=0$ çözümünü ayrıca kontrol edin.

### Soru 8

Bir homojen tip çözümde $x=0$'ın neden çözüm aralığına alınamadığını
açıklayın.

## Çalışmanızı Kontrol Etme

> Çözümümü sağ tarafın yalnız y/x oranına bağlı olması, y=vx dönüşümünde
> y'=v+xv' kullanımı, değişkenlerin ayrılması, geri dönüş ve tanımsız doğrular
> açısından incele. Hata varsa doğru integrali vermeden ilk dönüşüm hatasını
> belirt.
