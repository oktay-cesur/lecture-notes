---
title: "Denklemi Okuma ve Çözümü Doğrulama: Alıştırmalar"
subtitle: "Diferansiyel Denklemler — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
description: "Diferansiyel denklemi mertebe, lineerlik ve otonomluk bakımından okuma; aday çözümü doğrudan doğrulama pratiği."
execute:
  echo: false
---

# Denklemi Okuma ve Çözümü Doğrulama: Alıştırmalar

Bu çalışma, bir diferansiyel denklemi çözmeye başlamadan önce yapısını okumayı
ve verilen bir fonksiyonun çözüm olup olmadığını doğrudan sınamayı amaçlar.
Önce bağımlı ve bağımsız değişkeni, sonra en yüksek türevi ve bilinmeyen
fonksiyonun denklemde nasıl yer aldığını belirleyin.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
Bu notu bir yapay zekâ aracına vererek yeni sınıflandırma ve doğrulama soruları
ürettirebilirsiniz. Aracın cevabı baştan göstermemesini, önce sınıflandırmanızı
beklemesini ve hata varsa yalnız yanlış ölçütü belirtmesini isteyin.

> Bu çalışma notundaki gösterime bağlı kal. Üçü birinci, ikisi ikinci
> mertebeden beş denklem üret. Her biri için mertebe, lineerlik ve otonomluk
> kararı vermemi bekle. Yanlışsam doğru sınıfı söylemeden hangi ölçütü yanlış
> kullandığımı belirt.
:::

## Denklemin Yapısını Okuma

### Örnek 1: Mertebe ve Değişkenler

$$
y''+x^2y'-4y=\sin x
$$

denkleminde bağımsız değişken $x$, bağımlı değişken $y(x)$'tir. En yüksek
türev $y''$ olduğundan denklem ikinci mertebedendir. $y$, $y'$ ve $y''$
yalnız birinci kuvvette bulunduğu ve birbirleriyle çarpılmadığı için denklem
lineerdir.

**Kontrol.** Katsayıların $x$'e bağlı olması lineerliği bozmaz. Lineerliği
bozan şey $y^2$, $yy'$ veya $\sin y$ gibi bilinmeyene doğrusal olmayan
işlemlerdir.

### Örnek 2: Otonomluk

$$
y'=y(2-y)
$$

denkleminde sağ taraf yalnız $y$'ye bağlıdır; bağımsız değişken açıkça
görünmez. Denklem otonomdur. Buna karşılık

$$
y'=x\,y(2-y)
$$

otonom değildir; çünkü sağ tarafta $x$ açıkça yer alır.

**Karar kuralı.** Birinci mertebeden $y'=f(x,y)$ denkleminde $f$ yalnız $y$'ye
bağlıysa denklem otonomdur.

### Örnek 3: Lineerlik Tuzakları

$$
y''+(\cos x)y'=0
$$

lineerdir; $\cos x$ yalnız bağımsız değişkenin fonksiyonudur. Fakat

$$
y''+(\cos y)y'=0
$$

lineer değildir; $y$ bilinmeyen fonksiyon olarak katsayının içine girmiştir.

## Aday Çözümü Doğrulama

### Örnek 4: Türevleri Yerine Koyma

$y=e^{2x}$ fonksiyonunu

$$
y''-4y=0
$$

denkleminde sınayalım:

$$
y'=2e^{2x},\qquad y''=4e^{2x}.
$$

Yerine koyunca

$$
y''-4y=4e^{2x}-4e^{2x}=0
$$

elde edilir. Dolayısıyla $y=e^{2x}$ çözümdür.

### Örnek 5: Çözüm Olmayan Aday

$y=x^2$ için $y''=2$ olur. Aynı denklemde

$$
y''-4y=2-4x^2
$$

ifadesi bütün $x$ değerlerinde sıfır değildir. Bu nedenle $x^2$ çözüm
değildir. Tek bir noktada eşitlik sağlanması yetmez; denklem çözüm aralığının
tamamında sağlanmalıdır.

## Hata Avı

### Örnek 6: Katsayıyı Bilinmeyen Sanmak

"$y'+x^2y=0$ lineer değildir; çünkü $x^2$ vardır" kararı yanlıştır. $x^2$,
bilinen bağımsız değişkenin fonksiyonudur ve $y$'nin katsayısı olabilir.

### Örnek 7: Yalnız Fonksiyonu Yerine Koymak

Bir öğrenci $y=e^x$ adayını $y''-y=0$ denkleminde sınarken yalnız
$e^x-e^x=0$ yazıyor. Sonuç doğru olsa da gerekçe eksiktir. Önce $y''=e^x$
hesaplanmalı, sonra denklemde yerine konmalıdır.

## Adım Adım İşlem Pratiği

### Örnek 8

$$
y'=3y-x^2
$$

birinci mertebeden, lineer ve otonom olmayan bir denklemdir.

### Örnek 9

$$
y''+(y')^2+y=0
$$

ikinci mertebedendir; $(y')^2$ nedeniyle lineer değildir.

### Örnek 10

$y=\cos 3x$ için $y''=-9\cos3x$ olur. Bu nedenle
$y''+9y=0$ eşitliği sağlanır.

## Karma Çalışma Soruları

### Soru 1

$y'''-x y'+5y=e^x$ denkleminin mertebesini ve lineer olup olmadığını belirtin.

### Soru 2

$y'=y^3-y$ ve $y'=x(y^3-y)$ denklemlerini otonomluk bakımından karşılaştırın.

### Soru 3

$yy'+x=0$ denklemi lineer midir? Kararınızı bilinmeyen fonksiyonun denklemdeki
yerine dayanarak açıklayın.

### Soru 4

$y=e^{-2x}$ fonksiyonunun $y''+4y'+4y=0$ denklemini sağlayıp sağlamadığını
doğrulayın.

### Soru 5

$y=\sin x$ ve $y=\cos x$ adaylarını $y''+y=0$ denkleminde ayrı ayrı sınayın.

### Soru 6

$y=x^3$ fonksiyonu $y'=3x^2$ denkleminin hangi aralıklarında çözümdür?

### Soru 7

$Q'=kQ$ denkleminde bağımlı ve bağımsız değişkenleri belirtin; $k$ sabitken
denklemi lineerlik ve otonomluk bakımından sınıflandırın.

### Soru 8

$y'=\sin(x+y)$ denkleminin lineer ve otonom olup olmadığını gerekçelendirin.

## Çalışmanızı Kontrol Etme

Önce her kararın yanına kullandığınız ölçütü yazın. Ardından çözümünüzü bir
yapay zekâ aracına verirken şu istemi kullanabilirsiniz:

> Sınıflandırmalarımı mertebe, lineerlik ve otonomluk ölçütleri açısından;
> doğrulamalarımı ise türev hesabı ve bütün aralıkta yerine koyma açısından
> incele. Hata varsa doğru cevabı hemen verme; yanlış ölçütü veya yanlış
> türev adımını belirt.
