---
title: "Alt Uzay Testi"
subtitle: "MATE 213 — Lineer Cebir"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-11
execute:
  echo: false
---

## On Aksiyomu Yeniden mi?

- $W$, bilinen $V$ uzayında
- İşlemler $V$'den geliyor
- Hedef: $W$'yi sınamak
- Naif yol: on aksiyom
- Aranan: daha kısa ölçüt

::: {.notes}
Vektör uzayı on aksiyomla tanımlanır ve bu yapı yalnız $\mathbb{R}^n$ ile sınırlı değildir. Polinomlar ve matrisler de uygun toplama ve skalerle çarpma işlemleri altında vektör uzayı olabiliyor. Şimdi soru yön değiştiriyor: Bildiğimiz bir vektör uzayı $V$ içinde yaşayan bir $W$ alt kümesi, aynı işlemlerle kendi başına vektör uzayı mıdır?

Akla ilk gelen yol, on aksiyomu $W$ üzerinde yeniden denetlemektir. Bu yol doğru sonuca ulaşır, fakat gereksiz tekrar üretir. Örneğin toplamanın değişmeliliği $V$'de geçerliyse $W$'den seçilen vektörler için de geçerlidir; çünkü bu vektörler zaten $V$'nin elemanlarıdır. O hâlde üst uzaydan miras kalan özelliklerle $W$ içinde ayrıca korunması gereken özellikleri ayırmamız gerekir.
:::

---

## Üst Uzaydan Ne Kalır?

| Miras kalanlar | Kontrol edilenler |
|---|---|
| Değişme, birleşme | Sıfır vektörü |
| Dağılma kuralları | Toplamaya kapalılık |
| Birim skaler | Skalerle kapalılık |

::: {.notes}
$W$ üzerinde yeni işlemler tanımlamıyoruz; $V$'deki toplama ve skalerle çarpmayı olduğu gibi kullanıyoruz. Bu nedenle değişme, birleşme ve dağılma gibi iki tarafı da $V$ içinde anlamlı olan eşitlikler $W$ elemanları için otomatik olarak doğrudur. Birim skalerin etkisi de aynı biçimde üst uzaydan gelir.

Asıl sorun, işlemlerin sonucunun $W$'de kalıp kalmadığıdır. İki $W$ elemanını topladığımızda sonuç $V$'de mutlaka vardır, fakat $W$'nin dışına çıkabilir. Aynı risk skalerle çarpmada da bulunur; ayrıca $W$ üst uzayın sıfır vektörünü içermeyebilir. Kısa test tam olarak bu üç olasılığı denetler.
:::

---

## Alt Uzay Ölçütü

$W\subseteq V$ için:

1. $0\in W$
2. $u,v\in W\Rightarrow u+v\in W$
3. $c\in F,\ u\in W\Rightarrow cu\in W$

$$
\boxed{\text{Üç koşul sağlanırsa }W\text{ alt uzaydır.}}
$$

::: {.notes}
$V$, $F$ cismi üzerinde bir vektör uzayı olsun. $W$ alt kümesi üst uzayın sıfır vektörünü içeriyor, toplama altında kapalı kalıyor ve $F$'deki her skalerle çarpma altında kapalı kalıyorsa $V$'nin alt uzayıdır. Böylece $W$, $V$'den devraldığı işlemlerle bütün vektör uzayı aksiyomlarını sağlar.

Üç koşulun her biri farklı bir çıkış yolunu kapatır. İlk koşul toplamsal birimin içeride olmasını, ikinci koşul iki elemanın birleşmesinin dışarı taşmamasını, üçüncü koşul ise ölçeklemenin dışarı taşmamasını sağlar. Koşullardan biri bozulduğunda diğer ikisini kanıtlamak kümeyi alt uzay yapmaz; tek bir karşı örnek sonucu belirlemeye yeter.
:::

---

## Tek Koşullu Biçim

$W\neq\varnothing$ olmak üzere:

$$
u,v\in W,\quad a,b\in F
\quad\Longrightarrow\quad
au+bv\in W
$$

$$
\boxed{W\text{ lineer birleşimlere kapalıdır.}}
$$

::: {.notes}
Üç koşulu tek ifadede toplamak için $W$'nin boş olmadığını baştan belirtiriz. Ardından $W$'den seçilen herhangi iki vektörün, $F$'den seçilen herhangi iki katsayıyla kurulan lineer birleşiminin yine $W$'de kalmasını isteriz. Bu biçim, alt uzay testini daha kısa bir hesapla uygulamayı sağlar.

İfadenin üç koşulu nasıl taşıdığını katsayı seçimlerinden görebiliriz. $a=b=0$ seçimi sıfır vektörünü, $a=b=1$ seçimi toplamayı, $b=0$ seçimi de skaler katı verir. Ters yönde, toplama ve skalerle çarpmaya kapalılık önce $au$ ile $bv$'nin, sonra bunların toplamının $W$'de kalmasını sağlar. Boş olmama koşulu yazılmazsa öncül hiçbir seçim sunmaz ve önerme boş küme için de doğru sayılır; bu nedenle koşulu açıkça yazarız.
:::

---

## Testi Nasıl Kullanırız?

1. Üst uzayı belirle
2. Sıfır vektörünü dene
3. Genel elemanları seç
4. Lineer birleşimi kur
5. Tanımlayıcı koşulu doğrula

::: {.notes}
Önce $W$'nin hangi vektör uzayının içinde bulunduğunu ve skalerlerin hangi cisimden geldiğini belirleriz. Sonra sıfır vektörünü sınamak çoğu zaman en hızlı adımdır. Sıfır dışarıda kalıyorsa işlem burada biter; uzun bir kapalılık hesabına gerek kalmaz.

Sıfır koşulu geçildiğinde $W$'den özel örnekler yerine genel $u$ ve $v$ elemanları seçeriz. $au+bv$ birleşimini hesaplayıp $W$'yi tanımlayan denklem ya da özelliği sağlayıp sağlamadığına bakarız. Alt uzay olduğunu kanıtlamak için genel seçim gerekir; alt uzay olmadığını göstermek içinse koşullardan birini bozan tek bir seçim yeterlidir.
:::

---

## Örnek A: Bir Düzlem

$$
W_1=\{(x,y,z)\in\mathbb{R}^3:x+y-z=0\}
$$

$u,v\in W_1$ ve $a,b\in\mathbb{R}$.

> $au+bv$ yine $W_1$'de mi?

::: {.notes}
$W_1$, $\mathbb{R}^3$ içinde homojen bir lineer denklemle tanımlanıyor. Geometrik olarak bu denklem, orijinden geçen bir düzlem verir; fakat kararımızı çizime dayandırmayacağız. Tek koşullu ölçüt, aynı yapıyı doğrudan cebirsel olarak sınamamıza izin verir.

$u=(x_1,y_1,z_1)$ ve $v=(x_2,y_2,z_2)$ seçelim. Bu vektörlerin $W_1$'de bulunması $x_1+y_1-z_1=0$ ve $x_2+y_2-z_2=0$ eşitliklerini verir. Şimdi $au+bv$ vektörünün bileşenlerini tanımlayıcı denklemde yerine koymamız gerekiyor.
:::

---

## Örnek A: Test

$$
au+bv=(ax_1+bx_2,\ ay_1+by_2,\ az_1+bz_2)
$$

$$
\begin{aligned}
&(ax_1+bx_2)+(ay_1+by_2)-(az_1+bz_2)\\
&=a(x_1+y_1-z_1)+b(x_2+y_2-z_2)=0
\end{aligned}
$$

$$
\boxed{W_1\text{, }\mathbb{R}^3\text{ uzayının alt uzayıdır.}}
$$

::: {.notes}
Birleşimin birinci, ikinci ve üçüncü bileşenlerini $x+y-z$ ifadesine yerleştiriyoruz. Terimleri $u$ ve $v$'ye ait gruplara ayırınca iki parantez elde ediyoruz. Her parantez sıfırdır; çünkü seçtiğimiz iki vektör de $W_1$'in tanımlayıcı denklemini sağlar.

Hesap her $u,v\in W_1$ ve her $a,b\in\mathbb{R}$ için geçerlidir. Böylece $W_1$ lineer birleşimlere kapalıdır ve boş değildir; örneğin sıfır vektörünü içerir. Sonuç olarak $W_1$, $\mathbb{R}^3$'ün bir alt uzayıdır. Bu kanıt, kümenin belirli birkaç elemanına değil tanımlayıcı denklemine dayandığı için bütün elemanları kapsar.
:::

---

## Örnek B: Kaydırılmış Düzlem

$$
W_2=\{(x,y,z)\in\mathbb{R}^3:x+y-z=1\}
$$

Sıfır vektörü için:

$$
0+0-0=0\neq1
$$

$$
\boxed{W_2\text{ alt uzay değildir.}}
$$

::: {.notes}
$W_2$ de bir düzlemdir, ancak tanımlayıcı denklemin sağ tarafı $1$ olduğu için düzlem orijinden geçmez. Üst uzayın sıfır vektörünü denklemde denediğimizde sol taraf $0$ kalır ve eşitlik sağlanmaz. İlk koşul bozulduğu anda karar verilebilir.

Bu örnekte genel iki vektör seçip toplam hesabı yapmak mümkün, fakat gereksizdir. Daha kısa bir karşı örnek de skaler kapalılığı bozar: $w\in W_2$ olsa bile $0w=0$ vektörü $W_2$'de değildir. Alt uzay testinde koşulların sırası zorunlu değildir; kolay bozulan koşulu önce sınamak hesabı kısaltır.
:::

---

## Örnek C: İki Düzlemin Birleşimi

$$
W_3=\{(x,y,z)\in\mathbb{R}^3:xy=0\}
$$

$$
(1,0,0),(0,1,0)\in W_3
$$

$$
(1,1,0)\notin W_3
$$

::: {.notes}
$xy=0$ koşulu, $x=0$ veya $y=0$ olmasını ister. Dolayısıyla $W_3$, iki koordinat düzleminin birleşimidir ve sıfır vektörünü içerir. Ayrıca $(x,y,z)\in W_3$ ise $(cx)(cy)=c^2xy=0$ olduğundan her skaler kat yine kümeye aittir.

Toplama kapalılığı ise bozulur. $u=(1,0,0)$ ile $v=(0,1,0)$ ayrı ayrı koşulu sağlar, fakat $u+v=(1,1,0)$ için ilk iki bileşenin çarpımı $1$ olur. Bu tek karşı örnek $W_3$'ün alt uzay olmadığını kanıtlar. Sıfır vektörünü içermek gerekli bir koşuldur, fakat tek başına yeterli değildir.
:::

---

## Üç Küme, Üç Karar

| Küme | Sıfır | Toplama | Sonuç |
|---|:---:|:---:|---|
| $W_1$ | ✓ | ✓ | Alt uzay |
| $W_2$ | ✗ | — | Alt uzay değil |
| $W_3$ | ✓ | ✗ | Alt uzay değil |

::: {.notes}
Üç örnek aynı üst uzayda yaşasa da tanımlayıcı koşullar farklı sonuçlar üretir. $W_1$'in homojen lineer denklemi lineer birleşimler altında korunur. $W_2$'de sabit sağ taraf sıfır vektörünü dışarıda bırakır; $W_3$'teki çarpım koşulu ise iki uygun vektörün toplamında bozulabilir.

Tablodaki kısa çizgi, $W_2$ için toplama kapalılığının doğru olduğu anlamına gelmez. İlk başarısız koşul kararı vermeye yettiği için sonraki denetime ihtiyaç kalmadığını gösterir. Bir kümeyi alt uzay ilan ederken bütün koşulları kanıtlarız; reddederken tek bir başarısız koşul buluruz. Bu ispat yönü farkı, örnek seçme stratejimizi belirler.
:::

---

## Homojen Çözümler Ne Oluşturur?

$A\in\mathbb{R}^{m\times n}$ için:

$$
W=\{x\in\mathbb{R}^n:Ax=0\}
$$

> $W$, $\mathbb{R}^n$'in alt uzayı mı?

::: {.notes}
Homojen sistemlerde çözüm kümesinin sıfır vektörünü içerdiğini ve çözümlerin lineer birleşimlerle üretildiğini daha önce görmüştük. Alt uzay ölçütü bu iki gözlemi tek bir yapısal sonuca dönüştürür. Çözüm vektörleri $n$ bileşenli olduğu için aday küme $\mathbb{R}^n$ içinde aranır.

Burada $A$'nın rankına, pivot sayısına ya da serbest değişken sayısına ilişkin ek bir koşul yoktur. Bu nicelikler çözüm kümesinin ne kadar büyük olduğunu etkiler, alt uzay olup olmadığını değil. Yalnız trivial çözüm varsa $W=\{0\}$ olur; serbest değişken varsa daha fazla çözüm içerir. Her iki durumda da aynı test uygulanır.
:::

---

## Homojen Çözüm Kümesi

$Au=0$ ve $Av=0$ ise:

$$
A(au+bv)=aAu+bAv=0
$$

$$
\boxed{\operatorname{Null}(A)\text{, }\mathbb{R}^n\text{ uzayının alt uzayıdır.}}
$$

::: {.notes}
$u$ ve $v$ iki çözüm olsun. Matris–vektör çarpımının toplama ve skalerle uyumu, $A(au+bv)$ ifadesini $aAu+bAv$ biçimine getirir. Her iki çarpım da sıfır olduğundan sonuç yine sıfırdır; böylece çözüm kümesi bütün iki vektörlü lineer birleşimlere kapalı kalır.

Bu kümeye $A$'nın çekirdeği ya da null uzayı denir ve $\operatorname{Null}(A)$ ile gösterilir. Sıfır vektörü her homojen sistemi sağladığı için küme boş değildir. Alt uzay testi, $\operatorname{Null}(A)$'nın $\mathbb{R}^n$ içinde bir alt uzay olduğunu verir. Şimdilik bu adı, homojen çözüm kümesini tanımak için kullanıyoruz.
:::

---

## Sütunlar Neyi Üretir?

$$
A=[a_1\ a_2\ \cdots\ a_n],\qquad x\in\mathbb{R}^n
$$

$$
Ax=x_1a_1+x_2a_2+\cdots+x_na_n
$$

$$
\operatorname{Col}(A)=\operatorname{span}\{a_1,\ldots,a_n\}
$$

::: {.notes}
$A$ matrisinin her sütunu $m$ bileşenli bir vektördür. $Ax$ çarpımını sütunlardan okuduğumuzda, katsayıları $x_1,\ldots,x_n$ olan bir lineer birleşim elde ederiz. $x$ bütün $\mathbb{R}^n$ içinde değiştikçe sütunların mümkün olan bütün lineer birleşimleri üretilir.

Bu üretilen kümeye $A$'nın sütun uzayı denir ve $\operatorname{Col}(A)$ ile gösterilir. Aynı küme $\operatorname{span}\{a_1,\ldots,a_n\}$ biçiminde de yazılır. “Span” gösterimi, listelenen vektörlerle kurulabilen bütün lineer birleşimleri toplar; tek bir katsayı seçimini değil, bütün seçimleri kapsar.
:::

---

## Gerilen Küme Alt Uzaydır

$y,z\in\operatorname{Col}(A)$ ise:

$$
y=Au,\qquad z=Av
$$

$$
ay+bz=A(au+bv)\in\operatorname{Col}(A)
$$

$$
\boxed{\operatorname{Col}(A)\text{, }\mathbb{R}^m\text{ uzayının alt uzayıdır.}}
$$

::: {.notes}
Sütun uzayından seçilen $y$ ve $z$ vektörleri, uygun $u,v\in\mathbb{R}^n$ için $Au$ ve $Av$ biçiminde yazılabilir. Her $a,b\in\mathbb{R}$ için $ay+bz=A(au+bv)$ olur. Sağ taraf yine $Ax$ biçiminde üretildiği için sonuç sütun uzayında kalır.

Küme ayrıca boş değildir; $x=0$ seçimi $A0=0$ vektörünü üretir. Tek koşullu test böylece sütun uzayının bir alt uzay olduğunu gösterir. Aynı gerekçe herhangi bir vektör listesinin gerdiği küme için de çalışır: lineer birleşimlerin lineer birleşimi yine başlangıçtaki vektörlerin bir lineer birleşimidir.
:::

---

## İki Uzayın Yeri

$A\in\mathbb{R}^{m\times n}$ için:

| Uzay | Elemanlar | İçinde yaşar |
|---|---|---|
| $\operatorname{Col}(A)$ | Çıktılar $Ax$ | $\mathbb{R}^m$ |
| $\operatorname{Null}(A)$ | Girdiler $x$ | $\mathbb{R}^n$ |

::: {.notes}
$A$, $n$ bileşenli girdileri $m$ bileşenli çıktılara gönderir. Null uzayındaki elemanlar $Ax=0$ eşitliğini sağlayan girdi vektörleridir; bu yüzden $\mathbb{R}^n$ içinde yaşarlar. Sütun uzayındaki elemanlar ise $Ax$ biçiminde üretilebilen çıktı vektörleridir ve $\mathbb{R}^m$ içindedir.

$m=n$ olduğunda iki kümenin elemanları aynı sayıda bileşene sahip olabilir, fakat tanımları yine farklı sorulara cevap verir. Biri hangi girdilerin sıfıra gittiğini, diğeri hangi çıktıların üretilebildiğini sorar. Dikdörtgensel bir matriste boyut farkı ayrımı görünür kılar: örneğin $3\times5$ bir matrisin null uzayı $\mathbb{R}^5$'te, sütun uzayı $\mathbb{R}^3$'tedir.
:::

---

## Sık Yapılan Hatalar

1. Yalnız sıfırı denetlemek
2. Tek örnekle kapalılık kanıtlamak
3. Koşulları ayrı kümelerde sınamak
4. $\operatorname{Null}(A)$'yı $\mathbb{R}^m$'de aramak
5. $\operatorname{Col}(A)$'yı $\mathbb{R}^n$'de aramak

::: {.notes}
Sıfır vektörünü içermek yalnız ilk eşiği geçer; $W_3$ örneği toplamanın yine de bozulabileceğini gösterdi. Kapalılığı kanıtlamak için seçilen birkaç vektörün işe yaraması yetmez, çünkü ölçüt bütün $u,v$ ve bütün skalerler için konuşur. Buna karşılık tek bir başarısız seçim, kapalılık iddiasını çürütür.

Toplama testindeki $u$ ile $v$ aynı aday kümeden seçilmelidir ve sonuç yine o kümeye dönmelidir. Son iki hata matrisin girdi ve çıktı taraflarını karıştırmaktan doğar. $Ax=0$ denklemindeki bilinmeyen $x$ sütun sayısı kadar bileşen taşır; $Ax$ çıktısı ise satır sayısı kadar bileşen taşır. Matrisin şeklini başta yazmak, her iki uzayın yerini doğru belirlemeyi kolaylaştırır.
:::

---

## Karar Soruları

1. $\{0\}$ her zaman alt uzay mı?
2. Her $\operatorname{span}$ alt uzay mı?
3. $x+y=2$ çözümü alt uzay mı?
4. $Ax=0$ çözümleri alt uzay mı?

::: {.notes}
$\{0\}$ kümesi her vektör uzayının alt uzayıdır: tek elemanının her lineer birleşimi yine sıfırdır. Bir vektör listesinin span'i de tanımı gereği bütün lineer birleşimleri içerdiğinden alt uzaydır. Bu iki sonuç, en küçük alt uzay ile verilen üreteçleri içeren alt uzay arasında iki temel örnek sağlar.

$x+y=2$ denkleminin çözüm kümesi sıfır vektörünü içermez; dolayısıyla $\mathbb{R}^2$'nin alt uzayı değildir. Buna karşılık her $Ax=0$ çözüm kümesi lineer birleşimlere kapalıdır ve alt uzaydır. Sağ taraftaki sıfır, ilk iki düzlem örneğinde gördüğümüz ayrımı genel matris biçimine taşır.
:::

---

## Fazladan Vektör Ne Yapar?

$v_3=v_1+v_2$ olsun.

$$
\operatorname{span}\{v_1,v_2,v_3\}
=\operatorname{span}\{v_1,v_2\}
$$

> Üçüncü vektör kümeyi büyütmedi.

::: {.notes}
$v_3$ zaten $v_1$ ile $v_2$'nin lineer birleşimiyse onu üreteç listesine eklemek yeni bir vektör üretmez. Gerçekten $av_1+bv_2+cv_3$ ifadesinde $v_3=v_1+v_2$ yazınca sonuç $(a+c)v_1+(b+c)v_2$ olur. Bu vektör başlangıçtaki iki vektörün gerdiği kümede zaten vardır.

Ters yöndeki kapsama da açıktır: $v_1$ ile $v_2$ üçlü listenin içinde bulunduğu için onların her lineer birleşimi üçlü listenin gerdiği kümeye aittir. Böylece iki gerilen küme eşittir. Sonuç, alt uzayın onu üretmek için kullandığımız listenin uzunluğundan ayrı bir nesne olduğunu gösterir; farklı listeler aynı alt uzayı gerebilir.
:::

---

## Sıradaki Soru

- Alt uzay testini kurduk
- Çözüm kümelerini sınadık
- Sütunların gerdiği kümeyi tanıdık
- Bazı üreteçler gereksiz kalabilir

> Hangi vektörler gerçekten gereklidir?

::: {.notes}
Alt uzay ölçütü, üst uzayın bütün aksiyomlarını yeniden yazmadan üç kapanma koşuluna bakmamızı sağladı. Homojen çözüm kümeleri ile sütunların gerdiği kümeler bu ölçütün iki doğrudan uygulamasını verdi. Ayrıca $\operatorname{Null}(A)$ ile $\operatorname{Col}(A)$'nın matrisin farklı taraflarında yaşadığını ayırdık.

Bir üreteç diğerlerinden kurulabiliyorsa onu çıkarmak gerilen alt uzayı değiştirmez. Hangi vektörlerin gereksiz olduğu lineer bağımlılık ve bağımsızlıkla belirlenir; bu fikir taban kavramına ulaşır.
:::
