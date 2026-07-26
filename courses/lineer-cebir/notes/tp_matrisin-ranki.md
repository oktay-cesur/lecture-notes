---
title: "Matrisin Rankı"
subtitle: "MATE 213 — İlk Öğretim Bloğu"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-24
execute:
  echo: false
---

## Sezgi: Bilinmeyen Kadar Denklem?

> İki bilinmeyen için iki, üç bilinmeyen için üç denklem gerekir.

$$
x+y=3
\quad\Rightarrow\quad
\text{sonsuz }(x,y)
$$

$$
\begin{aligned}
x+y&=3,\\
x-y&=1
\end{aligned}
\quad\Rightarrow\quad
(x,y)=(2,1)
$$

::: {.notes}
Lineer denklem sistemleriyle ilgili ilk sezgilerden biri, bilinmeyen sayısı kadar denklem gerektiğidir. Bu düşünce birçok temel örnekte işe yarar. İki bilinmeyenli tek bir denklem, örneğin $x+y=3$, tek bir çözüm belirlemeye yetmez; bu denklemi sağlayan sonsuz sayıda çift vardır. İkinci bir denklem eklendiğinde iki bilinmeyen tek tek belirlenebilir.

Buradan "bilinmeyen sayısı kadar denklem varsa yeterli bilgi vardır" düşüncesine geçmek kolaydır. Ancak bu ifade her zaman doğru değildir. Bir sistemde kaç denklem bulunduğu ile bu denklemlerin kaçının gerçekten yeni bilgi taşıdığı ayrı şeylerdir. Bu notta önce bu ayrımı örnekler üzerinde göreceğiz, ardından ayrımı sayıyla ifade eden rank kavramını tanımlayıp denklem sistemlerinin çözüm durumlarını rank diliyle yeniden yazacağız.
:::

---

## Denklem Var Ama Yeni Bilgi Yok

$$
\begin{aligned}
x+y&=3,\\
2x+2y&=6
\end{aligned}
\qquad
E_2=2E_1
$$

$$
\left[\begin{array}{cc|c}1&1&3\\2&2&6\end{array}\right]
\xrightarrow{R_2\leftarrow R_2-2R_1}
\left[\begin{array}{cc|c}1&1&3\\0&0&0\end{array}\right]
$$

::: {.notes}
İki bilinmeyen ve iki denklem vardır; ilk bakışta yeterli bilgi bulunduğu düşünülebilir. Ancak ikinci denklem birinci denklemin iki katıdır: $2(x+y=3)$ tam olarak $2x+2y=6$ verir. Dolayısıyla ikinci denklem yeni bir koşul getirmez; iki denklem aynı ilişkiyi ifade eder.

$R_2\leftarrow R_2-2R_1$ satır işlemi uygulandığında ikinci satır tamamen sıfırlanır ve $0=0$ eşitliğine dönüşür. Başlangıçta iki denklem sayılır, satır indirgeme sonunda yalnız bir etkin denklem kalır. Sistemin taşıdığı bağımsız bilgi miktarı ikiden bire düşmemiştir; zaten baştan birdi, satır indirgeme bunu görünür kıldı.
:::

---

## Bağımlılık Yalnız Kat Olmak Değildir

$$
\begin{aligned}
x+y+z&=4,\\
x-y+z&=2,\\
2x+2z&=6
\end{aligned}
\qquad
E_3=E_1+E_2
$$

Hiçbiri diğerinin katı değil.

::: {.notes}
Bir denklemin yeni bilgi taşımaması için mutlaka başka bir denklemin doğrudan katı olması gerekmez. Bu sistemde ilk iki denklemi toplarsak $(x+y+z)+(x-y+z)=4+2$, yani $2x+2z=6$ elde ederiz; bu tam olarak üçüncü denklemdir. Yani $E_3=E_1+E_2$'dir.

Üçüncü denklem diğer ikisinden üretilebildiği için sisteme yeni bir kısıt eklemez. Bir denklem, başka bir denklemin skaler katı olduğu için değil, diğer denklemlerin bir lineer kombinasyonu olarak elde edilebildiği için de yeni bilgi taşımayabilir. Bu ilişkinin genel yapısını lineer bağımsızlık konusunda ele alacağız; burada gördüğümüz, denklem sayısına bakarak bağımsız bilgi miktarının okunamayacağıdır.
:::

---

## Fazladan Denklem Üç Rol Oynayabilir

İki bilinmeyene yüz denklem yazılabilir.

Fazladan bir denklem:

1. yeni bir kısıt getirebilir,
2. mevcutlardan üretilebilir,
3. mevcutlarla çelişebilir.

::: {.notes}
Bir sistemde denklem sayısının bilinmeyen sayısına eşit olması gerekmez; iki bilinmeyen için üç, beş ya da yüz denklem yazılabilir. Yüz denklem bulunması yüz bağımsız bilgi bulunduğu anlamına gelmez, çünkü fazladan denklemler üç farklı rol oynayabilir.

Birincisi yeni bir kısıt getirir: $x+y=3$, $2x+2y=6$, $x-y=1$ sisteminde ikinci denklem gereksizdir ama üçüncüsü yeni bir koşuldur; üç denklemde etkin olarak iki kısıt vardır. İkincisi mevcut denklemlerden üretilir: $x+y=3$, $x-y=1$, $2x=4$ sisteminde üçüncü denklem ilk ikisinin toplamıdır. Üçüncüsü çelişir: aynı sistemde üçüncü denklem $2x=5$ olsaydı, ilk ikisinin verdiği $2x=4$ ile aynı anda sağlanamaz ve çözüm kümesi boşalırdı.

Bu üç rol arasında ayrım yapmak için denklemleri saymak yetmez; her denklemin diğerleriyle nasıl ilişkilendiğini görmek gerekir. Satır indirgeme tam olarak bunu yapan araçtır.
:::

---

## Satır İndirgeme Neyi Ortaya Çıkarır?

$$
A=\begin{bmatrix}1&2&3\\2&4&6\\1&1&0\end{bmatrix}
\longrightarrow
\begin{bmatrix}1&2&3\\0&-1&-3\\0&0&0\end{bmatrix}
$$

Üç satır → iki pivot.

::: {.notes}
Elementer satır işlemleri bir sistemin çözüm kümesini değiştirmez; Gauss eliminasyonu bu işlemleri sistematik biçimde kullanarak sistemdeki ilişkileri görünür kılar. Örnek matriste ikinci satır birinci satırın iki katıdır: $R_2\leftarrow R_2-2R_1$ ikinci satırı tamamen sıfırlar, $R_3\leftarrow R_3-R_1$ ise $[\,0\ -1\ -3\,]$ satırını verir. Satırları sıralayınca basamak biçiminde iki pivot kalır.

Satır indirgeme burada yalnız hesabı kolaylaştırmadı; hangi satırların yeni bilgi taşıdığını da görünür hâle getirdi. Başlangıçta üç satır vardı, bunların yalnız ikisi birbirinden bağımsız bilgi taşıyor. Bu sayıyı — basamaklı biçimde kalan pivot sayısını — adlandıracağız.
:::

---

## Rank Tanımı

$$
\boxed{\operatorname{rank}(A)=\text{satır basamak biçimindeki pivot sayısı}}
$$

$$
\begin{bmatrix}1&2&3\\2&4&6\\1&1&0\end{bmatrix}
\longrightarrow
\begin{bmatrix}1&2&3\\0&-1&-3\\0&0&0\end{bmatrix}
\quad\Rightarrow\quad
\operatorname{rank}(A)=2
$$

::: {.notes}
Bir matrisin rankı, satır basamak biçimindeki pivot sayısıdır ve $\operatorname{rank}(A)$ ile gösterilir. Örnek matris satır indirgeme sonunda iki pivotlu bir biçime geldiği için rankı ikidir.

Rank başlangıç matrisine bakılarak okunamaz. Sıfır olmayan eleman sayısı, sıfır olmayan satır sayısı ya da satır sayısı rank değildir: örnekteki matrisin üç satırının da sıfırdan farklı elemanları vardır, rankı yine ikidir. Rankı belirleyen tek şey satır indirgeme sonunda kalan pivot sayısıdır.
:::

---

## Satır İşlemleri Rankı Değiştirmez

$$
A\xrightarrow{\text{elementer satır işlemleri}}B
\quad\Longrightarrow\quad
\boxed{\operatorname{rank}(A)=\operatorname{rank}(B)}
$$

::: {.notes}
Elementer satır işlemleri bir matrisi farklı bir görünüme dönüştürebilir, ancak rankını değiştirmez. Bu nedenle bir matrisin rankını bulmak için onu uygun satır işlemleriyle satır basamak biçimine getirip pivotları saymak yeterlidir.

Bu, pratikte işi kolaylaştıran bir serbestlik verir: hangi satırdan başlanacağı, hangi sırayla eliminasyon yapılacağı seçilebilir. Farklı yollar farklı REF biçimleri üretir, sayılar değişir; pivot sayısı değişmez. Rank bu yüzden matrisin belirli bir görünümüne değil, satırları arasındaki bağımlılık yapısına ait bir niceliktir.
:::

---

## Satır Rankı = Sütun Rankı

$$
\boxed{\text{satır rankı}=\text{sütun rankı}=\operatorname{rank}(A)}
$$

- Satır rankı: bağımsız satırların en büyük sayısı
- Sütun rankı: bağımsız sütunların en büyük sayısı

::: {.notes}
Rank satır indirgeme yoluyla pivot sayısı olarak hesaplanır; ama aynı yapı sütunlar açısından da okunabilir. Satır rankı lineer bağımsız satırların, sütun rankı lineer bağımsız sütunların mümkün olan en büyük sayısıdır. Lineer cebirin temel sonuçlarından biri, bu iki sayının her zaman eşit olduğudur.

Bu eşitliğin ispatını burada yapmayacağız; lineer bağımsızlık kavramını kurduktan sonra geri döneceğiz. Şimdilik şunu kaydedin: bir matriste bağımsız satır sayısını ölçseniz de bağımsız sütun sayısını ölçseniz de aynı sayıya varırsınız. Denklem sistemlerinde satırlar bağımsız kısıtları, sütunlar bilinmeyenlerin katsayı örüntülerini temsil eder; eşitlik bu iki nesnenin aynı rolü oynadığını değil, aynı bağımsızlık sayısını paylaştığını söyler.
:::

---

## Rank Neyi Ölçer?

$$
A=\begin{bmatrix}1&2\\2&4\end{bmatrix}
\to
\begin{bmatrix}1&2\\0&0\end{bmatrix}
\Rightarrow\operatorname{rank}(A)=1
$$

$$
B=\begin{bmatrix}1&2\\0&3\end{bmatrix}
\Rightarrow\operatorname{rank}(B)=2
$$

> Rank, bağımsız etkin kısıt sayısını ölçer.

::: {.notes}
Rankın denklem sistemleri açısından sezgisel anlamı şudur: rank, sistemde gerçekten birbirinden bağımsız olarak etkin olan kısıtların sayısını ölçer. Matris $A$'da ikinci satır birincinin iki katıdır; satır indirgeme bir sıfır satır bırakır ve rank birdir. Matrisin iki satırı vardır, ama yalnız bir bağımsız etkin ilişki taşır.

Buna karşılık $B$ matrisinde iki pivot bulunur ve rank ikidir. İki matris de $2\times2$ boyutundadır; rankları farklıdır. Boyut matrisin kaç satır ve sütuna sahip olduğunu, rank ise bunların ne kadarının bağımsız bilgi taşıdığını söyler. Bir matrisin boyutunu görmek için matrise bakmak yeterlidir; rankını görmek için satır indirgeme yapmak gerekir.
:::

---

## Rankın Alabileceği Değerler

$$
\boxed{0\leq\operatorname{rank}(A)\leq\min(m,n)},\qquad A\in\mathbb{R}^{m\times n}
$$

- Pivot: tek satırda, tek sütunda
- $\operatorname{rank}(0)=0$
- $A\in\mathbb{R}^{5\times2}\Rightarrow\operatorname{rank}(A)\leq2$

::: {.notes}
Bir pivot aynı anda yalnız bir satırda ve yalnız bir sütunda bulunabilir. Dolayısıyla pivot sayısı ne satır sayısından ne de sütun sayısından büyük olabilir; rank en fazla $\min(m,n)$ kadardır. Rank negatif olamayacağı için genel sınır $0\leq\operatorname{rank}(A)\leq\min(m,n)$ biçimindedir. Sıfır matrisinde hiçbir pivot bulunmadığı için rankı sıfırdır; bu alt sınırdır.

Üst sınırın pratik bir sonucu vardır. $5\times2$ bir matriste beş satır bulunmasına rağmen rank en fazla ikidir. İki bilinmeyenli bir sisteme kaç denklem eklerseniz ekleyin, bağımsız etkin kısıt sayısı ikiyi geçemez; fazladan yazılan her denklem ya mevcutlardan üretilir ya da sistemi tutarsız yapar. Bu, üç rol arasında hangisinin kaldığını da daraltır.
:::

---

## Tam Rank

$$
\boxed{\operatorname{rank}(A)=\min(m,n)\Longrightarrow A\ \text{tam ranklı}}
$$

Kare matriste:

$$
A\in\mathbb{R}^{n\times n},\quad
\operatorname{rank}(A)=n
\Rightarrow
\text{her satırda ve her sütunda pivot}
$$

::: {.notes}
Bir matris mümkün olan en büyük ranka, yani $\min(m,n)$ değerine sahipse tam ranklı olarak adlandırılır. Örneğin $3\times5$ bir matris için en büyük rank $3$'tür; rankı $3$ ise tam ranklıdır. $5\times3$ bir matris için de en büyük rank yine $3$'tür — tam rank, kare olmayan matrislerde satır ya da sütunlardan hangisi azsa onunla sınırlanır.

Kare bir $n\times n$ matriste tam rank koşulu $\operatorname{rank}(A)=n$ biçimindedir. Satır ve sütun sayıları eşit olduğu için bu durumda her satırda ve her sütunda bir pivot bulunur. Bu pivot yapısına notun sonunda geri döneceğiz; tersinirlik kavramının çıkış noktası burasıdır.
:::

---

## Elementer Sütun İşlemleri

$$
\boxed{C_i\leftrightarrow C_j}
\qquad
\boxed{C_i\leftarrow\lambda C_i,\ \lambda\neq0}
\qquad
\boxed{C_i\leftarrow C_i+\lambda C_j}
$$

Üçü de geri alınabilir → rankı korur:

$$
A\xrightarrow{\text{sütun işlemleri}}B
\Rightarrow
\operatorname{rank}(A)=\operatorname{rank}(B)
$$

::: {.notes}
Bir matrisin satırları üzerinde olduğu gibi sütunları üzerinde de geri alınabilir temel işlemler yapılabilir. Üç elementer sütun işlemi, satır işlemlerinin sütun karşılıklarıdır: iki sütunu yer değiştirmek, bir sütunu sıfırdan farklı bir skalerle çarpmak ve bir sütunun katını başka bir sütuna eklemek. Skalerin sıfırdan farklı olma koşulu buradan gelir; sütun ancak $1/\lambda$ ile çarpılarak eski hâline döndürülebilir. Sıfırla çarpmak geri alınamaz, bu yüzden elementer sütun işlemi sayılmaz.

Geri alınabilir oldukları için sütun işlemleri de rankı korur. Bir matrisin rank yapısı hem satır hem sütun işlemleriyle incelenebilir. Buradan iki işlem türünün denklem çözümünde aynı rolü oynadığı sonucu çıkmaz: satır işlemi denklemleri dönüştürür, sütun işlemi bilinmeyenlerin temsilini dönüştürür. Aradaki farkı somut bir sistem üzerinde görelim.
:::

---

## Sütun İşlemi ≠ Satır İşlemi Rolü

$$
\left[\begin{array}{cc|c}1&2&5\\3&4&11\end{array}\right]
\xrightarrow{C_1\leftrightarrow C_2}
\left[\begin{array}{cc|c}2&1&5\\4&3&11\end{array}\right]
$$

$$
(x,y)=(1,2)
\quad\longrightarrow\quad
(x,y)=(2,1)
$$

::: {.notes}
Elementer satır işlemleri denklemler üzerinde işlem yapar ve genişletilmiş matriste çözüm kümesini korur. Elementer sütun işlemleri ise matrisin sütunları arasında işlem yapar; katsayı matrisinin sütunları bilinmeyenlere karşılık geldiği için bu işlemler bilinmeyenlerin temsilini değiştirir.

Soldaki sistemin çözümü $(x,y)=(1,2)$'dir. İki katsayı sütununun yerini değiştirip değişken adlarını aynı bırakırsak yeni matris $2x+y=5$, $4x+3y=11$ sistemini temsil eder; bunun çözümü $(x,y)=(2,1)$ olur. Her iki matrisin rankı ikidir, yani rank korunmuştur; buna rağmen aynı $x$ ve $y$ için çözüm kümesi korunmamıştır.

Fark şurada: rankın korunması ile çözüm kümesinin korunması ayrı sonuçlardır. Sütun işlemi yapılacaksa hangi sütunun hangi bilinmeyene karşılık geldiği ayrıca izlenmelidir; sütunlarla birlikte değişken adları da yer değiştirilirse temsil takip edilebilir.
:::

---

## Sağ Taraf Sütunu Neden Ayrıdır?

$$
\left[\begin{array}{cc|c}1&2&5\\3&4&11\end{array}\right]
\xrightarrow{C_3\leftarrow C_3+C_1}
\left[\begin{array}{cc|c}1&2&6\\3&4&14\end{array}\right]
$$

$$
(1,2)\quad\longrightarrow\quad(2,2)
$$

Bu sütun katsayı değil, $b$ taşır.

::: {.notes}
Genişletilmiş matristeki son sütun, bir bilinmeyenin katsayılarını değil sağ taraf vektörü $b$'yi temsil eder. Sağ taraf sütununa birinci katsayı sütununu eklersek matris $x+2y=6$, $3x+4y=14$ sistemini temsil etmeye başlar ve çözümü $(2,2)$ olur.

Bu, sütun değişiminden daha ağır bir müdahaledir. Sütun değişiminde bilinmeyenlerin sırası değişiyordu, sorulan soru aynı kalıyordu; burada $b$ vektörü değişiyor, yani çözülmeye çalışılan problem başkalaşıyor. Dikey çizginin solundaki sütunlar bilinmeyenlerle, sağındaki sütun sabitlerle eşleşir ve bu iki bölge farklı kurallara tabidir.
:::

---

## Rank ile Tutarlılık

$$
\boxed{\text{sistem tutarlı}\iff
\operatorname{rank}(A)=\operatorname{rank}([A\mid b])}
$$

Çelişki satırı → sağ tarafta yeni pivot.

::: {.notes}
Bir lineer denklem sisteminde iki matris vardır: katsayı matrisi $A$ ve genişletilmiş matris $[A\mid b]$. Bu ikisinin ranklarını karşılaştırmak sistemin tutarlılığı hakkında bilgi verir. Satır indirgeme sonunda genişletilmiş matrisin bir satırı $[\,0\ 0\ 0\mid 5\,]$ biçimine gelirse, katsayı kısmında yeni bir pivot yoktur ama sağ taraftaki $5$ genişletilmiş matriste yeni bir pivot oluşturur.

Bu durumda $\operatorname{rank}(A)<\operatorname{rank}([A\mid b])$ olur ve satırın temsil ettiği $0=5$ denklemi nedeniyle sistem tutarsızdır. Ranklar eşitse sağ taraf yeni bir çelişki üretmez ve sistem tutarlıdır. Çözüm durumları notunda çelişki satırıyla kurduğumuz koşul, burada iki rankın karşılaştırılmasına dönüşmüş oluyor. Bu koşul çözümün tek mi sonsuz mu olduğunu tek başına söylemez; bunun için ortak rankın bilinmeyen sayısıyla da karşılaştırılması gerekir.
:::

---

## Rank ile Üç Çözüm Durumu

$A\in\mathbb{R}^{m\times n}$, $n$ bilinmeyen:

| Koşul | Çözüm |
|---|---|
| $\operatorname{rank}(A)<\operatorname{rank}([A\mid b])$ | yok |
| $\operatorname{rank}(A)=\operatorname{rank}([A\mid b])=n$ | tek |
| $\operatorname{rank}(A)=\operatorname{rank}([A\mid b])<n$ | sonsuz |

::: {.notes}
İlk satır tutarsızlık koşuludur: sağ taraf sütunu ek bir pivot oluşturmuştur. İkinci ve üçüncü satırlarda ranklar eşit olduğu için sistem tutarlıdır. Ortak rank bilinmeyen sayısı $n$'ye eşitse her bilinmeyen sütununda pivot vardır, serbest değişken yoktur ve çözüm tektir. Ortak rank $n$'den küçükse en az bir bilinmeyen sütunu pivotsuzdur; her serbest değişken gerçek sayılar içinden seçilebildiği için çözüm sayısı sonsuzdur.

Bu sınıflandırma yeni bir çözüm yöntemi değildir. Çelişki, pivot ve serbest değişkenlerle kurduğumuz üç dallı karar yapısını tek bir sayısal kavram altında ifade eder. Karar sırası da aynı kalır: önce rank eşitliğiyle tutarlılık, ardından ortak rank ile bilinmeyen sayısının karşılaştırılması.
:::

---

## Sık Yapılan Hatalar

1. Rankı satır sayısı sanmak.
2. Rankı başlangıçtaki sıfır olmayan satır sayısı sanmak.
3. Denklem = bilinmeyen sayısı ise rank da o kadardır sanmak.
4. Fazla denklemin her zaman yeni bilgi getirdiğini sanmak.
5. $\operatorname{rank}(A)$ ile $\operatorname{rank}([A\mid b])$'yi karıştırmak.

::: {.notes}
Birinci hata rankı satır sayısıyla eşitler; oysa satırların bir kısmı diğerlerinden üretilebildiği için rank daha küçük olabilir. İkinci hata rankı başlangıçtaki sıfır olmayan satır sayısıyla hesaplar; rank ancak satır basamak biçimine getirildikten sonra pivot sayısıyla belirlenir. Üçüncü hata denklem ve bilinmeyen sayısının eşitliğinden rankın da o kadar olduğu sonucunu çıkarır; $\left[\begin{smallmatrix}1&2\\2&4\end{smallmatrix}\right]$ iki satırlı ve iki sütunlu olsa da rankı birdir.

Dördüncü hata her ek denklemin yeni bilgi getirdiğini varsayar; oysa ek bir denklem yeni kısıt getirebileceği gibi üretilebilir ya da çelişkili de olabilir. Beşinci hata çözüm durumunu incelerken iki rankı karıştırmaktır; sağ taraf sütununun yeni bir pivot oluşturup oluşturmadığı tutarlılığı belirlediği için hangi matrisin rankından söz edildiği her defasında yazılmalıdır.
:::

---

## Karşılaştırmalı Uygulama

Hesap yapmadan sınıflandırın ($n=4$):

1. $\operatorname{rank}(A)=3,\ \operatorname{rank}([A\mid b])=4$
2. $\operatorname{rank}(A)=\operatorname{rank}([A\mid b])=4$
3. $\operatorname{rank}(A)=\operatorname{rank}([A\mid b])=2$

::: {.notes}
Birinci sistem tutarsızdır; genişletilmiş matrisin ek pivotu bir çelişki satırı gösterir. İkinci sistem tutarlıdır ve dört bilinmeyen sütununun tamamında pivot bulunduğu için çözüm tektir. Üçüncü sistem tutarlıdır fakat ortak rank ikidir; dört bilinmeyenden ikisi serbest değişkendir ve çözüm sayısı sonsuzdur.

Üç soruda da katsayıları görmedik, tek bir satır işlemi yapmadık. Çözüm durumunu belirlemek için iki rank ve bilinmeyen sayısı yeterli oldu. Sınıflandırma sırası her zaman aynıdır: önce iki rankın eşitliği (tutarlılık), sonra ortak rank ile $n$ karşılaştırması (tek mi sonsuz mu).
:::

---

## Sonraki Adım: Tam Ranktan Tersinirliğe

$$
A\in\mathbb{R}^{n\times n},\qquad
\operatorname{rank}(A)=n
$$

$$
Ax=b\ \text{her } b\in\mathbb{R}^n\ \text{için tek çözüm}
$$

> Bilgi kaybı yok → işlem geri alınabilir → **ters matris**.

::: {.notes}
Nota, bilinmeyen sayısı kadar denklem varsa yeterli bilgi bulunduğu sezgisiyle başlamıştık. Rank o sezginin hangi koşulda çalıştığını söylüyor. Üç bilinmeyenli üç denklemli bir sistemde $\operatorname{rank}(A)=3$ ise sistem uygun sağ taraf için tek çözüme sahiptir; aynı sistemde rank iki ise üç denklem yalnız iki bağımsız kısıt taşır. Yüz denklemli üç bilinmeyenli bir sistemde ise rank hiçbir zaman üçü geçemez. Sorulacak doğru soru kaç denklem olduğu değil, bu denklemlerin kaçının yeni bilgi taşıdığıdır.

Kare ve tam rank bir matriste her satırda ve her sütunda pivot bulunur. Böyle bir matris bilgi kaybetmez: hiçbir bilinmeyen serbest kalmaz ve hiçbir hedef vektör katsayı sütunlarının erişimi dışında kalmaz. Bu nedenle $Ax=b$ sistemi her sağ taraf $b$ için tek bir çözüm taşır.

Her çıktıdan onu üreten tek girdi bulunabildiği için $x\mapsto Ax$ işlemi tersine çevrilebilir. Geri alma işlemini tek bir matrisle temsil eden nesne ters matristir. Bir sonraki notta ters matrisin tanımını yapacağız, ne zaman var olduğunu göreceğiz ve satır indirgemeyle nasıl hesaplandığını kuracağız; kare bir matrisin tersinir olması ile tam ranklı olmasının eşdeğer olduğunu orada göstereceğiz.
:::
