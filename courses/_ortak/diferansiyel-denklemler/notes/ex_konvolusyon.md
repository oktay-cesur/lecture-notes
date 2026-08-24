---
title: "Konvolüsyon: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — Kavram ve Yöntem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-24
description: "Konvolüsyon integralini kurma, Laplace uzayındaki çarpımı okuma ve kolay fonksiyon çiftleriyle hesabı tamamlama pratiği."
execute:
  echo: false
---

# Konvolüsyon: Alıştırmalar

Laplace uzayındaki $F(s)G(s)$ çarpımının özgün taraftaki karşılığı fonksiyon
çarpımı değil, konvolüsyondur:

$$
(f*g)(t)=\int_0^t f(\tau)g(t-\tau)\,d\tau.
$$

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Konvolüsyon integralini önce kendiniz kurun. Yapay zekâdan integrali
> hesaplamasını değil, sınırları ve iki argümanın toplamının $t$ olup
> olmadığını kontrol etmesini isteyin.
:::

## Tanıma ve Karar

### Örnek 1: Çarpımın Karşılığı

$F(s)G(s)$ ifadesi $(f*g)(t)$'ye karşılık gelir. Genel olarak $f(t)g(t)$'ye
karşılık gelmez.

### Örnek 2: Doğru İntegral

Doğru kurulum

$$
\int_0^t f(\tau)g(t-\tau)\,d\tau
$$

biçimindedir. $f(\tau)g(\tau)$ yazılırsa argümanların toplamı $t$ olmaz.

### Örnek 3: Değişme Özelliği

$f*g=g*f$ olduğundan iki eşdeğer integralden hesabı kısa olan seçilebilir.
Bu özellik çarpmanın $FG=GF$ değişme özelliğinden gelir.

### Örnek 4: Yöntem Seçimi

$1/[(s-1)(s-2)]$ için kısmi kesir daha kısadır. $G(s)/(s^2+1)$ gibi simgesel
bir çarpımda kısmi kesir kurulamaz; konvolüsyon doğal seçimdir.

## Mekanizmayı Kurma

### Örnek 5: İki Basit Fonksiyon

$f(t)=1$ ve $g(t)=t$ için

$$
(f*g)(t)=\int_0^t 1\cdot(t-\tau)\,d\tau
$$

yazılır. Bu aşamada hedef yalnız integralin doğru kurulmasıdır.

### Örnek 6: Çarpımdan İntegrale

$$
\frac1s\cdot\frac1{s+1}
$$

ifadesinde $f(t)=1$, $g(t)=e^{-t}$ seçilebilir. Ters dönüşüm

$$
\int_0^t e^{-(t-\tau)}\,d\tau
$$

olarak kurulur.

## Temel Tam Çözümler

### Örnek 7: $1*t$ Konvolüsyonu

$$
(1*t)(t)=\int_0^t(t-\tau)\,d\tau
=\left[t\tau-\frac{\tau^2}{2}\right]_0^t
=\boxed{\frac{t^2}{2}}.
$$

Dönüşümle kontrol edelim: $(1/s)(1/s^2)=1/s^3$ ve bunun ters dönüşümü
$t^2/2$'dir.

### Örnek 8: Üstel ile Sabit

$$
(e^{-t}*1)(t)=\int_0^t e^{-\tau}\,d\tau
=\boxed{1-e^{-t}}.
$$

Değişme özelliğiyle $\int_0^t e^{-(t-\tau)}d\tau$ da aynı sonucu verir.
Dönüşüm tarafında karşılık $1/[s(s+1)]$'dir.

## Hata Avı

### Örnek 9: İlk Hata Nerede?

Bir öğrenci $(f*1)(t)=f(t)$ yazıyor. İlk hata, sabit $1$ fonksiyonunu
konvolüsyonun birim elemanı sanmaktır. Gerçekte

$$
(f*1)(t)=\int_0^t f(\tau)\,d\tau.
$$

Konvolüsyonun birim elemanı Dirac dürtüsüdür.

## Karşılaştırma

### Örnek 10: Konvolüsyon mu, Çarpım mı?

$f(t)=g(t)=1$ için noktasal çarpım $fg=1$'dir. Konvolüsyon ise
$(f*g)(t)=\int_0^t1\,d\tau=t$ olur. Bu tek örnek iki işlemin aynı olmadığını
gösterir.

## Hafif Karma Örnek

### Örnek 11: Kısmi Kesirsiz Ters Dönüşüm

$$
\mathcal L^{-1}\left\{\frac1{s(s^2+1)}\right\}
$$

$1/s\leftrightarrow1$ ve $1/(s^2+1)\leftrightarrow\sin t$ seçelim:

$$
\int_0^t\sin(t-\tau)\,d\tau
=\int_0^t\sin u\,du
=\boxed{1-\cos t}.
$$

İntegral temel bir trigonometrik kalıpla tek adımda tamamlanır.

## Karma Çalışma Soruları

### Soru 1

$f(t)=t$ ve $g(t)=e^t$ için $(f*g)(t)$ integralini doğru argümanlarla kurun;
integrali hesaplamayın.

### Soru 2

$(1*t^2)(t)$ konvolüsyonunu doğrudan integralden hesaplayın.

### Soru 3

$(t*t)(t)$ konvolüsyonunu bulun ve Laplace dönüşümüyle kontrol edin.

### Soru 4

$$
\mathcal L^{-1}\left\{\frac{1}{s^2(s+2)}\right\}
$$

ifadesini konvolüsyon teoremiyle bulun.

### Soru 5

$f*g=g*f$ eşitliğini konvolüsyon integralinde uygun değişken dönüşümünü
kullanarak gösterin.

### Soru 6

Bir öğrenci

$$
(f*g)(t)=\int_0^t f(t-\tau)g(t-\tau)\,d\tau
$$

yazıyor. Kurulumdaki hatayı açıklayın ve doğru integrali yazın.

### Soru 7

$a\ne b$ olmak üzere $(e^{at}*e^{bt})(t)$ konvolüsyonunu hesaplayın. $a=b$
durumunda sonucun nasıl değiştiğini ayrıca bulun.

### Soru 8

$$
F(s)=\frac{1}{s^2+4},
\q\quad
G(s)=\frac{s}{s^2+4}
$$

için $\mathcal L^{-1}\{F(s)G(s)\}$ ifadesini bir konvolüsyon integrali olarak
yazın ve hesaplayın.

## Çalışmanızı Kontrol Etme

> Çözümümü konvolüsyon ile noktasal çarpımı ayırma, integral sınırları,
> argümanların toplamının $t$ olması ve değişme özelliğini doğru kullanma
> açısından incele. Hata varsa integrali hesaplamadan ilk yanlış kurulumu
> belirt.
