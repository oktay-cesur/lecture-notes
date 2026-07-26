---
title: "Elementer Matrisler"
subtitle: "MATE 213 — İlk Öğretim Bloğu"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
execute:
  echo: false
---

## Kanıt Bekleyen İddia

Lineer denklem sistemlerinde kullandığımız ifade:

$$
\boxed{\text{Her elementer satır işlemi, uygun bir }E\text{ ile soldan çarpmadır.}}
$$

Yer değiştirme · ölçekleme · satır ekleme

> Soru: Bu $E$ neden her zaman var?

::: {.notes}
Lineer denklem sistemlerini matrislerle gösterirken elementer satır işlemlerini üç tür altında toplamıştık. Aynı notta bu işlemlerin uygun bir elementer matrisle soldan çarpma olarak yazılabileceğini de söyledik. O ifade daha sonraki konuların kullandığı bir araçtı; gerekçesini henüz kurmamıştık.

Buradaki soru işlemlerin nasıl yapıldığı değildir. Aradığımız şey, bir satır işleminin her girdi matrisi üzerindeki etkisini tek bir matris çarpımıyla temsil eden $E$ matrisinin neden var olduğudur. Ardından bu matrisin neden aynı işlemin birim matrise uygulanmasıyla bulunduğunu göstereceğiz.

Kanıt iki önceki bilgiye dayanacak. Matris çarpımının satır birleşimi okumasını kullanacağız ve birim matrisin çarpmada girdiyi değiştirmediğini hatırlayacağız. Önce altı küçük hesapta ortak davranışı görelim; sonra bu davranışı bütün boyutlara taşıyalım.
:::

---

## Tek Matris, Altı İşlem

$$
A=
\begin{bmatrix}
1&2&-1\\
3&0&4\\
2&-2&5
\end{bmatrix}
$$

1. $R_2\leftarrow2R_2$
2. $R_1\leftarrow-2R_1$
3. $R_1\leftrightarrow R_3$
4. $R_1\leftrightarrow R_2$
5. $R_3\leftarrow R_3-3R_1$
6. $R_2\leftarrow R_2+2R_3$

Her işlem için bir $E$ adayı.

::: {.notes}
Altı işlemi aynı $A$ matrisi üzerinde uygulayacağız. Her işlem türünü iki kez görmek, $E$ matrisindeki katsayı örüntüsünün belirli bir sayısal sonuca bağlı olmadığını ayırt etmemizi sağlayacak. Her örnekte önce satır işlemini doğrudan yapacağız, sonra soldan çarpılan bir $E$ matrisiyle aynı sonucu üreteceğiz.

$\varepsilon_1,\ldots,\varepsilon_6$ işaretleri burada altı belirli işlemin sonucunu adlandırıyor. Alt indisler kalıcı matris aileleri kurmuyor; yalnız örnekleri birbirinden ayırıyor. Karşılık gelen $E_1,\ldots,E_6$ matrisleri de aynı nedenle örnek numarası taşıyor.

Bu aşamada yapılan hesaplar iddianın kanıtı değildir. Altı örneğin çalışması, her boyuttaki her elementer işlem için bir $E$ bulunduğunu tek başına göstermez. Hesapların görevi, kanıtta açıklamamız gereken ortak mekanizmayı görünür kılmaktır.
:::

---

## Gözlem 1: Bir Satırı Ölçeklemek

$$
A=
\begin{bmatrix}1&2&-1\\3&0&4\\2&-2&5\end{bmatrix}
\xrightarrow{R_2\leftarrow2R_2}
\varepsilon_1(A)=
\begin{bmatrix}1&2&-1\\6&0&8\\2&-2&5\end{bmatrix}
$$

$$
\begin{aligned}
E_1&=\begin{bmatrix}1&0&0\\0&2&0\\0&0&1\end{bmatrix},\\[6pt]
E_1A
&=\begin{bmatrix}1&0&0\\0&2&0\\0&0&1\end{bmatrix}
\begin{bmatrix}1&2&-1\\3&0&4\\2&-2&5\end{bmatrix}
=\begin{bmatrix}1&2&-1\\6&0&8\\2&-2&5\end{bmatrix}
\end{aligned}
$$

$$
\boxed{\varepsilon_1(A)=E_1A}
$$

::: {.notes}
$R_2\leftarrow2R_2$ işlemi ikinci satırdaki her elemanı ikiyle çarpar; diğer iki satıra dokunmaz. Elle yapılan hesap bu nedenle ikinci satırı $[6\ 0\ 8]$ biçimine getirir. Sonuç matrisinin birinci ve üçüncü satırları $A$'daki karşılıklarıyla aynıdır.

$E_1$ matrisinin ikinci satırı $[0\ 2\ 0]$'dır. Satır birleşimi okumasında bu satır $0r_1(A)+2r_2(A)+0r_3(A)$ üretir; birinci ve üçüncü satırlar ise kendi konumlarındaki satırı katsayı $1$ ile seçer. Böylece soldan çarpım, elle yapılan üç satır güncellemesini aynı anda verir.

$E_1$ adayını $I_3$ matrisinin ikinci satırını ikiyle çarparak elde ettik. Bu seçim örnekte çalışıyor; henüz neden her $A$ için çalıştığını göstermedik. İkinci ölçekleme örneği başka bir satır ve negatif bir katsayı kullanacak.
:::

---

## Gözlem 2: Negatif Katsayıyla Ölçeklemek

$$
A=
\begin{bmatrix}1&2&-1\\3&0&4\\2&-2&5\end{bmatrix}
\xrightarrow{R_1\leftarrow-2R_1}
\varepsilon_2(A)=
\begin{bmatrix}-2&-4&2\\3&0&4\\2&-2&5\end{bmatrix}
$$

$$
\begin{aligned}
E_2&=\begin{bmatrix}-2&0&0\\0&1&0\\0&0&1\end{bmatrix},\\[6pt]
E_2A
&=\begin{bmatrix}-2&0&0\\0&1&0\\0&0&1\end{bmatrix}
\begin{bmatrix}1&2&-1\\3&0&4\\2&-2&5\end{bmatrix}
=\begin{bmatrix}-2&-4&2\\3&0&4\\2&-2&5\end{bmatrix}
\end{aligned}
$$

$$
\boxed{\varepsilon_2(A)=E_2A}
$$

::: {.notes}
$R_1\leftarrow-2R_1$ işlemi birinci satırı $[-2\ {-4}\ 2]$ biçimine getirir. Negatif katsayı satırın yönünü ve büyüklüğünü birlikte değiştirir; ikinci ve üçüncü satırlar olduğu gibi kalır. Elle yapılan işlemde başka hiçbir satır hesaba katılmaz.

$E_2$'nin birinci satırı $[-2\ 0\ 0]$ olduğu için $E_2A$ çarpımının ilk satırı $-2r_1(A)$ olur. İkinci ve üçüncü katsayı satırları sırasıyla $r_2(A)$ ve $r_3(A)$ satırlarını seçer. Böylece açık çarpım, doğrudan uygulanan ölçeklemeyle aynı matrisi üretir.

İlk iki örnekte ölçekleme katsayısı ve güncellenen satır değişti. Her iki durumda da $E$ matrisinde yalnız ilgili birim satırın $1$ katsayısı işlemdeki skalerle değiştirildi. Şimdi iki ayrı yer değiştirme örneğinde sıfır ve birlerin satır seçimini nasıl kaydettiğine bakalım.
:::

---

## Gözlem 3: İki Satırı Değiştirmek

$$
A=
\begin{bmatrix}1&2&-1\\3&0&4\\2&-2&5\end{bmatrix}
\xrightarrow{R_1\leftrightarrow R_3}
\varepsilon_3(A)=
\begin{bmatrix}2&-2&5\\3&0&4\\1&2&-1\end{bmatrix}
$$

$$
\begin{aligned}
E_3&=\begin{bmatrix}0&0&1\\0&1&0\\1&0&0\end{bmatrix},\\[6pt]
E_3A
&=\begin{bmatrix}0&0&1\\0&1&0\\1&0&0\end{bmatrix}
\begin{bmatrix}1&2&-1\\3&0&4\\2&-2&5\end{bmatrix}
=\begin{bmatrix}2&-2&5\\3&0&4\\1&2&-1\end{bmatrix}
\end{aligned}
$$

$$
\boxed{\varepsilon_3(A)=E_3A}
$$

::: {.notes}
$R_1\leftrightarrow R_3$ işlemi birinci çıktı satırına $A$'nın üçüncü satırını, üçüncü çıktı satırına da $A$'nın birinci satırını yerleştirir. İkinci satır yerinde kalır. Burada hiçbir elemanın değeri değişmez; yalnız hangi girdi satırının hangi çıktı konumuna gittiği değişir.

$E_3$'ün birinci satırı $[0\ 0\ 1]$ olduğu için $E_3A$ çarpımının birinci satırı $r_3(A)$ olur. Üçüncü satırdaki $[1\ 0\ 0]$ katsayıları $r_1(A)$'yı seçer. Ortadaki $[0\ 1\ 0]$ satırı da $r_2(A)$'yı aynı konumda bırakır.

Bu kez $E_3$, aynı yer değiştirme işleminin $I_3$ üzerinde uygulanmasıyla oluştu. Birim matrisin satırlarındaki sıfır ve birler, girdi satırlarından hangisinin seçileceğini kaydediyor. İkinci takas örneğinde farklı iki satırı değiştireceğiz.
:::

---

## Gözlem 4: Başka İki Satırı Değiştirmek

$$
A=
\begin{bmatrix}1&2&-1\\3&0&4\\2&-2&5\end{bmatrix}
\xrightarrow{R_1\leftrightarrow R_2}
\varepsilon_4(A)=
\begin{bmatrix}3&0&4\\1&2&-1\\2&-2&5\end{bmatrix}
$$

$$
\begin{aligned}
E_4&=\begin{bmatrix}0&1&0\\1&0&0\\0&0&1\end{bmatrix},\\[6pt]
E_4A
&=\begin{bmatrix}0&1&0\\1&0&0\\0&0&1\end{bmatrix}
\begin{bmatrix}1&2&-1\\3&0&4\\2&-2&5\end{bmatrix}
=\begin{bmatrix}3&0&4\\1&2&-1\\2&-2&5\end{bmatrix}
\end{aligned}
$$

$$
\boxed{\varepsilon_4(A)=E_4A}
$$

::: {.notes}
$R_1\leftrightarrow R_2$ işlemi ilk iki satırın çıktı konumlarını değiştirir. Üçüncü satır bu değişime katılmaz ve $[2\ {-2}\ 5]$ olarak kalır. Elle yapılan işlem yalnız satırların yerini değiştirdiği için bütün elemanlar başlangıç değerlerini korur.

$E_4$'ün birinci satırı $[0\ 1\ 0]$, ikinci satırı $[1\ 0\ 0]$'dır. Bu katsayılar $E_4A$ çarpımında sırasıyla $r_2(A)$ ve $r_1(A)$ satırlarını seçer. Üçüncü katsayı satırı $[0\ 0\ 1]$ olduğundan son çıktı satırı $r_3(A)$ olur.

İki takas örneğinde değiştirilen konumlar farklı olsa da mekanizma aynıdır. $E$ matrisindeki her katsayı satırı, çıktı konumuna gelecek tek girdi satırını bir tane $1$ ile seçer. Son iki örnekte bir çıktı satırı iki girdi satırını birlikte kullanacak.
:::

---

## Gözlem 5: Bir Satır Eklemek

$$
A=
\begin{bmatrix}1&2&-1\\3&0&4\\2&-2&5\end{bmatrix}
\xrightarrow{R_3\leftarrow R_3-3R_1}
\varepsilon_5(A)=
\begin{bmatrix}1&2&-1\\3&0&4\\-1&-8&8\end{bmatrix}
$$

$$
\begin{aligned}
E_5&=\begin{bmatrix}1&0&0\\0&1&0\\-3&0&1\end{bmatrix},\\[6pt]
E_5A
&=\begin{bmatrix}1&0&0\\0&1&0\\-3&0&1\end{bmatrix}
\begin{bmatrix}1&2&-1\\3&0&4\\2&-2&5\end{bmatrix}
=\begin{bmatrix}1&2&-1\\3&0&4\\-1&-8&8\end{bmatrix}
\end{aligned}
$$

$$
\boxed{\varepsilon_5(A)=E_5A}
$$

::: {.notes}
$R_3\leftarrow R_3-3R_1$ işlemi yalnız üçüncü satırı günceller. Hesap $[2\ {-2}\ 5]-3[1\ 2\ {-1}]=[-1\ {-8}\ 8]$ sonucunu verir. Birinci ve ikinci satırlar başlangıçtaki değerlerini korur.

$E_5$'in üçüncü satırı $[-3\ 0\ 1]$'dir. Satır birleşimi okuması bu katsayıları $-3r_1(A)+0r_2(A)+r_3(A)$ biçiminde kullanır; bu da elle yazdığımız güncellemenin aynısıdır. İlk iki katsayı satırı yalnız kendi konumlarındaki girdi satırını seçer.

$E_5$ de aynı işlemin $I_3$ üzerinde uygulanmasıyla elde edildi. Bu örnekte $E$'nin güncellenen satırı iki sıfır olmayan katsayı taşıyor; biri korunacak satırı, diğeri eklenecek katı gösteriyor. İkinci satır ekleme örneğinde hedef ve kaynak satırları değiştireceğiz.
:::

---

## Gözlem 6: Başka Bir Satır Eklemek

$$
A=
\begin{bmatrix}1&2&-1\\3&0&4\\2&-2&5\end{bmatrix}
\xrightarrow{R_2\leftarrow R_2+2R_3}
\varepsilon_6(A)=
\begin{bmatrix}1&2&-1\\7&-4&14\\2&-2&5\end{bmatrix}
$$

$$
\begin{aligned}
E_6&=\begin{bmatrix}1&0&0\\0&1&2\\0&0&1\end{bmatrix},\\[6pt]
E_6A
&=\begin{bmatrix}1&0&0\\0&1&2\\0&0&1\end{bmatrix}
\begin{bmatrix}1&2&-1\\3&0&4\\2&-2&5\end{bmatrix}
=\begin{bmatrix}1&2&-1\\7&-4&14\\2&-2&5\end{bmatrix}
\end{aligned}
$$

$$
\boxed{\varepsilon_6(A)=E_6A}
$$

::: {.notes}
$R_2\leftarrow R_2+2R_3$ işlemi ikinci çıktı satırını $[3\ 0\ 4]+2[2\ {-2}\ 5]=[7\ {-4}\ 14]$ biçiminde üretir. Birinci ve üçüncü satırlar değişmeden kalır. Doğrudan satır işlemi, hedef satır ile kaynak satırın iki katını bileşen bileşen toplar.

$E_6$'nın ikinci satırı $[0\ 1\ 2]$ olduğu için çarpımın ikinci satırı $r_2(A)+2r_3(A)$ olur. Birinci ve üçüncü katsayı satırları kendi girdi satırlarını seçer. Açık $E_6A$ çarpımı böylece elle hesaplanan üç satırın tamamını verir.

İki satır ekleme örneğinde hedef, kaynak ve katsayı değişti; $E$ yine işlemdeki sabit katsayıları kaydetti. Altı örneğin tamamında $A$'nın sayıları yalnız sonuç hesabında kullanıldı, $E$'yi seçerken kullanılmadı. Şimdi bu gözlemi her uygun boyuttaki matris için geçerli bir gerekçeye dönüştürebiliriz.
:::

---

## Altı Doğrulama, Tek Soru

$$
\begin{aligned}
\varepsilon_1(A)&=E_1A,&
\varepsilon_2(A)&=E_2A,&
\varepsilon_3(A)&=E_3A,\\
\varepsilon_4(A)&=E_4A,&
\varepsilon_5(A)&=E_5A,&
\varepsilon_6(A)&=E_6A
\end{aligned}
$$

Gözlenen ortaklık:

- $E$ yalnız işlemi kaydediyor
- $A$'nın değerleri kullanılmıyor
- Çarpan her defasında solda

> Asıl soru: Bu neden her $A$ için çalışır?

::: {.notes}
Altı eşitlik aynı $A$ matrisi üzerinde doğrudan hesapla doğrulandı. Bu doğrulamalar aday $E$ matrislerinin doğru seçildiğini gösteriyor, fakat genel iddiayı henüz vermiyor. Örneğin başka bir $A$ seçildiğinde aynı $E_1$ matrisinin yine ikinci satırı ikiyle çarpacağını ayrıca açıklamamız gerekiyor.

Ortak ipucu, $E$ matrisleri kurulurken $A$'nın içindeki sayılara hiç bakmamış olmamızdır. Yalnız hangi çıktı satırının hangi girdi satırlarından ve hangi katsayılarla üretileceğini kaydettik. Bu katsayıların girdi değerlerinden bağımsız olması, tek bir $E$ matrisinin bütün $A$ matrislerinde çalışabilmesini sağlayacak.

Soldan çarpma konumu da aynı gözlemden çıkar. Bir matris soldan çarpıldığında sonuç satırları sağdaki matrisin satırlarından oluşur. Satır işlemi $A$'nın satırlarını değiştirdiğine göre kullanacağımız çarpım yönü $EA$ olmak zorundadır.
:::

---

## Mekanizma: Satır Birleşimi

$$
C=[c_{ik}]\in\mathbb{R}^{m\times m},
\qquad
A\in\mathbb{R}^{m\times n}
$$

$$
\boxed{r_i(CA)=\sum_{k=1}^{m}c_{ik}\,r_k(A)}
$$

$C$'nin $i$. satırı → çıktı katsayıları

::: {.notes}
Matris çarpımlarında kurduğumuz satır birleşimi kimliği, genel mekanizmayı hazır olarak veriyor. $C$ matrisinin $i$. satırındaki katsayılar, $CA$ çarpımının $i$. satırını $A$'nın satırlarından kuruyor. Toplam indisi $k$, $A$'nın bütün girdi satırları boyunca ilerliyor.

Bu kimlikte $A$'nın sütunlarındaki sayılar katsayı seçimini etkilemez. Katsayılar bütünüyle $C$ matrisinden gelir ve her sütunda aynı biçimde uygulanır. Dolayısıyla satırların tamamına aynı işlemi uygulayan bir kuralı temsil etmek için uygun bir katsayı matrisi bulmamız yeterlidir.

Kanıtın geri kalanı bu okumayı elementer işlemlere uygulayacak. Önce her işlemin gerçekten sabit katsayılarla yazıldığını belirleyeceğiz. Sonra bu katsayıları bir matriste toplayıp o matrisin kimliğini birim matris üzerinden bulacağız.
:::

---

## Kanıt: Adım 1 — Katsayılar Sabit

Her çıktı satırı, girdi satırlarından kurulur:

- Ölçeklenen satır: $\lambda$ ve $0$'lar
- Takas edilenler: $0$ ve $1$
- Güncellenen satır: $1,\lambda,0$'lar
- Değişmeyen satır: kendi katsayısı $1$

$$
\boxed{\text{Katsayılar }A\text{'nın girdilerine bağlı değildir.}}
$$

::: {.notes}
Bir satırı $\lambda$ ile ölçeklerken güncellenen çıktı satırı $\lambda r_i(A)$ olur. Bu satırın birleşiminde $r_i(A)$'nın katsayısı $\lambda$, diğer bütün satırların katsayısı sıfırdır. Değişmeyen her çıktı satırı ise yalnız kendi girdi satırını katsayı $1$ ile alır.

İki satırı yer değiştirme işleminde ilgili çıktı satırları birbirlerinin girdi satırını katsayı $1$ ile seçer. Bir satırın $\lambda$ katını başka bir satıra eklerken güncellenen çıktı satırı $r_i(A)+\lambda r_j(A)$ biçimindedir. Burada kullanılan katsayılar da yalnız işlemde yazan konumlara ve $\lambda$ değerine bağlıdır.

Üç durumda da $A$'nın elemanlarını okuyup katsayı hesaplamıyoruz. İşlem daha girdi matrisi verilmeden hangi satırın hangi sabit katsayılarla oluşacağını belirliyor. Bu sabitlik, aynı katsayı tablosunun uygun boyuttaki her $A$ matrisi için kullanılabilmesini sağlar.
:::

---

## Kanıt: Adım 2 — Matris Vardır

Sabit katsayıları bir matriste toplayalım:

$$
C=[c_{ik}],
\qquad
r_i\bigl(\varepsilon(A)\bigr)
=\sum_{k=1}^{m}c_{ik}\,r_k(A)
=r_i(CA)
$$

Bütün satırlar eşit olduğundan:

$$
\boxed{\varepsilon(A)=CA\qquad\text{her }A\in\mathbb{R}^{m\times n}\text{ için}}
$$

::: {.notes}
Adım 1 her çıktı satırı için $m$ tane sabit katsayı verdi. $i$. çıktı satırına ait katsayıları $C$ matrisinin $i$. satırına yazıyoruz. Böylece $C$ matrisi $m$ çıktı satırı için $m$ ayrı katsayı listesini tek bir tabloda topluyor.

Satır birleşimi kimliği, $CA$ çarpımının $i$. satırını tam olarak bu katsayılarla üretir. Öte yandan $\varepsilon(A)$ işlemi de aynı çıktı satırını aynı katsayılarla kurar. Bu eşitlik her $i=1,\ldots,m$ için geçerli olduğundan iki matrisin karşılık gelen bütün satırları eşittir ve $\varepsilon(A)=CA$ sonucuna ulaşırız.

Varlık burada kurulmuş olur: işlemden gelen sabit katsayılar en az bir $C$ matrisi üretir. Bu adımda $C$'nin birim matrisle ilişkisini henüz kullanmadık. Önce temsil eden matrisin varlığını elde etmek, sonraki adımda o matrisin hangisi olduğunu güvenle belirlememizi sağlar.
:::

---

## Kanıt: Adım 3 — Matrisin Kimliği

Eşitlik her $A$ için geçerliydi. $A=I_m$ seçelim:

$$
\varepsilon(I_m)=CI_m=C
$$

$$
E:=\varepsilon(I_m)
$$

$$
\boxed{\varepsilon(A)=EA,\qquad E=\varepsilon(I_m)}
$$

::: {.notes}
Adım 2'deki eşitlik uygun boyutlu her $A$ matrisi için geçerli olduğu için özel olarak $A=I_m$ koyabiliriz. Birim matris çarpımda etkisizdir; dolayısıyla sağ taraf $CI_m=C$ olur. Sol taraf ise elementer işlemin birim matrise uygulanmış hâlidir ve aradığımız matrisi doğrudan verir.

Sıra burada belirleyicidir. Önce bir $C$ matrisinin bütün $A$ girdileri için çalıştığını kurduk, sonra $A=I_m$ seçerek $C$'yi tanımladık. Doğrudan $E=\varepsilon(I_m)$ yazmak bir aday üretir; bu adayın her $A$ için çalıştığını söylemek için yine Adım 1 ve Adım 2 gerekir.

"Her $A$ için" koşulu tek bir sayısal doğrulamaya indirgenemez. Tek bir $A$ üzerinde aynı sonucu veren farklı sol çarpanlar bulunabilir; özellikle $A$ satırları arasında bağımlılık varsa katsayılar tek biçimde belirlenmeyebilir. $I_m$'nin satırları bağımsız olduğundan $C I_m=C$ eşitliği bu belirsizliği ortadan kaldırır ve temsil eden matrisi doğrudan açığa çıkarır.
:::

---

## İlk Üç Örneğe Geri Dönelim

$$
E_1=\varepsilon_1(I_3)=
\begin{bmatrix}
1&0&0\\
0&2&0\\
0&0&1
\end{bmatrix}
$$

$$
E_2=\varepsilon_2(I_3)=
\begin{bmatrix}
-2&0&0\\
0&1&0\\
0&0&1
\end{bmatrix}
$$

$$
E_3=\varepsilon_3(I_3)=
\begin{bmatrix}
0&0&1\\
0&1&0\\
1&0&0
\end{bmatrix}
$$

::: {.notes}
İlk örnekte $I_3$'ün ikinci satırını ikiyle çarpmak $E_1$ matrisini verir. Genel sonuç artık bu matrisin yalnız seçtiğimiz sayısal $A$ için değil, üç satırlı her $A$ için aynı ölçeklemeyi yaptığını söylüyor. $E_1A$ çarpımının ikinci satırı her zaman $2r_2(A)$, diğer satırları kendi karşılıkları olur.

İkinci örnekte $I_3$'ün birinci satırını $-2$ ile çarpmak $E_2$'yi üretir. Satır birleşimi okuması $E_2A$ çarpımının ilk satırını $-2r_1(A)$ yapar. Böylece iki ölçekleme örneği farklı satır ve katsayılarla aynı genel mekanizmaya bağlanır.

Üçüncü örnekte $I_3$'ün birinci ve üçüncü satırlarını değiştirmek $E_3$'ü verir. $E_3$'ün sıfır ve birleri, $r_3(A)$'yı ilk konuma ve $r_1(A)$'yı üçüncü konuma taşır. Doğrudan hesapla gördüğümüz ilk üç eşitlik artık $E_j=\varepsilon_j(I_3)$ kimliğinin örnekleridir.
:::

---

## Son Üç Örneğe Geri Dönelim

$$
E_4=\varepsilon_4(I_3)=
\begin{bmatrix}
0&1&0\\
1&0&0\\
0&0&1
\end{bmatrix}
$$

$$
E_5=\varepsilon_5(I_3)=
\begin{bmatrix}
1&0&0\\
0&1&0\\
-3&0&1
\end{bmatrix}
$$

$$
E_6=\varepsilon_6(I_3)=
\begin{bmatrix}
1&0&0\\
0&1&2\\
0&0&1
\end{bmatrix}
$$

::: {.notes}
Dördüncü örnekte $I_3$'ün ilk iki satırını değiştirmek $E_4$ matrisini üretir. $E_4A$ çarpımının ilk iki satırı sırasıyla $r_2(A)$ ve $r_1(A)$ olur. İki takas örneği, değiştirilen satırlar farklı olsa da katsayı matrisinin aynı seçim mantığıyla kurulduğunu gösterir.

Beşinci örnekte $I_3$ üzerinde $R_3\leftarrow R_3-3R_1$ işlemi $E_5$'i verir. Altıncı örnekte $R_2\leftarrow R_2+2R_3$ işlemi $E_6$'yı üretir. Bu satırlardaki $[-3\ 0\ 1]$ ve $[0\ 1\ 2]$ katsayıları, aynı birleşimleri her $A$ matrisinin satırlarına taşır.

Bölümün başındaki altı eşitliğin her biri şimdi iki aşamalı olarak doğrulandı. Önce elementer işlem ile açık $E_jA$ çarpımının aynı sayısal sonucu verdiğini gördük; ardından her $E_j$'nin aynı işlemin $I_3$ üzerindeki sonucu olduğunu belirledik. Kanıt, bu örneklerde görülen yapının bütün uygun boyutlara neden yayıldığını açıklıyor.
:::

---

## Boyutu Ne Belirler?

$$
A\in\mathbb{R}^{m\times n},
\qquad
E\in\mathbb{R}^{m\times m}
$$

$$
(m\times m)(m\times n)\longrightarrow m\times n
$$

$$
\boxed{E\text{'nin boyutunu }A\text{'nın satır sayısı belirler.}}
$$

::: {.notes}
Bir satır işlemi $m$ girdi satırından $m$ çıktı satırı üretir. Her çıktı satırı için $m$ katsayı gerektiğinden katsayı tablosunun $m$ satırı ve $m$ sütunu vardır. Bu nedenle temsil eden elementer matris $E\in\mathbb{R}^{m\times m}$ biçimindedir.

Kanıtın hiçbir adımında $A$'nın sütun sayısını ya da hücrelerdeki belirli değerleri kullanmadık. $n$, yalnız her satır vektörünün kaç bileşenli olduğunu söyler; aynı satır birleşimi bu bileşenlerin tamamına birlikte uygulanır. Bu yüzden tek bir $E$, aynı satır sayısını taşıyan farklı sütun sayılarına sahip matrislerde de aynı satır işlemini yapar.

Boyut kontrolü çarpanın neden solda olduğunu bir kez daha doğrular. $EA$ çarpımı tanımlıdır ve $A$ ile aynı $m\times n$ şeklini verir. $A$'nın sağına yazılan bir çarpan ise sütunları birleştirir; satır işlemini temsil eden mekanizma bu değildir.
:::

---

## Sık Yapılan Hatalar

1. $E$'yi $A$'nın sağına yazmak.
2. $E$'yi $n\times n$ seçmek.
3. Tek örneği kanıt saymak.
4. Kimliği varlıktan önce kullanmak.

::: {.notes}
Birinci hata satır birleşimi ile sütun birleşimini karıştırır. Soldan çarpma sonuç satırlarını, sağdan çarpma sonuç sütunlarını girdilerden birleştirir. Elementer satır işlemi için doğru yön bu nedenle $EA$'dır.

İkinci hata $E$'nin boyutunu $A$'nın sütun sayısından alır. Oysa $E$ her çıktı satırı için bütün girdi satırlarının katsayılarını taşıdığı için $m\times m$ olmalıdır. Üçüncü hata, belirli bir $A$ üzerindeki eşitliğin bütün girdilere yayıldığını varsayar; bu geçişi sağlayan bilgi katsayıların girdiden bağımsız olmasıdır.

Dördüncü hata $E=\varepsilon(I_m)$ adayını bulunca kanıtın tamamlandığını düşünür. Birim matris doğru adayı görünür kılar, fakat adayın her $A$ için çalışması Adım 1'deki sabit katsayı gözlemine ve Adım 2'deki varlık sonucuna dayanır. Kanıt sırası bu iki ayrı işi birbirine karıştırmamızı önler.
:::

---

## Karar Soruları

1. Çarpan neden soldadır?
2. $E$ neden $m\times m$'dir?
3. Neden $A=I_m$ seçilir?
4. Tek bir $A$ yeterli midir?

::: {.notes}
Birinci sorunun cevabı satır birleşimi kimliğidir: $EA$ çarpımının satırları $A$'nın satırlarından kurulur. Sağdan çarpma ise $A$'nın sütunlarını birleştirir. İkinci soruda $m$ çıktı satırının her biri $m$ girdi satırı için birer katsayı ister; bu katsayılar $m\times m$ tabloda toplanır.

Üçüncü soruda birim matris çarpanı görünür kılar. $\varepsilon(A)=CA$ eşitliğine $A=I_m$ yazınca $CI_m=C$ olur ve $C=\varepsilon(I_m)$ doğrudan okunur. Başka bir özel matris aynı sadeliği ve katsayıların tekliğini garanti etmez.

Dördüncü sorunun cevabı hayırdır. Bir tek sayısal örnek aday matrisi sınar, fakat iddia uygun boyuttaki bütün $A$ matrislerini kapsar. Genelliği sağlayan adım, işlemin satır katsayılarının $A$'nın elemanlarından bağımsız olduğunu göstermektir.
:::

---

## Sonuç: İşlem Bir Çarpandır

$$
\boxed{\varepsilon(A)=EA,\qquad E=\varepsilon(I_m)}
$$

- Denklem sistemleri: iddianın kullanımı
- Gauss: işlem dizilerinin bileşimi
- Ters matris: $[A\mid I]$ yöntemi
- Rank ve determinant: sonuçlar

::: {.notes}
Kanıtın iki sonucu var. Her elementer satır işlemi, satırları sabit katsayılarla birleştirdiği için uygun bir $E$ matrisiyle soldan çarpma olarak yazılır. Bu matris, aynı işlemin birim matrise uygulanmasıyla elde edilir; yani $\varepsilon(A)=EA$ ve $E=\varepsilon(I_m)$ eşitlikleri birlikte geçerlidir.

Lineer denklem sistemleri notundaki kutulu iddianın gerekçesi artık tamamlandı. Gauss eliminasyonu notu birden fazla işlemin çarpım sırasını, ters matris notu elementer matrislerin tersinirliğini ve $[A\mid I]$ yöntemini, rank notu satır işlemlerinin rank üzerindeki etkisini ele alıyor. Determinant notu da satır işlemlerinin determinantı nasıl değiştirdiğini bu temsil üzerinden okuyacak.

Bu bağlantıların her biri burada kanıtlanan eşitliği veri olarak kullanır. Bu notun kurduğu parça, tek bir elementer işlemin matris karşılığıdır: işlem birim matris üzerinde kaydedilir ve aynı $E$, uygun satır sayısına sahip her girdiye soldan uygulanır.
:::
