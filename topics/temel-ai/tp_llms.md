---
title: LLM - İlk Yılları
subtitle: BİM444 — Hafta 12 · Part 1
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-04-20
execute:
  echo: false
---

## Büyük Dil Modelleri

---

## Çeviri Yazılımından Dil Modellerine

**Dersin başında bir soru sormuştuk:**  
> 2000'li yıllarda çeviri yazılımı nasıl yapılırdı?

Bu soruyu şimdi daha geniş bir zaman dilimiyle yeniden ele alıyoruz.

---

## LLM Nedir?

**Büyük Dil Modeli (Large Language Model)**, çok büyük metin koleksiyonlarından dil örüntülerini öğrenen ve verilen bağlama göre bir sonraki kelime/parça olasılıklarını tahmin ederek metin üreten modeldir.

Bugünkü soru:

> Dil için kural yazmaktan, dili büyük ölçekte veriden öğrenen modellere nasıl geldik?

::: {.notes}
Bu hafta 1950'lerden 2010'lara uzanan bir yolculuk yapacağız. Her durağı aynı dört soruyla okuyacağız.

Bu şablonu öğrenmek önemli — çünkü teknik bilgiden daha kalıcı. On yıl sonra spesifik teknikler değişmiş olacak ama "bu sistemi kim hangi sorunu çözmek için kurdu, nerede tıkandı" sorusu her yeni teknolojiyi değerlendirmek için kullanılabilir.

Bugün beş dönem var. 1950'lerde başlıyoruz, 2011'de bitiriyoruz. Transformer ve sonrası bir sonraki haftanın konusu.
:::

---

## Zaman Çizgisi

| Dönem | Yıllar | Yaklaşım |
|---|---|---|
| I | 1950–1966 | Kuralcı makine çevirisi |
| II | 1966–1985 | Sembolik NLP ve bilgi temsili |
| III | 1985–2000 | İstatistiksel dönüş |
| IV | 2000–2010 | Denetimli öğrenme ve yapısal tahmin |
| V | 2003–2011 | Sinir ağlarına geçiş |

::: {.notes}
Beş dönemin her birinde ana fikir, kullanılan araçlar ve nihai çöküş farklı. Ama hepsinin ortak bir gerilimi var: dil hem sistematik hem de muazzam ölçekte değişkendir. Sistematik yanı kural tabanlı yaklaşımları çekici kıldı; değişkenliği ise onları kırdı.

Paradigmalar birbirini tamamen silmez. n-gram dil modelleri bugün hâlâ bazı bağlamlarda kullanılıyor. Her dönem kendi kapsamında yerini koruyor; ama ana akımın yerini kaybediyor.
:::

---

---

## I · 1950–1966: Kurallarla Çeviri

**Problem:** Soğuk Savaş'ın acil talebi — Rusça teknik belgeleri hızla çevirmek

- Georgetown–IBM deneyi (1954): 6 kural, 250 kelime, 60 cümle
- Kamuoyuna verilen mesaj: "3–5 yıl içinde çözülür"
- Shannon (1948): dil olasılıksal bir kanal
- Chomsky (1957): dil sonlu kurallardan sonsuz cümle üreten biçimsel sistem

::: {.notes}
1954 yılında New York’ta yapılan Georgetown-IBM deneyi, makine çevirisi tarihinin erken ve sembolik dönüm noktalarından biri oldu. IBM araştırmacıları ile Georgetown Üniversitesi’nden dilbilimciler, Rusça cümleleri İngilizceye çevirebilen bir sistemi basına tanıttılar. Sistem oldukça sınırlıydı: yalnızca altı dilbilgisel kural ve yaklaşık iki yüz elli kelimelik bir sözlük kullanıyordu. Buna rağmen gösteri etkileyici bulundu. Gazeteciler bu teknolojiyi geleceğin habercisi olarak yorumladı; finansörler ise dilin makineler tarafından işlenebileceği fikrine ciddi biçimde yatırım yapılabilir bir alan olarak bakmaya başladı.

Bu iyimserliğin arkasında dönemin iki güçlü teorik çerçevesi vardı. Claude Shannon’ın 1948’de geliştirdiği bilgi teorisi, iletişimi sembollerin kodlanması, iletilmesi ve çözülmesi problemi olarak ele alıyordu. Noam Chomsky’nin 1957’de ortaya koyduğu üretici gramer yaklaşımı ise dilin biçimsel kurallarla tanımlanabileceğini savunuyordu. Bu iki yaklaşım birlikte düşünüldüğünde oldukça çekici bir sonuç doğuyordu: Eğer dil sembolik ve kurallı bir yapıysa, o hâlde hesaplanabilir; hesaplanabiliyorsa da makineleştirilebilir.

Ancak Georgetown-IBM gösterisinin başarısı, gerçek dil probleminin karmaşıklığını temsil etmiyordu. Sisteme verilen cümleler dikkatle seçilmişti. Belirsiz sözdizimsel yapılar, deyimler, bağlama bağlı anlamlar ve sözlük dışında kalan kelimeler sistemin kapsamı dışındaydı. Dolayısıyla gösteri, genel amaçlı bir çeviri sisteminden çok, kontrollü koşullarda çalışan dar kapsamlı bir prototipti.

Bu olay, yapay zekâ tarihinde sık tekrar eden bir gerilimin erken örneklerinden birini gösterir: etkileyici bir demo ile gerçek dünyada çalışan sağlam bir sistem aynı şey değildir. Georgetown-IBM deneyi, makine çevirisinin mümkün olabileceğine dair güçlü bir beklenti yarattı; fakat aynı zamanda dilin yalnızca kurallar ve sözlüklerle çözülemeyecek kadar bağlamsal, belirsiz ve esnek bir yapı olduğunu da dolaylı biçimde ortaya koydu.
:::

---

## ALPAC Raporu: İlk Büyük Hayal Kırıklığı (1966)

**Tıkanma:** Vaat ile gerçek arasındaki uçurum

- ABD hükümeti 1964'te bağımsız değerlendirme istedi. Sonuç:

- Vaat edilen otomatik çeviri, gerçek sistem performansına dönüşmedi.

- İnsan çevirisine göre daha yavaş, daha pahalı, daha düşük kaliteli
    
- Kural tabanı büyüdükçe istisnalar kontrolden çıktı
    
- Her dil çifti ayrı uzman emeği gerektirdi
    
- Sözcüksel, yapısal ve bağlamsal belirsizlik çözülemedi

---

**Kritik sonuç**

ABD’de makine çevirisi araştırmaları yaklaşık on yıl yavaşladı.

**Uzun vadeli etki**

Alan, hızlı uygulama vaadinden temel hesaplamalı dilbilim araştırmalarına yöneldi.

::: {.notes}  
1966’da yayımlanan ALPAC raporu, makine çevirisi tarihindeki ilk büyük kırılma noktalarından biridir. 1954 Georgetown-IBM gösterisinden sonra oluşan beklenti, dilin kurallar ve sözlüklerle çözülebileceği yönündeydi. Ancak 1960’lara gelindiğinde bu vaat pratik sistemlere dönüşmedi. ABD hükümeti bu nedenle alandaki ilerlemeyi değerlendirmek üzere bağımsız bir komite kurdu. Raporun bulgusu netti: Mevcut makine çevirisi sistemleri insan çevirisinden daha hızlı ve ucuz değildi; aksine çoğu durumda daha yavaş, daha pahalı ve daha düşük kaliteliydi.

Sorun yalnızca dönemin bilgisayarlarının zayıflığı değildi; yaklaşımın kendisi ölçeklenemiyordu. Kural tabanlı sistemlerde her yeni dilbilgisel kural yeni istisnalar doğuruyor, bir hatayı düzeltmek için eklenen kural başka yapılarda yeni hatalar üretiyordu. Ayrıca bir dil çifti için yazılan kurallar başka bir dil çiftine kolayca taşınamıyordu. Rusça-İngilizce için geliştirilen yapı, Fransızca-İngilizce veya Almanca-İngilizce için yeniden kullanılabilir bir çözüm sağlamıyordu. Bu durum her dil çifti için ayrı sözlük, ayrı kural ve ayrı uzman emeği gerektiriyordu.

En temel engel belirsizlikti. Kelimeler bağlama göre farklı anlamlar kazanıyor, cümle yapıları birden fazla şekilde çözümlenebiliyor, konuşanın amacı anlamı değiştirebiliyordu. Deterministik kurallar bu esnekliği yakalayamadı. ALPAC raporu kısa vadede ABD’de makine çevirisi araştırmalarının yavaşlamasına yol açtı; fakat uzun vadede alanı daha gerçekçi bir yöne çekti. Hızlı ürün vaadi yerine temel hesaplamalı dilbilim, biçimsel sözdizimi ve dilin yapısal analizi gibi konulara yatırım yapılması gerektiğini gösterdi.  
:::

---

---

## II · 1966–1985: Sembolik NLP

**Makine çevirisinden sınırlı anlama sistemlerine**

**Problem:**  
Genel çeviri zor; peki daha dar bir alanda “anlama” mümkün mü?

**İki ana hat**

- **Diyalog sistemleri:** ELIZA (1966), SHRDLU (1972)
- **Sözdizimsel ayrıştırma:** parse tree, bilgi tabanları

**Temel varsayım**

Dil kuralları + açık kodlanmış bilgi tabanı = anlayan sistem

::: {.notes}
ALPAC raporundan sonra araştırmacılar, genel amaçlı makine çevirisinin kısa vadede çözülemeyeceğini gördü. Bu yüzden hedef değişti: Bütün dili çevirmek yerine, daha sınırlı bir alanda gerçekten “anlayan” sistemler kurulabilir mi? Sembolik NLP dönemi bu soruya verilen erken cevaplardan oluşur. Burada amaç, dili istatistiksel örüntüler olarak değil, açık kurallar, sözdizimsel yapılar ve bilgi temsilleri üzerinden işlemektir.

Bu dönemde iki ana araştırma hattı öne çıktı. İlk hat diyalog sistemleriydi. ELIZA, yüzeysel kalıp eşleme ile bir terapist gibi konuşabiliyor; SHRDLU ise bloklar dünyası gibi çok sınırlı bir ortamda komutları yorumlayıp eyleme dönüştürebiliyordu. İkinci hat ise sözdizimsel ayrıştırma ve bilgi tabanlarıydı. Cümleler parse tree yapılarıyla çözümleniyor, ardından bu yapılar açıkça kodlanmış dünya bilgisiyle ilişkilendirilmeye çalışılıyordu.

Bu yaklaşımın temel varsayımı şuydu: Eğer dilin kurallarını ve dünyanın bilgisini yeterince açık biçimde kodlarsak, sistem anlama benzeri bir davranış gösterebilir. Chomsky’nin üretici gramer anlayışı ile uzman sistemler literatürü bu noktada aynı çizgide birleşti. Ancak bu yaklaşımın sınırı da aynı yerdeydi: Sistemler dar alanlarda etkileyici görünebiliyor, fakat alan genişledikçe kural ve bilgi tabanı hızla yönetilemez hâle geliyordu.
:::

---

## ELIZA ve SHRDLU: İki Farklı “Anlama”

**Aynı etki, farklı mekanizma**

**ELIZA:**  
Kalıp eşleştirme; anlamsal model yok.

```text
Girdi:  "Ben mutsuzum"
Kural:  IF "Ben X'im" → "Neden X'sin?"
Yanıt:  "Neden mutsuzsun?"
```

**SHRDLU:**  
Sınırlı bir dünyada bağlam takibi.

```text
Komut: "Kırmızı küpü yeşil kutuya koy"

→ Sistem sahnedeki nesneleri izler
→ Birden fazla yeşil kutu varsa sorar:
   "Hangi yeşil kutu?"
```



::: {.notes}  
ELIZA, 1966’da Joseph Weizenbaum tarafından geliştirildi. Sistemin anlamsal bir modeli yoktu; kullanıcının cümlesindeki belirli kalıpları yakalıyor ve bu kalıplara uygun hazır dönüşümler üretiyordu. Örneğin kullanıcı “Ben mutsuzum” dediğinde sistem bunu “Ben X’im” kalıbı olarak görüp “Neden X’sin?” biçiminde geri döndürebiliyordu. Buna rağmen bazı kullanıcılar ELIZA’nın kendilerini gerçekten anladığını düşündü. Bu durum, yapay zekâ tarihinde “anlama illüzyonu”nun erken örneklerinden biridir.

SHRDLU ise farklı bir noktada durur. Terry Winograd tarafından geliştirilen sistem, bloklar dünyası gibi çok sınırlı ve önceden tanımlanmış bir ortamda çalışıyordu. Bu dünyada nesneler, renkler, konumlar ve eylemler açıkça temsil ediliyordu. Bu nedenle sistem “Kırmızı küpü yeşil kutuya koy” gibi bir komutu yalnızca kelime kalıbı olarak değil, sahnedeki nesnelerle ilişkilendirerek işleyebiliyordu. Eğer ortamda birden fazla yeşil kutu varsa, belirsizliği fark edip “Hangi yeşil kutu?” diye sorabiliyordu.

Bu iki sistem arasındaki fark, sembolik NLP’nin temel gerilimini gösterir. ELIZA geniş bir kullanıcı girdisi aralığında çalışıyor gibi görünür, fakat aslında anlam temsil etmez. SHRDLU ise gerçekten bağlam takip eder, referans çözer ve önceki komutları dikkate alır; fakat bunu yalnızca çok dar, kapalı ve yapay bir dünyada yapabilir. Yani ELIZA’nın gücü yanılsamadan, SHRDLU’nun gücü ise sınırlandırılmış dünyadan gelir.  
:::

---

## Bilgi Edinimi Darboğazı

- Her alan için bilgi uzmanlar tarafından elle kodlanmalıydı.
- Uzmana erişim sınırlıydı
- Her yeni alan ayrı emek gerektiriyordu
- Domain dışı genelleme yoktu
- Gerçek dünya istisnaları kural tabanını büyütüyordu
- **Brittleness:** Sistem kapsam dışına çıkınca çöküyordu

> Sorun yalnızca sistemin dünyayı görememesi değildi;  
> Dünyaya dair bilgiyi taşıyacak ölçeklenebilir bir temsil yoktu.

::: {.notes}
Sembolik NLP’nin en büyük sınırı, uzman sistemler literatüründe “knowledge acquisition bottleneck” olarak adlandırılan bilgi edinimi darboğazıydı. Bu yaklaşımda sistemin çalışabilmesi için alan bilgisinin uzmanlar tarafından açıkça kodlanması gerekiyordu. Örneğin bir hastane konuşma sistemi kurmak istiyorsanız, doktorlarla görüşmeler yapmanız, tıbbi kavramları tanımlamanız, yüzlerce kural yazmanız ve bu kuralların birbirleriyle çelişmediğinden emin olmanız gerekiyordu.

Asıl problem, bu emeğin başka alanlara taşınamamasıydı. Tıp için kurulan bilgi tabanı hukuk alanında işe yaramıyor, hukuk için yazılan kurallar finans alanına genellenemiyordu. Her domain yeni uzmanlar, yeni kavramlar, yeni kurallar ve yeni istisnalar demekti. Bu yüzden sistemler dar alanlarda çalışabiliyor, fakat kapsam genişlediğinde kırılgan hâle geliyordu. SHRDLU’nun bloklar dünyasında başarılı olup daha geniş dünyalara taşındığında çökmesi bu sınırın tipik örneğidir.

Bu darboğaz sonraki paradigma değişiminin ipucunu verdi. Eğer bilgiyi uzmanlara elle yazdırmak yerine büyük metin koleksiyonlarından otomatik olarak çıkarabilirsek, ölçekleme problemi kısmen aşılabilirdi. Böylece odak, açıkça yazılmış kurallardan veriden öğrenmeye doğru kaymaya başladı. Bu geçiş, sembolik NLP’den istatistiksel NLP’ye giden yolu açtı.

:::


---

## III · 1985–2000: İstatistiksel Dönüş

**Bilgiyi elle kodlamaktan veriden öğrenmeye**

**Yeni varsayım**

Büyük korpuslardaki frekans dağılımları, dil hakkındaki bilgiyi taşır.

- Kural yazmak yerine: frekans say
- El yapımı bilgi tabanı yerine: korpustan olasılık öğren
- Temel çerçeve: **gürültülü kanal modeli**

$$
\operatorname*{argmax}_e P(e \mid f)
=
\operatorname*{argmax}_e P(f \mid e) \cdot P(e)
$$

::: {.notes}
1980’lerin sonuna gelindiğinde sembolik NLP’nin temel sınırı netleşmişti: Bilgiyi uzmanlara elle kodlatmak ölçeklenmiyordu. İstatistiksel dönüş bu noktada yeni bir varsayım getirdi. Dil hakkındaki bilgiyi açık kurallar ve bilgi tabanları olarak yazmak yerine, büyük metin koleksiyonlarındaki frekans dağılımlarından öğrenebiliriz. Yani sistem artık “hangi kural uygulanmalı?” diye değil, “bu yapı veride ne kadar olası?” diye bakmaya başladı.

Bu dönüşün merkezinde Shannon’ın bilgi teorisinden gelen gürültülü kanal modeli vardı. Makine çevirisi açısından düşünürsek, elimizde gözlemlenen bir kaynak cümle var: örneğin Fransızca cümle \(f\). Amacımız, bunun arkasındaki en olası İngilizce cümleyi \(e\) bulmak. Model bunu iki parçaya ayırır: \(P(e)\), İngilizce cümlenin kendi içinde ne kadar olası olduğunu ölçer; \(P(f \mid e)\), bu İngilizce cümlenin Fransızca cümleye dönüşme olasılığını ölçer. Böylece çeviri problemi, elle yazılmış kurallardan çok, veriden tahmin edilen olasılıklara dayanır.

Brown ve IBM ekibinin 1990’daki çalışmaları bu yaklaşımı somutlaştırdı. Sistem, paralel korpuslardan yani eşleştirilmiş Fransızca-İngilizce cümle çiftlerinden hizalama istatistiklerini öğreniyordu. Hangi kelimenin hangi kelimeyle eşleştiği, hangi yapıların birlikte görüldüğü ve hangi çevirilerin daha olası olduğu artık uzman tarafından tek tek yazılmıyor; veriden çıkarılıyordu. Bu, NLP’de sembolik dönemden istatistiksel döneme geçişin temel kırılma noktasıdır.
:::

---

## HMM ve Yaygın İstatistiksel Araçlar

**Gizli yapıyı gözlenen kelimelerden tahmin etmek**

**Örnek: Sözcük türü etiketleme**

```text
Gözlemlenen kelimeler: ["Bu",  "kedi", "uyudu"]
Gizli etiketler:       [DET,   NOUN,   VERB]
```

**HMM iki olasılığı birlikte kullanır**

- **Emission:** Hangi etiket hangi kelimeyi üretir?
- **Transition:** Hangi etiket hangi etiketi takip eder?
- **Viterbi:** En olası etiket dizisini bulur

**Dönemin temel araçları**

n-gram LM · HMM · PCFG · Viterbi · EM algoritması · IBM Modelleri 1–5

::: {.notes}
Gizli Markov Modeli, gözlemlediğimiz kelimelerin arkasındaki gizli yapıyı tahmin etmek için kullanıldı. Sözcük türü etiketleme örneğinde elimizde yalnızca kelime dizisi vardır: “Bu kedi uyudu.” Sistem bu kelimelerin arkasındaki etiket dizisini bulmaya çalışır: belirteç, isim, fiil gibi. Buradaki “gizli” ifade, etiketlerin doğrudan gözlemlenmemesinden gelir. Model, kelimeleri değil; kelimelerin arkasındaki olası etiket dizisini tahmin eder.

HMM bu tahmini iki olasılıksal bileşenle yapar. Emission olasılığı, belirli bir etiketin belirli bir kelimeyle ne kadar ilişkili olduğunu gösterir. Örneğin VERB etiketi “uyudu” kelimesini üretmeye daha yatkındır. Transition olasılığı ise etiketler arasındaki geçişleri modeller. Örneğin DET etiketinden sonra NOUN gelmesi, DET etiketinden sonra VERB gelmesinden daha olası olabilir. Bu iki bilgi elle yazılmaz; etiketlenmiş veriden öğrenilir.

Viterbi algoritması, tüm olası etiket dizilerini tek tek kaba kuvvetle denemek yerine dinamik programlama kullanarak en olası diziyi verimli biçimde bulur. Bu yüzden HMM yalnızca teorik bir model değil, pratik NLP sistemlerinde hesaplanabilir bir araç hâline geldi. Aynı dönemde n-gram dil modelleri, PCFG’ler, EM algoritması ve IBM Modelleri 1–5 gibi yöntemler de dil işleme problemlerine istatistiksel bir çerçeve kazandırdı. Özellikle IBM Modelleri, kelime hizalama problemini EM ile öğrenerek 2000’lerdeki öbek tabanlı istatistiksel makine çevirisinin altyapısını oluşturdu.
:::

---

## İstatistiksel Yaklaşımın Sınırları

**Frekans temelli modellerin genelleme problemi**

**Tıkanma:**  
İstatistiksel NLP üç yapısal sınıra çarptı.

- **Veri seyrekliği:** Görülmemiş diziler → sıfır olasılık
- **Kısa bağlam:** Trigram yalnızca 3 kelimelik pencere görür
- **Anlamsal körlük:** Benzer kelimeler bağımsız semboller gibi işlenir

**Kritik sonuç**

Model, gördüğü örüntüleri sayabilir; fakat benzerlik, uzun bağımlılık ve anlam genellemesi kuramaz.

::: {.notes}
İstatistiksel NLP, sembolik sistemlerin bilgi edinimi darboğazını önemli ölçüde aşmıştı; çünkü artık kurallar elle yazılmıyor, büyük korpuslardan olasılıklar öğreniliyordu. Ancak bu yaklaşımın da kendi yapısal sınırları vardı. İlk sorun veri seyrekliğiydi. Eğitim verisinde hiç görülmemiş bir kelime dizisiyle karşılaşıldığında model bu dizinin olasılığını sıfır kabul edebiliyordu. Laplace düzeltmesi veya Kneser-Ney smoothing gibi teknikler bu sorunu kısmen hafifletti; fakat bunlar temel problemi çözmekten çok olasılık dağılımını daha kullanılabilir hâle getiren yamalardı.

İkinci sınır kısa bağlam problemiydi. n-gram modelleri yalnızca sabit uzunlukta bir pencereye bakar. Örneğin trigram model en fazla son iki kelimeye göre üçüncü kelimeyi tahmin eder. Bu, yerel kelime örüntüleri için işe yarayabilir; fakat cümle genelindeki uzun bağımlılıkları yakalayamaz. “Komşunun köpeğinin kuyruğunu kesen çocuk okula gitti” gibi bir cümlede özne ile yüklem arasında uzun bir mesafe vardır. Trigram bu tür yapısal ilişkileri göremez; çünkü modelin belleği birkaç kelimeyle sınırlıdır.

Üçüncü ve daha derin sınır anlamsal körlüktür. Klasik istatistiksel modellerde kelimeler ayrı semboller olarak ele alınır. Bu nedenle “kedi” ve “köpek” arasında bir yakınlık, “kedi” ve “kediciğim” arasında biçimsel ya da anlamsal bir ilişki modelin temsilinde doğal olarak kodlanmaz. Model “kedi” üzerinde öğrendiği bir örüntüyü “köpek”e kolayca transfer edemez. Bu genelleme tavanı, sinir ağı tabanlı NLP’nin temel motivasyonlarından biri oldu: Kelimeleri bağımsız semboller olarak değil, anlam ilişkilerini taşıyan sürekli vektörler olarak temsil etmek.
:::

---

## IV · 2000–2010: Yapısal Tahmin

- İstatistiksel modeller dağılımları öğrendi; fakat birçok NLP görevi yapısal çıktı gerektiriyordu.
- **NER:** “New York Times” → B-ORG I-ORG I-ORG
- **POS tagging:** Her kelimeye sözcük türü etiketi verme
- **Bilgi çıkarımı:** Metinden kişi, kurum, tarih, ilişki yakalama
- **Etiket tutarlılığı:** Geçersiz geçişleri cezalandırma

**Yeni varsayım**

Özellik mühendisliği + ayrıştırıcı model  
→ elle yazılmış kurallardan daha esnek sistemler

::: {.notes}
2000–2010 arası dönem, NLP’de ayrıştırıcı öğrenme ve yapısal tahminin öne çıktığı dönemdir. Önceki üretici modeller, dilin nasıl üretildiğini modellemeye çalışıyordu. Ayrıştırıcı modeller ise daha doğrudan bir soru sordu: Bütün dili modellemek zorunda mıyız? Çoğu görevde amacımız tüm dil dağılımını öğrenmek değil, verilen girdiye en doğru etiketi ya da etiket dizisini atamaktır. Örneğin adlandırılmış varlık tanımada “New York Times” ifadesinin bir kurum adı olduğunu bulmak istiyoruz; sistemin bütün İngilizceyi üretmesini istemiyoruz.

Bu görevlerde problem tekil sınıflandırmadan farklıdır, çünkü çıktı bir yapı hâlindedir. Bir cümledeki her kelimeye ayrı ayrı etiket vermek yetmez; etiketlerin birlikte tutarlı olması gerekir. Örneğin “New York Times” ifadesinde ilk kelime B-ORG, sonraki kelimeler I-ORG olmalıdır. B-ORG’dan hemen sonra B-PER gelmesi çoğu durumda tutarsız bir geçiştir ve model tarafından cezalandırılmalıdır. Bu nedenle yapısal tahmin, yalnızca yerel kelime özelliklerine değil, tüm etiket dizisinin ortak olasılığına veya skoruna bakar.

Bu dönemin temel yaklaşımı, elle yazılmış katı kurallar yerine özellik mühendisliğiyle desteklenen ayrıştırıcı modeller kullanmaktı. Kelimenin büyük harfle başlaması, çevresindeki kelimeler, ekler, önceki etiketler, sözlük eşleşmeleri gibi özellikler modele veriliyor; model de en tutarlı etiket dizisini seçiyordu. Böylece sembolik dönemdeki açık kurallar tamamen terk edilmedi, fakat öğrenilebilir istatistiksel yapılar içine taşındı. Bu çizgi CRF, maksimum entropi modelleri ve yapısal SVM gibi yöntemlerle sinir ağı öncesi NLP’nin güçlü mühendislik paradigmasını oluşturdu.
:::

---

## CRF: HMM’in Yapısal Aşılışı

**HMM’in kısıtı:**  
Her kelime yalnızca o andaki gizli duruma bağlıdır.

**CRF’in çözümü:**  
Tüm cümleyi görerek etiket dizisini birlikte tahmin eder.


- HMM: üretici model
- CRF: ayrıştırıcı model
- HMM: sınırlı gözlem varsayımı
- CRF: zengin özelliklerle koşullu tahmin
- HMM: yerel bağımlılıklar
- CRF: tüm etiket dizisinin tutarlılığı



::: {.notes}
HMM’in temel sınırlaması bağımsız gözlem varsayımıdır. Modelde her kelimenin olasılığı yalnızca o andaki gizli etikete bağlı kabul edilir. Bu nedenle bir kelime değerlendirilirken cümlenin geri kalanındaki güçlü bağlamsal ipuçları doğrudan birlikte kullanılamaz. HMM dizi yapısını transition olasılıklarıyla kısmen yakalar; fakat gözlem özellikleri bakımından oldukça sınırlıdır.

CRF problemi farklı kurar. Tüm cümle gözlemlendikten sonra, olası etiket dizileri üzerinde koşullu bir dağılım tanımlar. Böylece model yalnızca tek kelimeye değil, bütün gözlem dizisinden çıkarılan özelliklere bakabilir. Kelime biçimi, büyük harf kullanımı, ekler, önceki ve sonraki kelimeler, ayrıca etiket geçişleri aynı model içinde birlikte değerlendirilebilir.

Bu yüzden CRF, 2000’lerde dizi etiketleme görevlerinde baskın yöntemlerden biri oldu. Buradaki önemli kırılma şudur: Sistem elle yazılmış katı kurallara dönmez, fakat HMM gibi dar bağımsızlık varsayımlarına da sıkışmaz. Özellik mühendisliği ile zenginleştirilmiş ayrıştırıcı bir model kullanarak tüm etiket dizisini tutarlı biçimde seçer.
:::

## CRF Örneği: Adlandırılmış Varlık Tanıma

**Görev:** : Cümledeki kurum adını tutarlı etiket dizisiyle bulmak

```text
Cümle: "New York Times reported..."

Hedef:
New     York    Times   reported
B-ORG   I-ORG   I-ORG   O
```

**CRF’in kullandığı ipuçları**

- “New York” birlikte sık görülür
- Kelimeler büyük harfle başlar
- “Times” kurum adlarında sık geçer
- B-ORG → I-ORG geçişi tutarlıdır
- I-ORG → O geçişi varlık sonunu gösterir


::: {.notes}
Adlandırılmış varlık tanıma, CRF’in neden etkili olduğunu göstermek için iyi bir örnektir. “New York Times reported...” cümlesinde amaç, “New York Times” ifadesinin bir kurum adı olduğunu bulmaktır. Bu görevde her kelimeye bağımsız etiket vermek yeterli değildir; etiketlerin birlikte tutarlı bir yapı oluşturması gerekir.

HMM bu durumda “New” kelimesini daha yerel bir çerçevede değerlendirirken, CRF bütün cümleden gelen özellikleri birlikte kullanabilir. “New York” ifadesinin birlikte görülmesi, kelimelerin büyük harfle başlaması, “Times” kelimesinin gazete veya kurum adlarında bulunması ve B-ORG → I-ORG geçişinin tutarlı olması aynı anda modele girer. Bu özellikler tek başına kesin karar vermez; fakat birlikte yüksek skorlu bir etiket dizisi oluşturur.

Bu örnekte CRF’in yaptığı şey, her kelime için ayrı ayrı en iyi etiketi seçmek değildir. Model olası tüm etiket dizilerini karşılaştırır ve cümle genelinde en tutarlı olan diziyi seçer: B-ORG, I-ORG, I-ORG, O. Bu, yapısal tahminin temel mantığıdır.
:::

---

## Phrase-Based SMT: Kelimeden Öbeğe

**Çeviri birimi değişti: kelime → öbek**

| Model | Çeviri birimi | Katkı |
|---|---|---|
| IBM Modelleri 1–5 | Kelime | Hizalama istatistikleri |
| Phrase-Based SMT | Öbek | Daha doğal ve akıcı çeviri |

**Neyi düzeltti?**

- Kelime kelime çevirinin katılığını azalttı
- Deyimsel ve çok kelimeli ifadeleri daha iyi yakaladı
- Yerel yeniden sıralama ile hedef dile daha uygun çıktı üretti



::: {.notes}
İstatistiksel makine çevirisinde önemli bir sonraki adım, çeviri birimini kelimeden öbeğe taşımaktı. IBM Modelleri 1–5, kaynak ve hedef dildeki kelimeler arasında hizalama istatistikleri öğreniyordu. Bu, kural tabanlı sistemlere göre büyük bir ilerlemeydi; fakat kelime düzeyinde kalmak ciddi bir sınır oluşturuyordu. Çünkü diller arasında sözcük sırası farklıdır ve birçok ifade kelime kelime çevrildiğinde doğal sonuç vermez.

Phrase-Based SMT bu sorunu çeviri birimini genişleterek ele aldı. Artık sistem yalnızca tek tek kelimeleri değil, birkaç kelimelik öbekleri de çeviri birimi olarak kullanabiliyordu. Örneğin “New York” iki ayrı kelime gibi değil, birlikte ele alınan bir ifade gibi işlenebilir. Benzer biçimde deyimsel ya da kalıplaşmış ifadeler de kelime kelime parçalanmadan çevrilebilir. Bu yaklaşım, çevirinin hem doğruluğunu hem de akıcılığını artırdı.

Bu modeller yalnızca hangi öbeğin hangi öbeğe karşılık geldiğini öğrenmekle kalmadı; öbeklerin hedef dilde hangi sırayla dizilmesi gerektiğini de modelledi. Yerel yeniden sıralama mekanizması sayesinde çıktı, kaynak dilin kelime sırasına daha az bağımlı hâle geldi. Koehn, Och ve Marcu’nun 2003 çalışması bu yaklaşımı sistematikleştirdi; Moses gibi açık kaynak çerçevelerle Phrase-Based SMT, 2000’lerin sonuna kadar Google Translate dahil birçok endüstriyel sistemin temel mimarisi hâline geldi.
:::

---
 
## 2006 NIST Değerlendirmesi: SMT’nin Güç Gösterisi

**Kural tabanlı çeviriden veri ölçekli çeviriye geçiş**

**Kırılma noktası:**  
Google’ın istatistiksel makine çevirisi sistemi, NIST MT-06 değerlendirmesinde güçlü sonuç aldı.

- Görevler: Arapça → İngilizce, Çince → İngilizce
- Ölçüt: İnsan referans çevirilerine yakınlık
- Yaklaşım: Büyük paralel veri + istatistiksel modelleme
- Sonuç: SMT, yalnızca akademik değil, endüstriyel olarak da baskın hâle gelmeye başladı
- İyi çeviri için kural değil,  veri ve daha iyi olasılıksal modelleme gerekiyordu.

::: {.notes}
2006 NIST Machine Translation Evaluation, istatistiksel makine çevirisi açısından önemli bir görünürlük anıydı. NIST’in bu değerlendirmeleri, makine çevirisi sistemlerinin insan referans çevirilerine ne kadar yaklaştığını ölçmek için düzenleniyordu. MT-06’da odak özellikle Arapça-İngilizce ve Çince-İngilizce çeviri görevleriydi. Bu değerlendirme, araştırma algoritmalarının ve sistem çıktılarının karşılaştırıldığı bir benchmark işlevi gördü.

Bu değerlendirmede Google’ın istatistiksel makine çevirisi sistemi çok güçlü sonuçlar aldı. Kritik nokta yalnızca bir sistemin yarışmayı kazanması değildi; bu sonuç, alanın yönünü gösteriyordu. Kural tabanlı sistemlerde uzmanlar dilbilgisel kurallar ve sözlükler yazarken, SMT yaklaşımı büyük paralel korpuslardan çeviri olasılıklarını öğreniyordu. Böylece çeviri kalitesindeki ilerleme, elle yazılmış kuralların inceltilmesinden çok veri ölçeği, hizalama istatistikleri ve olasılıksal modelleme kapasitesine bağlandı.

Bu olay, 2000’lerin ortasında makine çevirisinde güç dengesinin değiştiğini gösterdi. Phrase-Based SMT zaten akademik alanda güçlüydü; fakat NIST değerlendirmeleri ve Google’ın başarısı, bu paradigmanın endüstriyel ölçekte de çalışabileceğini görünür kıldı. Bu yüzden 2006 değerlendirmesi, kural tabanlı çeviriden veri merkezli makine çevirisine geçişin sembolik kırılma noktalarından biri olarak anlatılabilir.
:::

---

## Özellik Mühendisliği Darboğazı

**Kuraldan sonra gelen yeni sınırlama**

**Tıkanma:**  
Bilgi artık kurallarda değil, seçilen özelliklerdeydi.

- Hangi özelliğin önemli olduğuna uzman karar verir
- Yeni dil / domain → yeniden feature tasarımı
- Transfer yok
- Özellikler hâlâ sembolik

> Kural yazmayı bıraktık — ama neyi öğreneceğini hâlâ biz söylüyorduk.

::: {.notes}
İstatistiksel ve yapısal modeller, sembolik dönemin açık kural yazma problemini çözdü. Ancak bu çözüm yeni bir darboğaz yarattı: özellik mühendisliği. Artık “kural nedir?” sorusu yerine “hangi feature modele verilmeli?” sorusu ortaya çıktı. Büyük harf mi önemli, ekler mi, komşu kelimeler mi — bu seçimler yine uzman bilgisi gerektiriyordu.

Bu yaklaşımın temel sorunu transfer edilememesiydi. Bir domain için çalışan feature seti başka bir domain’de işe yaramıyordu. Her yeni problemde tekrar tasarım gerekiyordu. Yani ölçeklenebilirlik problemi ortadan kalkmadı; sadece biçim değiştirdi.

Bu noktada kritik soru ortaya çıktı: Modelin hangi özelliklere bakması gerektiğini de öğrenmesini sağlayabilir miyiz? Bu soru sinir ağı tabanlı yaklaşımların doğrudan motivasyonu oldu.
:::

---

## Sinir Ağlarına Geçiş: Temsil Problemi

**Asıl sorun model değil, temsil**

**Problem**

- Seyreklik: görülmemiş kombinasyonlara sıfır bilgi
- Anlamsal körlük: benzer kelimeler bağımsız

**Ortak kök**

Kelimeler **one-hot vektör** ile temsil ediliyor

**Çözüm**

Öğrenilmiş sürekli vektörler → **dağıtık temsil**

::: {.notes}
İstatistiksel modellerin iki temel limiti vardı: seyreklik ve anlamsal körlük. Eğitimde görülmeyen kombinasyonlar için model tahmin yapamıyor, ayrıca benzer kelimeler arasında hiçbir ilişki kuramıyordu.

Bu iki problemin ortak nedeni temsil biçimiydi. One-hot vektörde her kelime tamamen bağımsız bir semboldür. Bu yüzden model “kedi” ve “köpek” arasında hiçbir benzerlik göremez.

Sinir ağı yaklaşımı bu noktada temsil seviyesine müdahale etti. Kelimeleri yüksek boyutlu seyrek vektörler yerine düşük boyutlu, sürekli uzayda öğrenilen vektörler olarak temsil etmeye başladı. Böylece anlam ilişkileri geometrik olarak kodlanabilir hâle geldi.
:::

---

## Dağıtık Temsil: One-hot vs Embedding

**Temsil farkı = genelleme farkı**

**One-hot (sembolik)**

```

köpek = [0, 0, 1, 0, …]  
kedi = [0, 1, 0, 0, …]

```

→ Benzerlik: **0**  
→ Bilgi transferi yok

**Embedding (öğrenilmiş)**

```

köpek → [0.82, -0.14, 0.67, …]  
kedi → [0.79, -0.11, 0.71, …]

```

→ Yüksek benzerlik  
→ Öğrenilen bilgi paylaşılır

**Kritik kazanç**

Benzer bağlam → benzer temsil → genelleme

::: {.notes}
Dağıtık temsilin farkı pratikte genelleme kapasitesidir. One-hot temsilde her kelime bağımsızdır; bu yüzden model “kedi mama yedi” üzerinden öğrendiğini “köpek mama yedi” için kullanamaz.

Embedding yaklaşımında ise benzer bağlamlarda geçen kelimeler vektör uzayında birbirine yakın olur. Bu sayede model bir kelime üzerinde öğrendiği örüntüyü benzer kelimelere de transfer edebilir.

Bu fikir dilin dağılımsal doğasına dayanır: kelimeler anlamlarını birlikte kullanıldıkları bağlamlardan alır. Bu temsil değişimi, modern NLP’nin en kritik kırılmalarından biridir ve tüm LLM’lerin giriş katmanının temelini oluşturur.
:::

---

## RNN ve Vanishing Gradient

**Uzun bağlamı modelleme denemesi**

**Amaç**

n-gram sınırını aşmak → tüm geçmişi kullanmak

**Araç**

RNN (Recurrent Neural Network)

**Tıkanma**

- Gradyan geriye yayılırken hızla küçülür
- Uzun bağımlılıklar öğrenilemez

**Sonuç**

Teoride güçlü, pratikte sınırlı

::: {.notes}
RNN’ler, n-gram modellerinin kısa bağlam problemini çözmek için geliştirildi. Model, geçmiş bilgiyi gizli durumda taşıyarak teorik olarak tüm önceki kelimeleri dikkate alabilir. Bu, dil modellemesi için önemli bir ilerlemeydi.

Ancak pratikte vanishing gradient problemi ortaya çıktı. Eğitim sırasında hata sinyali geriye doğru yayılırken her adımda küçülür ve birkaç adım sonra etkisiz hâle gelir. Bu nedenle model uzun mesafeli bağımlılıkları öğrenemez.

Bu sınırlama, daha sonra LSTM gibi mimarilerin geliştirilmesine ve nihayetinde Transformer yaklaşımına geçişin temel nedenlerinden biri oldu.
:::

---

## Özet: Beş Paradigma

**Her ilerleme yeni bir sınır üretti**

| Dönem | Yaklaşım | Tıkanma |
|---|---|---|
| 1950–66 | Kural tabanlı | İstisna patlaması |
| 1966–85 | Sembolik NLP | Bilgi edinimi darboğazı |
| 1985–00 | İstatistiksel | Kısa bağlam, anlamsal körlük |
| 2000–10 | Özellik mühendisliği | İnsan bağımlılığı |
| 2003–11 | Sinir ağları | Hesap gücü, eğitim zorluğu |

**Ana desen**

Her paradigma → bir problemi çözer  
Ama yeni bir ölçeklenme sınırı üretir

::: {.notes}
Bu tabloyu doğrusal bir ilerleme olarak değil, problem zinciri olarak okumak gerekir. Her dönem bir öncekinin sınırlamasını çözmeye çalışır. Ancak çözüm, yeni bir sınırlama üretir. Bu nedenle NLP tarihi, teknik ilerlemeden çok, darboğazların evrimi olarak görülebilir.

Önemli nokta şu: yeni paradigma eskisini tamamen ortadan kaldırmaz. Önceki yöntemler daha dar alanlarda yaşamaya devam eder. Ancak ana akım yaklaşım, hangi yöntemin daha iyi ölçeklendiğine göre değişir.

Bu noktaya kadar gelen çizgi, modern LLM’lerin neden ortaya çıktığını açıklar. Bir sonraki adımda Transformer mimarisi, bu birikmiş problemlere farklı bir çözüm getirecek.
:::
