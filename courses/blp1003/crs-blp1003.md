---
title: "BLP 1003 Bilgisayar Ağları"
subtitle: "Ders Notları"
type: syllabus
description: BLP 1003 Bilgisayar Ağları dersi için resmî izlenceyi temel alan haftalık ders notu ve uygulama dağılımı.
tags:
  - output
sidebar: blp1003
---

::: {.callout-warning}
## Taslak Çalışma Notu Seti

Bu ders notları seti, BLP 1003 Bilgisayar Ağları dersi için eski sunumlar ve resmî izlence temel alınarak oluşturulmuş ilk çalışma iskeletidir. İçerik, haftalık pedagojik revizyonlar ve Cisco Packet Tracer uygulamalarıyla geliştirilmeye devam edecektir.
:::



## Dersin Amacı

Bilgisayar ağları; modern bilişim sistemlerinin, dağıtık uygulamaların ve siber güvenliğin omurgasını oluşturur. Bir verinin bir uçtan diğerine iletilmesi, yalnızca fiziksel bir kablodan sinyal geçmesi değil; katmanlı bir mimaride kurallara (protokollere) bağlı çalışan karmaşık bir işbirliği sürecidir.

Bu dersin temel amacı; öğrencilerin bilgisayar ağlarının çalışma prensiplerini, katmanlı ağ mimarisini (OSI ve TCP/IP), yerel ağlarda Ethernet ve MAC adreslemesini, IPv4 adresleme ve alt ağlara bölme (subnetting) yöntemlerini, temel yönlendirme mekanizmalarını ve kablosuz ağ güvenliğini kavramalarını sağlamaktır. Teorik anlatım, Cisco Packet Tracer simülasyon ortamında adım adım uygulamalar ve temel Cisco IOS komutlarıyla desteklenir.

## Öğrenme Çıktıları

Bu dersi başarıyla tamamlayan öğrenciler:

1. Bilgisayar ağlarını ağ türleri, topolojiler, iletim ortamları ve temel ağ cihazlarının işlevleri açısından sınıflandırır ve karşılaştırır.
2. Ağ iletişiminde katmanlı mimarinin işlevini OSI ve TCP/IP modelleri üzerinden analiz eder.
3. Ethernet, MAC adresleme, TCP, UDP ve temel ağ protokollerinin iletişim sürecindeki işlevlerini ayırt eder.
4. IPv4 adresleme yapısını kullanarak IP adresi, ağ adresi, yayın adresi ve alt ağ (subnetting/CIDR) hesaplamalarını gerçekleştirir.
5. Farklı ağlar arasındaki iletişimi yönlendirici (router), varsayılan ağ geçidi (default gateway) ve temel yönlendirme mekanizmaları açısından analiz eder.
6. Kablolu ve kablosuz ağlardaki temel güvenlik risklerini belirler ve uygun temel korunma yöntemleriyle ilişkilendirir.
7. Cisco Packet Tracer ortamında temel bir ağı cihaz, bağlantı, IPv4 adresleme ve temel Cisco IOS komutlarıyla yapılandırır; test eder ve temel bağlantı sorunlarını teşhis eder.

## Notları Nasıl Takip Etmelisiniz?

1. **Önce haftalık plana bakın.** İlgili haftanın konu ve sunum notunu açın. Notlar hem ders anlatımı slaytı hem de kendi kendine çalışma dokümanı olarak iki yönlü tasarlanmıştır.
2. **Kavramları problem temelli okuyun.** "Protokol nedir?", "Neden katmanlara ihtiyaç duyarız?", "2000 hostlu tek bir ağ neden alt ağlara bölünmelidir?" gibi temel soruların gerekçelerini takip edin.
3. **PDU akışını ve paket dönüşümünü izleyin.** Verinin uygulamadan kabloya inerken nasıl kapsüllendiğini (`veri → segment → paket → çerçeve → bit`) ve cihaz geçişlerinde hangi adreslerin değişip hangilerinin sabit kaldığını adım adım takip edin.
4. **Cisco Packet Tracer ile uygulayın.** Teorik olarak işlenen her konuyu simülatörde kurun; özellikle Simulation Mode kullanarak paketlerin cihazlar arasındaki hareketini ve protokol başlıklarını gözlemleyin.
5. **Hata senaryolarını test edin.** Yanlış maske, hatalı default gateway veya yanlış kablo türü bağlayarak ağın nasıl tepki verdiğini ve sorunun nasıl giderileceğini (troubleshooting) deneyimleyin.

::: {.callout-tip}
## Önerilen Çalışma Döngüsü

Konu anlatımını ve sunumu incele → problem ve karar sorularını yanıtla → Packet Tracer topolojisini kur → Simulation Mode'da paket akışını gözlemle → teşhis komutlarıyla (`ping`, `traceroute`, `show mac-address-table`, `show ip route`) ağı doğrula.
:::

::: {.callout-note}
## Temel Kaynak Kitaplar

- Behrouz A. Forouzan, *Data Communications and Networking*, McGraw-Hill.
- James F. Kurose ve Keith W. Ross, *Computer Networking: A Top-Down Approach*, Pearson.
- Andrew S. Tanenbaum ve David J. Wetherall, *Computer Networks*, Pearson.
- Cemal Cerit, *Cisco Ağ Teknolojileri Yönetimi*, Seçkin Yayıncılık.
- Cisco Networking Academy, Cisco Packet Tracer Eğitim Materyalleri.
:::

## Haftalık Plan

Dersin haftalık akışı resmî izlencedeki 12 haftalık plana dayanır. 7. hafta ara sınav ve kapsam tekrarı haftasıdır.

| Hafta | Konu Notu / Sunum | Açıklama ve Kapsam |
|:---:|---|---|
| 1 | [[tp_protokol-ve-veri-iletisiminin-temel-yapisi\|Protokol ve Veri İletişiminin Temel Yapısı]]<br>[[tp_bilgisayar-aglarinin-ortaya-cikisi-ve-temel-amaclari\|Bilgisayar Ağlarının Ortaya Çıkışı ve Temel Amaçları]] | Veri iletişiminin bileşenleri ve ortak kurallar bütünü olarak protokol kavramı; ağların ortaya çıkışını hazırlayan paylaşım ve iletişim gereksinimleri ile bilgisayar ağlarının temel amaçları. |
| 2 | [[tp_veri-bit-sinyal-ve-temel-iletim-bicimleri\|Veri, Bit, Sinyal ve İletim Ortamları]]<br>[[tp_ag-topolojileri-fiziksel-ve-mantiksal-yapi\|Ağ Yapıları: Roller, Bağlantılar ve Topolojiler]] | Veri–bit–sinyal ilişkisi, temel iletim biçimleri ve iletim ortamları; ağ kapsamları, uçların rolleri, bağlantı ve hedefleme biçimleri ile fiziksel ve mantıksal topolojiler. |
| 3 | [[tp_ag-cihazlari-ethernet-ve-mac\|Ağ Cihazları, Ethernet ve MAC Adresleme]] | NIC, switch, router, AP, firewall; Ethernet standardı ve çerçeve yapısı, MAC adresi anatomisi, switch'in MAC tablosunu öğrenmesi, collision ve broadcast domain ayrımı. |
| 4 | [[tp_katmanli-mimari-ve-osi-modeli\|Katmanlı Ağ Mimarisi ve OSI Modeli]] | Katmanlama ihtiyacı, diploma analojisi, 100 MB video problemi, OSI 7 katmanı ve işlevleri, PDU kavramı ve kapsülleme/çözümleme adımları (`veri → segment → paket → çerçeve → bit`). |
| 5 | [[tp_tcpip-kumesi-ve-temel-protokoller\|TCP/IP Protokol Kümesi ve Temel Ağ Protokolleri]] | TCP/IP mimarisi ve OSI karşılaştırması, IP protokolü (bağlantısız ve best-effort iletim), ARP ile yerel IP-MAC eşlemesi, ICMP ve ağ teşhisi (`ping`, `traceroute`). |
| 6 | [[tp_tasima-ve-uygulama-protokolleri\|Taşıma ve Uygulama Katmanı Protokolleri]] | Taşıma katmanı sorumluluğu, port numaraları ve soketler, TCP ve UDP karşılaştırması, 3 yollu el sıkışma (SYN, SYN/ACK, ACK), temel servisler: DNS, DHCP ve HTTP/HTTPS. |
| 7 | [[tp_ara-sinav-hazirlik-ve-tekrar\|Ara Sınav Hazırlık ve Kapsam Tekrarı]] | Hafta 1–6 (ÖÇ1–ÖÇ3) kazanım matrisi, katmanlar ve protokoller arası büyük resim, uçtan uca paket yolculuğu analizi, kavramsal kontrol soruları ve simülasyon senaryoları. |
| 8 | [[tp_ipv4-adresleme-temelleri\|IPv4 Adresleme Temelleri]] | Mantıksal adresleme, 32-bit IPv4 yapısı, ikili/ondalık dönüşümü, ağ ve host bölümleri, alt ağ maskesi ve AND işlemi, ağ ve yayın adresleri, RFC 1918 özel IP blokları ve varsayılan ağ geçidi. |
| 9 | [[tp_subnetting-ve-cidr\|Alt Ağlara Bölme (Subnetting) ve CIDR]] | Alt ağlara bölme gerekçesi (2000 host problemi, broadcast sınırlama), CIDR ve prefix mantığı, bit ödünç alma ($2^n$, $2^h - 2$), adım adım alt ağ hesabı, blok büyüklüğü ve adres planlama. |
| 10 | [[tp_yonlendirme-ve-varsayilan-ag-gecidi\|Yönlendirme Temelleri ve Varsayılan Ağ Geçidi]] | Yerel ve uzak hedef ayrımı, varsayılan ağ geçidinin (default gateway) rolü, router donanımı ve arayüzleri, yönlendirme tablosu, paket yönlendirme mekanizması (MAC değişir, IP sabit kalır) ve statik rota. |
| 11 | [[tp_kablosuz-aglar-ve-guvenlik\|Kablosuz Ağlar ve Güvenlik]] | Ortak iletim ortamı olarak radyo dalgaları (RF), 2.4 GHz ve 5 GHz frekans bantları, kanal planlama (1-6-11 kanalları), WLAN mimarisi (AP, istemci, SSID, BSSID), CSMA/CA, kablosuz tehditler ve WPA2/WPA3 güvenliği. |
| 12 | [[tp_temel-guvenlik-nat-ve-butunlesik-ag\|Temel Ağ Güvenliği, NAT ve Bütünleşik Ağ Uygulaması]] | Ağ güvenliğinin temelleri (CIA triad), parola ve şifreleme ayrımı, simetrik/asimetrik anahtar sezgisi, güvenli servisler (HTTPS/SSH), NAT/PAT mantığı ve dönem sonu bütünleşik ağ uygulaması. |
