---
title: "Ayrılabilir Denklemler: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
description: "Ayrılabilir denklemi tanıma, değişkenleri ayırma, sabit çözümleri koruma ve örtük çözümü yorumlama pratiği."
execute:
  echo: false
---

# Ayrılabilir Denklemler: Alıştırmalar

Bir denklem $y'=g(x)h(y)$ biçimine getirilebiliyorsa değişkenler iki tarafa
ayrılabilir. İşlem sırasında $h(y)$'ye bölmek, $h(y)=0$ sağlayan sabit
çözümleri kaybettirebilir. Bu nedenle ayırmadan önce denge çözümleri ayrıca
kaydedilir.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Dördü ayrılabilir, ikisi ayrılabilir olmayan altı denklem üret. Önce yalnız
> sınıflandırmamı bekle. Çözüm aşamasında böldüğüm ifadenin sıfır olabileceği
> durumları bana sor; kayıp sabit çözümleri doğrudan söyleme.
:::

## Ayrılabilir Yapıyı Tanıma

### Örnek 1: Çarpım Biçimi

$$
y'=e^{x-y}=e^x e^{-y}
$$

ayrılabilirdir. $e^y$ ile çarpınca

$$
e^y\,dy=e^x\,dx
$$

elde edilir.

### Örnek 2: Ortak Çarpanı Görme

$$
y'=x+xy=x(1+y)
$$

denkleminde sağ taraf ilk bakışta toplamdır; $x$ ortak çarpanı alınca
$g(x)h(y)$ yapısı görünür.

## Değişkenleri Ayırma ve İntegral

### Örnek 3: Başlangıç Değer Problemi

$$
y'=\frac{1+x}{y},\qquad y(0)=2.
$$

$$
y\,dy=(1+x)\,dx
$$

ve integrasyonla

$$
\frac{y^2}{2}=x+\frac{x^2}{2}+C
$$

bulunur. Başlangıç koşulu $2=C$ verir:

$$
y^2=x^2+2x+4.
$$

$y(0)=2$ pozitif dalı seçtiği için

$$
y=\sqrt{x^2+2x+4}.
$$

Kök içi $(x+1)^2+3>0$ olduğundan çözüm bütün gerçek sayılarda tanımlıdır.

### Örnek 4: Örtük Çözüm

$$
y'=\frac{x^2}{1-y^2}
$$

için

$$
(1-y^2)\,dy=x^2\,dx,
$$

$$
y-\frac{y^3}{3}=\frac{x^3}{3}+C.
$$

$y$'yi açıkça yalnız bırakmak gerekli değildir. Örtük bağıntı, türevlenerek
orijinal denklemi geri veriyorsa geçerli bir çözüm gösterimidir.

## Kayıp Sabit Çözümler

### Örnek 5: Bölmeden Önce Kontrol

$$
y'=y(y-1)
$$

denkleminde $y=0$ ve $y=1$ sabit çözümlerdir. Genel çözümü ararken
$y(y-1)$'e bölünürse bu iki çözüm işlem hattından çıkar. Bu yüzden önce

$$
y\equiv0,\qquad y\equiv1
$$

kaydedilir, sonra sabit olmayan çözümler için

$$
\frac{dy}{y(y-1)}=dx
$$

yazılır.

## Ek Çözümlü Örnekler

### Örnek A: Kısmi Kesirlerle Tam Çözüm

$$
y'=y(2-y),\qquad y(0)=1.
$$

**Tanı.** Denklem otonom ve ayrılabilirdir. $y=0$ ile $y=2$ sabit çözümleri
önce kaydedilir.

**Ayırma ve kısmi kesir.**

$$
\frac{dy}{y(2-y)}=dx,
\qquad
\frac1{y(2-y)}=\frac1{2y}+\frac1{2(2-y)}.
$$

$$
\frac12\ln|y|-\frac12\ln|2-y|=x+C.
$$

**Başlangıç koşulu ve açık çözüm.**

$$
\frac{y}{2-y}=Ke^{2x},\qquad K=1,
$$

$$
\boxed{y=\frac{2e^{2x}}{1+e^{2x}}}.
$$

**Doğrulama.** Çözüm $0<y<2$ aralığında kalır, artar ve $y=2$ dengesine
yaklaşır. Bu davranış faz çizgisiyle uyumludur.

### Örnek B: Trigonometrik Sağ Taraf

$$
y'=(1+y^2)\cos x,\qquad y(0)=0.
$$

$$
\frac{dy}{1+y^2}=\cos x\,dx,
\qquad
\arctan y=\sin x+C.
$$

Başlangıç koşulu $C=0$ verir:

$$
\boxed{y=\tan(\sin x)}.
$$

$|\sin x|\leq1<\pi/2$ olduğundan $\cos(\sin x)$ sıfır olmaz; çözüm bütün
gerçek sayılarda tanımlıdır.

## Hata Avı

### Örnek 6: Toplamı Ayırmaya Çalışmak

$y'=x+y$ denklemi $dy/y=dx/x$ biçiminde ayrılamaz. Toplamın terimleri iki
tarafa keyfî olarak dağıtılamaz.

### Örnek 7: İki İntegrasyon Sabiti

İki tarafta ayrı ayrı $C_1$ ve $C_2$ yazılabilir; ancak eşitlik düzenlendiğinde
farkları tek bir $C$ sabitinde birleşir.

## Adım Adım İşlem Pratiği

### Örnek 8

$$
y'=xy,\qquad y\neq0
$$

için

$$
\frac{dy}{y}=x\,dx,\quad
\ln|y|=\frac{x^2}{2}+C,\quad
y=Ce^{x^2/2}.
$$

$C=0$ seçimi sabit $y=0$ çözümünü de kapsar.

### Örnek 9

$$
y'=(1+x^2)(1+y^2)
$$

için

$$
\arctan y=x+\frac{x^3}{3}+C.
$$

## Karma Çalışma Soruları

### Soru 1

$y'=e^{x-y}$ denklemini çözün.

### Soru 2

$y'=x(1+y),\ y(0)=0$ problemini çözün ve doğrulayın.

### Soru 3

$y'=(1+x^2)/(1+y^2)$ denklemini örtük biçimde çözün.

### Soru 4

$y'=y(y-2)$ denkleminin sabit çözümlerini ayırma işleminden önce bulun.

### Soru 5

$y'=x/y,\ y(0)=-1$ problemini çözün; başlangıç koşulunun hangi dalı seçtiğini
belirtin.

### Soru 6

$y'=y/x+1$ denkleminin ayrılabilir olup olmadığını gerekçelendirin.

### Soru 7

$y'=(x+1)(y-3)^2$ denkleminin sabit çözümünü ve sabit olmayan çözüm ailesini
bulun.

### Soru 8

$y'=x^2/(1-y^2)$ çözümünde $y=\pm1$ değerlerinin neden ayrıca incelenmesi
gerektiğini açıklayın.

### Soru 9

$y'=2xy^2,\ y(0)=1$ problemini çözün ve başlangıç noktasını içeren en geniş
çözüm aralığını bulun.

### Soru 10

Bir örtük çözümü türevleyerek doğrulama adımlarını kendi seçtiğiniz ayrılabilir
bir denklem üzerinde gösterin.

## Çalışmanızı Kontrol Etme

> Çözümümü çarpım biçimini doğru kurma, böldüğüm ifadenin sıfır olduğu sabit
> çözümleri koruma, integral ve başlangıç koşulu, açık çözüm dalı ve çözüm
> aralığı açısından incele. Hata varsa doğru çözümü vermeden ilk kayıp koşulu
> veya yanlış ayırma adımını belirt.
