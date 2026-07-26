---
title: "Diferansiyel Denklemler Notasyon Rehberi"
subtitle: "MATE 214 — Hızlı Başvuru"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
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

::: {.callout-tip}
## Bu Rehberi Nasıl Kullanabilirsiniz?

Bir sembolü unuttuğunuzda önce kısa anlamına bakın. Hesabın hangi koşullarda geçerli olduğunu veya gösterimin nereden geldiğini hatırlamıyorsanız ayrıntılı tanım bağlantısını açın. Rehberi ezber listesi olarak değil, konu notlarına geri dönüş noktası olarak kullanın.
:::
