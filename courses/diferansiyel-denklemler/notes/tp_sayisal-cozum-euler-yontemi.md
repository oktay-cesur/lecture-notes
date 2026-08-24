---
title: "Sayısal Çözüm: Euler Yöntemi"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-08-05
execute:
  echo: false
---

## Kapalı Çözüm Her Zaman Yok

$$
y'=t^2+y^2,
\qquad
y(0)=0
$$

Ayrılabilir değil, lineer değil, tam değil.

Çözüm var — ama yazılamıyor.

::: {.notes}

Bu denklem hiçbir çözüm sınıfına girmiyor. Sağ taraf hem $t$ hem $y$ içeriyor ve çarpanlarına ayrılmıyor; $y^2$ terimi lineerliği bozuyor.

Yine de çözümün var olduğunu biliyoruz. Sağ taraf ve $y$'ye göre türevi sürekli olduğundan varlık-teklik teoremi $t=0$ çevresinde tek bir çözümün varlığını garanti ediyor.

Var olan ama elemanter fonksiyonlarla yazılamayan bir çözüm. Bu durum istisna değil kuraldır: uygulamada karşılaşılan diferansiyel denklemlerin çoğunun kapalı formda çözümü yoktur.

O hâlde soru değişiyor. "Çözüm nedir" yerine "çözüm eğrisi nereden geçiyor" diye soracağız. Bu soru cevaplanabilir ve cevabı yön alanı fikrinin içinde duruyor.

:::

---

## Yön Alanından Adım Atmaya

$$
y'=f(t,y)
$$

Her noktada eğim biliniyor.

Eğimi izleyip küçük bir adım atalım.

::: {.notes}

Denklem, her $(t,y)$ noktasında çözüm eğrisinin eğimini veriyor. Yön alanı bu bilgiyi görselleştirmenin yoluydu: düzleme kısa doğru parçaları çizilip eğrinin gidişi izleniyordu.

Sayısal yöntem aynı fikri hesaba çeviriyor. Bir noktadan başla, oradaki eğimi hesapla, o eğimle kısa bir doğru parçası boyunca ilerle, yeni noktada eğimi yeniden hesapla, tekrarla.

Doğru parçası kısa tutulduğu sürece bu, eğriyi takip etmenin makul bir yolu. Eğri boyunca eğim değiştiği için sapma birikir, ama adım küçüldükçe sapma da küçülür.

Yön alanı nitel bir resim veriyordu; burada aynı fikirden sayılar üreteceğiz.

:::

---

## Euler Yöntemi

$$
y_{n+1}=y_n+h\,f(t_n,y_n)
$$

$$
t_{n+1}=t_n+h
$$

$h$: adım büyüklüğü

::: {.notes}

Formül teğet doğrusundan çıkar. $(t_n,y_n)$ noktasındaki teğetin eğimi $f(t_n,y_n)$'dir; bu doğru üzerinde $h$ kadar ilerlersek $y$ değeri $h\,f(t_n,y_n)$ kadar değişir.

Aynı formül Taylor açılımından da görülebilir. $y(t_n+h)=y(t_n)+hy'(t_n)+\dfrac{h^2}{2}y''(\xi)$ açılımında ilk iki terim tutulur ve gerisi atılır. Atılan kısım hatayı oluşturur.

Yöntem açıktır (explicit): yeni değer yalnız bilinen değerlerden hesaplanır, denklem çözmek gerekmez. Bu, elle hesaplamayı ve programlamayı kolaylaştırır.

Başlangıç değeri $y_0$ verildiğinde adımlar sırayla üretilir. Her adım bir öncekine dayandığı için hata birikir; bu birikimin ne kadar hızlı olduğu yöntemin kalitesini belirler.

:::

---

## Soru: Bilinen Bir Denklemde Deneme

$$
y'=y,
\qquad
y(0)=1,
\qquad
h=0.5
$$

Tam çözüm $y=e^{t}$. $t=1$'de ne bulunur?

::: {.notes}

Yöntemi sınamak için çözümünü bildiğimiz bir denklem seçelim. $y'=y$ denkleminin $y(0)=1$ koşuluyla çözümü $y=e^{t}$'dir ve $t=1$'de değeri $2.71828\ldots$

Adım büyüklüğü $h=0.5$ alalım; $t=1$'e ulaşmak için iki adım gerekiyor.

Burada $f(t,y)=y$ olduğundan formül $y_{n+1}=y_n+0.5y_n=1.5y_n$ hâline geliyor. Her adım değeri $1.5$ ile çarpıyor.

Bilinen bir çözümle karşılaştırma yapmak, sayısal yöntemleri sınamanın standart yoludur. Amaç bu denklemi çözmek değil, yöntemin ne kadar saptığını ölçmek.

:::

---

## Çözüm: İki Adım

$$
y_1=1+0.5(1)=1.5
$$

$$
y_2=1.5+0.5(1.5)=2.25
$$

Tam değer $2.71828$; hata $0.468$.

::: {.notes}

Birinci adım: $t_0=0$, $y_0=1$ ve eğim $f=1$. Yeni değer $y_1=1+0.5\cdot1=1.5$, yeni zaman $t_1=0.5$.

İkinci adım: eğim $f=1.5$ olur ve $y_2=1.5+0.5\cdot1.5=2.25$ çıkar. Zaman $t_2=1$.

Tam değer $e\approx2.71828$; sayısal sonuç $2.25$. Hata $0.468$, yani yaklaşık yüzde $17$.

Hata neden hep aynı yönde? Çözüm eğrisi dışbükey — $y''=y>0$ — dolayısıyla teğet doğrusu eğrinin altında kalıyor. Her adımda gerçek değerin altında bir nokta bulunuyor ve sapma birikiyor.

Bu, Euler yönteminin bilinen bir özelliğidir: eğrinin bükülme yönü hatanın işaretini belirler.

:::

---

## Adımı Küçültmek

| $h$ | $y(1)$ yaklaşık | Hata |
|---|---|---|
| $0.5$ | $2.2500$ | $0.468$ |
| $0.25$ | $2.4414$ | $0.277$ |
| $0.125$ | $2.5658$ | $0.152$ |

::: {.notes}

Adım küçüldükçe sonuç iyileşiyor. $h=0.25$ için formül $y_{n+1}=1.25y_n$ olur ve dört adım sonunda $1.25^4=2.4414$ elde edilir. $h=0.125$ için sekiz adım $1.125^8=2.5658$ verir.

Hataların oranına bakalım: $0.468\to0.277\to0.152$. Adım yarıya inince hata da kabaca yarıya iniyor.

Bu, birinci mertebeden bir yöntemin imzasıdır. Global hata $h$ ile orantılıdır; $h$'yi $10$ kat küçültmek hatayı $10$ kat azaltır ama hesap sayısını $10$ kat artırır.

Tek adımdaki hata — yerel kesme hatası — $h^2$ ile orantılıdır, Taylor açılımından atılan terimden gelir. Ama $t=1$'e ulaşmak için $1/h$ adım gerektiğinden toplam hata bir mertebe düşer ve $h$ ile orantılı olur.

Doğruluğu artırmanın iki yolu var: adımı küçültmek ya da daha iyi bir yöntem kullanmak. Birincisinin bedeli hesap süresi, ikincisinin bedeli adım başına daha çok işlem.

:::

---

## Python ile Uygulama

```python
def euler(f, t0, y0, h, n):
    t, y = t0, y0
    for _ in range(n):
        y = y + h * f(t, y)
        t = t + h
    return t, y

euler(lambda t, y: y, 0.0, 1.0, 0.125, 8)
```

::: {.notes}

Yöntemin kodu formülün birebir karşılığıdır: bir döngü, bir çarpma, bir toplama. Yedi satırlık bu fonksiyon yukarıdaki tablonun tamamını üretir.

Kodun sadeliği yöntemin sadeliğinden geliyor. Euler yönteminde adım başına yalnız bir kez $f$ hesaplanır; daha gelişmiş yöntemler adım başına birkaç kez hesaplar ve karşılığında daha hızlı yakınsar.

Kapalı çözümü olmayan denklemlerde de aynı kod çalışır. Giriş örneğindeki $y'=t^2+y^2$ denklemi için `lambda t, y: t**2 + y**2` yazmak yeterlidir; yöntem denklemin sınıfına bakmaz.

Kodun hesabın yerine geçmediğini görmek gerekir. Program bir sayı dizisi üretir; o dizinin çözüme yakın olup olmadığı, adım büyüklüğü ve yöntemin mertebesi hakkında bilgi sahibi olmayı gerektirir. Uygulamada kullanılan kütüphaneler adım büyüklüğünü kendiliğinden ayarlar, ama neye göre ayarladığını bilmek kullanıcının işidir.

:::

---

## Adım Büyüklüğü ve Kararlılık

$$
y'=-100y,
\qquad
y(0)=1
$$

$$
y_{n+1}=(1-100h)\,y_n
$$

$h=0.05$ için çarpan $-4$.

::: {.notes}

Adım büyüklüğü yalnız doğruluğu değil, sonucun anlamlı olup olmadığını da belirler.

Bu denklemin tam çözümü $e^{-100t}$'dir ve hızla sıfıra iner. Euler formülü $y_{n+1}=(1-100h)y_n$ verir; her adım $1-100h$ çarpanıyla çalışır.

$h=0.05$ alalım: çarpan $1-5=-4$ olur. Değerler $1,-4,16,-64,\ldots$ diye gider — işaret değiştirerek büyüyor. Oysa gerçek çözüm sıfıra iniyor.

Sayısal çözümün sönmesi için $|1-100h|<1$, yani $h<0.02$ gerekir. Bu, doğrulukla ilgili değil kararlılıkla ilgili bir sınırdır: adım bu eşiğin üstündeyse sonuç yalnız hatalı olmakla kalmaz, davranışı da tersine çevirir.

Bu tür denklemlere katı (stiff) denir: çok farklı hızlarda değişen bileşenler içerirler ve açık yöntemlerde çok küçük adım gerektirirler. Kimyasal kinetik ve devre modellerinde sık görülür. Çözüm, kapalı (implicit) yöntemler kullanmaktır.

:::

---

## Daha İyi Yöntemler

- **Heun**: eğimi baştan ve sondan alıp ortalar
- **Runge–Kutta 4**: adım başına dört eğim

Hata mertebesi: $h^2$ ve $h^4$

::: {.notes}

Euler yönteminin zayıflığı, bütün adım boyunca başlangıçtaki eğimi kullanmasıdır. Eğim adım içinde değişiyorsa bu kaba bir yaklaşımdır.

Heun yöntemi önce Euler adımıyla bir tahmin yapar, o noktadaki eğimi hesaplar ve iki eğimin ortalamasıyla adımı yeniler. Adım başına iki kez $f$ hesaplanır; global hata $h^2$ ile orantılı olur.

Dördüncü mertebeden Runge–Kutta yöntemi adım başına dört eğim hesaplar ve bunları ağırlıklı olarak birleştirir. Global hata $h^4$ ile orantılıdır ve pratikte en yaygın kullanılan yöntemdir.

Mertebe farkının anlamı büyüktür. Aynı doğruluğa ulaşmak için Euler'in $10^6$ adım gerektirdiği bir problemde dördüncü mertebeden bir yöntem birkaç yüz adımla yetinebilir. Adım başına dört kat işlem yapması bu farkın yanında önemsiz kalır.

Bu yöntemlerin ayrıntısı sayısal analiz dersinin konusudur. Burada gereken, mertebe kavramının ne anlama geldiği ve yöntem seçiminin neye göre yapıldığıdır.

:::

---

## Sistemlere Genelleme

$$
\mathbf{x}_{n+1}=\mathbf{x}_n+h\,\mathbf{F}(t_n,\mathbf{x}_n)
$$

Skaler formülün birebir karşılığı.

Yüksek mertebeli denklemler önce sisteme indirgenir.

::: {.notes}

Formül vektörel biçimde aynen geçerlidir. Skaler çarpma ve toplama yerine vektör işlemleri kullanılır; başka hiçbir şey değişmez.

Yüksek mertebeli bir denklemi sayısal olarak çözmek için önce birinci mertebe sisteme indirgemek gerekir. $y''+3y'+2y=0$ denklemi $x_1=y$, $x_2=y'$ ile iki boyutlu sisteme dönüşüyordu; Euler adımı bu sisteme uygulanır.

Sistemlere geçiş konusunda indirgemenin neden yapıldığı sorulmuştu; cevabın bir kısmı burada. Sayısal çözücü kütüphanelerinin tamamı $\mathbf{x}'=\mathbf{F}(t,\mathbf{x})$ biçimini bekler.

Sonuç, faz düzleminde bir yörünge olarak çizilebilir. Sayısal çözüm, faz portresindeki nitel resmi somut sayılarla doldurur: hangi yörüngenin nereden geçtiği, dengeye ne kadar sürede yaklaşıldığı ölçülebilir hâle gelir.

:::

---

## Sayısal Çözüm Neyi Vermez

- Simgesel bir formül
- Parametre bağımlılığı
- Sonsuzdaki davranışın kanıtı

Sayısal ve analitik yöntemler birbirini tamamlar.

::: {.notes}

Sayısal çözüm belirli bir başlangıç koşulu ve belirli parametreler için sayı dizisi üretir. Parametre değişirse hesap baştan yapılır; formülde olduğu gibi doğrudan okunmaz.

Uzun vadeli davranış konusunda da dikkatli olmak gerekir. Sayısal çözüm sonlu bir aralıkta hesaplanır; $t\to\infty$ davranışı hakkında kanıt vermez. Kararlılık sorusunun cevabı özdeğerlerden gelir, simülasyondan değil.

Buna karşılık analitik yöntemlerin ulaşamadığı yerler var: kapalı çözümü olmayan denklemler, lineer olmayan sistemler, gerçek verilerle beslenen modeller.

İkisi birlikte kullanılır. Analitik analiz yapının ne olduğunu söyler — denge noktaları, kararlılık, baskın davranış. Sayısal çözüm o yapıyı somut sayılarla doldurur ve analitik yöntemin yetmediği yerde devam eder.

:::

---

## Sık Yapılan Hatalar

1. Eğimi yanlış noktada hesaplamak
2. Adımı küçültmenin her sorunu çözeceğini sanmak
3. Kararlılık sınırını göz ardı etmek
4. Sayısal sonucu tam çözüm gibi kullanmak
5. Yüksek mertebeli denklemi indirgemeden vermek

::: {.notes}

Birinci hata formülü uygularken çıkar: eğim $(t_n,y_n)$ noktasında hesaplanır, $(t_{n+1},y_n)$ ya da $(t_n,y_{n+1})$ noktasında değil. Yanlış nokta seçimi yöntemi bozar.

İkinci hata makine aritmetiğini unutmaktır. Adım çok küçüldüğünde yuvarlama hataları birikir ve toplam hata yeniden büyümeye başlar. Optimum bir adım büyüklüğü vardır.

Üçüncü hata katı denklemlerde ortaya çıkar. Sonuç patlıyorsa ilk bakılacak yer $h$ değeridir; denklem ya da kod değil.

Dördüncü hata yorumlama hatasıdır. Elde edilen sayılar yaklaşıktır ve hata mertebesi bilinmeden ne kadar güvenilir oldukları söylenemez. Adım büyüklüğünü yarıya indirip sonucun ne kadar değiştiğine bakmak, pratik bir güvenilirlik kontrolüdür.

Beşinci hata uygulamada en sık yapılanıdır. Çözücüler birinci mertebe sistem bekler; ikinci mertebe bir denklem doğrudan verilemez.

:::

---

## Karar Soruları

1. $h$ yarıya inince Euler hatası ne olur?
2. $y'=-50y$ için $h=0.1$ uygun mu?
3. Faz portresi çizmek için hangi yöntem?

::: {.notes}

Birincisinde global hata $h$ ile orantılı olduğundan hata da kabaca yarıya iner. Tablodaki oranlar bunu doğruluyordu. Heun yönteminde aynı değişiklik hatayı dörtte bire, Runge–Kutta 4'te on altıda bire indirir.

İkincisinde çarpan $1-50\cdot0.1=-4$ olur; mutlak değeri $1$'den büyük. Sayısal çözüm işaret değiştirerek büyür, oysa gerçek çözüm sönüyor. Uygun değil; kararlılık için $h<0.04$ gerekir.

Üçüncüsünde birden çok başlangıç koşulundan yörünge üretmek gerekir. Her başlangıç için sistem sayısal olarak çözülür ve $(x_1,x_2)$ noktaları düzleme çizilir. Euler yöntemi resmin genel biçimini vermeye yeter, ama yörüngelerin doğruluğu için daha yüksek mertebeli bir yöntem tercih edilir — özellikle merkez tipinde, Euler'in birikimli hatası kapalı yörüngeleri sarmal gibi gösterir.

:::

---

## Sonraki Adım: Yaklaşık Ama Simgesel

Sayısal çözüm sayı verir.

Ya çözümü bir **fonksiyon** olarak yaklaşık yazmak istersek?

$$
y=a_0+a_1t+a_2t^2+\cdots
$$

::: {.notes}

Sayısal yöntem çözüm eğrisi üzerinde noktalar üretiyor. Bu, çoğu uygulama için yeterlidir ama simgesel bilgi taşımaz: çözümün $t=0$ çevresindeki davranışı, hangi terimlerin baskın olduğu formülden okunamaz.

Başka bir yaklaşım, çözümü bir kuvvet serisi olarak aramaktır. Katsayılar denklemden belirlenir ve elde edilen seri, çözümün belirli bir aralıktaki yaklaşık ifadesi olur.

Bu yol özellikle değişken katsayılı lineer denklemlerde işe yarar. Cauchy–Euler denklemi böyle bir sınıftı ve özel yapısı sayesinde kapalı çözüme ulaşılabiliyordu; genel değişken katsayılı denklemlerde böyle bir şans yok.

Seri çözüm yöntemi bu boşluğu şu adımlarla doldurur: aday seriyi denkleme yerleştirmek, indisleri hizalamak ve katsayılar için bir yineleme bağıntısı elde etmek.

:::

---

## Kaynak Notu

Ana kaynak: Nagle, Saff ve Snider.

::: {.notes}

Euler yönteminin buradaki kurulumu — teğet doğrusundan çıkan formül, adım büyüklüğü ve hata ilişkisi, daha yüksek mertebeli yöntemlere geçiş — Nagle, Saff ve Snider kaynağındaki işleyişle uyumludur. Python kodu yöntemin yerine geçmez; formülün doğrudan karşılığıdır.

:::

---
