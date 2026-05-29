---
title: "LLM Teori ve Uygulamaları"
subtitle: "Genel konu alanı"
type: syllabus
description: Genel dil modelleri, ajanlar ve LLM tabanlı uygulamalar üzerine ders notları, konu yazıları ve uygulama notları.
tags:
  - output
---

# LLM Teori ve Uygulamaları

Bu sayfa genel dil modelleri ve onlarla kurulan uygulamalar için ana giriş noktasıdır. Başlangıçta bir eğitim rotası gibi düşünülse de, burada yer alan içerikler yalnızca ders akışına bağlı değildir; ders notları, konu yazıları, teknik denemeler ve kavramsal çerçeveler birlikte tutulur.

Amaç, LLM'leri yalnızca metin üreten araçlar olarak değil, yazılım sistemleri içinde görev alan, akış yöneten, araç kullanan ve başka bileşenlerle birlikte çalışan modeller olarak ele almaktır. Bu nedenle sayfanın odağı tek tek araçlardan çok şu sorular üzerindedir:

- Bir dil modeli bir uygulama içinde hangi rolleri üstlenebilir?
- Model, dış araçlar ve veri kaynaklarıyla nasıl ilişkilendirilir?
- Ajan fikri nerede anlamlıdır, nerede gereksiz karmaşa üretir?
- LLM tabanlı bir sistem nasıl gözlemlenir, değerlendirilir ve sınırlandırılır?
- Eğitim, araştırma ve kurumsal kullanımda bu sistemlerin pratik karşılığı nedir?

## LLM Orkestrasyonu

Bir dil modeli uygulaması yazmak, modele istek göndermekten ibaret değildir. Modelin ne zaman çağrılacağı, hangi araçlarla besleneceği, hangi veri kaynaklarına erişeceği ve bu parçaların birbirine nasıl bağlanacağı tasarım kararlarıdır. LLM orkestrasyonu bu kararların bütününü kapsar.

- [[art-llm-orkestrasyonu|LLM Orkestrasyonu]]
- [[art-akis-icinde-llm|Akış İçinde LLM]]

## Dil Modellerini Programlamak

Modeli bir metin kutusu olarak değil, bir fonksiyon olarak ele almak mümkündür: belirli bir girdi alır, belirli bir çıktı üretir. Bu çerçevede model çağrıları kod akışına dahil edilir; çıktılar yönlendirme kararlarına, dallanmaya veya başka adımlara dönüşür.

- [[../../topics/llm-uygulamalari/art-akis-icinde-llm|Dil Modellerini Programlamak]]

## RAG ve Bilgiye Erişim

Modelin bilgisi eğitim verisiyle sınırlıdır. RAG (retrieval-augmented generation), modeli dış bilgi kaynaklarıyla — belgeler, veritabanları, güncel içerikler — ilişkilendirerek bu sınırı aşmanın temel yoludur. Hangi bilginin ne zaman çekileceği ve bağlama nasıl ekleneceği bu başlığın merkezindedir.

*(hazırlanıyor)*

## Ajanlar ve Tool Calling

Modelin bir sonraki adımı kendisinin belirlemesi, araç çağırması ve bu sonuçları bir sonraki adıma taşıması ajan mimarisinin özüdür. Tool calling mekanizması, modeli pasif bir metin üreticisinden aktif bir karar ve eylem bileşenine dönüştürür.

*(hazırlanıyor)*

## Değerlendirme ve Güvenilirlik

LLM çıktılarını değerlendirmek klasik yazılım testinden farklıdır. Doğru/yanlış ikilemi yerine kalite, tutarlılık ve hata türleri üzerinden düşünmek gerekir. Gözlemlenebilirlik ve sınır koyma mekanizmaları da bu başlık altında ele alınır.

*(hazırlanıyor)*

## Kurumsal ve Eğitim Uygulamaları

LLM sistemlerinin üretim ortamlarına taşınması farklı kısıtlar getirir: gizlilik, maliyet, denetim, kullanıcı güveni. Eğitim bağlamında ise bu sistemlerin nasıl tasarlandığı, sınırlılıklarının nasıl gösterileceği ve öğrenme sürecine nasıl entegre edileceği ayrı bir tartışma gerektirir.

*(hazırlanıyor)*

---

LangChain, LangGraph, MCP gibi araçlar burada yer alabilir; fakat bu sayfanın ana amacı araç katalogu oluşturmak değildir. Araçlar, genel LLM uygulama mimarisini anlatmak için gerektiği yerde ele alınır.
