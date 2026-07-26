---
title: "Doğrudan İntegral ve Yön Alanı"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-07-26
execute:
  echo: false
---

## Doğrudan İntegralden Nitel Yoruma

> Sağ taraf yalnız bağımsız değişkene bağlıyken doğrudan integral yetiyordu; aranan fonksiyona bağlandığında bu yol tıkanıyordu.

- Hangi denklemler doğrudan integrallenir?
- Çözüm ailesi geometrik olarak ne?
- Çözemediğimiz denklemde ne görebiliriz?

::: {.notes}

Depo örneğinde iki denklem karşılaştırılmıştı: $dQ/dt=c$ doğrudan integralle çözülmüş, $dQ/dt=c-kQ$ çözülememişti. Aradaki fark tek bir yerdeydi — ikinci denklemde aranan fonksiyon sağ tarafta bilinmeyen olarak duruyordu. Şimdi bu ayrımın resmî hâlini kuracağız: önce doğrudan integralin çözdüğü sınıfı tam olarak tanımlayacak, sonra bu sınıfın çözüm ailesinin nasıl bir geometrik yapı taşıdığını göreceğiz.

Konunun ikinci yarısı farklı bir soruya bakıyor. Bir denklemi çözemiyorsak elimizde hiçbir şey kalmıyor mu? Kalıyor: denklem, çözümü bulunmadan önce de düzlemin her noktasında bir eğim değeri veriyor. Bu eğimlerin oluşturduğu resme yön alanı diyeceğiz ve çözüm eğrilerinin bu resme nasıl oturduğunu inceleyeceğiz.

:::

---

## Soru: en basit sınıf

$$
y'=3x^2, \qquad y(0)=1.
$$

Bu denklemi nasıl çözeriz?

::: {.notes}

Sağ tarafta yalnızca $x$ var; aranan $y$ fonksiyonu hiçbir yerde görünmüyor. Bu, depo örneğindeki $dQ/dt=c$ denklemiyle aynı yapıdır — orada sağ taraf bir sabitti, burada $x$'in bir fonksiyonu, ama tıkanmaya yol açan durum (bilinmeyenin sağ tarafta belirmesi) ikisinde de yok.

Böyle bir denklemde yapılacak iş, türevi bilinen bir fonksiyonu geri kurmaktır; bunun aracı integraldir. Şimdi bu adımı tek bir örnek için değil, sınıfın tamamı için yazalım.

:::

---

## Çözüm: doğrudan integral

$$
\frac{dy}{dx}=f(x) \quad\Longrightarrow\quad y(x)=\int f(x)\,dx+C.
$$

Bilinmeyen fonksiyon sağ tarafta hiç görünmüyor.

$$
y=\int 3x^2\,dx+C=x^3+C, \qquad y(0)=1 \;\Rightarrow\; C=1.
$$

::: {.notes}

$dy/dx=f(x)$ biçimindeki denklemler diferansiyel denklemlerin en basit sınıfıdır, çünkü çözüm tek bir integral almaya indirgenir: $y(x)=\int f(x)\,dx+C$. Burada gerçek bir "yöntem" yoktur; kalkülüsün türev–integral ilişkisi doğrudan uygulanır. Sınıfı ayrı bir başlık altında ele almamızın nedeni, sonraki yöntemlerin hepsinin bu duruma indirgeme çabası olmasıdır — ayrılabilir denklemlerde de, lineer denklemlerde de yapılacak iş, denklemi doğrudan integral alınabilir bir biçime taşımaktır.

Örneğimizde $\int 3x^2\,dx=x^3$, yani genel çözüm $y=x^3+C$. Başlangıç koşulu genel çözüme uygulanır: $y(0)=0^3+C=1$, dolayısıyla $C=1$ ve aranan çözüm $y=x^3+1$'dir. Doğrulama tek satırdır: $y'=3x^2$, denklemi sağlıyor. Her çözümün sonunda bu yerine koyma adımını yapmak, integral hatalarını yakalamanın en ucuz yoludur.

:::

---

## İki yazım yolu: belirsiz ve belirli integral

**Belirsiz integral:** önce aile, sonra koşul.

$$
y=x^3+C \;\longrightarrow\; y=x^3+1
$$

**Belirli integral:** koşul hesabın içinde.

$$
y(x)=y(0)+\int_0^x 3\xi^2\,d\xi=1+x^3
$$

::: {.notes}

İki yazım aynı sonucu verir, farkları başlangıç koşulunun hesaba nerede girdiğidir. Belirsiz integral biçimi önce bütün çözüm ailesini kurar, sonra koşulla aileden bir üye seçer. Belirli integral biçimi ise koşulu alt sınıra yerleştirerek doğrudan aranan çözümü yazar: $y(x)=y(x_0)+\int_{x_0}^{x} f(\xi)\,d\xi$. İntegral içindeki değişkeni $\xi$ ile göstermemizin nedeni, üst sınır olan $x$ ile karışmasını önlemektir; aynı harfi iki farklı rolde kullanmak bu satırda en sık yapılan yazım hatasıdır.

Belirli integral biçiminin bir üstünlüğü var. $f$'nin ilkel fonksiyonu elemanter fonksiyonlarla yazılamıyorsa belirsiz integral biçimi kapalı bir formül üretemez. Örneğin $y'=e^{-x^2}$, $y(0)=0$ probleminde $\int e^{-x^2}dx$ elemanter biçimde yazılamaz, ama $y(x)=\int_0^x e^{-\xi^2}d\xi$ tanımlı ve tam bir cevaptır — bu integralin sayısal değeri her $x$ için hesaplanabilir. Bir çözümün "kapalı formülü yok" olması, çözümün olmadığı anlamına gelmez.

:::

---

## İkinci örnek

$$
y'=\cos x, \qquad y(0)=0.
$$

$$
y=\int \cos x\,dx+C=\sin x+C, \qquad y(0)=0 \;\Rightarrow\; C=0.
$$

::: {.notes}

Bu örnekte $C=0$ çıkması, sabitin gereksiz olduğu anlamına gelmez; koşulun özel seçimiyle ilgilidir. $y(0)=2$ verilseydi çözüm $y=\sin x+2$ olurdu. Genel çözüm hâlâ $y=\sin x+C$ ailesidir, koşul yalnızca bu aileden bir üyeyi seçer.

İki tipik hata bu tür örneklerde toplanır. Birincisi integral sabitini hiç yazmamak: sabit unutulduğunda genel çözüm tek bir fonksiyona daralır ve koşul çoğu zaman sağlanamaz hâle gelir. İkincisi türev ile integral tablolarının işaretlerini karıştırmaktır — $\int\cos x\,dx=\sin x$ iken $\int\sin x\,dx=-\cos x$'tir. Yerine koyarak doğrulama her iki hatayı da anında ortaya çıkarır.

:::

---

## Geometrik yorum: dikey öteleme

$y=x^3+C$ ailesinden $C=-1,0,1,2$ — hepsi **aynı eğrinin** dikey ötelemesi.

> Her sabit $x$ için komşu eğriler arasındaki düşey uzaklık sabittir. Örneğin $C=0$ ve $C=1$ eğrileri arasında her noktada $1$ birim vardır.

::: {.notes}

$y'=f(x)$ sınıfının çözüm ailesi özel bir geometrik yapı taşır. Ailenin bütün üyeleri aynı türeve sahiptir: verilen bir $x$ değerinde eğim, hangi üyeye baktığımızdan bağımsız olarak $f(x)$'tir. Aynı $x$'te aynı eğim demek, eğrilerin birbirinin dikey ötelenmiş kopyaları olması demektir. $y=x^3+C$ ailesinde $C=-1,0,1,2$ üyeleri aynı kübik eğrinin dört farklı yükseklikteki kopyasıdır.

Buradan doğrudan bir sonuç çıkar: bu ailenin iki üyesi hiçbir noktada kesişmez. Kesişselerdi o noktada iki farklı $C$ değeri aynı $y$ değerini verirdi, oysa $x^3+C_1=x^3+C_2$ ancak $C_1=C_2$ iken sağlanır. Her nokta ailenin tam bir üyesinden geçer — başlangıç koşulunun neden tek bir çözüm belirlediğinin geometrik karşılığı budur. Bu öteleme özelliğinin yalnız bu sınıfa ait olduğunu akılda tutmak gerekir; sağ taraf $y$'ye bağlandığında aile üyeleri arasındaki ilişki artık öteleme olmaz.

:::

---

## Yöntemin sınırı

$$
y'=f(x,y) \quad\Longrightarrow\quad y=\int f(x,y)\,dx \;?
$$

İntegralin içindeki $y=y(x)$ zaten aranan bilinmeyen.

Örnek: $y'=xy$.

::: {.notes}

Doğrudan integralin çalışması, sağ tarafta yalnız $x$ bulunmasına bağlıydı. Sağ taraf $y$'yi de içeriyorsa $\int f(x,y)\,dx$ ifadesi hesaplanamaz, çünkü integrali alabilmek için $y$'nin $x$'e nasıl bağlı olduğunu bilmek gerekir — bu ise aranan şeyin ta kendisidir. Depo denklemindeki tıkanmanın aynısıdır; orada da integral almak denklemi çözmemiş, yalnızca aynı ilişkiyi integral biçiminde yeniden yazmıştı.

$y'=xy$ bu durumun en sade örneğidir ve şu an elimizdeki araçlarla çözülemez. Ama çözemiyor olmak, denklem hakkında hiçbir şey söyleyemiyor olmak anlamına gelmiyor. Denklem, çözümü bulunmadan önce de bir bilgi veriyor: düzlemin her noktasında çözüm eğrisinin o noktadaki eğimini söylüyor. Sırada bu bilgiyi görünür kılmak var.

:::

---

## Yön alanı: temel fikir

$y'=f(x,y)$ denklemi her $(x,y)$ noktasına bir **eğim** atar.

- Düzlemde bir noktalar ızgarası seç
- Her noktada eğimi kısa bir doğru parçasıyla çiz
- Ortaya çıkan resim: **yön alanı**

::: {.notes}

Bir diferansiyel denklemi çözüm arayışından bağımsız olarak okumanın yolu şudur: $y'=f(x,y)$ eşitliği, $(x,y)$ noktasından geçen herhangi bir çözüm eğrisinin o noktadaki eğiminin $f(x,y)$ olduğunu söyler. Bu ifade tek bir çözüm hakkında değil, o noktadan geçebilecek bütün çözümler hakkındadır ve denklem elde olduğu sürece hesaplanabilir. Düzlemde bir noktalar ızgarası seçip her noktada bu eğimi temsil eden kısa bir doğru parçası çizersek, denklemin dayattığı yön bilgisinin tamamını tek bir resimde görürüz. Bu resme yön alanı denir; bazı kaynaklarda eğim alanı olarak da geçer.

Terim seçimine küçük bir parantez açalım: "gradyan" sözcüğü burada kullanılmaz. Gradyan, vektör kalkülüsünde bir skaler fonksiyonun kısmi türevlerinden oluşan $\nabla F$ vektörünü gösterir ve farklı bir nesnedir; tam diferansiyel denklemler konusunda kendi bağlamında karşımıza çıkacak.

:::

---

## $y'=xy$ yön alanını okumak

- $x=0$ ya da $y=0$: eğim sıfır
- 1. ve 3. bölge: eğim pozitif
- 2. ve 4. bölge: eğim negatif
- Orijinden uzakta: eğim dikleşir

> Geometrik okuma: eksenlerde parçalar yataydır; 1. ve 3. bölgede sağa doğru yükselir, 2. ve 4. bölgede sağa doğru alçalır. $|xy|$ büyüdükçe parçalar dikleşir.

::: {.notes}

Çözemediğimiz denklemi yön alanı üzerinden okuyalım. Eğim çarpım olduğu için işareti çarpanların işaretinden çıkar: $x$ ve $y$ aynı işaretliyse (birinci ve üçüncü bölge) eğim pozitif, zıt işaretliyse (ikinci ve dördüncü bölge) negatiftir. Eksenler üzerinde çarpanlardan biri sıfırlandığından eğim sıfırdır, yani doğru parçaları yataydır. Orijinden uzaklaştıkça $|xy|$ büyür ve parçalar dikleşir; örneğin $(1,1)$ noktasında eğim $1$, $(3,2)$ noktasında $6$'dır.

Eksenlerdeki yatay parçaların yorumunda dikkatli olmak gerekir. $y=0$ doğrusu boyunca eğim her yerde sıfırdır ve $y=0$ sabit fonksiyonu gerçekten de denklemi sağlar. Buna karşılık $x=0$ ekseni üzerinde eğim yine sıfırdır, ama $x=0$ bir çözüm eğrisi değildir — orada yalnızca o noktadan geçen çözümün teğeti yataydır, eğri hemen ardından yükselmeye ya da alçalmaya devam eder. Tek bir noktadaki yatay teğet ile boyunca yatay kalan bir çözüm farklı şeylerdir.

:::

---

## Çözüm eğrilerinin alana oturması

Bir çözüm eğrisi, geçtiği her noktada yön alanına **teğettir**.

$y=Ce^{x^2/2}$ ailesinin her üyesi aynı alanın farklı bir "ipliği."

> $C=0$ yatay ekseni verir. $C>0$ üyeleri eksenin üstünde, $C<0$ üyeleri altında kalır; her biri geçtiği noktadaki kısa yön parçasına teğettir ve iki farklı üye kesişmez.

::: {.notes}

Çözüm eğrisi ile yön alanı arasındaki ilişki tanım gereği teğetliktir: bir eğri çözümse, her noktasındaki eğimi denklemin o noktada dayattığı değere eşittir, yani eğri alanın yönünü noktadan noktaya izler. Bu yüzden yön alanına bakarak çözüm eğrilerinin nasıl kıvrılacağını, nerede yataylaşıp nerede dikleşeceğini formül olmadan eskizleyebiliriz. Başlangıç koşulu bu resimde bir noktayı işaretler; o noktadan alanı takip ederek ilerleyen tek bir eğri, aranan çözümdür.

$y'=xy$ için çözüm ailesi $y=Ce^{x^2/2}$'dir. Bu formülü burada türetmiyoruz — türetimi ayrılabilir denklemler konusunda yapacağız; şimdilik yalnızca yön alanına oturmasını kontrol edelim: $y'=Cxe^{x^2/2}=x\cdot\bigl(Ce^{x^2/2}\bigr)=xy$, sağlıyor. Ailenin üyeleri arasındaki ilişkinin dikey öteleme olmadığına dikkat edin: $C$ değiştiğinde eğri yukarı kaymaz, dikey olarak ölçeklenir. Öteleme yapısı yalnız $y'=f(x)$ sınıfına aitti.

:::

---

## Denge çözümü yön alanında

Sabit bir $y_0$ için $f(y_0)=0$ ise, $y=y_0$ doğrusu boyunca alan **yataydır**.

$$
y'=1-y \quad\Longrightarrow\quad y=1 \text{ boyunca eğim } 0
$$

::: {.notes}

Sağ taraf bir $y_0$ değerinde sıfırlanıyorsa, $y=y_0$ yatay doğrusu üzerindeki bütün ızgara noktalarında eğim sıfırdır ve bu sabit fonksiyon denklemi sağlar; buna denge çözümü denir. Depo örneğinde $Q=c/k$ değeri bu şekilde ortaya çıkmıştı — giren ve çıkan debiler eşitlendiğinde miktar sabit kalıyordu. $y'=1-y$ denkleminde aynı hesap $y=1$ verir.

Yön alanı denge çözümünün varlığından fazlasını gösterir. $y=1$ doğrusunun üstünde $1-y<0$, yani parçalar aşağı eğimlidir; altında $1-y>0$, parçalar yukarı eğimlidir. İki taraftan da doğruya doğru yönelme var demektir: yakınında başlayan çözümler $y=1$'e yaklaşır. İşaretler ters olsaydı çözümler denge çizgisinden uzaklaşırdı. Bu yaklaşma–uzaklaşma ayrımı denklem çözülmeden okunur ve denge çözümlerinin sınıflandırılması konusunda sistematik biçimde ele alınacak.

:::

---

## Yön alanının sınırı

- Görsel ve **nitel** bir araçtır
- Sayısal çözüm **üretmez**
- Alanı küçük adımlarla takip etmek ayrı bir yöntemdir: **Euler yöntemi** (kapsam dışı)

::: {.notes}

Yön alanı çözümün biçimi hakkında bilgi verir: nerede artar, nerede azalır, hangi değere yaklaşır. Ama bir noktadan başlayıp "şu $x$ değerinde $y$ kaçtır" sorusuna sayı olarak cevap vermez; elde edilen şey bir eskizdir. Sayısal bir cevap istiyorsak, eğim parçalarını küçük adımlarla takip ederek yaklaşık bir eğri hesaplamak gerekir. Bunun adı Euler yöntemidir ve bu dersin kapsamı dışındadır.

Yön alanının asıl değeri, analitik çözüm bulunamadığında da elde kalmasıdır. Bu dersteki denklemlerin çoğunu kapalı biçimde çözeceğiz, ama uygulamada karşılaşılan denklemlerin büyük kısmı elemanter fonksiyonlarla çözülmez. O durumda nitel okuma ve sayısal yöntemler tek yol olur.

:::

---

## Sık Yapılan Hatalar

1. İntegral sabitini yazmamak
2. Belirli integralde sınırla değişkeni karıştırmak
3. Sağ tarafta $y$ varken doğrudan integral denemek
4. Eğim parçalarını çözüm eğrisi sanmak
5. Yön alanından sayısal değer okumaya çalışmak
6. Dikey ötelemeyi her ailede beklemek

::: {.notes}

İlk iki hata hesap tarafındadır. Sabit unutulduğunda genel çözüm tek bir fonksiyona daralır ve başlangıç koşulu çoğu zaman sağlanamaz. İkincisinde $\int_0^x f(x)\,dx$ gibi bir yazımla üst sınır ve integral değişkeni aynı harfe verilir; sonuç anlamsız bir ifadedir, bu yüzden integral değişkenine $\xi$ ya da $t$ gibi ayrı bir harf ayrılır.

Üçüncü hata sınıflandırma atlanınca ortaya çıkar: $y'=xy$ görülüp $\int xy\,dx$ yazılır, $y$ sabit gibi işlem görür ve $x^2y/2$ elde edilir. Bu ifade denklemi sağlamaz, çünkü $y$ sabit değil $x$'in fonksiyonudur. Hesaba başlamadan önce sağ tarafta hangi değişkenlerin bulunduğuna bakmak bu hatayı tümüyle önler.

Son üç hata yön alanının okunmasıyla ilgilidir. Eğim parçaları çözüm eğrisinin küçük parçaları değil, o noktadaki teğet yönünün göstergesidir; çözüm eğrisi bu parçaların üzerinden geçmez, onlara teğet olacak biçimde ilerler. Yön alanından okunan şey eğilimdir, sayı değildir. Altıncısı ise sınıfların karıştırılmasıdır: dikey öteleme $y'=f(x)$ sınıfının özelliğidir, $y=Ce^{x^2/2}$ ailesinde $C$'nin rolü ötelemek değil ölçeklemektir.

:::

---

## Karar Soruları

1. $y'=\dfrac{x}{y}$ doğrudan integralle çözülür mü?
2. $y=x^3+C$ ailesinin iki üyesi kesişebilir mi?
3. $y'=xy$ alanında $(2,-1)$ noktasından geçen çözüm ne yapar?

::: {.notes}

Birincisinde cevap hayırdır. Sağ tarafta $y$ bulunduğu için $\int (x/y)\,dx$ hesaplanamaz; $y$'nin $x$'e bağlılığı bilinmeden integral alınamaz. Bu denklem çözülemez değildir, yalnız doğrudan integral onun sınıfına ait bir araç değildir — sağ taraf $x\cdot(1/y)$ biçiminde çarpanlara ayrıldığı için sıradaki konunun kapsamına girer.

İkincisinde cevap yine hayırdır ve gerekçesi cebirseldir: kesişme $x^3+C_1=x^3+C_2$ demektir, bu da ancak $C_1=C_2$ iken, yani aynı üye söz konusuyken olur. Geometrik karşılığı, düzlemin her noktasından ailenin tam bir üyesinin geçmesidir.

Üçüncüsünde önce eğimi hesaplayalım: $x=2$, $y=-1$ için $y'=2\cdot(-1)=-2$. Nokta dördüncü bölgededir, eğim negatiftir, dolayısıyla çözüm eğrisi o noktada azalarak ilerler ve $y$ daha da negatifleşir. $x$ büyüdükçe $|xy|$ arttığı için azalma hızlanır. Bunların hiçbiri için çözüm formülüne ihtiyaç duymadık; hepsi denklemin kendisinden okundu.

:::

---

## Sıradaki Soru: Çarpım Biçimli Sağ Taraf

Doğrudan integral, sağ taraf yalnız $x$'e bağlıyken yeterliydi.

$y'=xy$ çözülemedi, ama sağ tarafı bir $x$ ve bir $y$ fonksiyonunun çarpımı.

→ Sağ taraf bu biçimde ayrışıyorsa ne yapılır?

::: {.notes}

Buraya kadar iki şey kuruldu. Sağ tarafın yalnız bağımsız değişkene bağlı olduğu denklemler tek bir integralle çözülür ve çözüm ailesi dikey ötelemelerden oluşur. Sağ taraf aranan fonksiyona bağlandığında bu yol kapanır, ama denklem yön alanı üzerinden nitel olarak okunmaya devam eder.

Geriye çözülmemiş bir örnek kaldı: $y'=xy$. Yön alanını çizdik, çözüm ailesinin formülünü doğruladık, ama o formülü nasıl bulacağımızı göstermedik. Bu denklemin sağ tarafının özel bir yapısı var — $x$'in bir fonksiyonu ile $y$'nin bir fonksiyonunun çarpımı. Sırada bu yapıyı tanımak ve ona uygun çözüm yöntemini kurmak var.

:::

---
