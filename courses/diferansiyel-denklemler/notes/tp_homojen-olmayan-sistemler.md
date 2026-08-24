---
title: "Homojen Olmayan Sistemler"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-08-05
execute:
  echo: false
---

## Dışarıdan Gelen Girdi

$$
\mathbf{x}'=A\mathbf{x}+\mathbf{f}(t)
$$

$$
\mathbf{x}=\mathbf{x}_h+\mathbf{x}_p
$$

Homojen kısım çözüldü. Sıra $\mathbf{x}_p$'de.

::: {.notes}

Bir tanka dışarıdan tuz ekleniyor, bir devreye gerilim uygulanıyor, bir kuyruğa dışarıdan istek geliyor. Her durumda sistemin kendi dinamiğine bir de dış etki ekleniyor.

Yapı tek denklemdekiyle aynı: genel çözüm, homojen sistemin genel çözümü ile bir özel çözümün toplamıdır. Homojen kısmı özdeğerlerle çözmeyi biliyoruz.

Özel çözüm için iki yol var ve ikisi de tek denklemdeki yöntemlerin karşılıkları. Belirsiz katsayılar kapsamı dar ama hızlı; sabitlerin değişimi her durumda çalışır ama integral ister.

Girdi sabitse iş çok daha kısa — oradan başlayalım.

:::

---

## Sabit Girdi: Denge Kayması

$$
\mathbf{x}'=A\mathbf{x}+\mathbf{f},
\qquad
\mathbf{f}\;\text{sabit}
$$

$\mathbf{x}_p$ sabit vektör aranır:

$$
A\mathbf{x}_p=-\mathbf{f}
$$

::: {.notes}

Girdi sabitse özel çözüm de sabit olabilir. Sabit bir vektörün türevi sıfırdır, dolayısıyla denklem $\mathbf{0}=A\mathbf{x}_p+\mathbf{f}$ hâline gelir.

Buradan $A\mathbf{x}_p=-\mathbf{f}$ çıkar. Bu bir lineer denklem sistemidir ve $\det A\neq0$ ise tek çözümü vardır.

Bulunan $\mathbf{x}_p$ sistemin yeni denge noktasıdır. Girdi yokken denge orijindeydi; sabit girdi onu kaydırdı.

Yörüngelerin tipi değişmez. Faz portresi aynı biçimi korur, yalnız merkezi $\mathbf{x}_p$ noktasına taşınır. Kararlılık da $A$'ya bağlı olduğundan değişmez: kararlı bir sistem yeni dengesine yerleşir.

:::

---

## Soru: Sabit Besleme

$$
\mathbf{x}'=\begin{bmatrix}-2&1\\1&-2\end{bmatrix}\mathbf{x}
+\begin{bmatrix}3\\0\end{bmatrix}
$$

Birinci tanka sabit tuz akışı var.

::: {.notes}

İki tank sistemine dönelim. Bu kez birinci tanka dışarıdan sabit hızda tuz ekleniyor; ikinciye dışarıdan bir şey gelmiyor.

Homojen kısmın çözümünü biliyoruz: özdeğerler $-1$ ve $-3$, özvektörler $\begin{bmatrix}1\\1\end{bmatrix}$ ve $\begin{bmatrix}1\\-1\end{bmatrix}$.

Girdi sabit olduğuna göre sabit bir özel çözüm arayalım. Denklem $A\mathbf{x}_p=-\begin{bmatrix}3\\0\end{bmatrix}$ olur.

Açık biçimde: $-2p_1+p_2=-3$ ve $p_1-2p_2=0$.

:::

---

## Çözüm: Yeni Denge

$$
p_1=2p_2
\;\Rightarrow\;
-4p_2+p_2=-3
$$

$$
\mathbf{x}_p=\begin{bmatrix}2\\1\end{bmatrix}
$$

$$
\mathbf{x}=c_1e^{-t}\begin{bmatrix}1\\1\end{bmatrix}+c_2e^{-3t}\begin{bmatrix}1\\-1\end{bmatrix}+\begin{bmatrix}2\\1\end{bmatrix}
$$

::: {.notes}

İkinci denklemden $p_1=2p_2$ çıkar. Birinciye koyalım: $-4p_2+p_2=-3$, yani $p_2=1$ ve $p_1=2$.

Genel çözümde homojen kısım sönüyor. $t$ büyüdükçe her iki üstel de kayboluyor ve çözüm $\begin{bmatrix}2\\1\end{bmatrix}$ noktasına yerleşiyor.

Sonucu yorumlayalım. Uzun vadede birinci tankta $2$, ikincide $1$ birim tuz kalıyor. Besleme birinci tanka yapıldığı için orada daha çok tuz birikiyor; ikinci tank yalnız akışla besleniyor.

Başlangıç durumu ne olursa olsun aynı dengeye varılıyor, çünkü sistem asimptotik kararlı. Başlangıç yalnız hangi yoldan gidileceğini belirliyor.

:::

---

## Belirsiz Katsayılar: Vektör Aday

$$
\mathbf{f}(t)=e^{2t}\begin{bmatrix}1\\0\end{bmatrix}
\;\Rightarrow\;
\mathbf{x}_p=e^{2t}\mathbf{a}
$$

$\mathbf{a}$ bilinmeyen bir vektör.

::: {.notes}

Girdi zamana bağlıysa aday da zamana bağlı olur. Kalıp seçimi tek denklemdekiyle aynı mantıkla yapılır: girdi hangi ailedense aday da o ailedendir. Fark şu ki katsayılar artık sayı değil, vektördür.

Girdi $e^{2t}$ ile orantılıysa aday $e^{2t}\mathbf{a}$ olur. Denkleme yerleştirelim: $2e^{2t}\mathbf{a}=Ae^{2t}\mathbf{a}+e^{2t}\begin{bmatrix}1\\0\end{bmatrix}$.

Ortak çarpanı sadeleştirip düzenleyelim: $(A-2I)\mathbf{a}=-\begin{bmatrix}1\\0\end{bmatrix}$. Bu, $\mathbf{a}$ için bir lineer denklem sistemidir.

Çakışma kontrolü burada da gerekir. $2$ bir özdeğerse $(A-2I)$ tersinir değildir ve sistem çözülemez; aday $t$ ile çarpılarak genişletilir. Tek denklemdeki $x^s$ düzeltmesinin karşılığı budur.

Girdi polinom ya da trigonometrikse aday da öyle seçilir; her terim için ayrı bir vektör katsayı yazılır.

:::

---

## Sabitlerin Değişimi

$$
\mathbf{x}_p=X(t)\int X(t)^{-1}\mathbf{f}(t)\,dt
$$

$X$: temel matris

Her girdi için çalışır.

::: {.notes}

Genel yöntem, homojen çözümdeki sabit vektörü zamana bağlı yapmaktır: $\mathbf{x}_p=X(t)\mathbf{u}(t)$.

Türev alalım: $\mathbf{x}_p'=X'\mathbf{u}+X\mathbf{u}'$. Temel matris $X'=AX$ denklemini sağladığından birinci terim $AX\mathbf{u}=A\mathbf{x}_p$ olur.

Denkleme yerleştirelim: $A\mathbf{x}_p+X\mathbf{u}'=A\mathbf{x}_p+\mathbf{f}$. Sadeleştirince $X\mathbf{u}'=\mathbf{f}$ kalır.

$X$ tersinir olduğundan — Wronskian sıfırdan farklıydı — $\mathbf{u}'=X^{-1}\mathbf{f}$ ve $\mathbf{u}=\int X^{-1}\mathbf{f}\,dt$ olur.

Tek denklemdeki sabitlerin değişimiyle karşılaştırın: orada bir kısıt seçmek ve iki denklemli bir sistem kurmak gerekiyordu. Matris dilinde o adımlar kendiliğinden hallolur; hesabın tamamı bir ters matris ve bir integralden ibaret kalır.

:::

---

## Aynı Problemi İkinci Yoldan

$$
X(t)=\begin{bmatrix}e^{-t}&e^{-3t}\\e^{-t}&-e^{-3t}\end{bmatrix}
$$

$$
X^{-1}=\frac12\begin{bmatrix}e^{t}&e^{t}\\e^{3t}&-e^{3t}\end{bmatrix}
$$

::: {.notes}

Sabit beslemeli tank problemini sabitlerin değişimiyle çözelim ve iki yolun aynı sonucu verdiğini görelim.

Temel matris, homojen çözümlerin sütun olarak dizilmesiyle kurulur. Determinantı daha önce hesaplanmıştı: $-2e^{-4t}$.

İki boyutlu bir matrisin tersi, köşegen elemanların yer değiştirmesi ve köşegen dışı elemanların işaret değiştirmesiyle bulunur; sonuç determinanta bölünür. Hesabı yapınca $X^{-1}=\dfrac12\begin{bmatrix}e^{t}&e^{t}\\e^{3t}&-e^{3t}\end{bmatrix}$ elde edilir.

Kontrol için $XX^{-1}$ çarpımına bakılabilir; birim matris çıkmalıdır.

:::

---

## Sonuç Aynı

$$
X^{-1}\mathbf{f}=\frac12\begin{bmatrix}3e^{t}\\3e^{3t}\end{bmatrix}
$$

$$
\int X^{-1}\mathbf{f}\,dt=\frac12\begin{bmatrix}3e^{t}\\e^{3t}\end{bmatrix}
$$

$$
\mathbf{x}_p=X\cdot\frac12\begin{bmatrix}3e^{t}\\e^{3t}\end{bmatrix}=\begin{bmatrix}2\\1\end{bmatrix}
$$

::: {.notes}

$\mathbf{f}=\begin{bmatrix}3\\0\end{bmatrix}$ ile çarpalım: birinci bileşen $\dfrac12\cdot3e^{t}$, ikinci bileşen $\dfrac12\cdot3e^{3t}$ olur.

İntegral alalım. Birinci bileşen $\dfrac32e^{t}$, ikinci bileşen $\dfrac32\cdot\dfrac{e^{3t}}{3}=\dfrac12e^{3t}$ verir. İntegrasyon sabitleri yazılmaz; onlar homojen çözümü tekrarlar.

Temel matrisle çarpalım. Birinci bileşen: $e^{-t}\cdot\dfrac32e^{t}+e^{-3t}\cdot\dfrac12e^{3t}=\dfrac32+\dfrac12=2$. İkinci bileşen: $e^{-t}\cdot\dfrac32e^{t}-e^{-3t}\cdot\dfrac12e^{3t}=\dfrac32-\dfrac12=1$.

Sonuç $\begin{bmatrix}2\\1\end{bmatrix}$ — sabit vektör yöntemiyle bulunanın aynısı ✓.

İki yolun karşılaştırması nettir. Sabit girdide doğrudan denge hesabı birkaç satır sürdü; sabitlerin değişimi bir ters matris ve iki integral gerektirdi. Genel yöntemin bedeli budur; karşılığında her girdi tipinde çalışır.

:::

---

## Yöntem Seçimi

| Girdi | Yöntem |
|---|---|
| Sabit | Denge denklemi |
| Üstel, polinom, trigonometrik | Vektör aday |
| Diğer | Sabitlerin değişimi |

::: {.notes}

Karar zinciri tek denklemdekiyle aynı mantığı izler. Girdi sabitse en kısa yol denge denklemidir. Aday kalıbına uyan bir aileden geliyorsa vektör aday kullanılır. Kalıp yazılamıyorsa sabitlerin değişimi devreye girer.

Katsayılar zamana bağlıysa — $A(t)$ sabit değilse — vektör aday yöntemi uygulanamaz; tek seçenek sabitlerin değişimidir. Ama o durumda homojen çözümü bulmak da genelde mümkün olmaz, çünkü özdeğer yöntemi sabit katsayı ister.

Laplace dönüşümü de bir seçenektir ve başlangıç koşulları verilmişse avantajlıdır. Her denklemin dönüşümü alınır, cebirsel sistem çözülür, ters dönüşüm uygulanır. Boyut büyüdükçe cebirsel sistemin çözümü zorlaşır.

:::

---

## Sık Yapılan Hatalar

1. Sabit girdide işareti ters almak
2. Vektör adayda çakışma kontrolünü atlamak
3. Aday katsayısını skaler yazmak
4. Sabitlerin değişiminde integrasyon sabiti eklemek
5. $\mathbf{x}_p$'yi ölçeklemek

::: {.notes}

Birinci hata denge denklemini kurarken çıkar. Denklem $A\mathbf{x}_p=-\mathbf{f}$'dir; eksi işareti $\mathbf{f}$'nin sağ tarafa geçmesinden gelir.

İkinci hata özdeğerle çakışmayı gözden kaçırmaktır. Girdideki üstelin katsayısı bir özdeğerse $(A-\lambda I)$ tersinir değildir. Kontrol, aday yazmadan önce yapılmalıdır.

Üçüncü hata boyut hatasıdır. Sistemde aday katsayısı bir vektördür; her bileşen ayrı bir bilinmeyendir.

Dördüncü hata zararsız görünse de genel çözümü tekrarlı yazmaya yol açar. İntegrasyon sabiti eklendiğinde $X\mathbf{c}$ terimi doğar; bu zaten $\mathbf{x}_h$'dir.

Beşinci hata özel çözümün önüne sabit koymaktır. $\mathbf{x}_p$ belirli bir fonksiyondur; iki katı alınırsa girdi de iki katına çıkar.

:::

---

## Karar Soruları

1. $\mathbf{f}=\begin{bmatrix}0\\5\end{bmatrix}$, $\det A\neq0$: hangi yöntem?
2. Özdeğerler $-1,-3$ ve $\mathbf{f}=e^{-t}\begin{bmatrix}1\\0\end{bmatrix}$: dikkat edilecek nokta?
3. $\mathbf{f}=\begin{bmatrix}\tan t\\0\end{bmatrix}$: hangi yöntem?

::: {.notes}

Birincisinde girdi sabittir ve $A$ tersinirdir. En kısa yol denge denklemidir: $A\mathbf{x}_p=-\begin{bmatrix}0\\5\end{bmatrix}$ çözülür ve iş biter.

İkincisinde çakışma vardır: $-1$ bir özdeğerdir. $e^{-t}\mathbf{a}$ adayı çalışmaz, çünkü $(A+I)$ tersinir değildir. Aday genişletilir: $e^{-t}(t\mathbf{a}+\mathbf{b})$ biçiminde yazılır ve iki vektör birlikte belirlenir. Katlı özdeğerlerdeki genelleştirilmiş özvektör yapısıyla aynı mekanizma çalışıyor.

Üçüncüsünde $\tan t$ için sonlu bir aday kalıbı yoktur; türevleri kapalı bir aile oluşturmaz. Tek seçenek sabitlerin değişimidir. Sonuçtaki integraller elemanter fonksiyonlarla ifade edilemeyebilir; o durumda çözüm integral biçiminde bırakılır ya da sayısal olarak hesaplanır.

:::

---

## Sonraki Adım: Çözüm Bulunamadığında

$$
y'=t^2+y^2
$$

Hiçbir yöntem kapalı bir çözüm vermiyor.

Çözüm eğrisi yine de izlenebilir mi?

::: {.notes}

Buraya kadar öğrenilen yöntemlerin ortak bir varsayımı vardı: denklem belirli bir sınıfa giriyor ve o sınıf için kapalı formda bir çözüm yazılabiliyor.

Örnekteki denklem hiçbir sınıfa girmiyor. Ayrılabilir değil, lineer değil, tam değil, Bernoulli değil. Sabit katsayılı olmadığı için karakteristik denklem de yok. Riccati tipi bu denklemin çözümü elemanter fonksiyonlarla yazılamaz.

Bu, istisnai bir durum değil kural. Uygulamada karşılaşılan denklemlerin çoğunun kapalı çözümü yoktur.

Ama çözüm vardır — varlık teoremi bunu garanti ediyor. Yazılamaması, izlenemeyeceği anlamına gelmiyor. Çözüm eğrisi, eğim alanındaki yönleri küçük adımlarla takip ederek yaklaşık olarak izlenebilir; bu fikir Euler yöntemi gibi sayısal çözüm tekniklerinin temelidir.

:::

---

## Kaynak Notu

Ana kaynak: Nagle, Saff ve Snider.

::: {.notes}

Kaynak: Nagle, Saff ve Snider, *Fundamentals of Differential Equations*. Belirsiz katsayıların vektör biçimi ve temel matrisle kurulan sabitlerin değişimi formülü bu kaynaktaki klasik yaklaşımla uyumludur. Sabit girdi durumu burada bir denge kayması olarak okunur; iki yöntem aynı problem üzerinde karşılaştırılarak hesap maliyetleri görünür kılınmıştır.

:::

---
