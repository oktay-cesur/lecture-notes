---
title: "Doğrudan İntegralle Çözüm: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
description: "Türevi yalnız bağımsız değişkene bağlı denklemleri integralleyerek çözme ve başlangıç koşulunu uygulama pratiği."
execute:
  echo: false
---

# Doğrudan İntegralle Çözüm: Alıştırmalar

$y'=f(x)$ biçimindeki denklemlerde bilinmeyen fonksiyon sağ tarafta yer
almaz. Çözüm, $f$ fonksiyonunun bir ilkeli fonksiyonunu bulup integrasyon
sabitini eklemektir. Daha yüksek türevli doğrudan integral denklemlerinde her
integrasyon yeni bir sabit üretir.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Bana polinom, üstel ve trigonometrik sağ taraflardan oluşan altı doğrudan
> integral sorusu üret. İkisi ikinci mertebeden ve iki başlangıç koşullu olsun.
> Çözümleri gösterme; her integrasyonda kaç sabit çıkması gerektiğini bana sor.
:::

## Birinci Mertebeden Denklemler

### Örnek 1: Polinom Sağ Taraf

$$
y'=3x^2-4x+1.
$$

Terim terim integral alınır:

$$
y=x^3-2x^2+x+C.
$$

Türev alarak kontrol edince başlangıçtaki sağ taraf geri gelir.

### Örnek 2: Başlangıç Koşulu

$$
y'=e^x+\cos x,\qquad y(0)=3.
$$

$$
y=e^x+\sin x+C.
$$

$3=1+0+C$ olduğundan $C=2$:

$$
\boxed{y=e^x+\sin x+2}.
$$

## Daha Yüksek Türevler

### Örnek 3: İki Kez İntegrasyon

$$
y''=6x,\qquad y(0)=1,\qquad y'(0)=-2.
$$

İlk integrasyon:

$$
y'=3x^2+C_1.
$$

$y'(0)=-2$ koşulu $C_1=-2$ verir. İkinci integrasyon:

$$
y=x^3-2x+C_2.
$$

$y(0)=1$ koşulundan $C_2=1$ bulunur.

### Örnek 4: Sabit Sayısını Kontrol Etme

$y'''=\sin x$ denklemi üç kez integral gerektirir; genel çözümde üç bağımsız
sabit bulunmalıdır:

$$
y=\cos x+\frac{C_1}{2}x^2+C_2x+C_3.
$$

## Hata Avı

### Örnek 5: İntegrasyon Sabitini Unutmak

$y'=2x$ için yalnız $y=x^2$ yazmak çözüm ailesinin tek bir üyesini verir.
Doğru genel çözüm $y=x^2+C$'dir.

### Örnek 6: Her Terime Ayrı Sabit Eklemek

$$
\int(x+\sin x)\,dx=\frac{x^2}{2}-\cos x+C
$$

biçimindedir. Her terime ayrı sabit eklemek gerekli değildir; sabitlerin
toplamı yine tek bir sabittir.

## Adım Adım İşlem Pratiği

### Örnek 7

$$
y'=\frac1x,\quad x>0
\quad\Rightarrow\quad
y=\ln x+C.
$$

### Örnek 8

$$
y''=4,\quad y'(0)=1,\quad y(0)=0
$$

için $y'=4x+1$ ve $y=2x^2+x$ bulunur.

## Karma Çalışma Soruları

### Soru 1

$y'=4x^3-2x$ denkleminin genel çözümünü bulun.

### Soru 2

$y'=\sec^2x,\ y(0)=4$ problemini uygun bir aralıkta çözün.

### Soru 3

$y'=e^{-2x},\ y(0)=1$ problemini çözün.

### Soru 4

$y''=12x^2,\ y(0)=2,\ y'(0)=-1$ problemini çözün.

### Soru 5

$y''=\cos x,\ y(\pi)=0,\ y'(\pi)=3$ problemini çözün.

### Soru 6

$y'''=0$ denkleminin genel çözümünü bulun ve sabit sayısını mertebeyle
karşılaştırın.

### Soru 7

$Q'(t)=5-2t,\ Q(1)=10$ problemini çözün ve $Q$'nun en büyük olduğu zamanı
bulun.

### Soru 8

$y'=1/(1+x^2)$ denklemini çözün; çözüm ailesinin bütün gerçek sayılarda
tanımlı olup olmadığını belirtin.

## Çalışmanızı Kontrol Etme

> Çözümümü integral hesabı, sabit sayısı, başlangıç koşullarının doğru türev
> düzeyine uygulanması ve türevle geri doğrulama açısından incele. Hata varsa
> doğru sonucu vermeden ilk yanlış integrasyon veya sabit adımını göster.
