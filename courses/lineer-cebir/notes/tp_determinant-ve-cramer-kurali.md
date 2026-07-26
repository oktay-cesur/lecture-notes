---
title: "Determinant ve Cramer Kuralı"
subtitle: "MATE 213 — Lineer Cebir"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-21
execute:
  echo: false
---

## Hazır Olan Yapı

$A\in\mathbb{R}^{n\times n}$ için:

$$
A\text{ tersinir}
\iff \operatorname{rank}(A)=n
\iff \operatorname{RREF}(A)=I_n
$$

Bu yapıyı tek bir skaler nasıl özetler?

::: {.notes}
Tersinirlik determinanttan önce pivot ve rank üzerinden kurulmuştur. Kare bir matrisin bütün satır ve sütunlarında pivot bulunması, dönüşümün bilgi kaybetmediğini ve geri alınabildiğini gösterir.

Determinant aynı yapıya eklenen bir skaler ölçüdür. Sıfır olup olmaması tersinirliği sınar; mutlak değeri geometrik ölçeklemeyi, işareti ise yönelim değişimini taşır.
:::

---

## Determinant Nedir?

$$
\det:\mathbb{R}^{n\times n}\longrightarrow\mathbb{R}
$$

$$
A\longmapsto\det(A)
$$

- Yalnız kare matrisler için tanımlıdır.
- Sonucu bir skalerdir.
- Matrisin kendisi veya elemanlarının toplamı değildir.

::: {.notes}
Determinant, kare matrise tek bir sayı atayan bir fonksiyondur. Bu sayı matrisin bütün bilgisini taşımaz; farklı matrisler aynı determinanta sahip olabilir. Buna rağmen tersinirlik ve geometrik ölçekleme hakkında güçlü yapısal bilgi verir.

Dikdörtgensel matrisler farklı boyutlu uzaylar arasında çalıştığı için aynı boyuttaki hacim ölçekleme oranı tek bir determinantla ifade edilmez.
:::

---

## $2\times2$ Determinant

$$
A=\begin{bmatrix}a&b\\c&d\end{bmatrix}
$$

$$
\boxed{\det(A)=ad-bc}
$$

Örnek:

$$
\det\begin{bmatrix}3&1\\2&4\end{bmatrix}=12-2=10
$$

::: {.notes}
$2\times2$ formülü ana köşegen çarpımından diğer köşegen çarpımının çıkarılmasıdır. Bu kısa formül yalnız $2\times2$ boyutuna aittir; daha büyük matrislerde köşegen çarpımlarını benzer biçimde çıkarmak genel bir yöntem değildir.

Sonucun $10$ olması matrisin tersinir olduğunu ve birim karenin alanını mutlak değerce on katına çıkardığını gösterir.
:::

---

## Geometrik Ölçekleme

$A=[a_1\ a_2]$ için:

$$
|\det(A)|=
\text{$a_1$ ve $a_2$'nin oluşturduğu paralelkenarın alanı}
$$

- $|\det(A)|>1$: alan büyür.
- $0<|\det(A)|<1$: alan küçülür.
- $\det(A)<0$: yönelim ters döner.

::: {.notes}
Birim karenin kenarları $e_1$ ve $e_2$'dir. $A$ dönüşümü bu kenarları sırasıyla matrisin sütunları $a_1$ ve $a_2$'ye gönderir. Görüntü paralelkenarının alanı determinantın mutlak değeridir.

İşaret alanın negatif olması anlamına gelmez. Negatif determinant, sıralı eksen yöneliminin bir yansıma benzeri etkiyle tersine döndüğünü gösterir.
:::

---

## Determinant Sıfırsa

$$
\det(A)=0
$$

$$
\Updownarrow
$$

Sütunların oluşturduğu $n$ boyutlu hacim çöker.

$$
\Updownarrow
$$

Sütunlar lineer bağımlıdır.

::: {.notes}
İki boyutta sütunlar aynı doğru üzerinde kaldığında paralelkenarın alanı sıfır olur. Daha yüksek boyutlarda da sütunların bağımsız bir $n$ boyutlu hacim oluşturamaması aynı çökme fikridir.

Bu geometrik kayıp, cebirsel olarak sütunların bağımlı ve rankın $n$'den küçük olmasıdır. Böyle bir dönüşüm bazı farklı girdileri aynı çıktıya gönderdiği için geri alınamaz.
:::

---

## Tersinirlik Ölçütü

$A\in\mathbb{R}^{n\times n}$ için:

$$
\boxed{A\text{ tersinir}\iff\det(A)\neq0}
$$

$$
\det(A)=0
\iff
\operatorname{rank}(A)<n
$$

::: {.notes}
Determinantın sıfırdan farklı olması tam rank, bütün sütunlarda pivot ve yalnız trivial homojen çözüm ile eşdeğerdir. Bu ölçüt tersinirliği ilk kez açıklamaz; önceden kurulan pivot yapısını tek sayı üzerinden sınar.

Determinantın sayısal büyüklüğü ters matrisin elemanlarını ya da sistem çözümünü doğrudan vermez. Tersinirlik için yalnız sıfır olup olmaması yeterlidir.
:::

---

## Aynı Determinant, Farklı Matrisler

$$
A=\begin{bmatrix}2&0\\0&3\end{bmatrix},\qquad
B=\begin{bmatrix}1&1\\0&6\end{bmatrix}
$$

$$
\det(A)=\det(B)=6
$$

Ancak $A\neq B$ ve dönüşüm etkileri farklıdır.

::: {.notes}
$A$ koordinat eksenlerini ayrı ayrı iki ve üç kat ölçekler. $B$ ise üst üçgensel yapısıyla ölçeklemeye bir kaydırma etkisi ekler. İkisi de alanı altı katına çıkarır, fakat vektörleri aynı yerlere göndermez.

Determinant matrisi tek başına tanımlayan bir kimlik numarası değildir. Matrisin belirli bir yapısal özelliğini özetleyen skalerdir.
:::

---

## Minör ve Kofaktör

$M_{ij}$: $i$. satır ve $j$. sütun silinince kalan determinant.

$$
C_{ij}=(-1)^{i+j}M_{ij}
$$

$3\times3$ işaret düzeni:

$$
\begin{bmatrix}
+&-&+\\
-&+&-\\
+&-&+
\end{bmatrix}
$$

::: {.notes}
Minör, seçilen elemanın satırı ve sütunu çıkarıldıktan sonra kalan daha küçük kare matrisin determinantıdır. Kofaktör minöre konuma bağlı işaret ekler.

İşaret düzeni sol üstte artıyla başlar ve satır-sütun boyunca dönüşümlü ilerler. Bu yapı, determinantı daha küçük determinantlara indirgemeyi sağlar.
:::

---

## Kofaktör Açılımı

Herhangi bir $i$. satır boyunca:

$$
\det(A)=\sum_{j=1}^{n}a_{ij}C_{ij}
$$

Herhangi bir $j$. sütun boyunca:

$$
\det(A)=\sum_{i=1}^{n}a_{ij}C_{ij}
$$

::: {.notes}
Determinant herhangi bir satır veya sütun boyunca açılabilir ve sonuç değişmez. Çok sayıda sıfır içeren satır ya da sütun seçmek hesaplanacak minör sayısını azaltır.

Kofaktör açılımı tanımsal ve kuramsal açıdan değerlidir. Büyük sayısal matrislerde eliminasyon temelli yöntemler genellikle daha verimlidir.
:::

---

## $3\times3$ Örnek

$$
A=\begin{bmatrix}
1&2&0\\
3&-1&2\\
0&4&1
\end{bmatrix}
$$

Birinci satır boyunca:

$$
\det(A)=
1\begin{vmatrix}-1&2\\4&1\end{vmatrix}
-2\begin{vmatrix}3&2\\0&1\end{vmatrix}
+0\begin{vmatrix}3&-1\\0&4\end{vmatrix}
$$

::: {.notes}
Açılım birinci satırın üç elemanı üzerinden yazılır ve her terim kendi kofaktör işaretini alır: $+,-,+$. Üçüncü elemanın kendisi sıfır olduğu için o terimin küçük determinantı hesaplanmadan düşer; açılım satırının bilinçli seçilmesi tam olarak bu kazancı hedefler.

Açılım satırı serbesttir. Aynı matris ikinci satır, üçüncü satır ya da herhangi bir sütun boyunca açılsaydı sonuç değişmezdi. Burada birinci satır, içinde sıfır bulunduğu için tercih edilmiştir; birinci sütun da bir sıfır taşıdığından aynı ölçüde elverişlidir.
:::

---

## $3\times3$ Örnek: Adımlar

$$
\begin{vmatrix}-1&2\\4&1\end{vmatrix}=(-1)(1)-2(4)=-9
$$

$$
\begin{vmatrix}3&2\\0&1\end{vmatrix}=3(1)-2(0)=3
$$

$$
\det(A)=1(-9)-2(3)+0=\boxed{-15}
$$

::: {.notes}
İki küçük determinant ayrı ayrı hesaplanır. Birincisinde ana köşegen çarpımı $-1$, diğer köşegen çarpımı $8$ olduğu için sonuç $-9$'dur; işaretlerin taşınmasına dikkat edilmelidir. İkincisinde alt satırda sıfır bulunduğu için hesap $3$'e iner.

Terimler birleştirilirken kofaktör işaretleri de uygulanır: birinci terim artı, ikinci terim eksi işaretlidir. Bu nedenle $-2\cdot3$ katkısı $-6$ olur ve toplam $-9-6=-15$ bulunur. Sık yapılan hata, küçük determinantların işaretlerini doğru hesaplayıp kofaktör işaretini unutmak ya da her terimi artıyla toplamaktır.

Sonucun sıfırdan farklı olması yapısal bilgi taşır: $A$ tersinirdir, rankı üçtür, sütunları lineer bağımsızdır ve $Ax=0$ yalnız trivial çözüme sahiptir. Değerin $-15$ olması ise hacmi mutlak değerce on beş katına çıkardığını ve yönelimi tersine çevirdiğini gösterir.
:::

---

## Üçgensel ve Köşegen Matrisler

$A$ üst ya da alt üçgensel ise:

$$
\boxed{\det(A)=a_{11}a_{22}\cdots a_{nn}}
$$

Bu özellik köşegen matrisler için de geçerlidir.

::: {.notes}
Üçgensel matriste köşegenin bir tarafındaki bütün elemanlar sıfırdır. Kofaktör açılımı veya eliminasyon özellikleri determinantın köşegen elemanların çarpımına indirgenmesini sağlar.

Köşegen elemanlardan biri sıfırsa determinant sıfırdır ve o sütunda tam pivot yapısı kurulamaz. Bütün köşegen elemanlar sıfırdan farklıysa üçgensel matris tersinirdir.
:::

---

## İki Uç Durum: $I_n$ ve $0_{n\times n}$

$$
\boxed{\det(I_n)=1}
\qquad
\boxed{\det(0_{n\times n})=0}
$$

$$
\det\begin{bmatrix}2&4&1\\0&-3&5\\0&0&7\end{bmatrix}=2(-3)(7)=-42
$$

::: {.notes}
Birim matris köşegen, dolayısıyla üçgenseldir; köşegen elemanlarının tamamı bir olduğu için determinantı $1\cdot1\cdots1=1$ olur. Geometrik okuma da aynı sonucu verir: birim matris hiçbir vektörü değiştirmez, bu nedenle hiçbir alanı veya hacmi ölçeklemez. Ölçekleme katsayısının bir olması, "hiç ölçeklememek" demektir.

Kare sıfır matrisi öbür uçtadır. Bütün uzayı tek bir noktaya, sıfır vektörüne gönderir; hacim bilgisinin tamamı kaybolur ve determinant sıfır olur. Bu matris hiçbir boyutta tersinir değildir.

Üçgensel örnek aradaki genel durumu gösterir: köşegen çarpımı $-42$'dir, sıfırdan farklı olduğu için matris tersinirdir ve negatif işaret yönelimin tersine döndüğünü belirtir. Köşegen elemanlardan yalnız biri sıfır olsaydı çarpım sıfırlanır ve matris tersinirliğini kaybederdi.

$\det(I)=1$ eşitliği ileride sık kullanılacaktır; $AA^{-1}=I$ ilişkisinden $\det(A)\det(A^{-1})=1$ sonucu tam olarak buradan çıkar.
:::

---

## Satır İşlemlerinin Etkisi

| Satır işlemi | Determinant etkisi |
|---|---|
| $R_i\leftrightarrow R_j$ | işaret değişir |
| $R_i\leftarrow cR_i$ | $c$ ile çarpılır |
| $R_i\leftarrow R_i+cR_j$ | değişmez |

::: {.notes}
İki satırın yer değiştirmesi yönelimi tersine çevirir. Bir satırın $c$ ile ölçeklenmesi yalnız o yöndeki uzunluk ölçeğini $c$ ile değiştirir. Bir satıra diğerinin katını eklemek ise paralel kaydırma benzeri bir etki yapar ve hacmi değiştirmez.

Eliminasyonla determinant hesaplanırken yapılan her satır işleminin etkisi ayrı izlenmelidir. Rank hesabında bu sayısal çarpanlar önemli değilken determinant hesabında doğrudan sonuca girer.
:::

---

## Eliminasyonla Determinant

Satır ekleme işlemleriyle $A$ üst üçgensel $U$ matrisine dönüştürülsün.

Satır değiştirme ve ölçekleme yoksa:

$$
\det(A)=\det(U)=\prod_{i=1}^{n}u_{ii}
$$

::: {.notes}
Bir satıra başka bir satırın katını eklemek determinantı değiştirmez. Bu işlemlerle üst üçgensel biçime ulaşıldığında determinant köşegen çarpımından bulunur.

Satır değişikliği gerekirse her değişim için işaret ters çevrilir. Bir satır ölçeklenirse kullanılan katsayı da hesaba katılır. Bu yöntem özellikle büyük matrislerde kofaktör açılımından daha az işlem üretir.
:::

---

## Temel Determinant Özellikleri

$$
\det(A^T)=\det(A)
$$

$$
\det(AB)=\det(A)\det(B)
$$

$A$ tersinir ise:

$$
\det(A^{-1})=\frac1{\det(A)}
$$

::: {.notes}
Transpoz satır ve sütun rollerini değiştirir, fakat determinantı değiştirmez. Çarpım özelliği, art arda uygulanan iki dönüşümün hacim ölçeklerinin çarpılmasını ifade eder.

$AA^{-1}=I$ ve $\det(I)=1$ olduğundan $\det(A)\det(A^{-1})=1$ elde edilir. Bu eşitlik yalnız $A$ tersinir, dolayısıyla determinantı sıfırdan farklı olduğunda kullanılabilir.
:::

---

## Skalerle Çarpma

$A\in\mathbb{R}^{n\times n}$ için:

$$
\boxed{\det(cA)=c^n\det(A)}
$$

Genel olarak $c\det(A)$ değildir.

::: {.notes}
$cA$ matrisi $A$'nın her satırını $c$ ile çarpar. Her satır ölçeklemesi determinantı bir kez $c$ ile çarptığı için toplam etki $n$ satırda $c^n$ olur.

Örneğin $2\times2$ bir matriste bütün matrisi ikiyle çarpmak alan ölçeğini $2^2=4$ katına çıkarır.
:::

---

## Toplam İçin Dağılma Yoktur

Genel olarak:

$$
\boxed{\det(A+B)\neq\det(A)+\det(B)}
$$

Örnek:

$$
A=B=I_2
$$

$$
\det(A+B)=\det(2I_2)=4\neq2
$$

::: {.notes}
Determinant matris toplaması üzerinde doğrusal bir fonksiyon değildir. $A=B=I_2$ karşı örneğinde sağ taraf $1+1=2$, sol taraf ise alanı her iki yönde iki kat ölçekleyen $2I_2$ nedeniyle $4$ olur.

Çarpım özelliği doğru olduğu için benzer görünen bir toplama özelliğinin de doğru olduğu varsayılmamalıdır.
:::

---

## Sık Yapılan Hatalar: Determinant

1. Kare olmayan bir matrisin determinantını almaya çalışmak.
2. $2\times2$ formülünde sırayı karıştırmak.
3. Kofaktör işaretlerini unutmak.
4. Determinantı matris sanmak.
5. $\det(A+B)$ için çarpımdaki gibi bir kural kullanmak.
6. $\det(cA)=c\det(A)$ yazmak.

::: {.notes}
Birinci hata hesap yöntemi eksikliğinden değil, tanımdan kaynaklanır: determinant yalnız kare matrisler için tanımlıdır, çünkü ölçtüğü şey aynı boyuttaki hacmin ölçeklenmesidir. İlk kontrol her zaman "matris kare mi?" sorusudur.

İkinci hata $ad-bc$ yerine $ab-cd$ ya da $ac-bd$ yazmaktır. Çıkarılan terim, matrisin ana köşegeni dışındaki köşegenin çarpımıdır. Üçüncü hata bütün kofaktör terimlerini artıyla toplamaktır; $+,-,+$ düzeni $(-1)^{i+j}$ çarpanından gelir ve terimlerin bir kısmının işaretini çevirir.

Dördüncü hata gösterimden doğar: $|A|$ yazımındaki dikey çizgiler matrisi çağrıştırsa da sonuç bir skalerdir. Beşinci hata $\det(AB)=\det(A)\det(B)$ eşitliğinin benzerinin toplamada da geçerli olduğunu varsayar; $A=B=I_2$ karşı örneği bunu tek adımda çürütür.

Altıncı hata en yaygın olanıdır. $cA$ matrisinde $n$ satırın her biri $c$ ile ölçeklendiği için determinant $c$ ile $n$ kez çarpılır; doğru kural $\det(cA)=c^n\det(A)$ olur. $c\det(A)$ eşitliği yalnız $n=1$ durumunda geçerlidir.
:::

---

## Cramer Kuralı İçin Koşullar

$$
Ax=b
$$

Cramer kuralı yalnızca:

1. $A$ kare ise,
2. $\det(A)\neq0$ ise

uygulanır.

::: {.notes}
Bu koşullar sistemin tek çözümlü olduğunu garanti eder. Kare olmayan ya da determinantı sıfır olan sistemlerde Cramer formüllerinin paydası ve sütun değiştirme yapısı genel bir çözüm yöntemi vermez.

Cramer kuralı kapalı formül ve kuramsal çözüm ilişkileri için değerlidir. Büyük sayısal sistemlerde Gauss eliminasyonunun yerini alan genel amaçlı bir yöntem değildir.
:::

---

## Sütun Değiştirme Matrisleri

$A_i$: $A$'nın $i$. sütunu $b$ ile değiştirilmiş matris.

$$
\boxed{x_i=\frac{\det(A_i)}{\det(A)}}
$$

::: {.notes}
$A$'nın sütunları bilinmeyenlerin katsayı örüntülerini taşır. $i$. bilinmeyeni çözmek için onun sütunu sonuç vektörü $b$ ile değiştirilir ve oluşan determinant başlangıç determinantına bölünür.

Bu sütun değiştirme, elementer sütun işlemi değildir ve bir eliminasyon adımı olarak çözüm kümesini koruma iddiası taşımaz. Cramer formülünün belirli cebirsel yapısı içinde kullanılır.
:::

---

## Cramer Örneği

$$
\begin{aligned}
2x_1+x_2&=5,\\
x_1-x_2&=1
\end{aligned}
$$

$$
A=\begin{bmatrix}2&1\\1&-1\end{bmatrix},\qquad
b=\begin{bmatrix}5\\1\end{bmatrix}
$$

$$
\det(A)=-3
$$

::: {.notes}
Katsayı matrisi karedir ve determinantı sıfırdan farklıdır; bu nedenle sistem tek çözümlüdür ve Cramer kuralı uygulanabilir. Önce ana determinantın hesaplanması, yöntemin tanımlı olup olmadığını belirler.

$x_1$ için birinci sütun, $x_2$ için ikinci sütun $b$ ile değiştirilecektir.
:::

---

## Cramer Örneği: Çözüm

$$
A_1=\begin{bmatrix}5&1\\1&-1\end{bmatrix},\qquad
\det(A_1)=-6
$$

$$
A_2=\begin{bmatrix}2&5\\1&1\end{bmatrix},\qquad
\det(A_2)=-3
$$

$$
\boxed{x_1=2,\qquad x_2=1}
$$

::: {.notes}
$x_1=\det(A_1)/\det(A)=(-6)/(-3)=2$ ve $x_2=\det(A_2)/\det(A)=(-3)/(-3)=1$ bulunur. Değerler başlangıç denklemlerinde $2(2)+1=5$ ve $2-1=1$ eşitliklerini sağlar.

İki bilinmeyenli bu örnek yöntemin mekanizmasını açıkça gösterir. Boyut büyüdükçe her bilinmeyen için ayrı determinant hesabı gerektiğinden işlem yükü hızla artar.
:::

---

## $3\times3$ Cramer Örneği

$$
\begin{aligned}
x_1+x_2+x_3&=6,\\
x_2+x_3&=5,\\
x_3&=3
\end{aligned}
\qquad
A=\begin{bmatrix}1&1&1\\0&1&1\\0&0&1\end{bmatrix},
\quad
\det(A)=1
$$

$$
\det(A_1)=1,\qquad
\det(A_2)=2,\qquad
\det(A_3)=3
$$

$$
\boxed{x_1=1,\qquad x_2=2,\qquad x_3=3}
$$

::: {.notes}
Katsayı matrisi üst üçgensel olduğu için ana determinant köşegen çarpımından hemen okunur: $1\cdot1\cdot1=1$. Sıfırdan farklı olduğundan sistem tek çözümlüdür ve Cramer kuralı uygulanabilir.

Her bilinmeyen için yalnız kendi sütunu $b=(6,5,3)^T$ ile değiştirilir, diğer sütunlar yerinde ve aynı sırada kalır. $A_1$ matrisinde birinci sütun $b$ olur, $A_2$'de ikinci sütun, $A_3$'te üçüncü sütun. Yanlış sütunu değiştirmek yöntemin en sık yapılan hatasıdır ve hesap kusursuz yürüse bile yanlış bilinmeyeni verir.

Bölme adımında payda her üç bilinmeyen için aynıdır; yalnız pay değişir. Burada payda bir olduğu için çözüm doğrudan pay determinantlarıdır: $x_1=1$, $x_2=2$, $x_3=3$. Değerler denklemlerde sağlanır: $1+2+3=6$, $2+3=5$, $3=3$.

Bu sistem geriye yerine koymayla saniyeler içinde çözülürdü. Karşılaştırma yöntemin maliyetini görünür kılar: $3\times3$ bir sistemde Cramer kuralı dört adet $3\times3$ determinant ister, $n$ büyüdükçe bu yük hızla artar. Kuralın değeri hesap hızında değil, her bilinmeyeni kapalı bir formülle ifade etmesindedir.
:::

---

## $\det(A)=0$ Ne Söylemez?

$$
\det(A)=0
$$

yalnızca $A$'nın tersinir olmadığını söyler.

$Ax=b$ sistemi:

- çözümsüz olabilir,
- sonsuz çözümlü olabilir.

::: {.notes}
Determinantın sıfır olması katsayı matrisinin rankının eksik olduğunu gösterir; fakat sağ tarafın sütun uzanımıyla uyumunu tek başına belirlemez. Tutarlılık için $\operatorname{rank}(A)$ ile $\operatorname{rank}([A\mid b])$ karşılaştırılmalıdır.

Örneğin aynı sol taraflı iki eşit denklem uyumlu sağ taraflarla sonsuz çözüm, farklı sağ taraflarla çelişki üretir. Bu nedenle “determinant sıfırsa çözüm yoktur” çıkarımı yanlıştır.
:::

---

## Gauss mu, Cramer mı?

| Gauss eliminasyonu | Cramer kuralı |
|---|---|
| kare/dikdörtgensel sistemler | yalnız kare sistemler |
| bütün çözüm durumları | yalnız $\det(A)\neq0$ |
| genel hesap yöntemi | özel kapalı formül |
| rank ve serbest değişkenleri gösterir | değişkenleri determinant oranıyla verir |

::: {.notes}
Gauss eliminasyonu çözüm yok, tek çözüm ve sonsuz çözüm durumlarının tümünü kapsar. Cramer kuralı ise tek çözümün zaten garanti edildiği özel durumda her bileşeni bir determinant oranıyla ifade eder.

Bu nedenle Cramer kuralı eliminasyonun yerine konmaz. Küçük kuramsal örneklerde, sembolik ilişkilerde ve determinantın denklem çözümüyle bağını göstermede kullanılır.
:::

---

## Kare Matriste Bağımsızlık Ölçütü

$A=[a_1\ \cdots\ a_n]\in\mathbb{R}^{n\times n}$ için:

$$
\boxed{a_1,\ldots,a_n\text{ bağımsız}
\iff\det(A)\neq0}
$$

::: {.notes}
Sütunların bağımsızlığı $Ax=0$ sisteminin yalnız trivial çözüme sahip olmasıdır. Kare matris için bu, rankın $n$ olması ve tersinirlikle eşdeğerdir. Determinantın sıfırdan farklı olması da aynı yapıyı sınar.

Bu determinant ölçütü yalnız kare biçimde, yani vektör sayısı ile bileşen boyutu eşit olduğunda doğrudan uygulanır. Dikdörtgensel bir sütun listesinin bağımsızlığı rank ve pivotlarla incelenir.
:::

---

## İlk Bloğun Ortak Haritası

$$
\begin{array}{c}
\det(A)\neq0\\
\Updownarrow\\
A\text{ tersinir}\\
\Updownarrow\\
\operatorname{rank}(A)=n\\
\Updownarrow\\
Ax=0\text{ yalnız trivial çözümlü}\\
\Updownarrow\\
A\text{ sütunları lineer bağımsız}
\end{array}
$$

::: {.notes}
Kare matrislerde determinant, tersinirlik, tam rank, homojen sistem ve sütun bağımsızlığı tek bir yapının eşdeğer ifadeleridir. Her dil farklı bir soruyu kolaylaştırır: determinant hızlı skaler test, rank pivot yapısı, homojen sistem katsayı ilişkisi, ters ise geri alma davranışı sunar.

Bu bağlantılar vektör uzayları, baz ve boyut kavramlarında daha genel bir çerçeveye taşınacaktır.
:::
