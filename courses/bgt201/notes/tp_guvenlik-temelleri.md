---
title: "Bilgi Güvenliğine Giriş: Bilgiyi Korumak"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I · Hafta 1"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: today
execute:
  echo: false
---

## Bilgi güvenliği

**Korunacak şey nedir?**

- Bir metin
- Bir ölçüm
- Bir kayıt
- Bir görüntü

Bunların taşıdığı anlam nasıl korunur?

::: {.notes}
Bir güvenlik sorusunu yanıtlayabilmek için önce neyi koruduğumuzu bilmemiz gerekir. Bir bilgi kâğıtta, insan belleğinde ya da bilgisayarda durabilir; bu, onun değerini ve başına gelebilecekleri değiştirir ama korunması gereken şeyi ortadan kaldırmaz. Bu yüzden derse bir teknolojiden değil, “bilgi” sözcüğünün kendisinden başlıyoruz. Bir metin, bir ölçüm, bir kayıt ve bir görüntü birbirinden çok farklı görünür; hepsinde ortak olan, bir anlam taşımalarıdır ve korunması gereken de çoğu zaman bu anlamdır.
:::

---

## Bilgi nedir?

:::: {.columns}

::: {.column width="50%"}
TDK'ye göre “bilgi”:

- İnsan aklının erebileceği olgu, gerçek ve ilkelerin bütünü
- Öğrenme, araştırma veya gözlemle elde edilen gerçek
- İnsan zekâsının çalışması sonucu ortaya çıkan düşünce ürünü
- Zihnin kavradığı temel düşünceler
- Kurallardan yararlanarak kişinin **veriye yönelttiği anlam**
:::

::: {.column width="50%"}
**Bir olguyu kaydetmek ile o kayıttan bir şey anlamak aynı işlem midir?**

[Kaynak: TDK, “bilgi”](https://sozluk.gov.tr/kelime/bilgi)
:::

::::

::: {.notes}
Sözlük “bilgi” için tek bir tanım vermiyor, birkaç ayrı kullanım sayıyor: öğrenilmiş birikim, gözlemle elde edilen gerçek, bir düşünce ürünü ve son maddede veriye yüklenen anlam. Bu çok anlamlılığı baştan görmekte yarar var, çünkü güvenliğin konusunu tanımlarken hangi anlamdan söz ettiğimiz kararı etkiler. Örneğin “sıcaklık 38” yazan bir kaydı düşünelim. Bu kayıt bir ölçümü saklar, ama ölçümün nerede, ne zaman ve hangi ölçekte alındığını bilmeden ne anlama geldiğini söyleyemeyiz. Yorum için bağlam gerekir. Sözlükteki kullanımların ortak yanı da bilginin işaretlerin kendisinden çok, bu işaretlerin anlaşılmasıyla ilgili olmasıdır.
:::

---

## Aynı sözcük, farklı kullanım

- “Bu konuda bilgim var.”
- “Yeni bir bilgi geldi.”
- “Dosyadaki bilgi yanlış.”

**Üç cümlede “bilgi” aynı şeyi mi anlatıyor?**

::: {.notes}
İlk cümlede bilgi, kişinin edindiği birikimdir. İkincisinde iletilen bir haberdir, üçüncüsünde bir kaydın içeriğidir. Güvenlik açısından bu ayrım şu sonucu doğurur: kişinin belleğindeki birikimi korumak ile bir dosyanın doğruluğunu korumak aynı pratik sorun değildir. Yine de üçü de anlamın kaybolması ya da yanlış aktarılmasıyla zarar görebilir. “Dosyada yanlış bilgi var” dediğimizde dosyanın bozulmuş olması da, dosyadaki değerin gerçeği yanlış anlatması da kastedilmiş olabilir. Bu nedenle “bilgi” sözcüğünü tek bir tanıma sığdırmak yerine kullanıldığı bağlamla birlikte okuruz.
:::

---

## Veri ve bilgi

:::: {.columns}

::: {.column width="50%"}
**Veri (data):** olgu, kavram veya komutların iletişim, yorum ve işlem için elverişli biçimli gösterimi.
:::

::: {.column width="50%"}
**Bilgi (information):** kurallardan yararlanarak kişinin veriye yönelttiği anlam.
:::

::::

Veri ile bilgi ilişkili, fakat farklı şeylerdir.

[Kaynak: TDK](https://sozluk.gov.tr/kelime/bilgi)

::: {.notes}
Sözlük veriyi bir gösterim olarak tanımlıyor: olguların, kavramların ya da komutların, yorumlanmaya ve işlenmeye elverişli biçimde yazılmış hâli. Bilgi ise bu gösterime yönelttiğimiz anlamdır. İki sözcüğün ilişkili olmasının nedeni, bilginin veriden çıkmasıdır; farklı olmasının nedeni de aynı verinin farklı kurallarla farklı anlamlara çevrilebilmesidir. Sayı, metin, ses, görüntü ya da bir formdaki işaret veri olabilir. Veriye “değersiz” ya da “korunması gerekmeyen” demek de bu tanımdan çıkmaz. Burada yalnızca gösterim ile yorumun ayrı şeyler olduğunu söylüyoruz.
:::

---

## Veri: kaydedilebilen gösterim

**38** · **2026-09-29** · **A17**

Ölçüm mü, tarih mi, tanımlayıcı mı? Bağlam olmadan yorumları açık değil.

::: {.notes}
Ekrandaki üç değer de kaydedilebilir ve iletilebilir; buna karşılık ne olduklarını değerlerin kendisinden çıkaramayız. “38” bir vücut sıcaklığı, bir sınıf mevcudu ya da bir sıra numarası olabilir. İşaretin biçimi neyi temsil ettiğini garanti etmez. Veri kavramını bu yüzden gösterim olarak alıyoruz; anlam onun üstüne kurulan ayrı bir adımdır.
:::

---

## Veri bağlam kazandığında

- `38` + hasta dosyası, °C, bugün → ateş yüksek olabilir
- `38` + sınıf listesi, öğrenci sayısı → sınıf mevcudu 38
- `38` + ürün stoğu, adet → depoda 38 ürün var

**Aynı gösterim, farklı bağlamlarda farklı bilgi verir.**

::: {.notes}
İlk satırdaki yorumun doğru olması için ölçünün gerçekten vücut sıcaklığı olması, birimin santigrat derece olması ve ölçümün doğru kişiye ait olması gerekir. Bunlardan biri yanlışsa yorum da yanlış olur. İkinci ve üçüncü satırlarda aynı sayı bambaşka sorulara cevap veriyor. Veri ile bilgi arasındaki fark, ham verinin değersiz, işlenmiş verinin değerli olması değildir; fark, kaydın temsil ettiği şey ile ona yönelttiğimiz anlamdadır. Kaynak sunumdaki veri (data) ve bilgi (information) ayrımı (s. 5) bu örnekte somutlaşıyor.
:::

---

## Tek veri, birden çok yorum

Bir kayıtta şu satır var: `2026-09-29, 38`.

- Bu satır hangi sorulara cevap verebilir?
- Hangi sorulara cevap veremez?
- Yanlış birim ya da yanlış tarih eklenirse ne değişir?

::: {.notes}
Satırın ilk bölümü bir tarihe benziyor; ikinci bölümünün ne olduğu belirsiz. Onu sıcaklık, sınıf mevcudu ya da stok sayısı diye okuyabiliriz ve bu okumaların hiçbiri bağlam olmadan doğrulanamaz. “38 kimin ölçümü, hangi birimde, hangi yöntemle?” soruları kaydın kullanılabilirliğini belirler. 38 °C ile 38 °F birbirinden çok farklı iki durumdur; birim yanlış yazılırsa sayı aynen korunmuş olsa bile karar yanlış olur. Bu nedenle koruma, rakamları değiştirmeden saklamakla bitmez; onları yorumlamaya yarayan açıklamaların da korunması gerekir.
:::

---

## Veri → bilgi → edinilmiş bilgi

- **Veri (data):** gösterim · `38`
- **Bilgi (information):** bağlama bağlı anlam · “Hastanın sıcaklığı 38 °C.”
- **Edinilmiş bilgi (knowledge):** örnek ve deneyimle kurulan yorumlama becerisi · “Bu ölçümü diğer belirtilerle birlikte değerlendirmeliyim.”
- Zincirin devamı: **sezgi → bilgelik**

::: {.notes}
Kaynak sunumda (s. 6) bu zincir veriyle başlayıp bilgi, edinilmiş bilgi, sezgi ve bilgelikle sürüyor. Biz ilk üç basamağı kullanıyoruz, çünkü güvenlik tartışmasında ihtiyacımız olan ayrım bunlar arasında. Zincirdeki her basamak ayrı bir soruyu yanıtlar: ne kaydedildi, bu kayıt ne söylüyor, bu tür bir kayıt nasıl yorumlanır? Üçüncü basamak tek bir kayıtla kendiliğinden oluşmaz; örnek görmeyi, karşılaştırmayı ve alan bilgisini gerektirir. Bir kişi ölçümü okuyabilir ama klinik olarak değerlendiremeyebilir. Bu zinciri her alanda aynı işleyen bir dönüşüm yasası olarak değil, düşünmeyi kolaylaştıran bir ayrım olarak kullanıyoruz.
:::

---

## Edinilmiş bilgi otomatik oluşmaz

“Hastanın sıcaklığı 38 °C.” cümlesi bir durum bildirir.

Bu kaydı değerlendiren kişi **ölçüm zamanını, yöntemi ve diğer belirtileri** de bilmek ister.

::: {.notes}
Veriye bağlam eklediğimizde anlam kurulabilir, ama bundan doğrudan güvenilir bir karar çıkmaz. Ölçümün ne zaman ve nasıl yapıldığı, kişinin durumu ve diğer gözlemler yorumun parçasıdır; aynı kayıt farklı koşullarda farklı önem taşır. Edinilmiş bilgi (knowledge) çok sayıda verinin toplamı değildir: örnekler arasındaki ilişkileri tanımayı ve yorumun hangi koşullarda geçerli olduğunu bilmeyi içerir. 38 sayısını ateş olarak tanımak bir adımdır, ölçümü değerlendirebilmek başka bir adım.
:::

---

## Ayrımın sınaması

Bir dosyada yalnızca kimlik numaraları var. Adlar ve açıklamalar ayrı bir dosyada tutuluyor.

**İlk dosya “yalnız veri” olduğu için korunmasız bırakılabilir mi?**

::: {.notes}
Hayır. Kimlik numarası tek başına bile kişiyi tanımlayabilir, başka kayıtlarla eşleştirilebilir ya da yanlış kişiyle ilişkilendirilebilir. Bir kaydın anlamının o an okuyana açık olmaması, koruma gereksinimini ortadan kaldırmaz. Anlam sonradan kurulabilir; ayrıca yanlış ya da yetkisiz değiştirilen ham kayıtlar, daha sonra üretilecek bilgiyi de bozar. Dolayısıyla veri ile bilgi ayrımı korumanın kapsamını daraltmaz.
:::

---

## Kayıtla anlamı birlikte düşünün

Bir laboratuvar sonucu doğru sayıyla kaydedildi; ancak numune iki hastanın dosyasında karıştı.

**Rakam doğruyken bilgi güvenilir olabilir mi?**

::: {.notes}
Sayı doğru ölçülmüş ve doğru yazılmış olabilir. Yine de yanlış kişiye bağlandığı için dosyanın verdiği anlam yanlıştır. Kaydın teknik olarak değişmemiş olması bilgi düzeyindeki hatayı dışlamaz. Tersi de mümkün: bağlam doğruyken sayının bir hanesi bozulursa yorum yanlış olur. Bu örnekte sayının, kişi eşlemesinin ve birimin doğruluğu ayrı ayrı gerekir; biri tek başına yetmez.
:::

---

## Bilgi güvenliği nedir?

**Bir varlık olarak bilginin; yetkisiz erişim, değiştirme, kaybolma, bozulma, ifşa edilme gibi istenmeyen durumlardan korunmasıdır.**

Veri ile bilgi arasında ayrım yaparız; ikisi de kapsamdadır.

::: {.notes}
Tanımdaki ilk ifade önemli: bilgiyi bir varlık olarak ele alıyoruz. Varlık, sahibi ve değeri olan, başına bir şey gelebilecek bir şeydir. Tanım “istenmeyen durumları” sayarken yalnız yetkisiz erişimi değil, değiştirilmeyi, kaybolmayı, bozulmayı ve ifşayı da sayıyor. Yani bir kayıt okunamasa, yanlış okunsa, kaybolsa ya da ilgisiz birine ulaşsa değerini ve kullanımını etkileyen bir sorun doğar. Korunacak şey bazen ham ölçüm, bazen yorumlanmış rapor, bazen de o raporu kullanmaya yarayan açıklamadır. Kaydı yalnız gizli tutmak bu sorunların hepsini karşılamaz; koruma, kaydın yaşamı ve kullanım koşulları boyunca sürer.
:::

---

## Bilgi yalnız bir bilgisayarda bulunmaz

**Bilgi güvenliği sadece dijital ortamlar için tanımlanmış bir kavram değildir.**

Defter, mektup, arşiv kutusu, sözlü aktarım ve sayısal dosya: her biri bilgi taşıyabilir.

::: {.notes}
Bir belgeye parola koyamıyor olmamız onu güvenlik açısından ilgisiz yapmaz. Fiziksel belgeler de kaybolabilir, bozulabilir, yetkisiz kişilerce görülebilir ya da yanlış kişiye atfedilebilir. Sözlü bir aktarımda mesaj eksik veya yanlış iletilebilir. Bilginin tutulduğu ortam koruma biçimini değiştirir; bilgi güvenliğinin var olup olmadığını belirlemez. Bunu somut bir arşiv örneğiyle inceleyelim.
:::

---

## Tanpınar'ın arşivindeki evrak

:::: {.columns}

::: {.column width="50%"}
- Tanpınar'ın çalışma notları, vefatından on yıl sonra ailesi tarafından İstanbul Üniversitesi Türkiyat Enstitüsü'ne bağışlandı.
- Evrak, arşiv kurallarına uygun tasnif ve kataloglama yapılmadan kutularda saklandı.
- 2016'da koruma ve sayısallaştırma çalışması başladı; yaklaşık 6.000 sayfa taranarak dijitalleştirildi.
:::

::: {.column width="50%"}
**Bir belge yıllarca mevcut olduğu hâlde bilgi neden kullanılamaz?**

[Kaynak: A. H. Tanpınar Arşivi, proje ekibi](https://arsiv.tanpinarmerkezi.msgsu.edu.tr/65.html) · [Arşivin dijitalleştirilmesi](https://www.aa.com.tr/tr/kultur-sanat/tanpinar-arsivi-dijital-ortama-aktarildi/913678)
:::

::::

::: {.notes}
Bu örnekte saldırgan yok; sorun bir arşivin korunması ve incelenmesidir. Proje ekibinin anlatımına göre evrak yıllarca kutularda, tasnif ve katalog yapılmadan durdu. Belgeyi fiziksel olarak saklamak, içindeki bilgiyi kullanılabilir kılmaz: doğru belgenin bulunması, hangi metne ait olduğunun anlaşılması ve okunabilmesi gerekir. Kaynak sunumda Tanpınar'ın kolisine ve arşivle ilgili haber alıntılarına yer veriliyor (s. 7–8); müsveddelerin Osmanlıca yazılmış olması okunmalarını zorlaştıran bir etkendir. El yazmaları ve müsveddeler, bilgi taşıyan fiziksel ortamların güvenliğini tartışmak için uygun bir örnektir.
:::

---

## Tanpınar'ın notlarının başına neler gelebilirdi?

- Değiştirilebilirdi.
- İmha edilebilirdi.
- İzinsiz yayımlanabilirdi.
- Çalınabilirdi.
- Hiç bulunmayabilirdi.

::: {.notes}
İlk liste akla en çabuk gelen olasılıkları içeriyor: değişiklik, imha, izinsiz yayım, çalınma ve hiç bulunamama (s. 9). Bunların sonuçları birbirinden farklıdır. Kaybolan ya da imha edilen sayfa artık incelenemez. İzinsiz yayım, belge sağlam ve okunabilirken de sorun yaratır. Değiştirilen bir taslak ise Tanpınar'ın düşüncesi hakkında yanlış bir sonuca götürebilir. “Çalınmadıysa güvenlidir” yargısı bu yüzden savunulamaz; listedeki maddelerin çoğunda kimse bir şey çalmıyor.
:::

---

## Neler daha gelebilirdi?

- Düzgün saklanmazsa okunamaz hâle gelirdi.
- Osmanlıca el yazmaları okunmayabilirdi.
- Arşivden hiçbir zaman çıkmayabilirdi.
- Başka belgelerle karışıp tespit edilemezdi.
- Biri değişiklik yapıp yazarı karalayabilirdi.
- Notların Tanpınar'a ait olmadığı iddia edilebilirdi.

::: {.notes}
İkinci liste belgenin okunmasına, bulunmasına ve kime ait olduğuna daha çok yaklaşıyor (s. 10). Yanlış saklanan belge okunamaz hâle gelir; okunamayan belge fiziksel olarak yerinde olsa da bilgi vermez. Osmanlıca el yazmasını okuyacak kişi yoksa belge sağlam ve yerinde olduğu hâlde kullanılamaz; buradaki eksik, belgenin korunması değil okuyucunun becerisidir. Başka belgelerle karışan sayfa mevcuttur ama bulunamaz. Bir de aidiyet sorusu var: yazarına ait olduğu tespit edilemeyen ya da ona ait olmadığı iddia edilebilen not, içeriği aynı kalsa bile aynı bilgiyi taşımaz.
:::

---

## Bir arşivde “var” ne demektir?

Bir sayfa kutuda duruyor; katalogda kaydı yok. Bir araştırmacı onu arıyor fakat bulamıyor.

**Sayfa korunmuş sayılır mı?**

::: {.notes}
Sayfa fiziksel olarak kaybolmamış olabilir; ancak araştırmacı açısından ona erişilemiyordur. Bu, “mevcut olma” ile “bulunabilir olma” arasındaki farktır. Arşivde belgeyi kutuya koymak yetmez; kutunun içeriğini bulmaya yarayan kayıtlar da bilgi parçasıdır. Yanlış bir katalog bilgisi, doğru belgeyi yanlış yere yönlendirir. Bu olayı hırsızlık olarak adlandırmadan da açıklayabiliriz: belgenin fiziksel varlığı ve kullanılabilirliği ayrı koşullardır.
:::

---

## Arşiv sorusu: neyi koruyoruz?

**Kâğıdı mı, üzerindeki metni mi, metnin kime ait olduğunu mu, gerektiğinde bulunabilmesini mi?**

Tek bir belge için bu soruların hepsi anlamlıdır.

::: {.notes}
Müsveddenin maddi varlığı, içerdiği metin ve köken bilgisi birbirini tamamlar. Kâğıdı korumak metnin değişmediğini kanıtlamaz; metni aktarmak da kimin hangi sürümü yazdığını kendiliğinden açıklamaz. Arşiv kutusunun içeriği bulunamıyorsa araştırmacı için belge pratikte yok gibidir. İki senaryoyu ayırmakta yarar var: “belge kilitli dolapta ama katalogda yok” ve “belge katalogda var ama metin yanlış aktarılmış”. İlkinde bulma ve erişme, ikincisinde güvenilir aktarım sorunu vardır.
:::

---

## Metnin aidiyeti neden önemlidir?

Bir müsvedde bulundu; kimin yazdığı bilinmiyor. Metnin içeriği okunabiliyor.

**Yazar adı olmadan aynı bilgiye mi sahibiz?**

::: {.notes}
Metnin sözcükleri okunabilir olsa da “Tanpınar bu düşünceyi yazdı” diyebilmek için belgenin kökenine ilişkin dayanak gerekir. Yazarın kimliği, tarih, taslakların sırası ve saklama geçmişi bu iddiayı değerlendirmemizi sağlar. Aidiyet yanlışsa metnin kendisi aynı kalır, ama edebiyat tarihi açısından çıkardığımız bilgi yanlış olur. Güvenilirlik belgenin içindeki işaretlere olduğu kadar bağlamına da dayanır. Tanpınar örneğinde sorun yalnız yaprakların yıpranması değil, yapraklarla ilgili iddiaların doğruluğudur.
:::

---

## Arşiv çalışması

Bir arşivde aynı metnin iki taslağı var. Birinin tarihi silik, diğerinde bazı satırlar sonradan değiştirilmiş olabilir.

1. Hangi kayıtlar korunmalı?
2. Hangi eksik bilgi yorumunuzu etkiler?
3. Belgeler yerinde dursa bile hangi yanlış sonuçlara varılabilir?

::: {.notes}
Yalnız metin gövdesi değil, taslakların birbirleriyle ilişkisi, tarihleri, üzerlerinde yapılan değişikliklerin izi ve yazara aidiyet bilgisi de korunmalıdır. Tarih okunamazsa hangi taslağın önce yazıldığına dair yorum zayıflar. Sonradan eklenen satırlar özgün metinden ayrılamazsa, yazara ait olmayan bir ifade ona atfedilebilir. İki sayfa da yerinde durabilir ve yine de yanlış sıralama, yanlış atıf ya da bir taslağın nihai sürüm sanılması söz konusu olabilir. Sonuçta fiziksel saklama ile anlamın güvenilir biçimde aktarılması ayrı işlerdir.
:::

---

## Mars yüzeyinden ilk fotoğraf

:::: {.columns}

::: {.column width="50%"}
![Viking 1'in 20 Temmuz 1976'da Mars yüzeyinden elde ettiği ilk fotoğraf (NASA/JPL)](https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia00/pia00381/PIA00381.jpg?crop=faces%2Cfocalpoint&fit=clip&h=512&w=1439)
:::

::: {.column width="50%"}
- Viking 1, 20 Temmuz 1976'da Mars'a indi; fotoğraf iniş sonrası dakikalar içinde alındı.
- Dünya ile Mars arası ortalama yaklaşık 225 milyon km; sinyal, konuma göre dakikalar süren bir yol alır.
- Araç yaklaşık 6 yıl Dünya'dan yönetildi.

**Görüntü Mars'ta elde edildi; Dünya'da nasıl görülebildi?**

[Kaynak: NASA/JPL, PIA00381](https://science.nasa.gov/photojournal/first-photograph-taken-on-mars-surface/)
:::

::::

::: {.notes}
NASA'ya göre Viking 1 iniş aracı 20 Temmuz 1976'da Mars'a indi ve ilk fotoğrafı iniş sonrası dakikalar içinde elde etti. Görev yaklaşık altı yıl sürdü ve 11 Kasım 1982'de hatalı bir komutun ardından iletişim kesildi. Mars ile Dünya arasındaki mesafe konuma göre çok değişir; ortalama değeri yaklaşık 225 milyon kilometredir ve sinyalin bu yolu alması dakikalar sürer. Bu örnek Tanpınar arşivindeki “yerinde duran ama okunamayan ya da bulunamayan belge” sorununa yeni bir boyut ekliyor: bilgi kaynağından kullanıcıya taşınmak zorunda. Dünya'daki araştırmacı yüzeye gidip fotoğrafı alamaz; yüzeydeki gözlem bir temsile dönüştürülmeli, iletilmeli ve alınan veriden yeniden görüntüye çevrilmelidir.
:::

---

## Fotoğrafı aldık; neyi biliyoruz?

Mars'tan gelen görüntü eksiksiz görünüyor. Kayıtta çekim tarihi ve görüntünün hangi görevden geldiği yazmıyor.

**Görüntüye hangi iddialar güvenle bağlanabilir?**

::: {.notes}
Görüntünün pikselleri eksiksiz olsa bile ne zaman, nerede ve hangi araç tarafından elde edildiği bilinmiyorsa bilimsel yorum sınırlanır. Aynı yüzeyin zaman içinde değişip değişmediği, çekim zamanı olmadan değerlendirilemez. Görev kaydı yoksa farklı araçların görüntüleri birbirine karışabilir. Bu yüzden zincirin sonunda dosyanın açılabilmesi yetmez; görüntüyü açıklayan kayıtlar da birlikte korunmalıdır. Soru, veri ile bilgi ayrımını Mars örneğinde yeniden kuruyor: görüntü verisi ile ona yüklenen bağlamsal anlam birlikte kullanılır.
:::

---

## Görüntünün yolculuğu

**Mars'taki sahne → algılanan görüntü → gönderilen sinyal → alınan veri → Dünya'da görüntü**

Sahne yerinde dursa bile yolculuğun herhangi bir yerindeki kayıp, onu görmemizi engelleyebilir.

::: {.notes}
Bir fotoğraf yalnızca “çekilmiş bir nesne” değildir; uzaktaki bir gözlemin alıcı için kullanılabilir bir temsile dönüşmesidir. Görüntü kaydedilemezse iletilecek veri oluşmaz. Gönderilen sinyal alınamazsa Dünya'da gözleme ulaşılamaz. Alınan veri eksik ya da bozuksa ortaya çıkan görüntü gözlenen sahneyi yanlış temsil edebilir. Kayıt Dünya'ya ulaşmış olsa bile onu okunabilir bir görüntüye çevirmek gerekir. Zincirdeki her halka, bilginin korunmasının bir parçasıdır.
:::

---

## İletişim zinciri çalışması

Mars'taki araç bir görüntü gönderdi. Dünya'daki ekip yalnız ilk parçayı aldı; sonra bağlantı kesildi.

1. Dünya'daki ekip neye sahip?
2. “Fotoğraf Dünya'ya ulaştı” demek doğru mu?
3. Yalnız eksik parçaya bakılarak hangi yanlış sonuca varılabilir?

::: {.notes}
Ekip görüntü verisinin bir kısmına sahiptir, gözlenen sahnenin tamamına değil. “Ulaştı” ifadesi neyin ulaştığını belirtmediği sürece yanıltıcıdır. Fotoğrafın üst bölümü geldiyse alt bölümdeki özellikler hakkında bir şey söyleyemeyiz; eksik alanı boş sanmak yanlış olur, çünkü aranan nesne tam o bölümde olabilir. İletim kaybı yalnız teknik bir gecikme değildir, elde edebildiğimiz bilginin sınırını da belirler. Kısmi verinin tam veri gibi sunulması da ikinci bir yorum hatasına yol açar.
:::

---

## İletişim de korunur

**Bilgi → gönderici kodlaması → gürültülü kanal → alıcı dekodlaması → bilgi**

İletilen işaretin **ulaşması**, **eksilmemesi** ve **doğru yorumlanması** gerekir.

::: {.notes}
Kaynak sunumdaki Shannon şeması (s. 13) bilgiyi bir noktadan diğerine aktarma sorununu sadeleştirir. Gönderici bilgiyi bir temsile kodlar, kanal bu temsili taşır, alıcı onu yeniden bilgiye çevirir. Kanalda gürültü ve kesinti olabilir. Bu teknik iletişim sorunu bir koruma gereksinimini gösterir: bilgi hedefe doğru ve kullanılabilir biçimde ulaşmalıdır. Her gürültü ya da iletim hatası kasıtlı bir saldırı değildir. Öte yandan iletinin güvenilir ulaşması, onu kimin görmeye yetkili olduğu sorusunu tek başına çözmez.
:::

---

## Aynı sonuç, farklı neden

Bir görüntü açılamıyor.

- Dosya hiç ulaşmamış olabilir.
- Dosya eksik ulaşmış olabilir.
- Dosya tamdır; görüntülemek için gerekli açıklama eksik olabilir.

**Korunamayan şey her durumda aynı mıdır?**

::: {.notes}
İlk durumda alıcıda veri yoktur. İkincisinde veri vardır ama gözlemi tam temsil etmez. Üçüncüsünde içerik tam olabilir; örneğin dosyanın biçimini ya da hangi sırayla yorumlanacağını belirten açıklama yoksa kullanıcı yine görüntüye ulaşamaz. Görünen sonuç, yani “açılamayan görüntü”, farklı koruma sorunlarının belirtisi olabilir. Bu yüzden bir olayı tanımlarken yalnız sonucu söylemeyiz; kaynağın, gönderilen gösterimin, alınan kaydın ve yorumun durumunu ayrı ayrı sorgularız.
:::

---

## Üç farklı bozulma

- **Sinyal hiç ulaşmadı** → görüntü elde edilemez.
- **Sinyalin bir kısmı bozuldu** → görüntü eksik veya yanıltıcı olabilir.
- **Doğru görüntü yanlış bağlamla sunuldu** → görülen şey yanlış yorumlanabilir.

::: {.notes}
İlk durum iletim ve erişme, ikinci durum içeriğin korunması, üçüncü durum ise bağlamın korunması sorunudur. Doğru fotoğraf yanlış görev ya da yanlış tarih etiketiyle arşivlenirse pikseller doğru olduğu hâlde araştırmacı yanlış sonuca varabilir. Bu, en baştaki veri ve bilgi ayrımına geri bağlanıyor: verinin bozulmamış olması, onu yorumlamaya yarayan bağlamın doğruluğunu garanti etmez. “Sinyal doğru, açıklama yanlış” durumunda içerik korunmuş, bağlamın doğruluğu korunamamıştır.
:::

---

## Tanpınar ve Mars: ortak soru

| | Tanpınar'ın evrakı | Mars fotoğrafı |
|---|---|---|
| Nerede doğdu? | Yazıldığı fiziksel ortamda | Mars yüzeyindeki gözlemde |
| Nasıl ulaştı? | Saklama, tasnif ve okuma yoluyla | Kayıt, iletim ve yeniden oluşturma yoluyla |
| Ne bozulabilir? | Belge, metin, aidiyet ve bulunabilirlik | Sinyal, görüntü, etiket ve yorum |

**Bilgiyi korumak, varlığını sürdürmesini ve doğru kişiye anlamlı biçimde ulaşmasını da kapsar.**

::: {.notes}
İki örnekte araçlar çok farklıdır, ama sorunların yapısı benzerdir. Evrak fiziksel olarak saklanır, fotoğraf sinyale dönüştürülüp uzak bir yere taşınır. Her ikisinde de kaynak ile kullanıcı arasında adımlar vardır. Bilgi bu adımlarda kaybolabilir, değişebilir, yanlış kişiye ulaşabilir ya da doğru kişiye hiç ulaşmayabilir. Bu karşılaştırma bilgi güvenliğini yalnız hırsızlık ya da gizli dosya olarak düşünmenin neden eksik kaldığını gösteriyor. Koruma, bir kaydın var olması kadar güvenilir kullanılabilmesiyle de ilgilidir.
:::

---

## Uygulama: tek kayıt, iki ortam

Bir araştırmacı el yazması bir mektubu fotoğraflıyor ve uzak bir araştırmacıya gönderiyor.

- Asıl sayfa yerinde; fotoğrafın bir bölümü eksik.
- Fotoğraf tam; dosyada yazar adı yanlış.
- Dosya doğru; yalnız ilgisiz kişiler erişebiliyor.

**Her durumda ne korunmuş, ne korunamamıştır?**

::: {.notes}
Birinci durumda fiziksel belge korunmuş olabilir ama aktarılan temsil eksiktir; alıcı metnin tümünü değerlendiremez. İkinci durumda görüntü ve iletim başarılıdır, fakat aidiyet bilgisi yanlıştır, dolayısıyla çıkardığımız bilgi güvenilir değildir. Üçüncü durumda kayıt ve etiket doğru olsa bile onu kullanması gereken kişi erişemiyordur; ilgisiz kişilerin erişimi de ayrı bir sorun yaratır. “Dosya var, o hâlde sorun yok” gibi tek ölçütlü cevaplar bu üç durumu ayırt edemez. Her durumda kaydı, bağlamı, alıcıyı ve kullanım sonucunu ayrı ayrı düşünmemiz gerekir.
:::

---

## Sonuç: ne korunuyor?

Bir kaydın **kendisi**, **taşıdığı anlam**, **kaynağı ve bağlamı**, **ulaştığı kişi** ve **gerektiğinde kullanılabilmesi**.

**Bilgi güvenliği, bilginin çalınmasını önlemekten daha geniş bir koruma problemidir.**

::: {.notes}
Veri ile bilgi ayrımı korunacak şeyi daha dikkatli görmemizi sağlar; koruma kapsamını daraltmaz. Tanpınar'ın evrakı bilginin fiziksel ortamda da kaybolabildiğini, bozulabildiğini ya da bulunamadığını gösterdi. Mars fotoğrafı ise bilginin kullanıcıya ulaşmasının iletişime bağlı olduğunu görünür kıldı. Bir belgeye ya da görüntüye ilişkin güvenlik değerlendirmesini yalnız “kim çalabilir?” sorusundan kuramayız. “Doğru içerik, doğru bağlamla, gerektiğinde, onu kullanacak kişiye ulaşabiliyor mu?” sorusu da gerekir.
:::

---

## Kaynaklar

:::: {.columns}

::: {.column width="50%"}
- BGT 201 ders sunumu 1, “Bilgi Güvenliği”, s. 3–13.
- [TDK, “bilgi”](https://sozluk.gov.tr/kelime/bilgi)
- [A. H. Tanpınar Arşivi, proje sayfası](https://arsiv.tanpinarmerkezi.msgsu.edu.tr/65.html)
:::

::: {.column width="50%"}
- [Anadolu Ajansı, Tanpınar arşivinin dijitalleştirilmesi](https://www.aa.com.tr/tr/kultur-sanat/tanpinar-arsivi-dijital-ortama-aktarildi/913678)
- [NASA/JPL, PIA00381, First Photograph Taken on Mars Surface](https://science.nasa.gov/photojournal/first-photograph-taken-on-mars-surface/)
- [NASA, Viking 1 görev sayfası](https://science.nasa.gov/mission/viking-1/)
:::

::::

::: {.notes}
38 gibi sayılar ve kayıtlar kurgusal örneklerdir. Tanpınar ve Mars bağlamı yukarıdaki yayımlanmış kaynaklara dayanır.
:::
