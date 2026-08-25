---
title: "Dönem Sonu Çalışma Havuzu"
subtitle: "MATE 213 Lineer Cebir — 50 Soru"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-25
description: "Matris işlemleri, lineer sistemler, vektör uzayları, ortogonallik, özdeğerler ve lineer dönüşümler ağırlıklı 50 soruluk çalışma havuzu."
execute:
  echo: false
---

# Dönem Sonu Çalışma Havuzu

Bu havuz, bütün konu başlıklarını eşit sayıda temsil etmez. Sorular; uygun
yöntemi seçme, işlemi düzenli yürütme, sonucu farklı bir yoldan denetleme ve
cebirsel sonuçları geometrik olarak yorumlama becerileri çevresinde
toplanmıştır.

Her soruda önce kullanılan uzayları, matris boyutlarını ve karar ölçütünü
yazın. Satır işlemleri boyunca pivotları; taban sorularında bağımsızlık ile
germe koşullarını; özdeğer sorularında cebirsel ve geometrik katları izleyin.
Soruların çözümleri bu notta verilmemiştir.

## Konu Takip Yönergesi

### Tam Çözüm Düzeyinde Çalışılacaklar

Bu başlıklarda boş kâğıtta baştan sona çözüm kurabilmelisiniz:

- Matris ve vektör işlemleri
- Gauss ve Gauss–Jordan eliminasyonu
- Ters matris ve determinant
- Alt uzay, taban ve boyut
- Koordinatlar ve taban değişimi
- Ortogonal izdüşüm ve Gram–Schmidt
- En küçük kareler yaklaşımı
- Özdeğer ve özvektör hesabı
- Köşegenleştirme ve matris kuvvetleri
- Lineer dönüşüm, çekirdek ve görüntü

Bu grupta yalnız sonuç yazmak yeterli bir hazırlık değildir. Kullandığınız
satır işlemlerini, seçtiğiniz pivot sütunlarını, kurduğunuz karakteristik
polinomu ve gerekli denetim adımlarını gösterebilmelisiniz.

### Kısa İşlem Düzeyinde Çalışılacaklar

Bu başlıklarda ölçütü hızlı kurup tek veya birkaç adımda sonuca
gidebilmelisiniz:

- Matris boyutu ve işlem uygunluğu
- Matris–vektör ve matris–matris çarpımı
- Satır işleminin determinant etkisi
- Pivot, rank ve serbest değişken sayısı
- Germe ve lineer bağımsızlık kararı
- Koordinat sütununu geri kurma
- İç çarpım, norm ve açı
- İzdüşüm katsayısını hesaplama
- Karakteristik polinomu yazma
- Özvektör adayını sınama

### Kuramsal Dayanak Olarak İzlenecekler

Aşağıdaki başlıklar işlemlerin neden çalıştığını açıklar. Tanımları,
eşdeğerlikleri ve aralarındaki bağlantıları bilin:

- Vektör uzayı ve alt uzay koşulları
- Lineer bağımsızlık ve homojen sistem
- Rank–nullity boyut teoremi
- İç çarpımın temel özellikleri
- İzdüşümün en iyi yaklaşım özelliği
- Cebirsel ve geometrik kat
- Köşegenleştirilebilirlik ölçütü
- Çekirdek, görüntü ve birebirlik

### Bu Havuzun Dışında Tutulan Başlıklar

- Karmaşık vektör uzayları
- Jordan normal biçimi
- Spektral teoremin ileri sonuçları
- Sayısal özdeğer algoritmaları
- QR ayrışımının sayısal uygulamaları

Bu başlıklar mevcut ders kapsamının ötesindedir; aşağıdaki çalışma
sorularının dağılımına alınmamıştır.

### Önerilen Çalışma Sırası

1. Önce kısa işlem sorularını tamamlayın.
2. Uzun sorularda süre tutun.
3. Her kararın ölçütünü yazın.
4. Sonucu yerine koyarak doğrulayın.
5. Hatalı konunun çalışma notuna dönün.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Önce kendi çözümünüzü tamamlayın. Yapay zekâdan doğru cevabı istemek yerine
> ilk yanlış satır işlemini, boyut uyuşmazlığını, hatalı pivot seçimini,
> karakteristik polinomu veya taban değişiminin yönünü incelemesini isteyin.
> Düzeltmeden sonra soruyu baştan yeniden çözün.
:::

## 1. Vektörler, Matrisler ve Lineer Sistemler

### Soru 1

$$
u=\begin{bmatrix}2\\-1\\3\end{bmatrix},\qquad
v=\begin{bmatrix}1\\4\\-2\end{bmatrix}
$$

için $3u-2v$ vektörünü bulun. Sonucu bileşenler üzerinden denetleyin.

### Soru 2

$$
w=\begin{bmatrix}5\\1\\4\end{bmatrix},\qquad
v_1=\begin{bmatrix}1\\0\\1\end{bmatrix},\qquad
v_2=\begin{bmatrix}0\\1\\1\end{bmatrix}
$$

veriliyor. $w$ vektörünün $v_1$ ve $v_2$'nin lineer birleşimi olup
olmadığına karar verin.

### Soru 3

Aşağıdaki matrislerin boyutlarını ve özel türlerini yazın:

$$
A=\begin{bmatrix}2&0&0\\0&-1&0\\0&0&4\end{bmatrix},\qquad
B=\begin{bmatrix}1&2&3\\0&1&4\end{bmatrix},\qquad
C=\begin{bmatrix}0&-2\\2&0\end{bmatrix}.
$$

### Soru 4

$$
A=\begin{bmatrix}1&-2\\3&0\end{bmatrix},\qquad
B=\begin{bmatrix}4&1\\-1&2\end{bmatrix}
$$

için $2A-B$, $A^T$ ve $(A+B)^T$ matrislerini hesaplayın. Son sonucu
$A^T+B^T$ ile karşılaştırın.

### Soru 5

$$
A=\begin{bmatrix}1&2&-1\\0&3&4\end{bmatrix},\qquad
x=\begin{bmatrix}2\\-1\\1\end{bmatrix}
$$

için $Ax$ çarpımını hem satır–vektör iç çarpımlarıyla hem sütunların lineer
birleşimiyle bulun.

### Soru 6

$$
A=\begin{bmatrix}1&2\\0&-1\\3&1\end{bmatrix},\qquad
B=\begin{bmatrix}2&0&1\\-1&4&2\end{bmatrix}
$$

için tanımlı olan $AB$ ve $BA$ çarpımlarını hesaplayın; sonuçların
boyutlarını çarpmadan önce yazın.

### Soru 7

$$
A=\begin{bmatrix}1&1\\0&1\end{bmatrix},\qquad
B=\begin{bmatrix}1&0\\1&1\end{bmatrix}
$$

için $AB$ ve $BA$ matrislerini bulun. Bu örnek üzerinden matris çarpımının
değişme özelliğini neden taşımadığını açıklayın.

### Soru 8

$$
\begin{aligned}
x-2y+z&=3,\\
2x+y-z&=1,\\
3x-y+2z&=7
\end{aligned}
$$

sistemini $Ax=b$ biçiminde ve genişletilmiş matris biçiminde yazın. Matris
boyutlarının bilinmeyen ve denklem sayılarıyla ilişkisini belirtin.

### Soru 9

$$
\begin{aligned}
x+y+z&=6,\\
2x-y+z&=3,\\
x+2y-z&=2
\end{aligned}
$$

sistemini Gauss eliminasyonuyla çözün. Geri yerine koyarak üç denklemi de
doğrulayın.

### Soru 10

$a\in\mathbb R$ olmak üzere

$$
\begin{aligned}
x+y+z&=2,\\
2x+2y+2z&=4,\\
x+y+az&=3
\end{aligned}
$$

sisteminin hangi $a$ değerlerinde çözümsüz veya sonsuz çözümlü olduğunu
belirleyin.

### Soru 11

$$
A=\begin{bmatrix}
1&2&-1&3\\
0&1&2&-1\\
2&5&3&1
\end{bmatrix},\qquad
b=\begin{bmatrix}4\\1\\9\end{bmatrix}
$$

için $Ax=b$ sistemini RREF biçimine getirin. Pivot ve serbest değişkenleri
belirleyip çözümü parametreli vektör biçiminde yazın.

### Soru 12

$3\times3$ birim matrise sırasıyla

$$
R_1\leftrightarrow R_3,\qquad
R_2\leftarrow2R_2,\qquad
R_3\leftarrow R_3-4R_1
$$

işlemlerini uygulayan elementer matrisleri ayrı ayrı yazın. Bu matrislerin
$A$'ya soldan çarpıldığında hangi satır işlemlerini yaptığını açıklayın.

### Soru 13

$$
A=\begin{bmatrix}1&2&0\\0&1&1\\2&3&1\end{bmatrix}
$$

matrisinin tersini Gauss–Jordan yöntemiyle bulun. Sonucu hem $AA^{-1}$ hem
$A^{-1}A$ çarpımıyla denetleyin.

### Soru 14

$$
A=\begin{bmatrix}2&1&0\\-1&3&2\\4&0&1\end{bmatrix}
$$

matrisinin determinantını birinci satır boyunca kofaktör açılımıyla bulun.
Aynı sonucu uygun satır işlemleriyle üçgensel biçime geçerek doğrulayın.

### Soru 15

$$
\begin{aligned}
2x-y&=5,\\
3x+2y&=4
\end{aligned}
$$

sistemini Cramer kuralıyla çözün. Kuralın uygulanabilmesi için gereken
determinant koşulunu açıkça yazın.

## 2. Vektör Uzayları, Taban ve Koordinatlar

### Soru 16

$$
v_1=\begin{bmatrix}1\\0\\1\end{bmatrix},\qquad
v_2=\begin{bmatrix}0\\1\\1\end{bmatrix},\qquad
v_3=\begin{bmatrix}1\\1\\0\end{bmatrix}
$$

ve $w=(3,2,1)^T$ veriliyor. $w$ vektörünün bu üç vektörün germesinde olup
olmadığına karar verin.

### Soru 17

$$
W=\{(x,y,z)\in\mathbb R^3:x-2y+z=0\}
$$

kümesinin alt uzay olduğunu lineer birleşimlere kapalılık testiyle gösterin.
Ardından $W$ için bir üreteç listesi bulun.

### Soru 18

Aşağıdaki kümelerin alt uzay olup olmadığına karar verin. Alt uzay olmayan
her küme için bozulan koşulu bir karşı örnekle gösterin:

$$
U_1=\{(x,y)\in\mathbb R^2:x+y=1\},
$$

$$
U_2=\{(x,y,z)\in\mathbb R^3:z=0\},
$$

$$
U_3=\{p\in P_2:p(0)=0\}.
$$

### Soru 19

$$
A=\begin{bmatrix}1&2&-1\\2&4&-2\end{bmatrix}
$$

için $\operatorname{Null}(A)$ ve $\operatorname{Col}(A)$ uzaylarına birer
taban bulun. Bu iki uzayın hangi üst uzaylarda bulunduğunu yazın.

### Soru 20

$$
v_1=\begin{bmatrix}1\\1\\0\end{bmatrix},\qquad
v_2=\begin{bmatrix}0\\1\\1\end{bmatrix},\qquad
v_3=\begin{bmatrix}1\\2\\1\end{bmatrix}
$$

listesinin lineer bağımsız olup olmadığını homojen sistem kurarak belirleyin.

### Soru 21

$$
A=\begin{bmatrix}
1&0&1&2\\
0&1&1&1\\
1&1&2&3
\end{bmatrix}
$$

matrisinin sütun uzayı için özgün sütunlardan bir taban seçin. Seçilmeyen
sütunları taban sütunlarının lineer birleşimi olarak yazın.

### Soru 22

$A\in\mathbb R^{4\times7}$ ve $\operatorname{rank}(A)=3$ olsun.
$\operatorname{Col}(A)$, $\operatorname{Row}(A)$ ve
$\operatorname{Null}(A)$ uzaylarının boyutlarını bulun. Sonucu rank–nullity
boyut teoremiyle ilişkilendirin.

### Soru 23

$$
\mathcal B=(1+t,\ t-t^2,\ 1+t^2)
$$

listesinin $P_2$ için taban olup olmadığını katsayı matrisi üzerinden
belirleyin. Liste taban değilse açık bir bağımlılık bağıntısı yazın.

### Soru 24

$$
B=\left(
\begin{bmatrix}1\\1\end{bmatrix},
\begin{bmatrix}2\\-1\end{bmatrix}
\right),\qquad
v=\begin{bmatrix}7\\1\end{bmatrix}
$$

için $[v]_B$ koordinatını bulun. Koordinat sütunundan $v$'yi geri kurarak
sonucu denetleyin.

### Soru 25

$E$ standart taban ve

$$
B=\left(
\begin{bmatrix}1\\2\end{bmatrix},
\begin{bmatrix}3\\1\end{bmatrix}
\right)
$$

olsun. $P_{E\leftarrow B}$ ve $P_{B\leftarrow E}$ matrislerini bulun.
Çarpımlarının birim matris olduğunu gösterin.

### Soru 26

$B=(1,1+t,1+t+t^2)$ tabanında

$$
p(t)=5+4t+2t^2
$$

polinomunun koordinat sütununu bulun. Sonucu polinomları yeniden birleştirerek
doğrulayın.

### Soru 27

$B,C,D$, aynı sonlu boyutlu uzayın sıralı tabanları olsun. Aşağıdaki eşitliği
matrislerin giriş ve çıkış koordinatlarını izleyerek gerekçelendirin:

$$
P_{D\leftarrow B}=P_{D\leftarrow C}P_{C\leftarrow B}.
$$

### Soru 28

Boyutu $n$ olan bir vektör uzayındaki $n+1$ vektörlü her listenin neden
lineer bağımlı olduğunu rank üzerinden açıklayın. Sonucu $P_3$ içinde beş
polinomlu bir listeye uygulayın.

## 3. İç Çarpım, Ortogonallik ve En Küçük Kareler

### Soru 29

$$
u=\begin{bmatrix}2\\-1\\2\end{bmatrix},\qquad
v=\begin{bmatrix}1\\3\\-2\end{bmatrix}
$$

için $u\cdot v$, $\|u\|$, $\|v\|$ ve $\|u-v\|$ değerlerini bulun.

### Soru 30

$$
a=\begin{bmatrix}1\\1\\0\end{bmatrix},\qquad
b=\begin{bmatrix}1\\0\\1\end{bmatrix}
$$

vektörleri arasındaki açıyı bulun. Açının dar, dik veya geniş oluşunu iç
çarpımın işaretiyle ilişkilendirin.

### Soru 31

$\mathbb R^2$ üzerinde

$$
\langle x,y\rangle_W=2x_1y_1+5x_2y_2
$$

iç çarpımı veriliyor. $u=(1,-2)^T$ ve $v=(3,1)^T$ için iç çarpımı ve
$W$-normlarını hesaplayın. Standart Öklid normlarından neden farklı sonuç
çıktığını açıklayın.

### Soru 32

$v=(5,1)^T$ vektörünü $u=(1,2)^T$ doğrultusuna ortogonal olarak izdüşürün.
$v$'yi izdüşüm ve dik hata bileşenlerinin toplamı biçiminde yazın.

### Soru 33

$$
u_1=\begin{bmatrix}1\\1\\0\end{bmatrix},\qquad
u_2=\begin{bmatrix}0\\0\\2\end{bmatrix},\qquad
v=\begin{bmatrix}3\\-1\\4\end{bmatrix}
$$

veriliyor. $u_1,u_2$ vektörlerinin gerdiği uzaya $v$'nin izdüşümünü bulun.
Hata vektörünün iki taban vektörüne de dik olduğunu gösterin.

### Soru 34

$$
a_1=\begin{bmatrix}1\\1\\0\end{bmatrix},\qquad
a_2=\begin{bmatrix}1\\0\\1\end{bmatrix}
$$

listesine Gram–Schmidt yöntemini uygulayın ve aynı alt uzay için ortogonal bir
taban elde edin.

### Soru 35

$$
a_1=\begin{bmatrix}1\\0\\1\end{bmatrix},\qquad
a_2=\begin{bmatrix}1\\1\\1\end{bmatrix},\qquad
a_3=\begin{bmatrix}0\\1\\1\end{bmatrix}
$$

listesini Gram–Schmidt yöntemiyle ortonormalleştirin. Sonuç vektörlerinin
karşılıklı iç çarpımlarını hesaplayın.

### Soru 36

$$
A=\begin{bmatrix}1&0\\1&1\\1&2\end{bmatrix},\qquad
b=\begin{bmatrix}2\\2\\5\end{bmatrix}
$$

için normal denklemleri kurup en küçük kareler çözümü $\widehat x$'i bulun.
$r=b-A\widehat x$ artık vektörünün $A^Tr=0$ koşulunu sağladığını gösterin.

### Soru 37

$(0,1)$, $(1,2)$, $(2,2)$ ve $(3,4)$ noktalarına $y=a+bt$ doğrusu uydurun.
Tasarım matrisini kurun, normal denklemleri çözün ve hata kareleri toplamını
hesaplayın.

## 4. Özdeğerler, Köşegenleştirme ve Lineer Dönüşümler

### Soru 38

$$
A=\begin{bmatrix}4&1\\2&3\end{bmatrix}
$$

için $(1,1)^T$ ve $(1,-2)^T$ vektörlerinin özvektör olup olmadığını doğrudan
$Av=\lambda v$ eşitliğiyle sınayın.

### Soru 39

$$
A=\begin{bmatrix}3&2\\1&2\end{bmatrix}
$$

matrisinin karakteristik polinomunu, özdeğerlerini ve her özdeğere ait bir
özuzay tabanını bulun.

### Soru 40

$$
T=\begin{bmatrix}2&-1&4\\0&3&5\\0&0&-2\end{bmatrix}
$$

matrisinin özdeğerlerini işlem yapmadan yazın. Özdeğerlerin toplamını ve
çarpımını matrisin izi ve determinantıyla karşılaştırın.

### Soru 41

$$
B=\begin{bmatrix}5&1\\0&5\end{bmatrix}
$$

matrisinde $5$ özdeğerinin cebirsel ve geometrik katlarını bulun. Matrisin
köşegenleştirilebilir olup olmadığına karar verin.

### Soru 42

Aşağıdaki matrislerin köşegenleştirilebilir olup olmadığına gerekçeli olarak
karar verin:

$$
A_1=\begin{bmatrix}2&0\\0&2\end{bmatrix},\qquad
A_2=\begin{bmatrix}2&1\\0&2\end{bmatrix},\qquad
A_3=\begin{bmatrix}1&1\\0&3\end{bmatrix}.
$$

### Soru 43

$$
A=\begin{bmatrix}4&1\\2&3\end{bmatrix}
$$

matrisi için $A=PDP^{-1}$ köşegenleştirmesini kurun. $P$ sütunlarıyla
$D$'nin köşegen sırasının uyumunu $AP=PD$ eşitliğiyle denetleyin.

### Soru 44

Soru 43'teki köşegenleştirmeyi kullanarak $A^6$ matrisini bulun. Sonucu
$A^2$ üzerinden yapılabilecek bir denetimle karşılaştırın.

### Soru 45

Aşağıdaki dönüşümlerin lineer olup olmadığına karar verin. Lineer olmayanlar
için uygun bir koşulu bozan karşı örnek verin:

$$
T_1(x,y)=(x+2y,3x-y),
$$

$$
T_2(x,y)=(x+1,y),
$$

$$
T_3(x,y)=(xy,y).
$$

### Soru 46

$T:\mathbb R^2\to\mathbb R^3$ dönüşümü

$$
T(x,y)=(x-y,2x+y,3y)
$$

ile veriliyor. $T$'nin standart matrisini sütun görüntülerinden kurun ve
$T(2,-1)^T$ değerini hem formülden hem matris çarpımından bulun.

### Soru 47

$D:P_3\to P_2$, $D(p)=p'$ dönüşümü için tanım uzayında
$B=(1,t,t^2,t^3)$ ve değer uzayında $C=(1,t,t^2)$ tabanlarını kullanın.
$[D]_{C\leftarrow B}$ matrisini kurun.

### Soru 48

$$
A=\begin{bmatrix}1&-1&0\\0&1&1\end{bmatrix}
$$

ile verilen $T:\mathbb R^3\to\mathbb R^2$ dönüşümünün çekirdeği ve görüntüsü
için birer taban bulun. Boyutları rank–nullity teoremiyle denetleyin ve
$T$'nin birebir ya da örten olup olmadığını belirleyin.

### Soru 49

$T:\mathbb R^2\to\mathbb R^3$ dönüşümünün matrisi

$$
A=\begin{bmatrix}1&0\\2&1\\-1&3\end{bmatrix}
$$

ve $S:\mathbb R^3\to\mathbb R^2$ dönüşümünün matrisi

$$
B=\begin{bmatrix}1&-1&0\\0&2&1\end{bmatrix}
$$

olsun. $S\circ T$ ve $T\circ S$ dönüşümlerinin matrislerini bulun;
tanım ve değer uzaylarını ayrı ayrı yazın.

### Soru 50

$T:\mathbb R^2\to\mathbb R^2$ dönüşümü

$$
T(x,y)=(2x+y,x+2y)
$$

ile veriliyor. Dönüşümün matrisini, özdeğerlerini ve özdoğrultularını bulun.
Bir özvektör tabanı kullanarak matrisi köşegenleştirin ve $T^n(1,0)^T$
ifadesini kapalı biçimde yazın.

## Çalışmanızı Kontrol Etme

> Çözümümü matris boyutları, satır işlemleri, pivot ve serbest değişkenler,
> germe–bağımsızlık ayrımı, taban değişiminin yönü, iç çarpım ve izdüşüm
> katsayıları, normal denklemler, karakteristik polinom, özuzay boyutları,
> köşegenleştirme sırası ve çekirdek–görüntü ayrımı bakımından incele. Hata
> varsa doğru çözümü vermeden ilk yanlış adımı ve yeniden bakmam gereken konu
> başlığını belirt.
