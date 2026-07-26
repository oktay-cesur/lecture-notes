---
title: "Çözüm Durumları ve Serbest Değişkenler"
subtitle: "MATE 213 — İlk Öğretim Bloğu"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-23
execute:
  echo: false
---

## Aynı Eliminasyon, Üç Sonuç

Gauss eliminasyonu her sisteme aynı işlemleri uygular — ama sonuç üç türlü olabilir:

$$
\boxed{\text{tek çözüm}}
\qquad
\boxed{\text{sonsuz çözüm}}
\qquad
\boxed{\text{çözüm yok}}
$$

> Hangisi olduğunu basamak yapısı belirler.

::: {.notes}
Gauss eliminasyonu bütün sistemlere aynı tür satır işlemlerini uygular; fakat ortaya çıkan basamak yapısı sistemden sisteme değişir. Satır basamak biçimine ulaşıldığında artık yalnızca bilinmeyenlerin değerlerini hesaplamayız; elde edilen yapı sistemin nasıl bir çözüm kümesine sahip olduğunu da gösterir.

Bir lineer denklem sistemi üç temel durumdan birine sahiptir: tek çözüm, sonsuz sayıda çözüm veya hiç çözüm yok. Bu üç durum, basamaklı biçimde iki yapıya bakılarak ayırt edilir: sistemde bir çelişki ortaya çıkıp çıkmadığı ve bilinmeyenlere karşılık gelen sütunlarda pivot bulunup bulunmadığı. Bu ders bu iki soruyu sistematik bir karar yapısına bağlar.
:::

---

## Basamaklı Biçimden Çözümü Okumak

$$
\left[\begin{array}{cc|c}1&0&2\\0&1&3\end{array}\right]
\quad
\left[\begin{array}{ccc|c}1&2&0&5\\0&0&1&3\end{array}\right]
\quad
\left[\begin{array}{cc|c}1&2&3\\0&0&1\end{array}\right]
$$

Üçü de basamaklı — ama çözüm yapıları farklı.

::: {.notes}
Üç genişletilmiş matris de satır basamak biçimindedir, ancak temsil ettikleri sistemlerin çözüm yapıları aynı değildir. Birinci sistemde her bilinmeyen sütununda pivot bulunur; bütün bilinmeyenler tek tek belirlenebilir.

İkinci sistemde ikinci bilinmeyen için pivot yoktur; bu değişkene farklı değerler verilebilir. Üçüncü sistemde ise ikinci satır $0=1$ gibi imkânsız bir eşitlik üretir. Dolayısıyla satır basamak biçimine ulaşmak yalnızca hesabı kolaylaştırmaz; sistemin çözüm durumunu da görünür kılar. Bu üç örnek, sırasıyla tek çözüm, sonsuz çözüm ve çözümsüzlük durumlarının basamaklı biçimden nasıl okunduğunu gösterecektir.
:::

---

## Önce Tutarlılık: Çözüm Var mı?

$$
\left[\,0\ \ 0\ \cdots\ 0\mid c\,\right],\qquad c\neq0
\ \Longrightarrow\
0=c
$$

$$
\boxed{0=c,\ c\neq0\ \Longrightarrow\ \text{sistem tutarsız, } \mathcal{S}=\varnothing}
$$

::: {.notes}
Bir denklem sistemini sınıflandırırken ilk soru şudur: sistemin en az bir çözümü var mı? En az bir çözüme sahip sistemlere tutarlı, hiçbir çözüme sahip olmayanlara tutarsız sistem denir.

Satır indirgeme sonunda $[\,0\ \cdots\ 0\mid c\,]$ biçiminde ve $c\neq0$ olan bir satır ortaya çıkarsa, bu satır $0=c$ denklemine karşılık gelir. Örneğin $0=5$ eşitliği hiçbir bilinmeyen değeri için sağlanamaz. Tek bir böyle satır bile bütün sistemi tutarsız yapar ve çözüm kümesini boşaltır. Bu yüzden karar yapısının ilk adımı her zaman çelişki kontrolüdür.
:::

---

## Sıfır Satır ile Çelişki Satırı Aynı Değildir

$$
\left[\,0\ \cdots\ 0\mid 0\,\right]
\ \Rightarrow\ 0=0
\quad\text{(her zaman doğru — kısıt yok)}
$$

$$
\left[\,0\ \cdots\ 0\mid c\,\right],\ c\neq0
\ \Rightarrow\ 0=c
\quad\text{(imkânsız — çelişki)}
$$

::: {.notes}
Satır indirgeme sırasında $[\,0\ \cdots\ 0\mid 0\,]$ biçiminde bir satır da ortaya çıkabilir. Bu satır $0=0$ eşitliğine karşılık gelir; her zaman doğrudur ve çözüm kümesine yeni bir kısıt getirmez. Genellikle başlangıçtaki denklemlerden birinin diğerlerinden üretilebildiğini gösterir.

Bu iki durumu ayırmak kritiktir. Sağ tarafı sıfır olan sıfır satırı zararsızdır; sistemin tutarlılığını bozmaz. Sağ tarafı sıfırdan farklı olan satır ise çelişkidir ve sistemi tutarsız yapar. Yani $0=0$ ile $0=c$ ($c\neq0$) yüzeysel olarak benzer görünse de biri her zaman doğru, diğeri hiçbir zaman doğru değildir.
:::

---

## Karar Sırası

$$
\begin{array}{c}
\text{1. Çelişki satırı var mı?}\\[2mm]
\downarrow\ \text{yoksa}\\[2mm]
\text{2. Her bilinmeyen sütununda pivot var mı?}
\end{array}
$$

::: {.notes}
Karar sırası çelişkiyi önce arar; çünkü bir tek çelişkili satır bütün sistemin çözüm kümesini boşaltır ve bu durumda serbest sütunların bulunması çözüm üretmez. Çelişki kontrolü atlanıp doğrudan pivotlara bakılırsa tutarsız bir sistem yanlışlıkla sonsuz çözümlü sanılabilir.

Çelişki yoksa sistem tutarlıdır ve ikinci soruya geçilir: bilinmeyen sütunlarındaki pivotlar incelenir. Her bilinmeyen sütununda pivot varsa çözüm tektir; en az bir pivotsuz bilinmeyen sütunu varsa serbest parametreler sonsuz çözüm üretir. Bu iki soru, üç çözüm durumunu eksiksiz biçimde ayırır.
:::

---

## Tek Çözüm

$$
\left[\begin{array}{ccc|c}
1&2&-1&4\\
0&1&3&2\\
0&0&1&5
\end{array}\right]
$$

Üç bilinmeyen sütununun **hepsinde** pivot var → serbest değişken yok.

$$
\boxed{\text{çelişki yok}+\text{serbest değişken yok}\Longrightarrow\text{tek çözüm}}
$$

::: {.notes}
Bu basamaklı sistemde bilinmeyenlere karşılık gelen üç sütunun tamamında pivot bulunur. Dolayısıyla serbest değişken yoktur; her bilinmeyen, diğer denklemler yardımıyla tek bir değere belirlenir. Sistemde herhangi bir çelişki de bulunmadığı için çözüm tektir.

Tek çözüm için katsayı kısmının birim matris olması zorunlu değildir. Her bilinmeyen sütununda pivot bulunan herhangi bir REF biçimi de geriye doğru yerine koymayla tek çözüm verir. Belirleyici olan biçimin ne kadar sade olduğu değil, her bilinmeyenin bir pivota bağlanmış olmasıdır.
:::

---

## Pivot Değişken ve Serbest Değişken

$$
\left[\begin{array}{ccc|c}1&2&0&5\\0&0&1&3\end{array}\right]
\quad\Rightarrow\quad
\begin{aligned}
x_1+2x_2&=5\\
x_3&=3
\end{aligned}
$$

- Pivot değişkenler: $x_1,\ x_3$
- Serbest değişken: $x_2$

::: {.notes}
Satır basamak biçiminde pivot bulunan sütunlara karşılık gelen bilinmeyenlere pivot değişkenler (temel değişkenler de denir), pivot bulunmayan sütunlara karşılık gelen bilinmeyenlere ise serbest değişkenler denir. Örnekteki matriste pivotlar birinci ve üçüncü sütunlardadır; dolayısıyla $x_1$ ve $x_3$ pivot değişken, $x_2$ serbest değişkendir.

Serbest değişkenlere uygun parametre değerleri verilebilir; pivot değişkenler ise serbest değişkenlere verilen değerlere bağlı olarak belirlenir. Bu ayrım, sonsuz çözümlü sistemlerin çözüm kümesini düzenli biçimde yazmanın anahtarıdır: önce serbest değişkenler parametrelenir, sonra pivot değişkenler bunlar cinsinden çözülür.
:::

---

## Serbest Değişken Ne Demektir?

Serbest değişken, **değeri bulunamayan** veya önemsiz bir değişken *değildir.*

> Çözüm kümesi içinde bağımsız olarak parametre değeri verilebilen değişkendir.

$$
x_2=0\Rightarrow(5,0,3),\quad
x_2=1\Rightarrow(3,1,3),\quad
x_2=-1\Rightarrow(7,-1,3)
$$

::: {.notes}
Serbest değişken kavramı sık yanlış anlaşılır. Serbest değişken, sistemin çözemediği veya önemsediği bir bilinmeyen değildir; çözüm kümesi içinde bağımsız olarak parametre değeri verilebilen bir değişkendir.

Önceki örnekte $x_2$ serbesttir. $x_2=0$ için çözüm $(5,0,3)$, $x_2=1$ için $(3,1,3)$, $x_2=-1$ için $(7,-1,3)$ olur; bu vektörlerin tamamı aynı denklem sistemini sağlar. Serbest değişkene verilen her değer geçerli bir çözüm üretir ve pivot değişkenlerin değerlerini belirler. Gerçek sayılar üzerinde parametre sonsuz sayıda değer alabildiğinden, tutarlı bir sistemde en az bir serbest değişken bulunması sonsuz sayıda çözüm ortaya çıkarır.
:::

---

## Sonsuz Çözüm

$$
\left[\begin{array}{ccc|c}1&2&0&5\\0&0&1&3\end{array}\right]
$$

$x_2$ pivotsuz → serbest → her $t$ değeri bir çözüm.

$$
\boxed{\text{çelişki yok}+\text{en az bir serbest değişken}\Longrightarrow\text{sonsuz çözüm}}
$$

::: {.notes}
Bu matriste çelişki yoktur, dolayısıyla sistem tutarlıdır. İkinci bilinmeyen sütununda pivot bulunmadığından $x_2$ tek bir değere sabitlenmez; $x_2=t$ olarak serbestçe seçilebilir ve her farklı $t$ değeri farklı bir çözüm üretir.

Bir serbest değişken bile sonsuz sayıda seçim taşıdığı için çözüm kümesi sonsuzdur. Burada önemli olan yalnız denklem sayısı değildir; çözüm yapısını belirleyen, satır indirgeme sonunda ortaya çıkan kısıtların yapısıdır. Serbest değişken sayısı arttıkça çözüm kümesinin parametre sayısı da artar.
:::

---

## Parametrik Çözüm — Genel Prosedür

1. Pivot ve serbest sütunları belirle.
2. Her serbest değişkene bir parametre ata ($x_j=t$).
3. Pivot değişkenleri parametreler cinsinden çöz (alttan yukarı).
4. Çözümü vektör biçiminde yaz.

::: {.notes}
Serbest değişken bulunan sistemlerde çözüm tek bir vektörle değil, parametreler yardımıyla ifade edilir. Genel prosedür dört adımlıdır. Önce satır basamak biçiminde pivot sütunları ile pivotsuz (serbest) sütunlar belirlenir. Her serbest değişkene bir parametre adı verilir; birden fazla serbest değişken varsa her birine ayrı bir parametre atanır.

Ardından pivot değişkenler, en alttaki denklemden başlanarak bu parametreler cinsinden çözülür; bu, geriye doğru yerine koymanın parametreli hâlidir. Son adımda çözüm vektör biçiminde toplanır. Bu prosedür sistematiktir: tek tek çözüm listelemek yerine bütün çözüm kümesini kapsayan tek bir formül üretir ve serbest değişken sayısı ne olursa olsun aynı şekilde işler.
:::

---

## Parametrik Örnek

$$
\left[\begin{array}{ccc|c}1&-2&3&4\\0&1&-1&2\end{array}\right]
,\qquad x_3=t
$$

$$
x_2=2+t,\qquad
x_1=8-t
$$

$$
x=
\begin{bmatrix}8-t\\2+t\\t\end{bmatrix},
\qquad t\in\mathbb{R}
$$

::: {.notes}
Bu sistemde birinci ve ikinci sütunlarda pivot vardır, üçüncü sütunda yoktur; dolayısıyla $x_3$ serbest değişkendir ve $x_3=t$ seçilir. İkinci denklem $x_2-x_3=2$ olduğundan $x_2=2+t$ bulunur. Birinci denklem $x_1-2x_2+3x_3=4$ olduğundan $x_1-2(2+t)+3t=4$ ve buradan $x_1=8-t$ elde edilir.

Genel çözüm, serbest değişkene verilen her $t$ değerinin pivot değişkenlerin değerlerini belirlediği bir formüldür. Prosedürün alttan yukarı işlediğine dikkat edin: önce en alttaki pivot denkleminden $x_2$, sonra bir üstteki denklemden $x_1$ parametre cinsinden yazılır.
:::

---

## Parametrik Vektör Biçimi

$$
x=
\begin{bmatrix}8-t\\2+t\\t\end{bmatrix}
=
\underbrace{\begin{bmatrix}8\\2\\0\end{bmatrix}}_{\text{belirli çözüm}}
+\,t
\underbrace{\begin{bmatrix}-1\\1\\1\end{bmatrix}}_{\text{değişim yönü}},
\quad t\in\mathbb{R}
$$

::: {.notes}
Parametrik çözüm, bir sabit vektör ile parametreyle çarpılan bir yön vektörünün toplamı olarak ayrıştırılabilir. Sabit vektör ($t=0$ durumu) belirli bir çözümü verir; $t$ ile çarpılan vektör ise çözüm kümesi boyunca hangi yönde ilerlendiğini gösterir.

Bu ayrıştırma yalnız düzenli bir yazım değildir; ileride homojen ve homojen olmayan sistemlerin ilişkisini açıklamada yeniden kullanılacaktır. Yön vektörü aslında ilgili homojen sistemin ($Ax=0$) çözümüdür; sabit vektör ise özel bir çözümdür. Böylece çözüm kümesi "bir özel çözüm artı homojen çözümler" yapısıyla anlaşılır.
:::

---

## Çözüm Yok

$$
\left[\begin{array}{ccc|c}
1&0&2&4\\
0&1&-1&3\\
0&0&0&5
\end{array}\right]
\quad\Rightarrow\quad
0=5
$$

$$
\boxed{\mathcal{S}=\varnothing}
$$

::: {.notes}
Son satır $0x_1+0x_2+0x_3=5$, yani $0=5$ anlamına gelir; hiçbir değişken değeriyle sağlanamaz. Üst satırlarda serbest bir $x_3$ görünse bile bu seçim çelişkiyi ortadan kaldırmaz. Bu nedenle karar sırasının ilk adımı her zaman çelişki kontrolüdür; çelişki bulunduğunda pivot ve serbest değişken analizine hiç geçilmez.

Geometrik olarak denklemlerin temsil ettiği doğrular ya da düzlemler ortak bir noktada kesişmez. Cebirsel basamak biçimi bu uyumsuzluğu doğrudan görünür kılar: çelişki satırı, sistemin geometrik olarak kesişmeyen kısıtlar içerdiğinin cebirsel işaretidir.
:::

---

## Üç Durumun Karar Yapısı

$$
\boxed{
\begin{array}{l}
\text{çelişki var}\ \rightarrow\ \text{çözüm yok}\\[4pt]
\text{çelişki yok, serbest değişken yok}\ \rightarrow\ \text{tek çözüm}\\[4pt]
\text{çelişki yok, serbest değişken var}\ \rightarrow\ \text{sonsuz çözüm}
\end{array}
}
$$

::: {.notes}
Bir sistem satır basamak biçimine getirildikten sonra çözüm durumu iki soruyla belirlenir. İlk soru çelişki satırının varlığıdır; varsa sistem çözümsüzdür. Çelişki yoksa ikinci soru serbest değişkenin varlığıdır; serbest değişken yoksa tek çözüm, en az bir serbest değişken varsa sonsuz çözüm bulunur.

Bu üç dallı karar yapısı bütün lineer denklem sistemlerini eksiksiz sınıflandırır; dördüncü bir durum yoktur. "İki çözüm" veya "üç çözüm" gibi sonlu-çoklu durumlar lineer sistemlerde imkânsızdır: ya tek çözüm, ya hiç, ya da sonsuz. Bu, lineerliğin doğrudan bir sonucudur.
:::

---

## Denklem Sayısı Belirleyici Değildir

| Sistem | Basamak sonucu | Çözüm |
|---|---|---|
| $x+y=3,\ x-y=1$ | iki pivot | tek |
| $x+y=3,\ 2x+2y=6$ | bir pivot, sıfır satır | sonsuz |
| $x+y=3,\ 2x+2y=7$ | çelişki satırı | yok |

::: {.notes}
Üç sistemde de iki bilinmeyen ve iki denklem vardır; buna rağmen çözüm sayıları farklıdır. Birinci sistem iki bağımsız kısıt taşır ve tek çözüm verir. İkinci sistemde ikinci denklem birincinin iki katıdır, yeni bilgi getirmez; sistem tek denklem gibi davranır ve sonsuz çözümü olur. Üçüncü sistemde sol taraflar aynı ilişkiyi temsil ederken sağ taraflar uyumsuzdur: birinci denklem ikiyle çarpılınca $2x+2y=6$ gerekirken ikinci denklem $2x+2y=7$ istemektedir; sistem çözümsüzdür.

Bu karşılaştırma, "denklem sayısı bilinmeyen sayısına eşitse tek çözüm vardır" çıkarımının yanlış olduğunu gösterir. Denklemler birbirinin tekrarı olabilir veya birbirleriyle çelişebilir. Gerekli bilgi denklem sayısında değil, satır indirgeme sonunda ortaya çıkan pivot ve çelişki yapısındadır.
:::

---

## Homojen Sistemlere Kısa Bağlantı

$$
Ax=0
\qquad\Rightarrow\qquad
x=0\ \text{her zaman çözüm (trivial)}
$$

Homojen sistem asla tutarsız olamaz:

$$
\boxed{\text{yalnız iki durum: tek çözüm veya sonsuz çözüm}}
$$

::: {.notes}
Bir homojen lineer denklem sistemi $Ax=0$ biçimindedir. Bu sistemde $x=0$ her zaman bir çözümdür, çünkü herhangi bir matris sıfır vektörünü sıfır vektörüne götürür. Bu trivial çözüm nedeniyle homojen bir sistem asla tutarsız olamaz; çözüm kümesi hiçbir zaman boş değildir.

Dolayısıyla homojen sistemlerde üç durumdan yalnız ikisi mümkündür: tek çözüm (yalnız trivial çözüm) veya sonsuz çözüm (trivial çözüme ek olarak sıfırdan farklı çözümler). Hangisinin geçerli olduğu serbest değişkenin bulunup bulunmamasına bağlıdır ve bu, matrisin pivot yapısını özetleyen rank kavramıyla sistematik biçimde ifade edilecektir.
:::

---

## Sık Yapılan Hatalar

1. $[\,0\ \cdots\ 0\mid 0\,]$ sıfır satırını çelişki sanmak.
2. Serbest değişkeni "değeri bulunamayan" değişken sanmak.
3. Pivotsuz bilinmeyen sütununu görmezden gelmek.
4. Denklem = bilinmeyen sayısı ise çözüm tektir sanmak.
5. Çelişkiyi yalnız son satırda aramak.

::: {.notes}
Birinci hata $0=0$ satırını çelişki sanmaktır; oysa bu satır her zaman doğrudur ve yalnız bir denklemin gereksiz olduğunu gösterir. İkinci hata serbest değişkeni sistemin çözemediği bir bilinmeyen sanmaktır; serbest değişkene parametre değeri verilir ve pivot değişkenler buna bağlı belirlenir. Üçüncü hata pivotsuz bir sütunu atlamaktır; oysa böyle bir sütun serbest değişkeni ve çözüm kümesinin parametrik yapısını belirler.

Dördüncü hata denklem ve bilinmeyen sayısının eşitliğini tek çözüm garantisi sanmaktır; denklemler birbirinin tekrarı olabilir veya çelişebilir. Beşinci hata çelişkiyi yalnız son satırda aramaktır; önemli olan satırın konumu değil, $0=c$ ($c\neq0$) yapısının herhangi bir yerde ortaya çıkmasıdır.
:::

---

## Sonraki Adım: Bağımsız Bilgiyi Ölçmek

$$
\begin{aligned}
x_1+x_2&=3,\\
2x_1+2x_2&=6,\\
3x_1+3x_2&=9
\end{aligned}
$$

Üç denklem — ama tek bağımsız kısıt.

> Bir sistemin "gerçek bilgi miktarını" nasıl sayısal olarak ölçeriz?

::: {.notes}
Bu üç denklemin ikincisi ve üçüncüsü birincinin skaler katlarıdır; sisteme yeni satırlar eklenmiş görünse de çözüm kümesi daralmamıştır. Eliminasyon sonunda yalnız bir sıfır olmayan satır ve tek pivot kalır. Çözüm durumu analizinde tekrar tekrar karşımıza çıkan soru budur: bir sistemdeki denklemlerin kaçı gerçekten yeni ve bağımsız bilgi taşır?

Bir sonraki ders bu soruya sayısal bir cevap verir. Rank kavramı, bir matrisin taşıdığı bağımsız bilgi miktarını pivot yapısı üzerinden ölçer ve bu derste kurduğumuz üç dallı karar yapısını tek bir sayı diliyle yeniden ifade eder. Böylece çelişki, pivot ve serbest değişken analizinin tamamı rank karşılaştırmasına indirgenir.
:::
