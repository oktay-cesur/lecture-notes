---
title: "n'inci Mertebe Lineer Denklemler: Standart Biçim ve Varlık-Teklik"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-07-26
execute:
  echo: false
---

## Standart Biçim

$n$'inci mertebeden lineer bir diferansiyel denklem şu biçimde yazılır:

$$
y^{(n)}+p_{n-1}(x)y^{(n-1)}+\cdots+p_1(x)y'+p_0(x)y=g(x).
$$

::: {.notes}

Birinci mertebeden lineer denklemlerde $y'+p(x)y=q(x)$ standart biçimini kullanmış ve $y'$ katsayısını $1$ yapmıştık. Aynı düzenleme, mertebesi ne olursa olsun her lineer denklem için geçerlidir: en yüksek türevin katsayısı $1$ yapılır, ardından bir alt mertebeye inildikçe katsayılar $p_{n-1}(x),\ldots,p_0(x)$ olarak adlandırılır; sağ taraf ise $g(x)$'tir. Denklemin lineer olması, bilinmeyen fonksiyon $y$ ve türevlerinin yalnızca birinci kuvvetten görünmesi, aralarında çarpım veya iç içe fonksiyon bulunmaması anlamına gelir. $p_i(x)$ ve $g(x)$ yalnızca bağımsız değişken $x$'e bağlı olabilir.

:::

---

## Homojen ve Homojen Olmayan Ayrımı

$$
g(x)\equiv0 \quad\Longrightarrow\quad \text{homojen},
\qquad
g(x)\not\equiv0 \quad\Longrightarrow\quad \text{homojen olmayan}.
$$

Homojen denklemin çözümleri için **süperpozisyon ilkesi** geçerlidir:

$$
y_1,y_2 \text{ homojen çözümse} \quad\Longrightarrow\quad c_1y_1+c_2y_2 \text{ de homojen çözümdür.}
$$

::: {.notes}

Sağ taraf özdeş olarak sıfırsa ($g\equiv0$) denklem **homojen**, aksi hâlde **homojen olmayan** olarak adlandırılır. Homojen denklemlerin en önemli özelliği süperpozisyon ilkesidir: eğer $y_1$ ve $y_2$ aynı homojen denklemin çözümleriyse, bu iki çözümün herhangi bir lineer birleşimi $c_1y_1+c_2y_2$ de aynı denklemin bir çözümüdür. Bu özellik, lineer olmayan denklemlerde genellikle geçerli değildir — iki çözümün toplamı ya da katı, lineer olmayan bir denklemi sağlamak zorunda değildir. Süperpozisyon, lineerliğin doğrudan bir sonucudur.

:::

---

## Süperpozisyonun Kaynağı

$L[y]=y^{(n)}+p_{n-1}(x)y^{(n-1)}+\cdots+p_0(x)y$ ifadesini bir **lineer operatör** olarak düşünelim:

$$
L[c_1y_1+c_2y_2]=c_1L[y_1]+c_2L[y_2].
$$

$y_1,y_2$ homojen çözümse $L[y_1]=L[y_2]=0$, dolayısıyla:

$$
L[c_1y_1+c_2y_2]=c_1\cdot0+c_2\cdot0=0.
$$

::: {.notes}

Süperpozisyonun neden çalıştığını görmek için sol tarafı bir operatör olarak yazmak faydalıdır: $L[y]=y^{(n)}+p_{n-1}(x)y^{(n-1)}+\cdots+p_0(x)y$. Türev alma işlemi lineer olduğundan ($ (c_1y_1+c_2y_2)'=c_1y_1'+c_2y_2'$ gibi), $L$ operatörü de lineerdir: $L[c_1y_1+c_2y_2]=c_1L[y_1]+c_2L[y_2]$. $y_1$ ve $y_2$ homojen denklemin çözümleriyse $L[y_1]=0$ ve $L[y_2]=0$'dır; bu iki sıfırın $c_1,c_2$ katsayılarıyla toplamı yine sıfırdır. Dolayısıyla $c_1y_1+c_2y_2$ de $L[y]=0$'ı sağlar — süperpozisyon ilkesi, türevin lineerliğinin doğrudan bir sonucudur.

:::

---

## Varlık-Teklik Teoremi

$p_0(x),\ldots,p_{n-1}(x)$ ve $g(x)$ bir $I$ aralığında sürekliyse, ve $x_0\in I$ ise, başlangıç koşulları

$$
y(x_0)=y_0,\ y'(x_0)=y_1,\ \ldots,\ y^{(n-1)}(x_0)=y_{n-1}
$$

verildiğinde denklemi sağlayan **tek bir** $y(x)$ çözümü vardır.

::: {.notes}

Bu teorem, birinci mertebede tek bir başlangıç koşulunun ($y(x_0)=y_0$) tek bir çözümü belirlediği gözleminin genellemesidir. $n$'inci mertebede tekliği sağlamak için $n$ tane başlangıç koşulu gerekir: $y$'nin kendisi ve ilk $n-1$ türevinin $x_0$ noktasındaki değerleri. Bu koşulların hepsi verildiğinde ve katsayı fonksiyonları ($p_0,\ldots,p_{n-1}$) ile sağ taraf ($g$) bir aralıkta sürekliyse, o aralıkta denklemi ve başlangıç koşullarını sağlayan **tam olarak bir** çözüm vardır — ne daha fazla ne daha az. Süreklilik koşulu gözden kaçırılmamalıdır: katsayı fonksiyonlarından biri bir noktada süreksizse, teorem o noktayı içeren bir aralıkta garanti vermez.

:::

---

## Somutlaştırıcı Örnek

$$
y''+y=0.
$$

$y_1=\cos x$ ve $y_2=\sin x$ bu denklemin çözümleridir (doğrudan yerine yazarak doğrulanabilir).

Süperpozisyon ile:

$$
y=c_1\cos x+c_2\sin x
$$

de aynı denklemin bir çözümüdür.

::: {.notes}

$y''+y=0$ denklemi ikinci mertebe, homojen ve sabit katsayılıdır. Bu denklem sınıfının sistematik çözümü sabit katsayılı denklemler konusunda ele alınacaktır; buradaki amaç süperpozisyonu somutlaştırmaktır. $y_1=\cos x$ için $y_1''=-\cos x$, dolayısıyla $y_1''+y_1=-\cos x+\cos x=0$ olur. Aynı şekilde $y_2=\sin x$ için $y_2''=-\sin x$ ve $y_2''+y_2=0$ elde edilir. Süperpozisyon ilkesi gereği $y=c_1\cos x+c_2\sin x$ de denklemi sağlar; yerine yazınca bütün terimler birbirini götürür.

:::

---

## Sık Yapılan Hata

Varlık-teklik teoremini yalnızca "bir çözüm vardır" olarak okuyup süreklilik koşulunu kontrol etmemek.

$$
x^2y''-2xy'+2y=0,\qquad y(0)=1,\ y'(0)=0
$$

denkleminde $x_0=0$ noktasında standart biçime getirilince $p_1(x)=-2/x$ **süreksizdir** — teorem bu noktada teklik garantisi vermez.

::: {.notes}

Yaygın bir hata, varlık-teklik teoreminin koşullarını (katsayı fonksiyonlarının sürekliliği) kontrol etmeden teoremi her başlangıç değer problemine uygulanabilir saymaktır. Örneğin $x^2y''-2xy'+2y=0$ denklemi $y''$ katsayısını $1$ yapmak için $x^2$'ye bölünürse $y''-\frac2xy'+\frac{2}{x^2}y=0$ elde edilir; burada $p_1(x)=-2/x$ ve $p_0(x)=2/x^2$'dir. Bu katsayılar $x=0$'da tanımsızdır — süreksizdir. Dolayısıyla $x_0=0$ noktasında verilen bir başlangıç değer problemi için teorem, $0$'ı içeren bir aralıkta tek çözüm garantisi **vermez**. Teoremi uygulamadan önce, başlangıç noktasının katsayı fonksiyonlarının süreklilik bölgesinde olup olmadığı her zaman kontrol edilmelidir.

:::

---

## Teoremi Uygulama Kontrolü

Bir başlangıç değer probleminde garanti vermeden önce:

1. En yüksek türevin katsayısını $1$ yapın.
2. $x_0$'ı içeren bir $I$ aralığı seçin.
3. Bütün $p_i$ katsayılarının ve $g$'nin $I$ üzerinde sürekli olduğunu doğrulayın.
4. $y,y',\ldots,y^{(n-1)}$ için tam $n$ başlangıç değeri bulunduğunu kontrol edin.

::: {.notes}

Varlık–teklik teoremi yalnız denklemin görünüşüne bakılarak uygulanmaz. Standart biçime geçerken en yüksek türevin katsayısına bölmek gerekir; bu katsayının sıfır olduğu noktalar seçilecek aralığın dışında kalabilir. Ardından bütün normalize edilmiş katsayıların ve sağ tarafın aynı $I$ aralığında sürekli olması kontrol edilir.

Teorem koşulları sağlandığında verilen $n$ başlangıç değeri $I$ üzerinde tek bir çözüm belirler. Koşullardan biri sağlanmıyorsa bundan “çözüm yoktur” veya “çözüm tek değildir” sonucu çıkmaz; yalnızca bu teoremin garanti vermediği söylenebilir. Böyle bir durumda problem ayrıca incelenmelidir.

:::

---

## Pekiştirme

$$
y''-4y=0
$$

denklemi için $y_1=e^{2x}$ ve $y_2=e^{-2x}$'in çözüm olduğunu doğrulayınız ve süperpozisyonla genel bir çözüm yazınız.

::: {.notes}

Bu doğrulama, yukarıdaki $y''+y=0$ örneğiyle aynı mekanizmayı izler: her bir fonksiyon denklemde yerine yazılarak sağladığı kontrol edilir, ardından süperpozisyon ilkesiyle iki çözümün lineer birleşimi genel bir çözüm adayı olarak yazılır.

:::

---

## Sonraki Adım: Bağımsız Çözümler

Süperpozisyon çok sayıda çözüm üretir; fakat genel çözüm için aynı bilgiyi tekrarlamayan çözümler gerekir. Sonraki sorular:

- Çözümlerin lineer bağımsızlığı nasıl sınanır?
- Wronskian neden bir noktada yeterlidir?
- $n$ bağımsız çözüm bütün homojen çözümleri nasıl üretir?

::: {.notes}

Süperpozisyon ilkesi, homojen çözümlerin lineer birleşimlerinin yine çözüm olduğunu gösterir. Ancak seçilen çözümlerden biri diğerlerinin lineer birleşimiyse yeni bir serbestlik eklemez. Bu nedenle genel çözümü kurmadan önce çözüm ailesindeki bağımsız yönleri ayırt etmek gerekir.

Lineer bağımsızlık tanımı bu ayrımı kesinleştirir; Wronskian determinantı ise aynı homojen denklemin çözümleri için uygulanabilir bir test sağlar. Bu kavramlar bir sonraki notta temel çözüm kümesine hazırlık olarak ele alınacaktır.

:::

---
