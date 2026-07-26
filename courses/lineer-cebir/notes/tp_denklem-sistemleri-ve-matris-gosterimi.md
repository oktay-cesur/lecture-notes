---
title: "Denklem Sistemleri ve Matris Gösterimi"
subtitle: "MATE 213 — Lineer Cebir"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-25
execute:
  echo: false
---

## İhtiyaç: Bilinen Sonuç, Aranan Girdi

Etkinlik–ikram örneği, bu kez ters yönden:

| Etkinlik | Sandviç | İçecek | Tatlı | Toplam bedel |
|---|---:|---:|---:|---:|
| 1 | 20 | 15 | 10 | 3750 |
| 2 | 30 | 25 | 12 | 5500 |
| 3 | 15 | 10 | 8 | 2800 |
| 4 | 40 | 30 | 20 | 7500 |

Ürün miktarları ve toplamlar biliniyor; **birim fiyatlar aranıyor.**

::: {.notes}
Matris–vektör çarpımı konusunda bu tabloyu ileri yönde okumuştuk: miktarlar ve birim fiyatlar biliniyorken her etkinliğin toplam bedelini hesaplamıştık. Şimdi problemi tersine döndürelim. Ürünlerin birim fiyatları bilinmiyor; elimizde yalnız her etkinlikte kullanılan miktarlar ve o etkinliğin ödenmiş toplam bedeli var.

Aranan artık tek bir hesap sonucu değil, üç bilinmeyen fiyattır: sandviç, içecek ve tatlının birim fiyatı. Bu üç değer, dört etkinliğin tamamını aynı anda tutarlı kılmalıdır. Denklem sistemi kavramı tam da bu ihtiyaçtan, bilinen bir çıktının hangi girdiden geldiğini geri bulma ihtiyacından doğar.
:::

---

## Doğal Cebirle Dört Denklem

Fiyatlar: $s$ sandviç, $i$ içecek, $t$ tatlı.

Birinci etkinlik: $20$ sandviç, $15$ içecek, $10$ tatlı, $3750$ TL:

$$
20s+15i+10t=3750
$$

Dört etkinlik birlikte:

$$
\begin{aligned}
20s+15i+10t&=3750,\\
30s+25i+12t&=5500,\\
15s+10i+8t&=2800,\\
40s+30i+20t&=7500.
\end{aligned}
$$

::: {.notes}
Her etkinlik tek bir denklem üretir. Birinci etkinlikte $20$ sandviç, $15$ içecek ve $10$ tatlı kullanılmış ve toplam $3750$ TL ödenmiştir; bu, miktarların bilinmeyen fiyatlarla çarpılıp toplandığı $20s+15i+10t=3750$ denklemine karşılık gelir. Aynı düşünce diğer üç etkinliğe uygulanır.

Burada herhangi bir matris kullanılmadı; yalnız temel cebirle dört denklemlik bir sistem kuruldu. Çözüm olarak tek bir sayının değeri değil, dört denklemi aynı anda sağlayan $s$, $i$ ve $t$ üçlüsü aranır. Bir denklemi tek başına doğru yapan sayılar değil, bütün kısıtların ortak kesişimi hedeflenir.
:::

---

## Küçük Bir Rötuş

Değişkenleri problem çözme mantığıyla baş harfleriyle ifade ettik. Burada yanlış hiçbir şey yok fakat bu gösterimi daha matematikleştirelim, genelleşebilir hale getirelim.

$$
x_1=s,\qquad x_2=i,\qquad x_3=t
$$

Dört denklemde tekrar eden yapı:

- bilinmeyenler her denklemde $x_1,x_2,x_3$,
- katsayılar → ürün miktarları,
- sağ taraf → etkinlik toplamları.

> Aynı düzen dört kez tekrarlanıyor; bir kez yazmak istiyoruz.

::: {.notes}
Değişken adları şimdiye kadar doğrudan ürünleri hatırlatıyordu. Yalnız bu ikram problemini değil, aynı yapıya sahip herhangi bir lineer denklem sistemini temsil edebilmek için genel bir gösterime geçelim: $x_1=s$, $x_2=i$, $x_3=t$ eşlemesiyle bilinmeyenler artık belirli ürün adlarına bağlı olmaz.

Bu eşlemeden sonra dört denklem aynı deseni tekrarlar: her denklemde aynı üç bilinmeyen, katsayı olarak etkinliklerin ürün miktarları ve sağ tarafta etkinlik toplamları bulunur. Aynı yapının dört kez yazılması yerine katsayıları bir matriste, bilinmeyenleri bir sütun vektöründe, toplamları başka bir sütun vektöründe toplamak doğaldır. Matris gösterimi, işte bu tekrarlanan düzeni tek bir nesnede sıkıştırma ihtiyacından doğar; yeni bir problem değil, aynı problemin derli toplu yazımıdır.
:::

---

## Matris Denklemi: $Ax=b$

Her şey biliniyorsa:

$$
\begin{bmatrix}
20&15&10\\
30&25&12\\
15&10&8\\
40&30&20
\end{bmatrix}\begin{bmatrix}120\\40\\75\end{bmatrix}
=\begin{bmatrix}3750\\5500\\2800\\7500\end{bmatrix}.
$$

Fiyatlar bilinmiyorsa aynı konumlara değişkenleri yazarız:

$$
\underbrace{\begin{bmatrix}
20&15&10\\
30&25&12\\
15&10&8\\
40&30&20
\end{bmatrix}}_{A}
\underbrace{\begin{bmatrix}x_1\\x_2\\x_3\end{bmatrix}}_{x}
=
\underbrace{\begin{bmatrix}3750\\5500\\2800\\7500\end{bmatrix}}_{b}
$$

$$
\boxed{Ax=b}
$$

::: {.notes}
Önceki konuda birim fiyatlar $120$, $40$ ve $75$ olarak biliniyordu; matris–vektör çarpımı etkinlik toplamlarını üretiyordu. Şimdi toplamlar biliniyor, fakat fiyatlar bilinmiyor. Aynı üç konuma $x_1$, $x_2$, $x_3$ değişkenlerini koyuyoruz.

Katsayı matrisi $A$ etkinliklerin ürün miktarlarını, bilinmeyenler vektörü $x$ aranan birim fiyatları, sağ taraf vektörü $b$ ise etkinlik toplamlarını taşır. Dört denklem tek bir $Ax=b$ matris eşitliğinde toplanır.

Roller karıştırılmamalıdır: $x$, $A$ matrisini sağdan çarpan vektördür ama "sağ taraf vektörü" değildir. Matris çarpımında $A$'nın sağında bulunmak ile eşitliğin sağ tarafında bulunmak farklı şeylerdir. Sağ taraf vektörü, eşitliğin sağındaki bilinen toplamlar vektörü $b$'dir.
:::

---

## Çarpımın Tersi Yönü

Matris–vektör çarpımı:

$$
A\text{ ve }x\text{ bilinir}
\ \Longrightarrow\
b=Ax\text{ hesaplanır}
$$

Denklem sistemi:

$$
A\text{ ve }b\text{ bilinir}
\ \Longrightarrow\
x\text{ aranır}
$$

::: {.notes}
Aynı $Ax=b$ ilişkisi iki yönde okunabilir. Matris–vektör çarpımında katsayı matrisi ile girdi vektörü bilinir, çıktı hesaplanır. Denklem sisteminde ise katsayılar ve sonuçlar bilinir, bu sonuçları üreten girdi aranır.

Bu nedenle lineer denklem sistemi, matris–vektör çarpımının ayrı bir yapısı değildir; aynı matematiksel ilişkinin bilinmeyen katsayılar üzerinden okunmuş biçimidir. Ters problem her zaman tek bir cevap üretmez: hiç çözüm bulunmayabilir, tek çözüm bulunabilir ya da birden fazla girdi aynı çıktıyı verebilir. Bu olasılıkları ayırt etmek, konunun ilerleyen kısmının hedefidir.
:::

---

## Lineer Denklem Sistemi

Birden fazla bilinmeyenin birinci dereceden denklemlerle ilişkilendirildiği topluluk:

$$
\begin{aligned}
2x_1+3x_2&=7,\\
-x_1+4x_2&=5
\end{aligned}
\qquad\Longleftrightarrow\qquad
\begin{bmatrix}2&3\\-1&4\end{bmatrix}
\begin{bmatrix}x_1\\x_2\end{bmatrix}
=
\begin{bmatrix}7\\5\end{bmatrix}
$$

| Lineer | Lineer değil |
|---|---|
| $3x-2y=5$ | $xy=5$ |
| $z=4$ | $x^2+y=1$ |
| $0x+2y=7$ | $\sin x+y=0$ |

::: {.notes}
Birden fazla bilinmeyenin birinci dereceden denklemlerle ilişkilendirildiği denklem topluluğuna lineer denklem sistemi denir. “Birinci dereceden” ifadesi, bilinmeyenlerin yalnız birinci kuvvetleriyle ve skaler katsayılarla yer aldığı anlamına gelir. $3x-2y=5$, $z=4$ ve bir değişkenin katsayısının sıfır olduğu denklemler lineerdir. $xy$, $x^2$ veya $\sin x$ içeren denklemler bu tanıma girmez.

Örnekteki sistemde bilinmeyenler $x_1$ ve $x_2$; $2$, $3$, $-1$, $4$ katsayılar; $7$ ve $5$ ise sağ taraftaki sabitlerdir. Aynı sistem matris biçiminde $Ax=b$ olarak yazılır. Bundan sonra "sistem" derken bu üç bileşenli yapıyı kastedeceğiz.
:::

---

## Üç Temel Parça

$$
A\in\mathbb{R}^{m\times n},\qquad
x\in\mathbb{R}^{n},\qquad
b\in\mathbb{R}^{m}
$$

| Nesne | Rol                          | Boyut                        |
| ----- | ---------------------------- | ---------------------------- |
| $A$   | katsayı matrisi              | $m$ denklem × $n$ bilinmeyen |
| $x$   | bilinmeyenler vektörü        | $n$ bileşen                  |
| $b$   | sağ taraf (sabitler) vektörü | $m$ bileşen                  |

::: {.notes}
Bir $Ax=b$ sisteminde üç temel matematiksel nesne bulunur. Katsayı matrisi $A$'nın her satırı bir denkleme, her sütunu belirli bir bilinmeyenin bütün denklemlerdeki katsayılarına karşılık gelir. Bilinmeyenler vektöründeki sıra, $A$ sütunlarının sırasıyla aynı olmalıdır; birinci sütun $x_1$'in katsayılarını taşıyorsa vektörün ilk bileşeni $x_1$ olmalıdır.

Boyutlar bu rollerden çıkar: $m$ satır $m$ denklem demektir, dolayısıyla $b$ vektörü $m$ bileşenlidir; $n$ sütun $n$ bilinmeyen demektir, dolayısıyla $x$ vektörü $n$ bileşenlidir. Denklem sayısı ile bilinmeyen sayısı birbirinden bağımsızdır ve $m=n$ olmak zorunda değildir.
:::

---

## Satırlar Üzerinden Okuma

$$
(Ax)_i=\sum_{j=1}^{n}a_{ij}x_j=b_i
$$

Birinci satır:

$$
\begin{bmatrix}20&15&10\end{bmatrix}
\begin{bmatrix}x_1\\x_2\\x_3\end{bmatrix}
=20x_1+15x_2+10x_3=3750
$$

$$
\boxed{\text{Her satır}\longleftrightarrow\text{bir denklem}}
$$

::: {.notes}
Matris–vektör çarpımının tanımından $Ax$ vektörünün $i$. bileşeni $a_{i1}x_1+a_{i2}x_2+\cdots+a_{in}x_n$ toplamıdır. $Ax=b$ eşitliğinin $i$. bileşeni bu toplamın $b_i$'ye eşit olmasıdır; bu da tam olarak sistemin $i$. denklemidir.

Böylece $A$ matrisinin her satırı denklem sistemindeki bir denklemi üretir. Matris gösterimi ile denklem sistemi aynı matematiksel bilgiyi farklı biçimlerde ifade eder; $Ax=b$ tek satırlık bir gösterim gibi görünse de $b$ vektörünün her bileşeni ayrı bir skaler eşitlik oluşturur. $m$ bileşenli bir $b$ vektörü $m$ denklemi aynı anda temsil eder.
:::

---

## Aynı Sistem, Üç Gösterim

$$
\underbrace{
\begin{aligned}
2x_1+3x_2&=7\\
-x_1+4x_2&=5
\end{aligned}}_{\text{denklem sistemi}}
\quad
\underbrace{
\begin{bmatrix}2&3\\-1&4\end{bmatrix}
\begin{bmatrix}x_1\\x_2\end{bmatrix}
=
\begin{bmatrix}7\\5\end{bmatrix}}_{Ax=b}
$$

$$
\underbrace{
x_1\begin{bmatrix}2\\-1\end{bmatrix}
+x_2\begin{bmatrix}3\\4\end{bmatrix}
=\begin{bmatrix}7\\5\end{bmatrix}}_{\text{sütunların lineer birleşimi}}
$$

::: {.notes}
Bir lineer denklem sistemi üç temel biçimde gösterilebilir: açık denklem sistemi, $Ax=b$ matris denklemi ve sütunların lineer birleşimi. Bu üç gösterim farklı problemler değil, aynı problemin farklı açılardan yazımıdır.

Denklem sistemi ilişkileri en açık gösterir; $Ax=b$ katsayı, bilinmeyen ve sonucu ayrı nesneler hâlinde düzenler; sütun birleşimi ise çözümün geometrik ve yapısal anlamını öne çıkarır. Üç gösterimin ortak matematiksel nesnesi, bütün denklemleri aynı anda sağlayan vektörlerden oluşan çözüm kümesidir. Gösterim değişebilir; korunması gereken temel yapı çözüm kümesidir.
:::

---

## Genişletilmiş Matris

$$
\begin{aligned}
2x_1+3x_2&=7,\\
-x_1+4x_2&=5
\end{aligned}
\qquad\longrightarrow\qquad
\left[\begin{array}{cc|c}
2&3&7\\
-1&4&5
\end{array}\right]
$$

$$
\boxed{[A\mid b]}
$$

İki ek örnek:

$$
\left[\begin{array}{ccc|c}
1&0&-2&4\\
0&3&5&-1
\end{array}\right],
\qquad
\left[\begin{array}{cc|c}
2&-1&0\\
4&-2&3\\
0&1&5
\end{array}\right].
$$

::: {.notes}
Katsayı matrisi ile sağ taraf vektörü yan yana yazılarak genişletilmiş matris $[A\mid b]$ oluşturulur. Dikey çizgi katsayı matrisini sağ taraf vektöründen görsel olarak ayırır; yeni bir denklem sistemi üretmez, mevcut sistemin sayısal bilgilerini daha kompakt biçimde temsil eder.

Bu gösterim eliminasyon sırasında tekrar tekrar yazılan değişken adlarını kaldırır ve satır işlemlerini kısa biçimde uygulamayı sağlar. Ancak $[A\mid b]$ genişletilmiş matristir; katsayı matrisi yalnız çizginin solundaki $A$ kısmıdır. İkisini karıştırmamak gerekir.
:::

---

## Gösterimler Arası Geçiş

$$
\left[\begin{array}{ccc|c}
1&2&-1&4\\
3&0&2&7
\end{array}\right]
\quad\longrightarrow\quad
\begin{aligned}
x_1+2x_2-x_3&=4,\\
3x_1+0x_2+2x_3&=7
\end{aligned}
$$

> İkinci denklemde $x_2$ yok — katsayısı sıfır olarak yazılmalı.

::: {.notes}
İki satırlı bu genişletilmiş matris iki denklem içerir; ilk üç sütun üç bilinmeyenin katsayılarıdır. İkinci denklemde $x_2$ görünmese de matris gösteriminde onun katsayısı sıfır olarak yazılmalıdır: $3x_1+0x_2+2x_3=7$.

Bu sıfırın yazılması zorunludur; çünkü sütunların bilinmeyenlerle eşleşmesi korunmalıdır. İkinci sütun her zaman $x_2$'nin katsayılarını taşır. Bir denklemde eksik görünen değişkenin katsayısı atlanırsa sütun–bilinmeyen hizası bozulur ve matris farklı bir sistemi temsil etmeye başlar.
:::

---

## Homojen Sistemlere İlk Bakış

$$
\boxed{Ax=0}
$$

$$
\begin{aligned}
2x_1+3x_2&=0,\\
-x_1+4x_2&=0
\end{aligned}
$$

Her homojen sistemin bir **trivial çözümü** vardır:

$$
x=0,\qquad\text{çünkü } A0=0
$$

::: {.notes}
Sağ taraf vektörü sıfır olan sisteme homojen lineer denklem sistemi denir; genel biçimi $Ax=0$'dır. Her homojen sistem için $x=0$ bir çözümdür, çünkü herhangi bir matris sıfır vektörünü sıfır vektörüne götürür. Bu her zaman var olan çözüme trivial (aşikâr) çözüm denir.

İlginç soru, homojen bir sistemin trivial çözüm dışında, sıfırdan farklı çözümlerinin bulunup bulunmadığıdır. Bu, matrisin yapısıyla — daha sonra rank ve lineer bağımsızlık olarak adlandıracağımız kavramlarla — yakından ilişkilidir ve ayrı bir ders notunda ele alınacaktır. Şimdilik homojen sistemin en az bir çözümü (trivial çözüm) olduğu için asla çözümsüz kalamayacağını not etmek yeterlidir.
:::

---

## Asıl Nesne: Çözüm Kümesi

$$
\mathcal{S}=\{x\in\mathbb{R}^n:Ax=b\}
$$

- tek bir vektör,
- boş küme,
- sonsuz vektör

olabilir.

> Sistemi dönüştürürken korunması gereken temel nesne $\mathcal{S}$'tir.

Üç bilinmeyenli örnek:

$$
\begin{aligned}
x+y+z&=6,\\
x-y+z&=2,\\
2x+y-z&=1
\end{aligned}
\qquad\Longrightarrow\qquad
\mathcal S=\left\{\begin{bmatrix}1\\2\\3\end{bmatrix}\right\}.
$$

::: {.notes}
Bir denklem sistemini çözmek, eşitliği sağlayan bütün vektörleri belirlemektir. Bu vektörlerin oluşturduğu kümeye çözüm kümesi denir ve tek bir vektör, boş küme ya da sonsuz sayıda vektör içerebilir. Üç bilinmeyenli örnekte üç denklemin ortak çözümü $(1,2,3)^T$ vektörüdür; çözüm kümesi bu tek elemanı içerir.

Bir sistemin görünüşünü değiştirirken korunması gereken temel nesne bu kümedir. Bir dönüşüm bazı çözümleri kaybediyor veya yeni çözümler ekliyorsa, elde edilen sistem başlangıç sistemiyle eşdeğer değildir. Bir denklem sistemini yalnız yazılı katsayılarıyla özdeşleştirmemek gerekir; farklı katsayılara sahip farklı sistemler aynı çözüm kümesini temsil edebilir.
:::

---

## Eşdeğer Sistemler

$$
\begin{aligned}
x+y&=3,\\
2x-y&=0
\end{aligned}
\qquad\Longleftrightarrow\qquad
\begin{aligned}
x+y&=3,\\
3x&=3
\end{aligned}
$$

Aynı çözüm kümesi: $(x,y)=(1,2)$.

$$
\boxed{\text{eşdeğer sistemler}\Longleftrightarrow\text{aynı çözüm kümesi}}
$$

::: {.notes}
Aynı çözüm kümesine sahip lineer denklem sistemlerine eşdeğer sistemler denir. Örnekteki ikinci sistem, birinci sistemin ikinci denklemine birinci denklemin eklenmesiyle elde edilmiştir; iki sistemin denklemleri farklı görünse de çözüm kümeleri aynıdır.

İkinci sistem daha kolay okunur: $3x=3$ doğrudan $x=1$ verir, ardından $x+y=3$ denkleminden $y=2$ bulunur. Amaç denklemleri rastgele değiştirmek değil, aynı çözüm kümesini daha görünür bir yapıya taşımaktır. Bir sonraki soru şudur: hangi dönüşümler çözüm kümesini korumayı garanti eder?
:::

---

## Denklemlerin Lineer Kombinasyonları

$D_1=0$ ve $D_2=0$ sistemin her çözümünce sağlanıyorsa:

$$
\boxed{\alpha D_1+\beta D_2=\alpha\cdot0+\beta\cdot0=0}
$$

Örnek:

$$
\begin{aligned}
x+y&=3\\
2x-y&=0
\end{aligned}
\ \xrightarrow{D_1+D_2}\
3x=3
$$

::: {.notes}
Bir denklem sisteminin ortak çözümü, bütün denklemleri aynı anda sağlar. Denklemleri $D_1=0$, $D_2=0$ biçiminde yazarsak, sistemin herhangi bir çözümü için her iki ifade de sıfırdır; dolayısıyla bunların herhangi bir $\alpha D_1+\beta D_2$ lineer kombinasyonu da sıfır olur.

Başka bir deyişle, sistemdeki denklemlerin lineer kombinasyonları, sistemin bütün çözümlerinin sağladığı yeni ilişkiler üretir. Örnekte iki denklemi toplamak $3x=3$ denklemini verir ve başlangıç sistemi her çözümü bunu sağlar. Bu gözlem, elementer satır işlemlerinin neden çözümü koruduğunun temel nedenlerinden biridir; çünkü satıra başka bir satırın katını eklemek, tam olarak böyle bir lineer kombinasyon oluşturur.
:::

---

## Her Kombinasyon Sistemi Korur mu?

$$
\begin{aligned}
x+y&=3,\\
x-y&=1
\end{aligned}
\ \xrightarrow{D_1+D_2}\
2x=4
$$

İki denklemi **atıp** yalnız $2x=4$ bırakırsak:

$$
x=2,\quad y\ \text{serbest}
\ \Rightarrow\
\text{çözüm kümesi büyüdü!}
$$

::: {.notes}
Burada kritik bir ayrım vardır. Orijinal denklemlerin her lineer kombinasyonu, orijinal sistemin çözümleri tarafından sağlanır; bu doğrudur. Ancak bir veya daha fazla denklemi gelişigüzel biçimde yalnızca bu kombinasyonla değiştirmek çözüm kümesini korumak zorunda değildir.

Örnekte iki denklemi toplayıp $2x=4$ elde ederiz; başlangıç çözümü olan $(2,1)$ bunu sağlar. Fakat iki orijinal denklemi kaldırıp yalnız $2x=4$ bırakırsak, $x=2$ olduğu sürece $y$ herhangi bir değer alabilir ve çözüm kümesi büyür. Yani "yeni bir geçerli denklem üretmek", "çözüm kümesini koruyarak bir denklemi değiştirmek" ile aynı şey değildir. Elementer satır işlemlerinin önemi tam burada ortaya çıkar: onlar geri alınabilir oldukları için çözüm kümesini korurlar.
:::

---

## Üç Elementer Satır İşlemi

1. Denklemleri yer değiştir:
   $D_i\leftrightarrow D_j$
   $\Longleftrightarrow R_i\leftrightarrow R_j$.
2. Denklemin iki tarafını $\lambda\neq0$ ile çarp:
   $\lambda D_i$
   $\Longleftrightarrow R_i\leftarrow\lambda R_i$.
3. Bir denkleme diğerinin $\lambda$ katını ekle:
   $D_i+\lambda D_j$
   $\Longleftrightarrow R_i\leftarrow R_i+\lambda R_j$.

::: {.notes}
Her işlemi önce denklem sistemi üzerinde okuyor, ardından genişletilmiş matristeki satır karşılığını yazıyoruz. Denklem sırasını değiştirmek satırları değiştirir. Bir denklemin iki tarafını aynı sıfırdan farklı sayıyla çarpmak bütün satırı ölçekler. Bir denkleme diğerinin katını eklemek de karşılık gelen satırların aynı lineer birleşimini alır.

Üçüncü işlem, $\lambda=-1$ özel durumunda "ikinci denklemden birinciyi çıkar" işlemine indirgenir. Bu üç işlem, bütün standart denklem çözme yöntemlerinin yapı taşlarıdır.
:::

---

## Neden Skaler Sıfır Olamaz?

$$
2x+y=5
\ \xrightarrow{\times 0}\
0=0
$$

$0=0$ bütün $x,y$ için doğru → **kısıt yok oldu.**

$$
\boxed{R_i\leftarrow\lambda R_i \text{ için } \lambda\neq0}
$$

::: {.notes}
İkinci elementer satır işleminde skalerin sıfırdan farklı olması zorunludur. Bir denklemi sıfırla çarparsak $0=0$ elde ederiz; bu ifade bütün $x$ ve $y$ değerleri için doğru olduğundan başlangıçtaki denklemin getirdiği kısıt tamamen ortadan kalkar. Denklemin taşıdığı bilgi silinir ve çözüm kümesi genişleyebilir.

Bu, işlemin geri alınamaz hâle gelmesiyle aynı şeydir: sıfırla çarpmanın tersi yoktur, çünkü $0=0$'dan orijinal denklemi geri getiremeyiz. Diğer iki işlemin ve $\lambda\neq0$ durumundaki çarpmanın tersi vardır; bu yüzden yalnız onlar çözüm kümesini korur.
:::

---

## Neden Çözüm Kümesi Korunur?

| İşlem | Tersi |
|---|---|
| $R_i\leftrightarrow R_j$ | aynı yer değiştirme |
| $R_i\leftarrow\lambda R_i$ | $R_i\leftarrow\frac1\lambda R_i$ |
| $R_i\leftarrow R_i+\lambda R_j$ | $R_i\leftarrow R_i-\lambda R_j$ |

$$
\text{eski sistem}\ \longleftrightarrow\ \text{yeni sistem}
$$

::: {.notes}
Üç elementer satır işleminin ortak özelliği, her birinin geri alınabilmesidir. Satır değiştirme tekrar uygulanınca başlangıç sırası döner; skalerle çarpmanın tersi tersi skalerle çarpmadır; bir satıra katı eklemenin tersi aynı katı çıkarmaktır.

Bir dönüşümün tersinin bulunması iki sistem arasında çift yönlü geçiş sağlar. Eski sistemi sağlayan her çözüm yeni sistemi de sağlar; ters işlem sayesinde yeni sistemi sağlayan her çözüm de eski sistemi sağlar. Böylece iki çözüm kümesi eşit olur. Bu gerekçe, satır işlemlerinin yalnız mekanik kurallar olmadığını, eliminasyonun güvenilirliğinin her adımın tersinir olmasına dayandığını gösterir.
:::

---

## Sağ Taraf da Satırın Parçasıdır

$$
\left[\begin{array}{cc|c}2&1&5\end{array}\right]
\ \xrightarrow{R_1\leftarrow 2R_1}\
\left[\begin{array}{cc|c}4&2&10\end{array}\right]
\quad\checkmark
$$

$$
\left[\begin{array}{cc|c}2&1&5\end{array}\right]
\ \longrightarrow\
\left[\begin{array}{cc|c}4&2&5\end{array}\right]
\quad\times
$$

::: {.notes}
Bir satır işlemi genişletilmiş matrisin sağ tarafı dahil bütün satıra uygulanmalıdır. $2x+y=5$ denklemini $2$ ile çarparsak $4x+2y=10$ elde ederiz; sağ taraf da aynı skalerle çarpılır. Yalnız katsayıların çarpılıp sağ tarafın $5$ olarak bırakılması, denklemi $4x+2y=5$ gibi bambaşka bir denkleme dönüştürür ve çözüm kümesini değiştirir.

Dikey çizgi bir işlem sınırı değildir; yalnız katsayı matrisiyle sonuç vektörünü görsel olarak ayırır. Genişletilmiş matrisin bir satırı, çizginin iki tarafıyla birlikte tek bir bütündür ve bir denklemin sol ve sağ tarafını birlikte temsil eder.
:::

---

## Elementer Matris Bağlantısı

Her elementer satır işlemi, uygun bir $E_i$ elementer matrisiyle **soldan çarpmadır**:

$$
A\xrightarrow{R_2\leftarrow R_2-3R_1}E_1A.
$$

Bir işlem dizisi:

$$
A\longmapsto E_k\cdots E_2E_1A.
$$

Her $E_i$ tersinirdir; tersi, satır işlemini geri alan elementer matristir.

::: {.notes}
Birim matrise tek bir satır işlemi uygulandığında elementer matris elde edilir. Aynı işlemi herhangi bir $A$ matrisine uygulamak, $A$'yı bu elementer matrisle soldan çarpmaya eşittir. Satırları değiştirdiğimiz için çarpan solda bulunur.

Birden fazla satır işlemi sırasıyla $E_1$, $E_2$, …, $E_k$ ile gösterildiğinde sonuç $E_k\cdots E_2E_1A$ olur; en önce uygulanan işlem $A$'ya en yakın çarpandır. Her elementer işlemin geri alınabilir olması, her $E_i$ matrisinin tersinir olmasıyla aynı bilgidir. Ters matris konusunda bu zincirin $A$'yı $I$'ye götürmesini kullanacağız.
:::

---

## Sık Yapılan Hatalar

1. Bilinmeyenler vektörünün sırasını sütun sırasından farklı yazmak.
2. Eksik değişkenin sıfır katsayısını yazmamak ($2x_1+3x_3 \to [2\ 0\ 3]$).
3. Satır/sütun rollerini karıştırmak ($m$ satır = denklem, $n$ sütun = bilinmeyen).
4. $Ax=b$'yi tek denklem sanmak ($m$ bileşen = $m$ denklem).
5. $[A\mid b]$'yi katsayı matrisi sanmak.

::: {.notes}
Birinci hata sütun–bilinmeyen hizasını bozar: $A$ sütunlarının sırası ile $x$ bileşenlerinin sırası aynı olmalıdır. İkinci hata, bir denklemde görünmeyen değişkenin katsayısını atlamaktır; oysa üç bilinmeyenli bir sistemde $2x_1+3x_3=5$ denkleminin katsayı satırı $[2\ 0\ 3]$ olmalıdır.

Üçüncü hata satır ve sütunun rollerini karıştırır; $\mathbb{R}^{m\times n}$ katsayı matrisinde $m$ satır $m$ denkleme, $n$ sütun $n$ bilinmeyene karşılık gelir. Dördüncü hata $Ax=b$'yi tek bir eşitlik sanmaktır; $b$ vektörünün her bileşeni ayrı bir denklemdir. Beşinci hata genişletilmiş matris ile katsayı matrisini karıştırır; katsayı matrisi yalnız çizginin solundaki kısımdır.
:::

---

## Sonraki Adım: Sistematik Eliminasyon

Elementer işlemler güvenli — ama her sıra verimli değil.

$$
\text{genişletilmiş matris}
\ \longrightarrow\
\text{basamak yapısı}
\ \longrightarrow\
\text{çözüm}
$$

> Pivotları düzenli kurup bilinmeyenleri nasıl sistematik olarak eleriz?

::: {.notes}
Elementer satır işlemleri hangi değişikliklerin çözümü koruduğunu söyler; hangi işlemin ne zaman seçileceğini söylemez. Rastgele bir işlem dizisi sistemi büyütebilir, gereksiz kesirler üretebilir ya da önceden kurulmuş sıfırları yeniden bozabilir. İhtiyaç duyulan şey, bilinmeyenleri adım adım eleyen sistematik bir stratejidir.

Bir sonraki ders bu stratejiyi kurar: soldan sağa pivotlar seçilerek matris satır basamak biçimine dönüştürülür ve çözüm geriye doğru okunur. Bu yöntem Gauss eliminasyonudur; kullandığı bütün araçlar bu derste tanımlanan üç elementer satır işlemidir ve çözüm kümesi süreç boyunca değişmeden kalır.
:::
