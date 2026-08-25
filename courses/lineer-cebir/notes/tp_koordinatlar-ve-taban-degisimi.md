---
title: "Koordinatlar ve Taban Değişimi"
subtitle: "MATE 213 — Lineer Cebir"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-11
execute:
  echo: false
---

## Bir Vektörü Nasıl Tarif Ederiz?

Önceki konuda:

- Taban uzayı gerer.
- Taban lineer bağımsızdır.

> Belirli bir vektör nasıl tarif edilir?

::: {.notes}
Taban, bir vektör uzayını geren ve lineer bağımsız olan bir listedir. Germe özelliği, uzaydaki her vektörü taban vektörlerinin lineer birleşimiyle üretebildiğimizi söyler. Bu üretimin katsayıları, vektörü seçilen tabana göre tarif eden sayılardır.

Burada iki soru birlikte doğuyor. Önce aynı taban içinde katsayıların neden tek olduğunu göstereceğiz. Ardından tabanı değiştirdiğimizde sayı sütununun neden değiştiğini ve iki temsil arasında nasıl geçildiğini kuracağız. Böylece vektörün kendisi ile onu anlatmak için kullandığımız koordinatları birbirinden ayırabileceğiz.
:::

---

## Temsil Neden Benzersizdir?

$$
v=c_1b_1+\cdots+c_nb_n
=d_1b_1+\cdots+d_nb_n
$$

$$
(c_1-d_1)b_1+\cdots+(c_n-d_n)b_n=0
$$

$$
\boxed{c_i=d_i\quad(i=1,\ldots,n)}
$$

::: {.notes}
Bir tabanın germe özelliği, her $v$ için en az bir katsayı listesi bulunduğunu garanti eder. Benzersizlik ise lineer bağımsızlıktan gelir. Aynı $v$ vektörünün $c_1,\ldots,c_n$ ve $d_1,\ldots,d_n$ katsayılarıyla iki farklı biçimde yazıldığını varsayalım. İki eşitliği birbirinden çıkardığımızda sıfır vektörünü üreten yeni bir lineer birleşim elde ederiz.

$b_1,\ldots,b_n$ lineer bağımsız olduğundan bu birleşimdeki bütün $c_i-d_i$ katsayıları sıfır olmak zorundadır. Dolayısıyla her $i$ için $c_i=d_i$ olur ve iki listenin aslında aynı olduğu anlaşılır. Liste yalnız gerseydi temsil bulunur, fakat birden fazla temsil ortaya çıkabilirdi. Tabanın iki koşulu burada iki ayrı işi üstlenir: germe varlığı, bağımsızlık benzersizliği sağlar.
:::

---

## Koordinat Vektörü

$B=(b_1,\ldots,b_n)$ sıralı taban olsun.

$$
v=c_1b_1+\cdots+c_nb_n
$$

$$
\boxed{[v]_B=
\begin{bmatrix}
c_1\\ \vdots\\ c_n
\end{bmatrix}}
$$

::: {.notes}
$[v]_B$ gösterimi, $v$ vektörünün $B$ tabanındaki koordinat vektörünü anlatır. Sütunun birinci bileşeni $b_1$'in, ikinci bileşeni $b_2$'nin katsayısıdır ve bu düzen aynı biçimde devam eder. Benzersizlik sonucu sayesinde bu sütun her $v$ için yalnız bir tanedir. Böylece seçilen taban, uzaydaki her vektöre kesin bir sayı sütunu atar.

Tabanı sıralı bir liste olarak yazmamızın nedeni sütundaki konumların anlam taşımasıdır. Aynı taban vektörlerini farklı sıraya dizersek katsayıların sütundaki yerleri de değişir. Örneğin $B=(b_1,b_2)$ için $v=3b_1-2b_2$ eşitliği $[v]_B=\begin{bmatrix}3\\-2\end{bmatrix}$ verir. Tabanı $(b_2,b_1)$ biçiminde sıralarsak aynı vektörün koordinatları $\begin{bmatrix}-2\\3\end{bmatrix}$ olur.
:::

---

## Vektör ve Koordinatları

$$
v\in V
$$

$$
[v]_B\in\mathbb{R}^n
$$

| Nesne | Olası biçim |
|---|---|
| $v$ | polinom, matris, fonksiyon |
| $[v]_B$ | sayı sütunu |

::: {.notes}
$v$ ile $[v]_B$ farklı türde nesneler olabilir. Vektör uzayı $P_2$ ise $v$, derecesi en fazla iki olan bir polinomdur; koordinat vektörü ise seçilen üç elemanlı tabana göre üç gerçek sayıdan oluşur. Matrislerden oluşan bir vektör uzayında da $v$ bir matris olarak kalırken $[v]_B$ yine bir sayı sütunudur. Köşeli parantez ve alt indis, hangi nesneden söz ettiğimizi görünür kılar.

$V=\mathbb{R}^n$ ve $B$ standart taban olduğunda bu ayrım ilk bakışta silikleşir, çünkü vektörün alışılmış sütun gösterimi ile standart koordinatları aynı sayıları taşır. Standart olmayan bir tabana geçtiğimizde fark açıkça görünür. Bu nedenle $[v]_B$ ifadesini “$v$'nin $B$ tabanındaki temsili” diye okumak güvenli bir alışkanlıktır. Aynı $v$, farklı tabanlarda farklı sayı sütunlarıyla temsil edilebilir.
:::

---

## Hızlı Kontrol

$B=(b_1,b_2,b_3)$ sıralı taban olsun.

$$
w=-b_1+4b_3
$$

$$
[w]_B=?
$$

::: {.notes}
Koordinat sütununu yazarken tabandaki bütün vektörler için bir katsayı yeri ayırırız. Verilen eşitlikte $b_2$ görünmüyor; bu, onun katsayısının sıfır olduğu anlamına gelir. Taban sırası $(b_1,b_2,b_3)$ olduğuna göre sonuç $[w]_B=\begin{bmatrix}-1\\0\\4\end{bmatrix}$ olur. Aradaki sıfırı atmak üç bileşenli bir koordinatı iki bileşenli hâle getirir ve hangi taban vektörünün kullanılmadığı bilgisini kaybettirir.

Bu küçük kontrol, koordinat yazmanın yeni bir hesap gerektirmediği durumu gösterir: lineer birleşim zaten verilmiştir. Çoğu problemde ise $v$ bilinir, katsayılar bilinmez. O zaman germe eşitliğini bir denklem sistemine çeviririz. Taban vektörlerinin bağımsızlığı, kurduğumuz sistemin tek çözüm vermesini sağlar.
:::

---

## Koordinat Bulma Sorusu

$$
B=\left(
\begin{bmatrix}1\\1\end{bmatrix},
\begin{bmatrix}1\\-1\end{bmatrix}
\right),\qquad
v=\begin{bmatrix}5\\1\end{bmatrix}
$$

$$
\begin{bmatrix}1&1\\1&-1\end{bmatrix}
\begin{bmatrix}c_1\\c_2\end{bmatrix}
=
\begin{bmatrix}5\\1\end{bmatrix}
$$

::: {.notes}
$[v]_B$ sütununu bulmak için $v=c_1b_1+c_2b_2$ eşitliğindeki bilinmeyen katsayıları arıyoruz. Vektörleri bileşenlerine ayırınca $c_1+c_2=5$ ve $c_1-c_2=1$ denklemleri çıkar. Aynı bilgi, taban vektörlerini sütun yapan matris denklemiyle daha düzenli yazılır. Bu, daha önce çözdüğümüz $Ax=b$ türünde bir sistemdir.

Katsayı matrisi iki taban vektörünü sütunlarında taşır. Bu sütunlar bağımsız olduğu için matriste iki pivot vardır ve sistem her $v\in\mathbb{R}^2$ için tek çözüm verir. Aday liste bağımlı olsaydı bazı vektörler birden fazla katsayı listesiyle üretilebilirdi. Liste uzayı germeseydi bazı sağ taraflar için çözüm bulunmazdı.
:::

---

## Çözüm: Katsayıları Bul

$$
\begin{aligned}
c_1+c_2&=5,\\
c_1-c_2&=1
\end{aligned}
$$

$$
2c_1=6\Rightarrow c_1=3,\qquad c_2=2
$$

$$
\boxed{[v]_B=\begin{bmatrix}3\\2\end{bmatrix}}
$$

::: {.notes}
İki denklemi topladığımızda $2c_1=6$ elde eder ve $c_1=3$ buluruz. Bu değeri $c_1+c_2=5$ denklemine yerleştirince $c_2=2$ çıkar. Sonucu doğrudan kontrol edebiliriz: $3\begin{bmatrix}1\\1\end{bmatrix}+2\begin{bmatrix}1\\-1\end{bmatrix}=\begin{bmatrix}5\\1\end{bmatrix}$ olur. Böylece bulunan sütunun gerçekten $v$'yi ürettiğini görürüz.

Buradaki $3$ ve $2$, $v$'nin alışılmış yatay ve düşey bileşenleri değildir. Bu sayılar, $v$'ye ulaşmak için $\begin{bmatrix}1\\1\end{bmatrix}$ yönünde üç ve $\begin{bmatrix}1\\-1\end{bmatrix}$ yönünde iki birim ilerlediğimizi söyler. Farklı bir taban seçtiğimizde aynı hedefe giden adımlar değişir. Şimdi bu farkı standart tabanla yan yana getirebiliriz.
:::

---

## Aynı Vektör, İki Sütun

$E=(e_1,e_2)$ standart taban olsun.

| Taban | Koordinat |
|---|---|
| $B$ | $[v]_B=\begin{bmatrix}3\\2\end{bmatrix}$ |
| $E$ | $[v]_E=\begin{bmatrix}5\\1\end{bmatrix}$ |

$$
v=3b_1+2b_2=5e_1+e_2
$$

::: {.notes}
İki sütun da aynı $v$ vektörünü tarif eder. $\begin{bmatrix}3\\2\end{bmatrix}$ sütunundaki sayılar $B$ taban vektörlerinin katsayılarıdır; $\begin{bmatrix}5\\1\end{bmatrix}$ sütunundaki sayılar standart taban vektörlerinin katsayılarıdır. Sayıların değişmesi vektörün değiştiğini göstermez. Değişen, vektörü üretmek için kullandığımız referans yönleridir.

Aynı sayı sütununun taban belirtilmeden yazılması bu nedenle eksik bilgi taşır. Örneğin $\begin{bmatrix}3\\2\end{bmatrix}$, $B$ tabanında $v=\begin{bmatrix}5\\1\end{bmatrix}$ vektörünü; standart tabanda ise $\begin{bmatrix}3\\2\end{bmatrix}$ vektörünü temsil eder. Alt indis, sayıların hangi taban vektörleriyle eşleştirileceğini belirler. Taban değişimi problemi de bu eşleştirmeyi koruyarak bir sütundan diğerine geçme problemidir.
:::

---

## Koordinatları Geri Kurmak

$V=\mathbb{R}^n$ için:

$$
S_B=\begin{bmatrix}b_1&\cdots&b_n\end{bmatrix}
$$

$$
S_B[v]_B=v
$$

$$
\boxed{[v]_B=S_B^{-1}v}
$$

::: {.notes}
$V=\mathbb{R}^n$ olduğunda taban vektörlerini standart koordinatlarıyla yan yana getirip $S_B$ matrisini kurabiliriz. Bu matris, $B$ koordinatlarını standart koordinatlara çevirir; çünkü matris–vektör çarpımının sütun okuması tam olarak $c_1b_1+\cdots+c_nb_n$ birleşimini üretir. Önceki örnekte $S_B\begin{bmatrix}3\\2\end{bmatrix}=\begin{bmatrix}5\\1\end{bmatrix}$ eşitliği bunu gösterir. Taban sütunları bağımsız olduğundan $S_B$ tersinirdir.

$S_B^{-1}$ ters yönde çalışır ve standart koordinatları $B$ koordinatlarına çevirir. Bu formül, koordinat bulma işleminin neden tek çözümlü bir denklem sistemi olduğunu matris diliyle özetler. Soyut bir $V$ uzayında $v$ doğrudan sayı sütunu olmayabileceği için $S_B^{-1}v$ yazımı kullanılmaz; orada katsayıları $v=c_1b_1+\cdots+c_nb_n$ eşitliğinden buluruz. Taban değişim matrisini kurarken ise aynı sütun fikrini her vektör uzayında kullanabiliriz.
:::

---

## Taban Değişimi Ne Yapar?

$$
[v]_B\longmapsto[v]_C
$$

$$
\boxed{P_{C\leftarrow B}[v]_B=[v]_C}
$$

Alt indis: $B$'den $C$'ye.

::: {.notes}
$P_{C\leftarrow B}$ matrisi, giriş olarak $B$ koordinatlarını alır ve çıkış olarak $C$ koordinatlarını verir. Okun yönü alt indiste sağdan sola ilerler: önce $B$, sonra $C$. Bu okuma alışkanlığı, matrisi ezberlemekten daha güvenlidir. Çarpımdaki sağ sütun ile okun başlangıcındaki taban aynı olmalıdır.

İşlem sırasında $v$ sabit kalır; yalnız onu anlatan katsayılar değişir. Matris, tek bir $v$ için hazırlanmış bir dönüştürücü değildir. $V$ içindeki her vektörün $B$ koordinatlarını aynı kuralla $C$ koordinatlarına taşır. Bunun nasıl mümkün olduğunu anlamak için matrisin sütunlarına bakacağız.
:::

---

## Sütunlar Nereden Gelir?

$B=(b_1,\ldots,b_n)$ olsun.

$$
\boxed{P_{C\leftarrow B}=
\begin{bmatrix}
[b_1]_C&\cdots&[b_n]_C
\end{bmatrix}}
$$

Her sütun: bir $B$ vektörü.

::: {.notes}
Matrisin $j$. sütunu, $B$ tabanının $b_j$ vektörünü $C$ tabanında tarif eder. Bunun nedeni bir koordinat sütunuyla çarpmanın, matris sütunlarının aynı katsayılarla lineer birleşimini almasıdır. $[v]_B=\begin{bmatrix}x_1\\ \vdots\\ x_n\end{bmatrix}$ ise $v=x_1b_1+\cdots+x_nb_n$ olur. $C$ koordinatları lineer birleşimleri koruduğu için $[v]_C=x_1[b_1]_C+\cdots+x_n[b_n]_C$ elde edilir.

Son eşitliğin sağ tarafı tam olarak $P_{C\leftarrow B}[v]_B$ çarpımıdır. Dolayısıyla bütün vektörlerde çalışan matrisi kurmak için ayrı ayrı bütün vektörleri denememiz gerekmez; $B$ tabanının $n$ elemanını $C$ tabanında yazmak yeterlidir. Sütunlara $[c_j]_B$ yerleştirirsek ters yönün matrisi oluşur. Bu iki sütun tarifini karıştırmamak için önce okun yönünü yazıp sonra sütunları doldurabiliriz.
:::

---

## Somut Taban Değişimi

Örnekteki $B$ ve $E$ tabanları:

$$
P_{E\leftarrow B}=
\begin{bmatrix}[b_1]_E&[b_2]_E\end{bmatrix}
=\begin{bmatrix}1&1\\1&-1\end{bmatrix}
$$

$$
P_{E\leftarrow B}\begin{bmatrix}3\\2\end{bmatrix}
=\begin{bmatrix}5\\1\end{bmatrix}
$$

::: {.notes}
Hedef taban standart taban olduğunda bir vektörün $E$ koordinatları alışılmış bileşenleridir. Bu nedenle birinci sütuna $[b_1]_E=\begin{bmatrix}1\\1\end{bmatrix}$, ikinci sütuna $[b_2]_E=\begin{bmatrix}1\\-1\end{bmatrix}$ gelir. Ortaya çıkan matris, taban vektörlerini sütunlarında taşıyan $S_B$ matrisidir. Giriş sütunu $[v]_B=\begin{bmatrix}3\\2\end{bmatrix}$ olduğunda çarpım $3b_1+2b_2$ birleşimini standart koordinatlarla üretir.

Hesap birinci bileşende $3+2=5$, ikinci bileşende $3-2=1$ verir. Sonuç, aynı $v$ için daha önce doğrudan yazdığımız $[v]_E$ sütunuyla uyuşur. Bu kontrol hem sütunların sırasını hem dönüşüm yönünü sınar. Sonuç hedef tabanın koordinatlarıyla yorumlanamadığında matris yanlış yönde kurulmuş olabilir.
:::

---

## Ters Yön, Farklı Matris

$$
P_{B\leftarrow E}=P_{E\leftarrow B}^{-1}
=\frac12\begin{bmatrix}1&1\\1&-1\end{bmatrix}
$$

$$
P_{B\leftarrow E}\begin{bmatrix}5\\1\end{bmatrix}
=\begin{bmatrix}3\\2\end{bmatrix}
$$

$$
P_{B\leftarrow E}P_{E\leftarrow B}=I
$$

::: {.notes}
Standart koordinatlardan $B$ koordinatlarına dönmek için okun yönünü değiştiririz. Yeni matris, önceki matrisin tersidir; çünkü art arda iki dönüşüm başlangıçtaki koordinat sütununu geri vermelidir. $2\times2$ ters matris hesabı $P_{B\leftarrow E}=\tfrac12\begin{bmatrix}1&1\\1&-1\end{bmatrix}$ sonucunu verir. Bu matris $\begin{bmatrix}5\\1\end{bmatrix}$ sütununu $\begin{bmatrix}3\\2\end{bmatrix}$ sütununa taşır.

İki yönün matrisleri aynı sembolle yazılamaz. Örnekte sayısal farkı öndeki $\tfrac12$ katsayısı açıkça gösteriyor. Genel olarak $P_{C\leftarrow B}^{-1}=P_{B\leftarrow C}$ eşitliği geçerlidir. Bir çarpımı denetlerken sağdaki sütunun tabanı, matris indisindeki sağ taban ve sonuçtaki alt indis birbirini izlemelidir.
:::

---

## Polinomlarda Koordinat Sorusu

$P_2$ üzerinde iki taban:

$$
E=(1,t,t^2),\qquad
D=(1+t,t,1+t^2)
$$

$$
p(t)=3+2t-t^2
$$

$$
[p]_D=?
$$

::: {.notes}
Koordinat fikri geometrik eksenlerle sınırlı değildir. $P_2$, derecesi en fazla iki olan gerçek katsayılı polinomlardan oluşur ve toplama ile skalerle çarpma altında bir vektör uzayıdır. $E$ alışılmış polinom tabanıdır; $D$ ise aynı uzay için seçilmiş başka bir tabandır. Aradığımız sayılar, $p(t)$ polinomunu $D$ listesindeki üç polinomun lineer birleşimi olarak üretmelidir.

Bu nedenle $p(t)=a(1+t)+bt+c(1+t^2)$ eşitliğini kurarız. Polinomların eşit olması için sabit, $t$ ve $t^2$ katsayılarının ayrı ayrı eşit olması gerekir. Böylece soyut görünen koordinat sorusu yine bir lineer denklem sistemine dönüşür. Bilinmeyenler $a,b,c$ sayılarıdır; çözüm sırası $D$ tabanının sırasını izler.
:::

---

## Çözüm: Polinomu Üret

$$
a(1+t)+bt+c(1+t^2)
=(a+c)+(a+b)t+ct^2
$$

$$
a+c=3,\qquad a+b=2,\qquad c=-1
$$

$$
\boxed{[p]_D=
\begin{bmatrix}4\\-2\\-1\end{bmatrix}}
$$

::: {.notes}
$t^2$ katsayısından doğrudan $c=-1$ bulunur. Sabit terim denklemi $a+c=3$ olduğundan $a=4$ çıkar. Ardından $a+b=2$ eşitliği $b=-2$ verir. Yerine koyduğumuzda $4(1+t)-2t-(1+t^2)=3+2t-t^2$ elde ederiz.

Standart tabanda aynı polinomun koordinatları $[p]_E=\begin{bmatrix}3\\2\\-1\end{bmatrix}$ biçimindedir. $D$ tabanında ise sayı sütunu $\begin{bmatrix}4\\-2\\-1\end{bmatrix}$ olur. Burada vektörün kendisi bir polinomdur; iki sayı sütunu o polinomun iki ayrı tabandaki tarifidir. Bu örnek, taban değişiminin yalnız düzlemde eksen değiştirme resmiyle açıklanamayacağını gösterir.
:::

---

## Polinomlarda Taban Değişimi

$$
P_{E\leftarrow D}=
\begin{bmatrix}
1&0&1\\
1&1&0\\
0&0&1
\end{bmatrix}
$$

$$
P_{E\leftarrow D}
\begin{bmatrix}4\\-2\\-1\end{bmatrix}
=
\begin{bmatrix}3\\2\\-1\end{bmatrix}
$$

::: {.notes}
$P_{E\leftarrow D}$ matrisinin sütunları, $D$ tabanındaki polinomların $E$ koordinatlarıdır. $1+t$ için $\begin{bmatrix}1\\1\\0\end{bmatrix}$, $t$ için $\begin{bmatrix}0\\1\\0\end{bmatrix}$ ve $1+t^2$ için $\begin{bmatrix}1\\0\\1\end{bmatrix}$ sütunlarını yazıyoruz. Sütunları $D$ tabanının sırasıyla yan yana getirdiğimizde gösterilen matris oluşur. Determinantı $1$ olduğundan sütunlar bağımsızdır; bu da $D$ listesinin gerçekten bir taban olduğunu doğrular.

Çarpımın birinci bileşeni $4-1=3$, ikinci bileşeni $4-2=2$, üçüncü bileşeni $-1$ verir. Sonuç $p(t)=3+2t-t^2$ polinomunun standart katsayı sütunudur. Aynı matris, $P_2$ içindeki her polinomun $D$ koordinatlarını $E$ koordinatlarına dönüştürür; hesap tek bir polinoma özgü değildir.
:::

---

## Koordinatlar İşlemleri Korur

$$
[u+v]_B=[u]_B+[v]_B
$$

$$
[\alpha v]_B=\alpha[v]_B
$$

İşlemler sayı sütunlarına taşınır.

::: {.notes}
$u$ ve $v$ aynı $B$ tabanında sırasıyla $a_i$ ve $c_i$ katsayılarıyla yazılsın. Topladığımızda her $b_i$ vektörünün katsayısı $a_i+c_i$ olur; dolayısıyla koordinat sütunları bileşen bileşen toplanır. Benzer biçimde $v$'yi $\alpha$ ile çarpmak bütün katsayıları $\alpha$ ile çarpar. Koordinat eşlemesi vektör uzayı işlemlerini gerçek sayı sütunlarındaki alışılmış işlemlere taşır.

Bu özellik, koordinatların yalnız bir etiket listesi olmadığını açıklar. Soyut bir uzaydaki polinom veya matris hesabını, seçtiğimiz taban üzerinden $\mathbb{R}^n$ hesabına çevirebiliriz. Ancak iki sütunu toplamadan önce aynı tabana göre yazıldıklarını kontrol etmeliyiz. $[u]_B+[v]_C$ ifadesinde bileşen konumları farklı taban vektörlerini temsil ettiği için önce koordinatlardan birini diğer tabana dönüştürürüz.
:::

---

## Sık Yapılan Hatalar

1. $v$ ile $[v]_B$'yi özdeş saymak.
2. Taban sırasını göz ardı etmek.
3. Matris yönünü ters okumak.
4. Sütunlara yanlış koordinatları yerleştirmek.
5. Farklı taban koordinatlarını toplamak.

::: {.notes}
Birinci hata özellikle $\mathbb{R}^n$'de standart taban kullanılırken yerleşir; genel bir uzayda $v$ bir polinom veya matris olabilirken $[v]_B$ daima sayı sütunudur. İkinci hata, aynı taban vektörlerini farklı sıraya koymanın koordinat bileşenlerini yer değiştirdiğini kaçırır. Üçüncü hatada $P_{C\leftarrow B}$ matrisi $C$'den $B$'ye gidiyormuş gibi kullanılır. Alt indisleri sağdan sola okumak bu yönü denetler.

Dördüncü hata matrisin sütunlarında ortaya çıkar: $P_{C\leftarrow B}$ için $[b_j]_C$ sütunları gerekir. $[c_j]_B$ sütunları yazılırsa ters yönün matrisi kurulur. Beşinci hata, aynı konumdaki sayıların farklı taban vektörlerinin katsayıları olabileceğini gözden kaçırır. Toplama işleminden önce iki koordinat sütununu ortak bir tabana taşımak gerekir.
:::

---

## Karar Soruları

1. Aynı sütun, farklı vektör olabilir mi?
2. Taban sırası değişirse ne olur?
3. $P_{C\leftarrow B}$ ne zaman vardır?
4. Ters dönüşüm hangi matristir?

::: {.notes}
Aynı sayı sütunu farklı tabanlarda farklı vektörler üretebilir. Örneğin $\begin{bmatrix}3\\2\end{bmatrix}$ sütunu standart tabanda $\begin{bmatrix}3\\2\end{bmatrix}$ vektörünü, önceki $B$ tabanında ise $\begin{bmatrix}5\\1\end{bmatrix}$ vektörünü verir. Taban sırası değiştiğinde vektör sabit kalır, fakat ilgili katsayıların sütundaki konumları değişir. Bu yüzden tabanı koordinat hesabında sıralı liste olarak ele alırız.

$B$ ve $C$ aynı sonlu boyutlu $V$ uzayının tabanlarıysa $P_{C\leftarrow B}$ vardır ve tersinirdir. Her iki taban aynı boyutta olduğundan koordinat sütunları da aynı uzunluktadır. Ters dönüşüm $P_{B\leftarrow C}=P_{C\leftarrow B}^{-1}$ matrisiyle yapılır. Yönü sınamak için matrisin sağındaki koordinat alt indisiyle okun başlangıcını eşleştiririz.
:::

---

## Bazı Tabanlar Neden Kullanışlıdır?

- Temsil her tabanda benzersizdir.
- Hesap yükü tabana bağlıdır.
- Dik yönlerde katsayılar ayrışır.
- Öz vektörler işlemleri sadeleştirebilir.

::: {.notes}
Her taban geçerli ve benzersiz bir koordinat sistemi kurar, fakat bütün tabanlar aynı hesap kolaylığını sağlamaz. Düzlem örneğindeki $B$ vektörlerinin simetrik yapısı, toplama ve çıkarma yoluyla katsayıları hızlıca ayırmamızı sağladı. Birbirine dik yönlerden oluşan bir tabanda her katsayıyı ayrı bir yön üzerinden bulmak daha da kolaylaşabilir. Bu sezgi, ortogonal ve ortonormal tabanların neden tercih edildiğini açıklar.

Bir matrisin öz vektörlerinden taban kurulabildiğinde, matrisin etkisi koordinatlarda ayrı ayrı ölçeklemelere dönüşebilir. Böyle bir taban karmaşık görünen işlemleri daha sade bir biçime taşır. Taban seçimi vektörü değiştirmez; kullanılan sayıları ve hesabın biçimini değiştirir. Hangi tabanın kullanışlı olduğunu söylemek için uzaya uzunluk, açı ve diklik kavramlarını eklemek gerekir.
:::

---

## Sıradaki Soru

Vektör uzayı şunları verdi:

- Toplama
- Skalerle çarpma

> Uzunluk, açı ve diklik nereden gelir?

::: {.notes}
Bu konuda tabanın her vektöre benzersiz bir koordinat sütunu verdiğini kurduk. Koordinat bulmayı bir denklem sistemi olarak çözdük ve $P_{C\leftarrow B}$ matrisiyle aynı vektörün iki tabandaki temsilleri arasında geçtik. Düzlem ve polinom örnekleri, yöntemin vektörün somut türünden bağımsız çalıştığını gösterdi. Artık bir tabanı hesap kolaylığına göre seçmenin ne anlama gelebileceğini sorabiliriz.

Vektör uzayı tanımı toplama ve skalerle çarpma işlemlerini düzenler; bu işlemler tek başına uzunluk ya da açı ölçmez. Diklikten söz edebilmek için iki vektörü bir sayıyla ilişkilendiren iç çarpım yapısına ihtiyaç vardır. Uzunluk, açı ve diklik aynı tanımdan türetilir.
:::
