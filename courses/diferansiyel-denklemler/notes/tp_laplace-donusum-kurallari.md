---
title: "Dönüşüm Kuralları: Türev ve Öteleme"
subtitle: "Diferansiyel Denklemler"
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-08-05
execute:
  echo: false
---

## Türevi Dönüştürmek

$$
\mathcal{L}\{f'\}=\int_0^{\infty}e^{-st}f'(t)\,dt
$$

Kısmi integrasyon: $u=e^{-st}$, $dv=f'\,dt$

::: {.notes}
<--- Buradaki işlemler slayt kısmında açıkça yapılmalı.--->
Temel dönüşümler elimizde, ama diferansiyel denklem çözmek için asıl gereken kural henüz yok: türevin dönüşümü. Aranan şey $\mathcal{L}\{f'\}$ ifadesini $\mathcal{L}\{f\}$ cinsinden yazmaktır.

Kısmi integrasyon doğal araçtır, çünkü integrandda bir türev bulunuyor ve kısmi integrasyon türevi diğer çarpana aktarır. $u=e^{-st}$ ve $dv=f'(t)dt$ seçelim; buradan $du=-se^{-st}dt$ ve $v=f(t)$ olur.

Seçimin bu yönde yapılmasının nedeni açık: türevi $f$'nin üzerinden alıp $e^{-st}$'ye geçirmek istiyoruz. Ters seçim işi zorlaştırır, çünkü $f''$ ortaya çıkar.

:::

---

## Birinci Türev Kuralı

$$
\left[e^{-st}f(t)\right]_0^{\infty}
+s\int_0^{\infty}e^{-st}f(t)\,dt
$$

$$
\boxed{\mathcal{L}\{f'\}=sF(s)-f(0)}
$$

::: {.notes}
<--- Buradaki işlemler slayt kısmında açıkça yapılmalı.--->
Kısmi integrasyon $\left[e^{-st}f(t)\right]_0^{\infty}+s\int_0^{\infty}e^{-st}f(t)dt$ verir. İkinci terim tanım gereği $sF(s)$'tir.

Sınır terimini inceleyelim. Üst uçta $f$ üstel mertebedense ve $s$ yeterince büyükse $e^{-st}f(t)\to0$ olur. Alt uçta $t=0$ için $e^0f(0)=f(0)$ çıkar ve köşeli parantez $0-f(0)=-f(0)$ değerini alır.

Sonuç $\mathcal{L}\{f'\}=sF(s)-f(0)$'dır. Bu tek satır Laplace yönteminin bütün gücünü taşıyor: türev alma işlemi, dönüşüm tarafında $s$ ile çarpmaya dönüştü. Fazladan gelen $-f(0)$ terimi ise başlangıç koşulunun ta kendisidir.

Başlangıç koşullarının hesaba nereden girdiği sorusunun cevabı burada. Klasik yöntemlerde koşullar genel çözüm kurulduktan sonra uygulanıyordu; burada dönüşüm formülünün içinde, daha ilk adımda devreye giriyor.

:::

---

## İkinci Türev

$$
\mathcal{L}\{f''\}=s\mathcal{L}\{f'\}-f'(0)
$$

$$
\boxed{\mathcal{L}\{f''\}=s^2F(s)-sf(0)-f'(0)}
$$

::: {.notes}
<--- Buradaki işlemler slayt kısmında açıkça yapılmalı.--->
İkinci türev kuralı, birinci türev kuralını $f'$ fonksiyonuna uygulayarak çıkar. $f'$ yerine yeni bir fonksiyon gibi bakalım: $\mathcal{L}\{(f')'\}=s\mathcal{L}\{f'\}-f'(0)$.

$\mathcal{L}\{f'\}$ yerine $sF(s)-f(0)$ yazalım: $s\bigl(sF(s)-f(0)\bigr)-f'(0)=s^2F(s)-sf(0)-f'(0)$.

Yapı tanıdık: türev mertebesi $s$'nin kuvvetine, başlangıç koşulları da azalan $s$ kuvvetleriyle çarpılmış terimlere gidiyor. İkinci mertebe bir başlangıç değer probleminde $y(0)$ ve $y'(0)$ değerlerinin ikisi de bu formülde görünür — tam olarak ihtiyaç duyulan iki koşul.

Genel formül aynı örüntüyü sürdürür: $\mathcal{L}\{f^{(n)}\}=s^nF(s)-s^{n-1}f(0)-\cdots-f^{(n-1)}(0)$. Her mertebe için gereken koşul sayısı da formülün içinden okunur.

:::

---

## Denklem Cebirsel Oluyor

$$
y''+3y'+2y=0,
\quad y(0)=1,\; y'(0)=0
$$

$$
(s^2Y-s)+3(sY-1)+2Y=0
$$

$$
Y(s)=\frac{s+3}{s^2+3s+2}
$$

::: {.notes}
<--- Dönüşümler slayt kısmında açıkça yazmalı--->
Kuralı bir denkleme uygulayalım. Denklemin her terimini dönüştürelim: $\mathcal{L}\{y''\}=s^2Y-sy(0)-y'(0)=s^2Y-s$, $\mathcal{L}\{y'\}=sY-y(0)=sY-1$ ve $\mathcal{L}\{y\}=Y$.

Denklem $(s^2Y-s)+3(sY-1)+2Y=0$ olur. Burada türev kalmadı; $Y$ bilinmeyeninde cebirsel bir denklem var.

$Y$'yi yalnız bırakalım: $Y(s^2+3s+2)=s+3$ ve $Y(s)=\dfrac{s+3}{s^2+3s+2}$.

Paydadaki $s^2+3s+2$ ifadesine bakın — denklemin karakteristik polinomunun aynısı. Bu rastlantı değildir: türev kuralı $y^{(k)}$ terimini $s^k$ ile çarpıma çevirdiği için, $Y$'nin katsayısı karakteristik polinomun kendisi olur. Payda kökleri yine çözümün üstel bileşenlerini belirleyecek.

Geriye tek iş kaldı: $Y(s)$'ten $y(t)$'ye dönmek. O adım ters dönüşümün konusu.

:::

---

## Öteleme: $s$ Ekseninde Kaydırma

$$
\mathcal{L}\{e^{at}f(t)\}=\int_0^{\infty}e^{-(s-a)t}f(t)\,dt
$$

$$
\boxed{\mathcal{L}\{e^{at}f(t)\}=F(s-a)}
$$

::: {.notes}

Bir fonksiyon $e^{at}$ ile çarpılırsa dönüşümü ne olur? İntegrale bakalım: $\int_0^{\infty}e^{-st}e^{at}f(t)dt=\int_0^{\infty}e^{-(s-a)t}f(t)dt$.

Sağdaki ifade, $F(s)$ tanımındaki $s$ yerine $s-a$ yazılmış hâlidir. Yani $\mathcal{L}\{e^{at}f(t)\}=F(s-a)$ olur.

Kural şunu söylüyor: özgün tarafta üstelle çarpmak, dönüşüm tarafında $s$ eksenini $a$ kadar kaydırmak demektir. Buna birinci öteleme kuralı denir.

Geçerlilik aralığı da kayar. $F(s)$ dönüşümü $s>\alpha$ için tanımlıysa, $F(s-a)$ dönüşümü $s>\alpha+a$ için tanımlıdır.

Kuralın pratik değeri büyük. Tablo yalnız beş satır, ama bu kuralla her satırın üstelle çarpılmış hâli elde edilir; tablonun kapsamı bir anda katlanır.

:::

---

## Ötelemeyi Uygulamak

$$
\mathcal{L}\{te^{2t}\}=\frac{1}{(s-2)^2}
$$

$$
\mathcal{L}\{e^{3t}\sin t\}=\frac{1}{(s-3)^2+1}
$$

::: {.notes}

Birinci örnekte $f(t)=t$ ve $a=2$'dir. $F(s)=\dfrac{1}{s^2}$ olduğundan sonuç $F(s-2)=\dfrac{1}{(s-2)^2}$ çıkar.

İkinci örnekte $f(t)=\sin t$ ve $a=3$'tür. $F(s)=\dfrac{1}{s^2+1}$ olduğundan sonuç $\dfrac{1}{(s-3)^2+1}$'dir. Paydayı açmak gerekmez; kaydırılmış biçimde bırakmak ters dönüşüm alırken çok daha kullanışlıdır.

Kuralı uygularken $s$'nin geçtiği **her** yeri kaydırmak gerekir. $\mathcal{L}\{e^{3t}\cos t\}$ için $\dfrac{s}{s^2+1}$ ifadesinde hem paydaki hem paydadaki $s$ kayar: $\dfrac{s-3}{(s-3)^2+1}$. Yalnız paydayı kaydırmak, bu konudaki en yaygın hatadır.

Ters yönde okumak da aynı derecede işe yarar. Paydada tam kare biçimi görüldüğünde — $(s-a)^2+b^2$ gibi — bir öteleme vardır ve özgün fonksiyonda $e^{at}$ çarpanı bulunur.

:::

---

## Soru: Tam Kareye Tamamlama

$$
F(s)=\frac{s+1}{s^2+4s+13}
$$

Payda tablodaki hiçbir biçime uymuyor.

::: {.notes}

Payda $s^2+4s+13$ çarpanlarına ayrılmıyor; diskriminant $16-52=-36$ negatif. Reel kök yok, yani $\dfrac{1}{s-a}$ biçimine indirgenemez.

Bu, paydanın kompleks köklü olduğu anlamına gelir ve tablodaki karşılığı trigonometrik satırdır. Ama $s^2+b^2$ biçiminde de değil — ortada bir $4s$ terimi var.

Ortadaki terimi yok etmenin yolu tam kareye tamamlamaktır. Elde edilen $(s-a)^2+b^2$ biçimi öteleme kuralının hedef biçimidir; $a$ üstel çarpanı, $b$ ise salınım frekansını verir.

:::

---

## Çözüm: Kaydırılmış Biçim

$$
s^2+4s+13=(s+2)^2+9
$$

$$
F(s)=\frac{(s+2)-1}{(s+2)^2+9}
$$

$$
\boxed{f(t)=e^{-2t}\cos3t-\tfrac13e^{-2t}\sin3t}
$$

::: {.notes}

Paydayı tamamlayalım: $s^2+4s+13=(s+2)^2+9$. Buradan $a=-2$ ve $b=3$ okunur.

Payı da aynı kaydırmaya uydurmak gerekir. $s+1=(s+2)-1$ yazalım. İfade iki parçaya ayrılır: $\dfrac{s+2}{(s+2)^2+9}$ ve $-\dfrac{1}{(s+2)^2+9}$.

Birinci parça kosinüs satırının $-2$ kadar kaydırılmış hâlidir: karşılığı $e^{-2t}\cos3t$. İkinci parçada pay $3$ olmalıydı; $\dfrac{1}{(s+2)^2+9}=\dfrac13\cdot\dfrac{3}{(s+2)^2+9}$ yazılır ve karşılığı $\dfrac13e^{-2t}\sin3t$ olur.

Sonuç $f(t)=e^{-2t}\cos3t-\dfrac13e^{-2t}\sin3t$'dir. Üstel çarpan sönümü, sinüs–kosinüs çifti salınımı tanımlıyor — sabit katsayılı denklemlerde kompleks köklerin verdiği çözüm biçiminin aynısı.

Payı kaydırmayı unutmak yaygın bir hatadır. Payda $(s+2)$ yazıldığında pay da $s+2$ cinsinden ifade edilmelidir; aksi hâlde kosinüs ve sinüs katsayıları yanlış çıkar.

:::

---

## $t$ ile Çarpma

$$
\mathcal{L}\{t\,f(t)\}=-F'(s)
$$

$$
\mathcal{L}\{t^nf(t)\}=(-1)^nF^{(n)}(s)
$$

::: {.notes}

Bir fonksiyon $t$ ile çarpılırsa dönüşümü türevlenir. Gerekçe integral içinde görülür: $F(s)=\int_0^{\infty}e^{-st}f(t)dt$ ifadesinin $s$'ye göre türevi alındığında integrandda $-te^{-st}f(t)$ oluşur. Yani $F'(s)=-\mathcal{L}\{tf(t)\}$.

$n$ kez tekrarlandığında her adımda bir eksi işareti gelir ve $\mathcal{L}\{t^nf(t)\}=(-1)^nF^{(n)}(s)$ olur.

Kural tutarlılık kontrolü olarak da işe yarar. $f(t)=1$ alalım: $F(s)=\dfrac1s$ ve $-F'(s)=\dfrac{1}{s^2}$ çıkar, bu da $\mathcal{L}\{t\}$'nin bilinen değeridir.

Pratikte bu kural, $t\sin bt$ ya da $t\cos bt$ gibi çarpımlarda kullanılır. Rezonans durumlarında çözümde tam da bu tip terimler ortaya çıktığı için kural, ters dönüşüm tarafında da karşımıza çıkacak.

:::

---

## Kural Tablosu

| Özgün taraf | Dönüşüm tarafı |
|---|---|
| $f'(t)$ | $sF(s)-f(0)$ |
| $f''(t)$ | $s^2F(s)-sf(0)-f'(0)$ |
| $e^{at}f(t)$ | $F(s-a)$ |
| $t^nf(t)$ | $(-1)^nF^{(n)}(s)$ |

::: {.notes}

Dört kural, dönüşüm hesabının çekirdeğidir. İlk ikisi diferansiyel denklemi cebirsel denkleme çevirir; son ikisi tablonun kapsamını genişletir.

Kuralları okumanın kısa yolu, her işlemin karşılığını hatırlamaktır: türev alma $s$ ile çarpma, üstelle çarpma $s$ ekseninde kaydırma, $t$ ile çarpma $s$'ye göre türev alma. Özgün taraftaki analiz işlemleri, dönüşüm tarafında cebir işlemlerine gidiyor.

Tabloda henüz bulunmayan iki satır var: parçalı girdileri taşıyan öteleme kuralı ve iki dönüşümün çarpımına karşılık gelen işlem. İkisi de ilerideki konularda eklenecek.

:::

---

## Sık Yapılan Hatalar

1. $\mathcal{L}\{f'\}$ formülünde $f(0)$ terimini unutmak
2. $\mathcal{L}\{f''\}$ içinde $sf(0)$ yerine $f(0)$ yazmak
3. Ötelemede yalnız paydayı kaydırmak
4. Tam kareye tamamlarken payı düzeltmemek
5. Sinüs satırında pay çarpanını atlamak

::: {.notes}

Birinci hata denklemi homojen başlangıç koşullarıyla çözmeye denk gelir; sonuç genel çözümün yalnız bir parçasını verir ve verilen koşullar sağlanmaz.

İkinci hata mertebe ile $s$ kuvvetini eşleştirmemekten doğar. İkinci türevde $y(0)$ terimi $s$ ile çarpılıdır: $s^2Y-sy(0)-y'(0)$. Sıralamayı hatırlamanın yolu, $s$ kuvvetlerinin $s^{n-1}$'den başlayıp birer birer azaldığını görmektir.

Üçüncü ve dördüncü hatalar aynı kökten gelir: öteleme $s$'nin geçtiği her yeri etkiler. $\dfrac{s}{(s-3)^2+1}$ ifadesi $e^{3t}\cos t$'nin dönüşümü **değildir**; doğrusu $\dfrac{s-3}{(s-3)^2+1}$'dir.

Beşinci hata ters dönüşümde çıkar. $\dfrac{1}{s^2+9}$ ifadesinin karşılığı $\sin3t$ değil, $\dfrac13\sin3t$'dir; sinüs satırında payda $b$ bulunması gerekir ve eksik çarpan elle tamamlanır.

:::

---

## Karar Soruları

Hangi kural, hangi sırayla?

1. $\mathcal{L}\{t^2e^{-t}\}$
2. $\mathcal{L}\{e^{2t}\cos4t\}$
3. $\mathcal{L}\{y''\}$, $y(0)=0$, $y'(0)=5$

::: {.notes}

Birincisinde öteleme kuralı yeterlidir. $f(t)=t^2$ için $F(s)=\dfrac{2}{s^3}$ ve $a=-1$ olduğundan sonuç $\dfrac{2}{(s+1)^3}$'tür. Aynı sonuca $t$ ile çarpma kuralını iki kez uygulayarak da varılır, ama öteleme çok daha kısadır. Kural seçiminde ölçüt hesap uzunluğudur.

İkincisinde $F(s)=\dfrac{s}{s^2+16}$ ve $a=2$'dir. Her iki $s$ kaydırılır: $\dfrac{s-2}{(s-2)^2+16}$.

Üçüncüsünde formül doğrudan uygulanır: $s^2Y-s\cdot0-5=s^2Y-5$. Başlangıç koşullarından biri sıfır olduğunda ilgili terim düşer; bu, hesabı kısaltır ama formülü değiştirmez.

Üç soruda da yapılan iş aynı: ifadeye bakıp hangi kuralın devreye gireceğine karar vermek. Hesap kararın ardından geliyor.

:::

---

## Sonraki Adım: Geri Dönüş

$$
Y(s)=\frac{s+3}{s^2+3s+2}
\quad\Longrightarrow\quad
y(t)=?
$$

Cebirsel çözüm elde; özgün fonksiyona nasıl dönülür?

::: {.notes}

Türev kuralı sayesinde diferansiyel denklem cebirsel denkleme dönüştü ve $Y(s)$ bulundu. Ama aranan $y(t)$; dönüşüm tarafında kalmak bir işe yaramaz.

Geri dönüş işlemine ters Laplace dönüşümü denir. Tanımı bir integral formülüyle verilebilir, ama o formül kompleks düzlemde integral gerektirir ve bu dersin kapsamı dışındadır.

Pratikte kullanılan yol tablodur: $Y(s)$ ifadesi, tablodaki satırların tanınabileceği parçalara ayrılır ve her parçanın karşılığı yazılır. Ayırma işlemi kısmi kesirlerle yapılır.

Bu geri dönüş, Laplace yöntemini uçtan uca bir başlangıç değer problemi üzerinde çalıştırmayı sağlar.

:::

---

## Kaynak Notu

Ana kaynak: Nagle, Saff ve Snider.

::: {.notes}

Kaynak: Nagle, Saff ve Snider, *Fundamentals of Differential Equations*. Kısmi integrasyonla türev kuralı, tümevarımla yüksek mertebeye genişletme ve birinci öteleme teoremi bu kaynaktaki klasik yaklaşımla uyumludur.

:::

---
