---
title: "Özdeğerlerle Homojen Sistemler: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — Kavram ve Yöntem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-24
description: "İki boyutlu homojen sistemlerde özdeğer ve özvektörleri bulma, üstel vektör çözümleri kurma ve başlangıç koşulunu uygulama pratiği."
execute:
  echo: false
---

# Özdeğerlerle Homojen Sistemler: Alıştırmalar

$\mathbf{x}=e^{\lambda t}\mathbf{v}$ adayı, diferansiyel denklem sistemini
$A\mathbf{v}=\lambda\mathbf{v}$ özdeğer problemine dönüştürür. Özdeğer zaman
davranışını, özvektör faz düzlemindeki doğrultuyu belirler.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Karakteristik denklemi ve özvektör sistemini önce kendiniz kurun. Yapay
> zekâdan özdeğerleri vermesini değil, determinant işaretlerini ve bulduğunuz
> vektörün $A\mathbf{v}=\lambda\mathbf{v}$ eşitliğini kontrol etmesini
> isteyin.
:::

## Tanıma ve Karar

### Örnek 1: Adayın İki Parçası

$e^{\lambda t}$ zamanla büyüme ya da sönmeyi; sabit $\mathbf{v}$ ise yönü
taşır. Çözüm, özvektör doğrusu üzerinde kalır.

### Örnek 2: Özdeğer Koşulu

Sıfırdan farklı $\mathbf{v}$ için $(A-\lambda I)\mathbf{v}=0$ sisteminin
katsayı matrisi tersinir olmamalıdır. Bu nedenle
$\det(A-\lambda I)=0$ yazılır.

### Örnek 3: Köşegen Matris

$$
A=\begin{bmatrix}1&0\\0&-2\end{bmatrix}
$$

için özdeğerler köşegen elemanlarıdır. Çözümler $e^t[1,0]^T$ ve
$e^{-2t}[0,1]^T$ olur.

### Örnek 4: Davranışı Okuma

Özdeğerler $-1$ ve $-3$ ise her iki üstel de söner. Özdeğerler $1$ ve $-2$
ise bir bileşen büyür, diğeri söner; genel davranış kararsızdır.

## Mekanizmayı Kurma

### Örnek 5: Karakteristik Denklem

$$
A=\begin{bmatrix}-2&1\\1&-2\end{bmatrix}
$$

için

$$
\det(A-\lambda I)
=(-2-\lambda)^2-1
=(\lambda+1)(\lambda+3)
$$

olur. Özdeğerler $-1$ ve $-3$'tür.

### Örnek 6: Özvektör Sistemini Yazma

$\lambda=-1$ için

$$
(A+I)\mathbf{v}
=\begin{bmatrix}-1&1\\1&-1\end{bmatrix}\mathbf{v}=0
$$

yazılır ve $v_1=v_2$ bulunur. Basit bir seçim
$\mathbf{v}_1=[1,1]^T$'dir.

## Temel Tam Çözümler

### Örnek 7: İki Ayrık Özdeğer

$$
\mathbf{x}'=
\begin{bmatrix}-2&1\\1&-2\end{bmatrix}\mathbf{x}
$$

Karakteristik denklem $(\lambda+1)(\lambda+3)=0$ verir. $\lambda=-1$ için
$\mathbf{v}_1=[1,1]^T$, $\lambda=-3$ için
$\mathbf{v}_2=[1,-1]^T$ seçilebilir. İki özdeğer ayrık olduğundan vektörler
bağımsızdır. Genel çözüm

$$
\boxed{
\mathbf{x}=C_1e^{-t}\begin{bmatrix}1\\1\end{bmatrix}
+C_2e^{-3t}\begin{bmatrix}1\\-1\end{bmatrix}}
$$

olur. Her iki bileşen söndüğü için çözüm orijine gider.

### Örnek 8: Köşegen Sistemde Başlangıç Değeri

$$
\mathbf{x}'=
\begin{bmatrix}1&0\\0&-2\end{bmatrix}\mathbf{x},\q\quad
\mathbf{x}(0)=\begin{bmatrix}3\\4\end{bmatrix}
$$

Genel çözüm

$$
\mathbf{x}=C_1e^t\begin{bmatrix}1\\0\end{bmatrix}
+C_2e^{-2t}\begin{bmatrix}0\\1\end{bmatrix}
$$

biçimindedir. Başlangıç koşulu $C_1=3$, $C_2=4$ verir:

$$
\boxed{\mathbf{x}(t)=\begin{bmatrix}3e^t\\4e^{-2t}\end{bmatrix}}.
$$

Birinci bileşen büyüdüğü için sistem kararsızdır.

## Hata Avı

### Örnek 9: İlk Hata Nerede?

Bir öğrenci yalnız $\lambda_1=-1$, $\lambda_2=-3$ değerlerini bulup
$\mathbf{x}=C_1e^{-t}+C_2e^{-3t}$ yazıyor. İlk hata, çözümün vektör olduğunu
unutmaktır. Her üstel kendi özvektörüyle çarpılmalıdır.

## Karşılaştırma

### Örnek 10: Skaler ve Vektörel Kök Sözlüğü

Sabit katsayılı tek denklemde karakteristik kök $e^{rt}$ üretir. Sistemde
özdeğer $e^{\lambda t}$ üretir, fakat ayrıca bir $\mathbf{v}$ doğrultusu
gerekir. Matris, büyüme hızının yanında yön bilgisini de taşır.

## Hafif Karma Örnek

### Örnek 11: Başlangıç Koşulunu Özvektörlere Ayırma

Örnek 7'deki sistem için $\mathbf{x}(0)=[4,0]^T$ olsun. Koşul

$$
C_1\begin{bmatrix}1\\1\end{bmatrix}
+C_2\begin{bmatrix}1\\-1\end{bmatrix}
=\begin{bmatrix}4\\0\end{bmatrix}
$$

verir. $C_1+C_2=4$, $C_1-C_2=0$ olduğundan $C_1=C_2=2$ ve

$$
\boxed{
\mathbf{x}=2e^{-t}\begin{bmatrix}1\\1\end{bmatrix}
+2e^{-3t}\begin{bmatrix}1\\-1\end{bmatrix}}
$$

bulunur.

## Karma Çalışma Soruları

### Soru 1

$$
\mathbf{x}'=
\begin{bmatrix}2&0\\0&-1\end{bmatrix}\mathbf{x},
\q\quad
\mathbf{x}(0)=\begin{bmatrix}3\\4\end{bmatrix}
$$

başlangıç değer problemini çözün.

### Soru 2

$$
A=\begin{bmatrix}3&1\\1&3\end{bmatrix}
$$

matrisinin özdeğer ve özvektörlerini bulun; homojen sistemin genel çözümünü
yazın.

### Soru 3

$$
A=\begin{bmatrix}1&2\\0&-1\end{bmatrix}
$$

için karakteristik denklemi kurun, her özdeğere karşılık bir özvektör bulun
ve genel çözümü yazın.

### Soru 4

$\lambda=-2$ ve $\mathbf{v}=[1,-3]^T$ için
$\mathbf{x}=e^{-2t}\mathbf{v}$ çözümünün $\mathbf{x}'=A\mathbf{x}$
denklemini sağlaması adına $A\mathbf{v}$'nin ne olması gerektiğini yazın.

### Soru 5

Özvektörleri $[1,1]^T$ ve $[1,-1]^T$ olan bir sistemde
$\mathbf{x}(0)=[6,2]^T$ başlangıç durumunu bu iki doğrultuya ayırın.

### Soru 6

Özdeğerleri $-1$ ve $4$ olan bir sistemin genel çözümünün uzun zamandaki
davranışını başlangıç sabitlerine bağlı olarak açıklayın.

### Soru 7

Bir öğrenci $\det(\lambda I-A)=0$ kullanırken özvektörü
$(\lambda I-A)\mathbf{v}=\mathbf{v}$ denkleminden arıyor. Hatalı adımı
belirleyip doğru homojen sistemi yazın.

### Soru 8

$$
\mathbf{x}_1=e^t\begin{bmatrix}1\\0\end{bmatrix},
\q\quad
\mathbf{x}_2=e^{-2t}\begin{bmatrix}1\\1\end{bmatrix}
$$

çözümlerinden oluşan temel matrisi yazın ve determinantının sıfır olmadığını
gösterin.

## Çalışmanızı Kontrol Etme

> Çözümümü $\det(A-\lambda I)$ kurulumu, her özdeğer için özvektör,
> vektörlerin sütun biçimi, başlangıç durumunun özvektörlere ayrılması ve
> üstel işaretlerinden davranış okuma açısından incele. Hata varsa doğru
> özdeğeri vermeden ilk yanlış determinant ya da vektör adımını belirt.
