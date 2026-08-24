---
title: "Kompleks Karakteristik Kökler ve Salınımlı Çözümler"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-08-05
execute:
  echo: false
---

## Kökler Kompleks Çıkarsa

$$
y''+2y'+10y=0
\quad\Longrightarrow\quad
r^2+2r+10=0
$$

$$
r=\frac{-2\pm\sqrt{4-40}}{2}=-1\pm3i
$$

Karakteristik denklem yöntemi çalıştı. Peki $e^{(-1+3i)x}$ nedir?

::: {.notes}

Sabit katsayılı homojen denklemlerde karakteristik denklem her zaman kurulur ve kökler her zaman bulunur. Diskriminant negatifse kökler gerçek eksende değil, kompleks düzlemde çıkar. $y''+2y'+10y=0$ denkleminde $b^2-4ac=4-40=-36$'dır ve kökler $r=-1\pm3i$ olur.

Buraya kadar hiçbir kural çiğnenmedi; kök formülü negatif diskriminantta da geçerlidir. Tıkanma bir sonraki adımda: her kökün bir $e^{rx}$ çözümü ürettiğini söylemiştik, ama $e^{(-1+3i)x}$ ifadesinin ne anlama geldiği henüz tanımlı değil. Üstel fonksiyonu gerçek sayılar için biliyoruz; üste kompleks bir sayı geldiğinde ifadeye bir anlam vermek gerekiyor.

İkinci bir beklenti daha var. Denklemin katsayıları gerçek sayılar ve aranan $y(x)$ gerçek değerli bir fonksiyon. Kompleks değerli bir ifadeyi çözüm diye bırakmak bu problemi cevaplamaz. Yapılacak iş iki adımlı: önce kompleks üstelin ne olduğunu tanımlamak, sonra kompleks çözümlerden gerçek değerli bir temel çözüm kümesi çıkarmak.

:::

---

## Kompleks Eşlenik Çift

Gerçek katsayılı bir polinomun kompleks kökleri çift hâlinde gelir:

$$
r_1=\alpha+i\beta,\qquad r_2=\alpha-i\beta
$$

$$
\alpha=-\frac{b}{2a},
\qquad
\beta=\frac{\sqrt{4ac-b^2}}{2a}>0
$$

::: {.notes}

Kök formülünde diskriminant negatifken karekök $\sqrt{b^2-4ac}=i\sqrt{4ac-b^2}$ olarak yazılır. Böylece iki kök $\frac{-b}{2a}\pm i\frac{\sqrt{4ac-b^2}}{2a}$ biçiminde çıkar. Gerçek kısım her iki kökte aynıdır ve $\alpha=-b/(2a)$ ile gösterilir; imajiner kısımlar ise işaretçe zıttır. Bu iki köke **kompleks eşlenik çift** denir ve $\alpha\pm i\beta$ olarak yazılır.

Eşlenik olmaları tesadüf değildir. Katsayıları gerçek olan bir polinomun kökleri arasında $\alpha+i\beta$ varsa, $\alpha-i\beta$ de zorunlu olarak köktür. Dolayısıyla gerçek katsayılı bir diferansiyel denklemde kompleks kökler hiçbir zaman tek başına görünmez.

$\beta>0$ seçimi bir adlandırma tercihidir: çiftin hangi üyesine "birinci kök" denileceği fark etmez, ikisi de aynı çözüm ailesini üretir. $\beta$'yı pozitif almak, ilerideki formülde işaret takibini kolaylaştırır. Kökleri kök formülü yerine kareye tamamlayarak da bulabilirsiniz: $r^2+2r+10=(r+1)^2+9$ ifadesinden $(r+1)^2=-9$ ve $r=-1\pm3i$ doğrudan okunur.

:::

---

## Kompleks Üstel: Euler Formülü

$$
e^{i\theta}=\cos\theta+i\sin\theta
$$

Buradan:

$$
e^{(\alpha+i\beta)x}=e^{\alpha x}\bigl(\cos\beta x+i\sin\beta x\bigr)
$$

::: {.notes}

Kompleks üstel, üstel fonksiyonun kuvvet serisinin kompleks sayılara genişletilmesiyle tanımlanır. $e^{i\theta}$ serisindeki terimler $i$'nin kuvvetleri nedeniyle dönüşümlü olarak gerçek ve imajiner kısımlara ayrılır; gerçek kısımda kosinüsün, imajiner kısımda sinüsün serisi çıkar. Sonuç Euler formülüdür: $e^{i\theta}=\cos\theta+i\sin\theta$.

Bu tanım keyfî değildir; üstel fonksiyonun temel özelliğini korur. $e^{z_1+z_2}=e^{z_1}e^{z_2}$ kuralı kompleks üslerde de geçerli kalır ve türev alma kuralı $\frac{d}{dx}e^{rx}=re^{rx}$ kompleks $r$ için de doğrudur. Karakteristik denklem türetiminde kullanılan tek şey bu türev kuralıydı; dolayısıyla türetim kompleks kökler için de geçerlidir.

Çarpanlara ayırma özelliğini kullanarak $e^{(\alpha+i\beta)x}=e^{\alpha x}e^{i\beta x}$ yazılır ve Euler formülü ikinci çarpana uygulanır. Sonuç $e^{\alpha x}(\cos\beta x+i\sin\beta x)$ olur: gerçek bir üstel zarf ile bir salınımın çarpımı. Salınım buradan geliyor — kompleks kökün imajiner kısmı trigonometrik davranışı üretir.

:::

---

## Gerçek Çözümlere Geçiş

İki kompleks çözüm:

$$
z_1=e^{\alpha x}(\cos\beta x+i\sin\beta x),
\qquad
z_2=e^{\alpha x}(\cos\beta x-i\sin\beta x)
$$

Süperpozisyon geçerli:

$$
\frac{z_1+z_2}{2}=e^{\alpha x}\cos\beta x,
\qquad
\frac{z_1-z_2}{2i}=e^{\alpha x}\sin\beta x
$$

::: {.notes}

Eşlenik iki kök iki kompleks çözüm verir: $z_1=e^{(\alpha+i\beta)x}$ ve $z_2=e^{(\alpha-i\beta)x}$. Euler formülüyle açıldıklarında $z_2$'nin yalnızca imajiner kısmının işareti değişir, çünkü $\cos(-\beta x)=\cos\beta x$ ve $\sin(-\beta x)=-\sin\beta x$'tir.

Süperpozisyon ilkesi çözümlerin lineer birleşimlerinin de çözüm olduğunu söylüyordu; kanıtı yalnızca türevin lineerliğini kullandığı için katsayılar kompleks olduğunda da geçerlidir. O hâlde $z_1$ ve $z_2$'nin uygun birleşimlerini alabiliriz. Toplamın yarısı imajiner kısımları götürür ve $e^{\alpha x}\cos\beta x$ kalır. Farkın $2i$'ye bölümü gerçek kısımları götürür ve $e^{\alpha x}\sin\beta x$ verir.

Bu iki fonksiyon gerçek değerlidir ve denklemi sağlar. Kompleks sayılar hesabın ara aşamasında kullanıldı, sonuçta kalmadı. Aynı sonuca kompleks üstel kullanmadan da varılabilir — $e^{\alpha x}\cos\beta x$ doğrudan denkleme yerleştirilip sağladığı gösterilebilir. Euler formülü üzerinden gitmenin üstünlüğü, bu iki fonksiyonun *nereden geldiğini* göstermesidir; aksi hâlde ikisi de gökten inmiş bir tahmin gibi durur.

:::

---

## Genel Çözüm

$$
\boxed{y=e^{\alpha x}\bigl(c_1\cos\beta x+c_2\sin\beta x\bigr)}
$$

Bağımsızlık kontrolü:

$$
W\bigl(e^{\alpha x}\cos\beta x,\;e^{\alpha x}\sin\beta x\bigr)=\beta e^{2\alpha x}\neq0
$$

::: {.notes}

Temel çözüm kümesi $\{e^{\alpha x}\cos\beta x,\ e^{\alpha x}\sin\beta x\}$'tir. Bağımsızlığı Wronskian ile doğrulayalım. $y_1=e^{\alpha x}\cos\beta x$ ve $y_2=e^{\alpha x}\sin\beta x$ için türevler çarpım kuralıyla alınır:

$$
y_1'=e^{\alpha x}(\alpha\cos\beta x-\beta\sin\beta x),
\qquad
y_2'=e^{\alpha x}(\alpha\sin\beta x+\beta\cos\beta x).
$$

$W=y_1y_2'-y_1'y_2$ açıldığında $\alpha$ içeren terimler birbirini götürür ve $W=\beta e^{2\alpha x}(\cos^2\beta x+\sin^2\beta x)=\beta e^{2\alpha x}$ kalır. $\beta>0$ ve üstel çarpan sıfırdan farklı olduğu için Wronskian hiçbir noktada sıfır olmaz.

Genel çözüm $y=e^{\alpha x}(c_1\cos\beta x+c_2\sin\beta x)$'tir ve $c_1,c_2$ gerçek sabitlerdir. $\beta$'nın sıfır olmaması bu duruma özgü bir güvencedir: diskriminant negatifken $\beta$ tanım gereği pozitiftir. Diskriminant sıfıra yaklaşırken $\beta\to0$ olur, salınım yavaşlar ve sonunda kaybolur — çift kök durumu tam olarak burada başlar.

:::

---

## Hızlı Kontrol

$$
y''+2y'+10y=0,\qquad r=-1\pm3i
$$

$\alpha=-1$, $\beta=3$:

$$
y=e^{-x}\bigl(c_1\cos3x+c_2\sin3x\bigr)
$$

::: {.notes}

Baştaki denkleme dönelim. Kökler $-1\pm3i$ olduğuna göre $\alpha=-1$ ve $\beta=3$'tür. Formül doğrudan uygulanır: $y=e^{-x}(c_1\cos3x+c_2\sin3x)$.

Kökten çözüme geçerken iki sayının yerini karıştırmamak gerekir. Gerçek kısım $\alpha$ üstel zarfa gider ve $e^{\alpha x}$ olur; imajiner kısım $\beta$ trigonometrik fonksiyonların açısına gider ve $\cos\beta x$, $\sin\beta x$ olur. Buradaki çözümde zarf $e^{-x}$, salınım ise $3x$ açısıyla ilerler.

Doğrulamak isterseniz $y=e^{-x}\cos3x$ fonksiyonunu denkleme yerleştirin: $y'=e^{-x}(-\cos3x-3\sin3x)$ ve $y''=e^{-x}(-8\cos3x+6\sin3x)$ bulunur. Üçünü $y''+2y'+10y$ ifadesinde toplayınca kosinüs katsayısı $-8-2+10=0$, sinüs katsayısı $6-6=0$ çıkar.

:::

---

## Özel Durum: Saf Salınım

$\alpha=0$ ise zarf yok:

$$
y''+\omega^2y=0
\quad\Longrightarrow\quad
r=\pm i\omega
$$

$$
y=c_1\cos\omega x+c_2\sin\omega x
$$

Periyot $2\pi/\omega$, genlik sabit.

::: {.notes}

$b=0$ olduğunda karakteristik denklem $ar^2+c=0$ olur ve $a,c$ aynı işaretliyse kökler saf imajinerdir. Standart yazım $y''+\omega^2y=0$ biçimindedir; kökler $\pm i\omega$, dolayısıyla $\alpha=0$ ve $\beta=\omega$'dır. Üstel zarf $e^{0\cdot x}=1$ olduğu için ortadan kalkar ve geriye sabit genlikli bir salınım kalır: $y=c_1\cos\omega x+c_2\sin\omega x$.

Bu, sönümsüz harmonik salınım denklemidir. Sürtünmesiz bir kütle–yay sisteminde $my''+ky=0$ yazılır, $\omega=\sqrt{k/m}$ olur ve sistem sonsuza kadar aynı genlikle salınır. Çözümün periyodu $2\pi/\omega$'dır; $\omega$ büyüdükçe salınım hızlanır.

Daha önce $y''+y=0$ denkleminin çözümlerinin $\cos x$ ve $\sin x$ olduğunu doğrulamıştık, ama bu fonksiyonları bulmamıştık — verilmişlerdi. Şimdi bulunuyorlar: karakteristik denklem $r^2+1=0$, kökler $\pm i$, yani $\alpha=0$ ve $\beta=1$.

:::

---

## Soru: Salınımın Sabitleri

$$
y''+2y'+10y=0,\qquad y(0)=1,\quad y'(0)=2
$$

Genel çözüm:

$$
y=e^{-x}\bigl(c_1\cos3x+c_2\sin3x\bigr)
$$

::: {.notes}

Başlangıç koşulları salınımın hangi noktadan ve hangi hızla başladığını belirler. Kompleks kök durumunda genel çözümün türevi biraz daha uzundur, çünkü hem üstel zarf hem trigonometrik çarpan türetilir. Çarpım kuralı iki terim üretir ve bu terimlerin karıştırılması bu konudaki en sık hesap hatasıdır.

$x=0$ noktasında $e^{0}=1$, $\cos0=1$ ve $\sin0=0$ olduğu için birinci koşul doğrudan $c_1$'i verir. İkinci koşul ise iki sabiti birden içerir; türev ifadesinde zarfın türevinden gelen $-c_1$ ile trigonometrik türevden gelen $3c_2$ bir arada bulunur.

:::

---

## Çözüm: Türevi Doğru Almak

$$
y'=e^{-x}\bigl[(-c_1+3c_2)\cos3x+(-c_2-3c_1)\sin3x\bigr]
$$

$x=0$:

$$
c_1=1,\qquad -c_1+3c_2=2
$$

$$
\boxed{y=e^{-x}\bigl(\cos3x+\sin3x\bigr)}
$$

::: {.notes}

Türevi adım adım alalım. $y=e^{-x}(c_1\cos3x+c_2\sin3x)$ ifadesinde çarpım kuralı uygulanır: birinci terim zarfın türevi olan $-e^{-x}(c_1\cos3x+c_2\sin3x)$, ikinci terim parantezin türevi olan $e^{-x}(-3c_1\sin3x+3c_2\cos3x)$'tir. Kosinüs ve sinüs katsayıları toplanınca yukarıdaki biçim elde edilir.

$x=0$ yazıldığında ilk koşuldan $c_1=1$ çıkar. İkinci koşul $-c_1+3c_2=2$ denklemini verir; $c_1=1$ yerine konunca $3c_2=3$ ve $c_2=1$ bulunur. Aranan çözüm $y=e^{-x}(\cos3x+\sin3x)$'tir.

Sonucu kontrol edelim: $y(0)=1\cdot(1+0)=1$ ✓ ve $y'(0)=(-1+3)=2$ ✓. Çözüm hem sönen bir zarf hem sabit frekanslı bir salınım taşır; $x$ büyüdükçe genlik sıfıra yaklaşır ama sıfır geçişleri düzenli aralıklarla devam eder.

:::

---

## Genlik–Faz Biçimi

$$
c_1\cos\beta x+c_2\sin\beta x=A\cos(\beta x-\varphi)
$$

$$
A=\sqrt{c_1^2+c_2^2},
\qquad
\tan\varphi=\frac{c_2}{c_1}
$$

Tek bir salınımın genliği ve kayması okunur hâle gelir.

::: {.notes}

Aynı çözüm iki farklı biçimde yazılabilir. $A\cos(\beta x-\varphi)$ ifadesi kosinüs toplam formülüyle açılırsa $A\cos\varphi\cos\beta x+A\sin\varphi\sin\beta x$ elde edilir. Bunu $c_1\cos\beta x+c_2\sin\beta x$ ile karşılaştırınca $c_1=A\cos\varphi$ ve $c_2=A\sin\varphi$ olur; buradan $A=\sqrt{c_1^2+c_2^2}$ ve $\tan\varphi=c_2/c_1$ çıkar.

Yukarıdaki çözümde $c_1=c_2=1$ olduğundan $A=\sqrt2$ ve $\varphi=\pi/4$'tür. Çözüm $y=\sqrt2\,e^{-x}\cos(3x-\pi/4)$ biçiminde de yazılabilir. İki gösterim aynı fonksiyonu tanımlar.

Hesap için $c_1,c_2$ biçimi elverişlidir: başlangıç koşulları lineer bir sistem verir. Yorum için genlik–faz biçimi daha okunaklıdır: $A$ salınımın büyüklüğünü, $\varphi$ yatay kaymasını, $e^{\alpha x}$ ise genliğin nasıl değiştiğini doğrudan gösterir. $\varphi$ hesaplanırken $c_1$'in işaretine bakılmalıdır; arktanjant tek başına doğru çeyreği vermez.

:::

---

## $\alpha$ ve $\beta$ Ne Yapıyor?

- $\alpha<0$: zarf söner, salınım küçülür
- $\alpha>0$: zarf büyür, salınım şişer
- $\alpha=0$: genlik sabit
- $\beta$: salınım hızı, periyot $2\pi/\beta$

::: {.notes}

Kompleks kökün iki bileşeni çözümün iki ayrı davranışını yönetir. Gerçek kısım $\alpha$ üstel zarfta durur ve genliğin zamanla ne yaptığını belirler: negatifse salınım sönerek sıfıra yaklaşır, pozitifse genlik büyür, sıfırsa sabit kalır. İmajiner kısım $\beta$ ise yalnızca salınımın hızını belirler; periyot $2\pi/\beta$'dır ve zarftan bağımsızdır.

Bu ayrım, çözümü çizmeden davranışını okumaya izin verir. $y=e^{-x}(\cos3x+\sin3x)$ çözümünde $\alpha=-1$ olduğu için genlik $e^{-x}$ hızıyla sönüyor, $\beta=3$ olduğu için bir tam salınım $2\pi/3$ uzunluğunda bir aralıkta tamamlanıyor. Grafik, $\pm\sqrt2\,e^{-x}$ eğrileri arasında sıkışmış, giderek daralan bir salınımdır.

Gerçek köklü durumla karşılaştırma da buradan yapılır: orada çözüm ya tek yönde büyüyor ya sönüyordu, sıfır ekseninden en fazla bir kez geçebiliyordu. Kompleks köklerde sıfır geçişleri sonsuz sayıdadır ve düzenli aralıklarla tekrarlanır. Sönüm katsayısı değiştikçe sistemin hangi rejime gireceğini diskriminant belirler.

:::

---

## Teknik Bağlam: Az Sönümlü Titreşim

$$
my''+cy'+ky=0,\qquad c^2<4mk
$$

Kökler $-\dfrac{c}{2m}\pm i\beta$ biçiminde.

Sistem denge konumuna salınarak yaklaşır.

::: {.notes}

Kütle–yay–sönümleyici modelinde sönüm katsayısı $c$ küçüldükçe diskriminant $c^2-4mk$ negatife geçer. Bu rejime **az sönüm** denir. Kökler $-\frac{c}{2m}\pm i\beta$ biçimindedir; gerçek kısım her zaman negatiftir, çünkü $c$ ve $m$ pozitiftir. Sistem salınır, ama her salınımda genliğini kaybeder ve denge konumuna yaklaşır.

Aşırı sönümle farkı gözle görülür: aşırı sönümlü bir kapı kapatıcı kapıyı yavaşça ve tek yönde kapatır, az sönümlü bir sistem denge noktasını geçip geri döner. Otomobil süspansiyonunda amortisörler eskidiğinde sönüm azalır ve araç bir tümsekten sonra birkaç kez inip kalkar; bu, sistemin az sönümlü rejime kaymasıdır.

Aynı denklem seri RLC devresinde de karşımıza çıkar: $Lq''+Rq'+q/C=0$. Direnç küçükse akım sönerek salınır, büyükse salınım hiç oluşmaz. $R$, $L$ ve $C$ değerlerinin hangi bileşimde hangi rejimi verdiği doğrudan diskriminantın işaretinden okunur.

:::

---

## Sık Yapılan Hatalar

1. $\beta$ yerine $\beta^2$ ile yazmak
2. Üstel zarfı unutmak
3. Kompleks üsteli sonuçta bırakmak
4. Eşlenik çiftten yalnız birini kullanmak
5. Türevde çarpım kuralını eksik uygulamak

::: {.notes}

Birinci hata köklerin okunmasında çıkar. $r=-1\pm3i$ ise trigonometrik ifadelerde $3x$ bulunur; $9x$ değil. Karışıklığın kaynağı $\beta^2$'nin karakteristik denklemin sabit terimiyle ilişkili görünmesidir — $y''+9y=0$ denkleminde sabit terim $9$, ama $\beta=3$'tür.

İkinci hata $\alpha\neq0$ olduğunda ortaya çıkar: yalnız $c_1\cos\beta x+c_2\sin\beta x$ yazmak denklemi sağlamaz, çünkü sönüm terimi $by'$ dengelenmeden kalır. Üçüncü hata hesabı yarıda bırakmaktır; $c_1e^{(-1+3i)x}+c_2e^{(-1-3i)x}$ ifadesi teknik olarak yanlış değildir ama gerçek değerli bir çözüm ailesi vermez ve başlangıç koşullarını uygulamak zorlaşır.

Dördüncü hata iki kökün ikisinin de kullanılması gerektiğini atlamaktan doğar: tek bir kompleks kökten gelen ifade gerçek kısmı ve imajiner kısmı ayrı ayrı çözüm verse de, temel çözüm kümesini kurmak için ikisine birden ihtiyaç vardır. Beşincisi hesap hatasıdır: $e^{\alpha x}$ ile trigonometrik çarpanın türevi alınırken iki terim çıkar, yalnız birini yazmak başlangıç koşullarını yanlış çözdürür.

:::

---

## Karar Soruları

Çözmeden yanıtlayın:

1. $y''+4y'+13y=0$ salınır mı, söner mi?
2. $y''-2y'+5y=0$ çözümü sınırlı mı?
3. Kökleri $\pm2i$ olan denklem hangisidir?

::: {.notes}

Birinci soruda diskriminant $16-52=-36<0$ olduğu için kökler kompleks, dolayısıyla çözüm salınımlıdır. Gerçek kısım $\alpha=-2$ negatif olduğundan salınım sönerek sıfıra yaklaşır. Sistem hem salınır hem söner; ikisi birbirinin alternatifi değildir.

İkinci soruda kökler $1\pm2i$'dir. Gerçek kısım pozitif olduğu için zarf $e^{x}$ büyür ve çözüm sınırsızdır. Salınım devam eder ama genlik giderek artar. Bu, mekanik sistemlerde negatif sönüme karşılık gelir ve fiziksel bir kütle–yay sisteminde $c<0$ olamayacağı için kendiliğinden ortaya çıkmaz; dışarıdan enerji besleyen sistemlerde görülür.

Üçüncü soruda kökleri $\pm2i$ olan monik polinom $(r-2i)(r+2i)=r^2+4$'tür, denklem $y''+4y=0$ olur. Genel çözüm $y=c_1\cos2x+c_2\sin2x$, periyot $\pi$'dir. Kökten denkleme dönüş, gerçek köklerdeki gibi çarpanları çarpmakla yapılır; eşlenik çiftte imajiner terimler kendiliğinden sadeleşir ve gerçek katsayılı bir polinom kalır.

:::

---

## Sonraki Adım: Diskriminant Sıfırsa

$$
y''-6y'+9y=0
\quad\Longrightarrow\quad
r^2-6r+9=(r-3)^2=0
$$

Tek kök: $r=3$. Elde tek çözüm var: $e^{3x}$.

İkinci bağımsız çözüm nereden gelecek?

::: {.notes}

Diskriminantın pozitif ve negatif olduğu durumlar tamamlandı; ikisinde de iki bağımsız çözüm elde edildi. Geriye diskriminantın sıfır olduğu sınır durumu kalıyor. $y''-6y'+9y=0$ denkleminde karakteristik denklem $(r-3)^2=0$ biçiminde tam kare olur ve tek bir kök verir: $r=3$.

Bu kök $e^{3x}$ çözümünü üretir, ama ikinci mertebe bir denklemin genel çözümü için iki bağımsız çözüm gerekiyor. $e^{3x}$'in katları yeni bilgi taşımaz; $c_1e^{3x}+c_2e^{3x}$ ifadesi tek parametreye indirgenir ve iki başlangıç koşulunu genel olarak sağlayamaz.

Bu eksiği mertebe indirme yöntemi kapatır. İkinci çözümün $xe^{3x}$ olduğu görülür; bu çarpanın nereden geldiği iki ayrı yoldan açıklanabilir: kompleks köklerin çakışma limiti ve daha genel bir araç olan mertebe indirme.

:::

---

## Kaynak Notu

Ana kaynak: Nagle, Saff ve Snider.

::: {.notes}

Kaynak: Nagle, Saff ve Snider, *Fundamentals of Differential Equations*. Euler formülü, eşlenik çiftin lineer birleşimleri ve gerçek değerli temel çözüm kümesi bu kaynaktaki klasik yaklaşımla uyumludur. Genlik–faz biçimi bazı kaynaklarda $A\sin(\beta x+\varphi)$ olarak yazılır; iki gösterim aynı aileyi verir, yalnız faz açısının referansı farklıdır.

:::

---
