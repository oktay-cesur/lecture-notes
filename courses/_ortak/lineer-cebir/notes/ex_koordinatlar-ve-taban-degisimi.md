---
title: "Koordinatlar ve Taban Değişimi: Alıştırmalar"
subtitle: "Lineer Cebir — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-25
description: "Koordinat vektörü bulma ve taban değişim matrisi kurma pratiği."
execute:
  echo: false
---

# Koordinatlar ve Taban Değişimi: Alıştırmalar

Bu çalışma, bir vektörü seçilen tabanda yazmayı, koordinat sütunundan vektörü geri kurmayı ve iki taban arasında doğru yönlü geçiş matrisi oluşturmayı amaçlar.

Her hesapta tabanı sıralı liste olarak yazın. $v$ ile $[v]_B$ farklı nesnelerdir; koordinat sütununun bileşenleri yalnız belirtilen tabana göre anlam kazanır.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
Ek soru isterken başlangıç ve hedef tabanları açıkça yazın. Aracın matris yönünü alt indislerle sınamasını ve çözümü siz denemeden vermemesini isteyin.

> Bu çalışma notundaki gösterime bağlı kal. $\mathbb R^2$ ve $P_2$ üzerinde beş taban değişimi sorusu üret. Her soruda önce $P_{C\leftarrow B}$ matrisinin sütunlarını benim kurmamı bekle.

Karma çalışma soruları için hazır cevap anahtarı verilmemiştir.
:::

## Koordinat Vektörü

### Örnek 1: Düzlemde Koordinat Bulma

$$
B=\left(
\begin{bmatrix}1\\1\end{bmatrix},
\begin{bmatrix}1\\-1\end{bmatrix}
\right),\qquad
v=\begin{bmatrix}5\\1\end{bmatrix}.
$$

$v=c_1b_1+c_2b_2$ eşitliği

$$
c_1+c_2=5,\qquad c_1-c_2=1
$$

verir. Buradan $c_1=3$, $c_2=2$ ve

$$
\boxed{[v]_B=\begin{bmatrix}3\\2\end{bmatrix}}
$$

elde edilir.

**Kontrol.** $3b_1+2b_2=(5,1)^T$ olmalıdır.

### Örnek 2: Koordinattan Vektöre Dönmek

$$
[w]_B=\begin{bmatrix}-1\\4\end{bmatrix}
$$

ise

$$
w=-b_1+4b_2
=-\begin{bmatrix}1\\1\end{bmatrix}
+4\begin{bmatrix}1\\-1\end{bmatrix}
=\begin{bmatrix}3\\-5\end{bmatrix}.
$$

## Polinomlarda Koordinat

### Örnek 3: Standart Olmayan Polinom Tabanı

$$
B=(1+t,\ t+t^2,\ 1-t^2),\qquad p(t)=3+2t-t^2.
$$

$$
p=c_1(1+t)+c_2(t+t^2)+c_3(1-t^2)
$$

katsayı karşılaştırması

$$
c_1+c_3=3,\qquad c_1+c_2=2,\qquad c_2-c_3=-1
$$

verir. Bu sistemde bir denklem diğerlerinin sonucu olduğundan verilen liste bağımsız değildir; dolayısıyla $B$ taban olamaz ve koordinatlar benzersiz değildir.

**Tanı.** Koordinat hesabından önce verilen listenin gerçekten taban olduğunu denetleyin.

### Örnek 4: Geçerli Polinom Tabanı

$$
C=(1,\ 1+t,\ 1+t+t^2).
$$

$p(t)=2+3t+t^2$ için

$$
p=a\cdot1+b(1+t)+c(1+t+t^2)
$$

eşitliğinden $c=1$, $b+c=3$, $a+b+c=2$ bulunur. Dolayısıyla $a=-1$, $b=2$ ve

$$
[p]_C=\begin{bmatrix}-1\\2\\1\end{bmatrix}.
$$

## Taban Değişim Matrisi

### Örnek 5: Sütunlar Nereden Gelir?

$E=(e_1,e_2)$ standart taban ve önceki $B=(b_1,b_2)$ olsun. $B$ koordinatından standart koordinata geçiş matrisi

$$
P_{E\leftarrow B}
=\begin{bmatrix}[b_1]_E&[b_2]_E\end{bmatrix}
=\begin{bmatrix}1&1\\1&-1\end{bmatrix}.
$$

$$
[v]_E=P_{E\leftarrow B}[v]_B
=\begin{bmatrix}1&1\\1&-1\end{bmatrix}
\begin{bmatrix}3\\2\end{bmatrix}
=\begin{bmatrix}5\\1\end{bmatrix}.
$$

### Örnek 6: Ters Yön

$$
P_{B\leftarrow E}=P_{E\leftarrow B}^{-1}
=\frac12\begin{bmatrix}1&1\\1&-1\end{bmatrix}.
$$

Bu matris standart koordinatları $B$ koordinatlarına taşır:

$$
[v]_B=P_{B\leftarrow E}[v]_E.
$$

**Kontrol.** Alt indisleri sağdan sola okuyun: giriş sağda, çıkış solda.

### Örnek 7: İki Standart Olmayan Taban

$$
B=((1,0)^T,(1,1)^T),\qquad
C=((1,1)^T,(1,-1)^T).
$$

$b_1=(1,0)^T=\tfrac12c_1+\tfrac12c_2$ ve $b_2=(1,1)^T=c_1$ olduğundan

$$
P_{C\leftarrow B}
=\begin{bmatrix}1/2&1\\1/2&0\end{bmatrix}.
$$

Sütunlar sırasıyla $[b_1]_C$ ve $[b_2]_C$'dir.

## İşlemler ve Koordinatlar

### Örnek 8: Aynı Tabanda Toplama

$$
[u]_B=\begin{bmatrix}2\\-1\end{bmatrix},qquad
[v]_B=\begin{bmatrix}3\\4\end{bmatrix}
$$

ise

$$
[u+v]_B=\begin{bmatrix}5\\3\end{bmatrix},qquad
[2u]_B=\begin{bmatrix}4\\-2\end{bmatrix}.
$$

Farklı tabanlarda yazılmış koordinat sütunları önce ortak tabana taşınmalıdır.

## Hata Avı

### Örnek 9: Vektör ile Koordinatı Özdeş Saymak

$[v]_B=(3,2)^T$ olması, standart koordinatlarda $v=(3,2)^T$ olduğu anlamına gelmez. Önce $3b_1+2b_2$ kurulmalıdır.

### Örnek 10: Sütunları Ters Kurmak

$P_{C\leftarrow B}$ matrisinin sütunlarına $[c_j]_B$ yazmak ters yönün matrisini üretir. Doğru sütunlar $[b_j]_C$'dir.

### Örnek 11: Taban Sırasını Unutmak

$(b_1,b_2)$ ile $(b_2,b_1)$ aynı vektörleri içerir; fakat koordinatların bileşen sırası değişir. Taban sıralı bir listedir.

## Adım Adım İşlem Pratiği

### Örnek 12

$B=((2,0)^T,(0,3)^T)$ ve $v=(8,6)^T$ için $[v]_B=(4,2)^T$.

### Örnek 13

$B=(1,t,t^2)$ ve $p=4-2t+5t^2$ için $[p]_B=(4,-2,5)^T$.

### Örnek 14

$P_{E\leftarrow B}=\begin{bmatrix}2&0\\0&3\end{bmatrix}$ ve tersi $P_{B\leftarrow E}=\begin{bmatrix}1/2&0\\0&1/3\end{bmatrix}$.

### Örnek 15

$$
P_{D\leftarrow B}=P_{D\leftarrow C}P_{C\leftarrow B}.
$$

En sağdaki geçiş önce uygulanır; ara taban indisleri eşleşir.

## Karma Çalışma Soruları

### Soru 1

$B=((1,2)^T,(2,1)^T)$ ve $v=(5,4)^T$ için $[v]_B$ koordinatını bulun.

### Soru 2

$B=((1,1,0)^T,(0,1,1)^T,(1,0,1)^T)$ tabanında $v=(4,3,5)^T$ koordinatını bulun.

### Soru 3

$B=(1,1+t,1+t+t^2)$ ve $p=4+3t+2t^2$ için $[p]_B$'yi bulun.

### Soru 4

$[v]_B=(-2,3)^T$ ve $B=((2,1)^T,(1,-1)^T)$ ise $v$'yi standart koordinatlarda yazın.

### Soru 5

$B=((1,0)^T,(1,2)^T)$ için $P_{E\leftarrow B}$ ve $P_{B\leftarrow E}$ matrislerini bulun.

### Soru 6

$B=((1,1)^T,(1,-1)^T)$ ve $C=((2,0)^T,(0,1)^T)$ için $P_{C\leftarrow B}$ matrisini kurun.

### Soru 7

Bir tabanın vektörlerinin sırası değiştirildiğinde geçiş matrisinin hangi kısmı değişir?

### Soru 8

$P_{C\leftarrow B}=\begin{bmatrix}1&2\\0&1\end{bmatrix}$ ve $[v]_B=(3,-1)^T$ için $[v]_C$'yi bulun.

### Soru 9

$[u]_B=(1,2)^T$, $[v]_C=(3,4)^T$ verildiğinde bu sütunların neden doğrudan toplanamayacağını açıklayın.

### Soru 10

$P_{D\leftarrow C}$ ve $P_{C\leftarrow B}$ verildiğinde $B$'den $D$'ye geçişin çarpım sırasını gerekçelendirin.

## Çalışmanızı Kontrol Etme

Her sonuçta koordinat sütunundan vektörü geri kurarak kontrol yapın. Geçiş matrisinde alt indisleri sağdan sola okuyun ve sütunların doğru taban vektörlerine ait olduğunu sınayın.

> Çözümümü vektör–koordinat ayrımı, taban sırası, $P_{C\leftarrow B}$ yönü, sütunların $[b_j]_C$ olması ve ters matris ilişkisi açısından incele. Hata varsa doğru matrisi hemen verme; önce yön veya sütun seçimindeki hatayı belirt.
