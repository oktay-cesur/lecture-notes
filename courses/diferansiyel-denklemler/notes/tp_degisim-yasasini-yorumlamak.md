---
title: "Değişim Yasasını Yorumlamak"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
execute:
  echo: false
---

## Ayrılabilirlikten Yoruma

> Ayrılabilir denklemleri çözebiliyoruz. Şimdi çözüm formülü ile denklemin anlattığı davranışı birbirine bağlayacağız.

- Değişim hangi yönde?
- Sabit kalan değer var mı?
- Uzun vadede ne olur?

::: {.notes}

Ayrılabilir denklemlerde değişkenleri ayırmayı, integralleri almayı ve başlangıç koşuluyla sabiti belirlemeyi kurduk. Bu işlemler bir çözüm formülü veriyor; fakat bir modelde asıl soru çoğu zaman formülün ne söylediğidir. Miktar artıyor mu, azalıyor mu, yoksa belirli bir değerde sabit mi kalıyor?

Bu soruların bir kısmını çözüm formülünden, bir kısmını da denklemin sağ tarafının işaretinden okuyacağız. İlk yol analitik, ikinci yol nitel bilgi verir. İki yolu aynı model ailesi üzerinde karşılaştırmak, çözmenin ve yorumlamanın farklı görevler olduğunu gösterecek.

:::

---

## Soru: Orantılı Değişim

Bir miktarın değişim hızı:

$$
\frac{dP}{dt}=kP
$$

- $P(t)$: zamana bağlı miktar
- $k$: sabit orantı katsayısı
- $P(0)=P_0$: başlangıç miktarı

**Soru:** $P(t)$ nasıl bulunur?

::: {.notes}

Denklem, değişim hızının o andaki miktarla orantılı olduğunu söylüyor. Aynı $k$ değeri için miktar büyüdükçe değişimin mutlak değeri de büyür. Popülasyon, radyoaktif madde ve faiz gibi modeller bu yapıyı farklı yorumlarla kullanır.

Sağ taraf $k\cdot P$ biçiminde olduğundan denklem ayrılabilirdir. Burada $t$ bağımsız değişken, $P$ bağımlı değişken ve $k$ model parametresidir. Miktar bağlamında genellikle $P_0\geq 0$ alınır; diferansiyel denklem matematiksel olarak negatif başlangıç değerleri için de çözülebilir.

:::

---

## Çözüm: Değişkenleri Ayırma

$P\neq 0$ için:

$$
\frac{1}{P}\,dP=k\,dt
$$

$$
\ln|P|=kt+C_1
$$

$$
P=Ce^{kt}
$$

::: {.notes}

Değişkenleri ayırırken iki tarafı $P$'ye böldük; bu adım $P=0$ durumunu geçici olarak dışarıda bırakır. İntegral $\ln|P|=kt+C_1$ verir. Üstel alınca $|P|=e^{C_1}e^{kt}$ elde edilir ve işaret sabitin içine alınarak $P=Ce^{kt}$ yazılır.

Bu hesap yalnız $P\neq0$ çözümleri üretmiş görünür. Bu nedenle bölme sırasında dışarıda kalan $P=0$ fonksiyonunu özgün denklemde ayrıca kontrol ederiz: $P'=0$ ve $kP=0$ olduğundan denklem sağlanır. Üstel ailede $C=0$ seçimi de aynı çözümü verdiği için bütün durumlar tek formülde birleşir.

:::

---

## Başlangıç Koşulunu Uygulama

$$
P(0)=P_0
$$

$$
P_0=Ce^0=C
$$

$$
\boxed{P(t)=P_0e^{kt}}
$$

::: {.notes}

Başlangıç koşulu çözüm ailesine uygulanır. $t=0$ yazıldığında üstel çarpan $1$ olur ve $C=P_0$ bulunur. Böylece parametre $k$ değişim yasasını, $P_0$ ise bu yasayı izleyen belirli çözüm eğrisini seçer.

Sonucu türev alarak doğrulayabiliriz: $P'(t)=kP_0e^{kt}=kP(t)$. Ayrıca $t=0$ için $P(0)=P_0$ koşulu sağlanır. Denklem ve başlangıç koşulu birlikte kontrol edildiğinde başlangıç değer problemi tamamlanır.

:::

---

## Formül Davranışı Nasıl Kodlar?

| Koşul | $P_0>0$ için davranış |
|---|---|
| $k>0$ | Artar |
| $k<0$ | Azalır, sıfıra yaklaşır |
| $k=0$ | Sabit kalır |
| $P_0=0$ | Her $k$ için dengede |

::: {.notes}

$e^{kt}$ her zaman pozitiftir; bu nedenle $P_0>0$ ise çözüm pozitif kalır. $k>0$ olduğunda üstel çarpan zamanla büyür, $k<0$ olduğunda küçülür ve $t\to\infty$ iken sıfıra yaklaşır. Sonlu bir $t$ değerinde üstel çarpan sıfır olmadığı için pozitif bir çözüm tam sıfıra ulaşmaz.

$k=0$ durumunda denklem $P'=0$ olur ve başlangıç miktarı değişmeden kalır. $P_0=0$ seçilirse çözüm bütün $t$ değerlerinde sıfırdır; bu, modelin denge çözümüdür. Böylece formül hem değişimin yönünü hem de sabit kalan özel durumu gösterir.

:::

---

## Karar: Sıcaklık Hangi Yöne Gider?

$$
T'=-k(T-20), \qquad k>0
$$

- $T>20$ ise?
- $T=20$ ise?
- $T<20$ ise?

::: {.notes}

Bu soruyu çözüm formülü bulmadan yanıtlayabiliriz. $T>20$ iken $T-20>0$ ve önündeki $-k$ nedeniyle $T'<0$ olur; sıcaklık azalır. $T<20$ iken $T-20<0$ olduğundan $T'>0$ çıkar; sıcaklık artar.

$T=20$ için sağ taraf sıfırdır ve sıcaklık sabit kalır. Her iki taraftaki işaret de hareketi $20$ değerine yönelttiği için çevre sıcaklığı çekici bir denge gibi davranır. Burada gereken bilgi, denklemin sağ tarafının işaretidir; denklemi çözmek zorunda değiliz.

:::

---

## Soru: Büyümeye Sınır Eklemek

Ölçeklenmiş bir popülasyon modeli:

$$
P'=P(1-P)
$$

- Küçük $P$: yaklaşık $P'\approx P$
- $P=1$: kaynak sınırı

**Soru:** Çözmeden ne söyleyebiliriz?

::: {.notes}

$P'=kP$ modeli, pozitif $k$ için büyümeyi sınırsız sürdürür. Kaynakların etkisini basitçe temsil etmek için büyüme hızına $1-P$ çarpanını ekliyoruz. $P$ sıfıra yakınken bu çarpan yaklaşık $1$ olduğu için model orantılı büyümeye benzer.

$P$ değeri $1$'e yaklaştıkça $1-P$ küçülür ve büyüme yavaşlar. $P=1$ olduğunda sağ taraf sıfırlanır. Buradaki $1$, fiziksel birim taşıyan ham popülasyon değil, taşıma kapasitesine göre ölçeklenmiş miktardır.

:::

---

## Otonom Denklem ve Denge

$$
P'=f(P), \qquad f(P)=P(1-P)
$$

- Sağ taraf yalnız $P$'ye bağlı
- Bu denklem **otonom**
- Denge için $f(P)=0$

$$
P=0 \quad\text{ve}\quad P=1
$$

::: {.notes}

Sağ taraf bağımsız değişken $t$'yi açıkça içermediği için denklem otonomdur. Otonom bir denklemde değişimin yönü, o andaki $P$ değerinden belirlenir. Bu yapı, denge çözümlerini ve aralıklardaki davranışı doğrudan okumayı kolaylaştırır.

Denge çözümü sabit bir fonksiyondur; sabit fonksiyonun türevi sıfır olduğu için sağ tarafın da sıfır olması gerekir. $P(1-P)=0$ eşitliği $P=0$ ve $P=1$ değerlerini verir. Her iki değer de özgün denklemde yerine konduğunda sabit çözüm olarak doğrulanır.

:::

---

## İşaret Analizi

| Aralık | $P'$ işareti | Hareket |
|---|---:|---|
| $P<0$ | $-$ | Sola |
| $0<P<1$ | $+$ | Sağa |
| $P>1$ | $-$ | Sola |

::: {.notes}

Denge değerleri gerçek ekseni üç aralığa ayırır. Her aralıktan tek bir test değeri seçmek yeterlidir, çünkü $P(1-P)$ ifadesinin işareti köklerin arasında değişmeden kalır. Örneğin $P=-1$ için $P'=-2$, $P=1/2$ için $P'=1/4$ ve $P=2$ için $P'=-2$ çıkar.

Pozitif türev $P$'nin zamanla artmasını, negatif türev azalmasını gösterir. Bu bilgi çözümün tam değerini vermez; yalnız hareket yönünü belirler. Negatif $P$ değerleri popülasyon modelinde fiziksel değildir, fakat denge noktasının iki yanındaki matematiksel davranışı sınıflandırırken işe yarar.

:::

---

## Faz Çizgisi ve Kararlılık

$$
(-\infty)\ \longleftarrow\ 0\ \longrightarrow\ 1\ \longleftarrow\ (+\infty)
$$

- $P=0$: kararsız denge
- $P=1$: kararlı denge

::: {.notes}

Faz çizgisi, işaret tablosundaki hareket yönlerini tek eksende toplar. $0$'ın iki yanında oklar bu dengeden uzaklaşır: negatif tarafta sola, pozitif tarafta sağa hareket vardır. Bu nedenle $P=0$ kararsızdır.

$1$'in iki yanında oklar dengeye yönelir. $0<P<1$ aralığında çözümler artarak, $P>1$ aralığında azalarak $1$'e yaklaşır. Yakın başlangıç değerlerini kendine çeken bu davranış, $P=1$'i kararlı denge yapar.

:::

---

## Soru: Teknik Biçime Bağlı mı?

$$
y'=y^2-4
$$

- Denge çözümleri neler?
- Aralıklarda hareket hangi yönde?
- Hangi denge kararlı?

::: {.notes}

İlk nitel örnekte sağ taraf çarpım biçiminde verilmişti. Burada ifade fark biçiminde görünse de aynı yol çalışır: önce sağ tarafın köklerini bulur, sonra köklerin ayırdığı aralıklarda işareti inceleriz. Gerekirse $y^2-4=(y-2)(y+2)$ çarpanlarına ayrılır.

Bu soru yöntemin ezberlenmiş bir tabloya bağlı olup olmadığını sınar. Aradığımız şey ifadenin ilk görünüşü değil, sağ tarafın nerede sıfırlandığı ve hangi aralıklarda işaret değiştirdiğidir. Şimdi bu iki bilgiyi kullanarak denge noktalarını sınıflandıralım.

:::

---

## Çözüm: İkinci Faz Çizgisi

$$
y^2-4=0 \quad\Longrightarrow\quad y=-2,\ 2
$$

| Aralık | $y'$ | Hareket |
|---|---:|---|
| $y<-2$ | $+$ | Sağa |
| $-2<y<2$ | $-$ | Sola |
| $y>2$ | $+$ | Sağa |

$$
(-\infty)\ \longrightarrow\ -2\ \longleftarrow\ 2\ \longrightarrow\ (+\infty)
$$

::: {.notes}

Kökler $-2$ ve $2$'dir. Test değerleri olarak $-3$, $0$ ve $3$ seçilirse sağ taraf sırasıyla $5$, $-4$ ve $5$ olur. Böylece dış aralıklarda hareket sağa, orta aralıkta sola yönelir.

$-2$'nin iki yanındaki oklar bu değere yöneldiği için $y=-2$ kararlıdır. $2$'nin iki yanındaki oklar bu değerden uzaklaştığı için $y=2$ kararsızdır. Sonuç, işaret analizinin sağ tarafın çarpım ya da fark biçiminde yazılmasına bağlı olmadığını gösterir.

:::

---

## Analitik ve Nitel Bilgi

| Yaklaşım | Verdiği bilgi |
|---|---|
| Analitik çözüm | Tam çözüm formülü |
| İşaret analizi | Artma ve azalma |
| Denge analizi | Uzun dönem yönelimi |

::: {.notes}

Analitik çözüm, başlangıç değerinden hareketle her zamandaki değeri hesaplamaya yarayan bir formül verir. $P'=kP$ örneğinde $P(t)=P_0e^{kt}$ bu görevi yerine getirir. Formül elde olduğunda artma, azalma ve limit davranışı da ayrıca okunabilir.

Nitel analiz ise formül bulunmadan önce çalışabilir. Sağ tarafın kökleri denge çözümlerini, işareti de aralıklardaki hareket yönünü verir. Buna karşılık işaret analizi tek başına belirli bir zamanda miktarın kaç olduğunu söylemez; iki yaklaşım farklı soruları cevaplar.

:::

---

## Sık Yapılan Hatalar

1. $P$'ye bölüp sıfırı unutmak
2. İşareti yalnız kökte incelemek
3. $P'>0$ iken azalmak
4. Kararlılığı tek taraftan okumak
5. Faz çizgisinden sayı beklemek

::: {.notes}

Birinci hata çözüm hesabında ortaya çıkar. $P$'ye bölmek $P=0$ durumunu dışarıda bıraktığı için bu değer özgün denklemde ayrıca sınanmalıdır. İkinci hatada yalnız köklerde $P'=0$ bulunur, fakat köklerin arasındaki hareket belirlenmez; her açık aralıktan bir test değeri seçmek gerekir.

Üçüncü hata türevin anlamını ters okumaktır: $P'>0$ artma, $P'<0$ azalma demektir. Dördüncü hata kararlılığı yalnız bir taraftaki oka bakarak sınıflandırır; kararlı denge için iki taraftaki yakın çözümler de dengeye yönelmelidir. Son olarak faz çizgisi tam çözüm değeri üretmez, yalnız hareket yönünü ve denge davranışını gösterir.

:::

---

## Karar Soruları

1. $P'=-0{,}3P$: artma mı?
2. $P'=P(2-P)$: dengeler neler?
3. $y'=y^2$: $y=0$ kararlı mı?
4. $T'=-k(T-20)$: çekici değer?

::: {.notes}

Birinci denklemde pozitif $P$ için türev negatiftir; miktar azalır ve $P(t)=P_0e^{-0{,}3t}$ biçiminde sıfıra yaklaşır. İkinci denklemde sağ taraf $P=0$ ve $P=2$ değerlerinde sıfırlanır. $0<P<2$ aralığında türev pozitif, $P>2$ aralığında negatif olduğundan $P=2$ pozitif taraftan çekicidir.

$y'=y^2$ için sağ taraf $y\neq0$ olduğunda pozitiftir. $0$'ın solundaki çözümler sağa doğru dengeye yaklaşırken sağındaki çözümler sağa doğru dengeden uzaklaşır; bu nedenle $y=0$ iki taraftan çeken kararlı bir denge değildir. Soğuma denkleminde ise işaretler her iki taraftan $T=20$ değerine yönelir; çekici denge sıcaklığı $20$'dir.

:::

---

## Kavramsal Köprü

Buraya kadar:

- Ayrılabilir modeli çözdük
- Formülden davranış okuduk
- Çözmeden denge bulduk

→ Peki denklem doğrudan ayrılabilir görünmüyorsa bir dönüşüm işe yarar mı?

::: {.notes}

Bu notta aynı değişim yasasını iki yönden okuduk. Orantılı değişim modelini analitik olarak çözdük; otonom modellerde ise sağ tarafın kökleri ve işaretiyle denge davranışını belirledik. Böylece çözüm formülü ile nitel yorumun hangi sorulara cevap verdiği ayrıştı.

Homojen tip denklemlerde ilk bakışta ayrılabilir görünmeyen bir yapı ele alınır. $y'=F(y/x)$ biçiminde $v=y/x$ dönüşümü, denklemi yeni değişken cinsinden ayrılabilir hâle getirir. Yöntemin ölçütü, sağ tarafın yalnız $y/x$ oranına bağlı olup olmadığıdır.

:::

---
