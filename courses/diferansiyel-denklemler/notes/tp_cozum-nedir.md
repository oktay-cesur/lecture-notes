---
title: "Çözüm Nedir?"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-07-26
execute:
  echo: false
---

## Diferansiyel Denklemden Çözüme

> Buraya kadar: diferansiyel denklem, bir fonksiyon ile türevi arasındaki bir ilişkidir; denklemleri lineerlik ve otonomluğa göre adlandırabiliyoruz.
>
> Soru: Bu ilişkiyi **sağlayan** bir fonksiyon bulduğumuzda elimizde tam olarak ne var — ve bu fonksiyon tek mi?

::: {.notes}

Diferansiyel denklemin bir fonksiyon ile türevi arasındaki ilişki olduğunu kurduk ve sınıflandırma ölçütlerini tanımladık. Bu noktaya kadar "denklemi sağlayan fonksiyon" ifadesini serbestçe kullandık; bu notun konusu, o ifadenin ne anlama geldiğini kesinleştirmek.

Burada henüz çözüm bulma yöntemi öğrenmiyoruz. Sorumuz daha geride: elimize bir aday geldiğinde onun çözüm olup olmadığını nasıl anlarız, birden fazla fonksiyon aynı denklemi sağlayabilir mi, sağlıyorsa aralarında bir yapı var mı, ve bulunan bir çözüm hangi aralıkta geçerlidir? Bu sorular cevaplanmadan yöntem tartışmasına geçmenin bir anlamı yok.

:::

---

## Soru: adaylar arasında seçim

$$
y'=2y
$$

Aşağıdaki fonksiyonlardan hangileri bu denklemi sağlar?

$$
y=e^{2x}, \qquad y=3e^{2x}, \qquad y=e^{x}, \qquad y=0.
$$

::: {.notes}

Bu soruya cevap vermenin doğal yolu, her adayın türevini alıp denklemde yerine koymaktır. Cebirsel bir denklemde bilinmeyenin yerine sayı yazıp eşitliği kontrol ederiz; burada bilinmeyen bir fonksiyon olduğu için yerine fonksiyon yazarız ve denklemin istediği türevi de hesaplamamız gerekir.

Dört aday bilinçli seçilmiştir. İkisi aynı üstel fonksiyonun katı, biri farklı bir üstel, biri de sabit sıfır fonksiyonu. Sonuçları karşılaştırdığımızda ortaya çıkacak tablo, "çözüm" kelimesinin neden dikkatli tanımlanması gerektiğini gösterecek.

:::

---

## Çözüm: doğrulama

- $y=e^{2x}$: $y'=2e^{2x}=2y$ ✓
- $y=3e^{2x}$: $y'=6e^{2x}=2y$ ✓
- $y=e^{x}$: $y'=e^{x}\neq 2y=2e^{x}$ ✗
- $y=0$: $y'=0=2\cdot 0$ ✓

::: {.notes}

Üçüncü satırdaki eleme dikkat ister: $y=e^x$ için $y'=e^x$ çıkar, denklemin istediği ise $2y=2e^x$'tir. İki ifade yalnızca $e^x=0$ olduğunda eşit olurdu ve üstel fonksiyon hiçbir noktada sıfır olmadığı için eşitlik hiçbir yerde sağlanmaz. Aday elenir.

Sonuçta üç ayrı fonksiyon aynı denklemi sağlıyor. Buradan çıkan sonuç, cebirden gelen alışkanlığı bozar: $2x-6=0$ denkleminin tek bir kökü vardır, ama $y'=2y$ denkleminin birden fazla çözümü vardır. Sabit fonksiyon $y=0$ de bunlardan biridir ve bu tür sabit çözümler kolayca gözden kaçar — ayrılabilir denklemlerde bunun somut bir örneğini göreceğiz.

:::

---

## Soru: yöntem her mertebede işler mi?

$$
y''+y=0
$$

Adaylar: $y=\sin x,\ \cos x,\ e^x,\ 3\sin x-2\cos x$.
Kontrol:
- $y=\sin x$: $y''=-\sin x$, $y''+y=0$ ✓
- $y=\cos x$: $y''=-\cos x$, $y''+y=0$ ✓
- $y=e^{x}$: $y''=e^{x}$, $y''+y=2e^x\neq 0$ ✗
- $y=3\sin x-2\cos x$: $y''+y=0$ ✓

::: {.notes}

Doğrulama yöntemini birinci mertebeden bir denklem üzerinde kurduk. Yöntemin tarifinde mertebeye özel hiçbir şey yoktu — "türevleri al, yerine koy, eşitliği kontrol et" — ama bunu bir örnekle sınamak gerekir. Burada ikinci türev hesaplanacak, dolayısıyla iş biraz artıyor.

Son aday da bilinçli seçilmiştir. İlk ikisinin belirli katsayılarla birleşiminden yapılmıştır; sonucu ötekilerle karşılaştırmakta fayda var.

Son satırın ara adımı şudur: $y=3\sin x-2\cos x$ için $y'=3\cos x+2\sin x$, $y''=-3\sin x+2\cos x$. Bunu $y$ ile topladığımızda $(-3\sin x+2\cos x)+(3\sin x-2\cos x)=0$ çıkar. Yöntem mertebeden bağımsız çalışıyor.

Bu son adayın da çözüm çıkması rastlantı değil. $\sin x$ ve $\cos x$ ayrı ayrı çözümdü; katsayılarla çarpıp topladığımızda yine çözüm elde ettik. Bu davranış denklemin lineer olmasından geliyor ve lineer denklemlerin genel teorisinde sistematik biçimde ele alınacak. Nonlineer bir denklemde böyle bir garanti yoktur: iki çözümün toplamı genellikle çözüm değildir.

:::

---

## Doğrulamanın Sınırları

- Eşitlik **her** $x$ için sağlanmalı
- Tek noktada **sağlanmaması** elemeye yeter
- Yöntem yalnız elde aday varken işler

::: {.notes}

Doğrulama iki yönde asimetriktir. Bir adayı elemek için tek bir nokta yeter: $y=e^x$ adayını $x=0$'da kontrol edersek $y'(0)=1$ ile $2y(0)=2$ farklı çıkar ve aday düşer. Ama kabul etmek için tek nokta yetmez; eşitliğin özdeşlik olarak, yani ifadeler sadeleştirilerek gösterilmesi gerekir. Bir adayın bir noktada denklemi sağlaması, o noktanın rastlantı eseri denk gelmesi olabilir.

İkinci sınır kapsamla ilgilidir. Yerine koyma, elimizde zaten bir aday varken çalışır; bir denklemin hiç çözümü olmadığını göstermek için varlık teoremleri gerekir ve doğrulama onların yerini tutmaz. Bir soruyu da burada açık bırakıyoruz: eşitliğin "her $x$ için" sağlanması gerektiğini söyledik, ama hangi $x$'ler? Başlangıç koşulunu kurduktan sonra bu soruya döneceğiz.

:::

---

## Soru: ortak yapı

Doğru adaylar: $e^{2x}$, $3e^{2x}$, $0 = 0.2^{2x}$.

**Soru:** Bunlar ortak bir kalıbın özel durumları olabilir mi?

::: {.notes}

$y''+y=0$ denkleminde üç fonksiyonun aynı denklemi sağlaması, aralarında bir bağ olduğunu düşündürür. Burda verilen üç denklem de üstel yapıdadır ve üsteki katsayı hepsinde aynıdır; farklılık yalnızca öndeki çarpanda görünür. Sıfır fonksiyonunu da bu gözle okumak mümkün: çarpanı sıfır olan bir üstel.

Böyle bir kalıp bulmak yalnızca derli toplu görünmek için değildir. Kalıp varsa, üç aday yerine tek bir ifadeyle çalışabiliriz ve denklemin çözüm kümesinin nasıl bir nesne olduğunu görebiliriz.

:::

---

## Çözüm: genel çözüm

$$
y=Ce^{2x}, \qquad C\in\mathbb{R}
$$

$$
y'=2Ce^{2x}=2y
$$

Buna **genel çözüm** denir.

::: {.notes}

Doğrulama doğrudan yürür: $y=Ce^{2x}$ için $y'=2Ce^{2x}=2(Ce^{2x})=2y$, ve bu hesapta $C$'ye hiçbir kısıt konmadı. Yani ifade her $C$ değeri için denklemi sağlar. Önceki üç doğru aday $C=1$, $C=3$ ve $C=0$ değerlerine karşılık gelir; sabit çözüm de ailenin içinden çıkmıştır.

Geometrik olarak her $C$ değeri düzlemde ayrı bir eğri verir. Bu eğriler birbirini kesmez; ailenin bütünü düzlemin bir bölgesini dolduran bir eğri demeti oluşturur. Bir sınırı da belirtmek gerekiyor: bu formülün denklemin bütün çözümlerini kapsayıp kapsamadığını henüz göstermedik. Bu, varlık ve teklik sorusudur ve lineer denklemlerin çözüm teorisi kurulurken ele alınacaktır.

:::

---

## Soru: aileden seçim

Genel çözüm bir aile veriyor. Belirli bir üyeyi nasıl seçeriz?

$$
y'=2y, \qquad y(0)=3.
$$

::: {.notes}

Bir aile, tek bir cevaba ihtiyaç duyan bir problem için fazla geniştir. Fiziksel bir modelde kahvenin başlangıç sıcaklığı ya da depodaki ilk su miktarı bilinir; denklem sürecin kuralını verir, bu ek bilgi ise hangi süreçten söz ettiğimizi belirler.

Tank ve soğuma modellerinde bu fikri örtük olarak zaten kullanmıştık — orada da belirli bir başlangıç değeri hesaba katılmıştı. Burada fikrin resmî adını veriyoruz: başlangıç koşulu. Gösterimi $y(x_0)=y_0$ biçimindedir; koşul tek bir noktada verilir.

:::

---

## Çözüm: başlangıç koşuluyla belirlenen çözüm

$$
3=Ce^{0}=C \;\Rightarrow\; C=3 \;\Rightarrow\; y=3e^{2x}
$$

::: {.notes}

Başlangıç koşulu, orijinal denkleme değil, bulunmuş genel çözüme uygulanır: $y(0)=3$ koşulu $y=Ce^{2x}$ ifadesine yazılır, $y'=2y$ denklemine değil. Bu ayrım sık karışır, çünkü ikisi de aynı denklemle ilgiliymiş gibi görünür — ama koşulun görevi denklemi değil, zaten bulunmuş aileyi daraltmaktır. Hesap kısa: $x=0$ için $e^0=1$, dolayısıyla $3=C$ ve çözüm $y=3e^{2x}$.

Terim üzerine bir not: başlangıç koşuluyla seçilen bu çözüme bazı kaynaklarda "özel çözüm" denir. Bu derste aynı terim, homojen olmayan denklemlerin $y=y_h+y_p$ ayrımında farklı bir anlam taşıyacak. Karışıklığı önlemek için burada yalnızca "başlangıç koşuluyla belirlenen çözüm" ifadesi kullanılıyor.

:::

---

## Başlangıç noktası $x=0$ olmak zorunda değil

$$
y'=2y, \qquad y(1)=4
$$

$$
4=Ce^{2} \;\Rightarrow\; C=4e^{-2} \;\Rightarrow\; y=4e^{2x-2}
$$

::: {.notes}

Koşulun verildiği nokta değişse de yöntem aynıdır: genel çözümdeki $x$ ve $y$ yerine koşulun verdiği değerler yazılır ve $C$ için çözülür. Burada $x=1$, $y=4$ konur, $4=Ce^2$ elde edilir, buradan $C=4e^{-2}$ çıkar. Son ifadeyi sadeleştirirken $4e^{-2}e^{2x}=4e^{2x-2}$ yazılır.

Sonucu sınamak da kolaydır: $x=1$ konduğunda $4e^{0}=4$ çıkar, yani çözüm koşulu gerçekten sağlıyor. Bu tür bir geri kontrol, $C$ hesabında işaret ya da üs hatası yapılıp yapılmadığını anında gösterir.

:::

---

## Ek koşulun tek türü bu değil

Başlangıç koşulu tek noktada verilir: $y(x_0)=y_0$.

Koşullar aralığın iki ucunda verilirse: **sınır değer problemi**.

::: {.notes}

İki problem türü arasındaki fark koşulların dağılımıdır. Başlangıç değer probleminde bütün bilgi tek bir noktada toplanır; sıcaklığın ve gerekirse değişim hızının o noktadaki değeri verilir. Sınır değer probleminde ise koşullar aralığın iki ucuna dağılır — örneğin bir çubuğun iki ucundaki sıcaklık sabitlenir.

Bu ayrım yalnızca yazım farkı değildir. Başlangıç değer problemlerinde uygun koşullar altında tek bir çözüm garanti edilebilir; sınır değer problemlerinde ise hiç çözüm bulunmayabilir ya da sonsuz çoklukta çözüm çıkabilir. Bu ders ağırlıklı olarak başlangıç değer problemleriyle çalışacak; sınır değer problemi burada yalnızca adlandırılıyor.

:::

---

## Soru: çözüm hangi aralıkta çözümdür?

$$
y'=y^2, \qquad y(0)=1 \quad\Longrightarrow\quad y=\frac{1}{1-x}
$$

Formül $x=1$ dışında her noktada tanımlı.

**Soru:** Çözüm aralığı da $\mathbb{R}\setminus\{1\}$ mi?

::: {.notes}

Doğrulamanın sınırlarını konuşurken eşitliğin "her $x$ için" sağlanması gerektiğini söylemiştik ama hangi $x$'lerden söz ettiğimizi belirsiz bıraktık. Bu örnek boşluğu görünür kılıyor. Formülün doğru olduğunu yerine koyarak kontrol edebilirsiniz: $y=(1-x)^{-1}$ için $y'=(1-x)^{-2}$ ve $y^2=(1-x)^{-2}$, iki taraf eşit.

Payda $x=1$'de sıfırlanır, dolayısıyla formül cebirsel olarak $(-\infty,1)$ ve $(1,\infty)$ olmak üzere iki ayrı parçada tanımlıdır. Soru şu: bu iki parçanın ikisi birden mi verilen başlangıç değer probleminin çözümüdür, yoksa aralarında bir seçim mi yapmak gerekir?

:::

---

## Çözüm: başlangıç noktasını içeren aralık

> Çözüm aralığı, başlangıç noktasını içeren, formülün tanımlı olduğu en geniş açık aralıktır.

Başlangıç noktası $x=0$ olduğundan:

$$
(-\infty,1)
$$

::: {.notes}

Başlangıç noktası $x=0$, formülün birinci parçasındadır; dolayısıyla bu başlangıç değer probleminin çözümü yalnız $(-\infty,1)$ aralığında okunur. $(1,\infty)$ aralığı, aynı formülün tanımlı olduğu başka bir bölgedir, ama oraya $x=0$'dan kesintisiz bir çözüm eğrisiyle geçilemez — arada $y$ sonsuza gider. Bir çözüm eğrisinin kopmadan devam ettiği yerde bitmesi gerekir, formülün yazılabildiği yerde değil.

Başlangıç koşulunun burada ikinci bir işi olduğu ortaya çıkıyor. Aileden bir üye seçmesini zaten biliyorduk; bunun yanında çözümün hangi parça üzerinde okunacağını da belirliyor. Aynı denklem $y(0)=-1$ ile verilseydi çözüm $y=-1/(1+x)$ olurdu ve bu kez kırılma $x=-1$'e düşerdi, aralık $(-1,\infty)$ olurdu.

:::

---

## Aralık Her Zaman Daralmaz

| Problem | Formül | Cebirsel tanım kümesi | Çözüm aralığı |
|---|---|---|---|
| $y'=y^2,\ y(0)=1$ | $\dfrac{1}{1-x}$ | $\mathbb{R}\setminus\{1\}$ | $(-\infty,1)$ |
| $y'=2x,\ y(0)=1$ | $x^2+1$ | $\mathbb{R}$ | $\mathbb{R}$ |

::: {.notes}

İkinci satır, daralmanın bir kural olmadığını gösteriyor. $y'=2x$ denklemi doğrudan integralle çözülür, $y=x^2+C$ ailesini verir ve $y(0)=1$ koşulu $C=1$ seçer. Bu polinom her noktada tanımlıdır, tanım kümesini bölen bir kırılma yoktur, dolayısıyla çözüm bütün gerçek eksende geçerlidir.

İki satırı yan yana okumak, cebirsel tanım kümesi ile çözüm aralığı arasındaki farkı yerine oturtuyor: ikisi çakışabilir de, çakışmayabilir de. Formül bir noktada tanımsızlaşıp tanım kümesini parçalara ayırıyorsa çözüm aralığı daralır; ayırmıyorsa daralmaz. Sınamayı formülü bulduktan sonra yapmak gerekir, çünkü kırılmanın nereye düştüğü başlangıç koşuluna bağlıdır.

:::

---

## Sık Yapılan Hatalar

1. Koşulu genel çözüme değil denkleme yazmak
2. Tek noktada doğrulamayı yeterli saymak
3. Bir çözüm bulup aileyi atlamak
4. Sabit çözümü gözden kaçırmak
5. Genel çözümü "bütün çözümler" saymak
6. Kesikli tanım kümesinin iki parçasını birden almak

::: {.notes}

Birinci hata en sık görülenidir: $y(0)=3$ koşulu $y'=2y$ denklemine yerleştirilmeye çalışılır. Denklem bir ilişkidir, sayısal bir değeri "sağlamaz"; koşul ailenin formülüne uygulanır. İkinci hata doğrulamanın asimetrisinden doğar — eleme için bir nokta yeter, kabul için yetmez. Üçüncüsü cebirden gelen alışkanlıktır: $y=e^{2x}$ bulunup "çözüldü" denir, oysa aranan çözüm ailesidir.

Dördüncü ve beşinci hatalar birbirine yakındır ve ikisi de sabit çözümlerle ilgilidir. $y=0$ gibi sabit fonksiyonlar denklemi sağladıkları hâlde gözden kaçar; burada aile formülünde $C=0$ alınarak elde edildiler, ama bu her zaman böyle olmaz. Ayrılabilir denklemlerde bir sabit çözümün genel çözüm formülünden tamamen düştüğünü göreceğiz — genel çözümün adı "genel" olsa da bütün çözümleri kapsadığı ayrıca gösterilmesi gereken bir iddiadır.

Altıncı hata tanım aralığı tarafındadır. Payda sıfırlandığında formül iki parçada da yazılabildiği için her iki parça birden çözüm sanılır. $y=1/(1-x)$ formülü $(1,\infty)$ aralığında da tanımlıdır, ama $y(0)=1$ koşuluyla verilen problemin çözümü değildir; o parçaya ulaşan bir çözüm eğrisi $x=0$ noktasından geçmez. Başlangıç değer problemi, başlangıç noktasını içeren tek bir açık aralık seçer.

:::

---

## Karar Soruları

1. $y=x^2$, $y'=\dfrac{2y}{x}$ denkleminin çözümü mü?
2. $y=5e^{2x+3}$, $y=Ce^{2x}$ ailesinin üyesi mi?
3. $y(0)=3$ koşulu $y'=2y$ denklemini değiştirir mi?

::: {.notes}

Birincisinde yerine koyma sağlar: $y'=2x$ ve $2y/x=2x^2/x=2x$, iki taraf eşittir. Ama $x=0$ noktasında denklemin sağ tarafı tanımsızdır, dolayısıyla eşitlik bütün gerçek eksende değil, $x>0$ ya da $x<0$ aralıklarında okunur. Bir adayın denklemi sağlaması ile hangi aralıkta sağladığı ayrı sorulardır; burada $x=0$ tanım kümesini ikiye böldüğü için başlangıç koşulunun hangi parçaya düştüğü belirleyici olur.

İkincisinde üs özelliğini kullanmak yeter: $5e^{2x+3}=5e^{3}\cdot e^{2x}$, yani $C=5e^{3}$ alındığında ifade ailenin bir üyesidir. Aynı fonksiyon farklı yazılabilir; ailede olup olmadığına bakarken önce sadeleştirmek gerekir. Üçüncüsünde cevap hayırdır: denklem koşuldan bağımsız olarak aynı kalır, koşul yalnızca çözüm ailesinden bir üye seçer. Bu, birinci sık hatanın karşı tarafıdır.

:::

---

## Çözüm Kavramından Çözüm Yöntemine

- Denklem → bir **ilişki**
- Genel çözüm → bu ilişkiyi sağlayan fonksiyon **ailesi**
- Başlangıç koşulu → aileden **belirli bir üyeyi seçer** ve **aralığı belirler**

→ Yöntem sorusu: Bu aileyi *nasıl* buluruz?

::: {.notes}

Bu üç madde, "çözüm" kelimesinin bundan sonraki kullanımını sabitliyor. Diferansiyel denklem bir ilişkidir; genel çözüm bu ilişkiyi sağlayan fonksiyonların ailesidir; başlangıç koşulu aileden belirli bir üyeyi seçer ve çözümün okunacağı aralığı belirler. Yöntem tartışmasına girdiğimizde, bulunan her formül bu üç kategoriden birine yerleştirilecek ve her sonucun sonuna aralık kontrolü eklenecek.

Geriye yöntem sorusu kalıyor: bu aileyi nasıl buluruz? Buraya kadar aileler hazır verildi ve biz yalnızca doğrulama yaptık. **Doğrudan İntegral ve Yön Alanı** notu, sağ tarafın yalnız bağımsız değişkene bağlı olduğu ve tek bir integralin yettiği sınıfı ele alır. Diğer çözüm yöntemleri ise denklemin yapısına göre ayrışır.

:::

---
