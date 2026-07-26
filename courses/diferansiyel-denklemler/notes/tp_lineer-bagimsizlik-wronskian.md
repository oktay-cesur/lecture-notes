---
title: "Lineer Bağımlılık, Bağımsızlık ve Wronskian"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-07-26
execute:
  echo: false
---

## Fonksiyonlar İçin Lineer Bağımlılık

Bir aralıkta tanımlı $f_1(x),\ldots,f_n(x)$ fonksiyonları için

$$
c_1f_1(x)+\cdots+c_nf_n(x)=0
$$

eşitliği o aralığın **her** noktasında yalnız $c_1=\cdots=c_n=0$ ile sağlanıyorsa fonksiyonlar **lineer bağımsızdır**; sıfırdan farklı bir katsayı seçimiyle de sağlanabiliyorsa **lineer bağımlıdır**.

::: {.notes}

Süperpozisyonla kurulan $c_1y_1+\cdots+c_ny_n$ ailesinin gereksiz tekrar içermemesi için $y_1,\ldots,y_n$ çözümlerinin farklı yönler taşıması gerekir. Bu farklılığı fonksiyonlar için lineer bağımlılık ve bağımsızlık kavramlarıyla ölçeriz. Tanım, vektörlerdeki lineer bağımsızlıkla aynı mantığı taşır: $c_1f_1+\cdots+c_nf_n=0$ eşitliği yalnız trivial katsayılarla ($c_1=\cdots=c_n=0$) sağlanıyorsa fonksiyonlar bağımsızdır. Buradaki $0$, aralığın her noktasında sıfır değerini alan sıfır fonksiyonudur. Sıfırdan farklı en az bir katsayıyla da eşitlik sağlanabiliyorsa fonksiyonlar bağımlıdır; vektörlerin yerini fonksiyonlar alır.

:::

---

## İki Basit Örnek

$$
f_1(x)=x,\ f_2(x)=2x
\quad\Longrightarrow\quad
2f_1(x)-f_2(x)=0 \ \text{(her $x$'te)}.
$$

Trivial olmayan katsayılarla ($2,-1$) sıfır elde edildi — **bağımlı**.

$$
f_1(x)=x,\ f_2(x)=x^2
\quad\Longrightarrow\quad
c_1x+c_2x^2=0 \ \text{her $x$'te ancak } c_1=c_2=0 \text{ ile.}
$$

**Bağımsız**.

::: {.notes}

İlk örnekte $f_2$ doğrudan $f_1$'in bir katıdır ($f_2=2f_1$), bu yüzden $2f_1-f_2=0$ ilişkisi her $x$ için geçerlidir ve katsayılar ($2,-1$) trivial değildir; fonksiyonlar bağımlıdır. İkinci örnekte $c_1x+c_2x^2=0$ eşitliğinin *her* $x$ için geçerli olması istenir. Bu bir polinom özdeşliğidir ve yalnız $c_1=c_2=0$ ile mümkündür; örneğin $x=1$ ve $x=2$ değerleri iki katsayıyı da sıfıra zorlar. Dolayısıyla $x$ ve $x^2$ bağımsızdır. Eşitlik tek bir $x$ değerinde değil, aralığın tamamında sağlanmalıdır.

:::

---

## Wronskian Tanımı

$f_1,\ldots,f_n$ fonksiyonları $(n-1)$'inci mertebeye kadar türevlenebilir olsun. **Wronskian**:

$$
W(f_1,\ldots,f_n)(x)=
\det
\begin{bmatrix}
f_1 & f_2 & \cdots & f_n \\
f_1' & f_2' & \cdots & f_n' \\
\vdots & \vdots & & \vdots \\
f_1^{(n-1)} & f_2^{(n-1)} & \cdots & f_n^{(n-1)}
\end{bmatrix}.
$$

::: {.notes}

Trivial olmayan bir katsayı seçiminin var olup olmadığını doğrudan tanımdan kontrol etmek genelde zordur. Wronskian, bu kontrolü bir determinant hesabına indirger. $n$ tane fonksiyon için Wronskian, fonksiyonların kendilerini ve $(n-1)$'inci mertebeye kadar türevlerini satır satır dizen bir $n\times n$ matrisin determinantıdır. $n=2$ için bu, $W(f_1,f_2)=f_1f_2'-f_2f_1'$'dir; $n=3$ için üç satırlı, üç sütunlu bir determinant olur. Wronskian, $x$'in bir fonksiyonudur — genel olarak her noktada farklı bir değer alabilir.

:::

---

## Wronskian ve Bağımsızlık: Çözümler İçin Teorem

$y_1,\ldots,y_n$, standart biçimdeki katsayıları $I$ aralığında sürekli olan aynı $n$'inci mertebe homojen lineer denklemin çözümleri olsun. O zaman herhangi bir $x_0\in I$ için

$$
W(y_1,\ldots,y_n)(x_0)\neq0
\quad\Longleftrightarrow\quad
y_1,\ldots,y_n \text{, $I$ üzerinde lineer bağımsızdır.}
$$

::: {.notes}

Bu teorem yalnızca standart biçimdeki katsayıları $I$ üzerinde sürekli olan **aynı homojen denklemin çözümleri** için geçerlidir — genel, rastgele fonksiyonlar için değil. Eğer $y_1,\ldots,y_n$ böyle bir denklemin çözümleriyse, bir noktada Wronskian'ın sıfırdan farklı olması, çözümlerin $I$ üzerinde lineer bağımsız olduğuyla tam olarak denktir.

Bağımlılık yönü doğrudan görülebilir: $c_1y_1+\cdots+c_ny_n=0$ eşitliği ve türevleri, Wronskian matrisinin her noktada trivial olmayan bir katsayı vektörünü sıfıra götürdüğünü gösterir; dolayısıyla $W\equiv0$ olur. Ters yönde ise Wronskian bir noktada sıfırsa o noktadaki başlangıç verileri arasında trivial olmayan bir ilişki kurulur. Bu lineer birleşim homojen denklemi sağlar ve ilk $n$ başlangıç değeri sıfırdır; varlık–teklik teoremi birleşimin $I$ üzerinde özdeş sıfır olmasını zorlar. Böylece çözümler bağımlıdır.

:::

---

## Örnek Uçtan Uca

$$
y''-3y'+2y=0
$$

denkleminin çözümleri $y_1=e^x$, $y_2=e^{2x}$'tir.

$$
W(e^x,e^{2x})=
\det
\begin{bmatrix}
e^x & e^{2x}\\
e^x & 2e^{2x}
\end{bmatrix}
=e^x(2e^{2x})-e^{2x}(e^x)=2e^{3x}-e^{3x}=e^{3x}.
$$

$e^{3x}\neq0$ her $x$'te — **lineer bağımsız**.

::: {.notes}

$y''-3y'+2y=0$ denkleminin $y_1=e^x$ ve $y_2=e^{2x}$ tarafından sağlandığı doğrudan yerine yazılarak kontrol edilebilir. Denklemin sistematik çözümü sabit katsayılı denklemler konusunda ele alınacaktır. Wronskian hesaplanırken birinci satıra fonksiyonlar, ikinci satıra birinci türevleri yazılır: $W=e^x\cdot2e^{2x}-e^{2x}\cdot e^x=e^{3x}$. Bu ifade hiçbir $x$ değeri için sıfır olmadığından $y_1$ ve $y_2$ lineer bağımsızdır; dolayısıyla $\{e^x,e^{2x}\}$ bu denklem için bir temel çözüm kümesi adayıdır.

:::

---

## Sık Yapılan Hata: Genel Fonksiyonlara Genelleme

$$
f_1=x^2,\qquad f_2=x|x|
$$

fonksiyonları için $W(f_1,f_2)(x)\equiv0$'dır, **ancak** $f_1,f_2$ yine de lineer bağımsızdır.

::: {.notes}

Bir önceki teorem yalnızca aynı homojen lineer denklemin çözümleri için "Wronskian sıfır ⟺ bağımlı" denkliğini garanti eder. Bu denklik, rastgele fonksiyonlar için **geçerli değildir**. Klasik karşı örnek $f_1=x^2$ ve $f_2=x|x|$'tir: $x\geq0$ için $f_2=x^2=f_1$, $x<0$ için $f_2=-x^2=-f_1$; her iki parçada da Wronskian hesaplanırsa özdeş olarak sıfır çıkar. Buna rağmen $f_1$ ve $f_2$ lineer bağımsızdır, çünkü hiçbir sabit $c\neq0$ için $f_2=cf_1$ *tüm* gerçek eksende sağlanmaz.

Bu örnek, fonksiyonların standart biçimdeki katsayıları bütün $\mathbb{R}$ üzerinde sürekli olan aynı ikinci mertebe homojen lineer denklemin çözümleri olma koşulunu taşımadığı için teoremle çelişmez. Sonuç: $W\equiv0$ bulmak, yalnızca fonksiyonlar teoremin süreklilik koşullarını sağlayan aynı homojen denklemin çözümleriyse bağımlılık göstergesidir; genel fonksiyonlar için bu çıkarım yapılamaz.

:::

---

## Bir Nokta Neden Yeter?

Aynı homojen denklemin çözümleri için iki durum vardır:

$$
W(x_0)\neq0\ \text{bir noktada}
\quad\Longrightarrow\quad
W(x)\neq0\ \text{bütün }x\in I\text{ için},
$$

veya $W(x)\equiv0$ olur. Bu sonuç, katsayıların $I$ üzerindeki sürekliliğine ve varlık–tekliğe dayanır.

::: {.notes}

Wronskian testinde bütün noktaları ayrı ayrı taramak gerekmez. $W(x_0)\neq0$ bulunan tek bir nokta, çözümlerin lineer bağımsız olduğunu gösterir. Bağımsız çözümlerin Wronskian'ı aynı aralıkta başka bir noktada sıfır olsaydı, teoremin ters yönü onları bağımlı sayardı; bu bir çelişki olurdu.

Bu “ya hiçbir yerde sıfır değil ya da özdeş sıfır” ayrımı rastgele türevlenebilir fonksiyonlar için geçerli değildir. Sonucu kullanmadan önce fonksiyonların aynı homojen lineer denklemi sağladığı ve standart biçimdeki katsayıların incelenen aralıkta sürekli olduğu kontrol edilmelidir.

:::

---

## Pekiştirme

$$
y''+4y=0
$$

denkleminin çözümleri $y_1=\cos2x$, $y_2=\sin2x$'tir. Wronskian'ı hesaplayıp bağımsızlık sonucunu belirtiniz.

::: {.notes}

Bu hesap, yukarıdaki $e^x,e^{2x}$ örneğiyle aynı adımları izler: önce birinci türevler alınır ($y_1'=-2\sin2x$, $y_2'=2\cos2x$), ardından $2\times2$ determinant kurulur ve sadeleştirilir.

:::

---

## Sonraki Adım: Temel Çözüm Kümesi

Wronskian, çözümlerin birbirini tekrar edip etmediğini belirler. $n$'inci mertebeden bir homojen denklem için $n$ bağımsız çözüm bulunduğunda

$$
\{y_1,\ldots,y_n\}
$$

bir temel çözüm kümesi oluşturur ve bütün homojen çözümler bu kümenin lineer birleşimlerinden elde edilir.

::: {.notes}

Lineer bağımsızlık tek başına bir çözüm yöntemi değildir; bulunan çözümlerin genel çözümü kurmaya yetecek kadar farklı olup olmadığını söyler. $n$'inci mertebeden bir denklemde $n$ bağımsız çözüm, varlık–teklik teoreminin öngördüğü $n$ serbest başlangıç değerini temsil eder.

Bu ilişkinin devamı [[tp_temel-cozum-kumesi|Temel Çözüm Kümesi ve Genel Çözüm Yapısı]] notunda kurulur: Wronskian ile bağımsızlığı doğrulanan çözümlerden homojen genel çözüme, oradan da $y=y_h+y_p$ yapısına geçilir.

:::

---
