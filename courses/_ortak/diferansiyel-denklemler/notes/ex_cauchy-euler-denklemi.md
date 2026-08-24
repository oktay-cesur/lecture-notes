---
title: "Cauchy–Euler Denklemi: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — Kavram ve Yöntem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-24
description: "Cauchy–Euler yapısını tanıma, y=x^m adayını kurma, aday denklemini çözme ve çözüm aralığını yorumlama pratiği."
execute:
  echo: false
---

# Cauchy–Euler Denklemi: Alıştırmalar

Cauchy–Euler denkleminde $x$ kuvveti türev mertebesiyle eşleşir. Bu eşleşme
$y=x^m$ adayındaki bütün terimleri $x^m$ katına dönüştürür. Çözümler $x=0$'ı
içermeyen bir aralıkta ele alınır; burada $x>0$ kullanılır.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Önce denklemin Cauchy–Euler olup olmadığını ve aday denklemini kendiniz
> yazın. Yapay zekâdan yalnız $m(m-1)$ katkısını ve çözüm aralığını kontrol
> etmesini; kökleri doğrudan vermemesini isteyin.
:::

## Tanıma ve Karar

### Örnek 1: Yapıyı Tanıma

$$
x^2y''+4xy'-6y=0
$$

İkinci türevin katsayısı $x^2$, birinci türevin katsayısı $x$ ve $y$'nin
katsayısı sabittir. Denklem Cauchy–Euler biçimindedir.

### Örnek 2: Yakın Karşı Örnek

$$
x^2y''+4y'-6y=0
$$

Bu denklem Cauchy–Euler değildir. $y'$ teriminin katsayısında $x$ eksiktir;
$y=x^m$ yazıldığında bütün terimlerde ortak $x^m$ oluşmaz.

### Örnek 3: Uygun Aday

Cauchy–Euler denkleminde ilk aday $e^{rx}$ değil, $x^m$'dir. Çünkü
$x^ky^{(k)}$ ifadesi bu adayla $x^m$'nin sabit katına dönüşür.

### Örnek 4: Çözüm Aralığı

$x=0$ noktasında baş katsayı sıfır olur. Bu nedenle başlangıç noktası
$x_0=2$ ise doğal çalışma aralığı $(0,\infty)$; $x_0=-2$ ise
$(-\infty,0)$'dır.

## Mekanizmayı Kurma

### Örnek 5: Aday Denklemi

$$
x^2y''-3xy'+4y=0
$$

$y=x^m$, $y'=mx^{m-1}$ ve $y''=m(m-1)x^{m-2}$ yazılır. Ortak $x^m$
çarpanı sadeleşince

$$
m(m-1)-3m+4=0,\q\quad m^2-4m+4=0
$$

elde edilir. Kritik adım $m(m-1)$ katkısını korumaktır.

### Örnek 6: Kökten Çözüm Kalıbına

Aday denkleminin kökleri $m_1=1$, $m_2=3$ ise genel çözüm

$$
y=C_1x+C_2x^3
$$

olur. Kök $m=2$ çift olsaydı ikinci çözüm $x^2\ln x$ olurdu.

## Temel Tam Çözümler

### Örnek 7: Ayrık Reel Kökler

$$
x^2y''-2xy'-4y=0,\q\quad x>0
$$

**Sınıflandırma.** Denklem Cauchy–Euler biçimindedir.

**Kurulum.** $y=x^m$ adayı

$$
m(m-1)-2m-4=0
$$

verir. Düzenleyip çarpanlara ayıralım:

$$
m^2-3m-4=(m-4)(m+1)=0.
$$

Kökler $4$ ve $-1$ olduğundan

$$
\boxed{y=C_1x^4+C_2x^{-1}},\q\quad x>0.
$$

Her terim aday denklemindeki bir kökten geldiği için denklemi sağlar.

### Örnek 8: Çift Kök

$$
x^2y''-3xy'+4y=0,\q\quad x>0
$$

Aday denklemi

$$
m(m-1)-3m+4=(m-2)^2=0
$$

olur. $m=2$ çift kök olduğundan

$$
\boxed{y=C_1x^2+C_2x^2\ln x}.
$$

İkinci terimin türevleri yerine konduğunda hem $\ln x$ içeren hem içermeyen
terimler ayrı ayrı sıfırlanır.

## Hata Avı

### Örnek 9: İlk Hata Nerede?

Bir öğrenci $x^2y''+5xy'+4y=0$ için aday denklemini
$m^2+5m+4=0$ yazıyor. İlk hata $y''$ katkısını $m^2$ almak; doğru katkı
$m(m-1)$'dir. Doğru aday denklemi

$$
m(m-1)+5m+4=m^2+4m+4
$$

olur.

## Karşılaştırma

### Örnek 10: Hangi Yöntem?

$$
y''+y=0,\q\quad x^2y''+xy'+y=0
$$

İlk denklem sabit katsayılıdır ve $y=e^{rx}$ adayı kullanılır. İkinci denklem
Cauchy–Euler biçimindedir ve $y=x^m$ adayı kullanılır. İkinci denklemde aday
denklemi $m^2+1=0$ olur; çözüm $\cos(\ln x)$ ve $\sin(\ln x)$ terimlerini
taşır.

## Hafif Karma Örnek

### Örnek 11: Başlangıç Koşulları

$$
x^2y''-3xy'+3y=0,\q\quad y(1)=0,\quad y'(1)=2
$$

Aday denklemi $(m-1)(m-3)=0$ olduğundan
$y=C_1x+C_2x^3$'tür. Koşullar

$$
C_1+C_2=0,\q\quad C_1+3C_2=2
$$

verir. $C_1=-1$, $C_2=1$ ve

$$
\boxed{y=x^3-x},\q\quad x>0
$$

bulunur. Başlangıç noktası $1$ olduğu için çözüm aralığı sıfırı geçemez.

## Karma Çalışma Soruları

### Soru 1

Aşağıdaki denklemlerden hangilerinin Cauchy–Euler biçiminde olduğunu
gerekçelendirin:

$$
x^2y''+5xy'+2y=0,
\q\quad
x^2y''+5y'+2y=0.
$$

### Soru 2

$$
x^2y''-2xy'-4y=0,\q\quad x>0
$$

denkleminin genel çözümünü bulun.

### Soru 3

$$
x^2y''-xy'+y=0,\q\quad x>0
$$

denklemini çözün; katlı kökün ürettiği ikinci terimi açıkça gösterin.

### Soru 4

$$
x^2y''+xy'+4y=0,\q\quad x>0
$$

denkleminin reel genel çözümünü bulun.

### Soru 5

$$
x^2y''-3xy'+4y=0,\q\quad y(1)=1,\quad y'(1)=0
$$

başlangıç değer problemini çözün.

### Soru 6

$x<0$ aralığında çözülen bir Cauchy–Euler denkleminde $\ln x$ yerine neden
$\ln|x|$ kullanıldığını açıklayın; Soru 2'nin çözümünü $x<0$ için yazın.

### Soru 7

$y=x^3$ fonksiyonunun

$$
x^2y''-4xy'+6y=0
$$

denklemini sağlayıp sağlamadığını doğrudan yerine koyarak kontrol edin.

### Soru 8

$y''-4y'+4y=0$ ile $x^2y''-3xy'+4y=0$ denklemleri için uygun aday
fonksiyonları ve karakteristik türdeki denklemleri ayrı ayrı yazın.

## Çalışmanızı Kontrol Etme

> Çözümümü Cauchy–Euler yapısını tanıma, $m(m-1)$ katkısı, kök türünden çözüm
> biçimine geçiş ve $x=0$ nedeniyle seçilen çözüm aralığı açısından incele.
> Hata varsa doğru kökleri vermeden ilk yanlış kurulum adımını belirt.
