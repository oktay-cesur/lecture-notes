---
title: "Homojen Tip Denklemler"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-07-26
execute:
  echo: false
---

## Ayrılabilir Olmayanı Ayrılabilir Yapmak

$$
y'=\frac{x^2+y^2}{xy}
$$

Sağ taraf bir $x$ ve bir $y$ fonksiyonunun çarpımı değil — ayrılabilir değil.

→ Uygun bir değişken dönüşümü bu denklemi ayrılabilir yapabilir mi?

::: {.notes}

Ayrılabilir denklemler konusunda sağ tarafın $g(x)h(y)$ biçiminde çarpanlara ayrılmasını istiyorduk. Bu denklemde böyle bir ayrışma yok: $x^2+y^2$ ifadesi çarpanlarına ayrılmıyor. Doğrudan integral de işlemez, çünkü sağ tarafta $y$ var. Elimizdeki iki yöntem de burada durur.

Buna karşılık sağ taraf gelişigüzel de değil. Pay ve paydayı $x^2$ ile bölersek ifade $\bigl(1+(y/x)^2\bigr)/(y/x)$ hâline gelir; $x$ ve $y$ ayrı ayrı değil, yalnız $y/x$ oranı üzerinden görünür. Bu konunun fikri şudur: böyle bir yapı varsa, oranın kendisini yeni bir bilinmeyen olarak alıp denklemi ayrılabilir bir denkleme dönüştürebiliriz. Yeni bir çözüm yöntemi öğrenmiyoruz; elimizdeki yöntemin uygulanabileceği bir biçime geçmenin yolunu kuruyoruz.

:::

---

## Tanım: homojen tip denklem

Bir birinci mertebe denklem

$$
y'=F\left(\frac{y}{x}\right)
$$

biçiminde yazılabiliyorsa **homojen tip**tir.

::: {.notes}

Tanım tek bir şeye bakar: sağ taraf, $x$ ve $y$'ye ayrı ayrı değil, yalnızca $y/x$ oranına bağlı mı? Bağlıysa denklem homojen tiptir ve $F$, bu oranı alıp eğimi veren tek değişkenli fonksiyondur. Örneğin $y'=\bigl(1+(y/x)^2\bigr)/(y/x)$ denkleminde $F(v)=(1+v^2)/v$'dir.

Bu notta “homojen tip” ifadesi, doğrudan $y'=F(y/x)$ yapısını adlandırır. Homojen fonksiyonların derece üzerinden kurulan daha genel tanımı ayrı bir kavramdır; bu yöntemin uygulanması için gereken ölçüt oran yapısıdır. Oran $y/x$ olduğu için bütün hesap $x\neq 0$ olan aralıklarda yürütülür.

:::

---

## Terim Uyarısı: iki farklı "homojen"

- **Homojen tip:** $y'=F(y/x)$ yapısı
- **Homojen lineer:** $y'+p(x)y=0$, yani sağ taraf sıfır

Aynı sözcük, ilgisiz iki kavram.

::: {.notes}

Bu iki kavramın tek ortak yanı adlarıdır. Homojen tip, sağ tarafın oran cinsinden yazılabilmesiyle ilgilidir; homojen lineer denklem ise standart biçime getirilmiş bir lineer denklemde sağ tarafın sıfır olmasıdır. Testleri bile farklı yerde çalışır: birincisinde sağ tarafı $y/x$ cinsinden yazmayı deneriz, ikincisinde denklemi $y'+p(x)y=q(x)$ biçimine getirip $q(x)$'in sıfır olup olmadığına bakarız.

Bir denklem ikisinden birine, ikisine birden ya da hiçbirine ait olabilir. Örneğin $y'=y/x$ hem homojen tiptir ($F(v)=v$) hem de homojen lineerdir ($y'-y/x=0$). Buna karşılık $y'=(x^2+y^2)/(xy)$ homojen tiptir ama lineer bile değildir. İkinci kavramın kendi teorisi lineer denklemlerin genel teorisinde kurulacak; burada yalnız adlandırma çakışması not ediliyor.

:::

---

## Tanıma testi: ölçekleme

$f(x,y)$ sağ tarafı, her $t>0$ için

$$
f(tx,ty)=f(x,y)
$$

sağlıyorsa denklem homojen tiptir.

::: {.notes}

Sağ tarafı $y/x$ cinsinden yazmayı denemek yerine kullanılabilecek daha hızlı bir ölçüt var: $x$ ve $y$'yi aynı $t$ katsayısıyla büyütün, sağ taraf değişmiyorsa denklem homojen tiptir. İki koşulun aynı şey olduğunu görmek kolaydır. Sağ taraf ölçekleme altında değişmiyorsa, $x>0$ için özel olarak $t=1/x$ seçebiliriz: $f(x,y)=f(1,y/x)$. Sağ taraf artık tek bir değişkenin, $y/x$ oranının fonksiyonudur; $F(v)=f(1,v)$ tanımlanır. Ters yön açıktır, çünkü $ty/(tx)=y/x$'tir.

Test pratikte sadeleşme sayarak yürür. $f(x,y)=(x^2+y^2)/(xy)$ için pay $t^2$ ile, payda da $t^2$ ile çarpılır ve $t$'ler götürür — homojen tip. Pay ve paydanın aynı dereceden olması aranan şeydir; dereceler tutmuyorsa götürecek bir şey kalmaz.

:::

---

## Hızlı kontrol: tanıma

$$
y'=\frac{x+y}{x}=1+\frac{y}{x}
\quad\Longrightarrow\quad
F(v)=1+v.
$$

::: {.notes}

Bu denklemde payı paydaya terim terim bölmek yeter; sağ taraf $1+y/x$ olarak yazılır ve $F(v)=1+v$ okunur. Ölçekleme testi de aynı sonucu verir: $(tx+ty)/(tx)=(x+y)/x$.

Bir ara adım burada gizlidir. $1$ sabiti $y/x$ oranını içermiyor gibi görünse de tanımı bozmaz, çünkü sabit fonksiyon da $v$'nin bir fonksiyonudur — $F$'nin $v$'ye gerçekten bağlı olması gerekmiyor, yalnız $x$ ve $y$'ye ayrı ayrı bağlı olmaması gerekiyor.

:::

---

## Hızlı kontrol: karşı örnek

$$
y'=\frac{y}{x}+x
$$

$y/x$ görünüyor, ama yalnız başına değil.

::: {.notes}

Sağ tarafta $y/x$ oranını görmek tek başına yeterli değildir; sağ tarafın tamamının bu oranın fonksiyonu olması gerekir. Buradaki fazladan $x$ terimi yapıyı bozar. Ölçekleme testi bunu tek satırda gösterir: $ty/(tx)+tx=y/x+tx$, yani $t$ yok olmuyor.

Bu, sınıflandırmada en sık yapılan hatanın kaynağıdır. Denklemde bir yerde $y/x$ görüldüğünde dönüşüm hemen uygulanmaya çalışılır; $v=y/x$ konursa $xv'=F(v)-v$ yerine sağ tarafında hâlâ $x$ bulunan bir denklem çıkar ve ayrılabilir olmaz. Sınıflandırmayı hesaba başlamadan bitirmek bu yolu kapatır.

:::

---

## Dönüşüm

Oran değişkeni:

$$
v=\frac{y}{x}, \qquad y=vx.
$$

Çarpım kuralıyla:

$$
y'=v+xv'.
$$

::: {.notes}

Bilinmeyeni değiştiriyoruz: aranan fonksiyon artık $y$ değil, $v(x)=y(x)/x$ oranı. Denklemde $y$ yerine $vx$ yazabilmek için $y$'nin türevine ihtiyaç var; $y=vx$ iki $x$-bağımlı çarpanın çarpımı olduğundan çarpım kuralı uygulanır ve $y'=v'x+v$ elde edilir.

Bu satır yöntemin en kritik yeridir. En yaygın hata, $v$'yi sabit bir sayı gibi görüp $y'=v$ ya da $y'=xv'$ yazmaktır. $v$ bir sayı değil, $x$'in bir fonksiyonudur — $y$'nin bilinmeyen olması gibi $v$ de bilinmeyendir. İki terimden biri düşerse denklem baştan yanlış kurulur ve sonraki bütün adımlar boşa gider.

:::

---

## Dönüşümün sonucu

$$
v+xv'=F(v)
\quad\Longrightarrow\quad
xv'=F(v)-v
$$

Sağ taraf yalnız $v$'ye bağlı → **ayrılabilir**.

$$
\frac{dv}{F(v)-v}=\frac{dx}{x}
$$

::: {.notes}

$y'=v+xv'$ ifadesini denklemde yerine koyunca $v+xv'=F(v)$ olur; $v$ sola alınırsa $xv'=F(v)-v$ kalır. Sağ tarafta yalnız $v$, sol tarafta $x$ ile çarpılmış $v'$ var — bu tam olarak ayrılabilir denklem yapısıdır: $g(x)=1/x$ ve $h(v)=F(v)-v$.

Yöntem böylece üç adıma iner: sağ tarafı $F(y/x)$ biçiminde tanı, $v=y/x$ dönüşümüyle $xv'=F(v)-v$ denklemini kur, bu ayrılabilir denklemi çöz. Dördüncü bir adım da var ve unutulması bir hata sayılır: sonuçta $v$ yerine $y/x$ geri yazılır. Soru $y$ hakkında sorulmuştur, $v$ yalnızca hesabı yürütmek için kurulmuş yardımcı bir değişkendir.

:::

---

## Kurucu örnek

$$
y'=\frac{x^2+y^2}{xy}
$$

Pay ve paydayı $x^2$'ye bölelim:

$$
y'=\frac{1+(y/x)^2}{y/x}
\quad\Longrightarrow\quad
F(v)=\frac{1+v^2}{v}
$$

::: {.notes}

İlk iş sağ tarafı oran cinsinden görmektir. Pay ve payda burada ikinci dereceden olduğu için ikisini de $x^2$'ye böleriz: pay $1+(y/x)^2$, payda $(xy)/x^2=y/x$ olur. İfade artık yalnız $y/x$ içerir ve $F(v)=(1+v^2)/v$ okunur.

Bölünecek kuvvetin seçimi mekanik bir iştir: pay ve paydanın ortak derecesi neyse $x$'in o kuvvetine bölünür. Derece iki ise $x^2$, derece bir ise $x$. Yanlış kuvvet seçilirse ifadede tek başına $x$ terimleri kalır ve bu, çoğu zaman denklemin homojen tip olmadığının değil, bölmenin yanlış yapıldığının işaretidir.

:::

---

## Kurucu örnek: $v$ cinsinden çözüm

$$
xv'=\frac{1+v^2}{v}-v=\frac{1}{v}
$$

$$
v\,dv=\frac{dx}{x}
\quad\Longrightarrow\quad
\frac{v^2}{2}=\ln|x|+C
$$

::: {.notes}

$F(v)-v$ farkını alırken paydaları eşitlemek gerekir: $(1+v^2)/v-v=(1+v^2-v^2)/v=1/v$. Bu sadeleşme yöntemin tipik davranışıdır — $F(v)$ içindeki $v$'ye bağlı ağır terimler çoğu zaman çıkarma sonrasında birbirini götürür ve geriye çok daha basit bir ifade kalır.

Kalan denklem $xv'=1/v$, yani $v\,dv=dx/x$. İki tarafın integrali alınır: $v^2/2=\ln|x|+C$. Logaritmanın içindeki mutlak değer düşürülmemelidir; $x$ negatif aralıklarda da çalışıyoruz ve $x=0$ zaten dönüşümün dışında.

:::

---

## Kurucu örnek: geri dönüş

$v=\dfrac{y}{x}$ geri yazılır:

$$ 
\frac{y^2}{2x^2}=\ln|x|+C
\quad\Longrightarrow\quad
y^2=2x^2\left(\ln|x|+C\right)
$$

Gerçek ve özgün denklemde geçerli bir çözüm için:

$$
x\neq0,\qquad y\neq0,\qquad \ln|x|+C>0.
$$

::: {.notes}

$v=y/x$ konunca $v^2/2=y^2/(2x^2)$ olur; iki tarafı $2x^2$ ile çarparsak $y^2=2x^2(\ln|x|+C)$ elde edilir. Açık biçim

$$
y=\pm x\sqrt{2(\ln|x|+C)}
$$

olarak yazılabilir; ancak artı ve eksi işaretleri tek bir çözüm aralığında birbirine geçirilebilen dallar değildir.

Özgün denklemde payda $xy$ olduğu için hem $x=0$ hem de $y=0$ dışarıda kalır. Bu nedenle yalnız kök içinin negatif olmaması yetmez; $\ln|x|+C=0$ olduğunda $y=0$ çıkar ve diferansiyel denklem tanımsız olur. Geçerli koşul sıkı eşitsizliktir:

$$
\ln|x|+C>0.
$$

Bir çözüm aralığı $x=0$ noktasını geçemez ve seçilen $y$ dalı bu aralıkta sıfıra değmeden sabit işaretli kalır. Sınır noktaları, örtük bağıntıyı sağlasa bile özgün diferansiyel denklemin çözümüne dahil değildir.

Doğrulama için $y^2=2x^2(\ln|x|+C)$ bağıntısının türevi alınır:

$$
2yy'=4x(\ln|x|+C)+2x.
$$

$y^2=2x^2(\ln|x|+C)$ kullanılırsa

$$
y'=\frac{y^2+x^2}{xy},
$$

yani özgün denklem, yalnız $xy\neq0$ olan seçilmiş çözüm aralığında yeniden elde edilir.

:::

---

## İkinci örnek

$$
y'=\frac{y^2-x^2}{2xy}
\quad\Longrightarrow\quad
F(v)=\frac{v^2-1}{2v}
$$

$$
xv'=\frac{v^2-1}{2v}-v=-\frac{v^2+1}{2v}
$$

::: {.notes}

Pay ve payda yine ikinci dereceden, bu yüzden $x^2$'ye bölünür: pay $(y/x)^2-1$, payda $2(y/x)$ olur ve $F(v)=(v^2-1)/(2v)$ çıkar. İlk örnekte pay toplam, burada farktı; yöntem bu ayrımdan etkilenmez.

Fark alma adımı burada işaret açısından dikkat ister: $(v^2-1)/(2v)-v=(v^2-1-2v^2)/(2v)=-(v^2+1)/(2v)$. Paydayı eşitlerken $v$'nin $2v^2/(2v)$ olarak yazılması gerekir; bu terim unutulursa sonuç işaretiyle birlikte yanlış çıkar. Sağ tarafın işareti negatif olduğu için ayırma sonrasında $dx/x$ tarafında bir eksi bekliyoruz.

:::

---

## İkinci örnek: çözüm

$$
\frac{2v}{v^2+1}\,dv=-\frac{dx}{x}
\quad\Longrightarrow\quad
\ln(v^2+1)=-\ln|x|+C_1
$$

$$
x(v^2+1)=C
\quad\Longrightarrow\quad
\boxed{x^2+y^2=Cx}
$$

Çözüm eğrileri, $x\neq0$ ve $y\neq0$ olan bağlantılı yaylarla sınırlandırılır.

::: {.notes}

Ayırınca $\frac{2v}{v^2+1}dv=-\frac{dx}{x}$ elde edilir. Sol taraftaki integral doğrudan tanınır: pay, paydanın türevidir, yani sonuç $\ln(v^2+1)$'dir. Mutlak değere gerek yok, çünkü $v^2+1$ her zaman pozitiftir. İki logaritma tek tarafta toplanıp üstel alınırsa $x(v^2+1)=C$ kalır. Geri dönüşte $v=y/x$ konur: $x\bigl(y^2/x^2+1\bigr)=y^2/x+x=C$, iki taraf $x$ ile çarpılırsa $x^2+y^2=Cx$ bulunur.

Doğrulama örtük biçimde yapılır. $x^2+y^2=Cx$ ifadesinin $x$'e göre türevi $2x+2yy'=C$'dir; buradan $C$'yi denklemin kendisinden gelen $(x^2+y^2)/x$ değeriyle değiştirirsek $2yy'=(x^2+y^2)/x-2x=(y^2-x^2)/x$, yani $y'=(y^2-x^2)/(2xy)$ — orijinal denklem.

Sonucu tamamlayarak kareye tamamlarsak $(x-C/2)^2+y^2=(C/2)^2$ çıkar: merkezi $x$ ekseni üzerinde olan ve orijinden geçen çemberler ailesi. İlk örnek logaritmik ve örtük bir çözüm vermişti, bu örnek geometrik olarak okunabilen bir aile veriyor.

Özgün denklem $xy$ paydasını içerdiği için çemberlerin $x=0$ veya $y=0$ olan noktaları çözüme dahil değildir. Her çözüm, bu noktalarla ayrılan bağlantılı bir çember yayı üzerinde ele alınır. Özellikle $C=0$ yalnız $(0,0)$ noktasını verir ve geçerli bir çözüm eğrisi oluşturmaz.

:::

---

## Kaybolabilen doğru çözümler

$F(v_0)=v_0$ ise $v=v_0$ sabit çözümdür:

$$
y=v_0x \quad (\text{orijinden geçen doğru})
$$

Ayırma sırasında $F(v)-v$'ye bölündüğü için bu çözüm düşebilir.

::: {.notes}

$xv'=F(v)-v$ denkleminde sağ tarafı sıfırlayan bir $v_0$ varsa, $v=v_0$ sabit fonksiyonu bu denklemi sağlar. Orijinal değişkenlere dönüldüğünde bu, $y=v_0x$ doğrusudur — orijinden geçen bir doğru çözüm. Ayırma adımında $F(v)-v$ ifadesine böldüğümüz için bu çözümler genel formülden düşebilir; ayrılabilir denklemlerde sabit çözümler için yaptığımız kontrolün buradaki karşılığıdır.

Somut bir örnek: $y'=y^2/x^2$, yani $F(v)=v^2$. $F(v)=v$ denkleminden $v=0$ ve $v=1$ çıkar, yani $y=0$ ve $y=x$ doğruları çözümdür ($y=x$ için $y'=1$ ve $y^2/x^2=1$). Genel çözümü hesaplarsak $(v-1)/v=Cx$, yani $y-x=Cxy$ buluruz. $y=x$ bu formülde $C=0$ ile duruyor, ama $y=0$ hiçbir $C$ için elde edilemez — kaybolan çözüm odur.

İlk iki örneğimizde böyle bir doğru yoktu: $(1+v^2)/v=v$ denklemi $1=0$ verir, $(v^2-1)/(2v)=v$ denklemi $v^2=-1$ verir; ikisinin de reel çözümü yok. Kontrolü yine de yapmak gerekir, çünkü sonucu önceden bilinmez.

:::

---

## Neden oran işe yarıyor?

$y'=F(y/x)$ ise sağ taraf ölçekleme altında değişmez.

- Orijinden çıkan bir ışın boyunca eğim **sabit**
- Bir çözüm eğrisinin orijine göre büyütülmüşü yine çözüm

::: {.notes}

Dönüşümün neden çalıştığının geometrik karşılığı yön alanındadır. $y/x$ oranı, orijinden $(x,y)$ noktasına giden ışının eğimidir; bu oran boyunca $F$ sabit kaldığına göre, aynı ışın üzerindeki bütün noktalarda yön alanının eğim parçaları birbirine paraleldir. Yön alanı orijine göre büyütme altında kendini tekrar eder. Denklemde gerçekten değişen tek şey ışının eğimi olduğu için, bilinmeyeni bu eğim olarak seçmek doğal bir tercihtir — dönüşüm bir hile değil, denklemin taşıdığı simetrinin okunmasıdır.

Bunun çözümler tarafındaki sonucu şudur: $y(x)$ bir çözümse, $\lambda y(x/\lambda)$ de her $\lambda>0$ için çözümdür. İkinci örnekteki $x^2+y^2=Cx$ ailesi bunun somut hâlidir; orijinden geçen bu çemberlerin her biri diğerinin orijin merkezli büyütülmüş kopyasıdır ve $C$ parametresi büyütme oranını verir.

:::

---

## Sık Yapılan Hatalar

1. $y'=v+xv'$ yerine $y'=xv'$ yazmak
2. $F(v)-v$ farkını almayı unutmak
3. Sonucu $v$ cinsinden bırakmak
4. Yanlış $x$ kuvvetine bölmek
5. İçinde $y/x$ geçen her denklemi homojen tip saymak
6. $F(v)=v$ köklerini kontrol etmemek

::: {.notes}

Birinci hata çarpım kuralının atlanmasıdır ve yöntemi baştan çökertir; $v$'nin $x$'e bağlı bir fonksiyon olduğu akılda tutulursa oluşmaz. İkincisi yerine koyma adımında ortaya çıkar: $v+xv'=F(v)$ yazılır ama soldaki $v$ sağa geçirilmeden ayırmaya geçilir, bu durumda sağ tarafta hâlâ $v$ artığı kalır. Üçüncüsü hesabın doğru yürütülüp sorunun cevaplanmamasıdır — $v$ yardımcı değişkendir, cevap $y$ cinsinden verilir.

Dördüncü hata sadeleştirme adımındadır. Pay ve paydanın ortak derecesi ne ise $x$'in o kuvvetine bölünür; yanlış kuvvet seçilince ifadede yalnız $x$'e bağlı terimler kalır ve denklem homojen tip değilmiş gibi görünür. Beşincisi karşı örnekte gördüğümüz durumdur: $y/x$ görmek yetmez, sağ tarafın tamamı o oranın fonksiyonu olmalıdır. Ölçekleme testi bu ikisini de hızla ayırt eder.

Altıncısı çözümün eksik kalmasına yol açar. $F(v)=v$ denkleminin kökleri orijinden geçen doğru çözümlere karşılık gelir ve bunların genel formülde bulunup bulunmadığı yalnız yerine koyarak anlaşılır.

:::

---

## Karar Soruları

1. $y'=\dfrac{y}{x^2}$ homojen tip mi?
2. $y'=\dfrac{y}{x}$ hangi sınıflara giriyor?
3. $y'=\dfrac{x+2y}{x-y}$ için $F(v)$ nedir?

::: {.notes}

Birincisinde cevap hayırdır. Ölçekleme testi: $ty/(tx)^2=y/(tx^2)$, $t$ götürmüyor. Nedeni derece uyuşmazlığıdır — pay birinci, payda ikinci derecedendir. Denklem yine de çözülür, çünkü ayrılabilirdir: $g(x)=1/x^2$, $h(y)=y$. Bir denklemin homojen tip olmaması onu zor yapmaz, yalnız başka bir sınıfa ait olduğunu gösterir.

İkincisi kasıtlı olarak sınırda seçilmiştir: $y'=y/x$ hem homojen tiptir ($F(v)=v$), hem ayrılabilirdir, hem de homojen lineerdir ($y'-y/x=0$). Sınıflar birbirini dışlamaz; bir denklem birden fazla yönteme açık olabilir ve pratikte en kısası seçilir. Burada dönüşüm uygulanırsa $xv'=F(v)-v=0$ çıkar, yani $v$ sabittir ve çözüm $y=Cx$ olur — bütün çözümler orijinden geçen doğrulardır.

Üçüncüsünde pay ve payda birinci dereceden olduğundan $x$'e bölünür: $F(v)=(1+2v)/(1-v)$. Bu, G5'teki ikinci soruya çok yakın bir yapıdır; oradaki hesabı yürütürken $F(v)-v$ farkının paydasının $1-v$ olacağını ve payın ikinci dereceden bir ifadeye dönüşeceğini şimdiden görebilirsiniz.

:::

---

## Sıradaki Yapı: Lineer Denklemler

$$
y'=x+y
$$

Ayrılabilir değil, homojen tip de değil.

Ama standart biçime geçince:

$$
y'-y=x
$$

::: {.notes}

Sınıflandırma listemiz büyüdü ama hâlâ dışarıda kalan denklemler var. $y'=x+y$ ayrılabilir değildir, çünkü sağ taraf toplamdır; homojen tip de değildir, çünkü ölçekleme testi $tx+ty=t(x+y)$ verir, $t$ götürmez. İki yöntem de burada durur.

Bu denklemin de bir yapısı var: $y$ ve $y'$ birinci kuvvetten görünüyor, birbiriyle çarpılmıyor ve bir fonksiyonun içine girmiyor. Terimler yeniden düzenlenirse $y'-y=x$ olur; bu, lineerlik ve otonomluk konusunda tanımladığımız lineer denklem yapısıdır. Sırada bu sınıfın kendi çözüm yöntemi var.

:::

---
