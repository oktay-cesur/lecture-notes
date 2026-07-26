---
title: "İntegrasyon Çarpanı ile Tam Olmayan Denklemleri Tama Getirme"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-07-26
execute:
  echo: false
---

## Tam Olmayan Bir Denklem

$$
(3xy+y^2)\,dx+(x^2+xy)\,dy=0.
$$

$$
M=3xy+y^2,\ N=x^2+xy
\quad\Longrightarrow\quad
M_y=3x+2y,\ \ N_x=2x+y.
$$

$M_y\neq N_x$ — denklem tam değil. Peki denklem çözümsüz mü?

::: {.notes}

Önceki notta gördüğümüz test koşulu burada sağlanmıyor: $M_y=3x+2y$ ve $N_x=2x+y$ genel olarak birbirine eşit değildir, dolayısıyla bu denklem tam değildir. Ancak bu, denklemin çözülemeyeceği anlamına gelmez. Fikir şudur: denklemi uygun bir $\mu(x,y)$ fonksiyonuyla çarpıp *yeni* bir denklem elde edebiliriz; eğer bu yeni denklem tamsa, önceki notun yöntemiyle çözülebilir. Böyle bir $\mu$'ye **integrasyon çarpanı** denir. Genel bir $\mu(x,y)$ aramak zor bir problemdir; bu notta yalnızca $\mu$'nün tek bir değişkene bağlı olduğu iki özel durumu ele alacağız.

:::

---

## Koşulun Kurulması

$\mu M\,dx+\mu N\,dy=0$ denkleminin tam olması için:

$$
(\mu M)_y=(\mu N)_x.
$$

Çarpım kuralıyla açılırsa:

$$
\mu_yM+\mu M_y=\mu_xN+\mu N_x.
$$

::: {.notes}

Yeni denklemin ($\mu M\,dx+\mu N\,dy=0$) tam olması için test koşulu, $\mu M$'nin $y$'ye göre türeviyle $\mu N$'nin $x$'e göre türevinin eşit olmasıdır: $(\mu M)_y=(\mu N)_x$. Çarpım kuralıyla açılırsa $\mu_yM+\mu M_y=\mu_xN+\mu N_x$ elde edilir. Bu, genel olarak $\mu$ için bir kısmi diferansiyel denklemdir — çözmesi orijinal problemden daha zor olabilir. Ancak $\mu$'nün yalnızca $x$'e (ya da yalnızca $y$'ye) bağlı olduğunu **varsayarsak**, denklem büyük ölçüde sadeleşir. Bu varsayımın ne zaman geçerli olduğu aşağıda test edilecektir.

:::

---

## Durum 1: $\mu=\mu(x)$

$\mu$ yalnız $x$'e bağlıysa $\mu_y=0$, dolayısıyla:

$$
\mu M_y=\mu_xN+\mu N_x
\quad\Longrightarrow\quad
\frac{\mu_x}{\mu}=\frac{M_y-N_x}{N}.
$$

Bu **ancak** sağ taraf yalnız $x$'in fonksiyonuysa tutarlıdır. O durumda:

$$
\boxed{\mu(x)=\exp\!\left(\int\frac{M_y-N_x}{N}\,dx\right).}
$$

::: {.notes}

$\mu$'nün yalnız $x$'e bağlı olduğunu varsayarsak $\mu_y=0$ olur ve yukarıdaki denklem $\mu M_y=\mu_xN+\mu N_x$'e indirgenir. Bunu yeniden düzenlersek $\dfrac{\mu_x}{\mu}=\dfrac{M_y-N_x}{N}$ elde edilir. Sol taraf yalnızca $x$'in bir fonksiyonu olduğundan (çünkü $\mu=\mu(x)$), bu eşitlik ancak sağ taraf $\dfrac{M_y-N_x}{N}$ da yalnızca $x$'e bağlıysa (yani $y$ tamamen sadeleşiyorsa) tutarlı olabilir. Bu nedenle oranı sadeleştirip hangi değişkene bağlı kaldığını kontrol ederiz. Test geçilirse, $\mu_x/\mu=p(x)$ biçimindeki denklem birinci mertebeden lineer denklemlerdeki integrasyon çarpanıyla aynı yapıdadır ve çözümü $\mu(x)=\exp\left(\int \frac{M_y-N_x}{N}\,dx\right)$'dir.

:::

---

## Durum 1: Örnek Uçtan Uca

$(3xy+y^2)\,dx+(x^2+xy)\,dy=0$ denkleminde:

$$
\frac{M_y-N_x}{N}=\frac{(3x+2y)-(2x+y)}{x^2+xy}=\frac{x+y}{x(x+y)}=\frac1x.
$$

Yalnız $x$'e bağlı — Durum 1 uygulanabilir:

$$
\mu(x)=\exp\left(\int\frac1x\,dx\right)=|x|,
\qquad
\text{seçilen }x\neq0\text{ aralığında }\mu=x\text{ de seçilebilir.}
$$

::: {.notes}

Testi uygulayalım: $M_y-N_x=(3x+2y)-(2x+y)=x+y$. Bunu $N=x^2+xy=x(x+y)$'ye bölersek $\dfrac{x+y}{x(x+y)}$ elde edilir; $(x+y)$ ortak çarpanı **sadeleştirildikten sonra** geriye yalnız $\dfrac1x$ kalır — yani gerçekten yalnız $x$'e bağlıdır. Bu nedenle Durum 1 uygulanabilir. $x$'in işaret değiştirmediği bir aralıkta

$$
\mu(x)=\exp\left(\int\frac1x\,dx\right)
=\exp(\ln|x|)=|x|
$$

elde edilir. İntegrasyon çarpanı sıfırdan farklı bir sabit katına kadar belirlendiği için $x>0$ bölgesinde $\mu=x$, $x<0$ bölgesinde ise örneğin yine $\mu=x$ seçilebilir.

:::

---

## Durum 1: Çözümün Tamamlanması

$\mu=x$ ile çarpalım:

$$
(3x^2y+xy^2)\,dx+(x^3+x^2y)\,dy=0.
$$

Test: $M^*_y=3x^2+2xy=N^*_x$ — şimdi tam.

$$
F=\int(3x^2y+xy^2)\,dx=x^3y+\frac{x^2y^2}{2}+g(y),
\qquad
F_y=x^3+x^2y+g'(y)\stackrel!=x^3+x^2y
\Rightarrow g'(y)=0.
$$

$$
\boxed{x^3y+\frac{x^2y^2}{2}=C.}
$$

::: {.notes}

$\mu=x$ ile orijinal denklemi çarparsak $M^*=3x^2y+xy^2$, $N^*=x^3+x^2y$ elde edilir; kontrol edersek $M^*_y=3x^2+2xy$ ve $N^*_x=3x^2+2xy$ — eşit, dolayısıyla yeni denklem tam. Artık önceki nottaki mekanizma doğrudan uygulanır: $F_x=M^*$'den $F=x^3y+\frac{x^2y^2}{2}+g(y)$, ardından $F_y=N^*$ ile $g'(y)=0$ bulunur. Sonuç $x^3y+\frac{x^2y^2}{2}=C$'dir. Bu eşdeğerlik $\mu\neq0$ olan bölgelerde geçerlidir; örnekte $x>0$ bölgesi seçildiği için çarpma çözüm eğrilerini değiştirmez.

:::

---

## Durum 2: $\mu=\mu(y)$

Simetrik olarak, $\mu$ yalnız $y$'ye bağlıysa:

$$
\boxed{\mu(y)=\exp\left(\int\frac{N_x-M_y}{M}\,dy\right)}
$$

koşuluyla, **ancak** $\dfrac{N_x-M_y}{M}$ yalnız $y$'nin fonksiyonuysa.

::: {.notes}

Aynı türetim, $\mu=\mu(x)$ yerine $\mu=\mu(y)$ varsayılarak simetrik biçimde tekrarlanabilir: bu kez $\mu_x=0$ olur ve denklem $\dfrac{\mu_y}{\mu}=\dfrac{N_x-M_y}{M}$'e indirgenir (pay ile paydanın yer değiştirdiğine, işaretin de değiştiğine dikkat edin). Test yine aynıdır: sağ taraf yalnız $y$'ye bağlı çıkıyorsa Durum 2 uygulanabilir ve $\mu(y)=\exp\left(\int\frac{N_x-M_y}{M}\,dy\right)$ elde edilir.

:::

---

## Durum 2: Örnek Uçtan Uca

$$
(2xy)\,dx+(y^2-x^2)\,dy=0.
$$

$$
M_y=2x,\ N_x=-2x
\quad\Longrightarrow\quad
\frac{N_x-M_y}{M}=\frac{-2x-2x}{2xy}=-\frac2y.
$$

Yalnız $y$'ye bağlı:

$$
\mu(y)=\exp\left(\int-\frac2y\,dy\right)=y^{-2}.
$$

::: {.notes}

Bu denklemde $M=2xy$, $N=y^2-x^2$; $M_y=2x$, $N_x=-2x$, dolayısıyla tam değil. Durum 2 testini uygulayalım: $\dfrac{N_x-M_y}{M}=\dfrac{-2x-2x}{2xy}=\dfrac{-4x}{2xy}=-\dfrac2y$ — yalnız $y$'ye bağlı. Bu nedenle Durum 2 uygulanabilir: $\mu(y)=\exp\left(\int-\frac2y\,dy\right)=e^{-2\ln y}=y^{-2}$ (burada $y>0$ varsayılır).

:::

---

## Durum 2: Çözümün Tamamlanması

$\mu=y^{-2}$ ile çarpalım:

$$
\frac{2x}{y}\,dx+\left(1-\frac{x^2}{y^2}\right)dy=0.
$$

Test: $M^*_y=-\dfrac{2x}{y^2}=N^*_x$ — tam.

$$
F=\int\frac{2x}{y}\,dx=\frac{x^2}{y}+g(y),
\qquad
F_y=-\frac{x^2}{y^2}+g'(y)\stackrel!=1-\frac{x^2}{y^2}
\Rightarrow g'(y)=1
\Rightarrow g(y)=y.
$$

$$
\frac{x^2}{y}+y=C
\quad\Longrightarrow\quad
\boxed{x^2+y^2=Cy.}
$$

::: {.notes}

$\mu=y^{-2}$ ile çarpınca $M^*=\frac{2x}{y}$, $N^*=1-\frac{x^2}{y^2}$ elde edilir; $M^*_y=-\frac{2x}{y^2}=N^*_x$ — tam. $F_x=M^*$'den $F=\frac{x^2}{y}+g(y)$; $F_y=N^*$ ile $g'(y)=1$, dolayısıyla $g(y)=y$. Sonuç $\frac{x^2}{y}+y=C$'dir; her iki tarafı $y$ ile çarparsak daha tanıdık bir biçim elde edilir: $x^2+y^2=Cy$. Bu, merkezleri $y$ ekseni üzerinde olan bir çember ailesidir.

:::

---

## Lineer Denklemin Çarpanıyla İlişki

Birinci mertebeden lineer denklemlerde $y'+p(x)y=q(x)$ için $\mu=e^{\int p(x)\,dx}$ kullanılmıştı. Bu denklemi $M\,dx+N\,dy=0$ biçiminde yazalım:

$$
\big(p(x)y-q(x)\big)\,dx+dy=0
\quad\Longrightarrow\quad
M=p(x)y-q(x),\ N=1.
$$

$$
\frac{M_y-N_x}{N}=\frac{p(x)-0}{1}=p(x)
\quad\Longrightarrow\quad
\mu(x)=e^{\int p(x)\,dx}.
$$

::: {.notes}

Birinci mertebeden lineer denklemler için kurulan integrasyon çarpanı, Durum 1'in özel bir hâlidir. $y'+p(x)y=q(x)$ denklemini $M\,dx+N\,dy=0$ biçiminde yazarsak $M=p(x)y-q(x)$, $N=1$ olur. Durum 1 testinde $\dfrac{M_y-N_x}{N}=\dfrac{p(x)-0}{1}=p(x)$ çıkar; bu ifade yalnız $x$'e bağlıdır. Dolayısıyla $\mu(x)=e^{\int p(x)\,dx}$, lineer denklem için elde edilen formülle aynıdır. Her iki kullanımda da integrasyon çarpanı denklemi tam bir diferansiyel biçime dönüştürür.

:::

---

## Sık Yapılan Hata

$\dfrac{M_y-N_x}{N}$ ifadesini **sadeleştirmeden** "yalnız $x$'e bağlı değil" diye reddetmek.

$$
\frac{x+y}{x(x+y)}
\ \xrightarrow{\text{sadeleştirmeden bakılırsa}}\
\text{"hem $x$ hem $y$ var, Durum 1 uygulanamaz"} \quad\text{(yanlış)}
$$

$$
\frac{x+y}{x(x+y)}=\frac1x
\quad\text{(doğru, sadeleştirdikten sonra)}
$$

::: {.notes}

En sık yapılan hata, $\dfrac{M_y-N_x}{N}$ oranını hesapladıktan sonra ifadeyi sadeleştirmeden pay ve payda arasında hem $x$ hem $y$ görünce testin başarısız olduğuna karar vermektir. Örneğimizde $\dfrac{x+y}{x(x+y)}$ ifadesi ilk bakışta hem $x$ hem $y$ içerir, ancak pay ile paydadaki $(x+y)$ ortak çarpanı sadeleştirildiğinde geriye yalnız $\dfrac1x$ kalır. Test uygulanmadan önce ifade **tam olarak sadeleştirilmelidir**; aksi hâlde geçerli bir Durum 1 ya da Durum 2 durumu gözden kaçabilir.

:::

---

## Pekiştirme

$$
(x^2+y^2+x)\,dx+(xy)\,dy=0
$$

denklemi tam mıdır? Değilse, Durum 1 veya Durum 2'den hangisi uygulanabilir? Uygun integrasyon çarpanını bulup denklemi çözünüz.

::: {.notes}

Bu soru, önce test koşulunun uygulanmasını (tam olup olmadığının kontrolünü), ardından hangi durumun (1 veya 2) geçerli olduğunun sadeleştirme yapılarak belirlenmesini ve son olarak tam hale gelen denklemin çözülmesini bir arada gerektirir.

:::

---

## Sonraki Adım: Eğri Ailelerinden Denklem Kurmak

İntegrasyon çarpanı, verilen bir denklemi çözülebilir bir tam denkleme dönüştürür. Ortogonal yörünge probleminde ise yön tersine döner:

$$
\text{eğri ailesi}
\longrightarrow
\text{diferansiyel denklem}
\longrightarrow
\text{dik kesişen aile}.
$$

::: {.notes}

Tamlık ve integrasyon çarpanı konularında başlangıç noktası bir diferansiyel denklemdir; amaç bu denklemin çözüm eğrilerini bulmaktır. Ortogonal yörüngelerde başlangıçta bir eğri ailesi verilir. Önce ailenin parametresi elenerek onu temsil eden diferansiyel denklem kurulur, ardından dik teğet yönünü veren yeni denklem çözülür.

Bu geçiş, öğrenilen yöntemlerin yalnız hazır denklemleri çözmek için değil, geometrik bir koşuldan denklem üretmek için de kullanılabileceğini gösterir. Yeni denklem ayrılabilir, lineer, tam veya başka bir tanınan biçimde olabilir; yöntem seçimi denklem kurulduktan sonra yapılır.

:::

---
