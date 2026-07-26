---
title: "Temel Lineer Cebir: Matrisler"
subtitle: Lineer Cebir — 3
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-01-01
execute:
  echo: false
---

## Geçen Konudan Köprü

- Vektörleri çok bileşenli nesneler olarak yazdık
- İç çarpım ile uzunluk ve dikliği hesapladık
- Şimdi vektörleri başka vektörlere dönüştüren yapıları inceleyeceğiz

Ana fikir:

$$
\text{yeni vektör} = \text{matris} \times \text{eski vektör}
$$

Lineer cebir diliyle:

$$
v'=Av
$$

::: {.notes}
Önceki derslerde vektörleri sayı listesi, iç çarpımı ise iki vektörden bir sayı üreten işlem olarak kurduk. Matris, bu yapıyı bir adım öteye taşır: bir vektörü alıp başka bir vektöre dönüştüren bir nesnedir. $v'=Av$ ifadesi, $A$ matrisinin $v$ vektörüne uygulanarak yeni bir $v'$ vektörü ürettiğini söyler.

Matrisi yalnızca satır-sütun düzeninde bir sayı tablosu olarak görmek yanıltıcıdır; asıl önemli olan onun bir işlem — bir dönüşüm — temsil etmesidir. Bu derste ölçekleme, döndürme, yansıtma gibi somut dönüşümlerin hepsinin matris olarak yazılabildiğini göreceğiz; matrisin sayısal görünümü ile geometrik etkisi arasındaki bu bağlantı, matrisleri anlamanın en sağlam yoludur.
:::

---

## Örnek: Gruplardan Matrise

Önceki derste 4 eğitim grubunu tek bir ölçümle (katılımcı sayısı) vektörle temsil etmiştik:

$$
g=
\begin{bmatrix}
12\\8\\15\\5
\end{bmatrix}
$$

Aynı 4 grup için artık yalnızca katılımcı sayısını değil, eğitmen ve cihaz sayısını da tutmak istiyoruz:

| Grup | Katılımcı | Eğitmen | Cihaz |
|---|---|---|---|
| 1 | 12 | 1 | 10 |
| 2 | 8 | 1 | 8 |
| 3 | 15 | 2 | 12 |
| 4 | 5 | 1 | 5 |

---

## Tek Bir Yapı Olarak Matris

Bu tabloyu tek bir yapı olarak yazabiliriz:

$$
A=
\begin{bmatrix}
12 & 1 & 10\\
8 & 1 & 8\\
15 & 2 & 12\\
5 & 1 & 5
\end{bmatrix}
$$

::: {.notes}
Vektör $g$, her grup için tek bir sayı (katılımcı sayısı) taşıyordu; bu yüzden dört bileşenli tek bir sütun yeterliydi. Şimdi her grup için üç ayrı ölçüm (katılımcı, eğitmen, cihaz) tutmak istediğimizde, tek bir sütun artık yetmez: her grup kendi satırını, her ölçüm türü de kendi sütununu almalıdır.

Sonuç, satırların gruplara, sütunların ölçüm türlerine karşılık geldiği bir tablodur — bu tabloyu tek bir matematiksel nesne olarak yazınca $A$ matrisi ortaya çıkar. Bu geçiş, vektörün "tek ölçümlü sıralı liste" fikrinden matrisin "çok ölçümlü sıralı tablo" fikrine doğal bir genişlemedir: matris, aslında yan yana dizilmiş birkaç vektörün (burada birer sütun: katılımcı sütunu, eğitmen sütunu, cihaz sütunu) düzenli bir arada tutulmuş hâlidir.
:::

---

## Matris Nedir?

Matris, satır ve sütunlardan oluşan sayı tablosudur.

$$
A=
\begin{bmatrix}
0 & 1\\
1 & 0
\end{bmatrix}
$$

Bu matris 2 satır ve 2 sütuna sahiptir.

Boyutu:

$$
2\times2
$$

Başka örnek:

$$
B=
\begin{bmatrix}
1 & 2 & 3\\
4 & 5 & 6
\end{bmatrix}
\quad \Rightarrow \quad 2\times3
$$

::: {.notes}
Az önceki grup tablosunda gördüğümüz "satır=grup, sütun=ölçüm" düzeni, matrisin genel tanımının özel bir örneğiydi. Matris, sayıların satır ve sütunlar halinde düzenlendiği bir tablodur; vektörün tek boyutlu (yalnızca satır veya yalnızca sütun) yapısına karşılık, matris iki boyutlu bir yapıdır. Boyut her zaman "satır sayısı × sütun sayısı" biçiminde yazılır — bu sıra sabittir ve karıştırılmamalıdır.

$A$ matrisi $2$ satır ve $2$ sütuna sahip olduğu için $2\times2$ boyutundadır. $B$ matrisinde ise $2$ satır ve $3$ sütun olduğundan boyut $2\times3$'tür. Kare olmayan bu ikinci örnek, matrisin satır ve sütun sayısının birbirinden bağımsız olabileceğini gösterir; ilerleyen konularda bu bağımsızlık, matris-vektör çarpımının hangi boyutlarda tanımlı olduğunu belirleyecektir.
:::

---

## Matris Girdileri

$$
A=
\begin{bmatrix}
a_{11} & a_{12}\\
a_{21} & a_{22}
\end{bmatrix}
$$

Yorum:

- $a_{11}$: 1. satır, 1. sütun
- $a_{12}$: 1. satır, 2. sütun
- $a_{21}$: 2. satır, 1. sütun
- $a_{22}$: 2. satır, 2. sütun

Örnek:

$$
\begin{bmatrix}
5 & -1\\
3 & 2
\end{bmatrix}
$$

$$
a_{12}=-1,\qquad a_{21}=3
$$

::: {.notes}
Bir matrisin her girdisi, hangi satır ve hangi sütunda durduğunu belirten iki alt indisle etiketlenir: $a_{ij}$, $i$'inci satır ile $j$'inci sütunun kesiştiği değeri gösterir. Sıra sabittir — önce satır, sonra sütun; bu, vektörlerdeki bileşen sırasının önemi gibi burada da değiştirilemez bir kuraldır.

Örnekte $\begin{bmatrix}5 & -1\\3 & 2\end{bmatrix}$ matrisi için $a_{12}=-1$ (birinci satır, ikinci sütun) ve $a_{21}=3$ (ikinci satır, birinci sütun) olur. $a_{12}$ ile $a_{21}$'in farklı değerler olması, satır-sütun sırasının gerçekten anlam taşıdığını gösterir; sıra değiştirilirse farklı bir girdiye işaret edilmiş olur.
:::

---

## Matris Toplama

Aynı boyutlu iki matris, hücre hücre toplanır.

$$
A=
\begin{bmatrix}
a & b\\
c & d
\end{bmatrix},
\qquad
B=
\begin{bmatrix}
e & f\\
g & h
\end{bmatrix}
$$

$$
A+B=
\begin{bmatrix}
a+e & b+f\\
c+g & d+h
\end{bmatrix}
$$

::: {.notes}
Matris toplama, önceki derste kurulan vektör toplamanın doğrudan genellemesidir. Vektörlerde "aynı hizadaki bileşenleri topla" kuralı geçerliydi; matrislerde bu kural "aynı konumdaki hücreleri topla" hâline gelir. $A+B$ matrisinin $(1,1)$ girdisi, $A$'nın $(1,1)$ girdisi ile $B$'nin $(1,1)$ girdisinin toplamıdır; diğer tüm konumlar için de aynı eşleşme geçerlidir.

Bu tanımın doğal sonucu, toplamanın yalnızca aynı boyutlu ($m\times n$) matrisler arasında yapılabilmesidir — tıpkı vektör toplamada boyutların eşleşmesi gerektiği gibi, burada da hem satır hem sütun sayıları eşleşmelidir. Aksi hâlde bir hücrenin eşleşeceği karşılık bulunamaz.
:::

---

## Örnek: Grup Verilerini Güncelleme

Grupların sabahki katılımcı ve eğitmen sayıları:

$$
A=
\begin{bmatrix}
12 & 1\\
8 & 1\\
15 & 2\\
5 & 1
\end{bmatrix}
$$

Öğleden sonra eklenenler:

$$
B=
\begin{bmatrix}
3 & 0\\
6 & 1\\
2 & 0\\
4 & 0
\end{bmatrix}
$$

---

## Grup Verilerini Güncelleme: Gün Sonu

$$
A+B=
\begin{bmatrix}
15 & 1\\
14 & 2\\
17 & 2\\
9 & 1
\end{bmatrix}
$$

::: {.notes}
Bu tablo, önceki derste vektörlerle çözdüğümüz "eğitime katılan gruplar" örneğinin matris versiyonudur. Katılımcı sütunundaki toplam ($15,14,17,9$) tam olarak o dersteki $g+e=\begin{bmatrix}15\\14\\17\\9\end{bmatrix}$ sonucuyla örtüşür — yalnızca artık yanına bir sütun daha (eğitmen sayısı) eklenmiştir.

Eğitmen sütunu da aynı hücre hücre toplama kuralıyla hesaplanır: $1+0=1$, $1+1=2$, $2+0=2$, $1+0=1$. Her sütun kendi içinde, diğer sütundan bağımsız olarak toplanır; bu, matris toplamanın "her sütun kendi vektör toplamasını yapıyor" şeklinde de okunabileceğini gösterir.
:::

---

## Matris-Vektör Çarpımı

$$
A=
\begin{bmatrix}
a & b\\
c & d
\end{bmatrix},
\qquad
v=
\begin{bmatrix}
x\\
y
\end{bmatrix}
$$

$$
Av=
\begin{bmatrix}
a & b\\
c & d
\end{bmatrix}
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
\begin{bmatrix}
ax+by\\
cx+dy
\end{bmatrix}
$$

Her satır, vektörle iç çarpım yapar.

::: {.notes}
Matris-vektör çarpımının en temiz açıklaması, önceki derste kurduğumuz iç çarpım kavramıyla gelir: sonuç vektörünün her bileşeni, matrisin ilgili satırı ile $v$ vektörünün iç çarpımıdır. $Av$'nin birinci bileşeni $A$'nın birinci satırı $\begin{bmatrix}a&b\end{bmatrix}$ ile $v=\begin{bmatrix}x\\y\end{bmatrix}$'nin iç çarpımı olan $ax+by$'dir; ikinci bileşen de aynı mantıkla $A$'nın ikinci satırıyla $v$'nin iç çarpımı olan $cx+dy$'dir.

Bu bakış açısı, matris-vektör çarpımını ezberlenecek ayrı bir kural olmaktan çıkarır: matrisin her satırı, kendi başına bir vektördür ve çarpım, bu satır-vektörlerin $v$ ile tek tek iç çarpımından oluşur.
:::

---

## Örnek: Tam Açılım

$$
A=
\begin{bmatrix}
2 & -1\\
3 & 4
\end{bmatrix},
\qquad
v=
\begin{bmatrix}
5\\
2
\end{bmatrix}
$$

$$
Av=
\begin{bmatrix}
2 & -1\\
3 & 4
\end{bmatrix}
\begin{bmatrix}
5\\
2
\end{bmatrix}
=
\begin{bmatrix}
2\cdot5+(-1)\cdot2\\
3\cdot5+4\cdot2
\end{bmatrix}
$$

$$
=
\begin{bmatrix}
10-2\\
15+8
\end{bmatrix}
=
\begin{bmatrix}
8\\
23
\end{bmatrix}
$$

::: {.notes}
$A=\begin{bmatrix}2&-1\\3&4\end{bmatrix}$ ve $v=\begin{bmatrix}5\\2\end{bmatrix}$ için çarpım iki iç çarpımla hesaplanır. Birinci satır $\begin{bmatrix}2&-1\end{bmatrix}$ ile $v$'nin iç çarpımı $2\cdot5+(-1)\cdot2=10-2=8$; ikinci satır $\begin{bmatrix}3&4\end{bmatrix}$ ile $v$'nin iç çarpımı $3\cdot5+4\cdot2=15+8=23$ verir. Sonuç $Av=\begin{bmatrix}8\\23\end{bmatrix}$'dir.

Bu iki adımlı şablon — her satır için ayrı ayrı iç çarpım, sonra bu değerleri sütun olarak sırala — matrisin boyutu ne olursa olsun aynı kalır ve ilerleyen tüm matris uygulamalarının temelini oluşturur.
:::

---

## Uygulama: Grup Maliyeti

Her katılımcı için 100 TL, her eğitmen için 500 TL maliyet olsun:

$$
c=
\begin{bmatrix}
100\\
500
\end{bmatrix}
$$

Grup verisi (gün sonu):

$$
A=
\begin{bmatrix}
15 & 1\\
14 & 2\\
17 & 2\\
9 & 1
\end{bmatrix}
$$

---

## Grup Maliyeti: Sonuç

$$
Ac=
\begin{bmatrix}
15\cdot100+1\cdot500\\
14\cdot100+2\cdot500\\
17\cdot100+2\cdot500\\
9\cdot100+1\cdot500
\end{bmatrix}
=
\begin{bmatrix}
2000\\
2400\\
2700\\
1400
\end{bmatrix}
$$

::: {.notes}
Bu örnek, matris-vektör çarpımının soyut $Av$ formülünün somut bir uygulamasıdır ve az önceki matris toplama örneğinin doğrudan devamıdır: $A$, gün sonu grup verilerini (katılımcı, eğitmen) taşıyan tam olarak aynı matristir. $c=\begin{bmatrix}100\\500\end{bmatrix}$ vektörü ise her kişi türünün maliyetini taşır.

$Ac$ çarpımında her satır, kendi grubunun verisiyle maliyet vektörünün iç çarpımını hesaplar. Birinci grup için $15\cdot100+1\cdot500=1500+500=2000$ TL, üçüncü grup için $17\cdot100+2\cdot500=1700+1000=2700$ TL bulunur. Burada matris-vektör çarpımı artık soyut bir işlem değil, "her satırdan (grup) tek bir özet sayı (toplam maliyet) üretme" işidir — matrisin satırları veriyi, vektör ise bu veriyi tek bir sonuca indirgeyen ağırlıkları taşır.
:::

---

## Boyut Uyumu

Matris-vektör çarpımı için:

$$
(m\times n)\text{ matris} \times (n\times1)\text{ vektör}
$$

Sonuç:

$$
(m\times1)\text{ vektör}
$$

Örnek:

$$
\begin{bmatrix}
1 & 2 & 3\\
4 & 5 & 6
\end{bmatrix}
\begin{bmatrix}
7\\8\\9
\end{bmatrix}
$$

Bu işlem tanımlıdır ve sonuç 2 boyutlu vektördür.

::: {.callout-warning}
## Dikkat

Matrisin sütun sayısı, vektörün bileşen sayısına eşit olmalıdır.
:::

::: {.notes}
Matris-vektör çarpımının her satırı, matrisin ilgili satırıyla vektörün iç çarpımı olduğu için, bu iç çarpımın tanımlı olması gerekir. İç çarpım yalnızca aynı boyutlu vektörler arasında tanımlı olduğundan, matrisin her satırındaki eleman sayısı (yani sütun sayısı $n$) vektörün bileşen sayısına eşit olmak zorundadır.

$(m\times n)$ boyutlu bir matrisin $n$ sütunu, çarpılacak vektörün $n$ bileşenine karşılık gelir; sonuç ise matrisin $m$ satırından, yani $(m\times1)$ boyutlu bir vektörden oluşur. Örnekte $2\times3$ boyutlu matris, $3$ bileşenli bir vektörle çarpılabilir ve sonuç $2$ bileşenli bir vektör olur — matrisin satır sayısı ile sütun sayısı burada farklı rol oynar: sütun sayısı vektörle eşleşme koşulunu, satır sayısı ise sonucun boyutunu belirler.
:::

---

## Matris Bir Dönüşümdür

Matris bir vektörü başka bir vektöre dönüştürür.

$$
v \longmapsto Av
$$

Bu yüzden matrisi **lineer dönüşüm** olarak okuyabiliriz.

Örnek dönüşümler:

- Ölçekleme
- Döndürme
- Yansıtma
- Bileşenlerin yerini değiştirme
- Boyut değiştirme

::: {.notes}
Matrisin sayısal görünümü (satır-sütun tablosu) ile işlevi (bir dönüşüm) arasında ayrım yapmak önemlidir. $v\mapsto Av$ gösterimi, matrisi bir girdi vektörü alıp bir çıktı vektörü üreten bir kural olarak tanımlar — tıpkı bir fonksiyonun bir sayıyı alıp başka bir sayı üretmesi gibi, ama burada girdi ve çıktı vektördür.

Ölçekleme, döndürme, yansıtma, bileşenlerin yerini değiştirme ve boyut değiştirme, hepsi bu dönüşüm fikrinin somut örnekleridir. Az sonra her birinin matris karşılığını göreceğiz; ortak nokta, hepsinin $Av$ biçiminde tek bir çarpımla ifade edilebilmesidir.
:::

---

## Birim Matris

Birim matris vektörü değiştirmez.

$$
I=
\begin{bmatrix}
1 & 0\\
0 & 1
\end{bmatrix}
$$

$$
I
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
\begin{bmatrix}
1\cdot x+0\cdot y\\
0\cdot x+1\cdot y
\end{bmatrix}
=
\begin{bmatrix}
x\\
y
\end{bmatrix}
$$

Yani:

$$
Iv=v
$$

::: {.notes}
Birim matris $I=\begin{bmatrix}1&0\\0&1\end{bmatrix}$, herhangi bir vektörü değiştirmeden bırakan matristir: $I\begin{bmatrix}x\\y\end{bmatrix}=\begin{bmatrix}1\cdot x+0\cdot y\\0\cdot x+1\cdot y\end{bmatrix}=\begin{bmatrix}x\\y\end{bmatrix}$. Satır-vektör iç çarpımı burada da geçerlidir; birinci satır $\begin{bmatrix}1&0\end{bmatrix}$ yalnızca $x$'i, ikinci satır $\begin{bmatrix}0&1\end{bmatrix}$ yalnızca $y$'yi seçip geri verir.

Bu davranış, sayılardaki $1$'in çarpma işlemindeki rolüne benzer: $1\cdot a=a$ nasıl $a$'yı değiştirmiyorsa, $Iv=v$ de $v$'yi değiştirmez. Birim matris bu yüzden "etkisiz eleman" olarak adlandırılır ve ilerleyen konularda ters matris tanımının referans noktası olacaktır.
:::

---

## Ölçekleme Matrisi

$$
A=
\begin{bmatrix}
2 & 0\\
0 & 3
\end{bmatrix}
$$

$$
A
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
\begin{bmatrix}
2x\\
3y
\end{bmatrix}
$$

Yorum:

- x bileşeni 2 ile ölçeklenir
- y bileşeni 3 ile ölçeklenir

Örnek:

$$
A
\begin{bmatrix}
1\\
2
\end{bmatrix}
=
\begin{bmatrix}
2\\
6
\end{bmatrix}
$$

::: {.notes}
Köşegen üzerinde farklı sayılar taşıyan bir matris, her bileşeni bağımsız olarak ölçekler. $A=\begin{bmatrix}2&0\\0&3\end{bmatrix}$ için $A\begin{bmatrix}x\\y\end{bmatrix}=\begin{bmatrix}2x\\3y\end{bmatrix}$ olur: $x$ bileşeni her zaman $2$ ile, $y$ bileşeni her zaman $3$ ile çarpılır, ve köşegen dışındaki sıfırlar bileşenlerin birbirine karışmasını engeller.

Sayısal örnekte $\begin{bmatrix}1\\2\end{bmatrix}$ vektörü $\begin{bmatrix}2\\6\end{bmatrix}$'ya dönüşür — yatay yönde $2$ kat, dikey yönde $3$ kat uzar. Ölçekleme matrisleri, birim matrisin köşegenindeki $1$'lerin farklı sayılarla değiştirilmiş hâli olarak da görülebilir; bu, matrislerin geometrik etkisini görmek için en basit örnektir.
:::

---

## Yansıtma Matrisi

x eksenine göre yansıtma:

$$
R=
\begin{bmatrix}
1 & 0\\
0 & -1
\end{bmatrix}
$$

$$
R
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
\begin{bmatrix}
x\\
-y
\end{bmatrix}
$$

Örnek:

$$
R
\begin{bmatrix}
3\\
2
\end{bmatrix}
=
\begin{bmatrix}
3\\
-2
\end{bmatrix}
$$

::: {.notes}
Yansıtma matrisi, ölçekleme matrisinin özel bir hâlidir: köşegendeki katsayılardan biri $-1$'dir. $R=\begin{bmatrix}1&0\\0&-1\end{bmatrix}$ için $R\begin{bmatrix}x\\y\end{bmatrix}=\begin{bmatrix}x\\-y\end{bmatrix}$ olur — $x$ bileşeni aynen korunurken $y$ bileşeninin işareti tersine döner.

Geometrik olarak bu, vektörü x eksenine göre ayna görüntüsüne çevirir: $\begin{bmatrix}3\\2\end{bmatrix}$ vektörü $\begin{bmatrix}3\\-2\end{bmatrix}$'ye dönüşür, yani düzlemin üst yarısındaki bir nokta alt yarısına yansıtılır. Bu örnek, önceki derste gördüğümüz "negatif skaler yönü tersine çevirir" fikrinin tek bir bileşene uygulanmış hâlidir.
:::

---

## Bileşen Değiştirme Matrisi

$$
P=
\begin{bmatrix}
0 & 1\\
1 & 0
\end{bmatrix}
$$

$$
P
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
\begin{bmatrix}
y\\
x
\end{bmatrix}
$$

Örnek:

$$
P
\begin{bmatrix}
4\\
-1
\end{bmatrix}
=
\begin{bmatrix}
-1\\
4
\end{bmatrix}
$$

Bu tür matrislere permütasyon matrisi denir.

::: {.notes}
Köşegeni sıfır, köşegen dışını $1$ olan $P=\begin{bmatrix}0&1\\1&0\end{bmatrix}$ matrisi, vektörün bileşenlerinin yerini değiştirir: $P\begin{bmatrix}x\\y\end{bmatrix}=\begin{bmatrix}y\\x\end{bmatrix}$. Örnekte $\begin{bmatrix}4\\-1\end{bmatrix}$ vektörü $\begin{bmatrix}-1\\4\end{bmatrix}$'e dönüşür — birinci ve ikinci bileşen yer değiştirmiştir.

Bu tür, girdileri yalnızca yeniden sıralayan matrislere **permütasyon matrisi** denir. Genel lineer cebir dilinde kullanılan bu terim, matrisin yaptığı işi tam olarak tarif eder: hiçbir bileşeni ölçeklemez veya karıştırmaz, yalnızca konumlarını değiştirir.
:::

---

## Döndürme Matrisi

Düzlemde $\theta$ açısı kadar döndürme:

$$
R_\theta=
\begin{bmatrix}
\cos\theta & -\sin\theta\\
\sin\theta & \cos\theta
\end{bmatrix}
$$

90 derece döndürme:

$$
R_{90^\circ}=
\begin{bmatrix}
0 & -1\\
1 & 0
\end{bmatrix}
$$

$$
R_{90^\circ}
\begin{bmatrix}
1\\
0
\end{bmatrix}
=
\begin{bmatrix}
0\\
1
\end{bmatrix}
$$

::: {.notes}
Düzlemde bir vektörü $\theta$ açısı kadar döndüren genel matris $R_\theta=\begin{bmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{bmatrix}$ ile verilir. $\theta=90°$ için $\cos90°=0$ ve $\sin90°=1$ olduğundan bu matris $\begin{bmatrix}0&-1\\1&0\end{bmatrix}$'e sadeleşir.

Bu matrisi $\begin{bmatrix}1\\0\end{bmatrix}$'e uyguladığımızda $\begin{bmatrix}0\\1\end{bmatrix}$ elde ederiz — yani yatay eksendeki $e_1$ vektörü tam olarak dikey eksene, $e_2$'nin konumuna döner. Bu, $90°$'lik dönüşün geometrik olarak beklediğimiz sonuçtur ve formülün ezberlenmesinden çok, matrisin bir dönüşümü nasıl kodladığının somut bir doğrulamasıdır.
:::

---

## Matrisin Sütunları Ne Söyler?

Bir matrisin sütunları, standart baz vektörlerinin nereye gittiğini gösterir.

$$
A=
\begin{bmatrix}
2 & -1\\
3 & 4
\end{bmatrix}
$$

$$
Ae_1=
A
\begin{bmatrix}
1\\0
\end{bmatrix}
=
\begin{bmatrix}
2\\3
\end{bmatrix}
$$

$$
Ae_2=
A
\begin{bmatrix}
0\\1
\end{bmatrix}
=
\begin{bmatrix}
-1\\4
\end{bmatrix}
$$

::: {.notes}
Bir matrisin sütunları, standart baz vektörlerinin bu dönüşüm altında nereye taşındığını doğrudan gösterir. $A=\begin{bmatrix}2&-1\\3&4\end{bmatrix}$ için $Ae_1=A\begin{bmatrix}1\\0\end{bmatrix}=\begin{bmatrix}2\\3\end{bmatrix}$ bulunur — bu sonuç, tam olarak $A$'nın birinci sütunudur. Aynı şekilde $Ae_2=A\begin{bmatrix}0\\1\end{bmatrix}=\begin{bmatrix}-1\\4\end{bmatrix}$, $A$'nın ikinci sütununa eşittir.

Bu bir rastlantı değil, matris-vektör çarpımının doğrudan sonucudur: $e_1$ ile çarpınca yalnızca birinci sütun "seçilir", $e_2$ ile çarpınca yalnızca ikinci sütun seçilir. Bu, çok önemli bir lineer cebir sezgisidir: bir matrisi tanımak için tüm çarpım tablosuna bakmaya gerek yoktur, yalnızca standart baz vektörlerinin nereye gittiğini bilmek matrisin tamamını (sütunlarını) verir.
:::

---

## Matris-Matris Çarpımı

İki dönüşümü arka arkaya uygularsak, matrisleri çarparız.

$$
v \xrightarrow{B} Bv \xrightarrow{A} A(Bv)
$$

Bu:

$$
A(Bv)=(AB)v
$$

Yani $AB$ bileşik dönüşümdür.

::: {.callout-warning}
## Dikkat

$AB$ ifadesinde vektöre önce $B$, sonra $A$ etki eder.
:::

::: {.notes}
İki dönüşümü art arda uygulamak istediğimizde — önce $B$, sonra $A$ — bunu $A(Bv)$ olarak yazarız. Matris çarpımının tanımı tam olarak bu bileşik işlemi tek bir matrise sığdıracak şekilde kurulmuştur: $A(Bv)=(AB)v$. Yani $AB$ matrisi, $B$'nin ve ardından $A$'nın etkisini tek bir dönüşümde birleştirir.

Buradaki sıra kritik ayrıntıdır: $AB$ yazıldığında, vektöre önce sağdaki $B$ etki eder, sonra soldaki $A$. Bu, fonksiyon bileşkesindeki $(f\circ g)(x)=f(g(x))$ sırasına benzer — önce $g$, sonra $f$ uygulanır; matris çarpımında da soldan sağa değil, sağdan sola okuma mantığı geçerlidir.
:::

---

## Matris Çarpımı: 2x2 Örnek

$$
A=
\begin{bmatrix}
1 & 2\\
3 & 4
\end{bmatrix},
\qquad
B=
\begin{bmatrix}
0 & 1\\
1 & 0
\end{bmatrix}
$$

$$
AB=
\begin{bmatrix}
1\cdot0+2\cdot1 & 1\cdot1+2\cdot0\\
3\cdot0+4\cdot1 & 3\cdot1+4\cdot0
\end{bmatrix}
$$

$$
=
\begin{bmatrix}
2 & 1\\
4 & 3
\end{bmatrix}
$$

::: {.notes}
Matris çarpımının her girdisi, soldaki matrisin bir satırı ile sağdaki matrisin bir sütununun iç çarpımıdır. $(AB)_{11}$ değeri, $A$'nın birinci satırı $\begin{bmatrix}1&2\end{bmatrix}$ ile $B$'nin birinci sütunu $\begin{bmatrix}0\\1\end{bmatrix}$'in iç çarpımıdır: $1\cdot0+2\cdot1=2$. Aynı mantıkla $(AB)_{12}=1\cdot1+2\cdot0=1$, $(AB)_{21}=3\cdot0+4\cdot1=4$, $(AB)_{22}=3\cdot1+4\cdot0=3$ bulunur ve sonuç $AB=\begin{bmatrix}2&1\\4&3\end{bmatrix}$ olur.

Bu, matris-vektör çarpımındaki "satır ile iç çarpım" kuralının genellenmiş hâlidir: matris-matris çarpımında sağdaki matrisin her sütunu, ayrı bir vektör gibi işlenir ve soldaki matrisin satırlarıyla tek tek iç çarpımı alınır.
:::

---

## Uygulama: Gruplardan Çoklu Çıktı Üretmek

3 grup için katılımcı ve öğretmen sayıları:

$$
A=
\begin{bmatrix}
20 & 1\\
15 & 2\\
30 & 2
\end{bmatrix}
$$

Kişi başına dört farklı çıktı katsayısı (maliyet, yemek, sertifika, yoklama formu):

$$
B=
\begin{bmatrix}
100 & 1 & 1 & 1\\
500 & 1 & 1 & 1
\end{bmatrix}
$$

---

## Gruplardan Çoklu Çıktı: Sonuç

$$
AB=
\begin{bmatrix}
2500 & 21 & 21 & 21\\
2500 & 17 & 17 & 17\\
4000 & 32 & 32 & 32
\end{bmatrix}
$$

::: {.notes}
Önceki uygulamada tek bir maliyet vektörüyle ($c$) her gruptan tek bir sonuç (toplam maliyet) üretmiştik. Burada aynı fikri genelleştiriyoruz: tek bir sütun vektör yerine, dört sütunlu bir matris $B$ kullanıyoruz — her sütun ayrı bir çıktı kuralını (maliyet, yemek, sertifika, yoklama formu) taşıyor.

$A$ matrisi $3\times2$ boyutundadır: $3$ grup, $2$ temel ölçüm (katılımcı, öğretmen). $B$ matrisi $2\times4$ boyutundadır: $2$ kişi türü, $4$ çıktı kuralı. Sonuç $AB$ ise $3\times4$ boyutundadır — her grup için $4$ ayrı sonuç. Örneğin birinci grup için maliyet $20\cdot100+1\cdot500=2500$ TL, yemek/sertifika/form sayısı ise $20\cdot1+1\cdot1=21$'dir (üç çıktı da aynı katsayıyı kullandığı için eşit çıkmıştır).

Bu, matris-vektör çarpımının doğal bir genellemesidir: matris-vektör çarpımı "her satırdan tek sonuç üretme" işiydi, matris-matris çarpımı ise "her satırdan, sağdaki matrisin her sütunu için ayrı bir sonuç üretme" işidir. Birinci matris "hangi grupta kaç katılımcı ve öğretmen var?" bilgisini taşır; ikinci matris "bir katılımcı veya öğretmen her çıktı türüne ne kadar katkı yapar?" bilgisini taşır; çarpım sonucu ise her grup için dört farklı ihtiyacı tek seferde verir.
:::

---

## Çarpma Sırası Önemlidir

Genellikle:

$$
AB\neq BA
$$

Aynı örnek için:

$$
AB=
\begin{bmatrix}
2 & 1\\
4 & 3
\end{bmatrix}
$$

Ama:

$$
BA=
\begin{bmatrix}
3 & 4\\
1 & 2
\end{bmatrix}
$$

Sonuçlar farklıdır.

::: {.notes}
Aynı $A$ ve $B$ matrisleriyle $BA$ hesaplandığında $\begin{bmatrix}3&4\\1&2\end{bmatrix}$ çıkar — $AB=\begin{bmatrix}2&1\\4&3\end{bmatrix}$'ten tamamen farklı bir sonuç. Bu, matris çarpımının sayılardaki çarpmadan ($3\cdot4=4\cdot3$) temel bir farkıdır: matrisler için genellikle $AB\neq BA$.

Bunun nedeni geometrik olarak açıktır: $AB$ önce $B$ dönüşümünü, sonra $A$ dönüşümünü uygular; $BA$ ise önce $A$'yı, sonra $B$'yi uygular. İki dönüşümü farklı sırayla uygulamak genellikle farklı bir sonuç verir — tıpkı önce ceket sonra montu giymekle önce mont sonra ceketi giymenin farklı bir dış görünüm vermesi gibi.
:::

---

## Tersinirlik

Bir dönüşümü geri alabiliyorsak, matris tersinirdir.

Bir matris $A$ için ters matris $A^{-1}$ varsa:

$$
A^{-1}A=I
$$

Bu durumda:

$$
Av=w
$$

ise:

$$
v=A^{-1}w
$$

Yani dönüşüm geri çözülebilir.

::: {.notes}
Bazı dönüşümler geri alınabilir: bir vektörü $A$ ile dönüştürüp sonra tersine çeviren bir işlem uygularsak, orijinal vektöre dönebiliriz. Bu geri alma işlemini yapan matrise **ters matris** denir ve $A^{-1}$ ile gösterilir; tanımlayıcı özelliği $A^{-1}A=I$'dir — yani $A$'nın ardından $A^{-1}$ uygulamak, hiçbir şey yapmamış (birim matris) etkisine eşittir.

Bu kavram pratik olarak şu işe yarar: $Av=w$ biçiminde bir ilişkiden $w$ biliniyorsa ve $v$ aranıyorsa, her iki tarafı $A^{-1}$ ile çarparak $v=A^{-1}w$ elde edilir. Ters matrisin nasıl hesaplandığı burada işlenmeyecek; önemli olan, tersinir bir matrisin temsil ettiği dönüşümün kayıpsız ve geri çözülebilir olduğu fikridir — ölçekleme, döndürme ve permütasyon matrislerinin hepsi tersinirdir, çünkü hiçbiri bilgi kaybetmez.
:::

---

## Mini Kontrol

$$
A=
\begin{bmatrix}
1 & 2\\
0 & -1
\end{bmatrix},
\qquad
v=
\begin{bmatrix}
3\\
4
\end{bmatrix}
$$

$$
Av=?
$$

Çözüm:

$$
Av=
\begin{bmatrix}
1\cdot3+2\cdot4\\
0\cdot3+(-1)\cdot4
\end{bmatrix}
=
\begin{bmatrix}
11\\
-4
\end{bmatrix}
$$

::: {.notes}
$A=\begin{bmatrix}1&2\\0&-1\end{bmatrix}$ ve $v=\begin{bmatrix}3\\4\end{bmatrix}$ için çarpım yine satır-vektör iç çarpımıyla hesaplanır. Birinci satır $\begin{bmatrix}1&2\end{bmatrix}$ ile $v$'nin iç çarpımı $1\cdot3+2\cdot4=3+8=11$; ikinci satır $\begin{bmatrix}0&-1\end{bmatrix}$ ile $v$'nin iç çarpımı $0\cdot3+(-1)\cdot4=-4$ verir. Sonuç $Av=\begin{bmatrix}11\\-4\end{bmatrix}$'tür.

Bu hesap, dersin başından beri kurulan tek bir mekanizmanın (her satır için ayrı iç çarpım) tekrarından ibarettir; matrisin boyutu veya içeriği değişse de uygulanan yöntem aynı kalır.
:::

---

## Özet

1. Matris, satır ve sütunlardan oluşan sayı tablosudur — birden çok ölçümü grup grup düzenler
2. Aynı boyutlu matrisler hücre hücre toplanır
3. Matrisler vektörleri dönüştüren lineer dönüşümler olarak okunabilir
4. Matris-vektör çarpımı satırlarla iç çarpım yapar
5. Birim matris vektörü değiştirmez
6. Ölçekleme, yansıtma, döndürme ve permütasyon matrislerle temsil edilebilir
7. Matris çarpımı bileşik dönüşümü verir ve sıra genellikle önemlidir

::: {.notes}
Bu bölümde matrisi sayı tablosu olmaktan çıkarıp bir dönüşüm olarak ele aldık. Grup örneği üzerinden ilerleyen bir çizgi izledik: önce vektördeki tek ölçümü (katılımcı sayısı) matriste birden çok ölçüme (katılımcı, eğitmen, cihaz) genişlettik; matris toplamayı, vektör toplamanın hücre hücre karşılığı olarak kurduk; matris-vektör çarpımını, her gruptan tek bir özet sayı (toplam maliyet) üreten bir işlem olarak somutlaştırdık; son olarak matris-matris çarpımını, her gruptan aynı anda birden fazla sonuç üreten bir genelleme olarak gördük. Ölçekleme, yansıtma, permütasyon ve döndürme matrislerinin her biri ise matris-vektör çarpımının aynı mekanizmasıyla farklı geometrik etkiler üretti.

Özetle: vektör tek ölçümlü veri, matris çok ölçümlü veri tablosudur; matris toplama bu tabloyu güncellemek, matris-vektör çarpımı tablodan tek bir özet çıkarmak, matris-matris çarpımı ise tablodan birden fazla özeti aynı anda çıkarmak için kullanılır. Matris çarpımının iki dönüşümü art arda uygulamaya karşılık geldiğini ve bu sırada sıranın ($AB\neq BA$) önemli olduğunu da gördük.

Sonraki derse köprü: Şu ana kadar tek bir vektör uzayı üzerinde çalıştık. Birden fazla sistemi (örneğin iki ayrı vektör uzayını) birlikte, tek bir yapı içinde temsil etmek istediğimizde tensör çarpımı fikrine ihtiyaç duyarız; bu işlem, kuantum hesaplamada birden fazla kübitin ortak durumunu ifade etmenin temelidir.
:::
