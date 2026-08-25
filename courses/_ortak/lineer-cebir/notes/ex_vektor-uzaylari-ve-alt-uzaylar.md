---
title: "Vektör Uzayları ve Alt Uzaylar: Alıştırmalar"
subtitle: "Lineer Cebir — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-25
description: "Vektör uzayı, germe, üyelik ve alt uzay testi pratiği."
execute:
  echo: false
---

# Vektör Uzayları ve Alt Uzaylar: Alıştırmalar

Bu çalışma, farklı nesne kümelerini vektör uzayı olarak okumayı, bir vektörün verilen vektörlerce gerilip gerilmediğine karar vermeyi ve bir alt kümeyi alt uzay testiyle sınamayı amaçlar.

Her soruda önce üst uzayı ve kullanılan işlemleri belirleyin. Alt uzay olduğunu göstermek için genel elemanlarla çalışın; alt uzay olmadığını göstermek için koşullardan birini bozan tek bir karşı örnek yeterlidir.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
Bu çalışma notunu bir yapay zekâ aracına vererek aynı becerileri hedefleyen yeni sorular ürettirebilirsiniz. Soruların çözümünü başlangıçta vermemesini, önce kararınızı ve gerekçenizi beklemesini isteyin.

Örnek istem:

> Bu çalışma notundaki gösterime bağlı kal. "Alt uzay testi" için beş yeni küme ver. Her kümede önce hangi koşulu sınamam gerektiğini sor. Çözümü hemen verme; yanlış kararda yalnız bozulan koşulu belirt.

Karma çalışma soruları için hazır cevap anahtarı verilmemiştir.
:::

## Germe ve Üyelik

### Örnek 1: Bir Vektör Gerilen Kümede mi?

$$
v_1=\begin{bmatrix}1\\0\\1\end{bmatrix},\qquad
v_2=\begin{bmatrix}0\\1\\1\end{bmatrix},\qquad
w=\begin{bmatrix}2\\-1\\1\end{bmatrix}.
$$

$w=av_1+bv_2$ eşitliği

$$
\begin{bmatrix}a\\b\\a+b\end{bmatrix}
=\begin{bmatrix}2\\-1\\1\end{bmatrix}
$$

biçimindedir. İlk iki bileşen $a=2$, $b=-1$ verir ve $a+b=1$ üçüncü bileşeni sağlar. Dolayısıyla

$$
\boxed{w\in\operatorname{span}\{v_1,v_2\}}.
$$

**Kontrol.** Bulduğunuz katsayıları başlangıçtaki lineer birleşimde yerine koyun.

### Örnek 2: Üyelik Başarısızsa

$z=(2,-1,4)^T$ için ilk iki bileşen yine $a=2$, $b=-1$ değerlerini zorlar; fakat $a+b=1\neq4$ olur. Bu nedenle

$$
\boxed{z\notin\operatorname{span}\{v_1,v_2\}}.
$$

**Tanı.** Bir denklem sisteminin tutarsız çıkması, hedef vektörün gerilen kümede olmadığını gösterir.

## Vektör Uzayı Adaylarını Sınama

### Örnek 3: Polinomlar da Vektördür

$P_2$, derecesi en fazla $2$ olan gerçek katsayılı polinomların kümesi olsun. Standart polinom toplaması ve gerçek sayıyla çarpma altında:

- sıfır elemanı sıfır polinomudur,
- iki elemanın toplamı yine $P_2$'dedir,
- bir polinomun skaler katı yine $P_2$'dedir,
- kalan aksiyomlar gerçek sayı işlemlerinden devralınır.

Bu nedenle $P_2$ bir gerçek vektör uzayıdır.

### Örnek 4: Tam Derece Koşulu Kapanışı Bozar

$$
V=\{p:\deg p=2\}
$$

kümesini ele alalım. $p(t)=t^2$ ve $q(t)=-t^2+t$ tam ikinci derecedendir; ancak

$$
p(t)+q(t)=t
$$

ikinci dereceden değildir. Ayrıca sıfır polinomu $V$'de bulunmaz. Dolayısıyla $V$ vektör uzayı değildir.

## Alt Uzay Testi

### Örnek 5: Homojen Bir Düzlem

$$
W=\{(x,y,z)\in\mathbb R^3:x-2y+z=0\}.
$$

$u=(u_1,u_2,u_3)$ ve $v=(v_1,v_2,v_3)$, $W$'de; $a,b\in\mathbb R$ olsun. O zaman

$$
(au_1+bv_1)-2(au_2+bv_2)+(au_3+bv_3)
=a(u_1-2u_2+u_3)+b(v_1-2v_2+v_3)=0.
$$

$W$ boş değildir ve her $au+bv$ birleşimini içerir. Böylece $W$, $\mathbb R^3$'ün alt uzayıdır.

### Örnek 6: Ötelenmiş Düzlem

$$
U=\{(x,y,z)\in\mathbb R^3:x-2y+z=1\}.
$$

Sıfır vektörü koşulu sağlamaz:

$$
0-2\cdot0+0=0\neq1.
$$

Bu tek karşı örnek $U$'nun alt uzay olmadığını gösterir. Toplama ve skalerle kapalılığı ayrıca sınamak gerekmez.

### Örnek 7: Birleşim Genellikle Alt Uzay Değildir

$W_1=\operatorname{span}\{e_1\}$ ve $W_2=\operatorname{span}\{e_2\}$ olsun. $e_1,e_2\in W_1\cup W_2$ iken

$$
e_1+e_2\notin W_1\cup W_2.
$$

Birleşim toplamaya kapalı değildir. Buna karşılık $W_1\cap W_2$ her zaman alt uzaydır.

## Homojen Çözüm ve Sütun Uzayları

### Örnek 8: Null Uzayı

$A\in\mathbb R^{m\times n}$ için

$$
\operatorname{Null}(A)=\{x\in\mathbb R^n:Ax=0\}
$$

alt uzaydır. $Ax=0$ ve $Ay=0$ ise

$$
A(ax+by)=aAx+bAy=0.
$$

**Kontrol.** Null uzayı $\mathbb R^n$ içinde yaşar; sütunların bulunduğu $\mathbb R^m$ içinde değil.

### Örnek 9: Sütun Uzayı

$$
A=\begin{bmatrix}1&2\\3&6\\0&1\end{bmatrix}.
$$

Sütun uzayı

$$
\operatorname{Col}(A)=\operatorname{span}\left\{
\begin{bmatrix}1\\3\\0\end{bmatrix},
\begin{bmatrix}2\\6\\1\end{bmatrix}
\right\}\subseteq\mathbb R^3
$$

olduğundan tanım gereği bir alt uzaydır.

## Hata Avı

### Örnek 10: Birkaç Elemanla Kanıtlamak

Bir kümeden seçilen iki örneğin toplamının içeride kalması kapalılığı kanıtlamaz. Alt uzay kanıtı bütün $u,v\in W$ ve bütün $a,b\in\mathbb R$ için çalışmalıdır.

### Örnek 11: Yanlış Üst Uzay

$A$ matrisi $m\times n$ ise $\operatorname{Null}(A)\subseteq\mathbb R^n$, $\operatorname{Col}(A)\subseteq\mathbb R^m$ olur. Bu iki uzayın yerini değiştirmek, elemanların bileşen sayısını yanlış okumaya yol açar.

### Örnek 12: Sıfırı İçermek Yeterli Değildir

$$
S=\{(x,y)\in\mathbb R^2:xy=0\}
$$

sıfırı içerir. Ancak $(1,0),(0,1)\in S$ iken $(1,1)\notin S$ olduğundan toplamaya kapalı değildir.

## Adım Adım İşlem Pratiği

### Örnek 13

$$
\operatorname{span}\left\{\begin{bmatrix}1\\2\end{bmatrix}\right\}
=\left\{t\begin{bmatrix}1\\2\end{bmatrix}:t\in\mathbb R\right\}.
$$

Bu küme orijinden geçen bir doğru ve $\mathbb R^2$'nin alt uzayıdır.

### Örnek 14

$W=\{(x,y,z):z=0\}$ için $0\in W$ ve $a(x_1,y_1,0)+b(x_2,y_2,0)=(ax_1+bx_2,ay_1+by_2,0)\in W$. Dolayısıyla $W$ alt uzaydır.

### Örnek 15

$W=\{(x,y):x\ge0\}$ alt uzay değildir; $(1,0)\in W$ iken $-1(1,0)=(-1,0)\notin W$.

### Örnek 16

$W_1$ ve $W_2$ alt uzaysa $0\in W_1\cap W_2$ ve lineer birleşimler her iki kümede de kalır. Bu nedenle $W_1\cap W_2$ alt uzaydır.

## Karma Çalışma Soruları

### Soru 1

$(3,1,4)^T$ vektörünün $(1,0,1)^T$ ve $(0,1,1)^T$ tarafından gerilip gerilmediğine karar verin.

### Soru 2

$P_3$ içinde $\operatorname{span}\{1+t,t+t^2\}$ kümesine $1+2t+t^2$ polinomu ait midir?

### Soru 3

Tam olarak üçüncü dereceden polinomların neden vektör uzayı olmadığını iki ayrı koşulla açıklayın.

### Soru 4

$W=\{(x,y,z):x+y+z=0\}$ kümesinin alt uzay olduğunu tek koşullu testle kanıtlayın.

### Soru 5

$U=\{(x,y,z):x+y+z=3\}$ kümesi için en hızlı ret gerekçesini verin.

### Soru 6

$S=\{(x,y):x^2=y^2\}$ kümesinin toplamaya kapalı olup olmadığını karşı örnekle sınayın.

### Soru 7

İki alt uzayın kesişiminin neden alt uzay olduğunu genel elemanlarla gösterin.

### Soru 8

İki alt uzayın birleşiminin hangi durumda alt uzay olacağını araştırın ve gerekçelendirin.

### Soru 9

$A\in\mathbb R^{4\times6}$ için $\operatorname{Null}(A)$ ve $\operatorname{Col}(A)$ hangi üst uzaylarda bulunur?

### Soru 10

$A=\begin{bmatrix}1&2&0\\0&1&1\end{bmatrix}$ için $\operatorname{Null}(A)$ ve $\operatorname{Col}(A)$ kümelerine birer üreteç listesi bulun.

## Çalışmanızı Kontrol Etme

Önce kararınızı ve gerekçenizi yazın. Alt uzay kanıtında genel eleman, ret kararında açık bir karşı örnek kullandığınızdan emin olun.

> Çözümümü üst uzayın doğru seçimi, sıfır vektörü, lineer birleşimlere kapalılık, germe üyeliği ve Null–Col ayrımı açısından incele. Hata varsa cevabı hemen verme; önce bozulan koşulu veya yanlış kurulan denklemi belirt.
