---
title: "Matris İşlemlerinin Doğuşu"
subtitle: "MATE 213 — Lineer Cebir"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-25
execute:
  echo: false
---

## Aynı Plan, İki Ekip

Birinci ekibin hazırladığı miktarlar:

| Etkinlik | Sandviç | İçecek | Tatlı |
| -------- | ------: | -----: | ----: |
| 1        |      12 |     10 |     6 |
| 2        |      18 |     15 |     7 |
| 3        |       9 |      6 |     5 |
| 4        |      24 |     18 |    12 |

İkinci ekibin tamamladığı miktarlar:

| Etkinlik | Sandviç | İçecek | Tatlı |
| -------- | ------: | -----: | ----: |
| 1        |       8 |      5 |     4 |
| 2        |      12 |     10 |     5 |
| 3        |       6 |      4 |     3 |
| 4        |      16 |     12 |     8 |

::: {.notes}
Etkinlik–ikram tablosuna geri dönüyoruz, ama bu kez toplam plan iki hazırlık ekibi arasında paylaşılmış durumda. Her ekip kendi tablosunu tutuyor ve iki tablo da aynı düzende: satırlar aynı dört etkinlik, sütunlar aynı üç ürün.

Sorumuz basit: günün toplam ikram planı nedir? Cevabı bulmak için yeni bir matematik kurmamıza gerek yok, ilkokul toplaması yeterli. Bu notun amacı da zaten bu hesabı öğretmek değil; hesabı yaparken hangi eşleşmeyi kullandığımızı fark etmek ve o eşleşmeye bir ad vermek.

Bu notta iki işlem kuracağız: karşılık gelen planları birleştirmek ve bütün planı aynı oranda değiştirmek. Çıkarma ve çarpım biçimlerini sonraki notlara bırakıyoruz.
:::

---

## Hangi Sayı Hangisiyle Toplanır?

Birinci etkinlik için:

$$
12+8=20,\qquad 10+5=15,\qquad 6+4=10
$$

İkinci etkinliğin sandviçi:

$$
18+12=30
$$

::: {.notes}
Birinci etkinliğin toplam sandviç sayısını bulurken birinci ekibin $12$ sandviçini ikinci ekibin $8$ sandviçiyle topluyoruz. İçeceği içecekle, tatlıyı tatlıyla eşleştiriyoruz. Kimse birinci etkinliğin sandviçini üçüncü etkinliğin tatlısıyla toplamayı düşünmez; eşleşme kendiliğinden doğru kuruluyor.

Bu kendiliğindenliğin altında somut bir kural var: aynı satır ve aynı sütun anlamına sahip değerler toplanıyor. Birinci ekibin $12$ değeri "birinci etkinlik, sandviç" konumunda; ikinci ekibin $8$ değeri de aynı konumda. Toplamı yazdığımız yer de yine aynı konum.

Kuralın çalışması için iki tablonun aynı düzende olması gerekiyor. Bir ekip etkinlikleri farklı sıraya koysaydı ya da ürün sütunlarını değiştirseydi, aynı konumdaki sayılar farklı şeyleri ölçerdi ve toplam anlamsız çıkardı. Konumun taşıdığı bilgi, işlemin kendisinden önce gelen koşuldur.
:::

---

## Satır Satır Yazmak

Her etkinliğin vektör toplamı:

$$
\begin{aligned}
[12,10,6]+[8,5,4]&=[20,15,10],\\
[18,15,7]+[12,10,5]&=[30,25,12],\\
[9,6,5]+[6,4,3]&=[15,10,8],\\
[24,18,12]+[16,12,8]&=[40,30,20].
\end{aligned}
$$

Dört satırı üst üste koyunca tam matris toplamı oluşur.

::: {.notes}
Birinci etkinliğin üç ayrı hesabını tek vektör toplamında topluyoruz. Aynı eşleşmeyi ikinci, üçüncü ve dördüncü etkinlik için de alt alta yazınca dört satırın tamamı görünür oluyor.

Her satırdaki birinci bileşen sandviçi, ikinci içeceği, üçüncü tatlıyı taşıyor. Dört satırı bir köşeli parantez içinde üst üste koymak, dört ayrı vektör toplamını tek matris toplamına dönüştürüyor.
:::

---

## Matris Toplama

$$
\boxed{(A+B)_{ij}=a_{ij}+b_{ij}}
$$

$$
\begin{bmatrix}12&10&6\\18&15&7\\9&6&5\\24&18&12\end{bmatrix}
+
\begin{bmatrix}8&5&4\\12&10&5\\6&4&3\\16&12&8\end{bmatrix}
=
\begin{bmatrix}20&15&10\\30&25&12\\15&10&8\\40&30&20\end{bmatrix}
$$

::: {.notes}
Aynı şekle sahip iki matrisin toplamı, karşılık gelen elemanların toplanmasıyla tanımlanır. Tanımı okurken $i$ ve $j$ indislerinin üç yerde de aynı olduğuna dikkat edin: soldaki matrisin $(i,j)$ elemanı, sağdaki matrisin $(i,j)$ elemanı ve sonucun $(i,j)$ elemanı. Konum boyunca hiçbir kayma yok, bu yüzden işlem "eleman bazlı" diye anılır.

Sonuç matrisi, notun başında kurduğumuz toplam ikram tablosunun ta kendisi. Yani $A_1+A_2=A$ eşitliği, iki ekibin planının birleşince günün toplam planını verdiğini söylüyor. Tanımı ezberlemek yerine bu eşleşmeyi hatırlamak yeterli: her konumda o konumun iki değeri toplanır.

Matrisin neyi temsil ettiği kuralı değiştirmez. Etkinlik planı yerine sıcaklık ölçümleri ya da graf bağlantıları olsaydı toplama yine aynı konum eşleştirmesiyle çalışırdı. Sıfır matrisiyle toplama da bu tanımın doğrudan sonucudur: her konuma $0$ eklendiğinde matris değişmez, yani $A+0=A$.
:::

---

## Şekiller Uymazsa

$$
A=\begin{bmatrix}1&2&3\\4&5&6\end{bmatrix},
\qquad
B=\begin{bmatrix}1&2\\3&4\\5&6\end{bmatrix}
$$

$$
A+B\ \text{tanımsız}
$$

> Altışar eleman — ama eşleşecek konum yok.

::: {.notes}
Toplama karşılık gelen elemanlar arasında tanımlandığı için iki matrisin aynı şekle sahip olması gerekir. Örnekteki $2\times3$ ve $3\times2$ matrislerin her birinde altı eleman var; buna rağmen toplam tanımsız. $A$ matrisinde $(1,3)$ konumu var, $B$ matrisinde yok; $B$ matrisinde $(3,1)$ konumu var, $A$ matrisinde yok. Eşleştirilecek konum çiftleri kurulamıyor.

Buradaki koşul eleman sayısı üzerinden değil, konum eşleşmesi üzerinden okunmalı. Aynı sayıda eleman taşımak yetmiyor; elemanların aynı adreslerde durması gerekiyor. Aynı ayrımı matris eşitliğinde de görmüştük: iki matrisin eşit olması için önce şekilleri uymalıydı. Şekil koşulu, "karşılık gelen konum" kavramının anlamlı olabilmesinin ön şartı.

Etkinlik örneğinde bu koşul kendiliğinden sağlanıyordu, çünkü iki ekip aynı dört etkinlik ve aynı üç ürün için plan yapıyordu. Bir ekip beş etkinlik listeleseydi tablolar toplanamazdı. Bu noktada modele müdahale edip dörder etkinlik varsayıp toplayabilir veya beşinci etkinliği olmayan ekibin beşinci etkinlik satırını $(0,\ 0,\ 0)$ olarak düzenleyebiliriz; fakat bu, lineer cebirin değil problem bağlamının değerlendirilmesi kısmına girer. Matematiksel olarak bu işlem yapılamaz; ancak problemi kurarken bağlamı ona göre güncellersek — tabii güncellenebiliyorsa — işlem anlamlı hâle getirilebilir.
:::

---

## Katılımcı Sayısı Arttı

Bütün miktarlar iki katına çıkacak:

$$
2(20)=40,
\qquad
2(15)=30,
\qquad
2(10)=20
$$

Tam plan aynı anda ölçeklenir:

$$
2
\begin{bmatrix}
20&15&10\\
30&25&12\\
15&10&8\\
40&30&20
\end{bmatrix}
=
\begin{bmatrix}40&30&20\\60&50&24\\30&20&16\\80&60&40\end{bmatrix}
$$

::: {.notes}
İkinci ihtiyaç farklı bir yapıda. Katılımcı sayısı iki katına çıktığı için bütün tam adetleri $2$ ile çarpıyoruz. Birinci etkinliğin sandviç sayısı $20$'den $40$'a, içecek $15$'ten $30$'a, tatlı $10$'dan $20$'ye çıkıyor.

Burada birinci ihtiyaçtan yapısal bir fark var: karşılaştırılan iki tablo yok. Tek tablodaki her değer aynı katsayıyla yeniden ölçekleniyor. Toplamada iki matris ve konum eşleşmesi vardı; burada bir matris ve bir sayı var.

Katsayının kendisi ölçekleme oranını taşır. İkram adedi gibi ayrık bir bağlamda $2$ doğal bir sonuç üretir; kesirli katsayıların uygun olup olmadığı ise ürünün nasıl sayıldığına bağlıdır.
:::

---

## Skalerle Çarpma

$$
\boxed{(\alpha A)_{ij}=\alpha a_{ij}}
$$

$$
1{,}5
\begin{bmatrix}20&15&10\\30&25&12\end{bmatrix}
=
\begin{bmatrix}30&22{,}5&15\\45&37{,}5&18\end{bmatrix}
$$

Şekil değişmez.

::: {.notes}
Bir matrisin bir skalerle çarpımı, her elemanın o skalerle çarpılmasıyla tanımlanır. Tanımda tek bir indis çifti var ve karşısında tek bir sayı duruyor; toplamadaki gibi iki matris arasında eşleştirme yapılmıyor. Bu yüzden skalerle çarpmanın şekil koşulu da yok — her şekilden matris her skalerle çarpılabilir.

İşlem matrisin şeklini değiştirmiyor. $2\times3$ bir matrisi hangi sayıyla çarparsanız çarpın sonuç yine $2\times3$ oluyor; değişen tek şey hücrelerdeki değerler. Ölçekleme bütün hücrelere aynı anda ve aynı oranda uygulandığı için tablonun iç oranları da korunuyor: birinci etkinlikte sandviç sayısı içecek sayısının $\frac{20}{15}$ katıydı, ölçeklemeden sonra da öyle.

Bir noktayı şimdiden ayıralım: skalerle çarpma ile matris çarpımı aynı şey değil. $\alpha A$ ifadesinde $\alpha$ bir sayı ve doğrudan elemanlara uygulanıyor. İki matrisin çarpımı ise bambaşka bir mekanizmayla kurulacak; onu ilerleyen notlarda göreceğiz.
:::

---

## İki İşlem, İki Farklı Görev

$$
\boxed{
\begin{array}{rcl}
\text{iki planı birleştirmek}
&\longrightarrow&
A+B\\[4pt]
\text{tek planı ölçeklemek}
&\longrightarrow&
\alpha A
\end{array}}
$$

- Toplama: iki matris, konum eşleşmesi
- Skalerle çarpma: bir matris, bir sayı

::: {.notes}
İki işlem de aynı etkinlik–ikram bağlamından çıktı, ama farklı sorulara cevap veriyorlar. Toplama iki ayrı kaynaktan gelen bilgiyi birleştiriyor ve çalışabilmesi için iki tablonun aynı düzende olmasını şart koşuyor. Skalerle çarpma tek bir tabloyu bütünüyle yeniden ölçekliyor ve hiçbir uyum koşulu aramıyor.

İkisinin ortak yanı, sonucun her elemanının girdilerin aynı konumdaki elemanlarından hesaplanması. Bu ortaklık her matris işlemi için geçerli değil: matris çarpımı bir satırın tamamıyla bir sütunun tamamını birleştirerek tek bir sonuç elemanı üretecek ve eleman bazlı olmayacak.

Buradaki asıl kazanç işlemlerin formülü değil, nereden geldikleri. Matris işlemleri keyfî kurallar değil; tekrarlanan doğal hesapların düzenli yazımı. Problemdeki eşleşme önce geliyor, tekrarlanan hesap onu izliyor, matris işlemi de o hesabın kısaltması oluyor.
:::

---

## Sık Yapılan Hatalar

1. Farklı düzendeki iki tabloyu toplamak.
2. Aynı eleman sayısını toplama için yeterli saymak.
3. Skalerle çarpmada tek satırı ölçeklemek.
4. $\alpha A$ ile matris çarpımını karıştırmak.

::: {.notes}
Birinci hata en sinsi olanı, çünkü işlem sayısal olarak yürür ve hata mesajı vermez. Bir ekip etkinlikleri $1,2,3,4$ sırasıyla, diğeri $4,3,2,1$ sırasıyla listelemişse tablolar aynı şekildedir ve toplanabilirler; ancak çıkan sonuç hiçbir etkinliğin gerçek toplamını vermez. İşlemden önce satır ve sütun anlamlarının örtüştüğünü kontrol etmek gerekir.

İkinci hata şekil koşulunu eleman sayısına indirger; $2\times3$ ile $3\times2$ matrisler altışar eleman taşır ama toplanamaz. Üçüncü hata skalerin kapsamını daraltır: $1{,}5A$ ifadesinde katsayı bütün hücrelere uygulanır, seçilmiş bir satıra ya da sütuna değil. Dördüncü hata ise ileride en çok karşılaşacağımız karışıklık; $\alpha A$ ifadesindeki $\alpha$ bir sayıdır, matris değildir.
:::

---

## Karar Soruları

1. İki ekip etkinlikleri farklı sırada listelemişse toplam doğru çıkar mı?
2. $3\times5$ bir matris hangi skalerlerle çarpılabilir?
3. $\alpha A$ işleminden sonra matrisin şekli ne olur?
4. Sıfır matrisiyle toplama neden matrisi değiştirmez?

::: {.notes}
Birinci soruda cevap hayır. Şekiller uyduğu için işlem tanımlıdır ve bir sonuç üretir, ama o sonuçtaki hiçbir satır gerçek bir etkinliğin toplamı değildir. Matematiksel tanımlılık ile bağlamsal doğruluk ayrı katmanlardır; bu ayrımı bir sonraki notta ayrıntılı ele alacağız.

İkinci soruda cevap "hepsiyle" — skalerle çarpmanın şekil koşulu yoktur. Üçüncü soruda şekil değişmez, $3\times5$ matris $3\times5$ kalır. Dördüncü soruda tanıma dönmek yeterli: toplama her konumda o konumun iki değerini topluyor, sıfır matrisinin her konumunda $0$ var, bir sayıya $0$ eklemek onu değiştirmiyor. Bu yüzden $A+0=A$ eşitliği tanımın doğrudan sonucu.
:::

---

## Sonraki Adım: Aynı İşlemler, Teknik Kuruluş

Bu notta:

- toplama ve skalerle çarpma bir problemden çıktı,
- tanımları konum eşleşmesiyle kuruldu.

Sırada:

- çıkarmanın negatifle toplama olarak kurulması,
- cebirsel özellikler ve eleman bazlı işlemlerin sınırı.

::: {.notes}
Bu notta iki işlemi bir ihtiyaçtan çıkararak kurduk. İki ekibin planını birleştirmek matris toplamasını, bütün planı yeniden ölçeklemek skalerle çarpmayı verdi. Her iki tanım da aynı fikre dayanıyordu: sonucun her elemanı, girdilerin aynı konumdaki elemanlarından hesaplanır.

Bir sonraki notta aynı iki işlemi teknik tarafından ele alacağız. Çıkarmanın neden ayrı bir temel işlem sayılmadığını, toplama ve skalerle çarpmanın hangi cebirsel özellikleri taşıdığını ve bu özelliklerin koordinat vektörlerindeki listeyle neden aynı olduğunu göreceğiz. Ayrıca bir işlemin tanımlı olmasıyla bağlamsal olarak anlamlı olması arasındaki farkı somut örneklerle ayıracağız.

Bu notu okuduktan sonra iki matrisi toplayabiliyor ve bir matrisi skalerle çarpabiliyor olmalısınız. Sonraki not hesabı değiştirmeyecek; hesabın hangi yapıya oturduğunu gösterecek.
:::
