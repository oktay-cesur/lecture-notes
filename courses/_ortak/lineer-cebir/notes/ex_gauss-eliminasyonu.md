---
title: "Gauss Eliminasyonu ve Basamak Biçimleri: Alıştırmalar"
subtitle: "Lineer Cebir — İşlem Pratiği"
type: handout
author: "Öğr. Gör. Oktay Cesur"
date: 2026-07-25
description: "Satır işlemleri, ileri eliminasyon, REF ve RREF (Gauss-Jordan) için bol pratik."
execute:
  echo: false
---

# Gauss Eliminasyonu ve Basamak Biçimleri: Alıştırmalar

Bu çalışma elementer satır işlemlerini doğru uygulama, ileri eliminasyonla satır basamak biçimine (REF) ulaşma, Gauss-Jordan ile indirgenmiş basamak biçimini (RREF) elde etme ve sonucu okuyarak çözüm durumunu (tek, yok, sonsuz) belirleme becerilerini geliştirmek için hazırlanmıştır.

Eliminasyon uzun bir işlemdir; her satır işleminden sonra matrisi yeniden yazın ve hangi işlemi yaptığınızı kenara not edin. Çalışma sorularını çözümlere bakmadan tamamlayın.

::: {.callout-note title="Yapay zekâ desteğiyle çalışma"}
Bu çalışma notunu bir yapay zekâ aracına vererek aynı becerileri hedefleyen yeni örnekler ürettirebilirsiniz. Hangi bölümü çalışmak istediğinizi, kaç soru istediğinizi ve zorluk düzeyini belirtin. Aracın çözümü hemen vermemesini; önce cevabınızı beklemesini, hatanız varsa hata türünü söylemesini ve yalnız bir ipucu vermesini isteyin.

Örnek istem:

> Bu çalışma notundaki gösterime bağlı kal. "İleri eliminasyon ve pivotlar" bölümü için aynı zorlukta beş yeni $3\times3$ sistem üret; bir tanesinin çözümü olmasın, bir tanesinde serbest değişken olsun. Çözümleri başlangıçta verme; yanlışsa hata türünü söyle ve bir ipucu ver.

Karma çalışma soruları için hazır cevap anahtarı verilmemiştir.
:::

## Satır İşlemleri

### Örnek 1: Üç Elementer İşlem

Eliminasyonda yalnız üç işlem kullanılır ve üçü de çözüm kümesini korur:

1. İki satırın yerini değiştirmek: $R_i\leftrightarrow R_j$.
2. Bir satırı sıfırdan farklı bir skalerle çarpmak: $R_i\leftarrow kR_i$, $k\neq0$.
3. Bir satırın katını başka bir satıra eklemek: $R_i\leftarrow R_i+kR_j$.

Örneğin

$$
\left[\begin{array}{cc|c}2&4&6\\1&-1&0\end{array}\right]
\xrightarrow{R_1\leftarrow \tfrac12 R_1}
\left[\begin{array}{cc|c}1&2&3\\1&-1&0\end{array}\right]
\xrightarrow{R_2\leftarrow R_2-R_1}
\left[\begin{array}{cc|c}1&2&3\\0&-3&-3\end{array}\right].
$$

**Kontrol.** İkinci işlemde skaler sıfır olamaz; $R_i\leftarrow 0\cdot R_i$ satırı yok eder ve çözüm kümesini değiştirir.

## İleri Eliminasyon ve Pivotlar

### Örnek 2: Basamak Biçimine İnmek

$$
\left[\begin{array}{ccc|c}
1&1&1&6\\
2&3&1&11\\
1&-1&2&5
\end{array}\right].
$$

İlk sütunun pivotu $1$'dir. Altındaki girdileri sıfırlarız:

$$
\xrightarrow[R_3\leftarrow R_3-R_1]{R_2\leftarrow R_2-2R_1}
\left[\begin{array}{ccc|c}
1&1&1&6\\
0&1&-1&-1\\
0&-2&1&-1
\end{array}\right].
$$

İkinci pivot ikinci satırdaki $1$'dir. Altındaki girdiyi sıfırlarız:

$$
\xrightarrow{R_3\leftarrow R_3+2R_2}
\left[\begin{array}{ccc|c}
1&1&1&6\\
0&1&-1&-1\\
0&0&-1&-3
\end{array}\right].
$$

**Kontrol.** Her adımda pivotun **altındaki** girdileri sıfırlarsınız; pivotun kendisini ve üstünü ileri eliminasyonda değiştirmezsiniz.

### Örnek 3: Geriye Yerine Koyma

Örnek 2'deki basamak biçiminden çözüm, alttan yukarı okunur:

$$
-z=-3\Rightarrow z=3,
\qquad
y-z=-1\Rightarrow y=2,
\qquad
x+y+z=6\Rightarrow x=1.
$$

**Kontrol.** Bulunan $(x,y,z)=(1,2,3)$ değerlerini özgün sistemin her denkleminde sınayın; örneğin $2x+3y+z=2+6+3=11$.

## Satır Basamak Biçimi (REF)

### Örnek 4: REF Ölçütleri

Bir matris satır basamak biçimindeyse:

- Tümü sıfır olan satırlar en alttadır.
- Her satırın ilk sıfırdan farklı girdisi (öncü girdi), üstteki satırın öncü girdisinden daha sağdadır.
- Bir öncü girdinin altındaki bütün girdiler sıfırdır.

Örnek 2'nin sonucu bu ölçütleri sağlar; öncü girdiler $(1,1),(2,2),(3,3)$ konumlarında ve merdiven biçiminde iner.

**Karar kuralı.** REF tek değildir; aynı sistemin farklı işlem sıralarıyla farklı REF'leri olabilir. Belirleyici olan öncü konumlardır.

## İndirgenmiş Basamak Biçimi (RREF) ve Gauss-Jordan

### Örnek 5: RREF'e Tamamlamak

Örnek 2'nin basamak biçiminden devam edelim. Önce üçüncü pivotu $1$ yapalım:

$$
\xrightarrow{R_3\leftarrow -R_3}
\left[\begin{array}{ccc|c}
1&1&1&6\\
0&1&-1&-1\\
0&0&1&3
\end{array}\right].
$$

Şimdi pivotların **üstündeki** girdileri de sıfırlarız:

$$
\xrightarrow[R_1\leftarrow R_1-R_3]{R_2\leftarrow R_2+R_3}
\left[\begin{array}{ccc|c}
1&1&0&3\\
0&1&0&2\\
0&0&1&3
\end{array}\right]
\xrightarrow{R_1\leftarrow R_1-R_2}
\left[\begin{array}{ccc|c}
1&0&0&1\\
0&1&0&2\\
0&0&1&3
\end{array}\right].
$$

Çözüm doğrudan okunur: $x=1$, $y=2$, $z=3$.

**Kontrol.** RREF'te her pivot $1$'dir ve bulunduğu sütunun tek sıfırdan farklı girdisidir. REF'ten farkı: üstteki girdiler de sıfırlanır. RREF, REF'in aksine **tektir**.

## Çözümü Okuma: Tek, Yok, Sonsuz

### Örnek 6: Serbest Değişken (Sonsuz Çözüm)

$$
\left[\begin{array}{ccc|c}
1&2&1&4\\
2&4&3&11
\end{array}\right]
\xrightarrow{R_2\leftarrow R_2-2R_1}
\left[\begin{array}{ccc|c}
1&2&1&4\\
0&0&1&3
\end{array}\right].
$$

İkinci sütunda pivot yoktur; $y$ serbest değişkendir. Alt satırdan $z=3$. Üst satırdan $x+2y+z=4$, yani $x=1-2y$. $y=t$ dersek

$$
(x,y,z)=(1-2t,\ t,\ 3),\qquad t\in\mathbb{R}.
$$

**Kontrol.** Pivot içermeyen her sütun bir serbest değişkene karşılık gelir. Serbest değişken sayısı, çözüm kümesinin boyutunu verir.

### Örnek 7: Çelişki Satırı (Çözüm Yok)

$$
\left[\begin{array}{cc|c}
1&1&2\\
2&2&5
\end{array}\right]
\xrightarrow{R_2\leftarrow R_2-2R_1}
\left[\begin{array}{cc|c}
1&1&2\\
0&0&1
\end{array}\right].
$$

Alt satır $0x+0y=1$, yani $0=1$ der. Bu bir çelişkidir; sistemin çözümü yoktur.

**Karar kuralı.** Genişletilmiş matriste $[\,0\ \cdots\ 0\mid c\,]$ biçiminde, sol tarafı sıfır ama sağ tarafı sıfırdan farklı bir satır çıkarsa sistem tutarsızdır.

## Hata Avı

### Örnek 8: Pivotun Üstünü Erken Sıfırlamak

İleri eliminasyonda amaç, sırayla soldan sağa pivotların **altını** sıfırlamaktır. Öğrenci ilk sütunda $(1,1)$ pivotunun hem altını hem üstünü aynı anda sıfırlamaya kalkarsa, henüz kurulmamış alt pivotları bozar ve işlemi uzatır. Üst girdiler yalnız RREF aşamasında, alttan yukarı sıfırlanır.

**Tanı.** Önce REF'e inin (yalnız pivot altları), sonra RREF için geri dönün (pivot üstleri). İki yönü karıştırmak en yaygın işlem hatasıdır.

### Örnek 9: Satır İşlemini Yanlış Yazmak

$R_2\leftarrow R_2-2R_1$ işlemini uygularken $R_1$'i de değiştirmek yanlıştır: bu işlemde yalnız $R_2$ güncellenir, $R_1$ olduğu gibi kalır. Ayrıca sağ taraftaki sabit sütun da işleme dahil edilmelidir; yalnız katsayıları güncelleyip sabiti unutmak sık yapılan bir hatadır.

## Adım Adım İşlem Pratiği

Aşağıdaki örneklerde açıklama en aza indirilmiştir; amaç eliminasyonu her satır işlemini yazarak hızlı tekrarlamaktır.

### Örnek 10

$$
\begin{aligned}
x+2y&=5\\
3x-y&=1
\end{aligned}
\ \Rightarrow\
\left[\begin{array}{cc|c}1&2&5\\3&-1&1\end{array}\right]
\xrightarrow{R_2\leftarrow R_2-3R_1}
\left[\begin{array}{cc|c}1&2&5\\0&-7&-14\end{array}\right].
$$

$$
-7y=-14\Rightarrow y=2,\qquad x+2\cdot2=5\Rightarrow x=1.
$$

### Örnek 11

$$
\left[\begin{array}{ccc|c}1&1&1&6\\1&2&1&8\\1&1&2&9\end{array}\right]
\xrightarrow[R_3\leftarrow R_3-R_1]{R_2\leftarrow R_2-R_1}
\left[\begin{array}{ccc|c}1&1&1&6\\0&1&0&2\\0&0&1&3\end{array}\right].
$$

$$
y=2,\qquad z=3,\qquad x+y+z=6\Rightarrow x=1.
$$

### Örnek 12

$$
\begin{aligned}
x+y&=3\\
2x+2y&=7
\end{aligned}
\ \Rightarrow\
\left[\begin{array}{cc|c}1&1&3\\2&2&7\end{array}\right]
\xrightarrow{R_2\leftarrow R_2-2R_1}
\left[\begin{array}{cc|c}1&1&3\\0&0&1\end{array}\right].
$$

Alt satır $0=1$ çelişkisi verir; sistemin çözümü yoktur.

## Karma Çalışma Soruları

### Soru 1

$$
\left[\begin{array}{cc|c}3&6&9\\2&5&8\end{array}\right]
$$

matrisinde önce $R_1\leftarrow\tfrac13 R_1$, sonra $R_2\leftarrow R_2-2R_1$ işlemlerini uygulayın.

### Soru 2

$$
\begin{aligned}
x+y+z&=6\\
2x-y+z&=3\\
x+2y-z&=2
\end{aligned}
$$

sistemini genişletilmiş matris olarak yazıp ileri eliminasyonla REF'e indirin, sonra geriye yerine koyarak çözün.

### Soru 3

Soru 2'deki sistemi Gauss-Jordan ile RREF'e tamamlayın ve çözümü doğrudan okuyun.

### Soru 4

$$
\left[\begin{array}{ccc|c}
1&-1&2&3\\
2&1&1&6\\
1&2&-1&3
\end{array}\right]
$$

sistemini çözün; çözüm tek mi, yok mu, sonsuz mu belirtin.

### Soru 5

$$
\begin{aligned}
x+2y-z&=1\\
2x+4y-2z&=3
\end{aligned}
$$

sistemini eliminasyonla inceleyin. Çözüm durumunu açıklayın.

### Soru 6

$$
\begin{aligned}
x+y+2z&=3\\
2x+3y+z&=5\\
x+2y-z&=2
\end{aligned}
$$

sisteminde serbest değişken var mı? Varsa çözümü parametrik biçimde yazın.

### Soru 7

Aşağıdaki matris satır basamak biçiminde midir? Değilse hangi ölçütü sağlamadığını söyleyin ve REF'e getirin.

$$
\left[\begin{array}{ccc|c}
1&2&0&3\\
0&0&0&0\\
0&1&-1&2
\end{array}\right].
$$

### Soru 8

Bir $3\times3$ sistemin genişletilmiş matrisi RREF'te

$$
\left[\begin{array}{ccc|c}
1&0&0&2\\
0&1&2&-1\\
0&0&0&0
\end{array}\right]
$$

biçimindedir. Kaç serbest değişken vardır? Çözümü parametrik yazın.

### Soru 9

$$
\begin{aligned}
x-2y&=3\\
-2x+4y&=k
\end{aligned}
$$

sisteminin (a) çözümünün olmaması, (b) sonsuz çözümü olması için $k$ hangi değer(ler)i almalıdır?

### Soru 10

Aşağıdaki eliminasyon adımındaki hatayı bulun. Başlangıç:

$$
\left[\begin{array}{cc|c}1&3&5\\2&1&4\end{array}\right]
\xrightarrow{R_2\leftarrow R_2-2R_1}
\left[\begin{array}{cc|c}1&3&5\\0&-5&4\end{array}\right].
$$

## Çalışmanızı Kontrol Etme

Bu sorular için cevap anahtarı verilmemiştir. Önce çözümünüzü bütün satır işlemleriyle, her adımı yazarak tamamlayın. Ardından bu çalışma notunu ve çözümünüzü bir yapay zekâ aracına vererek sonucunuzun kontrol edilmesini isteyebilirsiniz.

Kontrol sırasında şu istemi kullanabilirsiniz:

> Çözümümü satır işlemlerinin doğruluğu (özellikle sağ taraf sütununun da güncellenmesi), pivot altlarının/üstlerinin doğru sırada sıfırlanması, çözüm durumu kararı (çelişki satırı / serbest değişken) açısından incele. Hata varsa doğru cevabı hemen verme; önce hatanın bulunduğu adımı ve hata türünü belirt.
