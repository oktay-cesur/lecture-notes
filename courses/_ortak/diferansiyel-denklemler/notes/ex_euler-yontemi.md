---
title: "Euler Yöntemi: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — Kavram ve Yöntem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-24
description: "Euler adımını doğru noktadaki eğimle kurma, birkaç adım yürütme, adım büyüklüğünü karşılaştırma ve sayısal davranışı yorumlama pratiği."
execute:
  echo: false
---

# Euler Yöntemi: Alıştırmalar

Euler yöntemi, çözüm eğrisini bulunduğu noktadaki teğetle kısa bir adım izler:

$$
t_{n+1}=t_n+h,\q\quad
y_{n+1}=y_n+h f(t_n,y_n).
$$

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Her adımda $(t_n,y_n)$ noktasını ve eğimi önce kendiniz yazın. Yapay
> zekâdan yalnız ilk yanlış eğim değerlendirmesini veya aritmetik adımı
> göstermesini; sonraki iterasyonları tamamlamamasını isteyin.
:::

## Tanıma ve Karar

### Örnek 1: Döngünün Sırası

Önce $f(t_n,y_n)$ hesaplanır, sonra $y_{n+1}$ bulunur, en son yeni noktaya
geçilir. Yeni eğim eski noktadaki adımı düzeltmek için kullanılmaz.

### Örnek 2: Adım Sayısı

$t_0=0$, hedef $t=1$ ve $h=0.25$ ise dört adım gerekir. Adım sayısı
$(1-0)/0.25=4$'tür.

### Örnek 3: Adımı Küçültme

Euler yönteminin toplam hatası genel olarak $h$ ile orantılıdır. $h$ yarıya
indiğinde hata da yeterince düzgün problemlerde yaklaşık yarıya iner.

### Örnek 4: Yaklaşık Sonuç

Euler tablosundaki değerler tam çözüm değildir. Güvenilirlik için aynı hedef
noktaya daha küçük bir $h$ ile gidilip sonuçların değişimi karşılaştırılır.

## Mekanizmayı Kurma

### Örnek 5: İlk Adımı Yazma

$$
y'=t+y,\q\quad y(0)=1,\q\quad h=0.5
$$

$f(0,1)=1$ olduğundan

$$
t_1=0.5,\q\quad y_1=1+0.5(1)=1.5.
$$

### Örnek 6: Simgesel Euler Adımı

$$
y'=y(1-y)
$$

için bir sonraki değer

$$
y_{n+1}=y_n+h,y_n(1-y_n)
$$

olur. Bu soru iterasyon yapmayı değil, formülü doğru kurmayı ölçer.

## Temel Tam Çözümler

### Örnek 7: İki Adım

$$
y'=y,\q\quad y(0)=1,\q\quad h=0.5
$$

Birinci adım:

$$
f(0,1)=1,\q\quad y_1=1+0.5(1)=1.5.
$$

İkinci adım:

$$
f(0.5,1.5)=1.5,\q\quad y_2=1.5+0.5(1.5)=2.25.
$$

Dolayısıyla

$$
\boxed{y(1)\approx2.25}.
$$

Tam değer $e\approx2.718$ olduğundan Euler yaklaşımı bu dışbükey çözümün
altında kalır.

### Örnek 8: Eğimin Hem $t$'ye Hem $y$'ye Bağlı Olması

$$
y'=t+y,\q\quad y(0)=1,\q\quad h=0.5
$$

İlk adım Örnek 5'ten $(t_1,y_1)=(0.5,1.5)$'tir. İkinci eğim

$$
f(0.5,1.5)=0.5+1.5=2
$$

ve

$$
y_2=1.5+0.5(2)=2.5.
$$

Sonuç

$$
\boxed{y(1)\approx2.5}.
$$

Her adımda hem zamanın hem yaklaşık çözümün güncellenmesi gerekir.

## Hata Avı

### Örnek 9: İlk Hata Nerede?

Bir öğrenci Örnek 8'in ikinci adımında $f(1,1.5)$ hesaplıyor. İlk hata, eğimi
henüz ulaşılmamış $t_2=1$ noktasında değerlendirmektir. Açık Euler yöntemi
eğimi mevcut $(t_1,y_1)=(0.5,1.5)$ noktasında alır.

## Karşılaştırma

### Örnek 10: $h=0.5$ ve $h=0.25$

$y'=y$, $y(0)=1$ için $h=0.5$ ile $y(1)\approx2.25$ bulunmuştu.
$h=0.25$ için her adım $1.25$ ile çarpar ve

$$
y(1)\approx1.25^4=2.44140625.
$$

İkinci değer $e$'ye daha yakındır. Karşılaştırma, çok sayıda yeni iterasyon
yerine adım büyüklüğünün etkisini görünür kılar.

## Hafif Karma Örnek

### Örnek 11: Sayısal Kararlılık Kararı

$$
y'=-2y
$$

için Euler adımı $y_{n+1}=(1-2h)y_n$ olur. $h=0.75$ için çarpan $-0.5$ ve
yaklaşım işaret değiştirerek söner. $h=1.25$ için çarpan $-1.5$ ve yaklaşım
büyür; gerçek çözüm $e^{-2t}$ söndüğü hâlde sayısal yöntem yanlış davranış
üretir.

## Karma Çalışma Soruları

### Soru 1

$$
y'=t-y,\q\quad y(0)=1
$$

problemi için $h=0.2$ alarak ilk üç Euler adımını tablo hâlinde hesaplayın.

### Soru 2

$y'=y$, $y(0)=1$ problemi için $h=0.25$ ile $y(1)$ yaklaşımını bulun ve
$e$ ile karşılaştırın.

### Soru 3

$y'=-y$, $y(0)=2$ problemi için $t=1$ noktasına kadar hem $h=0.5$ hem
$h=0.25$ kullanın. İki yaklaşımın mutlak hatalarını karşılaştırın.

### Soru 4

$y'=2t$, $y(0)=1$ problemi için $h=0.5$ ile $y(1)$ yaklaşımını bulun. Tam
çözümü kullanarak son noktadaki hatayı hesaplayın.

### Soru 5

$y'=y(1-y)$ denklemi için Euler yineleme bağıntısını simgesel olarak yazın.
$y_0=0.2$ ve $h=0.5$ ile iki adım yürütün.

### Soru 6

Bir öğrenci $y_{n+1}=y_n+h f(t_{n+1},y_n)$ kullanıyor. Bu güncellemenin açık
Euler formülünden ayrıldığı noktayı açıklayın ve doğru formülü yazın.

### Soru 7

$t_0=1.2$, hedef $t=2.0$ ve $h=0.1$ olduğunda kaç Euler adımı gerekir?
Başlangıç ve bitiş indislerini gösterin.

### Soru 8

$y'=-5y$ denklemi için Euler çarpanını bulun. Yaklaşımın büyüklük olarak
sönmesi için $h>0$ üzerinde gereken aralığı belirleyin.

## Çalışmanızı Kontrol Etme

> Euler tablomda adım sayısını, eğimin $(t_n,y_n)$ noktasında alınmasını,
> $t$ ve $y$ değerlerinin birlikte güncellenmesini, adım küçülünce sonucun
> değişimini ve kararlılık çarpanını incele. Hata varsa sonraki adımları
> yapmadan ilk yanlış noktayı belirt.
