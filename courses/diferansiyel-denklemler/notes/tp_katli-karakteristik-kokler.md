---
title: "Katlı Karakteristik Kökler ve İkinci Çözüm"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-08-05
execute:
  echo: false
---

## Kökler Çakışırsa

$b^2-4ac=0$ olduğunda kök formülü tek bir değer verir:

$$
r=-\frac{b}{2a}
$$

$$
ar^2+br+c=a\left(r+\frac{b}{2a}\right)^2
$$

Karakteristik denklem tam kare.

::: {.notes}

Diskriminantın pozitif ve negatif olduğu durumlarda karakteristik denklem iki farklı kök verdi ve her kök bir bağımsız çözüm üretti. Sınır durumda, $b^2-4ac=0$ iken, kök formülündeki karekök sıfırlanır ve iki kök tek bir değerde çakışır: $r=-b/(2a)$.

Bu duruma **çift kök** ya da **katlı kök** denir. Karakteristik polinom tam kare biçimindedir: $ar^2+br+c=a\left(r+\frac{b}{2a}\right)^2$. Polinomun derecesi hâlâ iki, ama farklı kök sayısı bire düşmüş durumda.

Çözüm tarafında bu bir eksik demektir. Karakteristik denklemin her kökü bir üstel çözüm veriyordu; tek kök tek çözüm verir. Oysa ikinci mertebeden bir denklemin genel çözümü iki bağımsız çözüm gerektirir — varlık–teklik teoremi iki başlangıç koşulunun tek bir çözüm belirlediğini söylüyordu ve bu ancak iki serbest sabitle karşılanabilir. Burada asıl soru, eksik olan ikinci çözümü bulmaktır.

:::

---

## Tek Çözüm Neden Yetmiyor?

$$
y''-6y'+9y=0,\qquad r=3
$$

Elimizde $e^{3x}$ var. İkinci çözüm diye yine $e^{3x}$ alınırsa:

$$
c_1e^{3x}+c_2e^{3x}=(c_1+c_2)e^{3x}
$$

İki sabit tek sabite iniyor.

::: {.notes}

Somut bir denklemle çalışalım: $y''-6y'+9y=0$. Karakteristik denklem $r^2-6r+9=(r-3)^2=0$'dır ve tek kök $r=3$'tür. Elde $e^{3x}$ çözümü var.

Aynı çözümü iki kez saymak bir işe yaramaz. $c_1e^{3x}+c_2e^{3x}$ ifadesi $(c_1+c_2)e^{3x}$ olarak sadeleşir; görünüşte iki parametre var, gerçekte bir tane. Böyle bir aile $y(0)=1$, $y'(0)=0$ gibi bir koşul çiftini genel olarak sağlayamaz: $y=Ce^{3x}$ için $y'(0)=3y(0)$ olmak zorundadır, oysa başlangıç değerleri birbirinden bağımsız seçilebilir.

Wronskian aynı sonucu verir: $W(e^{3x},e^{3x})=e^{3x}\cdot3e^{3x}-3e^{3x}\cdot e^{3x}=0$. Özdeş olarak sıfır çıkan Wronskian, iki fonksiyonun temel çözüm kümesi oluşturmadığını gösterir. Aranan şey, $e^{3x}$'in sabit katı olmayan yeni bir çözümdür.

:::

---

## İki Kök Birbirine Yaklaşırken

$r_1$ ve $r_2$ farklıyken şu da bir çözümdür:

$$
\frac{e^{r_2x}-e^{r_1x}}{r_2-r_1}
$$

$r_2\to r_1$ limitinde bu ifade $xe^{r_1x}$'e gider.

::: {.notes}

İkinci çözümü tahmin etmek yerine, çift kök durumuna farklı köklerin sınırı olarak bakalım. $r_1\neq r_2$ iken $e^{r_1x}$ ve $e^{r_2x}$ çözümdür; süperpozisyon gereği bunların her lineer birleşimi de çözümdür. Özel olarak $\frac{e^{r_2x}-e^{r_1x}}{r_2-r_1}$ ifadesi de bir çözümdür — payda sıfırdan farklı bir sabittir ve bölmek çözüm olma özelliğini bozmaz.

Bu ifade tanıdık bir yapıdadır: $r\mapsto e^{rx}$ fonksiyonunun $r_1$ ile $r_2$ arasındaki fark oranıdır. $r_2\to r_1$ limitinde fark oranı türeve gider ve türev $r$'ye göre alınır: $\frac{\partial}{\partial r}e^{rx}=xe^{rx}$. Yani iki kök birbirine yaklaşırken, aralarındaki bağımsız yön kaybolmaz — $xe^{r_1x}$ fonksiyonuna dönüşür.

Bu argüman ikinci çözümün nereden geldiğini açıklar, ama tek başına kanıt sayılmaz: limit alma işleminin çözüm olma özelliğini koruduğu ayrıca gösterilmelidir. Bunun yerine daha kısa bir yol var — $xe^{rx}$ adayını doğrudan denkleme yerleştirip sağladığını göstermek. İkinci çözümü tahmine hiç başvurmadan üreten sistematik bir yöntem mertebe indirmedir.

:::

---

## Aday: $xe^{rx}$

$$
y=xe^{rx}
$$

$$
y'=e^{rx}(1+rx),
\qquad
y''=e^{rx}(2r+r^2x)
$$

::: {.notes}

Adayı denkleme yerleştirmeden önce türevlerini alalım. $y=xe^{rx}$ bir çarpım olduğu için çarpım kuralı gerekir: $y'=e^{rx}+x\cdot re^{rx}=e^{rx}(1+rx)$.

İkinci türev aynı kuralın tekrarıdır: $y''=re^{rx}(1+rx)+e^{rx}\cdot r=e^{rx}(2r+r^2x)$. Ara adımı açalım — birinci terim $e^{rx}$ çarpanının türevinden, ikinci terim parantez içindeki $rx$'in türevinden gelir. İkisi toplanınca sabit kısımda $2r$, $x$'li kısımda $r^2$ kalır.

Bu iki türevde dikkat çeken şey, her ifadenin $e^{rx}$ ortak çarpanını koruması ve içeride $x$'e bağlı bir kısım ile sabit bir kısım bulunmasıdır. Denkleme yerleştirildiğinde bu iki kısım ayrı ayrı sıfırlanmak zorunda kalacak; birinden karakteristik denklem, diğerinden çift kök koşulu çıkacak.

:::

---

## Doğrulama

$$
ay''+by'+cy=e^{rx}\Bigl[(2ar+b)+x\bigl(ar^2+br+c\bigr)\Bigr]
$$

- $ar^2+br+c=0$: $r$ kök
- $2ar+b=0$: $r=-\dfrac{b}{2a}$ çift kök

Her iki parantez de sıfır.

::: {.notes}

Türevleri denklemde yerine koyup $e^{rx}$ ortak çarpanına ayıralım. $a$ ile ikinci türev, $b$ ile birinci türev ve $c$ ile fonksiyonun kendisi çarpılıp toplanır:

$$
a e^{rx}(2r+r^2x)+be^{rx}(1+rx)+cxe^{rx}
=e^{rx}\Bigl[(2ar+b)+x(ar^2+br+c)\Bigr].
$$

İfadenin sıfır olması için köşeli parantez sıfır olmalı. Parantez içinde $x$'e bağlı olmayan bir terim ve $x$ ile çarpılan bir terim var; bir polinomun her $x$ için sıfır olması, her iki katsayısının ayrı ayrı sıfır olmasını gerektirir.

İkinci katsayı $ar^2+br+c$'dir ve $r$ karakteristik denklemin kökü olduğu için sıfırdır. Birinci katsayı $2ar+b$'dir; $r=-b/(2a)$ yazılınca $2a\cdot\left(-\frac{b}{2a}\right)+b=-b+b=0$ çıkar. İkisi de sıfırlandığı için $xe^{rx}$ denklemi sağlar.

Buradaki koşul yalnızca çift kökte sağlanır. Kök basitse, yani $r\neq-b/(2a)$ ise, $2ar+b\neq0$ olur ve $xe^{rx}$ çözüm olmaz. Bu yüzden $x$ çarpanı her denkleme değil, yalnız katlı kök durumuna aittir.

:::

---

## Genel Çözüm

$$
W\bigl(e^{rx},\,xe^{rx}\bigr)=e^{2rx}\neq0
$$

Temel çözüm kümesi $\{e^{rx},xe^{rx}\}$:

$$
\boxed{y=(c_1+c_2x)e^{rx}}
$$

::: {.notes}

İki çözümün bağımsızlığı Wronskian ile doğrulanır. $y_1=e^{rx}$, $y_2=xe^{rx}$ için

$$
W=e^{rx}\cdot e^{rx}(1+rx)-re^{rx}\cdot xe^{rx}=e^{2rx}(1+rx-rx)=e^{2rx}.
$$

Üstel fonksiyon hiçbir noktada sıfır olmadığı için Wronskian her $x$ için sıfırdan farklıdır. İki çözüm bir temel çözüm kümesi oluşturur.

Genel çözüm $y=c_1e^{rx}+c_2xe^{rx}$'tir; ortak çarpan parantezine alınarak $y=(c_1+c_2x)e^{rx}$ biçiminde yazılır. İki serbest sabit var ve bunlar iki başlangıç koşuluyla belirlenir.

Bu biçim önceki iki duruma benzemez ama onlarla aynı mantığı taşır. Farklı reel köklerde iki ayrı üstel, kompleks köklerde bir üstel zarf ile iki trigonometrik fonksiyon vardı. Çift kökte ise tek bir üstel var ve ikinci bağımsız yön $x$ çarpanından geliyor. Üç durumda da genel çözüm iki bağımsız çözümün lineer birleşimidir; değişen, o çözümlerin biçimidir.

:::

---

## Hızlı Kontrol

$$
y''-6y'+9y=0
$$

$$
(r-3)^2=0,\qquad r=3
$$

$$
y=(c_1+c_2x)e^{3x}
$$

::: {.notes}

Baştaki denkleme dönelim. Karakteristik denklem $r^2-6r+9=0$, yani $(r-3)^2=0$'dır ve tek kök $r=3$'tür. Genel çözüm doğrudan formülden yazılır: $y=(c_1+c_2x)e^{3x}$.

Katlı kökü tanımak için diskriminant hesabı şart değildir; karakteristik polinom tam kareye ayrılıyorsa kök çifttir. $r^2-6r+9$ ifadesinde sabit terim $9=3^2$ ve orta terim $-6=-2\cdot3$ olduğundan tam kare açıkça görülür.

İkinci çözümü doğrulamak isterseniz $y=xe^{3x}$ için $y'=e^{3x}(1+3x)$ ve $y''=e^{3x}(6+9x)$ yazın. Denklemde yerine koyunca $e^{3x}[(6+9x)-6(1+3x)+9x]=e^{3x}[6+9x-6-18x+9x]=0$ çıkar. Sabit terimler ve $x$'li terimler ayrı ayrı sıfırlanıyor.

:::

---

## Soru: Katlı Kökte Başlangıç Koşulu

$$
y''-6y'+9y=0,\qquad y(0)=2,\quad y'(0)=7
$$

$$
y=(c_1+c_2x)e^{3x}
$$

Türevde çarpım kuralı gerekiyor.

::: {.notes}

Başlangıç koşullarının uygulanışı önceki durumlarla aynıdır, yalnız türev alma adımı biraz farklıdır. $y=(c_1+c_2x)e^{3x}$ bir çarpım olduğu için türevde iki terim çıkar: parantezin türevinden $c_2e^{3x}$, üstelin türevinden $3(c_1+c_2x)e^{3x}$.

$x=0$ noktasında $e^{0}=1$ ve parantez $c_1$'e indirgenir. Birinci koşul doğrudan $c_1$'i verir; ikinci koşul ise $c_2$ ile $3c_1$'i birlikte içerir. Sistem üçgen yapıdadır, yani $c_1$ bulunduktan sonra $c_2$ tek adımda çıkar.

:::

---

## Çözüm

$$
y'=\bigl[c_2+3(c_1+c_2x)\bigr]e^{3x}
$$

$x=0$:

$$
c_1=2,\qquad c_2+3c_1=7
$$

$$
\boxed{y=(2+x)e^{3x}}
$$

::: {.notes}

Türev ifadesinde $x=0$ yazıldığında $y'(0)=c_2+3c_1$ elde edilir. Birinci koşuldan $c_1=2$ olduğu bilindiğine göre $c_2+6=7$ ve $c_2=1$'dir. Aranan çözüm $y=(2+x)e^{3x}$'tir.

Kontrol edelim: $y(0)=2\cdot1=2$ ✓. Türev $y'=(1+3(2+x))e^{3x}=(7+3x)e^{3x}$ olduğundan $y'(0)=7$ ✓.

Bu problemde $c_2$'nin sıfırdan farklı çıkması, çözümün $e^{3x}$'in katı olmadığını gösterir. Başlangıç koşulları $y'(0)=3y(0)$ ilişkisini sağlasaydı — örneğin $y(0)=2$, $y'(0)=6$ — $c_2=0$ çıkardı ve çözüm yalnız üstel bileşene inerdi. Genel çözümün her iki bileşeni de bu tür özel durumlar dışında görev alır.

:::

---

## $x$ Çarpanı Ne Yapıyor?

$r<0$ için $xe^{rx}$ de sıfıra gider:

$$
\lim_{x\to\infty}xe^{rx}=0
$$

Polinom çarpanı yavaş büyür, üstel hızlı söner.

::: {.notes}

$x$ çarpanı çözümün büyüme davranışını değiştirmez; yalnız başlangıçtaki geçici tepkiyi biçimlendirir. Kök negatifse $xe^{rx}$ ifadesi de sıfıra yaklaşır, çünkü üstel sönüm polinom büyümesinden hızlıdır. Limit L'Hôpital kuralıyla görülür: $\frac{x}{e^{-rx}}$ ifadesinde $-r>0$ olduğundan payda daha hızlı büyür.

Buna karşılık $xe^{rx}$ terimi sönmeye başlamadan önce bir tepe yapar. $r<0$ için $\frac{d}{dx}(xe^{rx})=e^{rx}(1+rx)$ ifadesi $x=-1/r$ noktasında sıfırlanır; çözüm o noktada en büyük değerine ulaşır, sonra azalır. Yani sistem hemen sönmez, önce bir miktar uzaklaşır ve ardından geri döner.

Kök pozitifse $x$ çarpanı büyümeyi yalnızca hızlandırır; çözüm zaten sınırsızdır. Kök sıfırsa — yani $b=c=0$ ise — çözüm $c_1+c_2x$ olur ve doğrusal büyüme kalır. $y''=0$ denkleminin genel çözümünün doğru denklemi olması bu son durumun tanıdık örneğidir.

:::

---

## Teknik Bağlam: Kritik Sönüm

$$
my''+cy'+ky=0,\qquad c^2=4mk
$$

Salınımın kaybolduğu sınır.

Sistem denge konumuna salınmadan ve en hızlı biçimde döner.

::: {.notes}

Kütle–yay–sönümleyici modelinde $c^2=4mk$ koşulu iki rejimin tam sınırıdır: sönüm biraz azalsa sistem salınmaya başlar, biraz artsa aşırı sönümlü davranır. Bu sınıra **kritik sönüm** denir ve çözüm $(c_1+c_2t)e^{-ct/(2m)}$ biçimindedir.

Kritik sönümün mühendislikteki değeri şuradan gelir: sistem denge konumuna salınım yapmadan, üstelik aşırı sönümlü bir sistemden daha hızlı döner. Aşırı sönümde kök $-c/(2m)$'den daha küçük mutlak değerli bir bileşen taşır ve o yavaş bileşen dönüşü geciktirir.

Ölçü aletlerinin göstergeleri, kapı kapatıcıları ve bazı süspansiyon tasarımları bu noktaya ayarlanmak istenir. Uygulamada tam kritik sönüm elde etmek zordur, çünkü $c^2=4mk$ eşitliği tek bir katsayı değerine karşılık gelir ve sıcaklık, aşınma gibi etkilerle kayar. Tasarımda genellikle kritik sönümün biraz altı ya da üstü hedeflenir.

:::

---

## Katlılık İkiden Büyükse

$r$ kökü $m$ katlıysa çözümler:

$$
e^{rx},\;xe^{rx},\;x^2e^{rx},\;\ldots,\;x^{m-1}e^{rx}
$$

Her katlılık bir $x$ kuvveti ekler.

::: {.notes}

İkinci mertebede bir kök en fazla iki katlı olabilir. Mertebe yükseldiğinde daha yüksek katlılıklar mümkün hâle gelir: örneğin dördüncü mertebeden bir denklemin karakteristik polinomu $(r-2)^3(r+1)$ biçiminde olabilir ve $r=2$ üç katlı kök olur.

Kural aynı biçimde genişler: $m$ katlı bir $r$ kökü için $e^{rx}$, $xe^{rx}$, $\ldots$, $x^{m-1}e^{rx}$ fonksiyonları bağımsız çözümler verir. Katlılık başına bir $x$ kuvveti eklenir ve toplam çözüm sayısı katlılığa eşit olur. Bütün kökler için elde edilen çözümler birleştirildiğinde sayı denklemin mertebesine tamamlanır.

Bu genelleme yüksek mertebeden denklemler konusunda kullanılacak. Kompleks kökler katlıysa aynı mantık orada da geçerlidir: $\alpha\pm i\beta$ çifti iki katlıysa $e^{\alpha x}\cos\beta x$ ve $e^{\alpha x}\sin\beta x$ yanında $xe^{\alpha x}\cos\beta x$ ve $xe^{\alpha x}\sin\beta x$ de temel çözüm kümesine girer.

:::

---

## Sık Yapılan Hatalar

1. İkinci çözüm diye $e^{rx}$'i tekrar yazmak
2. $xe^{rx}$ yerine $x^2e^{rx}$ almak
3. $x$ çarpanını basit köke de eklemek
4. Genel çözümü $c_1e^{rx}+c_2e^{rx}$ bırakmak
5. Türevde çarpım kuralını eksik uygulamak

::: {.notes}

Birinci ve dördüncü hatalar aynı yanlış anlamanın iki görünümüdür: karakteristik denklemin "iki kökü" olduğu için iki üstel yazma refleksi. Kökler çakıştığında iki üstel aynı fonksiyondur; bağımsızlığı sağlayan şey ikinci bir kök değil, $x$ çarpanıdır.

İkinci hata katlılık ile kuvvet arasındaki ilişkiyi kaydırmaktan doğar. İki katlı kökte kuvvetler $x^0$ ve $x^1$'dir; $x^2$ ancak üç katlı kökte devreye girer. Genel kural, $m$ katlı kök için $x^{m-1}$'e kadar gitmektir.

Üçüncü hata ters yöndedir: $x$ çarpanını her duruma uygulamak. Farklı iki kökte $xe^{r_1x}$ denklemi sağlamaz — doğrulama hesabında $2ar+b$ terimi sıfırlanmaz. $x$ çarpanının geçerliliği katlı kök koşuluna bağlıdır.

Beşinci hata hesap düzeyindedir. $(c_1+c_2x)e^{rx}$ ifadesinin türevinde iki terim vardır; yalnız üstelin türevini yazıp $c_2e^{rx}$ terimini atlamak başlangıç koşullarını yanlış çözdürür ve hata genellikle $c_2$'de görünür.

:::

---

## Karar Soruları

Çözmeden yanıtlayın:

1. $y''+4y'+4y=0$ hangi durumda?
2. $y=(3-x)e^{-2x}$ hangi denklemin çözümü olabilir?
3. $y''=0$ denkleminin kökleri ve çözümü nedir?

::: {.notes}

Birinci soruda diskriminant $16-16=0$'dır; kök $r=-2$ ve çifttir. Genel çözüm $(c_1+c_2x)e^{-2x}$ olur. Karakteristik polinom $r^2+4r+4=(r+2)^2$ biçiminde tam karedir, yani hesaba girmeden de görülebilir.

İkinci soruda çözümün biçimi $(c_1+c_2x)e^{-2x}$ kalıbına uyuyor: $c_1=3$, $c_2=-1$. Bu kalıp $-2$'nin çift kök olduğu bir denkleme aittir; karakteristik denklem $(r+2)^2=r^2+4r+4$ ve denklem $y''+4y'+4y=0$'dır. Çözümün biçiminden denkleme geri gitmek, kök–çözüm eşleşmesinin çift yönlü kullanımıdır.

Üçüncü soruda karakteristik denklem $r^2=0$'dır ve $r=0$ çift köktür. Genel çözüm $(c_1+c_2x)e^{0\cdot x}=c_1+c_2x$ olur. Doğrudan iki kez integral alarak da aynı sonuç bulunur; ikinci türevi sıfır olan fonksiyonlar doğrulardır. Formülün bu tanıdık durumda doğru sonucu vermesi, sıfır kökün de diğerleri gibi işlendiğini gösterir.

:::

---

## Sonraki Adım: Tahmin Yerine Yöntem

$xe^{rx}$ adayını doğrulama ile kabul ettik.

Sorular:

- Katsayılar sabit değilse ne yapılır?
- Bir çözüm biliniyorsa ikincisi türetilebilir mi?

::: {.notes}

Çift kök durumunda ikinci çözüm elde edildi, ama yol tam anlamıyla sistematik değildi: $xe^{rx}$ adayı limit argümanıyla makul göründü, sonra yerine koyularak doğrulandı. Bu, sabit katsayılı denklemlerde işe yarar; sonucu bir kez öğrenip formül olarak kullanabilirsiniz.

Aynı sorun sabit katsayılı olmayan denklemlerde de çıkar ve orada tahmin edilecek bir kalıp yoktur. $x^2y''-3xy'+4y=0$ gibi bir denklemin bir çözümü biliniyorsa, ikincisi hangi yolla bulunur?

Bu soruyu mertebe indirme yöntemi cevaplar: bilinen bir $y_1$ çözümünden ikinci bağımsız çözümü üreten genel bir yöntemdir; ikinci mertebeden bir denklemi birinci mertebeden bir denkleme indirger. Yöntem çift kök durumunda uygulandığında $xe^{rx}$ sonucunu tahmin olmadan verir.

:::

---

## Kaynak Notu

Ana kaynak: Nagle, Saff ve Snider.

::: {.notes}

Kaynak: Nagle, Saff ve Snider, *Fundamentals of Differential Equations*. Tam kare karakteristik denklem, ikinci çözüm olarak $xe^{rx}$ ve Wronskian ile bağımsızlık kontrolü bu kaynaktaki klasik yaklaşımla uyumludur. $x$ çarpanının kökeni burada iki kökün çakışma limiti ve $2ar+b=0$ koşulu üzerinden gösterilmektedir.

:::

---
