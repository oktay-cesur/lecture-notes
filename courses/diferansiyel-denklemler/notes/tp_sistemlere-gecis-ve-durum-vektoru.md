---
title: "Sistemlere Geçiş ve Durum Vektörü"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-08-05
execute:
  echo: false
---

## Birbirine Bağlı İki Nicelik

İki tank, aralarında karışım akışı:

$$
\begin{aligned}
x_1'&=-2x_1+x_2\\
x_2'&=x_1-2x_2
\end{aligned}
$$

Hiçbiri tek başına çözülemez.

::: {.notes}

İki tankta tuzlu su bulunsun ve tanklar birbirine borularla bağlı olsun. Birinci tanktaki tuz miktarı $x_1$, ikincideki $x_2$ ile gösterilsin. Her tanktaki değişim, hem kendi içeriğine hem komşusundan gelen akışa bağlıdır.

Denklemlere bakalım. Birinci denklemde $x_2$ var, ikincisinde $x_1$. Birinci denklemi çözmek için $x_2$'yi bilmek gerekiyor; $x_2$'yi bulmak için de $x_1$ gerekiyor. Döngü kapalı.

Bu yapıya diferansiyel denklem sistemi denir. Aynı yapı çok farklı yerlerde çıkar: bir devredeki iki akım, avcı ve av popülasyonları, bir ağdaki iki kuyruk uzunluğu, bir salgın modelindeki duyarlı ve bulaşmış birey sayıları.

Ortak özellik şudur: sistemin o andaki durumunu anlatmak için tek bir sayı yetmiyor, birkaç sayı gerekiyor ve bu sayılar birlikte değişiyor.

:::

---

## Durum Vektörü

$$
\mathbf{x}(t)=
\begin{bmatrix}x_1(t)\\x_2(t)\end{bmatrix}
$$

Sistemin $t$ anındaki **durumu** tek bir nesnede.

::: {.notes}

İki fonksiyonu ayrı ayrı takip etmek yerine bir sütun vektöründe toplayalım. $\mathbf{x}(t)$, sistemin $t$ anındaki durumunu tam olarak tanımlar.

"Durum" kelimesi burada teknik bir anlam taşır: sistemin bundan sonra nasıl davranacağını belirlemek için bilinmesi gereken en küçük bilgi kümesi. İki tank probleminde $x_1$ ve $x_2$ değerleri verildiğinde gelecekteki bütün davranış belirlenmiş olur; geçmişi bilmeye gerek yoktur.

Vektörün türevi bileşen bileşen alınır: $\mathbf{x}'(t)=\begin{bmatrix}x_1'(t)\\x_2'(t)\end{bmatrix}$. Bu, tanım gereği böyledir ve türevin lineerliğinden gelir.

Durum kavramı bu dersin dışında da merkezî bir yer tutar. Denetim sistemlerinde, sonlu durum makinelerinde, pekiştirmeli öğrenmede aynı fikir çalışır: sistemin şu anki konumunu özetleyen bir nesne ve o nesneyi ilerleten bir kural.

:::

---

## Matris Biçimi

$$
\mathbf{x}'=A\mathbf{x},
\qquad
A=\begin{bmatrix}-2&1\\1&-2\end{bmatrix}
$$

Katsayılar matriste, bilinmeyenler vektörde.

::: {.notes}

İki denklemi tek satırda yazalım. Sağ taraflardaki katsayıları bir matrise dizelim: birinci satır birinci denklemin katsayıları, ikinci satır ikinci denklemin katsayıları.

Matris çarpımını açalım: $A\mathbf{x}=\begin{bmatrix}-2x_1+x_2\\x_1-2x_2\end{bmatrix}$. Bu tam olarak denklemlerin sağ taraflarıdır.

Yazımın kazandırdığı şey yalnız kısalık değil. $\mathbf{x}'=A\mathbf{x}$ biçimi, birinci mertebeden lineer tek denklem olan $y'=ay$ ile aynı yapıdadır. Skaler durumda çözüm $y=ce^{at}$ idi. Sistem durumunda benzer bir çözüm arayışı doğal hâle geliyor ve bu arayış özdeğerlere götürecek.

Matris $A$ sistemin bağlantı yapısını taşır. Köşegen dışı elemanlar bileşenler arasındaki etkileşimi gösterir; hepsi sıfır olsaydı denklemler birbirinden bağımsız çözülebilirdi.

:::

---

## Genel Biçim

$$
\mathbf{x}'=A(t)\mathbf{x}+\mathbf{f}(t)
$$

- $A$: $n\times n$ katsayı matrisi
- $\mathbf{f}$: dışarıdan gelen girdi
- $\mathbf{f}=\mathbf{0}$ ise homojen

::: {.notes}

$n$ bilinmeyenli birinci mertebe lineer sistemin genel biçimi budur. Katsayı matrisi zamana bağlı olabilir; sabit olduğu durum bu dersin asıl çalışma alanıdır.

$\mathbf{f}(t)$ vektörü dışarıdan gelen etkiyi taşır: bir tanka dışarıdan eklenen tuz, devreye uygulanan gerilim, sisteme giren istek akışı. Sıfır olduğunda sistem yalnız kendi iç dinamiğiyle hareket eder.

Homojen ve homojen olmayan ayrımı, tek denklemdekiyle aynı anlamı taşır ve aynı sonucu doğurur: genel çözüm $\mathbf{x}=\mathbf{x}_h+\mathbf{x}_p$ biçimindedir.

Başlangıç koşulu da vektörel olur: $\mathbf{x}(t_0)=\mathbf{x}_0$. Tek bir vektör koşulu, $n$ tane skaler koşula karşılık gelir — sistemin mertebesi kadar.

:::

---

## Yüksek Mertebeyi Sisteme İndirgemek

$$
y''+3y'+2y=0
$$

$$
x_1=y,
\qquad
x_2=y'
$$

Yeni bilinmeyenler tanımlayalım.

::: {.notes}

Sistemler yalnız birden fazla nicelik olduğunda ortaya çıkmaz. Tek bilinmeyenli yüksek mertebeli bir denklem de birinci mertebe sisteme çevrilebilir ve bu çevirme, uygulamada sürekli kullanılır.

Fikir, türevleri yeni bilinmeyen olarak adlandırmaktır. $x_1=y$ ve $x_2=y'$ diyelim. Bu iki fonksiyon arasındaki ilişki zaten bir denklemdir: $x_1'=y'=x_2$.

İkinci denklem, özgün denklemden gelir. $y''=-3y'-2y$ olduğundan $x_2'=-3x_2-2x_1$ yazılır.

İki bilinmeyen, iki birinci mertebe denklem. Mertebe düştü, denklem sayısı arttı; taşınan bilgi aynı kaldı.

:::

---

## İndirgemenin Sonucu

$$
\begin{aligned}
x_1'&=x_2\\
x_2'&=-2x_1-3x_2
\end{aligned}
$$

$$
A=\begin{bmatrix}0&1\\-2&-3\end{bmatrix}
$$

::: {.notes}

Elde edilen sistemin katsayı matrisi bu biçimdedir. Birinci satır tanımdan, ikinci satır denklemin kendisinden gelir.

Matrisin yapısına dikkat edin. Üst satırda yalnız bir $1$ var; bu, $x_1'=x_2$ ilişkisini kodluyor. Alt satır özgün denklemin katsayılarını ters işaretle taşıyor.

$n$'inci mertebe denklemler için aynı yapı $n\times n$ boyutunda kurulur: $x_1=y$, $x_2=y'$, ..., $x_n=y^{(n-1)}$ tanımlanır. İlk $n-1$ denklem tanım gereği, sonuncusu denklemden gelir.

Bu matrise eşlik matrisi (companion matrix) denir ve karakteristik polinomu, özgün denklemin karakteristik polinomudur. Örnekteki matris için $\det(A-\lambda I)=\lambda^2+3\lambda+2$ çıkar — denklemin karakteristik polinomunun aynısı. Yani indirgeme bilgi kaybetmiyor, aynı bilgiyi başka bir dilde yazıyor.

:::

---

## İndirgeme Neden Yapılır?

- Sayısal çözücüler birinci mertebe sistem ister
- Kararlılık analizi matris üzerinden yapılır
- Faz düzlemi görselleştirmesi mümkün olur

::: {.notes}

Bu çevirme, teorik bir egzersiz değil. Sayısal çözüm algoritmalarının hemen hepsi $\mathbf{x}'=\mathbf{F}(t,\mathbf{x})$ biçimindeki birinci mertebe sistemler için yazılmıştır. Bir yazılım kütüphanesine ikinci mertebe bir denklem vermek isterseniz önce bu indirgemeyi yapmanız gerekir.

İkinci sebep analiz kolaylığıdır. Sistemin uzun vadeli davranışı $A$ matrisinin özdeğerlerinden okunur ve bu okuma boyuttan bağımsız olarak aynı biçimde işler.

Üçüncü sebep görselleştirmedir. İki bilinmeyenli bir sistemde çözüm, $(x_1,x_2)$ düzleminde bir eğri çizer. Zaman eksenini çizime koymadan, yalnız durumun izlediği yolu görmek mümkün olur.

$y''+3y'+2y=0$ örneğinde $x_1=y$ konum, $x_2=y'$ hızdır. Düzlemdeki eğri, konum ve hızın birlikte nasıl değiştiğini gösterir — mekanikte faz düzlemi denen şey budur.

:::

---

## Faz Düzlemi

Zaman ekseni yok; yalnız durumun izlediği yol.

$$
\bigl(x_1(t),\,x_2(t)\bigr)
$$

Her başlangıç durumu bir yörünge çizer.

::: {.notes}

Çözümü çizmenin iki yolu var. Birincisi, $x_1$ ve $x_2$ fonksiyonlarını ayrı ayrı $t$'ye karşı çizmek. İkincisi, $(x_1,x_2)$ noktasının düzlemde izlediği yolu çizmek.

İkinci çizimde zaman görünmez, ama davranış görünür. Yörünge orijine yaklaşıyorsa sistem sönüyor demektir; orijinden uzaklaşıyorsa büyüyor; kapalı bir eğri çiziyorsa periyodik olarak salınıyor.

Her başlangıç durumundan bir yörünge çıkar ve yörüngeler kesişmez. Kesişselerdi, aynı durumdan iki farklı gelecek çıkardı; varlık-teklik teoremi bunu dışlar.

Bu görselleştirme birinci mertebe denklemlerde gördüğümüz yön alanının iki boyutlu karşılığıdır. Orada her $(x,y)$ noktasına bir eğim atanıyordu; burada her $(x_1,x_2)$ noktasına $A\mathbf{x}$ vektörü atanır ve yörüngeler bu vektör alanını takip eder.

Yörüngelerin tipi ve orijine göre davranışı, $A$ matrisinin özdeğerlerine bağlıdır. Bu bağlantı ilerideki konularda kurulacak.

:::

---

## Soru: Üçüncü Mertebeyi İndirgemek

$$
y'''-2y''+y=0
$$

Sistemi ve $A$ matrisini yazın.

::: {.notes}

Üç yeni bilinmeyen tanımlayalım: $x_1=y$, $x_2=y'$ ve $x_3=y''$.

İlk iki denklem tanımdan gelir: $x_1'=x_2$ ve $x_2'=x_3$.

Üçüncü denklem için özgün denklemi $y'''$ yalnız kalacak biçimde düzenleyelim: $y'''=2y''-y$. Yeni değişkenlerle $x_3'=2x_3-x_1$ olur.

Denklemdeki $y'$ teriminin katsayısının sıfır olduğuna dikkat edin; bu, matrisin son satırında $x_2$ katsayısının sıfır olması demektir. Eksik terimleri sıfır katsayı olarak yazmak, matrisi kurarken atlanan bir adımdır.

:::

---

## Çözüm: Eşlik Matrisi

$$
A=\begin{bmatrix}
0&1&0\\
0&0&1\\
-1&0&2
\end{bmatrix}
$$

Üst blok tanımdan, son satır denklemden.

::: {.notes}

Matrisin ilk iki satırı yalnızca $1$'lerden oluşuyor ve köşegenin bir sağında duruyorlar. Bu blok, $x_1'=x_2$ ve $x_2'=x_3$ tanımlarını taşır ve her indirgemede aynı biçimde çıkar.

Son satır denklemin katsayılarını taşır: $-1$, $0$, $2$. Sırasıyla $y$, $y'$ ve $y''$ katsayılarının işaret değiştirilmiş hâlleri.

Kontrol edelim. $\det(A-\lambda I)$ hesaplanırsa $-\lambda^3+2\lambda^2-1$ çıkar; işaret düzeltilince özgün denklemin karakteristik polinomu $\lambda^3-2\lambda^2+1$ elde edilir ✓.

Bu kontrol her indirgemede yapılabilir ve matrisin doğru kurulduğunu hızlıca doğrular.

:::

---

## Laplace ile Sistem Çözme

$$
\begin{aligned}
x_1'&=-2x_1+x_2\\
x_2'&=x_1-2x_2
\end{aligned}
$$

Her denklemin dönüşümü alınır; cebirsel sistem çıkar.

::: {.notes}

Sistemleri çözmenin bir yolu, elimizdeki Laplace aracını doğrudan kullanmaktır. Her denklemin dönüşümü alınır ve $X_1$, $X_2$ bilinmeyenli iki cebirsel denklem elde edilir.

$x_1(0)=a$ ve $x_2(0)=b$ olsun. Dönüşümler $sX_1-a=-2X_1+X_2$ ve $sX_2-b=X_1-2X_2$ verir. Düzenlenince $(s+2)X_1-X_2=a$ ve $-X_1+(s+2)X_2=b$ olur.

İki bilinmeyenli lineer sistem; yerine koyma ya da Cramer kuralıyla çözülür. Sonuçların ters dönüşümü $x_1(t)$ ve $x_2(t)$ verir.

Yöntem çalışıyor ama boyut büyüdükçe zorlaşıyor. Üç bilinmeyenli bir sistemde üç denklemli cebirsel sistem, dört bilinmeyenlide dört denklemli sistem çözülür ve her birinin ters dönüşümü ayrıca alınır.

Daha verimli bir yol var: matrisin kendi yapısını kullanmak. Çözüm uzayının yapısı kurulup özdeğerler üzerinden doğrudan çözüme gidilir.

:::

---

## Sık Yapılan Hatalar

1. İndirgemede eksik terimi sıfır yazmayı atlamak
2. Son satırda işaretleri değiştirmeyi unutmak
3. Durum vektörü boyutunu mertebeyle eşleştirmemek
4. Bileşenleri ayrı ayrı çözmeye çalışmak
5. Faz düzleminde zaman ekseni aramak

::: {.notes}

Birinci ve ikinci hatalar eşlik matrisini kurarken çıkar. Denklem $y'''=2y''-y$ biçimine getirilmeden katsayılar okunursa işaretler ters düşer. Kontrol yolu, karakteristik polinomu iki yoldan hesaplayıp karşılaştırmaktır.

Üçüncü hata boyut karışıklığıdır. $n$'inci mertebe bir denklem $n$ boyutlu bir sisteme gider; iki bilinmeyenli ikinci mertebe bir sistem ise dört boyutlu bir birinci mertebe sisteme.

Dördüncü hata sistemin tanımını gözden kaçırmaktır. $x_1$ denklemini tek başına çözmeye kalkışmak, içindeki $x_2$ bilinmediği için tıkanır. Bileşenler ancak birlikte çözülür.

Beşinci hata faz düzlemi çizimini yanlış okumaktır. Eksenler $x_1$ ve $x_2$'dir; zaman yörünge boyunca ilerler ve grafikte bir eksen olarak görünmez. Yönü göstermek için yörüngeye ok konur.

:::

---

## Karar Soruları

1. $y^{(4)}+y=0$ hangi boyutta sisteme iner?
2. $A$ köşegen ise denklemler bağımsız mı?
3. $\mathbf{x}'=A\mathbf{x}$ için kaç başlangıç koşulu gerekir?

::: {.notes}

Birincisinde mertebe dörttür, dolayısıyla sistem dört boyutludur. Değişkenler $x_1=y$, $x_2=y'$, $x_3=y''$, $x_4=y'''$ olur ve son denklem $x_4'=-x_1$'dir.

İkincisinde cevap evettir. $A$ köşegense $i$'inci denklem $x_i'=a_{ii}x_i$ biçimindedir ve diğer bileşenleri içermez. Her denklem ayrı ayrı çözülür; çözümler $x_i=c_ie^{a_{ii}t}$'dir. Köşegen dışı elemanlar bağlantıyı kuran şeydir; yoksa sistem gerçekte $n$ ayrı denklemdir.

Bu gözlem çözüm stratejisini de veriyor: $A$ köşegen değilse, onu köşegenleştirecek bir taban aramak akla gelen ilk hamledir. Özdeğer–özvektör yönteminin yapacağı iş tam olarak budur.

Üçüncüsünde koşul sayısı $n$'dir, yani sistemin boyutu kadar. Vektörel yazımda tek bir $\mathbf{x}(t_0)=\mathbf{x}_0$ koşulu görünür, ama bu vektörün $n$ bileşeni vardır.

:::

---

## Sonraki Adım: Çözüm Uzayının Yapısı

$$
\mathbf{x}'=A\mathbf{x}
$$

Kaç bağımsız çözüm var? Genel çözüm nasıl kurulur?

Wronskian'ın sistemlerdeki karşılığı ne?

::: {.notes}

Sistemin dili kuruldu: durum vektörü, katsayı matrisi ve $\mathbf{x}'=A\mathbf{x}$ biçimi. Ama henüz hiçbir sistem bu dille çözülmedi.

Çözmeden önce yapıyı bilmek gerekiyor — tek denklemlerde de öyle yapmıştık. Orada sırayla süperpozisyon, varlık-teklik, lineer bağımsızlık ve temel çözüm kümesi kurulmuş, ancak ondan sonra karakteristik denkleme geçilmişti.

Sistemlerde de aynı sıra izlenecek. Sorular şunlar: çözümlerin toplamı yine çözüm mü, kaç bağımsız çözüm var, bağımsızlık nasıl kontrol edilir, genel çözüm nasıl yazılır.

Cevaplar tek denklemdekilere çok benzeyecek, çünkü altta yatan yapı aynı: lineerlik. Değişen şey, skaler fonksiyonların yerini vektör fonksiyonlarının, Wronskian'ın yerini bir matrisin determinantının alması.

:::

---

## Kaynak Notu

Ana kaynak: Nagle, Saff ve Snider.

::: {.notes}

Sistemlere geçişin buradaki kurulumu — bağlı denklemlerden matris gösterimine geçiş, yüksek mertebeli denklemlerin birinci mertebe sisteme indirgenmesi ve normal biçim — Nagle, Saff ve Snider kaynağındaki klasik yaklaşımla uyumludur. İndirgemenin sayısal çözüm ve kararlılık analizindeki işlevi de bu bağlamda önemlidir.

:::

---
