---
title: "Genel Özet: Betimsel İstatistik ve Dağılımlar"
subtitle: "PSİ 303 — Sınav Tekrar Notu (Hafta 3–4)"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-29
description: "Merkezî eğilim, yayılım, dağılımın biçimi ve normal dağılım kavramlarının tanım, açıklama ve örneklerle anlatıldığı çalışma notu."
sidebar: psi303
execute:
  echo: false
---

# Genel Özet: Betimsel İstatistik ve Dağılımlar

Bir veri setini tek bir sayıyla özetlemek caziptir: "Ortalama 70." Ama bu sayı grubun ne kadarını anlatır? Herkes 70'e yakın mı, yoksa bazıları 40, bazıları 100 mü almış? Değerler bir tarafa mı yığılmış? Bu not, bir dağılımı betimlemek için gereken dört soruyu sırayla cevaplar:

1. **Merkezî eğilim:** Tipik değer nedir?
2. **Yayılım:** Değerler birbirinden ne kadar farklı?
3. **Dağılımın biçimi:** Değerler nasıl dağılmış; simetrik mi, bir yana mı uzanıyor?
4. **Normal dağılım ve göreli konum:** Yaklaşık normal bir dağılımda değerlerin ne kadarı hangi aralıktadır ve bir değer dağılımın neresindedir?

Bu kavramların grafikte nasıl göründüğü (histogram ve kutu grafiği okuma) **Çalışma Notu: Grafik Seçimi ve Grafik Okuma** notunda anlatılır. Ölçme düzeyleri (nominal, sıralı, aralık, oran) **Genel Özet: Araştırma Sorusu ve Veri Yapısı** notundadır; bu notta hangi özetin hangi düzeyde kullanılacağını konuşurken onlara dayanacağız.

Her kavram önce kısa bir **tanımla** verilir; ardından açıklanır ve örneklerle gösterilir. Notun sonunda dikkat edilmesi gereken noktalar ve kontrol soruları yer alır.

---

## 1. Merkezî eğilim

Bu konu boyunca küçük bir şirketteki sekiz çalışanın aylık maaşlarını kullanacağız (bin TL cinsinden):

**25, 27, 28, 30, 30, 32, 35, 38**

Daha sonra listeye şirket sahibinin 400 bin TL'lik maaşını ekleyip tipik değerin nasıl değiştiğine bakacağız.

### 1.1 Merkezî eğilim ölçüsü

::: {.callout-important appearance="simple"}
## Tanım
**Merkezî eğilim ölçüsü**, bir dağılımın tipik ya da merkezî değerini tek bir sayıyla özetleyen ölçüdür. En sık kullanılan üç merkezî eğilim ölçüsü ortalama, medyan ve moddur.
:::

Bir grubu tek bir sayıyla anlatmak istediğimizde "tipik" bir değer ararız: Bu şirkette bir çalışan genellikle ne kadar kazanıyor? Bu soruya üç farklı yoldan cevap verilebilir. Ortalama bütün değerlerin büyüklüğünü kullanır; medyan sıralamanın ortasına bakar; mod en sık görülen değeri seçer. Üçü çoğu zaman birbirine yakın çıkar, ama her zaman değil. Hangisinin daha iyi bir özet olduğu verinin türüne ve dağılımın biçimine bağlıdır (1.5).

### 1.2 Aritmetik ortalama

::: {.callout-important appearance="simple"}
## Tanım
**Aritmetik ortalama**, değerlerin toplamının değer sayısına bölümüdür. (Kısaca ortalama; İng. *mean*; raporlarda *M* ya da $\bar{x}$ ile gösterilir.)
:::

$$\bar{x}=\dfrac{\sum x}{n}$$

Formülde $\sum x$ bütün değerlerin toplamını, $n$ değer sayısını gösterir. Ortalamayı, toplam miktarın herkese eşit paylaştırılmış hâli gibi düşünebilirsin. Sekiz maaşın toplamı 245 bin TL'dir; sekize bölündüğünde **245 / 8 = 30,625**, yani yaklaşık **30,6 bin TL** bulunur. Ortalamanın listedeki değerlerden biri olması gerekmez; listede 30,6 bin TL kazanan kimse yoktur.

Ortalama **bütün değerlerin büyüklüğünü** kullanır. Bu, onun hem gücü hem zayıflığıdır. Şirket sahibinin 400 bin TL'lik maaşı eklendiğinde toplam 645, kişi sayısı 9 olur ve ortalama **645 / 9 ≈ 71,7 bin TL**'ye çıkar. Hesap doğrudur, ama sekiz çalışanın hepsi bu ortalamanın çok altında kazanır. Tek bir uç değer, ortalamayı çoğunluktan uzaklaştırmıştır. Bu yüzden ortalamanın **uç değerlere duyarlı** olduğu söylenir.

Başka bir örnek: yedi öğrencinin uyku süreleri 6, 7, 5, 8, 7, 6, 7 saat olsun. Toplam 46 saattir; ortalama **46 / 7 ≈ 6,57 saattir**.

### 1.3 Medyan

::: {.callout-important appearance="simple"}
## Tanım
**Medyan**, küçükten büyüğe sıralanmış verinin tam ortasındaki değerdir. Gözlem sayısı çiftse ortadaki iki değerin ortalamasıdır. (Ortanca olarak da adlandırılır; İng. *median*; raporlarda *Mdn* ile gösterilir.)
:::

Medyanı bulmanın ilk adımı **sıralamaktır**. Sekiz maaş zaten sıralıdır: 25, 27, 28, **30, 30**, 32, 35, 38. Gözlem sayısı çift olduğu için ortada iki değer vardır (4. ve 5.); ikisi de 30'dur. Medyan **(30 + 30) / 2 = 30 bin TL**'dir.

400 bin TL eklendiğinde dokuz değer olur: 25, 27, 28, 30, **30**, 32, 35, 38, 400. Bu kez ortada tek bir değer (5.) kalır ve o da 30'dur. Medyan değişmemiştir. Çünkü medyan değerlerin büyüklüğüne değil, **sıradaki yerine** bakar: 400 ya da 4.000 olsun, en büyük değer listenin sonunda kalır ve ortayı değiştirmez. Bu yüzden medyan **uç değerlere dayanıklıdır**.

Sıralamayı atlamak sık yapılan bir hatadır. Uyku süreleri yazıldığı hâliyle 6, 7, 5, **8**, 7, 6, 7'dir; ortadaki 8'i seçmek yanlış olur. Önce sıralanır: 5, 6, 6, **7**, 7, 7, 8. Ortadaki (4.) değer 7'dir; medyan **7 saattir**.

Medyan şöyle yorumlanır: gözlemlerin en az yarısı medyana eşit ya da ondan küçük, en az yarısı medyana eşit ya da ondan büyüktür. Uyku örneğinde öğrencilerin en az yarısı 7 saat ya da daha az uyuyor.

### 1.4 Mod

::: {.callout-important appearance="simple"}
## Tanım
**Mod**, veride en sık görülen değer ya da kategoridir. (Tepe değer olarak da adlandırılır; İng. *mode*.)
:::

Maaş listesinde 30 bin TL iki kez, diğer maaşlar birer kez görülür. Bu yüzden **mod 30 bin TL**'dir. Burada iki sayıyı karıştırmamak gerekir: mod **değerin kendisidir** (30 bin TL); kaç kez görüldüğü ise **frekanstır** (2). Uyku örneğinde 7 saat üç kez görülür; mod 7 saat, frekansı 3'tür.

Mod toplama ya da sıralama gerektirmez; yalnızca sayma gerektirir. Bu yüzden **nominal** değişkenlerde kullanılabilen tek merkezî eğilim ölçüsüdür. Bir mağazada en çok tercih edilen ürün rengi maviyse mod mavidir; renklerin ortalaması ya da medyanı alınamaz.

Bir veri setinin birden fazla modu olabilir: iki değer en yüksek frekansı paylaşıyorsa ikisi de moddur. Her değer yalnızca bir kez görülüyorsa anlamlı bir mod yoktur.

### 1.5 Hangi ölçü ne zaman kullanılır?

Merkezî eğilim ölçüsü iki adımda seçilir. **Önce ölçme düzeyine bakılır:** bu değişkenle hangi hesaplar anlamlı? **Sonra dağılımın biçimine bakılır:** anlamlı ölçülerden hangisi bu dağılımı daha iyi anlatıyor?

Ölçme düzeyi, hangi ölçülerin kullanılabileceğini sınırlar. Nominal bir değişkende (ürün rengi, bölüm) yalnızca mod anlamlıdır, çünkü kategoriler sıralanamaz ve toplanamaz. Sıralı bir değişkende (eğitim düzeyi, tek bir Likert maddesi) medyan da kullanılabilir, çünkü değerler sıralanabilir; ama aralarındaki uzaklıklar eşit kabul edilemediği için ortalama uygun değildir. Aralık ve oran düzeyindeki nicel değişkenlerde üç ölçü de hesaplanabilir.

Nicel bir değişkende hangisinin seçileceğini dağılımın biçimi belirler. Değerler yaklaşık **simetrik** dağılıyorsa ortalama iyi bir özettir, çünkü bütün değerlerin bilgisini kullanır. Dağılım bir yana **uzanıyorsa** ya da uç değerler varsa medyan daha iyi bir özettir, çünkü uç değerlerden etkilenmez. Sekiz çalışanın maaşında ortalama (30,6) ve medyan (30) birbirine yakındır; ikisi de tipik çalışanı anlatır. Sahibin maaşı eklendiğinde ortalama 71,7'ye fırlar, medyan 30'da kalır; tipik çalışanı medyan anlatır.

| Veri | Uygun merkezî eğilim ölçüsü |
|---|---|
| Nominal | Mod |
| Sıralı (tek Likert maddesi dahil) | Medyan (gerekirse mod) |
| Yaklaşık simetrik nicel veri | Ortalama |
| Bir yana uzanan ya da uç değerli nicel veri | Medyan (ortalamayla birlikte verilebilir) |

Bu tablo "medyan her zaman daha iyidir" demek değildir. Yaklaşık simetrik veride ortalama daha çok bilgi kullandığı için tercih edilir. Ayrıca bir uç değer gerçekse (şirket sahibi gerçekten 400 bin TL kazanıyorsa), yalnızca yüksek olduğu için silinmez; onun yerine uygun özet seçilir.

Birçok maddenin toplanmasıyla oluşan bir ölçek puanı, uygulamada aralık düzeyi kabul edilir ve yaklaşık simetrik dağılıyorsa ortalamayla özetlenir. Bu kabul yaygındır ama tartışmalıdır; raporda ortalama kullanıldığında bu kabul yapılmış olur.

---

## 2. Yayılım

Bu konu boyunca iki sınıfın sınav notlarını karşılaştıracağız. Her sınıfta beş öğrenci var:

- **A sınıfı:** 65, 68, 70, 72, 75
- **B sınıfı:** 40, 55, 70, 85, 100

İki sınıfın ortalaması da 70'tir. Medyanları da 70'tir. Merkezî eğilim ölçülerine bakılırsa iki sınıf aynıdır. Ama değil.

### 2.1 Yayılım

::: {.callout-important appearance="simple"}
## Tanım
**Yayılım**, bir dağılımdaki değerlerin birbirinden ve merkezden ne kadar farklılaştığıdır. (Değişkenlik ya da dağılım genişliği olarak da adlandırılır; İng. *spread* ya da *variability*.)
:::

A sınıfında notlar 70'in hemen etrafında toplanmıştır; en düşük not 65, en yüksek not 75'tir. B sınıfında ise 40 alan da 100 alan da vardır. Aynı ortalamaya sahip iki grup, birbirinden çok farklı olabilir. Merkezî eğilim ölçüsü bu farkı göstermez; yayılım ölçüsü gösterir.

Bunu günlük bir örnekle düşünebilirsin. İki otobüs hattında ortalama bekleme süresi 10 dakika olsun. Birinci hatta bekleme her gün 9–11 dakikadır. İkinci hatta bazı günler 1 dakika, bazı günler 25 dakika beklenir. Ortalamalar aynıdır, ama ikinci hatta ne kadar bekleyeceğini kestiremezsin. Yayılım, bu kestirilebilirliği anlatır.

Bu yüzden bir dağılımı özetlerken **merkez ve yayılım birlikte** verilir (2.7).

### 2.2 Açıklık

::: {.callout-important appearance="simple"}
## Tanım
**Açıklık**, en büyük değer ile en küçük değer arasındaki farktır. (Ranj olarak da adlandırılır; İng. *range*.)
:::

A sınıfında açıklık **75 − 65 = 10 puan**, B sınıfında **100 − 40 = 60 puandır**. B sınıfının notları altı kat daha geniş bir aralığa yayılmıştır.

Açıklığın kolaylığı, yalnızca iki değer kullanmasından gelir. Zayıflığı da buradan gelir: aradaki değerlerin nerede toplandığını hiç dikkate almaz. A sınıfına tek bir 20 alan öğrenci eklenseydi açıklık 55'e çıkardı; oysa diğer beş öğrenci hâlâ birbirine çok yakındır. Açıklık tek bir uç değerden kolayca etkilenir. Grubun tamamının ne kadar yayıldığını görmek için bütün değerleri kullanan bir ölçüye ihtiyaç vardır.

### 2.3 Varyans

::: {.callout-important appearance="simple"}
## Tanım
**Örneklem varyansı**, gözlemlerin ortalamadan farklarının karelerinin toplamının, gözlem sayısının bir eksiğine bölümüdür. (İng. *variance*; $s^2$ ile gösterilir.)
:::

$$s^2=\dfrac{\sum (x-\bar{x})^2}{n-1}$$

Varyans, bütün değerlerin ortalamadan ne kadar uzak olduğunu tek bir sayıda toplar. Hesap üç adımda yapılır.

**1. Her değerin ortalamadan farkını bul.** A sınıfında ortalama 70'tir; farklar 65 − 70 = −5, 68 − 70 = −2, 0, +2, +5 olur.

**2. Farkların karesini al ve topla.** Farkları doğrudan toplasaydık −5 − 2 + 0 + 2 + 5 = 0 bulurduk; ortalamanın altındaki ve üstündeki farklar her zaman birbirini götürür. Kare almak bütün farkları pozitif yapar: 25 + 4 + 0 + 4 + 25 = **58**.

**3. Gözlem sayısının bir eksiğine böl.** 58 / (5 − 1) = **14,5**.

B sınıfında farklar −30, −15, 0, +15, +30; kareleri 900, 225, 0, 225, 900; toplam **2250** olur. Varyans 2250 / 4 = **562,5**'tir. Ortalamadan uzak notlar büyük kareler üretir ve varyansı büyütür.

Neden $n$ değil de $n - 1$ ile bölünür? Örneklemden evrenin varyansını tahmin ederken $n$'ye bölmek, evren varyansını ortalamada olduğundan küçük tahmin eder. $n - 1$'e bölmek bu sistematik küçük tahmini düzeltir. Bu yüzden örneklem varyansında bölen $n - 1$'dir.

Varyansın bir sorunu vardır: **birimi, verinin biriminin karesidir.** Notlar puan cinsindense varyans "puan kare" cinsindendir. "Puan kare" sezgisel olarak okunamaz; A sınıfının varyansının 14,5 puan kare olması, notların ortalamadan tipik olarak ne kadar uzaklaştığını doğrudan söylemez.

### 2.4 Standart sapma

::: {.callout-important appearance="simple"}
## Tanım
**Standart sapma**, varyansın karekökü olan ve değerlerin ortalamadan tipik uzaklığını verinin kendi biriminde ifade eden yayılım ölçüsüdür. (İng. *standard deviation*; raporlarda *SD* ya da $s$ ile gösterilir.)
:::

$$s=\sqrt{s^2}$$

Varyansın birim sorununu çözmek için karekökü alınır ve böylece verinin kendi birimine geri dönülür. A sınıfında $\sqrt{14{,}5} \approx$ **3,81 puan**, B sınıfında $\sqrt{562{,}5} \approx$ **23,72 puandır**.

Standart sapma, değerlerin ortalamadan **tipik olarak ne kadar uzaklaştığını** anlatır. A sınıfında notlar 70'ten tipik olarak 4 puan kadar, B sınıfında 24 puan kadar uzaklaşır. İki sınıfın farkı artık bir sayıyla görünür: aynı ortalama, çok farklı yayılım. (Bu "tipik uzaklık", farkların basit ortalaması değildir; kareli farklara dayanan bir ölçüdür.)

Standart sapmanın büyük ya da küçük olması **iyi ya da kötü** anlamına gelmez; yalnızca farklılığın büyüklüğünü anlatır. Bir terapi grubundaki kaygı puanlarının standart sapmasının büyük olması, katılımcıların birbirinden çok farklı olduğunu söyler; terapinin başarılı ya da başarısız olduğunu söylemez. Standart sapma ortalamanın yüksek ya da düşük olduğu hakkında da bilgi vermez.

Standart sapma da ortalama gibi bütün değerleri kullandığı için **uç değerlere duyarlıdır**. On bir öğrencinin haftalık spor saatleri 2, 3, 4, 5, 6, 7, 8, 9, 10, 12 ve 25 olsun. Standart sapma yaklaşık **6,33 saattir**. 25 saatlik tek gözlem çıkarılarak hesaplanırsa yaklaşık **3,20 saat** olur. Tek bir uzak değer standart sapmayı yaklaşık iki katına çıkarmıştır. (Bu karşılaştırma yalnızca etkiyi göstermek içindir; gözlemi silme gerekçesi değildir.)

### 2.5 Çeyrekler

::: {.callout-important appearance="simple"}
## Tanım
**Çeyrekler**, sıralanmış veriyi yaklaşık dört eşit parçaya ayıran üç değerdir. **Birinci çeyrek (Q1)** değerlerin alttan yaklaşık dörtte birini, **ikinci çeyrek (Q2)** yarısını, **üçüncü çeyrek (Q3)** dörtte üçünü ayırır. İkinci çeyrek medyandır. (İng. *quartiles*.)
:::

Ortalama ve standart sapma değerlerin büyüklüğüne dayanır; çeyrekler ise medyan gibi **sıralamadaki konuma** dayanır. Bu notta çeyrekleri "yarıların ortası" yöntemiyle bulacağız: önce medyan bulunur; sonra medyanın altında kalan yarının medyanı Q1, üstünde kalan yarının medyanı Q3 olur. (Gözlem sayısı tekse medyan değerin kendisi yarılara dahil edilmez.)

A sınıfında sıralı notlar 65, 68, **70**, 72, 75'tir. Medyan 70'tir. Alt yarı 65 ve 68'dir; medyanı **Q1 = 66,5**. Üst yarı 72 ve 75'tir; medyanı **Q3 = 73,5**. B sınıfında aynı işlem **Q1 = 47,5**, **Q2 = 70**, **Q3 = 92,5** verir.

Çeyrekleri hesaplamanın birden fazla yöntemi vardır. Özellikle küçük veri setlerinde farklı yöntemler (ve farklı yazılımlar) biraz farklı Q1 ve Q3 verebilir; bu bir hesap hatası değildir. Sonuçları karşılaştırırken kullanılan yöntem kontrol edilir.

### 2.6 Çeyrekler açıklığı

::: {.callout-important appearance="simple"}
## Tanım
**Çeyrekler açıklığı**, üçüncü çeyrek ile birinci çeyrek arasındaki farktır (IQR = Q3 − Q1). Verinin ortadaki yaklaşık yarısının kapladığı aralığın genişliğini gösterir. (Çeyrekler arası açıklık olarak da adlandırılır; İng. *interquartile range*, *IQR*.)
:::

Açıklık en büyük ile en küçük değer arasındaki farka bakıyordu; çeyrekler açıklığı ise **ortadaki yarının** genişliğine bakar. A sınıfında IQR **73,5 − 66,5 = 7 puan**, B sınıfında **92,5 − 47,5 = 45 puandır**. B sınıfında yalnızca en uçlar değil, ortadaki öğrenciler de birbirinden çok daha uzaktır.

IQR'nin en önemli özelliği, **uç değerlere dayanıklı** olmasıdır. Spor saatleri örneğinde (2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 25) medyan 7'dir; alt yarının (2, 3, 4, 5, 6) medyanı Q1 = 4, üst yarının (8, 9, 10, 12, 25) medyanı Q3 = 10'dur. IQR = 10 − 4 = **6 saattir**. 25 yerine 250 yazsaydı Q3 yine 10 kalırdı; IQR değişmezdi. Açıklık ve standart sapma ise büyük ölçüde değişirdi.

IQR bir merkez ölçüsü değildir. "IQR 6 saat" cümlesi tipik öğrencinin 6 saat spor yaptığı anlamına gelmez; öğrencilerin ortadaki yaklaşık yarısının 6 saat genişliğinde bir aralığa (burada 4–10 saat) yayıldığı anlamına gelir.

Q1, medyan, Q3 ve IQR, **kutu grafiğinin** temelidir: kutunun kenarları Q1 ve Q3, içindeki çizgi medyan, kutunun uzunluğu IQR'dir. Kutu grafiğinin nasıl okunduğu **Grafik Seçimi ve Grafik Okuma** notunda anlatılır.

### 2.7 Merkez ve yayılımı birlikte raporlamak

Bir dağılım, merkez ve yayılım birlikte verildiğinde anlaşılır. A sınıfı için yalnızca "ortalama 70" demek yerine **M = 70 puan, SD = 3,81 puan**; B sınıfı için **M = 70 puan, SD = 23,72 puan** denir. Aynı merkez, farklı yayılım böylece görünür olur.

Merkez ve yayılım ölçüleri çift olarak seçilir:

| Merkez | Yayılım | Ne zaman? |
|---|---|---|
| Ortalama | Standart sapma | Yaklaşık simetrik nicel veri |
| Medyan | Çeyrekler açıklığı | Bir yana uzanan ya da uç değerli nicel veri; sıralı veri |

Mantık 1.5'teki ile aynıdır. Ortalama ile standart sapma bütün değerlerin büyüklüğünü kullanır ve uç değerlere duyarlıdır; medyan ile IQR sıralamadaki konuma dayanır ve uç değerlere dayanıklıdır. Spor saati verisi için ortalama ve standart sapma **M = 8,27 saat, SD = 6,33 saat**; medyan ve IQR **Mdn = 7 saat, IQR = 6 saattir**. 25 saatlik uç değer nedeniyle ikinci çift tipik öğrenciyi daha iyi anlatır.

Sıralı kategorilerde ("hiç, nadiren, bazen, sık sık, her zaman") kategoriler arasındaki uzaklıklar ölçülmüş sayılar olmadığı için sayısal bir Q3 − Q1 farkı hesaplanmaz. Bunun yerine medyan kategori ile Q1 ve Q3'ün düştüğü kategoriler bildirilir: "Medyan cevap 'bazen'; ortadaki yarı 'nadiren' ile 'sık sık' arasında."

---

## 3. Dağılımın biçimi

Merkez ve yayılım iki dağılımı ayırt etmeye yetmeyebilir: aynı ortalama ve aynı standart sapmaya sahip iki dağılım bambaşka görünebilir. Biri ortada toplanıp iki yana eşit azalır, öbürü bir tarafa yığılıp öbür tarafa uzun bir kuyruk bırakır. Bu konuda bir sınavın puan dağılımını farklı durumlarda düşünerek biçimi anlatan dört özelliği göreceğiz. Biçim en iyi histogramda görülür.

### 3.1 Simetri

::: {.callout-important appearance="simple"}
## Tanım
**Simetrik dağılım**, bir merkez çizgisinin iki yanının birbirinin ayna görüntüsü olduğu dağılımdır.
:::

Puanların çoğu orta bölgede toplanıyor ve iki yana doğru benzer biçimde azalıyorsa dağılım simetriktir: histogramı ortadan katlasan iki yan üst üste gelir. Gerçek verilerde birebir ayna görüntüsü neredeyse hiç görülmez; "yaklaşık simetrik" demek yeterlidir.

Dağılım **hem simetrik hem tek tepeli** ise ortalama, medyan ve mod aynı yerde ya da birbirine çok yakın bulunur. Yalnızca simetrik olması bunu garanti etmez: iki tepeli bir dağılım da simetrik olabilir ve bu durumda mod iki tanedir (3.3).

### 3.2 Çarpıklık

::: {.callout-important appearance="simple"}
## Tanım
**Çarpıklık**, bir dağılımın simetriden sapmasıdır; değerlerin bir tarafta yığılıp öbür tarafa doğru uzun bir kuyruk oluşturmasıdır. Çarpıklık **kuyruğun uzandığı yöne** göre adlandırılır. (İng. *skewness*.)
:::

Kuyruk, dağılımın seyrekleşerek uzayan ucudur. Kuyruk yüksek değerlere (sağa) uzanıyorsa dağılım **sağa çarpık** (pozitif çarpık), düşük değerlere (sola) uzanıyorsa **sola çarpık** (negatif çarpık) olarak adlandırılır.

Adlandırmada en sık yapılan hata, yığılmanın tarafına bakmaktır. Kural şudur: **adı kuyruk verir, yığılma vermez.** Çok kolay bir sınavda puanların çoğu yüksektir (yığılma sağda), birkaç öğrenci çok düşük alır (kuyruk solda). Bu dağılım **sola çarpıktır**. Çok zor bir sınavda puanların çoğu düşüktür (yığılma solda), birkaç öğrenci çok yüksek alır (kuyruk sağda); dağılım **sağa çarpıktır**.

Çarpıklık ortalamayı kuyruğa doğru çeker, medyanı ise neredeyse etkilemez (1.2 ve 1.3). Bu yüzden tek tepeli bir dağılımda genellikle:

- **Sağa çarpıksa** ortalama medyandan büyüktür. Maaş örneğinde 400 bin TL'lik maaş sağa uzanan bir kuyruk oluşturur; ortalama 71,7, medyan 30'dur.
- **Sola çarpıksa** ortalama medyandan küçüktür.

Sağa çarpık dağılımlar psikolojide sık görülür. Tepki sürelerinde yanıtların çoğu kısa sürede gelir, birkaçı çok uzun sürer. Gelir, hata sayısı ve semptom sayısı da genellikle sağa çarpıktır.

Ortalama–medyan sırası bir **ipucudur, kanıt değildir**. "Ortalama medyandan büyük, demek ki kesin sağa çarpık" demeden önce histogramdaki kuyruğa bakılır. İstatistik yazılımlarının verdiği **çarpıklık katsayısı** da aynı bilgiyi sayıyla verir: pozitif değer sağa, negatif değer sola çarpıklığa, sıfıra yakın değer simetriye işaret eder. Katsayı da histogramla birlikte okunur.

### 3.3 Tepe sayısı

::: {.callout-important appearance="simple"}
## Tanım
**Tepe sayısı**, bir dağılımda görülen belirgin yoğunlaşma bölgelerinin sayısıdır. Tek yoğunlaşma bölgesi olan dağılıma **tek tepeli**, iki bölgesi olana **iki tepeli** dağılım denir. (İng. *unimodal*, *bimodal*.)
:::

Çoğu dağılımda değerler tek bir bölgede yoğunlaşır. Bazen ise histogramda iki ayrı yığılma görülür. Bir sınavı hem dersi düzenli izleyen hem hiç izlemeyen öğrenciler aldıysa puanlar bir düşük, bir yüksek bölgede toplanabilir. Sabah çalışanlarla gece çalışanların yatış saatleri birlikte çizildiğinde de iki tepe görülebilir.

İki tepeli bir dağılımda ortalama ve medyan iki tepenin arasına, gözlemlerin az olduğu bölgeye düşebilir ve hiçbir yoğunlaşmayı temsil etmeyebilir. Tek bir merkez özeti burada yanıltır. İki tepe çoğu zaman verinin farklı alt gruplardan oluştuğuna **işaret eder**; ama bunu kanıtlamaz. Grupları ayıran bir değişken (örneğin derse devam) bulunursa gruplar ayrı ayrı özetlenir.

Tepe sayısı ile simetri ayrı özelliklerdir: iki tepeli bir dağılım simetrik de olabilir.

### 3.4 Basıklık

::: {.callout-important appearance="simple"}
## Tanım
**Basıklık**, bir dağılımın kuyruklarının kalınlığıyla, yani uç değerlerin ne sıklıkta görüldüğüyle ilgili biçim özelliğidir. (İng. *kurtosis*.)
:::

Çarpıklık kuyruğun **hangi yöne** uzandığını, basıklık ise kuyruklarda **ne kadar** değer bulunduğunu anlatır. Bir dağılımda çok uzak değerler normal dağılımda beklenenden daha sık görülüyorsa dağılım **kalın kuyruklu** sayılır.

Yazılımlar basıklık katsayısı da verir. Normal dağılımı sıfır kabul eden basıklık katsayısında pozitif değer normal dağılıma göre daha kalın kuyruklara, negatif değer daha ince kuyruklara işaret eder. Basıklık katsayısı dağılımın kaç tepesi olduğunu göstermez; bunun için histograma bakılır.

---

## 4. Normal dağılım ve göreli konum

Bu konu boyunca **ortalaması 100, standart sapması 15 olan ve yaklaşık normal dağılan** bir zekâ testi puanını örnek alacağız.

### 4.1 Normal dağılım

::: {.callout-important appearance="simple"}
## Tanım
**Normal dağılım**, simetrik, tek tepeli ve çan biçimli olan; ortalaması ve standart sapmasıyla tamamen belirlenen kuramsal bir dağılımdır. (Gauss dağılımı olarak da adlandırılır; İng. *normal distribution*.)
:::

Normal dağılım belirli bir çan biçimidir. Ortalama, medyan ve mod aynı noktadadır ve bu nokta tepedir. Değerler tepenin iki yanında eşit hızla azalır. Ortalama çanın nerede durduğunu, standart sapma çanın ne kadar geniş olduğunu belirler; bu iki sayı bilinirse dağılımın tamamı bilinir.

Her simetrik dağılım normal değildir. İki tepeli simetrik bir dağılım normal dağılım değildir, çünkü normal dağılım tek tepelidir. Küçük bir çarpıklık katsayısı da tek başına normalliği göstermez; histograma bakmak gerekir.

Normal dağılım bir **modeldir**. Gerçek veriler ona ancak yaklaşık olarak uyar. Boy ölçümleri ve iyi geliştirilmiş zekâ testlerinin puanları yaklaşık normal dağılıma örnektir. Gelir, tepki süresi ve sayım verileri ise çoğunlukla sağa çarpıktır. Bu, verinin "bozuk" olduğu anlamına gelmez; yalnızca normal dağılıma ait kuralların bu verilere uygulanamayacağı anlamına gelir.

### 4.2 68–95–99,7 kuralı

::: {.callout-important appearance="simple"}
## Tanım
**68–95–99,7 kuralı**, normal dağılımda değerlerin yaklaşık %68'inin ortalamanın bir standart sapma altı ile üstü arasında, %95'inin iki standart sapma, %99,7'sinin üç standart sapma altı ile üstü arasında bulunduğunu söyler. (Ampirik kural olarak da adlandırılır.)
:::

Zekâ testi örneğinde ortalama 100, standart sapma 15'tir:

- **Bir standart sapma:** 100 − 15 ile 100 + 15 arası, yani **85–115**. Değerlerin yaklaşık **%68**'i bu aralıktadır.
- **İki standart sapma:** 100 − 30 ile 100 + 30 arası, yani **70–130**. Değerlerin yaklaşık **%95**'i bu aralıktadır.
- **Üç standart sapma:** 100 − 45 ile 100 + 45 arası, yani **55–145**. Değerlerin yaklaşık **%99,7**'si bu aralıktadır.

Bu aralıklar **iç içedir**: 70–130 aralığı 85–115 aralığını da içerir. Yüzdeler ayrı grupların payları değil, giderek genişleyen aralıkların kapsadığı paylardır.

Aralığın dışında kalanlar da hesaplanabilir. 85–115 aralığında %68 varsa dışında %32 vardır. Normal dağılım simetrik olduğu için bu %32 iki kuyruğa eşit bölünür: değerlerin yaklaşık **%16**'sı 85'in altında, **%16**'sı 115'in üstündedir.

Bu oranlar normal eğrinin altındaki **alan** olarak da düşünülebilir. Eğrinin altındaki toplam alan 1'dir (yani %100). Bir puanın solundaki alan, o puandan düşük değerlerin oranını; iki puan arasındaki alan, o aralıktaki değerlerin oranını gösterir.

Kuralın koşulu, dağılımın **yaklaşık normal** olmasıdır. Belirgin biçimde sağa çarpık bir gelir dağılımında "ortalama ± 1 SD" aralığı hesaplanabilir, ama bu aralığın değerlerin %68'ini içerdiği söylenemez.

### 4.3 z puanı

::: {.callout-important appearance="simple"}
## Tanım
**z puanı**, bir değerin kendi dağılımının ortalamasından kaç standart sapma uzakta olduğunu gösteren standart puandır. (Standart puan olarak da adlandırılır; İng. *z score*.)
:::

Ham puan, testin kendi birimindedir (puan, saniye, saat). z puanı ise bir değerin **dağılım içindeki konumunu** standart sapma birimiyle anlatır. Zekâ testi örneğinde 115 puan alan bir kişi ortalamanın bir standart sapma üstündedir; 85 alan bir kişi bir standart sapma altındadır; 100 alan kişi tam ortalamadadır.

z puanı iki bilgi taşır. **İşareti**, değerin ortalamanın hangi tarafında olduğunu söyler: pozitif z ortalamanın üstünü, negatif z altını, sıfır ortalamanın kendisini gösterir. **Büyüklüğü**, ortalamadan ne kadar uzak olduğunu standart sapma cinsinden söyler.

z puanının en önemli kullanımı, **farklı ölçeklerdeki puanları karşılaştırmaktır**. Bir öğrenci matematik sınavından 70, Türkçe sınavından 80 almış olsun. Türkçe puanı daha yüksektir; ama öğrenci hangi derste kendi sınıfına göre daha iyidir? Bu, iki sınavın ortalamasına ve standart sapmasına bağlıdır. z puanı, her puanı kendi dağılımı içindeki konumuna çevirerek karşılaştırmayı mümkün kılar.

z puanına çevirmek **dağılımın biçimini değiştirmez**. Sağa çarpık bir veri z puanına çevrilirse z puanları da sağa çarpıktır. Bu yüzden z puanına çevirmek, normal dağılıma ait oranları kullanma hakkı vermez.

---

## Dikkat edilmesi gereken noktalar

Bu notta en sık karıştırılan noktalar şunlardır. Her biri ilgili konuda anlatıldı; burada tek yerde toplandı.

**Merkezî eğilim (1. konu)**

1. **Ortalama uç değerlere duyarlıdır.** Hesabın doğru olması, ortalamanın tipik kişiyi iyi anlattığını göstermez.
2. **Medyanı bulmadan önce sırala.** Yazıldığı hâliyle ortadaki değer medyan değildir. Çift sayıda gözlemde ortadaki iki değerin ortalaması alınır.
3. **Mod değerin kendisidir, frekans değildir.** 30 iki kez görülüyorsa mod 30, frekansı 2'dir. Birden fazla mod olabilir.
4. **Nominal veride yalnızca mod anlamlıdır.** Sıralı veride medyan da kullanılır; ortalama kullanılmaz.
5. **Medyan her zaman daha iyi değildir.** Yaklaşık simetrik nicel veride ortalama tercih edilir; medyan çarpık ve uç değerli veride tercih edilir.
6. **Gerçek bir uç değer silinmez; uygun özet seçilir.**

**Yayılım (2. konu)**

7. **Aynı ortalama aynı dağılım değildir.** Merkez ve yayılım birlikte verilir.
8. **Açıklık yalnızca iki değeri kullanır** ve tek bir uç değerden kolayca etkilenir.
9. **Farkları toplamak her zaman sıfır verir;** bu yüzden varyansta farkların karesi alınır.
10. **Örneklem varyansında bölen n − 1'dir.**
11. **Varyansın birimi verinin biriminin karesidir; standart sapma verinin kendi birimindedir.**
12. **Standart sapma bir kalite puanı değildir.** Büyük olması "kötü", küçük olması "iyi" demek değildir; yalnızca farklılığın büyüklüğünü anlatır. Ortalamanın yüksekliği hakkında da bilgi vermez.
13. **Standart sapma uç değerlere duyarlı, IQR dayanıklıdır.**
14. **IQR bir merkez değildir.** Ortadaki yaklaşık yarının genişliğidir.
15. **Çeyrek hesaplama yöntemleri farklıdır.** Küçük veride farklı yazılımlar farklı Q1 ve Q3 verebilir.
16. **Merkez ve yayılım ölçüleri çift olarak seçilir:** ortalama ile standart sapma, medyan ile IQR.

**Dağılımın biçimi (3. konu)**

17. **Çarpıklığın adını kuyruk verir, yığılma vermez.** Puanların çoğu yüksek, birkaçı çok düşükse dağılım sola çarpıktır.
18. **Sağa çarpıkta genellikle ortalama > medyan, sola çarpıkta ortalama < medyan.** Bu bir ipucudur; histogramla doğrulanır.
19. **Simetri ve tepe sayısı ayrı özelliklerdir.** İki tepeli bir dağılım simetrik olabilir.
20. **İki tepe alt gruplara işaret eder, kanıtlamaz.**
21. **Basıklık kuyrukların kalınlığıyla ilgilidir;** tepe sayısını göstermez.

**Normal dağılım ve z puanı (4. konu)**

22. **Her simetrik dağılım normal değildir.** Normal dağılım aynı zamanda tek tepeli ve çan biçimlidir.
23. **68–95–99,7 kuralı yalnızca yaklaşık normal dağılımda geçerlidir.**
24. **Bu yüzdeler iç içe aralıklara aittir.** Dışarıda kalan pay iki kuyruğa eşit bölünür (%32 → her kuyrukta %16).
25. **z puanının işareti yönü, büyüklüğü uzaklığı gösterir.**
26. **z puanına çevirmek dağılımın biçimini değiştirmez.** Çarpık veri, z puanına çevrilince de çarpıktır.

## Kontrol soruları

### 1. Konu: Merkezî eğilim

1. Sekiz çalışanın maaşları (bin TL) 25, 27, 28, 30, 30, 32, 35, 38. Ortalama, medyan ve modu bul. Modun frekansı kaçtır?
2. Bu listeye 400 bin TL eklenince ortalama ne olur? Medyan ve mod değişir mi? Neden?
3. Aynı örnekte tipik çalışanı hangi ölçü daha iyi anlatır? 400 bin TL'lik maaş gerçekse silinmeli midir?
4. Uyku süreleri 6, 7, 5, 8, 7, 6, 7 saat. Ortada yazılı 8 neden medyan değildir? Medyan nedir?
5. Aynı uyku listesinin ortalamasını ve modunu bul.
6. "Bütün değerlerin büyüklüğünü kullanır", "sıralamanın ortasına bakar", "en sık görüleni seçer": hangisi ortalama, hangisi medyan, hangisi moddur?
7. Bir mağazada en çok tercih edilen renk mavi. Bu değişken için hangi merkezî eğilim ölçüsü anlamlıdır? Neden?
8. Tek bir Likert maddesi (1–5) için hangi merkezî eğilim ölçüsü uygundur? Neden ortalama uygun değildir?
9. 20 maddelik bir ölçeğin toplam puanı yaklaşık simetrik dağılıyor. Hangi kabul altında ortalama kullanılır?
10. Her değerin yalnızca bir kez görüldüğü bir veride mod nedir? İki değer en yüksek frekansı paylaşıyorsa ne olur?
11. "Uç değer olabileceği için her veride medyan kullanılmalıdır." Bu yargı doğru mu?
12. Gözlem sayısı çift olduğunda medyan nasıl bulunur? 4, 8, 10, 15 listesinin medyanı nedir?

::: {.callout-note collapse="true" title="Cevaplar (1. Konu)"}
1. Ortalama 245 / 8 = 30,625 (≈ 30,6) bin TL. Medyan (30 + 30) / 2 = 30 bin TL. Mod 30 bin TL; frekansı 2.
2. Ortalama 645 / 9 ≈ 71,7 bin TL'ye çıkar. Medyan (dokuz değerin beşincisi) ve mod 30'da kalır; medyan sıradaki konuma, mod frekansa bakar.
3. Medyan. Maaş gerçekse silinmez; uygun özet (medyan) seçilir, ortalamayla birlikte verilebilir.
4. Liste sıralanmamıştır. Sıralı hâli 5, 6, 6, 7, 7, 7, 8; ortadaki (4.) değer 7 saattir.
5. Ortalama 46 / 7 ≈ 6,57 saat. Mod 7 saat (frekansı 3).
6. Sırasıyla ortalama, medyan, mod.
7. Mod (mavi). Renk nominaldir; kategoriler sıralanamaz ve toplanamaz.
8. Medyan (gerekirse mod). Madde sıralıdır; seçenekler arasındaki uzaklıklar eşit kabul edilemez.
9. Toplam puanın aralık düzeyinde kabul edilmesi. Bu kabul yaygındır ama tartışmalıdır.
10. Anlamlı bir mod yoktur. İki değer en yüksek frekansı paylaşıyorsa ikisi de moddur.
11. Hayır. Yaklaşık simetrik nicel veride bütün değerlerin bilgisini kullanan ortalama tercih edilir.
12. Ortadaki iki değerin ortalaması alınır: (8 + 10) / 2 = 9.
:::

### 2. Konu: Yayılım

1. İki grubun ortalaması aynı, standart sapmaları 4 ve 24 puan. Dağılımları benzer midir?
2. A: 65, 68, 70, 72, 75; B: 40, 55, 70, 85, 100. İki grubun açıklıklarını bul.
3. A sınıfına tek bir 20 alan öğrenci eklenirse açıklık ne olur? Bu, açıklığın hangi zayıflığını gösterir?
4. A sınıfında ortalamadan farkları ve farkların toplamını bul. Neden varyansta farkların karesi alınır?
5. A sınıfının örneklem varyansını hesapla.
6. B sınıfında kareler toplamı 2250. Örneklem varyansı nedir? Bölen neden 5 değil 4'tür?
7. A sınıfının varyansı 14,5, standart sapması yaklaşık 3,81. Hangisinin birimi puan, hangisinin puan karedir?
8. Bir terapi grubunda kaygı puanlarının standart sapması büyük çıktı. Bu, terapinin başarısız olduğunu gösterir mi?
9. Standart sapmalar 4 ve 24 ise hangi grubun ortalamasının daha yüksek olduğu söylenebilir mi?
10. Yarıların ortası yöntemiyle A ve B sınıflarının Q1, Q3 ve IQR değerlerini bul.
11. Spor saatleri 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 25. Q1, medyan, Q3 ve IQR nedir?
12. Aynı listede 25 yerine 250 yazsaydı IQR ve standart sapma nasıl etkilenirdi?
13. "IQR 6 saat" cümlesi ne anlatır? Tipik öğrencinin 6 saat spor yaptığı anlamına gelir mi?
14. Spor verisi için M = 8,27, SD = 6,33; Mdn = 7, IQR = 6. Hangi çift tipik öğrenciyi daha iyi anlatır? Neden?
15. Aynı küçük veri setinde iki yazılım farklı IQR verdi. Bu bir hata mıdır?
16. "Nadiren–bazen–sık sık" cevapları için yayılım nasıl bildirilir?

::: {.callout-note collapse="true" title="Cevaplar (2. Konu)"}
1. Hayır. Standart sapması 24 olan grup çok daha geniş yayılmıştır; aynı ortalama aynı dağılım demek değildir.
2. A: 75 − 65 = 10 puan. B: 100 − 40 = 60 puan.
3. 75 − 20 = 55 puana çıkar. Açıklık yalnızca iki uç değeri kullanır ve tek bir uç değerden kolayca etkilenir; diğer beş öğrenci hâlâ birbirine yakındır.
4. Farklar −5, −2, 0, 2, 5; toplamı 0'dır. Ortalamanın altındaki ve üstündeki farklar her zaman birbirini götürdüğü için kare alınarak hepsi pozitif yapılır.
5. Kareler 25, 4, 0, 4, 25; toplam 58. Varyans 58 / 4 = 14,5.
6. 2250 / 4 = 562,5. Örneklemden evren varyansını tahmin ederken n'ye bölmek sistematik olarak küçük tahmin verir; n − 1 bunu düzeltir.
7. Standart sapmanın birimi puan, varyansın birimi puan karedir.
8. Hayır. Standart sapma yalnızca katılımcıların birbirinden ne kadar farklı olduğunu anlatır; başarı ya da başarısızlık göstermez.
9. Hayır. Standart sapma merkezin yüksekliği hakkında bilgi vermez.
10. A: Q1 = 66,5, Q3 = 73,5, IQR = 7. B: Q1 = 47,5, Q3 = 92,5, IQR = 45.
11. Medyan 7; alt yarı 2–6'nın medyanı Q1 = 4; üst yarı 8, 9, 10, 12, 25'in medyanı Q3 = 10; IQR = 6 saat.
12. IQR değişmezdi (Q3 yine 10). Standart sapma çok büyürdü, çünkü bütün değerlerin büyüklüğünü kullanır.
13. Öğrencilerin ortadaki yaklaşık yarısının 6 saat genişliğinde bir aralığa (4–10 saat) yayıldığını anlatır. Tipik değer değildir; tipik değer medyandır (7 saat).
14. Medyan ve IQR. 25 saatlik uç değer ortalamayı ve standart sapmayı büyütmüştür; medyan ve IQR ondan etkilenmez.
15. Mutlaka hata değildir. Çeyrekleri hesaplamanın farklı yöntemleri vardır; kullanılan yöntem kontrol edilir.
16. Medyan kategori ile Q1 ve Q3'ün düştüğü kategoriler bildirilir. Kategoriler arası uzaklıklar ölçülmüş sayılar olmadığı için sayısal Q3 − Q1 hesaplanmaz.
:::

### 3. Konu: Dağılımın biçimi

1. Bir histogramı ortadan katlayınca iki yan üst üste geliyor. Bu hangi özelliktir?
2. Ortalama, medyan ve modun aynı yerde olması için simetrinin yanında hangi özellik gerekir?
3. Çok kolay bir sınavda puanların çoğu yüksek, birkaçı çok düşük. Kuyruk hangi yöndedir? Dağılım nasıl adlandırılır?
4. Çok zor bir sınavda puanların çoğu düşük, birkaçı çok yüksek. Dağılım nasıl adlandırılır?
5. "Puanların çoğu solda toplandığı için dağılım sola çarpıktır." Bu cümledeki hata nedir?
6. Sağa çarpık tek tepeli bir dağılımda ortalama ile medyan arasında genellikle nasıl bir ilişki vardır? Neden?
7. Dokuz kişilik maaş grubunda ortalama 71,7, medyan 30. Hangi çarpıklık beklenir? Bu nasıl doğrulanır?
8. Tepki sürelerinde yanıtların çoğu kısa, birkaçı çok uzun. Kuyruk hangi yöndedir?
9. Çarpıklık katsayısı pozitif çıktı. Ne anlama gelir?
10. Bir sınavın puan histogramında iki ayrı yoğunlaşma var. Bu nasıl adlandırılır? İki alt grubun varlığını kanıtlar mı?
11. İki tepeli bir dağılımda ortalama neden yanıltıcı olabilir?
12. İki tepeli bir dağılım simetrik olabilir mi?
13. "Uç değerler normal dağılıma göre daha sık görülüyor." Bu ifade çarpıklıkla mı, basıklıkla mı ilgilidir?
14. Basıklık katsayısından dağılımın kaç tepesi olduğu anlaşılabilir mi?
15. Ortalaması ve standart sapması aynı olan iki dağılımın biçimleri de aynı olmak zorunda mıdır?

::: {.callout-note collapse="true" title="Cevaplar (3. Konu)"}
1. Simetri.
2. Tek tepeli olması.
3. Kuyruk sola (düşük puanlara) uzanır; dağılım sola çarpıktır.
4. Sağa çarpık (kuyruk yüksek puanlara uzanır).
5. Çarpıklığın adını yığılma değil kuyruk verir. Puanlar solda toplanıp kuyruk sağa uzanıyorsa dağılım sağa çarpıktır.
6. Ortalama medyandan büyüktür. Kuyruktaki uzak değerler ortalamayı kendi yönüne çeker; medyan ise sıradaki konuma baktığı için etkilenmez.
7. Sağa çarpıklık beklenir. Histogramda kuyruğun sağa uzandığına bakılarak doğrulanır; ortalama–medyan sırası tek başına kanıt değildir.
8. Sağa.
9. Dağılımın sağa çarpık olduğuna işaret eder; histogramla birlikte okunur.
10. İki tepeli dağılım. Kanıtlamaz; alt gruplara işaret eder. Grupları ayıran bir değişken olup olmadığı araştırılır.
11. Ortalama iki tepenin arasına, gözlemlerin az olduğu bölgeye düşebilir ve hiçbir yoğunlaşmayı temsil etmez.
12. Evet. Simetri ve tepe sayısı ayrı özelliklerdir.
13. Basıklıkla.
14. Hayır. Tepe sayısı histogramdan değerlendirilir.
15. Hayır. Aynı merkez ve yayılım farklı biçimlerle (simetrik, çarpık, iki tepeli) birlikte bulunabilir.
:::

### 4. Konu: Normal dağılım ve göreli konum

1. Normal dağılımın üç biçim özelliği nedir? Hangi iki sayı dağılımı tamamen belirler?
2. Normal dağılımda ortalama, medyan ve mod nerededir?
3. Simetrik ama iki tepeli bir dağılım normal dağılım mıdır?
4. Çarpıklık katsayısının sıfıra yakın olması dağılımın normal olduğunu gösterir mi?
5. Bir zekâ testinde M = 100, SD = 15 ve dağılım yaklaşık normal. Değerlerin yaklaşık %68'i hangi aralıktadır?
6. Aynı testte 70–130 aralığı değerlerin yaklaşık yüzde kaçını kapsar? 55–145 aralığı?
7. Aynı testte 115'in üstünde kalanlar yaklaşık yüzde kaçtır? Nasıl buldun?
8. Aynı testte 85'in altında kalanlar yaklaşık yüzde kaçtır?
9. %68, %95 ve %99,7 ayrı grupların payları mıdır? Açıkla.
10. Normal eğrinin altındaki toplam alan kaçtır? Bir puanın solundaki alan neyi gösterir?
11. Belirgin biçimde sağa çarpık bir gelir verisinde ortalama ± 1 SD aralığının değerlerin %68'ini içerdiği söylenebilir mi?
12. z puanının işareti ve büyüklüğü neyi anlatır? z = 0 hangi konumdur?
13. Zekâ testinde (M = 100, SD = 15) 115, 85 ve 100 alan kişilerin z puanlarının işaretleri nedir? Hangisi ortalamadan en uzaktır?
14. Bir öğrenci matematikten 70, Türkçeden 80 aldı. "Türkçede daha başarılı" demek için ham puanlar yeterli midir? z puanı ne sağlar?
15. Sağa çarpık bir veri z puanlarına çevrildi. Dağılım normal olur mu?

::: {.callout-note collapse="true" title="Cevaplar (4. Konu)"}
1. Simetrik, tek tepeli, çan biçimli. Ortalama ve standart sapma.
2. Üçü de aynı noktadadır (tepe).
3. Hayır. Normal dağılım tek tepelidir; simetri tek başına yetmez.
4. Hayır. Simetri hakkında ipucu verir; tepe sayısı ve diğer biçim özellikleri için histograma bakılır.
5. 85–115 (ortalama ± 1 SD).
6. 70–130 yaklaşık %95'ini, 55–145 yaklaşık %99,7'sini kapsar.
7. Yaklaşık %16. 85–115 arasında %68 varsa dışında %32 vardır; simetri nedeniyle bu iki kuyruğa eşit bölünür.
8. Yaklaşık %16.
9. Hayır. Aralıklar iç içedir; 70–130 aralığı 85–115'i de içerir. Yüzdeler giderek genişleyen aralıkların kapsadığı paylardır.
10. Toplam alan 1'dir (%100). Bir puanın solundaki alan, o puandan düşük değerlerin oranını gösterir.
11. Hayır. Kural yalnızca yaklaşık normal dağılımda geçerlidir.
12. İşaret ortalamanın hangi tarafında olduğunu (pozitif üstünde, negatif altında), büyüklük kaç standart sapma uzakta olduğunu anlatır. z = 0 ortalamanın kendisidir.
13. 115 pozitif, 85 negatif, 100 sıfırdır. 115 ve 85 ortalamadan eşit uzaklıktadır (birer standart sapma); 100 ortalamanın kendisidir.
14. Yeterli değildir; iki sınavın ortalaması ve standart sapması farklı olabilir. z puanı her puanı kendi dağılımı içindeki konumuna çevirerek karşılaştırmayı mümkün kılar.
15. Hayır. z dönüşümü biçimi değiştirmez; dağılım sağa çarpık kalır.
:::

---

::: {.callout-tip}
## Dinleyerek tekrar

Merkezî eğilim ve yayılım için [Ses 2 — Merkez ve yayılım](https://drive.google.com/drive/folders/1HdJgyzj0fEquA3zM7CFzQd9tWKgfDBVG?usp=sharing){target="_blank"}; dağılımın biçimi, normal dağılım ve z puanı için [Ses 3 — Grafik, biçim ve normal dağılım](https://drive.google.com/drive/folders/1HdJgyzj0fEquA3zM7CFzQd9tWKgfDBVG?usp=sharing){target="_blank"}. Sesli özetler yapay zekâ ile üretilmiştir ve bu notun yerine geçmez; fark olduğunda yazılı not esastır.
:::
