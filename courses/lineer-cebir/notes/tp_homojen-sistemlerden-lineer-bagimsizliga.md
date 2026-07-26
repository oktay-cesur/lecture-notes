---
title: "Homojen Sistemlerden Lineer Bağımsızlığa"
subtitle: "MATE 213 — İlk Öğretim Bloğu"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-21
execute:
  echo: false
---

## Homojen Denklem Sistemi

$$
\boxed{Ax=0}
$$

Bütün denklemlerin sağ tarafı sıfırdır.

$$
A0=0
$$

Bu nedenle $x=0$ her zaman bir çözümdür.

::: {.notes}
Homojen sistemde sonuç vektörü sıfırdır. Matris–vektör çarpımı sıfır vektörünü her zaman sıfır vektörüne gönderdiği için sistem hiçbir zaman çözümsüz değildir.

$x=0$ çözümüne trivial çözüm denir. Homojen sistemin asıl yapısal sorusu çözümün var olup olmadığı değil, sıfır çözümünden başka çözümlerin bulunup bulunmadığıdır.
:::

---

## Neden Hiçbir Homojen Sistem Çözümsüz Değildir?

Genişletilmiş matris:

$$
[A\mid 0]
$$

Satır işlemleri sağ sütunu sıfır bırakır:

$$
[\,0\ \ 0\ \cdots\ 0\mid c\,],\qquad c\neq0
$$

satırı oluşamaz.

$$
\boxed{\operatorname{rank}(A)=\operatorname{rank}([A\mid0])}
$$

::: {.notes}
Tutarsızlığın tek kaynağı, eliminasyon sırasında sol tarafı tamamen sıfırlanmış ama sağ tarafı sıfırdan farklı kalan bir satırın ortaya çıkmasıdır; böyle bir satır $0=c$ gibi imkânsız bir denklem anlatır. Homojen sistemde sağ taraf sütunu baştan sıfırdır ve her elementer satır işlemi sıfırlardan yine sıfır üretir: satır değiştirme sıfırların yerini değiştirir, sıfırdan farklı bir skalerle çarpma sıfırı korur, bir satırın katını başka satıra eklemek sıfıra sıfır ekler.

Bu nedenle sağ sütun bütün eliminasyon boyunca sıfır kalır ve katsayı matrisinin rankı ile genişletilmiş matrisin rankı hiçbir zaman ayrışmaz. Tutarlılık ölçütü olan rank eşitliği homojen sistemlerde otomatik sağlanır. Uygulamada bunun anlamı, homojen bir sistemde eliminasyonun sağ sütununu yazmaya gerek kalmamasıdır; yalnız $A$ üzerinde çalışmak yeterlidir.
:::

---

## Temel Soru

$$
Ax=0
$$

> Sıfır çözümünden başka çözüm var mı?

| Durum | Anlam |
|---|---|
| yalnız $x=0$ | trivial çözüm |
| bazı $x\neq0$ için $Ax=0$ | trivial olmayan çözüm |

::: {.notes}
Trivial olmayan bir çözüm, matrisin sıfırdan farklı bir girdi yönünü tamamen yok ettiğini gösterir. Bu durum bilgi kaybı, tersinir olmama ve sütunlar arasında bağımlılık ile aynı yapının farklı ifadeleridir.

Sorunun cevabı eliminasyonla bulunur. Homojen sistem tutarlı olduğundan yalnız pivotların bütün bilinmeyen sütunlarını kapsayıp kapsamadığına bakılır.
:::

---

## Pivotlar Cevabı Belirler

$A\in\mathbb{R}^{m\times n}$ için:

$$
\operatorname{rank}(A)=n
\quad\Longrightarrow\quad
x=0\text{ tek çözüm}
$$

$$
\operatorname{rank}(A)<n
\quad\Longrightarrow\quad
\text{trivial olmayan sonsuz çözüm}
$$

::: {.notes}
Her bilinmeyen sütununda pivot varsa bütün değişkenler temel değişkendir. Sağ taraf sıfır olduğundan geriye yerine koyma bütün değişkenleri sıfıra zorlar.

Rank bilinmeyen sayısından küçükse en az bir serbest değişken vardır. Serbest değişkene sıfırdan farklı bir değer seçildiğinde ona bağlı pivot değişkenlerle birlikte trivial olmayan bir çözüm elde edilir. Parametreler gerçek sayılar içinden seçilebildiği için bu çözümler sonsuzdur.
:::

---

## Bir Çözüm Neden Sonsuz Çözüm Getirir?

$u\neq0$ ve $Au=0$ olsun. Her $\alpha\in\mathbb{R}$ için:

$$
A(\alpha u)=\alpha Au=\alpha 0=0
$$

$$
u,\quad 2u,\quad -u,\quad \tfrac12u,\ \ldots
$$

hepsi çözümdür.

$$
\boxed{\text{tek çözüm }x=0\quad\text{veya}\quad\text{sonsuz çözüm}}
$$

::: {.notes}
Homojen sistemde çözüm sayısı "bir" ile "sonsuz" arasında bir değer alamaz. Trivial olmayan tek bir $u$ çözümü bulunduğunda, matris–vektör çarpımının skalerle uyumu sayesinde $u$'nun bütün skaler katları da çözüm olur. $u$ sıfırdan farklı olduğu için farklı $\alpha$ değerleri farklı vektörler üretir; gerçek sayılar sonsuz olduğundan çözüm kümesi sonsuzdur.

Bu argümanın rank diliyle söylediği şey aynıdır: serbest değişken bir tane bile olsa o değişken sonsuz farklı değer alabilir. Dolayısıyla "iki çözümü var" ya da "birkaç ek çözümü var" biçiminde bir homojen sistem yoktur. Geometrik okuması: sıfıra gönderilen sıfırdan farklı bir yön varsa, o yön boyunca uzanan bütün doğru sıfıra gönderilir.
:::

---

## Değişken Sayısı Denklem Sayısından Fazlaysa

$$
A\in\mathbb{R}^{m\times n},\qquad n>m
$$

$$
\operatorname{rank}(A)\leq m<n
$$

Dolayısıyla $Ax=0$ mutlaka trivial olmayan çözümlere sahiptir.

::: {.notes}
Bir matrisin pivot sayısı satır sayısını aşamaz. Bilinmeyen sayısı denklem sayısından büyükse bütün bilinmeyen sütunlarına pivot yerleştirmek mümkün değildir. En az bir serbest değişken zorunlu olarak kalır.

Bu sonuç katsayıların özel değerlerinden bağımsızdır. Daha fazla bilinmeyen yönünü daha az sayıda bağımsız denklemle sıfıra yalnız trivial biçimde sabitlemek mümkün değildir.
:::

---

## Yalnız Trivial Çözüm Örneği

$$
A=\begin{bmatrix}
1&2\\
0&3\\
2&1
\end{bmatrix}
$$

İlk iki satır iki pivot üretir:

$$
\operatorname{rank}(A)=2=n
$$

$$
\boxed{Ax=0\Rightarrow x=0}
$$

::: {.notes}
Eliminasyon adımları açıkça izlenebilir. Birinci pivot $(1,1)$ konumundaki $1$'dir; altındaki tek sıfırdan farklı eleman üçüncü satırdadır ve $R_3\leftarrow R_3-2R_1$ işlemi üçüncü satırı $(0,-3)$ yapar. Matris bu adımda
$$
\begin{bmatrix}1&2\\0&3\\0&-3\end{bmatrix}
$$
biçimindedir. İkinci pivot $(2,2)$ konumundaki $3$'tür; $R_3\leftarrow R_3+R_2$ işlemi üçüncü satırı tamamen sıfırlar. Sıfır satırının sağ tarafı da sıfır olduğu için çelişki doğmaz, yalnız o denklemin yeni bilgi taşımadığı anlaşılır.

Basamak biçiminde iki pivot, iki bilinmeyen sütununun ikisini de kapsar. Geriye yerine koymada ikinci denklem $3x_2=0$, yani $x_2=0$ verir; birinci denklem $x_1+2x_2=0$ olduğundan $x_1=0$ elde edilir. Homojen sistemin yalnız trivial çözüme sahip olması için matrisin kare olması gerekmez; gerekli koşul sütun tam rankıdır. Burada üç denklem bulunması, denklem sayısının fazlalığının çözüm sayısını değil yalnız fazlalık satır üretme ihtimalini artırdığını gösterir.
:::

---

## Trivial Olmayan Çözüm Örneği

$$
A=\begin{bmatrix}
1&2&-1\\
2&4&-2
\end{bmatrix}
$$

$$
\operatorname{RREF}(A)=
\begin{bmatrix}
1&2&-1\\
0&0&0
\end{bmatrix}
$$

$x_2$ ve $x_3$ serbesttir.

::: {.notes}
Tek adım yeterlidir: $R_2\leftarrow R_2-2R_1$ işlemi ikinci satırı $(0,0,0)$ yapar, çünkü ikinci satır baştan birinci satırın iki katıdır. Homojen sistemde sağ taraf sıfır olduğundan bu sıfır satırı çelişki değil, ikinci denklemin birinciden bağımsız bir bilgi taşımadığı anlamına gelir. Geriye yalnız bir pivot kalır; birinci sütun pivot sütunu, ikinci ve üçüncü sütunlar serbest sütunlardır. Denklem $x_1+2x_2-x_3=0$ biçimindedir. $x_2=s$ ve $x_3=t$ seçilirse $x_1=-2s+t$ olur.

$s$ veya $t$ sıfırdan farklı seçildiğinde trivial olmayan bir çözüm oluşur. Örneğin $(s,t)=(1,0)$ seçimi $x=(-2,1,0)^T$ verir ve doğrudan $Ax=0$ doğrulanır.
:::

---

## Parametrik Homojen Çözüm

$$
\begin{bmatrix}x_1\\x_2\\x_3\end{bmatrix}
=
\begin{bmatrix}-2s+t\\s\\t\end{bmatrix}
$$

$$
=s\begin{bmatrix}-2\\1\\0\end{bmatrix}
+t\begin{bmatrix}1\\0\\1\end{bmatrix},\qquad s,t\in\mathbb{R}
$$

::: {.notes}
Homojen çözümde sabit bir özel çözüm terimi yoktur; bütün çözümler serbest parametrelerle çarpılan yön vektörlerinin lineer birleşimidir. Sıfır çözümü $s=t=0$ seçimiyle elde edilir.

Parametrelerin katsayı vektörleri çözüm kümesinin temel yönlerini taşır. Her biri ayrı ayrı $Ax=0$ eşitliğini sağlar ve bütün homojen çözümler bu vektörlerden üretilir.
:::

---

## Temel Çözüm Sistemi

$$
\begin{aligned}
x_1+2x_3-x_4&=0,\\
x_2-x_3+3x_4&=0
\end{aligned}
$$

$x_3=s$, $x_4=t$ için:

$$
x=s\begin{bmatrix}-2\\1\\1\\0\end{bmatrix}
+t\begin{bmatrix}1\\-3\\0\\1\end{bmatrix}
$$

::: {.notes}
Serbest değişkenlere sırayla birim değer verilerek elde edilen

$$
v_1=(-2,1,1,0)^T,\qquad v_2=(1,-3,0,1)^T
$$

vektörleri temel çözüm sistemini oluşturur. Her homojen çözüm $sv_1+tv_2$ biçiminde ve tek biçimde yazılır.

Temel çözüm vektörlerinin sayısı serbest değişken sayısına, yani $n-\operatorname{rank}(A)$ değerine eşittir.
:::

---

## Homojen Çözümler Birleşmeye Kapalıdır

$Au=0$ ve $Av=0$ ise:

$$
A(u+v)=Au+Av=0
$$

Her $c\in\mathbb{R}$ için:

$$
A(cu)=cAu=0
$$

::: {.notes}
İki homojen çözümün toplamı yine çözümdür; bir homojen çözümün skaler katı da çözüm olarak kalır. Bu özellikler matris çarpımının toplama ve skalerle uyumundan gelir.

Çözüm kümesinin sıfır vektörünü içermesi ve bu işlemlere kapalı olması, onu bir altuzay yapar. Altuzay kavramı vektör uzayları bloğunda biçimsel olarak geliştirilecektir.
:::

---

## Homojen Olmayan Sistemle İlişki

$Ax=b$ tutarlı ve $x_p$ belirli bir çözüm olsun.

$$
\boxed{x=x_p+x_h}
$$

Burada

$$
Ax_h=0.
$$

::: {.notes}
$x$ ve $x_p$ aynı $b$ sağ tarafını üretiyorsa $A(x-x_p)=Ax-Ax_p=b-b=0$ olur. Dolayısıyla iki çözüm arasındaki fark homojen sistemin çözümüdür.

Ters yönde, herhangi bir homojen çözüm için $A(x_p+x_h)=b+0=b$ elde edilir. Böylece homojen olmayan sistemin bütün çözümleri, bir özel çözüme homojen çözüm yönlerinin eklenmesiyle oluşur.
:::

---

## Sık Yapılan Hatalar: Homojen Sistemler

1. Homojen bir sistemin çözümsüz olabileceğini düşünmek.
2. $Ax=0$ ifadesinden doğrudan $x=0$ sonucuna geçmek.
3. Trivial çözümün varlığını "tek çözüm" sanmak.
4. Bir serbest değişkenin yalnız birkaç ek çözüm ürettiğini sanmak.

::: {.notes}
İlk iki hata birbirinin aynadaki görüntüsüdür. Homojen sistem hiçbir zaman tutarsız olamaz, çünkü $x=0$ her zaman çözümdür; "çözüm yok" cevabı homojen bir sistemde eliminasyon hatasının işaretidir. Buna karşılık $Ax=0$ eşitliğinden $x=0$ sonucunu çıkarmak yalnız $\operatorname{rank}(A)=n$ olduğunda geçerlidir. Skaler çarpımda $ax=0$ ve $a\neq0$ ise $x=0$ olması alışkanlığı burada yanıltır; matrisin sıfır matrisi olmaması tek çözümü garanti etmez.

Üçüncü hata iki farklı soruyu karıştırır: trivial çözüm her sistemde vardır, asıl soru başka çözümün bulunup bulunmadığıdır. Dördüncü hata çözüm kümesinin büyüklüğüyle ilgilidir; serbest değişken bir parametredir, sonlu bir seçenek listesi değildir. Bu nedenle homojen sistemin cevabı ya "yalnız $x=0$" ya da "sonsuz çözüm" olur; arada bir durum yoktur.
:::

---

## Sütun Okumasına Dönüş

$$
A=\begin{bmatrix}a_1&a_2&\cdots&a_n\end{bmatrix}
$$

$$
Ax=0
\iff
x_1a_1+x_2a_2+\cdots+x_na_n=0
$$

::: {.notes}
Matris–vektör çarpımının sütun okuması, homojen sistemi sütunlar arasındaki bir lineer birleşim sorusuna çevirir. Her zaman bütün katsayıları sıfır seçerek sıfır vektörü üretmek mümkündür.

Asıl soru, sütunların sıfır vektörünü sıfırdan farklı katsayılarla da üretip üretemediğidir. Bu soru lineer bağımsızlık kavramını doğrudan doğurur.
:::

---

## Lineer Bağımsızlık

$a_1,\ldots,a_n$ vektörleri için

$$
x_1a_1+\cdots+x_na_n=0
$$

eşitliği yalnız

$$
x_1=\cdots=x_n=0
$$

ile sağlanıyorsa vektörler **lineer bağımsızdır**.

::: {.notes}
Lineer bağımsızlık, vektörlerden hiçbirinin diğerleriyle kurulabilen gereksiz bir yön taşımaması anlamına gelir. Sıfır vektörünü üretmenin yalnız trivial katsayılarla mümkün olması bu fikri kesinleştirir.

Sıfırdan farklı en az bir katsayıyla sıfır vektörü üretilebiliyorsa vektörler lineer bağımlıdır. Bu ilişki, vektörlerden en az birinin diğerlerinin lineer birleşimi olarak yazılabildiğini gösterir.
:::

---

## Bağımlılık İlişkisini Okumak

$$
x_1a_1+\cdots+x_ka_k+\cdots+x_na_n=0,\qquad x_k\neq0
$$

ise

$$
a_k=-\sum_{j\neq k}\frac{x_j}{x_k}a_j.
$$

::: {.notes}
Trivial olmayan bir bağımlılık ilişkisinde en az bir katsayı sıfırdan farklıdır. Bu katsayıya karşılık gelen vektör yalnız bırakıldığında diğer vektörlerin lineer birleşimi olarak yazılır.

Dolayısıyla bağımlı bir listedeki en az bir vektör, listenin üretme gücünü artırmadan çıkarılabilir. Bağımsız bir listede ise hiçbir vektör bu biçimde diğerlerinden üretilemez.
:::

---

## Rank Ölçütü

$A=[a_1\ \cdots\ a_n]$ için:

$$
\boxed{a_1,\ldots,a_n\text{ bağımsız}
\iff \operatorname{rank}(A)=n}
$$

Eşdeğer olarak $A$'nın her sütununda pivot vardır.

::: {.notes}
Sütunlar bağımsızsa $Ax=0$ yalnız trivial çözüme sahiptir. Bu da serbest değişken bulunmadığı, dolayısıyla her bilinmeyen sütununda pivot olduğu anlamına gelir.

Rank sütun sayısından küçükse en az bir serbest değişken vardır ve trivial olmayan bir homojen çözüm elde edilir. Bu çözüm sütunlar arasındaki bağımlılık katsayılarını verir.
:::

---

## Bağımsız Örnek

$$
a_1=\begin{bmatrix}1\\0\\1\end{bmatrix},\qquad
a_2=\begin{bmatrix}0\\1\\1\end{bmatrix}
$$

$$
x_1a_1+x_2a_2=0
$$

ilk iki bileşenden $x_1=0$ ve $x_2=0$ verir.

::: {.notes}
Vektörlerin birbirinin skaler katı olmaması iki vektör için bağımsızlığı gösterir; homojen sistem yöntemi ise daha genel ve sistematik bir gerekçe sunar. Birinci koordinat yalnız $x_1$'i, ikinci koordinat yalnız $x_2$'yi sıfıra zorlar.

Bu iki sütundan oluşan matrisin rankı ikidir ve her sütunda pivot vardır.
:::

---

## Çiftler Kat Değil, Liste Yine Bağımlı

$$
a_1=\begin{bmatrix}1\\0\end{bmatrix},\qquad
a_2=\begin{bmatrix}0\\1\end{bmatrix},\qquad
a_3=\begin{bmatrix}1\\1\end{bmatrix}
$$

$$
a_1+a_2-a_3=0
$$

::: {.notes}
Üç vektörden hiçbiri başka birinin skaler katı değildir. Buna rağmen $a_3=a_1+a_2$ olduğu için liste bağımlıdır. Bağımlılık yalnız ikili paralellik kontrolüyle belirlenemez.

İki bileşenli vektörlerden oluşan matris en fazla iki pivot taşıyabilir. Üç sütunun tamamında pivot bulunamayacağı için bağımlılık boyut sınırından da görülür.
:::

---

## Sıfır Vektörü İçeren Liste

$$
c_1a_1+\cdots+1\cdot0+\cdots+c_na_n=0
$$

Diğer bütün katsayılar sıfır seçilse bile trivial olmayan bir ilişki vardır.

$$
\boxed{0\text{ vektörünü içeren her liste bağımlıdır}}
$$

::: {.notes}
Sıfır vektörünün katsayısı $1$ seçildiğinde, diğer bütün katsayılar sıfır olsa bile lineer birleşim sıfır kalır. Katsayıların tamamı sıfır olmadığı için bu ilişki trivial değildir.

Sıfır vektörü listeye yeni bir yön ya da üretme gücü eklemez; bu nedenle bağımsız bir listede bulunamaz.
:::

---

## Vektör Sayısı Boyutu Aşarsa

$a_1,\ldots,a_n\in\mathbb{R}^m$ ve $n>m$ ise:

$$
\operatorname{rank}[a_1\ \cdots\ a_n]\leq m<n
$$

$$
\boxed{a_1,\ldots,a_n\text{ bağımlıdır}}
$$

::: {.notes}
$m$ satırlı bir matris en fazla $m$ pivot taşıyabilir. Sütun sayısı $m$'den büyükse her sütunda pivot bulunması imkânsızdır. Böylece homojen sistemde en az bir serbest değişken ve trivial olmayan çözüm oluşur.

Bu sonuç belirli vektörleri hesaplamadan verilen listenin bağımlı olduğunu gösterir. Tersi doğru değildir: vektör sayısı boyutu aşmıyorsa liste bağımsız olmak zorunda değildir.
:::

---

## Karşılaştırmalı Kontrol

1. $A$ matrisi $4\times3$ ve $\operatorname{rank}(A)=3$.
2. $B$ matrisi $3\times5$.
3. $C$ matrisi $3\times3$ ve $\operatorname{rank}(C)=2$.

Sütunlar hangi durumlarda bağımsızdır?

::: {.notes}
$A$'nın rankı sütun sayısına eşit olduğu için üç sütun bağımsızdır. $B$'nin beş sütunu $\mathbb{R}^3$ içinde bulunduğundan rank en fazla üçtür; sütunlar zorunlu olarak bağımlıdır. $C$'nin rankı üçten küçük olduğu için sütunları bağımlıdır.

Karar her durumda aynı ölçüte dayanır: rank sütun sayısına eşit mi? Matrisin kare ya da dikdörtgensel olması tek başına cevap vermez.
:::

---

## Sık Yapılan Hatalar: Bağımsızlık

1. Tek tek $a_i=0$ koşullarını incelemek.
2. Yalnız ikili "biri diğerinin katı mı?" kontrolü yapmak.
3. Trivial çözümün varlığını bağımlılık saymak.
4. Bileşen sayısı farklı vektörleri aynı birleşimde toplamak.

::: {.notes}
Birinci hatada incelenen nesne yanlış seçilir: bağımsızlık, vektörlerin kendilerinin sıfır olup olmadığını değil, $x_1a_1+\cdots+x_na_n=0$ eşitliğini sağlayan katsayıların yapısını sorar. İkinci hata üç ve daha fazla vektörde ortaya çıkar; $a_1=(1,0)^T$, $a_2=(0,1)^T$, $a_3=(1,1)^T$ listesinde hiçbir ikili paralel değildir, buna rağmen $a_1+a_2-a_3=0$ ilişkisi liste bağımlıdır. İkili kontrol yalnız iki vektörlü listede yeterli bir ölçüttür.

Üçüncü hata mantık yönünü ters çevirir: bütün katsayıların sıfır olduğu çözüm her listede bulunur, bu nedenle hiçbir şey kanıtlamaz. Bağımlılığı gösteren, en az bir katsayısı sıfırdan farklı olan çözümdür. Dördüncü hata boyut uyumuyla ilgilidir; $\mathbb{R}^2$ ve $\mathbb{R}^3$ vektörleri aynı lineer birleşimde yer alamaz, sorunun kendisi tanımsızdır. Karar vermeden önce bütün vektörlerin aynı uzayda olduğu kontrol edilmelidir.
:::

---

## Ortak Yapı

$$
\begin{array}{c}
Ax=0\text{ yalnız trivial çözümlü}\\
\Updownarrow\\
A\text{ sütunları lineer bağımsız}\\
\Updownarrow\\
\operatorname{rank}(A)=n
\end{array}
$$

Kare $A$ için bunlara tersinirlik de eklenir.

::: {.notes}
Homojen sistem, rank, sütun pivotları ve lineer bağımsızlık ayrı tanım adaları değildir. Hepsi aynı soruyu farklı dillerde yanıtlar: sütun katsayıları sıfır vektörünü trivial olmayan bir yolla üretebilir mi?

Kare matrislerde sütun tam rankı aynı zamanda tam rank ve tersinirliktir. Determinant bu kare-matris yapısına daha sonra eklenen bir başka eşdeğer ölçü olacaktır.
:::

---

## Vektör Uzaylarına Köprü

Üç yeni soru ortaya çıkar:

1. Bir vektör listesi hangi vektörleri üretebilir?
2. Üretici listede gereksiz vektör var mı?
3. Her vektörü tek biçimde üreten en küçük yapı nedir?

$$
\text{lineer birleşim}\longrightarrow
\text{germe}\longrightarrow
\text{bağımsızlık}\longrightarrow
\text{baz}
$$

::: {.notes}
Lineer birleşim üretme gücünü, bağımsızlık ise gereksizliğin bulunup bulunmadığını inceler. Bu iki özellik birlikte baz kavramına götürür: bir uzayı üreten ve hiçbir gereksiz vektör taşımayan liste.

Bu aşamada vektörler koordinat vektörleridir. Vektör uzayı kavramı, aynı işlem yapısını polinomlar, fonksiyonlar ve matrisler gibi daha genel nesnelere genişletecektir.
:::
