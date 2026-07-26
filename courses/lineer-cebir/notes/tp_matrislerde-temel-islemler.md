---
title: "Matrislerde Temel İşlemler"
subtitle: "MATE 213 — Lineer Cebir"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-25
execute:
  echo: false
---

## Üç Eleman Bazlı İşlem

$$
(A+B)_{ij}=a_{ij}+b_{ij}
\qquad
(A-B)_{ij}=a_{ij}-b_{ij}
\qquad
(\alpha A)_{ij}=\alpha a_{ij}
$$

Sonucun her elemanı, girdilerin **aynı konumdaki** elemanlarından.

::: {.notes}
Önceki notta toplama ve skalerle çarpmayı etkinlik–ikram problemi üzerinden kurmuştuk. Burada aynı işlemleri teknik tarafından ele alıyoruz: tanımların hangi koşullara bağlı olduğunu, hangi cebirsel özellikleri taşıdığını ve nerede yetersiz kaldıklarını göreceğiz.

Üç işlemin ortak deseni tanımlarda açıkça görünüyor. Her birinde sonucun $(i,j)$ elemanı, girdilerin $(i,j)$ elemanlarından hesaplanıyor; farklı konumlar birbirine karışmıyor. Bu desene eleman bazlı işlem diyoruz ve notun sonunda bu desenin matris çarpımına genellenmediğini göstereceğiz.

Çıkarma listede yer alıyor, ama birazdan göreceğimiz gibi bağımsız bir temel işlem değil. Toplama ve skalerle çarpma kurulduktan sonra çıkarma bunlardan türetiliyor.
:::

---

## Sayısal Örnek

$$
A=\begin{bmatrix}2&-1\\4&3\end{bmatrix},
\qquad
B=\begin{bmatrix}5&2\\-1&6\end{bmatrix}
$$

$$
A+B=\begin{bmatrix}7&1\\3&9\end{bmatrix},
\quad
A-B=\begin{bmatrix}-3&-3\\5&-3\end{bmatrix},
\quad
2A=\begin{bmatrix}4&-2\\8&6\end{bmatrix}
$$

::: {.notes}
Üç işlem aynı iki matriste karşılaştırılabilir. Toplama ve çıkarmada her konum iki girdinin aynı konumuyla eşleşir; örneğin $(2,1)$ konumunda $4+(-1)=3$ ve $4-(-1)=5$ bulunur.

Skalerle çarpmada ikinci bir matris yoktur. $2$, $A$'nın dört elemanının her birini çarpar ve şekil $2\times2$ olarak kalır. Bu sayısal örnek, özet formüllerdeki indis eşleşmesinin hesapta nasıl çalıştığını gösterir.
:::

---

## Toplama İçin Şekil Koşulu

$$
A,B\in\mathbb{R}^{m\times n}
\Longrightarrow
A+B\in\mathbb{R}^{m\times n}
$$

$$
A\in\mathbb{R}^{2\times3},\ B\in\mathbb{R}^{3\times2}
\Longrightarrow
A+B\ \text{tanımsız}
$$

::: {.notes}
Toplama karşılık gelen elemanlar arasında tanımlandığı için iki matrisin aynı şekilde olması gerekir. Koşul sağlandığında sonuç da aynı şekli taşır; toplama matris şeklini korur. Bu, $\mathbb{R}^{m\times n}$ kümesinin toplama altında kapalı olduğunu söyler ve ileride vektör uzayı tanımının ilk maddesi olacaktır.

Koşul sağlanmadığında işlem tanımsızdır — sonucu yanlış değil, yok. $2\times3$ ve $3\times2$ matrislerin her ikisinde de altı eleman bulunur, ancak konum kümeleri farklıdır: birincide $(1,3)$ adresi vardır, ikincide yoktur. Eşleştirilecek konum çiftleri kurulamadığı için toplam tanımlanamaz.

Sıfır matrisi bu tanımın etkisiz elemanıdır: $A+0_{m\times n}=A$. Şeklin sıfır matrisi için de yapının parçası olduğunu hatırlayın; $A$ matrisine eklenecek sıfır matrisi $A$ ile aynı şekilde olmalıdır.
:::

---

## Çıkarma Ayrı Bir İşlem Değildir

$$
\boxed{A-B=A+(-B)}
\qquad
\boxed{(A-B)_{ij}=a_{ij}-b_{ij}}
$$

$$
B+(-B)=0
$$

::: {.notes}
Çıkarma bağımsız yeni bir temel işlem olarak kurulmaz. Tam sayılarda $7-3$ ifadesini $7+(-3)$ olarak okuduğumuz gibi, matrislerde de $A-B$ ifadesi $A$ ile $B$'nin negatifinin toplamıdır. Negatif matris $-B=[-b_{ij}]$ tanımını özel matrisler notunda kurmuştuk; orada söylediğimiz "birazdan çıkarmanın tanımında kullanılacak" cümlesinin karşılığı burasıdır.

$B+(-B)=0$ eşitliği negatif matrisin toplamaya göre ters eleman rolünü gösterir. Her matrisin böyle bir tersi vardır ve bu ters yine aynı şekildedir. Çıkarma toplamadan türetildiği için toplamanın şekil koşulunu da devralır: $A-B$ ancak $A$ ve $B$ aynı şekildeyse tanımlıdır.

Eleman düzeyinde sonuç beklendiği gibi çıkar: her konumda ikinci matrisin değeri birincinin değerinden düşülür. Bağlamsal olarak çıkarma, katkıyı ayırmak için kullanılır — toplam plan ile bir ekibin planı biliniyorsa diğerinin katkısı çıkarmayla bulunur.
:::

---

## Skalerle Çarpma

$$
\boxed{(\alpha A)_{ij}=\alpha a_{ij}}
$$

$$
(-1)A=-A,
\qquad
0A=0_{m\times n},
\qquad
1A=A
$$

Şekil koşulu yok.

::: {.notes}
Skalerle çarpmada tek bir matris ve tek bir sayı vardır; iki matris arasında eşleştirme yapılmadığı için şekil koşulu da yoktur. Her şekilden matris her skalerle çarpılabilir ve sonuç aynı şekli taşır.

Üç özel durum tanımın doğrudan sonucudur. $\alpha=-1$ alındığında bütün elemanların işareti değişir ve negatif matris elde edilir; bu, negatif almanın ayrı bir işlem olmadığını, skalerle çarpmanın özel bir durumu olduğunu gösterir. $\alpha=0$ alındığında bütün elemanlar sıfırlanır ve aynı şekilde sıfır matrisi çıkar. $\alpha=1$ alındığında hiçbir şey değişmez.

Bu üç durum birlikte okunduğunda çıkarmanın da skalerle çarpmadan türetilebildiği görülür: $A-B=A+(-1)B$. Toplama ve skalerle çarpma elimizde olduğunda negatif alma ve çıkarma ayrıca tanımlanmak zorunda değildir.
:::

---

## Normalizasyon Örneği

Gri seviye görüntü: piksel değerleri $0$–$255$.

$$
A=\begin{bmatrix}
0&64&255\\
128&192&32
\end{bmatrix}
\quad\longrightarrow\quad
\frac1{255}A=
\begin{bmatrix}
0&0{,}251&1\\
0{,}502&0{,}753&0{,}125
\end{bmatrix}
$$

| Özgün gri seviye | Normalize değer |
|:---:|:---:|
| $\blacksquare\ \ $ $0$ | $0$ |
| $\color{#777}{\blacksquare}\ \ $ $128$ | $0{,}502$ |
| $\square\ \ $ $255$ | $1$ |

::: {.notes}
Skalerle çarpmanın veri işlemedeki yaygın kullanımı normalizasyondur. Gri seviye bir görüntüde her piksel $0$ ile $255$ arasında bir tam sayıyla saklanır; görüntünün tamamı bir matristir ve satır–sütun konumları piksel koordinatlarına karşılık gelir. Matrisi $\frac{1}{255}$ ile çarpmak bütün değerleri $[0,1]$ aralığına taşır.

Özgün matris ile normalize edilmiş matris yan yana aynı açık-koyu düzenini taşır. Bütün pikseller aynı katsayıyla ölçeklendiği için aralarındaki oranlar korunur; değişen şey sayıların $[0,255]$ yerine $[0,1]$ aralığında ifade edilmesidir.

Buradaki asıl nokta mekanizmanın bağlamdan bağımsız olması. $\frac{1}{255}A$ ifadesi, matris ister ikram planı ister görüntü olsun, aynı şeyi yapar: her elemana aynı skaleri uygular.
:::

---

## Cebirsel Özellikler: Toplama

Uygun şekilli $A$, $B$, $C$ için:

$$
\begin{aligned}
A+B&=B+A &&\text{(değişme)}\\
(A+B)+C&=A+(B+C) &&\text{(birleşme)}\\
A+0&=A &&\text{(etkisiz eleman)}\\
A+(-A)&=0 &&\text{(toplamsal ters)}
\end{aligned}
$$

::: {.notes}
Matris toplaması, sayılardaki toplamanın dört temel özelliğini taşır. Bunun nedeni tanımın kendisidir: toplama her konumda sayı toplamasına indirgeniyor ve sayılarda bu özellikler geçerli. Bir matris özdeşliğini doğrulamak, konum konum sayı özdeşliği doğrulamaya iniyor.

Pratik hesapta bu özellikler parantezleme ve sıralama özgürlüğü sağlar. Üç ekibin planı hangi sırayla ve hangi gruplamayla birleştirilirse birleştirilsin toplam plan aynı çıkar; ara toplamları istediğiniz yerden alabilirsiniz.

Kuramsal tarafta ise bu dört özellik ileride vektör uzayı aksiyomlarının toplama kanadını oluşturacak. Aynı dört maddeyi koordinat vektörlerinde de görmüştük. Bu tekrar tesadüf değil; ikisi de aynı soyut yapının örnekleri olduğu için aynı listeyi sağlıyorlar.
:::

---

## Cebirsel Özellikler: Skalerle Çarpma

$\alpha,\beta$ skalerleri için:

$$
\begin{aligned}
\alpha(A+B)&=\alpha A+\alpha B &&\text{(matris toplamına dağılma)}\\
(\alpha+\beta)A&=\alpha A+\beta A &&\text{(skaler toplamına dağılma)}\\
\alpha(\beta A)&=(\alpha\beta)A &&\text{(birleşme)}\\
1A&=A &&\text{(birim skaler)}
\end{aligned}
$$

::: {.notes}
Skalerle çarpma da dört özellik taşır: iki yönde dağılma, skalerlerin birleşmesi ve birim skalerin etkisizliği. Doğrulama deseni toplamadakiyle aynıdır. Örneğin birinci özellik için $\bigl(\alpha(A+B)\bigr)_{ij}=\alpha(a_{ij}+b_{ij})=\alpha a_{ij}+\alpha b_{ij}=(\alpha A+\alpha B)_{ij}$ zinciri yazılır; karşılık gelen bütün elemanlar eşit olduğu için matrisler eşittir.

İki dağılma özelliğinin farkına dikkat edin. Birincisinde tek skaler iki matrise dağılıyor, ikincisinde iki skaler tek matrise. Bağlamsal karşılıkları da farklı: birincisi iki ekibin planını önce toplayıp sonra büyütmekle, her birini ayrı ayrı büyütüp sonra toplamanın aynı sonucu verdiğini söylüyor. İkincisi ise aynı plandan iki ayrı katkı üretip bunları toplamayı anlatıyor: planın $1{,}5$ katı ile $0{,}5$ katını birlikte hazırlamak, planın $2$ katını hazırlamakla aynı kapıya çıkıyor.

İkinci özelliği ardışık artış diye okumayın. Bir planı önce yüzde elli, sonra yüzde otuz artırmak toplama değil, art arda ölçeklemedir ve $\alpha(\beta A)=(\alpha\beta)A$ maddesine girer. Oradaki çarpan $1{,}5+1{,}3$ değil $1{,}5\cdot 1{,}3=1{,}95$ olur, yani toplam artış yüzde seksen değil yüzde doksan beştir. Katsayılar toplanınca iki bağımsız katkı, çarpılınca ardışık uygulama elde edilir.

Bu sekiz özellik yalnız matrislere özgü değildir; koordinat vektörlerinde aynı liste geçerlidir. Vektör uzayı kavramı bu ortak yapıyı, elemanların matris mi koordinat vektörü mü olduğundan bağımsız biçimde tanımlayacak.
:::

---

## Yapılabilir Gözükmek Yapmak İçin Yeterli Değildir

Aynı boyutta komşuluk matrisi $A_{\text{graf}}$ ve dönüşüm matrisi $R$:

$$
A_{\text{graf}}+R
\quad\text{tanımlı — ama sonuç ne?}
$$

- komşuluk matrisi değil,
- dönüşüm matrisi değil.

::: {.notes}
Aynı şekle sahip iki matris matematiksel olarak her zaman toplanabilir; bu, toplamın her uygulamada anlamlı olduğu anlamına gelmez. Şekil koşulu işlemin yapılabilirliğini belirler, sonucun yorumlanabilirliğini değil.

Aynı boyuttaki bir graf komşuluk matrisi ile bir geometrik dönüşüm matrisini düşünelim. Birincide elemanlar düğümler arasındaki bağlantıları kodluyor, ikincide bir dönüşümün katsayılarını taşıyor. Toplam hesaplanabilir, ama ortaya çıkan matris ne bir komşuluk matrisi ne de bir dönüşüm matrisidir; hiçbir bağlamda doğal bir karşılığı yoktur. Sorun işlemin yapılamaması değil, karşılık gelen elemanların farklı türden nicelikleri temsil etmesidir.

Aynı sorun daha ince biçimde de ortaya çıkar. İki ekibin ikram tablosu aynı şekilde olsa bile biri etkinlikleri $1,2,3,4$ sırasıyla, diğeri $4,3,2,1$ sırasıyla listelemişse toplam sayısal olarak hesaplanır ve hiçbir satırı doğru olmaz. Bu yüzden her işlemden önce iki soru ayrı ayrı sorulur: işlem tanımlı mı, eşleşen satır ve sütunlar aynı bağlamsal anlamı taşıyor mu?
:::

---

## Aynı Şekil, Aynı Uzay Demek Değildir

Sayılar dışarıdan aynı görünebilir:

$$
2+3=5
$$

Ancak

$$
2\ \text{yumurta}+3\ \text{gün}
$$

ortak bir nicelik tanımlamadığı için toplanamaz.

Matrislerde de şekil kadar temsil edilen niceliklerin uyumu gerekir.

::: {.notes}
Toplama işlemi yalnız sembollerin sayısal görünümüne göre kurulmaz. Sabah yenilen iki yumurta ile sınava kalan üç gün, sayısal olarak $2$ ve $3$ ile gösterilir; ancak farklı türden niceliklerdir. Bunları $5$ sonucunda birleştirmek, “beş tane ne?” sorusuna cevap vermez. Aynı sayı gösterimini kullanmaları, aynı toplama işleminin girdileri oldukları anlamına gelmez.

Matrislerde aynı şekle sahip olmak, karşılık gelen konumların eşleştirilebilmesi için gerekli biçimsel koşuldur. Fakat uygulamada matrisler belirli nesneleri ve ilişkileri temsil eder. Bir komşuluk matrisinin $(i,j)$ elemanı iki düğüm arasındaki bağlantıyı, bir dönme matrisinin aynı konumdaki elemanı ise dönüşüm katsayısını taşır. Matrisler dışarıdan aynı boyutta görünse de karşılık gelen elemanları aynı türden nicelikler değildir.

İki matris yalnız sayı dizileri olarak ele alındığında aynı şekil, eleman bazında toplamı hesaplamaya yeter. Fakat bu işlemleri belirli bir amaca yönelik, belirli bir problemi çözmek için kullanıyorsak yapıyı ona göre kurmalı, aynı evrenden olmayan nesneleri işleme sokmamalıyız. 
:::

---

## Toplam Sınıfı Korumayabilir

İki dönme matrisi:

$$
R_1=I,
\qquad
R_2=-I
$$

$$
R_1+R_2=0
$$

Sıfır matrisi bir dönme matrisi değildir.

::: {.notes}
Önceki örnekte tamamen ayrı dünyaların matrislerini işleme almanın bir karşılığı olmadığını (yapmanın yanlış olduğunu değil, sonucun bir anlam taşımadığını) gördük. Bazen benzer bir durum aynı dünyanın matrislerinde de ortaya çıkar: aynı bağlamdaki matrisleri toplamak, sonucun aynı özel sınıfta kalacağını garanti etmez. $I$ düzlemde $0^\circ$ dönmeyi, $-I$ ise $180^\circ$ dönmeyi temsil eder. Her ikisi de dönme matrisidir, fakat toplamları sıfır matrisidir.

Bir dönme matrisi uzunlukları korur ve tersinirdir. Sıfır matrisi bütün vektörleri sıfır vektörüne gönderdiği için uzunlukları korumaz ve tersi yoktur. Dolayısıyla dönme matrisleri toplama altında kapalı değildir.

Korunma özelliği sınıfa ve işleme bağlıdır. İki simetrik matrisin toplamı simetrik, iki üst üçgensel matrisin toplamı üst üçgenseldir. Bir matris sınıfının toplama altında korunup korunmadığı, sınıfı tanımlayan koşulların toplam matrisi için de sağlanıp sağlanmadığı kontrol edilerek belirlenir.
:::

---


## Eleman Bazlı İşlemlerin Sınırı

Eleman bazlı:

$$
(A+B)_{ij}=a_{ij}+b_{ij},
\quad
(\alpha A)_{ij}=\alpha a_{ij}
$$

Fakat genel olarak:

$$
\boxed{AB\ne[a_{ij}b_{ij}]}
$$

::: {.notes}
Bu notta ele aldığımız üç işlem de eleman bazında tanımlıydı: sonucun her elemanı, girdilerin aynı konumdaki elemanlarından doğrudan hesaplanıyordu. Bu yapı matris–matris çarpımına genellenmez. $AB$ ifadesi karşılıklı elemanların çarpılması anlamına gelmez.

Ayrımı işlem daha tanımlanmadan yerleştirmek, matris çarpımındaki en yaygın hatayı önler. Toplama karşılık gelen konumları eşleştirir ve iki matrisin aynı şekilde olmasını ister. Matris çarpımı ise bir satırın tamamıyla bir sütunun tamamını çarp-topla kuralıyla birleştirerek tek bir sonuç elemanı üretir ve bambaşka bir boyut uyumu koşuluna sahiptir.

İki işlem yalnız sembol olarak değil, elemanları bir araya getirme biçimi olarak da temelden farklı. Bu farkı görmeden çarpım kuralını ezberlemek, hesabı yapılabilir ama anlaşılamaz kılar.
:::

---

## Sık Yapılan Hatalar

1. Aynı eleman sayısını toplama için yeterli saymak.
2. Çıkarmayı ayrı bir temel işlem sanmak.
3. Skalerle çarpmaya şekil koşulu aramak.
4. $AB$'yi eleman bazlı çarpım sanmak.
5. Tanımlı her işlemi bağlamsal olarak anlamlı saymak.

::: {.notes}
Birinci hata şekil koşulunu eleman sayısına indirger; $2\times3$ ile $3\times2$ matrisler altışar eleman taşısa da toplanamaz, çünkü konum kümeleri farklıdır. İkinci hata çıkarmanın türetilmiş olduğunu gözden kaçırır; $A-B=A+(-B)$ eşitliği çıkarmayı toplamaya indirger ve bu yüzden çıkarma toplamanın bütün koşullarını devralır.

Üçüncü hata iki işlemin yapısını karıştırır: toplamada iki matris eşleştirildiği için şekil koşulu vardır, skalerle çarpmada eşleştirilecek ikinci matris olmadığı için koşul yoktur. Dördüncü hata bir sonraki konunun en kritik uyarısıdır. Beşinci hata matematiksel tanımlılık ile bağlamsal anlamı tek katmana indirger; oysa her işlemden önce iki soru ayrı ayrı sorulmalıdır.
:::

---

## Karar Soruları

1. $A-B$ tanımlıysa $B-A$ da tanımlı mıdır? Eşit midirler?
2. İki simetrik matrisin toplamı simetrik midir?
3. $\alpha(A+B)=\alpha A+\alpha B$ eşitliği nasıl doğrulanır?
4. Aynı şekilli iki matrisin toplamı neden anlamsız olabilir?

::: {.notes}
Birinci soruda $B-A$ da tanımlıdır, çünkü aynı şekil koşulu geçerlidir; ancak genel olarak $A-B\neq B-A$ olur. İkisi birbirinin negatifidir: $B-A=-(A-B)$. Toplama değişmelidir, çıkarma değildir.

İkinci soruda cevap evettir. $A^T=A$ ve $B^T=B$ ise her konumda $a_{ij}=a_{ji}$ ve $b_{ij}=b_{ji}$ olur; toplamda $(a+b)_{ij}=a_{ij}+b_{ij}=a_{ji}+b_{ji}=(a+b)_{ji}$ çıkar. Simetriklik toplama altında korunur — dönme matrisi olma özelliğinin korunmadığı önceki örneğin tersi.

Üçüncü soruda doğrulama eleman düzeyinde yapılır: her iki tarafın $(i,j)$ elemanı yazılır, sayılardaki dağılma özelliği kullanılır, eşitlik görülür. Matris özdeşlikleri hep bu desenle doğrulanır. Dördüncü soruda iki ayrı koşul vardır: aynı şekil işlemi tanımlı kılar, karşılıklı elemanların aynı türden nicelikleri temsil etmesi ise sonucu yorumlanabilir kılar.
:::

---

## Sonraki İhtiyaç: Satır Başına Bir Sonuç

Bir etkinliğin ürün miktarları:

$$
\begin{bmatrix}20&15&10\end{bmatrix}
$$

Birim fiyatlar:

$$
\begin{bmatrix}120\\40\\75\end{bmatrix}
$$

$$
20(120)+15(40)+10(75)=3750
$$

::: {.notes}
Eleman bazlı işlemlerin yetmediği yeri somut bir soruyla kapatalım. Bir etkinliğin toplam maliyetini hesaplamak istiyoruz. Ürün miktarları bir satırda, birim fiyatlar bir sütunda duruyor. Hesap açık: her miktar kendi fiyatıyla çarpılıyor ve çarpımlar toplanıyor.

Bu hesap ne toplamadır ne skalerle çarpma. İki farklı nesneden — bir satır ve bir sütundan — tek bir sayı üretiyor, yani konum yapısını koruyan bir işlem değil. Üstelik her etkinlik için tekrarlanıyor: dört etkinlik varsa aynı çarp-topla dört kez yapılıyor ve dört sonuç çıkıyor.

Aynı hesabı bütün satırlara birlikte uygulamanın düzenli yazımı $Ax$ biçimidir. Birden fazla fiyat, maliyet ya da kaynak sütunu aynı anda işlendiğinde aynı fikir $AB$ çarpımına genişler. Bir sonraki notta bu geçişi kuracağız: eleman bazlı işlemlerden çarp-topla mekanizmasına.
:::
