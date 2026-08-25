---
title: "Ortogonal İzdüşüm ve Gram–Schmidt: Alıştırmalar"
subtitle: "Lineer Cebir — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-25
description: "Ortogonal izdüşüm, dik bileşen ve Gram–Schmidt pratiği."
execute:
  echo: false
---

# Ortogonal İzdüşüm ve Gram–Schmidt: Alıştırmalar

Bu çalışma; bir doğruya ya da ortogonal tabanlı alt uzaya izdüşüm alma, hata vektörünü bulma ve Gram–Schmidt yöntemiyle ortogonal veya ortonormal taban üretme becerilerini geliştirir.

İzdüşüm formülündeki payda, izdüşüm alınan vektörün kendi iç çarpımıdır. Gram–Schmidt işleminde ise her yeni vektörden daha önce üretilmiş ortogonal vektörler yönündeki bileşenler çıkarılır.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
Bu notu bir yapay zekâ aracına verip yeni işlem soruları isteyebilirsiniz. Aracın çözümü hemen açıklamamasını; önce izdüşüm katsayılarınızı ve ortogonallik kontrollerinizi incelemesini isteyin.

Örnek istem:

> Bu çalışma notundaki gösterime bağlı kal. İki izdüşüm ve iki Gram–Schmidt sorusu üret. Çözümü başlangıçta verme; her adımımda yalnız pay, payda ve çıkarılan bileşeni denetle.

Karma çalışma soruları için hazır cevap anahtarı verilmemiştir.
:::

## Bir Vektöre İzdüşüm

### Örnek 1: Doğru Üzerine İzdüşüm

$v=(4,2)^T$ vektörünü $u=(1,1)^T$ doğrultusuna izdürelim:

$$
\operatorname{proj}_u(v)
=\frac{\langle v,u\rangle}{\langle u,u\rangle}u
=\frac{6}{2}\begin{bmatrix}1\\1\end{bmatrix}
=\begin{bmatrix}3\\3\end{bmatrix}.
$$

Hata vektörü

$$
e=v-\operatorname{proj}_u(v)=\begin{bmatrix}1\\-1\end{bmatrix}
$$

olur ve $e\cdot u=0$ sağlar.

### Örnek 2: Birim Vektörde Kısalan Formül

$q$ birim vektörse $q^Tq=1$ olduğundan

$$
\operatorname{proj}_q(v)=(v^Tq)q.
$$

$q=(3/5,4/5)^T$ ve $v=(5,0)^T$ için

$$
\operatorname{proj}_q(v)=3q
=\begin{bmatrix}9/5\\12/5\end{bmatrix}.
$$

## Alt Uzaya İzdüşüm

### Örnek 3: Ortogonal Tabanı Kullanmak

$$
u_1=\begin{bmatrix}1\\1\\0\end{bmatrix},\qquad
u_2=\begin{bmatrix}1\\-1\\0\end{bmatrix},\qquad
v=\begin{bmatrix}3\\1\\2\end{bmatrix}.
$$

$u_1\perp u_2$ olduğundan $W=\operatorname{span}\{u_1,u_2\}$ üzerine izdüşüm

$$
\operatorname{proj}_W(v)
=\frac{v^Tu_1}{u_1^Tu_1}u_1
+\frac{v^Tu_2}{u_2^Tu_2}u_2
=2u_1+u_2
=\begin{bmatrix}3\\1\\0\end{bmatrix}.
$$

Hata $e=(0,0,2)^T$ hem $u_1$'e hem $u_2$'ye diktir.

## Gram–Schmidt Yöntemi

### Örnek 4: İki Vektörü Ortogonalleştirmek

$$
a_1=\begin{bmatrix}1\\0\\1\end{bmatrix},\qquad
a_2=\begin{bmatrix}1\\1\\1\end{bmatrix}.
$$

Önce $u_1=a_1$ alınır. Sonra

$$
u_2=a_2-\operatorname{proj}_{u_1}(a_2)
=a_2-\frac{2}{2}u_1
=\begin{bmatrix}0\\1\\0\end{bmatrix}.
$$

$u_1^Tu_2=0$ olduğundan $\{u_1,u_2\}$ aynı alt uzayın ortogonal tabanıdır.

### Örnek 5: Üç Vektör ve Normalleştirme

Önceki listeye $a_3=(0,1,1)^T$ eklensin. Üçüncü ortogonal vektör

$$
u_3=a_3-\operatorname{proj}_{u_1}(a_3)-\operatorname{proj}_{u_2}(a_3)
=\begin{bmatrix}0\\1\\1\end{bmatrix}
-\frac12\begin{bmatrix}1\\0\\1\end{bmatrix}
-\begin{bmatrix}0\\1\\0\end{bmatrix}
=\begin{bmatrix}-1/2\\0\\1/2\end{bmatrix}.
$$

Normalleştirince

$$
q_1=\frac1{\sqrt2}\begin{bmatrix}1\\0\\1\end{bmatrix},\quad
q_2=\begin{bmatrix}0\\1\\0\end{bmatrix},\quad
q_3=\frac1{\sqrt2}\begin{bmatrix}-1\\0\\1\end{bmatrix}
$$

ortonormal tabanı elde edilir.

### Örnek 6: Sıfır Vektörünün Anlamı

$a_1=(1,0)^T$ ve $a_2=(2,0)^T$ için

$$
u_2=a_2-\operatorname{proj}_{a_1}(a_2)=a_2-2a_1=0.
$$

Bu sonuç işlem hatası değil, başlangıç listesinin lineer bağımlı olduğunun göstergesidir. Sıfır vektörü tabana eklenmez.

## Hata Avı

### Örnek 7: Paydada Yanlış Vektör

$\operatorname{proj}_u(v)$ formülünün paydası $v^Tv$ değil $u^Tu$'dur. Çünkü sonuç $u$ doğrultusunda aranır.

### Örnek 8: Eski Vektörlere İzdüşüm Almak

Gram–Schmidt'in üçüncü adımında izdüşümler başlangıçtaki $a_1,a_2$ vektörlerine değil, üretilmiş ortogonal $u_1,u_2$ vektörlerine alınır.

### Örnek 9: Ortogonal ile Ortonormali Karıştırmak

Bir kümenin vektörleri birbirine dikse küme ortogonaldir. Ortonormal olması için ayrıca her vektörün normu $1$ olmalıdır.

## Adım Adım İşlem Pratiği

### Örnek 10

$$
\operatorname{proj}_{(2,0)^T}(3,4)^T
=\frac6{4}\begin{bmatrix}2\\0\end{bmatrix}
=\begin{bmatrix}3\\0\end{bmatrix}.
$$

### Örnek 11

$v=(2,3)^T$ ve $u=(0,1)^T$ için izdüşüm $(0,3)^T$, dik bileşen $(2,0)^T$ olur.

### Örnek 12

$a_1=(1,1)^T$, $a_2=(1,0)^T$ için

$$
u_1=(1,1)^T,\qquad
u_2=(1,0)^T-\frac12(1,1)^T=(1/2,-1/2)^T.
$$

### Örnek 13

Örnek 12'deki vektörleri normalleştirince

$$
q_1=\frac1{\sqrt2}(1,1)^T,\qquad
q_2=\frac1{\sqrt2}(1,-1)^T
$$

elde edilir.

## Karma Çalışma Soruları

### Soru 1

$(5,1)^T$ vektörünü $(1,2)^T$ doğrultusuna izdüşürün.

### Soru 2

Soru 1'deki hata vektörünü bulun ve izdüşüm doğrultusuna dik olduğunu gösterin.

### Soru 3

$(2,-1,3)^T$ vektörünü $e_1$ ile gerilen doğruya izdüşürün.

### Soru 4

$u_1=(1,1,0)^T$ ve $u_2=(0,0,2)^T$ ortogonal tabanının gerdiği uzaya $v=(3,-1,4)^T$ vektörünü izdüşürün.

### Soru 5

Soru 4'teki hata vektörünün $u_1$ ve $u_2$ ile iç çarpımlarını hesaplayın.

### Soru 6

$a_1=(1,1,0)^T$ ve $a_2=(1,0,1)^T$ vektörlerine Gram–Schmidt yöntemini uygulayın.

### Soru 7

Soru 6'da elde ettiğiniz ortogonal tabanı normalleştirin.

### Soru 8

$(1,0)^T,(1,1)^T,(2,1)^T$ listesine Gram–Schmidt uygulandığında neden bir sıfır vektörü oluşacağını işlem yapmadan açıklayın.

### Soru 9

Ortonormal $q_1,q_2$ vektörleri için $\operatorname{proj}_W(v)=(v^Tq_1)q_1+(v^Tq_2)q_2$ formülünün neden payda içermediğini açıklayın.

### Soru 10

$v=\operatorname{proj}_W(v)+e$ ayrışımında $e$ vektörünün $W$'ye neden dik olduğunu açıklayın.

## Çalışmanızı Kontrol Etme

Çözümlerinizi tamamladıktan sonra aşağıdaki istemle yapay zekâdan geri bildirim alabilirsiniz:

> Aşağıya izdüşüm ve Gram–Schmidt çözümlerimi ekleyeceğim. Sonuçları doğrudan söylemeden pay ve paydayı, çıkarılan izdüşüm bileşenlerini ve son ortogonallik kontrollerini denetle. İlk hatalı satırı göster ve tek bir ipucu ver.
