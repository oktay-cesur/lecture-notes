---
title: "Elementer Matrisler: Alıştırmalar"
subtitle: "Lineer Cebir — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-25
description: "Satır işlemlerini elementer matrislerle ifade etme pratiği."
execute:
  echo: false
---

# Elementer Matrisler: Alıştırmalar

Bu çalışma bir elementer satır işlemini karşılık gelen elementer matrisle yazma, bir satır işlemini bir matrise soldan çarpma yoluyla uygulama, eliminasyonu elementer matrislerin çarpımı olarak ifade etme ve bir elementer matrisin tersini bulma becerilerini geliştirmek için hazırlanmıştır.

Temel kural: bir elementer matris, birim matrise **tek bir** satır işlemi uygulanarak elde edilir; bu matrisi bir $A$ matrisine **soldan** çarpmak, aynı satır işlemini $A$'ya uygular. Çalışma sorularını çözümlere bakmadan tamamlayın.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
Bu çalışma notunu bir yapay zekâ aracına vererek aynı becerileri hedefleyen yeni örnekler ürettirebilirsiniz. Hangi bölümü çalışmak istediğinizi, kaç soru istediğinizi ve zorluk düzeyini belirtin. Aracın çözümü hemen vermemesini; önce cevabınızı beklemesini, hatanız varsa hata türünü söylemesini ve yalnız bir ipucu vermesini isteyin.

Örnek istem:

> Bu çalışma notundaki gösterime bağlı kal. "Satır işlemini elementer matrisle yazma" bölümü için aynı zorlukta beş yeni soru üret. Çözümleri başlangıçta verme; yanlışsa hata türünü söyle ve bir ipucu ver.

Karma çalışma soruları için hazır cevap anahtarı verilmemiştir.
:::

## Satır İşlemini Elementer Matrisle Yazma

### Örnek 1: Üç İşlem Tipinin Matrisi

$3\times3$ birim matristen başlayarak:

$$
R_2\leftrightarrow R_3:\ 
E_1=
\begin{bmatrix}1&0&0\\0&0&1\\0&1&0\end{bmatrix},
\quad
R_2\leftarrow 4R_2:\ 
E_2=
\begin{bmatrix}1&0&0\\0&4&0\\0&0&1\end{bmatrix},
\quad
R_3\leftarrow R_3+2R_2:\ 
E_3=
\begin{bmatrix}1&0&0\\0&1&0\\0&2&1\end{bmatrix}.
$$

**Kontrol.** Her elementer matris, birim matristen yalnız bir işlem farkla ayrılır. $E_3$'te $(3,2)$ girdisi $2$'dir; çünkü $R_3$'e $R_2$'nin $2$ katı eklenmiştir.

### Örnek 2: Soldan Çarpım İşlemi Uygular

$$
A=
\begin{bmatrix}1&3\\2&5\end{bmatrix},
\qquad
E=
\begin{bmatrix}1&0\\-2&1\end{bmatrix}
\ (R_2\leftarrow R_2-2R_1).
$$

$$
EA=
\begin{bmatrix}1&3\\2-2\cdot1&5-2\cdot3\end{bmatrix}
=
\begin{bmatrix}1&3\\0&-1\end{bmatrix}.
$$

Sonuç, $A$'ya $R_2\leftarrow R_2-2R_1$ uygulanmış hâlidir.

**Kontrol.** Çarpım gerçekten o işlemi yaptı mı? İlk satır değişmedi ($E$'nin ilk satırı birim), ikinci satır beklenen biçimde güncellendi.

## Eliminasyonu Çarpım Olarak İfade Etme

### Örnek 3: Ardışık İşlemler

$$
A=
\begin{bmatrix}1&2\\3&4\end{bmatrix}.
$$

$R_2\leftarrow R_2-3R_1$ işlemi $E_1=\begin{bmatrix}1&0\\-3&1\end{bmatrix}$ ile:

$$
E_1 A=
\begin{bmatrix}1&2\\0&-2\end{bmatrix}.
$$

Ardından $R_2\leftarrow-\tfrac12 R_2$ işlemi $E_2=\begin{bmatrix}1&0\\0&-\tfrac12\end{bmatrix}$ ile:

$$
E_2 E_1 A=
\begin{bmatrix}1&2\\0&1\end{bmatrix}.
$$

İki işlem birlikte $E_2 E_1 A$ çarpımı olarak yazılır. Sıraya dikkat: **son** uygulanan işlem **en solda** durur.

**Kontrol.** İşlemleri uyguladığınız sırayla soldan sağa değil, tersten yazarsınız. Önce $E_1$, sonra $E_2$ uygulandığından çarpım $E_2E_1A$'dır.

## Elementer Matrisin Tersi

### Örnek 4: Her İşlemin Geri Alınışı

Her elementer matris tersinirdir ve tersi, işlemi geri alan elementer matristir:

$$
R_2\leftarrow R_2-2R_1:\ 
E=\begin{bmatrix}1&0\\-2&1\end{bmatrix},
\qquad
E^{-1}=\begin{bmatrix}1&0\\2&1\end{bmatrix}\ (R_2\leftarrow R_2+2R_1).
$$

Doğrulayalım:

$$
EE^{-1}=
\begin{bmatrix}1&0\\-2&1\end{bmatrix}
\begin{bmatrix}1&0\\2&1\end{bmatrix}
=
\begin{bmatrix}1&0\\0&1\end{bmatrix}=I.
$$

**Karar kuralı.** Satır değişiminin tersi kendisidir. $k$ ile çarpmanın tersi $\tfrac1k$ ile çarpmadır. $R_i\leftarrow R_i+kR_j$'nin tersi $R_i\leftarrow R_i-kR_j$'dir.

## Hata Avı

### Örnek 5: Soldan Değil Sağdan Çarpmak

Satır işlemleri elementer matrisin **soldan** çarpımına karşılık gelir. Aynı $E$ ile $A$'yı **sağdan** çarpmak ($AE$) bir satır işlemi değil, bir **sütun** işlemi yapar. Örneğin $E=\begin{bmatrix}1&0\\-2&1\end{bmatrix}$ için $AE$, $A$'nın sütunları üzerinde işlem uygular ve genelde $EA$'dan farklı çıkar.

**Tanı.** "Satır işlemi mi istiyorum?" diye sorun. Cevap evetse elementer matris **sola** yazılır: $EA$.

### Örnek 6: İşlemi Yanlış Satıra Kodlamak

$R_3\leftarrow R_3+2R_2$ işlemi için birim matriste $(3,2)$ girdisine $2$ yazılır. $(2,3)$ girdisine yazmak farklı bir işlemi ($R_2\leftarrow R_2+2R_3$) kodlar. İşlemde değişen satır, girdinin **satır** indisidir; katsayının çarptığı satır ise **sütun** indisidir.

## Adım Adım İşlem Pratiği

Aşağıdaki örneklerde açıklama en aza indirilmiştir; amaç $EA$ soldan çarpımının hangi satır işlemini uyguladığını hızlı görmektir.

### Örnek 7

$E=\begin{bmatrix}1&0\\-3&1\end{bmatrix}$, $A=\begin{bmatrix}2&1\\4&3\end{bmatrix}$:

$$
EA=
\begin{bmatrix}2&1\\4-3\cdot2&3-3\cdot1\end{bmatrix}
=
\begin{bmatrix}2&1\\-2&0\end{bmatrix}
\qquad(R_2\leftarrow R_2-3R_1).
$$

### Örnek 8

$E=\begin{bmatrix}0&1\\1&0\end{bmatrix}$, $A=\begin{bmatrix}1&2\\3&4\end{bmatrix}$:

$$
EA=
\begin{bmatrix}3&4\\1&2\end{bmatrix}
\qquad(R_1\leftrightarrow R_2).
$$

### Örnek 9

$E=\begin{bmatrix}1&0&0\\0&1&0\\0&2&1\end{bmatrix}$, $A=\begin{bmatrix}1&-1\\0&2\\3&1\end{bmatrix}$:

$$
EA=
\begin{bmatrix}1&-1\\0&2\\3+2\cdot0&1+2\cdot2\end{bmatrix}
=
\begin{bmatrix}1&-1\\0&2\\3&5\end{bmatrix}
\qquad(R_3\leftarrow R_3+2R_2).
$$

### Örnek 10

$E=\begin{bmatrix}1&0\\0&5\end{bmatrix}$, $A=\begin{bmatrix}2&-1\\1&3\end{bmatrix}$:

$$
EA=
\begin{bmatrix}2&-1\\5\cdot1&5\cdot3\end{bmatrix}
=
\begin{bmatrix}2&-1\\5&15\end{bmatrix}
\qquad(R_2\leftarrow 5R_2).
$$

## Karma Çalışma Soruları

### Soru 1

$4\times4$ birim matristen başlayarak $R_1\leftrightarrow R_4$ işleminin elementer matrisini yazın.

### Soru 2

$3\times3$ için $R_2\leftarrow R_2-5R_1$ işleminin elementer matrisini yazın.

### Soru 3

$A=\begin{bmatrix}2&1\\4&3\end{bmatrix}$ ve $E=\begin{bmatrix}1&0\\-2&1\end{bmatrix}$ için $EA$'yı hesaplayın; hangi satır işleminin uygulandığını belirtin.

### Soru 4

$E=\begin{bmatrix}1&0&0\\0&1&0\\0&3&1\end{bmatrix}$ hangi satır işlemini temsil eder? $A=\begin{bmatrix}1&0\\2&1\\-1&4\end{bmatrix}$ için $EA$'yı hesaplayın.

### Soru 5

Soru 2'deki elementer matrisin tersini yazın ve çarparak $I$ verdiğini gösterin.

### Soru 6

$R_2\leftarrow 3R_2$ ve $R_1\leftrightarrow R_2$ işlemlerinin elementer matrislerinin terslerini ayrı ayrı yazın.

### Soru 7

$A=\begin{bmatrix}1&4\\2&9\end{bmatrix}$ matrisini birim matrise indiren satır işlemlerini bulun ve bu işlemleri $E_2E_1A=I$ biçiminde elementer matris çarpımı olarak yazın.

### Soru 8

Aşağıdaki iddiayı değerlendirin: "$AE$ çarpımı, $E$'nin temsil ettiği satır işlemini $A$'ya uygular." Doğru mu? Değilse ne yapar?

### Soru 9

$E=\begin{bmatrix}0&1\\1&0\end{bmatrix}$ için $E^{-1}$ nedir? Neden kendine eşit olduğunu açıklayın.

### Soru 10

$3\times3$ birim matriste $(2,3)$ girdisi $-4$ olan elementer matrisi yazın ve hangi satır işlemini kodladığını belirtin.

## Çalışmanızı Kontrol Etme

Bu sorular için cevap anahtarı verilmemiştir. Önce çözümünüzü bütün adımlarıyla tamamlayın. Ardından bu çalışma notunu ve çözümünüzü bir yapay zekâ aracına vererek sonucunuzun kontrol edilmesini isteyebilirsiniz.

Kontrol sırasında şu istemi kullanabilirsiniz:

> Çözümümü elementer matrisin doğru kodlanması (satır/sütun indisi), soldan çarpımın satır işlemine karşılığı, çarpım sırası ($E_2E_1A$) ve tersin doğruluğu açısından incele. Hata varsa doğru cevabı hemen verme; önce hatanın bulunduğu adımı ve hata türünü belirt.
