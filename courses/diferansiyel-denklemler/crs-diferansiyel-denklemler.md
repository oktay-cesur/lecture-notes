---
title: "MATE 214 Diferansiyel Denklemler"
subtitle: "Ders Notları"
type: syllabus
description: MATE 214 Diferansiyel Denklemler dersi için resmî izlenceyi temel alan haftalık ders notu ve çalışma materyali dağılımı.
tags:
  - output
sidebar: diferansiyel-denklemler
---

## Dersin Amacı

Diferansiyel denklemler, bir niceliğin o andaki değeriyle nasıl değiştiği arasındaki ilişkiyi matematiksel bir modele dönüştürür. Bir cismin hareketi, bir sıvının soğuması veya bir sistemdeki miktarın zamanla değişmesi aynı temel soruya dayanır: Değişim kuralını biliyorsak niceliğin kendisini nasıl bulur ve davranışını nasıl yorumlarız?

Derse türev, diferansiyel denklem, çözüm ve başlangıç koşulu kavramlarını ayırt ederek başlayacağız. Ardından birinci mertebeden denklemleri yapılarına göre sınıflandıracak; ayrılabilir, homojen tip, lineer, Bernoulli ve tam diferansiyel denklemler için uygun çözüm yöntemlerini kuracağız. Lineer bağımsızlık ve Wronskian ile yüksek mertebeden lineer denklemlerin genel yapısına geçtikten sonra sabit katsayılı denklemleri, Laplace dönüşümünü, lineer denklem sistemlerini ve seri çözümlerini ele alacağız.

Bu sayfayı ders boyunca ana yol haritanız olarak kullanabilirsiniz. Haftalık tabloda o hafta ele alınacak konu anlatımları bulunur. Sayfanın sonundaki çalışma notları ise yöntemleri kendi başınıza uygulamanız ve hangi adımda zorlandığınızı görmeniz için hazırlanmıştır.

## Notları Nasıl Takip Etmelisiniz?

1. **Önce haftalık plana bakın.** O haftanın konu anlatımlarını verilen sırayla açın. Bir not birden fazla konuya bağlanabilir; her şeyi tek oturuşta tamamlamanız gerekmez.
2. **Denklemi çözmeden önce sınıflandırın.** Bilinmeyeni, bağımsız değişkeni, mertebeyi ve denklem yapısını belirleyin. Kullanacağınız yöntem bu okumadan çıkmalıdır.
3. **Her cebirsel adımın koşulunu izleyin.** Bir ifadeye böldüğünüzde kaybolabilecek çözümleri, logaritma veya kök aldığınızda oluşan aralık kısıtlarını ayrıca kontrol edin.
4. **Çözümü doğrulayın.** Bulduğunuz fonksiyonu ve gerekiyorsa başlangıç koşulunu denklemde yerine koyun. Formülün geçerli olduğu çözüm aralığını da belirtin.
5. **Çalışma notuna kalemle geçin.** Soruları çözüme bakmadan tamamlayın; yalnız sonucu değil, yöntem seçiminizi ve ara adımlarınızı da yazın.
6. **Yapay zekâyı son kontrol için kullanın.** Önce kendi çözümünüzü üretin. Sonra doğrudan cevabı istemek yerine hatanın bulunduğu adımı, hata türünü ve kontrol etmeniz gereken koşulu sorun.

::: {.callout-tip}
## Önerilen Çalışma Döngüsü

Konu anlatımını oku → denklemi sınıflandır → yöntemi uygula → çözümü ve aralığı doğrula → ilgili çalışma notunu çöz → hata yaptığın adıma geri dön.

Diferansiyel denklemlerde doğru integrali almak kadar hangi yöntemin neden çalıştığını ve hangi çözümlerin işlem sırasında kaybolabileceğini görmek de önemlidir.
:::

::: {.callout-note}
## Kaynak Kitap

R. Kent Nagle, Edward B. Saff ve Arthur David Snider, [*Fundamentals of Differential Equations*](https://www.pearson.fr/fr/book/?GCOI=27440102641390), 8. baskı, Pearson Education, 2013, ISBN 9781292036953.
:::

::: {.callout-note}
## Notasyonları Nerede Bulabilirsiniz?

Ders boyunca kullanılan temel sembolleri ve ayrıntılı tanımların bulunduğu bölümleri [Diferansiyel Denklemler Notasyon Rehberi](notes/notasyon-rehberi.md) sayfasında topladık. Bir gösterimi unuttuğunuzda, aynı sembolün farklı kullanımını ayırt etmek istediğinizde veya tanımın kullanıldığı örneğe dönmeniz gerektiğinde bu rehberi kullanabilirsiniz.
:::

## Haftalık Plan

Haftalık plan resmî izlencenin konu kapsamını temel alır. Konu yoğunluğunu dengelemek için bazı başlıkların haftaları yeniden düzenlenmiştir. Tablodaki bağlantılar, hafta boyunca kullanılacak konu anlatımlarına götürür. İlk beş haftanın notları yayımdadır; sonraki haftaların bağlantıları materyaller tamamlandıkça bu sayfaya eklenecektir.

| Hafta | Notlar | Açıklama |
|:---:|---|---|
| 1 | [[../../courses/diferansiyel-denklemler/notes/tp_degisimi-okumak\|Değişimi Okumak]] · [[../../courses/diferansiyel-denklemler/notes/tp_lineerlik-ve-otonomluk\|Lineerlik ve Otonomluk]] · [[../../courses/diferansiyel-denklemler/notes/tp_cozum-nedir\|Çözüm Nedir?]] | Değişim kuralının diferansiyel denkleme dönüşmesi; mertebe, lineerlik, otonomluk, çözüm ve başlangıç koşulu ele alınacaktır. |
| 2 | [[../../courses/diferansiyel-denklemler/notes/tp_dogrudan-integral-ayrilabilir-denklemler\|Doğrudan İntegral ve Yön Alanı]] · [[../../courses/diferansiyel-denklemler/notes/tp_ayrilabilir-denklemler\|Ayrılabilir Denklemler]] · [[../../courses/diferansiyel-denklemler/notes/tp_degisim-yasasini-yorumlamak\|Değişim Yasasını Yorumlamak]] | Doğrudan integral, yön alanı ve ayrılabilir denklemler; büyüme, azalma ve denge çözümleri ele alınacaktır. |
| 3 | [[../../courses/diferansiyel-denklemler/notes/tp_homojen-tip-denklemler\|Homojen Tip Denklemler]] · [[../../courses/diferansiyel-denklemler/notes/tp_birinci-mertebeden-lineer-denklemler\|Birinci Mertebeden Lineer Denklemler]] · [[../../courses/diferansiyel-denklemler/notes/tp_bernoulli-denklemi\|Bernoulli Denklemi]] · [[../../courses/diferansiyel-denklemler/notes/tp_yontem-secme-haritasi\|Birinci Mertebe Yöntem Seçme Haritası]] | Homojen tip, birinci mertebeden lineer ve Bernoulli denklemleri ile yöntem seçimi ele alınacaktır. |
| 4 | [[../../courses/diferansiyel-denklemler/notes/tp_tam-diferansiyel-denklemler\|Tam Diferansiyel Denklemler ve Test Koşulu]] · [[../../courses/diferansiyel-denklemler/notes/tp_integrasyon-carpani-tam-olmayan\|İntegrasyon Çarpanı ile Tam Olmayan Denklemleri Tama Getirme]] · [[../../courses/diferansiyel-denklemler/notes/tp_ortogonal-yorungeler\|Elementer Uygulama: Ortogonal Yörüngeler]] | Tam diferansiyel denklemler, tek değişkenli integrasyon çarpanları ve ortogonal yörüngeler ele alınacaktır. |
| 5 | [[../../courses/diferansiyel-denklemler/notes/tp_ninci-mertebe-lineer-genel-teori\|n'inci Mertebe Lineer Denklemler: Standart Biçim ve Varlık-Teklik]] · [[../../courses/diferansiyel-denklemler/notes/tp_lineer-bagimsizlik-wronskian\|Lineer Bağımlılık, Bağımsızlık ve Wronskian]] · [[../../courses/diferansiyel-denklemler/notes/tp_temel-cozum-kumesi\|Temel Çözüm Kümesi ve Genel Çözüm Yapısı]] | Yüksek mertebeden lineer denklemlerin genel teorisi; süperpozisyon, varlık-teklik, lineer bağımsızlık, Wronskian ve temel çözüm kümesi ele alınacaktır. |
| 6 | Ders notları hazırlanıyor | İkinci mertebe lineer denklemler: sabit katsayılı homojen denklemler, karakteristik denklemin reel ve kompleks kökleri, katlı kökler ve mertebe indirme işlenecektir. |
| 7 | Ders notları hazırlanıyor | Homojen olmayan denklemlerde belirsiz katsayılar ve sabitlerin değişimi yöntemleri karşılaştırmalı olarak ele alınacaktır. |
| 8 | Ders notları hazırlanıyor | Yüksek mertebe lineer denklemler ve Cauchy–Euler denklemi işlenecektir. |
| 9 | Ders notları hazırlanıyor | Laplace dönüşümü, dönüşüm kuralları ve ters dönüşüm ele alınacaktır. |
| 10 | Ders notları hazırlanıyor | Konvolüsyon teoremi, Laplace dönüşümünün diferansiyel ve integral denklemlere uygulamaları ve sağ yanı süreksiz olan diferansiyel denklemler işlenecektir. |
| 11 | Ders notları hazırlanıyor | Lineer denklem sistemleri, temel matris ve temel çözümler ele alınacaktır. |
| 12 | Ders notları hazırlanıyor | Birinci mertebe homojen ve homojen olmayan sabit katsayılı lineer sistemler için çözüm yöntemleri işlenecektir. |
| 13 | Ders notları hazırlanıyor | Lineer denklemlerin kuvvet serisi çözümleri ve sıradan noktalar ele alınacaktır. |
| 14 | Ders notları hazırlanıyor | Düzenli tekil noktalar ele alınacaktır. |

## Çalışma Notları

Aşağıdaki çalışma notları çözümlü örnekler, hata avı, işlem pratiği, karma sorular ve yapay zekâ ile kendi kendine kontrol bölümleri içerir. Her notu ilgili konuyu tamamladıktan sonra bağımsız olarak kullanabilirsiniz; listedeki sıra zorunlu bir çalışma sırası değildir. Çözümünüzde yalnız sonucu değil, denklem sınıfını, seçtiğiniz yöntemi, ara adımları ve çözüm aralığını da yazın.

- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_denklemi-okuma-ve-cozumu-dogrulama\|Denklemi Okuma ve Çözümü Doğrulama]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_baslangic-deger-problemleri-ve-cozum-araligi\|Başlangıç Değer Problemleri ve Çözüm Aralığı]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_dogrudan-integralle-cozum\|Doğrudan İntegralle Çözüm]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_yon-alani-ve-nitel-cozum\|Yön Alanı ve Nitel Çözüm]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_ayrilabilir-denklemler\|Ayrılabilir Denklemler]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_denge-cozumleri-ve-kararlilik\|Denge Çözümleri ve Kararlılık]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_homojen-tip-denklemler\|Homojen Tip Denklemler]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_birinci-mertebeden-lineer-denklemler\|Birinci Mertebeden Lineer Denklemler]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_bernoulli-denklemi\|Bernoulli Denklemi]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_birinci-mertebe-yontem-secimi\|Birinci Mertebe Yöntem Seçimi]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_tam-diferansiyel-denklemler\|Tam Diferansiyel Denklemler]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_integrasyon-carpani\|İntegrasyon Çarpanı ile Tamlaştırma]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_ortogonal-yorungeler\|Ortogonal Yörüngeler]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_lineer-bagimsizlik-ve-wronskian\|Lineer Bağımsızlık ve Wronskian]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_lineer-denklemlerde-genel-cozum-yapisi\|Lineer Denklemlerde Genel Çözüm Yapısı]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_karakteristik-denklem-ve-reel-kokler\|Karakteristik Denklem ve Reel Kökler]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_katli-karakteristik-kokler\|Katlı Karakteristik Kökler]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_kompleks-karakteristik-kokler\|Kompleks Karakteristik Kökler]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_mertebe-indirme\|Mertebe İndirme]]
