---
title: "Temel Lineer Cebir: İç Çarpım"
subtitle: Lineer Cebir — 2
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-01-01
execute:
  echo: false
---

## Geçen Konudan Köprü

- Vektörleri sıralı sayılar olarak tanımladık
- Toplama, skaler çarpma ve uzunluk fikrini gördük
- Şimdi iki vektörden tek sayı üreten önemli bir işlem kuracağız

$$
\text{vektör} \times \text{vektör} \longrightarrow \text{sayı}
$$

Bu işleme **iç çarpım** denir.

::: {.notes}
Önceki derste vektörler üzerinde iki işlem gördük: toplama ve skaler çarpma. Her ikisinin de sonucu yine bir vektördür — aynı boyutta, aynı türde bir nesne elde ederiz. İç çarpım bu düzeni bozar: girdi olarak iki vektör alır, ama çıktı olarak tek bir sayı (skaler) üretir. Bu, iç çarpımı toplama ve skaler çarpmadan kavramsal olarak ayıran temel özelliktir.

Bu fark önemlidir çünkü karıştırılabilir: $u+v$ bir vektördür, $\alpha u$ bir vektördür, ama $\langle u,v\rangle$ bir sayıdır. İki vektörden bir sayı üretmenin ne işe yaradığı az sonra netleşecek — uzunluk, açı ve dikliğin hepsi bu tek işlemden türetilecektir.
:::

---

## İç Çarpımın Algoritması

Aynı boyutlu iki vektör:

$$
u=
\begin{bmatrix}
u_1\\u_2\\u_3
\end{bmatrix},
\qquad
v=
\begin{bmatrix}
v_1\\v_2\\v_3
\end{bmatrix}
$$

İç çarpım:

$$
\langle u,v\rangle
=
u_1v_1+u_2v_2+u_3v_3
$$

Kural:

1. Aynı konumdaki bileşenleri çarp
2. Sonuçları topla

::: {.notes}
İç çarpımın kuralı iki adımdan oluşur: önce aynı konumdaki bileşenler birbiriyle çarpılır ($u_1v_1$, $u_2v_2$, $u_3v_3$), sonra bu üç çarpım toplanır. Bu, vektör toplamasındaki "aynı hizadaki bileşenleri eşle" mantığının bir devamıdır; fark, burada eşleşen bileşenlerin toplanması değil çarpılması, sonra bu çarpımların toplanmasıdır.

İç çarpım için $\langle u,v\rangle$ ve $u\cdot v$ notasyonlarının ikisi de yaygın kullanılır; ikisi de aynı işlemi ifade eder. $\langle \cdot,\cdot\rangle$ gösterimi ilerleyen derslerde kuantum hesaplamadaki bra-ket notasyonuyla ($\langle\psi|\phi\rangle$) doğrudan örtüşeceği için bu derste tercih edilecektir.
:::

---

## Örnek: Adım Adım

$$
u=
\begin{bmatrix}
2\\
-1\\
4
\end{bmatrix},
\qquad
v=
\begin{bmatrix}
3\\
5\\
-2
\end{bmatrix}
$$

$$
\langle u,v\rangle
=
2\cdot3+(-1)\cdot5+4\cdot(-2)
$$

$$
=
6-5-8
=
-7
$$

Sonuç:

$$
\langle u,v\rangle=-7
$$

::: {.notes}
Bu örnek, "aynı hizadaki bileşenleri çarp, sonra topla" kalıbının somut uygulamasıdır. $u=\begin{bmatrix}2\\-1\\4\end{bmatrix}$ ve $v=\begin{bmatrix}3\\5\\-2\end{bmatrix}$ için önce üç çarpım hesaplanır: $2\cdot3=6$, $-1\cdot5=-5$, $4\cdot(-2)=-8$. Ardından bu üç sayı toplanır: $6-5-8=-7$.

Sonucun negatif çıkması dikkat çekicidir — iç çarpımın işareti daha sonra göreceğimiz açı yorumuyla doğrudan ilişkilidir. Şimdilik yalnızca mekanik: her adımda bir çarpma, sonunda bir toplama.
:::

---

## Boyutlar Aynı Olmalı

Tanımlı:

$$
\left\langle
\begin{bmatrix}1\\2\\3\end{bmatrix},
\begin{bmatrix}4\\5\\6\end{bmatrix}
\right\rangle
=
1\cdot4+2\cdot5+3\cdot6
$$

Tanımlı değil:

$$
\left\langle
\begin{bmatrix}1\\2\\3\end{bmatrix},
\begin{bmatrix}4\\5\end{bmatrix}
\right\rangle
$$

Çünkü eşleşmeyen bileşen kalır.

::: {.callout-warning}
## Dikkat

İç çarpım için vektörlerin boyutları aynı olmalıdır.
:::

::: {.notes}
İç çarpımın tanımı, her bileşenin karşı vektördeki kendi hizasındaki bileşenle eşleşmesine dayanır. Boyutlar farklıysa bir kısım bileşenin eşleneceği karşılık kalmaz; $\begin{bmatrix}1\\2\\3\end{bmatrix}$ ile $\begin{bmatrix}4\\5\end{bmatrix}$ çarpılmaya çalışıldığında üçüncü bileşen ($3$) eşsiz kalır ve işlem tanımsız olur.

Bu kısıt vektör toplamasındaki boyut uyumu kuralıyla aynı köktendir: her iki işlem de bileşen bazlı eşleşmeye dayanır, bu yüzden ikisi de yalnızca aynı boyutlu vektörler arasında tanımlıdır.
:::

---

## Kendisiyle İç Çarpım

$$
u=
\begin{bmatrix}
3\\
4
\end{bmatrix}
$$

$$
\langle u,u\rangle
=
3\cdot3+4\cdot4
=
9+16
=
25
$$

Bu değer uzunluğun karesidir:

$$
\|u\|^2=\langle u,u\rangle
$$

Dolayısıyla:

$$
\|u\|=\sqrt{\langle u,u\rangle}=5
$$

::: {.notes}
Bir vektörü kendisiyle iç çarpınca ortaya çıkan sonuç, önceki derste gördüğümüz norm karesiyle tam olarak örtüşür. $u=\begin{bmatrix}3\\4\end{bmatrix}$ için $\langle u,u\rangle=3\cdot3+4\cdot4=9+16=25$ bulunur; bu da $\|u\|^2=25$, yani $\|u\|=5$ değerine karşılık gelir — önceki derste Pisagor'dan doğrudan hesapladığımız aynı sonuç.

Bu örtüşme rastlantı değildir: norm zaten $\|u\|=\sqrt{u_1^2+u_2^2+\cdots}$ olarak tanımlanmıştı, ve $\langle u,u\rangle=u_1\cdot u_1+u_2\cdot u_2+\cdots=u_1^2+u_2^2+\cdots$ ifadesi tam olarak bu toplamdır. Bu ilişki, iç çarpımı yalnızca yeni bir işlem olarak değil, norm kavramının genellemesi olarak görmemizi sağlar.
:::

---

## Norm Karesi

Bir vektör:

$$
u=
\begin{bmatrix}
u_1\\u_2\\ \vdots \\u_n
\end{bmatrix}
$$

Norm karesi:

$$
\|u\|^2
=
\langle u,u\rangle
=
u_1^2+u_2^2+\cdots+u_n^2
$$

Norm:

$$
\|u\|
=
\sqrt{u_1^2+u_2^2+\cdots+u_n^2}
$$

::: {.notes}
Norm karesi, vektörün kendisiyle iç çarpımının genel $n$ boyutlu ifadesidir: $\|u\|^2=\langle u,u\rangle=u_1^2+u_2^2+\cdots+u_n^2$. Karekök alma işlemi bu toplamdan gerçek uzunluğu ($\|u\|$) çıkarır, ama karekök almadan önceki hâl — norm karesi — birçok kontrolde başlı başına yeterlidir.

Örneğin bir vektörün birim vektör olup olmadığını denetlerken $\|u\|=1$ yerine $\|u\|^2=1$ kontrolü yapılabilir; sonuç aynıdır ama karekök işlemi atlanmış olur. Bu kısayol, özellikle kesirli bileşenlerle çalışırken işlemi sadeleştirir.
:::

---

## Birim Vektör Kontrolü

Bir vektörün birim vektör olması:

$$
\|u\|=1
$$

Eşdeğer olarak:

$$
\langle u,u\rangle=1
$$

Örnek:

$$
u=
\begin{bmatrix}
\frac{3}{5}\\
\frac{4}{5}
\end{bmatrix}
$$

$$
\langle u,u\rangle
=
\left(\frac{3}{5}\right)^2+
\left(\frac{4}{5}\right)^2
=
\frac{9}{25}+\frac{16}{25}
=1
$$

::: {.notes}
Bir vektörün birim vektör olması, normunun tam olarak $1$ olması demektir; bu da kendisiyle iç çarpımının $1$'e eşit olmasına eşdeğerdir. Örnekte $u=\begin{bmatrix}3/5\\4/5\end{bmatrix}$ için $\langle u,u\rangle=(3/5)^2+(4/5)^2=9/25+16/25=25/25=1$ bulunur, dolayısıyla bu vektör birim vektördür.

Bu kontrol yöntemi, önceki derste norm karesiyle yapılan kontrolün iç çarpım diliyle yeniden ifadesidir: $\|u\|=1 \Leftrightarrow \langle u,u\rangle=1$. İki ifade aynı bilgiyi taşır; iç çarpım gösterimi ilerleyen konularda ortogonallik ve normalize etme ile birlikte kullanıldığında daha pratik hale gelir.
:::

---

## Ortogonallik

İki vektörün iç çarpımı sıfırsa, bu vektörler **ortogonaldir**.

$$
\langle u,v\rangle=0
$$

İki boyutta bu genellikle "dik" anlamına gelir.

Örnek:

$$
u=
\begin{bmatrix}
1\\0
\end{bmatrix},
\qquad
v=
\begin{bmatrix}
0\\1
\end{bmatrix}
$$

$$
\langle u,v\rangle
=
1\cdot0+0\cdot1
=0
$$

::: {.notes}
İki vektörün iç çarpımı sıfır çıkıyorsa, bu vektörlere **ortogonal** denir. İki ve üç boyutta ortogonallik doğrudan geometrik dikliğe karşılık gelir; ancak tanım cebirsel olduğu için dört, beş ya da daha yüksek boyutlu vektörler için de aynı şekilde çalışır — orada artık göz ile "dik" olduklarını göremesek de iç çarpımları sıfırsa ortogonaldirler.

Standart baz vektörleri bu fikrin en temiz örneğidir: $u=\begin{bmatrix}1\\0\end{bmatrix}$ ve $v=\begin{bmatrix}0\\1\end{bmatrix}$ için $\langle u,v\rangle=1\cdot0+0\cdot1=0$ bulunur. Bu sonuç şaşırtıcı değildir çünkü $e_1$ ve $e_2$ zaten düzlemde birbirine dik eksenleri temsil ediyordu; iç çarpım bu geometrik gerçeği cebirsel olarak doğrular.
:::

---

## Başka Bir Ortogonal Çift

$$
u=
\begin{bmatrix}
1\\
1
\end{bmatrix},
\qquad
v=
\begin{bmatrix}
1\\
-1
\end{bmatrix}
$$

$$
\langle u,v\rangle
=
1\cdot1+1\cdot(-1)
=
1-1
=0
$$

Bu iki vektör ortogonaldir.

Normalize edilmiş halleri:

$$
\frac{1}{\sqrt{2}}
\begin{bmatrix}1\\1\end{bmatrix},
\qquad
\frac{1}{\sqrt{2}}
\begin{bmatrix}1\\-1\end{bmatrix}
$$

::: {.notes}
$u=\begin{bmatrix}1\\1\end{bmatrix}$ ve $v=\begin{bmatrix}1\\-1\end{bmatrix}$ için $\langle u,v\rangle=1\cdot1+1\cdot(-1)=1-1=0$ bulunur; bu iki vektör de standart baz vektörleri gibi eksenlere hizalı olmasa da ortogonaldir. Bu, ortogonalliğin yalnızca $e_1$-$e_2$ gibi özel çiftlere değil, birbirine dik olan herhangi bir vektör çiftine uygulandığını gösterir.

Bu iki vektörün normu ise $1$ değildir: $\|u\|=\sqrt{1^2+1^2}=\sqrt{2}$. Normalize etmek için her vektör kendi normuna bölünür, sonuçta $\frac{1}{\sqrt{2}}\begin{bmatrix}1\\1\end{bmatrix}$ ve $\frac{1}{\sqrt{2}}\begin{bmatrix}1\\-1\end{bmatrix}$ elde edilir. Bu iki normalize vektör hem ortogonaldir hem de birim uzunluktadır — bu kombinasyona **ortonormal** çift denir ve ilerleyen konularda kuantum durumlarının temel bazlarını oluşturacaktır.
:::

---

## Normalize Etme

Birim olmayan bir vektörü birim hale getirebiliriz.

$$
u=
\begin{bmatrix}
3\\
4
\end{bmatrix},
\qquad
\|u\|=5
$$

Normalize edilmiş vektör:

$$
\frac{1}{\|u\|}u
=
\frac{1}{5}
\begin{bmatrix}
3\\
4
\end{bmatrix}
=
\begin{bmatrix}
\frac{3}{5}\\
\frac{4}{5}
\end{bmatrix}
$$

Kontrol:

$$
\left(\frac{3}{5}\right)^2+
\left(\frac{4}{5}\right)^2=1
$$

::: {.notes}
Normalize etme, bir vektörü kendi normuna bölerek uzunluğunu $1$'e indirgeme işlemidir; yön değişmez, yalnızca ölçek değişir. $u=\begin{bmatrix}3\\4\end{bmatrix}$ için $\|u\|=5$ olduğundan, normalize edilmiş vektör $\frac{1}{5}\begin{bmatrix}3\\4\end{bmatrix}=\begin{bmatrix}3/5\\4/5\end{bmatrix}$ olur.

Bunun neden bir birim vektör olduğu doğrudan kontrol edilebilir: $(3/5)^2+(4/5)^2=9/25+16/25=1$. Bu işlem daha önceki bir dersteki "her vektör, skalerle çarpılarak istenen uzunluğa ölçeklenebilir" fikrinin özel bir uygulamasıdır — burada seçilen skaler $1/\|u\|$'dir ve sonuç her zaman birim vektör olur.
:::

---

## İç Çarpımın Geometrik Yorumu

İki boyutta:

$$
\langle u,v\rangle
=
\|u\|\|v\|\cos\theta
$$

Burada $\theta$, iki vektör arasındaki açıdır.

Sonuçlar:

- $\langle u,v\rangle>0$: açı dar
- $\langle u,v\rangle=0$: açı dik
- $\langle u,v\rangle<0$: açı geniş

::: {.notes}
İki boyutta iç çarpım, iki vektörün normları ile aralarındaki açının kosinüsünün çarpımına eşittir: $\langle u,v\rangle=\|u\|\|v\|\cos\theta$. Bu formül, iç çarpımın işaretinin neden açı hakkında bilgi taşıdığını açıklar: $\cos\theta$ dar açılarda ($\theta<90°$) pozitif, dik açıda ($\theta=90°$) sıfır, geniş açılarda ($\theta>90°$) negatiftir; normlar ise her zaman pozitif olduğundan işaret tamamen $\cos\theta$'dan gelir.

Bu ilişki, ortogonalliğin neden iç çarpımın sıfır olmasıyla tanımlandığını da netleştirir: $\theta=90°$ olduğunda $\cos\theta=0$ olur ve formül otomatik olarak $\langle u,v\rangle=0$ verir. Böylece daha önce cebirsel olarak tanımladığımız ortogonallik, burada geometrik açıklamasına kavuşur.
:::

---

## Projeksiyon Fikri

İç çarpım, bir vektörün başka bir yöndeki bileşenini ölçmek için kullanılır.

Birim vektör $e$ yönünde:

$$
\text{u'nun e yönündeki skaler bileşeni}
=
\langle u,e\rangle
$$

Örnek:

$$
u=
\begin{bmatrix}
3\\
4
\end{bmatrix},
\qquad
e_1=
\begin{bmatrix}
1\\
0
\end{bmatrix}
$$

$$
\langle u,e_1\rangle
=
3\cdot1+4\cdot0
=3
$$

::: {.notes}
İç çarpımın bir başka kullanımı, bir vektörün belirli bir yöndeki bileşenini ölçmektir. $u$ vektörünün birim vektör $e$ yönündeki skaler bileşeni $\langle u,e\rangle$ olarak tanımlanır; bu değer, $u$'nun $e$ doğrultusunda ne kadar "ilerlediğini" ölçer.

Örnekte $u=\begin{bmatrix}3\\4\end{bmatrix}$ ve $e_1=\begin{bmatrix}1\\0\end{bmatrix}$ için $\langle u,e_1\rangle=3\cdot1+4\cdot0=3$ bulunur — bu, $u$'nun yatay eksendeki bileşeninin zaten $3$ olduğu gerçeğiyle örtüşür. Yani iç çarpım burada yeni bir sonuç üretmiyor, önceden bildiğimiz bileşen değerini genel bir formülle yeniden elde ediyor; bu formülün gücü, $e$ eksenlere hizalı olmadığında da aynı mantıkla çalışmasıdır.
:::

---

## Mini Kontrol

Hangi çiftler ortogonaldir?

$$
a=
\begin{bmatrix}
2\\1
\end{bmatrix},
\quad
b=
\begin{bmatrix}
1\\-2
\end{bmatrix}
$$

$$
c=
\begin{bmatrix}
3\\4
\end{bmatrix},
\quad
d=
\begin{bmatrix}
4\\3
\end{bmatrix}
$$

Kontrol:

$$
\langle a,b\rangle=2\cdot1+1\cdot(-2)=0
$$

$$
\langle c,d\rangle=3\cdot4+4\cdot3=24
$$

::: {.notes}
$a=\begin{bmatrix}2\\1\end{bmatrix}$ ve $b=\begin{bmatrix}1\\-2\end{bmatrix}$ için $\langle a,b\rangle=2\cdot1+1\cdot(-2)=2-2=0$ bulunur; bu iki vektör ortogonaldir. Buna karşılık $c=\begin{bmatrix}3\\4\end{bmatrix}$ ve $d=\begin{bmatrix}4\\3\end{bmatrix}$ için $\langle c,d\rangle=3\cdot4+4\cdot3=12+12=24$ çıkar, sıfırdan uzak olduğu için bu çift ortogonal değildir.

Bu iki sonuç arasındaki fark, bileşenlerin yalnızca aynı sayıları içermesinin ortogonallik için yeterli olmadığını gösterir: $c$ ve $d$ de $a$ ve $b$ gibi birbirinin bileşenleri yer değiştirilmiş hâli olsa da, işaret farkı olmadığı için iç çarpımları sıfırlanmaz.
:::

---

## Özet

1. İç çarpım, iki vektörden bir sayı üretir
2. Aynı konumdaki bileşenler çarpılır ve sonuçlar toplanır
3. $\langle u,u\rangle=\|u\|^2$
4. Birim vektör için $\langle u,u\rangle=1$
5. İç çarpımı sıfır olan vektörler ortogonaldir
6. Normalize etme, vektörün yönünü koruyup uzunluğunu 1 yapar

::: {.notes}
Bu bölümde iki vektörden tek bir sayı üreten iç çarpım işlemini kurduk: aynı konumdaki bileşenleri çarpıp topladık. Bu tek işlemden üç önemli kavram türedi — bir vektörün kendisiyle iç çarpımı norm karesini verdi, iç çarpımın sıfır olması ortogonalliği (dikliği) tanımladı, ve normla bölme normalize etme işlemini oluşturdu. Son olarak $\langle u,v\rangle=\|u\|\|v\|\cos\theta$ formülüyle iç çarpımın işaretinin açı hakkında bilgi taşıdığını gördük.

Sonraki derse köprü: Vektörler üzerinde işlem yapan yapılar matrislerdir. Bir matrisin bir vektörle çarpımında, matrisin her satırı vektörle ayrı ayrı iç çarpım yapar; yani matris-vektör çarpımı, burada kurduğumuz iç çarpım fikrinin satır satır tekrarlanmasıdır.
:::
