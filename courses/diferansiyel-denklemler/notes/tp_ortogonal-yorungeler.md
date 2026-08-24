
---
title: "Elementer Uygulama: Ortogonal Yörüngeler"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-08-22
execute:
  echo: false
---

## İki Aile, Her Yerde Dik Kesişim

İki eğri ailesi, her kesişim noktasında **teğetleri birbirine dik** ise **ortogonaldir**.

Bir haritadaki eş yükselti eğrileri ile en dik iniş yollarını düşünün: biri aynı değeri korurken diğeri değerin en hızlı değiştiği yönde ilerler ve kesiştikleri noktada teğet yönleri diktir.

::: {.notes}

Bazen elimizde bir eğri ailesi vardır; elektrik alan çizgileri ile eşpotansiyel eğriler veya eş yükselti eğrileri ile en dik iniş yolları bunun sezgisel örnekleridir. Bu aileye her noktada dik kesişen ikinci aileyi ararız. İki aile, ortak bölgedeki her kesişim noktasında teğetleri birbirine dik olduğunda **ortogonal yörüngeler** olarak adlandırılır.

Buradaki diklik, eğrilerin tamamına değil her kesişim noktasındaki teğet doğrularına aittir. Bu yüzden problem yerel bir eğim ilişkisiyle başlar; ardından elde edilen yeni diferansiyel denklem çözülerek bütün ortogonal aile kurulur.

:::

---

## Önce Doğrularda Diklik

İki doğrunun eğimleri sonluysa:

$$
m_1m_2=-1
$$

$$
m_1=2
\quad\Longrightarrow\quad
m_2=-\frac12
$$

::: {.notes}

Ortogonal yörünge hesabının dayandığı ilişki önce doğrularda görülür. Eğimi $2$ olan bir doğrunun dik yönü $-1/2$ eğimindedir; işaret yönün ters tarafa dönmesini, kesrin ters çevrilmesi ise dikliği taşır. $2$ ile $+1/2$ çarpımı $1$ olduğundan bu iki doğru dik değildir. El yazısı taslağındaki işaret bu nedenle burada düzeltilmiştir.

Eğrilerde aynı hesabı bütün eğriye bir kez uygulamayız. Her kesişim noktasında iki teğet doğru düşünür, o noktadaki eğimler için aynı çarpım koşulunu kullanırız. Böylece geometrik diklik koşulu bir diferansiyel denkleme dönüşür.

:::

---

## Yöntem: Aileden Diferansiyel Denkleme

Verilen aile $F(x,y,c)=0$'dan, $c$ elenerek ailenin diferansiyel denklemi $y'=f(x,y)$ elde edilir.

Bir noktadan geçen orijinal aile üyesinin eğimi $f(x,y)$ ise, o noktadan geçen **ortogonal** eğrinin eğimi:

$$
\boxed{y'_{\perp}=-\frac{1}{f(x,y)}.}
$$

Bu kesir, $f(x,y)$'nin sonlu ve sıfırdan farklı olduğu noktalarda doğrudan kullanılır. Yatay veya dikey teğetlerde dik yön yine vardır; ancak eğim kesri yerine örtük denklem ya da teğet yönüyle ele alınır.

::: {.notes}

Yöntem iki adımdan oluşur. Önce verilen ailenin **kendi** diferansiyel denklemi bulunur: aile bir parametre $c$ ile $F(x,y,c)=0$ biçiminde verilmişse, bu ifade $x$'e göre türetilip $c$ parametresi elenerek $y'=f(x,y)$ biçiminde, parametresiz bir denklem elde edilir. Bu denklem, ailenin her üyesinin her noktadaki eğimini $x,y$ cinsinden verir. Ortogonal aile, aynı $(x,y)$ noktasında bu teğet yönüne dik bir teğet yönüne sahip olmalıdır.

Her iki teğetin de eğimi sonlu ve orijinal eğim sıfırdan farklı olduğunda diklik koşulu $f\,y'_\perp=-1$ biçimindedir; buradan $y'_\perp=-1/f$ elde edilir. $f=0$ ise orijinal teğet yatay, ortogonal teğet dikeydir ve $y'_\perp$ sonlu bir sayı olarak yazılamaz. Orijinal teğet dikey olduğunda da ortogonal teğet yataydır. Bu özel noktalar geometriden dışlanmaz; yalnızca $dy/dx$ kesriyle yapılan yerel hesapta ayrı ele alınır. Örtük türevleme veya teğet yön vektörleri bu durumları kaybetmeden ifade eder.

:::

---

## Doğrular ve Çemberler

$$
y=mx
\quad\Longrightarrow\quad
y'_{D}=\frac{y}{x}
$$

$$
x^2+y^2=r^2
\quad\Longrightarrow\quad
y'_{C}=-\frac{x}{y}
$$

$$
\boxed{y'_{D}y'_{C}=-1}
$$

::: {.notes}

Orijinden geçen doğrular $y=mx$, merkezi orijin olan çemberler ise $x^2+y^2=r^2$ ailesini oluşturur. $m$ ve $r$, ailenin hangi üyesinin seçildiğini belirleyen parametrelerdir. Doğru ailesinde $m=y/x$ yazılabildiği için teğet eğimi $y'_D=y/x$ olur. Çember ailesinin örtük türevi $2x+2yy'_C=0$ eşitliğini ve buradan $y'_C=-x/y$ eğimini verir.

İki eğimin çarpımı düzenli kesişim noktalarında $-1$'dir. Bu hesap yalnız bilinen iki ailenin dikliğini doğrulamıyor; çember ailesinden başlayıp dik eğimi $y/x$ olarak kurduğumuzda ortogonal ailenin diferansiyel denklemini de veriyor. Bu denklem çözülünce $y=Cx$ doğruları elde edilir.

:::

---

## Örnek: $y=cx^2$ Ailesinin Diferansiyel Denklemi

$$
y=cx^2
\quad\Longrightarrow\quad
y'=2cx.
$$

$c=y/x^2$ ile parametre elenirse:

$$
y'=2\left(\frac{y}{x^2}\right)x=\frac{2y}{x}.
$$

Bu hesap $x\neq0$ olan bölgelerde geçerlidir.

::: {.notes}

Somut bir örnekle ilerleyelim: $y=cx^2$ parabol ailesi (farklı $c$ değerleri için farklı açıklıkta paraboller). Türev alırsak $y'=2cx$; bu ifade hâlâ $c$ parametresini içeriyor, oysa ailenin diferansiyel denklemi parametresiz olmalı. Orijinal denklemden $c=y/x^2$ çekilip yerine yazılırsa $y'=2(y/x^2)x=2y/x$ elde edilir — artık yalnız $x,y$ cinsinden aileyi temsil eden bir denklem. $c=y/x^2$ adımı $x\neq0$ gerektirdiğinden bu eğim denklemi, orijindeki ortak ve tekil kesişimi değil, ailenin düzenli parçalarını betimler.

:::

---

## Ortogonal Ailenin Denklemi ve Çözümü

Ortogonal eğim:

$$
y'_{\perp}=-\frac{1}{2y/x}=-\frac{x}{2y}.
$$

Ayrılabilir:

$$
2y\,dy=-x\,dx
\quad\Longrightarrow\quad
y^2=-\frac{x^2}{2}+C'
\quad\Longrightarrow\quad
\boxed{x^2+2y^2=C.}
$$

::: {.notes}

Ortogonal eğim $y'_\perp=-x/(2y)$'dir; bu denklem ayrılabilirdir. Değişkenleri ayırıp iki tarafa integral alınca $2y\,dy=-x\,dx$, ardından $y^2=-x^2/2+C'$ elde edilir. Düzenleme sonucunda $x^2+2y^2=C$ bulunur. Sonuç bir **elips ailesidir**: $y=cx^2$ parabollerinin düzenli parçalarına ortogonal yörüngeler, orijin merkezli elipslerdir. $y=0$ ve $x\neq0$ noktalarında parabolün teğeti yataydır; elipsin örtük türevi aynı noktalarda dikey teğet verir. Böylece $-1/f$ kesrinin tanımsız olduğu yatay-teğet durumu, örtük sonuçta kaybolmaz. Ortogonal eğim kurulduktan sonra problem, ayrılabilir denklemler konusunda kullanılan çözüm adımlarıyla tamamlanır.

:::

---

## Sık Yapılan Hata

Parametreyi ($c$) elemeden doğrudan $y'=2cx$'i "ailenin denklemi" sanmak.

$$
y'=2cx
\quad\text{(yanlış: hâlâ $c$'ye bağlı, aileyi temsil etmiyor)}
$$

$$
y'=\frac{2y}{x}
\quad\text{(doğru: $c$ elenmiş, tüm aileyi temsil ediyor)}
$$

::: {.notes}

Bir eğri ailesinin diferansiyel denklemi, tanım gereği parametreden **bağımsız** olmalıdır — çünkü denklem, ailenin *her* üyesini aynı anda temsil etmelidir. $y'=2cx$ ifadesi hâlâ $c$ içerdiği için tek bir üyeye özgüdür, aileyi değil. Parametre orijinal denklemden çekilip yerine konularak elenmelidir. Bu adım atlanırsa, elde edilen "ortogonal eğim" de anlamsız kalır.

:::

---

## Karma Pratik Seti (G8)

Bkz. [[../../_ortak/diferansiyel-denklemler/notes/ex_ortogonal-yorungeler|Ortogonal Yörüngeler: Alıştırmalar]] — eğri ailesinden diferansiyel denklem çıkarma, dik eğimi kurma ve yörünge ailesini doğrulama pratiği.

::: {.notes}

Pratik seti tam diferansiyel denklem, integrasyon çarpanı ve ortogonal yörünge yöntemlerini bir araya getirir. Sorular, önce denklem yapısını tanımayı, ardından uygun yöntemi seçmeyi gerektirir. Böylece üç yöntemin hangi koşulda kullanılacağı karışık bir soru grubu içinde sınanır.

:::

---

## Yöntem Özeti

1. Aileyi türetin.
2. Parametreyi eleyin.
3. Düzenli noktalarda dik teğet yönünü kurun.
4. Elde edilen denklemi uygun yöntemle çözün.
5. Sonucu örtük türevle ve geçerlilik bölgesiyle kontrol edin.

::: {.notes}

Ortogonal yörünge sorularında işlem sırası önemlidir. Parametre elenmeden bulunan türev yalnız tek bir aile üyesini temsil eder. Parametresiz denklem elde edildikten sonra, sonlu ve sıfırdan farklı eğimlerde negatif ters alınabilir; yatay veya dikey teğetlerde yön ilişkisi örtük biçimde korunur.

Son çözüm ailesi yalnız cebirsel olarak bulunmuş sayılmamalıdır. Her iki aile örtük olarak türetilip düzenli kesişim noktalarındaki teğetlerin dik olduğu kontrol edilmelidir. Parametre eleme, bölme veya değişken ayırma sırasında dışlanan noktalar ve bölgeler ayrıca belirtilmelidir.

:::

---

## Karar Soruları

1. Parametre neden elenir?
2. $f(x,y)=0$ ise ne olur?
3. Sonuç nasıl doğrulanır?

::: {.notes}

Parametre kalırsa elde edilen denklem bütün aileyi değil, parametrenin tek bir değerine karşılık gelen üyeyi temsil eder. Bu nedenle dik eğim kurulmadan önce parametre mutlaka elenir.

$f(x,y)=0$ olduğunda verilen ailenin teğeti yataydır; dik teğet düşey olur ve $-1/f$ kesri sonlu bir eğim vermez. Bu nokta geometriden kaybolmaz, yalnız $y'=\cdots$ gösteriminin sınırına gelir. Sonuç ailesi örtük biçimde türetilir; iki teğet eğiminin çarpımı düzenli kesişimlerde $-1$ çıkıyorsa ve dışlanan dikey/yatay teğetler ayrıca kontrol ediliyorsa doğrulama tamamlanır.

:::

---

## Pekiştirme

$$
x^2+y^2=c
$$

çember ailesinin ortogonal yörüngelerini bulunuz.

::: {.notes}

Önce aile türetilir:

$$
2x+2yy'=0
\quad\Longrightarrow\quad
y'=-\frac{x}{y}.
$$

Ortogonal eğim $y'_\perp=y/x$ olur. Değişkenler ayrıldığında $dy/y=dx/x$ ve dolayısıyla $y=Cx$ elde edilir. Bunlar merkezden geçen doğrulardır; $x=0$ doğrusu, $y(x)$ biçiminde yazılamayan dikey üyedir.

:::

---

## Sonraki Adım: Yüksek Mertebeden Lineer Teori

Buraya kadar yöntemler birinci mertebeden denklemlere dayanıyordu. Bir sonraki kavram hattı

$$
L[y]=g(x)
$$

biçimindeki yüksek mertebeden lineer denklemlerde süperpozisyonu, varlık–tekliği ve genel çözümün yapısını inceler.

::: {.notes}

Ortogonal yörünge problemi, bir eğri ailesinden birinci mertebeden denklem kurup uygun çözüm yöntemini seçme sürecini tamamlar. Bundan sonraki lineer teori hattında temel soru tek bir çözüm yöntemi seçmekten çok, yüksek mertebeden denklemlerin bütün çözüm kümesinin nasıl örgütlendiğidir.

Lineer operatör gösterimi süperpozisyon ilkesini açıklar; varlık–teklik teoremi kaç başlangıç koşulunun gerektiğini belirler. Ardından lineer bağımsızlık, Wronskian ve temel çözüm kümesi kavramları genel çözümün neden $n$ bağımsız çözümle kurulduğunu gösterecektir.

:::

---
