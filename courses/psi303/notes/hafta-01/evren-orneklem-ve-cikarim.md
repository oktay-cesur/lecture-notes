---
title: "Kimin Hakkında Konuşuyoruz?"
subtitle: "PSİ 303 — Davranışsal İstatistik için Yazılım Uygulamaları"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-19
description: Hedef evren ve örneklem, parametre ve istatistik, betimsel ve çıkarımsal istatistik, seçimin sonuca etkisi ve örneklemden örnekleme değişen sonuç.
execute:
  echo: false
---

## İki cümle

1. "Bu araştırmaya katılan 120 üniversite öğrencisinin %35'i, son bir ayda en az bir kez sınav nedeniyle uykusuz kaldığını bildirdi."
2. "Türkiye'deki üniversite öğrencilerinin %35'i, son bir ayda en az bir kez sınav nedeniyle uykusuz kaldığını bildiriyor."

> Aynı sayı, iki farklı iddia. Hangisini rahatlıkla söyleyebiliriz?

::: {.notes}
İki cümle aynı veriden çıkıyor, aynı oranı kullanıyor. Değişen tek şey cümlenin öznesi.

Birinci cümle, araştırmaya katılan 120 öğrenciyi anlatır. Bu kişilere sorduk, cevaplarını saydık; söylediğimiz şey doğrudan veride duruyor.

İkinci cümle ise hiç sormadığımız çok sayıda öğrenci hakkında konuşuyor. Ama bu cümleyi kurabilmek bir dayanak ister.

Bu notun bütün konusu, bu iki cümle arasındaki mesafe: kimin hakkında konuştuğumuz, elimizdeki verinin kimden geldiği ve aradaki boşluğu neyin kapatabileceği.
:::

---

## Kimin hakkında konuşmak istiyoruz?

İkinci cümlenin öznesi: **Türkiye'deki üniversite öğrencileri.**

- Bu grubun tamamına soramayız.
- Elimizde sadece buradaki 120 kişi var.


> **Hedef evren:** Araştırma sorusunun hakkında bilgi edinmek istediği bütün birimler.

Evrenin büyüklüğü: $N$

::: {.notes}
Araştırma sorusunun kapsadığı herkese hedef evren diyoruz. "Evren" kelimesi büyük bir şey çağrıştırabilir; burada yalnızca "sorunun hakkında konuştuğu herkes" anlamına geliyor. Bir bölümün öğrencileri de bir evrendir, bir ülkenin bütün yetişkinleri de.

Evrenin büyüklüğünü büyük $N$ ile gösteririz. Ancak evreni tanımlamak için sayı yetmez; kimlerin içeride, kimlerin dışarıda olduğunu söyleyen ölçütü de belirtmek gerekir: hangi kurum, hangi dönem, hangi yaş, hangi koşul.
:::

---

## Aynı soru, farklı evrenler

| Araştırma sorusu                                    | Hedef evren                                                                             |
| --------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Bu bölümün öğrencileri ne kadar uyuyor?             | Bu dönem bu bölüme kayıtlı öğrenciler                                                   |
| Türkiye'deki psikoloji öğrencileri ne kadar uyuyor? | Belirtilen dönemde Türkiye'deki psikoloji bölümlerine kayıtlı öğrenciler                |
| Türkiye'deki gençler ne kadar uyuyor?               | Belirtilen dönemde Türkiye'de yaşayan, araştırmada belirlenmiş yaş aralığındaki kişiler |

::: {.notes}
Üç soru da "uyku" hakkında; ama her biri farklı bir grup hakkında konuşuyor. Bu fark, verinin nereden toplanması gerektiğini de, sonucun kime söylenebileceğini de belirler.

Bir araştırmayı okurken ilk yapılacak iş, evrenin nasıl tanımlandığına bakmaktır. "Gençler" ya da "öğrenciler" gibi belirsiz bırakılmış bir tanım, yaş ya da kurum sınırı çizilmeden evreni tamamlamaz; neyin genellendiğinin belirsiz kalmasına yol açar.
:::

---

## Elimizde kimler var?

<svg viewBox="0 0 640 260" role="img" aria-label="Büyük daire hedef evreni, içindeki küçük daire örneklemi gösterir" style="width:100%;max-height:440px">
  <ellipse cx="220" cy="130" rx="205" ry="115" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <ellipse cx="275" cy="150" rx="75" ry="45" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 5"/>
  <text x="60" y="80" font-size="24" fill="currentColor">Hedef evren (N)</text>
  <text x="222" y="158" font-size="21" fill="currentColor">Örneklem (n)</text>
  <text x="450" y="70" font-size="20" fill="currentColor">Hakkında konuşmak</text>
  <text x="450" y="96" font-size="20" fill="currentColor">istediğimiz grup</text>
  <text x="450" y="190" font-size="20" fill="currentColor">Verisini</text>
  <text x="450" y="216" font-size="20" fill="currentColor">topladığımız grup</text>
</svg>

> **Örneklem:** Hedef evrenden, veri toplamak için seçilen birimler. Büyüklüğü: $n$

::: {.notes}
Evrenin tamamını ölçmek mümkün, uygun ya da yararlı olmadığında onun bir parçasından veri toplarız. Bu parçaya örneklem diyoruz ve büyüklüğünü küçük $n$ ile gösteriyoruz. Büyük $N$ evreni, küçük $n$ örneklemi anlatır; bu gösterim dönem boyunca her yerde karşımıza çıkacak.

Şekildeki kesikli çizgi önemli bir ayrıntıyı hatırlatır: örneklem, evrenin içinden seçilir. Hedef evren Türkiye'deki üniversite öğrencileriyse, yalnız başka bir ülkede öğrenim gören kişilerden toplanmış veriyi doğrudan bu evrenin örneklemi sayamayız; araştırmaya katılma ölçütleri hedef evrenle uyumlu olmalıdır. Örneklemin evrenin neresinden ve nasıl seçildiği ise birazdan göreceğimiz gibi sonucu doğrudan etkiler.
:::

---

## Aradığımız sayı, elimizdeki sayı

> **Parametre:** Hedef evrendeki bütün birimler üzerinden hesaplanan değer.

> **İstatistik:** Örneklemdeki birimler üzerinden hesaplanan değer.

Açılıştaki iki cümleyle:

| | Hangi gruptan hesaplanır? | Açılıştaki örnekte | Biliyor muyuz? |
|---|---|---|---|
| **Parametre** | Hedef evrenin tamamı | Türkiye'deki bütün üniversite öğrencileri içinde, son bir ayda en az bir kez sınav nedeniyle uykusuz kalanların oranı | Genellikle hayır |
| **İstatistik** | Örneklem | Araştırmaya katılan 120 öğrencide hesaplanan %35 | Evet, veriden hesaplanır |

::: {.notes}
Tanım iki sözcükte duruyor: değerin hangi gruptan hesaplandığı. Evrenin tamamından hesaplanana parametre, örneklemden hesaplanana istatistik diyoruz. Ortalama, yüzde ya da oran gibi her özet sayı, hesaplandığı gruba göre bu iki addan birini alır. Aynı "uykusuz kalanların oranı" bir grupta parametre, öbüründe istatistiktir.

Açılıştaki örnekte 120 kişiden çıkan %35 istatistiktir; elimizde, veriden hesaplanır. Aynı oranın bütün Türkiye'deki üniversite öğrencileri için değeri ise parametredir. Bu değer bir yerde sabit duruyor ama bütün öğrencilere sormadan göremiyoruz. Evrenin tamamını ölçebilseydik parametreyi doğrudan hesaplardık.

Çıkarımsal istatistiğin işi, kabaca, istatistiğe bakarak parametre hakkında makul bir şey söylemektir.
:::



---

## Birkaç örnek daha

> Her durumda hedef evren kim? Hangi sayı örneklemden hesaplanan istatistik?

| Durum | Parametre | İstatistik |
|---|---|---|
| Seçim anketi | <span class="fragment">Hedeflenen bütün seçmenlerdeki oy oranı</span> | 2.000 kişilik ankette çıkan oran |
| İlaç denemesi | <span class="fragment">Hedeflenen hasta grubunun tamamı bu tedaviyi alsaydı görülecek iyileşme oranı</span> | 300 gönüllüde gözlenen iyileşme oranı |
| Ampul üretimi | <span class="fragment">Bir fabrikanın tanımlanan üretim grubundaki bütün ampullerin ortalama ömrü</span> | Test edilen 50 ampulün ortalama ömrü |
| Okuma alışkanlığı | <span class="fragment">Bir ilin bütün ortaokul öğrencilerinin yılda okuduğu ortalama kitap</span> | Üç okuldaki öğrencilerden hesaplanan ortalama |

::: {.notes}
Dört örnekte de aynı yapı var: merak edilen bir büyük grup ve ondan veri alınan küçük bir grup.

Ampul örneği ayrıca öğretici: fabrikanın bütün ampullerini sonuna kadar yakarak ömürlerini ölçseydik, satacak ampul kalmazdı. Bazen evrenin tamamını ölçmek yalnızca pahalı ya da zor değil, düpedüz anlamsızdır. Sayıyı hesaplamak kolaydır; o sayının hedef evreni ne kadar iyi yansıttığı ayrıca sorulması gereken sorudur.
:::

---

## İstatistiğin iki işi

| | Betimsel istatistik | Çıkarımsal istatistik |
|---|---|---|
| Ne yapar? | Eldeki veriyi özetler, düzenler, gösterir | Elde olmayan grup hakkında sonuç çıkarır |
| Kim hakkında? | Örneklem (ya da ölçülen grup) | Hedef evren |
| Araçlar | Ortalama, yüzde, tablo, grafik | Örneklemden evrene geçiş |
| Açılıştaki cümle | Birinci cümle | İkinci cümle |

::: {.notes}
Açılıştaki iki cümle, istatistiğin iki ayrı işine karşılık geliyor. Eldeki veriyi anlaşılır hâle getirmek betimsel istatistiğin işidir. Gördüğümüzden görmediğimize geçmek ise çıkarımsal istatistiğin işidir.

İki işin hesabı bazen aynı görünür; ikisinde de bir ortalama ya da yüzde hesaplanabilir. Onları ayıran, o sayıyla kimin hakkında konuştuğumuzdur. Çıkarım yapmak, sonucun hedef evren hakkında geçerli olduğu anlamına gelmez; gerekçe, seçimin nasıl yapıldığına ve başka kişiler seçilseydi sonucun ne kadar farklı çıkabileceğine bakılarak değerlendirilir. Bu iki noktaya aşağıda döneceğiz. Çıkarım iddiasının gerekçesi, verinin nasıl toplandığına bağlıdır.
:::

---

## Hangisi?

Aşağıdaki cümleler betimsel mi, çıkarımsal mı?

> Karar verirken: Veri kimden toplandı, cümle kimin hakkında konuşuyor?

1. "Sınıftaki 40 öğrencinin not ortalaması 72."
2. "Bu ilaç, hastalarda ağrıyı azaltıyor."
3. "Ankete katılan 500 kişinin %60'ı uzaktan çalışmayı tercih etti."
4. "Türkiye'de kadınlar erkeklerden daha fazla kitap okuyor."
5. "Bu yıl kliniğe başvuran danışanların yarısı 25 yaşın altında."

::: {.notes}
1. Betimsel: bu 40 öğrencinin notları hesaplanıp yalnız onlar anlatılıyorsa.
2. Çıkarımsal: bir denemeye katılan hastalardan daha geniş bir hasta grubuna geçiliyorsa.
3. Betimsel: cümle ankete katılanlarla sınırlı kalmış.
4. Çıkarımsal: bir örneklemden Türkiye'deki bütün kadınlar ve erkeklere genelleniyorsa. Cümleyi tek başına görmek, verinin nasıl toplandığını söylemez.
5. Betimsel: kliniğe bu yıl başvuran herkesin kaydı tutuluyorsa ölçülen grup zaten merak edilen grubun tamamıdır. Aynı veriyle "ülkedeki danışanların yarısı 25 yaşın altında" deseydik çıkarım yapıyor olurduk.

Beşinci cümle şunu gösteriyor: betimsel ya da çıkarımsal olmayı sayının kendisi değil, cümlenin kime söylendiği belirler.
:::

---

## Örneklemi nereden topladık?

**Soru:** İstanbul'da yaşayanların yaşam kalitesi nasıl?

| Anketin yapıldığı yer | Kimlere ulaşırız? |
|---|---|
| Hastane önündeki otobüs durakları | Hasta, hasta yakını, sağlık sorunu yaşayan kişiler |
| Yaz günü Adalar'daki plajlar | Tatildeki, o gün zamanı ve imkânı olan kişiler |
| İlçe ve mahalleleri kapsayan bir listeden rastgele hane seçimi | Yalnız belirli bir etkinlik yerinde bulunanlarla sınırlı kalmayan haneler |

::: {.notes}
Üç anket de "İstanbul'da yaşayan" kişilere ulaşır. Üçünde de yüzlerce kişiyle konuşulabilir. Ancak seçim yerleri farklı özellikleri öne çıkarır; sonuçların birbirinden farklılaşması makul bir beklentidir.

Hastane duraklarında yapılan ankette daha düşük, plajda yapılan ankette daha yüksek puanlar çıkması makul bir beklentidir; veri toplamadan bunun kesin olduğunu söyleyemeyiz. İki sonuç da kendi örneklemi için doğrudur; ikisi de İstanbul hakkında bir şey söylemekte zorlanır. Örneklem, sorunun cevabıyla ilişkili bir yerden toplandığında sonuç o yöne kayabilir.

Üçüncü yol, şehrin farklı kesimlerini seçime katma imkânı sağlar. Bunun işe yaraması için listenin kimleri kapsadığı, hanede kime sorulduğu ve seçilenlerin yanıt verip vermediği de önemlidir. Seçim yolu, sonucun gerekçesinin bir parçasıdır.
:::

---

## Bir başka örnek: boy ölçümü

**Soru:** Bir ildeki 15 yaşındaki gençlerin ortalama boyu nedir?

Ölçüm yapılan okul: Bir basketbol kulübünün altyapı oyuncularının okuduğu ve her yaş grubundan onlarca sporcusu bulunan bir lise.

> Bu okuldan elde edilen ortalama, ilin geneli için ne söyler?

::: {.notes}
Basketbol altyapısı, oyuncu seçerken boyu bir ölçüt olarak kullanır. Bu okulda ölçülen ortalama boy, ilin genelindeki 15 yaşındaki gençlerin ortalamasından muhtemelen yüksek çıkar. Okulda kaç kişinin ölçüldüğü bu durumu değiştirmez: bütün öğrencileri ölçsek bile o okul, aradığımız grubun küçük ve özel bir parçası olarak kalır.

Yaşam kalitesi ve boy örneklerinin ortak noktası şu: örneklemin toplandığı yer, ölçtüğümüz özellikle bağlantılı. Durak hastalıkla, plaj tatille, basketbol okulu boyla ilişkili. Böyle bir bağlantı varsa sonuç evrenden sistematik olarak uzaklaşma riski taşır.
:::

---

## Kimi seçtiğimiz sonucu nasıl değiştirir?

<div data-anim="custom" data-src="orneklem-secimi.js" data-css="orneklem-secimi.css" data-n="20" data-label="400 kişilik evrenden 20 kişilik örneklem"></div>

> Alt eksendeki her işaret tek bir kişiyi değil, 20 kişilik bir örneklemin ortalamasını gösterir.

::: {.notes}
Izgaradaki her nokta bir kişiyi, noktanın koyuluğu o kişinin puanını gösterir (örneğin bir yaşam kalitesi puanı). Sol alt köşedeki kesikli çerçeve "kolay ulaşılan bölge"dir: hastane durağına benzer biçimde, buradaki kişilerin puanları sistematik olarak düşüktür. Yeşil kesikli çizgi, 400 kişinin tamamının ortalamasını, yani parametreyi gösterir.

Önce mavi nokta üreten düğmeyle birkaç kez örneklem çekin. Her çekilişte farklı 20 kişi seçilir ve ortalamaları "Rastgele" satırına mavi nokta olarak işlenir. Noktalar evren ortalamasının çevresine dağılır; bazen biraz sağda, bazen biraz solda.

Sonra kırmızı kare üreten yöntemle yine birkaç kez çekin. Bu kez kırmızı kareler bölgenin kendi ortalaması çevresinde birikir ve yeşil çizginin solunda yoğunlaşır. Bölgenin içinde de hangi 20 kişinin geldiğine bağlı bir oynama vardır.

Bu 400 kişilik evren kurgusaldır. Gerçek bir araştırmada genellikle bilinmeyen evren ortalamasını burada seçimlerin sonuçlarını karşılaştırabilmek için gösteriyoruz. İki satırdaki farkı sonraki slaytlarda adlandıracağız.
:::

---

## Yanlılık

> **Yanlılık:** Seçim biçiminin, sonucu parametreden sistematik olarak bir yöne itmesi.

- Hastane durağı / plaj → seçim yeri yaşam kalitesiyle ilişkili (sonuç kayma riski taşır)
- Basketbol okulu → seçim yeri boyla ilişkili (ortalamanın yüksek çıkma riski)
- Animasyondaki bölge → ortalamalar bölgenin kendi ortalaması çevresinde birikir

> **Sistematik sapma:** Seçim yolunun bazı özellikleri sürekli daha fazla ya da daha az temsil etmesidir; her tek örneklemde aynı farkı görmeyebiliriz.

Örneklemi büyütmek yanlılığı düzeltmez.

::: {.notes}
Yanlılığın en zor yanı, verinin içinden fark edilmemesidir. Hastane durağında toplanan anket verisi, düzgün doldurulmuş, eksiksiz, makul görünen sayılardan oluşur. Sorun sayılarda değil, sayıların nereden geldiğindedir.

Bu yüzden bir araştırmayı okurken sonuç tablosuna geçmeden önce "katılımcılar kimdi ve nasıl seçildi?" sorusunu sormak gerekir. Animasyonda bölgeden yapılan çekilişlerin ortalamaları evren ortalamasına yaklaşmadı; durağa bin kişi daha eklemek de aynı yanlış değere daha kararlı biçimde yaklaştırır. Ölçümlerin kendi içinde düzenli görünmesi seçilen okulun ya da durağın evreni temsil ettiğini göstermez. Aynı yerlerden daha çok kişiye ulaşmak bu seçim sorununu gidermez; katılımcıların nasıl bulunduğuna bakmak gerekir.
:::

---

## Rastgele seçim

> **Rastgele seçim:** Kimin seçileceğinin, önceden belirlenmiş bir şans mekanizmasıyla belirlendiği seçim.

En sade hâli: evrenin tam listesinden kura çekmek.

400 kişilik evrenden 20 kişi → her kişinin seçilme şansı $20/400 = \%5$

::: {.notes}
Yanlılığa karşı başvurulan basit bir fikir, seçimi şansa bırakmaktır. Tam listeden kura çekildiğinde durağın yakınında oturanla uzağında oturanın, uzun boyluyla kısa boylunun seçilme şansı aynı olur. Bu eşit şans, bu nottaki tam listeden kura örneğinin özelliğidir; listede olmayan biri seçilemez. Seçimi kolaylık, ulaşılabilirlik ya da araştırmacının sezgisi belirlemez.

Rastgele seçim, seçilen 20 kişinin evrenin kusursuz bir minyatürü olacağını garanti etmez. Sağladığı şey, seçimin ölçtüğümüz özellikle sistematik biçimde bağlantılı olmamasıdır; bütün hata kaynaklarını gidermez. Bu da animasyonda mavi noktaların neden yeşil çizginin çevresinde toplandığını açıklar.

Gerçek araştırmalarda tam liste ve kura her zaman mümkün olmayabilir. Böyle durumlarda sonucun hedef evrene taşınma sınırı, seçimin nasıl yapıldığına göre değerlendirilir.
:::

---

## Rastgele seçsek de sonuç oynar

Aynı yöntem, aynı evren, başka 20 kişi → başka ortalama

> **Örnekleme değişkenliği:** Aynı evrenden aynı yöntem ve büyüklükle çekilen örneklemlerin farklı sonuçlar vermesi.

::: {.notes}
Animasyondaki mavi noktalar tek bir yerde toplanmadı; her çekiliş biraz farklı bir ortalama verdi. Bunun nedeni seçimdeki bir kusur değil, evrendeki insanların birbirinden farklı olmasıdır. Hangi 20 kişinin geldiğine göre ortalama biraz yukarı ya da aşağı oynar.

Tam listeden eşit şansla kura çektiğimizde yinelenen çekilişlerin ortalamaları evren ortalamasının çevresine dağılır; tek bir örneklemin tam evren ortalamasını vermesi beklenmez.

Yanlılık ile karşılaştırınca fark netleşir: yanlılık sonucu sistematik olarak bir yöne iter, örnekleme değişkenliği ise bir o yana bir bu yana oynatır. İkisi aynı seçim yolunda birlikte bulunabilir.

Bu oynamanın ne kadar büyük olduğunu ölçmek, çıkarımsal istatistiğin temel sorularından biridir. "İki grup arasındaki fark gerçek mi, yoksa örneklemin oynaması mı?" sorusunu dönemin ilerleyen kısmında tam olarak bu fikirle cevaplayacağız.
:::

---

## Kaç kişi, kimler?

| | Örnekleme değişkenliği | Yanlılık |
|---|---|---|
| **Örneklemi büyütmek** ($n$) | Çekilişler arası oynamayı kendi merkezi etrafında daraltır (tek çekiliş garantisi vermez) | Yanlılığı gidermez; aynı yanlış değere daha kararlı yaklaştırır |
| **Nasıl seçildiğini sormak** | Aynı büyüklükteki çekilişler yine oynar | Seçim yolu ölçülen özellikle ilişkili mi? |

Animasyonda $n=80$ denendiğinde: Mavi noktalar evren ortalaması çevresinde daha dar toplanır. Kırmızı karelerin tek noktada sabitlenmesi 80 kişilik bölgenin tamamı seçildiği içindir; seçim merkezi yine de evren ortalamasına yaklaşmaz.

> Daha büyük bir örneklem sonucu daha kararlı hâle getirebilir; yanlı bir seçimden gelen kararlılık, hedef evrene yakınlıkla aynı şey değildir.

::: {.notes}
"Örneklem küçük" eleştirisi ile "örneklem yanlı" eleştirisi farklı sorunlara işaret eder ve farklı çarelere ihtiyaç duyar. Rastgele seçimde kişi sayısını artırmak oynamayı azaltır: 20 kişinin ortalaması çekilişten çekilişe epey değişir, 80 kişininki çok daha az değişir; bu, her 80 kişilik örneklemin her 20 kişilikten daha yakın çıkacağı anlamına gelmez, tekrarlar boyunca görülen değişkenliğin azalmasıdır. Ama yanlı bir yöntemi büyütmek, aynı yanlış değere daha kararlı biçimde yaklaştırır. Üstelik animasyondaki bölgenin tamamı 80 kişidir: hepsini almak bölgeyi bütünüyle ölçmektir, 400 kişilik evreni değil.

Bir araştırmayı değerlendirirken iki soruyu ayrı ayrı sormak bu yüzden önemlidir: kaç kişi ve nasıl seçildiler?
:::

---

## Karar soruları

1. Bölümün e-posta listesine bir anket gönderiliyor; 400 öğrenciden 120'si yanıtlıyor. Bu 120 kişi rastgele seçilmiş sayılır mı?
2. Bir spor salonu üyeleri arasında yapılan anketin sonucu "Türk gençlerinin %70'i haftada en az üç gün spor yapıyor" diye haberleştiriliyor. Haberde ne sorunlu?
3. Başka bir bölümdeki 400 öğrencinin tamamı ankete katılıyor. Bu bölüm hakkında sonuç söylerken hâlâ örnekleme değişkenliğinden söz edebilir miyiz?

. . .

> **Tam sayım:** Hedef evrenin bütün birimlerinin ölçülmesi.

::: {.notes}
1. Anket herkese gönderilmiş, bu iyi bir başlangıç. Ancak kimin yanıt vereceğine öğrenciler kendileri karar verdi. Anketin konusu yanıtlama isteğiyle bağlantılıysa (örneğin anket sınav kaygısıyla ilgiliyse ve kaygılı öğrenciler daha çok ya da daha az yanıt veriyorsa) yanıtlayanlar bölümü yansıtmaz. Davet rastgele değil herkese gitmiş; yanıtlayanlar ise kendi kendini seçmiş bir gruptur. Yanıtlayan 120 kişi hakkında konuşabiliriz; bütün bölüm için konuşmak, yanıt vermeyenlerin yanıt verenlere benzediği varsayımını gerektirir.
2. Örneklem, spor yapanların yoğun olabileceği bir yerden toplanmış; spor salonuna üye olmak ölçülen spor alışkanlığıyla ilişkili olabilir, üyelerin daha çok spor yapması makul bir beklentidir. Bu, basketbol okulundaki boy ölçümüyle aynı yapıdadır. Üstelik haber, sonucu spor salonu üyelerinden bütün gençlere genişletmiş.
3. Hayır. Hedef evrenin tamamı ölçülmüştür; buna tam sayım denir. Ortada seçilmiş bir parça kalmadığından örnekleme değişkenliği yoktur ve hesaplanan değer bu bölüm için parametredir. Yanlış yanıt ya da kayıt hatası yine olabilir; o ayrı bir sorundur. Aynı sonucu başka üniversitelerin öğrencileri için söylemek istersek ise yeniden çıkarım yapmış oluruz.
:::

---

## Bu nottan kalanlar

- Her sonucun bir öznesi var: **hedef evren mi, örneklem mi?**
- **Parametre** evrene ait değer (çoğu araştırmada bilinmez), **istatistik** örneklemden hesaplanan değer.
- Eldekini anlatmak **betimsel**, eldekinin ötesine geçmek **çıkarımsal** istatistik.
- Sonucun evrene ne kadar yaklaştığını değerlendirirken iki soru sorulur: **kimler** ve **kaç kişi** seçildi? İkisi ayrı sorunlara işaret eder.

**Sıradaki konu:** Toplanan cevaplar bir veri tablosuna nasıl yazılır? Bir sonraki notta küçük bir anket formu üzerinden göreceğiz.

::: {.notes}
Bir sonucu okurken ya da yazarken önce öznesini bulmak, bu dersin geri kalanında işimizi çok kolaylaştıracak. Ortalama, yüzde ya da p değeri, hepsi bir gruba ait. O grubu bilmeden sayıyı yorumlamak, adresi bilmeden bir mektubu okumaya benzer.

Seçim uygun biçimde yapılsa bile başka 120 kişiyle aynı sonucu elde etmeyebiliriz; bu oynamanın ne kadar büyük olduğunu standart hata konusunda ölçeceğiz. Sıradaki notta topladığımız cevapları yazılıma gireceğimiz bir tabloya geçeceğiz. Kimden veri topladığımızı bilmek, o tablonun her satırının neyi temsil ettiğini anlamanın da ilk adımıdır.
:::
