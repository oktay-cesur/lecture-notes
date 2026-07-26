---
title: "Ters Matris ve Tersinirlik"
subtitle: "MATE 213 — Lineer Cebir"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
execute:
  echo: false
---

## Etkisiz Eleman Nedir?

$$
8+0=8,\qquad -3+0=-3
$$

$$
8\cdot1=8,\qquad -3\cdot1=-3
$$

> Etkisiz eleman, değeri değiştirmez.

- Etkisiz eleman = **birim eleman**
- Bundan sonra: **birim eleman**

::: {.notes}
Etkisiz eleman, temel işlemlerden aşina olduğumuz bir kavramdır. Bir işlemin içinde kullanıldığında karşısındaki elemanı değiştirmez. Hangi elemanın etkisiz olduğu, seçtiğimiz işleme bağlıdır. Toplamada $0$, çarpmada $1$ bu görevi üstlenir. Aynı sayılarla çalışsak bile işlem değişince etkisiz eleman da değişir. Yani etkisiz eleman yalnız kullanılan elemanlara değil, tanımlanan işleme de bağlıdır.

Etkisiz eleman için daha matematiksel camiada **birim eleman** adı kullanılır; bu notun devamında bu terimi kullanacağız. Bu özellik yalnız örneklerdeki $8$ ve $-3$ için geçerli değildir. Her $a$ sayısı için $a+0=a$ ve $a\cdot1=a$ eşitlikleri sağlanır. Birim elemanı tanırken bakacağımız ölçüt budur: işlemden önceki ve sonraki değer aynı kalmalıdır.
:::

---

## Ters Eleman Ne Yapar?

$$
a+(-a)=0
$$

$$
a\cdot a^{-1}=1,\qquad a\neq0
$$

Tam sayılarda her çarpımsal ters yoktur:

$$
2^{-1}=\frac12\notin\mathbb Z
$$

- Ters, birim elemana götürür.
- Varlığı kümeye bağlıdır.

::: {.notes}
Ters eleman, verilen işlemi geri alarak bizi o işlemin birim elemanına götürür. Toplamada $a$ sayısının tersi $-a$'dır; örneğin $6+(-6)=0$ olur. Çarpmada sıfırdan farklı $a$ sayısının tersi $a^{-1}=\frac1a$ biçimindedir; örneğin $6\cdot\frac16=1$ eşitliği çarpma işlemini geri alır.

Bir tersin varlığını söylerken çalışılan kümeyi de bilmek gerekir. Tam sayılar kümesinde $2$'nin toplamsal tersi $-2$ yine bir tam sayıdır; çarpımsal tersi $\frac12$ ise bu kümenin dışında kalır. Ayrıca $0$ için çarpımsal ters yoktur, çünkü hiçbir sayı $0$ ile çarpıldığında $1$ vermez. Matrislerde ters ararken de aynı iki soruyu soracağız: çarpmanın birim elemanı nedir ve hangi matrisler bu elemana götürülebilir?
:::

---

## Matrislerde Aynı Fikir

Matris çarpımının birim elemanı:

$$
AI_n=I_nA=A
$$

Ters, $A$'yı $I_n$'ye götürür:

$$
\boxed{A^{-1}A=AA^{-1}=I_n}
$$

$A$ **tersinir**, $A^{-1}$ ise $A$'nın **ters matrisi**dir.

::: {.notes}
Sayılarda çarpmanın birim elemanı $1$ idi. Matris çarpımında aynı görevi uygun boyutlu birim matris $I_n$ üstlenir. Bu nedenle bir $A\in\mathbb{R}^{n\times n}$ matrisinin çarpımsal tersini, $A$ ile çarpıldığında $I_n$ matrisini veren $A^{-1}$ matrisi olarak tanımlarız.

Ters matris hem soldan hem sağdan çarpıldığında birim matrisi vermelidir. Matris çarpımı değişmeli olmadığı için $A^{-1}A$ ve $AA^{-1}$ ifadelerinin sırasını kendiliğimizden değiştiremeyiz. Kare matrisler için bu iki koşuldan birinin sağlanması diğerini de getirir; tanım iki yönlü geri alma davranışını açıkça gösterir.
:::

---

## Neden Kare Matris?

$$
A\in\mathbb{R}^{m\times n}
$$

$$
A^{-1}A=I_n,\qquad AA^{-1}=I_m
$$

iki yönlü tam geri alma için

$$
\boxed{m=n}
$$

gerekir.

::: {.notes}
Dikdörtgensel bir matris farklı boyutlu uzaylar arasında çalışır. $m<n$ olduğunda daha çok girdi bileşeni daha az çıktı bileşenine sıkıştırılır ve bazı girdiler ayırt edilemez. $m>n$ olduğunda ise bütün çıktı vektörlerine ulaşmak mümkün değildir.

Tek yönlü sol ya da sağ ters kavramları daha genel koşullarda incelenebilir; iki yönlü ters matris için giriş ve çıkış boyutları eşit olmalıdır.
:::

---

## Determinanttan Önce Varlık Ölçütü

$A\in\mathbb{R}^{n\times n}$ için:

$$
\boxed{A\text{ tersinir}\iff\operatorname{rank}(A)=n}
$$

Eşdeğer olarak:

- her satırda ve sütunda pivot vardır,
- $\operatorname{RREF}(A)=I_n$,
- $Ax=b$ her $b$ için tek çözümlüdür.

::: {.notes}
Tersinirlik önce pivot ve rank yapısıyla anlaşılır. Tam rank, matrisin hiçbir girdi yönünü kaybetmediğini ve bütün hedef vektörlere ulaşabildiğini gösterir. Başka bir deyişle her çıktı vektörünü üreten tam bir girdi vektörü vardır.

Rank $n$ ise kare matrisin $n$ sütununun her biri pivot taşır; karelik nedeniyle her satırda da pivot bulunur. Eliminasyon pivotları koruyarak $A$'yı $I_n$ biçimine götürür, yani $\operatorname{RREF}(A)=I_n$ olur. Aynı pivot yapısı $Ax=b$ sisteminde serbest değişken bırakmaz ve hiçbir $b$ için çelişki satırı üretmez; böylece her $b$ için tek çözüm vardır.

Ters yönde, $Ax=b$ her $b$ için tek çözümlüyse özellikle birim matrisin her $e_j$ sütunu için $Ax=e_j$ çözülebilir. Bu çözümleri yan yana koymak $A^{-1}$ matrisini verir. Determinant daha sonra aynı yapıyı tek bir skalerle sınayacaktır; bu aşamada eşdeğerlik pivot, RREF ve çözüm davranışı üzerinden kurulmuştur.
:::

---

## Elementer Matrislerden Terse

Bir kare matris için:

$$
\boxed{A\text{ tersinir}\iff A\underset{\text{satır}}{\sim}I_n}
$$

Satır işlemleri soldan çarpımdır:

$$
E_k\cdots E_2E_1A=I_n
$$

$$
\boxed{A^{-1}=E_k\cdots E_2E_1
=E_k\cdots E_2E_1I_n}
$$

::: {.notes}
Bir kare matrisin tersinir olması, onun birim matrise satır denk olmasıyla eşdeğerdir. Çünkü $A$ birim matrise indirgenebiliyorsa her satır ve sütunda pivot vardır; dolayısıyla $\operatorname{rank}(A)=n$ olur. Tersinirlik için daha önce kurduğumuz tam rank ölçütü de tam olarak bunu söyler.

Her elementer satır işlemi, uygun bir $E_i$ elementer matrisiyle soldan çarpmaya karşılık gelir. Önce $E_1$, sonra $E_2$ ve bu sırayla son olarak $E_k$ uygulanınca $E_k\cdots E_2E_1A=I_n$ elde edilir. $A$ ile çarpıldığında birim matrisi veren bu bileşik matris $A^{-1}$'dir.

Aynı işlem dizisini $I_n$ matrisine uyguladığımızda $E_k\cdots E_2E_1I_n$ elde ederiz. Birim matris çarpımın birim elemanı olduğundan bu ifade $E_k\cdots E_2E_1$ bileşik matrisinin kendisidir; o da $A^{-1}$'e eşittir. Genişletilmiş matris yöntemi, $A$ ve $I_n$ üzerindeki bu iki eş zamanlı hesabı yan yana tutar.
:::

---

## Genişletilmiş Matris Yöntemi

Her işlem iki bloğa uygulanır:

$$
\left[A\mid I_n\right]
\xrightarrow{E_1}
\left[E_1A\mid E_1I_n\right]
\xrightarrow{E_2,\ldots,E_k}
\left[E_k\cdots E_1A\mid E_k\cdots E_1I_n\right]
$$

$$
\boxed{\left[A\mid I_n\right]\longrightarrow
\left[I_n\mid A^{-1}\right]}
$$

Sol taraf $I_n$ biçimine ulaşamazsa $A$ tersinir değildir.

::: {.notes}
Bir satır işlemi genişletilmiş matrisin yalnız sol bloğuna yapılmaz. $E_1$ ile gösterilen ilk işlem bütün satıra uygulandığı için sol blok $E_1A$, sağ blok $E_1I_n$ olur. Sonraki işlemler de aynı sırayla iki bloğu birlikte değiştirir; böylece son adımda solda $E_k\cdots E_1A$, sağda $E_k\cdots E_1I_n$ bulunur.

Seçtiğimiz işlemler sol bloğu $I_n$ matrisine götürür. Önceki türetime göre aynı işlemlerin sağ bloktaki sonucu $A^{-1}$'dir. Bu nedenle $[A\mid I_n]\to[I_n\mid A^{-1}]$ kuralı ayrı bir ezber değil, tek bir elementer işlem dizisinin iki başlangıç matrisine aynı anda uygulanmasıdır.

Sol tarafta eksik pivot kalması, rankın $n$'den küçük olduğunu gösterir. Böyle bir durumda iki yönlü ters yoktur ve işlem durdurulur.
:::

---

## Örnek: Başlangıç

$$
A=\begin{bmatrix}2&1\\1&1\end{bmatrix}
$$

$$
\left[\begin{array}{cc|cc}
2&1&1&0\\
1&1&0&1
\end{array}\right]
$$

Önce daha elverişli pivot için:

$$
R_1\leftrightarrow R_2
$$

::: {.notes}
İki satır da ilk sütunda sıfır olmayan eleman taşır. Birinci satırdaki $2$ ile devam etmek mümkündür; fakat ikinci satırdaki $1$ kesirleri geciktirir. Satır değiştirme çözüm ve rank yapısını korur.

Genişletilmiş matrisin sağ yarısı da aynı satır değişikliğine uğrar. Çünkü sağ blok, eş zamanlı çözülen $Ay_1=e_1$ ve $Ay_2=e_2$ sistemlerinin sağ taraflarını taşır.
:::

---

## Örnek: Sol Bloğu Birim Matrise Dönüştür

$$
\left[\begin{array}{cc|cc}
1&1&0&1\\
2&1&1&0
\end{array}\right]
$$

$$
R_2\leftarrow R_2-2R_1
$$

$$
\left[\begin{array}{cc|cc}
1&1&0&1\\
0&-1&1&-2
\end{array}\right]
$$

::: {.notes}
Birinci pivotun altı sıfırlanır. Sağ bloktaki ikinci satır da aynı lineer birleşimle $(1,-2)$ olur. Sol blokta iki farklı sütunda pivot bulunduğu şimdiden görünür; dolayısıyla matris tam ranktır.

İkinci pivot $-1$ önce $1$ yapılacak, ardından birinci satırdaki üst eleman sıfırlanacaktır.
:::

---

## Örnek: Tersi Oku

$$
R_2\leftarrow -R_2,\qquad
R_1\leftarrow R_1-R_2
$$

$$
\left[\begin{array}{cc|cc}
1&0&1&-1\\
0&1&-1&2
\end{array}\right]
$$

$$
\boxed{A^{-1}=\begin{bmatrix}1&-1\\-1&2\end{bmatrix}}
$$

::: {.notes}
Sol blok $I_2$ olduğunda sağ blok ters matristir. Birinci sütun $Ay_1=e_1$ sisteminin, ikinci sütun $Ay_2=e_2$ sisteminin çözümüdür.

Sonucun doğru olup olmadığı çarpımla denetlenebilir. Satır işlemi hataları özellikle işaret ve sağ blok güncellemelerinde görüldüğü için bu kontrol önemlidir.
:::

---

## Örnek: Köşegen Matrisin Tersi

$$
D=\begin{bmatrix}2&0\\0&-3\end{bmatrix}
\qquad\Longrightarrow\qquad
D^{-1}=\begin{bmatrix}\frac12&0\\0&-\frac13\end{bmatrix}.
$$

$$
DD^{-1}=D^{-1}D=I_2.
$$

Köşegen elemanlardan biri $0$ olursa ters yoktur.

::: {.notes}
Köşegen matris, koordinatları birbirinden bağımsız ölçekler. Birinci koordinatı $2$ ile, ikinciyi $-3$ ile çarpan işlemi geri almak için aynı koordinatları sırasıyla $\frac12$ ve $-\frac13$ ile çarparız. Bu nedenle ters, sıfır olmayan köşegen elemanların çarpımsal terslerinden oluşur.

Köşegende $0$ varsa o koordinat tamamen silinir ve geri getirilemez. Böyle bir matrisin ilgili sütununda pivot yoktur; rank tam değildir ve ters bulunmaz. Bu örnek, skalerdeki $0^{-1}$ yokluğu ile matrisin bilgi kaybı arasında doğrudan bağ kurar.
:::

---

## Örnek: Satır Değiştirme Matrisi

$$
P=\begin{bmatrix}0&1\\1&0\end{bmatrix},
\qquad
Px=\begin{bmatrix}x_2\\x_1\end{bmatrix}.
$$

$$
P^2=I_2
\qquad\Longrightarrow\qquad
\boxed{P^{-1}=P}.
$$

::: {.notes}
$P$ matrisi iki koordinatın yerini değiştirir. Aynı yer değiştirmeyi ikinci kez uyguladığımızda koordinatlar başlangıç sırasına döner; dolayısıyla $P^2=I_2$ ve $P^{-1}=P$ olur.

Bu matris aynı zamanda bir elementer matristir: birim matrisin iki satırını değiştirerek elde edilir. Satır değiştirme işleminin tersinin yine aynı işlem olması, elementer matrisin kendi tersine eşit olmasıyla ifade edilir.
:::

---

## Doğrulama

$$
\begin{bmatrix}2&1\\1&1\end{bmatrix}
\begin{bmatrix}1&-1\\-1&2\end{bmatrix}
=
\begin{bmatrix}1&0\\0&1\end{bmatrix}
$$

$$
\begin{bmatrix}1&-1\\-1&2\end{bmatrix}
\begin{bmatrix}2&1\\1&1\end{bmatrix}
=
\begin{bmatrix}1&0\\0&1\end{bmatrix}
$$

::: {.notes}
Her iki çarpımın birim matris vermesi ters tanımını doğrudan doğrular. Kare matrislerde tek yönlü doğrulama yeterli olsa da iki yönü hesaplamak matris çarpımında sıra hatasını da ortaya çıkarır.

$A^{-1}$ üzerindeki üst simge skalerlerdeki üs alma anlamında değildir. Ters matris, $A$ ile her iki sırada çarpıldığında birim matrisi veren ayrı bir matristir.
:::

---

## Ters Varsa Tektir

$$
BA=I,\qquad AC=I
$$

$$
B=BI=B(AC)=(BA)C=IC=C
$$

$$
\boxed{B=C}
$$

::: {.notes}
Bir matrisin iki farklı tersi olabilir mi sorusu, "ters" kelimesinin belirli bir nesneyi mi yoksa bir nesne ailesini mi adlandırdığını belirler. $B$ soldan, $C$ sağdan geri alma yapsın; iki matrisin de aynı olduğu üç adımda görülür. $B$ ile birim matrisin çarpımı $B$'yi değiştirmez; birim matris yerine $AC$ yazılır; çarpımın birleşme özelliği parantezi kaydırır ve $BA$ yerine birim matris gelir.

Kanıtın tek kullandığı araç matris çarpımının birleşme özelliğidir. Değişme özelliği hiçbir adımda gerekmez; zaten genel olarak doğru da değildir. Sonuç, $A^{-1}$ gösteriminin kullanılmasını haklı çıkarır: belirli tek bir matris adlandırıldığı için "$A$'nın bir tersi" değil "$A$'nın tersi" denebilir. Aynı argüman soldan tersi olan ve sağdan tersi olan bir matriste bu iki tersin de zorunlu olarak çakıştığını gösterir.
:::

---

## Bilgi Kaybı ve Tersin Olmaması

$$
A=\begin{bmatrix}1&2\\2&4\end{bmatrix}
$$

$$
A\begin{bmatrix}-2\\1\end{bmatrix}
=\begin{bmatrix}0\\0\end{bmatrix}
$$

$$
A(x+t(-2,1)^T)=Ax
$$

::: {.notes}
Sıfırdan farklı $(-2,1)^T$ vektörü sıfıra gönderilir. Bu nedenle birbirinden farklı $x$ ve $x+t(-2,1)^T$ girdileri aynı çıktıyı üretir. Çıktıya bakarak başlangıç girdisini tek biçimde belirlemek mümkün değildir.

Matrisin iki satırı ve iki sütunu bağımlıdır; rankı birdir. Bir pivot eksik olduğu için $[A\mid I]$ işlemi sol tarafı birim matrise dönüştüremez.
:::

---

## Homojen Sistem Bağlantısı

$A$ kare ise:

$$
A\text{ tersinir}
\iff Ax=0\text{ yalnız }x=0\text{ çözümüne sahiptir}
$$

::: {.notes}
Tersinir bir matriste $Ax=0$ eşitliğinin iki tarafı $A^{-1}$ ile çarpılırsa $x=0$ elde edilir. Tersinir olmayan kare matriste ise rank eksikliği en az bir serbest değişken doğurur ve sıfırdan farklı homojen çözümler ortaya çıkar.

Bu eşdeğerlik geri alma ile bilgi kaybı arasındaki ilişkiyi açıklar. Sıfıra gönderilen sıfırdan farklı bir yön varsa $A$ işlemi o yönde ayrılan girdileri aynı çıktıya götürür.
:::

---

## $Ax=b$ Denkleminde Ters Kullanmak

$A$ tersinir ise:

$$
Ax=b
$$

$$
A^{-1}Ax=A^{-1}b
$$

$$
\boxed{x=A^{-1}b}
$$

::: {.notes}
Tersinirlik her $b$ için tek çözüm garanti eder ve bu çözüm $A^{-1}b$ biçiminde yazılır. Çarpım soldan yapılmalıdır; matris çarpımının sırası keyfî olarak değiştirilemez.

Bu formül kavramsal olarak güçlüdür, fakat tek bir sistemi sayısal olarak çözmek için önce tüm ters matrisi hesaplamak genellikle gereksiz ek işlem üretir. Gauss eliminasyonu doğrudan çözüm için temel yöntem olarak kalır.
:::

---

## Ters Matris Bölme Değildir

$$
A^{-1}\neq\frac1A
$$

Matrislerde bölme işlemi tanımlı değildir.

$$
AB^{-1}\neq B^{-1}A
$$

genel olarak.

::: {.notes}
Gerçek sayılarda $5^{-1}$ ile $1/5$ aynı şeydir ve $b/a$ yazmak $a^{-1}b$ ile $ba^{-1}$ arasında ayrım gerektirmez. Matrislerde böyle bir kısaltma yoktur: $1/A$ biçiminde bir işlem tanımlanmamıştır. $A^{-1}$, kesir değil, $AA^{-1}=A^{-1}A=I$ eşitliklerini sağlayan ayrı bir matristir.

Bölme gösteriminin yasaklanmasının nedeni gösterim titizliği değil, çarpımın değişmeli olmamasıdır. "$A$'yı $B$'ye bölmek" ifadesi $AB^{-1}$ mi yoksa $B^{-1}A$ mı sorusuna cevap vermez ve bu iki matris genel olarak farklıdır. $Ax=b$ sisteminde çarpımın hangi taraftan yapıldığı sonucu belirlediği için bölme dilinden tamamen uzak durmak gerekir.
:::

---

## Ters Matris Genel Çözüm Yöntemi Değildir

| Durum | Uygun yaklaşım |
|---|---|
| Tek bir $Ax=b$ sistemi | Gauss eliminasyonu |
| Aynı $A$, çok sayıda $b$ | ayrıştırma ya da önceden kurulan çözüm yapısı |
| Kuramsal özellik ve geri alma | $A^{-1}$ |
| Dikdörtgensel veya tekil $A$ | eliminasyon ve çözüm yapısı |

::: {.notes}
$A^{-1}$ yalnız kare ve tersinir matrisler için vardır. Oysa Gauss eliminasyonu dikdörtgensel, tekil, tutarsız ve serbest değişkenli sistemleri de sınıflandırabilir.

Ters matris özellikle kuramsal eşdeğerlikleri, matris işlemlerinin geri alınmasını ve bazı tekrar kullanılan sistem yapılarını açıklamada değerlidir. Her denklem sisteminde ilk tercih olarak görülmemelidir.
:::

---

## Tersin Temel Özellikleri

$A$ ve $B$ tersinir, $c\neq0$ ise:

$$
(AB)^{-1}=B^{-1}A^{-1}
$$

$$
(A^T)^{-1}=(A^{-1})^T
$$

$$
(cA)^{-1}=\frac1cA^{-1}
$$

::: {.notes}
Birleşik işlemler ters sırayla geri alınır. Önce $B$, sonra $A$ uygulanarak oluşan $AB$ işlemini geri almak için önce $A^{-1}$, ardından $B^{-1}$ uygulanır. Bu nedenle çarpımın tersinde sıra değişir.

Transpoz ve skalerle çarpma özellikleri doğrudan tanım kullanılarak doğrulanabilir. $c=0$ durumunda matris sıfır matrisi olur ve tam rank olamayacağı için ters bulunmaz.
:::

---

## Birim Matrisin Tersi ve Tersin Tersi

$$
I_nI_n=I_n
\quad\Longrightarrow\quad
\boxed{I_n^{-1}=I_n}
$$

$$
AA^{-1}=A^{-1}A=I
\quad\Longrightarrow\quad
\boxed{(A^{-1})^{-1}=A}
$$

::: {.notes}
Birim matris hiçbir şeyi değiştirmez; hiçbir şeyi değiştirmeyen işlemi geri almak yine hiçbir şey yapmamaktır. Bu nedenle $I_n$ kendi tersidir. Aynı gözlem $-I$ ve genel olarak $\lambda I$ için de kolayca yapılabilir.

Ters matrisin tanımı $A$ ile $A^{-1}$ arasında simetriktir: $AA^{-1}=A^{-1}A=I$ eşitliği hangi matrisin "asıl", hangisinin "ters" olduğunu ayırt etmez. Dolayısıyla $A$, $A^{-1}$ matrisinin tersi olma koşulunu da sağlar ve tekliğe dayanarak $(A^{-1})^{-1}=A$ yazılır. Kavramsal okuması şudur: bir işlemi geri alan işlemi geri almak, başlangıçtaki işleme dönmektir.
:::

---

## Kolay Tersler

$$
D=\operatorname{diag}(d_1,\ldots,d_n),\qquad d_i\neq0
$$

$$
D^{-1}=\operatorname{diag}\left(\frac1{d_1},\ldots,\frac1{d_n}\right)
$$

$$
(cI)^{-1}=\frac1cI,\qquad c\neq0
$$

::: {.notes}
Köşegen matris her koordinatı bağımsız olarak $d_i$ katsayısıyla ölçekler. Bu işlemi geri almak için aynı koordinat $1/d_i$ ile ölçeklenir. Köşegen elemanlardan biri sıfırsa o koordinat tamamen kaybolur ve tersinirlik bozulur.

Skaler matris $cI$, bütün koordinatları aynı katsayıyla ölçekleyen özel bir köşegen matristir.
:::

---

## Yaygın Yanlış Çıkarımlar

$$
(A+B)^{-1}\neq A^{-1}+B^{-1}
$$

genel olarak.

$$
(AB)^{-1}\neq A^{-1}B^{-1}
$$

genel olarak; doğru sıra $B^{-1}A^{-1}$'dir.

::: {.notes}
Ters alma işlemi toplama üzerinde dağılmaz. Hatta $A$ ve $B$ ayrı ayrı tersinirken $A+B$ tersinir olmayabilir. Örneğin $B=-A$ seçildiğinde toplam sıfır matrisidir.

Çarpımın tersinde sıra, işlev bileşkesini geri alma mantığı nedeniyle zorunlu olarak değişir. Matris çarpımı değişmeli olmadığından sırayı korumak aynı sonucu vermez.
:::

---

## Sık Yapılan Hatalar

1. Kare olmayı tersinirlik sanmak: gerekli, yeterli değil.
2. Elemanların tersini alarak $A^{-1}$ kurmaya çalışmak.
3. $Ax=b$ denklemini sağdan $A^{-1}$ ile çarpmak.
4. $A^{-1}$ gösterimini skaler üs gibi okumak.

::: {.notes}
Birinci hata en yaygın olanıdır: tersinirlik için kare olmak gerekir, fakat kare bir matrisin de rankı $n$'den küçük olabilir. Karar ölçütü pivot yapısıdır. İkinci hata, ters matrisi eleman düzeyinde bir işlem sanmaktan doğar: $A=\begin{bmatrix}a&b\\c&d\end{bmatrix}$ için $A^{-1}$ genel olarak $\begin{bmatrix}1/a&1/b\\1/c&1/d\end{bmatrix}$ değildir. Tanım eleman eleman değil, matris çarpımı üzerinden verilir. $\begin{bmatrix}2&1\\1&1\end{bmatrix}$ örneğinde gerçek ters $\begin{bmatrix}1&-1\\-1&2\end{bmatrix}$ olup elemanların tersleriyle hiçbir ilgisi yoktur; ayrıca sıfır eleman taşıyan tersinir matrislerde bu yöntem tanımsız bile kalır.

Üçüncü hata sütun vektörü uzlaşımıyla ilgilidir: $x$ ve $b$ sütun vektörü olduğunda $bA^{-1}$ çarpımı boyut uyumsuzluğu nedeniyle tanımlı bile değildir; doğru işlem her iki tarafı soldan çarpmaktır. Dördüncü hatada $A^{-1}$ gösterimindeki $-1$ bir kuvvet değil, "geri alan matris" için kullanılan bir işarettir; bu nedenle $A^{-1}$ elemanlarının $A$ elemanlarının $-1$'inci kuvveti olmasını beklemek yanlıştır.
:::

---

## Aynı Yapının Yeni Bir Ölçüsü

Şimdiye kadar tersinirlik:

$$
\operatorname{rank}(A)=n,\qquad
\operatorname{RREF}(A)=I,\qquad
Ax=b\text{ için tek çözüm}
$$

üzerinden kuruldu.

Kare matrisin bu yapısını tek bir skalerle nasıl ölçeriz?

::: {.notes}
Rank ve pivot dili tersinirliğin yapısal nedenini açıklar. Determinant, kare matrisin aynı özelliğini ve geometrik ölçekleme etkisini tek bir skalerle özetler.

Determinant tersinirlikten sonra geldiğinde sıfır olup olmamasının anlamı hazırdır: sıfır değer bilgi kaybına ve eksik pivota, sıfırdan farklı değer tam ranka karşılık gelir.
:::
