---
title: "Skaler ve Vektör Kavramı"
subtitle: "MATE 213 — Lineer Cebir"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-25
execute:
  echo: false
---

## Bugünün Sorusu

> Birbiriyle ilişkili birden fazla sayıyı, sırasını ve anlamını kaybetmeden nasıl tek bir nesne olarak ifade ederiz?

- Tek bir sayı her durumda yeterli mi?  
- İlişkili sayılar beraber tutulabilir mi?
- Beraber tuttuk diyelim, ölçekleyebilecek miyiz?

::: {.notes}  
Bazen tek bir sayı bir durumu anlatmaya yetmez. Bir noktanın düzlemdeki konumu iki sayı ister. Bir ürünün birkaç farklı özelliği olabilir. Bir sistem de sıcaklık, basınç ve debi gibi birden fazla ölçümle tanımlanabilir.

Bu tür durumlarda elimizde birbirinden kopuk sayılar değil, birlikte anlam taşıyan bir sayı grubu vardır. Üstelik bu sayıların sırası da önemlidir. Amacımız, bu bilgileri sırasını ve anlamını koruyarak tek bir nesne halinde yazabilmek. Bunu önce koordinat vektörleriyle yapacağız. Daha sonra bu nesneyi oluşturan sayılar ile onun tamamını büyütüp küçültmek için kullandığımız sayıları birbirinden ayıracağız.  
:::

---

## İlk Örnek: Birlikte Anlamlı Sayılar

Bir ürünün üç özelliği:

$$
\text{fiyat: }40,\qquad
\text{ağırlık: }2,\qquad
\text{stok: }15
$$

- Değerler birbiriyle ilişkili,
- sıra bozulursa anlam bozulur,
- tek nesne olarak tutmak istiyoruz.

$$
v=\begin{bmatrix}40\\2\\15\end{bmatrix}
$$

::: {.notes}
Bu örnek, vektöre neden ihtiyaç duyduğumuzu geometrik ok çizmeden gösterir. Başlangıçta elimizde vektör yok; yalnızca birbirine bağlı üç sayı var. Bu değerler ayrı ayrı $40$, $2$, $15$ biçiminde tutulabilir; fakat o zaman hangi sayının neyi gösterdiği ve bunların bir arada tek bir nesne oluşturduğu ayrıca belirtilmelidir.

Koordinat vektörü bu üç değeri sabit bir sırayla tek bir matematiksel nesnede toplar. Burada önemli olan yalnız üç sayının alt alta yazılması değildir; bu sayıların sabit bir sırayla ve tek nesne olarak ele alınmasıdır. Böylece tüm gruba tek işlemle davranabiliriz: bütün miktarları iki katına çıkarmak istersek tek tek üç işlem yerine $2v$ yazmak yeterlidir.
:::

---

## Koordinat Vektörü ve Bileşenler

$$
v=\begin{bmatrix}v_1\\v_2\\\vdots\\v_n\end{bmatrix}\in\mathbb{R}^n
$$

- $v$: bütün vektör
- $v_i$: $i$. bileşen, bir **skaler**
- $n$: bileşen sayısı
- İndis konumu belirtir

::: {.notes}
$n$ bileşenli bir koordinat vektörü bileşenleriyle gösterilir. $v_i$ ifadesi "$v$ vektörünün $i$. bileşeni" demektir; buradaki indis yalnız bir etiket değil, konum bilgisidir. Örneğin ürün örneğinde $v_1$ fiyatı, $v_2$ ağırlığı, $v_3$ stok miktarını temsil eder.

Bir koordinat vektörünün bileşenleri skalerdir: $v\in\mathbb{R}^n$ ise her $v_i$ gerçek bir sayıdır. Bu derste "vektör" dediğimizde şimdilik $\mathbb{R}^n$ içindeki koordinat vektörlerini kastediyoruz. Bu sınırlama bilinçli bir başlangıçtır; vektörün daha genel tanımı ileride vektör uzaylarında gelecek ve orada polinomların, fonksiyonların, hatta matrislerin de vektör rolü üstlenebildiğini göreceğiz.
:::

---

## Bileşenlerin Sırası Yapının Parçasıdır

$$
\begin{bmatrix}2\\-1\\4\end{bmatrix}
\neq
\begin{bmatrix}-1\\2\\4\end{bmatrix}
$$

Sıcaklık–basınç–debi okuması:

$$
\begin{bmatrix}80\\25\\120\end{bmatrix}
\neq
\begin{bmatrix}25\\80\\120\end{bmatrix}
$$

::: {.notes}
Bir vektörde yalnızca hangi değerlerin bulunduğu değil, bu değerlerin hangi sırada bulunduğu da önemlidir. Yukarıdaki iki vektör aynı üç sayıyı içerir; fakat birinci ve ikinci konumlar değiştiği için aynı vektör değildir.

Bileşenler belirli özellikleri temsil ettiğinde bu fark daha açık görülür. Bileşenleri sırasıyla sıcaklık, basınç ve debi olan bir vektörde ilk iki değer yer değiştirirse, sayılar aynı kalsa bile artık aynı fiziksel bilgi temsil edilmez: $80$ derece ve $25$ bar yerine $25$ derece ve $80$ bar okunur. Sensör sırası, ürün sırası veya bilinmeyen sırası değişirse problem de değişir.
:::

---

## Vektörlerle Temsil Edilen Nicelikler

| Bağlam | Vektör |
|---|---|
| Konum | $(x,y,z)^T$ |
| Hız | $(v_x,v_y,v_z)^T$ |
| Sistem ölçümü | (sıcaklık, basınç, debi)$^T$ |
| Sınav puanları | $(p_1,\ldots,p_k)^T$ |
| Veri örneği | özellik vektörü $(x_1,\ldots,x_n)^T$ |

::: {.notes}
Vektörün bileşenlerinin mutlaka fiziksel koordinatlar olması gerekmez. Bir cismin uzaydaki konumu, üç yöndeki hız bileşenleri, bir sistemin sıcaklık-basınç-debi ölçümleri, bir öğrencinin farklı sınavlardan aldığı puanlar veya bir veri örneğinin farklı özellikleri aynı biçimde vektörle temsil edilebilir.

Bir görüntünün renk değerleri, bir ekonomik sistemin göstergeleri, bir sensör grubundan alınan ölçümler ya da bir optimizasyon probleminin değişkenleri de uygun bir sırayla vektöre yerleştirilebilir. Bu örneklerin ortak noktası, birbiriyle ilişkili birden fazla skaler değerin anlamlı ve sabit bir sıra içinde tek bir nesne olarak ele alınmasıdır. Vektörün bileşenleri aynı fiziksel birimde olmak zorunda da değildir; fiyat, ağırlık ve stok birlikte taşınabilir. Ancak böyle bir durumda yapılacak işlemin problem bağlamında anlamlı olup olmadığı ayrıca kontrol edilmelidir.
:::

---

## Vektörün Ait Olduğu Uzay

$$
v\in\mathbb{R}^n
\quad\Longleftrightarrow\quad
v\ \text{'nin } n \text{ gerçek bileşeni var}
$$

$$
u=\begin{bmatrix}3\\-2\end{bmatrix}\in\mathbb{R}^2,
\qquad
w=\begin{bmatrix}1\\0\\4\\-3\end{bmatrix}\in\mathbb{R}^4
$$

::: {.notes}
Bir vektörün kaç bileşenden oluştuğunu ve bileşenlerinin hangi skaler cisminden geldiğini belirtmek için ait olduğu uzay yazılır. $v\in\mathbb{R}^3$ ifadesi, $v$'nin üç gerçek sayı bileşeninden oluştuğunu söyler.

Günlük matematik dilinde $w$ için "dört boyutlu vektör" ifadesi de yaygındır. Daha dikkatli bir ifadeyle $w$, dört bileşenli bir vektör ve dört boyutlu $\mathbb{R}^4$ uzayının bir elemanıdır. Koordinat uzaylarında bileşen sayısı ile uzayın boyutu aynı sayı olduğu için bu iki kullanım çoğu zaman karışmaz; daha genel vektör uzaylarında ise boyut, uzayın ayrıca tanımlanan bir özelliği olarak ele alınacaktır.
:::

---

## Satır mı, Sütun mu?

$$
v=\begin{bmatrix}2\\-1\\4\end{bmatrix}\ (3\times1),
\qquad
v^T=\begin{bmatrix}2&-1&4\end{bmatrix}\ (1\times3)
$$

Bu derste aksi belirtilmedikçe vektörler **sütun vektörü**dür.

::: {.notes}
Aynı bileşenler iki yazımda da bulunur; fakat şekil değişir. Sütun vektörü $3\times1$, satır vektörü $1\times3$ boyutundadır ve matris işlemlerinde bu iki şekil aynı davranmaz.

Sütun tercihi keyfî değildir. İleride $Ax$ yazdığımızda $A$ bir matris, $x$ bir sütun vektörü olacak; $A\in\mathbb{R}^{m\times n}$ ve $x\in\mathbb{R}^n$ ise $Ax$ çarpımı $m$ bileşenli bir sütun vektörü verir. Vektörleri sütun olarak yazmak, $Ax=b$ denklem sistemi notasyonunu tutarlı kılar. Satır ve sütun vektörleri arasındaki ilişkiyi transpoz işlemiyle daha sonra açıkça kuracağız.
:::

---

## Vektör Eşitliği

İki koordinat vektörü ancak

1. aynı sayıda bileşene sahipse,
2. karşılık gelen bütün bileşenleri eşitse

eşittir.

$$
\begin{bmatrix}2a-1\\b+3\end{bmatrix}
=
\begin{bmatrix}5\\7\end{bmatrix}
\Longrightarrow
a=3,\quad b=4
$$

::: {.notes}
Vektör eşitliği, tek bir yazımı bileşen düzeyindeki skaler eşitliklere açar. Örnekteki eşitlik aslında $2a-1=5$ ve $b+3=7$ denklemlerini aynı anda söylemektir; buradan $a=3$ ve $b=4$ bulunur.

Bu mekanizma, ileride $Ax=b$ ifadesinin birden fazla lineer denklemi tek bir matris yazımı içinde nasıl taşıdığını anlamaya hazırlık sağlar. Aynı bileşenleri farklı sırada taşıyan iki vektör eşit değildir; konum bilgisi eşitliğin parçasıdır ve bileşenlerin küme olarak aynı olması yeterli olmaz.
:::

---

## Skaler Neden Ayrı Bir Ad?

Vektörleri ölçeklemek için kullanılan sayılara **skaler** denir.

$$
3
\begin{bmatrix}
2\\
-1
\end{bmatrix}
$$

Buradaki $3$, ilk bakışta yalnızca bir **katsayı** gibi görünür.

> Peki neden ayrıca **skaler** diyoruz?

::: {.notes}
Skaler kavramıyla ilk kez karşılaştığımızda ayrı bir ad kullanmak gereksiz görünebilir. Çünkü şu ana kadar gördüğümüz örneklerde skalerler $2$, $-3$ veya $\frac12$ gibi bildiğimiz sayılardır. Bir vektörün önündeki $3$ için yalnızca "katsayı" demek de hesabı yapmak için yeterlidir.

Bu aşamada gerçekten de skaleri basit bir katsayı gibi düşünebiliriz. Ancak ileride vektör uzaylarını ele aldığımızda, bir vektörü hangi elemanlarla çarpabileceğimiz yapının tanımının bir parçası olacaktır. Yani her durumda kullanılabilecek katsayılar gelişigüzel seçilmez.

Bu nedenle "skaler" adını baştan kullanıyoruz. Şimdilik basit bir katsayı gibi görünse de kavramın arkasında ileride önemli hale gelecek teknik bir ayrım vardır. Bunun ilk işaretini, skalerlerin hangi sayı sisteminden seçildiğine bakarak görebiliriz.
:::

---

## Skaler Cismi

::: {.callout-note}
## Kapsam notu

Bu derste cisim aksiyomları ve cisim kurma problemleri sınav kapsamında değildir.
Buradaki amaç, “Neden yalnız katsayı demiyoruz?” sorusunu yanıtlamaktır.
:::

Skalerler belirli bir **cisimden** seçilir:

$$
\mathbb{R}
\qquad\text{veya}\qquad
\mathbb{C}
$$

$$
2-3i:
\quad
\mathbb{R}\text{ üzerinde skaler değil},
\qquad
\mathbb{C}\text{ üzerinde geçerli skaler}
$$

::: {.notes}
Bir önceki slaytta, skalerin şimdilik sıradan bir katsayı gibi göründüğünü söyledik. Buradaki teknik ayrım, hangi elemanların bu katsayı rolünü üstlenebileceğiyle ilgilidir. Cisim konusu bu ders ve sınav kapsamında ayrıntılı bir başlık değildir; burada yalnız skaler seçiminin gelişigüzel olmadığını açıklamak için kullanıyoruz.

Skalerler belirli bir cisimden seçilir. Bir cisim, kabaca toplama, çıkarma, çarpma ve sıfıra bölme dışında bölme işlemlerinin alıştığımız kurallarla yapılabildiği bir sayı sistemidir. Gerçek sayılar $\mathbb{R}$ ve karmaşık sayılar $\mathbb{C}$ en sık karşılaşacağımız örneklerdir. Ayrıntılı tanımına burada ihtiyacımız olmayacak.

Örneğin gerçek sayılar üzerinde çalışıyorsak $2-3i$ bir skaler olarak kullanılamaz. Karmaşık sayılar üzerinde çalışıyorsak kullanılabilir. Başlangıçta bu ayrım çok önemli görünmeyebilir; çünkü çoğunlukla gerçek sayılarla çalışacağız. Ancak vektör uzaylarına geçtiğimizde hangi cismin kullanıldığı, o uzayın tanımının doğrudan bir parçası olacaktır.

“Katsayı” bir ifadedeki görevi, “skaler” ise elemanın hangi sayı sisteminden geldiğini söyler. Aynı sayı bir denklemde katsayı, bir vektörde bileşen veya bir ölçekleme işleminde skaler olabilir. Bu adlandırma, vektör uzayına geçtiğimizde hangi çarpanlara izin verildiğini açık tutar.
:::

---

## Sıfır, Bir ve Negatif Skalerler

$$
1v=v
\qquad\text{(etkisiz skaler)}
$$

$$
0v=0
\qquad\text{(sıfır vektörüne götürür)}
$$

$$
(-1)v=-v
\qquad\text{(yönü ters çevirir)}
$$

::: {.notes}
Bazı skalerlerin ölçekleme açısından özel rolleri vardır. $1$ etkisiz skalerdir: bir vektörü $1$ ile çarpmak onu değiştirmez. Bu, sayılardaki $1\cdot a=a$ kuralının vektör karşılığıdır.

$0$ skaleri her vektörü ilgili uzayın sıfır vektörüne götürür; dikkat edilmesi gereken nokta, soldaki $0$'ın bir skaler, sağdaki $0$'ın ise bir vektör olmasıdır. Negatif bir skaler, gerçek vektörlerin geometrik yorumunda ölçeklemenin yanında yönün tersine dönmesine neden olur; özel olarak $(-1)v$ çarpımı $v$'nin toplamsal tersi olan $-v$ vektörünü verir. Bu üç sonuç, birazdan göreceğimiz cebirsel özelliklerden de türetilebilir.
:::

---

## Hangileri Skalerdir?

$\mathbb{R}$ üzerinde çalışan bir uzayda:

$$
-3,\qquad
\sqrt{2},\qquad
2+i,\qquad
\begin{bmatrix}4\\1\end{bmatrix},\qquad
\begin{bmatrix}5\end{bmatrix}
$$

::: {.notes}
İlk ikisi, $-3$ ve $\sqrt2$, gerçek sayı oldukları için bu uzayda skalerdir. Üçüncüsü, $2+i$, bir karmaşık sayıdır; $\mathbb{R}$ üzerinde çalışan bu uzayın skaleri değildir. Aynı sayı, $\mathbb{C}$ üzerinde tanımlı bir uzayda geçerli bir skaler olurdu — yani "skaler olmak" nesnenin kendisine değil, çalışılan uzaya bağlıdır.

Dördüncü nesne iki bileşenli bir vektördür, skaler değildir. Beşinci nesne tek bileşenli olsa da vektör olarak yazılmıştır; bu nedenle skaler $5$ ile aynı matematiksel nesne değildir. Bu son ayrım özellikle önemlidir ve bir sonraki slaytta ayrıntılandırılacaktır.
:::

---

## Aynı Sayı, Farklı Nesne

| Yazım | Bu dersteki okuma |
|---|---|
| $5$ | skaler |
| $\begin{bmatrix}5\end{bmatrix}$ | tek bileşenli sütun vektörü |
| $[5]$ | bağlama göre $1\times1$ matris |

> İçerilen sayı aynı olabilir; matematiksel rol aynı olmak zorunda değildir.

::: {.notes}
$5$ ile $\begin{bmatrix}5\end{bmatrix}$ aynı değeri içeriyor gibi görünür; fakat işlemde aynı tür nesne olarak davranmazlar. $5$ bir katsayı olabilir, $\begin{bmatrix}5\end{bmatrix}$ ise tek bileşenli bir sütun vektörüdür ve bir şekli vardır.

Bu ayrım ileride boyut kontrollerinde önem kazanır. $5v$ ifadesinde $5$ vektörü ölçekler; buna karşılık $\begin{bmatrix}5\end{bmatrix}v$ aynı şey değildir, çünkü soldaki nesne bir sayı değil şekli olan başka bir nesnedir. Dolayısıyla "içinde tek sayı bulunan her şey skalerdir" düşüncesi matris çarpımında ve denklem sistemlerinde tür hatalarına yol açar. Bir işlemi doğru yorumlamak için önce nesnenin türüne bakılır: skaler mi, vektör mü, matris mi?
:::

---

## Skalerin İki Rolü

**1. Bileşen olarak:**

$$
v=\begin{bmatrix}2\\-3\\5\end{bmatrix},
\qquad
A=\begin{bmatrix}1&4\\-2&3\end{bmatrix}
$$

**2. Katsayı olarak:**

$$
\alpha v,\qquad \alpha A
$$

::: {.notes}
Skalerler lineer cebirde iki temel biçimde karşımıza çıkar. Birincisi bileşen rolüdür: bir vektörün bileşenleri ve bir matrisin girdileri skalerdir. Örnekteki $2$, $-3$, $5$ değerleri ile $1$, $4$, $-2$, $3$ değerlerinin her biri birer skalerdir.

İkincisi katsayı rolüdür: bir skaler, bir vektör veya matrisin önünde onu ölçekleyen çarpan olarak kullanılır. $3v$ ifadesindeki $3$ ve $-2A$ ifadesindeki $-2$ bu roldedir. Aynı sayı iki rolde de görünebilir; önemli olan, hangi rolde kullanıldığını takip etmektir. Vektör ve matrisler skalerlerden oluşsalar bile kendi başlarına farklı türde matematiksel nesnelerdir.
:::

---

## Cebirsel Nesne, Geometrik Temsil

$$
v=\begin{bmatrix}3\\2\end{bmatrix}
$$

- Cebirsel: iki bileşenli koordinat vektörü
- Geometrik: yatayda $3$, düşeyde $2$ birim yer değiştirme

> Ok, vektörün bir **temsilidir** — genel tanımı değil.

::: {.notes}
Bir koordinat vektörü cebirsel olarak bileşenleriyle ifade edilir. Aynı vektör geometrik olarak yatayda $3$, düşeyde $2$ birimlik yer değiştirmeyi gösteren yönlü bir doğru parçasıyla, yani bir okla temsil edilebilir. Bu iki okuma birbirini tamamlar: cebirsel gösterim vektörü bileşenleriyle ifade eder, geometrik gösterim uzaydaki etkisini görselleştirir.

Ancak geometrik ok, vektör kavramının genel tanımı değildir; yalnızca $\mathbb{R}^2$ ve $\mathbb{R}^3$ gibi görselleştirilebilen uzaylarda kullanılan bir temsil biçimidir. Bu ayrımı erken yapmak önemlidir: ileride fonksiyonlar veya matrisler vektör olarak ele alındığında onlara ok çizmek mümkün olmayabilir; bu, onların vektör olmadığı anlamına gelmez.
:::

---

## Nokta ve Vektör Aynı Şey Değildir

> **Nokta konumu, vektör yer değiştirmeyi belirtir.**

$$
P=(3,2)
\quad\text{nokta: bir \textbf{konum}}
$$

$$
v=\begin{bmatrix}3\\2\end{bmatrix}
\quad\text{vektör: bir \textbf{yer değiştirme}}
$$

$$
\overrightarrow{OP}=\begin{bmatrix}3\\2\end{bmatrix}
\quad (O=(0,0)\ \text{konum vektörü})
$$

::: {.notes}
Düzlemde $P=(3,2)$ ifadesi bir noktayı gösterir ve bu noktanın belirli bir konumu vardır. Buna karşılık aynı sayıları taşıyan $v$ bir vektördür ve geometrik bağlamda bir yönlü yer değiştirmeyi temsil eder. İki gösterimde aynı sayılar kullanılsa da matematiksel rolleri farklıdır.

Orijin $O=(0,0)$ olmak üzere $P$ noktasına karşılık gelen $\overrightarrow{OP}$ vektörüne $P$ noktasının konum vektörü denir. Bu özel durumda noktanın koordinatları ile konum vektörünün bileşenleri aynı sayılardır; bu, iki kavramın karıştırılmasının başlıca nedenidir. Ancak sayısal örtüşme rol özdeşliği anlamına gelmez: nokta nerede olunduğunu, vektör ne kadar ve hangi yönde gidildiğini söyler.
:::

---

## Serbest Vektör

$$
A=(1,1),\ B=(4,3)
\ \Rightarrow\
\overrightarrow{AB}=\begin{bmatrix}3\\2\end{bmatrix}
$$

$$
C=(-2,4),\ D=(1,6)
\ \Rightarrow\
\overrightarrow{CD}=\begin{bmatrix}3\\2\end{bmatrix}
$$

$$
\boxed{\overrightarrow{AB}=\overrightarrow{CD}}
$$

<svg viewBox="0 0 520 210" role="img" aria-label="Farklı başlangıç noktalarında çizilmiş eşit iki serbest vektör" style="width:100%;max-height:230px">
  <defs>
    <marker id="free-vector-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
      <path d="M0,0 L0,6 L9,3 z" fill="#2563eb"/>
    </marker>
  </defs>
  <line x1="40" y1="175" x2="490" y2="175" stroke="#94a3b8"/>
  <line x1="80" y1="195" x2="80" y2="20" stroke="#94a3b8"/>
  <line x1="120" y1="145" x2="270" y2="65" stroke="#2563eb" stroke-width="5" marker-end="url(#free-vector-arrow)"/>
  <line x1="300" y1="130" x2="450" y2="50" stroke="#2563eb" stroke-width="5" marker-end="url(#free-vector-arrow)"/>
  <circle cx="120" cy="145" r="5" fill="#0f172a"/><circle cx="270" cy="65" r="5" fill="#0f172a"/>
  <circle cx="300" cy="130" r="5" fill="#0f172a"/><circle cx="450" cy="50" r="5" fill="#0f172a"/>
  <text x="100" y="165" font-size="18">A</text><text x="274" y="61" font-size="18">B</text>
  <text x="280" y="152" font-size="18">C</text><text x="454" y="46" font-size="18">D</text>
  <text x="205" y="92" font-size="18" fill="#2563eb">(3,2)</text>
  <text x="385" y="76" font-size="18" fill="#2563eb">(3,2)</text>
</svg>

::: {.notes}
Bir vektör geometrik olarak bir okla gösterildiğinde, okun başlangıç noktası vektörün kendisinin bir parçası değildir. $A=(1,1)$ ile $B=(4,3)$ arasındaki yer değiştirme $(3,2)^T$'dir. Tamamen farklı bir bölgedeki $C=(-2,4)$ ile $D=(1,6)$ noktaları arasındaki yer değiştirme de aynı vektördür.

İki ok düzlemin farklı yerlerinde çizilmiş olsa da aynı yönlü yer değiştirmeyi temsil eder; yönleri ve uzunlukları aynıdır. Başlangıç noktasından bağımsız düşünülen bu vektörlere serbest vektör denir. Bu nedenle bir vektörü orijinden başlatarak çizmek yalnızca standart ve kullanışlı bir gösterim tercihidir. Serbest vektör yorumu, ileride vektör toplamada ikinci vektörü birincinin ucuna paralel taşıyabilmemizin de dayanağıdır.
:::

---

## Vektör–Skaler Ayrımı Daha Geneldir

Şimdilik çoğunlukla

$$
v=
\begin{bmatrix}
v_1\\
\vdots\\
v_n
\end{bmatrix},
\qquad
\alpha\in\mathbb{R}
$$

biçiminde çalışacağız.

Ancak genel olarak:

> **Vektör**, üzerinde çalışılan vektör uzayının bir elemanıdır.  
> **Skaler**, bu uzayın skaler cisminden gelir.

Bu nedenle uygun bir vektör uzayında

$$
p(x)=x^2+1
$$

de bir vektör olabilir ve

$$
3p(x)
$$

ifadesindeki $3$ yine skalerdir.

::: {.notes}
Başlangıçta vektörleri birden fazla sayıyı bir arada tutan nesneler, skalerleri ise tek sayılar olarak gördük. Bu ilk sezgi koordinat vektörlerini açıklamayı kolaylaştırır; daha geniş yapılarda ise karışıklığa yol açabilir.

İleride vektör uzaylarına geçtiğimizde vektör kavramının sayı sütunlarından daha genel olduğunu göreceğiz. Örneğin uygun bir vektör uzayında bir polinom veya matris de vektör olabilir. Bu durumda onu çarpan elemanlar yine skalerlerdir.

Polinom örneği, bileşen sayısının vektörlüğü belirlemediğini gösterir. Genel ayrımı vektör uzayları konusunda, üzerinde toplama ve skalerle çarpma işlemleri tanımlanan elemanlar üzerinden kuracağız.
:::

---

## Sık Yapılan Hatalar

1. "İçinde tek sayı bulunan her şey skalerdir" sanmak: $\begin{bmatrix}5\end{bmatrix}\neq5$.
2. Skaler olmayı nesnenin kendisine bağlamak — çalışılan uzaya bağlıdır ($2+i$).
3. Bileşenlerin sırasını önemsiz saymak.
4. Noktayı vektörle özdeşleştirmek (konum ≠ yer değiştirme).
5. Geometrik oku vektörün **tanımı** sanmak.

::: {.notes}
Birinci hata nesne türü ile içerdiği sayıyı karıştırır; tek bileşenli bir sütun vektörünün şekli vardır ve skalerle aynı nesne değildir. Bu hata matris çarpımında ve denklem sistemlerinde boyut hatalarına yol açar. İkinci hata skaler olmayı mutlak bir özellik sanmaktır; $2+i$ gerçek bir uzayda skaler değilken karmaşık bir uzayda geçerli skalerdir.

Üçüncü hata bileşen sırasını gözden kaçırmaktır; sıra yapının parçasıdır ve değiştiğinde vektör de değişir. Dördüncü hata nokta ile vektörü özdeşleştirmektir; konum vektörü durumunda sayılar örtüşse de roller farklıdır. Beşinci hata oku tanım sanmaktır; ok yalnız $\mathbb{R}^2$ ve $\mathbb{R}^3$ için bir temsildir ve polinom ya da matris vektörlerine çizilemez — bu onların vektör olmadığı anlamına gelmez.
:::

---

## Sonraki Adım: İki Temel İşlem

Nesneleri ayırdık: **skaler** ve **koordinat vektörü**.

$$
u+v
\qquad\text{ve}\qquad
\alpha v
$$

> Sırada: bu iki işlemi kurmak ve **lineer birleşim** içinde birleştirmek.

::: {.notes}
Bu derste iki nesne türünü ayırdık: vektör uzayının elemanı olan koordinat vektörleri ve bu uzayın skaler cisminden gelen, vektörleri ölçekleyen skalerler. Bileşenlerin sırasının yapının parçası olduğunu, eşitliğin bileşen düzeyinde tanımlandığını ve geometrik okun yalnız bir temsil olduğunu gördük.

Bir sonraki adımda bu nesneler üzerinde iki temel işlem kurulacak: vektör toplama ve skalerle çarpma. Çıkarma ayrı bir temel işlem değil, bu ikisinin birlikte kullanılmasıyla elde edilecek. Sonunda aynı iki işlem lineer birleşim kalıbında birleşecek; bu kalıp, dersin geri kalanının ana dili olacaktır.
:::
