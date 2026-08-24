---
title: "Cauchy–Euler Denklemi"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-08-22
execute:
  echo: false
---

## Katsayıdaki $x$ Kuvveti

$$
x^2y''-3xy'+3y=0
$$

$x^2$ ikinci türevle, $x$ birinci türevle geliyor.

Bu eşleşme rastlantı mı?

::: {.notes}

Değişken katsayılı bir denklemde $e^{rx}$ denemesi genel olarak ortak çarpan üretmez. Burada ise türev mertebesi kaçsa katsayıdaki $x$ kuvveti de o kadar: $y=x^m$ için $xy'=mx^m$ ve $x^2y''=m(m-1)x^m$ olur. Bütün terimler aynı $x^m$ çarpanını taşır.

Sabit katsayılı denklemlerde $e^{rx}$ nasıl türev altında biçimini koruyorsa burada $x^m$ aynı görevi görür. Bu eşleşmeyi taşıyan değişken katsayılı sınıfa Cauchy–Euler denklemi denir.

:::

---

## Tanım

$$
ax^2y''+bxy'+cy=g(x)
$$

- $a,b,c$ sabit
- Katsayıdaki $x$ kuvveti = türev mertebesi
- $x>0$ aralığında çalışırız

::: {.notes}

İkinci mertebe Cauchy–Euler denklemi bu biçimdedir. Belirleyici özellik katsayıların değişken olması değil, $x$ kuvvetlerinin türev mertebeleriyle eşleşmesidir. $x^2y''+y'=0$ denklemi bu sınıfa girmez, çünkü birinci türevin katsayısında $x$ yoktur.

$x=0$ noktası özel bir noktadır: standart biçime geçmek için $ax^2$'ye bölmek gerekir ve orada bölme tanımsız olur. Bu yüzden çözümler $x>0$ ya da $x<0$ aralıklarından birinde aranır. Ders boyunca $x>0$ alacağız; $x<0$ durumu $|x|$ yazılarak karşılanır.

Denklem $n$'inci mertebeye de genellenir: $x^ky^{(k)}$ terimlerinin sabit katsayılı toplamı. Yapı aynı kalır, yalnız aday denklemi daha yüksek dereceli olur.

:::

---

## Ölçek Yapısı

$x\mapsto\lambda x$ dönüşümü denklemin biçimini değiştirmez.

$$
x^ky^{(k)}
\quad\text{terimleri ölçekten bağımsız}
$$

Bu yüzden aday bir kuvvet fonksiyonu.

::: {.notes}

Cauchy–Euler denkleminin arkasında bir simetri var. $x$ yerine $\lambda x$ yazıldığında her $x^ky^{(k)}$ terimi aynı biçimde davranır; ölçek değişimi denklemi kendisine dönüştürür. Sabit katsayılı denklemlerdeki karşılığı öteleme simetrisidir: orada $x$ yerine $x+h$ yazmak denklemi değiştirmez.

Simetri, aday fonksiyonu belirler. Ötelemeye kapalı fonksiyonlar üstellerdir; ölçeklemeye kapalı fonksiyonlar ise kuvvetlerdir, çünkü $(\lambda x)^m=\lambda^mx^m$ olur ve fonksiyon kendi sabit katına gider.

Bu bakış, denklemi tanımanın da en hızlı yoludur. Katsayılara tek tek bakmak yerine "her terimde $x$ kuvveti türev mertebesine eşit mi" diye sorulur. Eşitse aday $x^m$'dir.

:::

---

## Aday Denklemi

$y=x^m$ yerine konunca:

$$
am(m-1)+bm+c=0
$$

$$
am^2+(b-a)m+c=0
$$

::: {.notes}

$y=x^m$ adayını denkleme yerleştirelim. $ax^2y''=am(m-1)x^m$, $bxy'=bmx^m$ ve $cy=cx^m$ olur. Ortak $x^m$ çarpanı $x>0$ için sıfırdan farklı olduğundan sadeleşir.

Geriye $am(m-1)+bm+c=0$ kalır. Düzenlenince $am^2+(b-a)m+c=0$ elde edilir. Bu, karakteristik denklemin Cauchy–Euler karşılığıdır ve bilinmeyeni $m$'dir.

Katsayıdaki $b-a$ farkına dikkat edilmesi gerekir. Denklemin katsayıları doğrudan aday denklemine taşınmaz; $m(m-1)$ açılırken $-am$ terimi doğar ve birinci dereceli katsayıyı değiştirir. Bu adımı atlayıp $am^2+bm+c=0$ yazmak, konudaki en yaygın hatadır.

:::

---

## Soru: Ayrık Reel Kökler

$$
x^2y''-3xy'+3y=0,
\qquad x>0
$$

$$
a=1,\quad b=-3,\quad c=3
$$

::: {.notes}

Aday denklemini kuralım: $m(m-1)-3m+3=0$, yani $m^2-4m+3=0$. Aynı sonuç formülle de çıkar: $a=1$, $b-a=-4$, $c=3$.

Çarpanlarına ayrılınca $(m-1)(m-3)=0$ olur ve kökler $m=1$ ile $m=3$'tür. Her kök bir çözüm verir: $y_1=x$ ve $y_2=x^3$.

İki çözümün lineer bağımsız olduğunu görmek için oranlarına bakmak yeterlidir: $y_2/y_1=x^2$ sabit değildir. Wronskian hesabı da aynı sonucu verir. Genel çözüm $y=c_1x+c_2x^3$'tür.

Bu çözüm çifti daha önce özel çözüm yöntem seçme haritasında $x^2y''-3xy'+3y=x^2$ denklemi için kullanılmıştı; homojen çözümlerin nereden geldiği şimdi tam olarak görülüyor.

:::

---

## Çözüm ve Kök Tipleri

| Kök | Çözümler |
|---|---|
| $m_1\neq m_2$ reel | $x^{m_1}$, $x^{m_2}$ |
| $m$ çift kök | $x^m$, $x^m\ln x$ |
| $\alpha\pm i\beta$ | $x^\alpha\cos(\beta\ln x)$, $x^\alpha\sin(\beta\ln x)$ |

::: {.notes}

Üç kök tipi, sabit katsayılı denklemlerdeki üç tipin birebir karşılığıdır. Ayrık reel kökler iki kuvvet fonksiyonu verir.

Çift kökte ikinci çözüm $x^m$ ile $\ln x$'in çarpımıdır. Sabit katsayılı durumda ikinci çözüm $xe^{rx}$ oluyordu; buradaki $\ln x$ çarpanı onun ölçek dünyasındaki karşılığıdır. Gerekçe mertebe indirmeyle görülebilir: $y_2=v(x)x^m$ dönüşümü çift kök durumunda $v'=1/x$ verir ve integral $\ln x$ üretir.

Kompleks kökte $x^{\alpha+i\beta}$ ifadesini reel biçime çevirmek gerekir. $x^{i\beta}=e^{i\beta\ln x}=\cos(\beta\ln x)+i\sin(\beta\ln x)$ olduğundan salınım $x$'e göre değil $\ln x$'e göre gerçekleşir. Çözüm eğrisi $x$ büyüdükçe giderek yavaşlayan bir salınım gösterir.

Bu ders kapsamında ayrık reel kök durumu asıl çalışma alanıdır; diğer iki satır tanınmak ve gerektiğinde kullanılmak üzere burada bulunur.

:::

---

## Soru: Çift Kök

$$
x^2y''-3xy'+4y=0
$$

Aday denklemi:

$$
m^2-4m+4=0
$$

::: {.notes}

Katsayılar $a=1$, $b=-3$, $c=4$'tür. Aday denklemi $m(m-1)-3m+4=m^2-4m+4=0$ olur.

Bu ifade $(m-2)^2$ biçiminde çarpanlarına ayrılır; $m=2$ çift köktür. Tek bir çözüm elde ediyoruz: $y_1=x^2$. İkinci mertebe bir denklemin genel çözümü için iki bağımsız çözüm gerektiğinden bir eksiğimiz var.

Sabit katsayılı denklemlerde aynı tıkanma yaşanmış ve mertebe indirmeyle aşılmıştı. Burada da aynı araç çalışır: $y_2=v(x)x^2$ konur, denkleme yerleştirilir ve $v$ için daha basit bir denklem elde edilir.

:::

---

## Çözüm: İkinci Çözümde $\ln x$

$$
m=2 \;\text{çift kök}
\quad\Rightarrow\quad
y_1=x^2,\;\; y_2=x^2\ln x
$$

$$
\boxed{y=c_1x^2+c_2x^2\ln x}
$$

::: {.notes}

Mertebe indirme hesabı $v''x+v'=0$ denklemine götürür; bu denklem $v'=1/x$ ve $v=\ln x$ verir. İkinci çözüm $y_2=x^2\ln x$'tir.

Doğrulayalım. $y_2=x^2\ln x$ için $y_2'=2x\ln x+x$ ve $y_2''=2\ln x+3$ olur. Denkleme koyalım: $x^2(2\ln x+3)-3x(2x\ln x+x)+4x^2\ln x$. Terimleri toplayalım: $\ln x$ katsayısı $2x^2-6x^2+4x^2=0$, $\ln x$ içermeyen kısım $3x^2-3x^2=0$ ✓.

Genel çözüm $y=c_1x^2+c_2x^2\ln x$'tir. Bu formül $x>0$ aralığında elde edildi; denklemin baş katsayısı $x=0$'da sıfır olduğu için çözümü o noktadan geçirip geçiremeyeceğimiz ayrı bir sorudur. Burada çözüm aralığını $x>0$ ile sınırlı tutuyoruz.

:::

---

## Sabit Katsayılıya Dönüştürme

$$
x=e^{t}
\quad\Longleftrightarrow\quad
t=\ln x
$$

Cauchy–Euler denklemi sabit katsayılı hâle gelir.

$$
x^m \;\longleftrightarrow\; e^{mt}
$$

::: {.notes}

$x=e^t$ dönüşümü ölçek simetrisini öteleme simetrisine çevirir. Zincir kuralıyla $x\dfrac{dy}{dx}=\dfrac{dy}{dt}$ ve $x^2\dfrac{d^2y}{dx^2}=\dfrac{d^2y}{dt^2}-\dfrac{dy}{dt}$ elde edilir.

Yerine konduğunda denklem $t$ değişkeninde sabit katsayılı olur. Örneğin $x^2y''-3xy'+3y=0$ denklemi $\ddot y-4\dot y+3y=0$ hâline gelir; karakteristik denklemi $r^2-4r+3=0$'dır ve kökleri $1$ ile $3$'tür — aday denkleminin kökleriyle aynı.

Dönüşüm iki şeyi açıklıyor. Birincisi, kök sözlüğünün neden birebir örtüştüğü: $e^{rt}$ geri çevrildiğinde $x^r$ olur. İkincisi, çift kökte $\ln x$'in nereden geldiği: $te^{rt}$ terimi geri çevrildiğinde $x^r\ln x$ verir.

Pratikte iki yol da kullanılır. Doğrudan $y=x^m$ denemesi daha kısadır; dönüşüm ise homojen olmayan denklemlerde belirsiz katsayılar yöntemini kullanılabilir kılar.

:::

---

## Homojen Olmayan Durum

$$
x^2y''-3xy'+3y=x^2
$$

- $y_h$: aday denkleminden
- $y_p$: sabitlerin değişimi ya da $x=e^t$ dönüşümü

::: {.notes}

Homojen olmayan Cauchy–Euler denkleminde de genel çözüm $y=y_h+y_p$ yapısındadır. Homojen kısım aday denkleminden gelir; örnekte $y_h=c_1x+c_2x^3$.

Özel çözüm için iki yol var. Sabitlerin değişimi doğrudan uygulanır, ama önce denklem standart biçime — $y''$ katsayısı $1$ olacak biçimde — getirilmelidir: $y''-\dfrac{3}{x}y'+\dfrac{3}{x^2}y=1$. Yöntemin formülündeki $g$ bu biçimdeki sağ taraftır, ham denklemdeki $x^2$ değil.

İkinci yol $x=e^t$ dönüşümüdür. Denklem $\ddot y-4\dot y+3y=e^{2t}$ olur, belirsiz katsayılarla $y_p=-e^{2t}$ bulunur ve geri çevrilerek $y_p=-x^2$ elde edilir. Doğrulayalım: $y_p''=-2$, $y_p'=-2x$ ve $x^2(-2)-3x(-2x)+3(-x^2)=-2x^2+6x^2-3x^2=x^2$ ✓.

Genel çözüm $y=c_1x+c_2x^3-x^2$'dir.

:::

---

## Sık Yapılan Hatalar

1. Aday denkleminde $m(m-1)$ açılımını atlamak
2. $x^ky^{(k)}$ eşleşmesini kontrol etmeden yöntemi uygulamak
3. Çözüm aralığını belirtmemek
4. Sabitlerin değişiminde standart biçime geçmemek
5. Çift kökte ikinci çözümü $x^{m+1}$ sanmak

::: {.notes}

Birinci hata en sık olanıdır. $ax^2y''$ teriminden gelen katkı $am(m-1)$'dir, $am^2$ değil. Açılım atlanırsa aday denkleminin birinci dereceli katsayısı yanlış çıkar ve kökler tutmaz.

İkinci hata denklemi yanlış sınıflandırmaktır. $x^2y''+xy'+y=0$ Cauchy–Euler'dir, ama $x^2y''+y'+y=0$ değildir; ikincisinde birinci türevin katsayısında $x$ bulunmuyor. Yöntem yine de uygulanırsa ortak çarpan çıkmaz ve $x$'li terimler kalır.

Üçüncü hata $x=0$ noktasını gözden kaçırmaktır. Çözüm $x>0$ ya da $x<0$ aralığında geçerlidir; $\ln x$ ve $x^{1/2}$ gibi ifadeler zaten negatif $x$ için tanımsızdır.

Beşinci hata sabit katsayılı durumdan yanlış aktarma yapmaktır. Orada ikinci çözüm $xe^{rx}$ olduğu için buraya $x\cdot x^m=x^{m+1}$ diye taşınır. Doğrusu $x^m\ln x$'tir; $x=e^t$ dönüşümü bunun neden böyle olduğunu gösterir.

:::

---

## Karar Soruları

Hangileri Cauchy–Euler?

1. $x^2y''+5xy'+4y=0$
2. $x^2y''+5y'+4y=0$
3. $x^3y'''+2x^2y''-xy'=0$

::: {.notes}

Birincisi Cauchy–Euler'dir. Aday denklemi $m(m-1)+5m+4=m^2+4m+4=(m+2)^2$ olur; $m=-2$ çift kök ve genel çözüm $y=c_1x^{-2}+c_2x^{-2}\ln x$'tir.

İkincisi değildir. Birinci türevin katsayısı $5$'tir, $5x$ değil. $y=x^m$ denendiğinde $5mx^{m-1}$ terimi diğerleriyle aynı $x$ kuvvetine gelmez ve ortak çarpan oluşmaz. Bu denklem için elemanter bir kapalı çözüm yöntemi yoktur.

Üçüncüsü Cauchy–Euler'dir ve mertebesi üçtür. Her terimde $x$ kuvveti türev mertebesine eşit. Aday denklemi $m(m-1)(m-2)+2m(m-1)-m=0$ olur; düzenlenince $m(m^2-m-1)=0$ çıkar. Kökler $m=0$ ve $m=\dfrac{1\pm\sqrt5}{2}$'dir.

Sınıflandırma sorularında kök bulmaya girmeden önce yalnız yapı kontrol edilir; yöntem seçimi hesaptan önce gelir.

:::

---

## Sonraki Adım: Başlangıç Koşulunu Çözümün İçine Almak

Buraya kadar başlangıç koşulları **en sonda** uygulandı.

$$
y(0)=2,\;y'(0)=-1
$$

Koşullar hesabın başında devreye girse ne olurdu?

::: {.notes}

Şu ana kadarki yöntemlerde önce genel çözüm kuruldu, ardından başlangıç koşullarıyla sabitler belirlendi. Sağ taraf parçalı olduğunda denklem ayrıca parçalara ayrıldı ve geçiş koşulları elle eşleştirildi.

Laplace dönüşümü denklemi $t$ değişkeninden $s$ değişkenine taşır, türevleri cebirsel ifadelere çevirir ve başlangıç koşullarını bu dönüşümün içine alır. Böylece başlangıç değer problemi, $Y(s)$ için cebirsel bir denkleme dönüşür.

:::

---

## Kaynak Notu

Ana kaynak: Nagle, Saff ve Snider.

::: {.notes}

Yöntem burada Nagle, Saff ve Snider'ın klasik yaklaşımıyla kurulmuştur: $y=x^m$ denemesi, aday denklemi ve kök tiplerine göre çözüm sözlüğü. Çalışma ağırlığı ayrık reel kök durumuna verilmiştir; kompleks ve çift kök durumları tanınacak düzeyde ele alınmıştır. Denklemin ölçek yapısı ve $x=e^t$ dönüşümüyle sabit katsayılı duruma bağlanışı bu ağırlığı destekleyecek ölçüde işlenmiştir.

**Kaynak:** Nagle, Saff & Snider, *Fundamentals of Differential Equations*.

:::

---
