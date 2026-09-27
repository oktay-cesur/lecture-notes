---
title: "BGYS Stratejisi ve Politika Dokümantasyonu"
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

## BGYS Stratejisi ve Politika Dokümantasyonu

::: {.notes}
Önceki aşamalarda neleri koruyacağımızı (varlık envanteri) ve kimlerin erişeceğini (roller) konuştuk. Ancak alınan bu kararlar, kararı alan kişi gidince nasıl yaşayacak? Dış denetçiye güvenliğimizi nasıl kanıtlayacağız? İşte bu noktada teknik ayarların kağıt üzerindeki karşılığı olan politika ve strateji dokümantasyonuna geçiyoruz. Bilgi güvenliği sadece teknik bir ayar değil, yönetimsel bir iradedir.
:::

---

## Dokümantasyonun Yönetimsel İşlevi

*   **Sürdürülebilirlik:** Kişilerden bağımsız kurumsal hafıza
*   **Hesap Verebilirlik:** Kurallara uyum ve sorumluluk
*   **Denetim Kanıtı (Audit Trail):** Sistemin doğru çalıştığının ispatı

::: {.notes}
Bir güvenlik kararı ancak yazıya döküldüğünde kurumun resmi iradesine dönüşür. Amacımız sadece kuralları yazmak değil, bu kuralların uygulanmamasında kimin sorumlu olduğunu belirlemek ve dışarıdan bakan bir göze "biz işimizi doğru yapıyoruz" diyebilmektir.
:::

---

## Güvenlik Belgesinin Anatomisi

*   **Sahiplik İlkesi**
*   **Onay Zinciri**
*   **İzlenebilirlik ve Değişiklik Kontrolü** (Change-Control)

::: {.notes}
Sahipsiz bir politika asla uygulanmaz. Her belgenin kurum içinde sorumlu bir sahibi olmalıdır. Belgenin taslaktan çıkıp yürürlüğe girmesi için kimlerin onayından geçeceği net olmalıdır. Kurallar geliştikçe belgeler güncellenir; bu yüzden versiyon kontrolü ve revizyon logları ile izlenebilirlik sağlanmalıdır.
:::

---

## Kurumsal Belge Piramidi

*   **Politika (Policy):** Neden korunmalı? (Anayasa, vizyon)
*   **Standart (Standard):** Hangi zorunlu ölçütlerle?
*   **Temel Çizgi (Baseline):** Asgari konfigürasyon nedir?
*   **Prosedür (Procedure):** Adım adım nasıl yapılmalı?
*   **Kılavuz (Guideline):** Esnek öneriler, en iyi uygulamalar.
*   **Kayıt (Record):** Kuralların uygulandığına dair kanıt (log, form).

::: {.notes}
Bu piramit, üst yönetimin genel niyetinden (strateji) en alt seviyedeki ağ yöneticisinin uygulayacağı teknik ayara kadar süzülür. Yukarıdan aşağıya indikçe belgeler daha spesifik, daha teknik hale gelir ve daha sık güncellenmeye başlar. Kılavuz dışındakiler genellikle zorlayıcıdır, kılavuz ise esneklik sunar.
:::

---

## Dikey İzleme (Vertical Traceability)

**Vaka: Kurum Ağına Uzaktan Erişim**

*   **Politika:** Hassas verilere uzaktan erişim güvenli/şifreli olmalıdır.
*   **Standart:** Uzak bağlantılarda MFA (Çok Faktörlü Doğrulama) zorunludur.
*   **Prosedür:** "Personel MFA kurulumu için: 1. Uygulamayı indir, 2. Karekodu okut..."
*   **Kayıt:** "Kullanıcı A, 12 Kasım saat 10:15'te VPN ile bağlandı."

::: {.notes}
Sürecin belgelerde nasıl yankılandığını bu örnekte çok net görüyoruz. En tepedeki stratejik, soyut bir kuralın (politika), en altta somut, inkar edilemez bir teknik kanıta (kayıt/log) nasıl dönüşüp bozulmadan indiğini inceleyin. Bilgi Güvenliği Yönetim Sistemi'nin (BGYS) bütün esprisi ve ruhu işte bu hiyerarşik tutarlılıkta yatar.
:::
