---
title: "Ölçme Düzeyleri: Hangi Hesap Anlamlı?"
subtitle: "PSİ 303 — Davranışsal İstatistik için Yazılım Uygulamaları"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-19
description: Nominal, sıralı, aralık ve oran ölçme düzeyleri; her düzeyde anlamlı karşılaştırmalar ve özetler; Likert maddeleri ve ölçek puanları; yazılımdaki karşılıklar.
execute:
  echo: false
---

## İki ortalama

Bir basketbol takımının ilk beşi:

| Oyuncu | Forma no | Boy (cm) |
|---|---:|---:|
| A | 4 | 188 |
| B | 7 | 195 |
| C | 11 | 201 |
| D | 23 | 206 |
| E | 32 | 210 |

Forma numaralarının ortalaması **15,4** · Boyların ortalaması **200**

> İkisi de doğru hesaplandı. Hangisi bir şey anlatıyor?

::: {.notes}
İki sütunda da sayılar var; iki ortalama da aritmetik olarak kusursuz. Ama "takımın ortalama forma numarası 15,4" cümlesi hiçbir şey anlatmaz. Kimse 15,4 numaralı formayı giymez, 32 numaralı oyuncu 4 numaralıdan "sekiz kat daha forma numaralı" değildir. Boyların ortalaması ise takımın ne kadar uzun olduğu hakkında gerçek bir bilgi verir.

Fark, sayıların neyi temsil ettiğinde. Forma numarası yalnızca bir isimdir; oyuncuyu ayırt etmeye yarar. Boy ise bir büyüklüktür. Bir sütundaki sayılarla hangi hesapların anlamlı olduğunu, o sayıların nasıl elde edildiği ve neyi temsil ettiği belirler. Bu kararı veren dört ölçme düzeyine bakalım.
:::

---

## Ölçmek: sayıyı bir kurala göre vermek

> **Ölçme:** Gözlem birimlerine, bir özelliği temsil edecek biçimde belirli bir kurala göre değer atamak.

Kuralın ne kadar bilgi taşıdığına göre dört düzey:

| Düzey | Değerler ne söyler? |
|---|---|
| **Nominal** | Aynı mı, farklı mı? |
| **Sıralı** | + Hangisi daha çok? |
| **Aralık** | + Ne kadar fark var? |
| **Oran** | + Kaç katı? |

::: {.notes}
Ölçmek, bir özelliği bir kurala göre sayıya ya da etikete çevirmektir. Bu kural bazen çok az şey söyler (yalnızca "bu iki kişi farklı gruplarda"), bazen çok şey (yalnızca farklı değil, biri ötekinin iki katı). Ölçme düzeyleri bu kuralın ne kadar bilgi taşıdığını sınıflandırır.
:::

---

## Ölçme düzeyleri nasıl bilgi ekler?

<svg viewBox="0 0 860 460" role="img" aria-label="Ölçme düzeyleri merdiveni: Nominal düzeyden oran düzeyine bilginin kümülatif olarak arttığını gösteren dört basamaklı merdiven diyagramı. Her basamak alttaki düzeylerin tüm bilgisini devralır ve yeni bir karşılaştırma sorusu ekler: Nominal (aynı mı?), Sıralı (+ hangisi çok?), Aralık (+ ne kadar fark?), Oran (+ kaç katı?)." style="width:100%;max-height:460px">
  <!-- Üst Başlık ve Temel İlke -->
  <g>
    <text x="45" y="26" font-size="15" font-weight="bold" fill="currentColor">Ölçme Düzeyleri Merdiveni</text>
    <text x="45" y="44" font-size="11" fill="currentColor" opacity="0.8">Her basamak alttakinin tüm bilgisini taşır ve üstüne yeni bir soru ekler.</text>
    <rect x="45" y="60" width="365" height="52" rx="6" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/>
    <text x="58" y="80" font-size="11.5" font-weight="bold" fill="currentColor">Kümülatif kural:</text>
    <text x="58" y="99" font-size="10.5" fill="currentColor" opacity="0.85">Üst düzey, alt düzeyin tüm analiz araçlarını kullanabilir; tersi geçerli değildir.</text>
  </g>
  <!-- Basamakları birbirine bağlayan merdiven basamak çizgileri -->
  <path d="M 225 350 L 233 350 L 233 250 L 241 250" fill="none" stroke="currentColor" stroke-width="2" stroke-opacity="0.45" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 421 250 L 429 250 L 429 150 L 437 150" fill="none" stroke="currentColor" stroke-width="2" stroke-opacity="0.45" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 617 150 L 625 150 L 625 50 L 633 50" fill="none" stroke="currentColor" stroke-width="2" stroke-opacity="0.45" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- SÜTUN 1: NOMİNAL -->
  <!-- 1. Basamak Aktif Kartı (Satır 1) -->
  <g>
    <rect x="45" y="350" width="180" height="92" rx="8" fill="var(--anim-blue)" fill-opacity="0.12" stroke="var(--anim-blue)" stroke-width="2.5"/>
    <rect x="55" y="358" width="85" height="18" rx="4" fill="var(--anim-blue)" fill-opacity="0.25"/>
    <text x="97.5" y="371" font-size="11" font-weight="bold" fill="var(--anim-blue)" text-anchor="middle">1. NOMİNAL</text>
    <text x="55" y="392" font-size="12.5" font-weight="bold" fill="currentColor">Aynı mı, farklı mı?</text>
    <text x="55" y="411" font-size="10.5" fill="currentColor" opacity="0.85">Yalnızca adlandırma (Mod)</text>
    <text x="55" y="428" font-size="10" fill="currentColor" opacity="0.75">Örn: Forma no, kan grubu</text>
  </g>
  <!-- SÜTUN 2: SIRALI -->
  <!-- 2. Basamak Aktif Kartı (Satır 2) -->
  <g>
    <rect x="241" y="250" width="180" height="92" rx="8" fill="var(--anim-teal)" fill-opacity="0.12" stroke="var(--anim-teal)" stroke-width="2.5"/>
    <rect x="251" y="258" width="75" height="18" rx="4" fill="var(--anim-teal)" fill-opacity="0.25"/>
    <text x="288.5" y="271" font-size="11" font-weight="bold" fill="var(--anim-teal)" text-anchor="middle">2. SIRALI</text>
    <text x="251" y="292" font-size="12.5" font-weight="bold" fill="currentColor">+ Hangisi daha çok?</text>
    <text x="251" y="311" font-size="10.5" fill="currentColor" opacity="0.85">Sıra var, aralık belirsiz (Medyan)</text>
    <text x="251" y="328" font-size="10" fill="currentColor" opacity="0.75">Örn: Yarış sırası (1., 2., 3.)</text>
  </g>
  <!-- Devralınan Nominal Bilgisi (Satır 1) -->
  <g>
    <rect x="241" y="350" width="180" height="92" rx="6" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.22" stroke-dasharray="4 3" stroke-width="1.5"/>
    <text x="331" y="392" font-size="12" font-weight="bold" fill="currentColor" opacity="0.65" text-anchor="middle">✓ Aynı / farklı ayrımı</text>
    <text x="331" y="411" font-size="10.5" fill="currentColor" opacity="0.45" text-anchor="middle">Nominal bilgisini taşır</text>
  </g>
  <!-- SÜTUN 3: ARALIK -->
  <!-- 3. Basamak Aktif Kartı (Satır 3) -->
  <g>
    <rect x="437" y="150" width="180" height="92" rx="8" fill="var(--anim-amber)" fill-opacity="0.12" stroke="var(--anim-amber)" stroke-width="2.5"/>
    <rect x="447" y="158" width="75" height="18" rx="4" fill="var(--anim-amber)" fill-opacity="0.25"/>
    <text x="484.5" y="171" font-size="11" font-weight="bold" fill="var(--anim-amber)" text-anchor="middle">3. ARALIK</text>
    <text x="447" y="192" font-size="12.5" font-weight="bold" fill="currentColor">+ Ne kadar fark var?</text>
    <text x="447" y="211" font-size="10.5" fill="currentColor" opacity="0.85">Eşit aralıklar, keyfî sıfır (Ort.)</text>
    <text x="447" y="228" font-size="10" fill="currentColor" opacity="0.75">Örn: Sıcaklık (°C), IQ puanı</text>
  </g>
  <!-- Devralınan Sıralı Bilgisi (Satır 2) -->
  <g>
    <rect x="437" y="250" width="180" height="92" rx="6" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.22" stroke-dasharray="4 3" stroke-width="1.5"/>
    <text x="527" y="292" font-size="12" font-weight="bold" fill="currentColor" opacity="0.65" text-anchor="middle">✓ Sıralama ilişkisi</text>
    <text x="527" y="311" font-size="10.5" fill="currentColor" opacity="0.45" text-anchor="middle">Sıralı bilgisini taşır</text>
  </g>
  <!-- Devralınan Nominal Bilgisi (Satır 1) -->
  <g>
    <rect x="437" y="350" width="180" height="92" rx="6" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.22" stroke-dasharray="4 3" stroke-width="1.5"/>
    <text x="527" y="392" font-size="12" font-weight="bold" fill="currentColor" opacity="0.65" text-anchor="middle">✓ Aynı / farklı ayrımı</text>
    <text x="527" y="411" font-size="10.5" fill="currentColor" opacity="0.45" text-anchor="middle">Nominal bilgisini taşır</text>
  </g>
  <!-- SÜTUN 4: ORAN -->
  <!-- 4. Basamak Aktif Kartı (Satır 4) -->
  <g>
    <rect x="633" y="50" width="180" height="92" rx="8" fill="var(--anim-green)" fill-opacity="0.12" stroke="var(--anim-green)" stroke-width="2.5"/>
    <rect x="643" y="58" width="70" height="18" rx="4" fill="var(--anim-green)" fill-opacity="0.25"/>
    <text x="678" y="71" font-size="11" font-weight="bold" fill="var(--anim-green)" text-anchor="middle">4. ORAN</text>
    <text x="643" y="92" font-size="12.5" font-weight="bold" fill="currentColor">+ Kaç katı?</text>
    <text x="643" y="111" font-size="10.5" fill="currentColor" opacity="0.85">Gerçek sıfır · Oranlama anlamlı</text>
    <text x="643" y="128" font-size="10" fill="currentColor" opacity="0.75">Örn: Tepki süresi, boy, yaş</text>
  </g>
  <!-- Devralınan Aralık Bilgisi (Satır 3) -->
  <g>
    <rect x="633" y="150" width="180" height="92" rx="6" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.22" stroke-dasharray="4 3" stroke-width="1.5"/>
    <text x="723" y="192" font-size="12" font-weight="bold" fill="currentColor" opacity="0.65" text-anchor="middle">✓ Eşit farklar</text>
    <text x="723" y="211" font-size="10.5" fill="currentColor" opacity="0.45" text-anchor="middle">Aralık bilgisini taşır</text>
  </g>
  <!-- Devralınan Sıralı Bilgisi (Satır 2) -->
  <g>
    <rect x="633" y="250" width="180" height="92" rx="6" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.22" stroke-dasharray="4 3" stroke-width="1.5"/>
    <text x="723" y="292" font-size="12" font-weight="bold" fill="currentColor" opacity="0.65" text-anchor="middle">✓ Sıralama ilişkisi</text>
    <text x="723" y="311" font-size="10.5" fill="currentColor" opacity="0.45" text-anchor="middle">Sıralı bilgisini taşır</text>
  </g>
  <!-- Devralınan Nominal Bilgisi (Satır 1) -->
  <g>
    <rect x="633" y="350" width="180" height="92" rx="6" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.22" stroke-dasharray="4 3" stroke-width="1.5"/>
    <text x="723" y="392" font-size="12" font-weight="bold" fill="currentColor" opacity="0.65" text-anchor="middle">✓ Aynı / farklı ayrımı</text>
    <text x="723" y="411" font-size="10.5" fill="currentColor" opacity="0.45" text-anchor="middle">Nominal bilgisini taşır</text>
  </g>
</svg>

::: {.notes}
Düzeyler bir merdiven gibi düşünülebilir: her basamak bir alttakinin söylediği her şeyi söyler ve buna yeni bir şey ekler. Bu yüzden bir değişkenin düzeyi, onunla yapılabilecek hesapların üst sınırını belirler.

Önceki notta değişkenleri kategorik ve nicel diye ayırmıştık. Nominal ve sıralı kategorik tarafta, aralık ve oran nicel tarafta durur; kesikli–sürekli ayrımı ayrı bir eksendir (kardeş sayısı hem oran hem kesiklidir). Şimdi basamakları tek tek çıkalım.
:::

---

## Nominal: yalnızca ad

Değerler grupları **adlandırır**; sıra yoktur.

- Kan grubu: A, B, AB, 0
- Terapi türü: bilişsel davranışçı, psikodinamik, şema
- Doğum yeri, medeni durum, forma numarası

Anlamlı soru: **Bu iki kişi aynı grupta mı?**

Anlamlı özet: **sayım, yüzde, en sık değer (mod)**

::: {.notes}
Nominal düzeyde değerler yalnızca birer etikettir. A kan grubu B'den "fazla" değildir. Etiketlerin sırasını değiştirmek hiçbir bilgiyi bozmaz.

Bu yüzden nominal bir değişkenle yapabileceğimiz tek karşılaştırma aynı mı, farklı mı sorusudur. Özet olarak her gruptan kaç kişi olduğunu sayabilir, yüzdesini bulabilir ve en kalabalık grubu (modu) söyleyebiliriz. İkiden çok kategorili bir değişken 1, 2, 3 diye kodlanmış olsa bile ortalaması anlamsızdır; forma numarası örneğindeki durumun aynısı.
:::

---

## Sıralı: sıra var, aralık belirsiz

Değerler **sıralanabilir**, ama aralarındaki uzaklık eşit değildir.

- Yarış sıralaması: 1., 2., 3.
- Eğitim düzeyi: ilkokul, lise, lisans, lisansüstü
- "Ne sıklıkla?": hiç, nadiren, bazen, sık sık, her zaman

Anlamlı soru: **Hangisi daha çok/daha yüksek?**

Anlamlı özet: **medyan**

::: {.notes}
Sıralı düzeyde değerler arasında bir büyüklük sırası vardır: yarışta birinci ikinciden önce gelmiştir, lisans lisedeki eğitimden fazladır. Ama aradaki uzaklıklar bilinmez ya da eşit değildir. Birinci ile ikinci arasında yarım saniye, ikinci ile üçüncü arasında bir dakika olabilir; sıralama bunu göstermez.

Bu yüzden sıralı verilerde ortadaki değeri (medyan) bulmak anlamlıdır: değerleri sıraya dizip ortadakine bakmak yalnızca sıra bilgisine ihtiyaç duyar. Ama "ortalama sıralama 2,3" gibi bir hesap, aralıkların eşit olduğunu varsaydığı için dikkatle okunmalıdır.
:::

---

## Sıralı veride aralıklar neden önemli?

Bir yarışın sonuçları:

| Sıra | Koşucu | Süre (dk:sn) |
|---:|---|---|
| 1 | Ayşe | 12:01 |
| 2 | Bora | 12:02 |
| 3 | Cem | 14:40 |

Sıralama: **1, 2, 3** → aralar eşit görünüyor.
Süreler: Ayşe ile Bora arası 1 saniye, Bora ile Cem arası 2 dakika 38 saniye.

::: {.notes}
Sıralama Ayşe, Bora ve Cem'i birer adım arayla dizer; ama gerçekte ilk ikisi neredeyse aynı anda bitirmiş, Cem çok geride kalmıştır. Sıralı veri bu farkı silerek kaydeder.

Aynı yarışın süreleri ise farkı korur. Burada süre, sıralamanın taşıdığı bütün bilgiyi (kimin önce geldiğini) taşıdığı gibi üstüne "ne kadar önce" bilgisini de ekler. Merdivenin bir sonraki basamağı tam olarak budur. Elinizde daha üst düzeyde bir ölçüm varken onu sıralamaya çevirmek mümkündür; tersi mümkün değildir.
:::

---

## Aralık: farklar anlamlı, sıfır keyfî

Eşit aralıklar **eşit farkları** temsil eder; sıfır noktası ise seçilmiş bir referanstır.

- Sıcaklık (°C): 10 °C ile 20 °C arası, 20 °C ile 30 °C arasıyla aynı fark
- Takvim yılı
- IQ gibi standartlaştırılmış puanlar (uygulamada aralık sayılır)

Anlamlı soru: **Ne kadar fark var?**

Anlamlı özet: + **ortalama, standart sapma**

::: {.notes}
Aralık düzeyinde bir birimlik fark ölçeğin her yerinde aynı büyüklüğü temsil eder: 10'dan 20 dereceye çıkmak, 20'den 30'a çıkmakla aynı ısınmadır. Bu yüzden farkları karşılaştırmak, ortalama almak ve değerlerin ortalamadan ne kadar uzaklaştığını hesaplamak anlamlı hâle gelir.

Sıfır keyfîdir: 0 °C, suyun donduğu nokta olarak seçilmiştir, "hiç sıcaklık yok" demek değildir. Fahrenheit'ta aynı sıcaklık 32'dir. Sıfırın anlamı olmadığında "kaç katı" sorusu da anlamını yitirir; bunu bir sonraki slaytta göreceğiz.
:::

---

## "İki kat" tuzağı

- 20 °C, 10 °C'nin iki katı sıcak mı?
  Aynı iki gün Fahrenheit ile: 68 °F ve 50 °F → oran 2 değil.
- IQ'su 140 olan biri, 70 olandan iki kat mı zeki?
  Zekâ testlerinde puanlar ortalama 100 çıkacak biçimde ayarlanır; 100 **seçilmiş** bir referanstır.

> Sıfır keyfîyse oranlar da keyfîdir.

::: {.notes}
Aynı iki günü iki farklı birimle ölçtüğümüzde "iki kat" sonucu ortadan kalkıyor; demek ki oran, sıcaklığın kendisine değil seçtiğimiz birime ait. Farklar ise iki birimde de tutarlıdır: Celsius'ta 10 derecelik fark, Fahrenheit'ta da aynı ısınmayı gösterir.

Psikolojideki standartlaştırılmış puanlar da benzer davranır. Zekâ testlerinde puanlar, ortalama 100 çıkacak biçimde ayarlanır. 100 seçilmiş bir referanstır; farklar anlamlıdır (130 alan, 115 alandan 15 puan yukarıdadır), oranlar anlamsızdır: IQ'su 140 olan biri, 70 olandan iki kat zeki değildir.
:::

---

## Oran: gerçek bir sıfır

Sıfır "**hiç yok**" demektir; oranlar anlamlıdır.

- Tepki süresi (ms): 600 ms, 300 ms'nin iki katı
- Boy, kilo, yaş, gelir
- Bir haftadaki uyku saati, kaçırılan ders sayısı

Anlamlı soru: **Kaç katı?**

Anlamlı özet: **ortalama**; karşılaştırma: **kat oranı** ("kaç katı?")

::: {.notes}
Oran düzeyinde sıfır gerçekten "hiç yok" anlamına gelir: sıfır milisaniye hiç zaman geçmemesi, sıfır ders hiç ders kaçırmamaktır. Bu yüzden "600 ms, 300 ms'nin iki katıdır" cümlesi hangi birimle ölçerseniz ölçün doğrudur; saniyeye çevirdiğinizde de 0,6 ile 0,3 arasındaki oran yine 2'dir.

Psikoloji araştırmalarında oran düzeyindeki ölçümler genellikle davranışsal ölçümlerdir: tepki süreleri, doğru cevap sayıları, bir davranışın kaç kez tekrarlandığı. Tutum ve kişilik ölçekleri ise çoğunlukla bu düzeye ulaşmaz.
:::

---

## Dört düzey bir arada

| | Nominal | Sıralı | Aralık | Oran |
|---|:---:|:---:|:---:|:---:|
| Aynı / farklı | ✓ | ✓ | ✓ | ✓ |
| Sıralama | | ✓ | ✓ | ✓ |
| Farkların karşılaştırılması | | | ✓ | ✓ |
| Oran ("kaç katı") | | | | ✓ |
| Tipik değer | mod | medyan | ortalama | ortalama |

::: {.notes}
Tablo, merdivenin tamamını gösteriyor. Bir değişkenin düzeyini belirledikten sonra hangi karşılaştırmaların ve hangi özetlerin anlamlı olduğu buradan okunabilir. Üst düzeylerde alt düzeyin bütün araçları da kullanılabilir: oran düzeyindeki bir değişkenin medyanı ya da modu da hesaplanabilir; bazen, merkezî eğilim notunda göreceğimiz gibi, ortalama yerine medyanı raporlamak daha doğru olur.

Tersi ise geçerli değildir: nominal bir değişkenin medyanı, sıralı bir değişkenin "iki katı" yoktur. Analiz seçerken sorulacak ilk sorulardan biri bu yüzden "değişkenim hangi düzeyde?" sorusudur.
:::

---

## Psikolojinin zor vakası: Likert maddeleri

> "Sınavdan önce kendimi gergin hissederim."
> 1 = Hiç katılmıyorum · 2 · 3 · 4 · 5 = Tamamen katılıyorum

Ankette tek bir ifadeye **madde**, maddelerin oluşturduğu araca **ölçek** denir.

- **Tek madde:** Sıralıdır. 2 ile 3 arasındaki "katılma farkı", 4 ile 5 arasındakine eşit mi? Bilmiyoruz.
- **Birçok maddenin toplamı (ölçek puanı):** Değer aralığı genişlediği için uygulamada çoğunlukla **aralık düzeyinde** varsayılarak işlenir; ortalama ve standart sapma raporlanır. Bu kabul yaygındır ama tartışmalıdır; tek maddeye uygulanmaz.


::: {.notes}
Psikolojide en sık kullanacağımız ölçüm aracı Likert tipi ölçeklerdir. Ankette tek bir ifadeye madde, maddelerin oluşturduğu araca ölçek denir. Tek bir maddenin cevapları açıkça sıralıdır: "katılıyorum", "kararsızım"dan daha fazla katılmayı gösterir; ama aradaki uzaklıkların eşit olduğunu bilmeyiz. Bu yüzden tek bir madde için medyan ve yüzdeler daha güvenli özetlerdir.

Birçok madde toplanıp bir ölçek puanı oluşturulduğunda durum değişir. Puan aralığı genişler, değerler daha çok farklılaşır ve uygulamada bu toplam puan çoğunlukla aralık düzeyinde varsayılarak işlenir; araştırmacılar ortalama, standart sapma ve t-testi gibi analizler uygular. Bu kabul yaygındır, alanyazında tartışılır, her ölçek için kanıtlanmış değildir ve tek maddeye uygulanmaz; bir raporda tek bir maddenin ortalamasını görürseniz biraz kuşkuyla okumalısınız.


:::

---

## Toplam puanda oran kurulamaz

21 maddelik depresyon ölçeğinde aynı iki kişinin puanları:

| Madde kodu | Kişi A | Kişi B | Puan oranı |
|---|---:|---:|---:|
| 0–3 | 40 | 20 | 2 |
| 1–4 | 61 | 41 | ≈ 1,49 |

> Kod değişince oran değişir; "iki kat depresyon" denemez.

::: {.notes}
Her maddeye 1 eklenince 21 maddelik toplamda her kişinin puanı 21 artar. İlk kodlamadaki 40 ve 20, ikinci kodlamada 61 ve 41 olur. Aynı kişilerin durumu değişmediği hâlde puan oranı değiştiği için ölçek toplamında gerçek sıfıra dayanan bir kat karşılaştırması kuramayız.
:::

---


## Aynı kavram, farklı düzeyler

| Ölçüm biçimi | Düzey |
|---|---|
| "Sigara içiyor musunuz?" Evet / Hayır | Nominal |
| "Ne kadar içiyorsunuz?" Hiç / Az / Orta / Çok | Sıralı |
| Günde içilen sigara sayısı | Oran |

> Düzeyi kavram değil, **ölçüm biçimi** belirler.

::: {.notes}
Sigara içme davranışı üç farklı soruyla üç farklı düzeyde ölçülebiliyor. Hangisinin seçileceği araştırma sorusuna bağlıdır; ama bir kez seçildiğinde sonraki bütün hesapların sınırı da çizilmiş olur. "Az" ve "çok" cevaplarından günlük ortalama sigara sayısı hesaplanamaz; sigara sayısından ise gerektiğinde gruplar oluşturulabilir.

Pratik sonuç: mümkün olduğunda bilgiyi en üst düzeyde toplamak, analizde daha fazla seçenek bırakır. Bu, her şeyi sayıya dökmek gerektiği anlamına gelmez; ama anketi tasarlarken "bu soruyla ileride ne hesaplamak isteyeceğim?" diye sormak işe yarar.
:::

---

## Yazılımda ölçme düzeyi

| Bu notta | jamovi | SPSS |
|---|---|---|
| Nominal | Nominal | Nominal |
| Sıralı | Ordinal | Ordinal |
| Aralık + Oran | Continuous | Scale |

Yazılımlar aralık ve oranı **tek türde** toplar: ikisinde de ortalama ve standart sapma anlamlıdır.

::: {.callout-note title="Görsel yer tutucu: Yazılımda düzey seçimi"}
**Tür:** ekran görüntüsü · **Gösterdiği:** jamovi'de bir değişkenin "Setup" panelinde ölçme düzeyi seçimi; yanında SPSS "Variable View" ekranında "Measure" sütunu · **Öğrencinin görmesi gereken:** Düzey bilgisi değişkenle birlikte kaydedilir ve hangi analizlerin önerileceğini etkiler.
:::

::: {.notes}
İstatistik yazılımları bu dört düzeyi üç türe indirir, çünkü aralık ve oran düzeyindeki değişkenler için kullanılan analizler hemen hemen aynıdır. jamovi bu türe "Continuous", SPSS "Scale" der.

Yazılım bir sütundaki sayıları görünce onu çoğu zaman kendiliğinden sürekli sanar. 1, 2, 3 diye kodlanmış terapi türleri böyle bir sütuna "Continuous" olarak girerse yazılım ortalamasını hesaplamaya hazırdır. Düzeyi doğru tanımlamak bu yüzden veri girişinin bir parçasıdır; bunu veri sözlüğü notunda ayrıntılı göreceğiz.

Kimlik sütunu için jamovi'de ayrıca ID seçeneği vardır; onu sonraki notta göreceğiz.
:::

---

## Düzeyini belirleyin

1. Bir hastanedeki bölüm (kardiyoloji, nöroloji…)
2. Bir depresyon ölçeğinden alınan toplam puan (21 madde, her biri 0–3; toplam 0–63)
3. Kahve tüketimi (fincan/gün)
4. Sosyoekonomik düzey: alt, orta, üst
5. Doğum yılı
6. Bir labirenti tamamlama süresi (saniye)
7. Bir maddeye verilen cevap: 1–7 arası katılma derecesi

::: {.notes}
1. Nominal: bölümler arasında sıra yoktur.
2. Uygulamada aralık kabul edilir: maddelerin toplamıdır. Oran kurulamaz: sıfır "hiç belirti yok" anlamına gelse bile oran, maddelerin 0–3 mü 1–4 mü kodlandığına göre değişir.
3. Oran: sıfır fincan gerçekten hiç kahve içmemektir; 4 fincan 2 fincanın iki katıdır.
4. Sıralı: alt < orta < üst, ama aralıkları eşit değil.
5. Aralık: yıllar arasındaki farklar anlamlıdır, ama 0 yılı "zamanın başlangıcı" değildir. Aynı bilgi "yaş" olarak kaydedilseydi oran düzeyinde olurdu.
6. Oran: sıfır saniye gerçek bir sıfırdır.
7. Sıralı (tek madde): aralıkların eşitliği bilinmez.
:::

---

## Karar soruları

1. Bir araştırmacı katılımcıların medeni durumunu 1–4 arası kodlamış ve "ortalama medeni durum 2,1" yazmış. Ne söylerdiniz?
2. "Grup A'nın kaygı puanı ortalaması 30, Grup B'ninki 15; A grubu iki kat daha kaygılı." Bu cümle hangi varsayıma dayanıyor?
3. Elinizdeki veride yaş "18–24, 25–34, 35–44, 45+" grupları olarak toplanmış. Yaşın ortalamasını raporlayabilir misiniz?

::: {.notes}
1. Medeni durum nominaldir; kodların ortalaması bir şey anlatmaz. Doğru özet her durumun sayısı ve yüzdesidir; en sık görülen durum mod olarak verilebilir.
2. Kaygı puanının oran düzeyinde olduğu, yani 0 puanın "hiç kaygı yok" anlamına geldiği ve puanların eşit aralıklı olduğu varsayımına. Ölçek puanları için bu varsayım genellikle savunulamaz; doğru cümle "A grubunun ortalaması B'ninkinden 15 puan yüksek" olur.
3. Hayır, doğrudan hesaplayamazsınız: yaş toplanırken sıralı gruplara çevrilmiş, kişilerin gerçek yaşı kaybolmuş. Hangi grubun en kalabalık olduğu ve yaş grubunun medyanı söylenebilir.
:::

---


## Bu nottan kalanlar

- Ölçme düzeyi, bir değişkenle hangi hesapların **anlamlı** olduğunu belirler: **nominal** ad, **sıralı** sıra, **aralık** eşit farklar, **oran** gerçek sıfırdır. Düzeyi sütundaki sayılar değil, **ölçüm biçimi** belirler.
- Tek Likert maddesi sıralıdır; ölçek puanları uygulamada aralık kabul edilir. Bu kabul yaygındır ama tartışmalıdır.
- Yazılımlar aralık ve oranı tek türde toplar (jamovi: Continuous, SPSS: Scale).

Ölçeklerin nasıl geliştirildiği, güvenirlik ve geçerlik dönem sonundaki konulardır.

**Sıradaki konu:** Bir değişkenle karşılaştığımızda iki soruyu birlikte soruyoruz: ne tür bir bilgi taşıyor (önceki not) ve hangi düzeyde ölçülmüş (bu not)? Bu iki cevabı, kaybolmayacak biçimde dosyaya nasıl yazarız?

::: {.notes}
Örneğin forma numarası sayı olarak yazılsa da bir kimliktir; boy ise nicel bir ölçümdür. İkisinin veri dosyasında nasıl tanımlandığı, yazılımın uygun özet ve grafik seçeneklerini sunmasını etkiler.

Sıradaki notta bu bilgileri kaybolmayacak biçimde veri dosyasına işlemenin yolunu göreceğiz: veri sözlüğü.
:::
