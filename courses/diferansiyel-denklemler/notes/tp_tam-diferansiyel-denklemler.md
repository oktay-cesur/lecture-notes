---
title: "Tam Diferansiyel Denklemler ve Test Koşulu"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-07-26
execute:
  echo: false
---

## Yeni Bir Yazma Biçimi

Bir denklemi

$$
M(x,y)\,dx+N(x,y)\,dy=0
$$

biçiminde yazalım. Bu, $y'=f(x,y)$ yazımından farklı ama eşdeğer bir gösterimdir.

::: {.notes}

Birinci mertebeden bir diferansiyel denklem

$$
M(x,y)\,dx+N(x,y)\,dy=0
$$

biçiminde yazıldığında $x$ ve $y$ diferansiyelleri aynı eşitlik içinde yer alır. Bu gösterim, $y'=f(x,y)$ biçimine göre $x$ ile $y$'yi daha simetrik gösterir. Bir çözüm eğrisi üzerinde $dx\neq0$ ve $N(x,y)\neq0$ ise eşitlik $dx$ ile bölünerek

$$
M(x,y)+N(x,y)\frac{dy}{dx}=0
$$

ve dolayısıyla

$$
\frac{dy}{dx}=-\frac{M(x,y)}{N(x,y)}
$$

biçimine getirilebilir. Ancak bu dönüşüm $N\neq0$ koşuluna bağlıdır. $N$'nin sıfır olduğu noktalarda $dy/dx=-M/N$ ifadesi tanımsız olabilir; buna karşılık diferansiyel biçim denklemin yapısını incelemeye devam etmek için daha uygun olabilir.

Bu yazımın asıl avantajı yalnız bir gösterim değişikliği sağlaması değildir. Temel soru, $M\,dx+N\,dy$ ifadesinin bir $F(x,y)$ fonksiyonunun toplam diferansiyeli olup olmadığıdır. Eğer

$$
M\,dx+N\,dy=dF
$$

olacak biçimde bir $F$ bulunabiliyorsa denklem $dF=0$ biçiminde okunur. Böylece problem, doğrudan $dy/dx$ ifadesini çözmek yerine çözüm eğrileri boyunca sabit kalan bir fonksiyonu belirleme problemine dönüşür.

:::

---

## Bir Aileden Yola Çıkmak

$F(x,y)=C$ örtük ailesini düşünelim. Bu ailenin toplam diferansiyeli:

$$
dF=F_x\,dx+F_y\,dy=0.
$$

$M=F_x$ ve $N=F_y$ ise, $M\,dx+N\,dy=0$ denklemi tam olarak bu ailenin diferansiyelidir.

::: {.notes}

$F(x,y)=C$ eşitliği düzlemde bir eğri ailesi tanımlar. Belirli bir $C$ değeri seçildiğinde çözüm eğrisi boyunca $F$'nin değeri değişmez. Bu nedenle eğri üzerindeki küçük bir yer değiştirmede toplam değişim sıfırdır:

$$
dF=F_x\,dx+F_y\,dy=0.
$$

Eğer $M\,dx+N\,dy=0$ denklemi bu toplam diferansiyelle aynıysa katsayıların

$$
M=F_x,
\qquad
N=F_y
$$

olması gerekir. Tamlık durumunda $M$ ve $N$, birbirinden bağımsız seçilmiş iki rastgele fonksiyon değildir. İkisi aynı $F$ fonksiyonunun iki farklı yöndeki değişimini temsil eder: $M$, $x$ yönündeki; $N$ ise $y$ yönündeki kısmi değişimdir.

Bu ilişki çözüm probleminin niteliğini değiştirir. Artık amaç yeni bir diferansiyel denklem yöntemi kurmak değil, kısmi türevleri verilmiş ortak $F$ fonksiyonunu yeniden oluşturmaktır. Böyle bir $F$ bulunduğunda $dF=0$ olur ve çözüm ailesi doğrudan $F(x,y)=C$ biçiminde elde edilir. Önce bu ortak potansiyelin var olup olmadığı test edilir, ardından varsa $F$ yeniden kurulur.

:::

---

## Tam Denklem Tanımı

$M\,dx+N\,dy=0$ denklemi **tam**dır, eğer

$$
F_x=M, \qquad F_y=N
$$

eşitliklerini birlikte sağlayan bir $F(x,y)$ varsa.

::: {.notes}

Bir diferansiyel biçimin tam olması, aynı $F(x,y)$ fonksiyonunun

$$
F_x=M,
\qquad
F_y=N
$$

eşitliklerini birlikte sağlaması demektir. Yalnız $F_x=M$ koşulunu sağlayan bir fonksiyon bulmak yeterli değildir; aynı fonksiyonun $y$'ye göre kısmi türevi de $N$ olmalıdır. Tamlık, iki katsayının ortak bir potansiyelden gelmesiyle ilgili bütüncül bir koşuldur.

Potansiyel fonksiyon toplamsal bir sabite kadar belirlenir. Çünkü $F$ yerine $F+K$ yazıldığında kısmi türevler değişmez. Bu belirsizlik çözüm ailesinde zaten bulunan $C$ sabitinin içine alınır. Dolayısıyla çözüm, $M$ ile $N$'yi aynı anda üreten fonksiyonel yapıyla belirlenir; toplamsal sabit çözüm ailesindeki $C$'ye katılır.

Tanım doğrudan $F$'nin varlığını söyler; fakat uygulamada $F$'yi aramadan önce bu varlığın mümkün olup olmadığını bilmek isteriz. Tamlık testi, $F_x=M$ ve $F_y=N$ eşitliklerinin aynı fonksiyonda buluşabilmesi için gerekli olan karışık kısmi türev uyumundan türetilir.

:::

---

## Test Koşulunun Türetilmesi

$F_x=M$ ve $F_y=N$ ise, karışık kısmi türevler eşittir ($F_{xy}=F_{yx}$):

$$
F_{xy}=\frac{\partial M}{\partial y}=M_y,
\qquad
F_{yx}=\frac{\partial N}{\partial x}=N_x.
$$

Dolayısıyla tam bir denklemde zorunlu olarak

$$
\boxed{M_y=N_x}
$$

sağlanır.

::: {.notes}

Tam bir denklemde $F_x=M$ ve $F_y=N$ eşitlikleri aynı anda geçerlidir. İlk eşitliğin $y$'ye göre kısmi türevi alınırsa

$$
F_{xy}=M_y
$$

elde edilir. İkinci eşitliğin $x$'e göre kısmi türevi ise

$$
F_{yx}=N_x
$$

sonucunu verir. Uygun düzgünlük koşullarında karışık kısmi türevlerin alınma sırası sonucu değiştirmez:

$$
F_{xy}=F_{yx}.
$$

Bu iki ilişki birleştirildiğinde tamlık için

$$
M_y=N_x
$$

koşulu elde edilir. Böylece test koşulu ezberlenmiş bağımsız bir kural değil, ortak bir potansiyel fonksiyonun var olması gerektiği düşüncesinin zorunlu sonucudur.

Eşitlik tek bir noktada değil, denklemin ele alındığı açık bir bölgenin tamamında kontrol edilmelidir. $M_y$ ile $N_x$'in yalnız bir noktada veya tek bir eğri üzerinde eşit olması, bölgede ortak bir potansiyelin varlığını göstermez. Standart uygulamalarda $M$ ve $N$'nin sürekli birinci kısmi türevlere sahip olduğu ve bölgenin basit bağlantılı olduğu kabul edilir. Burada **basit bağlantılı**, bölgenin potansiyel fonksiyonun küresel olarak kurulmasını engelleyen bir delik içermemesi anlamında kullanılır. Bu koşullar altında $M_y=N_x$ eşitliği yalnız gerekli değil, aynı zamanda tamlık için yeterlidir. Aşağıdaki uygulamalarda denklemler, test koşulunun yeterli olduğu bu tür uygun bölgelerde ele alınır.

:::

---

## Potansiyel Fonksiyonu Bulma: Mekanizma

$$
(2xy+3)\,dx+(x^2-1)\,dy=0.
$$

Test: $M=2xy+3,\ N=x^2-1 \Rightarrow M_y=2x,\ N_x=2x$ — eşit, denklem tam.

$F_x=M$'den başlayalım; $x$'e göre integral alırken $y$ sabit tutulur:

$$
F=\int(2xy+3)\,dx=x^2y+3x+g(y).
$$

::: {.notes}

Önce test koşulu kontrol edilir:

$$
M_y=\frac{\partial}{\partial y}(2xy+3)=2x,
\qquad
N_x=\frac{\partial}{\partial x}(x^2-1)=2x.
$$

Eşitlik uygun bölgede sağlandığı için ortak bir potansiyel fonksiyon aranabilir. $F_x=M$ koşulundan başlanırsa $x$'e göre integral alınır. Kısmi integral sırasında $y$ sabit bir parametre olarak kabul edilir:

$$
F(x,y)=\int(2xy+3)\,dx=x^2y+3x+g(y).
$$

Tek değişkenli integrallerde integral sabiti bir sayıdır. Burada ise $x$'e göre türev alındığında yalnız sayılar değil, $y$'ye bağlı her fonksiyon da sıfır verir. Bu nedenle kısmi integral, $F$ hakkındaki bütün bilgiyi belirlemez; $x$'e göre türevde görünmeyen kısım $g(y)$ ile temsil edilir. $g(y)$ rastgele eklenen bir terim değil, yalnız $F_x=M$ bilgisinden geri kazanılamayan parçadır. Eksik parça ikinci koşul olan $F_y=N$ kullanılarak belirlenir.

$F_x=M$ ile başlamak zorunlu değildir. Eğer $N$'nin $y$'ye göre integrali daha kolaysa simetrik yol seçilebilir:

$$
F(x,y)=\int N(x,y)\,dy+h(x).
$$

Bu kez $x$'e göre türev alındığında görünmeyen kısım $h(x)$ olur ve $F_x=M$ koşulundan belirlenir. Hangi yoldan başlanacağı matematiksel bir zorunluluk değil, daha kolay kısmi integrali seçme kararıdır.

:::

---

## Potansiyel Fonksiyonu Bulma: Tamamlama

$$
F_y=x^2+g'(y) \stackrel{!}{=} N=x^2-1
\quad\Longrightarrow\quad
g'(y)=-1
\quad\Longrightarrow\quad
g(y)=-y.
$$

$$
F(x,y)=x^2y+3x-y.
$$

Çözüm ailesi, $F$'nin kendisi değil, $F=C$ eşitliğidir:

$$
\boxed{x^2y+3x-y=C.}
$$

::: {.notes}

$F=x^2y+3x+g(y)$ ifadesinin $y$'ye göre kısmi türevi

$$
F_y=x^2+g'(y)
$$

olur. Bu türev $N=x^2-1$ ile aynı olmalıdır. Ortak $x^2$ terimleri çıkarıldığında $g'(y)=-1$ ve dolayısıyla $g(y)=-y+K$ elde edilir. $K$ sayısal sabiti son çözüm sabitinin içine alınabileceğinden potansiyel

$$
F(x,y)=x^2y+3x-y
$$

olarak seçilebilir.

$F(x,y)$ potansiyel fonksiyondur; diferansiyel denklemin çözüm ailesi ise bu fonksiyonun seviye eğrileridir:

$$
F(x,y)=C.
$$

Her farklı $C$ değeri farklı bir çözüm eğrisi verir. Bu eğriler boyunca $F$ sabit olduğundan $dF=0$ ve dolayısıyla $M\,dx+N\,dy=0$ olur. $N=F_y\neq0$ olan noktalarda yerel eğim

$$
\frac{dy}{dx}
=-\frac{F_x}{F_y}
=-\frac{M}{N}
$$

biçimindedir. Diferansiyel denklem seviye eğrilerinin yerel eğim ilişkisini verir; tam diferansiyel yöntemi ise bu yerel bilgiden seviye eğrileri ailesini yeniden kurar. Sonucun yalnız $F(x,y)$ olarak yazılması bu aileyi belirtmez; çözüm mutlaka $F(x,y)=C$ biçiminde tamamlanmalıdır.

:::

---

## Karşı Örnek: Test Koşulu Sağlanmıyor

$$
y^2\,dx+3xy\,dy=0.
$$

$$
M=y^2,\ N=3xy
\quad\Longrightarrow\quad
M_y=2y,\ \ N_x=3y.
$$

$2y\neq3y$ (genel olarak, $y\neq0$ iken), dolayısıyla bu denklem **tam değildir**.

::: {.notes}

Bu denklemde

$$
M(x,y)=y^2,
\qquad
N(x,y)=3xy
$$

olduğundan

$$
M_y=2y,
\qquad
N_x=3y
$$

elde edilir. İki ifade $y=0$ doğrusu üzerinde aynı değeri, yani sıfırı alır. Ancak tamlık testi tek tek noktalarda veya tek bir eğri üzerinde yapılmaz; denklemin ele alındığı açık bir bölgenin tamamında $M_y=N_x$ özdeşliğinin sağlanması gerekir.

$2y=3y$ eşitliği yalnız $y=0$ için doğrudur. $y=0$ doğrusunun çevresindeki herhangi bir açık bölgede $y\neq0$ olan noktalar da bulunur ve bu noktalarda $2y\neq3y$ olur. Bu nedenle katsayılar ilgili bölgede aynı potansiyel fonksiyonun kısmi türevleri olamaz ve denklem tam değildir. Tek bir noktadaki ya da tek bir çözüm adayı üzerindeki uyum, bölgesel tamlık sonucunu vermez.

“Tam değil” sonucu denklemin hiçbir yöntemle çözülemeyeceği anlamına gelmez. Yalnız doğrudan $F_x=M$, $F_y=N$ koşullarından potansiyel kurma yöntemi uygulanamaz. Bazı tam olmayan denklemler başka yöntemlerle çözülebilir veya uygun bir integrasyon çarpanıyla tam hâle getirilebilir; bu ikinci durum bir sonraki notun konusudur.

:::

---

## Sık Yapılan Hata

$g(y)$ yerine doğrudan $g(y)=C$ (bir sayı) yazmak.

$$
F=x^2y+3x+g(y),
\qquad
\text{yanlış varsayım: } g(y)=C
\quad\Longrightarrow\quad
F=x^2y+3x+C.
$$

Bu, $F_y=N$ kontrolünü **atlar** ve $-y$ terimini kaybeder.

::: {.notes}

Tam diferansiyel denklemlerde aşağıdaki hatalar özellikle sık görülür.

**1. Yanlış türevleri karşılaştırmak.** Tamlık testi

$$
M_y=N_x
$$

eşitliğidir. $M_x$ ile $N_y$'yi veya aynı fonksiyonun iki farklı türevini karşılaştırmak potansiyel fonksiyonun karışık türev uyumunu sınamaz. Alt indis, hangi değişkene göre kısmi türev alındığını açıkça göstermelidir.

**2. Testi yalnız bir noktada yapmak.** $M_y$ ile $N_x$ bazı noktalarda tesadüfen eşit olabilir. Tamlık için eşitlik, denklemin ele alındığı uygun açık bölgenin tamamında fonksiyon özdeşliği olarak sağlanmalıdır. Tek bir başlangıç noktasında veya tek bir doğru üzerinde elde edilen eşitlik yeterli değildir.

**3. Eksik tek değişkenli fonksiyonu unutmak.** $F_x=M$ eşitliği $x$'e göre integre edildiğinde sonuç

$$
F=\int M\,dx+g(y)
$$

biçimindedir. $g(y)$'yi doğrudan sayısal sabit kabul etmek, $x$'e göre türevde görünmeyen bütün $y$ bağımlılığını kaybettirir. Simetrik olarak $F_y=N$ ile başlanırsa $h(x)$ terimi eklenmelidir. Bu fonksiyonun biçimi diğer kısmi türev koşuluyla belirlenmeden potansiyel tamamlanmış sayılmaz.

**4. Potansiyeli çözüm ailesi sanmak.** Elde edilen $F(x,y)$ yalnız potansiyel fonksiyondur. Diferansiyel denklemin çözümü

$$
F(x,y)=C
$$

biçimindeki seviye eğrileri ailesidir. Son eşitlik kurulmazsa integral sabiti ve çözüm ailesi belirtilmemiş olur.

**5. Tam olmayan denklemde potansiyel aramayı sürdürmek.** Test koşulu bölgede sağlanmıyorsa doğrudan $F_x=M$, $F_y=N$ koşullarını birlikte sağlayan bir potansiyel yoktur. Bu durumda kısmi integralleri zorla eşleştirmeye devam etmek çelişkili ifadeler üretir. Önce başka bir çözüm yöntemi veya denklemi tam hâle getirecek bir integrasyon çarpanı gerekip gerekmediği değerlendirilmelidir.

:::

---

## Pekiştirme

$$
(3x^2y+2)\,dx+(x^3+y)\,dy=0
$$

denklemi tam mıdır? Tamsa, $F(x,y)=C$ çözüm ailesini bulunuz.

::: {.notes}

Bu soruda çözüm doğrudan verilmemektedir. Aşağıdaki düşünsel sıra izlenmelidir:

1. $dx$ ve $dy$ katsayılarından $M(x,y)$ ile $N(x,y)$ fonksiyonlarını belirle.
2. $M_y$ ve $N_x$ kısmi türevlerini ayrı ayrı hesapla.
3. Bu iki ifadenin uygun bölgede eşit olup olmadığını kontrol ederek tamlık kararını ver.
4. Denklem tamsa $\int M\,dx$ ile $\int N\,dy$ seçeneklerini karşılaştır ve daha kolay olan kısmi integralden başla.
5. İlk integralin bıraktığı $g(y)$ veya $h(x)$ fonksiyonunu diğer kısmi türev koşulunu kullanarak belirle.
6. Potansiyel fonksiyonu tamamladıktan sonra sonucu $F(x,y)=C$ biçiminde yaz.

Her adım bir öncekini doğrular. Özellikle test yapılmadan potansiyel aramaya başlamak ve ilk integralden sonra eksik tek değişkenli fonksiyonu atlamak, çözümün yanlış kurulmasına yol açar.

:::

---

## Sonraki Adım: Tam Olmayan Denklemler

Tamlık testi başarısız olduğunda denklem çözümsüz olmak zorunda değildir. Uygun bir $\mu$ fonksiyonu

$$
\mu M\,dx+\mu N\,dy=0
$$

ifadesini tam hâle getirebilir. Sonraki kavram, bu **integrasyon çarpanını** hangi koşullarda bulabileceğimizdir.

::: {.notes}

Bu notta izlenen karar sırası şudur: denklem $M\,dx+N\,dy=0$ biçimine getirilir, uygun bir bölgede $M_y=N_x$ testi yapılır ve test geçerse ortak potansiyel $F$ kurulur. Testin başarısız olması yalnızca doğrudan potansiyel yönteminin kullanılamadığını gösterir; denklemin hiçbir yöntemle çözülemeyeceği anlamına gelmez.

Önemli bir sonraki durum, denklemin sıfır olmayan bir $\mu$ fonksiyonuyla çarpıldıktan sonra tam olmasıdır. İntegrasyon çarpanı notunda önce $\mu=\mu(x)$ ve $\mu=\mu(y)$ özel durumları incelenecek; bulunan çarpandan sonra burada kurulan tamlık testi ve potansiyel oluşturma adımları aynen yeniden kullanılacaktır.

:::

---
