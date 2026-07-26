---
title: "Matris Cebiri: Alıştırmalar"
subtitle: "Lineer Cebir — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-25
description: "Matrisleri açıkça yazmadan sembolik ifade düzenleme: transpoz, ters, kuvvet ve denklem çözme."
execute:
  echo: false
---

# Matris Cebiri: Alıştırmalar

Bu çalışma, sayısal hesaptan çok **sembolik düzenleme** pratiği verir. Matrisleri açıkça yazmadan, yalnız cebir kurallarını kullanarak ifadeleri sadeleştirmeyi, çarpanlara ayırmayı ve matris denklemlerini bilinmeyen matris için çözmeyi hedefler.

Buradaki tek büyük fark sayı cebirinden gelir: **matris çarpımı değişmeli değildir.** $AB$ ile $BA$ genelde eşit olmadığından, bir kuralı uygularken çarpanların sırasını korumak zorunludur. Aksi belirtilmedikçe $A,B,C$ uygun boyutlu, gereken yerlerde tersinir kare matrislerdir ve $I$ birim matristir.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
Bu çalışma notunu bir yapay zekâ aracına vererek aynı becerileri hedefleyen yeni örnekler ürettirebilirsiniz. Hangi bölümü çalışmak istediğinizi, kaç soru istediğinizi ve zorluk düzeyini belirtin. Aracın çözümü hemen vermemesini; önce cevabınızı beklemesini, hatanız varsa hata türünü söylemesini ve yalnız bir ipucu vermesini isteyin.

Örnek istem:

> Bu çalışma notundaki gösterime bağlı kal. "Matris denklemini X için çözme" bölümü için aynı zorlukta beş yeni soru üret. Her adımda çarpma sırasını (soldan/sağdan) gerekçelendirmemi iste. Çözümleri başlangıçta verme; yanlışsa hata türünü söyle ve bir ipucu ver.

Karma çalışma soruları için hazır cevap anahtarı verilmemiştir.
:::

## Transpoz Kuralları

### Örnek 1: Çarpımın Transpozu

$(AB)^T$ ifadesini sadeleştirelim. Kural, sırayı ters çevirir:

$$
(AB)^T=B^T A^T.
$$

Aynı biçimde toplamın transpozu sırayı korur: $(A+B)^T=A^T+B^T$.

**Kontrol.** Boyutla doğrulayın: $A\in\mathbb{R}^{m\times n}$, $B\in\mathbb{R}^{n\times p}$ ise $AB\in\mathbb{R}^{m\times p}$ ve $(AB)^T\in\mathbb{R}^{p\times m}$. Sağ tarafta $B^T\in\mathbb{R}^{p\times n}$, $A^T\in\mathbb{R}^{n\times m}$; çarpım $p\times m$. Sıra $A^T B^T$ olsaydı boyutlar bile uymazdı.

### Örnek 2: Karışık İfade

$(A^T B)^T$ ifadesini sadeleştirelim:

$$
(A^T B)^T=B^T (A^T)^T=B^T A.
$$

Burada $(A^T)^T=A$ kullanıldı.

**Kontrol.** İki kuralı sırayla uygulayın: önce çarpımın transpozu (sıra ters), sonra transpozun transpozu (kendine döner).

## Ters Kuralları

### Örnek 3: Çarpımın Tersi

$A$ ve $B$ tersinir olduğunda

$$
(AB)^{-1}=B^{-1}A^{-1}.
$$

Doğrulayalım:

$$
(AB)(B^{-1}A^{-1})=A(BB^{-1})A^{-1}=A I A^{-1}=AA^{-1}=I.
$$

Transpoz kuralında olduğu gibi burada da sıra ters döner.

**Kontrol.** Aradaki $BB^{-1}=I$ sadeleşmesi yalnız sıra korunduğunda çalışır. $A^{-1}B^{-1}$ yazsaydınız ortada $B^{-1}$ ile $B$ yan yana gelmez, sadeleşme olmazdı.

### Örnek 4: Transpoz ve Ters Birlikte

$(A^T)^{-1}$ ile $(A^{-1})^T$ aynı matristir:

$$
(A^T)^{-1}=(A^{-1})^T.
$$

Bu yüzden $A^{-T}$ kısaltması iki işlemi de belirsizlik olmadan taşır.

## Kuvvetler ve Sadeleştirme Tuzakları

### Örnek 5: Kuvvet Kuralları ve Sınırı

Aynı matrisin kuvvetlerinde üsler toplanır:

$$
A^2 A^3=A^{5},\qquad (A^2)^3=A^{6}.
$$

Ancak farklı matrisler söz konusuysa dikkat: genelde

$$
(AB)^2=ABAB\neq A^2B^2.
$$

$A^2B^2$ eşitliği yalnız $AB=BA$ (değişme) durumunda geçerlidir.

**Kontrol.** $(AB)^2$ açılımında ortadaki $BA$'yı $AB$'ye çeviremezsiniz; bunu yapmak değişmeyi varsaymak olur.

### Örnek 6: İki Terimlinin Karesi

$(A+B)^2$ açılımı:

$$
(A+B)^2=(A+B)(A+B)=A^2+AB+BA+B^2.
$$

Orta terimler $AB$ ve $BA$ birleştirilip $2AB$ yazılamaz; ancak $AB=BA$ ise $A^2+2AB+B^2$ olur.

**Sık hata.** Sayı cebirindeki $2ab$ alışkanlığıyla doğrudan $A^2+2AB+B^2$ yazmak.

## İfade Düzenleme ve Çarpanlama

### Örnek 7: Ortak Çarpan

$A^2-3A$ ifadesinde soldan $A$ ortak çarpandır. Skaler yerine birim matris kullanılır:

$$
A^2-3A=A(A-3I).
$$

$A-3$ yazmak tanımsızdır; matristen skaler çıkarılamaz, birim matrisin katı çıkarılır.

**Kontrol.** Çarpımı geri açın: $A(A-3I)=A^2-3AI=A^2-3A$.

### Örnek 8: Fark ve Kareler

$(A-I)(A+I)$ çarpımını açalım:

$$
(A-I)(A+I)=A^2+A-A-I=A^2-I.
$$

Burada işe yarayan şey $I$'nin her matrisle değişmeli olmasıdır. Buna karşılık $(A-B)(A+B)$ genelde $A^2-B^2$ değildir:

$$
(A-B)(A+B)=A^2+AB-BA-B^2.
$$

## Matris Denklemini X için Çözme

### Örnek 9: Soldan mı, Sağdan mı?

$A$ tersinir olmak üzere $AX=B$ denklemini çözelim. Her iki tarafı **soldan** $A^{-1}$ ile çarparız:

$$
A^{-1}(AX)=A^{-1}B
\quad\Rightarrow\quad
(A^{-1}A)X=A^{-1}B
\quad\Rightarrow\quad
X=A^{-1}B.
$$

Buna karşılık $XA=B$ denkleminde $A^{-1}$ ile **sağdan** çarpılır:

$$
X=BA^{-1}.
$$

$A^{-1}B$ ile $BA^{-1}$ genelde farklıdır; hangi taraftan çarptığınız sonucun ne olduğunu belirler.

**Karar kuralı.** Bilinmeyen $X$ hangi taraftaysa, tersini o tarafa gelecek biçimde çarpın: soldaki katsayı için soldan, sağdaki için sağdan.

### Örnek 10: İki Taraftan Çarpım

$AXB=C$ denklemini ($A,B$ tersinir) çözelim. Soldan $A^{-1}$, sağdan $B^{-1}$:

$$
A^{-1}(AXB)B^{-1}=A^{-1}CB^{-1}
\quad\Rightarrow\quad
X=A^{-1}CB^{-1}.
$$

**Kontrol.** Sırayı koruyun: $A^{-1}$ soldan, $B^{-1}$ sağdan gelir. $B^{-1}CA^{-1}$ yazmak yanlıştır.

## Hata Avı

### Örnek 11: Transpozda Yanlış Sıra

$(AB)^T=A^T B^T$ yazmak yanlıştır. Doğrusu $B^T A^T$. Boyutlar bile ilk yazımı çürütür: $A^T B^T$ çoğu zaman tanımlı bile değildir.

### Örnek 12: Geçersiz Sadeleştirme

$AB=AC$ eşitliğinden doğrudan $B=C$ sonucuna varmak yanlıştır. Bu ancak $A$ **tersinir** ise geçerlidir; o zaman soldan $A^{-1}$ ile çarpılır:

$$
A^{-1}AB=A^{-1}AC
\quad\Rightarrow\quad
B=C.
$$

$A$ tersinir değilse $AB=AC$ olup $B\neq C$ olabilir. Benzer biçimde $AB=0$ iken $A\neq0$ ve $B\neq0$ olabilir.

**Tanı.** Sayı cebirindeki "iki taraftan sadeleştir" kuralı matrislerde ancak tersinirlik varsa ve doğru taraftan çarpılırsa çalışır.

## Adım Adım İşlem Pratiği

Aşağıdaki örneklerde açıklama en aza indirilmiştir; amaç kuralları adım adım, çarpma sırasını koruyarak uygulamaktır.

### Örnek 13

$(2A)^T+A^T$ sadeleştirmesi:

$$
(2A)^T+A^T=2A^T+A^T=3A^T.
$$

### Örnek 14

$3X=2A-B$ denkleminden $X$:

$$
X=\tfrac13(2A-B)=\tfrac23 A-\tfrac13 B.
$$

### Örnek 15

$AX=B$ denkleminden $X$ (soldan $A^{-1}$):

$$
A^{-1}(AX)=A^{-1}B\ \Rightarrow\ IX=A^{-1}B\ \Rightarrow\ X=A^{-1}B.
$$

### Örnek 16

$(A^{-1}B)^{-1}$ sadeleştirmesi:

$$
(A^{-1}B)^{-1}=B^{-1}(A^{-1})^{-1}=B^{-1}A.
$$

### Örnek 17

$A(B+C)-AB$ sadeleştirmesi:

$$
A(B+C)-AB=AB+AC-AB=AC.
$$

## Karma Çalışma Soruları

Aksi belirtilmedikçe $A,B,C$ uygun boyutlu, gereken yerlerde tersinir kare matrislerdir.

### Soru 1

$(BA)^T$ ifadesini $A$ ve $B$'nin transpozları cinsinden yazın.

### Soru 2

$(A B^T)^T$ ifadesini sadeleştirin.

### Soru 3

$(ABC)^{-1}$ ifadesini tekil terslerin çarpımı olarak yazın ve boyut/sıra bakımından doğrulayın.

### Soru 4

$(2A)^{-1}$ ifadesini $A^{-1}$ cinsinden yazın.

### Soru 5

$(A^T)^{-1}=(A^{-1})^T$ eşitliğini, $A^T(A^{-1})^T=I$ olduğunu göstererek doğrulayın. (İpucu: $(A^{-1}A)^T=I^T$.)

### Soru 6

$(A+B)^2$ ifadesini açın. Hangi koşulda $A^2+2AB+B^2$ olur?

### Soru 7

$(AB)^2=A^2B^2$ eşitliği her zaman doğru mudur? Değilse hangi koşulda doğru olur?

### Soru 8

$A^3-2A^2+A$ ifadesini soldan ortak çarpanla çarpanlarına ayırın.

### Soru 9

$(A+2I)(A-2I)$ çarpımını açın ve sonucu sadeleştirin.

### Soru 10

$AX=B$ ve $XA=B$ denklemlerinin çözümlerini ayrı ayrı yazın; ikisinin neden farklı olduğunu bir cümleyle açıklayın.

### Soru 11

$XA+B=C$ denklemini $X$ için çözün ($A$ tersinir).

### Soru 12

$AXB=C$ denklemini $X$ için çözün; ardından $A^{-1}CB^{-1}$ ile $B^{-1}CA^{-1}$ ifadelerinin neden aynı olmadığını açıklayın.

### Soru 13

Aşağıdaki adımın hatasını bulun: "$AB=AC$ olduğundan $B=C$." Hangi ek koşul gerekir?

### Soru 14

$A^2=A$ olan bir matris için $(I-A)^2$ ifadesini sadeleştirin. (İpucu: açıp $A^2=A$ yerine koyun.)

### Soru 15

$A$ tersinir ve $AB=I$ ise $BA$ nedir? Kısaca gerekçelendirin.

## Çalışmanızı Kontrol Etme

Bu sorular için cevap anahtarı verilmemiştir. Önce çözümünüzü bütün adımlarıyla tamamlayın. Ardından bu çalışma notunu ve çözümünüzü bir yapay zekâ aracına vererek sonucunuzun kontrol edilmesini isteyebilirsiniz.

Kontrol sırasında şu istemi kullanabilirsiniz:

> Çözümümü çarpma sırası (soldan/sağdan), transpoz ve ters kurallarında sıranın ters dönmesi, birim matrisin doğru kullanımı ve değişme varsayımı yapıp yapmadığım açısından incele. Hata varsa doğru cevabı hemen verme; önce hatanın bulunduğu adımı ve hata türünü belirt.
