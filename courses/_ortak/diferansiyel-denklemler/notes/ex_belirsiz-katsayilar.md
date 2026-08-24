---
title: "Belirsiz Katsayılar: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-05
description: "Sabit katsayılı homojen olmayan denklemlerde aday kalıbı seçme, çakışma düzeltmesi ve katsayı eşleştirme pratiği."
execute:
  echo: false
---

# Belirsiz Katsayılar: Alıştırmalar

$$
ay''+by'+cy=g(x)
$$

denkleminde genel çözüm $y=y_h+y_p$'dir. $g(x)$ polinom, üstel, sinüs–kosinüs
veya bunların çarpımıysa $y_p$ için aynı aileden bir aday yazılır ve
katsayıları denklem belirler.

Aday $y_h$'nin bir bileşeniyle çakışıyorsa, çakışma kalmayana kadar $x$ ile
çarpılır.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Sabit katsayılı sekiz homojen olmayan denklem üret. İkisinde sağ taraf
> homojen çözümle çakışsın. Aday kalıbını ve katsayıları benim yazmamı bekle;
> çakışmayı önceden söyleme.
:::

## Çözüm Hattı

### Örnek 1: Polinom Sağ Taraf

$$
y''-y'-2y=4x^2.
$$

**Homojen çözüm.**

$$
r^2-r-2=(r-2)(r+1)=0,
\qquad
y_h=C_1e^{2x}+C_2e^{-x}.
$$

**Aday.** Sağ taraf ikinci dereceden; ara dereceler de yazılır:

$$
y_p=Ax^2+Bx+C.
$$

**Yerine koyma.**

$$
2A-(2Ax+B)-2(Ax^2+Bx+C)=4x^2.
$$

**Katsayı eşleştirme.**

$$
-2A=4,
\qquad
-2A-2B=0,
\qquad
2A-B-2C=0.
$$

$A=-2$, $B=2$, $C=-3$:

$$
\boxed{y_p=-2x^2+2x-3}.
$$

### Örnek 2: Üstel Sağ Taraf

$$
y''-y'-2y=4e^{3x}.
$$

$3$ karakteristik denklemin kökü değil, çakışma yok. $y_p=Ae^{3x}$:

$$
(9-3-2)A=4A=4.
$$

$$
\boxed{y_p=e^{3x}}.
$$

### Örnek 3: Trigonometrik Sağ Taraf

$$
y''-y'-2y=10\cos x.
$$

Sağ tarafta yalnız kosinüs olsa da aday çifttir:

$$
y_p=A\cos x+B\sin x.
$$

Yerine koyup katsayıları toplayınca

$$
(-3A-B)\cos x+(A-3B)\sin x=10\cos x.
$$

$-3A-B=10$ ve $A-3B=0$ sisteminden $A=-3$, $B=-1$:

$$
\boxed{y_p=-3\cos x-\sin x}.
$$

## Çakışma Durumu

### Örnek 4: Basit Kökle Çakışma

$$
y''-y'-2y=e^{2x}.
$$

$2$ bir köktür; $Ae^{2x}$ homojen çözümdür. Aday bir kez $x$ ile çarpılır:

$$
y_p=Axe^{2x}.
$$

$$
y_p'=A(1+2x)e^{2x},
\qquad
y_p''=A(4+4x)e^{2x}.
$$

$$
A\bigl[(4+4x)-(1+2x)-2x\bigr]=3A=1.
$$

$$
\boxed{y_p=\tfrac13xe^{2x}}.
$$

### Örnek 5: Çift Kökle Çakışma

$$
y''-4y'+4y=e^{2x}.
$$

$r=2$ çift köktür; hem $e^{2x}$ hem $xe^{2x}$ homojen çözümdür. Aday iki kez
çarpılır:

$$
y_p=Ax^2e^{2x}.
$$

$$
y_p'=A(2x+2x^2)e^{2x},
\qquad
y_p''=A(2+8x+4x^2)e^{2x}.
$$

Yerine koyunca $x$'li terimler tamamen sadeleşir:

$$
2A=1,
\qquad
\boxed{y_p=\tfrac12x^2e^{2x}}.
$$

## Başlangıç Koşulları

### Örnek 6

$$
y''-y'-2y=4x^2,\qquad y(0)=0,\quad y'(0)=2.
$$

Genel çözüm Örnek 1'den:

$$
y=C_1e^{2x}+C_2e^{-x}-2x^2+2x-3.
$$

$$
y'=2C_1e^{2x}-C_2e^{-x}-4x+2.
$$

$x=0$ için

$$
C_1+C_2-3=0,
\qquad
2C_1-C_2+2=2.
$$

$C_1=1$, $C_2=2$:

$$
\boxed{y=e^{2x}+2e^{-x}-2x^2+2x-3}.
$$

## Hata Avı

### Örnek 7: Ara Dereceleri Atlamak

$g=4x^2$ için $y_p=Ax^2$ denenirse, türevlerden gelen birinci dereceli ve
sabit terimlerin dengelenecek eşi kalmaz ve sistem çözümsüz çıkar. Polinom
adayı bütün ara dereceleri taşır.

### Örnek 8: Çakışmayı Kontrol Etmemek

$y''-y'-2y=e^{2x}$ denkleminde $y_p=Ae^{2x}$ denenirse yerine koyma
$0=e^{2x}$ verir. Bu, hesap hatası değil, adayın homojen çözüm olduğunun
işaretidir.

### Örnek 9: Başlangıç Koşullarını $y_h$'ye Uygulamak

Sabitler yalnız $y_h+y_p$ toplamına uygulanarak belirlenir. $y_p$ de
başlangıç noktasında bir değer ve bir eğim taşır.

## Karma Çalışma Soruları

### Soru 1

$y''+y'-6y=12x$ denkleminin genel çözümünü bulun.

### Soru 2

$y''-4y=6e^{x}$ denkleminin genel çözümünü bulun.

### Soru 3

$y''+y=4\sin2x$ denkleminin bir özel çözümünü bulun.

### Soru 4

$y''-y=e^{x}$ denkleminde çakışmayı belirleyip özel çözümü bulun.

### Soru 5

$y''+4y=\cos2x$ denkleminde aday kalıbını gerekçesiyle yazın ve çözün.

### Soru 6

$y''-2y'+y=6xe^{x}$ için yalnız aday kalıbını yazın; katsayıları hesaplamayın.

### Soru 7

$y''-3y'+2y=4x+6e^{4x}$ denklemini süperpozisyonla, iki parçaya ayırarak
çözün.

### Soru 8

$y''+y'-2y=8$, $y(0)=1$, $y'(0)=0$ problemini çözün.

## Çalışmanızı Kontrol Etme

> Çözümümü homojen çözüm, çakışma kontrolü, aday kalıbının eksiksizliği,
> katsayı eşleştirme ve başlangıç koşullarının genel çözüme uygulanması
> açısından incele. Hata varsa doğru katsayıları vermeden ilk yanlış adımı
> belirt.
