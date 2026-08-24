---
title: "Konvolüsyon Teoremi"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-08-22
execute:
  echo: false
---

## İki Zarın Toplamı

Toplamın $7$ olması için:

$$
(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)
$$

$$
P(Z_1+Z_2=7)=\frac{6}{36}=\frac16
$$

::: {.notes}

Konvolüsyonu önce Laplace dönüşümünden bağımsız, sınıfta kullanılan iki zar örneğiyle kuralım. Birinci zar $k$ değerini gösterdiğinde toplamın $7$ olması için ikinci zarın $7-k$ göstermesi gerekir. $k=1,\ldots,6$ değerleri altı uygun eşleşme üretir.

Zarlar adil ve birbirinden bağımsız olduğu için her sıralı ikilinin olasılığı $1/36$'dır. Aynı toplamı üreten altı katkıyı topladığımızda $6/36$ elde ederiz. Ayrık konvolüsyon tam olarak bu hareketi geneller: hedef $n$ sabitlenir, $k+(n-k)=n$ koşulunu sağlayan bütün eşleşmelerin ağırlıkları çarpılıp toplanır.

:::

---

## Aynı Toplamı Üreten Katkılar

$n=3$ için bütün eşleşmeler:

| $k$ | $3-k$ | katkı |
|---:|---:|---:|
| $0$ | $3$ | $f[0]g[3]$ |
| $1$ | $2$ | $f[1]g[2]$ |
| $2$ | $1$ | $f[2]g[1]$ |
| $3$ | $0$ | $f[3]g[0]$ |

::: {.notes}

Konvolüsyonu önce Laplace dönüşümünden bağımsız bir işlem olarak kuralım. Elimizde iki sayı dizisi var ve $n=3$ konumundaki yeni değeri üretmek istiyoruz. Bu değere katkı verecek indis çiftlerinin ortak özelliği, toplamlarının $3$ olmasıdır.

$k$ değerini seçtiğimiz anda eşinin ne olacağı belirlenir. İlk indis $k$ ise ikinci indis $3-k$ olmalıdır; çünkü $k+(3-k)=3$. Her eşleşmenin iki değerini çarpar, sonra bütün katkıları toplarız.

Sonuçtaki tek bir konum, iki dizide o konumu birlikte üreten bütün eşleşmeleri bir araya getirir. Birkaç slayt sonra bu toplam $n$ yerine zaman $t$ olacak ve toplama işlemi integrale dönüşecek.

:::

---

## Grafik Mekanizma

$$
g[k]\longrightarrow g[-k]\longrightarrow g[n-k]
$$

1. **Çevir**
2. **Kaydır**
3. **Çarp**
4. **Topla**

::: {.notes}

İşlemi iki dizi grafiğini üst üste getirerek okuyabiliriz. Önce $g[k]$ dizisini indis ekseninde ters çeviririz; sağdaki değerler sola, soldakiler sağa geçer ve $g[-k]$ oluşur. Sonra bu çevrilmiş diziyi $n$ kadar kaydırırız. Böylece $g[n-k]$ elde edilir.

Kaydırma tamamlandığında $f[k]$ ile $g[n-k]$ aynı $k$ ekseni üzerinde durur. Örtüşen her konumdaki değerleri çarpar, bu çarpımların tümünü toplarız. $n$ değiştikçe çevrilmiş dizi ilerler ve her konumda yeni bir toplam üretir.

Bu mekanizma çapraz korelasyonla karıştırılabilir. Çapraz korelasyonda karşılaştırılan dizi genellikle ters çevrilmez. Görüntü işleme yazılımlarında “konvolüsyon” adıyla sunulan bazı işlemler teknik olarak çapraz korelasyon uygular. Bu ayrım, grafik mekanizmayı doğru okumak için yeterlidir.

:::

---

## Ayrık Konvolüsyon

$$
\boxed{(f*g)[n]=\sum_k f[k]g[n-k]}
$$

$$
k+(n-k)=n
$$

::: {.notes}

Grafik mekanizmanın cebirsel karşılığı ayrık konvolüsyon tanımıdır. Toplamın hangi $k$ değerleri üzerinde alınacağı dizilerin tanım kümesine bağlıdır. Diziler yalnız sonlu sayıda konumda sıfırdan farklıysa sıfır olmayan örtüşmeleri toplamak yeterlidir.

Örneğin $f[0],f[1],f[2],f[3]=1,2,1,0$ ve $g[0],g[1],g[2],g[3]=0,1,2,1$ olsun. O zaman
$$
(f*g)[3]=1\cdot1+2\cdot2+1\cdot1+0\cdot0=6.
$$
Burada eşleşmelerin sayısını değil, her eşleşmenin ağırlıklı katkısını topluyoruz.

$n$ sabitken $k$ bütün olası ayrımları tarar. $k$ büyüdüğünde $n-k$ küçülür; grafik üzerinde bir dizinin ötekine göre ters yönde ilerlemesi bu bağıntıdan gelir.

:::

---

## Toplamdan İntegrale

$$
\sum_k f[k]g[n-k]
\quad\longrightarrow\quad
\int f(\tau)g(t-\tau)\,d\tau
$$

$$
\tau+(t-\tau)=t
$$

::: {.notes}

Ayrık dizilerde olası katkılar tek tek indislerle sayıldığı için toplam kullanıyoruz. Zaman sürekli olduğunda olası ayrımlar artık ayrı noktalar değildir. $0$ ile $t$ arasındaki her $\tau$ değeri bir katkı üretir; toplam bu nedenle integrale dönüşür.

$\tau$ seçildiğinde toplamın $t$ olması için diğer katkının $t-\tau$ olması gerekir. Örneğin $t=5$ ve $\tau=2$ ise eşleşen süre $3$'tür. $t-\tau$ ifadesi yalnız notasyon değil, “iki parçanın toplamı $t$ olsun” koşulunun sonucudur.

Sürekli konvolüsyon farklı bağlamlarda tüm gerçek doğru üzerinde tanımlanabilir. Laplace dönüşümünde kullanacağımız tek taraflı biçim, $t\geq0$ için tanımlanan fonksiyonlara ve başlangıç anı $0$ olan problemlere uyarlanır.

:::

---

## Konvolüsyon

$$
\boxed{(f*g)(t)=\int_0^t f(\tau)g(t-\tau)\,d\tau}
$$

- $\tau$: seçilen katkı anı
- $t-\tau$: kalan zaman
- Sonuç: yeni bir fonksiyon

::: {.notes}

Laplace bağlamında iki fonksiyonun konvolüsyonunu $0$ ile $t$ arasındaki integral olarak tanımlıyoruz. $t$ dış değişkendir; $\tau$ ise integral tamamlandığında ortadan kalkan yardımcı değişkendir. Sonuç her $t$ için ayrı değer veren yeni bir fonksiyondur.

Bu sınırlar tek taraflı Laplace dönüşümünün $t\geq0$ zaman ekseniyle uyumludur. Fonksiyonları $t<0$ için sıfır kabul edersek, gerçek doğru üzerindeki standart konvolüsyon aynı $0$–$t$ integraline iner. İki taraflı dönüşümlerde sınırlar genellikle $-\infty$ ile $\infty$ olur.

$0$–$t$ aralığı nedensel sistemleri modellemek için uygundur. Ancak fiziksel nedensellik yalnız integral işaretinden otomatik olarak çıkmaz; bu yorum, tek taraflı Laplace dönüşümüyle kurulan ve girdinin başlangıçtan önce sıfır kabul edildiği sistem bağlamına dayanır.

:::

---

## Geçmişten Kalan Etki

$$
y(t)=\int_0^t g(\tau)h(t-\tau)\,d\tau
$$

- $g(\tau)$: geçmiş girdinin büyüklüğü
- $h(t-\tau)$: bugünkü etki ağırlığı

::: {.notes}

Diferansiyel denklemlerde integralin doğal bir okuması vardır: bugünkü çıktı, geçmiş girdilerin bugüne kalan etkilerinin toplamıdır. Geçmişte $\tau$ anında uygulanan girdinin büyüklüğü $g(\tau)$, onun $t$ anındaki ağırlığı ise $h(t-\tau)$ ile gösterilir.

$h(t-\tau)$ büyükse o girdi bugünkü çıktıda güçlü biçimde görünür; küçükse etkisi büyük ölçüde sönmüştür. İntegral, $0$ ile $t$ arasındaki bütün girdi parçalarını bu ağırlıklarla birleştirir. Bu okuma, sıfır başlangıç koşullu lineer zorlanmış problemler için kullanılır.

Konvolüsyon değişmeli olduğundan aynı integral $\int_0^t h(\tau)g(t-\tau)\,d\tau$ biçiminde de yazılabilir. O yazımda $\tau$, “ne kadar zaman önce” değişkeni olarak okunur. İki biçim aynı hesabı verir; sözlü yorum değişken seçimine göre uyarlanır.

:::

---

## Kısa Bağlantı: Olasılık

Bağımsız $X$ ve $Y$ için:

$$
p_{X+Y}(z)=\int_{-\infty}^{\infty}
p_X(x)p_Y(z-x)\,dx
$$

$$
x+(z-x)=z
$$

::: {.notes}

Aynı yapı olasılıkta da ortaya çıkar. $X+Y=z$ olayı tek bir eşleşmeyle gerçekleşmez. $X=x$ olduğunda toplamın $z$ olması için $Y=z-x$ olmalıdır; bütün olası $x$ değerlerinin katkıları bir araya getirilir.

Bağımsızlık, birlikte gerçekleşme yoğunluğunu $p_X(x)p_Y(z-x)$ çarpımıyla yazmamızı sağlar. Sürekli değişkenlerde katkılar integral, ayrık değişkenlerde toplam ile birleşir. Bu nedenle bağımsız iki rassal değişkenin toplam dağılımı, dağılımlarının konvolüsyonudur.

Bu kısa bağlantı, $t-\tau$ yapısının Laplace dönüşümüne özgü bir hile olmadığını gösterir. Belirli bir toplamı üreten bütün ayrımları topladığımız her yerde aynı cebir görünür.

:::

---

## Çarpım Neye Karşılık Geliyor?

$$
\mathcal{L}\{f\}\,\mathcal{L}\{g\}=F(s)G(s)
$$

Bu çarpımın tersi $f(t)g(t)$ mi?

::: {.notes}

Konvolüsyonu bağımsız bir işlem olarak kurduktan sonra Laplace dönüşümündeki rolüne geçebiliriz. Dönüşüm toplama üzerinde iyi davranır: $\mathcal{L}\{f+g\}=F+G$. Fakat $\mathcal{L}\{fg\}=FG$ biçiminde bir noktasal çarpım kuralı yoktur.

$f=g=1$ örneğinde $\mathcal{L}\{fg\}=1/s$ iken $F(s)G(s)=1/s^2$ olur. İkinci ifadenin ters dönüşümü $t$'dir; bu da $1*1=\int_0^t1\,d\tau=t$ hesabıyla uyuşur.

Çarpım biçimi özellikle sıfır başlangıç koşullu lineer zorlanmış problemlerde çıkar. Bu bağlamda $Y(s)$ çoğu kez sisteme bağlı bir çarpan ile girdinin dönüşümünün çarpımıdır. Sıfırdan farklı başlangıç koşullarında ek terimler bulunur; her $Y(s)$ ifadesi iki çarpana ayrılmaz.

:::

---

## Teoreme Giden İntegral

$$
\mathcal{L}\{f*g\}
=\int_0^\infty e^{-st}
\left[\int_0^t f(\tau)g(t-\tau)\,d\tau\right]dt
$$

Bölge: $0\leq\tau\leq t<\infty$

::: {.notes}

Konvolüsyonun Laplace dönüşümünü tanımdan hesaplayalım. Dış integral $t$, iç integral $\tau$ üzerinde alınır. İntegrasyon bölgesi, birinci bölgede $t=\tau$ doğrusunun üst tarafıdır.

Sırayı değiştirdiğimizde önce $\tau\geq0$ seçeriz; sabit bir $\tau$ için $t$ değeri $\tau$'dan sonsuza gider. Uygun büyüme ve integrallenebilirlik koşulları altında
$$
\int_0^\infty f(\tau)
\left[\int_\tau^\infty e^{-st}g(t-\tau)\,dt\right]d\tau
$$
elde edilir.

Ders kapsamındaki parçalı sürekli ve üstel mertebeden fonksiyonlar için teorem ortak bir sağ yarı düzlemde geçerlidir. Sıra değişiminin koşulları, teoremin yalnız biçimsel bir sembol işlemi olmadığını hatırlatır.

:::

---

## İki İntegral Ayrılıyor

$u=t-\tau$ ile:

$$
\int_\tau^\infty e^{-st}g(t-\tau)\,dt
=e^{-s\tau}\int_0^\infty e^{-su}g(u)\,du
$$

$$
\mathcal{L}\{f*g\}=F(s)G(s)
$$

::: {.notes}

İç integralde $u=t-\tau$ değişken değiştirmesini yapıyoruz. $t=\tau$ iken $u=0$, $t\to\infty$ iken $u\to\infty$ olur. Üstel çarpan $e^{-st}=e^{-s(u+\tau)}=e^{-s\tau}e^{-su}$ biçiminde ayrılır.

İç integral artık $G(s)$'dir ve $\tau$'ya bağlı değildir. Dışarı alındığında geriye
$$
G(s)\int_0^\infty e^{-s\tau}f(\tau)\,d\tau=G(s)F(s)
$$
kalır. Zaman uzayındaki konvolüsyonun dönüşüm uzayında noktasal çarpıma gittiğini tanımdan çıkardık.

Türetmenin ana hareketi integrasyon bölgesini doğru okumaktır. $t=\tau+u$ eşitliği de ayrık durumdaki $n=k+(n-k)$ yapısının sürekli karşılığıdır.

:::

---

## Konvolüsyon Teoremi

$$
\boxed{\mathcal{L}\{f*g\}=F(s)G(s)}
$$

Ters yönde:

$$
\mathcal{L}^{-1}\{F(s)G(s)\}=(f*g)(t)
$$

::: {.notes}

Teorem, dönüşüm tarafındaki çarpımı özgün tarafta konvolüsyon olarak okumamıza izin verir. İki dönüşümün ortak bir yakınsaklık bölgesinde var olması ve türetmedeki integral işlemlerinin geçerli olması gerekir.

Bir konvolüsyon içeren integral denklemi Laplace dönüşümüyle çarpıma çevirip cebirselleştirebiliriz. Ters yönde ise bir $F(s)G(s)$ çarpımını, tabloda tanıdığımız $f$ ve $g$ fonksiyonlarının konvolüsyonuyla çevirebiliriz.

Bu yol her zaman en kısa yol değildir. Basit rasyonel ifadelerde kısmi kesirler hızlı olabilir. $G(s)$ simgesel bırakıldığında veya çarpanları ayrı yorumlamak istediğimizde konvolüsyon doğal ve genel bir ters dönüşüm yolu sunar.

:::

---

## Soru: Kısmi Kesirsiz Dönüşüm

$$
\mathcal{L}^{-1}\left\{\frac{1}{s^2(s^2+1)}\right\}
$$

$$
F(s)=\frac{1}{s^2},
\qquad
G(s)=\frac{1}{s^2+1}
$$

::: {.notes}

İfadeyi iki tanıdık parçanın çarpımı olarak görelim. $1/s^2$ ifadesinin karşılığı $f(t)=t$, $1/(s^2+1)$ ifadesinin karşılığı $g(t)=\sin t$'dir.

Konvolüsyon teoremine göre aranan ters dönüşüm
$$
(f*g)(t)=\int_0^t \tau\sin(t-\tau)\,d\tau
$$
olur. Bir çarpanın argümanı $\tau$, diğerinin argümanı $t-\tau$ olmalıdır.

Aynı ifade kısmi kesirlerle de ayrıştırılabilir. İki yolun aynı sonucu vermesi gerektiğinden kısmi kesir çözümünü işlem kontrolü olarak kullanacağız.

:::

---

## Çözüm: İntegrali Almak

$$
\int_0^t(t-u)\sin u\,du
$$

$$
=t(1-\cos t)-(\sin t-t\cos t)
$$

$$
\boxed{(f*g)(t)=t-\sin t}
$$

::: {.notes}

$u=t-\tau$ değişken değiştirmesini yapalım; $\tau=t-u$ olur. Sınırlar ters döndüğü ve $d\tau=-du$ geldiği için integral yeniden $0$ ile $t$ arasında yazılır.

İlk terim $t\int_0^t\sin u\,du=t(1-\cos t)$ olur. İkinci integral kısmi integrasyonla $\int_0^t u\sin u\,du=\sin t-t\cos t$ verir. Fark alındığında $t\cos t$ terimleri sadeleşir.

Kısmi kesir kontrolü
$$
\frac{1}{s^2(s^2+1)}=\frac{1}{s^2}-\frac{1}{s^2+1}
$$
biçimindedir ve ters dönüşümü yine $t-\sin t$ olur. Bu örnekte kısmi kesir daha kısa olsa da konvolüsyon mekanizmasını açıkça gösterir.

:::

---

## Konvolüsyonun Özellikleri

$$
f*g=g*f
$$

$$
f*(g+h)=f*g+f*h
$$

$$
(f*g)*h=f*(g*h)
$$

::: {.notes}

Değişme özelliği $u=t-\tau$ değişken değiştirmesiyle görülür. Dağılma integralin lineerliğinden, birleşme ise uygun koşullarda üçlü integralin sırasını değiştirmekten gelir.

Özellikler dönüşüm tarafında da okunur. $\mathcal{L}\{f*g\}=FG=GF=\mathcal{L}\{g*f\}$ olduğundan değişme özelliği dönüşümlerin tekliğiyle doğrulanır.

Sabit fonksiyon konvolüsyonun birim elemanı değildir. $(f*1)(t)=\int_0^t f(\tau)d\tau$ olduğu için $f*1$, $f$'nin integralini verir. Birim eleman sorusu, dürtü cevabı notunda Dirac dürtüsüyle açıklanacak.

:::

---

## Soru: İntegral Denklemi

$$
y(t)=t+\int_0^t y(\tau)\sin(t-\tau)\,d\tau
$$

Bilinmeyen, integralin içinde.

::: {.notes}

Bu denklemde bilinmeyen $y$ hem tek başına hem integralin içinde bulunur. Yapı bir Volterra integral denklemidir. İntegral terimi $y*\sin$ konvolüsyonudur; sınırlar $0$ ile $t$ arasındadır ve argümanların toplamı $t$ olur.

Konvolüsyon teoremi bu terimi dönüşüm tarafında $Y(s)/(s^2+1)$ çarpımına çevirir. İntegral işlemi ortadan kalkar ve $Y$ için cebirsel bir denklem elde ederiz.

Her integral denklem bu kadar kolay çözülmez. Çekirdeğin $t-\tau$ farkına bağlı olması, integrali konvolüsyon biçimine sokan özel yapıdır.

:::

---

## Çözüm: Cebirselleştirmek

$$
Y=\frac{1}{s^2}+Y\frac{1}{s^2+1}
$$

$$
Y=\frac{s^2+1}{s^4}
$$

$$
\boxed{y(t)=t+\frac{t^3}{6}}
$$

::: {.notes}

Denklemin dönüşümünü terim terim alıyoruz. Sol taraf $Y$, sağdaki $t$ terimi $1/s^2$, konvolüsyon terimi ise $Y/(s^2+1)$ olur.

$Y$'li terimleri aynı tarafa alınca $Y(1-1/(s^2+1))=1/s^2$ elde edilir. Parantez içi $s^2/(s^2+1)$ olduğundan $Y=(s^2+1)/s^4=1/s^2+1/s^4$ çıkar.

Ters dönüşümde $1/s^2\mapsto t$ ve $1/s^4\mapsto t^3/6$ kullanılır. Faktöriyel çarpanı $\mathcal{L}\{t^3\}=6/s^4$ bağıntısından gelir. Sonuç $y(0)=0$ kontrolünü sağlar.

:::

---

## Genel Girdi İçin Çözüm

$$
y''+3y'+2y=g(t),
\quad y(0)=y'(0)=0
$$

$$
Y(s)=\frac{1}{s^2+3s+2}\,G(s)
$$

::: {.notes}

Sıfır başlangıç koşullarında dönüşüm $(s^2+3s+2)Y=G(s)$ olur. Böylece $Y$, denklemin katsayılarından gelen çarpan ile girdinin dönüşümünün çarpımıdır. Bu ayrışma sıfır başlangıç koşullu lineer zorlanmış problemin özel yapısına dayanır.

İlk çarpanın ters dönüşümü $h(t)=e^{-t}-e^{-2t}$'dir. Konvolüsyon teoremi
$$
y(t)=\int_0^t g(\tau)h(t-\tau)\,d\tau
$$
çözümünü verir. $G(s)$ simgesel bırakıldığında bu, belirli bir girdi seçmeden ulaşabileceğimiz doğal ve genel ters dönüşüm biçimidir.

$h$ yalnız denklemin katsayılarına bağlıdır. Bu gözlem transfer fonksiyonu ve dürtü cevabına köprü kurar; ayrıntılı sistem yorumu bir sonraki notta yapılacak.

:::

---

## Sık Yapılan Hatalar

1. $f*g$ ile $fg$'yi karıştırmak
2. Tüm sınırları aynı sanmak
3. $f*1=f$ kabul etmek
4. $t-\tau$ kaymasını unutmak
5. Başlangıç koşullarını atlamak

::: {.notes}

Yıldız işareti noktasal çarpma değildir. Sınırlar da bağlama göre değişir: tek taraflı Laplace konvolüsyonunda $0$–$t$, gerçek doğru üzerindeki konvolüsyonda $-\infty$–$\infty$ görülebilir.

$f*1$, $f$'nin kendisi değil integralidir. Ayrıca $\int_0^t f(\tau)g(\tau)d\tau$ konvolüsyon değildir; argümanlar $\tau$ ve $t-\tau$ biçiminde birbirini tamamlamalıdır.

$Y=H(s)G(s)$ ayrışması sıfır başlangıç koşulları altında elde edilir. Koşullar sıfırdan farklıysa başlangıç değerlerinden gelen ek terimler kalır ve çözüm iki katkının toplamı olarak ele alınır.

:::

---

## Karar Soruları

Konvolüsyon mu, kısmi kesir mi?

1. $\dfrac{1}{(s-1)(s-2)}$
2. $\dfrac{1}{(s^2+1)^2}$
3. $\dfrac{G(s)}{s^2+4}$

::: {.notes}

Birinci ifadede kısmi kesir kısadır. $-1/(s-1)+1/(s-2)$ ayrışmasından sonuç $e^{2t}-e^t$ çıkar. Konvolüsyon aynı sonucu daha uzun bir integralle verir.

İkinci ifadede iki çarpan da $1/(s^2+1)$ olduğundan konvolüsyon doğal bir seçenektir. $\sin*\sin$ hesabı $\tfrac12(\sin t-t\cos t)$ sonucunu verir. Geniş bir dönüşüm tablosunda sonuç doğrudan da bulunabilir.

Üçüncü ifadede $G(s)$ simgesel bırakıldığında doğal ve genel ters dönüşüm yolu konvolüsyondur:
$$
y(t)=\frac12\int_0^t\sin(2\tau)g(t-\tau)\,d\tau.
$$
$G$ belirli bir rasyonel fonksiyon olarak verilirse başka yollar da kullanılabilir.

:::

---

## Sonraki Adım: $h$ Nedir?

$$
y=h*g
$$

$h$ girdiden bağımsız.

Bu fonksiyon neyi ölçüyor?

::: {.notes}

Konvolüsyon formülü çözümde iki rolü ayırdı: dışarıdan verilen $g$ ve denklemin katsayılarından çıkan $h$. Girdi değiştiğinde $g$ değişir; aynı denklem için $h$ sabit kalır.

Dönüşüm tarafındaki $H(s)$ ifadesine transfer fonksiyonu, ters dönüşümü $h(t)$'ye dürtü cevabı denir. Bu adların kesin anlamı ve $h$'nin sistem belleğini nasıl taşıdığı bir sonraki notun konusudur.

Buradaki köprü şudur: konvolüsyon, genel girdiyi sisteme ait tek bir fonksiyonla birleştirip çıktıyı verir. Sıradaki not bu fonksiyonun yorumunu geliştirecek.

:::

---

## Kaynak Notu

Ana kaynak: Nagle, Saff ve Snider.

Ek görsel sezgi: 3Blue1Brown.

::: {.notes}

Kaynak: Nagle, Saff ve Snider, *Fundamentals of Differential Equations*. Konvolüsyon tanımı, teoremin ifadesi, integral denklemlere uygulanışı ve genel girdi için çözüm formülü bu kaynaktaki klasik yaklaşımla uyumludur.

“Önce mekanizma, sonra teorem” anlatım sırası ve çevir–kaydır görsel sezgisi için 3Blue1Brown'un konvolüsyon anlatımı ek kaynak olarak dikkate alınmıştır. Şema, sayısal örnekler ve açıklamalar bu not için yeniden kurulmuştur.

:::

---
