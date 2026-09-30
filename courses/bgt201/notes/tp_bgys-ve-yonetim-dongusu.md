---
title: "BGYS ve Yönetim Döngüsü"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I · Hafta 3"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: today
execute:
  echo: false
---

## BGYS ve yönetim döngüsü

Bilgi Güvenliği Yönetim Sistemi (BGYS) ve planla–uygula–kontrol et–önlem al döngüsü

::: {.notes}
Geçen hafta aynı birimde farklı olayları üç ilkeye göre inceledik. Bu hafta olaydan bir adım geriye çekiliyoruz ve şunu soruyoruz: Kurum bu olayların tekrarını önlemek için neye karar veriyor, kararın uygulandığını nasıl görüyor ve sonuca göre kararı nasıl değiştiriyor? Bu sorunun kurumsal yanıtına bilgi güvenliği yönetim sistemi diyoruz.
:::

---

## Önlem var; yanlış gönderim neden sürüyor?

**Kayıt ve Başvuru Birimi:** Eylülde 48 başvuru.

- Kilitli arşiv dolabı → sonuç yazısı yanlış kişiye gidebiliyor
- Parolalı çalışan hesapları → yetkinin güncelliği bilinmiyor
- “Gönderimde dikkat” uyarısı → gönderimin nasıl kontrol edildiği belirsiz

::: {.notes}
Önceki haftada aynı birimde iki başvurunun tarihinin yanlış kaydedilmesi, izin çizelgesinin yanlış adrese gitmesi ve son gün başvuru formunun 3 saat 40 dakika açılmaması vardı. Bugün birimde bazı önlemler mevcut ama sorun sürüyor. Bunun nedenini önlemlerin ne yaptığına bakarak arayabiliriz. Dolap kâğıt dosyaları, parola ise hesapları korur; ikisi de sonuç yazısının alıcısını doğrulamaz. “Gönderimde dikkat” uyarısı ise davranışın gerçekleştiğine dair hiçbir kayıt üretmez. Yani önlemler var, ama hiçbiri gönderim sorununun kendisine yönelmiyor ve kimse sonucu izlemiyor.
:::

---

## Güvenlikten siz sorumlusunuz: ne önerirsiniz?

Kayıt ve Başvuru Birimi için iki somut öneri yazın.

Her önerinin hangi bilgiye ve soruna yöneldiğini belirtin.

- **İş:** başvuru alma, değerlendirme, sonuç gönderme
- **Bilgi:** form, ek, değerlendirme notu, sonuç yazısı
- **Ortam:** kâğıt dolap, “Başvurular” klasörü, e-posta

::: {.notes}
Bu soruyu kaynak sunumda da soruyoruz: bir kurumda bilgi güvenliğini sağlamakla görevlendirilseniz ne yaparsınız (BGT 201 ders sunumu 2, s. 2–5)? Öğrenciler çoğunlukla önce güçlü parola, güvenlik duvarı, log kaydı gibi teknik önlemleri, ardından eğitim, yetkilendirme ve güvenlik raporu gibi organizasyonel önlemleri sayar. Öneri bir ürün adı ya da bir iş kuralı olabilir. Ancak “güvenlik duvarı” dendiğinde bu birimde hangi akışı koruduğunu, “eğitim” dendiğinde hangi davranışı değiştirmesinin beklendiğini açıklamak gerekir. Soruna bağlanmamış bir öneriyi henüz değerlendiremeyiz.
:::

---

## Öneri listesinde hangi karar eksik?

- **Güçlü parola, güvenlik duvarı** (teknik araç) → kuralı kim belirler?
- **Log tutmak** (teknik kayıt) → kim, ne zaman inceler?
- **Çalışan eğitimi** (organizasyonel) → hangi davranış, nasıl ölçülür?
- **Yetkilendirme** (organizasyonel) → kim onaylar, kim kaldırır?
- **Güvenlik raporu** (belirsiz) → hangi kayıt, kime, ne sıklıkla?

::: {.notes}
Önerileri teknik ve organizasyonel diye ayırmak yardımcı olur, ama iki sınıf birbirini dışlamaz. Logu sistem üretir; onu yorumlayıp karara bağlayan kişi ve inceleme zamanı ise organizasyonel bir karardır. “Güvenlik raporu” önerisini belirsiz diye işaretledik, ama bu ayrı bir öneri türü değil: kimin, ne zaman, neye göre yapacağı yazılmamış her önerinin ortak niteliği. Fiziksel erişim kontrolü ve güvenlik ekibi kurmak gibi öneriler de aynı sorularla sınanabilir. Her önerinin yanında açık kalan soru, aslında henüz verilmemiş bir yönetim kararıdır.
:::

---

## “Eğitim verelim” önerisi neyi cevaplıyor?

- **Neyi korur?** Sonuç yazısının doğru alıcıya gitmesini hedefler.
- **Kim karar verir?** Belirtilmemiş.
- **Kim uygular?** Belirtilmemiş.
- **İşe yaradığını ne gösterir?** Katılım imzası gönderim doğruluğunu göstermez.

::: {.notes}
Eğitim önerisini örnek olarak alıyoruz, çünkü çok sık verilir ve çok kolay onaylanır. Katılım listesi yalnızca kimin eğitime katıldığının kanıtıdır; yanlış gönderimin azaldığı sonucunu ondan çıkaramayız. Eğitimin içeriği, karar sahibi, uygulayıcı ve gönderim kayıtları birbirine bağlanırsa öneri değerlendirilebilir hâle gelir. Önlemi reddetmiyoruz; hangi karar ve kanıtın eksik olduğunu belirliyoruz.
:::

---

## İki öneriyi dört soruyla sınayın

**Güçlü parola** ve **log kayıtları tutmak** için doldurun:

- Neyi korur?
- Kim karar verir?
- Kim uygular?
- İşe yaradığını ne gösterir?

Yanıt önerinin içinden çıkmıyorsa “belirtilmemiş” yazın.

::: {.notes}
Güçlü parola başkasının hesabı kullanmasını zorlaştırır; ama ayrılmış kişinin açık kalan hesabını saptamaz. Parola kuralını kimin koyacağı ve sistem ayarını kimin denetleyeceği öneride yazmıyor. Log doğrudan erişimi engellemez, sonradan hangi hesabın ne yaptığını gösterebilir. Kimin, hangi sıklıkla inceleyip bulguya dönüştüreceği yazılmadıkça kaydın bir etkisi olmaz. Paylaşılan bir “birim-ortak” hesap varsa log, işlemi yapan kişiyi de ayırt edemez.
:::

---

## Tek önlem ile yönetim sistemi arasındaki fark

```text
Önlem: belirli bir soruna yönelik uygulama
                 ↓
Yönetim sistemi: neden seçildi → kim uygular → ne gösterir
                         ↑                       ↓
                         └── sonuçla yeniden karar ──┘
```

::: {.notes}
Önlemleri bir araya getirmek kendiliğinden bir sistem kurmaz. Dolap kilidi, parola ve uyarı farklı yerlere etki eder; bunları bağlayan bir amaç, sorumluluk, ölçüt ve izleme yoksa yanlış gönderimin neden sürdüğünü anlayamayız. Yönetim sistemi, kurumun bu kararları kişiler ve kayıtlar üzerinden yinelemesini sağlar. Kaynak sunum da sistemin kuruma özgü, sistematik ve değişikliklere uyum sağlayabilir olması gerektiğini söyler (BGT 201 ders sunumu 2, s. 6–7).
:::

---

## Bir kişinin alışkanlığı neden yetmez?

**D:** “Her sonuç yazısını göndermeden önce bir daha kontrol ediyorum.”

Kontrolü kim yapar? Hangi alanları karşılaştırır? Yapıldığını hangi kayıt gösterir?

::: {.notes}
D'nin alışkanlığı işe yarayabilir. Ama kurum bu uygulamayı kişinin varlığına bağlamış olur; D izne çıktığında, görev değiştirdiğinde ya da ayrıldığında uygulama sessizce kaybolabilir. Karar yazılı bir iş akışına, uygulanabilir bir göreve ve gözden geçirilebilir bir kayda bağlandığında kişi değişse de beklenti sürer. Kaynak sunum da her kurumun ihtiyacının ve iş yapma biçiminin farklı olduğunu vurgular; bu yüzden başka bir kurumun önlem listesi bu boşluğu kendiliğinden doldurmaz (BGT 201 ders sunumu 2, s. 6–7).
:::

---

## BGYS neyi yönetir?

:::: {.columns}

::: {.column width="50%"}
**Bilgi güvenliği yönetim sistemi (BGYS):** bilgi varlıklarını korumak için riskleri belirleme, değerlendirme, yönetme ve kararları sürekli geliştirme düzeni.
:::

::: {.column width="50%"}
```text
kurumun işi → güvenlik kararı → uygulama kaydı → değerlendirme
    ↑                                                │
    └────────────────── değişen karar ────────────────┘
```
:::

::::

::: {.notes}
Kaynak sunum BGYS'yi bir organizasyonun bilgi varlıklarını korumaya yönelik sistematik yaklaşım olarak tanımlıyor; riskleri belirlemeyi, değerlendirmeyi ve yönetmeyi amaçlıyor ve sürekli geliştirilmesi gereken bir sistem olarak sunuyor (BGT 201 ders sunumu 2, s. 8). Sistematik olmak her yerde aynı ürünü kullanmak anlamına gelmez. Kurum kendi işini ve ilgili kişilerin beklentilerini değerlendirir, önlemi amacıyla birlikte belirler. Uygulamadan doğan kayıt kararla karşılaştırılır ve sonuç yeni kararın girdisi olur. İngilizce karşılığı ISMS'dir (Information Security Management System).
:::

---

## Araç, belge, proje ve sertifika hangi işi görür?

- **Erişim aracı:** yetki kuralını uygular → kime, ne zaman erişim?
- **Politika belgesi:** kuralı yazar → uygulandı mı?
- **İyileştirme projesi:** bir değişiklik yapar → sonra yeniden bakıldı mı?
- **Sertifika:** dış değerlendirmenin sonucudur → günlük kararlar işliyor mu?

::: {.notes}
Bunların her biri bir yönetim sisteminin parçası olabilir ama tek başına sistem değildir. “Başvurular” klasörüne bir erişim aracı kurulduğunda kararı araç vermez; kimin erişeceğini süreç sahibi belirler. “Gönderimde dikkat” uyarısı da uygulamanın kaydı değildir. Yeni bir belge tarayıcısı kurmak bir projedir; kurulumda açılan hesabın sonradan kontrol edilmesi ayrıca gerekir. Sertifika kurumun değerlendirilmiş olduğunu gösterebilir, fakat belirli bir yanlış gönderimi kendi başına önlemez. Yani her unsur yalnızca kendi iddiasına kanıt oluşturur.
:::

---

## Kurulum işleri ile PUKÖ aynı liste midir?

- **Kuruluşta ele alınan işler:** hedef ve sorumluluk; varlık, risk, önlem ve kayıt düzeni
- **Sürekli yinelenen karar:** **Planla → Uygula → Kontrol Et → Önlem Al → Planla**

**PUKÖ:** Planla · Uygula · Kontrol Et · Önlem Al

::: {.notes}
Kaynak sunumdaki BGYS adımları listesinde hedefler ve planlama, komite, mevcut durum farkı analizi, varlık yönetimi, risk yönetimi, kontrollerin uygulanması ve dokümantasyon sistemi yer alıyor (BGT 201 ders sunumu 2, s. 16). Bu liste başlangıçta nelerin düzenleneceğini gösterir; listenin tamamlanması değişen personeli, yeni aracı ya da bir hatayı kendiliğinden yönetmez. PUKÖ döngüsü ise kararı gözden geçirip değiştirmeyi mümkün kılar (s. 17). ISO/IEC 27001'in güncel sürümü belirli bir döngü modelini zorunlu kılmaz, sürekli iyileştirmeyi ister; PUKÖ burada yönetim kararını yinelemenin bir yolu olarak kullanılıyor.
:::

---

## “Kontrol” iki farklı iş yapar

- **Güvenlik kontrolü:** seçilmiş önlem → klasör yetkisi
- **Kontrol Et:** yapılanı izle ve değerlendir → yetki dökümünü görev listesiyle karşılaştır

::: {.notes}
Aynı sözcük iki farklı şey için kullanılıyor. Erişim kontrolü Uygula aşamasında çalışan bir önlemdir. Kontrol Et aşamasında ise bu önlemin seçilen kurala uyup uymadığına bakılır. Birisi “kontrol var” dediğinde yetki ayarından mı, yoksa bu ayarın incelenmesinden mi söz ettiğini belirtmelidir. PUKÖ adları kaynak sunumdaki Türkçe adlandırmayı izler (BGT 201 ders sunumu 2, s. 17).
:::

---

## Standart ortak ölçüt verir; klasör kararını kurum verir

- **Ortak çerçeve:** BGYS'nin ele alacağı yönetim gereksinimleri. Örnek: ISO/IEC 27001
- **Birimin kararı:** “Başvurular” klasörüne kim erişir? Ayrılan kişinin erişimi ne zaman kaldırılır?

::: {.notes}
ISO/IEC 27001, BGYS gereksinimleri için uluslararası bir örnektir; ürün sayfasına [ISO/IEC 27001:2022](https://www.iso.org/standard/27001) adresinden bakabilirsiniz. Standart hangi konularda karar verilmesi gerektiğini gösterir; “Başvurular” klasörüne kimin erişeceğini ya da ayrılan kişinin erişiminin ne zaman kaldırılacağını birim belirler. Bu vakada kullanacağımız “bir iş günü” süresi kurgusal birimin seçtiği bir ölçüttür, bir standardın zorunlu kıldığı bir değer değildir. Ortak ölçüt ile yerel karar ayrılınca iki kurumun farklı süreçlerine aynı hazır yetki listesini kopyalamaktan da kaçınırız.
:::

---

## Güvenlik kararına hangi koşullar girer?

```text
başvuru hizmeti + işlenen bilgi
       + iç koşullar (A, B, C, D, stajyer E)
       + dış koşullar (İK, dış BT)
       + ilgili tarafların beklentileri
                         ↓
                 KURUM BAĞLAMI
```

::: {.notes}
Bağlam, kararları etkileyen koşulların bütünüdür. Birim kâğıt formları, taranmış dosyaları ve sonuç e-postalarını farklı ortamlarda işler; tek bir erişim ayarı bütün süreci açıklayamaz. İç koşullar birimde çalışanlardır: A, B, C, D ve bir stajyer olan E. Dış koşullar ise birimin dışında yönetilen ama birimi etkileyen unsurlardır: merkez İK personel bilgisini, dış BT hesap işlemlerini yönetir. Bağlamın işlevi, başvuru sürecindeki kararların hangi bilgi ve taraflara dayandığını göstermektir (BGT 201 ders sunumu 2, s. 6–7).
:::

---

## İlgili tarafın beklentisi hangi karara dönüşür?

- **Başvuru sahibi:** bilgisi yanlış kişiye açılmasın → gönderim ve erişim kuralı
- **Görevliler B, C, D:** hangi iş için erişecekleri açık olsun → göreve bağlı yetki
- **Merkez İK:** özlük dosyası kendi sürecinde kalsın → kapsam sınırı, ayrılış bildirimi
- **Dış BT:** onaylı hesap talebi gelsin → talep ve kapama kaydı

::: {.notes}
İlgili taraf, süreçten etkilenen ya da süreci etkileyen kişi veya kuruluştur. Başvuru sahibinin beklentisi gönderim kontrolüne, BT'nin beklentisi ise yetki talebinin kimin onayıyla geleceğine bağlanır. Üst yönetim kaynak kullanımının gerekçesini, A ise işin zamanında ve hatasız yürütülmesini görmek ister. Her beklenti aynı önlemle karşılanmaz; her biri ayrı bir karar girdisidir.
:::

---

## “Kurumun bilgi güvenliği” kapsam için yeterli mi?

Bu ifade hangi **süreç**, **bilgi**, **ortam** ve **kurum parçası** hakkında karar verildiğini göstermiyor.

**Kapsam:** güvenlik yönetiminin ele aldığı bu dört parçanın açık sınırı.

::: {.notes}
Geniş bir kapsam yanlış değildir; bütün kurum kapsanabilir. Sorun, ifadenin karar alanını ve sahipliği göstermemesidir. Sonuç yazısının gönderimini kimin yönettiği ile personel özlük dosyalarını kimin yönettiği farklı olabilir. Sınır belirlenince hangi işin içeride olduğu, hangi işin başka bir süreç sahibine ait olduğu ve hangi dış girdilere ihtiyaç duyulduğu görünür hâle gelir.
:::

---

## Başvuru biriminin kapsam kararı

- **Dahil:** başvuru alma, değerlendirme, sonuçlandırma; kâğıt formlar, “Başvurular” klasörü, sonuç yazıları
- **Bilinçli sınır:** personel özlük dosyaları (süreç sahibi merkez İK)
- **Amaç:** kayıtlar yetkili kişilerce doğru ve gerektiğinde erişilebilir işlensin

::: {.notes}
Bu kararda başvuru bilgisi hem kâğıt hem dijital ortamda kapsamdadır. Personel özlük dosyalarının başka bir sahibi ve işleyişi vardır; onların yaşam döngüsünü birimin kapsamına almak doğru olmaz. Buna karşın bir personelin ayrılış bilgisi, başvuru klasöründeki erişimi etkiler. Bu yüzden sınırı, dış tarafla ilişkinin bittiği yer olarak okumamak gerekir: sınırın dışındaki bir bilgi içeriye girdi olarak gelebilir.
:::

---

## Kapsam sınırını geçen bilgi görünür kalır

```text
Merkez İK ── ayrılış/görev değişikliği ──┐
Dış BT ──── hesap açma/kapama kaydı ────┼─→ BAŞVURU BİRİMİ
E-posta hizmeti ── hizmetin çalışması ──┘   (kapsam içi süreç)

Yemekhane kart sistemi                     (bilgi/işlem bağı yok)
```

::: {.notes}
Bağımlılık, kapsam dışındaki bir tarafın birimin işini etkileyen bilgi ya da hizmet sağlamasıdır. Bunun için kimin neyi ne zaman sağlayacağını ve sağlandığının nasıl görüleceğini yazmamız gerekir. İK'nın özlük dosyaları kapsam dışında kalabilir, ama ayrılış bildirimi yapılmazsa erişim kararı güncellenemez. Dış BT'nin bir firma olarak kapsam dışında olması, birimin yetki kararını takip sorumluluğunu kaldırmaz. Yemekhane kart sistemi de aynı sınırın dışındadır, ancak başvuru süreciyle hiçbir bilgi ya da işlem bağı yoktur.
:::

---

## Kapsam kartları: dört kararı gerekçelendirin

**Örnekler:** kâğıt formlar ve dolap → **dahil**. Özlük dosyaları → **bilinçli sınır**; ayrılış bildirimi bağımlılık.

- “Başvurular” klasörü → karar: ? · bağ: ?
- Sonuç yazısının e-postayla gönderimi → karar: ? · bağ: ?
- Dış BT'nin hesap işlemleri → karar: ? · bağ: ?
- Yemekhane kart sistemi → karar: ? · bağ: ?

::: {.notes}
Her karta üç karardan birini veriyoruz: dahil, kapsam dışı ama bağımlılık var, ya da kapsam dışı ve bağ yok. İlk iki örneğin farkı süreç sahipliğidir: arşiv dolabının anahtarına birim karar verir, özlük dosyalarını ise İK yönetir. Özlük dosyaları dışarıda bırakılınca ayrılış bilgisinin erişime etkisi ayrıca kayda geçirilir. Dört kartta da etiketin dayandığı süreç ya da bilgi ilişkisini gerekçe olarak yazıyoruz.
:::

---

## Kapsam kartlarının gerekçeli çözümü

:::: {.columns}

::: {.column width="50%"}
- **“Başvurular” klasörü:** dahil (birimin taranmış kayıtları; erişim kararı birimde)
- **Sonuç yazısını gönderme:** dahil (birimin işi; e-posta hizmeti dış bağımlılık)
:::

::: {.column width="50%"}
- **Dış BT hesap işlemleri:** dış bağımlılık (birimin onayladığı yetkiyi uygular; kayıt sağlar)
- **Yemekhane sistemi:** dışarıda, bağ yok (başvuru bilgisi veya işiyle ilişkisi yok)
:::

::::

::: {.notes}
Gönderim işi ile e-posta hizmetinin işletilmesi ayrılır: birim kime hangi sonucu göndereceğine karar verir, merkez hizmetin çalışmasını sağlar. Dış BT için de aynı ayrım geçerlidir; hesabı açan taraf farklı olsa da yetki onayı birime aittir. BT bağımlılık kaydında talep biçimi, kapama süresi ve kapama kaydı beklentisi yer alabilir. Yemekhane örneği, kapsam dışındaki her unsurun bağımlılık sayılmaması gerektiğini gösterir.
:::

---

## Yönetimin desteği hangi kararı etkiler?

- **Yön ve onay:** hangi hizmetin korunacağı, politikanın onayı
- **Kaynak:** insan ve araç için zaman ve bütçe
- **Gözden geçirme:** bulgulara göre yeni karar

**Soru:** Yalnız dışarıya iyi görünmek için seçilen kapsam, şikâyet gelen gönderim işini dışarıda bırakırsa ne olur?

::: {.notes}
Kaynak sunumda üst yönetim, politikanın onaylanması ve yayımlanması, finansal destek ve gözden geçirme toplantılarıyla sistemi destekleyen taraf olarak geçer (BGT 201 ders sunumu 2, s. 18). Aynı sunum sistemin neden kurulmak istendiğini de sorar: gerçek bir ihtiyaç mı, piyasada olumlu imaj mı, yasal avantaj mı? Bu gerekçe kapsamı etkileyebilir. Kolay gösterilecek ama asıl sorunu içermeyen bir süreç seçilirse belgelenmiş bir düzen kurulsa bile yanlış gönderim sürer. Bu, olası bir karar yanlılığıdır; her kurumun böyle yaptığı sonucunu çıkarmıyoruz. Birim düzeyinde A kararların sahibi olabilir, ama kaynak ve kurumsal onay gerektiğinde üst yönetim işlevi sürer.
:::

---

## Sorumluluk hangi işlevlere ayrılır?

- **Yön ve kaynak:** üst yönetim, A → amaç ve kaynak kararı
- **Karar sahibi:** A → onaylı erişim kuralı
- **Uygulayıcı:** BT; B, C, D → yetki ve işlem kaydı
- **Gözden geçiren:** A veya dış görevli → karşılaştırma ve bulgu

::: {.notes}
Bu satırlar bir hiyerarşi ya da işlem sırası değil, aynı kararın farklı işlevleridir. Küçük bir birimde A hem karar sahibi hem gözden geçiren olabilir; yine de neye bakacağı ve kaydı nereden alacağı açık olmalıdır. Büyük bir kurumda üst yönetim temsilcisi, BT, İK ve başka birimlerin katıldığı bir komite kurulabilir. Kaynak sunumdaki komite bir örgütlenme örneğidir; küçük bir birimin bu unvanların hepsine sahip olması gerekmez (BGT 201 ders sunumu 2, s. 19–20).
:::

---

## PUKÖ'de her aşamanın izi var mı?

```text
PLANLA: karar + ölçüt + sorumlu
   ↓
UYGULA: yetki tanımı + talep/kapatma kaydı
   ↓
KONTROL ET: döküm ↔ görev listesi → bulgu
   ↓
ÖNLEM AL: düzeltme + nedeni giderme
   └────────────────────────────→ PLANLA
```

::: {.notes}
Planla aşamasında mevcut duruma bakıp amacı, karar sahibini ve neyin başarı sayılacağını belirleriz. Uygula aşamasında seçilen erişim önlemi işletilir ve olaylar kaydedilir. Kontrol Et aşamasında yapılanı önceden kararlaştırılan ölçüte göre değerlendiririz; kaydın varlığı tek başına başarı sayılmaz. Önlem Al hem bulunan hatayı düzeltir hem de tekrara yol açan düzeni değiştirir. Kaynak sunum yalnız dört aşamanın adını verir (BGT 201 ders sunumu 2, s. 17); aşamaların içeriğini erişim vakasına uyarladık.
:::

---

## Planla: erişim kararını ölçülebilir yazın

- **Karar 1:** “Başvurular” klasörüne yalnız ilgili görevliler erişir. **Ölçüt:** her hesap güncel görevli ve onaylı taleple eşleşir. **Sahip / uygulayıcı:** A / dış BT
- **Karar 2:** Ayrılanın veya görevi değişenin erişimi kaldırılır. **Ölçüt:** en geç **1 iş günü**. **Sahip / uygulayıcı:** A / dış BT

**Gözden geçirme:** ayın son iş günü, yetki dökümü ↔ görev listesi.

::: {.notes}
Bu kararların amacı, taranmış başvuruların ilgisiz kişilerce görülmemesi ve değiştirilmemesidir. A erişim talebini onaylayıp BT'ye iletir; BT hesabı tanımlar veya kapatır. Ölçüt önceden konmalıdır ki eylül sonunda neyin ihlal edildiği anlaşılabilsin. Onaylı talep, hesap açma ve kapama kaydı ve yetki dökümü olası kanıtlardır. Bir iş günü, dışarıdan gelen bir zorunluluk değil, kurgusal kurumun kendi hedefidir. Plan tarihi 1 Eylül'dür.
:::

---

## Uygula: hesap ile görev değişikliği ayrışıyor

- A, B, C, D ve stajyer E için erişim açıldı → onaylı talepler
- E, **11 Eylül** stajdan ayrıldı → merkez İK ayrılış kaydı
- Erişimin kapanması gereken son gün → **14 Eylül**, pazartesi

::: {.notes}
Erişim başlangıçta onaylı taleplere dayanır. Ayrılış bilgisi ise İK'da doğar; plan bu bilginin A'ya ve BT'ye nasıl aktarılacağını yazmadıysa hesap açık kalabilir. 11 Eylül cuma günü ayrılan E için bir iş günü hedefi, izleyen pazartesi olan 14 Eylül sonunda erişimin kaldırılmış olmasını gerektirir. Burada takvim günü ile iş gününü ayırmamız gerekir: cuma günü ayrılan biri için ilk iş günü pazartesidir.
:::

---

## Kontrol Et: kayıtlar yan yana

:::: {.columns}

::: {.column width="50%"}
**30 Eylül**

- BT yetki dökümü → A, B, C, D, E, **birim-ortak**
- Güncel görev listesi → A, B, C, D
- Onaylı talepler → A–E için 5; ortak hesap için yok
- Kapama kayıtları → yok
- BT oturum kaydı → E hesabıyla 11 Eylül sonrası oturum yok
:::

::: {.column width="50%"}
**Ölçüt:** her hesap güncel görevli + taleple eşleşecek; ayrılanın erişimi ≤1 iş gününde kapanacak.
:::

::::

::: {.notes}
A ayın son iş günü farklı kaynaklardan gelen kayıtları yan yana koyar. Döküm gerçek yetki durumunu, görev listesi kimin çalıştığını, talepler kararın onayını, kapama kaydı kaldırmanın yapılıp yapılmadığını, oturum kaydı ise hesabın ayrılıştan sonra kullanılıp kullanılmadığını gösterir. Tek bir kaynağa bakmak bulgu için yetmez: E'nin ayrıldığını yalnız yetki dökümünden, hesabının açık olduğunu yalnız İK kaydından çıkaramayız. Ölçüt ile kanıt karşılaştırıldığında iki ayrı uygunsuzluk ortaya çıkar.
:::

---

## Bulgu 1: E'nin hesabı neden uygunsuz?

```text
11 Eylül ayrılış → 14 Eylül kapama sınırı → 30 Eylül hesap açık
```

**Sonuç:** 19 takvim günü geçmesine rağmen ≤1 iş günü ölçütü karşılanmadı.

::: {.notes}
11 Eylül ile 30 Eylül arasında 19 takvim günü var. Bu sayı bir iş günü hedefinin yerine geçmez, yalnızca gecikmenin büyüklüğünü gösterir. BT oturum kaydında E hesabıyla ayrılış sonrası oturum açıldığının görülmemesi, hesabın kullanılmadığına ilişkin bir işarettir; ama hesabın açık olduğu gerçeğini ve ölçüt ihlalini ortadan kaldırmaz. “Zarar görülmedi, sorun yok” yanıtı, önceden konmuş koşulu göz ardı eder.
:::

---

## Bulgu 2: ortak hesabın sahibi kim?

- Görev listesi → kişi karşılığı yok
- Onaylı talep → yok
- D'nin açıklaması → belge tarayıcısı kurulurken açılmış (sözlü beyan)
- Kullanım → D, taranmış başvuruları bu hesapla klasöre yüklüyor

**Sonuç:** Onay ve kişisel izlenebilirlik koşulu karşılanmıyor.

::: {.notes}
D'nin açıklaması hesabın neden oluşmuş olabileceğine ışık tutar, ancak kimin hangi onayla açtığını gösteren kayıt yerine geçmez. Paylaşılan bir hesapla yapılan işlemin hangi kişiye ait olduğunu logdan ayırmak da güçleşir. A için sorun yalnızca dosya alanında fazladan bir satır bulunması değildir; yetkinin kimin adına ve hangi işle bağlandığının bilinmemesidir. D taranmış başvuruları klasöre bu hesapla yüklediği için, hesap kapatıldığında işini sürdürebilmesi kişisel ve onaylı bir yetkiye bağlanmalıdır.
:::

---

## İki bulgunun ortak nedeni nerede?

```text
İK'da ayrılış kaydı ─X→ A/BT'ye bildirim
Tarayıcı kurulumu ─X→ onaylı hesap talebi
```

**Eksik bağımlılık:** İK neyi ne zaman bildirir? BT hangi taleple hesap açar?

::: {.notes}
E'nin ayrılışı İK'da kayıtlı, ama bu kaydı birimin erişim kararına taşıyan bir bildirim planlanmamış. Personel özlük dosyalarının kapsam dışında bırakılması, ayrılış bilgisinin bağımlılık olarak yazılmamasına dönüşmüş. Ortak hesap ise kurulum sırasında normal onay akışının dışından açılmış. Hataları yalnızca BT çalışanına ya da A'nın unutmasına yüklemek, tekrarı mümkün kılan boş akışı değiştirmez; ortak neden, iki bağlantının hiç kurulmamış olmasıdır.
:::

---

## Önlem Al: düzeltme ile nedeni giderme

- **Düzeltme:** E ve ortak hesap kapanır; D'ye kişisel tarama yetkisi verilir → *kanıt:* BT kapama kaydı + yeni yetki dökümü
- **Nedene yönelik iyileştirme:** İK aynı gün A'ya bildirir; BT talep numarasız hesap açmaz → *kanıt:* bağımlılık kaydı + talep ve kayıt akışı

::: {.notes}
Hesapları kapatmak mevcut uygunsuzluğu giderir. D'nin işini sürdürebilmesi için tarama yetkisinin kendi hesabına onaylı bir taleple verilmesi gerekir. “Hallettik” e-postası neyin ne zaman kapandığını doğrulamaz; BT kaydı ve yeni döküm birlikte değerlendirilir. İK ile bildirim ilişkisi, BT ile talep şartı ve kapsam kaydındaki bağımlılık satırları, aynı türden boşluğun yeniden oluşmasını hedefler. İK'nın özlük süreci ise yine kendi sorumluluğunda kalır.
:::

---

## İkinci tur: iyileştirme işledi mi?

**30 Ekim incelemesi**

- B, 15 Ekim başka birime geçti → İK bildirimi 15 Ekim; BT kapama kaydı 16 Ekim → **1 iş günü**
- F birime katıldı → onaylı erişim talebi var
- Güncel yetki dökümü → A, C, D, F; **talepsiz hesap 0**

::: {.notes}
Önlem Al aşamasından sonra Planla'ya dönüyoruz ve “talepsiz hesap sayısı sıfır” ölçütünü ekliyoruz. Ekim verisi, ayrılış bildiriminin ve BT kapamasının zamanında işlediğini gösteriyor. F için onaylı talep bulunması, yeni hesabın normal akışla açıldığını destekler. İkinci tur, bir defalık kapamanın değil, değişen düzenin işleyişinin kanıtıdır. Bu gözden geçirme bir saldırı testi değil, hedefin kayıtlarla değerlendirilmesidir (Fundamentals of Information Systems Security, Böl. 7, s. 217–221; BGT 201 ders sunumu 2, s. 18).
:::

---

## Erişim vakasında hangi yanıt eksik kalır?

- “E hesabını kapattık, bitti.” → sonraki ayrılışın bildirimi kurulmadı
- “BT dışarıda, bizi ilgilendirmez.” → erişim kararının sahibi hâlâ A
- “Politika yazalım.” → uygulamanın izi ve incelemesi yok
- “E hesabına giriş yok, sorun yok.” → 1 iş günü ölçütü aşıldı

::: {.notes}
Her yanıt verinin bir bölümüne bakıyor ama karar döngüsünün kalanını atlıyor. Düzeltme, nedene yönelik değişiklikle tamamlanır. Dış sağlayıcının bağımlılığı sahipliği devretmez. Yazılı kural uygulamanın kanıtı değildir. Zarar belirtisinin görülmemesi ise önceden konmuş ölçütü değiştirmez. Her yanıtta hangi kararın, kaydın ya da karşılaştırmanın eksik olduğunu göstermeye çalışıyoruz.
:::

---

## Yeni vaka: gönderim planında ne eksik?

**Karar alanı:** Sonuç yazısı doğru başvuru sahibine gitsin.

**1 · Plan kaydı**

- Karar: “Gönderilmeden önce kontrol edilir”
- Amaç: yanlış gönderimi önlemek
- Sorumlu: “Birim”
- Ölçüt, kanıt, gözden geçirme: boş

**Görev:** Karar sahibi, uygulayıcı, ölçüt, kanıt ve inceleme tarihini belirleyin.

::: {.notes}
“Birim” yazısı bir kişiyi göstermiyor; hata görüldüğünde kimin işlem yapacağı belli değil. Gönderim kararını uygulanabilir kılmak için kontrol edenin gönderenden farklı olması, karşılaştırılacak alanların belli olması ve sonucun hangi kayda geçeceğinin yazılması gerekir. Ölçüt ve inceleme zamanı birimin seçtiği değerlerdir; bir standardın zorunlu kıldığı sayılar değildir.
:::

---

## Gönderim vakası: kural ve eğitim kaydı

- **2 · Talimat, 1 Ekim:** “Her yazı gönderilmeden önce ikinci kişi kontrol eder.” A onaylamış.
- **3 · Eğitim, 2 Ekim:** dört görevlinin imzası; konu “gönderimde dikkat”.

**Görev:** Her kayıt için “neyi gösterir / neyi göstermez?” yazın.

::: {.notes}
Talimat, ikinci kişi kuralının yazılı olarak konduğunu ve A tarafından onaylandığını gösterir; hangi gönderimde uygulandığını göstermez. İmza, dört kişinin eğitime katıldığını gösterir; gönderimde alıcıyı doğru seçtiklerini ya da ikinci kişi kontrolü yaptıklarını göstermez. İki kaydın da kanıt değeri vardır, ama iddialarının sınırları farklıdır.
:::

---

## Gönderim vakası: 20 satırlık liste

:::: {.columns}

::: {.column width="50%"}
**4 · 1–9 Ekim gönderim kontrol listesi**

- Toplam gönderim: 20
- Kontrol eden parafı var: 14
- Kontrol eden alanı boş: 6
- Paraflı satırda gönderen = paraf atan: 9
:::

::: {.column width="50%"}
Listede başvuru no, alıcı e-posta, gönderen ve paraf var; **hangi alanların karşılaştırıldığı yazmıyor**.
:::

::::

::: {.notes}
Boş altı satırda kontrol hiç yapılmamış olabilir, yapılıp kaydedilmemiş de olabilir. Paraflı satırların dokuzunda imzayı gönderenin atması, talimattaki ikinci kişi şartının yerine gelmediğini gösterir. Kalan beş satırda ayrı bir paraf var; ancak paraf hangi alanların gerçekten karşılaştırıldığını göstermediği için gönderim doğruluğuna tam kanıt sayılmaz. Her sayı yalnızca kayıtlarının gösterdiği iddiayı taşır.
:::

---

## Gönderim vakası: şikâyet ve açıklama

:::: {.columns}

::: {.column width="50%"}
- **5 · Şikâyet, 9 Ekim:** B-117'de C başka adayın yazısını göndermiş; gönderen C, paraf C.
- **6 · A'nın notu:** “Kontrol yapılıyor, talimat asıldı, eğitim verildi.”
- **7 · Ek bilgi:** e-posta hizmeti merkez BT'de; C, otomatik tamamlamadan şüpheleniyor.
:::

::: {.column width="50%"}
**Görev:** Kesin bulguyu, beyanı ve doğrulanmamış olasılığı ayırın.
:::

::::

::: {.notes}
Şikâyet, en az bir yanlış gönderimin yaşandığını gösterir; B-117'nin kendi kendine paraflanmış olması da kayıtla doğrulanır. Başka yanlış gönderim olup olmadığı ise bu kayıttan çıkmaz. A'nın notu onun değerlendirmesidir; talimat ve eğitimin varlığını söyler ama uygulamayı kanıtlamaz. Otomatik tamamlama bir neden adayıdır, doğrulanmış bir olay değildir; merkez BT ile doğrulanmadan neden olarak yazmak kanıt zincirini bozar.
:::

---

## Bağımsız çözüm: altı karar

:::: {.columns}

::: {.column width="50%"}
1. Eksik plan kaydını sahip, uygulayıcı, ölçüt, kanıt ve incelemeyle tamamlayın.
2. Kayıt 2–6 için gösterdiği ve göstermediği şeyi yazın.
3. Sayısal bulguları ve dayandıkları kayıtları çıkarın.
:::

::: {.column width="50%"}
4. Düzeltme ile nedene yönelik iyileştirmeyi, sorumlusu ve kanıtıyla ayırın.
5. “Daha fazla eğitim” önerisini değerlendirin.
6. E-posta hizmetinin kapsam ilişkisini belirleyin.
:::

::::

::: {.notes}
Altı kararın her birinde iddiayı ilgili kayıtla eşleştiriyoruz. Altı boş satır için “kontrol yapılmadı” diye kesin hüküm veremeyiz, çünkü kayıt yokluğu ile uygulama yokluğu farklı şeylerdir. B-117 ise yanlış gönderimin gerçekleştiğine doğrudan veridir. Düzeltme bugünkü olaya, iyileştirme aynı türden olayın yeniden oluşmasını sağlayan boşluğa yönelir. Ölçüt ve inceleme sıklığı için birimin gerekçeli seçimleri geçerlidir; dışarıdan gelen zorunlu bir oran yoktur.
:::

---

## Çözüm: gönderim planı nasıl yazılır?

- **Sahip / uygulayıcı:** A / gönderen ve ondan farklı kontrol eden
- **Ölçüt:** her satırda farklı kontrol eden; başvuru no–ad–e-posta işaretli
- **Kanıt:** doldurulmuş liste + şikâyet kayıtları
- **Gözden geçirme:** iki hafta sonra A, son 20 satırı inceler

::: {.notes}
Gönderimden önce başvuru numarası, aday adı ve e-posta adresinin aynı kişiye ait olduğu, gönderenden farklı bir görevli tarafından karşılaştırılır. A onay ve izleme sorumluluğunu alır; “birim” gibi belirsiz bir sahiplik kullanılmaz. Liste uygulama izini, şikâyet kaydı sonucu gösterir; ikisi birlikte değerlendirilir. İki hafta ve 20 satır, bu örneğin seçilmiş inceleme düzenidir; başka açık ve uygulanabilir bir hedef de gerekçesiyle seçilebilir.
:::

---

## Çözüm: kayıtlar hangi iddiayı taşır?

| Kayıt | Gösterir | Göstermez |
|---|---|---|
| Talimat | Kural ve A onayı | Uygulama |
| Eğitim imzası | Katılım | Doğru gönderim |
| Liste | Paraf dağılımı | Gerçek karşılaştırmanın içeriği |
| Şikâyet | En az bir yanlış gönderim | Bütün yanlışların sayısı, neden |
| A'nın notu | A'nın beyanı | İşleyişin doğruluğu |

::: {.notes}
Altı boş liste satırında hiç kontrol yapılmamış olabilir, kontrol yapılıp kaydedilmemiş de olabilir. Paraflı satırdaki işaret de başvuru no, ad ve adresin gerçekten karşılaştırıldığını göstermez. Şikâyet B-117 için sonucu gösterir, ama otomatik tamamlama varsayımını doğrulamaz. Bu ayrımlar yapılmazsa “kayıt var” ifadesi gereğinden geniş bir sonuca dönüşür.
:::

---

## Çözüm: sayılar ne söylüyor?

:::: {.columns}

::: {.column width="50%"}
```text
20 gönderim
 ├─ 6: kontrol kaydı yok              → %30
 └─ 14: paraf var
      ├─ 9: gönderen kendi parafını atmış
      └─ 5: farklı kişiye ait paraf var → toplamın %25'i
```
:::

::: {.column width="50%"}
**B-117:** Paraf var, fakat gönderen ve paraf atan C; yanlış gönderim gerçekleşmiş.
:::

::::

::: {.notes}
Altı bölü yirmi yüzde otuz eder. Paraflı 14 kaydın dokuzunda ikinci kişi koşulu karşılanmıyor. Geriye kalan beş kayıt, 20 gönderimin yüzde 25'idir ve ikinci kişi parafı açısından uygundur; ancak karşılaştırılan alanlar yazılmadığı için tam doğruluk kanıtı değildir. B-117, parafın tek başına güvenilir sonuç üretmediğine somut bir örnektir. Otomatik tamamlamanın bu hataya yol açıp açmadığı henüz bilinmiyor.
:::

---

## Çözüm: olayın düzeltilmesi ve tekrarın önlenmesi

- **Olayı kaydet; doğru yazıyı ilgili kişiye gönder** → C; farklı kontrol eden · *kanıt:* olay kaydı, yeni kontrol listesi satırı
- **Listeye ayrı kontrol eden ve üç karşılaştırma alanını ekle** → A · *kanıt:* yeni liste ve sonraki inceleme
- **Otomatik tamamlama olasılığını doğrula** → A + merkez BT · *kanıt:* BT'nin yazılı inceleme sonucu

::: {.notes}
İlk satır gerçekleşmiş hatayı ele alıyor. Sonraki iki satır iş akışını ve olası teknik nedeni inceliyor; otomatik tamamlamanın değiştirilmesi gibi bir karara ancak doğrulamayla gidilebilir. A yeniden inceleme tarihini belirleyip ikinci kişi parafının ve üç alanın ne ölçüde doldurulduğunu kayda geçirmelidir.
:::

---

## Çözüm: eğitim önerisi ve e-posta hizmeti

- **“Daha fazla eğitim” yeterli mi?** Tek başına hayır: imza yalnız katılımı gösterir; eğitimden sonra şikâyet geldi ve 9 satırda gönderen kendi parafını attı.
- **E-posta hizmeti kapsamda mı?** Gönderim işi kapsamda; hizmetin işletilmesi merkez BT bağımlılığı.

::: {.notes}
Eğitim eklenebilir, ama eğitimin ardından gelen şikâyet ve kendi kendine paraflanan dokuz satır iş akışındaki boşluğu gösteriyor; bu boşluğu ancak ayrı kontrol eden ve kayıt kapatır. E-posta için önceki kapsam kartlarındaki ayrım geçerli: birim kime hangi sonucu göndereceğine karar verir, merkez BT hizmetin çalışmasını sağlar. Otomatik tamamlama olasılığı da bu bağımlılık üzerinden merkez BT ile doğrulanır.
:::

---

## Dört kısa kararı gerekçelendirin

1. Yeni paylaşım yazılımı ve erişim ayarı BGYS kurar mı?
2. Dört kişilik birimde A hem karar sahibi hem gözden geçiren olabilir mi?
3. İK kapsam dışındaysa ayrılış bilgisi önemsiz midir?
4. PUKÖ'deki **Kontrol Et**, erişim **kontrolü** müdür?

Her yanıtta vaka kaydından bir gerekçe kullanın.

::: {.notes}
Bu dört soruyu yanıtlarken evet ya da hayır demek yetmez, çünkü gerekçeli karar somut veriye bağlanır. Yazılımın hangi işi yaptığına, A'nın iki işlevinin nasıl doğrulanabileceğine, kapsam sınırının hangi bağımlılığı taşıdığına ve aynı “kontrol” sözcüğünün iki kullanımının hangi aşamaya ait olduğuna vaka kayıtlarından bakıyoruz.
:::

---

## Dört kararın gerekçesi

:::: {.columns}

::: {.column width="50%"}
- **Yazılım:** yetkiyi uygular; sahip, ölçüt ve yeniden inceleme de gerekir.
- **A'nın iki işlevi:** mümkün; BT dökümü gibi ayrı bir kayıtla değerlendirme güçlenir.
:::

::: {.column width="50%"}
- **İK sınırı:** özlük süreci dışarıda; ayrılış bildirimi erişim için bağımlılık.
- **İki “kontrol”:** önlem uygulanır; **Kontrol Et** aşamasında işleyişi değerlendirilir.
:::

::::

::: {.notes}
Yeni yazılım bir kontrolü uygulayabilir, ancak kapsam, karar sahibi, kanıt ve iyileştirme ilişkisi kurulmadan BGYS oluşmaz; yazılım değişikliği önceki erişim kararının yeniden incelenmesini de gerektirebilir. Küçük birimde A iki işlevi üstlenebilir; kanıtı BT dökümünden almak ya da birim dışından inceleme desteği kullanmak, kendi kararını değerlendirirken güveni artırır. İK'nın dışarıda olması, E hesabının 19 gün açık kalmasına yol açan bildirim ihtiyacını ortadan kaldırmaz. Son olarak erişim kontrolü Uygula aşamasında işler; PUKÖ'nün Kontrol Et aşaması ise bu uygulamayı ölçüte göre inceler.
:::

---

## Kaynaklar

- BGT 201 ders sunumu 2, “Bilgi Güvenliği Yönetim Sistemleri”, s. 2–8, 16–20.
- [ISO/IEC 27001:2022](https://www.iso.org/standard/27001)
- Ek okuma: *Fundamentals of Information Systems Security*, Böl. 7, s. 217–221.

::: {.notes}
Birim, kişiler, sayılar ve olay kayıtları kurgusaldır; ders sunumundaki BGYS anlatımına ve önceki haftalardaki vakaya dayanır. Gerçek bir kurumu temsil etmez.
:::
