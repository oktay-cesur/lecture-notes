---
title: "Pekiştirmeli Öğrenme"
subtitle: BİM444 — Hafta 10
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-04-06
execute:
  echo: false
---

## Pekiştirmeli Öğrenme

---

## Üç Paradigmayı Tamamlıyoruz

| Paradigma | Veri | Öğretmen |
|---|---|---|
| Denetimli | Giriş + etiket | Var — doğru cevabı söyler |
| Denetimsiz | Yalnızca giriş | Yok — yapıyı kendin bul |
| **Pekiştirmeli** | Durum + **ödül** | Yok — sonucu kendin keşfet |

**Bu hafta:** Ajan deneyimden kendi politikasını öğreniyor

::: {.notes}
İki haftadır makine öğrenmesinin iki paradigmasını gördük. Bugün üçüncüsünü tamamlıyoruz.

Denetimli öğrenmede bir öğretmen vardı: doğru cevabı söylüyordu. Denetimsiz öğrenmede öğretmen yoktu ama kimse müdahale de etmiyordu — veri sabit duruyordu, biz yapıyı çıkarıyorduk.

Pekiştirmeli öğrenme ikisinden de farklı. Burada ajan dünyayla etkileşiyor. Eylem alıyor, çevre değişiyor, ödül ya da ceza geliyor. Kimse "şöyle yap" demiyor; ajan sonuçlardan kendi başına öğreniyor. Bu, hem öğretmensiz hem de statik değil — dinamik, etkileşimli bir öğrenme.
:::

---

## Neden Pekiştirmeli Öğrenme?

**Bazı problemlerde etiket üretemezsiniz**

- Satranç: hangi hamle "doğru"? — oyun bitene kadar bilinmiyor
- Robot yürüyüşü: her adımın etiketi ne? — kimse bilmiyor
- Reklam gösterimi: hangi sıra en iyi? — tıklama sonunda anlaşılıyor

**Ortak özellik:** Eylem → sonuç arasında zaman gecikmesi var

::: {.notes}
Bu örneklerin ortak noktasını görmek önemli: doğru hamleyi önceden kimse bilmiyor.

Satranç oynayan birini düşünün. Her hamle için "bu doğru mu?" diye soramazsınız — oyunun sonu kazanmak ya da kaybetmekle belli oluyor. O son sinyal, onlarca hamle öncesine kadar geriye yansıtılmalı.

Robot yürüyüşü daha da zor: bir robotun her adım hareketini etiketlemek ne demek? "Sol ayağı 12 derece kaldır" mı doğru, "14 derece mi"? Kimse bilmiyor. Ama robot düşerse ceza, düşmezse ödül. Binlerce denemeden sonra denge öğreniliyor.

Bu gecikmiş geri bildirim pekiştirmeli öğrenmenin hem temel zorluğu hem de temel özelliği.
:::

---

## Temel Kavramlar

- **Ajan (Agent):** kararı veren
- **Çevre (Environment):** ajanın içinde olduğu dünya
- **Durum (State) $s$:** çevrenin anlık görüntüsü
- **Eylem (Action) $a$:** ajanın yapabileceği hamleler
- **Ödül (Reward) $r$:** eylemin hemen ardından gelen sinyal
- **Politika (Policy) $\pi$:** hangi durumda hangi eylem → öğrenilecek olan bu

::: {.notes}
Bu altı kavram pekiştirmeli öğrenmenin tüm dilini oluşturuyor.

Ajan karar veriyor. Çevre bu kararı alıyor ve yeni bir durum üretiyor. Aynı zamanda ödül — ya da ceza — gönderiyor. Ajan bu ödülü gözlemliyor ve gelecekte daha iyi kararlar vermek için kullanıyor.

Politika ajanın stratejisi: "durum s'deyim, eylem a'yı seçiyorum." Bu bir tablo olabilir, bir formül olabilir, bir sinir ağı olabilir. Önemli olan: politika öğreniliyor — başta kötü, zamanla iyi.

Ödül kısa vadeli bir sinyal. Asıl hedef kısa vadeli ödülü değil, uzun vadeli toplam ödülü maksimize etmek. Bu fark kritik — bazen kısa vadede ödülü bırakmak uzun vadede daha fazlasını getiriyor.

Bu terminoloji size tanıdık gelecek: dersin ilk haftasında "ajan, çevre, algı, eylem" diye konuşmuştuk. Pekiştirmeli öğrenme tam olarak o ajanı öğrenen bir sisteme dönüştürüyor.
:::

---

## Döngü: Ajan ↔ Çevre

$$
s_t \xrightarrow{\text{eylem } a_t} \text{çevre} \xrightarrow{s_{t+1},\ r_t} \text{ajan}
$$

- Ajan $s_t$ durumunu görür → $a_t$ eylemini seçer
- Çevre $s_{t+1}$ yeni durumu ve $r_t$ ödülünü geri gönderir
- Bu döngü tekrarlanır → **deneyim birikir → politika gelişir**

::: {.notes}
Döngüyü adım adım izleyelim.

Ajan mevcut durumu $s_t$ gözlemlediyor. Politikasına göre bir eylem $a_t$ seçiyor. Bu eylem çevreye iletiliyor. Çevre ajanın eylemini alıyor, bir sonraki durumu $s_{t+1}$ hesaplıyor ve $r_t$ ödülünü gönderiyor. Ajan bunu kaydediyor ve politikasını güncelliyor. Döngü başa dönüyor.

Başta politika rastgele ya da çok kötü. Her döngüde biraz iyileşiyor. Binlerce, bazen milyonlarca döngü sonrasında iyi bir politika ortaya çıkıyor.

Bu döngü aslında her canlının öğrenme şekliyle örtüşüyor: eylem, sonuç, güncelle. Bebekler yürümeyi böyle öğreniyor. Oyun oynayan çocuklar stratejiyi böyle geliştiriyor.
:::

---

## Ödül ve Uzun Vadeli Düşünme

**Anlık ödül $r_t$ değil — toplam ödül $G_t$ hedef**

$$
G_t = r_t + \gamma \cdot r_{t+1} + \gamma^2 \cdot r_{t+2} + \cdots
$$

- $\gamma$ (gamma): iskonto faktörü — $0 < \gamma < 1$
- Gelecekteki ödüller bugünden daha az değerli
- Ajan hem **şimdiki** hem **gelecekteki** ödülü dengeler

::: {.notes}
Bu formüldeki $\gamma$ — iskonto faktörü — çok önemli bir kavramı temsil ediyor.

Neden gelecekteki ödülleri iskonto ediyoruz? İki nedeni var. Birincisi, belirsizlik: gelecek kesin değil, şimdiki ödül elle tutulur. İkincisi, pratik hesaplama: sonsuz bir zaman ufkunu çözümlenebilir yapmak için.

$\gamma = 0.9$ dersek: bir adım sonraki ödülün ağırlığı 0.9, iki adım sonraki 0.81, üç adım sonraki 0.73... Giderek azalıyor ama sıfıra düşmüyor.

Bunun pratik sonucu: ajan sadece anlık ödüle bakamaz. Satranç örneğine dönelim — bir taşı yemek anlık ödül verebilir ama üç hamle sonra mat yenilgisine yol açabilir. İyi bir ajan uzun vadeli toplam ödülü maksimize eden eylemleri öğreniyor.

Bu "uzun vadeli düşünme" insanların da çok zorlandığı bir şey. Pekiştirmeli öğrenmede bu matematiksel olarak formüle ediliyor.
:::

---

## Keşif mi, Sömürü mü?

**İkilem:** Bildiklerimi mi kullanayım, yoksa yeni şeyler mi deneyelim?

- **Sömürü (Exploitation):** şimdiye kadar öğrenilmiş en iyi eylemi seç
- **Keşif (Exploration):** bilinmeyen eylemleri dene, belki daha iyisi var

**Denge şart:** hep sömürü → yerel optimumda sıkışırsın · hep keşif → hiç öğrenemezsin

::: {.notes}
Bu ikilem pekiştirmeli öğrenmenin en ilgi çekici kavramlarından biri.

Şöyle düşünün: yeni bir şehirde yemek yiyeceksiniz. Dün gittiğiniz restoran iyiydi. Bugün aynı yere mi dönersiniz (sömürü) yoksa yeni bir yer mi denersiniz (keşif)? Eğer hep aynı yere giderseniz, belki beş dakika ötedeki mükemmel restoranı asla bulamazsınız. Hep yeni yer denerseniz, sürekli kötü deneyimler yaşarsınız.

Pekiştirmeli öğrenmede bu ikilem algoritmik olarak çözülmek zorunda. Yaygın strateji: başlangıçta çok keşfet, zamanla giderek daha fazla sömür. Epsilon-greedy yöntemi bunun basit halidir: yüzde epsilon olasılıkla rastgele eylem, yüzde (1-epsilon) olasılıkla en iyi bilinen eylem. Epsilon zamanla azalıyor.

Bu denge her öğrenen sistemde var — insanlarda da.
:::

---

## Q-Learning: Sezgi

**Q(s, a) = "s durumunda a eylemini seçmenin uzun vadeli değeri"**

- Her (durum, eylem) çifti için bir değer tablo
- Deneyim geldikçe tablo güncellenir
- Öğrenme tamamlanınca: her durumda en yüksek Q değerli eylemi seç

::: {.notes}
Q-learning pekiştirmeli öğrenmenin en temel ve anlaşılır algoritmalarından biri.

Fikir şu: her durum-eylem çifti için bir değer tutuyoruz. "Şu durumda bu eylemi seçersem uzun vadede ne kadar ödül bekleyebilirim?" sorusunun cevabı bu değer.

Başta bu değerler rastgele ya da sıfır. Ajan deneyim yaşadıkça — eylem al, ödül gör, yeni duruma bak — bu değerleri güncelliyoruz. Güncelleme şöyle çalışıyor: "Beklediğimden daha iyi mi çıktı? O zaman bu eylem-durum çiftinin değerini biraz artır. Daha kötü mü? Biraz azalt."

Yeterince deneyim biriktikten sonra tablo iyi tahminlere yaklaşmış oluyor. Artık her durumda tabloya bakıyor ve en yüksek Q değerli eylemi seçiyoruz.

Sorun: durum ve eylem uzayı büyüdükçe tablo tutmak imkânsız hale geliyor. Çözüm: tabloyu bir sinir ağıyla temsil et — bu Deep Q-Network, DQN. AlphaGo ve Atari oyunlarını oynayan sistemler temelde bunu kullanıyor.
:::

---

## Uygulama: Nerede Görüyoruz?

- **Oyun oynama:** AlphaGo, Atari oyunları — insanı geçti
- **Robot kontrolü:** yürüyüş, kavrama, denge
- **Öneri sistemleri:** hangi içeriği göstereyim ki kullanıcı kalsın?
- **Enerji yönetimi:** Google veri merkezi soğutması — %40 enerji tasarrufu
- **Diyalog sistemleri:** konuşmayı nasıl sürdüreyim?

::: {.notes}
Pekiştirmeli öğrenme artık laboratuvardan çıkıp gerçek dünya problemlerine uygulanıyor.

AlphaGo hikâyesi çarpıcı: Go oyununda durum uzayı satranç'tan kat kat büyük — olası pozisyon sayısı evrendeki atomlardan fazla. Kural tabanlı ya da klasik arama algoritmaları ile çözmek imkânsız. DeepMind, pekiştirmeli öğrenmeyi derin öğrenmeyle birleştirerek dünya şampiyonunu yendi. 2016'da tarihe geçti.

Google'ın veri merkezi soğutma sistemi daha az bilinen ama belki daha etkileyici bir örnek. Binlerce sensör verisi, karmaşık termal dinamikler, çok sayıda kontrol kararı. RL sistemi kuruldu, milyonlarca sanal deneyimle eğitildi ve gerçek sistemde %40 enerji tasarrufu sağladı.

Öneri sistemleri biraz farklı: Netflix, YouTube, Spotify. "Hangi içeriği göstereyim ki kullanıcı platformda kalsın?" Bu da bir eylem-ödül döngüsü.
:::

---

## Ajan Bağlantısı

- Dersin ilk haftası: ajan, çevre, algı, eylem
- Pekiştirmeli öğrenme: **bu döngüyü öğrenen bir sisteme dönüştürüyor**
- Politika elle yazılmıyor — **deneyimden öğreniliyor**
- Hedef tabanlı ajan → öğrenen ajan

::: {.notes}
Bu noktada dersin ilk haftasına dönelim. Rasyonel ajan, PEAS, çevre türleri konuşmuştuk. Ajanın performans ölçüsünü maksimize etmek istediğini söylemiştik.

Pekiştirmeli öğrenme bu çerçeveyi tamamlıyor: performans ölçüsü ödüle karşılık geliyor. Ajan artık kuralları biz yazmadan, çevreyle etkileşerek kendi politikasını öğreniyor.

Arama algoritmalarında ajan hareket ederek çözüme ulaşıyordu — ama durum uzayını ve maliyetleri biz vermiştik. Pekiştirmeli öğrenmede ajan bu bilgiyi de kendi keşfediyor.

Bu, yapay zeka tarihinin önemli bir adımı: kural yazan programcıdan, deneyimden öğrenen sisteme. Dersin son haftalarında göreceğimiz derin öğrenme ve büyük dil modelleri de bu öğrenme fikrinin üzerine inşa ediliyor.
:::

---

## Özet

- Pekiştirmeli öğrenme: **ödül sinyalinden politika öğren**
- Temel döngü: durum → eylem → ödül → güncelle → tekrar
- Gecikmiş geri bildirim: anlık değil, uzun vadeli toplam ödül hedef ($G_t$)
- İkilem: keşif ↔ sömürü — denge şart
- Q-learning: (durum, eylem) → değer tablosu → en iyiyi seç
- Ajan bağlantısı: dersin başından beri konuştuğumuz ajan, şimdi öğreniyor

::: {.notes}
Makine öğrenmesinin üç haftasını tamamladık.

Denetimli: öğretmen var, etiket var, karar fonksiyonu öğren. Denetimsiz: öğretmen yok, yapıyı kendin bul. Pekiştirmeli: öğretmen yok ama çevre var, etkileşimden öğren.

Üçü de aynı temel soruya farklı yanıtlar veriyor: "deneyimden nasıl öğrenilir?" Bu sorunun cevabı yapay zekanın merkezinde duruyor.

Önümüzdeki haftalarda derin öğrenmeye geçeceğiz: bu öğrenme yöntemlerini güçlendiren sinir ağı mimarileri. Pekiştirmeli öğrenme ile derin öğrenmeyi birleştirdiğinizde — AlphaGo, ChatGPT — ortaya çıkan sistemleri görmeye başlayacağız.
:::
