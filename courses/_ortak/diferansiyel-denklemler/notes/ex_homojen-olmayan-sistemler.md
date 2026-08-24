---
title: "Homojen Olmayan Sistemler: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — Kavram ve Yöntem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-24
description: "Homojen çözüm ile zorlama cevabını ayırma, sabit dengeleri ve basit vektör adaylarını bulma, aktif kapsamda yöntem seçme pratiği."
execute:
  echo: false
---

# Homojen Olmayan Sistemler: Alıştırmalar

Homojen olmayan lineer sistemde genel çözüm
$\mathbf{x}=\mathbf{x}_h+\mathbf{x}_p$ biçimindedir. Sabit girdide özel
çözüm yeni dengeyi verir; üstel, polinom veya trigonometrik girdide uygun bir
vektör aday seçilebilir.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Önce girdinin türüne göre yöntemi ve aday biçimini kendiniz seçin. Yapay
> zekâdan katsayıları çözmesini değil, $A\mathbf{x}_p=-\mathbf{f}$ işaretini,
> adayın vektör oluşunu ve özdeğerle çakışmayı kontrol etmesini isteyin.
:::

## Tanıma ve Karar

### Örnek 1: Homojen mi?

$\mathbf{x}'=A\mathbf{x}+[1,0]^T$ homojen değildir. Sabit vektör, dışarıdan
gelen girdidir.

### Örnek 2: Sabit Girdi

$\mathbf{f}$ sabitse önce sabit $\mathbf{x}_p$ aranır. Türevi sıfır olduğu
için kurulacak denklem $A\mathbf{x}_p=-\mathbf{f}$'tir.

### Örnek 3: Üstel Girdi

$\mathbf{f}(t)=e^{2t}\mathbf{b}$ ise ilk aday
$\mathbf{x}_p=e^{2t}\mathbf{a}$'dır. $2$ bir özdeğerse aday homojen çözüme
çakışır ve genişletilmelidir.

### Örnek 4: Genel Girdi

Girdi sonlu bir aday ailesine girmiyorsa aktif konu notundaki temel matris
yöntemi seçilir:

$$
\mathbf{x}_p=X(t)\int X(t)^{-1}\mathbf{f}(t)\,dt.
$$

Bu karar sorusu yöntem seçimini ölçer; uzun matris integrali gerektirmez.

## Mekanizmayı Kurma

### Örnek 5: Yeni Denge Denklemi

$$
\mathbf{x}'=
\begin{bmatrix}-1&0\\0&-2\end{bmatrix}\mathbf{x}
+\begin{bmatrix}1\\2\end{bmatrix}
$$

için sabit aday $\mathbf{x}_p=[p_1,p_2]^T$ seçilir ve

$$
\begin{bmatrix}-1&0\\0&-2\end{bmatrix}
\begin{bmatrix}p_1\\p_2\end{bmatrix}
=-\begin{bmatrix}1\\2\end{bmatrix}
$$

kurulur.

### Örnek 6: Üstel Vektör Adayı

$$
\mathbf{x}'=A\mathbf{x}+e^t\mathbf{b},\q\quad
\mathbf{x}_p=e^t\mathbf{a}
$$

yazılırsa

$$
(I-A)\mathbf{a}=\mathbf{b}
$$

elde edilir. $1$ özdeğer değilse $I-A$ tersinirdir ve aday belirlenir.

## Temel Tam Çözümler

### Örnek 7: Sabit Girdiyle Denge Kayması

$$
\mathbf{x}'=
\begin{bmatrix}-1&0\\0&-2\end{bmatrix}\mathbf{x}
+\begin{bmatrix}1\\2\end{bmatrix}
$$

Homojen çözüm

$$
\mathbf{x}_h=C_1e^{-t}\begin{bmatrix}1\\0\end{bmatrix}
+C_2e^{-2t}\begin{bmatrix}0\\1\end{bmatrix}
$$

olur. Denge denklemi $-p_1=-1$, $-2p_2=-2$ verir; yani
$\mathbf{x}_p=[1,1]^T$. Genel çözüm

$$
\boxed{
\mathbf{x}=C_1e^{-t}\begin{bmatrix}1\\0\end{bmatrix}
+C_2e^{-2t}\begin{bmatrix}0\\1\end{bmatrix}
+\begin{bmatrix}1\\1\end{bmatrix}}
$$

olur. Homojen kısım söndüğü için bütün yörüngeler yeni dengeye yaklaşır.

### Örnek 8: Üstel Girdiyle Vektör Aday

$$
\mathbf{x}'=
\begin{bmatrix}-1&0\\0&-2\end{bmatrix}\mathbf{x}
+e^t\begin{bmatrix}2\\0\end{bmatrix}
$$

$1$ özdeğer değildir. $\mathbf{x}_p=e^t\mathbf{a}$ yazınca

$$
\begin{bmatrix}2&0\\0&3\end{bmatrix}\mathbf{a}
=\begin{bmatrix}2\\0\end{bmatrix}
$$

çıkar ve $\mathbf{a}=[1,0]^T$ bulunur. Dolayısıyla

$$
\boxed{\mathbf{x}_p=e^t\begin{bmatrix}1\\0\end{bmatrix}}.
$$

Yerine koymada türev ve sağ tarafın ikisi de $e^t[1,0]^T$ verir.

## Hata Avı

### Örnek 9: İlk Hata Nerede?

Bir öğrenci sabit girdide $A\mathbf{x}_p=\mathbf{f}$ yazıyor. İlk hata,
denge denklemindeki eksi işaretini atlamaktır. $\mathbf{x}_p'=0$ yazınca
$0=A\mathbf{x}_p+\mathbf{f}$ ve dolayısıyla
$A\mathbf{x}_p=-\mathbf{f}$ elde edilir.

## Karşılaştırma

### Örnek 10: Sabit Aday ve Temel Matris Yöntemi

Sabit girdide iki yöntem de çalışır. Denge denklemi yalnız küçük bir lineer
sistem çözer; temel matris yöntemi ters matris ve integral gerektirir. Girdi
sabitken kısa yol denge denklemidir.

## Hafif Karma Örnek

### Örnek 11: Başlangıç Durumuyla Tamamlama

Örnek 7'deki sistem için $\mathbf{x}(0)=[0,0]^T$ olsun. Genel çözümde

$$
C_1+1=0,\q\quad C_2+1=0
$$

olduğundan $C_1=C_2=-1$ çıkar:

$$
\boxed{
\mathbf{x}(t)=
\begin{bmatrix}1-e^{-t}\\1-e^{-2t}\end{bmatrix}}.
$$

Çözüm başlangıçta sıfırdır ve $[1,1]^T$ dengesine yaklaşır.

## Karma Çalışma Soruları

### Soru 1

Aşağıdaki sistemleri homojen ve homojen olmayan olarak sınıflandırın:

$$
\mathbf{x}'=A\mathbf{x},
\q\quad
\mathbf{x}'=A\mathbf{x}+e^t\begin{bmatrix}1\\0\end{bmatrix}.
$$

### Soru 2

$$
\mathbf{x}'=
\begin{bmatrix}-1&0\\0&-2\end{bmatrix}\mathbf{x}
+\begin{bmatrix}2\\6\end{bmatrix}
$$

sistemi için sabit özel çözümü bulun.

### Soru 3

Soru 2'deki sistemin genel çözümünü yazın ve $\mathbf{x}(0)=[0,0]^T$
başlangıç durumunu uygulayın.

### Soru 4

$$
\mathbf{x}'=
\begin{bmatrix}0&0\\0&-1\end{bmatrix}\mathbf{x}
+e^{2t}\begin{bmatrix}2\\1\end{bmatrix}
$$

sistemi için $\mathbf{x}_p=e^{2t}\mathbf{v}$ adayını kurun ve
$\mathbf{v}$'yi bulun.

### Soru 5

$e^{\lambda t}\mathbf{b}$ girdisinde $\lambda$ aynı zamanda $A$'nın bir
özdeğeriyse $e^{\lambda t}\mathbf{v}$ adayının neden başarısız olabileceğini
açıklayın; uygun adayda yapılacak değişikliği belirtin.

### Soru 6

Verilen

$$
\mathbf{x}_p(t)=\begin{bmatrix}1-e^{-t}\\2-2e^{-2t}\end{bmatrix}
$$

fonksiyonunun hangi sabit girdi altında
$\mathbf{x}'=\operatorname{diag}(-1,-2)\mathbf{x}+\mathbf{f}$ sistemini
sağladığını bulun.

### Soru 7

$\mathbf{x}'=A\mathbf{x}+\mathbf{f}(t)$ için temel matris yöntemiyle özel
çözüm integralini yazın. Bu soruda integrali hesaplamayın.

### Soru 8

Sabit girdi, üstel girdi ve genel sürekli girdi için ilk denenecek özel çözüm
yöntemini seçin; seçiminizi kısa bir tabloyla gerekçelendirin.

## Çalışmanızı Kontrol Etme

> Çözümümü $\mathbf{x}_h+\mathbf{x}_p$ ayrımı, sabit girdide eksi işareti,
> vektör adayın boyutu, özdeğerle çakışma ve yöntem maliyeti açısından incele.
> Hata varsa doğru vektörü vermeden ilk yanlış kurulum adımını belirt.
