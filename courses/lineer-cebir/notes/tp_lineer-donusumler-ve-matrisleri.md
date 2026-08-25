---
title: "Lineer Dönüşümler ve Matrisleri"
subtitle: "MATE 213 — Lineer Cebir"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-11
execute:
  echo: false
---

## Bütün Bu İşlemler Aslında Ne?

- $Ax$: matris-vektör çarpımı
- $P_{C\leftarrow B}$: taban değişimi
- $A=PDP^{-1}$: köşegenleştirme

> Hepsi aynı çatının özel hâlleri mi?

::: {.notes}
Dönem boyunca matrislerle üç ayrı iş yaptık: bir vektörü $Ax$ ile başka bir vektöre gönderdik, bir vektörün koordinatlarını $P_{C\leftarrow B}$ ile bir tabandan diğerine taşıdık, kare bir $A$ matrisini $A=PDP^{-1}$ ile köşegen bir forma açtık. Köşegenleştirmede öz vektör tabanının $A$'nın matrisini sadeleştiren bir taban olduğunu görmüştük; bu gözlem asıl sorunun taban seçimiyle ilgili olduğunu düşündürüyor.

**Lineer dönüşüm** kavramı bu üç işlemi aynı tanım altında toplar. $Ax$, taban değişimi ve köşegenleştirme bu tanımın üç ayrı görünümünü verir.
:::

---

## Tanım: Lineer Dönüşüm

$V,W$ gerçek vektör uzayları olsun. $T:V\to W$ fonksiyonu:

$$
\boxed{T(au+bv)=aT(u)+bT(v)}
$$

her $u,v\in V$, $a,b\in\mathbb{R}$ için sağlanıyorsa **lineer dönüşüm**dür.

::: {.notes}
Tanım kasıtlı olarak $V$ ve $W$'yi belirtmiyor: ikisi de $\mathbb{R}^n$ olabilir, ama biri polinom uzayı, diğeri matris uzayı da olabilir. Lineer dönüşüm fikri, sayı vektörlerinin ötesinde toplama ve skalerle çarpmaya sahip herhangi iki uzay arasında çalışır.

Koşulun kendisi tanıdık: matris çarpımı toplama ve skalerle çarpmayla uyumludur. $T(x)=Ax$ dönüşümünün lineerlik koşulunu otomatik sağlaması bu özellik kullanılarak doğrulanır.
:::

---

## İki Koşul, Tek Cümle

- Toplama: $T(u+v)=T(u)+T(v)$
- Skaler: $T(cu)=cT(u)$
- Özel durum: $T(0)=0$

::: {.notes}
Tanımdaki tek koşul, $a=b=1$ seçildiğinde toplamaya saygıyı, $v=0$ seçildiğinde skalerle çarpmaya saygıyı veriyor. İki koşulu ayrı ayrı denetlemek pratikte daha kolay: önce toplamanın korunduğuna, sonra skaler katın korunduğuna bakılır.

Skalerle çarpma koşulunda $c=0$ seçilirse $T(0\cdot u)=0\cdot T(u)$, yani $T(0)=0$ çıkar. Her lineer dönüşüm sıfır vektörünü sıfır vektörüne göndermek zorunda; dönüşümün lineer olmadığını göstermenin en hızlı yolu çoğu zaman bu koşulun bozulduğunu görmektir.
:::

---

## Soru: $\mathbb{R}^2\to\mathbb{R}^2$ Bir Dönüşüm

$$
A=\begin{bmatrix}1&2\\0&1\end{bmatrix},\qquad T(x)=Ax
$$

$T$ lineer midir?

::: {.notes}
Elimizdeki $A$ sabit bir matris; $T$ her $x\in\mathbb{R}^2$'yi $Ax$'e gönderiyor. Tanımı doğrudan uygulamak yerine, matris çarpımının hangi özelliklerine ihtiyacımız olduğunu önce belirleyelim: $A(u+v)$ ve $A(cu)$ ifadelerinin $Au+Av$ ve $cAu$'ya eşit olup olmadığı.

Bu soru genel: her $m\times n$ matris için aynı doğrulama aynı şekilde çalışır. $A$'nın somut girdileri hesabı kolaylaştırıyor, ama argüman bu sayılara bağlı değil.
:::

---

## Çözüm: Matris Çarpımı Otomatik Lineer

$$
A(au+bv)=aAu+bAv
$$

Dağılma ve skalerle uyum özelliklerinden gelir.

$$
\boxed{T(x)=Ax\ \text{her zaman lineerdir}}
$$

::: {.notes}
Matris çarpımının toplama üzerine dağılması ($A(u+v)=Au+Av$) ve skalerle değişmesi ($A(cu)=cAu$) matris işlemlerinin özelliklerinde kurulmuştu; bu iki özelliği birleştirmek doğrudan $A(au+bv)=aAu+bAv$ eşitliğini verir, yani tam olarak lineerlik koşulunu.

Bu sonuç $A$'nın hangi matris olduğundan bağımsızdır: $Ax$ biçimindeki her dönüşüm otomatik lineerdir. Ters yöndeki soru şudur: Her lineer dönüşüm mutlaka bir matrisle mi verilir, yoksa matris görünmeyen örnekler de var mıdır?
:::

---

## Soru: Türev Alma Bir Dönüşüm müdür?

$$
T:P_2\to P_1,\qquad T(p)=p'
$$

$T$ lineer midir?

::: {.notes}
$P_2$ derecesi en çok $2$ olan polinomların uzayı, $P_1$ derecesi en çok $1$ olan polinomların uzayı. $T$ bir polinomu türevine gönderiyor; girdi ve çıktı artık sayı vektörü değil, polinom.

Burada hiçbir matris görünmüyor, ama toplama ve skalerle çarpma iki uzayda da tanımlı: polinomlar toplanabiliyor, bir sayıyla çarpılabiliyor. Lineerlik testi aynı: $T(af+bg)=aT(f)+bT(g)$ sağlanıyor mu?
:::

---

## Çözüm: Türevin Lineerliği

$$
(f+g)'=f'+g',\qquad (cf)'=cf'
$$

$$
\boxed{T(p)=p'\ \text{lineerdir}}
$$

::: {.notes}
Türev kurallarının ilk ikisi tam olarak lineerlik koşulunu karşılıyor: toplamın türevi türevlerin toplamı, sabit katın türevi katın türevi. Bu kurallar analizden zaten biliniyor; burada yeni olan, bunların lineer dönüşüm tanımının bir örneği olduğunu görmek.

Bu örnek, lineer dönüşümün matris çarpımına indirgenen bir işlem olmadığını gösteriyor: $T$'nin girdisi bir polinom ve tanım matris olmadan da çalışıyor. Bir taban seçildiğinde bu dönüşüm de bir matrisle temsil edilebilir.
:::

---

## Karşı Örnek: $T(x)=x+1$ Lineer Değil

$$
T:\mathbb{R}\to\mathbb{R},\qquad T(x)=x+1
$$

$$
T(0)=1\neq0
$$

::: {.notes}
$T(0)=1$ çıkıyor; oysa her lineer dönüşüm sıfırı sıfıra göndermek zorunda. Bu tek gözlem $T$'nin lineer olmadığını göstermeye yetiyor.

Aynı sonucu toplama koşuluyla da görebiliriz: $T(1+2)=T(3)=4$, ama $T(1)+T(2)=2+3=5$. İki sonuç eşit değil, toplamaya saygı bozuluyor. Kaynağı basit: $+1$ terimi sabit, oysa lineerlik sıfırdan başlayan orantılı bir davranış istiyor; sabit bir terim eklemek bu orantıyı bozuyor.
:::

---

## Çekirdek: $\ker T$

$$
\ker T=\{v\in V: T(v)=0\}
$$

$V$'nin sıfıra giden vektörleri.

::: {.notes}
Çekirdek, $T$ altında yok olan yönleri toplar: hangi girdiler sıfır çıktı veriyor. $T(0)=0$ her zaman sağlandığından sıfır vektörü her dönüşümün çekirdeğinde bulunur; asıl soru sıfırdan başka bir şey var mı.

$\ker T$ boş küme olamaz, en az sıfırı içerir. Çekirdeğin yalnız sıfırdan ibaret olması ($\ker T=\{0\}$) ile daha büyük olması, dönüşümün girdi bilgisini ne kadar koruduğunu ayırt eden temel çizgi.
:::

---

## Görüntü: $\operatorname{Im} T$

$$
\operatorname{Im}T=\{T(v):v\in V\}\subseteq W
$$

$T$'nin gerçekten ürettiği vektörler.

::: {.notes}
Görüntü, $W$'nin $T$ tarafından gerçekten üretilen köşesi. $W$'nin bütün vektörleri değil, yalnız bir $v\in V$'den $T(v)=w$ biçiminde elde edilebilenler görüntüye girer.

$\operatorname{Im}T=W$ olması dönüşümün $W$'yi tamamen kapladığı anlamına gelir; $\operatorname{Im}T$ $W$'nin gerçek bir alt kümesindeyse bazı $w\in W$ vektörlerine hiçbir $v$'den ulaşılamıyor demektir.
:::

---

## Özel Durum: $T(x)=Ax$

$$
A=\begin{bmatrix}1&2\\2&4\end{bmatrix}
$$

$$
\ker T=\operatorname{Null}(A),\qquad \operatorname{Im}T=\operatorname{Col}(A)
$$

::: {.notes}
Bu $A$ için $\ker T$ ile $\operatorname{Null}(A)$ aynı küme: $Ax=0$ denklemini çözmek homojen sistemlerde zaten yaptığımız iş. $R_2\leftarrow R_2-2R_1$ işlemi ikinci satırı sıfırlıyor, geriye $x_1+2x_2=0$ kalıyor; $x_2=t$ seçilirse $\ker T=\{t(-2,1):t\in\mathbb{R}\}$.

$\operatorname{Im}T$ ile $\operatorname{Col}(A)$ de aynı: $A$'nın sütunları $(1,2)$ ve $(2,4)$, ikinci sütun birincinin iki katı olduğundan sütun uzayı tek bir yön, $\operatorname{span}\{(1,2)\}$. Bu bağlantı yeni bir hesap gerektirmiyor; ker ve Im, önceden Null uzayı ve sütun uzayı adıyla çalıştığımız nesnelerin yalnız daha genel bir dilde yeniden adlandırılması.
:::

---

## Hızlı Kontrol

Yukarıdaki $A$ için $(2,-1)\in\ker T$ mi?

::: {.notes}
$A(2,-1)=(1\cdot2+2\cdot(-1),\,2\cdot2+4\cdot(-1))=(0,0)$ çıkıyor; evet, $(2,-1)$ çekirdekte. Bu vektör $\ker T=\{t(-2,1)\}$ kümesinin $t=-1$ değerine karşılık geliyor.

Kontrol tek adımlık: $Av$'yi hesaplayıp sıfır olup olmadığına bakmak yeterli, $\ker T$'nin tamamını yeniden çözmeye gerek yok.
:::

---

## Dönüşüm Tabanla Nasıl Belirlenir?

$B=(b_1,\ldots,b_n)$, $V$'nin tabanı olsun.

Her $v=c_1b_1+\cdots+c_nb_n$ için:

$$
T(v)=c_1T(b_1)+\cdots+c_nT(b_n)
$$

::: {.notes}
Bir taban seçildiğinde $V$'nin her vektörü o tabanın tek bir lineer birleşimi olarak yazılır; bu, taban tanımının kendisi. $T$ lineer olduğundan bu birleşimi $T$'nin içinden dışına taşıyabiliyoruz: $T(v)$'yi hesaplamak için $v$'nin kendisini değil, yalnız $T(b_1),\ldots,T(b_n)$'i bilmek yetiyor.

Bu, lineer dönüşümün en pratik sonucudur: sonsuz sayıda vektör yerine yalnız $n$ tane taban vektörünün görüntüsünü kaydetmek dönüşümün tamamını belirler. Bu görüntüler sütunlara yerleştirilerek dönüşümün matrisi elde edilir.
:::

---

## Dönüşümün Matrisi $[T]_{C\leftarrow B}$

$B$: $V$'nin tabanı, $C$: $W$'nin tabanı.

$$
\boxed{[T]_{C\leftarrow B}\text{'nin }i\text{. sütunu}=[T(b_i)]_C}
$$

::: {.notes}
$[T]_{C\leftarrow B}$'nin sütunları $T(b_i)$'nin kendisi değil, $T(b_i)$'nin $C$ tabanındaki koordinat vektörü. $V$ ve $W$ polinom ya da başka bir uzay olduğunda bile bu matris sıradan sayılardan oluşur, çünkü koordinat vektörleri her zaman sayı listesidir.

Bu matris kurulduktan sonra $T(v)$'yi hesaplamak matris-vektör çarpımına indirgenir: $[T(v)]_C=[T]_{C\leftarrow B}[v]_B$. Soyut dönüşüm, koordinatlar üzerinden somut bir çarpıma dönüşmüş olur.
:::

---

## Örnek: Türev Dönüşümünün Matrisi

$B=(1,x,x^2)$, $C=(1,x)$

$$
T(1)=0,\ T(x)=1,\ T(x^2)=2x
$$

$$
[T]_{C\leftarrow B}=\begin{bmatrix}0&1&0\\0&0&2\end{bmatrix}
$$

::: {.notes}
Her taban vektörünün türevini alıp $C=(1,x)$ tabanında yazıyoruz: $T(1)=0$ koordinatı $(0,0)$, $T(x)=1$ koordinatı $(1,0)$, $T(x^2)=2x$ koordinatı $(0,2)$. Bu üç koordinat vektörü matrisin sütunlarını oluşturuyor.

Matris $2\times3$: iki satır $C$'nin boyutundan, üç sütun $B$'nin boyutundan geliyor. Örneğin $p(x)=3+5x+7x^2$ için $[p]_B=(3,5,7)^T$, çarpım $[T]_{C\leftarrow B}[p]_B=(5,14)^T$ verir; bu da $p'(x)=5+14x$'in $C$ tabanındaki koordinatı, doğrudan $p'$'ü hesaplayıp doğrulanabilir.
:::

---

## Bileşim ve Taban Değişimi

$$
[S\circ T]_{D\leftarrow B}=[S]_{D\leftarrow C}\,[T]_{C\leftarrow B}
$$

$$
P_{C\leftarrow B}=[I]_{C\leftarrow B}
$$

::: {.notes}
İki dönüşümün art arda uygulanması matrislerinin çarpımına karşılık gelir: önce $T$ ile $B$'den $C$'ye, sonra $S$ ile $C$'den $D$'ye geçilir, toplam etki $[S]_{D\leftarrow C}[T]_{C\leftarrow B}$ çarpımıdır. Sıra matris çarpımındaki sırayla aynı, en sağdaki matris en önce işler.

Taban değişim matrisi $P_{C\leftarrow B}$ aslında yeni bir araç değil: $V$ üzerindeki özdeş dönüşümün ($I(v)=v$) $B$'den $C$'ye matrisi. Bir vektörü değiştirmez, yalnız hangi tabanda okunduğunu değiştirir; bu yüzden $[T]_{C\leftarrow B}$ ailesinin özel bir üyesidir.
:::

---

## Köşegenleştirmeye Geri Bakış

$$
A=PDP^{-1}
$$

$P$'nin sütunları: öz vektör tabanı $\mathcal B$.

$$
\boxed{[T]_{\mathcal B\leftarrow\mathcal B}=D}
$$

::: {.notes}
Köşegenleştirmede $P$'nin sütunlarını öz vektörler oluşturuyordu; bu sütunlar $\mathbb{R}^n$ için yeni bir taban $\mathcal B=(v_1,\ldots,v_n)$ kuruyordu. $T(x)=Ax$ dönüşümünün bu yeni tabandaki matrisi tam olarak $D$: standart tabanda karmaşık görünen $A$, öz vektör tabanında köşegen bir matrise indirgeniyor.

Bu, $A=PDP^{-1}$'in yalnız bir hesap kısayolu olmadığını gösteriyor: aynı dönüşümün, uygun bir tabanda daha basit görünen matrisi. $P$ ve $P^{-1}$, standart taban ile $\mathcal B$ arasındaki taban değişim matrisleri — köşegenleştirmede kurduğumuz $[x]_{\mathcal B}=P^{-1}x$ ilişkisiyle aynı yapı.
:::

---

## Somut Örnek: Aynı Matrisi Yeniden Okumak

$$
A=\begin{bmatrix}4&1\\2&3\end{bmatrix},\qquad \lambda_1=5,\ \lambda_2=2
$$

$$
v_1=\begin{bmatrix}1\\1\end{bmatrix},\qquad v_2=\begin{bmatrix}1\\-2\end{bmatrix}
$$

$$
T(v_1)=5v_1,\qquad T(v_2)=2v_2
$$

::: {.notes}
Köşegenleştirme konusunda ele aldığımız $A=\begin{bmatrix}4&1\\2&3\end{bmatrix}$ matrisine dönelim. Orada $\lambda_1=5$, $v_1=(1,1)^T$ ve $\lambda_2=2$, $v_2=(1,-2)^T$ bulmuş, $Av_1=(5,5)^T=5v_1$ ve $Av_2=(2,-4)^T=2v_2$ eşitliklerini doğrulamıştık. $\mathcal B=(v_1,v_2)$ tabanında $T(v_1)$'in koordinatı $(5,0)^T$, $T(v_2)$'nin koordinatı $(0,2)^T$.

Bu iki koordinat sütunu $[T]_{\mathcal B\leftarrow\mathcal B}=\begin{bmatrix}5&0\\0&2\end{bmatrix}$ matrisinin sütunları — tam olarak köşegenleştirmede bulduğumuz $D$. Standart tabanda $A$'nın dört girdisi $T$'yi anlatıyordu; $\mathcal B$ tabanında aynı dönüşüm yalnız köşegen üzerindeki iki sayıyla anlatılıyor.
:::

---

## Taban, Koordinat ve Dönüşüm

$$
\text{taban}\longrightarrow\text{koordinat}\longrightarrow[T]_{C\leftarrow B}
$$

$$
\text{öz vektör tabanı}\longrightarrow D
$$

Köşegenleştirme, ikinci zincirin özel bir örneği.

::: {.notes}
Bir vektör uzayında taban seçildiğinde her vektör o tabanda koordinatlarla, her lineer dönüşüm de bu koordinatlar arasında bir matrisle gösterilir. $[T]_{C\leftarrow B}$, $B$ tabanındaki koordinatları $C$ tabanındaki koordinatlara taşır. Kare bir $A$ matrisinin öz vektörleri bir taban kurduğunda ise $A$'nın bu tabandaki matrisi köşegen $D$ olur.

$A=\begin{bmatrix}4&1\\2&3\end{bmatrix}$ örneğinde bu ilişki açıkça görülür: standart tabanda dört sayı taşıyan $A$, $\mathcal B=(v_1,v_2)$ tabanında yalnız $\lambda_1=5$ ve $\lambda_2=2$'yi taşıyan $D$'ye indirgenir. $A=PDP^{-1}$ eşitliği, aynı lineer dönüşümün uygun bir tabanda daha basit bir matrisle gösterildiğini söyler.

Sonlu boyutlu uzaylarda bir matris, $V\to W$ lineer dönüşümünün seçilen tabanlara göre sayısal gösterimidir.
:::

---

## Sık Yapılan Hatalar: Lineer Dönüşümler

1. $T(0)\neq0$ kontrolünü atlamak.
2. Toplamaya uyumu tek örnekle genellemek.
3. $\ker T$'yi tanımsızlık kümesi sanmak.
4. $[T]_{C\leftarrow B}$ sütununu $T(b_i)$ sanmak.
5. Taban değişimini ayrı bir araç sanmak.

::: {.notes}
İlk iki hata lineerliği doğrularken ortaya çıkıyor. $T(0)=0$ kontrolü en hızlı elemedir, atlanırsa lineer olmayan bir dönüşüm yanlışlıkla kabul edilebilir. Toplama koşulunu tek bir $u,v$ çiftinde denetleyip genellemek de yanıltıcı: koşul her $u,v$ için sağlanmalı, tek örnek yalnız o örnek için bir şey söyler.

Üçüncü ve dördüncü hata tanımları karıştırmaktan doğuyor. $\ker T$, $T$'nin sıfır ürettiği vektörleri toplar; $T$'nin tanımlı olmadığı bir yer değildir, $T$ zaten her $v\in V$ için tanımlıdır. $[T]_{C\leftarrow B}$'nin $i$. sütunu $T(b_i)$'nin kendisi değil, $T(b_i)$'nin $C$ tabanındaki koordinat vektörüdür; bu ayrım atlanırsa matrisin boyutu bile yanlış çıkar.

Beşinci hata taban değişimini izole bir teknik sanmaktan geliyor. $P_{C\leftarrow B}$'yi özdeş dönüşümün matrisi olarak görmemek, taban değişimi ile dönüşüm matrisi arasındaki bağlantıyı kaybettiriyor.
:::

---

## Karar Soruları

1. $[T]_{C\leftarrow B}$, taban seçimiyle değişir mi?
2. $\ker T=\{0\}$ sütunlar için ne söyler?
3. $P_2\to P_1$ türevi köşegenleştirilebilir mi?

::: {.notes}
Birinci soru: evet, $[T]_{C\leftarrow B}$ seçilen $B$ ve $C$'ye bağlıdır; $T$'nin kendisi değişmez, yalnız sayısal temsili değişir. Aynı dönüşümün farklı tabanlarda farklı matrisleri olabilir — köşegenleştirmede standart taban yerine öz vektör tabanı seçmek tam olarak bu bağımlılığı kullanır.

İkinci soru: $\ker T=\{0\}$, $[T]_{C\leftarrow B}$'nin sütunlarının lineer bağımsız olduğu anlamına gelir. $Ax=0$'ın yalnız trivial çözümü olması matrisin sütunlarının bağımsızlığıyla eşdeğerdi; burada $A$ yerine $[T]_{C\leftarrow B}$ konarak aynı denklik geçerli kalır.

Üçüncü soru: hayır. Köşegenleştirme yalnız $V=W$ olan, bir uzayı kendi üzerine gönderen dönüşümler için tanımlı. Türev alma $P_2$'yi $P_1$'e gönderiyor, iki uzay farklı; $D$'nin köşegen olabilmesi için $[T]_{C\leftarrow B}$'nin kare olması gerekir, bu da yalnız $B$ ve $C$ aynı boyutlu olduğunda mümkündür.
:::

---

## Kapsam Dışında Kalanlar

- Genel izomorfizma teorisi.
- Sonsuz boyutlu dönüşümler.

::: {.notes}
Lineerlik koşulu, $\ker T$, $\operatorname{Im}T$ ve $[T]_{C\leftarrow B}$, sonlu boyutlu uzaylardaki lineer dönüşümler için kullanılan çerçeveyi oluşturur. İki uzayın "aynı yapıda" olup olmadığını genel olarak sınıflandıran izomorfizma teorisi ile fonksiyon uzayları gibi sonsuz boyutlu ortamlardaki dönüşüm matrisleri bu dersin kapsamı dışındadır.

$Ax$'ten başlayıp taban değişimine, köşegenleştirmeye ve şimdi genel lineer dönüşüme uzanan çizgi burada kapanıyor. Karar soruları ve sık yapılan hatalar bölümlerini tekrar gözden geçirmek, bu çizginin hangi noktalarında hâlâ tereddüt olduğunu görmenin en hızlı yolu.
:::
