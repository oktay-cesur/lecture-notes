---
title: "BLP 1005 Veritabanı Yönetim Sistemleri"
subtitle: "Ders Notları"
type: syllabus
description: BLP 1005 Veritabanı Yönetim Sistemleri dersi için resmî izlenceyi temel alan haftalık ders notu ve MySQL uygulama hattı.
tags:
  - output
sidebar: blp1005
---

## Dersin Amacı

Bu dersin amacı; öğrencilerin ilişkisel veritabanı kavramlarını ve tasarım ilkelerini kavramalarını, bir problem alanındaki veri gereksinimlerini modele dönüştürmelerini ve MySQL kullanarak veritabanı oluşturma, sorgulama ve yönetme becerisi kazanmalarını sağlamaktır.

Ders haftada **1 saat teori + 2 saat uygulama** biçimindedir. Uygulama ortamı **MySQL Server** ve **MySQL Workbench**'tir. Workbench, menü ve arayüz ezberi için değil; şema, veri, sorgu sonucu ve hata davranışını görünür kılmak için kullanılır.

## Öğrenme Çıktıları

Bu dersi başarıyla tamamlayan öğrenciler:

1. İlişkisel veritabanı sistemlerinin temel kavramlarını ve çalışma mimarisini açıklar.
2. Verilen bir problem senaryosuna uygun Varlık-İlişki (E-R) veri modelini tasarlar.
3. Normalizasyon kurallarını uygulayarak veri tekrarı ve tutarsızlıkları azaltır.
4. SQL Veri Tanımlama Dili (DDL) komutlarını kullanarak MySQL üzerinde tablolar oluşturur.
5. MySQL Workbench ortamında SQL Veri İşleme Dili (DML) komutlarıyla kayıt ekleme, silme ve güncelleme işlemleri gerçekleştirir.
6. Çoklu tabloları birleştiren ve veriyi gruplayan SQL sorgularını yazarak veri setlerini analiz eder.

## Dersin Çalışma Yaklaşımı

Ders notları mümkün olduğunca şu düşünsel akışı izler:

**gereksinim / problem → yetersiz yaklaşım → kavramsal ihtiyaç → model veya SQL kararı → uygulama → doğrulama → hata / sınır durumu**

SQL komutlarında yalnız sözdizimi değil, komutun hangi veri veya şema durumunu değiştirdiği ve sonucun nasıl doğrulanacağı önemlidir. Veri değiştiren işlemlerde hedef satırlar önce sorgulanır; hata iletileri gizlenmek yerine teşhis için kullanılır. Örnek veriler kurgu veridir ve çalışmalar yeniden çalıştırılabilir SQL betikleri olarak tutulur.

## Haftalık Plan

| Hafta | Konu Notu / Kapsam |
|:---:|---|
| 1 | [[tp_veritabani-temel-kavramlari-ve-mimari\|Veritabanı Temel Kavramları ve Mimari]] — veri ve bilgi, dosya yaklaşımının sınırları, veritabanı / VTYS / ilişkisel veritabanı ayrımı, tablo–satır–sütun kavramları ve istemci–sunucu mimarisine giriş. |
| 2 | **Varlık-İlişki (E-R) Modeli** — gereksinimlerden varlık, nitelik, ilişki, kardinalite ve katılım çıkarma. |
| 3 | **Normalizasyon (1NF, 2NF, 3NF)** — veri tekrarı, fonksiyonel bağımlılıklar ve ekleme / güncelleme / silme anomalileri üzerinden normalizasyon. |
| 4 | **MySQL Workbench Kurulumu ve Çalışma Ortamı** — MySQL Server / Workbench ayrımı, bağlantı, şema ve tablo inceleme, SQL betiği çalıştırma ve hata mesajlarını okuma. |
| 5 | **DDL: Tablo Oluşturma** — `CREATE DATABASE`, `CREATE TABLE`, temel MySQL veri tipleri ve kısıtlar. |
| 6 | **Anahtarlar ve İlişkiler / Ara Sınav Haftası** — birincil ve yabancı anahtarlar, referans bütünlüğü ve ilişkisel şemaya dönüşüm. |
| 7 | **DML: INSERT, UPDATE, DELETE** — kayıt ekleme, güvenli güncelleme ve silme; etkilenen satırların doğrulanması. |
| 8 | **Temel Veri Sorgulama** — `SELECT`, `WHERE`, temel filtreleme ve sıralama. |
| 9 | **SQL Fonksiyonları ve Gruplama** — toplama fonksiyonları, `GROUP BY`, `HAVING` ve özet bilgi üretme. |
| 10 | **Çoklu Tablo Sorguları (JOIN)** — model ilişkilerinin `INNER JOIN` ve `LEFT JOIN` sorgularına dönüştürülmesi. |
| 11 | **Alt Sorgular ve Görünümler** — alt sorgular, `IN` / `EXISTS` ayrımları ve `CREATE VIEW`. |
| 12 | **Veritabanı Güvenliği ve Proje Sunumları** — kimlik doğrulama / yetkilendirme, en az ayrıcalık, SQL injection farkındalığı, veri minimizasyonu ve proje bütünleştirmesi. |

## Değerlendirme

- Ara sınav: **%30**
- Proje: **%30**
- Yarıyıl sonu sınavı: **%40**

Değerlendirmede arayüz kullanımı değil; modelleme, şema kurma, SQL yazma, sorgu sonucunu yorumlama, hata teşhisi ve tasarım kararlarını gerekçelendirme becerileri ölçülür.

## Temel Kaynaklar

- BLP 1005 resmî ders izlencesi.
- MySQL Reference Manual.
- Ders kapsamında geliştirilen özgün problem senaryoları, laboratuvar betikleri ve doğrulama örnekleri.
- Ek çalışma için W3Schools SQL / MySQL, SQLBolt ve BTK Akademi SQL materyalleri.
