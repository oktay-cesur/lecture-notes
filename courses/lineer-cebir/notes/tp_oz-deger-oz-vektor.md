---
title: "Öz Değerler ve Öz Vektörler"
subtitle: "MATE 213 — Lineer Cebir"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-11
execute:
  echo: false
---

## Dönüşümün Özel Doğrultuları

Matris-vektör çarpımını $Ax$ genel biçimde incelemiştik: bir matris, girdi
$x$'i alıp çıktı $Ax$'i üreten bir dönüşüm olarak da okunabilir.

$$
x \longmapsto Ax
$$

Şimdi soru: hangi $x$ için bu etki yalnızca bir **ölçeklemeye** iner?

::: {.notes}
Matris-vektör çarpımı $Ax$ ele alınırken bir matrisin aynı zamanda bir dönüşüm olarak okunabileceğini görmüştük: $x$ girdisini alıp $Ax$ çıktısını üreten bir kural. Genel bir $x$ için $Ax$'in yönü de büyüklüğü de $x$'den farklı olabilir; dönüşüm vektörü döndürebilir, uzatabilir, kısaltabilir ya da bunların bir bileşimini yapabilir.

Özel soru şudur: Hangi $x$ doğrultuları için $A$'nın etkisi yalnızca bir ölçeklemeye iner, yani $Ax$ hâlâ $x$ ile aynı ya da tam ters doğrultuda kalır? Bu doğrultular matrisin davranışını en yalın biçimde gösterir ve öz değer, öz vektör kavramlarının çıkış noktasıdır.
:::

---

## Bir Vektör Yön Değiştirir, Öbürü Değiştirmez

$$
A=\begin{bmatrix}4&1\\2&3\end{bmatrix}
$$

$$
A\begin{bmatrix}1\\0\end{bmatrix}=\begin{bmatrix}4\\2\end{bmatrix}
$$

$$
A\begin{bmatrix}1\\1\end{bmatrix}=\begin{bmatrix}5\\5\end{bmatrix}=5\begin{bmatrix}1\\1\end{bmatrix}
$$

::: {.notes}
Elimizde $A=\begin{bmatrix}4&1\\2&3\end{bmatrix}$ olsun. $x=(1,0)^T$ alınırsa $Ax=(4,2)^T$ çıkar; bu vektör $x$ ile aynı doğrultuda değildir, dönüşüm burada hem yönü hem uzunluğu değiştirmiştir.

$x=(1,1)^T$ seçilirse sonuç $Ax=(5,5)^T$'dir ve bu tam olarak $5\cdot(1,1)^T$'dir: yön aynı kalmış, yalnızca uzunluk beş katına çıkmıştır. Bu ikinci vektör rastgele seçilmedi; $A$'nın böyle davrandığı özel bir doğrultudur. Sıradaki hedef, böyle doğrultuların rastgele deneme yapmadan nasıl bulunacağını kurmaktır.
:::

---

## Öz Değer ve Öz Vektör Tanımı

$$
Av=\lambda v,\qquad v\neq0
$$

- $\lambda$: **öz değer**
- $v$: $\lambda$'ya karşılık gelen **öz vektör**
- İki koşul birlikte

::: {.notes}
$Av=\lambda v$ eşitliği, $v$ üzerinde $A$'nın etkisinin yalnızca $\lambda$ ile çarpmaktan ibaret kaldığını söyler: $v$'nin doğrultusu korunur, yalnızca uzunluğu (ve $\lambda<0$ ise yönü) ölçeklenir. Bu eşitliği sağlayan $\lambda$ skalerine öz değer, $v$ vektörüne de o öz değere karşılık gelen öz vektör denir.

Tanımda $v\neq0$ koşulu ayrıca yazılır, çünkü sıfır vektörü her $\lambda$ için $A0=\lambda0=0$ eşitliğini sağlar. Bu eşitlik hiçbir doğrultu bilgisi taşımaz; sıfır vektörünün kendisi zaten bir yön belirtmez. Öz vektör tanımı bu nedenle yalnızca sıfırdan farklı vektörler için anlamlıdır.
:::

---

## Neden Kare Matris?

$A\in\mathbb{R}^{m\times n}$, $v\in\mathbb{R}^n$ olsun.

$$
Av\in\mathbb{R}^m,\qquad \lambda v\in\mathbb{R}^n
$$

$Av=\lambda v$ ancak $m=n$ olursa boyutça anlamlı.

::: {.notes}
$A$ boyutu $m\times n$ ise $Av$ vektörü $\mathbb{R}^m$'de, $\lambda v$ vektörü ise $\mathbb{R}^n$'de yaşar. İki vektörün eşit olabilmesi için aynı uzayda bulunmaları gerekir; bu da $m=n$'i zorunlu kılar. Dolayısıyla öz değer problemi yalnızca kare matrisler için tanımlıdır. Bu bir sözleşme değildir; eşitliğin boyutça anlamlı olmasının doğrudan sonucudur.

Öz değer problemi $Av=\lambda v$ eşitliğinin iki tarafının da aynı uzayda bulunmasını gerektirir; bu nedenle burada yalnız kare matrisler ele alınır.
:::

---

## Hızlı Kontrol

$$
A=\begin{bmatrix}4&1\\2&3\end{bmatrix},\qquad v=\begin{bmatrix}1\\-2\end{bmatrix}
$$

$Av=2v$ sağlanıyor mu?

::: {.notes}
Tanımı bir adayda sınamak, elde $\lambda$ ve $v$ için $Av$'yi hesaplayıp $\lambda v$ ile karşılaştırmaktan ibarettir; iki taraf eşitse aday gerçekten bir öz değer-öz vektör çiftidir, eşit değilse aday reddedilir. Burada sınanacak aday $\lambda=2$ ve $v=(1,-2)^T$ olarak veriliyor.

Bu tür bir kontrol yalnızca elde hazır bir adayı test eder; adayın nereden geldiği bu aşamada sorulmuyor. Amaç yalnızca tanımı uygulamaktır: $Av$ hesaplanacak, $2v$ ile karşılaştırılacak. Eşitlik çıkarsa $\lambda=2$ gerçekten bir öz değer olacaktır.
:::

---

## Hızlı Kontrol: Doğrulama

$$
Av=\begin{bmatrix}4\cdot1+1\cdot(-2)\\2\cdot1+3\cdot(-2)\end{bmatrix}=\begin{bmatrix}2\\-4\end{bmatrix}
$$

$$
2v=\begin{bmatrix}2\\-4\end{bmatrix}
$$

$$
\boxed{Av=2v}
$$

::: {.notes}
Hesap $Av=(4\cdot1+1\cdot(-2),\ 2\cdot1+3\cdot(-2))^T=(2,-4)^T$ verir. Bu sonuç $2\cdot(1,-2)^T=(2,-4)^T$ ile aynıdır, dolayısıyla $Av=2v$ gerçekten sağlanıyor; $\lambda=2$ bu $A$ için bir öz değer, $v=(1,-2)^T$ ise ona karşılık gelen bir öz vektördür.

Bu kontrol yalnızca verilen adayı doğrular; $\lambda=2$'nin ya da başka öz değerlerin nasıl bulunacağını göstermez. Bir $A$ için sonsuz sayıda vektör denenip hangisinin işe yaradığına bakmak pratik bir yöntem değildir; sıradaki adım şansa bağlı olmayan, sistematik bir arama kurmaktır.
:::

---

## $(A-\lambda I)v=0$'a Geçiş

$$
Av=\lambda v \quad\Longleftrightarrow\quad Av-\lambda v=0
$$

$$
\Longleftrightarrow\quad (A-\lambda I)v=0
$$

$I$: $A$ ile aynı boyutta birim matris.

::: {.notes}
Adım $Av-\lambda v=0$ cebirsel olarak doğrudan gelir. Sonraki adımda $v$'yi ortak çarpan olarak parantezine almak için $\lambda v$ ifadesi $\lambda(Iv)$ olarak yazılır; $I$ birim matris olduğundan $Iv=v$'dir ve bu adım eşitliği bozmaz. Böylece $Av-\lambda Iv=(A-\lambda I)v$ elde edilir. $A-\lambda I$ ifadesindeki çıkarma artık matris-matris çıkarmasıdır; matristen doğrudan bir skaler çıkarmak tanımsız kalırdı.

$(A-\lambda I)v=0$ eşitliği tanıdık bir yapıdadır: $A-\lambda I$ adlı bir matrisin, sıfırdan farklı bir $v$ vektörünü sıfıra gönderdiğini söyler. Bu tam olarak homojen sistemlerin trivial olmayan çözüm sorusudur; farkı yalnızca katsayı matrisinin artık $A-\lambda I$ olmasıdır.
:::

---

## Trivial Olmayan Çözüm Ne Gerektirir?

$$
(A-\lambda I)v=0,\qquad v\neq0
$$

- Pivot sayısı $n$'den az
- $\operatorname{rank}(A-\lambda I)<n$
- $A-\lambda I$ tersinir değil

::: {.notes}
Homojen sistemlerde kurulan bilgiye göre, kare bir $B$ matrisi için $Bv=0$'ın $v\neq0$ olan trivial olmayan bir çözümü varsa, bu $B$'nin bütün sütunlarında pivot bulunmadığını, yani $\operatorname{rank}(B)<n$ olduğunu gösterir; bu da $B$'nin tersinir olmadığı anlamına gelir.

Burada $B=A-\lambda I$ alınırsa aynı sonuç geçerli olur: $(A-\lambda I)v=0$ denkleminin $v\neq0$ çözümü olması, $A-\lambda I$'nin tersinir olmamasını gerektirir. Tersinir olmama koşulu henüz sayısal bir teste dönüşmedi; bunun için determinantla kurulan bağlantı gerekiyor.
:::

---

## Tersinirlik ve Determinant

$$
B \text{ tersinir} \iff \det(B)\neq0
$$

$$
\det(A-\lambda I)=0
$$

- Önceden kurulan denklik
- Yeni bir formül değil

::: {.notes}
Kare bir matrisin tersinir olmamasının determinantla eşdeğerliği önceden kurulmuştu: $B$ tersinir $\iff \det(B)\neq0$. Önceki adımda $A-\lambda I$'nin tersinir olmadığı gösterildiğinden, bu denklik doğrudan $\det(A-\lambda I)=0$ sonucunu verir.

Bu geçiş, homojen sistemlerde ve determinantta kurulan denkliklerin $A-\lambda I$ matrisine uygulanmasıdır; ayrı, ezberlenecek yeni bir formül değildir. $\det(A-\lambda I)=0$ eşitliği artık $\lambda$'ya bağlı somut bir denklem olarak elde edildi; sıradaki adım bu denklemin yapısını incelemektir.
:::

---

## Karakteristik Polinom

$$
\det(A-\lambda I)=0
$$

- $\lambda$'da bir **polinom** denklemi
- Kökleri: öz değerler
- $\det(A-\lambda I)$: **karakteristik polinom**

::: {.notes}
$A-\lambda I$ matrisinin her girdisi $\lambda$'da en fazla birinci derecedendir; determinant hesabı bu girdilerin çarpım ve toplamlarından oluştuğu için $\det(A-\lambda I)$ ifadesi $\lambda$'da bir polinom, yani karakteristik polinom olarak ortaya çıkar. $n\times n$ boyutlu bir matris için bu polinomun derecesi $n$'dir. Polinomun kökleri, tanımı gereği $\det(A-\lambda I)=0$ eşitliğini sağlayan $\lambda$ değerleridir, yani tam olarak öz değerlerdir.

Karakteristik polinom yalnızca öz değerleri verir, öz vektörleri değil. Her kök bulunduktan sonra o $\lambda$ değeri $(A-\lambda I)v=0$ denklemine geri konur ve bu homojen sistem ayrıca çözülür; öz vektörler bu ikinci adımdan çıkar.
:::

---

## Özuzay

Bir $\lambda$ öz değeri için:

$$
E_\lambda=\{v: (A-\lambda I)v=0\}
$$

- $(A-\lambda I)v=0$'ın çözüm kümesi
- Sıfır vektörünü de içerir
- Öz vektörler: $E_\lambda$'nın sıfırdan farklı elemanları

::: {.notes}
$E_\lambda$, sabit bir $\lambda$ için $(A-\lambda I)v=0$ homojen sisteminin bütün çözümlerinden oluşur. Homojen sistemlerin çözüm kümelerinin toplama ve skalerle çarpmaya kapalı olduğu, dolayısıyla bir altuzay oluşturduğu daha önce kurulmuştu; aynı yapı burada $A-\lambda I$ katsayı matrisiyle yeniden karşımıza çıkar. Bu nedenle $E_\lambda$'ya özuzay denir.

$E_\lambda$ tanım gereği sıfır vektörünü içerir, çünkü her homojen sistem trivial çözüme sahiptir. Ancak öz vektör tanımı $v\neq0$ şartını taşıdığından sıfır vektörünün kendisi bir öz vektör sayılmaz; öz vektörler $E_\lambda$'nın sıfırdan farklı elemanlarıdır.
:::

---

## Sonraki Adım

- Tanım: $Av=\lambda v$
- Denklem: $\det(A-\lambda I)=0$
- Küme: özuzay $E_\lambda$
- Sırada: somut matrislerde işletmek

::: {.notes}
Öz değer hesabında bir $\lambda$ adayı $Av=\lambda v$'yi $(A-\lambda I)v=0$'a taşır. Trivial olmayan çözüm $A-\lambda I$'nin tersinir olmamasını, bu da $\det(A-\lambda I)=0$'ı gerektirir. Bu denklemin kökleri öz değerlerdir ve her kök için $(A-\lambda I)v=0$ çözülerek özuzay $E_\lambda$ bulunur.

Aynı adımlar somut matrislerde de uygulanır: üçgensel bir matriste öz değerler doğrudan okunabilir, genel bir $2\times2$ matriste karakteristik polinom açılıp çözülür ve tekrarlı bir öz değerin özuzaya etkisi ayrıca incelenir.
:::
