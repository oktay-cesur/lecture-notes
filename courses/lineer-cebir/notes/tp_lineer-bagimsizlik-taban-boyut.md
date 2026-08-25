---
title: "Lineer Bağımsızlık, Taban ve Boyut"
subtitle: "MATE 213 — Lineer Cebir"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-11
execute:
  echo: false
---

## Her Üreteç Gerekli mi?

$v_3=v_1+v_2$ ise:

$$
\operatorname{span}\{v_1,v_2,v_3\}=\operatorname{span}\{v_1,v_2\}
$$

$v_3$ kümeyi büyütmüyor.

> Hangi vektörler gerçekten gereklidir?

::: {.notes}
Alt uzay testi konusunda gerilen kümenin, bir listenin bütün lineer birleşimlerinden oluştuğunu kurmuştuk. Kapanışta özel bir durum bu tanımı sınadı: $v_3=v_1+v_2$ olduğunda $\operatorname{span}\{v_1,v_2,v_3\}=\operatorname{span}\{v_1,v_2\}$ eşitliği çıkıyordu. Üçüncü vektör germe kümesini büyütmüyor, çünkü zaten ilk ikisinin bir lineer birleşimi.

Bu gözlem tek bir örnekle sınırlı değil. Bir üreteç listesindeki herhangi bir vektör diğerlerinin lineer birleşimi olarak yazılabiliyorsa, o vektör listeden çıkarılabilir ve gerilen küme değişmez. Soru artık şuna dönüşüyor: bir listede böyle gereksiz bir vektör olup olmadığını nasıl anlarız?
:::

---

## Sıfıra Giden Trivial Olmayan Bir Yol

$v_3=v_1+v_2$ eşitliği yeniden yazılırsa:

$$
v_1+v_2-v_3=0
$$

Katsayılar $(1,1,-1)$ — hepsi sıfır değil.

$$
c_1v_1+\cdots+c_kv_k=0,\qquad \text{bazı }c_i\neq0
$$

- Bir $v_i$ diğerlerinden yazılabilir
- O $v_i$ listeden çıkarılabilir

::: {.notes}
$v_1+v_2-v_3=0$ ifadesi, katsayıların hepsi sıfır olmadan sıfır vektörünü üreten bir lineer birleşim örneğidir. Bu satırı genel bir listeye taşıdığımızda soru şu hale gelir: $c_1v_1+\cdots+c_kv_k=0$ denklemi, katsayıların hepsi sıfır olmadan da sağlanabilir mi? Sağlanabiliyorsa, sıfırdan farklı katsayıya sahip herhangi bir $v_i$ diğer taraftaki terimlere bölünerek yalnız çözülebilir ve geri kalanların lineer birleşimi olarak yazılır.

Bu denklemin biçimi tanıdıktır: homojen sistemlerde gördüğümüz $x_1a_1+\cdots+x_na_n=0$ ile birebir aynı yapıyı taşır. Fark, $v_i$'lerin artık yalnızca $\mathbb{R}^m$'in sütun vektörleri olmak zorunda olmamasıdır — herhangi bir vektör uzayının elemanı olabilirler. Katsayıların hepsi sıfır olan çözüm her zaman vardır; asıl soru başka bir çözümün bulunup bulunmadığıdır.
:::

---

## Lineer Bağımsızlık ve Bağımlılık

$v_1,\ldots,v_k\in V$ için

$$
c_1v_1+\cdots+c_kv_k=0
$$

yalnız $c_1=\cdots=c_k=0$ ile sağlanıyorsa liste **lineer bağımsızdır**. Aksi halde **bağımlıdır**.

::: {.notes}
Bağımsızlık, listedeki hiçbir vektörün diğerleriyle kurulabilen gereksiz bir yön taşımaması anlamına gelir: sıfır vektörünü üretmenin tek yolu bütün katsayıları sıfır seçmektir. Sıfırdan farklı en az bir katsayıyla sıfır vektörü üretilebiliyorsa liste bağımlıdır, ve $v_1+v_2-v_3=0$ örneğinde görüldüğü gibi bu ilişki en az bir vektörü diğerlerinden üretilebilir kılar.

Burada $V$ herhangi bir vektör uzayı olabilir — $\mathbb{R}^n$, polinomlar ya da matrisler. Tanım $v_i$'lerin sütun biçiminde yazılıp yazılmadığına bakmaz, yalnız $c_1v_1+\cdots+c_kv_k=0$ denkleminin katsayı yapısına bakar. $k=1$ durumu da tanıma dahildir: $cv=0$ ve $v\neq0$ ise $c=0$ zorunludur, dolayısıyla sıfırdan farklı tek bir vektör her zaman bağımsızdır.
:::

---

## Tanımı Doğrudan Kullanmak

$p_1=1+t$, $p_2=2+2t$ için:

$$
c_1(1+t)+c_2(2+2t)=(c_1+2c_2)(1+t)
$$

Tek koşul: $c_1+2c_2=0$.

$$
\boxed{c_1=-2,\ c_2=1\Rightarrow p_2=2p_1}
$$

::: {.notes}
İki polinomun lineer birleşimi $c_1(1+t)+c_2(2+2t)$ açılırsa $(c_1+2c_2)+(c_1+2c_2)t$, yani $(c_1+2c_2)(1+t)$ elde edilir. $1+t$ sıfır polinomu olmadığından bu ifade ancak $c_1+2c_2=0$ ise sıfır polinomuna eşit olur. Bu tek denklemin sıfırdan farklı çözümleri var — örneğin $c_1=-2$, $c_2=1$ — dolayısıyla $p_1,p_2$ bağımlıdır. Katsayılar aynı zamanda ilişkiyi verir: $p_2=2p_1$.

Bu örnekte katsayıları elle eşleştirmek yeterliydi, çünkü yalnız iki polinom ve tek bir bağımsız bileşen vardı. Vektör sayısı arttığında ya da bileşenler karmaşıklaştığında bu eşleştirmeyi sistematik bir araca devretmek gerekir.
:::

---

## Aynı Soru, Tanıdık Bir Araç

$$
A=[v_1\ \cdots\ v_k],\qquad c=(c_1,\ldots,c_k)^T
$$

$$
Ac=0
$$

- $\operatorname{rank}(A)=k$: yalnız trivial, **bağımsız**
- $\operatorname{rank}(A)<k$: trivial olmayan çözüm, **bağımlı**

::: {.notes}
$v_1,\ldots,v_k$ vektörleri $\mathbb{R}^m$'in elemanıysa, onları sütun yapan $A=[v_1\ \cdots\ v_k]$ matrisi kurulabilir ve $c_1v_1+\cdots+c_kv_k=0$ denklemi tam olarak $Ac=0$ homojen sistemine dönüşür. Bu, homojen sistemlerden lineer bağımsızlığa geçerken zaten kurduğumuz araçtır: yeni bir algoritma değil, aynı Gauss eliminasyonu ve rank ölçütünün yeni bir soruya uygulanışı. $\operatorname{rank}(A)=k$, yani her sütunda pivot varsa, sistem yalnız trivial çözüme sahiptir ve liste bağımsızdır. $\operatorname{rank}(A)<k$ ise en az bir serbest değişken vardır; bu değişkene verilen sıfırdan farklı bir değer, tam olarak aradığımız bağımlılık ilişkisinin katsayılarını üretir.

$v_i$'ler polinom ya da matris gibi soyut nesnelerse aynı sistem, bir referans tabana göre bileşenleri karşılaştırarak kurulur — $1+t$ ve $2+2t$ örneğinde sabit terim ve $t$ katsayısını ayrı ayrı sıfırlamamız buna küçük bir örnekti. İzlenen yol değişmez: katsayı denklemini yaz, elimine et, rankı oku.
:::

---

## Soru: Üç Vektör Bağımsız mı?

$$
v_1=\begin{bmatrix}1\\2\\0\end{bmatrix},\quad
v_2=\begin{bmatrix}0\\1\\1\end{bmatrix},\quad
v_3=\begin{bmatrix}1\\0\\-2\end{bmatrix}
$$

> $c_1v_1+c_2v_2+c_3v_3=0$ yalnız trivial mi?

::: {.notes}
Üç vektörü sütun yapan $3\times3$ bir matris kuruyoruz ve sorunun cevabını Gauss eliminasyonuyla arıyoruz. Vektörler özel olarak seçilmedi; herhangi üç sütunlu bir matrisle aynı işlem tekrarlanır. Sorunun cevabı elimine edip pivot sayısını üçle karşılaştırmaktan geçiyor — henüz sonucu tahmin etmeden adımları izleyelim.
:::

---

## Çözüm: Eliminasyon ile Karar

$$
A=\begin{bmatrix}1&0&1\\2&1&0\\0&1&-2\end{bmatrix}
\ \longrightarrow\
\begin{bmatrix}1&0&1\\0&1&-2\\0&0&0\end{bmatrix}
$$

$$
\boxed{-v_1+2v_2+v_3=0}
$$

::: {.notes}
Birinci pivot $(1,1)$ konumundaki $1$'dir; $R_2\leftarrow R_2-2R_1$ işlemi ikinci satırı $(0,1,-2)$ yapar. İkinci pivot $(2,2)$ konumundaki $1$'dir; $R_3\leftarrow R_3-R_2$ işlemi üçüncü satırı tamamen sıfırlar, çünkü üçüncü satır ikinciyle zaten aynıydı. Sonuçta iki pivot, üç sütun — $\operatorname{rank}(A)=2<3$, dolayısıyla liste bağımlıdır.

Üçüncü sütun serbest değişkendir; $c_3=t$ seçilirse geriye yerine koymadan $c_2=2t$ ve $c_1=-t$ çıkar. $t=1$ seçimiyle $c=(-1,2,1)$ elde edilir ve doğrudan doğrulanabilir: $-v_1+2v_2+v_3=(-1,-2,0)+(0,2,2)+(1,0,-2)=(0,0,0)$. İlişki aynı zamanda hangi vektörün gereksiz olduğunu söylüyor: $v_3=v_1-2v_2$, yani $v_3$ çıkarılırsa gerilen küme değişmez.
:::

---

## Germe ile Bağımsızlık Aynı Soru mu?

- Germe: uzayı üretiyor mu?
- Bağımsızlık: gereksiz vektör var mı?

> İkisi birbirinden bağımsız sorular.

::: {.notes}
Bir küme geriyor olabilir ama bağımlı olabilir — fazladan bir vektör germe gücünü bozmaz, yalnız gereksiz kalır. Aynı şekilde bir küme bağımsız olabilir ama germemiş olabilir — vektörler arasında gereksiz olan yok, fakat sayıca yetersizler. Rank dilinde bu ayrım nettir: germe, $\operatorname{rank}(A)$'nın hedef uzayın boyutuna eşit olup olmadığını sorar; bağımsızlık, $\operatorname{rank}(A)$'nın sütun sayısına eşit olup olmadığını sorar. İkisi aynı matrisin farklı ölçütleridir.

Bu iki sorunun dört olası evet-hayır cevabı vardır.
:::

---

## Dört Olası Durum

| Küme türü | Geriyor mu? | Bağımsız mı? |
|---|---|---|
| Fazla vektörlü üreteç kümesi | Evet | Hayır |
| Eksik bağımsız küme | Hayır | Evet |
| Taban | Evet | Evet |
| Kötü seçilmiş küme | Hayır | Hayır |

::: {.notes}
$\mathbb{R}^3$'te standart taban $\{e_1,e_2,e_3\}$'e dördüncü bir vektör eklersek — örneğin $e_1+e_2$ — küme hâlâ gerer, çünkü ilk üç vektör zaten yeterliydi; ama dört vektör üç boyutlu bir uzayda bağımsız kalamaz. Tersine, tek başına $\{e_1\}$ bağımsızdır fakat $\mathbb{R}^3$'ü germez; yalnız bir doğruyu kapsar.

$\{e_1,e_2,e_3\}$ her iki koşulu da sağlar ve bu tablodaki tek "ideal" satırdır. $\{e_1,2e_1\}$ ise her ikisini de kaybeder: paralel oldukları için bağımlıdırlar ve yalnız bir doğruyu gerer, $\mathbb{R}^3$'ün tamamını değil. Bu dört satır, germe ve bağımsızlık için mümkün olan bütün evet-hayır durumlarını içerir.
:::

---

## Taban: Germe + Bağımsızlık

$B\subseteq V$ **taban**dır eğer:

- $B$, $V$'yi geriyorsa
- $B$ lineer bağımsızsa

$$
\boxed{\text{taban}=\text{germe}+\text{bağımsızlık}}
$$

::: {.notes}
Taban, önceki tablodaki dört durumdan yalnız birini seçer: hem üretme gücü hem de gereksizlikten arınmışlık. Germe tek başına yeterli olsaydı fazla vektörlü kümeler de kabul edilirdi; bağımsızlık tek başına yeterli olsaydı uzayı germeyen eksik kümeler de kabul edilirdi. İki koşul birlikte, uzayı tam olarak kapsayan ve hiçbir fazlalık taşımayan bir liste tarif eder.

Bir uzayın tabanı tek değildir — $\mathbb{R}^3$'te standart taban dışında sonsuz sayıda taban vardır. Sırada göreceğimiz gibi, tek olmayan bu tabanların ortak taşıdığı tek şey vektör sayısıdır.
:::

---

## Standart Taban

$$
e_1=\begin{bmatrix}1\\0\\0\end{bmatrix},\quad
e_2=\begin{bmatrix}0\\1\\0\end{bmatrix},\quad
e_3=\begin{bmatrix}0\\0\\1\end{bmatrix}
$$

- $\mathbb{R}^3$'ü gerer
- $\operatorname{rank}([e_1\ e_2\ e_3])=3$, bağımsız

$$
\{1,t,t^2\}\ \text{tabanı: }P_2
$$

::: {.notes}
$\{e_1,e_2,e_3\}$'ün germe koşulu açıktır: her $(x,y,z)$, $xe_1+ye_2+ze_3$ olarak yazılır. Bağımsızlığı ise matris zaten birim matris olduğundan üç pivotla doğrudan görülür. Bu ikisi birlikte standart tabanı $\mathbb{R}^3$'ün bir tabanı yapar.

Aynı iki koşul $P_2$'de $\{1,t,t^2\}$ için de sağlanır. Her $a+bt+ct^2$ polinomu bu üç terimin bir lineer birleşimidir, yani küme gerer. $a+bt+ct^2=0$ eşitliği her $t$ için ancak $a=b=c=0$ ile sağlanır, yani küme bağımsızdır. $P_2$'nin vektörleri sütun biçiminde değildir, fakat taban tanımı aynı biçimde çalışır.
:::

---

## Boyut: Tabandaki Vektör Sayısı

$$
\dim(V)=\#\{\text{taban vektörleri}\}
$$

- Bileşen sayısı **değil**
- Her taban aynı sayıyı verir

::: {.notes}
Boyut, bir tabandaki vektör sayısıdır — vektörlerin kaç bileşenden oluştuğu değil. Bu ayrım $\mathbb{R}^n$'de gözden kaçabilir, çünkü orada ikisi çakışır: standart tabanın $n$ vektörü var ve her vektörün de $n$ bileşeni var. $P_2$ ve $M_{2\times2}(\mathbb{R})$ örnekleri bu çakışmanın genel bir kural olmadığını gösteriyor.

Bir uzayın farklı tabanları olabilir, fakat hepsi aynı sayıda vektör taşır. Gerekçesi vektör sayısı boyutu aşarsa bağımlılık kuralına dayanır: bir taban $n$ vektörden oluşuyorsa, $n$'den fazla vektör içeren hiçbir küme bağımsız olamaz. Dolayısıyla iki taban farklı sayıda vektör taşısaydı, büyük olanı küçük tabana göre zorunlu olarak bağımlı çıkardı — bu da taban olma koşuluyla çelişirdi.
:::

---

## Boyut Farklı Nesnelerde

| Uzay | Taban | Boyut |
|---|---|---|
| $\mathbb{R}^n$ | $e_1,\ldots,e_n$ | $n$ |
| $P_2$ | $1,\ t,\ t^2$ | $3$ |
| $M_{2\times2}(\mathbb{R})$ | $E_{11},E_{12},E_{21},E_{22}$ | $4$ |

::: {.notes}
$M_{2\times2}(\mathbb{R})$'de $E_{ij}$, $(i,j)$ konumunda $1$ ve diğer konumlarda $0$ taşıyan matristir. Herhangi bir $2\times2$ matris $\begin{bmatrix}a&b\\c&d\end{bmatrix}=aE_{11}+bE_{12}+cE_{21}+dE_{22}$ biçiminde tek türlü yazılır, dolayısıyla dört matris hem gerer hem bağımsızdır: katsayılar sıfır olmadıkça toplam sıfır matrisi veremez.

$P_2$'nin boyutu $3$, $M_{2\times2}(\mathbb{R})$'nin boyutu $4$'tür ve ikisi de $\mathbb{R}^n$'deki gibi bir "koordinat sayısı" sezgisinden gelmez — polinomun kendisinde $t$ değişkeni yok, matrisin de sütun vektörü biçimi yok. Boyut, nesnenin görünüşünden değil, onu üretmek için gereken bağımsız vektör sayısından geliyor.
:::

---

## Sık Yapılan Hatalar

1. Bağımsızlığı yalnız determinant testine indirgemek
2. Pivot sütunlarını RREF sütunlarıyla karıştırmak
3. Germe kümesini otomatik bağımsız saymak
4. Boyutu bileşen sayısı sanmak
5. Tabanın tek olduğunu sanmak

::: {.notes}
Determinant testi yalnız kare matrislerde işleyen bir kısa yoldur: $k$ vektör $\mathbb{R}^k$'de ise $\det\neq0$ bağımsızlığa denktir, ama $v_i$'ler $\mathbb{R}^m$'de ve $k\neq m$ ise ya da $v_i$'ler polinom/matrisse determinant tanımsızdır. Genel ölçüt her zaman rank karşılaştırmasıdır. İkinci hata, pivot sütunlarının orijinal matriste işaretlenmesi gerekirken RREF'teki karşılık gelen sütunlarla karıştırılmasıdır; RREF sütunları genelde orijinal $v_i$'lerden farklı vektörlerdir, yalnız pivot konumları taşınır.

Üçüncü hata germe ile bağımsızlığı özdeşleştirir; dört durum tablosundaki "fazla vektörlü üreteç kümesi" satırı bunun karşı örneğiydi. Dördüncü hata $P_2$ ve $M_{2\times2}(\mathbb{R})$ örneklerinin doğrudan hedeflediği yanılgıdır: boyut bileşen sayısına değil taban büyüklüğüne bakar. Beşinci hata ise boyutun tekliğini tabanın tekliğiyle karıştırır; taban seçimi çoktur, boyut değeri tektir.
:::

---

## Karar Soruları

1. $\mathbb{R}^4$'te $5$ vektörlü bir küme bağımsız olabilir mi?
2. Sıfır vektörü içeren bir küme taban olabilir mi?
3. Aynı uzayın iki tabanı aynı boyutta mı?

::: {.notes}
Birincisi hayır: $\mathbb{R}^4$'ün boyutu $4$'tür ve boyutu aşan sayıda vektör zorunlu olarak bağımlıdır — beşinci vektör diğer dördünün germesinde kalmak zorundadır. İkincisi de hayır: sıfır vektörünü içeren her liste bağımlıdır, çünkü sıfır vektörüne verilecek sıfırdan farklı bir katsayı, diğerleri sıfır olsa bile trivial olmayan bir ilişki üretir; taban tanımı bağımsızlığı şart koştuğundan sıfır vektörlü bir küme bu tanımı sağlayamaz.

Üçüncüsü evet, ve bu sorunun cevabı boyut kavramının neden iyi tanımlı olduğunu doğrudan taşır: bir taban $n$ vektörden oluşuyorsa, ondan farklı sayıda vektör taşıyan başka bir liste ya bağımlı çıkar ya da uzayı germez, dolayısıyla taban olamaz.
:::

---

## Sonraki Adım: Vektörü Tarif Etmek

- Taban her vektörü üretiyor

> Belirli bir vektör bu tabana göre nasıl tarif edilir?

::: {.notes}
Germe kümesindeki gereksiz vektör sorusu lineer bağımsızlık tanımına ve homojen sistem/rank aracının yeniden kullanımına götürür. Germe ile bağımsızlığı birleştiren taban kavramı ve tabandaki vektör sayısı olan boyut, bu iki fikrin doğal sonucudur.

Taban, bir uzaydaki her vektörü üretebilmesiyle tanımlanır; fakat "üretebilme" ile "belirli bir vektörü hangi katsayılarla ürettiğini söylemek" farklı sorulardır. Bu katsayılar bir vektörü seçilen tabana göre tarif eden koordinat vektörünü kurar. Koordinat vektörleri ve farklı tabanlar arasındaki geçiş ayrı olarak ele alınır.
:::
