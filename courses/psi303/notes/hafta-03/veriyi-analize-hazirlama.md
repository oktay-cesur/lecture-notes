---
title: "Veriyi Analize Hazırlamak"
subtitle: "PSİ 303 — Davranışsal İstatistik için Yazılım Uygulamaları"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-19
description: Eksik, geçerli sıfır, olanaksız ve alışılmadık değerlerin ayrımı; kaynağa dönerek düzeltme ve ham veriyi koruma; ters puanlama; toplam ve ortalama ölçek puanı; gözlem seçme ve dosya birleştirme.
execute:
  echo: false
---

## Analize başlamadan önce

Yeni bir anketin ilk beş satırı (kaygı maddeleri 1–7 arası puanlanıyor):

| kod | yas | sigara (adet/gün) | calisma (haftalık ders çalışma, saat) | kaygi_3 |
|---|---:|---:|---:|---:|
| K01 | 20 | 0 | 12 | 5 |
| K02 | 250 | 10 | 8 | 4 |
| K03 | 21 | 5 | | 6 |
| K04 | 45 | 0 | 60 | 8 |
| K05 | 19 | 2 | 6 | 3 |

> Bu tablodaki hangi değerlere güvenebiliriz?

::: {.notes}
Bu beş satırda en az dört farklı türden "dikkat çeken" değer var ve her biri farklı bir karar gerektiriyor. 250 yaşında bir katılımcı olamaz. K03'ün çalışma saati boş. K04 hem 45 yaşında hem haftada 60 saat çalışıyor; bir lisans öğrencisi için alışılmadık. 1–7 arası puanlanan bir maddede 8 değeri ise ölçeğin dışında. Sigara sütunundaki 0'lar da ayrı bir soru sorduruyor: bu kişiler gerçekten sigara içmiyor mu, yoksa soruyu boş mu bıraktılar?

Ham veri, toplandığı biçimiyle neredeyse hiçbir zaman analize hazır değildir. İlk iş bu değerleri ayırt etmek, ikincisi ölçek puanlarını doğru hesaplamak ve veriyi analize uygun biçimde yönetmektir. İkisinde de ortak ilke şu: verideki her değişiklik bir gerekçeye dayanmalı ve geri izlenebilir olmalı.
:::

---

## Dört farklı durum

| Durum | Örnek | Ne demek? |
|---|---|---|
| **Eksik** | K03'ün çalışma saati boş | Bilgi yok |
| **Geçerli sıfır** | K01: 0 sigara | Bilgi var, değeri sıfır |
| **Olanaksız** | 250 yaş; 1–7 maddede 8 | Bu değer gerçek olamaz |
| **Alışılmadık** | 45 yaş; haftada 60 saat | Nadir, ama mümkün |

::: {.notes}
Bir 0'ın geçerli sıfır mı, cevapsızlık mı olduğuna kaynağa ve sözlüğe bakarak karar veririz (K01'in formunda "içmiyorum" yazıyor). Bu dört durum yüzeyde benzer görünebilir, ama anlamları ve yapılacak işler farklıdır.

Eksik değer, bilginin olmadığını söyler. Geçerli sıfır ise bilginin var olduğunu ve değerinin sıfır olduğunu söyler; sigara içmeyen birinin cevabı eksik değil, sıfırdır. Bu ikisini karıştırmak, örneğin cevap vermeyenleri sıfır saymak, ortalamaları sistematik olarak aşağı çeker.

Olanaksız değer, ölçümün ya da girişin bir yerinde hata yapıldığını gösterir. Alışılmadık değer ise nadir ama mümkündür; ayrıntısına birazdan döneceğiz.
:::

---

## Olanaksız değerleri bulmak

Her değişken için en küçük ve en büyük değere bakmak:

| Değişken | Olması gereken | Veride min | Veride max |
|---|---|---:|---:|
| yas | 17–60 | 19 | **250** |
| kaygi_3 | 1–7 | 3 | **8** |
| calisma | 0–80 | 6 | 60 |

::: {.callout-note title="Görsel yer tutucu: Aralık kontrolü çıktısı"}
**Tür:** ekran görüntüsü · **Gösterdiği:** jamovi'de Descriptives çıktısı; değişkenlerin minimum ve maksimum değerleri, aralık dışında kalan değerler vurgulu · **Öğrencinin görmesi gereken:** Olanaksız değeri bulmak için satır satır bakmak gerekmez; en küçük ve en büyük değer çoğu zaman yeter.
:::

::: {.notes}
Yüzlerce satırlık bir dosyada olanaksız değerleri gözle aramak hem zahmetli hem güvenilmezdir. Basit ve etkili bir yol, her değişkenin en küçük ve en büyük değerini veri sözlüğündeki izin verilen aralıkla karşılaştırmaktır. Yaşın en büyük değeri 250 çıkıyorsa, 1–7 arası bir maddenin en büyük değeri 8 çıkıyorsa bir sorun olduğu hemen anlaşılır.

Kontrol, tanımlanmamış bir eksik kodu da yakalar: sözlükte eksik kodu 99 olan yaş sütununda en büyük değer 99 çıkıyorsa kod eksik olarak tanımlanmamıştır. Aralık dışındaki değer inceleme adayıdır, kendiliğinden hatalı değildir: 62 yaşı 17–60'ın dışındadır ama kaynağa bakmadan olanaksız denemez. Tersine, formda 52 olan yaşın 25 girilmesi aralık içinde kalır ve kontrolden geçer.

Kategorik değişkenlerde aynı kontrol frekans tablosuyla (her kategoride kaç kişi olduğunu gösteren sayım) yapılır: üç kategorisi olan bir değişkende dördüncü bir kod görünüyorsa ya giriş hatası ya da tanımlanmamış bir eksik kod vardır; sözlüğe bakılır. Bu kontroller veri girişi biter bitmez, analizden önce yapılmalıdır.
:::

---

## Olanaksız bir değerle ne yapılır?

1. **Kaynağa dön:** Kâğıt form, çevrimiçi kayıt, ölçüm cihazı.
2. **Düzeltilebiliyorsa düzelt:** 250 → formda "25" yazıyor.
3. **Düzeltilemiyorsa eksik yap:** Gerçek değer bilinmiyor.
4. **Kaydet:** Ne değişti, neden değişti?

> Yapılmayacak olan: "Herhalde 25'tir" deyip tahminle düzeltmek.

::: {.notes}
Olanaksız bir değerin çoğu zaman basit bir açıklaması vardır: fazladan basılmış bir tuş, kaymış bir sütun, yanlış okunmuş bir el yazısı. Bu yüzden ilk iş kaynağa dönmektir. Formda gerçekten 25 yazıyorsa düzeltme kolaydır ve gerekçesi bellidir.

Kaynağa dönmek mümkün değilse ya da kaynakta da aynı hata varsa, gerçek değeri bilmiyoruz demektir. Bu durumda değeri tahmin etmek yerine eksik olarak işaretlemek gerekir. "Herhalde 25'tir" tahmini doğru olabilir; ama yanlışsa veriye hiç var olmamış bir bilgi eklemiş oluruz ve bunu sonradan kimse fark edemez.

Hangi düzeltme yapılırsa yapılsın, ayrı bir kayıtta not edilmelidir: hangi satır, hangi değişken, eski değer, yeni değer, gerekçe. Bu kayıt, analizin başka biri tarafından tekrarlanabilmesini sağlar.
:::

---

## Alışılmadık değer tek başına hata sayılmaz

Haftalık çalışma saati, 30 öğrenci:

- 29 öğrenci 2 ile 20 saat arasında
- 1 öğrenci **60 saat**

60 saati silmek mi, korumak mı?

::: {.notes}
Haftada 60 saat çalışmak alışılmadıktır, ama olanaksız değildir; sınav dönemindeki bir öğrenci için gerçek olabilir. Sözlükteki izin verilen aralığın (0–80) içindedir ve formda da 60 yazıyorsa, bu değer gerçek bir gözlemdir.

Böyle bir değeri yalnızca "diğerlerinden çok farklı" olduğu için silmek, veriyi gerçekte olduğundan daha düzenli göstermek demektir; sonuçları bozar ve veriyi istenen sonuca göre şekillendirmeye kapı açar. Alışılmadık değerlerin analizi nasıl etkilediğini merkezî eğilim ve dağılım notlarında göreceğiz; bazen ortalama yerine medyan kullanmak gibi çözümler vardır. Ama ilk karar şudur: değer olanaksız değilse ve kayıtlı bir dışlama gerekçesi yoksa veride kalır.
:::

---

## Ham veriyi korumak

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 250" role="img" aria-label="Ham veriyi koruma şeması: Ham veri hiç değiştirilmez; yapılan tüm düzeltmeler satır, eski değer, yeni değer ve gerekçe bilgileriyle değişiklik kaydına işlenir ve analizde kullanılan çalışma dosyasına aktarılır. Her adım geri izlenebilir kalır." style="width:100%;max-height:360px">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="currentColor"/>
    </marker>
  </defs>
  <!-- Kutu 1: Ham Veri -->
  <g>
    <rect x="30" y="25" width="230" height="170" rx="8" fill="var(--anim-blue)" fill-opacity="0.06" stroke="var(--anim-blue)" stroke-width="2"/>
    <text x="145" y="54" text-anchor="middle" font-size="16" font-weight="bold" fill="var(--anim-blue)">Ham Veri</text>
    <text x="145" y="74" text-anchor="middle" font-size="12" fill="currentColor">(Hiç değiştirilmez)</text>
    <line x1="45" y1="86" x2="245" y2="86" stroke="var(--anim-blue)" stroke-width="1" stroke-dasharray="3 3"/>
    <text x="45" y="110" font-size="12" fill="currentColor">• Toplandığı ilk hâliyle saklanır</text>
    <text x="45" y="132" font-size="12" fill="currentColor">• Üzerine asla doğrudan yazılmaz</text>
    <text x="45" y="154" font-size="12" fill="currentColor">• Orijinal referans ve kanıttır</text>
    <text x="45" y="178" font-size="11" fill="currentColor" opacity="0.8">Örn: anket_ham.csv (salt okunur)</text>
  </g>
  <!-- Ok 1: Ham Veri -> Değişiklik Kaydı -->
  <g>
    <text x="282" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="currentColor">Kayıt</text>
    <line x1="262" y1="98" x2="301" y2="98" stroke="currentColor" stroke-width="2.5" marker-end="url(#arrow)"/>
  </g>
  <!-- Kutu 2: Değişiklik Kaydı -->
  <g>
    <rect x="305" y="25" width="230" height="170" rx="8" fill="var(--anim-amber)" fill-opacity="0.06" stroke="var(--anim-amber)" stroke-width="2"/>
    <text x="420" y="54" text-anchor="middle" font-size="16" font-weight="bold" fill="var(--anim-amber)">Değişiklik Kaydı</text>
    <text x="420" y="74" text-anchor="middle" font-size="12" fill="currentColor">(İşlem ve düzeltme günlüğü)</text>
    <line x1="320" y1="86" x2="520" y2="86" stroke="var(--anim-amber)" stroke-width="1" stroke-dasharray="3 3"/>
    <text x="320" y="110" font-size="12" fill="currentColor">• Satır ve değişken: K02, yas</text>
    <text x="320" y="132" font-size="12" fill="currentColor">• Eski → Yeni: 250 → 25</text>
    <text x="320" y="154" font-size="12" fill="currentColor">• Gerekçe: Kaynağa dönüldü, formda "25" yazıyor</text>
    <text x="320" y="178" font-size="11" fill="currentColor" opacity="0.8">Her düzeltme geri izlenebilir</text>
  </g>
  <!-- Ok 2: Değişiklik Kaydı -> Çalışma Dosyası -->
  <g>
    <text x="557" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="currentColor">Aktarım</text>
    <line x1="537" y1="98" x2="576" y2="98" stroke="currentColor" stroke-width="2.5" marker-end="url(#arrow)"/>
  </g>
  <!-- Kutu 3: Çalışma Dosyası -->
  <g>
    <rect x="580" y="25" width="230" height="170" rx="8" fill="var(--anim-green)" fill-opacity="0.06" stroke="var(--anim-green)" stroke-width="2"/>
    <text x="695" y="54" text-anchor="middle" font-size="16" font-weight="bold" fill="var(--anim-green)">Çalışma Dosyası</text>
    <text x="695" y="74" text-anchor="middle" font-size="12" fill="currentColor">(Analiz bununla yapılır)</text>
    <line x1="595" y1="86" x2="795" y2="86" stroke="var(--anim-green)" stroke-width="1" stroke-dasharray="3 3"/>
    <text x="595" y="110" font-size="12" fill="currentColor">• Düzeltilmiş geçerli değerler</text>
    <text x="595" y="132" font-size="12" fill="currentColor">• Yeni değişkenler (ters, toplam)</text>
    <text x="595" y="154" font-size="12" fill="currentColor">• Analize giren güvenli kopya</text>
    <text x="595" y="178" font-size="11" fill="currentColor" opacity="0.8">Örn: anket_calisma.omv / .sav</text>
  </g>
  <!-- Alt Özet Bant -->
  <g>
    <rect x="30" y="207" width="780" height="30" rx="6" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
    <text x="420" y="227" text-anchor="middle" font-size="12" fill="currentColor">Temel İlke: Ham veriye asla doğrudan yazılmaz; tüm düzeltmeler kayıt üzerinden çalışma dosyasına yansıtılır.</text>
  </g>
</svg>

- **Ham veri:** Toplandığı gibi; asla üzerine yazılmaz.
- **Çalışma dosyası:** Düzeltmeler ve yeni değişkenler burada.
- **Değişiklik kaydı:** Neyin, neden değiştiği.

::: {.notes}
Veri hazırlama sırasında yapılan en riskli şey, ham dosyanın üzerine kaydetmektir. Bir düzeltmenin yanlış olduğu sonradan anlaşılırsa geri dönülecek yer kalmaz. Bu yüzden ham veri ayrı bir dosyada, ilk hâliyle saklanır; bütün düzeltmeler ve hesaplanan yeni değişkenler bir çalışma kopyasında yapılır.

Aynı ilke dosyanın içinde de geçerlidir: bir değişkeni dönüştürürken (örneğin ters puanlarken) orijinal sütunun üzerine yazmak yerine yeni bir sütun oluşturmak, hem hatayı fark etmeyi hem de geri dönmeyi kolaylaştırır.
:::

---

## Ölçek puanı: maddelerden tek bir sayıya

Başka bir araştırmadaki dört maddelik yalnızlık ölçeği (1 = Hiç katılmıyorum … 5 = Tamamen katılıyorum):

1. Kendimi yalnız hissediyorum.
2. Zor bir anımda yanımda olacak insanlar var.
3. Kendimi çevremden kopuk hissediyorum.
4. İstediğimde konuşabileceğim birilerine ulaşabilirim.

2 ve 4, yalnızlığın karşı yönünü anlatan **ters maddeler**dir.

> Dört cevabı toplayıp "yalnızlık puanı" diyebilir miyiz?



::: {.notes}
Psikolojik ölçeklerde bir kavram, örneğin yalnızlık, tek bir soruyla değil birkaç maddeyle ölçülür ve maddelerin puanları birleştirilerek tek bir ölçek puanı elde edilir. İlk akla gelen, cevapları doğrudan toplamaktır.

Maddelere dikkatle bakın. Birinci ve üçüncü maddeye "tamamen katılıyorum" diyen biri yalnızdır. İkinci ve dördüncü maddeye "tamamen katılıyorum" diyen biri ise yalnız değildir; tam tersine, destek aldığını söylüyor. Bu iki türden maddeyi olduğu gibi toplamak, birbirinin tersini söyleyen cevapları aynı yöne eklemek olur.

Ölçekte neden ters maddeler var? Soruyu okumadan hep "5" işaretleyen biri, bütün maddeler aynı yönde olsaydı en yalnız kişi gibi görünebilirdi; bu **katılma eğilimi** ile yalnızlık ayrılmazdı. Bazı katılımcılar maddelerin içeriğinden bağımsız olarak hep katılma ya da hep katılmama eğilimi gösterir; ya da formu dikkatsizce, aynı sütunu işaretleyerek doldurur. Bütün maddeler aynı yöndeyse bu davranış, ölçülen özellikmiş gibi görünür. Ölçek geliştiriciler bu yüzden maddelerin bir kısmını ters yönde yazar. Ters maddeler, aynı sütunu işaretleyen birinin puanının orta değerlere yaklaşmasını sağlar ve dikkatsiz doldurulan formları fark etmeyi kolaylaştırır. Bedeli şudur: puan hesaplanmadan önce ters maddelerin çevrilmesi gerekir.
:::

---

## Ters puanlama

1–5 arası bir maddede: **ters puan = 6 − ham puan**

| Ham | 1 | 2 | 3 | 4 | 5 |
|---|---:|---:|---:|---:|---:|
| Ters | 5 | 4 | 3 | 2 | 1 |

Genel kural: **ters puan = (en küçük + en büyük) − ham puan**

1–7'lik maddede: 8 − ham puan (2 → 6) · 0–4'lük maddede: 4 − ham puan (1 → 3)

::: {.notes}
Ters puanlama, ölçeğin iki ucunu yer değiştirir: 1 olan 5, 2 olan 4 olur; ortadaki 3 yerinde kalır. Bunun için ölçeğin en küçük ve en büyük değerini toplayıp ham puanı bu toplamdan çıkarmak yeterlidir.

Kuralın ölçeğe göre değiştiğine dikkat edin: 1–5 arası maddelerde 6'dan, 1–7 arası maddelerde 8'den, 0–4 arası maddelerde 4'ten çıkarılır. Hangi maddelerin ters olduğu ve ölçeğin aralığı ölçeğin kendi yönergesinde yazar; bu bilgi veri sözlüğüne de işlenmelidir.
:::

---

## Bir katılımcının puanı

K01'in cevapları: madde_1 = 4 · madde_2 = 2 · madde_3 = 5 · madde_4 = 1

| | m1 | m2 (ters) | m3 | m4 (ters) | Toplam |
|---|---:|---:|---:|---:|---:|
| Çevirmeden | 4 | 2 | 5 | 1 | **12** |
| Doğru | 4 | 6 − 2 = 4 | 5 | 6 − 1 = 5 | **18** |

Puan aralığı: 4–20

<div data-anim="custom" data-src="ters-puanlama-etkisi.js" data-css="ters-puanlama-etkisi.css"></div>

::: {.notes}
K01 kendini yalnız hissettiğini (4) ve çevresinden kopuk hissettiğini (5) söylüyor; destek olacak insanların varlığına katılmıyor (2) ve istediğinde birine ulaşabildiğine hiç katılmıyor (1). Bütün cevaplar yalnızlığın yüksek olduğunu gösteriyor. Ters maddeleri çevirdiğimizde puanı 4–20 aralığında 18 olur; tutarlı bir tablo.

Çevirmeden toplasaydık 12 bulurduk; bu da onu aralığın ortasına, orta düzeyde yalnız biri gibi yerleştirirdi. Tek bir unutulmuş ters puanlama, o maddede 3'ten başka bir şey işaretleyen herkesin puanını bozar ve sonraki her analiz bu bozuk puanla yapılır.

Hep 5 işaretleyen birini düşünün: çevirmeden toplanırsa 20, yani en yalnız kişi olur; doğru hesaplandığında 5 + 1 + 5 + 1 = 12, aralığın tam ortası.
:::

---

## Toplam puan mı, ortalama puan mı?

| | Toplam | Ortalama |
|---|---|---|
| K01 | 18 (4–20) | 4,5 (1–5) |
| Yorum kolaylığı | Ölçeğe özgü aralık | Madde ölçeğiyle aynı: "katılıyorum" civarı |

Tam cevaplı kayıtlarda ikisi katılımcıları aynı sıraya koyar; ölçeğin yönergesi hangisini söylüyorsa o kullanılır.

Aynı yanıt aralığında: 4 maddede toplam 18 ile 6 maddede toplam 27 farklı görünür; ikisinin ortalaması da 4,5'tir.

::: {.notes}
Ölçek puanı maddelerin toplamı ya da ortalaması olarak hesaplanabilir. Dört maddelik bir ölçekte ortalama, toplamın dörde bölünmüş hâlidir; tam cevaplı kayıtlarda iki puan da katılımcıları aynı sıraya koyar. Toplamı ya da ortalamayı almak, ölçek puanını aralık düzeyinde saymamıza, yani üçüncü notta gördüğümüz kabule dayanır.

Ortalama puan madde ölçeğiyle aynı aralıktadır: "ortalama 4,5, yani maddelere genel olarak katılıyor" doğrudan okunur. Madde sayısı farklı ama yanıt aralığı aynı iki ölçeği düşünelim: dört maddelik ölçekte toplamı 18 olan biri ile altı maddelik ölçekte toplamı 27 olan birinin ortalaması da 4,5'tir; toplamlar farklı görünür, ortalama aynı yanıt düzeyini gösterir. Bu, yalnızlık ile kaygı gibi farklı ölçeklerin puanlarını birbirine eşdeğer yapmaz. Birçok ölçeğin kendi yönergesi belirli bir hesap biçimi tanımlar ve norm değerleri bu hesaba göre verilir; yayımlanmış bir ölçek kullanıyorsanız yönergeye uymanız gerekir.

Boş bırakılan bir maddeyi de düşünün. Boş cevabı sıfır sayıp toplamaya katarsak, o kişinin toplam puanı yapay olarak düşer. Boş cevap eksik kalır; eksik maddeli kişinin puanını hesaplamak ayrı bir iştir ve eksik veriyi tamamlama yöntemlerine bu derste girmiyoruz.
:::

---

## Yazılımda ters puanlama ve toplam

**jamovi:** Yeni bir hesaplanmış değişken (*Computed variable*)

- `m2_ters` = `6 - m2`
- `m4_ters` = `6 - m4`
- `yalnizlik_toplam` = `m1 + m2_ters + m3 + m4_ters` (aralık 4–20)
- `yalnizlik_ort` = `(m1 + m2_ters + m3 + m4_ters) / 4` (aralık 1–5)

K01 için yazılımın 18 ve 4,5 vermesi beklenir; elle bulduğumuzla karşılaştırırız. Türetilen her değişken veri sözlüğüne eklenir.

> Bu formüller tam cevaplı kayıtlar içindir; boş bırakılan madde 0 sayılmaz (toplamı yapay düşürür).

**SPSS:** *Transform → Compute Variable* (ya da *Recode into Different Variables*)

::: {.callout-note title="Görsel yer tutucu: Hesaplanmış değişken"}
**Tür:** ekran görüntüsü · **Gösterdiği:** jamovi'de "m2_ters" hesaplanmış değişkeninin formül alanı (`6 - m2`) ve veri tablosunda m2 ile m2_ters sütunlarının yan yana görünümü · **Öğrencinin görmesi gereken:** Orijinal madde yerinde duruyor; ters puan yeni bir sütunda.
:::

::: {.notes}
Ters puanlama ve ölçek puanı hesabı yazılımda birkaç satırlık formülle yapılır ve sonuç yeni bir değişken olarak türetilir. Toplam ve ortalama iki ayrı değişkendir; K01 için 18 ve 4,5 verirler. Yazılımın sonucunu elle bulduğumuzla karşılaştırmak formülün doğru yazıldığını kontrol eder. Bu örnek tam cevaplı kayıtlar içindir. Burada önemli olan, orijinal maddelerin üzerine yazmamak ve ters puanları yeni sütunlara kaydetmektir. Böylece m2 ile m2_ters sütunlarını yan yana koyup çevirmenin doğru yapıldığını gözle kontrol edebilirsiniz: m2'de 1 olan yerde m2_ters 5 olmalıdır. Türetilen her değişkeni veri sözlüğüne yeni bir satır olarak ekleriz: adı, nasıl hesaplandığı ve değer aralığı.

SPSS'te de aynı işlem Compute Variable ile formül yazılarak ya da Recode into Different Variables ile her değerin karşılığı tek tek verilerek yapılabilir. "Recode into Same Variables" seçeneği orijinal sütunun üzerine yazar; bu yüzden tercih edilmemelidir.
:::

---

## Veriyi yönetmek: gözlem seçmek

`sigara > 0` koşulu, yalnız sigara içenleri seçer:

K02 · K03 · K05 → **3 gözlem**

> Filtre, alt grupla çalışma kararıdır; olanaksız değeri düzeltme kararı değildir.

::: {.notes}
Araştırma sorusu yalnız sigara içenlerle ilgiliyse koşul uygulanır. Ardından kalan üç gözlem kontrol edilir; yanlış koşul sessizce başka bir grubu seçebilir. Sonuçlar artık yalnız bu üç kişi üzerinden hesaplandığından raporda seçimin koşulu ve kalan sayı belirtilir. Olanaksız bir değeri düzeltmek ya da eksik yapmak ise bütün veri setini ilgilendiren ayrı bir temizlik kararıdır ve kayda geçirilir.
:::

---

## Filtre satırları koruyor mu?

| Yazılım | Koşula uymayan satırlar |
|---|---|
| jamovi, *Data → Filters* | Gri görünür; analiz dışındadır, silinmez |
| SPSS, *Data → Select Cases* → *Filter out unselected cases* | Korunur, analiz dışındadır |
| SPSS, *Delete unselected cases* | Silinir |

::: {.notes}
Aynı seçme koşulu farklı dosya sonuçları üretebilir. SPSS'te silme seçeneği kullanılırsa koşula uymayan kayıtlar dosyadan çıkar; daha sonra tüm grupla yapılacak analiz için bu karar önemlidir. Filtre seçeneğinde kayıtlar durur, yalnız geçerli analiz kümesi değişir. Hangi yol seçilirse seçilsin kalan gözlem sayısını kontrol etmek gerekir.
:::

---

## Veriyi yönetmek: dosyaları birleştirmek

Ortak kimlik koduyla iki dosyayı yan yana eşleştirmek:

| kod | kaygi_t1 | | kod | kaygi_t2 |
|---|---:|---|---|---:|
| K01 | 32 | | K01 | 27 |
| K02 | 28 | | K02 | 26 |
| K03 | 25 | | K04 | 22 |
| K04 | 30 | | K05 | 20 |
| K05 | 27 | | | |

K03 ikinci dosyada yer almadığı için birleşmiş tabloda `kaygi_t2` hücresi **eksik** kalır.

- **Yan yana eşleştirme:** kimlik kodu anahtar değişken seçilir.
- **Alt alta ekleme:** farklı kişilerin satırlarını alt alta ekler; kimlikle eşleştirmenin yerine geçmez.
- **Sınırlılıklar:** Kimlik kodları iki dosyada aynı kişiyi göstermeli ve aynı biçimde yazılmış olmalıdır (K3 ve K03 iki ayrı satır olur); sözlükleri uyuşmayan iki dosya sessizce bozuk veri üretir.

::: {.notes}
Aynı kişilerin cevapları bazen iki ayrı dosyadadır: ilk ölçümler bir dosyada, ikinci ölçümler başka bir dosyada olabilir. İkisini tek tabloya koymak için ortak bir anahtar gerekir: kimlik kodu. Aynı kodu taşıyan satırlar yan yana getirilir. Burada K03'ün ikinci ölçümü olmadığı (ikinci dosyada bulunmadığı) için birleşmiş dosyada `kaygi_t2` hücresi eksik kalır. Tersi de olur: yalnız ikinci dosyada bulunan bir kod için `kaygi_t1` eksik kalır. Kodlar farklı yazılmışsa (K3 ve K03) aynı kişi iki eşleşmemiş satıra dönüşür.

Yan yana eşleştirmede ortak kimlik anahtar olur; iki dosyadaki aynı kişiye ait farklı ölçümler tek satıra gelir. Alt alta ekleme ise başka kişilerin kayıtlarını yeni satırlar olarak ekler. Bu nedenle ikinci ölçümü ilk ölçümle yan yana getirmek için satır ekleme işe yaramaz.

K3 ve K03 yazımları farklıysa yazılım aynı kişiyi bulamaz. Bu yüzden birleştirmeden önce kod biçimi ve sözlükteki değişken anlamları karşılaştırılır; eşleşmeyen kaydın ilgili ölçümü eksik kalır.
:::

---

## Karar soruları

1. Bir anketteki "bu ay kaç kez spor yaptınız?" sorusunu boş bırakanlara araştırmacı 0 girmiş. Ne olur?
2. 1–7 arası puanlanan bir ölçekte ters maddeler 6 − ham puan formülüyle çevrilmiş. Hangi değerler bozulur?
3. Bir katılımcının tepki süresi diğerlerinin yaklaşık üç katı. Analizden çıkarmak için hangi bilgiye ihtiyacınız var?

::: {.notes}
1. Spor yapmayanlar ile soruyu cevaplamayanlar aynı gruba girer; eksik bilgi geçerli sıfıra dönüşür. Ortalama spor sıklığı olduğundan düşük çıkar ve "spor yapmayanların oranı" gibi özetler şişer. Boş cevaplar eksik olarak kaydedilmeliydi.
2. 1–7'lik ölçekte doğru formül 8 − ham puandır. 6 − ham puan kullanıldığında 1 → 5, 7 → −1 olur; ters puanların tamamı iki birim aşağı kayar ve 6, 7 gibi ham puanlar sıfır ya da negatif değerlere dönüşür. Ters puanlamadan sonra yeni sütunun en küçük ve en büyük değerine bakmak bu hatayı hemen gösterir.
3. Değerin olanaksız mı yoksa yalnızca alışılmadık mı olduğunu: ölçüm sırasında bir sorun (cihaz hatası, katılımcının görevi anlamaması, dikkatin dağılması) kaydedildi mi? Önceden belirlenmiş bir dışlama ölçütü var mı? Gerekçe yoksa ve değer olanaksız değilse veride kalır; nasıl özetleneceği ayrı bir karardır.
:::

---

## Bu nottan kalanlar

- **Eksik**, **geçerli sıfır**, **olanaksız** ve **alışılmadık** değerler farklı kararlar gerektirir.
- Olanaksız değer: kaynağa dön, düzelt ya da eksik yap; tahminle doldurma.
- Alışılmadık değer yalnızca alışılmadık olduğu için silinmez; olanaksız değilse ve kayıtlı bir gerekçe yoksa veride kalır.
- Ham veri korunur; her değişiklik kaydedilir.
- Ters maddeler puanlamadan önce çevrilir: **(en küçük + en büyük) − ham puan**. Toplam ve ortalama puan yeni değişken olarak türetilir ve sözlüğe işlenir.
- Gözlem seçimi satırları silmez, analizin dışında bırakır ve raporda belirtilir. Dosyalar kimlik koduyla birleştirilir; eşleşmeyen kayıtlar eksik kalır.

**Sıradaki konu:** Temiz veriye ilk kez bakalım: grafikler.

::: {.notes}
Veri hazırlama, analizin görünmeyen ama belirleyici kısmıdır. Sonuç tablolarında hiçbir iz bırakmaz; ama bir unutulmuş eksik kodu ya da çevrilmemiş ters madde bütün sonuçları değiştirebilir.

Veri artık analize hazır. Sıradaki notta ona ilk kez bütün olarak bakacağız: frekans tabloları ve grafikler. Göreceğiniz gibi, iyi bir grafik veri hazırlamada gözden kaçan sorunları da çoğu zaman ortaya çıkarır.
:::
