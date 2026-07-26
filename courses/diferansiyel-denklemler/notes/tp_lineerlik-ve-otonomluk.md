---
title: "Lineerlik ve Otonomluk"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-07-26
execute:
  echo: false
---

## Denklemi Çözmeden Önce Adlandırmak

> Buraya kadar: ilk soru "hangi formülü kullanmalıyım" değil, "bu denklem hangi sınıfa aittir".
>
> Bu notta: sınıflandırmanın iki ölçütünü kuruyoruz — lineerlik ve otonomluk.

::: {.notes}

Değişimi okurken $y'=x+y^2$ denklemini doğrudan integralle çözmeyi denedik ve tıkandık. Oradaki sonuç şuydu: bir denklemin karşısına oturduğumuzda ilk iş formül aramak değil, denklemin hangi sınıfa ait olduğunu görmektir. Bu notun konusu, o sınıflandırmanın iki ölçütü.

Burada henüz çözüm yöntemi öğrenmiyoruz. Öğrendiğimiz şey, bir denkleme bakıp iki soruya cevap verebilmek. Lineerlik, lineer denklemlerin genel teorisinde kurulacak çözüm yapısının hangi denklemler için geçerli olduğunu belirleyecek. Otonomluk ise denklemi hiç çözmeden davranışını okumaya çalıştığımızda dayanacağımız yapıyı verecek.

:::

---

## İki Ayrı Sınıflandırma Ekseni

Bir diferansiyel denkleme iki bağımsız soru sorarız:

- Denklem **lineer** mi?
- Denklem **otonom** mu?

Bir sorunun cevabı diğerini belirlemez.

::: {.notes}

İki ölçüt farklı şeylere bakar. Lineerlik, bilinmeyen fonksiyonun ve türevlerinin denklemde hangi biçimde geçtiğiyle ilgilidir. Otonomluk ise bağımsız değişkenin denklemde açıkça görünüp görünmediğiyle. Aynı denklem üzerinde ikisi de sorulabilir ve dört kombinasyonun dördü de gerçekleşir; aşağıdaki tablo bu olasılıkları birlikte gösterir.

Bu ayrımı baştan yapmakta fayda var, çünkü iki terim sıkça karıştırılıyor. Önce lineerliği tanımlayalım, sonra otonomluğa geçelim.

:::

---

## Lineer Denklem: Genel Biçim

$$  
a_n(x)y^{(n)}+\cdots+a_1(x)y'+a_0(x)y=g(x)  
$$

- Katsayılar $a_i$: yalnız $x$'e bağlı
    
- $g(x)$: bilinmeyeni içermez
    
- $y$ ve türevleri: yalnız birinci derecede
    

$$  
y'+2xy=e^x  
\tag{1}  
$$

$$  
x^2y''-3xy'+4y=\sin x  
\tag{2}  
$$

::: {.notes}

Tanımdaki kısıt bilinmeyen tarafındadır. $a_0,\dots,a_n$ katsayıları ve sağ taraftaki $g$, bağımsız değişkenin fonksiyonlarıdır; içlerinde $y$ ya da $y$'nin herhangi bir türevi geçmez. Bilinmeyen terimler ise denklemde yalnızca $y$, $y'$, $y''$ biçiminde, birer katsayıyla çarpılmış olarak durur.

$(1)$ numaralı denklem birinci mertebedendir. $y'$ ve $y$ yalnız birinci derecede bulunur; $y$'nin katsayısı $2x$, sağ taraf ise yalnızca $x$'e bağlı $e^x$ fonksiyonudur.

$(2)$ numaralı denklem ikinci mertebeden ve değişken katsayılıdır. $y''$, $y'$ ve $y$ yine yalnız birinci derecededir; bunların katsayıları sırasıyla $x^2$, $-3x$ ve $4$'tür.

Bu yapının neden ayrı bir isim aldığını lineer teoride göreceğiz: iki çözümün toplamı ve bir çözümün skalerle katı yine çözüm olur. "Çözüm Nedir?" notunda $y''+y=0$ denkleminde $3\sin x-2\cos x$ adayının da çözüm çıkmasını bu yapıya borçluyduk. Nonlineer denklemlerde böyle bir garanti yoktur.

:::

---

## Lineerliği Ne Bozar?

| Terim | Sorun |
|---|---|
| $yy'$ | Bilinmeyenler birbiriyle çarpılmış |
| $(y')^2$ | Türev birinci dereceden yüksek |
| $\sin y$ | $y$ bir fonksiyonun içinde |
| $\sqrt{y}$ | $y$ kök içinde |

::: {.notes}

Dört ihlal de aynı kaynağa iner: bilinmeyen, denkleme "bir katsayıyla çarpılmış terim" olmaktan başka bir biçimde girmiştir. $yy'$ terimi iki bilinmeyeni çarpar; $(y')^2$ türevi kuvvete taşır; $\sin y$ ve $\sqrt{y}$ ise bilinmeyeni bir fonksiyonun argümanı yapar.

Buradaki "birinci derece" ifadesini, mertebe kavramıyla karıştırmamak gerekiyor. Mertebe, en yüksek türevin kaçıncı türev olduğunu sayar; derece ise o türevin hangi kuvvetten göründüğüne bakar. $(y')^3+y=0$ denklemi birinci mertebedendir — türev birinci türevdir — ama lineer değildir, çünkü o türev üçüncü kuvvetten geçmektedir. İki ölçüt aynı denklemde farklı şeyleri ölçer.

:::

---

## Katsayı Karmaşık Olabilir, Terim Olamaz

$$
y'+(\sin x)\,y=e^x \qquad \text{lineer}
$$

$$
y'+\sin y=e^x \qquad \text{nonlineer}
$$

Fark, sinüsün içinde ne olduğudur.

::: {.notes}

İki denklem yan yana konduğunda ayrımın nereye düştüğü görünüyor. Birincisinde sinüs, bağımsız değişkenin bir fonksiyonudur ve $y$'yi çarpan bir katsayı olarak durur; $a_1(x)=1$, $a_0(x)=\sin x$, $g(x)=e^x$ yazarak denklemi genel biçime oturtabiliriz. İkincisinde ise $y$'nin kendisi sinüsün içine girmiştir ve denklem hiçbir katsayı seçimiyle genel biçime oturmaz.

Katsayıların üstel, trigonometrik ya da parçalı tanımlı olması lineerliği bozmaz. Katsayı ne kadar çirkin olursa olsun, bilinmeyene yaptığı tek şey onu çarpmaktır. Bu, aşağıda göreceğimiz en yaygın hatanın da kaynağı: "lineer" sözcüğü gündelik dildeki "basit" anlamıyla okunuyor.

:::

---

## Hızlı Kontrol: Lineer mi?

| Denklem | Lineer? |
|---|---|
| $y'=x\sin x$ | ✓ |
| $y''+3y'-2y=\sin x$ | ✓ |
| $y'+y^2=x$ | ✗ |
| $(y')^3+y=0$ | ✗ |

::: {.notes}

Dört denklem de mertebe tablosundan tanıdık; bu kez aynı denklemlere ikinci ölçütle bakıyoruz. $y'=x\sin x$ lineerdir ve ilginç olan nedeni: bilinmeyen $y$ sağ tarafta hiç görünmez. Genel biçimde $a_1(x)=1$, $a_0(x)=0$, $g(x)=x\sin x$ alınır. Sağ tarafın karmaşık görünmesi bir şey değiştirmez, çünkü karmaşıklık $x$ tarafındadır. Bu denklem zaten doğrudan integralle çözülür.

$y''+3y'-2y=\sin x$ ikinci mertebedendir ama lineerdir; katsayılar sabittir, sağ taraf yalnız $x$'e bağlıdır. Buna karşılık $y'+y^2=x$ birinci mertebedendir ve lineer değildir, çünkü $y^2$ terimi bilinmeyeni kareye taşır. $(y')^3+y=0$ da aynı sebeple eler. Mertebe ile lineerliğin birbirini belirlemediği bu dört satırda görülüyor: birinci mertebeden nonlineer de var, ikinci mertebeden lineer de.

:::

---

## Otonom Denklem

Birinci mertebe otonom denklem:

$$
y'=f(y)
$$

- Sağ tarafta bağımsız değişken açıkça yok
- Eğim yalnız o andaki $y$ değerine bağlı

::: {.notes}

Otonom bir denklemde eğimi belirleyen tek şey bilinmeyenin o andaki değeridir. Aynı $y$ seviyesindeki bütün noktalarda eğim aynı çıkar; başka bir deyişle çözüm eğrisinin nerede olduğunu bilmek, ne kadar zamandır ilerlediğini bilmeye gerek bırakmaz. $y'=y(1-y)$ denkleminde $y=0{,}5$ nerede yakalanırsa yakalansın eğim $0{,}25$'tir.

Bu özellik nitel analizin dayanağı olacak. Sağ tarafı sıfır yapan $y$ değerleri sabit çözümler verir ve aralarındaki bölgelerde $f(y)$'nin işareti çözümün hangi yöne gittiğini söyler. Denklemi çözmeden davranış okumak burada mümkün hale gelir. Burada yalnızca sınıfı adlandırıyoruz; yöntem denge çözümleri konusuna ait.

:::

---

## Hızlı Kontrol: Otonom mu?

| Denklem | Otonom? |
|---|---|
| $y'=y(1-y)$ | ✓ |
| $\dfrac{dT}{dt}=-k(T-T_a)$ | ✓ |
| $y'=x+y$ | ✗ |
| $y'=e^{-t}y$ | ✗ |

::: {.notes}

Kahve soğuması denklemi otonomdur, çünkü sağ tarafta $t$ hiçbir yerde açıkça geçmez. $k$ ve $T_a$ birer parametredir, bağımsız değişken değil — bu ayrımı terminolojiyi kurarken yapmıştık. Denklem "sıcaklık farkı neyse soğuma hızı odur" der; saatin kaçı gösterdiği hesaba girmez.

Son iki satırda bağımsız değişken açıkça görünüyor ve bu tek başına yeterli. $y'=e^{-t}y$ denkleminde $e^{-t}$ çarpanı zamanla küçüldüğü için aynı $y$ değerinde eğim, ölçümün ne zaman yapıldığına göre değişir. Sağ taraftaki $e^{-t}$ ne kadar zararsız görünürse görünsün otonomluğu bozar; ölçüt bağımsız değişkenin varlığıdır, ağırlığı değil.

:::

---

## İki Eksen Birbirinden Bağımsızdır

$$
\begin{array}{c|cc}
 & \text{Lineer} & \text{Nonlineer} \\\hline
\text{Otonom} & T'=-k(T-T_a) & y'=y^2-4 \\
\text{Otonom değil} & y'=x+y & y'=x+y^2
\end{array}
$$

Dört hücrenin dördü de dolu.

::: {.notes}

Tablodaki dört denklem de bu noktaya kadar karşımıza çıkmış örneklerdir. Kahve soğuması hem lineerdir hem otonomdur. $y'=y^2-4$ otonomdur ama $y^2$ terimi yüzünden lineer değildir; bu denklemi işaret analiziyle inceleyeceğiz. $y'=x+y$ lineerdir ama sağ taraftaki $x$ otonomluğu bozar. $y'=x+y^2$ ise ikisini de kaybeder — doğrudan integralle tıkandığımız denklem buydu.

Dört hücrenin de dolu olması, iki ölçütün gerçekten bağımsız olduğunu gösterir. Bir denklemin lineer olduğunu bilmek otonomluğu hakkında hiçbir şey söylemez, tersi de geçerli. Bu yüzden sınıflandırma yaparken iki soruyu ayrı ayrı sormak gerekir.

:::

---

## Soru: Sarkaç neden ayrı bir yere düşer?

Sürtünmesiz sarkaç:

$$
\ddot\theta=-\frac{g}{L}\sin\theta
$$

**Soru:** Bu denklem hangi sınıfa girer ve bunun bedeli nedir?

::: {.notes}

Denklemde $\theta$ sinüsün içindedir, dolayısıyla denklem nonlineerdir. Otonomluk açısından ise bağımsız değişken $t$ sağ tarafta açıkça geçmez, yani denklem otonomdur — tablodaki "otonom ama nonlineer" hücresine oturur.

Buradaki soru sınıflandırmanın ötesine geçiyor: sınıf değişince ne kaybediyoruz? Lineerlik ayrımı yalnızca bir etiket olsaydı bu kadar üstünde durmazdık. Cevap, kapalı formda bir çözümün var olup olmamasıyla ilgili.

:::

---

## Çözüm: küçük açı yaklaşıklığı

Küçük $\theta$ için $\sin\theta\approx\theta$:

$$
\ddot\theta=-\frac{g}{L}\theta
$$

Salınım periyodu $2\pi\sqrt{L/g}$ **yalnız bu lineer hâlde** geçerlidir.

::: {.notes}

$\theta$ küçükken $\sin\theta$ ile $\theta$ arasındaki fark ihmal edilebilir düzeydedir: $\theta=0{,}1$ rad için $\sin\theta\approx0{,}0998$, bağıl fark binde ikinin altındadır. Bu yaklaşıklıkla sinüs terimi kaybolur ve denklem sabit katsayılı lineer bir denkleme iner. Sabit katsayılı ikinci mertebe denklemlere geldiğimizde bu denklemin çözümünü kuracağız; buradaki bağlantı, lise fiziğinden tanıdığınız $2\pi\sqrt{L/g}$ periyot formülünün bu indirgenmiş denklemden geldiğidir.

Sarkaç büyük açılarla salındığında yaklaşıklık geçersizleşir, denklem nonlineer kalır ve elemanter fonksiyonlarla yazılabilen bir çözümü yoktur. Periyot da genliğe bağlı hale gelir — yani okuldaki formülün "periyot genlikten bağımsızdır" iddiası, lineerleştirmenin bir sonucudur, sarkacın kendi özelliği değil. Sınıflandırmanın bedeli budur: nonlineer tarafta hesaplanabilir bir formül genellikle yoktur, nitel ve sayısal yöntemlere geçilir.

Bu örneğin görsel bir anlatımı için: 3Blue1Brown, "Differential equations, a tourist's guide" (DE1).

:::

---

## Sık Yapılan Hatalar

1. "Lineer"i "basit" diye okumak
2. Katsayının karmaşıklığına bakarak karar vermek
3. $y$ hiç görünmüyorsa nonlineer sanmak
4. Kuvveti mertebeyle karıştırmak
5. Parametreyi bağımsız değişken sanmak

::: {.notes}

Birinci ve ikinci hata aynı yerden gelir: $y'+(\sin x)y=e^x$ denklemine bakıp "bu kadar terim varken lineer olamaz" demek. Ölçüt denklemin görüntüsü değil, bilinmeyenin girdiği biçimdir. Üçüncüsü ters yönde çalışır: $y'=x\sin x$ denkleminde $y$ yalnızca türev olarak geçtiği için öğrenci sınıflandırmayı yapamaz, oysa bu denklem $a_0(x)=0$ alınarak genel biçime oturur ve lineerdir.

Dördüncü hata $(y')^3+y=0$ tipi denklemlerde çıkar: türevin kuvveti mertebeyi değiştirmez ama lineerliği bozar. Bu denklem birinci mertebedendir ve nonlineerdir; iki cevabı birbirinden okumaya çalışmak yanlış sonuç verir. Beşincisi otonomluk tarafında görülür: $-k(T-T_a)$ ifadesinde $k$ ve $T_a$ sabittir, bağımsız değişken değildir, dolayısıyla denklemin otonomluğuna dokunmazlar. Sağ tarafta harf görmek yetmez; o harfin bağımsız değişken olup olmadığına bakılır.

:::

---

## Karar Soruları

1. $y'=e^{x}y$ — lineer mi? otonom mu?
2. $y'=e^{y}$ — lineer mi? otonom mu?
3. $\ddot\theta+\dot\theta+\sin\theta=0$ — otonom mu?

::: {.notes}

Birincisi lineerdir: $e^x$ bir katsayıdır, $y$'yi çarpar. Otonom değildir, çünkü $x$ sağ tarafta açıkça geçer. İkincisi tam tersi çıkar: $y$ üstel fonksiyonun içindedir, dolayısıyla nonlineerdir; ama bağımsız değişken hiçbir yerde görünmediği için otonomdur. İki soru yan yana konduğunda, üstel fonksiyonun neyi kapsadığına göre cevabın nasıl döndüğü görülüyor.

Üçüncüsü sürtünmeli sarkaçtır. $\dot\theta$ terimi hız orantılı bir sönümlemeyi temsil eder ve denkleme bir türev daha sokar, fakat $t$ yine hiçbir yerde açıkça geçmez — denklem otonomdur. Lineerlik açısından ise $\sin\theta$ terimi yüzünden nonlineer kalır. Otonomluk ölçütü mertebeden bağımsızdır; birinci mertebe denklemlerde tanımladık ama daha yüksek mertebelerde de aynı biçimde çalışır.

:::

---

## Sonraki Adım

- Lineerlik → çözüm teorisi ve süperpozisyon
- Otonomluk → denge çözümleri ve işaret analizi

→ İlgili kavram: Bir denklemi "sağlayan fonksiyon" derken tam olarak neyi kastediyoruz?

::: {.notes}

Bu iki etiket ders boyunca farklı yerlerde işe yarayacak. Lineerlik, lineer denklemlerin genel çözüm yapısının ön koşuludur: çözümlerin toplanabilirliği, temel çözüm kümesi ve Wronskian gibi araçların hepsi denklemin lineer olmasına dayanır. Otonomluk ise denge çözümlerini ve işaret analizini kurarken kullanılacak.

Bu iki sınıflandırmayı kullanırken daha temel bir kavrama da ihtiyaç vardır: "denklemi sağlayan fonksiyon" ifadesinin kesin anlamı. Bir adayın denklemi sağlayıp sağlamadığı, birden fazla fonksiyonun aynı denklemi sağlayabilmesi ve bu fonksiyonların oluşturduğu aile **Çözüm Nedir?** notunda ele alınır.

:::

---
