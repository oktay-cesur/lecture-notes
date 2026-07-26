---
title: "MATE 213 Lineer Cebir"
subtitle: "Ders Notları"
type: syllabus
description: MATE 213 Lineer Cebir dersi için resmî izlenceyi temel alan haftalık ders notu ve çalışma materyali dağılımı.
tags:
  - output
sidebar: lineer-cebir
---

## Dersin Amacı

Lineer cebir; mühendislikten veri bilimine, fizikten bilgisayar bilimlerine kadar hesaplamanın yoğun olduğu pek çok alanda kullanılan ortak bir matematik dilidir. Matris işlemleri bu dilin görünen yüzüdür. Dersin asıl hedefi, çok sayıda bilinmeyen ve denklem içeren problemleri düzenli bir yapıya dönüştürmeyi; bir sistemin çözülebilir olup olmadığını anlamayı ve ulaşılan sonucu gerekçelendirmeyi öğrenmektir.

Bir skalerin ve vektörün neyi temsil ettiğinden başlayıp matrislerin nasıl kurulduğunu ve nasıl işlediğini göreceğiz. Ardından lineer denklem sistemlerine geçecek; Gauss eliminasyonu, rank, ters matris ve determinant gibi araçların aynı çözüm yapısını farklı yönlerden nasıl açıkladığını inceleyeceğiz. Dersin ikinci bölümünde vektör uzayları, taban, iç çarpım, öz değerler ve lineer dönüşümlerle bu dili daha genel bir çerçeveye taşıyacağız.

Bu sayfayı ders boyunca ana yol haritanız olarak kullanabilirsiniz. Haftalık planda o hafta ele alınacak konu anlatımları yer alır. Sayfanın sonundaki çalışma notları ise işlemleri kendi başınıza denemeniz ve hangi adımda zorlandığınızı görmeniz için hazırlanmıştır.

## Notları Nasıl Takip Etmelisiniz?

1. **Önce haftalık plana bakın.** O haftanın konu anlatımlarını verilen sırayla açın. Bir not birden fazla haftada kullanılabilir; her şeyi tek oturuşta bitirmeniz gerekmez.
2. **Formülleri hemen ezberlemeye çalışmayın.** Önce örneğin hangi sorudan doğduğunu, işlemin hangi koşulda tanımlı olduğunu ve sonucun ne anlattığını takip edin.
3. **Karar sorularında durun.** Cevabı okumadan önce birkaç dakika kendi gerekçenizi kurun. Bu sorular işlem hızından çok kavramları ayırt edip edemediğinizi gösterir.
4. **Çalışma notuna kalemle geçin.** Önce çözümlü örnekleri adım adım yeniden yapın; ardından karma soruları çözüme dönmeden tamamlamaya çalışın.
5. **Yapay zekâyı son kontrol için kullanın.** Önce kendi çözümünüzü üretin. Sonra çözümünüzü kontrol ettirip doğrudan cevabı değil, hatanın bulunduğu adımı ve hata türünü isteyin.

::: {.callout-tip}
## Önerilen Çalışma Döngüsü

Konu anlatımını oku → karar sorularını yanıtla → ilgili çalışma notunu çöz → çözümünü kontrol et → hata yaptığın adıma geri dön.

Bir işlemi yalnız gözle takip etmek kolay görünebilir. Aynı hesabı kâğıt üzerinde kurabildiğinizde ise hangi adımı gerçekten anladığınız ortaya çıkar.
:::

::: {.callout-note}
## Kaynak Kitaplar

- Fethi Çallıalp, *Örneklerle Lineer Cebir*, Birsen Yayınları, 2010.
- Cemal Koç, *Doğrusal Cebir*.
- Bernard Kolman ve David R. Hill, [*Uygulamalı Lineer Cebir*](https://www.palmeyayinevi.com/uygulamali-lineer-cebir-2-2-2), 9. baskı, Palme Yayınevi, ISBN 9786055829872.
:::

::: {.callout-note}
## Notasyonları Nerede Bulabilirsiniz?

Ders boyunca kullanılan temel sembolleri ve ayrıntılı tanımların bulunduğu bölümleri [Lineer Cebir Notasyon Rehberi](notes/notasyon-rehberi.md) sayfasında topladık. Bir gösterimi unuttuğunuzda veya tanımın kullanıldığı örneğe dönmek istediğinizde bu rehberi kullanabilirsiniz.
:::

## Haftalık Plan

Haftalık plan resmî izlencenin konu sırasını temel alır. Tablodaki bağlantılar, hafta boyunca kullanılacak konu anlatımlarına götürür. Kenar çubuğunda ise notlar, birbirine dayanan kavramları takip etmeyi kolaylaştıran okuma sırasıyla sunulur.

| Hafta | Notlar | Açıklama |
|:---:|---|---|
| 1 | [[../../courses/lineer-cebir/notes/tp_skaler-ve-vektor-kavrami\|Skaler ve Vektör Kavramı]] · [[../../courses/lineer-cebir/notes/tp_vektor-islemleri-ve-lineer-birlesim\|Vektör İşlemleri ve Lineer Birleşim]] | Skaler ve koordinat vektörü ayrımı, temel vektör işlemleri ve lineer birleşim ele alınacaktır. |
| 2 | [[../../courses/lineer-cebir/notes/tp_matrisin-yapisi-ve-okumalari\|Matrisin Yapısı ve Okumaları]] · [[../../courses/lineer-cebir/notes/tp_ozel-matrisler-ve-transpoz\|Özel Matrisler ve Transpoz]] | Matrislerin satır-sütun yapısı, eleman okuma, özel matris türleri ve transpoz ele alınacaktır. |
| 3 | [[../../courses/lineer-cebir/notes/tp_matris-islemlerinin-dogusu\|Matris İşlemlerinin Doğuşu]] · [[../../courses/lineer-cebir/notes/tp_matrislerde-temel-islemler\|Matrislerde Temel İşlemler]] · [[../../courses/lineer-cebir/notes/tp_matris-carpimlari\|Matris Çarpımları]] · [[../../courses/lineer-cebir/notes/tp_matris-islemlerinin-ozellikleri\|Matris İşlemlerinin Özellikleri]] | Matrislerde toplama, çıkarma ve skalerle çarpma; matris çarpımları ve bu işlemlerin cebirsel özellikleri ele alınacaktır. |
| 4 | [[../../courses/lineer-cebir/notes/tp_denklem-sistemleri-ve-matris-gosterimi\|Denklem Sistemleri ve Matris Gösterimi]] · [[../../courses/lineer-cebir/notes/tp_gauss-eliminasyonu-ve-basamak-bicimleri\|Gauss Eliminasyonu ve Basamak Biçimleri]] · [[../../courses/lineer-cebir/notes/tp_cozum-durumlari-ve-serbest-degiskenler\|Çözüm Durumları ve Serbest Değişkenler]] | Lineer denklem sistemlerinin matris gösterimi, Gauss eliminasyonu, basamak biçimleri, çözüm durumları ve serbest değişkenler ele alınacaktır. |
| 5 | [[../../courses/lineer-cebir/notes/tp_matrisin-ranki\|Matrisin Rankı]] · [[../../courses/lineer-cebir/notes/tp_elementer-matrisler\|Elementer Matrisler]] · [[../../courses/lineer-cebir/notes/tp_elementer-esdegerligi\|Elementer İşlem = Matrisle Çarpım]] · [[../../courses/lineer-cebir/notes/tp_ters-matris-ve-tersinirlik\|Ters Matris ve Tersinirlik]] | Rank ölçütü, satır işlemlerinin elementer matrislerle gösterimi, elementer eşdeğerlik, ters matris ve tersinirlik ele alınacaktır. |
| 6 | [[../../courses/lineer-cebir/notes/tp_homojen-sistemlerden-lineer-bagimsizliga\|Homojen Sistemlerden Lineer Bağımsızlığa]] · [[../../courses/lineer-cebir/notes/tp_determinant-ve-cramer-kurali\|Determinant ve Cramer Kuralı]] | Homojen sistemlerin çözüm yapısı ve lineer bağımsızlık bağlantısı; determinant ve Cramer kuralı ele alınacaktır. |
| 7 | Ders notları hazırlanıyor | Vektör uzayları ve alt uzaylar ele alınacaktır. |
| 8 | Ders notları hazırlanıyor | Lineer bağımsızlık ve taban kavramları işlenecektir. |
| 9 | Ders notları hazırlanıyor | Koordinatlar ve taban değişimi ele alınacaktır. |
| 10 | Ders notları hazırlanıyor | İç çarpım uzayları işlenecektir. |
| 11 | Ders notları hazırlanıyor | Ortogonal izdüşüm ve uygulamaları ele alınacaktır. |
| 12 | Ders notları hazırlanıyor | Öz değer ve öz vektörler işlenecektir. |
| 13 | Ders notları hazırlanıyor | Köşegenleştirme ele alınacaktır. |
| 14 | Ders notları hazırlanıyor | Lineer dönüşümler ve matrisler işlenecektir. |


## Çalışma Notları

Aşağıdaki çalışma notları çözümlü örnekler, karma sorular ve yapay zekâ ile kendi kendine kontrol bölümleri içerir. Her notu ilgili konuyu tamamladıktan sonra bağımsız olarak kullanabilirsiniz; listedeki sıra zorunlu bir çalışma sırası değildir. *Matris Cebiri*, farklı konularda karşılaşılan sembolik düzenleme işlemlerini tek bir çalışma notunda bir araya getirir.

- [[../../courses/_ortak/lineer-cebir/notes/ex_vektor-islemleri\|Vektör İşlemleri]]
- [[../../courses/_ortak/lineer-cebir/notes/ex_matris-yapisi-ve-temel-islemler\|Matris Yapısı ve Temel İşlemler]]
- [[../../courses/_ortak/lineer-cebir/notes/ex_matris-vektor-carpimi\|Matris-Vektör Çarpımı]]
- [[../../courses/_ortak/lineer-cebir/notes/ex_matris-matris-carpimi\|Matris-Matris Çarpımı]]
- [[../../courses/_ortak/lineer-cebir/notes/ex_matris-cebiri\|Matris Cebiri]]
- [[../../courses/_ortak/lineer-cebir/notes/ex_denklem-sistemi-matris-gosterimi\|Denklem Sistemleri ve Matris Gösterimi]]
- [[../../courses/_ortak/lineer-cebir/notes/ex_gauss-eliminasyonu\|Gauss Eliminasyonu ve Basamak Biçimleri]]
- [[../../courses/_ortak/lineer-cebir/notes/ex_elementer-matrisler\|Elementer Matrisler]]
- [[../../courses/_ortak/lineer-cebir/notes/ex_ters-matris\|Ters Matris]]
- [[../../courses/_ortak/lineer-cebir/notes/ex_cozum-durumlari-ve-rank\|Çözüm Durumları ve Rank]]
- [[../../courses/_ortak/lineer-cebir/notes/ex_homojen-lineer-bagimsizlik\|Homojen Sistemler ve Lineer Bağımsızlık]]
- [[../../courses/_ortak/lineer-cebir/notes/ex_determinant-cramer\|Determinant ve Cramer Kuralı]]
