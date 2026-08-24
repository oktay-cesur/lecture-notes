---
title: "Sabit Katsayılı Homojen Denklemler ve Karakteristik Denklem"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-08-22
execute:
  echo: false
---

## Elimizde Ne Var, Ne Yok

Genel teori, ikinci mertebeden homojen bir denklemin genel çözümünün

$$
y_h=c_1y_1+c_2y_2
$$

biçiminde olduğunu söylüyor.

$y_1$ ve $y_2$'nin nasıl bulunacağını söylemiyor.

::: {.notes}

Buraya kadar kurulan yapı şu: $n$'inci mertebeden homojen lineer bir denklemin $n$ tane lineer bağımsız çözümü bir temel çözüm kümesi oluşturur ve genel çözüm bu çözümlerin lineer birleşimidir. Bu bilgi çözümün *biçimini* verir. Elimizde henüz çözümleri üretecek bir hesap yolu yok; $y''+y=0$ için $\cos x$ ile $\sin x$'i doğrulayabildik, ama onları bulmadık — verilmişlerdi.

Bu boşluk her denklem sınıfı için tek seferde kapanmaz. En geniş sonuç veren yerden başlıyoruz: katsayıları sabit olan denklemler. Bu sınıfta çözüm tamamen sistematik bir yolla, bir polinom denkleminin kökleri üzerinden bulunabilir. Değişken katsayılı denklemlerin genel bir çözüm reçetesi yoktur; oradaki araçlar (mertebe indirme, seri çözümleri) daha sınırlı çalışır; bu araçlar mertebe indirme ve kuvvet serisi çözümleri notlarında ayrıca ele alınır.

:::

---

## Sabit Katsayılı Denklem

$$
ay''+by'+cy=0,\qquad a,b,c\in\mathbb{R},\quad a\neq0
$$

Katsayılar $x$'e bağlı değil, sabit sayılar.

Standart biçim için $a$'ya bölmek her zaman meşrudur: $a\neq0$.

::: {.notes}

İncelenecek sınıf şu: $ay''+by'+cy=0$, burada $a$, $b$, $c$ gerçek sabitler ve $a\neq0$. Sağ taraf sıfır olduğu için denklem homojen; $y$ ve türevleri yalnızca birinci kuvvetten göründüğü için lineer. Değişken katsayılı denklemlerde $p_1(x)$ ve $p_0(x)$ fonksiyonlarının süreksiz olduğu noktalar çözüm aralığını daraltıyordu. Sabit katsayılarda böyle bir nokta yok: sabit fonksiyonlar her yerde süreklidir, dolayısıyla varlık–teklik teoremi bütün gerçek eksende geçerlidir. Bulunan çözümler her $x$ için tanımlı olacak.

$a\neq0$ koşulu denklemin gerçekten ikinci mertebeden olmasını sağlar. $a=0$ olsaydı elimizde birinci mertebeden bir denklem kalırdı ve onu zaten çözebiliyoruz. $a\neq0$ olduğu için denklemi $a$'ya bölüp $y''$ katsayısını $1$ yapmak her zaman mümkündür; hesabın hiçbir yerinde tanımsızlık riski doğmaz.

:::

---

## Türevde Biçimini Koruyan Aday

Denklem $y$, $y'$ ve $y''$'nün sabit katsayılı toplamının sıfır olmasını istiyor.

Türev aldıkça biçimini koruyan bir aday seçelim:

$$
y=e^{rx},
\qquad
y'=re^{rx},
\qquad
y''=r^2e^{rx}
$$

::: {.notes}

Sabit katsayılar, türev aldıkça biçimini koruyan fonksiyonları doğal aday yapar. $y=e^{rx}$ seçildiğinde $y$, $y'$ ve $y''$ ortak $e^{rx}$ çarpanını taşır; denklemin bütün $x$ değerlerinde sağlanması, bu ortak çarpanın önündeki sayısal ifadenin sıfır olmasına indirgenir. Bu seçim olası bütün fonksiyonların birbirinin katı olduğu iddiasına dayanmaz; yalnızca bu denklem sınıfında temel çözümleri üreten uygun adayı verir.

$r$ henüz bilinmeyen bir sayıdır. Denklemin hangi $r$ değerlerini kabul ettiğini bularak fonksiyon arama problemini polinom kökü bulma problemine çeviririz. Bulunan üstel çözümlerin genel çözümü oluşturması, kök tipleri ve lineer bağımsızlık üzerinden ayrıca doğrulanır.

:::

---

## Karakteristik Denklem

$y=e^{rx}$ denemesi:

$$
a r^2e^{rx}+bre^{rx}+ce^{rx}=0
$$

$e^{rx}\neq0$ olduğundan bölünebilir:

$$
\boxed{ar^2+br+c=0}
$$

Bilinmeyeni $r$ olan bu cebirsel denkleme **karakteristik denklem** denir.

::: {.notes}

$y=e^{rx}$ adayını denkleme yerleştirelim. $y'=re^{rx}$ ve $y''=r^2e^{rx}$ olduğundan sol taraf $ar^2e^{rx}+bre^{rx}+ce^{rx}$, yani $(ar^2+br+c)e^{rx}$ olur. Üstel fonksiyon hiçbir $x$ için sıfır olmaz; $e^{rx}\neq0$ her zaman doğrudur. O hâlde çarpımın sıfır olması ancak parantez içinin sıfır olmasıyla mümkündür.

Geriye kalan $ar^2+br+c=0$ eşitliğine denklemin **karakteristik denklemi** denir. Dikkat edilecek nokta şu: bu bir cebirsel denklemdir, içinde $x$ geçmez, bilinmeyeni $r$ sayısıdır. Diferansiyel denklemi çözme işi, ikinci dereceden bir polinomun köklerini bulma işine indirgenmiş oldu.

Karşılık tam olarak şudur: karakteristik denklemin her kökü bir üstel çözüm üretir. $r_1$ bir kökse $e^{r_1x}$ diferansiyel denklemi sağlar. Ters yön de doğrudur; $e^{rx}$ biçiminde bir fonksiyon ancak $r$ karakteristik denklemin kökü ise çözüm olabilir. Bu yüzden bütün üstel çözümleri bulmak için polinomun bütün köklerini bulmak yeterlidir.

:::

---

## Terminoloji

- Karakteristik denklem: $ar^2+br+c=0$
- Kökler: $r_1$, $r_2$
- Her kök bir üstel çözüm verir: $e^{r_1x}$

Katsayı okuması doğrudan: $y''\to r^2$, $y'\to r$, $y\to1$.

::: {.notes}

Bazı kaynaklarda aynı denkleme yardımcı denklem de denir; ikisi aynı nesnedir. Kökler için $r_1,r_2$ gösterimi kullanılacak. Karakteristik denklemi yazmak için her seferinde $e^{rx}$ yerine koyma hesabını tekrarlamaya gerek yoktur: en yüksek türev $r^2$'ye, birinci türev $r$'ye, fonksiyonun kendisi $1$'e karşılık gelir. $y''-y'-6y=0$ denklemi için karakteristik denklem doğrudan $r^2-r-6=0$ olarak yazılır.

Bu kısayolun neden çalıştığı yukarıdaki türetimde duruyor: $y^{(k)}$ terimi $r^ke^{rx}$ üretiyor, ortak $e^{rx}$ çarpanı sadeleşince geriye katsayılarla $r$'nin kuvvetleri kalıyor. Kısayolu kullanırken denklemin sabit katsayılı ve homojen olduğunu kontrol edin; $xy''+y=0$ gibi bir denklemde $y''$'nin katsayısı sabit olmadığı için karakteristik denklem kurulamaz.

:::

---

## Hızlı Kontrol

$$
y''-y'-6y=0
$$

$$
r^2-r-6=(r-3)(r+2)=0
$$

$$
r_1=3,\qquad r_2=-2
$$

Çözüm adayları: $e^{3x}$ ve $e^{-2x}$.

::: {.notes}

Yöntemi bir denklemde uygulayalım. $y''-y'-6y=0$ için karakteristik denklem $r^2-r-6=0$'dır. Çarpanlara ayırma $(r-3)(r+2)=0$ verir, kökler $r_1=3$ ve $r_2=-2$'dir. Her kök bir üstel çözüm ürettiğine göre elimizde $e^{3x}$ ve $e^{-2x}$ var.

İsterseniz doğrulayın: $y=e^{3x}$ için $y'=3e^{3x}$, $y''=9e^{3x}$ ve $9e^{3x}-3e^{3x}-6e^{3x}=0$. Aynı hesap $e^{-2x}$ için $4e^{-2x}+2e^{-2x}-6e^{-2x}=0$ verir. İki fonksiyon da denklemi sağlıyor.

Genel çözümü yazmak için bir adım daha gerekiyor: bu iki çözümün lineer bağımsız olduğunu, yani bir temel çözüm kümesi oluşturduğunu göstermek. Süperpozisyon $c_1e^{3x}+c_2e^{-2x}$'in çözüm olduğunu söyler, ama bunun *bütün* çözümleri kapsadığını bağımsızlık garanti eder.

:::

---

## Çözümleri Doğrulayalım

$$
y=e^{3x}
\;\Longrightarrow\;
y''-y'-6y=(9-3-6)e^{3x}=0
$$

$$
y=e^{-2x}
\;\Longrightarrow\;
y''-y'-6y=(4+2-6)e^{-2x}=0
$$

::: {.notes}

Karakteristik kökler doğrudan çözüm değildir; her kök bir üstel çözüm üretir. Bu yüzden hızlı kontrolde bulunan iki adayı denkleme geri koyuyoruz. Her iki kontrolde de ortak üstel çarpan sıfır değildir ve parantez içindeki sayı sıfır çıkar.

Bu yerine koyma, karakteristik denklemin türetilişini küçük bir örnekte yeniden gösterir. Genel çözümü yazmadan önce iki adayın da aynı diferansiyel denklemi sağladığı görünür hâle gelir; sonraki adım bu iki çözümün bağımsızlığını kontrol etmektir.

:::

---

## Diskriminant Üç Durumu Ayırır

$$
r=\frac{-b\pm\sqrt{b^2-4ac}}{2a}
$$

| $b^2-4ac$ | Kökler |
|---|---|
| $>0$ | Farklı iki reel kök |
| $=0$ | Tek (çift) reel kök |
| $<0$ | Kompleks eşlenik çift |

::: {.notes}

Karakteristik denklem ikinci dereceden olduğu için kökler kök formülünden gelir ve diskriminantın işareti üç ayrı durum üretir. Diskriminant pozitifse iki farklı gerçek kök çıkar; bu durumda iki farklı üstel çözüm elde edilir ve genel çözüm doğrudan yazılır. Diskriminant sıfırsa tek bir gerçek kök vardır, yani elde bir tane üstel çözüm kalır — ikinci mertebe bir denklemin genel çözümü için iki bağımsız çözüm gerektiğinden burada bir eksik doğar. Diskriminant negatifse kökler kompleks eşlenik çift olur ve $e^{rx}$ ifadesi kompleks değerli bir fonksiyona dönüşür; oysa gerçek katsayılı bir denklemden gerçek değerli çözümler bekliyoruz.

Üç durumun ortak yanı karakteristik denklemin kurulmasıdır; ayrıldıkları yer, köklerden çözüme geçiş adımıdır. Burada ele alınan birinci durum, iki farklı gerçek kök durumudur. Kompleks kökler ve çift kök ayrı ayrı ele alınır; ikisinde de karakteristik denklem aynı biçimde kurulur, yalnızca köklerin okunması değişir.

Diskriminantı hesaplamak çoğu zaman gerekmez — çarpanlara ayrılabilen bir polinomda kökler doğrudan görülür. Diskriminant, çarpanlara ayırma denemesi sonuç vermediğinde ve hangi durumda olduğunuzu önceden bilmek istediğinizde işe yarar.

:::

---

## Farklı İki Reel Kök

$r_1\neq r_2$ gerçek kökler ise temel çözüm kümesi $\{e^{r_1x},e^{r_2x}\}$:

$$
W(e^{r_1x},e^{r_2x})=(r_2-r_1)e^{(r_1+r_2)x}\neq0
$$

$$
\boxed{y=c_1e^{r_1x}+c_2e^{r_2x}}
$$

::: {.notes}

İki farklı gerçek kök durumunda bağımsızlık kontrolü Wronskian ile yapılır. $y_1=e^{r_1x}$ ve $y_2=e^{r_2x}$ için

$$
W=y_1y_2'-y_1'y_2=e^{r_1x}\cdot r_2e^{r_2x}-r_1e^{r_1x}\cdot e^{r_2x}=(r_2-r_1)e^{(r_1+r_2)x}.
$$

Üstel çarpan hiçbir noktada sıfır olmaz, $r_1\neq r_2$ olduğu için $(r_2-r_1)$ de sıfırdan farklıdır. Wronskian her $x$ için sıfırdan farklı çıkar; iki çözüm lineer bağımsızdır ve bir temel çözüm kümesi oluşturur.

Buradan genel çözüm $y=c_1e^{r_1x}+c_2e^{r_2x}$ olarak yazılır. Genel çözüm olduğu için bu denklemin başka türlü yazılan hiçbir çözümü bu ailenin dışında kalmaz. Yukarıdaki $y''-y'-6y=0$ örneğinde $r_1=3$, $r_2=-2$ ve genel çözüm $y=c_1e^{3x}+c_2e^{-2x}$'tir.

Köklerin farklı olması bağımsızlığın kaynağıdır. İki kök çakıştığında $(r_2-r_1)$ çarpanı sıfırlanır ve Wronskian özdeş olarak sıfır olur — bu, çift kök durumunda neden ikinci bir çözüm aramak gerektiğinin cebirsel işaretidir.

:::

---

## Denklemi Önce Sadeleştirin

$$
2y''+2y'-12y=0
$$

İkiye bölmek karakteristik denklemi kolaylaştırır:

$$
r^2+r-6=(r+3)(r-2)=0
$$

$$
y=c_1e^{-3x}+c_2e^{2x}
$$

::: {.notes}

Karakteristik denklem kurulmadan önce ortak çarpan sadeleştirmek hesabı kısaltır. $2y''+2y'-12y=0$ denkleminin her terimi $2$'ye bölünürse $y''+y'-6y=0$ elde edilir; karakteristik denklem $r^2+r-6=0$ olur ve $(r+3)(r-2)$ çarpanlarına ayrılır. Kökler $-3$ ve $2$, genel çözüm $y=c_1e^{-3x}+c_2e^{2x}$'tir.

Bölme işlemi çözüm kümesini değiştirmez. Bir denklemi sıfırdan farklı bir sabitle çarpmak ya da bölmek, homojen denklemin sağladığı eşitliği bozmaz — sağ taraf sıfır olduğu için $0/2$ yine sıfırdır. Aynı gerekçe karakteristik denklem için de geçerlidir: $2r^2+2r-12=0$ ile $r^2+r-6=0$ aynı köklere sahiptir.

Bu adım homojen olmayan denklemlerde daha dikkatli yapılır: orada sağ taraf da aynı sabite bölünmek zorundadır. Şimdilik sağ taraf sıfır olduğu için böyle bir risk yok.

:::

---

## Soru: Sabitleri Nasıl Belirleriz?

$$
y''-y'-6y=0,\qquad y(0)=1,\quad y'(0)=8
$$

Genel çözüm elimizde:

$$
y=c_1e^{3x}+c_2e^{-2x}
$$

::: {.notes}

Genel çözüm iki keyfi sabit taşır ve sonsuz bir çözüm ailesini tanımlar. Belirli bir çözümü seçmek için iki koşul gerekir; ikinci mertebe bir denklemde bu koşullar tipik olarak $y(x_0)$ ve $y'(x_0)$ değerleridir. Varlık–teklik teoremi, sabit katsayılı bir denklemde bu iki değerin bütün gerçek eksende tek bir çözüm belirlediğini garanti eder.

Verilen problemde $y(0)=1$ ve $y'(0)=8$ koşulları var. Genel çözümü ve türevini $x=0$ noktasında değerlendirip $c_1$ ile $c_2$ için iki bilinmeyenli bir lineer denklem sistemi kuracağız. Sistemin çözülebilir olması tesadüf değildir: katsayı determinantı tam olarak $x=0$ noktasındaki Wronskian'dır ve bağımsızlık kontrolünde onun sıfırdan farklı olduğu gösterilmişti.

:::

---

## Çözüm: İki Bilinmeyenli Sistem

$$
y'=3c_1e^{3x}-2c_2e^{-2x}
$$

$x=0$ için:

$$
c_1+c_2=1,\qquad 3c_1-2c_2=8
$$

$$
\boxed{y=2e^{3x}-e^{-2x}}
$$

::: {.notes}

Genel çözümün türevi $y'=3c_1e^{3x}-2c_2e^{-2x}$'tir. $x=0$ yazıldığında bütün üstel terimler $1$ olur ve iki koşul $c_1+c_2=1$ ile $3c_1-2c_2=8$ denklemlerine dönüşür. Birinci denklemin iki katını ikinciye eklersek $5c_1=10$, yani $c_1=2$ ve buradan $c_2=-1$ bulunur. Aranan çözüm $y=2e^{3x}-e^{-2x}$'tir.

Sonucu doğrulamak kısa sürer: $y(0)=2-1=1$ ✓ ve $y'(0)=6+2=8$ ✓. Denklemin kendisi de sağlanır, çünkü her iki terim ayrı ayrı çözümdür ve süperpozisyon lineer birleşimi korur.

Sabitleri belirlerken sık yapılan bir hata, koşulları genel çözümün türevini almadan uygulamaya çalışmaktır. $y'(0)$ koşulu ancak $y'$ ifadesi yazıldıktan sonra kullanılabilir; üstel terimlerin türevinde kök katsayısı öne çıkar ve sistemin ikinci denklemini o katsayılar belirler.

:::

---

## Kökler Davranışı Belirler

$$
y=2e^{3x}-e^{-2x}
$$

- $r=3>0$: bileşen büyür
- $r=-2<0$: bileşen söner

Büyük $x$ için baskın olan, en büyük köke ait terimdir.

::: {.notes}

Çözümü bulmakla iş bitmez; kökler çözümün niteliksel davranışını okumaya da yarar. Pozitif kökten gelen $e^{3x}$ bileşeni $x$ büyüdükçe sınırsız artar, negatif kökten gelen $e^{-2x}$ bileşeni sıfıra yaklaşır. Yeterince büyük $x$ değerlerinde çözümün davranışını en büyük kök belirler; burada $2e^{3x}$ terimi baskındır.

Bu okuma başlangıç koşullarından bağımsızdır: $c_1\neq0$ olduğu sürece büyük $x$ davranışını $e^{3x}$ yönetir. $c_1=0$ olacak biçimde seçilmiş özel başlangıç koşullarında ise çözüm tamamen sönen bileşene indirgenir.

İki kök de negatifse bütün çözümler sıfıra yaklaşır ve denge çözümü $y\equiv0$ kararlı olur. İçlerinden biri pozitifse tipik çözümler uzaklaşır. Denge çözümlerinin kararlılığını birinci mertebe otonom denklemlerde işaret analiziyle okumuştuk; sabit katsayılı lineer denklemlerde aynı bilgi köklerin işaretinde durur.

:::

---

## Teknik Bağlam: Aşırı Sönümlü Sistem

Kütle–yay–sönümleyici sistemi:

$$
my''+cy'+ky=0
$$

$c^2>4mk$ olduğunda iki farklı negatif reel kök çıkar.

Sistem salınmadan denge konumuna döner.

::: {.notes}

Sabit katsayılı ikinci mertebe denklemlerin en yaygın karşılığı mekanik titreşim modelidir. Bir kütle yaya bağlı ve ayrıca hıza karşı direnç gösteren bir sönümleyiciyle çalışıyorsa, konum $y(t)$ için denklem $my''+cy'+ky=0$ olur: $m$ kütle, $c$ sönüm katsayısı, $k$ yay sabiti. Üçü de pozitiftir.

Karakteristik denklem $mr^2+cr+k=0$ ve diskriminant $c^2-4mk$'dir. Sönüm yeterince güçlüyse, yani $c^2>4mk$ ise, iki farklı gerçek kök çıkar. Her ikisi de negatiftir: kökler toplamı $-c/m<0$ ve çarpımı $k/m>0$ olduğundan iki kök aynı işaretli ve negatif olmak zorundadır. Bu duruma **aşırı sönüm** denir; çözüm iki sönen üstelin toplamıdır ve sistem denge konumuna salınım yapmadan döner.

Kapı kapatıcıları bu davranışa göre ayarlanır: kapı hızla ama çarpmadan kapanmalı, denge noktası etrafında gidip gelmemelidir. Sönüm azaltıldığında diskriminant işaret değiştirir ve salınımlı çözümler ortaya çıkar; o durum kompleks köklerin konusudur.

:::

---

## Sık Yapılan Hatalar

1. $e^{rx}$ yerine doğrudan $r$ yazmak
2. Karakteristik denklemi $x$'in denklemi sanmak
3. İki kök için tek sabit yazmak
4. Kök işaretlerini çözüme yanlış taşımak
5. Değişken katsayılı denkleme yöntemi uygulamak

::: {.notes}

Birinci hata, karakteristik denklemin nereden geldiğini atlamaktan doğar. $y''$ yerine doğrudan $r^2$ yazmak bir kısayoldur; arkasında $y=e^{rx}$ denemesi ve ortak $e^{rx}$ çarpanının sadeleştirilmesi vardır. Kısayolu ezberleyip gerekçesini kaybetmek, kısayolun geçerli olmadığı denklemlerde hataya götürür.

İkinci hata terminolojiktir ama sonuç doğurur: $ar^2+br+c=0$ denkleminde bilinmeyen $r$'dir, $x$ değil. Kökleri "çözümün kendisi" sanıp $y=3$ ve $y=-2$ yazmak bu karışıklığın tipik sonucudur; kökler çözüm değil, üstel çözümlerin katsayılarıdır.

Üçüncü hata, iki bağımsız çözüm bulup genel çözümü $y=c_1(e^{3x}+e^{-2x})$ gibi tek sabitle yazmaktır. Tek sabit içeren bir aile, iki başlangıç koşulunu genel olarak sağlayamaz; her bağımsız çözüm kendi sabitini taşır. Dördüncü hata işaretle ilgilidir: kök $-2$ ise çözüm $e^{-2x}$'tir, $e^{2x}$ değil. Beşincisi kapsam hatasıdır: $x^2y''-3xy'+3y=0$ gibi değişken katsayılı bir denklemde $e^{rx}$ denemesi ortak çarpanı sadeleştirmez, çünkü geriye $x$'e bağlı terimler kalır. O denklem sınıfı ayrıca ele alınır.

:::

---

## Karar Soruları

Hesap yapmadan yanıtlayın:

1. $y''+5y'=0$ denkleminin kökleri nedir?
2. Kökleri $-1$ ve $4$ olan monik denklem hangisidir?
3. $y=c_1e^{x}+c_2e^{x}$ neden genel çözüm değildir?

::: {.notes}

Birinci soruda $c=0$'dır ve karakteristik denklem $r^2+5r=r(r+5)=0$ olur. Kökler $0$ ve $-5$'tir. Sıfır kökü $e^{0\cdot x}=1$ sabit çözümünü verir; genel çözüm $y=c_1+c_2e^{-5x}$'tir. Sıfır kökünü "kök yok" diye atlamak yaygın bir kayıptır — sabit fonksiyon da bir çözümdür.

İkinci soruda kökler verilmiş, denklem isteniyor. Kökleri $-1$ ve $4$ olan monik polinom $(r+1)(r-4)=r^2-3r-4$'tür, karşılık gelen diferansiyel denklem $y''-3y'-4y=0$'dır. Bu yön, karakteristik denklem ile diferansiyel denklem arasındaki eşleşmenin çift yönlü olduğunu gösterir.

Üçüncü soruda $c_1e^x+c_2e^x=(c_1+c_2)e^x$ yazılabilir; iki sabit tek bir sabite indirgeniyor. Aile aslında tek parametreli, dolayısıyla iki başlangıç koşulunu genel olarak sağlayamaz. Aynı fonksiyon iki kez sayıldığında bağımsızlık kaybolur; Wronskian bu durumda özdeş olarak sıfırdır.

:::

---

## Sonraki Adım: Diskriminant Negatifse

$$
y''+2y'+10y=0
\quad\Longrightarrow\quad
r=-1\pm3i
$$

$e^{(-1+3i)x}$ kompleks değerli bir fonksiyon.

Gerçek katsayılı bir denklemden gerçek çözüm bekliyoruz.

::: {.notes}

Karakteristik denklem yöntemi diskriminantın işaretine bakmadan çalışır — kökler her durumda bulunur. Sorun köklerden çözüme geçişte çıkar. $y''+2y'+10y=0$ denkleminde kökler $r=-1\pm3i$'dir ve $e^{(-1+3i)x}$ ifadesi kompleks üstel bir fonksiyondur. Denklemin katsayıları gerçek, aranan $y(x)$ fonksiyonu gerçek değerli; kompleks bir ifadeyi çözüm diye bırakmak bu beklentiyle uyuşmaz.

Bu geçişi Euler formülü kurar: kompleks üsteli sinüs ve kosinüs cinsinden yazar, iki kompleks çözümün uygun lineer birleşimleri gerçek değerli bir temel çözüm kümesi verir. Çift kök durumunda — diskriminantın sıfır olduğu hâl — eksik olan şey ikinci bağımsız çözümdür; bu durum ayrıca ele alınır.

:::

---

## Kaynak Notu

Ana kaynak: Nagle, Saff ve Snider.

::: {.notes}

Sabit katsayılı homojen denklem anlatımı, Nagle, Saff ve Snider kaynağındaki klasik yaklaşımı izler: üstel deneme, karakteristik denklem, diskriminanta göre üç durum. Burada özellikle önemli olan iki nokta, $e^{rx}$ denemesinin nereden çıktığı ve iki farklı reel kökün bağımsızlığının Wronskian ile nasıl doğrulandığıdır.

:::

---
