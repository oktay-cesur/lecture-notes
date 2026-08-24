---
title: "Belirsiz Katsayılar Yöntemi"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-08-05
execute:
  echo: false
---

## Eksik Parça: Özel Çözüm

$$
y''-3y'+2y=4x
$$

Homojen kısmı çözebiliyoruz:

$$
y_h=c_1e^{x}+c_2e^{2x}
$$

Sağ tarafı dengeleyen $y_p$ nereden gelecek?

::: {.notes}

Homojen olmayan bir denklemin genel çözümünün $y=y_h+y_p$ olduğu genel teoride kurulmuştu: $y_h$ homojen denklemin genel çözümü, $y_p$ ise homojen olmayan denklemin herhangi bir özel çözümü. Sabit katsayılı denklemlerde $y_h$ artık karakteristik denklemle bulunuyor. Örnekteki denklemin homojen kısmı için karakteristik denklem $r^2-3r+2=(r-1)(r-2)=0$'dır ve $y_h=c_1e^x+c_2e^{2x}$ olur.

Geriye $y_p$ kalıyor. $y_p$ bir fonksiyondur ve $L[y_p]=g$ eşitliğini sağlamalıdır — yani türevleriyle birlikte denkleme yerleştirildiğinde sıfır değil, tam olarak sağ taraftaki $g(x)$ çıkmalıdır.

Yöntem şu gözlemden çıkar: $g$ belirli tiplerdeyse, $y_p$'nin de aynı tipte olması beklenir. O tipin genel biçimi yazılır, içindeki katsayılar bilinmeyen bırakılır ve denklem bu katsayıları belirler. Yöntemin adı buradan geliyor — katsayılar başlangıçta belirsizdir, hesap sonunda belirlenir.

:::

---

## Hangi Fonksiyon Denklemi Dengeleyebilir?

Sol tarafta $y_p$, $y_p'$ ve $y_p''$ toplanıyor.

Toplamın $4x$ çıkması için $y_p$ ve türevleri **polinom** olmalı.

$$
y_p=Ax+B \quad\text{denemesi}
$$

::: {.notes}

Sağ taraf $4x$, yani birinci dereceden bir polinom. Sol tarafta $y_p$ ile türevlerinin sabit katsayılı bir toplamı var. Bu toplamın polinom çıkması için toplanan fonksiyonların da polinom olması gerekir; üstel ya da trigonometrik bir terim toplamda sadeleşmeden kalır ve eşitliği bozar.

Derece seçimi de kendiliğinden geliyor. Türev alma polinomun derecesini düşürür, yükseltmez. Sağ tarafta birinci derece bir polinom varsa $y_p$ en az birinci dereceden olmalı; daha yüksek derece denenirse fazladan katsayılar sıfır çıkar. O hâlde aday $y_p=Ax+B$'dir. Sabit terim $B$'yi yazmak gerekir, çünkü $y_p'$ ve $y_p''$ hesabından sabit terimler doğar ve bunların dengelenmesi lazımdır.

Yöntemin arkasındaki fikir tek cümlede şudur: türev alındığında ailesinin dışına çıkmayan fonksiyonlar için aday kalıbı bellidir. Polinomlar, üsteller ve sinüs–kosinüs çiftleri bu özelliği taşır; çarpımları da taşır.

:::

---

## Yöntemin Kapsamı

Belirsiz katsayılar iki koşul ister:

- Katsayılar **sabit**: $ay''+by'+cy=g(x)$
- $g(x)$ şu ailelerden: polinom, $e^{\alpha x}$, $\cos\beta x$, $\sin\beta x$ ve çarpımları

::: {.notes}

Yöntem her denkleme uygulanmaz. Birinci koşul katsayıların sabit olmasıdır; değişken katsayılı bir denklemde aday fonksiyonun türevleri $x$'e bağlı katsayılarla çarpılır ve terimler artık aynı ailede kalmaz.

İkinci koşul sağ tarafın tipiyle ilgilidir. $g(x)$, ardışık türevleri alındığında sonlu sayıda bağımsız fonksiyon üreten bir aileden olmalıdır. Polinomlar bu özelliği taşır: türevler sonunda sıfıra iner. Üstel fonksiyonun türevi kendisinin katıdır. Sinüsün türevi kosinüs, kosinüsün türevi sinüstür — ikisi kapalı bir çift oluşturur. Bu ailelerin çarpımları da aynı davranışı sürdürür; $x^2e^{3x}\cos2x$ gibi bir fonksiyonun bütün türevleri aynı sonlu ailenin içinde kalır.

$g(x)=\tan x$, $\ln x$ ya da $1/x$ gibi fonksiyonlarda türevler sürekli yeni biçimler üretir; yazılacak sonlu bir aday kalıbı yoktur. Bu durumlar için sabitlerin değişimi yöntemi gerekir.

:::

---

## Aday Tablosu

| $g(x)$ | $y_p$ adayı |
|---|---|
| $P_n(x)$ | $A_nx^n+\cdots+A_1x+A_0$ |
| $e^{\alpha x}$ | $Ae^{\alpha x}$ |
| $\cos\beta x$ veya $\sin\beta x$ | $A\cos\beta x+B\sin\beta x$ |
| $P_n(x)e^{\alpha x}$ | $(A_nx^n+\cdots+A_0)e^{\alpha x}$ |
| $e^{\alpha x}\cos\beta x$ | $e^{\alpha x}(A\cos\beta x+B\sin\beta x)$ |

::: {.notes}

Tablo, sağ tarafın biçimine karşılık gelen aday kalıplarını verir. Üç noktaya dikkat edin.

Birincisi, polinom durumunda **bütün** ara dereceler yazılır. $g(x)=4x$ için aday $Ax+B$'dir, yalnız $Ax$ değil; $g(x)=x^2$ için aday $Ax^2+Bx+C$'dir. Eksik yazılan terimler denklemi sağlamayı imkânsız kılar, çünkü türevlerden gelen alt dereceli terimlerin dengelenecek eşi kalmaz.

İkincisi, trigonometrik durumda sinüs ve kosinüs **birlikte** yazılır. Sağ tarafta yalnız $\sin\beta x$ olsa bile aday iki terim içerir, çünkü türev alma sinüsü kosinüse çevirir ve kosinüs terimleri denklemin sol tarafında kendiliğinden belirir.

Üçüncüsü, tablo çarpımlarda birleşerek genişler. $g(x)=xe^{2x}$ için aday $(Ax+B)e^{2x}$, $g(x)=x\sin x$ için aday $(Ax+B)\cos x+(Cx+D)\sin x$'tir. Kalıbı yazarken sorulacak soru şudur: $g$ ve bütün türevleri hangi fonksiyonların lineer birleşimi olarak yazılabilir?

:::

---

## Soru: Polinom Sağ Taraf

$$
y''-3y'+2y=4x
$$

$$
y_p=Ax+B,
\qquad
y_p'=A,
\qquad
y_p''=0
$$

::: {.notes}

Adayı ve türevlerini yazdıktan sonra yapılacak iş yerine koyup katsayıları eşleştirmektir. $y_p=Ax+B$ için birinci türev sabit $A$, ikinci türev sıfırdır.

Bu noktada $A$ ve $B$ hâlâ bilinmiyor. Denkleme yerleştirdiğimizde sol tarafta $x$'li ve sabit terimler oluşacak; sağ tarafta ise $4x$ var, yani $x$'in katsayısı $4$, sabit terim $0$. İki taraftaki $x$ katsayıları ve sabit terimler ayrı ayrı eşitlenir. Bu, iki bilinmeyenli bir lineer denklem sistemi verir.

Katsayı eşleştirmenin gerekçesi şudur: iki polinom her $x$ için eşitse, aynı dereceli terimlerinin katsayıları da eşittir. Yoksa fark polinomu sonlu sayıda kökten fazlasında sıfır olamazdı.

:::

---

## Çözüm: Katsayı Eşleştirme

$$
0-3A+2(Ax+B)=4x
$$

$$
2A=4,\qquad -3A+2B=0
$$

$$
\boxed{y_p=2x+3}
$$

::: {.notes}

Yerine koyma $2Ax+(2B-3A)=4x+0$ eşitliğini verir. $x$ katsayılarından $2A=4$, yani $A=2$ çıkar. Sabit terimlerden $2B-3A=0$ ve $A=2$ konunca $B=3$ bulunur. Özel çözüm $y_p=2x+3$'tür.

Doğrulayalım: $y_p'=2$, $y_p''=0$ ve $0-3(2)+2(2x+3)=-6+4x+6=4x$ ✓.

Denklemin genel çözümü artık tamamdır: $y=c_1e^x+c_2e^{2x}+2x+3$. Homojen kısım iki serbest sabiti, özel çözüm ise sağ tarafı taşıyor. $y_p$ tek bir belirli fonksiyondur; önüne keyfi bir sabit konmaz.

Burada bulunan $y_p$ tek olası özel çözüm değildir. $2x+3+e^x$ de denklemi sağlar, çünkü eklenen terim homojen çözümdür. Genel çözümde $c_1$ sabiti bu farkı zaten soğurduğu için hangi özel çözümün seçildiği sonucu değiştirmez.

:::

---

## Üstel Sağ Taraf

$$
y''-3y'+2y=6e^{4x}
$$

$$
y_p=Ae^{4x}
\quad\Longrightarrow\quad
(16-12+2)Ae^{4x}=6e^{4x}
$$

$$
6A=6,\qquad \boxed{y_p=e^{4x}}
$$

::: {.notes}

Üstel sağ tarafta hesap kısalır, çünkü $e^{4x}$ türev altında biçimini korur: $y_p'=4Ae^{4x}$ ve $y_p''=16Ae^{4x}$. Denkleme yerleştirilince ortak $e^{4x}$ çarpanı sadeleşir ve geriye $A$ için tek bir cebirsel denklem kalır.

Parantez içindeki $16-12+2=6$ sayısı tanıdıktır: bu, karakteristik polinom $p(r)=r^2-3r+2$ ifadesinin $r=4$'teki değeridir. Genel olarak $g=ke^{\alpha x}$ için $y_p=\frac{k}{p(\alpha)}e^{\alpha x}$ olur.

Bu gözlem aynı zamanda yöntemin ne zaman tıkanacağını gösterir: $p(\alpha)=0$ ise, yani $\alpha$ karakteristik denklemin kökü ise, bölme yapılamaz. O durumda $e^{\alpha x}$ zaten homojen çözümdür ve denkleme yerleştirildiğinde sağ tarafı üretemez, sıfır verir. Bu duruma birazdan döneceğiz.

:::

---

## Soru: Trigonometrik Sağ Taraf

$$
y''-3y'+2y=10\sin x
$$

Sağ tarafta sinüs var. Aday neden iki terimli?

$$
y_p=A\cos x+B\sin x
$$

::: {.notes}

Sağ tarafta yalnız sinüs görünüyor, ama aday hem kosinüs hem sinüs içeriyor. Gerekçe türev alma işleminde: $\sin x$'in türevi $\cos x$'tir. Sol tarafta $y_p'$ terimi bulunduğu için, aday yalnız $B\sin x$ olsaydı denklemde dengelenmemiş bir $\cos x$ terimi oluşurdu ve eşitlik hiçbir $B$ değeri için sağlanmazdı.

İki fonksiyon birlikte kapalı bir aile oluşturur: sinüs ve kosinüsün bütün türevleri yine bu ikisinin katlarıdır. Bu yüzden aday çifti bir bütün olarak yazılır.

İstisna, denklemde birinci türev teriminin hiç bulunmadığı durumdur. $y''+4y=\sin x$ gibi bir denklemde ikinci türev sinüsü yine sinüse çevirdiği için tek terimli aday da çalışır. Yine de çifti yazmak zarar vermez; gereksiz katsayı sıfır çıkar.

:::

---

## Çözüm: İki Katsayı, İki Denklem

$$
y_p'=-A\sin x+B\cos x,
\qquad
y_p''=-A\cos x-B\sin x
$$

$$
(A-3B)\cos x+(3A+B)\sin x=10\sin x
$$

$$
A-3B=0,\quad 3A+B=10
\;\Longrightarrow\;
\boxed{y_p=3\cos x+\sin x}
$$

::: {.notes}

Türevleri denkleme yerleştirip kosinüs ve sinüs katsayılarını ayrı ayrı toplayalım. Kosinüs katsayısı $-A-3B+2A=A-3B$, sinüs katsayısı $-B+3A+2B=3A+B$ olur.

Sağ tarafta kosinüs terimi bulunmadığından katsayısı sıfırdır: $A-3B=0$. Sinüs katsayıları ise $3A+B=10$ verir. Birinci denklemden $A=3B$, ikinciye konunca $9B+B=10$ ve $B=1$, dolayısıyla $A=3$ çıkar. Özel çözüm $y_p=3\cos x+\sin x$'tir.

Sağ tarafta görünmeyen bir fonksiyonun katsayısını sıfıra eşitlemek, bu yöntemdeki en kolay atlanan adımdır. Eşitlik her $x$ için sağlanmak zorunda olduğundan, sol tarafta beliren her bağımsız fonksiyonun katsayısı sağ taraftakiyle eşleşmelidir — sağda yoksa sıfırla.

Genel çözüm $y=c_1e^x+c_2e^{2x}+3\cos x+\sin x$'tir.

:::

---

## Çakışma: Aday Zaten Homojen Çözümse

$$
y''-3y'+2y=e^{x}
$$

$y_h=c_1e^{x}+c_2e^{2x}$ — aday $Ae^{x}$ homojen çözüm!

$$
L[Ae^{x}]=0\neq e^{x}
$$

::: {.notes}

Sağ taraf $e^x$ olduğunda tablo $y_p=Ae^x$ adayını öneriyor. Ama $e^x$ bu denklemin homojen çözümüdür — karakteristik denklemin kökleri $1$ ve $2$'dir. Homojen çözüm denkleme yerleştirildiğinde tanım gereği sıfır verir; hiçbir $A$ değeri için sağ tarafı üretemez.

Yerine koyarak görelim: $A(1-3+2)e^x=0$ çıkar ve denklem $0=e^x$ gibi imkânsız bir eşitliğe dönüşür. Hesap "$A$ bulunamıyor" diyerek tıkanır. Bu, hesap hatası değil, adayın yanlış seçildiğinin işaretidir.

Aynı durum trigonometrik sağ tarafta da olur ve orada rezonans adını alır: $y''+4y=\sin2x$ denkleminde kökler $\pm2i$ olduğu için $\sin2x$ homojen çözümdür. Fiziksel karşılığı, sisteme kendi doğal frekansında kuvvet uygulanmasıdır; genlik zamanla büyür.

Bu yüzden aday yazmadan önce homojen çözüm bulunmalıdır. Sıralama şudur: önce $y_h$, sonra çakışma kontrolü, sonra aday.

:::

---

## Çözüm: $x$ ile Çarpmak

Aday homojen çözümse $x$ ile çarpılır:

$$
y_p=Axe^{x}
$$

$$
A\bigl[(2+x)-3(1+x)+2x\bigr]e^{x}=-Ae^{x}=e^{x}
$$

$$
\boxed{y_p=-xe^{x}}
$$

::: {.notes}

Çakışma durumunda aday $x$ ile çarpılır. Katlı köklerde ikinci bağımsız çözümün $xe^{rx}$ olmasıyla aynı mekanizma çalışıyor: $x$ çarpanı fonksiyonu homojen çözüm uzayının dışına taşır.

Hesabı yapalım. $y_p=Axe^x$ için $y_p'=A(1+x)e^x$ ve $y_p''=A(2+x)e^x$'tir. Denkleme yerleştirilince köşeli parantez $2+x-3-3x+2x=-1$ değerine iner ve $-Ae^x=e^x$ eşitliğinden $A=-1$ bulunur. Özel çözüm $y_p=-xe^x$'tir.

Kaç kez $x$ ile çarpılacağı çakışmanın derecesine bağlıdır. $\alpha$ basit kökse bir kez, çift kökse iki kez çarpılır. Örneğin $y''-6y'+9y=e^{3x}$ denkleminde $3$ çift kök olduğu için aday $Ax^2e^{3x}$ olmalıdır. Kural şu biçimde özetlenir: aday, homojen çözümlerden hiçbirini içermeyecek en küçük $x^s$ kuvvetiyle çarpılır.

Çarpma işlemi adayın tamamına uygulanır. $g=xe^{2x}$ ve $2$ basit kökse aday $(Ax+B)e^{2x}$ değil, $x(Ax+B)e^{2x}$ olur; parantezin yalnız bir terimini çarpmak eksik aday verir.

:::

---

## Sağ Taraf Toplamsa

$$
g(x)=g_1(x)+g_2(x)
\quad\Longrightarrow\quad
y_p=y_{p_1}+y_{p_2}
$$

Her parça için ayrı aday, ayrı hesap.

::: {.notes}

Sağ taraf birden fazla tipin toplamıysa, her parça için ayrı bir özel çözüm bulunup toplanabilir. Gerekçe lineerliktir: $L[y_{p_1}]=g_1$ ve $L[y_{p_2}]=g_2$ ise $L[y_{p_1}+y_{p_2}]=g_1+g_2$ olur.

Örneğin $y''-3y'+2y=4x+6e^{4x}$ denkleminin özel çözümü, yukarıda ayrı ayrı bulunan iki sonucun toplamıdır: $y_p=2x+3+e^{4x}$. İki parçayı tek bir devasa aday içinde birleştirip tek seferde çözmek de mümkündür, ama sistem gereksiz büyür.

Parçalara ayırmanın bir yararı daha var: çakışma kontrolü her parça için ayrı yapılır. $y''-3y'+2y=e^{x}+e^{4x}$ denkleminde birinci parça homojen çözümle çakışır ve $Axe^x$ adayını gerektirir, ikinci parça çakışmaz ve $Be^{4x}$ olarak kalır. Tek bir kalıpta düşünüldüğünde bu ayrım gözden kaçar.

:::

---

## Başlangıç Koşulları En Sonda

$$
y=y_h+y_p=c_1e^{x}+c_2e^{2x}+2x+3
$$

$y(0)=0$, $y'(0)=0$ için:

$$
c_1+c_2+3=0,\qquad c_1+2c_2+2=0
$$

$$
\boxed{y=-4e^{x}+e^{2x}+2x+3}
$$

::: {.notes}

Başlangıç koşulları genel çözümün tamamına uygulanır. $y_h$'ye ayrı uygulayıp sonra $y_p$'yi eklemek yanlış sonuç verir, çünkü $y_p$ de başlangıç noktasında bir değer ve bir eğim taşır.

Genel çözüm $y=c_1e^x+c_2e^{2x}+2x+3$ ve türevi $y'=c_1e^x+2c_2e^{2x}+2$'dir. $x=0$ yazıldığında $c_1+c_2+3=0$ ve $c_1+2c_2+2=0$ denklemleri elde edilir. Birinciden ikinciyi çıkarınca $c_2-1=0$, yani $c_2=1$ ve buradan $c_1=-4$ bulunur.

Çözüm $y=-4e^x+e^{2x}+2x+3$'tür. Kontrol edelim: $y(0)=-4+1+3=0$ ✓ ve $y'(0)=-4+2+2=0$ ✓.

Sıralama şu biçimde sabittir: homojen çözümü bul, çakışmayı kontrol et, özel çözümü belirle, ikisini topla, en son başlangıç koşullarını uygula. Bu sıra bozulduğunda sabitler yanlış çıkar ve hata genellikle son adımda fark edilmez.

:::

---

## Yöntem Nerede Duruyor?

$$
y''+y=\tan x,
\qquad
y''+y=\ln x,
\qquad
y''+y=\frac1x
$$

Bu sağ taraflar için yazılacak sonlu bir aday kalıbı yok.

::: {.notes}

$\tan x$ fonksiyonunun türevi $\sec^2x$, onun türevi $2\sec^2x\tan x$'tir; her türev yeni bir biçim üretir ve liste kapanmaz. $\ln x$ türev alındığında $1/x$, sonra $-1/x^2$ verir — sonsuz bir aile. Sonlu sayıda belirsiz katsayıyla bu fonksiyonları yakalayacak bir kalıp yazılamaz.

Bu, yöntemin bir eksiği değil kapsamıdır. Belirsiz katsayılar, sağ tarafın türev ailesi kapalı olduğunda çok hızlı çalışır: birkaç türev ve küçük bir lineer sistem yeterlidir. Aile kapalı değilse yöntem uygulanamaz, çünkü aday kalıbı tanımlanamaz.

Aynı sınır değişken katsayılı denklemler için de geçerlidir. $x^2y''+xy'-y=x$ denkleminde homojen çözümler biliniyor olsa bile, aday yerine konduğunda $x$'e bağlı katsayılar terimleri aileden çıkarır.

Bu iki boşluğu birden kapatan yöntem sabitlerin değişimidir. O yöntem sağ tarafın tipine bakmaz; yalnız homojen çözümlerin bilinmesini ister.

:::

---

## Sık Yapılan Hatalar

1. Homojen çözümü bulmadan aday yazmak
2. Polinom adayında ara dereceleri atlamak
3. Sinüs–kosinüs çiftini eksik yazmak
4. Çakışmada adayın yalnız bir kısmını $x$ ile çarpmak
5. Başlangıç koşullarını $y_h$'ye uygulamak
6. $y_p$'nin önüne keyfi sabit koymak

::: {.notes}

Birinci hata bütün diğerlerinin kaynağıdır. Çakışma kontrolü ancak homojen çözümler bilindiğinde yapılabilir; aday önce yazılırsa tıkanma hesabın ortasında ve çoğu zaman bir işlem hatası gibi görünerek ortaya çıkar.

İkinci ve üçüncü hatalar aday kalıbının eksik yazılmasıdır. $g=x^2$ için $Ax^2$ denenirse, türevlerden gelen birinci dereceli ve sabit terimlerin dengelenecek eşi bulunmaz ve sistem çözümsüz çıkar. Aynı biçimde yalnız $B\sin x$ yazmak, denklemde beliren kosinüs terimini karşılıksız bırakır. İki durumda da hata "denklem sağlanmıyor" biçiminde görünür; eksik olan katsayı sayısıdır.

Dördüncü hata çakışma düzeltmesinin yarım uygulanmasıdır: $x$ çarpanı adayın tamamına gelir, tek terime değil. Beşinci hata sıralamayla ilgilidir; başlangıç koşulları yalnız $y_h+y_p$ toplamına uygulanır.

Altıncı hata genel çözümün yapısını bozar. $y_p$ belirli bir fonksiyondur, katsayısı $1$'dir. $c_3y_p$ yazmak, denklemi sağlamayan bir aile üretir: $L[c_3y_p]=c_3g$ olur ve $c_3\neq1$ için sağ taraf tutmaz.

:::

---

## Karar Soruları

Hesap yapmadan aday yazın:

1. $y''-y=x^2$
2. $y''-y=e^{x}$
3. $y''+9y=\cos3x$

::: {.notes}

Birinci denklemde homojen çözümler $e^x$ ve $e^{-x}$'tir; polinom sağ tarafla çakışma yoktur. Aday $Ax^2+Bx+C$ olur. Ara dereceler yazılmalıdır, çünkü ikinci türevden gelen sabit terim ancak $C$ ile dengelenir.

İkinci denklemde $e^x$ homojen çözümdür — kökler $\pm1$. Çakışma var, üstelik kök basit; aday bir kez $x$ ile çarpılır: $Axe^x$. Buradan $y_p=\frac12xe^x$ çıkar, ama sorulan yalnız adaydı.

Üçüncü denklemde karakteristik kökler $\pm3i$'dir, yani $\cos3x$ ve $\sin3x$ homojen çözümlerdir. Rezonans durumu: aday $x(A\cos3x+B\sin3x)$ olur. Çakışma kontrolünün trigonometrik sağ taraflarda da yapılması gerektiği en çok bu tipte unutulur; $\cos3x$ ile $\sin3x$ aynı kök çiftinden geldiği için ikisi birden homojen çözümdür.

:::

---

## Sonraki Adım: Tipten Bağımsız Yöntem

Belirsiz katsayılar hızlı ama kapsamı dar.

Sağ taraf $\tan x$ ya da $1/x$ ise ne yapılır?

$$
y_h=c_1y_1+c_2y_2
\quad\Longrightarrow\quad
y_p=?
$$

::: {.notes}

Belirsiz katsayılar yöntemi kapsamı içindeyken en kısa yoldur: aday yazılır, türevler alınır, küçük bir lineer sistem çözülür. İntegral hesabı gerekmez.

Kapsam dışında ise başka bir araç gerekiyor: sabitlerin değişimi. Bu yöntem homojen çözümlerden yola çıkar ve sağ tarafın tipine hiç bakmaz. Fikir, $y_h=c_1y_1+c_2y_2$ ifadesindeki sabitleri $x$'e bağlı fonksiyonlara çevirmektir; mertebe indirmede $y_1$'in katsayısını fonksiyona çevirmiş olmamızla aynı hareket.

Bedeli integral hesabıdır: yöntem her zaman bir formül verir, ama formüldeki integraller elemanter fonksiyonlarla alınamayabilir. Bu yüzden iki yöntem birbirinin yerine geçmez; hangisinin seçileceği denkleme bakılarak kararlaştırılır.

:::

---

## Kaynak Notu

Ana kaynak: Nagle, Saff ve Snider.

::: {.notes}

Yöntem burada Nagle, Saff ve Snider'ın klasik yaklaşımıyla kurulmuştur: aday kalıpları tablosu, çakışma durumunda $x^s$ çarpanı ve sağ taraf toplamsa süperpozisyon. Aday kalıbı, sağ tarafın türev ailesinin kapalı olmasından çıkar; çakışma düzeltmesi ise katlı köklerdeki $x$ çarpanıyla aynı mekanizmayı işletir. Bazı kaynaklar aynı yöntemi yok edici operatör (annihilator) yaklaşımıyla kurar; sonuç aynı aday kalıplarıdır.

**Kaynak:** Nagle, Saff & Snider, *Fundamentals of Differential Equations*.

:::

---
