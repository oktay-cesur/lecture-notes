# Animasyon Sözleşmesi

Bu belge, bu depoda animasyon üreten, değiştiren veya notlara animasyon ekleyen **herkes için
bağlayıcıdır**: insanlar, kod ajanları ve içerik ajanları. Animasyon yazmadan önce tamamını oku.
Kurallar **ZORUNLU** (kural), **YASAK** ve **ÖNERİLİR** olarak işaretlidir. Zorunlu ve yasak
kuralların makinece denetlenebilen kısmı `make check-animations` ile doğrulanır.

Mevcut kodun tamamı bu kurallara uymayabilir. Bir dosyaya dokunduğunda onu bu sözleşmeye yaklaştır,
ama istenmeyen kapsamlı yeniden yazım yapma.

---

## 1. Yaklaşım

1. **Bir animasyon, bir kavram.** Animasyon notun metnini tekrar etmez; metnin anlatmakta
   zorlandığı mekanizmayı gösterir.
2. **Adım adım ve kullanıcı denetimli.** Varsayılan etkileşim slider veya İleri/Geri düğmeleridir.
   Otomatik oynatma varsa durdurulabilir olmalı ve her adım ayrıca seçilebilmelidir. Sunumda
   anlatıcı hızı kendi belirler.
3. **Başlangıç durumu anlamlıdır.** Div yüklendiğinde boş değil, ilk adımı gösterir.
4. **Hesap ile çizim ayrıdır.** Algoritma/model sonucu saf, deterministik veri üretir (örnek:
   `search/core-algorithms.js`); çizim bu veriyi okur (`search/browser-runtime.js`). Rastgelelik
   gerekiyorsa tohumlu olmalı ve aynı girdi aynı sonucu vermeli.
5. **Etiketler durumu söyler.** Renk tek başına anlam taşımaz; her vurgunun metin, şekil veya
   çizgi biçimi karşılığı olur.
6. **Bağımlılık yok.** Saf ES modülü, DOM ve SVG. Harici kütüphane, CDN, derleme adımı **YASAK**.
   (Matematik için sayfanın kendi MathJax'i kullanılabilir.)

## 2. Dil

- Kullanıcıya görünen **tüm metin Türkçe** olmalıdır: başlık, düğme, etiket, açıklama,
  `aria-label`, hata mesajı.
- **Diakritikler zorunludur**: ç ğ ı İ ö ş ü. "Ileri", "Baslangic", "Sirasi" gibi ASCII yazım **YASAK**.
- Yerleşik teknik terimler özgün kalabilir (`alpha-beta`, `qubit`, `BFS`, `CNOT`). Terimi ders
  notundaki yazımla aynı kullan.
- Kod tanımlayıcıları, dosya adları ve `data-*` adları İngilizce/ASCII, kebab-case dosya adıyla yazılır.
- Düğme metinleri kısa fiil biçimindedir: "İleri", "Geri", "Sıfırla", "Başlat".

## 3. Tema

Her animasyon **tüm temalarda** okunur olmalıdır. Temalar `core/theme.css` içinde tek bir
`[data-anim-theme="…"]` bloğu olarak tanımlıdır; listesi ve etiketleri `core/theme.js` içindeki `THEMES`
dizisindedir. `core/theme.js` seçilen temayı `<html data-anim-theme="…">` olarak yayımlar. Aynı öznitelik
**sunum temasını da** sürer (`slides.css`, `--anim-slide-*` jetonları), yani animasyon ile slayt
birlikte değişir. Sağ üstteki Aa düğmesi tema menüsünü açar; seçim `?anim-theme=<id>` parametresi,
kayıtlı tercih veya sayfa zemininden gelir.

| Tema | Tür | Kullanım |
|---|---|---|
| `light` | açık | varsayılan; site ve sunum |
| `dark` | koyu | site ve sunum (Dracula tabanlı) |
| `sepia` | açık | yalnız sunum; sıcak kâğıt tonu |
| `ocean` | koyu | yalnız sunum; koyu mavi-yeşil |
| `contrast` | koyu | yalnız sunum; siyah zemin, yüksek karşıtlık |

Site (Quarto `html`) yalnızca `light` ve `dark` sunar; diğerleri sunumda görünür.

**Yeni tema eklemek:** `core/theme.css` içine **tüm** jetonları tanımlayan bir blok ekle (bir
temadan kopyala), `core/theme.js` içindeki `THEMES` dizisine bir satır ekle ve yukarıdaki tabloyu
güncelle. `make check-animations` jeton kümesinin eksiksiz olmasını ve CSS ile JS listelerinin
eşleşmesini denetler. Bir temada animasyonun okunabilirliğini **en az bir animasyon sayfasında**
elle kontrol et (bölüm 8).

**ZORUNLU**
- Her renk `core/theme.css` içindeki `--anim-*` jetonlarından gelir. JS'te
  `"var(--anim-blue)"`, CSS'te `var(--anim-blue)`.
- `--anim-on-accent` yalnızca dolgulu vurgu renginin (`--anim-blue-strong` vb.) üstündeki metin için kullanılır. Metni zemine göre kendin seçme.
- Yarı saydam ton: `color-mix(in srgb, var(--anim-blue) 20%, transparent)`.
- Widget'ın **kendi zemini** olur: `background: var(--anim-bg)`, çerçeve `var(--anim-border)`.
  Sunum veya site zemini sana ait değildir, ona güvenme.
- Başlık (`h1`–`h6`) rengini `core/theme.css` zaten animasyon içinde `--anim-strong` yapar. Yeniden tanımlama.

**YASAK**
- Onaltılık (`#abc`, `#aabbcc`), `rgb()/rgba()/hsl()` ve adlandırılmış renk (`white`, `black`)
  kullanımı. İstisna: `core/theme.css` ve yorum satırları.
- `<canvas>`: `var()` çözmez. Gerekliyse rengi `getComputedStyle` ile oku ve
  `document.documentElement` üzerindeki `anim-themechange` olayında yeniden çiz.
- Slayt veya site genelini etkileyen kurallar (`.reveal h1 { … }`, `body { … }`). Seçiciler
  animasyonun kendi sınıfıyla (`.ab-prune …`) sınırlı kalır.

| Jeton ailesi | Anlam |
|---|---|
| `--anim-bg`, `--anim-panel`, `--anim-surface` | zemin, panel, kart/kabuk |
| `--anim-border`, `--anim-border-strong` | çerçeve, vurgulu çerçeve |
| `--anim-strong`, `--anim-text`, `--anim-text-2`, `--anim-muted`, `--anim-muted-2` | metin kademeleri (güçlüden sönüğe) |
| `--anim-on-accent` | dolgulu vurgu rengi üzerindeki metin |
| `--anim-blue`, `-blue-strong`, `-sky`, `-cyan`, `-teal`, `-green`, `-amber`, `-amber-soft`, `-red`, `-red-soft`, `-purple`, `-pink` | vurgu renkleri |
| `--anim-blue-bg`, `-blue-bg-hover`, `-blue-deep`, `-purple-bg`, `-red-bg`, `-rose-bg` | vurgu tonlu dolgular |
| `--anim-wire`, `--anim-cell-light`, `--anim-cell-dark` | devre teli, satranç/ızgara hücreleri |
| `--anim-slide-*` (`bg`, `text`, `heading`, `link`, `link-hover`, `bold`, `italic`, `code`, `bullet`) | yalnız sunum zemini ve metni; animasyon kodu kullanmaz |

Yeni bir renge ihtiyaç varsa jetonu `core/theme.css` içine **tüm temalar için** değeriyle ekle ve
bu tabloya yaz. Animasyon dosyasına özel renk tanımlama.

Widget'a özel değişkenler (`--qde-bg` gibi) yalnızca jetona **başvurabilir**
(`--qde-bg: var(--anim-bg)`), kendi renk değeri taşıyamaz.

## 4. Dosya düzeni ve kayıt

```
.assets/animations/
├── core/            ortak: dom.js, theme.js, theme.css   (animasyon eklerken değiştirme)
├── custom/          tek seferlik veya bağımsız animasyonlar (yeni işlerin varsayılan yeri)
├── search/ quantum/ ailelerdir; aynı alt yapıyı paylaşan çok sahneli takımlar
└── custom-loader.js `data-anim="custom"` için yükleyici
```

- **Yeni animasyon varsayılan olarak `custom/` altına gider** (`<ad>.js` + gerekiyorsa `<ad>.css`).
  Filtreyi (`.filters/animation-assets.lua`) değiştirmek gerekmez.
- Yeni bir **aile** (`ANIMATION_MAP` girdisi) yalnızca aynı veri/çizim altyapısını paylaşan en az
  iki sahne için açılır. Girdi `js` (+ isteğe bağlı `css`) alır; modül `mount` dışa aktarmalıdır.
- Dosya adı konuyu söyler: `alpha-beta-prune.js`, `nqueens-hc.js`. CSS sınıf öneki dosya
  ile eşleşir (`.ab-prune__*`). Başka animasyonun sınıf önekini kullanma.

## 5. `mount` sözleşmesi

Her animasyon modülü şunu dışa aktarır:

```js
export function mount(div, dataset) { … }
```

- `div`, notta `data-anim` taşıyan öğedir; çizimi **onun içine** yaz, dışına taşma. `dataset` = `div.dataset`.
- Aynı sayfada aynı animasyondan **birden çok örnek** olabilir. Modül düzeyinde (global) durum
  tutma; durum `mount` içindeki kapanışta yaşar. Sabit `id` kullanma.
- Geçersiz veya eksik `data-*` değerinde **sessiz kalma**: div içine Türkçe, görünür bir uyarı
  yaz (`Bilinmeyen sahne: "x". Geçerli değerler: …`) ve `console.warn` ile bildir.
- `data-*` değerleri **kullanıcı girdisidir**: DOM'a `textContent` veya öznitelik olarak yaz;
  `innerHTML`'e yerleştirme. `innerHTML` yalnızca kodun kendi sabit/üretilmiş HTML'i içindir.
- Yan etkiler (olay dinleyici, `requestAnimationFrame`, zamanlayıcı) yalnızca div içindeki
  öğelere bağlanır; sayfa geneline sızmaz.

**DOM yardımcıları** `core/dom.js` içindedir. Kendi `el`/`svgEl`/`createElementNS` yardımcını yazma:

```js
import { makeEl, makeSvg } from "../core/dom.js";

makeEl("button", "ab-prune__btn", "İleri");        // ikinci argüman sınıf adı ya da öznitelik nesnesi
makeEl("input", { type: "range", min: 0, max: 5 });
makeSvg("circle", { cx: 10, cy: 10, r: 4, fill: "var(--anim-blue)" });
```

**Şablon** (`custom/ornek.js`):

```js
import { makeEl, makeSvg } from "../core/dom.js";

const SCENES = {
  temel: (root) => { /* çiz */ },
};

export function mount(div, dataset) {
  const scene = (dataset.scene || "temel").trim();
  const draw = SCENES[scene];
  if (!draw) {
    div.replaceChildren(makeEl("p", "ornek__uyari", `Bilinmeyen sahne: "${scene}". Geçerli değerler: ${Object.keys(SCENES).join(", ")}`));
    console.warn("[ornek] bilinmeyen sahne:", scene);
    return;
  }
  const root = makeEl("section", "ornek");
  root.setAttribute("aria-label", "Örnek animasyon");
  draw(root);
  div.replaceChildren(root);
}
```

## 6. Notta kullanım

```html
<div data-anim="custom" data-src="alpha-beta-prune.js" data-css="alpha-beta-prune.css"></div>
<div data-anim="search" data-algo="BFS"></div>
```

- Yalnızca bu belgenin altındaki tabloda kayıtlı `data-anim`, `data-src` ve `data-*` değerlerini kullan.
- `data-src` ve `data-css` yalnızca `custom/` altındaki dosya adıdır (`..` yasaktır).
- Div içine içerik yazılmaz; animasyon onu doldurur.

**Öznitelik kataloğu** (yeni sahne/öznitelik eklediğinde bu tabloyu güncelle):

| `data-anim` | Öznitelikler |
|---|---|
| `search` | `data-algo`: `BFS` `DFS` `UCS` `GREEDY` `ASTAR` · `data-algos`: virgülle liste · `data-layout`: `stacked` · `data-view`: `graph` `summary` `heuristic` |
| `quantum` | `data-scene`: `bs-single` `mz-with-a` `mz-no-a` `amplitude-cancel` |
| `gate` | `data-scene`: `x-gate` `z-gate` |
| `gate3` | `data-scene`: `x-gate` `h-gate` `z-gate` `phase-kickback` |
| `switch` | `data-scene`: `bit-switch` `byte-switch` |
| `superdense` | (yok) |
| `custom` + `alpha-beta-prune.js` | (yok) |
| `custom` + `chessboard.js` | `data-queens` `data-pieces` `data-highlight` `data-lines` `data-status` `data-status-color` `data-show-attacks` `data-label` `data-editable` |
| `custom` + `nqueens-hc.js` | `data-scene` `data-queens` `data-label` `data-editable` |
| `custom` + `qde-encoding.js` | `data-scene`: `basis` `angle` `phase` `amplitude` `decision` |
| `custom` + `tik-frqi.js` | `data-scene` (bkz. `SCENES` nesnesi) |
| `custom` + `orneklem-secimi.js` | `data-n` (5–80) `data-seed` `data-label` |
| `custom` + `ters-puanlama-etkisi.js` | `data-scene` `data-label` |
| `custom` + `aralik-genisligi.js` | `data-width` `data-label` |
| `custom` + `mean-seesaw.js` | `data-values` `data-label` |
| `custom` + `median-outlier.js` | `data-max-val` `data-label` |
| `custom` + `degisen-yayilim.js` | `data-spread` `data-label` |
| `custom` + `z-ve-alan.js` | `data-z` `data-label` |
| `custom` + `sampling-distribution.js` | `data-n` `data-shape` `data-seed` `data-label` |
| `custom` + `tail-area-p.js` | `data-mean` `data-sided` `data-label` |
| `custom` + `t-ve-normal.js` | `data-df` `data-t` `data-label` |
| `custom` + `anova-f-degisimi.js` | `data-scene` `data-between` `data-within` `data-label` |

## 7. Boyut, sunum ve erişilebilirlik

- Sunum tuvali 1920×960'tır ve ölçeklenir; site sütunu dardır. Bu yüzden **SVG `viewBox` +
  `width:100%`** kullan; sabit piksel genişlik yok. Üst sınır için `max-width` kullan.
- SVG içi metin viewBox biriminde **en az 10** olmalı; sunumda uzaktan okunacağını düşün.
- Her `<svg>`: `role="img"` ve Türkçe `aria-label`. Etkileşimli her öğe gerçek `<button type="button">`,
  `<input>` veya `<select>` olmalıdır (klavye ile erişilebilir) ve görünür odak halkasını korur.
- Her slider/düğmenin metin etiketi veya `aria-label`'ı vardır.
- Hareket (`requestAnimationFrame`, CSS geçişi) `prefers-reduced-motion: reduce` altında kapanır
  veya anında sona erer.
- Slayt başına bir animasyon tercih edilir; bir slaytta birden çok varsa her biri tek başına anlamlıdır.

## 8. Doğrulama

Bir animasyon eklemeden veya değiştirmeden önce ve sonra:

```bash
make check-animations                       # sözleşme denetimi (makinece denetlenen kurallar)
make render-slide FILE=<not.md>             # sunum çıktısı
make render-file  FILE=<not.md>             # site çıktısı
```

Elle kontrol (`_site/slides` veya `_site` altından HTTP ile sun; `file://` modül yüklemez):

- [ ] En az `light`, `dark` ve `contrast` temalarında okunuyor (`?anim-theme=<id>`); koyu/açık fark etmeksizin metin zeminden ayrışıyor.
- [ ] Tema menüsünden seçince animasyon ve slayt birlikte değişiyor.
- [ ] Tarayıcı konsolunda hata yok.
- [ ] Aynı sayfada iki örnek çakışmıyor.
- [ ] Geçersiz `data-*` görünür uyarı veriyor.
- [ ] Türkçe karakterler doğru.

`.assets/**` çıktıya kopyalandığı için bu klasörde değişiklikten sonra sayfayı yeniden derle.

## 9. Teslim kontrol listesi

- [ ] `mount(div, dataset)` dışa aktarılıyor, global durum yok.
- [ ] Renklerin hepsi `--anim-*` jetonu; sabit renk yok.
- [ ] `core/dom.js` kullanıldı, yerel DOM yardımcısı yok.
- [ ] Metinler Türkçe ve diakritikli.
- [ ] Öznitelik kataloğu (bölüm 6) güncellendi.
- [ ] `make check-animations` temiz.
- [ ] Birden çok temada elle bakıldı.
