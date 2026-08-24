---
title: "Faz Portresi ve Kararlılık: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — Kavram ve Yöntem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-24
description: "Özdeğer işaretlerinden ve iz-determinant bilgilerinden faz portresi tipini, yönü ve kararlılığı az hesapla belirleme pratiği."
execute:
  echo: false
---

# Faz Portresi ve Kararlılık: Alıştırmalar

Faz portresi, bütün başlangıç durumlarının $x_1$–$x_2$ düzlemindeki
yörüngelerini gösterir. Tipi özdeğerler, yönleri özvektörler belirler.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Önce özdeğerlerin reel kısımlarından tip ve kararlılık kararınızı yazın.
> Yapay zekâdan yalnız ilk yanlış sınıflandırmayı göstermesini; faz portresini
> veya çözümü sizin yerinize üretmemesini isteyin.
:::

## Tanıma ve Karar

### Örnek 1: Kararlı Düğüm

$\lambda_1=-1$, $\lambda_2=-3$ ayrık reel ve negatiftir. Denge asimptotik
kararlı düğümdür; yörüngeler orijine yaklaşır.

### Örnek 2: Eyer

$\lambda_1=2$, $\lambda_2=-1$ zıt işaretlidir. Bir doğrultuda yaklaşma olsa
da diğer doğrultuda uzaklaşma vardır; denge eyer ve kararsızdır.

### Örnek 3: Sarmal

$\lambda=-2\pm3i$ için yörüngeler dönerek orijine yaklaşır. Reel kısım
negatif olduğundan içe sarmal ve asimptotik kararlıdır.

### Örnek 4: Merkez

$\lambda=\pm2i$ saf sanaldır. Yörüngeler kapalıdır; merkez kararlıdır fakat
orijine yaklaşmadığı için asimptotik kararlı değildir.

## Mekanizmayı Kurma

### Örnek 5: İz ve Determinant

İki boyutlu sistemde karakteristik denklem

$$
\lambda^2-T\lambda+D=0,\q\quad
T=\operatorname{tr}A,\quad D=\det A
$$

biçimindedir. $D<0$ ise köklerin çarpımı negatiftir ve sistem doğrudan
eyerdir.

### Örnek 6: Yönü Belirleme

Bir faz portresinin saat yönünde mi, ters yönde mi döndüğü yalnız
$\pm\beta$ işaretinden okunmaz. Örneğin $\mathbf{x}=[1,0]^T$ noktasında
$A\mathbf{x}$ hesaplanır; elde edilen vektör yörüngenin o noktadaki yönünü
gösterir.

## Temel Tam Çözümler

### Örnek 7: İz–Determinantla Düğüm

$$
A=\begin{bmatrix}-3&1\\1&-3\end{bmatrix}
$$

İz $T=-6$, determinant $D=8$ ve diskriminant
$T^2-4D=36-32=4>0$'dır. Kökler reel; $D>0$ ve $T<0$ olduğundan ikisi de
negatiftir. Sistem

$$
\boxed{\text{asimptotik kararlı düğümdür}.}
$$

Doğrulama için kökler $-2$ ve $-4$ bulunur.

### Örnek 8: İz–Determinantla Sarmal

$$
A=\begin{bmatrix}-1&-2\\2&-1\end{bmatrix}
$$

$T=-2$, $D=5$ ve $T^2-4D=-16<0$'dır. Kökler kompleks, reel kısımları
$T/2=-1$'dir. Bu nedenle sistem

$$
\boxed{\text{içe sarmal ve asimptotik kararlıdır}.}
$$

$(1,0)$ noktasında $A[1,0]^T=[-1,2]^T$ olduğundan başlangıç yönü yukarı ve
soladır.

## Hata Avı

### Örnek 9: İlk Hata Nerede?

Bir öğrenci iki negatif özdeğerin iki yönde de azalan koordinat verdiğini
düşünüp sistemi kararsız ilan ediyor. İlk hata, negatif özdeğerin üstel
$e^{\lambda t}$ bileşenini söndürdüğünü ters yorumlamaktır. İki negatif reel
özdeğer kararlı düğüm verir.

## Karşılaştırma

### Örnek 10: Düğüm ve Eyer

$(-1,-3)$ köklerinde bütün doğrultular sonunda orijine yaklaşır. $(1,-3)$
köklerinde yalnız negatif özdeğer doğrusu üzerinde başlayanlar yaklaşır;
genel yörüngeler pozitif özdeğer doğrultusunda uzaklaşır. Tek işaret değişimi
kararlı düğümü eyere dönüştürür.

## Hafif Karma Örnek

### Örnek 11: Üç Veriyi Sınıflandırma

1. $T=0$, $D=4$: diskriminant $-16$, kökler $\pm2i$; merkez.
2. $T=5$, $D=6$: kökler $2,3$; kararsız düğüm.
3. $T=-1$, $D=-2$: determinant negatif; eyer ve kararsız.

Burada hiçbir özvektör hesabı gerekmez; soru yalnız nitel karar ölçer.

## Karma Çalışma Soruları

### Soru 1

Özdeğerleri $-2$ ve $-5$ olan iki boyutlu bir sistemin denge tipini ve
kararlılığını belirleyin.

### Soru 2

Özdeğerleri $3$ ve $-1$ olan bir sistemde hangi başlangıç durumlarının
orijine yaklaşabileceğini özvektör doğrultuları üzerinden açıklayın.

### Soru 3

$T=-4$, $D=13$ verilen bir sistemin özdeğer türünü, faz portresi tipini ve
kararlılığını belirleyin.

### Soru 4

$T=0$, $D=9$ için dengeyi sınıflandırın. Kararlı olma ile asimptotik kararlı
olma ayrımını bu örnek üzerinde açıklayın.

### Soru 5

$$
A=\begin{bmatrix}2&0\\0&-3\end{bmatrix}
$$

matrisi için faz portresinin temel doğrultularını ve ok yönlerini belirleyin.

### Soru 6

$$
A=\begin{bmatrix}-1&-2\\2&-1\end{bmatrix}
$$

sistemini iz–determinant yöntemiyle sınıflandırın; $(1,0)$ noktasındaki vektör
alanını kullanarak dönme yönünü belirleyin.

### Soru 7

$D<0$ koşulunun neden her zaman eyer verdiğini karakteristik polinomun kök
işaretleri üzerinden açıklayın.

### Soru 8

Aşağıdaki üç veri çiftini sınıflandırın ve sonucu tek tabloda gösterin:

$$
(T,D)=(-6,8),\q\quad (4,8),\q\quad (1,-6).
$$

## Çalışmanızı Kontrol Etme

> Kararımı özdeğerlerin reel kısımları, iz ve determinant işaretleri,
> diskriminant, merkez ile asimptotik kararlılık ayrımı ve eyerin kaçış yönü
> açısından incele. Hata varsa doğru tipi vermeden ilk çelişen işareti belirt.
