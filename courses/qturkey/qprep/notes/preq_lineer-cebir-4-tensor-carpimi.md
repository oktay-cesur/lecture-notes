---
title: "Temel Lineer Cebir: Tensör Çarpımı"
subtitle: Lineer Cebir — 4
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-01-01
execute:
  echo: false
---

## Geçen Konudan Köprü

- Vektörler çok bileşenli nicelikleri temsil eder
- Matrisler vektörleri dönüştürür
- Şimdi iki vektör uzayını birlikte temsil eden bir işlem göreceğiz

Ana fikir:

$$
\text{birinci yapı} \otimes \text{ikinci yapı}
\longrightarrow
\text{birleşik yapı}
$$

Bu işleme **tensör çarpımı** denir.

::: {.notes}
Önceki bölümlerde vektörleri çok bileşenli nesneler olarak tanımladık ve matrislerin bir vektör uzayı içindeki dönüşümleri temsil ettiğini gördük. Ancak şimdiye kadar hep tek bir sistemle çalıştık. İki ayrı sistemi (iki ayrı vektör uzayını) birlikte, tek bir yapı içinde temsil etmek istediğimizde toplama veya matris çarpımı yeterli olmaz — bunun için yeni bir işlem gerekir.

Bu işleme **tensör çarpımı** denir ve $\otimes$ simgesiyle gösterilir. İlk bakışta soyut görünebilir; bu yüzden önce boyutların neden çarpıldığı fikrini somut bir sayma problemiyle kuracağız, ardından vektörler üzerinde mekanik olarak nasıl hesaplandığını göreceğiz.
:::

---

## Neden Yeni Bir Çarpım?

Birinci sistemin iki olası etiketi olsun:

$$
A_1,\ A_2
$$

İkinci sistemin üç olası etiketi olsun:

$$
B_1,\ B_2,\ B_3
$$

Birlikte kaç çift oluşur?

$$
2\times3=6
$$

Çiftler:

$$
(A_1,B_1),(A_1,B_2),(A_1,B_3),
(A_2,B_1),(A_2,B_2),(A_2,B_3)
$$

::: {.notes}
İki sistemi birlikte etiketlemek istediğimizde, olası tüm kombinasyonları saymamız gerekir. Birinci sistemin $2$ olası durumu ($A_1$, $A_2$), ikinci sistemin $3$ olası durumu ($B_1$, $B_2$, $B_3$) varsa, birlikte oluşabilecek çift sayısı $2\times3=6$'dır: $(A_1,B_1)$'den $(A_2,B_3)$'e kadar altı farklı kombinasyon.

Bu, kümeler teorisindeki Kartezyen çarpım sezgisiyle aynıdır — iki kümenin her elemanı, diğer kümenin her elemanıyla eşleştirilir. Tensör çarpımının vektör uzaylarında boyutları çarpmasının (yani $\mathbb{R}^m\otimes\mathbb{R}^n\to\mathbb{R}^{mn}$ olmasının) arkasındaki mantık tam olarak budur: birleşik sistemin olası durumları, iki alt sistemin durumlarının tüm kombinasyonlarıdır.
:::

---

## Örnek: Sipariş Kombinasyonları

Bir öğrencinin iki ayrı seçimi olsun.

Birinci seçim, içecek türü:

$$
i=
\begin{bmatrix}
\text{çay}\\
\text{kahve}
\end{bmatrix}
$$

İkinci seçim, boy seçeneği:

$$
b=
\begin{bmatrix}
\text{küçük}\\
\text{orta}\\
\text{büyük}
\end{bmatrix}
$$

---

## Sipariş Kombinasyonları: Tüm Olasılıklar

Bu iki liste birlikte düşünülürse bütün olası siparişler şunlardır:

| İçecek | Boy |
|---|---|
| çay | küçük |
| çay | orta |
| çay | büyük |
| kahve | küçük |
| kahve | orta |
| kahve | büyük |

$$
2\times3=6
$$

---

## Sipariş Kombinasyonları: Tensör Çarpımı Diliyle

$$
\begin{bmatrix}
\text{çay}\\
\text{kahve}
\end{bmatrix}
\otimes
\begin{bmatrix}
\text{küçük}\\
\text{orta}\\
\text{büyük}
\end{bmatrix}
=
\begin{bmatrix}
\text{çay-küçük}\\
\text{çay-orta}\\
\text{çay-büyük}\\
\text{kahve-küçük}\\
\text{kahve-orta}\\
\text{kahve-büyük}
\end{bmatrix}
$$

**Tensör çarpımı, iki ayrı sistemin durumlarını çarparak birleşik sistemin bütün olası durumlarını üretir.**

::: {.notes}
Bu örnek, az önceki $A_1,A_2$ ile $B_1,B_2,B_3$ örneğinin gündelik bir karşılığıdır ve tensör çarpımının en doğal yorumunu verir: içecek seçimi ($2$ seçenek) ile boy seçimi ($3$ seçenek) birbirinden bağımsızdır, ama birlikte düşünüldüğünde $2\times3=6$ farklı sipariş ortaya çıkar. Tablo, bu altı kombinasyonu tek tek listeler; her içecek, her boyla eşleştirilir.

$i\otimes b$ ifadesi bu tabloyu tek bir sıralı liste hâline getirir: sonuç, "çay-küçük"ten "kahve-büyük"e kadar altı etiketten oluşan bir vektördür. Sıra burada da önemlidir — $i\otimes b$'de önce içecek sabitlenip boy değiştirilir (çay-küçük, çay-orta, çay-büyük, sonra kahve ile devam), bu da tensör çarpımının vektörlerdeki mekanik kuralıyla ($u$'nun her bileşeni $v$'nin tamamını "kopyalar") birebir örtüşür. Ders cümlesi olarak özetlersek: tensör çarpımı, iki ayrı sistemin durumlarını çarparak birleşik sistemin bütün olası durumlarını üretir.
:::

---

## Boyutlar Çarpılır

Eğer:

$$
u\in\mathbb{R}^m,
\qquad
v\in\mathbb{R}^n
$$

O zaman:

$$
u\otimes v\in\mathbb{R}^{mn}
$$

Örnek:

$$
\mathbb{R}^2\otimes\mathbb{R}^3
\longrightarrow
\mathbb{R}^6
$$

::: {.notes}
$\otimes$ simgesi tensör çarpımını gösterir ve alışık olduğumuz sayı çarpımından ($\times$) farklı bir işlemdir; girdi olarak iki vektör alır, çıktı olarak da bir vektör verir, ama çıktının boyutu girdilerin boyutlarının toplamı değil çarpımıdır. $u\in\mathbb{R}^m$ ve $v\in\mathbb{R}^n$ ise $u\otimes v\in\mathbb{R}^{mn}$ olur.

Az önce gördüğümüz sayma örneğiyle bu doğrudan örtüşür: $2$ etiketli bir sistem ile $3$ etiketli bir sistem birleştiğinde $6=2\times3$ olası çift ortaya çıkıyordu. $\mathbb{R}^2\otimes\mathbb{R}^3\to\mathbb{R}^6$ ifadesi de aynı ilişkiyi vektör uzayları diliyle ifade eder: birleşik uzayın boyutu, alt uzayların boyutlarının çarpımıdır.
:::

---

## Vektörlerde Tensör Çarpımı

İki vektör:

$$
u=
\begin{bmatrix}
a\\
b
\end{bmatrix},
\qquad
v=
\begin{bmatrix}
c\\
d
\end{bmatrix}
$$

Tensör çarpımı:

$$
u\otimes v
=
\begin{bmatrix}
a\\
b
\end{bmatrix}
\otimes
\begin{bmatrix}
c\\
d
\end{bmatrix}
=
\begin{bmatrix}
ac\\
ad\\
bc\\
bd
\end{bmatrix}
$$

::: {.notes}
İki bileşenli vektörlerin tensör çarpımı, sol vektörün her bileşeninin sağ vektörün tamamıyla çarpılıp alt alta dizilmesiyle hesaplanır: $u=\begin{bmatrix}a\\b\end{bmatrix}$ ve $v=\begin{bmatrix}c\\d\end{bmatrix}$ için sonuç $\begin{bmatrix}ac\\ad\\bc\\bd\end{bmatrix}$ olur — dört bileşenli bir vektör.

Bu düzende sıra önemlidir: ilk iki bileşen ($ac$, $ad$) $u$'nun birinci bileşeni $a$'nın $v$'nin bileşenleriyle çarpımından, son iki bileşen ($bc$, $bd$) ise $u$'nun ikinci bileşeni $b$'nin $v$'yle çarpımından gelir. Bu sabit sıra, ileride $u\otimes v$ ile $v\otimes u$'nun neden farklı sonuçlar verdiğini anlamanın anahtarıdır.
:::

---

## Tam Açılım

Soldaki her bileşen, sağdaki vektörün tamamını çarpar.

$$
\begin{bmatrix}
a\\
b
\end{bmatrix}
\otimes
\begin{bmatrix}
c\\
d
\end{bmatrix}
=
\begin{bmatrix}
a
\begin{bmatrix}
c\\d
\end{bmatrix}\\[6pt]
b
\begin{bmatrix}
c\\d
\end{bmatrix}
\end{bmatrix}
$$

$$
=
\begin{bmatrix}
ac\\
ad\\
bc\\
bd
\end{bmatrix}
$$

::: {.notes}
Tensör çarpımının nasıl hesaplandığını daha görsel bir adımla açabiliriz: soldaki vektörün her bileşeni, sağdaki vektörün tam bir kopyasını ölçekler. $a\begin{bmatrix}c\\d\end{bmatrix}$ ve $b\begin{bmatrix}c\\d\end{bmatrix}$ ayrı ayrı hesaplanıp alt alta yerleştirilir; bu da $\begin{bmatrix}ac\\ad\\bc\\bd\end{bmatrix}$ sonucunu verir.

Bu ara adım, tensör çarpımını mekanik olarak yapmayı kolaylaştırır: önce sağdaki vektörü olduğu gibi kopyala, sonra her kopyayı soldaki vektörün ilgili bileşeniyle ölçekle, sonunda hepsini alt alta diz.
:::

---

## Sayısal Örnek

$$
u=
\begin{bmatrix}
2\\
3
\end{bmatrix},
\qquad
v=
\begin{bmatrix}
4\\
-1
\end{bmatrix}
$$

$$
u\otimes v
=
\begin{bmatrix}
2\cdot4\\
2\cdot(-1)\\
3\cdot4\\
3\cdot(-1)
\end{bmatrix}
=
\begin{bmatrix}
8\\
-2\\
12\\
-3
\end{bmatrix}
$$

::: {.notes}
$u=\begin{bmatrix}2\\3\end{bmatrix}$ ve $v=\begin{bmatrix}4\\-1\end{bmatrix}$ için tensör çarpımı, $u$'nun birinci bileşeni $2$'nin $v$'yi ölçeklemesiyle başlar: $2\cdot4=8$, $2\cdot(-1)=-2$. Ardından $u$'nun ikinci bileşeni $3$'ün $v$'yi ölçeklemesiyle devam eder: $3\cdot4=12$, $3\cdot(-1)=-3$. Bu dört sayı alt alta dizilerek $u\otimes v=\begin{bmatrix}8\\-2\\12\\-3\end{bmatrix}$ elde edilir.

Bu sayısal örnek, önceki iki bölümde harflerle ($a,b,c,d$) kurulan genel kuralın somut bir uygulamasıdır; işlemin adım sırası aynı kalır, yalnızca semboller yerine sayılar kullanılır.
:::

---

## Uygulama: Sipariş Olasılıkları

Az önceki içecek ve boy seçimlerini artık olasılıkla kuralım.

İçecek seçme olasılıkları:

$$
i=
\begin{bmatrix}
0.6\\
0.4
\end{bmatrix}
$$

Çay olasılığı $0.6$, kahve olasılığı $0.4$.

Boy seçme olasılıkları:

$$
b=
\begin{bmatrix}
0.2\\
0.5\\
0.3
\end{bmatrix}
$$

Küçük $0.2$, orta $0.5$, büyük $0.3$.

---

## Sipariş Olasılıkları: Sonuç





$$
i\otimes b
=
\begin{bmatrix}
0.6\\
0.4
\end{bmatrix}
\otimes
\begin{bmatrix}
0.2\\
0.5\\
0.3
\end{bmatrix}
=
\begin{bmatrix}
0.6\cdot0.2\\
0.6\cdot0.5\\
0.6\cdot0.3\\
0.4\cdot0.2\\
0.4\cdot0.5\\
0.4\cdot0.3
\end{bmatrix}
=
\begin{bmatrix}
0.12\\
0.30\\
0.18\\
0.08\\
0.20\\
0.12
\end{bmatrix}
$$

---

## Sipariş Olasılıkları: Sonuç


| Ortak durum | Değer |
|---|---:|
| çay-küçük | $0.6\cdot0.2=0.12$ |
| çay-orta | $0.6\cdot0.5=0.30$ |
| çay-büyük | $0.6\cdot0.3=0.18$ |
| kahve-küçük | $0.4\cdot0.2=0.08$ |
| kahve-orta | $0.4\cdot0.5=0.20$ |
| kahve-büyük | $0.4\cdot0.3=0.12$ |

::: {.notes}
Bu, bir önceki sipariş kombinasyonu örneğinin sayısal (olasılıklı) hâlidir. İçecek ve boy seçimleri birbirinden bağımsız olduğu için, her ortak durumun olasılığı iki bağımsız olasılığın çarpımıdır — bu, olasılık teorisindeki "bağımsız olayların birlikte gerçekleşme olasılığı çarpımdır" kuralının tensör çarpımı diliyle ifadesidir. Örneğin çay-orta olasılığı $0.6\cdot0.5=0.30$'dur.

Tüm altı olasılığın toplamı kontrol edilebilir: $0.12+0.30+0.18+0.08+0.20+0.12=1$. Bu, beklenen bir sonuçtur çünkü $i$ ve $b$ vektörlerinin bileşenleri de kendi içinde toplandığında $1$ verir ($0.6+0.4=1$, $0.2+0.5+0.3=1$); iki olasılık dağılımının tensör çarpımı da her zaman toplamı $1$ olan bir olasılık dağılımı üretir.
:::

---

## Üç İşlemin Farkı

$$
\text{vektör toplama: aynı türden bilgileri birleştirir}
$$

$$
\text{matris çarpımı: mevcut bilgilerden yeni çıktılar hesaplar}
$$

$$
\text{tensör çarpımı: ayrı sistemlerin tüm ortak durumlarını üretir}
$$

::: {.notes}
Şimdiye kadar gördüğümüz üç işlemi yan yana koymak, aralarındaki farkı netleştirir. Vektör toplama, aynı türden iki veri kümesini (örneğin sabahki ve öğleden sonraki katılımcı sayılarını) birleştirir — girdi ve çıktı aynı yapıdadır. Matris çarpımı, mevcut bir veriden (örneğin grup bilgisinden) katsayı tablosu aracılığıyla yeni bir çıktı (örneğin maliyet) hesaplar — girdi ile çıktı farklı anlamlar taşır ama aynı "kayıt" (grup) üzerinden ilerler.

Tensör çarpımı ise ikisinden de farklıdır: girdiler iki ayrı, bağımsız sistemdir (içecek seçimi ve boy seçimi gibi) ve çıktı, bu iki sistemin tüm olası ortak durumlarını temsil eden daha büyük bir yapıdır. Toplama ve matris çarpımı "aynı kayıt üzerinde" çalışırken, tensör çarpımı "iki ayrı kaydı birleştirerek yeni, daha büyük bir kayıt uzayı" oluşturur.
:::

---

## Sıra Önemlidir

:::: {.columns}
::: {.column width="50%"}

Genellikle:

$$
u\otimes v \neq v\otimes u
$$

Aynı örnekte:

$$
v\otimes u
=
\begin{bmatrix}
4\\
-1
\end{bmatrix}
\otimes
\begin{bmatrix}
2\\
3
\end{bmatrix}
=
\begin{bmatrix}
8\\
12\\
-2\\
-3
\end{bmatrix}
$$

:::

::: {.column width="50%"}

Karşılaştırma:

$$
u\otimes v=
\begin{bmatrix}
8\\-2\\12\\-3
\end{bmatrix},
\qquad
v\otimes u=
\begin{bmatrix}
8\\12\\-2\\-3
\end{bmatrix}
$$

:::
::::

::: {.notes}
Aynı $u=\begin{bmatrix}2\\3\end{bmatrix}$ ve $v=\begin{bmatrix}4\\-1\end{bmatrix}$ için $v\otimes u$ hesaplandığında $\begin{bmatrix}8\\12\\-2\\-3\end{bmatrix}$ elde edilir; bu, $u\otimes v=\begin{bmatrix}8\\-2\\12\\-3\end{bmatrix}$'ten farklı bir sonuçtur, oysa aynı dört çarpım ($2\cdot4$, $2\cdot(-1)$, $3\cdot4$, $3\cdot(-1)$) kullanılmıştır.

Fark, hangi bileşenin "dışarıda" (ölçekleyen), hangisinin "içeride" (ölçeklenen ve kopyalanan) olduğundan kaynaklanır: $u\otimes v$'de $u$'nun bileşenleri $v$'nin kopyalarını sırayla ölçeklerken, $v\otimes u$'da roller tersine döner. Bu nedenle tensör çarpımı genellikle değişmeli değildir: $u\otimes v\neq v\otimes u$.
:::

---

## Standart Bazlarla Örnek

$$
e_1=
\begin{bmatrix}
1\\0
\end{bmatrix},
\qquad
e_2=
\begin{bmatrix}
0\\1
\end{bmatrix}
$$

$$
e_1\otimes e_1
=
\begin{bmatrix}
1\\0
\end{bmatrix}
\otimes
\begin{bmatrix}
1\\0
\end{bmatrix}
=
\begin{bmatrix}
1\\0\\0\\0
\end{bmatrix}
$$

$$
e_1\otimes e_2
=
\begin{bmatrix}
0\\1\\0\\0
\end{bmatrix}
$$

::: {.notes}
Standart baz vektörlerini tensör çarpımına soktuğumuzda, birleşik uzayın kendi standart bazı ortaya çıkar. $e_1\otimes e_1=\begin{bmatrix}1\\0\end{bmatrix}\otimes\begin{bmatrix}1\\0\end{bmatrix}=\begin{bmatrix}1\\0\\0\\0\end{bmatrix}$ bulunur: $e_1$'in birinci bileşeni ($1$) $e_1$'i olduğu gibi kopyalar, ikinci bileşeni ($0$) ise $e_1$'i sıfırlar.

Benzer şekilde $e_1\otimes e_2=\begin{bmatrix}0\\1\\0\\0\end{bmatrix}$ olur. Her ikisi de dört boyutlu birleşik uzayda yalnızca tek bir konumda $1$, geri kalanında $0$ taşıyan vektörlerdir — bu, az sonra göreceğimiz birleşik uzayın standart bazının ilk iki elemanıdır.
:::

---

## Birleşik Baz

$\mathbb{R}^2\otimes\mathbb{R}^2$ için standart sıralama:

$$
e_1\otimes e_1,\quad
e_1\otimes e_2,\quad
e_2\otimes e_1,\quad
e_2\otimes e_2
$$

Vektör karşılıkları:

$$
\begin{bmatrix}1\\0\\0\\0\end{bmatrix},
\quad
\begin{bmatrix}0\\1\\0\\0\end{bmatrix},
\quad
\begin{bmatrix}0\\0\\1\\0\end{bmatrix},
\quad
\begin{bmatrix}0\\0\\0\\1\end{bmatrix}
$$

::: {.callout-warning}
## Dikkat

Tensör çarpımında baz sıralaması baştan seçilmeli ve tutarlı kullanılmalıdır.
:::

::: {.notes}
$\mathbb{R}^2\otimes\mathbb{R}^2$ uzayının standart bazı, iki alt uzayın baz vektörlerinin dört olası eşleşmesinden oluşur: $e_1\otimes e_1$, $e_1\otimes e_2$, $e_2\otimes e_1$, $e_2\otimes e_2$. Bunların vektör karşılıkları $\begin{bmatrix}1\\0\\0\\0\end{bmatrix}$, $\begin{bmatrix}0\\1\\0\\0\end{bmatrix}$, $\begin{bmatrix}0\\0\\1\\0\end{bmatrix}$, $\begin{bmatrix}0\\0\\0\\1\end{bmatrix}$'dir — dört boyutlu uzayın standart bazının ta kendisi.

Bu sıralamanın önemi şuradadır: hangi eşleşmenin hangi konuma karşılık geldiği bir kural gerektirir (burada $e_1\otimes e_1$ birinci konum, $e_1\otimes e_2$ ikinci konum şeklinde). Bu kural bir kez seçildikten sonra tutarlı biçimde kullanılmalıdır; aksi halde aynı birleşik durumu farklı hesaplarda farklı vektörlerle temsil etme riski doğar.
:::

---

## Kuantum Köprüsü: İki Kübit

İki durumlu bir sistemin (kübit) olası durumları:

$$
\begin{bmatrix}
0\\1
\end{bmatrix}
$$

İki kübiti birlikte düşünürsek:

$$
\begin{bmatrix}
0\\1
\end{bmatrix}
\otimes
\begin{bmatrix}
0\\1
\end{bmatrix}
=
\begin{bmatrix}
00\\01\\10\\11
\end{bmatrix}
$$

Kuantum notasyonunda:

$$
|00\rangle,\ |01\rangle,\ |10\rangle,\ |11\rangle
$$

::: {.notes}
Bu, az önceki çay/kahve ve boy örneğiyle tamamen aynı mantığı izler: her biri $2$ olası duruma sahip iki bağımsız sistem birleştiğinde $2\times2=4$ ortak durum oluşur. Kübit dilinde bu iki durum $|0\rangle$ ve $|1\rangle$ olarak adlandırılır; iki kübiti birlikte ele aldığımızda, tensör çarpımı bize dört olası ortak durumu ($00$, $01$, $10$, $11$) verir.

Bu, iki kübit için kullanılan temel durumların neden $|00\rangle,|01\rangle,|10\rangle,|11\rangle$ şeklinde yazıldığını sezgisel olarak açıklar — bunlar, az önce standart bazlarla kurduğumuz $e_1\otimes e_1$, $e_1\otimes e_2$, $e_2\otimes e_1$, $e_2\otimes e_2$ dörtlüsünün kuantum notasyonundaki karşılığıdır. Vektör dersindeki "sıralı liste" fikriyle de uyumlu: tensör çarpımı, iki sıralı listeyi (burada iki kübitin durumlarını) daha büyük ve birleşik bir sıralı listeye dönüştürür.
:::

---

## Lineer Birleşimle Dağılma

Tensör çarpımı toplama üzerine dağılır.

$$
(u+w)\otimes v
=
u\otimes v+w\otimes v
$$

Skalerler dışarı alınabilir:

$$
(\alpha u)\otimes v
=
\alpha(u\otimes v)
$$

Benzer şekilde:

$$
u\otimes(\alpha v+\beta w)
=
\alpha(u\otimes v)+\beta(u\otimes w)
$$

::: {.notes}
Tensör çarpımı, önceki bölümlerde gördüğümüz toplama ve skaler çarpma işlemleriyle uyumlu çalışır: toplama üzerine dağılır. $(u+w)\otimes v=u\otimes v+w\otimes v$ ifadesi, toplamı önce alıp sonra tensörlemekle, önce tensörleyip sonra toplamanın aynı sonucu verdiğini söyler. Skalerler de dışarı alınabilir: $(\alpha u)\otimes v=\alpha(u\otimes v)$.

Bu özellikler, tensör çarpımının rastgele tanımlanmış bir işlem olmadığını, lineer cebirin genel kurallarıyla (lineer birleşimle) tutarlı çalıştığını gösterir. Aynı dağılma kuralı sağ taraf için de geçerlidir: $u\otimes(\alpha v+\beta w)=\alpha(u\otimes v)+\beta(u\otimes w)$ — tensör çarpımı her iki argümanında da lineerdir.
:::

---

## Örnek: Dağılma

$$
u=
\begin{bmatrix}
1\\1
\end{bmatrix},
\qquad
v=
\begin{bmatrix}
2\\0
\end{bmatrix},
\qquad
w=
\begin{bmatrix}
0\\3
\end{bmatrix}
$$

$$
u\otimes(v+w)
=
\begin{bmatrix}
1\\1
\end{bmatrix}
\otimes
\begin{bmatrix}
2\\3
\end{bmatrix}
=
\begin{bmatrix}
2\\3\\2\\3
\end{bmatrix}
$$

$$
u\otimes v+u\otimes w
=
\begin{bmatrix}
2\\0\\2\\0
\end{bmatrix}
+
\begin{bmatrix}
0\\3\\0\\3
\end{bmatrix}
=
\begin{bmatrix}
2\\3\\2\\3
\end{bmatrix}
$$

::: {.notes}
$u=\begin{bmatrix}1\\1\end{bmatrix}$, $v=\begin{bmatrix}2\\0\end{bmatrix}$, $w=\begin{bmatrix}0\\3\end{bmatrix}$ için önce $v+w=\begin{bmatrix}2\\3\end{bmatrix}$ toplanıp $u\otimes(v+w)$ hesaplanırsa $\begin{bmatrix}2\\3\\2\\3\end{bmatrix}$ elde edilir.

Aynı sonuca, önce $u\otimes v=\begin{bmatrix}2\\0\\2\\0\end{bmatrix}$ ve $u\otimes w=\begin{bmatrix}0\\3\\0\\3\end{bmatrix}$ ayrı ayrı hesaplanıp toplanarak da ulaşılır: $\begin{bmatrix}2\\0\\2\\0\end{bmatrix}+\begin{bmatrix}0\\3\\0\\3\end{bmatrix}=\begin{bmatrix}2\\3\\2\\3\end{bmatrix}$. İki yol da aynı sonucu verir; bu, dağılma özelliğinin soyut bir formül değil, gerçekten kontrol edilebilir bir eşitlik olduğunu doğrular.
:::

---

## Matrislerde Tensör Çarpımı

İki matris:

$$
A=
\begin{bmatrix}
a & b\\
c & d
\end{bmatrix},
\qquad
B
$$

Tensör çarpımı:

$$
A\otimes B
=
\begin{bmatrix}
aB & bB\\
cB & dB
\end{bmatrix}
$$

Yani $A$'nın her girdisi, $B$ matrisinin skaler katıyla değiştirilir.

::: {.notes}
İki matrisin tensör çarpımı, vektörlerdekiyle aynı mantığı izler: soldaki matrisin her girdisi, sağdaki matrisin tam bir kopyasını ölçekler. $A=\begin{bmatrix}a&b\\c&d\end{bmatrix}$ için $A\otimes B=\begin{bmatrix}aB&bB\\cB&dB\end{bmatrix}$ olur — burada her hücre ($aB$, $bB$, $cB$, $dB$) tek bir sayı değil, $B$'nin skalerle çarpılmış tam bir kopyasıdır.

Bu yapıyı **blok matris** olarak okumak en kolay yoldur: $A\otimes B$, $A$'nın boyutunda ($2\times2$) düzenlenmiş, ama her hücresi $B$'nin boyutunda ($p\times q$) bir alt matris olan büyük bir matristir. Sonuçtaki toplam boyut bu yüzden $A$ ve $B$'nin boyutlarının çarpımıdır.
:::

---

## Matris Tensör Çarpımı: Örnek

$$
A=
\begin{bmatrix}
1 & 0\\
0 & -1
\end{bmatrix},
\qquad
B=
\begin{bmatrix}
0 & 1\\
1 & 0
\end{bmatrix}
$$

$$
A\otimes B
=
\begin{bmatrix}
1B & 0B\\
0B & -1B
\end{bmatrix}
$$

$$
=
\begin{bmatrix}
0 & 1 & 0 & 0\\
1 & 0 & 0 & 0\\
0 & 0 & 0 & -1\\
0 & 0 & -1 & 0
\end{bmatrix}
$$

::: {.notes}
$A=\begin{bmatrix}1&0\\0&-1\end{bmatrix}$ köşegen bir matris olduğu için $A\otimes B$'nin blok yapısı sadeleşir: $1B=B$ olduğundan sol üst blok doğrudan $B=\begin{bmatrix}0&1\\1&0\end{bmatrix}$'dir; $0B$ sıfır matrisi olduğundan sağ üst ve sol alt bloklar tamamen sıfırdır; $-1B=-B$ olduğundan sağ alt blok $B$'nin işareti ters çevrilmiş hâlidir.

Bu düzen, sonuçtaki $4\times4$ matriste doğrudan görülebilir: $\begin{bmatrix}0&1&0&0\\1&0&0&0\\0&0&0&-1\\0&0&-1&0\end{bmatrix}$. Köşegen bir matrisle tensör çarpımı, bu yüzden özellikle okunaklıdır — sıfır olmayan köşegen girdileri, $B$'nin (işaretli) kopyalarının nerede belireceğini doğrudan gösterir.
:::

---

## Boyut Hesabı

Eğer:

$$
A \text{ boyutu } m\times n
$$

ve:

$$
B \text{ boyutu } p\times q
$$

ise:

$$
A\otimes B \text{ boyutu } mp\times nq
$$

Örnek:

$$
(2\times3)\otimes(4\times2)
\Rightarrow
8\times6
$$

::: {.notes}
Matrislerin tensör çarpımında boyutlar ayrı ayrı çarpılır: $A$ boyutu $m\times n$, $B$ boyutu $p\times q$ ise $A\otimes B$'nin boyutu $mp\times nq$'dur — satır sayıları kendi aralarında, sütun sayıları kendi aralarında çarpılır, karışmazlar. Örnekte $(2\times3)\otimes(4\times2)$ için satırlar $2\times4=8$, sütunlar $3\times2=6$ çarpılarak $8\times6$ boyutu elde edilir.

Bu formül, sonucu elle hesaplamadan önce beklenen boyutu bilmeyi sağlar; hesaplanan matrisin boyutu bu formülle uyuşmuyorsa, işlemde bir hata yapılmış demektir. Bu, önceki bölümde gördüğümüz matris-vektör çarpımındaki boyut uyumu kontrolünün tensör çarpımı için genellenmiş hâlidir.
:::

---

## Dönüşümlerin Birlikte Etkisi

Vektörler:

$$
u,\ v
$$

Matrisler:

$$
A,\ B
$$

Uyumlu boyutlarda şu ilişki geçerlidir:

$$
(A\otimes B)(u\otimes v)
=
(Au)\otimes(Bv)
$$

Yorum:

- $A$ birinci vektöre etki eder
- $B$ ikinci vektöre etki eder
- Sonra sonuçlar tensörlenir

::: {.notes}
$(A\otimes B)(u\otimes v)=(Au)\otimes(Bv)$ ilişkisi, birleşik bir dönüşümün ($A\otimes B$) birleşik bir vektöre ($u\otimes v$) etkisinin, her matrisin kendi vektörüne ayrı ayrı etki edip sonuçların tensörlenmesiyle aynı olduğunu söyler. $A$ yalnızca birinci vektöre, $B$ yalnızca ikinci vektöre etki eder; sonra bu iki sonuç tensör çarpımıyla birleştirilir.

Bu, tensör çarpımının en kullanışlı özelliklerinden biridir çünkü büyük bir birleşik matrisi ($A\otimes B$) doğrudan hesaplamak yerine, iki küçük matrisi kendi vektörlerine ayrı ayrı uygulamayı mümkün kılar. İki sistem üzerinde bağımsız işlem yapmak istendiğinde (örneğin her sisteme kendi dönüşümünü uygulamak), bu eşitlik hesabı önemli ölçüde basitleştirir.
:::

---

## Mini Kontrol

Aşağıdaki tensör çarpımını hesaplayalım:

$$
\begin{bmatrix}
2\\
-1
\end{bmatrix}
\otimes
\begin{bmatrix}
3\\
4
\end{bmatrix}
=?
$$

Cevap:

$$
\begin{bmatrix}
2\cdot3\\
2\cdot4\\
(-1)\cdot3\\
(-1)\cdot4
\end{bmatrix}
=
\begin{bmatrix}
6\\
8\\
-3\\
-4
\end{bmatrix}
$$

::: {.notes}
$\begin{bmatrix}2\\-1\end{bmatrix}\otimes\begin{bmatrix}3\\4\end{bmatrix}$ için soldaki vektörün birinci bileşeni $2$, sağdaki vektörü ölçekler: $2\cdot3=6$, $2\cdot4=8$. İkinci bileşen $-1$, sağdaki vektörü tekrar ölçekler: $-1\cdot3=-3$, $-1\cdot4=-4$. Bu dört değer alt alta dizilerek $\begin{bmatrix}6\\8\\-3\\-4\end{bmatrix}$ elde edilir.

Bu, dersin başından beri kurulan mekanizmanın son bir tekrarıdır: soldaki her bileşen, sağdaki vektörün tamamını ölçekler ve sonuçlar sırayla alt alta yerleştirilir.
:::

---

## Sık Hata

Tensör çarpımı bileşen bileşen çarpım değildir.

Yanlış beklenti:

$$
\begin{bmatrix}
a\\b
\end{bmatrix}
\otimes
\begin{bmatrix}
c\\d
\end{bmatrix}
\neq
\begin{bmatrix}
ac\\bd
\end{bmatrix}
$$

Doğru sonuç:

$$
\begin{bmatrix}
a\\b
\end{bmatrix}
\otimes
\begin{bmatrix}
c\\d
\end{bmatrix}
=
\begin{bmatrix}
ac\\ad\\bc\\bd
\end{bmatrix}
$$

::: {.callout-warning}
## Dikkat

Tensör çarpımı boyutu büyütür; iki boyutlu iki vektörden dört boyutlu vektör çıkar.
:::

::: {.notes}
En sık karışan nokta, tensör çarpımının bileşen bileşen çarpım (Hadamard çarpımı) ile aynı zannedilmesidir. Bileşen bileşen çarpımda $\begin{bmatrix}a\\b\end{bmatrix}$ ile $\begin{bmatrix}c\\d\end{bmatrix}$ çarpılırsa aynı boyutta $\begin{bmatrix}ac\\bd\end{bmatrix}$ elde edilir — bu, tensör çarpımı **değildir**.

Doğru sonuç $\begin{bmatrix}ac\\ad\\bc\\bd\end{bmatrix}$'dir: dört terimin hepsi hesaplanır, ikisi ($ac$, $bd$) değil. Bu fark, boyutun neden büyüdüğünü de açıklar: bileşen bileşen çarpım girdilerle aynı boyutu korurken, tensör çarpımı tüm çapraz çarpımları ürettiği için boyut çarpımsal olarak büyür — iki boyutlu iki vektörden dört boyutlu bir vektör çıkar.
:::

---

## Özet

1. Tensör çarpımı birleşik yapı oluşturur
2. Vektörlerde boyutlar çarpılır: $\mathbb{R}^m\otimes\mathbb{R}^n\to\mathbb{R}^{mn}$
3. $\begin{bmatrix}a\\b\end{bmatrix}\otimes\begin{bmatrix}c\\d\end{bmatrix}=\begin{bmatrix}ac\\ad\\bc\\bd\end{bmatrix}$
4. Sıra önemlidir: genellikle $u\otimes v\neq v\otimes u$
5. Matris tensör çarpımı blok matris üretir
6. $(A\otimes B)(u\otimes v)=(Au)\otimes(Bv)$

::: {.notes}
Bu bölümde iki sistemi birlikte temsil eden tensör çarpımını kurduk. Boyutların neden çarpıldığını bir sayma problemiyle motive ettik, sonra vektörler için mekanik kuralı ($\begin{bmatrix}a\\b\end{bmatrix}\otimes\begin{bmatrix}c\\d\end{bmatrix}=\begin{bmatrix}ac\\ad\\bc\\bd\end{bmatrix}$) kurduk. Bu işlemin genellikle değişmeli olmadığını ($u\otimes v\neq v\otimes u$), toplama üzerine dağıldığını ve matrisler için blok matris olarak yorumlandığını gördük; son olarak $(A\otimes B)(u\otimes v)=(Au)\otimes(Bv)$ ilişkisiyle birleşik dönüşümlerin parçalara ayrılabildiğini gösterdik.

Vektör, iç çarpım, matris ve tensör çarpımı bölümleri birlikte, kuantum hesaplamanın matematiksel altyapısını oluşturur: kübit durumları birim vektörlerle, ölçüm ve dikeylik iç çarpımla, kapı işlemleri matrislerle, çok kübitli sistemler ise tensör çarpımıyla temsil edilir.
:::
