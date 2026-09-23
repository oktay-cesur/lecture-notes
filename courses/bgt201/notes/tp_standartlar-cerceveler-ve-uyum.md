---
title: "Standartlar, Çerçeveler ve Uyum"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: today
execute:
  echo: false
---

::: {.callout-warning}
## Taslak Çalışma Notu
Bu doküman BGT 201 Bilgi Güvenliği Yönetimi I dersi için resmî izlence ve kaynak analizi temel alınarak hazırlanmış ilk çalışma taslağıdır. Haftalık pedagojik revizyonlarla olgunlaştırılmaya devam edecektir.
Ana İzlence: [[crs-bgt201|Ders İzlence Merkezi]]
:::

## Standartlar, çerçeveler ve uyum

**Dış referanstan kurum kararına**

BGT 201 — Bilgi Güvenliği Yönetimi I

::: {.notes}
Önceki konuda BGYS'nin güvenlik kararlarını kapsam, sorumluluk, uygulama, kanıt ve iyileştirme ilişkisi içinde yaşattığını gördük. Şimdi kurumun bu kararları hangi ortak ölçütlere dayandırabileceğini ele alacağız. Amaç referans adlarını ezberlemek değil; her referans türünün hangi soruya yanıt verdiğini ve dış beklentinin kurumun gerçek işleyişine nasıl dönüştüğünü ayırt etmektir.
:::

---

## Aynı sözcük, farklı kararlar

Satın alma: **“Uygun kontrolü seçelim.”**  
Bilgi işlem: **“Güvenli yapılandıralım.”**  
Yönetim: **“Uyumu sağlayalım.”**

**Ortak soru:** Hangi ölçüte göre, hangi kapsamda ve hangi kanıtla?

::: {.notes}
Üç birim aynı güvenlik amacı için çalışıyor görünse de kullandıkları ifadeler ortak bir referansa bağlanmazsa farklı kararlar üretebilir. Bir uygulamanın güvenli sayılması, bir sorumluluğun yerine getirilmesi ve bir sonucun kanıtlanması kişiden kişiye değişir. Dış referansların ilk işlevi bu dağınıklığı ortak dil ve ölçütle azaltmaktır. Fakat referansın adını söylemek kurum kararını henüz kurmaz; önce türleri ayırmamız gerekir.
:::

---

## Dört tür, dört farklı soru

| Tür | Kurumun sorduğu soru |
|---|---|
| **Standart** | Hangi ortak beklentiye veya ölçüte göre hareket edeceğiz? |
| **Çerçeve** | Kararları ve sorumlulukları hangi bakışla ilişkilendireceğiz? |
| **Rehber** | Hangi uygulama seçeneklerini değerlendirebiliriz? |
| **Kurum içi belge** | Bizde kim, neyi, nasıl yapacak? |

::: {.notes}
Bu türleri “hangisi daha iyi?” diye sıralamak doğru değildir; her biri farklı bir karar ihtiyacına katkı verir. Standart ortak değerlendirme zemini, çerçeve ilişkileri düzenleyen bakış, rehber uygulama seçenekleri, kurum içi belge ise kurumun kendi rol ve işleyiş kararını sağlar. Bu ayrım, dış kaynağın neden olduğu gibi kopyalanamayacağını anlamak için gereklidir.
:::

---

## Referansın adı, uygulamanın kanıtı değildir

| Referansın sağlayabildiği | Tek başına gösteremediği |
|---|---|
| Ortak beklenti | Beklentiyi kurumda kimin uyguladığı |
| Düzenli bakış açısı | Uygulamanın gerçekten yürüdüğü |
| Uygulama önerisi | Önerinin her kurum için zorunlu olduğu |
| Yazılı kurum kuralı | Kuralın uygulandığı ve izlendiği |

::: {.notes}
Burada ortak bir sınır görüyoruz: referans, çerçeve ya da yazılı belge gerçek işleyişin yerine geçmez. Bir prosedürün bulunması işlemin yapıldığını; bir rehberde öneri bulunması önerinin kuruma uygun olduğunu; bir çerçevenin seçilmesi sorumlulukların gerçekten işletildiğini kanıtlamaz. Bu sınır bizi dış referans ile kurum içi belge arasındaki dönüşüme götürür.
:::

---

## Dış beklenti kurumda nasıl görünür?

```text
“Erişimler yönetilmeli”
          ↓ kurum bağlamında yorum
kapsamdaki sistemler + onaylayan rol + değişiklik işleyişi
          ↓ uygulama
yetki kaydı + gözden geçirme izi
```

::: {.notes}
Dış kaynak genel bir beklenti ya da uygulama önerisi sağlayabilir. Kurum ise bunun kendi kapsamındaki karşılığını belirlemek zorundadır: hangi sistemler, hangi onay sahibi, hangi işlem akışı ve hangi kayıt? Bu nedenle kurum içi belge dış kaynağın kopyası değil, genel yönün belirli aktör ve işleyişlere dönüştürülmesidir. Şimdi kurum içindeki belge türlerinin bu dönüşümde farklı işler yaptığını ayıralım.
:::

---

## Kurum içi belgeler aynı işi yapmaz

```text
politika  → yön ve ilke
prosedür  → işlem akışı
talimat   → belirli işin uygulanışı
kayıt     → gerçekleşen işlemin izi
```

**Belge yazmak ≠ uygulamak ≠ gözden geçirmek**

::: {.notes}
Belge adları yeterlilik etiketi değildir. Politika yönü belirlerken prosedür akışı, talimat belirli işin uygulanışını, kayıt ise gerçekleşen işlemin izini taşır. Bir prosedür yazılmış fakat uygulanmıyorsa ya da kayıtlar üretilmiş fakat hiç incelenmiyorsa metin ile gerçek işleyiş arasında boşluk vardır. Bu ayrım, ISO 27001 ile ISO 27002'nin neden aynı işlevde okunamayacağını hazırlıyor.
:::

---

## ISO 27001 ve ISO 27002: aynı soruya yanıt vermez

| ISO 27001 ile ilişkilendirilen bakış | ISO 27002 ile ilişkilendirilen bakış |
|---|---|
| BGYS'yi kurma, işletme, gözden geçirme ve iyileştirme | Güvenlik kontrollerinin uygulanmasına yönelik rehberlik |
| Kapsam, sorumluluk, uygulama ve kanıt ilişkisi | Değerlendirilebilecek uygulama seçenekleri |
| Yönetim sistemi içinde yaşatma | Uygulamanın nasıl ele alınabileceğini düşünme |

::: {.notes}
Bu sunum güncel madde veya kontrol kataloğu öğretmiyor; iki referansın kurum kararındaki işlevini ayırıyor. ISO 27002 düzeyindeki rehberlik olası uygulamayı düşünmeye yardım eder. ISO 27001 ile ilişkilendirilen BGYS yaklaşımı ise kararın kapsam, sorumluluk, izleme ve iyileştirme ilişkileri içinde nasıl sürdürüleceğini görünür kılar. Dolayısıyla bir öneriyi seçmek, yönetim sisteminin tamamını otomatik kurmaz.
:::

---

## Bir kontrol kararı neden tek başına yetmez?

**Personel belgelerine erişim**

```text
uygulama önerisi
      ↓
hangi belgeler? → kim onaylar? → görev değişince ne olur?
      ↓                              ↓
hangi kayıt oluşur?  ←  kim ve ne zaman inceler?
```

::: {.notes}
Personel belgelerine erişim için uygun bir uygulama yaklaşımı seçilmiş olsun. Kararın kurum içinde yaşaması için belgelerin kapsamı, onaylayan rol, görev değişikliğindeki güncelleme, oluşacak kayıt ve inceleme sorumluluğu ayrıca belirlenmelidir. Bu sorular yanıtlanmadığında teknik uygulama bulunsa bile BGYS bağlantıları eksik kalır. Referansların güncelliği de ayrı bir sınırdır.
:::

---

## Sürüm ve kaynak sınırı

- Eski kaynak adı veya alan listesi, güncel kontrol kataloğu değildir.
- Güncel madde, kontrol ve sertifikasyon koşulu ayrıca doğrulanır.
- Doğrulama; **yetkili yayımlayıcı + sürüm/tarih + geçerlilik** üzerinden yapılır.

::: {.notes}
Eski bir kaynakta ISO 17799 ya da ISO/IEC 27002:2005 alanlarının yer alması, bunların bugün güncel kontrol listesi olarak kullanılabileceği anlamına gelmez. Bu derste kavramsal işlev ayrımı yapıyoruz. Gerçek bir kurum güncel madde, kontrol veya sertifikasyon iddiası kuracaksa yetkili ve güncel metni ayrıca kontrol etmelidir. Aynı ilke birazdan COBİT ve ITIL için de sınırı belirleyecek.
:::

---

## COBİT ve ITIL hangi pencereyi açar?

| Bakış | Görünür kıldığı ilişki |
|---|---|
| **COBİT** | BT kararı ↔ kurumsal hedef ↔ karar ve izleme sorumluluğu |
| **ITIL** | Hizmet ↔ değişiklik/işleyiş ↔ etki, sorumlu ve izlenebilir sonuç |

**İkisi de:** ISO ailesinin parçası, teknik güvenlik ürünü veya hazır kontrol listesi değildir.

::: {.notes}
COBİT bu birimde “kararı kim verir, hangi hedefe hizmet eder, sonucu kim izler?” sorularını görünür kılan yönetişim bakışıyla ele alınıyor. ITIL ise bir talep ya da sistem değişikliğini yalnız teknik işlem değil, hizmete etkisi ve izlenebilir sonucu olan bir iş olarak düşünmeye yardım ediyor. Belirli sürüm, süreç, olgunluk modeli ya da sertifikasyon ayrıntısına girmiyoruz; böyle bir iddia ayrıca güncel yetkili kaynak gerektirir. Bu farklı bakışların ortak hedefi, uyumu izlenebilir hâle getirmektir.
:::

---

## “Uyumluyuz” neden yetersizdir?

```text
Hangi gereksinim?
      + hangi kapsam?
      + kimin kararı ve uygulaması?
      + hangi kanıt?
      + hangi gözden geçirme?
      = doğrulanabilir uyum iddiası
```

::: {.notes}
“Uyumluyuz” sözü, gereksinimin kaynağını, uygulandığı kapsamı ve gerçek işleyişin izini göstermiyorsa doğrulanabilir bilgi üretmez. Uyum bu nedenle bir etiket ya da tek seferlik kontrol listesi değil; gereksinim ile kurumun gerçek işleyişi arasında kurulan karar izidir. Şimdi bu izi beş adımda açacağız.
:::

---

## Uyum: izlenebilir beş adım

```text
1. Kaynak ve gereksinim
            ↓
2. Kapsam ve anlam
            ↓
3. Kurum kararı
            ↓
4. Uygulama ve kanıt
            ↓
5. Gözden geçirme ve iyileştirme ──┐
            ↑                       │
            └── değişen kaynak/bağlam
```

::: {.notes}
İlk adımda ilgili ve yetkili kaynak belirlenir. İkinci adımda gereksinimin hangi hizmet, varlık ve faaliyete uygulanacağı yorumlanır; belirsizliğin kimden doğrulanacağı kararlaştırılır. Üçüncü adım genel ifade ile kurumun sorumlusu, işleyişi ve belgeleri arasında bağ kurar. Dördüncü adım işleyişi yürütür ve onay, işlem, eğitim ya da gözden geçirme kaydı gibi izler üretir. Beşinci adım kanıtı ve bulguyu değerlendirir; kaynak ya da bağlam değiştiğinde karar döngüye geri girer.
:::

---

## Aynı referans, farklı kurum kararları

| Değişen bağlam | Değişebilecek karar |
|---|---|
| Hizmet ve bilgi varlıkları | Kapsam |
| Organizasyon yapısı | Sorumlu ve onay sahibi |
| İş akışı ve araçlar | Uygulama biçimi |
| Risk ve izleme ihtiyacı | Kanıt ve gözden geçirme |

**Fark keyfî olmamalı:** yorum + gerekçe + kanıt gösterilebilmelidir.

::: {.notes}
Beş adımlı akış bir sertifikasyon reçetesi değildir. Aynı referans, iki kurumun hizmeti, organizasyonu ve risk bağlamı farklı olduğunda farklı uygulama kararları doğurabilir. Kabul edilebilir farkın ölçütü, kurumun yorumunu ve gerekçesini izlenebilir kanıtla gösterebilmesidir. Bu ölçütü ortak vakada uygulayacağız.
:::

---

## Vaka: dört yönetim sorusu

Kurgusal birim; öğrenci/aday kayıtlarını, personel belgelerini ve hizmet başvurularını yönetiyor.

| Yönetim sorusu | Yararlanılan bakış |
|---|---|
| BGYS kapsamı ve yönetim sorumluluğu? | ISO 27001 |
| Personel belgelerine erişim seçenekleri? | ISO 27002 |
| BT kararının hedef ve sorumluluk bağı? | COBİT |
| Sistem değişikliğinin hizmete etkisi? | ITIL |

::: {.notes}
Tablo bir eşleştirme anahtarı ya da otomatik uygunluk sonucu değildir. Her satırda önce kurumun gerçek yönetim sorusu vardır; referans bu soruya belirli bir bakışla katkı verir. Öğrenciden adları söylemekle yetinmemesini, referansın o soruya neden uygun olduğunu açıklamasını isteyin. Sonraki slayt, seçimin kurum kararına nasıl tamamlanacağını gösterir.
:::

---

## Referans seçimi ancak bu zincirle tamamlanır

```text
dış referans
      ↓
kurum bağlamında yorum
      ↓
sorumlu + uygulama
      ↓
kanıt
      ↓
gözden geçirme
```

**Oklar otomatik uyum değil, her aşamada verilmesi gereken kurum kararlarıdır.**

::: {.notes}
Örneğin “ISO 27002 kullanılır” demek, erişimi kimin onaylayacağını ya da hangi kaydın inceleneceğini söylemez. Öğrencinin vaka kaydında referansın katkısından sonra sorumlu, uygulama, oluşacak izin ya da kayıt ve güncel kaynak doğrulaması görünmelidir. Okların anlamı otomatik sonuç değil, yorumlanması ve sahiplenilmesi gereken geçişlerdir.
:::

---

## Uygulama: vaka kaydına bir satır ekleyin

| Alan | Yazılacak bilgi |
|---|---|
| Yönetim sorusu | Kurum neyi çözmeye çalışıyor? |
| Referans ve katkısı | Hangi tür, hangi bakışı sağlıyor? |
| Kurum kararı | Kim, neyi, nasıl yapacak? |
| Kanıt | Hangi izin veya kayıt oluşacak? |
| Doğrulama | Güncel yetkili kaynak gerekli mi? |

::: {.notes}
Gruplar kurgusal birim için yeni bir yönetim sorusu seçsin. Amaç gerçek sertifikasyon dosyası veya güncel kontrol eşlemesi üretmek değil; referans türünü kurum kararına dönüştürme mekanizmasını göstermektir. Cevabı değerlendirirken referans adından çok zincirin tamamına bakın: soru açık mı, katkı doğru türde mi, sorumlu ve uygulama belirli mi, kanıt uygulamayı gerçekten gösterebilir mi, normatif iddia varsa doğrulama ihtiyacı belirtilmiş mi?
:::

---

## Son kontrol: kanıt neyi gösteriyor?

| Görülen unsur | Henüz kanıtlamadığı şey |
|---|---|
| Rehberde bir öneri | Önerinin kuruma uygunluğu |
| Yazılmış politika | Politikanın uygulanması |
| Üretilmiş kayıt | Kaydın gözden geçirilmesi |
| Referans adı | Güncel sürüm ve geçerlilik |

::: {.notes}
Bu tablo vaka çalışmasını hızlıca sınamak için kullanılır. Her satırda öğrenciden eksik geçişi tamamlamasını isteyin: uygunluk değerlendirmesini kim yapar, uygulamayı hangi kayıt gösterir, kaydı kim inceler, sürümü hangi yetkili kaynaktan doğrularız? Böylece konu başındaki “ortak ölçüt” ihtiyacı, yalnız adlandırma değil izlenebilir karar davranışı olarak kapanır.
:::

---

## Bir sonraki soruya geçiş

**Referans türünü ayırmak yetmez.**

Gerçek bir yükümlülük iddiası için:

```text
yetkili metin + güncellik + uygulanabilirlik + gerektiğinde uzman değerlendirmesi
```

::: {.notes}
Standart, rehber ve çerçevelerde kurduğumuz kaynak doğrulama alışkanlığı, kişisel veri yükümlülüklerinde daha da kritik hâle gelir. Saklama süresi, yaptırım ya da hukuki uygunluk gibi iddialar genel çerçeve bilgisiyle kurulamaz. Bir sonraki konuda hangi iddianın hangi yetkili metne dayanması gerektiğini sorgularken burada öğrendiğimiz kaynak, kapsam, kurum kararı ve kanıt zincirini kullanacağız.
:::
