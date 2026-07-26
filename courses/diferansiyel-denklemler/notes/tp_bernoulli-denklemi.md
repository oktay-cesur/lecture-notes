---
title: "Bernoulli Denklemi"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-07-26
execute:
  echo: false
---

## Tanım

Bernoulli denklemi:

$$
y'+p(x)y=q(x)y^n,\qquad n\neq0,1.
$$

$n=0$ ve $n=1$ durumları zaten lineerdir; bu yüzden Bernoulli sınıfında ayrıca ele alınmaz.

::: {.notes}

Birinci mertebeden lineer bir denklemde bağımlı değişken $y$ ve türevi $y'$ yalnız birinci kuvvette bulunur. Bernoulli denkleminde sol taraftaki $y'+p(x)y$ ifadesi lineer yapıya sahiptir; ancak sağ taraftaki $q(x)y^n$ terimi, $n\neq0,1$ olduğunda bu lineerliği bozar. Dolayısıyla denklem ilk bakışta birinci mertebeden lineer denklem yöntemiyle doğrudan çözülemez.

Bu lineer olmama gelişigüzel değildir. $y$'nin sabit bir kuvveti, türev terimiyle belirli bir cebirsel ilişki içinde yer alır. Uygun bir değişken dönüşümü bu iki yapıyı aynı yeni değişken üzerinden ifade eder ve denklemi birinci mertebeden lineer denkleme indirger. Bu nedenle Bernoulli yöntemi, tamamen ayrı bir çözüm yöntemi olmaktan çok, lineer olmayan özel bir denklemi daha önce bilinen lineer denklem sınıfına taşıyan bir **indirgeme yöntemidir**. İndirgeme tamamlandıktan sonra “Birinci Mertebeden Lineer Denklemler” notundaki integrasyon çarpanı yöntemi kullanılır.

$n=0$ ve $n=1$ durumlarının dışarıda bırakılma nedeni doğrudan görülebilir. $n=0$ için $y^0=1$ olduğundan

$$
y'+p(x)y=q(x)
$$

elde edilir; bu zaten standart lineer biçimdir. $n=1$ için

$$
y'+p(x)y=q(x)y
$$

olur. Sağ taraftaki terim sola alındığında

$$
y'+\bigl(p(x)-q(x)\bigr)y=0
$$

biçiminde yine lineer bir denklem elde edilir. Bernoulli dönüşümüne yalnız $n\neq0,1$ durumlarında ihtiyaç duyulur.

:::

---

## Dönüşüm

$$
v=y^{1-n}.
$$

Türev:

$$
v'=(1-n)y^{-n}y'.
$$

Orijinal denklemi $y^{-n}$ ile çarpalım:

$$
y^{-n}y'+p(x)y^{1-n}=q(x).
$$

Bu ifade $v$ cinsinden lineer denkleme dönüşür.

::: {.notes}

Bernoulli dönüşümünün neden $v=y^{1-n}$ biçiminde seçildiğini görmek için önce denklemin yapısını değiştirmek gerekir. Orijinal denklem $y^{-n}$ ile çarpıldığında

$$
y^{-n}y'+p(x)y^{1-n}=q(x)
$$

elde edilir. Bu yeni eşitlikte bağımlı değişkene ilişkin iki temel ifade aynı anda ortaya çıkar:

$$
y^{1-n}
\qquad\text{ve}\qquad
y^{-n}y'.
$$

$v=y^{1-n}$ seçildiğinde ilk ifade doğrudan $v$ olur. Aynı seçimin türevi zincir kuralıyla

$$
v'=(1-n)y^{-n}y'
$$

biçimindedir. Böylece ikinci ifade de $y^{-n}y'=v'/(1-n)$ olarak yalnız $v'$ üzerinden yazılabilir. Dönüşümün temel başarısı, denklemdeki hem bağımlı değişken terimini hem de türev terimini aynı yeni değişkenle temsil etmesidir. Dolayısıyla $v=y^{1-n}$ rastgele seçilmiş bir kuvvet değişimi değildir; lineer denklemin gerektirdiği $v'$ ve $v$ yapısını eş zamanlı üretmek için belirlenir.

Burada önemli bir çözüm kaybı olasılığı vardır. Denklemi $y^{-n}$ ile çarpmak, ele alınan aralıkta $y\neq0$ kabulünü gerektirir. Bu nedenle dönüşümden önce $y=0$ fonksiyonunun orijinal diferansiyel denklemi sağlayıp sağlamadığı ayrıca kontrol edilmelidir. Sağlıyorsa $y=0$ ayrı bir çözüm olarak kaydedilir; ardından $y\neq0$ kabulü altında Bernoulli dönüşümü uygulanır. Dönüşümle elde edilen çözüm ailesinde $y=0$'ın görünmemesi, bu fonksiyonun orijinal denklemin çözümü olmadığı anlamına gelmez. Bu kontrol özellikle pozitif $n$ değerlerinde önemlidir; genel durumda $y=0$ ifadesinin denklemde tanımlı olup olmadığı da göz önünde bulundurulmalıdır.

:::

---

## $v$ İçin Lineer Denklem

$$
v'=(1-n)y^{-n}y'
\quad\Longrightarrow\quad
y^{-n}y'=\frac{v'}{1-n}.
$$

Yerine yazalım:

$$
\frac{v'}{1-n}+p(x)v=q(x).
$$

Dolayısıyla

$$
v'+(1-n)p(x)v=(1-n)q(x).
$$

Bu, $v$ için lineer bir denklemdir.

::: {.notes}

Dönüşüm bağıntısından

$$
y^{-n}y'=\frac{v'}{1-n}
$$

elde edilir. Bu ifade ve $y^{1-n}=v$ eşitliği dönüştürülmüş denklemde yerine yazıldığında

$$
\frac{v'}{1-n}+p(x)v=q(x)
$$

bulunur. $n\neq1$ olduğundan her iki taraf $1-n$ ile çarpılabilir:

$$
v'+(1-n)p(x)v=(1-n)q(x).
$$

Bu sonuç, bilinmeyeni $v$ olan birinci mertebeden lineer denklemdir. Bu noktada orijinal Bernoulli denklemi henüz tamamen çözülmüş değildir; yalnızca daha önce çözmeyi bildiğimiz bir denklem sınıfına indirgenmiştir. Bundan sonraki integrasyon çarpanı hesabı Bernoulli yöntemine özgü yeni bir işlem değil, “Birinci Mertebeden Lineer Denklemler” notunda kurulan standart yöntemdir.

Çözüm hattı dört ayrı aşama olarak okunmalıdır:

1. Denklemi $y'+p(x)y=q(x)y^n$ biçimine getir ve Bernoulli yapısını tanı.
2. $y=0$ olasılığını kontrol ettikten sonra $v=y^{1-n}$ dönüşümüyle lineer denkleme indirgeme yap.
3. Elde edilen denklemi yeni bağımlı değişken $v$ için integrasyon çarpanıyla çöz.
4. $v=y^{1-n}$ ilişkisini kullanarak orijinal değişken $y$'ye geri dön.

Bu ayrım, yöntemin tek parça bir formül ezberi olmadığını gösterir: ilk iki aşama indirgeme, üçüncü aşama lineer çözüm ve son aşama geri dönüş işlemidir.

:::

---

## Mekanizma Örneği

$$
y'+y=xy^3.
$$

Burada $n=3$.

$y^{-3}$ ile çarpalım:

$$
y^{-3}y'+y^{-2}=x.
$$

$$
v=y^{-2}
\quad\Longrightarrow\quad
v'=-2y^{-3}y'.
$$

::: {.notes}

Denklem

$$
y'+y=xy^3
$$

standart Bernoulli biçimiyle karşılaştırıldığında $p(x)=1$, $q(x)=x$ ve $n=3$ olarak okunur. Dönüşümden önce kaybolabilecek sıfır çözümü kontrol edilmelidir. $y=0$ ve dolayısıyla $y'=0$ orijinal denklemde yerine yazıldığında iki taraf da sıfır olur. Bu nedenle $y=0$ bu denklemin bir çözümüdür ve ayrıca kaydedilmelidir.

Diğer çözümler için $y\neq0$ kabul edilerek denklem $y^{-3}$ ile çarpılır:

$$
y^{-3}y'+y^{-2}=x.
$$

Genel dönüşüm formülü $v=y^{1-n}$ olduğundan $n=3$ için

$$
v=y^{1-3}=y^{-2}
$$

seçilir. Zincir kuralı $v'=-2y^{-3}y'$ eşitliğini verir. Böylece dönüştürülmüş denklemdeki $y^{-2}$ terimi doğrudan $v$, $y^{-3}y'$ terimi ise $-v'/2$ olur. Dönüşümün esas noktası tam olarak bu iki eşleşmedir.

$v=y^{-1}$ seçilseydi $v'=-y^{-2}y'$ olurdu. Oysa denklemde dönüştürülmesi gereken türev terimi $y^{-3}y'$ biçimindedir. Kuvvetler eşleşmediği için bu seçim türev terimini yalnız $v'$ cinsinden ifade etmez ve lineer bir $v$ denklemi üretmez. Doğru kuvvet, genel formülden ve zincir kuralındaki eşleşmeden belirlenmelidir.

:::

---

## Lineer Denkleme İndirgeme

$$
y^{-3}y'=-\frac{1}{2}v'.
$$

Bu yüzden

$$
-\frac{1}{2}v'+v=x.
$$

$$
v'-2v=-2x.
$$

Bu denklem lineerdir.

::: {.notes}

$v'=-2y^{-3}y'$ eşitliğinden

$$
y^{-3}y'=-\frac12v'
$$

elde edilir. Bu ifade ile $y^{-2}=v$ dönüştürülmüş denklemde yerine yazıldığında

$$
-\frac12v'+v=x
$$

bulunur. Her iki taraf $-2$ ile çarpılırsa

$$
v'-2v=-2x
$$

eşitliğine ulaşılır. Bernoulli indirgeme adımı bu satırda tamamlanmıştır.

Bu noktadan sonra $v$ bağımlı değişken, $x$ bağımsız değişkendir ve denklem standart lineer biçimdedir. Katsayılar $P(x)=-2$ ve $Q(x)=-2x$ olarak okunabilir. Artık başka bir Bernoulli dönüşümü yapılmaz; doğrudan integrasyon çarpanı

$$
\mu=e^{\int -2\,dx}=e^{-2x}
$$

hesaplanır ve bilinen lineer denklem yöntemi uygulanır. Böylece örneğin iki yöntemi birbirine bağlayan yeri açıkça görülür: Bernoulli dönüşümü lineer denklemi üretir, integrasyon çarpanı ise bu yeni denklemi çözer.

:::

---

## İlk Örnek: Lineer Denklemin Çözümü

$$
v'-2v=-2x,\qquad \mu=e^{-2x},
\qquad
(e^{-2x}v)'=-2xe^{-2x}.
$$

$$
e^{-2x}v=e^{-2x}\left(x+\frac12\right)+C
\quad\Longrightarrow\quad
\boxed{v=x+\frac12+Ce^{2x}}.
$$

::: {.notes}

Lineer denklem $v'-2v=-2x$ için integrasyon çarpanı $\mu=e^{-2x}$'tir. Denklem bu çarpanla çarpıldığında $(e^{-2x}v)'=-2xe^{-2x}$ elde edilir. Sağ tarafın integrali $e^{-2x}(x+1/2)$ olduğundan $v=x+1/2+Ce^{2x}$ bulunur.

Bu sonuç dönüştürülmüş denklemin çözümüdür. Orijinal problem $y$ değişkeniyle verildiği için çözüm henüz tamamlanmış değildir; $v=y^{-2}$ ilişkisine geri dönmek gerekir.

:::

---

## İlk Örnek: Geri Dönüş

$$
y^{-2}=x+\frac12+Ce^{2x}.
$$

::: {.notes}

Lineer denklem $v'-2v=-2x$ için integrasyon çarpanı $\mu=e^{-2x}$'tir. Denklem bu çarpanla çarpıldığında

$$
(e^{-2x}v)'=-2xe^{-2x}
$$

elde edilir. Sağ tarafın integrali

$$
\int -2xe^{-2x}\,dx
=e^{-2x}\left(x+\frac12\right)
$$

olduğundan

$$
e^{-2x}v=e^{-2x}\left(x+\frac12\right)+C
$$

ve buradan $v=x+\frac12+Ce^{2x}$ bulunur. Ancak $v$ için bulunan bu ifade orijinal problemin nihai çözümü değildir; çünkü başlangıçtaki bağımlı değişken $y$'dir.

$v=y^{-2}$ ilişkisi geri kullanıldığında

$$
y^{-2}=x+\frac12+Ce^{2x}
$$

elde edilir. Bu kuvvet biçimi çözümü ifade etmek için yeterlidir. İstenirse açık biçime geçilerek

$$
y=\pm\frac{1}{\sqrt{x+\frac12+Ce^{2x}}}
$$

yazılabilir. Fakat açık biçim, gerçek değerli çözüm için ek bir tanım koşulunu görünür kılar: kök içindeki

$$
x+\frac12+Ce^{2x}
$$

ifadesi pozitif olmalıdır. Çözüm aralığı bu ifadenin pozitif kaldığı ve sıfır olmadığı bağlantılı bir aralık olarak seçilir. Artı ve eksi işaretleri bu aralıklar üzerindeki iki ayrı çözüm dalını gösterir.

Dönüşüm sırasında $y\neq0$ kabul edildiği için $y=0$ çözümü bu aile içinde görünmez. Bununla birlikte $y=0$, orijinal $y'+y=xy^3$ denklemini sağladığından ayrı bir çözüm olarak korunmalıdır. Dönüşümle bulunan çözüm ailesi ile dönüşüm öncesinde kaydedilen sıfır çözümü birlikte düşünülmelidir.

:::

---

## İkinci Örnek ($n=2$)

$$
y'-y=xy^2.
$$

$y^{-2}$ ile çarpalım:

$$
y^{-2}y'-y^{-1}=x.
$$

$$
v=y^{-1}\quad\Longrightarrow\quad v'=-y^{-2}y'.
$$

::: {.notes}

Bu denklemde Bernoulli üssü $n=2$'dir. İlk örnekte dönüşümün neden çalıştığı ayrıntılı biçimde kurulduğu için burada aynı mekanizma daha hızlı uygulanabilir. Genel formülden

$$
v=y^{1-n}=y^{-1}
$$

doğrudan okunur. Zincir kuralı da

$$
v'=-y^{-2}y'
$$

eşitliğini verir.

Denklemi $y^{-2}$ ile çarpmadan önce $y=0$ çözümü kontrol edilmelidir. $y=0$ ve $y'=0$ orijinal

$$
y'-y=xy^2
$$

denkleminde yerine yazıldığında eşitlik sağlanır. Dolayısıyla $y=0$ ayrı bir çözümdür. Sıfırdan farklı çözümleri bulmak için $y\neq0$ kabulüyle denklem $y^{-2}$ ile çarpılır ve $y^{-2}y'-y^{-1}=x$ elde edilir.

Bu örnekte dönüşüm özellikle doğrudandır: $y^{-1}$ terimi $v$, $y^{-2}y'$ terimi ise $-v'$ olur. İlk örnekteki $-2$ katsayısı burada bulunmadığı için indirgeme daha az cebirsel işlem gerektirir. Örneğin pedagojik amacı dönüşümün gerekçesini yeniden kurmak değil, tanınan yapıyı daha hızlı uygulamaktır.

:::

---

## İkinci Örnek: Lineer Çözüm

$$
-v'-v=x
\quad\Longrightarrow\quad
v'+v=-x.
$$

$$
\mu=e^{x}.
\qquad
(e^xv)'=-xe^x.
$$

$$
e^xv=-xe^x+e^x+C
\quad\Longrightarrow\quad
v=-x+1+Ce^{-x}.
$$

::: {.notes}

$y^{-2}y'=-v'$ ve $y^{-1}=v$ eşitlikleri dönüştürülmüş denklemde yerine yazıldığında $v'+v=-x$ lineer denklemi elde edilir. İntegrasyon çarpanı $\mu=e^x$ olduğundan sol taraf $(e^xv)'$ biçimine dönüşür.

$\int -xe^x\,dx=-xe^x+e^x$ hesabı sonucunda $v=1-x+Ce^{-x}$ bulunur. Çözümün $y$ cinsinden tamamlanması ve paydanın sıfır olduğu noktaların incelenmesi ayrı geri dönüş adımıdır.

:::

---

## İkinci Örnek: Geri Dönüş

$$
y^{-1}=1-x+Ce^{-x}
\quad\Longrightarrow\quad
y=\frac{1}{1-x+Ce^{-x}}.
$$

::: {.notes}

$y^{-2}y'=-v'$ ve $y^{-1}=v$ eşitlikleri dönüştürülmüş denklemde yerine yazıldığında

$$
-v'-v=x
$$

elde edilir. Her iki taraf $-1$ ile çarpılarak $v'+v=-x$ standart lineer denklemine ulaşılır. İntegrasyon çarpanı $\mu=e^x$ olduğundan

$$
(e^xv)'=-xe^x
$$

olur. Sağ tarafın integrali $\int -xe^x\,dx=-xe^x+e^x$ biçimindedir. Böylece

$$
v=1-x+Ce^{-x}
$$

bulunur.

Bu örnekte geri dönüş ilk örneğe göre daha kolaydır. $v=y^{-1}$ olduğundan doğrudan

$$
y=\frac{1}{1-x+Ce^{-x}}
$$

yazılır. Bununla birlikte bu açık formül bütün gerçek sayılarda tanımlı olmak zorunda değildir. Payda

$$
1-x+Ce^{-x}
$$

hangi noktalarda sıfır oluyorsa çözüm o noktalarda tanımsızdır. Bu nedenle her çözüm, paydanın sıfır olmadığı bağlantılı bir aralık üzerinde ele alınmalı ve çözüm aralığı paydanın bir sıfırını geçmemelidir.

Dönüşüm $y\neq0$ kabulü altında yapıldığı için bu kesirli çözüm ailesi $y=0$ çözümünü içermez. Ancak $y=0$ orijinal denklemi sağladığından ayrıca çözüm olarak kaydedilir. Böylece ikinci örnek, geri dönüşün kolay olduğu bir durumu gösterirken aynı zamanda kaybolan çözümün ve çözüm aralığının ayrıca incelenmesi gerektiğini ortaya koyar.

:::

---

## Karşı Örnek

$$
y'+y=x\sin y.
$$

Bu Bernoulli denklemi değildir.

Sağ taraf $q(x)y^n$ kuvvet biçiminde değil, $\sin y$ biçimindedir.

::: {.notes}

Bernoulli sınıfında doğrusal olmayan terim özel olarak

$$
q(x)y^n
$$

biçiminde olmalıdır. Burada $q(x)$ yalnız $x$'e bağlıdır ve $n$, $x$'e ya da $y$'ye göre değişmeyen sabit bir sayıdır. Bu sabit kuvvet yapısı, denklem $y^{-n}$ ile çarpıldığında $y^{1-n}$ ve $y^{-n}y'$ ifadelerinin birlikte ortaya çıkmasını sağlar; $v=y^{1-n}$ dönüşümü de tam olarak bu nedenle çalışır.

$y'+y=x\sin y$ denkleminde doğrusal olmayan terim $x\sin y$'dir. $\sin y$ ifadesi, sabit bir $n$ için $y^n$ biçiminde değildir. Bu nedenle herhangi bir Bernoulli üssü okunamaz ve $v=y^{1-n}$ dönüşümünü kuracak kuvvet eşleşmesi oluşmaz. Birinci mertebeden bir denklemin lineer olmaması, onun mutlaka Bernoulli sınıfında olduğu anlamına gelmez. Bernoulli yöntemi yalnız bu özel kuvvet yapısını taşıyan denklemlere uygulanabilir.

:::

---

## Sık Yapılan Hatalar

Dönüşümden sonra çözümü $v$ cinsinden bırakmak eksiktir.

Son adım her zaman:

$$
v=y^{1-n}
$$

ilişkisiyle $y$'ye geri dönmektir.

::: {.notes}

Bernoulli denklemlerinde üç hata özellikle sık görülür.

**1. Standart biçimi kurmadan katsayıları okumak.** Denklem önce

$$
y'+p(x)y=q(x)y^n
$$

biçimine getirilmelidir. $y'$ teriminin katsayısı $1$ değilse bütün denklem bu katsayıya bölünmeli; terimler doğru taraflara taşınmalı ve ancak bundan sonra $p(x)$, $q(x)$ ile sabit $n$ belirlenmelidir. İlk yazılıştaki katsayıları doğrudan okumak yanlış dönüşüme ve yanlış lineer denkleme yol açar.

**2. $y=0$ çözümünü kaybetmek.** Denklemi $y^{-n}$ ile çarpmak, $y\neq0$ kabulünü içerir. Bu işlemden önce $y=0$ fonksiyonu orijinal denklemde kontrol edilmelidir. Sıfır fonksiyonu denklemi sağlıyorsa ayrı bir çözüm olarak kaydedilmelidir. Dönüşüm sonrasında bulunan ailenin $y=0$'ı içermemesi, sıfır çözümünü geçersiz kılmaz; yalnız dönüşümün bu çözümü kapsam dışında bıraktığını gösterir.

**3. Çözümü $v$ cinsinde bırakmak.** Lineerleştirilmiş denklemin $v$ için çözülmesi, orijinal Bernoulli probleminin yalnız ara aşamasıdır. Sonuç mutlaka

$$
v=y^{1-n}
$$

ilişkisine geri yerleştirilmelidir. Geri dönüş açık bir $y=$ formu verebilir veya çözüm kuvvet biçiminde kalabilir. Her iki durumda da kök, payda ve kuvvet ifadelerinin tanım koşulları incelenmeli; gerçek değerli çözümün geçerli olduğu aralık ayrıca belirlenmelidir.

:::

---

## Karar Soruları

1. Denklem Bernoulli biçimine geliyor mu?
2. $n$ sabit ve $n\neq0,1$ mi?
3. $y=0$ özgün denklemi sağlıyor mu?
4. $v=y^{1-n}$ hangi lineer denklemi veriyor?
5. Geri dönüş hangi aralıkta tanımlı?

::: {.notes}

İlk iki soru Bernoulli yönteminin uygulanabilirliğini sınar. Üçüncü soru, $y^{-n}$ ile çarpma sırasında kaybolabilecek sıfır çözümünü korur. Dördüncü soru dönüşümün doğru kurulup kurulmadığını, beşinci soru ise kök veya payda nedeniyle oluşan çözüm aralıklarını denetler.

Sonuç $y$ cinsine döndürüldükten sonra özgün denklemde yerine konmalıdır. Dönüştürülmüş $v$ denklemini sağlamak tek başına yeterli değildir; geri dönüşün tanımlı olması ve varsa başlangıç koşulunu sağlaması gerekir.

:::

---

## Kavramsal Kapanış

Bernoulli yöntemi üç aşamalı bir indirgemedir:

1. Kuvvet yapısını tanı
2. $v=y^{1-n}$ ile lineerleştir
3. $y$ değişkenine geri dön

::: {.notes}

Bernoulli denklemleri için ayrı ve bağımsız bir integral formülü ezberlemek gerekmez. Yönteme özgü adım, doğru kuvvet değişimini seçerek denklemi lineer hâle getirmektir. Bundan sonraki hesap integrasyon çarpanı yöntemidir.

Bu nedenle iki konu birlikte okunmalıdır: Bernoulli notu hangi dönüşümün yapılacağını, birinci mertebeden lineer denklemler notu ise elde edilen $v$ denkleminin nasıl çözüleceğini açıklar.

:::

---
