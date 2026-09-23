---
title: "Risk İşleme ve Olay Aksiyon Planı"
subtitle: "BGT 201 — Bilgi Güvenliği Yönetimi I"
type: presentation
author: "Öğr. Gör. Oktay Cesur"
date: today
execute:
  echo: false
---

::: {.callout-warning}
## Taslak Çalışma Notu
Bu doküman BGT 201 Bilgi Güvenliği Yönetimi I dersi için resmî izlence ve kaynak analizi temel alınarak hazırlanmış ilk çalışma taslağıdır. Haftalık pedagojik revizyonlarla olgunlaştırılmaya devam edecektir.
Ana İzlence: [[crs-bgt201|Ders İzlence Merkezi]]
:::

## Risk İşleme ve Olay Aksiyon Planı

---

## Risk İşleme (Risk Treatment)

Riski değerlendirdikten sonra (teşhis), yönetimin önündeki stratejik "tedavi" seçenekleri:

* **Riski Azaltmak (Mitigation)**
* **Riski Transfer Etmek (Transference)**
* **Riski Kabul Etmek (Acceptance)**
* **Riskten Kaçınmak (Avoidance)**

::: {.notes}
* Risk haritasında "Kırmızı", "Sarı" bölgeleri gördükten sonra eyleme geçmemiz gerekir.
* Azaltmak en yaygın olandır (kontrol eklemek).
* Transfer etmek riski başkasına vermektir (sigorta, bulut) ama hukuki sorumluluk sizde kalır.
* Kabul etmek, maliyet-fayda dengesinde kontrol kurmanın daha zararlı olduğu ve riskin iştah dahilinde kaldığı durumdur.
* Kaçınmak ise fişi çekmek, o işi yapmamaktır.
:::

---

## Artık Risk (Residual Risk)

* Güvenlikte sıfır risk bir yanılsamadır.
* **Artık Risk:** Seçilen kontrol uygulandıktan sonra geriye kalan risktir.
* **Onay Mekanizması:** Yönetim, artık riskin kabul edilebilir olup olmadığına karar vermeli ve onaylamalıdır.

::: {.notes}
* En pahalı güvenlik duvarını da alsanız her zaman bir artık risk kalır.
* Eğer yönetim artık riski tolerans seviyesinin üzerinde bulursa, süreç başa döner ve ek kontroller veya farklı bir işleme seçeneği aranır.
:::

---

## Aksiyon Planının Bileşenleri

Riski yönetmek için onaylı bir aksiyon planında bulunması gereken asgari unsurlar:

* **Ne Yapılacak?** (Kontrolün tanımı)
* **Sorumlu Kim?** (Tercihen rol bazlı)
* **Hangi Kaynaklarla?** (Bütçe, zaman, adam-saat)
* **Hedef Tarih (Termin) Ne?** (Tamamlanma zamanı)
* **Durum Nedir?** (Açık, Devam Ediyor, Tamamlandı)

::: {.notes}
* "Riski azaltacağız" bir dilektir, aksiyon planı ise taahhüttür.
* Eğer sorumlu, kaynak veya tarih yoksa o kontrol asla hayata geçmez.
:::

---

## İş Sürekliliği: Olumsuz Senaryolara Hazırlık

Kontrollerin başarısız olması veya felaket anlarında kritik süreçlerin devamı için temeller:

* **BIA (İş Etki Analizi):** Hangi süreç kritik, kesintinin maliyeti ne?
* **BCP (İş Sürekliliği Planı):** Kesinti anında iş nasıl devam edecek?
* **DRP (Felaket Kurtarma Planı):** Sistemler teknik olarak nasıl ayağa kalkacak?
* **RTO (Kurtarma Süresi Hedefi):** Sistem ne kadar sürede ayağa kalkmalı?
* **RPO (Kurtarma Noktası Hedefi):** En fazla ne kadarlık veri kaybı tolere edilebilir?

::: {.notes}
* Bu kavramların her biri büyük birer uzmanlık alanıdır. Burada amacımız olumsuz senaryoda "ne zaman, nereye döneceğiz" sorusunun rastgele değil, planlı yanıtlandığını bilmektir.
* RPO veri ve zaman odaklıdır (örn. son 24 saatin yedeğine dönmek), RTO da hız odaklıdır (örn. sistemi 4 saat içinde açmak).
:::

---

## Olay Yönetimi Zinciri (Incident Response)

Meydana gelen bir güvenlik olayında kaosun önüne geçecek standart adımlar:

1. **Hazırlık**
2. **Tanımlama**
3. **Bildirim**
4. **Yanıt (Müdahale)**
5. **Kurtarma**
6. **Takip**
7. **Dokümantasyon**

::: {.notes}
* Tanımlama, anormalliğe "bu bir olaydır" teşhisini koymaktır.
* Sürecin en can alıcı noktalarından biri bildirim ve iletişimdir. Yanlış iletişim büyük itibar kayıplarına yol açabilir.
* Dokümantasyon hem hukuki yükümlülükler (delil bütünlüğü) hem de öğrenilmiş dersler çıkarmak için kritiktir.
:::

---

## Kurum Vakası: Yetki Yönetimi Olayı

* **Bulgu:** Ayrılan personelin yetkileri açık kalıyor.
* **Risk İşleme:** İK yazılımı ile yetki sistemi entegrasyonu (Azaltma/Mitigation).
* **Olay (Incident):** Entegrasyon öncesi açık kalan hesaptan veri indirilmesi.
* **Müdahale:** Hesabın kilitlenmesi (Yanıt), ihlal analizinin ve yasal danışmanlığın yürütülmesi (Takip/Dokümantasyon).

::: {.notes}
* Bu vaka, bulgudan aksiyona ve aksiyon tamamlanmadan gerçekleşen bir riskin olaya dönüşme senaryosunu birleştiriyor.
* Önce bir zafiyet bulduk, azaltma kararı verip termin koyduk. Ancak o termin gelmeden risk gerçeğe dönüştü.
* Bu noktada olay yönetimi devreye girip süreci izole etti ve raporladı.
:::
