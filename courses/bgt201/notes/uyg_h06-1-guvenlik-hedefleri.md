---
title: "Uygulama: güvenlik hedefleri ve sorumluluk tablosu"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-11-10
execute:
  echo: false
---

## Görev: yönetimin istediği iki hedefi nasıl yazarsınız?

NovaPazar bir e-ticaret şirketi. Müşteri iletişim bilgileri Müşteri Hizmetleri'nde, siparişler Operasyon'da, hesaplar ve sistemlerin işleyişi BT'de, personel görev kayıtları İnsan Kaynakları'nda duruyor. Birimler güvenlik işini kendi alışkanlıklarıyla yürütüyor. Üst yönetim bunları hedef, sorumlu ve kanıt temelinde tek düzene bağlamak istiyor.

**Göreviniz:**

1. Verilen gözlemleri okuyun.
2. Hesap sahipliği (`is-sorumlusu`) dışındaki üç ihtiyaçtan (`erisim-incelemesi`, `geri-yukleme`, `erisim-talebi`) hangi **iki** tanesinin bu dönemin hedefi olacağını gerekçelendirin.
3. Her biri için hedefi, sorumluları ve kanıtı tablolara yazın.

Kısa adlar konuları ayırt etmek içindir; tablolarda ihtiyacı, ölçütü ve olguyu yine tam cümleyle yazacaksınız.

Şirket, kişiler ve sayılar kurgusaldır.

::: {.notes}
Bu çalışmada bir güvenlik uzmanının yönetime sunacağı türden bir çıktı hazırlıyorsunuz: hangi ihtiyaç için, hangi ölçütle, kimin sorumluluğunda ve hangi kanıtla. Önce verileri okuyacak, sonra seçimi yapacaksınız. Ayrıcalıklı hesap sahipliği satırı rehber örnek olarak baştan sona çözülmüş hâlde verilir. Siz `erisim-incelemesi`, `geri-yukleme` ve `erisim-talebi` arasından iki ihtiyaç seçeceksiniz; rehberin cümlelerini kendi satırlarınıza taşımayacaksınız.

Tabloyu doldururken her alanın değerinin nereden geldiğini kendinize sorun: veriden mi, ihtiyaçtan mı, yoksa kendi önerinizden mi?
:::

---

## Şirketin gözlemleri

| Kısa ad | Konu | Gözlem |
|---|---|---|
| `is-sorumlusu` | Ayrıcalıklı hesap sahipliği | 25 ayrıcalıklı hesaptan 6'sının belgelenmiş iş sorumlusu yok |
| `erisim-incelemesi` | Erişim incelemeleri | Son üç ayda planlanan 3 erişim incelemesinden yalnız 1'i tamamlanmış |
| `geri-yukleme` | Geri yükleme denemeleri | Son 3 geri yükleme denemesinden 1'i başarısız olmuş |
| `erisim-talebi` | Erişim talebi yöntemleri | BT, İK ve Operasyon erişim taleplerini farklı yöntemlerle iletiyor. Geçen ay gelen 20 talepten 8'i standart talep formu ve yönetici onayıyla, 12'si e-posta ya da mesajla işlenmiş |
| `yonetim-raporu` | Yönetimin isteği | Üst yönetim her güvenlik hedefi için bir iş sahibi ve düzenli rapor istiyor |

**Ayrıcalıklı hesap:** sıradan kullanıcıdan daha geniş yetkisi olan hesap.
**Erişim incelemesi:** hesapların ve yetkilerin hâlâ gerekli ve doğru olup olmadığının belirli aralıklarla gözden geçirilmesi.
**Geri yükleme denemesi:** yedekten alınan verinin sistemi yeniden çalıştırmaya yettiğinin denenmesi.

::: {.notes}
Erişim talebi sayımı BT'nin geçen ayın talep kayıtlarından çıkarılmıştır. Gözlemler birer olgudur; ne yapılacağını söylemezler. Yönetimin isteği (`yonetim-raporu`) ise ayrı bir ihtiyaç değil, bir çerçevedir: seçtiğiniz her hedefin bir iş sahibi olmalı ve dönem sonunda rapor edilebilmelidir.
:::

---

## Sayıları ayrı okuyun

Her sayı farklı bir şeyi sayar. Birinci satır dolu; diğerlerini kendiniz okuyun.

| Kısa ad ve gözlem | Sayı | Neyi sayıyor? | Payda neyi gösteriyor? |
|---|---|---|---|
| `is-sorumlusu`: 25 hesaptan 6'sının iş sorumlusu yok | 19/25 | Belgelenmiş iş sorumlusu olan hesap sayısı | Envanterdeki toplam ayrıcalıklı hesap |
| `erisim-incelemesi`: planlanan 3 incelemeden yalnız 1'i tamamlanmış | 1/3 |   |   |
| `geri-yukleme`: son 3 denemeden 1'i başarısız | Başarılı deneme sayısını siz çıkarın |   |   |
| `erisim-talebi`: 20 talepten 8'i standart form ve yönetici onayıyla, 12'si e-posta ya da mesajla işlenmiş | 8/20 |   |   |

Bu sayılar birbiriyle toplanmaz.

::: {.notes}
Sayıların yan yana durması hepsinin aynı türden olduğu izlenimini verir. Hesap sahipliği bir andaki durumu gösterir. Diğer satırlarda sayının bir iş akışının ya da bir denemenin sonucu olup olmadığını ve paydanın tam olarak neyi saydığını siz belirleyeceksiniz. Geri yükleme satırında sayı doğrudan yazılmamıştır: "3 denemeden 1'i başarısız" ifadesinden başarılı deneme sayısını siz çıkaracaksınız.

Paydayı yanlış okumak hedef değerin anlamını bozar. 3 denemelik bir paydada tek başarısız deneme oranı çok değiştirir ve küçük bir örneklem gelecekteki her deneme için başarı garantisi vermez.
:::

---

## Önceliklendirme için etki ve kaynak verisi

Yönetim, hesap sahipliği işi için 12 BT uzman saati ve 4 yönetici saati ayırdı. Diğer üç ihtiyaçtan seçeceğiniz ikisi için kullanabileceğiniz süre **toplam 18 BT uzman saati** ve **toplam 6 birim yöneticisi saati**.

| Kısa ad | İhtiyaç | İş etkisi | BT saati | Yönetici saati |
|---|---|---|---|---|
| `erisim-incelemesi` | Erişim incelemeleri | Görevi değişen personelin eski yetkilerinin fark edilmeden kalmasına yol açar | 6 | 3 |
| `geri-yukleme` | Geri yükleme denemeleri | Arıza anında sipariş hizmetinin durmasına ve doğrudan satış kaybına yol açar | 10 | 1 |
| `erisim-talebi` | Erişim talebi yöntemleri | Onaysız yetki verilmesine ve geçmiş işlemlerin izlenememesine yol açar | 12 | 3 |

::: {.notes}
Tablodaki saatler her ihtiyacı dönem içinde ele almak için gereken tahmini zamandır. Hiçbir ihtiyaç tek başına açıkça en önemli diye işaretlenmedi; seçimi veriye dayandırmanız gerekiyor. Etkiyi sayıya çevirmeniz istenmiyor: cümleyi okuyup hangi işin kurumun iş amacına daha çok dokunduğunu tartacaksınız.

Kaynak sınırı gerçek bir kısıttır. İki ihtiyacın saatlerinin toplamı bütçeyi aşıyorsa o seçim yapılamaz. Bir ihtiyacı daha dar tanımlayarak sığdırabilirsiniz, ama bunun gerekçesini yazmanız gerekir.
:::

---

## Rehber: hesap sahipliği (`is-sorumlusu`) neden ele alınıyor?

> **İş etkisi:** Tam yetkili bir hesap yanlış kişide kalırsa müşteri iletişim bilgileri görülebilir ve sipariş kayıtları değiştirilebilir; hesabın sorumlusu belli olmadığı için kimse bunun hesabını vermez.
> **Kaynak:** 12 BT uzman saati ve 4 yönetici saati ayrılmıştır; iş 30 günde tamamlanabilir.

Gerekçe iki parçadan oluşur: etki cümlesi ve kaynağın yeterliliği.

::: {.notes}
Bu gerekçede "çok önemli" gibi bir değerlendirme yok; etkinin ne olduğu bir olay olarak anlatılıyor. Sizin yazacağınız gerekçede de seçtiğiniz iki ihtiyacın etkisini olay olarak anlatın.
:::

---

## Rehber: hesap sahipliği hedef ve ölçüt alanları

| Alan | Hesap sahipliği (`is-sorumlusu`) | Değer nereden geldi? |
|---|---|---|
| Korunan faaliyet/varlık | Sipariş ve müşteri yönetim sistemlerindeki 25 ayrıcalıklı hesap | Gözlemin konusu |
| Güvenlik ihtiyacı | Her ayrıcalıklı hesap belgelenmiş bir iş sorumlusuna bağlı olmalı | Gözlemin iş amacına bağlanması |
| Hedef ifadesi | Belgelenmiş iş sorumlusu olan hesap oranı 30 günde 19/25'ten 25/25'e çıkar | İhtiyaç, ölçüt ve değerlerin birleşimi |
| Ölçüt ve payda | Belgelenmiş iş sorumlusu olan hesap / toplam ayrıcalıklı hesap; payda 25 | Gözlemden |
| Başlangıç ölçümü | 19/25 (%76) | Gözlemden, değiştirilmeden |
| Önerilen hedef değer | 25/25 (%100) | **Öneri** |
| Dönem | 30 gün | **Öneri** |

::: {.notes}
Üçüncü sütun her alanın kaynağını gösteriyor; sizin tablonuzda da aynı ayrımı yapmanız bekleniyor. Başlangıç ölçümü verilen sayıdır ve korunur. Hedef değer ve dönem ise önerilerdir: %100 bir standardın gerektirdiği oran değil, bu şirket için seçilmiş bir tercihtir.

Hedef ifadesinin bir eylemle bitmediğine dikkat edin: hesaplar "gözden geçirilir" demiyor, oranın hangi değerden hangisine çıkacağını söylüyor. Kendi satırlarınızda başka ölçütler ve paydalar bulacaksınız; bu satırdaki cümleyi kalıp olarak kopyalamayın.
:::

---

## Rehber: hesap sahipliği faaliyet, kaynak, roller ve kanıt

| Alan | Hesap sahipliği (`is-sorumlusu`) | Değer nereden geldi? |
|---|---|---|
| Faaliyet | 25 hesabın kullanım amacını birim yöneticileriyle doğrulamak ve 6 hesaba iş sorumlusu bağlamak; 25 hesap açık kalır | Hedefe ulaşmak için yapılan iş |
| Kaynak | BT Sistem Yönetimi Uzmanı 12 saat; 4 birim yöneticisi 1'er saat | 12 ve 4 saat veriden; rollere dağılım **öneri** |
| İş sahibi | BT Hizmetlerinden Sorumlu Yönetici | Hedeften sorumlu yönetici |
| Teknik uygulayıcı | BT Sistem Yönetimi Uzmanı | İşi sistemde yapan |
| Değerlendiren | Bilgi Güvenliği Komitesi Temsilcisi | Uygulayıcıdan bağımsız |
| Başlangıç kanıtı | 6 sorumlusuz hesabı işaretleyen ilk hesap envanteri dökümü | Mevcut durumu gösteren kayıt |
| Sonuç kanıtı | Birim yöneticilerince onaylı sahiplik listesi ve iş sorumlusu dolu 25 hesabı gösteren güncel döküm | Beyan ile sistem izi ayrı okunur |

::: {.notes}
İş sahibi raporu dönem sonunda komiteye sunar; yönetimin düzenli rapor isteği böyle karşılanır. Kapatılan hesap bu hedefe 25/25 olarak yazılamaz; kapatma seçilirse bitiş paydası etkin hesap sayısıdır.

Kanıt iki ayrı izden oluşur. Onaylı liste yöneticinin beyanıdır; güncel döküm ise 25 açık hesapta sorumluluk alanının dolu olduğunu gösteren sistem çıktısıdır. Kayıtlar tek başına kesin hüküm değildir; beyan ile sistem izi ayrı okunur.
:::

---

## Görev ve başarı ölçütü

**Görev:** `erisim-incelemesi`, `geri-yukleme` ve `erisim-talebi` arasından iki ihtiyaç seçin; seçim ve hedef tablolarını doldurun.

**Başarı ölçütü:**

1. Seçim gerekçeniz iş etkisini ve kaynak verisini birlikte kullanıyor; seçtiğiniz iki ihtiyacın saatleri 18 BT ve 6 yönetici saatini aşmıyor (aşıyorsa kapsamı daralttığınızı yazdınız).
2. İhtiyaçlar verilen gözlemlerden birine dayanıyor; başlangıç ölçümü gözlemden olduğu gibi alınmış, verilmeyen sayı uydurulmamış.
3. Hedef ifadesi bir durum değişimi söylüyor; eylem cümlesi değil.
4. Ölçüt ve payda yazılı; payda neyi saydığını gösteriyor.
5. Hedef değer ve dönem "öneri" olarak işaretli; kaynak saatleri veri tablosundan alınmış, kapsam daraltma ya da rol bazlı dağılım varsa "öneri" denmiş.
6. İş sahibi, teknik uygulayıcı ve değerlendiren ayrı roller; iş sahibi dönem sonu raporu sunuyor (`yonetim-raporu` isteği).
7. Başlangıç ve sonuç kanıtı ayrı; imza tek başına kanıt sayılmamış.

::: {.notes}
Tabloyu doldurmadan önce bu listeyi okuyun, doldurduktan sonra satır satır sınayın. Hedef değer ve dönem öneri olduğu için hata sayılmaz; ancak gerekçesiz bırakılmaz. Seçimde tek bir doğru yoktur: farklı iki ihtiyaç seçip bunu veriyle savunabilirsiniz. Kaynak sınırını aşan bir seçimi ihtiyacı daha dar tanımlayarak ya da hedef değeri kademeli koyarak yapabilirsiniz; bu durumda dar tanımın nedenini yazın.
:::

---

## Seçim ve gerekçe tablosu

| Seçtiğim ihtiyacın kısa adı | İş etkisi gerekçem | Kaynak gerekçem (saat) | Seçmediğim ihtiyaç (kısa ad) ve nedeni |
|---|---|---|---|
|   |   |   |   |
|   |   |   |   |

Toplam BT saati: ____ / 18 &nbsp;&nbsp; Toplam yönetici saati: ____ / 6

::: {.notes}
Seçmediğiniz ihtiyacın nedenini yazmak karar gerekçesini tamamlar. "Daha önemli olduğu için" yerine etki cümlesine ve saatlere dayanın. Toplam saat satırı kaynak ölçütünü kendi kendinize sınamanız içindir.
:::

---

## Hedef ve ölçüt tablosu

| Seçtiğim ihtiyacın kısa adı | Korunan faaliyet/varlık | Güvenlik ihtiyacı | Hedef ifadesi | Ölçüt ve payda |
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |

::: {.notes}
Hedef ifadesini yazmadan önce ölçütü ve paydayı belirleyin; ifade bu iki parçadan ve başlangıç değerinden oluşur.
:::

---

## Değer ve faaliyet tablosu

| Seçtiğim ihtiyacın kısa adı | Başlangıç ölçümü | Önerilen hedef değer | Dönem | Faaliyet |
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |

::: {.notes}
Başlangıç ölçümünü gözlemden alın. Hedef değer ve dönem kendi önerinizdir; her biri için aklınızda bir gerekçe cümlesi olsun.
:::

---

## Sorumluluk ve kaynak tablosu

| Seçtiğim ihtiyacın kısa adı | Kaynak (veri tablosundan; daraltma ya da rol dağılımı öneri) | İş sahibi | Teknik uygulayıcı | Değerlendiren |
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |

::: {.notes}
Roller birim ya da unvan olarak yazılır. Dört birimi göz önünde tutun: iş sahibi hedefin ilgili olduğu süreçten sorumlu yönetici olmalı; değerlendiren uygulayıcıdan bağımsız olmalı.
:::

---

## Kanıt tablosu

| Seçtiğim ihtiyacın kısa adı | Başlangıç kanıtı (hangi kayıt, hangi olguyu gösterir?) | Sonuç kanıtı (hangi kayıt, hangi olguyu gösterir?) |
|---|---|---|
|   |   |   |
|   |   |   |

::: {.notes}
Kanıt yazarken kaydın adını ve gösterdiği olguyu birlikte yazın. Bir imza ya da onay varsa neyi beyan ettiğini ve sistemde işlemin yapıldığını gösteren ayrı bir kayıt gerekip gerekmediğini düşünün.
:::

---

## Öz değerlendirme

1. Başarı ölçütlerini satır satır sınayın; özellikle 1, 3 ve 7'ye bakın.
2. Seçmediğiniz ihtiyaç için gerekçeniz **etki** ve **kaynak** verisine dayanıyor mu?

::: {.notes}
Bir ölçüt karşılanmıyorsa ilgili satırı düzeltin. Üçüncü ölçütte hedef cümlenizin sonunda bir eylem fiili ("incelenir", "yapılır") varsa ölçütün ve hedef değerin cümlede görünüp görünmediğine bakın.
:::
