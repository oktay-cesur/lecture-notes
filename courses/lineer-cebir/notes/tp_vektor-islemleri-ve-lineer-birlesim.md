---
title: "Vektör İşlemleri ve Lineer Birleşim"
subtitle: "MATE 213 — İlk Öğretim Bloğu"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-25
execute:
  echo: false
---

## Etkinliklerdeki Miktarları Güncellemek

Bir organizasyon şirketi dört etkinlik için sırasıyla $20$, $30$, $15$ ve $40$ sandviç hazırlıyor. Gün içinde aynı etkinliklere $5$, $0$, $10$ ve $5$ sandviç daha gönderiliyor.

Her etkinliğin yeni miktarını kendi ek miktarıyla buluruz:

$$
(20+5,\ 30+0,\ 15+10,\ 40+5)=(25,\ 30,\ 25,\ 45).
$$

Aynı hesabı vektörlerle tek işlemde yazabiliriz:

$$
s=
\begin{bmatrix}
20\\
30\\
15\\
40
\end{bmatrix}
$$

Gün içinde her etkinlik için eklenen miktarlar ise:

$$
e=
\begin{bmatrix}
5\\
0\\
10\\
5
\end{bmatrix}
$$

$$
s+e=
\begin{bmatrix}
25\\
30\\
25\\
45
\end{bmatrix}
$$

::: {.notes}
Önce problemi vektör notasyonu olmadan çözüyoruz. Dört etkinliğin her biri için sabah miktarına o etkinliğin ek miktarı geliyor. Bu basit hesap, işlemin hangi sayıları eşleştirdiğini görünür kılıyor.

Ardından sabah ve ek miktar listelerini iki sütun vektörü olarak yazıyoruz. Vektör gösterimi yeni bir hesap icat etmiyor; dört eşleşmiş toplamı tek bir ifadede topluyor. Birinci etkinliğe ait miktar yalnız birinci etkinliğe eklenen miktarla birleştiği için bileşenlerin sırası korunmalıdır.

Sonucun $i$. bileşeni iki vektörün $i$. bileşenlerinin toplamıdır. Eşleşmeden kalan bir bileşen varsa aynı kural sürdürülemez; boyut koşulu buradan çıkar.
:::

---

## Vektör Toplama

$$
u+v=
\begin{bmatrix}
u_1+v_1\\u_2+v_2\\\vdots\\u_n+v_n
\end{bmatrix},
\qquad
\boxed{(u+v)_i=u_i+v_i}
$$

$$
\begin{bmatrix}2\\-1\\4\end{bmatrix}
+
\begin{bmatrix}3\\5\\-2\end{bmatrix}
=
\begin{bmatrix}5\\4\\2\end{bmatrix}
$$

::: {.notes}
Vektör toplama, karşılık gelen bileşenlerin toplanmasıyla tanımlanır. Birinci bileşen birinci bileşenle, ikinci bileşen ikinci bileşenle eşleşir ve bu şekilde devam eder. İndis gösterimiyle bu kural tek satırda ifade edilir.

Toplam sonucunda yine aynı sayıda bileşene sahip bir vektör elde edilir: $u,v\in\mathbb{R}^n$ ise $u+v\in\mathbb{R}^n$ olur. İşlem, koordinat uzayının dışına çıkmaz. Bu kapalılık özelliği ileride vektör uzayı tanımının temel taşlarından biri olacaktır.
:::

---

## Toplama İçin Boyut Koşulu

$$
\begin{bmatrix}1\\2\\3\end{bmatrix}
+
\begin{bmatrix}4\\5\\6\end{bmatrix}
\quad\checkmark
\qquad\qquad
\begin{bmatrix}1\\2\\3\end{bmatrix}
+
\begin{bmatrix}4\\5\end{bmatrix}
\quad\times
$$

> Eksik konuma kendiliğinden $0$ eklenmez.

::: {.callout-warning}
## Tanımlılık yetmez

Aynı boyut hesabı mümkün kılar; bileşenlerin aynı tür nicelikleri taşıması
toplamı anlamlı kılar.
:::

$$
\begin{bmatrix}20\\50\end{bmatrix}_{\text{sıcaklık, basınç}}
+
\begin{bmatrix}3\\4\end{bmatrix}_{\text{düzlem konumu}}
$$

İşlem tanımlıdır; sonuç fiziksel bir nicelik anlatmaz.

::: {.notes}
Standart vektör toplama, aynı koordinat uzayındaki vektörler arasında tanımlıdır. Soldaki işlem tanımlıdır; her bileşenin karşı vektörde eşleştiği bir bileşen vardır. Sağdaki işlem tanımlı değildir, çünkü birinci vektörün üçüncü bileşeninin karşılığı yoktur.

Buradan aynı boyut koşulu çıkar. İki bileşenli vektörü üç bileşenliymiş gibi alta sıfır ekleyerek genişletmek ayrı bir işlemdir ve ayrıca tanımlanması gerekir.

Boyut eşleşmesi uygulamadaki anlamı garanti etmez. Sıcaklık ve basınç ölçümlerini taşıyan bir vektörle düzlem konumunu taşıyan bir vektör aynı boyutta olsa da toplamları doğal bir fiziksel nicelik vermez. Matris işlemlerinde de önce tanımlılığı, sonra bağlamsal anlamı ayrı ayrı kontrol edeceğiz.
:::

---

## Toplamanın Geometrik Okuması

$$
u=\begin{bmatrix}3\\1\end{bmatrix},
\qquad
v=\begin{bmatrix}1\\2\end{bmatrix},
\qquad
u+v=\begin{bmatrix}4\\3\end{bmatrix}
$$

- **Uç uca ekleme:** $v$'yi $u$'nun ucuna taşı
- **Paralelkenar kuralı:** aynı başlangıçtan çiz, köşegeni al

<svg viewBox="0 0 500 260" role="img" aria-label="u ve v vektörlerinin uç uca eklenmesi ve toplam vektörü" style="width:100%;max-height:270px">
  <defs>
    <marker id="sum-blue" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#2563eb"/></marker>
    <marker id="sum-green" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#16a34a"/></marker>
    <marker id="sum-red" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#dc2626"/></marker>
  </defs>
  <line x1="45" y1="220" x2="460" y2="220" stroke="#94a3b8"/><line x1="70" y1="240" x2="70" y2="25" stroke="#94a3b8"/>
  <line x1="70" y1="220" x2="280" y2="170" stroke="#2563eb" stroke-width="5" marker-end="url(#sum-blue)"/>
  <line x1="280" y1="170" x2="350" y2="70" stroke="#16a34a" stroke-width="5" marker-end="url(#sum-green)"/>
  <line x1="70" y1="220" x2="350" y2="70" stroke="#dc2626" stroke-width="5" marker-end="url(#sum-red)"/>
  <line x1="70" y1="220" x2="140" y2="120" stroke="#16a34a" stroke-width="3" stroke-dasharray="8 6"/>
  <line x1="140" y1="120" x2="350" y2="70" stroke="#2563eb" stroke-width="3" stroke-dasharray="8 6"/>
  <text x="175" y="210" font-size="20" fill="#2563eb">u</text><text x="305" y="125" font-size="20" fill="#16a34a">v</text>
  <text x="180" y="125" font-size="20" fill="#dc2626">u+v</text>
</svg>

::: {.notes}
İki çizim aynı cebirsel işlemi temsil eder. Uç uca eklemede önce $u$ çizilir, sonra $v$ yönü ve büyüklüğü değiştirilmeden $u$'nun uç noktasından başlatılır; ilk başlangıçtan son noktaya çizilen vektör toplamdır. Bu yöntemin dayanağı serbest vektör yorumudur: bir vektör paralel taşındığında değişmez.

Paralelkenar kuralı aynı toplamı ortak başlangıçtan görmeyi sağlar. İki vektör aynı noktadan başlatılırsa oluşan paralelkenarın köşegeni toplam vektörünü verir. İki yöntem de aynı sonucu verir. Geometrik çizim yalnız iki ve üç boyutta görünür; bileşen tanımı ise her $n$ için çalışır. Bu nedenle şekil bir kanıt değil, mekanizmayı destekleyen sezgidir.
:::

---

## Vektör Çıkarma

$$
u-v=u+(-v)=u+(-1)v
$$

$$
\begin{bmatrix}2\\-1\\4\end{bmatrix}
-
\begin{bmatrix}3\\5\\-2\end{bmatrix}
=
\begin{bmatrix}-1\\-6\\6\end{bmatrix}
$$

::: {.notes}
Çıkarma yeni bir temel işlem değildir: $v$'yi çıkarmak, $(-1)v$ vektörünü eklemektir. Bu nedenle toplamadaki boyut koşulu aynen geçerlidir. Örneğin üçüncü bileşen $4-(-2)=6$ olur; negatif bileşenlerde parantez işaret hatasını önler.
:::

---

## Çıkarmanın Geometrik Yorumu

$u-v$: $v$'nin ucundan $u$'nun ucuna yönelir, çünkü

$$
v+(u-v)=u
$$

$$
A=(1,2),\ B=(4,6)
\ \Rightarrow\
\overrightarrow{AB}=B-A=\begin{bmatrix}3\\4\end{bmatrix}
$$

$$
\overrightarrow{BA}=-\overrightarrow{AB}
$$

::: {.notes}
$u$ ve $v$ aynı başlangıç noktasından çizildiğinde $u-v$ vektörü $v$'nin uç noktasından $u$'nun uç noktasına doğru yönelir. Bunun nedeni $v+(u-v)=u$ eşitliğidir: $v$'nin ucundan başlayıp $u-v$ kadar ilerlediğimizde $u$'nun ucuna ulaşırız.

Bu yorum iki nokta arasındaki yer değiştirmeyi bulurken kullanışlıdır: son konumdan başlangıç konumu çıkarılır. $A$'dan $B$'ye yer değiştirme $B-A$ olur. Sıranın önemi buradan görülür: ters yöndeki yer değiştirme $\overrightarrow{BA}$, $\overrightarrow{AB}$'nin negatifidir. Genel olarak $u-v\neq v-u$'dur; bunun yerine $v-u=-(u-v)$ ilişkisi geçerlidir.
:::

---

## Skalerle Çarpma

$$
\alpha v=
\begin{bmatrix}\alpha v_1\\\alpha v_2\\\vdots\\\alpha v_n\end{bmatrix},
\qquad
(\alpha v)_i=\alpha v_i
$$

$$
3\begin{bmatrix}2\\-1\\4\end{bmatrix}
=
\begin{bmatrix}6\\-3\\12\end{bmatrix}
$$

::: {.notes}
Bir vektörün skalerle çarpımı, vektörün bütün bileşenlerinin aynı skalerle çarpılmasıyla tanımlanır. Skaler yalnız bir bileşene değil, vektörün tamamına etki eder.

Boyut değişmez: $v\in\mathbb{R}^n$ ve $\alpha\in\mathbb{R}$ ise $\alpha v\in\mathbb{R}^n$ olur. Skaler, üzerinde çalışılan vektör uzayının skaler cisminden gelir; bu derste aksi belirtilmedikçe gerçek sayılardan seçilir. Toplama gibi skalerle çarpma da koordinat uzayının dışına çıkmaz.
:::

---

## Skalerle Çarpmanın Geometrik Etkisi

| $\alpha$ | Geometrik etki |
|---:|---|
| $\alpha>1$ | aynı yönde büyütür |
| $0<\alpha<1$ | aynı yönde küçültür |
| $\alpha<0$ | yönü ters çevirir, $\lvert\alpha\rvert$ kadar ölçekler |
| $\alpha=0$ | sıfır vektörüne gönderir |

::: {.notes}
Gerçek skalerlerle ve geometrik olarak yorumlanabilen vektörlerle çalışıldığında skalerle çarpma, vektörün büyüklüğünü ve bazı durumlarda yönünü değiştirir. $v=(2,1)^T$ için $2v=(4,2)^T$ aynı yönde iki kat ölçeklenmiş, $\frac12 v=(1,\frac12)^T$ ise aynı yönde küçülmüş vektördür.

Negatif skalerde iki etki birleşir: işaret yönü tersine çevirir, mutlak değer ölçek miktarını belirler. Örneğin $-2v=(-4,-2)^T$, $v$'nin ters yönünde ve iki kat ölçeklenmiş hâlidir. $\alpha=0$ durumunda her vektör ilgili uzayın sıfır vektörüne dönüşür. Karmaşık skalerlerde bu geometrik açıklama tek başına yeterli değildir; bu aşamada gerçek skalerlerle çalışıyoruz.
:::

---

## Cebirsel Özellikler: Toplama

$$
\begin{aligned}
u+v&=v+u &&\text{(değişme)}\\
(u+v)+w&=u+(v+w) &&\text{(birleşme)}\\
u+0&=u &&\text{(sıfır vektörü)}\\
u+(-u)&=0 &&\text{(toplamsal ters)}
\end{aligned}
$$

::: {.notes}
Vektör toplaması, sayılardaki toplamanın temel özelliklerini taşır. Değişme ve birleşme özellikleri, toplamanın bileşen düzeyinde sayı toplamına indirgenmesinden gelir: her konumda sayılar toplanır ve sayılarda bu özellikler geçerlidir.

Sıfır vektörü etkisiz eleman rolündedir; bileşenlerinin tamamı sıfır olan ve ilgili uzaya ait olan vektördür. Toplamsal ters ise her vektörün negatifidir. Bu dört özellik pratik hesapta parantezleme ve sıralama özgürlüğü sağlar: birden fazla vektör hangi sırayla toplanırsa toplansın sonuç aynıdır. Kuramsal düzeyde ise bu dört özellik, ileride vektör uzayı aksiyomlarının toplama tarafını oluşturacaktır.
:::

---

## Cebirsel Özellikler: Skalerle Çarpma

$$
\begin{aligned}
\alpha(u+v)&=\alpha u+\alpha v &&\text{(vektör toplamına dağılma)}\\
(\alpha+\beta)u&=\alpha u+\beta u &&\text{(skaler toplamına dağılma)}\\
\alpha(\beta u)&=(\alpha\beta)u &&\text{(birleşme)}\\
1u&=u &&\text{(birim skaler)}
\end{aligned}
$$

::: {.notes}
Skalerle çarpma da dört temel özellik taşır: iki yönde dağılma, skaler çarpmanın birleşmesi ve birim skalerin etkisizliği. Bu özellikler bileşen düzeyinde doğrudan doğrulanabilir; her konumda sayı cebirinin bilinen kuralları çalışır.

Bu özelliklerden başka sonuçlar da türetilir. Örneğin $0u=0$ ve $(-1)u=-u$ eşitlikleri bu listeden çıkarılabilir; önceki derste bu sonuçları ayrı ayrı görmüştük, şimdi bunların bağımsız kurallar değil cebirsel yapının sonuçları olduğunu görüyoruz. Toplamanın dört özelliğiyle birlikte bu sekiz özellik, vektör uzayı kavramının tam listesini oluşturacaktır. Aynı liste matrislerde de birebir geçerlidir; bu tekrar rastlantı değildir.
:::

---

## Lineer Birleşim

$$
u=\begin{bmatrix}1\\2\end{bmatrix},
\qquad
v=\begin{bmatrix}3\\-1\end{bmatrix}
$$

$$
2u-3v
=
\begin{bmatrix}2\\4\end{bmatrix}
+
\begin{bmatrix}-9\\3\end{bmatrix}
=
\begin{bmatrix}-7\\7\end{bmatrix}
$$

$$
\boxed{\alpha_1v_1+\alpha_2v_2+\cdots+\alpha_kv_k}
$$

::: {.notes}
Lineer birleşim yeni bir temel işlem değildir. Elimizde yalnız iki işlem var: skalerle çarpma ve vektör toplama. Lineer birleşim bu iki işlemin arka arkaya kullanılmasıdır. Hesap sırası şudur: önce her vektör kendi skaleriyle çarpılır, sonra oluşan vektörler toplanır.

Örnekte $2u-3v$ ifadesi $2u+(-3)v$ olarak okunur; önce $2u$ ve $-3v$ hesaplanır, sonra toplanır. Bu kalıp lineer cebirin ana dili olacaktır. İleride şu sorular hep bu ifade üzerinden gelecek: hangi vektörler üretilebilir, bir vektör diğerlerinden üretilebiliyor mu, katsayılar tek biçimde mi bulunur? $Ax=b$ denklem sisteminin sütun okuması da tam olarak bir lineer birleşim sorusudur.
:::

---

## Vektör İşlemleri ve Matrisler

Sütun vektörü = $n\times1$ matris.

| Vektörde | Matriste |
|---|---|
| $(u+v)_i=u_i+v_i$ | $(A+B)_{ij}=a_{ij}+b_{ij}$ |
| $(\alpha v)_i=\alpha v_i$ | $(\alpha A)_{ij}=\alpha a_{ij}$ |

> Vektör işlemleri, matris işlemlerinin özel durumudur.

::: {.notes}
Bir sütun vektörü matris gösterimi açısından $n\times1$ boyutlu, bir satır vektörü ise $1\times n$ boyutlu bir yapıdır. Bu nedenle burada kurduğumuz işlem kuralları matrislerde de benzer biçimde karşımıza çıkacaktır.

Vektörlerde toplama karşılık gelen bileşenlerin toplanmasıyla yapılırken matrislerde karşılık gelen girdiler toplanır. Skalerle çarpmada da skaler, vektörün bütün bileşenlerine ya da matrisin bütün girdilerine uygulanır. Bu açıdan vektörlerdeki toplama ve skalerle çarpma, matrislerde karşılaşılacak işlemlerin özel durumları olarak görülebilir. Ancak bu benzerlik bütün işlemlerin aynı olduğu anlamına gelmez; özellikle çarpma işlemlerinde başka tanımlar ve boyut koşulları ortaya çıkacaktır.
:::

---

## Önce Tanımlılık, Sonra Hesap

$$
\boxed{
\text{nesne türü}
\to
\text{boyut}
\to
\text{eşleşme}
\to
\text{sonuç türü}
\to
\text{hesap}
}
$$

| İfade | Karar |
|---|---|
| $u+v$ | aynı koordinat uzayı mı? |
| $\alpha u$ | $\alpha$ izin verilen skaler mi? |
| $\alpha u+\beta v$ | ölçeklenen vektörler toplanabilir mi? |

::: {.notes}
Bu karar sırası ders boyunca korunacaktır. Hesaba başlamadan önce ifadenin anlamlı olup olmadığı kontrol edilir. Örneğin $\alpha u+\beta v$ ifadesinde önce $\alpha$ ve $\beta$ izin verilen skalerler mi diye bakılır, sonra $u$ ile $v$ aynı koordinat uzayında mı diye kontrol edilir.

$u,v\in\mathbb{R}^n$ ve $\alpha,\beta\in\mathbb{R}$ ise sonuç yine $\mathbb{R}^n$ içindedir. Ama $u\in\mathbb{R}^3$ ve $v\in\mathbb{R}^2$ ise ifade tanımlı değildir; ölçekleme boyutu değiştirmediği için skalerle çarpma sonrası bile vektörler farklı uzaylarda kalır. Bağlamsal anlam ise ikinci kontrol katmanıdır: matematiksel olarak tanımlı bir işlem, veri bağlamında anlamsız olabilir.
:::

---

## Sık Yapılan Hatalar

1. Farklı boyutlardaki vektörleri toplamak (eksik bileşene $0$ eklenmez).
2. Skalerle çarpmayı yalnız bir bileşene uygulamak: $3\begin{bmatrix}2\\-1\end{bmatrix}\neq\begin{bmatrix}6\\-1\end{bmatrix}$
3. Skalerle çarpmayı toplama gibi düşünmek: $\neq\begin{bmatrix}2+3\\-1+3\end{bmatrix}$
4. Çıkarma sırasını karıştırmak: $u-v\neq v-u$

::: {.notes}
Birinci hata boyut koşulunu atlamaktır; farklı boyutlu vektörlerin toplamı tanımsızdır ve eksik konuma kendiliğinden sıfır eklenmez. İkinci hata skaleri yalnız ilk bileşene uygulamaktır; doğru sonuç $(6,-3)^T$'dir, çünkü skaler bütün bileşenlerle çarpılır.

Üçüncü hata çarpmayı toplamayla karıştırmaktır: $3v$ ifadesi her bileşene $3$ eklemek değil, her bileşeni $3$ ile çarpmaktır. Dördüncü hata çıkarmada sırayı gözden kaçırmaktır; çıkarma değişme özelliği taşımaz ve $v-u=-(u-v)$ ilişkisi geçerlidir. Geometrik olarak $u-v$ ile $v-u$ zıt yönlerde ilerler.
:::

---

## Kısa Uygulama

$$
u=\begin{bmatrix}2\\-1\\3\end{bmatrix},
\quad
v=\begin{bmatrix}4\\0\\-2\end{bmatrix},
\quad
w=\begin{bmatrix}1\\5\end{bmatrix}
$$

1. $u+v$ ve $2u-v$ hesaplayın.
2. $u+w$ neden hesaplanamaz?
3. $-\tfrac12v$ geometrik olarak ne yapar?
4. $2u-v$ hangi iki temel işlemi kullanır?

::: {.notes}
Birinci hesapta $u+v=(6,-1,1)^T$ bulunur. İkinci hesapta önce $2u=(4,-2,6)^T$ elde edilir, ardından $v$ çıkarılır: $2u-v=(0,-2,8)^T$. Üçüncü bileşende $6-(-2)=8$ olduğuna dikkat edilmelidir.

$u+w$ tanımlı değildir; $u\in\mathbb{R}^3$ iken $w\in\mathbb{R}^2$ içindedir ve toplama için gereken bire bir bileşen eşleşmesi yoktur. $-\frac12 v$ ifadesi vektörün yönünü ters çevirir ve uzunluğunu yarıya indirir; sonuç $(-2,0,1)^T$'dir. Son soru $2u-v$ ifadesinin skalerle çarpma ve vektör toplama (çıkarma biçiminde) işlemlerinden oluştuğunu pekiştirir; yani bu ifade bir lineer birleşimdir.
:::

---

## Tek Sütun Yetmezse?

Bir vektörle dört etkinlikteki sandviç miktarlarını birlikte tutabiliyoruz:

$$
s=
\begin{bmatrix}
20\\
30\\
15\\
40
\end{bmatrix}
$$

Peki aynı etkinlikler için

- sandviç,
- içecek,
- tatlı

miktarlarını da birlikte tutmak istersek?

> Birden fazla ilişkili vektörü, aralarındaki düzeni kaybetmeden nasıl tek bir yapıda gösterebiliriz?

::: {.notes}
Tek bir ürün için vektör yeterliydi. Dört etkinliğin sandviç miktarlarını tek bir nesne içinde tutabildik. Ancak aynı etkinlikler için yalnız sandviçleri değil, içecek ve tatlı miktarlarını da birlikte izlemek istersek tek bir sütun artık yeterli değildir.

Her ürün için ayrı bir vektör yazabiliriz; fakat bu vektörler birbirinden bağımsız değildir. Hepsinin birinci bileşeni aynı etkinliğe, ikinci bileşeni yine aynı etkinliğe karşılık gelir. Yani aralarında korunması gereken ortak bir düzen vardır.

Şimdi ihtiyaç şu: Bu ilişkili vektörleri, hem kendi içlerindeki sıralamayı hem de aralarındaki ilişkiyi kaybetmeden tek bir yapıda nasıl bir araya getirebiliriz? Bir sonraki kısımda bu soruya bakacağız.
:::
