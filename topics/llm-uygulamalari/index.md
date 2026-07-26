---
title: "Yapay Zeka ve LLM Uygulamaları"
tags: [index, konu, yapay-zeka, llm]
sidebar: ai-llm
---

Bu alan büyük dil modelleriyle kurulan uygulamaları anlamak ve tasarlamak için bir giriş noktasıdır. Buradaki yazılar bir ders izlencesine bağlı değildir; kavramları, yazılım mimarilerini, teknik denemeleri ve uygulama tasarımı kararlarını konu merkezli olarak bir araya getirir.

Amaç, LLM'leri yalnızca metin üreten araçlar olarak değil; yazılım sistemleri içinde görev alan, akış yöneten, araç kullanan ve başka bileşenlerle birlikte çalışan modeller olarak incelemektir. Bu nedenle odak tek tek araçlardan çok şu sorular üzerindedir:

- Bir dil modeli uygulama içinde hangi rolleri üstlenebilir?
- Model, dış araçlar ve veri kaynaklarıyla nasıl ilişkilendirilir?
- Ajan yaklaşımı nerede anlamlı, nerede gereksizdir?
- LLM tabanlı bir sistem nasıl gözlemlenir, değerlendirilir ve sınırlandırılır?
- Bu sistemlerin eğitim, araştırma ve kurumsal kullanımdaki karşılığı nedir?

## LLM Uygulamaları

### LLM Orkestrasyonu

Bir dil modeli uygulaması, modele istek göndermekten ibaret değildir. Modelin ne zaman çağrılacağı, hangi araçlarla besleneceği, hangi veri kaynaklarına erişeceği ve bileşenlerin birbirine nasıl bağlanacağı birer tasarım kararıdır.

- [LLM Orkestrasyonu](art-llm-orkestrasyonu.md) — Model, araç, veri ve akış bileşenlerini birlikte ele alan genel mimari çerçeve

### Dil Modellerini Programlamak

Bir modeli metin kutusu yerine girdi alan ve çıktı üreten bir yazılım bileşeni olarak ele alabiliriz. Model çıktıları kod akışında yönlendirme kararlarına, dallanmalara veya sonraki işlemlerin girdilerine dönüşebilir.

- [Dil Modellerini Programlamak](art-akis-icinde-llm.md) — Model çağrılarını program akışına yerleştirme ve çıktıları denetlenebilir adımlara dönüştürme

## Genişleyecek Başlıklar

Bu konu alanı yeni yazılarla aşağıdaki doğrultularda genişleyecektir:

- **RAG ve bilgiye erişim:** Belgeleri, veritabanlarını ve güncel kaynakları model bağlamına güvenilir biçimde taşıma
- **Ajanlar ve araç çağırma:** Modelin sonraki adımı seçmesi, araç kullanması ve sonuçları yeni kararlara aktarması
- **Değerlendirme ve güvenilirlik:** Çıktı kalitesini, tutarlılığı ve hata türlerini ölçme; sistemi gözlemlenebilir ve sınırlı tutma
- **Kurumsal uygulamalar:** Gizlilik, maliyet, denetim ve kullanıcı güveni altında üretim sistemi tasarlama
- **Eğitim uygulamaları:** LLM'leri öğrenme sürecine yerleştirme ve sınırlılıklarını öğrenciye görünür kılma

## Araçlara Yaklaşım

LangChain, LangGraph ve MCP gibi araçlar bu alanda gerektiği yerde ele alınabilir; ancak amaç bir araç kataloğu oluşturmak değildir. Araçlar, genel LLM uygulama mimarisini ve tasarım kararlarını açıklamaya katkı sağladıkları ölçüde kullanılır.
