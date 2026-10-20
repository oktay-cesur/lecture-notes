---
title: "Neden Veritabanına İhtiyaç Duyarız?"
subtitle: "BLP 1005 — Veritabanı Yönetim Sistemleri"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-10-20
description: Veri ile bilgi, tablo, satır, sütun ve şema, tekrar ve tutarsızlık, aynı anda gelen isteklerin bir kuralı bozması, Excel'in ortak düzenlemesinden farkı, veritabanı ile VTYS ve istemci–sunucu akışı.
execute:
  echo: false
---

## Veri ve bilgi: bir değere hangi soruyla bakıyoruz?

Bir kâğıtta yalnız şu yazıyor: **18**

> Bu sayı ne anlatıyor?

. . .

“Atölyeye eylülde 18 başvuru geldi.”

**Veri:** Kaydedilmiş değerler.

**Bilgi:** Verilerin bağlam içinde yorumlanmasıyla elde edilen anlam.

| Veri | Bağlam | Bilgi |
| --- | --- | --- |
| 18 | Atölye, eylül, başvuru sayısı | Eylülde 18 kişi başvurdu |
| 05552223344 | Zeynep Aydın'ın telefon sütunu | Zeynep'e bu numaradan ulaşılır |

::: {.notes}
Kâğıttaki 18 yaş da olabilir, kapı numarası da, bir sınav puanı da. Sayıya bakarak hangisi olduğunu söyleyemeyiz.

“Atölyeye eylülde 18 başvuru geldi” dediğimizde aynı sayı bir sorunun cevabı oluyor: kaç kişi başvurdu? Bu dersin ilk ayrımı burada: kaydedilmiş değere veri, o değeri bir bağlam içinde yorumlayınca elde ettiğimiz anlama bilgi diyoruz.

Aynı değer bağlamla birlikte okununca bilgiye dönüşüyor. İkinci satırdaki numara tek başına yalnızca on bir haneli bir sayı; Zeynep Aydın'ın telefon sütunundaki değer olduğunu bildiğimizde ona ulaşmamıza yarıyor.

Saklamak istediğimiz değerler veri, bu değerlerden çıkardığımız anlam ise bilgidir.

Bir atölyenin başvurularını saklamak istediğimizi düşünelim. Başlangıçta bir metin dosyası açıp her başvuruyu alt alta yazmak kolaydır. Ama bir süre sonra birinin telefonunu bulmak, yeni başvuru eklemek, değişen bir telefonu düzeltmek gerekecek. Saklamaya, kullanma ve güncel tutma işi eklenecek. Bu notun bütün sorusu şu: bu işler büyüdüğünde neye ihtiyaç duyarız?
:::

---

## Tablo, satır, sütun ve şema

| ad_soyad | telefon | kayit_tarihi |
| --- | --- | --- |
| Can Demir | 05551112233 | 2026-09-10 |
| Zeynep Aydın | 05552223344 | 2026-09-11 |
| Mert Doğan | 05553334455 | 2026-09-11 |

**Tablo:** Verinin satır ve sütunlarla düzenlenmiş hâli.

**Sütun:** Aynı türden bilgilerin bulunduğu adlandırılmış bölüm.

**Satır:** Tek bir başvurunun değerlerini bir araya getiren bölüm.

Elif Kaya, `05554445566`, `2026-09-12` listeye ekleniyor.

**Şema:** Sütun adlarını ve taşıdıkları değerlerin türünü belirleyen yapı.

. . .

Yeni bir satır eklenir; sütun adları ve değer türleri aynı kalır.

**Veri değişir, şema korunur.**

::: {.notes}
Atölyenin başvurularını her başvuranın adı, telefonu ve başvuru tarihiyle listeliyoruz. Atölye görevlisi Zeynep Aydın'ın telefonunu bulmak istiyor. Zeynep'in başvurusu ikinci satırda; bu satırın telefon sütununa bakıyoruz ve 05552223344 değerini okuyoruz.

Adı, telefonu ve tarihi aynı satırda tutmanın yararı şurada: okuduğumuz numaranın hangi başvuruya ait olduğunu görüyoruz. Bir satırla bir sütunun kesiştiği yerde tek bir değer duruyor.

12 Eylül'de Elif Kaya başvuruyor. Görevli adı `ad_soyad`, numarayı `telefon`, tarihi `kayit_tarihi` sütununa yerleştirerek yeni bir satır ekliyor. Elif'ten de önceki başvuranlarla aynı türde bilgiler alındığı için yeni sütun açmak gerekmiyor.

Listedeki başvuru sayısı arttı ama hangi bilginin nerede ve ne tür bir değerle tutulacağı değişmedi. Bu iki şeyi ayırmak önemli: tablodaki satırlara veri, tablonun yapısına şema diyoruz. Yeni bir başvuru veriyi değiştirir, şemayı değiştirmez.

Mert Doğan'ın telefonunu düz bir metin dosyasında ararken satırları baştan okuyabiliriz. Üç satırda bu sorun değil. Başvuru sayısı arttıkça bunu her aramada yeniden yapmak zahmetli olur. Değerleri düzenli saklamak yetmiyor; aranan başvuruyu bulabilen bir düzen de istiyoruz.
:::

---

## Aynı telefonu iki yerde tutarsak ne olur?

Zeynep 25 Eylül'de yeniden başvurur; adı ve telefonu yeniden yazılır.

**Tekrar:** Aynı bilginin birden çok yerde tutulması.

Telefonu değişince yalnız bir başvuruyu düzeltirsek?

. . .

**Tutarsızlık:** Aynı bilgi için birbirini çürüten değerlerin bulunması.

::: {.notes}
Atölyeye 11 Eylül'de başvuran Zeynep Aydın 25 Eylül'de yeniden başvuruyor. Yeni başvuru ayrı bir satıra yazıldığı için Zeynep'in adı ve telefonu artık iki satırda duruyor. Buna tekrar diyoruz.

Zeynep'in telefonu değişti. Görevli yalnız bir satırdaki numarayı güncellerse, diğerinde eski numara kalır. Aynı kişinin telefonu için iki farklı değer görüyoruz. Her satır tek başına düzgün görünüyor; birlikte okununca birbirini çürütüyorlar. Buna tutarsızlık diyoruz.

Dosya hangi numaranın güncel olduğunu kendi başına bilemez. Tekrarlanan bilgiyi güncel tutmak için iki satırın da düzeltilmesi gerekir; birini unuttuk mu hata sessizce kalır.
:::

---

## 500 TL iki ödemeye birden yeter mi?

Hesapta **500 TL** var; bakiyeyi aşan harcamaya izin yok.

| İstek | Gördüğü bakiye | İstediği tutar | Tek başına cevap |
| --- | ---: | ---: | --- |
| Yemek | 500 TL | 350 TL | Yeterli |
| Telefon faturası | 500 TL | 300 TL | Yeterli |

. . .

**350 + 300 = 650 TL:** Eldeki paradan **150 TL** fazla onay.

**Eşzamanlı erişim:** Aynı veriye aynı anda birden çok isteğin ulaşması.

Gereken: bakiyeyi sorma ile ödemeye karar vermeyi, ortak kuralı koruyacak biçimde yürütmek.

Bir ödeme kabul edilince **ötekinin değerlendirmesi bunu hesaba katmalı.**

::: {.notes}
Bir banka hesabında 500 TL var ve bakiyeyi aşan harcamaya izin verilmiyor. İnternetten 350 TL'lik bir yemek siparişi veriliyor. Aynı sırada 300 TL'lik telefon faturası da aynı hesaptan çekilmek isteniyor.

İki istek de, ötekinin harcaması hesaba yansımadan bakiyeyi soruyor ve 500 TL görüyor. 500, 350'den büyük; 500, 300'den de büyük. İki karşılaştırma da kendi içinde doğru. Ama iki ödeme birlikte 650 TL ediyor ve hesaptaki paradan 150 TL fazla ödeme onaylanmış oluyor.

Sorun hesaplamada değil. İki karar aynı parayı birbirinden habersiz kullanılabilir saymış. Bu örnek belirli bir bankada ne olacağını anlatmıyor; korunması gereken kuralı gösteriyor: toplam harcama bakiyeyi aşmamalı.

Aynı veriye aynı anda birden çok istek ulaşabiliyor. Buna eşzamanlı erişim diyoruz. Tek bir kişi tek bir dosya üzerinde çalışırken bu sorunla karşılaşmayız; çok sayıda kullanıcı ve uygulama aynı veriyi kullandığında kaçınılmaz oluyor.

Örnekte gereken şey, bakiye sorgusuyla ödeme kararını birbirine bağlı yürütmek. Ödemelerden biri kabul edildiğinde diğer isteğin değerlendirmesi bunu hesaba katmalı. Veriyi saklayan sistemin, birlikte gelen isteklerin ortak kuralı bozmamasını da sağlaması gerekiyor.
:::

---

## Excel'de tutsak olmaz mı?

Excel'de liste tutabilir, filtreleyebilir ve düzenleyebiliriz.

Desteklenen ortamlarda aynı çalışma kitabını birlikte düzenleyebiliriz.

> Bir belgeyi birlikte düzenlemek ile iki ödemenin hesap kuralına birlikte uymasını sağlamak aynı iş mi?

. . .

Birden çok uygulama aynı veriyi kullanıyorsa kuralları **ortak bir yerde** yönetmek isteriz.

::: {.notes}
Atölye listesini Excel'de tutabiliriz; filtreleyebilir, düzenleyebiliriz. Desteklenen ortamlarda aynı çalışma kitabını iki kişi birlikte de düzenleyebilir. [Microsoft'un ortak düzenleme açıklaması](https://support.microsoft.com/en-us/excel/get-started/collaborate-on-excel-workbooks-at-the-same-time-with-co-authoring) bu imkânı anlatıyor. Yani mesele, iki kişinin dosyayı aynı anda açıp açamaması değil.

Bir belgeyi birlikte düzenlemek ile yemek ve fatura ödemesinin birlikte hesap kuralına uymasını sağlamak farklı ihtiyaçlar. İkincisinde her uygulamanın aynı kuralları ayrı ayrı doğru uygulamasına güvenmek istemeyiz. Kimin neyi okuyup değiştirebileceğini, hangi değerlerin kabul edileceğini ve birlikte gelen isteklerin nasıl yürütüleceğini ortak bir yerde yönetmek isteriz.

Excel kötü bir araç diye bir sonuç çıkarmıyoruz. Araç seçimini yapılacak iş belirliyor.
:::

---

## Veritabanı, VTYS ve işletim sistemi benzetmesi

**Veritabanı:** Birbiriyle ilgili verilerin belirli bir yapıya göre saklanan bütünü.

**Veritabanı Yönetim Sistemi (VTYS):** Veritabanını oluşturan, saklayan, okuma ve yazma isteklerini karşılayan; erişim yetkilerini ve tanımlanmış veri kurallarını uygulayan yazılım.

**MySQL bir VTYS'dir.**

İşletim sistemi, birden çok programın **ortak bilgisayar kaynaklarını** kullanımını düzenler.

VTYS, birden çok kullanıcı ve uygulamanın **ortak veriye erişimini** düzenler.

Uygulamalar veri dosyalarını ayrı ayrı değiştirmek yerine **isteklerini yönetici yazılıma iletir.**

::: {.notes}
Atölyenin başvuru tablosu, içindeki satırlar ve yapısı bir veritabanının parçaları. İlişkisel veritabanlarında veriler tablolarla düzenlenir. Veritabanını yöneten yazılım ise ayrı bir şey: VTYS. MySQL bir VTYS'dir. MySQL'i bilgisayara kurmak ile atölye başvurularının veritabanını oluşturmak ayrı işler; ilkinde yönetici yazılımı kuruyoruz, ikincisinde onun içinde bir veri bütünü yaratıyoruz.

Bu görevi anlamak için işletim sistemine bakabiliriz. Birden çok program aynı bilgisayarın belleğini ve diskini kullanır; her biri kendi başına her şeyi değiştirmeye kalksaydı düzen bozulurdu. İşletim sistemi bu ortak kaynakların kullanımını düzenler. VTYS'nin ortak veriye erişimi düzenlemesini de bu açıdan düşünebiliriz.

Benzetme sınırlı: işletim sistemi ile VTYS aynı şey değil. Yalnız şu noktada işimize yarıyor: kullanıcılar ve uygulamalar veri dosyalarına kendi başlarına dokunmuyor, isteklerini yönetici yazılıma veriyor.

Bu yönetimin doğru çalışması için uygun bir yapı, doğru tanımlanmış kurallar ve doğru yürütülen işlemler gerekir. Yanlış yazılmış bir telefonun gerçekte kime ait olduğunu VTYS bilemez. İki ayrı yerde tutulan telefonun aynı kişiye ait olduğunu söyleyen bir tasarım yoksa hangisinin güncel olduğunu da kendiliğinden bulamaz. VTYS her sorunu çözen bir araç değil.
:::

---

## İstek gider, yanıt geri döner

**İstemci:** İsteği hazırlayıp gönderen ve sonucu gösteren program.

**Sunucu:** İstekleri karşılayan VTYS hizmetinin çalıştığı taraf.

<svg viewBox="0 0 700 200" role="img" aria-label="İstemci sunucuya istek gönderir; sunucu veritabanından okur ve yazar; yanıt istemciye döner" style="width:100%;max-height:300px">
  <defs>
    <marker id="ok" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><path d="M0,0 L10,4 L0,8 z" fill="currentColor"/></marker>
  </defs>
  <rect x="10" y="60" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <text x="95" y="96" font-size="19" text-anchor="middle" fill="currentColor">Uygulama</text>
  <text x="95" y="120" font-size="19" text-anchor="middle" fill="currentColor">(istemci)</text>
  <rect x="265" y="60" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <text x="350" y="96" font-size="19" text-anchor="middle" fill="currentColor">VTYS</text>
  <text x="350" y="120" font-size="19" text-anchor="middle" fill="currentColor">(sunucu)</text>
  <rect x="520" y="60" width="170" height="80" rx="40" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <text x="605" y="108" font-size="19" text-anchor="middle" fill="currentColor">Veritabanı</text>
  <line x1="180" y1="80" x2="263" y2="80" stroke="currentColor" stroke-width="2.5" marker-end="url(#ok)"/>
  <text x="222" y="70" font-size="16" text-anchor="middle" fill="currentColor">istek</text>
  <line x1="263" y1="122" x2="182" y2="122" stroke="currentColor" stroke-width="2.5" marker-end="url(#ok)"/>
  <text x="222" y="146" font-size="16" text-anchor="middle" fill="currentColor">yanıt</text>
  <line x1="435" y1="80" x2="518" y2="80" stroke="currentColor" stroke-width="2.5" marker-end="url(#ok)"/>
  <text x="477" y="70" font-size="16" text-anchor="middle" fill="currentColor">okuma / yazma</text>
  <line x1="518" y1="122" x2="437" y2="122" stroke="currentColor" stroke-width="2.5" marker-end="url(#ok)"/>
  <text x="477" y="146" font-size="16" text-anchor="middle" fill="currentColor">veri</text>
</svg>

::: {.notes}
İstemci görevlinin kendisi değil, kullandığı program. Sunucu da VTYS hizmetinin çalıştığı taraf. İkisi aynı bilgisayarda çalışabilir, ayrı bilgisayarlarda da; görevleri değişmez.

Şemayı soldan sağa okuyalım. İstemci isteği sunucuya gönderiyor. Sunucudaki VTYS veritabanından okuyor ya da ona yazıyor, veri geri geliyor, VTYS sonucu yanıt olarak istemciye dönüyor.

Aynı veriyi kullanan başka bir uygulamanın isteği de aynı yoldan, aynı VTYS'nin yönetiminden geçiyor. Kuralların uygulanacağı yerin bir olması, ortak yönetim ihtiyacına verdiğimiz cevap.
:::

---

## Can Demir’in telefonunu kim bulur?

1. İstemci arama isteğini sunucuya gönderir.
2. VTYS isteğin geçerliliğini ve okuma yetkisini denetler.
3. VTYS aranan satırı bulur, telefon değerini okur.
4. VTYS sonucu istemciye yanıt olarak gönderir.
5. İstemci telefonu ekranda gösterir.

> Hangi adımda veriye dokunuluyor, hangisinde sonuç gösteriliyor?

. . .

Veriye **3. adımda** erişilir; ekranda gösterme **5. adımın** işidir.

::: {.notes}
Atölye görevlisi Can Demir'in telefonunu öğrenmek için uygulamada adını arıyor. Görevlinin kullandığı program istemci; arama isteğini sunucuya iletiyor. Sunucudaki VTYS isteğin geçerli olup olmadığını ve görevlinin okuma yetkisini denetliyor. Sonra Can Demir'in başvuru satırını buluyor ve telefon sütunundaki 05551112233 değerini okuyor. Değer yanıtla istemciye dönüyor, istemci de numarayı görevlinin ekranında gösteriyor.

Üçüncü adıma özellikle dikkat edin: satırı bulmak ve değeri okumak.

Sonucun ekranda görünmesi ile veriyi okumak aynı iş değil. İstemci kullanıcıyla etkileşiyor, VTYS veriye erişiyor. Görevleri ayırdığımız için aynı kayıtları kullanan başka bir uygulama da aynı kuralların geçerli olduğu yerden geçiyor.
:::

---

## Bu nottan kalanlar

- **Veri** kaydedilmiş değer; **bilgi** onun bağlam içindeki anlamı.
- Veri **tablo** ile düzenlenir; tablonun yapısı **şema**, satırlar veridir.
- Aynı bilgiyi birden çok yerde tutmak **tutarsızlığa** yol açar.
- Aynı veriye aynı anda gelen istekler bir kuralı bozabilir; ortak kuralları **ortak bir yerde** yönetmek isteriz.
- **Veritabanı** veri bütünüdür; **VTYS** onu yöneten yazılımdır. İstemci isteği gönderir, sunucudaki VTYS veriye erişir.

::: {.notes}
Bu notta bir veritabanına neden ihtiyaç duyduğumuzu gördük. Dosyada saklayabildiğimiz şeyleri tutarlı, ortak kurallarla ve birden çok kullanıcıya karşı yönetebilmek için bir VTYS kullanıyoruz.
:::
