---
title: "En Küçük Kareler: Alıştırmalar"
subtitle: "Lineer Cebir — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-25
description: "Normal denklemler, en iyi yaklaşım ve doğru uydurma pratiği."
execute:
  echo: false
---

# En Küçük Kareler: Alıştırmalar

Bu çalışma; tutarsız bir $Ax=b$ sistemine en iyi yaklaşımı bulma, normal denklemleri kurma, artık vektörünü denetleme ve veri noktalarına en küçük kareler doğrusu uydurma becerilerini geliştirir.

En küçük kareler çözümü genellikle $Ax=b$ eşitliğini sağlamaz. Amaç $\|b-Ax\|$ değerini küçültmek; geometrik olarak da $b$'yi $A$'nın sütun uzayına izdüşürmektir.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
Bu çalışma notunu bir yapay zekâ aracına vererek yeni normal denklem ve doğru uydurma soruları ürettirebilirsiniz. Çözümü hemen vermemesini; önce matrislerin boyutlarını ve artık vektörünün ortogonalliğini denetlemesini isteyin.

Örnek istem:

> Bu çalışma notundaki gösterime bağlı kal. Biri tutarlı, ikisi tutarsız üç en küçük kareler sorusu üret. Çözümleri başlangıçta verme; önce kurduğum normal denklemi denetle ve yalnız bir ipucu ver.

Karma çalışma soruları için hazır cevap anahtarı verilmemiştir.
:::

## Normal Denklemler

### Örnek 1: Tutarsız Sisteme En İyi Yaklaşım

$$
A=\begin{bmatrix}1&0\\1&1\\1&2\end{bmatrix},\qquad
b=\begin{bmatrix}1\\2\\2\end{bmatrix}.
$$

$Ax=b$ sistemi tutarsızdır. En küçük kareler çözümü $\widehat x$, normal denklemleri sağlar:

$$
A^TA\widehat x=A^Tb.
$$

$$
A^TA=\begin{bmatrix}3&3\\3&5\end{bmatrix},\qquad
A^Tb=\begin{bmatrix}5\\6\end{bmatrix}.
$$

Dolayısıyla

$$
\begin{bmatrix}3&3\\3&5\end{bmatrix}
\begin{bmatrix}\widehat x_1\\\widehat x_2\end{bmatrix}
=\begin{bmatrix}5\\6\end{bmatrix}
$$

sisteminden

$$
\boxed{\widehat x=\begin{bmatrix}7/6\\1/2\end{bmatrix}}
$$

elde edilir.

### Örnek 2: Yaklaşım ve Artık

$$
\widehat b=A\widehat x
=\begin{bmatrix}7/6\\5/3\\13/6\end{bmatrix},\qquad
r=b-\widehat b
=\begin{bmatrix}-1/6\\1/3\\-1/6\end{bmatrix}.
$$

Normal denklemlerin temel kontrolü

$$
A^Tr=\begin{bmatrix}0\\0\end{bmatrix}
$$

eşitliğidir. Yani artık vektörü $A$'nın her sütununa diktir.

### Örnek 3: Kareler Toplamı

Örnek 2 için en küçük hata kareleri toplamı

$$
\|r\|^2=\left(-\frac16\right)^2
+\left(\frac13\right)^2
+\left(-\frac16\right)^2
=\frac16
$$

olur.

## Doğru Uydurma

### Örnek 4: Tasarım Matrisini Kurmak

$(0,1)$, $(1,2)$ ve $(2,2)$ noktalarına $y=a+bt$ doğrusu uydurulsun. Denklem

$$
\begin{bmatrix}1&0\\1&1\\1&2\end{bmatrix}
\begin{bmatrix}a\\b\end{bmatrix}
\approx
\begin{bmatrix}1\\2\\2\end{bmatrix}
$$

olur. Bu, Örnek 1'deki sistemdir; dolayısıyla

$$
\boxed{y=\frac76+\frac12t}
$$

en küçük kareler doğrusudur.

**Kontrol.** Sabit terimin sütunu tamamen $1$'lerden, eğimin sütunu veri noktalarının $t$ değerlerinden oluşur.

### Örnek 5: Tam Uyum

$(0,1)$, $(1,3)$ ve $(2,5)$ noktaları $y=1+2t$ doğrusu üzerindedir. Bu durumda $b$ sütun uzayında olduğundan artık sıfırdır ve en küçük kareler çözümü aynı zamanda $Ax=b$ sisteminin tam çözümüdür.

## Geometrik Yorum ve Teklik

### Örnek 6: İzdüşüm Olarak Yaklaşım

$\widehat b=A\widehat x$, $b$'nin $\operatorname{Col}(A)$ üzerine ortogonal izdüşümüdür. Bu nedenle

$$
b=\widehat b+r,\qquad
\widehat b\in\operatorname{Col}(A),\qquad
r\perp\operatorname{Col}(A).
$$

### Örnek 7: Çözüm Ne Zaman Tektir?

$A$'nın sütunları lineer bağımsızsa $A^TA$ tersinirdir ve

$$
\widehat x=(A^TA)^{-1}A^Tb
$$

tek en küçük kareler çözümüdür. Sütunlar bağımlıysa en iyi yaklaşım $\widehat b$ tek olabilir, fakat onu üreten katsayı vektörü tek olmak zorunda değildir.

## Hata Avı

### Örnek 8: Normal Denklemi Ters Kurmak

Doğru denklem $A^TA\widehat x=A^Tb$'dir. $AA^T$ yazmak genellikle boyutları bozduğu gibi bilinmeyen sayısını da değiştirir.

### Örnek 9: Yaklaşımı Tam Çözüm Sanmak

Tutarsız sistemde $A\widehat x=b$ beklenmez. Denetlenmesi gereken eşitlik $A^T(b-A\widehat x)=0$'dır.

### Örnek 10: Artığın İşaretini Değiştirmek

$r=b-A\widehat x$ ya da ters işaretli tanım kullanılabilir; ancak aynı çözüm boyunca tanım tutarlı kalmalıdır. Kareler toplamı işaretten etkilenmez, bileşenlerin yorumu etkilenir.

## Adım Adım İşlem Pratiği

### Örnek 11

$$
A=\begin{bmatrix}1\\1\\1\end{bmatrix},\quad
b=\begin{bmatrix}2\\4\\6\end{bmatrix}
$$

için $A^TA=3$, $A^Tb=12$ ve $\widehat x=4$ olur. Bu değer, verilerin ortalamasıdır.

### Örnek 12

Örnek 11'de $\widehat b=(4,4,4)^T$ ve $r=(-2,0,2)^T$ olur. $A^Tr=-2+0+2=0$'dır.

### Örnek 13

$$
A=\begin{bmatrix}1&0\\0&1\\0&0\end{bmatrix},\qquad
b=\begin{bmatrix}3\\-1\\5\end{bmatrix}
$$

için $A^TA=I_2$ ve $\widehat x=(3,-1)^T$ olur. Yaklaşım $\widehat b=(3,-1,0)^T$, artık $r=(0,0,5)^T$'dir.

### Örnek 14

İki nokta $(0,2)$ ve $(1,5)$ tek bir doğruyu belirler. $y=a+bt$ modeli için $a=2$, $b=3$ ve artık sıfırdır.

## Karma Çalışma Soruları

### Soru 1

$A=\begin{bmatrix}1\\1\\1\end{bmatrix}$ ve $b=(1,5,9)^T$ için normal denklemi kurup $\widehat x$ değerini bulun.

### Soru 2

Soru 1'de $\widehat b$ ile $r=b-\widehat b$ vektörlerini hesaplayın ve $A^Tr=0$ olduğunu gösterin.

### Soru 3

$A=\begin{bmatrix}1&0\\1&1\\1&3\end{bmatrix}$ ve $b=(1,2,4)^T$ için $A^TA$ ile $A^Tb$ matrislerini bulun.

### Soru 4

Soru 3'ün normal denklemini çözün ve artık vektörünü hesaplayın.

### Soru 5

$(0,2)$, $(1,2)$ ve $(2,5)$ noktalarına $y=a+bt$ doğrusu uydurmak için tasarım matrisini ve veri vektörünü yazın.

### Soru 6

Soru 5'teki en küçük kareler doğrusunu bulun.

### Soru 7

$(0,-1)$, $(1,1)$ ve $(2,3)$ noktalarında artık vektörünün neden sıfır olacağını işlem yapmadan açıklayın.

### Soru 8

$A$'nın sütunları lineer bağımsızsa $A^TA$ matrisinin neden tersinir olduğunu $x^TA^TAx=\|Ax\|^2$ eşitliğini kullanarak açıklayın.

### Soru 9

$\widehat b=A\widehat x$ vektörünün neden $\operatorname{Col}(A)$ içinde bulunduğunu ve $b-\widehat b$'nin bu uzaya neden dik olduğunu açıklayın.

### Soru 10

$A$'nın iki sütunu aynıysa en küçük kareler katsayılarının neden tek olmayabileceğini açıklayın.

## Çalışmanızı Kontrol Etme

Çözümlerinizi tamamladıktan sonra aşağıdaki istemle yapay zekâdan geri bildirim alabilirsiniz:

> Aşağıya en küçük kareler çözümlerimi ekleyeceğim. Sonuçları doğrudan vermeden matris boyutlarını, $A^TA\widehat x=A^Tb$ denklemini, artık vektörünü ve $A^Tr=0$ kontrolünü incele. İlk hatalı adımı göster ve tek bir düzeltme ipucu ver.
