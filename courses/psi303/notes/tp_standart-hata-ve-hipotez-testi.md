---
title: "Bu Fark Şans Olabilir mi? Standart Hata ve Hipotez Testi Mantığı"
subtitle: "PSİ 303 — Davranışsal İstatistik için Yazılım Uygulamaları"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-19
description: Örnekleme dağılımı ve standart hata; standart sapma ile standart hata ayrımı; sıfır ve alternatif hipotez, yönlü ve yönsüz hipotez; p değeri, anlamlılık düzeyi ve karar; Tip I ve Tip II hata.
execute:
  echo: false
---

## Üç puanlık fark

Bir okulda geçmiş yıllarda bir dersin sınav ortalaması **75**.

Bu yıl yeni bir öğretim yöntemi deneniyor; 25 öğrencinin ortalaması **78**.

> Yeni yöntem işe yaradı mı, yoksa bu yılın öğrencileri şans eseri biraz daha mı iyiydi?

::: {.notes}
Üç puanlık bir artış var. Yöntemi geliştiren öğretmen için bu bir başarı işareti; ama dikkatli bir okur şunu sorar: başka bir 25 öğrenci, aynı yöntemle bile, tesadüfen 73 ya da 77 alabilir miydi? İlk notta, rastgele seçimde bile sonucun bir örneklemden ötekine değiştiğini (örnekleme değişkenliğini) görmüş ve bu oynamayı ileride ölçeceğimizi söylemiştik. Gözlediğimiz fark, bu doğal oynamanın içinde kalıyorsa yöntemin etkisi hakkında bir şey söyleyemeyiz.

Önce bir örneklem ortalamasının ne kadar oynadığını ölçeceğiz (standart hata), sonra gözlediğimiz farkın bu oynamayla açıklanıp açıklanamayacağına karar vereceğiz (hipotez testi). Standart hatanın karmaşık hesaplarına girmeyeceğiz.
:::

---

## Ortalamalar nasıl oynar?

<div data-anim="custom" data-src="sampling-distribution.js" data-css="sampling-distribution.css"></div>

Ortalamalar nerede toplanıyor; evrene göre ne kadar dar ve n büyüyünce ne oluyor?

::: {.notes}
İlk notta 400 kişilik bir evrenden tekrar tekrar örneklem çekmiş ve ortalamaların bir sayı doğrusunda biriktiğini görmüştük. Bu deneyi yüzlerce, binlerce kez tekrarlayıp ortalamaların histogramını çizdiğimizi düşünün. Sağda oluşan histogram, örneklem ortalamalarının nasıl dağıldığını gösterir.

Bu deneyi gerçek bir araştırmada yapamayız; elimizde yalnızca bir örneklem vardır. Ama simülasyonla yapabiliriz ve ortaya çıkan tablo, tek örneklemli gerçek araştırmalarda hangi sonuçların beklenebileceğini anlamamızı sağlar. Animasyonda üç şeye dikkat edin: ortalamaların nerede toplandığına, evrene göre ne kadar dar olduklarına ve n büyüdükçe ne olduğuna.
:::

---

## Örnekleme dağılımı

> **Örnekleme dağılımı:** Aynı evrenden aynı büyüklükte çekilebilecek bütün örneklemlerin ortalamalarının dağılımı.

Üç özellik:

1. **Merkezi:** evren ortalaması
2. **Yayılımı:** evrenin yayılımından **dar**; n büyüdükçe daha da daralır
3. **Biçimi:** n yeterince büyükse, evren çarpık olsa bile **çana yaklaşır** (evren çok çarpıksa küçük n'de henüz yaklaşmayabilir)

::: {.notes}
Örnekleme dağılımı, tek tek kişilerin değil, örneklem ortalamalarının dağılımıdır. Animasyonda gördüğümüz üç özellik, istatistiğin en önemli sonuçlarından biridir.

Ortalamalar evren ortalamasının çevresinde toplanır: rastgele seçimde ortalamalar ne sistematik olarak yukarıda ne aşağıdadır. Ortalamalar tek tek değerlerden çok daha az dağılır: bir örneklemde çok yüksek ve çok düşük değerler birbirini dengeler, ortalama uçlara kolay kolay gitmez. Ve örneklem büyüdükçe bu dengeleme güçlenir.

Üçüncü özellik ise en şaşırtıcı olanıdır: evren sağa çarpık olsa bile, örneklem yeterince büyükse ortalamaların dağılımı normal dağılıma yaklaşır. Bu, önceki notta normal dağılımın neden bu kadar önemli olduğunu söylerken kastettiğimiz şeydir. Testlerin büyük kısmı tek tek değerlerin değil, ortalamaların dağılımı üzerine kurulur. Bir sınır var: evren çok çarpıksa ve örneklem küçükse ortalamalar henüz çana yaklaşmayabilir.
:::

---

## Standart hata

> **Standart hata (SH):** Örnekleme dağılımının standart sapması; bir örneklem ortalamasının tipik olarak ne kadar oynadığı.

Örneklemi **dört katına** çıkarmak SH'yi **yarıya** indirir.

::: {.notes}
Örnekleme dağılımının yayılımı ayrı bir adla anılır: standart hata. İlk notta örnekleme değişkenliği dediğimiz oynamanın büyüklüğünü bu ölçer: bir örneklem ortalamasının evren ortalamasından tipik olarak ne kadar uzaklaşabileceğini söyler. Hesabı basittir: örneklemin standart sapmasını örneklem büyüklüğünün kareköküne böleriz. Formülde s örneklemin standart sapması, n kişi sayısıdır. Burada s = 10 olduğunda n = 25 için SH = 10 / 5 = 2, n = 100 için SH = 10 / 10 = 1 olur. Bu hesap kişilerin rastgele ve birbirinden bağımsız seçildiğini varsayar; aynı kişiden birden çok ölçüm alındıysa n kişi sayısı değildir.

Formül iki sezgiyi birleştirir. Kişiler birbirinden ne kadar farklıysa (s büyükse) ortalama da o kadar çok oynar. Örneklem ne kadar büyükse (n büyükse) ortalama o kadar az oynar. Karekökün bir sonucu da şudur: standart hatayı yarıya indirmek için örneklemi iki değil dört katına çıkarmak gerekir. Standart hata küçükse ortalama örneklemden örnekleme az oynar; büyükse çok oynar.
:::

---

## Standart sapma ile standart hata

| | Standart sapma (SD) | Standart hata (SH) |
|---|---|---|
| Neyin yayılımı? | **Kişilerin** değerleri | **Örneklem ortalamaları** |
| Soru | Kişiler birbirinden ne kadar farklı? | Ortalama ne kadar oynar? |
| n büyüyünce | Küçülmez; evrendeki değere daha iyi yaklaşır | Küçülür |
| Yanlılığı düzeltir mi? | — | Hayır; yalnızca rastgele oynamayı anlatır |

::: {.notes}
Bu iki kavram adları ve hesapları birbirine benzediği için sık karıştırılır. Standart sapma kişiler arasındaki farklılığı anlatır: öğrencilerin notları birbirinden ne kadar uzak?

Standart hata ise ortalamanın örneklemden örnekleme tipik olarak ne kadar oynadığını anlatır. Daha büyük bir örneklem ortalamayı daha kararlı hâle getirir, standart hata küçülür. Örneklem büyüdükçe s, evrendeki dağınıklığa daha iyi yaklaşır. Bir raporda "M = 78, SD = 10" ile "M = 78, SH = 2" farklı şeyler söyler: birincisi öğrencilerin dağınıklığını, ikincisi ortalamanın ne kadar oynayabileceğini.

Standart hata ortalamanın rastgele oynamasını ölçer; seçim yanlıysa onu görmez. İlk notta gördüğümüz gibi yanlı bir yerden seçilmiş büyük bir örneklemde standart hata küçüktür, ama ortalama yine de evren değerinden sistematik olarak uzaktır. Daha çok kişiye ulaşmak yanlılığı düzeltmez.
:::

---

## Günlük hayatta standart hata: "hata payı"

> "Ankete göre adayın oy oranı %48; hata payı ±3 puan."

- 1.000 kişilik ankette oranın standart hatası ≈ 1,6 puan
- Hata payı ≈ 2 × SH ≈ **3 puan**
- Bu yöntem tekrarlansa aralıkların ≈%95'i gerçek oranı kapsar: **%45 ile %51 arası**
- %48 ile %50: iki puanlık fark hata payının **içinde**

::: {.notes}
Seçim anketlerindeki hata payı doğrudan standart hatadan gelir. Bin kişilik bir örneklemde %50 civarındaki bir oranın standart hatası yaklaşık 1,6 puandır; hata payı bunun iki katı, yaklaşık 3 puandır.

Normal dağılımda değerlerin yaklaşık %95'i ortalamadan iki standart sapma içinde kaldığı için, aynı anket tekrar tekrar yapılsa örneklem oranlarının yaklaşık %95'i evren oranından 3 puandan az uzaklaşırdı. Elimizdeki tek ankette bu bant %45–%51'dir; aynı yöntemle çok sayıda anket yapılıp her birinden böyle bir aralık kurulsaydı, aralıkların yaklaşık %95'i gerçek oranı kapsardı. Bu yaklaşım basit rastgele örnekleme ve yaklaşık normal modele dayanır; ağırlıklandırılmış ya da karmaşık desenleri kapsamaz.

%48 ile %50 alan iki aday arasındaki iki puanlık fark bu hata payının içinde kalır; birinin önde olduğunu söyleyemeyiz. Bu, bir farkı ortalamanın doğal oynamasıyla karşılaştırmanın ilk örneğidir.
:::

---

## Madeni para hileli mi?

Bir arkadaşınız madeni parayı 10 kez atıyor: **9 tura, 1 yazı**.

- Para adil olsaydı bu sonuç ne kadar olasıydı?

. . .

- Adil bir parayla 10 atışta 9 ya da 10 tura gelme olasılığı ≈ **%1**
- Ya 9 ya da daha fazla tura **veya** yazı: ≈ **%2**

> Ya çok nadir bir şey oldu, ya da para adil değil.

::: {.notes}
Gözlenen farkın şansla açıklanıp açıklanamayacağına karar vermek için bir karar mantığına ihtiyacımız var. Önce onu daha sezgisel bir örnekte kuralım. Hile yapıldığından şüphelenmek için önce "adil bir para olsaydı ne beklerdim?" diye sorarız. Adil bir parayla 10 atışta 5 civarında tura beklenir; 6 ya da 4 sık görülür. 10 atışın 1024 eşit olası sonucundan 9 ya da 10 tura içeren 11 tanesi vardır; olasılık 11 / 1024, yaklaşık yüzde birdir.

Bu olasılık çok küçük olduğu için iki seçenek kalır: ya gerçekten çok nadir bir şey oldu, ya da paranın adil olduğu varsayımı yanlıştır. Bilimsel karar verme tam olarak bu mantığı izler. Bir "hiçbir şey yok" varsayımı kurarız, gözlediğimiz sonucun bu varsayım altında ne kadar olası olduğunu hesaplarız ve olasılık yeterince küçükse varsayımı bırakırız.

İkinci satırdaki %2, "hile" kelimesini her iki yönde düşündüğümüzde ortaya çıkar: hileli bir para tura kadar yazı da gösterebilir. Bunu yönsüz hipotez olarak birazdan adlandıracağız.
:::

---

## Sıfır hipotezi ve alternatif hipotez

| | Madeni para | Yeni yöntem |
|---|---|---|
| **H0** (sıfır hipotezi) | Para adil | Yöntem ortalamayı değiştirmiyor: μ = 75 |
| **H1** (alternatif hipotez) | Para adil değil | Yöntem ortalamayı değiştiriyor: μ ≠ 75 |

H0: etki/fark yok · H1: araştırılan etki/fark var · μ: evren ortalaması.

- **Yönsüz H1:** "farklı" (≠)
- **Yönlü H1:** "daha yüksek" (>) ya da "daha düşük" (<) — veriye bakmadan **önce** belirlenir.

::: {.notes}
Sıfır hipotezi (H0), "etki yok, fark yok" diyen varsayımdır: para adildir, yöntem ortalamayı değiştirmez. Alternatif hipotez (H1) araştırmacının göstermeye çalıştığı durumdur: bir etki ya da fark vardır. μ (mü) harfi evren ortalamasını gösterir; hipotezler her zaman evren hakkında kurulur, örneklem hakkında değil. Örneklemin ortalamasının 78 olduğunu zaten biliyoruz; soru, evrenin ortalamasının 75'ten farklı olup olmadığıdır. 75'i geçmiş yılların ortalaması olarak sabit sayıyoruz: sınav ve öğrenci grubu geçen yıllarla benzerse fark yönteme bağlanabilir, değilse bağlanamaz.

H1 yönsüz olabilir ("farklıdır") ya da yönlü ("daha yüksektir"). Yön, araştırmaya başlamadan önce kuramsal bir gerekçeyle belirlenmelidir. Veriye bakıp farkın hangi yönde çıktığını gördükten sonra yönlü hipotez kurmak, sonucu olduğundan daha güçlü göstermek demektir. Emin değilseniz yönsüz hipotez güvenli tercihtir.

Yönlü bir örnek: yöntemin ortalamayı artırdığını kuramsal olarak bekleyen araştırmacı H0: μ = 75 ve H1: μ > 75 yazar. Yönlü testte yalnız bir uç sayıldığı için sonuç daha kolay anlamlı çıkar; yön veriden önce seçilmezse bu fazladan kolaylık sahte olur.
:::

---

## p değeri

> **p değeri:** H0 doğru olsaydı, gözlediğimiz kadar ya da daha uç bir sonuç görme olasılığı.

Yeni yöntem sınıfı (*s* = 10, *n* = 25): SH = 10 / √25 = 2 puan

Fark: 78 − 75 = 3 puan = **1,5 SH** → yönsüz **p ≈ 0,13**

> Yöntem hiçbir şey değiştirmese bile, 25 kişilik bir sınıfın ortalamasının 75'ten en az 3 puan (iki yönden biriyle) uzaklaşma olasılığı yaklaşık %13.

::: {.notes}
Yeni yöntem sınıfında öğrencilerin notlarının standart sapması 10, öğrenci sayısı 25; standart hata 2 puandır: yöntem hiçbir şey değiştirmese bile, 25 kişilik bir sınıfın ortalaması 75'in çevresinde tipik olarak 2 puan oynar. Gözlenen 3 puanlık fark bu tipik oynamanın bir buçuk katıdır: 1,5 standart hata. Bu, 9. notun diliyle z = 1,5'tir; orada soldaki alanı 0,93 okumuştuk. Burada aynı alanı iki uçta okuruz: sağ uçta 0,07, sol uçta 0,07 kalır; toplam yaklaşık 0,13.
:::

---

## Gözlenen ortalama değişince p değeri

<div data-anim="custom" data-src="tail-area-p.js" data-css="tail-area-p.css"></div>

::: {.notes}
p değeri, madeni para örneğindeki %2'nin genel adıdır: sıfır hipotezi doğru olsaydı, elimizdeki kadar ya da daha uç bir sonucu ne sıklıkla görürdük? Yeni yöntem örneğinde bu olasılık yaklaşık %13'tür. Başka bir deyişle, yöntem hiçbir etkiye sahip olmasa bile her sekiz sınıftan biri bu kadar büyük bir farkı tesadüfen gösterebilir.

Animasyonda p'nin bir alan olduğunu görebilirsiniz: H0'a göre çizilmiş örnekleme dağılımında, gözlenen değerin ötesinde kalan kuyruk alanı. Gözlenen ortalama merkezden uzaklaştıkça bu alan küçülür. Bu yüzden küçük bir p değeri, "H0 doğru olsaydı bu sonuç çok şaşırtıcı olurdu" demektir. Yönlü H1 (μ > 75) kurulmuş olsaydı yalnız üst uç sayılırdı ve p yaklaşık 0,07 çıkardı.

Burada p'yi normal dağılım yaklaşımıyla hesapladık (sayıyı yazılım ya da hesaplayıcı verir); t-testi notunda aynı mantığı, küçük örneklemler için daha uygun olan t dağılımıyla kullanacağız.
:::

---

## Karar: α ile karşılaştırma

Önceden belirlenen anlamlılık düzeyi: **α = 0,05**

| | Karar |
|---|---|
| p < α | H0 **reddedilir**: sonuç istatistiksel olarak anlamlı |
| p ≥ α | H0 **reddedilemez**: fark şansla açıklanabilir |

Yeni yöntem: p ≈ 0,13 ≥ 0,05 → **H0 reddedilemez.**

> **Reddedemedik ≠ H0 doğru.** Mahkemede olduğu gibi: yeterli kanıt yoksa karar "suçlu bulunmadı"dır, "suçsuz olduğu kanıtlandı" değil.

::: {.notes}
"Ne kadar küçük p yeterince küçüktür?" sorusunun cevabı, araştırmaya başlamadan önce belirlenen bir eşiktir: anlamlılık düzeyi, α (alfa). Psikolojide ve pek çok alanda geleneksel değer 0,05'tir. p bu eşiğin altındaysa sıfır hipotezini reddeder ve sonucu "istatistiksel olarak anlamlı" olarak raporlarız.

Yeni yöntem örneğinde p yaklaşık 0,13'tür; eşiğin üstündedir. Sıfır hipotezini reddedemeyiz: üç puanlık artış, yöntemin hiçbir etkisi olmasa bile kolayca ortaya çıkabilecek bir farktır. Bu, yöntemin işe yaramadığını göstermez; bu veriyle işe yaradığını gösteremediğimizi söyler. Aynı fark, 100 öğrencilik bir örneklemde (SH = 1) üç standart hatalık bir fark olur ve p yaklaşık 0,003'e düşerdi.

Hipotez testinin mantığı bir mahkemeye benzer. Sanık suçsuz kabul edilir (H0), iddia makamı aksini kanıtlamaya çalışır (H1). Kanıtlar yeterince güçlüyse sanık suçlu bulunur; değilse "suçlu bulunmadı" kararı verilir. Bu karar, sanığın suçsuz olduğunun kanıtlandığı anlamına gelmez; yalnızca suçluluğun kanıtlanamadığını söyler.

p ≥ 0,05 olduğunda da durum aynıdır. "Fark yoktur" ya da "yöntem etkisizdir" demek yanlıştır; doğrusu "anlamlı bir fark bulunamadı" demektir. Küçük bir örneklemle yapılan bir çalışmada gerçek bir etki rahatlıkla gözden kaçabilir.
:::

---

## p değeri ne **değildir**?

| Yaygın yanlış okuma | Doğrusu |
|---|---|
| "p = 0,03 → H0'ın doğru olma olasılığı %3" | p, H0 doğru **varsayılarak** hesaplanır; H0'ın olasılığını vermez |
| "Anlamlı → önemli" | İstatistiksel anlamlılık pratik önemi garanti etmez |

::: {.notes}
p değeri istatistiğin en çok yanlış yorumlanan kavramıdır. En yaygın hata, onu sıfır hipotezinin doğru olma olasılığı sanmaktır. Oysa p, H0'ın doğru olduğu varsayılarak hesaplanır; "H0 doğru olsaydı bu veriyi görmek ne kadar şaşırtıcı olurdu?" sorusunu cevaplar, "H0 ne kadar olası?" sorusunu değil.

İkinci önemli nokta, p'nin hem etkinin büyüklüğüne hem de örneklem büyüklüğüne bağlı olmasıdır. On bin kişilik bir örneklemde yarım puanlık, pratikte hiçbir anlamı olmayan bir fark bile anlamlı çıkabilir. Bu yüzden bir sonucu raporlarken p'nin yanında etkinin büyüklüğünü de vermek gerekir; bunu t-testi notunda etki büyüklüğü ölçüleriyle göreceğiz.
:::

---

## İki tür hata

Yangın alarmı:

| | Gerçekte yangın **yok** (H0 doğru) | Gerçekte yangın **var** (H0 yanlış) |
|---|---|---|
| Alarm **çalıyor** (H0 reddedildi) | **Tip I hata:** boş yere alarm | Doğru karar |
| Alarm **çalmıyor** (H0 reddedilmedi) | Doğru karar | **Tip II hata:** yangın kaçırıldı |

- Tip I hata olasılığı = **α** (genellikle %5)
- Var olan bir farkı yakalama şansına kısaca **güç** denir (ayrıntısı bu dersin dışında).
- Tip I hata payı **tek bir test** için α'dır; birden çok testte bu pay birikir (13. notta açılır).

::: {.notes}
Her karar bir hata riski taşır. Gerçekte etki yokken onu varmış gibi kabul etmek Tip I hatadır: alarmın boş yere çalması, etkisiz bir ilacın etkili sanılması. Gerçekte etki varken onu kaçırmak Tip II hatadır: yangın sırasında alarmın çalmaması, etkili bir tedavinin işe yaramaz sanılması.

α = 0,05 seçersek H0 doğruyken onu reddetme olasılığımız %5 olur. Örneklem büyüklüğü sabitken bu oranı küçültmek (örneğin 0,01) boş alarmları azaltır ama gerçek etkileri kaçırma riskini artırır; ikisi arasında bir denge vardır. Bir testin var olan bir farkı yakalama şansına da kısaca güç diyoruz; örneklem büyüdükçe artar. Gücün ayrıntılı hesabı bu dersin kapsamı dışındadır.

Bir uyarı daha: α tek bir test için geçerlidir. Aynı veriyle birçok test yaptığımızda boş alarm payları üst üste biner ve bir yerde alarm çalma ihtimali artar. Bu birikme, üç ve daha fazla grubu karşılaştırırken 13. notta karşımıza çıkacak.
:::

---

## Karar soruları

1. İki grubun standart sapması aynı; biri 16, öteki 64 kişilik. Hangisinin ortalaması daha az oynar ve kaç kat?
2. Bir araştırmacı veriyi gördükten sonra farkın "yüksek" yönde çıktığını fark edip hipotezini yönlü olarak yazıyor. Sorun ne?
3. "p = 0,04 çıktı; demek ki hipotezimin doğru olma olasılığı %96." Bu cümleyi düzeltin.
4. Bir çalışmada p = 0,20 çıkmış. Araştırmacı "müdahalenin hiçbir etkisi yoktur" diye yazıyor. Ne önerirsiniz?

::: {.notes}
1. Standart hata √n ile ters orantılıdır: √16 = 4, √64 = 8. 64 kişilik grubun ortalaması iki kat daha az oynar (standart hatası yarı yarıya küçüktür).
2. Yönlü hipotez, veriye bakmadan önce kuramsal bir gerekçeyle belirlenmelidir. Veriyi gördükten sonra farkın çıktığı yönü seçip yönlü test yapmak, yani gözlenen yöndeki kuyruğu seçmek, p değerini yapay olarak yarıya indirir ve Tip I hata oranını gizlice artırır.
3. p, H0 doğru varsayılarak hesaplanan bir olasılıktır; hipotezlerin doğru olma olasılığını vermez. Doğru okuma: "H0 doğru olsaydı bu kadar ya da daha uç bir sonuç görme olasılığı %4'tü; α = 0,05 düzeyinde H0 reddedildi."
4. Doğru ifade "anlamlı bir etki bulunamadı" olmalıdır. Etkinin yokluğu kanıtlanmış değildir; örneklem küçükse gerçek bir etki gözden kaçmış olabilir. Örneklem büyüklüğünün ve etkinin büyüklüğünün de raporlanması önerilir.
:::

---

## Bu nottan kalanlar

- **Örnekleme dağılımı:** örneklem ortalamalarının dağılımı; evren ortalamasında toplanır, n büyüdükçe daralır, çana yaklaşır.
- **Standart hata = s / √n:** ortalamanın tipik oynaması; SD ile karıştırılmamalı, yanlılığı düzeltmez.
- **H0:** etki yok; **H1:** etki var (yönlü ya da yönsüz, önceden belirlenir).
- **p:** H0 doğru olsaydı bu kadar ya da daha uç bir sonuç görme olasılığı; **p < α** → H0 reddedilir.
- Reddedememek H0'ı kanıtlamaz; anlamlı her sonuç önemli değildir.
- **Tip I:** boş alarm (olasılığı α); **Tip II:** kaçırılan etki; birden çok testte Tip I hata payı birikir.

Merkezî limit teoreminin biçimsel ifadesi, güç analizi ve test istatistiklerinin hesabı bu notun konusu değildir.

**Sıradaki konu:** Bu mantığı ilk gerçek testimizde kullanalım: t-testi.

::: {.notes}
Bu not, dersin geri kalanındaki testlerin ortak mantığını kurdu. Hepsi aynı karar yolunu izleyecek: bir H0 kur, gözlenen farkı şansla oynamanın büyüklüğüyle karşılaştır, p'yi α ile karşılaştırıp karar ver.

Değişen, neyin karşılaştırıldığı ve şans oynamasının nasıl ölçüldüğüdür. Sıradaki notta tek bir ortalamayı bir değerle ve iki grubun ortalamasını birbiriyle karşılaştıran t-testlerini göreceğiz.
:::
