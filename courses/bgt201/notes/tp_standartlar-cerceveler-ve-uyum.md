---
title: "BGYS: Kapsam, Roller ve PUKÖ"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I · Hafta 4"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: today
execute:
  echo: false
---

## Bir güvenlik kararını birimde nasıl yürütürüz?

BGYS, önlemleri karara, sorumluluğa ve değerlendirmeye bağlar.

Kayıt ve Başvuru Birimi: **başvuru alma → değerlendirme → sonuç gönderme**.

- **A:** birim sorumlusu; **B, C, D:** başvuru görevlileri.
- **E:** eylül başında birimde çalışan stajyer.
- Bilgi ortamları: kâğıt formlar, “Başvurular” klasörü, e-posta.

Birimler, kişiler, tarihler ve sayılar kurgudur.

::: {.notes}
Bilgi güvenliği yönetim sistemi (BGYS) için önlemlerin hangi amaca hizmet ettiği, kimin karar verdiği ve sonucun nasıl değerlendirileceği birlikte düşünülür. Buradaki soru, bu yönetimi belirli bir birimin günlük işinde yürütmektir. Birimin işi kâğıtta başlayıp taranmış dosya ve e-posta üzerinden devam eder. Bu yüzden yalnız klasöre erişimi ayarlamak bütün başvuru sürecini yönetmeye yetmez. Kararların uygulanacağı koşullar, kapsayacağı işler ve sorumlu işlevler açık olmalıdır.
:::

---

## Kararı etkileyen koşullar nelerdir?

**Kurum bağlamı**, kararları etkileyen iç ve dış koşulların bütünüdür.

| İç koşullar | Dış koşullar |
|---|---|
| Başvuru işi; A, B, C, D ve E | Merkez İK: personel bilgisi |
| Kâğıt, klasör ve e-posta kullanımı | Dış BT: hesap işlemleri |
| İşin zamanında ve hatasız yürütülmesi | Merkez BT: e-posta hizmeti |

::: {.notes}
İç koşullar birimin kendi işi, çalışanları ve bilgi ortamlarıdır. Dış koşullar ise başka bir yerde yönetildiği halde bu işi etkiler. Örneğin bir çalışanın ayrıldığı bilgi İK'da doğar, ama onun klasör erişimine ilişkin karar birimdedir. Birimin bu bilgiyi alabilmesi gerekir. E-posta hizmetini merkez BT'nin işletmesi de gönderim işini etkiler. Bağlamı belirlemek, bir kararı uygularken hangi taraflarla ilişki kurulacağını anlamamızı sağlar.
:::

---

## Beklenti hangi karara dönüşür?

**İlgili taraf**, süreçten etkilenen ya da süreci etkileyen kişi veya kuruluştur.

| Taraf | Beklenti → karar |
|---|---|
| Başvuru sahibi | Bilgisi yanlış kişiye açılmasın → gönderim ve erişim kuralı |
| Görevliler B, C, D | İş için erişim açık olsun → göreve bağlı yetki |
| Merkez İK | Özlük süreci kendisinde kalsın → sınır ve bildirim ilişkisi |
| Dış BT | Onaylı talep gelsin → talep ve kapama kaydı |
| Üst yönetim | Kaynak gerekçesi görülsün → kaynak ve gözden geçirme kararı |

::: {.notes}
Tarafların adlarını sıralamak, karar için yeterli bilgi vermez. Her beklentinin hangi düzenlemeyi gerektirdiğine bakarız. Başvuru sahibinin gizlilik beklentisi ile görevlilerin iş yapabilmek için erişim ihtiyacı birlikte karşılanmalıdır. A da işin zamanında ve hatasız yürümesini bekler. Örneğin bütün erişimi kapatmak gizlilik amacıyla ilişkilendirilebilir, ama başvuru işini durdurur. Yönetim kararı, tarafların beklentilerini birimin işiyle birlikte değerlendirir.
:::

---

## Kapsam, hangi iş hakkında karar verdiğimizi söyler

**Kapsam**, güvenlik yönetiminin ele aldığı süreç, bilgi, ortam ve kurum parçasının açık sınırıdır.

| Birimin kapsamına aldığı | Başka süreçte kalan |
|---|---|
| Başvuru alma, değerlendirme, sonuçlandırma | Merkez İK'nın özlük süreci |
| Kâğıt formlar ve dolap | Personel özlük dosyaları |
| “Başvurular” klasörü ve sonuç yazıları | Bu dosyaların yaşam döngüsü kararları |

::: {.notes}
“Kurumun bilgi güvenliği” ifadesi tek başına hangi süreç ve bilginin ele alındığını belirtmez. Bu birim kendi başvuru sürecini ve onun bilgi ortamlarını seçmiştir. Özlük dosyalarının süreç sahibi merkez İK'dır; birim bu dosyaların yaşam döngüsüne karar vermez. Bu nedenle kendi sınırının dışında bırakmıştır. Daha geniş bir yönetim sistemi bütün kurumu kapsayabilir. Sınırın gerekçesi, dosyanın adı kadar o dosya hakkındaki kararların nerede verildiğidir.
:::

---

## Sınırın dışından hangi bilgi ve hizmet gerekiyor?

**Bağımlılık**, kapsam dışındaki bir tarafın birimin işini etkileyen bilgi ya da hizmeti sağlamasıdır.

| Sağlayan | Birimin ihtiyaç duyduğu |
|---|---|
| Merkez İK | Ayrılış ve görev değişikliği bilgisi |
| Dış BT | Hesap açma/kapama işlemi ve kaydı |
| Merkez BT | E-posta hizmeti |

**İK → ayrılış bilgisi → A'nın erişim kararı → dış BT'nin kapama işlemi**

::: {.notes}
Özlük dosyası İK'da kalırken ayrılış bilgisinin birime ulaşması gerekir. A bu bilgiye dayanarak erişimin kaldırılmasını ister; dış BT de işlemi gerçekleştirir. Bilginin kime, hangi yolla ve ne zaman iletileceği belirlenmezse hesap açık kalabilir. Kapsam sınırı süreç sahipliğini ayırır, bağımlılık ise bu sınırı geçen ihtiyacı açıklar. Başvuru işiyle hiçbir bilgi veya işlem bağı bulunmayan yemekhane kart sistemi için böyle bir bağımlılık kurulmaz.
:::

---

## İki kapsam kartının gerekçesi

| Kart | Etiket | Gerekçe |
|---|---|---|
| Kâğıt form ve dolap | Dahil | Başvuru bilgisi ve ortamı birimin işindedir. |
| Özlük dosyaları | Kapsam dışı ama bağımlılık var | Dosyanın süreç sahibi İK; ayrılış bilgisini birime İK sağlar. |

**Üç etiket:** dahil / kapsam dışı ama bağımlılık var / kapsam dışı ve bağ yok.

::: {.notes}
İlk kartta birim hem başvuru işini yürütür hem kullanılan bilgi ve ortam hakkında karar verir. İkinci kartta dosyayı yönetme işi İK'ya aittir. Buna rağmen dosyada işlenen ayrılışın birimin erişim kararına ulaşması gerekir. “Bağımlılık var” gerekçesinde karşı tarafın ne sağladığı açıkça yazılır. Böylece dosyanın süreç sahipliği ile dosyadan doğan bir bilginin başka bir işte kullanılması ayrı tutulur.
:::

---

## Dört kapsam kartını sınıflandırın

**Görev:** Her karta üç etiketten birini ve gerekçesini yazın.

**Veri:** “Başvurular” klasörü; sonuç yazısının gönderimi; dış BT hesap işlemleri; yemekhane kart sistemi.

**Ölçüt:** Gerekçe süreç sahipliğine veya bilgi/işlem bağına dayansın; bağımlılıkta karşı tarafın sağladığı belirtilsin.

**Üretim:** Kart, etiket ve tek cümlelik gerekçe içeren dört satırlık tablo.

::: {.notes}
Her kartı değerlendirirken birimin hangi kararı verdiğini ve başka bir tarafın katkısına ihtiyaç duyup duymadığını ayrı düşünün. Bir unsurun teknik olması onun mutlaka sınırın dışında olduğunu söylemez. Karşı tarafın adını yazmak da bağımlılığı açıklamaya yetmez; sağladığı bilgi ya da hizmet belirtilmelidir. Aynı işin kararını vermek ile o işte kullanılan hizmeti işletmek birbirinden ayrılabilir.
:::

---

## Kapsam kartlarının çözümü

| Kart | Etiket ve gerekçe |
|---|---|
| “Başvurular” klasörü | Dahil: taranmış kayıtlar ve erişim kararı birime ait. |
| Sonuç yazısının gönderimi | Dahil: kime hangi sonucun gideceğine birim karar verir. |
| Dış BT hesap işlemleri | Kapsam dışı ama bağımlılık var: onaylı yetkiyi uygular, işlem kaydı sağlar. |
| Yemekhane kart sistemi | Kapsam dışı ve bağ yok: başvuru işiyle ilişkisi bulunmuyor. |

::: {.notes}
Sonuç gönderiminde iki iş ayrılır: birim gönderilecek sonucu ve alıcıyı belirler; merkez BT e-posta hizmetini işletir. Gönderimin kapsam içinde olması, kullanılan hizmetin de birim tarafından işletildiği anlamına gelmez. Aynı ayrım hesap işlemlerinde görülür. Dış BT erişim kararını uygular, A ise kimin yetkili olduğuna karar verir ve uygulamanın sonucunu izler. Yemekhane sisteminde başvuru işine uzanan bir ilişki bulunmadığından bağımlılık gerekçesi de yoktur.
:::

---

## Aynı kararın beş sorumluluk işlevi vardır

| İşlev | Yaptığı iş | Birimde |
|---|---|---|
| Yön ve kaynak | Amaç ve kaynak kararı | A / üst yönetim |
| Karar sahibi | Erişim veya gönderim kuralını onaylama | A |
| Uygulayıcı | İşi yürütme ve işlem kaydı | Dış BT; B, C, D |
| Gözden geçiren | Kayıtları ölçütle karşılaştırıp bulgu yazma | A ya da A dışında görevlendirilen kişi |
| Dokümantasyon | Karar ve kayıtları güncel, bulunur tutma | A; kayıtları işi yapanlar üretir |

::: {.notes}
Bu işlevler bir hiyerarşi veya işlem sırası oluşturmaz. Bir kararın farklı ihtiyaçlarını karşılar. Küçük birimde A hem karar sahibi hem gözden geçiren olabilir. Hangi ölçüte ve hangi kayda bakacağı açık olmalıdır; BT'nin yetki dökümü gibi ayrı bir kaynaktan gelen bilgi değerlendirmeyi destekler. Kayıtları dış BT ve görevliler üretirken A bu kayıtların onaylı kararlarla birlikte bulunabilmesini izler. A'nın aylık incelemesi birimin operasyonel gözden geçirmesidir; bağımsız iç tetkik yerine geçmez.
:::

---

## Yönetim desteği, yapılacak işe zaman ve kaynak ayırır

**Yönetim desteği**, onay vermenin yanında zaman, kaynak ve görevlendirme sağlamayı ve süreci gözden geçirmeyi kapsar.

- Gönderimde ikinci kişi kontrolü → o kişinin çalışma zamanı.
- Aylık yetki incelemesi → görevli ve ayrılmış zaman.
- A'nın yetkisini aşan kaynak → üst yönetim kararı.

::: {.notes}
İkinci bir kişinin sonuç yazısını incelemesi, mevcut iş yüküne ek bir görevdir. Bu görevin ne zaman yapılacağı belirlenmezse onaylanmış kural günlük işte aksayabilir. Aylık yetki incelemesi de benzer biçimde zaman ister. Büyük kurumlarda bu işlevler farklı unvanlara veya bir komiteye dağıtılabilir. Küçük birimde daha az kişi üstlenebilir; her işlev için kimin görevli olduğu ve gerekli zamanın nereden sağlanacağı yine belirlenir.
:::

---

## Klasöre erişim hangi yoldan veriliyor?

**A onaylar → dış BT hesabı açar veya kapatır.**

- **Onaylı talep:** kişiyi ve verilecek erişimi yazan, A'nın onayladığı talep.
- **Açma/kapama kaydı:** BT'nin işlemi ne zaman yaptığını yazdığı kayıt.
- **Yetki dökümü:** klasöre şu anda erişebilen hesapların listesi.
- **Görev listesi:** birimde şu anda çalışan kişiler.
- **Dış BT oturum kaydı:** kapsadığı dönemde hesapların klasöre girişleri.
- **İK kaydı:** personelin ayrılışının işlendiği kayıt.

::: {.notes}
Göreve başlayan kişi için A talebi onaylayıp dış BT'ye iletir; ayrılan ya da görevi değişen kişinin erişimi aynı yoldan kaldırılır. Talep, kararın kime ve hangi erişim için verildiğini; işlem kaydı ise BT'nin ne yaptığını anlatır. Yetki dökümü mevcut durumu, görev listesi de mevcut çalışanları karşılaştırmaya açar. Oturum kaydı kullanımı inceler. Bu kayıtlar farklı sorulara yanıt verdiği için birinin yerine diğerini koymadan birlikte değerlendirilir.
:::

---

## PUKÖ, sonucu yeniden karara bağlayan döngüdür

**PUKÖ**, bir yönetim kararının planlanması, uygulanması, uygulamanın izlerinin önceden konmuş ölçütle karşılaştırılması ve bulguya göre önlem alınıp kararın yeniden kurulması döngüsüdür.

**Planla → Uygula → Kontrol Et → Önlem Al → Planla**

Son aşamada değişen karar yeni plana girer.

::: {.notes}
Kapsam ve roller belirlense de uygulama sürerken kişiler ve koşullar değişebilir. Bir kez yazılmış kuralın bu değişikliklerde nasıl işlediğine bakmak gerekir. Döngü, kararın uygulanmasıyla bitmez; sonuçların değerlendirilmesi ve kararın gerekirse değiştirilmesiyle sürer. Bu yüzden dört aşama bir kez tamamlanan bir iş listesi gibi okunmaz. Her turda elde edilen sonuç, sonraki turda neyin ve nasıl yapılacağını etkiler. Erişim düzenini bu dört aşamada sırayla inceleyebiliriz.
:::

---

## Planla: kararın ölçütünü önceden belirle

**Planla**, korunacak bilgiyi ve amacı belirleyip kararın ölçütünü, sorumlusunu, uygulayıcısını, gerekli kaynakları ve gözden geçirme zamanını tanımlama aşamasıdır.

**Ölçüt**, sonradan bakılacak, karşılanıp karşılanmadığı söylenebilen koşuldur.

| 1 Eylül kararı | Ölçüt |
|---|---|
| Klasöre yalnız ilgili görevliler erişir. | Her hesap güncel görevli ve onaylı taleple eşleşir. |
| Ayrılanın veya görevi değişenin erişimi kaldırılır. | En geç 1 iş günü içinde kaldırılır. |

Sahip **A**, uygulayıcı **dış BT**; inceleme **ayın son iş günü**.

::: {.notes}
Amaç, taranmış başvuruların ilgisiz kişilerce görülmesini ve değiştirilmesini önlemektir. A'nın planında bir hesabın uygunluğu hem görevliyle hem onayla ilişkilendirilmiştir. Ayrılış için de sayılabilir bir süre vardır. İncelemede yetki dökümü görev listesiyle karşılaştırılacaktır. Ölçütün önceden yazılması, sonradan sonuca göre başarı tanımı değiştirmemeyi sağlar. Ancak planda bir boşluk kalmıştır: ayrılış bilgisinin A'ya ve BT'ye kimden, hangi yolla ulaşacağı yazmıyor. Bu bilgi karara zamanında ulaşmazsa süre koşulu tehlikeye girer.
:::

---

## Uygula: karar günlük işe ve kayda dönüşür

**Uygula**, planlanan kararı günlük işte gerçekleştirme ve yapılan işlemin izini kaydetme aşamasıdır.

- Eylül başı: A–E için onaylı taleplerle hesap açıldı.
- D, yeni belge tarayıcısıyla başvuruları klasöre yüklüyor.
- **11 Eylül cuma:** E'nin stajı bitti; ayrılış İK'ya işlendi.
- **14 Eylül pazartesi sonu:** bir iş günü ölçütüne göre kapama sınırı.

**İK'da ayrılış → birimde erişim kararı → BT'de kapama**

::: {.notes}
Uygulamada onaylı talep hesap açma işlemine dönüşmüştür. Birim aynı dönemde tarayıcı kullanmaya da başlamıştır. E'nin ayrılışı yeni bir işlem gerektirir. Cuma gününü izleyen ilk iş günü pazartesi olduğundan kapama sınırı 14 Eylül sonudur. Burada hesaplanan tarih, işlemin yapılması gereken son tarihtir; elimizde henüz gerçekleşen kapamanın tarihi yoktur. İK'daki ayrılışın birimdeki erişim kararına, bu kararın da BT işlemine ulaşması gerekir.
:::

---

## Kontrol Et: sonucu önceden yazılan koşulla karşılaştır

**Kontrol Et**, uygulamadan elde edilen kanıtı önceden belirlenmiş ölçütle karşılaştırıp karşılanan ve karşılanmayan koşulları bulguya dönüştürme aşamasıdır.

**Bulgu**, bir ölçütün karşılanmadığını ya da karşılandığını kayıtlara dayanarak söyleyen tespittir.

**Kayıt bulunmaması, işlemin yapılmadığı anlamına gelmez.**

Bulgu için ilgili kayıtlar karşılaştırılır; sözlü açıklama kayıt yerine konmaz.

::: {.notes}
İşlem yapılmış ama kayda geçmemiş olabilir. Bu nedenle yalnız kapama kaydının eksik olmasıyla “hesap açık” sonucuna varamayız. Mevcut erişimi sayan döküm ile kişinin artık görevde olmadığını söyleyen kaydı birlikte okumak gerekir. Aynı biçimde bir kişinin açıklaması neden araştırmasını yönlendirebilir, fakat geçmişteki onayı veya işlemi belgeleyen kayıt yerine geçmez. İnceleme, ölçüt ile kayıtların anlattığı durum arasında kurulmuş bir karşılaştırmadır; yalnız evrakın bulunup bulunmadığını saymakla tamamlanmaz.
:::

---

## 30 Eylül incelemesinde hangi veriler var?

**birim-ortak**, birden fazla kişinin kullanabileceği, adı belirli bir kişiyi göstermeyen hesaptır; D tarama için bu hesapla giriyor.

| Kayıt | İçerik |
|---|---|
| Dış BT yetki dökümü | A, B, C, D, E, birim-ortak |
| Güncel görev listesi | A, B, C, D |
| Onaylı talepler | A–E için 5 talep; ortak hesap için yok |
| Kapama kayıtları | E'nin kapamasına ilişkin kayıt bulunmuyor |
| Dış BT oturum kaydı | İncelenen kayıtta E hesabıyla 11 Eylül sonrası oturum yok |
| İK kaydı | E'nin ayrılışı: 11 Eylül |
| A'nın notu | D, birim-ortak hesabın tarayıcı kurulumu sırasında açıldığını söylüyor |
| Süre | Ayrılıştan inceleme gününe 19 takvim günü |

::: {.notes}
30 Eylül ayın son iş günüdür; A planlanan inceleme için kayıtları yan yana getirir. “birim-ortak” kişi adı yerine ortak kullanımı belirtir. Hesabı kullananlardan birinin D olması, hesabın kimin adına ve hangi onayla açıldığı sorusundan ayrıdır. Döküm mevcut erişimi, görev listesi görevdeki kişileri, talepler onay ilişkisini verir. İK kaydıyla ayrılış tarihi; oturum kaydıyla da incelenen dönemdeki kullanım değerlendirilir. Karşılaştırmanın başlangıç ölçütleri 1 Eylül planındadır.
:::

---

## Hesapları ölçütle eşleştirip bulguyu yazın

**Görev:** Her hesabı görev listesi ve onaylı taleple eşleştirin; uygunsuzlukları yazın.

**Veri:** 1 Eylül planı ve 30 Eylül kayıt tablosu.

**Ölçüt:** Her bulgu en az iki kayda dayansın; eksik kayıt işlem yokluğu sayılmasın; süre planın ölçütüyle değerlendirilsin; sözlü açıklama kayıt sayılmasın.

**Üretim:** Hesap / karşılanmayan ölçüt / dayanak kayıtlar tablosu.

::: {.notes}
Önce hesabın güncel bir görevliye ve onaylı talebe bağlanıp bağlanmadığını değerlendirin. Ayrılış içeren satırlarda süre ölçütünü de kullanın. Bir hesap için birden fazla kayıt gerekebilir; tabloda bunların hangi karşılaştırmayı kurduğu anlaşılmalıdır. İncelemenin sonucu yalnız bir hesap listesi değil, ölçütle ilişkilendirilmiş bir tespittir. Kullanım bilgisi ile erişimin mevcut olması farklı sorulara yanıt verir; hangi kaydı hangi iddia için kullandığınızı belirtin.
:::

---

## Çözüm: E'nin erişimi zamanında kaldırılmamış

| Karşılaştırma | Sonuç |
|---|---|
| İK: 11 Eylül ayrılışı; görev listesinde E yok | E artık birimde görevli değil. |
| Bir iş günü ölçütü | Kapama sınırı: 14 Eylül sonu. |
| 30 Eylül yetki dökümünde E var | Erişim sürüyor; süre ölçütü karşılanmamış. |

11–30 Eylül arası **19 takvim günü**; kararın ölçütü **1 iş günü**.

::: {.notes}
Bulgunun temel dayanakları ayrılışı yazan İK kaydı ile mevcut erişimi sayan BT dökümüdür. Görev listesi de ayrılışla uyumludur. Kapama kaydının eksikliği tek başına dayanak yapılmaz. E hesabıyla incelenen dönemde ayrılış sonrası oturum görünmemesi, kapsanan kullanım hakkında bilgi verir. Erişimin hâlâ açık olması ve kapama sınırının aşılması ise ayrı tespittir. On dokuz gün ayrılıştan incelemeye kadar geçen takvim süresidir; hangi koşulun ihlal edildiğini söylemek için planın bir iş günü ölçütü kullanılır.
:::

---

## Çözüm: ortak hesap kişiye ve onaya bağlanamıyor

| Dayanak | Karşılanmayan koşul |
|---|---|
| Dökümde birim-ortak var; görev listesinde kişi karşılığı yok | Güncel görevliyle eşleşme |
| Onaylı taleplerde ortak hesap yok | Onaylı taleple eşleşme |

D: “Tarayıcı kurulurken açıldı.” → araştırmayı yönlendiren **beyan**.

Ortak hesapla yapılan işlemi belirli bir kişiye bağlamak güçleşir.

::: {.notes}
Sorun, dökümde beklenenden fazla bir satır bulunmasından ibaret değildir. Yetkinin kimin adına ve hangi kararla verildiği belirsizdir. D'nin tarayıcı kurulmasına ilişkin açıklaması, hesabın nasıl oluştuğunu araştırmak için başlangıç sağlayabilir. Onayı veren kişiyi ve talebi belgeleyen kayıt bu açıklamada yoktur. Tarama işi de sürmelidir; hesabın durumunu düzeltirken D'nin ihtiyaç duyduğu erişimin kendi hesabında, onaylı taleple düzenlenmesi gerekir.
:::

---

## Güvenlik kontrolü ile Kontrol Et farklı işlerdir

| Güvenlik kontrolü | PUKÖ'de Kontrol Et |
|---|---|
| Bilgiyi korumak için seçilmiş düzenleme | Düzenlemenin sonucunu ölçüte göre değerlendirme |
| Klasörün yetki ayarı | Yetki dökümünü görev listesi ve taleplerle karşılaştırma |
| Uygula aşamasında çalışır. | A'nın 30 Eylül incelemesinde yapılır. |

::: {.notes}
Bir güvenlik önlemi için “kontrol” sözcüğü kullanılabilir. Yetki ayarı bu anlamda bir güvenlik kontrolüdür: hangi hesabın klasöre erişebileceğini düzenler. PUKÖ'deki Kontrol Et ise o ayarın beklenen duruma uyup uymadığını inceler. Ayar yapılmış olsa da ayrılış bilgisi işlenmediğinde güncelliğini yitirebilir. A'nın incelemesi bu farkı ortaya çıkarır. “Kontrol var” ifadesi duyulduğunda sözü edilen işin erişimi düzenlemek mi, sonucunu değerlendirmek mi olduğu açıklığa kavuşturulur.
:::

---

## Önlem Al: bulguyu değişiklik kararına bağla

**Önlem Al**, bulgulara göre uygunsuzluğu düzeltme, nedenleri inceleyerek tekrarını azaltacak değişiklikleri yapma ve bu değişikliklerin etkisini değerlendirmeyi karara bağlama aşamasıdır.

**Neden adayı**, araştırılması gereken, henüz doğrulanmamış neden açıklamasıdır.

Aday: İK'dan birime bildirim akışı ve BT'de talep şartı eksik olabilir.

Doğrulama: İK bildirimini ve BT'ye gelen talebi kayıtlarıyla incelemek.

::: {.notes}
E'nin ayrılışı İK'da kayıtlıyken erişim kararına yansımamıştır. Ortak hesap da onaylı bir talebe bağlanamamıştır. Bu iki tespit, bilginin karara ulaşması ve hesap açarken talep aranması üzerinde araştırma gerektirir. Ancak İK'nın hiç bildirmediği mi, bildirimin birimde işlenmediği mi henüz bilinmiyor. Ortak hesap için talep gelmediği mi, başka yoldan gelip kayda geçmediği mi de incelenmelidir. Planın ayrılış bilgisinin yolunu tanımlamayan kısmı her durumda tamamlanır; nedenin sorumluluğu tahminle bir kişiye yüklenmez.
:::

---

## Düzeltme ile nedene yönelik iyileştirme ayrı kanıt ister

**Düzeltme**, bulunan uygunsuzluğun kendisini gideren işlemdir.

**Nedene yönelik iyileştirme**, aynı türden boşluğun yeniden oluşmasını önlemeyi hedefler.

| İş | Erişim vakasında karar | Doğrulama |
|---|---|---|
| Düzeltme | E ve ortak hesabı kapat; D'ye kendi hesabında onaylı tarama yetkisi ver. | Kapama kaydı ve yeni yetki dökümü |
| İyileştirme | İK aynı gün A'ya bildirsin; BT talep numarası olmadan hesap açmasın. | Bağımlılık kaydı ve sonraki talep/kapama kayıtları |

::: {.notes}
Açık hesabı kapatmak o andaki uygunsuzluğu giderir. Yeni bir ayrılışta benzer gecikmeyi azaltmak için bilginin kimden, ne zaman geleceği ve BT'nin hangi koşulla işlem yapacağı belirlenir. Bu kararlar kapsam kaydındaki bağımlılık satırlarına da işlenir. İK özlük sürecini yönetmeye devam eder; birim ihtiyaç duyduğu bildirimin yolunu tanımlar. “Hallettik” e-postası yerine hangi hesabın ne zaman kapandığını ve yeni erişim durumunu incelemek gerekir. Değişen işleyişin etkisi ise sonraki olayların kayıtlarıyla değerlendirilir.
:::

---

## İkinci turda değişen düzeni sınarız

Yeni plan: **talepsiz hesap sayısı 0**; inceleme **30 Ekim**.

| Yeni olay / kayıt | Değerlendirme |
|---|---|
| B başka birime geçti; İK bildirimi 15 Ekim | Yeni bildirim akışı bu olayda işlemiş. |
| BT kapama kaydı 16 Ekim | Bir iş günü ölçütü karşılanmış. |
| F birime katıldı; onaylı erişim talebi var | Yeni hesabın onay ilişkisi kurulmuş. |
| 30 Ekim dökümü: A, C, D, F | Talepsiz hesap sayısı 0. |

::: {.notes}
F, ekimde birime yeni katılan kişidir. B'nin görev değişikliği, değişen ayrılış akışını sınamak için yeni bir olay sağlar. 15 Ekim bildirimini 16 Ekim kapaması izler; bu kez süre koşulu karşılanmıştır. F'nin talebi de hesap açma yolunun onaya bağlandığını destekler. Önlem Al ile değişen karar böylece yeni Planla'ya, ardından uygulama ve incelemeye dönmüştür. Ekimdeki tek ayrılış akışın bu olayda işlediğini destekler; aylık incelemeyi sürdürmek için sonraki olaylar da değerlendirilir.
:::

---

## Bulguyu kararı değiştirebilecek kişi değerlendirmeli

**Yönetimin gözden geçirmesi**, bulguları kurumun amaçları ve kaynaklarıyla birlikte değerlendirerek iyileştirme ve değişiklik kararlarına bağlar.

| Öneri | Ertelemenin sonucu | Yetki ve önerilen zaman |
|---|---|---|
| Hesapları kapat; D'nin kendi yetkisini düzenle. | Uygunsuz erişim sürer; D'nin yetkisi aktarılmazsa tarama aksar. | A onayı, BT işlemi; inceleme sonrası ilk iş günü |
| İK ile aynı gün bildirim akışı kur. | Sonraki ayrılışta boşluk tekrarlanabilir. | A / gereken yerde üst yönetim; sonraki değişiklikten önce |

::: {.notes}
30 Eylül bulguları yalnız raporda kalırsa erişim düzeni değişmez. A yetkisindeki işlemleri karara bağlar; İK ile akış kurmak veya kaynak ayırmak yetkisini aşıyorsa üst yönetime taşır. Öncelik, ertelemenin bilgiye ve hizmete sonucuyla gerekçelendirilir. Ortak hesap kapanırken D'nin onaylı tarama erişiminin korunması hem güvenliği hem işin sürmesini aynı kararda tutar. Her öneriye yetkili kişi, kaynak ve tarih bağlamak, değerlendirmeyi uygulanabilir karara dönüştürür.
:::

---

## ISO/IEC 27001 çerçeveyi, birim kendi kararını verir

**ISO/IEC 27001:2022**, BGYS'yi kurma, uygulama, sürdürme ve sürekli iyileştirme gereksinimlerini tanımlar.

**ISO/IEC 27002:2022**, kontroller için uygulama rehberidir.

| Ortak çerçeveyle ilişkili soru | Birimdeki eğitsel karşılık |
|---|---|
| Neyi kapsıyoruz, karar kimde? | Başvuru süreci içeride; özlük dosyası dışarıda; karar sahibi A. |
| Bulgular karara nasıl döner? | A kendi kararlarını verir; kaynak gerektirenleri üst yönetime taşır. |
| Uygunsuzluk ve nedeni nasıl ele alınır? | Hesabı kapatmak; bildirim ve talep akışını değiştirmek. |

::: {.notes}
Kapsam ve rol kararı, yönetimin gözden geçirmesi ile düzeltme ve iyileştirme, yönetim sistemi yaklaşımını somutlaştırır. Bu örnekte “bir iş günü”, “ayın son iş günü” ve “aynı gün bildirim” değerlerini birim seçmiştir. Başka bir kurum kendi işine uygun süre ve ölçütler belirleyebilir. Tablodaki sıra, süre ve alanlar standardın zorunlu kıldığı bir şablon olarak okunmaz. Ortak çerçeve, kurumun kendi işleyişini gerekçelendirilmiş kararlarla kurmasına yön verir.
:::

---

## Dört kısa yanıt döngünün hangi işini açık bırakır?

| Yanıt | Açık kalan iş |
|---|---|
| “E'nin hesabını kapattık, bitti.” | Sonraki ayrılışın bildirim yolunu kurmak |
| “BT dışarıda, bizi ilgilendirmez.” | A'nın erişim kararını ve sonucunu izlemek |
| “Politika yazalım.” | Kuralı uygulamak ve izlerini incelemek |
| “E hesabıyla giriş yok, sorun yok.” | Önceden konan bir iş günü ölçütünü değerlendirmek |

::: {.notes}
Bu yanıtların her biri işin bir parçasını öne çıkarır. Hesap kapama mevcut uygunsuzluğa, politika yazma kararın tanımlanmasına yöneliktir. Döngüde uygulama, sonuç değerlendirmesi ve yeni karar da bulunur. Dış BT ile çalışmak uygulamayı başka tarafa verirken karar sahipliğini A'da bırakır. Oturum kaydında kullanım görülmemesi ise erişimi kaldırmak için konmuş süreyi değiştirmez. Her yanıtı açık kalan işle birlikte okumak, önlemi yönetim düzenine bağlamayı sağlar.
:::

---

## Aynı yöntemi bakım çizelgesinde bağımsız kullanın

Bir atölye, kullanılamaz olan bakım çizelgesini yedekten geri getirerek işi sürdürmek istiyor.

- **M:** atölye sorumlusu; kullanılacak çizelgeye karar verir.
- **N:** teknisyen; geri yükleme denemesini yapar.
- **P:** görevli; geri getirilen çizelgeyi onaylı asılla karşılaştırır.
- **Dış BT:** yedek hizmetini işletir.

Bu kez soru: **Dosya hem zamanında hem tam olarak kullanılabilir mi?**

::: {.notes}
Erişim vakasında ölçütü kayıtlarla karşılaştırma ve kararı değiştirme yolunu birlikte izledik. Burada aynı yöntemi farklı bir işte kullanmak gerekir. Bir hesabın görevliye bağlanması yerine bir dosyanın işe yarayacak sürede ve doğru içerikle geri gelmesi değerlendirilecektir. Bu nedenle süre ile içerik birlikte önem taşır. M işin sonucuna karar verir, N denemeyi yapar ve P karşılaştırır. Dış BT'nin hizmeti, atölyenin kendi deneme sonuçlarını değerlendirme ihtiyacına bağlıdır.
:::

---

## Geri yükleme dosyası: talimat ve üç deneme

| Kayıt | İçerik |
|---|---|
| **1 — M'nin onaylı talimatı, 1 Ekim** | Her cuma N ayrı alana geri yükler; en çok 30 dakika; P tarih ve 12 satırı asılla karşılaştırıp yazar. Canlı çizelge değiştirilmez. Kaynak, kayıt tutacak kişi ve inceleme tarihi eksik. |
| **2 — Tanıtım, 2 Ekim** | N ve P'nin “tanıtıma katıldım” imzaları var. |

**Kayıt 3 — Deneme listesi**

| Tarih | Süre | P'nin karşılaştırma alanı |
|---|---|---|
| 2 Ekim | 24 dakika | Tarih ve 12 satır eşleşti. |
| 9 Ekim | 26 dakika | Boş |
| 16 Ekim | 41 dakika | 12 satırdan 2'si eksik. |

::: {.notes}
Talimat, denemenin canlı dosyadan ayrı yürütülmesini ve iki başarı koşulunu belirler. Süreyi bitirmek ile içeriğin doğru gelmesi ayrı koşullardır. Tanıtım kaydı ise katılıma ilişkin beyanı taşır. Deneme listesinde süreler ve karşılaştırma sonuçları farklı alanlarda tutulmuştur. Görevlerde bu alanları ayrı değerlendirip sonra birlikte ele almak gerekir. Atölyenin seçtiği sınırlar 30 dakika ile tarih ve 12 satırın eşleşmesidir; değerlendirmede bu koşullar kullanılır.
:::

---

## Geri yükleme dosyası: gerçekleşen işlem ve açıklamalar

| Kayıt | İçerik |
|---|---|
| **4 — İşlem kaydı, 16 Ekim** | N ayrı deneme alanında dosya oluşturdu. P'nin karşılaştırması dosya ile asıl çizelgenin tarih ve satırlarını içeriyor. Canlı çizelge yerinde ve kullanılabilir. |
| **5 — M'nin notu ve N'nin açıklaması** | M: “Üç deneme de başarılı.” N: “Son denemede yanlış yedek paketini seçmiş olabilirim.” Paket kimlikleri henüz karşılaştırılmadı. |

::: {.notes}
Dördüncü kayıt işlemin hangi ortamda yapıldığını ve karşılaştırmanın hangi dosyalar arasında kurulduğunu anlatır. Canlı çizelgenin durumu, önerilecek faaliyetin neyi hedefleyeceği açısından önemlidir. Beşinci kayıtta iki farklı açıklama bulunur: M bütün denemeler hakkında bir başarı değerlendirmesi yapar; N olası bir neden söyler. Bu açıklamaları deneme ve işlem kayıtlarıyla karşılaştırarak değerlendirmek gerekir.
:::

---

## Beş kayıtla beş işi tamamlayın

**Görev:** Planı tamamlayın; kayıtları türüne göre ayırın; iki koşulu sayın; düzeltme ve iyileştirme önerin; tanıtım önerisini ve dış hizmet ilişkisini değerlendirin.

**Veri:** Geri yükleme dosyasındaki Kayıt 1–5.

**Ölçüt:** Her iddia kayıt numarasına dayansın; süre ve içerik birlikte ele alınsın; boş sonuç ve neden şüphesi kesinleştirilmesin; plan kişi, tarih ve sayılabilir ölçüt içersin; öneriler gerçekleşen işlemlerden ayrı yazılsın.

**Üretim:** Beş başlıklı kısa değerlendirme; ikinci başlıkta kayıt / içerik / tür tablosu.

::: {.notes}
Birinci başlıkta karar sahibi, uygulayanlar, kayıt tutacak kişi, kaynak, ölçüt, kanıt ve inceleme tarihi bulunmalıdır. İkinci başlıkta kesin bulgu, beyan ve doğrulanmamış olasılık ayrımı kullanılır. Üçüncü başlık süre ve içerik koşullarını ayrı sayıp M'nin değerlendirmesini ele alır. Dördüncü başlıkta mevcut eksik denemenin düzeltilmesi ile tekrarını azaltacak işleyiş değişikliği, sorumlu ve doğrulama bilgisiyle yazılır. Beşinci başlık “tanıtımı tekrarlayalım” önerisini ve atölye işiyle dış BT hizmetinin kapsam ilişkisini değerlendirir.
:::

---

## Çözüm 1: planın eksik işlerini kişiye ve tarihe bağlamak

| Alan | Önerilen tamamlayıcı karar |
|---|---|
| Sahip ve inceleme | M; ilk inceleme 23 Ekim |
| Uygulama | N geri yükler, P karşılaştırır. |
| Kaynak | Ayrı alan, onaylı çizelge, görevli zamanı |
| Ölçüt | En çok 30 dakika; tarih ve 12 satırın tamamı eşleşir. |
| Kayıt ve kanıt | N başlangıç/bitiş ve paket kimliğini; P karşılaştırma sonucunu yazar. |

**23 Ekim incelemesi bir öneridir.**

::: {.notes}
Kayıt 1 işi ve iki ölçütü belirlemiş, fakat kaynak, kayıt sorumlusu ve inceleme tarihini tamamlamamıştır. Öneride M, üç mevcut denemeyi ve yeni denemeyi aynı ölçütlerle inceler. N'nin zaman ve paket kimliği kaydı, hangi yedeğin ne kadar sürede geri getirildiğini değerlendirmeye açar; P'nin sonucu içerik koşulunu karşılaştırır. Ayrı deneme alanı ve canlı çizelgenin korunması talimattaki düzeni sürdürür. Bu satırlar gerçekleşmiş yeni faaliyetler olarak değil, planı tamamlayacak kararlar olarak yazılır.
:::

---

## Çözüm 2: kayıt, beyan ve olasılığı ayırmak

| Kayıt | Desteklediği tespit | Tür |
|---|---|---|
| 1 | Onaylı geri yükleme kuralı var. | Kesin bulgu: talimat |
| 2 | N ve P katılım beyanı vermiş. | Kesin bulgu: beyanın varlığı |
| 3 | Üç süre, iki karşılaştırma sonucu var. | Kesin bulgu; 9 Ekim içeriği bilinmiyor. |
| 4 | Ayrı alana dosya oluşturulmuş ve karşılaştırılmış; canlı dosya kullanılabilir. | Kesin bulgu: işlem ve karşılaştırma |
| 5 | M başarı söylüyor; N yanlış paketten şüpheleniyor. | Beyan / doğrulanmamış olasılık |

::: {.notes}
Katılım imzasının bulunduğu kesindir; doğru uygulama iddiası için deneme sonuçlarına bakılır. Kayıt 3'te 9 Ekim'in karşılaştırma alanı boştur; bu denemenin içerik sonucu eldeki veriden belirlenemez. Kayıt 4, 16 Ekim işleminin canlı dosyayı değiştirmeden yapıldığını belirtir. M'nin değerlendirmesi sayısal sonuçlarla, N'nin şüphesi ise paket kimlikleriyle sınanmalıdır. Böylece bir açıklamanın kayda geçmiş olması ile açıklamanın doğrulanması ayrı ele alınır.
:::

---

## Çözüm 3: süreyi karşılamak, iki koşulu karşılamak değildir

| Tarih | En çok 30 dakika | İçerik eşleşmesi | İkisi birlikte |
|---|---|---|---|
| 2 Ekim | Evet: 24 dakika | Evet | Evet |
| 9 Ekim | Evet: 26 dakika | Bilinmiyor | Bilinmiyor |
| 16 Ekim | Hayır: 41 dakika | Hayır: 2 satır eksik | Hayır |

**Süre: 2/3. İki koşul birlikte doğrulanmış: 1/3.**

16 Ekim: **41 − 30 = 11 dakika aşım**; **12 − 2 = 10 satır mevcut**.

::: {.notes}
Kayıt 3'te iki deneme süre sınırındadır. Ancak 9 Ekim'in içerik karşılaştırması bilinmediği için bu denemeyi iki koşul bakımından başarılı veya başarısız sayamayız. İki koşulun birlikte karşılandığı yalnız 2 Ekim'dir. 16 Ekim hem süre hem içerik koşulunu karşılamamıştır. Bu nedenle Kayıt 5'teki “üç deneme de başarılı” beyanı sonuçlarla desteklenmez. Süre hesabı ile içerik değerlendirmesini ayrı yapıp sonra birleştirmek, tek bir olumlu sayının bütün denemeyi başarılı göstermesini önler.
:::

---

## Çözüm 4: denemeyi düzeltmek ve işleyişi değiştirmek

| İş | Öneri ve sorumlu | Doğrulama |
|---|---|---|
| Düzeltme | M zaman ayırsın; N 16 Ekim denemesini uygun yedekle ayrı alanda tekrarlasın; P karşılaştırsın. | Yeni süre, paket kimliği, tarih ve 12 satır sonucu |
| İyileştirme | M paket seçimi, P'nin yedeği ve eksik sonuç bildirimini işleyişe eklesin. | M'nin 23 ve 30 Ekim denemelerini iki koşulla incelemesi |
| Neden incelemesi | N ve dış BT paket kimliklerini, süre aşımını işlem zamanlarıyla incelesin. | Paket karşılaştırması ve işlem zamanları |

::: {.notes}
Kayıt 4'e göre canlı çizelge kullanılabilir durumdadır. Düzeltmenin hedefi eksik denemedir; canlı dosyada veri kaybı varmış gibi işlem yapılmaz. N'nin Kayıt 5'teki şüphesini incelemek için beklenen paket ile kullanılan paketin kimlikleri karşılaştırılır. Süre aşımı ayrıca araştırılır; bütün sorunlar yanlış paket seçimine bağlanmaz. 23 ve 30 Ekim incelemeleri önerilen tarihlerdir. Değişikliğin etkisi bu yeni denemelerde süre ve içeriğin birlikte değerlendirilmesiyle izlenir.
:::

---

## Çözüm 5: tanıtım ve dış hizmet hangi boşlukları kapatır?

- Kayıt 2: katılım beyanı.
- Kayıt 3: süre aşımı, eksik satırlar ve boş karşılaştırma alanı.
- Bilgi eksikliği doğrulanırsa tanıtım tekrarlanabilir.
- Paket seçimi, karşılaştırma görevi ve inceleme ayrıca düzenlenir.

**Atölyenin işi:** çizelgenin kullanılabilirliği ve sonuçlara karar vermek.

**Dış BT'ye bağımlılık:** gerekli yedek paketinin sağlanması ve hizmet sorununun bildirim yolu.

::: {.notes}
Yalnız tanıtımı tekrarlamak, deneme sonuçlarındaki bütün boşlukları açıklamaz. 9 Ekim'de karşılaştırma sonucu eksiktir; 16 Ekim'de süre ve içerik koşulları karşılanmamıştır. Bilgi eksikliği bulunursa tanıtım yararlı olabilir, ama paket seçimi ve sonuçların incelenmesi gibi işlerin de sahibi gerekir. M, gerekli paketin sağlanmasını ve sorunların bildirim yolunu BT ile kararlaştırır. Hizmet dışarıdan alınırken atölye, kendi çizelgesinin kullanılabilirliğini ve denemelerin sonucunu değerlendirmeyi sürdürür.
:::

---

## Üç kararı kayıtla gerekçelendirin

**Görev:** Üç soruyu ikişer–üçer cümleyle yanıtlayın.

**Veri:** Erişim ve geri yükleme vakalarının kayıtları ve tarihleri.

1. Dört kişilik birimde A hem karar sahibi hem gözden geçiren olabilir mi?
2. İK kapsam dışındaysa ayrılış bilgisi önemsiz midir?
3. PUKÖ'deki Kontrol Et, erişim kontrolü müdür?

**Ölçüt:** Her yanıt en az bir kayıt veya tarihe dayansın.

**Üretim:** Üç gerekçeli kısa yanıt.

::: {.notes}
Yanıtlarda kavramın adını söylemekle yetinmeden vakadaki karşılığını kullanın. İlk soru aynı kişinin üstlendiği işlevlerin nasıl değerlendirileceğiyle, ikinci soru kapsam sınırını geçen bilgiyle, üçüncüsü de uygulama ile değerlendirmenin ayrımıyla ilgilidir. Bir tarihe veya kayda dayanmak, gerekçenin olayla bağını görünür kılar. Her yanıtta kullanılan kaydın hangi iddiayı desteklediği anlaşılmalıdır.
:::

---

## Üç kararın gerekçeleri

| Karar | Vakaya dayanan gerekçe |
|---|---|
| A iki işlevi üstlenebilir. | 30 Eylül BT dökümünü ölçütle karşılaştırır; aylık inceleme bağımsız iç tetkik değildir. |
| Ayrılış bilgisi bir bağımlılıktır. | İK'da 11 Eylül ayrılışı var; 30 Eylül dökümünde E'nin erişimi sürüyor. |
| Kontrol Et, önlemin sonucunu değerlendirir. | Yetki ayarı Uygula'da çalışır; 30 Eylül incelemesi ayarı görev ve onayla karşılaştırır. |

::: {.notes}
Küçük birimde aynı kişinin iki işlevi üstlenmesi mümkündür. İncelemenin ölçütü ve kaynağı açık olduğunda işlevler izlenebilir; ayrı kaynaktan gelen BT dökümü bu değerlendirmeyi destekler. Özlük dosyasının İK'da kalması ile ayrılış bilgisinin birime ulaşması ayrı kararlardır. Son olarak erişim ayarı koruma işini, aylık inceleme bu ayarın güncel duruma uygunluğunu değerlendirme işini yürütür. Bu ayrımlar kapsam, sorumluluk ve döngünün günlük bir kararda birlikte çalışmasını sağlar.
:::
