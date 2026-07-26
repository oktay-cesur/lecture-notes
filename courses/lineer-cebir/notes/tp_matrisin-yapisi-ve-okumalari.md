---
title: "Matrisin Yapısı ve Okumaları"
subtitle: "MATE 213 — Lineer Cebir"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-25
execute:
  echo: false
---

## Dört Etkinlik, Üç Ürün

Önce yalnız sandviçleri bir vektörde tutuyorduk:

$$
s=\begin{bmatrix}20\\30\\15\\40\end{bmatrix}
$$

İçecek ve tatlı kalemleri eklenince her etkinlik için üç sayı gerekiyor:

| Etkinlik | Sandviç | İçecek | Tatlı |
| -------- | ------: | -----: | ----: |
| 1        |      20 |     15 |    10 |
| 2        |      30 |     25 |    12 |
| 3        |      15 |     10 |     8 |
| 4        |      40 |     30 |    20 |

::: {.notes}
Önceki örnekte dört etkinliğin sandviç miktarlarını tek sütun vektöründe tutuyorduk. İçecek ve tatlı miktarları da izlenmek istendiğinde aynı etkinlik sırasını koruyan iki sütun daha ekliyoruz. Böylece dört satır ve üç sütundan oluşan tablo ortaya çıkıyor.

Tablonun düzeni iki ekseni ayırmasından geliyor. Bir eksende ölçümün kime ait olduğu (hangi etkinlik), diğerinde neyin ölçüldüğü (hangi ürün) duruyor. Bu iki eksenli düzen, "üçüncü etkinliğe kaç içecek gidiyor" ya da "bütün gün kaç tatlı gerekiyor" gibi soruları tabloya bakarak cevaplanabilir hâle getiriyor. Lineer cebirin matris kavramı bu düzenin sayısal iskeletinden çıkıyor.
:::

---

## Tabloda Satır, Sütun, Hücre

| Etkinlik | Sandviç | İçecek | Tatlı |
|:---:|---:|---:|---:|
| 1 | **20** | 15 | 10 |
| 2 | 30 | 25 | **12** |
| 3 | 15 | **10** | 8 |
| 4 | 40 | 30 | 20 |

- $(1,1)\to20$: birinci etkinliğin sandviçi
- $(2,3)\to12$: ikinci etkinliğin tatlısı
- $(3,2)\to10$: üçüncü etkinliğin içeceği

::: {.notes}
Tablonun yatay dizilerine satır, düşey dizilerine sütun diyoruz. Bir satır tek bir etkinliğin bütün ürün miktarlarını taşır: üçüncü satır $15,\ 10,\ 8$ değerleriyle üçüncü etkinliğin ikram bileşimini verir. Bir sütun ise tek bir ürünün bütün etkinliklerdeki miktarlarını taşır: ikinci sütun $15,\ 25,\ 10,\ 30$ değerleriyle günün içecek dağılımını verir. Aynı on iki sayı, satır okumasında etkinliklere, sütun okumasında ürünlere göre gruplanıyor.

Bir hücreyi adreslerken önce satırı, sonra sütunu söylüyoruz: üçüncü satır ile ikinci sütunun kesişimindeki değer $10$'dur, yani üçüncü etkinliğin içecek miktarı. Bu sıra bir sözleşmedir ve ders boyunca hiç değişmeyecek. En sık yapılan hata sırayı ters okumaktır; "ikinci satır, üçüncü sütun" dediğinizde farklı bir hücreye, $12$ değerine gidersiniz.

Adreslemenin çalışması için tablonun düzenli olması gerekir: her satırda aynı sayıda hücre, her sütunda aynı sayıda hücre bulunmalıdır. Bir etkinlik için tatlı miktarı boş bırakılsaydı "üçüncü sütun" ifadesi bütün satırlar için aynı anlamı taşımazdı.
:::

---

## Tablodan Matrise

Başlıklar düşer, sayı düzeni kalır:

$$
A=
\begin{bmatrix}
20&15&10\\
30&25&12\\
15&10&8\\
40&30&20
\end{bmatrix}
\qquad
a_1=
\begin{bmatrix}20\\30\\15\\40\end{bmatrix}
$$

Tek sütun da bir matristir.

::: {.notes}
Başlık satırını ve etkinlik numaralarını çıkarıp geriye kalan sayıları köşeli parantez içine aldığımızda bir matris elde ederiz. Başlıkların düşmesiyle bilgi kaybolmuyor, çünkü bilgiyi zaten konum taşıyordu: üçüncü sütun, adı yazılmasa da tatlı miktarlarının sütunu olarak kalıyor. Kaybolan tek şey bağlamın kendisidir, ve bu kasıtlıdır — aynı $4\times3$ sayı düzeni başka bir problemde bambaşka bir şeyi temsil edebilir.

Sandviç sütununu tek başına alırsak dört bileşenli bir sütun vektörü elde ederiz; vektörleri önceki notlarda bu biçimde yazmıştık. Matris de burada zaten böyle doğuyor: tek sütun yalnız sandviç miktarlarını taşıyordu, içecek ve tatlıyı da kaydetmek isteyince aynı etkinlikleri paylaşan iki sütun daha yan yana geldi. Ters yönden bakıldığında tek sütunlu bir matris ile bir sütun vektörü aynı nesnedir.

Bundan sonra bu nesneyi etkinliklerden bağımsız olarak inceleyeceğiz. Önce genel tanımını ve gösterimini kuracağız, sonra satır ve sütun okumalarına geri döneceğiz.
:::

---

## Matrisin Tanımı

$m$ satır ve $n$ sütundan oluşan, elemanları belirli bir skaler kümesinden seçilmiş dikdörtgensel düzenleme:

$$
A=
\begin{bmatrix}
a_{11}&a_{12}&\cdots&a_{1n}\\
a_{21}&a_{22}&\cdots&a_{2n}\\
\vdots&\vdots&\ddots&\vdots\\
a_{m1}&a_{m2}&\cdots&a_{mn}
\end{bmatrix}
$$

Kısa gösterim:

$$
A=[a_{ij}]_{m\times n},
\qquad
A\in\mathbb{R}^{m\times n}
\ \text{veya}\
A\in\mathbb{C}^{m\times n}
$$

::: {.notes}
Her $a_{ij}$ bir skalerdir; matrisin kendisi ise skaler değildir. Elemanlar gerçek sayılardan seçilmişse $A\in\mathbb{R}^{m\times n}$, karmaşık sayılardan seçilmişse $A\in\mathbb{C}^{m\times n}$ yazılır. Daha genel olarak elemanlar, üzerinde çalışılan skaler sistemden gelir.

Tanımdaki "dikdörtgensel" sözcüğü önemlidir: her satırda aynı sayıda eleman, her sütunda aynı sayıda eleman bulunur. Eksik hücreli veya düzensiz bir tablo bu anlamda matris değildir.
:::

---

## Matris: Şekil ve Eleman

- $m$: satır sayısı
- $n$: sütun sayısı
- $a_{ij}$: $i$. satır, $j$. sütun elemanı
- Toplam $mn$ eleman

$$
\boxed{\text{şekil}=\text{satır sayısı}\times\text{sütun sayısı}}
\qquad
\boxed{\text{indis sırası}=\text{satır},\ \text{sütun}}
$$

$$
\left[
\begin{array}{ccccc}
a_{11}&a_{12}&\cdots&a_{1j}&\cdots\\
\color{#2563eb}{a_{i1}}&\color{#2563eb}{a_{i2}}&
\color{#2563eb}{\cdots}&\color{#7c3aed}{\boxed{a_{ij}}}&
\color{#2563eb}{\cdots}\\
\vdots&\vdots&&\color{#16a34a}{\vdots}&\\
a_{m1}&a_{m2}&\cdots&\color{#16a34a}{a_{mj}}&\cdots
\end{array}
\right]
$$

Mavi: $i$. satır · Yeşil: $j$. sütun · Kesişim: $a_{ij}$

::: {.notes}
Matrisin $m\times n$ biçimi için "boyut" ve "şekil" sözcükleri bu derste eş anlamlı kullanılır; yazında yaygın olan "boyut"tur, bu notta yapı vurgusu için "şekil" öne çıkarılıyor. İleride vektör uzayının boyutu ayrı bir kavram olarak gelecek; orada hangi boyuttan söz edildiği bağlamdan ayırt edilecektir. Sıra her zaman önce satır, sonra sütundur; hem şekil yazımında hem indislerde bu kural geçerlidir.

$a_{ij}$ notasyonu elemanın değerinin yanında konumunu da taşır. $a_{23}$ elemanını bulmak için önce ikinci satıra, sonra üçüncü sütuna gidilir. İndisler yalnızca konumu adlandırmaz; matrisin şekli hangi indislerin geçerli olduğunu da belirler.
:::

---

## Hızlı Konum Kontrolü

$$
A=
\begin{bmatrix}
5&-1&7\\
3&2&0
\end{bmatrix}
$$

$$
a_{12}=-1,\qquad a_{21}=3,\qquad a_{23}=0
$$

Sorular:

- $A$'nın şekli nedir?
- $a_{31}$ var mıdır?
- İkinci sütun hangi vektördür?

::: {.notes}
$A$ matrisi $2\times3$ biçimindedir. Üçüncü satır olmadığı için $a_{31}$ tanımlı değildir. Birinci satır $(5, -1,7)$ vektörü, 2. sütun $(-1,2)^T$ vektörüdür.[^1] $a_{12}$ ise bu ikisinin kesişiminde olan $-1$ elemanıdır.

Satır-sütun sırası, matrisin hem şeklini hem de geçerli indislerini belirler. Bir elemanın var olup olmadığı toplam eleman sayısından değil, satır ve sütun indislerinin belirtilen boyutlar içinde kalmasından anlaşılır.
:::

---

## Matris Eşitliği

$$
A=B
\Longleftrightarrow
\begin{cases}
A\text{ ve }B\text{ aynı şekildedir},\\
a_{ij}=b_{ij}\text{ her }i,j\text{ için.}
\end{cases}
$$

$$
\begin{bmatrix}x&2\\3&y\end{bmatrix}
=
\begin{bmatrix}1&2\\3&5\end{bmatrix}
\Longrightarrow x=1,\ y=5
$$

::: {.notes}
Aynı sayıları içermek yeterli değildir; konum ve şekil eşitliğin parçasıdır. Örneğin $1\times4$ ile $2\times2$ matris, aynı dört sayıyı taşısa bile eşit değildir. Bir matriste elemanların yalnız değerleri değil, konumları da yapının parçasıdır.

Bu koşul matris toplamanın da neden aynı şekil gerektirdiğini hazırlar: karşılık gelen konumların kurulabilmesi gerekir.
:::

---

## Kare ve Dikdörtgen Matrisler

$$
\begin{bmatrix}1&2\\3&4\end{bmatrix}
\quad\text{kare }(2\times2),
\qquad
\begin{bmatrix}1&2&3\\4&5&6\end{bmatrix}
\quad\text{dikdörtgen }(2\times3)
$$

$$
A\in\mathbb{R}^{n\times n}
\Longrightarrow
A\ \text{karedir.}
$$

::: {.notes}
Satır ve sütun sayıları eşit olan matrislere kare matris denir; farklı olanlar dikdörtgen biçimindedir. Kare olmak burada yalnızca şekille ilgili temel bir sınıflandırmadır.

Bu ayrımın önemi ilerledikçe artacaktır: köşegen, birim ve simetrik gibi özel sınıflar, ters matris ve determinant gibi kavramlar standart biçimde kare matrisler üzerinde tanımlanır. Tek satırlı $1\times n$ yapı bir satır vektörü, tek sütunlu $n\times1$ yapı bir sütun vektörüdür; koordinat vektörleri matris gösterimi açısından bu özel durumlardır.
:::

---

## Matris Yalnızca Bir Sayı Tablosu mudur?

Tablo benzetmesi satır, sütun ve konumu açıklar; ancak matris kavramı daha geniştir.

- Her tablo matris değildir
    
- Girdiler sayı olmak zorunda değildir
    
- Girdiler ortak bir yapıdan seçilir
    
- Bağlam, matrisin rolünü belirler
    

Bir matris temsil edebilir:

- veri düzeni veya ilişki,
    
- olasılıksal geçiş,
    
- matematiksel işlem veya dönüşüm.
    

::: {.notes}  
Bir matris görünüş olarak tabloya benzer. Bu benzetme satırları, sütunları ve girdilerin konumlarını anlamayı kolaylaştırır. Ancak isim, bölüm ve açıklama gibi birbirinden farklı türde alanlar içeren sıradan bir kayıt tablosu doğrudan matematiksel matris sayılmaz.

Matris girdileri her zaman gerçek sayı olmak zorunda değildir. Karmaşık sayılar, polinomlar ve fonksiyonlar matris girdisi olabilir; blok matrislerde ise büyük bir matris, alt matrislerden oluşan bir düzen olarak ele alınabilir. Buradaki koşul, girdilerin toplama ve çarpma gibi gerekli işlemlerin tutarlı biçimde tanımlandığı ortak bir matematiksel yapıdan gelmesidir. Bu derste çoğunlukla gerçek sayı matrisleri kullanılacaktır.

Matrisin bağlamdaki rolü de girdilerin türünden ayrı düşünülür. Bir matris ölçümleri düzenleyebilir, nesneler arasındaki ilişkileri veya olasılıksal geçişleri gösterebilir ve bir vektöre uygulanan matematiksel dönüşümü temsil edebilir. Girdilerin türü hangi işlemlerin yapılabileceğini, bağlam ise bu işlemlerin ne anlama geldiğini belirler.
:::

---

## Ara Not: Graf Nedir?

<svg viewBox="0 0 560 250" role="img" aria-label="Bursa, İstanbul, Ankara ve İzmir şehirlerinden oluşan yönsüz graf" style="width:100%;max-height:260px">
  <line x1="130" y1="65" x2="420" y2="65" stroke="#64748b" stroke-width="4"/>
  <line x1="420" y1="65" x2="420" y2="190" stroke="#64748b" stroke-width="4"/>
  <line x1="420" y1="190" x2="130" y2="190" stroke="#64748b" stroke-width="4"/>
  <line x1="130" y1="190" x2="130" y2="65" stroke="#64748b" stroke-width="4"/>
  <g fill="#2563eb" stroke="white" stroke-width="4">
    <circle cx="130" cy="65" r="24"/><circle cx="420" cy="65" r="24"/>
    <circle cx="420" cy="190" r="24"/><circle cx="130" cy="190" r="24"/>
  </g>
  <g font-size="21" font-weight="600" text-anchor="middle">
    <text x="130" y="25">Bursa</text><text x="420" y="25">İstanbul</text>
    <text x="420" y="235">Ankara</text><text x="130" y="235">İzmir</text>
  </g>
</svg>

- Düğüm: şehir
- Kenar: doğrudan yol

::: {.notes}
Bundan sonraki üç başlıkta matrisin farklı alanlarda nasıl karşımıza çıktığını göreceğiz. Bu örnekler dersin kendi konusu değil; matrisin yalnız denklem sistemlerine ait bir araç olmadığını göstermek için var. Graf teorisi, olasılık ve istatistik başlı başına ayrı ders konularıdır, burada her birinden yalnız matrisle ilişkisi kadarını alıp devam edeceğiz.

Örneklerde matris çarpımı ve matris kuvvetleri geçecek. Bu işlemleri henüz tanımlamadık; birkaç not sonra, önce matris–vektör sonra matris–matris çarpımıyla kuracağız. Şimdilik amacımız hesap yapmak değil, aynı satır–sütun düzeninin farklı problemlerde nasıl kurulduğunu görmek. Kuvvetlerin ne anlama geldiğini burada söylemekle yetiniyoruz, nasıl hesaplandığını sonra göreceğiz.

Graf, nesnelerden ve bu nesneler arasındaki bağlantılardan oluşan bir yapıdır. Nesnelere düğüm, bağlantılara kenar denir. Örnekte dört şehir düğümleri, aralarındaki doğrudan yollar kenarları oluşturuyor: Bursa–İstanbul, İstanbul–Ankara, Ankara–İzmir ve İzmir–Bursa. Bursa ile Ankara arasında doğrudan yol yok; bu iki şehir arasında gitmek için İstanbul ya da İzmir üzerinden geçmek gerekiyor. Yollar çift yönlü olduğu için bu graf yönsüzdür.

Grafın taşıdığı bilginin tamamı "hangi iki şehir doğrudan bağlı" sorusunun cevabıdır. Dört şehir için sorulacak on altı ikili vardır ve her birinin cevabı evet ya da hayırdır. On altı cevap, satırları ve sütunları şehirler olan bir tabloya yazılabilir — yani bir matrise.
:::

---

## Teknik Bağlam: Grafın Komşuluk Matrisi

Doğrudan yol varsa $1$, yoksa $0$:

|          | Bursa | İstanbul | Ankara | İzmir |
| -------- | :---: | :------: | :----: | :---: |
| Bursa    |   0   |    1     |   0    |   1   |
| İstanbul |   1   |    0     |   1    |   0   |
| Ankara   |   0   |    1     |   0    |   1   |
| İzmir    |   1   |    0     |   1    |   0   |

$$
A=
\begin{bmatrix}
0&1&0&1\\
1&0&1&0\\
0&1&0&1\\
1&0&1&0
\end{bmatrix}
$$

Kuvvetleri: $(A^n)_{ij}=n$ adımlı yürüyüş sayısı

::: {.notes}
Komşuluk matrisinde satırlar da sütunlar da düğümleri temsil eder. Şehirleri Bursa, İstanbul, Ankara, İzmir sırasına koyduğumuzda birinci satır Bursa'nın komşuluklarını verir: $a_{12}=1$ çünkü Bursa ile İstanbul bağlı, $a_{13}=0$ çünkü Bursa ile Ankara arasında doğrudan yol yok, $a_{14}=1$ çünkü İzmir bağlı. Köşegen boyunca sıfırlar durur; bir şehrin kendisiyle kenarı yoktur. Yollar çift yönlü olduğu için $a_{ij}=a_{ji}$ olur ve matris köşegene göre simetriktir.

Bu matris yalnız bağlantıları saklamaz. Matris çarpımını kurduktan sonra komşuluk matrisinin kuvvetleri graf üzerinde yeni bilgiler taşır: $(A^n)_{ij}$ elemanı $i$. düğümden $j$. düğüme uzunluğu $n$ olan yürüyüşlerin sayısını verir. Örneğimizde Bursa'dan Ankara'ya iki adımda iki ayrı yürüyüş vardır — biri İstanbul, diğeri İzmir üzerinden — ve $(A^2)_{13}$ değeri tam olarak $2$ çıkar.

Bu değeri şimdi hesaplayamayız, çünkü $A^2$ matris çarpımı demektir ve çarpımı henüz kurmadık; iki adımlı yürüyüşleri graf üzerinde tek tek sayarak buluyoruz. Çarpımı tanımladıktan sonra buraya dönüp aynı sayının matris işleminden nasıl çıktığını göreceğiz. $A^2$ lineer cebir açısından sıradan bir matris işlemi olacak; hesabı yaparken şehirleri düşünmeyeceğiz, sonucu okurken graf bağlamına döneceğiz. Matrisin satır–sütun yapısının problemin kendi yapısını kodlaması bu örnekte açıkça görülüyor.
:::

---

## Teknik Bağlam: Markov Geçiş Matrisi

Bir sistem zamanla durum değiştirebilir:

- güneşli,
    
- yağmurlu.
    

Geçiş matrisi, bir sonraki durumun olasılıklarını gösterir.

$$  
P=  
\begin{bmatrix}  
0.8 & 0.2\\  
0.4 & 0.6  
\end{bmatrix}  
$$

Bu notta kullanılan yön sözleşmesi:

- **satır:** bugünkü durum,
- **sütun:** yarınki durum,
- $p_{ij}=P(\text{yarın }j\mid\text{bugün }i)$.

Satır olasılık vektörüyle güncelleme:

$$
q_{\text{yarın}}=q_{\text{bugün}}P.
$$
    

::: {.notes}  
Hava durumunu iki seçenekle sınırlayalım: güneşli ve yağmurlu. Bugün güneşliyse yarın güneşli kalma olasılığı $0.8$, yağmurlu olma olasılığı $0.2$ olsun. Bugün yağmurluysa yarın güneşli olma olasılığını $0.4$, yağmurlu kalma olasılığını ise $0.6$ olarak gösterelim.

Bu dört olasılığı ayrı ayrı yazmak yerine tek bir matriste düzenleyebiliriz. Örneğin $p_{12}=0.2$, bugün güneşliyken yarın yağmurlu olma olasılığıdır. Her satırın toplamı $1$ olur; çünkü bugünkü sabit bir durumdan yarınki olası durumlara dağılımı okuyoruz.

Bu yön sözleşmesinde durum dağılımını satır vektörü olarak yazar ve sağdan $P$ ile çarparız. Sütun vektörü kullanan kaynaklar geçiş matrisini ters yönde kurabilir; bu nedenle çarpımdan önce satır ve sütunların neyi temsil ettiğini kontrol etmek gerekir. Birkaç adım sonraki olasılıklar $P$'nin kuvvetleriyle hesaplanır.
:::

---

## Aynı Matematiksel Yapı, Farklı Anlamlar

Aynı konumdaki eleman farklı bağlamlarda:

- bir bağlantıyı,
- bir geçiş olasılığını

temsil edebilir.

> Lineer cebir ortak matematiksel yapıyla ilgilenir; yorumu uygulama alanı belirler.

::: {.notes}
Komşuluk matrisi ile Markov geçiş matrisi sayısal olarak birbirine benzeyen kare matrisler olabilir. Ancak aynı konumdaki bir eleman farklı bağlamlarda farklı nesneleri temsil eder.

Lineer cebir ortak matematiksel yapıyı inceler; uygulama alanı elemanların ve işlemlerin yorumunu belirler. Matrisler ayrıca denklem sistemlerinde katsayıları, sonraki konularda da geometrik veya cebirsel dönüşümleri temsil edecektir.
:::

---

## Bir Problemi Matrisle Temsil Ederken

Kurulum soruları:

1. Satırlar neyi temsil ediyor?
2. Sütunlar neyi temsil ediyor?
3. $a_{ij}$ elemanının bağlamsal anlamı nedir?
4. Matrisin şekli neden böyle ortaya çıkıyor?

$$
\boxed{
\text{Problem}
\longrightarrow
\text{Matematiksel temsil}
\longrightarrow
\text{Lineer cebirsel işlem}
\longrightarrow
\text{Bağlamsal yorum}
}
$$

::: {.notes}
Gerçek bir problemde matris çoğu zaman doğrudan verilmez. Önce problemin hangi yönlerinin satırlarla, hangilerinin sütunlarla ve her elemanın hangi nicelikle temsil edileceğine karar verilir; bu seçim problemin bağlamsal modelidir. Etkinlik örneğinde satırlar etkinlikleri, sütunlar ikram türlerini, elemanlar ürün adetlerini temsil edecek şekilde bir kurulum yapılmıştır.

Matris bir kez kurulduktan sonra lineer cebirsel işlemler bağlamdan bağımsız olarak gerçekleştirilir. Son aşamada elde edilen sonuç tekrar problem bağlamında yorumlanır. Yalnızca matris işlemlerini bilmek, "matris nasıl kuruldu?" ve "sonuç problem bağlamında ne anlama geliyor?" sorularını kendiliğinden cevaplamaz; bu iki düzeyin ikisi de ayrıca öğrenilmelidir.
:::

---

## Matrisin Üç Okuması

Bir matris aynı anda:

1. düzenli bir veri temsili,
2. satır ve sütun vektörlerinden oluşan bir yapı,
3. ileride bir girişe etki eden işlem/dönüşüm nesnesi

olarak okunabilir.

> Bu okumalar birbirinin yerine geçen tanımlar değil, aynı nesnenin farklı rolleridir.

::: {.notes}
Matrisi yalnız "sayı tablosu" diye bırakmak, çarpım ve dönüşüm fikirlerini anlamsız bir kurala dönüştürür. Öte yandan her matrisi hemen geometrik dönüşüm gibi sunmak da veri ve denklem sistemi rollerini örter. Bu nedenle okumalar ayrıştırılır.

Önce veri ile satır-sütun yapısı kurulmalıdır. Matris–vektör çarpımının mekanizması ortaya çıktığında aynı matrisin bir dönüşümü nasıl temsil edebildiği de doğal biçimde anlaşılır.
:::

---

## Matrisi Sütunlarıyla Okumak

$$
A=
\begin{bmatrix}
\vert&\vert&&\vert\\
a_1&a_2&\cdots&a_n\\
\vert&\vert&&\vert
\end{bmatrix},
\qquad
a_j\in\mathbb{R}^m
$$

Bir $m\times n$ matris:

$$
\boxed{n\text{ tane }m\text{ bileşenli sütundan oluşur.}}
$$

::: {.notes}
Matrisin $j$. sütunu, $a_{1j},\ldots,a_{mj}$ elemanlarından oluşan bir sütun vektörüdür ve $\mathbb{R}^m$ içindedir. Etkinlik örneğinde her sütun tek bir ürünün bütün etkinliklerdeki miktarlarını taşır. Sütunların aynı bileşen sayısında olması, yan yana dikdörtgensel bir yapı kurabilmenin koşuludur.

Bu okuma matris–vektör çarpımının sütun yorumunu hazırlar: $Ax$, $A$ sütunlarının $x$ bileşenleriyle kurulan lineer birleşimidir.
:::

---

## Matrisi Satırlarıyla Okumak

$$
A=
\begin{bmatrix}
r_1\\r_2\\\vdots\\r_m
\end{bmatrix},
\qquad
r_i\in\mathbb{R}^{1\times n}
$$

Bir $m\times n$ matris:

$$
\boxed{m\text{ tane }n\text{ bileşenli satırdan oluşur.}}
$$

::: {.notes}
Matrisin $i$. satırı, $a_{i1},\ldots,a_{in}$ elemanlarından oluşan $1\times n$ biçimli bir satır vektörüdür. Etkinlik örneğinde bir satır, tek etkinliğin sandviç-içecek-tatlı bileşimini taşır. Aynı elemanlar sütun okumasında ürünlere göre, satır okumasında etkinliklere göre gruplanır; okumalardan hiçbiri yeni bir matris üretmez.

Matris–vektör çarpımında her satır sonuç vektörünün bir bileşenini üretecektir. Bu nedenle satır ve sütun okumaları ayrı işlemler değil, aynı çarpımın iki tamamlayıcı yüzüne hazırlıktır.
:::

---

## Şekil ile Satır–Sütun Boyutları

$$
A\in\mathbb{R}^{4\times3}
$$

$$
\boxed{
\begin{aligned}
&3\text{ sütun, her biri }4\text{ bileşenli},\\
&4\text{ satır, her biri }3\text{ bileşenli}
\end{aligned}}
$$

Genel kural:

$$
m\times n
\ \Longrightarrow\
\begin{cases}
n\text{ tane sütun},\ a_j\in\mathbb{R}^m,\\
m\text{ tane satır},\ r_i\in\mathbb{R}^{1\times n}.
\end{cases}
$$

::: {.notes}
Sık hata, "üç sütun varsa sütunlar üç bileşenlidir" demektir. Oysa bir sütun satırlar boyunca uzanır; $4\times3$ matrisin her sütununda dört eleman vardır. Benzer biçimde dört satırın her biri üç eleman taşır. Satırların sayısı ile satırların bileşen sayısı, sütunların sayısı ile sütunların bileşen sayısı farklı büyüklüklerdir.

Bu ayrım matris çarpımındaki iç boyutun neyi eşleştirdiğini anlamak için gereklidir.
:::

---

## Eleman, İki Yapının Kesişimidir

$a_{ij}$ aynı anda:

- $i$. satırın $j$. bileşeni,
- $j$. sütunun $i$. bileşenidir.

Üç okuma düzeyi:

1. tek tek elemanlar,
2. satır vektörleri,
3. sütun vektörleri.

::: {.notes}
Bir matris elemanı iki farklı yapının parçasıdır: içinde bulunduğu satırın bir bileşeni ve içinde bulunduğu sütunun bir bileşenidir. Satır $r_i$ ile sütun $a_j$ tam olarak $a_{ij}$ elemanında kesişir.

Dolayısıyla aynı matris üç farklı düzeyde okunabilir: tek tek elemanlar üzerinden, satır vektörleri üzerinden ve sütun vektörleri üzerinden. Bu okumalar aynı matrisi farklı biçimlerde düzenler; yeni bir matris oluşturmaz. Hangi okumanın kullanılacağı, yapılacak işlemin ve sorulan sorunun türüne bağlıdır.
:::

---

## Vektörlerden Matris Oluşturmak

Sütunlardan:

$$
a_1,\ldots,a_n\in\mathbb{R}^m
\ \Longrightarrow\
A=\begin{bmatrix}a_1&\cdots&a_n\end{bmatrix}\in\mathbb{R}^{m\times n}
$$

Satırlardan:

$$
r_1,\ldots,r_m\in\mathbb{R}^{1\times n}
\ \Longrightarrow\
A=\begin{bmatrix}r_1\\\vdots\\r_m\end{bmatrix}\in\mathbb{R}^{m\times n}
$$

::: {.notes}
Okuma yönü tersine de çalışır: aynı boyuttaki sütun vektörleri yan yana getirilerek, aynı uzunluktaki satır vektörleri alt alta getirilerek bir matris kurulabilir. $m$ bileşenli $n$ sütun yan yana geldiğinde oluşan matrisin şekli $m\times n$ olur.

Sütunların yan yana, satırların alt alta getirilebilmesi için aynı sayıda bileşene sahip olmaları gerekir; aksi durumda dikdörtgensel bir düzen oluşturulamaz. Bu kurulum, ileride sütunları verilen vektörlerden bir katsayı matrisi oluştururken doğrudan kullanılacaktır.
:::

---

## İki Okuma Aynı Şeyi Söylemez

$$
A=
\begin{bmatrix}
1&2&3\\
4&5&6
\end{bmatrix}
$$

Satır okuması: **2 tane 3 bileşenli** vektör

$$
r_1=\begin{bmatrix}1&2&3\end{bmatrix},\qquad
r_2=\begin{bmatrix}4&5&6\end{bmatrix}
$$

Sütun okuması: **3 tane 2 bileşenli** vektör

$$
a_1=\begin{bmatrix}1\\4\end{bmatrix},\quad
a_2=\begin{bmatrix}2\\5\end{bmatrix},\quad
a_3=\begin{bmatrix}3\\6\end{bmatrix}
$$

::: {.notes}
Aynı altı sayı iki okumada farklı biçimde gruplanıyor. Satır okuması iki tane üç bileşenli vektör verir; sütun okuması üç tane iki bileşenli vektör verir. Vektörlerin sayısı da bileşen sayıları da farklıdır — iki okuma aynı bilgiyi taşır ama aynı listeyi üretmez.

Bu ayrım, önceki slayttaki genel kuralın somut örneğidir: $m\times n$ bir matriste $m$ tane $n$ bileşenli satır, $n$ tane $m$ bileşenli sütun bulunur. Bir soruda hangi okumanın kullanılacağı sorunun kendisinden gelir; satırlar üzerinden mi sütunlar üzerinden mi düşünüldüğü baştan belirlenmelidir.
:::

---

## Sık Yapılan Hatalar

1. Sütun **sayısını** sütunların **bileşen sayısıyla** karıştırmak.
2. Şekli sütun × satır sırasıyla yazmak.
3. Geçersiz indisli elemana ($2\times3$ matriste $a_{31}$) değer aramak.
4. Aynı sayıları taşıyan farklı şekilli matrisleri eşit saymak.
5. Her tabloyu matris, her matrisi veri deposu sanmak.

::: {.notes}
Birinci hata en yaygın olanıdır: $4\times3$ bir matriste üç sütun vardır ama her sütun dört bileşenlidir; sütun satırlar boyunca uzanır. İkinci hata şekil gösteriminin sözleşmesini bozar; sıra her zaman satır–sütundur ve bu sözleşme bozulursa bütün boyut uyumu hesapları yanılır.

Üçüncü hata indislerin şekle bağlı olduğunu gözden kaçırır; matrisin şekli hangi indislerin geçerli olduğunu belirler. Dördüncü hata eşitliğin iki koşullu tanımını unutur: şekil ve karşılık gelen elemanlar birlikte eşleşmelidir. Beşinci hata ise matrisin rollerini daraltır; karışık türde veri içeren tablo matris değildir, matris de yalnız veri saklamaz.
:::

---

## Karar Soruları

1. $\mathbb{R}^{5\times2}$ matrisinin kaç sütunu vardır, her sütun kaç bileşenlidir?
2. Bir komşuluk matrisinde $a_{ij}$ ile $a_{ji}$ aynı bilgiyi mi taşır?
3. $\begin{bmatrix}1&2&3&4\end{bmatrix}$ ile $\begin{bmatrix}1&2\\3&4\end{bmatrix}$ eşit midir?
4. Aynı matris hem veri hem dönüşüm olabilir mi?

::: {.notes}
Birinci soruda iki sütun vardır ve her sütun beş bileşenlidir; sayı ile bileşen sayısı ayrımı burada sınanır. İkinci soru bağlama bağlıdır: yönsüz grafta bağlantı simetrik olduğu için iki eleman aynı bilgiyi taşır; yönlü grafta $i$'den $j$'ye bağlantı ile $j$'den $i$'ye bağlantı farklıdır.

Üçüncü soruda cevap hayırdır; matrisler aynı dört sayıyı içerse de biri $1\times4$, diğeri $2\times2$ şeklindedir. Dördüncü sorunun cevabı evettir: aynı matematiksel nesne bir problemde ölçüm verisini, başka bir problemde bir dönüşümün katsayılarını temsil edebilir. Rol, matrisin kendisinden değil kurulumdan gelir.
:::

---

## Sonraki Adım: Okumalardan İşlemlere

- Sütun okuması → $Ax$: sütunların katsayılarla **birleşimi**
- Satır okuması → $Ax$: her satırdan **bir bileşen**

> Matris işlemleri, bu yapıdan doğan işlemler olarak kurulacak — mekanik kurallar olarak değil.

::: {.notes}
Satır ve sütun gösterimleri yalnızca alternatif yazım biçimleri değildir; farklı matris işlemlerini anlamayı kolaylaştıran yapısal bakışlar sağlar. Bir matrisi sütunları üzerinden okumak, matris–vektör çarpımını sütunların belirli katsayılarla birleştirilmesi olarak yorumlamayı sağlayacak; satırlar üzerinden okumak ise aynı çarpımın sonucundaki her bileşenin nasıl oluştuğunu gösterecektir.

Bir sonraki adımda önce özel matris sınıfları ve transpoz ile yapı sözlüğü tamamlanır, ardından toplama, çıkarma ve skalerle çarpma işlemleri kurulur. Bu işlemlerin hesap mekanizması ayrı ele alınacaktır; burada önemli olan, matrisin tek tek elemanlardan oluşan bir düzen olmanın ötesinde, belirli boyutlara sahip satır ve sütun vektörlerinden oluşan bir yapı olduğunu görmektir.
:::

[^1]: Transpoz konusu ileride işlenecek. Kabaca transpoz işlemi satır sütun değişimi yapar, yatay vektörü dikey hale getirir.
	
