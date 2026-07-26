---
title: "Çözüm Durumları ve Rank: Alıştırmalar"
subtitle: "Lineer Cebir — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-25
description: "Rank, çözüm durumları ve serbest değişkenler için pratik."
execute:
  echo: false
---

# Çözüm Durumları ve Rank: Alıştırmalar

Bu çalışma bir matrisin rankını basamak biçimindeki pivot sayısından belirleme, bir lineer sistemin çözüm durumunu (tek, yok, sonsuz) rank ölçütüyle sınıflandırma, serbest değişkenleri tanıma ve çözümü parametrik biçimde yazma becerilerini geliştirmek için hazırlanmıştır.

Anahtar bağ şudur: rank, basamak biçimindeki pivotların (sıfırdan farklı satırların) sayısıdır ve çözüm durumu tümüyle $\operatorname{rank}(A)$, $\operatorname{rank}([A\mid b])$ ile bilinmeyen sayısının karşılaştırmasından çıkar. Çalışma sorularını çözümlere bakmadan tamamlayın.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
Bu çalışma notunu bir yapay zekâ aracına vererek aynı becerileri hedefleyen yeni örnekler ürettirebilirsiniz. Hangi bölümü çalışmak istediğinizi, kaç soru istediğinizi ve zorluk düzeyini belirtin. Aracın çözümü hemen vermemesini; önce cevabınızı beklemesini, hatanız varsa hata türünü söylemesini ve yalnız bir ipucu vermesini isteyin.

Örnek istem:

> Bu çalışma notundaki gösterime bağlı kal. "Çözüm durumları" bölümü için aynı zorlukta beş yeni sistem üret; biri tek çözümlü, biri çözümsüz, biri sonsuz çözümlü olsun. Çözümleri başlangıçta verme; yanlışsa hata türünü söyle ve bir ipucu ver.

Karma çalışma soruları için hazır cevap anahtarı verilmemiştir.
:::

## Rank Belirleme

### Örnek 1: Pivot Sayısı

$$
A=
\begin{bmatrix}
1&2&1\\
2&4&3\\
1&2&2
\end{bmatrix}
\xrightarrow[R_3\leftarrow R_3-R_1]{R_2\leftarrow R_2-2R_1}
\begin{bmatrix}
1&2&1\\
0&0&1\\
0&0&1
\end{bmatrix}
\xrightarrow{R_3\leftarrow R_3-R_2}
\begin{bmatrix}
1&2&1\\
0&0&1\\
0&0&0
\end{bmatrix}.
$$

İki sıfırdan farklı satır, yani iki pivot var: $\operatorname{rank}(A)=2$. Pivotlar birinci ve üçüncü sütunda; ikinci sütunda pivot yoktur.

**Kontrol.** Rank, satır sayısından büyük olamaz; sütun sayısından da büyük olamaz. Burada $\operatorname{rank}(A)\le3$.

## Çözüm Durumları: Tek, Yok, Sonsuz

### Örnek 2: Tek Çözüm

$$
\left[\begin{array}{ccc|c}
1&1&1&6\\
0&1&-1&-1\\
0&0&-1&-3
\end{array}\right].
$$

Katsayı matrisinde üç pivot var: $\operatorname{rank}(A)=3$. Genişletilmiş matriste de çelişki satırı yok, $\operatorname{rank}([A\mid b])=3$. Bilinmeyen sayısı da $3$ olduğundan çözüm tektir.

**Karar kuralı.** $\operatorname{rank}(A)=\operatorname{rank}([A\mid b])=n$ (bilinmeyen sayısı) ise çözüm tektir.

### Örnek 3: Çözüm Yok

$$
\left[\begin{array}{ccc|c}
1&0&2&3\\
0&1&-1&1\\
0&0&0&5
\end{array}\right].
$$

Katsayı matrisinde iki pivot ($\operatorname{rank}(A)=2$) ama son satır $0=5$ çelişkisi verdiğinden genişletilmiş matriste üç pivot ($\operatorname{rank}([A\mid b])=3$). $\operatorname{rank}(A)<\operatorname{rank}([A\mid b])$ olduğundan sistem tutarsızdır.

**Karar kuralı.** $\operatorname{rank}(A)<\operatorname{rank}([A\mid b])$ ise çözüm yoktur.

### Örnek 4: Sonsuz Çözüm

$$
\left[\begin{array}{ccc|c}
1&0&2&3\\
0&1&-1&1\\
0&0&0&0
\end{array}\right].
$$

$\operatorname{rank}(A)=\operatorname{rank}([A\mid b])=2$ ama bilinmeyen sayısı $3$. Rank, bilinmeyen sayısından küçük olduğundan sonsuz çözüm vardır.

**Karar kuralı.** $\operatorname{rank}(A)=\operatorname{rank}([A\mid b])=r<n$ ise sonsuz çözüm vardır; serbest değişken sayısı $n-r$'dir.

## Serbest Değişkenler ve Parametrik Çözüm

### Örnek 5: Parametrik Yazım

Örnek 4'teki matriste üçüncü sütunda pivot yok; $x_3$ serbest değişkendir. Satırları yazarsak:

$$
x_1+2x_3=3,\qquad x_2-x_3=1.
$$

$x_3=t$ dersek

$$
x_1=3-2t,\qquad x_2=1+t,\qquad x_3=t,
$$

yani

$$
\begin{bmatrix}x_1\\x_2\\x_3\end{bmatrix}
=
\begin{bmatrix}3\\1\\0\end{bmatrix}
+t\begin{bmatrix}-2\\1\\1\end{bmatrix},
\qquad t\in\mathbb{R}.
$$

**Kontrol.** Pivot içermeyen sütun sayısı, serbest parametre sayısına eşittir. Burada bir serbest değişken var, çözüm bir doğru üzerinde.

## Rank ile Tutarlılık Ölçütü

### Örnek 6: Karar Şeması

Bir sistemi sınıflandırmak için üç sayıyı karşılaştırın: $\operatorname{rank}(A)$, $\operatorname{rank}([A\mid b])$ ve $n$.

- $\operatorname{rank}(A)<\operatorname{rank}([A\mid b])$: çözüm yok.
- $\operatorname{rank}(A)=\operatorname{rank}([A\mid b])=n$: tek çözüm.
- $\operatorname{rank}(A)=\operatorname{rank}([A\mid b])<n$: sonsuz çözüm.

**Kontrol.** Önce tutarlılığa bakın (iki rank eşit mi?), sonra tekliğe (rank $=n$ mi?). Sıra bu.

## Hata Avı

### Örnek 7: Sıfır Satırı Pivot Saymak

$$
\begin{bmatrix}
1&2&0\\
0&1&3\\
0&0&0
\end{bmatrix}
$$

matrisinin rankını $3$ saymak yanlıştır. Alt satır tümüyle sıfırdır ve pivot içermez; rank $2$'dir. Yalnız sıfırdan farklı satırlar (öncü girdisi olanlar) pivot verir.

**Tanı.** Rankı satır sayısıyla karıştırmayın. Rank, öncü girdi taşıyan satırların sayısıdır.

### Örnek 8: Serbest Değişkeni Atlamak

Rank $<n$ olan tutarlı bir sistemde "tek çözüm buldum" demek yanlıştır. Pivotsuz her sütun bir serbest değişkendir ve çözüm bir parametre ailesidir. Tek bir sayı üçlüsü vermek çözümün yalnız bir noktasıdır, kümenin tamamı değil.

## Adım Adım İşlem Pratiği

Aşağıdaki örneklerde açıklama en aza indirilmiştir; amaç rank ve çözüm durumu kararını hızlı vermektir.

### Örnek 9

$\begin{bmatrix}1&2&3\\2&4&6\\1&1&1\end{bmatrix}$ matrisinin rankı:

$$
\xrightarrow[R_3\leftarrow R_3-R_1]{R_2\leftarrow R_2-2R_1}
\begin{bmatrix}1&2&3\\0&0&0\\0&-1&-2\end{bmatrix}.
$$

İki sıfırdan farklı satır $\Rightarrow \operatorname{rank}=2$.

### Örnek 10

$\left[\begin{array}{cc|c}1&1&3\\2&2&6\end{array}\right]\xrightarrow{R_2\leftarrow R_2-2R_1}\left[\begin{array}{cc|c}1&1&3\\0&0&0\end{array}\right]$.

$\operatorname{rank}(A)=\operatorname{rank}([A\mid b])=1<2\Rightarrow$ sonsuz çözüm.

### Örnek 11

$\left[\begin{array}{cc|c}1&1&3\\2&2&5\end{array}\right]\xrightarrow{R_2\leftarrow R_2-2R_1}\left[\begin{array}{cc|c}1&1&3\\0&0&-1\end{array}\right]$.

Alt satır $0=-1$ çelişkisi $\Rightarrow$ çözüm yok.

### Örnek 12

$$
\left[\begin{array}{ccc|c}1&0&2&1\\0&1&-1&4\\0&0&0&0\end{array}\right]:
\quad \operatorname{rank}=2,\ n=3,\ x_3=t\ \text{serbest}.
$$

$$
x_1=1-2t,\qquad x_2=4+t,\qquad x_3=t.
$$

## Karma Çalışma Soruları

### Soru 1

$A=\begin{bmatrix}1&3\\2&6\\-1&-3\end{bmatrix}$ matrisinin rankını bulun.

### Soru 2

$A=\begin{bmatrix}1&2&-1\\2&3&1\\3&5&0\end{bmatrix}$ matrisini basamak biçimine indirip rankını belirleyin.

### Soru 3

$$
\left[\begin{array}{ccc|c}
1&1&2&4\\
0&1&-1&1\\
0&0&2&6
\end{array}\right]
$$

sisteminin çözüm durumunu rank ölçütüyle belirleyin ve tekse çözün.

### Soru 4

$$
\left[\begin{array}{ccc|c}
1&2&1&3\\
2&4&2&5
\end{array}\right]
$$

sisteminin çözüm durumunu belirleyin.

### Soru 5

$$
\left[\begin{array}{ccc|c}
1&-1&0&2\\
0&1&2&1\\
0&0&0&0
\end{array}\right]
$$

sisteminin çözümünü parametrik biçimde yazın; kaç serbest değişken vardır?

### Soru 6

Bir sistemde $\operatorname{rank}(A)=2$, $\operatorname{rank}([A\mid b])=2$ ve bilinmeyen sayısı $4$ ise çözüm durumu nedir? Kaç serbest değişken vardır?

### Soru 7

$$
\begin{aligned}
x+2y+z&=1\\
2x+4y+2z&=2\\
x+2y+z&=3
\end{aligned}
$$

sisteminin çözüm durumunu inceleyin.

### Soru 8

Aşağıdaki matrisin rankını doğru bulun; sıfır satırının pivot sayılıp sayılmayacağına dikkat edin:

$$
\begin{bmatrix}
2&4&6\\
0&0&0\\
1&2&3
\end{bmatrix}.
$$

### Soru 9

$$
\begin{aligned}
x+y+z&=2\\
2x+2y+2z&=k
\end{aligned}
$$

sisteminin (a) sonsuz çözümü olması, (b) çözümünün olmaması için $k$ hangi değer(ler)i almalıdır?

### Soru 10

Bir $4$ bilinmeyenli sistemde katsayı matrisinin rankı $4$ ise çözüm hakkında ne söyleyebilirsiniz? (Sistemin tutarlı olduğunu varsayın.)

## Çalışmanızı Kontrol Etme

Bu sorular için cevap anahtarı verilmemiştir. Önce çözümünüzü bütün adımlarıyla tamamlayın. Ardından bu çalışma notunu ve çözümünüzü bir yapay zekâ aracına vererek sonucunuzun kontrol edilmesini isteyebilirsiniz.

Kontrol sırasında şu istemi kullanabilirsiniz:

> Çözümümü rank belirleme (sıfır satırı pivot sayılmamalı), $\operatorname{rank}(A)$–$\operatorname{rank}([A\mid b])$–$n$ karşılaştırması, çözüm durumu kararı ve serbest değişkenlerin parametrik yazımı açısından incele. Hata varsa doğru cevabı hemen verme; önce hatanın bulunduğu adımı ve hata türünü belirt.
