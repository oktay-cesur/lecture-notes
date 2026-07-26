---
title: "Matris-Matris Çarpımı: Alıştırmalar"
subtitle: "Lineer Cebir — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-25
description: "Matris-matris çarpımı, boyut uyumu ve çarpım sırası pratiği."
execute:
  echo: false
---

# Matris-Matris Çarpımı: Alıştırmalar

Bu çalışma matris-matris çarpımını hatasız hesaplama, çarpımın ne zaman tanımlı olduğuna ve sonucun şekline boyutla karar verme, çarpım sırasının ($AB$ ile $BA$) neden önemli olduğunu görme becerilerini geliştirmek için hazırlanmıştır.

Her çarpımdan önce boyut kontrolü yapın: iç boyutlar uymuyorsa işlem tanımsızdır. Çalışma sorularını çözümlere bakmadan tamamlayın.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
Bu çalışma notunu bir yapay zekâ aracına vererek aynı becerileri hedefleyen yeni örnekler ürettirebilirsiniz. Hangi bölümü çalışmak istediğinizi, kaç soru istediğinizi ve zorluk düzeyini belirtin. Aracın çözümü hemen vermemesini; önce cevabınızı beklemesini, hatanız varsa hata türünü söylemesini ve yalnız bir ipucu vermesini isteyin.

Örnek istem:

> Bu çalışma notundaki gösterime bağlı kal. "AB hesabı" bölümü için aynı zorlukta beş yeni soru üret. Her soruda önce boyut kontrolü yapmamı iste. Çözümleri başlangıçta verme; yanlışsa hata türünü söyle ve bir ipucu ver.

Karma çalışma soruları için hazır cevap anahtarı verilmemiştir.
:::

## Boyut Uyumu ve Sonuç Şekli

### Örnek 1: Önce Boyut

$$
A\in\mathbb{R}^{2\times3},
\qquad
B\in\mathbb{R}^{3\times4},
\qquad
C\in\mathbb{R}^{2\times2}.
$$

$AB$ tanımlıdır: $A$'nın sütun sayısı ($3$) ile $B$'nin satır sayısı ($3$) eşit. Sonuç $\mathbb{R}^{2\times4}$ içindedir; dıştaki boyutlar sonucu verir.

$BA$ tanımlı değildir: $B$'nin sütun sayısı ($4$) ile $A$'nın satır sayısı ($2$) eşit değil.

$AC$ tanımlı değildir ($3\neq2$); ama $CA$ tanımlıdır ($C$: $2\times2$, $A$: $2\times3$) ve sonucu $\mathbb{R}^{2\times3}$.

**Karar kuralı.** $A\in\mathbb{R}^{m\times n}$ ve $B\in\mathbb{R}^{n\times p}$ ise $AB\in\mathbb{R}^{m\times p}$. İç boyutlar ($n$) eşit olmalı; dış boyutlar ($m,p$) sonucu belirler.

## AB Hesabı

### Örnek 2: $2\times2$ Çarpım

$$
A=
\begin{bmatrix}
1&2\\
3&-1
\end{bmatrix},
\qquad
B=
\begin{bmatrix}
2&0\\
1&4
\end{bmatrix}.
$$

$AB$'nin $(i,j)$ elemanı, $A$'nın $i$. satırı ile $B$'nin $j$. sütununun nokta çarpımıdır:

$$
AB=
\begin{bmatrix}
1\cdot2+2\cdot1 & 1\cdot0+2\cdot4\\
3\cdot2+(-1)\cdot1 & 3\cdot0+(-1)\cdot4
\end{bmatrix}
=
\begin{bmatrix}
4&8\\
5&-4
\end{bmatrix}.
$$

**Kontrol.** Sonucun her elemanı için "hangi satır, hangi sütun" diye sorun. $(2,1)$ elemanı $A$'nın 2. satırı ile $B$'nin 1. sütununu kullanır: $3\cdot2+(-1)\cdot1=5$.

### Örnek 3: Dikdörtgen Çarpım

$$
A=
\begin{bmatrix}
1&0&2\\
-1&3&1
\end{bmatrix}
\in\mathbb{R}^{2\times3},
\qquad
B=
\begin{bmatrix}
2&1&0&-1\\
0&4&-2&3\\
1&0&5&2
\end{bmatrix}
\in\mathbb{R}^{3\times4}.
$$

Sonuç $2\times4$ olmalıdır. Satır satır hesaplarsak:

$$
AB=
\begin{bmatrix}
4&1&10&3\\
-1&11&-1&12
\end{bmatrix}.
$$

Örneğin $(2,2)$ elemanı: $A$'nın 2. satırı $\begin{bmatrix}-1&3&1\end{bmatrix}$ ile $B$'nin 2. sütunu $\begin{bmatrix}1&4&0\end{bmatrix}^T$ çarpımı $-1\cdot1+3\cdot4+1\cdot0=11$.

**Kontrol.** Önce sonucun şeklini ($2\times4$) yazın; sekiz eleman hesaplayacağınızı bilirsiniz. Farklı sayıda eleman çıktıysa boyutta hata var.

### Örnek 4: Çarpımın Bir Sütununu Tek Başına Hesaplamak

$AB$'nin $j$. sütunu, $A$ ile $B$'nin $j$. sütununun çarpımıdır: $A b_j$. Örnek 2'deki matrisler için $B$'nin 2. sütunu $\begin{bmatrix}0&4\end{bmatrix}^T$:

$$
A\begin{bmatrix}0\\4\end{bmatrix}
=
0\begin{bmatrix}1\\3\end{bmatrix}+4\begin{bmatrix}2\\-1\end{bmatrix}
=
\begin{bmatrix}8\\-4\end{bmatrix},
$$

bu da $AB$'nin 2. sütunudur.

**Kontrol.** Yalnız bir sütun gerekiyorsa bütün çarpımı yapmaya gerek yok; matris-vektör çarpımı yeterli.

## Çarpım Sırası: AB ve BA

### Örnek 5: $AB\neq BA$

Örnek 2'deki matrisler için $AB=\begin{bmatrix}4&8\\5&-4\end{bmatrix}$ bulmuştuk. Şimdi ters sırayı hesaplayalım:

$$
BA=
\begin{bmatrix}
2\cdot1+0\cdot3 & 2\cdot2+0\cdot(-1)\\
1\cdot1+4\cdot3 & 1\cdot2+4\cdot(-1)
\end{bmatrix}
=
\begin{bmatrix}
2&4\\
13&-2
\end{bmatrix}.
$$

$AB\neq BA$. Matris çarpımı, sayıların çarpımından farklı olarak genelde **değişmeli değildir**.

**Kontrol.** İki çarpım tanımlı ve aynı şekilde olsa bile eşit olmaları gerekmez. Sırayı korumak, hesaptan önce alınacak bir karardır.

## Hata Avı

### Örnek 6: Eleman Bazlı Çarpma Yanılgısı

$$
\begin{bmatrix}1&2\\3&4\end{bmatrix}
\begin{bmatrix}5&6\\7&8\end{bmatrix}
=
\begin{bmatrix}1\cdot5&2\cdot6\\3\cdot7&4\cdot8\end{bmatrix}
=
\begin{bmatrix}5&12\\21&32\end{bmatrix}
$$

yanlıştır. Matris çarpımı karşılıklı elemanları çarpmaz; satır–sütun nokta çarpımı yapılır:

$$
\begin{bmatrix}1&2\\3&4\end{bmatrix}
\begin{bmatrix}5&6\\7&8\end{bmatrix}
=
\begin{bmatrix}1\cdot5+2\cdot7 & 1\cdot6+2\cdot8\\3\cdot5+4\cdot7 & 3\cdot6+4\cdot8\end{bmatrix}
=
\begin{bmatrix}19&22\\43&50\end{bmatrix}.
$$

**Tanı.** Eleman bazlı çarpma yalnız toplama/çıkarma/skalerle çarpmada geçerlidir. Matris çarpımında her sonuç elemanı bir nokta çarpımıdır.

### Örnek 7: Boyut Uymadan Çarpmaya Girişmek

$$
A\in\mathbb{R}^{2\times3},
\qquad
B\in\mathbb{R}^{2\times3}
$$

için $AB$ hesaplamaya çalışmak hatalıdır: iç boyutlar ($3$ ile $2$) uymaz, $AB$ tanımsızdır. Ancak $AB^T$ ($2\times3$ ile $3\times2$) tanımlıdır ve sonucu $2\times2$ olur.

**Tanı.** Çarpma denemeden önce iç boyutları eşitleyin. Uymuyorsa transpoz gerekip gerekmediğini düşünün, ama transpozu sessizce varsaymayın.

## Adım Adım İşlem Pratiği

Aşağıdaki örneklerde açıklama en aza indirilmiştir; amaç satır–sütun nokta çarpımını hızlı ve hatasız tekrarlamaktır. Her çarpımdan önce sonucun şeklini yazın.

### Örnek 8

$$
A=\begin{bmatrix}2&1\\0&3\end{bmatrix},
\qquad
B=\begin{bmatrix}1&4\\2&-1\end{bmatrix}.
$$

$$
AB=
\begin{bmatrix}
2\cdot1+1\cdot2 & 2\cdot4+1\cdot(-1)\\
0\cdot1+3\cdot2 & 0\cdot4+3\cdot(-1)
\end{bmatrix}
=
\begin{bmatrix}4&7\\6&-3\end{bmatrix}.
$$

### Örnek 9

$$
A=\begin{bmatrix}1&-1&2\\0&3&1\end{bmatrix},
\qquad
B=\begin{bmatrix}2&0\\1&-2\\3&1\end{bmatrix}.
\qquad(2\times3)(3\times2)\to 2\times2
$$

$$
AB=
\begin{bmatrix}
1\cdot2+(-1)\cdot1+2\cdot3 & 1\cdot0+(-1)\cdot(-2)+2\cdot1\\
0\cdot2+3\cdot1+1\cdot3 & 0\cdot0+3\cdot(-2)+1\cdot1
\end{bmatrix}
=
\begin{bmatrix}7&4\\6&-5\end{bmatrix}.
$$

### Örnek 10

$$
A=\begin{bmatrix}1&2\\3&4\end{bmatrix},
\qquad
B=\begin{bmatrix}0&1\\-1&2\end{bmatrix}.
$$

$$
AB=
\begin{bmatrix}
1\cdot0+2\cdot(-1) & 1\cdot1+2\cdot2\\
3\cdot0+4\cdot(-1) & 3\cdot1+4\cdot2
\end{bmatrix}
=
\begin{bmatrix}-2&5\\-4&11\end{bmatrix}.
$$

### Örnek 11

$$
A=\begin{bmatrix}2&-1&0\\1&3&2\\0&1&-1\end{bmatrix},
\qquad
B=\begin{bmatrix}1&2\\0&-1\\3&1\end{bmatrix}.
\qquad(3\times3)(3\times2)\to 3\times2
$$

$$
AB=
\begin{bmatrix}
2\cdot1+(-1)\cdot0+0\cdot3 & 2\cdot2+(-1)\cdot(-1)+0\cdot1\\
1\cdot1+3\cdot0+2\cdot3 & 1\cdot2+3\cdot(-1)+2\cdot1\\
0\cdot1+1\cdot0+(-1)\cdot3 & 0\cdot2+1\cdot(-1)+(-1)\cdot1
\end{bmatrix}
=
\begin{bmatrix}2&5\\7&1\\-3&-2\end{bmatrix}.
$$

### Örnek 12

$$
A=\begin{bmatrix}1&0&-2\\2&1&0\end{bmatrix},
\qquad
B=\begin{bmatrix}3&1\\-1&4\\2&0\end{bmatrix}.
\qquad(2\times3)(3\times2)\to 2\times2
$$

$$
AB=
\begin{bmatrix}
1\cdot3+0\cdot(-1)+(-2)\cdot2 & 1\cdot1+0\cdot4+(-2)\cdot0\\
2\cdot3+1\cdot(-1)+0\cdot2 & 2\cdot1+1\cdot4+0\cdot0
\end{bmatrix}
=
\begin{bmatrix}-1&1\\5&6\end{bmatrix}.
$$

## Karma Çalışma Soruları

### Soru 1

$A\in\mathbb{R}^{3\times2}$, $B\in\mathbb{R}^{2\times5}$, $C\in\mathbb{R}^{3\times3}$ için $AB$, $BA$, $CA$, $AC$ çarpımlarından hangileri tanımlıdır? Tanımlı olanların şeklini yazın.

### Soru 2

$A=\begin{bmatrix}2&1\\0&-3\end{bmatrix}$, $B=\begin{bmatrix}1&4\\2&-1\end{bmatrix}$ için $AB$ ve $BA$ matrislerini hesaplayın; eşit olup olmadıklarını belirtin.

### Soru 3

$A=\begin{bmatrix}1&-1&2\\0&3&1\end{bmatrix}$, $B=\begin{bmatrix}2&0\\1&-2\\3&1\end{bmatrix}$ için $AB$ matrisini hesaplayın. Sonuç kaç satır ve sütunludur?

### Soru 4

Soru 3'teki matrisler için $BA$ tanımlı mıdır? Tanımlıysa hesaplayın.

### Soru 5

$A=\begin{bmatrix}1&2\\3&4\end{bmatrix}$, $B=\begin{bmatrix}0&1\\-1&0\end{bmatrix}$ için $AB$'nin yalnız ikinci sütununu (bütün çarpımı yapmadan) hesaplayın.

### Soru 6

Aşağıdaki hesabın hatasını bulup düzeltin:

$$
\begin{bmatrix}2&0\\1&3\end{bmatrix}
\begin{bmatrix}1&-1\\4&2\end{bmatrix}
=
\begin{bmatrix}2&0\\4&6\end{bmatrix}.
$$

### Soru 7

$A=\begin{bmatrix}1&0&-2\\3&1&0\end{bmatrix}$, $x=\begin{bmatrix}2\\-1\\4\end{bmatrix}$ için $Ax$'i, ardından $A$ ile $B=\begin{bmatrix}2&1\\-1&0\\4&-2\end{bmatrix}$ çarpımı $AB$'yi hesaplayın. $Ax$'in $AB$'nin bir sütunuyla ilişkisini açıklayın.

### Soru 8

$C=\begin{bmatrix}1&2\\-1&3\end{bmatrix}$ için $CI$ ve $IC$ çarpımlarını hesaplayın; burada $I$ birim matristir. Sonucu yorumlayın.

### Soru 9

$A\in\mathbb{R}^{2\times4}$ ve $B\in\mathbb{R}^{2\times4}$ veriliyor. $AB$ tanımlı mıdır? $AB^T$ ve $A^T B$ tanımlı mıdır? Tanımlı olanların şeklini yazın.

### Soru 10

$A=\begin{bmatrix}1&1\\0&1\end{bmatrix}$, $B=\begin{bmatrix}1&0\\1&1\end{bmatrix}$ için $AB$ ve $BA$'yı hesaplayıp karşılaştırın.

## Çalışmanızı Kontrol Etme

Bu sorular için cevap anahtarı verilmemiştir. Önce çözümünüzü bütün işlem basamaklarıyla tamamlayın. Ardından bu çalışma notunu ve çözümünüzü bir yapay zekâ aracına vererek sonucunuzun kontrol edilmesini isteyebilirsiniz.

Kontrol sırasında şu istemi kullanabilirsiniz:

> Çözümümü boyut uyumu (iç boyutların eşitliği), sonucun şekli, satır–sütun nokta çarpımının doğruluğu ve çarpım sırası açısından incele. Hata varsa doğru cevabı hemen verme; önce hatanın bulunduğu adımı ve hata türünü belirt.
