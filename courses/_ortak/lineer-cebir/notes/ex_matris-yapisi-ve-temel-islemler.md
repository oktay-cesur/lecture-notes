---
title: "Matris Yapısı ve Temel İşlemler: Alıştırmalar"
subtitle: "Lineer Cebir — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-25
description: "Matrisin şekli, transpoz, özel matris sınıfları ve eleman bazlı işlemler için pratik."
execute:
  echo: false
---

# Matris Yapısı ve Temel İşlemler: Alıştırmalar

Bu çalışma matrisin şeklini ve elemanlarını doğru okuma, transpozu ve simetriyi denetleme, özel matris sınıflarını tanıma ve eleman bazlı işlemleri (toplama, çıkarma, skalerle çarpma) hatasız yürütme becerilerini geliştirmek için hazırlanmıştır.

Kavramsal kuruluş konu notlarında verildiği için burada doğrudan hesap, tanımlılık kontrolü ve sınıflandırma üzerinde durulur. Çalışma sorularını çözümlere bakmadan tamamlayın.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
Bu çalışma notunu bir yapay zekâ aracına vererek aynı becerileri hedefleyen yeni örnekler ürettirebilirsiniz. Hangi bölümü çalışmak istediğinizi, kaç soru istediğinizi ve zorluk düzeyini belirtin. Aracın çözümü hemen vermemesini; önce cevabınızı beklemesini, hatanız varsa hata türünü söylemesini ve yalnız bir ipucu vermesini isteyin.

Örnek istem:

> Bu çalışma notundaki gösterime bağlı kal. "Transpoz ve simetri" bölümü için aynı zorlukta beş yeni soru üret. Çözümleri başlangıçta verme. Her cevabımı kontrol et; yanlışsa doğrudan sonucu söylemeden hata türünü belirt ve bir ipucu ver.

Karma çalışma soruları için hazır cevap anahtarı verilmemiştir.
:::

## Şekil ve Eleman Okuma

### Örnek 1: Şekil ve Eleman Okuma

$$
A=
\begin{bmatrix}
3&-1&0&5\\
2&7&-4&1\\
0&6&8&-3
\end{bmatrix}
$$

Matrisin üç satırı ve dört sütunu vardır:

$$
A\in\mathbb{R}^{3\times4}.
$$

Elemanlar $a_{ij}$ gösteriminde önce satır, sonra sütun indisi taşır:

$$
a_{23}=-4,\qquad a_{32}=6,\qquad a_{14}=5.
$$

**Kontrol.** $a_{ij}$ ile $a_{ji}$ farklı konumlardır. $a_{23}=-4$ iken $a_{32}=6$; ikisini karıştırmayın.

### Örnek 2: Genel Terimden Matris Kurmak

$a_{ij}=i-2j$ kuralıyla verilen $2\times3$ matrisi kuralım. Her hücreye kendi satır ve sütun indisini yazarız:

$$
A=
\begin{bmatrix}
1-2 & 1-4 & 1-6\\
2-2 & 2-4 & 2-6
\end{bmatrix}
=
\begin{bmatrix}
-1 & -3 & -5\\
0 & -2 & -4
\end{bmatrix}.
$$

**Kontrol.** Bir hücreyi seçip kuralı tersten okuyun: $a_{22}=2-2\cdot2=-2$, matriste de $-2$.

## Transpoz ve Simetri

### Örnek 3: Transpoz

$$
B=
\begin{bmatrix}
1&4\\
-2&5\\
0&3
\end{bmatrix}
\in\mathbb{R}^{3\times2}.
$$

Transpozda satırlar sütun olur:

$$
B^T=
\begin{bmatrix}
1&-2&0\\
4&5&3
\end{bmatrix}
\in\mathbb{R}^{2\times3}.
$$

**Kontrol.** Transpoz şekli tersine çevirir: $3\times2$ iken $2\times3$. Ayrıca $(B^T)^T=B$.

### Örnek 4: Simetri Kontrolü

Bir kare matris $M=M^T$ ise simetriktir. 

$$
M=
\begin{bmatrix}
2&-1&4\\
-1&5&0\\
4&0&3
\end{bmatrix}
$$

için $m_{12}=m_{21}=-1$, $m_{13}=m_{31}=4$, $m_{23}=m_{32}=0$. Köşegen dışı karşılıklı elemanlar eşit olduğundan $M$ simetriktir.

$$
N=
\begin{bmatrix}
0&3\\
-3&0
\end{bmatrix}
$$

için $n_{12}=3$ ama $n_{21}=-3$; $N\neq N^T$, dolayısıyla $N$ simetrik değildir (burada $N^T=-N$, yani ters simetriktir).

**Karar kuralı.** Simetri yalnız kare matriste sorulur. Köşegen elemanları serbesttir; kontrol edilecek olan köşegen dışı karşılıklı çiftlerdir.

## Özel Matris Sınıfları

### Örnek 5: Sınıflandırma

Aşağıdaki matrisleri sınıflandıralım.

$$
D=
\begin{bmatrix}
5&0&0\\
0&-2&0\\
0&0&7
\end{bmatrix},
\qquad
U=
\begin{bmatrix}
1&4&-2\\
0&3&5\\
0&0&6
\end{bmatrix},
\qquad
I=
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix}.
$$

$D$ köşegen matristir: köşegen dışı bütün elemanları sıfırdır. $U$ üst üçgensel matristir: köşegenin altındaki elemanlar sıfırdır. $I$ birim matristir: köşegeni $1$, dışı $0$ olan köşegen matrisin özel hâli.

**Kontrol.** Her köşegen matris aynı zamanda hem üst hem alt üçgenseldir. Sınıflar birbirini dışlamaz.

## Toplama, Çıkarma, Skalerle Çarpma

### Örnek 6: Toplama ve Skalerle Çarpma

$$
A=
\begin{bmatrix}
2&-1\\
0&4
\end{bmatrix},
\qquad
B=
\begin{bmatrix}
3&5\\
-2&1
\end{bmatrix}.
$$

İşlemler aynı konumdaki elemanlar üzerinden yürür:

$$
A+B=
\begin{bmatrix}
5&4\\
-2&5
\end{bmatrix},
\qquad
2A-B=
\begin{bmatrix}
4-3 & -2-5\\
0+2 & 8-1
\end{bmatrix}
=
\begin{bmatrix}
1&-7\\
2&7
\end{bmatrix}.
$$

**Sık hata.** $2A-B$ hesaplarken skaleri yalnız köşegene uygulamak ya da $B$'yi çıkarmadan önce $2$ ile çarpmak.

### Örnek 7: Matris Denklemi Çözmek

$$
2X+
\begin{bmatrix}
1&0\\
-3&2
\end{bmatrix}
=
\begin{bmatrix}
5&-4\\
1&8
\end{bmatrix}.
$$

Bilinen matrisi karşıya atıp $2$'ye böleriz:

$$
2X=
\begin{bmatrix}
4&-4\\
4&6
\end{bmatrix}
\quad\Rightarrow\quad
X=
\begin{bmatrix}
2&-2\\
2&3
\end{bmatrix}.
$$

**Kontrol.** Bulunan $X$'i denklemde yerine koyun: $2X$ artı verilen matris, sağ tarafı vermelidir.

## Matris Denklemleri

### Örnek 8: Bilinmeyenli Eşitlik

$$
\begin{bmatrix}
a+1 & 2b\\
c & d-3
\end{bmatrix}
=
\begin{bmatrix}
4 & -6\\
5 & 0
\end{bmatrix}.
$$

Karşılıklı elemanların eşitliğinden

$$
a=3,\qquad b=-3,\qquad c=5,\qquad d=3.
$$

**Kontrol.** İki matrisin eşit olması için önce aynı şekilde olmaları gerekir; ardından bütün karşılıklı elemanlar eşleşmelidir.

## Tanımlılık ve Hata Avı

### Örnek 9: Önce Tanımlılık

$$
A\in\mathbb{R}^{2\times3},
\qquad
B\in\mathbb{R}^{3\times2},
\qquad
C\in\mathbb{R}^{2\times3}.
$$

$A+C$ tanımlıdır (ikisi de $2\times3$). $A+B$ tanımlı değildir; şekiller farklıdır ($2\times3$ ile $3\times2$). Toplama için transpoz almak gerekmez; şekiller uymuyorsa işlem baştan tanımsızdır.

### Örnek 10: Transpoz Şeklinde Hata

$$
P=
\begin{bmatrix}
1&2&3\\
4&5&6
\end{bmatrix}
\in\mathbb{R}^{2\times3}
\quad\text{için}\quad
P^T=
\begin{bmatrix}
1&2\\
3&4\\
5&6
\end{bmatrix}
$$

yazmak yanlıştır. Burada elemanlar satır boyunca değil, sütun sırasına göre yerleştirilmelidir. Doğrusu:

$$
P^T=
\begin{bmatrix}
1&4\\
2&5\\
3&6
\end{bmatrix}.
$$

**Tanı.** Transpozda $A$'nın $i$. satırı, $A^T$'un $i$. sütunu olur. İlk satır $\begin{bmatrix}1&2&3\end{bmatrix}$ transpozun ilk **sütununa** iner.

## Adım Adım İşlem Pratiği

Aşağıdaki örneklerde açıklama en aza indirilmiştir; amaç eleman bazlı işlemleri hızlı ve hatasız tekrarlamaktır.

### Örnek 11

$A=\begin{bmatrix}2&-1\\0&4\end{bmatrix}$, $B=\begin{bmatrix}3&5\\-2&1\end{bmatrix}$ için $2A+B$:

$$
2A+B=
\begin{bmatrix}2\cdot2+3&2\cdot(-1)+5\\2\cdot0+(-2)&2\cdot4+1\end{bmatrix}
=
\begin{bmatrix}7&3\\-2&9\end{bmatrix}.
$$

### Örnek 12

$A=\begin{bmatrix}1&3&-2\\4&0&5\end{bmatrix}$, $B=\begin{bmatrix}2&-1&0\\3&2&-4\end{bmatrix}$ için $A-B$:

$$
A-B=
\begin{bmatrix}1-2&3-(-1)&-2-0\\4-3&0-2&5-(-4)\end{bmatrix}
=
\begin{bmatrix}-1&4&-2\\1&-2&9\end{bmatrix}.
$$

### Örnek 13

$C=\begin{bmatrix}2&-4&6\\0&8&-2\end{bmatrix}$ için $-\tfrac12 C$:

$$
-\tfrac12 C=
\begin{bmatrix}-\tfrac12\cdot2&-\tfrac12\cdot(-4)&-\tfrac12\cdot6\\-\tfrac12\cdot0&-\tfrac12\cdot8&-\tfrac12\cdot(-2)\end{bmatrix}
=
\begin{bmatrix}-1&2&-3\\0&-4&1\end{bmatrix}.
$$

### Örnek 14

$P=\begin{bmatrix}1&2&3\\4&5&6\end{bmatrix}$ için $P^T$ (satırlar sütun olur):

$$
P^T=
\begin{bmatrix}1&4\\2&5\\3&6\end{bmatrix}.
$$

### Örnek 15

$A=\begin{bmatrix}1&0\\2&-1\end{bmatrix}$, $B=\begin{bmatrix}2&3\\-1&4\end{bmatrix}$ için $3A-2B$:

$$
3A-2B=
\begin{bmatrix}3\cdot1-2\cdot2&3\cdot0-2\cdot3\\3\cdot2-2\cdot(-1)&3\cdot(-1)-2\cdot4\end{bmatrix}
=
\begin{bmatrix}-1&-6\\8&-11\end{bmatrix}.
$$

## Karma Çalışma Soruları

### Soru 1

$A=\begin{bmatrix}2&-3&1\\0&5&-4\end{bmatrix}$ için $A$'nın şeklini, $a_{12}$ ve $a_{23}$ elemanlarını yazın.

### Soru 2

$a_{ij}=2i+j$ kuralıyla verilen $3\times2$ matrisi kurun.

### Soru 3

$B=\begin{bmatrix}0&-2&5\\1&3&-1\end{bmatrix}$ matrisinin transpozunu ve $B^T$'un şeklini yazın.

### Soru 4

$M=\begin{bmatrix}1&k&-2\\3&0&5\\-2&5&4\end{bmatrix}$ matrisinin simetrik olması için $k$ ne olmalıdır?

### Soru 5

Aşağıdaki matrisleri köşegen, üst üçgensel, alt üçgensel, simetrik ve birim matris etiketlerinden uygun olanlarla adlandırın:

$$
\begin{bmatrix}2&0\\0&2\end{bmatrix},\quad
\begin{bmatrix}1&0&0\\4&2&0\\-1&3&5\end{bmatrix},\quad
\begin{bmatrix}1&0\\0&1\end{bmatrix}.
$$

### Soru 6

$A=\begin{bmatrix}1&-2\\3&0\end{bmatrix}$, $B=\begin{bmatrix}4&1\\-2&5\end{bmatrix}$ için $A+B$, $A-B$ ve $3A-2B$ matrislerini hesaplayın.

### Soru 7

$C=\begin{bmatrix}2&-1&0\\4&3&-2\end{bmatrix}$ için $-\tfrac12 C$ matrisini hesaplayın.

### Soru 8

$3X-\begin{bmatrix}2&1\\0&-4\end{bmatrix}=\begin{bmatrix}7&-5\\6&2\end{bmatrix}$ denkleminden $X$ matrisini bulun.

### Soru 9

$\begin{bmatrix}2a & b-1\\c+3 & 4\end{bmatrix}=\begin{bmatrix}6 & -2\\0 & d\end{bmatrix}$ eşitliğinden $a$, $b$, $c$, $d$ değerlerini bulun.

### Soru 10

$A\in\mathbb{R}^{3\times2}$, $B\in\mathbb{R}^{2\times3}$, $C\in\mathbb{R}^{3\times2}$ olduğuna göre $A+C$, $A-B$, $2C$, $A+B^T$ işlemlerinden hangileri tanımlıdır? Gerekçelendirin.

### Soru 11

$P=\begin{bmatrix}3&-1\\2&4\\0&5\end{bmatrix}$ için $(P^T)^T$ matrisinin $P$'ye eşit olduğunu göstererek transpozun transpozunu doğrulayın.

### Soru 12

Bir $M$ kare matrisi için $M^T=-M$ ise $M$'nin köşegen elemanları ne olmak zorundadır? Nedenini açıklayın.

## Çalışmanızı Kontrol Etme

Bu sorular için cevap anahtarı verilmemiştir. Önce çözümünüzü bütün işlem basamaklarıyla tamamlayın. Ardından bu çalışma notunu ve çözümünüzü bir yapay zekâ aracına vererek sonucunuzun kontrol edilmesini isteyebilirsiniz.

Kontrol sırasında şu istemi kullanabilirsiniz:

> Çözümümü şekil (boyut) uyumu, indis sırası ($a_{ij}$ satır–sütun), transpoz yerleşimi ve eleman eşleştirmesi açısından incele. Hata varsa doğru cevabı hemen verme; önce hatanın bulunduğu adımı ve hata türünü belirt. Bir ipucundan sonra çözümü yeniden denememe izin ver.
