---
title: LLM - Pratik Mimari
subtitle: BİM444 — Hafta 12 · Part 4
type: presentation
author: Öğr. Gör. Oktay Cesur
date: 2026-05-04
execute:
  echo: false
---

## LLM Pratik Mimarisi

**Geçen bölümlerde:**

- Part 1: Dil teknolojilerinin tarihsel gelişimi
- Part 2: Transformer, pretraining, modern LLM
- Part 3: LLM kullanım rehberi — prompt, doğrulama, etik

**Bu bölümde:**

> LLM tabanlı sistemler nasıl kurulur?

::: {.notes}
Önceki bölümler LLM'lerin nasıl ortaya çıktığını ve bireysel kullanımda nasıl etkili olunacağını anlattı. Bu bölüm farklı bir perspektif sunuyor: bir uygulamayı, servisi veya ajanı LLM üzerine inşa etmek.

Kapsam dışı: Transformer matematiği, model pretraining, GPU eğitimi, RLHF tekniği, model ailesi kronolojisi, genel YZ tarihi, chatbot ürün karşılaştırması, politika tartışması.

Ana iddia şudur: Prompt engineering bu hattın yalnızca bir halkasıdır. Güvenilir bir LLM sistemi için tüm halkaların birlikte tasarlanması gerekir.
:::



---

## 1 · LLM API Kullanım Modeli

**İstek yapısı:** Model + Mesajlar + Parametreler → `/chat/completions`

| Parametre | Etkisi | Tipik aralık |
|---|---|---|
| `temperature` | Çıktı rastgeleliği | 0 (deterministik) – 2 |
| `max_tokens` | Maks. çıktı uzunluğu | Görev bağımlı |
| `top_p` | Nucleus sampling eşiği | 0.9–1.0 |
| `stop` | Üretimi kesen dizi | Görev bağımlı |
| `stream` | Token akışı mı, tam yanıt mı | Boolean |

::: {.notes}
LLM API'leri genellikle `/chat/completions` formatında çalışır. Mesaj listesi roller içerir: system (kalıcı bağlam ve kısıtlar), user (kullanıcı girdisi), assistant (önceki model yanıtları). Yanıt: içerik + token sayımı + bitiş nedeni.

Temperature 0'da model her seferinde aynı yüksek olasılıklı çıktıyı üretir. Sınıflandırma ve veri çıkarımı için 0–0.3; yaratıcı görevler için 0.7–1 tercih edilir.
:::

---

## 1 · API — Akış ve Örnek

```text
Uygulama kodu
    ↓
HTTP POST /chat/completions
    {model, messages, temperature, max_tokens}
    ↓
LLM API (OpenAI / Anthropic / vb.) [kontrol edilecek]
    ↓
Response: {choices[0].message.content, usage}
```

```python
response = client.chat.completions.create(
    model="gpt-4o",              # [kontrol edilecek]
    messages=[
        {"role": "system", "content": "Sen bir özetleme asistanısın."},
        {"role": "user",   "content": f"Şunu özetle: {text}"}
    ],
    temperature=0.3,
    max_tokens=500
)
print(response.choices[0].message.content)
```

::: {.notes}
Üretim sistemlerinde bu katmana mutlaka hata yönetimi eklenmeli: rate limit için exponential backoff + retry, context aşımı için token kırpma, API key asla kod içine gömülmemeli, maliyet takibi için token sayımı loglanmalı.

Çok sayıda modeli aynı anda kullanacaksanız sağlayıcı-bağımsız bir abstraction katmanı (LiteLLM vb.) düşünün [kontrol edilecek].
:::

---

## 1 · API — Hata Kalıpları

| Hata | Düzeltme |
|---|---|
| `rate_limit_error` — istek çok hızlı | Exponential backoff + retry logic ekle |
| `context_length_exceeded` | Token bütçesi yönetimi (bkz. Bölüm 3) |
| Temperature = 0 ama farklı yanıtlar | `seed` parametresi ekle [kontrol edilecek] |
| Streaming olmadan uzun çıktı bekleme | UX için stream aç, server-sent events kullan |
| API key koda yazılmış | Environment variable / secret manager kullan |


---

## 2 · Prompt Engineering

**Prompt = bağlam + görev tanımı + format kısıtı**

| Teknik | Kullanım |
|---|---|
| Zero-shot | Doğrudan görev; büyük modeller için |
| Few-shot | 2–5 örnek; küçük/özelleşmiş modeller |
| Chain of Thought (CoT) | "Adım adım düşün"; akıl yürütme görevleri |
| System / user ayrımı | Rol + kısıtlar system'de; görev user'da |
| Output format belirtme | "JSON formatında yanıt ver" veya schema |

::: {.notes}
Prompt, modele verilen bağlam, görev tanımı ve format kısıtlarının toplamıdır. Prompt engineering bu girdiyi optimize etmektir; sihirli kelimeler değil, açık görev tanımı ve bağlam yönetimidir. Modelin kapasitesini artırmaz — varolan kapasiteyi aktive eder.

System/user ayrımı mimari bir karardır: rol ve kalıcı kısıtlar system prompt'ta yaşar; değişken görev user prompt'ta. Böylece farklı kullanıcı istekleri için system prompt sabit kalır.
:::

---

## 2 · Prompt — Mimari ve Örnek

```text
System prompt: [Rol + kısıtlar + format]
    +
User prompt:   [Görev + bağlam + örnek (few-shot)]
    +
Parametre:     temperature, max_tokens
    ↓
Model
    ↓
Çıktı (doğrulanmamış)
    ↓
Validation / parse
```

```text
System: Sen bir veri çıkarım asistanısın.
        Yalnızca verilen metne dayan.
        Bilgi yoksa "bulunamadı" yaz. Türkçe yanıt ver.

User:   Metinden müşteri adını, şikayeti ve tarihi çıkar.
        Metin: "Ahmet Bey 12 Mart'ta bize ulaşarak
        ürünün hasarlı geldiğini bildirdi."
```

::: {.notes}
Prompt sürümlenmelidir. Production sisteminde her prompt değişikliği bir regression riski taşır. Prompt sürümleme + eval seti olmadan sistematik iyileştirme yapılamaz.

Chain of Thought küçük modellerde dramatik iyileşme sağlayabilir; büyük modellerde fark daha az belirgindir. CoT yalnızca akıl yürütme gerektiren görevler için; basit görevlerde fazla gelir ve çıktıyı yavaşlatır.
:::

---

## 2 · Prompt — Hata Kalıpları

| Hata | Düzeltme |
|---|---|
| System prompt'ta çok fazla kural | En kritik 3–5 kısıtı tut; geri kalanı structured output ile kontrol et |
| Few-shot örnekleri dengesiz | Sınıf başına eşit sayıda örnek; edge case ekle |
| "Şunu yapma" talimatı | Pozitif yönlendirme: "Şunu yap" |
| Prompt değişince regresyon | Prompt sürümleme + eval seti tut |
| CoT her görevde açık | CoT yalnızca reasoning görevleri için; basit görevlerde yavaşlatır |

---

## 3 · Token ve Context Yönetimi

**Token ≠ kelime — Türkçe eklemeli yapısı daha fazla token tüketir**

```text
Context penceresi = input tokens + output tokens

Input  = system prompt + geçmiş + belgeler + user mesajı
Output = max_tokens parametresi

Kalan kapasite = context limit − input − max_tokens
```

**Geçmiş yönetimi stratejileri**

| Strateji | Açıklama |
|---|---|
| Sliding window | Son N token'ı tut; basit ama bağlam kaybi |
| Özetleme | Geçmişi sıkıştır, bağlamı koru; maliyetli |

::: {.notes}
Token, modelin işlediği minimal birimdir. Context penceresi bir çağrıda modelin görebildiği toplam token sayısıdır. Bu pencere aşıldığında API hata döndürür; önceden yönetilmezse sistem güvenilmez hâle gelir.

Maliyet token başına hesaplandığından bütçe yönetimi aynı zamanda maliyet kontrolüdür. Input genellikle output'tan daha ucuzdur [kontrol edilecek].
:::

---

## 3 · Token — Mimari ve Örnek

```text
Mesaj geçmişi (tümü)
    ↓
Token sayacı  (tiktoken / sağlayıcı API'si) [kontrol edilecek]
    ↓
Bütçe kararı:
    ├── Geçmiş kırpma  (sliding window / summarization)
    ├── Belge parçalama (chunking)
    └── Çıktı token sınırı
    ↓
LLM çağrısı
```

```python
import tiktoken

enc    = tiktoken.encoding_for_model("gpt-4o")  # [kontrol edilecek]
tokens = enc.encode(prompt)

if len(tokens) > BUDGET:
    # geçmişi kırp veya belgeleri filtrele
    ...
```

::: {.notes}
RAG en büyük context tüketicisidir. Retrieved chunk'lar direkt olarak bütçeyi etkiler. Bu yüzden token yönetimi RAG'dan önce kurulmalı; chunk sayısı ve boyutu bütçeye göre belirlenmeli.

Tek seferlik kısa prompt sistemlerde detaylı token yönetimi overhead yaratır; basit max_tokens ayarı yeterlidir.
:::

---

## 3 · Token — Hata Kalıpları

| Hata | Düzeltme |
|---|---|
| Tüm konuşma geçmişini her turda göndermek | Sliding window veya geçmiş özetleme uygula |
| Context dolunca hatayı görmezden gelmek | Token sayacı ekle; sınıra yaklaşınca kırp |
| Token ≈ kelime varsaymak | Gerçek token sayısını tiktoken ile say |
| Çıktı token sınırını çok küçük koymak | Görev için gerçek ihtiyaç ölçülmeli |
| RAG chunk boyutunu optimize etmemek | Embedding boyutu ve token etkisini birlikte düşün |



---

## 4 · Structured Output / JSON Schema

**Serbest metin çıktısı downstream sistemlerle entegre olmaz**

```text
JSON Schema tanımı
    ↓
API çağrısı (response_format parametresiyle)
    ↓
Model → garantili schema-uyumlu JSON
    ↓
Pydantic / zod vb. ile doğrulama  [kontrol edilecek]
    ↓
Downstream sistem
```

Prompt'ta "JSON döndür" demek bu garantiyi vermez.  
Modern API'lerde `response_format` parametresiyle schema zorunlu kılınır [kontrol edilecek].

::: {.notes}
Structured output, prompt engineering'in doğal devamıdır: prompt görevi tanımlar, schema çıktı biçimini kilitler. Tool calling için giriş argümanları da aynı schema mekanizmasıyla tanımlanır. LangChain'de `with_structured_output()` bu katmanı soyutlar.

Schema validasyonu her zaman eklenmelidir. Model her koşulda uyumlu olmayabilir; parse hatası oluştuğunda retry veya fallback mekanizması devreye girmelidir. Sessiz hata kabul edilemez.
:::

---

## 4 · Structured Output — Örnek Schema

```python
schema = {
    "type": "object",
    "properties": {
        "musteri_adi": {"type": "string"},
        "sikayet":     {"type": "string"},
        "tarih":       {"type": "string", "format": "date"},
        "oncelik":     {"type": "string",
                        "enum": ["dusuk", "orta", "yuksek"]}
    },
    "required": ["musteri_adi", "sikayet", "oncelik"]
}

response = client.chat.completions.create(
    model="gpt-4o",   # [kontrol edilecek]
    messages=[...],
    response_format={
        "type": "json_schema",
        "json_schema": {"schema": schema}
    }
)
```

::: {.notes}
Karmaşık schema'lar modelin dikkatini dağıtır. Görev başına minimal schema tercih edin; derin iç içe nesnelerden kaçının. Büyük enum listelerinde enum yerine string + validation tercih edin.

Schema tasarımı bir sözleşmedir — değişince versiyon yönetimi gerektirir.
:::

---

## 4 · Structured Output — Hata Kalıpları

| Hata | Düzeltme |
|---|---|
| Schema çok derin / karmaşık | Schema'yı düzleştir; iç içe nesne sayısını azalt |
| Optional alanlara güvenmek | Required alanları minimize et; optional için None kontrolü yap |
| Yalnızca prompt'ta "JSON döndür" demek | API-level schema kullan; güvenilirlik için şart |
| Validation hatasını görmezden gelmek | Parse hatası → retry veya fallback; sessiz hata kabul edilemez |
| Büyük enum listeleri | Enum yerine string + ayrı validation adımı |



---

## 5 · Function / Tool Calling

**Model eylem gerçekleştiremez — ama tetikleyebilir**

```text
User: "Yarın sabah 10'a toplantı ekle"
    ↓
Model → tool_call: {add_event, {date: "2026-05-05", time: "10:00"}}
    ↓
Uygulama: calendar_api.add_event(...)
    ↓
Sonuç: {"status": "ok", "event_id": "abc"}
    ↓
Sonuç modele geri gönderilir
    ↓
Model: "Toplantınız eklendi."
```

::: {.notes}
Tool calling, modeli bilgi üreten bir sistemden eylem orkestratörüne dönüştürür. Model tanımlı araç listesine bakarak belirli koşullarda kendi çıktısı yerine bir araç çağrısı döndürür: araç adı + schema-doğrulanmış argümanlar.

Araç çağrısı döngünün içindedir ajan sistemlerinde — model birden fazla araç çağırabilir, sonuçları değerlendirir, tekrar karar verir. MCP bu araçları standart protokolle sunar.
:::

---

## 5 · Tool Calling — Tanım ve Akış

```python
tools = [{
    "type": "function",
    "function": {
        "name": "get_weather",
        "description": "Verilen şehir için güncel hava durumunu döndürür",
        "parameters": {
            "type": "object",
            "properties": {
                "city": {"type": "string", "description": "Şehir adı"}
            },
            "required": ["city"]
        }
    }
}]

response = client.chat.completions.create(
    model="gpt-4o",  # [kontrol edilecek]
    messages=[{"role": "user", "content": "Ankara'da hava nasıl?"}],
    tools=tools
)
# response.choices[0].message.tool_calls kontrol et
```

::: {.notes}
Tool açıklamaları modelin seçim kalitesini doğrudan etkiler. Kısa, net ve somut açıklamalar tercih edilmelidir. Model bazen birden fazla araç çağırabilir [kontrol edilecek]; tüm durumlar handle edilmelidir. Araç sonuçları modele geri gönderilmezse model bağlamı eksik tamamlar.

Yalnızca bilgi üretimi veya metin işleme yapıyorsanız tool calling gereksiz karmaşıklık ekler.
:::

---

## 5 · Tool Calling — Hata Kalıpları

| Hata | Düzeltme |
|---|---|
| Tool açıklaması belirsiz | Her tool için net, kısa, somut açıklama yaz |
| Araç sonucunu loglamamak | Tool sonuçları loglanmalı; model yanlış argüman döndürebilir |
| Paralel tool call yönetimi eksik | Model birden fazla tool çağırabilir; hepsini handle et |
| Tool sonucunu modele geri göndermemek | Her tool çağrısı için `tool_result` mesajı eklenmelidir |
| Sonsuz döngü riski | Max iteration sınırı koy |
| Argümanları doğrulamadan execute etmek | Güvenlik: argümanları doğrula; model manipüle edilmiş argüman üretebilir |

---


## 6 · Embedding ve Vector Search

**Metin → sayısal vektör → anlamsal arama**

Benzer anlam → yakın vektör. Bir sorgu için en yakın vektörleri bulmak, semantik arama yapmak demektir.

```text
Belge → Embedding model → Vektör → Vector store'a kaydet

Sorgu → Embedding model → Sorgu vektörü
    ↓
Vector store: en yakın k vektörü bul (cosine / dot product)
    ↓
İlgili chunk'lar → LLM bağlamına ekle
```

::: {.notes}
Embedding modeli metni sabit boyutlu dense vektöre dönüştürür (örn. 1536 boyut). Bu, "buna benzer ne var?" sorusunu geometrik bir arama problemine dönüştürür.

Küçük ve sabit bilgi tabanı için keyword search veya direkt system prompt'a ekleme yeterlidir; vector store gereksiz overhead yaratır.
:::

---

## 6 · Embedding — Indexleme ve Sorgu

```python
# Indexleme
chunks      = split_text(document, chunk_size=400, overlap=50)
embeddings  = [embed(c) for c in chunks]
vector_store.add(chunks, embeddings,
                 metadata=[{"source": doc_name, "page": i}
                            for i, _ in enumerate(chunks)])

# Sorgu
query_vec = embed(user_query)
results   = vector_store.search(query_vec, top_k=5)
context   = "\n".join([r.text for r in results])
```

**Teknik araçlar:** `Chroma` · `Pinecone` · `pgvector` · `FAISS` [kontrol edilecek]

::: {.notes}
Chunk boyutu ve overlap retrieval kalitesini doğrudan etkiler; 200–500 token arası başlangıç değeri önerilir. Overlap geçiş noktalarındaki bilgi kaybını azaltır.

Metadata olmadan chunk sadece metin parçasıdır; kaynak takibi ve filtreleme için kaynak, sayfa ve tarih bilgisi şarttır. Belgeler güncellenince ilgili embedding'ler de güncellenmelidir.
:::

---

## 6 · Embedding — Hata Kalıpları

| Hata | Düzeltme |
|---|---|
| Chunk boyutu çok büyük | 200–500 token arası dene; overlap ekle |
| Embedding modeli ile LLM'i eşleştirmemek | Aynı sağlayıcının modellerini kullan [kontrol edilecek] |
| Metadata olmadan depolama | Her chunk'a kaynak, sayfa, tarih ekle |
| Yalnızca semantik arama | Hybrid search: keyword + semantik birleştir |
| Vector store'u güncellememeyi unutmak | Belge güncellenince ilgili chunk'ları yeniden embed et |

---

## 7 · RAG Mimarisi

**Model bilgisi eksik veya eski olabilir**

| Aşama | Özellik |
|---|---|
| Naive RAG | Sorgu → embed → retrieve → generate |
| Advanced RAG | Query rewriting + hybrid search + reranking + context packing |
| Modular RAG | Retrieval pipeline değiştirilebilir modüllerle |

::: {.notes}
Retrieval-Augmented Generation, yanıt üretmeden önce dış kaynaktan ilgili bilgiyi çekip bağlama ekler. Model parametrelerinde olmayan bilgiyi o an görüyor olur. Bu, modeli yeniden eğitmeden güncel ve özel bilgiye erişimdir.

Küçük ve sabit bilgi tabanı için direkt system prompt'a eklemek daha basit ve güvenilirdir.
:::

---

## 7 · RAG — Pipeline

```text
Kullanıcı sorusu
    ↓ [Opsiyonel: Query rewriting — soruyu iyileştir]
Vector search → top-k chunk
    ↓ [Opsiyonel: Reranking — alakalılık sıralama]
Context packing (token bütçesine sığdır)
    ↓
Prompt: [system] + [retrieved context] + [user soru]
    ↓
LLM
    ↓ [Opsiyonel: Citation / kaynak etiketleme]
Yanıt
```

```text
System:
Sen bir şirket içi destek asistanısın.
Yalnızca aşağıdaki belgelerden yanıt ver.
Bilgi yoksa "belgelerimde bulunamadı" de.

Belgeler: {retrieved_chunks}
Soru:     {user_query}
```

::: {.notes}
Query rewriting eklenmesi retrieval kalitesini önemli ölçüde artırır. Reranking büyük chunk havuzları için gereklidir; küçük havuzlarda fazla gelir.

Kaynak etiketleme kullanıcı güveni ve hata ayıklama için kritiktir. RAG güvenlik zafiyeti de açar: kullanıcı girdisi ve retrieved metin izole edilmeli, prompt injection riskine karşı sanitize edilmelidir.
:::

---

## 7 · RAG — Hata Kalıpları

| Hata | Düzeltme |
|---|---|
| Alakasız chunk retrieve etmek | Similarity threshold ekle; düşük skoru filtrele |
| Context'e çok fazla chunk koymak | Reranking + token bütçesi ile sayıyı sınırla |
| Kaynak göstermeden yanıt vermek | Citation mekanizması ekle |
| Prompt injection görmezden gelmek | Kullanıcı girdisi ve retrieved metin izole edilmeli |
| Belgeleri güncellememeyi unutmak | Güncelleme pipeline'ı ve versiyon kontrolü şart |

---

## 8 · LangChain

**Bileşenleri zincire bağlayan framework**

| Soyutlama | Karşılık |
|---|---|
| `ChatModel` | LLM API bağlayıcısı |
| `PromptTemplate` | Parametrik prompt |
| `Retriever` | Vector store'dan chunk çekme |
| `OutputParser` | Çıktı parse etme |
| `Memory` | Konuşma geçmişi |
| `Tool` | Dış fonksiyon tanımı |
| `Chain / LCEL` | Bileşenleri pipe `\|` ile bağlama |

::: {.notes}
LangChain, LLM uygulamalarını modüler bileşenler olarak kurmayı sağlayan bir framework'tür. Önceki tüm bileşenleri (prompt, structured output, tool calling, embedding, RAG) tek çatı altında birleştirir.

Basit tek API çağrıları için framework overhead gereksizdir; doğrudan SDK kullanmak daha temizdir.
:::

---

## 8 · LangChain — LCEL Örneği

```python
from langchain_openai        import ChatOpenAI
from langchain_core.prompts  import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

llm    = ChatOpenAI(model="gpt-4o")         # [kontrol edilecek]
prompt = ChatPromptTemplate.from_messages([
    ("system", "Sen bir özetleme asistanısın."),
    ("user",   "{text}")
])

chain  = prompt | llm | StrOutputParser()
result = chain.invoke({"text": "..."})
```

```python
# LCEL ile RAG chain
chain = (
    {"context": retriever, "question": RunnablePassthrough()}
    | prompt_template
    | llm
    | output_parser
)
```

::: {.notes}
LCEL pipe syntax okunabilir zincirler kurmayı sağlar; her adım bağımsız test edilebilir. LangGraph, LangChain üzerine inşa edilir ve durum yönetimi ile döngüsel akışlar ekler.

LangSmith tracing, LangChain uygulamalarında debug için kritik araçtır [kontrol edilecek].
:::

---

## 8 · LangChain — Hata Kalıpları

| Hata | Düzeltme |
|---|---|
| Framework sürümü kırılması | Sürümü sabitle (`langchain==x.y.z`); sık breaking change gelir [kontrol edilecek] |
| Debug zorluğu | LangSmith tracing aktive et [kontrol edilecek] |
| Her şeyi LangChain ile yapmak | Basit tek-adım görevler için saf Python daha temizdir |
| Memory yönetimini default bırakmak | Memory stratejisini açık seç; default davranış değişebilir |
| Deprecation'ı geciktirmek | `langchain_core` / `langchain_community` ayrımını takip et [kontrol edilecek] |

---


## 9 · LangGraph ve Ajan Workflow'ları

**Lineer chain → döngüsel ajan**

```text
START
  ↓
Plan node: görevi adımlara böl
  ↓
Execute node: araç çağır
  ↓
Observe node: sonucu değerlendir
  ↓
Koşullu edge:
  ├── Görev tamamlandı → END
  └── Devam gerekiyor → Execute node (döngü)
```

::: {.notes}
Lineer chain'ler döngü, koşul ve durum yönetemez. "Ara sonuca bakıp devam et ya da geri dön" kararları ajan davranışıdır ve graph yapısı gerektirir. LangGraph, workflow'ları durum grafiği olarak modeller: node'lar işlem adımlarını, edge'ler geçişleri temsil eder.

Tek turlu veya lineer işlemler için LangChain chain veya doğrudan API yeterlidir.
:::

---

## 9 · LangGraph — Mimari ve Örnek

```python
from langgraph.graph import StateGraph, END

graph = StateGraph(AgentState)
graph.add_node("planner",  plan_step)
graph.add_node("executor", execute_step)

def should_continue(state):
    return "continue" if state["iterations"] < 5 and not state["done"] \
           else "end"

graph.add_conditional_edges(
    "executor",
    should_continue,
    {"continue": "planner", "end": END}
)
```

**Kullanım senaryoları:** araştırma ajanı · kod yazma ajanı · multi-agent · human-in-the-loop

::: {.notes}
Durum tanımı ajanın hafızasıdır; dikkatli tasarlanmalı, yalnızca gerekli alanları içermeli. Human-in-the-loop, güvenlik gerektiren adımlarda LangGraph'ın güçlü özelliğidir.

MCP, ajan sistemlerinin araç katmanını standartlaştırır — LangGraph node'larında MCP client kullanılabilir.
:::

---

## 9 · LangGraph — Hata Kalıpları

| Hata | Düzeltme |
|---|---|
| Sonsuz döngü | Max iteration kontrolü şart; `recursion_limit` belirle |
| State büyümesi | State sadece gerekli alanları içermeli |
| Tool hatasını handle etmemek | Her tool çağrısı try/except içinde; hata state'e kaydedilmeli |
| Multi-agent koordinasyonu eksik | Supervisor pattern veya shared state ile koordinasyon tanımla |
| Tracing olmadan debug | LangSmith veya benzeri tracing zorunlu [kontrol edilecek] |

---


## 10 · MCP: Araç Standartlaşması

**Problem:** Her uygulama araçları kendine özel bağlar → entegrasyon maliyeti katlanır

```text
LLM Host (uygulama / IDE / Claude Desktop)
    ↓  ←→  MCP Protokolü  [kontrol edilecek]
MCP Server A    MCP Server B    MCP Server C
(dosya okuma)   (web arama)     (veritabanı)
```

| Kavram | Açıklama |
|---|---|
| MCP Server | Araç/kaynak/prompt sağlayıcı; bağımsız process |
| MCP Client | LLM host; sunucuya bağlanır, araçları listeler |
| Tool | Fonksiyon çağrısı (tool calling ile örtüşür) |
| Resource | Okunabilir veri kaynağı (dosya, DB, API) |
| Transport | stdio (lokal) veya HTTP/SSE (uzak) [kontrol edilecek] |

::: {.notes}
MCP, tool calling üzerinde bir standart katmandır: araçlar artık uygulama içinde değil, bağımsız MCP server'larda tanımlanır. Aynı araçlar birden fazla model veya uygulamaya aynı anda sunulabilir. Araç geliştirme ve uygulama geliştirme bağımsızlaşır.

Protokol aktif geliştirme aşamasındadır; spesifikasyon değişikliklerini takip etmek gerekir [kontrol edilecek].
:::

---

## 10 · MCP — Örnek Tool Tanımı ve Hata Kalıpları

```json
{
  "name": "search_documents",
  "description": "Şirket belgelerinde arama yapar",
  "inputSchema": {
    "type": "object",
    "properties": {
      "query":       {"type": "string"},
      "max_results": {"type": "integer", "default": 5}
    },
    "required": ["query"]
  }
}
```

| Hata | Düzeltme |
|---|---|
| Server güvenliğini görmezden gelmek | Authentication ekle; yalnızca yetkili client'lara aç |
| Prompt injection vektörü olarak MCP | Resource içerikleri izole edilmeli |
| Transport yanlış seçimi | stdio lokal; HTTP/SSE uzak bağlantı için |
| Tool tanımlarını senkronize etmemek | Server güncellenince client araç listesini yenilemeli |

::: {.notes}
Güvenlik MCP mimarisinin en kritik konusudur. Server saldırı yüzeyi oluşturur; authentication eklenmeli. Prompt injection, harici kaynak içeriklerinin model bağlamına girmesiyle yeni bir vektör kazanır; resource içerikleri izole edilmelidir.

Tek uygulama, tek model, az sayıda araç için doğrudan tool calling yeterlidir; MCP ek operasyonel yük ekler.
:::

---


## Tam Sistem Mimarisi

```text
Kullanıcı
  ↓
API / UI katmanı
  ↓
Girdi doğrulama + kimlik doğrulama   ← prompt injection sanitize; yetki
  ↓
Prompt / görev yönlendirici          ← hangi chain/agent?
  ↓
Context manager
  ├── Konuşma state
  ├── Retrieved belgeler (RAG)
  ├── Kullanıcı / görev hafızası
  └── Token bütçe yöneticisi
  ↓
LLM çağrısı
  ├── Structured output → parse + validate
  ├── Tool calling → tool dispatcher
  └── Serbest üretim → output parser
  ↓
Araç / veri katmanı
  ├── İç API'ler
  ├── Vector store (embedding / RAG)
  ├── Veritabanı
  ├── LangChain / LangGraph workflow'ları
  └── MCP server'lar
  ↓
Doğrulama / guardrails              ← çıktı policy kontrolü
  ↓
Nihai yanıt / eylem
  ↓
Tracing + değerlendirme + log       ← LangSmith / benzeri [kontrol edilecek]
```

::: {.notes}
Kullanıcıdan gelen girdi önce doğrulama ve kimlik doğrulama katmanına girer; burada prompt injection için sanitize edilir ve yetki kontrolü yapılır. Yönlendirici kullanıcı niyetine göre hangi pipeline'ın çalışacağını belirler.

Context manager en büyük maliyet kaynağıdır: konuşma geçmişi, RAG ile getirilen belgeler ve token bütçe yöneticisini birleştirir.

Production'da tracing olmayan bir sistem kör uçuş yapar: hata kaynağını bulmak, gecikme sorunlarını tanımlamak ve model davranışını izlemek mümkün olmaz.
:::

---

## Tam Sistem — Katman Sorumlulukları

| Katman | Sorumluluk | Kritik nokta |
|---|---|---|
| API / UI | Girdiyi al, çıktıyı sun | XSS, injection yüzeyi |
| Doğrulama + auth | Kim, ne yapabilir | Her istekte kontrol |
| Yönlendirici | Hangi pipeline? | Yanlış yönlendirme gizli hata |
| Context manager | Token bütçesi + bilgi | En büyük maliyet kaynağı |
| LLM çağrısı | Üretim | Hata yönetimi, retry |
| Araç / veri katmanı | Harici erişim | Yetki, hata, gecikme |
| Guardrails | Çıktı güvenliği | Policy belirgin olmalı |
| Tracing | Görünürlük | Prodüksiyonda zorunlu |

---

## İlişki Haritası: Halkalar

| Kaynak | Hedef | İlişki türü | Açıklama |
|---|---|---|---|
| LLM API modeli | Prompt engineering | Temel | API parametreleri prompt etkisini belirler |
| Prompt engineering | Structured output | Bağımlılık | Prompt görevi tanımlar, schema çıktıyı kilitler |
| Prompt engineering | Token yönetimi | Rekabet | Prompt uzunluğu token bütçesini tüketir |
| Token yönetimi | RAG | Kısıt | Chunk sayısı ve boyutu bütçeye bağlı |
| Structured output | Tool calling | Altyapı | Tool argümanları schema-validated JSON |
| Tool calling | Ajan workflow | Bileşen | Ajan döngüsünde araç execute adımı |
| Embedding / vector search | RAG | Altyapı | Retrieval'ın teknik temeli |
| RAG | LangChain | Pipeline | LangChain RAG chain'i hazır kurar |
| LangChain | LangGraph | Genişleme | LangGraph durum ve döngü ekler |
| MCP server/client | Tool calling | Standartlaşma | Tool'ları protokol düzeyinde standartlaştırır |
| RAG / Tool / MCP | Prompt injection | Güvenlik riski | Dış veri modele girince saldırı yüzeyi artar |

::: {.notes}
Zayıf bir halka kendisine bağlı tüm halkaları etkiler: zayıf retrieval iyi prompt'u bozar; kötü structured output güçlü tool calling'i anlamsız kılar; token yönetimi olmayan sistem RAG'da beklenmedik bağlam kesmeleri yaşar.

Önemli uyarı: model adları ve versiyonları, response_format API parametresi, LangChain sürüm mimarisi, LangGraph API ve MCP spesifikasyonu sık güncellenebilir. Uygulamaya almadan önce güncel dokümantasyonu kontrol edin [kontrol edilecek].
:::

---

## Sentez: Prompt Tek Halka

**Ana iddia**

> Prompt engineering bu hattın yalnızca bir halkasıdır.  
> Güvenilir bir LLM sistemi için tüm halkaların birlikte tasarlanması gerekir.

| Katman grubu | Ne sağlar |
|---|---|
| API · token · structured output · tool calling | LLM'i işlevsel kılar |
| Embedding · RAG | Güncel ve özel bilgiyle donatır |
| LangChain · LangGraph | Ölçeklenebilir pipeline ve ajan |
| MCP | Araç ekosistemini standartlaştırır |

::: {.notes}
Bu bölümün merkezi mesajı bir cümleye sığar: LLM tabanlı bir sistemi güvenilir kılmak, iyi prompt yazmaktan çok daha fazlasını gerektirir. Her halka bir öncekinin çıktısını tüketir ve sisteme yeni bir güvenilirlik katmanı ekler.

Hafta 12'nin dört bölümünü birlikte düşünürsek: tarih nereden geldiğimizi gösterdi; teknik bölüm nasıl çalıştığını anlattı; kullanım rehberi bireysel kullanımı çerçeveledi; bu son bölüm sistem düzeyinde ne gerektiğini ortaya koydu.
:::
