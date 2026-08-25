---
title: "Taban ve Boyut: Alıştırmalar"
subtitle: "Lineer Cebir — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-25
description: "Üreteçlerden taban seçme, taban doğrulama ve boyut hesabı pratiği."
execute:
  echo: false
---

# Taban ve Boyut: Alıştırmalar

Bu çalışma, bir listenin hem germe hem bağımsızlık koşullarını sınamayı, gereksiz üreteçleri çıkarmayı ve farklı vektör uzaylarının boyutunu taban üzerinden belirlemeyi amaçlar.

Lineer bağımsızlık için kullanılan homojen sistem ve rank ölçütleri önceki çalışma notunda kurulmuştu. Burada aynı araçları taban seçimi ve boyut kararına uygulayacağız.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
Yeni sorular isterken uzayı, aday listeyi ve beklenen karar türünü açıkça belirtin. Aracın yalnız rank sonucunu değil, hangi sütunların tabana seçildiğini de denetlemesini isteyin.

> Bu çalışma notundaki gösterime bağlı kal. Üreteç listesinden taban seçme üzerine beş soru üret. Önce benim pivot sütunlarını seçmemi bekle. Yanlışsa yalnız ilk hatalı sütun seçimini söyle.

Karma çalışma soruları için hazır cevap anahtarı verilmemiştir.
:::

## Taban Kararı

### Örnek 1: Standart Taban

$$
e_1=\begin{bmatrix}1\\0\\0\end{bmatrix},\quad
e_2=\begin{bmatrix}0\\1\\0\end{bmatrix},\quad
e_3=\begin{bmatrix}0\\0\\1\end{bmatrix}.
$$

Bu liste $\mathbb R^3$'ü gerer ve lineer bağımsızdır. Dolayısıyla $\{e_1,e_2,e_3\}$, $\mathbb R^3$'ün tabanıdır ve $\dim(\mathbb R^3)=3$ olur.

### Örnek 2: Bağımsız Ama Taban Değil

$$
v_1=\begin{bmatrix}1\\0\\0\end{bmatrix},\qquad
v_2=\begin{bmatrix}0\\1\\0\end{bmatrix}.
$$

İki vektör bağımsızdır; ancak $\mathbb R^3$'ü germez. Bu liste kendi gerdiği $xy$ düzleminin tabanıdır, $\mathbb R^3$'ün tabanı değildir.

### Örnek 3: Geren Ama Taban Olmayan Liste

$$
\{e_1,e_2,e_3,e_1+e_2\}
$$

$\mathbb R^3$'ü gerer; fakat dördüncü vektör ilk ikisinin toplamı olduğundan liste bağımlıdır. $e_1+e_2$ çıkarıldığında taban kalır.

## Pivot Sütunlarından Taban Seçme

### Örnek 4: Gereksiz Üreteçleri Çıkarmak

$$
A=\begin{bmatrix}
1&0&1&2\\
0&1&1&1\\
1&1&2&3
\end{bmatrix}.
$$

Satır indirgeme sonucunda pivot sütunları $1$ ve $2$ olsun. O zaman özgün matrisin ilk iki sütunu sütun uzayı için bir taban verir:

$$
\mathcal B=\left\{
\begin{bmatrix}1\\0\\1\end{bmatrix},
\begin{bmatrix}0\\1\\1\end{bmatrix}
\right\}.
$$

Üçüncü sütun ilk ikisinin toplamı, dördüncü sütun ise $2c_1+c_2$'dir.

**Kontrol.** Taban vektörlerini RREF matrisinden değil, özgün $A$ matrisinin pivot sütunlarından seçin.

### Örnek 5: Satır Uzayı İçin Farklı Seçim

Satır işlemleri satır uzayını korur. Bu nedenle satır uzayına taban seçerken RREF matrisinin sıfır olmayan satırları kullanılabilir. Sütun uzayında ise özgün pivot sütunlarına dönmek gerekir.

## Boyut Hesabı

### Örnek 6: Polinom Uzayı

$$
P_3=\{a+bt+ct^2+dt^3:a,b,c,d\in\mathbb R\}.
$$

$\{1,t,t^2,t^3\}$ bir tabandır. Dolayısıyla

$$
\boxed{\dim(P_3)=4}.
$$

### Örnek 7: Matris Uzayı

$M_{2\times2}(\mathbb R)$ için

$$
E_{11},E_{12},E_{21},E_{22}
$$

standart tabanı oluşturur. Her $2\times2$ matris dört katsayıyla tek biçimde yazıldığı için

$$
\boxed{\dim M_{2\times2}(\mathbb R)=4}.
$$

### Örnek 8: Homojen Çözüm Uzayının Boyutu

$A\in\mathbb R^{3\times5}$ ve $\operatorname{rank}(A)=3$ ise rank–nullity ilişkisi

$$
\dim\operatorname{Null}(A)=5-3=2
$$

verir. Null uzayının bir tabanında iki vektör bulunur.

## Listeyi Tabana Tamamlama

### Örnek 9: Bağımsız Listeyi Genişletmek

$$
v_1=\begin{bmatrix}1\\1\\0\end{bmatrix},\qquad
v_2=\begin{bmatrix}0\\1\\1\end{bmatrix}.
$$

$e_1=(1,0,0)^T$ bu iki vektörün germesinde değildir. Dolayısıyla $\{v_1,v_2,e_1\}$ üç bağımsız vektörden oluşur ve $\mathbb R^3$ için tabandır.

**Kontrol.** Eklenen vektör önceki germe uzayının dışında olmalıdır.

## Hata Avı

### Örnek 10: Yalnız Vektör Sayısına Bakmak

$\mathbb R^3$ içinde üç vektör bulunması taban için yeterli değildir. Üç vektör bağımlı olabilir; germe ve bağımsızlık ayrıca sınanmalıdır.

### Örnek 11: Bileşen Sayısını Boyut Sanmak

$P_2$ polinomları sütun biçiminde görünmez; yine de $\dim(P_2)=3$'tür. Boyut, nesnenin yazıldığı görünüşten değil, tabandaki vektör sayısından gelir.

### Örnek 12: RREF Sütunlarını Kullanmak

Satır işlemleri sütunlar arasındaki bağımlılık konumlarını korur, sütunların kendisini korumaz. Sütun uzayı tabanı özgün matristen seçilir.

## Adım Adım İşlem Pratiği

### Örnek 13

$\{(1,0)^T,(0,1)^T,(1,1)^T\}$, $\mathbb R^2$'yi gerer ama bağımlıdır. İlk iki vektör taban olarak seçilebilir.

### Örnek 14

$\{1+t,t-t^2,1+t^2\}$ listesinin $P_2$ için taban olup olmadığı, katsayı sütunlarını

$$
\begin{bmatrix}1&0&1\\1&1&0\\0&-1&1\end{bmatrix}
$$

matrisinde toplayıp rankın $3$ olup olmadığına bakılarak belirlenir.

Üçüncü sütun ilk iki sütunun farkıdır. Rank $2$ olduğundan liste bağımlıdır ve $P_2$ için taban değildir.

### Örnek 15

$A$ matrisi $4\times7$ ve rankı $4$ ise sütun uzayının boyutu $4$, null uzayının boyutu $3$'tür.

### Örnek 16

Sıfır uzayı $\{0\}$ boş tabana sahiptir ve boyutu $0$'dır. Sıfır vektöründen oluşan liste taban değildir; bağımlıdır.

## Karma Çalışma Soruları

### Soru 1

$\{(1,0,1)^T,(0,1,1)^T,(1,1,2)^T\}$ listesinin bağımsızlığını ve gerdiği uzayın boyutunu belirleyin.

### Soru 2

$\{(1,1,0)^T,(0,1,1)^T\}$ listesini $\mathbb R^3$ tabanına iki farklı biçimde tamamlayın.

### Soru 3

$A=\begin{bmatrix}1&0&1\\0&1&1\\1&1&2\end{bmatrix}$ matrisinin sütun uzayı için özgün sütunlardan bir taban seçin.

### Soru 4

Bir matrisin RREF biçiminin sıfır olmayan satırlarının satır uzayına neden taban verdiğini açıklayın.

### Soru 5

$P_4$ ve $M_{2\times3}(\mathbb R)$ uzaylarının boyutlarını standart tabanlarını yazarak bulun.

### Soru 6

$\{1+t,1-t,t^2\}$ listesinin $P_2$ için taban olup olmadığını belirleyin.

### Soru 7

$A\in\mathbb R^{5\times8}$ ve $\operatorname{rank}(A)=4$ için sütun uzayı ve null uzayı boyutlarını bulun.

### Soru 8

Üç boyutlu bir uzayda dört vektörlü bir listenin neden bağımsız olamayacağını rank diliyle açıklayın.

### Soru 9

Bir alt uzayın iki farklı tabanının neden aynı sayıda vektör taşıması gerektiğini açıklayın.

### Soru 10

$W=\{(x,y,z,w):x+y=0,\ z-w=0\}$ alt uzayına bir taban bulun ve boyutunu belirleyin.

## Çalışmanızı Kontrol Etme

Taban kararında iki koşulu ayrı ayrı yazın: liste uzayı geriyor mu ve lineer bağımsız mı? Pivot sütunu kullanıyorsanız vektörleri özgün matristen seçin.

> Çözümümü germe ve bağımsızlık ayrımı, özgün pivot sütunlarının seçimi, taban vektörü sayısı, rank ve nullity hesabı açısından incele. Hata varsa doğru tabanı hemen verme; önce yanlış karar verdiğim koşulu belirt.
