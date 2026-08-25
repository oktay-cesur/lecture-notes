---
title: "Köşegenleştirme: Alıştırmalar"
subtitle: "Lineer Cebir — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-25
description: "Köşegenleştirilebilirlik, benzerlik ve matris kuvvetleri pratiği."
execute:
  echo: false
---

# Köşegenleştirme: Alıştırmalar

Bu çalışma; bir matrisin köşegenleştirilebilirliğine karar verme, özvektörlerden $P$ matrisini kurma, $D$ ile sütun sırasını eşleştirme ve köşegenleştirmeyi matris kuvvetlerinde kullanma becerilerini geliştirir.

$n\times n$ bir matris, ancak $n$ tane lineer bağımsız özvektöre sahipse köşegenleştirilebilir. Bu vektörler $P$'nin sütunlarına, karşılık gelen özdeğerler aynı sırayla $D$'nin köşegenine yerleştirilir.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
Bu çalışma notunu bir yapay zekâ aracına vererek yeni köşegenleştirme soruları ürettirebilirsiniz. Aracın çözümü hemen vermemesini, özellikle $P$ sütunlarıyla $D$ köşegeninin sırasını denetlemesini isteyin.

Örnek istem:

> Bu çalışma notundaki gösterime bağlı kal. Biri köşegenleştirilebilir, biri köşegenleştirilemez iki matris ver. Çözümleri başlangıçta verme; özuzay boyutlarımı ve $P,D$ eşleşmesini kontrol et.

Karma çalışma soruları için hazır cevap anahtarı verilmemiştir.
:::

## Köşegenleştirmeyi Kurmak

### Örnek 1: Özverileri Düzenlemek

$$
A=\begin{bmatrix}4&1\\2&3\end{bmatrix}
$$

matrisinin özdeğerleri $5$ ve $2$; karşılık gelen özvektörleri $(1,1)^T$ ve $(1,-2)^T$ olsun. İki özvektör bağımsızdır. Bu nedenle

$$
P=\begin{bmatrix}1&1\\1&-2\end{bmatrix},\qquad
D=\begin{bmatrix}5&0\\0&2\end{bmatrix}.
$$

$\det P=-3\neq0$ olduğundan $P$ tersinirdir.

### Örnek 2: Benzerlik Eşitliği

$$
P^{-1}=\begin{bmatrix}2/3&1/3\\1/3&-1/3\end{bmatrix}.
$$

Sütun eşitliklerini birlikte yazarsak $AP=PD$ elde edilir. Sağdan $P^{-1}$ ile çarparak

$$
\boxed{A=PDP^{-1}}
$$

buluruz. Eş değer biçim $D=P^{-1}AP$'dir.

## Matris Kuvvetleri

### Örnek 3: $A^n$ Formülü

$A=PDP^{-1}$ ise ara çarpanlar sadeleşir:

$$
A^n=PD^nP^{-1}.
$$

Örnek 1 için

$$
A^n=
\begin{bmatrix}1&1\\1&-2\end{bmatrix}
\begin{bmatrix}5^n&0\\0&2^n\end{bmatrix}
\begin{bmatrix}2/3&1/3\\1/3&-1/3\end{bmatrix}.
$$

### Örnek 4: Üçüncü Kuvvet

$$
D^3=\begin{bmatrix}125&0\\0&8\end{bmatrix}
$$

olduğundan

$$
A^3=PD^3P^{-1}
=\begin{bmatrix}86&39\\78&47\end{bmatrix}.
$$

Doğrudan üç kez matris çarpmak yerine yalnız köşegen elemanların kuvvetleri alınır.

## Köşegenleştirilebilirlik Kararı

### Örnek 5: Farklı Özdeğerler

$n\times n$ bir matrisin $n$ farklı özdeğeri varsa bunlara ait özvektörler lineer bağımsızdır. Dolayısıyla matris köşegenleştirilebilir.

Bu koşul yeterlidir, zorunlu değildir: tekrarlı özdeğere sahip bazı matrisler de köşegenleştirilebilir.

### Örnek 6: Tekrarlı Özdeğer ama Yeterli Özvektör

$$
C=\begin{bmatrix}2&0\\0&2\end{bmatrix}=2I
$$

matrisinin tek özdeğeri $2$ ve cebirsel katı $2$'dir. Buna karşın $E_2=\mathbb R^2$ olduğundan iki bağımsız özvektör vardır; $C$ zaten köşegendir.

### Örnek 7: Eksik Özvektör

$$
B=\begin{bmatrix}2&1\\0&2\end{bmatrix}
$$

için $E_2=\operatorname{span}\{(1,0)^T\}$ yalnız bir boyutludur. $2\times2$ matris için iki bağımsız özvektör bulunamadığından $B$ köşegenleştirilemez.

### Örnek 8: Katlarla Karar Vermek

Her özdeğer için

$$
1\leq \text{geometrik kat}\leq \text{cebirsel kat}
$$

olur. Bir matrisin köşegenleştirilebilmesi için bütün özdeğerlerde bu iki katın eşit olması ve geometrik katların toplamının $n$ olması gerekir.

## Hata Avı

### Örnek 9: Sütun Sırasını Bozmak

$P$'nin ilk sütunu $\lambda_1$ özdeğerine aitse $D$'nin ilk köşegen elemanı da $\lambda_1$ olmalıdır. $P$ sütunlarını değiştirip $D$'yi değiştirmemek $AP=PD$ eşitliğini bozar.

### Örnek 10: Her Tekrarlı Özdeğeri Engel Sanmak

Tekrarlı özdeğer tek başına köşegenleştirmeyi engellemez. Engel, yeterli sayıda lineer bağımsız özvektör bulunamamasıdır.

### Örnek 11: Benzerlik Sırasını Karıştırmak

$A=PDP^{-1}$ ve $D=P^{-1}AP$ doğrudur. Genel olarak $A=P^{-1}DP$ yazılamaz; çarpma sırası korunmalıdır.

## Adım Adım İşlem Pratiği

### Örnek 12

$A=\operatorname{diag}(1,3)$ için $P=I$, $D=A$ seçilebilir ve $A^n=\operatorname{diag}(1,3^n)$ olur.

### Örnek 13

$$
A=\begin{bmatrix}3&0\\0&-1\end{bmatrix}
$$

için $A^4=\operatorname{diag}(81,1)$'dir.

### Örnek 14

$$
A=\begin{bmatrix}1&1\\0&2\end{bmatrix}
$$

matrisinin özdeğerleri $1,2$'dir. Özvektörler sırasıyla $(1,0)^T,(1,1)^T$ seçilirse

$$
P=\begin{bmatrix}1&1\\0&1\end{bmatrix},\qquad D=\begin{bmatrix}1&0\\0&2\end{bmatrix}.
$$

### Örnek 15

Örnek 14 için $P^{-1}=\begin{bmatrix}1&-1\\0&1\end{bmatrix}$ ve $PDP^{-1}=A$ olur.

## Karma Çalışma Soruları

### Soru 1

$A=\begin{bmatrix}3&1\\0&2\end{bmatrix}$ matrisinin özdeğerlerini ve her özdeğere ait bir özvektörü bulun.

### Soru 2

Soru 1'deki verilerle $P$ ve $D$ matrislerini kurup $AP=PD$ eşitliğini denetleyin.

### Soru 3

Soru 1'deki matris için $A^5=PD^5P^{-1}$ ifadesini kullanarak $A^5$ değerini bulun.

### Soru 4

$B=\begin{bmatrix}4&1\\0&4\end{bmatrix}$ matrisinin köşegenleştirilebilir olup olmadığına özuzay boyutuyla karar verin.

### Soru 5

$C=\operatorname{diag}(2,2,5)$ matrisinin tekrarlı özdeğere rağmen neden köşegenleştirilebilir olduğunu açıklayın.

### Soru 6

Bir $3\times3$ matrisin üç farklı özdeğeri varsa neden köşegenleştirilebilir olduğunu açıklayın.

### Soru 7

$P=[v_1\ v_2\ v_3]$ ve $D=\operatorname{diag}(\lambda_1,\lambda_2,\lambda_3)$ için $AP=PD$ eşitliğinin sütunlar düzeyinde ne söylediğini yazın.

### Soru 8

$A=PDP^{-1}$ ise $A^{-1}$ matrisini $P$ ve $D$ cinsinden yazın. Bunun için hangi özdeğer koşulu gerekir?

### Soru 9

Köşegenleştirilebilir bir $A$ matrisinin özdeğerleri $2,-1$ ise $A^6$ matrisinin özdeğerlerini bulun.

### Soru 10

Bir özdeğerin cebirsel katı $3$, geometrik katı $2$ ise matrisin neden köşegenleştirilemeyeceğini açıklayın.

## Çalışmanızı Kontrol Etme

Çözümlerinizi tamamladıktan sonra aşağıdaki istemle yapay zekâdan geri bildirim alabilirsiniz:

> Aşağıya köşegenleştirme çözümlerimi ekleyeceğim. Sonuçları doğrudan vermeden özvektörlerin bağımsızlığını, $P$ sütunlarıyla $D$ köşegeninin sırasını, ters matris hesabını ve $AP=PD$ kontrolünü incele. İlk hatalı adımı göster ve tek bir ipucu ver.
