---
title: "Matris Çarpımları"
subtitle: "MATE 213 — Lineer Cebir"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
execute:
  echo: false
---

## Etkinlik Örneğine Dönelim

Tanıdık bir ortaokul–lise problemi:

| Etkinlik | Sandviç | İçecek | Tatlı |
|:---:|---:|---:|---:|
| 1 | 20 | 15 | 10 |
| 2 | 30 | 25 | 12 |
| 3 | 15 | 10 | 8 |
| 4 | 40 | 30 | 20 |

Birim fiyatlar:

- Sandviç: $120$ TL
- İçecek: $40$ TL
- Tatlı: $75$ TL

::: {.notes}
Matris toplamasını ve skalerle çarpmayı kurarken kullandığımız etkinlik–ikram örneğine dönelim. Daha önce iki ekibin hazırladığı miktarları birleştirmiş, ardından bütün planı aynı katsayıyla ölçeklemiştik. Bu kez miktarlar ve birim fiyatlar biliniyor; her etkinliğin toplam bedelini bulacağız.

Birinci etkinlikte $20$ sandviç, $15$ içecek ve $10$ tatlı kullanılmış. Toplam bedeli bulmak için her miktarı kendi birim fiyatıyla çarpıp üç sonucu toplamak gerekiyor. Aynı hesap diğer üç etkinlik için de yapılacak.

Ürün sırası hesabın parçasıdır. Sandviç miktarı sandviç fiyatıyla, içecek miktarı içecek fiyatıyla eşleşmelidir. Sayılar doğru olsa bile miktar ile fiyatın türü yanlış eşleşirse çıkan toplam etkinliğin gerçek bedelini vermez.
:::

---

## Bildiğimiz Hesap Dört Kez

$$
\begin{aligned}
1.\ \text{etkinlik:}\quad&20(120)+15(40)+10(75)=3750\\
2.\ \text{etkinlik:}\quad&30(120)+25(40)+12(75)=5500\\
3.\ \text{etkinlik:}\quad&15(120)+10(40)+8(75)=2800\\
4.\ \text{etkinlik:}\quad&40(120)+30(40)+20(75)=7500
\end{aligned}
$$

::: {.notes}
Dört hesabın her biri aynı kurala dayanıyor: miktarı birim fiyatla çarp, üç ürünün bedelini topla. Birinci etkinlik $3750$ TL, ikinci etkinlik $5500$ TL, üçüncü etkinlik $2800$ TL ve dördüncü etkinlik $7500$ TL tutuyor. Buraya kadar yeni bir işleme ihtiyacımız yok; dört ayrı aritmetik hesabı tamamladık.

Tekrar eden kısım katsayılardır. Her satırda sırasıyla $120$, $40$ ve $75$ ile çarpıyoruz; yalnız ürün miktarları değişiyor. Dört etkinlik yerine yüzlerce etkinlik olsaydı aynı üç çarpma ve bir toplama kalıbını yüzlerce kez yazmamız gerekirdi.

Bu tekrarı tek bir yazımda toplamak için önce miktarları ve fiyatları iki ayrı tablo hâlinde düzenleyeceğiz. Sonra dört hesabın bu iki tablo arasında nasıl okunduğunu göstereceğiz. Yeni gösterim sonucu değiştirmeyecek; aynı lise hesabını tek bir yapıda toplayacak.
:::

---

## İki Tabloyu Yan Yana Koymak

:::: {.columns}

::: {.column width="58%"}

| Etkinlik | Sandviç | İçecek | Tatlı |
|:---:|---:|---:|---:|
| 1 | 20 | 15 | 10 |
| 2 | 30 | 25 | 12 |
| 3 | 15 | 10 | 8 |
| 4 | 40 | 30 | 20 |
:::

::: {.column width="42%"}

| Ürün | Birim fiyat |
|:---|---:|
| Sandviç | 120 |
| İçecek | 40 |
| Tatlı | 75 |
:::

::::

> Soldaki sütun sırası, sağdaki satır sırasıdır.

::: {.notes}
Fiyatları da bir tabloya yazalım ve miktar tablosunun yanına koyalım. Fiyat listesini alt alta yazmamızın nedeni hesabın kendisidir: soldaki tablonun sandviç sütunu ile sağdaki tablonun sandviç satırı aynı ürünü gösteriyor. İçecek ve tatlı için de aynı eşleşme kuruluyor. İki tablonun ortak ekseni ürünlerdir; soldaki tabloda bu eksen sütunlar boyunca, sağdakinde satırlar boyunca ilerliyor.

Soldaki tablonun satırları ise etkinliklerdir ve sağdaki tabloda karşılıkları yoktur. Fiyatlar etkinliğe göre değişmiyor; dört etkinlik de aynı üç birim fiyatı kullanıyor. Bu yüzden fiyat listesi tek sütundan ibaret kalıyor, miktar tablosu ise dört satır taşıyor.

İki tablonun eşleşmesi ürün sayısına dayanıyor. Soldaki tabloda üç ürün sütunu, sağdakinde üç fiyat satırı var. Sağdaki listeye dördüncü bir ürün eklenip soldaki tabloya o ürünün miktar sütunu eklenmezse eşleşme bozulur ve hesap yapılamaz.
:::

---

## Hesabı Tablolar Üzerinde Okumak

Sol sütun $\to$ sağ satır:

$$
\text{sandviç}\to120,
\quad
\text{içecek}\to40,
\quad
\text{tatlı}\to75
$$

$$
20(120)+15(40)+10(75)=3750
$$

- Her sütunun bir katsayısı var
- Katsayılar dört etkinlikte de aynı
- Değişen, satırdaki değerler

::: {.notes}
Sağdaki tablo, soldaki tablonun her sütununa bir katsayı atıyor. Sandviç sütununun katsayısı $120$, içecek sütununun katsayısı $40$, tatlı sütununun katsayısı $75$. Bu yüzden fiyat listesini alt alta yazdık: soldaki tablonun sütun sırası ile sağdaki tablonun satır sırası birebir eşleşiyor, üç sütuna üç katsayı düşüyor.

Bir etkinliğin bedelini bulurken o etkinliğin satırındaki her değeri, bulunduğu sütunun katsayısıyla çarpıyoruz. Birinci satırda $20$ değeri sandviç sütununda olduğu için $120$ ile, $15$ değeri içecek sütununda olduğu için $40$ ile, $10$ değeri tatlı sütununda olduğu için $75$ ile çarpılıyor; üç çarpım toplanınca $3750$ çıkıyor. Sayıların hangi katsayıyla çarpılacağını satırdaki konumları belirliyor.

Katsayılar satırdan satıra değişmiyor. İkinci etkinliğin bedelini hesaplarken de aynı üç katsayıyı kullanıyoruz, yalnız satırdaki değerler değişiyor: $30(120)+25(40)+12(75)=5500$. Dört satırı sırayla işlediğimizde dört bedel elde ediyoruz ve bunlar alt alta yazılınca dört satırlık yeni bir sütun oluşuyor.

Hesap bittiğinde ürün ekseni ortadan kalkıyor. Üç çarpım toplandığı için sonuçta sandviç, içecek ve tatlı ayrımı görünmüyor; geriye yalnız etkinlik ekseni kalıyor. Şimdi aynı işlemi matris gösterimiyle yazacağız.
:::

---

## Hesabı Matrisle Yazmak

$$
A=
\begin{bmatrix}
20&15&10\\
30&25&12\\
15&10&8\\
40&30&20
\end{bmatrix},
\qquad
p=\begin{bmatrix}120\\40\\75\end{bmatrix}
$$

$$
(4\times3)(3\times1)\longrightarrow4\times1
$$

::: {.notes}
İki tablonun başlıklarını düşürüp sayı düzenlerini köşeli parantez içine aldığımızda soldaki tablo $A$ matrisine, sağdaki fiyat listesi $p$ sütun vektörüne dönüşüyor. $p$ vektörünün bileşenleri, az önce sütunlara atadığımız katsayılardır ve sırası $A$ matrisinin sütun sırasını izler.

Boyut yazımı bu eşleşmeyi görünür kılıyor. $A$ matrisi $4\times3$, $p$ vektörü $3\times1$ biçimindedir; ortadaki iki $3$, iki tablonun paylaştığı ürün eksenidir. Bu eksen hesap sırasında toplanarak tükeniyor ve geriye $4\times1$ kalıyor, yani dört etkinliğin bedeli.

Ortak eksenin yalnız uzunluğu değil, sırası da hesabın parçasıdır. $A$ matrisinin sütunları ile $p$ vektörünün bileşenleri sandviç, içecek ve tatlıyı aynı sırada temsil etmelidir. Bu koşulun bozulduğu durumu ilerideki bir örnekte ayrıca ele alacağız.
:::

---

## Çarpımı Açık Yazmak

$$
Ap=
\begin{bmatrix}
20(120)+15(40)+10(75)\\
30(120)+25(40)+12(75)\\
15(120)+10(40)+8(75)\\
40(120)+30(40)+20(75)
\end{bmatrix}
=
\begin{bmatrix}
3750\\5500\\2800\\7500
\end{bmatrix}
$$

::: {.notes}
$Ap$ yazımı sonucu doğrudan vermez; açtığımızda içinden sayfanın başındaki dört hesap çıkar. Her satırda $A$ matrisinin o satırındaki üç değer, $p$ vektöründeki üç katsayıyla sırasıyla çarpılıp toplanıyor. Birinci satır $20(120)+15(40)+10(75)$ ifadesini, dolayısıyla $3750$ değerini üretiyor.

Ara adımdaki sütun ile sonuç sütunu aynı nesnenin iki yazımıdır. Soldaki sütun hesabın nasıl yapıldığını, sağdaki yalnız çıkan değerleri gösteriyor. Dört satırın her biri kendi toplamını bağımsız olarak üretiyor; bir satırın hesabı diğerini etkilemiyor.

Sonuç sütununun birinci elemanı birinci etkinliğin, ikinci elemanı ikinci etkinliğin bedelidir. Yani $Ap$ çarpımı yeni bir aritmetik getirmiyor, dört ayrı hesabın sırasını ve eşleşmesini tek bir yazımda saklıyor. Şimdi bu yazımı genel bir matris ve genel bir vektör için kuralaştıracağız.
:::

---

## Satır Okuması: Her Satır Bir Çıktı

$$
A=[a_{ij}]\in\mathbb{R}^{m\times n},
\qquad
x\in\mathbb{R}^n
$$

$$
\boxed{
(Ax)_i
=a_{i1}x_1+\cdots+a_{in}x_n
=\sum_{j=1}^{n}a_{ij}x_j
}
$$

> Sonuç vektörünün $i$. bileşeni, matrisin $i$. satırından gelir.

::: {.notes}
Satır okuması, somut örnekteki hesabı genel bir kurala dönüştürür. $A$ matrisinin $i$. satırı ile $x$ vektörünün karşılık gelen bileşenleri çarpılır ve bu çarpımlar toplanır. Etkinlik örneğinde bir satır bir etkinliktir; sonuç vektörünün aynı konumundaki değer o etkinliğin toplam bedelidir.

Her satır tek bir skaler üretir; $m$ satırın çıktıları alt alta yazılınca $m$ bileşenli $Ax$ vektörü oluşur. Toplama işleminden farkı burada görünür: $Ax$ eleman eleman çarpma değildir, her sonuç bileşeni birden fazla çarpımın toplamıdır.

Bu okuma daha sonra $Ax=b$ denklem sisteminde her satırın bir denklem üretmesini de açıklayacaktır. Aynı formül, matris–matris çarpımında bir satır ile bir sütunun nasıl tek sonuç elemanı ürettiğine de temel olur.
:::

---

## Sütun Okuması: Katsayılarla Birleştir

$$
A=\begin{bmatrix}a_1&a_2&\cdots&a_n\end{bmatrix}
$$

$$
\boxed{Ax=x_1a_1+x_2a_2+\cdots+x_na_n}
$$

> $x$'in bileşenleri, $A$'nın sütunlarının katsayılarıdır.

::: {.notes}
Etkinlik örneğinde $a_1,a_2,a_3$ sırasıyla bütün etkinliklerdeki sandviç, içecek ve tatlı miktarlarıdır. $Ap=120a_1+40a_2+75a_3$ ifadesi ürün sütunlarını kendi fiyatlarıyla ölçekleyip toplar.

Bu okuma, lineer birleşim konusunu matris diliyle birleştirir ve daha sonra çözüm, homojen sistem ve bağımsızlık sorularının ortak kaynağı olacaktır.
:::

---

## İki Okuma, Tek İşlem

| Satır açısından | Sütun açısından |
|---|---|
| Bir sonuç bileşeni nasıl hesaplanır? | Sonuç vektörünün tamamı nasıl üretilir? |
| Her satır $x$ ile çarp-topla yapar | $x_j$, $a_j$ sütununun katsayısıdır |
| $m$ satır $\to m$ çıktı | $n$ sütun $\to n$ katsayı |

::: {.notes}
Bu iki bakış ayrı çarpım türleri değildir. Aynı $Ax$ ifadesinin eleman düzeyi ve bütün vektör düzeyi okumalarıdır. Satır okuması her çıktı bileşeninin nasıl hesaplandığını, sütun okuması ise çıktı vektörünün hangi lineer birleşimle oluştuğunu açıklar.

Satır ve sütun rollerini karıştırmamak, rank ve denklem sistemlerinde de önemlidir: satırlar kısıtları, sütunlar bilinmeyenlerin katsayı örüntülerini taşır.
:::

---

## Mekanizma Örneği

$$
A=\begin{bmatrix}1&2&3\\4&0&-1\end{bmatrix},
\qquad
x=\begin{bmatrix}2\\-1\\3\end{bmatrix}
$$

$$
Ax=
\begin{bmatrix}
1(2)+2(-1)+3(3)\\
4(2)+0(-1)-1(3)
\end{bmatrix}
=
\begin{bmatrix}9\\5\end{bmatrix}
$$

::: {.notes}
Hesaptan önce $A:2\times3$ ve $x:3\times1$ yazılır; çarpım tanımlıdır ve sonuç $2\times1$ olacaktır. Bu öngörü, çıkan sonucun türünü ve olası işlem hatalarını daha hesap başlamadan denetler.

Sütun okumasıyla aynı sonuç $2a_1-a_2+3a_3$ biçiminde elde edilir. İkinci katsayı $-1$ olduğu için ilgili terim $-a_2$ olur.
:::

---

## Tanımlı Fakat Yanlış Eşleşmiş

Matris sütun sırası:

$$
(\text{sandviç},\text{içecek},\text{tatlı})
$$

Yanlış fiyat sırası:

$$
(\text{tatlı},\text{sandviç},\text{içecek})^T
$$

Boyutlar uyumludur; sonuç yine de yanlış anlam taşır.

::: {.notes}
Bu karşı örnek, boyut kontrolünün gerekli fakat uygulama yorumunda yeterli olmadığını gösterir. Matematiksel işlem eksiksiz yapılabilir; fakat yanlış ürünler yanlış katsayılarla eşleşir.

Veri bilimi ve mühendislik uygulamalarında sütun adlarının ve sırasının kaybolması tam olarak bu tür sessiz hatalar üretir.
:::

---

## Sık Yapılan Hatalar: $Ax$

1. Boyutları kontrol etmeden çarpmaya başlamak.
2. Çarpımı eleman eleman yapmak.
3. Sonucun skaler olduğunu düşünmek.
4. Sütun sırasını göz ardı etmek.

::: {.notes}
Birinci hata, $A\in\mathbb{R}^{m\times n}$ için $x$ vektörünün $n$ bileşenli olması gerektiğini atlar. Eşleşmesi gereken, matrisin sütun sayısı ile vektörün bileşen sayısıdır; satır sayısıyla bileşen sayısının eşleşmesi gerekmez. İkinci hata $Ax$ ifadesini konum konum çarpma sanır; oysa her sonuç bileşeni tek bir çarpım değil, birden fazla çarpımın toplamıdır.

Üçüncü hata çarp-topla işlemini tek bir sayı üretiyormuş gibi okur. Tek bir satır gerçekten tek bir skaler üretir; fakat $m$ satırın tamamı $m$ bileşenli bir vektör verir. Sonuç ancak $m=1$ olduğunda skalere iner.

Dördüncü hata en sessiz olanıdır çünkü hesap tamamlanır ve akla yatkın bir sayı çıkar. Boyut uyumu işlemin matematiksel olarak tanımlı olduğunu söyler; matrisin $j$. sütununun anlamı ile $x_j$ bileşeninin anlamının uyuşup uyuşmadığını söylemez. Uygulamada iki kontrol ayrı ayrı yapılmalıdır.
:::

---

## Tek Çıktıdan Çoklu Çıktıya

Tek katsayı sütunu tek sonuç verir:

$$
p=\begin{bmatrix}120\\40\\75\end{bmatrix}
\Longrightarrow Ap=\text{toplam fiyatlar}
$$

Şimdi dört ölçüyü izleyelim:

$$
B=
\begin{bmatrix}
120&70&3&450\\
40&20&1&120\\
75&45&2&300
\end{bmatrix}
$$

$$
\begin{array}{c|cccc}
&b_1&b_2&b_3&b_4\\ \hline
\text{ölçü}&\text{fiyat}&\text{maliyet}&\text{emek}&\text{enerji}
\end{array}
$$

::: {.notes}
Fiyat sütunu her etkinlik için tek bir toplam üretmişti. Fakat aynı miktarlar üzerinden toplam maliyeti, hazırlama emeğini ve enerji değerini de hesaplamak isteyebiliriz. Bu ölçülerin her biri ürünlere farklı katsayılar atar. Örneğin sandviçin satış fiyatı $120$, maliyeti $70$, emek katsayısı $3$ ve enerji katsayısı $450$'dir.

Her ölçüyü ayrı bir sütun vektöründe tutabiliriz: $b_1$ fiyatı, $b_2$ maliyeti, $b_3$ emeği, $b_4$ enerjiyi taşır. Bu dört vektörü yan yana koyduğumuzda $B$ matrisi oluşur. $B$'nin satır sırası yine sandviç, içecek ve tatlıdır; böylece $A$'nın ürün sütunlarıyla aynı sırayı izler.

Şimdi sorun dört ayrı $Ab_j$ çarpımı hesaplamaktır. Önce birinci etkinlik satırını dört katsayı sütunuyla tek tek işleyeceğiz; ardından aynı hesabı diğer etkinliklere taşıyacağız.
:::

---

## Bir Etkinlikten Dört Sonuç

Birinci etkinliğin miktarları:

$$
r_1=\begin{bmatrix}20&15&10\end{bmatrix}
$$

$$
\begin{aligned}
r_1b_1&=20(120)+15(40)+10(75)=3750\\
r_1b_2&=20(70)+15(20)+10(45)=2150\\
r_1b_3&=20(3)+15(1)+10(2)=95\\
r_1b_4&=20(450)+15(120)+10(300)=13800
\end{aligned}
$$

$$
r_1B=\begin{bmatrix}3750&2150&95&13800\end{bmatrix}
$$

::: {.notes}
Birinci etkinlik satırında miktar sırası sandviç, içecek ve tatlıdır. Fiyat sütunuyla yaptığımız ilk hesap daha önceki $Ap$ çarpımından tanıdığımız $3750$ TL sonucunu verir. İkinci sütuna geçtiğimizde miktarlar değişmez; yalnız her ürünle eşleşen katsayı maliyet değerine dönüşür ve toplam $2150$ TL çıkar.

Üçüncü sütun hazırlama emeğini ölçer. $20(3)+15(1)+10(2)$ hesabı $95$ birim emek verir. Dördüncü sütun da aynı miktarları enerji katsayılarıyla eşleştirir ve $13800$ sonucunu üretir. Dört hesapta kullanılan satır aynıdır; değişen, sağdaki katsayı sütunudur.

Bu dört skaler yan yana yazılınca sonuç matrisinin birinci satırı oluşur. İlk konum fiyatı, ikinci konum maliyeti, üçüncü konum emeği, dördüncü konum enerjiyi taşır. Sütun sırasını değiştirirsek sonuç satırındaki ölçülerin sırası da değişir.
:::

---

## Bütün Etkinliklerin Sonuçları

$$
AB=
\begin{bmatrix}
3750&2150&95&13800\\
5500&3140&139&20100\\
2800&1610&71&10350\\
7500&4300&190&27600
\end{bmatrix}
$$

$$
\boxed{
(\text{etkinlik}\times\text{ürün})
(\text{ürün}\times\text{ölçü})
\longrightarrow
(\text{etkinlik}\times\text{ölçü})
}
$$

::: {.notes}
Birinci etkinlik için yaptığımız dört hesap, $A$'nın diğer üç satırına da uygulanır. Böylece sonuç matrisinin her satırı bir etkinliği, her sütunu bir ölçüyü gösterir. Örneğin ikinci satır ikinci etkinliğin $5500$ TL satış fiyatını, $3140$ TL maliyetini, $139$ birim emeğini ve $20100$ birim enerjisini taşır.

Sonuç matrisini sütunlardan da okuyabiliriz. Birinci sütun $Ab_1$ çarpımıdır ve bütün etkinliklerin satış fiyatlarını verir. İkinci sütun $Ab_2$ ile maliyetleri, üçüncü sütun $Ab_3$ ile emek değerlerini, dördüncü sütun $Ab_4$ ile enerji değerlerini toplar. Dolayısıyla

$$
B=\begin{bmatrix}b_1&b_2&b_3&b_4\end{bmatrix}
\quad\Longrightarrow\quad
AB=\begin{bmatrix}Ab_1&Ab_2&Ab_3&Ab_4\end{bmatrix}.
$$

Ortak ürün ekseni hesap sırasında tüketilir. $A$'nın etkinlik satırları sonuçta kalır; $B$'nin ölçü sütunları da sonuçta kalır. Bu nedenle $4\times3$ ile $3\times4$ çarpımı $4\times4$ boyutlu etkinlik–ölçü tablosunu üretir.
:::

---

## Boyut Uyumu Mekanizmadan Çıkar

$$
A:m\times n,
\qquad
B:n\times p
$$

Her $b_j$ vektörü $n$ bileşenlidir; bu nedenle her $Ab_j$ tanımlıdır.

$$
\boxed{(m\times n)(n\times p)\longrightarrow m\times p}
$$

::: {.notes}
İç boyut $n$, soldaki matrisin sütunları ile sağdaki matrisin satırlarının ortak eksenidir. Dış boyutlar sonuçtaki satır nesnelerini ve çıktı türlerini taşır. “İçler eşit, dışlar kalır” kısa yolu ancak bu mekanizma anlaşıldıktan sonra kullanılmalıdır.

Uygulamada ortak eksenin yalnız sayısı değil, anlamı ve sırası da uyumlu olmalıdır.
:::

---

## Satır–Sütun Formalizmi

$$
A=[a_{ik}]\in\mathbb{R}^{m\times n},
\qquad
B=[b_{kj}]\in\mathbb{R}^{n\times p}
$$

$$
\boxed{(AB)_{ij}=\sum_{k=1}^{n}a_{ik}b_{kj}}
$$

$$
\text{$A$'nın $i$. satırı}
\times
\text{$B$'nin $j$. sütunu}
\longrightarrow
\text{$(i,j)$ elemanı}
$$

::: {.notes}
Formal kural, çoklu matris–vektör okumasının eleman düzeyindeki sonucudur. Sağdaki her sütun ayrı vektör gibi işlendiğinde, bu vektörün her sonuç bileşeni soldaki bir satırla çarp-topla hesabından gelir.

Bu formül eleman eleman çarpım olmadığını açıkça gösterir; toplam indisi $k$, ortak iç eksen boyunca ilerler.
:::

---

## Çarpımın Satırlarını Birleştirmek

$r_i(C)$, $C$'nin $i$. satırıdır.

$$
\boxed{r_i(AB)=\sum_{k=1}^{n}a_{ik}\,r_k(B)}
$$

Örneğin birinci satırı:

$$
\begin{aligned}
r_1B
&=20\,r_1(B)+15\,r_2(B)+10\,r_3(B)\\
&=\begin{bmatrix}3750&2150&95&13800\end{bmatrix}
\end{aligned}
$$

::: {.notes}
Eleman formülünde $i$ sabit tutulup $j=1,\ldots,p$ boyunca bütün sonuç elemanları yan yana yazıldığında $(AB)$'nin $i$. satırı elde edilir. Her sütun için kullanılan $a_{i1},\ldots,a_{in}$ katsayıları aynı kaldığından bu katsayılar $B$'nin satırlarını bileşen bileşen birleştirir. Böylece tek tek satır–sütun çarpımlarını, sonuç satırının tamamını veren bir lineer birleşim olarak okuyabiliriz.

Etkinlik örneğinde $A$'nın birinci satırı $[20\ 15\ 10]$ olduğu için bu üç sayı, $B$'nin ürün satırlarının katsayılarıdır. Ölçeklenen satırlar sırasıyla $[2400\ 1400\ 60\ 9000]$, $[600\ 300\ 15\ 1800]$ ve $[750\ 450\ 20\ 3000]$ olur. Bileşen bileşen toplam $[3750\ 2150\ 95\ 13800]$ verir; bunlar daha önce $r_1b_1,\ldots,r_1b_4$ hesaplarıyla bulduğumuz dört sayıdır.

Bu okuma, soldan çarpan bir matrisin çıktı satırlarını nasıl kurduğunu gösterir. Elementer matrislerde katsayı satırı çoğunlukla sıfırlar, birler ve tek bir ölçek katsayısı taşıyacak; aynı kimlik satır değiştirme, ölçekleme ve bir satırın katını diğerine ekleme işlemlerini açıklayacaktır.
:::

---

## Çarpım Sırası Neden Önemli?

$$
A:2\times3,
\qquad
B:3\times4
$$

$$
AB:(2\times3)(3\times4)\to2\times4
$$

$$
BA:(3\times4)(2\times3)\quad\text{tanımsız}
$$

Genel olarak:

$$
\boxed{AB\ne BA}
$$

::: {.notes}
Sıra değiştiğinde önce boyut koşulu değişir. Her iki çarpım tanımlı olsa bile sonuç boyutları farklı veya aynı boyutta farklı değerler olabilir. Matris çarpımı genel olarak değişmeli değildir.

Bu yalnız cebirsel bir istisna değildir; iki işlemi farklı sırada uygulamak farklı bir bileşik etki üretir.
:::

---

## Her İki Çarpım Tanımlı Olsa Bile

$$
A:2\times3,\qquad B:3\times2
\quad\Longrightarrow\quad
AB:2\times2,\qquad BA:3\times3
$$

Kare matrislerde boyutlar aynı; sonuçlar yine farklı:

$$
A=\begin{bmatrix}1&1\\0&1\end{bmatrix},
\qquad
B=\begin{bmatrix}1&0\\1&1\end{bmatrix}
$$

$$
AB=\begin{bmatrix}2&1\\1&1\end{bmatrix},
\qquad
BA=\begin{bmatrix}1&1\\1&2\end{bmatrix}
$$

::: {.notes}
İşlem sırası yalnız sonucun değerini değil, boyutunu da değiştirir. $2\times3$ ve $3\times2$ matrisler için her iki çarpım da tanımlıdır; fakat biri $2\times2$, diğeri $3\times3$ çıkar. Bu iki matris toplanamaz bile — toplama şekillerin tamamen aynı olmasını ister, çarpım ise yalnız iç boyutların eşleşmesini.

Kare matrislerde boyut farkı ortadan kalkar ve karşılaştırma doğrudan elemanlar üzerinden yapılabilir. Yukarıdaki iki matris için $(AB)_{11}=1(1)+1(1)=2$ iken $(BA)_{11}=1(1)+0(1)=1$ olur; tek bir eleman bile farklıysa matrisler farklıdır. Dolayısıyla değişme özelliğinin geçersizliği bir boyut kazası değil, işlemin kendi yapısından gelen bir sonuçtur.

Sayılarda $ab=ba$ alışkanlığı burada taşınamaz. $AB$ ile $BA$ ifadelerinin işlem sırasını nasıl taşıdığı, dersin sonundaki lineer dönüşümler konusunda yeniden yorumlanacaktır. Burada cebirsel sonuç yeterlidir: sıra değiştiğinde sonuç da değişebilir.
:::

---

## Kısa Uygulama

$$
A:3\times4,
\quad
B:4\times2,
\quad
C:2\times4,
\quad
x\in\mathbb{R}^4
$$

Karar verin; hesap yapmayın:

1. $Ax$
2. $AB$
3. $BA$
4. $AC$
5. $B+C$

::: {.notes}
$Ax$ tanımlı ve sonucu $\mathbb{R}^3$'tedir. $AB$ tanımlı ve $3\times2$'dir. $BA$ tanımsızdır; $(4\times2)(3\times4)$ iç boyutları uyuşmaz. $AC$ tanımsızdır; $(3\times4)(2\times4)$. $B+C$ de tanımsızdır çünkü şekilleri $4\times2$ ve $2\times4$'tür.

Bu soru, işlem kararını hesaplamadan önce verme alışkanlığını sınar.
:::

---

## Sık Yapılan Hatalar: $AB$

1. Sonuç boyutunu iç boyutlardan almak.
2. $AB$ tanımlıysa $BA$ da tanımlıdır sanmak.
3. Çarpımı eleman eleman yapmak.
4. Ortak eksenin anlamını göz ardı etmek.

::: {.notes}
Birinci hata $(m\times n)(n\times p)$ çarpımının sonucunu $n$ üzerinden okur. Ortak iç boyut çarpımın yapılabilmesini sağlar ve toplam alınırken tüketilir; sonuçta yalnız dış boyutlar kalır, yani $m\times p$. İkinci hata boyut koşulunun sıraya bağlı olduğunu atlar: $A:2\times3$ ve $B:3\times4$ için $AB$ tanımlıyken $BA$ tanımsızdır.

Üçüncü hata $(AB)_{ij}$ elemanını $a_{ij}b_{ij}$ sanır. Doğrusu, $A$'nın $i$. satırı ile $B$'nin $j$. sütunundaki karşılıklı elemanların çarpılıp toplanmasıdır; zaten iki matrisin aynı şekilde olması bile gerekmez. Dördüncü hata ise matematiksel olarak kusursuz bir hesabın uygulama düzeyinde anlamsız olmasına yol açar: $(\text{etkinlik}\times\text{ürün})(\text{ürün}\times\text{özellik})$ yapısında soldaki matrisin sütunları ile sağdakinin satırları aynı ürünleri aynı sırayla temsil etmelidir.
:::

---

## Sonraki Adım: Kuralları Yazmak

Mekanizma kuruldu:

$$
(Ax)_i=\sum_{j}a_{ij}x_j,
\qquad
(AB)_{ij}=\sum_{k}a_{ik}b_{kj}
$$

- Satır okuması, sütun okuması, boyut uyumu
- Açık kalan: hangi cebirsel kurallar geçerli?

::: {.notes}
Bu notta matris çarpımının mekanizmasını kurduk. $Ax$ ifadesinde her satırın bir çıktı bileşeni ürettiğini, $x$ bileşenlerinin $A$ sütunlarının katsayısı olduğunu ve $AB$ çarpımının yan yana duran birden fazla $Ax$ hesabından ibaret olduğunu gördük. Boyut koşullarının nereden geldiğini de mekanizmanın kendisinden çıkardık.

Değişme özelliğinin geçersizliği bu notta ortaya çıktı. Sayılarda alışık olduğumuz başka kuralların ne kadarının matrislerde geçerli kaldığı ise açık kaldı: parantez yerini değiştirebilir miyiz, çarpımı toplama üzerine dağıtabilir miyiz, $AB=0$ eşitliğinden çarpanlardan birinin sıfır olduğu sonucunu çıkarabilir miyiz?

Bir sonraki not bu soruları tek tek ele alıyor. Her kural önce genel biçimde yazılıyor, sonra küçük matrislerle sayısal olarak doğrulanıyor; geçersiz olanlar için karşı örnek veriliyor.
:::
