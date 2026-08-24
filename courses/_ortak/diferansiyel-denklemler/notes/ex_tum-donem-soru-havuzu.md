---
title: "Dönem Sonu Çalışma Havuzu"
subtitle: "MATE 214 Diferansiyel Denklemler — 50 Soru"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-24
description: "Birinci mertebe yöntemleri, yüksek mertebeli denklemler, Cauchy–Euler, Laplace dönüşümü ve konvolüsyon ağırlıklı 50 soruluk çalışma havuzu."
execute:
  echo: false
---

# Dönem Sonu Çalışma Havuzu

Bu havuz, bütün konu başlıklarını eşit sayıda temsil etmez. Sorular; yöntem
seçme, tam çözüm kurma, başlangıç koşullarını uygulama ve sonucu doğrulama
becerileri çevresinde toplanmıştır.

Her soruda önce denklem sınıfını ve kullanacağınız yöntemi yazın. İşlemler
boyunca böldüğünüz ifadeleri, kök katlılıklarını, başlangıç değerlerini ve
çözüm aralığını izleyin. Soruların çözümleri bu notta verilmemiştir.

## Konu Takip Yönergesi

### Tam Çözüm Düzeyinde Çalışılacaklar

Bu başlıklarda boş kâğıtta baştan sona çözüm kurabilmelisiniz:

- Ayrılabilir, lineer ve Bernoulli denklemleri
- Homojen tip denklemler
- Tam denklem ve integrasyon çarpanı
- Ortogonal yörüngeler
- Sabit katsayılı homojen denklemler
- Yüksek mertebeli başlangıç değer problemleri
- Belirsiz katsayılar ve sabitlerin değişimi
- Cauchy–Euler denklemleri
- Laplace ile başlangıç değer problemleri
- Konvolüsyon ve integral denklemleri

Bu grupta yalnız sonuç yazmak yeterli bir hazırlık değildir. Yöntemin neden
uygun olduğunu, karakteristik polinomu veya dönüşüm denklemini ve gerekli ara
adımları gösterebilmelisiniz.

### Kısa İşlem Düzeyinde Çalışılacaklar

Bu başlıklarda yöntemi hızlı kurup tek veya birkaç adımda sonuca
gidebilmelisiniz:

- Mertebe ve lineerlik sınıflandırması
- Birinci mertebede yöntem seçimi
- Tamlık ve integrasyon çarpanı testi
- Karakteristik polinom yazma
- Kökten çözüm biçimine geçme
- Özel çözüm adayını seçme
- Bir fonksiyonun Laplace dönüşümü
- Ters Laplace için ayrıştırma
- Konvolüsyon integralini kurma

### Kuramsal Dayanak Olarak İzlenecekler

Aşağıdaki başlıklar yöntemlerin neden çalıştığını açıklar. Tanımları ve
bağlantıları bilin; bu havuzda bunlar için ayrı uzun işlem soruları
üretilmemiştir:

- Çözüm, başlangıç koşulu ve çözüm aralığı
- Varlık–teklik koşullarının anlamı
- Süperpozisyon ilkesi
- Lineer bağımsızlık ve Wronskian
- Temel çözüm kümesi
- Yüksek mertebede genel lineer teori

### Bu Havuzun Dışında Tutulan Başlıklar

- Birim basamak ve parçalı girdiler
- Transfer fonksiyonu ve dürtü cevabı
- Lineer denklem sistemleri
- Faz portresi
- Euler yöntemi

Bu başlıkların konu notları ders bütünlüğü için korunur; aşağıdaki çalışma
sorularının dağılımına alınmamıştır.

### Önerilen Çalışma Sırası

1. Önce kısa işlem sorularını tamamlayın.
2. Tam çözüm sorularında süre tutun.
3. Her çözümün yöntemini ilk satıra yazın.
4. Sonucu denklem ve koşullarla doğrulayın.
5. Hata yaptığınız konunun örnek notuna dönün.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
> Önce kendi çözümünüzü tamamlayın. Yapay zekâdan doğru cevabı istemek yerine
> denklem sınıfını, ilk yanlış adımı, kaybolan çözümü, çakışma kontrolünü veya
> dönüşüm kuralını incelemesini isteyin. Düzeltmeden sonra soruyu baştan
> yeniden çözün.
:::

## 1. Birinci Mertebe ve Vize Konuları

### Soru 1

Aşağıdaki denklemler için ilk denenmesi gereken yöntemi yazın; çözüm
yapmayın:

$$
y'=xy,\qquad
y'+\frac2x y=x^2,\qquad
y'=\frac{x+y}{x},\qquad
(2xy+1)\,dx+(x^2+3y^2)\,dy=0.
$$

### Soru 2

$$
y'=3x^2-4x+1,\qquad y(0)=2
$$

başlangıç değer problemini doğrudan integralle çözün.

### Soru 3

$$
y'=y(y-2)
$$

denkleminin sabit çözümlerini ayırma işleminden önce bulun; ardından sabit
olmayan çözüm ailesini elde edin.

### Soru 4

$$
y'=x(1+y^2),\qquad y(0)=0
$$

başlangıç değer problemini çözün ve başlangıç noktasını içeren en geniş çözüm
aralığını belirtin.

### Soru 5

$$
y'=y(y-1)(y+2)
$$

denkleminin denge çözümlerini bulun ve kararlılıklarını işaret çizelgesiyle
belirleyin.

### Soru 6

$$
y'=\frac{x+y}{x}
$$

denklemini homojen tip dönüşümle çözün.

### Soru 7

$$
y'-\frac2x y=x^3,\qquad x>0,\qquad y(1)=1
$$

başlangıç değer problemini integrasyon çarpanıyla çözün.

### Soru 8

$$
y'+y=xy^2
$$

Bernoulli denklemini uygun dönüşümle lineerleştirin ve genel çözümü bulun.

### Soru 9

Aşağıdaki üç denklem için yöntem seçimini gerekçelendirin ve yalnız ilk çözüm
adımını yazın:

$$
y'=e^{x-y},\qquad
y'+3y=e^x,\qquad
y'=\left(\frac yx\right)^2.
$$

### Soru 10

$$
(2xy+3)\,dx+(x^2+4y)\,dy=0
$$

denkleminin tam olduğunu gösterin ve örtük genel çözümünü bulun.

### Soru 11

$$
(2xy+1)\,dx+(x^2+2y)\,dy=0,\qquad y(0)=1
$$

başlangıç değer problemini çözün ve sonucu türevleyerek doğrulayın.

### Soru 12

$$
(2y-x)\,dx+x\,dy=0
$$

denklemi için yalnız $x$'e bağlı bir integrasyon çarpanı bulun; denklemi
tamlaştırıp çözün.

### Soru 13

$$
y(1+x)\,dx+x\,dy=0
$$

denklemi için uygun tek değişkenli integrasyon çarpanını belirleyin ve genel
çözümü bulun.

### Soru 14

$y=cx^2$ eğri ailesinin ortogonal yörüngelerini bulun.

### Soru 15

$x^2+y^2=c$ çember ailesinin ortogonal yörüngelerini bulun ve iki ailenin
eğimlerinin çarpımını kontrol edin.

## 2. Yüksek Mertebeli ve Homojen Olmayan Denklemler

### Soru 16

$$
y^{(4)}-5y''+4y=0
$$

denkleminin yalnız karakteristik polinomunu yazın ve çarpanlara ayırın.

### Soru 17

$$
y''-5y'+6y=0
$$

denkleminin genel çözümünü bulun.

### Soru 18

$$
y''+6y'+9y=0
$$

denklemini kök katlılığını göstererek çözün.

### Soru 19

$$
y''-5y'+6y=0,\qquad y(0)=1,\qquad y'(0)=0
$$

başlangıç değer problemini çözün.

### Soru 20

$$
y'''-y'=0,\qquad
y(0)=1,\qquad y'(0)=0,\qquad y''(0)=2
$$

başlangıç değer problemini çözün.

### Soru 21

$$
y^{(4)}-2y''+y=0
$$

denklemini kök katlılıklarını ve bağımsız çözüm sayısını göstererek çözün.

### Soru 22

Kökleri $0$ (iki katlı), $2$ ve $-1$ olan dördüncü mertebeden sabit katsayılı
homojen bir diferansiyel denklem kurun ve genel çözümünü yazın.

### Soru 23

Aşağıdaki sağ taraflar için belirsiz katsayılar yönteminin uygun olup
olmadığını belirleyin. Uygun olanlarda yalnız özel çözüm adayını yazın:

$$
x^2,\qquad e^{2x},\qquad \cos 3x,\qquad \frac1x.
$$

### Soru 24

$$
y''-3y'+2y=x+1
$$

denkleminin genel çözümünü bulun.

### Soru 25

$$
y''-3y'+2y=e^{3x}
$$

denkleminin genel çözümünü bulun.

### Soru 26

$$
y''-3y'+2y=e^x
$$

denklemini çözün. Özel çözüm adayındaki çakışma düzeltmesini açıkça gösterin.

### Soru 27

$$
y''-y=4\cos 2x
$$

denkleminin genel çözümünü bulun.

### Soru 28

$$
y''-y=x
$$

denklemi için sabitlerin değişimi yöntemini kullanarak bir özel çözüm bulun.

### Soru 29

$$
x^2y''-2xy'-4y=0,\qquad x>0
$$

Cauchy–Euler denklemini çözün.

### Soru 30

$$
x^2y''-3xy'+4y=0,\qquad y(1)=1,\qquad y'(1)=0
$$

başlangıç değer problemini çözün.

## 3. Laplace Dönüşümü ve Konvolüsyon

### Soru 31

$$
f(t)=3-2t+t^2+4\sin 3t
$$

fonksiyonunun Laplace dönüşümünü bulun.

### Soru 32

$y(0)=2$ ve $y'(0)=-1$ olmak üzere

$$
\mathcal L\{y''-4y'+3y\}
$$

ifadesini $Y(s)$ cinsinden yazın.

### Soru 33

$$
y''+2y'+5y=e^{-t},\qquad y(0)=1,\qquad y'(0)=0
$$

probleminin yalnız dönüşüm uzayındaki cebirsel denklemini kurun.

### Soru 34

$$
\mathcal L^{-1}\left\{\frac{3s+7}{(s+1)(s+2)}\right\}
$$

ters dönüşümünü kısmi kesirlerle bulun.

### Soru 35

$$
\mathcal L^{-1}\left\{\frac{s+5}{s^2+4s+5}\right\}
$$

ters dönüşümünü kareye tamamlama yoluyla bulun.

### Soru 36

$$
y'+2y=4,\qquad y(0)=1
$$

başlangıç değer problemini Laplace dönüşümüyle uçtan uca çözün.

### Soru 37

$$
y''+3y'+2y=0,\qquad y(0)=0,\qquad y'(0)=1
$$

başlangıç değer problemini Laplace dönüşümüyle çözün.

### Soru 38

$$
y''+4y=4,\qquad y(0)=0,\qquad y'(0)=0
$$

başlangıç değer problemini Laplace dönüşümüyle çözün ve sonucu doğrulayın.

### Soru 39

$$
y''+y=t,\qquad y(0)=1,\qquad y'(0)=0
$$

başlangıç değer problemini Laplace dönüşümüyle çözün.

### Soru 40

$$
y''-3y'+2y=e^{3t},\qquad y(0)=0,\qquad y'(0)=1
$$

başlangıç değer problemini Laplace dönüşümüyle uçtan uca çözün.

### Soru 41

$$
y''-y=\cos 2t,\qquad y(0)=0,\qquad y'(0)=0
$$

başlangıç değer problemini Laplace dönüşümüyle çözün.

### Soru 42

$f(t)=t$ ve $g(t)=e^{-t}$ için $(f*g)(t)$ konvolüsyonunu hesaplayın.

### Soru 43

$(t*t)(t)$ konvolüsyonunu doğrudan integralden bulun ve Laplace dönüşümüyle
kontrol edin.

### Soru 44

$$
\mathcal L^{-1}\left\{\frac1{s(s^2+1)}\right\}
$$

ifadesini konvolüsyon teoremiyle bulun.

### Soru 45

$$
\mathcal L^{-1}\left\{\frac1{s^2(s+2)}\right\}
$$

ifadesini konvolüsyon teoremiyle bulun.

### Soru 46

$$
y(t)=1+\int_0^t y(\tau)\,d\tau
$$

integral denklemini Laplace dönüşümüyle çözün.

### Soru 47

$$
y(t)=1+\int_0^t (t-\tau)y(\tau)\,d\tau
$$

integral denklemini Laplace dönüşümüyle çözün.

### Soru 48

$$
y(t)=t+\int_0^t e^{t-\tau}y(\tau)\,d\tau
$$

integral denklemini Laplace dönüşümüyle çözün.

### Soru 49

$$
y'+y=1+\int_0^t y(\tau)\,d\tau,\qquad y(0)=0
$$

problemini Laplace dönüşümüyle uçtan uca çözün.

### Soru 50

$$
y''+3y'+2y=\int_0^t e^{-(t-\tau)}\,d\tau,\qquad
y(0)=0,\qquad y'(0)=0
$$

problemini çözerken önce sağ tarafı bir konvolüsyon olarak okuyun; ardından
Laplace dönüşümüyle çözümü tamamlayın.

## Çalışmanızı Kontrol Etme

> Çözümümü denklem sınıfı, yöntem seçimi, başlangıç koşulları, karakteristik
> polinom ve kök katlılıkları, özel çözüm adayındaki çakışma, Laplace dönüşüm
> kuralları, konvolüsyon kurulumu ve son doğrulama bakımından incele. Hata
> varsa doğru çözümü vermeden ilk yanlış adımı ve yeniden bakmam gereken konu
> başlığını belirt.
