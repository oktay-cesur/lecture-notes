---
title: "Birim Basamak ve Parçalı Girdiler: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — Kavram ve Yöntem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-24
description: "Tek anahtarlama zamanlı parçalı fonksiyonları birim basamakla yazma, ikinci öteleme kuralını kurma ve gecikmeli cevapları yorumlama pratiği."
execute:
  echo: false
---

# Birim Basamak ve Parçalı Girdiler: Alıştırmalar

Birim basamak $u(t-a)$, bir girdinin $t=a$ anında devreye girmesini kodlar.
İkinci öteleme kuralında gecikme hem basamakta hem fonksiyonun argümanında
görünmelidir.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Parçalı fonksiyonu önce kendiniz basamak biçiminde yazın. Yapay zekâdan
> yalnız anahtarlama öncesi ve sonrası değerleri yerine koyarak gösteriminizi
> sınamasını; doğru formülü doğrudan vermemesini isteyin.
:::

## Tanıma ve Karar

### Örnek 1: Açılan Anahtar

$$
f(t)=
\begin{cases}
0,&t<2,\\
1,&t\ge2
\end{cases}
$$

fonksiyonu $u(t-2)$'dir. Dönüşümü $e^{-2s}/s$ olur.

### Örnek 2: Gecikmeli Rampa

$$
u(t-3)(t-3)
$$

$t=3$'e kadar sıfır, sonra sıfırdan başlayan eğimi $1$ olan rampadır.
Dönüşümü $e^{-3s}/s^2$'dir.

### Örnek 3: Kaydırılmamış Çarpan

$u(t-2)t$ ile $u(t-2)(t-2)$ aynı fonksiyon değildir. Birincisi $t=2$'de
$2$ değerine sıçrar; ikincisi sıfırdan başlar.

### Örnek 4: Üstel Çarpanı Okuma

$Y(s)=e^{-4s}F(s)$ biçimi, özgün tarafta $t=4$ gecikmesini gösterir. Ters
dönüşüm $u(t-4)f(t-4)$'tür.

## Mekanizmayı Kurma

### Örnek 5: Parçalı Fonksiyonu Yazma

$$
f(t)=
\begin{cases}
t,&0\le t<2,\\
4-t,&t\ge2
\end{cases}
$$

İlk parçayla başlayıp farkı açalım:

$$
f(t)=t+(4-2t)u(t-2).
$$

$t<2$ için basamak sıfırdır; $t\ge2$ için toplam $4-t$ olur.

### Örnek 6: Kuralın İstediği Biçim

$u(t-2)t^2$ ifadesinde $t=(t-2)+2$ yazılır:

$$
u(t-2)\bigl[(t-2)^2+4(t-2)+4\bigr].
$$

Bu nedenle dönüşüm

$$
e^{-2s}\left(\frac2{s^3}+\frac4{s^2}+\frac4s\right)
$$

olur.

## Temel Tam Çözümler

### Örnek 7: Parçalı Girdinin Dönüşümü

$$
f(t)=
\begin{cases}
0,&t<2,\\
t-2,&t\ge2
\end{cases}
$$

Fonksiyon doğrudan

$$
f(t)=u(t-2)(t-2)
$$

biçimindedir. $\mathcal L\{t\}=1/s^2$ olduğundan ikinci öteleme kuralı

$$
\boxed{F(s)=\frac{e^{-2s}}{s^2}}
$$

verir. Anahtarlama anında rampa sıfırdan başladığı için gösterim süreklidir.

### Örnek 8: Sıçrayan Girdili Başlangıç Değeri

$$
y'+y=u(t-2),\q\quad y(0)=0
$$

Dönüşüm alalım:

$$
(s+1)Y=\frac{e^{-2s}}s,\q\quad
Y=e^{-2s}\frac1{s(s+1)}.
$$

Rasyonel kısmın ters dönüşümü $1-e^{-t}$'dir. Gecikmeyi uygulayınca

$$
\boxed{y(t)=u(t-2)\bigl(1-e^{-(t-2)}\bigr)}.
$$

$t<2$ için çıktı sıfırdır; $t=2$'den sonra $1$ dengesine yaklaşır.

## Hata Avı

### Örnek 9: İlk Hata Nerede?

Bir öğrenci

$$
\mathcal L^{-1}\left\{\frac{e^{-3s}}{s^2}\right\}=u(t-3)t
$$

yazıyor. İlk hata, $f(t)$ içindeki zamanı kaydırmamaktır. Doğru gecikmeli
fonksiyon $u(t-3)(t-3)$ olmalıdır.

## Karşılaştırma

### Örnek 10: Açılma ve Kapanma

$u(t-1)$ girdiyi $t=1$'de açıp açık tutar. $u(t-1)-u(t-4)$ ise girdiyi
$t=1$'de açar, $t=4$'te kapatır. İkinci gösterimde iki anahtarlama zamanı ve
dönüşümde iki üstel çarpan bulunur.

## Hafif Karma Örnek

### Örnek 11: Sonlu Süreli Sabit Girdi

$$
g(t)=
\begin{cases}
0,&t<1,\\
2,&1\le t<3,\\
0,&t\ge3
\end{cases}
$$

İki basamak yeterlidir:

$$
g(t)=2u(t-1)-2u(t-3).
$$

Lineerlikle

$$
\boxed{G(s)=\frac{2e^{-s}-2e^{-3s}}s}.
$$

Her üstel çarpan kendi anahtarlama zamanını taşır.

## Karma Çalışma Soruları

### Soru 1

Aşağıdaki fonksiyonu birim basamaklarla yazın ve Laplace dönüşümünü bulun:

$$
f(t)=
\begin{cases}
0,&t<2,\\
3,&2\le t<5,\\
0,&t\ge5.
\end{cases}
$$

### Soru 2

$u(t-3)(t-3)^2$ fonksiyonunu parçalı biçimde yazın ve Laplace dönüşümünü
bulun.

### Soru 3

$$
f(t)=
\begin{cases}
t,&0\le t<1,\\
2t-1,&t\ge1
\end{cases}
$$

fonksiyonunu birim basamak kullanarak tek satırda gösterin.

### Soru 4

$\mathcal L\{u(t-4)\sin(t-4)\}$ dönüşümünü bulun. Gecikmenin hem özgün
fonksiyonda hem dönüşümde nerede göründüğünü belirtin.

### Soru 5

Bir öğrenci $\mathcal L\{u(t-2)t^2\}=e^{-2s}(2/s^3)$ yazıyor. İlk hatayı
belirleyin ve dönüşümü doğru öteleme biçimine getirerek hesaplayın.

### Soru 6

$$
y'+y=u(t-2),\q\quad y(0)=0
$$

başlangıç değer problemini Laplace dönüşümüyle çözün.

### Soru 7

$$
F(s)=\frac{e^{-3s}}{s(s+1)}
$$

ifadesinin ters Laplace dönüşümünü birim basamaklı biçimde bulun; ardından
parçalı gösterimini yazın.

### Soru 8

$2u(t-1)-5u(t-3)+3u(t-6)$ fonksiyonunun her anahtarlama aralığındaki değerini
bulun ve grafiğinin temel biçimini çizerek doğrulayın.

## Çalışmanızı Kontrol Etme

> Gösterimimi anahtarlama öncesi ve sonrası değerler, basamakla çarpılan fark,
> $f(t-a)$ kaydırması ve dönüşümdeki $e^{-as}$ çarpanı açısından incele. Hata
> varsa doğru formülü vermeden ilk yanlış zaman kaymasını belirt.
