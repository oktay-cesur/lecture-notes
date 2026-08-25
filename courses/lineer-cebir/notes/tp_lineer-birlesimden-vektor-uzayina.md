---
title: "Lineer Birleşimden Vektör Uzayına"
subtitle: "MATE 213 — Lineer Cebir"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-11
execute:
  echo: false
---

## Çözüm Kümesi Nasıl Bir Yapı Taşır?

- Önceki soru: **hangi vektörler üretilebilir**?
- Şimdi: kümenin kendisi nasıl davranır?

$$
S_0=\{(x,y,z)\in\mathbb{R}^3: x+y-z=0\}
$$

$$
S_1=\{(x,y,z)\in\mathbb{R}^3: x+y-z=1\}
$$

::: {.notes}
Lineer birleşim ve bağımsızlık üç soru doğurur: bir vektör listesi hangi vektörleri üretebilir, üretici listede gereksiz vektör var mı, her vektörü tek biçimde üreten en küçük yapı nedir? Bu soruların ilkine cevap aramadan önce, "üretilen" kümenin kendisinin nasıl bir yapı taşıdığını anlamak gerekir.

İki basit sistemle başlıyoruz: $x+y-z=0$ ve $x+y-z=1$. Sol taraf aynı, sağ taraf farklı; biri homojen, öteki değil. $S_0$ ve $S_1$ bu iki sistemin çözüm kümeleridir ve ikisi de $\mathbb{R}^3$'ün bir alt kümesidir. Toplama ve skalerle çarpmaya karşı aynı davranıp davranmadıklarını üç basit soruyla karşılaştıracağız.
:::

---

## İki Çözüm Kümesini Parametrelemek

- $y=s$, $z=t$ seçilir
- $x=-s+t$ (S0) ya da $x=1-s+t$ (S1)

$$
S_0=\{s(-1,1,0)+t(1,0,1): s,t\in\mathbb{R}\}
$$

$$
S_1=(1,0,0)+\{s(-1,1,0)+t(1,0,1): s,t\in\mathbb{R}\}
$$

::: {.notes}
Her iki sistemde de $y$ ve $z$ serbestçe seçilebilir; $x$ bu seçime bağlı olarak belirlenir. $y=s$, $z=t$ konursa $S_0$'da $x=-s+t$, $S_1$'de $x=1-s+t$ elde edilir. Her iki küme de aynı iki yön vektörünü, $(-1,1,0)$ ve $(1,0,1)$'i, taşır; $S_1$ yalnız $(1,0,0)$ kadar ötelenmiş hâlidir — $(1,0,0)$ kendisi $S_1$'in bir çözümüdür ve $s=t=0$ seçimine karşılık gelir.

Aynı iki yön vektörünün ötelenmiş ya da ötelenmemiş biçimde ortaya çıkması rastlantı değildir; $S_0$ ile $S_1$'in yalnız bir sabit kadar farklı olması, toplama ve skalerle çarpma karşısında aynı davranacaklarını göstermez. Bunu sıfır vektörü, toplama ve skalerle çarpma üzerinden karşılaştırıyoruz.
:::

---

## Üç Soru: Sıfır, Toplam, Skaler Kat

| Soru | $S_0$ | $S_1$ |
|---|---|---|
| $0$ çözüm mü? | ✓ | ✗ |
| İki çözümün toplamı çözüm mü? | ✓ | ✗ |
| Bir çözümün skaler katı çözüm mü? | ✓ | ✗ |

::: {.notes}
Sıfır vektörü: $(0,0,0)$ noktasında $0+0-0=0$ olduğundan $0\in S_0$. Aynı noktada $0+0-0=1$ eşitliği sağlanmadığından $0\notin S_1$.

Toplam: $S_0$'da $u=(1,0,1)$ ve $v=(-1,1,0)$ birer çözümdür; toplamları $u+v=(0,1,1)$ de $S_0$'dadır, çünkü $0+1-1=0$. $S_1$'de $p=(1,0,0)$ ve $q=(0,1,0)$ birer çözümdür, ama $p+q=(1,1,0)$ değildir, çünkü $1+1-0=2\neq1$.

Skaler kat: $2u=(2,0,2)$ hâlâ $S_0$'dadır ($2+0-2=0$). $2p=(2,0,0)$ ise $S_1$'de değildir, çünkü $2+0-0=2\neq1$.

Üç testte de $S_0$ ✓ alırken $S_1$ tutarlı biçimde ✗ alıyor. Bu fark rastlantısal değil; kaynağı sistemin homojen olup olmadığında.
:::

---

## Neden Bu Fark Var? Homojenlik

- Sağ taraf sıfırsa toplam ve skaler kat korunur
- Sağ taraf sıfır değilse korunmaz

$$
Ax_1=0,\ Ax_2=0 \Rightarrow A(x_1+x_2)=0,\ A(cx_1)=0
$$

$$
Ax_1=b,\ Ax_2=b \Rightarrow A(x_1+x_2)=2b\neq b
$$

::: {.notes}
Homojen sistemde sağ taraf sıfırdır. $Ax_1=0$ ve $Ax_2=0$ ise $A(x_1+x_2)=Ax_1+Ax_2=0+0=0$ olur; aynı şekilde $A(cx_1)=cAx_1=c\cdot0=0$. Toplam ve skaler kat, matris-vektör çarpımının toplama ve skalerle uyumundan otomatik olarak yine sıfıra gider. Homojen sistemlerin çözüm kümeleri bu iki işleme kapalıdır; buradaki hesap bunun gerekçesini doğrudan gösterir.

Homojen olmayan sistemde sağ taraf $b\neq0$ olduğunda aynı hesap işlemez: $Ax_1=b$ ve $Ax_2=b$ ise $A(x_1+x_2)=Ax_1+Ax_2=2b$ olur, ki bu $b$'ye eşit değildir. Toplam işlemi sağ tarafı ikiye katlıyor, oysa çözüm kümesindeki her nokta yine $b$ üretmek zorunda. Sıfır vektörünün $S_1$'de bulunmaması ile toplamaya kapalı olmaması aynı kökten çıkıyor: sağ taraf sıfırdan farklı.
:::

---

## Tek Vektörden Lineer Birleşime

- Germe bir vektör değil, **küme**

$$
v_1=(1,0,1),\qquad v_2=(0,1,1),\qquad 2v_1-v_2=(2,-1,1)
$$

$$
\operatorname{span}\{v_1,v_2\}=\{av_1+bv_2: a,b\in\mathbb{R}\}
$$

::: {.notes}
Lineer birleşim, skalerle çarpma ve toplamanın art arda uygulanmasıydı; $2v_1-v_2$ bu işlemin tek bir sonucunu verir: $(2,-1,1)$. Katsayılar sabit tutulmayıp $a,b\in\mathbb{R}$ olarak serbest bırakılırsa artık tek bir vektör değil, bütün olası sonuçların oluşturduğu bir küme ortaya çıkar. Bu kümeye $v_1$ ve $v_2$'nin germesi denir ve $\operatorname{span}\{v_1,v_2\}$ ile gösterilir.

Genel katsayılarla $av_1+bv_2=(a,b,a+b)$ elde edilir; ilk iki bileşen doğrudan $a$ ve $b$'dir, üçüncü bileşen bunların toplamıdır. Germe kümesi, $a$ ve $b$'nin bütün gerçek sayı değerlerini taraması üzerinden tanımlanır — sonlu bir liste değil, sonsuz bir kümedir.
:::

---

## Üyelik Problemi

- $w\in\operatorname{span}\{v_1,v_2\}$ mi?

$$
w=(2,-1,1):\ a=2,\ b=-1,\ a+b=1\ \checkmark
$$

$$
z=(2,-1,4):\ a=2,\ b=-1,\ a+b=1\neq4\ \times
$$

::: {.notes}
$w=(2,-1,1)$ için $av_1+bv_2=(a,b,a+b)$ eşitliği ilk iki bileşenden $a=2$, $b=-1$'i zorunlu kılar; üçüncü bileşen $a+b=1$ eşitliğini de sağladığından $w\in\operatorname{span}\{v_1,v_2\}$. $z=(2,-1,4)$'te aynı $a=2$, $b=-1$ değerleri ilk iki bileşenden çıkar, fakat bu kez $a+b=1\neq4$ olduğundan $z\notin\operatorname{span}\{v_1,v_2\}$.

Bu üyelik sorusu aslında yeni bir soru değildir: $A=[v_1\ v_2]$ matrisiyle $\operatorname{span}\{v_1,v_2\}=\{Ax: x\in\mathbb{R}^2\}$ yazılır ve üyelik, $Ax=w$ denklem sisteminin çözülüp çözülemediğine indirgenir. Denklem sistemlerinde kurulan tutarlılık kontrolü burada aynen çalışır.
:::

---

## Gerilen Kümenin Yapısı

- $0\in\operatorname{span}\{v_1,v_2\}$ ($a=b=0$)
- Toplam kapalı
- Skaler kat kapalı

$$
(a_1v_1+b_1v_2)+(a_2v_1+b_2v_2)=(a_1+a_2)v_1+(b_1+b_2)v_2
$$

::: {.notes}
Germe kümesindeki her eleman $av_1+bv_2$ biçimindedir. $a=b=0$ seçimi sıfır vektörünü verir, dolayısıyla $0$ her zaman germe kümesindedir. Kümenin iki elemanı $a_1v_1+b_1v_2$ ve $a_2v_1+b_2v_2$ toplandığında $(a_1+a_2)v_1+(b_1+b_2)v_2$ elde edilir — bu da aynı $v_1,v_2$'nin bir lineer birleşimidir, yani yine germe kümesindedir. Skaler kat için aynı gerekçe geçerlidir.

$S_0=\operatorname{span}\{(-1,1,0),(1,0,1)\}$ olduğu artık görülüyor; $S_0$'ın sıfırı içermesi ve toplama/skalerle çarpmaya kapalı olması bu yüzden rastlantı değil, bir germe olmasının doğrudan sonucu. Geometrik olarak tek bir sıfırdan farklı vektörün germesi orijinden geçen bir doğru, iki bağımsız vektörün germesi orijinden geçen bir düzlemdir; $S_1$ orijinden geçmediği için hiçbir germe olamaz.
:::

---

## Aynı Yapı, Farklı Görünüşler

- $\mathbb{R}^2$, $P_2$, $M_{2\times2}(\mathbb{R})$, $S_0$

$$
u=\begin{bmatrix}1\\2\end{bmatrix},v=\begin{bmatrix}3\\-1\end{bmatrix}\Rightarrow u+v=\begin{bmatrix}4\\1\end{bmatrix}
$$

$$
p(t)=1+2t,\ q(t)=t-t^2\Rightarrow p+q=1+3t-t^2
$$

$$
A=\begin{bmatrix}1&0\\2&1\end{bmatrix},B=\begin{bmatrix}0&3\\-1&2\end{bmatrix}\Rightarrow A+B=\begin{bmatrix}1&3\\1&3\end{bmatrix}
$$

::: {.notes}
Dört farklı nesne türü yan yana konabilir: $\mathbb{R}^2$'de sütun vektörü, $P_2$'de en fazla ikinci dereceden polinom, $M_{2\times2}(\mathbb{R})$'de $2\times2$ matris, $S_0$'da bir homojen sistemin çözümü. Görünüşleri farklıdır ama toplama aynı yapıda çalışır: $u+v=(4,1)$, $p+q=1+3t-t^2$, $A+B=\begin{bmatrix}1&3\\1&3\end{bmatrix}$ — her birinde karşılık gelen bileşenler ya da girdiler tek tek toplanır.

"Vektör" sözcüğü burada nesnenin sütun biçiminde yazılmasını değil, toplama ve skalerle çarpma altındaki rolünü anlatır. Bir polinom ya da bir matris, aynı iki işlem altında aynı biçimde davrandığı sürece bu rolü üstlenir.
:::

---

## Ortak Davranış Listesi

- Toplanır, kümede kalır
- Skalerle çarpılır, kümede kalır
- Sıfır eleman var
- Her elemanın toplamsal tersi var
- Değişme, birleşme, dağılma kuralları

> Her yeni kümede bunları ayrı ayrı kanıtlamak yerine…

::: {.notes}
$\mathbb{R}^n$, $P_n$, $M_{m\times n}(\mathbb{R})$ ve homojen çözüm kümeleri gibi görünüşte ayrı nesneler aynı beş davranışı sergiliyor: toplama ve skalerle çarpma kümenin dışına çıkmıyor, bir sıfır eleman var, her elemanın toplamsal tersi var, değişme-birleşme-dağılma kuralları geçerli. Vektör işlemlerinin cebirsel özellikleri konusunda bu kuralların toplama ve skalerle çarpma için ayrı ayrı sekiz maddesi zaten kurulmuştu; şimdi aynı sekiz maddenin $\mathbb{R}^n$'e özgü olmadığı görülüyor.

Her yeni küme karşılaşıldığında bu davranışları teker teker yeniden kanıtlamak yerine, onları tek bir tanımın altında toplamak daha verimli. Bu tanım **vektör uzayı**dır.
:::

---

## Vektör Uzayı: Bileşenler

$$
(V,F,+,\cdot)
$$

- $V$: eleman kümesi
- $F$: skaler cismi (genelde $\mathbb{R}$)
- $+$: toplama işlemi
- $\cdot$: skalerle çarpma işlemi

::: {.notes}
Bir vektör uzayı dört bileşenle tanımlanır: elemanların oluşturduğu $V$ kümesi, skalerlerin geldiği $F$ cismi (bu derste hep $\mathbb{R}$), ve bu iki küme arasında tanımlı $+$ toplama ile $\cdot$ skalerle çarpma işlemleri. $V$'nin elemanlarına, sütun vektörü olsun ya da olmasın, vektör denir; belirleyici olan eleman türü değil, işlemlerin nasıl tanımlandığıdır.

Bu dört bileşenin bir vektör uzayı sayılması için işlemlerin belirli kurallara uyması gerekir. Kurallar üç grupta toplanır: işlemlerin kümede kalması, toplamanın grup yapısı taşıması, skalerle çarpmanın toplama ve cisim işlemleriyle uyumlu olması.
:::

---

## Aksiyomlar: Kapanış

- İşlemler kümenin dışına çıkmaz

$$
u,v\in V \Rightarrow u+v\in V
$$

$$
\alpha\in F,\ v\in V \Rightarrow \alpha v\in V
$$

::: {.notes}
Kapanış, bir kümenin vektör uzayı adayı olabilmesi için ilk kontrol noktasıdır: $V$'nin iki elemanının toplamı yine $V$'de kalmalı, bir elemanın herhangi bir skalerle çarpımı da yine $V$'de kalmalı. $S_0$ ile $S_1$ üzerindeki üç testte gördüğümüz toplam ve skaler kat kontrolleri tam olarak bu iki aksiyomu sınıyordu; $S_1$'in başarısız olması onun bir vektör uzayı olamayacağını doğrudan gösteriyor.

Kapanış aksiyomları en hızlı test edilen kuraldır: tek bir karşı örnek kapanışı kırmaya yeter. Yeni bir kümenin vektör uzayı olup olmadığına bakılırken önce buradan başlanır.
:::

---

## Aksiyomlar: Toplama Değişmeli Grup

- Değişme, birleşme, sıfır, ters

$$
\begin{aligned}
u+v&=v+u\\
(u+v)+w&=u+(v+w)\\
u+0&=u\\
u+(-u)&=0
\end{aligned}
$$

::: {.notes}
Toplama dört özellik taşır: değişme, birleşme, bir sıfır elemanının varlığı, her elemanın toplamsal bir tersinin varlığı. Bunlar vektör işlemlerinin cebirsel özellikleri konusunda $\mathbb{R}^n$ için zaten kurulmuştu; burada $V$'nin herhangi bir vektör uzayı için aynı dört kural aksiyom olarak isteniyor.

Sıfır elemanı ve toplamsal ters, listenin en çok iş gören iki maddesidir. Bir kümenin sıfır elemanı yoksa ya da bir elemanının tersi kümenin dışına düşüyorsa, o küme vektör uzayı olamaz — $S_1$'in sıfırı içermemesi bu yüzden tek başına yeterli bir ret gerekçesiydi. İlerleyen konularda bir kümenin vektör uzayı olup olmadığına karar verirken bu iki maddeye önce bakmak işi kısaltacak.
:::

---

## Aksiyomlar: Skalerle Çarpma Uyumu

- İki dağılma, birleşme, birim skaler

$$
\begin{aligned}
\alpha(u+v)&=\alpha u+\alpha v\\
(\alpha+\beta)u&=\alpha u+\beta u\\
\alpha(\beta u)&=(\alpha\beta)u\\
1\cdot v&=v
\end{aligned}
$$

::: {.notes}
Skalerle çarpma da dört kural taşır: toplama üzerine iki yönlü dağılma, skalerin kendi içinde birleşme, birim skalerin etkisiz olması. Bunlar da vektör işlemlerinin cebirsel özellikleri konusunda $\mathbb{R}^n$ üzerinde ayrı ayrı doğrulanmıştı; burada genel bir $V$ için aksiyom olarak isteniyorlar.

Kapanışın iki maddesi, toplamanın dört maddesi ve skalerle çarpmanın dört maddesiyle liste on aksiyoma tamamlanıyor. $0\cdot v=0$ ve $(-1)\cdot v=-v$ gibi sonuçlar bu on maddeden türetilir; ayrıca aksiyom olarak istenmezler.
:::

---

## Standart Örnekler

| Küme | Eleman |
|---|---|
| $\mathbb{R}^n$ | sütun vektörü |
| $P_n$ | en çok $n$. derece polinom |
| $M_{m\times n}(\mathbb{R})$ | $m\times n$ matris |

- Üçü de on aksiyomu sağlar

::: {.notes}
$\mathbb{R}^n$, $P_n$ ve $M_{m\times n}(\mathbb{R})$ derste sık karşılaşılan üç standart vektör uzayıdır; toplama ve skalerle çarpma her üçünde de on aksiyomu sağlayacak biçimde çalışır. $P_n$'de toplama katsayıların toplanmasıdır, $M_{m\times n}(\mathbb{R})$'de girdilerin toplanmasıdır — ikisi de $\mathbb{R}^n$'deki bileşen toplamasının aynı mantığının başka bir görünüşü.

Fonksiyon uzayları gibi başka örnekler de vektör uzayı aksiyomlarını sağlar; burada $\mathbb{R}^n$, $P_n$ ve $M_{m\times n}(\mathbb{R})$ örnekleri ele alınır. Sınıflandırma tek başına yeterli değildir; her defasında aynı iki soru sorulur: Toplama ve skalerle çarpma kümenin içinde mi kalıyor, on aksiyom sağlanıyor mu?
:::

---

## Standart Olmayan Bir Örnek: Vektör Değil

- $0=(0,0)\notin V$ ($x=0$, $x>0$ değil)

$$
V=\{(x,y)\in\mathbb{R}^2: x>0\}
$$

$$
(-1)\cdot(1,0)=(-1,0)\notin V
$$

::: {.notes}
$V=\{(x,y)\in\mathbb{R}^2:x>0\}$ ilk bakışta $\mathbb{R}^2$'nin doğal bir alt kümesi gibi durur, fakat iki aksiyomu birden kırar. $(1,0)\in V$ iken $(-1)\cdot(1,0)=(-1,0)$'ın birinci bileşeni negatif olduğundan $(-1,0)\notin V$; skalerle çarpmaya kapalı değil. Ayrıca $(0,0)$'ın birinci bileşeni $0$, $x>0$ koşulunu sağlamadığından sıfır vektörü de $V$'de değil.

Bu iki eksiklik, kapanış ve sıfır elemanı aksiyomlarının pratikte en çok neyi elediğini gösteriyor. Yalnız pozitif skalerlerle ya da birkaç örnek vektörle test etmek yanıltıcı olabilir; negatif skaler ve sıfır adayı her seferinde ayrıca kontrol edilmelidir.
:::

---

## Sık Yapılan Hatalar

1. "Vektör"ü sütun biçimiyle özdeşleştirmek
2. Kapanışı kontrol etmeden aksiyomlara geçmek
3. Sıfır elemanını "sayı $0$" sanmak
4. Yalnız pozitif skalerlerle test etmek
5. Birkaç örnekle aksiyomu "kanıtlamak"

::: {.notes}
Birinci hata, dört farklı nesne türünün toplama davranışında görülen ayrımı unutmaktır: bir polinom ya da matris sütun biçiminde yazılmasa da vektör uzayı elemanı olabilir; belirleyici toplama ve skalerle çarpmanın davranışıdır. İkinci hata sırayı ters çevirir — kapanış sağlanmadan toplama grubunun ya da skalerle çarpmanın diğer özelliklerini kontrol etmenin bir anlamı yok, çünkü işlemler kümenin dışına çıkıyorsa sonuç zaten $V$'de değil.

Üçüncü hata $P_n$'de sıfır polinomunu ya da $M_{m\times n}$'de sıfır matrisini gerçek sayı $0$'la karıştırmaktır; her vektör uzayının kendi sıfır elemanı vardır ve bu eleman genelde sayısal sıfırdan farklı görünür. Dördüncü ve beşinci hata test disiplinindeki gevşekliktir: yalnız $\alpha>0$ ile ya da yalnız bir iki $v$ ile deneme yapmak, $V=\{(x,y):x>0\}$ örneğinde görüldüğü gibi negatif skalerdeki kırılmayı gizler. Aksiyomlar bütün $\alpha\in F$ ve bütün $u,v\in V$ için geçerli olmalıdır; tek bir karşı örnek yeterken, sonlu sayıda doğrulama hiçbir zaman yeterli değildir.
:::

---

## Karar Soruları

1. $\mathbb{Z}^2$ (tamsayı bileşenli, standart toplama) vektör uzayı mı?
2. Tam $3$. dereceden polinomlar kümesi vektör uzayı mı?

::: {.notes}
Birincisi değildir. $\mathbb{Z}^2$ toplamaya kapalıdır — iki tamsayı çiftinin toplamı yine tamsayı çiftidir — ama skalerle çarpmaya kapalı değildir: $\alpha=\tfrac12$ ve $v=(1,0)$ için $\tfrac12v=(\tfrac12,0)$ tamsayı bileşenli değildir, $\mathbb{Z}^2$'nin dışına çıkar. Skaler cismi $\mathbb{R}$ seçildiği sürece bu kırılma kaçınılmazdır.

İkincisi de değildir. Tam olarak üçüncü dereceden iki polinomun toplamı üçüncü derece terimini iptal edebilir: $p(t)=t^3+t$ ve $q(t)=-t^3+1$ için $p+q=t+1$, artık üçüncü derece değildir. Toplama kapanışı burada kırılır; ayrıca sıfır polinomunun derecesi tanımsız olduğundan sıfır eleman da bu kümede bulunmaz.
:::

---

## Kapanış ve Sıradaki Soru

- On aksiyomu her seferinde baştan kontrol etmek yorucu
- $S_0\subset\mathbb{R}^3$: $\mathbb{R}^3$ zaten bilinen bir vektör uzayı

> Bu iç içelik daha hızlı bir yol sağlar mı?

::: {.notes}
Çözüm kümelerinin toplama ve skalerle çarpma karşısındaki davranışı germe kavramına bağlanır. $\mathbb{R}^n$, $P_n$, $M_{m\times n}(\mathbb{R})$ ve çözüm kümeleri aynı toplama ve skalerle çarpma kurallarına uyduğunda hepsi vektör uzayı tanımıyla ele alınabilir.

Her yeni kümenin vektör uzayı olup olmadığına on aksiyomla karar vermek uzun bir iştir. $S_0$ örneğinde olduğu gibi, incelenen küme zaten bilinen bir vektör uzayının — burada $\mathbb{R}^3$'ün — içinde oturuyorsa, bu iç içelik on aksiyomu tek tek kontrol etmekten daha hızlı bir yol sağlar mı? Bu soru açık kalıyor.
:::
