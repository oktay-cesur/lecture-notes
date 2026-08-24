---
title: "Laplace ile İntegral Denklemler: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-23
description: "Konvolüsyon içeren Volterra integral ve integro-diferansiyel denklemlerini Laplace dönüşümüyle cebirselleştirme, çözme ve doğrulama pratiği."
execute:
  echo: false
---

# Laplace ile İntegral Denklemler: Alıştırmalar

Üst sınırı $t$ olan

$$
\int_0^t k(t-\tau)y(\tau)\,d\tau
$$

integrali, $k$ ile $y$ fonksiyonlarının konvolüsyonudur:

$$
(k*y)(t)=\int_0^t k(t-\tau)y(\tau)\,d\tau.
$$

$K(s)=\mathcal L\{k(t)\}$ ve $Y(s)=\mathcal L\{y(t)\}$ olmak üzere

$$
\mathcal L\{k*y\}=K(s)Y(s).
$$

İntegral denklem böylece $Y(s)$ için cebirsel bir denkleme dönüşür.
$Y(s)$ yalnız bırakılır, gerekirse kısmi kesirlere ayrılır ve ters Laplace
dönüşümü alınır.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> İntegrali önce kendiniz konvolüsyon biçiminde yazın. Yapay zekâdan yalnız
> çekirdeğin $k(t-\tau)$ biçiminde doğru okunup okunmadığını, dönüşüm
> denklemindeki çarpanı ve kısmi kesir hesabını denetlemesini isteyin.
:::

## Çözümlü Örnekler

### Örnek 1: Sabit Çekirdek

$$
y(t)=1+\int_0^t y(\tau)\,d\tau.
$$

**Tanı.** İntegral

$$
\int_0^t 1\cdot y(\tau)\,d\tau=(1*y)(t)
$$

biçimindedir. Sabit çekirdeğin dönüşümü $1/s$'dir.

**Laplace dönüşümü.**

$$
Y(s)=\frac1s+\frac1sY(s).
$$

**Cebirsel çözüm.**

$$
\left(1-\frac1s\right)Y=\frac1s,
$$

$$
Y(s)=\frac1{s-1}.
$$

**Ters dönüşüm.**

$$
\boxed{y(t)=e^t}.
$$

**Kontrol.**

$$
1+\int_0^t e^\tau\,d\tau
=1+(e^t-1)
=e^t.
$$

### Örnek 2: Doğrusal Çekirdek

$$
y(t)=t+\int_0^t(t-\tau)y(\tau)\,d\tau.
$$

**Tanı.** Çekirdek $k(t)=t$ olduğundan integral $(t*y)(t)$ biçimindedir.

$$
K(s)=\mathcal L\{t\}=\frac1{s^2}.
$$

**Laplace dönüşümü.**

$$
Y(s)=\frac1{s^2}+\frac1{s^2}Y(s).
$$

**Cebirsel çözüm.**

$$
(s^2-1)Y=1,
\qquad
Y(s)=\frac1{s^2-1}.
$$

**Ters dönüşüm.**

$$
\frac1{s^2-1}
=\frac12\left(\frac1{s-1}-\frac1{s+1}\right),
$$

$$
\boxed{y(t)=\sinh t}.
$$

**Kontrol.** Denklem iki kez türetilirse $y''=y$ elde edilir. Özgün
denklemden $y(0)=0$ ve $y'(0)=1$ çıkar. $\sinh t$ bu diferansiyel denklemi
ve iki başlangıç değerini sağlar.

### Örnek 3: Üstel Çekirdek

$$
y(t)=e^{-t}+\int_0^t e^{-(t-\tau)}y(\tau)\,d\tau.
$$

**Tanı.** İntegral $(e^{-t}*y)(t)$ biçimindedir ve çekirdeğin dönüşümü
$1/(s+1)$'dir.

**Laplace dönüşümü.**

$$
Y(s)=\frac1{s+1}+\frac1{s+1}Y(s).
$$

**Cebirsel çözüm.**

$$
(s+1)Y=1+Y,
\qquad
sY=1,
$$

$$
Y(s)=\frac1s.
$$

**Ters dönüşüm.**

$$
\boxed{y(t)=1}.
$$

**Kontrol.**

$$
e^{-t}+\int_0^t e^{-(t-\tau)}\,d\tau
=e^{-t}+1-e^{-t}
=1.
$$

### Örnek 4: İntegral İçeren Başlangıç Değer Problemi

$$
y'(t)+2y(t)
=1+\int_0^t e^{-2(t-\tau)}y(\tau)\,d\tau,
\qquad
y(0)=0.
$$

**Tanı.**

$$
\int_0^t e^{-2(t-\tau)}y(\tau)\,d\tau
=(e^{-2t}*y)(t).
$$

**Laplace dönüşümü.**

$$
sY+2Y
=\frac1s+\frac1{s+2}Y.
$$

Başlangıç değeri sıfır olduğu için türev dönüşümünde ek sabit kalmaz.

**Cebirsel çözüm.**

$$
\left[(s+2)-\frac1{s+2}\right]Y=\frac1s,
$$

$$
Y(s)
=\frac{s+2}{s\bigl((s+2)^2-1\bigr)}
=\frac{s+2}{s(s+1)(s+3)}.
$$

**Kısmi kesirler.**

$$
Y(s)
=\frac{2}{3s}
-\frac{1}{2(s+1)}
-\frac{1}{6(s+3)}.
$$

**Ters dönüşüm.**

$$
\boxed{
y(t)=\frac23-\frac12e^{-t}-\frac16e^{-3t}
}.
$$

Başlangıç kontrolü

$$
y(0)=\frac23-\frac12-\frac16=0
$$

verir. Bulunan fonksiyonun türevi ve konvolüsyon integrali özgün denklemde
yerine yazıldığında iki taraf eşit çıkar.

### Örnek 5: Önce Cebirsel Denklem

$$
y(t)+2\int_0^t y(\tau)\,d\tau=t.
$$

**Laplace dönüşümü.**

$$
Y+\frac{2}{s}Y=\frac1{s^2}.
$$

**Cebirsel çözüm.**

$$
Y(s)=\frac1{s(s+2)}
=\frac12\left(\frac1s-\frac1{s+2}\right).
$$

**Ters dönüşüm.**

$$
\boxed{y(t)=\frac12(1-e^{-2t})}.
$$

**Kontrol.** $y(0)=0$'dır. Denklem türetilirse $y'+2y=1$ elde edilir;
bulunan fonksiyon bu başlangıç değer problemini sağlar.

## Hata Avı

### Örnek 6: Noktasal Çarpım Sanmak

$$
\int_0^t e^{-(t-\tau)}y(\tau)\,d\tau
$$

ifadesinin dönüşümü $\mathcal L\{e^{-t}y(t)\}$ değildir. İntegral bir
konvolüsyondur ve dönüşümü $Y(s)/(s+1)$ olur.

### Örnek 7: Türevde Başlangıç Değerini Atlamak

$y(0)=2$ ise

$$
\mathcal L\{y'\}=sY-2
$$

yazılır. $sY$ yazıp başlangıç değerini atlamak, elde edilen cebirsel
denklemi ve çözümün tamamını değiştirir.

### Örnek 8: Çekirdeği Yanlış Okumak

$$
\int_0^t e^{-2\tau}y(t-\tau)\,d\tau
$$

ile

$$
\int_0^t e^{-2(t-\tau)}y(\tau)\,d\tau
$$

aynı konvolüsyonun değişme özelliğiyle yazılmış iki biçimidir. Buna karşılık
$e^{-2t}y(\tau)$ yazılırsa çekirdek artık doğru kaydırmayı taşımaz.

## Kurulum Soruları

Aşağıdaki sorularda yalnız konvolüsyon biçimini ve $Y(s)$ için oluşan
cebirsel denklemi yazın. $Y(s)$'yi çözmeyin.

### Soru 1

$$
y(t)=t^2+\int_0^t(t-\tau)y(\tau)\,d\tau.
$$

### Soru 2

$$
y(t)=\cos t+\int_0^t\sin(t-\tau)y(\tau)\,d\tau.
$$

### Soru 3

$$
y'(t)+y(t)
=e^{-t}+\int_0^t y(\tau)\,d\tau,
\qquad
y(0)=1.
$$

### Soru 4

$$
y''(t)+y(t)
=1+\int_0^t e^{-(t-\tau)}y(\tau)\,d\tau,
\qquad
y(0)=0,
\qquad
y'(0)=2.
$$

## Tam Çözüm Soruları

### Soru 5

$$
y(t)=2+\int_0^t y(\tau)\,d\tau.
$$

Laplace dönüşümüyle çözün ve sonucu integral denkleminde doğrulayın.

### Soru 6

$$
y(t)=\cos t+\int_0^t\sin(t-\tau)y(\tau)\,d\tau.
$$

Laplace dönüşümüyle çözün.

### Soru 7

$$
y(t)+\int_0^t y(\tau)\,d\tau=t.
$$

Laplace dönüşümüyle çözün ve türev alarak kontrol edin.

### Soru 8

$$
y(t)=e^{-2t}
+\int_0^t e^{-2(t-\tau)}y(\tau)\,d\tau.
$$

Laplace dönüşümüyle çözün ve sonucu yerine koyarak doğrulayın.

### Soru 9

$$
y'(t)+3y(t)
=1+\int_0^t e^{-3(t-\tau)}y(\tau)\,d\tau,
\qquad
y(0)=0.
$$

Uçtan uca çözün.

### Soru 10

$$
y'(t)+y(t)
=t+\int_0^t(t-\tau)y(\tau)\,d\tau,
\qquad
y(0)=0.
$$

Laplace dönüşümüyle çözün.

### Soru 11

$$
y(t)-2\int_0^t e^{-(t-\tau)}y(\tau)\,d\tau=e^{-t}.
$$

$Y(s)$'yi bulun, ters dönüşümü alın ve çözümün tanımlı olduğu aralığı
belirtin.

### Soru 12

Kendi seçtiğiniz basit bir çekirdek $k(t)$ ve sağ taraf $f(t)$ ile

$$
y=f+k*y
$$

biçiminde bir integral denklem kurun. Laplace dönüşümüyle çözülebilmesi için
$F(s)$ ve $K(s)$ ifadelerinin hangi özelliklere sahip olması gerektiğini
çözümünüz üzerinden açıklayın.

## Çalışmanızı Kontrol Etme

> Çözümümü integralin konvolüsyon olarak yazılması, çekirdeğin doğru
> dönüşümü, türevlerde başlangıç değerleri, $Y(s)$ için cebirsel düzenleme,
> kısmi kesirler, ters dönüşüm ve özgün integral denkleminde doğrulama
> açısından incele. Hata varsa sonucu vermeden ilk yanlış dönüşümü veya
> cebir adımını belirt.
