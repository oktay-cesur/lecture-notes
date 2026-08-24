---
title: "Yüksek Mertebeli Sabit Katsayılı Denklemler: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — Kavram ve Yöntem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-24
description: "Yüksek mertebeli sabit katsayılı homojen denklemlerde karakteristik polinomu kurma, kök katlılıklarını sayma ve genel çözümü yazma pratiği."
execute:
  echo: false
---

# Yüksek Mertebeli Sabit Katsayılı Denklemler: Alıştırmalar

Sabit katsayılı homojen denklemde $y=e^{rx}$ adayı mertebeden bağımsız olarak
çalışır. Karakteristik polinomun kökleri, katlılıklarıyla birlikte denklemin
mertebesi kadar çözüm üretmelidir.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Önce kök türlerini ve çözümde bulunması gereken terimleri kendiniz yazın.
> Sonra yapay zekâdan yalnız terim sayısını ve katlılıkları kontrol etmesini;
> eksik terim varsa hangisi olduğunu söylemeden kök sözlüğüne dönmenizi
> istemesini isteyin.
:::

## Tanıma ve Karar

### Örnek 1: Yöntem Uygun mu?

$$
y'''-2y''+y'=0
$$

Denklem üçüncü mertebeden, lineer, homojen ve sabit katsayılıdır. Bu nedenle
$y=e^{rx}$ adayı uygundur; karakteristik polinom üçüncü dereceden olmalıdır.

### Örnek 2: Kaç Terim Gerekir?

$$
p(r)=(r-1)^2(r+2)
$$

$r=1$ çift, $r=-2$ basit köktür. Çözümde
$e^x$, $xe^x$ ve $e^{-2x}$ olmak üzere üç bağımsız terim bulunur.

### Örnek 3: Sıfır ve Kompleks Kökler

$$
p(r)=r(r^2+4)
$$

Kökler $0$ ve $pm2i$'dir. Karşılık gelen reel çözümler
$1$, $\cos2x$ ve $\sin2x$ olur.

### Örnek 4: Sayma Kontrolü

Dördüncü mertebeden bir denklemin çözümünde yalnız üç bağımsız fonksiyon
bulunduysa çalışma tamamlanmamıştır. Ya bir kök atlanmış ya da bir kökün
katlılığı eksik işlenmiştir.

## Mekanizmayı Kurma

### Örnek 5: Karakteristik Polinom

$$
2y^{(4)}-3y''+5y'-y=0
$$

Türev mertebeleri doğrudan $r$ kuvvetlerine gider. Eksik $y'''$ teriminin
katsayısı sıfırdır:

$$
2r^4+0r^3-3r^2+5r-1=0.
$$

Bu soru kök bulmayı değil, polinomu eksiksiz kurmayı ölçer.

### Örnek 6: Kök Sözlüğünü Uygulama

$$
p(r)=r^2(r+1)(r^2+4)
$$

Kökleri çözmeden doğrudan okuyabiliriz: $0$ çift, $-1$ basit, $pm2i$
basittir. Çözüm kalıbı

$$
y=C_1+C_2x+C_3e^{-x}+C_4\cos2x+C_5\sin2x
$$

olur. Beş terim, polinomun beşinci derecesiyle uyumludur.

## Temel Tam Çözümler

### Örnek 7: Üç Ayrık Reel Kök

$$
y'''-y''-4y'+4y=0
$$

**Sınıflandırma.** Denklem üçüncü mertebeden, homojen ve sabit katsayılıdır.

**Kurulum.** Karakteristik denklem

$$
r^3-r^2-4r+4=0
$$

olur. Gruplayarak çarpanlara ayıralım:

$$
r^2(r-1)-4(r-1)=(r-1)(r-2)(r+2).
$$

Kökler $1$, $2$ ve $-2$ olduğundan

$$
\boxed{y=C_1e^x+C_2e^{2x}+C_3e^{-2x}}.
$$

Her terim için $p(r)=0$ olduğundan yerine koyma doğrulaması sağlanır.

### Örnek 8: İki Çift Kök

$$
y^{(4)}-2y''+y=0
$$

Karakteristik polinom

$$
r^4-2r^2+1=(r^2-1)^2=(r-1)^2(r+1)^2
$$

biçimindedir. Her kök çift olduğundan her üstel için bir de $x$ çarpanlı
çözüm gerekir:

$$
\boxed{y=(C_1+C_2x)e^x+(C_3+C_4x)e^{-x}}.
$$

Dört bağımsız terim, dördüncü mertebeyi karşılar.

## Hata Avı

### Örnek 9: İlk Hata Nerede?

Bir öğrenci

$$
p(r)=(r-2)^3(r+1)
$$

için $y=C_1e^{2x}+C_2xe^{2x}+C_3e^{-x}$ yazıyor. İlk hata, üç katlı
$r=2$ kökünün yalnız iki çözümle temsil edilmesidir. Eksik terim
$x^2e^{2x}$'tir; genel çözümde toplam dört sabit bulunmalıdır.

## Karşılaştırma

### Örnek 10: İkinci ve Dördüncü Mertebe

$y''-y=0$ ile $y^{(4)}-2y''+y=0$ aynı $r=\pm1$ köklerini taşır. İlk
polinomda kökler basit olduğu için $e^x,e^{-x}$ yeterlidir. İkinci polinomda
ikisi de çift katlıdır; $xe^x$ ve $xe^{-x}$ eklenir. Fark yöntemde değil,
köklerin katlılığındadır.

## Hafif Karma Örnek

### Örnek 11: Başlangıç Koşulları

$$
y'''-y'=0,\q\quad y(0)=1,\quad y'(0)=0,\quad y''(0)=2
$$

Karakteristik denklem $r(r-1)(r+1)=0$ ve genel çözüm

$$
y=C_1+C_2e^x+C_3e^{-x}
$$

olur. Koşullar

$$
C_1+C_2+C_3=1,\q\quad C_2-C_3=0,\q\quad C_2+C_3=2
$$

verir. Buradan $C_2=C_3=1$, $C_1=-1$ ve

$$
\boxed{y=-1+e^x+e^{-x}}
$$

bulunur. Üç koşulun üç sabiti belirlemesi mertebe kontrolünü de doğrular.

## Karma Çalışma Soruları

### Soru 1

$$
y'''-3y''+2y'=0
$$

denkleminin karakteristik polinomunu çarpanlara ayırın ve genel çözümünü
yazın.

### Soru 2

$$
y^{(4)}-2y''+y=0
$$

denklemini kök katlılıklarını açıkça göstererek çözün.

### Soru 3

Kökleri $0$ (iki katlı), $2$ ve $-1$ olan dördüncü mertebeden sabit katsayılı
homojen bir diferansiyel denklem kurun ve genel çözümünü yazın.

### Soru 4

$$
y^{(4)}+5y''+4y=0
$$

denkleminin reel genel çözümünü bulun.

### Soru 5

$$
y'''-2y''+y'=0,
\q\quad
y(0)=1,\quad y'(0)=0,\quad y''(0)=2
$$

başlangıç değer problemini çözün.

### Soru 6

Bir öğrencinin $r^4-4r^3=0$ polinomundan yalnız $r=4$ kökünü aldığı çözümü
inceleyin. Kayıp kökü, katlılığını ve eksik çözüm terimlerini belirleyin.

### Soru 7

$$
y=C_1+C_2x+C_3e^{-x}+C_4xe^{-x}
$$

genel çözüm ailesine karşılık gelen en düşük dereceli karakteristik polinomu
ve diferansiyel denklemi bulun.

### Soru 8

Beşinci mertebeden bir denklemin kökleri $1$ (üç katlı) ve $-2$ (iki katlı)
olsun. Genel çözümü yazın ve bağımsız terim sayısını mertebeyle karşılaştırın.

## Çalışmanızı Kontrol Etme

> Çözümümü karakteristik polinomun eksik kuvvetleri, köklerin katlılıkları,
> kompleks çiftlerin reel karşılıkları ve terim sayısının mertebeyle uyumu
> açısından incele. Doğru çözümü yazmadan ilk eksik kökü veya terimi belirt.
