---
title: BİM444 Yapay Zeka
subtitle: 2024-2025 Güz Dönemi İzlencesi
type: syllabus
description: Arama algoritmaları, makine öğrenmesi, derin öğrenme ve yapay zeka temellerini kapsayan ders.
tags:
  - output
---
## Dersin Amacı

Bu ders yapay zekanın temel kavramlarını tarihsel gelişimi üzerinden teorik temellerine oturarak aktarır.

**Birinci kısım (Hafta 1-5) — Klasik Yapay Zeka (2010 öncesi):** Yapay zekanın temel problem çözme yaklaşımlarını ele alır: bilgisiz arama, sezgisel arama, çekişmeli arama. Bu dönem yaklaşımları sembolik mantık ve sistemli arama stratejilerine dayanan yapay zeka paradigmasını temsil eder.

**İkinci kısım (Hafta 6-14) — Modern Makine Öğrenmesi (2010 sonrası):** Makine öğrenmesinin temel paradigmalarını ve güncel metodları tanıtır:

- Denetimli öğrenme: doğrusal regresyon, karar ağaçları, k-en yakın komşu, Bayes sınıflandırıcıları, lojistik regresyon, sınıflandırıcı kombinasyonları
- Denetimsiz öğrenme: kümeleme ve boyut indirgeme
- Pekiştirmeli öğrenme: ajan eğitimi
- Derin öğrenme: yapay sinir ağları (GPU devrimi sonrası)
- Güncel uygulamalar: büyük dil modelleri, bulanık mantık, genetik algoritmalar

**Hedef:** Öğrencilerin makine öğrenmesi problemlerini tanıyıp uygun yöntemi seçebilmesi, algoritmaların güçlü ve zayıf yönlerini kavraması ve klasik ile modern yaklaşımlar arasındaki farklılıkları anlaması.


::: {.callout-note}
## Kaynak Kitaplar
*Artificial Intelligence: A Modern Approach*, Stuart Russell & Peter Norvig, Prentice Hall, 2010.

 *Introduction to Machine Learning 4th Edition* Ethem Alpaydın. The MIT Press. Cambridge 2020
:::




## Haftalık Plan

| Hafta | Notlar                                                                                                                                    | Açıklama                                                                   |
|:-----:| ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|   1   | [[../../topics/yapay-zekanin-temelleri.md\|Yapay Zekaya Giriş]]                                                                             | Yapay zekanın tarihsel süreci ve tanımlama problemi üzerinde durulacaktır. |
|   2   | [[../../topics/akilli-etmenler.md\|Akıllı Etmenler]]                                                                                        | Akıllı etmen kavramı anlatılacaktır.                                       |
|   3   | [[../../topics/search/arama-probleminin-anatomisi.md\|Arama Probleminin Anatomisi]] & [[../../topics/search/bilgisiz-arama.md\|Bilgisiz Arama]] | Arama problemine giriş ve bilgisiz arama yaklaşımları ele alınacaktır.     |
|   4   | [[../../topics/search/sezgisel-arama\|Sezgisel Arama]]  / [[../../topics/search/astar-ve-otesi.md\| A* ve Ötesi]]                                                                                       | Sezgisel fonksiyonlar ve A* yaklaşımı ele alınacaktır.                     |
|   5   | [[../../topics/search/adversarial.md\|Çekişmeli Arama]]                                                                                     | Minimax ve oyun ağacı tabanlı arama stratejileri işlenecektir.             |
|   6   | [[../../topics/denetimli-ogrenme.md\|Denetimli Öğrenme]]                                                                                    | Sınıflandırma ve regresyon temelleri ele alınacaktır.                      |
|   7   | **Arasınav**                                                                                                                              | -                                                                          |
|   8   | [[../../topics/denetimli-ogrenme.md\|Denetimli Öğrenme]]                                                                                    | Denetimli öğrenme yöntemlerine devam edilecektir.                          |
|   9   | [[../../topics/denetimsiz-ogrenme.md\|Denetimsiz Öğrenme]]                                                                                  | Kümeleme ve boyut indirgeme yöntemleri işlenecektir.                       |
|  10   | [[../../topics/pekistirmeli-ogrenme.md\|Pekiştirmeli Öğrenme]]                                                                              | Etmen-çevre etkileşimi ve ödül tabanlı öğrenme ele alınacaktır.            |
|  11   | [[../../topics/derin-ogrenmeye-giris.md\|Derin Öğrenme]]                                                                                    | Sinir ağları ve derin öğrenmenin temel kavramları ele alınacaktır.         |
|  12   | [[../../topics/llms.md\|LLM'ler]]                                                                                                           | Büyük dil modelleri üzerinde durulacaktır.                                 |
|  13   | [[../../topics/bulanik-mantik.md\|Bulanık Mantık]]                                                                                          | Belirsizlik altında karar verme için bulanık mantık işlenecektir.          |
|  14   | [[../../topics/genetik-algoritmalar.md\|Genetik Algoritmalar]]                                                                              | Evrimsel optimizasyon yaklaşımı ele alınacaktır.                           |


notlar:

[[arama-probleminin-anatomisi]]
