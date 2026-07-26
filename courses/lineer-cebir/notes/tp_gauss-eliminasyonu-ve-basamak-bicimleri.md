---
title: "Gauss Eliminasyonu ve Basamak Biçimleri"
subtitle: "MATE 213 — İlk Öğretim Bloğu"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-25
execute:
  echo: false
---

## İhtiyaç: Rastgele Değil, Sistematik

Elementer satır işlemleri çözüm kümesini korur — ama tek başına yetmez.

$$
\text{güvenli işlemler}
\ \neq\
\text{çözüme giden yol}
$$

> Bilinmeyenleri hangi sırayla, nasıl eleyeceğiz?

::: {.notes}
Önceki derste elementer satır işlemlerinin bir sistemi çözüm kümesini değiştirmeden eşdeğer bir sisteme dönüştürdüğünü gördük. Ancak bu işlemleri rastgele uygulamak tek başına çözüme götürmez. Güvenli olmak, verimli olmakla aynı şey değildir; aynı sistem üzerinde sonsuz sayıda geçerli işlem dizisi kurulabilir, çoğu bizi çözüme yaklaştırmaz.

İhtiyaç duyduğumuz şey, bilinmeyenleri birbirinden adım adım ayıran sistematik bir stratejidir. Gauss eliminasyonunun temel fikri budur: bilinmeyenleri aşağıdaki denklemlerden sırayla eleyerek sistemi, çözümün kolayca okunabildiği eşdeğer bir biçime dönüştürmek. Her adımda elementer satır işlemleri kullanıldığı için görünüş değişir, çözüm kümesi değişmez.
:::

---

## Önce Denklem Düzeyinde

$$
\begin{aligned}
x_1+x_2+x_3&=6,\\
2x_1-x_2+x_3&=3,\\
-x_1+2x_2+3x_3&=12
\end{aligned}
$$

İlk denklemi kullanıp alt iki denklemden $x_1$'i çıkaralım:

$$
R_2\leftarrow R_2-2R_1,\qquad
R_3\leftarrow R_3+R_1
$$

::: {.notes}
Eliminasyonu önce matris kısayolu olmadan, denklem düzeyinde görmek fikri berraklaştırır. Amacımız birinci bilinmeyeni alt denklemlerden yok etmektir. İkinci denklemin ilk terimi $2x_1$ olduğu için ondan birinci denklemin iki katını çıkarırsak $x_1$ terimi kaybolur; üçüncü denklemin ilk terimi $-x_1$ olduğu için ona birinci denklemi eklersek yine $x_1$ kaybolur.

Bu iki işlem, birinci denklemin taşıdığı bilgiyi silmez; yalnız onu alt denklemlerden temizler. $R_i$ gösterimini hem denklemin tamamına hem genişletilmiş matrisin karşılık gelen satırına uygulanan işlem için kullanıyoruz. $E_i$ harfini ise elementer matrislere ayırıyoruz.
:::

---

## Satır İşlemleri ve Elementer Matrisler

$R_2\leftarrow R_2-2R_1$ işlemini yapan elementer matris:

$$
E_1=\begin{bmatrix}1&0&0\\-2&1&0\\0&0&1\end{bmatrix}.
$$

Ardışık işlemler matris çarpımıyla:

$$
A\longmapsto E_k\cdots E_2E_1A.
$$

$R_i$: satır · $E_i$: elementer matris

::: {.notes}
Satır işlemini $R_i$ ile adlandırıyoruz. Aynı işlemi birim matrise uyguladığımızda elde edilen elementer matrisi ise $E_i$ ile gösteriyoruz. Örnekte $E_1A$ çarpımı, $A$'nın ikinci satırından birinci satırının iki katını çıkarır.

İşlemler sırayla $E_1$, $E_2$, …, $E_k$ ise bileşik sonuç $E_k\cdots E_2E_1A$ olur. İlk uygulanan işlem $A$'ya en yakın çarpandır. Bu ayrım, satır etiketi ile elementer matris etiketinin birbirine karışmasını önler ve ters matris yönteminin cebirsel temelini hazırlar.
:::

---

## İleri Eliminasyon — İlk Pivot

$$
\left[\begin{array}{ccc|c}
1&1&1&6\\
2&-1&1&3\\
-1&2&3&12
\end{array}\right]
\ \xrightarrow[R_3\leftarrow R_3+R_1]{R_2\leftarrow R_2-2R_1}\
\left[\begin{array}{ccc|c}
1&1&1&6\\
0&-3&-1&-9\\
0&3&4&18
\end{array}\right]
$$

İlk pivot: birinci satırın öncü $1$'i.

::: {.notes}
Genişletilmiş matriste birinci satırın ilk sıfır olmayan elemanı, yani $1$, ilk pivottur. Pivot, kendi sütununda altındaki elemanları sıfırlamak için kullanılan öncü elemandır. İkinci satırdan birinci satırın iki katı çıkarıldığında ilk sütundaki $2$, üçüncü satıra birinci satır eklendiğinde ilk sütundaki $-1$ yok olur.

Sonuçta ilk sütunun pivot altındaki bütün elemanları sıfırlanmıştır; birinci bilinmeyen alt denklemlerden elenmiştir. Sağ taraf sütununun da işlemlere dahil edildiğine dikkat edin: $3-2\cdot6=-9$ ve $12+6=18$. Bir sonraki pivot, sağa ve aşağıya doğru kalan alt matriste aranacaktır.
:::

---

## İkinci Pivot

$$
\left[\begin{array}{ccc|c}
1&1&1&6\\
0&-3&-1&-9\\
0&3&4&18
\end{array}\right]
\ \xrightarrow{R_3\leftarrow R_3+R_2}\
\left[\begin{array}{ccc|c}
1&1&1&6\\
0&-3&-1&-9\\
0&0&3&9
\end{array}\right]
$$

::: {.notes}
İlk sütunun altında sıfırlar kurulduktan sonra, ikinci satırın ilk sıfır olmayan elemanı olan $-3$ ikinci pivottur. Üçüncü satıra ikinci satır eklendiğinde ikinci sütundaki $3$ yok olur ve sağ tarafta $18+(-9)=9$ elde edilir. Daha önce kurulmuş ilk sütun sıfırları bozulmaz, çünkü eklenen satırın ilk elemanı da sıfırdır.

Elde edilen matris üst üçgensel bir denklem sistemi taşır. Pivotlar soldan sağa ilerledikçe aşağı doğru inen bir basamak görünümü oluşur. Karşılık gelen sistem artık düzenlidir: son denklem yalnız $x_3$'ü, ikinci denklem $x_2$ ve $x_3$'ü, ilk denklem üç bilinmeyeni birlikte içerir.
:::

---

## Pivot Kavramı

Sıfır olmayan bir satırın soldan ilk sıfır olmayan elemanı = **öncü eleman** = **pivot**.

$$
\begin{bmatrix}
\boxed{2}&4&1\\
0&\boxed{-3}&5\\
0&0&\boxed{7}
\end{bmatrix}
$$

Her pivot, altındaki elemanları sıfırlamak için kullanılır.

::: {.notes}
Sıfır olmayan bir satırdaki soldan ilk sıfır olmayan elemana o satırın öncü elemanı denir; Gauss eliminasyonu bağlamında bu eleman genellikle pivot olarak adlandırılır. Örnek matriste pivotlar $2$, $-3$ ve $7$'dir.

Eliminasyon sırasında bir pivot, aynı sütunda kendisinin altındaki elemanları sıfırlamak için kullanılır. Az önceki örnekte önce $1$ pivotu altındaki $2$ ve $-1$'i, sonra $-3$ pivotu altındaki $3$'ü sıfırladı. Bu işlem ilerledikçe bilinmeyenler alt denklemlerden sırayla elenir. Pivotların değerinin ne olduğu değil, konumları ve sıfır olmamaları önemlidir.
:::

---

## Geriye Doğru Yerine Koyma

$$
\begin{aligned}
3x_3&=9 &&\Rightarrow x_3=3,\\
-3x_2-x_3&=-9 &&\Rightarrow x_2=2,\\
x_1+x_2+x_3&=6 &&\Rightarrow x_1=1.
\end{aligned}
$$

$$
\boxed{x=(1,2,3)^T}
$$

::: {.notes}
İleri eliminasyon tamamlandığında çözüm henüz her satırdan doğrudan okunmaz; fakat basamak yapısı çözümün sırasını verir. En alttaki denklem tek bilinmeyenlidir: $3x_3=9$ doğrudan $x_3=3$ verir. Bu değer bir üst denkleme yerleştirilir: $-3x_2-3=-9$ denkleminden $x_2=2$ bulunur. Son olarak her iki değer birinci denkleme konularak $x_1=1$ elde edilir.

Son denklemden başlayıp bulunan değerleri üst denklemlerde kullanmaya geriye doğru yerine koyma denir. Gauss eliminasyonunun temel akışı böylece "ileri eliminasyon, sonra geriye doğru yerine koyma" olur. Bulunan çözüm başlangıç denklemlerinden birine değil, hepsine yerleştirilerek doğrulanır; örneğin ilk denklem $1+2+3=6$ verir.
:::

---

## Basamak Yapısı: Merdiven

$$
\begin{array}{cccc}
\boxed{1}&1&1&6\\
0&\boxed{-3}&-1&-9\\
0&0&\boxed{3}&9
\end{array}
$$

Her satırın pivotu, üstteki satırın pivotundan **daha sağda**.

> Aşağı indikçe sağa kayan bir merdiven.

::: {.notes}
Eliminasyon sonunda elde edilen matriste, sıfır olmayan her satırın pivotu üstündeki satırın pivotundan daha sağda bulunur. Bu yapı aşağıya doğru sağa ilerleyen bir merdiveni andırır; adı buradan gelir.

Merdiven görünümü rastlantı değildir: her pivot bir bilinmeyeni "sabitler" ve altındaki denklemlerden onu eler, böylece alt denklemler giderek daha az bilinmeyen içerir. En üstteki denklem en çok, en alttaki en az bilinmeyeni taşır. Bu düzen geriye doğru yerine koymayı mümkün kılan yapıdır ve bir sonraki adımda bu biçimi kesin koşullarla tanımlayacağız.
:::

---

## Satır Basamak Biçimi — REF

Bir matris **REF** ise:

1. Tamamen sıfır satırlar en alttadır.
2. Her pivot, üstteki pivottan daha sağdadır.
3. Her pivotun altı sıfırdır.

$$
\begin{bmatrix}
2&1&-3&4\\
0&5&2&1\\
0&0&7&3\\
0&0&0&0
\end{bmatrix}
\ \checkmark
\qquad
\begin{bmatrix}
1&2&3\\
0&0&4\\
0&5&6
\end{bmatrix}
\ \times
$$

::: {.notes}
Bir matris üç koşulu sağlıyorsa satır basamak biçimindedir (REF): sıfır satırlar en altta bulunur, her sıfır olmayan satırın pivotu üstündekinden daha sağdadır ve her pivotun altındaki elemanlar sıfırdır. Soldaki örnek bu koşulları sağlar; pivotlar aşağı doğru sağa ilerler ve her pivotun altı temizdir.

Sağdaki örnek REF değildir: üçüncü satırın pivotu ($5$), ikinci satırın pivotunun ($4$) solunda kalır; merdiven düzeni bozulmuştur. REF tek bir sayısal görünüş değildir — koşulları sağlayan birçok eşdeğer matris vardır. Pivotların $1$ olması gerekmez ve pivotların üstünde sıfır olmayan elemanlar bulunabilir. Gauss eliminasyonunun ileri aşamasının hedefi, matrisi herhangi bir REF biçimine getirmektir.
:::

---

## Gauss Eliminasyonu — Genel Yaklaşım

$$
\left[\begin{array}{ccc|c}
*&*&*&*\\
*&*&*&*\\
*&*&*&*
\end{array}\right]
\longrightarrow
\left[\begin{array}{ccc|c}
*&*&*&*\\
0&*&*&*\\
0&0&*&*
\end{array}\right]
$$

1. Soldan pivot seç → 2. altını sıfırla → 3. sağ-alt kısma geç → 4. tekrarla → 5. REF → 6. geriye yerine koy.

::: {.notes}
Gauss eliminasyonu, elementer satır işlemleri kullanarak bir matrisi satır basamak biçimine dönüştüren sistematik yöntemdir. Genel yaklaşım şudur: soldan başlayarak uygun bir sıfır olmayan eleman pivot seçilir, pivot kullanılarak aynı sütundaki alt elemanlar sıfırlanır, bir sonraki satır ve sütuna geçilir ve aynı işlem kalan alt matris üzerinde tekrarlanır. Satır basamak biçimine ulaşıldığında ileri eliminasyon tamamlanır; çözüm gerekiyorsa geriye doğru yerine koyma uygulanır.

Şematik gösterimdeki $*$ işaretleri sıfır olmak zorunda olmayan değerlerdir. İlk pivotla birinci bilinmeyen alt denklemlerden, sonraki pivotla ikinci bilinmeyen daha aşağıdaki denklemlerden elenir. Her adımda elementer satır işlemleri kullanıldığından çözüm kümesi bütün süreç boyunca değişmez.
:::

---

## Pivot Konumunda Sıfır Bulunursa

$$
\left[\begin{array}{cc|c}
0&2&4\\
3&1&5
\end{array}\right]
\ \xrightarrow{R_1\leftrightarrow R_2}\
\left[\begin{array}{cc|c}
3&1&5\\
0&2&4
\end{array}\right]
$$

> Aday sıfırsa dur değil — altta uygun satır varsa yer değiştir.

::: {.notes}
Eliminasyon sırasında pivot olarak kullanmak istediğimiz konumda sıfır bulunabilir. Bu, yöntemin durduğu anlamına gelmez. Örnekteki matrisin ilk konumundaki eleman sıfırdır; ancak aynı sütunda altta sıfır olmayan bir eleman ($3$) vardır. Satır değiştirme işlemi çözüm kümesini koruduğu için iki satırı yer değiştirerek sıfır olmayan elemanı pivot konumuna getirebiliriz.

Eğer pivot sütununda aşağıdaki bütün elemanlar da sıfırsa, o sütunda pivot kurulamaz ve bir sonraki sütuna geçilir. Bu ikinci durum, ilerleyen konularda serbest değişkenlerin ortaya çıkmasına yol açacaktır. Şimdilik önemli olan, sıfır bir aday karşısında önce alt satırlara bakıp uygun bir satır varsa yer değiştirmektir.
:::

---

## İndirgenmiş Satır Basamak Biçimi — RREF

REF koşullarına ek olarak:

1. Her pivot $1$'dir.
2. Pivot, sütunundaki tek sıfır olmayan elemandır (üstü de sıfır).

$$
\left[\begin{array}{ccc|c}
1&0&0&1\\
0&1&0&2\\
0&0&1&3
\end{array}\right]
\quad\Rightarrow\quad
x_1=1,\ x_2=2,\ x_3=3
$$

::: {.notes}
Satır işlemlerine REF'ten sonra devam edilebilir. Pivotlar $1$ yapılır ve her pivotun yalnız altı değil üstü de sıfırlanırsa indirgenmiş satır basamak biçimi (RREF) elde edilir. Bir matrisin RREF olması için üç koşul gerekir: matris satır basamak biçiminde olmalı, her pivot $1$ olmalı ve her pivot bulunduğu sütundaki tek sıfır olmayan eleman olmalıdır.

RREF biçiminde çözüm doğrudan okunur; örnekte katsayı kısmı birim matrise dönüştüğü için sağ taraf doğrudan çözümü verir. Önemli bir fark: her matrisin RREF biçimi tektir, oysa REF biçimi tek değildir — farklı güvenli işlem yolları farklı REF matrisleri üretebilir. Buna rağmen bütün REF biçimleri aynı çözüm kümesini ve aynı pivot sayısını taşır.
:::

---

## Gauss–Jordan Eliminasyonu

$$
\left[\begin{array}{ccc|c}
1&1&1&6\\
0&-3&-1&-9\\
0&0&3&9
\end{array}\right]
\longrightarrow
\left[\begin{array}{ccc|c}
1&0&0&1\\
0&1&0&2\\
0&0&1&3
\end{array}\right]
$$

REF'ten devam: pivotları $1$ yap, üstlerini de sıfırla.

::: {.notes}
Gauss–Jordan yöntemi ileri eliminasyonla yetinmez. REF biçimine ulaştıktan sonra pivotlar $1$ yapılır ve her pivotun üstündeki elemanlar da sıfırlanır; böylece katsayı kısmı mümkün olan en sade basamak biçimine, yani RREF'e ulaşır.

Bu ek işlemler, geriye doğru yerine koymayı matris işlemlerinin içine taşır: çözüm ayrı bir hesap adımı olmadan doğrudan sağ taraftan okunur. Özellikle serbest değişkenli sistemlerde RREF, temel ve serbest değişkenler arasındaki ilişkiyi açık biçimde gösterdiği için tercih edilir. İşlemleri RREF'e kadar sürdüren yönteme Gauss–Jordan eliminasyonu denir.
:::

---

## Gauss ve Gauss–Jordan

| Gauss | Gauss–Jordan |
|---|---|
| İleri eliminasyon | İleri + geri eliminasyon |
| Sonuç REF | Sonuç RREF |
| Geriye yerine koyma gerekir | Çözüm doğrudan okunur |
| Genellikle daha az işlem | Daha standart son biçim |

::: {.notes}
İki yöntem aynı elementer satır işlemlerini kullanır ve her ikisi de çözüm kümesini korur. Ayrıldıkları tek nokta, işlemlerin nerede durdurulduğudur. Gauss yöntemi satır basamak biçiminde durur ve çözümü geriye doğru yerine koymayla bulur; Gauss–Jordan pivot sütunlarını tamamen temizleyerek RREF'e ulaşır ve çözümü doğrudan okur.

Tek bir sayısal sistemi elde çözmek için Gauss çoğu zaman daha ekonomiktir, çünkü daha az işlem gerektirir. RREF ise çözüm yapısını, serbest değişkenleri ve ileride tanımlanacak temel çözüm sistemlerini incelemek için daha açıklayıcıdır. Hangisinin seçileceği amaca bağlıdır: hızlı sayısal çözüm mü, yapısal analiz mi?
:::

---

## Denklem Bağımlılığına İlk Bakış

$$
\begin{aligned}
x+y&=3,\\
2x+2y&=6
\end{aligned}
\qquad \text{2. denklem}=2(\text{1. denklem})
$$

$$
\left[\begin{array}{cc|c}1&1&3\\2&2&6\end{array}\right]
\ \xrightarrow{R_2\leftarrow R_2-2R_1}\
\left[\begin{array}{cc|c}1&1&3\\0&0&0\end{array}\right]
$$

> $0=0$ satırı yeni bilgi getirmez.

::: {.notes}
Bazen bir denklem, diğerlerinin taşıdığı bilginin dışında yeni bir kısıt getirmez. Örnekte ikinci denklem birinci denklemin iki katıdır. $R_2\leftarrow R_2-2R_1$ işlemi uygulandığında ikinci satır tamamen sıfırlanır ve $0=0$ satırı ortaya çıkar. Bu satır bütün $(x,y)$ değerleri için doğrudur; yani hiçbir kısıt getirmez.

Eliminasyon böylece sistemde hangi denklemlerin gerçekten yeni bilgi taşıdığını görünür hâle getirir. Ortaya çıkan sıfır satırı, denklemler arasında bir lineer ilişki bulunduğunu gösterir. Bu yapı ileride, denklemlerin veya vektörlerin birbirinden bağımsız bilgi taşıyıp taşımadığını inceleyen lineer bağımsızlık kavramıyla sistematik biçimde ifade edilecektir.
:::

---

## Çelişki Satırı

$$
\left[\begin{array}{ccc|c}
1&2&-1&3\\
2&4&1&9\\
-1&-2&2&-3
\end{array}\right]
\longrightarrow
\left[\begin{array}{ccc|c}
1&2&-1&3\\
0&0&3&3\\
0&0&0&\boxed{3}
\end{array}\right]
$$

Son satır: $0=3$ → **çözüm yok.**

::: {.notes}
$R_2\leftarrow R_2-2R_1$ ve $R_3\leftarrow R_3+R_1$ işlemleri matrisi ara biçime getirir; ikinci ve üçüncü satırlar aynı sütunda pivot adayı taşıdığı için bir satır değişimiyle eliminasyon sürdürülür ve son satır $0\ 0\ 0\mid 3$ biçimine gelir. Bu satır $0x_1+0x_2+0x_3=3$, yani $0=3$ anlamına gelir.

Hiçbir $x$ değeri $0=3$ eşitliğini sağlayamaz; dolayısıyla sistemin çözümü yoktur, çözüm kümesi boştur. Genel olarak $[\,0\ \cdots\ 0\mid c\,]$ biçiminde ve $c\neq0$ olan bir satır çelişki satırıdır ve sistemin tutarsız olduğunu gösterir. Bu örnek, eliminasyonun yalnız değer bulmak için değil, çözümün var olup olmadığını sınamak için de kullanıldığını gösterir.
:::

---

## Basamak Biçimi Hangi Soruları Açıyor?

$$
\begin{array}{c}
\text{Çelişki satırı var mı?}\ (0=c,\ c\neq0)\\[2mm]
\downarrow\ \text{yoksa}\\[2mm]
\text{Hangi sütunlarda pivot var?}\\[2mm]
\downarrow\\[2mm]
\text{Pivotsuz sütun (serbest değişken) var mı?}
\end{array}
$$

::: {.notes}
Eliminasyonun sonucu yalnız çözüm değerlerini değil, çözüm kümesinin yapısını da gösterir. İlk sorulacak soru, $[\,0\ \cdots\ 0\mid c\,]$ ve $c\neq0$ biçiminde bir çelişki satırının bulunup bulunmadığıdır. Böyle bir satır varsa sistem tutarsızdır ve çözüm kümesi boştur. Çelişki yoksa sistem tutarlıdır ve en az bir çözümü vardır.

Tutarlı bir sistemde pivot sütunları temel değişkenleri, pivotsuz sütunlar ise serbest değişkenleri belirler. Serbest değişken yoksa tek çözüm, varsa sonsuz çözüm bulunur. Bu üç aşamalı karar — önce çelişki, sonra pivot sütunları, sonra serbest değişkenler — bir sonraki konunun, çözüm durumları ve rankın çıkış noktasıdır.
:::

---

## Kısa Uygulama

$$
\left[\begin{array}{ccc|c}
1&2&-1&3\\
2&5&1&8\\
0&1&3&5
\end{array}\right]
$$

1. İlk pivotun altını sıfırlayın.
2. Bir REF biçimi elde edin.
3. Pivot ve pivotsuz sütunları işaretleyin.
4. Çözüm durumuna karar verin; çözüm varsa geriye yerine koymayla bulun.

::: {.notes}
Bu sistemi adım adım çözelim. İlk pivot birinci satırdaki $1$'dir; yalnız ikinci satırın ilk elemanı sıfır değildir, o yüzden tek işlem gerekir: $R_2\leftarrow R_2-2R_1$. Bu, ikinci satırı $0\ 1\ 3\mid 2$ yapar. Üçüncü satır zaten ilk sütunda sıfır taşıdığı için değişmez.

İkinci pivot ikinci satırdaki $1$'dir; altındaki üçüncü satırın ikinci elemanı da $1$ olduğundan $R_3\leftarrow R_3-R_2$ uygulanır ve üçüncü satır $0\ 0\ 0\mid 3$ biçimine gelir. Bu bir çelişki satırıdır: $0=3$. Dolayısıyla bu sistemin çözümü yoktur. Uygulama, eliminasyonun sonunda her zaman değer bulunmayabileceğini; önce çelişki satırının kontrol edilmesi gerektiğini hatırlatır. Öğrenciler farklı bir sağ taraf değeriyle (örneğin son satır $\mid 0$ olsaydı) sistemin tutarlı hâle geleceğini de tartışabilir.
:::

---

## Sık Yapılan Hatalar

1. Satır işlemlerini amaçsız, yalnız sıfır üretmek için uygulamak.
2. İşlemi satırın yalnız bir kısmına uygulamak (sağ taraf dahil değil).
3. Sıfır bir elemanı pivot olarak kullanmaya çalışmak.
4. Pivotların mutlaka $1$ olması gerektiğini düşünmek (REF'te gerekmez).
5. Gauss ile Gauss–Jordan'ı aynı işlem sanmak.

::: {.notes}
Birinci hata, Gauss eliminasyonunda amacın mümkün olduğunca çok sıfır üretmek olduğunu sanmaktır; oysa her pivot belirli bir bilinmeyeni alt denklemlerden elemek için kullanılır, sıfırlar bu amacın sonucudur. İkinci hata, elementer satır işlemini genişletilmiş matrisin bütün satırına, sağ taraf sütunu dahil, uygulamamaktır.

Üçüncü hata sıfır bir elemanı pivot yapmaya çalışmaktır; sıfırla bölme yapılamayacağı için önce uygun bir alt satırla yer değiştirmek gerekir. Dördüncü hata, satır basamak biçiminde pivotların $1$ olması gerektiğini sanmaktır; pivotların $1$ olması yalnız RREF için gereken ek koşuldur. Beşinci hata iki yöntemi karıştırmaktır: ikisi de aynı işlemleri kullanır ama farklı biçimlerde durur — Gauss REF'te, Gauss–Jordan RREF'te.
:::
