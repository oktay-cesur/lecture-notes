---
title: "Anomaliler ve Fonksiyonel Bağımlılık"
subtitle: "BLP 1005 — Veritabanı Yönetim Sistemleri"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-10-20
description: Tek defterde güncelleme, ekleme ve silme anomalileri, fonksiyonel bağımlılığı X → Y biçiminde yazmak, bağımlılığı iş kuralından çıkarmak ve bağımlılıklardan aday anahtarı bulmak.
format:
  html:
    css:
    - ../../../styles.css
    - blp1005-tables.css
    - blp1005-diagrams.css
  revealjs:
    css:
    - ../../../slides.css
    - blp1005-tables.css
    - blp1005-diagrams.css
execute:
  echo: false
---

## Bir meslek yüksekokulunun kayıt defteri

::: {.blp-record-table}

| Öğrenci No | Ad Soyad | Telefon | Ders Kodu | Ders Adı | Öğr. Üyesi No | Öğr. Üyesi | Bölüm | Not |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 101 | Ahmet Yılmaz | 05554445566 | BLP1005 | Veritabanı Sistemleri | 501 | Dr. Can Aksoy | Bilgisayar Programcılığı | 85 |
| 101 | Ahmet Yılmaz | 05554445566 | MAT1002 | Matematik II | 502 | Doç. Elif Demir | Temel Bilimler | 70 |
| 102 | Ayşe Kaya | 05556667788 | BLP1005 | Veritabanı Sistemleri | 501 | Dr. Can Aksoy | Bilgisayar Programcılığı | 90 |
| 103 | Mehmet Çelik | 05558889900 | BLP1005 | Veritabanı Sistemleri | 501 | Dr. Can Aksoy | Bilgisayar Programcılığı | 65 |

:::

Satırı `(ogrenci_numarasi, ders_kodu)` ayırt eder.

::: {.notes}
Kütüphanede üyeyi her ödünç için baştan yazmanın üyenin bilgisini tekrar ettirdiğini görmüştük. Ödünç tablosu yalnız numaraları taşıyınca tekrar bitmişti. Şimdi tersini deneyelim: bir meslek yüksekokulunun kayıt defterini tek tabloda tutalım ve nerede bozulduğuna bakalım.

Defterde öğrencinin numarası, adı ve telefonu yazıyor. Aldığı dersin kodu ve adı, dersi yürüten öğretim üyesinin numarası, adı ve bölümü ve öğrencinin o dersten aldığı not da yazıyor. Her ders tek bir öğretim üyesi tarafından yürütülüyor. Bir öğrenci birden çok ders alıyor, bir dersi birden çok öğrenci alıyor. Her satır bir öğrencinin bir dersi alışını anlatıyor.

Defterin sütunları soldan sağa `ogrenci_numarasi`, `ad_soyad`, `telefon`, `ders_kodu`, `ders_adi`, `ogretim_uyesi_no`, `ogretim_uyesi_adi`, `ogretim_uyesi_bolumu` ve `basari_notu`.

Her hücrede tek bir değer var. Satırı `ogrenci_numarasi` ile `ders_kodu` birlikte ayırt ediyor; bu, bileşik anahtar örneği. 101 iki satırda, BLP1005 üç satırda geçiyor ama `(101, BLP1005)` çifti yalnız bir satırda. Şimdi bu tabloyla üç işlem deneyeceğiz. Her biri başlangıç tablosundan bağımsız.
:::

---

## Bir öğrencinin telefonu değişirse

Ahmet'in telefonu değişti. Görevli ilk satırı güncelledi, ikincisini atladı.

| ogrenci_numarasi | ad_soyad | telefon | ders_kodu |
| --- | --- | --- | --- |
| 101 | Ahmet Yılmaz | 05550001122 | BLP1005 |
| 101 | Ahmet Yılmaz | 05554445566 | MAT1002 |

> Ahmet'in telefonu hangisi?

. . .

**Güncelleme anomalisi:** Tekrar eden bilginin bazı satırlarda değişip bazılarında değişmemesiyle tablonun kendisiyle çelişmesi.

::: {.notes}
Ahmet Yılmaz telefon numarasını değiştirdi. Numarası iki satırda yazılı: BLP1005 satırında ve MAT1002 satırında. Görevli ilk satırı güncelledi, ikincisini atladı.

Tablo şimdi Ahmet için iki telefon gösteriyor. Hangisi doğru? Tabloya bakarak anlayamayız; kayıt kendisiyle çelişiyor. Bu, atölye kaydında telefonun yalnız bir kopyasının değişmesiyle gördüğümüz tutarsızlığın aynısı.

Aynı arıza ders adında da çıkar: Veritabanı Sistemleri adı üç satırda yazılı, ders adı değişirse üç satır değişmeli. Derse yüz öğrenci kayıtlıysa yüz satır olur. Tekrarın bedeli, diskte kapladığı yerden çok, değişiklik sırasında bir satırın gözden kaçması.

Bir tablonun yapısı yüzünden yapılan bir işlemin tabloyu hatalı ya da eksik bırakmasına anomali diyoruz. Bu, anomalinin ilk türü: güncelleme anomalisi.
:::

---

## Henüz öğrencisi olmayan bir ders

PRG1004 Görsel Programlama açıldı; dersi Dr. Can Aksoy yürütecek. Dönem yeni başladı, dersi seçen yok.

| ogrenci_numarasi | ders_kodu | ders_adi | ogretim_uyesi_no |
| --- | --- | --- | --- |
| *(boş)* | PRG1004 | Görsel Programlama | 501 |

> Bu satır deftere girer mi?

. . .

**Ekleme anomalisi:** Bir bilgiyi kaydedebilmek için başka bir bilginin bulunmasının zorunlu olması.

::: {.notes}
Bölüm PRG1004 kodlu Görsel Programlama dersini açtı. Dersi Dr. Can Aksoy yürütecek. Bu dersi deftere yazabilir miyiz?

Her satır bir öğrencinin bir dersi alışını anlatıyor. Bu derste öğrenci olmadığı için `ogrenci_numarasi` kısmı boş kalıyor. Birincil anahtarın hiçbir parçası boş bırakılamıyor, yani satır deftere girmiyor.

Dersi kaydetmenin tek yolu bir öğrenci uydurmak: örneğin adı olmayan 999 numaralı bir öğrenci. Satır giriyor ama tabloda artık gerçekte olmayan bir öğrenci var. Öğrenci sayısı yanlış çıkıyor, not listelerinde bu öğrenci görünüyor ve biri onu silmeyi unutursa yanlış kalıyor.

Burada ders bilgisi, öğrenci bilgisi olmadan yazılamıyor. Buna ekleme anomalisi diyoruz.
:::

---

## Bir kaydı silmek

Ahmet MAT1002 dersinden çekildi; ikinci satır silinecek. MAT1002'yi alan başka öğrenci yok.

> Satırla birlikte hangi bilgiler de kaybolur?

. . .

`MAT1002`, `Matematik II`, `502`, `Doç. Elif Demir`, `Temel Bilimler`

**Silme anomalisi:** Bir kaydı silmenin, onunla ilgisiz başka bir bilgiyi de kaybettirmesi.

::: {.notes}
Ahmet'in MAT1002 dersindeki kaydı, yani ikinci satır silinecek. Satır silindiğinde yalnız Ahmet'in notu gitmez. Dersin kodu, adı, öğretim üyesi ve onun bölümü de tablodan kayboluyor. Bölümün böyle bir dersi olduğunu ve onu kimin yürüttüğünü artık bu defterden öğrenemeyiz.

Ahmet BLP1005 satırıyla defterde kalıyor ama silmek istemediğimiz bilgi gitti. Silmek istediğimiz yalnız bir öğrencinin ders kaydıydı; dersin kendisini silmek istemedik.

Üç anomaliyi gördük: güncelleme, ekleme, silme. Şimdi üçünün ortak kaynağına bakalım.
:::

---

## Üç arızanın ortak yanı

- **Telefon** öğrencinin bilgisi: numara belli olunca telefon belli.
- **Ders adı ve yürüten** dersin bilgisi: ders kodu belli olunca bunlar belli.
- **Öğretim üyesinin adı ve bölümü** öğretim üyesine bağlı.
- Hiçbiri notu belirleyen **öğrenci–ders çiftinin** bilgisi değil.

Hepsi aynı satıra yazıldı: öğrenci bilgisi her ders satırında, ders bilgisi her öğrenci satırında **yinelendi.**

::: {.notes}
Üç örneğe birlikte bakalım. Her seferinde bir bilgi, aslında başka bir bilgiye bağlı olduğu hâlde, onunla aynı satıra yazılmıştı.

Telefon öğrencinin bilgisi. Ders adı ve dersi kimin yürüttüğü dersin bilgisi. Öğretim üyesinin adı ve bölümü öğretim üyesine bağlı. Bunların hiçbiri, notu belirleyen öğrenci–ders çiftinin bilgisi değil. Biz hepsini aynı satıra koyduk.

Güncelleme anomalisi bu yinelemeden çıktı. Ekleme ve silme anomalileri de aynı yerden çıktı: ders bilgisi öğrenci bilgisiyle aynı satırda yaşadığı için öğrenci olmadan var olamıyor, öğrenci gidince birlikte gidiyor.

Tabloyu bu bağlılıklara göre parçalara ayırarak anomalileri gidermeye normalizasyon diyoruz. Parçalamadan önce hangi bilginin hangisini tek ve kesin biçimde belirlediğini yazmamız gerekiyor.
:::

---

## Bir değeri bilince diğerini söyleyebilir miyiz?

- Öğrenci numarası 101 → ad ve soyad? **Evet:** Ahmet Yılmaz.
- Ders kodu BLP1005 → ders adı? **Evet:** Veritabanı Sistemleri.
- Öğrenci numarası 101 → ders kodu? **Hayır:** BLP1005 de olabilir, MAT1002 de.

. . .

**Fonksiyonel bağımlılık:** Her X değeri için tek bir Y değeri varsa Y, X'e bağımlıdır.

$$X \rightarrow Y$$

Ok “belirler” diye okunur.

::: {.notes}
`kayit_defteri` tablosuna dönüp üç soru soralım. Öğrenci numarası 101 ise ad ve soyadı kesin söyleyebilir miyiz? Evet. Ders kodu BLP1005 ise dersin adını? Evet. Öğrenci numarası 101 ise ders kodunu? Hayır; Ahmet iki ders alıyor.

İlk iki soruda bildiğimiz değer, aradığımız değeri tek ve kesin biçimde belirliyor. Üçüncüde belirlemiyor, birden çok seçenek kalıyor.

Bir sütunun ya da sütun grubunun her değeri için başka bir sütunun ya da grubun tek bir değeri varsa ikinci sütun birinciye fonksiyonel olarak bağımlı. Birinciyi X, ikinciyi Y diye adlandırırsak X → Y yazıyoruz. X ve Y birer sütunu ya da parantez içinde birkaç sütunluk bir grubu gösterebilir. Örneğin `ogrenci_numarasi → ad_soyad`, “öğrenci numarası ad soyadı belirler” diye okunuyor. Okun sağında virgülle ayrılmış birkaç sütun varsa hepsini soldaki belirliyor.

`ogrenci_numarasi → ad_soyad`, tek başına `ad_soyad → ogrenci_numarasi` sonucunu vermez. Öğrenci numarası 101, Ahmet Yılmaz'ı belirler; aynı adı taşıyan başka bir öğrencinin bulunması ise mümkündür. Ad soyadı bilmek öğrenci numarasını tek bir değere indirmeyebilir. $X \rightarrow Y$ ve $Y \rightarrow X$ birlikte de geçerli olabilir; bunu bir yöndeki bağımlılıktan çıkaramayız.
:::

---


## Dört iş kuralı, dört bağımlılık

![Dört iş kuralına ait fonksiyonel bağımlılıklar: ogrenci_numarasi ad_soyad ve telefonu; ders_kodu ders_adi ve ogretim_uyesi_no'yu; ogretim_uyesi_no ogretim_uyesi_adi ve ogretim_uyesi_bolumu'nu; (ogrenci_numarasi, ders_kodu) bileşik grubu ise basari_notu'nu belirler.](../../../images/blp1005/dort-bagimlilik.svg){.blp-diagram}

::: {.notes}
Bağımlılıkları tablodan değil, kurumun kurallarından çıkarırız. Dört kuralı sırayla okuyalım.

1. Her öğrencinin tek bir numarası, ad soyadı ve telefonu vardır.
   `ogrenci_numarasi → ad_soyad, telefon`
2. Her dersin tek bir adı ve tek bir öğretim üyesi vardır.
   `ders_kodu → ders_adi, ogretim_uyesi_no`
3. Her öğretim üyesinin tek bir adı ve bölümü vardır.
   `ogretim_uyesi_no → ogretim_uyesi_adi, ogretim_uyesi_bolumu`
4. Bir öğrencinin bir dersten tek bir notu vardır.
   `(ogrenci_numarasi, ders_kodu) → basari_notu`

Şemadaki belirleyici ve belirlenen sütun grupları kural sırasıyla bu bağımlılıkları yansıtır. Dördüncü kuralda okun solunda iki sütunlu bir grup var. Not, yalnız öğrenci bilinince de yalnız ders bilinince de belli olmaz; ikisi birlikte bilinmeli. İkisi birlikte belirliyor, biri tek başına belirlemiyor.
:::

---


## Satırlara bakarak bağımlılık bulunmaz

Üç öğrencinin telefonu farklı. `telefon → ogrenci_numarasi` yazabilir miyiz?

. . .

Ahmet'in kardeşi aynı okula kaydolursa **aynı ev telefonunu** verebilir. Bağımlılık çöker.

MAT1002 tabloda tek satırda geçiyor. `ders_kodu → ders_adi` bu satırdan **kanıtlanamaz**, ama "her dersin tek bir adı vardır" kuralı yeter.

> Örnek satır ile iş kuralı aynı şey değil.

::: {.notes}
Tablodaki üç öğrencinin telefonu birbirinden farklı. Satırlara bakınca `telefon → ogrenci_numarasi` yazabilirmişiz gibi görünüyor: her numara tek bir öğrencide geçiyor.

Ahmet'in kardeşi de aynı okula kaydolursa ikisi aynı ev telefonunu verebilir. Aynı telefonun karşısında iki farklı öğrenci numarası çıkar ve bağımlılık çöker. Satırlarda tekrar görünmemesi tesadüftü; hiçbir iş kuralı “bir telefon yalnız bir öğrenciye aittir” demiyor.

Tersi de doğru. MAT1002 tabloda tek satırda geçiyor, o satırdan `ders_kodu → ders_adi` kanıtlanamaz. Ama “her dersin tek bir adı vardır” kuralı bağımlılığı kurmaya yeter. Bağımlılığı iş kuralı kurar, satırlar yalnızca örnek.
:::

---

## Bağımlılıklardan anahtarı bulmak

| Grup | Belirlediği | Anahtar mı? |
| --- | --- | --- |
| `ogrenci_numarasi` | ad, telefon | Hayır — ders ve notu belirlemez |
| `ders_kodu` | ders adı, öğretim üyesi, adı, bölümü | Hayır — öğrenci ve notu belirlemez |
| `(ogrenci_numarasi, ders_kodu)` | dokuz sütunun hepsi | **Evet** |

**Aday anahtar:** Bütün öteki sütunları belirleyen ve küçültülemeyen sütun grubu.

::: {.notes}
Aday anahtarı daha önce satırı ayırt eden sütun olarak bulmuştuk. Bağımlılıklar aynı sonuca başka bir yoldan götürüyor. Üç grubu sınayalım.

`ogrenci_numarasi` tek başına ad soyadı ve telefonu belirliyor. Ama ders kodunu ve notu belirlemiyor, çünkü öğrenci birden çok ders alıyor. Anahtar olamaz. `ders_kodu` tek başına ders adını ve öğretim üyesi numarasını belirliyor. Öğretim üyesi numarası da adı ve bölümü belirlediği için ders kodu bunları da belirliyor. Ama öğrenciyi ve notu belirlemiyor.

Birlikte ise dokuz sütunun hepsi belli: öğrenciye bağlı iki sütunu birinci kural, derse ve öğretim üyesine bağlı dört sütunu ikinci ve üçüncü kural, notu dördüncü kural belirliyor. Böylece yedi sütun belirleniyor. Başlangıçta verdiğimiz `ogrenci_numarasi` ve `ders_kodu` da iki sütun: 7 + 2 = 9. İçinden birini çıkarınca eksik kalan oluyor. Bu çift, defterde satırı ayırt eden çift; bileşik anahtarın neden iki sütunlu olduğunu şimdi bağımlılıklarla da görüyoruz.
:::

---

## Yapay numara bağımlılıkları değiştirmez

| kayit_no | ders_kodu | ders_adi |
| --- | --- | --- |
| 1 | BLP1005 | Veritabanı Sistemleri |
| 2 | MAT1002 | Matematik II |
| 3 | BLP1005 | Veritabanı Sistemleri |
| 4 | BLP1005 | Veritabanı Sistemleri |

`kayit_no` her satırı ayırt eder. Ama `ders_kodu → ders_adi` **olduğu gibi duruyor.**

> Anahtarı değiştirmek, hangi sütunun hangisini belirlediğini değiştirmez.

::: {.notes}
Akla şu gelebilir: tabloya `kayit_no` diye yapay bir numara ekleyip satırlara 1, 2, 3, 4 verirsek anahtar tek sütun olur ve normalizasyona gerek kalmaz.

Deneyelim. `kayit_no` her satırı tek başına ayırt ediyor, anahtar oluyor. Ama `ders_kodu → ders_adi` bağımlılığı olduğu gibi duruyor ve ders adı hâlâ üç satırda yazılı. Tekrarı, anahtarın ne olduğu değil, bağımlılıkların tabloda nasıl yerleştiği belirliyor.
:::

---

## Karar soruları

1. Bir okulda her öğrencinin tek bir sınıfı ve her sınıfın tek bir danışmanı var. Hangi iki bağımlılığı yazarız?
2. "Tabloda iki satırda aynı e-posta yok, o zaman `eposta → ogrenci_numarasi` doğrudur" diyen birine ne dersiniz?
3. `ders_kodu` neden tek başına `kayit_defteri`nin aday anahtarı olamaz?

::: {.notes}
1. `ogrenci_numarasi → sinif` ve `sinif → danisman`. İkincisi kurumun ayrı bir iş kuralıdır; satırlara bakarak bulunmaz.
2. Satırlarda tekrar görünmemesi tesadüf olabilir. Bağımlılığı iş kuralı kurar: kurum her e-postanın tek bir öğrenciye ait olduğunu söylüyor mu? Söylemiyorsa iki kardeş aynı e-postayı verebilir ve bağımlılık çöker.
3. `ders_kodu` ders adını, öğretim üyesini ve onun bilgilerini belirliyor ama öğrenciyi ve notu belirlemiyor. Aynı derste birçok öğrenci var; ders kodu bilinince hangi öğrencinin hangi notu kastedildiği belli olmuyor.
:::

---

## Bu nottan kalanlar

- Tek tabloda tekrar eden bilgi **üç anomali** doğurur: güncelleme, ekleme, silme.
- Hepsinin ortak kaynağı, bir bilginin başka bir bilgiye bağlı olduğu hâlde onunla **aynı satıra** yazılmasıdır.
- **X → Y:** X'in her değeri için tek bir Y değeri vardır. Bağımlılığı **iş kuralı** kurar, satırlar yalnızca örnektir.
- **Aday anahtar** bütün sütunları belirleyen, küçültülemeyen gruptur. Yapay numara bağımlılıkları değiştirmez.

Defteri her öğrenciye tek satır ayırarak başlatırsak ders ve notları nasıl saklarız?

::: {.notes}
Tekrarın kaynağını artık iş kurallarıyla açıklayabiliyoruz. Ama kaynağı bilmek yetmiyor; defteri düzeltmek istiyoruz.

Defteri düzenlerken iki soru var: bir satır neyi anlatacak ve her bilgi hangi anahtarın yanında tutulacak?
:::
