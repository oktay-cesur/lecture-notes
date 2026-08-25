---
title: "İç Çarpım, Norm ve Ortogonallik"
subtitle: "MATE 213 — Lineer Cebir"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-11
execute:
  echo: false
---

## Taban Değişse de Kalan Soru

- Vektör uzayı: toplama, skalerle çarpma
- Bazı tabanlar hesabı kolaylaştırır
- Peki uzunluk, açı, diklik?

> Cebirsel yapı geometrik yapıyı içermiyor.

::: {.notes}
Koordinat vektörleri ve taban değişimi konusunda bazı tabanların hesap açısından diğerlerinden çok daha kullanışlı olabileceğini görmüştük. Ama o konu boyunca kullandığımız araçlar hep aynıydı: toplama ve skalerle çarpma. Bu iki işlem vektör uzayının tamamını tanımlar; kapanışlı, değişmeli, dağılmalıdır ve daha fazlasını istemez.

Sorun şu: bu aksiyomların hiçbirinde "uzunluk" ya da "açı" sözü geçmiyor. Elimizde toplama ve skalerle çarpmayla donatılmış bir küme varken, iki elemanının ne kadar "uzak" olduğunu ya da aralarındaki "açının" ne olduğunu söyleyebilmemiz için ayrı bir yapıya ihtiyacımız var. Bu yapı iç çarpımdır.
:::

---

## Cebirsel Yapı Açıyı Tanımlamaz

- Aksiyomlar: kapanış, değişme, dağılma
- $P_2$'de iki polinomun açısı nedir?
- Toplama/skalerle çarpma cevap vermiyor

::: {.notes}
Somut bir örnekle görelim. $P_2$ uzayında $p(t)=t^2+1$ ve $q(t)=2t-1$ birer vektördür; toplayabiliriz, bir skalerle çarpabiliriz. Ama "$p$ ile $q$ arasındaki açı kaç derece?" sorusuna vektör uzayı aksiyomlarından hiçbir cevap çıkmaz. Toplama iki polinomu üçüncü bir polinoma götürür, skalerle çarpma bir polinomu ölçekler; ikisi de açı kavramına dokunmaz.

Bu, cebirsel yapının sınırıdır: toplama ve skalerle çarpma bir vektör uzayı kurmak için yeterlidir, geometrik bir vektör uzayı kurmak için yeterli değildir. Uzunluk, açı ve diklik konuşabilmek için üçüncü bir işlem eklememiz gerekiyor. $\mathbb{R}^n$'de bu işlemi zaten biliyoruz; adı iç çarpımdır.
:::

---

## Standart İç Çarpım

$$
\langle u,v\rangle = u^Tv = \sum_{i=1}^{n} u_iv_i
$$

- $\mathbb{R}^n$'de tanımlı
- Aynı indisli bileşenleri çarpıp toplama
- Sonuç: tek bir sayı (skaler)

::: {.notes}
$\mathbb{R}^n$'de iki vektörün iç çarpımı, aynı indisli bileşenleri çarpıp toplayarak bulunur: $\langle u,v\rangle=u_1v_1+u_2v_2+\cdots+u_nv_n$. Matris çarpımı diliyle bu işlem $u^Tv$'dir — $u$'yu satır haline getirip $v$ ile çarparız. Sonuç bir vektör değil, tek bir sayıdır; bu, iç çarpımı toplama ve skalerle çarpmadan ayıran ilk özelliktir.

$\langle\cdot,\cdot\rangle$ gösterimini şimdilik $u^Tv$'nin kısaltması olarak okuyabiliriz. Birazdan bu gösterimi genel bir tanımın parçası yapacağız; standart iç çarpım o genel tanımın $\mathbb{R}^n$'deki en somut örneği olacak.
:::

---

## Hızlı Kontrol: $\langle u,v\rangle$

$$
u=\begin{bmatrix}1\\2\\-1\end{bmatrix},\qquad
v=\begin{bmatrix}3\\0\\2\end{bmatrix}
$$

$$
\langle u,v\rangle = 1(3)+2(0)+(-1)(2)=1
$$

::: {.notes}
Birinci bileşenler çarpılır: $1\cdot3=3$. İkinci bileşenler: $2\cdot0=0$. Üçüncü bileşenler: $(-1)\cdot2=-2$. Bu üç çarpımın toplamı $3+0-2=1$ verir. Negatif bir bileşen işlemi bozmaz; yalnızca ilgili çarpımın işaretini belirler.

Sonucun kendisi bir vektör değil, $1$ sayısıdır — $u+v$ işleminden farkını burada net görüyoruz: toplama bize yine üç bileşenli bir vektör verirdi, iç çarpım tek bir skaler veriyor. Bu skaler değeri az sonra uzunluk ve açı tanımlamak için kullanacağız.
:::

---

## Genel İç Çarpım — Üç Aksiyom

- Simetri: $\langle u,v\rangle=\langle v,u\rangle$
- Doğrusallık: $\langle au+bw,v\rangle=a\langle u,v\rangle+b\langle w,v\rangle$
- Pozitif tanımlılık: $\langle v,v\rangle\ge0$
- Eşitlik yalnız $v=0$'da

::: {.notes}
$\mathbb{R}^n$'deki $u^Tv$ tek bir örnektir; iç çarpım kavramını genel bir vektör uzayında kullanabilmek için bu örneğin hangi özelliklerini koruduğumuzu ayırmamız gerekiyor. Üç aksiyom yeterli oluyor. Simetri, iki vektörün sırasının sonucu değiştirmediğini söyler. Doğrusallık, bir argümanda toplama ve skalerle çarpmayla uyumlu olmayı garanti eder — simetriyle birleşince bu, ikinci argümanda da doğrusallığı verir. Pozitif tanımlılık ise bir vektörün kendisiyle iç çarpımının hiçbir zaman negatif olmayacağını, sıfır olduğunda da vektörün kendisinin sıfır olmak zorunda olduğunu söyler.

Az sonra normu $\langle v,v\rangle$'nin kareköküyle tanımlayacağız; karekökün gerçel sayı olarak anlamlı kalması için negatif bir değerle hiç karşılaşmamamız gerekiyor, üçüncü aksiyom da tam bunu garanti ediyor. Standart iç çarpım $u^Tv$ bu üç aksiyomu otomatik sağlar; $\langle v,v\rangle=v_1^2+\cdots+v_n^2$ bir kareler toplamıdır ve yalnız her bileşen sıfırken sıfır olur.
:::

---

## Standart Dışı Bir İç Çarpım

$$
\langle u,v\rangle_w = w_1u_1v_1+w_2u_2v_2,\qquad w_1,w_2>0
$$

$$
p=\begin{bmatrix}1\\3\end{bmatrix},\quad q=\begin{bmatrix}2\\1\end{bmatrix},\quad w_1=2,\ w_2=5
$$

$$
\langle p,q\rangle_w = 2(1)(2)+5(3)(1)=19
$$

::: {.notes}
Üç aksiyomu sağlayan tek formül nokta çarpımı değil. $\mathbb{R}^2$ üzerinde ağırlıklı bir çarpma tanımlayalım: her bileşen çiftini önce kendi ağırlığıyla çarpıp sonra toplayalım. $w_1=2$, $w_2=5$ seçimiyle $p=(1,3)$ ve $q=(2,1)$ için $\langle p,q\rangle_w=2(1)(2)+5(3)(1)=4+15=19$ buluyoruz — standart iç çarpım aynı vektörler için $p^Tq=1(2)+3(1)=5$ verirdi. İki farklı sayı, iki farklı geçerli iç çarpım.

Aksiyomlar burada da sağlanıyor: simetri ve doğrusallık ağırlıkların sabit olmasından geliyor, pozitif tanımlılık ise $w_1,w_2>0$ koşulundan. $\langle v,v\rangle_w=w_1v_1^2+w_2v_2^2$ iki pozitif ağırlıklı karenin toplamıdır ve yalnız $v_1=v_2=0$ iken sıfırlanır. Ağırlıklardan biri negatif ya da sıfır olsaydı bu garanti çökerdi; pozitif tanımlılık formülün serbestçe seçilebilir bir parçası değil, ağırlıklar üzerine konması gereken bir koşuldur.
:::

---

## Norm

$$
\|v\| = \sqrt{\langle v,v\rangle}
$$

- Pozitif tanımlılık: karekök her zaman tanımlı
- Standart iç çarpımda: Öklid uzunluğu
- Genel iç çarpımda: farklı bir "uzunluk" ölçüsü

::: {.notes}
Pozitif tanımlılık aksiyomu $\langle v,v\rangle$'nin hiçbir zaman negatif olmadığını garanti eder; bu sayede karekökünü almak her zaman gerçel bir sayı verir. Bu sayıyı $v$'nin normu, yani uzunluğu olarak tanımlıyoruz. Standart iç çarpımda $\|v\|=\sqrt{v_1^2+\cdots+v_n^2}$ elde ederiz — bu, Pisagor teoreminin $n$ boyuta genelleşmiş hâlidir ve bildiğimiz Öklid uzunluğuna denk düşer.

Genel bir iç çarpım kullanıldığında aynı formül farklı bir sayı verir; ağırlıklı iç çarpımda $p$'nin normu $\sqrt{\langle p,p\rangle_w}=\sqrt{2(1)^2+5(3)^2}=\sqrt{47}$ olurdu, standart normu ise $\sqrt{1^2+3^2}=\sqrt{10}$'dur. "Uzunluk" tek bir mutlak kavram değil; hangi iç çarpımı seçtiğimize bağlı.
:::

---

## Hızlı Kontrol: $\|u\|$

$$
u=\begin{bmatrix}1\\2\\-1\end{bmatrix}
$$

$$
\|u\| = \sqrt{1^2+2^2+(-1)^2}=\sqrt6\approx2.449
$$

::: {.notes}
Aynı $u$ vektörünü kullanıyoruz: bileşenlerin karelerini alıp topluyoruz, $1+4+1=6$, sonra karekök alıyoruz. $\sqrt6$ tam sayı değil; bu normal, çoğu vektörün normu irrasyoneldir.

$\langle u,u\rangle$'nun kendisi de $u$'yu $u$ ile çarparak, yani $u^Tu$ formülüyle bulunur — bu, normun tanımının $\langle v,v\rangle$'ye dayandığını somut olarak gösteriyor. Bir sonraki adımda iki farklı vektörün normlarını birlikte kullanarak aralarındaki açıyı tanımlayacağız.
:::

---

## Cauchy-Schwarz Eşitsizliği

$$
|\langle u,v\rangle|\le \|u\|\,\|v\|
$$

- İki vektörün iç çarpımı normların çarpımını aşamaz

::: {.notes}
Cauchy–Schwarz eşitsizliğinin burada kullanılan sonucu, açıyı $\cos\theta=\langle u,v\rangle/(\|u\|\|v\|)$ ile tanımlayan oranın $[-1,1]$ aralığında kalmasını garanti etmesidir. Kosinüs bu aralığın dışında bir değer almadığı için bu koşul tanımın anlamlı olmasını sağlar.

Cauchy-Schwarz eşitsizliğini $\|u\|\|v\|$'ye bölersek tam olarak bunu elde ederiz: $|\langle u,v\rangle|/(\|u\|\|v\|)\le1$, yani oran her zaman $[-1,1]$ içinde kalır. Eşitsizlik olmasaydı açı formülü bazı vektör çiftlerinde tanımsız bir kosinüs üretebilirdi; eşitsizlik bu riski ortadan kaldırıp açı tanımını her zaman geçerli kılar.
:::

---

## Açı

$$
\cos\theta = \frac{\langle u,v\rangle}{\|u\|\,\|v\|}
$$

$$
a=\begin{bmatrix}3\\4\end{bmatrix},\quad b=\begin{bmatrix}4\\3\end{bmatrix}
$$

$$
\cos\theta = \frac{24}{5\cdot5}=0.96,\quad \theta\approx16.3^\circ
$$

::: {.notes}
$a=(3,4)$ ve $b=(4,3)$ için önce iç çarpımı buluyoruz: $\langle a,b\rangle=3(4)+4(3)=24$. Normlar $\|a\|=\sqrt{9+16}=5$ ve $\|b\|=\sqrt{16+9}=5$. Oran $24/25=0.96$ değerini verir; Cauchy-Schwarz eşitsizliği bu oranın $[-1,1]$ içinde kalacağını zaten garanti ettiği için $\arccos(0.96)$'yı hesaplayabiliriz, sonuç yaklaşık $16.3^\circ$'dir.

Bu formül, iki vektörün "ne kadar aynı yöne baktığını" sayısallaştırır: oran $1$'e yaklaştıkça vektörler aynı yöne, $-1$'e yaklaştıkça zıt yönlere yaklaşır. Oranın tam olarak sıfır olduğu durum ayrı bir ad alır, çünkü iki vektörün birbirine dik olduğu anı işaretler; sırada bu özel durumu ele alacağız.
:::

---

## Ortogonallik

$$
\langle u,v\rangle = 0 \iff \theta = 90^\circ
$$

$$
p=\begin{bmatrix}1\\2\end{bmatrix},\quad q=\begin{bmatrix}2\\-1\end{bmatrix}
$$

$$
\langle p,q\rangle = 1(2)+2(-1)=0
$$

::: {.notes}
Açı formülünde $\cos\theta=0$ olması $\theta=90^\circ$ demektir; pay sıfır olduğunda $\cos\theta$ de sıfırdır. Dolayısıyla iki vektörün dik olması ile iç çarpımlarının sıfır olması aynı koşulu anlatır. Bu ilişkiyi doğrudan tanım olarak da kullanabiliriz: $\langle u,v\rangle=0$ ise $u$ ve $v$ ortogonaldir, hiç $\cos\theta$ ya da $\arccos$ hesaplamadan.

$p=(1,2)$ ve $q=(2,-1)$ için $\langle p,q\rangle=1(2)+2(-1)=2-2=0$ çıkıyor; bu iki vektör ortogonaldir. Ortogonallik testi normlara bile ihtiyaç duymaz — yalnız iç çarpımın sıfır olup olmadığına bakılır. Bu, ortogonalliği pratikte kontrol etmenin en hızlı yolu: açı hesabına girmeden tek bir çarpım-toplam işlemiyle karar verilir.
:::

---

## Ortogonal ve Ortonormal Kümeler

- Ortogonal küme: ikili iç çarpımlar sıfır
- Ortonormal küme: ayrıca her vektörün normu $1$
- Örnek: $e_1=(1,0)$, $e_2=(0,1)$

$$
\langle e_1,e_2\rangle=0,\qquad \|e_1\|=\|e_2\|=1
$$

::: {.notes}
Ortogonallik tanımını tek bir vektör çiftinden bir kümeye genişletebiliriz. Bir vektör kümesi, içindeki her ikili birbirine ortogonalse ortogonal küme adını alır. Ortonormal küme bu koşula bir tane daha ekler: kümedeki her vektörün normu $1$ olmalıdır, yani her vektör ayrıca birim uzunlukta olmalıdır.

Standart taban $e_1=(1,0)$ ve $e_2=(0,1)$ hem ortogonal hem ortonormal bir kümedir: $\langle e_1,e_2\rangle=1(0)+0(1)=0$ ve $\|e_1\|=\|e_2\|=1$. Bu, ortonormal kümelerin en tanıdık örneğidir; genel bir vektör uzayında farklı ortonormal kümeler bulmak mümkündür ve bu kümeler hesap açısından standart tabana benzer bir kolaylık sağlar.
:::

---

## Sık Yapılan Hatalar

1. İç çarpımı yalnızca nokta çarpımı sanmak.
2. Sıfır iç çarpımından bir vektörün sıfır olduğu sonucuna varmak.
3. Ortogonalliği kontrol etmek için önce açıyı hesaplamak.
4. Norm hesabında negatif bileşenin karesini almayı atlamak.
5. Ağırlıklı bir formülün otomatik olarak iç çarpım olduğunu varsaymak.

::: {.notes}
İlk hata, standart iç çarpımı tanımın kendisiyle karıştırır; $u^Tv$ yalnızca üç aksiyomu sağlayan formüllerden biridir, ağırlıklı iç çarpım örneğinde gördüğümüz gibi başka geçerli seçimler de vardır. İkinci hata skaler çarpımdaki $ax=0,\ a\ne0\Rightarrow x=0$ alışkanlığını buraya taşır; ortogonal iki vektörün iç çarpımı sıfırdır ama vektörlerin kendisi sıfırdan çok uzak olabilir — $p=(1,2)$ ve $q=(2,-1)$ örneği bunu doğrudan gösteriyor.

Üçüncü hata gereksiz bir dolambaç: ortogonallik $\langle u,v\rangle=0$ ile doğrudan test edilir, açı ya da $\arccos$ hesabına gerek yoktur. Dördüncü hata işaret hatasıdır; $(-1)^2=1$ olduğunu unutup normu eksi bir bileşenle küçültme yanılgısına düşülür. Beşinci hata, ağırlıklı iç çarpım tanımındaki $w_1,w_2>0$ koşulunu atlamaktır — ağırlıklardan biri negatif ya da sıfır seçilirse pozitif tanımlılık bozulur ve elde edilen formül artık bir iç çarpım olmaz.
:::

---

## Karar Soruları

1. $\langle u,v\rangle=0$ iken $u$ ya da $v$ sıfır vektör olmak zorunda mı?
2. Genel bir iç çarpımda $\|v\|=0$ iken $v$ ne olmalı?
3. İki vektör standart iç çarpımda dik değilken başka bir iç çarpımda dik olabilir mi?

::: {.notes}
Birinci soruda cevap hayır: $p=(1,2)$ ve $q=(2,-1)$ ikisi de sıfırdan farklı olduğu hâlde $\langle p,q\rangle=0$ veriyordu. Sıfır iç çarpım yalnızca iki vektörün birbirine dik olduğunu söyler, herhangi birinin sıfır olduğunu söylemez.

İkinci soruda cevap zorunlu: pozitif tanımlılık aksiyomu $\langle v,v\rangle=0$ eşitliğinin ancak $v=0$ iken sağlanacağını garanti eder; bu aksiyom olmasaydı norm sıfır olduğu hâlde vektörün kendisi sıfırdan farklı kalabilirdi, ki bu "uzunluk" fikrine aykırı olurdu. Üçüncü soruda cevap evet: ortogonallik belirli bir iç çarpıma göre tanımlanır, ağırlıklı iç çarpım örneğinde gördüğümüz gibi aynı vektör çifti farklı iç çarpımlarda farklı sonuç verebilir; standart iç çarpımda dik olmayan iki vektör başka bir ağırlıklandırmada dik çıkabilir.
:::

---

## Sıradaki Soru

- Vektörü dik doğrultular boyunca ayırmak
- Katsayılar birbirinden bağımsız mı?

> Ortogonal bir tabanda katsayı bulmak, genel bir denklem sistemi çözmekten daha basit olabilir.

::: {.notes}
İç çarpımın genel aksiyomları normu, Cauchy–Schwarz eşitsizliğini, açıyı ve ortogonalliği aynı yapı içinde ilişkilendirir. Bir vektör uzayında "dik" doğrultular, ilgili iç çarpımın sıfır olup olmadığına bakılarak somut biçimde belirlenebilir.

Bu testin asıl gücü, bir vektörü birden fazla dik doğrultu boyunca ayırdığımızda ortaya çıkıyor: her doğrultudaki katsayıyı diğerlerinden bağımsız biçimde bulabiliyoruz, üstelik denklem sistemi çözmeye hiç gerek kalmadan. Aynı hesap ortogonal izdüşümde doğrudan kullanılır.
:::
