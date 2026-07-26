---
title: "Birinci Mertebe Yöntem Seçme Haritası"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-07-26
execute:
  echo: false
---

## Birinci Mertebe İçin Yol Haritası

Bu başvuru özeti dört temel yapıyı karşılaştırır:

| Tür | Soru |
| --- | --- |
| Ayrılabilir | Sağ taraf $g(x)h(y)$ çarpımı mı? |
| Homojen tip | Sağ taraf $F(y/x)$ biçiminde mi? |
| Lineer | Denklem $y'+p(x)y=q(x)$ standart biçimine geliyor mu? |
| Bernoulli | Denklem $y'+p(x)y=q(x)y^n$, $n\neq0,1$ biçiminde mi? |

::: {.notes}

Bu kısa not, dört yöntemi tek yerde karşılaştıran bağımsız bir başvuru özeti olarak tasarlanmıştır. Amaç yöntemlerin ayrıntılı türetimlerini tekrarlamak değil, bir denklemle karşılaşıldığında ilk yapısal soruyu doğru seçmektir.

Tam diferansiyel denklemler bu dört sınıfa eklenen ayrı bir yapıdır. Buradaki karar haritası tamamlandıktan sonra diferansiyel biçimde tamlık ölçütü ayrıca incelenebilir.

:::

---

## Karma Sınıflandırma

Çözmeden, yalnız sınıflandırın:

$$
y'=\frac{x+y}{x}
\qquad
y'+\frac2x y=x^3
\qquad
y'=x^2y^2
$$

$$
y'+y=xy^3
\qquad
y'=xy
\qquad
y'=x^2+y^2
$$

::: {.notes}

Bu alıştırmada amaç yöntem uygulamak değil, yönteme karar vermektir. Sınıflandırma doğru yapılmadan hesap doğru başlatılamaz.

:::

---

## Sınıflandırma Sonucu

| Denklem | Sınıf |
|---|---|
| $y'=\dfrac{x+y}{x}$ | Homojen tip ve lineer |
| $y'+\dfrac2x y=x^3$ | Lineer |
| $y'=x^2y^2$ | Ayrılabilir ve Bernoulli |
| $y'+y=xy^3$ | Bernoulli |
| $y'=xy$ | Hem ayrılabilir hem lineer |
| $y'=x^2+y^2$ | Bu dört sınıftan hiçbiri |

::: {.notes}

İlk denklem $y'=1+y/x$ biçimiyle homojen tiptir; $y'-(1/x)y=1$ biçimiyle de lineerdir. Benzer biçimde $y'=x^2y^2$, hem $g(x)=x^2$, $h(y)=y^2$ seçimiyle ayrılabilir hem de $p(x)=0$, $q(x)=x^2$, $n=2$ olan bir Bernoulli denklemidir.

$y'=xy$ de hem ayrılabilir hem lineerdir. Bir denklem birden fazla sınıfa aitse çalışan yöntemlerden genellikle en kısa olanı seçilir. Buna karşılık $y'=x^2+y^2$ bu dört sınıfın hiçbirine uymaz; burada karşılaştırılan yöntemlerin kapsamı dışındadır.

:::

---

## Birden Fazla Sınıfa Aidiyet

$$
y'=xy
$$

Ayrılabilir:

$$
y'=x\cdot y.
$$

Lineer:

$$
y'-xy=0.
$$

Birden fazla yöntem çalışıyorsa, herhangi biriyle çözülebilir.

::: {.notes}

Yöntem seçme haritası katı ve ayrık bir sınıflandırma ağacı değildir. Bazı denklemler birden fazla yapıya aynı anda uyar. Bu durumda genellikle en kısa yolu seçmek yeterlidir.

:::

---

## Kavramsal Köprü

Sağ taraf bu dört biçimden hiçbirine uymuyorsa fakat denklem diferansiyel biçimde yazılabiliyorsa **tam diferansiyel denklem** yapısı sınanabilir.

::: {.notes}

Bu kapanış, dört birinci mertebe yöntemini tamlık ölçütüne kavramsal olarak bağlar. Tam diferansiyel denklemler burada çözülmez; yalnız yeni yöntemin hangi yapısal boşluğu doldurduğu görünür kılınır.

:::

---
