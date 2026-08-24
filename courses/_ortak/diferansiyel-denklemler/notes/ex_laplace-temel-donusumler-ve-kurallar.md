---
title: "Laplace: Temel Dönüşümler ve Kurallar — Alıştırmalar"
subtitle: "Diferansiyel Denklemler — Kavram ve Yöntem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-24
description: "Temel Laplace dönüşümlerini tanıma, lineerlik, türev ve birinci öteleme kurallarını doğru kurma pratiği."
execute:
  echo: false
---

# Laplace: Temel Dönüşümler ve Kurallar — Alıştırmalar

Laplace dönüşümünde küçük harf özgün fonksiyonu, büyük harf dönüşümünü
gösterir. Temel tabloyu ezberden çoğaltmak yerine payın, paydanın ve kaymanın
hangi özgün yapıya karşılık geldiğini okuyacağız.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Dönüşümü önce tablo ve kurallarla kendiniz kurun. Yapay zekâdan sonucu
> hesaplamasını değil, seçtiğiniz tablo satırını, başlangıç koşulu terimlerini
> ve $s$ kaymasının bütün yerlere uygulanıp uygulanmadığını denetlemesini
> isteyin.
:::

## Tanıma ve Karar

### Örnek 1: Tablo Satırını Seçme

$1$, $t^2$, $e^{-3t}$ ve $\sin4t$ sırasıyla sabit, kuvvet, üstel ve
trigonometrik satırlara gider. Dönüşümleri

$$
\frac1s,\q\quad \frac{2}{s^3},\q\quad \frac1{s+3},\q\quad
\frac4{s^2+16}
$$

olur.

### Örnek 2: Yakınsama Kararı

$e^{2t}$ fonksiyonunun dönüşümü $1/(s-2)$'dir ve integral $s>2$ için
yakınsar. $e^{t^2}$ ise hiçbir sabit $s$ için üstel mertebeden değildir; bu
ders kapsamındaki Laplace dönüşümü yoktur.

### Örnek 3: Hangi Kural?

$e^{3t}\cos2t$ ifadesinde birinci öteleme; $y''$ ifadesinde türev kuralı;
$t\sin t$ ifadesinde $t$ ile çarpma kuralı kullanılır.

### Örnek 4: Sonucun Biçimini Okuma

$$
\frac{s+1}{(s+1)^2+9}
$$

ifadesi $s$ ekseninde $-1$ kaydırılmış kosinüs kalıbıdır. Karşılığı
$e^{-t}\cos3t$'dir.

## Mekanizmayı Kurma

### Örnek 5: Türevlerin Dönüşümü

$Y(s)=\mathcal L\{y(t)\}$, $y(0)=2$ ve $y'(0)=-1$ olsun. Tam çözüm yapmadan

$$
\mathcal L\{y'\}=sY-2,\q\quad
\mathcal L\{y''\}=s^2Y-2s+1
$$

yazılır. İkinci formüldeki $+1$, $-y'(0)$ teriminden gelir.

### Örnek 6: Öteleme Kurulumu

$$
\mathcal L\{e^{2t}\cos3t\}
$$

için önce $F(s)=s/(s^2+9)$ alınır, sonra $s$ görülen her yerde $s-2$
yazılır:

$$
\frac{s-2}{(s-2)^2+9}.
$$

## Temel Tam Çözümler

### Örnek 7: Lineerlikle Dönüşüm

$$
f(t)=3-2e^{-t}+4\sin2t
$$

Her terim ayrı dönüştürülür:

$$
\mathcal L\{3\}=\frac3s,\q\quad
\mathcal L\{-2e^{-t}\}=-\frac2{s+1},\q\quad
\mathcal L\{4\sin2t\}=\frac8{s^2+4}.
$$

Dolayısıyla

$$
\boxed{F(s)=\frac3s-\frac2{s+1}+\frac8{s^2+4}},\q\quad s>0.
$$

En kısıtlayıcı yakınsama koşulu $s>0$'dır.

### Örnek 8: Üstel ile Çarpılmış Kuvvet

$$
f(t)=t^2e^{-t}
$$

$\mathcal L\{t^2\}=2/s^3$ ve $a=-1$'dir. Birinci öteleme kuralı

$$
\boxed{\mathcal L\{t^2e^{-t}\}=\frac{2}{(s+1)^3}}
$$

verir. Paydayı açmak, ters yönde okumayı zorlaştıracağı için gerekmez.

## Hata Avı

### Örnek 9: İlk Hata Nerede?

Bir öğrenci

$$
\mathcal L\{e^{2t}\cos3t\}=\frac{s}{(s-2)^2+9}
$$

yazıyor. İlk hata, kaymayı yalnız paydaya uygulamaktır. Birinci ötelemede
$F(s)$ içindeki bütün $s$'ler $s-2$ olur; pay $s-2$ olmalıdır.

## Karşılaştırma

### Örnek 10: İki Öteleme Görünümü

$e^{2t}f(t)$ özgün tarafta bir çarpımdır ve $F(s-2)$ üretir. Buna karşılık
$e^{-2s}F(s)$ dönüşüm tarafındaki bir çarpımdır; özgün fonksiyonu $t=2$ kadar
geciktirir ve birim basamak gerektirir. Üstelin hangi değişkende olduğuna
bakmak iki kuralı ayırır.

## Hafif Karma Örnek

### Örnek 11: Dönüştürülmüş Denklemi Yazma

$$
y''+2y'+y=e^{-t},\q\quad y(0)=1,\quad y'(0)=0
$$

Yalnız dönüşüm denklemini kuralım:

$$
(s^2Y-s)+2(sY-1)+Y=\frac1{s+1}.
$$

Buradan

$$
(s+1)^2Y=s+2+\frac1{s+1}
$$

çıkar. Bu sorunun hedefi ters dönüşüm değil, türev kurallarıyla başlangıç
koşullarını doğru yere yerleştirmektir.

## Karma Çalışma Soruları

### Soru 1

$\mathcal L\{4-3t+2t^3\}$ dönüşümünü lineerlik ve temel tabloyla bulun.

### Soru 2

$\mathcal L\{e^{-2t}\sin 5t\}$ dönüşümünü bulun; kaymanın pay ve paydada
oluşturduğu değişikliği gösterin.

### Soru 3

$\mathcal L\{e^{3t}\cos 2t\}$ dönüşümünü bulun ve yakınsama bölgesini
belirtin.

### Soru 4

$y(0)=2$, $y'(0)=-1$ olmak üzere $\mathcal L\{y''-4y'+3y\}$ ifadesini
$Y(s)$ cinsinden yazın.

### Soru 5

$$
y''+y'=t,
\q\quad
y(0)=0,\quad y'(0)=2
$$

probleminin yalnız dönüşüm uzayındaki cebirsel denklemini kurun; ters dönüşüm
yapmayın.

### Soru 6

Bir öğrenci $\mathcal L\{t^4\}=4/s^5$ yazıyor. Hatanın kaynağını açıklayın
ve doğru dönüşümü bulun.

### Soru 7

$\mathcal L\{f'(t)\}=sF(s)-f(0)$ kuralını kullanarak
$\mathcal L\{\cos 3t\}$ dönüşümünü türev ilişkisi üzerinden yeniden elde
edin.

### Soru 8

Aşağıdaki dönüşümlerde kullanılan ana kuralı adlandırın ve sonucu bulun:

$$
\mathcal L\{2e^t-3\sin 4t\},
\q\quad
\mathcal L\{e^{-t}(t^2+1)\}.
$$

## Çalışmanızı Kontrol Etme

> Çözümümü tablo satırı, faktöriyel ve frekans çarpanları, yakınsama aralığı,
> türevlerdeki başlangıç koşulları ve ötelemede bütün $s$'lerin kaydırılması
> açısından incele. Hata varsa sonucu vermeden ilk yanlış kuralı belirt.
