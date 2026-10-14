---
title: "PSİ 303 Davranışsal İstatistik için Yazılım Uygulamaları"
subtitle: "Ders Notları"
type: syllabus
description: PSİ 303 dersi için araştırma sorusundan veriye, veri yapısı ve betimsel/çıkarımsal istatistiğe uzanan, araç-bağımsız planlanmış ders notları ve uygulamalar.
tags:
  - output
sidebar: psi303
---
::: {.callout-warning}

## Taslak Çalışma Notu Seti

Bu ders notları seti, PSİ 303 dersi için resmî izlence ve kaynak kitaplar (Salkind, *Statistics for People Who (Think They) Hate Statistics*) temel alınarak hazırlanmıştır. Hafta 1–6 notları ara sınav kapsamını oluşturur.
:::

## Dersin Amacı

Bu ders, bir araştırma sorusunu elde edilen veriyle ilişkilendirmeyi ve bu ilişkiyi uygun istatistiksel yöntemle sınamayı öğretir. Derse "elimizdeki veriyle ne söyleyebiliriz, hangi topluluğa ne kadar güvenle genelleyebiliriz?" sorusuyla başlıyoruz; ardından bir veri tablosunun nasıl kurulduğunu, hangi sütunun kimlik hangi sütunun ölçüm olduğunu ve ölçüm düzeyinin sonraki analiz kararını nasıl sınırladığını inceliyoruz. Dönemin geri kalanında betimsel istatistikler, hipotez testi mantığı, t-testleri, varyans analizi, korelasyon ve regresyon konuları aynı temel soru etrafında ele alınacaktır: veri, araştırma sorusunu yanıtlamaya yeterli mi, ve bu yanıt hangi sınırlar içinde geçerli?

Ders **2 saat teori + 1 saat uygulama** biçimindedir. Uygulamalarda **jamovi** ana yol, **IBM SPSS** (resmî izlencenin aracı) eşdeğer alternatif yoldur; Excel ve JASP de kullanılabilir. Araç seçimi, bütün araçların aynı analizi ve çıktıyı sağladığı varsayımına dayanmaz — odak, veri, yöntem ve yorum arasındaki ilişkidir; yazılım menüsü ezberi hedef değildir.

## Notları Nasıl Takip Etmelisiniz?

1. **Önce soruyu ve evreni netleştirin.** Bir tabloya veya teste geçmeden önce hangi soruya, hangi topluluk hakkında cevap aradığınızı belirleyin.
2. **Betimleme ile çıkarımı ayırın.** Elinizdeki veriden doğrudan doğrulanabilen bir ifade ile bütün evrene genellenen bir iddia aynı güvenilirlikte değildir.
3. **Değişkeni tanımadan hesaba geçmeyin.** Bir sütunun kimlik mi değer mi, hangi ölçüm düzeyinde olduğunu bilmeden alınan her ortalama veya yapılan her test anlamsız olabilir.
4. **Yazılımın önerisini doğrulayın.** jamovi veya SPSS'in otomatik önerdiği veri türü/ölçüm türü başlangıçtır, doğrulama değildir; veri sözlüğünüzle karşılaştırın.
5. **Sonucu doğrulayın.** Bir analiz çalıştı diye doğru kabul etmeyin; küçük ve bilinen bir veri kümesinde sonucun beklentiyle örtüşüp örtüşmediğini kontrol edin.
6. **Konu bağlantılarını takip edin.** Örneklem, ölçüm düzeyi, hipotez ve test seçimi birbirinden bağımsız başlıklar değildir; bir haftanın kararı sonraki haftanın önkoşuludur.

::: {.callout-tip}

## Önerilen Çalışma Döngüsü

Araştırma sorusunu ve hedef evreni belirle → veriyi/tabloyu incele → betimleme mi çıkarım mı olduğunu ayır → uygun yöntemi seç → yazılımda uygula → çıktıyı APA formatında yorumla → sınırlılığı belirt.

İstatistikte doğru hesaplama kadar, **bu yöntemin bu araştırma sorusu için neden gerektiğini** açıklayabilmek önemlidir.
:::

::: {.callout-note}

## Temel Kaynaklar

- Salkind, N. J. — *Statistics for People Who (Think They) Hate Statistics* (7. baskı)
- Salkind, N. J. — *Statistics for People Who (Think They) Hate Statistics: Using Microsoft Excel*
- jamovi ve IBM SPSS Statistics resmî dokümantasyonu
- Ders kapsamında hazırlanan konu anlatımları ve [uygulama veri setleri](#uygulama-veri-setleri)
:::

## Uygulama Veri Setleri

Uygulamalarda kullanılan kurgusal öğretim veri setleri aşağıdan indirilebilir. Veriler gerçek katılımcılara ait değildir; her dosyada görev ve teslim ölçütlerini içeren bir `Yonerge` sayfası bulunur.

| Hafta | Dosya | İçerik |
| :---: | --- | --- |
| 3 | [Uyku ve ders kaygısı (xlsx)](../../data/psi303/PSI303-hafta3-uyku-kaygi.xlsx){download="PSI303-hafta3-uyku-kaygi.xlsx"} | K01–K08; olanaksız kayıt, eksik madde, ters puanlama, toplam puan ve filtre kararı. |
| 3 | [Tepki süresi kayıtları (xlsx)](../../data/psi303/PSI303-hafta3-tepki-suresi.xlsx){download="PSI303-hafta3-tepki-suresi.xlsx"} | Boş, olanaksız ve alışılmadık ama mümkün kayıtların ayrımı; ham sütunu koruyarak yeni değişken üretme. |
| 3 | [Aynı ortalama, farklı yayılım (xlsx)](../../data/psi303/PSI303-hafta3-puan-gruplari.xlsx){download="PSI303-hafta3-puan-gruplari.xlsx"} | İki kurgusal grup; merkez ve yayılımın ayrı özellikler olduğunu gösterme. |

## Açık Veri Setleri

Aşağıdaki veri setleri gerçek katılımcılara ait, Mendeley Data üzerinde yayımlanmış açık veri setleridir. Dosyalar bu siteden dağıtılmaz; her bağlantı veri setinin yayıncı sayfasına gider ve dosyalar oradan indirilir. Hepsi CC BY 4.0 lisanslıdır, kullanırken veri setine atıf yapılmalıdır. Kendi küçük analizlerinizi (frekans, ortalama ve yayılım, grafik, çapraz tablo, grup karşılaştırması) gerçek veriyle denemek için kullanabilirsiniz; ders uygulamaları bu veri setlerine bağlı değildir.

| Veri seti | Katılımcı | İçerik |
| --- | --- | --- |
| [COVID-19 pandemisinin Türkiye'deki sosyal ve psikolojik etkileri](https://data.mendeley.com/datasets/sv95c7ydpy/9) | 2.868 | Kaygı, davranış değişimleri ve demografik değişkenler. |
| [Clance Impostor Phenomenon Scale (Türkçe)](https://data.mendeley.com/datasets/zzt73pzv8d/1) | Türk üniversite öğrencileri | 20 maddelik ölçek maddeleri; ölçek toplamı hesabı için uygun. |
| [İstanbul'da ebeveynlerin çocuk ağız hijyeni tutum ve uygulamaları](https://data.mendeley.com/datasets/mhhprrnr8f/1) | 203 | Demografi, tutum ve davranış değişkenleri; dosyada ayrıca `sorular` sayfasında değişken açıklamaları bulunur. |
| [Patient Safety Culture](https://data.mendeley.com/datasets/bzcrpt47zz/1) | 258 | Konya'daki iki üniversite hastanesinde çalışan sağlık personeli; Likert maddeleri ve demografi. |
| [COVID-19'un Türkiye'deki odyoloji öğrencileri üzerindeki etkileri](https://data.mendeley.com/datasets/j36zbmf4b4/1) | 518 | Lisans ve lisansüstü öğrencilerden kesitsel anket verisi. |
| [Exercise Dependence Health Correlates](https://data.mendeley.com/datasets/9zb9nrzrbc/1) | 850 | Düzenli egzersiz yapan 18 yaş üstü yetişkinler. |
| [Menopoz geçişinde istenmeyen gebelik korkusu ve cinsel yaşam kalitesi](https://data.mendeley.com/datasets/ptcx3dwsgy/1) | 124 | 40–50 yaş perimenopozal kadınlar; 23 değişken. |
| [Tonsil Adenoid Health Status Instrument, Türkçe uyarlama](https://data.mendeley.com/datasets/9nfsc964fs/1) | — | Türkçe ölçek uyarlama ve geçerlik çalışmasına ait veriler. |
| [Digital Addiction Research Dataset](https://data.mendeley.com/datasets/6hhdxszm56/2) | 497 | Üniversite öğrencileri; mutluluk, Big Five, FoMO, akıllı telefon ve sosyal medya bağımlılığı ölçekleri. |
| [FSCAM — iş sağlığı ve güvenliği kültürü anketi](https://data.mendeley.com/datasets/xrprwxv4xx/1) | — | Türkiye'de bir metal sektörü üretim şirketinin çalışanlarından anket verisi. |

## Haftalık Plan

Haftalık plan dersin resmî izlencesindeki 14 haftalık kapsamı (7. hafta ara sınav) temel alır. Konu notları kavramsal bütünlüğe göre hazırlanır; bir konu gerektiğinde birden fazla haftada yeniden kullanılabilir.

| Hafta | Notlar                                                      | Açıklama                                                                                                                                                                                                                |
| :---: | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   1   | [[../../courses/psi303/notes/tp_arastirma-sorusundan-veriye\|Araştırma Sorusundan Veriye]]                                                            | Hedef evren–örneklem ayrımı, betimleme–çıkarım farkı, seçim yanlılığı ve örneklem değişkenliği, gözlem birimi/değişken, kimlik/değer alanı ayrımı.                                               |
|   2   | [[../../courses/psi303/notes/tp_degiskeni-tanimlamak-ve-veriyi-yazilimda-kurmak\|Değişkeni Tanımlamak ve Veriyi Gerçek Yazılımda Kurmak]]                                                            | Veri türü–ölçüm düzeyi ayrımı, nominal/ordinal/aralık/oran, bağımsız/eşleştirilmiş gözlem, eksik kayıt–kodlama hatası ayrımı, veri sözlüğü ve jamovi/SPSS'te değişken tanımlama uygulaması. |
|   3   | [[../../courses/psi303/notes/tp_veriyi-yonetmek-ve-betimlemeye-giris\|Veriyi Yönetmek ve Betimlemeye Giriş]]                                                            | Eksik kayıt, ters puanlama, türetilmiş puan; ortalama ve yayılıma giriş; örneklem özetinin neden değiştiğine giriş.                                                                                           |
|   4   | [[../../courses/psi303/notes/tp_betimsel-istatistikten-cikarima\|Betimsel İstatistikten Çıkarıma]]                                                            | Dağılım ve grafik; standart hata ve z-puanı; çıkarımdan önce H0/H1 ve yönlü/yönsüz hipotez; p-değeri, hata türleri ve hazır normallik çıktısı.                                                                                   |
|   5   | [[../../courses/psi303/notes/tp_t-testleri-desenden-teste\|t-Testleri: Desenden Teste]]                                                            | Tek örneklem, bağımsız örneklem ve eşleştirilmiş örneklem t-testi; varsayım, ortalama farkı, etki ve belirsizlik yorumu.                                                                                       |
|   6   | [[../../courses/psi303/notes/tp_tek-yonlu-varyans-analizi-ve-post-hoc\|Tek Yönlü Varyans Analizi ve Post-Hoc Testler]]                                                            | Çok grup problemi, F istatistiği, çoklu karşılaştırma ve veri–hipotez–test zincirinin gözden geçirilmesi.                                                                                                      |
|   7   | **ARA SINAV**                                         | Hafta 1–6 kapsamının ölçülmesi.                                                                                                                                                                                     |
|   8   | **İki Yönlü Varyans Analizi ve Kovaryans Analizi** | Temel etki/etkileşim, kovaryat kavramı, ayarlanmış karşılaştırma ve ANCOVA koşulları.                                                                                                                           |
|   9   | **Tekrarlı Ölçümler için Varyans Analizi**       | Çok zamanlı ölçüm, kişi içi değişim, küresellik ve düzeltme yorumu.                                                                                                                                            |
|  10  | **İki Değişkenli Korelasyon Analizi**              | Saçılım ve Pearson r ile betimleme, ilişkinin testi, belirsizlik ve nedensellik sınırı.                                                                                                                            |
|  11  | **Doğrusal Regresyon**                               | Eğim/sabit, tahmin ve artık, açıklanan değişkenlik ve çıktı yorumu.                                                                                                                                              |
|  12  | **Hiyerarşik Regresyon**                             | Birlikte yordama, gerekçeli blok sırası, iç içe model karşılaştırması.                                                                                                                                          |
|  13  | **Güvenirlik I**                                     | Ölçüm hatası, iç tutarlık/alfa, madde incelemesi, güvenirlik–geçerlik ayrımı.                                                                                                                                  |
|  14  | **Güvenirlik II ve Bütünleştirme**                | Güvenirlik bulgusunun araştırma raporundaki rolü; veri sözlüğü, puanlama, betimleme ve analiz sonucunun bütünleşik APA raporu.                                                                                 |

## Değerlendirme

- Ara sınav: **%40**
- Yarıyıl sonu proje: **%60**

Değerlendirmelerde yalnız doğru test seçimi değil; veriyi ve ölçüm düzeyini doğru tanıyabilme, yazılım çıktısını yorumlama, sonucu APA formatında raporlama ve yapılan yöntem tercihini gerekçelendirme becerisi de önemlidir.
