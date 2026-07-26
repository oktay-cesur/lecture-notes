---
title: "Lineer Denklemlerde Genel Çözüm Yapısı: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
description: "Temel çözüm kümesi, homojen çözüm, özel çözüm ve genel çözüm ilişkisini kurma pratiği."
execute:
  echo: false
---

# Lineer Denklemlerde Genel Çözüm Yapısı: Alıştırmalar

$n$'inci mertebeden lineer homojen bir denklemde $n$ lineer bağımsız çözüm,
temel çözüm kümesi oluşturur. Homojen olmayan denklemde genel çözüm

$$
y=y_h+y_p
$$

biçimindedir: $y_h$ ilişkili homojen denklemin genel çözümü, $y_p$ ise
homojen olmayan denklemin herhangi bir özel çözümüdür.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Temel çözüm kümesi, genel homojen çözüm ve verilen özel çözümden genel çözüm
> kurma üzerine sekiz soru üret. Karakteristik denklem çözümü gerektirenlerde
> önce kökleri benim bulmamı bekle; özel çözümü başlangıçta yalnız gerektiği
> sorularda ver.
:::

## Temel Çözüm Kümesi

### Örnek 1

$$
y''-5y'+6y=0
$$

denkleminin $y_1=e^{2x}$ ve $y_2=e^{3x}$ çözümleri bağımsızdır. İkinci
mertebeden denklem için iki bağımsız çözüm bulunduğundan temel çözüm kümesi
oluştururlar:

$$
y_h=C_1e^{2x}+C_2e^{3x}.
$$

### Örnek 2: Trigonometrik Küme

$$
y''+9y=0
$$

için $\cos3x$ ve $\sin3x$ bağımsız çözümlerdir:

$$
y_h=C_1\cos3x+C_2\sin3x.
$$

## Süperpozisyon

### Örnek 3

Lineer homojen operatör $L$ için $L[y_1]=0$ ve $L[y_2]=0$ ise

$$
L[C_1y_1+C_2y_2]
=C_1L[y_1]+C_2L[y_2]=0.
$$

Bu sonuç, homojen çözüm uzayındaki lineer birleşim yapısını açıklar.

## Homojen Olmayan Denklem

### Örnek 4: Verilen Özel Çözüm

$$
y''+9y=3x
$$

için $y_p=x/3$ özel çözümü verilsin. İlişkili homojen denklemin çözümü

$$
y_h=C_1\cos3x+C_2\sin3x
$$

olduğundan genel çözüm

$$
\boxed{y=C_1\cos3x+C_2\sin3x+\frac{x}{3}}.
$$

### Örnek 5: İki Özel Çözümün Farkı

$y_{p,1}$ ve $y_{p,2}$ aynı $L[y]=g$ denkleminin özel çözümleriyse

$$
L[y_{p,1}-y_{p,2}]=g-g=0.
$$

Dolayısıyla iki özel çözümün farkı homojen çözümdür. Genel çözüm için herhangi
bir özel çözümün yeterli olmasının nedeni budur.

## Başlangıç Koşulları

### Örnek 6

$$
y=C_1\cos3x+C_2\sin3x,\qquad y(0)=2,\quad y'(0)=-3.
$$

$y(0)=C_1=2$. Türev

$$
y'=-3C_1\sin3x+3C_2\cos3x
$$

olduğundan $y'(0)=3C_2=-3$ ve $C_2=-1$ bulunur.

## Ek Çözümlü Örnekler

### Örnek A: Başlangıç Değeri Problemi

$$
y''-y=0,\qquad y(0)=3,\qquad y'(0)=1.
$$

Temel çözüm kümesi $\{e^x,e^{-x}\}$:

$$
y=C_1e^x+C_2e^{-x}.
$$

Başlangıç koşulları

$$
C_1+C_2=3,\qquad C_1-C_2=1
$$

verir. Buradan $C_1=2$, $C_2=1$:

$$
\boxed{y=2e^x+e^{-x}}.
$$

Çözüm hem denklemde hem iki başlangıç koşulunda doğrulanır.

### Örnek B: Özel Çözüm Neden Tek Değildir?

$L[y]=g$ için $y_p$ özel, $y_h$ homojen çözümse

$$
L[y_p+y_h]=L[y_p]+L[y_h]=g.
$$

Dolayısıyla $y_p+y_h$ de özel çözümdür. Farklı bir özel çözüm seçmek genel
çözüm kümesini değiştirmez; fark homojen çözümün içine katılır.

## Hata Avı

### Örnek 7: Bağımlı Çözümleri İki Sabitle Yazmak

$e^x$ ve $3e^x$ aynı doğrultudadır. $C_1e^x+C_2(3e^x)$ iki bağımsız sabit
taşıyan bir çözüm uzayı oluşturmaz; ifade tek sabitte birleşir.

### Örnek 8: Özel Çözümü Tekrar Sabitle Çarpmak

$y_p$ sabit katsayıyla serbestçe çarpılamaz; $L[Cy_p]=Cg$ olur. Serbest
sabitler yalnız homojen çözümde yer alır.

## Adım Adım İşlem Pratiği

### Örnek 9

$y''-y=0$ için temel küme $\{e^x,e^{-x}\}$ ve
$y_h=C_1e^x+C_2e^{-x}$'tir.

### Örnek 10

$y''-y=e^x$ için bir özel çözüm $y_p=\tfrac12xe^x$ verilirse genel çözüm

$$
y=C_1e^x+C_2e^{-x}+\frac12xe^x
$$

olur.

## Karma Çalışma Soruları

### Soru 1

$y''-4y=0$ için $\{e^{2x},e^{-2x}\}$ kümesinin temel çözüm kümesi olduğunu
doğrulayın ve genel çözümü yazın.

### Soru 2

$y''+4y=0$ denkleminin temel çözüm kümesini ve genel çözümünü yazın.

### Soru 3

$y''-5y'+6y=0,\ y(0)=1,\ y'(0)=0$ probleminin sabitlerini belirleyin.

### Soru 4

$y''+9y=3x$ için $y_p=x/3$ verildiğinde genel çözümü kurun.

### Soru 5

$y''-y=e^x$ için $y_p=\tfrac12xe^x$ özel çözümünü doğrudan doğrulayın.

### Soru 6

Aynı homojen olmayan denklemin iki özel çözümünün farkının neden homojen
çözüm olduğunu operatör lineerliğiyle gösterin.

### Soru 7

Üçüncü mertebeden homojen lineer bir denklemin temel çözüm kümesinde kaç
bağımsız çözüm bulunması gerektiğini açıklayın.

### Soru 8

$\{e^x,2e^x\}$ kümesinin ikinci mertebeden bir denklem için neden temel çözüm
kümesi olamayacağını belirtin.

### Soru 9

$y_p$ özel çözümüne bir homojen çözüm eklenince neden yine özel çözüm
elde edildiğini gösterin.

### Soru 10

Bir genel çözümdeki serbest sabit sayısını denklem mertebesiyle karşılaştırın.

## Çalışmanızı Kontrol Etme

> Çözümümü çözüm fonksiyonlarının denklemi sağlaması, lineer bağımsızlık,
> mertebeye uygun sabit sayısı, y=y_h+y_p ayrımı, özel çözümün doğrulanması ve
> başlangıç koşullarının doğru türev düzeyine uygulanması açısından incele.
> Hata varsa doğru genel çözümü vermeden eksik bileşeni belirt.
