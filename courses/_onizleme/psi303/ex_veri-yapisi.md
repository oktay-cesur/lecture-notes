---
title: "Genel Özet: Araştırma Sorusu ve Veri Yapısı"
subtitle: "PSİ 303 — Sınav Tekrar Notu (Hafta 1–3)"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-29
description: "Evren ve örneklem, veri tablosu, değişken türleri, ölçme düzeyleri, veri sözlüğü ve veriyi analize hazırlama konularının tanım, açıklama ve örneklerle anlatıldığı çalışma notu."
sidebar: psi303
execute:
  echo: false
---

# Genel Özet: Araştırma Sorusu ve Veri Yapısı

Bir veri setinde ortalama hesaplamak kolaydır. Zor olan, çıkan sayının **ne anlama geldiğini** bilmektir. Bu not, bir sayıyı yorumlamadan önce bilmen gerekenleri sırayla anlatır:

1. **Evren, örneklem ve çıkarım:** Bu sayı kimin hakkında konuşuyor?
2. **Veri tablosu:** Tablodaki satır, sütun ve hücre neyi temsil ediyor?
3. **Değişken türleri:** Bu sütundaki değerler bir grup mu, bir miktar mı bildiriyor?
4. **Ölçme düzeyleri:** Bu değişkenle hangi hesaplar anlamlı?
5. **Veri sözlüğü:** Bunların hepsi nasıl kayda geçirilir?
6. **Veriyi analize hazırlamak:** Analizden önce veri nasıl kontrol edilir ve düzeltilir?

Her kavram önce kısa bir **tanımla** verilir; ardından açıklanır ve örneklerle gösterilir. Notun sonunda dikkat edilmesi gereken noktalar ve kontrol soruları yer alır. Konular birbirine dayanır; bu yüzden sırayla oku.

---

## 1. Evren, örneklem ve çıkarım

Bu konu tek bir soruya cevap arar: **Elimdeki sayı kimin hakkında konuşuyor?** Bir sayıyı doğru yorumlamak için önce o sayının kimden geldiğini ve kime ait olduğunu bilmek gerekir.

Konu boyunca aynı örnek üzerinden ilerleyeceğiz: bir üniversitedeki psikoloji bölümünde **400 öğrenci** var ve bir araştırmacı bu öğrencilerin ne kadar uyuduğunu merak ediyor.

### 1.1 Birim ve hedef evren

::: {.callout-important appearance="simple"}
## Tanım
**Birim**, hakkında veri toplanan tek bir varlıktır. **Hedef evren**, araştırma sorusunun hakkında olduğu bütün birimlerin kümesidir. (Anakütle ya da popülasyon olarak da adlandırılır; İng. *population*.)
:::

Bir araştırma her zaman birileri (ya da bir şeyler) hakkındadır. Araştırmacı önce kendine şunu sorar: *Ben kimin hakkında bilgi edinmek istiyorum?* Bu sorunun cevabı hedef evrendir. Evrenin içindeki her bir üyeye birim denir.

Örneğimizde araştırmacı bölümdeki öğrencilerin uykusuyla ilgileniyor. Bu yüzden hedef evren, bölümde kayıtlı 400 öğrencinin tamamıdır. Her bir öğrenci bir birimdir.

Evreni belirleyen şey araştırma sorusudur. Araştırmacının ulaşabildiği kişiler ya da elinde veri bulunan kişiler evreni belirlemez. Araştırmacı bölümün öğrencilerini merak ediyorsa, yalnızca birkaçına ulaşabilmiş olması evreni küçültmez; evren yine 400 öğrencidir. Ulaşabildiği kısmı ise başka bir kavramla, örneklemle anlatırız (1.2).

Birim her zaman kişi olmak zorunda değildir. Soru neyi merak ettiğimizi söyler, birim de ona göre değişir:

- "Bir ilin ilkokullarında ortalama sınıf mevcudu kaçtır?" sorusunda birim **okuldur**, evren de o ildeki bütün ilkokullardır.
- "Sınav haftalarında kütüphane günde kaç kişi tarafından kullanılıyor?" sorusunda birim **gündür**, evren de sınav haftalarındaki bütün günlerdir.
- "Türkiye'de 15–24 yaş arası gençlerde akıllı telefon kullanımı ne kadar?" sorusunda birim **kişidir**, evren de Türkiye'deki bütün 15–24 yaş gençlerdir. Evren çok büyük olabilir; bu onu evren olmaktan çıkarmaz.

### 1.2 Örneklem

::: {.callout-important appearance="simple"}
## Tanım
**Örneklem**, evrenden seçilen ve verisi toplanan birimlerin oluşturduğu alt kümedir. (İng. *sample*.)
:::

Evrenin tamamına ulaşmak çoğu zaman mümkün olmaz; ulaşılabilse bile zaman ve para açısından çok pahalıdır. Bu yüzden araştırmacı evrenden bir parça seçer ve veriyi yalnız bu parçadan toplar. Verisi toplanan bu parçaya örneklem denir.

Örneğimizde araştırmacı 400 öğrencinin hepsine anket gönderiyor ama yalnız 120 öğrenci yanıtlıyor. Veri toplanan kişiler bu 120 kişidir; dolayısıyla **örneklem 120 öğrencidir**. Yanıt vermeyen 280 öğrenci hâlâ evrenin üyesidir ama örnekleme girmemiştir, çünkü onlardan veri alınmamıştır.

Örneklem her zaman evrenin içindedir ve evrenden küçüktür. Evrenin hepsi ölçülürse buna **tam sayım** (İng. *census*) denir; bu durumda örneklem yoktur, evrenin kendisi ölçülmüştür. 25 kişilik bir sınıfta 25 kişinin notunun hepsi alınırsa tam sayım yapılmıştır.

Diğer örneklerde de aynı ilişki vardır:

- Türkiye'deki gençler için 2.000 genç seçilirse örneklem bu 2.000 gençtir.
- İlkokullar için 30 okul seçilirse örneklem bu 30 okuldur (birim okul olduğu için "30 okul" demek gerekir, "30 öğrenci" değil).
- Sınav haftalarından 12 gün seçilip kütüphane girişleri sayılırsa örneklem 12 gündür.

### 1.3 Parametre ve istatistik

::: {.callout-important appearance="simple"}
## Tanım
**Parametre**, evrene ait bir sayısal özettir. **İstatistik**, örnekleme ait bir sayısal özettir. (İng. *parameter* ve *statistic*.)
:::

Araştırmacı uyku süresi gibi bir özelliği ölçtüğünde sonunda bir sayıya ulaşır; örneğin ortalama. Aynı ortalama iki farklı grup için hesaplanabilir: evrenin tamamı için ya da yalnız örneklem için. Hangisi için hesaplandığına göre sayının adı değişir.

Bölümdeki 400 öğrencinin hepsinin ortalama uyku süresi **parametredir**. Bu sayı evrenin gerçek değeridir. Ama 400 kişinin tamamını ölçmediğimiz sürece bu sayıyı bilmeyiz; elimizde yalnız 120 kişinin verisi vardır.

120 öğrencinin ortalama uyku süresi, diyelim 6,8 saat, **istatistiktir**. Bu sayıyı hesaplayabildik ve elimizde duruyor.

Aralarındaki fark yalnızca kimden hesaplandığıdır. İkisi de "ortalama uyku süresi" olabilir, ikisi de aynı formülle hesaplanır. Bir sayıya parametre ya da istatistik demek için sorulacak soru şudur: *Bu sayıyı hesaplarken evrenin hepsini mi kullandım, yoksa yalnız örneklemi mi?*

Araştırmanın temel hamlesi de buradan çıkar: parametre bilinmez, istatistik bilinir; araştırmacı bilinen istatistiği kullanarak bilinmeyen parametre hakkında fikir yürütmeye çalışır. 120 kişide 6,8 saat bulduysak, bütün bölümün ortalamasının da buna yakın olduğunu düşünürüz. Bu düşünme biçimine birazdan **çıkarım** diyeceğiz (1.5).

### 1.4 Betimsel istatistik

::: {.callout-important appearance="simple"}
## Tanım
**Betimsel istatistik**, eldeki veriyi düzenleyen, özetleyen ve sunan yöntemlerdir. (Tanımlayıcı istatistik olarak da adlandırılır; İng. *descriptive statistics*.)
:::

Veri ham haliyle yüzlerce sayıdan oluşur ve bu haliyle bir şey anlatmaz. Betimsel istatistik, bu sayıları anlaşılır hale getirir: bir ortalama hesaplar, bir tablo kurar, bir grafik çizer. Amacı, elindeki verinin ne gösterdiğini söylemektir.

Betimsel istatistiğin kapsamı ölçülen birimlerle sınırlıdır. Ölçülmemiş birimler hakkında bir şey söylemez.

Örneğimizde şu cümleler betimseldir:

- "Ankete yanıt veren 120 öğrencinin ortalama uyku süresi 6,8 saattir."
- "Bu 120 öğrencinin 45'i gecede 6 saatten az uyuyor."
- "En az uyuyan öğrenci 4, en çok uyuyan öğrenci 10 saat uyuyor."

Üç cümle de yalnız ölçülen 120 öğrenciyi anlatır. Bu cümleleri kurarken bölümün geri kalanı hakkında bir şey iddia etmiş olmuyoruz.

### 1.5 Çıkarımsal istatistik

::: {.callout-important appearance="simple"}
## Tanım
**Çıkarımsal istatistik**, örneklemden elde edilen bilgiyi kullanarak evren hakkında sonuç çıkarma yöntemidir. (İng. *inferential statistics*.)
:::

Çoğu zaman araştırmacının asıl ilgisi örneklemde değil, evrendedir. Merak edilen şey "bu 120 kişi ne kadar uyuyor?" değil, "bölümdeki öğrenciler ne kadar uyuyor?" sorusudur. Örneklem yalnızca bu soruya ulaşmak için kullanılan bir araçtır. Örneklemden evrene geçmek için yapılan bu sıçramaya çıkarım denir.

Çıkarımsal istatistik ölçmediğimiz birimler hakkında konuşur. Bu yüzden her çıkarım belirsizlik taşır: Ölçmediğimiz 280 öğrencinin gerçekte ne kadar uyuduğunu bilmiyoruz, yalnız tahmin ediyoruz.

Aynı örnekle çıkarımsal cümleler şöyle olur:

- "Bölümün tamamında ortalama uyku süresi 6,8 saate yakındır."
- "Bölümdeki öğrencilerin yaklaşık üçte biri gecede 6 saatten az uyuyor."

Bu cümleler ölçülmeyen 280 öğrenciyi de kapsar.

**Betimsel ile çıkarımsal arasındaki fark yöntemde değil, cümlenin kime konuştuğundadır.** Aynı sayı, yani 6,8, iki cümlede de geçti. "Yanıt veren 120 kişinin ortalaması 6,8" cümlesi yalnız 120 kişiye konuşur, betimseldir. "Bölümün ortalaması 6,8'e yakındır" cümlesi bütün bölüme konuşur, çıkarımsaldır. Bir cümlenin hangisi olduğunu anlamak için sor: *Bu cümle yalnız ölçülen kişileri mi anlatıyor, ölçülmeyenleri de mi kapsıyor?*

### 1.6 Genelleme

::: {.callout-important appearance="simple"}
## Tanım
**Genelleme**, örneklemden elde edilen sonucun evrene taşınmasıdır. Bir sonuç, yalnızca örneklemin seçildiği evrene genellenebilir.
:::

Çıkarım yapabilmek için örneklemin evreni iyi temsil etmesi gerekir. Evrenden seçilmiş bir örneklem, o evren hakkında konuşma hakkı verir. Başka bir gruptan gelen örneklem ise yalnız o grup hakkında konuşma hakkı verir.

Bunu şöyle düşünebilirsin: bir çorbanın tuzunu tadarak kontrol ediyorsun. Karıştırılmış çorbadan alınan bir kaşık bütün çorbayı anlatır. Ama kazanın yalnız üst yüzeyinden kaşık alırsan tuz dibe çökmüş olabilir; tattığın şey kazanın tamamını yansıtmaz. Örneklem de evrenin her yerinden gelmelidir.

Örneğimizde: bölümün 400 öğrencisinden seçilen bir örneklem, bölüm hakkında konuşmaya izin verir. Ama aynı örneklem "Türkiye'deki bütün üniversite öğrencileri" hakkında konuşmaya izin vermez, çünkü örneklem o evrenden seçilmemiştir.

Genellemenin hatalı olduğu birkaç durum:

- Yalnızca spor salonu üyelerinin uyku süresi ölçülmüşse sonuç "Türkiye'deki gençler" için değil, spor salonu üyeleri için geçerlidir.
- Yalnız psikoloji öğrencilerinde yapılan bir deneyin sonucu "bütün üniversite öğrencileri için geçerlidir" diye söylenemez.
- Büyükşehirdeki 30 okuldan alınan veri "Türkiye'deki bütün okullar" için söylenemez.

### 1.7 Yanlılık

::: {.callout-important appearance="simple"}
## Tanım
**Yanlılık**, örneklemin evreni sistematik olarak, belli bir yönde yanlış temsil etmesidir. (İng. *bias*.)
:::

Örneklemin evreni temsil edememesinin bir nedeni, **kimlerin seçildiğidir**. Seçim süreci bazı kişileri sürekli olarak dışarıda bırakıyorsa ya da bazı kişilere sürekli olarak daha fazla yer veriyorsa örneklem evrenden belli bir yönde sapar. Buna yanlılık denir. "Sistematik" sözcüğü önemlidir: yanlılık rastgele bir sapma değildir, hep aynı yönde, aynı nedenle oluşan bir sapmadır.

Örneğin araştırmacı anketi yalnız ders sonrası kütüphanede bulunan öğrencilere verirse, geç saate kadar çalışan öğrenciler örneklemde fazla temsil edilir. Bu öğrenciler genelde az uyur. Sonuç olarak ortalama uyku süresi gerçekten olduğundan **hep daha düşük** çıkar. Kaç kişiye anket verdiği fark etmez; yön hep aynıdır.

Yanlılığın başka kaynakları da vardır:

- **İletişim kanalı:** Gençlere yalnız internet anketiyle ulaşılırsa internete erişimi olmayanlar dışarıda kalır; akıllı telefon kullanım oranı olduğundan yüksek çıkar.
- **Gönüllülük:** Bir terapi çalışması gazete ilanıyla katılımcı arıyorsa başvuranlar iyileşmeye daha istekli olabilir; terapinin etkisi olduğundan yüksek görünür.
- **Ölçüm yeri:** Kaygıyı yalnız bir hastanenin psikiyatri polikliniğinde ölçersen düzey olağan yaşamdaki insanlardan yüksek çıkar.

Yanlılığa karşı en önemli korunma, **rastgele seçimdir**. Rastgele seçimde evrendeki her birimin seçilme şansı vardır ve seçimi kişisel tercih belirlemez. Böylece belli bir grubun sürekli fazla ya da eksik temsil edilmesinin önüne geçilir. Rastgele seçim yanlılık riskini azaltır, ama tek bir örneklemin evreni tam olarak yansıtacağını garanti etmez.

Yanlılık konusunda en önemli nokta şudur: **kalabalık yanlılığı düzeltmez**. Yanlı bir yöntemle 10 kişiye de ulaşabilirsin, 10.000 kişiye de; ikisinde de aynı yönde, aynı sapma vardır. Sadece daha fazla kişiye ulaşmak, seçim yönteminin hatasını gidermez. "Çok kişiye ulaştık, o hâlde sonuç evreni temsil eder" düşüncesi bu yüzden yanlıştır. Özellikle gönüllü yanıt verenler kendi kendini seçmiştir ve yanıtlama isteği ölçülen konuyla ilgiliyse sonuç sapar.

### 1.8 Örnekleme değişkenliği

::: {.callout-important appearance="simple"}
## Tanım
**Örnekleme değişkenliği**, aynı evrenden çekilen farklı örneklemlerin farklı istatistikler vermesidir. (İng. *sampling variability*.)
:::

Seçim yöntemi kusursuz ve tamamen rastgele olsa bile iki ayrı örneklem aynı sonucu vermez. Çünkü her seferinde farklı kişiler seçilir ve farklı kişiler farklı değerler taşır. Bu bir hata ya da yanlılık değildir; örneklemenin doğal bir sonucudur.

Örneğimizde araştırmacı bölümden rastgele 120 kişi seçip ortalamayı 6,8 saat buldu. Başka bir gün başka 120 kişiyi rastgele seçseydi 6,6 ya da 7,0 saat bulabilirdi. İki seçimde de yöntem aynı ve doğrudur; sayılar seçilen kişilere göre biraz oynar.

Bunu bir zar örneğiyle de görebiliriz. Bir zarı 10 kez attığında 6 gelme oranı %30 çıkabilir, başka 10 atışta %10. Ama 1.000 kez attığında oran 1/6'ya (yaklaşık %17) çok yaklaşır. Az sayıda gözlemde rastlantı çok belirgindir; çok sayıda gözlemde rastlantılar birbirini dengeler.

Bu nedenle örnekleme değişkenliğinin çaresi **daha büyük örneklemdir**: örneklem büyüdükçe istatistikler parametrenin etrafında daha dar bir aralıkta toplanır, yani oynama azalır. 10 kişilik örneklemlerde ortalamalar geniş bir aralıkta dağılabilirken 1.000 kişilik örneklemlerde birbirine çok yakın çıkar.

**Yanlılık ile örnekleme değişkenliği farklı şeylerdir.** Yanlılık, *kimlerin* seçildiği ile ilgilidir ve hep aynı yönde bir sapma yaratır; çaresi rastgele seçimdir, büyük örneklem düzeltmez. Örnekleme değişkenliği ise *kaç kişinin* seçildiği ile ilgilidir ve her seferinde farklı yönde, rastgele bir oynama yaratır; çaresi büyük örneklemdir. Yanlı bir yöntemle çok kişi seçersen oynama azalır ama sapma kalır; rastgele ama küçük bir örneklem seçersen sapma yoktur ama oynama büyüktür. İkisini ayrı ayrı düşünmek gerekir.

---

## 2. Veri tablosu

Veri çoğunlukla bir tabloda tutulur. Tabloyu doğru okumak için satırın, sütunun ve hücrenin neyi temsil ettiğini bilmek gerekir. Bu konuda örnek olarak şu küçük tabloyu kullanacağız:

| kod | yas | bolum | kaygi |
|---|---|---|---|
| K01 | 19 | Psikoloji | 34 |
| K02 | 21 | Sosyoloji | 28 |
| K03 | 20 | Psikoloji | 31 |

### 2.1 Gözlem birimi (satır)

::: {.callout-important appearance="simple"}
## Tanım
**Gözlem birimi**, veri tablosunda her satırın temsil ettiği varlıktır. (İng. *unit of observation*.)
:::

Tablodaki her satır bir gözlem birimini anlatır. Gözlem birimi, 1.1'de gördüğümüz birimdir; ama bu kez tablonun bir satırı olarak karşımıza çıkar. Örnek tabloda her satır bir öğrencidir: K01 bir öğrenci, K02 başka bir öğrenci.

Gözlem birimi her zaman kişi olmak zorunda değildir. Okulların karşılaştırıldığı bir tabloda her satır bir okul, günlük kütüphane girişlerinin kaydedildiği bir tabloda her satır bir gün olabilir. Bir tabloyu yorumlamadan önce şunu sor: *Bu tabloda her satır neyi temsil ediyor?* Satır sayısı bu sorunun cevabı olmadan yorumlanamaz. 240 satırlık bir tablo, satırlar kişiyse 240 kişi, satırlar ölçümse çok daha az kişi demek olabilir (2.4'te göreceğiz).

### 2.2 Değişken (sütun)

::: {.callout-important appearance="simple"}
## Tanım
**Değişken**, gözlem birimlerinden birine göre farklı değer alabilen özelliktir.
:::

Tablodaki sütunlar çoğunlukla birer değişkendir. Değişken, "değişebilen" bir özelliktir: öğrenciden öğrenciye yaş, bölüm ve kaygı puanı farklı olabilir. Örnek tabloda `yas`, `bolum` ve `kaygi` birer değişkendir.

Bir özellik herkeste aynı değeri alıyorsa değişken olarak işe yaramaz. Örneğimizde bütün öğrenciler 19 yaşında olsaydı `yas` sütunu bir şey ayırt etmezdi; yaşa göre karşılaştırma yapamazdık. Üstelik sonucun hangi yaş grubuna genellenebileceği de daralırdı: yalnız 19 yaşındakiler hakkında konuşabilirdik.

### 2.3 Hücre ve kimlik sütunu

::: {.callout-important appearance="simple"}
## Tanım
**Hücre**, bir gözlem biriminin bir değişkendeki değeridir. **Kimlik sütunu**, gözlem birimini tanımlamaya yarayan ve analiz edilmeyen sütundur.
:::

Bir satırla bir sütunun kesiştiği yer hücredir. Örnek tabloda K02'nin `kaygi` değeri 28'dir; bu bir hücredir. Her hücrede tek bir bilgi bulunur.

`kod` sütunu kimliktir. Satırın hangi öğrenciye ait olduğunu söyler ama öğrencinin bir özelliğini ölçmez. Kimlik numaralarının ortalamasını almanın bir anlamı yoktur: K01, K02, K03 sayıları ölçülmüş bir miktar değil, yalnızca birer etikettir. Bu yüzden kimlik sütunu değişken gibi analiz edilmez.

### 2.4 Geniş ve uzun biçim

::: {.callout-important appearance="simple"}
## Tanım
**Geniş biçim**, her gözlem biriminin tek satırda yer aldığı, tekrarlı ölçümlerin ayrı sütunlarda tutulduğu tablo düzenidir. **Uzun biçim**, her ölçümün ayrı bir satırda yer aldığı tablo düzenidir.
:::

Aynı kişiyi birden fazla kez ölçtüğünde, tabloyu iki farklı düzende kurabilirsin. Örnek olarak K01'in kaygısını üç ayrı zamanda ölçtüğümüzü düşünelim.

Geniş biçimde K01 tek satırdır ve üç ölçüm üç sütundadır:

| kod | kaygi_1 | kaygi_2 | kaygi_3 |
|---|---|---|---|
| K01 | 34 | 31 | 29 |

Uzun biçimde K01'in her ölçümü ayrı satırdır:

| kod | olcum | kaygi |
|---|---|---|
| K01 | 1 | 34 |
| K01 | 2 | 31 |
| K01 | 3 | 29 |

İki düzen de aynı bilgiyi taşır. Fark, satırın neyi temsil ettiğidir: geniş biçimde satır bir kişidir, uzun biçimde satır bir ölçümdür. Üçer kez ölçülen 80 kişi geniş biçimde 80 satır, uzun biçimde 240 satır eder. Bu yüzden satır sayısını yorumlamadan önce gözlem biriminin ne olduğuna bakmak gerekir: 240 satır "240 katılımcı" demek değildir.

## 3. Değişken türleri

Her değişkenle yapılabilecek işlem, değişkenin türüne bağlıdır. Bu konuda değişkenleri önce iki ana türe, sonra nicel olanları iki alt türe ayıracağız. Örnek olarak şu değişkenleri kullanacağız: bölüm, terapi türü, yaş, kardeş sayısı, boy, kaygı puanı.

### 3.1 Kategorik değişken

::: {.callout-important appearance="simple"}
## Tanım
**Kategorik değişken**, gözlem birimlerini gruplara ayıran, değerleri kategori olan değişkendir. (Nitel değişken olarak da adlandırılır; İng. *categorical variable*.)
:::

Kategorik değişken bir miktar değil, bir grup bildirir. "Bölüm" kategoriktir: bir öğrenci Psikoloji bölümündedir, Sosyoloji bölümündedir. "Terapi türü" de kategoriktir: bilişsel davranışçı, psikodinamik, destekleyici. Bu değişkenlerin değerleri birer gruptur; "ne kadar" sorusuna cevap vermezler, "hangisi" sorusuna cevap verirler.

Bir değişkenin değerleri sayımla da bulunabilir: bir bölümde kaç öğrenci olduğunu sayarsın. Ama bu sayım kategoriyi bir miktara dönüştürmez; "Psikoloji" hâlâ bir gruptur, sayısı ise o grubun büyüklüğüdür.

### 3.2 Nicel değişken

::: {.callout-important appearance="simple"}
## Tanım
**Nicel değişken**, gözlem birimlerinin bir miktarını bildiren, değerleri sayı olan ve sayılarla işlem yapılabilen değişkendir. (Sayısal ya da niceliksel değişken olarak da adlandırılır; İng. *quantitative variable*.)
:::

Nicel değişken bir miktar bildirir. Yaş, boy, kardeş sayısı ve kaygı puanı nicel değişkenlerdir. Bu değişkenler "ne kadar?" ya da "kaç?" sorusuna cevap verir ve değerler arasında büyüklük karşılaştırması yapılabilir: 20 yaşındaki 19 yaşındakinden büyüktür.

### 3.3 Kesikli ve sürekli değişken

::: {.callout-important appearance="simple"}
## Tanım
**Kesikli değişken**, değerleri sayılarak elde edilen ve iki ardışık değer arasında değer almayan nicel değişkendir. **Sürekli değişken**, değerleri ölçülerek elde edilen ve iki değer arasında başka değerler de alabilen nicel değişkendir. (İng. *discrete* ve *continuous variable*; kesikli değişken süreksiz ya da ayrık olarak da adlandırılır.)
:::

Nicel değişkenler kendi içinde iki gruba ayrılır. Kardeş sayısı kesiklidir: 2 ya da 3 kardeşin olabilir, ama 2,5 kardeşin olamaz. Değerler "atlayarak" ilerler ve sayılarak bulunur. Hata sayısı, doğru yanıt sayısı da kesiklidir.

Boy ise süreklidir: 170 cm ile 171 cm arasında 170,4 cm ve 170,43 cm gibi sonsuz sayıda değer olabilir. Tepki süresi, ağırlık, uyku süresi de sürekli değişkenlerdir. Bu değerler sayılmaz, ölçülür; ölçüm ne kadar hassas yapılırsa değer o kadar ayrıntılı çıkar.

Kesikli değişken için kullanılan "süreksiz" ya da "ayrık" adları aynı anlama gelir. Sınavda hangi adla karşılaşırsan karşılaş, aynı kavramdır.

### 3.4 Kodlanmış kategoriler ve ölçüm biçimi

::: {.callout-important appearance="simple"}
## Tanım
**Kodlama**, bir kategorik değişkenin kategorilerine sayı atanmasıdır.
:::

Bir sütunda sayı görmek, değişkenin nicel olduğunu göstermez. Terapi türü sütununda 1, 2 ve 3 yazıyorsa bu sayılar yalnızca etikettir: 1 bilişsel davranışçı, 2 psikodinamik, 3 destekleyici terapiyi gösteriyor olabilir. Bu sütun hâlâ kategoriktir. 1 ile 3'ün ortalaması olan 2, "psikodinamik terapi"yi temsil etmez ve hiçbir şey anlatmaz.

Değişkenin türünü sütundaki sayılar değil, **ölçülen şeyin ne olduğu ve nasıl ölçüldüğü** belirler. Aynı kavram farklı yolla ölçülürse tür de değişebilir. Kaygıyı "düşük, orta, yüksek" olarak sorarsan değişken kategoriktir. Kaygıyı 0–100 arası bir puanla ölçersen aynı kavram artık niceldir.

Türü belirlerken şu soruyu sor: *Bu sütundaki değerler bir miktar mı bildiriyor, yoksa bir grup mu?* Sayı görmek soruyu cevaplamaz.

---

## 4. Ölçme düzeyleri

Değişken türü bir değişkenin "kategori mi, miktar mı" olduğunu söyler. Ölçme düzeyi ise daha ince bir soruya cevap verir: *Bu değişkenin değerleriyle hangi hesaplar anlamlıdır?* Örnek olarak bir basketbol takımını kullanacağız: oyuncuların forma numaraları, boyları, sıralamadaki yerleri.

### 4.1 Ölçme düzeyi

::: {.callout-important appearance="simple"}
## Tanım
**Ölçme düzeyi**, bir değişkenin değerlerinin taşıdığı bilginin düzeyidir ve değişkenle hangi işlemlerin anlamlı olduğunu belirler. Dört düzey vardır: nominal (adlandırma), sıralı (ordinal), aralık (interval) ve oran (ratio).
:::

Aynı sayı farklı anlamlar taşıyabilir. Bir oyuncunun forma numarası 10, boyu 190 cm, takım içindeki sıralaması da 10. olabilir. Üç sayı da "10" ya da onun gibi bir sayıdır ama üçü farklı bilgi verir. Ölçme düzeyi bu farkı adlandırır.

Düzeyi belirleyen şey sütundaki sayılar değil, **ölçüm biçimidir**: sayılara nasıl ulaşıldığı, bu sayıların neyi temsil ettiği. Dört düzeyi basamak gibi düşünebilirsin; yukarı çıktıkça değerler daha fazla bilgi taşır ve her düzey, altındakilerin yapabildiği her şeyi yapabilir.

### 4.2 Nominal düzey

::: {.callout-important appearance="simple"}
## Tanım
**Nominal düzey**, değerlerin yalnızca ad ya da kategori bildirdiği, aralarında sıra ya da büyüklük ilişkisi bulunmayan ölçme düzeyidir. (Sınıflama ya da adlandırma düzeyi olarak da anılır; İng. *nominal*.)
:::

Nominal değerler yalnızca isimdir. Forma numarası nominaldir: 10 numaralı oyuncu 5 numaralı oyuncudan "daha fazla" bir şey taşımaz; numara oyuncuyu tanımlayan bir etikettir. Terapi türü, bölüm, kan grubu da nominaldir.

Nominal değişkenle yapılabilecek özetler sınırlıdır: hangi değerin kaç kez görüldüğünü sayabilirsin (frekans, yüzde) ve en sık görülen değeri söyleyebilirsin (mod). Ortalama ya da sıralama anlamsızdır.

### 4.3 Sıralı düzey

::: {.callout-important appearance="simple"}
## Tanım
**Sıralı düzey**, değerlerin hem kategori bildirdiği hem de aralarında bir sıra ilişkisi bulunduğu, ama değerler arasındaki farkın eşit kabul edilemediği ölçme düzeyidir. (Sıralama düzeyi ya da ordinal düzey olarak da anılır; İng. *ordinal*.)
:::

Sıralı değerlerde "daha fazla" ya da "daha az" demek mümkündür, ama aralarındaki uzaklık eşit olmayabilir. Eğitim düzeyi sıralıdır: ilkokul, lise, lisans, yüksek lisans. Sıra vardır; ama lise ile lisans arasındaki fark ile ilkokul ile lise arasındaki fark aynı olmak zorunda değildir. Bir yarışmadaki sıralama da sıralıdır: 1. ile 2. arasında 0,1 saniye, 2. ile 3. arasında 5 saniye fark olabilir.

Sıralı değişkende mod ve frekansın yanında **medyan** (sıralamanın ortasındaki değer) da anlamlıdır.

### 4.4 Aralık düzeyi

::: {.callout-important appearance="simple"}
## Tanım
**Aralık düzeyi**, değerlerin sıra bildirdiği, ardışık değerler arasındaki farkın eşit olduğu, ancak gerçek bir sıfır noktasının bulunmadığı ölçme düzeyidir. (Eşit aralıklı düzey olarak da anılır; İng. *interval*.)
:::

Aralık düzeyinde fark anlamlıdır. Sıcaklık (°C) aralık düzeyindedir: 10 °C ile 20 °C arasındaki fark, 20 °C ile 30 °C arasındaki farkla aynıdır. Ama 0 °C "sıcaklık yok" demek değildir; sıfır noktası keyfî olarak seçilmiştir.

Aralık düzeyinde **ortalama ve standart sapma** anlamlıdır, çünkü eşit aralıklı farklarla toplama ve çıkarma yapılabilir.

### 4.5 Oran düzeyi

::: {.callout-important appearance="simple"}
## Tanım
**Oran düzeyi**, aralık düzeyinin bütün özelliklerine ek olarak gerçek bir sıfır noktasının bulunduğu ölçme düzeyidir. Sıfır, ölçülen özelliğin hiç bulunmadığı anlamına gelir. (Oranlı düzey olarak da anılır; İng. *ratio*.)
:::

Oran düzeyinde sıfır gerçektir. Boy 0 cm ise boy yoktur; tepki süresi 0 ise hiç zaman geçmemiştir; gelir 0 ise gelir yoktur. Yaş, ağırlık, para ve süre oran düzeyindedir.

Gerçek sıfır olduğu için **"kaç kat" yorumu** yalnız oran düzeyinde anlamlıdır: 200 cm boyundaki bir kişi, 100 cm boyundaki bir çocuğun iki katı boydadır.

### 4.6 Düzeye göre hangi özet anlamlıdır?

Bir değişkenle hangi özetin anlamlı olduğu, ölçme düzeyine bağlıdır. Basketbol takımına dönelim. Forma numaralarının ortalaması 15,4 çıkabilir; boyların ortalaması 200 cm çıkabilir. İkisi de aritmetik olarak doğru bir hesaptır. Ama 15,4 kimseyi anlatmaz, çünkü forma numaraları yalnızca etikettir. 200 cm ise takımın tipik boyu hakkında gerçek bir bilgi verir. Fark, sayıların **neyi temsil ettiğindedir**.

Düzeyler birikimlidir; yukarı çıkıldıkça yeni özetler eklenir:

| Düzey | Anlamlı özetler |
|---|---|
| Nominal | Frekans, yüzde, mod |
| Sıralı | Yukarıdakilere ek olarak medyan |
| Aralık | Yukarıdakilere ek olarak ortalama, standart sapma |
| Oran | Yukarıdakilere ek olarak "kaç kat" yorumu |

İstatistik yazılımları aralık ve oran düzeylerini çoğunlukla tek tür olarak toplar. Bu yüzden düzeyi yazılımın önerisine bırakma; veri sözlüğünde kendin belirle (5. konu).

### 4.7 "İki kat" yorumu

::: {.callout-important appearance="simple"}
## Kural
"Kaç kat" yorumu yalnız oran düzeyindeki değişkenlerde yapılabilir.
:::

Gerçek sıfırı olmayan bir ölçekte oran yorumu anlamsızdır. 20 °C, 10 °C'nin "iki katı sıcak" değildir; çünkü 0 °C'nin yeri keyfîdir. Aynı sıcaklıkları Fahrenheit ile yazarsan (68 °F ve 50 °F) oran değişir ve "iki kat" ortadan kalkar. Bu, oranın ölçeğin keyfî sıfırına bağlı olduğunu gösterir.

Aynı mantık ölçek puanlarında da geçerlidir. Bir kaygı ölçeğinden 30 puan alan grup ile 15 puan alan grubu karşılaştırdığında "ilki iki kat kaygılı" diyemezsin; çünkü ölçeğin sıfırı "hiç kaygı yok" anlamına gelmez. Doğru cümle "ilk grup 15 puan yüksek"tir. Fark yorumu aralık düzeyinde anlamlıdır, oran yorumu değildir.

### 4.8 Likert maddesi ve ölçek puanı

::: {.callout-important appearance="simple"}
## Tanım
**Likert maddesi**, bir ifadeye katılma derecesinin sıralı seçeneklerle (örneğin 1 = hiç katılmıyorum … 5 = tamamen katılıyorum) sorulduğu tek bir sorudur. **Ölçek puanı**, bir kavramı ölçen birden fazla maddenin puanlarının toplanması ya da ortalamasının alınmasıyla elde edilen değerdir.
:::

Tek bir Likert maddesi **sıralıdır**. 1'den 5'e kadar giden seçenekler arasında sıra vardır ama "3 ile 4 arası fark, 1 ile 2 arası farkla aynıdır" diyemeyiz. Bu yüzden tek maddede medyan ve mod güvenlidir.

Bir kavramı birden fazla maddeyle ölçtüğünde (örneğin kaygıyı 10 maddeyle) madde puanlarını toplarsın. 10 madde × 1–5 puan, 10 ile 50 arasında bir **ölçek puanı** verir. Bu toplam puan, daha geniş bir değer aralığı sağlar ve uygulamada **aralık düzeyi** sayılarak ortalaması alınır. Bu kabul yaygındır ama tartışmalıdır. Ölçek puanında gerçek sıfır olmadığı için "kaç kat" yorumu yapılmaz (4.7).

### 4.9 Veri toplarken bilgi kaybı

Düzey, veriyi toplama biçimine göre belirlenir ve bir kez kaybedilen ayrıntı geri gelmez. Yaşı doğrudan sorduysan yaş oran düzeyindedir ve ortalama yaşı hesaplayabilirsin. Ama yaşı "18–24, 25–34, 35–44, 45+" gruplarıyla topladıysan artık değişken sıralıdır; ortalama yaş hesaplanamaz.

Bu yüzden değişkeni mümkün olduğunca ayrıntılı biçimde ölç. İstersen sonradan gruplayabilirsin, ama gruplanmış veriyi ayrıntıya geri çeviremezsin.

---

## 5. Veri sözlüğü

Veri girişine başlamadan önce her değişkenin ne anlama geldiğini kaydetmek gerekir. Bu konuda şu üç değişkenli örneği kullanacağız: cinsiyet, haftalık ders çalışma saati ve sınav kaygısı toplam puanı.

### 5.1 Veri sözlüğü

::: {.callout-important appearance="simple"}
## Tanım
**Veri sözlüğü**, bir veri setindeki her değişkenin adını, anlamını, değerlerini, birimini, ölçme düzeyini ve eksik değer kodunu kaydeden belgedir. (Kod kitabı olarak da anılır; İng. *codebook* ya da *data dictionary*.)
:::

Veri sözlüğü, bir yıl sonra dosyayı açan kişinin (çoğu zaman senin) her sütunu doğru okuyabilmesi için hazırlanır. Sütun adı `calisma` ise bunun ne olduğunu, hangi birimle ölçüldüğünü ve eksik değerin nasıl kodlandığını sözlük söyler. Sözlük veri girişi başlamadan hazırlanır ve herkes aynı sözlüğü kullanır.

Bir sözlükte her değişken bir satırdır:

| Ad | Açıklama | Değerler | Birim | Düzey | Eksik kod |
|---|---|---|---|---|---|
| cinsiyet | Beyan edilen cinsiyet | 1 = Kadın, 2 = Erkek, 3 = Diğer | — | nominal | 99 |
| calisma | Bu hafta ders çalışma | 0–80 | saat | oran | 999 |
| kaygi | Sınav kaygısı toplam puanı | 10–50 | puan | aralık | 999 |

### 5.2 Değişken adı

::: {.callout-important appearance="simple"}
## Tanım
**Değişken adı**, bir sütunu tanımlayan kısa, anlamlı ve boşluksuz addır.
:::

İyi bir değişken adı sütunu bir bakışta tanımlar: `calisma`, `kaygi_t1` (kaygının birinci ölçümü). Kötü ad ise ya anlamsızdır (`s1`) ya da çok uzundur ("Bu hafta kaç saat çalıştınız"). Soru metninin tamamı değişken adına değil, sözlükteki açıklama alanına yazılır.

### 5.3 Değer etiketi

::: {.callout-important appearance="simple"}
## Tanım
**Değer etiketi**, kategorik bir değişkende her kodun anlamını belirten açıklamadır. (İng. *value label*.)
:::

Cinsiyet 1, 2 ve 3 diye kodlanmışsa hangisinin ne olduğunu etiket söyler: 1 = Kadın, 2 = Erkek, 3 = Diğer. Etiket yazılmadıysa zamanla hangi kodun neyi gösterdiği unutulur.

Bir dosyada 1 = Kadın, başka bir dosyada 1 = Erkek olduğunu düşün. İki dosyayı bu farktan habersiz birleştirirsen farklı gruplar aynı koda yığılır ve gerçek bir grup farkı kaybolabilir. Etiket bu tür hataları önler.

### 5.4 Eksik değer ve eksik kod

::: {.callout-important appearance="simple"}
## Tanım
**Eksik değer**, ölçülemeyen ya da yanıtlanmayan bir hücredir. (İng. *missing value*.) **Eksik kod**, eksik değeri göstermek için kullanılan ve gerçek bir değerle karışmayan işarettir.
:::

Bir katılımcı gelir sorusunu yanıtlamadıysa o hücre eksiktir. Eksik, gerçek bir değerle karışmamalı ve yazılımda *eksik* olarak tanımlanmalıdır. Bunun iki yolu vardır:

- Değişkenin üst sınırı belliyse, gerçek değerlerin dışında kalan bir kod seçilir: yaş için 99, haftalık çalışma saati (0–80) için 999 gibi.
- Üst sınırı belirsiz bir değişkende hücre boş bırakılır ya da o değişken için olanaksız bir değer yazılır (negatif olamayan bir tepki süresi için −99 gibi).

**Eksik için 0 yazılmaz.** Gelirini belirtmeyenlere 0 yazarsan onları "geliri olmayan" kişilerle aynı gruba sokarsın ve ortalama gelir aşağı çekilir. Yanıtlamamak ile sıfır geliri olmak ayrı durumlardır.

### 5.5 Bir hücrede tek bilgi

::: {.callout-important appearance="simple"}
## Kural
Bir hücrede tek bir bilgi bulunur; birim ve kategori başka yerde belirtilir.
:::

Çalışma saati sütununa "6 saat" yazarsan yazılım bu hücreyi sayı olarak okuyamaz. 6 yazılır, birim sözlüğe gider. Aynı şekilde "20 / kadın" iki bilgi taşır ve iki ayrı sütuna (yaş ve cinsiyet) bölünmelidir. Ondalık ayırıcı (virgül ya da nokta) da dosya boyunca tutarlı kullanılır.

Yazılımlar sözlük bilgisini (ad, etiket, düzey, eksik kod) kaydedecek bir yer sunar. Yazılımın otomatik önerdiği tür yalnızca bir başlangıçtır; sözlükle doğrulanır. Kodlanmış bir kategorik sütunu sayısal bırakmak, yazılımın anlamsız bir ortalamayı hesaplamaya hazır olması demektir (3.4).

## 6. Veriyi analize hazırlamak

Veri girildikten sonra, analize geçmeden önce kontrol edilir. Bu konuda şu örnekle çalışacağız: bir ankette yaş, haftalık çalışma saati ve bir kaygı ölçeğinin maddeleri toplanmış.

### 6.1 Veri kontrolü

::: {.callout-important appearance="simple"}
## Tanım
**Veri kontrolü**, analizden önce değişkenlerin değerlerinin sözlükteki tanımla uyuşup uyuşmadığının denetlenmesidir.
:::

Kontrol iki basit işlemle başlar. Sayısal değişkenlerde **en küçük ve en büyük değere** bakılır ve sözlükteki aralıkla karşılaştırılır. Kategorik değişkenlerde **frekans tablosuna** bakılır.

Üç kategorili bir değişkende dördüncü bir kod belirmişse, bu ya bir giriş hatasıdır ya da tanımsız bir eksik kodudur. Bir ipucu daha: eksik kodu 99 olan yaş sütununda en büyük değer 99 çıkıyorsa, kodun yazılımda eksik olarak tanımlanmadığını anlarsın.

Kontrol sırasında bulduğun her sıra dışı değer aynı kararı gerektirmez. Dört farklı durum vardır; 6.2–6.4'te ayrı ayrı anlatılıyor.

### 6.2 Eksik değer ve geçerli sıfır

::: {.callout-important appearance="simple"}
## Tanım
**Geçerli sıfır**, ölçülen özelliğin gerçekten bulunmadığını gösteren sıfır değeridir; eksik değerden farklı, gerçek bir ölçümdür.
:::

Boş bırakılmış çalışma saati hücresi **eksiktir**: bilgi yoktur. Eksik olarak kodlanır, sıfır yazılmaz.

"Sigara içiyor musunuz? Günde kaç adet?" sorusuna "içmiyorum" diyen bir katılımcının cevabı ise **0'dır** ve bu gerçek bir değerdir: ölçüm yapılmış, sonuç sıfır çıkmıştır. Bu sıfır silinmez, eksik yapılmaz.

İkisini ayırt etmenin yolu şudur: *Bu hücrede bilgi var mı?* Bilgi yoksa eksik; bilgi sıfırsa geçerli sıfırdır.

### 6.3 Olanaksız değer

::: {.callout-important appearance="simple"}
## Tanım
**Olanaksız değer**, ölçülen özelliğin alabileceği değer aralığının dışında kalan ve gerçek olamayacak bir değerdir.
:::

250 yaş olanaksızdır; 1–7 arasında puanlanan bir maddede 8 yazması da öyle. Bu değerler gerçek bir ölçümü yansıtmaz, giriş ya da ölçüm hatasıdır.

Olanaksız değer görüldüğünde izlenecek yol sıralıdır: önce **kaynağa dön** (anket kâğıdı ya da kayıt) ve doğru değeri bul; doğru değer bulunursa düzelt. Bulunamazsa **eksik olarak kodla**. **Tahminle doldurma**: "muhtemelen 25'tir" diye uydurulan bir değer veriye gerçek olmayan bilgi katar.

### 6.4 Alışılmadık değer

::: {.callout-important appearance="simple"}
## Tanım
**Alışılmadık değer**, diğer değerlerden belirgin biçimde ayrılan ama gerçek olabilen değerdir.
:::

Çoğu öğrencinin 19–22 yaşında olduğu bir örneklemde 45 yaşında bir öğrenci alışılmadıktır ama mümkündür. Haftada 2–20 saat çalışan öğrenciler arasında 60 saat çalıştığını bildiren biri de öyle: nadir bir değer, ama gerçek olabilir.

Alışılmadık değer **yalnızca alışılmadık olduğu için silinmez**. Önce olanaksız mı, sözlükteki aralığın içinde mi diye bakılır. Aralığın içindeyse ve kaynak kaydıyla doğrulanmışsa gerçek bir gözlemdir ve veride kalır. Silmek için araştırma kayıtlarında yazılı bir gerekçe olmalıdır (örneğin dahil etme ölçütünün dışında kalması).

### 6.5 Ham veriyi korumak

::: {.callout-important appearance="simple"}
## Kural
Orijinal (ham) veri değiştirilmez; her değişiklik ayrı olarak kaydedilir.
:::

Düzeltme yaparken orijinal veri dosyasını bozma. Her değişikliği kaydet: hangi satır, hangi değişken, eski değer, yeni değer ve gerekçe. Böylece bir yıl sonra "bu sayı neden değişmiş?" sorusuna cevap verebilirsin ve gerekirse değişikliği geri alabilirsin.

### 6.6 Ters puanlama

::: {.callout-important appearance="simple"}
## Tanım
**Ters puanlama**, olumsuz ifade edilmiş bir maddenin puanının, ölçeğin yönüyle aynı doğrultuya gelecek şekilde çevrilmesidir. (İng. *reverse coding*.)
:::

Bir kaygı ölçeğinde "Sınav öncesi rahat hissederim" gibi bir madde olumlu ifade eder: bu maddede yüksek puan düşük kaygı demektir. Diğer maddelerde ise yüksek puan yüksek kaygıdır. Maddeleri toplayabilmek için hepsinin aynı yöne bakması gerekir; bu yüzden ters maddelerin puanı çevrilir.

$$\text{ters puan} = (\text{en küçük} + \text{en büyük}) - \text{ham puan}$$

1–5 puanlı bir maddede ters puan 6 − ham puandır: 5 olan puan 1'e, 1 olan puan 5'e döner. 1–7 maddede formül 8 − ham, 0–4 maddede 4 − ham olur.

Çevirdikten sonra yeni sütunun en küçük ve en büyük değerine bak. 1–7 bir maddede yanlışlıkla 6 − ham kullandıysan 7 puanı −1'e döner ve hata hemen görünür; doğru aralık 1–7'dir.

### 6.7 Toplam ve ortalama puan

::: {.callout-important appearance="simple"}
## Tanım
**Toplam puan**, bir ölçeğin maddelerinin puanlarının toplanmasıyla; **ortalama puan**, maddelerin puan ortalamasının alınmasıyla elde edilen değerdir.
:::

Ters maddeler çevrildikten sonra, maddeler toplanır ya da ortalaması alınır. Sonuç **yeni bir değişken** olarak sözlüğe eklenir.

Aralarındaki fark yorumdadır. Ortalama puan madde ölçeğinin aralığında kalır (1–5 puanlı maddelerde ortalama da 1–5 arasındadır) ve doğrudan okunur. Toplam puan madde sayısına bağlıdır (10 madde için 10–50). Hangisinin kullanılacağını ölçeğin yönergesi söyler.

İki kural vardır. Boş bırakılan madde sıfır sayılmaz, eksik kalır. Yeni toplam ya da ortalama puan, orijinal maddelerin sütunlarının üstüne yazılmaz; ayrı bir sütun olarak eklenir.

---

## Dikkat edilmesi gereken noktalar

Bu notta en sık karıştırılan noktalar şunlardır. Her biri ilgili konuda anlatıldı; burada tek yerde toplandı.

**Evren, örneklem ve çıkarım (1. konu)**

1. **Evren, ulaşabildiğin kişiler değildir.** Evreni araştırma sorusu belirler. Verisini aldığın kısım örneklemdir.
2. **Örneklem, davet edilenler değil, veri toplananlardır.** 400 kişiye anket gönderip 120'si yanıtladıysa örneklem 120 kişidir.
3. **Evrenin tamamı ölçülürse örneklem değil tam sayım vardır.**
4. **Birim her zaman kişi değildir.** Okul, gün ya da seans olabilir. 30 okul seçildiyse örneklem "30 okul"dur, "30 öğrenci" değil.
5. **Parametre ile istatistiği ayıran şey, kimden hesaplandığıdır.** Formül aynıdır.
6. **Betimsel ile çıkarımsal yöntemin adı değil, cümlenin kapsamıdır.** Aynı sayı bir cümlede betimsel, başka cümlede çıkarımsal olabilir.
7. **Genelleme yalnız örneklemin seçildiği evrene yapılır.**
8. **Yanlılık ile örnekleme değişkenliği ayrı sorunlardır.** Yanlılık "kimler seçildi", örnekleme değişkenliği "kaç kişi seçildi" sorusudur.
9. **Kalabalık yanlılığı düzeltmez.** Büyük örneklem yalnız örnekleme değişkenliğini azaltır.
10. **Rastgele seçim garanti değildir.** Yanlılık riskini azaltır; rastgele seçilmiş iki örneklem de birbirinden farklı çıkar.

**Veri tablosu (2. konu)**

11. **Satır sayısı katılımcı sayısı değildir.** Önce gözlem biriminin ne olduğuna bak. Üçer kez ölçülen 80 kişi uzun biçimde 240 satırdır.
12. **Kimlik sütunu değişken gibi analiz edilmez.** Numaraların ortalamasının anlamı yoktur.
13. **Herkeste aynı değeri alan sütun karşılaştırmaya yaramaz** ve genellemeyi daraltır.

**Değişken türleri (3. konu)**

14. **Sütunda sayı görmek nicel olduğunu göstermez.** 1, 2, 3 diye kodlanmış terapi türü kategoriktir.
15. **Tür, ölçülen şeyin nasıl ölçüldüğüne bağlıdır.** Kaygı "düşük/orta/yüksek" ise kategorik, 0–100 puan ise niceldir.
16. **Kesikli sayılır, sürekli ölçülür.** Kardeş sayısı kesiklidir, boy süreklidir. "Süreksiz" ve "ayrık" kesikli ile aynı anlamdadır.

**Ölçme düzeyleri (4. konu)**

17. **Düzeyi sayılar değil, ölçüm biçimi belirler.** Forma numarası sayıdır ama nominaldir.
18. **"İki kat" yalnız oran düzeyinde söylenir.** 20 °C, 10 °C'nin iki katı sıcak değildir; kaygı puanı 30 olan grup 15 olandan iki kat kaygılı değildir, "15 puan yüksektir".
19. **Tek Likert maddesi sıralıdır, ölçek puanı uygulamada aralık sayılır.** Bu kabul tartışmalıdır.
20. **Nominal veride kodların ortalaması anlamsızdır.** Doğru özet kategorilerin sayısı ve yüzdesidir.
21. **Kaybedilen ayrıntı geri gelmez.** Yaşı gruplayarak topladıysan ortalama yaş hesaplayamazsın.

**Veri sözlüğü ve hazırlama (5. ve 6. konular)**

22. **Eksik için 0 yazılmaz.** Eksik, gerçek değerle karışmayan bir kodla işaretlenir.
23. **Eksik ile geçerli sıfır farklıdır.** Bilgi yoksa eksik, bilgi sıfırsa geçerli sıfırdır.
24. **Olanaksız değer tahminle doldurulmaz.** Önce kaynağa dön; düzeltilemezse eksik yap.
25. **Alışılmadık değer yalnız alışılmadık olduğu için silinmez.** Aralığın içindeyse ve doğrulanmışsa gerçektir.
26. **Ters puanlamada formül ölçeğe göre değişir.** (En küçük + en büyük) − ham puan; çevirdikten sonra min–maks kontrol edilir.
27. **Ham veri bozulmaz.** Her değişiklik kaydedilir; yeni puanlar yeni sütuna yazılır.

## Kontrol soruları

### 1. Konu: Evren, örneklem ve çıkarım

1. Bir anketin e-posta davetiyesi bölümdeki 400 öğrencinin hepsine gitmiş, 120'si yanıtlamış. Bu örnekte evren, örneklem ve birimi söyle.
2. "Bir ilin ilkokullarında ortalama sınıf mevcudu" araştırılıyor ve 30 okul seçiliyor. Evren, örneklem ve birim nedir?
3. 25 kişilik bir sınıfta 25 öğrencinin notunun hepsi alınmış. Bu durumda örneklem var mıdır? Bu duruma ne denir?
4. "Bölümdeki 400 öğrencinin ortalama uyku süresi" ve "ankete yanıt veren 120 öğrencinin ortalama uyku süresi" sayılarından hangisi parametre, hangisi istatistiktir?
5. Aşağıdaki cümlelerden hangisi betimsel, hangisi çıkarımsaldır?
   - a) "Bu 40 öğrencinin not ortalaması 72."
   - b) "Üniversitedeki bütün öğrencilerin not ortalaması 72'dir."
   - c) "Seçtiğimiz 30 okulda ortalama sınıf mevcudu 27."
   - d) "Bu ildeki ilkokulların ortalama sınıf mevcudu 27 civarındadır."
6. Spor salonu üyeleriyle yapılan bir ankette ortalama uyku süresi 6,2 saat bulundu. Bu sonuç "Türkiye'deki gençler" için söylenebilir mi?
7. Yalnız psikoloji öğrencilerinde yapılan bir deneyin sonucu "bütün üniversite öğrencileri için geçerlidir" denebilir mi? Neden?
8. Bir anket yalnız ders sonrası kütüphanede bulunanlara veriliyor. Bu seçimde hangi sorun var? Sonuç hangi yönde sapar?
9. Gençlere yalnız internet anketiyle ulaşılıyor. Akıllı telefon kullanım oranı gerçekte olduğundan yüksek mi, düşük mü çıkar? Neden?
10. Örneklem 100 kişiden 10.000 kişiye çıkarıldı. Yanlılık azalır mı, örnekleme değişkenliği azalır mı?
11. Bir hastanenin kafeteryasında bekleyen herkese stres anketi verilmiş. Bu veriyle "şehirdeki yetişkinlerin stres düzeyi" hakkında konuşulabilir mi? Hangi sorun var?
12. İki ayrı rastgele ankette sonuçlar %48 ve %52 çıktı. Bu bir yanlılık mı, örnekleme değişkenliği mi?
13. "Çok kişiye ulaştık, o hâlde sonuç evreni temsil eder" cümlesi neden yanlıştır?
14. Bir terapi çalışması gazete ilanıyla katılımcı arıyor. Başvuranlar iyileşmeye daha istekli. Terapinin etkisi gerçekte olduğundan yüksek mi, düşük mü görünür? Bu yanlılık mı, örnekleme değişkenliği mi?
15. Rastgele seçim kullanıldı. Örneklemin evreni tam olarak yansıtacağından emin olunabilir mi?

::: {.callout-note collapse="true" title="Cevaplar (1. Konu)"}
1. Evren: bölümdeki 400 öğrenci. Örneklem: yanıt veren 120 öğrenci (veri toplananlar). Birim: öğrenci.
2. Evren: o ildeki bütün ilkokullar. Örneklem: seçilen 30 okul. Birim: okul.
3. Hayır, örneklem yoktur; evrenin tamamı ölçülmüştür. Bu duruma tam sayım denir.
4. 400 öğrencinin ortalaması parametredir (evrenin tamamı). 120 öğrencinin ortalaması istatistiktir (örneklem).
5. a) betimsel (yalnız ölçülen 40 öğrenci). b) çıkarımsal (ölçülmeyenleri de kapsar). c) betimsel (yalnız seçilen 30 okul). d) çıkarımsal (seçilmeyen okulları da kapsar).
6. Hayır. Örneklem spor salonu üyelerinden geldiği için sonuç yalnız spor salonu üyeleri için konuşur.
7. Hayır. Örneklem psikoloji öğrencilerinden seçilmiştir; sonuç o gruba aittir. Bütün üniversite öğrencilerini temsil etmediği için genelleme haklı değildir.
8. Yanlılık: geç saate kadar çalışan öğrenciler fazla temsil edilir. Bu öğrenciler genelde az uyuduğu için ortalama uyku süresi gerçekte olduğundan düşük çıkar.
9. Yüksek çıkar. İnternete erişimi olmayanlar dışarıda kalır ve akıllı telefon kullanma olasılıkları daha düşük olabilir; seçim sistematik olarak telefon kullananlara kayar.
10. Yalnız örnekleme değişkenliği azalır. Yanlılık, seçim yönteminden kaynaklandığı için örneklem büyüse de aynı kalır.
11. Hayır. Kafeteryada bekleyenler hastanede bulunan kişilerdir; şehirdeki yetişkinleri yansıtmaz. Sorun yanlılıktır: kimlerin seçildiği.
12. Örnekleme değişkenliği. Seçim kuralı aynı ve rastgele; fark seçilen farklı kişilerden gelir.
13. Kalabalık seçim yönteminin yanlılığını gidermez. Yanlı bir yöntemle ulaşılan 10.000 kişi de aynı yönde sapar; gönüllü yanıt verenler kendi kendini seçmiştir.
14. Olduğundan yüksek görünür (iyileşmeye istekli kişiler seçilmiştir). Bu yanlılıktır: kimlerin seçildiği ile ilgili, hep aynı yönde bir sapma.
15. Hayır. Rastgele seçim yanlılık riskini azaltır ama garanti etmez; rastgele seçilmiş iki örneklem bile birbirinden farklı çıkar.
:::

### 2. Konu: Veri tablosu

1. Bir veri tablosunda 240 satır var. "240 katılımcı" diyebilir misin? Neden?
2. Bir okullar tablosunda her satır bir okuldur. Bu tabloda gözlem birimi nedir?
3. 80 kişi üç kez ölçülmüş. Geniş biçimde ve uzun biçimde kaç satır olur?
4. Bir tabloda `kod` sütunu K01, K02, … diye gidiyor. Bu sütunun ortalamasını almak anlamlı mıdır? Neden?
5. Örneklemdeki bütün öğrenciler 19 yaşında. `yas` sütunu hangi iki bakımdan sorun yaratır?
6. Aşağıdaki tabloda hücre, değişken ve gözlem birimini göster:
   | kod | yas | kaygi |
   |---|---|---|
   | K01 | 19 | 34 |
   | K02 | 21 | 28 |
7. Geniş biçimde kolay, uzun biçimde zor olan nedir? Kişi sayısını geniş ve uzun biçimde nasıl bulursun?
8. Günlük kütüphane girişlerinin kaydedildiği bir tabloda gözlem birimi nedir? Satır sayısı neyi gösterir?

::: {.callout-note collapse="true" title="Cevaplar (2. Konu)"}
1. Hayır. Önce gözlem biriminin ne olduğuna bakmak gerekir. Satırlar ölçümse (uzun biçim) 240 satır, 80 kişinin üçer ölçümü olabilir.
2. Gözlem birimi okuldur.
3. Geniş biçimde 80 satır (her kişi tek satır), uzun biçimde 240 satır (her ölçüm ayrı satır).
4. Hayır. Kimlik sütunu, satırı tanımlayan bir etikettir; ölçülmüş bir miktar değildir.
5. (i) Herkes aynı değeri taşıdığı için yaşa göre karşılaştırma yapılamaz. (ii) Sonuç yalnız 19 yaşındakiler için geçerli olduğundan genellenebileceği alan daralır.
6. Gözlem birimi: öğrenci (her satır). Değişkenler: `yas` ve `kaygi` (`kod` kimliktir). Hücre örneği: K02'nin `kaygi` değeri 28.
7. Geniş biçimde bir kişi tek satırdır; kişi sayısı satır sayısıdır. Uzun biçimde satır ölçümdür; kişi sayısı için kimlik sütunundaki farklı kodlar sayılır.
8. Gözlem birimi gündür. Satır sayısı kayıt edilen gün sayısını gösterir.
:::

### 3. Konu: Değişken türleri

1. Aşağıdaki değişkenleri kategorik ya da nicel olarak sınıflandır: bölüm, yaş, terapi türü, kaygı puanı, kan grubu.
2. Kardeş sayısı ve boy değişkenlerinden hangisi kesikli, hangisi süreklidir? Neden?
3. Terapi türü 1, 2, 3 olarak kodlanmış. Yazılım bu sütunu sayısal saymış. Sorun nedir? Çözüm nedir?
4. Kaygı bir araştırmada "düşük/orta/yüksek" diye, başkasında 0–100 puanla ölçülüyor. İki araştırmada kaygının türü aynı mıdır?
5. "Süreksiz değişken" ile "kesikli değişken" arasında fark var mıdır?
6. "Bir sütunda sayı varsa değişken niceldir." Bu cümle neden yanlıştır?
7. Doğru yanıt sayısı (0–20) kesikli midir, sürekli midir? Tepki süresi (saniye) için de cevapla.
8. Nicel bir değişkeni "kesikli" yapan şey nedir?
9. Bölüm değişkeninin ("Psikoloji", "Sosyoloji", "Felsefe") kaç öğrencinin hangi bölümde olduğu sayılırsa değişken nicel mi olur?

::: {.callout-note collapse="true" title="Cevaplar (3. Konu)"}
1. Kategorik: bölüm, terapi türü, kan grubu. Nicel: yaş, kaygı puanı.
2. Kardeş sayısı kesiklidir (sayılır, 2,5 kardeş olmaz). Boy süreklidir (ölçülür, iki değer arasında başka değer olabilir).
3. Yazılım kodların ortalamasını hesaplamaya hazır olur ve "ortalama terapi türü 2,1" anlamsız çıkar. Sütun kategorik (nominal) tanımlanır; özet olarak her türün sayısı ve yüzdesi verilir.
4. Hayır. "Düşük/orta/yüksek" kategoriktir (sıralı); 0–100 puan niceldir. Tür, ölçüm biçimine bağlıdır.
5. Hayır, aynı anlama gelir. "Ayrık" da aynıdır.
6. Sayı yalnızca etiket olabilir. 1, 2, 3 diye kodlanmış terapi türü hâlâ kategoriktir.
7. Doğru yanıt sayısı kesiklidir (sayılır). Tepki süresi süreklidir (ölçülür).
8. Değerlerinin sayılarak elde edilmesi ve iki ardışık değer arasında değer almaması.
9. Hayır. Her bölümün öğrenci sayısı sayılabilir ama bölüm değişkeni hâlâ kategoriktir; sayım kategoriyi miktara dönüştürmez, yalnızca grubun büyüklüğünü verir.
:::

### 4. Konu: Ölçme düzeyleri

1. Forma numarasının ortalaması hesaplanabilir mi? Hesaplanırsa anlamlı mıdır? Neden?
2. Aşağıdaki değişkenlerin ölçme düzeyini belirle: kan grubu, eğitim düzeyi (ilkokul–yüksek lisans), sıcaklık (°C), tepki süresi.
3. "20 °C, 10 °C'nin iki katı sıcaktır." Bu cümle neden yanlıştır?
4. A grubunun kaygı puanı ortalaması 30, B grubunun 15. "A iki kat kaygılıdır" denebilir mi? Doğru cümle nedir?
5. Tek bir Likert maddesi (1–5) hangi düzeydedir? Hangi özetler güvenlidir?
6. Birçok maddenin toplanmasıyla oluşan ölçek puanı hangi düzeyde sayılır? Bu kabul neden tartışmalıdır?
7. Yaş "18–24, 25–34, 35–44, 45+" diye toplanmış. Ortalama yaş hesaplanabilir mi? Düzey ne olur?
8. Doğum yılı hangi ölçme düzeyindedir? İki doğum yılı arasındaki fark ve kat oranı anlamlı mıdır?
9. "Medeni durumu 1–4 kodladım, ortalaması 2,1 çıktı." Sorun nedir? Doğru özet nedir?
10. Sıralı ve aralık düzeyi arasındaki temel fark nedir? Bir örnek ver.
11. Hangi ölçme düzeylerinde "kaç kat" yorumu yapılabilir?

::: {.callout-note collapse="true" title="Cevaplar (4. Konu)"}
1. Hesaplanabilir ama anlamsızdır. Forma numarası nominal bir etikettir; ortalaması 15,4 kimseyi anlatmaz.
2. Kan grubu: nominal. Eğitim düzeyi: sıralı. Sıcaklık (°C): aralık. Tepki süresi: oran.
3. Sıcaklık (°C) aralık düzeyindedir; sıfır keyfîdir ve "sıcaklık yok" anlamına gelmez. Oran yorumu yalnız gerçek sıfırı olan değişkenlerde yapılır.
4. Hayır. Ölçeğin sıfırı "hiç kaygı yok" anlamına gelmediği için oran kurulamaz. Doğru cümle: "A grubunun ortalaması 15 puan yüksektir."
5. Sıralıdır. Medyan ve mod güvenlidir.
6. Uygulamada aralık sayılır ve ortalaması alınır. Tartışmalıdır, çünkü madde puanları arasındaki farkların eşit olduğu varsayılır. Toplam puanda oran yorumu yapılmaz.
7. Hayır. Veri gruplanmış olduğu için artık sıralıdır; ayrıntı kaybı geri alınamaz.
8. Aralık düzeyindedir. Yıllar arasındaki fark anlamlıdır; takvimin sıfırı keyfî olduğu için kat oranı anlamlı değildir.
9. Nominal veride kodların ortalaması anlamsızdır. Doğru özet, her kategorinin sayısı ve yüzdesidir.
10. Sıralıda değerler arasındaki farklar eşit olmak zorunda değildir (ilkokul–lise farkı ile lise–lisans farkı aynı olmayabilir). Aralıkta farklar eşittir (10–20 °C farkı 20–30 °C farkıyla aynıdır).
11. Yalnız oran düzeyinde (gerçek sıfırı olan değişkenlerde: boy, yaş, tepki süresi, gelir).
:::

### 5. Konu: Veri sözlüğü

1. Veri sözlüğü neden veri girişi başlamadan hazırlanır?
2. `s1` ve `kaygi_t1` değişken adlarından hangisi daha iyidir? Neden?
3. Bir dosyada 1 = Kadın, başka bir dosyada 1 = Erkek. İki dosya bu farktan habersiz birleştirilirse ne olur? Hangi bilgi bunu önler?
4. Gelirini belirtmeyenlere 0 yazılmış. Ortalama gelire etkisi ne olur?
5. Eksik kodu seçerken nelere dikkat edilir? Haftalık çalışma saati (0–80) için uygun bir kod söyle.
6. Çalışma saati sütununa "6 saat" yazılmış. Sorun nedir?
7. "20 / kadın" yazılmış bir hücrede sorun nedir? Nasıl düzeltilir?
8. Bir veri sözlüğü satırında hangi bilgiler bulunur?
9. Yazılımın otomatik önerdiği tür neden sözlükle doğrulanmalıdır?

::: {.callout-note collapse="true" title="Cevaplar (5. Konu)"}
1. Herkesin aynı sözlüğü kullanması ve veriyi aynı biçimde girmesi için. Sözlük sonradan hatırlanarak değil, baştan hazırlanır.
2. `kaygi_t1`. Anlamlıdır ve kaygının ilk ölçümü olduğunu söyler; `s1` anlamsızdır.
3. Farklı gruplar aynı koda yığılır ve gerçek bir grup farkı kaybolabilir. Değer etiketi bunu önler.
4. Cevap vermeyenler "geliri olmayanlarla" aynı gruba girer ve ortalama gelir aşağı çekilir. Boş cevap eksik kodlanmalıdır.
5. Kod, gerçek değerlerle karışmamalıdır. Haftalık çalışma saati (0–80) için 999 uygundur.
6. Yazılım hücreyi sayı olarak okuyamaz. 6 yazılmalı, birim (saat) sözlüğe gitmelidir.
7. Hücrede iki bilgi var. İki ayrı sütuna bölünmeli: yaş (20) ve cinsiyet (kadın).
8. Ad, açıklama, değerler, birim, düzey ve eksik kod.
9. Yazılım yalnızca sütundaki sayıya bakar. Kodlanmış kategorik bir sütunu sayısal sayabilir ve anlamsız bir ortalama hesaplamaya hazır olur.
:::

### 6. Konu: Veriyi analize hazırlamak

1. Yaş sütununda en büyük değer 250. Ne yaparsın? Peki sözlükteki 17–60 aralığının dışında kalan 62 çıksaydı?
2. "Sigara içmiyorum" yanıtı 0 olarak girilmiş. Bu hücre eksik midir? Silinmeli midir?
3. 1–7 arası bir maddede ters puanlama yanlışlıkla "6 − ham puan" ile yapılmış. Hatayı nasıl yakalarsın? Doğru formül nedir?
4. Diğer öğrenciler haftada 2–20 saat çalışırken bir öğrenci 60 saat bildirmiş; formda da 60 yazıyor ve sözlükte aralık 0–80. Bu değer yalnızca diğerlerinden farklı olduğu için silinir mi?
5. Eksik kodu 99 olan yaş sütununda en büyük değer 99 çıktı. Bu neyi gösterir?
6. Üç kategorili bir değişkenin frekans tablosunda dördüncü bir kod göründü. Bu ne olabilir?
7. Bir ölçeğin 1–5 puanlı bir maddesi ters puanlanacak. 2 puan alan bir kişinin ters puanı kaçtır?
8. Boş bırakılan bir ölçek maddesi toplam puana nasıl girer?
9. Düzeltme yaparken neden orijinal veriyi bozmamak gerekir? Ne kaydedilir?
10. Toplam puan ile ortalama puan arasındaki fark nedir? Hangisi madde ölçeğinin aralığında kalır?

::: {.callout-note collapse="true" title="Cevaplar (6. Konu)"}
1. 250 olanaksızdır: kaynağa dön, düzelt, düzeltilemezse eksik yap; tahminle doldurma. 62 sözlükteki aralığın dışındadır ama olanaksız değildir; kaynak kaydı ve aralığın gerekçesi kontrol edilir. Değer gerçekse ve kayıtlı bir dışlama gerekçesi yoksa veride kalır; 17–60 araştırmanın dahil etme ölçütüyse 62 yaş bu ölçütü karşılamaz.
2. Hayır, eksik değildir. 0 geçerli bir ölçümdür (günde sıfır adet). Silinmez, olduğu gibi kalır.
3. Yeni sütunun en küçük ve en büyük değerine bakılır: 6 − ham ile 7 → −1 ve 1 → 5 çıkar; olması gereken aralık 1–7'dir. Doğru formül 8 − ham puandır.
4. Hayır. 60 saat alışılmadık ama mümkündür; kaynak kaydıyla doğrulanmış ve izin verilen aralıktadır. Yalnızca diğerlerinden farklı olması silme gerekçesi değildir.
5. Eksik kodun yazılımda eksik olarak tanımlanmadığını. 99 gerçek bir yaş gibi okunuyor ve ortalamayı bozuyor.
6. Bir giriş hatası ya da tanımsız bir eksik kodu.
7. 6 − 2 = 4.
8. Sıfır sayılmaz, eksik kalır. Toplam puan hesaplanırken eksik olarak işlenir.
9. Bir yıl sonra "bu sayı neden değişmiş?" sorusuna cevap verebilmek ve gerekirse geri alabilmek için. Hangi satır, hangi değişken, eski değer, yeni değer ve gerekçe kaydedilir.
10. Toplam puan maddelerin toplamıdır ve madde sayısına bağlıdır (10 madde için 10–50). Ortalama puan maddelerin ortalamasıdır ve madde ölçeğinin aralığında kalır (1–5).
:::

---

::: {.callout-tip}
## Dinleyerek tekrar

Bu notun konularını [Ses 1 — Veri yapısı](https://drive.google.com/drive/folders/1HdJgyzj0fEquA3zM7CFzQd9tWKgfDBVG?usp=sharing){target="_blank"} anlatır. Sesli özetler yapay zekâ ile üretilmiştir ve bu notun yerine geçmez; fark olduğunda yazılı not esastır.
:::
