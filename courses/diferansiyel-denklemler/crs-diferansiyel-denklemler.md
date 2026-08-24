---
title: "MATE 214 Diferansiyel Denklemler"
subtitle: "Ders Notları"
type: syllabus
description: MATE 214 Diferansiyel Denklemler dersi için resmî izlenceyi temel alan haftalık ders notu ve çalışma materyali dağılımı.
tags:
  - kursoutput
sidebar: diferansiyel-denklemler
---

## Dersin Amacı

Diferansiyel denklemler, bir niceliğin o andaki değeriyle nasıl değiştiği arasındaki ilişkiyi matematiksel bir modele dönüştürür. Bir cismin hareketi, bir sıvının soğuması veya bir sistemdeki miktarın zamanla değişmesi aynı temel soruya dayanır: Değişim kuralını biliyorsak niceliğin kendisini nasıl bulur ve davranışını nasıl yorumlarız?

Derse türev, diferansiyel denklem, çözüm ve başlangıç koşulu kavramlarını ayırt ederek başlayacağız. Ardından birinci mertebeden denklemleri yapılarına göre sınıflandıracak; ayrılabilir, homojen tip, lineer, Bernoulli ve tam diferansiyel denklemler için uygun çözüm yöntemlerini kuracağız. Lineer bağımsızlık ve Wronskian ile yüksek mertebeden lineer denklemlerin genel yapısına geçtikten sonra sabit katsayılı denklemleri ve Cauchy–Euler denklemini ele alacağız. Dersin ikinci yarısında Laplace dönüşümüyle başlangıç koşullarını ve süreksiz girdileri çözümün içine alacak, konvolüsyonla giriş–çıkış ilişkisini kuracak, lineer denklem sistemlerini durum vektörü ve özdeğerler üzerinden çözecek, kapalı çözümün bulunmadığı durumlar için Euler yöntemine geçeceğiz.

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

Haftalık plan resmî izlencenin konu kapsamını temel alır. Konu yoğunluğunu dengelemek için bazı başlıkların haftaları yeniden düzenlenmiştir. Tablodaki bağlantılar, hafta boyunca kullanılacak konu anlatımlarına götürür.

Ağırlık dağılımı bilgisayar ve yazılım mühendisliği öğrencilerinin çalışma alanına göre ayarlanmıştır. Laplace dönüşümü, konvolüsyon, lineer sistemler ve sayısal çözüm daha geniş ele alınır; işlem yükü yüksek yöntem varyasyonları ise tek bir temel örnekle sınırlı tutulur. Değerlendirmede öncelik sırası şudur: denklem sınıfını tanıma, uygun yöntemi seçme, yöntemi doğru kurma, işlemleri yürütme, sonucu model bağlamında yorumlama.

| Hafta | Notlar | Açıklama |
|:---:|---|---|
| 1 | [[../../courses/diferansiyel-denklemler/notes/tp_degisimi-okumak\|Değişimi Okumak]] · [[../../courses/diferansiyel-denklemler/notes/tp_cozum-nedir\|Çözüm Nedir?]] · [[../../courses/diferansiyel-denklemler/notes/tp_lineerlik-ve-otonomluk\|Lineerlik ve Otonomluk]] | Değişim kuralının diferansiyel denkleme dönüşmesi; mertebe, lineerlik, otonomluk, çözüm ve başlangıç koşulu ele alınacaktır. |
| 2 | [[../../courses/diferansiyel-denklemler/notes/tp_dogrudan-integral-ayrilabilir-denklemler\|Doğrudan İntegral ve Yön Alanı]] · [[../../courses/diferansiyel-denklemler/notes/tp_ayrilabilir-denklemler\|Ayrılabilir Denklemler]] | Doğrudan integral, yön alanı ve ayrılabilir denklemler ele alınacaktır. |
| 3 | [[../../courses/diferansiyel-denklemler/notes/tp_degisim-yasasini-yorumlamak\|Değişim Yasasını Yorumlamak]] · [[../../courses/diferansiyel-denklemler/notes/tp_homojen-tip-denklemler\|Homojen Tip Denklemler]] | Değişim yasasının yorumlanması, büyüme-azalma modelleri, denge çözümleri ve nitel yorum; homojen tip denklemler ele alınacaktır. |
| 4 | [[../../courses/diferansiyel-denklemler/notes/tp_birinci-mertebeden-lineer-denklemler\|Birinci Mertebeden Lineer Denklemler]] | Birinci mertebeden lineer denklemler ve standart çözüm yöntemi ele alınacaktır. |
| 5 | [[../../courses/diferansiyel-denklemler/notes/tp_bernoulli-denklemi\|Bernoulli Denklemi]] · [[../../courses/diferansiyel-denklemler/notes/tp_yontem-secme-haritasi\|Birinci Mertebe Yöntem Seçme Haritası]] | Bernoulli denklemi ve birinci mertebe yöntem seçimi ele alınacaktır. |
| 6 | [[../../courses/diferansiyel-denklemler/notes/tp_tam-diferansiyel-denklemler\|Tam Diferansiyel Denklemler ve Test Koşulu]] · [[../../courses/diferansiyel-denklemler/notes/tp_integrasyon-carpani-tam-olmayan\|İntegrasyon Çarpanı ile Tam Olmayan Denklemleri Tama Getirme]] · [[../../courses/diferansiyel-denklemler/notes/tp_ortogonal-yorungeler\|Elementer Uygulama: Ortogonal Yörüngeler]] | Tam diferansiyel denklemler, tek değişkenli integrasyon çarpanları ve ortogonal yörüngeler ele alınacaktır. |
| 7 | [[../../courses/diferansiyel-denklemler/notes/tp_ninci-mertebe-lineer-genel-teori\|n'inci Mertebe Lineer Denklemler: Standart Biçim ve Varlık-Teklik]] · [[../../courses/diferansiyel-denklemler/notes/tp_lineer-bagimsizlik-wronskian\|Lineer Bağımlılık, Bağımsızlık ve Wronskian]] · [[../../courses/diferansiyel-denklemler/notes/tp_temel-cozum-kumesi\|Temel Çözüm Kümesi ve Genel Çözüm Yapısı]] | Yüksek mertebeden lineer denklemlerin genel teorisi; süperpozisyon, varlık-teklik, lineer bağımsızlık, Wronskian ve temel çözüm kümesi ele alınacaktır. |
| 8 | [[../../courses/diferansiyel-denklemler/notes/tp_sabit-katsayili-homojen-denklemler\|Sabit Katsayılı Homojen Denklemler ve Karakteristik Denklem]] · [[../../courses/diferansiyel-denklemler/notes/tp_kompleks-karakteristik-kokler\|Kompleks Karakteristik Kökler]] · [[../../courses/diferansiyel-denklemler/notes/tp_katli-karakteristik-kokler\|Katlı Karakteristik Kökler]] | İkinci mertebe lineer denklemler: sabit katsayılı homojen denklemler, karakteristik denklemin reel ve kompleks kökleri ve katlı kökler işlenecektir. |
| 9 | [[../../courses/diferansiyel-denklemler/notes/tp_belirsiz-katsayilar\|Belirsiz Katsayılar Yöntemi]] · [[../../courses/diferansiyel-denklemler/notes/tp_yuksek-mertebeli-denklemler\|Yüksek Mertebeli Sabit Katsayılı Denklemler]] · [[../../courses/diferansiyel-denklemler/notes/tp_cauchy-euler-denklemi\|Cauchy–Euler Denklemi]] | Belirsiz katsayılarla özel çözüm; karakteristik polinomun yüksek mertebeye taşınması ve Cauchy–Euler denkleminin ölçek yapısı ele alınacaktır. |
| 10 | [[../../courses/diferansiyel-denklemler/notes/tp_laplace-donusumu-tanim\|Laplace Dönüşümü: Tanım ve Temel Dönüşümler]] · [[../../courses/diferansiyel-denklemler/notes/tp_laplace-donusum-kurallari\|Dönüşüm Kuralları: Türev ve Öteleme]] · [[../../courses/diferansiyel-denklemler/notes/tp_ters-laplace-ve-baslangic-deger-problemleri\|Ters Dönüşüm ve Başlangıç Değer Problemleri]] | Laplace dönüşümünün tanımı ve temel dönüşümleri, türev kuralları, ters dönüşüm ve başlangıç değer problemlerinin Laplace yöntemiyle çözümü ele alınacaktır. |
| 11 | [[../../courses/diferansiyel-denklemler/notes/tp_birim-basamak-ve-parcali-girdiler\|Birim Basamak Fonksiyonu ve Parçalı Girdiler]] · [[../../courses/diferansiyel-denklemler/notes/tp_konvolusyon-teoremi\|Konvolüsyon Teoremi]] · [[../../courses/diferansiyel-denklemler/notes/tp_transfer-fonksiyonu-ve-durtu-cevabi\|Transfer Fonksiyonu ve Dürtü Cevabı]] | Birim basamak fonksiyonu ve parçalı girdiler, konvolüsyonun temel fikri ve transfer fonksiyonu–dürtü cevabı üzerinden giriş–sistem–çıkış ilişkisi ele alınacaktır. |
| 12 | [[../../courses/diferansiyel-denklemler/notes/tp_sistemlere-gecis-ve-durum-vektoru\|Sistemlere Geçiş ve Durum Vektörü]] · [[../../courses/diferansiyel-denklemler/notes/tp_lineer-sistemler-genel-teori\|Lineer Sistemlerin Genel Teorisi ve Temel Matris]] | Durum vektörü ve matris gösterimi, yüksek mertebeli denklemlerin birinci mertebe sisteme dönüştürülmesi, lineer sistemlerin genel çözüm yapısı ve temel matris ele alınacaktır. |
| 13 | [[../../courses/diferansiyel-denklemler/notes/tp_ozdegerlerle-homojen-sistemler\|Özdeğerlerle Homojen Sistem Çözümü]] · [[../../courses/diferansiyel-denklemler/notes/tp_faz-portresi-ve-kararlilik\|Faz Portresi ve Kararlılık]] | Sabit katsayılı homojen sistemler özdeğer–özvektör yöntemiyle çözülecek; özdeğer yapısının yörüngeler ve kararlılık üzerindeki etkisi incelenecektir. |
| 14 | [[../../courses/diferansiyel-denklemler/notes/tp_homojen-olmayan-sistemler\|Homojen Olmayan Sistemler]] · [[../../courses/diferansiyel-denklemler/notes/tp_sayisal-cozum-euler-yontemi\|Sayısal Çözüm: Euler Yöntemi]] | Homojen olmayan lineer sistemlerde zorlamanın etkisi ele alınacak; analitik çözümün bulunmadığı veya pratik olmadığı durumlara geçiş olarak Euler yöntemiyle temel sayısal çözüm fikri kurulacaktır. |

## Çalışma Notları

Aşağıdaki çalışma notları çözümlü örnekler, hata avı, işlem pratiği, karma sorular ve yapay zekâ ile kendi kendine kontrol bölümleri içerir. Her notu ilgili konuyu tamamladıktan sonra bağımsız olarak kullanabilirsiniz; listedeki sıra zorunlu bir çalışma sırası değildir. Çözümünüzde yalnız sonucu değil, denklem sınıfını, seçtiğiniz yöntemi, ara adımları ve çözüm aralığını da yazın.

- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_tum-donem-soru-havuzu\|Dönem Sonu Soru Havuzu ve Konu Takip Yönergesi]]
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
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_ozel-cozum-yontem-secimi\|Özel Çözüm Yöntem Seçimi]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_belirsiz-katsayilar\|Belirsiz Katsayılar]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_sabitlerin-degisimi\|Sabitlerin Değişimi]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_yuksek-mertebeli-sabit-katsayili-denklemler\|Yüksek Mertebeli Sabit Katsayılı Denklemler]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_cauchy-euler-denklemi\|Cauchy–Euler Denklemi]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_laplace-temel-donusumler-ve-kurallar\|Laplace: Temel Dönüşümler ve Kurallar]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_ters-laplace-ve-baslangic-deger-problemleri\|Ters Laplace ve Başlangıç Değer Problemleri]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_birim-basamak-ve-parcali-girdiler\|Birim Basamak ve Parçalı Girdiler]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_konvolusyon\|Konvolüsyon]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_laplace-ile-integral-denklemler\|Laplace ile İntegral Denklemler]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_transfer-fonksiyonu-ve-durtu-cevabi\|Transfer Fonksiyonu ve Dürtü Cevabı]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_sistemlere-gecis-ve-lineer-sistem-yapisi\|Sistemlere Geçiş ve Lineer Sistem Yapısı]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_ozdegerlerle-homojen-sistemler\|Özdeğerlerle Homojen Sistemler]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_faz-portresi-ve-kararlilik\|Faz Portresi ve Kararlılık]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_homojen-olmayan-sistemler\|Homojen Olmayan Sistemler]]
- [[../../courses/_ortak/diferansiyel-denklemler/notes/ex_euler-yontemi\|Euler Yöntemi]]
