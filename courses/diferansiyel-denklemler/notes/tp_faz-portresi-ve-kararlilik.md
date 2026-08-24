---
title: "Faz Portresi ve Kararlılık"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-08-05
execute:
  echo: false
---

## Çözümü Yazmadan Davranışı Okumak

$$
\mathbf{x}'=A\mathbf{x}
$$

Sorular çoğu zaman şunlar:

Nereye gider? Salınır mı? Kararlı mı?

::: {.notes}

Özdeğer yöntemi genel çözümü veriyor. Ama uygulamada asıl merak edilen, çözümün kapalı formu değil davranışıdır: sistem bir dengeye yerleşiyor mu, uzaklaşıyor mu, salınıyor mu.

Bir denetim sisteminin kararlı olup olmadığı, bir popülasyon modelinin dengeye gidip gitmediği, bir devrede salınımın sönüp sönmediği — hepsi bu tipte sorulardır ve cevapları özdeğerlerde saklıdır.

Bu okumayı sistematik hâle getirmenin yolu faz düzlemine bakmaktır. Zaman eksenini kaldırıp durumun izlediği yolu çizeriz; ortaya çıkan resme faz portresi denir.

Faz portresi bir tek çözümü değil, bütün çözüm ailesini birlikte gösterir. Her başlangıç durumundan çıkan yörünge resmin bir parçasıdır.

:::

---

## Denge Noktası

$$
A\mathbf{x}=\mathbf{0}
$$

$\det A\neq0$ ise tek denge noktası: orijin.

Orada başlayan sistem hiç hareket etmez.

::: {.notes}

Denge noktası, türevin sıfır olduğu durumdur: sistem oraya yerleşirse orada kalır.

Homojen lineer sistemde koşul $A\mathbf{x}=\mathbf{0}$'dır. $\det A\neq0$ ise tek çözüm $\mathbf{x}=\mathbf{0}$'dır ve orijin biricik denge noktasıdır.

$\det A=0$ ise durum farklıdır: $\lambda=0$ bir özdeğerdir ve karşılık gelen özvektör doğrultusundaki her nokta denge noktasıdır. Denge tek bir nokta değil, bir doğru olur.

Yörüngelerin orijine göre nasıl davrandığı, sınıflandırmanın konusudur. Sonlu sayıda tip var ve hepsi özdeğerlerle belirleniyor.

Lineer olmayan sistemlerde de aynı soru sorulur, ama denge noktaları birden fazla olabilir ve her birinin çevresinde ayrı bir davranış görülür. O durumda sistem denge noktası yakınında lineerleştirilir ve buradaki sınıflandırma yerel olarak kullanılır.

:::

---

## Düğüm: İki Negatif Özdeğer

$\lambda_1,\lambda_2<0$, ayrık ve reel

Bütün yörüngeler orijine iner.

Yaklaşma yönü: **büyük** özdeğerin özvektörü.

::: {.notes}

İki tank sisteminde özdeğerler $-1$ ve $-3$ idi. Genel çözüm $c_1e^{-t}\mathbf{v}_1+c_2e^{-3t}\mathbf{v}_2$'dir.

$t$ büyüdükçe her iki terim de sönüyor, dolayısıyla her yörünge orijine gidiyor. Bu tipe kararlı düğüm denir.

Yaklaşma yönü ilginç bir ayrıntı taşır. $e^{-3t}$ terimi $e^{-t}$ teriminden çok daha hızlı kayboluyor. Uzun vadede baskın kalan yavaş bileşendir, yani $\lambda=-1$ özdeğerinin özvektörü. Yörüngeler orijine bu doğrultuya teğet olarak yaklaşır.

İstisna, başlangıç durumunun tam olarak $\mathbf{v}_2$ doğrultusunda olmasıdır; o zaman $c_1=0$ olur ve yörünge o doğru üzerinde kalır.

İki özdeğer de pozitifse resim aynıdır, yalnız oklar ters döner: kararsız düğüm. Yörüngeler orijinden uzaklaşır ve uzaklaşma yönünü büyük özdeğer belirler.

:::

---

## Eyer: Zıt İşaretli Özdeğerler

$\lambda_1<0<\lambda_2$

Bir doğrultuda çekim, diğerinde itme.

Denge **kararsız**.

::: {.notes}

Özdeğerlerden biri negatif, diğeri pozitifse iki özvektör doğrultusu zıt davranır. Negatif özdeğerin doğrultusunda yörüngeler orijine yaklaşır; pozitif olanın doğrultusunda uzaklaşır.

Bu tipe eyer noktası denir. Ad, dağ geçidindeki eyer biçiminden gelir: bir yönde aşağı, dik yönde yukarı.

Yörüngeler önce orijine yaklaşır, sonra pozitif özdeğerin doğrultusuna sapıp uzaklaşır. Uzun vadede $e^{\lambda_2t}$ terimi baskın gelir.

Eyer her zaman kararsızdır. Yalnız tam olarak negatif özdeğerin doğrultusunda başlayan yörüngeler orijine ulaşır; o doğrultudan en küçük sapma bile sonunda uzaklaşmaya yol açar.

Sayısal simülasyonda bu davranış aldatıcı olabilir: yörünge uzun süre orijine yaklaşıyor gibi görünüp sonra hızla uzaklaşır. $\det A<0$ ise sistem eyerdir ve bu, özdeğerleri hesaplamadan görülebilir.

:::

---

## Sarmal ve Merkez

$\lambda=\alpha\pm i\beta$

- $\alpha<0$: içe sarmal, kararlı
- $\alpha>0$: dışa sarmal, kararsız
- $\alpha=0$: kapalı yörünge, merkez

::: {.notes}

Kompleks özdeğerlerde çözüm $e^{\alpha t}$ ile çarpılmış trigonometrik terimler içerir. Trigonometrik kısım dönmeyi, üstel kısım orijinden uzaklığın değişimini belirler.

$\alpha<0$ ise yarıçap küçülür ve yörünge içe doğru sarmal çizer. Sönümlü salınımın faz düzlemindeki görüntüsü budur; sistem kararlıdır.

$\alpha>0$ ise yarıçap büyür, sarmal dışa açılır ve sistem kararsızdır.

$\alpha=0$ durumunda üstel çarpan sabit $1$'dir. Yarıçap değişmez ve yörüngeler kapalı eğriler olur. Bu tipe merkez denir; her çözüm periyodiktir. Sönümsüz bir yay–kütle sistemi ya da idealleştirilmiş bir avcı–av modeli bu resmi verir.

Merkez, kararlılığın sınır durumudur. Yörüngeler orijine yaklaşmaz ama uzaklaşmaz da. Küçük bir sönüm eklendiğinde içe sarmala, küçük bir besleme eklendiğinde dışa sarmala döner; bu duyarlılık, gerçek sistemlerde tam merkez davranışının nadiren gözlenmesinin nedenidir.

:::

---

## Sınıflandırma Tablosu

| Özdeğerler | Tip |
|---|---|
| Reel, aynı işaret | Düğüm |
| Reel, zıt işaret | Eyer |
| Kompleks, $\alpha\neq0$ | Sarmal |
| Saf sanal | Merkez |

::: {.notes}

Dört ana tip, iki boyutlu lineer sistemlerin davranışını kapsar. Sınıflandırma yalnız özdeğerlere bakılarak yapılır; özvektörler resmin yönünü belirler ama tipini değiştirmez.

Kararlılık ayrı bir sorudur ve reel kısımların işaretiyle belirlenir. Düğüm negatif özdeğerlerle kararlı, pozitiflerle kararsızdır. Sarmalın kararlılığı $\alpha$'nın işaretine bağlıdır. Eyer her zaman kararsız, merkez ise sınır durumdur.

Tabloda görünmeyen bir tip daha var: katlı özdeğer durumu. Özvektör tek ise yörüngeler dejenere bir düğüm oluşturur — hepsi tek bir doğrultuya teğet olarak orijine yaklaşır ya da ondan uzaklaşır. İki bağımsız özvektör varsa yörüngeler orijinden çıkan düz ışınlar olur.

:::

---

## İz ve Determinantla Karar

$$
\lambda^2-T\lambda+D=0,
\quad T=\operatorname{tr}A,\; D=\det A
$$

- $D<0$: eyer
- $D>0$, $T<0$: kararlı
- $T^2-4D<0$: sarmal

::: {.notes}

İki boyutlu sistemlerde karakteristik denklem iz ve determinant cinsinden yazılabilir: $\lambda^2-T\lambda+D=0$. Kökleri hesaplamadan da işaret bilgisi çıkarılabilir.

Köklerin çarpımı $D$, toplamı $T$'dir. $D<0$ ise kökler zıt işaretlidir; sistem eyerdir. Bu tek satır, en hızlı sınıflandırma kuralıdır.

$D>0$ ise kökler aynı işaretlidir (ya da kompleks eşleniktir) ve işareti $T$ belirler. $T<0$ ise kararlı, $T>0$ ise kararsızdır.

Diskriminant $T^2-4D$ kökün reel olup olmadığını söyler. Negatifse kökler komplekstir ve yörünge sarmaldır; pozitifse reeldir ve yörünge düğüm ya da eyerdir.

Üç ölçüt birlikte kullanıldığında iki çarpma ve bir çıkarma ile sınıflandırma tamamlanır. Denklem katsayıları değiştikçe sistemin hangi tipten hangisine geçtiğini izlemek de bu düzlemde yapılır.

:::

---

## Soru: Üç Sistem

$$
A_1=\begin{bmatrix}-3&1\\1&-3\end{bmatrix}
\quad
A_2=\begin{bmatrix}1&2\\2&1\end{bmatrix}
$$

$$
A_3=\begin{bmatrix}-1&-4\\1&-1\end{bmatrix}
$$

::: {.notes}

Üçünü de iz ve determinantla sınıflandıralım; özdeğer hesabına girmeden.

Birincisinde $T=-6$ ve $D=9-1=8$'dir. $D>0$ ve $T<0$ olduğundan sistem kararlıdır. Diskriminant $36-32=4>0$, yani kökler reel. Tip: kararlı düğüm.

İkincisinde $T=2$ ve $D=1-4=-3$'tür. $D<0$ olduğundan sistem eyerdir ve kararsızdır. Diğer ölçütlere bakmaya gerek yok.

Üçüncüsünde $T=-2$ ve $D=1+4=5$'tir. Diskriminant $4-20=-16<0$, yani kökler kompleks. $T<0$ olduğundan reel kısım negatiftir. Tip: kararlı sarmal, içe doğru.

:::

---

## Çözüm: Doğrulama

| Sistem | $T$ | $D$ | Tip |
|---|---|---|---|
| $A_1$ | $-6$ | $8$ | Kararlı düğüm |
| $A_2$ | $2$ | $-3$ | Eyer |
| $A_3$ | $-2$ | $5$ | Kararlı sarmal |

::: {.notes}

Özdeğerleri de hesaplayarak sonuçları doğrulayalım.

$A_1$ için karakteristik denklem $\lambda^2+6\lambda+8=0$'dır; kökler $-2$ ve $-4$. İkisi de negatif reel — kararlı düğüm ✓. Yörüngeler orijine $\lambda=-2$ özvektörüne teğet yaklaşır.

$A_2$ için $\lambda^2-2\lambda-3=0$ ve kökler $3$ ile $-1$. Zıt işaretli — eyer ✓. Yörüngeler $\lambda=3$ doğrultusunda uzaklaşır.

$A_3$ için $\lambda^2+2\lambda+5=0$ ve kökler $-1\pm2i$. Reel kısım negatif, sanal kısım sıfırdan farklı — kararlı sarmal ✓. Salınım frekansı $2$, sönüm hızı $e^{-t}$.

İki yol da aynı sonuca vardı. İz–determinant yolu daha kısadır ve nitel soru sorulduğunda tercih edilir; özvektörler gerektiğinde tam hesap yapılır.

:::

---

## Kararlılık Ne Demek?

- **Kararlı**: yakın başlayan yakın kalır
- **Asimptotik kararlı**: üstelik orijine gider
- **Kararsız**: yakın başlayan uzaklaşır

::: {.notes}

Üç terim arasındaki fark, merkez tipini anlamak için gerekli.

Kararlılık, başlangıçtaki küçük bir sapmanın küçük kalmasıdır. Merkez tipinde yörüngeler kapalı eğrilerdir; orijinden uzaklaşmazlar ama ona da yaklaşmazlar. Merkez kararlıdır, asimptotik kararlı değildir.

Asimptotik kararlılık daha güçlü bir koşuldur: yörünge zamanla denge noktasına yakınsar. Bütün özdeğerlerin reel kısmı negatifse sistem asimptotik kararlıdır.

Kararsızlıkta en az bir doğrultuda uzaklaşma vardır. Eyer noktasında bir doğrultuda çekim olması kararlılık için yetmez; tek bir kaçış yönü kararsızlık için yeterlidir.

Mühendislik uygulamalarında aranan genellikle asimptotik kararlılıktır: sistem bozucu bir etkiden sonra kendi dengesine geri dönmelidir. Sınırdaki durumlar tasarımda riskli sayılır, çünkü modeldeki küçük bir hata sistemi kararsız tarafa geçirebilir.

:::

---

## Teknik Bağlam: Lineer Olmayan Sistemler

Denge noktası yakınında sistem lineerleştirilir.

Jacobi matrisinin özdeğerleri yerel davranışı verir.

Sınıflandırma yerel olarak geçerlidir.

::: {.notes}

Gerçek modellerin çoğu lineer değildir. Popülasyon dinamiği, kimyasal tepkimeler, salgın modelleri — hepsinde sağ taraf bilinmeyenlerin lineer olmayan fonksiyonudur.

Böyle bir sistemin denge noktaları $\mathbf{F}(\mathbf{x})=\mathbf{0}$ denkleminden bulunur ve birden fazla olabilir. Her denge noktasının yakınında sistem, orada hesaplanan Jacobi matrisiyle yaklaşık olarak lineer davranır.

Bu yaklaşımın sonucu şudur: buradaki sınıflandırma, lineer olmayan sistemlerin denge noktaları çevresinde de kullanılabilir. Bir denge noktası eyer, diğeri kararlı sarmal olabilir; her biri kendi yerel resmini taşır.

Sınır durumlarda — saf sanal özdeğerler çıktığında — lineerleştirme karar vermeye yetmez. Küçük lineer olmayan terimler merkezi içe ya da dışa sarmala çevirebilir ve bunu görmek için daha ileri araçlar gerekir.

Lineer olmayan sistemler bu dersin kapsamı dışında; burada kurulan sınıflandırma o konuya girildiğinde doğrudan kullanılacak temeldir.

:::

---

## Sık Yapılan Hatalar

1. Faz düzleminde zaman eksenini aramak
2. Eyeri kararlı sanmak
3. Yörüngelerin kesişebileceğini düşünmek
4. Sarmalın yönünü özdeğerin sanal kısmının işaretinden okumaya çalışmak
5. Merkezi asimptotik kararlı saymak

::: {.notes}

Birinci hata resmi yanlış okumaktır. Eksenler $x_1$ ve $x_2$'dir; zaman yörünge boyunca ilerler ve yön oklarla gösterilir.

İkinci hata bir doğrultudaki çekimi kararlılık sanmaktır. Kararlılık bütün doğrultularda sağlanmalıdır; tek bir kaçış yönü yeterlidir kararsızlık için.

Üçüncü hata teklik teoremini gözden kaçırmaktır. İki yörünge kesişseydi, kesişme noktasından iki farklı gelecek çıkardı.

Dördüncü hata sanal kısmın işaretine anlam yüklemektir. Eşlenik çiftin iki üyesi $\pm\beta$ taşır; dönme yönü bu işaretten değil, matrisin elemanlarından okunur. Pratik yol, bir noktada $A\mathbf{x}$ vektörünü hesaplayıp yönüne bakmaktır. Örneğin $(1,0)$ noktasında $A_3\mathbf{x}=(-1,1)$ çıkar; yörünge yukarı sola dönüyor demektir.

Beşinci hata iki kararlılık kavramını karıştırmaktır. Merkez kararlıdır ama yörüngeler orijine yakınsamaz.

:::

---

## Karar Soruları

Sınıflandırın:

1. $T=0$, $D=4$
2. $T=5$, $D=6$
3. $T=-4$, $D=4$

::: {.notes}

Birincisinde karakteristik denklem $\lambda^2+4=0$'dır; kökler $\pm2i$. Saf sanal — merkez. Yörüngeler kapalı eğrilerdir, sistem periyodik salınır. Kararlı ama asimptotik kararlı değil.

İkincisinde $\lambda^2-5\lambda+6=0$ ve kökler $2$ ile $3$. İkisi de pozitif reel — kararsız düğüm. Yörüngeler orijinden uzaklaşır ve uzun vadede $\lambda=3$ doğrultusuna yönelir.

Üçüncüsünde $\lambda^2+4\lambda+4=0$ ve $\lambda=-2$ çift kök. Diskriminant sıfır; sınır durum. Özvektör sayısına göre dejenere düğüm ya da yıldız düğüm çıkar. Her iki durumda da kök negatif olduğundan sistem asimptotik kararlıdır.

Üç soruda da matris görülmedi; iz ve determinant yeterli oldu.

:::

---

## Sonraki Adım: Dışarıdan Girdi

$$
\mathbf{x}'=A\mathbf{x}+\mathbf{f}(t)
$$

Denge noktası kayar mı? Sınıflandırma değişir mi?

::: {.notes}

Buraya kadar sistem yalnız kendi iç dinamiğiyle hareket etti. Dışarıdan bir girdi eklendiğinde resim değişir.

Sabit bir girdi denge noktasını kaydırır: $A\mathbf{x}+\mathbf{f}=\mathbf{0}$ denkleminin çözümü artık orijin değildir. Yörüngelerin tipi ise değişmez, çünkü tip $A$'ya bağlıdır ve $A$ aynı kalır.

Zamana bağlı bir girdi ise sistemi sürekli olarak zorlar. Çözüm $\mathbf{x}_h+\mathbf{x}_p$ biçiminde olur; homojen kısım sönerse uzun vadede yalnız girdiye verilen cevap kalır.

Özel çözüm, belirsiz katsayılar ve sabitlerin değişimi yöntemlerinin sistem karşılıklarıyla bulunur.

:::

---

## Kaynak Notu

Ana kaynak: Nagle, Saff ve Snider.

::: {.notes}

Kaynak: Nagle, Saff ve Snider, *Fundamentals of Differential Equations*. Denge noktası, özdeğerlere göre yörünge sınıflandırması ve kararlılık kavramları bu kaynaktaki klasik yaklaşımla uyumludur. İz–determinant ölçütü burada sınıflandırma için pratik bir karar aracı olarak kullanılır; lineer olmayan sistemlerin denge noktalarında lineerleştirme ile bağlantısı ayrıca işlenmemekle birlikte işaret edilmektedir.

:::

---
