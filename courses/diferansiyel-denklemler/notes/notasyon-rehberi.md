---
title: "Diferansiyel Denklemler Notasyon Rehberi"
subtitle: "MATE 214 — Hızlı Başvuru"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-08-24
description: "MATE 214 ders notlarında kullanılan temel diferansiyel denklem gösterimleri ve ayrıntılı tanımlara bağlantılar."
sidebar: diferansiyel-denklemler
execute:
  echo: false
---

# Diferansiyel Denklemler Notasyon Rehberi

Bu sayfa ders notlarında kullanılan temel sembolleri hızlıca hatırlamanız için hazırlanmıştır. Her gösterimin ayrıntılı tanımı, ilk kullanıldığı konu anlatımında verilir. Son sütundaki bağlantıları kullanarak tanıma, örneklere ve kullanım koşullarına dönebilirsiniz.

| Gösterim | Kısa anlamı | Ayrıntılı tanım |
|---|---|---|
| $x$, $t$ | Bağımsız değişken; $t$ çoğunlukla zamanı gösterir | [Terminoloji](tp_degisimi-okumak.md#terminoloji) |
| $y(x)$, $Q(t)$, $T(t)$ | Diferansiyel denklemde aranan bağımlı değişken veya fonksiyon | [Terminoloji](tp_degisimi-okumak.md#terminoloji) |
| $y'$, $\dfrac{dy}{dx}$, $\dot y$, $Dy$ | Aynı birinci türevin bağlama göre kullanılan farklı gösterimleri | [Notasyon: Aynı İlişkiyi Farklı Biçimlerde Yazmak](tp_degisimi-okumak.md#notasyon-aynı-ilişkiyi-farklı-biçimlerde-yazmak) |
| $y^{(n)}$ | $y$ fonksiyonunun $n$'inci türevi; denklemdeki en yüksek türev mertebeyi belirler | [Mertebe: Daha Yakından Bakış](tp_degisimi-okumak.md#mertebe-daha-yakından-bakış) |
| $y(x_0)=y_0$ | Çözüm ailesinden bir üyeyi seçmek için verilen başlangıç koşulu | [Başlangıç Koşuluyla Belirlenen Çözüm](tp_cozum-nedir.md#çözüm-başlangıç-koşuluyla-belirlenen-çözüm) |
| $C$, $c_1,\ldots,c_n$ | İntegrasyon veya genel çözüm ailesindeki keyfî sabitler | [Genel Çözüm](tp_cozum-nedir.md#çözüm-genel-çözüm) |
| $y'=f(x,y)$ | Birinci mertebeden diferansiyel denklemin açık biçimi | [Denklemi Çözmeden Önce Adlandırmak](tp_lineerlik-ve-otonomluk.md#denklemi-çözmeden-önce-adlandırmak) |
| $y'=f(y)$ | Bağımsız değişkenin sağ tarafta açıkça görünmediği otonom denklem | [Otonom Denklem](tp_lineerlik-ve-otonomluk.md#otonom-denklem) |
| $y'=g(x)h(y)$ | Değişkenleri iki tarafa ayırmaya elverişli denklem | [Ayrılabilir Denklem Tanımı](tp_ayrilabilir-denklemler.md#tanım-ayrılabilir-denklem) |
| $y'=F(y/x)$ | $v=y/x$ dönüşümüyle ayrılabilir hâle getirilen homojen tip denklem | [Homojen Tip Denklem Tanımı](tp_homojen-tip-denklemler.md#tanım-homojen-tip-denklem) |
| $y'+p(x)y=q(x)$ | Birinci mertebeden lineer denklemin standart biçimi | [Standart Biçim](tp_birinci-mertebeden-lineer-denklemler.md#standart-biçim) |
| $y'+p(x)y=q(x)y^n$ | $n\neq0,1$ için Bernoulli denklemi | [Bernoulli Denklemi Tanımı](tp_bernoulli-denklemi.md#tanım) |
| $M\,dx+N\,dy=0$ | Diferansiyel biçimde yazılmış birinci mertebe denklem | [Tam Denklem Tanımı](tp_tam-diferansiyel-denklemler.md#tam-denklem-tanımı) |
| $F_x=M$, $F_y=N$, $F(x,y)=C$ | Tam denklemde potansiyel fonksiyon ve örtük çözüm ailesi | [Tam Denklem Tanımı](tp_tam-diferansiyel-denklemler.md#tam-denklem-tanımı) |
| $\mu$ | Denklemi çözülmesi kolay veya tam bir biçime getiren integrasyon çarpanı | [İntegrasyon Çarpanı Koşulu](tp_integrasyon-carpani-tam-olmayan.md#koşulun-kurulması) |
| $L[y]$ | Lineer diferansiyel ifadenin operatör gösterimi | [Süperpozisyonun Kaynağı](tp_ninci-mertebe-lineer-genel-teori.md#süperpozisyonun-kaynağı) |
| $W(y_1,\ldots,y_n)$ | Çözümlerin lineer bağımsızlığını incelemek için kullanılan Wronskian | [Wronskian Tanımı](tp_lineer-bagimsizlik-wronskian.md#wronskian-tanımı) |
| $y_h$, $y_p$, $y=y_h+y_p$ | Homojen genel çözüm, homojen olmayan denklemin bir özel çözümü ve tam genel çözüm | [Homojen Olmayan Denklemler İçin Yapı](tp_temel-cozum-kumesi.md#homojen-olmayan-denklemler-için-yapı) |
| $ar^2+br+c=0$ | Sabit katsayılı denklemin karakteristik denklemi; bilinmeyeni $r$'dir | [Karakteristik Denklem](tp_sabit-katsayili-homojen-denklemler.md#karakteristik-denklem) |
| $r=\alpha\pm i\beta$ | Kompleks eşlenik kök çifti; $\alpha$ üstel zarfı, $\beta$ salınım hızını verir | [Kompleks Eşlenik Çift](tp_kompleks-karakteristik-kokler.md#kompleks-eşlenik-çift) |
| $(c_1+c_2x)e^{rx}$ | Katlı kök durumunda genel çözüm; $x$ çarpanı ikinci bağımsız çözümü üretir | [Genel Çözüm](tp_katli-karakteristik-kokler.md#genel-çözüm) |
| $y_2=v(x)y_1$ | Mertebe indirmede ikinci çözüm için kullanılan dönüşüm | [Temel Dönüşüm](../../_ortak/diferansiyel-denklemler/notes/ex_mertebe-indirme.md#temel-dönüşüm) |
| $A$, $B$, $A_n,\ldots,A_0$ | Belirsiz katsayılar yönteminde aday kalıbının hesapla belirlenen katsayıları | [Aday Tablosu](tp_belirsiz-katsayilar.md#aday-tablosu) |
| $u_1(x)$, $u_2(x)$ | Sabitlerin değişiminde homojen çözümlerin katsayısı olan fonksiyonlar | [Sabitlerin Değişimi](../../_ortak/diferansiyel-denklemler/notes/ex_sabitlerin-degisimi.md) |
| $p(r)=a_nr^n+\cdots+a_0$ | Yüksek mertebeli sabit katsayılı denklemin karakteristik polinomu | [Karakteristik Polinom](tp_yuksek-mertebeli-denklemler.md#karakteristik-polinom) |
| $y=x^m$, $am^2+(b-a)m+c=0$ | Cauchy–Euler denkleminin kuvvet adayı ve aday denklemi | [Aday Denklemi](tp_cauchy-euler-denklemi.md#aday-denklemi) |
| $\mathcal{L}\{f\}(s)=F(s)$ | Laplace dönüşümü; küçük harf özgün fonksiyon, büyük harf dönüşüm | [Tanım](tp_laplace-donusumu-tanim.md#tanım) |
| $s$ | Laplace dönüşümünün değişkeni; geçerlilik aralığı genellikle $s>\alpha$ | [Tanım](tp_laplace-donusumu-tanim.md#tanım) |
| $sF(s)-f(0)$ | Türevin dönüşümü; başlangıç koşulu formülün içinde yer alır | [Birinci Türev Kuralı](tp_laplace-donusum-kurallari.md#birinci-türev-kuralı) |
| $F(s-a)$ | Birinci öteleme: özgün tarafta $e^{at}$ çarpanı, dönüşümde $s$ kayması | [Öteleme: $s$ Ekseninde Kaydırma](tp_laplace-donusum-kurallari.md#öteleme-s-ekseninde-kaydırma) |
| $\mathcal{L}^{-1}\{F\}$ | Ters Laplace dönüşümü; sürekli fonksiyonlar arasında tektir | [Geri Dönüş](tp_ters-laplace-ve-baslangic-deger-problemleri.md#geri-dönüş) |
| $u(t-a)$ | Birim basamak (Heaviside) fonksiyonu; $t=a$'da açılan anahtar | [Birim Basamak Fonksiyonu](tp_birim-basamak-ve-parcali-girdiler.md#birim-basamak-fonksiyonu) |
| $e^{-as}F(s)$ | İkinci öteleme: $t$ ekseninde $a$ kadar gecikmenin dönüşümdeki karşılığı | [İkinci Öteleme Kuralı](tp_birim-basamak-ve-parcali-girdiler.md#ikinci-öteleme-kuralı) |
| $(f*g)(t)$ | Konvolüsyon; $\int_0^{t}f(\tau)g(t-\tau)\,d\tau$, çarpımın ters dönüşümü | [Konvolüsyon](tp_konvolusyon-teoremi.md#konvolüsyon) |
| $\delta(t-a)$ | Dirac dürtüsü; integral içinde $f(a)$ değerini süzer, dönüşümü $e^{-as}$ | [Dirac Dürtüsü](tp_transfer-fonksiyonu-ve-durtu-cevabi.md#dirac-dürtüsü) |
| $H(s)$, $h(t)$ | Transfer fonksiyonu ve dürtü cevabı; sisteme ait, girdiden bağımsız | [Dürtü Cevabı](tp_transfer-fonksiyonu-ve-durtu-cevabi.md#dürtü-cevabı) |
| $\mathbf{x}(t)$ | Durum vektörü; sistemin $t$ anındaki durumunu taşıyan sütun vektörü | [Durum Vektörü](tp_sistemlere-gecis-ve-durum-vektoru.md#durum-vektörü) |
| $\mathbf{x}'=A\mathbf{x}+\mathbf{f}(t)$ | Birinci mertebe lineer sistemin genel biçimi | [Genel Biçim](tp_sistemlere-gecis-ve-durum-vektoru.md#genel-biçim) |
| $W(t)=\det[\mathbf{x}_1\;\cdots\;\mathbf{x}_n]$ | Sistemler için Wronskian; çözümler sütun olarak dizilir | [Wronskian: Sistem Biçimi](tp_lineer-sistemler-genel-teori.md#wronskian-sistem-biçimi) |
| $X(t)$, $\mathbf{x}=X(t)\mathbf{c}$ | Temel matris ve genel çözümün matris biçimi | [Temel Matris](tp_lineer-sistemler-genel-teori.md#temel-matris) |
| $A\mathbf{v}=\lambda\mathbf{v}$ | Özdeğer denklemi; $e^{\lambda t}\mathbf{v}$ adayından çıkar | [Aday Denkleme Girince](tp_ozdegerlerle-homojen-sistemler.md#aday-denkleme-girince) |
| $T=\operatorname{tr}A$, $D=\det A$ | İz ve determinant; iki boyutlu sistemlerde yörünge tipini belirler | [İz ve Determinantla Karar](tp_faz-portresi-ve-kararlilik.md#iz-ve-determinantla-karar) |
| $h$, $y_{n+1}=y_n+hf(t_n,y_n)$ | Sayısal çözümde adım büyüklüğü ve Euler formülü | [Euler Yöntemi](tp_sayisal-cozum-euler-yontemi.md#euler-yöntemi) |

::: {.callout-tip}
## Bu Rehberi Nasıl Kullanabilirsiniz?

Bir sembolü unuttuğunuzda önce kısa anlamına bakın. Hesabın hangi koşullarda geçerli olduğunu veya gösterimin nereden geldiğini hatırlamıyorsanız ayrıntılı tanım bağlantısını açın. Rehberi ezber listesi olarak değil, konu notlarına geri dönüş noktası olarak kullanın.
:::
