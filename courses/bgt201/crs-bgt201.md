---
title: "BGT 201 Bilgi Güvenliği Yönetimi I"
subtitle: "Ders Notları"
type: syllabus
description: BGT 201 Bilgi Güvenliği Yönetimi I dersi için resmî izlenceyi temel alan haftalık ders notu ve uygulama dağılımı.
tags:
  - output
sidebar: bgt201
---

## Dersin Amacı

Bu dersin amacı, veri ve bilgi güvenliği yönetimindeki temel yöntemleri; regülasyon, standart ve teknik tedbirlerle ilişkilendirerek öğretmektir.

Bilgi güvenliği yönetiminde kullanılan başlıca standart, çerçeve ve rehberler tanıtıldıktan sonra ISO 27001/BGYS yaklaşımı temelinde varlıkların sınıflandırılması ve envanter oluşturma, gap analizi, risk analizi ve risk işleme, erişim yetkileri, izleme-denetim, politika ve talimat dokümantasyonu ile olumsuz senaryolara yönelik aksiyon planları uygulamalı olarak ele alınır. KVKK, GDPR, COBIT, ITIL ve Bilgi ve İletişim Güvenliği Rehberi ilgili başlıklarda ISO 27001 süreciyle ilişkilendirilir.

Örnekler farklı kurum ve birimlerden seçilir; her konu kendi içinde tutarlı bir örnekle ilerler ve önceki haftanın kavramlarına dayanır.

## Öğrenme Çıktıları

Bu dersi başarıyla tamamlayan öğrenciler:

1. **Ö01** — Bilgi güvenliği yönetim kavramlarını BGYS ve ISO 27001 yaklaşımıyla açıklar.
2. **Ö02** — Bilgi güvenliği yönetimi strateji ve politikalarını öğrenir.
3. **Ö03** — Risk analizi, gap analizi ve risk işleme yöntemlerini öğrenir ve temel tedbirlerle ilişkilendirir.
4. **Ö04** — Bilgi ve verileri güvenlik bazlı sınıflandırır varlık envanteri ve ilgili dokümantasyonu hazırlayabilir.
5. **Ö05** — Veriye erişim izinlerini, kullanıcı sınıflandırmasını ve erişim denetimi tedbirlerini uygulamalı örneklerle açıklar.

## Notları Nasıl Takip Etmelisiniz?

1. **Önce haftalık plana bakın.** İlgili haftanın konu notunu açın. Notlar hem ders anlatımı slaytı hem de kendi kendine çalışma dokümanı olarak iki yönlü tasarlanmıştır.
2. **Kavramları kurum sorusu üzerinden okuyun.** "Kurum hangi bilgiyle hangi işi yürütüyor?", "Bu kararın sahibi kim, uygulandığını ne gösterecek?" gibi yönetim sorularının gerekçelerini takip edin.
3. **Her haftanın örneğini kendi bağlamında okuyun.** Örnekler farklı kurum ve birimlerden gelir; önceki haftalardan taşınan şey vakanın kendisi değil, kavram ve yöntemdir (kapsam, envanter, kayıt, ölçüt).
4. **Mekanizmayı ezberlemeyin, kurun.** "Neden bu bir yönetim kararıdır?", "Kanıt olarak ne gösterilecek?", "Kim doğrulayacak?" sorularını her kontrol, kayıt veya belge için tekrar sorun.
5. **Kesin hukuki/normatif iddiaya dikkat edin.** KVKK, GDPR, ISO 27001/27002, COBİT ve ITIL bu notlarda kavramsal düzeyde ele alınır; güncel madde, ceza, süre veya sertifikasyon koşulu için her zaman güncel yetkili kaynağa başvurun.

::: {.callout-tip}
## Önerilen Çalışma Döngüsü

Konu anlatımını ve sunumu incele → kurum vakasındaki karar sorusunu yanıtla → istenen artefaktı (envanter, matris, gap/risk kaydı, aksiyon planı) kurgusal kurum için doldur → bir önceki haftanın kararıyla tutarlılığını kontrol et → sonraki haftaya taşınacak açık noktayı not et.
:::

::: {.callout-note}
## Temel Kaynaklar

- Faruk Çubukçu, *Bilgi Güvenliği Yönetim Sistemleri*, 2013.
- ISO 27001, ISO 27002, COBİT, ITIL, KVKK ve GDPR dokümanları.
- [Siber Güvenlik Başkanlığı, Bilgi ve İletişim Güvenliği Rehberi, v1.1 (01.03.2026)](https://cdn.siberguvenlik.gov.tr/dokuman/26/05/260515153932_Bilgi%20Gu%CC%88venlig%CC%86i%20Rehberi.pdf).
- Ek okuma: *Fundamentals of Information Systems Security* (denetim ve izleme konuları).
- Ders notları ve ders içi uygulamalar (bulut sistemi üzerinden paylaşılır).
:::

## Haftalık Plan

Dersin haftalık akışı resmî izlencedeki 14 haftalık planın konularını kapsar. Gizlilik, bütünlük ve erişilebilirlik 2. haftada; BGYS tanımı, referansların rolleri ve genel belgeleme 3. haftada; bağlam, kapsam, roller ve PUKÖ uygulaması 4. haftada; varlık envanteri ve sınıflandırma 5. haftada; güvenlik stratejisi, hedefler, sorumluluklar ve BGYS belge mimarisi 6. haftada yer alır. 7. hafta ara sınavdır.

| Hafta | Konu Notu / Sunum                                                                                                         | Açıklama ve Kapsam                                                                                                                                                                                                                                                                                                  |
| :---: | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   1   | [[tp_guvenlik-temelleri\|Bilgi Güvenliğine Giriş: Bilgiyi Korumak]]                                                       | TDK'den bilgi kavramı; veri, bilgi ve edinilmiş bilgi ayrımı; veri ile bilginin ortak koruma kapsamı; Tanpınar arşivi ve Viking 1'in Mars fotoğrafı üzerinden fiziksel kayıt, korunma ve iletişim.                                                                                                                  |
|   2   | [[tp_guvenlik-ilkeleri-ve-cia\|Bilgi Türleri ve Güvenliğin Üç İlkesi]]                                                    | Bilgi türü, ortam ve görünürlük ayrımı; bilginin sahibi, kullananı ve yöneteni; gizlilik, bütünlük ve erişilebilirlik; Tanpınar ve Mars örneklerinin ilkelerle yeniden incelenmesi.                                                                                                                                 |
|   3   | [[tp_bgys-ve-yonetim-dongusu\|BGYS ve Belgeleme]]                                                                         | Yönetim ihtiyacından tam BGYS tanımına; ISO/IEC 27001, 27002, COBIT ve ITIL’in işlevleri; belge, kayıt ve gerçeğe uygun beyan; imza, hesap verebilirlik ve çalışanın kendi işini gösterebilmesi.                                                                                                                    |
|   4   | [[tp_standartlar-cerceveler-ve-uyum\|BGYS: Kapsam, Roller ve PUKÖ]]                                                       | Kurum bağlamı, ilgili taraflar, kapsam ve bağımlılıklar; karar, uygulama ve değerlendirme rolleri; PUKÖ’nün dört aşaması; bir erişim kararının kayıtlarla sınanması ve yedekten geri yükleme üzerine bağımsız uygulama; ISO/IEC 27001 ile bağ.                                                                      |
|   5   | [[tp_varlik-envanteri-ve-siniflandirma\|Varlık Envanteri ve Sınıflandırma]]                                               | Varlık ve envanter nedir, neden tutulur; çeşitli varlık örnekleri (donanım, bilgi, yazılım, hizmet, insan ve iş bilgisi); küçük bir envanteri alan alan kurma; sahip, teknik sorumlu ve kullanıcı; bağımlılık; etki düzeyi ve sınıflandırma; değişiklikte kaydı güncelleme ve ISO/IEC 27001 BGYS içinde kısa örnek. |
|   6   | [Strateji, hedefler ve sorumluluklar](notes/tp_h06-1-strateji-hedef-ve-sorumluluk.md) <br> [BGYS belge mimarisi](notes/tp_h06-2-bgys-belge-mimarisi.md) <br> [Uygulama: güvenlik hedefleri](notes/uyg_h06-1-guvenlik-hedefleri.md) <br> [Uygulama: belge ve kanıt](notes/uyg_h06-2-hedef-belge-kanit.md) | Güvenlik stratejisi; hedef, faaliyet ve ölçüt ayrımı; sorumluluk ve kaynak planlama; politika, prosedür, talimat, form ve kayıt ilişkisi; hedef–belge–kanıt uygulamaları. |
|   7   | Ara Sınav                                                                                                                 | Resmî ara sınav; 1–6. hafta resmî kapsamı (Ö01, Ö02, Ö04). Yeni konu veya vaka genişletmesi yoktur.                                                                                                                                                                                                                 |
| 8 | [Politika, Prosedür, Talimat, Form ve Kayıt: Belge Metnini Okumak](notes/tp_h08-1-politika-prosedur-talimat.md)<br>[Belge Yönetimi ve Sürüm Tutarlılığı](notes/tp_h08-2-belge-yonetimi-ve-surum.md)<br>[Uygulama: Belge Tutarlılık İncelemesi](notes/uyg_h08-1-belge-tutarlilik-incelemesi.md)<br>[Uygulama: Belge Düzeltme, Revizyon ve Dağıtım](notes/uyg_h08-2-belge-revizyonu-ve-dagitim.md) | Politika, prosedür, talimat, form ve kayıt; belge sürümü, tutarlılık, revizyon ve dağıtım. |
| 9 | [Mevcut Durum, Hedefler ve Riskin Bileşenleri](notes/tp_h09-1-mevcut-hedef-ve-risk.md)<br>[Nitel Risk Değerlendirmesi, Matris ve Kabul Ölçütleri](notes/tp_h09-2-nitel-degerlendirme.md)<br>[Uygulama: Fark Kayıtları](notes/uyg_h09-1-fark-kayitlari.md)<br>[Uygulama: Risk Kayıtları](notes/uyg_h09-2-risk-kayitlari.md) | Mevcut–hedef farkı, tehdit, zafiyet ve risk; nitel matris, kabul ölçütü ve kayıtlar. |
| 10 | [Risk İşleme Seçenekleri ve Aksiyon Planı](notes/tp_h10-1-isleme-ve-aksiyon.md)<br>[Olay Yönetimi ve Hizmetin Sürmesi: Hazırlık, Müdahale ve Öğrenme](notes/tp_h10-2-olay-yonetimi.md)<br>[Uygulama: Risk İşleme ve Aksiyon Planı](notes/uyg_h10-1-isleme-plani.md)<br>[Uygulama: Gerçekleşmiş Yetki Olayı ve Olay Aksiyonu](notes/uyg_h10-2-olay-aksiyonu.md) | Risk işleme seçenekleri ve aksiyon planı; olay yönetimi ve gerçekleşmiş yetki olayına yanıt. |
| 11 | [Kimlik saptama, doğrulama ve yetkilendirme](notes/tp_h11-1-kimlik-ve-yetki.md)<br>[Roller, Erişim Modelleri ve Yetki Yaşam Döngüsü](notes/tp_h11-2-rol-ve-model.md)<br>[Uygulama: rol–varlık–izin matrisi ve sorumluluk zinciri](notes/uyg_h11-1-rol-izin-matrisi.md)<br>[Uygulama: erişim talepleri ve görev ayrılığı kararı](notes/uyg_h11-2-erisim-talepleri.md) | Kimlik saptama, doğrulama, yetkilendirme; roller, erişim modelleri ve görev ayrılığı. |
| 12 | [Parola politikası ve yönetsel kontroller](notes/tp_h12-1-parola-politikasi.md)<br>[Kayıt ve izleme: İki ayrı güvenlik işlevi](notes/tp_h12-2-kayit-ve-izleme.md)<br>[Uygulama: Personel dosyası erişim kayıtları analizi](notes/uyg_h12-1-erisim-kaydi.md)<br>[Uygulama: Erişim kayıtlarının gözden geçirilmesi ve denetim kanıtı](notes/uyg_h12-2-gozden-gecirme.md) | Parola yaşam döngüsü ve yönetsel kontroller; erişim kayıtları, izleme ve denetim kanıtı. |
|   13  | [[tp_risk-isleme-ve-olay-aksiyon-plani\|Risk İşleme ve Olay Aksiyon Planı]]                                               | İşleme seçenekleri (azaltma, transfer, kabul, kaçınma), artık risk, sorumlu/kaynak/tarih; olay–kurtarma bağlamı; yüksek öncelikli risk için aksiyon planı ve olumsuz senaryo yanıtı.                                                                                                                                |
|   14  | [[tp_butunlestirici-vaka-ve-degerlendirme\|Bütünleştirici Vaka ve Değerlendirme]]                                         | Kapsamdan aksiyona yönetim döngüsünün ve Ö01–Ö05 ilişkisinin geri çağrılması; vaka dosyasındaki izlenebilirliğin (hangi kararın hangi kayda/kanıta dayandığının) bütünleşik kontrolü.                                                                                                                               |
