---
title: "Öz Değer ve Öz Vektör Örnekleri"
subtitle: "MATE 213 — Lineer Cebir"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-11
execute:
  echo: false
---

## Üç Adımı Uygulamak

1. $\det(A-\lambda I)=0$ kur
2. Kökleri bul: öz değerler
3. Her kök için $(A-\lambda I)v=0$ çöz

Dört örnek, dört farklı davranış.

::: {.notes}
Öz değer hesabı üç adımdan oluşur: bir $\lambda$ adayı $(A-\lambda I)v=0$'a taşınır; trivial olmayan çözüm $A-\lambda I$'nin tersinir olmamasını, bu da $\det(A-\lambda I)=0$'ı gerektirir. Bu denklemin kökleri öz değerleri, her kök için $(A-\lambda I)v=0$'ın çözüm kümesi ise özuzay $E_\lambda$'yı verir. Somut matrislerde karakteristik polinom kurulur, kökleri bulunur ve her kök için özuzay hesaplanır.

Dört örnek dört farklı durumu gösterecek: üçgensel bir matriste öz değerlerin köşegenden doğrudan okunması, genel bir $2\times2$ matriste karakteristik polinomun açılıp çarpanlarına ayrılması, tekrarlı bir öz değerin özuzay boyutuyla ilişkisi ve reel öz değeri olmayan bir dönme matrisi. İlk örnek en basit durumdan, üçgensel matristen başlıyor.
:::

---

## Örnek: Üçgensel Matris

$$
T=\begin{bmatrix}5&3\\0&-1\end{bmatrix}
$$

$$
\det(T-\lambda I)=(5-\lambda)(-1-\lambda)
$$

$$
\boxed{\lambda_1=5,\quad \lambda_2=-1}
$$

::: {.notes}
$T-\lambda I=\begin{bmatrix}5-\lambda&3\\0&-1-\lambda\end{bmatrix}$ hâlâ üst üçgenseldir, çünkü yalnızca köşegen elemanlardan $\lambda$ çıkarılmıştır. Üçgensel bir matrisin determinantı köşegen çarpımı olduğundan $\det(T-\lambda I)=(5-\lambda)(-1-\lambda)$ doğrudan yazılabilir; kofaktör açılımına gerek kalmaz.

Bu gözlem genelleşir: köşegen ya da üçgensel her matriste öz değerler doğrudan köşegen elemanlardır, çünkü $A-\lambda I$ işlemi yalnızca köşegeni değiştirir ve üçgensel yapıyı bozmaz. $T$ örneğinde köşegen elemanlar zaten $5$ ve $-1$ olduğundan öz değerler gözle görülür; hesaplama burada yalnızca bu gözlemin doğrulanmasıdır.
:::

---

## Örnek: Genel Bir $2\times2$ Matris

$$
A=\begin{bmatrix}4&1\\2&3\end{bmatrix}
$$

$$
\det(A-\lambda I)=\det\begin{bmatrix}4-\lambda&1\\2&3-\lambda\end{bmatrix}
$$

Öz değerler?

::: {.notes}
$A$ artık üçgensel değildir, dolayısıyla öz değerler köşegenden doğrudan okunamaz; $\det(A-\lambda I)$ ifadesinin açık biçimde hesaplanması gerekir. $2\times2$ bir matriste bu determinant $ad-bc$ formülüyle doğrudan yazılabilir; $a=4-\lambda$, $b=1$, $c=2$, $d=3-\lambda$ karşılıklarıyla ifade genişletilecektir.

Bu $A$ matrisi için $(1,1)^T$ vektörü yönünü koruyup uzunluğunu beşe katlar; $(1,-2)^T$ için de $Av=2v$ eşitliği sağlanır. Karakteristik polinom bu iki gözlemi tesadüfe bırakmadan yeniden üretmeli ve varsa başka öz değer bırakmamalıdır.
:::

---

## Karakteristik Polinom: Çözüm

$$
\det(A-\lambda I)=(4-\lambda)(3-\lambda)-2
$$

$$
=\lambda^2-7\lambda+10=(\lambda-5)(\lambda-2)
$$

$$
\boxed{\lambda_1=5,\quad\lambda_2=2}
$$

::: {.notes}
Açılım $(4-\lambda)(3-\lambda)=\lambda^2-7\lambda+12$ verir; $bc=1\cdot2=2$ çıkarılınca $\lambda^2-7\lambda+10$ elde edilir. Bu ifade $(\lambda-5)(\lambda-2)$ olarak çarpanlarına ayrılır, dolayısıyla kökler $\lambda=5$ ve $\lambda=2$'dir.

Bu iki değer, önceki gözlemlerde rastlantıyla bulunan öz değerlerle örtüşür; karakteristik polinom aynı sonucu şansa bağlı olmadan üretmiştir. Derece iki bir polinomun en fazla iki kökü olabileceğinden, $A$'nın taşıdığı bütün öz değerler bunlardır; üçüncü bir öz değer aranmaz.
:::

---

## Öz Vektörleri Bulmak: $\lambda=5$

$$
A-5I=\begin{bmatrix}-1&1\\2&-2\end{bmatrix}
$$

$$
(A-5I)v=0 \;\Rightarrow\; v=t\begin{bmatrix}1\\1\end{bmatrix}
$$

$$
E_5=\operatorname{span}\{(1,1)^T\}
$$

::: {.notes}
$A-5I=\begin{bmatrix}-1&1\\2&-2\end{bmatrix}$ olur; ikinci satır birincinin $-2$ katıdır, dolayısıyla tek bağımsız denklem $-v_1+v_2=0$'dır, yani $v_2=v_1$. Serbest parametre $t$ ile öz vektörler $v=t(1,1)^T$ biçiminde yazılır; $E_5=\operatorname{span}\{(1,1)^T\}$.

Bu sonuç, $(1,1)^T$ vektörünün $A$ altında yönünü neden koruduğunu açıklar. Aynı hesap $\lambda=2$ için de tekrarlanır.
:::

---

## Öz Vektörleri Bulmak: $\lambda=2$

$$
A-2I=\begin{bmatrix}2&1\\2&1\end{bmatrix}
$$

$$
(A-2I)v=0 \;\Rightarrow\; v=t\begin{bmatrix}1\\-2\end{bmatrix}
$$

$$
E_2=\operatorname{span}\{(1,-2)^T\}
$$

::: {.notes}
$A-2I=\begin{bmatrix}2&1\\2&1\end{bmatrix}$ olur, tek bağımsız denklem $2v_1+v_2=0$'dır, yani $v_2=-2v_1$; öz vektörler $v=t(1,-2)^T$ biçimindedir.

Bu iki sonuç, $(1,1)^T$ ile $(1,-2)^T$ vektörlerinin neden çalıştığını tam olarak açıklar: bu vektörler ilgili özuzayların üreteçleridir.
:::

---

## Örnek: Tekrarlı Öz Değer

$$
B=\begin{bmatrix}2&1\\0&2\end{bmatrix}
$$

$$
\det(B-\lambda I)=(2-\lambda)^2
$$

$$
\boxed{\lambda=2\ \text{(katlılık }2\text{)}}
$$

::: {.notes}
$B$ üst üçgensel olduğundan $\det(B-\lambda I)=(2-\lambda)^2$ köşegenden doğrudan yazılır. Bu polinomun tek kökü $\lambda=2$'dir, fakat kök iki kez tekrarlanır; bu tekrar sayısına $\lambda=2$'nin cebirsel katlılığı denir ve burada $2$'dir.

Önceki örnekte iki farklı öz değerin her biri kendi bir boyutlu özuzayını üretmişti. $\lambda=2$'nin katlılığı iki olduğu için burada özuzayın da iki boyutlu olup olmadığı ayrıca kontrol edilmelidir; bu, karakteristik polinomdan otomatik olarak çıkan bir sonuç değildir.
:::

---

## $\lambda=2$'nin Özuzayı

$$
B-2I=\begin{bmatrix}0&1\\0&0\end{bmatrix}
$$

$$
(B-2I)v=0 \;\Rightarrow\; v_2=0,\ v_1\ \text{serbest}
$$

$$
\boxed{E_2=\operatorname{span}\{(1,0)^T\}}
$$

::: {.notes}
$(B-2I)v=0$ denklemi $\begin{bmatrix}0&1\\0&0\end{bmatrix}v=0$ biçimindedir; tek bağımsız denklem $v_2=0$'dır, $v_1$ tamamen serbest kalır. Öz vektörler $v=t(1,0)^T$ biçimindedir ve $E_2=\operatorname{span}\{(1,0)^T\}$ tek boyutludur.

Burada dikkat çeken nokta şu: $\lambda=2$'nin cebirsel katlılığı $2$ olduğu hâlde özuzayın boyutu yalnızca $1$'dir. Bu iki sayı — katlılık ve özuzay boyutu — her zaman eşit çıkmaz ve ayrı yapısal bilgiler taşır.
:::

---

## Örnek: Gerçek Öz Değeri Olmayan Matris

$$
R=\begin{bmatrix}0&-1\\1&0\end{bmatrix}
$$

$$
\det(R-\lambda I)=\lambda^2+1
$$

$$
\boxed{\lambda=\pm i}
$$

::: {.notes}
$R$, düzlemde $90°$'lik bir döndürme uygular. Geometrik olarak bir döndürme hiçbir sıfırdan farklı reel vektörün doğrultusunu korumaz; her vektör bir miktar döner. Bu gözlem, karakteristik polinom $\lambda^2+1=0$'ın reel bir kökünün bulunmamasıyla örtüşür: $\lambda=\pm i$ yalnızca kompleks sayılarda tanımlıdır.

Bu, öz değerin her zaman var olduğu anlamına gelmez; reel sayılar üzerinde çalışan bir matrisin reel öz değeri olmayabilir. Kompleks öz değerler ve öz vektörler ayrı bir konudur; burada yalnız reel öz değerler ele alınır.
:::

---

## Sık Yapılan Hatalar: Öz Değer ve Öz Vektör

1. Sıfır vektörünü öz vektör saymak.
2. Kare olmayan matriste öz değer aramak.
3. Öz değeri bulunca işin bittiğini sanmak.
4. Öz vektör ararken $A-\lambda I$ yerine $A$'yı kullanmak.
5. Katlı öz değerin o kadar bağımsız öz vektör garantilediğini sanmak.

::: {.notes}
Birinci ve ikinci hata tanımın sınırlarıyla ilgilidir. Sıfır vektörü her $\lambda$ için $A0=\lambda0$'ı sağladığından anlamsızdır ve tanımdan dışlanır; buna karşılık $\lambda=0$'ın kendisi gayet geçerli bir öz değer olabilir, $Av=0$ eşitliğini sağlayan sıfırdan farklı bir $v$ varsa bu durum $A$'nın tersinir olmadığını gösterir. Kare olmayan bir matriste ise $Av=\lambda v$ eşitliği boyutça anlamsız kaldığından öz değer sorusu hiç sorulamaz.

Üçüncü ve dördüncü hata hesabın iki adımını karıştırır. Karakteristik polinom yalnızca $\lambda$ değerlerini verir; öz vektörü bulmak için o $\lambda$'nın $(A-\lambda I)v=0$ denklemine geri konması ayrıca gerekir. Bu adımda $A-\lambda I$ yerine yanlışlıkla $A$'nın kendisiyle işlem yapmak, bulunan vektörün öz vektör koşulunu sağlamamasına yol açar.

Beşinci hata, tekrarlı öz değerli $B$ matrisi örneğinde görüldüğü gibi, cebirsel katlılığı özuzay boyutuyla özdeşleştirir. İki sayı bağımsızdır; katlılık karakteristik polinomdan, özuzay boyutu ise ayrı bir homojen sistem çözümünden gelir ve birbirine eşit olmak zorunda değildir.
:::

---

## Karar Soruları

1. $A$ üçgensel, köşegende bir $0$ var.
2. Karakteristik polinom $\lambda^2+4$.
3. $Av=0$, $v\neq0$.

Her durumda öz değer hakkında ne söylenebilir?

::: {.notes}
Birinci durumda $A$ üçgensel olduğu için öz değerler doğrudan köşegen elemanlarıdır; köşegende bir $0$ varsa $\lambda=0$ bir öz değerdir ve $\det(A)$ köşegen çarpımı olduğundan sıfır çıkar, yani $A$ tersinir değildir.

İkinci durumda $\lambda^2+4=0$ denkleminin kökleri $\lambda=\pm2i$'dir; reel sayılar içinde çözüm yoktur, bu matrisin reel öz değeri bulunmaz.

Üçüncü durumda $Av=0$ eşitliği $Av=0\cdot v$ olarak okunabilir; $v\neq0$ olduğundan bu tam olarak öz değer tanımını $\lambda=0$ ile sağlar. $\lambda=0$'ın öz değer olması, $A$'nın sıfırdan farklı bir vektörü sıfıra gönderdiği, yani tersinir olmadığı anlamına gelir.
:::

---

## Sonraki Adım: Katlılık ve Özuzay Boyutu

Tekrarlı öz değerde özuzay boyutu katlılıktan **küçük** kalabilir.

$$
\dim(E_\lambda) \le \text{cebirsel katlılık}
$$

Bu farkın matrisin davranışını nasıl etkilediği köşegenleştirme konusunun sorusu.

::: {.notes}
Tekrarlı öz değerli $B$ matrisinde $\lambda=2$'nin katlılığı $2$ olduğu hâlde özuzay yalnızca bir boyutludur. Bu her öz değerde görülmez, ama mümkün bir durumdur: bir öz değerin özuzay boyutu, o öz değerin karakteristik polinomdaki katlılığını hiçbir zaman aşamaz, fakat ondan küçük kalabilir.

Bu boyut farkının matrisin genel davranışı için ne anlama geldiği köşegenleştirme konusunun sorusudur: hangi matrisler öz vektörler kullanılarak daha basit bir biçimde yeniden yazılabilir, hangileri yazılamaz?
:::
