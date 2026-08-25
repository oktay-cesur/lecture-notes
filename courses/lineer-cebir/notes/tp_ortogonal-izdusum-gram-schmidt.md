---
title: "Ortogonal İzdüşüm ve Gram-Schmidt"
subtitle: "MATE 213 — Lineer Cebir"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-11
execute:
  echo: false
---

## Dik Doğrultular Ne Sağlar?

Önceki gözlem:

> Dik doğrultuların katsayıları bağımsızdır.

Ana soru:

> En yakın alt uzay vektörü hangisi?

::: {.notes}
İç çarpım, norm, açı ve ortogonallik kavramları bir vektörün başka bir vektöre ne kadar yöneldiğini ölçmemizi sağlar. Bir vektör dik doğrultular boyunca ayrıldığında her doğrultunun katsayısı ötekilerden bağımsız hesaplanabilir. Bu gözlem izdüşüm hesabının temelini oluşturur.

Elimizdeki vektör çoğu zaman ilgilendiğimiz doğru ya da alt uzay üzerinde bulunmaz. Bu durumda o alt uzayın içinden vektöre en yakın noktayı ararız. Aradaki farkın hangi yönde olması gerektiği belirlendiğinde izdüşüm ve Gram–Schmidt yöntemleri aynı diklik koşulundan çıkar.
:::

---

## Bir Doğru Üzerinde Arama

$u\neq0$ doğrultusu verilsin.

$$
v=p+e,\qquad p=cu
$$

En yakınlık koşulu:

$$
e\perp u
$$

::: {.notes}
$u$ sıfırdan farklı bir vektör olsun. $u$'nun gerdiği doğru üzerindeki her aday $cu$ biçimindedir; dolayısıyla aradığımız $p$ vektörünü $p=cu$ diye yazarız. $v-p$ farkına hata vektörü $e$ adını veriyoruz.

Doğru üzerinde ilerlediğimizi düşünelim. Hata vektörünün doğru boyunca bir bileşeni kalsaydı, o bileşenin yönünde biraz ilerleyerek $v$'ye daha çok yaklaşabilirdik. En yakın noktada bu iyileştirme imkânı kalmaz; bu nedenle $e$ ile $u$ birbirine dik olmalıdır. Bu geometrik koşul, bilinmeyen $c$ katsayısını belirleyen tek denklemi verir.
:::

---

## Katsayıyı Diklik Belirler

$$
\langle v-cu,u\rangle=0
$$

$$
\langle v,u\rangle-c\langle u,u\rangle=0
$$

$$
\boxed{\operatorname{proj}_u(v)=
\frac{\langle v,u\rangle}{\langle u,u\rangle}u}
$$

::: {.notes}
$e=v-cu$ olduğundan $e\perp u$ koşulunu $\langle v-cu,u\rangle=0$ biçiminde yazarız. İç çarpımın lineerliği ikinci eşitliği verir. $u\neq0$ olduğu için $\langle u,u\rangle=\|u\|^2$ pozitiftir ve bu sayıya bölebiliriz.

Çözdüğümüz katsayı $c=\langle v,u\rangle/\langle u,u\rangle$ olur. Bu katsayıyı $u$ ile çarptığımızda $v$'nin $u$ doğrultusundaki ortogonal izdüşümünü elde ederiz. Pay, $v$'nin $u$ yönündeki uyumunu ölçerken payda $u$'nun uzunluğunun seçilen ölçeğe etkisini giderir; $u$'yu sıfırdan farklı bir sayıyla çarpmak izdüşüm vektörünü değiştirmez.
:::

---

## Hızlı İzdüşüm Hesabı

$$
v=\begin{bmatrix}4\\2\end{bmatrix},\qquad
u=\begin{bmatrix}1\\1\end{bmatrix}
$$

$$
p=\frac{6}{2}u=
\begin{bmatrix}3\\3\end{bmatrix}
$$

$$
e=v-p=\begin{bmatrix}1\\-1\end{bmatrix},\qquad
\langle e,u\rangle=0
$$

::: {.notes}
İç çarpımlar $\langle v,u\rangle=4+2=6$ ve $\langle u,u\rangle=1+1=2$ verir. Katsayı $c=3$ olduğundan doğru üzerindeki adayımız $p=(3,3)^T$ olur. Sonucun doğru üzerinde olduğunu, iki bileşeninin eşit olmasından da görebiliriz.

Hata $e=(1,-1)^T$ çıkar ve $e$ ile $u$'nun iç çarpımı sıfırdır. Bu son kontrol, formülde pay ile paydayı karıştırma gibi hesap hatalarını yakalar. Bir izdüşüm hesabında hem $p\in\operatorname{span}\{u\}$ hem de $v-p\perp u$ sağlanmalıdır.
:::

---

## Neden En Yakın Nokta?

Başka bir aday: $q=du$.

$$
v-q=e+(c-d)u
$$

$$
\|v-q\|^2=\|e\|^2+(c-d)^2\|u\|^2
$$

$$
\boxed{\|v-q\|\geq\|v-p\|}
$$

::: {.notes}
İzdüşümün en yakın nokta olduğunu Pisagor bağıntısıyla doğrulayabiliriz. Doğru üzerindeki başka bir $q=du$ noktası için $v-q=(v-cu)+(c-d)u=e+(c-d)u$ olur. İlk terim $u$'ya dik, ikinci terim ise $u$'nun bir katıdır; dolayısıyla bu iki terim birbirine diktir.

Normun karesi bu yüzden iki karenin toplamına ayrılır. İlk terim $\|e\|^2=\|v-p\|^2$ sabittir, ikinci terim ise negatif olamaz. Eşitlik ancak $d=c$ iken sağlanır; böylece $p$, doğru üzerinde $v$'ye en yakın tek noktadır.
:::

---

## Birden Fazla Dik Doğrultu

$u_1,\ldots,u_k$ ortogonal olsun.

$$
p=c_1u_1+\cdots+c_ku_k
$$

$$
\boxed{c_i=\frac{\langle v,u_i\rangle}
{\langle u_i,u_i\rangle}}
$$

Her katsayı ayrı hesaplanır.

::: {.notes}
Bir alt uzayın ortogonal tabanı $u_1,\ldots,u_k$ olsun. $v$'nin bu alt uzaydaki bileşenini taban vektörlerinin lineer birleşimi olarak yazarız. Hatanın alt uzaya dik olması, özellikle her $u_i$ taban vektörüne dik olmasını gerektirir.

$\langle v-p,u_i\rangle=0$ denkleminde $p$ yerine toplamı yazdığımızda, $j\neq i$ için $\langle u_j,u_i\rangle=0$ olur. Denklemde yalnız $c_i\langle u_i,u_i\rangle$ terimi kalır ve ilgili katsayı tek başına çözülür. Taban ortogonal olmasaydı aynı denklem bütün katsayıları birlikte içerir, bu yüzden bir denklem sistemi çözmemiz gerekirdi.
:::

---

## Ortogonal Tabanla Örnek

$$
u_1=\begin{bmatrix}1\\1\\0\end{bmatrix},\quad
u_2=\begin{bmatrix}1\\-1\\0\end{bmatrix},\quad
v=\begin{bmatrix}3\\1\\2\end{bmatrix}
$$

$$
c_1=2,\qquad c_2=1
$$

$$
p=2u_1+u_2=\begin{bmatrix}3\\1\\0\end{bmatrix}
$$

::: {.notes}
$u_1$ ile $u_2$'nin iç çarpımı $1-1=0$ olduğundan bu iki vektör ortogonaldir. İlk katsayı $\langle v,u_1\rangle/\langle u_1,u_1\rangle=4/2=2$, ikinci katsayı ise $\langle v,u_2\rangle/\langle u_2,u_2\rangle=2/2=1$ çıkar. Katsayılar birbirinin denklemine hiç girmeden bulunur.

Elde edilen $p=(3,1,0)^T$, $u_1$ ve $u_2$'nin gerdiği $xy$ düzlemi üzerindedir. Hata $e=v-p=(0,0,2)^T$ olup iki taban vektörüne de diktir. Bu örnekte izdüşümün üçüncü bileşeni atması geometriden görülebilir; iç çarpım hesabı aynı sonucu her ortogonal taban için düzenli biçimde üretir.
:::

---

## Taban Ortogonal Değilse?

$$
a_1=\begin{bmatrix}1\\0\\1\end{bmatrix},\qquad
a_2=\begin{bmatrix}1\\1\\1\end{bmatrix}
$$

$$
\langle a_1,a_2\rangle=2\neq0
$$

Katsayılar birbirine karışır.

::: {.notes}
$a_1$ ve $a_2$ lineer bağımsızdır, dolayısıyla gerdikleri düzlem için geçerli bir taban oluştururlar. İç çarpımları sıfır olmadığı için bu taban ortogonal değildir. $v=c_1a_1+c_2a_2+e$ ve $e\perp a_1,a_2$ yazıldığında iki diklik denkleminin her birinde hem $c_1$ hem $c_2$ bulunur.

Alt uzayın kendisinde bir sorun yoktur; güçlük seçtiğimiz doğrultuların birbirine eğik olmasından gelir. Aynı düzlem için dik doğrultular üretirsek bağımsız katsayı hesabına geri döneriz. Gram–Schmidt süreci tam olarak bu dönüşümü, her adımda daha önce üretilen doğrultulara izdüşüm çıkararak yapar.
:::

---

## Gram–Schmidt Mekanizması

İlk yön korunur:

$$
u_1=a_1
$$

Sonraki yönler temizlenir:

$$
u_j=a_j-\sum_{i=1}^{j-1}\operatorname{proj}_{u_i}(a_j)
$$

::: {.notes}
İlk taban vektörü için düzeltecek daha önceki bir yön bulunmadığından $u_1=a_1$ seçeriz. İkinci vektörden $u_1$ doğrultusundaki izdüşümü çıkarınca kalan hata $u_1$'e dik olur. Üçüncü vektörde aynı işlemi hem $u_1$ hem $u_2$ için uygularız.

Toplamdaki her terim, $a_j$'nin daha önce kurulmuş bir dik doğrultudaki bileşenidir. Bu bileşenleri çıkarınca eski doğrultulardan arındırılmış yeni bir vektör kalır. Girdi listesi lineer bağımsızsa bu kalan vektör sıfır olmaz; sıfır çıkması, ilgili $a_j$'nin önceki vektörlerin gerdiği uzayda bulunduğunu gösterir.
:::

---

## İlk İki Yön

$$
a_1=\begin{bmatrix}1\\0\\1\end{bmatrix},\qquad
a_2=\begin{bmatrix}1\\1\\1\end{bmatrix}
$$

$$
u_1=a_1,\qquad
u_2=a_2-\frac{2}{2}u_1
=\begin{bmatrix}0\\1\\0\end{bmatrix}
$$

$$
\langle u_1,u_2\rangle=0
$$

::: {.notes}
$u_1=(1,0,1)^T$ seçilir. $a_2$'nin $u_1$ doğrultusundaki katsayısı $\langle a_2,u_1\rangle/\langle u_1,u_1\rangle=2/2=1$ olur. Bu bileşeni $a_2$'den çıkardığımızda $u_2=(0,1,0)^T$ kalır.

Yeni vektörün $u_1$ ile iç çarpımı sıfırdır; işlem beklenen dikliği üretmiştir. Ayrıca $a_2=u_1+u_2$ olduğundan $a_1,a_2$ ile $u_1,u_2$ aynı düzlemi gerer. İzdüşümü çıkarmak alt uzayı küçültmez, yalnız taban doğrultusunu değiştirir.
:::

---

## Üçüncü Yön

$$
a_3=\begin{bmatrix}0\\1\\1\end{bmatrix}
$$

$$
u_3=a_3-\frac{1}{2}u_1-u_2
=\begin{bmatrix}-\tfrac12\\0\\\tfrac12\end{bmatrix}
$$

$$
\langle u_3,u_1\rangle=\langle u_3,u_2\rangle=0
$$

::: {.notes}
$a_3$'ün $u_1$ doğrultusundaki izdüşüm katsayısı $\langle a_3,u_1\rangle/\langle u_1,u_1\rangle=1/2$ olur. $u_2$ birim uzunlukta olduğu için ikinci katsayı $\langle a_3,u_2\rangle=1$ çıkar. İki izdüşümü de çıkardığımızda $u_3=(-1/2,0,1/2)^T$ elde ederiz.

Doğrudan hesap $\langle u_3,u_1\rangle=-1/2+1/2=0$ ve $\langle u_3,u_2\rangle=0$ verir. Burada izdüşümler mutlaka daha önce üretilen ortogonal $u_i$ vektörlerine alınır. Özgün $a_i$ vektörlerine ayrı ayrı izdüşüm almak, çıkarılan bileşenlerin birbirine karışmasına ve kalan vektörün dik olmamasına yol açabilir.
:::

---

## Ne Korundu, Ne Değişti?

$$
\operatorname{span}\{a_1,\ldots,a_j\}
=\operatorname{span}\{u_1,\ldots,u_j\}
$$

$$
\langle u_i,u_j\rangle=0\qquad(i\neq j)
$$

Bağımsızlık sıfırı engeller.

::: {.notes}
Her $u_j$, $a_j$ ile önceki $u_i$ vektörlerinin bir lineer birleşimidir; bu yüzden yeni vektörler eski germe uzayının dışına çıkmaz. Ters yönde formülü düzenleyerek $a_j$'yi $u_1,\ldots,u_j$ ile yazabiliriz. Böylece her adımda germe uzayı aynen korunur.

Çıkarma işlemi $u_j$'yi önceki bütün yönlere dik yapar. Eğer $u_j=0$ çıkarsa $a_j$ önceki germe uzayındadır ve girdi listesi o noktada bağımlıdır. Lineer bağımsız bir başlangıç tabanı bu durumu engeller; süreç aynı alt uzay için sıfırdan farklı, ortogonal bir taban üretir.
:::

---

## Ortonormal Tabana Geçiş

$$
q_i=\frac{u_i}{\|u_i\|}
$$

$$
\langle q_i,q_j\rangle=
\begin{cases}1,&i=j,\\0,&i\neq j.
\end{cases}
$$

$$
\boxed{\operatorname{proj}_W(v)=
\sum_{i=1}^k\langle v,q_i\rangle q_i}
$$

::: {.notes}
Ortogonal vektörleri kendi normlarına böldüğümüzde uzunlukları bir olur ve yönleri değişmez. Bu nedenle germe uzayı ile karşılıklı diklik korunur. Ortogonal ve birim uzunluklu bir tabana ortonormal taban diyoruz.

Ortonormal tabanda her payda $\langle q_i,q_i\rangle=1$ olduğundan izdüşüm katsayısı doğrudan $\langle v,q_i\rangle$ olur. Bu katsayı aynı zamanda $v$'nin $q_i$ eksenindeki koordinatıdır. Gram–Schmidt'in sağladığı hesap kolaylığı burada görünür: eğik bir tabandan aynı alt uzayı geren ve koordinatları tek tek okunabilen bir tabana geçeriz.
:::

---

## Sık Yapılan Hatalar

1. İzdüşüm formülünü yönsüz kullanmak.
2. Paydayı $\langle v,v\rangle$ yazmak.
3. Gram–Schmidt'te eski $a_i$'leri kullanmak.
4. Ortogonal tabanı ortonormal sanmak.
5. Diklik kontrolünü atlamak.

::: {.notes}
İlk hata hangi vektörün hangi doğruya izdüşürüldüğünü ayırt etmemekten doğar; $\operatorname{proj}_u(v)$ sonucu $u$'nun bir katı olmalıdır. İkinci hatada payda yanlış vektörün normundan alınır. Doğru payda, doğrultuyu belirleyen $u$ için $\langle u,u\rangle$ değeridir.

Gram–Schmidt'te çıkarılan izdüşümler daha önce üretilmiş ortogonal $u_i$ yönlerine göre hesaplanır; özgün, eğik $a_i$ yönlerine dönmek dikliği bozar. Ortogonal bir taban her zaman ortonormal değildir: $u_i$ vektörleri birim uzunlukta değilse $\operatorname{proj}_W(v)$ formülünde paydayı $\langle u_i,u_i\rangle$ ile bölmek gerekir, atlanırsa sonuç yanlış ölçeklenir. Son kontrol noktası dikliktir: her $u_j$ üretildikten sonra önceki yönlerle iç çarpımın sıfır çıkıp çıkmadığına bakmak, işlem sırasında yapılan bir hesap hatasını erken yakalar.
:::

---

## Karar Soruları

1. $u$ ölçeklenirse izdüşüm değişir mi?
2. Gram–Schmidt ne zaman sıfır üretir?

::: {.notes}
$u$'yu sıfırdan farklı bir skalerle çarpmak gerdiği doğruyu değiştirmez. $c=\langle v,u\rangle/\langle u,u\rangle$ ifadesinde $u$ yerine $ku$ yazıldığında pay da payda da $k$ ile ölçeklenir ve bu ölçekler sadeleşir. Geometrik olarak da beklenen budur: $u$ ile $ku$ ($k\neq0$) aynı doğruyu gerdiğinden o doğru üzerindeki en yakın nokta değişmez.

Gram–Schmidt'in bir adımında sıfır elde edilmesi, işlenen vektörün önceki vektörlerin gerdiği uzayda bulunduğunu gösterir. Bu durum başlangıç listesindeki lineer bağımlılığı açığa çıkarır. Süreç, girdi vektörleri lineer bağımsız olduğu sürece sıfırdan farklı bir taban üretir.
:::

---

## Sonraki Adım

- Tek alt uzaya izdüşüm kuruldu.
- Peki $b$, hiçbir $Ax=b$ çözümünü sağlamıyorsa?
- En yakın yaklaşık nasıl bulunur?

::: {.notes}
Buraya kadar kurduğumuz izdüşüm hem bir doğruya hem ortonormal ya da ortogonal bir tabanla gerilen tek bir alt uzaya en yakın noktayı buluyordu. Peki elimizdeki $b$ vektörü, bir $Ax=b$ sisteminin hiçbir çözümünü sağlamıyorsa ne yaparız? Böyle bir sistemde $b$, $A$'nın sütunlarının gerdiği alt uzayda yer almaz; tam eşitliği sağlayan bir $x$ bulunmaz.

Bu durumda aradığımız şey artık tam çözüm değil, $b$'ye mümkün olduğunca yakın bir $A\hat{x}$ vektörüdür. Alt uzay artık tek bir doğru ya da birkaç dik vektörle değil, $A$'nın bütün sütunlarının gerdiği bir uzayla tanımlanır. Bu sorunun cevabı, doğruya ve tek bir alt uzaya izdüşüm için kurduğumuz aynı diklik mantığından çıkacak.
:::
