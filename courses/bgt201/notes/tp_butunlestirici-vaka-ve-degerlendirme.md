---
title: "Bütünleştirici Vaka ve Değerlendirme"
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

## Bütünleştirici Vaka ve Değerlendirme

Bürokrasiden Yönetim Sistemine

::: {.notes}
Bugünün sorusu: Dönem boyunca hazırladığımız o kadar belge, matris ve risk kaydı gerçekten işe yarıyor mu, yoksa sadece bürokrasi mi ürettik?

Bugün bu soruyu cevaplıyoruz. Güvenlik bir ürün değil, izlenebilir ve dokümante edilebilir bir süreçtir. Dönem boyunca parça parça inşa ettiğimiz kurgusal kurum vakasını tek bir masaya yatırıyoruz. Amacımız yeni bir kural öğrenmek değil; parçaların birbirine nasıl bağlandığını ve gerçek bir BGYS döngüsünün nasıl tamamlandığını görmektir.
:::

---

## Vaka Bağlamı: Nereden Başladık?

- Kurgusal kurum ekosistemi
  - Öğrenci kayıtları
  - Personel belgeleri
  - Hizmet başvuruları
- **Kapsam Beyanı:** Güvenliğin çerçevesi

::: {.notes}
Dönem başında kurgusal bir kurumun iş süreçlerini sınırlarımız içine aldık. Kapsam beyanımızda neyi koruyacağımızı ve neyin dışarıda kalacağını netleştirdik.

Bu aşama çok kritikti çünkü tüm güvenlik çabasının çerçevesini çizdi. Unutulmamalıdır ki, sınırları net olmayan bir yapıyı koruyamazsınız.
:::

---

## BGYS Karar İzi (Traceability)

Güvenlik yönetiminde kararlar havada asılı kalmaz.

*Varlık Envanteri &rarr; Erişim Matrisi &rarr; Dokümantasyon &rarr; Risk Kaydı &rarr; Aksiyon Planı*

::: {.notes}
Gerçek bir güvenlik yönetiminde hiçbir belge veya karar diğerinden bağımsız değildir. Her bir unsur, bir önceki adıma dayanır ve bir sonrakini besler.

İzlenebilirlik (traceability), bu zincirin kopmamasıdır. Bu zincir koptuğunda (örneğin envanterde olmayan bir sistem için risk kaydı oluşturulduğunda veya erişim kuralları belirlenmemiş bir varlığa işlem yapıldığında) BGYS işlevini yitirir.
:::

---

## İzlenebilirlik Zinciri: Örnek

**Varlık A:** Başvuru Sistemi

1. **Envanter:** Kritik varlık olarak kayıt
2. **Erişim:** Yetkilerin sınırlandırılması
3. **Dokümantasyon:** Kuralların standartlaştırılması
4. **Gap / Risk:** Zafiyetlerin tespiti
5. **Aksiyon:** Düzeltici faaliyet planı

::: {.notes}
Aynı varlığın (örneğin öğrenci başvuru sistemi) farklı yönetim adımlarında nasıl bir dönüşüm geçirdiğini adım adım izleyelim.

Sistem önce envantere kaydedilir. Ardından matrisle kimlerin erişebileceği belirlenir ve bu kurallar politikalara yansıtılır. Mevcut durumla hedef arasındaki boşluklar risk olarak kaydedilir ve son aşamada riskleri yönetmek için aksiyon planı devreye girer.
:::

---

## Bütünleşik Kontrol Listesi

Artefaktların tamlığını ve tutarlılığını test edin:

- **Sahiplik:** Her kritik varlığın atanan bir sorumlusu var mı?
- **Erişim:** Kritik bir varlık herkesin erişimine açık mı?
- **Risk ve Aksiyon:** Kaydedilen her risk için düzeltici bir faaliyet var mı?
- **Kapsam:** Değerlendirilen varlıklar baştaki kapsam beyanına uygun mu?

::: {.notes}
Kendi hazırladığınız belgelerin birbiriyle tutarlı olup olmadığını test etmek için bu soruları kullanabilirsiniz.

Bu kontrol soruları, sistemin açık noktalarını tespit etmenizi ve düzeltme adımlarını tetiklemenizi sağlar. Yani PUKÖ döngüsündeki Check (Kontrol Et) ve Act (Önlem Al) aşamalarını işletir.
:::

---

## Dönem Kazanımlarının Değerlendirilmesi

- **CIA İhlal Senaryoları:** Gizlilik, bütünlük ve erişilebilirlik kaybının kurumsal maliyeti
- **Sistematik Yaklaşım:** Cihazdan ibaret olmayan, sürece dayalı güvenlik

::: {.notes}
Bu vaka çalışmasıyla CIA üçlüsünün ihlal senaryolarında kuruma maliyetini gerçekçi bir şekilde gördük.

En önemli çıkarımımız: Güvenlik, sadece teknik bir cihaz kurmak (firewall, antivirüs vb.) değildir. Yetkilendirme, prosedür ve risk yönetimini içeren sistematik bir yaklaşım gerektirir.

Özetle, dönem boyunca hazırladığınız her satır, kurumun güvenlik duruşunu kanıtlayan karar izinin ayrılmaz bir parçasıdır.
:::
