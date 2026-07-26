---
title: "Lineer Bağımsızlık ve Wronskian: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
description: "Fonksiyon kümelerinde lineer bağımlılığı doğrudan sınama ve Wronskian hesaplama pratiği."
execute:
  echo: false
---

# Lineer Bağımsızlık ve Wronskian: Alıştırmalar

Fonksiyonlar

$$
c_1y_1+\cdots+c_ny_n\equiv0
$$

eşitliğini yalnız $c_1=\cdots=c_n=0$ katsayılarıyla sağlıyorsa lineer
bağımsızdır. Wronskian, fonksiyonlar ve türevlerinden oluşan determinantla bu
soruyu özellikle aynı lineer homojen denklemin çözümleri için sınar.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> İki ve üç fonksiyonlu altı bağımsızlık sorusu üret. Önce sabit kat ilişkisini
> veya doğrudan bağımlılığı aramamı bekle. Sonra Wronskian hesabımı satır satır
> kontrol et; determinantı baştan verme.
:::

## Doğrudan Bağımlılık

### Örnek 1: Sabit Kat

$$
f_1=e^x,\qquad f_2=3e^x.
$$

$3f_1-f_2\equiv0$ olduğundan fonksiyonlar bağımlıdır.

### Örnek 2: Sabit Olmayan Oran

$f_1=x$ ve $f_2=x^2$ için $f_2/f_1=x$ sabit değildir. Bu gözlem tek başına
her durumu çözmese de iki fonksiyon için sabit kat bağımlılığını dışlar.

## Wronskian Hesabı

### Örnek 3: Üstel Çözümler

$$
y_1=e^{2x},\qquad y_2=e^{3x}.
$$

$$
W(y_1,y_2)=
\begin{vmatrix}
e^{2x}&e^{3x}\\
2e^{2x}&3e^{3x}
\end{vmatrix}
=e^{5x}.
$$

Bu değer hiçbir $x$ için sıfır olmadığından fonksiyonlar bağımsızdır.

### Örnek 4: Trigonometrik Çözümler

$$
W(\cos3x,\sin3x)=
\begin{vmatrix}
\cos3x&\sin3x\\
-3\sin3x&3\cos3x
\end{vmatrix}=3.
$$

Dolayısıyla ikili bağımsızdır.

## Wronskian'ın Sınırı

### Örnek 5

Wronskian'ın bir noktada sıfır çıkması, keyfî fonksiyonlar için otomatik olarak
bağımlılık kanıtı değildir. Aynı lineer homojen denklemin çözümleri ve uygun
süreklilik koşulları altında ise Wronskian ya aralık boyunca sıfırdır ya da
hiç sıfır olmaz.

## Ek Çözümlü Örnekler

### Örnek A: Üç Fonksiyon

$$
y_1=1,\qquad y_2=x,\qquad y_3=x^2.
$$

$$
W=
\begin{vmatrix}
1&x&x^2\\
0&1&2x\\
0&0&2
\end{vmatrix}=2.
$$

Wronskian sıfırdan farklıdır; üç fonksiyon lineer bağımsızdır. Üçgensel
determinant doğrudan köşegen çarpımıyla hesaplanır.

### Örnek B: Bağımlılığı Hesaptan Önce Görmek

$$
y_1=\sin x,\quad y_2=\cos x,\quad
y_3=2\sin x-3\cos x.
$$

$$
2y_1-3y_2-y_3\equiv0
$$

olduğundan küme bağımlıdır. Bu açık ilişki bulunduğunda Wronskian hesabına
gerek kalmaz.

## Hata Avı

### Örnek 6: Türev Satırını Karıştırmak

İki fonksiyon için ikinci satır $y_1',y_2'$ olmalıdır. Fonksiyonlardan yalnız
birini türevlemek determinantı anlamsızlaştırır.

### Örnek 7: Noktasal Eşitliği Özdeşlik Sanmak

$c_1y_1(x_0)+c_2y_2(x_0)=0$ eşitliğinin tek bir noktada sağlanması bağımlılık
değildir. Eşitlik bütün aralıkta geçerli olmalıdır.

## Adım Adım İşlem Pratiği

### Örnek 8

$$
W(1,x)=
\begin{vmatrix}1&x\\0&1\end{vmatrix}=1.
$$

### Örnek 9

$$
W(e^x,xe^x)=
\begin{vmatrix}e^x&xe^x\\e^x&(x+1)e^x\end{vmatrix}
=e^{2x}.
$$

## Karma Çalışma Soruları

### Soru 1

$e^{-x}$ ve $5e^{-x}$ fonksiyonlarının bağımlılığını doğrudan gösterin.

### Soru 2

$\cos x$ ve $\sin x$ için Wronskian'ı hesaplayın.

### Soru 3

$e^x$ ve $e^{-x}$ için Wronskian'ı hesaplayın.

### Soru 4

$1$, $x$, $x^2$ fonksiyonlarının $3\times3$ Wronskian'ını bulun.

### Soru 5

$\cosh x$ ve $\sinh x$ fonksiyonlarının bağımsızlığını inceleyin.

### Soru 6

$x$ ve $|x|$ fonksiyonlarını $(-1,1)$ aralığında Wronskian yöntemiyle
incelemenin hangi düzgünlük sorununu taşıdığını açıklayın.

### Soru 7

Wronskian'ı $x=0$'da sıfır olan iki keyfî fonksiyonun neden hemen bağımlı
ilan edilemeyeceğini açıklayın.

### Soru 8

$y''-5y'+6y=0$ denkleminin $e^{2x}$ ve $e^{3x}$ çözümlerinin temel çözüm
kümesi oluşturup oluşturmadığını belirleyin.

## Çalışmanızı Kontrol Etme

> Çözümümü sabit katsayılı özdeşlik, türev satırları, determinant hesabı,
> Wronskian'ın aralık üzerindeki anlamı ve yöntemin varsayımları açısından
> incele. Hata varsa determinant sonucunu vermeden yanlış türevi veya işareti
> belirt.
