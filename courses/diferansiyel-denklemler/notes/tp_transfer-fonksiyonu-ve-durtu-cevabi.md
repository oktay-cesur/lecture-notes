---
title: "Transfer Fonksiyonu ve Dürtü Cevabı"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-08-19
execute:
  echo: false
---

## Sistem ve Girdi

Sıfır başlangıç koşullarıyla:

$$
y''+3y'+2y=g(t),
\qquad y(0)=y'(0)=0
$$

$$
(s^2+3s+2)Y(s)=G(s)
$$

$$
Y(s)=\underbrace{\frac{1}{s^2+3s+2}}_{H(s)}G(s)
$$

::: {.notes}

Önceki notta sıfır başlangıç koşullu lineer zorlanmış bir denklemin çözümünü konvolüsyonla yazmıştık. Şimdi aynı yapıda denklem sistemin kuralını, $g(t)$ sisteme uygulanan girdiyi, $y(t)$ ise üretilen çıktıyı temsil ediyor. Başlangıç koşullarının sıfır olması, dönüşümde yalnız girdiden gelen katkıyı ayırmamızı sağlıyor.

Türevlerin dönüşümünü aldığımızda başlangıç değerlerinden gelen terimler sıfır olur. Böylece $s^2Y+3sY+2Y=G$ ve ardından $(s^2+3s+2)Y=G$ elde edilir. $Y$'yi yalnız bıraktığımızda denklemden gelen çarpan ile girdinin dönüşümü birbirinden ayrılır.

Bu not tek girdili, tek çıktılı ve sabit katsayılı lineer denklemler üzerinden ilerliyor. Amaç, transfer fonksiyonu ile dürtü cevabının aynı sistemi iki farklı alanda nasıl anlattığını kurmaktır.

:::

---

## Değişen Ne?

$$
H(s)=\left.\frac{Y(s)}{G(s)}\right|_{\text{sıfır başlangıç}}
$$

| Girdi | $G(s)$ | $H(s)$ |
|---|---|---|
| $1$ | $1/s$ | aynı |
| $t$ | $1/s^2$ | aynı |
| $\sin t$ | $1/(s^2+1)$ | aynı |

::: {.notes}

Denklem aynı kaldığı sürece $H(s)=1/(s^2+3s+2)$ değişmez. Girdi $1$, $t$ veya $\sin t$ seçildiğinde yalnız $G(s)$ değişir. Çıktının dönüşümü her seferinde aynı $H(s)$ ile yeni $G(s)$ çarpılarak bulunur.

Bu nedenle transfer fonksiyonunu sıfır başlangıç koşulları altında $H(s)=Y(s)/G(s)$ oranıyla tanımlarız. İncelediğimiz örnekte en yüksek türevin katsayısı $1$ ve sağ taraf doğrudan $g(t)$ olduğu için $H(s)=1/p(s)$ biçimi ortaya çıkar. Sağ tarafta girdinin türevleri veya ek katsayılar bulunsaydı payda yanında bir pay da oluşabilirdi; $H=1/p$ bütün lineer sistemler için genel bir formül değildir.

::: {.callout-warning}
## Başlangıç koşulu sınırı

$Y=HG$ ilişkisi burada sıfır başlangıç koşullarındaki girdi–çıktı ilişkisini anlatır. Başlangıç koşulları sıfırdan farklıysa çıktıya başlangıç durumundan gelen ek bir bileşen katılır.
:::

:::

---

## Dürtü: Çok Kısa Vuruş

$$
d_\varepsilon(t)=
\begin{cases}
1/\varepsilon, & 0\leq t<\varepsilon,\\
0, & \text{diğer}.
\end{cases}
$$

> Süre küçülürken toplam etki sabit.

::: {.notes}

Bir çekiç darbesini düşünelim. Kuvvet çok kısa süre uygulanır; buna rağmen darbenin toplam etkisi ölçülebilir. Bu fikri genişliği $\varepsilon$, yüksekliği $1/\varepsilon$ olan bir dikdörtgenle temsil ediyoruz.

$\varepsilon$ küçüldükçe vuruş daha kısa sürer ve yüksekliği artar. Yüksekliğin artışını gelişigüzel seçmiyoruz: genişlik ile yükseklik birbirinin tersi olduğu için dikdörtgenin alanı değişmez. Böylece vuruşun süresini sıfıra yaklaştırırken toplam etkisini koruyoruz.

Bu dikdörtgen henüz Dirac dürtüsü değildir; her $\varepsilon>0$ için sıradan, parçalı tanımlı bir fonksiyondur. Dirac dürtüsüne daralan dikdörtgenlerin limit fikri üzerinden ulaşacağız.

:::

---

## Alan Her Zaman Bir

| $\varepsilon$ | yükseklik | genişlik |
|---:|---:|---:|
| $1$ | $1$ | $1$ |
| $0.1$ | $10$ | $0.1$ |
| $0.01$ | $100$ | $0.01$ |

$$
\text{alan}=\frac{1}{\varepsilon}\cdot\varepsilon=1
$$

::: {.notes}

$\varepsilon=1$ iken dikdörtgenin yüksekliği ve genişliği $1$'dir. $\varepsilon=0.1$ olduğunda genişlik onda bire inerken yükseklik $10$ olur. $\varepsilon=0.01$ için genişlik yüzde bir, yükseklik $100$'dür.

Üç durumda da alan $1$ kalır. Alan burada vuruşun zaman boyunca biriken toplam etkisini temsil eder. Limit alınırken korumak istediğimiz büyüklük, herhangi bir andaki yükseklik değil bu toplam etkidir.

Bu sayısal dizi, daralma ile yükselmenin birlikte yürüdüğünü gösterir. Yalnız genişliği küçültseydik alan sıfıra gider ve limitte etkisiz bir girdi elde ederdik.

:::

---

## Dirac Dürtüsü

Dirac dürtüsü sıradan fonksiyon değildir.

Bu derste süzme özelliğiyle kullanılır:

$$
\boxed{
\int_0^\infty \delta(t-a)f(t)\,dt=f(a)
}
$$

::: {.notes}

Daralan birim alanlı dikdörtgenlerin limit fikriyle ulaştığımız nesneye Dirac dürtüsü diyor ve $\delta$ ile gösteriyoruz. Dirac dürtüsüne bir noktada yükseklik atamayız. Onu, integral içinde nasıl davrandığını belirleyen genelleştirilmiş bir nesne olarak kullanırız.

$\delta(t-a)$ ifadesi etkiyi $t=a$ anına taşır. Bir fonksiyonla çarpılıp integral alındığında, integral bütün $f$ eğrisini toplamak yerine yalnız $f(a)$ değerini seçer. Bu davranışa süzme özelliği denir.

Kesin tanım dağılım teorisinde verilir. Burada gereken sonuçlar süzme özelliği ile birazdan daralan vuruşların dönüşümünden çıkaracağımız $\mathcal L\{\delta(t)\}=1$ bağıntısıdır.

:::

---

## Vuruşu Basamaklarla Yazmak

$$
d_\varepsilon(t)
=\frac{1}{\varepsilon}
\bigl[u(t)-u(t-\varepsilon)\bigr]
$$

$$
\mathcal L\{d_\varepsilon\}
=\frac{1}{\varepsilon}
\left(\frac1s-\frac{e^{-\varepsilon s}}s\right)
$$

$$
=\frac{1-e^{-\varepsilon s}}{\varepsilon s}
$$

::: {.notes}

$u(t)$ birim basamak fonksiyonu $t=0$'da açılır, $u(t-\varepsilon)$ ise $t=\varepsilon$ anında açılır. Farkları yalnız $0\leq t<\varepsilon$ aralığında $1$ değerini alır. $1/\varepsilon$ çarpanı da dikdörtgene gereken yüksekliği verir.

Dönüşümde $\mathcal L\{u(t)\}=1/s$ ve $\mathcal L\{u(t-\varepsilon)\}=e^{-\varepsilon s}/s$ kurallarını kullanıyoruz. Ortak $1/\varepsilon$ çarpanını dışarı aldığımızda sonuç $(1-e^{-\varepsilon s})/(\varepsilon s)$ olur.

Şimdi elimizde her sonlu $\varepsilon$ için geçerli bir dönüşüm var. Sonraki adım, vuruşun süresi sıfıra yaklaşırken bu ifadenin hangi değere yaklaştığını bulmaktır.

:::

---

## Daralan Vuruşun Limiti

$$
\lim_{\varepsilon\to0}
\frac{1-e^{-\varepsilon s}}{\varepsilon s}
=1
$$

Dolayısıyla:

$$
\boxed{\mathcal L\{\delta(t)\}=1}
$$

::: {.notes}

Limitte pay ve payda birlikte sıfıra gider. $x=\varepsilon s$ yazarsak ifade $(1-e^{-x})/x$ biçimine gelir. $e^{-x}=1-x+O(x^2)$ açılımı, payın $x+O(x^2)$ olduğunu ve oranın $1$'e yaklaştığını gösterir.

Aynı sonuç L'Hôpital kuralıyla da bulunur: payın $\varepsilon$'a göre türevi $s e^{-\varepsilon s}$, paydanın türevi $s$'dir. Oran $e^{-\varepsilon s}$ olur ve $\varepsilon\to0$ iken $1$'e gider.

Dirac dürtüsünün dönüşümünü bağımsız bir tablo kuralı olarak ezberlemek zorunda değiliz. Sonuç, alanı bir kalan ve süresi sıfıra yaklaşan vuruşların dönüşümlerinden doğal olarak çıkar.

:::

---

## Süzme Nasıl Çalışıyor?

$$
\int_0^\infty
\delta(t-2)(t^2+1)\,dt
$$

$$
=2^2+1
$$

$$
\boxed{=5}
$$

::: {.notes}

Bu örnekte dürtü $a=2$ noktasına kaydırılmıştır. Süzme özelliğine göre $\delta(t-2)$, yanında bulunan $f(t)=t^2+1$ fonksiyonunun $t=2$ değerini seçer.

İntegralin sonucu bir alan hesabıyla veya antitürevle bulunmaz. Doğrudan $f(2)=2^2+1=5$ yazılır. Dürtünün integral içindeki rolü, hangi değerin seçileceğini belirlemektir.

Alt sınır $0$ olduğu için seçilen $a$ değerinin bu aralıkta bulunması gerekir. Burada $a=2$ koşulu sağlar; negatif bir kayma tek taraflı integralin dışında kalırdı.

:::

---

## Dürtü Cevabı

Girdi ideal vuruş olsun:

$$
g(t)=\delta(t),
\qquad G(s)=1
$$

$$
Y(s)=H(s)
$$

$$
\boxed{h(t)=\mathcal L^{-1}\{H(s)\}}
$$

::: {.notes}

Sisteme girdi olarak Dirac dürtüsü uygulandığında girdinin dönüşümü $1$ olur. Genel ilişki $Y=HG$ içinde $G=1$ yazınca çıktı dönüşümü doğrudan $H$'ye eşit çıkar. Bu çıktının zaman alanındaki karşılığına $h(t)$ adını veriyoruz.

Dürtü cevabı, sistemin tek bir ideal kısa vuruşa verdiği çıktıdır. $H(s)$ transfer fonksiyonu biliniyorsa ters Laplace dönüşümü alınarak $h(t)$ bulunur. Ters yönde $h(t)$ biliniyorsa Laplace dönüşümü $H(s)$'yi verir.

Aynı sistemin başka girdilere cevabı, bu dürtü cevabı kullanılarak konvolüsyonla kurulabilir. Böylece $h$, bütün sıfır başlangıç koşullu girdi–çıktı hesaplarında kullanılan zaman alanı karakterizasyonu olur.

:::

---

## Örnek: Sistemi Kurmak

$$
y''+2y'+5y=g(t)
$$

$$
y(0)=0,
\qquad y'(0)=0
$$

$$
(s^2+2s+5)Y(s)=G(s)
$$

::: {.notes}

Ana örnekte ikinci mertebeden bir sistem kullanıyoruz. Başlangıç koşulları sıfır olduğu için $y''$ teriminin dönüşümü $s^2Y$, $y'$ teriminin dönüşümü $sY$ olur. Başlangıç değerlerinden gelen ek terim kalmaz.

Dönüşümü terim terim aldığımızda $s^2Y+2sY+5Y=G$ elde edilir. Sol tarafta $Y$ ortak çarpanına alınınca $(s^2+2s+5)Y=G$ biçimi çıkar.

Bu aşama girdi seçilmeden tamamlanır. Denklem sabit kaldığı sürece birazdan bulacağımız $H$ ve $h$ de sabit kalacak; yalnız $G$ ve buna bağlı olarak $Y$ değişecektir.

:::

---

## Örnek: Dürtü Cevabını Bulmak

$$
H(s)=\frac{1}{s^2+2s+5}
=\frac{1}{(s+1)^2+4}
$$

Dürtü için $G(s)=1$:

$$
Y(s)=H(s)
$$

$$
\boxed{h(t)=\frac12e^{-t}\sin2t}
$$

::: {.notes}

$Y/G$ oranı, bu sistemin transfer fonksiyonunu verir. Paydayı tam kareye tamamladığımızda $s^2+2s+5=(s+1)^2+4$ olur. Bu biçim ötelemeli sinüs dönüşümünü doğrudan kullanmamızı sağlar.

Tablodaki $\mathcal L\{e^{-t}\sin2t\}=2/((s+1)^2+4)$ bağıntısında pay $2$'dir. Bizim payımız $1$ olduğu için zaman alanında $1/2$ çarpanı gerekir ve $h(t)=\tfrac12e^{-t}\sin2t$ elde edilir.

$\sin2t$ çarpanı çıktının salındığını, $e^{-t}$ çarpanı ise salınım genliğinin zamanla azaldığını gösterir. Bu kısa okuma örneğin biçimini anlamaya yeter.

:::

---

## Aynı Sistem, İki Alan

$$
\boxed{
\begin{aligned}
H(s)&:\ \text{Laplace alanı}\\
h(t)&:\ \text{zaman alanı}
\end{aligned}
}
$$

> İkisi aynı sistemi karakterize eder.

::: {.notes}

Transfer fonksiyonu sistemin Laplace alanındaki, dürtü cevabı ise zaman alanındaki karakterizasyonudur. Aralarındaki bağ Laplace dönüşümüdür: $H=\mathcal L\{h\}$ ve $h=\mathcal L^{-1}\{H\}$.

$H$ ile çalışmak diferansiyel denklemi cebirsel bir çarpım biçiminde okumamızı sağlar. $h$ ile çalışmak aynı ilişkiyi zaman alanında bir konvolüsyon integrali olarak kurar. Gösterim değişse de tanımlanan sistem aynıdır.

$H$ büyük harfle ve $s$ değişkeniyle, $h$ küçük harfle ve $t$ değişkeniyle yazılır. Bu notasyon ayrımı, dönüşüm alanındaki nesneyle zaman alanındaki fonksiyonu karıştırmayı önler.

:::

---

## Başka Bir Girdiye Cevap

$$
y'+y=g(t),
\qquad y(0)=0
$$

$$
H(s)=\frac1{s+1},
\qquad h(t)=e^{-t}
$$

$g(t)=1$ için:

$$
y(t)=\int_0^t e^{-\tau}\,d\tau=1-e^{-t}
$$

::: {.notes}

Dürtü cevabının başka bir girdiyi nasıl işlediğini en temiz biçimde birinci mertebeden sistemde görebiliriz. Sıfır başlangıç koşuluyla $(s+1)Y=G$ olur; buradan $H=1/(s+1)$ ve $h=e^{-t}$ çıkar.

Şimdi girdi olarak $t\geq0$ için sabit $g(t)=1$ seçiyoruz. Konvolüsyon $y=h*g$ olduğundan
$$
y(t)=\int_0^t h(\tau)g(t-\tau)\,d\tau
=\int_0^t e^{-\tau}\,d\tau
$$
yazılır. İntegral $1-e^{-t}$ sonucunu verir.

Bu hesapta sistemi yeniden çözmedik. Sisteme ait $h(t)$ fonksiyonunu koruduk ve yeni girdiyi onunla konvolüsyona soktuk. Başka bir girdi seçilseydi aynı $h$ kalır, yalnız integraldeki $g$ değişirdi.

:::

---

## Dürtü Cevabından Çıktıya

$$
y(t)=\int_0^t h(\tau)g(t-\tau)\,d\tau
$$

Eşdeğer biçim:

$$
y(t)=\int_0^t h(t-\tau)g(\tau)\,d\tau
$$

> $h$, girdinin çıktıya yansımasını belirler.

::: {.notes}

Konvolüsyonun mekanizması önceki notta kurulduğu için burada yalnız sistem yorumunu kullanıyoruz. $h$, geçmişte uygulanmış bir girdinin zaman geçtikçe çıktıya nasıl yansıdığını belirler. İntegral bütün girdi katkılarını $h$ üzerinden birleştirir.

İki integral konvolüsyonun değişme özelliği nedeniyle eşittir. İlk biçimde $h(\tau)$ ağırlığı, ikinci biçimde ise geçmişte $g(\tau)$ anında uygulanan girdinin bugüne kalan etkisi $h(t-\tau)$ görünür olur. Hesap için hangisi daha kolaysa o yazılabilir.

Bu ilişki sıfır başlangıç koşulları altında geçerlidir. Başlangıç durumu sıfır değilse $h*g$ girdiden gelen çıktı parçasını verir; tam çıktıda başlangıç koşullarından gelen ek bir parça da bulunur.

:::

---

## Sık Yapılan Hatalar

1. $\delta$'yı sıradan fonksiyon sanmak
2. $H$'yi girdiye bağlı sanmak
3. Sıfır koşulunu atlamak
4. $H(s)$ ile $h(t)$'yi karıştırmak

::: {.notes}

Dirac dürtüsü noktasal değerleri olan sıradan bir fonksiyon değildir. Bu notta onu daralan birim alanlı vuruşların limit fikri ve integral içindeki süzme özelliği üzerinden kullanıyoruz. $\delta$ için belirli bir noktada yükseklik hesaplamaya çalışmak doğru bir işlem değildir.

$H$ sistemin denklemine bağlıdır; girdi değiştiğinde $G$ değişir. $Y=HG$ ilişkisini başlangıç koşulları sıfırdan farklıyken doğrudan kullanmak da çıktının başlangıç durumundan gelen parçasını kaybettirir.

$H(s)$ Laplace alanındaki transfer fonksiyonu, $h(t)$ zaman alanındaki dürtü cevabıdır. Aynı sistemi tanımlarlar ama aynı matematiksel nesne değildirler. Aralarında $H=\mathcal L\{h\}$ dönüşüm ilişkisi bulunur.

:::

---

## İki Eşdeğer Karakterizasyon

$$
\boxed{
H(s)
\overset{\mathcal L^{-1}}{\longleftrightarrow}
h(t)
}
$$

$$
\boxed{
Y(s)=H(s)G(s)
\quad\Longleftrightarrow\quad
y(t)=h*g
}
$$

> Bir lineer sistemi sıfır başlangıç koşullarında $H(s)$ ile de $h(t)$ ile de karakterize edebiliriz.

::: {.notes}

Transfer fonksiyonunu bilirsek ters Laplace dönüşümüyle dürtü cevabını buluruz. Dürtü cevabını bilirsek de sıfır başlangıç koşullarında sistemin herhangi bir girdiye cevabını konvolüsyonla kurarız.

İlk kutu aynı sistemin iki karakterizasyonu arasındaki dönüşümü gösterir. İkinci kutu, Laplace alanındaki çarpımın zaman alanında konvolüsyona karşılık geldiğini ve iki karakterizasyonun aynı girdi–çıktı ilişkisini ürettiğini gösterir.

Sonuç olarak bir lineer sistemi sıfır başlangıç koşullarında $H(s)$ ile de $h(t)$ ile de karakterize edebiliriz. $H$ cebirsel dönüşüm alanı anlatımı, $h$ ise zaman alanı anlatımıdır.

:::

---

## Kaynak Notu

Ana kaynak: Nagle, Saff ve Snider.

::: {.notes}

Kaynak: Nagle, Saff ve Snider, *Fundamentals of Differential Equations*. Dürtünün daralan dikdörtgenlerle kurulması, $\mathcal L\{\delta\}=1$ sonucu, transfer fonksiyonu ile dürtü cevabı arasındaki ilişki ve konvolüsyonla genel girdiye geçiş bu kaynaktaki yaklaşımla uyumludur.

Dirac dürtüsünün kesin tanımı dağılım teorisine aittir. Bu not, kaynağın diferansiyel denklemler bağlamında kullandığı kapsamı izleyerek yalnız limit sezgisini, süzme özelliğini ve Laplace dönüşümünü kullanır.

:::

---
