---
title: "Süperpozisyon ve Ölçüm"
subtitle: QBronze — S10
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-01-01
execute:
  echo: false
---

## Geçen Konudan Köprü

- Quantum state: birim çember, amplitude, norm koşulu
- Hadamard: negatif amplitüd → girişim
- Şimdi: süperpozisyon nedir, ölçüm ne yapar?

::: {.notes}
Süperpozisyon bu konunun merkezinde. Ama dikkat: süperpozisyon "hem 0 hem 1 olmak" değil — bu yanlış bir ifade. Quantum state'in olasılıksal klasik sistemden farkını netleştirmek gerekiyor.
:::

---

## Klasik Benzetme — Neden Yetmez?

Olasılıksal klasik sistemde:

$$
v = \begin{bmatrix}0.3\\0.7\end{bmatrix}:
\text{ sistem ya 0'da ya 1'de — biz sadece bilmiyoruz}
$$

Kuantum süperpozisyonunda:

$$
|\psi\rangle = \frac{1}{\sqrt{2}}|0\rangle + \frac{1}{\sqrt{2}}|1\rangle:
\text{ sistem "bilinmiyor" değil, **hem 0 hem 1 yönünde**}
$$

- Fark: kuantum amplitüdler **birbirini etkileyebilir**

::: {.notes}
Klasik sistemde belirsizlik epistemik: sistem gerçekte bir durumda, biz bilmiyoruz. Kuantum sistemde ise süperpozisyon ontolojik: ölçüm yapılmadan önce sistem gerçekten "her iki durumda da".

Bu farkın gözlemsel kanıtı: iki Hadamard deneyi. Klasik belirsizlik ile çalışsaydık, iki Hadamard uygulamak belirsizliği artırırdı veya olduğu gibi bırakırdı. Ama kuantum sistem $HH|0\rangle = |0\rangle$ veriyor — belirsizlik tamamen yok oluyor, sistem başlangıç durumuna dönüyor.

Neden bu mümkün? Çünkü amplitüdler birbirini iptal edebiliyor: $+1/2$ ve $-1/2$ toplamı sıfır. Klasik olasılıklar bunu yapamaz — 0.5 + 0.5 her zaman 1, hiçbir zaman 0 olmuyor.
:::

---

## İki Hadamard Adım Adım

Başlangıç: $|0\rangle = [1, 0]^T$

**Adım 1** — Birinci Hadamard:

$$
H|0\rangle = \frac{1}{\sqrt{2}}\begin{bmatrix}1\\1\end{bmatrix} = \frac{1}{\sqrt{2}}|0\rangle + \frac{1}{\sqrt{2}}|1\rangle
$$

**Adım 2** — İkinci Hadamard (doğrusallık):

$$
H\left(\frac{1}{\sqrt{2}}|0\rangle + \frac{1}{\sqrt{2}}|1\rangle\right)
= \frac{1}{\sqrt{2}}H|0\rangle + \frac{1}{\sqrt{2}}H|1\rangle
$$

$$
= \frac{1}{\sqrt{2}}\cdot\frac{1}{\sqrt{2}}(|0\rangle+|1\rangle) + \frac{1}{\sqrt{2}}\cdot\frac{1}{\sqrt{2}}(|0\rangle-|1\rangle)
= |0\rangle
$$

::: {.notes}
Bu hesabı adım adım izleyelim.

Adım 1: $H|0\rangle = \frac{1}{\sqrt{2}}[1,1]^T$. Süperpozisyon hali.

Adım 2 için doğrusallık kullanıyoruz: $H(\alpha|\psi_1\rangle + \beta|\psi_2\rangle) = \alpha H|\psi_1\rangle + \beta H|\psi_2\rangle$. Kuantum operatörler lineer — bu çok güçlü bir özellik.

$H|0\rangle = \frac{1}{\sqrt{2}}(|0\rangle+|1\rangle)$ ve $H|1\rangle = \frac{1}{\sqrt{2}}(|0\rangle-|1\rangle)$ değerlerini koyuyoruz.

$|1\rangle$ bileşenlerine bakın: $+\frac{1}{2}|1\rangle + (-\frac{1}{2})|1\rangle = 0$. İptal oldu — bu girişim.
$|0\rangle$ bileşenlerine bakın: $\frac{1}{2}|0\rangle + \frac{1}{2}|0\rangle = |0\rangle$. Güçlendi.

Sonuç: $|0\rangle$. Deterministik.
:::

---

## Girişim Mekanizması

| | $|0\rangle$ bileşeni | $|1\rangle$ bileşeni |
|--|-----|-----|
| $\frac{1}{\sqrt{2}}H|0\rangle$ | $+\frac{1}{2}$ | $+\frac{1}{2}$ |
| $\frac{1}{\sqrt{2}}H|1\rangle$ | $+\frac{1}{2}$ | $-\frac{1}{2}$ |
| **Toplam** | $+1$ | $\mathbf{0}$ |

- **Yapıcı girişim:** $|0\rangle$ bileşeni güçlendi
- **Yıkıcı girişim:** $|1\rangle$ bileşeni iptal oldu

::: {.notes}
Tablo formu hesabı netleştiriyor. İki katkı var: birinci H adımından gelen ve ikinci H adımından gelen. $|0\rangle$ için iki katkı aynı işarette → toplandı. $|1\rangle$ için iki katkı zıt işarette → iptal oldu.

Klasik olasılık bu işlemi yapamaz. Olasılık $1/4 + 1/4 = 1/2 \neq 0$. Yalnızca amplitüdler hem pozitif hem negatif olabildikleri için yıkıcı girişim gerçekleşebiliyor.

Bu, Deney 3'teki (foton deneyi) B2 dedektörünün hiç tetiklenmemesinin matematiksel açıklaması.
:::

---

## Ölçüm ve Collapse

Ölçüm öncesi: $|\psi\rangle = a|0\rangle + b|1\rangle$

Ölçüm yapılınca:
- $Pr(0) = a^2$ ile **$|0\rangle$ çıkar** → yeni durum $|0\rangle$
- $Pr(1) = b^2$ ile **$|1\rangle$ çıkar** → yeni durum $|1\rangle$

Süperpozisyon **kalıcı olarak bozulur** — bu "wave function collapse"

::: {.callout-note}
Görsel eklenecek: birim çemberde süperpozisyon vektörü, ölçüm sonrası iki olası temel duruma kolaps.
:::

::: {.notes}
Ölçüm süreci iki şey yapıyor: (1) sonucu olasılıksal olarak belirliyor, (2) quantum state'i "kolaps" ettiriyor. Ölçümden sonra sistem süperpozisyondan çıkıyor, belirlenen temel durumda oluyor.

Bu geri alınamaz. Kolaps oldu mu, önceki süperpozisyon bilgisi gitti. İki kez aynı ölçümü yaparsanız ikinci kez hep aynı sonucu alırsınız — çünkü artık temel bir durumdasınız.

Foton deneyiyle bağlantı: Deney 2'de dedektör A vardı — foton ilk ışın bölücüden sonra "ölçüldü". Bu ölçüm süperpozisyonu bozdu. Bu yüzden Deney 2 ve Deney 3 farklı davrandı. Ölçüm sistemin evrimini etkiliyor.
:::

---

## Ölçümün Devreye Girdiğinde Farklı Sonuç

Devre: $|0\rangle \to H \to$ (ölçüm) $\to H \to$ ölçüm

İlk ölçüm sonrası durum ya $|0\rangle$ ya $|1\rangle$:

- $|0\rangle$ ise: son $H|0\rangle = |+\rangle$ → ikinci ölçüm %50/%50
- $|1\rangle$ ise: son $H|1\rangle = |-\rangle$ → ikinci ölçüm %50/%50

**Her iki durumda da final: %50/%50** — yıkıcı girişim kalmadı

::: {.notes}
Bu deney iki Hadamard deneyi ile karşılaştırılınca güçlü bir noktayı gösteriyor. Araya ölçüm girerse süperpozisyon bozuluyor ve ikinci Hadamard'ın girişim yapabileceği amplitüd yok. Sonuç deterministik değil, olasılıksal.

Foton deneyi 2'de (dedektör A varken) olan da buydu. Foton "ölçüldü" — hangi yolda olduğu belirlendi. Bu, iki Hadamard'ın (iki ışın bölücünün) birbirini iptal etmesini engelledi. $P(B1) = P(B2) = 1/4$ sonucu tam olarak bu mekanizmadan geliyor.

Ölçüm → bilgi kazanmak = sistem üzerinde bozucu etki. Bu kuantum mekaniğinin klasik fiziğe en temel ayrışma noktalarından biri.
:::

---

::: {.callout-warning}
## Dikkat — Karıştırılabilecek Noktalar

**Süperpozisyon = "bilmiyoruz" değil**\
"Hem 0 hem 1" fiziksel gerçeklik. Klasik belirsizlikten farkı: amplitüdler birbirini iptal edebiliyor.

**Ölçüm sonrası durum değişiyor**\
İkinci kez aynı ölçüm yaparsanız aynı sonuç: collapse kalıcı.

**Girişim amplitüdlerde oluyor, olasılıklarda değil**\
$1/2 + (-1/2) = 0$ amplitüd. Ama $1/4 + 1/4 = 1/2 \neq 0$ olasılık. Girişim yalnızca amplitüd dilinde mümkün.
:::

---

## Özet

1. **Süperpozisyon**: quantum state'in iki temel durum amplitüdünün doğrusal kombinasyonu
2. Süperpozisyon ≠ klasik belirsizlik — amplitüdler birbirini iptal edebilir
3. **Yapıcı girişim**: aynı işaretli amplitüdler toplanır
4. **Yıkıcı girişim**: zıt işaretli amplitüdler iptal olur
5. **Ölçüm ve collapse**: olasılıksal sonuç, süperpozisyon geri dönülemez biçimde bozulur
6. Araya giren ölçüm girişimi engeller

::: {.notes}
Klasik sistemler bloğu ve temel kuantum sistemler bloğu bu konuyla tamamlandı. Sonraki konular (dönmeler, yansımalar) birim çember görselini ve bu amplitude dilini kullanarak operatörleri sistematik incelemeye geçecek.
:::

---

*Sonraki konu: birim çember üzerindeki işlemler, dönme operatörleri.*
