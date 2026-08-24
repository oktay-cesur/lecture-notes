---
title: "Özdeğerlerle Homojen Sistem Çözümü"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-08-05
execute:
  echo: false
---

## Doğal Aday

$$
\mathbf{x}=e^{\lambda t}\mathbf{v}
$$

- $e^{\lambda t}$: zamana bağlı büyüklük
- $\mathbf{v}$: sabit yön

Yön değişmiyor, yalnız uzunluk değişiyor.

::: {.notes}

Tek denklemde $y'=ay$ çözümü $ce^{at}$ idi. Sistemlerde bunun karşılığı, üstel bir zaman çarpanıyla sabit bir yön vektörünün çarpımıdır.

Adayın anlamı geometriktir. $\mathbf{x}(t)$ noktası her zaman $\mathbf{v}$ doğrultusunda kalır; yalnız o doğrultu üzerindeki uzaklığı $e^{\lambda t}$ ile değişir. Faz düzleminde böyle bir çözüm, orijinden geçen bir doğru üzerinde hareket eder.

Bütün çözümlerin böyle olması beklenmez. Aranan şey, sistemin bu özel biçimdeki çözümlerini bulmaktır; genel çözüm sonra onların birleşiminden kurulacak.

Adayın denklemde ne verdiğine bakalım.

:::

---

## Aday Denkleme Girince

$$
\lambda e^{\lambda t}\mathbf{v}=Ae^{\lambda t}\mathbf{v}
$$

$$
\boxed{A\mathbf{v}=\lambda\mathbf{v}}
$$

Bu, özdeğer denklemi.

::: {.notes}

Türev alalım: $\mathbf{x}'=\lambda e^{\lambda t}\mathbf{v}$, çünkü $\mathbf{v}$ sabit bir vektördür. Diğer yandan $A\mathbf{x}=e^{\lambda t}A\mathbf{v}$ olur.

Eşitlik her $t$ için sağlanmalı. $e^{\lambda t}$ hiçbir zaman sıfır olmadığından sadeleşir ve geriye $A\mathbf{v}=\lambda\mathbf{v}$ kalır.

Bu koşul lineer cebirden tanıdık: $\mathbf{v}$, $A$ matrisinin $\lambda$ özdeğerine karşılık gelen özvektörüdür. Yani sistemin üstel çözümleri, katsayı matrisinin özvektör doğrultularında yaşıyor.

Anlamı şu: $A$ ile çarpmak çoğu vektörün yönünü değiştirir, ama özvektörlerin yönünü değiştirmez, yalnız ölçekler. Diferansiyel denklem "her an $A$ ile çarp ve o yönde ilerle" dediğine göre, yönü değişmeyen doğrultular boyunca hareket sade kalır.

$\mathbf{v}=\mathbf{0}$ da denklemi sağlar ama işe yaramaz; sıfır çözümü zaten biliyoruz. Aranan sıfırdan farklı özvektörlerdir.

:::

---

## Özdeğerleri Bulmak

$$
(A-\lambda I)\mathbf{v}=\mathbf{0}
$$

Sıfırdan farklı $\mathbf{v}$ olması için:

$$
\det(A-\lambda I)=0
$$

::: {.notes}

Denklemi $(A-\lambda I)\mathbf{v}=\mathbf{0}$ biçiminde yazalım. Bu, homojen bir lineer denklem sistemidir.

Homojen sistemlerin her zaman sıfır çözümü vardır. Sıfırdan farklı bir çözümün bulunması için katsayı matrisinin tersinir **olmaması** gerekir, yani determinantının sıfır olması gerekir.

$\det(A-\lambda I)=0$ denklemine karakteristik denklem denir. Sol taraf $\lambda$ cinsinden $n$'inci dereceden bir polinomdur.

Adlandırmadaki örtüşme rastlantı değil. Yüksek mertebeli bir denklem sisteme indirgendiğinde ortaya çıkan eşlik matrisinin karakteristik polinomu, özgün denklemin karakteristik polinomudur. Aynı nesneye iki ayrı yoldan varıyoruz.

:::

---

## Soru: İki Tank Sistemi

$$
A=\begin{bmatrix}-2&1\\1&-2\end{bmatrix}
$$

$$
\det(A-\lambda I)=(\lambda+2)^2-1
$$

::: {.notes}

$A-\lambda I=\begin{bmatrix}-2-\lambda&1\\1&-2-\lambda\end{bmatrix}$ olur. Determinantı $(-2-\lambda)^2-1$, yani $(\lambda+2)^2-1$'dir.

Açalım: $\lambda^2+4\lambda+3=0$. Çarpanlarına ayrılınca $(\lambda+1)(\lambda+3)=0$ çıkar ve özdeğerler $\lambda_1=-1$, $\lambda_2=-3$ olur.

İki özdeğer de reel ve birbirinden farklı. Bu, en sade durumdur; her özdeğer bir özvektör verir ve iki bağımsız çözüm elde edilir.

Determinantı açmadan da köklere ulaşılabilirdi: $(\lambda+2)^2=1$ eşitliğinden $\lambda+2=\pm1$ çıkar. İki bileşenli sistemlerde karakteristik denklemi $\lambda^2-(\operatorname{tr}A)\lambda+\det A=0$ biçiminde yazmak da hızlı bir yoldur; burada iz $-4$, determinant $3$'tür.

:::

---

## Çözüm: Özvektörler

$\lambda=-1$: $\;\begin{bmatrix}-1&1\\1&-1\end{bmatrix}\mathbf{v}=\mathbf{0}$

$$
\mathbf{v}_1=\begin{bmatrix}1\\1\end{bmatrix},
\qquad
\mathbf{v}_2=\begin{bmatrix}1\\-1\end{bmatrix}
$$

::: {.notes}

$\lambda=-1$ için $A+I=\begin{bmatrix}-1&1\\1&-1\end{bmatrix}$ olur. Denklem $-v_1+v_2=0$, yani $v_1=v_2$ verir. İkinci satır aynı bilgiyi tekrarlar — determinant sıfır olduğu için satırlar bağımlıdır ve bu beklenen bir durumdur.

Çözüm kümesi $\begin{bmatrix}1\\1\end{bmatrix}$ vektörünün katlarından oluşur. Özvektör bir doğrultudur; katsayısı serbest bırakılır, çünkü genel çözümdeki $c_1$ zaten onu soğurur.

$\lambda=-3$ için $A+3I=\begin{bmatrix}1&1\\1&1\end{bmatrix}$ olur ve denklem $v_1+v_2=0$ verir. Özvektör $\begin{bmatrix}1\\-1\end{bmatrix}$'dir.

Her özdeğer için matrisin en az bir satırı sıfırlanmalıdır. Sıfırlanmıyorsa özdeğer yanlış hesaplanmıştır; bu, ücretsiz bir kontrol noktasıdır.

:::

---

## Genel Çözüm

$$
\mathbf{x}=c_1e^{-t}\begin{bmatrix}1\\1\end{bmatrix}
+c_2e^{-3t}\begin{bmatrix}1\\-1\end{bmatrix}
$$

Her özdeğer bir üstel, her özvektör bir yön.

::: {.notes}

İki bağımsız çözüm bulundu; sistem iki boyutlu olduğu için temel çözüm kümesi tamamlandı. Genel çözüm bunların lineer birleşimidir.

Wronskian kontrolü daha önce yapılmıştı: $W=-2e^{-4t}\neq0$. Genel olarak farklı özdeğerlere karşılık gelen özvektörler lineer bağımsızdır, dolayısıyla ayrık özdeğerler durumunda bağımsızlık kendiliğinden sağlanır.

Çözümü okuyalım. İki üstel de negatif üsle sönüyor. $e^{-3t}$ bileşeni daha hızlı kayboluyor; uzun vadede çözüm $\mathbf{v}_1=\begin{bmatrix}1\\1\end{bmatrix}$ doğrultusuna yaklaşarak orijine gidiyor.

İki tank yorumunda bu şu demektir: tanklar arasındaki fark hızla kapanır, sonra iki tank birlikte ve eşit hızda boşalır. Baskın davranışı belirleyen, mutlak değerce en küçük özdeğerdir.

:::

---

## Kompleks Özdeğerler

$$
A=\begin{bmatrix}-1&2\\-2&-1\end{bmatrix},
\qquad
\lambda=-1\pm2i
$$

$$
\mathbf{v}=\begin{bmatrix}1\\i\end{bmatrix}
\quad(\lambda=-1+2i\text{ için})
$$

::: {.notes}

Karakteristik denklem $(-1-\lambda)^2+4=0$'dır ve kökler $\lambda=-1\pm2i$ çıkar. Reel katsayılı matrislerde kompleks özdeğerler eşlenik çiftler hâlinde gelir.

$\lambda=-1+2i$ için $A-\lambda I=\begin{bmatrix}-2i&2\\-2&-2i\end{bmatrix}$ olur. Birinci satır $-2iv_1+2v_2=0$, yani $v_2=iv_1$ verir. Özvektör $\begin{bmatrix}1\\i\end{bmatrix}$'dir.

Elde edilen $e^{(-1+2i)t}\begin{bmatrix}1\\i\end{bmatrix}$ çözümü kompleks değerlidir. Fiziksel bir modelde aranan çözüm reeldir, dolayısıyla bir adım daha gerekiyor.

Eşlenik özdeğer ayrıca hesaplanmaz. Eşlenik çiftin verdiği çözüm, birincinin eşleniğidir ve yeni bilgi taşımaz.

:::

---

## Reel Çözüme Geçmek

$$
e^{(-1+2i)t}\begin{bmatrix}1\\i\end{bmatrix}
$$

Reel ve sanal kısımlar ayrı ayrı çözümdür:

$$
e^{-t}\begin{bmatrix}\cos2t\\-\sin2t\end{bmatrix},
\qquad
e^{-t}\begin{bmatrix}\sin2t\\\cos2t\end{bmatrix}
$$

::: {.notes}

Kompleks bir çözümün reel ve sanal kısımları ayrı ayrı çözümdür. Gerekçe, $A$ matrisinin reel olmasıdır: $\mathbf{z}'=A\mathbf{z}$ denkleminin reel ve sanal kısımları da aynı denklemi sağlar.

Açalım. $e^{(-1+2i)t}=e^{-t}(\cos2t+i\sin2t)$ olur. Vektörle çarpalım: birinci bileşen $e^{-t}(\cos2t+i\sin2t)$, ikinci bileşen $e^{-t}(i\cos2t-\sin2t)$'dir.

Reel kısımları toplarsak $e^{-t}\begin{bmatrix}\cos2t\\-\sin2t\end{bmatrix}$, sanal kısımları toplarsak $e^{-t}\begin{bmatrix}\sin2t\\\cos2t\end{bmatrix}$ elde edilir.

Doğrulayalım. Birinci çözümde $x_1=e^{-t}\cos2t$ ve $x_2=-e^{-t}\sin2t$'dir. Türev $x_1'=-e^{-t}\cos2t-2e^{-t}\sin2t$ olur; diğer yandan $-x_1+2x_2=-e^{-t}\cos2t-2e^{-t}\sin2t$ ✓.

Genel çözüm bu iki reel çözümün birleşimidir. Davranış sönümlü dönmedir: $e^{-t}$ orijine çekiyor, trigonometrik terimler döndürüyor. Faz düzleminde yörünge içe doğru sarmal çizer.

:::

---

## Katlı Özdeğer, Eksik Özvektör

$$
A=\begin{bmatrix}3&-1\\1&1\end{bmatrix},
\qquad
\lambda=2\;\text{(çift)}
$$

$$
A-2I=\begin{bmatrix}1&-1\\1&-1\end{bmatrix}
\;\Rightarrow\;
\mathbf{v}=\begin{bmatrix}1\\1\end{bmatrix}
$$

::: {.notes}

Karakteristik denklem $\lambda^2-4\lambda+4=(\lambda-2)^2=0$'dır; $\lambda=2$ çift köktür.

Özvektörleri bulalım: $A-2I=\begin{bmatrix}1&-1\\1&-1\end{bmatrix}$ ve denklem $v_1-v_2=0$ verir. Çözüm kümesi tek boyutlu; yalnız $\begin{bmatrix}1\\1\end{bmatrix}$ doğrultusu var.

Elimizde bir çözüm var: $e^{2t}\begin{bmatrix}1\\1\end{bmatrix}$. Sistem iki boyutlu olduğu için bir çözüm eksik.

Bu, tek denklemlerde katlı kök durumunda yaşanan tıkanmanın aynısı. Orada ikinci çözüm $xe^{rx}$ ile geliyordu; burada da $t$ çarpanı devreye girecek, ama yalnız $te^{2t}\mathbf{v}$ yazmak yetmez.

:::

---

## İkinci Çözüm

$$
\mathbf{x}_2=e^{2t}\bigl(t\mathbf{v}+\mathbf{w}\bigr)
$$

$\mathbf{w}$ şu denklemden gelir:

$$
(A-2I)\mathbf{w}=\mathbf{v}
$$

::: {.notes}

Neden yalnız $te^{2t}\mathbf{v}$ yetmediğini görelim. Türevi $e^{2t}(2t\mathbf{v}+\mathbf{v})$, matris çarpımı ise $e^{2t}\cdot2t\mathbf{v}$ olur. Aradaki $e^{2t}\mathbf{v}$ farkı dengelenmemiş kalır.

Farkı kapatmak için aday bir vektör daha eklenir: $\mathbf{x}_2=e^{2t}(t\mathbf{v}+\mathbf{w})$. Yerine koyup düzenlediğimizde $\mathbf{w}$ için koşul $(A-2I)\mathbf{w}=\mathbf{v}$ çıkar.

$\mathbf{w}$ vektörüne genelleştirilmiş özvektör denir. Örneğimizde denklem $w_1-w_2=1$ verir; $\mathbf{w}=\begin{bmatrix}1\\0\end{bmatrix}$ seçilebilir.

Genel çözüm $\mathbf{x}=c_1e^{2t}\begin{bmatrix}1\\1\end{bmatrix}+c_2e^{2t}\left(t\begin{bmatrix}1\\1\end{bmatrix}+\begin{bmatrix}1\\0\end{bmatrix}\right)$ olur.

Bir uyarı: her katlı özdeğer eksik özvektör vermez. $A=2I$ matrisinde $\lambda=2$ çift kattır ama her vektör özvektördür; iki bağımsız özvektör bulunur ve genelleştirilmiş vektöre gerek kalmaz. Karar, $(A-\lambda I)$ matrisinin sıfır uzayının boyutuna bakılarak verilir.

:::

---

## Özdeğerler Davranışı Belirliyor

| Özdeğerler | Davranış |
|---|---|
| Reel, ikisi de negatif | Orijine iner |
| Reel, biri pozitif | Uzaklaşır |
| $\alpha\pm i\beta$, $\alpha<0$ | Sarmal, içe |
| Saf sanal | Kapalı yörünge |

::: {.notes}

Çözümü hiç yazmadan davranışa karar vermek mümkün. Her üstel terimin büyüyüp küçülmesi, özdeğerin reel kısmının işaretine bağlıdır.

Bütün özdeğerlerin reel kısmı negatifse her bileşen söner ve yörüngeler orijine gider. Sistem kararlıdır.

Bir tek özdeğerin reel kısmı pozitifse o doğrultudaki bileşen büyür. Başlangıç durumu tam olarak diğer özvektör üzerinde değilse yörünge uzaklaşır; sistem kararsızdır.

Kompleks özdeğerlerde sanal kısım dönmeyi, reel kısım yarıçapın değişimini belirler. Reel kısım sıfırsa yarıçap sabit kalır ve yörünge kapalı bir eğri olur — periyodik davranış.

Bu tablo, tek denklemlerde karakteristik köklerin okunmasıyla aynı mantığı taşıyor. Bu okuma faz düzleminde görselleştirilerek sınıflandırma tamamlanır.

:::

---

## Sık Yapılan Hatalar

1. Özvektörü hesaplamadan genel çözüm yazmak
2. Kompleks çözümü reel biçime çevirmemek
3. Eşlenik özdeğer için ayrıca hesap yapmak
4. Katlı özdeğerde ikinci çözümü $te^{\lambda t}\mathbf{v}$ sanmak
5. Özvektörü satır vektörü olarak yazmak

::: {.notes}

Birinci hata tek denklemden yanlış aktarma yapmaktır. Orada kök bulmak yetiyordu; sistemlerde her özdeğerin bir de yönü vardır ve o yön hesaplanmalıdır.

İkinci hata kompleks çözümü nihai cevap gibi bırakmaktır. Fiziksel modelde çözüm reeldir; reel ve sanal kısımlar ayrılmalıdır.

Üçüncü hata gereksiz iştir. $\lambda$ ve $\bar\lambda$ aynı iki reel çözümü verir; ikinci özdeğer için hesap tekrarlanırsa aynı sonuçlar farklı işaretlerle yeniden çıkar.

Dördüncü hata katlı özdeğerlerde en sık yapılanıdır. $te^{\lambda t}\mathbf{v}$ tek başına denklemi sağlamaz; genelleştirilmiş özvektör terimi zorunludur. Kontrol yolu, adayı denkleme yerleştirip dengelenmemiş terim kalıp kalmadığına bakmaktır.

Beşinci hata boyut hatası üretir. $A\mathbf{v}$ çarpımının tanımlı olması için $\mathbf{v}$ sütun vektörü olmalıdır.

:::

---

## Karar Soruları

Çözmeden söyleyin:

1. $\operatorname{tr}A=-5$, $\det A=6$: kararlı mı?
2. $\det A=0$ ne demek?
3. Özdeğerler $2\pm3i$: yörünge?

::: {.notes}

Birincisinde karakteristik denklem $\lambda^2+5\lambda+6=0$'dır; kökler $-2$ ve $-3$'tür. İkisi de negatif, sistem kararlıdır. İki boyutlu sistemlerde iz ve determinant, özdeğerleri bulmadan da işaret bilgisi verir: iz negatif ve determinant pozitifse her iki özdeğerin reel kısmı negatiftir.

İkincisinde $\det A=0$ olması, $\lambda=0$'ın bir özdeğer olduğu anlamına gelir. Karşılık gelen çözüm $e^{0t}\mathbf{v}=\mathbf{v}$, yani sabit bir vektördür. O doğrultudaki her nokta bir denge noktasıdır; sistem orada başlarsa hiç hareket etmez.

Üçüncüsünde reel kısım $+2$, yani pozitif. Sanal kısım dönmeyi getirir. Yörünge dışa doğru sarmal çizer; genlik büyüyerek dönen bir davranış. Sistem kararsızdır.

Üç soruda da özvektör hesaplanmadı. Nitel davranış için özdeğerlerin işaretleri yeterlidir.

:::

---

## Sonraki Adım: Yörüngeleri Sınıflandırmak

Özdeğerler davranışı belirliyor.

Faz düzleminde bu davranışlar nasıl görünür?

Kaç farklı tip var?

::: {.notes}

Özdeğer yöntemi artık çalışıyor: karakteristik denklem kurulur, özvektörler bulunur, genel çözüm yazılır. Kompleks ve katlı durumlar da kapsam içinde.

Ama çözümü yazmak, davranışı anlamakla aynı şey değil. Uygulamada çoğu zaman sorulan soru "çözüm nedir" değil, "bu sistem kararlı mı, nereye yerleşir, salınır mı" biçimindedir.

Bu soruların cevabı özdeğerlerde duruyor ve faz düzleminde görülebiliyor. Denge noktalarının etrafındaki yörünge tipleri faz portresi üzerinden sınıflandırılır ve kararlılık bu resimle birleştirilir.

:::

---

## Kaynak Notu

Ana kaynak: Nagle, Saff ve Snider.

::: {.notes}

Özdeğer yöntemi anlatımı, Nagle, Saff ve Snider kaynağındaki klasik yaklaşımı izler: $e^{\lambda t}\mathbf{v}$ adayı, karakteristik denklem, ayrık reel özdeğerler, kompleks eşlenik çiftler ve genelleştirilmiş özvektörler. Lineer cebir bilgisi burada yeniden kurulmaz, hatırlatılarak kullanılır; ağırlık özdeğerlerin sistem davranışını nasıl belirlediğindedir. Katlı özdeğer durumu tanıma ve uygulama düzeyinde tutulmuştur; ispat düzeyinde bir genelleştirilmiş özvektör teorisi bu notun kapsamında değildir.

:::

---
