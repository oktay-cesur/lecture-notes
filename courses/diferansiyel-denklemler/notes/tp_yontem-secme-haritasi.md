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

Bu başvuru özeti beş temel yapıyı karşılaştırır:

| Tür | Soru |
| --- | --- |
| Doğrudan integral | Sağ taraf yalnız $f(x)$ mi? |
| Ayrılabilir | Sağ taraf $g(x)h(y)$ çarpımı mı? |
| Homojen tip | Sağ taraf $F(y/x)$ biçiminde mi? |
| Lineer | Denklem $y'+p(x)y=q(x)$ standart biçimine geliyor mu? |
| Bernoulli | Denklem $y'+p(x)y=q(x)y^n$, $n\neq0,1$ biçiminde mi? |

::: {.notes}

Bu başvuru özeti, beş yöntemi tek yerde karşılaştırır. Amaç yöntemlerin ayrıntılı türetimlerini tekrarlamak değil, bir denklemle karşılaşıldığında ilk yapısal soruyu doğru seçmektir.

Sıra kasıtlıdır: en kısıtlı yapıdan en gevşeğine doğru ilerler. Doğrudan integral, ayrılabilirin sağ tarafında $h(y)=1$ olan özel durumudur; lineer denklem ise $p(x)=0$ seçilirse yine doğrudan integrale iner. Bu nedenle bir denklem birden fazla satıra aynı anda uyabilir — sıradaki "Birden Fazla Sınıfa Aidiyet" bölümü bunu ayrıca ele alır.

Tam diferansiyel denklemler bu beş sınıfa eklenen ayrı bir yapıdır. Buradaki karar haritası tamamlandıktan sonra diferansiyel biçimde tamlık ölçütü ayrıca incelenebilir.

:::

---

## Önce Tanı, Sonra İşlem

Bir denklemle karşılaşıldığında sıra şudur:

**denklem biçimini tanı → yöntemi seç → dönüşümü/yöntemi kur → gerekli işlemi yap → sonucu kontrol et**

::: {.notes}

Bu beş adım, doğrudan integral, ayrılabilir, homojen tip, lineer ve Bernoulli yöntemlerinin ortak iskeletidir. Fark yalnızca ikinci ve üçüncü adımda ortaya çıkar: hangi yöntem seçilir ve hangi dönüşüm kurulur. Tanıma adımı atlanıp doğrudan işlem adımına geçildiğinde — örneğin sağ tarafı sınıflandırmadan integral almaya veya değişken ayırmaya çalışıldığında — çoğu hata buradan doğar.

Bu haritanın geri kalanı, ilk adımı hızlı ve güvenilir yapmaya çalışır: bir denklem görüldüğünde hangi yapısal işaretin hangi yöntemi gösterdiğini tanımak.

:::

---

## Karma Sınıflandırma

Çözmeden, yalnız sınıflandırın — ve hangi yapısal özelliğin bunu gösterdiğini belirtin:

$$
y'=3x^2
\qquad
y'=\frac{x+y}{x}
\qquad
y'+\frac2x y=x^3
$$

$$
y'=x^2y^2
\qquad
y'+y=xy^3
\qquad
y'=xy
$$

$$
y'=\frac{y}{x}+x
\qquad
y'=x^2+y^2
$$

::: {.notes}

Bu alıştırmada amaç yöntem uygulamak değil, yönteme karar vermektir. Sınıflandırma doğru yapılmadan hesap doğru başlatılamaz.

:::

---

## Sınıflandırma Sonucu

| Denklem | Sınıf | Gösterge |
|---|---|---|
| $y'=3x^2$ | Doğrudan integral (aynı zamanda ayrılabilir ve lineer) | Sağ taraf yalnız $x$'e bağlı |
| $y'=\dfrac{x+y}{x}$ | Homojen tip ve lineer | Sağ taraf $y/x$ oranına indirgeniyor; aynı zamanda standart biçime geliyor |
| $y'+\dfrac2x y=x^3$ | Lineer | Zaten standart biçimde, $q(x)$ bir kuvvet değil |
| $y'=x^2y^2$ | Ayrılabilir ve Bernoulli | Sağ taraf çarpanlarına ayrılıyor; aynı zamanda $q(x)y^n$ biçiminde |
| $y'+y=xy^3$ | Bernoulli | Standart biçime ek olarak sağ tarafta sabit kuvvetli $y^3$ var |
| $y'=xy$ | Hem ayrılabilir hem lineer | $h(y)=y$ ile çarpanlara ayrılıyor; $p(x)=-x$, $q(x)=0$ ile de standart biçimde |
| $y'=\dfrac{y}{x}+x$ | Lineer (homojen tip **değil**) | $y/x$ görünüyor ama yalnız başına değil — ölçekleme testi başarısız, oysa terimler zaten $y'-\frac1x y=x$ biçiminde |
| $y'=x^2+y^2$ | Bu beş sınıftan hiçbiri | Toplam çarpanlarına ayrılmıyor, oran cinsinden yazılamıyor, $y$ terimi yok |

::: {.notes}

$y'=3x^2$ üç sınıfa birden uyar: sağ taraf yalnız $x$'e bağlı olduğu için en basit hâliyle doğrudan integraldir, ama aynı zamanda $h(y)=1$ ile ayrılabilir ve $p(x)=0$ ile lineerdir. Birden fazla yöntem çalıştığında en kısa yol seçilir; burada bu doğrudan integraldir.

İlk lineer örnek $y'=1+y/x$ biçimiyle homojen tiptir; $y'-(1/x)y=1$ biçimiyle de lineerdir. Karşılaştırma için verilen $y'=y/x+x$ ise tuzaklıdır: sağ tarafta $y/x$ görünse de yalnız başına değil, ölçekleme testi $t$'yi götürmüyor — dolayısıyla homojen tip değildir. Buna karşılık terimler yeniden düzenlenince $y'-\frac1x y=x$ zaten standart lineer biçimdedir; aynı görünüşün iki farklı sonuca götürdüğü bir çift oluşturur.

$y'=x^2y^2$, hem $g(x)=x^2$, $h(y)=y^2$ seçimiyle ayrılabilir hem de $p(x)=0$, $q(x)=x^2$, $n=2$ olan bir Bernoulli denklemidir. $y'=xy$ de hem ayrılabilir hem lineerdir. Bir denklem birden fazla sınıfa aitse çalışan yöntemlerden genellikle en kısa olanı seçilir. Buna karşılık $y'=x^2+y^2$ bu beş sınıfın hiçbirine uymaz; burada karşılaştırılan yöntemlerin kapsamı dışındadır.

:::

---

## Yapısal Göstergeler

| Yapısal özellik | Sınıf |
|---|---|
| Sağ taraf yalnız $x$'e bağlı | Doğrudan integral |
| Sağ taraf $g(x)h(y)$ çarpanlarına ayrılıyor | Ayrılabilir |
| Sağ taraf yalnız $y/x$ oranına bağlı (ölçekleme testi geçiyor) | Homojen tip |
| $y$ ve $y'$ birinci kuvvette, çarpılmadan; standart biçime geliyor | Lineer |
| Standart biçime ek olarak sağ tarafta sabit kuvvetli $y^n$ var | Bernoulli |

::: {.notes}

Bu tablo, sınıflandırma gerekçelerini tek bir hızlı başvuruya indirger. Sınav veya alıştırma sırasında bir denklemle karşılaşıldığında yukarıdan aşağı sırayla sorulur: sağ taraf yalnız $x$'e mi bağlı, çarpanlarına mı ayrılıyor, oran cinsinden mi yazılabiliyor, standart lineer biçime mi geliyor, o biçime ek olarak bir $y^n$ kuvveti mi taşıyor. İlk uyan satır genellikle en kısa çözüm yolunu verir.

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

Sağ taraf bu beş biçimden hiçbirine uymuyorsa fakat denklem diferansiyel biçimde yazılabiliyorsa **tam diferansiyel denklem** yapısı sınanabilir.

::: {.notes}

Beş birinci mertebe yöntemi burada tamlık ölçütüne kavramsal olarak bağlanır. Tam diferansiyel denklemler burada çözülmez; yalnız yeni yöntemin hangi yapısal boşluğu doldurduğu görünür kılınır.

:::

---
