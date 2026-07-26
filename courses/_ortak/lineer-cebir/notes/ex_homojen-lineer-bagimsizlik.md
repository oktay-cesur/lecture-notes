---
title: "Homojen Sistemler ve Lineer Bağımsızlık: Alıştırmalar"
subtitle: "Lineer Cebir — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-25
description: "Homojen sistemlerin çözümü ve lineer bağımsızlık kontrolü pratiği."
execute:
  echo: false
---

# Homojen Sistemler ve Lineer Bağımsızlık: Alıştırmalar

Bu çalışma homojen sistem $Ax=0$'ı çözme, aşikâr olmayan çözümün ne zaman var olduğuna rankla karar verme ve bir vektör kümesinin lineer bağımsız olup olmadığını sınama becerilerini geliştirmek için hazırlanmıştır.

İki fikir aynı hesaba dayanır: vektörlerin lineer bağımsızlığı, o vektörleri sütun kabul eden homojen sistemin yalnız aşikâr çözüme sahip olmasıyla aynı şeydir. Çalışma sorularını çözümlere bakmadan tamamlayın.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
Bu çalışma notunu bir yapay zekâ aracına vererek aynı becerileri hedefleyen yeni örnekler ürettirebilirsiniz. Hangi bölümü çalışmak istediğinizi, kaç soru istediğinizi ve zorluk düzeyini belirtin. Aracın çözümü hemen vermemesini; önce cevabınızı beklemesini, hatanız varsa hata türünü söylemesini ve yalnız bir ipucu vermesini isteyin.

Örnek istem:

> Bu çalışma notundaki gösterime bağlı kal. "Lineer bağımsızlık kontrolü" bölümü için aynı zorlukta beş yeni vektör kümesi üret; bazıları bağımlı, bazıları bağımsız olsun. Çözümleri başlangıçta verme; yanlışsa hata türünü söyle ve bir ipucu ver.

Karma çalışma soruları için hazır cevap anahtarı verilmemiştir.
:::

## Homojen Sistemin Çözümü

### Örnek 1: Aşikâr Çözüm Her Zaman Vardır

$Ax=0$ homojen sistemidir; $x=0$ (bütün bilinmeyenler sıfır) her zaman bir çözümdür. Bu çözüme aşikâr (trivial) çözüm denir. Bu yüzden homojen sistem asla çözümsüz değildir; soru, aşikâr olmayan bir çözümün de bulunup bulunmadığıdır.

$$
\begin{aligned}
x+2y-z&=0\\
2x+y+z&=0
\end{aligned}
\ \Rightarrow\ 
\left[\begin{array}{ccc|c}1&2&-1&0\\2&1&1&0\end{array}\right]
\xrightarrow{R_2\leftarrow R_2-2R_1}
\left[\begin{array}{ccc|c}1&2&-1&0\\0&-3&3&0\end{array}\right].
$$

İkinci satır $-3y+3z=0$, yani $y=z$. İlk satır $x+2y-z=0$, yani $x=z-2y=-z$. $z=t$ dersek

$$
(x,y,z)=t(-1,1,1),\qquad t\in\mathbb{R}.
$$

Aşikâr olmayan çözümler var; $t\neq0$ için sıfırdan farklı çözümler elde edilir.

**Kontrol.** Homojen sistemde sağ taraf sütunu hep sıfırdır ve satır işlemleri onu değiştirmez; genişletilmiş matriste sabit sütununu yazmak isteğe bağlıdır.

## Aşikâr Olmayan Çözüm Koşulu

### Örnek 2: Rank ve Serbest Değişken

$Ax=0$ sisteminin aşikâr olmayan çözümü vardır ancak ve ancak $\operatorname{rank}(A)<n$ (bilinmeyen sayısı), yani en az bir serbest değişken varsa. Örnek 1'de üç bilinmeyen, rank $2$ olduğundan bir serbest değişken çıktı ve aşikâr olmayan çözümler oluştu.

Özel bir sonuç: denklem sayısı bilinmeyen sayısından **az** olan bir homojen sistemin ($m<n$) her zaman aşikâr olmayan çözümü vardır; çünkü rank en fazla $m<n$ olur.

**Karar kuralı.** Yalnız aşikâr çözüm $\iff \operatorname{rank}(A)=n$. Aşikâr olmayan çözüm $\iff \operatorname{rank}(A)<n$.

## Lineer Bağımsızlık Kontrolü

### Örnek 3: İki Vektör

$v_1=\begin{bmatrix}1\\2\end{bmatrix}$, $v_2=\begin{bmatrix}3\\4\end{bmatrix}$ bağımsız mı? Bunları sütun kabul eden matrisi indirgeriz:

$$
\begin{bmatrix}1&3\\2&4\end{bmatrix}
\xrightarrow{R_2\leftarrow R_2-2R_1}
\begin{bmatrix}1&3\\0&-2\end{bmatrix}.
$$

İki pivot var, rank $2=$ vektör sayısı. $c_1v_1+c_2v_2=0$ yalnız $c_1=c_2=0$ ile sağlanır; vektörler lineer bağımsızdır.

Buna karşılık $w_1=\begin{bmatrix}1\\2\end{bmatrix}$, $w_2=\begin{bmatrix}2\\4\end{bmatrix}$ için $w_2=2w_1$; rank $1<2$, vektörler bağımlıdır.

**Karar kuralı.** $k$ vektör sütun yapılır; rank $=k$ ise bağımsız, rank $<k$ ise bağımlıdır.

### Örnek 4: Üç Vektör

$$
v_1=\begin{bmatrix}1\\0\\1\end{bmatrix},
\quad
v_2=\begin{bmatrix}0\\1\\1\end{bmatrix},
\quad
v_3=\begin{bmatrix}1\\1\\2\end{bmatrix}.
$$

$$
\begin{bmatrix}1&0&1\\0&1&1\\1&1&2\end{bmatrix}
\xrightarrow{R_3\leftarrow R_3-R_1}
\begin{bmatrix}1&0&1\\0&1&1\\0&1&1\end{bmatrix}
\xrightarrow{R_3\leftarrow R_3-R_2}
\begin{bmatrix}1&0&1\\0&1&1\\0&0&0\end{bmatrix}.
$$

Rank $2<3$; vektörler bağımlıdır. Nitekim $v_3=v_1+v_2$.

**Kontrol.** Bağımlılık bulduğunuzda somut bir ilişki yazabiliyor olmalısınız: burada $v_1+v_2-v_3=0$.

## Hata Avı

### Örnek 5: "Homojen Sistemin Çözümü Yok"

$Ax=0$ için "çözüm yok" demek her zaman yanlıştır. Aşikâr çözüm $x=0$ daima vardır. Doğru soru, aşikâr **olmayan** çözümün var olup olmadığıdır.

**Tanı.** Homojen sistem tutarlıdır; sağ taraf sıfır olduğundan çelişki satırı ($0=c$, $c\neq0$) hiç oluşmaz.

### Örnek 6: Sayı Fazlaysa Bağımsızlık Varsaymak

$\mathbb{R}^2$'de üç vektörün lineer bağımsız olduğunu iddia etmek yanlıştır. Vektör sayısı ($3$) boyuttan ($2$) fazlaysa küme zorunlu olarak bağımlıdır; rank en fazla $2$ olabilir, üç vektör için rank $<3$ garantidir.

**Karar kuralı.** $\mathbb{R}^n$'de $n$'den fazla vektör her zaman lineer bağımlıdır.

## Adım Adım İşlem Pratiği

Aşağıdaki örneklerde açıklama en aza indirilmiştir; amaç homojen çözüm ve bağımsızlık kararını hızlı vermektir.

### Örnek 7

$\begin{aligned}x+y+z&=0\\x-y+2z&=0\end{aligned}$:

$$
\begin{bmatrix}1&1&1\\1&-1&2\end{bmatrix}
\xrightarrow{R_2\leftarrow R_2-R_1}
\begin{bmatrix}1&1&1\\0&-2&1\end{bmatrix}.
$$

$-2y+z=0\Rightarrow z=2y$; $x+y+z=0\Rightarrow x=-3y$. $y=t$: $(x,y,z)=t(-3,1,2)$.

### Örnek 8

$v_1=\begin{bmatrix}1\\2\end{bmatrix}$, $v_2=\begin{bmatrix}3\\6\end{bmatrix}$:

$$
\begin{bmatrix}1&3\\2&6\end{bmatrix}
\xrightarrow{R_2\leftarrow R_2-2R_1}
\begin{bmatrix}1&3\\0&0\end{bmatrix}
\Rightarrow \operatorname{rank}=1<2\ (\text{bağımlı}).
$$

### Örnek 9

$v_1=\begin{bmatrix}1\\2\\1\end{bmatrix}$, $v_2=\begin{bmatrix}0\\1\\1\end{bmatrix}$, $v_3=\begin{bmatrix}2\\5\\3\end{bmatrix}$ (sütun yapılır):

$$
\begin{bmatrix}1&0&2\\2&1&5\\1&1&3\end{bmatrix}
\xrightarrow[R_3\leftarrow R_3-R_1]{R_2\leftarrow R_2-2R_1}
\begin{bmatrix}1&0&2\\0&1&1\\0&1&1\end{bmatrix}
\xrightarrow{R_3\leftarrow R_3-R_2}
\begin{bmatrix}1&0&2\\0&1&1\\0&0&0\end{bmatrix}.
$$

$\operatorname{rank}=2<3\Rightarrow$ bağımlı; $v_3=2v_1+v_2$.

### Örnek 10

$v_1=\begin{bmatrix}1\\1\\0\end{bmatrix}$, $v_2=\begin{bmatrix}0\\1\\1\end{bmatrix}$, $v_3=\begin{bmatrix}1\\0\\1\end{bmatrix}$:

$$
\begin{bmatrix}1&0&1\\1&1&0\\0&1&1\end{bmatrix}
\xrightarrow{R_2\leftarrow R_2-R_1}
\begin{bmatrix}1&0&1\\0&1&-1\\0&1&1\end{bmatrix}
\xrightarrow{R_3\leftarrow R_3-R_2}
\begin{bmatrix}1&0&1\\0&1&-1\\0&0&2\end{bmatrix}.
$$

$\operatorname{rank}=3\Rightarrow$ bağımsız.

## Karma Çalışma Soruları

### Soru 1

$$
\begin{aligned}
x+y+z&=0\\
x-y+2z&=0
\end{aligned}
$$

homojen sisteminin aşikâr olmayan çözümü var mı? Varsa parametrik olarak yazın.

### Soru 2

$$
\begin{aligned}
2x+y&=0\\
x-3y&=0
\end{aligned}
$$

sistemini çözün. Yalnız aşikâr çözüm mü var?

### Soru 3

$v_1=\begin{bmatrix}2\\1\end{bmatrix}$, $v_2=\begin{bmatrix}4\\2\end{bmatrix}$ lineer bağımsız mı? Gerekçelendirin.

### Soru 4

$v_1=\begin{bmatrix}1\\0\\-1\end{bmatrix}$, $v_2=\begin{bmatrix}2\\1\\0\end{bmatrix}$, $v_3=\begin{bmatrix}0\\1\\2\end{bmatrix}$ vektörlerinin lineer bağımsızlığını inceleyin; bağımlıysa bir ilişki yazın.

### Soru 5

Bir homojen sistemde $4$ bilinmeyen ve katsayı matrisinin rankı $3$ ise aşikâr olmayan çözüm var mıdır? Kaç serbest değişken vardır?

### Soru 6

$\mathbb{R}^3$'te dört vektör verildiğinde bunların lineer bağımsız olup olamayacağını, hesap yapmadan söyleyin.

### Soru 7

$v_1=\begin{bmatrix}1\\2\\3\end{bmatrix}$, $v_2=\begin{bmatrix}0\\1\\4\end{bmatrix}$, $v_3=\begin{bmatrix}0\\0\\5\end{bmatrix}$ vektörlerinin lineer bağımsızlığını inceleyin.

### Soru 8

Aşağıdaki iddiayı değerlendirin: "$Ax=0$ sisteminin çözümü yoktur." Nerede yanlış?

### Soru 9

$$
\begin{aligned}
x+2y-z&=0\\
2x+4y-2z&=0\\
-x-2y+z&=0
\end{aligned}
$$

sisteminin çözüm kümesini parametrik biçimde yazın.

### Soru 10

Bir kare $A$ matrisi için $Ax=0$ yalnız aşikâr çözüme sahipse $A$ hakkında (tersinirlik açısından) ne söylenebilir?

## Çalışmanızı Kontrol Etme

Bu sorular için cevap anahtarı verilmemiştir. Önce çözümünüzü bütün adımlarıyla tamamlayın. Ardından bu çalışma notunu ve çözümünüzü bir yapay zekâ aracına vererek sonucunuzun kontrol edilmesini isteyebilirsiniz.

Kontrol sırasında şu istemi kullanabilirsiniz:

> Çözümümü aşikâr çözümün her zaman var olduğu, aşikâr olmayan çözüm için rank $<n$ koşulu, lineer bağımsızlık için rank $=k$ ölçütü ve "boyuttan fazla vektör bağımlıdır" kuralı açısından incele. Hata varsa doğru cevabı hemen verme; önce hatanın bulunduğu adımı ve hata türünü belirt.
