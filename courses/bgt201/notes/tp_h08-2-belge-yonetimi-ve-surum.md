---
title: "Belge Yönetimi ve Sürüm Tutarlılığı"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I · Hafta 8 · Teori 2"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-11-11
execute:
  echo: false
---

## Kural değişti, kullanılan kâğıt değişmedi mi?

Bir kurum parola uzunluğunu 8 karakterden 12 karaktere çıkardı ve politikasını yeniledi.

Yeni çalışanlara verilen kullanım kılavuzu hâlâ "en az 8 karakter" diyor.

Yeni bir çalışan hangi metne göre parola belirler?

::: {.notes}
Çalışanın yazılı bir kuralı izleyebilmesi için kuralın güncel metnine ulaşabilmesi gerekir. Çalışan elindeki kılavuzu okur; politikanın yeni sürümünü okuyup okumadığı belli değildir. Kural yazıda değişmiş, uygulamada değişmemiş olabilir.

Bu durum çoğu zaman bir kişinin ihmalinden çok belge yönetimindeki bir boşluktan doğar. Politika yürürlüğe girdiğinde ona bağlı kılavuzun güncellenmesi ayrı bir iştir; sahada hangi metnin kullanıldığı da ayrıca kontrol edilir. Belge yönetimi, kurumun kararlarını yazılı belgelere dökmekle kalmaz, bu belgelerin güncel ve ulaşılabilir kalmasını da yönetir.

Sık düşülen yanılgı, üst politikanın onaylanmasıyla alt kılavuzların ve sahadaki basılı ya da dijital kopyaların kendiliğinden uyumlu hâle geleceğini varsaymaktır. Oysa hangi belgenin hangi kurala dayandığını ve sahada hangi metnin geçerli olduğunu izlemek için önce her belgeyi tekil olarak tanımlamak gerekir. Bir sonraki slaytta bu düzenin ilk yapı taşı olan belge kimliğini ele alıyoruz.
:::

---

## Belge kimliği, belgeyi tek ve tanınır yapar

**Belge kimliği**, bir belgenin kurum içinde tekil adını gösteren koddur. Çoğu kurum kimliğin içine belgenin türünü ve sırasını da yazar.

Bir kurumun örnek şeması: `RL.BGYS.PR.04`

| Parça | Anlamı |
|---|---|
| RL | Kurum kısaltması |
| BGYS | Belge ailesi |
| PR | Tür kodu: prosedür |
| 04 | Tekil sıra numarası |

- Tür kodları: P politika, PR prosedür, TL talimat, FR form. Günlük kullanımda kurum ve aile öneki düşer: **PR-04**.
- Bir form, bağlı olduğu prosedürü de kimliğinde taşıyabilir: `RL.BGYS.PR.04/FR.02`, PR-04 prosedürüne bağlı 2 numaralı formdur.

::: {.notes}
Aynı belgeye iki ayrı ad verilirse biri eskiyi, diğeri yeniyi anlatabilir ve iki kişi aynı belgeden söz ettiğini sanıp farklı metinleri kastedebilir. Bu yüzden kimlik tekildir: iki farklı belge aynı kimliği taşımaz, aynı belge iki kimlikle anılmaz.

Burada gösterilen şema, kurumun kendi seçimidir. Kurum kısaltması, aile adı, tür harfleri ve sıra numarasının kaç basamaklı olacağı kurumdan kuruma değişir. Kodu okuyabilmek için şemanın nasıl kurulduğunu bilmek gerekir; bu yüzden belge listesi ya da yönetim belgesinde şemanın açıklaması bulunur. Standartlar belgelerin tanımlanıp kontrol edilmesini ister; hangi kodlama düzeninin kullanılacağını kurum belirler.

Bir formu bağlı olduğu prosedürle birlikte kodlamak okuyana kolaylık sağlar: form tek başına eline geçen biri hangi prosedürün parçası olduğunu görür. Ama bağlantı değişirse kod da değişir; bu yüzden birçok kurum ilişkiyi kodda değil belge listesinde tutar. İki yol da kullanılabilir, önemli olan kurumun hangisini seçtiğini belge listesinde açıklamasıdır.

Kod belgenin kim olduğunu söyler. Hangi sürümün geçerli olduğunu ve kimin elinde hangi sürümün bulunduğunu söylemez.
:::

---

## Sürüm, aynı belgenin hangi hâli olduğunu söyler

**Sürüm**, aynı kimliği taşıyan belgenin hangi hâlinin geçerli olduğunu gösteren numaradır.

- Kimlik aynı kalır, sürüm değişir: PR-04 sürüm 1 ve PR-04 sürüm 2 aynı prosedürün iki hâlidir.
- Belgeler birbirine kimlikle ve gerekirse sürümle bağlanır: "TL-02, PR-04 sürüm 2'ye dayanır."

PR-04 sürüm 2 yürürlüğe girdi, ama TL-02 hâlâ "PR-04 sürüm 1'e dayanır" diyor. Ne anlaşılır?

. . .

TL-02 yeni prosedüre göre **güncellenmemiş**.

::: {.notes}
Sürüm numarası olmasaydı "PR-04'e dayanır" cümlesi hangi hâle dayandığını söylemezdi. Bağlantının sürümle yazılması, bir belge değiştiğinde ona bağlı belgelerin hangi sürüme göre hazırlandığını görmeyi sağlar. Soruda TL-02'nin dayandığı sürüm ile yürürlükteki sürüm farklıdır; bu fark, talimatın gözden geçirilmesi gerektiğini gösterir. Gözden geçirme sonunda talimat aynı kalabilir de; yine de bunun kararı verilir ve kaydedilir.

Sürüm numarasının nasıl artacağı, ilk sürümün 0 mı 1 mi olacağı gibi ayrıntılar kurumun kuralıdır. Önemli olan, iki farklı hâlin aynı numarayı taşımamasıdır.

Yaygın bir hata, belge güncellendiğinde belge kimliğini değiştirmek (örneğin `PR-04` yerine `PR-05` vermek) ya da yalnız kimlik yazıp sürüm numarasını atlamaktır; kimlik değişirse belgenin geçmişiyle bağı kopar, sürüm yazılmazsa hangi metnin esas alındığı belirsiz kalır. Ancak tek başına belgenin üzerindeki sürüm numarasını görmek de o sürümün hâlâ yürürlükte olduğunu kanıtlamaz; kurumda o an hangi sürümün geçerli olduğunu tek yerden görmek için bir sonraki slayttaki belge listesine başvurulur.
:::

---

## Belge listesi, hangi sürümün yürürlükte olduğunu söyler

**Belge listesi**, kurumun belgelerinin kimliğini, adını, geçerli sürümünü, durumunu ve sorumlusunu gösteren listedir.

Örnek (kurgusal bir lojistik şirketinin mobil erişim belgeleri):

| Kimlik | Ad | Sürüm | Durum | Sorumlu |
|---|---|---|---|---|
| P-01 | Mobil erişim politikası | 2 | Yürürlükte | BGYS belge sorumlusu |
| PR-04 | Erişim talebi prosedürü | 1 | Yürürlükte | BT Mobil Sistemler |
| TL-02 | Sürücü talimatı | 3 | Yürürlükte | Sevkiyat Operasyonları |
| FR-06 | Erişim talep formu | 1 | Yürürlükte | BT Mobil Sistemler |

::: {.notes}
Liste, tek bir soruya tek yerden cevap vermek için tutulur: bu belgenin hangi sürümü geçerli ve kimin sorumluluğunda? Biri eski bir belgenin kopyasını bulduğunda onu listeyle karşılaştırır ve geçerli olup olmadığını görür.

Listenin kendisi de güncel kalmalıdır. Sürüm değiştiği hâlde listede eski sürüm yazıyorsa liste yanlış yönlendirir. Bu yüzden belge sorumlusu yeni sürüm yürürlüğe girdiğinde listeyi aynı anda günceller. Tablodaki "Sorumlu", belgenin içeriğinden ve güncelliğinden sorumlu birimi gösterir; bir belgenin sorumlusu ile onu onaylayan kişi aynı olmak zorunda değildir.

Örnek tabloyu okurken aynı ailedeki belgelerin sürüm numaralarının birbirine eşit olmak zorunda olmadığına dikkat edin: `P-01` sürüm 2'deyken `PR-04` ve `FR-06` sürüm 1'de, `TL-02` ise sürüm 3'tedir; çünkü her belge yalnız kendi içeriği değiştikçe yeni sürüm alır. Ayrıca sorumluluk tek bir birimde toplanmaz; politika BGYS belge sorumlusunda, teknik prosedür ve form BT Mobil Sistemler'de, saha talimatı ise Sevkiyat Operasyonları'ndadır. Bir belgenin bu listede "Yürürlükte" durumuna gelene kadar hangi adımlardan geçtiğini ve sonrasında nasıl izlendiğini bir sonraki slaytta yaşam döngüsü üzerinden inceleyeceğiz.
:::

---

## Belgenin yaşam döngüsü

**Belge yaşam döngüsü**, bir belgenin hazırlanmasından kullanımdan kaldırılmasına kadar geçtiği aşamaların bütünüdür.

| Aşama | Kim | Geriye ne kalır? |
|---|---|---|
| Hazırlama | Konuyu bilen birim | Taslak |
| İnceleme | İlgili birimler | İnceleme izi |
| Onay | Yetkili yönetici | Onay kaydı |
| Yürürlük | Belge sorumlusu | Yürürlük tarihi/kararı, güncel durum ve liste güncellemesi |
| Dağıtım | Belge sorumlusu | Teslim alma kaydı |
| Kullanım | İlgili çalışanlar | Uygulama kayıtları |
| Revizyon / geri çekme | Belge sorumlusu | Değişiklik kaydı |

::: {.notes}
Her aşamanın bir sorumlusu ve bir izi olması, aşamaların gerçekten yapıldığının sonradan görülebilmesini sağlar. İnceleme, metni yazanın kendi eksiğini görmeyebileceği için konmuş bir bakıştır. Hazırlayan, inceleyen ve onaylayanın künyede ayrı yazılması bu yüzden önemlidir; hazırlayan ile onaylayan aynı kişi olmaz.

Tabloyu yukarıdan aşağıya doğru okuduğumuzda bir belgenin taslaktan uygulamaya ve sonunda revizyona uzanan sırasını görürüz. Konuyu bilen birim taslağı yazar, ilgili birimler inceleyip inceleme izi bırakır ve karar yetkilisi olan yönetici onay kaydıyla metni kabul eder. Ardından belge sorumlusu yürürlük tarihini ve belge listesindeki durumu işler, metni ilgililere dağıtarak teslim alma kaydı toplar; ilgili çalışanlar günlük işlerinde belgeyi kullandıkça uygulama kayıtları oluşur.

Aşamalar birbirinin yerine geçmeyen ayrı izler bırakır. Örneğin yetkili yönetici bir prosedürü 2 Kasım'da onaylayıp yürürlük tarihini 3 Kasım olarak belirleyebilir; bu durumda onay kaydı 2 Kasım'da oluşur, ancak yürürlük için başlangıç tarihine, karara ve liste güncellemesine birlikte bakılır. İleride kural değiştiğinde ise belge sorumlusu değişiklik kaydıyla eski sürümü geri çeker ve yeni sürüm için döngüyü yeniden işletir.

Sık yapılan hata, onay kaydını veya liste güncellemesini görüp belgenin sahada zaten dağıtıldığını ve kullanıldığını varsaymaktır. Oysa teslim alma kaydı yalnız metnin ulaştığını gösterir; kullanım bu kayıtlardan çıkarılamaz. Bir sonraki slaytta yürürlük, dağıtım ve kullanım arasındaki bu ayrımı kanıtlarıyla birlikte karşılaştırıyoruz.
:::

---

## Yürürlük, dağıtım ve kullanım ayrı olgulardır

Yeni parola politikası yürürlüğe girdi. Çalışanlar ona uyuyor mu?

. . .

Üç ayrı soru var:

| Soru | Kanıt |
|---|---|
| Yürürlüğe girdi mi? | Onay, yürürlük tarihi/kararı ve güncel belge durumu |
| İlgililere ulaştı mı? | Teslim alma kaydı |
| Kullanılıyor mu? | Uygulama kayıtları, yerinde kontrol |

Biri tamamsa diğerleri tamam sayılmaz.

::: {.notes}
Onay, yetkili kişinin metni kabul etmesidir. Yürürlük, belgenin belirlenen başlangıçtan itibaren geçerli olmasıdır; onay tarihiyle yürürlük tarihi farklı olabilir. Dağıtım, belirli sürümün ilgili insanlara ulaştırılmasıdır. Kullanım ise insanların belgeye göre davranmasıdır. Üç aşama arasında günler, hatta haftalar geçebilir.

Bu fark, denetimde neden üç ayrı kanıt aradığımızı açıklar. Onay kaydı, yürürlük tarihi/kararı ve güncel belge durumuyla birlikte yürürlüğü destekler. Dağıtım listesindeki bir ad, o kişinin metni aldığını gösterebilir. Çalışanın hangi metni kullandığı ise yerinde bakılarak ya da uygulama kayıtlarından görülür. Listede bir birimin adı yazıyorsa, o birimdeki her çalışanın metne ulaşıp ulaşmadığı için kişi bazlı teslim alma kaydına bakılır.

Parola politikası örneğinde üç aşamayı adım adım ayırabiliriz: politikanın onaylanıp listede "Yürürlükte" görünmesi yalnız birinci soruyu yanıtlar. Yeni politikanın veya ona bağlı kılavuzun çalışanlara imza ya da sistem onayıyla ulaştırılması ikinci sorunun kanıtıdır. Çalışanların gerçekten 12 karakterli parola belirleyip belirlemediği ise ancak sistemdeki uygulama kayıtlarından ve sahadaki yerinde kontrolden anlaşılır.

Denetim ve incelemelerde en sık yapılan yanlış, yürürlükteki belgeyi ya da genel duyuru mesajını gösterip kuralın uygulandığını ileri sürmektir. Yeni sürüm yürürlüğe girip dağıtıldığında bile, sahada kalan eski belgeler veya güncellenmemiş alt belgeler uygulamayı bozabilir; bir sonraki slaytta güncel çelişki ile eski kopya arasındaki farkı bu yüzden ayırıyoruz.
:::

---

## Eski sürümün kontrolü: güncel çelişki ile eski kopya ayrı sorulardır

**Eski sürümün kontrolü**, geçersiz kılınmış sürümün kullanılmasını önleyen ve hangi sürümün nerede bulunduğunu izleyen işlemlerdir.

İki durum birbirine karışmaz:

- **Güncel ama çelişen belge:** Listede yürürlükte görünen, ancak üst kuralla çelişen belge. Eski kopya değildir; düzeltilmesi gerekir.
- **Eski kopya:** Yerine yeni sürüm yürürlüğe girmiş, ama bir yerde hâlâ duran belge. Kullanımdan çekilir.

Eski kopyalar genellikle şu yerlerde bulunur: mesajlar, basılı klasörler, ortak sürücüler, ekip dosyaları.

Önce ilgili belgeler yeni sürüme bağlanır. Ondan sonra eski sürümün kopyaları çekilir.

::: {.notes}
Üst kural değiştiğinde ortaya çıkabilecek iki farklı sorunu birbirinden ayırmak, doğru düzeltici adımı seçmenin ön koşuludur. Bir talimat belge listesinde hâlâ yürürlükte görünüyor ama yeni politikayla çelişiyorsa, ortada "eski kopya" değil "güncel ama çelişen belge" vardır; burada çözüm kâğıt toplamak değil, talimatı revize edip yeni sürüme geçirmektir. Buna karşılık talimatın yeni sürümü yürürlüğe girdikten sonra ortak sürücüde, e-posta ekinde veya klasörde kalan önceki hâli artık bir "eski kopya"dır ve kullanımdan çekilmesi gerekir.

Geçersiz kılınmış bir sürüm genellikle silinmez; geçmişte ne yazdığını bilmek gerekebilir. Kullanım dışı işaretlenir, sahadan toplanır ve arşivde tutulur. Arşiv kopyasının nerede olduğu da kayıtlıdır.

Basılı kopyalar en zor izlenenlerdir: klasördeki kâğıdı kimse görmez ve güncelleme mesajı oraya ulaşmaz. Bu yüzden eski sürümün hangi yerlerde bulunabileceğini önceden listelemek, geri çekme işinin ilk adımıdır. Kopyalar toplandığında bunun kaydı tutulur; yoksa toplanıp toplanmadığı sonradan anlaşılamaz.

Sıra da önemlidir. Yeni sürümü ulaştırmadan eskiyi toplarsanız çalışanın elinde hiçbir metin kalmaz. Eski sürümün ne kadar saklanacağı kurumun iş ve yasal ihtiyacına göre, gerekçesi yazılarak belirlenir; tek bir evrensel saklama süresi yoktur. Bir belgenin yeni sürüme geçirilirken hem değişiklik gerekçesinin hem de dağıtım ve eski sürüm işlemlerinin nasıl kayıt altına alındığını bir sonraki slaytta revizyon kaydı üzerinde görüyoruz.
:::

---

## Revizyon, değişikliğin gerekçesini ve izini taşır

**Revizyon**, yürürlükteki bir belgenin değişen karara ya da ihtiyaca göre yeni sürüme dönüştürülmesi ve bu değişikliğin kaydedilmesidir.

**Revizyon kaydı**, hangi belgenin neden, kim tarafından ve ne zaman değiştirildiğini, yeni sürümün kime dağıtıldığını ve eski sürümün durumunu gösterir.

Örnek: parola kullanım kılavuzu 2. sürümden 3. sürüme geçti.

| Parça | Alan | Yazılan |
|---|---|---|
| A: Değişiklik | Kimlik, eski → yeni sürüm | Parola kılavuzu, 2 → 3 |
| | Gerekçe | Politika 12 karakter şartı getirdi |
| | Hazırlayan / inceleyen / onaylayan | BT / İnsan Kaynakları / Bilgi güvenliği yöneticisi |
| B: Dağıtım | Yürürlük tarihi | 20 Kasım |
| | Dağıtılacak yerler | Yeni çalışan klasörü, intranet sayfası |
| | Eski sürümün durumu | Sürüm 2 kullanım dışı; arşiv kopyası BT'de |
| | Kanıt | Teslim alma listesi, sayfa güncelleme kaydı |

::: {.notes}
Revizyon kaydını iki parçada düşünmek işi kolaylaştırır. Birinci parça "neyi, neden değiştirdik, kimler onayladı" sorusunu cevaplar. İkinci parça "yeni metin kime, ne zaman ulaştı, eskisi ne oldu" sorusunu cevaplar. Birincisi doğru tutulup ikincisi boş bırakılırsa belge yazıda değişir ama sahada değişmez.

Gerekçe alanında "güncellendi" yazmak yetmez; değişikliğin hangi karardan ya da hangi eksiklikten doğduğu görünmelidir. Hazırlayan, inceleyen ve onaylayan ayrı yazılır, çünkü her biri farklı bir bakış getirir ve hazırlayan ile onaylayan aynı kişi olamaz. Bu alanların adı ve sayısı kurumun örnek seçimidir; amaç değişikliğin gerekçesinin ve dağıtımın bir yerde izlenebilir durmasıdır.

Tablodaki parola kılavuzu örneğinde A parçası, 2. sürümden 3. sürüme geçişin "Politika 12 karakter şartı getirdi" gerekçesine dayandığını, teknik içeriği BT'nin hazırladığını, çalışanlara etkisini İnsan Kaynakları'nın incelediğini ve Bilgi güvenliği yöneticisinin onayladığını gösterir. B parçası ise 20 Kasım yürürlük tarihini, yeni çalışan klasörü ile intranet sayfasının güncelleneceğini, sürüm 2'nin kullanım dışı bırakılıp arşiv kopyasının BT'de tutulacağını ve bunların hangi kanıtlarla doğrulanacağını bağlar. B parçasındaki dağıtım kanıtlarının sahada nasıl sınandığını bir sonraki slaytta üç ayrı iz olarak açıyoruz.
:::

---

## Dağıtımı kanıtlamak için üç iz gerekir

| İz | Ne gösterir? |
|---|---|
| Teslim alma kaydı | Kim, hangi **sürümü**, ne zaman aldı? |
| Geri çekme kaydı | Eski sürümün hangi kopyaları toplandı? |
| Yerinde kontrol | Sahadaki kopya listedeki sürümle aynı mı? |

Dağıtım listesinde yalnız birim adı ve tarih varsa hangi soruların cevabı eksiktir?

. . .

Hangi **sürüm** teslim edildi, **kim** aldı, eski kopya toplandı mı.

::: {.notes}
Listede "Muhasebe birimi, 3 Kasım" yazması yeni metnin oraya gittiğini düşündürür. Hangi kişinin aldığı, hangi sürümü aldığı ve aldıktan sonra eskisinin ne olduğu yazmıyorsa liste eksik bilgi verir. Dağıtımın yapılıp yapılmadığı açık kalır; doğrulamak için teslim alma kaydı ve geri çekme kaydı gerekir.

Yerinde kontrol, kayıtların dışında bir doğrulamadır. Bir klasörü açıp içindeki formun sürüm numarasına bakmak kısa bir iştir ve kayıtların sahadaki durumla örtüşüp örtüşmediğini gösterir.

Bu üç iz birbirini tamamlar: teslim alma kaydı yeni sürümün ilgili kişiye ulaştığını, geri çekme kaydı eski kopyaların ortak alanlardan ve klasörlerden kaldırıldığını, yerinde kontrol ise çalışma noktasında gerçekten güncel sürümün bulunduğunu ortaya koyar. Yalnızca ilk ize güvenmek, çalışanların ekranında veya klasöründe eski sürümün açık kalmasını gözden kaçırabilir. Belgelerin dağıtımı kadar, yönetim kararını taşıyan belgelerle sistem ayarlarını gösteren teknik belgelerin birbiriyle uyumu da kontrol edilmelidir; bir sonraki slaytta bu ilişkiye geçiyoruz.
:::

---

## Yönetimsel belge karar verir, teknik belge uygulamayı taşır

**Yönetimsel belge**, karar, kural, rol ve akış belirleyen belgedir (politika, prosedür).

**Teknik belge**, kararın bir sistemde ya da cihazda nasıl uygulandığını gösteren belgedir (iş talimatı, ayar ve yapılandırma kaydı).

Örnek: politika parolanın en az 12 karakter olmasını ister. Sistemin ayar kaydında en düşük parola uzunluğu hâlâ 8.

Hangi belge "doğru"dur?

. . .

İkisi de kendi işini söylüyor: politika **kararı**, ayar kaydı **sistemin gerçek durumunu**. Aralarındaki fark giderilmesi gereken bir tutarsızlıktır.

::: {.notes}
Kural yazıda değişse de sistemdeki gerçek ayar eski kalırsa kural yalnız kâğıtta geçerli olur. Çalışan 8 karakterlik parola belirleyebilir ve sistem bunu kabul eder; politika ise bu parolayı uygunsuz sayar. Bu yüzden bir yönetimsel belge değiştiğinde ona bağlı teknik belgelerin ve kayıtların da gözden geçirilmesi gerekir.

İlişki iki yönlüdür. BT bir ayarı değiştirdiğinde bu değişikliğin politikaya aykırı olup olmadığına bakmak da gerekir. Küçük kurumlarda bu belgeler aynı kişilerin elinde olabilir; yine de ayrı tutulmaları, bir değişikliğin hangi katmanda yapılması gerektiğini görmeyi sağlar. Ayar değişikliği için üst yönetim onayı aramak gereksizdir; ama "parola en az 12 karakter olsun" kararını değiştirmek bir ayar işi değildir; karar yetkilisi ile teknik uygulayıcı farklı roller taşır.

Slayttaki örnekte "hangi belge doğrudur?" sorusunun tuzağına düşmemek gerekir: politika kurumun olması gereken kuralını doğru söylerken, ayar kaydı da sistemin o anki gerçek yapılandırmasını doğru rapor etmektedir. Yapılandırma kaydını "hatalı yazılmış" sayıp sistem ayarını değiştirmeden yalnız kâğıt üzerinde düzeltmek ya da yönetici kararı olmadan politikayı 8 karaktere indirmek tutarsızlığı yanlış yerden kapatmak olur.

Şimdiye kadar kurumun kendi içinde ürettiği yönetimsel ve teknik belgeleri gördük. Ancak kurumlar yalnız kendi yazdıkları metinlerle çalışmaz; standartlar, rehberler ve sözleşmeler gibi dışarıdan gelen metinleri de izlemek zorundadır. Bir sonraki slaytta dış kaynaklı belgelerin nasıl yönetildiğini ele alıyoruz.
:::

---

## Dış kaynaklı belgeler kurumun yazdığı belgeler değildir

**Dış kaynaklı belge**, kurumun kendisi yazmadığı ama faaliyetlerinde başvurduğu ya da uyduğu standart, rehber, sözleşme veya mevzuat metnidir.

- ISO/IEC 27001: bilgi güvenliği yönetim sisteminin **gereksinim standardı**.
- ISO/IEC 27002: bilgi güvenliği **kontrol rehberi**.
- Cihaz üreticisinin kullanım kılavuzu, hizmet sağlayıcıyla yapılan sözleşme.

Kurum bu metinleri kendi belgesi gibi düzenlemez. Hangi sürümü kullandığını ve hangi iç belgesinin hangi dış metne dayandığını **izler**.

::: {.notes}
İki standart aynı işi yapmaz. 27001, bir kurumun bilgi güvenliği yönetim sisteminin neleri taşıması gerektiğini söyleyen gereksinim standardıdır. 27002 ise kontrollerin ne olabileceğini ve nasıl uygulanabileceğini anlatan rehberdir. Kurumun iç belgeleri bu metinlerin cümlelerini kopyalamaz; kurumun kendi kararını yazar ve "referanslar" bölümünde hangi dış metne dayandığını gösterir.

Dış belgenin yönetilmesi şu işlerden oluşur: hangi dış belgelerin kullanıldığının listelenmesi, hangi sürümün geçerli olduğunun izlenmesi, dış belge değişince ona dayanan iç belgelerin gözden geçirilmesi. Üreticinin kılavuzu güncellendiğinde kurumun talimatının da etkilenip etkilenmediği bu izleme sayesinde fark edilir.

Bu derste görülen belge kimliği şeması, revizyon alanları, belge adları ve saklama süreleri kurumların kendi seçimleridir. Standartlar belgelenmiş bilginin kontrol altında tutulmasını ister; bunun hangi kodla, kaç alanla ve ne kadar süreyle yapılacağı kurumun ihtiyacına ve gerekçesine bağlıdır. Kurumun iç ve dış belgeleri arasındaki bu çerçeveyi kurduktan sonra, bir sonraki slaytta üst karardan başlayıp doldurulmuş kayda kadar uzanan zincirin nasıl çalıştığını inceliyoruz.
:::

---

## Karardan kayda zincir ve boş form

Karar → politika → prosedür → talimat → **form (boş)** → **doldurulmuş kayıt** → revizyon izi

Bir kurumun dolabında hesap talep formu duruyor. Birine hesap açıldı mı?

. . .

**Bilinemez.** Boş form hiçbir işlemi göstermez; doldurulmuş, onaylanmış ve BT'nin işlemi işlenmiş kayıt gerekir.

**Her halka kendi beyanını taşır:** talep eden "bilgiler benim", yönetici "iş için gerekli", BT "hesabı açtım".

::: {.notes}
Zincirin amacı, bir hesabın dayanağının geriye doğru izlenebilmesidir: açılan hesap için hangi talep vardı, onu kim onayladı, hangi prosedüre göre açıldı, o prosedür hangi politikayı uyguluyordu. Soldan sağa okuduğumuzda yönetim kararı politikada kurala, prosedürde akışa, talimatta uygulama adımına ve boş formda bilgi toplama şablonuna dönüşür; işlem yapıldığında doldurulmuş kayıt oluşur ve kurallar değiştikçe revizyon izi zinciri güncel tutar. Zincirde bir halka kopuksa iz sürülemez; BT'nin işlem kaydı var ama yönetici onayını gösteren kayıt yoksa iş gerekçesinin aranıp aranmadığı bilinemez.

Boş form ile doldurulmuş kayıt arasındaki ayrım bu zincirin kilit noktasıdır: dolapta duran boş form yalnız nasıl veri toplanacağını gösteren bir belgedir, hiçbir işlemin yapıldığını kanıtlamaz. Doldurulmuş kayıtta ise üç ayrı rol kendi beyanını bırakır: talep eden bilgilerin kendisine ait olduğunu, karar/onay konumundaki yönetici hesabın iş için gerekli olduğunu, teknik uygulayıcı olan BT ise hesabın gerçekten açıldığını kayda geçirir.

Bir halkada iz yoksa bunun sebebi iki biçimde olabilir: işlem yapılmamıştır ya da yapılmış ama kayda geçmemiştir. Kayıt tek başına hangisi olduğunu söylemez; bu yüzden eksik iz, iddia için ek bilgi gerektiren bir durum sayılır. Öte yandan prosedür zorunlu olarak "onay kaydı tutulur" diyorsa kaydın eksikliği, işlemin yapılıp yapılmadığından bağımsız olarak şartın karşılanmaması demektir.

Uygulamada sık yapılan hata, denetimde boş form şablonunu gösterip sürecin işlediğini sanmak ya da tek bir kişinin imzasıyla hem iş gerekçesinin hem teknik işlemin tamamlandığını varsaymaktır. Belgelerdeki kuralların sahadaki uygulamayla ve kayıtlarla nasıl karşılaştırılacağını bir sonraki slaytta iki yönlü sınama olarak ele alıyoruz.
:::

---

## "Yaptığını yaz, yazdığını yap": iki yönlü sınama

Cihaz teslim prosedürü der ki: **"Teslim edilen her cihaz için teslim formu doldurulur."**

Sahada görülenler:

- Görevli formu doldurmuyor; cihazı doğrudan depoya koyuyor.
- Mesai dışı teslimlerde cihazlar bir "emanet kutusuna" bırakılıyor. Prosedürde emanet kutusundan söz edilmiyor.

İki durum aynı hatayı mı gösteriyor?

. . .

**Hayır.** İki durumun hatası ve düzeltmesi farklıdır:

- **Yazdığını yapmamak:** Yazılı kural işlemiyor; düzeltmede **uygulama** değişir.
- **Yaptığını yazmamak:** İşleyen uygulama belgede yok; düzeltmede **belge** değişir.

::: {.notes}
Yönetim sistemlerinde belgeye güvenmek, iki yönlü bir sınama ister: belgede yazan iş yapılıyor mu ve yapılan iş belgede yazıyor mu? İlk soru yazılı kuralı sahadaki kanıtla karşılaştırır; ikinci soru ise kimsenin yazmadığı ama sahada herkesin uyguladığı alışkanlıkları ortaya çıkarır. Her iki durumda da belge sahadaki gerçek durumu anlatmamaktadır, ancak uyumsuzluğun yönü ve çözüm yolu birbirinin tersidir.

Emanet kutusu örneğinde uygulama iş akışı açısından mantıklı olabilir; buradaki sorun, kutudaki cihazların kimin sorumluluğunda olduğunun ve ne zaman kayda geçtiğinin prosedürde görünmemesidir. Çözüm emanet kutusunu kaldırmak olmak zorunda değildir: prosedüre emanet kutusunu, sorumluyu ve kayıt anını ekleyerek yapılan işi kurallı hâle getirmek de bir seçenektir. İlk durumda ise görevli cihazı kayıtsız depoya koyduğu için belgeyi değiştirmek sorunu çözmez; teslim formunun gerçekten doldurulmasını sağlamak gerekir.

Sık düşülen yanılgı, belge ile saha arasındaki her farkı "çalışanlar kurala uymuyor" diye okumak ya da tersine, çalışanlar formu doldurmuyor diye gerekli bir kontrolü prosedürden çıkarmaktır. Hangi durumda uygulamanın düzeltileceğine, hangi durumda belgenin güncelleneceğine karar verirken sahadaki uygulamanın güvenlik ve izlenebilirlik ihtiyacını karşılayıp karşılamadığına bakılır.

Bu iki yönlü bakış H9'da fark analizine dönüşür: yazılı kuralı sahadaki kanıtla karşılaştırıp aradaki farkı kayda geçireceğiz. Bir sonraki slaytta, bu derste gördüğümüz tüm belge yönetimi kurallarını tek bir üst prosedürün kontrol listesi olarak topluyoruz.
:::

---

## Belge yönetimi prosedürü neleri düzenlemelidir?

Kurumun belgeleri hakkında kural koyan belge, **belge yönetimi prosedürüdür**. Bir prosedürü şu kontrol listesiyle sınayabiliriz:

| Prosedürde olmalı | Yanıtladığı soru | Bu derste |
|---|---|---|
| Belge kimliği ve kod kısaltmaları | Belge nasıl adlandırılır, kod nasıl okunur? | Belge kimliği |
| Sayfa yapısı | Belge hangi bölümlerle yazılır? | Belge anatomisi (Teori 1) |
| Onay | Metni hangi yetkili kabul eder? | Yaşam döngüsü |
| Yayım ve dağıtım | Kime, hangi sürüm, nasıl ulaşır; teslim nasıl kanıtlanır? | Dağıtım |
| Revizyon | Değişiklik nasıl istenir, gerekçesi ve izi nerede? | Revizyon |
| Saklama ve iptal | Eski sürüm ne kadar saklanır, ne zaman kullanım dışı olur? | Eski sürümün kontrolü (saklama süresi kurumun kararıdır) |
| Dış kaynaklı belgeler | Kanun ve standart nasıl izlenir? | Dış kaynaklı belgeler |
| Kayıt kontrolü | Kayıtlar nasıl korunur, kim kontrol eder? | Karardan kayda zincir |

::: {.notes}
Tablodaki sekiz başlık, ders boyunca gördüğümüz her kavramın kurumda yazılı bir kurala nasıl dönüştüğünü topluca ortaya koyar. Belge yönetimi prosedürü yoksa her çalışan kendi alışkanlığını izler; aynı belge iki ayrı yerde iki ayrı adla ve sürümle dolaşır.

Kontrol listesi iki işe yarar. Bir kurumun prosedürünü sınarken hangi maddenin eksik olduğunu gösterir; kendi prosedürünüzü yazarken de hangi soruları yanıtlamanız gerektiğini çerçeveler. Maddelerin sırası ve ayrıntısı kurumdan kuruma değişir; örneğin saklama süresi kurumun kendi kararıdır, standart bir süre dayatmaz.

Tabloyu soldan sağa okurken ilk sütunda prosedürde bulunması gereken başlığı, orta sütunda o başlığın kurum içinde çözdüğü somut soruyu, sağ sütunda ise Teori 1 ve Teori 2'de ele aldığımız karşılığını görebilirsiniz. Son slayttaki görev, bu listedeki yaşam döngüsü ve dağıtım kontrollerinin eksikliğini bir vaka üzerinde sınamanızı bekliyor.
:::

---

## Sürüm çakışmasını açıklayan eksik kontroller

Bir yazılım şirketinde:

- **Canlıya alma prosedürü sürüm 3**, 3 Kasım'da yürürlüğe girdi: canlıya almadan önce test onayı zorunlu.
- **Canlıya alma talimatı sürüm 2**, yeni prosedür hazırlanırken hâlâ "Paketi doğrudan canlıya al" diyordu.
- Bu çelişki için hazırlanan **talimat sürüm 3**, "Test onayını doğruladıktan sonra paketi canlıya al" hükmüyle 2 Kasım’da onaylandı ve 3 Kasım’da yürürlüğe girdi; sürüm 2 kullanım dışı bırakıldı.
- Belge listesinde talimat hâlâ "sürüm 2, yürürlükte" yazıyor.
- Dağıtım kaydında "Yazılım ekibi — 3 Kasım" yazılı; sürüm ve teslim alan kişi yazmıyor.
- Ekibin bilgi sayfasında talimatın sürüm 2'si hâlâ açık.
- 12 Kasım'da bir geliştirici talimata uydu ve test onayı olmayan paket canlıya çıktı.

- **Görev:** Sürüm çakışmasını açıklayan eksik kontrolleri belirleyin.
- **Ölçüt:** İlk satır rehberdir; onunla birlikte en az üç ayrı yaşam döngüsü kontrolü bulunsun. Her satırda verideki dayanak ve düzeltici adım yazılsın.
- **Kontrol adları:** belge listesinin güncelliği, dağıtım (teslim alma) kaydı, geri çekme kaydı, yerinde kontrol.

| Eksik kontrol | Verideki dayanak | Düzeltici adım |
|---|---|---|
| Dağıtım (teslim alma) kaydı | Dağıtım kaydında yalnız "Yazılım ekibi — 3 Kasım" var; sürüm ve teslim alan kişi yok | Belge sorumlusu, dağıtım kaydına belge kimliği, sürüm, teslim alan kişi ve teslim tarihi alanlarını ekler |
|  |  |  |
|  |  |  |
|  |  |  |

::: {.notes}
Vakada 3 Kasım'dan önce güncel ama yeni prosedürle çelişen talimat sürüm 2, sürüm 3 yürürlüğe girdikten sonra kullanım dışı eski kopyaya dönüşmüştür; 12 Kasım'da bu eski kopya izlenmiş ve test onayı olmayan paket canlıya çıkmıştır. Çalışma tablosunda sizden beklenen bu sonucu tekrar yazmak değil, eski kopyanın kullanılmasına yol açan eksik yaşam döngüsü kontrollerini tespit etmektir. İlk satır rehber olarak doldurulmuştur: "Dağıtım kaydında 'Yazılım ekibi — 3 Kasım' yazılı; sürüm ve teslim alan kişi yazmıyor" verisini doğrudan `Dağıtım (teslim alma) kaydı` kontrolüne bağlar ve belge sorumlusunun kayda hangi alanları ekleyeceğini gösterir.

Kalan satırları doldururken slaytta verilen kontrol adları arasından uygun olanları seçin ve her satırı vaka metnindeki somut bir ifadeye dayandırın. Düzeltici adımlarda "daha dikkatli olunmalı" gibi genel ifadeler yerine, hangi rolün hangi belge veya kayıt üzerinde ne işlem yapacağını açıkça yazarak ölçütü karşılayın.
:::
