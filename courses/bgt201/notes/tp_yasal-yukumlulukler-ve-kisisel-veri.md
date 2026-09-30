---
title: "Yasal Yükümlülükler ve Kişisel Veri"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: today
execute:
  echo: false
---

## Yasal yükümlülükler ve kişisel veri

---

## Başvuru kaydının yolu

| Adım | İşlem / alan | Yürüten |
|---|---|---|
| 1 | Form: ad, kimlik no, telefon, e-posta, okul, not ortalaması | Kayıt görevlisi |
| 2 | Tarama ve ortak “Başvurular” klasörüne kayıt | Kayıt görevlisi |
| 3 | Başvuru no, okul, not ortalamasıyla değerlendirme | Belge/arşiv görevlisi |
| 4 | Klasöre uzaktan bakım erişimi | Dış BT firması |
| 5 | Webde sonuç duyurusu | Birim sorumlusu |
| 6 | Kabul edilenlerin ad, kimlik no, telefonunun merkez İK'ya gönderimi | Belge/arşiv görevlisi |

::: {.notes}
Kurgusal birim 12 adayın başvurusunu işler. İki kayıt görevlisi, bir belge/arşiv görevlisi ve bir birim sorumlusu vardır. Form kâğıt veya web üzerinden alınır; merkez İK aynı kurum içindedir. Değerlendirme için kullanılan üç alanla ortak klasörde duran tüm alanları ayrı görün. Bu fark, kimlerin neye erişmesi gerektiği sorusunu doğurur.
:::

---

## Aynı hafta iki olay

| Olay | Somut veri | Etkilenen özellik |
|---|---|---|
| Dış BT oturumu | Salı 09.40–10.25; tüm klasöre erişim; 12 dosya ve 12 tarama kişisel dizüstüne kopyalandı | Gizlilik |
| Yanlış tablo | İK'ya 3. sürüm gitti, güncel sürüm 4; iki not eski, bir aday yanlış “yedek” | Bütünlük |

**Soru:** Başvuru dosyaları gerektiğinde açılamasaydı hangi özellik etkilenirdi?

::: {.notes}
Kopyalama oturumunun kaydı tutulmadı; durum çalışanın kendi beyanıyla öğrenildi. İkinci olay gizli bilginin dışarı açılması olmadan da aday kararını bozabilir; sorun değerin doğruluğudur. Dosyanın ihtiyaç anında bulunamaması erişilebilirliği etkiler. Kişisel veri paylaşımı örneğini yalnız gizlilikle sınırlamamak gerekir (Ders sunumu 1, slayt 22).
:::

---

## İmzalı metin erişim sınırı değildir

| Toplantıdaki cevap | Eksik kalan soru |
|---|---|
| “Adaylara rıza ve aydınlatma metni imzalattık.” | Firma neden tüm klasörü açabildi? |
| “ISO 27001 belgemiz var.” | Salı oturumunun yetkisi ve kaydı nerede? |

::: {.notes}
İmzalı belge klasör iznini değiştirmez. Sertifika da bu oturumda neye erişildiğini göstermez; belgenin bu birimi kapsayıp kapsamadığı dahi bilinmiyor. Erişim açığı için yetki sınırı ve inceleme izi gerekir. Ders sunumu 2, slayt 5'teki rıza cevabı ile slayt 13'teki sertifika/zorunluluk iddiaları bu olayın dayanağı olarak kullanılamaz.
:::

---

## “Uyum” bir tedbir değil, gereksinim sorusudur

**Kaynak gereksinimi → kurum kararı → teknik/idari tedbir → kanıt**

| İfade | Zincirdeki yeri |
|---|---|
| “Yasa ve düzenlemelere uyum” | Kaynağı bulma ve kapsamı sınama |
| “Bakım alanına sınırlı erişim” | Tedbir |
| “Aylık oturum inceleme tutanağı” | Kanıt |

::: {.notes}
BGYS risk, rol, karar ve kanıt düzeni kurar; hangi dış hükmün bu işleme uygulandığını kendiliğinden saptamaz. Bu nedenle “BGYS uyumu sağlar” ifadesindeki fiil fazla güçlüdür (Ders sunumu 2, slayt 8). “Yasal uyum”u parola veya yedekleme ile eşit bir kontrol maddesi saymak da kaynak ile tedbiri karıştırır (Ders sunumu 1, slayt 34).
:::

---

## Kişisel veride belirleyici soru

**Bilgi, belirli veya belirlenebilir bir gerçek kişiye ilişkin mi?**

| Bilgi | Gerekçe |
|---|---|
| “Ayşe Kaya, 0 5xx xxx xx 14” | Kişi açıkça belirli |
| “Başvurular 3–14 Ekim'de alınır” | Kişiye ilişkin değil |
| “Başvuru no 0007: kabul” | Numara–kişi eşlemesine erişime bağlı |

Kaynak: KVKK m. 3; GDPR md. 4(1).

::: {.notes}
Üçüncü satırı tek kelimelik bir cevapla kapatmayın. Kayıt görevlisi numarayı adla eşleştirebilir; dışarıdan okuyan biri bunu yapamayabilir. Kişisel veri, dosya türü veya gizlilik sınıfı değildir. Kâğıt form ve e-posta da kişisel veri taşıyabilir; kurum içinde genişçe görülen bir telefon listesi de kişiye ilişkin olabilir.
:::

---

## Kopyalama da işlemedir

**Toplama → kaydetme → saklama → değiştirme → açıklama / aktarma**

| Vaka | İşlem |
|---|---|
| Form alma | Elde etme |
| İK'ya tablo gönderme | Kurum içi aktarma |
| Dosyayı kişisel cihaza kopyalama | Talimatı ayrıca sınanacak işleme |

Kaynak: KVKK m. 3; GDPR md. 4(2).

::: {.notes}
İşleme yalnız veri toplama değildir. Yanlış sürümün gönderilmesi ve dış firmanın kopyası da veri üzerindeki işlemlerdir. Kurumun kopyalamayı planlamamış olması, yapılan eylemin işleme niteliğini ortadan kaldırmaz. İK'ya gönderim aynı tüzel kişinin içinde yapılsa da işleme olmaya devam eder.
:::

---

## Amaç ve aracı kim belirliyor?

| Rol | Vakada |
|---|---|
| İlgili kişi: verisi işlenen gerçek kişi | 12 aday |
| Veri sorumlusu: amacı ve aracı belirleyen | Kurum |
| Veri işleyen: sorumlu adına işleyen | Dış BT firması |
| Kurum çalışanı: sorumlu içinde çalışan | Kayıt, arşiv, İK görevlileri |

Kaynak: KVKK m. 3; GDPR md. 4(7)–(8).

::: {.notes}
Başvuru amacını ve toplanacak alanları kurum belirler. Dış BT firması teknik sistemi yönetir ama başvurunun amacını belirlemez. Birim ve merkez İK aynı tüzel kişiliğin parçalarıdır. “Sistemi yöneten” teknik bir ilişki, “veri işleyen” ise kurum adına yapılan işlemenin hukuki ilişkisidir; unvandan tek başına rol çıkarılmaz.
:::

---

## Rolü faaliyete göre sınayın

| No | Durum | Rol ve gerekçe? |
|---|---|---|
| a | Hosting firması formu kurumun ayarlarıyla saklıyor | ? |
| b | Kayıt görevlisi formu tarıyor | ? |
| c | Aday annesinin telefonunu acil iletişim alanına yazıyor | ? |
| d | BT firması kendi pazarlaması için çalışanlara anket gönderiyor | ? |

::: {.notes}
Her satırda veriyle ilgili amacı kimin belirlediğine bakılır. Bir şirket tek ve değişmez bir role sahip değildir. Annenin programa başvurmamış olması, telefonunun kişisel veri niteliğini kaldırmaz.
:::

---

## Rol sınamasının çözümü

| No | Sonuç | Neden |
|---|---|---|
| a | Hosting firması işleyen | Kurum adına, kurum ayarlarıyla saklıyor |
| b | Görevli kurum çalışanı | Kurum içinde talimatla tarıyor |
| c | Anne ilgili kişi | Telefon anneye ilişkin |
| d | BT firması sorumlu | Anketin amacını kendisi belirliyor |

::: {.notes}
(a) Firmaya ait teknik altyapı, başvuru amacının firmaya geçtiğini göstermez. (d) Aynı firma başvuru klasörü bakımında işleyen, kendi anketinde sorumlu olabilir. Rol kaydı bu yüzden aktör ve işleme faaliyetiyle birlikte tutulur.
:::

---

## Kaynak türü ile kapsamı iki ayrı sorudur

| Kaynak | Tür | Kapsam için bakılacak yer |
|---|---|---|
| KVKK | Bağlayıcı kanun | m. 2, istisnalar için m. 28; işleme olgusu |
| GDPR | Kendi kapsamında bağlayıcı AB tüzüğü | md. 3; AB bağlantısı |
| KVKK Kurumu güvenlik rehberi | Yol gösterici | Tedbirin vaka riskine uygunluğu |
| Bilgi ve İletişim Güvenliği Rehberi v1.1 | Kamu ve kritik altyapı için güvenlik rehberi | Amaç ve Kapsam bölümü; kurum niteliği |
| XLSM / ders slaytı | Araç / öğrenme kaynağı | Hüküm yerine geçmez |

::: {.notes}
Kaynağın adını saymak onun bu kuruma uygulandığını kanıtlamaz. Kanunda kapsam hükmü ile somut işlemi eşleştirmek gerekir. KVKK Kurumu Rehberi tedbire örnek verir ama tek tek bütün önerileri her kuruma zorunlu kılmaz. XLSM şablonu ve eski sunumlar araştırma/alan düzeni için kullanılabilir; bağlayıcı hüküm kaynağı değildir.
:::

---

## GDPR: hangi AB bağlantısı?

| Konum | Aranan olgu | Sorulacak soru |
|---|---|---|
| md. 3(1) | AB'de yerleşik birim faaliyeti | AB'de şube/birim var mı? |
| md. 3(2)(a) | AB'deki kişilere hizmet sunma | Hizmet onlara yöneltiliyor mu? |
| md. 3(2)(b) | AB'deki davranışları izleme | Analitik araç ne yapıyor? |

Kaynak: [GDPR md. 3 ve gerekçe 23](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679).

::: {.notes}
Türkiye'de kurulu olmak tek başına olumlu veya olumsuz GDPR kararı verdirmez; md. 3(2) AB dışındaki kuruluşların belirli faaliyetlerini de kapsar. AB'den erişilebilen veya İngilizce bir sayfa da tek başına AB'deki kişilere hizmet sunma niyetini göstermez. Hedefleme ve izleme fiillerini somut işlem kanıtıyla araştırmak gerekir.
:::

---

## Rehber v1.1: kime uygulanır?

| Belgedeki kapsam | Vakada gereken olgu |
|---|---|
| Devlet teşkilatındaki, bilgi işlem birimi olan veya BT hizmetini dışarıdan alan kurumlar | Kurumun hukuki niteliği |
| Kritik altyapı hizmeti veren işletmeler | Verilen hizmetin niteliği |

**“Tüm kurumlar” kapsam ifadesi değildir.**

Kaynak: [Bilgi ve İletişim Güvenliği Rehberi v1.1, Amaç ve Kapsam, s. 11](https://cdn.siberguvenlik.gov.tr/dokuman/26/05/260515153932_Bilgi%20Gu%CC%88venlig%CC%86i%20Rehberi.pdf).

::: {.notes}
Belgenin künyesi sürümü 1.1, tarihi 01.03.2026 olarak verir. 2020'de yayımlanan ilk sürümden sonra Mart 2026 değişikliği kurumsal yetki devrine bağlı tasarım ve künye güncellemesi olarak açıklanır. Kapsam kararı kurumun adından değil, devlet teşkilatındaki konumu veya kritik altyapı hizmeti olgusundan çıkarılır. “Kamuya bağlı” sözü bu olguları tek başına kanıtlamaz.
:::

---

## Rehber BGYS içinde nasıl kullanılır?

**Varlık grubu → kritiklik → ilgili asgari tedbir → uygulama ve denetim izi**

| Rehberin parçası | İşlevi |
|---|---|
| Uygulama süreci | Kurumun mevcut güvenlik yönetimine bağlanır |
| Varlık grubu tedbirleri | Grubun niteliği ve kritikliğine göre seçilir |
| Teknoloji ve sıkılaştırma tedbirleri | İlgili ortamın güvenliğini ayrıntılandırır |

Kaynak: [Rehber v1.1, İçerik ve Güncelleme Süreci, s. 12](https://cdn.siberguvenlik.gov.tr/dokuman/26/05/260515153932_Bilgi%20Gu%CC%88venlig%CC%86i%20Rehberi.pdf).

::: {.notes}
Rehber kendi uygulama sürecini mevcut bilgi güvenliği yönetiminin yerine koymaz; kurumun sürece uyarlayarak katmasını ister. Varlık grubuna uygulanacak tedbir, grubun kritiklik derecesiyle ve ilgili teknoloji alanıyla ilişkilendirilir. Bu yapı ISO/IEC 27001 gereksiniminin aynısı değildir; kurumun kapsamına giriyorsa ek somut tedbir ve uyum çalışması sağlar.
:::

---

## Altı iddiayı sınıflayın

| No | İddia |
|---|---|
| 1 | “Sorumlu uygun güvenlik için teknik ve idari tedbir alır.” — KVKK m. 12(1) |
| 2 | “Erişim yetkilerini dönemsel gözden geçirin.” — KVKK Kurumu Rehberi |
| 3 | “ISO 27001 telekom firmalarına zorunludur.” — ders slaytı |
| 4 | “İŞLEME AMAÇLARI sayfasına amaç yazın.” — XLSM |
| 5 | “Controller ve processor riske uygun güvenlik sağlar.” — GDPR md. 32(1) |
| 6 | “2026 Rehberi tüm kurumlara uygulanır.” — toplantı sözü |

Her satıra **tür + uygulanabilirlik olgusu** yazın.

::: {.notes}
Kategoriler: bağlayıcı hüküm, yol gösterici, kurum aracı, doğrulanmamış iddia ve kaynağa aykırı iddia. 3 için düzenleme, tarih ve kapsam dayanağı verilmediğinden doğrulanmamış yazılır. 6, Rehberin Amaç ve Kapsam bölümündeki sınıra aykırıdır. Özellikle 3, Ders sunumu 2 slayt 13'ün eleştirel okunmasıdır; düzenleme, tarih ve kapsam bilgisi sunulmamıştır.
:::

---

## Sınıflama çözümü

| No | Tür | Gerekli olgu / eksik dayanak |
|---|---|---|
| 1 | Bağlayıcı hüküm | KVKK m. 2'deki işleme; vakada var |
| 2 | Yol gösterici | Bu risk için seçme gerekçesi |
| 3 | Doğrulanmamış iddia | Düzenleme, tarihi, kapsamı |
| 4 | Kurum aracı | Kullanımı kurum tercih eder |
| 5 | Bağlayıcı hüküm | GDPR md. 3 bağlantısı |
| 6 | Kaynağa aykırı iddia | Rehber s. 11 kapsamı kamu ve kritik altyapı ile sınırlar |

::: {.notes}
1 için form ve dosya sisteminde 12 adayın verisi işlenmektedir. 2'de öneri risk gerekçesiyle seçilir; rehberde bulunması tek başına evrensel zorunluluk doğurmaz. 5'te maddenin bağlayıcı olması, onun bu işleme uygulandığı anlamına gelmez. 6'daki “tüm kurumlar” ifadesi, Rehberin yayımlanmış kapsamıyla çelişir; belirli kurum için ayrıca kurum olgusu aranır.
:::

---

## KVKK m. 12(1): amaçtan tedbire

| Güvenlik amacı | Vakadaki soru |
|---|---|
| Hukuka aykırı işlemeyi önlemek | Kişisel cihaza kopya talimata uygun mu? |
| Hukuka aykırı erişimi önlemek | Firma tüm klasörü neden görebildi? |
| Muhafazayı sağlamak | Dosya korunuyor ve bulunabiliyor mu? |

**Uygun güvenlik düzeyi → teknik ve idari tedbir**

Kaynak: [KVKK Kurumu, veri güvenliği yükümlülükleri](https://www.kvkk.gov.tr/Icerik/2040/Veri-Guvenligine-Iliskin-Yukumlulukler).

::: {.notes}
Hüküm her kuruma aynı tedbir listesini vermez. Açık klasör ve kayıtsız erişim, bu vakada erişim sınırı ile kayıt ihtiyacını somutlaştırır. “Yedek sorunu” beyanının kopyalamaya izin verip vermediği ise kurum talimatıyla karşılaştırılmalıdır. Tedbir seçerken karşılık verdiği açığı yazmak gerekir.
:::

---

## Dış firma kurumun tedbir yükünü kaldırmaz

**Kurum yetkisi → firma işlemesi → birlikte tedbir sorumluluğu**

| Açık | Karşılığı |
|---|---|
| Sözleşmede veri güvenliği maddesi yok | Talimat, gizlilik, silme/iade hükmü |
| Bakım için tüm klasör açık | Bakım alanına sınırlı erişim |

Kaynak: KVKK m. 12(2), (4).

::: {.notes}
KVKK m. 12(2), başka biri sorumlu adına işlediğinde tedbirlerin alınmasında birlikte sorumluluk öngörür. m. 12(4) amaç dışı kullanım ve açıklamama yükümlülüğünü sorumlu ve işleyen için düzenler; görevden ayrılınca da sürer. Bu nedenle “firma yaptı” cümlesi kurumun sözleşmesini ve erişim yetkisini inceleme ihtiyacını ortadan kaldırmaz.
:::

---

## Denetim ve olay değerlendirmesi

| Hüküm | Bu olaydaki kayıt |
|---|---|
| KVKK m. 12(3): denetim | Oturumların tarihli inceleme tutanağı |
| KVKK m. 12(5): koşullu bildirim | Kopyanın kimlerin eline geçtiğini araştıran olay kaydı |

**Açık olgu:** Cihaz veya kopya başka biriyle paylaşıldı mı?

::: {.notes}
Denetim yalnız yazılı prosedürün varlığıyla gösterilmez; uygulama izi aranır (Ders sunumu 2, slayt 72). m. 12(5)'teki bildirim koşulunun bu olayda gerçekleşip gerçekleşmediği mevcut verilerle kesinleşmez. Çalışanın sözü kopyanın sonraki akıbetini açıklamaz. Yetkili rol olayı değerlendirir ve kararını dayanakla kaydeder; buradan süre veya kesin bildirim sonucu türetilmez.
:::

---

## Teknik ve idari tedbir birlikte işler

| Teknik örnek | İdari örnek |
|---|---|
| Alan düzeyinde yetki | Yetki matrisi ve görev tanımı |
| Oturum/işlem kaydı | İnceleme sorumlusu ve prosedürü |
| Yedekleme, şifreleme | Sözleşme, gizlilik, eğitim, denetim |

Kaynak: [KVKK Kurumu Kişisel Veri Güvenliği Rehberi](https://kvkk.gov.tr/SharedFolderServer/CMSFiles/7512d0d4-f345-41cb-bc5b-8d5cf125e3a1.pdf).

::: {.notes}
Oturum kaydı teknik olarak tutulup kimse tarafından okunmuyorsa davranış fark edilmeyebilir. Yetki matrisi de sistem izinleri uygulanmadıkça yalnız belge olur. İki tür tedbirin bağını vaka açığına göre kurun; tablodaki örnekler kapalı veya her kurum için tek tek zorunlu bir liste değildir.
:::

---

## GDPR md. 32: riskle orantılı güvenlik

**Teknoloji + maliyet + işlemenin niteliği/kapsamı/amacı + riskin olasılığı/ciddiyeti → uygun tedbir**

| Madde içindeki örnek | Vakayla bağı |
|---|---|
| 32(1)(a): takma adlandırma/şifreleme | Açıklanabilecek veri |
| 32(1)(b): gizlilik, bütünlük, erişilebilirlik, dayanıklılık | Kopya ve yanlış sürüm |
| 32(1)(c): erişimi geri getirme | Kayıt kaybı |
| 32(1)(d): düzenli test/değerlendirme | Tedbirin işleyişi |

Kaynak: [GDPR md. 32](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679).

::: {.notes}
Md. 32(1) veri sorumlusu ve işleyeni doğrudan anar. Md. 32(2) kayıp, yok olma, değiştirme, yetkisiz açıklama ve erişim risklerini özellikle sayar; yanlış sürüm “değiştirme” riskini görünür kılar. Örnek tedbirler her işlem için sabit paket değildir. Bu maddenin vakaya hukuken uygulanması md. 3 bağlantısına ayrıca bağlıdır.
:::

---

## Talimat ile sertifika farklı kanıttır

| GDPR konumu | Ayırt edici nokta |
|---|---|
| md. 32(4) | Yetki altındaki kişi talimat olmadan işlememeli |
| md. 32(3) | Sertifika, yükümlülüğü göstermede yalnız bir unsur olabilir |

**Vaka sorusu:** Salı oturumu yazılı talimatın sınırında mıydı?

::: {.notes}
Firmanın teknik erişimi bulunması, kişisel cihaza kopyalama talimatının bulunduğunu göstermez. Talimat, erişim talebi ve oturum izi birlikte incelenir. Sertifika tek bir oturumun uygulama kaydı yerine geçmez. GDPR'nin kapsamı kurulmadan md. 32 bu kurumun kesin hukuki yükü diye kayda yazılmaz.
:::

---

## Üç resmî parçanın ortak soruları

| Soru | KVKK m. 12 | GDPR md. 32 | Rehber v1.1 |
|---|---|---|---|
| Kim? | Sorumlu; işleyenle birlikte tedbir | Sorumlu ve işleyen doğrudan | Kamu kurumları ve kritik altyapı işletmeleri |
| Ölçüt? | Uygun güvenlik düzeyi | Risk ve işlem özellikleri | Varlık grubu kritiklik derecesi ve ilgili tedbir |
| Kanıt? | Denetim | Düzenli test/değerlendirme | Uyum planı ve uygulama/denetim kayıtları |

::: {.notes}
Benzer amaçlar aynı kapsam veya aynı kontrol listesi anlamına gelmez. KVKK m. 12(2) birlikte sorumluluğu, m. 12(3) denetimi açıkça düzenler. GDPR md. 32(1) riski etkileyen değişkenleri ve düzenli test sürecini sayar. Rehber v1.1'in Amaç ve Kapsam bölümü kamu kurumları ve kritik altyapı işletmelerini tanımlar; uygulama süreci varlık grupları ve kritiklik derecesi üzerinden işler (s. 11–13, 24–26).
:::

---

## Tedbiri dayanağıyla eşleştirin

| No | Öneri |
|---|---|
| 1 | BT sözleşmesine talimatla işleme ve iş sonunda silme/iade |
| 2 | Uzak oturum kaydı ve aylık inceleme |
| 3 | Değerlendirme tablosunda sürüm ve onay |
| 4 | Yedekten geri dönüş denemesi ve tutanak |
| 5 | Dönemsel birim içi kişisel veri denetimi |

Her satıra **teknik/idari tür + kaynak konumu** yazın.

::: {.notes}
Özellikle üçüncü öneride KVKK m. 12(1)'de “değiştirme” sözcüğü varmış gibi atıf yapmayın. Genel doğruluk ilkesi ve somut bütünlük sorunu ayrı gerekçelendirilir. Her önerinin gerçek bir açıklığa bağlanması gerekir.
:::

---

## Tedbir eşlemesinin çözümü

| No | Tür | Dayanak ve gerekçe |
|---|---|---|
| 1 | İdari | KVKK m. 12(2), (4); GDPR uygulanırsa md. 32(4) |
| 2 | Teknik + idari | KVKK m. 12(1); inceleme m. 12(3)'e kanıt |
| 3 | Teknik + idari | KVKK m. 4 doğruluk; GDPR uygulanırsa md. 32(2) değiştirme riski |
| 4 | Teknik | KVKK m. 12(1) muhafaza; GDPR uygulanırsa md. 32(1)(c), (d) |
| 5 | İdari | KVKK m. 12(3) |

::: {.notes}
1'de sözleşme işleyenin talimat sınırını belirler. 2'de kaydı tutmak ve incelemek iki ayrı iştir. 3'te iki metnin kelime seçimi eşitlenmez; KVKK m. 4'te doğru ve gerektiğinde güncel veri ilkesi vardır. 4'te yedeğin varlığından çok geri dönüşün çalışması sınanır. 5'te tarihli denetim kaydı uygulama kanıtıdır.
:::

---

## Senaryo A: verilen olgular

| Konu | Olgu |
|---|---|
| Kurum | Türkiye'de kurulu özel tüzel kişi; kritik altyapı hizmeti vermiyor; 12 aday Türkiye'de |
| AB bağlantısı | AB şubesi yok; hizmet AB'deki kişilere yönelmiyor |
| Dış BT | Yazılı destek sözleşmesi ve kurum talimatı var; güvenlik maddesi yok |
| Erişim | Tüm klasör açık; oturum kaydı yok; dosyalar kopyalandı |

**Kaynak → kapsam → kurum kararı → tedbir → kanıt**

::: {.notes}
Çözüm yalnız bu olgulara dayanır. AB bağlantılarının bu senaryoda bulunmaması, GDPR'nin her Türkiye kurumu için uygulanamayacağı anlamına gelmez. Rehber v1.1'in kapsamı ile bu kurumun özel ve kritik altyapı dışı olduğu olgusu birlikte okunur. Zincirin her halkasında kaynak konumu ile vaka olgusunu birlikte göstermek gerekir.
:::

---

## Senaryo A: kaynak ve kapsam çözümü

| Kaynak | Kayıt |
|---|---|
| KVKK m. 12(1), (2), (4) | Kurum form ve dosya sisteminde kişisel veri işler: m. 2; kurum sorumlu, firma işleyen: m. 3 |
| KVKK Kurumu Rehberi | Tedbir örneği sağlar; hükmün yerine geçmez |
| GDPR md. 3 | Verilen olgularla uygulanabilirlik gerekçesi kurulamadı |
| Rehber v1.1 | Bu özel kurum devlet teşkilatında değil, kritik altyapı hizmeti de vermiyor: verilen olgularla kapsam dışında |

::: {.notes}
KVKK için işleme biçimi ve roller birlikte yazılır. Firmanın yazılı sözleşme ve kurum talimatıyla çalışması işleyen ilişkisini destekler. Rehberin kapsam kararı s. 11'deki ölçüt ile vaka olgusuna dayanır. GDPR için de bu vaka olgularını aşan genel bir dışlama hükmü kurulmaz.
:::

---

## Senaryo A: kurum kararı

| Açık | Karar |
|---|---|
| Tüm klasöre erişim | Yalnız bakım gereken alana, talep-onayla erişim |
| Sözleşmede güvenlik hükmü yok | Talimat, gizlilik, silme/iade hükümleri |
| Kopyalanan dosyalar | Olay değerlendirmesi, firmadan silme teyidi |

**Birim sorumlusu önerir; yetkili yönetim onaylar.**

::: {.notes}
Karar veren rol belirtilmezse tedbirin kurumsal sahipliği belirsiz kalır. Sözleşme eki geçmişteki kopyayı otomatik silmez; olay incelemesi ayrı gereklidir. KVKK m. 12(2)'deki birlikte tedbir sorumluluğu, dış firmaya yalnız sözlü güvenmek yerine yetki ve sözleşme düzeni kurmayı gerektirir.
:::

---

## Senaryo A: açık → tedbir

| Açık | Teknik | İdari |
|---|---|---|
| Tüm klasöre erişim | Alan bazlı yetki | Yetki matrisi, talep-onay |
| Kayıtsız oturum | Oturum/işlem kaydı | Aylık inceleme sorumlusu |
| Kişisel cihaza kopya | Yerel kopyaya izin vermeyen yol | Talimat ve gizlilik hükmü |

Kaynak: KVKK m. 12(1)–(2); KVKK Kurumu Kişisel Veri Güvenliği Rehberi.

::: {.notes}
Alan bazlı yetki bakım için gerekmeyen belgelere erişim yolunu azaltır. Kayıt tek başına kopyalamayı engellemez ama tespit ve denetime veri sağlar; inceleyen rol de tanımlanmalıdır. Teknik kopya sınırı ve sözleşmedeki talimat hükmü birlikte kullanıldığında açık iki yönden ele alınır.
:::

---

## Senaryo A: kuruldu mu, işliyor mu?

| Kanıt | Gösterdiği |
|---|---|
| İmzalı sözleşme eki, tarih/sürüm | Kural kuruldu |
| Onaylı yetki matrisi | Yetki tanımlandı |
| Aylık oturum inceleme tutanağı | Yetki işletildi ve gözden geçirildi |
| Silme teyidi + olay değerlendirme sonucu | Kopya olayı izlendi |

::: {.notes}
“Prosedür var” yalnız tasarım iddiasıdır; gerçek oturumun incelendiğini göstermez. KVKK m. 12(3)'teki denetim ihtiyacı tarihli uygulama kaydına bağlanır. Firmanın silme teyidi cihazın ve dosyaların bütün akıbetini tek başına açıklamayabilir; olay değerlendirmesi bunu ayrıca inceler.
:::

---

## Senaryo A: bildirimi hangi olgu belirler?

| Bilinen | Açık soru | Karar izi |
|---|---|---|
| Kopya kişisel cihaza alındı | Başkasının eline geçti mi, cihaz paylaşıldı mı, bakım talimatında kopya var mı? | Olay değerlendirmesi ve yetkili karar |

Kaynak: KVKK m. 12(5).

::: {.notes}
Madde, verilerin kanuni olmayan yollarla başkalarınca elde edilmesi hâlinde bildirim öngörür. Bu olayın koşula girip girmediği verilen olgularla kesinleşmez. Dolayısıyla kayda “bildirim gerekir” veya “gerekmez” yazmak yerine hangi bilgiye ve kimin kararına ihtiyaç duyulduğu yazılır.
:::

---

## Yanlış doldurulmuş zinciri düzeltin

| Halka | Yazılmış olan | Eksik bağ |
|---|---|---|
| Kaynak | “KVKK” | Madde/fıkra |
| Kapsam | “Kişisel veri var” | İşlem, roller, kapsam hükmü |
| Karar | “Rıza metni imzalatıldı” | Erişim açığına karşı karar ve onaylayan |
| Tedbir | “ISO belgesi” | Somut koruma işlemi |
| Kanıt | “Prosedür var” | Tarih, sürüm ve uygulama izi |

::: {.notes}
Her hücre dolu görünse de bir sonraki halkayı gerekçelendirmiyor. Rıza metni kopyalamayı engellemez. Sertifika bu klasörün Salı oturumundaki erişimini açıklamaz. Prosedürün gerçekten işletilip işletilmediği kayıtla görülür. Düzeltme, yalnız daha çok sözcük yazmak değil, halkaları kaynak ve olguyla bağlamaktır.
:::

---

## Yanlış sürümün ayrı zinciri

**KVKK m. 4 doğruluk + m. 12(1) → onaylı sürüm → sürüm kontrolü → düzeltme kaydı**

| Olay | Kurum kararı | Kanıt |
|---|---|---|
| İK'ya 3. sürüm gitti; güncel 4 | Onaylı sürüm gönderilir; eski sürüm geri çekilir | İK düzeltme yazısı ve tarihli 4. sürüm |

::: {.notes}
Bu olayın açığı dış firmanın kopyasından farklıdır: karar yanlış değerlerle verilebilir. KVKK m. 4'te doğru ve gerektiğinde güncel olma ilkesi vardır. m. 12(1) uygun güvenlik tedbirleri bağlamında da okunabilir; metne “yanlış sürüm” ifadesi eklenmez. Yeni dosyayı göndermek kadar yanlış dosyanın geri çekildiğini göstermek de gerekir.
:::

---

## Doğrulama kaydının alanları

| Halka | Alanlar |
|---|---|
| İşlem | Adım, veri alanı, amaç, ilgili kişi/sorumlu/işleyen |
| Kaynak | Yayımlayıcı, sürüm/tarih, madde/bölüm, erişim tarihi |
| Kapsam | Gerekçe veya eksik olgu |
| Karar/tedbir | Onaylayan rol, teknik ve idari işlem |
| Kanıt/durum | Belge-kayıt; kuruldu/işliyor; doğrulanmış/varsayım/açık soru |

::: {.notes}
“T.C. kimlik no” veri alanı, “sözleşme işlemi” amaç, “yetki sınırı” tedbirdir; aynı hücrede tutulmazlar. XLSM çalışma dosyasında ENVANTER, KATEGORİ, KİŞİSEL VERİ LİSTESİ, İŞLEME AMAÇLARI ve TEKNİK VE İDARİ TEDBİRLER ayrı sayfalardır; bu alan ayrımı alınır, dosya zorunlu biçim veya hukuki görüş sayılmaz. Sürüm ve erişim tarihi, dış kaynak değiştiğinde bağlı kararları bulmayı sağlar (Ders sunumu 2, dış kaynaklı doküman kaydı).
:::

---

## Bağımsız kayıt A: değerlendirme

| Veri | Olgu |
|---|---|
| Tablo | Ad, kimlik no, telefon, e-posta, okul, not ortalaması |
| İş için kullanılan | Başvuru no, okul, not ortalaması |
| Mevcut yetki | Dört çalışanın dördü de tam erişimli |

**Kayıt:** kaynak/konum, kapsam, onaylayan, tedbir, kuruldu/işliyor kanıtı.

::: {.notes}
Senaryo A'nın kurum olguları geçerlidir. Değerlendiren kişi kurum çalışanıdır; bu adım için ayrı işleyen yaratılmaz. Gereken üç alanı tüm tablodan ayırın. Kaynağa yalnız “KVKK” yazmak yetmez; m. 12(1)'deki yükümlülük ile Rehberin örnek işlevi ayrı belirtilir. Karar ve uygulama kaydı da ayrı yazılır.
:::

---

## Bağımsız kayıt B: sonuç duyurusu

| Seçenek | Herkese açık sayfadaki bilgi | Vaka süresi |
|---|---|---|
| A | Başvuru no + kabul/yedek/ret | 30 gün |
| B | Ad-soyad + kabul/yedek/ret | 30 gün |

12 aday için **açıklama, gereklilik sorusu, kurum tercihi ve kanıtı** ayrı kaydedin.

::: {.notes}
B seçeneğinde adla sonucun herkese gösterilmesi verinin açıklanmasıdır. Bunun amaca gerekli olup olmadığı hukuki değerlendirme gerektirir; güvenlik tasarımı seçimiyle aynı karar değildir. A seçeneği daha az veri gösterebilir, ancak numarayı adayla eşleştirenler için belirlenebilirlik devam eder. Otuz gün vaka bilgisidir, kanuni süre diye yazılmaz.
:::

---

## Kayıt A: gerekçeli cevap

| Alan | Kayıt |
|---|---|
| İşlem/roller | Değerlendirme; 12 aday ilgili kişi, kurum sorumlu, bu adımda işleyen yok |
| Kaynak/kapsam | KVKK m. 12(1); dosya işlemi m. 2, roller m. 3 |
| Karar | Yalnız gerekli üç alan; birim sorumlusu önerir, yönetim onaylar |
| Tedbir | Ayrı görünüm ve rol yetkisi; matris ve görev tanımı |
| Kanıt | Onaylı matris: kuruldu; erişim inceleme tutanağı: işliyor |

::: {.notes}
Altı alanın tabloda bulunması değerlendiricinin altısını da görmesini gerektirmez. Ayrı görünüm ve rol yetkisi erişim yüzeyini azaltır. Rehber erişim sınırı için örnek olarak gösterilebilir. Görevli gerçekten ek alanlara ihtiyaç duyuyorsa farklı karar mümkündür; gerekçe, yetkili onay ve kanıt olmadan “herkes erişsin” cevabı tamamlanmış sayılmaz.
:::

---

## Kayıt B: gerekçeli cevap

| Alan | Kayıt |
|---|---|
| İşlem | B: ad ile sonucu herkese açıklama |
| Açık soru | Bu açıklama amaca gerekli mi? — hukuk/uyum rolü |
| Kurum tercihi | A ile daha az veri gösterme; risk sıfırlanmaz |
| Kanıt | Onaylı duyuru kararı, tarihli sayfa kopyası, kaldırma kaydı |

::: {.notes}
KVKK m. 3 açıklamayı işleme sayar ama B'nin hukuken serbest veya yasak olduğuna tek başına cevap vermez. A tasarımı riski azaltan kurum tercihi olarak yazılabilir; doğrudan kanuni zorunluluk olarak yazılmaz. Başvuru numarası kurumun eşleme kaydında kişiye bağlı kaldığından A tamamen kişisel verisiz bir sonuç değildir.
:::

---

## Senaryo B: yeni olgular

| Yeni bilgi | Açtığı soru |
|---|---|
| İngilizce başvuru sayfası | AB'deki kişilere yönelik hizmet mi? |
| AB'de yaşayan iki aday başvurdu | Hedeflenmiş mi, rastlantısal mı? |
| Formda analitik araç var | Hangi veri ve davranış izleniyor? |
| Önceki özel statüsüne karşı “kamuya bağlı olabilir” sözü | Kurumun belgeli hukuki niteliği ne? |

::: {.notes}
İngilizce sayfa ve iki başvuru tek başına GDPR md. 3(2)(a) kararı verdirmez (gerekçe 23). Analitik aracın varlığı md. 3(2)(b)'yi araştırmayı gerektirir, izleme işlevini kanıtlamaz. Sözlü kamu bağlantısı iddiası, önceki kurum tanımını tek başına değiştirmez. Eksik olgu ile onu doğrulayacak belge ya da kişiyi kaydetmek gerekir.
:::

---

## Senaryo B: eksik olgu tablosu

| Kaynak/konum | Bilinen | Sorulacak soru | Kimden? |
|---|---|---|---|
| GDPR md. 3(1) | Şube bilgisi yok | AB'de yerleşik birim var mı? | Yönetim |
| GDPR md. 3(2)(a) | İngilizce sayfa, iki başvuru | ? | ? |
| GDPR md. 3(2)(b) | Analitik araç | ? | ? |
| Rehber kapsamı | Kamuya bağlılık sözü | ? | ? |
| KVKK m. 2–3 | Türkiye'de kişisel veri işleme | ? | ? |

::: {.notes}
Her boşluğu kapsam hükmünün aradığı olguyla doldurun. Hizmetin yönelimi, analitik aracın gerçek işlevi ve kurumun hukuki niteliği ayrı sorulardır. KVKK başvuru işlemi için Senaryo A'da zaten gerekçelendirilmiştir; analitik aracın topladığı alanlar ise yeni veri akışı incelemesi ister.
:::

---

## Senaryo B: gerekçeli cevap

| Konum | Eksik olgu ve bilgi sahibi |
|---|---|
| GDPR md. 3(1) | AB birimi var mı? — yönetim |
| GDPR md. 3(2)(a) | AB'ye yönelik tanıtım/çağrı var mı? — yönetim + hukuk/uyum |
| GDPR md. 3(2)(b) | Araç AB'deki davranışları izliyor mu? — BT + hukuk/uyum |
| Rehber v1.1, s. 11 | Kurum devlet teşkilatında mı; kritik altyapı hizmeti veriyor mu? — kuruluş belgesi + yönetim |
| KVKK m. 2–3 | Başvuru için kapsam olgusu var; analitik alanları ayrıca BT'den alınır |

::: {.notes}
“GDPR uygulanır, çünkü İngilizce sayfa var” tek işaretten hüküm üretir. “GDPR uygulanmaz, çünkü kurum Türkiye'de” md. 3(2)'yi yok sayar. Analitik aracın neyi ve kimi izlediği teknik olarak belirlenmelidir. Rehberin kapsam ölçütü s. 11'den bilinir; değişen iddiaya karşı kurumun belgeli statüsü incelenir. KVKK m. 12 tedbirleri bu sorular yanıtlanana kadar bekletilmez.
:::

---

## Açık kapsam, güvenlik kararını durdurmaz

| Kayıt cümlesi | Etiket |
|---|---|
| “KVKK m. 12 tedbirleri başvuru verisi için gerekir.” | Dayanağı kurulmuş |
| “Düzenli test yapalım; GDPR md. 32 yaklaşımını örnek aldık.” | Kurum tercihi |
| “GDPR md. 32 bu kurumu yükümlü kılıyor.” | Kapsam sorusu açık |

::: {.notes}
KVKK'nın bu başvuru işlemine uygulanabilirliği vaka olgularıyla kurulmuştur. Kurum GDPR'deki riske uygun tedbir ve düzenli test fikrini iyi uygulama olarak benimseyebilir. Bu tercih, md. 3 koşulları gösterilmeden hukuki GDPR yükümlülüğü diye etiketlenmez.
:::

---

## Kayıt cümlelerini etiketleyin

| No | Cümle |
|---|---|
| 1 | “Firma kurum talimatıyla çalışır; veri işleyendir.” |
| 2 | “Kopyalanan dosyalar başkasına gitmedi.” |
| 3 | “Senaryo B'de GDPR uygulanmaz.” |
| 4 | “KVKK m. 12(5) bildirimi üç gün içinde ister.” |
| 5 | “2026 Rehberi özel kurumda uzak erişim kaydını zorunlu kılar.” |
| 6 | “Sorumlu işleyenle birlikte tedbirlerden sorumludur; KVKK m. 12(2).” |

**Etiketler:** doğrulanmış · varsayım · açık soru · dayanağı gösterilmemiş iddia.

::: {.notes}
Her etiket için vaka olgusunu veya kaynak konumunu da yazın. “Üç gün” gibi bir sayı tanıdık görünse bile verilen konumdan çıkmıyorsa kabul edilmez. “Yanlış” demekle yetinmek yerine cümlenin hangi bilgiyle düzeltileceğini belirtin.
:::

---

## Etiketlerin çözümü

| No | Sonuç | Neden |
|---|---|---|
| 1 | Doğrulanmış vaka ilişkisi | Sözleşme/talimat ve rol tanımı var |
| 2 | Varsayım | Cihazın ve kopyanın akıbeti teyit edilmedi |
| 3 | Açık soru | GDPR md. 3(2) olguları eksik |
| 4 | Dayanağı gösterilmemiş iddia | m. 12(5)'e kaynaksız süre eklendi |
| 5 | Dayanağı gösterilmemiş iddia | Özel kurum için kapsam ve uzak erişim kontrolünün konumu gösterilmedi |
| 6 | Doğrulanmış hüküm | KVKK m. 12(2) konumuyla gösterildi |

::: {.notes}
2'de yalnız çalışanın sözü varsa silme teyidi ve olay incelemesi gerekir. 3'te Türkiye'de yerleşiklik, md. 3(2) sorusunu kapatmaz. 4'te bildirim yükümlülüğünün varlığı ile uydurulmuş süreyi ayırın; sayıyı çıkarın. 5'te rehberin s. 11 kapsamı ile vakanın özel kurum olgusu karşılaştırılır; ayrıca iddia edilen uzak erişim kontrolünün yeri gösterilmelidir.
:::

---

## Kaynak değiştiğinde hangi kayıt açılır?

**Olgu:** Kurum, 01.03.2026 tarihli Rehberin kendisine uygulanmadığını dayanağıyla kaydetti. Altı ay sonra yeni sürüm yayımlandı.

| Satır | Yeniden incelenir mi? |
|---|---|
| Rehbere dayanan tedbirler | ? |
| Rehber için “kapsam dışı” kararı | ? |
| KVKK m. 12'ye dayanan tedbirler | ? |

::: {.notes}
Sürüm ve erişim tarihi bulunursa hangi kararın hangi metne bağlı olduğu anlaşılır. Yeni Rehber, kapsam dışı kararını da etkileyebilir. KVKK m. 12 satırlarının dayanağı ayrı kaynaktır. Ders sunumu 2 slayt 79'daki yasal değişim fikri burada somut kayıt ilişkisine bağlanır.
:::

---

## Değişiklikte bağlı satırlar incelenir

| Satır | Gerekçe |
|---|---|
| Rehber dayanaklı tedbir | Tedbir içeriği değişmiş olabilir |
| Rehber “kapsam dışı” kararı | Kapsam değişmiş olabilir |
| KVKK m. 12 dayanaklı tedbir | Kendi kaynağı değiştiğinde açılır |

::: {.notes}
Yeni sürüm çıkması eski kararın otomatik yanlış olduğu anlamına gelmez; ilgili bölüm eski kararla karşılaştırılır. Kaynak konumu ve sürüm alanı yoksa etkilenen satırlar güvenilir biçimde bulunamaz. Kayıt bu nedenle yalnız sonuç değil, kararın dayanak izidir.
:::

---

## Yükümlülük iddiasına beş soru

**Kaynak ve konum → tür → kapsam olgusu → yetkili kurum kararı → tarihli kanıt**

| Zayıf cevap | Denetlenebilir cevap |
|---|---|
| “Rıza metni var, sorun yok.” | “KVKK m. 12(1)–(2) için erişim sınırlandı; sözleşme ve oturum kayıtları inceleniyor.” |

::: {.notes}
İkinci cevap kaynak konumunu, erişim açığına verilen kararı ve uygulama kanıtını bağlar. Bildirim koşulu olay incelemesinde kalır; Senaryo B'deki GDPR bağlantısı ve kurum statüsü ayrıca doğrulanır. Kaynak adı, imza veya prosedür başlığı tek başına denetlenebilir zincir kurmaz.
:::

---

## Kaynaklar

- [6698 sayılı Kişisel Verilerin Korunması Kanunu, m. 2, 3, 4, 12, 28](https://www.mevzuat.gov.tr/Metin1.Aspx?MevzuatIliski=0&MevzuatKod=1.5.6698&No=6698&Tertip=5&Tur=1)
- [KVKK Kurumu: veri güvenliği yükümlülükleri, m. 12 açıklaması](https://www.kvkk.gov.tr/Icerik/2040/Veri-Guvenligine-Iliskin-Yukumlulukler)
- [KVKK Kurumu: Kişisel Veri Güvenliği Rehberi](https://kvkk.gov.tr/SharedFolderServer/CMSFiles/7512d0d4-f345-41cb-bc5b-8d5cf125e3a1.pdf)
- [EUR-Lex: GDPR md. 3, 4, 32 ve gerekçe 23](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679)
- [Siber Güvenlik Başkanlığı: Bilgi ve İletişim Güvenliği Rehberi, v1.1 (01.03.2026)](https://cdn.siberguvenlik.gov.tr/dokuman/26/05/260515153932_Bilgi%20Gu%CC%88venlig%CC%86i%20Rehberi.pdf)
- Ders sunumu 1, slayt 22/34; Ders sunumu 2, slayt 5/8/13/72/79.

::: {.notes}
Eski ders sunumları hüküm kaynağı değil, iddiaları eleştirel okumak için kullanılan girdilerdir. Rehberin sürümü ve kapsamı kendi künyesi ile Amaç ve Kapsam bölümünden alınmıştır. Her kurum kararı, kaynak konumu ile işleme olgusuna bağlanır.
:::
