---
title: "Birinci Mertebe Yöntem Seçimi: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
description: "Birinci mertebeden denklemi çözmeden önce yapısını okuyup uygun yöntem veya yöntemleri seçme pratiği."
execute:
  echo: false
---

# Birinci Mertebe Yöntem Seçimi: Alıştırmalar

Bu çalışma bir çözüm yöntemini mekanik olarak uygulamaktan önce hangi yöntemin
uygun olduğuna karar vermeyi hedefler. Bazı denklemler birden fazla sınıfa
girebilir. Böyle bir durumda amaç tek bir etiket bulmak değil, en kısa ve
güvenli çözüm yolunu gerekçelendirmektir.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Ayrılabilir, lineer, Bernoulli, homojen tip ve tam denklem sınıflarından
> karışık on denklem üret. Çözümü istemiyorum. Her denklem için yöntem seçip
> gerekçemi yazmamı bekle; birden fazla yöntem varsa ancak cevabımdan sonra
> belirt.
:::

## Karar Sırası

### Örnek 1: Önce Doğrudan Yapı

$$
y'=x(1+y)
$$

hem ayrılabilir hem de

$$
y'-xy=x
$$

biçiminde lineerdir. Ayrılabilir biçim daha kısa olduğundan
$dy/(1+y)=x\,dx$ yolu seçilebilir.

### Örnek 2: Lineer Ama Ayrılabilir Değil

$$
y'+2y=x
$$

sağ taraf $g(x)h(y)$ biçimine gelmez. Standart lineer denklem doğrudan
göründüğü için integrasyon çarpanı seçilir.

### Örnek 3: Oran Yapısı

$$
y'=\frac{x+y}{x-y}
$$

sağ taraf yalnız $y/x$ oranıyla yazılabildiğinden homojen tiptir. Denklem
lineer veya doğrudan ayrılabilir değildir; $y=vx$ dönüşümü uygundur.

## Birden Fazla Sınıf

### Örnek 4: Bernoulli'nin Sınır Durumu

$$
y'+p(x)y=q(x)y^0=q(x)
$$

$n=0$ biçiminde Bernoulli olarak yazılabilse de zaten lineerdir. Bernoulli
dönüşümü gereksizdir.

### Örnek 5: Tamlık Kontrolü

$$
(2xy-3)\,dx+(x^2+4y)\,dy=0
$$

için $M_y=2x$ ve $N_x=2x$ olduğundan denklem tamdır. Önce $y'$ biçimine
çevirmek yerine potansiyel fonksiyon yöntemi seçilir.

## Hata Avı

### Örnek 6: Görülen İlk Yönteme Atlamak

Denklemde $y^2$ bulunması onu otomatik olarak Bernoulli yapmaz. Bütün denklem
$y'+p(x)y=q(x)y^n$ biçimine uymalıdır.

### Örnek 7: Çözmeye Başlayarak Sınıflandırmak

Uzun cebir işlemlerinden sonra yöntemin çalışmadığını görmek yerine önce
standart biçim, çarpanlara ayırma, $y/x$ oranı ve tamlık testi kontrol edilir.

## Adım Adım Karar Pratiği

### Örnek 8

$$
y'=\frac{1+x^2}{1+y^2}
$$

ayrılabilirdir:

$$
(1+y^2)\,dy=(1+x^2)\,dx.
$$

### Örnek 9

$$
y'+\frac1x y=xy^3
$$

Bernoulli denklemidir; $n=3$ ve $v=y^{-2}$ seçilir.

## Karma Çalışma Soruları

Aşağıdaki denklemleri çözmeden sınıflandırın. Uygun yöntemi ve ilk işlem
adımını yazın.

### Soru 1

$$y'=e^x(1+y).$$

### Soru 2

$$y'+3y=\sin x.$$

### Soru 3

$$y'=\frac{x^2+y^2}{xy}.$$

### Soru 4

$$y'-y=xy^2.$$

### Soru 5

$$(2x+y)\,dx+(x+2y)\,dy=0.$$

### Soru 6

$$y'=x+y.$$

### Soru 7

$$y'=y(2-y).$$

### Soru 8

$$xy'-y=x^2.$$

### Soru 9

$$(2y)\,dx+(x-y)\,dy=0.$$

### Soru 10

$$y'=(y/x)^2.$$

### Soru 11

İki farklı yöntemle çözülebilen bir denklem kurun; hangi yöntemin daha kısa
olduğunu açıklayın.

### Soru 12

Hiçbiri doğrudan uygulanmayan bir birinci mertebe denklem örneği verin ve
neden bu sınıflara girmediğini belirtin.

## Çalışmanızı Kontrol Etme

> Yöntem seçimlerimi standart biçim, ayrılabilir çarpım, y/x oranı, Bernoulli
> kuvveti ve tamlık testi açısından incele. Bir denklem birden fazla sınıfa
> giriyorsa seçtiğim yolun geçerli olup olmadığını önce söyle; daha kısa
> alternatifi sonra açıkla.
