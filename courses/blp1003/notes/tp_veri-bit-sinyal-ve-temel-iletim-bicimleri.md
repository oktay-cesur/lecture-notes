---
title: "Veri, Bit, Sinyal ve İletim Ortamları"
subtitle: "BLP 1003 — Bilgisayar Ağları"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-09-21
execute:
  echo: false
---

## Bilgisayar Hangi Veriyi Taşır?

Bilgisayardaki her türlü veri sayısal olarak temsil edilir:

- Metin ve sayılar
- Görüntüler
- Ses
- Video

::: {.notes}
İnsan açısından bir harf ile bir ses kaydı çok farklıdır. Bilgisayar bunları saklayıp işleyebilmek için belirli sayısal gösterimlere dönüştürür. Metin karakterleri kod noktalarıyla, görüntüler piksellerin sayısal değerleriyle, ses örneklenmiş sayısal değerlerle ve video ardışık görüntü ile ses verisiyle temsil edilebilir.

Bu temsil yöntemlerinin ayrıntıları farklıdır; ancak ağ iletişimi açısından ortak sonuç şudur: Her türlü sayısal veri, bit örüntüleri olarak ifade edilebilir. İçeriğin türü kaybolmaz; bitlerin hangi kurala göre yorumlandığı, onların metin mi görüntü mü ses mi olduğunu belirler.
:::

---

## Veri → Bit

![](../../../images/bilgisayar-aglari/hafta-01/veriden-fiziksel-sinyale.png){width="100%" fig-align="center" fig-alt="A karakterinin sayısal değere ve bit örüntüsüne dönüştürülerek bakır, fiber ve kablosuz ortamlarda fiziksel sinyallerle temsil edilmesi"}

**Bit**, 0 veya 1 değerini alan temel sayısal temsil birimidir.

::: {.notes}
Tek bir karakter üzerinden ilerleyelim. Temel Latin alfabesindeki "A" karakteri ASCII'de 65 sayısıyla eşlenir; bu değer sekiz bitlik `01000001` örüntüsüyle gösterilebilir.

Bu küçük örnek, karakterin kablonun içinde harf biçiminde ilerlemediğini anlatır. Kabloda taşınan şey, o harfi temsil eden bit örüntüsünden üretilmiş fiziksel sinyaldir.

Güncel metin sistemleri Unicode kullanır ve Türkçe karakterler dâhil çok daha geniş bir karakter kümesini temsil eder. Tek bir karakterin her zaman tek bayt ile temsil edildiği sonucu çıkarılamaz. Ağ iletişimi açısından temel nokta, anlamlı verinin belirli kurallara göre bit örüntüleriyle temsil edilmesidir.
:::

---

## Bit → Fiziksel Sinyal

- **Veri:** taşınmak istenen bilgi
- **Bit:** sayısal temsilde temel birim
- **Sinyal:** fiziksel ortam üzerinde bilgiyi taşıyan fiziksel değişim

::: {.notes}
İki ayırt edilebilir fiziksel durum — örneğin açık ve kapalı — bir biti temsil edebilir. Bu sezgi yerindedir; ancak "açık her zaman 0, kapalı her zaman 1'dir" gibi evrensel bir kural yoktur. Eşleme, sistemi tasarlayanlara bağlıdır.

Üç kavramı net biçimde ayırmak gerekir:

**Veri,** kullanıcı veya uygulama için anlam taşıyan içeriktir. **Bit,** sayısal veriyi temsil etmek için kullanılan 0 ya da 1 değeridir. **Sinyal** ise bu bit değerleriyle ilişkilendirilmiş bilginin fiziksel ortam üzerinde taşınmasını sağlayan değişimdir.

"Bit kablonun içinde ilerler" ifadesi sezgisel görünse de teknik olarak eksiktir. Kabloda ilerleyen şey, bitleri temsil edecek biçimde üretilmiş fiziksel sinyaldir. Bakır kabloda elektriksel değişimler, fiber optikte ışık, kablosuz ortamda elektromanyetik dalgalar kullanılır. Alıcı, ölçebildiği bu fiziksel değişimleri üzerinde uzlaşılan kurallara göre yorumlar.
:::

---

## Sinyal Hangi Yoldan Gider?

> Sinyal oluştu; peki bu fiziksel sinyal bir uçtan diğerine hangi ortam üzerinden ulaşacak?

- **Kablolu ortam:** Sinyal, fiziksel bir kablo boyunca taşınır.
- **Kablosuz ortam:** Sinyal, elektromanyetik dalgalarla yayılır.

::: {.notes}
Bitin fiziksel bir sinyalle temsil edilmesi, o sinyalin alıcıya ulaştığını henüz göstermez. Gönderici ile alıcı arasında sinyalin izlediği fiziksel yola **iletim ortamı** denir. Bilgisayar ağlarında sinyal kabloyla da kablosuz olarak da taşınabilir.

Kablosuz ortamda sinyal, fiziksel kablo olmadan elektromanyetik dalgalarla taşınır. Kablolu ortamların fiziksel yapısı ise kullanım koşullarına göre farklılık gösterir.
:::

---

## Sinyali Hangi Kablo Üzerinden Taşıyacağız?

**Aynı bit dizisi, farklı ortamlarda farklı fiziksel sinyallerle taşınabilir.**

![](../../../images/bilgisayar-aglari/hafta-01/kablolu-iletim-ortamlari.png){width="70%" fig-align="center" fig-alt="Koaksiyel, çift bükümlü bakır ve fiber optik kabloların katmanları ve yaygın kullanım alanları"}

::: {.notes}
Üç temel kablolu ortam koaksiyel kablo, çift bükümlü bakır kablo ve fiber optiktir. Aynı bit örüntüsü bakır kablolarda elektriksel değişimlerle, fiberde ise ışık darbeleriyle temsil edilerek taşınabilir. Bu nedenle iletim ortamı yalnız bir bağlantı çizgisi değildir; sinyalin fiziksel biçimini ve bağlantıdan beklenebilecek özellikleri etkiler.

Ortam seçerken **mesafe**, dışarıdan gelen **elektromanyetik girişim**, gereken **bant genişliği**, **maliyet** ve **kurulum koşulları** birlikte düşünülür. Bant genişliği bu bağlamda bağlantının veri taşıma kapasitesini ifade eder; tek başına bir kablo adından kesin hız sonucu çıkarılamaz.
:::

---

## Koaksiyel Kablo: Ekran Neyi Korur?

![](../../../images/bilgisayar-aglari/hafta-01/koaksiyel-ekranlama.png){width="72%" fig-align="center" fig-alt="Koaksiyel kablonun merkez iletken, yalıtkan, metal ekran ve dış kılıf katmanları ile elektromanyetik girişime karşı ekranlama düşüncesi"}

::: {.notes}
Koaksiyel kablonun ortasında **merkez iletken** bulunur. Onu **yalıtkan katman**, yalıtkanı çevreleyen **dış iletken veya metal ekran** ve en dışta koruyucu **kaplama** izler. Merkez iletkenin çevresindeki iletken ekran, dış ortamdan gelen elektromanyetik girişimin sinyal üzerindeki etkisini azaltmaya yardımcı olur. Ekran uygun biçimde topraklandığında istenmeyen akımların uzaklaştırılmasına da katkı sağlar. Bu, iletken bir çevrelemenin dış elektromanyetik etkiyi zayıflatması bakımından Faraday kafesi fikrine benzer.

Koaksiyel kablo eski Ethernet uygulamalarında kullanılmıştır. Günümüzde bilgisayar yerel ağlarının temel kablosu değildir; buna karşılık kablo TV ve kablo internet altyapılarında hâlâ görülür. Elektriksel gürültüye duyarlı ölçüm ve ses cihazları gibi uygulamalarda da uygun ekranlaması nedeniyle kullanılır.
:::

---

## Çift Bükümlü Bakır: Neden Bükülür?

- Bakır iletkenler çiftler hâlinde birbirine bükülür.
- Büküm, elektromanyetik girişimin etkisini azaltır.
- Güncel Ethernet yerel ağlarında yaygındır.
- **UTP:** ek ekran yok · **STP:** ek ekran var

::: {.notes}
Çift bükümlü kabloda bilgi, birbirine eşlenen bakır iletken çiftleri üzerinden elektriksel sinyallerle taşınır. Tellerin birbirine bükülmesi, dış elektromanyetik girişimin iki tel üzerinde benzer etki bırakmasına yardımcı olur; alıcı bu ortak etkiyi büyük ölçüde ayırabilir. Büküm, komşu çiftlerin birbirini etkilemesini de azaltır. Böylece kablo, güncel Ethernet yerel ağlarında pratik bir fiziksel ortam sağlar.

**UTP (Unshielded Twisted Pair)**, bükümlü çiftlere ek bir metal ekranlama katmanı içermeyen kablodur. **STP (Shielded Twisted Pair)** ise elektromanyetik girişime karşı ek ekranlama içerir. STP'nin varlığı her ortamda zorunlu olduğu anlamına gelmez; seçimi çevredeki girişim ve kurulum koşulları belirler.

Laboratuvarda bilgisayar ile ağ bağlantı noktası arasında görülen ve gündelik dilde RJ-45 bağlantısı diye anılan uç tanıdık bir örnektir. Cat5e, Cat6 ve Cat6a gibi farklı performans kategorileri vardır.
:::

---

## Fiber Optik: Elektrik Yerine Işık

- Bakırda **elektriksel sinyal**, fiberde **ışık darbeleri** taşınır.
- **Çekirdek:** ışığın ilerlediği bölüm · **Kaplama:** ışığın çekirdekte kalmasına yardımcı olur.
- Uzun mesafe, yüksek bant genişliği, elektromanyetik girişimden etkilenmeme.

::: {.notes}
Fiber optik kablo, bitleri temsil eden bilgiyi elektriksel değişimlerle değil, ışık darbeleriyle taşır. Işık **çekirdek** içinde ilerler. Çekirdeği saran optik **kaplama**, ışığın çekirdek içinde yönlendirilmesine yardımcı olur; bunun dışında fiziksel koruma sağlayan katmanlar bulunabilir.

Sinyal elektriksel olmadığı için fiber, dış elektromanyetik girişimden bakır kablolar gibi etkilenmez. Uzun bağlantılarda kaybın düşük olması ve yüksek bant genişliği sağlayabilmesi, onu binalar arası veya daha geniş mesafeli bağlantılarda güçlü bir seçenek yapar. Yine de gereken bileşenler, fiberin döşenmesi ve uçlarının sonlandırılması bakıra göre farklı uzmanlık ve çoğu durumda daha yüksek maliyet gerektirir.
:::

---

## Hangi Ortamı Seçerdik?

1. **Aynı laboratuvardaki kısa bağlantılar:** çift bükümlü bakır.
2. **İki bina arası, uzun hat ve yoğun girişim:** fiber optik.
3. **Mevcut kablo TV hattından internet:** koaksiyel.

**Seçim, bağlantının ihtiyacına ve kurulum koşullarına bağlıdır.**

::: {.notes}
Birinci durumda kısa veya orta mesafeli güncel yerel ağ bağlantısı kuruluyor. Çift bükümlü bakır, bu tür bağlantılarda yaygın ve pratik tercihtir.

İkinci durumda binalar arasındaki uzun yol ve yüksek elektromanyetik girişim belirleyicidir. Fiber optik, elektromanyetik girişimden etkilenmediği, uzun mesafede düşük kayıp ve yüksek bant genişliği sağlayabildiği için güçlü adaydır. Gerçek seçimde gerekli kapasite, mevcut altyapı ve kurulum maliyeti de incelenir.

Üçüncü durumda hazır kablo TV altyapısı kullanılıyor. Bu altyapıda koaksiyel kabloyla karşılaşılır; bu, yeni bir yerel ağ için de koaksiyelin seçileceği anlamına gelmez. Fiziksel ortam; **mesafe, girişim, bant genişliği, maliyet ve kurulum koşullarına** göre seçilir.
:::

---

## İletişim Yönleri: Simplex, Half-Duplex ve Full-Duplex {.smaller}

![](../../../images/bilgisayar-aglari/hafta-01/simplex-half-duplex-full-duplex.png){width="62%" fig-align="center" fig-alt="Simplex, half-duplex ve full-duplex iletişim biçimlerinin yön ve eş zamanlılık bakımından karşılaştırması"}

:::: {.columns}

::: {.column width="33%"}
**Simplex — Tek yön**

Veri, tanımlanan iletişim kanalı üzerinde yalnız bir yönde akar.

**Eş zamanlılık:** Uygulanmaz  
**Örnek:** tek yönlü yayın akışı
:::

::: {.column width="34%"}
**Half-Duplex — İki yön, sırayla**

İki taraf da gönderebilir; aynı anda yalnız biri gönderir.

**Eş zamanlılık:** Hayır  
**Örnek:** bas-konuş telsiz
:::

::: {.column width="33%"}
**Full-Duplex — Aynı anda iki yön**

İki taraf aynı anda hem gönderebilir hem alabilir.

**Eş zamanlılık:** Evet  
**Örnek:** iki yönlü telefon görüşmesi
:::

::::

::: {.notes}
Üç iletişim biçimini ayırmak için iki soru yeterlidir: Veri kaç yönde akabilir ve iki yön aynı anda kullanılabilir mi?

Yalnız bir yön varsa simplex; iki yön olup sırayla kullanılıyorsa half-duplex; iki yön aynı anda kullanılabiliyorsa full-duplex söz konusudur.

Bu sınıflandırma, bağlantı veya iletişim kanalındaki veri akış yeteneğini açıklar; bir uygulamanın istek-yanıt sırasını değil. Bir web istemcisinin önce istek gönderip sonra yanıt alması, alttaki bağlantının half-duplex olduğu anlamına gelmez. Uygulama davranışı ile fiziksel kanalın yön yeteneği ayrı değerlendirilmelidir.

Simplex iletişimde bir uç gönderici, diğer uç alıcı rolündedir. Aynı iletişim kanalı üzerinden ters yönde veri akışı yoktur. Alıcı cihazın başka bir teknolojiyle geri bildirim gönderebilmesi, incelenen tek yönlü kanalın simplex niteliğini değiştirmez; değerlendirme belirli bağlantı veya kanal için yapılır.

Half-duplex iletişim iki yönlüdür, fakat iki yön aynı anda kullanılmaz. Bir taraf gönderirken diğeri dinler; rol değiştiğinde ters yönde iletişim gerçekleşir. Bas-konuş telsizlerde konuşmak için kanalı alan kişi gönderir, diğerleri dinler. Half-duplex, simplex ile karıştırılmamalıdır: Simplex'te ters yön hiç yoktur; half-duplex'te iki yön de vardır, ancak zaman paylaşılır.

Full-duplex iletişimde iki taraf aynı zaman aralığında veri gönderebilir ve alabilir. Ağlarda bu özellik, ayrı iletim yolları kullanılarak ya da kanal kapasitesi iki yön arasında uygun biçimde paylaştırılarak sağlanabilir.
:::

---

## Seri ve Paralel İletim

![](../../../images/bilgisayar-aglari/hafta-01/seri-ve-paralel-iletim.png){width="100%" fig-align="center" fig-alt="Paralel iletimde bitlerin birden çok hat üzerinden eş zamanlı, seri iletimde tek hat üzerinden ardışık gönderilmesi"}

::: {.notes}
Paralel iletimde birden fazla bit, birden fazla fiziksel hat üzerinden aynı zaman aralığında taşınır. Seri iletimde ise bitler aynı iletim yolu üzerinden art arda gönderilir.

Paralel iletim her zaman daha hızlı, seri iletim her zaman daha yavaş değildir. Paralel hatlarda hatlar arası elektriksel etkileşim (crosstalk) ve bitlerin hedefe aynı anda ulaşmasını sağlama güçlüğü, mesafe ve hız arttıkça önem kazanır. Bu nedenle Ethernet, USB ve benzeri birçok modern yüksek hızlı bağlantı seri iletim tekniklerinden yararlanır.

Paralel ve seri iletim, birden fazla bitin fiziksel aktarımda kullanılabildiği iki temel düzendir.
:::
