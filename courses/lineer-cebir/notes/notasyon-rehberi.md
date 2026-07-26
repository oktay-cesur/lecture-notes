---
title: "Lineer Cebir Notasyon Rehberi"
subtitle: "MATE 213 — Hızlı Başvuru"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
description: "MATE 213 ders notlarında kullanılan temel lineer cebir gösterimleri ve ayrıntılı tanımlara bağlantılar."
sidebar: lineer-cebir
execute:
  echo: false
---

# Lineer Cebir Notasyon Rehberi

Bu sayfa ders notlarında kullanılan temel sembolleri hızlıca hatırlamanız için hazırlanmıştır. Her gösterimin ayrıntılı tanımı, ilk kullanıldığı konu anlatımında verilir. Son sütundaki bağlantıları kullanarak tanıma, örneklere ve kullanım koşullarına dönebilirsiniz.

| Gösterim | Kısa anlamı | Ayrıntılı tanım |
|---|---|---|
| $\alpha,\beta,\lambda\in\mathbb{R}$ | Gerçek sayı skaleri | [Skaler Neden Ayrı Bir Ad?](tp_skaler-ve-vektor-kavrami.md#skaler-neden-ayrı-bir-ad) |
| $u,v,x\in\mathbb{R}^n$ | $n$ bileşenli sütun vektörü | [Koordinat Vektörü ve Bileşenler](tp_skaler-ve-vektor-kavrami.md#koordinat-vektörü-ve-bileşenler) |
| $A=[a_{ij}]\in\mathbb{R}^{m\times n}$ | $m$ satırlı, $n$ sütunlu matris; $a_{ij}$, $i$. satır $j$. sütundaki eleman | [Matris: Şekil ve Eleman](tp_matrisin-yapisi-ve-okumalari.md#matris-şekil-ve-eleman) |
| $A^T$, $0$, $I_n$ | Transpoz, sıfır matrisi ve $n\times n$ birim matris | [Transpoz](tp_ozel-matrisler-ve-transpoz.md#transpoz-okuma-eksenlerini-değiştirmek) · [Sıfır Matrisi](tp_ozel-matrisler-ve-transpoz.md#sıfır-matrisi) · [Birim Matris](tp_ozel-matrisler-ve-transpoz.md#skaler-ve-birim-matris) |
| $Ax$, $AB$ | Matris-vektör ve matris-matris çarpımı | [Çarpımı Açık Yazmak](tp_matris-carpimlari.md#çarpımı-açık-yazmak) · [Satır–Sütun Formalizmi](tp_matris-carpimlari.md#satırsütun-formalizmi) |
| $Ax=b$, $[A\mid b]$ | Lineer denklem sistemi ve genişletilmiş matrisi | [Matris Denklemi: $Ax=b$](tp_denklem-sistemleri-ve-matris-gosterimi.md#matris-denklemi-axb) · [Genişletilmiş Matris](tp_denklem-sistemleri-ve-matris-gosterimi.md#genişletilmiş-matris) |
| $R_i\leftrightarrow R_j$, $R_i\leftarrow\lambda R_i$, $R_i\leftarrow R_i+\lambda R_j$ | Üç elementer satır işlemi | [Üç Elementer Satır İşlemi](tp_denklem-sistemleri-ve-matris-gosterimi.md#üç-elementer-satır-işlemi) |
| Pivot, REF, RREF | Öncü eleman, satır basamak biçimi ve indirgenmiş satır basamak biçimi | [Pivot Kavramı](tp_gauss-eliminasyonu-ve-basamak-bicimleri.md#pivot-kavramı) · [REF](tp_gauss-eliminasyonu-ve-basamak-bicimleri.md#satır-basamak-biçimi-ref) · [RREF](tp_gauss-eliminasyonu-ve-basamak-bicimleri.md#indirgenmiş-satır-basamak-biçimi-rref) |
| $\operatorname{rank}(A)$ | $A$ matrisindeki bağımsız bilgi miktarını veren pivot sayısı | [Rank Tanımı](tp_matrisin-ranki.md#rank-tanımı) |
| $E$, $A^{-1}$ | Elementer matris ve $A$ matrisinin tersi | [Elementer Matrisler](tp_elementer-matrisler.md) · [Matrislerde Ters](tp_ters-matris-ve-tersinirlik.md#matrislerde-aynı-fikir) |
| $Ax=0$ | Homojen lineer denklem sistemi | [Homojen Denklem Sistemi](tp_homojen-sistemlerden-lineer-bagimsizliga.md#homojen-denklem-sistemi) |
| $\det(A)$ | Kare matrisin determinantı | [Determinant Nedir?](tp_determinant-ve-cramer-kurali.md#determinant-nedir) |

::: {.callout-tip}
## Bu Rehberi Nasıl Kullanabilirsiniz?

Bir sembolü unuttuğunuzda önce kısa anlamına bakın. Hesabın hangi koşullarda geçerli olduğunu veya gösterimin nereden geldiğini hatırlamıyorsanız ayrıntılı tanım bağlantısını açın. Rehberi ezber listesi olarak değil, konu notlarına geri dönüş noktası olarak kullanın.
:::
