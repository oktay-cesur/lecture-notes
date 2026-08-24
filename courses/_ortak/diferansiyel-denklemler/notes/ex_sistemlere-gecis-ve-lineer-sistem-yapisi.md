---
title: "Sistemlere Geçiş ve Lineer Sistem Yapısı: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — Kavram ve Yöntem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-24
description: "Bağlı denklemleri matris biçiminde yazma, yüksek mertebeli denklemi sisteme indirgeme, çözüm bağımsızlığı ve temel matrisi kurma pratiği."
execute:
  echo: false
---

# Sistemlere Geçiş ve Lineer Sistem Yapısı: Alıştırmalar

Durum vektörü, birlikte değişen bilinmeyenleri tek nesnede toplar. Lineer
sistemde katsayılar matrise gider; bağımsız çözüm vektörleri sütunlara
dizildiğinde temel matris oluşur.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Matrisi veya indirgenmiş sistemi önce kendiniz kurun. Yapay zekâdan yalnız
> satırların özgün denklemlerle eşleşmesini, durum boyutunu ve temel matriste
> çözümlerin sütun olup olmadığını kontrol etmesini isteyin.
:::

## Tanıma ve Karar

### Örnek 1: Durum Boyutu

İki birinci mertebe denklem iki boyutlu durum vektörü gerektirir. Tek bir
dördüncü mertebe denklem de dört yeni durum değişkeniyle dört boyutlu sisteme
iner.

### Örnek 2: Homojenlik

$$
\mathbf{x}'=A(t)\mathbf{x}+\mathbf{f}(t)
$$

sistemi $\mathbf{f}=\mathbf0$ ise homojendir. $A$'nın zamana bağlı olması
homojenlik kararını değiştirmez.

### Örnek 3: Bağımsız Denklemler

$A$ köşegen ise her denklem yalnız kendi bileşenini içerir. Köşegen dışı
elemanlar bileşenler arasındaki bağlantıyı taşır.

### Örnek 4: Kaç Çözüm?

$n$ boyutlu homojen lineer sistemin genel çözümü için $n$ bağımsız çözüm
vektörü gerekir. İki boyutlu sistemde tek bir çözüm doğrultusu yeterli değildir.

## Mekanizmayı Kurma

### Örnek 5: Matris Biçimi

$$
\begin{aligned}
x_1'&=-x_1+2x_2,\\
x_2'&=3x_1-x_2
\end{aligned}
$$

için

$$
\mathbf{x}=\begin{bmatrix}x_1\\x_2\end{bmatrix},\q\quad
A=\begin{bmatrix}-1&2\\3&-1\end{bmatrix},\q\quad
\mathbf{x}'=A\mathbf{x}
$$

yazılır. Her satır ilgili diferansiyel denklemin katsayılarını taşır.

### Örnek 6: İkinci Mertebeyi İndirgeme

$$
y''+3y'+2y=0
$$

için $x_1=y$, $x_2=y'$ seçilir. Böylece

$$
\mathbf{x}'=
\begin{bmatrix}0&1\\-2&-3\end{bmatrix}\mathbf{x}.
$$

İlk satır tanımdan, son satır $y''=-2y-3y'$ düzenlemesinden gelir.

## Temel Tam Çözümler

### Örnek 7: Üçüncü Mertebeyi Sisteme İndirgeme

$$
y'''-y''-2y'=0
$$

$x_1=y$, $x_2=y'$, $x_3=y''$ tanımlayalım. İlk iki denklem
$x_1'=x_2$, $x_2'=x_3$ olur. Özgün denklemden

$$
y'''=y''+2y'
$$

çıktığı için $x_3'=2x_2+x_3$'tür. Sonuç

$$
\boxed{
\mathbf{x}'=
\begin{bmatrix}
0&1&0\\
0&0&1\\
0&2&1
\end{bmatrix}\mathbf{x}}
$$

olur. Son satırdaki ilk sıfır, denklemde $y$ terimi bulunmamasından gelir.

### Örnek 8: Temel Matris ve Başlangıç Koşulu

$$
\mathbf{x}_1=e^{-t}\begin{bmatrix}1\\1\end{bmatrix},\q\quad
\mathbf{x}_2=e^{-2t}\begin{bmatrix}1\\-1\end{bmatrix}
$$

aynı iki boyutlu sistemin çözümleri olsun. Temel matris

$$
X(t)=\begin{bmatrix}e^{-t}&e^{-2t}\\e^{-t}&-e^{-2t}\end{bmatrix}
$$

ve $\det X=-2e^{-3t}\neq0$'dır. $\mathbf{x}(0)=[4,0]^T$ koşulu

$$
\begin{bmatrix}1&1\\1&-1\end{bmatrix}
\begin{bmatrix}c_1\\c_2\end{bmatrix}
=\begin{bmatrix}4\\0\end{bmatrix}
$$

verir. $c_1=c_2=2$ ve

$$
\boxed{\mathbf{x}=2\mathbf{x}_1+2\mathbf{x}_2}
$$

olur.

## Hata Avı

### Örnek 9: İlk Hata Nerede?

Bir öğrenci temel matrisi çözüm vektörlerini satır olarak yazarak kuruyor.
İlk hata budur: çözümler sütunlara dizilmelidir. Ancak o zaman her sütun
$\mathbf{x}_i'=A\mathbf{x}_i$ denklemini sağlar ve $X'=AX$ elde edilir.

## Karşılaştırma

### Örnek 10: Tek Denklem ve Sistem

$n$'inci mertebe tek denklemde $n$ başlangıç değeri gerekir. İndirgenmiş
$n$ boyutlu sistemde aynı bilgi tek bir $\mathbf{x}(t_0)=\mathbf{x}_0$
vektör koşulunda toplanır; bu vektörün $n$ bileşeni vardır.

## Hafif Karma Örnek

### Örnek 11: Vektör Çözümü Doğrulama

$$
A=\begin{bmatrix}-1&0\\0&-2\end{bmatrix},\q\quad
\mathbf{x}=\begin{bmatrix}3e^{-t}\\-e^{-2t}\end{bmatrix}
$$

olsun. Türev

$$
\mathbf{x}'=\begin{bmatrix}-3e^{-t}\\2e^{-2t}\end{bmatrix}
$$

ve matris çarpımı da aynı vektördür. Dolayısıyla çözüm doğrulanır. Köşegen
matris nedeniyle iki bileşen bağımsız olarak sönmektedir.

## Karma Çalışma Soruları

### Soru 1

Aşağıdaki sistemi $\mathbf{x}'=A\mathbf{x}+\mathbf{f}(t)$ biçiminde yazın:

$$
x_1'=2x_1-x_2+t,
\q\quad
x_2'=3x_1+4x_2-e^t.
$$

### Soru 2

$$
y''+3y'+2y=0
$$

denklemini $x_1=y$, $x_2=y'$ seçimiyle iki boyutlu birinci mertebe sisteme
dönüştürün.

### Soru 3

$$
y'''-2y''+y'=\sin t
$$

denklemini üç boyutlu birinci mertebe sisteme dönüştürün; girdi vektörünü
açıkça gösterin.

### Soru 4

$$
X(t)=\begin{bmatrix}e^t&0\\0&e^{-2t}\end{bmatrix}
$$

matrisinin hangi sabit $A$ matrisi için $X'=AX$ eşitliğini sağladığını bulun.

### Soru 5

$$
\mathbf{x}_1=\begin{bmatrix}e^t\\e^t\end{bmatrix},
\q\quad
\mathbf{x}_2=\begin{bmatrix}2e^t\\2e^t\end{bmatrix}
$$

çözümlerinin neden temel matris oluşturamayacağını determinantla gösterin.

### Soru 6

$$
A=\begin{bmatrix}0&1\\-2&-3\end{bmatrix},
\q\quad
\mathbf{x}=\begin{bmatrix}e^{-t}\\-e^{-t}\end{bmatrix}
$$

için $\mathbf{x}'=A\mathbf{x}$ eşitliğini doğrudan doğrulayın.

### Soru 7

Dördüncü mertebeden

$$
y^{(4)}+a_3y'''+a_2y''+a_1y'+a_0y=g(t)
$$

denkleminin durum vektörünü ve sistem matrisinin son satırını yazın.

### Soru 8

$\mathbf{x}(t_0)=\mathbf{x}_0$ vektör koşulunun üçüncü mertebeden tek bir
denklemde hangi üç skaler başlangıç koşuluna karşılık geldiğini açıklayın.

## Çalışmanızı Kontrol Etme

> Çalışmamı durum boyutu, matris satırlarının denklemlerle eşleşmesi,
> indirgemede son satırın işaretleri, çözüm vektörlerinin sütun olması ve
> Wronskian determinantı açısından incele. Hata varsa doğru matrisi vermeden
> ilk uyuşmayan satırı belirt.
