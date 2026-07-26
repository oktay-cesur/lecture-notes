---
title: "Başlangıç Değer Problemleri ve Çözüm Aralığı: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
description: "Çözüm ailesindeki sabiti başlangıç koşuluyla belirleme ve çözümün en geniş geçerlilik aralığını bulma pratiği."
execute:
  echo: false
---

# Başlangıç Değer Problemleri ve Çözüm Aralığı: Alıştırmalar

Bir genel çözüm ailesi birçok eğri taşır. Başlangıç koşulu bu aileden belirli
bir eğriyi seçer. Ancak bulunan formülün her gerçek sayıda geçerli olduğu
varsayılamaz; paydanın sıfır olduğu, logaritmanın tanımsızlaştığı veya
başlangıç noktasından kopan noktalar ayrıca incelenir.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
Yeni sorular isterken başlangıç koşulunun yanı sıra en geniş çözüm aralığının
da sorulmasını isteyin.

> Birinci mertebeden beş başlangıç değer problemi üret. Önce genel çözüm
> ailesini ver, sabiti benim bulmamı bekle. Sonra formülün tekilliklerini ve
> başlangıç noktasını içeren en geniş çözüm aralığını sormadan cevabı gösterme.
:::

## Başlangıç Koşuluyla Sabiti Belirleme

### Örnek 1: Üstel Çözüm Ailesi

$$
y'=3y,\qquad y(0)=5.
$$

Genel çözüm $y=Ce^{3x}$ biçimindedir. Başlangıç koşulu

$$
5=y(0)=Ce^0=C
$$

verir. Çözüm

$$
\boxed{y=5e^{3x}}
$$

olur ve bütün gerçek sayılarda tanımlıdır.

### Örnek 2: Başlangıç Noktası Sıfır Değil

$$
y'=2x,\qquad y(1)=4.
$$

İntegrasyonla $y=x^2+C$ bulunur. $4=1+C$ olduğundan $C=3$ ve
$y=x^2+3$ olur.

**Kontrol.** Önce $y'=2x$ ile denklemi, sonra $y(1)=4$ ile başlangıç koşulunu
ayrı ayrı sınayın.

## En Geniş Çözüm Aralığı

### Örnek 3: Sonlu Zamanda Tekillik

$$
y'=y^2,\qquad y(1)=-1.
$$

Ayırıp integralleyince

$$
-\frac1y=x+C
$$

elde edilir. Başlangıç koşulu $1=1+C$ verdiğinden $C=0$:

$$
y=-\frac1x.
$$

Formül $x=0$'da tanımsızdır. Başlangıç noktası $x_0=1$ olduğundan onu içeren
en geniş açık aralık

$$
\boxed{(0,\infty)}
$$

olur.

### Örnek 4: İki Tekillik Arasında

$$
y=\frac{1}{(x-2)(x+1)},\qquad y(0)=-\frac12.
$$

Tekillikler $x=-1$ ve $x=2$'dir. Başlangıç noktası $0$, bu iki noktanın
arasında kaldığından en geniş çözüm aralığı $(-1,2)$'dir.

## Hata Avı

### Örnek 5: Tanım Kümesini Tek Aralık Sanmak

$y=1/(x^2-1)$ fonksiyonunun tanım kümesi

$$
(-\infty,-1)\cup(-1,1)\cup(1,\infty)
$$

olur. Başlangıç değer problemi için bu üç parçanın tamamı yazılmaz; başlangıç
noktasını içeren tek bağlı aralık seçilir.

### Örnek 6: Karekök Sınırını Çözüme Katmak

$y=\sqrt{x-3}$ biçiminde bir çözüm orijinal denklemde $y$ paydada yer alıyorsa
$x=3$ sınır noktası ayrıca denetlenmelidir. Karekökün tanımlı olması tek başına
orijinal diferansiyel denklemin de tanımlı olduğunu göstermez.

## Adım Adım İşlem Pratiği

### Örnek 7

$y'=4x^3,\ y(0)=2$ için $y=x^4+C$ ve $C=2$:

$$
y=x^4+2,\qquad I=\mathbb{R}.
$$

### Örnek 8

$y'=2y^2,\ y(0)=\tfrac12$ için

$$
-\frac1y=2x+C,\qquad C=-2,
$$

$$
y=\frac{1}{2(1-x)}.
$$

Tekillik $x=1$ olduğundan başlangıç noktasını içeren aralık
$(-\infty,1)$'dir.

## Karma Çalışma Soruları

### Soru 1

$y'=5y,\ y(0)=2$ problemini çözün ve çözüm aralığını belirtin.

### Soru 2

$y'=3x^2,\ y(-1)=4$ problemini çözün.

### Soru 3

$y'=-y^2,\ y(0)=1$ problemini çözün; tekillik noktasını ve en geniş çözüm
aralığını bulun.

### Soru 4

$y=1/(x-C)$ çözüm ailesinde $y(2)=-1$ koşulunu sağlayan üyeyi bulun.

### Soru 5

$y=\ln|x-C|$ ve $y(3)=0$ verildiğinde olası $C$ değerlerini ve başlangıç
noktasını içeren çözüm aralıklarını tartışın.

### Soru 6

$y=1/(x^2-4)$ fonksiyonu bir diferansiyel denklemin çözümü olsun. $x_0=0$,
$x_0=3$ ve $x_0=-5$ başlangıç noktaları için en geniş aralıkları ayrı ayrı
yazın.

### Soru 7

$y=\sqrt{4-x^2}$ adayının tanım kümesini bulun. Orijinal denklemde
$y'= -x/y$ bulunuyorsa uç noktaların çözüm aralığına girip girmediğini
inceleyin.

### Soru 8

Bir başlangıç koşulunun çözüm ailesinden sabiti tek olarak belirlemediği bir
örnek kurun ve bunun nedenini açıklayın.

## Çalışmanızı Kontrol Etme

> Çözümümü sabitin belirlenmesi, tekilliklerin bulunması ve başlangıç noktasını
> içeren en geniş bağlı aralığın seçilmesi açısından incele. Kök veya logaritma
> sınırlarında yalnız formülü değil orijinal denklemi de kontrol et. Hata varsa
> doğru aralığı hemen verme; kaçırdığım sınır noktasını belirt.
