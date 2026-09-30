---
title: "Bilgi Türleri ve Güvenliğin Üç İlkesi"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I · Hafta 2"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: today
execute:
  echo: false
---

## Güvenlik ilkeleri: gizlilik, bütünlük, erişilebilirlik

::: {.notes}
Geçen hafta iki örnekle çalıştık. Tanpınar'ın arşivinde belgenin bulunması ve kime ait olduğunun anlaşılması gerekiyordu; Mars fotoğrafında ise görüntünün doğru bağlamla Dünya'ya ulaşması. İki örneğin ortak sorusu bir kurumun günlük kayıtlarında da sorulabilir. Bu hafta o soruyu üç ayrı koşula ayıracağız ve her koşulu somut olaylarda sınayacağız.
:::

---

## Bir soru, üç ayrı koşul

**Doğru içerik, doğru bağlamla, gerektiğinde, onu kullanacak kişiye ulaşabiliyor mu?**

- Onu kullanacak kişiye (başkasına değil) → **kim görebiliyor?**
- Doğru içerik, doğru bağlam → **kayıt gerçeği doğru anlatıyor mu?**
- Gerektiğinde → **ihtiyaç anında kullanılabiliyor mu?**

::: {.notes}
Tanpınar'ın sağlam ama katalogda bulunamayan müsveddesinde ve Mars'ın eksiksiz ama yanlış tarih etiketli fotoğrafında sorunun farklı bölümlerine olumsuz yanıt veriyoruz. Birinde kayıt yerinde ama bulunamıyor, diğerinde görüntü tam ama bağlamı yanlış. Tek bir “güvenli mi?” sorusu bu farkı göstermez; o yüzden cümleyi üç parçaya ayırıp her parçaya ayrı bir soru bağlıyoruz. Bu hafta boyunca her olayda bu üç soruyu ayrı ayrı yanıtlayacağız.
:::

---

## Hangi bilgiler kapsamdadır?

**Bilgi güvenliği kapsamında değerlendirilebilecek bilgiler nelerdir?**

:::: {.columns}

::: {.column width="50%"}
- Bilgisayarda tutulan her veri
- Müşteri ve personel verisi
- İşlem verisi
- Anlaşmalar
- Arama geçmişi
- Arşiv bilgileri
:::

::: {.column width="50%"}
- Şahsi bilgiler
- Resmî belgeler
- Adli tıp verileri
- Fikrî mülkiyetler, patent
- İletişim güvenliği
:::

::::

::: {.notes}
Kaynak sunumda bu soruya verilen yanıtlar çok geniş bir alana yayılıyor (s. 14–15). Listeye bakınca iki şeyi fark ediyoruz. Birincisi, bilginin türü çok çeşitli: bir müşteri kaydı da, bir patent de, bir arama geçmişi de korunacak bilgidir. İkincisi, “bilgisayarda tutulan her veri” maddesi tür değil ortam söylüyor. Bir bilginin bilgisayarda ya da e-posta ekinde durması, onun ne tür bir bilgi olduğunu ve kimlerin görmesi gerektiğini tek başına belirtmez. Bu yüzden önce hangi bilginin söz konusu olduğunu, sonra nerede durduğunu ayrı ayrı soracağız.
:::

---

## Kayıt ve Başvuru Birimi

- 1 sorumlu + 3 başvuru görevlisi
- İlk başvuru listesinde 12 aday
- Başvuru dönemi: 1–30 Eylül
- Arşivde 40 kâğıt dosya

Görevlilerden biri arşiv dolaplarını yönetir; dış BT desteği çevrim içi formu ve paylaşılan dosya alanını işletir.

::: {.notes}
Bu hafta ve önümüzdeki haftalarda aynı kurgusal birim üzerinde çalışacağız; birimdeki sayılar ve kişiler gerçek bir kurumu temsil etmiyor. Başvuruların işlenmesi, duyuruların yayımlanması, personel belgelerinin tutulması ve eski kayıtların aranması aynı birimde farklı bilgi ihtiyaçları doğuruyor. Bir dosyanın hangi ortamda durduğunu bilmek, içindeki bilginin türünü ya da kimlerin görmesi gerektiğini söylemez; bunları ayrı sorularla belirleyeceğiz.
:::

---

## Korunan şey yalnız gizli dosya değildir

| Bilgi | Tür | Ortam | Kimler görmeli? |
|---|---|---|---|
| Başvuru formu | Aday bilgisi | Form + paylaşılan alan | Görevli, sorumlu |
| Başvuru takvimi | Tarih ve belge duyurusu | Web + pano | Herkes |
| İzin çizelgesi | İzin günü ve nedeni | İç e-posta eki | Sorumlu; çalışan kendi satırını |
| Kabul listesi taslağı | Onay bekleyen sonuç | Paylaşılan alan | Sorumlu, görevliler |

::: {.notes}
Tabloda dört bilgiyi türü, ortamı ve görmesi gereken kişilerle karşılaştırıyoruz. “Bilgisayarda” ya da “e-posta ekinde” bulunmak tür değil ortam bilgisidir; tür sütunu bilginin ne olduğunu söyler. Başvuru takvimi gizli değildir, herkes görebilir; buna rağmen korunması gerekir. Tarihi yanlış yazılırsa aday yanıltılır, sayfası açılmazsa son gün kullanılamaz. Yani yalnız gizli tutma düşüncesi bu açık bilgiyi korumaya yetmez. Bu tabloyu haftanın geri kalanında ölçüt olarak kullanacağız.
:::

---

## Bilgi güvenliği kimlerle ilgilidir?

- Bilginin sahibi
- Bilgiyi kullanan
- Bilgiyi yöneten

::: {.notes}
Kaynak sunum bilgi güvenliğinin kimlerle ilgili olduğunu üç ilişkiyle yanıtlıyor: sahip, kullanan ve yöneten (s. 16). Bunların farklı kişiler olabileceğini fark etmek önemli, çünkü bir kişinin bilgiyle kurduğu ilişki onun yetkisini belirler. Bir sonraki slayttaki başvuru formunda bu üç ilişkiye bir dördüncüsünü ekleyeceğiz: bilginin konusu olan kişi. Bu ilişki kaynakta yok; kaydın kim hakkında olduğunu, yetkiyi kimin verdiğinden ayırmak için ekliyoruz.
:::

---

## Aynı bilgi, dört farklı ilişki

**Başvuru formu**

- **Sahibi:** birim sorumlusu → amacı ve yetkiyi belirler
- **Kullananı:** başvuru görevlisi → işi için okur, günceller
- **Yöneteni:** dış BT desteği → formu ve saklama ortamını işletir
- **Konusu olan:** aday → kayıt onun hakkındadır

::: {.notes}
Aynı başvuru formu dört farklı kişiyle dört farklı ilişki kuruyor. Birim sorumlusu formun neden tutulduğuna ve kimlerin erişeceğine karar verir. Görevli formu işini yapmak için okur ve günceller. Dış BT desteği formun bulunduğu ortamı işletir, ama formu değerlendirme yetkisi ondan gelmez. Aday formun konusudur; kayıt onun hakkındadır, ancak kurumdaki yetki kararını aday vermez. Bir kişi farklı bilgiler için, hatta aynı bilgi için birden çok rol taşıyabilir.
:::

---

## Rolü kişiye değil, bilgiyle ilişkisine yazın

:::: {.columns}

::: {.column width="50%"}
**İzin çizelgesi**

- Sahibi: sorumlu
- Kullananı: sorumlu; çalışan kendi satırı için
- Yöneteni: e-posta sistemini işleten birim
- Konusu olan: çalışanlar
:::

::: {.column width="50%"}
**Eski başvuru dosyası**

- Sahibi: sorumlu
- Kullananı: gerektiğinde görevli ve denetçi
- Yöneteni: arşiv görevlisi
- Konusu olan: eski aday
:::

::::

::: {.notes}
İzin çizelgesinde sorumlu hem yetkiyi kararlaştırır hem de işi için çizelgeyi kullanır, bu yüzden iki satırda görünür; bunda bir çelişki yok, aynı kişi iki farklı ilişki kuruyor. Eski başvuru dosyasında arşiv görevlisi kâğıdı saklar, denetçi ise ihtiyaç duyduğunda içeriği kullanır. “Yetkili kişi” dediğimizde kararın kimden çıktığını ve ortamı kimin işlettiğini ayırmamız gerekir; roller bilgiyle kurulan ilişkiden çıkar, unvandan değil.
:::

---

## Hizmet talep kaydı: dört rolü yazın

**Veri:** “Adayın talebi, başvuru görevlisinin yanıt tarihi ve yanıtı” bir talep tablosunda tutuluyor.

- Sahibi: ?
- Kullananı: ?
- Yöneteni: ?
- Konusu olan: ?

::: {.notes}
Tablo paylaşılan alanda tutuluyorsa roller, bilgiyle kurdukları fiili ilişkiye göre yazılır. Ortamı kimin işlettiği belirtilmemişse bu belirsizliği cevapta açık bırakmak doğru bir yaklaşımdır; bilinmeyen bir şeyi bilinen gibi yazmıyoruz.
:::

---

## Hizmet talep kaydı: gerekçeli eşleme

- Sahibi: birim sorumlusu
- Kullananı: başvuru görevlileri
- Yöneteni: paylaşılan alansa dış BT desteği
- Konusu olan: talepte bulunan aday

::: {.notes}
Sorumlu kaydın hangi iş için tutulacağına ve kimlerin kullanacağına karar verir. Görevliler talebi okur ve yanıtı işler. Tablo birimin kendi bilgisayarında tutuluyorsa “yöneteni birim” cevabı da gerekçesiyle geçerlidir. Adayın kaydın konusu olması, talep tablosunu işletme sorumluluğu taşıdığı anlamına gelmez.
:::

---

## Üç temel ilke

- **Gizlilik (confidentiality):** bilginin yalnız yetkili kişilerce ulaşılabilir olması
- **Bütünlük (integrity):** bilginin kaynaktan çıktığı hâliyle, değişmeden korunması
- **Erişilebilirlik (availability):** ihtiyaç hâlinde bilgiye ulaşabilme

Kayıt tutma, kimlik tespiti, güvenilirlik ve inkâr edememe bu üç ilkeyi destekler.

::: {.notes}
Kaynak sunum bu üçlüyü ana ilkeler olarak veriyor (s. 17). Aynı sunumun bir sonraki slaytında kayıt tutma, kimlik tespiti, güvenilirlik ve inkâr edememe de sayılıyor; bunlar üç ana ilkeyi destekleyen ilkeler olarak sunuluyor (s. 18). Erişim yönetimi konularına geldiğimizde bu destekleyici ilkelere geri döneceğiz. Bugün ana üçlüye odaklanıyoruz. Her tanımın başındaki ölçüte dikkat edelim: gizlilik yetkiyle, bütünlük gerçeğe uygunlukla, erişilebilirlik ise ihtiyaç anıyla ilgilidir.
:::

---

## Üç koşulun adı

- Görmemesi gereken biri gördü mü? → **Gizlilik**
- İçerik, değişiklik ve bağlam doğru mu? → **Bütünlük**
- Yetkili kişi gerektiğinde kullanabildi mi? → **Erişilebilirlik**

**G + B + E = CIA** (İngilizce baş harfleri)

::: {.notes}
Yukarıdaki üç tanımı bir olaya uygulanabilir sorulara çeviriyoruz. Aynı bilgiye üç soru birlikte yöneltilir, ancak birinin cevabı diğerlerinin cevabını vermez. İçeriği doğru olan bir kayıt yetkisiz kişilere açılmış olabilir; yetkili herkesin gördüğü bir kayıt yanlış olabilir; hem doğru hem gizli bir kayıt ihtiyaç anında açılmıyor olabilir. Her soruda kişinin yetkisini, bilginin gerçeğe uygunluğunu ve kullanım anını somut olaydan çıkarıyoruz. CIA kısaltması İngilizce adların baş harfleridir; biz Türkçe adları kullanmaya devam edeceğiz.
:::

---

## Gizlilik ihlali örnekleri

:::: {.columns}

::: {.column width="50%"}
- Kayıtların ve bilgilerin çalınması
- Mesajların okunması
- Şirket bilgilerinin sızdırılması
- Şirket içi bilgi sızması
:::

::: {.column width="50%"}
- Kişisel verilerin paylaşımı
- Şifrelenmiş verilerin şifrelerinin kırılması
- Ağ trafiğinin izlenmesi
- Fotoğraf veya belgelerde meta data paylaşılması
:::

::::

::: {.notes}
Kaynak sunum gizlilik ihlali için uzun bir örnek listesi veriyor (s. 21–22); slaytta bunlardan sekizini gösteriyoruz, geri kalanı buradan tamamlayabiliriz: rıza olmadan bilgisayarın incelenmesi, web scraping, sözleşmelerin paylaşılması, fikrî mülkiyetlerin ele geçirilmesi, toplantı tutanaklarına ulaşılması, telefon veya ortam dinlemesi ve konum servisine erişilmesi. Hepsinde ortak olan, bilginin yetkisi olmayan birine ulaşması; yollar ise çok farklı: çalma, okuma, sızdırma, izinsiz inceleme, dinleme. Şirket içi sızma da listede duruyor, çünkü gizlilik yalnız dışarıdan gelen saldırıyla bozulmaz. Şifrelenmiş verinin şifresinin kırılması, şifrelemenin gizliliği koruyan bir önlem olduğunu ama tek başına garanti vermediğini gösterir. Ağ trafiğini izlemek ya da ortamı dinlemek bilgiyi hiç değiştirmeden gizliliği bozar; bu yüzden fark edilmesi zordur. Fotoğrafın veya belgenin meta datası görünen içerikle birlikte paylaşılan gizli bilgidir: çekim yeri, yazar adı ya da düzenleme geçmişi gibi. Web scraping her zaman ihlal değildir; herkese açık bir sayfadan veri toplamak ile erişim kurallarını ya da verilen izni aşarak toplamak aynı şey değildir.
:::

---

## Gizlilik: görme hakkı kime ait?

**Bilgiyi yalnız görmeye veya öğrenmeye yetkili kişiler görebilir.**

- Açık web duyurusunu aday okudu → **yetkili görme**
- Onaysız aday listesini dış kişi açtı → **yetkisiz görme**
- Dış kişi açık ekrana bakabilecek yerdeydi → **görme olası; gördüğü bilinmiyor**

::: {.notes}
Gizlilik bir parola ya da etiket adı değildir; içeriğin kimlere açıldığına ilişkin bir koşuldur. Açık duyuru için herkes yetkili olabilir, fakat duyuruyla aynı dosyada yanlışlıkla kalmış aday telefonları için bu geçerli değildir. Üçüncü satırda görme imkânı var ama görmenin gerçekleştiği bilinmiyor; imkân ile gerçekleşmiş görme ayrı olgulardır ve olay metni yalnız imkânı gösteriyorsa görmenin gerçekleştiğini yazamayız. Kasıt da gerekmez: yanlış adrese gönderme aynı koşulu bozabilir. Kaynak sunum bu örneği erişilebilirlik başlığında anar (s. 26); biz burada bilginin yetkisiz kişiye ulaşması yönünden, yani görme açısından ele alıyoruz. Bir olay birden çok ilkeyi aynı anda etkileyebilir.
:::

---

## Bütünlük ihlali örnekleri

:::: {.columns}

::: {.column width="50%"}
- Veri tabanında değişiklik
- Sitedeki bilgilerin saldırı sonucu değiştirilmesi
- Kurum içinden birinin bilgileri değiştirmesi
- Verilerin silinmesi
:::

::: {.column width="50%"}
- Evrak dolabının olduğu odada su baskını
- Sunucuda yüklü bir programın verileri bozması (fidye saldırısı)
- Hatalı veri girişleri yapılması
- Belleklerin bozulması
:::

::::

::: {.notes}
Kaynak sunumdaki bütünlük listesinden (s. 23–24) sekiz örnek gösteriyoruz; diğerleri metadataların değiştirilmesi, sunucunun zarar görmesi, kurum sunucusunda saldırı sonucu bilgilerin değiştirilmesi, verilerin manipülasyonu ya da bozulması ve afet sonucu verilerin zarar görmesidir. Örneklerin çoğu kasıtlı bir saldırı değildir: su baskını, afet, bellek bozulması, donanımın zarar görmesi ve hatalı veri girişi de içeriği bozar. Yetkili bir görevlinin yanlış veri girmesi bile bütünlüğü bozar; yetkili olmak doğru kayıt tutmayı garanti etmez. Silme örneği ilginç bir sınır durumudur: silinen veri hem içeriğin eksilmesi hem de artık kullanılamaması anlamına gelebilir. Bir örneğin hangi ilkeye girdiğini adından değil, olayın olgularından çıkarırız; bu hafta yapacağımız çalışma tam olarak bu. Evrak dolabının bulunduğu odadaki su baskını birazdan çalışacağımız arşiv odası olayının kaynağıdır. Fidye saldırısı bu listede bütünlük örneği, erişilebilirlik listesinde ise erişilebilirlik örneği olarak geçer; aynı olay birden çok ilkeyi farklı olgularla bozabilir ve bunu Kart D'de göreceğiz.
:::

---

## Bütünlük: değişiklik her zaman bozulma mı?

**Başvuru telefon kaydı**

- Aday yeni numarasını bildirdi; görevli doğru girdi → **korunur**
- Görevli başka adayın numarasını girdi → **bozulur**
- Doğru belge yanlış aday dosyasına eklendi → **bozulur: bağlam yanlış**

::: {.notes}
Kaynak bütünlüğü “kaynaktan çıktığı hâliyle değişmeden” diye tanımlıyor (s. 17). Bu tanım tek başına yeterli değil: aday numarasını değiştirmiş olabilir ve eski numarayı olduğu gibi bırakmak güncel kişiyi yanlış anlatır. Yani değişiklik her zaman bozulma demek değildir; yetkili ve doğru bir değişiklik bütünlüğü korur. Bütünlük; doğru ve eksiksiz içerik, yetkili ve doğru değişiklik, doğru kişi, doğru tarih ve doğru kaynak bağlamının korunmasıdır. Yetkili görevlinin yanlış veri girmesi de bütünlüğü bozar (s. 24).
:::

---

## Bütünlük: sayı doğru, bağlam yanlış

| Kayıt | Sayı / içerik | Bağlam | Sonuç |
|---|---|---|---|
| Laboratuvar sonucu | Doğru | Yanlış hasta | Yanlış bilgi |
| Mars görüntüsü | Pikseller doğru | Yanlış görev/tarih | Yanlış bilgi |
| Başvuru belgesi | Belge doğru | Yanlış aday | Yanlış bilgi |

::: {.notes}
Bir kaydın temsil ettiği şey, yalnız görünen sayıdan ya da pikselden oluşmaz. O sonucun kime veya ne zamana ait olduğu yanlışsa kullanıcı gerçeği yanlış çıkarır. Yetkisiz değişiklik olmasa bile yanlış ilişkilendirme bütünlük sorunudur. Bu yüzden katalog numarası ve kaynak bilgisi de korunacak bilgi parçalarıdır; geçen haftaki laboratuvar sonucu ve Mars görüntüsü örneklerinin arşiv ve başvuru dünyasındaki karşılığı budur.
:::

---

## Erişilebilirlik ihlali örnekleri

:::: {.columns}

::: {.column width="50%"}
- Uzaktan erişimin tanımlanmaması
- Kullanıcı hesabının gerekli veriye ulaşım izni sağlamaması
- Fidye yazılımları
- Hesabın bloklanması
:::

::: {.column width="50%"}
- Parolayı unutmak
- Önemli bir evrağın yanlışlıkla başka bir yere aktarılması
- Kasa anahtarının kaybolması
:::

::::

::: {.notes}
Bu listedeki örneklerin çoğu saldırı değil, gündelik olaylar: parolayı unutmak, anahtarı kaybetmek, hesabın bloklanması, uzaktan erişimin tanımlanmamış olması. Ortak ölçüt, yetkili kişinin ihtiyaç anında bilgiye ulaşamamasıdır. Parola ve kasa anahtarı gizliliği sağlayan önlemlerdir; kaybolduklarında yetkili kullanıcıyı da dışarıda bırakırlar. Evrağın yanlışlıkla başka bir yere aktarılması da ihtiyaç duyan kişiye ulaşamadığı için erişilebilirlik örneği sayılır; evrak yetkisiz birine ulaştıysa ayrıca gizlilik de söz konusu olur (s. 26).
:::

---

## Erişilebilirlik: var olması yetmez

**Yetkili kişi, ihtiyaç anında bilgiyi kullanılabilir biçimde alabilmelidir.**

- Anahtarı olmayan yetkili denetçi, sağlam dosyayı açamıyor → **engelli**
- Son başvuru günü form 3 saat açılmıyor → **engelli**
- Dosya açılıyor; gereken sayfa okunmuyor → **o sayfa kullanılamıyor**

::: {.notes}
Kaynak erişilebilirliği “ihtiyaç halinde bilgiye ulaşabilme” diye tanımlıyor (s. 17). Buradaki “ihtiyaç” yetkili kişinin işiyle ve zamanla birlikte değerlendirilir. Gece yapılan kısa bir bakım ile son başvuru günü mesai saatinde oluşan bir kesinti aynı sonucu doğurmaz. Dolap anahtarının kaybolması saldırı olmasa da erişimi keser (s. 26). Herkese açmak da erişilebilirliğin tanımı değildir; erişilebilirlik yetkili kişinin kullanabilmesiyle ilgilidir.
:::

---

## İlke ve sonuç ayrı kayıtlardır

**Olay:** Başvuru tarihi yanlış yazıldığı için iki adayın başvurusu reddedildi. Liste açık ve kullanılıyor.

- Bilgiye ne oldu? Tarih gerçeği yanlış anlatıyor → **bütünlük**
- Kişiye ne oldu? Başvurular reddedildi → **sonuç**

::: {.notes}
Başvurunun reddedilmesi bir hizmet sonucudur; kaydın erişilemediğini kanıtlamaz. Liste işlem boyunca açılmış ve kullanılmıştır, ancak yanlış bilgi üretmiştir. Erişilebilirlik işaretini, yetkili kişinin bilgi ya da hizmeti ihtiyaç anında kullanamadığını gösteren ayrı bir olgu varsa koyarız. Buradaki olgu yalnız yanlış tarihtir; aday açısından ağır bir sonuca yol açması ilkeyi değiştirmez.
:::

---

## Bir olay için üç ayrı hüküm

- Olay metni bozulan koşulu açıkça gösteriyor → **Olgu**
- Bozulma mümkün, gerçekleştiği bilinmiyor → **Olası** + bilinmeyen şey
- Bozulmaya dair veri yok → **Yok**

**Gerekçe = ilke + bozulan koşul + olay olgusu**

::: {.notes}
Örneğin koridorda açık duran bir dosyaya dışarıdan birinin bakmış olması mümkün olabilir. Birinin baktığı olay metninde yazmıyorsa bunu gerçekleşmiş gibi yazamayız; buna karşılık dosyanın görülebilir durumda olması bir olgudur. Her ilkeye ayrı kanıt gerekir. Olayın ağır olması üç ilkenin de bozulduğunu göstermez. Saldırı, hata, arıza ve doğal olay aynı sorularla incelenir; hüküm olayın adına ya da kasıtlı olup olmamasına göre değil, gösterdiği olguya göre verilir.
:::

---

## Aynı kilit iki koşulu etkiler

**Yetkisiz görmeyi sınırlandıran kilit → anahtar kaybolursa yetkili kullanım da kesilir.**

- Dolap kilitli; dışarıdan biri belgeyi göremiyor → **gizlilik korunuyor**
- Tek anahtar kayıp; denetçi dosyayı alamıyor → **erişilebilirlik bozuluyor**

::: {.notes}
Kilit tek başına bir güvenlik hükmü değildir. Aynı düzenek görme sınırını sağlarken yetkili erişimin zamanında gerçekleşmesini de engelleyebilir. Kaynaktaki kasa anahtarı örneği (s. 26) ilkelerin birbirinden bağımsız sorulması gerektiğini gösterir. Buradan bir önlem tasarımı çıkarmıyoruz; yalnızca aynı olayda iki ilkenin farklı yönde etkilenebildiğini görüyoruz.
:::

---

## Tanpınar: dört olay, dört gerekçe

| Olay | G | B | E |
|---|:---:|:---:|:---:|
| Metin değiştirilip yazara atfedildi | Yok | **Olgu** | Yok |
| Belge başka evrakla karıştı, bulunamıyor | Yok | **Olgu** | **Olgu** |
| Taslak izinsiz yayımlandı | **Olgu** | Olası | Yok |
| Aidiyeti gösteren kayıt kayboldu | Yok | **Olgu** | Yok |

**Olası:** yayımlanan metnin değiştirilip değiştirilmediği olayda yok. Kaynak: BGT 201 ders sunumu 1, s. 19–20.

::: {.notes}
İlk satırda yetkisiz değişiklik, metnin Tanpınar'ın düşüncesini yanlış temsil etmesine yol açıyor; bütünlük bozulmuş. Karışan belge hem bulunamıyor hem de hangi metne ait olduğu bilgisini kaybediyor; iki işaret ayrı olgulara dayanır. İzinsiz yayım yetkisiz kişilere içerik açar, gizlilik bozulur. Yayımlanan metin ayrıca değiştirilmişse bütünlük de bozulur, ama verilen olay bunu söylemiyor, bu yüzden bütünlüğe “olası” yazdık. Son satırda yalnız “ona ait değil” iddiası belgeyi değiştirmez; sorun, aidiyeti değerlendirmeye yarayan kayıt gerçekten kaybolduğunda doğar.
:::

---

## Tanpınar: diğer satırları eşleyin

| Olay | G | B | E |
|---|:---:|:---:|:---:|
| Nüsha zarar gördü; bazı satırlar okunamıyor | ? | ? | ? |
| Belge arşivden çalındı | ? | ? | ? |
| Müsvedde hiç bulunamadı | ? | ? | ? |
| Yazı okunamaz hâle geldi | ? | ? | ? |
| Osmanlıca metni okuyacak beceri yok | ? | ? | ? |

Her işaret için metindeki olguyu yazın. Kaynak: BGT 201 ders sunumu 1, s. 19–20.

::: {.notes}
Beş satırın her biri farklı bir olgu: zarar, çalınma, bulunamama, okunamama ve okuyucunun becerisi. Belgenin fiziksel varlığı, içeriği, bulunabilirliği ve okuyucunun yeterliği ayrı ayrı incelenir. Çözüm şöyledir. Nüsha zarar görmüş ve bazı satırlar okunamıyorsa içerik eksilmiştir (bütünlük) ve gerektiğinde kullanılamaz (erişilebilirlik); zarar okunabilirliği etkilemeseydi yalnız bütünlük için olgu olurdu; gizlilik için olgu yok. Çalınan belge arşivin kullanımından çıkar, dolayısıyla erişilebilirlik bozulur; hırsızın içeriği okuduğu biliniyorsa gizlilik de olguya dönüşür, aksi hâlde olası kalır. Bulunamayan müsvedde erişilemezdir; başka evrakla karıştığı ya da aidiyet bilgisini kaybettiği verilmişse bütünlük de olguya dönüşür, verilmediği için burada olası. Yazı okunamaz hâle gelmişse içerik eksilmiş ve kullanılamaz durumdadır, yani bütünlük ve erişilebilirlik birlikte bozulur. Son satırda belge sağlam ve yerinde; eksik olan okuyucunun edinilmiş bilgisidir. Bu bir korumanın bozulması değildir, bu yüzden üç ilkede de “yok” yazarız.
:::

---

## Mars: iletimde üç farklı durum

| Durum | G | B | E |
|---|:---:|:---:|:---:|
| Sinyal Dünya'ya ulaşmadı | Yok | Yok | **Olgu** |
| Yalnız ilk parça alındı | Yok | **Olgu** | **Olgu** |
| Görüntü doğru, görev/tarih etiketi yanlış | Yok | **Olgu** | Yok |

[Görüntü: NASA/JPL, PIA00381](https://science.nasa.gov/photojournal/first-photograph-taken-on-mars-surface/)

::: {.notes}
İlk durumda Dünya'daki ekip gözlemi ihtiyaç duyduğu anda kullanamıyor; erişilebilirlik bozulmuş. İkinci durumda alınan veri gönderilenle aynı değil, yani bütünlük bozulmuş; eksik kısım da kullanılamıyor, dolayısıyla erişilebilirlik de. Üçüncü durumda pikseller doğru olsa bile kaynak ve zaman yanlış olduğu için yorum yanlış yönleniyor; bu bir bağlam sorunu ve bütünlüğe girer. Üç durumda da yetkisiz birinin görüntüyü gördüğüne dair bir olgu yok. Kanal gürültüsü ya da kesilmesi kasıtlı bir müdahale değildir; yine de iletimde bütünlük veya erişilebilirlik bozulabilir. Doğru bir iletim de görme yetkisini tek başına doğrulamaz.
:::

---

## Aynı iki örnek, ortak sorular

| Korunacak ilişki | Tanpınar evrakı | Mars fotoğrafı |
|---|---|---|
| İçerik | Metin ve fiziksel sayfa | Sinyalden kurulan görüntü |
| Bağlam | Yazar, tarih, taslak sırası | Görev ve çekim tarihi |
| Kullanım | Belgeyi bulup okuyabilme | Görüntünün Dünya'ya ulaşması |

**Hangi satırda G, B veya E bozulabilir?**

::: {.notes}
Tanpınar'da metin değişirse bütünlük, sayfa yıpranıp okunmazsa bütünlük ve erişilebilirlik birlikte etkilenir. Mars'ta bozulmuş bir sinyal bütünlük, hiç ulaşmayan bir sinyal erişilebilirlik sorunudur. Her iki örnekte de yanlış bağlam bütünlüğü etkiler. Gizlilik ancak ayrıca yetkisiz görme ya da izinsiz yayım olgusu varsa yazılır; “korunacak bilgi” ile “gizli bilgi” aynı küme değildir.
:::

---

## Olay kaydı: hükmü kanıta bağlayın

- **Bilgi:** dosyanın adı değil, etkilenen bilgi
- **Olgu:** kesin olarak bilinen olay
- **G / B / E:** her biri için olgu, olası veya yok
- **Gerekçe:** ilke + bozulan koşul + olgu
- **Sonuç:** kişiye veya kuruma etkisi
- **Olası etki:** bilinmeyen etki ve eksik bilgi

::: {.notes}
Bir olay kaydı yazarken önce hangi bilginin etkilendiğini belirleriz. Tek bir PDF hem herkese açık duyuruyu hem de özel aday listesini taşıyabilir; dosya adı hangi bilginin etkilendiğini söylemez. Olgu bölümüne yalnız kesin bilineni yazarız: “27 indirme” gibi bir sayı doğrudan “27 kişi okudu” anlamına gelmez. Sonuç sütunu ilke sütununun başka sözcüklerle tekrarı değildir; yapılan işte ya da ilgili kişide ne olduğunu belirtir. Bilinmeyenleri de kayda geçiririz, çünkü sonraki adımda neyin araştırılacağını onlar belirler.
:::

---

## Kart A — Duyurunun ikinci sayfası

:::: {.columns}

::: {.column width="50%"}
**Kurgusal olay**

- 10.00: Görevli takvim PDF'sini açık web sitesine yükledi.
- Eski taslaktan kalan ikinci sayfada **12 adayın adı, soyadı ve telefonu** vardı.
- 13.00: Bir aday arayıp listeyi gördüğünü bildirdi.
- 13.10: Dosya kaldırıldı; sayaç **27 indirme** gösteriyor.
:::

::: {.column width="50%"}
**Soru:** Etkilenen bilgi hangisi? G / B / E için olgu, olası veya yok yazın.

Kaynak uyarlaması: BGT 201 ders sunumu 1, s. 22.
:::

::::

::: {.notes}
PDF'nin birinci sayfasındaki takvim herkese açıktır; ikinci sayfadaki aday iletişim bilgileri değildir, etkilenen bilgi de bu ikinci sayfadır. Dosya 3 saat 10 dakika açıkta kalmıştır. Çözüm olarak önce gizliliğe bakıyoruz: listeyi görme yetkisi olmayan kişiler dosyaya erişebildi ve bir aday gördüğünü bildirdi, dolayısıyla gizlilik için olgu var ve 12 adayın iletişim bilgisi birim dışına açılmıştır. Aday adlarının ya da telefonların yanlış olduğuna ilişkin bir olgu yok, bu yüzden bütünlükte “yok”; duyuru da birimde kullanılabilir durumda, bu yüzden erişilebilirlikte de “yok”. Kesin olan, en az bir adayın listeyi gördüğüdür. Bilinmeyen, 27 indirmeyi kaç kişinin yaptığı ve kaçının ikinci sayfayı okuduğudur: bir kişi dosyayı birden çok kez indirmiş olabilir, indiren biri ikinci sayfayı hiç açmamış olabilir. Kasıt olmaması, gerçekleşen yetkisiz açılmayı ortadan kaldırmaz.
:::

---

## Kart B — Toplu tarih düzeltmesi

:::: {.columns}

::: {.column width="50%"}
**Kurgusal olay**

- Sorumlu, 12 başvurunun tarih biçimini düzeltme işini görevliye verdi.
- Görevli **2 adayın 14.09 tarihini 14.10** olarak kaydetti.
- Son tarih **30 Eylül** olduğundan liste bu iki başvuruyu geç saydı.
- Hata, itiraz üzerine **3 gün sonra** bulundu; liste bu sürede açıktı ve kullanıldı.
:::

::: {.column width="50%"}
**Soru:** Bilgideki bozulma ile adaylara olan sonucu ayırın.

Kaynak uyarlaması: BGT 201 ders sunumu 1, s. 23–24.
:::

::::

::: {.notes}
İşlem için görev verilmiş olması, kaydedilen değerin doğru olduğunu garanti etmez. Etkilenen bilgi iki adayın başvuru tarihidir. Çözüm olarak bütünlüğe bakıyoruz: yetkili görevli gerçekte 14.09 olan tarihi 14.10 kaydetti, kayıt adayın gerçek başvuru gününü yanlış gösteriyor. Bu, yetkili ama hatalı bir değişikliktir ve bütünlük için olgudur. Gizlilik için yetkisiz görme olgusu yok. Erişilebilirlik de bozulmadı, çünkü liste açılıp kullanıldı ve otomatik işaretleme çalıştı. Adayların başvurusunun üç gün geçersiz sayılması ciddi bir sonuçtur, ama kullanılan bilgiye erişilememesinden değil, yanlış bilgiye dayanılmasından doğmuştur. Bilgideki bozulma (bütünlük) ile adaylara olan sonucu (başvurunun geçersiz sayılması) bu yüzden ayrı yazarız.
:::

---

## Kart C — Arşiv odasında su

:::: {.columns}

::: {.column width="50%"}
**Kurgusal olay**

- 40 kâğıt dosyadan **9'u ıslandı**; bunların **3'ünde imza ve tarih okunmuyor**.
- Oda **2 gün kapalı** kaldı; planlanan **6 belge kontrolü** yapılamadı.
- Islanan 9 dosya kuruması için **4 saat koridordaki açık masalarda** kaldı.
- Koridordan birim dışı kişiler de geçiyor.
:::

::: {.column width="50%"}
**Soru:** G / B / E'yi ayrı işaretleyin; 3, 6, 9 ve 40 sayılarının neyi anlattığını koruyun.

Kaynak uyarlaması: BGT 201 ders sunumu 1, s. 24, 26.
:::

::::

::: {.notes}
Islanan 9 dosyanın 3'ünde imza ve tarih okunmuyor, diğer 6'sı okunabiliyor; kalan 31 dosya etkilenmemiştir. Koridor bilgisi birinin içeriği okuduğunu söylemez, yalnızca dosyaların görülebilir olduğunu gösterir. Çözüm şöyle: gizlilik için “olası”, çünkü dosyalar dört saat açıkta kaldı ama okuyan kişi bilinmiyor. Bütünlük için “olgu”, çünkü üç dosyada imza ve tarih okunmuyor, yani içerik eksilmiş. Erişilebilirlik için “olgu”, çünkü oda iki gün kapalı kaldı ve planlanan altı belge kontrolü yapılamadı; yetkili kontrol gerektiği zamanda yapılamamıştır. Sonuç olarak altı işlem gecikti ve üç dosyanın imza ve tarih kanıtı zayıfladı. “40 dosyanın hepsi bozuldu” demek yanlıştır: 9 dosya ıslanmış, bunların 3'ünde okuma kaybı vardır, 31 dosya etkilenmemiştir. Su baskınının kasıtlı olmaması ilke hükmünü değiştirmez.
:::

---

## Beş kurum olayı

Her olay için: **bilgi ve roller → G/B/E → dayanak olgu → sonuç**.

- Bilgiyi ve dört ilişkiyi (sahip, kullanan, yöneten, konusu olan) yazın.
- G, B ve E için olgu, olası veya yok işaretleyin.
- Her olgu işaretinin dayandığı olay cümlesini gösterin.
- Kişinin veya birim işinin nasıl etkilendiğini yazın.

::: {.notes}
Bu son çalışmada beş olayı aynı düzende değerlendireceğiz. Roller bilgiyle kurulan ilişkiye göre seçilir; bilginin konusu olan kişiyi otomatik olarak sahip yazmak doğru olmaz. G/B/E sütununda her ilke için olgu, olası ya da yok yazılır. Olgu işaretinin dayandığı olay cümlesi gerekçede görünmelidir; olası işaretinde eksik olan bilgi belirtilmelidir. Sonuç sütunu, kişinin ya da birim işinin gördüğü etkiyi belirtir.
:::

---

## Olay 1 — Son gün kesintisi

:::: {.columns}

::: {.column width="50%"}
**30 Eylül 10.00–13.40**

- Çevrim içi başvuru formu açılmadı.
- Dış BT desteği sunucu güncellemesini bu saate planladı; birime haber vermedi.
- **18 aday** telefonla aradı; **7'si** formu 13.40'tan sonra gönderdi.
- Diğer **11 adayın** sonradan başvurup başvurmadığı bilinmiyor.
:::

::: {.column width="50%"}
**Soru:** Hangi bilgi veya hizmet, kimin için hangi anda kullanılamadı?
:::

::::

::: {.notes}
Formun hiç açılmadığı aralık 3 saat 40 dakikadır ve son başvuru gününe denk gelir. Bilgi, başvuru formu ve hizmetidir. Sahibi birim sorumludur; formu kullananlar adaylar ve görevlilerdir; yöneteni dış BT desteğidir; formun konusu ise adaydır. Dış BT ortamı yönetir, ama başvuru amacına ve yetkisine sorumlu karar verir. Erişilebilirlik bozulmuştur, çünkü yetkili kullanıcılar son başvuru gününde formu 3 saat 40 dakika kullanamamıştır. Kesinti planlı ve kasıtsız olsa da tam ihtiyaç anına denk gelmiştir. Verinin değiştiği ya da yetkisiz birine açıldığı verilmediği için gizlilik ve bütünlükte “yok” yazarız. Dış BT'nin birime haber vermemesi sahip ile yöneten arasındaki bir koordinasyon olgusudur. Sonuç olarak 18 aday aramış, 7'si formu geç göndermiştir; kalan 11 adayın sonucu bilinmiyor ve arayan 18 kişinin tümünün başvuruyu kaçırdığını söylemek kanıtı aşar.
:::

---

## Olay 2 — Benzer adres

:::: {.columns}

::: {.column width="50%"}
- Birim sorumlusu, **4 çalışanın izin günlerini ve nedenlerini** içeren çizelgeyi iç adres yerine benzer adlı dış adrese gönderdi.
- Bir satırda **“sağlık raporu”** yazıyor.
- Alıcı ertesi gün “Yanlışlıkla bana geldi, **açtım, sildim**” diye yanıt verdi.
- Birimdeki özgün çizelge değişmedi.
:::

::: {.column width="50%"}
**Soru:** Açma, silme ve özgün çizelgenin durumunu ayrı değerlendirin.
:::

::::

::: {.notes}
Bilgi izin çizelgesidir. Sahibi ve kullananı sorumludur; yöneteni e-posta sistemini işleten birimdir; konusu olan dört çalışandır. Alıcı kendi beyanına göre eki açmıştır, dolayısıyla gizlilik için olgu vardır: çizelgeyi görme yetkisi olmayan biri izin nedenlerini görmüştür. Burada gerçekleşmiş görme ile olası görme ayrımı nettir. Sonradan silme, daha önceki görmeyi geri almaz; silmenin gerçekten yapılıp yapılmadığı da bilinmiyor. Birimdeki özgün çizelgenin içeriği ve kullanılabilirliği değişmediği için bütünlük ve erişilebilirlik için işaret koymuyoruz. Bir satırın sağlık raporunu içermesi, sonucun ilgili çalışan için neden daha ağır olabileceğini gösterir; ama bu bir ilke hükmü değil, bir etki değerlendirmesidir.
:::

---

## Olay 3 — Eksik ek

:::: {.columns}

::: {.column width="50%"}
- Aday **3 sayfalık diploma belgesi** yükledi.
- Görevli sistemde dosyayı açınca **yalnız 2 sayfa** gördü ve başvuruyu “belge eksik” diye bekletti.
- Aday, kendi bilgisayarındaki yüklediği dosyanın **3 sayfa** olduğunu gösterdi.
:::

::: {.column width="50%"}
**Soru:** Eksik üçüncü sayfa, bilgiye ve işleme ne yaptı?
:::

::::

::: {.notes}
Bilgi diploma belgesidir. Sahibi sorumlu, kullananı görevli, yöneteni dış BT, konusu olan ise adaydır. Sistemdeki kopya, adayın gönderdiğini gösterdiği dosyayla aynı değildir; bu bütünlük bozulmasıdır. Görevli işlem için gereken üçüncü sayfayı kullanamadığı ve başvuruyu bu yüzden beklettiği için erişilebilirlik de olgudur; yalnız bütünlüğü işaretleyip eksilmeyi doğru açıklayan bir cevap da savunulabilir. Gizlilik için yetkisiz görme olgusu yok. Başvurunun bekletilmesi adayın işine yansıyan sonuçtur. Bu durum Mars'ta yalnız ilk parçanın alınmasına benzer: eksik kayıt tam sanılırsa ayrıca yanlış yorum oluşur.
:::

---

## Olay 4 — Yanlış klasör

:::: {.columns}

::: {.column width="50%"}
- Bir personel dosyası geçen ay **yanlış klasör numarasıyla** dolaba kaldırıldı.
- **Katalog kaydı da bu yanlış numarayı** gösteriyor.
- Dış denetçi dosyayı istedi; dosya **2 gün bulunamadı**.
- Bulunduğunda **dosya eksiksizdi**.
:::

::: {.column width="50%"}
**Soru:** Dosya ile katalog kaydını iki ayrı bilgi olarak değerlendirin.
:::

::::

::: {.notes}
Burada iki ayrı bilgi var: personel dosyası ve katalog kaydı. Sahibi sorumlu, kullananı denetçi, yöneteni arşiv görevlisi, konusu olan personeldir. Katalog, dosyanın nerede olduğuna dair bir bilgidir ve gerçeğe uymayan klasör numarasını gösterdiği için katalog bilgisinin bütünlüğü bozulmuştur. Yetkili denetçi dosyayı iki gün bulamadığı için dosyanın erişilebilirliği bozulmuştur. Dosyanın içeriği eksiksizdir; “dosyanın bütünlüğü bozuldu” demek verilen olguyla çelişir. Yalnız erişilebilirliği işaretlemek de katalogdaki yanlış yer bilgisini gözden kaçırır. Yetkisiz görme olgusu yok. Bu, geçen haftaki “arşivde var ama bulunamıyor” ayrımının kurumdaki karşılığıdır; sonuç olarak denetim iki gün gecikmiştir.
:::

---

## Olay 5 — Onaysız liste

:::: {.columns}

::: {.column width="50%"}
- Görevli, kabul listesi taslağını sorumlu onaylamadan birimin sosyal medya hesabında **“taslak”** notuyla paylaştı.
- Listede **bir aday yanlış bölümle** yazılıydı.
- Paylaşım **50 dakika** sonra kaldırıldı; bu sürede **140 kez görüntülendi**.
:::

::: {.column width="50%"}
**Soru:** Onay durumu ve yanlış bölüm bilgisini ayrı olgularla gerekçelendirin.
:::

::::

::: {.notes}
Bilgi kabul listesi taslağıdır. Sahibi sorumlu, kullananı görevli, yöneteni sosyal medya hesabını işleten birim, konusu olan adaylardır. Taslağın yayımlanma kararını sorumlu verir; “taslak” ibaresi onay yerine geçmez. Onay verilmeden dışarı açıldığı için gizlilik bozulmuştur. Listede bir adayın bölümü yanlış yazılmıştı; yanlış bilgi zaten taslakta vardı ve yayım onu dışarıya da taşıdı. Bu, bütünlüğün bozulduğunu gösteren ayrı bir olgudur. İki ilke aynı olayda iki farklı olguya dayanıyor. Erişilebilirlik için bir olgu yok. Paylaşımın 140 kez görüntülenmesi 140 ayrı kişinin gördüğünü kanıtlamaz, çünkü aynı kişi birden çok görüntülemiş olabilir. Sonuç olarak onaysız ve yanlış bir sonuç duyurulmuştur.
:::

---

## Kart D — Açılmayan klasör

:::: {.columns}

::: {.column width="50%"}
**Kurgusal olay**

- Paylaşılan başvuru dosyaları açılmıyor; adlarına tanımsız uzantı eklenmiş ve klasörde ödeme isteyen metin var.
- Dış BT, klasörü önceki günün kopyasından geri getirdi.
- O sabah girilen **5 kayıt** kopyada yok; yeniden girilecek.
- Verinin dışarı kopyalanıp kopyalanmadığı bilinmiyor.
:::

::: {.column width="50%"}
**Soru:** Etkilenen bilgi hangisi? G / B / E için olgu, olası veya yok yazın.

Kaynak uyarlaması: BGT 201 ders sunumu 1, s. 24, 26.
:::

::::

::: {.notes}
Kaynak sunumda fidye yazılımı hem bütünlük hem erişilebilirlik örneği olarak geçer (s. 24 ve 26); aynı olay iki ilkeyi ayrı olgularla bozabilir. Çözüm olarak erişilebilirlik için olgu var: dosyalar açılamıyor. Bütünlük için de olgu var: dosya adlarına tanımsız uzantı eklenmiş ve sabah girilen beş kayıt geri getirilen kopyada yok. Gizlilik için ise yalnızca “olası”: ödeme isteyen metnin bulunması saldırıyı düşündürür, ama verinin dışarı kopyalandığına dair bir olgu verilmemiş, bu yüzden “olgu” yazamayız. Yeniden girişte hata yapılabilmesi de yalnızca olası bir etkidir.
:::

---

## Sonuç aynıysa ilkeler de aynı mı?

- **Olay 1:** Son gün form 3 saat 40 dakika açılmadı; veride değişiklik verilmedi.
- **Kart D:** Paylaşılan başvuru dosyaları açılmadı; dosyalar değişti ve 5 kayıt kopyada yok.

**Görev:** Ortak ve farklı ilkeleri 4–6 cümlede, ayrı olgularla gerekçelendirin.

::: {.notes}
İki olayda da kullanıcı başvuru bilgisine ihtiyaç duyduğu anda ulaşamamıştır; ortak olan erişilebilirliktir. Karşılaştırmayı yalnız bu görünür sonuca indirgemek, Kart D'deki değiştirilmiş dosyaları ve kaybolan beş kaydı atlar. Olay 1'de erişilebilirlik olgudur: form açılamadı. Bütünlük için değişen bir veri belirtilmediğinden “yok”, gizlilik için yetkisiz görme belirtilmediğinden “yok”. Kart D'de erişilebilirlik olgudur: dosyalar açılamadı. Bütünlük de olgudur: dosyalar değişti ve sabah girilen beş kayıt kopyada yok. Gizlilik ise dışarı kopyalama bilinmediği için “olası”. Yani erişilebilirlik iki olayda ortak, bütünlük ve gizlilik olguları ise Kart D'de ayrıdır. Bu ayrım, olayın görünür sonucuna değil, olay metnindeki olgulara bakınca ortaya çıkar.
:::

---

## Üç soruyla olay hükmü

- Kim gördü veya görebilir oldu? → **yetki ve açılma bilgisi**
- İçerik, değişiklik, bağlam doğru mu? → **kaynak kayıtla karşılaştırma**
- Yetkili kişi gerektiğinde kullanabildi mi? → **kullanım anı ve kullanılabilirlik**

**Bir olayda her işaretin kendi gerekçesi vardır.**

::: {.notes}
Hüküm olayın adına ya da kasıtlı olup olmamasına göre verilmez. Kart A'da açıkta kalan aday bilgisi, Kart B'de yanlış tarih, Kart C'de hem okunamayan alanlar hem yapılamayan kontroller ayrı kanıtlardır. Bilinmeyen etki “olası” olarak kalır; sonuç ise ilkenin adı değil, adayın, çalışanın veya birimin gördüğü etkidir. Bu üç soruyu bundan sonraki her olayda aynı sırayla sorabiliriz.
:::

---

## Kaynaklar

:::: {.columns}

::: {.column width="50%"}
- BGT 201 ders sunumu 1, “Bilgi Güvenliği”, s. 14–26.
- [A. H. Tanpınar Arşivi, proje sayfası](https://arsiv.tanpinarmerkezi.msgsu.edu.tr/65.html)
:::

::: {.column width="50%"}
- [Anadolu Ajansı, Tanpınar arşivinin dijitalleştirilmesi](https://www.aa.com.tr/tr/kultur-sanat/tanpinar-arsivi-dijital-ortama-aktarildi/913678)
- [NASA/JPL, PIA00381, First Photograph Taken on Mars Surface](https://science.nasa.gov/photojournal/first-photograph-taken-on-mars-surface/)
:::

::::

::: {.notes}
Tanpınar ve Mars bağlamı geçen haftaki giriş notundaki kaynaklara dayanır. Kurum ve olay kartları ders sunumundaki ihlal örneklerinden uyarlanmış kurgusal verilerdir; sayılar gerçek bir kurumu temsil etmez.
:::
