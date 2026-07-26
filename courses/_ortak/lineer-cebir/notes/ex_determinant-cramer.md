---
title: "Determinant ve Cramer Kuralı: Alıştırmalar"
subtitle: "Lineer Cebir — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-25
description: "Determinant hesabı ve Cramer kuralı için pratik."
execute:
  echo: false
---

# Determinant ve Cramer Kuralı: Alıştırmalar

Bu çalışma $2\times2$ ve $3\times3$ determinantları hesaplama, kofaktör açılımını doğru uygulama, satır işlemleriyle determinanttaki değişimi izleme, temel determinant özelliklerini kullanma ve Cramer kuralıyla lineer sistem çözme becerilerini geliştirmek için hazırlanmıştır.

Determinant yalnız kare matrislerde tanımlıdır. Cramer kuralı ise yalnız $\det(A)\neq0$ olan kare sistemlerde işler. Çalışma sorularını çözümlere bakmadan tamamlayın.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
Bu çalışma notunu bir yapay zekâ aracına vererek aynı becerileri hedefleyen yeni örnekler ürettirebilirsiniz. Hangi bölümü çalışmak istediğinizi, kaç soru istediğinizi ve zorluk düzeyini belirtin. Aracın çözümü hemen vermemesini; önce cevabınızı beklemesini, hatanız varsa hata türünü söylemesini ve yalnız bir ipucu vermesini isteyin.

Örnek istem:

> Bu çalışma notundaki gösterime bağlı kal. "Kofaktör açılımı" bölümü için aynı zorlukta beş yeni $3\times3$ soru üret. İşaret desenine dikkat etmemi iste. Çözümleri başlangıçta verme; yanlışsa hata türünü söyle ve bir ipucu ver.

Karma çalışma soruları için hazır cevap anahtarı verilmemiştir.
:::

## 2×2 ve 3×3 Determinant

### Örnek 1: $2\times2$

$$
\det\begin{bmatrix}a&b\\c&d\end{bmatrix}=ad-bc.
$$

$$
\det\begin{bmatrix}3&5\\2&4\end{bmatrix}=3\cdot4-5\cdot2=12-10=2.
$$

**Kontrol.** Çapraz çarpımların **farkı**dır; toplamı değil. İkinci terimin işareti eksidir.

### Örnek 2: $3\times3$ Kofaktör Açılımı

$$
A=
\begin{bmatrix}
2&1&3\\
1&0&2\\
4&1&8
\end{bmatrix}.
$$

Birinci satır boyunca açalım; işaret deseni $+,-,+$:

$$
\det A=
2\det\begin{bmatrix}0&2\\1&8\end{bmatrix}
-1\det\begin{bmatrix}1&2\\4&8\end{bmatrix}
+3\det\begin{bmatrix}1&0\\4&1\end{bmatrix}.
$$

$$
=2(0\cdot8-2\cdot1)-1(1\cdot8-2\cdot4)+3(1\cdot1-0\cdot4)
=2(-2)-1(0)+3(1)=-4+0+3=-1.
$$

**Kontrol.** İşaret deseni satır boyunca $+,-,+$'dır; ortadaki terimin önündeki eksi, minörün içindeki işaretlerden ayrıdır.

## Kofaktör Açılımı

### Örnek 3: Kolay Satır/Sütun Seçmek

Kofaktör açılımı herhangi bir satır ya da sütun boyunca yapılabilir. Çok sıfır içeren satırı/sütunu seçmek işlemi kısaltır:

$$
B=
\begin{bmatrix}
5&0&0\\
2&3&1\\
4&-1&2
\end{bmatrix}.
$$

Birinci satırda iki sıfır var; oradan açmak en kolayı:

$$
\det B=5\det\begin{bmatrix}3&1\\-1&2\end{bmatrix}-0+0
=5(3\cdot2-1\cdot(-1))=5(6+1)=35.
$$

**Kontrol.** Sıfır katsayılı terimler hesaba girmez; bu yüzden en çok sıfırı olan hat seçilir.

## Satır İşlemleriyle Determinant

### Örnek 4: Üçgensele İndirip Çarpmak

Bir matrisi satır işlemleriyle üçgensel biçime getirirseniz determinant köşegen çarpımıdır — ancak işlemlerin determinanta etkisini izlemek gerekir:

- $R_i\leftrightarrow R_j$ (satır değişimi): determinantın işaretini değiştirir.
- $R_i\leftarrow kR_i$: determinantı $k$ ile çarpar.
- $R_i\leftarrow R_i+kR_j$: determinantı **değiştirmez**.

$$
\begin{bmatrix}1&2&1\\2&5&3\\0&1&2\end{bmatrix}
\xrightarrow{R_2\leftarrow R_2-2R_1}
\begin{bmatrix}1&2&1\\0&1&1\\0&1&2\end{bmatrix}
\xrightarrow{R_3\leftarrow R_3-R_2}
\begin{bmatrix}1&2&1\\0&1&1\\0&0&1\end{bmatrix}.
$$

Kullanılan iki işlem de "satıra katını ekleme" olduğundan determinant değişmedi; üçgensel biçimin köşegen çarpımı $1\cdot1\cdot1=1$, yani $\det=1$.

**Kontrol.** Satır değişimi ya da bir satırı skalerle çarpma yaptıysanız bu etkileri sona geri uygulamayı unutmayın.

## Determinant Özellikleri

### Örnek 5: Sık Kullanılan Kurallar

- Üçgensel (ve köşegen) matrisin determinantı köşegen çarpımıdır.
- $\det(A^T)=\det(A)$.
- $\det(AB)=\det(A)\det(B)$.
- $n\times n$ için $\det(kA)=k^n\det(A)$.
- $\det(A)=0$ ancak ve ancak $A$ tersinir değildir.

Örneğin $A$ bir $3\times3$ matris ve $\det(A)=4$ ise $\det(2A)=2^3\cdot4=32$.

**Kontrol.** $\det(kA)=k\det(A)$ değildir; skaler her satıra ayrı ayrı uygulandığından üssü $n$'dir.

## Cramer Kuralı

### Örnek 6: $2\times2$ Sistem

$$
\begin{aligned}
x+2y&=5\\
3x-y&=1
\end{aligned},
\qquad
A=\begin{bmatrix}1&2\\3&-1\end{bmatrix},
\quad
\det A=1\cdot(-1)-2\cdot3=-7.
$$

$\det A\neq0$ olduğundan Cramer uygulanır. Payda hep $\det A$; pay için ilgili sütun $b=\begin{bmatrix}5\\1\end{bmatrix}$ ile değiştirilir:

$$
x=\frac{\det\begin{bmatrix}5&2\\1&-1\end{bmatrix}}{\det A}=\frac{-5-2}{-7}=\frac{-7}{-7}=1,
\qquad
y=\frac{\det\begin{bmatrix}1&5\\3&1\end{bmatrix}}{\det A}=\frac{1-15}{-7}=\frac{-14}{-7}=2.
$$

**Kontrol.** Çözümü sistemde sınayın: $1+2\cdot2=5$, $3\cdot1-2=1$.

### Örnek 7: $3\times3$ Sistem

$$
\begin{aligned}
x+y+z&=6\\
2x+3y+z&=11\\
x-y+2z&=5
\end{aligned},
\qquad
A=\begin{bmatrix}1&1&1\\2&3&1\\1&-1&2\end{bmatrix}.
$$

$\det A=-1$ (kofaktör açılımıyla). Her bilinmeyen için ilgili sütunu $b=\begin{bmatrix}6&11&5\end{bmatrix}^T$ ile değiştirip determinant alırız:

$$
\det A_x=-1,\qquad \det A_y=-2,\qquad \det A_z=-3,
$$

$$
x=\frac{-1}{-1}=1,\qquad y=\frac{-2}{-1}=2,\qquad z=\frac{-3}{-1}=3.
$$

**Kontrol.** Payda bütün bilinmeyenlerde aynıdır ($\det A$). Yalnız pay matrisinde ilgili sütun değişir; başka sütuna dokunulmaz.

## Hata Avı

### Örnek 8: İşaret Desenini Unutmak

$3\times3$ kofaktör açılımında ortadaki terimin işaretini eksi yapmamak yaygın bir hatadır:

$$
\det A=a_{11}M_{11}-a_{12}M_{12}+a_{13}M_{13}
$$

biçiminde işaret deseni $+,-,+$'dır. Ortadaki terimi artı almak sonucu bozar.

### Örnek 9: $\det(A+B)$ Yanılgısı

$\det(A+B)=\det(A)+\det(B)$ genelde yanlıştır. Determinant toplama üzerine dağılmaz. Örneğin $A=B=I_2$ için $\det(A+B)=\det(2I_2)=4$ iken $\det(A)+\det(B)=1+1=2$.

**Tanı.** Determinant çarpım için çarpımsaldır ($\det(AB)=\det A\det B$) ama toplam için toplamsal değildir.

### Örnek 10: Cramer'i Paydası Sıfırken Kullanmak

$\det A=0$ ise Cramer kuralı uygulanamaz; payda sıfır olur. Bu durumda sistem ya çözümsüzdür ya sonsuz çözümlüdür ve eliminasyonla incelenmelidir.

## Adım Adım İşlem Pratiği

Aşağıdaki örneklerde açıklama en aza indirilmiştir; amaç determinant ve Cramer hesabını adım adım tekrarlamaktır.

### Örnek 11

$$
\det\begin{bmatrix}4&-2\\3&1\end{bmatrix}=4\cdot1-(-2)\cdot3=4+6=10.
$$

### Örnek 12

$\det\begin{bmatrix}1&2&0\\-1&3&4\\2&0&1\end{bmatrix}$, birinci satır ($+,-,+$):

$$
=1\det\begin{bmatrix}3&4\\0&1\end{bmatrix}-2\det\begin{bmatrix}-1&4\\2&1\end{bmatrix}+0
=1(3)-2(-1-8)=3+18=21.
$$

### Örnek 13

Üçgensel matris; determinant köşegen çarpımıdır:

$$
\det\begin{bmatrix}3&0&0\\5&-2&0\\1&4&6\end{bmatrix}=3\cdot(-2)\cdot6=-36.
$$

### Örnek 14

$\begin{aligned}2x+y&=4\\x-3y&=-5\end{aligned}$ için Cramer:

$$
\det A=\det\begin{bmatrix}2&1\\1&-3\end{bmatrix}=-6-1=-7,
$$

$$
x=\frac{\det\begin{bmatrix}4&1\\-5&-3\end{bmatrix}}{-7}=\frac{-12+5}{-7}=\frac{-7}{-7}=1,
\qquad
y=\frac{\det\begin{bmatrix}2&4\\1&-5\end{bmatrix}}{-7}=\frac{-10-4}{-7}=\frac{-14}{-7}=2.
$$

## Karma Çalışma Soruları

### Soru 1

$\det\begin{bmatrix}5&-3\\2&4\end{bmatrix}$ değerini hesaplayın.

### Soru 2

$\det\begin{bmatrix}2&0&1\\3&1&-2\\-1&4&0\end{bmatrix}$ değerini birinci satır boyunca kofaktör açılımıyla hesaplayın.

### Soru 3

$\det\begin{bmatrix}2&0&0\\-1&4&0\\3&5&-2\end{bmatrix}$ değerini en kolay yoldan hesaplayın (üçgensel yapıya dikkat).

### Soru 4

$A=\begin{bmatrix}2&1&1\\1&3&2\\1&0&2\end{bmatrix}$ matrisini satır işlemleriyle üçgensele indirerek determinantını bulun; kullandığınız işlemlerin determinanta etkisini belirtin.

### Soru 5

$\det(A)=3$ olan bir $3\times3$ matris için $\det(2A)$, $\det(A^T)$ ve $\det(A^2)$ değerlerini bulun.

### Soru 6

$$
\begin{aligned}
3x+y&=5\\
x-2y&=4
\end{aligned}
$$

sistemini Cramer kuralıyla çözün ve kontrol edin.

### Soru 7

$$
\begin{aligned}
x+2y-z&=2\\
2x-y+z&=3\\
x+y+z&=6
\end{aligned}
$$

sistemini Cramer kuralıyla çözün.

### Soru 8

Aşağıdaki kofaktör açılımındaki hatayı bulun:

$$
\det\begin{bmatrix}1&2&3\\0&4&5\\1&0&6\end{bmatrix}
=1\det\begin{bmatrix}4&5\\0&6\end{bmatrix}+2\det\begin{bmatrix}0&5\\1&6\end{bmatrix}+3\det\begin{bmatrix}0&4\\1&0\end{bmatrix}.
$$

### Soru 9

$A=\begin{bmatrix}2&4\\1&2\end{bmatrix}$ için $\det A$'yı hesaplayın. Bu sistem Cramer ile çözülebilir mi? Neden?

### Soru 10

"$\det(A+B)=\det A+\det B$" iddiasını, $A=\begin{bmatrix}1&0\\0&1\end{bmatrix}$ ve $B=\begin{bmatrix}0&1\\1&0\end{bmatrix}$ ile sınayarak değerlendirin.

## Çalışmanızı Kontrol Etme

Bu sorular için cevap anahtarı verilmemiştir. Önce çözümünüzü bütün adımlarıyla tamamlayın. Ardından bu çalışma notunu ve çözümünüzü bir yapay zekâ aracına vererek sonucunuzun kontrol edilmesini isteyebilirsiniz.

Kontrol sırasında şu istemi kullanabilirsiniz:

> Çözümümü kofaktör işaret deseni ($+,-,+$), satır işlemlerinin determinanta etkisi, $\det(kA)=k^n\det A$ kuralı, Cramer'de paydanın $\det A$ olması ve yalnız ilgili sütunun değiştirilmesi açısından incele. Hata varsa doğru cevabı hemen verme; önce hatanın bulunduğu adımı ve hata türünü belirt.
