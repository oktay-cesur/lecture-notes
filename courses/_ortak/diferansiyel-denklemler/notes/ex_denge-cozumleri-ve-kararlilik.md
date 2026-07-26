---
title: "Denge Çözümleri ve Kararlılık: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
description: "Otonom denklemlerde denge çözümlerini, işaret çizelgesini ve kararlılığı belirleme pratiği."
execute:
  echo: false
---

# Denge Çözümleri ve Kararlılık: Alıştırmalar

Otonom $y'=f(y)$ denkleminde $f(y_*)=0$ sağlayan sabit $y=y_*$ bir denge
çözümüdür. Denge noktalarının arasındaki aralıklarda $f(y)$'nin işareti,
çözümlerin yukarı mı aşağı mı hareket ettiğini gösterir.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Çarpanlarına ayrılmış beş otonom denklem üret. Denge noktalarını ve işaret
> çizelgesini benim kurmamı bekle. Kararlılık kararım yanlışsa çözümü söyleme;
> yalnız hangi aralıktaki okun yönünü ters okuduğumu belirt.
:::

## Denge Noktalarını Bulma

### Örnek 1: Lojistik Yapı

$$
y'=y(3-y)
$$

için $f(y)=0$ denklemi $y=0$ ve $y=3$ dengelerini verir.

- $y<0$: $f(y)<0$.
- $0<y<3$: $f(y)>0$.
- $y>3$: $f(y)<0$.

Oklar $y=3$'e iki taraftan yaklaştığı için $y=3$ kararlı; $y=0$'dan iki
tarafta uzaklaştığı için $y=0$ kararsızdır.

## İşaret Çizelgesi

### Örnek 2: Üç Denge

$$
y'=y-y^3=y(1-y)(1+y).
$$

Dengeler $-1$, $0$ ve $1$'dir. Test değerleriyle işaretler sırasıyla

$$
(+),\quad(-),\quad(+),\quad(-)
$$

olur. Buna göre $y=-1$ ve $y=1$ kararlı, $y=0$ kararsızdır.

### Örnek 3: Yarı Kararlı Denge

$$
y'=(y-1)^2.
$$

$y=1$ tek dengedir. Her iki tarafta $f(y)>0$ olduğundan oklar yukarı yönlüdür:
alttan dengeye yaklaşılır, üstten uzaklaşılır. Denge bir taraftan çekici,
diğer taraftan iticidir; yarı kararlıdır.

## Hata Avı

### Örnek 4: Yalnız Kök Çokluğuna Bakmak

Tek katlı kökün daima kararlı olduğu söylenemez. Kararlılık, $f(y)$ işaretinin
kökün iki yanında nasıl değiştiğine bağlıdır.

### Örnek 5: $f'(y_*)=0$ Durumu

Türev testi $f'(y_*)<0$ için kararlı, $f'(y_*)>0$ için kararsız sonuç verir.
$f'(y_*)=0$ olduğunda karar vermez; işaret çizelgesine dönmek gerekir.

## Adım Adım İşlem Pratiği

### Örnek 6

$$
y'=(y-1)(y-3)
$$

için işaretler $+$, $-$, $+$ olur. $y=1$ kararlı, $y=3$ kararsızdır.

### Örnek 7

$$
y'=-y(y-2)
$$

için işaretler $-$, $+$, $-$ olur. $y=0$ kararsız, $y=2$ kararlıdır.

## Karma Çalışma Soruları

### Soru 1

$y'=y(4-y)$ denkleminin dengelerini ve kararlılıklarını bulun.

### Soru 2

$y'=(y+2)(y-1)$ için faz çizgisini kurun.

### Soru 3

$y'=-y(y-1)(y-3)$ denkleminin bütün dengelerini sınıflandırın.

### Soru 4

$y'=(y+1)^2(y-2)$ denkleminde yarı kararlı bir denge olup olmadığını inceleyin.

### Soru 5

$y'=1-y^2$ için $y(0)=0$, $y(0)=2$ ve $y(0)=-2$ çözümlerinin uzun dönem
davranışlarını formül bulmadan açıklayın.

### Soru 6

$y'=y^2$ denkleminde $y=0$ dengesinin iki taraftaki davranışını inceleyin.

### Soru 7

$f'(y_*)$ testini $y'=y(3-y)$ denklemine uygulayıp işaret çizelgesiyle
karşılaştırın.

### Soru 8

Bir kararlı, bir kararsız ve bir yarı kararlı denge taşıyan çarpanlara ayrılmış
bir $f(y)$ örneği kurun.

## Çalışmanızı Kontrol Etme

> Çözümümü denge kökleri, kökler arasındaki test değerleri, ok yönleri ve
> kararlılık kararı açısından incele. Türev testinin kararsız kaldığı
> durumlarda işaret çizelgesini kullanıp kullanmadığımı kontrol et.
