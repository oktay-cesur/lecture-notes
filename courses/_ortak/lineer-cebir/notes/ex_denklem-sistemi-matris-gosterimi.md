---
title: "Denklem Sistemleri ve Matris Gösterimi: Alıştırmalar"
subtitle: "Lineer Cebir — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-25
description: "Lineer sistemler ile matris gösterimleri arasında geçiş pratiği."
execute:
  echo: false
---

# Denklem Sistemleri ve Matris Gösterimi: Alıştırmalar

Bu çalışma bir lineer denklem sistemini katsayı matrisi, genişletilmiş matris ve $Ax=b$ gösterimleriyle yazma; bu gösterimler arasında hatasız geçiş yapma ve her birinin aynı sistemi taşıdığını görme becerilerini geliştirmek için hazırlanmıştır.

Sistemi matrise çevirirken en sık hata, bir denklemde görünmeyen değişkenin katsayısını atlamaktır. Görünmeyen değişkenin katsayısı sıfırdır ve matriste yerini almalıdır. Çalışma sorularını çözümlere bakmadan tamamlayın.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
Bu çalışma notunu bir yapay zekâ aracına vererek aynı becerileri hedefleyen yeni örnekler ürettirebilirsiniz. Hangi bölümü çalışmak istediğinizi, kaç soru istediğinizi ve zorluk düzeyini belirtin. Aracın çözümü hemen vermemesini; önce cevabınızı beklemesini, hatanız varsa hata türünü söylemesini ve yalnız bir ipucu vermesini isteyin.

Örnek istem:

> Bu çalışma notundaki gösterime bağlı kal. "Gösterimler arası geçiş" bölümü için aynı zorlukta beş yeni soru üret. Bazı denklemlerde bir değişken eksik olsun. Çözümleri başlangıçta verme; yanlışsa hata türünü söyle ve bir ipucu ver.

Karma çalışma soruları için hazır cevap anahtarı verilmemiştir.
:::

## Sistemden Matris Gösterimine

### Örnek 1: Katsayı ve Sağ Taraf

$$
\begin{aligned}
2x+3y-z&=5\\
x-y+4z&=-2\\
3x+2z&=7
\end{aligned}
$$

Değişkenleri $x,y,z$ sırasıyla sabitleyip katsayıları okuruz. Üçüncü denklemde $y$ görünmüyor; katsayısı sıfırdır. Katsayı matrisi, bilinmeyen vektörü ve sağ taraf:

$$
A=
\begin{bmatrix}
2&3&-1\\
1&-1&4\\
3&0&2
\end{bmatrix},
\qquad
x=
\begin{bmatrix}x\\y\\z\end{bmatrix},
\qquad
b=
\begin{bmatrix}5\\-2\\7\end{bmatrix}.
$$

**Kontrol.** Her satır bir denklemdir; her sütun bir değişkene aittir. Üçüncü satırın ikinci girdisi $0$ olmalı, çünkü $3x+2z=7$ denkleminde $y$ yok.

### Örnek 2: $Ax=b$ Biçimi

Örnek 1'deki sistem, tek bir matris denklemi olarak yazılır:

$$
\begin{bmatrix}
2&3&-1\\
1&-1&4\\
3&0&2
\end{bmatrix}
\begin{bmatrix}x\\y\\z\end{bmatrix}
=
\begin{bmatrix}5\\-2\\7\end{bmatrix}.
$$

**Kontrol.** $Ax$ çarpımını satır okumasıyla açarsanız ilk bileşen $2x+3y-z$ çıkar; bu, ilk denklemin sol tarafıdır. Gösterim doğruysa çarpım sistemi geri verir.

## Genişletilmiş Matris ve Katsayı Matrisi

### Örnek 3: Genişletilmiş Matris

Sağ tarafı katsayı matrisine bir sütun olarak eklersek genişletilmiş matris elde edilir. Ayraç çizgisi katsayılarla sabitleri ayırır:

$$
[\,A\mid b\,]=
\left[
\begin{array}{ccc|c}
2&3&-1&5\\
1&-1&4&-2\\
3&0&2&7
\end{array}
\right].
$$

**Kontrol.** Genişletilmiş matris $3\times4$'tür: üç bilinmeyenin katsayıları artı bir sabit sütunu. Satır işlemleri bu matris üzerinde yürütülür.

### Örnek 4: Genişletilmiş Matristen Sisteme

$$
\left[
\begin{array}{ccc|c}
1&0&-2&4\\
0&1&3&-1\\
0&0&1&2
\end{array}
\right]
$$

matrisini sisteme çevirelim. Sütunlar sırasıyla $x_1,x_2,x_3$'e aittir:

$$
\begin{aligned}
x_1-2x_3&=4\\
x_2+3x_3&=-1\\
x_3&=2
\end{aligned}
$$

**Kontrol.** Sıfır girdiler o denklemde ilgili değişkenin bulunmadığını gösterir. İlk denklemde $x_2$ yoktur, çünkü ikinci sütun girdisi $0$'dır.

## Gösterimler Arası Geçiş

### Örnek 5: Üç Gösterim, Tek Sistem

$$
\begin{aligned}
x+2y&=3\\
4x-y&=5
\end{aligned}
$$

Aynı sistem üç biçimde yazılır. Matris denklemi:

$$
\begin{bmatrix}1&2\\4&-1\end{bmatrix}
\begin{bmatrix}x\\y\end{bmatrix}
=
\begin{bmatrix}3\\5\end{bmatrix}.
$$

Sütun birleşimi (sütun okuması):

$$
x\begin{bmatrix}1\\4\end{bmatrix}
+y\begin{bmatrix}2\\-1\end{bmatrix}
=
\begin{bmatrix}3\\5\end{bmatrix}.
$$

**Kontrol.** Sütun birleşimi biçimi, "$b$ vektörünü $A$'nın sütunlarının hangi ağırlıklı toplamı verir?" sorusudur. Üç gösterim de aynı çözüm kümesine sahiptir.

## Hata Avı

### Örnek 6: Eksik Değişkeni Atlamak

$$
\begin{aligned}
x+2z&=4\\
3y-z&=1
\end{aligned}
$$

sistemini

$$
\left[
\begin{array}{cc|c}
1&2&4\\
3&-1&1
\end{array}
\right]
$$

biçiminde yazmak yanlıştır. İlk denklemde $y$, ikinci denklemde $x$ görünmüyor ama katsayıları sıfır olarak yerlerini almalıdır. Sistemde üç bilinmeyen ($x,y,z$) var; katsayı matrisi üç sütunlu olmalı:

$$
\left[
\begin{array}{ccc|c}
1&0&2&4\\
0&3&-1&1
\end{array}
\right].
$$

**Tanı.** Sütunlar değişkenlere göre sabittir. Bir değişken bir denklemde yoksa o hücreye $0$ yazılır; sütun atlanmaz, yoksa sütunlar kayar ve farklı bir sistem elde edilir.

## Adım Adım İşlem Pratiği

Aşağıdaki örneklerde açıklama en aza indirilmiştir; amaç gösterimler arası çevirimi hızlı ve hatasız tekrarlamaktır. Eksik değişkenlerin sıfır katsayısına dikkat edin.

### Örnek 7

$$
\begin{aligned}
x-2y+z&=4\\
3x+y&=2\\
-x+4z&=5
\end{aligned}
\quad\Rightarrow\quad
\left[\begin{array}{ccc|c}
1&-2&1&4\\
3&1&0&2\\
-1&0&4&5
\end{array}\right].
$$

### Örnek 8

$$
\left[\begin{array}{ccc|c}
2&0&-1&3\\
1&3&0&1
\end{array}\right]
\quad\Rightarrow\quad
\begin{aligned}
2x-z&=3\\
x+3y&=1
\end{aligned}
$$

### Örnek 9

$$
\begin{aligned}
x+2y&=5\\
3x-y&=1
\end{aligned}
\quad\Rightarrow\quad
\begin{bmatrix}1&2\\3&-1\end{bmatrix}
\begin{bmatrix}x\\y\end{bmatrix}
=
\begin{bmatrix}5\\1\end{bmatrix}.
$$

### Örnek 10

$$
\begin{aligned}
2x-y&=3\\
x+4y&=-1
\end{aligned}
\quad\Rightarrow\quad
x\begin{bmatrix}2\\1\end{bmatrix}+y\begin{bmatrix}-1\\4\end{bmatrix}=\begin{bmatrix}3\\-1\end{bmatrix}.
$$

## Karma Çalışma Soruları

### Soru 1

$$
\begin{aligned}
3x-y+2z&=1\\
x+4y&=-3\\
2y-5z&=6
\end{aligned}
$$

sistemi için katsayı matrisi $A$, bilinmeyen vektörü ve sağ taraf $b$'yi yazın.

### Soru 2

Soru 1'deki sistemi $Ax=b$ ve genişletilmiş matris biçiminde yazın.

### Soru 3

$$
\left[
\begin{array}{ccc|c}
2&-1&0&4\\
1&0&3&-2\\
0&5&-1&1
\end{array}
\right]
$$

genişletilmiş matrisini denklem sistemine çevirin.

### Soru 4

$$
\begin{aligned}
x-3y&=7\\
2x+y&=4
\end{aligned}
$$

sistemini matris denklemi ve sütun birleşimi biçiminde yazın.

### Soru 5

Aşağıdaki sistemi genişletilmiş matris olarak yazın; eksik değişkenlere dikkat edin:

$$
\begin{aligned}
2x+z&=5\\
y-3z&=0\\
x+y&=4
\end{aligned}
$$

### Soru 6

Aşağıdaki genişletilmiş matrisin hangi hatayla kurulduğunu açıklayın ve doğrusunu yazın. Sistem: $x+2y-z=3$, $2x+y=1$.

$$
\left[
\begin{array}{ccc|c}
1&2&-1&3\\
2&1&1&0
\end{array}
\right].
$$

### Soru 7

$A=\begin{bmatrix}1&-2\\3&1\end{bmatrix}$, $b=\begin{bmatrix}5\\-4\end{bmatrix}$ veriliyor. $Ax=b$ matris denklemini açık denklem sistemi olarak yazın.

### Soru 8

$x\begin{bmatrix}2\\1\end{bmatrix}+y\begin{bmatrix}-1\\3\end{bmatrix}=\begin{bmatrix}4\\5\end{bmatrix}$ sütun birleşimini, bir denklem sistemi ve genişletilmiş matris olarak yazın.

### Soru 9

Bir sistemin genişletilmiş matrisi $3\times5$ ise, sistemde kaç denklem ve kaç bilinmeyen vardır?

### Soru 10

$$
\left[
\begin{array}{ccc|c}
1&0&0&-2\\
0&1&0&3\\
0&0&1&5
\end{array}
\right]
$$

genişletilmiş matrisini sisteme çevirin ve çözümü doğrudan okuyun.

## Çalışmanızı Kontrol Etme

Bu sorular için cevap anahtarı verilmemiştir. Önce çözümünüzü bütün adımlarıyla tamamlayın. Ardından bu çalışma notunu ve çözümünüzü bir yapay zekâ aracına vererek sonucunuzun kontrol edilmesini isteyebilirsiniz.

Kontrol sırasında şu istemi kullanabilirsiniz:

> Çözümümü değişken–sütun eşleştirmesi, eksik değişkenlerin sıfır katsayıyla yerleştirilmesi, genişletilmiş matrisin boyutu ve gösterimler arası tutarlılık açısından incele. Hata varsa doğru cevabı hemen verme; önce hatanın bulunduğu adımı ve hata türünü belirt.
