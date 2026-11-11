---
title: "Uygulama: belge mimarisi ve hedef–kanıt eşlemesi"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-11-10
execute:
  echo: false
---

## Görev: hedeflerinizi sürdürülebilir kılacak belge ve kanıt yapısını kurun

NovaPazar adlı kurgusal e-ticaret şirketi için güvenlik hedefleri yazılmıştır. Şimdi bu hedefleri sürdürülebilir kılacak belgeleri ve gerçekleşenin kanıtını belirleyeceksiniz.

| Kısa ad | Konu | Gözlem |
|---|---|---|
| `is-sorumlusu` | Ayrıcalıklı hesap sahipliği | 25 ayrıcalıklı hesaptan 6'sının belgelenmiş iş sorumlusu yok |
| `erisim-incelemesi` | Erişim incelemeleri | Son üç ayda planlanan 3 erişim incelemesinden yalnız 1'i tamamlanmış |
| `geri-yukleme` | Geri yükleme denemeleri | Son 3 geri yükleme denemesinden 1'i başarısız olmuş |
| `erisim-talebi` | Erişim talebi yöntemleri | BT, İK ve Operasyon farklı yöntemlerle talep iletiyor; geçen ay 20 talepten 8'i standart formla işlenmiş |
| `yonetim-raporu` | Yönetimin isteği | Üst yönetim her güvenlik hedefi için bir iş sahibi ve düzenli rapor istiyor |

Şirket, kişiler ve sayılar kurgusaldır.

::: {.notes}
Bu çalışma, hedeflerinizi ölçütleriyle birlikte belge ve kayıt düzenine bağlar. Hesap sahipliği hedefi (`is-sorumlusu`) rehber örnek olarak çözülür. Sizin hedefleriniz `erisim-incelemesi`, `geri-yukleme` ve `erisim-talebi` ihtiyaçlarından ikisi olmalıdır. Kısa adlar önceki çalışmayla aynıdır; tablolarda satırları eşleştirmeye yarar, ölçütü ve olguyu yine tam yazarsınız. Önceki çalışmada iki hedef yazdıysanız onları kullanın. Yazmadıysanız seçtiğiniz iki ihtiyaç için bir sonraki slaytta kısa hedef cümlesini şimdi yazın.

Her belge ve kayıt bu hedeflerden birine bağlanacak; bağlanamayan belge listeye girmez.
:::

---

## Hedeflerinizi buraya taşıyın

**Rehber hedef (hesap sahipliği, `is-sorumlusu`):** Belgelenmiş iş sorumlusu olan ayrıcalıklı hesap oranı 30 günde 19/25'ten 25/25'e çıkar. İş sahibi BT Hizmetlerinden Sorumlu Yönetici; teknik uygulayıcı BT Sistem Yönetimi Uzmanı.

**Hedeflerim**

| Hedefin kısa adı | Hedef ifadesi | Ölçüt | İş sahibi | Teknik uygulayıcı |
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |

::: {.notes}
Hedef ifadesini ve ölçütü buraya geçirmek, belge yapısının hangi hedefe hizmet ettiğini unutmamanızı sağlar. Belge yapısını hedefin ölçütüne göre kuracaksınız: ölçüt hangi sayıyı izliyorsa o sayıyı gösterecek kaydın nereden geleceğini de belirleyeceksiniz.
:::

---

## Şirketin mevcut belge ve kayıtları

| Mevcut | Durum |
|---|---|
| Bilgi Güvenliği Politikası | Genel; üst yönetimce onaylı. Erişim, hesap sahipliği ve yedekleme başlıkları yok |
| Hesap listesi | BT'nin tuttuğu tablo; "iş sorumlusu" sütunu var, bazı satırlar boş |
| Yedekleme sistemi günlüğü | Her gece yedeğin başarılı ya da başarısız tamamlandığını kendiliğinden yazar |
| BT uzmanı Kerem'in kişisel notları | Geri yükleme adımlarını içerir; onaylı değil, sürümü yok |
| İK ayrılış formu | Ayrılan personelin adı ve tarihi; yetki kapatma alanı yok |
| Erişim incelemesi | Tamamlanan tek incelemenin e-posta yazışması; form ya da liste yok |
| Üst yönetim raporu | Yok |

::: {.notes}
Bu liste, belge ihtiyacını belirlerken yeniden yazmak zorunda olduğunuz şeyleri ve zaten var olanı ayırmanıza yarar. Örneğin yedekleme günlüğü bir kayıttır, ama bir geri yükleme denemesinin kaydı değildir; yalnız yedeğin alındığını söyler. Kerem'in notları bir talimata dönüştürülebilir, ama onaylı ve sürümlü olmadıkça kurumun belgesi sayılmaz. Her hedef için neyin mevcut, neyin eksik ve neyin yeniden düzenlenmesi gerektiğine bu listeye bakarak karar verin.
:::

---

## Tablo alanları ne anlama geliyor?

| Alan | Anlamı | Rehber örnekte değeri nereden geliyor? |
|---|---|---|
| Belge türü | Politika, prosedür, talimat, form ya da dış kaynaklı doküman | İşlevinden |
| Amacı | Belgenin hangi kararı, akışı ya da adımı taşıdığı | Hedefin gerektirdiği iş |
| Bağlı iş | Belgenin yönettiği işlem | Hedefin faaliyeti |
| Hazırlayan / sahibi / onaylayan | Metni yazan / güncelliğinden sorumlu / yürürlüğe sokan | Roller arasından ayrı seçilir |
| Bağlı kayıt | İş yapılırken oluşan iz | Formun doldurulmuş hâli ya da sistem çıktısı |
| Doğrulanan olgu | Kaydın gösterdiği somut durum | Hedefin ölçütü |

::: {.notes}
Belge adı tek başına yeterli bir çıktı değildir. Aynı adı taşıyan iki belge farklı işler yapabilir; bu yüzden amacı ve bağlı işi yazıyoruz. "Doğrulanan olgu" sütunu en önemlilerinden biridir: kaydın neyi kanıtladığını açıkça söyler. Bir hedefin ölçütü "iş sorumlusu belgelenmiş hesap sayısı" ise olgu, bu sayının hangi kayıttan çıkarılacağını göstermelidir.
:::

---

## Rehber: hesap sahipliği (`is-sorumlusu`) için belge yapısı

| Belge türü | Belge adı | Amacı | Bağlı iş |
|---|---|---|---|
| Politika | Hesap Sahipliği Politikası | Her ayrıcalıklı hesabın belgelenmiş iş sorumlusu olması kuralını koyar | Tüm ayrıcalıklı hesaplar |
| Prosedür | Hesap Sahipliği Doğrulama Prosedürü | BT, birim yöneticileri ve komite temsilcisi arasındaki doğrulama sırasını belirler | Dönemlik sahiplik doğrulaması |
| Talimat | Hesap Sahipliğini Listeye İşleme Talimatı | BT uzmanının doğrulanan iş sorumlusunu hesap listesine yazma adımlarını gösterir | Hesap listesi güncellemesi |
| Form | Hesap Sahipliği Doğrulama Formu | Birim yöneticisinin hesap için iş gerekçesini ve sorumluyu beyan ettiği bilgiyi toplar | Birim yöneticisi doğrulaması |

::: {.notes}
Dört belge dört ayrı iş görüyor ve hiçbiri diğerinin tekrarı değil. Kendi tablonuzda bu dört türün hepsinin gerekli olmayabileceğini düşünün: bir hedef için gerçekten eksik olanı ekleyin, mevcut olanı yeniden kullanın ve gereksiz belge eklemeyin.
:::

---

## Rehber: hesap sahipliği (`is-sorumlusu`) için sorumluluk ve kanıt

| Belge | Hazırlayan | Belge sahibi | Onaylayan |
|---|---|---|---|
| Hesap Sahipliği Politikası | BT Hizmetlerinden Sorumlu Yönetici | BT Hizmetlerinden Sorumlu Yönetici | Genel Müdür |
| Doğrulama Prosedürü | BT Hizmetlerinden Sorumlu Yönetici | BT Hizmetlerinden Sorumlu Yönetici | Bilgi Güvenliği Komitesi |
| Listeye İşleme Talimatı | BT Sistem Yönetimi Uzmanı | BT Sistem Yönetimi Uzmanı | BT Hizmetlerinden Sorumlu Yönetici |
| Doğrulama Formu | BT Sistem Yönetimi Uzmanı | BT Hizmetlerinden Sorumlu Yönetici | BT Hizmetlerinden Sorumlu Yönetici |

| Bağlı kayıt | Kayıtla doğrulanan olgu | İmzanın beyanı |
|---|---|---|
| Doldurulmuş ve onaylı doğrulama formu | Her hesap için iş sorumlusunun adı, yöneticinin beyanı ve tarihi | Birim yöneticisi hesabın iş gerekçesini uygun bulduğunu ve iş sorumlusunu beyan eder |
| Güncel hesap listesi dökümü | 25 açık hesabın her birinde iş sorumlusu alanının dolu olduğu ve dökümün tarihi | İmza yok; döküm sistem çıktısıdır |

::: {.notes}
Talimatı hazırlayan BT uzmanı aynı zamanda talimatın sahibidir, ama onaylayan başka bir roldür; bu tabloda hazırlayan ile onaylayan ayrıdır. İmza listenin güncellendiğini göstermez. Bunun için tarihli güncel hesap dökümü ayrı izdir. İki kaydın ikisi de kesin ve değiştirilemez kanıt değildir.
:::

---

## Rehber: hesap sahipliği (`is-sorumlusu`) kayıtları yönetime ne söyler?

| Alan | Hesap sahipliği (`is-sorumlusu`, öneri) |
|---|---|
| Bu kayıtlar yönetime hangi bilgiyi sağlıyor? | 25 hesabın kaçında iş sorumlusunun belgelendiği (19/25'ten 25/25'e) ve beyanların tarihleri |
| Bu bilgiyi kim, ne zaman inceliyor? | İş sahibi dönem sonunda komiteye sunar; komite temsilcisi dönem sonu toplantısında inceler |
| Hangi kararı etkiliyor? | Hedefin tamamlanmış sayılıp sayılmayacağını, süre uzatımını ve yeni açılan hesapların da aynı kurala bağlanmasını |

::: {.notes}
Bu satır, kayıtların arşivde durmak yerine karara hizmet ettiğini gösteriyor. Rakamlar ve süreler bir standardın zorunlu kıldığı bir sıklık ya da biçim değildir. Komite kayıtlarda tutarsızlık görürse ek bilgi ister.
:::

---

## Görev ve başarı ölçütü

**Görev:** Seçtiğiniz iki hedef için belge yapısını, sorumluları ve kayıtları tablolara yazın.

**Başarı ölçütü:**

1. Her belge belirli bir hedefe ve onun faaliyetine bağlı; hedeften kopuk belge yok.
2. Her belgenin amacı ve bağlı işi yazılı; belge adı tek başına çıktı sayılmamış.
3. Hazırlayan, sahip ve onaylayan yazılı; onaylayan ile işi uygulayan aynı kişi değil.
4. Kayıt sütununda doldurulmuş form ya da sistem çıktısı yazılı; boş form kanıt olarak gösterilmemiş.
5. Her kayıt için doğruladığı olgu açık; imzanın hangi beyana ait olduğu belirtilmiş.
6. Mevcut belge ve kayıtlar (yedekleme günlüğü, Kerem'in notları gibi) neyi gösterip neyi göstermediğiyle değerlendirilmiş.
7. Belge ve kayıtların yönetime hangi bilgiyi sağladığı iki üç cümleyle açıklanmış.

::: {.notes}
Altıncı ölçüt özellikle önemli: elinizdeki mevcut belgeleri yok saymayın, ama olduğundan fazla bir şey de yüklemeyin. Yedinci ölçüt belge ve kayıtların bir yönetim sistemi içinde neden durduğunu sorar: bu kayıtlar sonuç raporunu nasıl besler, kim bakar ve hangi kararı etkiler.
:::

---

## Belge yapısı tablosu

| Hedefin kısa adı | Belge türü | Belge adı | Amacı ve bağlı iş |
|---|---|---|---|
|   |   |   |   |
|   |   |   |   |
|   |   |   |   |
|   |   |   |   |
|   |   |   |   |
|   |   |   |   |

::: {.notes}
Her hedef için gerekli olduğunu düşündüğünüz belgeleri yazın. Üç ile altı satır arasında bir sayı bekleyebilirsiniz; satır sayısı değil belgenin işlevi önemlidir.
:::

---

## Sorumluluk tablosu

| Hedefin kısa adı | Belge | Hazırlayan | Belge sahibi | Onaylayan |
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |
|   |   |   |   |   |
|   |   |   |   |   |
|   |   |   |   |   |
|   |   |   |   |   |

::: {.notes}
Roller dört birimden ve üst yönetimden seçilebilir. Hazırlayan ve onaylayan farklı kişiler olmalı; iş sahibi ile teknik uygulayıcıyı hedef tablosundaki gibi ayrı tutun.
:::

---

## Kayıt ve doğrulanan olgu tablosu

| Hedefin kısa adı | Bağlı kayıt | Kayıtla doğrulanan olgu | İmzanın beyanı (varsa) |
|---|---|---|---|
|   |   |   |   |
|   |   |   |   |
|   |   |   |   |
|   |   |   |   |

::: {.notes}
Kayıt, doldurulmuş formu, sistem çıktısını ya da toplantı tutanağını içerebilir. Olgu sütununa "kayıt tutulur" yazmayın; kaydın hangi somut durumu gösterdiğini yazın: kim, neyi, hangi tarihte.
:::

---

## Yönetim sistemiyle ilişki tablosu

| Hedefin kısa adı | Bu kayıtlar yönetime hangi bilgiyi sağlıyor? | Bu bilgiyi kim, ne zaman inceliyor? | Hangi kararı etkiliyor? |
|---|---|---|---|
|   |   |   |   |
|   |   |   |   |

::: {.notes}
Belge ve kayıtlar yalnızca arşivde durmak için değil, izleme ve karar için vardır. Bu tabloya iki üç cümleyle şunu yazın: dönem sonunda iş sahibi komiteye hangi kayıtları dayanak olarak sunuyor ve komite bunlara bakarak neyi karara bağlıyor.
:::

---

## Çapraz kontrol: komşunuzun tablosunu sınayın

Başarı ölçütlerinin 1–5'ini komşunuzun belge yapısı, sorumluluk ve kayıt tablolarına uygulayın. Bulduğunuz her sorunu "satır numarası + sorun + öneri" olarak yazın.

::: {.notes}
Başkasının tablosunu değerlendirmek kendi hatalarınızı fark etmenin kısa yoludur. Bulguları kişisel yargı olarak değil, yukarıdaki ölçütlere dayanarak yazın. Bir sorun bulamazsanız hangi ölçütlere göre baktığınızı yazın.
:::

---

## Kayıtları okuma: beş durum hangi sınıfa girer?

Hesap Sahipliği Politikası yürürlüktedir: *"Her ayrıcalıklı hesabın belgelenmiş bir iş sorumlusu bulunur."*

**Uygunsuzluk:** bir gereksinimin karşılanmaması.
**Eksik kanıt:** kural karşılanmış olabilir, ama bunu gösterecek kayıt yok ya da kaydın gerekli bir alanı eksik.
**Ek bilgi ihtiyacı:** kayıtlar tam, ama kararı vermek için sorulması gereken bir olgu kalıyor.

| Durum | Olgu |
|---|---|
| Yeni hesap | Hesap listesinde geçen ay açılan "siparis_yonetici" hesabının iş sorumlusu alanı boş |
| Sözlü beyan | BT uzmanı "iş sorumlusu boş olan iki hesabın doğrulama formunu aldım ve listeye işledim" diyor; doğrulama formu yok; hesap listesi dökümü bu iddiadan önceki tarihli |
| Tarihsiz form | Yöneticinin imzaladığı doğrulama formunda hesap adı ve iş sorumlusu yazılı; form tarihsiz |
| Ayrılan sorumlu | Hesap listesinde iş sorumlusu "D. Aksoy"; İK listesine göre D. Aksoy geçen ay işten ayrılmış |
| Tam kayıt | Tarihli, imzalı doğrulama formu; hesap listesinde aynı ad; BT işlem kaydı aynı tarihli |

Eldeki kayıtların desteklediği sonuçlara göre her durumu üç sınıftan birine ya da "karşılandığı kayıtla gösteriliyor" sınıfına yerleştirin ve gerekçesini yazın.

| Durum | Sınıf | Gerekçe | Gereken iş |
|---|---|---|---|
| Yeni hesap |   |   |   |
| Sözlü beyan |   |   |   |
| Tarihsiz form |   |   |   |
| Ayrılan sorumlu |   |   |   |
| Tam kayıt |   |   |   |

::: {.notes}
Uygunsuzlukta düzeltici işlem gerekir; "Gereken iş" sütununu sınıfa göre doldurun. Gerekçenizde hangi gereksinimi değerlendirdiğinizi, hangi olgunun kayıtla gösterildiğini ve hangisinin gösterilmediğini ayrı yazın. Uygunsuzluk, kayıt dışındaki doğrulanmış gözlemlerle de saptanabilir.

Bir kaydın bulunamaması, işin yapılmadığını tek başına göstermez. Örneğin doğrulama formu bulunamıyorsa iş sorumlusunun atanmadığı sonucu tek başına çıkarılamaz; önce kayıt aranır ve atamanın yapılıp yapılmadığı araştırılır. Kayıt oluşturma veya saklama şartı varsa ve bu şartın karşılanmadığı doğrulanırsa bu da bir uygunsuzluktur. Bu nedenle eksik kanıtı değerlendirirken olayın gerçekleşmesi ile kayıt şartının karşılanmasını ayrı inceleyin; bir kişinin sözlü açıklamasını kayıt yerine koymayın.
:::

---

## Kısa aktarım: düzenli rapor isteği için zincir

Üst yönetim her güvenlik hedefi için bir iş sahibi ve düzenli rapor istiyor (`yonetim-raporu`). Bu isteği hedeften kayda uzanan bir zincire çevirin.

| Halka | Sizin yazacağınız |
|---|---|
| Hedef ifadesi (ölçütle) |   |
| Yazılı kural (hangi belge ne diyor?) |   |
| İş akışı (kim kimden ne alıyor?) |   |
| Uygulama kaydı ve doğruladığı olgu |   |

::: {.notes}
Bu çalışmada yeni belge yazmıyorsunuz; zinciri baştan sona kuruyorsunuz. Hedef ifadesinde bir ölçüt olmalı: rapor sunulan hedef sayısı gibi bir şey düşünebilirsiniz. Kural, akış ve kayıt bu ölçütle uyumlu olmalı. Kaydın olgusunu yazarken imzanın hangi beyana ait olduğunu da düşünün: toplantı tutanağındaki bir imza görüşmenin yapıldığını gösterir; hedefin gerçekleştiği ayrı kayıtla gösterilir.
:::

---

## Öz değerlendirme

1. Başarı ölçütlerini satır satır sınayın.
2. Bir belgeyi kaldırsanız hedef kanıtsız mı kalır, yoksa hiçbir şey değişmez mi?
3. Hedeften kayda uzanan zinciri sesli olarak okuyabiliyor musunuz?

::: {.notes}
İkinci soru gereksiz belgeyi ayıklamak için iyi bir sınamadır: bir belgeyi çıkarınca hiçbir şey değişmiyorsa o belge listede gereksizdir. Üçüncü soru hedeften kanıta uzanan yolu bütünüyle görmenizi sağlar; bir halka eksikse okurken takılırsınız.
:::
