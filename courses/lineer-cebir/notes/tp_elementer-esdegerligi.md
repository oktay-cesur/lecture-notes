---
title: "Elementer İşlem = Matrisle Çarpım"
subtitle: "MATE 213 — İlk Öğretim Bloğu"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-26
execute:
  echo: false
---

## Kanıtlanmamış Bir İddia

Denklem sistemleri notunda üç elementer satır işlemi tanımlandı ve her biri için bir $E$ matrisi olduğu söylendi:

$$
\boxed{\text{her elementer satır işlemi, uygun bir }E\text{ ile soldan çarpmadır}}
$$

Bu kutu o notta **iddia** olarak verildi, kanıtlanmadı.

::: {.notes}
Bu notun tek işi bu kutuyu kanıtlamak. Tek bir iddiayı ele alıyoruz: her elementer satır işlemi, uygun bir $E$ matrisiyle soldan çarpmadır. Üç işlemin tanımı ve $E_i$ notasyonu daha önce kuruldu; burada yalnız aradaki denkliği gösteriyoruz.

Üç işlemin tanımını, $\lambda\neq0$ koşulunun gerekçesini, $E$'nin tersinir olduğunu burada tekrar kurmuyoruz — hepsi zaten var. Yalnız denkliğin kendisini gösteriyoruz.
:::

---

## Gözlem: Üç Örnekte de Aynı Şey Oluyor

$$
A=\begin{bmatrix}1&2&-1\\3&0&4\\-2&5&1\end{bmatrix}
$$

$R_2\leftarrow 3R_2$ için, $R_1\leftrightarrow R_3$ için, $R_3\leftarrow R_3-3R_1$ için sırasıyla:

$$
E_1=\begin{bmatrix}1&0&0\\0&3&0\\0&0&1\end{bmatrix},
\quad
E_2=\begin{bmatrix}0&0&1\\0&1&0\\1&0&0\end{bmatrix},
\quad
E_3=\begin{bmatrix}1&0&0\\0&1&0\\-3&0&1\end{bmatrix}
$$

> Her üçünde $E_iA$ hesabı, elle yapılan satır işlemiyle aynı sonucu veriyor.

::: {.notes}
Üç matriste de birim matristen sapan girdiler işlemin kendisini taşıyor: $E_1$'de $(2,2)$ konumundaki $3$, $E_2$'de birinci ve üçüncü satırların yer değiştirmesini sağlayan dört girdi, $E_3$'te $(3,1)$ konumundaki $-3$.

$E_1A$: ikinci satır $3\cdot[3\ 0\ 4]=[9\ 0\ 12]$, gerisi aynı. $E_2A$: birinci ve üçüncü satır yer değiştirir. $E_3A$: üçüncü satır $[-2\ 5\ 1]-3[1\ 2\ -1]=[-5\ -1\ 4]$ olur.

Üçü de doğrulanabilir ama üçü de ayrı ayrı doğrulanmış olması genel bir kanıt vermiyor — yalnız bu üç $E$ için, bu tek $A$ için çalıştığını gösteriyor. Bunu kontrol edip geçiyoruz; asıl soru *neden* olduğu.
:::

---

## Mekanizma: Satır Birleşimi Okuması

Çarpım notunda kurulan kimliği hatırlayalım: $r_i(B)$, $B$'nin $i$. satırı olsun.

$$
\boxed{(CA)\text{'nın }i\text{. satırı}=\sum_{k}c_{ik}\;r_k(A)}
$$

Soldaki matrisin bir satırı, sağdaki matrisin satırlarının hangi ağırlıklarla toplanacağını söylüyor.

::: {.notes}
Bu, çarpım notundaki $r_1B$ örneğinin genelleştirilmiş hâli. Orada $r_1B$'yi dört ayrı nokta çarpımıyla hesaplamıştık; aynı sayı, $B$'nin (orada $A$'nın) satırlarının $20,15,10$ ağırlıklı toplamı olarak da okunabiliyordu.

Burada kullandığımız tek araç bu. Yeni bir kural değil, çarpımın satır tarafından okunuşu.
:::

---

## Adım 1: Katsayılar $A$'dan Bağımsız

Üç elementer işlemin her biri, çıktı satırlarını belirli bir kuralla yazar:

- Ölçekleme: $i$. satır $\to \lambda\, r_i(A)$
- Yer değiştirme: $i$. satır $\to r_j(A)$
- Satır ekleme: $i$. satır $\to r_i(A)+\lambda\, r_j(A)$

::: {.notes}
Üçünde de: hangi satırların hangi katsayıyla toplanacağı, $A$'nın içindeki sayılara bakılmadan önceden bellidir. Kuralı yazmak için matrisin girdilerine bakmaya hiç gerek duymuyoruz; yalnız işlemin adı yeterli.
:::

---

## Adım 2: Bu, Bir $C$ Matrisi Demektir

$\varepsilon$ elementer işlemi, $c_{ik}$ katsayı tablosu olsun:

$$
\varepsilon(A)\text{'nın }i\text{. satırı}=\sum_k c_{ik}\,r_k(A)
\quad\Longrightarrow\quad
\varepsilon(A)=CA
$$

::: {.notes}
Bölüm 3'teki kimlik gereği, Adım 1'de gördüğümüz sabit katsayıları bir tabloya yazabiliriz. Tablonun $i$. satırı, çıktının $i$. satırını üretmek için kullanılan ağırlıkları taşır; bu da tam olarak bir matrisin satırıdır.

Bu eşitlik **her** $A$ için geçerli, çünkü $c_{ik}$'lar $A$'dan hiç etkilenmedi.
:::

---

## Adım 3: $A=I$ Koymak

Eşitlik her $A$ için geçerliyse, özel olarak $A=I$ için de geçerli:

$$
\varepsilon(I)=CI=C
$$

> $C=\varepsilon(I)$. Yani aradığımız matris tam olarak $E:=\varepsilon(I)$'dir ve $\varepsilon(A)=EA$ her $A$ için doğrudur.

::: {.notes}
Bölüm 1'deki kutu böylece kanıtlanmış oldu.

Sıra önemli: önce böyle bir $C$'nin var olduğunu (Adım 2), sonra ne olduğunu (Adım 3) gösterdik. $A=I$'yi baştan koymak, henüz $\varepsilon(A)=CA$ kurulmadan bir şey ispatlamaz.

"Her $A$ için" şartı düşürülemez. Tek bir $A$ üzerinde $\varepsilon(A)=CA$ eşitliğini sağlayan $C$ genellikle tek değildir — mesela $A$'nın satırları bağımlıysa iki farklı $C$ aynı sonucu verebilir. $A=I$ seçimi bu belirsizliği ortadan kaldırır çünkü $I$'nın satırları bağımsızdır.
:::

---

## Kontrol: Bölüm 2'deki Üç Örnek

$$
E_1=\varepsilon_1(I),\qquad E_2=\varepsilon_2(I),\qquad E_3=\varepsilon_3(I)
$$

Her biri birim matrise ilgili işlemin uygulanmış hâli.

::: {.notes}
Bunu doğrudan görebiliriz: $I$'ya $R_2\leftarrow 3R_2$ uygulanınca $E_1$, $R_1\leftrightarrow R_3$ uygulanınca $E_2$, $R_3\leftarrow R_3-3R_1$ uygulanınca $E_3$ çıkar. Bölüm 2'deki üç matris tam olarak bunlar.
:::

---

## Boyut Notu

$$
A\in\mathbb{R}^{m\times n}
\quad\Longrightarrow\quad
E\in\mathbb{R}^{m\times m}
$$

**Bu neden önemli.** Denklik "her $A$ için tek bir $E$" iddiası.

::: {.notes}
Kanıtın hiçbir adımında $A$'nın sütun sayısı ya da girdileri kullanılmadı — yalnız satır sayısı $m$ ve işlemin kendisi.

$A$'ya özel bir $E$ bulmak (örneğin denklem çözerek) denkliği göstermez; kanıtın Adım 2'si tam olarak bu genelliği sağlıyor.
:::

---

## Sonuç

$$
\boxed{\varepsilon(A)=EA,\qquad E=\varepsilon(I)}
$$

Denklik kanıtlandı.

::: {.notes}
Tersinirlik, bileşim sırası, $[A\mid I]$ yöntemi, rank ve determinant bağlantıları başka notlarda zaten kurulu — hepsi bu denkliği veri olarak kullanıyor.

Bu not tek bir taşı yerine koydu: "elementer işlem" ile "matrisle çarpım" aynı nesne. Diğer notlardaki $E_i$ kullanımı artık tanım gereği değil, bu kanıt gereği geçerli.
:::
