---
title: "Laplace Dönüşümü: Tanım ve Temel Dönüşümler"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-08-22
execute:
  echo: false
---

## Fonksiyonu Başka Bir Uzaya Taşımak

$$
y''+3y'+2y=g(t),
\qquad
y(0)=1,\; y'(0)=0
$$

Türev almak yerine, denklemi **cebirsel** hâle getirebilir miyiz?

::: {.notes}

Buraya kadarki yöntemlerde diferansiyel denklem doğrudan çözüldü ve başlangıç koşulları genel çözüm bulunduktan sonra uygulandı. Laplace dönüşümü bilinmeyen fonksiyonu $t$ değişkeninden $s$ değişkenine taşır. Türevler bu yeni gösterimde cebirsel terimlere dönüşür; denklem $Y(s)$ için çözülür ve sonuç ters dönüşümle yeniden $y(t)$ biçimine getirilir.

Başlangıç koşulları türevlerin dönüşüm formüllerinin içinde yer alır. Parçalı veya sıçramalı girdiler de aynı dönüşüm hattında işlenebilir. Bu notta dönüşümün tanımını ve temel fonksiyonların dönüşümlerini kuracağız; türev kuralları ve başlangıç değer problemleri sonraki iki notta tamamlanacak.

Bağımsız değişkeni bundan sonra $t$ ile göstereceğiz. Tek taraflı Laplace dönüşümü $t\ge0$ bölgesindeki, çoğunlukla zamana bağlı fonksiyonlarla çalışır.

:::

---

## Daha Uygun Bir Gösterim

| Problem | Yeni gösterim |
|---|---|
| Çarpma | Logaritma |
| Çember ve açı | Kutupsal koordinatlar |
| İki doğrunun kesişimi | Denklem sistemi |

$$
y(t)\longrightarrow Y(s)
\longrightarrow \text{cebir}
\longrightarrow y(t)
$$

::: {.notes}

Aynı problem farklı bir gösterimde daha kolay çözülebilir. Logaritma çarpmayı toplamaya çevirir. Kutupsal koordinatlar çemberleri $r=\text{sabit}$ biçiminde ifade eder. İki doğrunun kesişimini geometrik olarak aramak yerine iki bilinmeyenli denklem sistemi çözebiliriz. Her örnekte nesne değişmez; onu taşıyan gösterim değişir.

Laplace dönüşümü de diferansiyel denklemi daha kolay işlem yapılan bir gösterime taşır. $t$ uzayındaki türev problemi $s$ uzayında cebirsel bir probleme dönüşür. Cebirsel çözüm tamamlandığında ters dönüşümle özgün değişkene döneriz. Dönüşümün değerini anlamak için bütün hattı birlikte tutmak gerekir: dönüştür, cebirsel denklemi çöz, geri dön ve başlangıç koşullarını doğrula.

:::

---

## Tanım

$$
\mathcal{L}\{f\}(s)=F(s)=\int_0^{\infty} e^{-st}f(t)\,dt
$$

- $t$: özgün değişken
- $s$: dönüşüm değişkeni
- İntegral yakınsıyorsa dönüşüm tanımlıdır.

::: {.notes}

Laplace dönüşümü, $t$'nin fonksiyonu olan $f(t)$'yi alıp $s$'nin fonksiyonu olan $F(s)$'ye dönüştürür. Küçük harf özgün fonksiyonu, büyük harf onun dönüşümünü gösterir. $s$ burada bir parametredir; her uygun $s$ değeri için has olmayan integral hesaplanır ve sonuçların tamamı $F(s)$ fonksiyonunu oluşturur.

$e^{-st}$ çarpanı, $t$ büyüdükçe geçmişteki değerleri farklı ağırlıklarla toplar. İntegralin yakınsaması bu bastırmanın $f(t)$'nin büyümesini yenebilmesine bağlıdır. Türevlerin cebirsel ifadelere nasıl dönüştüğü bir sonraki notta görünür hâle gelecek; burada önce dönüşümün kendisini hesaplamayı öğreniyoruz.

:::

---

## İlk Dönüşüm: $f(t)=1$

$$
\mathcal{L}\{1\}=\int_0^{\infty}e^{-st}\,dt
=\left[-\frac{e^{-st}}{s}\right]_0^{\infty}
$$

$$
\boxed{\mathcal{L}\{1\}=\frac1s},
\qquad s>0
$$

::: {.notes}

En sade fonksiyonla başlayalım. $f(t)=1$ için integral $\int_0^{\infty}e^{-st}dt$ olur. İlkel fonksiyon $-e^{-st}/s$'dir.

Üst sınırı limitle alalım: $s>0$ ise $e^{-sb}\to0$ olur ve üst uçtan katkı sıfırdır. Alt uçta $t=0$ için $-1/s$ çıkar. İkisinin farkı $1/s$'tir.

$s\le0$ durumunda integral ıraksar: $s=0$ için integrand sabit $1$'dir ve alan sonsuza gider; $s<0$ için integrand büyür. Bu yüzden dönüşümle birlikte geçerlilik aralığı da yazılır. Aralık, ters dönüşüm alınırken çoğu zaman kullanılmaz, ama dönüşümün nerede tanımlı olduğunu bilmek yakınsama sorularında gerekir.

Sonucun biçimi dikkat çekicidir: sınırsız bir aralıkta sabit kalan bir fonksiyon, dönüşümde $s\to\infty$ giderken sıfıra inen bir fonksiyona gitti. Bu, bütün Laplace dönüşümlerinin ortak davranışıdır.

:::

---

## Üstel Fonksiyon

$$
\mathcal{L}\{e^{at}\}=\int_0^{\infty}e^{-(s-a)t}\,dt
$$

$$
\boxed{\mathcal{L}\{e^{at}\}=\frac{1}{s-a}},
\qquad s>a
$$

::: {.notes}

$f(t)=e^{at}$ için integrand $e^{-st}e^{at}=e^{-(s-a)t}$ olur. Bu, bir önceki hesabın $s$ yerine $s-a$ yazılmış hâlidir.

Sonuç doğrudan okunur: $s-a>0$ koşuluyla integral $\dfrac{1}{s-a}$ değerine yakınsar. Geçerlilik aralığı $s>a$'dır; $a$ büyüdükçe fonksiyon daha hızlı büyür ve onu bastırmak için daha büyük $s$ gerekir.

$a=0$ alındığında $\mathcal{L}\{1\}=1/s$ sonucuna geri dönülür — özel durum genel formülün içinde duruyor.

Dönüşümün $s=a$ noktasında tanımsız olması bir kusur değil, taşınan bilginin kendisidir. Payda sıfırlarının nerede olduğu, özgün fonksiyonun hangi üstel hızda büyüdüğünü söyler. Ters dönüşüm alırken bu okuma tersine çalıştırılacak: paydadaki $s-a$ çarpanını gören $e^{at}$ yazacak.

:::

---

## Lineerlik

$$
\mathcal{L}\{\alpha f+\beta g\}
=\alpha\mathcal{L}\{f\}+\beta\mathcal{L}\{g\}
$$

$$
\int_0^\infty e^{-st}(\alpha f+\beta g)\,dt
=\alpha F(s)+\beta G(s)
$$

$$
\mathcal{L}\{3+2e^{5t}\}=\frac3s+\frac{2}{s-5}
$$

::: {.notes}

Laplace dönüşümü bir integral olduğu için sabitler integralin dışına çıkar ve toplam iki integrale ayrılır. Böylece $\mathcal{L}\{\alpha f+\beta g\}=\alpha F+\beta G$ eşitliği doğrudan tanımdan elde edilir. Diferansiyel denklemin her terimini ayrı dönüştürebilmemizi sağlayan özellik budur.

Lineerlik, noktasal çarpıma uygulanmaz. Örneğin $\mathcal{L}\{f^2\}$ genel olarak $F(s)^2$ değildir. Dönüşüm tarafındaki çarpımın özgün taraftaki karşılığı konvolüsyondur ve daha sonra ele alınacaktır.

Geçerlilik aralıkları birleştirilirken en kısıtlayıcı olan alınır. $3+2e^{5t}$ örneğinde birinci terim $s>0$, ikincisi $s>5$ gerektirir; toplam $s>5$ için tanımlıdır.

:::

---

## Soru: $\mathcal{L}\{t\}$

$$
\mathcal{L}\{t\}=\int_0^\infty te^{-st}\,dt
$$

Kısmi integrasyon seçimi:

$$
u=t,
\qquad
dv=e^{-st}\,dt
$$

::: {.notes}

$t$ çarpanı nedeniyle integral doğrudan temel dönüşüm tablosundan okunmuyor. Polinom derecesini düşürmek için kısmi integrasyon kullanıyoruz. $u=t$ seçildiğinde $du=dt$; $dv=e^{-st}dt$ seçildiğinde $v=-e^{-st}/s$ olur.

Sınır teriminin kaybolması $s>0$ koşuluna bağlıdır. Bu koşul aynı zamanda integralin yakınsaklık bölgesini verir.

:::

---

## Çözüm: Kısmi İntegrasyon

$$
\int_0^\infty te^{-st}\,dt
=\left[-\frac{te^{-st}}s\right]_0^\infty
+\frac1s\int_0^\infty e^{-st}\,dt
$$

$$
\boxed{\mathcal{L}\{t\}=\frac1{s^2}},
\qquad s>0
$$

::: {.notes}

$s>0$ iken $te^{-st}\to0$ olduğu için sınır terimi iki uçta da sıfırdır. Geriye $\dfrac1s\mathcal{L}\{1\}$ kalır; $\mathcal{L}\{1\}=1/s$ olduğundan sonuç $1/s^2$ olur.

Bu hesap bir örüntü başlatır. $t^n$ için yapılan her kısmi integrasyon polinom derecesini bir azaltır ve dışarı bir $1/s$ çarpanı çıkarır. İşlem $n$ kez tekrarlandığında faktöriyel oluşur.

:::

---

## Kuvvet Fonksiyonları

$$
\mathcal{L}\{t\}=\frac{1}{s^2},
\qquad
\mathcal{L}\{t^2\}=\frac{2}{s^3}
$$

$$
\boxed{\mathcal{L}\{t^n\}=\frac{n!}{s^{n+1}}}
$$

::: {.notes}

Aynı kısmi integrasyon $t^2$ için tekrarlanınca $2/s^3$ çıkar. Genel olarak her adım polinom derecesini bir azaltır ve sıradaki tam sayı çarpanını getirir; tümevarımla $\mathcal{L}\{t^n\}=n!/s^{n+1}$ elde edilir.

Paydaki faktöriyele dikkat edilmesi gerekir. $\mathcal{L}\{t^3\}=\dfrac{6}{s^4}$'tür, $\dfrac{1}{s^4}$ değil. Ters yönde kullanırken de aynı çarpan hesaba katılır: $\dfrac{1}{s^4}$ ifadesinin ters dönüşümü $\dfrac{t^3}{6}$'dır.

:::

---

## Trigonometrik Fonksiyonlar

$$
\mathcal{L}\{\cos bt\}=\frac{s}{s^2+b^2}
$$

$$
\mathcal{L}\{\sin bt\}=\frac{b}{s^2+b^2}
$$

::: {.notes}

Bu iki dönüşüm doğrudan integralle de hesaplanabilir — iki kez kısmi integrasyon ve integralin kendisini yalnız bırakma — ama daha kısa bir yol var.

Euler formülünden $e^{ibt}=\cos bt+i\sin bt$'dir. Üstel formülü kompleks $a=ib$ için kullanalım: $\mathcal{L}\{e^{ibt}\}=\dfrac{1}{s-ib}$. Paydayı eşleniğiyle genişletelim: $\dfrac{s+ib}{s^2+b^2}$. Reel kısım kosinüsün, sanal kısım sinüsün dönüşümüdür.

İki formülün payları farklıdır ve bu fark sık karıştırılır: kosinüste pay $s$, sinüste pay $b$'dir. Payda ikisinde de $s^2+b^2$'dir.

Payda sıfırlarının $s=\pm ib$ olması, üstel durumdaki okumanın devamıdır: sanal kökler salınıma karşılık gelir. Karakteristik denklemde $\pm i\beta$ köklerinin sinüs–kosinüs çözümü vermesiyle aynı yapı, şimdi dönüşüm tarafında görünüyor.

:::

---

## Temel Dönüşüm Tablosu

| $f(t)$ | $F(s)$ |
|---|---|
| $1$ | $1/s$ |
| $t^n$ | $n!/s^{n+1}$ |
| $e^{at}$ | $1/(s-a)$ |
| $\cos bt$ | $s/(s^2+b^2)$ |
| $\sin bt$ | $b/(s^2+b^2)$ |

::: {.notes}

Bu beş satır, konu boyunca kullanılacak dönüşümlerin çekirdeğidir. Geri kalan dönüşümler bunlardan ve birkaç kuraldan türetilir.

Tabloyu ezberlemek yerine bir ifadeye bakıp hangi satıra ait olduğunu görmeye çalışın. Payda $s-a$ biçimindeyse üstel, $s^2+b^2$ biçimindeyse salınım, $s$'nin kuvvetiyse polinom vardır. Bu okuma alışkanlığı ters dönüşüm alırken doğrudan işe yarar.

Tablonun iki yönlü kullanıldığına dikkat edin. Soldan sağa okumak dönüşüm, sağdan sola okumak ters dönüşümdür. Diferansiyel denklem çözerken asıl kullanım ikinci yöndedir: cebirsel çözümden $F(s)$ elde edilir ve tabloda karşılığı aranır.

:::

---

## Her Fonksiyonun Dönüşümü Var mı?

$$
f(t)=e^{t^2}
$$

Hiçbir $s$ için integral yakınsamaz.

Dönüşümün tanımlı olması için bir büyüme sınırı gerekir.

::: {.notes}

Laplace dönüşümü her fonksiyona uygulanamaz. $f(t)=e^{t^2}$ örneğinde integrand $e^{t^2-st}$ olur ve üsteki $t^2$ terimi $t$ büyüdükçe her $s$ değerini yener. İntegral hiçbir $s$ için yakınsamaz.

Sorun, $e^{-st}$ çarpanının bastırma gücünün üstel hızda olmasıdır. Fonksiyon üstelden daha hızlı büyüyorsa bastırma yetmez.

Bu, yöntemin sınırıdır ve baştan bilinmesi gerekir. Uygulamada karşılaşılan girdilerin hemen hepsi — polinomlar, üsteller, sinüs–kosinüsler, basamak fonksiyonları ve bunların çarpımları — sınırın içindedir. $e^{t^2}$ tipi büyüme fiziksel modellerde nadiren görülür.

:::

---

## Varlık Koşulu

$f$ dönüşümü tanımlıysa:

- $[0,\infty)$ üzerinde **parçalı sürekli**
- **Üstel mertebeden**: $|f(t)|\le Me^{\alpha t}$

O zaman $s>\alpha$ için $F(s)$ vardır.

::: {.notes}

İki koşul birlikte yeterlidir. Birincisi, $f$'nin her sonlu aralıkta sonlu sayıda sıçrama dışında sürekli olmasıdır. Sıçramalara izin verilmesi bu yöntemin en güçlü tarafıdır: parçalı tanımlı girdiler doğrudan çalışılabilir, çünkü sıçrama noktaları integrali bozmaz.

İkincisi büyüme sınırıdır. $|f(t)|\le Me^{\alpha t}$ eşitsizliğini sağlayan $M$ ve $\alpha$ sabitleri varsa $f$ üstel mertebedendir. $t^n$ bu koşulu her $\alpha>0$ için sağlar, çünkü polinom er geç üstelin altında kalır. $\sin bt$ sınırlı olduğundan $\alpha=0$ ile sağlar.

Koşullar yeterlidir, gerekli değildir. $f(t)=t^{-1/2}$ fonksiyonu $t=0$ yakınında sınırsızdır, yani parçalı süreklilik koşulunu sağlamaz, ama dönüşümü yine de vardır. Uygulamada asıl işlevi hızlı bir güvence sağlamaktır: girdi bu iki koşulu karşılıyorsa dönüşüm hesabına girişilebilir.

Koşulların sağlanması hâlinde $s\to\infty$ giderken $F(s)\to0$ olur. Bu, elde edilen bir sonucun kontrolünde kullanılabilir: ters dönüşüm ararken karşınıza $F(s)=\dfrac{s^2}{s+1}$ gibi bir ifade çıkıyorsa hesapta hata vardır, çünkü böyle bir fonksiyon hiçbir dönüşümün sonucu olamaz.

:::

---

## Soru: Parçalı Girdi

$$
f(t)=
\begin{cases}
2, & 0\le t<3\\
0, & t\ge3
\end{cases}
$$

::: {.notes}

Bu fonksiyon $t=3$'te sıçrıyor, yani sürekli değil. Klasik yöntemlerin hiçbiri böyle bir sağ tarafla doğrudan çalışamaz; denklem iki parçaya bölünür ve parçalar $t=3$'te elle birleştirilir.

Laplace dönüşümü için sıçrama sorun değildir. İntegral parçalara ayrılır: $[0,3)$ aralığında integrand $2e^{-st}$, $[3,\infty)$ aralığında sıfırdır. İkinci parça hiç katkı vermez.

Bu, yöntemin süreksiz girdilerdeki üstünlüğünün ilk işaretidir. Sıçrama, dönüşüm tarafında yalnız bir üstel çarpan olarak görünür ve hesabın yapısını değiştirmez.

:::

---

## Çözüm: İntegrali Parçalamak

$$
F(s)=\int_0^{3}2e^{-st}\,dt
=\left[-\frac{2e^{-st}}{s}\right]_0^{3}
$$

$$
\boxed{F(s)=\frac{2(1-e^{-3s})}{s}}
$$

::: {.notes}

Yalnız $[0,3)$ aralığı katkı verdiğinden integral $\int_0^{3}2e^{-st}dt$'ye iner. İlkel fonksiyon $-\dfrac{2e^{-st}}{s}$'dir.

Sınırları yerleştirelim: üst uçta $-\dfrac{2e^{-3s}}{s}$, alt uçta $-\dfrac{2}{s}$ çıkar. Fark $\dfrac{2}{s}-\dfrac{2e^{-3s}}{s}=\dfrac{2(1-e^{-3s})}{s}$'dir.

Sonucu okuyalım. $\dfrac{2}{s}$ terimi sabit $2$ fonksiyonunun dönüşümü; $-\dfrac{2e^{-3s}}{s}$ terimi ise onu $t=3$'te kapatan kısım. Sıçramanın konumu $e^{-3s}$ çarpanının üssünde duruyor.

Bu gözlem sistematik bir kurala dönüşecek: zaman eksenindeki öteleme, dönüşüm tarafında $e^{-cs}$ çarpanı olarak görünür. Kuralın kendisi ve onu taşıyan birim basamak fonksiyonu ilerideki bir konunun işidir.

:::

---

## Sık Yapılan Hatalar

1. $\mathcal{L}\{t^n\}$ formülünde $n!$ çarpanını atlamak
2. Kosinüs ve sinüs paylarını karıştırmak
3. Geçerlilik aralığını hiç yazmamak
4. $\mathcal{L}\{fg\}=\mathcal{L}\{f\}\mathcal{L}\{g\}$ sanmak
5. Alt sınırı $-\infty$ almak

::: {.notes}

Birinci hata $\dfrac{1}{s^4}$ ile $\dfrac{6}{s^4}$ arasındaki farkı gözden kaçırmaktır ve genellikle ters dönüşüm alırken ortaya çıkar. Payda $s^{n+1}$ görüldüğünde $t^n$ yazılır, ama $n!$ ile bölmek gerekir.

İkinci hata pay karışıklığıdır: kosinüste pay $s$, sinüste pay $b$'dir. Kontrol yolu basittir; $t=0$ değerine bakın. $\cos0=1$ olduğundan dönüşümün $s\to\infty$ davranışı $1/s$ gibi olmalıdır ve $\dfrac{s}{s^2+b^2}$ bunu sağlar.

Dördüncü hata en pahalıya mal olanıdır. Dönüşüm çarpımı çarpıma taşımaz; $\mathcal{L}\{f\}\mathcal{L}\{g\}$ çarpımının ters dönüşümü $fg$ değildir. Bu çarpımın karşılığı ayrı bir işlemdir ve konvolüsyon konusunda kurulacak.

Beşinci hata tanımı bozar. İntegral $0$'dan başlar; $t<0$ bölgesi hiçbir zaman hesaba girmez.

:::

---

## Karar Soruları

Dönüşümü tanımlı mı? Tanımlıysa hangi $s$ için?

1. $f(t)=t^{10}$
2. $f(t)=e^{3t}\sin t$
3. $f(t)=e^{t^3}$

::: {.notes}

Birincisi tanımlıdır. Polinomlar her pozitif $\alpha$ için üstel mertebedendir; $t^{10}\le M e^{\alpha t}$ eşitsizliği uygun bir $M$ ile sağlanır. Dönüşüm $\dfrac{10!}{s^{11}}$ ve geçerlilik aralığı $s>0$'dır.

İkincisi tanımlıdır. $|\sin t|\le1$ olduğundan $|e^{3t}\sin t|\le e^{3t}$ olur; fonksiyon $\alpha=3$ ile üstel mertebedendir. Dönüşüm $s>3$ için vardır. Değerini hesaplamak için üstel çarpanın dönüşüm tarafında ne yaptığını bilmek gerekir; bu kural dönüşüm kuralları arasında ayrıca verilir.

Üçüncüsü tanımsızdır. $e^{t^3}$ her üstelden hızlı büyür ve $e^{-st}$ çarpanı onu bastıramaz. İntegral hiçbir $s$ için yakınsamaz.

Soruların ortak noktası hesap değil karardır: fonksiyonun büyüme hızına bakıp yöntemin kapsamına girip girmediğine karar vermek.

:::

---

## Sonraki Adım: Türevin Dönüşümü

$$
\mathcal{L}\{y'\}=?
$$

Denklemi cebirsel yapacak olan bu kural.

Başlangıç koşulları da buradan girecek.

::: {.notes}

Buraya kadar dönüşümün tanımını ve temel fonksiyonlardaki değerlerini kurduk. Ama asıl amaç diferansiyel denklem çözmekti ve bunun için türevin dönüşümü gerekiyor.

Aranan şey $\mathcal{L}\{y'\}$ ifadesini $\mathcal{L}\{y\}$ cinsinden yazmaktır. Böyle bir bağıntı varsa denklemin her terimi $Y(s)$ cinsinden yazılabilir ve diferansiyel denklem $Y(s)$ için cebirsel bir denkleme dönüşür.

Bağıntı kısmi integrasyonla çıkar ve içinde $y(0)$ terimi barındırır. Başlangıç koşullarının hesaba nereden girdiği tam olarak burasıdır: sonradan uygulanan bir düzeltme değil, dönüşüm formülünün parçası.

:::

---

## Kaynak Notu

Ana kaynak: Nagle, Saff ve Snider.

::: {.notes}

Laplace dönüşümü tanımı ve temel dönüşüm hesapları, Nagle, Saff ve Snider kaynağındaki klasik yaklaşımı izler: has olmayan integralle tanım, parçalı süreklilik ve üstel mertebe koşulları, temel fonksiyonlar için doğrudan hesap. Tabloyu ezbere dayanmadan kullanabilmek için asıl bakılması gereken, payda yapısının özgün fonksiyonun davranışını nasıl kodladığıdır — bu okuma alışkanlığı yukarıdaki örneklerde tekrar tekrar kullanıldı.

:::

---
