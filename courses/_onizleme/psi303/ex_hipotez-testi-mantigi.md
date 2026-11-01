---
title: "Genel Özet: Hipotez Testi Mantığı ve Hata Türleri"
subtitle: "PSİ 303 — Sınav Tekrar Notu (Hafta 4)"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-11-01
description: "Standart hata, sıfır ve alternatif hipotez, p değeri ve anlamlılık düzeyi; Tip I ve Tip II hata ve bu hataların bağlamsal ve etik sonuçlarının tanım, açıklama ve örneklerle anlatıldığı çalışma notu."
sidebar: psi303
execute:
  echo: false
---

# Genel Özet: Hipotez Testi Mantığı ve Hata Türleri

Bir araştırmada "terapi işe yaradı" demek kolaydır. Zor olan, bu kararın **yanlış olabileceğini** hesaba katmak ve yanlış çıktığında kime ne olacağını düşünmektir. Bu not şu soruları sırayla cevaplar:

1. **Standart hata:** Örneklemden hesaplanan ortalama, örneklemden örnekleme ne kadar oynar?
2. **Hipotezler:** Bir araştırmada neyi sınıyoruz?
3. **p değeri ve anlamlılık düzeyi:** Elde edilen sonuç ne kadar olağandı ve hata riski nasıl sınırlanır?
4. **Hata türleri:** Bir karar hangi iki biçimde yanlış olabilir?
5. **Hataların sonuçları:** Yanlış bir karar kime, nasıl zarar verir?
6. **Eşiği katılaştırmak:** Daha güçlü kanıt istemek hangi hatayı azaltır, hangisini artırır?

Bu notun ağırlık merkezi 4.–6. konulardır. Sınavda beklenen iş şudur: **verilen bir sıfır hipotezi için gerçek durum ile verilen kararı eşleştirerek hata türünü belirlemek; ardından bu yanlış kararın kime, nasıl zarar verebileceğini bağlama göre yorumlamak.**

Her kavram önce kısa bir **tanımla** verilir; ardından açıklanır ve örneklerle gösterilir. Notun sonunda dikkat edilmesi gereken noktalar ve kontrol soruları yer alır.

---

## 1. Standart hata

Bu konu boyunca şu araştırmayı örnek alacağız: bir araştırmacı yeni bir terapi yöntemini 40 kişide deniyor ve terapi sonundaki ortalama kaygı puanını hesaplıyor.

### 1.1 Örnekleme dağılımı

::: {.callout-important appearance="simple"}
## Tanım
**Örnekleme dağılımı**, aynı evrenden aynı büyüklükte çok sayıda rastgele örneklem çekildiğinde, bu örneklemlerden hesaplanan bir istatistiğin (örneğin ortalamanın) aldığı değerlerin dağılımıdır. (İng. *sampling distribution*.)
:::

**Araştırma Sorusu ve Veri Yapısı** notunda örnekleme değişkenliğini görmüştük: aynı evrenden seçilen iki örneklem aynı sonucu vermez. Araştırmacı başka 40 kişi seçseydi ortalama kaygı puanı biraz farklı çıkardı; üçüncü bir 40 kişi daha farklı bir ortalama verirdi.

Bu seçimi zihnimizde yüzlerce kez tekrarladığımızı düşünelim. Her seferinde bir ortalama elde ederiz ve bu ortalamaların kendisi de bir dağılım oluşturur. Bu dağılım bir kişinin değil, **ortalamaların** dağılımıdır; adı örnekleme dağılımıdır. Gerçekte yalnızca bir örneklem seçeriz; örnekleme dağılımı, o tek ortalamanın ne kadar oynayabileceğini düşünmemizi sağlayan kuramsal bir araçtır.

### 1.2 Standart hata

::: {.callout-important appearance="simple"}
## Tanım
**Standart hata**, örnekleme dağılımının standart sapmasıdır; örneklem ortalamasının örneklemden örnekleme tipik olarak ne kadar oynadığını gösterir. (İng. *standard error*; *SH* ya da *SE* ile gösterilir.)
:::

Standart hata küçükse, farklı örneklemlerin ortalamaları birbirine yakın çıkar; elimizdeki tek ortalama evrenin ortalamasına muhtemelen yakındır. Standart hata büyükse, ortalamalar örneklemden örnekleme çok oynar; elimizdeki ortalamaya o kadar güvenemeyiz.

Standart hata, adı benzeyen **standart sapma** ile sık karıştırılır. İkisi farklı şeylerin yayılımını ölçer:

| | Standart sapma (SD) | Standart hata (SH) |
|---|---|---|
| Neyin yayılımı? | Kişilerin değerleri | Örneklem ortalamaları |
| Cevapladığı soru | Kişiler birbirinden ne kadar farklı? | Ortalama örneklemden örnekleme ne kadar oynar? |
| Örneklem büyüdükçe | Sistematik olarak küçülmez | Diğer koşullar aynıyken küçülür |

Terapi örneğine dönelim. Araştırmacı 40 yerine 400 kişiyle çalışsaydı ortalamanın standart hatası küçülürdü: büyük örneklemlerin ortalamaları birbirine daha yakın çıkar. Ama bu, katılımcıların birbirine daha çok benzediği anlamına gelmez. Kişilerin kaygı puanları hâlâ birbirinden aynı ölçüde farklıdır; standart sapma örneklem büyüdüğü için sistematik olarak küçülmez. Küçülen şey, **ortalamanın oynaklığıdır**.

Bu ilişki rastgele ve bağımsız örneklemeye dayanır. Standart hata yanlılığı düzeltmez: gönüllülerle yürüyen bir çalışmaya ne kadar çok kişi eklenirse eklensin, seçimin yanlılığı ortadan kalkmaz. Standart hata yalnızca örnekleme değişkenliğini, yani rastgele oynamayı anlatır.

---

## 2. Hipotezler

Terapi araştırmacısının asıl sorusu şudur: *Bu terapi kaygıyı azaltıyor mu?* Bu soruyu sınamak için iki karşıt iddia kurulur.

### 2.1 Hipotez testi

::: {.callout-important appearance="simple"}
## Tanım
**Hipotez testi**, örneklem verisini kullanarak evren hakkındaki bir iddianın reddedilip reddedilmeyeceğine karar verme yöntemidir. (İng. *hypothesis testing*.)
:::

Araştırmacı evrenin tamamını göremez; yalnızca örneklemi görür. Örneklemde terapi grubunun kaygısı düşük çıkmış olabilir. Ama bu fark gerçek bir etkiden mi geliyor, yoksa yalnızca örnekleme oynamasından mı (1. konu)? Hipotez testi bu soruya sistemli bir cevap arar. Bunu yaparken iki karşıt hipotez kurar ve veriye göre birini reddedip reddedemeyeceğine karar verir. Her karar gibi bu karar da yanlış olabilir; notun geri kalanı bu yanlışlığı konu alır.

### 2.2 Sıfır hipotezi

::: {.callout-important appearance="simple"}
## Tanım
**Sıfır hipotezi (H0)**, hipotez testinde sınanan başlangıç iddiasıdır. Etki araştırmalarında genellikle "etki yoktur", "fark yoktur" ya da "durum yoktur" biçiminde kurulur. (Yokluk hipotezi olarak da adlandırılır; İng. *null hypothesis*.)
:::

Terapi araştırmasında sıfır hipotezi şudur: **H0: Terapinin etkisi yoktur.** Test, bu iddiadan yola çıkar ve verinin bu iddiayla ne kadar uyuştuğuna bakar.

Sıfır hipotezi yalnızca araştırmalarda değil, bireysel karar durumlarında da kurulabilir. Bir depresyon taramasında H0, "Kişide depresyon yoktur" biçimindedir. Bir mahkemede "Sanık suçsuzdur" biçimindedir. Her durumda H0, kanıt gelene kadar geçerli sayılan başlangıç iddiasıdır.

Bu notta en çok işine yarayacak alışkanlık şudur: **bir hatayı adlandırmadan önce H0'ın ne söylediğine bak.** Terapi örneğinde H0'ın *doğru* olması terapinin gerçekten etkisiz olması; H0'ın *yanlış* olması ise terapinin gerçekten etkili olması demektir. 4. konudaki bütün hata türleri bu eşleştirmeye dayanır.

### 2.3 Alternatif hipotez

::: {.callout-important appearance="simple"}
## Tanım
**Alternatif hipotez (H1)**, sıfır hipotezinin karşısındaki iddiadır; genellikle bir etkinin, farkın ya da durumun var olduğunu söyler. (Araştırma hipotezi olarak da adlandırılır; İng. *alternative hypothesis*.)
:::

Terapi araştırmasında **H1: Terapinin etkisi vardır.** Depresyon taramasında H1, "Kişide depresyon vardır"; mahkemede "Sanık suçludur" biçimindedir.

H0 ile H1 birbirini dışlar: ikisi birden doğru olamaz. Hipotez testi, veri H0 ile uyuşmuyorsa H0'ı reddederek H1 lehine bir karar verir.

---

## 3. p değeri ve anlamlılık düzeyi

Terapi grubunun ortalama kaygı puanı karşılaştırma grubundan düşük çıktı diyelim. Bu fark ne kadar şaşırtıcıdır? Bu konudaki iki kavram, bu soruya cevap vermeye yarar.

### 3.1 p değeri

::: {.callout-important appearance="simple"}
## Tanım
**p değeri**, sıfır hipotezi doğru olsaydı gözlenen sonuç kadar ya da ondan daha uç bir sonucun elde edilme olasılığıdır. (İng. *p-value*.)
:::

p değerini hesaplarken önce "terapinin etkisi yoktur" diye varsayılır. Sonra şu soru sorulur: *Terapi gerçekten etkisiz olsaydı, yalnızca örnekleme oynamasıyla bu kadar büyük (ya da daha büyük) bir fark görme olasılığı ne olurdu?* Bu olasılık testin varsayımları altında hesaplanır.

p değeri sık yanlış okunur. Neyi söylediğini ve neyi söylemediğini ayırmak gerekir:

- p değeri, **H0 doğruysa** sonucun ne kadar olağan olduğunu anlatır. **H0'ın doğru olma olasılığını** anlatmaz.
- p değeri sonucun ne kadar şaşırtıcı olduğunu anlatır. **Etkinin ne kadar büyük** ya da kişiler için **ne kadar önemli** olduğunu anlatmaz.

Bu yüzden küçük bir p değeri, büyük ya da uygulamada önemli bir etkiyi tek başına göstermez.

### 3.2 Anlamlılık düzeyi (α)

::: {.callout-important appearance="simple"}
## Tanım
**Anlamlılık düzeyi (α)**, araştırmadan önce belirlenen ve sıfır hipotezi doğruyken onu yanlışlıkla reddetme olasılığını sınırlayan eşik değerdir. (Alfa düzeyi olarak da adlandırılır; İng. *significance level*.)
:::

α, araştırmacının "H0 aslında doğruyken onu reddetme" riskine ne kadar katlanmaya hazır olduğunu gösterir. Araştırma başlamadan belirlenir; veriye bakıldıktan sonra değiştirilmez. α küçüldükçe H0'ı reddetmek için daha güçlü kanıt gerekir. Bunun hangi hatayı azaltıp hangisini artırdığı 6. konuda anlatılıyor.

p değeri veriden **hesaplanır**; α ise araştırmacı tarafından önceden **belirlenir**. Biri elde edilen sonuçla, öbürü kabul edilen riskle ilgilidir.

---

## 4. Hata türleri

Hipotez testi bir karardır ve her karar yanlış olabilir. Bu konuyu anlamak için iki şeyi birbirinden ayırmak gerekir: **gerçekte durumun ne olduğu** (H0 gerçekte doğru mu, yanlış mı?) ve **verilen karar** (H0 reddedildi mi, reddedilemedi mi?). Araştırmacı gerçek durumu bilmez; yalnızca kararı verir. Karar gerçek durumla uyuşursa doğrudur; uyuşmazsa bir hata yapılmıştır. Bu konu boyunca terapi örneğini kullanacağız: **H0: Terapinin etkisi yoktur.**

### 4.1 Tip I hata

::: {.callout-important appearance="simple"}
## Tanım
**Tip I hata**, sıfır hipotezi gerçekte doğruyken onu reddetmektir. (Birinci tür hata olarak da adlandırılır; İng. *Type I error*.)
:::

Terapi gerçekte etkisizdir (H0 doğrudur), ama araştırmacı veriye bakıp "terapi etkilidir" kararı verir (H0'ı reddeder). Bu bir **Tip I hatadır**: var olmayan bir etki varmış gibi görülmüştür.

Tip I hatayı bulmak için iki koşulun birlikte sağlanması gerekir: H0 gerçekte **doğru** olmalı ve karar H0'ı **reddetmek** olmalıdır.

### 4.2 Tip II hata

::: {.callout-important appearance="simple"}
## Tanım
**Tip II hata**, sıfır hipotezi gerçekte yanlışken onu reddedememektir. (İkinci tür hata olarak da adlandırılır; İng. *Type II error*.)
:::

Terapi gerçekte etkilidir (H0 yanlıştır), ama araştırmacı veride bu etkiyi bulamaz ve "terapinin etkisi gösterilemedi" kararı verir (H0'ı reddedemez). Bu bir **Tip II hatadır**: var olan bir etki gözden kaçırılmıştır.

Tip II hatayı bulmak için de iki koşul gerekir: H0 gerçekte **yanlış** olmalı ve karar H0'ı **reddedememek** olmalıdır.

İki hata ve iki doğru karar birlikte şu tabloyu oluşturur:

| Verilen karar | H0 gerçekte doğru | H0 gerçekte yanlış |
|---|---|---|
| H0 reddedildi | **Tip I hata** | Doğru karar |
| H0 reddedilemedi | Doğru karar | **Tip II hata** |

Bir hatayı adlandırırken her zaman aynı sırayla düşünülür: **önce H0'ı yaz, sonra gerçek durumu belirle, sonra kararı belirle, en son tabloda eşleştir.** Yalnızca karara bakarak hata türü söylenemez. "Terapi etkili bulundu" kararı, terapi gerçekten etkiliyse doğru karar, etkisizse Tip I hatadır.

### 4.3 α ve β

::: {.callout-important appearance="simple"}
## Tanım
**α**, sıfır hipotezi doğruyken Tip I hata yapma olasılığıdır. **β (beta)**, sıfır hipotezi yanlışken Tip II hata yapma olasılığıdır.
:::

3.2'de α'yı araştırmacının önceden belirlediği eşik olarak görmüştük; bu eşik aynı zamanda Tip I hata olasılığıdır. β ise Tip II hatanın olasılığıdır.

İkisi de **olasılıktır**. Tek bir araştırmada gerçekten hata yapılıp yapılmadığını söylemezler; gerçek durumu bilmediğimiz için bunu hiçbir zaman kesin olarak bilemeyiz. α ve β, bu türden kararlar tekrar tekrar verildiğinde hatanın ne sıklıkla yapılacağını anlatır.

### 4.4 Yanlış pozitif ve yanlış negatif

::: {.callout-important appearance="simple"}
## Tanım
**Yanlış pozitif**, gerçekte olmayan bir durumun ya da etkinin "var" olarak bulunmasıdır. **Yanlış negatif**, gerçekte olan bir durumun ya da etkinin "yok" olarak bulunmasıdır.
:::

H0 "etki yoktur" ya da "durum yoktur" biçiminde kurulduğunda, Tip I hata bir yanlış pozitife, Tip II hata bir yanlış negatife karşılık gelir. Etkisiz terapinin etkili bulunması yanlış pozitif, etkili terapinin etkisiz bulunması yanlış negatiftir. Depresyon taramasında (H0: Kişide depresyon yoktur) depresyonu olmayan birine "var" denmesi yanlış pozitif, depresyonu olan birine "yok" denmesi yanlış negatiftir.

Bu adlar günlük dilde ve tıpta sık kullanılır. Ancak hata türünü belirlerken "pozitif" ya da "negatif" sözcüğüne değil, **verilen H0'a ve gerçek duruma** bakılır. Hata türünü belirleyen her zaman 4.2'deki tablodur.

---

## 5. Hataların sonuçları

Tip I ve Tip II hatayı doğru adlandırmak işin yalnızca yarısıdır. Diğer yarısı, yanlış kararın **kime, nasıl zarar verdiğini** açıklamaktır. Bu iki soru birbirinden ayrıdır:

1. **Hangi hata yapıldı?** Bu soru H0, gerçek durum ve karar eşleştirilerek cevaplanır (4. konu).
2. **Bu hata ne kadar ağır?** Bu soru bağlama bakılarak cevaplanır.

Hatanın adı ağırlığını belirlemez. "Tip I her zaman daha kötüdür" ya da "Tip II her zaman daha kötüdür" diye genel bir kural yoktur. Hangi hatanın daha ciddi olduğunu belirlerken şunlara bakılır:

- **Zararın büyüklüğü:** Yanlış karar kişiye ne yapar?
- **Kimlere yayıldığı:** Hata bir kişiyi mi, binlerce kişiyi mi etkiler?
- **Düzeltilebilirlik:** Hata sonradan fark edilip düzeltilebilir mi, yoksa sonuçları geri alınamaz mı?
- **Gecikmenin sonucu:** Doğru karar geciktiğinde ne kaybedilir?
- **Seçenekler:** Yanlış kararın yerini tutabilecek başka bir yol var mı?

Aşağıdaki örneklerin her biri aynı sırayla yazılmıştır: önce soru ve hipotezler; sonra Tip I hatanın **o soruda ne anlama geldiği** ve olası sonucu; sonra Tip II hatanın ne anlama geldiği ve olası sonucu; en sonda hangisinin neden daha ağır olabileceği. Bir sınav sorusunda yapman beklenen iş de tam olarak budur.

### 5.1 Uyku yoksunluğu ve dikkat

**Araştırma sorusu:** Uyku yoksunluğu öğrencilerin dikkat performansını düşürür mü?

- **H0:** Uyku yoksunluğunun dikkat performansı üzerinde etkisi yoktur.
- **H1:** Uyku yoksunluğu dikkat performansını düşürür.

**Tip I hata ne demek?** Gerçekte uyku yoksunluğu dikkati etkilemiyor, ama araştırmacı "uykusuzluk dikkati düşürüyor" sonucuna varıyor. Var olmayan bir etki varmış gibi raporlanıyor.
*Olası sonuç:* Öğrencilere bilimsel dayanağı olmayan bir uyarı yapılır; okullar gereksiz düzenlemeler getirebilir; başka araştırmalar yanlış bir bulgu üzerine kurulur.

**Tip II hata ne demek?** Gerçekte uyku yoksunluğu dikkati düşürüyor, ama araştırmacı bu etkiyi bulamıyor ve "uykusuzluğun dikkat üzerinde gösterilebilmiş bir etkisi yok" sonucuna varıyor. Var olan bir etki gözden kaçıyor.
*Olası sonuç:* Uykusuzluğun zararı fark edilmez; öğrenciler gece boyu çalışmayı zararsız sanır; uykusuz araç kullananlar ya da nöbet tutan sağlık çalışanları gibi dikkatin kritik olduğu gruplar için önlem alınmaz.

**Hangisi daha ağır?** Bu soruda Tip II hata daha ağır görülebilir. Gözden kaçan etki, dikkatin hayati olduğu işlerde ciddi sonuçlar doğurabilir. Tip I hatanın bedeli görece sınırlıdır: gereksiz bir uyarı ve düzenleme.

### 5.2 Sosyal medya kullanımı ve yalnızlık

**Araştırma sorusu:** Günlük sosyal medya kullanım süresi ile ergenlerin yalnızlık düzeyi arasında ilişki var mı?

- **H0:** Sosyal medya kullanım süresi ile yalnızlık arasında ilişki yoktur.
- **H1:** Sosyal medya kullanım süresi ile yalnızlık arasında ilişki vardır.

**Tip I hata ne demek?** Gerçekte iki değişken arasında ilişki yok, ama araştırmacı ilişki bulduğunu raporluyor.
*Olası sonuç:* Aileler ve okullar sosyal medyayı yalnızlığın kaynağı sanarak kısıtlamalara gider; asıl nedenler (aile ilişkileri, okul ortamı) gözden kaçabilir; yanlış bulgu medyada yayılır ve düzeltilmesi zorlaşır.

**Tip II hata ne demek?** Gerçekte bir ilişki var, ama araştırmacı bunu bulamıyor.
*Olası sonuç:* Yalnızlıkla ilişkili olabilecek bir örüntü dikkate alınmaz; ergenlerin sosyal medya kullanımıyla ilgili yönlendirme ya da destek geliştirilmez.

**Hangisi daha ağır?** Bu soruda iki hatanın ağırlığı birbirine yakındır ve bulgunun nasıl kullanılacağına bağlıdır. Bulgu doğrudan yasaklara dönüşecekse Tip I hatanın bedeli artar; bulgu ergenlere destek sunmak için kullanılacaksa Tip II hatanın bedeli artar. Ayrıca bu bir ilişki sorusudur; ilişki bulunsa bile bunun sosyal medyanın yalnızlığa **neden olduğu** anlamına gelmediği unutulmamalıdır.

### 5.3 Okul zorbalığını önleme programı

**Araştırma sorusu:** Yeni bir zorbalık önleme programı, okullarda bildirilen zorbalık olaylarını azaltır mı?

- **H0:** Programın zorbalık olayları üzerinde etkisi yoktur.
- **H1:** Program zorbalık olaylarını azaltır.

**Tip I hata ne demek?** Gerçekte program işe yaramıyor, ama araştırmacı programın zorbalığı azalttığı sonucuna varıyor.
*Olası sonuç:* Etkisiz program birçok okulda uygulanmaya başlar; para ve öğretmen zamanı boşa gider; okullar "önlem aldık" diye başka çözümler aramayı bırakır; zorbalığa uğrayan öğrenciler korunmamaya devam eder.

**Tip II hata ne demek?** Gerçekte program zorbalığı azaltıyor, ama araştırmacı etkisini gösteremiyor.
*Olası sonuç:* Etkili bir program terk edilir; zorbalığa uğrayan öğrenciler bu programın sağlayabileceği korumadan yoksun kalır.

**Hangisi daha ağır?** Bu soruda Tip I hata ağır görülebilir, çünkü yanlış güven duygusu başka çözümlerin aranmasını engeller ve hata çok sayıda okula yayılır. Ama başka etkili program yoksa, etkili bir programı kaçırmanın (Tip II) bedeli de yüksektir.

### 5.4 Depresyon taraması

**Karar sorusu:** Bu kişide depresyon var mı?

- **H0:** Kişide depresyon yoktur.
- **H1:** Kişide depresyon vardır.

**Tip I hata ne demek?** Kişide gerçekte depresyon yok, ama tarama "var" diyor (yanlış pozitif).
*Olası sonuç:* Gereksiz endişe, etiketlenme ve gereksiz bir yönlendirme.

**Tip II hata ne demek?** Kişide gerçekte depresyon var, ama tarama "yok" diyor (yanlış negatif).
*Olası sonuç:* Kişi ihtiyaç duyduğu desteğe geç ulaşır.

**Hangisi daha ağır?** Bağlama bağlıdır. Desteğe erişim zorsa ve gecikmenin sonuçları önemliyse Tip II hata daha kritik görülebilir. Olumlu tarama sonucunun kesin bir etiket gibi kullanıldığı bir ortamda Tip I hatanın bedeli de artar. Ek değerlendirme olanağı, sonucun kişiye nasıl iletildiği ve desteğe erişimin kolaylığı ağırlığı değiştirir.

Tarama örneklerinde "var/yok" kararları hata mantığını göstermek için basitleştirilmiştir; bir tarama sonucu tek başına kesin tanı değildir. Aynı mantık bir hastalık taramasında da geçerlidir (H0: Hastalık yoktur): Tip I hata sağlıklı kişinin hasta sayılması ve gereksiz ek testler, Tip II hata gerçek hastalığın kaçırılması ve tedavinin gecikmesidir.

### 5.5 Terapi etkisi

**Araştırma sorusu:** Yeni bir terapi yöntemi kaygıyı azaltır mı?

- **H0:** Terapinin etkisi yoktur.
- **H1:** Terapi kaygıyı azaltır.

**Tip I hata ne demek?** Gerçekte terapi etkisiz, ama araştırmacı etkili buluyor.
*Olası sonuç:* Zaman ve kaynak yararsız bir uygulamaya ayrılır; kişilerde yanlış bir güven oluşur.

**Tip II hata ne demek?** Gerçekte terapi etkili, ama araştırmacı etkisini bulamıyor.
*Olası sonuç:* Yararlı bir yöntem terk edilir; ondan yararlanabilecek kişiler bu olanağı kaybeder.

**Hangisi daha ağır?** Başka etkili seçenekler varsa Tip II hatanın bedeli azalır; etkisiz terapi pahalıysa ya da kişileri etkili tedaviden uzak tutuyorsa Tip I hatanın bedeli artar.

### 5.6 Tedavi onayı: aynı hata, zıt ağırlık

Aşağıdaki iki örnekte H0'ın yapısı aynıdır: "Tedavi etkili değildir." Hata türlerinin tanımı da aynıdır. Ama birinci örnekte Tip I, ikinci örnekte Tip II hata daha ağırdır. Farkı yaratan bağlamdır.

**Örnek A — Tip I hatanın daha ağır olduğu durum**

**Araştırma sorusu:** Yeni bir ağrı kesici, baş ağrısını mevcut ilaçlardan daha fazla azaltır mı?

- **H0:** Yeni ağrı kesici mevcut ilaçlardan daha etkili değildir.
- **H1:** Yeni ağrı kesici mevcut ilaçlardan daha etkilidir.

**Tip I hata ne demek?** Gerçekte yeni ilaç daha etkili değil, ama daha etkili olduğu sonucuna varılıyor ve ilaç onaylanıyor.
*Olası sonuç:* İnsanlar daha pahalı ama daha iyi olmayan bir ilaca para öder. Reçetesiz satılan bir ağrı kesici milyonlarca kişi tarafından kullanılabileceği için, ilacın henüz bilinmeyen bir yan etkisi varsa bu zarar çok sayıda kişiye yayılır.

**Tip II hata ne demek?** Gerçekte yeni ilaç daha etkili, ama bu gösterilemiyor ve ilaç onaylanmıyor.
*Olası sonuç:* İnsanlar mevcut ilaçları kullanmaya devam eder; biraz daha iyi bir seçenekten yoksun kalırlar.

**Hangisi daha ağır?** **Tip I hata.** Mevcut etkili ilaçlar olduğu için Tip II hatanın bedeli küçüktür: insanlar zaten işe yarayan bir ilaca sahiptir. Tip I hata ise gereksiz bir masrafa ve yaygın kullanım nedeniyle olası bir zararın çok sayıda kişiye yayılmasına yol açar.

**Örnek B — Tip II hatanın daha ağır olduğu durum**

**Araştırma sorusu:** Standart tedavilerin artık işe yaramadığı ileri evre kanser hastalarında yeni bir tedavi, yaşam süresini uzatır mı?

- **H0:** Yeni tedavinin yaşam süresi üzerinde etkisi yoktur.
- **H1:** Yeni tedavi yaşam süresini uzatır.

**Tip I hata ne demek?** Gerçekte tedavi işe yaramıyor, ama yaşam süresini uzattığı sonucuna varılıyor ve tedavi onaylanıyor.
*Olası sonuç:* Hastalar işe yaramayan bir tedavinin yan etkilerini yaşar; umut yanlış bir temele dayanır; tedavinin maliyeti boşa gider.

**Tip II hata ne demek?** Gerçekte tedavi yaşam süresini uzatıyor, ama bu gösterilemiyor ve tedavi onaylanmıyor.
*Olası sonuç:* Başka seçeneği kalmamış hastalar, yaşam sürelerini uzatabilecek tek tedaviden yoksun kalır. Bu kayıp geri alınamaz.

**Hangisi daha ağır?** **Tip II hata.** Bu hastalar için başka bir seçenek yoktur; etkili bir tedaviyi kaçırmak, onlara kalan tek olanağı ellerinden almaktır. Tip I hatanın bedeli de gerçektir (yan etkiler, boşa giden umut), ama hastalar zaten etkili bir tedaviden uzaklaştırılmış olmaz, çünkü böyle bir tedavi kalmamıştır.

**Karşılaştırmanın dersi:** İki örnekte de H0 "etkili değildir" ve hata türlerinin tanımı aynıdır. Ağırlığı belirleyen, **başka seçeneklerin olup olmadığı**, zararın ne kadar kişiye yayıldığı ve sonuçların geri alınabilirliğidir. Ayrıca iki örnekte de H0 **etkililik** hakkındadır; bir tedavinin etkili bulunması güvenli olduğunu da göstermez. Güvenlik ayrı bir değerlendirme gerektirir.

### 5.7 Hukuki kararlar: aynı hata, zıt ağırlık

Mahkeme kararları hata türlerini düşünmek için iyi bir benzetmedir. Aşağıdaki iki örnekte birinde Tip I, öbüründe Tip II hata daha ağırdır.

**Örnek A — Tip I hatanın daha ağır olduğu durum**

**Karar sorusu:** Yankesicilikle suçlanan sanık suçlu mu?

- **H0:** Sanık suçsuzdur.
- **H1:** Sanık suçludur.

**Tip I hata ne demek?** Sanık gerçekte suçsuz, ama mahkûm ediliyor.
*Olası sonuç:* Suçsuz bir kişi hapis cezası alır, sabıka kaydı edinir, işini ve itibarını kaybedebilir.

**Tip II hata ne demek?** Sanık gerçekte suçlu, ama suçluluğu kanıtlanamıyor; H0 yanlışken reddedilemiyor.
*Olası sonuç:* Yankesici serbest kalır ve başka kişilerden çalmaya devam edebilir; mağdurun zararı karşılanmaz.

**Hangisi daha ağır?** **Tip I hata.** Suçsuz bir kişinin özgürlüğünü ve geleceğini kaybetmesi, maddi kaybı çoğunlukla sınırlı olan bir hırsızlığın cezasız kalmasından daha büyük bir haksızlık olarak değerlendirilir.

Mahkemelerdeki **"makul şüphenin ötesinde"** ölçütü bu yüzden vardır. Ölçüt, suçsuz bir kişiyi mahkûm etme riskini, yani **Tip I hata riskini azaltmaya** yöneliktir. Bu bir benzetmedir; ölçüte sayısal bir α değeri atanmaz.

**Örnek B — Tip II hatanın daha ağır olduğu durum**

**Karar sorusu:** Aile içi şiddet başvurusunda, şiddet uyguladığı iddia edilen kişi hakkında geçici koruma (uzaklaştırma) kararı verilmeli mi?

- **H0:** Kişi başvuru sahibi için şiddet tehlikesi oluşturmamaktadır.
- **H1:** Kişi başvuru sahibi için şiddet tehlikesi oluşturmaktadır.

**Tip I hata ne demek?** Kişi gerçekte bir tehlike oluşturmuyor, ama koruma kararı veriliyor.
*Olası sonuç:* Kişi belirli bir süre evinden ya da başvuru sahibinden uzak durmak zorunda kalır; bu bir kısıtlama ve haksızlıktır, ama kararın süresi sınırlıdır ve yeniden değerlendirilebilir.

**Tip II hata ne demek?** Kişi gerçekte bir tehlike oluşturuyor, ama koruma kararı verilmiyor.
*Olası sonuç:* Başvuru sahibi korumasız kalır; ağır yaralanma ya da ölüm gibi geri alınamaz sonuçlar doğabilir.

**Hangisi daha ağır?** **Tip II hata.** Geçici bir koruma kararının yarattığı kısıtlama sınırlı ve geri alınabilirdir; korunması gereken birinin korunmaması ise geri alınamaz sonuçlar doğurabilir. Bu yüzden koruma kararlarında, ceza davalarındaki "makul şüphenin ötesinde" ölçütünden daha düşük bir kanıt eşiği aranır ve karar hızla verilebilir.

**Karşılaştırmanın dersi:** İkisi de hukuki karardır, ama ağırlık zıt yöndedir. Ceza davasında suçsuz kişiyi mahkûm etmek (Tip I) ağır ve uzun sürelidir; bu yüzden kanıt eşiği yüksektir. Koruma kararında tehlikeyi kaçırmak (Tip II) geri alınamaz sonuçlar doğurabilir, kısıtlama ise geçicidir; bu yüzden eşik daha düşüktür. **Kanıt eşiğinin nerede tutulacağı, hangi hatanın daha ağır olduğuna göre belirlenir** (6. konu).

### 5.8 Karar vermenin zor olduğu etik ikilemler

Bazı durumlarda iki hatanın da sonucu ağırdır ve hangisinin daha kabul edilebilir olduğu konusunda kolay bir cevap yoktur. Bu örnekler doğru tek bir cevap aramak için değil, **iki hatanın bedelini birlikte tartmayı** öğrenmek içindir. Örnekler karar mantığını göstermek için basitleştirilmiştir.

**İkilem 1 — Çocuk istismarı suçlamasıyla yargılama**

**Karar sorusu:** Bir çocuğa yönelik istismar suçlamasıyla yargılanan sanık suçlu mu?

- **H0:** Sanık suçsuzdur.
- **H1:** Sanık suçludur.

**Tip I hata ne demek?** Sanık gerçekte suçsuz, ama mahkûm ediliyor.
*Olası sonuç:* Suçsuz kişi uzun bir hapis cezası alır; bu suçlamanın yarattığı damga hayatının geri kalanını etkiler; aile ilişkileri ve itibar onarılamaz biçimde zarar görür.

**Tip II hata ne demek?** Sanık gerçekte suçlu, ama suçluluğu kanıtlanamıyor; H0 yanlışken reddedilemiyor.
*Olası sonuç:* Kişi serbest kalır; aynı çocuk ya da başka çocuklar risk altında kalabilir; mağdur çocuk korunmamış olur.

**Neden zor?** Yankesicilik davasında Tip I hatanın daha ağır olduğu kolayca savunuluyordu. Burada ise iki hata da geri alınamaz zarara yol açar: biri suçsuz bir yetişkinin hayatını, öbürü savunmasız bir çocuğun güvenliğini tehlikeye atar. Kanıt eşiğini düşürmek çocukları daha iyi korur ama suçsuz kişilerin mahkûm edilme riskini artırır; eşiği yüksek tutmak suçsuzları korur ama çocukları risk altında bırakabilir.

**İkilem 2 — Şartlı tahliye kararı**

**Karar sorusu:** Cezasının bir kısmını çekmiş bir hükümlü şartlı tahliye edilmeli mi?

- **H0:** Hükümlü serbest bırakılırsa yeniden ciddi bir suç işlemeyecektir.
- **H1:** Hükümlü serbest bırakılırsa yeniden ciddi bir suç işleyecektir.

**Tip I hata ne demek?** Hükümlü gerçekte yeniden suç işlemeyecek, ama "işleyecek" denerek tahliye edilmiyor.
*Olası sonuç:* Kişi gereğinden uzun süre özgürlüğünden yoksun kalır; topluma uyum şansı azalır; iyileşme çabası karşılıksız kalır.

**Tip II hata ne demek?** Hükümlü gerçekte yeniden suç işleyecek, ama "işlemeyecek" denerek tahliye ediliyor.
*Olası sonuç:* Yeni mağdurlar ortaya çıkar.

**Neden zor?** Bir tarafta bir kişinin özgürlüğü ve ikinci şans hakkı, öbür tarafta başka kişilerin güvenliği vardır. Tip I hatanın bedelini hükümlü öder, Tip II hatanın bedelini ise karara hiç katılmamış üçüncü kişiler öder. Gelecekteki davranışı kesin olarak öngörmek mümkün olmadığı için iki hata da her zaman bir olasılık olarak kalır.

**İkilem 3 — Pilotların ruh sağlığı değerlendirmesi**

**Karar sorusu:** Bir pilot, ruh sağlığı değerlendirmesinden sonra uçuşa devam edebilir mi?

- **H0:** Pilot, uçuş güvenliğini tehlikeye atacak bir ruh sağlığı sorunu taşımamaktadır.
- **H1:** Pilot, uçuş güvenliğini tehlikeye atacak bir ruh sağlığı sorunu taşımaktadır.

**Tip I hata ne demek?** Pilot gerçekte uçuşa engel bir sorun taşımıyor, ama uçuştan men ediliyor.
*Olası sonuç:* Pilot mesleğini ve gelirini kaybedebilir. Daha geniş bir sonuç da vardır: pilotlar ruhsal destek aradıklarında uçuştan men edileceklerinden korkarsa, yardım istemekten kaçınabilirler.

**Tip II hata ne demek?** Pilot gerçekte uçuş güvenliğini tehlikeye atacak bir sorun taşıyor, ama uçuşa devam etmesine izin veriliyor.
*Olası sonuç:* Pilotun kendisi ve yolcular ciddi bir risk altında kalır.

**Neden zor?** Tip II hatanın bedeli çok sayıda kişiyi etkileyebilir; bu yüzden eşiği katılaştırmak cazip görünür. Ama eşik katılaştıkça Tip I hatalar artar ve bunun beklenmedik bir sonucu olur: pilotlar sorunlarını gizlemeye başlarsa değerlendirme işe yaramaz hâle gelir ve Tip II hata riski de dolaylı olarak artabilir. Bu örnek, bir hatayı azaltmaya çalışırken öbürünün beklenmedik yollardan artabileceğini gösterir.

**İkilem 4 — İntihar riski değerlendirmesi**

**Karar sorusu:** Bu kişi yüksek intihar riski taşıyor mu?

- **H0:** Kişi yüksek intihar riski taşımamaktadır.
- **H1:** Kişi yüksek intihar riski taşımaktadır.

**Tip I hata ne demek?** Kişi gerçekte yüksek risk taşımıyor, ama yüksek riskli kabul ediliyor.
*Olası sonuç:* Gereksiz gözetim ya da hastaneye yatış gibi müdahaleler yapılabilir; kişinin özerkliği ve mahremiyeti zarar görebilir; kişinin sağlık hizmetine güveni azalabilir.

**Tip II hata ne demek?** Kişi gerçekte yüksek risk taşıyor, ama düşük riskli kabul ediliyor.
*Olası sonuç:* Gerekli müdahale yapılmaz; sonuç ağır ve geri alınamaz olabilir.

**Neden zor?** Tip II hatanın sonucu geri alınamaz olabileceği için bu bağlamda Tip II hatanın önlenmesine ağırlık veren bir klinik ve etik tercih tartışılır. Ancak Tip I hatanın bedeli de yok sayılamaz: gereksiz müdahaleler kişinin özerkliğini zedeler ve kişinin ileride yardım istemekten kaçınmasına yol açabilir. Tercihin gerekçesi bağlama bağlıdır.

**İkilem 5 — Çocuk istismarı şüphesinin değerlendirilmesi**

**Karar sorusu:** Bu çocuk istismara uğruyor mu?

- **H0:** İstismar yoktur.
- **H1:** İstismar vardır.

**Tip I hata ne demek?** Gerçekte istismar yok, ama varmış gibi karar veriliyor.
*Olası sonuç:* Bir bakım veren haksız yere suçlanır; aile bütünlüğü, itibar ve hukuki haklar zarar görebilir; çocuk da bu süreçten olumsuz etkilenebilir.

**Tip II hata ne demek?** Gerçekte istismar var, ama gözden kaçırılıyor.
*Olası sonuç:* Çocuk riskli ortamda bırakılır.

**Neden zor?** İki hata da ciddi etik sonuçlar doğurur ve ikisinde de çocuk zarar görebilir. "Hangi hata daha kabul edilebilir?" sorusunun **tek bir cevabı yoktur**; bağlam, kanıt düzeyi ve karar sürecinin güvenceleri (ek değerlendirme, uzman görüşü) belirleyicidir.

**İkilemlerin ortak noktası.** Bu beş örnekte iki hatanın bedeli de ağırdır ve çoğu zaman **farklı kişiler tarafından ödenir**: Tip I hatanın bedelini karar verilen kişi, Tip II hatanın bedelini başkaları (bir çocuk, yolcular, olası mağdurlar) öder ya da tam tersi. Bu yüzden bu kararlar yalnızca istatistiksel değil, aynı zamanda etik kararlardır. Böyle durumlarda karar verenler hata riskini azaltmak için ek kanıt toplama, ikinci bir değerlendirme ve kararı yeniden gözden geçirme olanağı gibi güvencelere başvurur.

### 5.9 Bu örneklerin ortak dersi

Bütün örneklerde aynı iki adım izlendi. **Birinci adım** her zaman aynıdır ve bağlamdan bağımsızdır: H0 yazılır, gerçek durum ve karar eşleştirilir, hata adlandırılır. **İkinci adım** bağlama bağlıdır: yanlış kararın kime, nasıl zarar verdiği; zararın büyüklüğü, yayılımı, geri alınabilirliği ve seçeneklerin varlığı değerlendirilir.

α ve β teknik hata olasılıklarıdır. Karar verirken bu olasılıklarla birlikte **yanlış kararın kime ve nasıl zarar verebileceği** de değerlendirilir; ikisinden biri tek başına yeterli değildir.

---

## 6. Eşiği katılaştırmak

### 6.1 α'yı küçültmenin etkisi

::: {.callout-important appearance="simple"}
## Kural
Örneklem büyüklüğü, gerçek etki ve diğer koşullar aynı kaldığında, α'yı küçültmek (H0'ı reddetmek için daha güçlü kanıt istemek) **Tip I hata olasılığını azaltır, Tip II hata olasılığını artırır.**
:::

Hukuki kararlar örneğinde (5.7) bu kuralın bir benzerini gördük: "makul şüphenin ötesinde" ölçütü mahkûmiyeti zorlaştırır ve suçsuz kişiyi mahkûm etme riskini azaltır. Ama aynı ölçüt, suçlu bir kişinin suçluluğunun kanıtlanamama riskini artırır.

Nedeni basittir. H0'ı reddetmek zorlaştığında, H0 gerçekten yanlış olduğu durumlarda da reddetmek zorlaşır. Eşik, iki yöne birden etki eder: yanlış "var" kararlarını azaltırken doğru "var" kararlarını da azaltır.

Terapi örneğine dönelim. Bir araştırmacı, etkisiz bir yöntemi etkili ilan etmekten kaçınmak istiyor; yani Tip I hata riskini düşürmek istiyor. Bunun için α'yı küçültür. Sonuçta yanlış etkililik iddiaları azalır. Ama gerçekten etkili bir terapinin etkisini kaçırma riski, yani Tip II hata riski artar. Yararlı bir yöntem terk edilebilir.

Bu yüzden "α ne kadar küçükse o kadar iyidir" denemez. Uygun eşik, iki hatanın sonuçları birlikte tartılarak belirlenir: Tip I hatanın bedeli yüksekse eşik katılaştırılır, ama bunun Tip II hatayı artıracağı bilinerek.

---

## Dikkat edilmesi gereken noktalar

Bu notta en sık karıştırılan noktalar şunlardır. Her biri ilgili konuda anlatıldı; burada tek yerde toplandı.

**Standart hata ve hipotezler (1. ve 2. konular)**

1. **Standart sapma kişilerin, standart hata ortalamaların yayılımıdır.**
2. **Örneklem büyüdükçe standart hata küçülür, standart sapma sistematik olarak küçülmez.**
3. **Standart hata yanlılığı düzeltmez.** Yalnızca rastgele oynamayı anlatır.
4. **H0 sınanan başlangıç iddiasıdır;** etki araştırmalarında "etki yoktur" biçiminde kurulur.

**p değeri ve α (3. konu)**

5. **p değeri, H0 doğru olsaydı bu kadar uç bir sonucun olasılığıdır.** H0'ın doğru olma olasılığı değildir.
6. **Küçük p, büyük ya da önemli bir etki demek değildir.**
7. **p veriden hesaplanır; α araştırmadan önce belirlenir.**

**Hata türleri (4. konu)**

8. **Tip I: H0 doğruyken reddetmek. Tip II: H0 yanlışken reddedememek.**
9. **Hata türü yalnızca karara bakılarak belirlenemez.** Önce H0, sonra gerçek durum, sonra karar; en son tabloda eşleştirme.
10. **α Tip I, β Tip II hata olasılığıdır.** Olasılıktır; tek bir araştırmada hata yapılıp yapılmadığını söylemez.
11. **"Yanlış pozitif / yanlış negatif" adlarına değil, H0'a bak.** Hata türünü belirleyen H0 ve gerçek durumdur.

**Hataların sonuçları ve eşik (5. ve 6. konular)**

12. **Hatanın türü ile ağırlığı ayrı sorulardır.** Önce hata adlandırılır (bağlamdan bağımsız), sonra sonucu bağlama göre değerlendirilir.
13. **"Her zaman Tip I daha kötüdür" diye bir kural yoktur.** Ağırlık; zararın büyüklüğüne, kimlere yayıldığına, düzeltilebilirliğe, gecikmenin sonucuna ve seçeneklerin varlığına bağlıdır.
14. **Aynı H0 yapısında ağırlık zıt yönde olabilir.** Reçetesiz ağrı kesicide Tip I, başka seçeneği kalmamış kanser hastalarında Tip II hata daha ağırdır; yankesicilik davasında Tip I, koruma kararında Tip II hata daha ağırdır.
15. **Kanıt eşiği, hangi hatanın daha ağır olduğuna göre belirlenir.** Ceza davasında eşik yüksek ("makul şüphenin ötesinde", Tip I riskini azaltmaya yönelik), koruma kararında daha düşüktür. Ölçüte sayısal bir α atanmaz.
16. **Tarama sonucu tek başına kesin tanı değildir.** Örneklerdeki "var/yok" kararları basitleştirilmiştir.
17. **Tedavi örneklerinde H0 etkililik hakkındadır;** etkili bulunmak güvenli olduğunu göstermez.
18. **Etik ikilemlerde iki hata da ağırdır** ve bedelleri çoğu zaman farklı kişiler tarafından ödenir; "hangisi daha kabul edilebilir?" sorusunun tek bir cevabı yoktur.
19. **Bir hatayı azaltmaya çalışmak öbürünü beklenmedik yollardan artırabilir** (pilot değerlendirmesi örneği).
20. **α'yı küçültmek her şeyi iyileştirmez.** Diğer koşullar aynıyken Tip I riskini azaltır, Tip II riskini artırır.

## Kontrol soruları

### 1.–3. Konular: Standart hata, hipotezler, p değeri ve α

1. Standart sapma ile standart hata arasındaki fark nedir? Her biri hangi soruyu cevaplar?
2. Bir araştırmada örneklem 40 kişiden 400 kişiye çıkarıldı. Standart hata ve standart sapma nasıl etkilenir?
3. Gönüllülerle yürüyen bir çalışmaya çok sayıda yeni gönüllü eklendi. Standart hata küçüldü. Bu, seçimin yanlılığının da azaldığını gösterir mi?
4. Örnekleme dağılımı bir kişinin değerlerinin mi, ortalamaların mı dağılımıdır?
5. Bir terapi araştırması için sıfır hipotezini ve alternatif hipotezi yaz.
6. Bir depresyon taraması için H0 nedir?
7. "p = 0,03, o hâlde H0'ın doğru olma olasılığı %3'tür." Bu yorum neden yanlıştır?
8. "p değeri çok küçük, o hâlde terapinin etkisi çok büyüktür." Bu yorum neden yanlıştır?
9. p değeri ile α arasındaki fark nedir? Hangisi araştırmadan önce belirlenir?

::: {.callout-note collapse="true" title="Cevaplar (1.–3. Konular)"}
1. Standart sapma kişilerin değerlerinin yayılımıdır ve "kişiler birbirinden ne kadar farklı?" sorusunu cevaplar. Standart hata örneklem ortalamalarının yayılımıdır ve "ortalama örneklemden örnekleme ne kadar oynar?" sorusunu cevaplar.
2. Standart hata küçülür. Standart sapma sistematik olarak küçülmez; kişiler hâlâ birbirinden aynı ölçüde farklıdır.
3. Hayır. Standart hata yalnızca rastgele oynamayı anlatır; seçimin yanlılığını düzeltmez.
4. Ortalamaların dağılımıdır.
5. H0: Terapinin etkisi yoktur. H1: Terapinin etkisi vardır.
6. H0: Kişide depresyon yoktur.
7. p değeri H0'ın doğru olma olasılığı değildir. H0 doğru olsaydı bu kadar uç bir sonucun elde edilme olasılığıdır.
8. p değeri etkinin büyüklüğünü ya da önemini göstermez; yalnızca sonucun H0 altında ne kadar olağandışı olduğunu gösterir.
9. p veriden hesaplanır; α, H0 doğruyken onu reddetme olasılığını sınırlayan ve araştırmadan önce belirlenen eşiktir.
:::

### 4. Konu: Hata türleri

1. Tip I ve Tip II hatayı tanımla.
2. H0: "Terapinin etkisi yoktur." Terapi gerçekte etkisizdir, ama araştırmacı etkili bulmuştur. Bu hangi hatadır?
3. H0: "Terapinin etkisi yoktur." Terapi gerçekte etkilidir, ama araştırmacı etkisini gösterememiştir. Bu hangi hatadır?
4. H0: "Terapinin etkisi yoktur." Terapi gerçekte etkilidir ve araştırmacı etkili bulmuştur. Bir hata var mıdır?
5. "Terapi etkili bulundu, o hâlde doğru karar verildi." Bu cümledeki düşünme hatası nedir?
6. H0: "Kişide depresyon yoktur." Depresyonu olmayan bir kişiye tarama "var" demiştir. Bu hangi hatadır? Yanlış pozitif mi, yanlış negatif mi?
7. H0: "Kişide depresyon yoktur." Depresyonu olan bir kişiye tarama "yok" demiştir. Bu hangi hatadır?
8. α ve β neyin olasılığıdır? Tek bir araştırmada hata yapılıp yapılmadığını söylerler mi?
9. Bir hatayı adlandırırken hangi sıra izlenir?
10. H0: "Sanık suçsuzdur." Gerçekte suçsuz olan kişi mahkûm edilmiştir. Bu hangi hatadır?

::: {.callout-note collapse="true" title="Cevaplar (4. Konu)"}
1. Tip I hata, H0 gerçekte doğruyken onu reddetmektir. Tip II hata, H0 gerçekte yanlışken onu reddedememektir.
2. Tip I hata. H0 doğruyken reddedilmiştir.
3. Tip II hata. H0 yanlışken reddedilememiştir.
4. Hayır, doğru karardır. H0 yanlışken reddedilmiştir.
5. Hata türü yalnızca karara bakılarak belirlenemez. Terapi gerçekte etkisizse aynı karar Tip I hatadır; önce gerçek durum belirlenmelidir.
6. Tip I hata (H0 doğruyken reddedilmiş). Yanlış pozitiftir.
7. Tip II hata (H0 yanlışken reddedilememiş). Yanlış negatiftir.
8. α, H0 doğruyken Tip I hata yapma olasılığıdır; β, H0 yanlışken Tip II hata yapma olasılığıdır. Tek bir araştırmada hata yapılıp yapılmadığını söylemezler.
9. Önce H0 yazılır, sonra gerçek durum belirlenir, sonra karar belirlenir, en son tabloda eşleştirilir.
10. Tip I hata. H0 (sanık suçsuzdur) doğruyken reddedilmiştir.
:::

### 5. Konu: Hataların sonuçları

1. "Hangi hata yapıldı?" ile "bu hata ne kadar ağır?" soruları neden ayrı sorulardır?
2. Bir hatanın ağırlığını değerlendirirken hangi etkenlere bakılır?
3. Araştırma sorusu: "Uyku yoksunluğu dikkat performansını düşürür mü?" H0'ı yaz. Bu soruda Tip I ve Tip II hata ne anlama gelir?
4. Aynı soruda hangi hata daha ağır görülebilir? Neden?
5. Araştırma sorusu: "Sosyal medya kullanım süresi ile yalnızlık arasında ilişki var mı?" Tip I hata ne anlama gelir ve olası sonucu nedir? İlişki bulunursa bu, sosyal medyanın yalnızlığa neden olduğunu gösterir mi?
6. Araştırma sorusu: "Yeni bir zorbalık önleme programı zorbalık olaylarını azaltır mı?" Etkisiz programın etkili bulunması hangi hatadır? Bu hatanın okullar için olası sonucu nedir?
7. H0: "Kişide depresyon yoktur." Depresyonu olan bir kişi tarama sonucunda "yok" kararı almıştır. Hangi hatadır? Desteğe erişimin çok zor olduğu bir bölgede bu hata neden daha kritik görülebilir?
8. H0: "Terapinin etkisi yoktur." Etkisiz terapi etkili kabul edilmiştir. Hangi hatadır? Kaynak kullanımı ve kişilerin beklentileri açısından ne olabilir?
9. Yeni bir reçetesiz ağrı kesici için H0: "Yeni ilaç mevcut ilaçlardan daha etkili değildir." Hangi hata daha ağırdır? Neden?
10. Standart tedavilerin işe yaramadığı ileri evre kanser hastalarında yeni bir tedavi için H0: "Tedavinin yaşam süresi üzerinde etkisi yoktur." Hangi hata daha ağırdır? Neden?
11. 9. ve 10. sorularda H0'ın yapısı ve hata türlerinin tanımı aynıdır. Ağırlığın zıt yönde olmasının nedeni nedir?
12. "Tedavi etkili kabul edildi, o hâlde güvenlidir." Bu yorum neden yanlıştır?
13. Yankesicilikle suçlanan bir sanık için H0: "Sanık suçsuzdur." Tip I ve Tip II hata ne anlama gelir? Hangisi daha ağırdır?
14. "Makul şüphenin ötesinde" ölçütü hangi hata riskini azaltmaya yöneliktir?
15. Aile içi şiddet başvurusunda koruma kararı için H0: "Kişi şiddet tehlikesi oluşturmamaktadır." Hangi hata daha ağırdır? Koruma kararlarında kanıt eşiğinin ceza davalarından daha düşük tutulmasının nedeni nedir?
16. Şartlı tahliye kararında (H0: "Hükümlü yeniden ciddi bir suç işlemeyecektir") Tip I ve Tip II hatanın bedelini kimler öder? Bu karar neden zordur?
17. Pilotların ruh sağlığı değerlendirmesinde eşiği çok katılaştırmanın beklenmedik bir sonucu ne olabilir?
18. "Tip I hata her zaman Tip II hatadan daha kötüdür." Bu yargı doğru mu? Notta Tip II hatanın daha ağır olduğu bir örnek ver.

::: {.callout-note collapse="true" title="Cevaplar (5. Konu)"}
1. Hata türü H0, gerçek durum ve karar eşleştirilerek bulunur ve bağlamdan bağımsızdır; ağırlığı ise bağlama göre değerlendirilir. Hatanın adı ağırlığını belirlemez.
2. Zararın büyüklüğü, kimlere yayıldığı, düzeltilebilirlik, gecikmenin sonucu ve başka seçeneklerin varlığı.
3. H0: Uyku yoksunluğunun dikkat performansı üzerinde etkisi yoktur. Tip I: uykusuzluk gerçekte dikkati etkilemiyorken etkilediği sonucuna varılması. Tip II: uykusuzluk gerçekte dikkati düşürürken bu etkinin bulunamaması.
4. Tip II hata. Gözden kaçan etki, dikkatin hayati olduğu işlerde (araç kullanmak, nöbet tutmak) önlem alınmamasına yol açar; Tip I hatanın bedeli görece sınırlıdır.
5. Gerçekte ilişki yokken ilişki bulunması. Sosyal medya yanlış biçimde yalnızlığın kaynağı sanılabilir, gereksiz kısıtlamalar getirilebilir, asıl nedenler gözden kaçabilir. Hayır; ilişki nedensellik göstermez.
6. Tip I hata. Etkisiz program yaygınlaşır, kaynaklar boşa gider, okullar "önlem aldık" diye başka çözüm aramayı bırakır ve zorbalığa uğrayan öğrenciler korunmamaya devam eder.
7. Tip II hata. Desteğe erişim zorsa kaçırılan kişinin sonradan desteğe ulaşması güçleşir; gecikmenin sonuçları ağırlaşır.
8. Tip I hata. Zaman ve kaynak yararsız bir uygulamaya ayrılır; kişilerde yanlış bir güven oluşur.
9. Tip I hata. Mevcut etkili ilaçlar olduğu için etkili bir ilacı kaçırmanın bedeli küçüktür; etkisiz ilacın onaylanması ise gereksiz masrafa ve yaygın kullanım nedeniyle olası bir zararın çok kişiye yayılmasına yol açar.
10. Tip II hata. Başka seçeneği kalmamış hastalar, yaşam sürelerini uzatabilecek tek tedaviden yoksun kalır ve bu kayıp geri alınamaz.
11. Bağlam: başka seçeneklerin olup olmaması, zararın kaç kişiye yayıldığı ve sonuçların geri alınabilirliği.
12. H0 etkililik hakkındadır; etkili bulunmak güvenli olduğunu göstermez. Güvenlik ayrı bir değerlendirme gerektirir.
13. Tip I: suçsuz sanığın mahkûm edilmesi. Tip II: gerçekte suçlu sanığın suçluluğunun kanıtlanamaması. Tip I daha ağırdır; suçsuz birinin özgürlüğünü ve geleceğini kaybetmesi, maddi kaybı sınırlı bir hırsızlığın cezasız kalmasından daha büyük bir haksızlıktır.
14. Tip I hata riskini (suçsuz kişiyi mahkûm etme).
15. Tip II hata. Geçici koruma kararının yarattığı kısıtlama sınırlı ve geri alınabilirken, korunması gereken birinin korunmaması geri alınamaz sonuçlar doğurabilir. Kanıt eşiği, hangi hatanın daha ağır olduğuna göre belirlenir.
16. Tip I hatanın bedelini hükümlü öder (gereğinden uzun süre özgürlüğünden yoksun kalır). Tip II hatanın bedelini karara katılmamış üçüncü kişiler, yani olası yeni mağdurlar öder. Zordur, çünkü bir kişinin özgürlüğü ile başkalarının güvenliği karşı karşıyadır ve gelecekteki davranış kesin olarak öngörülemez.
17. Pilotlar uçuştan men edilmekten korkarak sorunlarını gizleyebilir ve yardım istemekten kaçınabilir. Bu durumda değerlendirme işe yaramaz hâle gelir ve Tip II hata riski dolaylı olarak artabilir.
18. Hayır. Hatanın adı ağırlığını belirlemez. Örneğin ileri evre kanser hastalarında etkili bir tedaviyi kaçırmak ya da aile içi şiddet başvurusunda koruma kararı vermemek (Tip II) daha ağırdır.
:::

### 6. Konu: Eşiği katılaştırmak

1. α'yı küçültmek ne anlama gelir?
2. Örneklem ve diğer koşullar aynıyken α küçültülürse Tip I ve Tip II hata olasılıkları nasıl değişir?
3. α küçülünce Tip II hata olasılığı neden artar?
4. H0: "Sanık suçsuzdur." "Makul şüphenin ötesinde" ölçütü katılaştırıldığında hangi hata riski artar? Neden?
5. H0: "Psikolojik müdahalenin etkisi yoktur." Araştırmacı yanlış pozitiflerden kaçınmak için eşiği katılaştırıyor; örneklem ve diğer koşullar aynı. Hangi hata riski azalır, hangisi artar? Bunun uygulamadaki olası sonucu nedir?
6. "α ne kadar küçük olursa o kadar iyidir." Bu yargı neden yanlıştır?
7. Tip I hatanın bedelinin çok yüksek olduğu bir bağlamda eşik nasıl ayarlanır? Bunun bedeli nedir?

::: {.callout-note collapse="true" title="Cevaplar (6. Konu)"}
1. H0'ı reddetmek için daha güçlü kanıt istemek.
2. Tip I hata olasılığı azalır, Tip II hata olasılığı artar.
3. H0'ı reddetmek zorlaştığında, H0 gerçekten yanlış olduğu durumlarda da reddetmek zorlaşır.
4. Tip II hata riski artar. Mahkûmiyet zorlaştığı için gerçekte suçlu olan kişinin suçluluğunun kanıtlanamama riski artar.
5. Tip I hata riski azalır, Tip II hata riski artar. Yanlış etkililik iddiaları azalır, ama gerçekten etkili bir müdahale kaçırılıp terk edilebilir.
6. α'yı küçültmek Tip II hata riskini artırır. Uygun eşik iki hatanın sonuçları birlikte tartılarak belirlenir.
7. Eşik katılaştırılır (α küçültülür). Bedeli, Tip II hata riskinin artmasıdır.
:::
