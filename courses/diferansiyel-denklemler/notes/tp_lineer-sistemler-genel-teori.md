---
title: "Lineer Sistemlerin Genel Teorisi ve Temel Matris"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-08-05
execute:
  echo: false
---

## Süperpozisyon Sistemlerde de Geçerli

$\mathbf{x}_1$ ve $\mathbf{x}_2$ çözümse:

$$
c_1\mathbf{x}_1+c_2\mathbf{x}_2
$$

de çözümdür.

::: {.notes}

Homojen sistemin çözüm kümesi lineer yapıya sahiptir. Gerekçe tek denklemdekiyle aynı: hem türev alma hem matrisle çarpma lineer işlemlerdir.

Doğrulayalım. $\mathbf{x}=c_1\mathbf{x}_1+c_2\mathbf{x}_2$ alalım. Türevi $c_1\mathbf{x}_1'+c_2\mathbf{x}_2'$'dir. Her biri kendi denklemini sağladığından bu ifade $c_1A\mathbf{x}_1+c_2A\mathbf{x}_2$'ye eşittir. Matris çarpımı toplama üzerinde dağıldığı için sonuç $A(c_1\mathbf{x}_1+c_2\mathbf{x}_2)=A\mathbf{x}$ olur ✓.

Süperpozisyon, çözümlerin bir vektör uzayı oluşturduğu anlamına gelir. Geri kalan bütün yapı bu gözlemin üzerine kurulacak: uzayın boyutu ne, tabanı nasıl seçilir, bir çözüm bu tabanla nasıl yazılır.

Homojen olmayan sistemlerde süperpozisyon bu biçimde geçerli değildir. İki çözümün toplamı sağ tarafı iki katına çıkarır; bu ayrım tek denklemlerde de aynıydı.

:::

---

## Varlık ve Teklik

$A(t)$ ve $\mathbf{f}(t)$ bir $I$ aralığında sürekliyse:

$$
\mathbf{x}'=A(t)\mathbf{x}+\mathbf{f}(t),
\quad
\mathbf{x}(t_0)=\mathbf{x}_0
$$

$I$ üzerinde **tek** çözümü vardır.

::: {.notes}

Teorem, tek denklemdeki karşılığının doğrudan genellemesidir ve koşulları da aynı biçimde süreklilik üzerinden verilir. Matrisin bütün girdileri ve girdi vektörünün bütün bileşenleri $I$ üzerinde sürekliyse, başlangıç değer probleminin çözümü vardır ve tektir.

Teklik güçlü bir sonuç doğurur: aynı durumdan iki farklı gelecek çıkamaz. Faz düzleminde bunun karşılığı, yörüngelerin kesişmemesidir. İki yörünge bir noktada kesişseydi, o noktayı başlangıç alan problem iki farklı çözüme sahip olurdu.

Çözümün tanımlı olduğu aralık, sürekliliğin sağlandığı aralığın tamamıdır. Bu, lineer olmayan denklemlerden ayrılan bir noktadır; orada çözüm sonlu bir zamanda patlayabiliyordu. Lineer sistemlerde böyle bir kaçış yoktur.

Sabit katsayılı sistemlerde $A$ zaten süreklidir, dolayısıyla koşul kendiliğinden sağlanır ve çözümler $(-\infty,\infty)$ üzerinde tanımlıdır.

:::

---

## Kaç Bağımsız Çözüm?

$n$ boyutlu homojen sistemin çözüm uzayı $n$ boyutludur.

$$
\mathbf{x}_1,\ldots,\mathbf{x}_n
$$

bağımsızsa genel çözüm bunların birleşimidir.

::: {.notes}

Çözüm uzayının boyutu sistemin boyutuna eşittir. Gerekçe teklik teoreminden gelir: $t_0$ anındaki durum vektörü $n$ bileşenlidir ve her durum tek bir çözüm belirler. Yani çözümlerle $\mathbb{R}^n$ arasında birebir eşleşme vardır.

Bu, tek denklemdeki sonucun aynısıdır: $n$'inci mertebe denklemin çözüm uzayı $n$ boyutluydu. Zaten indirgeme yoluyla biri diğerine dönüşüyordu.

Pratik sonuç şudur: $n$ tane bağımsız çözüm bulunduğunda iş bitmiştir. Başka çözüm aramaya gerek yoktur, çünkü her çözüm bunların lineer birleşimidir.

Geriye tek soru kalıyor: elimizdeki $n$ vektör fonksiyonunun bağımsız olup olmadığını nasıl anlarız?

:::

---

## Wronskian: Sistem Biçimi

$$
W(t)=\det\bigl[\mathbf{x}_1(t)\;\cdots\;\mathbf{x}_n(t)\bigr]
$$

Çözümleri sütun olarak diz, determinantı al.

::: {.notes}

Çözüm vektörlerini yan yana koyup bir matris kuralım. Bu matrisin determinantına, sistemler için Wronskian denir.

Tek denklemdeki Wronskian, çözümlerin türevlerinden kurulmuş bir determinanttı. Burada türev almaya gerek yok, çünkü bilgi zaten bileşenlerde duruyor. İndirgeme yapıldığında iki tanımın örtüştüğü görülür: $x_1=y$, $x_2=y'$ olduğundan sütunlar tam olarak eski Wronskian'ın satırlarını verir.

Kullanımı da aynıdır. Bir $t$ değerinde $W\neq0$ ise çözümler bağımsızdır. Üstelik lineer sistemlerde daha güçlü bir sonuç geçerlidir: çözümlerin Wronskian'ı ya her yerde sıfırdır ya hiçbir yerde sıfır değildir. Dolayısıyla tek bir uygun $t$ değerinde kontrol etmek yeterlidir; genellikle $t=0$ seçilir, çünkü hesap orada en kısadır.

:::

---

## Soru: Bağımsızlık Kontrolü

$$
\mathbf{x}_1=e^{-t}\begin{bmatrix}1\\1\end{bmatrix},
\qquad
\mathbf{x}_2=e^{-3t}\begin{bmatrix}1\\-1\end{bmatrix}
$$

$$
A=\begin{bmatrix}-2&1\\1&-2\end{bmatrix}
$$

::: {.notes}

Verilen iki vektör fonksiyonunun bu sistemin çözümü olduğunu önce doğrulayalım.

$\mathbf{x}_1$ için türev $-e^{-t}\begin{bmatrix}1\\1\end{bmatrix}$'dir. Diğer yandan $A\mathbf{x}_1=e^{-t}\begin{bmatrix}-2+1\\1-2\end{bmatrix}=e^{-t}\begin{bmatrix}-1\\-1\end{bmatrix}$ olur. İki taraf eşit ✓.

$\mathbf{x}_2$ için türev $-3e^{-3t}\begin{bmatrix}1\\-1\end{bmatrix}$'dir. Çarpım $A\mathbf{x}_2=e^{-3t}\begin{bmatrix}-2-1\\1+2\end{bmatrix}=e^{-3t}\begin{bmatrix}-3\\3\end{bmatrix}$ olur ve bu da $-3e^{-3t}\begin{bmatrix}1\\-1\end{bmatrix}$'e eşittir ✓.

İkisi de çözüm. Şimdi bağımsızlıklarını kontrol edelim.

:::

---

## Çözüm: Determinant

$$
W(t)=
\begin{vmatrix}
e^{-t} & e^{-3t}\\
e^{-t} & -e^{-3t}
\end{vmatrix}
=-2e^{-4t}
$$

$W\neq0$ → bağımsız → temel çözüm kümesi.

::: {.notes}

Determinantı açalım: $e^{-t}\cdot(-e^{-3t})-e^{-3t}\cdot e^{-t}=-e^{-4t}-e^{-4t}=-2e^{-4t}$.

Üstel fonksiyon hiçbir $t$ için sıfır olmadığından $W$ her yerde sıfırdan farklıdır. İki çözüm bağımsızdır ve sistem iki boyutlu olduğu için temel çözüm kümesi oluştururlar.

$t=0$ değerine bakmak da yeterdi: $W(0)=-2$. Wronskian'ın ya hep sıfır ya hiç sıfır olmaması, tek noktada kontrolü meşru kılıyor.

Genel çözüm $\mathbf{x}=c_1e^{-t}\begin{bmatrix}1\\1\end{bmatrix}+c_2e^{-3t}\begin{bmatrix}1\\-1\end{bmatrix}$'dir. Açık biçimde $x_1=c_1e^{-t}+c_2e^{-3t}$ ve $x_2=c_1e^{-t}-c_2e^{-3t}$ olur.

Çözümü yorumlayalım. İki üstel de sönüyor, yani her başlangıç durumundan yola çıkan yörünge orijine gidiyor. İki tank örneğinde bu, tuzun zamanla dengelenip sıfıra inmesi demektir.

:::

---

## Temel Matris

$$
X(t)=\bigl[\mathbf{x}_1(t)\;\cdots\;\mathbf{x}_n(t)\bigr]
$$

$$
\mathbf{x}=X(t)\,\mathbf{c}
$$

Genel çözüm tek satırda.

::: {.notes}

Bağımsız çözümleri sütun olarak taşıyan matrise temel matris denir. Wronskian, bu matrisin determinantından başka bir şey değildir.

Temel matrisin kendisi bir denklem sağlar: $X'=AX$. Her sütun ayrı ayrı $\mathbf{x}_i'=A\mathbf{x}_i$ denklemini sağladığı için matris çarpımı bunu bir arada ifade eder.

Genel çözüm $\mathbf{x}=X(t)\mathbf{c}$ olarak yazılır; burada $\mathbf{c}$ sabit bileşenlerden oluşan bir vektördür. Açılırsa $c_1\mathbf{x}_1+\cdots+c_n\mathbf{x}_n$ elde edilir, yani lineer birleşimin matris dilindeki karşılığı.

Örnekteki sistem için $X(t)=\begin{bmatrix}e^{-t}&e^{-3t}\\e^{-t}&-e^{-3t}\end{bmatrix}$'dir.

:::

---

## Başlangıç Koşulunu Uygulamak

$$
X(t_0)\,\mathbf{c}=\mathbf{x}_0
$$

$$
\mathbf{c}=X(t_0)^{-1}\mathbf{x}_0
$$

$W\neq0$ olduğu için ters her zaman var.

::: {.notes}

Başlangıç koşulu $\mathbf{x}(t_0)=\mathbf{x}_0$ verildiğinde $X(t_0)\mathbf{c}=\mathbf{x}_0$ denklemi çözülür. Bu, lineer cebirde tanıdık bir problemdir: katsayı matrisi bilinen bir denklem sistemi.

Çözümün varlığı ve tekliği Wronskian'a bağlıdır. $W(t_0)=\det X(t_0)\neq0$ olduğundan matris tersinirdir ve $\mathbf{c}$ tek biçimde belirlenir.

Temel çözüm kümesi tanımının neden bağımsızlık istediği burada görülüyor: bağımlı çözümlerle kurulan matris tersinir olmaz ve bazı başlangıç koşulları karşılanamaz.

Örneğimizde $\mathbf{x}(0)=\begin{bmatrix}4\\0\end{bmatrix}$ olsun. $X(0)=\begin{bmatrix}1&1\\1&-1\end{bmatrix}$ ve sistem $c_1+c_2=4$, $c_1-c_2=0$ verir. Buradan $c_1=c_2=2$ çıkar ve çözüm $\mathbf{x}=2e^{-t}\begin{bmatrix}1\\1\end{bmatrix}+2e^{-3t}\begin{bmatrix}1\\-1\end{bmatrix}$ olur.

:::

---

## Homojen Olmayan Sistemler

$$
\mathbf{x}'=A\mathbf{x}+\mathbf{f}(t)
$$

$$
\mathbf{x}=\mathbf{x}_h+\mathbf{x}_p
$$

Yapı tek denklemdekiyle aynı.

::: {.notes}

Sağ tarafta $\mathbf{f}$ varsa genel çözüm iki parçadan oluşur: homojen sistemin genel çözümü ve homojen olmayan sistemin herhangi bir özel çözümü.

Gerekçe her zamanki gibi lineerliktir. $\mathbf{x}$ ve $\mathbf{x}_p$ ikisi de homojen olmayan sistemi sağlıyorsa, farkları homojen sistemi sağlar; dolayısıyla fark $\mathbf{x}_h$ ailesinin bir üyesidir.

Özel çözümü bulma yöntemleri de tek denklemdekilerin karşılıklarıdır ve ilerideki bir konuda kurulacak.

Yapısal sonucun pratik değeri şudur: homojen sistemi bir kez çözmek, aynı $A$ matrisine sahip bütün homojen olmayan problemler için yeterlidir. Girdi değiştiğinde yalnız $\mathbf{x}_p$ yeniden hesaplanır.

:::

---

## Sık Yapılan Hatalar

1. Wronskian'ı türevlerden kurmaya çalışmak
2. Bağımsızlığı tek bir $t$ değerinde bileşenlere bakarak yargılamak
3. Sabit sayısını bileşen sayısıyla karıştırmak
4. Temel matrisi çözümlerle satır satır doldurmak
5. Homojen olmayan sistemde süperpozisyon kullanmak

::: {.notes}

Birinci hata tek denklemdeki tanımı olduğu gibi taşımaktan doğar. Sistemlerde çözümler zaten vektördür; sütunlara yerleştirilir ve türev alınmaz.

İkinci hata, iki vektör fonksiyonunun belirli bir anda paralel görünmesine bakarak bağımlı denmesidir. Bağımsızlık, sabit katsayılarla kurulan bir ilişkinin yokluğudur; tek bir andaki paralellik bunu belirlemez. Karar Wronskian ile verilir.

Üçüncü hata boyut karışıklığıdır. İki boyutlu bir sistemde iki serbest sabit vardır — her çözüm vektörü için bir tane. Her bileşen için ayrı sabit yazmak dört sabit üretir ve çözüm ailesini gereğinden geniş gösterir.

Dördüncü hata temel matrisi devrik kurmaktır. Çözümler sütundur; satır olarak yazılırsa $X'=AX$ denklemi sağlanmaz.

:::

---

## Karar Soruları

1. $W(t)=0$ ise çözümler bağımlı mı?
2. Üç boyutlu sistemde iki bağımsız çözüm yeterli mi?
3. $\mathbf{x}_p$ ile $2\mathbf{x}_p$ ikisi de çözüm mü?

::: {.notes}

Birincisinde cevap koşulludur. Vektör fonksiyonları **aynı lineer sistemin çözümleriyse** $W\equiv0$ bağımlılığı gösterir. Rastgele seçilmiş vektör fonksiyonlarında bu çıkarım geçerli değildir; bir noktada determinantın sıfır olması bağımlılık kanıtlamaz.

İkincisinde cevap hayırdır. Çözüm uzayı üç boyutludur; iki çözüm bir alt uzay üretir ve bazı başlangıç koşulları bu alt uzayın dışında kalır. Üçüncü bir bağımsız çözüm bulunmadan genel çözüm yazılamaz.

Üçüncüsünde cevap hayırdır. $\mathbf{x}_p$ homojen olmayan sistemi sağlıyorsa $2\mathbf{x}_p$ sağ tarafı iki katına çıkarır: $(2\mathbf{x}_p)'=2A\mathbf{x}_p+2\mathbf{f}\neq A(2\mathbf{x}_p)+\mathbf{f}$. Özel çözüm ölçeklenemez; genel çözümde önüne sabit konmaz.

:::

---

## Sonraki Adım: Çözümleri Nereden Bulacağız?

Teori kuruldu, ama $\mathbf{x}_1$ ve $\mathbf{x}_2$ hazır verilmişti.

$$
\mathbf{x}=e^{\lambda t}\mathbf{v}
\quad\text{denemesi ne verir?}
$$

::: {.notes}

Buraya kadar çözüm uzayının yapısını kurduk: boyut, bağımsızlık kontrolü, temel matris, başlangıç koşullarının uygulanması. Ama çözümlerin kendisi hep hazır verildi ve yalnız doğrulandı.

Şimdi onları üretmek gerekiyor. Tek denklemde bu iş $y=e^{rx}$ denemesiyle yapılmıştı ve karakteristik denkleme götürmüştü.

Sistemlerde doğal aday $\mathbf{x}=e^{\lambda t}\mathbf{v}$'dir: üstel bir zaman bağımlılığı ve sabit bir yön vektörü. Bu aday denkleme yerleştirildiğinde $\lambda$ ve $\mathbf{v}$ için bir koşul çıkacak.

Dikkat çeken şey, doğrulanan iki çözümün de tam bu biçimde olmasıydı: $e^{-t}\begin{bmatrix}1\\1\end{bmatrix}$ ve $e^{-3t}\begin{bmatrix}1\\-1\end{bmatrix}$. Bu vektörlerin ve üstellerin nereden geldiği özdeğer ve özvektörler üzerinden görülür.

:::

---

## Kaynak Notu

Ana kaynak: Nagle, Saff ve Snider.

::: {.notes}

Lineer sistemler genel teorisi anlatımı, Nagle, Saff ve Snider kaynağındaki klasik yaklaşımı izler: süperpozisyon, varlık-teklik teoremi, Wronskian'ın sistem biçimi, temel çözüm kümesi ve temel matris. Buradaki vurgu, teoremlerin ispatından çok, tek denklemlerde kurulan yapının sistemlere nasıl taşındığını görmektir; Wronskian burada da pratik bir bağımsızlık kontrolü olarak kullanılır.

:::

---
