---
title: "Genel Özet: Betimsel İstatistik ve Dağılımlar"
subtitle: "PSİ 303 — Sınav Tekrar Notu (Hafta 3–4)"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-10-29
description: "Merkezî eğilim, yayılım, grafik okuma, dağılımın biçimi, normal dağılım ve z puanı konularının sınav öncesi tekrar için derlenmiş özeti."
sidebar: psi303
execute:
  echo: false
---

# Genel Özet: Betimsel İstatistik ve Dağılımlar

::: {.callout-tip}
## Sesli özet

Merkezî eğilim ve yayılım için [Ses 2 — Merkez ve yayılım](https://drive.google.com/drive/folders/1HdJgyzj0fEquA3zM7CFzQd9tWKgfDBVG?usp=sharing){target="_blank"} (yaklaşık 22 dk); dağılımın biçimi, normal dağılım ve z puanı için [Ses 3 — Grafik, biçim ve normal dağılım](https://drive.google.com/drive/folders/1HdJgyzj0fEquA3zM7CFzQd9tWKgfDBVG?usp=sharing){target="_blank"} (yaklaşık 12 dk).

Sesli özetler yapay zekâ ile üretilmiştir ve bu notun yerine geçmez; fark olduğunda yazılı not esastır. Dosyalar Drive klasöründe `psi303-ses-…` adlarıyla durur ve tarayıcıda dinlenebilir.
:::

Bu not, bölümdeki dört konu notunun tekrar için toplanmış özetidir. Betimsel istatistik, elimizdeki veriyi **üç yönden** tarif eder: **ortası nerede** (merkezî eğilim), **ne kadar dağınık** (yayılım), **nasıl bir biçimi var** (çarpıklık, tepe sayısı, normallik). Grafik bu üçünü birlikte gösterir; bu yüzden önce grafiğe bakılır, sonra sayıya geçilir.

::: {.callout-tip}
## Bölümün tek cümlelik özeti

**Grafikle bak → merkez ve yayılımı ölçme düzeyine ve biçime uygun çiftle özetle → biçimi çarpıklık ve normallik açısından değerlendir → gerekirse z puanıyla karşılaştır.**
:::

## 1. Veriyi görmek: tablo ve grafik

Grafik okuma bu derste her analizin ilk adımıdır ve ayrı bir çalışma notunda ele alınır: **[Çalışma Notu: Grafik Okuma](ex_grafik-okuma.md)**. Burada yalnız çekirdek kural kalır:

- **Kategorik veri → çubuk grafik** (aralarında boşluk); **nicel veri → histogram** (bitişik çubuklar); uç değer ve grup karşılaştırması için **kutu grafiği**.
- **Okuma sırası:** eksen → yoğunlaşma → yayılım → uçlar → biçim. Gördüğünüzü önce sözle söyleyin, sayı sonra gelsin.

## 2. Merkezî eğilim: tipik değer

*Ayrıntı: [Tipik değer: Merkezî eğilim ölçüleri](tp_merkezi-egilim.md)*

| Ölçü | Ne? | Güçlü yanı | Zayıf yanı |
|---|---|---|---|
| **Ortalama** (*M*) | Toplam / değer sayısı: $\bar{x}=\dfrac{\sum x}{n}$ | Bütün değerleri kullanır; denge noktasıdır | **Uç değere duyarlı** |
| **Medyan** (*Mdn*) | Sıralanınca ortadaki değer (çift sayıda ise ortadaki ikisinin ortası) | Yalnız sıraya bakar; **uç değere dayanıklı** | Değerlerin büyüklüğünü kullanmaz |
| **Mod** | En sık görülen değer | **Nominal veride tek seçenek** | Birden fazla olabilir, hiç olmayabilir |

### Uç değer ne yapar?

Sekiz çalışanın maaşı (bin TL): 25, 27, 28, 30, 30, 32, 35, 38 → ortalama 30,6; medyan 30; mod 30. Şirket sahibinin 400 bin TL'si eklenince ortalama **71,7**'ye fırlar; medyan ve mod 30 kalır. "Ortalama maaş 71,7 bin TL" cümlesi aritmetik olarak doğrudur ama tipik çalışanı anlatmaz. Sahibin maaşı hatalı değil gerçektir; silinmez, özet ölçüsü değiştirilir.

### Hangisi ne zaman?

| Durum | Önerilen ölçü |
|---|---|
| Nominal veri (bölüm, terapi türü) | **Mod** |
| Sıralı veri, tek Likert maddesi | **Medyan** (gerekirse mod) |
| Simetrik nicel veri, ölçek puanları | **Ortalama** |
| Bir yana uzayan nicel veri (gelir, tepki süresi) | **Medyan**; ortalamayla birlikte verilebilir |
| İki tepeli veri | Grupları ayrı özetlemeyi düşün |

İki soru karar verir: **ölçme düzeyi** (hangi ölçüler anlamlı?) ve **dağılımın biçimi** (anlamlılar arasında hangisi daha iyi özet?).

**Dağılım biçimiyle ilişkisi:** Simetrik, tek tepeli dağılımda üçü hemen hemen aynıdır. Dağılım bir yana uzadıkça **ortalama genellikle uzayan kuyruk tarafına çekilir**: sağa çarpıkta ortalama > medyan, sola çarpıkta ortalama < medyan.

## 3. Yayılım: ne kadar farklılar?

*Ayrıntı: [Ne kadar farklılar? Yayılım ölçüleri](tp_yayilim-olculeri.md)*

**Ortalaması aynı iki grup birbirine benzemeyebilir.** A sınıfı: 65, 68, 70, 72, 75; B sınıfı: 40, 55, 70, 85, 100. İkisinin ortalaması 70'tir; ama A'da herkes birbirine yakın, B'de notlar 40–100 arasında dağılmıştır.

| Ölçü | Nasıl bulunur? | A sınıfı | B sınıfı | Not |
|---|---|---:|---:|---|
| **Açıklık** | En büyük − en küçük | 10 | 60 | Yalnız iki uca bağlı |
| **Varyans** ($s^2$) | $\dfrac{\sum (x-\bar{x})^2}{n-1}$ | 14,5 | 562,5 | Birimi "birimin karesi"; doğrudan yorumlanmaz |
| **Standart sapma** (*SD*) | Varyansın karekökü | 3,81 | 23,72 | **Uzaklıkların tipik büyüklüğü**, verinin kendi biriminde |
| **IQR** | Q3 − Q1 | 7 | 45 | **Ortadaki yarının genişliği**; uç değere dayanıklı (yarıların ortası yöntemiyle) |

- **Standart sapma** "ortalamadan tipik olarak kaç birim uzaklaşıyoruz?" sorusunu cevaplar. Büyük *SD* her zaman kötü değildir; **öngörülebilirliği** gösterir (hep 10 dakikada gelen otobüs ile 2 ile 18 dakika arası gelen otobüs).
- **Neden *n* − 1?** Örneklemden hesaplanan varyans evren varyansını biraz küçük tahmin eder; *n* − 1 bunu düzeltir. Yazılımlar bunu zaten uygular, elle hesapta aynısını kullanın.
- **Çeyrekler:** Sıralı veriyi dörde böler. Q1'in altında yaklaşık %25, Q2 = medyan, Q3'ün altında yaklaşık %75. Küçük veride hesaplama yöntemine göre IQR biraz değişebilir.

### Kutu grafiği

| Parça | Ne gösterir? |
|---|---|
| **Kutu** | Q1'den Q3'e: verinin ortadaki yaklaşık yarısı |
| **Çizgi** | Medyan |
| **Bıyıklar** | Kutudan en fazla 1,5 × IQR uzaktaki en uç değerlere kadar |
| **Noktalar** | Bıyık sınırının dışındaki **uç değer adayları** |

Uzun bir kutu yarısı ya da uzun bir bıyık, orada "daha çok kişi" olduğu anlamına gelmez; yalnız değerlerin orada daha geniş yayıldığını gösterir. Noktayla gösterilen değer **silinmesi gereken değer değildir**; silinip silinmeyeceğine kutu grafiği değil, değerin olanaksız olup olmadığı karar verir.

### Çiftler hâlinde raporlama

| Merkez | Yayılım | Ne zaman? |
|---|---|---|
| Ortalama | Standart sapma | Simetrik nicel veri, ölçek puanları |
| Medyan | IQR | Bir yana uzayan nicel veri, uç değerler |

Spor saatleri örneği (uç değerli): *M* = 8,27, *SD* = 6,33 saat; *Mdn* = 7, *IQR* = 6 saat. Tek bir uç değer (25 saat) *SD*'yi yaklaşık iki katına çıkarır. Sıralı veride (nadiren–bazen–sık sık) Q3 − Q1 sayısal uzaklık olarak yorumlanmaz; medyan ile Q1 ve Q3 kategorileri bildirilir.

## 4. Dağılımın biçimi

*Ayrıntı: [Dağılımın biçimi ve normal dağılım](tp_dagilim-ve-normal-dagilim.md)*

Aynı ortalamaya ve standart sapmaya sahip iki dağılım yine de farklı biçimde olabilir; ortalama ve *SD* biçimi söylemez.

| Özellik | Ne demek? | Nasıl okunur? |
|---|---|---|
| **Simetri** | Orta çizginin iki yanı yaklaşık aynı | Histogramda iki yarı birbirinin aynası |
| **Çarpıklık** | Bir yana uzayan kuyruk | **Adı kuyruğun bulunduğu yandan gelir**, tepenin yanından değil |
| **Tepe sayısı** | Yoğunlaşma sayısı | Tek tepeli / iki tepeli (iki ayrı alt grup işareti olabilir) |
| **Basıklık** | Kuyrukların kalınlığı | Kalın kuyruk = uç değerler beklenenden sık |

- **Sağa çarpık:** Çoğunluk düşük değerde, az sayıda yüksek değer sağa uzuyor (gelir, tepki süresi). Ortalama > medyan.
- **Sola çarpık:** Çoğunluk yüksek değerde, az sayıda düşük değer sola uzuyor (kolay sınav notları). Ortalama < medyan.

### Çıktıda çarpıklık ve basıklık (jamovi/SPSS)

| Katsayı | ≈ 0 | Pozitif | Negatif |
|---|---|---|---|
| Çarpıklık | Simetrik | Sağa çarpık | Sola çarpık |
| Basıklık | Normal benzeri | Kalın kuyruk | İnce kuyruk |

Kaba yorum (çarpıklık): \|katsayı\| < 1 hafif; 1–2 belirgin; > 2 güçlü sapma. **Katsayı her zaman histogramla birlikte okunur;** küçük örneklemde katsayılar çok oynar. Tepenin sivriliği katsayıdan değil histogramdan okunur.

## 5. Normal dağılım ve z puanı

### Normal dağılım

- **Simetrik, çan biçimli**; ortalama, medyan ve mod aynı noktada.
- **Ortalama ve *SD* ile tamamen tanımlanır.**
- **68–95–99,7 kuralı** (yalnız yaklaşık normal dağılımda): değerlerin yaklaşık %68'i ortalama ± 1 *SD*, %95'i ± 2 *SD*, %99,7'si ± 3 *SD* içindedir. Zekâ testi (*M* = 100, *SD* = 15): %95'i 70–130 arasında.
- **Her veri normal değildir.** Gelir, tepki süresi, sayım verileri çoğunlukla çarpıktır; bu veriyi bozuk yapmaz, ama normal dağılım kuralları ona uygulanmaz.

### z puanı

$$z=\frac{x-M}{SD}$$

**z puanı bir değerin ortalamadan kaç standart sapma uzakta olduğunu söyler.** Birimden bağımsızdır; farklı ölçüm ve gruplarda alınan puanları ortak dile çevirir.

| Ders | Puan | Sınıf ort. | *SD* | z |
|---|---:|---:|---:|---:|
| Matematik | 70 | 60 | 5 | (70−60)/5 = **2,0** |
| Türkçe | 80 | 75 | 10 | (80−75)/10 = **0,5** |

Ham puanı yüksek olan Türkçedir; sınıfına göre daha önde olduğu ders ise matematiktir.

- **İşaret yönü, büyüklük uzaklığı söyler:** z = −1,5, ortalamanın 1,5 *SD* altında demektir.
- **z ile oran:** Yaklaşık normal dağılımda z = 1 için altında kalan oran ≈ %84, z = 1,5 için ≈ %93, z = 2 için ≈ %98. Kaygı puanı 52 (norm grubu *M* = 40, *SD* = 8): z = 1,5 → danışan grubun yaklaşık %93'ünden daha yüksek puan almıştır, **norm grubu yaklaşık normal ise**.
- **z puanı dağılımın biçimini değiştirmez:** sağa çarpık bir dağılımın z puanları da sağa çarpıktır.

::: {.callout-note}
## Sık yapılan hatalar

- "Medyan her zaman daha iyi." Hayır; simetrik nicel veride ortalama daha çok bilgi kullanır. Seçim ölçme düzeyi ve biçime bağlıdır.
- "Küçük *SD* iyidir." *SD* öngörülebilirliği gösterir, kaliteyi değil.
- "Kutu grafiğindeki nokta hatalı değerdir." Uç değer adayıdır; olanaksız değilse veride kalır.
- "68–95–99,7 her veride geçerli." Yalnız yaklaşık normal dağılımda.
- "Çarpıklık katsayısı küçükse dağılım normaldir." Katsayı yalnız simetriye bakar; histogram her zaman birlikte okunur.
:::

## Çalışma soruları

1. Tek bir Likert maddesi (1–5) için hangi merkezî eğilim ölçüsü uygundur? Peki 20 maddelik ölçeğin toplam puanı için?
2. Dokuz kişilik bir grupta ortalama 71,7, medyan 30 ise dağılımın biçimi hakkında ne söylersiniz?
3. İki grubun ortalaması aynı, *SD*'leri 4 ve 24. Hangi bilgiyi kaçırıyorsunuz?
4. Bir veride *Mdn* = 7 saat, *IQR* = 6 saat. Bu iki sayı ne anlatır ve neden *M* ± *SD* yerine verilmiş olabilir?
5. Bir öğrencinin matematik z puanı 2,0, Türkçe z puanı 0,5. Hangi ders sınıfındaki konumuna göre daha iyidir?
6. Histogramın sağ tarafında uzun bir kuyruk var. Çarpıklık katsayısının işareti nedir; ortalama ve medyan nasıl sıralanır?
7. Bir veri sağa çarpık. 68–95–99,7 kuralını bu veriye uygulayabilir misiniz?

::: {.callout-note collapse="true" title="Cevaplar"}
1. Tek madde sıralıdır → **medyan** (gerekirse mod). 20 maddelik toplam puan uygulamada aralık düzeyi sayılır → **ortalama** (simetrikse).
2. **Sağa çarpık** ve büyük olasılıkla uç değer içeren bir dağılım: ortalama, medyandan çok yüksek, çünkü ortalama uç değere doğru çekilir. Medyan tipik değeri daha iyi gösterir.
3. **Yayılım farkını:** A grubunda herkes ortalamaya yakın, B grubunda geniş bir dağılım var. Merkez ölçüsü tek başına dağılımı anlatmaz.
4. Medyan, verinin yarısının 7 saatin altında olduğunu; *IQR*, ortadaki yarının 6 saatlik bir aralığa yayıldığını söyler. Veri bir yana uzuyor ya da uç değer içeriyorsa *M* ve *SD* uç değere duyarlıdır; medyan ve *IQR* dayanıklıdır.
5. **Matematik**: ortalamanın 2 *SD* üstünde; Türkçe yalnız yarım *SD* üstünde.
6. Çarpıklık **pozitif**; ortalama > medyan.
7. **Hayır.** Kural yalnız yaklaşık normal dağılımda geçerlidir; çarpık dağılımda oranlar belirgin biçimde farklı çıkar.
:::
