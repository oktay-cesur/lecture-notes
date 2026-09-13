---
title: "Temel Ağ Güvenliği, NAT ve Bütünleşik Ağ Uygulaması"
subtitle: "BLP 1003 — Bilgisayar Ağları"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: 2026-09-12
execute:
  echo: false
---

::: {.callout-warning}
## Taslak Çalışma Notu
Bu doküman BLP 1003 Bilgisayar Ağları dersi için resmî izlence ve mevcut sunum malzemesi temel alınarak hazırlanmış ilk çalışma taslağıdır. Haftalık pedagojik revizyonlarla olgunlaştırılmaya devam edecektir.
Ana İzlence: [[crs-blp1003|Ders İzlence Merkezi]]
:::



## Bugünün Temel Sorusu

> Bir kafede açık Wi-Fi ağına bağlandığınızda, yan masadaki biri şifrelerinizi ve banka işlemlerinizi görebilir mi? Evinizdeki onlarca cihaz tek bir IP adresiyle internete çıkarken, gelen yanıtlar doğru cihaza nasıl geri döner?

- Bilgi güvenliğinin 3 temel hedefi (CIA) nedir?
- Parola ile şifreli metin arasındaki fark nedir?
- NAT bir güvenlik protokolü müdür, yoksa bir adres dönüştürme mekanizması mı?
- Dönem boyunca öğrendiğimiz tüm parçaları (PC, Switch, Router, AP, NAT, DNS, DHCP) tek bir ağda nasıl birleştiririz?

::: {.notes}
Dönemin 12. ve son teknik haftasında iki kritik başlığı bir araya getiriyoruz:
1. Temel Ağ Güvenliği ve Kriptografik İletişim Mantığı,
2. Özel adresleri internete bağlayan NAT/PAT mekanizması.

Dersin sonunda dönem boyunca parça parça inşa ettiğimiz tüm ağ yapılarını bütünleşik bir topolojide birleştirerek uçtan uca veri akışını özetleyeceğiz.
:::

---

## Ağ Güvenliğinin Temel Sacayakları: CIA Üçlüsü

Herhangi bir ağ güvenlik politikasının korumayı hedeflediği 3 temel değer:

```text
               GİZLİLİK (Confidentiality)
                       ▲
                      / \
                     /   \
                    /     \
                   /       \
                  /  GÜVENLİK\
                 /             \
BÜTÜNLÜK (Integrity) ───────── ERİŞİLEBİLİRLİK (Availability)
```

- **Gizlilik (Confidentiality):** Verinin yalnızca yetkili kişiler tarafından okunabilmesi. İletişimin şifrelenmesi (Encryption).
- **Bütünlük (Integrity):** Verinin yolda değişmediğinin, silinmediğinin veya ekleme yapılmadığının garantisi (Hash / Sağlama / HMAC).
- **Erişilebilirlik (Availability):** İhtiyaç duyulduğunda sistemin ve ağın kesintisiz hizmet verebilmesi (Yedeklilik, DoS/DDoS koruması).

::: {.notes}
Güvenlik denildiğinde insanların aklına ilk olarak gizlilik (şifreleme) gelir. Ancak bütünlük ve erişilebilirlik en az gizlilik kadar kritiktir. Örneğin bir banka havalesinde transfer tutarının yolda değiştirilmemesi (bütünlük) ya da sistemin saldırı alıp çökmemesi (erişilebilirlik) doğrudan iş sürekliliğini belirler.
:::

---

## Terminoloji: Parola vs Şifreli Metin (Ciphertext)

Günlük Türkçede "şifre" sözcüğü iki farklı kavram için yanlışlıkla ortak kullanılır:

- **Parola (Password):** Bir kullanıcının ya da cihazın kimliğini doğrulamak (Authentication) için girdiği gizli karakter dizisi (Örn: `K4mpu$!2026`).
- **Şifreleme (Encryption) ve Şifreli Metin (Ciphertext):** Açık metin (plaintext) halindeki bir verinin matematiksel bir algoritma ve anahtar kullanılarak anlamsız karakter yığınına dönüştürülmesi eylemi.

```text
Açık Metin (Plaintext) ───[Şifreleme Algoritması + Anahtar]───> Şifreli Metin (Ciphertext)
"Banka Hesabı: 1234"    ─────────────────────────────────────>  "a8f9b2c7e10d..."
```

::: {.notes}
Öğrencilerin bu ayrımı kesin olarak yapması gerekir: "Wi-Fi şifresi" aslında bir paroladır (WPA2 Pre-Shared Key). O parolanın arka planda trafiği dönüştürdüğü AES ise şifreleme algoritmasıdır.
:::

---

## Simetrik ve Asimetrik Şifreleme Mantığı

Matematiksel ispatlara ve formüllere boğulmadan temel çalışma prensibi:

### 1. Simetrik Şifreleme (Gizli Anahtar)
- Şifreleme ve çözme için **tek ve aynı gizli anahtar** kullanılır (Örn: AES, DES).
- *Avantajı:* Son derece hızlıdır, devasa verileri şifreleyebilir.
- *Zorluğu:* Anahtarı karşı tarafa güvenli şekilde teslim etme problemi (Key Distribution Problem).

### 2. Asimetrik Şifreleme (Açık Anahtar - Ali ve Burak Kurgusu)
- Her kullanıcının birbiriyle matematiksel bağlı iki anahtarı vardır: **Açık Anahtar (Public Key)** ve **Gizli Anahtar (Private Key)**.
- Açık anahtar herkesle paylaşılır; gizli anahtar sadece sahibinde kalır.
- Ali, Burak'a gizli mesaj göndereceği zaman Burak'ın Açık Anahtarıyla mesajı kilitler.
- Bu kilidi dünyada açabilecek **tek kişi Burak'ın kendisidir** (çünkü Gizli Anahtar yalnızca ondadır!).

> Modern İnternet (HTTPS/TLS), ikisini birleştirir: Asimetrik şifrelemeyle güvenli el sıkışma yapılır, ardından hızlı bir Simetrik anahtar belirlenerek oturum verisi simetrik akar (Hibrit Model).

::: {.notes}
Ali-Burak analojisi açık anahtarlı şifrelemeyi öğrencilerin zihninde somutlaştırır. Posta kutusuna herkes mektup atabilir (açık anahtar), ama kutuyu sadece anahtarın sahibi açabilir (gizli anahtar). BLP 1003'te RSA ya da Diffie-Hellman matematiğine girilmez; ağdaki güvenli kanalın nasıl kurulduğu sezgisel olarak verilir.
:::

---

## Güvenli vs Güvensiz Servisler

Modern ağlarda eski açık metin protokoller tamamen terk edilmelidir:

| Eski / Güvensiz Protokol (Açık Metin) | Modern / Güvenli Protokol (Şifreli Tünel) | Güvenlik Farkı |
|---|---|---|
| **HTTP (Port 80)** | **HTTPS (Port 443 - TLS)** | Web trafiği ve form verileri şifrelenir. |
| **Telnet (Port 23)** | **SSH (Port 22)** | Cihaz yönetiminde şifreler açık gitmez. |
| **FTP (Port 20/21)** | **SFTP / FTPS** | Dosya ve kimlik bilgileri korunur. |
| **WEP / Açık Wi-Fi** | **WPA2 / WPA3-Enterprise** | Havadaki radyo paketleri şifrelenir. |

::: {.notes}
Packet Tracer üzerinde bir bilgisayardan router'a Telnet ile bağlanıp Simulation Mode'da paket incelendiğinde, yazılan şifrenin açık metin olarak kabloda aktığı net bir şekilde gösterilebilir. Aynı işlem SSH ile yapıldığında ise sadece anlamsız şifreli bloklar görünür.
:::

---

## NAT (Network Address Translation) ve PAT Mantığı

Özel IP bloklarının (`192.168.X.X`, `10.X.X.X`) İnternet omurgasında yönlendirilemediğini görmüştük.

- **NAT Nedir?** Yönlendiricinin (veya modemin), iç ağdan gelen özel IP adreslerini internete çıkarken kendi sahip olduğu **Genel (Public) IP adresine** dönüştürmesidir.
- **PAT (Port Address Translation / NAT Overload):** Yüzlerce cihazın tek bir genel IP üzerinden internete çıkabilmesi için, her bir iç cihazın oturumuna dış tarafta **farklı bir port numarası** atanmasıdır.

```text
İÇ AĞ (ÖZEL IP)                             ROUTER / NAT TABLOSU                     DIŞ İNTERNET
PC 1: 192.168.1.10:54123 ────┐            ┌───────────────────────────┐
                             ├── G0/0 ────┤ 192.168.1.10:54123 ↔ :60001├──── G0/1 ──> [GENEL IP]
PC 2: 192.168.1.20:54123 ────┘    (NAT)   │ 192.168.1.20:54123 ↔ :60002│               212.156.4.88
                                          └───────────────────────────┘
```

::: {.callout-note}
### Kritik Pedagojik Düzeltme
**NAT bir güvenlik protokolü değildir!** NAT'ın asıl varoluş sebebi IPv4 adres tükenmesini önlemektir. Ancak dışarıdan gelen ve içerideki hiçbir oturumla eşleşmeyen istenmeyen paketler NAT tablosundan geçemediği için yan etki olarak temel bir gizleme ve koruma sağlar.
:::

::: {.notes}
PAT sayesinde evinizdeki telefon, bilgisayar, akıllı televizyon aynı anda tek bir modem üzerinden internete bağlanır. Dışarıdaki bir web sitesi sadece modemin genel IP'sini görür; yanıt geldiğinde modem port numarasına bakarak paketi televizyona mı telefona mı göndereceğini anlar.
:::

---

## Dönem Sonu Bütünleşik Ağ Mimarisi

Dönem boyunca öğrendiğimiz tüm bileşenlerin tek bir kurumsal ağdaki büyük resmi:

```text
[ÖĞRENCİ PC] ──┐
               ├── [SWITCH 1] ──┐
[PERSONEL PC] ─┘                │
                                ├── [ROUTER (İç Gateway)] ── [FIREWALL / NAT] ── [İNTERNET]
[KABLOSUZ AP] ─┐                │          │                                          │
    ▲          ├── [SWITCH 2] ──┘          │                                          │
[LAPTOP] ──────┘                   [YEREL SUNUCU (DNS/DHCP)]                     [WEB SUNUCUSU]
```

Uçtan Uca Doğrulama Adımları:
1. İstemci kablosuz veya kablolu bağlanır, DHCP'den IP alır.
2. DNS ile hedef web sunucusunun IP adresini sorgular.
3. Kendi maskesiyle hedefin dış ağda olduğunu anlayıp paketi Varsayılan Ağ Geçidine (Router) teslim eder.
4. Router paketi yönlendirir, NAT arayüzünde genel IP'ye çevirir.
5. Veri İnternet üzerinden HTTPS/TLS şifreli oturumuyla hedefe ulaşır.

::: {.notes}
Bu nihai kurgu, dönem boyunca işlenen 12 haftanın tamamını tek bir senaryoda birleştirir. Bir bilgisayar mühendisliği ya da bilişim güvenliği teknisyeni adayı, bu topolojideki her cihazın hangi katmanda çalıştığını, hangi komutla test edileceğini ve hangi adresin nerede değiştiğini açıkladığında dersin tüm hedeflerine ulaşılmış demektir.
:::

---

## Bütünleşik Ağ Sorun Giderme (Troubleshooting) Kontrol Listesi

Ağda bir bağlantı koptuğunda izlenecek disiplinli sıra:

1. **Katman 1 (Fiziksel):** Kablo takılı mı? Link ışığı (yeşil) yanıyor mu? Wi-Fi açık mı?
2. **Katman 2 (Veri Bağı):** Switch portu açık mı (`no shutdown`)? MAC tablosu öğrenilmiş mi (`show mac-address-table`)?
3. **Katman 3 (Ağ):**
   - IP adresi doğru mu (`ipconfig`)? APIPA (`169.254.X.X`) var mı?
   - Kendi kendine ping atabiliyor mu (`ping 127.0.0.1`)?
   - Varsayılan ağ geçidine ping atabiliyor mu (`ping 192.168.1.1`)?
   - Dış ağa ping atabiliyor mu (`ping 8.8.8.8`)?
4. **Katman 4 & 7 (Uygulama):**
   - Alan adı çözülebiliyor mu (`nslookup google.com` / DNS çalışıyor mu)?
   - Hedef port açık mı (HTTP 80 / HTTPS 443 / SSH 22)?

::: {.notes}
Bu kontrol listesi mezuniyet sonrası iş hayatında öğrencilerin en çok kullanacağı altın rehberdir. Sorunları rastgele deneme-yanılmayla değil, katmanlı modelin mantığıyla izole etmek gerçek bir ağ profesyonelinin refleksidir.
:::

---

## Dönem Özeti ve Teşekkür

Bu dönem BLP 1003 Bilgisayar Ağları dersinde:
- Veri iletiminin temellerini ve protokol fikrini,
- Ağ topolojilerini, kablolama ve donanım standartlarını,
- Ethernet çerçevesini, MAC adreslerini ve switch öğrenme mekanizmasını,
- Katmanlı mimariyi, OSI 7 modelini ve kapsülleme/çözümleme sürecini,
- TCP/IP yığınını, ARP, IP ve ICMP protokollerini,
- Taşıma katmanında TCP/UDP seçimini, portları ve uygulama servislerini (DNS, DHCP, HTTP),
- IPv4 adresleme matematiğini, ikili tabanı ve alt ağlara bölmeyi (Subnetting / CIDR),
- Router donanımını, paket yönlendirme mantığını ve varsayılan ağ geçidini,
- Kablosuz ağların (WLAN) RF dinamiklerini ve WPA2/WPA3 güvenliğini,
- Temel ağ güvenliği prensiplerini, NAT mekanizmasını ve bütünleşik ağ tasarımını tamamladık.

*Başarılar dilerim.*
