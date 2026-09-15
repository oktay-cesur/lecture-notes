---
title: "BLP 1005 Veritabanı Yönetim Sistemleri"
subtitle: "Ders Notları"
type: syllabus
description: BLP 1005 Veritabanı Yönetim Sistemleri dersi için veritabanı tasarımı, MySQL ve SQL konularını bir araya getiren ders notları ve uygulamalar.
tags:
  - output
sidebar: blp1005
---

## Dersin Amacı

Veritabanları, bir uygulamanın kullandığı veriyi yalnızca saklamak için değil; veriyi **tutarlı, sorgulanabilir, ilişkilendirilebilir ve güvenli biçimde yönetmek** için kullanılır. Bu ders boyunca gerçek bir veri probleminden başlayarak hangi bilgilerin saklanması gerektiğini, bu bilgilerin nasıl modellenebileceğini ve ortaya çıkan yapının MySQL üzerinde nasıl kurulup sorgulanacağını inceleyeceğiz.

Derse veritabanı, veritabanı yönetim sistemi ve ilişkisel modelin temel kavramlarıyla başlayacağız. Ardından metinsel gereksinimleri Varlık–İlişki (E-R) modeline dönüştürecek, anahtarları ve ilişkileri kuracak ve normalizasyonla veri tekrarının neden olduğu sorunları gidereceğiz. İkinci bölümde bu tasarımı MySQL üzerinde fiziksel bir veritabanına dönüştürerek DDL ve DML komutlarını, temel sorgulamayı, gruplamayı, çoklu tablo sorgularını, alt sorguları ve görünümleri kullanacağız. Dönemin sonunda tasarım, sorgulama ve temel güvenlik konularını tek bir veritabanı problemi üzerinde birlikte değerlendireceğiz.

Ders haftada **1 saat teori + 2 saat uygulama** biçimindedir. Uygulamalarda **MySQL Server** ve **MySQL Workbench** kullanılacaktır. Workbench, veritabanı yapısını ve SQL sonuçlarını gözlemlemek için kullandığımız istemci aracıdır; asıl odak veri modeli, SQL ve sonuçların doğrulanmasıdır.

## Notları Nasıl Takip Etmelisiniz?

1. **Önce problemi anlayın.** Bir tabloya veya SQL komutuna geçmeden önce hangi verinin neden tutulduğunu ve hangi soruya cevap vermesi gerektiğini belirleyin.
2. **Modeli sorgudan önce okuyun.** Bir sorgunun doğru olması, kullandığı tabloların ve ilişkilerin doğru kurulmasına bağlıdır. Tablo adlarını ezberlemek yerine verinin neden o yapıda tutulduğunu takip edin.
3. **SQL'i çalıştırmadan önce sonucu tahmin edin.** Hangi satırların seçileceğini, hangi kayıtların değişeceğini veya hangi kısıtın devreye gireceğini önceden düşünün.
4. **Sonucu doğrulayın.** Sorgu çalıştı diye doğru kabul etmeyin. Küçük ve bilinen bir veri kümesi üzerinde sonucun gereksinimi karşılayıp karşılamadığını kontrol edin.
5. **Hata mesajlarını kullanın.** Sözdizimi, veri tipi ve kısıt hataları yalnız düzeltilmesi gereken sorunlar değil, veritabanının hangi kuralı uyguladığını gösteren geri bildirimlerdir.
6. **Konu bağlantılarını takip edin.** Anahtarlar, normalizasyon, JOIN ve bütünlük kısıtları birbirinden bağımsız başlıklar değildir. Bir kavramın önceki modelleme kararlarıyla ilişkisini kurmaya çalışın.

::: {.callout-tip}
## Önerilen Çalışma Döngüsü

Problemi oku → gerekli veriyi ve iş kurallarını çıkar → modeli incele veya kur → SQL'i yazmadan önce sonucu tahmin et → sorguyu çalıştır → sonucu doğrula → hata veya sınır durumunu incele.

Veritabanı çalışmalarında doğru sözdizimi kadar, **neden bu tabloya, bu ilişkiye veya bu sorguya ihtiyaç duyulduğunu** açıklayabilmek önemlidir.
:::

::: {.callout-note}
## Temel Kaynaklar

- MySQL Reference Manual
- Ders kapsamında hazırlanan konu anlatımları ve MySQL uygulamaları
- W3Schools SQL / MySQL
- SQLBolt
- BTK Akademi — Uygulamalarla SQL
:::

## Haftalık Plan

Haftalık plan dersin resmî izlencesindeki 12 haftalık kapsamı temel alır. Konu notları ise kavramsal bütünlüğe göre hazırlanır; bir konu gerektiğinde birden fazla haftada yeniden kullanılabilir veya aynı hafta birden fazla konu notuyla işlenebilir.

| Hafta | Notlar | Açıklama |
|:---:|---|---|
| 1 | [[notes/tp_veritabani-temel-kavramlari-ve-mimari\|Veritabanı Temel Kavramları ve Mimari]] | Veri ve bilgi, dosya yaklaşımının sınırları, veritabanı–VTYS–istemci ayrımı, ilişkisel yaklaşım ve istemci–sunucu mimarisine giriş. |
| 2 | **Varlık–İlişki (E-R) Modeli** | Gereksinimlerden varlık, nitelik ve ilişki çıkarma; kardinalite ve katılım kurallarını model üzerinde gösterme. |
| 3 | **Normalizasyon** | Veri tekrarı, fonksiyonel bağımlılıklar, ekleme–güncelleme–silme anomalileri ve 1NF–2NF–3NF. |
| 4 | **MySQL Çalışma Ortamı** | MySQL Server ve Workbench ayrımı, bağlantı, şema ve tablo inceleme, SQL betiği çalıştırma ve hata mesajlarını okuma. |
| 5 | **DDL, Veri Tipleri ve Kısıtlar** | `CREATE DATABASE`, `CREATE TABLE`, temel MySQL veri tipleri, `NOT NULL`, `UNIQUE`, `DEFAULT` ve diğer temel kısıtlar. |
| 6 | **Anahtarlar ve İlişkiler** | Aday ve birincil anahtar, yabancı anahtar, referans bütünlüğü ve ilişkisel şemaya dönüşüm. |
| 7 | **Veri Ekleme ve Değiştirme** | `INSERT`, `UPDATE`, `DELETE`; hedef satırları kontrol etme ve veri değişikliklerini doğrulama. |
| 8 | **Tek Tablo Üzerinde Sorgulama** | `SELECT`, `WHERE`, karşılaştırma ve mantıksal koşullar, `LIKE`, `IN`, `BETWEEN`, `IS NULL`, `ORDER BY` ve `LIMIT`. |
| 9 | **Fonksiyonlar ve Gruplama** | `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`, `GROUP BY`, `HAVING` ve özet bilgi üretme. |
| 10 | **Çoklu Tablo Sorguları** | İlişkilerin sorguya dönüşmesi; `INNER JOIN`, `LEFT JOIN`, birden fazla tabloyu birleştirme ve yanlış JOIN koşullarını teşhis etme. |
| 11 | **Alt Sorgular ve Görünümler** | Tek değer ve çok satır döndüren alt sorgular, `IN` / `EXISTS` kullanımı ve `CREATE VIEW`. |
| 12 | **Temel Veritabanı Güvenliği ve Bütünleştirme** | Kimlik doğrulama ve yetkilendirme, en az ayrıcalık, SQL injection farkındalığı, veri minimizasyonu ve dönem boyunca kurulan yapının birlikte değerlendirilmesi. |

## Değerlendirme

- Ara sınav: **%30**
- Proje: **%30**
- Yarıyıl sonu sınavı: **%40**

Değerlendirmelerde yalnız SQL sözdizimi değil; veri modelini okuyabilme, doğru yapıyı seçebilme, sorgu sonucunu yorumlama, hatayı teşhis etme ve yapılan tercihi gerekçelendirme becerisi de önemlidir.
