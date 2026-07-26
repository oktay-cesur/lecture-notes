---
title: "Birinci Mertebeden Lineer Denklemler"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-07-26
execute:
  echo: false
---

## Standart Biçim

Birinci mertebeden lineer denklem:

$$
y'+p(x)y=q(x).
$$

Önce denklem bu biçime getirilir; sonra yöntem uygulanır.

::: {.notes}

Birinci mertebeden bir diferansiyel denklem, bağımlı değişken $y$ ve onun türevi $y'$ birinci kuvvette yer alıyor, birbiriyle çarpılmıyor ve doğrusal olmayan bir fonksiyonun içinde bulunmuyorsa lineerdir. $p(x)$ ile $q(x)$ yalnız bağımsız değişken $x$'e bağlı olabilir. Bu yapı standart biçimde

$$
y'+p(x)y=q(x)
$$

olarak yazılır.

Çözüm yöntemine başlamadan önce $y'$ teriminin katsayısı $1$ yapılmalıdır. Denklem başlangıçta $a_1(x)y'+a_0(x)y=g(x)$ biçimindeyse, $a_1(x)\neq0$ olan bir aralıkta bütün terimler $a_1(x)$ ile bölünür. Ancak bu işlemden sonra $p(x)$ ve $q(x)$ doğru biçimde belirlenebilir. Dolayısıyla standart biçime geçiş, yöntemin yalnız yazım adımı değil, başlangıç koşuludur.

:::

---

## İntegrasyon Çarpanı Fikri

**Sorun:** $y'+p(x)y$ doğrudan tek bir fonksiyonun türevi değildir.

**Amaç:** Uygun bir $\mu(x)$ ile sol tarafı bir çarpımın türevine dönüştürmek.

$$
\mu y' + \mu p(x)y = (\mu y)'.
$$

Çarpım kuralına göre:

$$
(\mu y)'=\mu y'+\mu' y.
$$

Bu yüzden

$$
\mu'=\mu p(x)
\quad\Longrightarrow\quad
\frac{\mu'}{\mu}=p(x).
$$

::: {.notes}

$y'+p(x)y$ ifadesindeki iki terim, mevcut hâliyle doğrudan integrallenebilen tek bir türev oluşturmaz. İntegrasyon çarpanının görevi denklemi yeni bir yapıya dönüştürmektir: uygun bir $\mu(x)$ ile çarpıldığında sol taraf $(\mu y)'$ biçimini alır ve tek adımda integrallenebilir.

$y'$ teriminin integrali $y$ olarak bilinse de $\int p(x)y(x)\,dx$ integrali, aranan $y$ fonksiyonu bilinmeden doğrudan hesaplanamaz. Bu nedenle iki terimi ayrı ayrı integral almak denklemi çözmez. Aranan dönüşüm, bu iki terimi bilinen bir türev kuralının parçaları hâline getirmelidir.

Çarpım kuralı

$$
(\mu y)'=\mu y'+\mu' y
$$

biçimindedir. Denklemi $\mu(x)$ ile çarptığımızda elde edilen $\mu y'+\mu p(x)y$ ifadesinin bu kuralla eşleşmesi için $y$ terimlerinin katsayıları aynı olmalıdır. Buradan $\mu'=\mu p(x)$ koşulu çıkar. İntegrasyon çarpanı rastgele seçilen bir yardımcı fonksiyon değil, sol tarafı bir çarpım türevine dönüştürmek üzere bu koşuldan belirlenen fonksiyondur.

:::

---

## İntegrasyon Çarpanının Hesabı

$$
\begin{aligned}
\mu'&=\mu p(x),\\
\frac{\mu'}{\mu}&=p(x) \qquad (\mu\neq0),\\
\int\frac{\mu'}{\mu}\,dx&=\int p(x)\,dx,\\
\ln|\mu|&=\int p(x)\,dx+C_0.
\end{aligned}
$$

Hesap, $\mu\neq0$ olan bir çözüm aralığında yürütülür.

$$
\begin{aligned}
\ln|\mu|&=\int p(x)\,dx+C_0,\\
|\mu|&=e^{C_0}e^{\int p(x)\,dx},\\
\mu(x)&=A e^{\int p(x)\,dx},\qquad A\neq0.
\end{aligned}
$$

Tek bir integrasyon çarpanı yeterlidir; $A=1$ seçilebilir:

$$
\mu(x)=e^{\int p(x)\,dx}.
$$

::: {.notes}

İntegrasyon çarpanı $\mu'=\mu p(x)$ koşulunu sağlamalıdır. $\mu\neq0$ olan bir çözüm aralığında iki taraf $\mu$ ile bölünür. Sol taraf $\ln|\mu|$ fonksiyonunun türevi olduğundan integral alma işlemi

$$
\ln|\mu|=\int p(x)\,dx+C_0
$$

eşitliğini verir. Buradaki $C_0$, asıl diferansiyel denklemin çözüm sabiti değil, integrasyon çarpanını hesaplarken ortaya çıkan yardımcı sabittir.

$\ln|\mu|$ eşitliğine üstel fonksiyon uygulandığında $|\mu|=e^{C_0}e^{\int p(x)\,dx}$ elde edilir. Mutlak değerin oluşturduğu işaret ile pozitif $e^{C_0}$ sabiti, sıfırdan farklı tek bir $A$ sabiti içinde birleştirilebilir. Böylece integrasyon çarpanlarının ailesi

$$
\mu(x)=A e^{\int p(x)\,dx},
\qquad A\neq0
$$

biçiminde yazılır.

Burada amaç $\mu$ için bütün aileyi taşımak değil, asıl diferansiyel denklemi çözülebilir hâle getiren tek bir çarpan seçmektir. $A$ sabiti integrasyon çarpanını yalnız sabit bir katsayıyla değiştirir. Denklem integral alındıktan sonra bu katsayı çözüm sabitinin içine gireceğinden uygulamada $A=1$ seçilir. Böylece en sade seçim

$$
\mu(x)=e^{\int p(x)\,dx}
$$

olur. Üstel biçim, $\mu$'nün seçilen çözüm aralığında sıfır olmamasını da güvence altına alır.

:::

---

## Genel Mekanizma

$$
y'+p(x)y=q(x),\qquad
\mu=e^{\int p(x)\,dx}.
$$

Denklemi $\mu$ ile çarpalım:

$$
\mu y'+\mu p(x)y=\mu q(x)
\quad\Longrightarrow\quad
(\mu y)'=\mu q(x)
\quad\Longrightarrow\quad
\mu y=\int \mu q(x)\,dx+C.
$$

::: {.notes}

Denklem $\mu(x)$ ile çarpıldığında her terim bu çarpandan etkilenir:

$$
\mu y'+\mu p(x)y=\mu q(x).
$$

İntegrasyon çarpanı $\mu'=\mu p(x)$ koşulunu sağladığı için sol taraftaki ikinci terim $\mu' y$ olarak yazılabilir. Böylece sol taraf

$$
\mu y'+\mu' y=(\mu y)'
$$

olur. Yöntemin merkezi bu eşitliktir: başlangıçta ayrı görünen iki terim, tek bir çarpımın türevine dönüşür.

Artık iki taraf integral alınabilir ve $\mu y=\int \mu q(x)\,dx+C$ elde edilir. Son adımda $\mu$ seçilen aralıkta sıfır olmadığı için $y$ yalnız bırakılabilir. Genel çözüm ifadesini ezberlemekten daha güvenilir olan yaklaşım, her soruda önce $(\mu y)'=\mu q(x)$ mekanizmasını kurmaktır.

:::

---

## İşlemsel Örnek 1: Sabit Katsayılar

$$
y'+2y=6,\qquad
\mu=e^{\int 2\,dx}=e^{2x}.
$$

$$
(e^{2x}y)'=6e^{2x}
\quad\Longrightarrow\quad
e^{2x}y=3e^{2x}+C
\quad\Longrightarrow\quad
\boxed{y=3+Ce^{-2x}}.
$$

::: {.notes}

Denklem zaten standart biçimde olduğundan $p(x)=2$ ve $q(x)=6$ doğrudan okunur. Buna göre integrasyon çarpanı $\mu=e^{2x}$ olur. Denklemin bütün terimleri $e^{2x}$ ile çarpıldığında

$$
e^{2x}y'+2e^{2x}y=6e^{2x}
$$

elde edilir. Sol taraf, çarpım kuralı gereğince $(e^{2x}y)'$ ifadesidir. Böylece denklem tek bir türev biçimine indirgenir:

$$
(e^{2x}y)'=6e^{2x}.
$$

İntegral alındığında $e^{2x}y=3e^{2x}+C$ ve buradan $y=3+Ce^{-2x}$ bulunur. Sonuçta $3$ sabit çözümü sağ taraftaki sürekli etkinin karşılığıdır; $Ce^{-2x}$ terimi ise başlangıç değerine göre değişen kısmı taşır. Doğrulamak için $y'=-2Ce^{-2x}$ yazılırsa $y'+2y=6$ eşitliği doğrudan elde edilir.

:::

---

## İşlemsel Örnek 2: Değişken Katsayı

$$
y'+xy=x,\qquad y(0)=3,
\qquad
\mu=e^{\int x\,dx}=e^{x^2/2}.
$$

$$
(e^{x^2/2}y)'=xe^{x^2/2}
\quad\Longrightarrow\quad
e^{x^2/2}y=e^{x^2/2}+C.
$$

$$
y=1+Ce^{-x^2/2},
\qquad
y(0)=3\Longrightarrow C=2,
\qquad
\boxed{y=1+2e^{-x^2/2}}.
$$

::: {.notes}

Bu denklemde $p(x)=x$ ve $q(x)=x$ olduğundan integrasyon çarpanı

$$
\mu=e^{\int x\,dx}=e^{x^2/2}
$$

olarak belirlenir. Katsayının sabit ya da değişken olması yöntemin yapısını değiştirmez; yalnız integrasyon çarpanının biçimini değiştirir. Denklem bu çarpanla çarpıldığında sol taraf $(e^{x^2/2}y)'$ olur.

Sağ tarafta ortaya çıkan $xe^{x^2/2}$ ifadesi, $e^{x^2/2}$ fonksiyonunun türevidir. Bu nedenle

$$
e^{x^2/2}y=e^{x^2/2}+C
$$

ve ardından $y=1+Ce^{-x^2/2}$ elde edilir. Başlangıç koşulu genel çözüm bulunduktan sonra uygulanır: $y(0)=3$ eşitliği $3=1+C$ verdiğinden $C=2$ olur. Böylece başlangıç değerini sağlayan özel çözüm $y=1+2e^{-x^2/2}$ biçimindedir. $p$ ve $q$ bütün gerçek sayılarda sürekli olduğundan bu çözüm $\mathbb{R}$ üzerinde ele alınabilir.

:::

---

## İşlemsel Örnek 3: Üstel Sağ Taraf

$$
y'-2y=e^x,\qquad
p(x)=-2,\qquad
\mu=e^{\int -2\,dx}=e^{-2x}.
$$

$$
(e^{-2x}y)'=e^{-x}
\quad\Longrightarrow\quad
e^{-2x}y=-e^{-x}+C
\quad\Longrightarrow\quad
\boxed{y=-e^x+Ce^{2x}}.
$$

::: {.notes}

Denklem standart biçimde $y'+p(x)y=q(x)$ ile karşılaştırıldığında $p(x)=-2$ ve $q(x)=e^x$ bulunur. $y$ teriminin katsayısındaki eksi işareti integrasyon çarpanına da yansır:

$$
\mu=e^{\int -2\,dx}=e^{-2x}.
$$

Denklem $e^{-2x}$ ile çarpıldığında sağ taraf $e^{-2x}e^x=e^{-x}$ biçiminde sadeleşir; sol taraf ise $(e^{-2x}y)'$ olur. $\int e^{-x}\,dx=-e^{-x}$ olduğundan $e^{-2x}y=-e^{-x}+C$ ve dolayısıyla $y=-e^x+Ce^{2x}$ elde edilir.

İşaretin doğruluğu türevle kontrol edilebilir. $y'=-e^x+2Ce^{2x}$ olduğundan

$$
y'-2y=(-e^x+2Ce^{2x})-2(-e^x+Ce^{2x})=e^x
$$

olur ve bulunan çözüm denklemi sağlar.

:::

---

## İşlemsel Örnek 4: Önce Standart Biçim

$$
xy'+y=x^2,\quad x>0
\quad\Longrightarrow\quad
y'+\frac{1}{x}y=x.
$$

$$
\mu=e^{\int (1/x)\,dx}=e^{\ln x}=x.
$$

$$
(xy)'=x^2
\quad\Longrightarrow\quad
xy=\frac{x^3}{3}+C
\quad\Longrightarrow\quad
\boxed{y=\frac{x^2}{3}+\frac{C}{x}}.
$$

::: {.notes}

Denklemde $y'$ teriminin katsayısı $x$ olduğu için $p(x)$ ve $q(x)$ doğrudan okunamaz. Verilen $x>0$ aralığında bütün terimler $x$ ile bölündüğünde

$$
y'+\frac{1}{x}y=x
$$

standart biçimi elde edilir. Burada $p(x)=1/x$ ve $q(x)=x$'tir.

İntegrasyon çarpanı hesaplanırken

$$
\mu=e^{\int (1/x)\,dx}=e^{\ln x}=x
$$

yazılabilir; çünkü seçilen aralıkta $x$ pozitiftir. Denklem $x$ ile çarpıldığında sol taraf $xy'+y=(xy)'$ olur. Böylece $(xy)'=x^2$ eşitliğinin integrali alınır ve $xy=x^3/3+C$ bulunur. Son olarak $x>0$ olduğundan $x$ ile bölünebilir ve $y=x^2/3+C/x$ elde edilir. Başlangıçtaki aralık seçimi, hem standart biçime geçişteki bölmeyi hem de logaritmanın yazımını geçerli kılar.

:::

---

## İşlemsel Örnek 5: Rasyonel Katsayı

$$
y'+\frac{2x}{1+x^2}y=\frac{1}{1+x^2},
\qquad
\mu=e^{\int \frac{2x}{1+x^2}\,dx}
=e^{\ln(1+x^2)}=1+x^2.
$$

$$
\big((1+x^2)y\big)'=1
\quad\Longrightarrow\quad
(1+x^2)y=x+C
\quad\Longrightarrow\quad
\boxed{y=\frac{x+C}{1+x^2}}.
$$

::: {.notes}

Bu örnekte

$$
p(x)=\frac{2x}{1+x^2},
\qquad
q(x)=\frac{1}{1+x^2}
$$

olur. $1+x^2$ bütün gerçek sayılarda pozitif olduğu için her iki katsayı da $\mathbb{R}$ üzerinde süreklidir. İntegrasyon çarpanının üssündeki integral, $u=1+x^2$ dönüşümüyle

$$
\int\frac{2x}{1+x^2}\,dx=\ln(1+x^2)
$$

biçiminde hesaplanır. Üstel fonksiyon ile logaritma birbirini götürdüğünden $\mu=1+x^2$ elde edilir.

Denklem bu çarpanla çarpıldığında sol taraf

$$
(1+x^2)y'+2xy=\big((1+x^2)y\big)'
$$

olur; sağ taraf ise $(1+x^2)/(1+x^2)=1$ biçiminde sadeleşir. Böylece $\big((1+x^2)y\big)'=1$ eşitliği integrallenir ve $(1+x^2)y=x+C$ bulunur. $1+x^2$ hiçbir gerçek $x$ için sıfır olmadığından son adımda güvenle bölünerek $y=(x+C)/(1+x^2)$ elde edilir.

:::

---

## Köprü Örneği: Vana Eklenmiş Depo

Madde miktarı modeli:

$$
\frac{dQ}{dt}=c-kQ,\qquad k>0.
$$

Standart biçim:

$$
\frac{dQ}{dt}+kQ=c.
$$

::: {.notes}

$Q(t)$ depoda $t$ anında bulunan madde miktarını göstersin. Sabit $c$ terimi depoya birim zamanda giren miktarı, $kQ$ terimi ise mevcut miktarla orantılı çıkışı temsil eder. $k>0$ koşulu, çıkış hızının miktar arttıkça arttığını belirtir. Bu varsayımlar altında net değişim

$$
\frac{dQ}{dt}=c-kQ
$$

biçimindedir.

Sağ taraf yalnız $t$'nin bilinen bir fonksiyonu değildir; aranan $Q(t)$ fonksiyonunu da içerir. Bu nedenle denklem, $dQ/dt=f(t)$ türündeki doğrudan integral denklemleri gibi çözülemez. $kQ$ terimi sol tarafa alındığında

$$
\frac{dQ}{dt}+kQ=c
$$

standart lineer biçimi ortaya çıkar. Model ile integrasyon çarpanı yöntemi arasındaki köprü bu yeniden düzenlemedir.

:::

---

## Depo Modelinin Çözümü

$$
p(t)=k,\qquad \mu(t)=e^{kt},
\qquad
(e^{kt}Q)'=ce^{kt}.
$$

$$
e^{kt}Q=\frac{c}{k}e^{kt}+C
\quad\Longrightarrow\quad
Q(t)=\frac{c}{k}+Ce^{-kt}.
$$

Başlangıç koşulu $Q(0)=Q_0$ ise:

$$
Q(t)=\frac{c}{k}+\left(Q_0-\frac{c}{k}\right)e^{-kt}.
$$

::: {.notes}

Standart biçimde $p(t)=k$ ve $q(t)=c$ olduğundan integrasyon çarpanı $\mu(t)=e^{kt}$ olur. Denklem bu çarpanla çarpıldığında

$$
e^{kt}Q'+ke^{kt}Q=ce^{kt}
$$

elde edilir. Sol taraf $(e^{kt}Q)'$ olduğundan iki tarafın integrali

$$
e^{kt}Q=\frac{c}{k}e^{kt}+C
$$

eşitliğini verir. Burada $k>0$ olduğu için $\int ce^{kt}\,dt=(c/k)e^{kt}$ yazılmıştır. $e^{kt}$ ile bölündüğünde genel çözüm

$$
Q(t)=\frac{c}{k}+Ce^{-kt}
$$

biçimine gelir.

Başlangıç koşulu $Q(0)=Q_0$ uygulanırsa $Q_0=c/k+C$ ve dolayısıyla $C=Q_0-c/k$ bulunur. Çözümdeki $c/k$ sabit terimi denge miktarıdır. $Ce^{-kt}$ terimi başlangıç miktarı ile denge miktarı arasındaki farkın zamanla nasıl azaldığını gösterir. $k>0$ olduğundan $t\to\infty$ iken $e^{-kt}\to0$ ve

$$
\lim_{t\to\infty}Q(t)=\frac{c}{k}
$$

olur. Böylece modelden sezgisel olarak beklenen denge değeri, diferansiyel denklemin çözümüyle doğrulanır.

:::

---

## Standart Biçime Getirme Hatası

$$
xy'+2y=x^3.
$$

Bu denklem henüz

$$
y'+p(x)y=q(x)
$$

biçiminde değildir; çünkü $y'$ teriminin katsayısı $1$ değil, $x$'tir.

**Hatalı okuma:** $p(x)=2$ ve $q(x)=x^3$.

$x\neq0$ koşuluyla **bütün terimler** $x$'e bölünür:

$$
y'+\frac{2}{x}y=x^2.
$$

::: {.notes}

Birinci mertebeden lineer denklem genel olarak $a_1(x)y'+a_0(x)y=g(x)$ biçiminde verilmiş olabilir. $p(x)$ ve $q(x)$, denklem bu hâliyle okunmaz. Önce $a_1(x)\neq0$ olan bir aralık seçilir ve denklemin bütün terimleri $a_1(x)$ ile bölünür:

$$
p(x)=\frac{a_0(x)}{a_1(x)},
\qquad
q(x)=\frac{g(x)}{a_1(x)}.
$$

Bu örnekte $a_1(x)=x$ olduğu için denklemde görülen $2$, doğrudan $p(x)$ değildir; bölme işleminden sonra $p(x)=2/x$ olur. Benzer biçimde sağ taraf da $x^3$ olarak kalmaz, $q(x)=x^2$ olur. Yalnız sol taraftaki terimleri bölmek de hatalıdır; eşitliğin iki tarafındaki bütün terimler aynı işleme tabi tutulmalıdır.

:::

---

## Standart Biçim ve Çözüm Aralığı

Standart biçim:

$$
y'+\frac{2}{x}y=x^2.
$$

Katsayılar artık doğru biçimde okunabilir:

$$
p(x)=\frac{2}{x},
\qquad
q(x)=x^2.
$$

$p(x)$, $x=0$ noktasında tanımsızdır:

$$
I_-=(-\infty,0),
\qquad
I_+=(0,\infty).
$$

Çözüm bu aralıklardan biri üzerinde aranır.

::: {.notes}

Standart biçime geçiş yalnız cebirsel bir düzenleme değildir. $x$ ile bölme işlemi $x=0$ noktasını dışarıda bırakır ve $p(x)=2/x$ katsayısı bu noktada tanımsızdır. Bu nedenle lineer yöntem, $x=0$'ı içermeyen ve bu noktayı geçmeyen bir aralıkta uygulanır; doğal en geniş aralıklar $(-\infty,0)$ ve $(0,\infty)$'dir.

Çözüm aralığı seçimi, integrasyon çarpanı hesaplanmadan önce yapılır. Negatif yarı eksende başlayan bir çözüm $I_-=(-\infty,0)$ üzerinde, pozitif yarı eksende başlayan bir çözüm ise $I_+=(0,\infty)$ üzerinde ele alınır. $x=0$ noktasında standart biçimin katsayısı tanımsız olduğundan bu iki aralık lineer yöntem içinde tek bir aralık olarak birleştirilemez.

:::

---

## Çözüm

$$
\mu=e^{\int (2/x)\,dx}=x^2.
$$

$$
(x^2y)'=x^2\cdot x^2=x^4
\quad\Longrightarrow\quad
x^2y=\frac{x^5}{5}+C
\quad\Longrightarrow\quad
y=\frac{x^3}{5}+\frac{C}{x^2}.
$$

Çözüm, seçilen $x<0$ veya $x>0$ aralığında geçerlidir.

::: {.notes}

Standart biçime geçişte elde edilen $p(x)=2/x$ katsayısı, integrasyon çarpanını belirler. $\mu=x^2$ ile çarpım sol tarafı $(x^2y)'$ yaparken sağ taraf $x^2\cdot x^2=x^4$ olur. Böylece denklem doğrudan integrallenebilir biçime gelir.

İntegrasyon çarpanı daha ayrıntılı olarak

$$
\mu=e^{\int 2/x\,dx}
=e^{2\ln|x|}
=|x|^2
=x^2
$$

biçiminde hesaplanır. Hem $(-\infty,0)$ hem de $(0,\infty)$ aralığında aynı $x^2$ ifadesinin elde edilmesi, iki aralığın tek bir çözüm aralığı olduğu anlamına gelmez. Yöntem her aralıkta ayrı ayrı uygulanır.

Denklem $x^2$ ile çarpıldığında $(x^2y)'=x^4$ olur. İntegral alıp $x^2$ ile bölmek

$$
y=\frac{x^3}{5}+\frac{C}{x^2}
$$

çözümünü verir. $C$ sabiti seçilen çözüm aralığına aittir; negatif ve pozitif yarı eksenlerde çözümler ayrı ayrı ele alınıyorsa sabitlerin aynı olması gerekmez. Formül $x\neq0$ kabulü altında türetildiği için iki yarı ekseni tek bir çözüm aralığı gibi birleştirmez.

:::

---

## Çözüm Aralığı ve Katsayıların Sürekliliği

$$
y'+\frac{1}{x+1}y=5x^2.
$$

$p(x)=1/(x+1)$, $x=-1$ noktasında tanımsızdır.

$$
\mu(x)
=e^{\int \frac{1}{x+1}\,dx}
=e^{\ln|x+1|}
=|x+1|.
$$

$$
I=(-\infty,-1)
\qquad\text{veya}\qquad
I=(-1,\infty).
$$

Seçilen aralıkta $|x+1|$ sabit işaretine göre sadeleşir.

::: {.notes}

Birinci mertebeden lineer yöntem uygulanırken $p(x)$ ve $q(x)$ katsayılarının ele alınan çözüm aralığında sürekli olması gerekir. Bu örnekte $q(x)=5x^2$ her yerde süreklidir; ancak $p(x)=1/(x+1)$, $x=-1$ noktasında tanımsızdır. Dolayısıyla çözüm aralığı bu noktayı geçemez.

$(-1,\infty)$ aralığında $x+1>0$ olduğu için $\mu=x+1$ yazılır. $(-\infty,-1)$ aralığında ise $x+1<0$ olduğundan $\mu=-(x+1)$ elde edilir. İntegrasyon çarpanının sıfırdan farklı sabit katları aynı işlevi gördüğü için bu işaret farkı yöntemin mekanizmasını değiştirmez. Önce çözüm aralığı seçilir, sonra mutlak değer o aralığa göre açılır.

Bu örnekte denklemin tamamen çözülmesi amaçlanmamaktadır. Önemli olan, standart biçimde görülen katsayıların yalnız integrasyon çarpanını değil, yöntemin uygulanabileceği aralığı da belirlediğini fark etmektir. Bir başlangıç değeri verilseydi çözüm aralığı, başlangıç noktasını içeren fakat $x=-1$ noktasını geçmeyen aralık içinden seçilirdi.

:::

---

## Sınıflandırma Pekiştirme

$$
y'=x+y
\quad\Longrightarrow\quad y'-y=x,
\qquad
p(x)=-1,\qquad q(x)=x.
$$

$$
y'=x-y
\quad\Longrightarrow\quad y'+y=x,
\qquad
p(x)=1,\qquad q(x)=x.
$$

::: {.notes}

Ayrılabilir denklem yönteminde sağ tarafın yalnız $x$'e bağlı bir çarpan ile yalnız $y$'ye bağlı bir çarpana ayrılması gerekir. Buradaki iki denklem bu yapıyı doğrudan sağlamaz; ancak bu durum onların çözümsüz olduğu anlamına gelmez. Denklem uygun biçimde yeniden düzenlendiğinde farklı bir sınıfa ait olduğu görülebilir.

İlk denklem

$$
y'=x+y
$$

biçiminden $y'-y=x$ biçimine getirildiğinde $p(x)=-1$ ve $q(x)=x$ olan lineer bir denklem elde edilir. İkinci denklemde ise $y$ terimi sol tarafa alındığında $y'+y=x$ olur; bu kez $p(x)=1$ ve $q(x)=x$'tir. İşaret farkı integrasyon çarpanını değiştirir, fakat yöntemin temel mekanizması aynı kalır.

Bu karşılaştırma, yöntem seçiminin denklemin ilk bakıştaki yazılışına göre değil, cebirsel olarak düzenlendikten sonra ortaya çıkan yapıya göre yapılması gerektiğini gösterir. Bir denklemin ayrılabilir olmaması, lineer yöntemle çözülemeyeceği anlamına gelmez.

Lineerlik, seçilen bağımlı değişkene göre değerlendirilir. $y=y(x)$ biçiminde $y$'ye göre lineer görünmeyen bazı denklemler, $x=x(y)$ biçiminde ele alındığında $x$'e göre lineer olabilir. Bu notta bağımlı değişken $y$ olarak kabul edilmektedir.

:::

---

## Çözüm: İntegrasyon Çarpanı

$$
y'-y=x,
\qquad p(x)=-1,
\qquad \mu=e^{-x}.
$$

$$
e^{-x}y'-e^{-x}y=xe^{-x}
\quad\Longrightarrow\quad
(e^{-x}y)'=xe^{-x}.
$$

::: {.notes}

Standart biçimde $p(x)=-1$ olduğundan integrasyon çarpanı $\mu=e^{-x}$ olur. Denklem bu çarpanla çarpıldığında

$$
(e^{-x}y)'=xe^{-x}
$$

eşitliği elde edilir. Sol taraftaki dönüşüm doğrudan çarpım kuralıyla kontrol edilebilir:

$$
\frac{d}{dx}(e^{-x}y)
=e^{-x}y'-e^{-x}y.
$$

Böylece diferansiyel denklemin sol tarafı tek bir türeve dönüşmüştür. Çözümün kalan adımı, sağ taraftaki $\int xe^{-x}\,dx$ integralinin hesaplanmasıdır. Bu integral iki fonksiyonun çarpımını içerdiği için kısmi integrasyonla ele alınır.

:::

---

## Çözüm: Kısmi İntegrasyon

$$
u=x,\quad dv=e^{-x}\,dx,
\qquad
du=dx,\quad v=-e^{-x}.
$$

$$
\int xe^{-x}\,dx
=-xe^{-x}+\int e^{-x}\,dx
=-xe^{-x}-e^{-x}+C.
$$

$$
e^{-x}y=-xe^{-x}-e^{-x}+C
\quad\Longrightarrow\quad
\boxed{y=-x-1+Ce^x}.
$$

::: {.notes}

Kısmi integrasyon formülü $\int u\,dv=uv-\int v\,du$ biçimindedir. $u=x$ ve $dv=e^{-x}\,dx$ seçildiğinde $du=dx$ ve $v=-e^{-x}$ olur. Bu değerler formülde yerine yazılırsa

$$
\int xe^{-x}\,dx
=x(-e^{-x})-\int(-e^{-x})\,dx
=-xe^{-x}-e^{-x}+C
$$

elde edilir. Bu sonuç $(e^{-x}y)$ ifadesine eşitlenir. Ardından her iki taraf $e^{-x}$ ile bölündüğünde $y=-x-1+Ce^x$ çözüm ailesine ulaşılır.

Çözüm, orijinal denklemde yerine konularak kontrol edilebilir. $y'=-1+Ce^x$ olduğundan

$$
y'-y=(-1+Ce^x)-(-x-1+Ce^x)=x
$$

ve denklem sağlanır. Bu doğrulamada sabit içeren terimlerin birbirini götürmesi, çözüm ailesinin tamamının denklemi sağladığını gösterir.

Karşılaştırma amacıyla verilen $y'=x-y$ denklemi $y'+y=x$ biçimine getirildiğinde integrasyon çarpanı $\mu=e^x$ olur. Çözüm, burada tamamlanan örnekteki aynı adımlar izlenerek bağımsız çalışma olarak sürdürülebilir.

:::

---

## Sık Yapılan Hatalar

1. Standart biçimi kurmadan $p$ okumak
2. Yalnız bazı terimleri çarpanla çarpmak
3. Çarpım türevini doğrulamamak
4. Katsayıların süreksizliğini geçmek
5. Başlangıç koşulunu aileden önce kullanmak

::: {.notes}

İlk hata, $y'$ teriminin katsayısı $1$ yapılmadan $p(x)$ ve $q(x)$ değerlerini okumaktır. İntegrasyon çarpanı belirlendikten sonra denklemin yalnız sol tarafı değil, bütün terimleri bu çarpanla çarpılmalıdır. Sol tarafın gerçekten $(\mu y)'$ olup olmadığı çarpım kuralıyla denetlenebilir.

Katsayıların tanımsız olduğu noktalar çözüm aralığını böler; bir formül bu noktaların iki yanında yazılabiliyor diye tek bir çözüm aralığı oluşmaz. Başlangıç koşulu da genel çözüm ailesi elde edildikten sonra sabiti seçmek için uygulanır.

:::

---

## Karar Soruları

1. Denklem standart biçimde mi?
2. $p(x)$ hangi aralıkta sürekli?
3. $\mu=e^{\int p(x)\,dx}$ nedir?
4. Sol taraf hangi çarpımın türevi?
5. Sonuç özgün denklemi sağlıyor mu?

::: {.notes}

Bu beş soru yöntemin bütün akışını özetler. İlk iki soru doğru katsayıları ve çözüm aralığını belirler. Üçüncü ve dördüncü sorular integrasyon çarpanının mekanizmasını kurar; son soru ise işlem hatalarını türev alıp yerine koyarak yakalar.

Başlangıç değer problemi varsa bulunan özel çözümün başlangıç koşulu da ayrıca denetlenmelidir. Böylece denklem, aralık ve başlangıç değeri aynı çözüm üzerinde doğrulanmış olur.

:::

---

## Kavramsal Köprü: Bernoulli Yapısı

Lineer denklem:

$$
y'+p(x)y=q(x).
$$

Sağ tarafta $y^n$ varsa uygun bir kuvvet değişimi denklemi yeniden lineer hâle getirebilir:

$$
y'+p(x)y=q(x)y^n.
$$

::: {.notes}

Bernoulli denklemi doğrudan lineer değildir; ancak doğrusal olmayan terim sabit bir $y^n$ kuvveti biçimindedir. Bu özel yapı, $v=y^{1-n}$ dönüşümünden sonra $v$ için birinci mertebeden lineer denklem üretir.

Dolayısıyla integrasyon çarpanı yöntemi yalnız doğrudan lineer görünen denklemlerde değil, uygun bir dönüşümle lineerleştirilen Bernoulli denklemlerinde de yeniden kullanılır.

:::

---
