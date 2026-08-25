---
title: "Özdeğer ve Özvektör: Alıştırmalar"
subtitle: "Lineer Cebir — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-25
description: "Özdeğer, özvektör, karakteristik polinom ve özuzay pratiği."
execute:
  echo: false
---

# Özdeğer ve Özvektör: Alıştırmalar

Bu çalışma; özvektör adaylarını sınama, karakteristik polinomdan özdeğer bulma, her özdeğere ait özuzayı belirleme ve cebirsel-geometrik katları ayırt etme becerilerini geliştirir.

$v\neq0$ olmak üzere $Av=\lambda v$ eşitliği sağlanıyorsa $v$, $A$'nın $\lambda$ özdeğerine ait özvektörüdür. Her özdeğer için özvektörler $(A-\lambda I)v=0$ homojen sisteminden bulunur.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
Bu çalışma notunu bir yapay zekâ aracına verip yeni özdeğer ve özvektör soruları isteyebilirsiniz. Aracın çözümü hemen vermemesini, karakteristik polinomunuzu ve her özuzayın sıfır olmayan vektörlerini ayrı ayrı denetlemesini isteyin.

Örnek istem:

> Bu çalışma notundaki gösterime bağlı kal. İki tane $2\times2$ özdeğer sorusu ve bir üçgensel matris sorusu üret. Çözümü başlangıçta verme; önce karakteristik polinomumu kontrol et ve yalnız bir ipucu ver.

Karma çalışma soruları için hazır cevap anahtarı verilmemiştir.
:::

## Özvektör Adayını Sınama

### Örnek 1: Doğrudan Çarpım

$$
A=\begin{bmatrix}4&1\\2&3\end{bmatrix},\qquad
v=\begin{bmatrix}1\\1\end{bmatrix}.
$$

$$
Av=\begin{bmatrix}5\\5\end{bmatrix}
=5\begin{bmatrix}1\\1\end{bmatrix}.
$$

Dolayısıyla $v$, $\lambda=5$ özdeğerine ait bir özvektördür.

### Örnek 2: Yön Değişmiyorsa

Aynı matris için $w=(1,-2)^T$ alınırsa

$$
Aw=\begin{bmatrix}2\\-4\end{bmatrix}=2w.
$$

Bu nedenle $w$ de $\lambda=2$ özdeğerine ait bir özvektördür. Matris bu doğrultuyu döndürmez; yalnız $2$ katına çıkarır.

## Karakteristik Polinom

### Örnek 3: Özdeğerleri Bulmak

$$
\det(A-\lambda I)
=\det\begin{bmatrix}4-\lambda&1\\2&3-\lambda\end{bmatrix}
=(4-\lambda)(3-\lambda)-2
=\lambda^2-7\lambda+10.
$$

$$
\lambda^2-7\lambda+10=(\lambda-5)(\lambda-2)=0
$$

olduğundan özdeğerler $5$ ve $2$'dir.

**Kontrol.** $2\times2$ matris için özdeğerlerin toplamı iz değerine $7$, çarpımı determinanta $10$ eşittir.

## Özuzaylar

### Örnek 4: $\lambda=5$ Özuzayı

$$
A-5I=\begin{bmatrix}-1&1\\2&-2\end{bmatrix}.
$$

$(A-5I)v=0$ sistemi $-x+y=0$ verir. Böylece

$$
E_5=\operatorname{Null}(A-5I)
=\operatorname{span}\left\{\begin{bmatrix}1\\1\end{bmatrix}\right\}.
$$

### Örnek 5: $\lambda=2$ Özuzayı

$$
A-2I=\begin{bmatrix}2&1\\2&1\end{bmatrix}
$$

olduğundan $2x+y=0$ ve

$$
E_2=\operatorname{span}\left\{\begin{bmatrix}1\\-2\end{bmatrix}\right\}.
$$

Sıfır vektörü özuzayın elemanıdır ama özvektör değildir.

## Özel Matrisler ve Katlar

### Örnek 6: Üçgensel Matris

$$
T=\begin{bmatrix}5&3\\0&-1\end{bmatrix}.
$$

Üçgensel matrisin özdeğerleri köşegen elemanlarıdır: $5$ ve $-1$. $\lambda=5$ için özuzay $\operatorname{span}\{(1,0)^T\}$; $\lambda=-1$ için özuzay $\operatorname{span}\{(-1,2)^T\}$ olur.

### Örnek 7: Tekrarlı Özdeğer

$$
B=\begin{bmatrix}2&1\\0&2\end{bmatrix}
$$

matrisinin karakteristik polinomu $(\lambda-2)^2$'dir. $2$ özdeğerinin cebirsel katı $2$ iken

$$
E_2=\operatorname{Null}(B-2I)
=\operatorname{span}\left\{\begin{bmatrix}1\\0\end{bmatrix}\right\}
$$

olduğundan geometrik katı $1$'dir.

### Örnek 8: Gerçek Özdeğeri Olmayan Matris

$$
R=\begin{bmatrix}0&-1\\1&0\end{bmatrix}
$$

için karakteristik polinom $\lambda^2+1$'dir. Gerçek sayılar üzerinde kökü yoktur; dolayısıyla gerçek özdeğer ve özvektör yoktur. Karmaşık sayılar üzerinde özdeğerler $i$ ve $-i$'dir.

## Sıfır Özdeğeri ve Tersinirlik

### Örnek 9

$0$ bir özdeğerse $Av=0$ eşitliğini sağlayan sıfır olmayan bir $v$ vardır. Bu, $\operatorname{Null}(A)$'nın sıfırdan farklı olduğu ve $A$'nın tersinir olmadığı anlamına gelir. Kare matrisler için

$$
0\text{ özdeğerdir}\quad\Longleftrightarrow\quad\det A=0.
$$

## Hata Avı

### Örnek 10: Sıfır Vektörünü Özvektör Saymak

$A0=\lambda0$ her $\lambda$ için doğrudur. Bu yüzden tanımda özellikle $v\neq0$ koşulu bulunur.

### Örnek 11: Yalnız Bir Denklemi Kullanmak

$Av=\lambda v$ bir vektör eşitliğidir; bütün bileşenler aynı $\lambda$ ile uyuşmalıdır. Tek bir bileşenden bulunan oran yeterli değildir.

### Örnek 12: Cebirsel ve Geometrik Katı Eşitlemek

Geometrik kat $\dim E_\lambda$, cebirsel kat ise karakteristik polinomdaki kök katıdır. Geometrik kat cebirsel katı aşamaz ama her zaman ona eşit olmak zorunda değildir.

## Adım Adım İşlem Pratiği

### Örnek 13

$D=\operatorname{diag}(3,-2,4)$ matrisinin özdeğerleri $3,-2,4$; karşılık gelen standart özvektörleri $e_1,e_2,e_3$'tür.

### Örnek 14

$$
C=\begin{bmatrix}1&2\\0&3\end{bmatrix}
$$

için özdeğerler $1$ ve $3$'tür. $E_1=\operatorname{span}\{(1,0)^T\}$ ve $E_3=\operatorname{span}\{(1,1)^T\}$ olur.

### Örnek 15

$A$'nın özdeğerleri $2$ ve $-3$ ise $A^2$'nin aynı özvektörlere karşılık gelen özdeğerleri $4$ ve $9$'dur; çünkü $A^2v=A(\lambda v)=\lambda^2v$.

### Örnek 16

$A$ tersinir ve $Av=\lambda v$ ise $\lambda\neq0$ ve $A^{-1}v=(1/\lambda)v$ olur.

## Karma Çalışma Soruları

### Soru 1

$A=\begin{bmatrix}3&1\\0&2\end{bmatrix}$ için $(1,0)^T$ ve $(1,-1)^T$ vektörlerinin özvektör olup olmadığını sınayın.

### Soru 2

$A=\begin{bmatrix}2&4\\1&2\end{bmatrix}$ matrisinin karakteristik polinomunu ve özdeğerlerini bulun.

### Soru 3

Soru 2'deki her özdeğer için bir özuzay tabanı bulun.

### Soru 4

$T=\begin{bmatrix}-1&2&0\\0&3&4\\0&0&5\end{bmatrix}$ matrisinin özdeğerlerini işlem yapmadan yazın.

### Soru 5

$B=\begin{bmatrix}4&1\\0&4\end{bmatrix}$ için $4$ özdeğerinin cebirsel ve geometrik katlarını bulun.

### Soru 6

$A$'nın özdeğerleri $1,-2,3$ ise $\det A$ ve $\operatorname{tr}(A)$ değerlerini bulun.

### Soru 7

$0$ özdeğerine sahip kare bir matrisin neden tersinir olmadığını açıklayın.

### Soru 8

$Av=5v$ ise $(A-2I)v$ ve $A^3v$ ifadelerini $v$ cinsinden yazın.

### Soru 9

$R=\begin{bmatrix}0&-1\\1&0\end{bmatrix}$ matrisinin gerçek özvektörü olmadığını geometrik olarak açıklayın.

### Soru 10

Bir özuzayın neden sıfır vektörünü içerdiğini, fakat sıfır vektörünün neden özvektör sayılmadığını açıklayın.

## Çalışmanızı Kontrol Etme

Çözümlerinizi tamamladıktan sonra aşağıdaki istemle yapay zekâdan geri bildirim alabilirsiniz:

> Aşağıya özdeğer ve özvektör çözümlerimi ekleyeceğim. Sonuçları doğrudan vermeden determinant işaretlerini, karakteristik polinomu, $(A-\lambda I)v=0$ sistemini ve özvektörlerin sıfır olmaması koşulunu denetle. İlk hatalı adımı göster ve tek bir ipucu ver.
