---
title: "Ters Matris: Alıştırmalar"
subtitle: "Lineer Cebir — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-25
description: "Tersinirlik kontrolü ve Gauss-Jordan ile ters matris bulma pratiği."
execute:
  echo: false
---

# Ters Matris: Alıştırmalar

Bu çalışma bir kare matrisin tersinir olup olmadığına karar verme, $2\times2$ kısa formülle tersi bulma, $[\,A\mid I\,]\to[\,I\mid A^{-1}\,]$ Gauss-Jordan yöntemiyle daha büyük matrislerin tersini hesaplama ve tersi kullanarak $Ax=b$ sistemini çözme becerilerini geliştirmek için hazırlanmıştır.

Ters yalnız kare matrislerde tanımlıdır ve her kare matris tersinir değildir. Çalışma sorularını çözümlere bakmadan tamamlayın.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
Bu çalışma notunu bir yapay zekâ aracına vererek aynı becerileri hedefleyen yeni örnekler ürettirebilirsiniz. Hangi bölümü çalışmak istediğinizi, kaç soru istediğinizi ve zorluk düzeyini belirtin. Aracın çözümü hemen vermemesini; önce cevabınızı beklemesini, hatanız varsa hata türünü söylemesini ve yalnız bir ipucu vermesini isteyin.

Örnek istem:

> Bu çalışma notundaki gösterime bağlı kal. "[A | I] → [I | A⁻¹] yöntemi" bölümü için aynı zorlukta beş yeni $3\times3$ soru üret; bir tanesi tersinir olmasın. Çözümleri başlangıçta verme; yanlışsa hata türünü söyle ve bir ipucu ver.

Karma çalışma soruları için hazır cevap anahtarı verilmemiştir.
:::

## Tersinirlik Kontrolü

### Örnek 1: $2\times2$ Determinant Ölçütü

$A=\begin{bmatrix}a&b\\c&d\end{bmatrix}$ tersinirdir ancak ve ancak $ad-bc\neq0$.

$$
A=\begin{bmatrix}2&1\\3&2\end{bmatrix}
\Rightarrow ad-bc=2\cdot2-1\cdot3=1\neq0\ (\text{tersinir}),
$$

$$
B=\begin{bmatrix}2&4\\1&2\end{bmatrix}
\Rightarrow ad-bc=2\cdot2-4\cdot1=0\ (\text{tersinir değil}).
$$

**Karar kuralı.** $ad-bc=0$ ise matrisin tersi yoktur; formülde $\tfrac1{ad-bc}$ tanımsız olur. Büyük matrislerde ölçüt, eliminasyonun her sütunda bir pivot vermesidir.

## $[\,A\mid I\,]\to[\,I\mid A^{-1}\,]$ Yöntemi

### Örnek 2: $2\times2$ Gauss-Jordan

$A=\begin{bmatrix}2&1\\3&2\end{bmatrix}$ için sağa birim matrisi ekleyip sol tarafı $I$ yapacak satır işlemlerini uygularız:

$$
\left[\begin{array}{cc|cc}2&1&1&0\\3&2&0&1\end{array}\right]
\xrightarrow{R_1\leftarrow\tfrac12 R_1}
\left[\begin{array}{cc|cc}1&\tfrac12&\tfrac12&0\\3&2&0&1\end{array}\right]
\xrightarrow{R_2\leftarrow R_2-3R_1}
\left[\begin{array}{cc|cc}1&\tfrac12&\tfrac12&0\\0&\tfrac12&-\tfrac32&1\end{array}\right].
$$

$$
\xrightarrow{R_2\leftarrow 2R_2}
\left[\begin{array}{cc|cc}1&\tfrac12&\tfrac12&0\\0&1&-3&2\end{array}\right]
\xrightarrow{R_1\leftarrow R_1-\tfrac12 R_2}
\left[\begin{array}{cc|cc}1&0&2&-1\\0&1&-3&2\end{array}\right].
$$

Sol taraf $I$ oldu; sağ taraf tersi verir:

$$
A^{-1}=\begin{bmatrix}2&-1\\-3&2\end{bmatrix}.
$$

**Kontrol.** $AA^{-1}=I$ olduğunu çarparak sınayın: $\begin{bmatrix}2&1\\3&2\end{bmatrix}\begin{bmatrix}2&-1\\-3&2\end{bmatrix}=\begin{bmatrix}1&0\\0&1\end{bmatrix}$.

### Örnek 3: $3\times3$ Gauss-Jordan

$A=\begin{bmatrix}1&1&0\\0&1&1\\0&0&1\end{bmatrix}$ için:

$$
\left[\begin{array}{ccc|ccc}
1&1&0&1&0&0\\
0&1&1&0&1&0\\
0&0&1&0&0&1
\end{array}\right]
\xrightarrow{R_2\leftarrow R_2-R_3}
\left[\begin{array}{ccc|ccc}
1&1&0&1&0&0\\
0&1&0&0&1&-1\\
0&0&1&0&0&1
\end{array}\right]
\xrightarrow{R_1\leftarrow R_1-R_2}
\left[\begin{array}{ccc|ccc}
1&0&0&1&-1&1\\
0&1&0&0&1&-1\\
0&0&1&0&0&1
\end{array}\right].
$$

$$
A^{-1}=\begin{bmatrix}1&-1&1\\0&1&-1\\0&0&1\end{bmatrix}.
$$

**Kontrol.** Sol blok tam olarak $I$ olmadan sağ bloğu ters diye okumayın. Ayrıca $AA^{-1}=I$ çarpımıyla doğrulayın.

## $2\times2$ Kısa Formül

### Örnek 4: Formülle Ters

$ad-bc\neq0$ için

$$
\begin{bmatrix}a&b\\c&d\end{bmatrix}^{-1}
=\frac{1}{ad-bc}\begin{bmatrix}d&-b\\-c&a\end{bmatrix}.
$$

$A=\begin{bmatrix}4&3\\2&2\end{bmatrix}$ için $ad-bc=8-6=2$:

$$
A^{-1}=\frac12\begin{bmatrix}2&-3\\-2&4\end{bmatrix}
=\begin{bmatrix}1&-\tfrac32\\-1&2\end{bmatrix}.
$$

**Kontrol.** Formül köşegeni yer değiştirir ($a$ ile $d$), köşegen dışını işaret değiştirir ($b,c$). Yalnız birini uygulamak sık yapılan hatadır.

## Ters ile Sistem Çözme

### Örnek 5: $x=A^{-1}b$

$A=\begin{bmatrix}2&1\\3&2\end{bmatrix}$, $b=\begin{bmatrix}4\\7\end{bmatrix}$ için $Ax=b$ sistemini çözelim. $A^{-1}$'i Örnek 2'de bulmuştuk:

$$
x=A^{-1}b=
\begin{bmatrix}2&-1\\-3&2\end{bmatrix}
\begin{bmatrix}4\\7\end{bmatrix}
=
\begin{bmatrix}8-7\\-12+14\end{bmatrix}
=
\begin{bmatrix}1\\2\end{bmatrix}.
$$

**Kontrol.** Çözümü özgün sistemde sınayın: $2\cdot1+1\cdot2=4$ ve $3\cdot1+2\cdot2=7$. Ayrıca $Ax=b$'de tersi **soldan** çarparız; $x=A^{-1}b$, $bA^{-1}$ değil.

## Hata Avı

### Örnek 6: Eleman Bazlı "Ters"

$A=\begin{bmatrix}2&0\\0&4\end{bmatrix}$ için tersi $\begin{bmatrix}\tfrac12&0\\0&\tfrac14\end{bmatrix}$ yazmak bu **özel** köşegen durumda doğru sonucu verir; ama genel bir matriste her elemanın çarpmaya göre tersini almak ($a_{ij}\to 1/a_{ij}$) yanlıştır. Örneğin $\begin{bmatrix}1&2\\3&4\end{bmatrix}$ için terslerin eleman eleman alınması matrisin tersini vermez.

**Tanı.** Matris tersi, "her elemanı çevir" işlemi değildir. Köşegen matris dışında formül ya da Gauss-Jordan gerekir.

### Örnek 7: Sıra Hatası

$Ax=b$ çözümünde $x=bA^{-1}$ yazmak yanlıştır (üstelik boyutlar da uymaz). Doğru olan, tersini soldan çarpmaktır: $x=A^{-1}b$.

## Adım Adım İşlem Pratiği

Aşağıdaki örneklerde açıklama en aza indirilmiştir; amaç $2\times2$ ters formülünü hızlı ve hatasız uygulamaktır. Formül: $\begin{bmatrix}a&b\\c&d\end{bmatrix}^{-1}=\dfrac{1}{ad-bc}\begin{bmatrix}d&-b\\-c&a\end{bmatrix}$.

### Örnek 8

$A=\begin{bmatrix}3&5\\1&2\end{bmatrix}$, $ad-bc=6-5=1$:

$$
A^{-1}=\frac{1}{1}\begin{bmatrix}2&-5\\-1&3\end{bmatrix}=\begin{bmatrix}2&-5\\-1&3\end{bmatrix}.
$$

### Örnek 9

$A=\begin{bmatrix}5&2\\2&1\end{bmatrix}$, $ad-bc=5-4=1$:

$$
A^{-1}=\frac{1}{1}\begin{bmatrix}1&-2\\-2&5\end{bmatrix}=\begin{bmatrix}1&-2\\-2&5\end{bmatrix}.
$$

### Örnek 10

$A=\begin{bmatrix}1&2\\3&7\end{bmatrix}$, $ad-bc=7-6=1$:

$$
A^{-1}=\begin{bmatrix}7&-2\\-3&1\end{bmatrix}.
$$

### Örnek 11

$A=\begin{bmatrix}3&5\\1&2\end{bmatrix}$, $b=\begin{bmatrix}1\\1\end{bmatrix}$ için $x=A^{-1}b$ (Örnek 8'deki tersi):

$$
x=\begin{bmatrix}2&-5\\-1&3\end{bmatrix}\begin{bmatrix}1\\1\end{bmatrix}
=\begin{bmatrix}2-5\\-1+3\end{bmatrix}
=\begin{bmatrix}-3\\2\end{bmatrix}.
$$

## Karma Çalışma Soruları

### Soru 1

$A=\begin{bmatrix}2&7\\1&4\end{bmatrix}$ tersinir mi? $2\times2$ ölçütle karar verin, tersinirse formülle tersini bulun.

### Soru 2

$B=\begin{bmatrix}6&3\\4&2\end{bmatrix}$ matrisinin tersi var mı? Gerekçelendirin.

### Soru 3

$A=\begin{bmatrix}1&2\\3&4\end{bmatrix}$ için $[\,A\mid I\,]\to[\,I\mid A^{-1}\,]$ yöntemiyle tersini bulun ve $AA^{-1}=I$ ile doğrulayın.

### Soru 4

$A=\begin{bmatrix}1&0&2\\0&1&0\\0&0&1\end{bmatrix}$ için Gauss-Jordan ile tersini bulun.

### Soru 5

$A=\begin{bmatrix}2&1&0\\1&1&0\\0&0&3\end{bmatrix}$ matrisinin tersini bulun. (İpucu: alt-sağ blok köşegen; sol-üst $2\times2$ bloğa formül uygulayabilirsiniz.)

### Soru 6

$A=\begin{bmatrix}5&2\\-3&-1\end{bmatrix}$, $b=\begin{bmatrix}1\\4\end{bmatrix}$ için $Ax=b$ sistemini $x=A^{-1}b$ ile çözün ve kontrol edin.

### Soru 7

Aşağıdaki hesabın hatasını bulun: $\begin{bmatrix}1&2\\3&4\end{bmatrix}^{-1}=\begin{bmatrix}1&\tfrac12\\\tfrac13&\tfrac14\end{bmatrix}$.

### Soru 8

$2\times2$ kısa formülü kullanırken $\begin{bmatrix}a&b\\c&d\end{bmatrix}^{-1}=\dfrac{1}{ad-bc}\begin{bmatrix}a&-b\\-c&d\end{bmatrix}$ yazan bir öğrencinin hatasını açıklayın.

### Soru 9

$A$ tersinir ve $A^{-1}=\begin{bmatrix}2&-1\\-3&2\end{bmatrix}$ ise $A$ nedir? (İpucu: $(A^{-1})^{-1}=A$.)

### Soru 10

Bir $3\times3$ matris için $[\,A\mid I\,]$ üzerinde eliminasyon yaparken sol blokta bir sıfır satırı çıkıyor. Bu ne anlama gelir?

## Çalışmanızı Kontrol Etme

Bu sorular için cevap anahtarı verilmemiştir. Önce çözümünüzü bütün adımlarıyla tamamlayın. Ardından bu çalışma notunu ve çözümünüzü bir yapay zekâ aracına vererek sonucunuzun kontrol edilmesini isteyebilirsiniz.

Kontrol sırasında şu istemi kullanabilirsiniz:

> Çözümümü tersinirlik kararı ($ad-bc$ / pivot), Gauss-Jordan adımlarının doğruluğu, $2\times2$ formülünde yer değiştirme ve işaret, $x=A^{-1}b$ sırası ve $AA^{-1}=I$ doğrulaması açısından incele. Hata varsa doğru cevabı hemen verme; önce hatanın bulunduğu adımı ve hata türünü belirt.
