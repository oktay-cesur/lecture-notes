---
title: "Bir Grup, İki Grup: t-Testi"
subtitle: "PSİ 303 — Davranışsal İstatistik için Yazılım Uygulamaları"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-19
description: Tek örneklem ve bağımsız örneklem t-testi; t istatistiğinin sezgisi ve t dağılımı; önce grafik; varsayımlar (normallik, varyans eşitliği, Welch); Cohen's d ve güven aralığı; jamovi çıktısı ve APA raporu.
execute:
  echo: false
---

## İki soru

1. Bu bölümün öğrencileri, önerilen **8 saat** uykudan farklı mı uyuyor?
2. Kafein alanlar ile almayanların **tepki süresi** farklı mı?

| | Neyi karşılaştırıyoruz? | Test |
|---|---|---|
| 1 | Bir grubun ortalaması ↔ sabit bir değer | Tek örneklem t-testi |
| 2 | İki ayrı grubun ortalaması ↔ birbiri | Bağımsız örneklem t-testi |

::: {.notes}
Önceki notta bir farkın şansla açıklanıp açıklanamayacağına karar vermenin mantığını kurduk: gözlenen farkı ortalamanın doğal oynamasıyla, standart hatayla karşılaştırıyor, bir p değeri elde ediyor ve α ile karar veriyorduk. Şimdi bu mantığı ilk iki gerçek testte kullanacağız.

Birinde referans dışarıdan geliyor: uzmanların önerdiği 8 saat; ötekinde iki grup birbiriyle karşılaştırılıyor. İki test de aynı aileden, t-testlerinden; değişen yalnızca neyin karşılaştırıldığı ve standart hatanın nasıl hesaplandığı.
:::

---

## Önce grafik

25 öğrencinin dün geceki uyku süresi:

<svg viewBox="0 0 740 370" role="img" aria-label="25 öğrencinin uyku sürelerinin nokta grafiği ve histogramı. Dağılım 4 ile 9,5 saat arasında yaklaşık simetrik, ortalama 6,8 saatte. 8 saatteki kesikli referans çizgisinin solunda öğrencilerin büyük çoğunluğu (%80'i) yer alıyor." style="width:100%;max-height:440px">
  <!-- Y ekseni kılavuz çizgileri ve etiketleri -->
  <line x1="80" y1="210" x2="680" y2="210" stroke="currentColor" stroke-opacity="0.2" stroke-width="1"/>
  <line x1="80" y1="165" x2="680" y2="165" stroke="currentColor" stroke-opacity="0.15" stroke-dasharray="3 3"/>
  <line x1="80" y1="120" x2="680" y2="120" stroke="currentColor" stroke-opacity="0.15" stroke-dasharray="3 3"/>
  <line x1="80" y1="75" x2="680" y2="75" stroke="currentColor" stroke-opacity="0.15" stroke-dasharray="3 3"/>
  <!-- Y ekseni çizgisi ve ölçekleri -->
  <line x1="80" y1="65" x2="80" y2="210" stroke="currentColor" stroke-width="1.5"/>
  <line x1="74" y1="210" x2="80" y2="210" stroke="currentColor" stroke-width="1.5"/>
  <line x1="74" y1="180" x2="80" y2="180" stroke="currentColor" stroke-width="1.5"/>
  <line x1="74" y1="150" x2="80" y2="150" stroke="currentColor" stroke-width="1.5"/>
  <line x1="74" y1="120" x2="80" y2="120" stroke="currentColor" stroke-width="1.5"/>
  <line x1="74" y1="90" x2="80" y2="90" stroke="currentColor" stroke-width="1.5"/>
  <line x1="74" y1="75" x2="80" y2="75" stroke="currentColor" stroke-width="1.5"/>
  <text x="68" y="214" font-size="11" fill="currentColor" text-anchor="end">0</text>
  <text x="68" y="184" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <text x="68" y="154" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <text x="68" y="124" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <text x="68" y="94" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <text x="68" y="79" font-size="11" fill="currentColor" text-anchor="end">9</text>
  <text x="32" y="140" font-size="12" fill="currentColor" text-anchor="middle" transform="rotate(-90 32 140)">Öğrenci sayısı (frekans)</text>
  <!-- Histogram Çubukları (n = 25, toplam 6 aralık) -->
  <!-- 4 saat civarı (3,5-4,5): 1 kişi -->
  <rect x="123" y="195" width="70" height="15" fill="var(--anim-blue)" fill-opacity="0.2" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <text x="158" y="190" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <!-- 5 saat civarı (4,5-5,5): 3 kişi -->
  <rect x="200" y="165" width="70" height="45" fill="var(--anim-blue)" fill-opacity="0.2" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <text x="235" y="160" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <!-- 6 saat civarı (5,5-6,5): 5 kişi -->
  <rect x="278" y="135" width="70" height="75" fill="var(--anim-blue)" fill-opacity="0.2" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <text x="313" y="130" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <!-- 7 saat civarı (6,5-7,5): 9 kişi (tepe) -->
  <rect x="355" y="75" width="70" height="135" fill="var(--anim-blue)" fill-opacity="0.2" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <text x="390" y="70" font-size="11" fill="currentColor" text-anchor="middle">9</text>
  <!-- 8 saat civarı (7,5-8,5): 5 kişi -->
  <rect x="433" y="135" width="70" height="75" fill="var(--anim-blue)" fill-opacity="0.2" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <text x="468" y="130" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <!-- 9 saat civarı (8,5-9,5): 2 kişi -->
  <rect x="510" y="180" width="70" height="30" fill="var(--anim-blue)" fill-opacity="0.2" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <text x="545" y="175" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <!-- Nokta Grafiği Bandı (Bireysel 25 öğrenci) -->
  <text x="70" y="244" font-size="11" fill="currentColor" text-anchor="end">Nokta:</text>
  <line x1="80" y1="240" x2="680" y2="240" stroke="currentColor" stroke-opacity="0.15" stroke-dasharray="2 2"/>
  <!-- 25 Öğrencinin Bireysel Puanları -->
  <circle cx="173" cy="240" r="4.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="219" cy="236" r="4.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="243" cy="244" r="4.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="266" cy="237" r="4.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="289" cy="243" r="4.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="305" cy="236" r="4.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="313" cy="244" r="4.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="328" cy="237" r="4.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="336" cy="243" r="4.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="351" cy="236" r="4.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="359" cy="244" r="4.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="367" cy="237" r="4.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="372" cy="232" r="4.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="377" cy="248" r="4.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="382" cy="240" r="4.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="398" cy="236" r="4.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="406" cy="244" r="4.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="421" cy="237" r="4.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="444" cy="243" r="4.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="460" cy="236" r="4.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="468" cy="240" r="4.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="483" cy="244" r="4.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="498" cy="237" r="4.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="537" cy="240" r="4.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="576" cy="240" r="4.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <!-- X ekseni çizgisi ve ölçekleri -->
  <line x1="80" y1="265" x2="680" y2="265" stroke="currentColor" stroke-width="1.5"/>
  <line x1="158" y1="265" x2="158" y2="272" stroke="currentColor" stroke-width="1.5"/>
  <line x1="235" y1="265" x2="235" y2="272" stroke="currentColor" stroke-width="1.5"/>
  <line x1="313" y1="265" x2="313" y2="272" stroke="currentColor" stroke-width="1.5"/>
  <line x1="390" y1="265" x2="390" y2="272" stroke="currentColor" stroke-width="1.5"/>
  <line x1="468" y1="265" x2="468" y2="272" stroke="currentColor" stroke-width="1.5"/>
  <line x1="545" y1="265" x2="545" y2="272" stroke="currentColor" stroke-width="1.5"/>
  <line x1="623" y1="265" x2="623" y2="272" stroke="currentColor" stroke-width="1.5"/>
  <text x="158" y="286" font-size="12" fill="currentColor" text-anchor="middle">4</text>
  <text x="235" y="286" font-size="12" fill="currentColor" text-anchor="middle">5</text>
  <text x="313" y="286" font-size="12" fill="currentColor" text-anchor="middle">6</text>
  <text x="390" y="286" font-size="12" fill="currentColor" text-anchor="middle">7</text>
  <text x="468" y="286" font-size="12" fill="currentColor" text-anchor="middle">8</text>
  <text x="545" y="286" font-size="12" fill="currentColor" text-anchor="middle">9</text>
  <text x="623" y="286" font-size="12" fill="currentColor" text-anchor="middle">10</text>
  <text x="380" y="310" font-size="13" font-weight="bold" fill="currentColor" text-anchor="middle">Uyku süresi (saat)</text>
  <!-- Örneklem Ortalaması Çizgisi: M = 6,8 saat -->
  <line x1="375" y1="48" x2="375" y2="265" stroke="var(--anim-blue)" stroke-width="2.5"/>
  <text x="375" y="40" font-size="12" font-weight="bold" fill="var(--anim-blue)" text-anchor="middle">Örneklem ortalaması: M = 6,8 saat</text>
  <!-- Referans Değer Çizgisi: μ = 8,0 saat -->
  <line x1="468" y1="30" x2="468" y2="265" stroke="var(--anim-red)" stroke-width="2.5" stroke-dasharray="6 4"/>
  <text x="468" y="22" font-size="12" font-weight="bold" fill="var(--anim-red)" text-anchor="middle">Referans: 8,0 saat (önerilen)</text>
  <!-- Fark Oku ve Açıklaması -->
  <line x1="380" y1="52" x2="462" y2="52" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="380,52 386,49 386,55" fill="currentColor"/>
  <polygon points="462,52 456,49 456,55" fill="currentColor"/>
  <text x="421" y="47" font-size="11" font-weight="bold" fill="currentColor" text-anchor="middle">Fark = −1,2 saat (t = −4,00)</text>
  <!-- Sol taraftaki öğrenci çoğunluğu vurgusu -->
  <text x="235" y="86" font-size="11" fill="currentColor" text-anchor="middle">Öğrencilerin %80'i (20/25)</text>
  <text x="235" y="100" font-size="11" fill="currentColor" text-anchor="middle">8 saatin solunda</text>
  <!-- Alt Özet Açıklaması -->
  <text x="380" y="348" font-size="12" fill="currentColor" text-anchor="middle">Dağılım yaklaşık simetrik · Uç değer yok · Öğrencilerin büyük çoğunluğu 8 saatten az uyumuş</text>
</svg>

Okuma: "Öğrencilerin çoğu 8 saatten az uyumuş; ortalama 6,8 saat civarında, değerler yaklaşık simetrik dağılmış. Referans çizgisinin sağında az sayıda öğrenci var."

::: {.notes}
Bir teste geçmeden önce her zaman grafiğe bakarız; grafik varsayımları kontrol etmemizi de sağlar. Burada öğrencilerin çoğunun referans değerin altında kaldığı, dağılımın aşırı çarpık olmadığı ve belirgin uç değer bulunmadığı görülüyor.

Grafikten çıkan izlenim "öğrenciler önerilenden az uyuyor" yönünde. Test, bu izlenimin 25 kişilik bir örneklemin şans eseri oynamasıyla açıklanıp açıklanamayacağını söyleyecek.
:::

---

## Tek örneklem t-testi

H0: μ = 8 · H1: μ ≠ 8

n = 25, *M* = 6,8, *SD* = 1,5

$$
t = \frac{6{,}8 - 8}{0{,}3} = -4{,}00
$$

> t, farkın **kaç standart hata** olduğunu söyler.

::: {.notes}
Hesap, önceki notta yaptığımızın aynısıdır. Örneklem ortalamasının standart hatası $SH = 1{,}5 / \sqrt{25} = 0{,}3$ saattir: 25 öğrencinin ortalaması tipik olarak bu kadar oynar. Gözlenen fark ise 6,8 − 8 = −1,2 saattir. Fark, standart hatanın dört katıdır; t istatistiği tam olarak bu oranı verir.

t'nin işareti farkın yönünü, büyüklüğü ise farkın ortalamanın doğal oynamasına göre ne kadar büyük olduğunu gösterir. t = −4, örneklem ortalamasının referansın dört standart hata altında olduğu anlamına gelir. 9. notta ortalamadan yaklaşık iki standart sapma uzaktaki değerlerin nadir olduğunu görmüştük; ortalamalar için aynı ölçü iki standart hatadır. Yaklaşık ±2 standart hatadan uzak farklar nadirdir, bu yüzden −4,00 çok uç bir değerdir.
:::

---

## Neden "t", neden "z" değil?

- Evrenin standart sapmasını **bilmiyoruz**; örneklemden **tahmin** ediyoruz.
- Bu ek belirsizlik, küçük örneklemlerde daha **kalın kuyruklu** bir dağılım üretir: **t dağılımı**.
- t dağılımının biçimi **serbestlik derecesine** bağlıdır (sd; jamovi'de df): tek örneklemde sd = n − 1 = 24.
- n büyüdükçe t dağılımı normal dağılıma yaklaşır.

<div data-anim="custom" data-src="t-ve-normal.js" data-css="t-ve-normal.css"></div>

::: {.notes}
Standart hatayı hesaplarken örneklemin standart sapmasını kullandık; evrenin gerçek standart sapmasını bilmiyoruz. Küçük bir örneklemde bu tahmin de oynar ve bu ek belirsizlik, normal dağılımdan biraz daha kalın kuyruklu bir dağılımla hesaba katılır. Bu dağılıma t dağılımı denir ve p değeri bu dağılımdan hesaplanır.

t dağılımının ne kadar kalın kuyruklu olduğu serbestlik derecesine bağlıdır. Tek örneklem t-testinde serbestlik derecesi örneklem büyüklüğünün bir eksiğidir. Bu ayrıntıyı elle kullanmayacağız; yazılım hesaplar ve rapora yazarız. Bilmeniz gereken şu: küçük örneklemlerde aynı farkın anlamlı çıkması daha zordur ve örneklem büyüdükçe t dağılımı normal dağılıma yaklaşır.
:::

---

## Sonuç ve etki büyüklüğü

t(24) = −4,00, *p* < 0,001

%95 güven aralığı (evren ortalaması için makul değerler): 6,18 – 7,42 saat

8 saat bu aralığın dışında → H0 reddiyle uyumlu.

$$
d = \frac{6{,}8 - 8}{1{,}5} = -0{,}80
$$

| *d* (mutlak değer) | Kaba yorum |
|---:|---|
| 0,2 | Küçük |
| 0,5 | Orta |
| 0,8 | Büyük |

::: {.notes}
p değeri 0,001'in altındadır (t'nin yanındaki 24, yukarıda gördüğümüz serbestlik derecesidir; yazılım t'nin yanında verir). H0 reddedilir. Öğrencilerin ortalama uyku süresi 8 saatten anlamlı olarak farklıdır.

p farkın büyüklüğünü ayrı bir sayıya bırakır; iki ek bilgi daha raporlanır. %95 güven aralığı, evren ortalamasının makul değerler aralığıdır. Bu örnekte aralık 6,18 ile 7,42 saattir ve 8'i içermez. Aynı aralık 8 saatten fark olarak [−1,82; −0,58] saattir; sıfırı içermez. Cohen's d ise farkı standart sapma cinsinden verir: fark, öğrenciler arasındaki tipik farklılığın 0,8 katıdır; geleneksel ölçütlere göre büyük bir etki.

Cohen'in 0,2–0,5–0,8 ölçütleri kaba yön göstericilerdir; bir etkinin önemli olup olmadığı alana ve bağlama göre değerlendirilir. Günde 1,2 saat eksik uyku, psikolojik açıdan ciddiye alınacak bir farktır.
:::

---

## İki grup: grafiğe bakmadan karar vermeyin

<svg viewBox="0 0 960 370" role="img" aria-label="İki grubun karşılaştırıldığı üç durum: 1. panelde ortalamalar belirgin biçimde ayrı ve yayılımlar dar; 2. panelde ortalamalar neredeyse aynı ve dağılımlar üst üste; 3. panelde ortalamalar yakın fakat bir grubun yayılımı çok daha büyük." style="width:100%;max-height:440px">
  <!-- Üst Genel Lejant -->
  <rect x="385" y="14" width="16" height="12" fill="var(--anim-blue)" fill-opacity="0.4" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <text x="408" y="24" font-size="12" fill="currentColor">Grup 1</text>
  <rect x="480" y="14" width="16" height="12" fill="var(--anim-amber)" fill-opacity="0.4" stroke="var(--anim-amber)" stroke-width="1.5"/>
  <text x="503" y="24" font-size="12" fill="currentColor">Grup 2</text>
  <!-- ==================== PANEL 1: Belirgin fark, dar yayılım ==================== -->
  <text x="170" y="52" font-size="13" font-weight="bold" fill="currentColor" text-anchor="middle">1. Belirgin Fark, Dar Yayılım</text>
  <text x="170" y="68" font-size="11" fill="currentColor" text-anchor="middle">Ortalamalar uzak · Örtüşme neredeyse yok</text>
  <!-- Panel 1 Eksenleri -->
  <line x1="60" y1="95" x2="60" y2="230" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="230" x2="280" y2="230" stroke="currentColor" stroke-width="1.5"/>
  <line x1="104" y1="230" x2="104" y2="236" stroke="currentColor" stroke-width="1.2"/>
  <line x1="148" y1="230" x2="148" y2="236" stroke="currentColor" stroke-width="1.2"/>
  <line x1="192" y1="230" x2="192" y2="236" stroke="currentColor" stroke-width="1.2"/>
  <line x1="236" y1="230" x2="236" y2="236" stroke="currentColor" stroke-width="1.2"/>
  <text x="104" y="248" font-size="10" fill="currentColor" text-anchor="middle">20</text>
  <text x="148" y="248" font-size="10" fill="currentColor" text-anchor="middle">40</text>
  <text x="192" y="248" font-size="10" fill="currentColor" text-anchor="middle">60</text>
  <text x="236" y="248" font-size="10" fill="currentColor" text-anchor="middle">80</text>
  <text x="170" y="262" font-size="10" fill="currentColor" text-anchor="middle">Ölçüm puanı</text>
  <text x="48" y="160" font-size="10" fill="currentColor" text-anchor="middle" transform="rotate(-90 48 160)">Frekans</text>
  <!-- Panel 1 Grup 1 (M = 35 civarı, dar) -->
  <rect x="107" y="200" width="15" height="30" fill="var(--anim-blue)" fill-opacity="0.35" stroke="var(--anim-blue)" stroke-width="1.2"/>
  <rect x="122" y="145" width="15" height="85" fill="var(--anim-blue)" fill-opacity="0.35" stroke="var(--anim-blue)" stroke-width="1.2"/>
  <rect x="137" y="110" width="15" height="120" fill="var(--anim-blue)" fill-opacity="0.35" stroke="var(--anim-blue)" stroke-width="1.2"/>
  <rect x="152" y="145" width="15" height="85" fill="var(--anim-blue)" fill-opacity="0.35" stroke="var(--anim-blue)" stroke-width="1.2"/>
  <rect x="167" y="200" width="15" height="30" fill="var(--anim-blue)" fill-opacity="0.35" stroke="var(--anim-blue)" stroke-width="1.2"/>
  <line x1="144" y1="96" x2="144" y2="230" stroke="var(--anim-blue)" stroke-width="2" stroke-dasharray="3 3"/>
  <text x="144" y="90" font-size="11" font-weight="bold" fill="var(--anim-blue)" text-anchor="middle">M₁</text>
  <!-- Panel 1 Grup 2 (M = 75 civarı, dar) -->
  <rect x="195" y="200" width="15" height="30" fill="var(--anim-amber)" fill-opacity="0.35" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <rect x="210" y="145" width="15" height="85" fill="var(--anim-amber)" fill-opacity="0.35" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <rect x="225" y="110" width="15" height="120" fill="var(--anim-amber)" fill-opacity="0.35" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <rect x="240" y="145" width="15" height="85" fill="var(--anim-amber)" fill-opacity="0.35" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <rect x="255" y="200" width="15" height="30" fill="var(--anim-amber)" fill-opacity="0.35" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <line x1="232" y1="96" x2="232" y2="230" stroke="var(--anim-amber)" stroke-width="2" stroke-dasharray="3 3"/>
  <text x="232" y="90" font-size="11" font-weight="bold" fill="var(--anim-amber)" text-anchor="middle">M₂</text>
  <!-- Panel 1 Kart -->
  <rect x="35" y="278" width="270" height="78" rx="6" fill="none" stroke="currentColor" stroke-opacity="0.25"/>
  <text x="170" y="298" font-size="11" font-weight="bold" fill="var(--anim-green)" text-anchor="middle">Fark gerçek görünür</text>
  <text x="170" y="316" font-size="11" fill="currentColor" text-anchor="middle">Ortalama farkı büyük, yayılımlar dar</text>
  <text x="170" y="334" font-size="11" fill="currentColor" text-anchor="middle">Gruplar ayrışmış · Yüksek etki büyüklüğü</text>
  <!-- ==================== PANEL 2: Ortalamalar aynı, üst üste ==================== -->
  <text x="480" y="52" font-size="13" font-weight="bold" fill="currentColor" text-anchor="middle">2. Ortalamalar Aynı, Üst Üste</text>
  <text x="480" y="68" font-size="11" fill="currentColor" text-anchor="middle">Ortalamalar çakışık · Yüksek örtüşme</text>
  <!-- Panel 2 Eksenleri -->
  <line x1="370" y1="95" x2="370" y2="230" stroke="currentColor" stroke-width="1.5"/>
  <line x1="370" y1="230" x2="590" y2="230" stroke="currentColor" stroke-width="1.5"/>
  <line x1="414" y1="230" x2="414" y2="236" stroke="currentColor" stroke-width="1.2"/>
  <line x1="458" y1="230" x2="458" y2="236" stroke="currentColor" stroke-width="1.2"/>
  <line x1="502" y1="230" x2="502" y2="236" stroke="currentColor" stroke-width="1.2"/>
  <line x1="546" y1="230" x2="546" y2="236" stroke="currentColor" stroke-width="1.2"/>
  <text x="414" y="248" font-size="10" fill="currentColor" text-anchor="middle">20</text>
  <text x="458" y="248" font-size="10" fill="currentColor" text-anchor="middle">40</text>
  <text x="502" y="248" font-size="10" fill="currentColor" text-anchor="middle">60</text>
  <text x="546" y="248" font-size="10" fill="currentColor" text-anchor="middle">80</text>
  <text x="480" y="262" font-size="10" fill="currentColor" text-anchor="middle">Ölçüm puanı</text>
  <text x="358" y="160" font-size="10" fill="currentColor" text-anchor="middle" transform="rotate(-90 358 160)">Frekans</text>
  <!-- Panel 2 Grup 1 (M = 50) -->
  <rect x="420" y="205" width="15" height="25" fill="var(--anim-blue)" fill-opacity="0.35" stroke="var(--anim-blue)" stroke-width="1.2"/>
  <rect x="435" y="165" width="15" height="65" fill="var(--anim-blue)" fill-opacity="0.35" stroke="var(--anim-blue)" stroke-width="1.2"/>
  <rect x="450" y="125" width="15" height="105" fill="var(--anim-blue)" fill-opacity="0.35" stroke="var(--anim-blue)" stroke-width="1.2"/>
  <rect x="465" y="105" width="15" height="125" fill="var(--anim-blue)" fill-opacity="0.35" stroke="var(--anim-blue)" stroke-width="1.2"/>
  <rect x="480" y="128" width="15" height="102" fill="var(--anim-blue)" fill-opacity="0.35" stroke="var(--anim-blue)" stroke-width="1.2"/>
  <rect x="495" y="168" width="15" height="62" fill="var(--anim-blue)" fill-opacity="0.35" stroke="var(--anim-blue)" stroke-width="1.2"/>
  <rect x="510" y="205" width="15" height="25" fill="var(--anim-blue)" fill-opacity="0.35" stroke="var(--anim-blue)" stroke-width="1.2"/>
  <!-- Panel 2 Grup 2 (M = 50, üst üste biniyor) -->
  <rect x="420" y="210" width="15" height="20" fill="var(--anim-amber)" fill-opacity="0.35" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <rect x="435" y="160" width="15" height="70" fill="var(--anim-amber)" fill-opacity="0.35" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <rect x="450" y="120" width="15" height="110" fill="var(--anim-amber)" fill-opacity="0.35" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <rect x="465" y="108" width="15" height="122" fill="var(--anim-amber)" fill-opacity="0.35" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <rect x="480" y="132" width="15" height="98" fill="var(--anim-amber)" fill-opacity="0.35" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <rect x="495" y="165" width="15" height="65" fill="var(--anim-amber)" fill-opacity="0.35" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <rect x="510" y="202" width="15" height="28" fill="var(--anim-amber)" fill-opacity="0.35" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <line x1="472" y1="96" x2="472" y2="230" stroke="currentColor" stroke-width="2" stroke-dasharray="3 3"/>
  <text x="472" y="90" font-size="11" font-weight="bold" fill="currentColor" text-anchor="middle">M₁ ≈ M₂</text>
  <!-- Panel 2 Kart -->
  <rect x="345" y="278" width="270" height="78" rx="6" fill="none" stroke="currentColor" stroke-opacity="0.25"/>
  <text x="480" y="298" font-size="11" font-weight="bold" fill="currentColor" text-anchor="middle">Fark şansla açıklanabilir</text>
  <text x="480" y="316" font-size="11" fill="currentColor" text-anchor="middle">Ortalamalar çakışık, dağılımlar benzer</text>
  <text x="480" y="334" font-size="11" fill="currentColor" text-anchor="middle">H₀ reddedilemez (n çok büyük değilse)</text>
  <!-- ==================== PANEL 3: Ortalamalar yakın, farklı yayılım ==================== -->
  <text x="790" y="52" font-size="13" font-weight="bold" fill="currentColor" text-anchor="middle">3. Yakın Ortalama, Farklı Yayılım</text>
  <text x="790" y="68" font-size="11" fill="currentColor" text-anchor="middle">Ortalamalar yakın · Bir grup çok daha dağınık</text>
  <!-- Panel 3 Eksenleri -->
  <line x1="680" y1="95" x2="680" y2="230" stroke="currentColor" stroke-width="1.5"/>
  <line x1="680" y1="230" x2="900" y2="230" stroke="currentColor" stroke-width="1.5"/>
  <line x1="724" y1="230" x2="724" y2="236" stroke="currentColor" stroke-width="1.2"/>
  <line x1="768" y1="230" x2="768" y2="236" stroke="currentColor" stroke-width="1.2"/>
  <line x1="812" y1="230" x2="812" y2="236" stroke="currentColor" stroke-width="1.2"/>
  <line x1="856" y1="230" x2="856" y2="236" stroke="currentColor" stroke-width="1.2"/>
  <text x="724" y="248" font-size="10" fill="currentColor" text-anchor="middle">20</text>
  <text x="768" y="248" font-size="10" fill="currentColor" text-anchor="middle">40</text>
  <text x="812" y="248" font-size="10" fill="currentColor" text-anchor="middle">60</text>
  <text x="856" y="248" font-size="10" fill="currentColor" text-anchor="middle">80</text>
  <text x="790" y="262" font-size="10" fill="currentColor" text-anchor="middle">Ölçüm puanı</text>
  <text x="668" y="160" font-size="10" fill="currentColor" text-anchor="middle" transform="rotate(-90 668 160)">Frekans</text>
  <!-- Panel 3 Grup 2 (Geniş yayılım, basık tepe) -->
  <rect x="705" y="212" width="15" height="18" fill="var(--anim-amber)" fill-opacity="0.35" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <rect x="720" y="205" width="15" height="25" fill="var(--anim-amber)" fill-opacity="0.35" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <rect x="735" y="195" width="15" height="35" fill="var(--anim-amber)" fill-opacity="0.35" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <rect x="750" y="188" width="15" height="42" fill="var(--anim-amber)" fill-opacity="0.35" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <rect x="765" y="182" width="15" height="48" fill="var(--anim-amber)" fill-opacity="0.35" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <rect x="780" y="180" width="15" height="50" fill="var(--anim-amber)" fill-opacity="0.35" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <rect x="795" y="184" width="15" height="46" fill="var(--anim-amber)" fill-opacity="0.35" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <rect x="810" y="190" width="15" height="40" fill="var(--anim-amber)" fill-opacity="0.35" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <rect x="825" y="198" width="15" height="32" fill="var(--anim-amber)" fill-opacity="0.35" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <rect x="840" y="206" width="15" height="24" fill="var(--anim-amber)" fill-opacity="0.35" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <rect x="855" y="214" width="15" height="16" fill="var(--anim-amber)" fill-opacity="0.35" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <!-- Panel 3 Grup 1 (Dar yayılım, sivri tepe) -->
  <rect x="760" y="175" width="15" height="55" fill="var(--anim-blue)" fill-opacity="0.45" stroke="var(--anim-blue)" stroke-width="1.2"/>
  <rect x="775" y="100" width="15" height="130" fill="var(--anim-blue)" fill-opacity="0.45" stroke="var(--anim-blue)" stroke-width="1.2"/>
  <rect x="790" y="175" width="15" height="55" fill="var(--anim-blue)" fill-opacity="0.45" stroke="var(--anim-blue)" stroke-width="1.2"/>
  <!-- Panel 3 Ortalama Çizgileri -->
  <line x1="782" y1="96" x2="782" y2="230" stroke="var(--anim-blue)" stroke-width="2" stroke-dasharray="3 3"/>
  <line x1="795" y1="96" x2="795" y2="230" stroke="var(--anim-amber)" stroke-width="2" stroke-dasharray="3 3"/>
  <text x="774" y="90" font-size="10" font-weight="bold" fill="var(--anim-blue)" text-anchor="middle">M₁</text>
  <text x="803" y="90" font-size="10" font-weight="bold" fill="var(--anim-amber)" text-anchor="middle">M₂</text>
  <!-- Panel 3 Kart -->
  <rect x="655" y="278" width="270" height="78" rx="6" fill="none" stroke="currentColor" stroke-opacity="0.25"/>
  <text x="790" y="298" font-size="11" font-weight="bold" fill="var(--anim-amber)" text-anchor="middle">Varyans eşitliği uyarısı</text>
  <text x="790" y="316" font-size="11" fill="currentColor" text-anchor="middle">Ortalamalar yakın ama yayılımlar çok farklı</text>
  <text x="790" y="334" font-size="11" fill="currentColor" text-anchor="middle">Student yerine Welch t-testi zorunlu</text>
</svg>

Her panel için: Ortalamalar ne kadar uzak? Gruplar ne kadar örtüşüyor? Yayılımlar benzer mi?

::: {.notes}
Üç durum düşünelim: birincisinde gruplar neredeyse hiç örtüşmüyor, ikincisinde üst üste biniyor, üçüncüsünde ortalamalar yakın ama bir grup çok daha dağınık.

Bu büyüklükteki gruplarda birinci panelin farkı gerçek görünür, ikinci panelin küçük farkı şansla açıklanabilir. Ama grafik n'yi göstermez: çok büyük gruplarda küçük bir fark da anlamlı çıkabilir (Karar 3). Üçüncü panel, birazdan göreceğimiz varyans eşitliği varsayımıyla ilgili bir uyarıdır. Bir farkın büyüklüğü grupların yayılımına göre okunur: aynı on milisaniyelik fark gruplar dar dağılıyorsa büyük, geniş dağılıyorsa küçüktür. t-testi bu karşılaştırmayı sayıya döker.
:::

---

## Bağımsız örneklem t-testi

Tepki süresi (ms), her grupta 20 kişi:

| Grup | n | *M* | *SD* |
|---|---:|---:|---:|
| Kafeinli | 20 | 480 | 50 |
| Kafeinsiz | 20 | 520 | 60 |

H0: μ₁ = μ₂ · H1: μ₁ ≠ μ₂

$$
t = \frac{\text{ortalamalar arasındaki fark}}{\text{farkın standart hatası}} = \frac{480 - 520}{17{,}5} \approx -2{,}29
$$

::: {.notes}
Bağımsız örneklem t-testinde iki ayrı grubu karşılaştırırız: her katılımcı yalnızca bir grupta bulunur. Sıfır hipotezi, iki grubun evren ortalamalarının eşit olduğunu söyler.

Mantık değişmez: fark, standart hatasına bölünür. Değişen, standart hatanın hesabıdır: artık tek bir ortalamanın değil, iki ortalama arasındaki farkın ne kadar oynadığını soruyoruz ve bu, iki grubun da yayılımına ve büyüklüğüne bağlıdır. Hesabın ayrıntısını yazılıma bırakıyoruz; burada farkın standart hatası yaklaşık 17,5 ms çıkıyor. 40 ms'lik fark bu oynamanın yaklaşık 2,3 katıdır; ±2 eşiğinin hemen dışında.
:::

---

## Sonuç

t(38) = −2,29, *p* = 0,028, *d* = −0,72

- *p* < 0,05 → H0 reddedilir.
- Kafein alanların tepki süresi ortalama 40 ms daha kısa.
- Etki orta–büyük düzeyde.
- Nedensel yorum araştırma desenine ve rastgele atamaya bağlıdır.

Serbestlik derecesi (jamovi'de df): n₁ + n₂ − 2 = 38

Ortak SD = √((50² + 60²) / 2) ≈ 55,2 ms → *d* = (480 − 520) / 55,2 ≈ −0,72

::: {.notes}
p değeri 0,028'dir; α = 0,05 düzeyinde iki grubun ortalamaları anlamlı olarak farklıdır. Kafein alan grup ortalama 40 milisaniye daha hızlı tepki vermiştir. Cohen's d farkı iki grubun ortak SD'sine böler: √((50² + 60²) / 2) ≈ 55 ms, 40 / 55 ≈ 0,72. Fark gruplardaki tipik yayılımın yaklaşık 0,7 katıdır; etki orta–büyük düzeydedir.

Bir yorum notu: bu bir deneyse, yani katılımcılar kafeinli ve kafeinsiz gruplara rastgele atandıysa, farkın kafeinden kaynaklandığı söylenebilir. Katılımcılar kendi tercihleriyle kahve içenler ve içmeyenler olarak gruplandıysa, gruplar başka açılardan da (uyku, yaş, alışkanlık) farklı olabilir; o durumda fark kafeine bağlanamaz. Testten fark çıkar; nedeni araştırma deseni belirler.
:::

---

## Varsayımlar

| Varsayım | Ne demek? | Nasıl bakılır? |
|---|---|---|
| Bağımsızlık | Her kişi tek grupta, ölçümler birbirini etkilemiyor | Araştırma deseni |
| Normallik | Her grup kendi içinde yaklaşık normal | Grup başına histogram, Q–Q grafiği, Shapiro–Wilk |
| Varyans eşitliği | Grupların yayılımı benzer | SD'leri karşılaştırma, Levene testi |

::: {.notes}
t-testinin sonuçları belirli koşullar altında güvenilirdir. Bağımsızlık en önemlisidir ve araştırma deseniyle sağlanır: aynı kişi iki grupta da bulunuyorsa ya da ölçümler eşleşmişse bu test uygun değildir; yerine ne yapılacağını bir sonraki not açıyor.

Normallik varsayımı, küçük örneklemlerde önemlidir; örneklem büyüdükçe, önceki notta gördüğümüz gibi ortalamaların dağılımı normale yaklaştığı için daha az önem taşır. Normallik her grubun kendi içinde değerlendirilir: iki grubu birleştirip tek bir histograma bakmak yanıltır, çünkü ortalamaları farklı iki grup birleşince dağılım yayvanlaşır ya da iki tepeli görünür. Varyans eşitliği bozulduğunda birkaç slayt sonraki Welch düzeltmesi kullanılır.
:::

---

## Normalliği okumak: Q–Q grafiği

<svg viewBox="0 0 960 380" role="img" aria-label="Üç farklı dağılım için histogram ve Q–Q grafikleri karşılaştırması: 1. Normal dağılımda noktalar köşegen çizgi üzerinde; 2. Sağa çarpık dağılımda noktalar sağ uçta yukarı kıvrılıyor; 3. Kalın kuyruklu dağılımda noktalar iki uçta çizgiden uzaklaşıyor." style="width:100%;max-height:450px">
  <!-- ==================== PANEL 1: Yaklaşık Normal ==================== -->
  <text x="165" y="28" font-size="13" font-weight="bold" fill="currentColor" text-anchor="middle">(1) Yaklaşık Normal</text>
  <text x="88" y="48" font-size="11" fill="currentColor" text-anchor="middle">Histogram</text>
  <text x="225" y="48" font-size="11" fill="currentColor" text-anchor="middle">Q–Q Grafiği</text>
  <!-- Panel 1: Histogram -->
  <line x1="45" y1="65" x2="45" y2="195" stroke="currentColor" stroke-width="1.2"/>
  <line x1="45" y1="195" x2="135" y2="195" stroke="currentColor" stroke-width="1.2"/>
  <line x1="45" y1="195" x2="45" y2="200" stroke="currentColor" stroke-width="1"/>
  <line x1="90" y1="195" x2="90" y2="200" stroke="currentColor" stroke-width="1"/>
  <line x1="135" y1="195" x2="135" y2="200" stroke="currentColor" stroke-width="1"/>
  <text x="45" y="210" font-size="10" fill="currentColor" text-anchor="middle">−2s</text>
  <text x="90" y="210" font-size="10" fill="currentColor" text-anchor="middle">0</text>
  <text x="135" y="210" font-size="10" fill="currentColor" text-anchor="middle">+2s</text>
  <rect x="50" y="177" width="14" height="18" fill="var(--anim-blue)" fill-opacity="0.3" stroke="var(--anim-blue)" stroke-width="1.2"/>
  <rect x="66" y="140" width="14" height="55" fill="var(--anim-blue)" fill-opacity="0.3" stroke="var(--anim-blue)" stroke-width="1.2"/>
  <rect x="82" y="100" width="14" height="95" fill="var(--anim-blue)" fill-opacity="0.3" stroke="var(--anim-blue)" stroke-width="1.2"/>
  <rect x="98" y="140" width="14" height="55" fill="var(--anim-blue)" fill-opacity="0.3" stroke="var(--anim-blue)" stroke-width="1.2"/>
  <rect x="114" y="177" width="14" height="18" fill="var(--anim-blue)" fill-opacity="0.3" stroke="var(--anim-blue)" stroke-width="1.2"/>
  <!-- Panel 1: Q-Q Plot -->
  <line x1="175" y1="65" x2="175" y2="195" stroke="currentColor" stroke-width="1.2"/>
  <line x1="175" y1="195" x2="275" y2="195" stroke="currentColor" stroke-width="1.2"/>
  <line x1="175" y1="195" x2="175" y2="200" stroke="currentColor" stroke-width="1"/>
  <line x1="225" y1="195" x2="225" y2="200" stroke="currentColor" stroke-width="1"/>
  <line x1="275" y1="195" x2="275" y2="200" stroke="currentColor" stroke-width="1"/>
  <text x="175" y="210" font-size="10" fill="currentColor" text-anchor="middle">−2</text>
  <text x="225" y="210" font-size="10" fill="currentColor" text-anchor="middle">0</text>
  <text x="275" y="210" font-size="10" fill="currentColor" text-anchor="middle">+2</text>
  <text x="225" y="222" font-size="10" fill="currentColor" text-anchor="middle">Teorik (z)</text>
  <!-- Referans Çizgisi ve Noktalar (Çizgiye Tam Uyum) -->
  <line x1="182" y1="188" x2="268" y2="102" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3" stroke-opacity="0.6"/>
  <circle cx="186" cy="184" r="3.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="194" cy="175" r="3.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="202" cy="168" r="3.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="210" cy="159" r="3.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="218" cy="151" r="3.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="225" cy="145" r="3.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="232" cy="138" r="3.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="240" cy="130" r="3.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="248" cy="122" r="3.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="256" cy="114" r="3.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <circle cx="264" cy="106" r="3.5" fill="var(--anim-blue)" stroke="currentColor" stroke-width="1"/>
  <!-- Panel 1 Kart -->
  <rect x="25" y="235" width="270" height="125" rx="6" fill="none" stroke="currentColor" stroke-opacity="0.25"/>
  <text x="160" y="258" font-size="12" font-weight="bold" fill="var(--anim-green)" text-anchor="middle">Yaklaşık Normal Dağılım</text>
  <text x="160" y="280" font-size="11" fill="currentColor" text-anchor="middle">Histogram: Simetrik çan eğrisi</text>
  <text x="160" y="298" font-size="11" fill="currentColor" text-anchor="middle">Q–Q: Noktalar köşegen çizgi üzerinde</text>
  <text x="160" y="320" font-size="11" fill="currentColor" text-anchor="middle">Normallik varsayımı sağlanır</text>
  <text x="160" y="340" font-size="11" font-weight="bold" fill="currentColor" text-anchor="middle">Student / Welch t-testi güvenilir</text>
  <!-- ==================== PANEL 2: Sağa Çarpık ==================== -->
  <text x="490" y="28" font-size="13" font-weight="bold" fill="currentColor" text-anchor="middle">(2) Sağa Çarpık</text>
  <text x="415" y="48" font-size="11" fill="currentColor" text-anchor="middle">Histogram</text>
  <text x="550" y="48" font-size="11" fill="currentColor" text-anchor="middle">Q–Q Grafiği</text>
  <!-- Panel 2: Histogram -->
  <line x1="370" y1="65" x2="370" y2="195" stroke="currentColor" stroke-width="1.2"/>
  <line x1="370" y1="195" x2="460" y2="195" stroke="currentColor" stroke-width="1.2"/>
  <line x1="370" y1="195" x2="370" y2="200" stroke="currentColor" stroke-width="1"/>
  <line x1="415" y1="195" x2="415" y2="200" stroke="currentColor" stroke-width="1"/>
  <line x1="460" y1="195" x2="460" y2="200" stroke="currentColor" stroke-width="1"/>
  <text x="370" y="210" font-size="10" fill="currentColor" text-anchor="middle">Düşük</text>
  <text x="415" y="210" font-size="10" fill="currentColor" text-anchor="middle">Orta</text>
  <text x="460" y="210" font-size="10" fill="currentColor" text-anchor="middle">Yüksek</text>
  <rect x="375" y="100" width="14" height="95" fill="var(--anim-amber)" fill-opacity="0.3" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <rect x="391" y="130" width="14" height="65" fill="var(--anim-amber)" fill-opacity="0.3" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <rect x="407" y="157" width="14" height="38" fill="var(--anim-amber)" fill-opacity="0.3" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <rect x="423" y="175" width="14" height="20" fill="var(--anim-amber)" fill-opacity="0.3" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <rect x="439" y="185" width="14" height="10" fill="var(--anim-amber)" fill-opacity="0.3" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <!-- Panel 2: Q-Q Plot -->
  <line x1="500" y1="65" x2="500" y2="195" stroke="currentColor" stroke-width="1.2"/>
  <line x1="500" y1="195" x2="600" y2="195" stroke="currentColor" stroke-width="1.2"/>
  <line x1="500" y1="195" x2="500" y2="200" stroke="currentColor" stroke-width="1"/>
  <line x1="550" y1="195" x2="550" y2="200" stroke="currentColor" stroke-width="1"/>
  <line x1="600" y1="195" x2="600" y2="200" stroke="currentColor" stroke-width="1"/>
  <text x="500" y="210" font-size="10" fill="currentColor" text-anchor="middle">−2</text>
  <text x="550" y="210" font-size="10" fill="currentColor" text-anchor="middle">0</text>
  <text x="600" y="210" font-size="10" fill="currentColor" text-anchor="middle">+2</text>
  <text x="550" y="222" font-size="10" fill="currentColor" text-anchor="middle">Teorik (z)</text>
  <!-- Referans Çizgisi ve Noktalar (Sağ Uçta Yukarı Kıvrılma) -->
  <line x1="508" y1="188" x2="592" y2="104" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3" stroke-opacity="0.6"/>
  <circle cx="512" cy="183" r="3.5" fill="var(--anim-amber)" stroke="currentColor" stroke-width="1"/>
  <circle cx="520" cy="176" r="3.5" fill="var(--anim-amber)" stroke="currentColor" stroke-width="1"/>
  <circle cx="528" cy="169" r="3.5" fill="var(--anim-amber)" stroke="currentColor" stroke-width="1"/>
  <circle cx="536" cy="160" r="3.5" fill="var(--anim-amber)" stroke="currentColor" stroke-width="1"/>
  <circle cx="544" cy="150" r="3.5" fill="var(--anim-amber)" stroke="currentColor" stroke-width="1"/>
  <circle cx="552" cy="138" r="3.5" fill="var(--anim-amber)" stroke="currentColor" stroke-width="1"/>
  <circle cx="560" cy="122" r="3.5" fill="var(--anim-amber)" stroke="currentColor" stroke-width="1"/>
  <circle cx="568" cy="100" r="3.5" fill="var(--anim-amber)" stroke="currentColor" stroke-width="1"/>
  <circle cx="576" cy="74" r="3.5" fill="var(--anim-amber)" stroke="currentColor" stroke-width="1"/>
  <circle cx="584" cy="48" r="3.5" fill="var(--anim-amber)" stroke="currentColor" stroke-width="1"/>
  <path d="M 565,68 Q 572,70 577,65" fill="none" stroke="var(--anim-red)" stroke-width="1.5"/>
  <text x="548" y="62" font-size="10" font-weight="bold" fill="var(--anim-red)">Yukarı kıvrılma</text>
  <!-- Panel 2 Kart -->
  <rect x="350" y="235" width="270" height="125" rx="6" fill="none" stroke="currentColor" stroke-opacity="0.25"/>
  <text x="485" y="258" font-size="12" font-weight="bold" fill="var(--anim-amber)" text-anchor="middle">Sağa Çarpık Dağılım</text>
  <text x="485" y="280" font-size="11" fill="currentColor" text-anchor="middle">Histogram: Sağda uzun ince kuyruk</text>
  <text x="485" y="298" font-size="11" fill="currentColor" text-anchor="middle">Q–Q: Sağ uçta çizginin yukarısına kıvrılma</text>
  <text x="485" y="320" font-size="11" fill="currentColor" text-anchor="middle">Küçük örneklemde ortalama ve t sapar</text>
  <text x="485" y="340" font-size="11" font-weight="bold" fill="currentColor" text-anchor="middle">Dönüşüm veya sıra testi (Mann–Whitney U)</text>
  <!-- ==================== PANEL 3: Kalın Kuyruk ==================== -->
  <text x="815" y="28" font-size="13" font-weight="bold" fill="currentColor" text-anchor="middle">(3) Kalın Kuyruk</text>
  <text x="740" y="48" font-size="11" fill="currentColor" text-anchor="middle">Histogram</text>
  <text x="875" y="48" font-size="11" fill="currentColor" text-anchor="middle">Q–Q Grafiği</text>
  <!-- Panel 3: Histogram -->
  <line x1="695" y1="65" x2="695" y2="195" stroke="currentColor" stroke-width="1.2"/>
  <line x1="695" y1="195" x2="785" y2="195" stroke="currentColor" stroke-width="1.2"/>
  <line x1="695" y1="195" x2="695" y2="200" stroke="currentColor" stroke-width="1"/>
  <line x1="740" y1="195" x2="740" y2="200" stroke="currentColor" stroke-width="1"/>
  <line x1="785" y1="195" x2="785" y2="200" stroke="currentColor" stroke-width="1"/>
  <text x="695" y="210" font-size="10" fill="currentColor" text-anchor="middle">−2s</text>
  <text x="740" y="210" font-size="10" fill="currentColor" text-anchor="middle">0</text>
  <text x="785" y="210" font-size="10" fill="currentColor" text-anchor="middle">+2s</text>
  <rect x="700" y="163" width="14" height="32" fill="var(--anim-purple)" fill-opacity="0.3" stroke="var(--anim-purple)" stroke-width="1.2"/>
  <rect x="716" y="159" width="14" height="36" fill="var(--anim-purple)" fill-opacity="0.3" stroke="var(--anim-purple)" stroke-width="1.2"/>
  <rect x="732" y="95" width="14" height="100" fill="var(--anim-purple)" fill-opacity="0.3" stroke="var(--anim-purple)" stroke-width="1.2"/>
  <rect x="748" y="159" width="14" height="36" fill="var(--anim-purple)" fill-opacity="0.3" stroke="var(--anim-purple)" stroke-width="1.2"/>
  <rect x="764" y="163" width="14" height="32" fill="var(--anim-purple)" fill-opacity="0.3" stroke="var(--anim-purple)" stroke-width="1.2"/>
  <!-- Panel 3: Q-Q Plot -->
  <line x1="825" y1="65" x2="825" y2="195" stroke="currentColor" stroke-width="1.2"/>
  <line x1="825" y1="195" x2="925" y2="195" stroke="currentColor" stroke-width="1.2"/>
  <line x1="825" y1="195" x2="825" y2="200" stroke="currentColor" stroke-width="1"/>
  <line x1="875" y1="195" x2="875" y2="200" stroke="currentColor" stroke-width="1"/>
  <line x1="925" y1="195" x2="925" y2="200" stroke="currentColor" stroke-width="1"/>
  <text x="825" y="210" font-size="10" fill="currentColor" text-anchor="middle">−2</text>
  <text x="875" y="210" font-size="10" fill="currentColor" text-anchor="middle">0</text>
  <text x="925" y="210" font-size="10" fill="currentColor" text-anchor="middle">+2</text>
  <text x="875" y="222" font-size="10" fill="currentColor" text-anchor="middle">Teorik (z)</text>
  <!-- Referans Çizgisi ve Noktalar (İki Uçta Dışa Açılma / S-Biçimi) -->
  <line x1="832" y1="188" x2="918" y2="102" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3" stroke-opacity="0.6"/>
  <circle cx="836" cy="198" r="3.5" fill="var(--anim-purple)" stroke="currentColor" stroke-width="1"/>
  <circle cx="844" cy="188" r="3.5" fill="var(--anim-purple)" stroke="currentColor" stroke-width="1"/>
  <circle cx="854" cy="166" r="3.5" fill="var(--anim-purple)" stroke="currentColor" stroke-width="1"/>
  <circle cx="865" cy="153" r="3.5" fill="var(--anim-purple)" stroke="currentColor" stroke-width="1"/>
  <circle cx="875" cy="145" r="3.5" fill="var(--anim-purple)" stroke="currentColor" stroke-width="1"/>
  <circle cx="885" cy="135" r="3.5" fill="var(--anim-purple)" stroke="currentColor" stroke-width="1"/>
  <circle cx="896" cy="122" r="3.5" fill="var(--anim-purple)" stroke="currentColor" stroke-width="1"/>
  <circle cx="906" cy="90" r="3.5" fill="var(--anim-purple)" stroke="currentColor" stroke-width="1"/>
  <circle cx="914" cy="70" r="3.5" fill="var(--anim-purple)" stroke="currentColor" stroke-width="1"/>
  <text x="815" y="78" font-size="10" font-weight="bold" fill="var(--anim-red)">İki uçta sapma</text>
  <text x="815" y="90" font-size="10" fill="var(--anim-red)">(S-biçimi)</text>
  <!-- Panel 3 Kart -->
  <rect x="675" y="235" width="270" height="125" rx="6" fill="none" stroke="currentColor" stroke-opacity="0.25"/>
  <text x="810" y="258" font-size="12" font-weight="bold" fill="var(--anim-purple)" text-anchor="middle">Kalın Kuyruklu Dağılım</text>
  <text x="810" y="280" font-size="11" fill="currentColor" text-anchor="middle">Histogram: Uçlarda beklenenden fazla veri</text>
  <text x="810" y="298" font-size="11" fill="currentColor" text-anchor="middle">Q–Q: İki uçta çizgiden uzaklaşma (S-biçimi)</text>
  <text x="810" y="320" font-size="11" fill="currentColor" text-anchor="middle">Uç değerler standart hatayı şişirir</text>
  <text x="810" y="340" font-size="11" font-weight="bold" fill="currentColor" text-anchor="middle">Uç değer incelemesi ve Welch testi</text>
</svg>

- Noktalar **köşegen üzerinde** → yaklaşık normal
- Uçlarda **sistemli kıvrılma** → çarpıklık ya da kalın kuyruk
- Shapiro–Wilk: *p* < 0,05 → normallikten anlamlı sapma (büyük örneklemde çok hassas, küçükte çok zayıf)

::: {.notes}
Q–Q grafiği, verideki değerleri normal dağılımdan beklenen değerlerle karşılaştırır. Yatay eksende normal dağılımın bekleyeceği değerler, dikey eksende gerçek değerler yer alır. Veri normal dağılıyorsa noktalar köşegen bir çizgi üzerinde dizilir; noktalar çizgiye ne kadar yakınsa dağılım normale o kadar yakındır. Küçük örneklemde normal veride bile noktalar çizgiden biraz sapar; aranan tek tek sapma değil, sistematik bir eğridir (kıvrılma, S biçimi). Sağa çarpık bir veride üst uçtaki noktalar çizginin yukarısına doğru kıvrılır; kalın kuyruklu bir veride iki uçtaki noktalar çizgiden uzaklaşır. 9. notta histogramla tarif ettiğimiz biçimler, burada çizgiden sapmalar olarak görünür.

Shapiro–Wilk testi aynı soruyu bir p değeriyle cevaplar. Ama bu testin sonucu örneklem büyüklüğüne çok bağlıdır: çok büyük örneklemlerde önemsiz sapmalar bile anlamlı çıkar, küçük örneklemlerde ise ciddi sapmalar gözden kaçabilir. Normallik kararını grafik ve örneklem büyüklüğü birlikte verir.
:::

---

## Varyanslar eşit değilse: Welch

| | Student t-testi | Welch t-testi |
|---|---|---|
| Varyans eşitliği varsayar mı? | Evet | Hayır |
| Bu örnekte | t(38) = −2,29, *p* = 0,028 | t(36,8) = −2,29, *p* = 0,028 |

Varyanslar ve grup büyüklükleri **farklıysa** sonuçlar ayrışabilir. Pek çok kaynak Welch'i varsayılan olarak önerir.

Levene anlamlı çıkmazsa varyansların eşit olduğu kanıtlanmış olmaz: reddedememek kabul etmek değildir.

::: {.notes}
Klasik (Student) t-testi, iki grubun evren varyanslarının eşit olduğunu varsayar. Welch t-testi bu varsayımı yapmaz ve serbestlik derecesini buna göre ayarlar; bu yüzden ondalıklı bir serbestlik derecesi görürsünüz.

Bu örnekte iki grup eşit büyüklükte ve standart sapmalar birbirine yakın; iki test neredeyse aynı sonucu veriyor. Grup büyüklükleri ve yayılımlar birbirinden belirgin biçimde farklı olduğunda ise sonuçlar ayrışabilir ve Student testi yanıltıcı olabilir. Welch testinin, varyanslar eşit olduğunda bile çok az şey kaybettirmesi nedeniyle birçok kaynak onu varsayılan seçenek olarak önerir. Baştan Welch'i kullanırsanız Levene sonucuna göre test değiştirmeniz gerekmez; hangisini kullandığınızı raporda belirtmek yeter.

Levene testi varyans eşitliğini sınar; baştan Welch kullanıyorsak bize yalnızca varyansların gerçekten ayrışıp ayrışmadığını gösterir. Büyük örneklemde küçük bir yayılım farkı bile anlamlı çıkar, bu yüzden SD'lere de bakarız. Anlamlı çıkmaması ise eşitliği kanıtlamaz, çünkü reddedememek kabul etmek değildir.
:::

---

## jamovi'de t-testleri

**Tek örneklem:** *T-Tests → One Sample T-Test* → *Test value*: 8

**Bağımsız örneklem:** *T-Tests → Independent Samples T-Test*

- *Dependent Variables*: tepki süresi · *Grouping Variable*: grup
- *Tests*: Student's, Welch's · *Additional Statistics*: Effect size, Confidence interval, Descriptives, Descriptives plots
- *Assumption Checks*: Homogeneity (Levene testi), Normality (Shapiro–Wilk), Q–Q plot

::: {.callout-note title="Görsel yer tutucu: Bağımsız örneklem t-testi çıktısı"}
**Tür:** ekran görüntüsü · **Gösterdiği:** jamovi'de bağımsız örneklem t-testi çıktısı: test tablosu (Student ve Welch satırları; t, df, p, Cohen's d), varsayım tabloları (Levene, Shapiro–Wilk), grup betimsel istatistikleri ve ortalama + güven aralığı grafiği · **Öğrencinin görmesi gereken:** Rapora girecek her sayının tablodaki yeri.
:::

::: {.notes}
jamovi'de iki test de T-Tests menüsündedir. Bağımsız örneklem testinde veri dosyası uzun biçimdedir: bir sütunda ölçülen değişken, bir sütunda kişinin hangi grupta olduğu. Ek seçeneklerden etki büyüklüğünü, güven aralığını, betimsel istatistikleri ve varsayım kontrollerini işaretlemek, rapor için gereken bütün sayıları tek çıktıda toplar.

Tek örneklemde jamovi referans değeri 8 için farkın GA'sını [−1,82; −0,58] olarak gösterir. Ortalamanın [6,18; 7,42] aralığına ulaşmak için fark aralığının iki ucuna 8 eklenir. Çıktıyı okurken önce betimsel istatistiklere ve grafiğe bakın (grupların ortalamaları ve yayılımları), sonra varsayım tablolarına, en son test tablosuna.
:::

---

## Raporlamak

> Öğrencilerin uyku süresi (*M* = 6,80, *SD* = 1,50) önerilen 8 saatten anlamlı olarak düşüktü, *t*(24) = −4,00, *p* < 0,001, *d* = −0,80, ortalama için %95 GA [6,18; 7,42] saat.

> Kafein alan katılımcıların tepki süresi (*M* = 480, *SD* = 50) almayanlarınkinden (*M* = 520, *SD* = 60) anlamlı olarak kısaydı, Welch *t*(36,8) = −2,29, *p* = 0,028, *d* = −0,72.

::: {.notes}
Bir t-testi raporu dört şeyi birlikte verir: grupların betimsel istatistikleri (ortalama ve standart sapma), test istatistiği ve serbestlik derecesi, p değeri ve etki büyüklüğü. Güven aralığı da eklenebilir. Sayıların yanında farkın yönünü sözle söylemek ("anlamlı olarak düşüktü") okurun sonucu doğrudan anlamasını sağlar.

p değeri 0,001'den küçükse "p < 0,001" yazılır; diğer durumlarda tam değer verilir. Welch testi kullanıldıysa bu belirtilir.
:::

---

## Karar soruları

1. Bir araştırmacı aynı öğrencilerin dönem başı ve dönem sonu kaygı puanlarını bağımsız örneklem t-testiyle karşılaştırıyor. Sorun ne?
2. t = 0,5 çıktı. Ortalamalar arasındaki fark, standart hataya göre nasıl?
3. 2.000 kişilik iki grubun ortalaması arasında 0,8 puanlık fark, *p* = 0,01, *d* = 0,08. Nasıl yorumlarsınız?
4. Levene testi anlamlı çıktı. Ne yaparsınız?

::: {.notes}
1. Aynı kişiler iki kez ölçülmüş; ölçümler bağımsız değil, eşleşmiştir. Bağımsızlık varsayımı ihlal edilmiştir. Ne yapılacağını bir sonraki not açıyor.
2. Fark, standart hatanın yalnızca yarısı kadar; ortalamanın doğal oynamasının içinde kalıyor. ±2 standart hatanın çok içinde olduğundan p büyük çıkacak, H0 reddedilemeyecektir.
3. Fark istatistiksel olarak anlamlı, ama etki büyüklüğü çok küçük. Çok büyük örneklemde çoğu bağlamda önemsiz sayılacak kadar küçük bir fark bile anlamlı çıkabilir; önemi alana göre değerlendirilir. Rapor hem anlamlılığı hem etkinin küçüklüğünü belirtmeli.
4. Varyansların eşit olmadığına işaret eder; Welch'e geçmek (ya da zaten Welch kullanıyorsanız onu raporlamak) yerindedir. Büyük örneklemde Levene küçük farklara da duyarlıdır, SD'lere de bakın.
:::

---

## Bu nottan kalanlar

- **t = fark / standart hata:** farkın kaç standart hata olduğu.
- **Tek örneklem:** bir ortalama ↔ sabit değer; **bağımsız örneklem:** iki ayrı grup.
- Önce **grafik**, sonra **varsayımlar**, en son **test**.
- Varsayımlar: bağımsızlık (desen), normallik (her grupta ayrı; histogram, Q–Q), varyans eşitliği (SD'ler, Levene; şüphede **Welch**).
- Rapor: *M*, *SD*, *t*(serbestlik derecesi), *p*, *d* (ve güven aralığı).

Mann–Whitney U gibi parametrik olmayan alternatiflerin ayrıntısı bu dersin kapsamında değildir.

**Sıradaki konu:** Aynı kişileri iki kez ölçersek ne değişir?

::: {.notes}
Bağımsızlık varsayımı bir soruyu açık bıraktı: aynı kişileri iki kez ölçersek ne değişir? Dersin ilerleyen çıkarımsal testlerinin çoğunda betimle, grafiğe bak, varsayımları kontrol et, testi yap, etki büyüklüğüyle yorumla ve raporla sırası yine karşımıza çıkacak.

Varsayımlar ciddi biçimde bozulduğunda (çok küçük örneklem ve belirgin çarpıklık gibi) sıralamaya dayanan Mann–Whitney U testi bir alternatiftir; jamovi'de aynı pencerede seçilebilir. Bu dersin kapsamında ayrıntısına girmiyoruz.
:::
