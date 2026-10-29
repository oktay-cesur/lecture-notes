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

| Hafta | Konu Notu / Sunum | Açıklama |
| :---: | --- | --- |
| 1 | [Kimin hakkında konuşuyoruz?](notes/tp_evren-orneklem-ve-cikarim.md)<br>[Veri tablosu](notes/tp_veri-tablosu-ve-gozlem-birimi.md) | Hedef evren ve örneklem, betimleme ve çıkarım, gözlem birimi, değişken ve veri tablosu. |
| 2 | [Ölçme düzeyleri](notes/tp_olcme-duzeyleri.md)<br>[Veri sözlüğü](notes/tp_veri-sozlugu.md) | Nominal, ordinal, aralık ve oran düzeyleri; değişkeni jamovi/SPSS'te tanımlama. |
| 3 | [Veriyi analize hazırlamak](notes/tp_veriyi-analize-hazirlama.md)<br>[Merkezî eğilim](notes/tp_merkezi-egilim.md)<br>[Yayılım ölçüleri](notes/tp_yayilim-olculeri.md) | Eksik ve hatalı kayıtlar, ters puanlama, türetilmiş puan, merkez ve yayılım. |
| 4 | [Grafik okuma](notes/tp_grafik-okuma.md)<br>[Dağılım ve normal dağılım](notes/tp_dagilim-ve-normal-dagilim.md)<br>[Standart hata ve hipotez testi](notes/tp_standart-hata-ve-hipotez-testi.md) | Grafik ve dağılımı okuma, normal dağılım, standart hata, hipotez ve p-değeri. |
| 5 | [Tek ve bağımsız örneklem t-testi](notes/tp_tek-ve-bagimsiz-orneklem-t-testi.md)<br>[Eşleştirilmiş t-testi](notes/tp_eslestirilmis-t-testi.md) | Desene göre t-testi seçimi, varsayımlar, ortalama farkı, etki ve belirsizlik yorumu. |
| 6 | [Tek yönlü varyans analizi](notes/tp_tek-yonlu-varyans-analizi.md)<br>[Post-hoc ve karar haritası](notes/tp_post-hoc-ve-karar-haritasi.md) | Çok grup karşılaştırması, F istatistiği, post-hoc testler ve karar haritası. |
| 7 | **ARA SINAV** | Hafta 1–6 kapsamının ölçülmesi. |
| 8 | **İki Yönlü Varyans Analizi ve Kovaryans Analizi** | Temel etki/etkileşim, kovaryat kavramı, ayarlanmış karşılaştırma ve ANCOVA koşulları. |
| 9 | **Tekrarlı Ölçümler için Varyans Analizi** | Çok zamanlı ölçüm, kişi içi değişim, küresellik ve düzeltme yorumu. |
| 10 | **İki Değişkenli Korelasyon Analizi** | Saçılım ve Pearson r ile betimleme, ilişkinin testi, belirsizlik ve nedensellik sınırı. |
| 11 | **Doğrusal Regresyon** | Eğim/sabit, tahmin ve artık, açıklanan değişkenlik ve çıktı yorumu. |
| 12 | **Hiyerarşik Regresyon** | Birlikte yordama, gerekçeli blok sırası, iç içe model karşılaştırması. |
| 13 | **Güvenirlik I** | Ölçüm hatası, iç tutarlık/alfa, madde incelemesi, güvenirlik–geçerlik ayrımı. |
| 14 | **Güvenirlik II ve Bütünleştirme** | Güvenirlik bulgusunun araştırma raporundaki rolü; veri sözlüğü, puanlama, betimleme ve analiz sonucunun bütünleşik APA raporu. |

## Değerlendirme

- Ara sınav: **%40**
- Yarıyıl sonu proje: **%60**

Değerlendirmelerde yalnız doğru test seçimi değil; veriyi ve ölçüm düzeyini doğru tanıyabilme, yazılım çıktısını yorumlama, sonucu APA formatında raporlama ve yapılan yöntem tercihini gerekçelendirme becerisi de önemlidir.
