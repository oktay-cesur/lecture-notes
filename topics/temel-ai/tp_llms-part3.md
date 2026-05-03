---
title: LLM - Kullanım Rehberi
subtitle: BİM444 — Hafta 12 · Part 3
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-04-20
execute:
  echo: false
---

## Büyük Dil Modelleri · Part 2: Kullanım Rehberi

**Geçen bölümlerde:**

Dil teknolojilerinin kurallardan veriye, veriden öğrenilmiş temsillere nasıl gittiğini gördük.

**Bu bölümde:**

> LLM'den nasıl daha doğru, faydalı ve güvenilir çıktı alınır?

::: {.notes}
Önceki iki bölüm tarihsel ve teknik bir çizgiydi: kural tabanlı sistemlerden istatistiksel yöntemlere, oradan Transformer'a ve pretraining'e kadar olan yolu anlattık. Bu bölüm farklı bir soruya odaklanıyor.

LLM'leri kullanmak için Transformer mimarisini bilmek şart değil. Ama bu araçların ne yapıp ne yapamadığını, ne zaman güvenilir olduğunu ve ne zaman dikkatli olunması gerektiğini anlamak gerekiyor. Bu bölüm tam olarak bu amaca yönelik: kullanım rehberi.
:::

---

## LLM Ne Değildir?

- Arama motoru değildir
- Veritabanı değildir
- Gerçeğin garantisi değildir
- Otomatik ödev makinesi değildir
- Düşünmenin ikamesi değildir

::: {.notes}
LLM'ler dil örüntülerinden metin üretir. Bu büyük bir yetenektir; ama garantili doğruluk anlamına gelmez. Model, verilen bağlama uygun ve dilsel olarak ikna edici bir cevap üretir. Cevap doğru gibi görünebilir; fakat doğruluğu ayrıca kontrol edilmeden garanti edilemez.

Arama motoru gibi çalışmaz çünkü model sizi bir kaynağa yönlendirmez; metin üretir. Veritabanı gibi çalışmaz çünkü model gerçek dünya verilerini anlık olarak sorgulayamaz. Ödev makinesi gibi çalışmaz çünkü model sizi düşünme sürecinden çıkarmaz, çıkarmamalıdır.

Öğrenciler için pratik çerçeve şudur: LLM cevaplarına taslak, öneri veya hipotez gözüyle bakın. Kontrol etmeden kaynak göstermeyin, bildiri yazmayın, kritik karar vermeyin.
:::

---

## LLM Ne İşe Yarar?

- Zor kavramları açıklamak
- Metni yeniden yazmak ve sadeleştirmek
- Beyin fırtınası yapmak
- Ödev ana hatlarını çıkarmak
- Bilinen materyali özetlemek
- Geri bildirim almak
- Kodlama desteği

::: {.notes}
LLM en çok, öğrencinin zaten bir hedefi, kısmi bilgisi veya çalışacak malzemesi olduğunda işe yarar. "Bu kavramı daha basit anlat", "bu paragrafı daha akıcı yap", "bu fikri beş farklı açıdan düşün" gibi görevlerde güçlüdür.

Bunu bir düşünme asistanı olarak konumlandırın. Siz görevin sahibisiniz; model sürecin belirli adımlarında size zaman ve çaba tasarrufu sağlar. Öğrenme ve yargı hâlâ sizin sorumluluğunuzdadır.

En verimli kullanım, modeli sürecin tamamını yapmakla değil, sürecin belirli bir aşamasında devreye sokmakla olur. "Bunu yaz" yerine "Bu iskelet üzerinden geri bildirim ver" veya "Bu taslağı düzenle" daha iyi kullanım biçimleridir.
:::

---

## İyi Soru Sormak: Prompt Mantığı

**Zayıf prompt**

```text
"LLM nedir?"
```

**Güçlü prompt**

```text
"Yapay zekâ dersi alan alan dışı öğrencilere LLM kavramını
5 maddede, teknik detaya girmeden açıkla."
```

**Fark**

Bağlam · Görev · Hedef kitle · Kısıtlar

::: {.notes}
Prompt kalitesi büyük ölçüde belirsizliği azaltmakla ilgilidir. Model, soruyu verdiğiniz bağlamla birlikte yorumlar. Bağlam yoksa model makul bir tahmin yapar; ama bu tahmin sizin istediğinizle örtüşmeyebilir.

Anahtar bilgiler şunlardır: Görev ne? Hedef kitle kim? Çıktı nasıl görünmeli? Hangi kısıtlar var? Bunları cümleye ekledikçe model daha doğru bir çıktı üretir. Bu sihirli kelimeler değil; açık görev tanımıdır.

Öğrenciler için önemli not: İyi prompt yazmak bir beceridir ve pratikle gelişir. İlk denemede istediğiniz sonucu alamazsanız promptu güncelleyin, kısıtlar ekleyin, bağlamı netleştirin.
:::

---

## Prompt Şablonu

```text
Rol:        Sen deneyimli bir [alan] uzmanısın.
Bağlam:     [Konu veya mevcut durum]
Görev:      [Ne yapılmasını istiyorum]
Hedef kitle:[Bu çıktıyı kim okuyacak]
Çıktı biçimi:[Liste / paragraf / tablo / adım adım]
Sınırlar:  [Uzunluk / teknik seviye / dahil edilmeyecekler]
```

::: {.notes}
Bu şablon bir standart değil, düşünce sıralaması için bir çerçevedir. Her alanı doldurmak zorunda değilsiniz; fakat her alanı düşünmek, ne istediğinizi netleştirmenize yardımcı olur.

"Rol" alanı genellikle küçük bir yönlendirme sağlar. "Bağlam" modelin hangi durumda çalıştığını anlamasını sağlar. "Görev" ne yapılacağını söyler. "Hedef kitle" dil ve derinlik seviyesini belirler. "Çıktı biçimi" ve "sınırlar" modelin üretim biçimini etkiler.

Bu şablonu kendi alanınıza uyarlayın. Bir ödev taslağı için, kod açıklaması için veya sunum planı için farklı bileşenler ön plana çıkabilir.
:::

---

## Zayıf Prompt / Güçlü Prompt

| Zayıf | Güçlü |
|---|---|
| "Özetle" | "Bu metni 5 maddelik ders tekrarı olarak özetle" |
| "Anlat" | "Alan dışı öğrenciye 2 paragrafta açıkla" |
| "Doğru mu?" | "Bu argümandaki varsayımları ve zayıf noktaları bul" |
| "Kod yaz" | "Python'da yalnızca bu hatayı düzelt, geri kalanı değiştirme" |
| "Yardım et" | "Bu paragrafı akademik ama anlaşılır bir dile çevir" |

::: {.notes}
Tablo, somut bir yönde ilerlemenin ne kadar fark yarattığını gösteriyor. Sol sütundaki promptlar geçerlidir; ama modelin yorumlama payı geniştir. Sağ sütundaki promptlar görevi sınırlar, hedefi belirler ve çıktı biçimini gösterir.

Öğrencilere hatırlatmak gereken şey şudur: Modelden aldığınız çıktıya razı olmak zorunda değilsiniz. Cevap beklentiyi karşılamıyorsa, promptu güncelleyin. Bu bir yeniden çalıştırma değil; görevin netleştirilmesidir.

Özellikle "Doğru mu?" ile "Varsayımları ve zayıf noktaları bul" arasındaki fark önemlidir. İlki onay ister; ikincisi eleştirel analiz ister. Model genellikle hangisini isterseniz onu yapar.
:::

---

## LLM ile Öğrenme

**Faydalı öğrenci promptları**

- "Bunu bana daha basit anlat."
- "Bu konunun önkoşul bilgileri neler?"
- "Beni test etmek için 5 soru sor."
- "Cevabımdaki hataları göster."
- "Bu kavramı benzer kavramlardan ayır."

::: {.notes}
LLM'i öğrenmek için kullanmanın en verimli biçimi, cevap almak değil; açıklama, tanı ve karşılaştırma istemektir. "Bu nedir?" yerine "Bu kavramı X kavramından ayıran nedir?" sormak, daha derin bir düşünme sürecini harekete geçirir.

Test soruları isteme özellikle güçlü bir kullanım biçimidir. Konu başlığını verin ve "bu konuda anlamamı test etmek için 5 soru sor" deyin. Cevaplarınızı yazın ve ardından modelden geri bildirim alın.

Önemli not: Model genellikle sizi zorlayan soruları kolay sorularla karıştırabilir. "Daha zorlayıcı sorular yaz" veya "bu cevaptaki eksikleri göster" diyerek derinleştirebilirsiniz.
:::

---

## LLM ile Yazma

**Faydalı kullanımlar**

- Ana hat (outline)
- Taslak metin
- Yeniden yazma
- Ton ayarı
- Argüman yapısı
- Dilbilgisi düzeltme
---
**Riskler**

- Genel ve yüzeysel metin
- Desteksiz iddialar
- Sahte referanslar
- Yazar sesinin kaybı

::: {.notes}
LLM yazma sürecini hızlandırabilir; fakat bu, modelin ürettiği her metni olduğu gibi teslim etmek anlamına gelmez. Aradaki fark kritiktir: destek almak ile içeriği devreden çıkarmak.

Model genel metni üretmekte iyidir; fakat özgün argüman, kişisel bakış açısı ve kaynaklara dayalı iddia bu süreçte sizden gelmelidir. Model sizin yazmadığınız bir fikri keşfedemez.

Sahte referans konusunda dikkatli olmak gerekir. Model bazen var olmayan kaynak üretir, kaynak adını yanlış yazar veya doğru bir kaynağa yanlış iddia atfeder. Referansı yazıya eklemeden önce mutlaka kontrol edin.
:::

---

## LLM ile Akademik Çalışma

**Yardımcı olabilir**

- Araştırma sorusu netleştirme
- Kavram karşılaştırması
- Literatür haritası taslağı
- Özet yeniden yazma
- Sunum planlaması
---

**Güvenilmez olabilir**

- Kaynak doğruluğu
- Atıf ayrıntıları
- Makale iddiaları
- Bulgu yorumu

::: {.notes}
Akademik çalışmada LLM'in en güçlü olduğu yerlere bakarsak, bunlar genellikle yapısal veya dilsel katkılardır. Kavramları karşılaştırmak, araştırma sorusunu keskinleştirmek, metnin akışını düzenlemek, sunum planı taslağı çıkarmak — bunlar güçlü kullanım noktalarıdır.

Güvenilmez olduğu yerler ise gerçek dünya bilgisine dayanan içeriklerdir. Hangi makale ne söylüyor, hangi bulgular ne anlama geliyor, hangi kaynak doğrulanabilir — bunlar modelin değil, sizin araştırmanızın sağlaması gereken bilgilerdir.

Basit kural: Model fikir üretmede ve dil işlemede yardımcı olabilir. Ama akademik iddia, kaynak ve yorum sorumluluğu size aittir.
:::

---

## Kaynak ve Atıf Kontrolü

> LLM'nin verdiği kaynak varsa mutlaka kontrol et.

**Kontrol listesi**

- Makale gerçekten var mı?
- Yazar adları doğru mu?
- İddia gerçekten o makalede mi?
- Yıl doğru mu?
- Alıntı birebir doğru mu?

**Kontrol yolları:** Google Scholar · kütüphane veri tabanı · yayıncı sayfası · makale PDF'i

::: {.notes}
LLM kaynak üretmede özellikle yanıltıcı olabilir. Model gerçek görünen ama var olmayan makaleler üretebilir. Bazen gerçek bir yazarın adını alır ve gerçek olmayan bir makaleyle eşleştirir. Bazen gerçek bir makaleye hiç söylemediği bir iddia atfeder.

Bu fenomen "hallucination" olarak adlandırılır ve akademik kullanımda ciddi bir risktir. Referansı kaynaktan doğrulamadan atıf yapmak, akademik bütünlük açısından kişiye atfedilemeyen bir hata yaratır. "Model böyle dedi" geçerli bir savunma değildir.

Pratik kural şudur: Modelden gelen her kaynak, Google Scholar veya ilgili veri tabanında aranmadan kullanılmamalıdır. Makale bulunursa, orijinal metinle karşılaştırılmalıdır. Bu adımı atlayan her referans risklidir.
:::

---

## Hallucination: Uydurma Ama İkna Edici Cevap

**Tanım**

LLM bazen ikna edici ama yanlış bilgi üretir.

**Yaygın durumlar**

- Sahte atıflar
- Yanlış tarihler
- Uydurulmuş tanımlar
- Hatalı özetler
- Emin görünen yanlış açıklamalar

::: {.notes}
Hallucination, modelin kasıtlı olarak yalan söylemesi değildir. Model, eğitim verilerindeki örüntülerden hareketle en olası devamı üretir. Bu üretim zaman zaman gerçek dünya bilgisini yanlış yansıtır.

Özellikle tehlikeli olan, modelin bu hataları çoğu zaman güvenle sunmasıdır. Cevabın dili ikna edici, yapısı mantıklı ve biçimi doğru görünebilir. Fakat içeriğin doğruluğu biçimden bağımsızdır.

Öğrenciler için önemli çerçeve şudur: Akıcılık, doğruluk değildir. Cümle iyi kurulmuş olabilir; ama cümlenin söylediği şey yanlış olabilir. Modelin dilsel güvenini içerik güveniyle karıştırmamak gerekir.
:::

---

## Güvenilirlik İçin Kontrol Soruları

**Modele sorun**

- "Bundan ne kadar eminsin?"
- "Hangi kısımlar varsayım?"
- "Kontrol edilmesi gereken yerleri işaretle."
- "Alternatif açıklama var mı?"
- "Bu cevabı eleştir."

::: {.notes}
Bu sorular modelin kendi cevabını sorgulamasını tetikler. Model çoğu zaman belirsiz noktalara dikkat çekebilir, alternatif açıklamalar sunabilir veya hangi bölümlerin doğrulamaya ihtiyaç duyduğunu belirtebilir.

Fakat önemli bir sınır vardır: Bu sorular riski azaltır, ortadan kaldırmaz. Model "bu kısımlar varsayım" dediğinde bile o kısımlar gerçekten yanlış olabilir. Nihai doğrulama sorumluluğu kullanıcıya aittir.

Kritik bağlamlarda — akademik çalışma, tıbbi bilgi, hukuki soru — modelin kendi değerlendirmesine güvenmek yeterli değildir. Harici kaynak doğrulaması zorunludur.
:::

---

## LLM ile Kodlama

**Faydalı kullanımlar**

- Hata açıklama
- Küçük fonksiyon yazma
- Yeniden yapılandırma
- Test senaryosu
- Komut açıklama

---

**Riskler**

- Güvensiz kod
- Güncel olmayan kütüphane
- Yanlış varsayım
- Çalışan ama yanlış yapan kod

::: {.notes}
Teknik öğrenciler için LLM, hata mesajlarını açıklamak ve küçük kod parçaları üretmek için güçlü bir yardımcıdır. Fakat üretilen kodu kör bir biçimde çalıştırmak riski beraberinde getirir. Kod çalışıyor olabilir; ama beklenen işi doğru şekilde yapıp yapmadığı test edilmelidir.

Alan dışı öğrenciler için: Kodu test edin. Küçük girdilerle deneyin ve beklediğiniz sonucu üretip üretmediğini kontrol edin. "Kod hata vermedi" ile "kod doğru sonuç verdi" aynı şey değildir.

Modele kod sorularında mümkün olduğunca fazla bağlam verin: hangi dil, hangi versiyon, hangi hata mesajı, beklenen çıktı nedir, değiştirilmemesi gereken ne var. Bağlam ne kadar nettir, kod çıktısı o kadar doğruya yakındır.
:::

---

## İyi Kod Yardımı Promptu

**İçermesi gerekenler**

- Programlama dili
- Hedef
- Mevcut kod
- Hata mesajı
- Beklenen çıktı
- Değiştirilmemesi gereken

---

**Örnek**

```text
Bu Python kodunda yalnızca hatalı kısmı düzelt.
Genel yapıyı değiştirme.
Hata mesajı: TypeError: unsupported operand type(s)
Beklenen çıktı: sayısal toplam değer
```

::: {.notes}
Kod yardımı için en yaygın hata, yalnızca hata mesajını yapıştırmak ve "düzelt" demektir. Model bir şey üretir; fakat bu üretimin doğru bağlamda olduğunu garanti edemeyiz.

Bağlam ne kadar nettir, cevap o kadar kullanılabilirdir. Mevcut kodu paylaşmak, hata mesajını eklemek, beklenen çıktıyı belirtmek ve değiştirilmemesi gereken kısımları işaretlemek — bunların her biri modelin elini güçlendirir.

Bir de önemli sınır: Model güncel olmayan API'leri veya güvensiz kod örüntülerini önerebilir. Önerilen kodun bağımlılıkları ve güvenlik açıları ayrıca değerlendirilmelidir.
:::

---

## LLM ile Özetleme

**İyi kullanım alanları**

- İlk geçiş özeti
- Başlıkları çıkarma
- Yoğun metni sadeleştirme
- Karşılaştırma tablosu

---

**Dikkat**

- Önemli ayrıntılar çıkarılabilir
- Karşıt görüşler düzleşebilir
- Kesinlik olduğundan fazla gösterilebilir

::: {.notes}
Özetleme, LLM'in oldukça iyi yaptığı bir görevdir. Uzun bir belgeyi hızlıca taramak, başlıkları listelemek veya temel noktaları çıkarmak için kullanmak zamanı verimli kullanmanızı sağlar.

Fakat özetin orijinal metinden bağımsız okunmaması gerekir. Model bazı ayrıntıları ihmal edebilir, bir tartışmayı olduğundan daha kesin gösterebilir ya da iki farklı görüşü tek görüş gibi birleştirebilir. Akademik bağlamda özet, orijinalle karşılaştırılarak kullanılmalıdır.

Pratik kural: Özeti fikir edinmek için kullanın; kaynak olarak kullanmayın. Özellikle atıf yapacaksanız veya iddia kuracaksanız, orijinal metne dönün.
:::

---

## Kişisel Veri ve Gizlilik

**Yapıştırmayın**

- Şifreler
- Öğrenci kişisel bilgileri
- Tıbbi veya hukuki belgeler
- Kuruma ait gizli dosyalar
- Yayımlanmamış araştırma verisi

::: {.notes}
LLM servislerinin büyük bölümü bulut tabanlıdır. Paylaştığınız içerik modelin sunucularına iletilir. Bu, bazı bağlamlarda ciddi bir gizlilik riski oluşturur.

Öğrenciler için basit kural şudur: Başka biriyle paylaşmaktan çekineceğiniz içeriği LLM'e yapıştırmayın. Kişisel bilgileri içeren belgeler, hastane kayıtları, öğrenci sınav verileri veya gizlilik anlaşması kapsamındaki kurumsal içerikler bu sınır içindedir.

Hassas içerikle çalışmak gerekiyorsa, anonim sürümlerle çalışmayı tercih edin. Kurumsal kullanımda ilgili veri güvenliği politikasını kontrol edin.
:::

---

## Etik Kullanım

**Kabul edilebilir**

- Açıklama istemek
- Geri bildirim almak
- Metni netleştirmek
- Yapıyı kontrol ettirmek

---

**Sorunlu**

- Üretilmiş çalışmayı kendi çalışması olarak sunmak
- Kaynak uydurmak
- Yapay zekâ katkısını gizlemek
- Öğrenme sürecini devre dışı bırakmak

::: {.notes}
Akademik bütünlük açısından temel soru, aracın kullanılıp kullanılmadığı değildir. Soru şudur: Öğrenci yazarlığı, kanıtı veya yetkinliği yanlış mı temsil ediyor?

Bir metni LLM ile düzelttirmek ve bunu açıkça yapmak, akademik sahtekârlık değildir. Modelin yazdığı metni kendi kaleminizden çıkmış gibi sunmak veya modelin ürettiği kaynakları kontrol etmeden atıf listesine eklemek farklı bir konudur.

Öğrencilere hatırlatmak gereken şey şudur: Aracı kullanmak öğrenmeyi hızlandırabilir. Ama öğrenmeyi tamamen araç üzerine yıkmak, öğrencinin o alana dair yetkinlik geliştirmesini engeller. Değerlendirme anında sorumlu olan kişi siz olacaksınız.
:::

---

## LLM Kullanım Karar Ağacı

**Kullanmadan önce kendinize sorun**

- Yardım mı istiyorum, yoksa görevi devrediyorum mü?
- Cevabı doğrulayabilecek miyim?
- Yeterli bağlam verdim mi?
- Hassas veri var mı?
- Çıktıyı anlıyor muyum?

::: {.notes}
Bu beş soru, LLM kullanımında hızlı bir öz-kontrol çerçevesi sunar. Her sorunun amacı farklıdır.

"Yardım mı istiyorum, yoksa görevi devrediyorum mü?" sorusu, öğrencinin kendi sürecine ne kadar dahil olduğunu sorgular. "Cevabı doğrulayabilecek miyim?" sorusu, çıktının bağımsız olarak kontrol edilip edilemeyeceğini ölçer. "Yeterli bağlam verdim mi?" sorusu, prompt kalitesini değerlendirir. "Hassas veri var mı?" gizlilik riskini sorgular. "Çıktıyı anlıyor muyum?" ise çıktının bilinçli bir kullanımla mı yoksa körü körüne mi alındığını ortaya koyar.

Bu soruların tamamına "evet" diyebiliyorsanız, kullanım büyük olasılıkla güvenlidir. Bir soruya bile cevap veremiyorsanız, önce o boşluğu doldurun.
:::

---

## Dersin Ana Mesajı

**Part 1**

Dil teknolojileri kurallardan veriye, veriden öğrenilmiş temsillere geçti.

**Part 2**

Modern LLM'ler güçlü asistanlardır; ancak net prompt, doğrulama ve kullanıcı yargısı gerektirir.

**Son cümle**

> LLM kullanmak cevap almak değil;  
> bir çıktıyı yönlendirmek, kontrol etmek ve değerlendirmektir.

::: {.notes}
Hafta 12'nin tamamını tek bir cümleyle toparlamak gerekirse: LLM'ler uzun bir birikimin ürünüdür ve doğru kullanıldığında güçlü araçlardır. Ama her araç gibi, etkin kullanımı beceri ve yargı gerektirir.

Bu bölümün amacı teknik bilgi vermek değildi. Amaç, öğrencilerin bu araçları nasıl konumlandıracağını, ne zaman güveneceğini, ne zaman doğrulayacağını ve hangi sınırları koruyacağını anlamasına yardımcı olmaktı.

Cevabı model verdi diye sorumluluk modele geçmez. Gönderen siz olduğunuzda, kontrol etmek de size aittir.
:::
