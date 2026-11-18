---
title: "Uygulama: Fark Kayıtları"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-11-17
execute:
  echo: false
---

## Görev: kurumun kuralları sahada nasıl işliyor?

* **Amaç:** "Kâğıt üzerinde ne yazıyor?" ile "Sistemde gerçekte ne oluyor?" arasındaki ayrımı somut kanıtlarla ortaya koymak.
* **Veri:** **Duru Eğitim Merkezi** adlı kurgusal kurumun iç denetim verileri ve operasyonel rolleri.
* **Çıktı:** Altı alanlı fark analizi (gap analizi) kayıtları.

**Göreviniz:**

1. Kurumun vaka verisini ve rollerini inceleyin.
2. `ayrilan-hesap` konusundaki rehber fark kaydını adım adım çözümleyin.
3. `geri-yukleme` ve `takvim-dosyasi` durumları için bağımsız fark kayıtlarını başarı ölçütlerine uygun şekilde doldurun.

*Kurum, kişiler, sistemler ve test sonuçları kurgusaldır.*

::: {.notes}
Kurumların yazılı güvenlik politikaları ve kuralları ile sahadaki günlük uygulamaları her zaman birebir örtüşmez. Güvenlik yönetiminin ilk görevi, kâğıt üzerinde tanımlanan kural ile sistemde gerçekte işleyen durum arasındaki ayrımı somut kanıtlarla tespit etmektir. Önceki derslerde kavramsal çerçevesini gördüğümüz fark analizi (gap analizi), çalışanları cezalandırma ya da salt teftiş aracı değildir; kurumun kendi eksiklerini bir güvenlik olayı yaşanmadan önce fark edip yönetilebilir düzeltme işlerine dönüştürme yöntemidir.

Çalışmanızda üç farklı operasyonel durumla karşılaşacaksınız. İlk durum olan `ayrilan-hesap` bulgusunu adım adım çözümlenen bir rehber örnek olarak birlikte inceleyeceğiz; ardından `geri-yukleme` ve `takvim-dosyasi` durumları için bağımsız fark kayıtlarını aynı yapısal ölçütlere göre siz hazırlayacaksınız.

Kayıtları üretmeye başlamadan önce kurumun organizasyon yapısını, rol dağılımını ve denetim paketindeki ham bulguları dikkatle incelemeniz gerekir. Sahadaki teknik bulguyu doğru kurumsal rolle eşleştirmek, bir sonraki slaytta göreceğimiz görev ve yetki ayrımının anlaşılmasına bağlıdır.
:::

---

## Kurum yapısı ve operasyonel roller

**Duru Eğitim Merkezi**, yetişkinlere mesleki sertifika ve dil eğitimleri veren bir kurumdur; temel süreçleri üç rol yönetir:

| Rol | Görev tanımı ve yetki alanı |
|---|---|
| **Kayıt Birimi Yöneticisi** | Kursiyer sözleşmelerinin, kayıt evraklarının ve eğitim operasyonunun **iş sahibidir**. |
| **BT Sistem Sorumlusu** | Sunucuların, kullanıcı hesaplarının, yetkilerin ve yedekleme altyapısının **teknik uygulayıcısıdır**. |
| **Merkez Müdürü** | Bütçe, güvenlik politikası onayları ve birimler arası koordinasyondan sorumlu **karar yetkilisidir**. |

Kısa adlar incelemede kolaylık sağlamak içindir; kayıtlarda olgular ve kurallar tam cümlelerle açıklanır.

::: {.notes}
Yetişkinlere yönelik mesleki sertifika ve dil eğitimleri yürüten Duru Eğitim Merkezi'nde kursiyer kayıtları, ders programları ve bilişim altyapısı birbirinden ayrı sorumluluk katmanlarıyla yönetilir. Güvenlik yönetiminde hesap verebilirlik ilkesinin çalışabilmesi için karar yetkilisi, iş sahibi ve teknik uygulayıcı rollerinin net biçimde ayrılması şarttır. Kimin iş sürecinin sahibi, kimin teknik uygulayıcı olduğu baştan tanımlanmazsa fark kayıtlarında sorumlu alanına genel geçer ifadeler yazılır ve düzeltici aksiyonlar sahipsiz kalır.

Tablodaki ayrımı okurken teknik işlem ile süreç sahipliğini birbirine karıştırmamaya dikkat edin. Sunucuları, kullanıcı hesaplarını, erişim yetkilerini ve yedekleme altyapısını yapılandıran kişi BT Sistem Sorumlusu, yani teknik uygulayıcıdır; ancak kursiyer sözleşmelerinin, kayıt evraklarının ve eğitim operasyonunun iş sahibi Kayıt Birimi Yöneticisidir. Merkez Müdürü ise bütçe tahsisi, güvenlik politikası onayları ve birimler arası koordinasyondan sorumlu karar yetkilisidir.

Herhangi bir güvenlik kuralında sapma tespit edildiğinde düzeltme adımı, ilgili verinin ve sürecin iş sahibi ile sistemin teknik uygulayıcısının iş birliğiyle yürütülür. Bir sonraki slaytta yer alan vaka paketindeki kısa adlar yalnız tablolar arasında takip kolaylığı sağlamak içindir; fark kayıtlarını yazarken tüm olguları, kuralları ve rolleri tam cümlelerle ifade etmelisiniz.
:::

---

## Vaka verisi: Duru Eğitim Merkezi denetim paketi

Kurumda yapılan son iç gözden geçirmede üç operasyonel alana ilişkin yazılı kurallar ve teknik test bulguları dökülmüştür:

| Kısa ad | Alan ve konu | Kurumun yazılı kuralı (hedef) | Sahadaki mevcut durum (kanıt) |
|---|---|---|---|
| `ayrilan-hesap` | Ayrılan personel hesapları | İşten ayrılan personelin sistem hesapları ayrılış günü kapatılır. | Son 10 ayrılıştan 2'sinin hesabı 7 gün sonra hâlâ açık. Hesaplarla her iş günü uzaktan erişim yolu açık ve eski parolalar geçerlidir. Testte içeriği gizli 80 kursiyer sözleşmesi okunabiliyor; fiilî kötüye kullanım kaydı yok. |
| `geri-yukleme` | Veri yedekleme ve kurtarma | Her gece otomatik tam yedek alınır; ayda bir başarılı geri yükleme testi yapılır. | Son 28 gecenin yedekleri başarılı. Ancak son 6 haftada yapılan 2 geri yükleme denemesi de başarısız olmuş; daha yeni test kaydı yok. |
| `takvim-dosyasi` | Haftalık ders planı dosyası | Ortak alandaki takvim dosyasını yalnız ders planlayıcısı düzenleyebilir. | Yetki testinde 8 personelden 6'sının düzenleme yetkisi olduğu görüldü. Dosyada yalnızca herkese açık ders saatleri var; son ay 3 sehven hata yapılmış, 30 dakikada düzeltilmiş. |

::: {.notes}
İç gözden geçirme sonucunda derlenen bu denetim paketi, uygulama boyunca başvuracağınız tek olgusal veri kaynağıdır. Analiz yaparken tablodaki sayıların, sürelerin ve test gözlemlerinin dışına çıkılmamalı; veride yer almayan varsayımlar ya da kurgusal felaket senaryoları mevcut duruma eklenmemelidir.

Tabloyu incelerken her satırda "Kurumun yazılı kuralı (hedef)" sütunu ile "Sahadaki mevcut durum (kanıt)" sütununu yan yana okumanız gerekir. Mevcut durum hücrelerinde hem süreçlerin çalışan yönlerine hem de testlerde saptanan aksaklıklara ve kayıt sınırlarına ilişkin somut veriler yer alır; izleyen slaytlarda bu ham veriyi altı alanlı standart bir fark kaydına nasıl dönüştüreceğimizi adım adım inceleyeceğiz.
:::

---

## Fark kaydının yapısı: hangi alan neyi sorar?

Bir fark kaydı, kural ile gerçek durum arasındaki boşluğu belgeleyen altı temel alandan oluşur:

1. **Hedef / Dayanak (Ölçüt):** Kurumun politikası, prosedürü ya da standardı neyi zorunlu kılıyor?
2. **Mevcut Olgu / Kanıt:** Sahada yapılan gözlem, inceleme veya teknik test çıktısı tam olarak ne gösteriyor?
3. **Fark (Gap):** Olması gereken ile olan arasındaki somut sapma nedir?
4. **Doğrulanamayan Nokta / İddia:** Mevcut kanıtın sınırları nedir; eldeki veriyle hangi iddialar ileri sürülemez?
5. **Temel Düzeltme İhtiyacı:** Bu sapmayı kapatmak için hangi operasyonel adım atılmalıdır?
6. **İlgili İş Sahibi:** Bu farkı gidermekten hangi kurumsal rol sorumludur?

::: {.notes}
Yapılandırılmış bir fark kaydı, denetim bulgusunu serbest metin hâlinde dağınık yorumlar olmaktan çıkarıp altı net soruya yanıt veren bir yönetim belgesine dönüştürür. Her alanın kendi sorusuna odaklanması, gözlemlenen teknik olgu ile yapılması gereken düzeltme işinin birbirine karışmasını önler.

İlk üç alan doğrudan uyumluluk karşılaştırmasını kurar: Hedef/Dayanak alanında kurumun yazılı kuralı referans alınır, Mevcut Olgu/Kanıt alanında tarihli test veya inceleme çıktısı olduğu gibi aktarılır, Fark (Gap) alanında ise yalnızca bu iki ifade arasındaki somut sapma tanımlanır. Dördüncü alan olan Doğrulanamayan Nokta/İddia ise eldeki kanıtın nerede bittiğini ve mevcut veriyle hangi sonuçların ileri sürülemeyeceğini kayıt altına alarak analizi abartılı yorumlardan korur.

Son iki alan, tespit edilen boşluğu eyleme ve hesap verebilirliğe bağlar: Temel Düzeltme İhtiyacı sapmayı kapatacak operasyonel adımı tarif ederken, İlgili İş Sahibi bu adımı sahiplenecek ve uygulayacak kurumsal rolleri belirler. Bu altı alanı doğru doldurabilmenin en kritik ön koşulu, bir sonraki slaytta ele alacağımız kanıt ile iddia ayrımını net biçimde kurmaktır.
:::

---

## Kanıt ile iddiayı ayırmak

Fark analizi yaparken en sık düşülen yanılgı, kanıtlanmamış ihtimalleri mevcut durumun parçası saymaktır.

*   **Kanıt:** Tarihli test çıktısı, sistem günlüğü, gözlem tutanağı veya yapılandırma dökümüdür. Doğrudan doğrulanabilir olguyu söyler.
*   **İddia:** Kanıttan türetilen ancak eldeki veride açıkça yer almayan yorum veya tahmindir.
*   **Temel ilke:** Kanıt yokluğu, olayın kesinlikle gerçekleştiği ya da gerçekleşmediği anlamına gelmez. Elimizdeki kanıt neyi gösteriyorsa kayıt o sınırda tutulur.

Örnek: "Hesabın açık kalması" bir kanıttır. "Bu hesaptan dosyalar çalındı" demek ise kanıtlanmamış bir iddiadır.

::: {.notes}
Denetim ve fark analizinde temel disiplin, dedektiflik refleksiyle senaryo üretmek yerine eldeki teknik verinin söyledikleriyle sınırlı kalmaktır. Güvenlik incelemesinde doğrulanan her eksiklik ciddiyetle kaydedilir; ancak kanıtlanmamış tahminleri mevcut durum sütununa yazmak, kaydın nesnelliğini bozar ve yönetimi yanlış önceliklere yönlendirir.

Kanıt ile iddiayı ayırt etmek için verinin kaynağına bakılır: kullanıcı dizini karşılaştırması, yetki tablosu dökümü, yedekleme günlüğü veya tarihli bir test sonucu doğrudan doğrulanabilir birer kanıttır. Buna karşılık, bir açıklığın kötü niyetli kişilerce kesinlikle kullanıldığı, verilerin dışarı sızdırıldığı ya da kasıtlı sabotaj yapıldığı yönündeki ifadeler, bunları doğrulayan ayrı bir erişim veya denetim kaydı yoksa birer iddiadır. Kanıt yokluğu olayın imkânsız olduğunu göstermez; ancak eldeki kanıt neyi doğruluyorsa mevcut durum kaydı tam olarak o sınırda tutulur.

Slayttaki örnek üzerinden okursak, işten ayrılan personelin hesabının açık kalması ve teknik testte sözleşmelerin okunabilmesi somut kanıttır. Ancak sistem günlüklerinde yetkisiz erişim veya dosya aktarımı izi yokken "sözleşmeler çalındı" demek kanıt sınırını aşan bir iddiadır ve fark kaydının dördüncü alanında "doğrulanamayan iddia" olarak dışarıda bırakılmalıdır.

Sık yapılan bir diğer hata, gelecekte yaşanabilecek olası zararları (örneğin "sistem çökerse kurum günlerce durur" gibi etki tahminlerini) mevcut farkın yerine yazmaktır. Geleceğe dönük olasılık ve etki değerlendirmesi risk analizinin işidir; şimdi inceleyeceğimiz `ayrilan-hesap` rehber örneğinde yalnızca mevcut kural sapmasını ve kanıt sınırını nasıl kaydettiğimize dikkat edin.
:::

---

## Rehber: `ayrilan-hesap` — hedef ve kanıt

Rehber olayımızı birlikte inceleyelim. İnsan Kaynakları ve BT arasındaki süreç kopukluğu nedeniyle ayrılan iki çalışanın hesabı kapatılmamıştır.

*   **Hedef / Dayanak:**
    > Kurumun Bilgi Güvenliği Politikası: "İşten ayrılan personelin tüm sistem hesapları ayrılış günü mesai bitimine kadar kapatılır."
*   **Mevcut Olgu / Kanıt:**
    > Son 10 personel ayrılış kaydı ile aktif kullanıcı dizini karşılaştırıldığında, ayrılan 2 personelin hesabının 7 gün sonra hâlâ aktif olduğu saptanmıştır. Bu hesaplarla her iş günü dış ağdan uzaktan erişim yolu açıktır ve eski parolalar geçerlidir. BT teknik doğrulama testinde 80 kursiyer sözleşmesinin okunabildiği doğrulanmıştır. Sistem günlüklerinde yetkisiz oturum açma veya dosya transferi kaydı yoktur.

::: {.notes}
Rehber örneğimizin ilk adımında, vaka paketindeki `ayrilan-hesap` verisini fark kaydının ilk iki alanına yerleştiriyoruz. Hedef/Dayanak alanında kurumun yazılı kuralı hiçbir yorum katılmadan, zaman ölçütüyle birlikte ("ayrılış günü mesai bitimine kadar kapatılır") açıkça yazılır.

Mevcut Olgu/Kanıt alanını oluştururken yalnızca "hesaplar kapatılmamış" gibi yuvarlak bir ifade kullanmak denetim açısından yetersizdir. İncelemenin örneklemi (son 10 personel ayrılışı), sapmanın büyüklüğü ve süresi (2 hesabın 7 gün sonra hâlâ aktif olması), erişim koşulu (her iş günü dış ağdan uzaktan erişimin açık ve eski parolaların geçerli olması) ile teknik doğrulama testinin sonucu (80 kursiyer sözleşmesinin okunabilmesi) sayısal ayrıntılarıyla birlikte kaydedilir.

Kanıt metninin son cümlesinde yer alan "Sistem günlüklerinde yetkisiz oturum açma veya dosya transferi kaydı yoktur" bilgisi de aynı derecede önemlidir. Bu gözlem, bir sonraki slaytta hem mevcut farkı doğru tanımlamamıza hem de doğrulanamayan iddiayı kanıt sınırına göre ayırmamıza doğrudan dayanak oluşturur.
:::

---

## Rehber: `ayrilan-hesap` — fark, sınır ve düzeltme

Eldeki hedef ve kanıt karşılaştırıldığında fark kaydının kalan alanları şöyle şekillenir:

*   **Fark (Gap):**
    > İşten ayrılan personelin hesaplarının ayrılış günü kapatılması kuralına uyulmamış; 2 hesap 7 gün boyunca yetkileriyle birlikte aktif kalmıştır.
*   **Doğrulanamayan Nokta / İddia:**
    > 80 kursiyer sözleşmesine yetkisiz erişim sağlandığı veya verilerin dışarı aktarıldığı iddia edilemez (günlüklerde kötüye kullanım izi bulunmamaktadır).
*   **Temel Düzeltme İhtiyacı:**
    > İnsan Kaynakları ayrılış bildirimi ile BT hesap kapatma iş akışı entegre edilmeli; ayrılış günü otomatik bildirim ve hesap dondurma prosedürü işletilmelidir.
*   **İlgili İş Sahibi:**
    > Kayıt Birimi Yöneticisi (süreç ve veri sorumluluğu) ve BT Sistem Sorumlusu (uygulama).

::: {.notes}
Hedef kural ile sahadaki kanıt yan yana konulduğunda Fark (Gap) alanı kendiliğinden ortaya çıkar: kural hesapların ayrılış günü kapatılmasını emrederken, 2 hesap 7 gün boyunca yetkileriyle birlikte aktif kalmıştır. Dikkat ederseniz fark cümlesinde "büyük güvenlik felaketi" ya da "veri ihlali" gibi abartılı ifadeler yer almaz; yalnızca olması gereken ile olan arasındaki ölçülebilir sapma yazılır.

Doğrulanamayan Nokta/İddia alanında ise kanıtın sınırı çizilir: teknik testte 80 kursiyer sözleşmesinin okunabilir olduğu görülmüştür, ancak sistem günlüklerinde kötüye kullanım izi bulunmadığı için bu sözleşmelere yetkisiz erişildiği veya verilerin dışarı sızdırıldığı iddia edilemez. Böylece kayıt, gerçek teknik açıklığı tüm ciddiyetiyle ortaya koyarken kanıtsız suçlama veya panikten uzak kalır.

Temel Düzeltme İhtiyacı ve İlgili İş Sahibi alanları sorunun kök nedenine odaklanır. Açık kalan iki hesabı tek seferlik kapatmak yerine, İnsan Kaynakları ayrılış bildirimi ile BT hesap kapatma iş akışının entegre edilmesi ve ayrılış günü otomatik bildirim/dondurma prosedürünün işletilmesi tanımlanır; sorumluluk ise sözleşme verisinin ve sürecin iş sahibi olan Kayıt Birimi Yöneticisi ile teknik uygulayıcı olan BT Sistem Sorumlusuna birlikte atanır.
:::

---

## Rehber özet tablosu: `ayrilan-hesap` fark kaydı

Tamamlanan rehber fark kaydının toplu görünümü:

| Alan | Değer | Dayanak ve açıklama |
|---|---|---|
| **Hedef / Dayanak** | Ayrılış günü hesap kapatma kuralı | Yazılı kurum politikası |
| **Mevcut Olgu / Kanıt** | 10 ayrılıştan 2 hesap 7 gün sonra açık; her iş günü uzaktan erişim ve eski parolalar geçerli; 80 sözleşme okunabilir | Tarihli erişim testi ve hesap dökümü |
| **Fark (Gap)** | Kapatma süresinde 7 günlük gecikme ve 2 açık hesap | Hedef ile mevcut test verisinin karşılaştırılması |
| **Doğrulanamayan İddia** | Sözleşmelerin çalındığı veya sızdırıldığı | Günlüklerde yetkisiz kullanım kaydı yok |
| **Temel Düzeltme İhtiyacı**| İK ayrılış bildirimi ile BT hesap kapama akışının bağlanması | Sürecin otomatikleştirilmesi gerekliliği |
| **İlgili İş Sahibi** | Kayıt Birimi Yöneticisi / BT Sistem Sorumlusu | Süreç sahibi ve teknik uygulayıcı |

::: {.notes}
Toplu özet tablosu, tek bir bulgunun altı alan boyunca nasıl tutarlı bir zincir oluşturduğunu bir arada görmenizi sağlar. Üçüncü sütundaki "Dayanak ve açıklama" ifadelerine dikkat edin: Değer sütununa yazılan hiçbir bilgi tahmine dayanmaz; her satır doğrudan yazılı politikaya, tarihli test çıktısına, günlük kayıtlarına veya kurumun görev tanımına bağlanır.

Bir sonraki slaytta başlayacak bağımsız çalışmanızda bu tabloyu yapısal bir şablon olarak kullanabilirsiniz. Kendi kayıtlarınızı doldururken her alanın kendi sorusuna sadık kalmasını ve hücrelerdeki ifadelerin buradaki gibi net, ölçülebilir ve kanıta dayalı olmasını hedefleyin.
:::

---

## Bağımsız görev: iki durum için fark kaydı üretimi

Şimdi vaka paketindeki diğer iki operasyonel durum için fark kayıtlarını siz hazırlayacaksınız.

**Çalışılacak durumlar:**
1. `geri-yukleme`: Veri yedekleme ve kurtarma testi durumu.
2. `takvim-dosyasi`: Haftalık ders planı dosyasının erişim yetkileri durumu.

**Yapılacaklar:**
*   Verilen hedef kuralları ve test kanıtlarını dikkatle okuyun.
*   Her iki durum için altı alanlı fark kaydını doldurun.
*   Fark cümlesini olası risk senaryolarından (olasılık, etki, felaket senaryosu) ayrı tutun.
*   Kanıtın söylemediği hiçbir sonucu mevcut duruma eklemeyin.

::: {.notes}
Bağımsız görev aşamasında, vaka paketinde yer alan `geri-yukleme` ve `takvim-dosyasi` durumlarını inceleyerek her biri için altı alanlı fark kaydı üreteceksiniz. Görevin amacı metinleri olduğu gibi kopyalamak değil, verilen hedef kural ile saha kanıtını karşılaştırarak olguları doğru analitik kategorilere yerleştirmektir.

Çalışırken rehber örnekte uyguladığımız sırayı izleyin: önce yazılı kuralın hangi koşulları zorunlu kıldığını ve test kanıtının hangi somut sayıları ortaya koyduğunu belirleyin, ardından yalnızca aradaki uyumluluk sapmasını fark olarak yazın. Olasılık, etki ve iş durması gibi geleceğe dönük risk senaryolarını fark cümlesine karıştırmamaya ve kanıtın doğrulamadığı iddiaları açıkça sınırlandırmaya özen gösterin.
:::

---

## Görev verisi: `geri-yukleme` ve `takvim-dosyasi`

Çalışmanız sırasında başvuracağınız vaka verisi özet tablosu:

| Kısa ad | Hedef kural | Sahadaki mevcut test kanıtı |
|---|---|---|
| `geri-yukleme` | Her gece otomatik tam yedek alınır; **ayda bir başarılı geri yükleme testi** yapılır. | Son 28 gecenin yedekleri başarılıdır. Ancak son 6 haftada yapılan **2 geri yükleme denemesi de başarısız** sonuçlanmıştır; daha yeni bir test kaydı yoktur. |
| `takvim-dosyasi` | Ortak alandaki takvim dosyasını **yalnız ders planlayıcısı** düzenleyebilir. | Yetki testinde 8 personelden **6'sının düzenleme yetkisi** olduğu saptanmıştır. Dosya herkese açık ders saatlerini taşır; son ay 3 sehven hata yapılmış, 30 dakikada düzeltilmiştir. |

::: {.notes}
Çalışmanız boyunca temel alacağınız bu özet tablo, bağımsız görevdeki iki duruma ait hedef kuralları ve sahadaki mevcut test kanıtlarını bir arada sunar. Her iki satırı okurken hedef kuralın içindeki tüm şartlara ve mevcut kanıt hücresindeki olumlu/olumsuz tüm test bulgularına eşit dikkat gösterin.

Tablodaki verileri kendi çalışma tablolarınıza aktarırken verilen sayıları, süreleri ve dosya niteliklerini değiştirmeden kullanmalısınız. Tespit ettiğiniz sapmaların gelecekte yol açabileceği olası zarar veya iş kesintisi değerlendirmeleri bir sonraki dersin (nitel risk analizi) konusu olduğundan, bu aşamada yalnızca mevcut kural-kanıt karşılaştırmasına odaklanın.
:::

---

## Başarı ve değerlendirme ölçütleri

Fark kayıtlarınızı tamamlarken şu dört ölçüte göre değerlendirileceksiniz:

1. **Kanıta Dayalılık:** Hedef ve mevcut durum ifadeleri vaka verisinden doğrudan alınmalı; verilmeyen sayı veya kurgusal olay eklenmemelidir.
2. **Farkın Netliği (Gap):** Fark alanı, neyin eksik olduğunu somut olarak ortaya koymalıdır. Olası felaket senaryoları (risk analizi konuları) farkın yerine yazılmamalıdır.
3. **Kanıt Sınırı ve Doğrulanamayan İddia:** Eldeki kanıtın göstermediği hususlar (örneğin "tüm veriler kayboldu" veya "dosyayı kasten sabote ettiler") açıkça sınırlandırılmalıdır.
4. **Uygulanabilir Düzeltme ve Rol:** Düzeltme ihtiyacı genel temenniler yerine somut sürece işaret etmeli; ilgili iş sahibi kurum rollerine uygun atanmalıdır.

::: {.notes}
Hazırladığınız fark kayıtlarının kalitesi ve denetim geçerliliği bu dört ölçüt üzerinden değerlendirilir. Çalışma tablolarınızı doldururken her bir hücreyi bu ölçütlerle karşılaştırarak kendi yanıtınızı adım adım denetleyebilirsiniz.

Özellikle ikinci ve üçüncü ölçütler, fark kaydı ile risk kaydı arasındaki sınırı korumak açısından belirleyicidir. Fark, "olması gereken kural ile sahadaki mevcut durum arasındaki somut boşluk" iken; risk, "bu boşluk nedeniyle gelecekte ne olabileceği ve kurumu nasıl etkileyeceği" sorusudur. Benzer şekilde, eldeki test verisinin kanıtlamadığı ağır sonuçları mevcut duruma eklememek ve doğrulanamayan iddia sütununda açıkça dışarıda bırakmak gerekir.

Dördüncü ölçüt ise analizin kurumsal karşılığını denetler: düzeltme ihtiyacı alanında "daha dikkatli olunmalı" gibi ölçülemez temenniler yerine hangi teknik veya operasyonel adımın atılacağı belirtilmeli; iş sahibi alanında ise Duru Eğitim Merkezi'nin başında tanıdığımız somut roller doğru eşleştirilmelidir.
:::

---

## Çalışma tablosu: hedef, kanıt ve fark

Aşağıdaki çalışma tablosunu bağımsız iki durum için doldurunuz:

| Kısa ad | Hedef / Dayanak (Kural ne diyor?) | Mevcut Olgu / Kanıt (Test ne gösteriyor?) | Fark (Gap: Aradaki sapma nedir?) |
|---|---|---|---|
| `geri-yukleme` |   |   |   |
| `takvim-dosyasi` |   |   |   |

::: {.notes}
İlk çalışma tablosu, bağımsız görevdeki iki durum için mevcut uyumluluk resmini ortaya koyduğunuz bölümdür. Tabloyu çalışma kâğıdınıza veya belgenize aktararak önce her durumun yazılı hedef kuralını, ardından sahadaki test kanıtlarını eksiksiz biçimde ilgili sütunlara yerleştirin.

Üçüncü sütun olan Fark (Gap) alanını doldururken yalnızca ilk iki sütunu birbiriyle karşılaştırın. Kuralın hangi bölümünün karşılandığını ve hangi bölümünde sapma olduğunu netleştirerek, geleceğe dönük felaket tahminlerine girmeden somut fark cümlesini oluşturun.
:::

---

## Çalışma tablosu: doğrulanamayan iddia ve düzeltme

Fark kayıtlarınızın kalan üç alanını tamamlayınız:

| Kısa ad | Doğrulanamayan İddia (Eldeki veri neyi söylemez?) | Temel Düzeltme İhtiyacı (Hangi adım atılmalı?) | İlgili İş Sahibi (Hangi rol sorumlu?) |
|---|---|---|---|
| `geri-yukleme` |   |   |   |
| `takvim-dosyasi` |   |   |   |

::: {.notes}
İkinci çalışma tablosu, tespit ettiğiniz bulgunun kanıt sınırını çizdiğiniz ve bulguyu kurumsal eyleme bağladığınız bölümdür. Doğrulanamayan İddia sütununda, mevcut test verisinin desteklemediği aşırı yorumların veya varsayımların neler olduğunu açıkça belirterek kaydın sınırını güvenceye alın.

Temel Düzeltme İhtiyacı ve İlgili İş Sahibi sütunlarında ise bir önceki tabloda yazdığınız farkı kapatacak somut operasyonel adımı tanımlayın. Bu adımı yürütecek ve kontrol edecek sorumluları yazarken genel ifadelerden kaçınıp kurumun tanımlı iş sahibi ve teknik uygulayıcı rollerini kullanın.
:::

---

## Öz değerlendirme ve kayıt kontrolü

Ürettiğiniz kayıtları teslim etmeden önce şu kontrol sorularıyla sınayın:

1. `geri-yukleme` kaydınızda 28 gecelik başarılı yedek olgusunu yok sayıp doğrudan "yedek alma işlemi çalışmıyor" dediniz mi? *(Ölçüt: Yedek alma ile geri yükleme testi ayrılmalıdır.)*
2. `takvim-dosyasi` kaydınızda herkese açık takvim için "kursiyer kişisel verileri sızdı" gibi asılsız bir iddiaya yer verdiniz mi? *(Ölçüt: Kanıt sınırına sadık kalınmalıdır.)*
3. Fark sütununa olasılık veya etki puanları yazdınız mı? *(Ölçüt: Fark kaydı ölçüt-kanıt sapmasıdır; risk değerlendirmesi bir sonraki dersin konusudur.)*
4. İlgili iş sahibi olarak genel "Yönetim" yerine kurumun somut rollerini belirttiniz mi?

::: {.notes}
Çalışmanızı tamamladıktan sonra bu dört kontrol sorusu üzerinden yapacağınız öz değerlendirme, denetim kayıtlarında en sık düşülen kavramsal hataları kendi başınıza yakalamanızı sağlar. Her bir soruya verdiğiniz yanıt, yazdığınız hücrelerin kanıt sınırına ve ölçüt-kanıt karşılaştırmasına ne kadar sadık kaldığını gösterir.

Yedek alma işlemi ile geri yükleme testini birbirinden ayırmak, dosyanın taşıdığı veri niteliğini göz ardı etmemek ve sorumluluğu somut kurumsal rollere bağlamak fark analizinin temel disiplini içinde yer alır. Kanıtın doğruladığı olguyu abartmadan ve küçümsemeden kaydetmek, doğru düzeltme adımını seçmenin tek yoludur.

Bu derste ürettiğiniz altı alanlı fark kayıtları, güvenlik yönetimi döngüsünün ilk basamağını oluşturur. Bir sonraki derste bu kayıtları girdi olarak kullanacak; tespit ettiğiniz boşlukları nitel 3×3 risk matrisi üzerinde olasılık, etki ve risk kabul ölçütleriyle değerlendirerek risk analizi aşamasına geçeceğiz.
:::
