---
title: "Lineer Dönüşümler ve Matrisleri: Alıştırmalar"
subtitle: "Lineer Cebir — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-25
description: "Lineerlik, dönüşüm matrisi, çekirdek, görüntü ve bileşke pratiği."
execute:
  echo: false
---

# Lineer Dönüşümler ve Matrisleri: Alıştırmalar

Bu çalışma; bir dönüşümün lineerliğini sınama, standart ve standart olmayan tabanlarda dönüşüm matrisi kurma, çekirdek ile görüntüyü bulma ve dönüşümlerin bileşkesini matris çarpımıyla gösterme becerilerini geliştirir.

Bir dönüşümün matrisi, tanım uzayı taban vektörlerinin görüntülerini sütunlarda toplar. Sütunların koordinatları değer uzayında seçilen tabana göre yazılmalıdır.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
Bu çalışma notunu bir yapay zekâ aracına vererek yeni lineer dönüşüm soruları ürettirebilirsiniz. Aracın çözümü hemen vermemesini; önce uzayları, tabanları ve matris boyutlarını denetlemesini isteyin.

Örnek istem:

> Bu çalışma notundaki gösterime bağlı kal. Lineerlik testi, dönüşüm matrisi ve çekirdek-görüntü konularından ikişer soru üret. Çözümleri başlangıçta verme; ilk yanlış adımımda yalnız ilgili tanımı hatırlat.

Karma çalışma soruları için hazır cevap anahtarı verilmemiştir.
:::

## Lineerlik Testi

### Örnek 1: Matris Dönüşümü

$T:\mathbb R^2\to\mathbb R^2$,

$$
T(x,y)=(x+2y,3x-y)
$$

olsun. Bu dönüşüm

$$
T(x)=Ax,\qquad A=\begin{bmatrix}1&2\\3&-1\end{bmatrix}
$$

biçiminde olduğundan lineerdir. Gerçekten $T(au+bv)=aT(u)+bT(v)$ eşitliği sağlanır.

### Örnek 2: Sabit Terim Lineerliği Bozar

$$
S(x,y)=(x+1,y)
$$

için $S(0,0)=(1,0)\neq(0,0)$ olur. Lineer dönüşümler sıfırı sıfıra göndermek zorunda olduğundan $S$ lineer değildir.

### Örnek 3: Türev Dönüşümü

$D:P_2\to P_1$, $D(p)=p'$ dönüşümü lineerdir; çünkü

$$
D(ap+bq)=aD(p)+bD(q).
$$

Farklı türden nesnelerle çalışılması lineerliğe engel değildir; işlemlerin vektör uzayı yapısıyla uyumuna bakılır.

## Dönüşüm Matrisini Kurmak

### Örnek 4: Sütunlar Taban Görüntüleridir

$T:\mathbb R^2\to\mathbb R^3$ için

$$
T(e_1)=\begin{bmatrix}1\\0\\2\end{bmatrix},\qquad
T(e_2)=\begin{bmatrix}-1\\3\\1\end{bmatrix}
$$

verilsin. Standart matris

$$
[T]=\begin{bmatrix}1&-1\\0&3\\2&1\end{bmatrix}
$$

olur. Matrisin iki sütunu tanım uzayının, üç satırı değer uzayının boyutundan gelir.

### Örnek 5: Polinom Türevinin Matrisi

Tanım uzayında $B=(1,t,t^2)$, değer uzayında $C=(1,t)$ tabanlarını kullanalım:

$$
D(1)=0,\qquad D(t)=1,\qquad D(t^2)=2t.
$$

Bu görüntülerin $C$-koordinatları sütunlara yazılır:

$$
[D]_{C\leftarrow B}
=\begin{bmatrix}0&1&0\\0&0&2\end{bmatrix}.
$$

## Çekirdek ve Görüntü

### Örnek 6: Çekirdeği Bulmak

$$
A=\begin{bmatrix}1&2\\2&4\end{bmatrix}
$$

ile verilen $T(x)=Ax$ dönüşümünde $Ax=0$ denklemi $x_1+2x_2=0$ verir. Böylece

$$
\operatorname{Ker}(T)
=\operatorname{span}\left\{\begin{bmatrix}-2\\1\end{bmatrix}\right\}.
$$

Çekirdek, tanım uzayının alt uzayıdır.

### Örnek 7: Görüntüyü Bulmak

Aynı dönüşüm için ikinci sütun birincinin iki katıdır. Dolayısıyla

$$
\operatorname{Im}(T)=\operatorname{Col}(A)
=\operatorname{span}\left\{\begin{bmatrix}1\\2\end{bmatrix}\right\}.
$$

Görüntü, değer uzayının alt uzayıdır.

### Örnek 8: Boyut Teoremi

Örnek 6'da $\dim\operatorname{Ker}(T)=1$ ve $\dim\operatorname{Im}(T)=1$'dir. Tanım uzayı $\mathbb R^2$ olduğundan

$$
\dim\operatorname{Ker}(T)+\dim\operatorname{Im}(T)=1+1=2.
$$

Bu, rank–nullity boyut teoremidir.

## Bileşke

### Örnek 9: Çarpma Sırası

$T:\mathbb R^2\to\mathbb R^3$ matrisinin $A$, $S:\mathbb R^3\to\mathbb R^2$ matrisinin $B$ olduğunu varsayalım. Önce $T$, sonra $S$ uygulanırsa

$$
(S\circ T)(x)=S(T(x))=B(Ax)=(BA)x.
$$

Bileşkenin matrisi $BA$'dır; uygulama sırasının ters yönünde yazılır.

## Hata Avı

### Örnek 10: Yalnız Toplamayı Sınamak

$T(u+v)=T(u)+T(v)$ tek başına yeterli değildir. $T(cu)=cT(u)$ koşulu da bütün skalerler için sağlanmalıdır. İki koşul, $T(au+bv)=aT(u)+bT(v)$ biçiminde birlikte sınanabilir.

### Örnek 11: Görüntüleri Satırlara Yazmak

$T(e_j)$ vektörleri matrisin satırları değil sütunlarıdır. $T(x)=x_1T(e_1)+\cdots+x_nT(e_n)$ eşitliği sütun düzenini açıklar.

### Örnek 12: Çekirdek ile Görüntüyü Karıştırmak

$\operatorname{Ker}(T)$ tanım uzayında ve $\operatorname{Im}(T)$ değer uzayında yaşar. Matris $m\times n$ ise çekirdek $\mathbb R^n$, görüntü $\mathbb R^m$ içindedir.

## Adım Adım İşlem Pratiği

### Örnek 13

$T(x,y)=(2x-y,x+3y)$ için

$$
[T]=\begin{bmatrix}2&-1\\1&3\end{bmatrix}.
$$

### Örnek 14

$T:\mathbb R^3\to\mathbb R$, $T(x,y,z)=x-2y+z$ için $[T]=\begin{bmatrix}1&-2&1\end{bmatrix}$ olur.

### Örnek 15

$T(x,y)=(x,0)$ için $\operatorname{Ker}(T)=\operatorname{span}\{(0,1)^T\}$ ve $\operatorname{Im}(T)=\operatorname{span}\{(1,0)^T\}$'dir.

### Örnek 16

$T(x)=2x$ ve $S(x)=x$ dönüşümleri $\mathbb R^2$ üzerinde sırasıyla $2I$ ve $I$ matrislerine sahiptir. $S\circ T$ matrisinin $I(2I)=2I$ olması bileşke sırasıyla uyumludur.

## Karma Çalışma Soruları

### Soru 1

$T(x,y)=(x-y,2x+3y)$ dönüşümünün lineer olduğunu tanımdan gösterin.

### Soru 2

$S(x,y)=(xy,y)$ dönüşümünün lineer olmadığını uygun bir karşı örnekle gösterin.

### Soru 3

$T:\mathbb R^2\to\mathbb R^3$, $T(x,y)=(x+y,2x,y)$ dönüşümünün standart matrisini bulun.

### Soru 4

$T(e_1)=(1,2)^T$ ve $T(e_2)=(3,-1)^T$ verilerinden $T(2,-1)^T$ değerini bulun.

### Soru 5

$D:P_3\to P_2$, $D(p)=p'$ dönüşümünün $B=(1,t,t^2,t^3)$ ve $C=(1,t,t^2)$ tabanlarındaki matrisini kurun.

### Soru 6

$A=\begin{bmatrix}1&-1&0\\0&1&1\end{bmatrix}$ ile verilen dönüşümün çekirdeği için bir taban bulun.

### Soru 7

Soru 6'daki dönüşümün görüntüsü için özgün matris sütunlarından bir taban seçin.

### Soru 8

Soru 6 ve 7'de bulduğunuz boyutların rank–nullity teoremini sağladığını gösterin.

### Soru 9

$T$ matrisinin $A$ ve $S$ matrisinin $B$ olduğu uygun boyutlu dönüşümler için $T\circ S$ ile $S\circ T$ matrislerini yazın ve neden genellikle farklı olduklarını açıklayın.

### Soru 10

Lineer bir $T:V\to W$ dönüşümünün birebir olmasıyla $\operatorname{Ker}(T)=\{0\}$ koşulu arasındaki ilişkiyi açıklayın.

## Çalışmanızı Kontrol Etme

Çözümlerinizi tamamladıktan sonra aşağıdaki istemle yapay zekâdan geri bildirim alabilirsiniz:

> Aşağıya lineer dönüşüm çözümlerimi ekleyeceğim. Sonuçları doğrudan vermeden sıfır vektörü ve lineer birleşim testlerini, matris sütunlarının sırasını, çekirdek-görüntü uzaylarını ve bileşke çarpımının sırasını denetle. İlk hatalı adımı göster ve tek bir düzeltme ipucu ver.
