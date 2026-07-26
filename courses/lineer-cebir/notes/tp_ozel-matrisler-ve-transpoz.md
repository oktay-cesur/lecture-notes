---
title: "Özel Matrisler ve Transpoz"
subtitle: "MATE 213 — İlk Öğretim Bloğu"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-25
execute:
  echo: false
---

## Neden Özel Adlar?

Bazı matrisler, elemanlarının belirli konumlardaki düzeni nedeniyle ayrı adlarla anılır.

- Birim matris → çarpmanın etkisiz elemanı
- Üçgensel matris → eliminasyonun hedef yapısı
- Köşegen matris → tersi ve determinantı kolay
- Simetrik matris → sonraki konuların özel sınıfı

> Adlandırma biçimsel değildir; yapıyı bilmek işlem bilgisi sağlar.

$$
\begin{bmatrix}v_1&\cdots&v_n\end{bmatrix}\in\mathbb{R}^{1\times n},
\qquad
\begin{bmatrix}v_1\\\vdots\\v_m\end{bmatrix}\in\mathbb{R}^{m\times1}
$$

Satır ve sütun vektörleri, tek satırlı veya tek sütunlu matrislerdir.

::: {.notes}
Özel matris adlandırmaları yalnız biçimsel değildir. Bir matrisin belirli bir yapıya sahip olduğunu bilmek, onun üzerinde yapılacak işlemler veya daha sonra incelenecek özellikler hakkında ek bilgi sağlar. Birim matris çarpma tanımlandığında etkisiz eleman rolünü üstlenecek; üçgensel yapı Gauss eliminasyonunun ulaşmaya çalıştığı biçim olacak; köşegen matrisin tersi ve determinantı doğrudan okunabilecektir.

Satır ve sütun vektörleri de matris ailesinin sınır durumlarıdır: satır vektörü $1\times n$, sütun vektörü $m\times1$ biçimindedir. Bu bağlantı, özel matrisleri ayrı nesneler listesi olarak değil aynı şekil dilinin örnekleri olarak okumamızı sağlar.

Bu notta önce ana köşegen, transpoz ve negatif alma ele alınır. Ardından sıfır, köşegen, skaler, birim, üçgensel ve simetrik matrisleri inceleyip bu sınıfların birbirini dışlamadığını göreceğiz.
:::

---

## Ana Köşegen

$$
a_{ii},\qquad i=1,\ldots,\min(m,n)
$$

$$
\begin{bmatrix}
\color{#7c3aed}{\boxed{2}}&5&1\\
4&\color{#7c3aed}{\boxed{-3}}&7\\
6&8&\color{#7c3aed}{\boxed{9}}
\end{bmatrix}
$$

Ana köşegen, özel matris sınıflarının çoğunu tanımlayan referans bölgedir.

::: {.notes}
Ana köşegen, satır ve sütun indisleri eşit olan elemanların oluşturduğu bölgedir. Örnekteki matrisin ana köşegen elemanları $2$, $-3$ ve $9$ sayılarıdır.

Kare olmayan matrislerin de ana köşegeni vardır; $i=1,\ldots,\min(m,n)$ boyunca ilerler. Ancak köşegen, üçgensel, skaler ve birim matris sınıfları standart biçimde kare matrisler üzerinde tanımlanır. Ana köşegen kavramı bu sınıfların tümünün tanımında temel rol oynayacaktır.
:::

---

## Transpoz: Okuma Eksenlerini Değiştirmek

$$  
A=  
\begin{bmatrix}  
1&2&3\\  
4&5&6  
\end{bmatrix}  
\Longrightarrow  
A^T=  
\begin{bmatrix}  
1&4\\  
2&5\\  
3&6  
\end{bmatrix}  
$$

$$  
(A^T)_{ij}=A_{ji},  
\qquad  
A:m\times n  
\Longrightarrow  
A^T:n\times m  
$$

$$  
(A^T)^T=A  
$$

::: {.notes}  
Transpoz, matrisin satırları ile sütunlarının yer değiştirmesiyle elde edilir. $A$ matrisinin $i$. satır, $j$. sütun girdisi, $A^T$ matrisinde $j$. satır, $i$. sütuna geçer. Bu nedenle $2\times3$ bir matrisin transpozu $3\times2$ olur.

Transpoz girdi değerlerini değiştirmez; bu değerlerin matristeki konumlarını ve taşıdıkları satır–sütun rollerini değiştirir. Etkinlik–ürün tablosunda transpozdan sonra satırlar ürünleri, sütunlar etkinlikleri temsil eder. Sütun vektörünün transpozu satır vektörüdür. İkinci kez transpoz alındığında satır ve sütunlar eski konumlarına döner; dolayısıyla $(A^T)^T=A$ elde edilir.
:::

---

## Negatif Matris

$$
\boxed{-A=[-a_{ij}]}
$$

$$
A=\begin{bmatrix}2&-3\\1&4\end{bmatrix}
\Longrightarrow
-A=\begin{bmatrix}-2&3\\-1&-4\end{bmatrix}
$$

$$
-(-A)=A,
\qquad
A\in\mathbb{R}^{m\times n}\Longrightarrow -A\in\mathbb{R}^{m\times n}
$$

::: {.notes}
Bir matrisin bütün elemanlarının işaretleri değiştirilerek elde edilen matrise o matrisin negatifi denir. Negatif alma işlemi matrisin şeklini değiştirmez ve iki kez uygulandığında başlangıçtaki matrise dönülür.

Negatif matris ayrı bir özel matris sınıfı değildir; transpoz gibi, herhangi bir matristen aynı şekle sahip yeni bir matris elde etme işlemidir. Bu işlem birazdan çıkarmanın tanımında kullanılacaktır: $A-B$, $A+(-B)$ olarak kurulacaktır.
:::

---

## Sıfır Matrisi

$$
0_{m\times n}:\ \text{bütün elemanlar }0
$$

$$
0_{2\times3}=
\begin{bmatrix}0&0&0\\0&0&0\end{bmatrix}
\ \neq\
0_{3\times2}=
\begin{bmatrix}0&0\\0&0\\0&0\end{bmatrix}
$$

::: {.notes}
Bütün elemanları sıfır olan matrise sıfır matrisi denir ve her boyutta tanımlanabilir. Şekil, sıfır matrisi için de yapının parçasıdır: $2\times3$ sıfır matrisi ile $3\times2$ sıfır matrisi aynı matris değildir. Boyut bağlamdan açık olduğunda sıfır matrisi kısaca $0$ ile yazılır.

Kare bir sıfır matrisi aynı zamanda köşegen, skaler, üst üçgensel, alt üçgensel ve simetriktir; bu örnek bir matrisin aynı anda birden fazla özel sınıfa ait olabileceğini şimdiden gösterir. Sıfır matrisi toplamada etkisiz eleman rolünü üstlenecektir: $A+0=A$.
:::

---

## Köşegen Matris

$$
\boxed{d_{ij}=0\qquad i\neq j}
$$

$$
\begin{bmatrix}2&0&0\\0&-1&0\\0&0&5\end{bmatrix}
\ \checkmark
\qquad
\begin{bmatrix}2&0&0\\0&0&0\\0&0&5\end{bmatrix}
\ \checkmark
\qquad
\begin{bmatrix}2&0&0\\0&-1&3\\0&0&5\end{bmatrix}
\ \times
$$

::: {.notes}
Ana köşegen dışındaki bütün elemanları sıfır olan kare matrislere köşegen matris denir. Tanımın yönüne dikkat edilmelidir: koşul köşegen dışının sıfır olmasıdır; köşegen üzerindeki elemanların sıfırdan farklı olması gerekmez. Ortadaki örnekte köşegende sıfır bulunmasına rağmen matris köşegendir; "köşegen matrisin köşegeni sıfır olamaz" ifadesi yanlıştır.

Üçüncü örnek ise köşegen değildir; çünkü ana köşegen dışında sıfır olmayan bir eleman ($3$) vardır. Tek bir aykırı eleman sınıf üyeliğini bozar.
:::

---

## Skaler ve Birim Matris

Skaler matris: köşegen elemanların tümü aynı değer.

$$
S=\lambda I_n,
\qquad
\begin{bmatrix}3&0&0\\0&3&0\\0&0&3\end{bmatrix}
$$

Birim matris: $\lambda=1$ özel durumu.

$$
I_3=
\begin{bmatrix}1&0&0\\0&1&0\\0&0&1\end{bmatrix}
$$

$$
a+0=a,\qquad 1a=a,\qquad AI_n=I_nA=A.
$$

$0$ toplamada, $1$ sayısal çarpmada, $I_n$ kare matris çarpımında etkisizdir.

::: {.notes}
Bir köşegen matrisin bütün köşegen elemanları aynı skaler değere sahipse bu matrise skaler matris denir; genel biçimi $\lambda I_n$ şeklindedir. Her skaler matris köşegendir; ancak her köşegen matris skaler değildir. Köşegeninde $2$ ve $5$ bulunan matris köşegendir fakat skaler değildir.

Ana köşegen elemanları $1$, diğer bütün elemanları $0$ olan kare matrise birim matris denir; skaler matrisin $\lambda=1$ özel durumudur. Dolayısıyla her birim matris skaler, köşegen ve hem üst hem alt üçgenseldir.

Etkisiz eleman işleme göre değişir. Toplamada $0$, sayısal çarpmada $1$ girdiyi değiştirmez. Kare matris çarpımında aynı rolü uygun boyutlu birim matris üstlenir: $AI_n=I_nA=A$. Bu ilişki, ters matrisi tanımlarken neden sonuç olarak $I_n$ aradığımızı da hazırlayacaktır.
:::

---

## Üst ve Alt Üçgensel Matrisler

$$
U:\ \boxed{u_{ij}=0,\ i>j}
\qquad
L:\ \boxed{l_{ij}=0,\ i<j}
$$

$$
U=\begin{bmatrix}2&1&4\\0&-3&5\\0&0&7\end{bmatrix},
\qquad
L=\begin{bmatrix}2&0&0\\3&-1&0\\4&5&7\end{bmatrix}
$$

Köşegen matris = hem üst hem alt üçgensel.

::: {.notes}
Ana köşegenin altında kalan bütün elemanları sıfır olan kare matrise üst üçgensel, üstünde kalan bütün elemanları sıfır olan kare matrise alt üçgensel matris denir. Adlandırma, sıfır olmayan elemanların kaldığı bölgeye göredir: üst üçgenselde bilgi köşegenin üstünde toplanır.

Koşullar yalnız köşegenin bir tarafını kısıtlar; ana köşegenin üzerindeki veya diğer taraftaki elemanların sıfır olması gerekmez. Bir köşegen matris her iki koşulu aynı anda sağladığı için hem üst hem alt üçgenseldir. Üçgensel yapı, Gauss eliminasyonu konusunda hedef biçim olarak yeniden karşımıza çıkacaktır.
:::

---

## Simetrik Matris

$$
\boxed{A^T=A}
\qquad\Longleftrightarrow\qquad
\boxed{a_{ij}=a_{ji}}
$$

$$
\begin{bmatrix}2&3&-1\\3&5&4\\-1&4&7\end{bmatrix}
\ \checkmark
\qquad
\begin{bmatrix}1&2\\3&4\end{bmatrix}
\ \times
$$

::: {.notes}
Transpozu kendisine eşit olan kare matrise simetrik matris denir. Eleman düzeyinde koşul $a_{ij}=a_{ji}$ biçimindedir: ana köşegenin iki tarafındaki elemanlar birbirinin aynasıdır. İkinci örnek simetrik değildir; çünkü $a_{12}=2$ iken $a_{21}=3$'tür.

Her köşegen matris simetriktir; köşegen dışındaki bütün elemanlar sıfır olduğundan ayna koşulu kendiliğinden sağlanır. Simetrik matrisler kovaryans matrisi gibi ölçüm yapılarında doğal olarak ortaya çıkar ve dersin ileri konularında özel bir yapısal sınıf oluşturur.
:::

---

## Sınıflar Birbirini Dışlamaz

$$
I_3=
\begin{bmatrix}1&0&0\\0&1&0\\0&0&1\end{bmatrix}
$$

Aynı anda: birim, skaler, köşegen, üst ve alt üçgensel, simetrik.

$$
\text{Birim}\subset\text{Skaler}\subset\text{Köşegen}
$$

::: {.notes}
Özel matris adları tek seçimli etiketler değildir. Birim matris aynı anda skaler, köşegen, her iki yönde üçgensel ve simetriktir. Köşegeninde $4$ bulunan skaler matris de bu sınıfların tümüne girer; ancak birim değildir, çünkü köşegen elemanları $1$ değildir.

Sınıflar arasında kapsama ilişkileri vardır: her birim matris skalerdir, her skaler matris köşegendir, her köşegen matris hem üst hem alt üçgensel ve simetriktir. Bir matrisi sınıflandırırken "hangi sınıfa aittir?" yerine "hangi sınıflara aittir?" sorusu sorulmalı ve her tanım ayrı ayrı kontrol edilmelidir.
:::

---

## Bir Matris Hangi Sınıflara Aittir?

$$
B=
\begin{bmatrix}1&2&0\\0&1&3\\0&0&1\end{bmatrix}
$$

| Sınıf | Sonuç |
|---|---|
| Üst üçgensel | evet |
| Alt üçgensel / köşegen | hayır |
| Skaler / birim | hayır |
| Simetrik | hayır |

::: {.notes}
Ana köşegenin altındaki bütün elemanlar sıfır olduğu için $B$ üst üçgenseldir. Ancak köşegenin üstünde sıfır olmayan elemanlar bulunduğundan köşegen değildir; köşegen olmayınca skaler de olamaz. Köşegeni birlerden oluşsa da birim matris değildir, çünkü birim matriste köşegen dışındaki her eleman sıfır olmalıdır. $b_{12}=2$ ile $b_{21}=0$ eşleşmediği için simetrik de değildir.

Bu tür sorularda her tanım ayrı ayrı sınanır; köşegenin birlerden oluşması gibi kısmi gözlemler, ilgili tanımın bütün koşulları kontrol edilmeden sınıf üyeliğine dönüştürülmemelidir.
:::

---


## Sık Yapılan Hatalar

1. "Köşegen matrisin köşegeni sıfır olamaz" sanmak.
2. Özel sınıf adlarını tek seçimli etiket gibi kullanmak.
3. Üçgensellikte köşegenin iki tarafını da kısıtlamak.
4. Transpozda şeklin korunduğunu sanmak.
5. Negatif matrisi ayrı bir özel sınıf saymak.

::: {.notes}
Birinci hata köşegen tanımının yönünü ters çevirir: koşul köşegen dışının sıfır olmasıdır, köşegen üzerinde sıfır bulunabilir. İkinci hata sınıfların iç içe geçtiğini gözden kaçırır; birim matris aynı anda altı sınıfa birden aittir ve her tanım ayrı ayrı kontrol edilmelidir.

Üçüncü hata üçgensel tanımını gereğinden dar okur. Üst üçgensellik yalnız köşegenin altını sıfırlar; köşegenin üstündeki elemanların sıfırdan farklı olması gerekmez, sıfır olmaları da yasak değildir. Bu yüzden köşegen matris her iki koşulu birden sağlar.

Dördüncü hata transpozun ne yaptığını yanlış hatırlar: $m\times n$ matrisin transpozu $n\times m$ olur, şekil ancak kare matrislerde korunur. Beşinci hata negatif almayı sınıflandırma sanır; oysa negatif alma, transpoz gibi, bir matristen yeni matris üreten bir işlemdir ve skalerle çarpmanın $\alpha=-1$ özel durumudur.
:::

---

## Karar Soruları

1. $A^T$'nin şekli nasıl bulunur?
2. Aşağıdaki matris hangi sınıflara aittir?

$$
\begin{bmatrix}4&0&0\\0&4&0\\0&0&4\end{bmatrix}
$$

3. Simetrik bir matrisin transpozu nedir?
4. Kare olmayan bir matris simetrik olabilir mi?

::: {.notes}
Birinci soruda satır ve sütun sayıları yer değiştirir: $m\times n$ matrisin transpozu $n\times m$ şeklindedir. İkinci matris skaler, köşegen, hem üst hem alt üçgensel ve simetriktir; birim değildir, çünkü köşegen elemanları $1$ değil $4$'tür.

Üçüncü soruda cevap matrisin kendisidir; simetrikliğin tanımı zaten $A^T=A$ eşitliğidir. Dördüncü soruda cevap hayırdır ve nedeni şekil koşulunda saklıdır: $A^T=A$ eşitliğinin yazılabilmesi için $A$ ile $A^T$ aynı şekilde olmalıdır. $m\times n$ matrisin transpozu $n\times m$ olduğuna göre eşitlik ancak $m=n$ iken kurulabilir. Simetriklik tanımı kare olmayı ayrıca şart koşmaz; şart, tanımın kendisinden çıkar.
:::

---

## Sonraki Adım: Yapıdan İşleme

Bu notta kurulanlar:

- ana köşegen ve özel matris sınıfları,
- transpoz ve negatif alma.

Sırada: iki matrisi birleştiren ve tek matrisi ölçekleyen işlemler.

::: {.notes}
Bu notta matrisin yapı sözlüğünü tamamladık. Ana köşegeni referans bölge olarak tanımladık, üzerine köşegen, skaler, birim, üçgensel ve simetrik sınıflarını kurduk ve bu sınıfların birbirini dışlamadığını gördük. Transpoz ile negatif almayı da bir matristen yeni matris üreten iki işlem olarak ayrı ayrı ele aldık.

Bu sözlüğün karşılığını ilerleyen konularda alacağız. Üçgensel yapı Gauss eliminasyonunun hedef biçimi olacak, birim matris çarpımın etkisiz elemanı rolünü üstlenecek, köşegen matrisin tersi ve determinantı doğrudan okunabilecek, simetrik matrisler ise öz değer konusunda ayrı bir sınıf oluşturacak.

Sıradaki iki notta matrisler üzerinde işlem yapmaya başlıyoruz. Önce toplama ve skalerle çarpmayı bir ikram planlama probleminden çıkararak kuracağız, ardından aynı işlemleri teknik tarafından ele alıp cebirsel özelliklerini ve sınırlarını göreceğiz.
:::
