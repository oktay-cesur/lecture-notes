---
title: "Vektör İşlemleri: Alıştırmalar"
subtitle: "Lineer Cebir — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-25
description: "Koordinat vektörleri, temel işlemler, lineer birleşim ve tanımlılık için işlem pratiği."
execute:
  echo: false
---

# Vektör İşlemleri: Alıştırmalar

Bu çalışma koordinat vektörlerini doğru okuma, vektör işlemlerini hatasız yürütme, bir işlemin tanımlı olup olmadığına karar verme ve yaygın çözüm hatalarını fark etme becerilerini geliştirmek için hazırlanmıştır.

Çözümlü örnekler basitten karmaşığa doğru ilerler. Her örnekte yalnız sonuca değil, işlemin kurulmasına ve sonucun nasıl kontrol edileceğine dikkat edin. Dosyanın sonundaki çalışma sorularını çözümlere bakmadan tamamlayın.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
Bu çalışma notunu bir yapay zekâ aracına vererek aynı becerileri hedefleyen yeni örnekler ürettirebilirsiniz. Hangi bölümü çalışmak istediğinizi, kaç soru istediğinizi ve zorluk düzeyini belirtin. Aracın çözümü hemen vermemesini; önce cevabınızı beklemesini, hatanız varsa hata türünü söylemesini ve yalnız bir ipucu vermesini isteyin.

Örnek istem:

> Bu çalışma notundaki gösterime ve soru türlerine bağlı kal. "Temel işlemler ve işaret hataları" bölümü için aynı zorlukta beş yeni soru üret. Çözümleri başlangıçta verme. Her cevabımı kontrol et; yanlışsa doğrudan sonucu söylemeden hata türünü belirt ve bir ipucu ver. Tam çözümü yalnız ben istediğimde göster.

Karma çalışma soruları için hazır cevap anahtarı verilmemiştir. Çözümünüzü tamamladıktan sonra doğrulama, ipucu veya benzer örnek üretimi için yapay zekâ desteği alabilirsiniz.
:::

## Vektörü Okuma ve Bileşenleri Eşleştirme

### Örnek 1: Bileşen ve Boyut Okuma

$$
v=
\begin{bmatrix}
-3\\
5\\
0\\
8
\end{bmatrix}
$$

vektörü için

$$
v_1=-3,\qquad v_2=5,\qquad v_3=0,\qquad v_4=8.
$$

Vektörün dört bileşeni vardır. Bu nedenle

$$
v\in\mathbb{R}^4.
$$

Burada $v_3=0$ olması, vektörün üç bileşenli olduğu anlamına gelmez. Sıfır da bir bileşendir.

**Kontrol.** Vektörü yeniden yazmadan önce indis ile satır konumunun eşleştiğini denetleyin. Örneğin $v_2$, yukarıdan ikinci bileşendir.

### Örnek 2: Vektör Eşitliğinden Bilinmeyenleri Bulma

$$
\begin{bmatrix}
2a-1\\
b+3\\
a-b
\end{bmatrix}
=
\begin{bmatrix}
7\\
-2\\
9
\end{bmatrix}
$$

İki vektörün eşit olması için karşılıklı bileşenlerinin eşit olması gerekir:

$$
2a-1=7,\qquad b+3=-2,\qquad a-b=9.
$$

İlk iki denklemden

$$
a=4,\qquad b=-5
$$

bulunur. Bu değerler üçüncü bileşende de eşitlik sağlamalıdır:

$$
a-b=4-(-5)=9.
$$

Dolayısıyla $a=4$ ve $b=-5$ çözümü doğrudur.

**Kontrol.** Yalnız bilinmeyenleri bulmak yeterli değildir. Kullanılmayan bir bileşen varsa bulunan değerleri o bileşende de sınayın.

## Temel İşlemleri Hatasız Yürütme

### Örnek 3: Toplama ve Çıkarmada Sıra

$$
u=
\begin{bmatrix}
3\\-1\\4
\end{bmatrix},
\qquad
v=
\begin{bmatrix}
2\\5\\-6
\end{bmatrix}.
$$

Toplama bileşen bileşen yapılır:

$$
u+v=
\begin{bmatrix}
3+2\\
-1+5\\
4+(-6)
\end{bmatrix}
=
\begin{bmatrix}
5\\4\\-2
\end{bmatrix}.
$$

Çıkarmada ise sıra korunmalıdır:

$$
u-v=
\begin{bmatrix}
1\\-6\\10
\end{bmatrix},
\qquad
v-u=
\begin{bmatrix}
-1\\6\\-10
\end{bmatrix}.
$$

Böylece $v-u=-(u-v)$.

**Sık hata.** $4-(-6)$ ifadesini $4-6$ olarak hesaplamak ve çıkarma sırasını işlem içinde değiştirmek.

### Örnek 4: Negatif Skalerle Çarpma

$$
w=
\begin{bmatrix}
4\\0\\-2
\end{bmatrix}.
$$

$-\tfrac12 w$ hesaplanırken skaler her bileşene uygulanır:

$$
-\tfrac12 w=
\begin{bmatrix}
-\tfrac12\cdot4\\
-\tfrac12\cdot0\\
-\tfrac12\cdot(-2)
\end{bmatrix}
=
\begin{bmatrix}
-2\\0\\1
\end{bmatrix}.
$$

**Kontrol.** Negatif bir skaler pozitif bileşenlerin işaretini değiştirir, negatif bileşenleri pozitif yapar. Sıfır bileşeni sıfır kalır.

### Örnek 5: Parantezli Bir Vektör İfadesi

$$
u=
\begin{bmatrix}
2\\-1\\3
\end{bmatrix},
\qquad
v=
\begin{bmatrix}
-1\\4\\2
\end{bmatrix}.
$$

$-2(u-v)+3v$ ifadesini hesaplayalım. Önce parantez içi:

$$
u-v=
\begin{bmatrix}
3\\-5\\1
\end{bmatrix}.
$$

Sonra skaler çarpımlar ve toplam:

$$
-2(u-v)=
\begin{bmatrix}
-6\\10\\-2
\end{bmatrix},
\qquad
3v=
\begin{bmatrix}
-3\\12\\6
\end{bmatrix},
\qquad
-2(u-v)+3v=
\begin{bmatrix}
-9\\22\\4
\end{bmatrix}.
$$

İfade önce cebirsel olarak da düzenlenebilir:

$$
-2(u-v)+3v=-2u+2v+3v=-2u+5v.
$$

İki yöntem aynı sonucu vermelidir.

## Lineer Birleşimler

### Örnek 6: Bir Lineer Birleşimi Hesaplama

$$
u=
\begin{bmatrix}
1\\2\\-1
\end{bmatrix},
\qquad
v=
\begin{bmatrix}
3\\-1\\4
\end{bmatrix}.
$$

$2u-3v$ için önce iki skaler çarpımı ayrı ayrı hesaplayalım:

$$
2u=
\begin{bmatrix}
2\\4\\-2
\end{bmatrix},
\qquad
3v=
\begin{bmatrix}
9\\-3\\12
\end{bmatrix}.
$$

Ardından çıkarma:

$$
2u-3v=
\begin{bmatrix}
-7\\7\\-14
\end{bmatrix}.
$$

**Kontrol.** $u,v\in\mathbb{R}^3$ olduğundan elde edilen lineer birleşim de $\mathbb{R}^3$ içinde olmalıdır.

### Örnek 7: Katsayıları Bulma

$$
u=
\begin{bmatrix}
1\\1
\end{bmatrix},
\qquad
v=
\begin{bmatrix}
2\\-1
\end{bmatrix},
\qquad
\alpha u+\beta v=
\begin{bmatrix}
7\\1
\end{bmatrix}.
$$

Sol tarafı bileşenlerine ayırırsak

$$
\alpha+2\beta=7,\qquad \alpha-\beta=1
$$

sistemi çıkar. İkinci denklemden $\alpha=1+\beta$ yazıp ilk denklemde kullanırsak

$$
1+3\beta=7
\quad\Rightarrow\quad
\beta=2,
\qquad
\alpha=3.
$$

Yerine koyarak kontrol edelim:

$$
3u+2v=
\begin{bmatrix}
3\\3
\end{bmatrix}
+
\begin{bmatrix}
4\\-2
\end{bmatrix}
=
\begin{bmatrix}
7\\1
\end{bmatrix}.
$$

## İşlemin Tanımlı Olup Olmadığına Karar Verme

### Örnek 8: Boyut Kontrolü

$$
a=
\begin{bmatrix}
1\\2\\3
\end{bmatrix},
\qquad
b=
\begin{bmatrix}
4\\0\\-1
\end{bmatrix},
\qquad
c=
\begin{bmatrix}
2\\5
\end{bmatrix}.
$$

1. $a+b$ tanımlıdır; çünkü $a,b\in\mathbb{R}^3$: sonucu $\begin{bmatrix}5&2&2\end{bmatrix}^T$.
2. $a-c$ tanımlı değildir; çünkü $a\in\mathbb{R}^3$ ve $c\in\mathbb{R}^2$.
3. $4c$ tanımlıdır; skalerle çarpmada boyut eşleşmesi koşulu yoktur: $\begin{bmatrix}8&20\end{bmatrix}^T$.
4. $2a-3b+c$ tanımlı değildir. $2a-3b\in\mathbb{R}^3$ bulunur ama $c\in\mathbb{R}^2$ ile toplanamaz.

**Karar kuralı.** Toplama ve çıkarma için vektörlerin bileşen sayısı aynı olmalıdır. Skalerle çarpma boyutu değiştirmez.

### Örnek 9: Sonuçtan Önce Tanımlılık

$$
x=
\begin{bmatrix}
1\\-2
\end{bmatrix},
\qquad
y=
\begin{bmatrix}
3\\0\\4
\end{bmatrix}.
$$

Aşağıdaki çözüm doğru değildir:

$$
x+y=
\begin{bmatrix}
1+3\\
-2+0\\
0+4
\end{bmatrix}
=
\begin{bmatrix}
4\\-2\\4
\end{bmatrix}.
$$

$x$ vektörüne kendiliğinden üçüncü bir sıfır bileşeni eklenmiştir. Oysa $x\in\mathbb{R}^2$, $y\in\mathbb{R}^3$ olduğundan $x+y$ baştan tanımlı değildir.

## Hata Avı

### Örnek 10: Çıkarma İşaretindeki Hata

$$
\begin{bmatrix}
1\\-2
\end{bmatrix}
-
\begin{bmatrix}
3\\4
\end{bmatrix}
=
\begin{bmatrix}
1-3\\
-2+4
\end{bmatrix}
=
\begin{bmatrix}
-2\\2
\end{bmatrix}
$$

Bu sonuç doğru değildir. İkinci bileşende çıkarma yerine toplama yapılmıştır. Doğru işlem

$$
\begin{bmatrix}
1-3\\
-2-4
\end{bmatrix}
=
\begin{bmatrix}
-2\\-6
\end{bmatrix}.
$$

**Tanı.** Bir vektörü çıkarırken ikinci vektörün bütün bileşenleri çıkarılır; yalnız pozitif olanları değil.

### Örnek 11: Skalerin Eksik Dağıtılması

$$
-3
\begin{bmatrix}
2\\-1\\4
\end{bmatrix}
=
\begin{bmatrix}
-6\\-1\\4
\end{bmatrix}
$$

yanlıştır. Skaler her bileşene uygulanmalıdır:

$$
-3
\begin{bmatrix}
2\\-1\\4
\end{bmatrix}
=
\begin{bmatrix}
-6\\3\\-12
\end{bmatrix}.
$$

### Örnek 12: Yanlış Bileşenleri Eşleştirme

$$
\begin{bmatrix}
2\\5
\end{bmatrix}
+
\begin{bmatrix}
-1\\3
\end{bmatrix}
=
\begin{bmatrix}
2+3\\
5+(-1)
\end{bmatrix}
=
\begin{bmatrix}
5\\4
\end{bmatrix}
$$

Aynı konumdaki bileşenler toplanmalıdır:

$$
\begin{bmatrix}
2+(-1)\\
5+3
\end{bmatrix}
=
\begin{bmatrix}
1\\8
\end{bmatrix}.
$$

## Adım Adım İşlem Pratiği

Aşağıdaki örneklerde açıklama en aza indirilmiştir; amaç işlemleri hızlı ve hatasız tekrarlamaktır.

### Örnek 13

$u=\begin{bmatrix}2\\-3\\1\end{bmatrix}$, $v=\begin{bmatrix}-1\\4\\2\end{bmatrix}$ için $2u+3v$:

$$
2u+3v=
\begin{bmatrix}2\cdot2+3\cdot(-1)\\2\cdot(-3)+3\cdot4\\2\cdot1+3\cdot2\end{bmatrix}
=
\begin{bmatrix}4-3\\-6+12\\2+6\end{bmatrix}
=
\begin{bmatrix}1\\6\\8\end{bmatrix}.
$$

### Örnek 14

$a=\begin{bmatrix}1\\0\\-2\\3\end{bmatrix}$, $b=\begin{bmatrix}2\\-1\\1\\0\end{bmatrix}$ için $a-2b$:

$$
a-2b=
\begin{bmatrix}1-2\cdot2\\0-2\cdot(-1)\\-2-2\cdot1\\3-2\cdot0\end{bmatrix}
=
\begin{bmatrix}-3\\2\\-4\\3\end{bmatrix}.
$$

### Örnek 15

$u=\begin{bmatrix}3\\-1\end{bmatrix}$, $v=\begin{bmatrix}2\\5\end{bmatrix}$, $w=\begin{bmatrix}-4\\1\end{bmatrix}$ için $u-2v+3w$:

$$
u-2v+3w=
\begin{bmatrix}3-2\cdot2+3\cdot(-4)\\-1-2\cdot5+3\cdot1\end{bmatrix}
=
\begin{bmatrix}3-4-12\\-1-10+3\end{bmatrix}
=
\begin{bmatrix}-13\\-8\end{bmatrix}.
$$

### Örnek 16

$-3\begin{bmatrix}1\\-2\\4\end{bmatrix}+2\begin{bmatrix}0\\3\\-1\end{bmatrix}$:

$$
=
\begin{bmatrix}-3\\6\\-12\end{bmatrix}
+
\begin{bmatrix}0\\6\\-2\end{bmatrix}
=
\begin{bmatrix}-3\\12\\-14\end{bmatrix}.
$$

### Örnek 17

$2\begin{bmatrix}1\\1\\0\end{bmatrix}-\begin{bmatrix}3\\-1\\2\end{bmatrix}+4\begin{bmatrix}0\\2\\-1\end{bmatrix}$:

$$
=
\begin{bmatrix}2-3+0\\2+1+8\\0-2-4\end{bmatrix}
=
\begin{bmatrix}-1\\11\\-6\end{bmatrix}.
$$

## Karma Çalışma Soruları

Soruları verilen sırayla çözün. Her işlemde önce tanımlılık kontrolü yapın ve sonucun kaç bileşenli olması gerektiğini belirleyin.

### Soru 1

$p=\begin{bmatrix}-4&2&0&7\end{bmatrix}^T$ için $p_2$, $p_4$ ve vektörün bulunduğu uzayı yazın.

### Soru 2

$\begin{bmatrix}x+2\\3y-1\end{bmatrix}=\begin{bmatrix}5\\8\end{bmatrix}$ eşitliğinden $x$ ve $y$ değerlerini bulun.

### Soru 3

$u=\begin{bmatrix}4&-3&1\end{bmatrix}^T$, $v=\begin{bmatrix}-2&5&6\end{bmatrix}^T$ için $u+v$, $u-v$ ve $v-u$ vektörlerini hesaplayın.

### Soru 4

$w=\begin{bmatrix}-6&3&9\end{bmatrix}^T$ için $-\tfrac13 w$ vektörünü hesaplayın.

### Soru 5

$u=\begin{bmatrix}1&-2\end{bmatrix}^T$, $v=\begin{bmatrix}3&4\end{bmatrix}^T$ için $3u-2v$ vektörünü hesaplayın.

### Soru 6

Aynı $u$ ve $v$ için $-2(u-v)+v$ ifadesini hesaplayın.

### Soru 7

$a=\begin{bmatrix}1&0&-2\end{bmatrix}^T$, $b=\begin{bmatrix}3&4\end{bmatrix}^T$, $c=\begin{bmatrix}-1&5&2\end{bmatrix}^T$ için $a+c$, $a-b$, $2b$, $3a-2c$, $a+b+c$ işlemlerinden hangileri tanımlıdır? Tanımlı olanları hesaplayın.

### Soru 8

$r=\begin{bmatrix}1&2\end{bmatrix}^T$, $s=\begin{bmatrix}-1&1\end{bmatrix}^T$ için $\alpha r+\beta s=\begin{bmatrix}5&1\end{bmatrix}^T$ eşitliğini sağlayan $\alpha$ ve $\beta$ değerlerini bulun.

### Soru 9

Aşağıdaki çözümdeki hatayı açıklayın ve doğru sonucu bulun:

$$
-2\left(\begin{bmatrix}1\\3\end{bmatrix}-\begin{bmatrix}4\\-1\end{bmatrix}\right)
=-2\begin{bmatrix}-3\\2\end{bmatrix}=\begin{bmatrix}6\\-4\end{bmatrix}.
$$

### Soru 10

$x=\begin{bmatrix}2&-1&3\end{bmatrix}^T$, $y=\begin{bmatrix}-1&4&0\end{bmatrix}^T$, $z=\begin{bmatrix}5&2&-2\end{bmatrix}^T$ için $2x-(y-z)-3z$ ifadesini hesaplayın.

### Soru 11

$\begin{bmatrix}x-1\\2y\\x+y\end{bmatrix}=\begin{bmatrix}3\\-4\\2\end{bmatrix}$ eşitliğini sağlayan $x$ ve $y$ değerlerini bulun; üç bileşende de kontrol edin.

### Soru 12

$a=\begin{bmatrix}2&-1&0&5\end{bmatrix}^T$, $b=\begin{bmatrix}-3&4&2&-1\end{bmatrix}^T$ için $2a+b$, $a-3b$, $-2(a+b)$ vektörlerini hesaplayın.

### Soru 13

$u=\begin{bmatrix}2&-3&1\end{bmatrix}^T$, $v=\begin{bmatrix}-1&2&4\end{bmatrix}^T$ için $-(2u-v)+3(u+v)$ ifadesini iki yolla (önce parantez içleri, sonra cebirsel düzenleme) hesaplayıp sonuçların aynı olduğunu gösterin.

### Soru 14

Aşağıdaki her eşitlik için eşitliği sağlayan bir $k$ skaleri var mı? Varsa bulun, yoksa nedenini açıklayın.

$$
\text{a)}\ k\begin{bmatrix}2\\-1\\3\end{bmatrix}=\begin{bmatrix}-4\\2\\-6\end{bmatrix},
\qquad
\text{b)}\ k\begin{bmatrix}1\\2\\-1\end{bmatrix}=\begin{bmatrix}3\\6\\1\end{bmatrix}.
$$

### Soru 15

$p,q\in\mathbb{R}^4$ ve $r\in\mathbb{R}^3$ olduğuna göre $p-2q$, $3p+r$, $2(p+q)$, $(p-q)+r$, $4r$ ifadelerinin tanımlı olup olmadığına boyut bilgisiyle karar verin.

### Soru 16

$u=\begin{bmatrix}2&1\end{bmatrix}^T$, $v=\begin{bmatrix}-1&3\end{bmatrix}^T$ için $\alpha u+\beta v=\begin{bmatrix}8&-3\end{bmatrix}^T$ eşitliğini sağlayan $\alpha$ ve $\beta$ değerlerini bulup kontrol edin.

### Soru 17

$u=\begin{bmatrix}1&-2&3\end{bmatrix}^T$, $v=\begin{bmatrix}4&0&-1\end{bmatrix}^T$ için $2(u-v)-3(u+v)=-u-5v$ eşitliğini, iki tarafı ayrı ayrı hesaplayarak gösterin.

### Soru 18

Aşağıdaki çözümdeki hatayı belirleyin ve doğru sonucu bulun:

$$
-\left(\begin{bmatrix}2\\-1\end{bmatrix}+\begin{bmatrix}3\\4\end{bmatrix}\right)
=-\begin{bmatrix}2\\-1\end{bmatrix}+\begin{bmatrix}3\\4\end{bmatrix}=\begin{bmatrix}1\\5\end{bmatrix}.
$$

### Soru 19

$u=\begin{bmatrix}3&0&2\end{bmatrix}^T$, $v=\begin{bmatrix}1&2&0\end{bmatrix}^T$ için $2x-u=3v$ vektör denklemini sağlayan $x\in\mathbb{R}^3$ vektörünü bulun ve kontrol edin.

### Soru 20

$a=\begin{bmatrix}1&-2&4\end{bmatrix}^T$, $b=\begin{bmatrix}3&1&-1\end{bmatrix}^T$, $c=\begin{bmatrix}-2&5&2\end{bmatrix}^T$ için $3(a-b)-2(b-c)-(a+c)$ ifadesini hesaplayın; ardından ifadeyi $a$, $b$, $c$ katsayılarına göre düzenleyerek doğrulayın.

## Çalışmanızı Kontrol Etme

Bu sorular için cevap anahtarı verilmemiştir. Önce çözümünüzü bütün işlem basamaklarıyla tamamlayın. Ardından bu çalışma notunu ve çözümünüzü bir yapay zekâ aracına vererek sonucunuzun kontrol edilmesini isteyebilirsiniz.

Kontrol sırasında yalnız sonucun doğru olup olmadığını sormak yerine şu istemi kullanabilirsiniz:

> Çözümümü işlem sırası, işaretler, bileşen eşleştirmesi ve boyut kontrolü açısından incele. Hata varsa doğru cevabı hemen verme; önce hatanın bulunduğu adımı ve hata türünü belirt. Bir ipucundan sonra çözümü yeniden denememe izin ver.
