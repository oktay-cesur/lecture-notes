---
title: "Genetik Algoritmalar"
subtitle: BİM444 — Hafta 14
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-05-04
execute:
  echo: false
---

## Genetik Algoritmalar

---

## Evrimden İlham

- 3.5 milyar yıllık bir optimizasyon süreci: doğal seçilim
- İyi uyumlananlar hayatta kalır ve ürer
- Nesiller içinde popülasyon giderek daha iyi uyumlanır

**Soru:** Bu süreci bir bilgisayar programına çevirsek?

::: {.notes}
Bu dersin son haftasında tamamen farklı bir ilham kaynağından gelen bir yöntemi göreceğiz: evrim.

Doğal seçilim şaşırtıcı derecede iyi bir optimizasyon algoritması. Milyarlarca yıl boyunca karmaşık çevre koşullarına uyum sağlayan organizmalar üretti. Gözler, kanatlar, sinir sistemleri — bunların hepsi "tasarlanmadı", evrimsel baskıyla ortaya çıktı.

Genetik algoritmalar bu süreci matematiksel olarak taklit ediyor: bir aday çözümler popülasyonu var, iyi olanlar "üreyor", zayıf olanlar eleniyor, nesiller içinde popülasyon giderek daha iyi çözümlere yaklaşıyor.
:::

---

## Temel Kavramlar

- **Kromozom / Birey:** bir aday çözüm
- **Popülasyon:** aday çözümler kümesi
- **Uygunluk (Fitness):** bir çözümün ne kadar iyi olduğu
- **Seçilim:** uygun bireyleri seç
- **Çaprazlama:** iki ebeveynden yeni birey üret
- **Mutasyon:** rastgele küçük değişiklik

::: {.notes}
Terminoloji biyolojiden geliyor ama matematiksel karşılıkları net.

Bir "birey" veya "kromozom" aday çözümü temsil ediyor. Bu bir bit dizisi olabilir, bir sayı listesi, bir permütasyon. Çözdüğünüz probleme göre temsil değişiyor.

Popülasyon bu bireylerin kümesi. Bir nesilde tipik olarak onlarca ila yüzlerce birey var.

Uygunluk fonksiyonu kritik: bu, problemin hedefini sayısal olarak ifade etmenin yolu. "Bu çözüm ne kadar iyi?" sorusuna sayısal cevap. Tasarım kararlarının en önemlisi bu — uygunluk yanlış tanımlanırsa algoritma yanlış yöne evrimleşir.

Seçilim, çaprazlama, mutasyon evrimsel operatörler. Bunların nasıl uygulandığı algoritmanın davranışını şekillendiriyor.
:::

---

## Algoritma Döngüsü

1. Rastgele bir başlangıç popülasyonu oluştur
2. Her bireyin uygunluğunu hesapla
3. Uygun bireyleri seç (ebeveyn)
4. Çaprazlama ile yeni bireyler üret
5. Mutasyon uygula
6. Yeni popülasyon oluştu → 2'ye dön
7. Durma koşulu sağlanınca en iyi bireyi döndür

::: {.notes}
Döngüyü somut bir örnekle takip edelim. Diyelim ki bir gezgin satıcı problemi çözüyoruz: N şehri en kısa yolla ziyaret et.

Başlangıç: 100 rastgele rota oluştur. Her biri şehirlerin farklı bir sıralaması.

Uygunluk: her rotanın toplam mesafesini hesapla. Kısa mesafe = yüksek uygunluk.

Seçilim: daha kısa rotaları tercih et. Ama en iyi birkaç tanesini değil — uygunlukla orantılı olasılıkla seç. Kötü rotaların da küçük şansı var: çeşitlilik korunuyor.

Çaprazlama: iki rotadan yeni rota üret. Birinin ilk yarısını al, ikincinin kalan şehirlerini sırayla ekle.

Mutasyon: küçük olasılıkla rastgele iki şehri yer değiştir. Bu yerel optimuma takılmayı önlüyor.

Nesil nesil bu süreç tekrarlanıyor ve popülasyon giderek daha iyi rotalara yaklaşıyor.
:::

---

## Çaprazlama ve Mutasyon

**Çaprazlama:** bilgiyi birleştir

```
Ebeveyn 1: [A B C | D E F G]
Ebeveyn 2: [G E A | B F C D]
Çocuk:     [A B C | E G D F]
```

**Mutasyon:** çeşitliliği koru

```
Öncesi: [A B C D E F G]
Sonrası: [A B F D E C G]  ← C ve F yer değiştirdi
```

- Çaprazlama: iyi özellikleri miras al
- Mutasyon: keşfedilmemiş bölgelere ulaş

::: {.notes}
Çaprazlama ve mutasyon birbirini tamamlıyor.

Çaprazlama "sömürü" yapıyor: iyi bilinen çözümlerin özelliklerini birleştirerek daha iyi bir şey üretmeye çalışıyor. Ebeveyn 1'in başı, Ebeveyn 2'nin sonu — belki bu kombinasyon her ikisinden de iyi.

Mutasyon "keşif" yapıyor: rastgele küçük değişiklikler popülasyonun çeşitliliğini koruyor. Çaprazlama tek başına kalıpsa tüm popülasyon aynı yerel optimuma yakınsayabilir. Mutasyon bu yerel optimumdan çıkma şansı veriyor.

Pekiştirmeli öğrenmede keşif-sömürü ikilimini konuşmuştuk. Genetik algoritmalarda aynı gerilim var: çaprazlama sömürü, mutasyon keşif. İkisi dengede olmalı.

Mutasyon oranı genellikle küçük: yüzde birden yüzde beşe kadar. Çok yüksek olursa algoritma rastgele aramayla farksızlaşır. Çok düşük olursa çeşitlilik yok olur.
:::

---

## Yerel Arama ile Karşılaştırma

**Hatırlayın:** T05'te yerel arama algoritmalarını gördük

| | Yerel Arama | Genetik Algoritma |
|---|---|---|
| Aday sayısı | Tek çözüm | Popülasyon |
| Hareket | Komşuya git | Çaprazla + mutasyona uğrat |
| Yerel optimum | Takılır | Daha az takılır |
| Paralellik | Tek | Doğal paralel |

::: {.notes}
Bu karşılaştırma dersin bütününe bağlamak için güzel bir fırsat.

Tepe tırmanma ve simüle tavlama gibi yerel arama algoritmaları tek bir aday çözümle çalışıyordu. Her adımda bir çözüm var, komşulara bakılıyor, en iyisi seçiliyordu.

Genetik algoritmalar bu fikri farklı boyuta taşıyor: tek aday yerine popülasyon. Bu iki avantaj sağlıyor.

Birincisi, yerel optimuma takılma riski azalıyor. Tek bir aday yerel optimuma düşerse sıkışabilir. Ama 100 farklı adayınız varsa, birkaçı farklı bölgeleri keşfederken diğerleri umut verici noktalara yakınsar.

İkincisi, paralellik. Her bireyin uygunluğu bağımsız hesaplanabilir. Bu modern çok çekirdekli işlemcilerde ve GPU'larda büyük avantaj.
:::

---

## Kullanım Alanları

- **Optimizasyon:** çizelgeleme, rota planlama, lojistik
- **Mühendislik tasarımı:** anten şekli, yapı tasarımı, devre optimizasyonu
- **Makine öğrenmesi:** hiperparametre optimizasyonu, mimari arama
- **Oyun YZ:** oyun stratejisi ve ajan davranışı evrimi
- **Biyoinformatik:** protein katlanması, gen dizisi hizalama

::: {.notes}
Genetik algoritmalar çok geniş bir uygulama yelpazesine sahip. Ortak nokta şu: arama uzayı büyük ve gradient tabanlı yöntemler çalışmıyor.

NASA'nın Evrimsel Anten projesi çarpıcı bir örnek. 2006'da bir uydu için anten tasarımı yapılması gerekiyordu. Mühendisler klasik yöntemlerle çalıştı — sonuçlar yeterliydi ama harika değildi. Sonra genetik algoritmaya bırakıldı. Yüzlerce nesil evrimleşen tasarımlar arasından seçilen anten, insan tasarımından önemli ölçüde üstün performans gösterdi. Şekli garip, doğrusal olmayan — ama çalışıyordu.

Hiperparametre optimizasyonu: derin öğrenme modelinin kaç katmanı olacak, öğrenme hızı ne, dropout oranı ne? Bu kararlar büyük etki yaratıyor ama gradient hesaplanamıyor. Genetik algoritma bu uzayı keşfediyor.
:::

---

## Sınırlılıklar

- **Yavaş yakınsama:** çok nesil gerekebilir
- **Uygunluk fonksiyonu tasarımı:** yanlış tasarım yanlış evrime yol açar
- **Erken yakınsama:** çeşitlilik yok olursa popülasyon aynı noktaya sıkışır
- **Optimallık garantisi yok:** en iyiyi bulacağı garanti değil

::: {.notes}
Her güçlü araç gibi genetik algoritmalar da sınırsız değil.

En kritik sorun uygunluk fonksiyonu tasarımı. "Proxy problem" denen bir tehlike var: uygunluk fonksiyonunuz gerçek hedefinizi tam yansıtmıyorsa, algoritma uygunluğu optimize ediyor ama gerçek hedefinizi değil. Robotik uygulamalarda bu bazen komik sonuçlar veriyor: robot mesafeyi yürüyerek değil, takla atarak katedebiliyor — çünkü uygunluk fonksiyonu sadece mesafeye bakıyor.

Erken yakınsama: mutasyon yeterli çeşitliliği koruyamazsa tüm popülasyon aynı çözüme yakınsar ve arama durur. Elitizm (en iyileri koru) ve çeşitlilik mekanizmaları buna karşı önlem.

Optimallık garantisi yok: genetik algoritma iyi çözümler buluyor ama en iyi çözümü kesin bulacağı söylenemez. Kabul edilebilir bir sürede yeterince iyi çözüm arayan bir yaklaşım.
:::

---

## Dersin Panoraması

| Hafta | Konu | Yaklaşım |
|---|---|---|
| 1-2 | YZ temelleri, ajanlar | Çerçeve |
| 3-5 | Arama algoritmaları | Kural tabanlı |
| 6-10 | Makine öğrenmesi | Veriden öğrenme |
| 11 | Derin öğrenme | Hiyerarşik öğrenme |
| 12 | Büyük dil modelleri | Ölçekli öğrenme |
| 13 | Bulanık mantık | Bilgi tabanlı |
| 14 | Genetik algoritmalar | Evrimsel arama |

::: {.notes}
Son hafta olması vesile olsun: bir panorama çekelim.

Dersin ilk iki haftasında çerçeveyi kurduk: ajan nedir, çevre nedir, rasyonellik ne demek. Bu çerçeve tüm dönem boyunca geçerliydi.

Sonraki üç hafta kural tabanlı arama: ajan kuralları biz verdik, o arama yaptı. BFS, DFS, A*, minimax. Hepsi "problem iyi tanımlanmışsa nasıl çözülür" sorusuna cevap.

Makine öğrenmesi haftaları paradigmayı değiştirdi: kuralı biz yazmıyoruz, veriden öğreniyoruz. Denetimli, denetimsiz, pekiştirmeli.

Derin öğrenme ve LLM'ler bu öğrenmeyi ölçeklendirdi: milyarlarca parametre, trilyonlarca kelime.

Son iki hafta farklı bir perspektif: bulanık mantık insan bilgisini kodluyor, genetik algoritmalar evrimi taklit ediyor. Her ikisi de "veriden öğrenme" paradigmasının dışında — ama hâlâ güçlü araçlar.

Yapay zekanın zenginliği buradan geliyor: tek bir yaklaşım yok. Problem ne, veri var mı, yorumlanabilirlik önemli mi, hesaplama bütçesi ne — bunlara göre araç seçiliyor.
:::

---

## Özet

- Genetik algoritma: evrimsel süreçten ilham alan arama yöntemi
- Temel döngü: popülasyon → uygunluk → seçilim → çaprazlama → mutasyon
- Çaprazlama: bilgiyi birleştir (sömürü) · Mutasyon: çeşitliliği koru (keşif)
- Yerel aramadan farkı: tek çözüm yerine popülasyon
- Kullanım: gradient hesaplanamayan büyük arama uzayları
- Sınırlılık: uygunluk tasarımı kritik, optimallık garantisi yok

::: {.notes}
Dersi tamamladık.

Genetik algoritmalar, bulanık mantık, makine öğrenmesi, derin öğrenme, arama algoritmaları — bunların hepsi yapay zekanın farklı köşeleri. Hiçbiri diğerini tamamen gereksiz kılmıyor. Her biri farklı problem türleri için farklı güçler sunuyor.

Bir yapay zeka uygulayıcısı olarak en değerli beceri araç kutusu genişliği: hangi probleme hangi yaklaşımın uygun olduğunu bilerek seçebilmek.

Bu derste o araç kutusunu birlikte doldurduk.
:::
