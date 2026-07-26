---
title: "Ayrılabilir Denklemler"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-07-26
execute:
  echo: false
---

## Doğrudan İntegralden Ayrılabilirliğe

> Doğrudan integral, sağ taraf yalnız $x$'e bağlı olduğunda çalışır.
>
> $y'=xy$ gibi çarpım biçimli denklemlerde ise değişkenleri ayırarak çözüm ailesine ulaşabiliriz.

::: {.notes}

$y'=xy$ denkleminde düzlemin her noktasındaki eğim $xy$ olarak okunabilir. Yön alanı bu denklemin nitel davranışını gösterir; ayrılabilirlik ise çözüm ailesini hesaplamak için gereken cebirsel yapıyı sağlar.

Bu notta önce çarpım yapısını tanıyacağız, ardından değişkenleri ayırma mekanizmasını kuracağız. Bölme sırasında dışarıda bırakılan sabit çözümleri ve açık biçime getirilemeyen örtük çözümleri de ayrıca kontrol edeceğiz.

:::

---

## Tanım: ayrılabilir denklem

$$
\frac{dy}{dx}=g(x)h(y).
$$

Sağ taraf, bir $x$ fonksiyonu ile bir $y$ fonksiyonunun **çarpımı** biçiminde yazılabiliyorsa, denklem **ayrılabilir**dir.

::: {.notes}

Sağ taraf artık hem $x$'e hem $y$'ye bağlı olabilir, ama özel bir biçimde: bir $x$ fonksiyonu ile bir $y$ fonksiyonunun çarpımı. Bu yapıya sahip denklemlere ayrılabilir denir. Az önceki $y'=f(x)$ sınıfı, aslında bunun özel bir durumudur — $h(y)=1$ alınırsa $g(x)h(y)=f(x)$ olur. Bu aşamada amaç henüz çözmek değil, bu yapıyı tanımaktır.

:::

---

## Soru: sınıflandırma

Hangileri ayrılabilir?

$$
y'=xy \quad y'=x+y \quad y'=\frac{x}{1+y^2} \quad y'=x-y \quad y'=e^{x+y} \quad y'=x^2+y^2
$$

::: {.notes}

Her denklem için, sağ tarafın bir $x$ fonksiyonu ile bir $y$ fonksiyonunun çarpımı biçiminde yazılıp yazılamayacağına bakılır. Toplam ya da fark biçimindeki ifadeler ($x+y$, $x-y$, $x^2+y^2$) çarpana ayrılamaz; bu, en sık karışan noktadır. $e^{x+y}$ ise ilk bakışta toplam gibi görünse de, üstel fonksiyonun özelliği ($e^{a+b}=e^a e^b$) nedeniyle aslında çarpım biçimindedir — dikkatli bakmak gerekir.

:::

---

## Çözüm: ayrılabilen denklemler

| Denklem | Ayrılabilir mi? | Gerekçe |
|---|---|---|
| $y'=xy$ | Evet | $g(x)=x$, $h(y)=y$ |
| $y'=\dfrac{x}{1+y^2}$ | Evet | $g(x)=x$, $h(y)=\dfrac{1}{1+y^2}$ |
| $y'=e^{x+y}$ | Evet | $e^{x+y}=e^x\cdot e^y$ |

::: {.notes}

$y'=xy$ ve $y'=x/(1+y^2)$ denklemlerinde çarpım yapısı doğrudan görünür. $y'=e^{x+y}$ denkleminde ise üstel fonksiyonun toplama özelliği kullanılır: $e^{x+y}=e^xe^y$. Bu örnek, sınıflandırmadan önce ifadenin sadeleştirilmesi gerektiğini gösterir.

Üç denklemde de sağ taraf, yalnız $x$'e bağlı bir fonksiyon ile yalnız $y$'ye bağlı bir fonksiyonun çarpımıdır. Bu yapı kurulduktan sonra değişkenleri ayırma yöntemi uygulanabilir.

:::

---

## Çözüm: ayrılabilir olmayan denklemler

| Denklem | Ayrılabilir mi? | Gerekçe |
|---|---|---|
| $y'=x+y$ | Hayır | Toplam, çarpana ayrılamaz |
| $y'=x-y$ | Hayır | Fark, çarpana ayrılamaz |
| $y'=x^2+y^2$ | Hayır | Kareler toplamı |

::: {.notes}

Bu üç denklemde sağ taraf bir toplam, fark veya kareler toplamıdır. İfadelerin yalnız $x$'e ve yalnız $y$'ye bağlı iki çarpana ayrılması mümkün değildir; dolayısıyla ayrılabilir denklem yöntemi doğrudan uygulanamaz.

Bu sonuç denklemlerin çözümsüz olduğu anlamına gelmez. Yalnızca başka bir yapının ve başka bir çözüm yönteminin aranması gerektiğini söyler. Örneğin $y'=x+y$ denklemi yeniden düzenlendiğinde birinci mertebeden lineer denklem olarak tanınacaktır.

:::

---

## Soru: gizli ayrılabilirlik

$$
xy' = y+xy
$$

Bu, ilk bakışta ayrılabilir gibi görünmüyor. Sağ tarafı $y'$ yalnız kalacak biçimde düzenleyin — ayrılabilir mi çıkıyor?

::: {.notes}

Bazı denklemler ayrılabilir yapıdadır, fakat bu yapı ilk yazılışta görünmeyebilir; cebirsel bir düzenleme gerekir. Bu denklemi $y'$ yalnız kalacak biçimde yeniden düzenleyelim ve sonucu inceleyelim.

:::

---

## Çözüm: cebirsel düzenlemeyle ayrılabilirlik ortaya çıkıyor

$$
y' = \frac{y+xy}{x} = \frac{y(1+x)}{x} = \frac{1+x}{x}\cdot y
$$

$g(x)=\dfrac{1+x}{x}$, $h(y)=y$ — **ayrılabilir**.

::: {.notes}

Önce $y'$ yalnız bırakılır: $y'=(y+xy)/x=y(1+x)/x=[(1+x)/x]\cdot y$. Şimdi yapı görünür hâle gelmiştir: $g(x)=(1+x)/x$, $h(y)=y$ — ayrılabilir. Sonuç: bir denklemin ayrılabilir olup olmadığına karar vermeden önce, gerekiyorsa $y'$ yalnız bırakılmalı ve sağ taraf sadeleştirilmelidir; ilk yazılış biçimi yanıltıcı olabilir.

Sınıflar arasındaki ilişkiyi sözel olarak da okuyabiliriz: $y'=f(x)$ türündeki her doğrudan integral denklemi, $h(y)=1$ seçimiyle ayrılabilir sınıfa girer. Buna karşılık $y'=x+y$ gibi her birinci mertebe denklem ayrılabilir değildir. Dolayısıyla doğrudan integral denklemleri, ayrılabilir denklemlerin özel bir alt sınıfıdır.

:::

---

## Soru: mekanizma

$$
\frac{dy}{dx}=xy
$$

Ayrılabilir olduğunu biliyoruz. Nasıl çözülür?

::: {.notes}

$y'=xy$'nin ayrılabilir olduğunu biliyoruz. Çözüm için $y$ terimlerini bir tarafa, $x$ terimlerini diğer tarafa toplayarak ilerleyeceğiz.

:::

---

## Çözüm: değişkenlerin ayrılması

$$
\frac{1}{y}\,dy=x\,dx \quad\Longrightarrow\quad \int\frac{1}{y}\,dy=\int x\,dx \quad\Longrightarrow\quad \ln|y|=\frac{x^2}{2}+C_1
$$

$$
y=Ce^{x^2/2}
$$

::: {.notes}

$y\neq 0$ varsayımıyla, denklemi $\frac{1}{y}dy=x\,dx$ biçimine getiririz. İki tarafın integrali alınır: $\int\frac{1}{y}dy=\int x\,dx$, yani $\ln|y|=\frac{x^2}{2}+C_1$, dolayısıyla $y=Ce^{x^2/2}$ (sabit yeniden adlandırılmıştır). Doğrulama: $y'=Cxe^{x^2/2}=x(Ce^{x^2/2})=xy$ — sağlar. Burada $y\neq 0$ varsayımıyla ilerlediğimizi not edelim; bu varsayımın bir bedeli olup olmadığını şimdi inceleyeceğiz.

:::

---

## Soru/dikkat: $y=0$ güvenli mi?

Ayırma sırasında $y\neq 0$ varsayıldı.

**Soru:** $y=0$ bu denklemin bir çözümü mü? Genel çözüm formülünde bulunuyor mu?

::: {.notes}

$y=0$'ı doğrudan denklemde yerine koyarsak $0=x\cdot 0$ — denklemi sağlıyor, demek ki $y=0$ bir çözüm. Peki bu çözüm, az önce bulduğumuz $y=Ce^{x^2/2}$ genel formülünde yer alıyor mu?

:::

---

## Çözüm: kaybolan sabit çözüm

$y'=xy$ için: $y=0$, $C=0$ alınarak genel çözümde zaten var — **kaybolmadı**.

Karşıt örnek — $y'=y^2$:

$$
\frac{1}{y^2}\,dy=dx \quad\Longrightarrow\quad y=-\frac{1}{x+C}
$$

$y=0$ denklemi sağlar, fakat hiçbir $C$ için formülde yer almaz — **kayboldu**.

::: {.notes}

$y'=xy$ örneğinde $y=0$, genel çözüm formülünde $C=0$ alınarak zaten elde ediliyor — yani kaybolmamış. Ama bu her zaman böyle olmaz. $y'=y^2$ denkleminde aynı adımları izlersek: $\frac{1}{y^2}dy=dx$, yani $-\frac{1}{y}=x+C$, dolayısıyla $y=-\frac{1}{x+C}$. Burada $y=0$ denklemi sağlıyor ($0=0^2$), fakat formülde hiçbir $C$ değeri için $y=0$ elde edilemez — payda sonsuza gitmeden pay sıfırlanamaz. Demek ki bu ikinci örnekte $y=0$ gerçekten kayboluyor. Sonuç: ayırma sırasında bir ifadeye bölünüyorsa, o ifadenin sıfır olduğu durum her zaman ayrıca kontrol edilmeli; sonucun formülde olup olmayacağı önceden varsayılamaz, yalnızca yerine koyarak belirlenir.

:::

---

## Soru: her zaman $y=\dots$ biçiminde mi çözülür?

$$
\frac{dy}{dx}=\frac{x}{1+y^2}
$$

Bu denklemi ayırıp integralleyin. $y$'yi yalnız bırakabiliyor musunuz?

::: {.notes}

Şimdiye kadarki örneklerde ayırma sonunda $y$'yi her zaman yalnız bırakabildik. Bu her zaman mümkün müdür? Bu denklem üzerinde deneyelim.

:::

---

## Çözüm: örtük kalan bir çözüm

$$
(1+y^2)\,dy = x\,dx \quad\Longrightarrow\quad y+\frac{y^3}{3} = \frac{x^2}{2}+C
$$

$y$'yi yalnız bırakmak için kullanışlı bir sade biçim yoktur; çözüm **örtük** bırakılır.

::: {.notes}

Ayırırsak: $(1+y^2)dy=x\,dx$, integral alınırsa $y+y^3/3=x^2/2+C$. Bu kübik bağıntı kuramsal olarak açık biçime çözülebilse de elde edilen ifade yöntemi aydınlatmaz; çözümü örtük bırakmak daha okunaklı ve kullanışlıdır. Örtük biçim eksik bir cevap değildir.

Doğrulama için iki tarafın $x$'e göre türevi alınır. Zincir kuralıyla $(1+y^2)y'=x$ ve buradan $y'=x/(1+y^2)$ elde edilir; yani örtük bağıntı özgün denklemi doğrudan sağlar.

:::

---

## Başlangıç Koşuluyla Tamamlama

$$
y'=xy, \qquad y(0)=2 \quad\Longrightarrow\quad C=2 \quad\Longrightarrow\quad y=2e^{x^2/2}.
$$

::: {.notes}

Başlangıç koşuluyla tamamlarsak: $y'=xy$, $y(0)=2$ için $2=Ce^0=C$, dolayısıyla $y=2e^{x^2/2}$. Bu örnek, sınıflandırma, ayırma ve başlangıç koşulu adımlarını tek bir akışta birleştirir.

:::

---

## Sık Yapılan Hatalar

1. Toplamı çarpım sanmak
2. Bölünen sıfırları denetlememek
3. İntegral sabitini iki kez taşımak
4. Örtük çözümü eksik saymak
5. Başlangıç koşulunu erken uygulamak

::: {.notes}

Ayrılabilirlik sağ tarafın gerçekten $g(x)h(y)$ biçiminde yazılmasını gerektirir; $x+y$ gibi bir toplam bu koşulu sağlamaz. Ayırma sırasında $h(y)$ ile bölünüyorsa, $h(y)=0$ yapan sabit değerler özgün denklemde ayrıca sınanmalıdır.

İki tarafta ayrı integral sabitleri yazmak mümkündür, fakat farkları tek bir $C$ sabitinde toplanır. Ayrıca çözüm $y$ cinsinden açıkça çözülemiyorsa örtük bağıntı geçerli bir çözüm sunabilir. Başlangıç koşulu ise genel çözüm ailesi kurulduktan sonra sabiti belirlemek için kullanılır.

:::

---

## Karar Soruları

1. Sağ taraf çarpım biçimine geliyor mu?
2. Hangi ifadeye bölünüyor?
3. Bölünen ifade sıfır olabilir mi?
4. Sonuç açık mı, örtük mü?
5. Hangi aralıkta geçerli?

::: {.notes}

Bu sorular, yöntemi bir formül ezberinden denetlenebilir bir çözüm akışına dönüştürür. İlk soru yöntemi seçtirir; ikinci ve üçüncü sorular olası çözüm kaybını görünür kılar. Dördüncü soru sonucun sunuluş biçimini, beşinci soru ise çözümün tanım aralığını belirler.

Her çözümün sonunda türev alıp özgün denklemde yerine koymak gerekir. Başlangıç koşulu verilmişse, bulunan özel çözümün bu koşulu da sağladığı ayrıca kontrol edilmelidir.

:::

---

## Kavramsal Köprü

Ayrılabilir denklemler için temel ölçüt:

$$
y'=g(x)h(y).
$$

Sağ taraf yalnız $y/x$ oranına bağlıysa, oranı yeni değişken seçmek denklemi ayrılabilir hâle getirebilir.

::: {.notes}

Ayrılabilir yöntemde yapı başlangıçtan görünürdür: $x$ ve $y$ terimleri iki çarpana ayrılır. Homojen tip denklemlerde ise bu yapı doğrudan görünmeyebilir; $v=y/x$ seçimi sonrasında yeni denklem ayrılabilir biçime dönüşür.

Bu köprü, yöntemlerin birbirinden kopuk olmadığını gösterir. Yeni bir değişken seçmenin amacı, bilinmeyen denklemi daha önce çözmeyi bildiğimiz ayrılabilir sınıfa taşımaktır.

:::

---
