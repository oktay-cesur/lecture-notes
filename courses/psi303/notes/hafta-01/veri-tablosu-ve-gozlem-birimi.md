---
title: "Veri Tablosu: Satır, Sütun, Değişken"
subtitle: "PSİ 303 — Davranışsal İstatistik için Yazılım Uygulamaları"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-19
description: Gözlem birimi, değişken ve değer; kimlik sütunu; satırın neyi temsil ettiği; kategorik ve nicel, kesikli ve sürekli değişkenler.
execute:
  echo: false
---

## Kâğıt yığınından tabloya

Otuz öğrenci aynı formu doldurdu:

> Yaşınız? · Kaç kardeşiniz var? · Bu hafta kaç saat ders çalıştınız? · Sınava kendinizi hazır hissediyor musunuz?

Otuz ayrı kâğıt masada duruyor.

- "Hazır hissedenler daha çok mu çalışmış?"
- Bu soruyu kâğıtları tek tek çevirerek cevaplamak mümkün mü?

<svg viewBox="0 0 960 480" role="img" aria-label="Üç anket formundaki cevapların veri tablosundaki satırlara, her sorunun ise bir sütun başlığına dönüşümünü ve satır-gözlem, sütun-değişken, hücre-değer ilişkisini gösteren öğretim görseli" style="width:100%;max-height:480px">
  <defs>
    <marker id="arrow-green" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--anim-green)"/>
    </marker>
    <marker id="arrow-blue" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--anim-blue)"/>
    </marker>
  </defs>
  <!-- Bölüm Başlıkları -->
  <text x="30" y="32" font-size="15" font-weight="bold" fill="currentColor">Doldurulmuş Anket Formları (3 Kâğıt)</text>
  <text x="30" y="48" font-size="11" fill="currentColor" opacity="0.75">Her form bir öğrencinin dört soruya verdiği yanıtlardır</text>
  <text x="435" y="32" font-size="15" font-weight="bold" fill="currentColor">Veri Tablosu (Analiz Matrisi)</text>
  <text x="435" y="48" font-size="11" fill="currentColor" opacity="0.75">Her form bir satıra, her soru bir sütun başlığına dönüşür</text>
  <!-- Sorulardan Sütunlara Akış Bandı -->
  <rect x="30" y="62" width="280" height="30" rx="5" fill="var(--anim-blue)" fill-opacity="0.1" stroke="var(--anim-blue)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="170" y="81" font-size="11" font-weight="bold" fill="var(--anim-blue)" text-anchor="middle">Formdaki 4 Soru (Neyi soruyoruz?)</text>
  <line x1="316" y1="77" x2="498" y2="77" stroke="var(--anim-blue)" stroke-width="1.8" stroke-dasharray="4 3" marker-end="url(#arrow-blue)"/>
  <text x="408" y="72" font-size="11" font-weight="bold" fill="var(--anim-blue)" text-anchor="middle">Her soru bir sütun başlığına</text>
  <rect x="505" y="62" width="410" height="30" rx="5" fill="var(--anim-blue)" fill-opacity="0.12" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <text x="710" y="81" font-size="11" font-weight="bold" fill="var(--anim-blue)" text-anchor="middle">4 Sütun = 4 Değişken (Ölçülen / Sorulan Özellikler)</text>
  <!-- Tablo Başlıkları -->
  <rect x="435" y="62" width="65" height="30" rx="5" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="467" y="81" font-size="11" fill="currentColor" opacity="0.8" text-anchor="middle">Kimlik</text>
  <rect x="435" y="104" width="65" height="32" rx="4" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.2"/>
  <text x="467" y="124" font-size="12" font-weight="bold" fill="currentColor" text-anchor="middle">Kod</text>
  <rect x="505" y="104" width="75" height="32" rx="4" fill="var(--anim-blue)" fill-opacity="0.15" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <text x="542" y="124" font-size="12" font-weight="bold" fill="currentColor" text-anchor="middle">Yaş</text>
  <rect x="585" y="104" width="110" height="32" rx="4" fill="var(--anim-blue)" fill-opacity="0.15" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <text x="640" y="124" font-size="12" font-weight="bold" fill="currentColor" text-anchor="middle">Kardeş sayısı</text>
  <rect x="700" y="104" width="125" height="32" rx="4" fill="var(--anim-blue)" fill-opacity="0.15" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <text x="762" y="124" font-size="12" font-weight="bold" fill="currentColor" text-anchor="middle">Çalışma (saat)</text>
  <rect x="830" y="104" width="85" height="32" rx="4" fill="var(--anim-blue)" fill-opacity="0.15" stroke="var(--anim-blue)" stroke-width="1.5"/>
  <text x="872" y="124" font-size="12" font-weight="bold" fill="currentColor" text-anchor="middle">Hazır mı?</text>
  <!-- Orta Bölüm: Formdan Satıra Başlığı -->
  <rect x="318" y="104" width="108" height="32" rx="4" fill="var(--anim-green)" fill-opacity="0.15" stroke="var(--anim-green)" stroke-width="1.2"/>
  <text x="372" y="118" font-size="11" font-weight="bold" fill="var(--anim-green)" text-anchor="middle">1 Form ➔ 1 Satır</text>
  <text x="372" y="130" font-size="10.5" fill="var(--anim-green)" text-anchor="middle">(Gözlem Birimi)</text>
  <!-- 1. FORM (K01) -->
  <rect x="30" y="146" width="280" height="80" rx="6" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-width="1.5"/>
  <rect x="30" y="146" width="280" height="24" rx="5" fill="currentColor" fill-opacity="0.08"/>
  <text x="42" y="162" font-size="11" font-weight="bold" fill="currentColor">1. Öğrenci Formu</text>
  <rect x="238" y="149" width="64" height="18" rx="3" fill="var(--anim-amber)" fill-opacity="0.2"/>
  <text x="270" y="162" font-size="11" font-weight="bold" fill="var(--anim-amber)" text-anchor="middle">Kod: K01</text>
  <text x="42" y="187" font-size="11" fill="currentColor">1. Yaşınız? <tspan font-weight="bold" fill="var(--anim-blue)">20</tspan></text>
  <text x="42" y="209" font-size="11" fill="currentColor">2. Kardeş sayısı? <tspan font-weight="bold" fill="var(--anim-blue)">1</tspan></text>
  <text x="168" y="187" font-size="11" fill="currentColor">3. Çalışma saati? <tspan font-weight="bold" fill="var(--anim-blue)">6,5</tspan></text>
  <text x="168" y="209" font-size="11" fill="currentColor">4. Hazır mısınız? <tspan font-weight="bold" fill="var(--anim-blue)">Evet</tspan></text>
  <!-- 1. Akış Oku -->
  <line x1="316" y1="186" x2="426" y2="186" stroke="var(--anim-green)" stroke-width="2.5" marker-end="url(#arrow-green)"/>
  <rect x="336" y="174" width="72" height="24" rx="4" fill="currentColor" fill-opacity="0.05" stroke="var(--anim-green)" stroke-width="1"/>
  <text x="372" y="190" font-size="11" font-weight="bold" fill="var(--anim-green)" text-anchor="middle">1. Satır</text>
  <!-- 1. TABLO SATIRI (K01) -->
  <rect x="435" y="146" width="480" height="80" rx="6" fill="currentColor" fill-opacity="0.02" stroke="currentColor" stroke-width="1.2"/>
  <line x1="502" y1="146" x2="502" y2="226" stroke="currentColor" stroke-opacity="0.15" stroke-width="1"/>
  <line x1="582" y1="146" x2="582" y2="226" stroke="currentColor" stroke-opacity="0.15" stroke-width="1"/>
  <line x1="697" y1="146" x2="697" y2="226" stroke="currentColor" stroke-opacity="0.15" stroke-width="1"/>
  <line x1="827" y1="146" x2="827" y2="226" stroke="currentColor" stroke-opacity="0.15" stroke-width="1"/>
  <text x="467" y="191" font-size="13" font-weight="bold" fill="var(--anim-amber)" text-anchor="middle">K01</text>
  <text x="542" y="191" font-size="13" fill="currentColor" text-anchor="middle">20</text>
  <text x="640" y="191" font-size="13" fill="currentColor" text-anchor="middle">1</text>
  <text x="762" y="191" font-size="13" fill="currentColor" text-anchor="middle">6,5</text>
  <text x="872" y="191" font-size="13" fill="currentColor" text-anchor="middle">Evet</text>
  <!-- 2. FORM (K02) -->
  <rect x="30" y="236" width="280" height="80" rx="6" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-width="1.5"/>
  <rect x="30" y="236" width="280" height="24" rx="5" fill="currentColor" fill-opacity="0.08"/>
  <text x="42" y="252" font-size="11" font-weight="bold" fill="currentColor">2. Öğrenci Formu</text>
  <rect x="238" y="239" width="64" height="18" rx="3" fill="var(--anim-amber)" fill-opacity="0.2"/>
  <text x="270" y="252" font-size="11" font-weight="bold" fill="var(--anim-amber)" text-anchor="middle">Kod: K02</text>
  <text x="42" y="277" font-size="11" fill="currentColor">1. Yaşınız? <tspan font-weight="bold" fill="var(--anim-blue)">22</tspan></text>
  <text x="42" y="299" font-size="11" fill="currentColor">2. Kardeş sayısı? <tspan font-weight="bold" fill="var(--anim-blue)">3</tspan></text>
  <text x="168" y="277" font-size="11" fill="currentColor">3. Çalışma saati? <tspan font-weight="bold" fill="var(--anim-blue)">2</tspan></text>
  <text x="168" y="299" font-size="11" fill="currentColor">4. Hazır mısınız? <tspan font-weight="bold" fill="var(--anim-blue)">Hayır</tspan></text>
  <!-- 2. Akış Oku -->
  <line x1="316" y1="276" x2="426" y2="276" stroke="var(--anim-green)" stroke-width="2.5" marker-end="url(#arrow-green)"/>
  <rect x="336" y="264" width="72" height="24" rx="4" fill="currentColor" fill-opacity="0.05" stroke="var(--anim-green)" stroke-width="1"/>
  <text x="372" y="280" font-size="11" font-weight="bold" fill="var(--anim-green)" text-anchor="middle">2. Satır</text>
  <!-- 2. TABLO SATIRI (K02) -->
  <rect x="435" y="236" width="480" height="80" rx="6" fill="currentColor" fill-opacity="0.02" stroke="currentColor" stroke-width="1.2"/>
  <line x1="502" y1="236" x2="502" y2="316" stroke="currentColor" stroke-opacity="0.15" stroke-width="1"/>
  <line x1="582" y1="236" x2="582" y2="316" stroke="currentColor" stroke-opacity="0.15" stroke-width="1"/>
  <line x1="697" y1="236" x2="697" y2="316" stroke="currentColor" stroke-opacity="0.15" stroke-width="1"/>
  <line x1="827" y1="236" x2="827" y2="316" stroke="currentColor" stroke-opacity="0.15" stroke-width="1"/>
  <text x="467" y="281" font-size="13" font-weight="bold" fill="var(--anim-amber)" text-anchor="middle">K02</text>
  <text x="542" y="281" font-size="13" fill="currentColor" text-anchor="middle">22</text>
  <text x="640" y="281" font-size="13" fill="currentColor" text-anchor="middle">3</text>
  <text x="762" y="281" font-size="13" fill="currentColor" text-anchor="middle">2</text>
  <text x="872" y="281" font-size="13" fill="currentColor" text-anchor="middle">Hayır</text>
  <!-- 3. FORM (K03) -->
  <rect x="30" y="326" width="280" height="80" rx="6" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-width="1.5"/>
  <rect x="30" y="326" width="280" height="24" rx="5" fill="currentColor" fill-opacity="0.08"/>
  <text x="42" y="342" font-size="11" font-weight="bold" fill="currentColor">3. Öğrenci Formu</text>
  <rect x="238" y="329" width="64" height="18" rx="3" fill="var(--anim-amber)" fill-opacity="0.2"/>
  <text x="270" y="342" font-size="11" font-weight="bold" fill="var(--anim-amber)" text-anchor="middle">Kod: K03</text>
  <text x="42" y="367" font-size="11" fill="currentColor">1. Yaşınız? <tspan font-weight="bold" fill="var(--anim-blue)">21</tspan></text>
  <text x="42" y="389" font-size="11" fill="currentColor">2. Kardeş sayısı? <tspan font-weight="bold" fill="var(--anim-blue)">0</tspan></text>
  <text x="168" y="367" font-size="11" fill="currentColor">3. Çalışma saati? <tspan font-weight="bold" fill="var(--anim-blue)">9</tspan></text>
  <text x="168" y="389" font-size="11" fill="currentColor">4. Hazır mısınız? <tspan font-weight="bold" fill="var(--anim-blue)">Evet</tspan></text>
  <!-- 3. Akış Oku -->
  <line x1="316" y1="366" x2="426" y2="366" stroke="var(--anim-green)" stroke-width="2.5" marker-end="url(#arrow-green)"/>
  <rect x="336" y="354" width="72" height="24" rx="4" fill="currentColor" fill-opacity="0.05" stroke="var(--anim-green)" stroke-width="1"/>
  <text x="372" y="370" font-size="11" font-weight="bold" fill="var(--anim-green)" text-anchor="middle">3. Satır</text>
  <!-- 3. TABLO SATIRI (K03) -->
  <rect x="435" y="326" width="480" height="80" rx="6" fill="currentColor" fill-opacity="0.02" stroke="currentColor" stroke-width="1.2"/>
  <line x1="502" y1="326" x2="502" y2="406" stroke="currentColor" stroke-opacity="0.15" stroke-width="1"/>
  <line x1="582" y1="326" x2="582" y2="406" stroke="currentColor" stroke-opacity="0.15" stroke-width="1"/>
  <line x1="697" y1="326" x2="697" y2="406" stroke="currentColor" stroke-opacity="0.15" stroke-width="1"/>
  <line x1="827" y1="326" x2="827" y2="406" stroke="currentColor" stroke-opacity="0.15" stroke-width="1"/>
  <text x="467" y="371" font-size="13" font-weight="bold" fill="var(--anim-amber)" text-anchor="middle">K03</text>
  <text x="542" y="371" font-size="13" fill="currentColor" text-anchor="middle">21</text>
  <text x="640" y="371" font-size="13" fill="currentColor" text-anchor="middle">0</text>
  <!-- Vurgulanan Hücre (Değer Örneği) -->
  <rect x="702" y="331" width="120" height="70" rx="4" fill="var(--anim-amber)" fill-opacity="0.15" stroke="var(--anim-amber)" stroke-width="1.8"/>
  <text x="762" y="367" font-size="15" font-weight="bold" fill="var(--anim-amber)" text-anchor="middle">9</text>
  <text x="762" y="386" font-size="10.5" font-weight="bold" fill="var(--anim-amber)" text-anchor="middle">tek bir hücre</text>
  <text x="872" y="371" font-size="13" fill="currentColor" text-anchor="middle">Evet</text>
  <!-- Alt Özet Bantları (Satır · Sütun · Hücre) -->
  <rect x="30" y="424" width="280" height="38" rx="6" fill="var(--anim-green)" fill-opacity="0.12" stroke="var(--anim-green)" stroke-width="1.2"/>
  <text x="42" y="441" font-size="11.5" font-weight="bold" fill="var(--anim-green)">Satır = Gözlem Birimi</text>
  <text x="42" y="455" font-size="10.5" fill="currentColor" opacity="0.85">"Kimden söz ediyoruz?" (Her öğrenci bir satır)</text>
  <rect x="330" y="424" width="280" height="38" rx="6" fill="var(--anim-blue)" fill-opacity="0.12" stroke="var(--anim-blue)" stroke-width="1.2"/>
  <text x="342" y="441" font-size="11.5" font-weight="bold" fill="var(--anim-blue)">Sütun = Değişken</text>
  <text x="342" y="455" font-size="10.5" fill="currentColor" opacity="0.85">"Neyi soruyoruz?" (Karşılaştırma sütunla yapılır)</text>
  <rect x="630" y="424" width="285" height="38" rx="6" fill="var(--anim-amber)" fill-opacity="0.12" stroke="var(--anim-amber)" stroke-width="1.2"/>
  <text x="642" y="441" font-size="11.5" font-weight="bold" fill="var(--anim-amber)">Hücre = Değer</text>
  <text x="642" y="455" font-size="10.5" fill="currentColor" opacity="0.85">"O kişinin o soruya cevabı" (Örn. K03 saati: 9)</text>
</svg>

::: {.notes}
İlk notta anket yanıtlarından söz ettik; şimdi bu yanıtların bir tabloya nasıl girdiğine küçük bir örnekle bakalım. Toplanan veri ilk anda dağınık bir yığındır: kâğıtlar, çevrimiçi form cevapları, ölçüm kayıtları. Bu hâliyle birkaç kişiye bakmak mümkündür ama bütün grup hakkında soru sormak zordur. "Hazır hissedenler daha çok mu çalışmış?" gibi bir soruyu cevaplamak için herkesin aynı sorulara verdiği cevapları yan yana görebilmemiz gerekir.

İstatistik yazılımlarının hepsi veriyi aynı biçimde bekler: bir tablo. Önce tablonun nasıl okunduğuna, sonra sütunlardaki bilginin hangi türlerde olabileceğine bakacağız. Bu düzen basit görünür, ama dönem boyunca yapacağımız her analiz bu düzenin doğru kurulmasına dayanır.
:::

---

## Tablonun bir satırı neyi anlatır?

| Kod | Yaş | Kardeş sayısı | Çalışma (saat) | Hazır mı? |
|---|---:|---:|---:|---|
| K01 | 20 | 1 | 6,5 | Evet |
| K02 | 22 | 3 | 2 | Hayır |
| K03 | 21 | 0 | 9 | Evet |

Her satır, **bir öğrencinin** bütün cevaplarını taşıyor.

> **Gözlem birimi:** Verinin hakkında toplandığı birim; tablonun her satırı bir gözlem birimidir.

::: {.notes}
Her kâğıt bir öğrenciye aitti; tabloda her öğrenci bir satıra yazıldı. Bir satırı soldan sağa okuduğumuzda tek bir öğrencinin bütün cevaplarını görürüz: K02 yirmi iki yaşında, üç kardeşi var, bu hafta iki saat çalışmış ve kendini hazır hissetmiyor.

Hakkında bilgi topladığımız bu birime gözlem birimi diyoruz. Bu tabloda gözlem birimi öğrencidir. Gözlem biriminin ne olduğuna karar vermek, tabloyu kurmadan önce verilen ilk karardır; çünkü "kaç gözlemimiz var?" sorusunun cevabı buna bağlıdır.
:::

---

## Tablonun bir sütunu neyi anlatır?

| Kod | Yaş | Kardeş sayısı | Çalışma (saat) | Hazır mı? |
|---|---:|---:|---:|---|
| K01 | 20 | 1 | 6,5 | Evet |
| K02 | 22 | 3 | 2 | Hayır |
| K03 | 21 | 0 | 9 | Evet |

"Çalışma (saat)" sütunu: 6,5 · 2 · 9 → **aynı soruya herkesin cevabı**

> K07 formu: yaş 22, kardeş sayısı 2, hazır Evet. Bu form tabloda nasıl bir satır olur?

> **Değişken:** Gözlem birimleri arasında farklı değerler alabilen özellik; tablonun sütunları çoğunlukla birer değişkendir.
>
> **Değer:** Bir gözlem biriminin bir değişkendeki karşılığı; tablonun her hücresi bir değerdir.

::: {.notes}
Satırı yatay okuyunca bir kişiyi tanıdık. Sütunu dikey okuyunca bir özelliği bütün kişilerde görürüz: çalışma saati sütunu, üç öğrencinin bu soruya verdiği üç cevabı alt alta dizer. Karşılaştırma yapmamızı sağlayan, işte bu dikey okumadır.

Kişiden kişiye değişebilen bu özelliğe değişken diyoruz; adı da buradan gelir. Tablonun sütunları çoğunlukla birer değişkendir, istisnalara birazdan bakacağız. Bir satırla bir sütunun kesiştiği hücrede ise tek bir değer durur: K03'ün çalışma saati 9'dur.

Kısaca: satır kimden söz ettiğimizi, sütun neyi sorduğumuzu, hücre o kişinin o soruya verdiği cevabı söyler.

Bir anketi tabloya aktarırken her form bir satır, her soru bir sütun başlığı olur; başlığa sorunun kısa adı yazılır (Yaş, Kardeş sayısı, Hazır mı?). Örneğin K07 formunda yaş 22, kardeş sayısı 2 ve hazır evet işaretlendiyse tabloda K07 satırı 22, 2, Evet olarak yazılır.
:::

---

## Hızlı okuma

| Kod | Bölüm | Yaş | Kardeş sayısı | Çalışma (saat) | Hazır mı? |
|---|---|---:|---:|---:|---|
| K01 | Psikoloji | 20 | 1 | 6,5 | Evet |
| K02 | Psikoloji | 22 | 3 | 2 | Hayır |
| K03 | Psikoloji | 21 | 0 | 9 | Evet |
| K04 | Psikoloji | 20 | 2 | 4 | Hayır |
| K05 | Psikoloji | 23 | 1 | 7,5 | Evet |
| K06 | Psikoloji | 21 | 1 | 3 | Hayır |

1. Tabloda kaç gözlem, kaç değişken var?
2. "Kendini hazır hisseden" öğrencilerin çalışma saatlerine bakın. Ne fark ediyorsunuz?

::: {.notes}
1. Altı satır var, yani altı gözlem. Altı da sütun var; ama birazdan göreceğimiz iki nedenle bunların hepsi değişken gibi davranmaz: "Kod" sütunu bir özellik ölçmez, "Bölüm" sütunu ise herkeste aynıdır. Karşılaştırmada kullanabileceğimiz değişken sayısı dörttür.
2. Hazır hissedenler (K01, K03, K05) 6,5, 9 ve 7,5 saat çalışmış; hissetmeyenler (K02, K04, K06) 2, 4 ve 3 saat. Altı kişilik bir tabloda bile iki sütunu birlikte okuyunca bir örüntü görünüyor. Bu örüntünün altı kişinin ötesinde de geçerli olup olmadığı ise notun konusu değil; bu, ilk notta gördüğümüz çıkarım sorusudur.

Kâğıtlar masada dururken ilk slayttaki soruyu cevaplamak çok daha zahmetliydi. Tablonun bütün işi bu karşılaştırmayı kolaylaştırmaktır.
:::

---

## Kod sütunu: kimin satırı?

- K01, K02… isim yerine **kimlik kodu**
- Satırı formla, ikinci ölçümle ya da başka bir dosyayla eşleştirmeye yarar
- Bir **özellik** değildir, analiz edilmez

> Kod 1, 2, 3 gibi sayılar olsa da ortalaması hiçbir şey anlatmaz.

::: {.notes}
Çoğu veri tablosunun ilk sütunu bir kimlik sütunudur. Bu sütun kişinin bir özelliğini ölçmez; yalnızca satırın kime ait olduğunu işaretler. Bir yanlış giriş fark ettiğimizde kâğıt forma geri dönmek, aynı kişinin iki hafta sonraki ölçümünü doğru satıra eklemek ya da iki dosyayı birleştirmek bu kod sayesinde mümkün olur.

İsim yerine kod kullanmanın bir nedeni de gizliliktir: veri dosyası paylaşıldığında isimler doğrudan görünmez (yaş gibi bilgiler küçük gruplarda kişiyi yine tanıtabilir). İsimlerle kodları eşleştiren liste, varsa, veri dosyasından ayrı ve güvenli bir yerde tutulur.

Kimlik kodu satırı tanımlar, analize girmez. Kodlar bazen 1, 2, 3 gibi sayılardır. Yazılım bu sütunun ortalamasını hesaplamaya hazırdır; ama çıkan sayı hiçbir şey anlatmaz.
:::

---

## Herkes aynıysa değişken var mı?

Tablodaki "Bölüm" sütunu: altı kişi, hepsi **Psikoloji**.

- Bu veri içinde bölüm **değişmiyor** → bu tablo için bir değişken gibi davranmaz.
- Aynı sütun, üç bölümden öğrencilerin olduğu bir tabloda gerçek bir değişkendir.

::: {.notes}
Değişkenin tanımında "farklı değerler alabilen" ifadesi vardı. Bütün katılımcılar aynı bölümdense "Bölüm" sütunu bu veri için hiçbir karşılaştırmaya olanak vermez: "Psikoloji öğrencileri ile diğerleri farklı mı?" diye soramayız, çünkü diğerleri yoktur.

Bu sütun yine de işe yarayabilir: raporda örneklemin kimlerden oluştuğunu belgelemek için tutulur. Ama analiz açısından bir sabittir. Aynı sütun, birden çok bölümden öğrencinin katıldığı bir araştırmada ise önemli bir değişken olur. Bir özelliğin değişken olup olmadığını, o özelliğin bu veride gerçekten değişip değişmediği belirler.
:::

---

## Satır her zaman bir kişi mi?

| Araştırma | Bir satır | Neden? |
|---|---|---|
| Öğrenci anketi | Bir öğrenci | Bilgi kişiler hakkında |
| Klinik seans kayıtları | Bir seans | Her seansın süresi, tarihi, danışanın (terapiye gelen kişinin) o günkü puanı ayrı |
| Okullar arası karşılaştırma | Bir okul | Okulun öğrenci sayısı, başarı ortalaması, bulunduğu ilçe |
| İki hafta günlük tutma çalışması | Bir kişinin bir günü | Her gün için ayrı ruh hâli ve uyku kaydı |

::: {.notes}
Gözlem birimi her zaman kişi değildir; araştırma sorusunun neyle ilgili olduğuna bağlıdır.

Bir klinik, seansların süresini ve danışanların seans sonundaki puanlarını inceliyorsa her seans ayrı bir satırdır; aynı danışan on seansa geldiyse tabloda on satırı olur. Okullar arası bir karşılaştırmada satır okuldur. Günlük tutma çalışmalarında ise bir kişinin her günü ayrı bir satır olabilir.

Bu yüzden "tabloda 140 satır var" bilgisi tek başına "140 kişi katıldı" demek değildir. Satır sayısı gözlem sayısıdır; kişi sayısını öğrenmek için önce gözlem biriminin ne olduğuna bakmak gerekir.
:::

---

## Aynı kişi, üç ölçüm: iki yazım

Bir gevşeme programında kaygı (bir ölçekten alınan puan; büyük sayı daha çok kaygı) üç kez ölçülüyor: başta, 4. haftada, 8. haftada.

:::: {.columns}
::: {.column width="48%"}
**Geniş yazım:** bir satır = bir kişi

| Kod | Başta | 4. hafta | 8. hafta |
|---|---:|---:|---:|
| K01 | 32 | 27 | 21 |
| K02 | 28 | 26 | 25 |
:::

::: {.column width="52%"}
**Uzun yazım:** bir satır = bir ölçüm

| Kod | Zaman | Kaygı |
|---|---|---:|
| K01 | Başta | 32 |
| K01 | 4. hafta | 27 |
| K01 | 8. hafta | 21 |
| K02 | Başta | 28 |
| … | … | … |
:::
::::

::: {.notes}
Aynı bilgi iki biçimde yazılabilir. Geniş yazımda her kişi tek bir satırdadır ve her ölçüm zamanı ayrı bir sütundur; iki kişilik bu tabloda iki satır vardır. Uzun yazımda her ölçüm ayrı bir satırdır ve zaman bir sütunda belirtilir; aynı iki kişi altı satır tutar.

İki yazımda da bilgi aynıdır, kayıp yoktur. Fark, satırın neyi temsil ettiğindedir. Aynı kişilerin ölçümlerini yan yana karşılaştıracağımız analizlerde jamovi ve SPSS çoğunlukla geniş yazımı bekler: bir satır bir kişidir, ölçümler yan yana sütunlardır. Veriyi girmeden önce hangi analizi yapacağınızı düşünmek, dosyayı sonradan yeniden düzenleme zahmetinden kurtarır.
:::

---

## Değişkenlerin türleri

Sütunlardaki bilgiler aynı türden değil:

| Değişken | Örnek değerler | Ne tür bilgi? |
|---|---|---|
| Hazır mı? | Evet, Hayır | Bir **kategori** |
| Kardeş sayısı | 0, 1, 2, 3 | Bir **miktar** |
| Çalışma (saat) | 6,5 · 2 · 9 | Bir **miktar** |

> **Kategorik değişken:** Değerleri gruplar/sınıflar olan değişken.
>
> **Nicel değişken:** Değerleri bir miktarı ya da büyüklüğü gösteren değişken.

::: {.notes}
"Hazır mı?" sorusunun cevabı bir gruba aittir: evet diyenler ve hayır diyenler. Bu tür değişkenlere kategorik değişken diyoruz. Medeni durum, kan grubu, okunan bölüm, terapi türü de kategoriktir.

Kardeş sayısı ve çalışma saati ise "ne kadar?" sorusuna cevap verir; bir miktar bildirir. Bunlar nicel değişkenlerdir. Yaş, tepki süresi, sınav puanı, günlük ekran süresi de nicel değişkenlere örnektir.

Bu ayrım ilk bakışta açık görünür; ama bir değişkenle hangi hesapların, hangi grafiklerin ve sonraki haftalarda hangi analizlerin yapılabileceğini belirleyen ilk karardır. Kategori adlarının ortalaması alınmaz; anlamlı özet evet diyenlerin yüzdesidir.
:::

---

## Kategoriler sayıyla yazılınca

| Kod | Hazır mı? (yazı) | Hazır mı? (kod) |
|---|---|---:|
| K01 | Evet | 1 |
| K02 | Hayır | 2 |
| K03 | Evet | 1 |

1 ve 2 sayı **görünüyor**, ama hâlâ birer **kategori etiketi**.

> Sütunda sayı olması, değişkeni nicel yapmaz.

::: {.notes}
Veri girerken kategorileri çoğu zaman sayılarla kodlarız: evet için 1, hayır için 2; ya da üç terapi türü için 1, 2, 3. Bu, giriş için pratiktir. Burada 2 yalnızca "hayır" kategorisinin adıdır. Kodları ters verseydik (evet = 2, hayır = 1) bilgi hiç değişmezdi.

Bu yüzden bir değişkenin türüne sütunda yazan karakterlere bakarak değil, değerlerin neyi temsil ettiğine bakarak karar veririz. Yazılım ise sütunda sayı görünce onu kendiliğinden nicel sanabilir. Türü yazılıma nasıl bildireceğimizi uygulamada göreceğiz.
:::

---

## Nicel değişkenin iki türü

:::: {.columns}
::: {.column width="50%"}
**Kesikli:** sayarak elde edilir

- Kardeş sayısı
- Hafta içinde kaçırılan ders
- Bir testteki doğru cevap sayısı

Ara değer yok: 2 ile 3 kardeş arası yok.
:::

::: {.column width="50%"}
**Sürekli:** ölçerek elde edilir

- Boy
- Tepki süresi
- Çalışma süresi

Her iki değer arasında başka bir değer olabilir.
:::
::::

::: {.notes}
Nicel değişkenleri de kendi aralarında ikiye ayırırız. Sayarak elde ettiğimiz değişkenler kesiklidir: kardeş sayısı 2 ya da 3 olabilir, 2,4 olamaz. Doğru cevap sayısı, kaçırılan ders sayısı, bir haftadaki panik atak sayısı da böyledir.

Ölçerek elde ettiğimiz değişkenler süreklidir: iki öğrencinin boyu arasında, ne kadar yakın olurlarsa olsunlar, başka bir boy değeri bulunabilir. Tepki süresi saniyenin binde birine, hatta daha küçük birimlere bölünebilir.

Bu ayrım grafik seçerken de karşımıza çıkacak: sürekli bir değişkende neredeyse her değer bir kez göründüğü için değerleri aralıklara bölüp her aralıktaki gözlemleri sayarız.
:::

---

## Kayıt biçimi yanıltabilir

| Durum | Görünüş | Gerçek tür |
|---|---|---|
| Yaş "20, 21, 22" diye tam sayı yazılmış | Kesikli gibi | Sürekli |
| Kardeş sayısının ortalaması 1,33 çıktı | Ondalıklı | Değişken hâlâ kesikli; ondalık olan özet |
| Puan 1–5 arası Likert maddesi | Küçük tam sayılar | Tartışmalı; sonraki notta |

::: {.notes}
Bir değişkenin türünü kayıt biçimine bakarak belirlemek yanıltıcı olabilir. Yaşı bu derste sürekli sayıyoruz, çünkü ölçtüğümüz şey zamandır; yalnız kaydı tam yıla yuvarlıyoruz. Yazdığımız 21, aslında "21 ile 22 arasında bir yerde" demektir. Pratik bir sınama: iki değer arasında anlamlı bir ara değer olabiliyorsa değişken süreklidir; 21,5 yaş olabilir, 2,5 kardeş olamaz.

Tersi de olur: altı öğrencinin kardeş sayısının ortalaması 8/6 ≈ 1,33 çıkar. Kimsenin 1,33 kardeşi yoktur; ondalıklı olan grubun özetidir.

Likert tipi maddeler ("1 = Hiç katılmıyorum … 5 = Tamamen katılıyorum") ise psikolojide en sık karşılaşacağınız ve türü en çok tartışılan değişkenlerdir. Bu tartışmayı ölçme düzeyleri notuna bırakıyoruz.
:::

---

## Sınıflandıralım

Aşağıdaki değişkenler kategorik mi, nicel mi? Nicelse kesikli mi, sürekli mi?

1. Bir uygulamaya günde kaç kez girildiği
2. Uyku süresi (saat)
3. Danışanın aldığı terapi türü (bilişsel davranışçı terapi, psikodinamik, şema)
4. Bir hafıza testinde hatırlanan kelime sayısı
5. Doğum yeri (il)
6. Ardışık iki kalp atışı arasındaki süre (milisaniye)
7. Medeni durum, 1–4 arası kodlanmış

::: {.notes}
1. Nicel, kesikli: girişler sayılır.
2. Nicel, sürekli: süre ölçülür; 7 saat ile 7,5 saat arasında da değerler vardır.
3. Kategorik: üç terapi türü üç gruptur.
4. Nicel, kesikli: hatırlanan kelimeler sayılır.
5. Kategorik: il bir gruptur. Plaka kodlarıyla (06, 34, 35) yazılsa da kategoriktir; plaka kodlarının ortalaması bir anlam taşımaz.
6. Nicel, sürekli: zaman ölçülür.
7. Kategorik: 1–4 arası kodlar yalnızca kategori adlarıdır. Yedinci madde, kategorilerin sayıyla yazıldığı slaytla aynı tuzaktır.
:::

---

## Karar soruları

1. Bir araştırmacı "verimizde 240 satır var, demek ki 240 katılımcı" diyor. Hangi bilgiyi görmeden bu cümleyi kuramayız?
2. Bir çalışmada bütün katılımcılar 18 yaşında. Yaş sütunu bu veride ne işe yarar?
3. Bir öğrenci "kaygı düzeyi" sütununa düşük, orta, yüksek yazmış; bir başkası aynı soruyu 0–100 arası puanla ölçmüş. İki sütunun türü aynı mı?

::: {.notes}
1. Gözlem biriminin ne olduğunu. Herkes üç kez ölçülmüş ve uzun yazımla kaydedilmişse 240 satır 80 kişi demektir.
2. Bu veride yaş değişmediği için karşılaştırmada kullanılamaz; sonuçları başka yaş gruplarına genellerken bu sınır akılda tutulmalıdır.
3. Hayır. Düşük–orta–yüksek bir kategori sıralamasıdır; 0–100 arası puan ise bir miktar bildirir. Aynı kavram (kaygı) farklı biçimde ölçüldüğünde farklı türde değişkenler ortaya çıkar.
:::

---

## Bu nottan kalanlar

- **Satır:** gözlem birimi; kişi, seans, okul ya da gün olabilir.
- **Sütun:** çoğunlukla bir değişken; **hücre:** değer.
- **Kod sütunu** satırı tanımlar, analiz edilmez.
- **Kategorik** değişken grup bildirir, **nicel** değişken miktar bildirir; nicel değişken **kesikli** (sayılan) ya da **sürekli** (ölçülen) olabilir.
- Sütunda sayı görmek, değişkenin türünü söylemez.

Sütunda sayı görmek, o sayılarla her hesabı yapabileceğimiz anlamına gelmez. Kimlik kodlarının ortalaması anlamsızdı, çalışma saatlerinin ortalaması anlamlı; bir takımın forma numaraları ile boyları arasında da aynı fark var.

**Sıradaki konu:** Bir sütundaki sayılarla hangi hesaplar anlamlıdır?

::: {.notes}
Bir veri tablosuna baktığınızda ilk iki soru hep aynı olsun: bir satır neyi temsil ediyor ve her sütun ne tür bir bilgi taşıyor? Bu iki soruya cevap vermeden yapılan her hesap, yanlış bir yerden başlamış olabilir.

Sıradaki notta tek bir soruya odaklanacağız: forma numaralarının ortalaması neden anlamsızdır, ama boyların ortalaması anlamlıdır? Cevap, ölçme düzeylerinde.
:::
