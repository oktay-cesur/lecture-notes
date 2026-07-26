---
title: "Matris-Vektör Çarpımı: Alıştırmalar"
subtitle: "Lineer Cebir — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-25
description: "Matris-vektör çarpımı Ax'in iki okuması ve boyut/tanımlılık pratiği."
execute:
  echo: false
---

# Matris-Vektör Çarpımı: Alıştırmalar

Bu çalışma $Ax$ çarpımını iki farklı okumayla (satır–nokta ve sütun–birleşim) hatasız hesaplama, çarpımın ne zaman tanımlı olduğuna boyutla karar verme ve sonucun şeklini önceden belirleme becerilerini geliştirmek için hazırlanmıştır.

İki okuma aynı sonucu verir; her örnekte ikisini de görmek hesabınızı kendiliğinden denetler. Çalışma sorularını çözümlere bakmadan tamamlayın.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
Bu çalışma notunu bir yapay zekâ aracına vererek aynı becerileri hedefleyen yeni örnekler ürettirebilirsiniz. Hangi bölümü çalışmak istediğinizi, kaç soru istediğinizi ve zorluk düzeyini belirtin. Aracın çözümü hemen vermemesini; önce cevabınızı beklemesini, hatanız varsa hata türünü söylemesini ve yalnız bir ipucu vermesini isteyin.

Örnek istem:

> Bu çalışma notundaki gösterime bağlı kal. "Ax'i iki türlü okuma" bölümü için aynı zorlukta beş yeni soru üret. Her soruyu iki okumayla da çözmemi iste. Çözümleri başlangıçta verme; yanlışsa hata türünü söyle ve bir ipucu ver.

Karma çalışma soruları için hazır cevap anahtarı verilmemiştir.
:::

## Ax'i İki Türlü Okuma

### Örnek 1: Satır ve Sütun Okuması

$$
A=
\begin{bmatrix}
2&-1&3\\
0&4&1
\end{bmatrix},
\qquad
x=
\begin{bmatrix}
1\\2\\-1
\end{bmatrix}.
$$

**Satır okuması.** Sonucun her bileşeni, $A$'nın o satırı ile $x$'in nokta çarpımıdır:

$$
Ax=
\begin{bmatrix}
2\cdot1+(-1)\cdot2+3\cdot(-1)\\
0\cdot1+4\cdot2+1\cdot(-1)
\end{bmatrix}
=
\begin{bmatrix}
-3\\7
\end{bmatrix}.
$$

**Sütun okuması.** Sonuç, $A$'nın sütunlarının $x$ bileşenleriyle ağırlıklı toplamıdır:

$$
Ax=
1\begin{bmatrix}2\\0\end{bmatrix}
+2\begin{bmatrix}-1\\4\end{bmatrix}
+(-1)\begin{bmatrix}3\\1\end{bmatrix}
=
\begin{bmatrix}-3\\7\end{bmatrix}.
$$

İki okuma aynı sonucu verir.

**Kontrol.** Sütun okumasında $x$'in $j$. bileşeni, $A$'nın $j$. sütununu ölçekler. Katsayı ile sütunu karıştırırsanız iki okuma tutmaz; bu, hatayı hemen yakalar.

### Örnek 2: Sonucu Bir Lineer Birleşim Olarak Görmek

$$
A=
\begin{bmatrix}
1&2\\
3&-1\\
0&4
\end{bmatrix},
\qquad
x=
\begin{bmatrix}
2\\-3
\end{bmatrix}.
$$

Sütun okuması doğrudan bir lineer birleşimdir:

$$
Ax=
2\begin{bmatrix}1\\3\\0\end{bmatrix}
-3\begin{bmatrix}2\\-1\\4\end{bmatrix}
=
\begin{bmatrix}2\\6\\0\end{bmatrix}
+
\begin{bmatrix}-6\\3\\-12\end{bmatrix}
=
\begin{bmatrix}-4\\9\\-12\end{bmatrix}.
$$

**Kontrol.** Satır okumasıyla doğrulayın: ilk bileşen $1\cdot2+2\cdot(-3)=-4$.

## Boyut ve Tanımlılık

### Örnek 3: Önce Boyut, Sonra Hesap

$$
A\in\mathbb{R}^{3\times4},
\qquad
x\in\mathbb{R}^{4},
\qquad
y\in\mathbb{R}^{3}.
$$

$Ax$ tanımlıdır: $A$'nın sütun sayısı ($4$) ile $x$'in bileşen sayısı ($4$) eşit. Sonuç $\mathbb{R}^{3}$ içindedir; çünkü $A$'nın satır sayısı $3$'tür.

$Ay$ tanımlı değildir: $A$'nın $4$ sütunu var, $y$'nin ise $3$ bileşeni.

**Karar kuralı.** $A\in\mathbb{R}^{m\times n}$ ve $x\in\mathbb{R}^{n}$ ise $Ax\in\mathbb{R}^{m}$. Kural: "içteki boyutlar ($n$) uyar, dıştaki ($m$) sonucu verir".

### Örnek 4: Sonucun Şeklini Önceden Söylemek

$A\in\mathbb{R}^{2\times5}$ ve $x\in\mathbb{R}^{5}$ ise, hesaba girmeden $Ax\in\mathbb{R}^{2}$ olduğunu söyleyebiliriz. Sonucun iki bileşenli çıkması gerekir; üç bileşen bulduysanız satır sayısını yanlış saymışsınızdır.

## Hata Avı

### Örnek 5: Satırı Sütunla Karıştırmak

$$
A=
\begin{bmatrix}
1&2\\
3&4
\end{bmatrix},
\qquad
x=
\begin{bmatrix}
5\\6
\end{bmatrix}
$$

için aşağıdaki hesap yanlıştır:

$$
Ax=
\begin{bmatrix}
1\cdot5+3\cdot6\\
2\cdot5+4\cdot6
\end{bmatrix}
=
\begin{bmatrix}
23\\34
\end{bmatrix}.
$$

Burada satır yerine sütunlar $x$ ile noktalanmıştır. Doğru satır okuması:

$$
Ax=
\begin{bmatrix}
1\cdot5+2\cdot6\\
3\cdot5+4\cdot6
\end{bmatrix}
=
\begin{bmatrix}
17\\39
\end{bmatrix}.
$$

**Tanı.** Satır okumasında sonucun $i$. bileşeni $A$'nın $i$. **satırını** kullanır. Sütun okuması ise satırlara değil, sütunlara katsayı verir; iki okumayı birbirine geçirmeyin.

## Adım Adım İşlem Pratiği

Aşağıdaki örneklerde açıklama en aza indirilmiştir; amaç satır okumasıyla hızlı ve hatasız hesap tekrarıdır.

### Örnek 6

$$
A=\begin{bmatrix}1&2&-1\\3&0&2\end{bmatrix},
\qquad
x=\begin{bmatrix}2\\-1\\4\end{bmatrix}.
$$

$$
Ax=
\begin{bmatrix}
1\cdot2+2\cdot(-1)+(-1)\cdot4\\
3\cdot2+0\cdot(-1)+2\cdot4
\end{bmatrix}
=
\begin{bmatrix}2-2-4\\6+0+8\end{bmatrix}
=
\begin{bmatrix}-4\\14\end{bmatrix}.
$$

### Örnek 7

$$
A=\begin{bmatrix}2&-3\\1&4\\0&5\end{bmatrix},
\qquad
x=\begin{bmatrix}3\\-2\end{bmatrix}.
$$

$$
Ax=
\begin{bmatrix}
2\cdot3+(-3)\cdot(-2)\\
1\cdot3+4\cdot(-2)\\
0\cdot3+5\cdot(-2)
\end{bmatrix}
=
\begin{bmatrix}6+6\\3-8\\0-10\end{bmatrix}
=
\begin{bmatrix}12\\-5\\-10\end{bmatrix}.
$$

### Örnek 8

$$
A=\begin{bmatrix}1&0&2&-1\\2&3&-1&0\end{bmatrix},
\qquad
x=\begin{bmatrix}1\\2\\-1\\3\end{bmatrix}.
$$

$$
Ax=
\begin{bmatrix}
1\cdot1+0\cdot2+2\cdot(-1)+(-1)\cdot3\\
2\cdot1+3\cdot2+(-1)\cdot(-1)+0\cdot3
\end{bmatrix}
=
\begin{bmatrix}1+0-2-3\\2+6+1+0\end{bmatrix}
=
\begin{bmatrix}-4\\9\end{bmatrix}.
$$

### Örnek 9

$$
A=\begin{bmatrix}-2&1\\4&-3\end{bmatrix},
\qquad
x=\begin{bmatrix}5\\2\end{bmatrix}.
$$

$$
Ax=
\begin{bmatrix}
-2\cdot5+1\cdot2\\
4\cdot5+(-3)\cdot2
\end{bmatrix}
=
\begin{bmatrix}-10+2\\20-6\end{bmatrix}
=
\begin{bmatrix}-8\\14\end{bmatrix}.
$$

### Örnek 10

$$
A=\begin{bmatrix}3&-1&0\\0&2&5\\1&1&-2\end{bmatrix},
\qquad
x=\begin{bmatrix}2\\4\\-1\end{bmatrix}.
$$

$$
Ax=
\begin{bmatrix}
3\cdot2+(-1)\cdot4+0\cdot(-1)\\
0\cdot2+2\cdot4+5\cdot(-1)\\
1\cdot2+1\cdot4+(-2)\cdot(-1)
\end{bmatrix}
=
\begin{bmatrix}6-4+0\\0+8-5\\2+4+2\end{bmatrix}
=
\begin{bmatrix}2\\3\\8\end{bmatrix}.
$$

## Karma Çalışma Soruları

### Soru 1

$A=\begin{bmatrix}1&-2&0\\3&1&-1\end{bmatrix}$, $x=\begin{bmatrix}2&1&4\end{bmatrix}^T$ için $Ax$'i hem satır hem sütun okumasıyla hesaplayın.

### Soru 2

$A=\begin{bmatrix}2&0\\-1&3\\4&1\end{bmatrix}$, $x=\begin{bmatrix}3&-2\end{bmatrix}^T$ için $Ax$'i sütun okumasıyla (lineer birleşim olarak) hesaplayın.

### Soru 3

$A\in\mathbb{R}^{4\times2}$ ve $x\in\mathbb{R}^{2}$ ise $Ax$ hangi uzaydadır? Hesaba girmeden söyleyin.

### Soru 4

$A\in\mathbb{R}^{3\times3}$, $u\in\mathbb{R}^{3}$, $v\in\mathbb{R}^{2}$ olduğuna göre $Au$ ve $Av$ işlemlerinden hangisi tanımlıdır? Gerekçelendirin.

### Soru 5

$A=\begin{bmatrix}1&1&1\\2&-1&0\end{bmatrix}$, $x=\begin{bmatrix}1&2&3\end{bmatrix}^T$ için $Ax$'i hesaplayın.

### Soru 6

$A=\begin{bmatrix}0&2\\3&-1\end{bmatrix}$ için $Ae_1$ ve $Ae_2$ vektörlerini hesaplayın; burada $e_1=\begin{bmatrix}1&0\end{bmatrix}^T$, $e_2=\begin{bmatrix}0&1\end{bmatrix}^T$. Sonucu $A$'nın sütunlarıyla karşılaştırın.

### Soru 7

Aşağıdaki hesabın hatasını bulun ve düzeltin:

$$
\begin{bmatrix}2&-1\\0&3\end{bmatrix}
\begin{bmatrix}4\\1\end{bmatrix}
=
\begin{bmatrix}2\cdot4+0\cdot1\\-1\cdot4+3\cdot1\end{bmatrix}
=
\begin{bmatrix}8\\-1\end{bmatrix}.
$$

### Soru 8

$A=\begin{bmatrix}1&-1&2\\0&3&1\\4&0&-2\end{bmatrix}$, $x=\begin{bmatrix}2&-1&1\end{bmatrix}^T$ için $Ax$'i hesaplayın ve iki okumayla doğrulayın.

### Soru 9

$A=\begin{bmatrix}1&2\\-1&0\end{bmatrix}$ ve $Ax=\begin{bmatrix}4\\-3\end{bmatrix}$ veriliyor. $x$'i bulun. (İpucu: satır okuması iki denklemli bir sistem verir.)

### Soru 10

$A=\begin{bmatrix}3&-2&1\end{bmatrix}$ (tek satır) ve $x=\begin{bmatrix}1&2&-1\end{bmatrix}^T$ için $Ax$'i hesaplayın. Sonuç kaç bileşenlidir?

## Çalışmanızı Kontrol Etme

Bu sorular için cevap anahtarı verilmemiştir. Önce çözümünüzü bütün işlem basamaklarıyla tamamlayın. Ardından bu çalışma notunu ve çözümünüzü bir yapay zekâ aracına vererek sonucunuzun kontrol edilmesini isteyebilirsiniz.

Kontrol sırasında şu istemi kullanabilirsiniz:

> Çözümümü boyut uyumu ($A$'nın sütun sayısı ile $x$'in bileşen sayısı), sonucun şekli ve satır/sütun okumasının tutarlılığı açısından incele. Hata varsa doğru cevabı hemen verme; önce hatanın bulunduğu adımı ve hata türünü belirt.
