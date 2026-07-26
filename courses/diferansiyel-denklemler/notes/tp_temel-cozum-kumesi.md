---
title: "Temel Çözüm Kümesi ve Genel Çözüm Yapısı"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-07-26
execute:
  echo: false
---

## Temel Çözüm Kümesi

$n$'inci mertebe homojen bir lineer denklemin $n$ tane lineer bağımsız çözümü $\{y_1,\ldots,y_n\}$'e **temel çözüm kümesi** denir.

Bağımsızlık, Wronskian ile bir noktada kontrol edilir:

$$
W(y_1,\ldots,y_n)(x_0)\neq0.
$$

::: {.notes}

Süperpozisyon ilkesi ile lineer bağımsızlık kavramı burada birleşiyor. $n$'inci mertebe homojen bir denklemin $n$ tane lineer bağımsız çözümüne **temel çözüm kümesi** denir. "Neden tam olarak $n$ tane?" sorusunun cevabı varlık-teklik teoreminden gelir: teorem $n$ tane başlangıç koşulunun tek bir çözümü belirlediğini söyler; bu da çözüm uzayının boyutunun $n$ olduğu anlamına gelir. Aynı homojen denklemin çözümlerinden oluşan bir kümenin temel olup olmadığı, katsayıların sürekli olduğu aralıktaki bir noktada Wronskian'ın sıfırdan farklı çıkmasıyla kontrol edilir.

:::

---

## Homojen Genel Çözüm

$\{y_1,\ldots,y_n\}$ bir temel çözüm kümesiyse, denklemin **her** homojen çözümü

$$
y_h=c_1y_1+c_2y_2+\cdots+c_ny_n
$$

biçiminde, uygun sabitlerle yazılabilir.

::: {.notes}

Temel çözüm kümesinin önemi şudur: yalnızca *bazı* çözümleri üretmekle kalmaz, denklemin *bütün* homojen çözüm ailesini üretir. Yani $\{y_1,\ldots,y_n\}$ temel bir küme ise, bu denklemi sağlayan başka hiçbir fonksiyon, $c_1y_1+\cdots+c_ny_n$ biçiminde yazılamayacak şekilde "elden kaçmaz." Bu nedenle $y_h=c_1y_1+\cdots+c_ny_n$ ifadesine denklemin **genel çözümü** denir: $n$ tane keyfi sabit içerir ve varlık-teklik teoremindeki $n$ başlangıç koşuluyla eşleştirilerek herhangi bir özel çözüm buradan elde edilebilir.

:::

---

## Örnek Uçtan Uca

$$
y''+y=0
$$

için temel çözüm kümesi adayı $\{\cos x,\sin x\}$.

$$
W(\cos x,\sin x)=\cos x\cdot\cos x-(-\sin x)\sin x=\cos^2x+\sin^2x=1\neq0.
$$

Bağımsız — temel çözüm kümesi. Genel çözüm:

$$
\boxed{y_h=c_1\cos x+c_2\sin x.}
$$

::: {.notes}

Daha önce $y''+y=0$ denkleminin $\cos x$ ve $\sin x$ tarafından sağlandığı gösterilmişti. Şimdi bu iki çözümün bir temel çözüm kümesi oluşturup oluşturmadığı Wronskian ile kontrol edilir: $W(\cos x,\sin x)=\cos x\cdot\cos x-(-\sin x)\sin x=\cos^2x+\sin^2x=1$. Bu değer hiçbir $x$ için sıfır olmadığından (aslında sabittir), $\cos x$ ve $\sin x$ her noktada lineer bağımsızdır ve bir temel çözüm kümesi oluşturur. Dolayısıyla bu ikinci mertebe denklemin genel çözümü $y_h=c_1\cos x+c_2\sin x$'tir — başka hiçbir homojen çözüm bu biçimin dışında kalmaz.

:::

---

## Homojen Olmayan Denklemler İçin Yapı

$$
y^{(n)}+p_{n-1}(x)y^{(n-1)}+\cdots+p_0(x)y=g(x),\qquad g\not\equiv0.
$$

$y_p$ bu denklemin **herhangi bir** özel çözümü ise, genel çözüm:

$$
\boxed{y=y_h+y_p.}
$$

::: {.notes}

Homojen olmayan bir denklemde ($g\not\equiv0$) genel çözüm iki parçadan oluşur: $g=0$ alınarak bulunan homojen kısım $y_h$ ve orijinal denklemi sağlayan herhangi bir özel çözüm $y_p$. Belirsiz katsayılar ve sabitlerin değişimi gibi yöntemler daha sonra $y_p$'yi bulmak için kullanılacaktır. Yapının neden çalıştığını $L$ operatörüyle görebiliriz: $L[y-y_p]=L[y]-L[y_p]=g-g=0$. Böylece $y-y_p$ homojen denklemi sağlar ve $y_h$ biçiminde yazılır. Buradan $y=y_h+y_p$ elde edilir.

:::

---

## Sık Yapılan Hata

$y_p$'yi $y_h$'nin içine, sanki bağımsız bir homojen çözümmüş gibi katmaya çalışmak; ya da genel çözümde $y_p$'yi tamamen unutmak.

$$
y=c_1y_1+c_2y_2 \quad\text{(eksik — $y_p$ yok)}
\qquad\text{vs.}\qquad
y=c_1y_1+c_2y_2+y_p \quad\text{(doğru)}
$$

::: {.notes}

İki yaygın hata birbirine yakındır. Birincisi, $y_p$'yi unutup yalnızca $y_h=c_1y_1+c_2y_2$'yi genel çözüm sanmaktır — bu, homojen olmayan denklemi sağlamaz, çünkü $L[y_h]=0\neq g$. İkincisi, $y_p$'ye de bir keyfi sabit katsayı takmaya çalışmaktır (örneğin $c_3y_p$ yazmak); oysa $y_p$ *belirli* bir fonksiyondur, katsayısı her zaman $1$'dir — keyfi sabitler yalnızca homojen kısımdadır, çünkü onlar başlangıç koşullarını sağlamak için ayarlanır. $y_p$'nin kendisi zaten denklemi tek başına sağlar; ona sabit eklemek genel çözümü bozar.

:::

---

## Genel Çözümü Doğrulama

Bir çözüm ailesini kabul etmeden önce:

1. Her $y_i$ için $L[y_i]=0$ olduğunu kontrol edin.
2. Bir noktada $W(y_1,\ldots,y_n)\neq0$ olduğunu doğrulayın.
3. Homojen olmayan durumda ayrıca $L[y_p]=g$ kontrolünü yapın.

Böylece $L[y_h+y_p]=g$ olur.

::: {.notes}

Wronskian hesabı, fonksiyonların diferansiyel denklemi sağladığını tek başına göstermez. Önce her $y_i$'nin homojen denklemin gerçekten bir çözümü olduğu yerine koymayla doğrulanmalı, ardından bağımsızlık Wronskian ile sınanmalıdır. Çözüm sayısı mertebeye eşit ve çözümler bağımsız olduğunda temel çözüm kümesi elde edilir.

Homojen olmayan problemde seçilen $y_p$ için de $L[y_p]=g$ doğrulaması gerekir. Lineerlik sayesinde $L[y_h+y_p]=L[y_h]+L[y_p]=0+g=g$ olur. Bu üç kontrol, yazılan genel çözümün hem denklemi sağladığını hem de gerekli serbest sabitleri taşıdığını birlikte gösterir.

:::

---

## Genel Teori Pratik Seti (G9)

Bkz. [[../../_ortak/diferansiyel-denklemler/notes/ex_lineer-denklemlerde-genel-cozum-yapisi|Lineer Denklemlerde Genel Çözüm Yapısı: Alıştırmalar]] — temel çözüm kümesi, genel çözüm ve $y=y_h+y_p$ yapısını birleştiren sorular.

::: {.notes}

Genel teori hattı, $n$'inci mertebe lineer denklemlerin standart biçimi ve varlık-teklik teoremiyle başlar; lineer bağımsızlık ve Wronskian üzerinden temel çözüm kümesine ulaşır. Pratik seti bu kavramları tek bir soru grubunda birleştirir. Sabit katsayılı denklemlerin sistematik çözüm yöntemleri bir sonraki konu hattında ele alınacaktır.

:::

---

## Sonraki Adım: Çözümleri Sistematik Bulmak

Genel teori, çözümün yapısını açıklar; henüz $y_1,\ldots,y_n$ ve $y_p$'yi nasıl bulacağımızı söylemez. Bundan sonraki yöntemler:

- sabit katsayılı homojen denklemlerde karakteristik denklem,
- homojen olmayan denklemlerde uygun bir özel çözüm,
- başlangıç koşullarıyla sabitlerin belirlenmesi

üzerine kurulacaktır.

::: {.notes}

Temel çözüm kümesi ve $y=y_h+y_p$ ayrımı, sonraki hesap yöntemlerinin çerçevesini verir. Sabit katsayılı homojen denklemlerde karakteristik kökler temel çözümleri üretir. Homojen olmayan denklemlerde ise önce homojen kısım çözülür, sonra sağ tarafa uygun bir özel çözüm bulunur.

Son aşamada başlangıç koşulları genel çözümdeki sabitleri belirler. Böylece varlık–teklik teoremindeki soyut garanti, hesaplanan çözüm ailesi üzerinde doğrusal bir denklem sistemine dönüşür.

:::

---

## Pekiştirme

$$
y''-y=0
$$

için $\{e^x,e^{-x}\}$ bir temel çözüm kümesi midir? Genel çözümü yazınız. Ayrıca $y_p=-x$'in

$$
y''-y=x
$$

denklemini sağladığı veriliyorsa, bu denklemin genel çözümünü kurunuz.

::: {.notes}

Bu soru iki aşamayı birleştirir: önce Wronskian ile bağımsızlık kontrolü ve homojen genel çözümün yazılması, ardından verilen $y_p$'nin homojen çözüme eklenerek homojen olmayan denklemin tam genel çözümünün kurulması.

:::

---
