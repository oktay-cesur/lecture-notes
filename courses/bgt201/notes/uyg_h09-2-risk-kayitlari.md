---
title: "Uygulama: Risk Kayıtları"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-11-17
execute:
  echo: false
---

## Görev: farktan riske, eksikten olası zarara

* **Başlangıç noktası:** Önceki uygulama saatinde yazılı hedefler ile sahadaki mevcut durum arasındaki boşlukları belirleyerek tamamlanan fark analizi (gap analizi).
* **Temel ilke:** Fark analizi eksikliği gösterir; ancak her eksikliğin kuruma faturası aynı değildir.
* **Uygulama amacı:** Tespit edilen farkların bir tehditle tetiklendiğinde yol açacağı gizlilik, bütünlük ve erişilebilirlik (CIA) kayıplarını değerlendirmek.
* **Vaka verisi:** **Duru Eğitim Merkezi** fark bulguları, nitel olasılık ve etki ölçekleri, 3×3 risk matrisi ve kabul ölçütleri.

**Göreviniz:**

1. Kurumun nitel olasılık ve etki ölçütlerini inceleyin.
2. `ayrilan-hesap` senaryosunun rehber nitel risk değerlendirmesini ve tam risk kaydını analiz edin.
3. `geri-yukleme` ve `takvim-dosyasi` durumları için bağımsız risk kayıtlarını başarı ölçütlerine uygun olarak doldurun.

*Kurum, kişiler, sistemler ve test sonuçları kurgusaldır.*

::: {.notes}
Önceki uygulama saatinde kurumun yazılı kuralları ile sahadaki gerçek durumu karşılaştırarak "Kâğıt üzerinde ne yazıyor, sistemde ne var?" sorusuna yanıt veren fark analizini (gap analizi) tamamlamıştık. Ancak sahadaki her uyumsuzluğun kuruma doğuracağı sonuç aynı ağırlıkta değildir; bu nedenle fark analizinden nitel risk analizine geçerek tespit edilen boşlukların kurumsal anlamını değerlendiriyoruz.

Nitel risk analizinde sayısal skorlar veya keyfi puanlamalar kullanılmaz; bunun yerine "Bu eksiklik bir tehditle birleşirse ne olur, ne sıklıkla gerçekleşebilir ve kuruma ne kadar zarar verir?" sorularına kurumun tanımlı ölçekleriyle yanıt aranır. Bir zafiyetin tehdit yoluyla tetiklenmesi sonucunda gizlilik, bütünlük ve erişilebilirlik (CIA) unsurlarında oluşabilecek kayıplar ile iş kesintisi süreleri olasılık ve etki ekseninde incelenir.

Çalışmamızda önce **Duru Eğitim Merkezi**'nin nitel ölçeklerini ve 3×3 risk matrisini tanıyacak, ardından `ayrilan-hesap` senaryosunun adım adım nasıl tam bir risk kaydına dönüştürüldüğünü rehber örnek üzerinde inceleyeceğiz. Rehber analizin ardından `geri-yukleme` ve `takvim-dosyasi` durumları için kendi risk kayıtlarınızı oluşturacaksınız; ilk adım olarak bir sonraki slaytta fark kaydı ile risk kaydı arasındaki yapısal ayrımı netleştiriyoruz.
:::

---

## Fark kaydı ile risk kaydının ilişkisi

Fark kaydı bugünkü uyumsuzluğu tespit eder; risk kaydı ise bu uyumsuzluğun gelecekte yol açabileceği olası olay ve sonuçları değerlendirir.

| Karşılaştırma Ekseni | Fark Kaydı (Gap Analizi) | Risk Kaydı (Risk Analizi) |
|---|---|---|
| **Temel soru** | Kurallarımız ile uygulamamız arasında ne fark var? | Bu eksiklik bir tehditle birleşirse ne olabilir, olasılığı ve etkisi nedir? |
| **Zaman odağı** | Bugünün somut durumu (olan ile olması gereken) | Gelecekte gerçekleşebilecek olası olaylar ve zararlar |
| **Girdi ve dayanak** | Yazılı hedef kural ve sahadaki teknik test kanıtı | Tehdit yolu, zafiyet, olası CIA kaybı ve iş kesintisi |
| **Temel çıktı** | Somut sapma ve operasyonel düzeltme ihtiyacı | Nitel olasılık, etki, risk düzeyi, kabul durumu ve temel tedbir |

Bir fark birden fazla risk senaryosuna yol açabilir; ancak fark cümlesi ile risk değerlendirmesi birbirinin yerine yazılamaz.

::: {.notes}
Bilgi güvenliği yönetiminde en sık karıştırılan iki belge türü fark kaydı ile risk kaydıdır. Fark analizi bugünün fotoğrafını çeker ve yazılı hedef kural ile sahadaki uygulama arasındaki somut sapmayı belgeler; risk analizi ise bu sapmanın gelecekte bir tehditle birleşmesi hâlinde kuruma verebileceği olası zararları ve iş kesintilerini değerlendirir.

İki kayıt türü birbirini besleyen ardışık bir mekanizma içinde çalışır: fark kaydında kanıtlanan uyumsuzluk, risk kaydının "zafiyet" girdisini oluşturur. Bu zafiyetin yanına tehdit kaynağı, açık erişim veya hata yolu, etkilenen bilgi varlığı ve olası CIA kaybı eklendiğinde analiz durum tespitinden çıkarak geleceğe dönük bir risk senaryosuna dönüşür.

Somut bir örnekle okuduğumuzda, "Kural ayrılış günü hesabı kapat diyor, ama hesap 7 gün açık kalmış" tespiti bir fark kaydıdır. Buna karşılık, "Açık kalan bu hesabı kullanarak eski bir çalışan uzaktan sisteme girer ve 80 kursiyer sözleşmesini dışarıya aktarırsa ne olur?" sorusu risk analizinin konusudur; üstelik aynı açık hesap farkı hem gizlilik sızıntısı hem de kayıt bütünlüğünün bozulması gibi birden fazla risk senaryosu doğurabilir.

Uygulamada sık yapılan hata, fark kaydına olasılık ve etki tahmini eklemek ya da tersine risk kaydının senaryo alanına yalnızca "hesap kapatılmamış" yazıp bırakmaktır. Risk senaryolarını kişisel tahminlerle değil kurumsal standartla değerlendirebilmek için bir sonraki slaytta Duru Eğitim Merkezi'nin nitel olasılık ve etki ölçütlerini inceliyoruz.
:::

---

## Duru Eğitim Merkezi nitel olasılık ve etki ölçütleri

Kurumun gelecek 3 aylık dönem için belirlediği nitel olasılık ve etki değerlendirme ölçekleri:

**Olasılık Ölçeği (Gelecek 3 Aylık Değerlendirme Dönemi):**

| Olasılık | Değerlendirme Ölçütü |
|---|---|
| **Yüksek** | Zarara yol açan yol açıktır, her iş günü fırsat vardır ve işleyen engelleyici kontrol yoktur. |
| **Orta** | Zarara yol açan yol açıktır; bu durumun ortaya çıkma fırsatı ayda birkaç kez oluşmaktadır. |
| **Düşük** | Fırsat seyrektir ve engelleyici kontrollerin çalıştığı testlerle gösterilmiştir. |

**Etki Ölçeği:**

| Etki | Değerlendirme Ölçütü |
|---|---|
| **Düşük** | Yalnızca yeniden üretilebilir, dışarıya açık bilgiler etkilenir; iş kesintisi 1 saatten kısadır. |
| **Orta** | Bir birimin işi 1–4 saat aksar veya sınırlı iç işlem hatası oluşur. |
| **Yüksek** | Dışarıya verilmemesi gereken kayıtlar yetkisiz erişime açılır ya da başvuru işi 4 saatten uzun durur. |

*Kural:* Birden fazla etki koşulu oluştuğunda en yüksek etki düzeyi esas alınır.

::: {.notes}
Nitel risk değerlendirmesinin kişiden kişiye değişmeyen tutarlı sonuçlar üretmesi, kurumun olasılık ve etki düzeylerini somut eşiklerle tanımlamasına bağlıdır. Duru Eğitim Merkezi'nin gelecek 3 aylık dönem için belirlediği bu iki tablo, hem rehber örnekte hem de bağımsız çalışmanızda başvuracağınız temel referans sözlüğüdür.

Olasılık ölçeğini okurken üç somut koşulu birlikte kontrol etmeniz gerekir: zarara giden yolun açık olup olmadığı, fırsatın ne sıklıkla doğduğu (her iş günü, ayda birkaç kez veya seyrek) ve sahada engelleyici bir kontrolün çalıştığının testlerle kanıtlanıp kanıtlanmadığı. Engelleyici kontrolün çalıştığı kanıtlanamıyor ve tehdit yolu her iş günü fırsat veriyorsa olasılık doğrudan **Yüksek** düzeyde değerlendirilir.

Etki ölçeğinde ise etkilenen bilgi varlığının gizlilik niteliği ile operasyonel iş kesintisinin süresi belirleyicidir. Yeniden üretilebilir ve dışarıya açık bilgilerin etkilendiği, kesintinin 1 saatin altında kaldığı durumlar **Düşük**; birim işinin 1–4 saat aksaması **Orta**; dışarıya verilmemesi gereken kursiyer sözleşmeleri gibi kayıtların yetkisiz erişime açılması ya da başvuru işinin 4 saatten uzun durması ise **Yüksek** etki sınıfına girer.

Değerlendirme sırasında bir senaryo birden fazla etki koşulunu aynı anda tetiklediğinde ortalama alınmaz; kurumsal kural gereği en yüksek etki düzeyi esas alınır. Olasılık ve etki düzeylerini bu ölçeklere göre ayrı ayrı belirledikten sonra, bir sonraki slaytta yer alan 3×3 risk matrisi üzerinden bileşik risk düzeyine ve kabul kararına geçiyoruz.
:::

---

## Duru Eğitim Merkezi 3×3 risk matrisi ve kabul ölçütleri

**Risk Matrisi:**

| Olasılık \ Etki | Düşük Etki | Orta Etki | Yüksek Etki |
|---|---|---|---|
| **Yüksek Olasılık** | Orta Risk | Yüksek Risk | Yüksek Risk |
| **Orta Olasılık** | Düşük Risk | Orta Risk | Yüksek Risk |
| **Düşük Olasılık** | Düşük Risk | Düşük Risk | Orta Risk |

**Kurumun Risk Kabul Ölçütleri:**

| Risk Düzeyi | Kurumsal Kabul Koşulu ve Yetki |
|---|---|
| **Düşük Risk** | İlgili iş sahibinin rutin izleme kaydıyla kabul edilebilir. |
| **Orta Risk** | Gerekçeli yönetim kararı ve tanımlı bir gözden geçirme tarihiyle kabul sınırında değerlendirilebilir. |
| **Yüksek Risk** | Kurumun kabul sınırı dışındadır. Mevcut hâliyle kabul edilemez; öncelikli tedbir planlanması zorunludur. |

::: {.notes}
Ayrı ayrı gerekçelendirilen nitel olasılık ve etki düzeyleri, kurumun 3×3 risk matrisinde kesiştirilerek tek bir kurumsal risk düzeyine dönüştürülür. Nitel matriste sayısal çarpma işlemi yapılmaz; belirlenen olasılık satırı ile etki sütununun kesiştiği hücre doğrudan senaryonun bileşik risk düzeyini verir.

Matrisin yapısına dikkat ettiğinizde kurumun yüksek zarara karşı ihtiyatlı bir eşik kurduğunu görebilirsiniz: etki düzeyi **Yüksek Etki** olduğunda, olasılık **Orta Olasılık** düzeyinde kalsa bile kesişim hücresi doğrudan **Yüksek Risk** üretir. Buna karşılık hem olasılığın hem etkinin düşük olduğu ya da birinin düşük diğerinin orta olduğu durumlarda sonuç **Düşük Risk** olarak kalır.

Alt tablodaki kabul ölçütleri, çıkan risk düzeyinin kurum içinde hangi yetkiyle ve hangi koşulla yönetileceğini belirler. **Düşük Risk** ilgili iş sahibinin rutin izleme kaydıyla kabul edilebilirken, **Orta Risk** ancak gerekçeli yönetim kararı ve tanımlı bir gözden geçirme tarihiyle kabul sınırında tutulabilir; **Yüksek Risk** ise mevcut hâliyle kabul edilemez ve öncelikli tedbir planlanmasını zorunlu kılar.

Kurumsal görev ayrılığı ilkesi gereği karar yetkilisi, iş sahibi ve teknik uygulayıcı ayrı kişilerdir; risk analizini hazırlayan kişi kendi başına risk kabul onayı veremez. Sık yapılan bir hata, **Orta Risk** sonucunu "hiçbir işlem gerekmez" şeklinde okumak ve yönetim kararı ile gözden geçirme tarihi şartını atlamaktır; şimdi tüm bu karar adımlarının risk kaydındaki 8 alanda nasıl toplandığını görelim.
:::

---

## Risk kaydının yapısı: değerlendirme aşamasındaki 8 alan

Risk kaydı, zafiyetten aksiyon gereksinimine kadar uzanan karar zincirini belgelenmiş tek bir mimaride toplar:

1. **Risk Kimliği ve Kısa Ad:** Konuyu ayırt eden anlamlı ad (ör. `ayrilan-hesap`).
2. **Bilgi Varlığı ve Sahibi:** Tehdidin hedefindeki sistem/veri ve hesap verecek iş yöneticisi.
3. **Senaryo (Tehdit ve Zafiyet):** Hangi zayıflık hangi tehditle birleşip olaya dönüşebilir?
4. **Mevcut Kontroller ve Kanıtı:** Sahada fiilen devrede olan önlemler ve test çıktısı.
5. **Olasılık ve Gerekçesi:** Kurum ölçütüne göre belirlenen düzey ve dayandığı olgu.
6. **Etki ve Gerekçesi:** Olası CIA kaybı, iş kesintisi süresi ve dayandığı olgu.
7. **Risk Düzeyi ve Kabul Durumu:** 3×3 matris hücresi ve kurumun kabul hükmü.
8. **Temel Tedbir İhtiyacı:** Risk yolundaki hangi zayıflığın kapatılacağı (yönetsel hedef).

::: {.notes}
Değerlendirme aşamasındaki bir risk kaydı, tespit edilen zafiyetten yönetsel tedbir ihtiyacına kadar uzanan karar zincirini sekiz standart alanda toplar. Bu yapı, risk analizini kişisel izlenimlerden arındırarak her hükmün hangi kanıta ve hangi kurumsal ölçüte dayandığını denetlenebilir hâle getirir.

İlk dört alan (kısa ad, varlık ve sahibi, senaryo, mevcut kontroller ve kanıtı) riskin bağlamını ve sahadaki olgusal zemini kurar; son dört alan (olasılık, etki, risk düzeyi ve kabul durumu, temel tedbir ihtiyacı) ise bu olguları kurum ölçekleriyle değerlendirip yönetim kararına hazırlar. Böylece önceki alanlarda kanıtı yazılmamış hiçbir iddia olasılık veya etki gerekçesine taşınamaz.

Özellikle 2. ve 8. alanları doldururken rol sınırlarına dikkat edilmelidir: bilgi varlığının sahibi sistemi kuran teknik uygulayıcı değil, o veriden ve süreçten hesap veren iş birimi yöneticisidir. Benzer şekilde 8. alandaki temel tedbir ihtiyacı yalnızca risk yolundaki hangi zayıflığın kapatılacağını yönetsel hedef olarak tanımlar; bütçe ve satın alma kararlarına girmez. Bir sonraki slaytta bu sekiz alanın ilk yarısını `ayrilan-hesap` rehber olayı üzerinde kuruyoruz.
:::

---

## Rehber: `ayrilan-hesap` — senaryo ve mevcut kontroller

Rehber olayımızın risk değerlendirmesini adım adım kuralım:

*   **Risk Kimliği ve Kısa Ad:** `ayrilan-hesap`
*   **Bilgi Varlığı:** 80 kursiyer sözleşmesi ve aktif kullanıcı erişim dizini.
*   **İlgili İş Sahibi:** Kayıt Birimi Yöneticisi (süreç ve veri sorumlusu); teknik uygulayıcı BT Sistem Sorumlusu.
*   **Tehdit:** İşten ayrılan eski personelin kurum hesaplarını kullanarak dış ağdan yetkisiz erişim sağlaması.
*   **Zafiyet:** Ayrılış günü kapatılmamış hesap; son 10 ayrılıştan 2 hesabın 7 gün boyunca aktif kalması.
*   **Mevcut Kontroller ve Kanıtı:**
    *   *Yazılı kural:* Kurumun yazılı "ayrılış günü hesap kapatılır" kuralı vardır.
    *   *Test kanıtı:* 2 hesabın uzaktan erişimi açıktır; her iş günü erişim yolu ile eski parolalar geçerlidir ve 80 kursiyer sözleşmesi okunabilmektedir.
    *   *Günlük kaydı:* Sistem günlüklerinde yetkisiz işlem veya veri sızıntısı kaydı yoktur.

::: {.notes}
Rehber olayımız olan `ayrilan-hesap` kaydının ilk dört alanında önce korunan bilgi varlığını ve sorumluluk ayrımını netleştiriyoruz. Tehdidin hedefindeki varlık 80 kursiyer sözleşmesi ile aktif kullanıcı erişim dizinidir; bu verinin ve sürecin iş sahibi Kayıt Birimi Yöneticisi iken, hesap kapatma işlemini sistemde yürüten teknik uygulayıcı BT Sistem Sorumlusudur.

Senaryo kurulurken tehdit ile zafiyet birbirine karıştırılmadan nedensel bir zincirle bağlanır. Zafiyet, kurum içi süreç kopukluğu nedeniyle son 10 ayrılıştan 2 hesabın ayrılış günü kapatılmayıp 7 gün boyunca aktif kalmasıdır; tehdit ise işten ayrılan eski personelin bu açık hesapları kullanarak dış ağdan yetkisiz erişim sağlamasıdır.

Mevcut kontroller alanında kâğıt üzerindeki yazılı kural ile sahadaki teknik test çıktısı birlikte kaydedilir: yazılı kural olmasına rağmen testte 2 hesabın uzaktan erişime açık kaldığı ve 80 kursiyer sözleşmesini okuyabildiği kanıtlanmıştır. Sistem günlüklerinde yetkisiz işlem veya veri sızıntısı kaydının bulunmaması ise kanıt sınırımızı korur; bu olgunun olasılık ve etki değerlendirmesini nasıl etkilediğini bir sonraki slaytta inceliyoruz.
:::

---

## Rehber: `ayrilan-hesap` — olasılık, etki ve matris düzeyi

Duru Eğitim Merkezi'nin ölçütlerine göre değerlendirme gerekçeleri:

*   **Olasılık: Yüksek**
    *   *Gerekçe:* Dış ağdan uzaktan erişim yolu açıktır, eski personelin parolaları geçerlidir, her iş günü erişim fırsatı mevcuttur ve engelleyici ek kontrol çalışmamaktadır.
    *   *Kanıt notu:* Geçmişte kötüye kullanım kaydının olmaması olasılığı düşürmez.
*   **Etki: Yüksek**
    *   *Gerekçe:* Dışarıya verilmemesi gereken 80 kursiyere ait sözleşmeler yetkisiz erişime açıktır (gizlilik kaybı).
    *   *Ölçüt karşılığı:* Dışarıya verilmemesi gereken kayıtların yetkisiz erişime açılması kurum etki ölçütüne göre doğrudan en üst düzeydir.
*   **Bileşik Risk Düzeyi: Yüksek Risk**
    *   *Matris kesişimi:* 3×3 Matriste Yüksek Olasılık satırı ile Yüksek Etki sütunu kesişimi.
*   **Kurumsal Kabul Durumu: Kabul edilemez**
    *   *Gerekçe:* Kurum kabul ölçütlerine göre Yüksek Risk kabul sınırı dışındadır; öncelikli tedbir planlanması zorunludur.

::: {.notes}
İlk dört alanda ortaya konan test kanıtlarını şimdi Duru Eğitim Merkezi'nin nitel ölçekleriyle eşleştiriyoruz. Olasılık **Yüksek** olarak belirlenmiştir; çünkü dış ağdan uzaktan erişim yolu açıktır, eski parolalar geçerliliğini korumaktadır, her iş günü erişim fırsatı vardır ve bu yolu kesen işleyen bir engelleyici kontrol bulunmamaktadır.

Etki düzeyi de **Yüksek** olarak değerlendirilmiştir; çünkü açık hesaplarla okunabilen 80 kursiyer sözleşmesi dışarıya verilmemesi gereken gizli kayıt niteliğindedir. Kurumun etki ölçeğine göre dışarıya verilmemesi gereken kayıtların yetkisiz erişime açılması (gizlilik kaybı), herhangi bir iş kesintisi süresi aranmaksızın doğrudan en üst etki düzeyini oluşturur.

3×3 risk matrisinde **Yüksek Olasılık** satırı ile **Yüksek Etki** sütunu kesiştirildiğinde bileşik sonuç **Yüksek Risk** çıkar ve kurum kabul ölçütlerine göre bu düzey **Kabul edilemez** hükmü alır. Burada sık düşülen tuzak, "sistem günlüklerinde geçmişte kötüye kullanım yok, öyleyse olasılık düşüktür" yanılgısıdır; oysa geçmişte ihlal yaşanmamış olması kapının her iş günü açık olduğu gerçeğini değiştirmez. Bir sonraki slaytta bu analizin tek tabloda birleşmiş tam risk kaydını görüyoruz.
:::

---

## Rehber özet tablosu: `ayrilan-hesap` tam risk kaydı

| Alan | Değerlendirme Çıktısı | Dayanak ve Açıklama |
|---|---|---|
| **Kısa Ad** | `ayrilan-hesap` | Anlamlı kısa ad. |
| **Varlık ve Sahibi** | 80 kursiyer sözleşmesi / Kayıt Birimi Yöneticisi | Gizli bilgi varlığı ve süreç sahibi. |
| **Senaryo** | Eski personelin açık hesapla uzaktan yetkisiz erişimi | Tehdit ve zafiyet ilişkisi. |
| **Mevcut Kontroller** | Kural var; ancak testte 2 hesabın açık olduğu kanıtlı | Sahadaki gerçek kontrol durumu. |
| **Olasılık ve Gerekçesi** | **Yüksek** — Açık yol var, her gün fırsat var, engelleyici kontrol yok | Nitel olasılık ölçütü. |
| **Etki ve Gerekçesi** | **Yüksek** — 80 kursiyer sözleşmesinin yetkisiz erişime açılması (gizlilik) | Nitel etki ölçütü. |
| **Risk Düzeyi ve Kabul** | **Yüksek Risk** / **Kabul edilemez** | 3×3 matris ve kabul ölçütü. |
| **Temel Tedbir İhtiyacı**| İK ayrılış bildirimi ile BT hesap dondurma akışının otomatik entegrasyonu | Risk yolundaki zayıflığı kapatma hedefi. |

::: {.notes}
Rehber özet tablosu, `ayrilan-hesap` senaryosu için yürüttüğümüz sekiz adımlı analizi tek bir denetlenebilir kayıtta birleştirir. Sol sütundaki her değerlendirme çıktısının sağ sütunda hangi kanıta veya kurumsal ölçüte dayandığı açıkça görülür; bağımsız çalışmanızda üreteceğiniz risk kayıtları da aynı bütünlüğe sahip olmalıdır.

Tablonun son satırındaki **Temel Tedbir İhtiyacı** alanına özellikle dikkat edin: burada "İK ayrılış bildirimi ile BT hesap dondurma akışının otomatik entegrasyonu" yazılarak yalnızca risk yolundaki zayıflığı kapatacak yönetsel hedef tanımlanmıştır. Analist bu aşamada belirli bir yazılım satın alma, bütçe tahsis etme veya takvim belirleme kararı yazmaz; ayrıntılı risk işleme ve aksiyon planlaması Hafta 10'un konusudur.
:::

---

## Bağımsız görev: iki durum için risk kaydı üretimi

Şimdi vaka paketindeki diğer iki durum için nitel risk değerlendirmesi yapacak ve risk kayıtlarını dolduracaksınız.

**Çalışılacak Durumlar:**
1. `geri-yukleme`: Veri yedekleme ve kurtarma testi durumu.
2. `takvim-dosyasi`: Haftalık ders planı takvim dosyası yetki fazlalığı durumu.

**Yapılacak Adımlar:**
*   Verilen hedef kuralı, sahadaki test kanıtını ve operasyonel verileri inceleyin.
*   Tehdit, zafiyet ve etkilenen bilgi varlığını belirleyin.
*   Kurum ölçütlerini kullanarak Olasılık ve Etki düzeylerini gerekçeleriyle seçin.
*   3×3 risk matrisinden bileşik risk düzeyini ve kurumun kabul durumunu bulun.
*   Risk yolunu kapatacak temel tedbir ihtiyacını tanımlayın.

::: {.notes}
Rehber örneğin ardından şimdi sıra, Duru Eğitim Merkezi vaka paketindeki `geri-yukleme` ve `takvim-dosyasi` durumları için bağımsız risk kayıtlarını üretmektedir. Bu çalışmanın amacı, sahadaki teknik test bulgularını ve operasyonel koşulları kurumun nitel ölçekleriyle eşleştirerek sekiz alanlı tam risk kaydına dönüştürme becerisini uygulamaktır.

Çalışırken rehber tabloda izlediğimiz sırayı takip edin: önce her durum için korunan bilgi varlığını, iş sahibini, tehdit-zafiyet senaryosunu ve mevcut kontrol kanıtını netleştirin; ardından olasılık, etki, 3×3 matris düzeyi, kabul durumu ve temel tedbir ihtiyacını yazın. Bir sonraki slaytta her iki durum için kullanacağınız operasyonel vaka verileri yer almaktadır.
:::

---

## Görev verisi: `geri-yukleme` ve `takvim-dosyasi`

Değerlendirme sırasında başvuracağınız operasyonel vaka verileri:

| Kısa Ad | Hedef Kural ve Test Kanıtı | Operasyonel Koşul ve İş Etkisi |
|---|---|---|
| `geri-yukleme` | Kural her gece otomatik yedek ve ayda bir başarılı test ister. Son 28 gecenin yedekleri başarılıdır; ancak son 6 haftadaki **2 geri yükleme denemesi de başarısız** olmuştur, yeni test yoktur. | Ayda iki kez yapılan planlı sistem bakımlarında veri kaybı ve kurtarma ihtiyacı doğuran açık yol vardır. Olası bir veri kaybında güncel **başvuru işi 6 saat durmaktadır**. |
| `takvim-dosyasi` | Kural takvim dosyasını yalnız ders planlayıcısının değiştirebileceğini söyler. Testte 8 personelden **6'sının düzenleme yetkisi** olduğu saptanmıştır. | Dosya **yalnızca herkese açık ders saatlerini** içerir. Her iş günü düzenleme fırsatı açıktır. Son ayda 3 kez sehven hata yapılmış, önceki gün kopyasından **30 dakikada düzeltilmiştir**. |

::: {.notes}
Tablodaki veriler, bağımsız değerlendirmenizde kullanacağınız tek olgusal dayanak noktasıdır. Orta sütunda yer alan hedef kural ve saha testi bulguları zafiyet ile mevcut kontrolleri tanımlarken; sağ sütundaki operasyonel koşullar, sıklık bilgileri ve iş kesintisi süreleri olasılık ve etki değerlendirmenize girdi sağlar.

Her iki durumu incelerken tabloda verilmeyen varsayımlar eklemekten kaçının ve çalışan kontroller ile başarısız olan kontrolleri birbirinden dikkatle ayırın. Tablodaki verileri çalışma tablolarına aktarmadan önce, bir sonraki slaytta yer alan dört değerlendirme ölçütünü inceleyerek kayıtlarınızın hangi standartlara göre sınanacağını gözden geçirin.
:::

---

## Başarı ve değerlendirme ölçütleri

Risk kayıtlarınızı tamamlarken şu dört temel ölçüte göre değerlendirileceksiniz:

1. **Kanıta Dayalı Gerekçelendirme:** Olasılık gerekçesi açık yol, fırsat sıklığı ve kontrol kanıtına; etki gerekçesi ise CIA kaybı ve iş kesintisi süresine doğrudan dayanmalıdır.
2. **Olasılık ve Etki Ayrımı:** İki alan birbirinden bağımsız gerekçelendirilmelidir. "Zarar çok büyük o yüzden olasılık da yüksektir" gibi gerekçe aktarımı yapılmamalıdır.
3. **Doğru Matris ve Kabul Eşlemesi:** Olasılık ve etki düzeyleri 3×3 matriste doğru kesiştirilmeli; kurumun kabul ölçütleri (Düşük/Orta/Yüksek) harfiyen uygulanmalıdır.
4. **Temel Tedbir Sınırı:** Tedbir ihtiyacı risk yolundaki zayıflığı kapatmaya işaret etmeli; henüz karar verilmemiş bütçe, satın alma veya ayrıntılı işleme tercihlerine (H10 konusu) taşmamalıdır.

::: {.notes}
Hazırlayacağınız risk kayıtlarının kurumsal geçerliliği bu dört temel ölçütle değerlendirilir. Bilgi güvenliği yönetiminde yalnızca "Yüksek" veya "Orta" etiketi yazmak yeterli değildir; karar vericinin bu düzeye hangi test kanıtıyla, hangi fırsat sıklığıyla ve hangi CIA veya iş kesintisi süresiyle ulaşıldığını gerekçe cümlesinde açıkça görmesi gerekir.

İkinci ölçüt olan olasılık ve etki ayrımı, analitik disiplinin omurgasıdır: olasılık yalnızca olayın gerçekleşme yoluna, sıklığına ve engelleyici kontrolün varlığına bakarken, etki olay gerçekleştiğinde doğacak zararın boyutuna bakar. Bir olayın etkisinin ağır olması onun her gün gerçekleşeceği anlamına gelmeyeceği gibi, her gün fırsat bulunması da zararın mutlaka yıkıcı olacağı anlamına gelmez.

Üçüncü ve dördüncü ölçütler ise analistin kurumsal karar sınırını korur: olasılık ve etki 3×3 matriste doğru kesiştirilmeli, kabul koşulu kurum tablosuna göre yazılmalı ve temel tedbir alanında yalnızca kapatılacak kontrol boşluğu belirtilmelidir. Bütçe tahsisi, ürün alımı veya risk işleme seçeneği kararı Hafta 10'da yönetimin vereceği kararlardır; şimdi bu ölçütler ışığında çalışma tablolarını doldurmaya geçebilirsiniz.
:::

---

## Çalışma tablosu: varlık, senaryo ve mevcut kontroller

Bağımsız iki durum için ilk dört alanı doldurunuz:

| Kısa Ad | Bilgi Varlığı ve Sahibi | Senaryo (Tehdit ve Zafiyet) | Mevcut Kontroller ve Kanıtı |
|---|---|---|---|
| `geri-yukleme` |   |   |   |
| `takvim-dosyasi` |   |   |   |

::: {.notes}
İlk çalışma tablosunda her iki durumun olgusal çerçevesini kuran dört alanı tamamlıyorsunuz. **Bilgi Varlığı ve Sahibi** sütununda korunan veriyi veya sistemi ve bu süreçten sorumlu iş birimi yöneticisini yazarken, karar yetkilisi, iş sahibi ve teknik uygulayıcının ayrı roller olduğunu göz önünde bulundurun. **Senaryo** sütununda ise yalnızca zafiyetin adını yazmakla yetinmeyip, hangi tehdidin hangi zayıflıkla birleşerek olaya dönüşebileceğini nedensel bir cümleyle ifade edin.

**Mevcut Kontroller ve Kanıtı** sütununu doldururken vaka verisindeki yazılı kuralı, sahada çalıştığı doğrulanan önlemleri ve testte başarısız olduğu saptanan noktaları birbirinden ayırarak kaydedin. İlk dört alandaki olgusal zemini eksiksiz kurduktan sonra, bir sonraki slayttaki ikinci çalışma tablosuna geçerek olasılık, etki, matris ve tedbir alanlarını tamamlayın.
:::

---

## Çalışma tablosu: değerlendirme, matris ve tedbir

Bağımsız iki durum için değerlendirme ve karar alanlarını tamamlayınız:

| Kısa Ad | Olasılık ve Gerekçesi | Etki ve Gerekçesi | Risk Düzeyi ve Kabul | Temel Tedbir İhtiyacı |
|---|---|---|---|---|
| `geri-yukleme` |   |   |   |   |
| `takvim-dosyasi` |   |   |   |   |

::: {.notes}
İkinci çalışma tablosunda, ilk tabloda kurduğunuz senaryo ve kontrol kanıtlarını Duru Eğitim Merkezi'nin nitel ölçekleriyle değerlendirerek kurumsal karar girdisine dönüştürüyorsunuz. **Olasılık ve Gerekçesi** ile **Etki ve Gerekçesi** sütunlarına yalnızca seçtiğiniz düzeyi değil, vaka verisindeki sıklık, açık yol, kontrol kanıtı, veri niteliği ve kesinti süresi bilgilerinin kurum ölçeğindeki karşılığını da açıkça yazın.

Belirlediğiniz iki düzeyi 3×3 risk matrisinde kesiştirerek **Risk Düzeyi ve Kabul** sütununa bileşik risk düzeyini ve kurumun kabul ölçütlerindeki karşılığını (izleme, gerekçeli yönetim kararı ve gözden geçirme tarihi ya da kabul edilemez) işleyin. **Temel Tedbir İhtiyacı** sütununda ise bütçe veya satın alma kararına girmeden risk yolundaki zayıflığı kapatacak yönetsel hedefi tanımlayın ve ardından kayıtlarınızı bir sonraki slaydın kontrol sorularıyla sınayın.
:::

---

## Öz değerlendirme ve kayıt kontrolü

Risk kayıtlarınızı teslim etmeden önce şu kontrol sorularıyla yanıtlarınızı sınayınız:

1. `geri-yukleme` senaryosunda 28 gecelik başarılı yedeği yok sayıp "hiç yedek alınmıyor" şeklinde toptancı gerekçe yazdınız mı? *(Ölçüt: Yedek alma ve geri yükleme testi ayrılır.)*
2. `takvim-dosyasi` senaryosunda dosyanın yalnızca herkese açık ders saatlerini içerdiğini unutup "kişisel veriler sızdı" etkisi uydurdunuz mu? *(Ölçüt: Kanıt sınırına sadık kalınır.)*
3. Olasılık gerekçesinde açık yol ve kontrol kanıtı yerine sırf "zarar çok büyük" dediniz mi? *(Ölçüt: Olasılık ve etki bağımsız gerekçelendirilmelidir.)*
4. Temel tedbir alanına bütçe ve satın alma kararı yazarak risk analistinin sınırını aştınız mı? *(Ölçüt: Tedbir ihtiyacı yönetsel sınırda kalmalıdır.)*

::: {.notes}
Öz değerlendirme soruları, hazırladığınız risk kayıtlarını teslim etmeden önce en sık yapılan metodolojik hataları kendi kendinize yakalamanızı sağlar. İyi bir risk analisti ne sahadaki olumlu kontrol kanıtını göz ardı eder ne de vaka verisinde bulunmayan hayalî bir felaket senaryosu uydurur.

İlk iki soru kanıt sınırını koruma disiplinini sınar: `geri-yukleme` durumunda yedek alma işleminin başarısı ile geri yükleme testinin başarısızlığı birbirinden ayrılmalı; `takvim-dosyasi` durumunda ise dosyanın içeriği vaka verisinde belirtilen sınırlar içinde okunmalıdır. Kanıtın ötesine geçen abartılı ifadeler, kurum kaynaklarının yanlış önceliklere yönlendirilmesine yol açar.

Son iki soru ise analitik bağımsızlık ve yetki sınırını kontrol eder: olasılık gerekçesi yalnızca açık yol, sıklık ve kontrol kanıtına dayanmalı; temel tedbir alanı ise yöneticinin Hafta 10'da vereceği bütçe ve satın alma kararlarına taşmamalıdır. Dört kontrol sorusundan da geçen kayıtlarımızın gelecek haftaki derse nasıl devredileceğini son slaytta inceliyoruz.
:::

---

## Değerlendirme kayıtlarının devri: Hafta 10'a çıkış

Risk değerlendirmesi güvenliğin nihai noktası değil, yönetim kararlarının başlangıcıdır.

Bu derste hazırladığımız üç risk kaydı (`ayrilan-hesap`, `geri-yukleme`, `takvim-dosyasi`), gelecek hafta işleyeceğimiz **Risk İşleme ve Olay Aksiyon Planı** dersinin doğrudan temel girdisini oluşturacaktır.

. . .

*   **Bu saatte tamamlanan (Hafta 9):**
    *   Hangi risklerin var olduğu, olasılık ve etki düzeyleri belgelendi.
    *   Matris üzerinden hangi risklerin kurum için kabul edilemez olduğu saptandı.
*   **Gelecek hafta işlenecek (Hafta 10):**
    *   Kabul edilemez riskler için hangi işleme seçeneği seçilecek? *(Azaltma, kaçınma, devretme, kabul)*
    *   Aksiyon planı sorumlusu kim olacak, hangi bütçe ve takvimle sonuç doğrulanacak?
    *   Bir güvenlik olayı gerçekleştiğinde acil aksiyon nasıl işletilecek?

::: {.notes}
Risk değerlendirmesi bilgi güvenliği yönetiminin bitiş çizgisi değil, yönetim kararlarının dayandığı başlangıç noktasıdır. Bu uygulama saatinde Duru Eğitim Merkezi için tamamladığınız `ayrilan-hesap`, `geri-yukleme` ve `takvim-dosyasi` kayıtları, sahadaki farkların hangi olasılık ve etkiyle kurumu tehdit ettiğini ve hangilerinin kabul sınırını aştığını belgelemiştir.

Gelecek hafta işleyeceğimiz **Risk İşleme ve Olay Aksiyon Planı** (Hafta 10) dersinde bu üç kayıt doğrudan karar masasına gelecektir. Kabul edilemez düzeydeki veya yönetim kararı gerektiren riskler için azaltma, kaçınma, devretme ya da kabul seçeneklerinden hangisinin uygulanacağı seçilecek; hazırlayan ile onaylayan ayrımı korunarak aksiyon sorumluları, hedef tarihler ve doğrulama ölçütleri tanımlanacaktır.

Ayrıca Hafta 10'da, değerlendirdiğimiz bir riskin fiilen güvenlik olayına dönüşmesi durumunda (örneğin 16 Kasım günü saat 09.02'de yetkisiz giriş yapılması ve 09.05'te alarm üretilmesi üzerine en geç 09.20'de sınırlandırma ve 09.35'te ilk bildirimin gerçekleştirilmesi) acil müdahale ve aksiyon adımlarının nasıl işletileceğini çalışarak farktan riske ve aksiyona uzanan yönetim döngüsünü tamamlayacağız.
:::
