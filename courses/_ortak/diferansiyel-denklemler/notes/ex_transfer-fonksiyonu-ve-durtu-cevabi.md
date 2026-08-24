---
title: "Transfer Fonksiyonu ve Dürtü Cevabı: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — Kavram ve Yöntem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-24
description: "Sistem, girdi ve çıktı ayrımını kurma; transfer fonksiyonunu, kutupları, dürtü ve basamak cevaplarını okuma pratiği."
execute:
  echo: false
---

# Transfer Fonksiyonu ve Dürtü Cevabı: Alıştırmalar

Sıfır başlangıç koşullarında $Y(s)=H(s)G(s)$ ayrımı kullanılır. $H$ yalnız
sistemin katsayılarına, $G$ girdiye bağlıdır. Dürtü cevabı
$h=\mathcal L^{-1}\{H\}$'dir.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Önce sistem, girdi ve çıktı parçalarını kendiniz ayırın. Yapay zekâdan
> yalnız $H(s)$'nin girdiden bağımsız olup olmadığını ve kutuplardan yaptığınız
> davranış yorumunu kontrol etmesini isteyin.
:::

## Tanıma ve Karar

### Örnek 1: Üç Rol

$H(s)$ sistemi, $G(s)$ girdiyi, $Y(s)=H(s)G(s)$ çıktıyı temsil eder. Girdi
değiştiğinde $G$ ve $Y$ değişir; sistem aynı kaldığı sürece $H$ değişmez.

### Örnek 2: Dürtü Cevabı

$G(s)=1$ ise girdi Dirac dürtüsüdür. Bu durumda $Y(s)=H(s)$ ve çıktı
$h(t)=\mathcal L^{-1}\{H(s)\}$ olur.

### Örnek 3: Basamak Cevabı

$g(t)=u(t)$ için $G(s)=1/s$'dir. Basamak cevabı $Y=H/s$; özgün tarafta
$y(t)=\int_0^t h(\tau)d\tau$ olur.

### Örnek 4: Kutupları Okuma

$H(s)=1/(s-2)$ pozitif reel kutup taşır ve dürtü cevabı $e^{2t}$ büyür.
Sistem kararsızdır.

## Mekanizmayı Kurma

### Örnek 5: Transfer Fonksiyonunu Çıkarma

$$
y''+3y'+2y=g(t),\q\quad y(0)=y'(0)=0
$$

Dönüşüm

$$
(s^2+3s+2)Y=G
$$

verir. Dolayısıyla

$$
H(s)=\frac{Y}{G}=\frac1{(s+1)(s+2)}.
$$

### Örnek 6: Dürtü Cevabını Kurma

Bir önceki sistem için

$$
H(s)=\frac1{s+1}-\frac1{s+2}
$$

olduğundan $h(t)=e^{-t}-e^{-2t}$'dir. İki kutup da negatif olduğundan cevap
söner.

## Temel Tam Çözümler

### Örnek 7: Birinci Mertebe Sistem

$$
y'+2y=g(t),\q\quad y(0)=0
$$

Dönüşümden $(s+2)Y=G$ çıkar. Bu nedenle

$$
H(s)=\frac1{s+2},\q\quad
\boxed{h(t)=e^{-2t}}.
$$

Birim basamak girdisi için

$$
Y(s)=\frac1{s(s+2)}
=\frac12\left(\frac1s-\frac1{s+2}\right)
$$

ve

$$
\boxed{y(t)=\frac12(1-e^{-2t})}
$$

bulunur. Son değer $1/2$, sabit denklemden $2y=1$ ile de okunur.

### Örnek 8: Sönümlü Salınım

$$
y''+2y'+5y=g(t),\q\quad y(0)=y'(0)=0
$$

$$
H(s)=\frac1{s^2+2s+5}
=\frac1{(s+1)^2+4}.
$$

Sinüs kalıbında payı $2$'ye tamamlayalım:

$$
\boxed{h(t)=\frac12e^{-t}\sin2t}.
$$

Kutuplar $-1\pm2i$'dir; reel kısım sönümü, sanal kısım salınımı belirler.

## Hata Avı

### Örnek 9: İlk Hata Nerede?

Bir öğrenci sıfırdan farklı başlangıç koşullarında da doğrudan $Y=HG$ yazıyor.
İlk hata, başlangıç koşullarından gelen terimleri atlamaktır. Bu durumda çıktı,
girdi cevabı ile başlangıç cevabının toplamıdır.

## Karşılaştırma

### Örnek 10: Dürtü ve Basamak

Dürtü cevabı sistemi kısa bir vuruşla sınar ve doğrudan $h$'yi verir. Basamak
cevabı kalıcı sabit girdiye tepkidir ve $h$'nin integralidir. Aynı sistemi iki
farklı girdinin altında gözleriz; $H$ değişmez.

## Hafif Karma Örnek

### Örnek 11: Basit Girdiye Cevap Kurma

$H(s)=1/(s+1)$ ve $g(t)=e^{-t}$ olsun. $G(s)=1/(s+1)$ olduğundan

$$
Y(s)=\frac1{(s+1)^2}.
$$

Ters dönüşüm

$$
\boxed{y(t)=te^{-t}}
$$

verir. Aynı sonuç $e^{-t}*e^{-t}$ konvolüsyonundan da elde edilir.

## Karma Çalışma Soruları

### Soru 1

$$
y''+3y'+2y=g(t),
\q\quad
y(0)=y'(0)=0
$$

sistemi için transfer fonksiyonunu ve kutupları bulun.

### Soru 2

Soru 1'deki sistemin dürtü cevabını bulun ve uzun zamandaki davranışını
yorumlayın.

### Soru 3

$H(s)=1/(s+2)$ sisteminin birim basamak cevabını bulun. Son değeri kutup
yapısıyla birlikte yorumlayın.

### Soru 4

$H(s)=1/(s^2+2s+10)$ için dürtü cevabını bulun; sönüm oranını ve salınım
frekansını kutuplardan okuyun.

### Soru 5

$H(s)=1/(s+1)$ ve $g(t)=2e^{-3t}$ veriliyor. Sıfır başlangıç koşullarında
$Y(s)$'yi kurun ve çıktıyı bulun.

### Soru 6

Sıfırdan farklı başlangıç koşullarında $Y=HG$ eşitliğinin tek başına neden
yeterli olmadığını ikinci mertebeden bir denklem üzerinde gösterin.

### Soru 7

$h(t)=e^{-t}$ ve $g(t)=t$ için çıktıyı

$$
y(t)=(h*g)(t)
$$

konvolüsyonundan hesaplayın.

### Soru 8

$H_1(s)=1/(s+1)$ ve $H_2(s)=1/(s-1)$ sistemlerini kutupları, dürtü cevapları
ve kararlılıkları bakımından karşılaştırın.

## Çalışmanızı Kontrol Etme

> Çözümümü $H$, $G$ ve $Y$ rollerini ayırma, sıfır başlangıç koşulu
> varsayımı, dürtü ve basamak cevapları ile kutuplardan kararlılık okuma
> açısından incele. Hata varsa ters dönüşümü yapmadan ilk yanlış yorumu
> belirt.
