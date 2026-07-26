---
title: "Yön Alanı ve Nitel Çözüm: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
description: "Birinci mertebeden denklemin eğim bilgisini okuyarak çözüm eğrilerinin nitel davranışını belirleme pratiği."
execute:
  echo: false
---

# Yön Alanı ve Nitel Çözüm: Alıştırmalar

Yön alanı, çözüm formülünü bulmadan önce $y'=f(x,y)$ kuralının düzlemde hangi
eğimleri ürettiğini gösterir. Her $(x,y)$ noktasındaki kısa doğru parçasının
eğimi $f(x,y)$ değeridir. Çözüm eğrisi geçtiği her noktada bu parçaya teğet
olmalıdır.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Bana dört birinci mertebe denklem ver. Belirlediğin noktalarda eğim işaretini
> ve büyüklüğünü hesaplamamı, ardından çözüm eğrisinin artma-azalma davranışını
> tahmin etmemi iste. Çözüm formülünü başlangıçta verme.
:::

## Noktadaki Eğimi Okuma

### Örnek 1: Eğim Değeri

$$
y'=x-y
$$

için $(2,1)$ noktasındaki eğim

$$
y'=2-1=1
$$

olur. Aynı denklemde $(1,2)$ noktasındaki eğim $-1$'dir. İlk noktadan geçen
çözüm artarken ikinci noktadan geçen çözüm azalır.

### Örnek 2: Yatay Teğetler

$$
y'=x+y
$$

denkleminde yatay teğet koşulu $x+y=0$'dır. Dolayısıyla $y=-x$ doğrusu
üzerindeki bütün yön parçalarının eğimi sıfırdır. Bu doğru çözüm olmak zorunda
değildir; yalnız yatay teğetlerin geometrik yeridir.

## Otonom Denklemlerde Şeritler

### Örnek 3: Aynı Yükseklikte Aynı Eğim

$$
y'=y(2-y)
$$

otonom olduğundan eğim $x$'e bağlı değildir. Aynı $y$ yüksekliğindeki bütün
noktalarda eğim aynıdır:

- $0<y<2$ iken eğim pozitiftir.
- $y>2$ iken eğim negatiftir.
- $y<0$ iken eğim negatiftir.
- $y=0$ ve $y=2$ üzerinde eğim sıfırdır.

Bu bilgi çözüm eğrilerinin hangi denge düzeylerine yaklaştığını formül
bulmadan gösterir.

## Çözüm Eğrisini Seçme

### Örnek 4: Başlangıç Noktasına Uyan Eğri

$y'=2x$ için yön alanı yalnız $x$'e bağlıdır. Çözüm ailesi
$y=x^2+C$ olduğundan bütün çözüm eğrileri düşey ötelemelerle birbirine
bağlıdır. $(0,3)$ noktasından geçen eğri $y=x^2+3$'tür.

**Kontrol.** Seçilen eğrinin yalnız başlangıç noktasından geçmesi yetmez; her
noktadaki teğet eğimi yön alanıyla uyuşmalıdır.

## Hata Avı

### Örnek 5: Okun Yönünü Çözüm Sanmak

Yön alanındaki kısa parçalar hareket oku değildir. Parçanın sağa doğru
okunduğunda yükselmesi pozitif türevi, alçalması negatif türevi gösterir.

### Örnek 6: Çözüm Eğrilerinin Kesişmesi

Varlık-teklik koşullarının sağlandığı bir bölgede iki farklı çözüm aynı
noktadan geçemez. Böyle bir çizim, en az bir eğrinin yön alanını izlemediğini
gösterir.

## Adım Adım İşlem Pratiği

### Örnek 7

$y'=x+y$ için:

$$
f(0,0)=0,\quad f(1,0)=1,\quad f(0,1)=1,\quad f(-1,0)=-1.
$$

### Örnek 8

$y'=1-y^2$ için $-1<y<1$ bölgesinde eğimler pozitif, $|y|>1$ bölgesinde
negatiftir; $y=\pm1$ denge doğrularıdır.

## Karma Çalışma Soruları

### Soru 1

$y'=x+2y$ için $(0,1)$, $(1,0)$ ve $(-2,1)$ noktalarındaki eğimleri bulun.

### Soru 2

$y'=x^2-y$ denkleminde yatay teğetlerin geometrik yerini belirleyin.

### Soru 3

$y'=y-3$ için $y<3$ ve $y>3$ bölgelerinde çözüm eğrilerinin davranışını
açıklayın.

### Soru 4

$y'=y(1-y)$ denkleminin denge doğrularını ve her şeritteki eğim işaretini
bulun.

### Soru 5

$y'=-2x$ çözüm ailesini bulun. $(0,-1)$ noktasından geçen çözüm eğrisini
seçin ve yön alanıyla uyumunu açıklayın.

### Soru 6

$y'=x-y$ için bir çözüm eğrisi $(1,1)$ noktasından geçerken yatay mıdır?
Bu noktadan hemen sağda artacağını veya azalacağını yalnız bu bilgiyle
söyleyebilir misiniz?

### Soru 7

Otonom bir denklemde aynı yatay doğru üzerindeki yön parçalarının neden eşit
eğimli olduğunu açıklayın.

### Soru 8

Bir yön alanında iki çizilmiş çözüm eğrisi aynı noktada kesişiyor. Bunun hangi
koşul altında hata sayılacağını belirtin.

## Çalışmanızı Kontrol Etme

> Yanıtlarımı nokta-eğim hesabı, eğim işareti, yatay teğet koşulu ve çözüm
> eğrisinin yön alanına teğet olması açısından incele. Çizim gerektiren
> sorularda doğru eğriyi verme; önce yanlış okuduğum bölgeyi veya eğim
> işaretini belirt.
