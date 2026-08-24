---
title: "Özel Çözüm Yöntem Seçme Haritası"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-08-05
execute:
  echo: false
---

## Özel Çözüm İçin Yol Haritası

| Soru | Sonuç |
| --- | --- |
| Katsayılar sabit mi? | Değilse sabitlerin değişimi |
| $g(x)$ aday tablosuna uyuyor mu? | Uymuyorsa sabitlerin değişimi |
| Aday $y_h$ ile çakışıyor mu? | Çakışıyorsa $x^s$ ile çarp |
| İkisi de uygulanabiliyor mu? | Belirsiz katsayılar daha kısa |

::: {.notes}

Burada homojen olmayan denklemlerde özel çözüm bulmanın iki yöntemi tek yerde karşılaştırılır. Amaç türetimleri tekrarlamak değil, bir denklemle karşılaşıldığında ilk kararı doğru vermektir.

Karar zinciri yukarıdan aşağı okunur. İlk iki soru kapsamla ilgilidir ve olumsuz cevap doğrudan sabitlerin değişimine götürür. Üçüncü soru belirsiz katsayılar yolunda kalındığında sorulur; çakışma varsa yöntem terk edilmez, aday düzeltilir. Dördüncü soru ikisinin de çalıştığı durumlar içindir.

Her iki yöntem de $y_p$ üretir; genel çözüm her durumda $y=y_h+y_p$ olarak kurulur ve başlangıç koşulları en sonda bu toplama uygulanır. Homojen kısmın çözülmüş olması ikisinin de ön koşuludur — sabitlerin değişimi $y_1$ ile $y_2$'yi doğrudan kullanır, belirsiz katsayılar ise çakışma kontrolü için $y_h$'ye ihtiyaç duyar.

:::

---

## Karma Sınıflandırma

Çözmeden, yalnız yöntem seçin:

$$
y''-y=xe^{2x}
\qquad
y''+y=\csc x
\qquad
y''-4y'+4y=e^{2x}
$$

$$
y''+4y=\sin2x
\qquad
x^2y''-3xy'+3y=x^2
$$

::: {.notes}

Bu alıştırmada amaç hesap yapmak değil, yönteme karar vermektir. Her denklem için üç şey belirlenir: katsayılar sabit mi, sağ taraf hangi aileden, aday homojen çözümle çakışıyor mu.

Karar verirken karakteristik denklemin köklerini bulmak gerekir — çakışma ancak kökler bilinince görülür. Kökleri bulmak, denklemi çözmek değildir; birkaç saniyelik bir cebir işidir ve yanlış yöntem seçiminin maliyetinden çok daha ucuzdur.

:::

---

## Sınıflandırma Sonucu

| Denklem | Yöntem |
|---|---|
| $y''-y=xe^{2x}$ | Belirsiz katsayılar |
| $y''+y=\csc x$ | Sabitlerin değişimi |
| $y''-4y'+4y=e^{2x}$ | Belirsiz katsayılar, $x^2$ ile |
| $y''+4y=\sin2x$ | Belirsiz katsayılar, $x$ ile |
| $x^2y''-3xy'+3y=x^2$ | Sabitlerin değişimi |

::: {.notes}

Birinci denklemde kökler $\pm1$, sağ taraf $xe^{2x}$'tir. $2$ bir kök olmadığı için çakışma yoktur; aday $(Ax+B)e^{2x}$ olarak yazılır.

İkinci denklemde $\csc x$ hiçbir aday ailesine girmez — türevleri kapalı bir liste oluşturmaz. Tek seçenek sabitlerin değişimidir; $y_1=\cos x$, $y_2=\sin x$ ve $W=1$ ile iki integral alınır.

Üçüncü denklemde $r=2$ çift köktür, dolayısıyla hem $e^{2x}$ hem $xe^{2x}$ homojen çözümdür. Aday iki kez $x$ ile çarpılır: $Ax^2e^{2x}$. Dördüncü denklemde kökler $\pm2i$'dir ve $\sin2x$ homojen çözümdür; aday $x(A\cos2x+B\sin2x)$ olur. İki denklem de belirsiz katsayılar yolunda kalır, yalnız aday düzeltilir.

Beşinci denklem değişken katsayılıdır; belirsiz katsayılar uygulanamaz. Sabitlerin değişimi için önce homojen çözümler gerekir — bu denklemde $y=x^m$ denemesi $x$ ve $x^3$ çözümlerini verir — ve denklem standart biçime getirilerek $g=1$ okunur.

:::

---

## Aynı Denklem, İki Maliyet

$$
y''-3y'+2y=e^{x}
$$

- Belirsiz katsayılar: bir aday, tek katsayı
- Sabitlerin değişimi: bir Wronskian, iki integral

Sonuçlar aynı çözüm ailesini verir.

::: {.notes}

Her iki yöntemin de uygulanabildiği bir denklemde seçim hesap maliyetine göre yapılır. Bu denklemde belirsiz katsayılar $y_p=-xe^x$ sonucuna tek bilinmeyenle ulaşıyordu. Sabitlerin değişimi aynı sonucu bir Wronskian ve iki integralle veriyor, üstelik $y_p$ içinde fazladan bir homojen terim taşıyordu.

Fazladan terim yanlış değildir; genel çözümde $c_1$ tarafından soğurulur. İki yöntemin sonuçları farklı görünse de tanımladıkları çözüm ailesi aynıdır. Bunu kontrol etmenin yolu, farkın homojen denklemi sağlayıp sağlamadığına bakmaktır.

Yöntem seçimi katı bir kural değildir. Sabitlerin değişimi her zaman uygulanabilir; belirsiz katsayılar ise kapsamı içindeyken daha kısadır. Sınav ya da ödev çözümünde hangi yolun seçildiğini yazmak, ara adımların okunmasını da kolaylaştırır.

:::

---

## Homojen Olmayan Denklemler Pratik Seti (G11)

- [[../../_ortak/diferansiyel-denklemler/notes/ex_belirsiz-katsayilar|Belirsiz Katsayılar]]
- [[../../_ortak/diferansiyel-denklemler/notes/ex_sabitlerin-degisimi|Sabitlerin Değişimi]]

::: {.notes}

İki alıştırma seti yöntemlere ayrı ayrı karşılık gelir. Belirsiz katsayılar seti aday kalıbı seçme, çakışma düzeltmesi ve katsayı eşleştirme üzerine kuruludur. Sabitlerin değişimi seti Wronskian hesabı, işaret takibi ve integral adımlarını çalıştırır.

Çözümlerinizde yalnız $y_p$'yi değil, hangi yöntemi neden seçtiğinizi, homojen çözümü ve çakışma kontrolünün sonucunu da yazın. Genel çözümü kurduktan sonra $y_p$'yi denkleme yerleştirerek doğrulamak, iki yöntemde de en hızlı kontroldür.

:::

---

## Kavramsal Köprü

İkinci mertebe hattı tamamlandı:

$$
y=y_h+y_p
$$

Sırada mertebenin yükselmesi ve değişken katsayılı özel denklem sınıfları var.

::: {.notes}

Sabit katsayılı ikinci mertebe denklemler artık uçtan uca çözülebiliyor: karakteristik denklem homojen kısmı, iki yöntemden biri özel çözümü veriyor, başlangıç koşulları sabitleri belirliyor.

Aynı yapı daha yüksek mertebeli denklemlerde ve Cauchy–Euler denkleminde de korunur, yalnızca kapsam genişler. Mertebe yükseldiğinde karakteristik denklem daha yüksek dereceli bir polinom olur ve kök katlılıkları $x$ kuvvetleriyle işlenir. Cauchy–Euler denklemi ise değişken katsayılı olduğu hâlde $y=x^m$ denemesiyle benzer bir cebirsel indirgeme sağlar.

Sağ yanı süreksiz ya da parçalı tanımlı denklemler bu yöntemlerin ikisiyle de zahmetli çözülür; onlar için Laplace dönüşümü ayrı bir yol açacak.

:::

---
