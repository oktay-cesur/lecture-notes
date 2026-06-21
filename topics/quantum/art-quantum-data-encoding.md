---
title: "Kuantum Veri Kodlama"
subtitle: "Quantum Data Encoding"
type: article
status: draft
source: "01-bilgi-katmani/kavramlar/quantum-data-encoding.md"
tags:
  - quantum
  - qml
  - qip
  - data-encoding
---


Kuantum bilgisayarların günümüzde bu kadar revaçta olmasının başlıca nedenlerinden biri, elbette RSA gibi şifreleme yöntemlerini teorik olarak saf dışı bırakabilme potansiyelidir. Teoride, klasik bilgisayarlarla milyonlarca yıl sürebilecek bir işlemi[^1] çok daha kısa sürede yapabilme ihtimali[^2], bu teknolojinin neden bu kadar ilgi gördüğünü açıklamak için tek başına bile yeterlidir.[^3]

Fakat tarihsel açıdan bakıldığında kuantum bilgisayarlar yüksek hız sebebiyle ortaya atılmamıştır. $n$ kübitlik bir kuantum sistemin [durum uzayı](tp_kuantum-durum-gorsellestirme.md) $2^n$ boyutludur ve bu bizi bilgisayar bilimlerinde çok iyi bilinen ve çoğunlukla kaçmak istediğimiz üstel artış problemine götürür. Bu cihazların ilk önerilme amacı, belleğin bu üstel büyümeye yakalanmadan durum temsili yapabilen bir bilgisayara duyulan ihtiyaçtı ve bunu en iyi problemi oluşturan dünyanın araçlarıyla çözebileceğimiz fikri ile kuantum hesaplamanın temelleri atılmıştır. [@feynman1982simulating; @manin1980vychislimoe]

::: {.qde-history-portraits}
<figure class="qde-history-portrait">
  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Richard_Feynman_Nobel.jpg/250px-Richard_Feynman_Nobel.jpg" alt="Richard Feynman portresi">
  <figcaption>Richard Feynman<br>Kuantum sistemlerin klasik bilgisayarlarla simülasyonundaki zorluğu tartışarak kuantum simülatör fikrini öne çıkardı.<br><a href="https://en.wikipedia.org/wiki/Richard_Feynman">Kaynak: Wikipedia</a></figcaption>
</figure>
<figure class="qde-history-portrait">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Yuri_Manin%2C_2006_%28cropped%29.jpeg/250px-Yuri_Manin%2C_2006_%28cropped%29.jpeg" alt="Yuri Manin portresi">
  <figcaption>Yuri Manin<br>1980 tarihli çalışmasında hesaplanabilirlik bağlamında kuantum hesaplama fikrini erken biçimde dile getirdi.<br><a href="https://en.wikipedia.org/wiki/Yuri_Manin">Kaynak: Wikipedia</a></figcaption>
</figure>
:::

Shor algoritması ise bu durumu başka bir boyuta taşıdı. Klasik bilgisayarlarda temsil edilen bir problemi[^4] kuantum bilgisayara aktarabilirsek üstel zamandan polinomsal zamana düşebilme olasılığını gösterdi. Bunun için de ihtiyacımız olan şey öncelikli olarak kuantum veri kodlamadır. Feynman ve Manin’in işaret ettiği sorun, kuantum durumların klasik bilgisayarlarda temsil edilmesinin bellek kısmında zorlaşmasıydı. Kuantum veri kodlamada ise soru ters yönden sorulur: Klasik veriyi, kuantum durum uzayının sunduğu genlik, faz ve [süperpozisyon](tp_superposition-olcum.md) yapısına nasıl yerleştireceğiz? Bu yüzden encoding yalnızca teknik bir veri aktarma adımı değil, kuantum hesaplamanın temsil gücünden ne ölçüde yararlanacağımızı belirleyen temel bir tasarım kararıdır.

[Klasik bilgisayarlarda veriyi bit dizileri ile temsil ederiz](tp_klasik-bit.md) ve işlemleri bu gösterim üzerinde yürütürüz. Kuantum bilgisayarları da ilk bakışta yalnızca $0$ ve $1$ değerleriyle çalışan sistemler gibi düşünmek mümkündür; çünkü bir [Kübit](tp_tek-qubit.md) ölçüldüğünde sonuç yine klasik olarak $0$ ya da $1$ biçiminde okunur. Bu açıdan bakıldığında, klasik bit dizilerini doğrudan kuantum durumlarına eşlemek doğal bir başlangıç gibi görünür. Nitekim bu yaklaşım [Basis encoding](#basis-encoding) bölümünde ele alınacaktır.

Fakat bu yorum yalnızca [ölçüm sonucunu](tp_superposition-olcum.md) dikkate alır. Ölçümden önce kübit, $0$ ve $1$ sonuçlarına ait olasılık genlikleri ve faz ilişkileriyle tanımlanan bir kuantum durumundadır ve bu kuantum durum ölçüm sonucu okunacak $0$ ve $1$ olasılıklarını etkiler. Bu nedenle bilgi yalnızca ölçümde elde edilen klasik sonuçta değil, ölçüm öncesindeki durumun yapısında da taşınır. Kuantum hesaplamanın ayırt edici tarafı da bu ölçüm öncesi yapının kontrollü biçimde hazırlanması, dönüştürülmesi ve başka kübitlerle ilişkilendirilmesidir. Dolayısıyla kuantum bilgisayarı yalnızca “ölçüldüğünde $0$ veya $1$ veren birimler” olarak kullanmak, kuantum dünyasını klasik dünyadan ayıran [dolanıklık](dolaniklik-superdense-coding.md), durum uzayı, [girişim](hadamard.md) gibi özellikleri tam olarak —hatta çoğu durumda hiç— kullanmamıza izin vermez.

Gelgelelim bu özellikleri kullanmak istediğimizde ise önümüze başka bir temsil problemi çıkar. Klasik bilgisayar mimarisinde bitler; transistörler, manyetik diskler, optik diskler ve benzeri fiziksel sistemler üzerinde oldukça kararlı biçimde tutulur. Örneğin bir transistörün girişine belirli bir elektriksel sinyal uygulandığında, devrenin hangi lojik çıktıyı (yani $0-1$ değeri) üreteceği çok çok düşük hata paylarıyla öngörülebilir. Bu nedenle klasik bilgisayarda bir bitin $0$ mı yoksa $1$ mi olduğu çoğu zaman -hatta hemen hemen her zaman- doğrudan okunabilir, kopyalanabilir ve uzun süre korunabilir bir bilgi parçası gibi davranır. Bir sabit disk içerisindeki bilgiler yıllarca sağlam kalabilir.

::: {.qde-visual-list}
**Klasik bit / kübit temsil farkı**

:::: {.qde-visual-list-grid}
::: {.qde-visual-list-card}
**Klasik bit**

- **▣ Kararlı değer:** Fiziksel sistem çoğu zaman açık biçimde $0$ ya da $1$ durumundadır.
- **◉ Doğrudan okuma:** Okuma işlemi değeri genellikle bozmaz.
- **⧉ Kopyalama:** Değer başka bir belleğe kopyalanabilir.
- **▤ Saklama:** Uygun ortamda uzun süre korunabilir.
:::

::: {.qde-visual-list-card}
**Kübit**

- **◌ Ölçüm öncesi durum:** Bilgi yalnızca $0$ ya da $1$ sonucunda değil, genlik ve faz yapısında taşınır.
- **⟱ Ölçüm:** Ölçüm sonunda tek bir klasik sonuç elde edilir.
- **✕ Durum değişimi:** Ölçüm işlemi kuantum durumunu değiştirir.
- **◇ Kopyalama sınırı:** Bilinmeyen bir kuantum durum keyfî biçimde kopyalanamaz.
:::
::::
:::

Kuantum dünyasında ise bu kararlılık ve doğrudan okunabilirlik varsayımı geçerli değildir. Amacımız kuantum dünyasının garip özelliklerini kullanmak ise ölçüm öncesindeki genlik, faz ve kübitler arası ilişki yapısını da hesaba katmak gerekir. Bu yapı daha zengin bir temsil alanı açar; fakat aynı zamanda [durum hazırlama](art-state-preparation.md), gürültüye duyarlılık ve ölçümden sonra bilginin nasıl yorumlanacağı gibi yeni zorluklar üretir. Bu zorluklar, özellikle günümüzün hata düzeltmesiz ve gürültülü kuantum cihazlarını ifade eden [NISQ döneminde](art-nisq.md) belirginleşir. 

Bu nedenle klasik verinin kuantum bilgisayarda nasıl temsil edileceği, yalnızca teknik bir veri aktarma adımı değil; kullanılacak algoritmayı, gerekli kübit sayısını, devre derinliğini ve ölçümden elde edilecek bilginin anlamını belirleyen temel bir tasarım problemidir.

Bu soruya tek bir cevap yoktur. Klasik veriyi kuantum duruma aktarmak için farklı encoding yöntemleri geliştirilmiştir. Bazıları veriyi doğrudan $0$ ve $1$ durumlarına yazar; bazıları sayısal değerleri dönüş açılarına, faz ilişkilerine ya da genliklere yerleştirir. Bu yöntemlerin her biri veriyi farklı bir açıdan temsil eder ve farklı avantajlar ile sınırlılıklar taşır. 

Bu noktadan sonra, kuantum veri kodlama için temel sayılabilecek yöntemleri ayrı başlıklar altında ele alabiliriz.


## Basis encoding

Kuantum hesaplamada kübitler ölçüm yapılmadan önce süperpozisyon durumlarında bulunabilir. Ancak ölçüm yapıldığında sadece ölçülen özelliğe bağlı olarak iki temel sonuçtan biri elde edilir. Bu sonuçları fiziksel bağlama göre yukarı-aşağı, pozitif-negatif ya da kuzey-güney gibi farklı biçimlerde adlandırırız. Kuantum devrelerinde ise bu ikili yapı genellikle hesaplama tabanındaki $|0\rangle$ ve $|1\rangle$ durumlarıyla temsil edilir.

Basis encoding bu temel gösterimi doğrudan kullanır: her klasik bit, hesaplama başlamadan önce ilgili $|0\rangle$ veya $|1\rangle$ durumuna yazılır. Kavramsal olarak en basit encoding yöntemlerinden biridir ve klasik veri ile kuantum durumları arasında doğrudan bir eşleme kurar. Bu nedenle basis encoding, özellikle kesin bit değerleriyle çalışılan kuantum algoritmalarında kullanışlıdır. Örneğin [Grover algoritmasında](tp_grover.md) aranan durum çoğu zaman belirli bir bit dizisi olarak işaretlenir. Shor algoritmasında da aritmetik işlemler belirli sayıların ikili gösterimleri üzerinden yürütülür. Bu tür durumlarda klasik bilginin doğrudan $|0\rangle$ ve $|1\rangle$ durumlarına yazılması doğal bir tercihtir.



Ancak bu yaklaşımda kübitler büyük ölçüde dijital yazmaçlar gibi kullanıldığından, kuantum durum uzayının sunduğu ve kuantum hesaplamayı ön plana çıkaran avantajlar —süperpozisyon, dolanıklık ve girişim— çoğu zaman sınırlı ölçüde kullanılma ve dar boğaza girme durumunu doğurabilir. Evet, basis encoding çok basittir ve klasik veriyi kuantum bilgisayara aktarmanın en dolaysız yollarından biridir ve Shor - Grover gibi çok temel ve işlevsel algoritmalar için yeterlidir. Fakat bu sadelik her zaman en iyi tercih olduğu anlamına gelmez. Bazı problemlerde kübitleri basit yazmaçlar olarak kullanmak yavan kalacak, kuantum durumunda daha zengin biçimde temsil edilmesi gerekecektir.[^5]


Örneğin makine öğrenmesi gibi veriler arasındaki benzerliklerin önemli olduğu alanlarda, veriyi yalnızca bit dizisi olarak temsil etmek sınırlayıcı olabilir. Böyle durumlarda veriyi farklı açılar, genlikler veya daha karmaşık dönüşümler üzerinden kuantum duruma aktaran yöntemler daha uygun olabilir. Kısacası basis encoding kötü bir yöntem değildir; yalnızca her problem için en esnek temsil biçimi değildir.


## Angle encoding

Basis encoding’in bir sınırı vardır: gerçek dünyadaki çoğu veri yalnızca 0 ya da 1 değildir; belirli bir aralıkta değişir. Bir piksel parlaklığı, bir sensör ölçümü, sıcaklık değeri ya da makine öğrenmesinde kullanılan sayısal bir özellik buna örnek verilebilir. Bu tür veriyi doğrudan $|0\rangle$ veya $|1\rangle$ durumuna sıkıştırmak, aradaki “ne kadar” bilgisini kaybetmek anlamına gelir.

Güncel bilgisayarlarda bu sorun, veriyi birden fazla bit ile temsil ederek aşılır. Örneğin 8 bit birlikte okunarak 0 ile 255 arasındaki tam sayılar gösterilebilir. Daha fazla hassasiyet gerektiğinde daha fazla bit kullanılır. [Kuantum devrelerinde](ilk-kuantum-programlar.md) de benzer biçimde daha fazla kübit kullanmak mümkündür; ancak her ek kübit devreyi büyütür, kapı sayısını artırır ve özellikle günümüzün gürültülü kuantum cihazlarında hatalara daha açık bir yapı ortaya çıkarır.

Angle encoding bu noktada farklı bir yol önerir. Sayısal değeri çok sayıda kübite yaymak yerine, değeri bir açıya dönüştürür ve bir kübiti bu açı kadar döndürür. Böylece veri, doğrudan $|0\rangle$ veya $|1\rangle$ durumuna yazılmak yerine, bu iki durum arasındaki olasılık dengesini belirleyen bir kuantum durumunda temsil edilir. Örneğin [$R_y$ dönüşü](tp_tek-qubit-operatorler-a.md) şu şekilde yazılabilir:

$$  
R_y(\theta)|0\rangle =  
\cos\left(\frac{\theta}{2}\right)|0\rangle  
+  
\sin\left(\frac{\theta}{2}\right)|1\rangle  
$$

Burada $\theta$, veriden hesaplanan açıdır. Örneğin $x \in [0,1]$ aralığına ölçeklenmiş bir veri için açı $\theta = x \cdot \pi$  şeklinde seçilebilir;

<div data-anim="custom" data-src="qde-encoding.js" data-css="qde-encoding.css" data-scene="angle"></div>

::: {.qde-anim-caption}
**Animasyon 1 - Angle encoding gösterimi:** Kaydırıcıdaki $x$ değeri 0 ile 1 arasında değiştikçe $\theta=x\pi$ açısı yeniden hesaplanır. Soldaki çember, kübit durumunun $|0\rangle$ yönünden $|1\rangle$ yönüne nasıl döndüğünü; sağdaki çubuklar ise ölçümde $P(0)$ ve $P(1)$ olasılıklarının nasıl değiştiğini gösterir.
:::

Bu durumda $x$ değeri büyüdükçe kübitin ölçümde $|1\rangle$ sonucunu verme olasılığı artar. Ancak burada dikkat edilmesi gereken nokta şudur: kübit ölçüldüğünde yine yalnızca iki sonuçtan biri elde edilir. Sürekli değişen şey, ölçümden önceki kuantum durumu ve bu iki sonucun ortaya çıkma olasılıklarıdır.

Yöntemin avantajı sadeliğidir. Çoğu temel kullanımda her sayısal özellik bir döndürme açısıyla temsil edilebilir; bu nedenle devre yapısı görece basit kalır. Ayrıca angle encoding, [parametrik kuantum devreleriyle](art-parametrik-kuantum-devre.md) doğal biçimde uyumludur; çünkü bu devrelerde de işlemler çoğunlukla ayarlanabilir açı değerleri üzerinden yürütülür.

Bununla birlikte yöntemin bir bedeli vardır: açılar periyodiktir. $R_y$ dönüşünde ölçüm olasılıkları $2\pi$ sonra tekrar eder; durum vektörünü işaret farkı olmadan birebir aynı yazmak istersek $4\pi$ periyodu dikkate alınır. Örneğin

$$  
R_y\left(\frac{\pi}{4}+2\pi\right)\lvert0\rangle
=
-
R_y\left(\frac{\pi}{4}\right)\lvert0\rangle  
$$

olur. Bu iki durum işaret bakımından farklı görünse de [Born kuralı](art-born-kurali.md) gereği aynı ölçüm olasılıklarını verir.

Buna karşılık $4\pi$ eklediğimizde durum vektörü işaret farkı olmadan aynı hâle gelir:

$$  
R_y\left(\frac{\pi}{4}+4\pi\right)\lvert0\rangle
=
R_y\left(\frac{\pi}{4}\right)\lvert0\rangle  
$$

Bu nedenle veri uygun biçimde ölçeklenmezse, farklı iki değer aynı ölçüm davranışına ya da birbirine çok yakın kuantum durumlarına denk gelebilir.

Kısacası angle encoding, sayısal veriyi kuantum devrelerine aktarmanın sade ve sezgisel yollarından biridir. Basis encoding’in 0/1 doğrudanlığını aşar; fakat verinin hangi aralığa ölçekleneceği ve açıların nasıl seçileceği dikkatli belirlenmelidir.



## Phase encoding

Angle encoding’de veri, kübitin $\lvert0\rangle$ ve $\lvert1\rangle$ sonuçlarını verme olasılıklarını değiştiren bir dönüş açısı olarak temsil ediliyordu. Phase encoding ise benzer bir fikri farklı bir yönden kullanır: veri, bu kez ölçüm olasılığını doğrudan değiştirmek yerine kuantum durumunun fazına yazılır.

Bunu anlamak için önce şu noktayı hatırlamak gerekir. Bir kübit yalnızca $\lvert0\rangle$ ve $\lvert1\rangle$ durumlarının hangi oranlarda birleştiğiyle değil, bu bileşenler arasındaki faz ilişkisiyle de tanımlanır. Phase encoding bu faz ilişkisini veri taşımak için kullanır. Aşağıdaki örnekte kübit önce süperpozisyona alınır, sonra veriden hesaplanan $\theta$ açısı $\lvert1\rangle$ bileşeninin fazına yazılır:

$$  
H\lvert0\rangle
=
\frac{1}{\sqrt{2}}\lvert0\rangle  
+  
\frac{1}{\sqrt{2}}\lvert1\rangle  
\quad\longrightarrow\quad  
\frac{1}{\sqrt{2}}\lvert0\rangle  
+  
\frac{e^{i\theta}}{\sqrt{2}}\lvert1\rangle  
$$



Bu gösterimde $x\in[0,1]$ aralığına ölçeklenmiş bir veri için $\theta = x\cdot 2\pi$ seçildiğinde gösterilen durumlarda ölçüm olasılığı aynıdır:

$$  
P(0)=P(1)=\frac{1}{2}  
$$

Çünkü phase encoding, genliklerin büyüklüğünü değil, bileşenler arasındaki faz ilişkisini değiştirir. Bu nedenle faz bilgisi —buradaki örnekler için— doğrudan ölçümde görünmez. Etkinin görülebilmesi için faz bilgisinin başka kapılar veya kübitlerle etkileşime girerek girişime dönüştürülmesi gerekir.

Bunu basit bir örnekle görebiliriz. Şu iki durum doğrudan ölçüldüğünde aynı olasılıkları verir:

$$  
\frac{1}{\sqrt{2}}\left(\lvert0\rangle+\lvert1\rangle\right)  
\quad \text{ve} \quad  
\frac{1}{\sqrt{2}}\left(\lvert0\rangle-\lvert1\rangle\right)  
$$

Her iki durumda da

$$  
P(0)=P(1)=\frac{1}{2}  
$$

olur. Fakat bu iki duruma [Hadamard kapısı](hadamard.md) uygulanırsa faz farkı görünür hâle gelir:


$$  
H\left(\frac{1}{\sqrt{2}}\lvert0\rangle+\frac{1}{\sqrt{2}}\lvert1\rangle\right)
=
\lvert0\rangle  
$$

$$  
H\left(\frac{1}{\sqrt{2}}\lvert0\rangle-\frac{1}{\sqrt{2}}\lvert1\rangle\right)
=
\lvert1\rangle  
$$



Yani faz farkı doğrudan ölçümde görünmezken, uygun bir kapıdan sonra tamamen farklı ölçüm sonuçlarına dönüşebilir. Phase encoding’in gücü de buradadır: veri, ölçümde hemen ortaya çıkmaz; devrenin sonraki adımlarında girişim yoluyla görünür hâle gelir.


<div data-anim="custom" data-src="qde-encoding.js" data-css="qde-encoding.css" data-scene="phase"></div>

::: {.qde-anim-caption}
**Animasyon 2 - Phase encoding ve girişim gösterimi:** Kaydırıcı $\theta$ değerini sürekli olarak değiştirirken sol panelde $e^{i\theta}$ noktasının birim çember üzerindeki konumu güncellenir. “Ölçümden önce” alanı fazın doğrudan ölçüm olasılığını değiştirmediğini, “Hadamard sonrası” alanı ise aynı faz bilgisinin girişimden sonra $P(0)$ ve $P(1)$ olasılıklarına nasıl dönüştüğünü gösterir.
:::

Ek olarak animasyondaki $x=0$ ve $x=1$ durumlarına dikkat etmek gerekir. Bunlar farklı klasik veri değerleri olmalarına rağmen $\theta=0$ ve $\theta=2\pi$ aynı faza karşılık geldiği için birebir aynı kuantum durumuna düşer:

$$  
e^{i(\theta+2\pi)} = e^{i\theta}  
$$

Bu durum, phase encoding’de ölçekleme seçiminin dikkatli yapılması gerektiğini gösterir. Veri uygun biçimde ölçeklenmezse farklı değerler aynı faza ya da birbirine çok yakın fazlara karşılık gelebilir.

Bu periyodiklik, angle encoding’deki periyodiklikten biraz daha temiz görünür. Angle encoding’de $R_y$ dönüşü için $\theta+2\pi$ durum vektörünü işaret farkıyla geri getirirken, tam eşleşme $4\pi$ sonunda oluşuyordu. Phase encoding’de ise faz çarpanı doğrudan $2\pi$ periyodiktir; yani $e^{i(\theta+2\pi)}$ ile $e^{i\theta}$ tam olarak aynıdır.

Bu, ışın bölücü deneyindeki mantığa benzer. Faz farkı tek başına doğrudan ölçülemez; fakat yollar yeniden birleştiğinde, yani girişim oluştuğunda, gözle görülür bir sonuç üretir. Phase encoding de veriyi tam olarak bu gecikmeli görünürlük ilkesi üzerine kurar: bilgi ölçümde hemen ortaya çıkmaz, fakat devrenin sonraki adımlarında girişim yoluyla etkisini gösterir.


## Amplitude encoding

Basis encoding veriyi doğrudan $|0\rangle$ ve $|1\rangle$ durumlarına yazar. Angle encoding ve phase encoding ise veriyi bir açıya ya da faza dönüştürür. Amplitude encoding daha farklı bir yol izler: veriyi kuantum durumunun genliklerine yerleştirir.

Bir kuantum durumunu yalnızca hangi taban durumlarının bulunduğu belirlemez; bu taban durumlarının hangi katsayılarla birleştiği de önemlidir. Amplitude encoding bu katsayıları veri taşımak için kullanır. Örneğin dört bileşenli klasik bir veri vektörümüz olsun:

$$  
x = (x_0, x_1, x_2, x_3)  
$$

Bu vektör, iki kübitlik bir kuantum durumda şu şekilde temsil edilebilir:

$$  
\lvert x\rangle
=
x_0\lvert00\rangle  
+  
x_1\lvert01\rangle  
+  
x_2\lvert10\rangle  
+  
x_3\lvert11\rangle  
$$

Burada dikkat edilmesi gereken temel nokta normalizasyondur. Kuantum durumlarında olasılıkların toplamı $1$ olmalıdır. Bu nedenle genliklerin karelerinin toplamı da $1$ olmalıdır:

$$  
|x_0|^2 + |x_1|^2 + |x_2|^2 + |x_3|^2 = 1  
$$

Eğer elimizdeki veri bu koşulu sağlamıyorsa önce normalize edilmesi gerekir. Örneğin klasik veri vektörü

$$  
x = (1, 1, 1, 1)  
$$

olsun. Bu vektörü doğrudan genliklere yazamayız; çünkü kareler toplamı $4$ eder. Bunun yerine normalize edilmiş hâli kullanılır:

$$  
\frac{1}{2}(1,1,1,1)  
$$

Böylece kuantum durumu şu hâle gelir:

$$  
\lvert x\rangle
=
\frac{1}{2}\lvert00\rangle  
+  
\frac{1}{2}\lvert01\rangle  
+  
\frac{1}{2}\lvert10\rangle  
+  
\frac{1}{2}\lvert11\rangle  
$$

Bu yöntemin en dikkat çekici tarafı, çok az kübitle çok sayıda değerin temsil edilebilmesidir. $n$ kübitlik bir sistemde $2^n$ farklı taban durumu bulunur. Bu nedenle amplitude encoding, teorik olarak $2^n$ bileşenli bir veri vektörünü yalnızca $n$ kübit ile temsil edebilir. Örneğin $2$ kübit $4$ bileşeni, $3$ kübit $8$ bileşeni, $10$ kübit ise $1024$ bileşeni taşıyabilir.

Ancak bu güçlü görünen tarafın önemli bir bedeli vardır. Veriyi böyle bir kuantum durumuna hazırlamak genellikle kolay değildir. Yani sorun yalnızca “kaç kübit gerekir?” sorusu değildir; asıl sorun, istenen genliklere sahip kuantum durumunun devrede nasıl hazırlanacağıdır. Karmaşık bir veri vektörünü genliklere yazmak için çok sayıda kapı gerekebilir ve bu da devreyi büyütebilir.

Ayrıca amplitude encoding mutlak büyüklük bilgisini değil, normalize edilmiş dağılımı taşır. Örneğin

$$  
(1,2,3,4)  
\quad \text{ve} \quad  
(2,4,6,8)  
$$

vektörleri normalize edildikten sonra aynı kuantum durumuna karşılık gelir. Çünkü ikinci vektör, birincinin yalnızca sabit bir katsayıyla çarpılmış hâlidir. Bu nedenle amplitude encoding, verinin ölçeğinden çok bileşenler arasındaki göreli dağılımı temsil eder.

<div data-anim="custom" data-src="qde-encoding.js" data-css="qde-encoding.css" data-scene="amplitude"></div>

Kısacası amplitude encoding, az sayıda kübitle büyük veri vektörlerini temsil edebilmesi nedeniyle oldukça çekici bir yöntemdir. Fakat bu temsilin hazırlanması çoğu zaman maliyetlidir ve normalizasyon nedeniyle bazı büyüklük bilgileri kaybolabilir. Bu yüzden amplitude encoding teorik olarak güçlü, pratikte ise dikkatli kullanılması gereken bir kodlama yöntemidir.


## Feature map / quantum embedding

Önceki başlıklarda veriyi kuantum duruma aktarmanın farklı yollarını gördük: basis encoding veriyi doğrudan bit değerleriyle, angle encoding dönüş açılarıyla, phase encoding faz bilgisiyle, amplitude encoding ise genliklerle temsil eder. [Feature map](art-feature-map.md) ya da [quantum embedding](art-quantum-embedding.md) ise bu yöntemlerden biraz daha genel bir fikri ifade eder. Burada amaç yalnızca veriyi kuantum bilgisayara yüklemek değil, veriyi kuantum devresinin işleyebileceği anlamlı bir temsil uzayına taşımaktır.


$$ x \longmapsto |\phi(x)\rangle $$

Bu, klasik makine öğrenmesindeki feature engineering'in benzeridir: bir görüntüden kenar bilgisi, bir metinden kelime sıklığı çıkarmak nasıl modelin ilişkileri daha kolay yakalamasını sağlıyorsa, feature map de veriyi kuantum durum uzayında benzer bir amaçla yeniden konumlandırır. Basit hâli angle encoding'le örtüşür ($R_y(x\pi)|0\rangle$); zengin hâli ise birden fazla özelliği birden fazla kübite yazıp aralarına dolanıklık kuran kapılar ekler — veri yalnızca yazılmaz, bileşenleri arasında ilişki de kurulur.

Bu seçim modelin başarısını doğrudan etkiler: iyi seçilmiş bir feature map farklı verileri durum uzayında ayırırken, kötü seçilmiş biri onları birbirine yaklaştırıp ayırt etme gücünü azaltır.

Kısacası encoding "veriyi nasıl yazarım" sorusuna, feature map "hangi ilişkiyi görünür kılacak biçimde yazarım" sorusuna cevap verir.





## Application-specific encodings  
  
Bazı encoding yöntemleri belirli veri türleri için geliştirilmiştir. Özellikle [kuantum görüntü işleme](art-kuantum-goruntu-isleme.md) bağlamında FRQI ve NEQR gibi temsiller bu gruba girer. Bunlar genel amaçlı encoding yöntemleri değil, belirli veri yapıları için geliştirilmiş özel temsil şemalarıdır.  

### [FRQI](art-frqi.md)
FRQI (Flexible Representation of Quantum Images), görüntüdeki piksel konumlarını kübit dizileriyle, piksel yoğunluğunu ise bir açı/rotasyon parametresiyle temsil eden bir kuantum görüntü gösterimidir. Kavramsal olarak sade ve küçük ölçekli örneklerde elverişlidir; ancak state preparation maliyeti ve kontrollü dönüşümler nedeniyle devre derinliği hızla artabildiği için NISQ donanımda gürültüye duyarlıdır. 

### [NEQR](art-neqr.md)

NEQR (Novel Enhanced Quantum Representation), piksel değerlerini doğrudan kübit register’larında, konum bilgisini ise ayrı bir register’da tutan bir kuantum görüntü temsilidir. FRQI’ye göre piksel değerlerini daha açık ve deterministik biçimde ifade eder; buna karşılık kübit ihtiyacı ve devre maliyeti daha hızlı büyüdüğü için küçük görüntüler dışında NISQ bağlamında daha zorlayıcı hale gelir. 


## Karar eksenleri

Kuantum veri kodlama yöntemleri arasında seçim yaparken tek bir “en iyi” yöntemden söz etmek doğru değildir. Seçim, verinin türüne, kullanılacak algoritmaya ve eldeki kuantum donanımın sınırlarına bağlıdır.

Bir encoding yöntemi seçerken şu sorular belirleyici olur:

- Veri bit dizisi mi, sürekli sayısal değerlerden mi, görüntüden mi yoksa olasılık dağılımından mı oluşuyor?
    
- Amaç veriyi doğrudan temsil etmek mi, sınıflandırma yapmak mı, kernel hesaplamak mı, yoksa görüntü gibi özel bir veri yapısını kuantum duruma aktarmak mı?
    
- Kaç kübit gerekiyor?
    
- İstenen kuantum durumu hazırlamak ne kadar maliyetli?
    
- Devre derinliği ne kadar artıyor?
    
- Gürültülü kuantum donanımda bu temsil ne kadar korunabiliyor?
    
- Ölçüm sonunda hangi bilgi doğrudan okunabiliyor, hangi bilgi yalnızca dolaylı olarak yorumlanabiliyor?

<div data-anim="custom" data-src="qde-encoding.js" data-css="qde-encoding.css" data-scene="decision"></div>

::: {.qde-anim-caption}
**Encoding seçim rehberi:** Veri türünü seçerek hangi encoding yönteminin öne çıktığını ve neden tercih edildiğini görün.
:::

Bu soruların cevabı yöntemin uygunluğunu belirler. Örneğin basis encoding sade ve doğrudandır, fakat sürekli veriler için sınırlıdır. Angle encoding sayısal veriler için sezgiseldir, ancak açıların periyodikliği nedeniyle ölçekleme dikkat ister. Phase encoding faz ve girişimden yararlanır, fakat bilgi doğrudan ölçümde görünmeyebilir. Amplitude encoding az kübitle büyük vektörleri temsil edebilir, ancak durum hazırlama maliyeti çoğu zaman temel darboğazdır.

## Notlar

Encoding seçimi doğrudan üç şeyi etkiler: kübit maliyeti, devre derinliği ve ölçüm yorumu. Bu nedenle kuantum veri kodlama yalnızca teknik bir ön işlem değil, algoritmanın nasıl çalışacağını belirleyen temel tasarım kararlarından biridir.

Kuantum makine öğrenmesi bağlamında encoding çoğu zaman feature map veya quantum embedding ile ilişkilidir. Kuantum görüntü işleme bağlamında ise soru, görüntünün konum, renk ve yoğunluk bilgilerinin kuantum durumda nasıl temsil edileceğine dönüşür. FRQI ve NEQR gibi yöntemler bu ikinci bağlamda düşünülmelidir.
	


[^1]: Her işlem değil tabii ki.
[^2]: Shor algoritması, , büyük bileşik sayıların asal çarpanlarına ayrılması problemini üstel zamandan polinomsal zamana indirir.
[^3]: Bugünün donanım koşullarında bu potansiyelin çok uzağındayız.
[^4]: Shor algoritması kapsamında bu RSA şifreleme
[^5]: Bu şekilde kullanımda ilerleyen aşamalarda elbette kuantum özellikler kullanılabilir, kastedilen veri temsili kısmındaki avantajları görmezden gelmektir.
	
