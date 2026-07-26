---
title: "İntegrasyon Çarpanı ile Tamlaştırma: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
description: "Tam olmayan bir denklemin yalnız x'e veya yalnız y'ye bağlı integrasyon çarpanını test edip çözme pratiği."
execute:
  echo: false
---

# İntegrasyon Çarpanı ile Tamlaştırma: Alıştırmalar

Tam olmayan her denklem için kolay bir integrasyon çarpanı bulunmaz. Ancak

$$
\frac{M_y-N_x}{N}
$$

yalnız $x$'in fonksiyonuysa $\mu(x)$; 

$$
\frac{N_x-M_y}{M}
$$

yalnız $y$'nin fonksiyonuysa $\mu(y)$ aranabilir. Çarpımdan sonra tamlık testi
yeniden yapılmalıdır.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Yalnız x'e veya yalnız y'ye bağlı integrasyon çarpanı bulunan altı denklem
> üret. Önce iki oranı benim hesaplamamı bekle. Uygun çarpanı bulduktan sonra
> yeni M ve N ile tamlık testini tekrar yapmamı iste.
:::

## $\mu(x)$ Testi

### Örnek 1

$$
2y\,dx+(x-y)\,dy=0.
$$

$M=2y$, $N=x-y$:

$$
M_y=2,\qquad N_x=1.
$$

$$
\frac{M_y-N_x}{N}=\frac{1}{x-y}
$$

yalnız $x$'e bağlı değildir. Dolayısıyla bu test $\mu(x)$ vermez.

## $\mu(y)$ Testi

### Örnek 2

Aynı denklemde

$$
\frac{N_x-M_y}{M}=\frac{1-2}{2y}=-\frac1{2y}
$$

yalnız $y$'ye bağlıdır:

$$
\mu(y)=e^{\int-1/(2y)\,dy}=|y|^{-1/2}.
$$

Sabit işaretli bir bölgede, örneğin $y>0$ için
$\mu(y)=y^{-1/2}$ seçilebilir. Çarpımdan sonra

$$
2\sqrt y\,dx+\left(\frac{x}{\sqrt y}-\sqrt y\right)\,dy=0.
$$

Yeni denklem tamdır. Potansiyel:

$$
F=\int2\sqrt y\,dx=2x\sqrt y+g(y).
$$

$$
F_y=\frac{x}{\sqrt y}+g'(y)
=\frac{x}{\sqrt y}-\sqrt y
$$

eşitliğinden $g(y)=-\tfrac23y^{3/2}$:

$$
\boxed{2x\sqrt y-\frac23y^{3/2}=C},\qquad y>0.
$$

## Tamlaştırma ve Çözüm

### Örnek 3: Yeni Katsayıları Yazma

Çarpımdan sonra

$$
\widetilde M=\mu M,\qquad \widetilde N=\mu N
$$

olarak adlandırmak işlemi düzenler. Potansiyel fonksiyon yalnız
$\widetilde M\,dx+\widetilde N\,dy=0$ denklemi için kurulur.

## Hata Avı

### Örnek 4: Oran Değişken Taşıyor

Test oranında hem $x$ hem $y$ kalıyorsa yöntem başarısızdır; oranı zorla
yalnız bir değişkenin fonksiyonuymuş gibi integralleyemeyiz.

### Örnek 5: Eski Denklemle Devam Etmek

İntegrasyon çarpanı bulunduktan sonra potansiyel, eski $M$ ve $N$ ile değil,
çarpılmış katsayılarla hesaplanır.

### Örnek 6: Bölge Koşulunu Atlamak

$\mu(y)=y^{-1/2}$ gibi bir çarpan $y=0$'da tanımsızdır ve gerçek değerli
yorumda $y>0$ gibi bir bölge seçimi gerektirir.

## Adım Adım İşlem Pratiği

### Örnek 7

$$
(2xy+y)\,dx+x^2\,dy=0
$$

için $M_y=2x+1$, $N_x=2x$ ve

$$
\frac{M_y-N_x}{N}=\frac1{x^2}.
$$

Bu yalnız $x$'e bağlıdır:

$$
\mu(x)=e^{\int x^{-2}\,dx}=e^{-1/x},\qquad x\neq0.
$$

Çarpımdan sonra

$$
\widetilde M=y(2x+1)e^{-1/x},
\qquad
\widetilde N=x^2e^{-1/x}.
$$

Potansiyeli $\widetilde N$ üzerinden kurmak kısadır:

$$
F=\int\widetilde N\,dy=x^2e^{-1/x}y+h(x).
$$

$F_x=\widetilde M$ karşılaştırması $h'(x)=0$ verir:

$$
\boxed{x^2e^{-1/x}y=C}.
$$

Çözüm $x=0$'ı geçmeyen bağlı aralıklarda ele alınır.

## Karma Çalışma Soruları

### Soru 1

$(xy+y)\,dx+x\,dy=0$ denklemi için $\mu(x)$ veya $\mu(y)$ testlerini uygulayın.

### Soru 2

$(3xy+y^2)\,dx+x^2\,dy=0$ denkleminin tam olmadığını gösterip uygun tek
değişkenli çarpan olup olmadığını inceleyin.

### Soru 3

$(y+2xy)\,dx+x\,dy=0$ denklemi için test oranlarını hesaplayın.

### Soru 4

Bir $\mu(x)$ bulunduğunda $(\mu M)_y=(\mu N)_x$ eşitliğini cebirsel olarak
doğrulayın.

### Soru 5

Bir $\mu(y)$ örneğinde çarpanın tanımsız olduğu doğruları belirleyin.

### Soru 6

Her iki test oranının da iki değişkene bağlı kaldığı bir denklem örneği verin.
Bu sonucun ne söylediğini açıklayın.

### Soru 7

İntegrasyon çarpanının sıfırdan farklı sabit katlarının neden eşdeğer olduğunu
gösterin.

### Soru 8

Tamlaştırdığınız bir denklemi potansiyel fonksiyonla çözün ve toplam
diferansiyelle doğrulayın.

## Çalışmanızı Kontrol Etme

> Çözümümü oran formüllerinin işareti, oranın gerçekten tek değişkene bağlı
> olması, integrasyon çarpanı, çarpımdan sonra tamlık testi, bölge koşulu ve
> yeni katsayılarla potansiyel kurma açısından incele. Hata varsa doğru çarpanı
> vermeden yanlış oranı belirt.
