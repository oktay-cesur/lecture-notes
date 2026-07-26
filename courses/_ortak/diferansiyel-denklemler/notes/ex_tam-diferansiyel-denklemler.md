---
title: "Tam Diferansiyel Denklemler: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
description: "Tamlık testini uygulama, potansiyel fonksiyonu kurma ve örtük çözümü doğrulama pratiği."
execute:
  echo: false
---

# Tam Diferansiyel Denklemler: Alıştırmalar

$$
M(x,y)\,dx+N(x,y)\,dy=0
$$

denkleminde bir $F(x,y)$ fonksiyonu için $F_x=M$ ve $F_y=N$ bulunabiliyorsa
denklem tamdır. Uygun düzgünlük koşulları altında pratik test
$M_y=N_x$ eşitliğidir. Çözüm $F(x,y)=C$ biçiminde yazılır.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Dördü tam, ikisi tam olmayan altı M dx + N dy = 0 denklemi üret. Önce M_y ve
> N_x hesabımı bekle. Tam denklemlerde F'yi hangi terimden başlatacağımı bana
> seçtir; eksik tek değişkenli fonksiyonu doğrudan verme.
:::

## Tamlık Testi

### Örnek 1

$$
(2xy-3)\,dx+(x^2+4y)\,dy=0.
$$

$$
M_y=2x,\qquad N_x=2x.
$$

Eşitlik sağlandığı için denklem tamdır.

### Örnek 2: Tam Olmayan Denklem

$$
xy\,dx+(x+y)\,dy=0
$$

için $M_y=x$, $N_x=1$ olur. Genel olarak eşit olmadıklarından denklem tam
değildir.

## Potansiyel Fonksiyon

### Örnek 3: $M$'yi İntegralleme

İlk örnekte

$$
F_x=2xy-3.
$$

$x$'e göre integral:

$$
F=x^2y-3x+g(y).
$$

$y$'ye göre türev alıp $N$ ile karşılaştırılır:

$$
F_y=x^2+g'(y)=x^2+4y.
$$

$g'(y)=4y$, dolayısıyla $g(y)=2y^2$. Çözüm

$$
\boxed{x^2y-3x+2y^2=C}.
$$

### Örnek 4: Örtük Çözümü Doğrulama

$F(x,y)=C$ bağıntısının diferansiyeli

$$
F_x\,dx+F_y\,dy=0
$$

olur. Bulunan $F_x$ ve $F_y$ sırasıyla $M$ ve $N$ ise çözüm doğrulanır.

## Ek Çözümlü Örnekler

### Örnek A: Üstel ve Trigonometrik Terimler

$$
e^x\cos y\,dx+\bigl(-e^x\sin y+2y\bigr)\,dy=0.
$$

**Tamlık.**

$$
M_y=-e^x\sin y,\qquad N_x=-e^x\sin y.
$$

**Potansiyel.**

$$
F=\int e^x\cos y\,dx=e^x\cos y+g(y).
$$

$$
F_y=-e^x\sin y+g'(y)=N
$$

karşılaştırmasından $g'(y)=2y$ ve $g(y)=y^2$:

$$
\boxed{e^x\cos y+y^2=C}.
$$

Toplam diferansiyel alınca başlangıç denklemi geri gelir.

### Örnek B: Başlangıç Koşuluyla Sabit

$$
(3x^2+2y)\,dx+(2x+4y^3)\,dy=0,\qquad y(0)=1.
$$

Tamlık testi geçer. Potansiyel

$$
F=x^3+2xy+y^4
$$

olur. Başlangıç koşulu $C=1$ verdiğinden

$$
\boxed{x^3+2xy+y^4=1}.
$$

## Hata Avı

### Örnek 5: Eksik Fonksiyonu Sabit Sanmak

$M$'yi $x$'e göre integrallerken integrasyon “sabiti” $y$'ye bağlı
$g(y)$ fonksiyonudur. Onu doğrudan sabit almak, $N$ içindeki yalnız $y$'ye
bağlı terimleri kaybettirir.

### Örnek 6: Kısmi Türevde Yanlış Değişken

$M_y$ alınırken $x$ sabit, $N_x$ alınırken $y$ sabit tutulur.

## Adım Adım İşlem Pratiği

### Örnek 7

$$
(y^2+2x)\,dx+(2xy+3y^2)\,dy=0
$$

için $M_y=2y$, $N_x=2y$. Potansiyel

$$
F=xy^2+x^2+y^3
$$

ve çözüm $F=C$'dir.

## Karma Çalışma Soruları

### Soru 1

$(3x^2+2y)\,dx+(2x+4y^3)\,dy=0$ denkleminin tamlığını test edip çözün.

### Soru 2

$(e^x\cos y)\,dx+(-e^x\sin y+2y)\,dy=0$ denklemini çözün.

### Soru 3

$(y^2)\,dx+(2xy+1)\,dy=0$ denklemi için $F(x,y)$'yi bulun.

### Soru 4

$(2x-y)\,dx+(3y-x)\,dy=0$ denkleminin tamlığını test edin.

### Soru 5

$F(x,y)=x^2y+\sin y$ verildiğinde karşılık gelen tam diferansiyel denklemi
yazın.

### Soru 6

Bir potansiyel fonksiyonu önce $N$'yi $y$'ye göre integralleyerek kurun.

### Soru 7

Tamlık testinin geçerli olması için kısmi türevlerin tanımlı olduğu bölgenin
neden dikkate alınması gerektiğini açıklayın.

### Soru 8

Bulduğunuz bir örtük çözümü toplam diferansiyel alarak doğrulayın.

## Çalışmanızı Kontrol Etme

> Çözümümü M ve N seçimi, M_y=N_x testi, integrasyonda eksik tek değişkenli
> fonksiyon, karşılaştırma ve F=C doğrulaması açısından incele. Hata varsa
> doğru potansiyeli vermeden eksik veya fazla terimin hangi aşamada çıktığını
> belirt.
