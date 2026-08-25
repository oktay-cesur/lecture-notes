---
title: "En Küçük Kareler"
subtitle: "MATE 213 — Lineer Cebir"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-11
execute:
  echo: false
---

## Genel Alt Uzaya İzdüşüm

$W=\operatorname{span}\{u_1,\ldots,u_k\}$.

$$
p=\operatorname{proj}_W(v)
=\sum_{i=1}^k
\frac{\langle v,u_i\rangle}{\langle u_i,u_i\rangle}u_i
$$

$$
p\in W,\qquad v-p\in W^\perp
$$

::: {.notes}
Tek bir doğruya ve ortonormal ya da ortogonal bir tabanla gerilen alt uzaya izdüşüm kurulabilir. $b$ vektörü hiçbir $Ax=b$ çözümünü sağlamıyorsa en yakın yaklaşığı bulma sorusu, izdüşümü tek bir doğrudan genel bir alt uzaya taşımayı gerektirir. Gram–Schmidt $W$ için ortogonal bir taban sağladığında genel alt uzaya izdüşümü, doğruya izdüşümlerin toplamı olarak hesaplarız.

Sonuç $p$, taban vektörlerinin lineer birleşimi olduğu için $W$ içindedir. Hata $v-p$ ise her $u_i$'ye, dolayısıyla bu vektörlerin bütün lineer birleşimlerine diktir; bu yüzden $v-p\in W^\perp$ yazılır. Bu iki özellik, $p$'yi $W$ içinde tek biçimde belirler.
:::

---

## Neden Yine En Yakın Nokta?

$W$ içinde başka aday: $q$.

$$
v-q=(v-p)+(p-q)
$$

$$
\|v-q\|^2=\|v-p\|^2+\|p-q\|^2
$$

$$
\boxed{\|v-q\|\geq\|v-p\|}
$$

::: {.notes}
$W$ içindeki herhangi bir $q$ için $v-q$ farkını $(v-p)+(p-q)$ biçiminde ikiye ayırabiliriz. İlk terim $W^\perp$ içindedir, çünkü $v-p$ bütün $W$'ye diktir. İkinci terim ise $p-q$, iki $W$ vektörünün farkı olduğundan yine $W$ içindedir; dolayısıyla bu iki terim birbirine diktir.

Pisagor bağıntısı normun karesini iki karenin toplamına ayırır: $\|v-q\|^2=\|v-p\|^2+\|p-q\|^2$. İlk terim $q$'dan bağımsız sabit bir değerdir, ikinci terim ise negatif olamaz. Eşitlik ancak $q=p$ iken sağlanır; bu yüzden $p$, $W$ içinde $v$'ye en yakın tek vektördür.
:::

---

## Hızlı Kontrol: İzdüşüm Doğrulaması

$$
q_1=\begin{bmatrix}1\\0\\0\end{bmatrix},\quad
q_2=\begin{bmatrix}0\\1\\0\end{bmatrix},\quad
v=\begin{bmatrix}2\\3\\4\end{bmatrix}
$$

$$
p=2q_1+3q_2=\begin{bmatrix}2\\3\\0\end{bmatrix}
$$

$$
v-p=\begin{bmatrix}0\\0\\4\end{bmatrix},\qquad
\langle v-p,q_1\rangle=\langle v-p,q_2\rangle=0
$$

::: {.notes}
$q_1,q_2$ ortonormal olduğundan katsayılar doğrudan $\langle v,q_1\rangle=2$ ve $\langle v,q_2\rangle=3$ olarak okunur; payda bölmesi gerekmez çünkü $\langle q_i,q_i\rangle=1$'dir. İzdüşüm $p=2q_1+3q_2=(2,3,0)^T$ çıkar ve bu vektör $q_1,q_2$'nin bir lineer birleşimi olduğu için tanım gereği $W$ içindedir. Üçüncü koordinat $v$'de dört iken $p$'de sıfırdır, çünkü $W$ yalnızca ilk iki ekseni kapsar.

Hata $v-p=(0,0,4)^T$ hesaplanır; iki taban vektörüyle iç çarpımı da sıfır çıkar, dolayısıyla $v-p\perp W$ koşulu doğrulanır. Bu iki satırlık kontrol, formülün $p\in W$ ve $v-p\in W^\perp$ özelliklerini gerçekten sağladığını gösterir. Aynı doğrulama herhangi bir ortonormal taban için aynı biçimde yapılabilir.
:::

---

## Denklem Sistemi Tutarsızsa

$$
A=\begin{bmatrix}1&0\\1&1\\1&2\end{bmatrix},\qquad
b=\begin{bmatrix}1\\2\\2\end{bmatrix}
$$

$$
Ax=b
$$

İlk iki denklem üçüncüyü bozuyor.

::: {.notes}
Bilinmeyeni $x=(\alpha,\beta)^T$ diye yazalım. İlk denklem $\alpha=1$, ikinci denklem ise $\alpha+\beta=2$ verdiği için $\beta=1$ olur. Bu değerler üçüncü denklemin sol tarafını $\alpha+2\beta=3$ yapar, fakat sağ taraf $2$'dir.

Dolayısıyla $b$, $A$'nın sütunlarının bir lineer birleşimi değildir; başka bir deyişle $b\notin\operatorname{Col}(A)$. Tam eşitlik sağlayan bir $x$ bulunmadığında $A\hat{x}$ vektörünü sütun uzayı içinde $b$'ye en yakın nokta olarak seçeriz. En küçük kareler problemi, bu en yakın noktanın katsayılarını arar.
:::

---

## En İyi Yaklaşımın Koşulu

Yaklaşım: $A\hat{x}$.

Artık:

$$
r=b-A\hat{x}
$$

En yakınlık koşulu:

$$
r\perp\operatorname{Col}(A)
$$

::: {.notes}
$A\hat{x}$ her zaman $A$'nın sütun uzayında yer alır, çünkü matris–vektör çarpımı sütunların $\hat{x}$ katsayılı lineer birleşimidir. Bu uzaydaki en yakın nokta, $b$'nin $\operatorname{Col}(A)$ üzerine ortogonal izdüşümüdür. Aradaki $r=b-A\hat{x}$ farkına artık vektörü denir.

Genel izdüşüm sonucuna göre artık vektörü bütün sütun uzayına dik olmalıdır. Bir vektörün sütun uzayına dik olması, $A$'nın her sütunuyla iç çarpımının sıfır olmasıyla eşdeğerdir. Böylece geometrik en yakınlık koşulunu matris diliyle yazabileceğimiz bir denkleme ulaşırız.
:::

---

## Normal Denklemler Nereden Gelir?

$$
A^T(b-A\hat{x})=0
$$

$$
A^Tb-A^TA\hat{x}=0
$$

$$
\boxed{A^TA\hat{x}=A^Tb}
$$

::: {.notes}
$A^Tr$ çarpımının her bileşeni, $A$'nın bir sütunu ile $r$'nin iç çarpımıdır. Bu nedenle $r$'nin bütün sütunlara dik olması $A^Tr=0$ eşitliğini verir. $r=b-A\hat{x}$ yazıp çarpımı dağıttığımızda normal denklemler ortaya çıkar.

Bu denklemler yeni bir ezber formülü değildir; izdüşümde kullandığımız dik hata koşulunun matris biçimidir. $Ax=b$ tutarlıysa artık sıfır olur ve tam çözüm aynı denklemleri zaten sağlar. Sistem tutarsız olduğunda normal denklemler, sıfır yapılamayan hatanın normunu en küçük yapan katsayıları belirler.
:::

---

## Normal Denklem Matrislerini Kuralım

$$
(A^TA)_{ij}=\langle a_i,a_j\rangle,\qquad
(A^Tb)_i=\langle a_i,b\rangle
$$

$$
A^TA=\begin{bmatrix}3&3\\3&5\end{bmatrix},\qquad
A^Tb=\begin{bmatrix}5\\6\end{bmatrix}
$$

::: {.notes}
Normal denklemler $A^TA\hat{x}=A^Tb$ biçiminde olduğundan önce sol taraftaki $A^TA$ matrisini ve sağ taraftaki $A^Tb$ vektörünü hesaplarız. $A^TA$'nın $(i,j)$ girdisi $A$'nın $i$. ve $j$. sütunlarının iç çarpımıdır; $A^Tb$'nin $i$. girdisi ise $i$. sütunla $b$'nin iç çarpımıdır. Bu, matris çarpımını satır-sütun kuralıyla açmanın bir sonucudur.

Birinci sütunun kendisiyle iç çarpımı $3$, iki sütunun iç çarpımı $3$, ikinci sütunun kendisiyle iç çarpımı $5$ olduğundan $A^TA$'nın satırları $(3,3)$ ve $(3,5)$ çıkar. Benzer hesapla $A^Tb=(5,6)^T$ elde edilir. Bu iki nesne, çözülecek $2\times2$ doğrusal sistemin bütün girdisini oluşturur.
:::

---

## Normal Denklemleri Çözelim

$$
\begin{bmatrix}3&3\\3&5\end{bmatrix}
\begin{bmatrix}\hat\alpha\\\hat\beta\end{bmatrix}
=\begin{bmatrix}5\\6\end{bmatrix}
$$

$$
\hat{x}=\begin{bmatrix}7/6\\1/2\end{bmatrix}
$$

::: {.notes}
İki denklem $3\hat\alpha+3\hat\beta=5$ ve $3\hat\alpha+5\hat\beta=6$ biçimindedir. İkinci denklemden birinciyi çıkarınca $2\hat\beta=1$ kalır, buradan $\hat\beta=1/2$ bulunur. Bu değeri ilk denklemde yerine koymak $3\hat\alpha=7/2$ ve $\hat\alpha=7/6$ verir.

Elde edilen $\hat{x}=(7/6,1/2)^T$, $Ax=b$ sistemini tam sağlamaz; tutarsız bir sistemde zaten böyle bir çözüm yoktu. Bu vektör, $A\hat{x}$'in $b$'ye sütun uzayı içinde en yakın olduğu katsayı çiftidir. Bu iddiayı doğrulamak için artık vektörünü hesaplayıp dikliğini kontrol etmemiz gerekir.
:::

---

## Artık Vektörünü Denetleyelim

$$
A\hat{x}=\begin{bmatrix}7/6\\5/3\\13/6\end{bmatrix},\qquad
r=\begin{bmatrix}-1/6\\1/3\\-1/6\end{bmatrix}
$$

$$
A^Tr=\begin{bmatrix}0\\0\end{bmatrix}
$$

$$
\|r\|^2=\frac16
$$

::: {.notes}
Bulduğumuz katsayılarla yaklaşık sağ taraf $A\hat{x}=(7/6,5/3,13/6)^T$ olur. Bunu $b$'den çıkarınca artık vektörü $r=(-1/6,1/3,-1/6)^T$ elde edilir. Artığın sıfır olmaması beklenir, çünkü başlangıç sistemi tutarsızdır.

Birinci sütunla iç çarpım artık bileşenlerinin toplamıdır ve $-1/6+1/3-1/6=0$ çıkar. İkinci sütunla iç çarpım $0(-1/6)+1(1/3)+2(-1/6)=0$ olur. Böylece $r\perp\operatorname{Col}(A)$ koşulu doğrudan doğrulanır; hata kareleri toplamı da $\|r\|^2=1/36+1/9+1/36=1/6$ değerindedir.
:::

---

## Sık Yapılan Hatalar

1. Artığı sütunlara paralel sanmak.
2. $A^TA$ yerine $AA^T$ yazmak.
3. Taban ortogonal değilken toplamı almak.
4. Normal denklemlerin $Ax=b$'yi tam çözdüğünü sanmak.

::: {.notes}
En küçük karelerde artık vektörü sütun uzayına paralel değil, diktir; ilk hata bu iki kavramı karıştırmaktan doğar. Artık $r=b-A\hat{x}$'in sütun uzayına dik olduğunu unutan bir çözüm $A^Tr=0$ kontrolünü atlar ve hatalı bir $\hat{x}$'i doğru sanabilir. İkinci hatada boyut kontrolü işe yarar: $A\in\mathbb{R}^{m\times n}$ ise normal denklem katsayı matrisi $A^TA\in\mathbb{R}^{n\times n}$ olmalıdır, $AA^T\in\mathbb{R}^{m\times m}$ farklı bir matristir ve farklı boyutta çıkar.

Üçüncü hata, $\operatorname{proj}_W(v)=\sum_i\langle v,u_i\rangle u_i/\langle u_i,u_i\rangle$ toplamının yalnızca $u_i$'ler birbirine dikken geçerli olduğunu unutmaktan gelir; taban ortogonal değilse önce Gram–Schmidt uygulanmalıdır. Dördüncü hata, normal denklemlerin çözümünü tam çözümle karıştırmaktır. $Ax=b$ tutarsızsa böyle bir eşitlik zaten mümkün değildir; normal denklemler yalnızca sütun uzayında $b$'ye en yakın $A\hat{x}$'i veren $\hat{x}$'i belirler.
:::

---

## Karar Soruları

1. Tutarlı sistemde artık nedir?
2. $\hat{x}$ her zaman tek midir?

::: {.notes}
$Ax=b$ tutarlıysa en küçük kareler yaklaşımı tam çözüme ulaşır ve artık vektörü sıfır olur. Bu, tutarlı bir sistemde $b$'nin zaten $A$'nın sütun uzayında yer almasından kaynaklanır; izdüşümü almaya gerek kalmadan $b$'nin kendisi hedef noktadır. Normal denklemler bu durumda da geçerlidir, yalnızca $\hat{x}$ tam çözümle çakışır.

$A$'nın sütunları lineer bağımsızsa $A^TA$ tersinirdir ve $\hat{x}$ tektir. Sütunlar bağımlıysa en yakın $A\hat{x}$ vektörü yine tektir, fakat aynı vektörü üreten birden fazla katsayı vektörü bulunabilir. Bu durumda normal denklemler tek bir $\hat{x}$ yerine bir çözüm kümesi verir.
:::

---

## Aynı Fikir Nereye Uzanır?

$$
v=p+e,\qquad p\in W,\quad e\in W^\perp
$$

- Doğru: tek izdüşüm
- Alt uzay: ortogonal toplam
- Veri: en küçük kareler
- Fonksiyonlar: Fourier katsayıları

Sırada: değişmeyen yönler.

::: {.notes}
Bir vektör, seçilen alt uzaydaki en yakın parça ile o uzaya dik hata parçasına ayrılır. Doğruya izdüşüm formülü bu diklikten çıkar; Gram–Schmidt izdüşümleri çıkararak ortogonal taban üretir. En küçük kareler ise aynı ayrışmayı $b$ ile $\operatorname{Col}(A)$ arasında kurar.

Fikir sonlu boyutlu koordinat vektörleriyle sınırlı kalmaz. Uygun bir iç çarpımla donatılmış fonksiyon uzayında, bir fonksiyonun ortonormal fonksiyon ailesi üzerindeki katsayıları da izdüşüm yoluyla hesaplanır; Fourier serileri bu bağlantının kapsamlı bir örneğidir. Öz değer ve öz vektör kavramları ise bir dönüşüm uygulandığında doğrultusu değişmeyen vektörleri inceler.
:::
