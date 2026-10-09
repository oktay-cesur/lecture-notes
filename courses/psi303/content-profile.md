# Ders Profili: PSİ 303 Davranışsal İstatistik için Yazılım Uygulamaları

Bu belge PSİ 303'ün bu projedeki (`lecture-notes`) ders-özel içerik profilidir. Konu sırasını ve haftalık dağılımı tasarlamaz; planlama ve yazım işlerinin uyacağı kurulum, araç, süre, kaynak ve terminoloji kararlarını kaydeder. Genel yazım kuralları ve eğitmen profili ayrıca geçerlidir; buradaki tercihler yalnız bu derse aittir ve global eğitmen profiline taşınmaz.

Her maddede dayanak türü ayrılır: **[Belge]** resmî izlence ifadesi, **[Kullanıcı]** kullanıcının açık tercihi, **[Mevcut not]** projede yayımlanmış ders sayfası/notlarında yerleşmiş uygulama, **[Varsayım]** görev kapsamında gerekçeyle seçilen ve onay bekleyen karar.

## Dayanaklar

| Kaynak | Konum | Not |
| --- | --- | --- |
| Resmî izlence (metin çıkarımı) | `courses/psi303/.content/cache/onceki-notlar/izlence.txt` | Doğuş Üniversitesi FEF Psikoloji; özgün PDF bu projede yok, metin çıkarımı esas alındı. |
| Önceki dış proje profili | `courses/psi303/.content/cache/onceki-notlar/onceki-content-profile.md` | Dış projedeki `izlence/PSİ 303.pdf` ve `.content/curriculum/topic-map.md` K01 atıfları bu projede doğrulanamadı. |
| Güncel ders sayfası | `courses/psi303/crs-psi303.md` | Yayımlanan güncel kurulum; araç, kaynak ve değerlendirme ifadesi. |
| Güncel notlar | `courses/psi303/notes/tp_*.md` (6 dosya) | Yalnız araç/kaynak kullanımı için tarandı; içerik denetimi yapılmadı. |

## Temel Bilgiler [Belge]

- **Kod / ad:** PSİ 303 — Davranışsal İstatistik için Yazılım Uygulamaları
- **Program / düzey:** Psikoloji lisans, fakülte düzeyi, 5. yarıyıl, zorunlu, örgün, Türkçe
- **Yapı / kredi:** 2+1 (T+U), 3 kredi, 7 AKTS; AKTS hesabında ders süresi 14 hafta × 3 saat
- **Önkoşul:** Yok
- **Devam:** %50 devam zorunluluğu; yüz yüze ders
- **Takvim:** 14 haftalık konu listesi; 7. hafta ara sınav, 15. hafta final. Vize kapsamı 1–6. haftalardır.

## Öğrenme Çıktıları [Belge]

1. Ö01 — İstatistiğin kavramlarını ve temel terimlerini tartışır ve uygular.
2. Ö02 — Betimsel ve çıkarımsal istatistikler arasındaki farkı ayırt edebilir.
3. Ö03 — Belirli hipotez test etme durumlarıyla ilişkili olduğu için yönelimli ve yönelimsiz hipotezleri formüle etmeyi bilir.
4. Ö04 — SPSS'e ham veri girmeyi bilir.
5. Ö05 — Belirli bir veri seti için uygun istatistiksel testi belirler, uygular ve sonuçları değerlendirir.
6. Ö06 — Sonuçları rapor etmeyi bilir.

Ö04 metnindeki “SPSS” resmî ifadedir ve aynen korunur; araç tercihi aşağıda ayrıca kaydedilmiştir. Çıktı metinleri yeniden yazılmaz.

## Resmî Kapsam ve Belge İçi Tutarsızlıklar [Belge]

- **Dersin içeriği:** SPSS'e giriş, veri dosyası yaratma ve düzeltme, verileri yönetme, betimsel istatistik ve normallik testi, t-testleri, tek yönlü ANOVA ve post-hoc, gözden geçirme, iki yönlü ANOVA ve ANCOVA, tekrarlı ölçümler ANOVA, iki değişkenli korelasyon, doğrusal regresyon, hiyerarşik regresyon, güvenirlik, grafik yapma.
- **Resmî vize haftaları:** 1 Ders bilgisi ve SPSS'e giriş · 2 Veri dosyası yaratma ve düzeltme · 3 Verileri yönetme · 4 Betimsel istatistik ve normallik testi · 5 T-testleri · 6 Tek yönlü varyans analizi ve post-hoc testler.
- **Amaç–takvim farkı:** “Dersin Amacı” z-testi, ANCOVA dışında lojistik regresyon, faktör analizi, çoklu regresyon ve parametrik olmayan teknikleri de anar; bunlar haftalık konu listesinde yoktur. Planlama haftalık listeyi bağlayıcı kapsam sayar; amaçtaki ek teknikler kapsam genişletmesi olarak ancak kullanıcı kararıyla eklenir.
- **İçerikte olup haftaya bağlanmayan:** “Gözden geçirme” ve “Grafik yapma” ayrı haftaya atanmamıştır. Güncel sayfa gözden geçirmeyi 6. haftaya, grafiği 4. haftaya yerleştirmiştir [Mevcut not].
- **Biçimsel hatalar:** Haftalık listede Ö7'ye atıf vardır ama yalnız Ö01–Ö06 tanımlıdır; 14. hafta “Gvenirlik” yazım hatasıyla 13. haftayı tekrarlar. Atıflar çıktı eşlemesinde güvenilir dayanak sayılmaz.
- **Amaçtaki araştırma projesi:** Öğrencilerin veri toplayıp APA formatında rapor hazırlaması amaçta geçer; değerlendirme tablosunda proje katkısı %0'dır. Bu fark aşağıda değerlendirme bölümünde ayrı tutulur.

## Süre ve Kapsam Politikası

- **Resmî yapı korunur:** 2 saat teori + 1 saat uygulama [Belge].
- **Vize haftaları için teori süresi:** 1–6. haftaların her biri için 120 dakikalık öğretim akışı planlanır. Ek 60 dakikalık uygulama bu süreye sayılmaz; uygulama ayrı birimdir [Kullanıcı].
- **Sürenin dayanağı:** 120 dakika süre etiketi veya dolgu metinle değil; somut veri tablosu, adım adım çözümlü hesap, gerekçeli yorum, yöntem/sonuç karşılaştırması, görsel ve kısa alıştırmayla taşınır [Kullanıcı].
- **Operasyonel bilginin yeri:** Dakika dağılımı, öğretmen kararları, üretim gerekçesi ve sahne talimatı öğrenci notuna girmez; plan/brief gibi operasyonel belgelerde kalır [Kullanıcı].
- **Kapsam:** İki saatlik istek, resmî konuların derinlik ve örnekle tamamlanmasıdır; resmî konu listesine yeni teknik eklenmesi anlamına gelmez [Kullanıcı]. 8–14. haftalar bu profilin süre kararının dışındadır.

## Araç ve Uygulama Politikası

- **Resmî araç:** IBM SPSS Statistics (Dersin İçeriği, 1. hafta, Ö04) [Belge].
- **Güncel tercih:** jamovi ana uygulama yolu; IBM SPSS eşdeğer alternatif yol. Excel ve JASP yardımcı/alternatif olarak anılabilir [Kullanıcı; Mevcut not: `crs-psi303.md` “Dersin Amacı” son paragrafı ve notlardaki jamovi/SPSS eşlemeleri].
- **Önceki profilden fark:** Önceki dış profil “yazılım bağımsız; Excel, JASP, jamovi ve gerekirse SPSS” diyordu. Bu proje için jamovi önceliği ve SPSS eşdeğerliği geçerlidir; yazılım bağımsızlık ilkesi yöntem–yorum odağı olarak sürer.
- **Araç eşdeğerliği varsayılmaz:** Araçların aynı analiz seçeneğini, varsayılanı ve çıktı düzenini sağladığı varsayılmaz; fark olan yerde (ör. ölçüm türü adlandırması, varsayılan düzeltmeler) iki yol ayrı belirtilir.
- **Python/Jupyter** öğrenci önkoşulu değildir ve öğrenci uygulamasında kullanılmaz.
- **Menü ezberi hedef değildir:** Uygulama, teorik gerekçeyi küçük psikoloji verisi üzerinde sınar; beklenen yorum ürünü ve bağımsız doğrulama adımı (elle/küçük veride beklenen sonuçla karşılaştırma) içerir.
- **Veri setleri:** Kurgusal öğretim verisi kullanılır, gerçek katılımcı verisi kullanılmaz; indirilebilir dosyalar `data/psi303/` altındadır ve `Yonerge` sayfası taşır [Mevcut not].

## Kaynak Politikası

- **Resmî izlence kaynakları [Belge]:** Field (2013) *Discovering Statistics Using IBM SPSS Statistics*; Can (2016) *SPSS ile Bilimsel Araştırma Sürecinde Nicel Veri Analizi*; Yemenici vd. (2020); İyilikçi (2020); Oğuzhan vd. (2024).
- **Bu proje için temel kaynaklar [Kullanıcı; Mevcut not]:** Salkind, *Statistics for People Who (Think They) Hate Statistics* (7. baskı) ve Excel sürümü; jamovi ve IBM SPSS resmî dokümantasyonu. Bu yeni kaynaklar bu dersin içeriğinde temel alınır; resmî izlence kaynakları ve önceki notlar ikincil başvurudur. Tercih yalnız PSİ 303'e aittir.
- **Önceki notlar** (`courses/psi303/.content/cache/onceki-notlar/`): anlatım, sıra, örnek ve görsel açısından izlenebilir öğeleri uyarlanır; doğrudan kopyalanmaz, tek doğru kabul edilmez ve teknik hataları korunmaz. Seçim ve hata işaretleme kaynak analizi işlerinin konusudur.
- **BGT201 kaynakları** istatistik kaynağı yerine geçmez; yalnız gerçekten ilgili eksiklikte (ör. araştırma verisinde kimlik alanı, erişim ve gizlilik) yardımcı olarak kullanılır.

## Terminoloji, Notasyon ve Raporlama

- **Raporlama:** APA biçimi; istatistik simgeleri italik (*M*, *SD*, *t*, *F*, *p*, *r*), serbestlik derecesi ve etki büyüklüğüyle birlikte [Belge: amaç ve Ö06; ayrıntı Varsayım].
- **Yerleşik terimler [Mevcut not]:** hedef evren–örneklem, betimleme–çıkarım, gözlem birimi, kimlik alanı–değer alanı, veri türü–ölçüm düzeyi (nominal/ordinal/aralık/oran), veri sözlüğü, eksik kayıt–kodlama hatası, ters puanlama, türetilmiş puan, standart hata, Tip I/II hata.
- **Yazılım eşlemeleri [Mevcut not]:** aralık ve oran düzeyi jamovi'de *Continuous*, SPSS'te *Scale*; kimlik sütunu jamovi'de *ID*, SPSS'te analiz dışı tutulan nominal alan. Yazılımın önerdiği tür başlangıçtır, veri sözlüğüyle doğrulanır.
- **İngilizce karşılık:** Türkçe terim esas; yazılım arayüzünde görünen İngilizce ad ilk kullanımda parantezde verilir [Varsayım].

## Teori–Uygulama Yaklaşımı [Kullanıcı; önceki profilden korunur]

Her konu araştırma sorusu, kavramsal ayrım, yöntemin neden gerektiği, işleyiş mekanizması ve geçerlilik koşullarıyla kurulur. Kısa hesap veya formel ara adım sonucu anlaşılır kıldığında kullanılır; ispat ve formül türetmesi varsayılan hedef değildir. Hedef öğrenci psikoloji 3. sınıfıdır: matematiksel olgunluk sınırlı, araştırma yöntemi bağlamı tanıdık kabul edilir; önkoşul resmî olarak yoktur, bu yüzden temel kavramlar ilk kullanıldıkları yerde kurulur.

## Değerlendirme (Ayrı Kaynaklar)

| Kaynak | Ara sınav | Ödev | Proje | Yarıyıl sonu sınavı |
| --- | --- | --- | --- | --- |
| Resmî izlence [Belge] | %30 | %10 | %0 | %60 |
| Güncel ders sayfası `crs-psi303.md` [Mevcut not] | %40 | — | %60 (yarıyıl sonu proje) | — |

Fark açık bırakılmıştır; bu görev değerlendirme sistemini değiştirmez. İçerik üretimi değerlendirme ağırlığına göre şekillenmez; yalnız vize kapsamının 1–6. haftalar olduğu iki kaynakta ortaktır.

## Açık Kalan Kritik Bilgiler

- Değerlendirme ağırlıklarında belge (%30/%10/%60) ile güncel sayfa (%40/%60 proje) arasındaki farkın hangisinin geçerli olduğu kullanıcı kararıdır; içerik planlamasını engellemez.
- Dönemin somut tarihleri (hafta–tarih eşlemesi, vize tarihi) bu girdilerde yok.
- “Yeni kaynaklar” bu profilde Salkind kitapları ve araç dokümantasyonu olarak yorumlandı (güncel ders sayfasının açık beyanına dayanarak); farklı bir kaynak seti kastedildiyse güncellenmelidir.
- Genel yazım kuralları ve eğitmen profili bu çalışmada okunamadı (agent-skills-prompts dizinine erişim izni yoktu); profil yalnız ders-özel kararları içerir, global kurallarla çakışan bir hüküm koymaz.
- Güncel 1–6. hafta notlarının konu dağılımı resmî haftalık başlıklardan farklılaşır (ör. 1. hafta “Araştırma sorusundan veriye”, 4. haftada çıkarıma giriş); bu bir dönem planlama konusudur ve burada karara bağlanmamıştır.
