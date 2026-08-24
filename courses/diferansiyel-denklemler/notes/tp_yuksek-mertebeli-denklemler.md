---
title: "Yüksek Mertebeli Sabit Katsayılı Denklemler"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-08-22
execute:
  echo: false
---

## Mertebe Yükselince Ne Değişir?

$$
y'''-6y''+11y'-6y=0
$$

İkinci mertebede $e^{rx}$ denemesi çalışmıştı.

Aynı deneme burada da geçerli mi?

**Yeni güçlük:** yüksek dereceli polinom kökleri.

::: {.notes}

Sabit katsayılı ikinci mertebe denklemlerde yöntem tekti: $y=e^{rx}$ denenir, karakteristik denklem çıkar, köklere göre çözüm yazılır. Mertebe üçe ya da dörde çıktığında aynı mekanizma çalışır; ancak artık ikinci dereceden değil, yüksek dereceden polinomların köklerini bulmamız gerekir. Bu cebirsel görev baştan görünür tutulmalıdır, çünkü diferansiyel denklem adımları doğru olsa bile kökler bulunmadan çözüm yazılamaz.

Bozulmuyor. $y=e^{rx}$ denemesinin işe yaramasının tek gerekçesi vardı: üstel fonksiyonun her türevi kendisinin sabit katıdır, $y^{(k)}=r^ke^{rx}$. Bu özellik mertebeye bağlı değil. Denklemde kaçıncı türev bulunursa bulunsun, $e^{rx}$ yerine konduğunda ortak çarpan olarak sadeleşir ve geriye $r$ cinsinden bir polinom kalır.

Değişen şey polinomun derecesidir. Kök bulma işi zorlaşır, fakat kökten çözüme geçiş kuralı aynı kalır. Bu bölümde önce klasik polinom kökü bulma araçlarını kullanacağız; ardından ikinci mertebede kurulan kök–çözüm sözlüğünü daha yüksek dereceye taşıyacağız.

:::

---

## Karakteristik Polinom

$$
a_ny^{(n)}+\cdots+a_1y'+a_0y=0
$$

$y=e^{rx}$ yerine konunca:

$$
a_nr^n+\cdots+a_1r+a_0=0
$$

::: {.notes}

Katsayıları sabit olan homojen bir denklemde $y=e^{rx}$ yazalım. $y'=re^{rx}$, $y''=r^2e^{rx}$ ve genel olarak $y^{(k)}=r^ke^{rx}$ olur. Denkleme yerleştirildiğinde her terimde $e^{rx}$ çarpanı bulunur; üstel fonksiyon hiçbir $x$ için sıfır olmadığından bu çarpan sadeleşir.

Geriye kalan $p(r)=a_nr^n+\cdots+a_1r+a_0$ ifadesine karakteristik polinom, $p(r)=0$ denklemine karakteristik denklem denir. Katsayılar denklemdekilerle birebir aynıdır; türev mertebesi polinomun derecesine dönüşür.

Cebirin temel teoremi bu polinomun kompleks sayılar içinde katlılıklarıyla birlikte tam $n$ kökü olduğunu söyler. Aradığımız da $n$ tane lineer bağımsız çözüm olduğu için sayılar örtüşür. Bundan sonraki iş, her kök tipinin hangi çözümü ürettiğini belirlemektir — bu sözlüğün üç maddesi zaten ikinci mertebede kuruldu.

:::

---

## Ayrık Reel Kökler

$n$ farklı reel kök $r_1,\ldots,r_n$ için:

$$
y=c_1e^{r_1x}+\cdots+c_ne^{r_nx}
$$

Her kök bir üstel çözüm verir.

::: {.notes}

En sade durum, karakteristik polinomun birbirinden farklı $n$ reel kökü olmasıdır. Her kök $r_i$ için $e^{r_ix}$ bir çözümdür ve bu $n$ fonksiyon lineer bağımsızdır.

Bağımsızlığın gerekçesi üstellerin büyüme hızlarının farklı olmasıdır. Farklı $r$ değerleri için $e^{rx}$ fonksiyonları sabit katsayılarla birbirine dönüştürülemez; Wronskian hesabı da sıfırdan farklı çıkar. Temel çözüm kümesi tanımı gereği genel çözüm bu $n$ fonksiyonun lineer birleşimidir.

Sabit sayısı mertebeyle birlikte artar. Üçüncü mertebe bir denklemin genel çözümünde üç serbest sabit bulunur; bir başlangıç değer problemi için de üç koşul gerekir: $y(x_0)$, $y'(x_0)$ ve $y''(x_0)$. Koşul sayısı mertebeye eşittir, bu ilişki genel teoride kurulmuştu.

:::

---

## Soru: Üçüncü Mertebe Denklem

$$
y'''-6y''+11y'-6y=0
$$

Karakteristik denklem:

$$
r^3-6r^2+11r-6=0
$$

::: {.notes}

Katsayıları doğrudan okuyarak karakteristik denklemi yazdık. Şimdi kökleri bulmak gerekiyor ve burada ikinci mertebeden farklı bir zorluk var: üçüncü dereceden bir polinom için ezberlenmiş bir kök formülü yok.

Pratikte işleyen yol rasyonel kök taramasıdır. Baş katsayı $1$, sabit terim $-6$ olduğundan rasyonel kök adayları $-6$'nın bölenleridir: $\pm1,\pm2,\pm3,\pm6$. Bunları sırayla deneriz.

$r=1$ için $1-6+11-6=0$ çıkar, yani $r=1$ köktür. Bir kök bulunduğunda polinom o kökün çarpanına bölünür ve geriye ikinci dereceden bir polinom kalır — onu artık biliyoruz. Bu, yüksek mertebeli denklemlerde standart iş sırasıdır: bir kök yakala, dereceyi indir, kalanı çöz.

:::

---

## Çözüm: Kökleri Bulmak

$$
r^3-6r^2+11r-6=(r-1)(r-2)(r-3)
$$

$$
r=1,\;2,\;3
$$

$$
\boxed{y=c_1e^{x}+c_2e^{2x}+c_3e^{3x}}
$$

::: {.notes}

$r=1$ kökünü bulduktan sonra polinomu $(r-1)$ ile bölelim. Bölüm $r^2-5r+6$ olur ve bu ifade $(r-2)(r-3)$ biçiminde çarpanlarına ayrılır. Üç kök ayrık ve reeldir: $1$, $2$, $3$.

Genel çözüm $y=c_1e^x+c_2e^{2x}+c_3e^{3x}$'tir. Üç serbest sabit, üçüncü mertebeye karşılık geliyor.

Doğrulama için tek bir terimi kontrol etmek yeterli. $y=e^{2x}$ alalım: $y'=2e^{2x}$, $y''=4e^{2x}$, $y'''=8e^{2x}$ ve $8-24+22-6=0$ ✓. Aynı hesap $p(2)=0$ ifadesinin kendisidir; karakteristik denklem zaten bu doğrulamayı bir kez yapmak yerine hepsini birden yapmanın kısa yoludur.

:::

---

## Katlı Kök: $x$ Kuvvetleri

$r$ kökü $m$ katlıysa:

$$
e^{rx},\;xe^{rx},\;\ldots,\;x^{m-1}e^{rx}
$$

$$
y'''-3y''+3y'-y=0
\;\Rightarrow\;
(r-1)^3=0
$$

::: {.notes}

Katlı kök durumu ikinci mertebede çift kök olarak görülmüştü: $r$ iki katlıysa çözümler $e^{rx}$ ve $xe^{rx}$ oluyordu. Kural katlılık arttıkça aynı biçimde uzar. $m$ katlı bir kök $e^{rx}$ ile başlayıp $x^{m-1}e^{rx}$ ile biten $m$ çözüm üretir.

Örnekteki denklemde karakteristik polinom $r^3-3r^2+3r-1=(r-1)^3$'tür; $r=1$ üç katlı köktür. Çözümler $e^x$, $xe^x$ ve $x^2e^x$, genel çözüm $y=(c_1+c_2x+c_3x^2)e^x$ olur.

Neden $x$ kuvvetleri geldiği mertebe indirmede görülmüştü: $y_2=v(x)y_1$ dönüşümü çift kök durumunda $v''=0$ verir ve $v$ birinci dereceden bir polinom çıkar. Katlılık büyüdükçe aynı hesap daha yüksek dereceli polinomlara ulaşır. Sayma da tutar: $m$ katlı kök $m$ çözüm verdiği için toplam çözüm sayısı yine $n$ olur.

:::

---

## Kompleks Kök Çiftleri

$r=\alpha\pm i\beta$ için:

$$
e^{\alpha x}\cos\beta x,
\qquad
e^{\alpha x}\sin\beta x
$$

$$
y'''+y'=0
\;\Rightarrow\;
r(r^2+1)=0
$$

::: {.notes}

Reel katsayılı bir polinomun kompleks kökleri eşlenik çiftler hâlinde gelir. Her $\alpha\pm i\beta$ çifti iki reel çözüm üretir: $e^{\alpha x}\cos\beta x$ ve $e^{\alpha x}\sin\beta x$. Bu dönüşüm Euler formülünden çıkıyordu ve mertebeyle birlikte değişmiyor.

Örnekteki denklemde $r^3+r=r(r^2+1)=0$ olur. Kökler $r=0$ ve $r=\pm i$'dir. $r=0$ kökü $e^{0\cdot x}=1$ çözümünü, yani sabit fonksiyonu verir. Kompleks çift ise $\alpha=0$, $\beta=1$ ile $\cos x$ ve $\sin x$ çözümlerini verir.

Genel çözüm $y=c_1+c_2\cos x+c_3\sin x$'tir. Sıfır kökünün sabit çözüm vermesi başta yadırgatıcı gelir, ama denklemde $y$ terimi bulunmadığından her sabit fonksiyon denklemi sağlar; kök sözlüğü bunu kendiliğinden yakalar.

Kompleks kök de katlı olabilir. $\alpha\pm i\beta$ çifti $m$ katlıysa çözümler $x^k e^{\alpha x}\cos\beta x$ ve $x^k e^{\alpha x}\sin\beta x$ biçiminde $k=0,\ldots,m-1$ için yazılır.

:::

---

## Kök Sözlüğü

| Kök tipi | Katkı |
|---|---|
| Ayrık reel $r$ | $e^{rx}$ |
| $m$ katlı reel $r$ | $x^ke^{rx}$, $k<m$ |
| $\alpha\pm i\beta$ | $e^{\alpha x}\cos\beta x$, $e^{\alpha x}\sin\beta x$ |
| $m$ katlı $\alpha\pm i\beta$ | $x^k$ ile çarpılmış çift |

::: {.notes}

Tablo, sabit katsayılı homojen denklemlerin tamamını kapsar. Her kök kendi katkısını yazar, katkılar toplanır ve genel çözüm ortaya çıkar. Mertebe ne olursa olsun başka bir kural gerekmez.

Sayma kontrolü her zaman yapılabilir: katkıların toplam sayısı denklemin mertebesine eşit olmalıdır. Beşinci mertebe bir denklemde beş fonksiyon ve beş sabit çıkmıyorsa köklerden biri atlanmış ya da bir katlılık eksik sayılmıştır.

Tablonun ilk üç satırı ikinci mertebede kurulmuştu. Dördüncü satır yeni sayılabilir, ama aynı mantığın devamıdır: katlılık her tipte $x$ kuvvetleriyle karşılanır.

:::

---

## Soru: Dördüncü Mertebe

$$
y^{(4)}-2y''+y=0
$$

Kökleri bulun ve genel çözümü yazın.

::: {.notes}

Karakteristik denklem $r^4-2r^2+1=0$'dır. Bu ifade $r^2$ cinsinden ikinci dereceden bir denklem gibi okunabilir: $u=r^2$ konursa $u^2-2u+1=(u-1)^2=0$ çıkar.

Buradan $u=1$ çift kök, yani $r^2=1$ olur. $r=\pm1$ köklerinin her biri çift katlıdır. Aynı sonuç doğrudan çarpanlara ayırarak da görülür: $r^4-2r^2+1=(r^2-1)^2=(r-1)^2(r+1)^2$.

Değişken değiştirerek dereceyi indirmek, yüksek mertebeli denklemlerde işe yarayan bir alışkanlıktır. Karakteristik polinomda yalnız çift dereceli terimler varsa $u=r^2$ denemesi hemen sonuç verir.

:::

---

## Çözüm: Katlılığı Saymak

$$
r^4-2r^2+1=(r-1)^2(r+1)^2
$$

$r=1$ ve $r=-1$, ikisi de çift katlı.

$$
\boxed{y=(c_1+c_2x)e^{x}+(c_3+c_4x)e^{-x}}
$$

::: {.notes}

İki kökün de katlılığı iki olduğundan her biri iki çözüm üretir: $r=1$ için $e^x$ ve $xe^x$, $r=-1$ için $e^{-x}$ ve $xe^{-x}$. Toplam dört çözüm, dört sabit — mertebeyle uyumlu.

Bu denklem sarkma ve kiriş eğilme problemlerinde karşılaşılan tipten. Çözümdeki $xe^{x}$ terimi, katlılığın yalnız cebirsel bir ayrıntı olmadığını gösterir: fiziksel modelde büyüme üstel olmaktan çıkıp üstelin polinomla çarpımına döner.

Sık yapılan bir hata, $(r^2-1)^2=0$ görüldüğünde $r=\pm1$ deyip geçmek ve katlılığı saymamaktır. O zaman genel çözüm iki terimli yazılır, iki başlangıç koşulu karşılıksız kalır ve sistem çözümsüz görünür. Sayma kontrolü tam da bunu yakalar.

:::

---

## Kök Bulmak Her Zaman Kolay Değil

$$
r^5-3r^4+2r^3-r+7=0
$$

Rasyonel kök yoksa elle çarpanlara ayrılmaz.

Yöntem geçerli; hesap sayısal araç ister.

::: {.notes}

Dördüncü dereceden yukarısı için genel kök formülü yoktur — bu, cebirin bilinen bir sonucudur. Ders kapsamında ve sınav sorularında karşılaşılan denklemler kökleri elle bulunabilecek biçimde seçilir; gerçek modellerde böyle bir garanti yoktur.

Elle çalışırken tek pratik araç rasyonel kök taramasıdır: baş katsayı ve sabit terimin bölenlerinden aday üretilir, denenir, bulunan kökle derece indirilir. Örnekteki polinomda adaylar $\pm1$ ve $\pm7$'dir; hiçbiri kök değilse elle çarpanlara ayırma yolu kapanır.

Yöntemin kendisi bundan etkilenmez. Kökler nasıl bulunursa bulunsun — sayısal olarak da bulunabilir — kök sözlüğü çözümü aynı biçimde verir. Diferansiyel denklem bilgisi kök bulma becerisinden ayrı bir şeydir; birinde tıkanmak diğerini geçersiz kılmaz.

:::

---

## Homojen Olmayan Denklem

$$
y'''-y'=4x
$$

Yapı değişmiyor:

$$
y=y_h+y_p
$$

Belirsiz katsayılar ve sabitlerin değişimi aynı biçimde çalışır.

::: {.notes}

Sağ tarafı sıfırdan farklı olan yüksek mertebeli denklemlerde de genel çözüm $y=y_h+y_p$ yapısındadır. Homojen kısım karakteristik denklemden, özel çözüm ise ikinci mertebede kurulan iki yöntemden biriyle bulunur.

Örnekte $r^3-r=r(r-1)(r+1)=0$ olduğundan $y_h=c_1+c_2e^x+c_3e^{-x}$'tir. Sağ taraf $4x$ bir polinom; aday $Ax+B$ olurdu, ama $B$ sabiti $r=0$ kökünden gelen homojen çözümle çakışıyor. Çakışma düzeltmesi aynı kuralla uygulanır ve aday $x$ ile çarpılır: $y_p=Ax^2+Bx$.

Yerine koyalım: $y_p'=2Ax+B$, $y_p''=2A$, $y_p'''=0$. Denklem $0-(2Ax+B)=4x$ verir, buradan $A=-2$ ve $B=0$ çıkar. Özel çözüm $y_p=-2x^2$, genel çözüm $y=c_1+c_2e^x+c_3e^{-x}-2x^2$'dir.

Sabitlerin değişimi de mertebeyle birlikte genişler; $n$ mertebe için $n$ bilinmeyen fonksiyon ve $n$ denklemli bir sistem kurulur. Hesap hızla büyüdüğünden yüksek mertebede belirsiz katsayılar tercih edilir.

:::

---

## Sık Yapılan Hatalar

1. Katlılığı saymadan kök yazmak
2. Kompleks çiftin bir terimini unutmak
3. Sabit sayısını mertebeyle eşleştirmemek
4. $r=0$ kökünü atlamak
5. Çakışma kontrolünü yalnız üstel terimde yapmak

::: {.notes}

Birinci hata yüksek mertebede en pahalıya mal olanıdır. $(r-2)^3$ çarpanı görüldüğünde tek bir $e^{2x}$ yazılırsa iki çözüm eksik kalır; hata çoğu zaman başlangıç koşulları uygulanırken, sistem çözümsüz çıktığında fark edilir.

İkinci hata kompleks köklerde sinüs ya da kosinüs terimlerinden birinin düşmesidir. Her eşlenik çift iki reel çözüm verir; biri yazılıp diğeri unutulursa çözüm ailesi daralır.

Dördüncü hata $r$ ortak çarpan olarak ayrıldığında olur. $r^3+r=r(r^2+1)$ ifadesinde $r=0$ bir köktür ve $y=1$ sabit çözümünü verir; ortak çarpan sadeleştirilip atılırsa bu çözüm kaybolur.

Beşinci hata homojen olmayan denklemlerde ortaya çıkar. Sağ taraf polinomsa ve $r=0$ karakteristik denklemin kökü ise çakışma vardır; polinom adaylar da çakışma kontrolüne tabidir.

:::

---

## Karar Soruları

Yalnız genel çözümün biçimini yazın:

1. $(r-2)^2(r^2+9)=0$
2. $r^4=0$
3. $(r^2+1)^2=0$

::: {.notes}

Birinci polinomda $r=2$ çift kök, $r=\pm3i$ ise ayrık kompleks çifttir. Çift kök $e^{2x}$ ve $xe^{2x}$, kompleks çift $\cos3x$ ve $\sin3x$ verir. Genel çözüm $y=(c_1+c_2x)e^{2x}+c_3\cos3x+c_4\sin3x$'tir; dört sabit, dördüncü mertebe.

İkincisinde $r=0$ dört katlıdır. Katkılar $e^{0x}$ ile başlayıp $x^3e^{0x}$'e kadar gider, yani $1,x,x^2,x^3$. Genel çözüm $y=c_1+c_2x+c_3x^2+c_4x^3$'tür. Denklem zaten $y^{(4)}=0$'dır ve dört kez integral almak aynı sonucu verir — sözlük tanıdık bir cevabı yeniden üretiyor.

Üçüncüsünde $r=\pm i$ çifti iki katlıdır. Katkılar $\cos x$, $\sin x$, $x\cos x$ ve $x\sin x$ olur. $x$ çarpanlı terimler genliği büyüyen salınımı tanımlar; rezonans davranışının homojen denklemdeki karşılığı budur.

:::

---

## Sonraki Adım: Katsayılar Sabit Değilse

$$
x^2y''-3xy'+3y=0
$$

$e^{rx}$ denemesi burada çalışmaz.

Katsayılardaki $x$ kuvvetleri bir yapı taşıyor mu?

::: {.notes}

Buraya kadarki bütün yöntemlerin ön koşulu katsayıların sabit olmasıydı. Katsayılar $x$'e bağlıysa $e^{rx}$ denemesi ortak çarpan vermez; yerine koyma sonrası $x$'li terimler kalır ve cebirsel bir denklem elde edilemez.

Değişken katsayılı denklemlerin geneli için kapalı formda bir yöntem yoktur. Ama örnekteki gibi katsayıdaki $x$ kuvveti türev mertebesiyle eşleşen denklemler özel bir sınıf oluşturur: $x^2$ ikinci türevle, $x$ birinci türevle, sabit ise $y$ ile birlikte geliyor.

Bu eşleşme bir ölçek simetrisi taşır ve $y=x^m$ denemesini doğal aday hâline getirir. Bu sınıfın adı Cauchy–Euler denklemidir.

:::

---

## Kaynak Notu

Ana kaynak: Nagle, Saff ve Snider.

::: {.notes}

Yüksek mertebeli sabit katsayılı denklemlerin buradaki kurulumu — karakteristik polinom, kök tiplerine göre çözüm sözlüğü ve katlılığın $x$ kuvvetleriyle karşılanması — Nagle, Saff ve Snider kaynağındaki klasik yaklaşımla uyumludur. Konu burada bağımsız bir yöntem repertuvarı değil, ikinci mertebede kurulan sözlüğün derece genişlemesi olarak ele alınır; bu yüzden kök tiplerinin yeniden türetilmesi yerine sayma kontrolü ve kök bulma pratiği öne çıkar.

:::

---
