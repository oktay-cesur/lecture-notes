---
title: "İç Çarpım, Norm ve Ortogonallik: Alıştırmalar"
subtitle: "Lineer Cebir — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-25
description: "İç çarpım, norm, uzaklık, açı ve ortogonallik pratiği."
execute:
  echo: false
---

# İç Çarpım, Norm ve Ortogonallik: Alıştırmalar

Bu çalışma; iç çarpım hesaplama, norm ve uzaklık bulma, iki vektör arasındaki açıyı belirleme, ortogonalliği sınama ve bir vektörü birim vektöre dönüştürme becerilerini geliştirir.

Her işlemde önce kullanılan iç çarpımı belirleyin. Standart iç çarpımla ağırlıklı iç çarpımı birbirine karıştırmayın; normu da aynı iç çarpımdan türetin.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
Bu çalışma notunu bir yapay zekâ aracına vererek aynı becerileri hedefleyen yeni sorular ürettirebilirsiniz. Aracın çözümü hemen vermemesini, önce işleminizi beklemesini ve hata varsa yalnız ilk yanlış adımı göstermesini isteyin.

Örnek istem:

> Bu çalışma notundaki gösterime bağlı kal. İç çarpım, norm ve açı konularından altı yeni soru üret. Çözümleri başlangıçta verme; cevabımı denetledikten sonra yalnız bir ipucu sun.

Karma çalışma soruları için hazır cevap anahtarı verilmemiştir.
:::

## Standart İç Çarpım

### Örnek 1: Bileşenleri Çarpıp Toplamak

$$
u=\begin{bmatrix}1\\2\\-1\end{bmatrix},\qquad
v=\begin{bmatrix}3\\0\\2\end{bmatrix}.
$$

Standart iç çarpım

$$
\langle u,v\rangle=u^Tv=1\cdot3+2\cdot0+(-1)\cdot2=1
$$

olur.

**Kontrol.** İç çarpım bir vektör değil, gerçek sayıdır.

### Örnek 2: Ağırlıklı İç Çarpım

$\mathbb R^2$ üzerinde

$$
\langle x,y\rangle_W=2x_1y_1+5x_2y_2
$$

tanımlansın. $p=(1,3)^T$ ve $q=(2,1)^T$ için

$$
\langle p,q\rangle_W=2(1)(2)+5(3)(1)=19.
$$

Ağırlıklar pozitif olduğundan $\langle x,x\rangle_W>0$ eşitsizliği her $x\neq0$ için sağlanır.

## Norm ve Uzaklık

### Örnek 3: Norm

$$
\|u\|=\sqrt{\langle u,u\rangle}
=\sqrt{1^2+2^2+(-1)^2}=\sqrt6.
$$

**Kontrol.** Karelerin toplamı negatif olamaz; norm her zaman sıfır ya da pozitiftir.

### Örnek 4: İki Nokta Arasındaki Uzaklık

$a=(1,2)^T$ ve $b=(4,-2)^T$ için

$$
d(a,b)=\|a-b\|
=\sqrt{(1-4)^2+(2-(-2))^2}
=\sqrt{9+16}=5.
$$

## Açı ve Ortogonallik

### Örnek 5: İki Vektör Arasındaki Açı

$a=(3,4)^T$ ve $b=(4,3)^T$ için

$$
\cos\theta=\frac{\langle a,b\rangle}{\|a\|\|b\|}
=\frac{3\cdot4+4\cdot3}{5\cdot5}
=\frac{24}{25}.
$$

Dolayısıyla $\theta=\arccos(24/25)$ olur. İç çarpım pozitif olduğu için açı dardır.

### Örnek 6: Ortogonallik Testi

$$
x=\begin{bmatrix}1\\2\end{bmatrix},\qquad
y=\begin{bmatrix}2\\-1\end{bmatrix}.
$$

$$
\langle x,y\rangle=1\cdot2+2\cdot(-1)=0.
$$

Bu nedenle $x\perp y$'dir. Sıfır iç çarpım, vektörlerin sıfır olması değil birbirine dik olması anlamına gelir.

## Birim Vektör ve Ortonormallik

### Örnek 7: Normalleştirme

$v=(3,4)^T$ için $\|v\|=5$ olduğundan

$$
\widehat v=\frac{v}{\|v\|}
=\begin{bmatrix}3/5\\4/5\end{bmatrix}.
$$

Gerçekten $\|\widehat v\|=1$'dir.

### Örnek 8: Ortonormal Küme

$$
q_1=\frac1{\sqrt2}\begin{bmatrix}1\\1\end{bmatrix},\qquad
q_2=\frac1{\sqrt2}\begin{bmatrix}1\\-1\end{bmatrix}.
$$

$\langle q_1,q_2\rangle=0$ ve $\|q_1\|=\|q_2\|=1$ olduğundan $\{q_1,q_2\}$ ortonormaldir.

## Cauchy–Schwarz Eşitsizliği

### Örnek 9: Eşitlik Durumu

Her $u,v$ için

$$
|\langle u,v\rangle|\leq\|u\|\|v\|
$$

olur. $u=(1,2)^T$ ve $v=(3,6)^T=3u$ için iki taraf da $15$'tir. Eşitlik, sıfır olmayan vektörler lineer bağımlı olduğunda gerçekleşir.

## Hata Avı

### Örnek 10: Kareyi Unutmak

$\|(1,-2)^T\|$ değeri $\sqrt{1+(-2)}$ değildir. Doğru hesap

$$
\sqrt{1^2+(-2)^2}=\sqrt5
$$

biçimindedir.

### Örnek 11: Farklı İç Çarpımları Karıştırmak

Ağırlıklı iç çarpım verilmişse norm $\|x\|_W=\sqrt{\langle x,x\rangle_W}$ ile bulunur. Standart Öklid normunu kullanmak aynı geometrinin ölçülerini vermez.

### Örnek 12: Sıfır İç Çarpımı Yanlış Yorumlamak

$\langle u,v\rangle=0$ eşitliği, $u=0$ ya da $v=0$ sonucunu zorunlu kılmaz. Örneğin $(1,0)^T$ ile $(0,1)^T$ sıfır olmayan dik vektörlerdir.

## Adım Adım İşlem Pratiği

### Örnek 13

$$
\left\langle\begin{bmatrix}2\\-1\\3\end{bmatrix},
\begin{bmatrix}0\\4\\2\end{bmatrix}\right\rangle
=0-4+6=2.
$$

### Örnek 14

$$
\left\|\begin{bmatrix}-2\\1\\2\end{bmatrix}\right\|
=\sqrt{4+1+4}=3.
$$

### Örnek 15

$u=(1,1)^T$, $v=(1,-1)^T$ için $u\cdot v=0$; dolayısıyla aralarındaki açı $\pi/2$'dir.

### Örnek 16

$w=(-2,0,2)^T$ için $\|w\|=2\sqrt2$ ve

$$
\widehat w=\frac1{\sqrt2}\begin{bmatrix}-1\\0\\1\end{bmatrix}.
$$

## Karma Çalışma Soruları

### Soru 1

$(2,-1,4)^T$ ile $(3,0,-2)^T$ vektörlerinin standart iç çarpımını bulun.

### Soru 2

$\langle x,y\rangle_W=x_1y_1+3x_2y_2$ için $(2,1)^T$ ile $(-1,4)^T$ vektörlerinin iç çarpımını hesaplayın.

### Soru 3

$(-3,4,12)^T$ vektörünün normunu bulun.

### Soru 4

$(1,-1,2)^T$ ile $(4,3,-2)^T$ noktaları arasındaki uzaklığı hesaplayın.

### Soru 5

$(1,2,2)^T$ ile $(2,1,-2)^T$ vektörlerinin ortogonal olup olmadığını sınayın.

### Soru 6

$(1,0)^T$ ile $(1,\sqrt3)^T$ arasındaki açıyı bulun.

### Soru 7

$(2,-2,1)^T$ vektörünü normalleştirin.

### Soru 8

$\{(1/\sqrt2,1/\sqrt2)^T,(1/\sqrt2,-1/\sqrt2)^T\}$ kümesinin ortonormal olduğunu gösterin.

### Soru 9

$u=(1,2)^T$ ve $v=(-2,-4)^T$ için Cauchy–Schwarz eşitsizliğinde eşitliğin neden gerçekleştiğini açıklayın.

### Soru 10

$\langle x,y\rangle=x_1y_1-x_2y_2$ ifadesinin $\mathbb R^2$ üzerinde neden iç çarpım olmadığını bir karşı örnekle gösterin.

## Çalışmanızı Kontrol Etme

Çözümlerinizi tamamladıktan sonra aşağıdaki istemle yapay zekâdan geri bildirim alabilirsiniz:

> Aşağıya iç çarpım, norm ve ortogonallik çözümlerimi ekleyeceğim. Sonuçları vermeden önce kullandığım iç çarpımı, işaretleri, norm paydasını ve ortogonallik kararını denetle. Hata varsa türünü söyle, ilgili satırı göster ve tek bir düzeltme ipucu ver.
