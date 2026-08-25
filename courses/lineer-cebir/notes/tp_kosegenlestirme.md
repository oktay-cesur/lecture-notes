---
title: "Köşegenleştirme"
subtitle: "MATE 213 — Lineer Cebir"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-11
execute:
  echo: false
---

## Öz vektörler Yeterli mi?

Tekrarlı öz değer bulundu.

> Yeterli sayıda bağımsız öz vektör var mı?

Ana problem:

> Matris daha basit temsil edilebilir mi?

::: {.notes}
Öz değer, öz vektör ve özuzay kavramları birlikte ele alındığında şu sınıra ulaşılır: Bir öz değerin tekrarlanması, o öz değer için aynı sayıda bağımsız öz vektör bulunduğunu garanti etmez. Bu eksikliğin hangi hesabı engellediği köşegenleştirme üzerinden görülebilir.

Aradığımız basit temsil köşegen bir matristir. Köşegen matris her koordinatı ötekilerden bağımsız ölçeklediği için çarpma ve kuvvet alma işlemleri doğrudan yapılır. Böyle bir temsile ulaşmak için koordinat yönlerini matrisin değiştirmediği öz vektör yönlerinden seçmeyi deneyeceğiz.
:::

---

## Taban Değişimiyle Bağlantı

Standart taban: $e_1,\ldots,e_n$

Öz vektör tabanı: $v_1,\ldots,v_n$

$$
x=P[x]_{\mathcal B}
$$

$$
[x]_{\mathcal B}=P^{-1}x
$$

::: {.notes}
Aynı vektör farklı tabanlarda farklı koordinat sütunlarıyla temsil edilir. $\mathcal B=(v_1,\ldots,v_n)$ tabanını seçip bu vektörleri $P=[v_1\mid\cdots\mid v_n]$ matrisinin sütunlarına yerleştirirsek, $P$ matrisi $\mathcal B$ koordinatlarını standart koordinatlara taşır. Bu nedenle standart koordinatları öz vektör tabanında okumak için $P^{-1}$ kullanılır.

Bu geçişin yapılabilmesi için $v_1,\ldots,v_n$ listesinin bir taban olması gerekir. Liste bağımsızsa $P$ tersinirdir; bağımlıysa aynı standart vektöre birden fazla koordinat listesi karşılık gelebilir ve $P^{-1}$ yoktur. Köşegenleştirmenin varlık koşulu tam burada ortaya çıkacaktır.
:::

---

## Öz vektörlerden Bir Taban

Her $i=1,\ldots,n$ için:

$$
Av_i=\lambda_i v_i
$$

Sütunları yan yana getirelim:

$$
P=[v_1\mid\cdots\mid v_n]
$$

::: {.notes}
Öz vektör seçiminin yararı, $A$'nın her $v_i$ doğrultusundaki etkisini tek bir sayıya indirmesidir. $A$, $v_i$ yönünü başka bir yöne çevirmek yerine onu $\lambda_i$ ile ölçekler. Bu yönler bir taban oluşturursa uzaydaki her vektörü onların lineer birleşimi olarak tek biçimde yazabiliriz.

Sütunların sırası köşegen $D$ matrisindeki öz değerlerin sırasını da belirler. $P$'nin birinci sütunu $v_1$ ise köşegendeki birinci sayı $\lambda_1$ olmalıdır. Sütunlarla öz değerleri farklı sıralarda eşleştirmek $AP=PD$ eşitliğini bozar.
:::

---

## $AP$ Ne Üretir?

$$
AP=A[v_1\mid\cdots\mid v_n]
$$

$$
=[Av_1\mid\cdots\mid Av_n]
$$

$$
=[\lambda_1v_1\mid\cdots\mid\lambda_nv_n]
$$

::: {.notes}
Bir matrisi sütunları yan yana yazılmış başka bir matrisle çarptığımızda, soldaki matris her sütuna ayrı ayrı etki eder. Bu yüzden $AP$ çarpımının $i$. sütunu $Av_i$ olur. Her $v_i$ öz vektör olduğundan bu sütunu $\lambda_i v_i$ biçiminde yazabiliriz.

Buradaki işlem, köşegenleştirme formülünün çıkış noktasıdır. Henüz bir ters matris kullanmadık ve sonuç için ezberlenecek bir eşitlik varsaymadık. Yalnız matris çarpımının sütun okumasını öz vektör tanımıyla birleştirdik.
:::

---

## Aynı Sütunları $PD$ Üretir

$$
D=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)
$$

$$
PD=[\lambda_1v_1\mid\cdots\mid\lambda_nv_n]
$$

$$
\boxed{AP=PD}
$$

::: {.notes}
Sağdan köşegen bir matrisle çarpma, soldaki matrisin sütunlarını köşegen elemanlarla ayrı ayrı ölçekler. Dolayısıyla $PD$ çarpımının $i$. sütunu da $\lambda_i v_i$ olur. $AP$ ve $PD$ aynı sırada aynı sütunlara sahip oldukları için iki matris eşittir.

Bu eşitlik $P$ tersinir olmasa bile yazılabilir. Fakat köşegen bir temsile geçip geri dönebilmek için $P^{-1}$ gerekir. Öz vektörlerin bulunması ile köşegenleştirmenin tamamlanması arasındaki ayrım böylece görünür hâle gelir.
:::

---

## Formül Buradan Çıkar

$P$ tersinir olsun:

$$
AP=PD
$$

$$
A=PDP^{-1}
$$

$$
\boxed{P^{-1}AP=D}
$$

::: {.notes}
$AP=PD$ eşitliğinin iki tarafını sağdan $P^{-1}$ ile çarparsak $A=PDP^{-1}$ sonucuna ulaşırız. Aynı eşitliğin solunu $P^{-1}$ ile çarpmak ise $P^{-1}AP=D$ verir. İkinci biçim, $A$'nın öz vektör tabanındaki matrisinin $D$ olduğunu doğrudan söyler.

Çarpım sağdan sola uygulanır. $P^{-1}$ standart koordinatları öz vektör tabanına çevirir, $D$ bu koordinatları ilgili öz değerlerle ölçekler, $P$ sonucu standart koordinatlara geri taşır. Bu sıra, formüldeki her çarpanın görevini belirler.
:::

---

## Örnek: Öz vektörleri Toplayalım

$$
A=\begin{bmatrix}4&1\\2&3\end{bmatrix}
$$

$$
\lambda_1=5,\quad v_1=\begin{bmatrix}1\\1\end{bmatrix}
$$

$$
\lambda_2=2,\quad v_2=\begin{bmatrix}1\\-2\end{bmatrix}
$$

::: {.notes}
Verilen öz değer ve öz vektör sonuçlarını doğrulayalım. $Av_1=(5,5)^T=5v_1$ ve $Av_2=(2,-4)^T=2v_2$ olur. Böylece iki vektör de tanım gereği öz vektördür.

$v_1$ ile $v_2$ birbirinin skaler katı değildir, dolayısıyla $\mathbb R^2$ içinde bağımsızdır. İki bağımsız vektör $\mathbb R^2$ için bir taban oluşturur. Bu doğrulama, kurulacak $P$ matrisinin tersinir olacağını hesaptan önce gösterir.
:::

---

## $P$ ve $D$'yi Kurmak

$$
P=\begin{bmatrix}1&1\\1&-2\end{bmatrix},\qquad
D=\begin{bmatrix}5&0\\0&2\end{bmatrix}
$$

$$
AP=PD=\begin{bmatrix}5&2\\5&-4\end{bmatrix}
$$

$$
\det(P)=-3\neq0
$$

::: {.notes}
$P$'nin ilk sütununa $v_1$'i, ikinci sütununa $v_2$'yi yerleştirdik. Aynı sırayı $D$'nin köşegeninde koruduk. Doğrudan çarpım, hem $AP$ hem de $PD$ için aynı matrisi vererek eşleştirmeyi kontrol ediyor.

$\det(P)=-3$ olduğundan $P$ tersinirdir. Tersi $P^{-1}=\frac13\begin{bmatrix}2&1\\1&-1\end{bmatrix}$ olur. Dolayısıyla bu örnekte hem $P^{-1}AP=D$ hem de $A=PDP^{-1}$ eşitlikleri geçerlidir.
:::

---

## Koordinatlarda Ne Değişti?

Öz vektör tabanında:

$$
[Ax]_{\mathcal B}=D[x]_{\mathcal B}
$$

$$
\begin{bmatrix}c_1\\c_2\end{bmatrix}
\longmapsto
\begin{bmatrix}5c_1\\2c_2\end{bmatrix}
$$

::: {.notes}
Standart koordinatlarda $A$, iki bileşeni birbirine karıştıran bir matris gibi görünür. Aynı dönüşümü $\mathcal B=(v_1,v_2)$ tabanında yazdığımızda birinci koordinat $5$ ile, ikinci koordinat $2$ ile çarpılır. Çünkü bu koordinatlar doğrudan öz vektör yönlerindeki payları ölçer.

Örneğin $[x]_{\mathcal B}=(3,-1)^T$ ise $x=3v_1-v_2=(2,5)^T$ olur. Köşegen temsil $[Ax]_{\mathcal B}=(15,-2)^T$ verir; standart koordinatlara dönüşte $Ax=15v_1-2v_2=(13,19)^T$ elde edilir. Doğrudan $A(2,5)^T=(13,19)^T$ hesabı aynı sonucu doğrular.
:::

---

## Köşegenleştirilebilirlik Koşulu

$A\in\mathbb R^{n\times n}$ için:

$$
\boxed{A\text{ köşegenleştirilebilir}
\iff n\text{ bağımsız öz vektör vardır}}
$$

Eşdeğer koşul: $P$ tersinir.

::: {.notes}
Bir matrisin köşegenleştirilebilir olması, bazı tersinir $P$ ve köşegen $D$ matrisleri için $A=PDP^{-1}$ yazılabilmesi demektir. Böyle bir yazım varsa $P$'nin sütunları $A$'nın bağımsız öz vektörleridir. Ters yönde, $n$ bağımsız öz vektör bulunduğunda onları $P$'de toplayarak aynı yazımı kurarız.

Farklı öz değerlere ait öz vektörler bağımsız olduğundan $n$ farklı öz değer, köşegenleştirilebilirlik için yeterlidir. Bu yeterli koşul zorunlu değildir; tekrarlı öz değeri bulunan bir matris de yeterli sayıda bağımsız öz vektör taşıyabilir. Karar için özuzay boyutlarına bakmamız gerekir.
:::

---

## Aynı Öz değerler, Farklı Sonuçlar

$$
C=\begin{bmatrix}2&0&1\\0&2&0\\0&0&3\end{bmatrix},\qquad
J=\begin{bmatrix}2&1&0\\0&2&0\\0&0&3\end{bmatrix}
$$

| Matris | $\dim E_2$ | Karar |
|---|---:|---|
| $C$ | $2$ | ✓ |
| $J$ | $1$ | ✗ |

::: {.notes}
Her iki matris de üst üçgenseldir; köşegenlerinden öz değerlerin $2,2,3$ olduğunu okuruz. Dolayısıyla $2$ öz değerinin cebirsel katlılığı iki, $3$ öz değerinin cebirsel katlılığı birdir. Yalnız öz değer listesine bakarsak iki matris arasında ayrım göremeyiz.

Ayrım $E_2=\{x:(A-2I)x=0\}$ özuzayında çıkar. $C$ için denklem yalnız $x_3=0$ koşulunu verir ve iki serbest değişken kalır. $J$ için ise $x_2=0$ ve $x_3=0$ koşulları kalır; bu yüzden $E_2$ yalnız bir bağımsız yön taşır.
:::

---

## İki Matrisin Kararı

$C$ için:

$$
E_2=\operatorname{span}\left\{
\begin{bmatrix}1\\0\\0\end{bmatrix},
\begin{bmatrix}0\\1\\0\end{bmatrix}\right\}
$$

$J$ için:

$$
E_2=\operatorname{span}\left\{
\begin{bmatrix}1\\0\\0\end{bmatrix}\right\}
$$

::: {.notes}
$C$ matrisinde $E_2$ iki bağımsız öz vektör sağlar. $3$ öz değeri için örneğin $(1,0,1)^T$ öz vektörünü eklediğimizde toplam üç bağımsız öz vektör elde ederiz. Bu üç sütun tersinir bir $P$ oluşturduğu için $C$ köşegenleştirilebilir.

$J$ matrisinde $2$ öz değeri iki kez görünmesine rağmen bu öz değerden yalnız bir bağımsız öz vektör gelir. $3$ öz değerinin özuzayı bir yön daha sağladığında toplam sayı ikide kalır. Üç boyutlu uzayda iki öz vektörle taban kurulamadığından $J$ köşegenleştirilemez.
:::

---

## Katlılıklar Nasıl Karşılaşır?

Her öz değer $\lambda$ için:

$m_\lambda$: cebirsel katlılık

$$
1\leq \dim E_\lambda\leq m_\lambda
$$

Köşegenleştirilebilirlik için:

$$
\sum_\lambda \dim E_\lambda=n
$$

::: {.notes}
Karakteristik polinomda bir öz değerin kaç kez kök olduğuna cebirsel katlılık denir. $E_\lambda$ özuzayının boyutu ise o öz değerden kaç bağımsız öz vektör seçebildiğimizi gösterir ve geometrik katlılık olarak adlandırılır. Geometrik katlılık cebirsel katlılığı aşamaz.

Her öz değer için iki katlılık eşitse özuzaylardan toplam $n$ bağımsız öz vektör seçilebilir. Bir öz değerde geometrik katlılık cebirsel katlılığın altında kalırsa eksik yön başka bir öz değerden tamamlanamaz. Bu durumda tersinir bir öz vektör matrisi kurulamaz.
:::

---

## Karar: Hesaba Devam mı?

$A$'nın öz değerleri $1,4,4$ olsun.

$$
\dim E_1=1,\qquad \dim E_4=2
$$

Köşegenleştirilebilir mi?

Hangi büyüklük kararı verir?

::: {.notes}
Evet, bu matris köşegenleştirilebilir. $E_1$ bir, $E_4$ iki bağımsız öz vektör sağlar; toplam sayı $1+2=3$ ile uzayın boyutuna eşittir. $4$ öz değerinin tekrarlanması tek başına engel oluşturmamıştır.

Kararı öz değerlerin tekrar sayısı değil, özuzayların toplam boyutu verir. Hesaba devam ederken $E_4$ için iki bağımsız vektör seçmek ve bunların yanına $E_1$'den bir vektör eklemek gerekir. Aynı özuzaydan birbirinin katı iki vektör seçmek toplam sayıyı artırmaz.
:::

---

## Sık Yapılan Hatalar

1. Tekrarlı öz değerde hemen vazgeçmek.
2. Öz vektörleri bağımsızlık sınamadan dizmek.
3. $P$ ile $D$ sırasını ayırmak.
4. $P^{-1}$ dönüş yönünü karıştırmak.
5. $A=P^{-1}DP$ yazmak.

::: {.notes}
Tekrarlı öz değer köşegenleştirmeyi engelleyebilir, fakat kararı özuzayın boyutu verir. Öz vektörleri $P$'ye yerleştirmeden önce toplamda $n$ bağımsız vektör seçildiği doğrulanmalıdır. Aynı öz vektörün skaler katlarını ayrı sütunlar olarak yazmak $P$'yi tekil yapar.

$P$'nin sütun sırası değiştirilebilir; buna karşılık $D$'deki öz değerlerin sırası da aynı değişikliği izlemelidir. $P^{-1}$ standart koordinatlardan öz vektör koordinatlarına, $P$ ters yönde taşır. Formülün yönü $AP=PD$ eşitliğinden çıkar; bu eşitliği yeniden kurmak, $A=P^{-1}DP$ biçimindeki sıra hatasını önler.
:::

---

## Kuvvetler Neden Kolaylaşır?

$$
A=PDP^{-1}
$$

$$
A^2=PD(P^{-1}P)DP^{-1}
$$

$$
\boxed{A^k=PD^kP^{-1}}
$$

::: {.notes}
İki $A$ çarpanını yan yana yazdığımızda ortada $P^{-1}P=I$ oluşur. Aynı sadeleşme her yeni çarpanda tekrarlandığı için yalnız $D$'nin kuvveti kalır. Bu çıkarım pozitif tam sayı $k$ için doğrudan geçerlidir.

Köşegen matrisin kuvveti, köşegen elemanların ayrı ayrı kuvvetleri alınarak bulunur: $D^k=\operatorname{diag}(\lambda_1^k,\ldots,\lambda_n^k)$. Böylece uzun matris çarpımları iki taban dönüşümü ile skaler kuvvet hesaplarına ayrılır. Matris köşegenleştirilemiyorsa bu formül için tersinir bir öz vektör matrisi yoktur.
:::

---

## Örnek: $A^3$

$$
D^3=\begin{bmatrix}125&0\\0&8\end{bmatrix}
$$

$$
A^3=PD^3P^{-1}
$$

$$
\boxed{A^3=\begin{bmatrix}86&39\\78&47\end{bmatrix}}
$$

::: {.notes}
Önceki örnekte $D$'nin köşegen elemanları $5$ ve $2$ idi. Üçüncü kuvvette bu sayılar $125$ ve $8$ olur; ardından aynı $P$ ve $P^{-1}$ matrisleriyle standart koordinatlara döneriz. Çarpım sonucu $A^3=\begin{bmatrix}86&39\\78&47\end{bmatrix}$ elde edilir.

Sonucu doğrudan çarpımla da denetleyebiliriz. $A^2=\begin{bmatrix}18&7\\14&11\end{bmatrix}$ bulunur ve $A^2A$ çarpımı yine $\begin{bmatrix}86&39\\78&47\end{bmatrix}$ verir. Büyük $k$ değerlerinde doğrudan yöntemde çarpım sayısı artarken köşegenleştirmede yalnız $5^k$ ile $2^k$ hesaplanır.
:::

---

## Matris Üsteline Kısa Bakış

Köşegenleştirilebilir $A$ için:

$$
e^A=Pe^DP^{-1}
$$

$$
e^D=\operatorname{diag}(e^{\lambda_1},\ldots,e^{\lambda_n})
$$

::: {.notes}
Köşegenleştirme, matris üstelini de aynı taban değişimi fikriyle sadeleştirir. $D$ köşegen olduğunda her öz vektör koordinatı kendi $e^{\lambda_i}$ katsayısıyla ölçeklenir. Sonuç $P$ ile standart koordinatlara geri taşınır.

Bu ifade özellikle lineer diferansiyel denklem sistemlerinin çözümlerinde kullanılır. Köşegen matris üzerinde bir matris fonksiyonu köşegen elemanlara ayrı ayrı uygulanabilir. Matris üstelinin ayrıntılı kuruluşundan yalnız köşegenleştirmeyle ilişkili bu özellik kullanılır.
:::

---

## Son Karar Soruları

1. $n$ farklı öz değer yeterli mi?
2. Tekrarlı öz değer engel mi?
3. $AP=PD$ neden doğru?
4. $P$ neden tersinir olmalı?
5. $D^k$ nasıl hesaplanır?

::: {.notes}
$n$ farklı öz değer, farklı öz değerlere ait öz vektörlerin bağımsızlığı nedeniyle yeterlidir. Tekrarlı öz değer ise ancak özuzay boyutu cebirsel katlılığın altında kaldığında engel oluşturur. Bu yüzden karakteristik polinomu bulduktan sonra tekrarlı köklerin özuzaylarını ayrıca hesaplarız.

$AP=PD$ eşitliğinin iki tarafında da $i$. sütun $\lambda_i v_i$'dir. $P$ tersinir olmalıdır, çünkü sütunlarının bir taban oluşturması ve koordinat geçişinin geri alınabilmesi gerekir. $D^k$ hesabında her köşegen eleman kendi $k$. kuvvetine yükseltilir.
:::

---

## Sonraki Adım

$$
\boxed{A=PDP^{-1}}
$$

- Öz vektörler yeni tabanı kurar.
- $D$ dönüşümü sadeleştirir.
- Özuzay boyutları kararı verir.

Sırada: dönüşümün matrisi.

::: {.notes}
Köşegenleştirmeyi uygun tabandaki temsil olarak kurduk. $n$ bağımsız öz vektör bulunduğunda $P$ bu tabanın vektörlerini taşır, $D$ ise dönüşümün o tabandaki köşegen matrisidir. Özuzay boyutlarının toplamı $n$'den küçük kaldığında bu temsil kurulamaz.

Köşegenleştirme, matris ile lineer dönüşüm arasındaki bağı da açıklar: aynı dönüşüm, seçilen tabana göre farklı matrislerle temsil edilir. Lineer dönüşümlerin çekirdeği, görüntüsü ve matris temsili bu koordinat fikri üzerinden bir araya gelir. Jordan normal formu ve simetrik matrislere özgü sonuçlar daha ileri sınıflandırmaların konusudur.
:::
