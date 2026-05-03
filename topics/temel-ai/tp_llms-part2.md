---
title: "LLM - Modern Dönem"
subtitle: BİM444 — Hafta 12 · Part 2
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-04-20
execute:
  echo: false
---

## Büyük Dil Modelleri · Part 2

**Part 2: Transformer Sonrası Dönem**

Geçen bölümdeki açık problem:

> RNN ve erken sinir ağları uzun bağlam ve ölçekli eğitimde zorlanıyordu.

**Bugünkü soru**

> Dil modeli nasıl genel amaçlı bir yapay zekâ arayüzüne dönüştü?

::: {.notes}
İlk bölümde kural tabanlı sistemlerden istatistiksel yöntemlere, oradan da erken sinir ağı modellerine kadar geldik. Her aşamada aynı desen vardı: Bir yaklaşım önceki dönemin darboğazını çözdü, fakat daha büyük ölçekte yeni bir sınır üretti.

Bu bölümde o sınırın nasıl aşıldığını takip edeceğiz. Ana çizgi şudur: dikkat mekanizması, Transformer mimarisi, büyük ölçekli ön-eğitim, yönerge takibi, dış bilgi kullanımı ve çok modlu sistemler. Ama hedefimiz mimari ayrıntıya gömülmek değil; dil modelinin nasıl tek görevli bir NLP aracından genel amaçlı bir yapay zekâ arayüzüne dönüştüğünü anlamak.
:::

---

## Geçen Bölümün Açık Problemi

**Kısa bağlamdan uzun bağlama**

- n-gram: kısa pencere
- RNN / LSTM: teoride uzun bağlam
- Pratikte: eğitim zor, bellek sınırlı
- Embedding: daha iyi temsil, ama tek başına yeterli değil

**Geçiş sorusu**

> Model tüm bağlamı daha doğrudan görebilse ne olur?

::: {.notes}
n-gram modelleri yalnızca sabit uzunlukta bir pencere görüyordu. Bu yüzden cümlenin başındaki bir bilgi, birkaç kelime sonra etkisini kaybediyordu. RNN ve LSTM bu sınırı aşmak için önemli bir adımdı; çünkü modelin geçmişi gizli durum içinde taşıması hedefleniyordu.

Fakat pratikte bu bellek kolay öğrenilmiyordu. Uzun cümlelerde veya uzun belgelerde bilgi sıkışıyor, eğitim yavaşlıyor ve modelin uzak ilişkileri yakalaması zorlaşıyordu. Embedding’ler kelimeleri daha anlamlı temsil etti, ama bağlamın tamamını doğrudan işleme sorununu tek başına çözmedi.

Bu noktada temel soru değişti: Model geçmişi adım adım taşımak yerine, tüm girdiye daha doğrudan bakabilseydi ne olurdu? Attention ve Transformer bu soruya verilen cevaptır.
:::

---

## Seq2seq: Çeviri İçin Genel Çerçeve

**Girdi dizisi → çıktı dizisi**

- **Encoder:** kaynak cümleyi temsile çevirir
- **Decoder:** hedef cümleyi üretir
- Makine çevirisi için genel bir sinir ağı çerçevesi sundu

**Tıkanma**

Tüm girdi bilgisi tek bir temsile sıkıştırılıyordu.

::: {.notes}
Seq2seq yaklaşımı, özellikle makine çevirisi için güçlü bir çerçeve sundu. Encoder kaynak cümleyi okur ve bir temsil üretir; decoder ise bu temsile bakarak hedef dilde cümleyi adım adım oluşturur. Bu fikir, “bir diziyi başka bir diziye dönüştürme” problemlerini ortak bir çatı altında topladı.

Ancak erken seq2seq modellerinde önemli bir sıkışma vardı. Kaynak cümlenin bütün bilgisi tek bir vektöre veya sınırlı bir temsile aktarılıyordu. Kısa cümlelerde bu kabul edilebilir olabilir; fakat uzun cümlelerde baştaki ayrıntılar kaybolabiliyordu.

Bunu çeviri sezgisiyle düşünelim. Bir cümleyi çevirdiğimizde bütün cümleyi bir kez okuyup zihnimizde tek bir özet tutmayız. Hedef dilde belirli bir kelimeyi yazarken kaynak cümlenin ilgili kısmına tekrar bakarız. Attention bu sezgiyi modele taşır.
:::

---

## Attention: Tek Vektöre Sıkıştırma Sorununu Gevşetmek

**Sabit bellek → dinamik odak**

- Decoder, girdinin ilgili parçalarına bakabilir
- Her üretim adımında farklı kelimelere odaklanabilir
- Uzun cümlelerde bilgi kaybı azalır

**Çeviri sezgisi**

Bir kelimeyi çevirirken tüm cümleye değil, ilgili bölgeye bakarız.

::: {.notes}
Attention mekanizmasının ana fikri basittir: Decoder her adımda yalnızca tek bir sıkıştırılmış temsile güvenmek zorunda kalmaz. Bunun yerine kaynak cümlenin farklı parçalarına farklı ağırlıklarla bakabilir. Yani model, “şu anda hangi kelimeler daha önemli?” sorusuna her üretim adımında yeniden cevap verir.

Bu, özellikle çeviride çok doğaldır. Türkçeden İngilizceye çeviri yaparken bir fiili üretirken cümlenin sonuna, özneyi üretirken cümlenin başına bakmanız gerekebilir. Attention, modelin bu tür değişen odakları öğrenmesini sağlar.

Buradaki kritik değişim, belleğin sabit bir özet olmaktan çıkmasıdır. Model artık tüm girdiyi tek bir şişeye doldurmak yerine, ihtiyaç duyduğu anda ilgili parçaya erişebilir. Transformer bu fikri daha ileri taşıyacaktır.
:::

---

## Transformer: RNN’siz Sekans Modelleme

**Mimari kırılma**

- Attention ana mekanizma hâline gelir
- Tüm token’lar birbirleriyle ilişki kurabilir
- Sıralı işleme bağımlılığı azalır
- Paralel eğitim kolaylaşır

**Sonuç**

Transformer, modern LLM çizgisinin mimari temelidir.

::: {.notes}
Transformer’ın en önemli hamlesi, sekans modellemeyi RNN’e bağımlı olmaktan çıkarmasıdır. RNN’de bilgi bir adımdan diğerine sırayla taşınır. Transformer’da ise cümledeki token’lar birbirleriyle attention üzerinden doğrudan ilişki kurabilir.

Bu, iki açıdan büyük fark yaratır. Birincisi, uzun mesafeli ilişkiler daha erişilebilir hâle gelir. Cümlenin başındaki bir kelime ile sonundaki bir kelime arasında bilgi taşımak için çok sayıda ara adımdan geçmek gerekmez. İkincisi, eğitim daha paralel yapılabilir; çünkü model her token’ı tamamen sırayla işlemek zorunda değildir.

Bu yüzden Transformer yalnızca “daha iyi bir RNN” değildir. Erken sinir ağı NLP’sinin uzun bağlam ve ölçekli eğitim sorunlarına farklı bir hesaplama düzeni öneren mimari kırılmadır.
:::

---

## Transformer Neyi Değiştirdi?

**Ölçeklenebilir öğrenme**

- Büyük veriyle daha iyi çalıştı
- Paralel eğitim kapasitesini artırdı
- Uzun bağlam ilişkilerini daha kullanılabilir kıldı
- Büyük ölçekli ön-eğitimin temelini attı

**Kritik sonuç**

Daha büyük modelleri eğitmek pratik olarak mümkün hâle geldi.

::: {.notes}
Transformer’ın etkisini yalnızca doğruluk artışı olarak okumamak gerekir. Asıl fark, ölçeklenebilirliktir. Model mimarisi büyük veri ve güçlü hesaplama altyapısıyla daha uyumlu çalıştı. Bu da NLP’de “daha büyük model, daha büyük veri, daha uzun eğitim” çizgisini pratik hâle getirdi.

RNN tabanlı yaklaşımlar uzun dizilerde ve büyük ölçekli eğitimde zorlanırken, Transformer daha paralel eğitilebildi. Bu, akademik bir ayrıntı gibi görünebilir; fakat modern LLM’lerin ortaya çıkması için belirleyicidir. Çünkü milyarlarca kelimeyle eğitim yapacaksanız, modelin yalnızca teorik olarak güçlü olması yetmez; büyük ölçekte eğitilebilir olması gerekir.

Bu nedenle Transformer, ön-eğitim paradigmasının üzerinde yükselebileceği zemini hazırladı. Bir sonraki adımda artık tek görev için model eğitmek yerine, çok büyük metin üzerinde genel bir dil modeli eğitmek mümkün hâle geldi.
:::

---

## Pretraining Paradigması

**Eski yaklaşım**

Bir görev → bir veri seti → bir model

**Yeni yaklaşım**

Büyük metin üzerinde genel model eğit  
sonra göreve uyarla veya prompt ile kullan

**Neden önemli?**

Dil bilgisi, dünya bilgisi ve görev örüntüleri tek modelde birikir.

::: {.notes}
Klasik NLP’de her görev için ayrı bir model eğitmek yaygındı. Duygu analizi için başka model, adlandırılmış varlık tanıma için başka model, çeviri için başka model kurulurdu. Bu yaklaşım işe yarar; fakat her görev için veri toplama, etiketleme ve model tasarlama gerektirir.

Pretraining paradigması bu düzeni değiştirdi. Önce büyük ve genel bir metin koleksiyonu üzerinde dil modeli eğitilir. Model bu aşamada belirli bir ders görevi çözmez; dildeki örüntüleri, kavram ilişkilerini, biçimsel yapıları ve sık karşılaşılan bilgi parçalarını öğrenir. Sonra bu model belirli görevlere uyarlanabilir veya doğrudan prompt ile kullanılabilir.

Bu değişim önemlidir çünkü bilgi tek tek görev modellerine dağılmak yerine büyük bir temel modelde birikmeye başlar. Modern LLM’lerin çok farklı görevlerde kullanılabilmesinin arkasında bu genel ön-eğitim mantığı vardır.
:::

---

## GPT ve BERT: İki Farklı Yön

**Aynı Transformer ailesi, farklı hedef**

| Model çizgisi | Temel hedef | Güçlü olduğu yön |
|---|---|---|
| GPT | Sonraki token’ı üretmek | Metin üretimi |
| BERT | Maskelenmiş bağlamı anlamak | Dil anlama |

**Basit ayrım**

GPT: üretim  
BERT: anlama

::: {.notes}
Transformer sonrası dönemde iki önemli çizgi öne çıktı: GPT ve BERT. İkisi de Transformer ailesindendir; fakat eğitim hedefleri farklıdır. GPT tipi modeller soldan sağa ilerleyerek sonraki token’ı tahmin etmeye çalışır. Bu nedenle doğal olarak metin üretimi, tamamlama ve diyalog gibi işlerde güçlüdür.

BERT tipi modeller ise cümlede bazı kelimeleri gizleyip bağlama bakarak bunları tahmin etmeye çalışır. Model hem sağ hem sol bağlamı kullanarak metnin içindeki anlam ilişkilerini yakalar. Bu yüzden sınıflandırma, varlık tanıma, soru yanıtlama gibi “anlama” görevlerinde uzun süre çok etkili oldu.

Bu ayrım kesin bir duvar değildir; modern sistemlerde farklı fikirler birleşebilir. Ama öğrenciler için basit sezgi şudur: GPT çizgisi metin üretimine, BERT çizgisi bağlamsal anlamaya daha doğal yerleşmiştir.
:::

---

## Ölçeklenme: Model Büyüdükçe Ne Değişti?

**Üç büyüme ekseni**

- Daha büyük model
- Daha fazla veri
- Daha fazla hesaplama

**Ortaya çıkan davranışlar**

- Daha geniş görev kapsamı
- Daha iyi örnekten genelleme
- Few-shot ve in-context kullanım

::: {.notes}
Modern LLM döneminde en dikkat çekici değişimlerden biri ölçeklenmedir. Model boyutu büyüdü, eğitim verisi büyüdü ve kullanılan hesaplama kapasitesi büyüdü. Bu üç eksen birlikte ilerlediğinde modellerin yalnızca daha akıcı metin üretmediği, daha geniş görevlerde de kullanılabilir hâle geldiği görüldü.

Bu noktada dikkatli olmak gerekir: “Büyük model her zaman güvenilir modeldir” sonucu çıkmaz. Fakat büyük ölçek, bazı yeteneklerin daha görünür olmasını sağladı. Model örneklerden kalıp çıkarabilir, yeni bir görevi prompt içinde verilen birkaç örnekle anlayabilir ve daha önce ayrı model gerektiren birçok işi aynı arayüz üzerinden yapabilir.

Bu davranışlar, LLM’leri klasik NLP araçlarından ayıran ana farklardan biridir. Model artık yalnızca önceden belirlenmiş bir sınıflandırıcı değil; doğal dille yönlendirilebilen genel bir işlem katmanı gibi davranmaya başlar.
:::

---

## In-Context Learning

**Prompt içindeki örnekten görev çıkarma**

Modelin ağırlıkları değişmez.  
Örnekler bağlamın içinde verilir.

```text
Paris  → France
Berlin → Germany
Ankara → ?
```

**Beklenen çıktı**

```text
Turkey
```

::: {.notes}
In-context learning, modelin prompt içinde verilen örneklerden görevin ne olduğunu çıkarmasıdır. Burada model yeniden eğitilmez; ağırlıkları güncellenmez. Yalnızca bağlamda birkaç örnek görür ve aynı örüntüyü yeni girdiye uygular.

Basit örnekte Paris’in Fransa’ya, Berlin’in Almanya’ya eşlendiğini görüyoruz. Model buradan görevin “başkentten ülkeye gitmek” olduğunu çıkarır ve Ankara için Türkiye cevabını üretir. Bu, klasik makine öğrenmesindeki eğitim mantığından farklıdır; çünkü örnekler eğitim seti değil, çalışma anındaki bağlamdır.

Bu özellik LLM kullanımını çok esnek hâle getirir. Kullanıcı, görevi doğal dille tarif edebilir veya birkaç örnekle gösterebilir. Ancak bu aynı zamanda hassas bir kullanım alanıdır; verilen örneklerin sırası, biçimi ve belirsizliği model çıktısını etkileyebilir.
:::

---

## Instruction Tuning ve Alignment

**Yeteneği kullanıcı davranışına çevirmek**

- Ön-eğitimli model metin tahmin eder
- Kullanıcı asistanı yönerge takip etmelidir
- Capability: neyi yapabilir?
- Alignment: nasıl davranmalı?

**Yüksek seviye fikir**

İnsan geri bildirimiyle daha yararlı ve kontrollü davranış öğrenilir.

::: {.notes}
Ön-eğitimli bir dil modeli temelde metin tahmin etmeyi öğrenir. Bu, güçlü bir yetenektir; fakat doğrudan kullanıcıya dönük bir asistan davranışı değildir. Kullanıcı “şunu özetle” dediğinde modelin yalnızca olası metin devamını üretmesi değil, yönergeyi takip etmesi beklenir.

Instruction tuning bu farkı azaltır. Modele çeşitli yönergeler ve beklenen cevap biçimleri gösterilir. Böylece model, doğal dilde verilen talimatlara daha uygun cevaplar üretmeyi öğrenir. Alignment ise daha geniş bir sorudur: Model yalnızca yetenekli mi, yoksa güvenli, yararlı ve kontrol edilebilir biçimde mi davranıyor?

İnsan geri bildirimi burada yüksek seviyede önemli rol oynar. İnsanlar hangi cevapların daha yararlı, daha uygun veya daha güvenli olduğunu değerlendirir; sistem bu tercihleri öğrenmeye çalışır. Bu yüzden modern asistanlar yalnızca büyük ön-eğitimli modeller değil, kullanıcıyla etkileşim için ayrıca hizalanmış sistemlerdir.
:::

---

## Prompting: Modeli Kullanma Katmanı

**Modeli yönlendirme biçimleri**

- Açık yönerge
- Örnekler
- Rol ve bağlam
- Adım adım isteme

**Kritik ayrım**

Prompting, model eğitimi değildir.

::: {.notes}
Prompting, eğitilmiş bir modeli kullanma katmanıdır. Kullanıcı modele ne istediğini, hangi bağlamda çalışacağını ve cevabın nasıl görünmesi gerektiğini doğal dille belirtir. Bu bazen tek cümlelik açık bir yönerge olabilir; bazen birkaç örnekle görevin gösterilmesi olabilir.

Rol ve bağlam vermek de yaygın bir kullanım biçimidir. Örneğin “bir lise öğrencisine anlatır gibi açıkla” veya “bu metni akademik özet olarak düzenle” gibi ifadeler modelin cevap biçimini etkiler. Adım adım isteme ise karmaşık problemlerde modelin ara düşünce yapısını daha düzenli kurmasına yardım edebilir.

Ama prompting eğitim değildir. Modelin ağırlıkları değişmez; yalnızca o çalışma anında verilen bağlam değişir. Bu ayrımı yapmak önemlidir, çünkü prompt ile geçici davranış yönlendirilir; kalıcı model uyarlaması için farklı yöntemler gerekir.
:::

---

## RAG: Model + Dış Bilgi

**Problem**

Modelin bilgisi eksik, eski veya hatalı olabilir.

**Çözüm**

İlgili belgeleri getir  
cevabı bu belgelerle üret

**Basit tanım**

RAG = LLM + arama / doküman sistemi

::: {.notes}
LLM’ler eğitim sırasında gördükleri veriden örüntüler öğrenir. Fakat bu bilgi güncel olmayabilir, eksik olabilir veya belirli bir kurumun özel belgelerini içermeyebilir. Ayrıca model bazen emin görünerek yanlış bilgi üretebilir. Bu, modern LLM sistemlerinin en temel güvenilirlik sorunlarından biridir.

RAG yaklaşımı bu sorunu modelin içine her bilgiyi koymaya çalışarak değil, dış bilgiyle çalışarak ele alır. Kullanıcı soru sorduğunda sistem önce ilgili dokümanları arar veya getirir. Sonra LLM bu belgeleri bağlam olarak kullanarak cevap üretir.

Bunu “LLM + arama sistemi” gibi düşünebiliriz. Model dil üretimi ve sentez yapar; doküman sistemi ise güncel veya kuruma özel bilgi sağlar. Böylece modelin yalnızca belleğine güvenmek yerine, cevap üretimi somut kaynak bağlamına bağlanır.
:::

---

## LoRA ve Ucuz Uyarlama

**Problem**

Büyük modeli tamamen fine-tune etmek pahalıdır.

**LoRA fikri**

Ana modeli büyük ölçüde sabit tut  
küçük eğitilebilir ekler öğren

**Sonuç**

Daha düşük maliyetle görev veya domain uyarlaması yapılabilir.

::: {.notes}
Büyük bir LLM’i tamamen yeniden eğitmek veya tüm parametreleriyle fine-tune etmek yüksek maliyetlidir. Hem güçlü donanım ister hem de eğitim ve saklama maliyetini artırır. Üstelik her küçük görev için modelin tamamını değiştirmek pratik değildir.

LoRA gibi yöntemler bu problemi daha ekonomik bir şekilde ele alır. Ana model büyük ölçüde sabit tutulur; modelin davranışını belirli bir göreve veya alana uyarlamak için küçük ek bileşenler eğitilir. Böylece tüm modeli taşımak yerine, daha küçük uyarlama parçalarıyla çalışmak mümkün olur.

Bu fikir özellikle kurum içi kullanım, belirli alan terminolojisi veya sınırlı veriyle uyarlama gereken durumlarda önemlidir. Ama yine de LoRA bir sihirli çözüm değildir; iyi veri, doğru değerlendirme ve kullanım amacının netliği hâlâ belirleyicidir.
:::

---

## Multimodal LLM

**Metinden çoklu veriye genişleme**

- Görsel açıklama
- Diyagram yorumlama
- Ses ve konuşma işleme
- Belge analizi

**Ana fikir**

Doğal dil, farklı veri türleri için ortak arayüz hâline gelir.

::: {.notes}
LLM çizgisi başlangıçta metin merkezliydi. Ancak modern sistemler yalnızca metinle sınırlı kalmadı; görüntü, ses, tablo, PDF ve karma belgelerle çalışabilen çok modlu yapılara doğru genişledi. Bu genişleme, modeli yalnızca metin üreticisi olmaktan çıkarır.

Örneğin bir görselin ne anlattığını açıklamak, bir diyagramdaki ilişkiyi yorumlamak veya uzun bir PDF belgesinden bilgi çıkarmak artık aynı doğal dil arayüzü üzerinden yapılabilir. Kullanıcı “bu grafikte ne görüyorsun?” veya “bu belgedeki ana riskleri çıkar” diyebilir.

Buradaki önemli kavramsal değişim şudur: Doğal dil, farklı veri türleriyle etkileşim kurmanın ortak arayüzüne dönüşür. Model yalnızca metin yazmaz; metin yoluyla farklı bilgi biçimleri arasında köprü kurar.
:::

---

## Modern LLM Bir Model Değil, Sistemdir

**Sistem bileşenleri**

- Base model
- Prompting
- RAG
- Araçlar
- Alignment
- Evaluation

**Ana mesaj**

Kullanıcıya görünen davranış, tek başına model ağırlıklarından gelmez.

::: {.notes}
Modern LLM uygulamalarını yalnızca “büyük bir model” olarak düşünmek eksik kalır. Kullanıcıya görünen davranış çoğu zaman bir sistemin sonucudur. Temel model vardır; ama bunun üzerine prompt tasarımı, dış bilgi getirme, araç kullanımı, güvenlik katmanları ve değerlendirme süreçleri eklenir.

Örneğin bir asistan güncel bir soruya cevap verirken önce arama yapabilir, sonra sonuçları özetleyebilir, sonra belirli güvenlik kurallarına göre cevabı biçimlendirebilir. Kullanıcı bunu tek bir cevap olarak görür; fakat arka planda model, veri erişimi ve kontrol mekanizmaları birlikte çalışır.

Bu yüzden LLM’leri değerlendirirken yalnızca model adını sormak yetmez. Hangi veriyle destekleniyor, hangi araçlara erişiyor, nasıl hizalanmış, hangi testlerden geçiyor ve hangi hatalarda durduruluyor gibi sistem soruları da gerekir.
:::

---

## Sınırlar ve Riskler

**Yüksek kapasite ≠ yüksek güvenilirlik**

- Hallucination
- Bias
- Güncelliğini yitirmiş bilgi
- Gizlilik ve veri güvenliği
- Benchmark ve değerlendirme sorunları

**Ana mesaj**

Model daha yetenekli oldukça otomatik olarak daha güvenilir olmaz.

::: {.notes}
Modern LLM’ler etkileyici yetenekler gösterir; fakat bu yetenek güvenilirlik ile aynı şey değildir. Model yanlış bilgiyi akıcı biçimde üretebilir. Buna hallucination diyoruz. Cevap dilsel olarak ikna edici görünebilir, ama dayandığı bilgi hatalı olabilir.

Bias da önemli bir risktir. Eğitim verisindeki toplumsal önyargılar veya temsil dengesizlikleri model davranışına yansıyabilir. Güncelliğini yitirmiş bilgi, gizlilik ihlalleri ve kuruma özel verilerin yanlış kullanımı da pratik uygulamalarda ciddi sorunlar doğurur.

Ayrıca değerlendirme meselesi zordur. Bir benchmark’ta yüksek skor almak, gerçek dünyadaki tüm kullanım senaryolarında güvenilir davranış anlamına gelmez. Bu yüzden modern LLM sistemlerinde yetenek kadar doğrulama, izleme ve sınır koyma da önemlidir.
:::

---

## Hafta 12 Genel Sentez

**Part 1**

Kural → istatistik → temsil

**Part 2**

Attention → Transformer → ölçek → alignment → sistemler

**Ana cümle**

> LLM’ler tek bir buluşun değil; temsil, mimari, veri, ölçek, hizalama ve sistem entegrasyonunun birleşimidir.

::: {.notes}
Hafta 12’nin tamamını tek bir çizgi olarak düşünürsek, ilk bölüm dil işleme tarihinde darboğazların nasıl değiştiğini gösterdi. Kurallar istisnalara takıldı, sembolik sistemler bilgi edinimi darboğazına takıldı, istatistiksel modeller kısa bağlam ve anlamsal körlük yaşadı, erken sinir ağları ise uzun bağlam ve ölçekli eğitimde zorlandı.

İkinci bölüm bu son sınırdan modern LLM’lere geçişi anlattı. Attention tek vektöre sıkıştırma sorununu gevşetti; Transformer attention’ı ana mekanizma yaparak ölçekli eğitimi kolaylaştırdı; pretraining genel modelleri mümkün kıldı; instruction tuning ve alignment bu modelleri kullanıcıya dönük asistanlara yaklaştırdı.

Sonuçta LLM’ler tek bir buluşla açıklanamaz. Onları mümkün kılan şey, temsil öğrenimi, mimari tasarım, büyük veri, hesaplama ölçeği, insan geri bildirimi, dış bilgi sistemleri ve değerlendirme süreçlerinin birlikte çalışmasıdır.
:::
