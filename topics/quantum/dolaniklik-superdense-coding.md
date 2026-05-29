---
title: "Dolanıklık ve Superdense Coding"
subtitle: QTEA26 — Perşembe Oturum
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-03-12
execute:
  echo: false
---

$\newcommand{\ket}[1]{|#1\rangle}$


---


## Nerede Kalmıştık?

- Tek kubitte: $H$, $X$, $Z$
    
- İki kubitte: tensör çarpım, CNOT
    
- Önceki kritik fikir: **faz bilgisi ölçümde doğrudan görünmez ama girişimde görünür**
    
- Bugün bu faz bilgisinin iki kubitli bir protokolde nasıl “mesaja” dönüştüğünü göreceğiz
    

::: {.notes}  
Bu açılış slaytı önceki oturumla köprü kurmalı. Hadamard, CNOT ve faz bilgisini biliyoruz; bugün yeni ekleyeceğimiz şey dolanıklığın bir iletişim kaynağı olarak kullanılması.

Burada özellikle şunu vurgula: superdense coding sıfırdan gelen bir hile değil. Tek kubitte öğrendiğimiz X ve Z kapıları, iki kubitte öğrendiğimiz Bell durumu ve CNOT-H çözme zinciri birleşince ortaya çıkıyor.
:::

---

## $X$ Kapısı — Bit Çevirici

- Klasik NOT kapısının kuantum karşılığı: $\ket{0}$ ile $\ket{1}$’i birbirine çevirir
- Qiskit: `qc.x(q[0])`

$$
X\ket{0} = \ket{1} \qquad X\ket{1} = \ket{0}
$$

$$
X = \begin{pmatrix}0 & 1 \\ 1 & 0\end{pmatrix}
$$



::: {.notes}
$X$ kapısı, klasik NOT kapısının kuantum karşılığıdır. Kübiti birim çember üzerinde bir ok olarak düşünürsek: çemberin tepe noktası $\ket{0}$ durumunu, alt noktası $\ket{1}$ durumunu temsil eder. $X$ kapısı bu oku tam 180° döndürür; tepe ile alt nokta yer değiştirir.

Baz durumlar üzerinde bu dönüşüm deterministiktir: $\ket{0}$ verilirse kesinlikle $\ket{1}$ çıkar, $\ket{1}$ verilirse kesinlikle $\ket{0}$ çıkar. İki kez uygulamak başa döndürür çünkü 180° + 180° = 360°; dolayısıyla $X \cdot X = I$ eşitliği geçerlidir.

Süperpozisyon durumunda etki şöyledir:

$$
X(\alpha\ket{0}+\beta\ket{1})=\alpha\ket{1}+\beta\ket{0}
$$

Katsayılar yer değiştiriyor ama işaret değişmiyor. Bu, $X$ kapısının bit bilgisini etkilediğini, faz bilgisini ise olduğu gibi bıraktığını gösterir. $Z$ kapısının tam tersi bir etkidir bu; $Z$ fazı değiştirir ama biti olduğu gibi bırakır.

Matris bu davranışın cebirsel gösterimidir. Bir kapının bir vektöre uygulanması matris-vektör çarpımıyla hesaplanır; $X$ matrisinin sütunları baz vektörlerinin görüntülerini verir: birinci sütun $\ket{0}$’ın nereye gittiğini, ikinci sütun $\ket{1}$’in nereye gittiğini gösterir.

Superdense coding’de Asja göndermek istediği mesajın ikinci bitini ($b$) kodlamak için $X$ kapısını kullanır: $b=1$ ise $X$ uygular, $b=0$ ise dokunmaz. Böylece bit bilgisi dolanık durumun içine enjekte edilir.
:::

---

<div data-anim="gate" data-scene="x-gate"></div>

---

## $Z$ Kapısı — Faz Çevirici

$$
Z = \begin{pmatrix}1 & 0 \\ 0 & -1\end{pmatrix}
$$

$$
Z\ket{0} = \ket{0} \qquad Z\ket{1} = -\ket{1}
$$

- $\ket{0}$'ı değiştirmez, $\ket{1}$'e eksi işareti koyar
- Hesaplama bazında ölçüm sonucunu **değiştirmez**
- Ama süperpozisyonda girişimi etkiler: $Z\ket{+} = \ket{-}$
- Qiskit: `qc.z(q[0])`



::: {.notes}

$Z$ kapısı ilk bakışta daha az sezgiseldir. Çünkü klasik anlamda bit çevirmiyor gibi görünür. Etkisi şöyledir:

$$  
Z\ket0=\ket0, \qquad Z\ket1=-\ket1  
$$

Burada $\ket0$ aynı kalırken $\ket1$ bileşeni eksi işareti alır. Bu yüzden $Z$ kapısı genellikle **faz kapısı** olarak düşünülür.

Örneğin

$$  
\ket{+}=\frac{1}{\sqrt2}(\ket0+\ket1)  
$$

durumuna $Z$ uygularsak

$$  
Z\ket{+}=\frac{1}{\sqrt2}(\ket0-\ket1)=\ket{-}  
$$

elde ederiz. Burada gerçekleşen şey, $\ket0$ ve $\ket1$ katsayılarının **büyüklüğünü değil işaretini** değiştirmektir. Ölçüm olasılıkları katsayıların mutlak değerlerinin karesiyle belirlendiğinden, doğrudan hesaplama bazında ölçüm yaptığımızda bir olasılık değişimi görmeyiz. Yani $Z$ kapısı “gözlenebilir sonucu” hemen değiştirmez; değiştirdiği şey **bağıl fazdır**.

Bu durumu sezgisel olarak bir **salıncak (osilatör) örneği** ile düşünebiliriz. İki salıncak aynı genlikte sallanıyor olsun. Eğer ikisi aynı anda en uç noktaya ulaşıyorsa aralarında faz farkı yoktur; ama biri tepeye çıkarken diğeri aşağı iniyorsa aralarında $\pi$ faz farkı vardır. Her iki durumda da genlik aynıdır — yani “ne kadar sallandıkları” değişmemiştir — fakat **zamanlama (faz)** farklıdır. Kuantum süperpozisyonda da benzer biçimde katsayıların büyüklüğü değil, bileşenlerin birbirine göre fazı girişim davranışını belirler.

Fark özellikle **süperpozisyon durumlarında** ortaya çıkar.

$$  
Z\ket{+}=\ket{-}  
$$

dönüşümü bunu açıkça gösterir: $\ket{+}$ ve $\ket{-}$ durumları hesaplama bazında aynı olasılık dağılımını verirken, **Hadamard bazında birbirinden tamamen ayrışır**. Bu nedenle $Z$ kapısının etkisi, uygun bir baz dönüşümü — örneğin bir $H$ kapısı — sonrasında ölçülebilir hale gelir:

$$  
H\ket{+}=\ket0, \qquad H\ket{-}=\ket1  
$$

Yani faz farkı, Hadamard ile **bit farkına çevrilebilir**.

Superdense coding’de Asja’nın uyguladığı $Z$ kapısı tam olarak bu mekanizma üzerinden okunur: Balvis’in çözme devresindeki $H$ kapısı, dolanık durumda gizli kalan faz bilgisini ölçülebilir klasik bite dönüştürür. Bu yüzden $Z$ kapısı ilk bakışta “etkisiz” görünse de, kuantum algoritmalarında bilgi taşıyan temel işlemlerden biridir.
:::


---

<div data-anim="gate" data-scene="z-gate"></div>



---

<div data-anim="gate3" data-scene="z-gate"></div>

---

## $H$ Kapısı — Hadamard

- Hesaplama bazı $\{\ket{0}, \ket{1}\}$ ile Hadamard bazı $\{\ket{+}, \ket{-}\}$ arasında geçiş sağlar
- Qiskit: `qc.h(q[0])`

$$
H\ket{0} = \frac{1}{\sqrt{2}}(\ket{0}+\ket{1}) = \ket{+}
\qquad
H\ket{1} = \frac{1}{\sqrt{2}}(\ket{0}-\ket{1}) = \ket{-}
$$

$$
H = \frac{1}{\sqrt{2}}\begin{pmatrix}1 & 1 \\ 1 & -1\end{pmatrix}
$$

::: {.notes}
Hadamard kapısı, kübiti birim çember üzerinde ne tam tepeye ne tam aşağıya değil, tam yatay konuma çeker. Bu nokta $\frac{1}{\sqrt{2}}$ katsayısına karşılık gelir ve kübiti ölçtüğümüzde %50 ihtimalle $\ket{0}$, %50 ihtimalle $\ket{1}$ çıkacağı kusursuz denge noktasıdır. Bu nedenle $H$ kapısı kuantum dünyasında "süperpozisyon yaratıcı" olarak düşünülür.

$H$ kapısı bir dönme değil, bir **yansımadır**. Birim çember üzerinde yaklaşık 22.5 derecelik bir eksen etrafından geçen yansıma olarak tanımlanır. Bu ayrım önemlidir çünkü yansımanın kendi tersiyle uygulanması başa döndürür: $H \cdot H = I$. Bunu somutlaştıralım: $\ket{+}$ durumuna $H$ uygulandığında $\ket{0}$ elde edilir. Yani $H$ hem süperpozisyon oluşturur hem de bozar.

$H \cdot H = I$ ilişkisinin arkasında **yıkıcı girişim** yatar. $H$ matrisinin sağ alt köşesindeki $-1$ elemanı, $\ket{1}$ bileşenini negatif faza sokar. İki $H$ uygulandığında bu negatif katkılar birbirini iptal eder ve sistem başlangıç durumuna döner. Bu, klasik olasılık mantığından köklü bir farktır: iki kez para atmak %50-50 dağılımı sürdürür, ama iki kez $H$ uygulamak deterministik sonuç verir.

$H$'nin en kritik işlevi **faz bilgisini ölçülebilir bit bilgisine dönüştürmesidir**. $\ket{+}$ ve $\ket{-}$ durumları hesaplama bazında ölçülürse birbirinden ayırt edilemez; ikisi de %50-50 dağılım verir. Ama ölçümden önce $H$ uygulanırsa:

$$
H\ket{+} = \ket{0}, \qquad H\ket{-} = \ket{1}
$$

iki durum kesin olarak ayrışır. Superdense coding'in çözme devresindeki $H$ kapısı tam bu işlevi üstlenir: Asja'nın $Z$ kapısıyla koyduğu faz bilgisini Balvis'in ölçüm yaparak okuyabileceği bit bilgisine dönüştürür.
:::

---

## CNOT Kapısı — İki Kubitli Kapı

- İki kubit üzerinde çalışır: **kontrol** ve **hedef**
- Kontrol $\ket{1}$ ise hedefe $X$ uygular; $\ket{0}$ ise dokunmaz
- Qiskit: `qc.cx(q[0], q[1])`

| Giriş | Çıkış |
|-------|-------|
| $\ket{00}$ | $\ket{00}$ |
| $\ket{01}$ | $\ket{01}$ |
| $\ket{10}$ | $\ket{11}$ |
| $\ket{11}$ | $\ket{10}$ |

$$
\mathrm{CNOT} = \begin{pmatrix}1&0&0&0\\0&1&0&0\\0&0&0&1\\0&0&1&0\end{pmatrix}
$$

::: {.notes}
CNOT kapısı, klasik bilgisayarlardaki "if-then" mantığının kuantum karşılığı olarak düşünülebilir. İki kubitten biri kontrol, diğeri hedeftir. Kural basittir: kontrol $\ket{1}$ durumundaysa hedefe $X$ kapısı uygulanır; kontrol $\ket{0}$ durumundaysa hedefe dokunulmaz. Baz durumlar üzerinde davranış tamamen deterministiktir ve tablo bunu doğrudan gösterir.

Asıl ilginç olan, kontrol kubitinin **süperpozisyon** durumunda olduğu durumdur. Örneğin kontrol kubiti $H$ kapısından geçirilmiş olsun:

$$
\frac{1}{\sqrt{2}}(\ket{0}+\ket{1}) \otimes \ket{0}
$$

CNOT uygulandığında lineerlik gereği her terim ayrı ayrı işlenir: $\ket{0}$ bileşeni hedefe dokunmaz, $\ket{1}$ bileşeni hedefi çevirir:

$$
\frac{1}{\sqrt{2}}(\ket{00}+\ket{11})
$$

Bu durum artık iki ayrı tek-kubitli durumun tensör çarpımı olarak yazılamaz. İki kubit **dolanık** hale gelmiştir: birinin ölçüm sonucu diğerini anında belirler. CNOT bu nedenle dolanıklık oluşturmanın temel aracıdır.

Superdense coding'de CNOT iki farklı yerde görev yapar. Başlangıçta $H + \mathrm{CNOT}$ zinciri Bell çiftini oluşturur. Protokolün sonunda ise Balvis'in çözme devresindeki $\mathrm{CNOT}$, Bell bazındaki dolanık durumu çözerek kodlanmış bilgiyi gün yüzüne çıkarır.
:::

---

[https://bloch.kherb.io/](https://bloch.kherb.io/)


---

## Phase Kickback

Hedef kubit $\ket{-}$ durumundayken CNOT uygulanırsa:

$$
\mathrm{CNOT}\ket{+}\ket{-} = \ket{-}\ket{-}
$$

$$
\mathrm{CNOT}\bigl(\alpha\ket{0}+\beta\ket{1}\bigr)\ket{-}
= \alpha\ket{0}\ket{-} - \beta\ket{1}\ket{-}
$$

- Hedef kubit değişmez
- Kontrol kubitinin $\ket{1}$ bileşeni eksi faz kazanır
- Faz, hedeften kontrole "geri tepiyor"

::: {.notes}

Phase kickback ilk bakışta şaşırtıcıdır: CNOT "hedef kubiti çevirir" diye tanıtılır, oysa burada tam tersi bir şey olur — **hedef değişmeden kalır, ama kontrol kubitinin fazı değişir**. Bu nasıl mümkün olabilir?

Cevap, hedef kubitin içinde bulunduğu $\ket{-}$ durumunun özel yapısında saklıdır:

$$
\ket{-} = \frac{1}{\sqrt{2}}(\ket{0}-\ket{1})
$$

CNOT, kontrol $\ket{1}$ olduğunda hedefi çevirir. Bunu $\ket{-}$ üzerine uygularsak:

$$
\ket{-} \;\xrightarrow{\text{CNOT}}\; \frac{1}{\sqrt{2}}(\ket{1}-\ket{0}) = -\frac{1}{\sqrt{2}}(\ket{0}-\ket{1}) = -\ket{-}
$$

Hedef durum değişmedi — hâlâ $\ket{-}$. Ama dışarıya bir $-1$ çarpanı sızdı. Bu çarpanın nereye gideceğini ise kontrol kubitinin durumu belirler.

Kontrol kubiti genel bir süperpozisyon $\alpha\ket{0}+\beta\ket{1}$ olduğunda, CNOT yalnızca $\ket{1}$ bileşeni üzerinde çalışır. Böylece tam hesap şunu verir:

$$
\mathrm{CNOT}\,\bigl(\alpha\ket{0}+\beta\ket{1}\bigr)\ket{-}
= \alpha\ket{0}\ket{-} - \beta\ket{1}\ket{-}
= \bigl(\alpha\ket{0}-\beta\ket{1}\bigr)\ket{-}
$$

Hedef kubit ayrışmış ve değişmemiştir. Kontrol kubitine bakıldığında ise $\alpha\ket{0}+\beta\ket{1}$ durumu $\alpha\ket{0}-\beta\ket{1}$ olmuştur — bu tam olarak **$Z$ kapısının etkisidir**. Yani $\ket{-}$ durumundaki bir hedef, CNOT aracılığıyla kontrole $Z$ uygular gibi davranmıştır.

Bunu sezgisel kılmak için bir **ses yansıması** analojisi kurulabilir. Bir ses dalgası katı bir yüzeye çarptığında geri yansır ve faz tersine döner: tepe noktası çukur, çukur noktası tepe olur. Dalganın genliği değişmemiştir; değişen yalnızca fazıdır. Phase kickback'te de benzer biçimde CNOT'un "darbesi" $\ket{-}$ yüzeyinden geri tepip kontrol kubitine eksi faz olarak yansır. **Faz, hedeften kontrole geri tepmiştir** — ismin kökeni buradadır.

Mekanizmanın işleyebilmesi için iki koşul birlikte gereklidir: hedef **$\ket{-}$ özdurum**unda olmalı ve kontrol **süperpozisyon**da bulunmalıdır. Hedef $\ket{0}$ ya da $\ket{1}$ gibi hesaplama bazı durumunda olsaydı, $-1$ çarpanı ortaya çıkmaz ve geri tepme gerçekleşmezdi.

Superdense coding'deki bağlantı şöyledir: Asja'nın 11 bitini kodlamak için uyguladığı $Z$ kapısı, yukarıdaki eşitliğin sağ tarafıyla aynı etkiyi doğruca üretir. Phase kickback ise bu etkinin dolaylı yoldan — entangled bir hedef üzerinden — nasıl elde edilebildiğini gösterir. Kuantum algoritmalarındaki birçok zekice tasarım (Grover'ın oracle'ı, Deutsch-Jozsa) aynı fikre dayanır: bilgiyi bir fazın içine sakla, sonra $H$ ile ölçülebilir bite dönüştür.

:::

---

<div data-anim="gate3" data-scene="phase-kickback"></div>

---

## Problem Neydi?

- Klasik dünyada 1 fiziksel taşıyıcı gönderirseniz en fazla 1 klasik bit taşırsınız
    
- Burada soru şu:
    
- **Önceden paylaşılmış dolanıklık varsa, tek kubit göndererek 2 klasik bit iletebilir miyiz?**
    
- Cevap: **Evet**
    

::: {.notes}  
Klasik iletişimde temel sınır şudur: tek bir fiziksel taşıyıcı, en fazla 1 klasik bit bilgi taşır. Bu nedenle "2 biti iletmek için en az 2 bitlik taşıyıcı gerekir" sezgisi oldukça güçlüdür. Superdense coding tam bu noktada farklı bir soru sorar: Önceden paylaşılmış dolanıklık varsa, iletişim anında gönderilen taşıyıcı sayısı azaltılabilir mi?

Bu protokolde yanıt "evet"tir: Asja, yalnızca 1 kubit göndererek Balvis'in 2 klasik bit elde etmesini sağlar. Ancak bu sonuç "bedava kapasite artışı" anlamına gelmez. Çünkü mesaj gönderiminden önce iki tarafın bir Bell çifti paylaşmış olması gerekir. Yani kaynak tüketimi tamamen ortadan kalkmaz; kaynak, zaman içinde iki aşamaya bölünür:

1. Mesajdan önce: dolanık çiftin hazırlanması ve paylaşılması  
2. Mesaj anında: yalnızca 1 kubitin fiziksel olarak iletilmesi

Dolayısıyla superdense coding'in asıl önemi, toplam fiziksel maliyeti sihirli biçimde azaltması değil, iletişim anındaki kanal kullanımını dolanıklık yardımıyla daha verimli hale getirmesidir.
:::

---

## Bell Durumu Oluşturma

Başlangıç:

$$  
\ket{00}  
$$

Adım 1: Birinci kubite Hadamard:

$$  
\ket{00} \xrightarrow{H \otimes I} \frac{1}{\sqrt{2}}(\ket{00}+\ket{10})  
$$

Adım 2: CNOT:

$$  
\frac{1}{\sqrt{2}}(\ket{00}+\ket{10}) \xrightarrow{\mathrm{CNOT}} \frac{1}{\sqrt{2}}(\ket{00}+\ket{11})  
$$

::: {.notes}  
**Bell durumu nedir?**  
Bell durumları, iki kubit için tanımlı, birbirine ortogonal ve maksimum dolanık dört özel durumdur:
$\ket{\Phi^+}, \ket{\Phi^-}, \ket{\Psi^+}, \ket{\Psi^-}$.  
Bu durumların ortak özelliği şudur: tek tek kubitlere bakıldığında sonuçlar rastgele görünür, ancak iki kubit birlikte ölçüldüğünde güçlü ve düzenli korelasyon ortaya çıkar. Bu nedenle Bell durumları, kuantum iletişimde "paylaşılmış kaynak durum" olarak kullanılır.

Bu bölümde ürettiğimiz durum $\ket{\Phi^+}$'dır:

$$
\ket{\Phi^+}=\frac{1}{\sqrt{2}}(\ket{00}+\ket{11})
$$

Kavramsal olarak devredeki iki adımın rolü farklıdır:

1. $H$ kapısı birinci kubitte yerel belirsizlik üretir (süperpozisyon).  
2. CNOT bu yerel belirsizliği iki kubit arasında paylaşılan korelasyona dönüştürür (dolanıklık).

Başlangıç $\ket{00}$ için işlemsel akış:

$$
(H \otimes I)\ket{00}
= \frac{1}{\sqrt{2}}(\ket{00}+\ket{10})
$$

Bu ara durumda sistem hâlâ ayrılabilirdir; dolanıklık henüz oluşmamıştır.

$$
\frac{1}{\sqrt{2}}(\ket{00}+\ket{10})
\xrightarrow{\mathrm{CNOT}}
\frac{1}{\sqrt{2}}(\ket{00}+\ket{11})
= \ket{\Phi^+}
$$

Son durumda ölçüm çıktıları 00 ve 11'dir; her biri olasılık $1/2$ ile gelir. Yani tekil sonuçlar rastgele, ortak sonuçlar ise tam korelasyonludur. Superdense coding'in çalışmasını mümkün kılan temel fiziksel kaynak tam olarak bu Bell korelasyonudur.  
:::

---

## Dolanıklık Tam Olarak Ne Demek?

$$  
\ket{\Phi^+}=\frac{1}{\sqrt{2}}(\ket{00}+\ket{11})  
$$

- Bu durum iki ayrı tek-kubit durumunun çarpımı olarak yazılamaz
    
- Yani
    

$$  
\ket{\Phi^+} \neq \ket{u} \otimes \ket{v}  
$$

- Ölçüm yapıldığında sonuçlar korelasyonludur
    
- Ama bu sadece “önceden belirlenmiş iki gizli bit” anlamına gelmez
    

::: {.notes}  
Dolanıklık, iki kubitli bir durumun "iki bağımsız tek-kubit durumu"na ayrılamaması demektir.  
Başka bir deyişle, sistemin tam bilgisi yalnızca bütün halinde vardır; parçaların ayrı ayrı durumlarını bilmek toplam durumu yeniden kurmaya yetmez.

Bu yüzden dolanıklık, yalnızca "iki sonuç hep aynı geliyor" türü bir korelasyon değildir. Klasik korelasyonda bilgi baştan ayrı ayrı parçalara yazılmış olabilir. Dolanık durumda ise ilişki, durum vektörünün yapısının içindedir.

Buradaki örnek:

$$
\ket{\Phi^+}=\frac{1}{\sqrt{2}}(\ket{00}+\ket{11})
$$

Bu durum ayrılabilir olsaydı

$$
(a\ket0+b\ket1)\otimes(c\ket0+d\ket1)
$$

şeklinde yazılabilirdi. Açılım yapıldığında katsayıların aynı anda
$ac=\frac{1}{\sqrt2}$, $ad=0$, $bc=0$, $bd=\frac{1}{\sqrt2}$  
koşullarını sağlaması gerekir. Ancak $ac$ ve $bd$ sıfır değilken hem $ad$ hem $bc$'nin sıfır olması mümkün değildir; bu bir çelişkidir. Dolayısıyla $\ket{\Phi^+}$ ayrıştırılamaz ve gerçekten dolanıktır.

Fiziksel anlamı şudur: tek tek ölçüm sonuçları rastgele görünse bile ortak ölçüm sonuçları güçlü bir yapıya sahiptir. Superdense coding, bilgiyi tam da bu ortak yapıya kodlar; bu nedenle dolanıklık protokolün merkezi kaynağıdır.  
:::

---

## Dolanıklık ≠ Klasik Korelasyon

- Klasik korelasyon: iki zarfa önceden aynı renk kâğıt koymak
    
- Kuantum dolanıklık: ölçümden önce tek tek sonuçlar belirli değildir
    
- Ölçüm bazı bazlarda korelasyon verir; bazı bazlarda klasik gizli değişken modeli yetersiz kalır
    
- Bu fark Bell testleriyle deneysel olarak doğrulanmıştır
    

::: {.notes}  
Burada hedef Nobel tarihi anlatmak değil, klasik analojinin sınırını net çizmek.

Klasik zarfta “bilgi zaten oradadır, siz sadece öğrenirsiniz.” Dolanıklıkta bu anlatı yeterli değildir. Superdense coding’in çalışabilmesi de zaten yalnızca klasik korelasyonla açıklanamaz; yerel X/Z işlemleri küresel Bell durumunu değiştiriyor.  
:::

---

## Protokolün Kaynağı: Paylaşılmış Bell Çifti

Asja ve Balvis başlangıçta şu durumu paylaşsın:

$$  
\ket{\Phi^+}=\frac{1}{\sqrt{2}}(\ket{00}+\ket{11})  
$$

- Asja ilk kubiti alır
    
- Balvis ikinci kubiti alır
    
- Bu hazırlık **mesajdan önce** yapılır
    
- Mesaj anında Asja yalnızca **kendi kubitine** dokunur
    

::: {.notes}  
Bu slayt kritik çünkü öğrencilerin çoğu “tek kubitle 2 bit gönderiliyor” cümlesini eksik anlıyor.

Açıkça söyle: Evet, iletişim anında tek kubit gidiyor. Ama bundan önce paylaşılmış bir dolanıklık kaynağı var. Yani protokolün toplam fiziksel maliyetini gizlemiyoruz; sadece iletişim aşamasında tek kubit kullanıyoruz.  
:::

---

## Kodlama Fikri

Asja göndermek istediği iki bitte, kendi kubitine sadece yerel kapılar uygular:

|Mesaj|İşlem|Oluşan Bell durumu|
|---|---|---|
|$00$|$I$|$\ket{\Phi^+}=\frac{1}{\sqrt{2}}(\ket{00}+\ket{11})$|
|$01$|$X$|$\ket{\Psi^+}=\frac{1}{\sqrt{2}}(\ket{01}+\ket{10})$|
|$10$|$Z$|$\ket{\Phi^-}=\frac{1}{\sqrt{2}}(\ket{00}-\ket{11})$|
|$11$|$XZ$ (veya $ZX$, global faz farkıyla)|$\ket{\Psi^-}=\frac{1}{\sqrt{2}}(\ket{01}-\ket{10})$|

::: {.notes}  
Bu bölümde "kodlama" kelimesi, tek kubitin içine bit dizisi yazmak anlamına gelmez. Kodlama, paylaşılan Bell çiftinin hangi Bell durumuna dönüştürüleceğini seçmek demektir. Bilgi taşıyıcısı tek kubit değil, iki kubitli ortak durumun kendisidir.

Başlangıçta paylaşılan durum $\ket{\Phi^+}$ olsun. Asja yalnızca kendi kubitine dokunur:

$$
(I\otimes I)\ket{\Phi^+}=\ket{\Phi^+},\quad
(X\otimes I)\ket{\Phi^+}=\ket{\Psi^+},
$$
$$
(Z\otimes I)\ket{\Phi^+}=\ket{\Phi^-},\quad
(XZ\otimes I)\ket{\Phi^+}=\ket{\Psi^-}
$$

Böylece $\{00,01,10,11\}$ mesaj kümesi, dört Bell durumuna bire bir eşlenir. Bu eşleme superdense coding'in çekirdeğidir.

Kavramsal olarak:
- $X$ işlemi bit-paritesini değiştirir; $\Phi$ ailesi ile $\Psi$ ailesi arasında geçiş yaptırır.
- $Z$ işlemi bağıl fazı değiştirir; $+$ ile $-$ durumları arasında geçiş yaptırır.
- $XZ$ (veya $ZX$) birlikte uygulandığında her iki etki aynı anda oluşur; aradaki fark yalnızca global fazdır ve ölçüm sonuçlarını değiştirmez.

Kısa örnek: mesaj $10$ ise Asja $Z$ uygular. Bu işlem olasılıkları değiştirmez, fakat Bell durumunun işaretini değiştirir:
$\ket{\Phi^+}\to\ket{\Phi^-}$.  
Balvis'in çözme devresi bu faz farkını ölçülebilir bit farkına çevirdiği için mesaj geri okunur.

Buradaki en kritik içgörü şudur: klasik sezgide "işaret değişimi" önemsiz görünür, kuantumda ise faz değişimi doğrudan bilgi taşıyabilir. Protokolün iki bit kazancı tam olarak bu faz-bit birlikte kodlamasından gelir.  
:::

---

## Neden X ve Z Yeterli?

- $X$ bit bilgisini değiştirir: $\ket0 \leftrightarrow \ket1$
    
- $Z$ faz bilgisini değiştirir: $\ket1$ bileşenine eksi koyar
    
- Bell çifti üzerinde bu iki işlem birlikte dört farklı, ortogonal durum üretir
    
- Yani iki klasik bit için tam dört ayırt edilebilir kuantum durumumuz vardır
    

::: {.notes}  
Burada fazın neden önemli olduğuna köprü kur. Önceki oturumlardaki Hadamard ve girişim bilgisini burada yeniden kullan.

Tek kubitte fazı doğrudan ölçemezdik. Ama uygun iki-kubitli çözme devresiyle o faz bilgisi ölçüm sonucuna taşınıyor. Protokolün püf noktası bu.  
:::

---

## Asja Ne Gönderiyor?

- Asja iki biti doğrudan “bit dizisi” olarak göndermiyor
    
- Kendi kubitini, mesaja karşılık gelen Bell durumunun parçası hâline getirip gönderiyor
    
- Gönderilen tek kubit, ancak Balvis’in elindeki diğer kubitle **birlikte** anlam kazanıyor
    

::: {.notes}  
Bu slayt pedagojik. “Tek kubit 2 bit taşıyor” cümlesi yanlış anlaşılmasın.

Tek başına dolaşan kubite bakarsanız 2 bit okuyamazsınız. Bilgi, iki kubitli ortak durumda kodlanmış durumda. Balvis’in çözebilmesi için ikinci kubitin zaten elinde olması şart.  
:::

---

## Çözme Devresi (Balvis)

Asja kubitini gönderince Balvis artık iki kubiti de elinde tutar.

Uyguladığı devre:

1. CNOT(Asja, Balvis)
    
2. H(Asja)
    
3. Ölçüm
    

Bu devre Bell bazını standart baza çevirir:

$$  
\ket{\Phi^+} \to \ket{00},\quad  
\ket{\Psi^+} \to \ket{01},\quad  
\ket{\Phi^-} \to \ket{10},\quad  
\ket{\Psi^-} \to \ket{11}  
$$

::: {.notes}  
Bu slaytta çok teknik ayrıntıya boğma. Ana fikir: önce Bell durumları vardı, şimdi onları ölçülebilir hesaplama bazına geri çeviriyoruz.

İstersen bir örneği tahtada tam aç. Mesela mesaj 10 ise Z uygulanıyor:  
$\frac{1}{\sqrt2}(\ket{00}+\ket{11}) \to \frac{1}{\sqrt2}(\ket{00}-\ket{11})$.  
Sonra CNOT ve H sonrası neden |10> çıktığını adım adım göster.  
:::

---

## Bir Örnek: Mesaj = 10

Başlangıç:

$$  
\ket{\Phi^+}=\frac{1}{\sqrt{2}}(\ket{00}+\ket{11})  
$$

Asja, $10$ göndermek için $Z$ uygular:

$$  
\frac{1}{\sqrt{2}}(\ket{00}+\ket{11})  
\xrightarrow{Z \otimes I}  
\frac{1}{\sqrt{2}}(\ket{00}-\ket{11})  
$$

Balvis çözme devresini uygular:

$$  
\frac{1}{\sqrt{2}}(\ket{00}-\ket{11})  
\xrightarrow{\mathrm{CNOT}}  
\frac{1}{\sqrt{2}}(\ket{00}-\ket{10})  
\xrightarrow{H \otimes I}  
\ket{10}  
$$

::: {.notes}  
En az bir örneği tam açmak gerekli. Mevcut sürümde bu eksik.

Burada öğrencinin görmesi gereken şey şu: Z ile sadece faz değiştirmiştik; ama çözme devresi sonunda bu faz farkı doğrudan ilk bitten okunur hâle geldi.  
:::

---

## Devreyi Bir Bütün Olarak Gör

```python
from qiskit import QuantumRegister, ClassicalRegister, QuantumCircuit
from qiskit_aer import AerSimulator

all_pairs = ['00', '01', '10', '11']

for pair in all_pairs:
    a, b = int(pair[0]), int(pair[1])
    q = QuantumRegister(2, "q")
    c = ClassicalRegister(2, "c")
    qc = QuantumCircuit(q, c)

    # Paylaşılan Bell çifti
    qc.h(q[0])
    qc.cx(q[0], q[1])

    # Asja'nın kodlaması
    if a == 1:
        qc.z(q[0])
    if b == 1:
        qc.x(q[0])

    qc.barrier()

    # Balvis'in çözmesi
    qc.cx(q[0], q[1])
    qc.h(q[0])
    qc.measure(q, c)

    counts = AerSimulator().run(qc, shots=256).result().get_counts(qc)
    print(pair, counts)
```

::: {.notes}  
Mevcut kod zaten doğru; ama barrier eklemek gösterim açısından daha temiz olur.

Kodun altında beklentiyi sözlü ver: her çift için tek bir sonuç çıkmalı. Gürültüsüz simülatörde bu protokol deterministik görünür.  
:::

---

## Beklenen Sonuçlar

|Gönderilen mesaj|Beklenen ölçüm|
|---|---|
|`00`|`00`|
|`01`|`01`|
|`10`|`10`|
|`11`|`11`|

- Simülatörde her mesaj tek bir sonuca çöküyor
    
- Çünkü kullandığımız dört Bell durumu ortogonal
    
- Ortogonal durumlar uygun bazda hatasız ayırt edilebilir
    

::: {.notes}  
Burada “neden çalışıyor?” slaytını daha ölçülebilir hâle getiriyoruz. Ortogonallik lafını doğrudan çıktıyla bağla.

Önemli cümle: Bell durumları üst üste binmiyor; iç çarpımları sıfır. Bu yüzden çözme devresi onları farklı klasik bit dizilerine ayırabiliyor.  
:::

---

<div data-anim="superdense"></div>

---

## Burada Gerçek Kazanç Ne?

- İletişim anında sadece **1 kubit** gönderildi
    
- Ama karşı taraf **2 klasik bit** elde etti
    
- Kazanç, önceden paylaşılmış dolanıklığın iletişim kaynağı olarak kullanılmasından geliyor
    
- Yani superdense coding, **dolanıklık + tek kubit iletim** kombinasyonudur
    

::: {.notes}  
Bu slayt özellikle önceki tartışmalar için önemli. Öğrencinin aklındaki “ama başta zaten iki kubit gerekiyordu” itirazını burada doğrudan cevapla.

Evet, gerekliydi. İddia “toplam fiziksel kaynak tek kubit” değil. İddia şu: önceden paylaşılan entanglement varsa, mesaj anındaki kanal kullanımı açısından kapasite artıyor.  
:::

---

## Sınırlama ve Doğru Yorum

- Bu protokol ışıktan hızlı iletişim sağlamaz
    
- Dolanıklık tek başına mesaj taşımaz
    
- Asja’nın kubiti fiziksel olarak Balvis’e gitmeden Balvis mesajı çıkaramaz
    
- Yani klasik nedensellik ihlal edilmiyor
    

::: {.notes}  
Bu slaytı eklemek iyi olur; öğrenciler sık sık FTL çağrışımı yapıyor.

Balvis kendi kubitine bakarak mesajı önceden öğrenemez. Mesajın çözülebilmesi için Asja’nın kubitinin gerçekten ulaşması gerekir.  
:::

---

## Superdense Coding ve Teleportation İlişkisi

- İkisi de Bell çifti kullanır
    
- Superdense coding: **1 kubit gönder, 2 klasik bit elde et**
    
- Teleportation: **2 klasik bit gönder, 1 bilinmeyen kubit durumu aktar**
    
- İkisi birbirinin yapısal “tersi” gibi düşünülebilir
    

::: {.notes}  
Bu karşılaştırma kapanış öncesi çok yararlı. Öğrenci protokolleri zihinde eşleştirir.

Teknik olarak tam ters değiller ama pedagojik olarak yan yana koymak çok faydalı.  
:::

---

## Özet

- Bell durumu, yerel X ve Z işlemleriyle dört farklı Bell durumuna dönüştürülebilir
    
- Bu dört durum iki klasik bitlik mesaj uzayına karşılık gelir
    
- Balvis CNOT + H ile Bell bazını standart baza çevirip mesajı okur
    
- Protokolün gücü, önceden paylaşılmış dolanıklığın iletişim kaynağı olarak kullanılmasından gelir
    

::: {.notes}  
Kapanışta en önemli tek cümle şu olabilir:

“Superdense coding, faz ve bit bilgisinin dolanık iki-kubitli bir durumda birlikte kodlanıp tek kubitlik iletimle geri okunabilmesidir.”  
:::


---


<iframe
  src="https://bits-and-electrons.github.io/bloch-sphere-simulator/"
  width="100%"
  height="800"
  style="border:none; border-radius:8px;"
  loading="lazy">
</iframe>