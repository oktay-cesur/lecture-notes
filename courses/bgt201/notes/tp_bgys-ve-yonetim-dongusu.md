---
title: "BGYS ve Yönetim Döngüsü"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I · Hafta 3"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: today
execute:
  echo: false
code-line-numbers: false
include-in-header:
  text: |
    <style>
    .reveal pre code { font-size: 32px; line-height: 1.35; }
    .reveal .column pre code { font-size: 26px; }
    </style>
---


## BGYS ve yönetim döngüsü

<!-- Kanonik topic: .content/topics/bgys-ve-yonetim-dongusu.md · SHA256: 491ea9358e6526ad79f7e418fbec9ad979c0a0db37091c1f6d0ec6f113038203 -->

Bilgi Güvenliği Yönetim Sistemi (BGYS) ve planla–uygula–kontrol et–önlem al döngüsü

::: {.notes}
Geçen hafta aynı birimde farklı olayları gizlilik, bütünlük ve erişilebilirlik ilkelerine göre inceledik: hangi bilginin, hangi ortamda, hangi koşulu kaybettiğini olgulardan çıkardık. Bu hafta olaydan bir adım geri çekiliyoruz: Kurum bu olayların tekrarını önlemek için neye karar veriyor, kararın uygulandığını nasıl görüyor ve sonuca göre kararı nasıl değiştiriyor? Bu sorunun kurumsal yanıtına bilgi güvenliği yönetim sistemi (BGYS; İngilizcesi *Information Security Management System*, ISMS) diyoruz. Haftanın sonunda bir güvenlik önerisinde eksik kalan yönetim kararını gösterebilmeli, bir kararı döngü içinde izleyip ölçüt ile kanıtı karşılaştırabilmeli ve bir iç tetkikin nasıl hazırlanıp raporlandığını açıklayabilmeliyiz.
:::

---

## Önlem var; yanlış gönderim neden sürüyor?

**Kayıt ve Başvuru Birimi:** sorumlu A; görevliler B, C, D; eylülün başında stajyer E. Eylülde 48 başvuru.

- Kilitli arşiv dolabı → kâğıt dosyaları korur
- Parolalı çalışan hesapları → hesabı korur
- “Gönderimde dikkat” uyarısı → bir dilek

Yine de sonuç yazıları zaman zaman yanlış kişiye gidiyor; “Başvurular” klasörüne kimlerin erişebildiği kesin bilinmiyor.

::: {.notes}
Birimin işi üç adımdan oluşuyor: başvuruyu almak, değerlendirmek ve sonucu adaya göndermek. Bu iş boyunca başvuru formu, ekler, değerlendirme notu ve sonuç yazısı kullanılıyor; bu bilgiler kâğıt arşiv dolabında, paylaşılan “Başvurular” klasöründe ve e-postada duruyor. Vakadaki tarihler 2026 takvimine göredir; birim, kişiler ve sayılar kurgusaldır.

Sorunun nedenini önlemlerin ne yaptığına bakarak arayabiliriz. Dolap kâğıt dosyaları, parola hesapları korur; ikisi de sonuç yazısının alıcısını doğrulamaz. Parola, hesabın sahibinin hâlâ birimde çalışıp çalışmadığını söylemez. “Gönderimde dikkat” uyarısı dikkatli davranışın gerçekleştiğine dair hiçbir iz bırakmaz. Önlemler var, ama hiçbiri gönderim sorununun kendisine yönelmiyor ve kimse sonuçlarını izlemiyor.
:::

---

## Güvenlikten siz sorumlusunuz: ne önerirsiniz?

Kayıt ve Başvuru Birimi için iki somut öneri yazın.

- **İş:** başvuru alma, değerlendirme, sonuç gönderme
- **Bilgi:** form, ek, değerlendirme notu, sonuç yazısı
- **Ortam:** kâğıt dolap, “Başvurular” klasörü, e-posta

::: {.notes}
Bir kurumda bilgi güvenliğini sağlamakla görevlendirilseniz ne yapardınız? Önerinizi bu birimin işine, bilgisine ve ortamına bağlayarak yazın. Bir önerinin hangi bilgiyi ve hangi akışı koruduğu söylenmezse onu değerlendirecek bir dayanağımız olmaz. Yazdıklarınızı tahtada toplayacağız ve aynı soruya daha önceki sınıflarda verilmiş yanıtlarla karşılaştıracağız.
:::

---

## Aynı soruya gelen dört yanıt turu

| Soru | Yanıtlardan örnekler |
|---|---|
| Güvenliği nasıl sağlarsınız? | çalışanları bilgilendirmek · güçlü parola · politika geliştirip uygulamak · yerel VPN sunucusu · güvenlik duvarı · fiziksel erişim kontrolü · açıkların tespiti · “hash şifreleme ile veri tutmak” · log kaydı |
| Aynı soru, ikinci tur | bilgiyi içeride tutmak · çalışanlara uyarı · açıkları kapatmak · yerel VPN · şifreleme protokollerine uymak · medya imhası · ağ trafiğini izlemek · üçüncü taraf yazılım ve hizmetlerden uzaklaşmak |
| Organizasyon olarak nasıl sağlarsınız? | çalışan eğitimi · kurum kültürünü oturtmak · düzenli toplantı · yetkilendirme · siber güvenlik ekibi · güvenlik raporu |
| Organizasyon sorusu, ikinci tur | antivirüs · güvenlik duvarında açıklık tespiti · sunucu güvenliği · fiziksel erişim kontrolü · rıza metni ve eğitim · veri imhası · ekip kurmak · organizasyon ve standartlar |

Organizasyon sorusuna gelen yanıtların yarısı yine teknik; yerel VPN ve fiziksel erişim iki turda da var.

::: {.notes}
Ders sunumu aynı soruyu dört kez sorar ve her turda gelen yanıtları listeler (BGT 201 ders sunumu 2, slayt 2–5). Tahtadaki önerilerinizi bu tabloyla karşılaştırın: büyük olasılıkla çoğu burada bir karşılık bulur. Dördüncü satır ayrıca öğreticidir. Soru açıkça organizasyonu sorduğu hâlde antivirüs, sunucu güvenliği ve açıklık tespiti gibi teknik yanıtlar gelir; bu, iki sınıfın birbirinden kolay ayrılmadığını gösterir.

Bazı yanıtlar düzeltilerek okunmalıdır. “Hash şifreleme” iki ayrı işlemi birleştirir: hash bir veriden sabit uzunlukta bir özet üretir ve özetten verinin kendisine geri dönülemez; şifrelenmiş veri ise doğru anahtarla yeniden okunabilir hâle getirilir. Bir parolanın özetini saklamak ile bir başvuru dosyasını şifreleyip saklamak bu yüzden farklı kararlardır. “Bilgiyi içeride tutmak” ve “üçüncü taraflardan uzaklaşmak” da tartışılacak başlangıç yanıtlarıdır, genel bir kural değildir: bu birimde e-posta hizmetini merkez BT, hesap işlemlerini dış BT yürütüyor; birimin kararı bu tarafların neyi sağladığını yazıp izlemektir. Rıza metni imzalatmak çalışanın bilgilendirildiğini gösterebilir; tedbirin uygulandığını göstermez ve onun yerine geçmez. “Kurum kültürünü oturtmak” önerisi de neyin değişeceğini ve bunu kimin, neye bakarak göreceğini söylemedikçe değerlendirilemez.

Bu yanıtların hepsi bir başlangıç noktasıdır; hiçbiri kendiliğinden doğru ya da yanlış değildir. Hepsinde ortak eksik, bu birimde hangi bilgiyi ve hangi akışı koruduklarının söylenmemesidir. Şimdi her birine aynı dört soruyu soracağız.
:::

---

## Bir öneriyi değerlendirilebilir kılan dört soru

1. **Neyi korur?** Hangi bilgiyi ya da akışı hedefliyor?
2. **Kim karar verir?** Kuralı kim koyar, kim onaylar?
3. **Kim uygular?** Kural günlük işte kimin elinde işler?
4. **İşe yaradığını ne gösterir?** Hangi kayıt, hangi ölçütle karşılaştırılacak?

::: {.notes}
Teknik–organizasyonel ayrımı yararlıdır ama iki sınıf birbirini dışlamaz. Logu sistem üretir; onu kimin, hangi sıklıkla inceleyip bir bulguya dönüştüreceği organizasyonel bir karardır. Güçlü parola teknik bir ayardır; parola kuralını kimin koyacağı ve ayarın uygulandığını kimin denetleyeceği yine bir karar sorusudur. “Güvenlik raporu” önerisi bu açıdan öğreticidir: hangi kaydın kime, ne sıklıkla ve ne amaçla raporlanacağı yazılmadığı için belirsiz kalır. Bu belirsizlik rapora özgü değildir; kimin, ne zaman, neye göre yapacağı yazılmamış her önerinin ortak niteliğidir. Dört soru, bu yazılmamış kısmı görünür kılar.
:::

---

## “Eğitim verelim” dört sorudan geçerse

- **Neyi korur?** Sonuç yazısının doğru alıcıya gitmesini hedefleyebilir.
- **Kim karar verir?** Belirtilmemiş: içeriğe kim karar verir?
- **Kim uygular?** Belirtilmemiş: eğitimi kim verir, hangi davranış değişir?
- **İşe yaradığını ne gösterir?** Katılım imzası yalnız katılımı gösterir.

::: {.notes}
Eğitim çok sık verilen ve kolay onaylanan bir öneridir. Dördüncü soru en öğreticisidir: eğitimin kanıtı olarak çoğunlukla katılım imzası gösterilir. İmza yalnız kimlerin eğitime katıldığını gösterir; yanlış gönderimin azaldığını göstermez. Eğitim önerisini reddetmiyoruz; hangi karar ve kanıtın eksik olduğunu belirliyoruz. İçerik, karar sahibi, uygulayıcı ve gönderim kayıtları birbirine bağlandığında öneri değerlendirilebilir hâle gelir.
:::

---

## Etkinlik 1: iki öneriyi dört soruyla sınayın

**Öneriler:** güçlü parola · log kayıtları tutmak

**Teslim:** iki satır × dört sütunluk tablo

**Başarı ölçütü:**

- “Neyi korur?” birimdeki belirli bir bilgiye ya da akışa bağlı
- Öneriden çıkmayan hücrede tahmin değil “belirtilmemiş”
- En az bir hücrede önerinin neyi *yapamadığı* yazılı

::: {.notes}
Tabloyu birimin işi (başvuru alma, değerlendirme, sonuç gönderme), bilgisi (form, ek, değerlendirme notu, sonuç yazısı) ve ortamları (kâğıt dolap, “Başvurular” klasörü, e-posta) üzerinden dolduruyoruz. “Eğitim verelim” örneğindeki gibi her satırda önce önerinin neyi hedeflediğini yazıyoruz, sonra karar, uygulama ve kanıt sorularında önerinin kendisinin ne söylediğine bakıyoruz. Öneride yazmayan bir yanıtı kendi tahminimizle doldurmak, eksik yönetim kararını gizler; bu yüzden o hücreye “belirtilmemiş” yazılır.
:::

---

## Etkinlik 1: çözüm

| Öneri | Neyi korur? | Kim karar verir? | Kim uygular? | İşe yaradığını ne gösterir? |
|---|---|---|---|---|
| Güçlü parola | Başvurulara hesap üzerinden yetkisiz erişimi zorlaştırır | Belirtilmemiş | Belirtilmemiş | Ölçüt ve değerlendirme kaydı belirtilmemiş |
| Log | Erişimi sonradan izlemeye veri sağlar | Belirtilmemiş | Kaydı üreten sistem ve inceleyen kişi belirtilmemiş | İnceleme ve sonuç ölçütü belirtilmemiş |

::: {.notes}
Güçlü parola, başkasının bir çalışanın hesabını kullanmasını zorlaştırır; korunan şey “Başvurular” klasöründeki taranmış kayıtlara hesap üzerinden erişimdir. Ancak birimden ayrılmış bir kişinin açık kalan hesabını saptamaz; çünkü o hesabın parolası da güçlüdür. Parola kuralını kimin koyacağı ve sistem ayarını kimin denetleyeceği öneride belirtilmemiştir. Log ise erişimi doğrudan engellemez; sonradan hangi hesabın ne yaptığını gösterebilir. Kimin, hangi sıklıkla inceleyip bulguya dönüştüreceği yazılmadıkça kaydın bir etkisi olmaz. Birkaç kişinin ortak kullandığı bir hesap varsa log, işlemi yapan kişiyi de ayırt edemez. Her iki öneride yanıtsız kalan sorular, henüz verilmemiş yönetim kararlarıdır.
:::

---

## Bir kişinin alışkanlığı neden yetmez?

**D:** “Her sonuç yazısını göndermeden önce bir daha kontrol ediyorum.”

- Kontrolü kim yapar?
- Hangi alanları karşılaştırır?
- Yapıldığını hangi kayıt gösterir?

D izne çıkarsa, görev değiştirirse ya da ayrılırsa ne olur?

Kurulacak yapı: sistematik · altyapıyla bütünleşik · paydaş ihtiyacına ve kapsama dayalı · iş sürekliliğini gözeten · değişikliğe uyumlu

::: {.notes}
Önlemleri bir araya getirmek kendiliğinden bir sistem kurmaz; dolap kilidi, parola ve uyarı farklı yerlere etki eder. D'nin alışkanlığı işe yarayabilir, ama kurum kontrolü D'nin varlığına bağlamış olur. D izne çıktığında, görev değiştirdiğinde ya da ayrıldığında uygulama sessizce kaybolur ve kimse kaybolduğunu fark etmez; çünkü kontrolün kim tarafından, hangi alanlar karşılaştırılarak yapıldığı ve yapıldığını hangi kaydın gösterdiği hiçbir yerde yazmıyor. Karar yazılı bir iş akışına, uygulanabilir bir göreve ve gözden geçirilebilir bir kayda bağlandığında kişi değişse de beklenti sürer.

Ders sunumu aynı noktaya kurumlar arasındaki farktan gelir: her kurumun güvenlik ihtiyacı, kültürü, çalışanlarının iş yapma yöntemi ve yöneticilerinin idare biçimi farklıdır (BGT 201 ders sunumu 2, slayt 6). Sunum buradan bilgi güvenliğinin “bunlardan bağımsız” olması gerektiği sonucuna varır. Bu cümleden iki ayrı sonuç çıkar: güvenlik tek bir kişinin alışkanlığına bağımlı kalmamalıdır; ama bu, her kurumda aynı düzenin kurulacağı anlamına gelmez. Düzen kuruma özgüdür, kişiye bağımlı değildir. Bu yüzden başka bir kurumun önlem listesini kopyalamak D'nin alışkanlığındaki boşluğu kendiliğinden doldurmaz.

Sunum kurulacak yapının nasıl olması gerektiğini de sayar: sistematik olmalı, altyapıyla bütünleşmeli, paydaşların ihtiyacını ve kapsamı dikkate almalı, iş sürekliliğini gözetmeli ve değişikliklere uyum sağlayabilmelidir (slayt 7). Altyapıyla bütünleşmenin bu birimdeki karşılığı açıktır: ayrılış bilgisi merkez İK'da doğar, hesap işlemi dış BT'de yapılır, erişim kararı birimde verilir. Bu üç yer arasında bilgi akışı kurulmadıkça birimde yazılan bir erişim kuralı işlemez. Bu ilişkiyi kapsam ve erişim vakasında adım adım izleyeceğiz.
:::

---

## BGYS: sonuç karara geri döner

:::: {.columns}

::: {.column width="50%"}
**Bilgi güvenliği yönetim sistemi (BGYS):** bilgi varlıklarını korumaya yönelik, riskleri belirleyen, değerlendiren ve yöneten, sürekli geliştirilen sistematik yaklaşım.

Düzen kuruma özgüdür; kişiye bağımlı değildir. Bilginin yanında iş sürekliliğini de gözetir; yasal koşulları karar girdisi yapar.
:::

::: {.column width="50%"}
```text
kurumun işi → güvenlik kararı → uygulama kaydı
    ↑                                │
    └── değişen karar ← değerlendirme ┘
```
:::

::::

::: {.notes}
Tanım ders sunumundandır (slayt 8). Birimin diliyle: kurum kendi işini ve ilgili tarafların beklentilerini değerlendirir, önlemi amacıyla birlikte seçer, uygulamanın kaydını tutar, kaydı önceden konmuş ölçütle karşılaştırır ve sonucu yeni kararın girdisi yapar. Sistemi tek tek önlemlerden ayıran şey bu son halkadır.

Sunum tanıma iki ekleme yapar: BGYS çoğunlukla bilginin yanında iş sürekliliğini de kapsar ve yasal çerçevelere uymayı sağlar. İş sürekliliği birimde şöyle görünür: “Başvurular” klasörüne erişilemezse ya da e-posta hizmeti durursa değerlendirme ve sonuç gönderimi de durur. Erişilebilirlik kararı bu yüzden yalnız teknik bir ayar değildir; başvuru işinin sürüp sürmeyeceğine ilişkin bir karardır. Yasal koşullar da bir karar girdisidir: başvuru sahiplerinin bilgisini işleyen birim, uyması gereken yükümlülükleri kararlarına katar. Ancak BGYS kurmuş olmak, bütün yasal yükümlülüklerin karşılandığını kendiliğinden göstermez; her yükümlülüğün ayrıca kararla ve kayıtla karşılaştırılması gerekir. Sunum bu sistemlerin 1990'larda doğan ihtiyaçlarla şekillendiğini de söyler. ISO/IEC 27001:2013'e dayanan bu tarihli sunumdaki ifade genel bir dönem bilgisidir; belirli bir başlangıç yılı olarak okunmamalıdır.
:::

---

## Araç, belge, proje ve sertifika hangi işi görür?

- **Erişim aracı:** yetki kuralını uygular → kimin erişeceğine kim karar verir?
- **Politika belgesi:** kuralı yazar → uygulandığını gösterir mi?
- **İyileştirme projesi:** bir değişiklik yapar → açılan hesaplara sonra yeniden bakıldı mı?
- **Sertifika:** dış değerlendirmenin sonucudur → belirli bir yanlış gönderimi önler mi?

::: {.notes}
Bunlar sık sık BGYS ile karıştırılır. Bir erişim aracı yetki kuralını uygular; ama kimin erişeceğine araç karar vermez, süreç sahibi karar verir. Bir politika belgesi kuralı yazar; kuralın uygulandığını göstermez. Yeni bir belge tarayıcısı kurmak gibi bir iyileştirme projesi bir değişiklik yapar; kurulum sırasında açılan hesapların sonradan yeniden kontrol edilmesi ayrıca gerekir. Sertifika kurumun değerlendirilmiş olduğunu gösterebilir, ama belirli bir yanlış gönderimi kendi başına önlemez. Her biri bir yönetim sisteminin parçası olabilir; her biri yalnız kendi iddiasına kanıt oluşturur ve hiçbiri tek başına sistem değildir.
:::

---

## Güvenlik kararına hangi koşullar girer?

```text
başvuru hizmeti + işlenen bilgi
       + iç koşullar (A, B, C, D, stajyer E)
       + dış koşullar (merkez İK, dış BT, merkez BT)
       + ilgili tarafların beklentileri
                         ↓
                 KURUM BAĞLAMI
```

::: {.notes}
Kurum bağlamı, kararları etkileyen koşulların bütünüdür: birimin sunduğu hizmet, işlediği bilgi, iç koşullar ve dış koşullar. Birim kâğıt formları, taranmış dosyaları ve sonuç e-postalarını farklı ortamlarda işler; tek bir erişim ayarı bütün süreci açıklayamaz. İç koşullar birimin kendi çalışanlarıdır. Dış koşullar birimin dışında yönetilen ama birimi etkileyen unsurlardır: merkez İK personel bilgisini, dış BT hesap işlemlerini, merkez BT de e-posta hizmetini yönetir.
:::

---

## İlgili tarafın beklentisi hangi karara dönüşür?

| İlgili taraf | Beklenti | Dönüştüğü karar |
|---|---|---|
| Başvuru sahibi | Bilgisi yanlış kişiye açılmasın | Gönderim ve erişim kuralı |
| Görevliler B, C, D | Hangi iş için erişecekleri açık olsun | Göreve bağlı yetki |
| Merkez İK | Özlük dosyası kendi sürecinde kalsın | Kapsam sınırı, ayrılış bildirimi |
| Dış BT | Onaylı hesap talebi gelsin | Talep ve kapama kaydı |
| Üst yönetim | Kaynak kullanımının gerekçesi görülsün | Kaynak ve gözden geçirme kararı |

::: {.notes}
İlgili taraf, süreçten etkilenen ya da süreci etkileyen kişi veya kuruluştur. Bağlamı soyut bir liste olmaktan çıkaran şey, her tarafın beklentisinin belirli bir karara dönüşmesidir. A ise işin zamanında ve hatasız yürümesini bekler. Her beklenti aynı önlemle karşılanmaz; her biri ayrı bir karar girdisidir. Başvuru sahibinin beklentisi gönderim kontrolüne, BT'nin beklentisi ise yetki talebinin kimin onayıyla geleceğine bağlanır.
:::

---

## Kapsam: kararın sınırını çizmek

“Kurumun bilgi güvenliği” hangi **süreç**, **bilgi**, **ortam** ve **kurum parçası** hakkında karar verildiğini göstermez.

- **Dahil:** başvuru alma, değerlendirme, sonuçlandırma; kâğıt formlar, “Başvurular” klasörü, sonuç yazıları
- **Amaç:** kayıtlar yetkili kişilerce, doğru biçimde ve gerektiğinde erişilebilir şekilde işlensin
- **Bu birimin seçtiği sınır:** personel özlük dosyaları dışarıda (süreç sahibi merkez İK)

::: {.notes}
Kapsam, güvenlik yönetiminin ele aldığı süreç, bilgi, ortam ve kurum parçasının açık sınırıdır. Geniş bir kapsam yanlış değildir; bütün kurum kapsanabilir. Sorun, “kurumun bilgi güvenliği” gibi bir ifadenin karar alanını ve sahipliği göstermemesidir. Sınır belirlenince hangi işin içeride olduğu, hangi işin başka bir süreç sahibine ait olduğu ve hangi dış girdilere ihtiyaç duyulduğu görünür olur. Birim özlük dosyalarını dışarıda bıraktı, çünkü bu dosyaların süreç sahibi merkez İK'dır ve birim onların yaşam döngüsüne karar vermez. Bu, birimin kendi koşullarına göre yaptığı bir seçimdir; özlük süreçlerinin her BGYS'de kapsam dışında kalması gerektiği anlamına gelmez. Özlük dosyalarını da yöneten bir birim aynı süreci kapsamına alabilirdi.
:::

---

## Kapsam sınırını geçen bilgi: bağımlılık

```text
Merkez İK ─── ayrılış / görev değişikliği ──┐
Dış BT ────── hesap açma / kapama kaydı ────┼─→ BAŞVURU BİRİMİ
Merkez BT ─── e-posta hizmetinin çalışması ─┘   (kapsam içi süreç)

Yemekhane kart sistemi                         (bilgi/işlem bağı yok)
```

**Bağımlılık kaydı:** kim, neyi, ne zaman sağlar; sağlandığı nasıl görülür?

::: {.notes}
Kapsam dışında bırakmak ilişkiyi koparmak değildir. Bir personelin ayrılış bilgisi İK'da doğar, ama başvuru klasöründeki erişimi doğrudan etkiler; sınırın dışındaki bir bilgi içeriye girdi olarak gelebilir. Bağımlılık, kapsam dışındaki bir tarafın birimin işini etkileyen bilgi ya da hizmet sağlamasıdır. Bir bağımlılığı yönetmek için kimin neyi ne zaman sağlayacağını ve sağlandığının nasıl görüleceğini yazmak gerekir. Dış BT'nin bir firma olarak kapsam dışında olması, birimin kendi yetki kararını takip sorumluluğunu kaldırmaz. Öte yandan kapsam dışındaki her şey bağımlılık değildir; yemekhane kart sisteminin başvuru süreciyle hiçbir bilgi ya da işlem bağı yoktur.
:::

---

## Etkinlik 2: kapsam kartları

**Etiketler:** *dahil* · *kapsam dışı ama bağımlılık var* · *kapsam dışı ve bağ yok*

**Örnek:** kâğıt formlar ve dolap → *dahil*. Özlük dosyaları → kapsam dışı; ayrılış bildirimi bağımlılık.

- “Başvurular” klasörü
- Sonuç yazısının e-postayla gönderimi
- Dış BT'nin hesap işlemleri
- Yemekhane kart sistemi

**Teslim:** her kart için etiket ve tek cümlelik gerekçe. **Başarı ölçütü:** gerekçe unsurun adına değil süreç sahipliğine ya da bilgi/işlem bağına dayanır; bağımlılık kartında karşı tarafın neyi sağladığı yazılır.

::: {.notes}
Örnek iki kartın farkı süreç sahipliğidir: arşiv dolabının anahtarına birim karar verir, özlük dosyalarını ise İK yönetir. Özlük dosyaları dışarıda bırakıldığında ayrılış bilgisinin erişime etkisi ayrıca kayda geçirilir. Bir kartta iki ayrı iş iç içe görünüyorsa, örneğin bir işi yapmak ile o işin dayandığı hizmeti işletmek, bunları ayrı ayrı etiketlemek gerekir.
:::

---

## Etkinlik 2: çözüm

:::: {.columns}

::: {.column width="50%"}
- **“Başvurular” klasörü:** *dahil* — birimin taranmış kayıtları; erişim kararı birimde
- **Sonuç yazısını gönderme:** *dahil* — kime hangi sonucun gideceğine birim karar verir; e-posta hizmetinin işletilmesi merkez BT'ye bağımlı
:::

::: {.column width="50%"}
- **Dış BT hesap işlemleri:** *kapsam dışı ama bağımlılık var* — birimin onayladığı yetkiyi uygular, açma/kapama kaydını sağlar
- **Yemekhane kart sistemi:** *kapsam dışı ve bağ yok* — başvuru bilgisi veya işiyle ilişkisi yok
:::

::::

::: {.notes}
Gönderim kartında iki şey ayrılır: gönderim işi birimindir, e-posta hizmetinin işletilmesi ise merkez BT'ye bağımlıdır. Dış BT için bağımlılık kaydında talep biçimi, kapama süresi ve kapama kaydı beklentisi yer alabilir; hesabı açan taraf farklı olsa da yetki onayı birime aittir. Yemekhane kartı, kapsam dışındaki her unsurun bağımlılık sayılmayacağını gösterir.
:::

---

## Kurulum işleri ile PUKÖ aynı liste midir?

:::: {.columns}

::: {.column width="50%"}
**Kurulumda düzenlenen işler:** hedefler ve planlama, komite, mevcut durum–hedef farkı, varlık ve risk yönetimi, kontrollerin uygulanması, dokümantasyon
:::

::: {.column width="50%"}
**Kararları kayıtlara göre yeniden düzenleyen döngü:**

```text
Planla → Uygula → Kontrol Et → Önlem Al
   ↑                              │
   └──────────────────────────────┘
```
:::

::::

::: {.notes}
Ders sunumu BGYS adımlarını bu biçimde listeler (BGT 201 ders sunumu 2, slayt 16). Liste sistem kurulurken nelerin düzenleneceğini gösterir; ama listenin tamamlanması değişen personeli, yeni bir aracı ya da bir hatayı kendiliğinden yönetmez. Yinelenen kararı düşünmek için PUKÖ döngüsünü kullanıyoruz (slayt 17). Planla'da yazılan karar ve ölçüt Uygula'da günlük işe dönüşür; uygulamanın bıraktığı kayıt Kontrol Et'te önceden konmuş ölçütle karşılaştırılır; bu karşılaştırmanın bulgusu Önlem Al'da hem hatanın giderilmesine hem de kararın değişmesine yol açar; değişen karar yeniden Planla'ya döner. PUKÖ böylece “karar → uygulama → kanıt → yeniden karar” ilişkisini adım adım izlemenin bir yoludur. ISO/IEC 27001:2022'nin halka açık tanıtım sayfası, standardın bir BGYS'nin kurulması, uygulanması, sürdürülmesi ve sürekli iyileştirilmesi için gereksinimleri ortaya koyduğunu belirtir; PUKÖ bu sürekli iyileştirme fikrini bir birimin somut kararları üzerinde izlememizi sağlar.
:::

---

## “Kontrol” iki farklı iş yapar

- **Güvenlik kontrolü:** seçilmiş önlem, Uygula'da çalışır → “Başvurular” klasörünün yetki ayarı
- **Kontrol Et aşaması:** yapılanı ölçüte göre değerlendirir → yetki dökümünü görev listesiyle karşılaştırmak

“Kontrol var” diyen kişiye: ayardan mı, ayarın incelenmesinden mi söz ediyorsunuz?

::: {.notes}
Aynı sözcük iki ayrı iş için kullanılıyor. Güvenlik kontrolü, seçilmiş bir önlemdir ve Uygula aşamasında çalışır. PUKÖ'nün Kontrol Et aşaması ise yapılanı izleyip önceden konmuş ölçüte göre değerlendirmektir. Bu ayrım yapılmazsa bir ayarın var olması, işleyişinin incelendiği yerine geçebilir.

Döngünün her aşamasında bir karar sahibi ve bir uygulayıcı var. Kurulum listesinin ikinci maddesi olan komiteye ve bu kişilerin zamanını kimin sağladığına şimdi geçiyoruz.
:::

---

## Yönetim desteği hangi kararı etkiler?

- **Onay:** politikanın onayı ve yayımlanması
- **Kaynak:** ikinci kişi kontrolü ve yetki incelemesi için zaman; görevlendirme
- **Gözden geçirme:** toplantılarla sürecin izlenmesi

**Soru:** Kurum yalnız dışarıya iyi görünmek için şikâyet gelen gönderim işini kapsam dışında bırakırsa ne olur?

::: {.notes}
Ders sunumu üst yönetimi, bilgi güvenliği politikasını onaylayıp yayımlayan, finansal desteği sağlayan ve süreci gözden geçirme toplantılarıyla izleyen taraf olarak tanımlar; vizyonu olmayan bir üst yönetimin en büyük engellerden biri olduğunu ve personelin tavrının üst yönetimin yaklaşımından etkilendiğini vurgular (BGT 201 ders sunumu 2, slayt 18). Bu desteği yalnız bir imza olarak düşünmemek gerekir. Gönderimde ikinci bir kişinin kontrol yapması o kişinin zamanını gerektirir; ayda bir yetki incelemesi yapılacaksa bunun kimin görevi olduğu ve hangi işin yerine yapılacağı kararlaştırılmalıdır. Bu kararlar birim düzeyinde A'nın yetkisini aşıyorsa üst yönetimden gelir. Gözden geçirme toplantısında bir bulgunun hangi karara dönüştüğünü erişim vakasını tamamladıktan sonra ayrıca göreceğiz.

Aynı slayt kurumun sistemi neden kurmak istediğini de sorar: gerçek bir ihtiyaç mı, piyasada olumlu imaj mı, yasal avantaj mı? Kolay gösterilecek ama şikâyet gelen gönderim işini içermeyen bir süreç seçilirse, belgelenmiş bir düzen kurulsa bile yanlış gönderim sürer. Bu olası bir karar yanlılığıdır; her kurumun böyle davrandığı sonucu çıkmaz.
:::

---

## Sorumluluk işlevlere ayrılır

- **Yön ve kaynak:** amaç ve kaynak kararı → üst yönetim; birim düzeyinde A
- **Karar sahibi:** onaylı erişim ya da gönderim kuralı → A
- **Uygulayıcı:** yetki tanımı ve işlem kaydı → dış BT; B, C, D
- **Gözden geçiren:** kayıtları ölçütle karşılaştırma, bulgu → A ya da birim dışından bir görevli
- **Dokümantasyon:** onaylı kararları ve kayıtları güncel, bulunur tutmak → bu birimde A; kayıtları üretenler dış BT ile B, C, D

A'nın aylık incelemesi operasyonel gözden geçirmedir; bağımsız iç tetkik değildir.

::: {.notes}
Bu satırlar bir hiyerarşi ya da işlem sırası değil, aynı kararın farklı işlevleridir. Ders sunumu büyük kurumlar için üst yönetim temsilcisi, BGYS yöneticisi, iç tetkikçi ile BT, İK, muhasebe ve hukuk gibi bölümlerden kişilerin yer aldığı bir komite örneği verir. Komitenin görevi BGYS süreçlerini yönetmektir ve başlangıçtan itibaren etkin rol almalıdır; yani sistem kurulduktan sonra çağrılan bir onay kurulu değildir, hedeflerin ve planın yazıldığı ilk adımdan itibaren işin içindedir. Sunum organizasyonun her şirkette farklı olabileceğini ve ekipteki kişilerin mesaisinin bu işe göre düzenlenmesi gerektiğini de belirtir (slayt 19). İşlevlerin çiziminde BGYS sorumlusu, BT bölümü, dokümantasyon, ekip üyeleri, iç denetçi ve üst yönetim ayrı kutularda yer alır (slayt 20). Bu çizim bir örnek düzendir; küçük bir birimin bu unvanların hepsine sahip olması gerekmez. Gereken, her işlevin birinde olması ve o kişinin zamanının ayrılmış olmasıdır.

Dokümantasyonun ayrı bir işlev olarak görünmesi bir şeyi hatırlatır: kayıtları işi yapanlar üretir, ama birinin onları bir arada, güncel ve bulunur tutması gerekir. A'nın onayladığı erişim kararı, dış BT'nin açma ve kapama kayıtları, B, C ve D'nin işlem kayıtları dağınık kalırsa gözden geçiren kişi neyi neyle karşılaştıracağını bulamaz.

Dört kişilik bir birimde A hem karar sahibi hem gözden geçiren olabilir. Kendi kararını değerlendirirken kanıtı kendi beyanından değil, BT yetki dökümü gibi başka bir kaynaktan alması değerlendirmeyi güçlendirir. Yine de bu, bağımsız bir iç tetkik ile aynı şey değildir; iç tetkiki kimin, nasıl yaptığını dersin son bölümünde ayrıca göreceğiz. A'nın incelemesinin sağladığı şey, kararın sahibinin sonuçları düzenli olarak görmesidir.
:::

---

## Standart ortak ölçüt verir; klasör kararını birim verir

- **Ortak çerçeve:** BGYS'nin hangi yönetim konularında karar vermesi gerektiği. Örnek: ISO/IEC 27001
- **Birimin kararı:** “Başvurular” klasörüne kim erişir? Ayrılanın erişimi ne kadar sürede kaldırılır?

Vakadaki “1 iş günü” ve inceleme örneklemleri birimin kendi ölçütleridir.

::: {.notes}
ISO/IEC 27001 gibi bir standart, bir BGYS'nin hangi yönetim konularında karar vermesi gerektiğine ortak bir ölçüt sunar; standardın tanıtım sayfasına [ISO/IEC 27001:2022](https://www.iso.org/standard/27001) adresinden bakılabilir. Ama “Başvurular” klasörüne kimin erişeceğine ya da ayrılan bir kişinin erişiminin ne kadar sürede kaldırılacağına birim karar verir. Vakada kullanılan “bir iş günü” süresi ve inceleme örneklemleri kurgusal birimin seçtiği ölçütlerdir; bir standardın zorunlu kıldığı değerler değildir. Ortak ölçüt ile yerel karar ayrılınca, iki farklı kurumun süreçlerine aynı hazır yetki listesini kopyalamaktan da kaçınırız.
:::

---

## Erişim vakası · Planla: kararı ölçülebilir yazmak

**1 Eylül, karar sahibi A.** Amaç: taranmış başvurular ilgisiz kişilerce görülmesin ve değiştirilmesin.

| Karar | Ölçüt | Sahip / uygulayıcı |
|---|---|---|
| Klasöre yalnız ilgili görevliler erişir | Her hesap güncel bir görevli ve onaylı taleple eşleşir | A / dış BT |
| Ayrılan ya da görevi değişen kişinin erişimi kaldırılır | En geç 1 iş günü içinde | A / dış BT |

**Gözden geçirme:** her ayın son iş günü; yetki dökümü ↔ görev listesi.

::: {.notes}
Planla aşamasında mevcut duruma bakıp amacı, karar sahibini, uygulayıcıyı ve neyin başarı sayılacağını belirleriz. İşleyiş şöyle tasarlandı: A erişim talebini onaylayıp BT'ye iletir, BT hesabı tanımlar ya da kapatır. Onaylı talepler, hesap açma ve kapama kayıtları ve yetki dökümü olası kanıtlardır. Ölçütün önceden konması önemlidir: eylül sonunda neyin ihlal edildiğini ancak önceden yazılmış bir koşulla karşılaştırarak söyleyebiliriz. Plan kaydında, birinin ayrıldığı bilgisinin A'ya ve BT'ye hangi yolla, kimden ulaşacağı yazmıyor.
:::

---

## Uygula: hesap ile görev değişikliği ayrışıyor

- A, B, C, D ve E için hesap açıldı → onaylı talepler
- E, **11 Eylül** cuma stajını bitirip ayrıldı → merkez İK kaydı
- 1 iş günü ölçütüne göre erişimin kaldırılması için son gün → **14 Eylül** pazartesi

::: {.notes}
Erişim başlangıçta onaylı taleplere dayandı. Cuma günü ayrılan biri için ilk iş günü pazartesidir; bu yüzden takvim günü ile iş gününü ayırmak gerekir. Ayrılış bilgisi İK'da doğar; erişim kararı birimde verilir ve BT'de uygulanır. Bu iki yer arasında bir bilgi akışı yoksa hesap açık kalabilir.
:::

---

## Kontrol Et · rehberli görev: 30 Eylül kayıtları

| Kayıt | İçerik |
|---|---|
| BT yetki dökümü | A, B, C, D, E, **birim-ortak** |
| Güncel görev listesi | A, B, C, D |
| Onaylı talepler | A–E için 5 talep; ortak hesap için yok |
| Kapama kayıtları | E hesabının kapamasına ilişkin kayıt bulunmuyor |
| BT oturum kaydı | İncelenen kayıtta E hesabıyla 11 Eylül sonrası oturum görünmüyor |

**Görev:** Dökümdeki her hesabı görev listesi ve taleple eşleştirin. **Teslim:** her uygunsuzluk için hesap · karşılanmayan ölçüt · dayandığı kayıtlar. **Başarı ölçütü:** her bulgu en az iki kayda dayanır; kayıt yokluğu işlem yokluğu diye yazılmaz.

::: {.notes}
30 Eylül ayın son iş günüdür ve A farklı kaynaklardan gelen kayıtları yan yana koyar. Her kaydın neyi gösterdiği farklıdır: yetki dökümü gerçek yetki durumunu, görev listesi kimin çalıştığını, talepler kararın onayını, kapama kayıtları kapamanın kayda geçip geçmediğini, oturum kaydı ise kaydın kapsadığı oturumlarda hesabın kullanılıp kullanılmadığını gösterir. Planla aşamasındaki iki ölçüt, karşılaştırmanın neye göre yapılacağını belirler.
:::

---

## Bulgu 1: E'nin hesabı

```text
11 Eylül ayrılış → 14 Eylül kapama sınırı → 30 Eylül dökümde hâlâ açık
```

- **Karşılanmayan ölçüt:** en geç 1 iş günü
- **Dayanak:** İK kaydı ve görev listesi (ayrılış) + 30 Eylül yetki dökümü (açık hesap)
- Oturum görünmemesi ölçüt ihlalini ortadan kaldırmaz

::: {.notes}
Tek bir kayda bakmak bulgu için yetmez: E'nin ayrıldığını yalnız yetki dökümünden, hesabının açık olduğunu yalnız görev listesinden çıkaramayız; ikisinin karşılaştırılması gerekir. Kapama kaydının bulunmaması da tek başına hesabın kapatılmadığını göstermez; kapama yapılıp kayda geçmemiş olabilir. Hesabın açık kaldığını gösteren, 30 Eylül yetki dökümünde E'nin hâlâ yer almasıdır. Ayrılış ile inceleme arasında 19 takvim günü vardır; bu sayı ayrılıştan beri geçen süredir ve ölçütün yerine geçmez. İncelenen oturum kaydında E hesabıyla ayrılış sonrasında oturum görünmemesi, kaydın kapsadığı oturumlar için hesabın kullanılmadığına ilişkin bir işarettir; “zarar görülmedi, sorun yok” yanıtı ise önceden konmuş koşulu görmezden gelir.
:::

---

## Bulgu 2: ortak hesabın sahibi kim?

- Görev listesi → kişi karşılığı yok
- Onaylı talep → yok
- D'nin açıklaması → belge tarayıcısı kurulurken açılmış (**sözlü beyan**)
- Kullanım → D taranmış başvuruları bu hesapla yüklüyor

**Karşılanmayan koşullar:** onaylı talep ve kişisel izlenebilirlik

::: {.notes}
D'nin açıklaması hesabın neden oluşmuş olabileceğine ışık tutar, ama kimin hangi onayla açtığını gösteren bir kayıt değildir. Sorun dökümde fazladan bir satır bulunması değil, yetkinin kimin adına ve hangi işle bağlandığının bilinmemesidir. Ortak hesapla yapılan bir işlemin hangi kişiye ait olduğunu logdan ayırmak da güçleşir. D'nin tarama işini sürdürebilmesi için, ortak hesap kapatıldığında aynı yetkinin D'nin kendi hesabına onaylı bir taleple verilmesi gerekir.
:::

---

## İki bulgunun arkasında ne olabilir?

| Kayıtlar gösteriyor | Kayıtlar göstermiyor |
|---|---|
| Plan kaydında ayrılış bilgisinin A'ya hangi yolla ulaşacağı yazmıyor | İK bildirimi hiç yapmadı mı, yapıldı da birimde işlenmedi mi? |
| Ortak hesap için onaylı talep yok | BT talepsiz mi açtı, talep başka yolla gelip kayda geçmedi mi? |

**Neden adayı:** İK'dan birime bildirim akışı ve BT'de talep şartı yok. **Doğrulama:** A, İK'ya ve BT'ye sorar; yanıtları kayıtla görür.

::: {.notes}
İki bulguda ortak bir örüntü var: bir bilgi, olması gereken karara ulaşmamış. E'nin ayrılışı İK'da kayıtlı ama erişim kararına yansımamış; ortak hesap açılmış ama onaylı bir talep kaydına bağlanmamış. Yine de “bildirim akışı ve talep şartı yok” cümlesi doğrulanmış bir neden değil, bir neden adayıdır. Neden adayını sınırlamak iyileştirme kararını engellemez: kayıtla doğrulanan şey bir planlama ve dokümantasyon boşluğudur ve hangi neden doğrulanırsa doğrulansın bu boşluğun doldurulması gerekir. Özlük dosyalarının kapsam dışında bırakılması doğru bir seçimdi; eksik olan, sınırı geçen ayrılış bilgisinin bir bağımlılık olarak yazılmamasıdır. Hatayı yalnız BT çalışanına ya da A'nın unutkanlığına yüklemek, bu açıklama doğrulansa bile, plan kaydındaki yazılmamış bilgi yolunu doldurmaz.
:::

---

## Önlem Al: düzeltme ile nedene yönelik iyileştirme

- **Düzeltme:** E'nin hesabı ve ortak hesap kapanır; D'ye kendi hesabıyla onaylı tarama yetkisi → *kanıt:* BT kapama kaydı + yeni yetki dökümü
- **Nedene yönelik iyileştirme:** İK ayrılış ve görev değişikliğini aynı gün A'ya bildirir; BT talep numarası olmayan hesap açmaz → *kanıt:* bağımlılık kaydı + sonraki talep ve kapama kayıtları

İşlemin kapanışı ≠ iyileştirmenin işe yaradığının görülmesi

::: {.notes}
Düzeltme, bulunan uygunsuzluğun kendisini giderir. BT'den gelen “hallettik” e-postası neyin ne zaman kapandığını doğrulamaz; kapama kaydı ve yeni döküm birlikte değerlendirilir. Nedene yönelik iyileştirme, aynı türden boşluğun yeniden oluşmasını önlemeyi hedefler. Bu kararlar kapsam kaydındaki bağımlılık satırlarına da işlenir. İK'nın özlük süreci yine İK'nın sorumluluğunda kalır; birim yalnız ihtiyaç duyduğu bilginin kendisine nasıl ulaşacağını tanımlar. Aynı gün bildirim süresi de bu kurgusal birimin İK ile kararlaştırdığı bir değerdir.

E'nin hesabının kapatılması bir işlemin kapanışıdır ve BT kaydıyla doğrulanır. İyileştirmenin işe yaradığı ise ancak bir sonraki ayrılışta görülebilir. Böyle bir faaliyetin nasıl açılıp kapatıldığına iç tetkikten sonra yeniden döneceğiz.
:::

---

## İkinci tur: iyileştirme işledi mi?

**Yeni ölçüt:** talepsiz hesap sayısı 0. **İnceleme:** 30 Ekim

- B, 15 Ekim başka birime geçti → İK bildirimi 15 Ekim; BT kapama kaydı 16 Ekim → 1 iş günü içinde
- F birime katıldı → onaylı erişim talebi var
- Güncel yetki dökümü → A, C, D, F; talepsiz hesap 0

Tek ayrılış akışın işlediğini destekler; her durumda işleyeceğini kanıtlamaz.

::: {.notes}
Önlem Al'dan sonra Planla'ya dönüyoruz: A mevcut iki karara “talepsiz hesap sayısı sıfır” ölçütünü ekliyor. Ekim verisi, ayrılış bildiriminin ve BT kapamasının bu kez zamanında işlediğini; F için onaylı talep bulunması da yeni hesabın normal akışla açıldığını destekler. İkinci tur, bir defalık kapamanın değil değişen düzenin işleyişinin kanıtıdır. Kanıtın sınırı da vardır: ekimde tek bir ayrılış yaşandı; bu yüzden aylık inceleme sürer. Bu gözden geçirme bir saldırı testi değildir; hedefin kayıtlarla değerlendirilmesidir.
:::

---

## Erişim vakasında hangi yanıt eksik kalır?

- “E'nin hesabını kapattık, bitti.” → bu bir düzeltme; sonraki ayrılışın bildirimi kurulmadıkça boşluk yeniden oluşur
- “BT dışarıda, bizi ilgilendirmez.” → bağımlılık sahipliği devretmez; erişim kararının sahibi A
- “Politika yazalım.” → yazılı kural uygulamanın kanıtı değil
- “E'nin hesabıyla giriş yok, sorun yok.” → 1 iş günü ölçütü aşıldı

::: {.notes}
Bu yanıtların her biri verinin bir bölümüne bakıyor ama döngünün kalanını atlıyor. İlki Önlem Al'ın yalnız düzeltme yarısında kalıyor; ikincisi bağımlılığı sahiplik devri sanıyor; üçüncüsü yazılı kuralı uygulamanın izi ve incelemesi yerine koyuyor; dördüncüsü zarar belirtisinin görülmemesini önceden konmuş ölçütün yerine koyuyor.
:::

---

## Yazılan, yapılan, kaydedilen

```text
kural (yazılan) → uygulama (yapılan) → kayıt (yapıldığının izi)
```

Bir halkanın varlığı diğerini kanıtlamaz; kayıt yalnız kendi içeriğini gösterir.

| Kayıt | Gösterebildiği | Tek başına göstermediği |
|---|---|---|
| Toplantı kaydı | Kararın ne zaman, kimlerle alındığı | Kararın uygulandığı |
| Kullanıcı işlem kaydı | Hangi hesabın ne yaptığı | Ortak hesapta işlemi yapan kişi |
| Giriş–çıkış kaydı | Kimin, ne zaman girip çıktığı | İçeride ne yapıldığı |
| Eğitim kaydı | Katılım | İşin doğru yapılabildiği |
| Yetkinlik ve tecrübe kaydı | Görevin kime verilebileceğinin dayanağı | Belirli bir işin doğru yapıldığı |
| Rapor · tutanak | Belirli bir tarihte neyin tespit edildiği | Tespit dışında kalanlar |

::: {.notes}
Ders sunumu dokümantasyonu yönetim sistemlerinin temel konusu sayar ve “yaptığını yaz, yazdığını yap” ilkesiyle özetler; dokümantasyon sistematik olmalı ve görevli kişilerce yapılmalıdır (BGT 201 ders sunumu 2, slayt 24). Birimde bunun karşılığı şudur: A'nın onayladığı karar, dış BT'nin açma ve kapama kaydı, B, C ve D'nin işlem kayıtları işi yapan kişinin elinden çıkar; bunları düzenli ve güncel tutmak ise dokümantasyon işlevine düşer. D'nin alışkanlığı yazılmadığı için D ayrılınca kayboluyordu. Karar ve kayıt belirli bir görevli tarafından düzenli tutulduğunda, kişi değiştiğinde de neyin beklendiği ve neyin yapıldığı izlenebilir.

Sunum kayıt türlerini toplantı kayıtları, kullanıcı işlemlerinin kaydı, giriş–çıkış kayıtları, eğitim, yetkinlik ve tecrübe kayıtları, raporlar ve tutanaklar olarak sayar (slayt 39). Tablodaki iki sütun her kaydın hangi iddiaya kanıt olabileceğini ayırır. Eğitim kaydı katılımı gösterir; o kişinin ikinci kişi kontrolünü doğru yaptığını göstermez. Yetkinlik ya da tecrübe kaydı bir görevin kime verilebileceğine dayanak olur; o görevin belirli bir gün doğru yapıldığını yine işlem kaydı gösterir. Kullanıcı işlem kaydı hesabı gösterir; erişim vakasındaki ortak hesap gibi birkaç kişinin kullandığı bir hesapta kişiyi göstermez. Bir kaydın neyi göstermediğini bilmek, birazdan göreceğimiz iç tetkikte hangi iddia için hangi kaydın isteneceğini de belirler.
:::

---

## Yönetimin gözden geçirmesi: bulgu hangi karara dönüşür?

```text
Kontrol Et bulgusu → güncel rapor → yönetimin gözden geçirmesi → plan kararı
```

| Öneri | Ertelenirse bilgiye / hizmete sonucu | Kaynak · yetkili · tarih |
|---|---|---|
| E'nin ve ortak hesabın kapatılması | Ayrılmış bir kişinin ve sahibi belirsiz bir hesabın erişimi sürer | BT işlemi · A onayı, dış BT uygular · inceleme sonrası ilk iş günü |
| İK'dan aynı gün ayrılış bildirimi | Her yeni ayrılışta aynı boşluk yeniden oluşur | İK ile anlaşma · A · bir sonraki görev değişikliğinden önce |

Hangi öneri önce? Gerekçe, ertelemenin sonucundan gelir.

::: {.notes}
Ders sunumu yönetimin gözden geçirmesinde güncel raporun değerlendirilmesini ve mevcut planın onaylanmasını sayar (slayt 61). Erişim vakasında 30 Eylül incelemesinin bulguları bu güncel rapordur. A bulguların bir kısmını birim düzeyinde kendisi karara bağlayabilir; İK ile bir bildirim akışı kurmak ya da ikinci kişi kontrolüne zaman ayırmak birimin yetkisini aşıyorsa karar üst yönetimin gözden geçirmesine gider. Bu toplantının çıktısı bir hedefin değişmesi, bir sorumluluğun yeniden verilmesi ya da bir sürece kaynak ayrılmasıdır. Sunumdaki aynı listede risk yönteminin ve kabul edilebilir risk düzeyinin onaylanması da yer alır; risk değerlendirmesini ilerleyen haftalarda ayrıca ele alacağız.

Kontrollerin uygulanmasında sunum, önerilerin riskin önceliğine göre ele alınmasını ve her biri için gerekli kaynağın, yetkili kişilerin ve tarihlerin belirlenmesini ister (slayt 69). Bütün önlemler aynı anda yapılamıyorsa sıra, önlem ertelendiğinde bilgiye ve hizmete ne olacağına göre gerekçelendirilir. Hesapların kapatılması bugün süren bir erişimi sonlandırır ve küçük bir BT işlemi gerektirir; bu yüzden ilk iş günü yapılır. Bildirim akışı İK ile bir anlaşma ister; ama bir sonraki ayrılıştan önce kurulmazsa aynı boşluk yeniden oluşur. Bu karşılaştırma bir puanlama değildir; ertelemenin sonucunu kayıtlardaki olgulara dayanarak yazmaktır. Her öneri için yazılan kaynak, yetkili ve tarih, gönderim vakasındaki plan kaydında da arayacağımız alanlardır.
:::

---

## İç tetkik: kim yapar, neyi inceler?

```text
planlama → tetkik → raporlama        (belirli aralıklarla)
```

- Tetkikçi: kurum içinden bu iş için eğitim almış biri ya da hizmet veren bir firmadan gelen tetkikçi
- Koşul: tetkikçi kendi bölümünü tetkik etmez
- İncelenen: sistemin işleyişi · gereksinimlere ve mevzuata uygunluk · gelişme için gereken koşullar · başvuru sahibi gibi ilgili tarafların beklentileri · kuruma özgü durumlar
- Sonuç: üst yönetimin bilgilendirilmesi

A'nın aylık incelemesi kararın sahibinin gözden geçirmesidir; iç tetkikin yerine geçmez.

::: {.notes}
Ders sunumu iç tetkiki, belgelendirme için yapılan dış denetimden önce sistemin belirli aralıklarla kurum içinde denetlenmesi olarak anlatır (slayt 71). Tetkikçi BGYS ekibinden bu iş için eğitim almış biri ya da bu hizmeti sunan bir firmadan gelen biri olabilir; bir kurumun tetkikçiden hangi eğitimi ya da belgeyi istediği kuruma göre değişir. Değişmeyen koşul, ekip içi tetkikte tetkikçinin kendi bölümünü denetlememesidir: kendi kararını inceleyen kişi kararın gerekçesini zaten bildiği için eksik bir kaydı kolayca açıklanmış sayabilir. Tetkik planlama, tetkik ve raporlama adımlarıyla yürür. Belgelendirmenin kendisini standartlar konusunda ayrıca ele alıyoruz.

Sunum tetkikin hedeflerini şöyle sayar: standarda ve mevzuata uygunluğun belirlenmesi, BGYS'nin çalışmasının incelenmesi, geliştirilmesi için gereken şartların kontrolü, üst yönetimin bilgilendirilmesi, müşteri isteklerinin uygulanma durumu ve kuruluşa özgü durumların tespiti (slayt 72). Kayıt ve Başvuru Birimi'nde müşteri yerine başvuru sahibini düşünebiliriz: bilgisinin yanlış kişiye açılmaması beklentisinin uygulanıp uygulanmadığı tetkikin konusudur. Tetkikçi uygunluğu tek bir cümleyle ilan etmez; hangi gereksinimi hangi kayıtla karşılaştırdığını gösterir. Bu sonuç üst yönetime ulaştığında yönetimin gözden geçirmesinin girdisi olur.

A'nın aylık incelemesi ile iç tetkik farklı işler görür. A kararın sahibi olarak sonuçları düzenli görür. Tetkikçi ise bölümün dışından, önceden hazırlanmış bir plana göre işleyişi inceler ve yönetime raporlar. İkisi birbirinin yerine geçmez.
:::

---

## Tetkiki hazırlamak: soru listesi ve tetkik planı

Soru listeleri: ortak · bilgi işlem · fiziksel güvenlik

| Liste | Soru (vaka örneği) | Ölçüt | İstenen kanıt |
|---|---|---|---|
| Ortak | Birimde her işlevin sahibi yazılı mı? | Her işlev bir kişiye bağlı | Onaylı görev listesi |
| Bilgi işlem | Dökümdeki her hesap onaylı bir talebe bağlı mı? | Talepsiz hesap 0 | Yetki dökümü + talepler |
| Fiziksel güvenlik | ? | ? | ? |

Tetkik planı: hangi bölümün, ne zaman, kimin tarafından tetkik edileceğini önceden belirler.

**İkili, 2 dakika:** fiziksel güvenlik satırını arşiv dolabı için doldurun.

::: {.notes}
Ders sunumu üç tür soru listesi ayırır: her bölüme sorulan ortak sorular, bilgi işlem soruları ve fiziksel güvenlik amaçlı sorular (slayt 73–74). Hazır bir liste tetkikçinin neye bakacağını önceden belirler; böylece tetkik o gün akla gelenlerle sınırlı kalmaz ve iki farklı tetkikçi aynı soruları sorar. Bir soru tek başına yetmez: her sorunun yanında neye göre değerlendirileceği ve hangi kaydın isteneceği yazılmalıdır. Tablodaki sorular bu birim için yazılmış örneklerdir; bilgi işlem satırındaki ölçüt, erişim vakasının ikinci turunda A'nın koyduğu ölçüttür.

Tetkik planı (slayt 75) tetkikin hangi bölümde, hangi tarihte ve kimin tarafından yapılacağını önceden düzenler. Kurumlar planı farklı biçimlerde tutar; burada planın yaptığı işe bakıyoruz. Plan önceden bilindiği için tetkik edilen bölüm kayıtlarını hazırlayabilir; tetkikçinin kendi bölümünü denetlemediği de planda görülür. A'nın “her ayın son iş günü” incelemesi bir tetkik planı değildir; kararın sahibinin kendi takvimidir.

İkili görev için bir yanıt: “Arşiv dolabının anahtarı kimlerde?” Ölçüt: anahtar yalnız birimin yetkili görevlilerinde. Kanıt: anahtar teslim kaydı ve dolabın yerinde görülmesi. Başka sorular da yazılabilir; değerlendirmede bakacağımız şey ölçüt ve kanıt sütunlarının boş kalmaması ve kanıtın soruya gerçekten yanıt vermesidir.
:::

---

## Tetkik sahada: sor, dinle, gör

```text
açılış toplantısı → görüşme + belge kontrolü + yerinde gözlem → kapanış toplantısı
```

- Hazırlanmış soru listesi kullanılır; fiziksel koşullar ve donanım yerinde görülür
- Not alınır; notlar tetkik edilen kişiden gizlenmez
- **Sor:** beyan → D'nin ortak hesap açıklaması
- **Gör:** kayıt ya da gözlem → BT'deki hesap oluşturma kaydı
- **Ölçüt:** ikisinin neye göre değerlendirileceği, önceden

Örneklem yalnız incelenen kayıtlar hakkında sonuç üretir.

::: {.notes}
Ders sunumu iç tetkiklerin karşılıklı görüşme ve doküman kontrolüyle yürütülmesini, fiziksel şartların ve donanımın kontrol edilmesini ve hazırlanmış soru listelerinin kullanılmasını önerir. Not alınabilir, ama bu notlar gizli olmamalıdır. “Sor–dinle–gör” yaklaşımıyla objektif kanıt kullanılır; inceleme bütün dokümanlar üzerinden değil örneklem üzerinden yapılır; uygunsuzluklar belirlenir ve açılış–kapanış toplantıları yapılır (slayt 76).

Notun gizli olmaması, tetkik edilen kişinin neyin yazıldığını görebilmesi ve kapanışta itiraz edebilmesi demektir. Notun herkese açık bir kayıt olduğu anlamına gelmez; tetkik kayıtları da erişim yetkisine göre saklanır. Açılış toplantısında tetkikin kapsamı ve planı paylaşılır, kapanış toplantısında bulgular tetkik edilenlere aktarılır; böylece hiçbir bulgu ilk kez raporda görülmez.

Beyan değerlidir, çünkü nereye bakılacağını gösterir; ama kaydın yerine geçmez. Yerinde gözlem de bir kanıttır: arşiv dolabının kilitli durduğu ancak dolaba bakılarak görülür. Son 20 gönderim satırına bakan bir inceleme o 20 satır hakkında konuşur; ayın bütün gönderimleri için genelleme ancak gerekçesiyle yapılabilir. Aynı ayrım A'nın günlük gözden geçirmesinde de işe yarar.
:::

---

## Uygunsuzluk ve tetkik raporu

| Sunumdaki majör örnekler | Sunumdaki minör örnekler |
|---|---|
| Ana politika ya da dokümanlardan bazıları yok | Bazı dokümanlarda eksikler var |
| Roller ve görevler dağıtılmamış | Bakım kayıtları tutulmamış |
| Parola ve hesaplar için önlem alınmamış | Ziyaretçi kayıtları tutulmuyor |
| Eğitimler verilmemiş | Ortam imhası yapılmıyor |

Sınıf, örneğin adından değil; karşılanmayan ölçütten ve etkisinden çıkar.

**Rapor:** tarih · bölüm · açılış–kapanış katılımcıları · uygunsuzluklar ve gözlemler · genel değerlendirme

Bulgu satırı: E'nin hesabı → ölçüt: en geç 1 iş günü → kanıt: İK kaydı + 30 Eylül yetki dökümü

::: {.notes}
Ders sunumu uygunsuzlukları majör ve minör olarak ayırır ve her biri için örnek verir (slayt 77). Bu örnekler bir sınıflandırma kuralı değildir. Bir dokümandaki eksik, eksik kalan bölüm gönderimin nasıl kontrol edileceğiyse birimin ana işini etkiler. Ziyaretçi kaydının tutulmaması, arşivin bulunduğu odaya kimin girdiğinin izlenememesi demekse ağır bir sonuç doğurabilir. Bir bulgunun hangi sınıfa girdiği, karşılanmayan gereksinime, etkisine ve kurumun kullandığı tanıma göre gerekçelendirilir. Gözlem ise genellikle henüz bir gereksinimin karşılanmadığını göstermeyen ama izlenmesi önerilen durum için kullanılır.

Sunum tetkik raporunda tarihin, tetkik edilen bölümün, açılış–kapanış toplantısına katılanların, majör–minör uygunsuzlukların ve gözlemlerin ve genel değerlendirmenin yer almasını ister (slayt 78). Her alan bir soruya yanıt verir: tarih ve bölüm bulgunun hangi döneme ve hangi işe ait olduğunu, katılımcılar bulgunun kimlere aktarıldığını gösterir. Erişim vakasındaki E'nin hesabı bir tetkik raporuna yazılsaydı, satır karşılanmayan ölçütü ve objektif kanıtı birlikte taşırdı. Ölçüt ve kanıt yazılmazsa raporu okuyan kişi aynı sonuca yeniden ulaşamaz ve bulgu bir görüş olarak kalır.
:::

---

## Düzeltici faaliyet: ne açar, ne kapatır?

```text
AÇ (girdi) → UYGULA (kök neden + önlem) → KONTROL → KAPA (ilgililere bildirim)
```

- Faaliyeti açan girdiler: tetkik uygunsuzluğu · güvenlik testinde çıkan sorun · ihlal olayı · yönetimin gözden geçirmesi kararı · yasal değişiklik
- Hiçbir doküman nihai değildir: faaliyet, kararı ve kaydı değiştirebilir

| Erişim vakasında | |
|---|---|
| Açan girdi | 30 Eylül incelemesinin iki bulgusu |
| Uygula | Neden adayı doğrulanır; hesaplar kapanır, İK bildirimi kurulur |
| Kontrol | 30 Ekim incelemesi: B'nin geçişi 1 iş günü içinde kapandı |
| Kapa | Plana talepsiz hesap ölçütü eklendi; kapanış İK'ya ve dış BT'ye bildirilmeli |

::: {.notes}
Ders sunumu düzeltici ve önleyici faaliyetleri (DÖF) şu düşünceyle açar: dokümanların hiçbiri nihai değildir; değişim olmayacaksa denetim ve raporlama gereksizdir (slayt 79). Tetkik raporu bir son değil, bir faaliyetin girdisidir. Faaliyeti başlatan tek kaynak tetkik de değildir: bir güvenlik testinde karşılaşılan sorun, bir ihlal olayı, yönetimin gözden geçirmesinden çıkan karar ya da yasalardaki bir değişiklik de faaliyet açar.

Faaliyet aç–uygula–kapa yapısıyla yürür: uygulama sırasında kök sorunlara inilmeli, uygulamadan sonra kontrol edilmeli ve kapatıldığı ilgili kişilere bildirilmelidir. Erişim vakasında bu yapıyı zaten izledik. E'nin hesabının kapatılması işlemin kapanışıydı ve BT kaydıyla doğrulandı. İyileştirmenin işe yaradığı ise 30 Ekim incelemesinde, B'nin görev değişikliğiyle görüldü; plan kaydı da değişti ve talepsiz hesap ölçütü eklendi. Kontrol adımı atlanırsa faaliyet işlem yapıldığı gün kapanmış görünür, ama boşluğun kapandığı bilinmez.

Bu araçlarla ikinci vakayı, sonuç yazısının gönderimini, kendi başınıza inceleyeceksiniz.
:::

---

## Gönderim vakası · dosya 1/3: plan, talimat, eğitim

**Karar alanı:** sonuç yazısı doğru başvuru sahibine gitsin.

- **Kayıt 1 · Plan kaydı:** Karar: “Gönderilmeden önce kontrol edilir.” Amaç: yanlış gönderimi önlemek. Sorumlu: “Birim.” Ölçüt, kanıt ve gözden geçirme alanları boş.
- **Kayıt 2 · Talimat, 1 Ekim:** “Her yazı gönderilmeden önce ikinci kişi kontrol eder.” A onaylamış.
- **Kayıt 3 · Eğitim, 2 Ekim:** o tarihte birimde çalışan dört kişinin (A, B, C, D) imzası; konu “gönderimde dikkat”.

::: {.notes}
A'nın vaka dosyasında yedi kayıt var. İlk üç kayıt gönderim kararının nasıl yazıldığını, hangi kuralın onaylandığını ve kimlerin hangi konuda eğitime katıldığını içerir.
:::

---

## Gönderim vakası · dosya 2/3: kontrol listesi

**Kayıt 4 · Gönderim kontrol listesi, 1–9 Ekim**

- Sütunlar: başvuru no · alıcı e-posta adresi · gönderen · kontrol eden parafı
- Hangi alanların karşılaştırıldığına ilişkin sütun **yok**
- Toplam gönderim: **20**
- Kontrol eden parafı olan satır: **14** · kontrol eden alanı boş satır: **6**
- Paraflı 14 satırın **9**'unda gönderen ile paraf atan aynı kişi

::: {.notes}
Liste, 1–9 Ekim arasında yapılan bütün gönderimleri satır satır içeriyor. Her satırda başvuru numarası, alıcı adresi, gönderen ve kontrol eden parafı alanı bulunuyor. Sayılar listenin kendisinden sayılmıştır.
:::

---

## Gönderim vakası · dosya 3/3: şikâyet, not, ek bilgi

- **Kayıt 5 · Şikâyet, 9 Ekim:** B-117 numaralı başvuruda C, başka bir adayın sonuç yazısını göndermiş. Listede bu satırın göndereni C, parafı da C.
- **Kayıt 6 · A'nın notu:** “Kontrol yapılıyor, talimat asıldı, eğitim verildi.”
- **Kayıt 7 · Ek bilgi:** e-posta hizmeti merkez BT tarafından işletiliyor. C, e-posta programının alıcı adresini otomatik tamamlamasından şüpheleniyor.

::: {.notes}
Dosyanın son üç kaydı bir başvuru sahibinin şikâyetini, birim sorumlusunun durum notunu ve e-posta hizmetine ilişkin ek bilgiyi içerir. Vaka dosyası bu yedi kayıttan ibarettir; görevdeki her iddia bu kayıtlardan birine dayanmalıdır.
:::

---

## Gönderim vakası: altı karar

1. Kayıt 1'i karar sahibi, uygulayıcı, ölçüt, kanıt ve inceleme tarihiyle tamamlayın.
2. Kayıt 2–6 için neyi gösterdiğini / göstermediğini yazın; *kesin bulgu*, *beyan* ya da *doğrulanmamış olasılık* olarak sınıflandırın.
3. Sayısal bulguları ve dayandıkları kayıtları çıkarın.
4. Düzeltme ile nedene yönelik iyileştirmeyi sorumlusu ve kanıtıyla ayırın.
5. “Daha fazla eğitim verelim” önerisini değerlendirin.
6. E-posta hizmetinin kapsamla ilişkisini belirleyin.

**Teslim:** altı başlıklı, tek sayfalık karar kaydı; 2. karar için kayıt–gösterir–göstermez tablosu.

::: {.notes}
Erişim vakasında kullandığımız dört soru, kapsam ve bağımlılık, ölçüt–kanıt karşılaştırması ile beyan–kayıt ayrımı bu dosyadaki kararlar için de geçerlidir. Bir önerinin hangi kayıtla doğrulanacağı belirtilirse, başka biri aynı ölçüte göre kararı yeniden değerlendirebilir.
:::

---

## Gönderim kararı: tesliminizi kontrol edin

- Her iddiayı en az bir kayıt numarasına bağlayın.
- Planın karar sahibi bir kişi; ölçütü sayılabilir; incelemesi tarihli olsun.
- Kayıt yokluğunu uygulama yokluğu, olasılığı doğrulanmış neden saymayın.
- Düzeltme ve iyileştirmeyi ayrı satırlarda, kendi sorumlu ve kanıtlarıyla yazın.
- Sayısal uygulama izini doğru gönderim oranından ayırın.

**Kayıt değerlendirme tablosu:**

| Kayıt no | Gösterir | Göstermez | Kesin bulgu / beyan / olasılık |
|---|---|---|---|
| … | … | … | … |

::: {.notes}
Bir kaydın iddiası ile sınırını birlikte yazmak, aynı veriden farklı sonuçlar çıkarılmasını önler. Önerilen düzeltme bugünkü hataya, iyileştirme ise tekrarına yol açabilecek koşula yönelir; bu yüzden ikisinin gerçekleştiğini gösterecek kayıtlar farklı olabilir. Doldurulan formun, işlemin gerçek sonucunu hangi koşullarda gösterebildiği ayrıca değerlendirilir.
:::

---

## Çözüm: plan kaydı nasıl tamamlanır?

- **Karar sahibi:** A — onay ve izleme
- **Uygulayıcı:** gönderen ve ondan farklı bir kontrol eden
- **Ölçüt:** kontrol eden ≠ gönderen; yazıdaki başvuru no + ad ↔ başvuru kaydı, kayıtlı adres ↔ alıcı adresi; üç eşleşmenin sonucu satıra işlenir
- **Kanıt:** doldurulmuş liste (uygulama izi) · şikâyet kayıtları (bildirilen hatalar) · seçilen gönderimlerin yeniden karşılaştırılması (doğru sonuç)
- **Gözden geçirme (önerilen):** 12 Ekim'de yürürlük; 26 Ekim'de son 20 satır + seçilen gönderimlerde belge–kayıt–alıcı eşleşmesi

::: {.notes}
“Birim” sorumlu olarak bir kişiyi göstermiyor; hata görüldüğünde kimin işlem yapacağı belli değil. Alanların nereden alınacağı en kolay atlanan kısımdır. Kontrol listesine yazılan başvuru numarası ile alıcı adresi kendi aralarında tutarlı olabilir; ama e-postaya başka bir adayın sonuç yazısı eklenmişse liste bunu göstermez. B-117'deki gibi bir hata, listede doğru görünen bir satırla da gerçekleşebilir. Bu yüzden karşılaştırma gönderilecek belgenin kendisinden başlar.

12 ve 26 Ekim tarihleri, iki hafta ve 20 satır vaka dosyasındaki kayıtlar değil, bu çözüm için önerilen bir inceleme düzenidir; başka açık ve uygulanabilir bir hedef de gerekçesiyle seçilebilir. 20 satırlık örneklem yalnız o satırlar hakkında sonuç verir. İkinci kişinin kontrol için ayıracağı zaman da kararın parçasıdır; görevlilerin iş yükü bunu karşılamıyorsa karar, A'nın ya da üst yönetimin kaynak kararına dönüşür.
:::

---

## Çözüm: kayıtlar hangi iddiayı taşır?

| Kayıt | Gösterir | Göstermez | Tür |
|---|---|---|---|
| 2 · Talimat | Kural ve A'nın onayı | Hangi gönderimde uygulandığı | Kesin bulgu (kuralın varlığı) |
| 3 · Eğitim imzası | Dört kişinin katılımı | Doğru alıcı seçimi, ikinci kişi kontrolü | Kesin bulgu (katılım) |
| 4 · Liste | Paraf dağılımı | Gerçekte karşılaştırılan alanlar | Kesin bulgu (paraf dağılımı) |
| 5 · Şikâyet | En az bir yanlış gönderim | Bütün yanlışların sayısı ve nedeni | Kesin bulgu (B-117) |
| 6 · A'nın notu | A'nın değerlendirmesi | İşleyişin doğruluğu | Beyan |

Kayıt 7'deki otomatik tamamlama: C'nin şüphesine dayanan **doğrulanmamış olasılık**.

::: {.notes}
Hiçbir kayıt doğru gönderimin kendisini göstermiyor. Boş altı satırda kontrol hiç yapılmamış olabilir, yapılıp kaydedilmemiş de olabilir; kesin söyleyebileceğimiz şey, bu satırlarda ikinci kişi kontrolünün kanıtının bulunmadığıdır. Aynı ayrım kendi paraflı dokuz satır için de geçerlidir: ikinci kişi kontrolü kayıtta gösterilmiyor ve ikinci kişi parafı koşulu karşılanmıyor; ama başka birinin kayda geçmeden bakıp bakmadığını kayıt söylemez. A'nın notu talimatın ve eğitimin varlığını doğru biçimde söyler. “Kontrol yapılıyor” kısmını kayıtlar yalnız sınırlı biçimde destekler: beş satırda gönderenden farklı bir kişinin parafı var, ama hangi alanların karşılaştırıldığı yazmıyor ve kalan 15 satırda ikinci kişi kontrolü kayıtta görünmüyor.
:::

---

## Çözüm: sayılar ne söylüyor?

:::: {.columns}

::: {.column width="55%"}
```text
20 gönderim (1–9 Ekim)
 ├─ 6: kontrol eden alanı boş → %30
 └─ 14: paraf var
      ├─ 9: gönderen kendi parafını atmış
      │     → ikinci kişi parafı koşulu karşılanmıyor
      └─ 5: farklı kişinin parafı → toplamın %25'i
```
:::

::: {.column width="45%"}
Sayılar ikinci kişi koşulunun **uygulanma izini** ölçer; doğru gönderim oranını vermez.

**B-117:** paraf var, gönderen ve paraf atan C; yanlış gönderim gerçekleşmiş.
:::

::::

::: {.notes}
Altı bölü yirmi yüzde otuz eder: bu satırlarda ikinci kişi kontrolünün kaydı yok. Kalan 5 satır, 20 gönderimin yüzde 25'idir ve ikinci kişi parafı koşulunu karşılar. Ancak koşulu karşılamak ile gönderimin doğru olduğunu göstermek ayrı şeylerdir: listede karşılaştırılan alanlar yazılmadığı için bu beş paraf, başvuru numarası, ad ve adresin gerçekten karşılaştırıldığını göstermez. Vaka dosyasında diğer 19 gönderimin sonucuna ilişkin bir kayıt bulunmaması da o gönderimlerin doğru yapıldığının kanıtı değildir; yanlış alıcıya ulaşan her yazı şikâyete dönüşmeyebilir. B-117, parafın tek başına güvenilir bir sonuç üretmediğine somut bir örnektir. Otomatik tamamlamanın bu hataya yol açıp açmadığı ise henüz bilinmiyor.
:::

---

## Çözüm: olayın düzeltilmesi ve tekrarın önlenmesi

| İş | Tür | Sorumlu | Kanıt |
|---|---|---|---|
| Olayı kaydetmek; doğru yazıyı B-117'nin sahibine göndermek; yanlış alıcıdaki yazının etkisini sınırlamaya çalışmak | Düzeltme | C ve farklı bir kontrol eden; olay kaydı A'da | Olay kaydı, yeni liste satırı |
| Kontrol eden ≠ gönderen kuralını ve üç karşılaştırmanın sonucunun satıra işlenmesini listeye yazmak | Nedene yönelik iyileştirme | A | Yeni liste; 26 Ekim incelemesi ve belge–kayıt–alıcı karşılaştırması |
| Otomatik tamamlama olasılığını doğrulatmak | Neden adayının doğrulanması | A ve merkez BT | BT'nin yazılı inceleme sonucu |

::: {.notes}
Düzeltme satırında bir sınır var. Doğru yazıyı doğru kişiye göndermek, B-117'nin sahibinin sonucunu öğrenme ihtiyacını karşılar; ama başka bir adayın sonuç yazısı yanlış alıcıya zaten açılmıştır ve bu açılma geri alınamaz. Yanlış alıcıdan yazıyı silmesini istemek gibi adımlar etkiyi sınırlamaya çalışır, açılmayı ortadan kaldırmaz. Bu yüzden olay kaydında hangi adayın bilgisinin kime ulaştığı ve etkiyi sınırlamak için hangi adımların atıldığı da yer alır.

İyileştirme satırı iş akışındaki boşluğa yönelir: kontrol eden sütunu listede zaten vardı; eksik olan, bu sütunun gönderenle aynı kişi olamayacağının, neyin neyle karşılaştırılacağının ve sonucun kaydedileceğinin yazılmasıydı. Otomatik tamamlama bir neden adayıdır; programın ayarını değiştirmek gibi bir karara ancak merkez BT'nin doğrulamasından sonra gidilebilir. Faaliyet de liste değiştirildiği gün kapanmaz. 26 Ekim incelemesinde parafların ve üç alanın ne ölçüde doldurulduğu uygulamanın izidir; seçilen gönderimlerde belgenin başvuru kaydı ve alıcıyla gerçekten eşleşip eşleşmediği ise kontrolün işe yarayıp yaramadığının kanıtıdır. Vaka dosyasında bu incelemenin sonucu henüz yoktur; bu yüzden iyileştirmenin etkisi şimdilik doğrulanamaz.
:::

---

## Çözüm: eğitim önerisi ve e-posta hizmeti

- **“Daha fazla eğitim” yeterli mi?** Tek başına hayır. Kural var (Kayıt 2) ve kontrol eden sütunu var (Kayıt 4); eksik olan karşılaştırılacak alanların tanımı ve gönderenin satırı kendi parafıyla tamamlayabilmesi.
- **E-posta hizmeti kapsamda mı?** Gönderim işi kapsamda; hizmetin işletilmesi merkez BT'ye bağımlılık. Otomatik tamamlama bu bağımlılık üzerinden doğrulanır.

::: {.notes}
Eğitim kaydı, 2 Ekim'de dört kişinin “gönderimde dikkat” konulu eğitime katıldığını gösterir; eğitimde ikinci kişi kontrolünün nasıl yapılacağının anlatılıp anlatılmadığı kayıtta yoktur. 9 Ekim şikâyeti eğitimden sonra en az bir yanlış gönderimin gerçekleştiğini gösterir. Kendi paraflı 9 satır ise 1–9 Ekim döneminin toplamıdır; bunların kaçının eğitimden sonra olduğu kayıtta görünmüyor. Bu veriler eğitimin tek başına yeterli olduğu sonucunu desteklemez; ama sorunun bilgi eksikliğinden mi, uygulama ve iş akışından mı kaynaklandığını da kendi başına kanıtlamaz; iki neden adayının ayrıca incelenmesi gerekir. Eğitim eklenebilir; ancak alan tanımı ve kendi parafı boşluğu giderilmeden aynı sorun sürebilir. E-posta için kapsam kartlarındaki ayrım geçerlidir: birim kime hangi sonucu göndereceğine karar verir, merkez BT hizmetin çalışmasını sağlar; birim bağımlılık kaydına bu tür bir inceleme talebinin nasıl yapılacağını ekleyebilir.
:::

---

## Etkinlik 3: dört kısa karar

1. Yeni bir paylaşım yazılımı ve erişim ayarı BGYS kurar mı?
2. Dört kişilik birimde A hem karar sahibi hem gözden geçiren olabilir mi?
3. İK kapsam dışındaysa ayrılış bilgisi önemsiz midir?
4. PUKÖ'deki **Kontrol Et**, erişim **kontrolü** müdür?

**Teslim:** her soruya iki–üç cümlelik gerekçeli yanıt. **Başarı ölçütü:** evet/hayır yetmez; her yanıt erişim ya da gönderim vakasından en az bir kayda veya tarihe dayanır.

::: {.notes}
Bu dört soru haftanın dört ayrımını yeniden çağırır: araç ile yönetim sistemi, işlevler ile kişiler, kapsam sınırı ile bağımlılık, güvenlik kontrolü ile Kontrol Et aşaması. Her yanıtta gerekçeyi genel bir ilke yerine vakadaki bir kayda ya da tarihe bağlıyoruz.
:::

---

## Etkinlik 3: gerekçeler

:::: {.columns}

::: {.column width="50%"}
- **Yazılım:** kuralı uygular; sahip, ölçüt, kanıt ve yeniden inceleme olmadan BGYS olmaz — tarayıcı kurulumundaki ortak hesap
- **A'nın iki işlevi:** mümkün; kanıt BT dökümü gibi ayrı kaynaktan — ama bağımsız iç tetkik değil
:::

::: {.column width="50%"}
- **İK sınırı:** özlük süreci dışarıda; ayrılış bildirimi bağımlılık — E'nin hesabı 30 Eylül'de hâlâ açık
- **İki “kontrol”:** erişim kontrolü Uygula'da çalışır; **Kontrol Et** onu ölçüte göre inceler
:::

::::

::: {.notes}
Yeni yazılım bir erişim kuralını uygulayabilir; ama kapsam, karar sahibi, ölçüt, kanıt ve yeniden inceleme ilişkisi kurulmadan BGYS oluşmaz. Belge tarayıcısının kurulumunda açılan ortak hesap, bir yazılım değişikliğinin önceki erişim kararının yeniden incelenmesini gerektirebileceğini gösterir. Küçük birimde A iki işlevi üstlenebilir; kendi kararını değerlendirirken kanıtı BT yetki dökümü gibi ayrı bir kaynaktan alması değerlendirmeyi güçlendirir, ama bu inceleme bağımsız bir iç tetkik yerine geçmez. İK'nın kapsam dışında olması ayrılış bilgisini önemsiz kılmaz; E'nin hesabının 30 Eylül'de hâlâ açık olması, bu bilginin erişim kararına ulaşmasının ne kadar önemli olduğunu gösterir. Son olarak erişim kontrolü Uygula aşamasında çalışan bir önlemdir; PUKÖ'nün Kontrol Et aşaması ise bu önlemin işleyişini önceden konmuş ölçüte göre inceler.
:::

---

## Kaynaklar

- BGT 201 ders sunumu 2, “Bilgi Güvenliği Yönetim Sistemleri”, slayt 2–8, 16–20, 24, 39, 61, 69, 71–79.
- [ISO/IEC 27001:2022 tanıtım sayfası](https://www.iso.org/standard/27001)
- Ek okuma: *Fundamentals of Information Systems Security* (denetim ve izleme konuları).

::: {.notes}
Birim, kişiler, sayılar ve olay kayıtları kurgusaldır; gerçek bir kurumu temsil etmez.
:::
