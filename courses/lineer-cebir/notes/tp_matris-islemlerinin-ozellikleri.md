---
title: "Matris İşlemlerinin Özellikleri"
subtitle: "MATE 213 — İlk Öğretim Bloğu"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-25
execute:
  echo: false
---

## Kapsam ve Kabuller

$$
A=[a_{ij}],\quad B=[b_{ij}],\quad C=[c_{ij}],
\qquad
\alpha,\beta\in\mathbb{R}
$$

- Bütün eşitlikler boyut uyumu varsayımı altında
- $0$: uygun şekilli sıfır matrisi
- $I_n$: $n\times n$ birim matris

::: {.notes}
Bu not, önceki notlarda tanımlanan dört işlemin cebirsel kurallarını bir arada topluyor: toplama, skalerle çarpma, matris–vektör çarpımı ve matris–matris çarpımı. Her kural önce genel biçimde yazılıyor, sonra küçük matrislerle sayısal olarak doğrulanıyor. Geçersiz kurallar için karşı örnek veriliyor.

Aşağıdaki bütün eşitliklerde boyutların işlemi tanımlı kılacak biçimde seçildiği varsayılıyor. Örneğin $A(B+C)=AB+AC$ eşitliğinde $B$ ile $C$ aynı şekilde olmalı, $A$ matrisinin sütun sayısı da bu şeklin satır sayısına eşit olmalıdır. $0$ ve $I$ sembolleri de her kullanımda ilgili işlemi tanımlı kılan şekilde okunur; $I_mA=AI_n=A$ eşitliğinde iki birim matrisin boyutu farklıdır.

Matris–vektör çarpımı ayrı bir başlık altında ele alınmıyor. Bir sütun vektörü $n\times1$ şekilli matris olduğundan, aşağıdaki kuralların hepsi $p=1$ durumunda doğrudan $Ax$ ifadesine uygulanır.
:::

---

## İşlemlerin Özeti

| İşlem | Eşleşen yapı | Sonuç |
|---|---|---|
| $A+B$ | aynı konumlar | aynı şekilli matris |
| $\alpha A$ | tek skaler–bütün elemanlar | aynı şekilli matris |
| $Ax$ | satırlar–tek katsayı sütunu | tek çıktı sütunu |
| $AB$ | satırlar–çoklu katsayı sütunları | çoklu çıktı matrisi |

::: {.notes}
Dört işlemin tanımlılık koşulu aynı soruyla bulunur: hangi bileşenler ya da eksenler eşleşiyor? Toplamada bütün konumlar bire bir eşleşir, bu nedenle şekiller tamamen aynı olmalıdır. Skalerle çarpmada eşleşme koşulu yoktur; tek sayı bütün elemanlara uygulanır. Çarpımda ise yalnız $A$ matrisinin sütun ekseni ile $B$ matrisinin satır ekseni eşleşir.

Koşulların farklı olmasının doğrudan bir sonucu var: $2\times3$ ve $3\times2$ şekilli iki matris toplanamaz, fakat uygun sırada çarpılabilir. Tersine, aynı şekilli iki dikdörtgen matris toplanabilir ama çarpılamaz.

Bu ayrım, aşağıdaki özellik listelerinin neden ayrı ayrı yazıldığını da açıklıyor. Toplamanın özellikleri eleman bazlı işlemlerden, çarpımın özellikleri ise çarp-topla yapısından geliyor.
:::

---

## Toplama ve Skalerle Çarpma

$$
A+B=B+A,
\qquad
(A+B)+C=A+(B+C)
$$

$$
A+0=A,
\qquad
A+(-A)=0
$$

$$
\alpha(A+B)=\alpha A+\alpha B,
\qquad
(\alpha+\beta)A=\alpha A+\beta A,
\qquad
\alpha(\beta A)=(\alpha\beta)A
$$

::: {.notes}
Bu eşitliklerin tümü eleman düzeyinde doğrudan doğrulanır. Örneğin değişme özelliği için $(A+B)_{ij}=a_{ij}+b_{ij}=b_{ij}+a_{ij}=(B+A)_{ij}$ yazmak yeterlidir; matrisler için geçerli olan şey, gerçek sayılarda toplamanın değişme özelliğinden geliyor. Aynı gerekçe birleşme ve dağılma eşitlikleri için de geçerlidir.

$0$ matrisi toplamanın etkisiz elemanı, $-A$ ise $A$ matrisinin toplamsal tersidir. Bu iki nesnenin varlığı, $\mathbb{R}^{m\times n}$ kümesinin toplama ve skalerle çarpma altında kapalı bir yapı oluşturmasını sağlar. Vektör uzayı tanımını gördüğümüzde bu listenin tam olarak aksiyomlarla örtüştüğünü fark edeceksiniz.

Çarpımda durum farklıdır. Aşağıdaki listede değişme özelliği yer almıyor ve sadeleştirme kuralı da geçerli değil. Farkın kaynağı, çarpımın eleman bazlı bir işlem olmamasıdır.
:::

---

## Çarpımın Cebirsel Özellikleri

$$
(AB)C=A(BC)
$$

$$
A(B+C)=AB+AC,
\qquad
(A+B)C=AC+BC
$$

$$
\alpha(AB)=(\alpha A)B=A(\alpha B)
$$

$$
A0=0,
\qquad
0A=0
$$

::: {.notes}
Bu liste, matris çarpımının gerçek sayılardaki çarpımdan hangi yönlerden ayrıldığını belirler. Birleşme, dağılma ve skalerle uyum korunur. Korunmayan iki temel özellik değişme ve sadeleştirmedir; ikisini de ayrıca ele alacağız.

Dağılma iki ayrı eşitlik olarak yazılıyor. $A(B+C)$ ile $(B+C)A$ farklı ifadelerdir ve soldan dağıtmakla sağdan dağıtmak birbirinin yerine kullanılamaz. Sayılarda tek bir dağılma kuralı yazmak yeterliyken burada iki kural gerekiyor, çünkü çarpanların sırası serbest değil.

Sıfır matrisiyle çarpım kuralı da göründüğünden dardır. $A0=0$ eşitliği doğrudur, fakat tersi yönde bir çıkarım yapılamaz: $AB=0$ olması $A=0$ ya da $B=0$ olmasını gerektirmez. Bu duruma birazdan sayısal bir karşı örnekle geleceğiz.
:::

---

## Birleşme Özelliğinin Doğrulaması

$$
\bigl((AB)C\bigr)_{ij}
=\sum_{k}\Bigl(\sum_{\ell}a_{i\ell}b_{\ell k}\Bigr)c_{kj}
$$

$$
=\sum_{\ell}a_{i\ell}\Bigl(\sum_{k}b_{\ell k}c_{kj}\Bigr)
=\bigl(A(BC)\bigr)_{ij}
$$

::: {.notes}
Birleşme özelliği tek satırlık bir kabul değil, indis hesabıyla gösterilebilen bir sonuçtur. Sol taraftaki $(i,j)$ elemanı yazılırken önce $AB$ çarpımının $(i,k)$ elemanı $\sum_\ell a_{i\ell}b_{\ell k}$ olarak açılır, sonra $C$ matrisiyle çarpım için $k$ üzerinden toplanır.

İkinci adımda iki sonlu toplamın sırası değiştirilir. Bu adım geçerlidir çünkü toplanan terim sayısı sonludur ve her terim $a_{i\ell}b_{\ell k}c_{kj}$ biçiminde üç skalerin çarpımıdır. Sıra değiştikten sonra parantez içinde kalan ifade $(BC)_{\ell j}$ elemanıdır; dolayısıyla sağ taraf $A(BC)$ çarpımının $(i,j)$ elemanına eşittir.

Bütün $(i,j)$ çiftleri için eşitlik sağlandığından iki matris eşittir. Aynı yöntem dağılma eşitlikleri için de kullanılır; orada toplamı ayırmak yeterli olduğundan hesap daha kısadır.
:::

---

## Sayısal Doğrulama: Birleşme

$$
A=\begin{bmatrix}1&2\\0&3\end{bmatrix},
\quad
B=\begin{bmatrix}2&1\\1&0\end{bmatrix},
\quad
C=\begin{bmatrix}1&0\\2&1\end{bmatrix}
$$

$$
AB=\begin{bmatrix}4&1\\3&0\end{bmatrix}
\ \Longrightarrow\
(AB)C=\begin{bmatrix}6&1\\3&0\end{bmatrix}
$$

$$
BC=\begin{bmatrix}4&1\\1&0\end{bmatrix}
\ \Longrightarrow\
A(BC)=\begin{bmatrix}6&1\\3&0\end{bmatrix}
$$

::: {.notes}
Soldan hesapta önce $AB$ bulunur: birinci satır $(1,2)$ ile birinci sütun $(2,1)$ çarpılıp toplandığında $1(2)+2(1)=4$, ikinci sütun $(1,0)$ ile $1(1)+2(0)=1$ elde edilir. İkinci satır $(0,3)$ için değerler $3$ ve $0$ çıkar. Bulunan $AB$ matrisi $C$ ile çarpıldığında $(1,1)$ elemanı $4(1)+1(2)=6$ olur.

Sağdan hesapta önce $BC$ bulunur ve $A$ ile çarpılır: $(1,1)$ elemanı $1(4)+2(1)=6$ çıkar. İki yol da aynı matrisi veriyor, ama ara sonuçlar farklıdır. $AB$ ile $BC$ matrisleri birbirine eşit değil; eşit olan yalnız üçlü çarpımın sonucudur.

Ara sonuçların farklı olması hesap yükü açısından işe yarar. Boyutlar eşit olmadığında iki yoldan biri belirgin biçimde daha az çarpma gerektirebilir; örneğin $A$ matrisi $100\times2$, $B$ matrisi $2\times100$ ve $C$ matrisi $100\times1$ ise $A(BC)$ hesabı $(AB)C$ hesabından çok daha kısadır.
:::

---

## Sayısal Doğrulama: Dağılma

$$
B+C=\begin{bmatrix}3&1\\3&1\end{bmatrix}
\ \Longrightarrow\
A(B+C)=\begin{bmatrix}9&3\\9&3\end{bmatrix}
$$

$$
AB=\begin{bmatrix}4&1\\3&0\end{bmatrix},
\qquad
AC=\begin{bmatrix}5&2\\6&3\end{bmatrix}
$$

$$
AB+AC=\begin{bmatrix}9&3\\9&3\end{bmatrix}
$$

::: {.notes}
Aynı üç matrisle dağılma eşitliğini doğruluyoruz. Soldan hesapta önce $B+C$ toplamı alınır; toplama eleman bazlı olduğu için $(1,1)$ elemanı $2+1=3$ olur. Bulunan matris $A$ ile çarpıldığında $(1,1)$ elemanı $1(3)+2(3)=9$ çıkar.

Sağdan hesapta iki çarpım ayrı ayrı yapılır. $AC$ matrisinin $(1,1)$ elemanı $1(1)+2(2)=5$, $AB$ matrisininki $4$'tür; toplamları $9$ eder. Bütün konumlarda aynı eşleşme sağlandığı için iki taraf eşittir.

Bu eşitliğin sağdan biçimi ayrıca kontrol edilmelidir. $(B+C)A$ hesabı $A(B+C)$ hesabına eşit değildir; burada $B+C$ ile $A$ matrislerinin çarpım sırası değiştiğinden sonuç da değişir. Dağılma kuralı sırayı serbest bırakmaz, yalnız parantezi açar.
:::

---

## Birim ve Sıfır Matrisi

$$
I_mA=AI_n=A
\qquad (A:m\times n)
$$

$$
\begin{bmatrix}1&0\\0&1\end{bmatrix}
\begin{bmatrix}1&2\\0&3\end{bmatrix}
=\begin{bmatrix}1&2\\0&3\end{bmatrix}
$$

$$
A0=0,
\qquad
0A=0
$$

::: {.notes}
Birim matris çarpımın etkisiz elemanıdır, fakat toplamadaki $0$ matrisinden farklı olarak sağdan ve soldan farklı boyutlarda kullanılır. $A$ matrisi $m\times n$ şekilliyse soldan çarpan $I_m$, sağdan çarpan $I_n$ olmalıdır. Kare olmayan bir matris için bu iki birim matris aynı nesne değildir.

$I_mA=A$ eşitliği tanımdan çıkar. $I_m$ matrisinin $i$. satırında yalnız $i$. konumda $1$, diğer konumlarda $0$ vardır; çarp-topla hesabında bu satır $A$ matrisinin yalnız $i$. satırını seçer, kalan terimler sıfırla çarpıldığı için düşer.

Sıfır matrisi çarpımı yutar. Ancak bu kuralın tersi geçerli değildir; $AB=0$ eşitliğinden çarpanlar hakkında sonuç çıkarılamaz. Sıradaki karşı örnek bunu gösteriyor.
:::

---

## Sıfır Bölen: $AB=0$ Ne Demek Değildir?

$$
A=\begin{bmatrix}1&1\\1&1\end{bmatrix},
\qquad
B=\begin{bmatrix}1&1\\-1&-1\end{bmatrix}
$$

$$
AB=\begin{bmatrix}0&0\\0&0\end{bmatrix},
\qquad
A\ne0,\quad B\ne0
$$

::: {.notes}
Çarpımın $(1,1)$ elemanı $1(1)+1(-1)=0$, $(1,2)$ elemanı $1(1)+1(-1)=0$ olur; ikinci satır da aynı değerleri verir çünkü $A$ matrisinin iki satırı aynıdır. Sonuç sıfır matrisidir, oysa çarpanların hiçbiri sıfır değildir.

Gerçek sayılarda $ab=0$ eşitliği çarpanlardan birinin sıfır olmasını gerektirir; bu, denklem çözerken sürekli kullandığımız bir çıkarımdır. Matrislerde aynı çıkarımı yapmak hatalıdır. Örneğin $A^2=A$ denkleminden $A(A-I)=0$ elde edilir, fakat buradan $A=0$ ya da $A=I$ sonucu çıkmaz.

Karşı örnekteki iki matrisin ortak yanı sütunlarının birbirinin katı olmasıdır. Bu durumun ne anlama geldiğini lineer bağımsızlık ve rank konularında göreceğiz; şimdilik kuralın geçersiz olduğunu bilmek yeterli.
:::

---

## Sadeleştirme Kuralı Geçersizdir

Skalerlerde:

$$
xa=xb\Longrightarrow x(a-b)=0.
$$

$x\neq0$ ve sıfır çarpım özelliği nedeniyle $a-b=0$, dolayısıyla $a=b$.

Matrislerde aynı adım:

$$
A=\begin{bmatrix}1&1\\1&1\end{bmatrix},
\qquad
B=\begin{bmatrix}1&0\\0&1\end{bmatrix},
\qquad
C=\begin{bmatrix}0&1\\1&0\end{bmatrix}
$$

$$
AB=AC=\begin{bmatrix}1&1\\1&1\end{bmatrix},
\qquad
B\ne C
$$

$$
A(B-C)=0,\qquad B-C\ne0.
$$

::: {.notes}
Skaler durumda $xa=xb$ eşitliğini $x(a-b)=0$ biçimine getiririz. Skalerlerin sıfır çarpım özelliği, $x\neq0$ iken $a-b=0$ olmasını zorlar; böylece $a=b$ çıkar. “$x$ ile sadeleştirme” dediğimiz adımın gerekçesi budur.

Matrislerde $A(B-C)=0$ eşitliği, $A\neq0$ ve $B-C\neq0$ iken de gerçekleşebilir; sıfır bölen örneği bunu gösterir. Buradaki $A$, bazı sıfır olmayan girdileri sıfıra götürür. Bu yüzden $AB=AC$ eşitliğinden yalnız $A\neq0$ koşuluyla $B=C$ çıkaramayız.

Sadeleştirmenin ne zaman güvenli olduğu, ileride tanımlayacağımız ters matris kavramına bağlıdır: çarpımı geri alan bir $A^{-1}$ matrisi varsa eşitliğin iki tarafı soldan $A^{-1}$ ile çarpılıp $B=C$ elde edilir. Böyle bir geri alma matrisinin hangi koşullarda var olduğunu ters matris ve tersinirlik notunda kuracağız; şimdilik kaydedilecek olan, sadeleştirmenin genel bir kural olmadığıdır.
:::

---

## Transpoz ve Çarpım

$$
(A+B)^T=A^T+B^T,
\qquad
(\alpha A)^T=\alpha A^T,
\qquad
(A^T)^T=A
$$

$$
\boxed{(AB)^T=B^TA^T}
$$

> Transpoz alındığında çarpanların sırası ters döner.

::: {.notes}
İlk üç eşitlik eleman bazlı işlemlerle uyumludur ve doğrudan tanımdan çıkar. Dördüncü eşitlik ise sırayı ters çevirir. Nedeni boyutlarda görünür: $A$ matrisi $m\times n$, $B$ matrisi $n\times p$ ise $AB$ çarpımı $m\times p$, transpozu $p\times m$ şekillidir. Sağ tarafta $B^T$ matrisi $p\times n$, $A^T$ matrisi $n\times m$ olduğundan çarpım $p\times m$ çıkar ve şekiller uyar.

Sırayı korumaya çalışmak çoğu zaman tanımsız bir ifade üretir. $A^TB^T$ çarpımı $(n\times m)(p\times n)$ biçiminde olur ve $m=p$ değilse hesaplanamaz bile. Hesaplanabildiği durumlarda da genel olarak $(AB)^T$ matrisine eşit değildir.

Eleman düzeyinde gerekçe kısadır: $\bigl((AB)^T\bigr)_{ij}=(AB)_{ji}=\sum_k a_{jk}b_{ki}$ olur. Sağ tarafta ise $(B^TA^T)_{ij}=\sum_k (B^T)_{ik}(A^T)_{kj}=\sum_k b_{ki}a_{jk}$ elde edilir; iki toplam aynı terimlerden oluşur.
:::

---

## Kısa Örnekler: Transpoz

$A=\begin{bmatrix}1&2\\3&4\end{bmatrix}$,
$B=\begin{bmatrix}0&5\\-1&2\end{bmatrix}$ için:

$$
(A+B)^T=
\begin{bmatrix}1&2\\7&6\end{bmatrix}
=A^T+B^T
$$

$$
(2A)^T=
\begin{bmatrix}2&6\\4&8\end{bmatrix}
=2A^T
$$

$$
(A^T)^T=A.
$$

::: {.notes}
İlk örnekte önce toplar sonra transpoz alırsak da, iki matrisi ayrı ayrı transpozlayıp toplarsak da aynı matris çıkar. İkinci örnekte skaler $2$ elemanlarla birlikte taşınır; transpoz yalnız konumları değiştirir. Üçüncü özellik, satır ve sütunları iki kez değiştirmenin başlangıç düzenini geri getirdiğini söyler.

Bu üç özellik eleman bazlı işlemlerden gelir ve çarpan sırası sorunu oluşturmaz. Çarpım özelliği ise farklıdır: iki dönüşümün sırası, transpozdan sonra tersine döner. Sonraki sayısal doğrulama bu dördüncü özelliği ayrı olarak sınar.
:::

---

## Sayısal Doğrulama: Transpoz

$$
AB=\begin{bmatrix}4&1\\3&0\end{bmatrix}
\ \Longrightarrow\
(AB)^T=\begin{bmatrix}4&3\\1&0\end{bmatrix}
$$

$$
B^TA^T=
\begin{bmatrix}2&1\\1&0\end{bmatrix}
\begin{bmatrix}1&0\\2&3\end{bmatrix}
=\begin{bmatrix}4&3\\1&0\end{bmatrix}
$$

$$
A^TB^T=\begin{bmatrix}2&1\\7&2\end{bmatrix}
$$

::: {.notes}
Notun başındaki $A=\begin{bmatrix}1&2\\0&3\end{bmatrix}$ ve $B=\begin{bmatrix}2&1\\1&0\end{bmatrix}$ matrislerine dönüyoruz. $B^T$ matrisi $B$ simetrik olduğu için kendisine eşittir; $A^T$ matrisi ise $\begin{bmatrix}1&0\\2&3\end{bmatrix}$ olur. Çarpımın $(1,1)$ elemanı $2(1)+1(2)=4$, $(1,2)$ elemanı $2(0)+1(3)=3$ çıkar ve sonuç $(AB)^T$ matrisine eşittir.

Ters sırada yazıldığında sonuç değişir. $A^TB^T$ çarpımının $(2,1)$ elemanı $2(2)+3(1)=7$ olur, oysa $(AB)^T$ matrisinin aynı konumundaki değer $1$'dir. Burada iki matris de $2\times2$ olduğu için çarpım tanımlıdır; eşit olmamaları boyut sorunundan değil, sıranın kendisinden kaynaklanıyor.

Kare olmayan matrislerde hata daha erken yakalanır. $A$ matrisi $2\times3$, $B$ matrisi $3\times2$ ise $A^TB^T$ çarpımı $(3\times2)(2\times3)$ biçiminde olur ve $3\times3$ bir matris verir; $(AB)^T$ ise $2\times2$ şekillidir. Boyut kontrolü bu durumda yanlış sırayı doğrudan gösterir.
:::

---

## Matrisin Kuvvetleri

$$
A^0=I,
\qquad
A^k=\underbrace{AA\cdots A}_{k\ \text{çarpan}}
\qquad (A\ \text{kare})
$$

$$
A=\begin{bmatrix}1&1\\0&1\end{bmatrix}
\ \Longrightarrow\
A^2=\begin{bmatrix}1&2\\0&1\end{bmatrix},
\quad
A^3=\begin{bmatrix}1&3\\0&1\end{bmatrix}
$$

$$
N=\begin{bmatrix}0&1\\0&0\end{bmatrix}
\ \Longrightarrow\
N^2=0
$$

::: {.notes}
Kuvvet yalnız kare matrisler için tanımlıdır; $A$ matrisi kare değilse $AA$ çarpımının iç boyutları uyuşmaz. Birleşme özelliği sayesinde çarpanların hangi sırayla gruplandığı önemsizdir, bu yüzden $A^{k+\ell}=A^kA^\ell$ eşitliği geçerlidir.

İlk örnekte üst köşedeki eleman her adımda $1$ artıyor; tümevarımla $A^k=\begin{bmatrix}1&k\\0&1\end{bmatrix}$ olduğu gösterilebilir. İkinci örnekte ise sıfırdan farklı bir matrisin karesi sıfır çıkıyor. Sayılarda $x^2=0$ denklemi yalnız $x=0$ çözümünü verirken matrislerde durum farklıdır; bu, sıfır bölen örneğinin kuvvet biçimindeki karşılığıdır.

Değişme özelliğinin olmaması kuvvet hesaplarında da görünür. $(AB)^2=ABAB$ ifadesi ancak $AB=BA$ olduğunda $A^2B^2$ biçiminde toplanabilir. Aynı nedenle $(A+B)^2=A^2+AB+BA+B^2$ olur; orta terimler genel olarak $2AB$ vermez.
:::

---

## Sık Yapılan Hatalar

1. $AB=0$ eşitliğinden bir çarpanı sıfır saymak.
2. $AB=AC$ eşitliğinde $A$ ile sadeleştirmek.
3. $(AB)^T$ yerine $A^TB^T$ yazmak.
4. $(A+B)^2$ açılımında $2AB$ yazmak.
5. Dağılmayı sıra değiştirmek için kullanmak.

::: {.notes}
Birinci ve ikinci hatalar aynı kaynaktan gelir: gerçek sayılardaki çarpımın tersinir olmasına dayanan çıkarımlar matrislere taşınıyor. İkisi de ancak ilgili matrisin tersi varsa geçerlidir ve bu koşul genel olarak sağlanmaz.

Üçüncü hata sıra değişimini atlar. Boyutlar farklıysa yanlış ifade zaten tanımsız çıkar ve hata hemen görünür; kare matrislerde ise hesap tamamlanır ve yanlış sonuç fark edilmeyebilir. Dördüncü hata da benzerdir: $AB$ ile $BA$ genel olarak eşit olmadığı için orta terimler birleştirilemez.

Beşinci hata dağılma kuralının ne söylediğini genişletir. $A(B+C)=AB+AC$ eşitliği parantezi açar, çarpanların sırasını serbest bırakmaz. $(B+C)A$ ifadesi açıldığında $BA+CA$ elde edilir ve bu genel olarak $AB+AC$ toplamına eşit değildir.
:::

---

## Karar Soruları

Hesap yapmadan karar verin:

1. $A:3\times4$ için $A^2$ tanımlı mı?
2. $AB=BA$ her zaman yanlış mı?
3. $A\ne0$, $AB=0$ ise $B=0$ mı?
4. $(ABC)^T$ nasıl yazılır?

::: {.notes}
Birinci soruda $A^2=AA$ çarpımı $(3\times4)(3\times4)$ biçiminde olur; iç boyutlar $4$ ve $3$ uyuşmadığı için tanımsızdır. Kuvvet yalnız kare matrislerde tanımlıdır.

İkinci soruda cevap hayırdır. Değişme özelliği genel olarak geçerli değildir, fakat özel çiftlerde sağlanabilir: $A$ ile $I$, $A$ ile $A^k$, ya da iki köşegen matris her zaman yer değiştirebilir. "Genel olarak geçerli değil" ile "hiçbir zaman geçerli değil" farklı ifadelerdir.

Üçüncü soruda cevap yine hayırdır; karşı örneği bu notta gördük. Dördüncü soruda kural iki kez uygulanır: $(ABC)^T=\bigl((AB)C\bigr)^T=C^T(AB)^T=C^TB^TA^T$. Sıra baştan sona tersine döner.
:::

---

## Sonraki Adım: Bilinen Sonuçtan Aranan Girdiye

Elimizde:

$$
\text{tanım}+\text{mekanizma}+\text{cebirsel kurallar}
$$

- $Ax$ ile çıktıyı hesaplamayı biliyoruz.
- Sıradaki soru: çıktı biliniyorsa girdi nasıl bulunur?

::: {.notes}
Bu notta matris işlemlerinin cebirsel yapısını tamamladık. Toplama ve skalerle çarpma sayılardaki karşılıklarıyla aynı kuralları izliyor; çarpım ise birleşme, dağılma ve skalerle uyumu koruyup değişme ile sadeleştirmeyi kaybediyor. Kaybedilen iki kuralın karşı örneklerini sayısal olarak gördük.

Geçerken bir kavramı yalnız adıyla analım: $x\mapsto Ax$ kuralı, bir girdi vektörünü bir çıktı vektörüne götüren bir dönüşüm olarak da okunabilir. Bu okuma dersin son haftasındaki lineer dönüşümler konusunun çıkış noktasıdır; burada ayrıntısına girmiyoruz.

Bir sonraki notta $Ax=b$ ilişkisini ters yönden okuyacağız: katsayılar ve sonuç biliniyorken bu sonucu üreten girdiyi arayacağız. Lineer denklem sistemleri tam olarak bu sorudan doğuyor ve buradaki cebirsel kurallar o çözümleme boyunca sürekli kullanılacak.
:::
