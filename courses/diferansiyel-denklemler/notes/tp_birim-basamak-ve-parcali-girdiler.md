---
title: "Birim Basamak Fonksiyonu ve Parçalı Girdiler"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-08-05
execute:
  echo: false
---

## Anahtar Kapanıyor

$$
y'+y=g(t),
\qquad
g(t)=
\begin{cases}
0, & t<2\\
1, & t\ge2
\end{cases}
$$

Girdi $t=2$'de devreye giriyor.

::: {.notes}

Bir devreye $t=2$ anında gerilim uygulanıyor, bir tanka $t=2$ anında akış başlıyor, bir işlem kuyruğuna $t=2$ anında istek gelmeye başlıyor. Üç durumda da denklem aynı: sağ taraf bir noktaya kadar sıfır, o noktadan sonra sabit.

Klasik yöntemlerle bu denklem iki parçada çözülür. $[0,2)$ aralığında $y'+y=0$ çözülür, $[2,\infty)$ aralığında $y'+y=1$ çözülür, sonra iki çözüm $t=2$'de birleştirilir. Birleştirme için sürekliliğin elle kurulması gerekir: birinci parçanın $t=2$'deki değeri, ikinci parçanın başlangıç koşulu olur.

Her ek sıçrama bu işi tekrarlar. Üç parçalı bir girdide üç denklem, iki birleştirme koşulu ve büyüyen bir sabit takibi vardır.

Laplace dönüşümünde parçalı girdi hesabı bölmez. Ama bunun için önce parçalı fonksiyonu tek bir formülle yazmanın yolunu bulmak gerekiyor.

:::

---

## Birim Basamak Fonksiyonu

$$
u(t-a)=
\begin{cases}
0, & t<a\\
1, & t\ge a
\end{cases}
$$

$a\ge0$ noktasında açılan bir anahtar.

::: {.notes}

Birim basamak fonksiyonu — Heaviside fonksiyonu da denir — $a$ noktasına kadar sıfır, sonrasında bir değerini alır. Tanımı bu kadar sadedir ve tek işlevi bir şeyin ne zaman devreye girdiğini kodlamaktır.

Bir fonksiyonu $u(t-a)$ ile çarpmak, o fonksiyonu $t=a$'dan önce kapatmak demektir. $u(t-a)g(t)$ ifadesi $t<a$ için sıfır, $t\ge a$ için $g(t)$ değerini alır.

$t=a$ noktasındaki değer $1$ olarak tanımlandı, ama bu seçim sonucu etkilemez. Laplace dönüşümü bir integral olduğundan tek bir noktadaki değer integrale katkı vermez.

Gösterimde $u_a(t)$ ya da $H(t-a)$ biçimleri de kullanılır. Burada $u(t-a)$ yazılacak; kaydırma miktarının argüman içinde görünmesi, dönüşüm kuralını okumayı kolaylaştırır.

:::

---

## Parçalı Fonksiyonu Tek Formülde Yazmak

$$
f(t)=
\begin{cases}
f_1(t), & t<a\\
f_2(t), & t\ge a
\end{cases}
$$

$$
f(t)=f_1(t)+\bigl[f_2(t)-f_1(t)\bigr]u(t-a)
$$

::: {.notes}

Parçalı tanımı tek satıra indirmenin yolu, farkı basamakla açmaktır. $t<a$ için $u(t-a)=0$ olduğundan ifade $f_1(t)$'ye iner. $t\ge a$ için $u(t-a)=1$ olur ve ifade $f_1+f_2-f_1=f_2$ verir.

Formülü ezberlemek yerine mantığını takip etmek daha güvenli: $f_1$ ile başla, $a$ noktasında $f_1$'i kapatıp $f_2$'yi aç. Kapatma ve açma işi tek bir basamakla, aradaki farkla yapılır.

Üç ya da daha fazla parça için aynı iş tekrarlanır. Her sıçrama noktasına bir basamak düşer: $f=f_1+(f_2-f_1)u(t-a)+(f_3-f_2)u(t-b)$.

Giriş örneğindeki girdi bu biçimde $g(t)=u(t-2)$ olur. $f_1=0$ ve $f_2=1$ olduğundan fark doğrudan basamağın kendisidir.

:::

---

## Basamağın Dönüşümü

$$
\mathcal{L}\{u(t-a)\}
=\int_a^{\infty}e^{-st}\,dt
$$

$$
\boxed{\mathcal{L}\{u(t-a)\}=\frac{e^{-as}}{s}}
$$

::: {.notes}

İntegralde $[0,a)$ aralığı sıfır katkı verir, çünkü orada fonksiyon sıfırdır. Geriye $\int_a^{\infty}e^{-st}dt$ kalır.

İlkel fonksiyon $-\dfrac{e^{-st}}{s}$'dir. Üst uçta $s>0$ için sıfıra gider, alt uçta $t=a$ için $-\dfrac{e^{-as}}{s}$ çıkar. Sonuç $\dfrac{e^{-as}}{s}$'dir.

$a=0$ alındığında $\dfrac1s$ elde edilir, yani sabit $1$ fonksiyonunun dönüşümü. Basamak $t=0$'da açılıyorsa zaten sabit fonksiyondur.

Sonuçtaki $e^{-as}$ çarpanı, sıçramanın konumunu taşıyor. Bu çarpanın nerede duracağı genel bir kurala dönüşecek: zaman ekseninde $a$ kadar geciktirme, dönüşüm tarafında $e^{-as}$ ile çarpmadır.

:::

---

## İkinci Öteleme Kuralı

$$
\boxed{\mathcal{L}\{u(t-a)f(t-a)\}=e^{-as}F(s)}
$$

Ters yönde:

$$
\mathcal{L}^{-1}\{e^{-as}F(s)\}=u(t-a)f(t-a)
$$

::: {.notes}

Kuralın gerekçesi değişken değiştirmedir. $\int_a^{\infty}e^{-st}f(t-a)dt$ integralinde $\tau=t-a$ konur; sınırlar $0$'dan sonsuza döner ve $e^{-st}=e^{-s(\tau+a)}=e^{-as}e^{-s\tau}$ olur. Sabit $e^{-as}$ çarpanı dışarı çıkar, geriye $F(s)$ kalır.

Kuraldaki $f(t-a)$ ayrıntısına dikkat edilmesi gerekir. Fonksiyonun yalnız kapatılması yetmez; aynı zamanda **kaydırılmış** olması gerekir. $u(t-a)f(t)$ ile $u(t-a)f(t-a)$ farklı fonksiyonlardır ve dönüşümleri de farklıdır.

Birinci öteleme kuralı $s$ ekseninde kaydırıyordu ve özgün tarafta $e^{at}$ çarpanı veriyordu. Bu kural $t$ ekseninde kaydırıyor ve dönüşüm tarafında $e^{-as}$ çarpanı veriyor. İki kural birbirinin aynası; hangisinin gerektiği, üstelin hangi değişkende olduğuna bakılarak anlaşılır.

Ters yön uygulamada daha sık kullanılır. $Y(s)$ içinde $e^{-as}$ çarpanı görüldüğünde, çözümün $t=a$'ya kadar sıfır olduğu ve o noktadan sonra gecikmeli olarak başladığı anlaşılır.

:::

---

## Kaydırma Zorunlu

$$
\mathcal{L}\{u(t-a)g(t)\}
=e^{-as}\mathcal{L}\{g(t+a)\}
$$

Fonksiyon kaydırılmamışsa önce kaydırılmış biçime getirilir.

::: {.notes}

Uygulamada karşılaşılan ifadeler çoğu zaman kuralın istediği biçimde gelmez. $u(t-2)t^2$ gibi bir çarpımda fonksiyon kaydırılmamıştır.

İki yol var. Birincisi, $g$'yi $t-2$ cinsinden yeniden yazmaktır: $t^2=\bigl((t-2)+2\bigr)^2=(t-2)^2+4(t-2)+4$. Şimdi her terim kaydırılmış biçimde ve kural doğrudan uygulanır.

İkincisi yukarıdaki formüldür: $\mathcal{L}\{u(t-a)g(t)\}=e^{-as}\mathcal{L}\{g(t+a)\}$. Aynı örnekte $g(t+2)=(t+2)^2=t^2+4t+4$ olur ve dönüşümü $\dfrac{2}{s^3}+\dfrac{4}{s^2}+\dfrac{4}{s}$'tir. Sonuç $e^{-2s}$ ile çarpılır.

İki yol aynı sonucu verir. İkincisi mekanik olduğu için hata payı düşüktür; birincisi ise ne olup bittiğini görünür kılar.

:::

---

## Soru: Sıçrayan Girdi

$$
y'+y=u(t-2),
\qquad
y(0)=0
$$

::: {.notes}

Giriş örneğine dönelim. Girdi artık tek formülde yazılı ve dönüşümü biliniyor.

Denklemin dönüşümünü alalım. Sol taraf: $\mathcal{L}\{y'\}+\mathcal{L}\{y\}=(sY-0)+Y=(s+1)Y$. Sağ taraf: $\dfrac{e^{-2s}}{s}$.

Buradan $Y(s)=\dfrac{e^{-2s}}{s(s+1)}$ elde edilir.

Yapı tanıdık: bir rasyonel fonksiyon ve önünde bir $e^{-2s}$ çarpanı. Üstel çarpan ters dönüşümde gecikmeyi taşıyacak; geri kalanı her zamanki gibi kısmi kesirlerle çözülür.

:::

---

## Çözüm: Önce Rasyonel Kısım

$$
\frac{1}{s(s+1)}=\frac1s-\frac{1}{s+1}
$$

$$
f(t)=1-e^{-t}
$$

$$
\boxed{y(t)=u(t-2)\bigl(1-e^{-(t-2)}\bigr)}
$$

::: {.notes}

Üstel çarpanı bir kenara bırakıp $F(s)=\dfrac{1}{s(s+1)}$ ifadesini ayrıştıralım. $1=A(s+1)+Bs$ eşitliğinde $s=0$ için $A=1$, $s=-1$ için $B=-1$ çıkar.

Ters dönüşüm $f(t)=1-e^{-t}$'dir. Şimdi ikinci öteleme kuralını uygulayalım: $\mathcal{L}^{-1}\{e^{-2s}F(s)\}=u(t-2)f(t-2)$.

Sonuç $y(t)=u(t-2)\bigl(1-e^{-(t-2)}\bigr)$'dir. Açık biçimde yazarsak: $t<2$ için $y=0$, $t\ge2$ için $y=1-e^{-(t-2)}$.

$f$ içindeki her $t$'nin $t-2$ ile değiştirilmesi gerekir. Yalnız başa $u(t-2)$ yazıp $1-e^{-t}$ bırakmak sık yapılan bir hatadır ve $t=2$'de süreklilik bozulur.

:::

---

## Çözümü Okumak

- $t<2$: sistem hareketsiz
- $t=2$: girdi açılıyor, $y$ sıfırdan başlıyor
- $t\to\infty$: $y\to1$

Çözüm $t=2$'de sürekli, türevi sıçramalı.

::: {.notes}

Çözümün davranışı fiziksel beklentiyle uyuşuyor. İki saniye boyunca sisteme hiçbir şey girmiyor ve başlangıç durumu sıfır olduğundan çıktı da sıfır kalıyor.

$t=2$'de girdi açılıyor. Çözüm oradan itibaren üstel olarak $1$ değerine yaklaşıyor; $1-e^{-(t-2)}$ ifadesi $t=2$'de $0$, sonrasında artan bir eğri. Sistemin denge değerine yerleşmesi ani değil, kendi zaman sabitiyle oluyor.

Süreklilik kontrolü şunu gösteriyor: girdi sıçrasa da çözüm sıçramıyor. $t=2$'de sol ve sağ limitler $0$ değerinde buluşuyor. Sıçrayan şey türevdir: $t=2^-$ için $y'=0$, $t=2^+$ için $y'=1$.

Bu genel bir sonuçtur. Birinci mertebe bir denklemde girdideki sıçrama, çözümün türevine yansır; çözümün kendisi sürekli kalır. İkinci mertebe bir denklemde sıçrama ikinci türeve iner, yani çözüm ve birinci türevi sürekli olur. Mertebe, sıçramanın çözüme ne kadar "yumuşayarak" ulaştığını belirler.

:::

---

## Sonlu Süreli Girdi

$$
g(t)=u(t-1)-u(t-4)
$$

$t=1$'de açılan, $t=4$'te kapanan darbe.

$$
G(s)=\frac{e^{-s}-e^{-4s}}{s}
$$

::: {.notes}

İki basamağın farkı bir darbe üretir. $t<1$ için ikisi de sıfır, $1\le t<4$ için birincisi $1$ ikincisi $0$ olduğundan fark $1$, $t\ge4$ için ikisi de $1$ olduğundan fark $0$ olur.

Bu, uygulamada en sık karşılaşılan girdi tipidir: bir kaynak belirli bir süre çalışır ve kapanır. Aynı yapıyla kare dalga, merdiven basamakları ya da darbe dizileri de yazılabilir.

Dönüşümü lineerlikle çıkar: $\dfrac{e^{-s}}{s}-\dfrac{e^{-4s}}{s}$. Her sıçrama noktası kendi $e^{-as}$ çarpanını getiriyor ve çarpanlar toplanıyor.

Ters yönde de aynı okuma geçerli. Bir $Y(s)$ ifadesinde iki farklı üstel çarpan görülüyorsa, çözümde iki farklı zamanda devreye giren iki parça vardır. Çözümü yazarken her parça kendi basamağıyla ve kendi kaydırmasıyla ele alınır.

:::

---

## Sık Yapılan Hatalar

1. $u(t-a)f(t)$ ile $u(t-a)f(t-a)$'yı karıştırmak
2. Kaydırmayı fonksiyonun bir kısmına uygulamak
3. Basamağın dönüşümünde $\dfrac1s$ çarpanını atlamak
4. Parçalı yazımda farkı değil, doğrudan $f_2$'yi çarpmak
5. Birinci ve ikinci öteleme kurallarını karıştırmak

::: {.notes}

Birinci hata en sık olanıdır ve kuralın uygulanabilmesi için fonksiyonun kaydırılmış olması gerektiğini atlamaktan doğar. Kontrol yolu basit: $t=a$ değerini koyun. Doğru yazımda $f(0)$ çıkar; girdi o anda başladığı için beklenen budur.

İkinci hata bileşik ifadelerde görülür. $u(t-3)(t^2+1)$ ifadesinde hem $t^2$ hem sabit terim $t-3$ cinsinden yeniden yazılmalıdır; yalnız birini kaydırmak fonksiyonu değiştirir.

Dördüncü hata parçalı yazımda çıkar. $f_1+f_2u(t-a)$ yazılırsa $t\ge a$ bölgesinde $f_1+f_2$ elde edilir, oysa istenen $f_2$'dir. Basamakla çarpılan şey her zaman **fark**tır.

Beşinci hata iki kuralın ayırt edilememesidir. Kısa ölçüt: $e^{at}$ çarpanı özgün taraftaysa $s$ kayar; $e^{-as}$ çarpanı dönüşüm tarafındaysa $t$ kayar ve bir basamak devreye girer.

:::

---

## Karar Soruları

Basamak gösterimiyle yazın:

1. $t<3$ için $0$, $t\ge3$ için $t$
2. $0\le t<2$ için $t$, $t\ge2$ için $4-t$
3. $\mathcal{L}^{-1}\left\{\dfrac{e^{-5s}}{s^2}\right\}$

::: {.notes}

Birincisinde $f_1=0$ ve $f_2=t$'dir; fark $t$ olur ve fonksiyon $u(t-3)t$ biçiminde yazılır. Dönüşüm için kaydırma gerekir: $t=(t-3)+3$ yazılır ve sonuç $e^{-3s}\left(\dfrac{1}{s^2}+\dfrac{3}{s}\right)$ çıkar.

İkincisinde $f_1=t$, $f_2=4-t$ ve fark $4-2t$'dir. Fonksiyon $t+(4-2t)u(t-2)$ olur. Kontrol edelim: $t=3$ için $3+(4-6)=1$, doğrudan tanımdan da $4-3=1$ ✓.

Üçüncüsünde $F(s)=\dfrac{1}{s^2}$ ve karşılığı $f(t)=t$'dir. Üstel çarpan $a=5$ gecikmesini gösterir. Sonuç $u(t-5)(t-5)$ olur: $t=5$'e kadar sıfır, sonra sıfırdan başlayarak lineer artan bir fonksiyon.

Üçüncü sorudaki $t-5$ yazımına dikkat edin. $u(t-5)t$ yazılsaydı fonksiyon $t=5$'te $5$ değerine sıçrardı; doğru cevapta sıçrama yok.

:::

---

## Sonraki Adım: Çarpımın Karşılığı

$$
\mathcal{L}^{-1}\{F(s)G(s)\}=?
$$

Çarpım, çarpıma gitmiyordu.

Peki neye gidiyor?

::: {.notes}

Parçalı girdiler artık tek formülle yazılıyor ve denkleme doğrudan giriyor. Ama ters dönüşüm tarafında hâlâ kapatılmamış bir boşluk var.

Kısmi kesirler yalnız rasyonel ifadeleri ayrıştırır. Payda çok çarpanlıysa hesap uzar; girdi ise genel bir $g(t)$ ise payda rasyonel bile olmaz. Böyle durumlarda $Y(s)$ doğal olarak iki parçanın çarpımı biçiminde kalır: biri sistemden, biri girdiden gelen.

Çarpımın ters dönüşümünün çarpım olmadığını biliyoruz. Bu çarpıma karşılık gelen işlem konvolüsyondur; aynı zamanda sistemin girdiye nasıl cevap verdiğini okumanın yolunu açar.

:::

---

## Kaynak Notu

Ana kaynak: Nagle, Saff ve Snider.

::: {.notes}

Yöntem burada Nagle, Saff ve Snider'ın klasik yaklaşımıyla kurulmuştur: Heaviside fonksiyonuyla parçalı tanımın tek formüle indirgenmesi, ikinci öteleme teoremi ve gecikmeli çözümün okunması.

**Kaynak:** Nagle, Saff & Snider, *Fundamentals of Differential Equations*.

:::

---
