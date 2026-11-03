# Ders Notları

Quarto ile hazırlanmış ders notları. Bilgisayar bilimleri, matematik ve uygulamalı teknik araçları kapsayan, öğretim ve bireysel öğrenme için tasarlanmış konu bazlı materyaller.

Bu bağımsız yayın reposunun konuşmalardaki adı **Vitrin**dir. Üstteki
`site-okul-icerik` geliştirme reposu **Mutfak**tır. Yeni içerik Mutfakta
geliştirilir; inceleme ve kullanıcı onayından sonra Vitrine alınır. Yayındaki
imla, görsel, slayt bölme/silme ve örnek kaldırma gibi bakım işleri doğrudan
Vitrinde yapılabilir; her düzeltme için yeni geliştirme kopyası açılmaz.
Aktarım öncesinde Vitrindeki değişiklikler karşılaştırılır, dosyalar körlemesine
ezilmez. Commit açık kullanıcı onayı, push ayrıca açık onay gerektirir.

## Yapı

```
courses/              ← Ders izlenceleri ve öğretim notları
├── <ders>/notes/     ← Tek bir dersin akışına bağlı notlar
└── _ortak/           ← Birden fazla derste kullanılabilen notlar
topics/               ← Ders akışından bağımsız konu yazıları
.filters/             ← Quarto Lua filtreleri
.assets/animations/   ← Etkileşimli animasyonlar ve bağlayıcı animasyon sözleşmesi
```

- **courses/**: Ders izlenceleri ve ders akışına bağlı öğretim notları burada yaşar.
- **courses/_ortak/**: Birden fazla derste kullanılabilecek öğretim notları burada tutulur.
- **topics/**: Ders akışından bağımsız `art-*` konu yazılarına ayrılmıştır.
- **_onizleme/**: Mutfaktaki `_mutfak-onizleme/` klasörüne göreli symlinktir; Git ve public yayın dışında kalır.
- **_draft, draft, _private, _backup, _arsiv**: Eski yerel alanlardır. Yeni geliştirme veya önizleme dosyaları buralara konmaz; mevcut dosyalar ayrıca kararlaştırılmadan taşınmaz.

## Mutfaktan yerel önizleme

Önizlenecek notların ve gerekli görsellerin aslı Mutfaktaki
`_mutfak-onizleme/<çalışma>/` altında tutulur. Vitrinde ikinci kopya oluşturulmaz.
Yeni cihazda Mutfak kökünden `ln -s ../_mutfak-onizleme __site/_onizleme`
ile bağlantı kurulur; hedef zaten varsa önce mevcut bağlantı kontrol edilir.

`make preview`, yerel menüye “Önizleme” bağlantısını ekler. Bu sayfa klasörleri
başlık, altlarındaki notları tıklanabilir liste olarak otomatik gösterir.
Yeni klasör ve notlar için elle index yazılmaz; açık önizleme değişiklikleri
takip eder. Liste kaynağı ve yerel profil otomatik üretilir, Git'e girmez.
Menü ve kaynaklar public yayın profilinden dışlanır. Plan, denetim, ajan
raporu ve sınav malzemesi önizleme kaynaklarına eklenmez.

## Betik yerleşimi

Bu depoda çalışan kişiler ve ajanlar aşağıdaki yerleşim kurallarına uymalıdır:

- Kök `.scripts/` dizini yalnızca proje genelinde kullanılan betikler içindir. `check-animations.py` ve `local-quarto.sh` gibi ortak denetim ve derleme araçları burada tutulabilir.
- Tek bir derse, konuya veya içerik üretim görevine özel kontrol, analiz ve yardımcı betikler `.scripts/` dizinine eklenmez. Bu betikler ilgili içeriğin `.gitignore` kapsamındaki çalışma alanında tutulur; örneğin `__content/psi303/scripts/`. Depo genelindeki geçici görevler için `__content/genel/scripts/` kullanılabilir.
- Yerel ya da geçici bir dosya veya klasör `.gitignore` düzenlenmeden git ve yayın dışı bırakılmak istenirse adı `__` ile başlatılır (ör. `__deneme/`, `__not.md`). `__` ile başlayan hiçbir ad git'e girmez, Quarto ile render edilmez ve yayın derlemesinde denetlenir. Tek alt çizgiyle başlayan adlar (`_ortak`, `_quarto*.yml`) bu kurala girmez; bunlar yayın deposunun parçasıdır.
- Betik oluşturulmadan önce hedef konumun Git tarafından yok sayıldığı doğrulanır. Önceden izlenen bir dosya, yalnızca bu konuma taşınarak veya `.gitignore` kuralı eklenerek izleme dışına çıkmaz.
- `.gitignore` kapsamındaki çalışma alanlarına erişemeyen veya bunları kullanamayan bir web ajanı ile çalışılıyorsa, içeriğe özel betik ilgili dersin veya konunun kendi klasörü içinde, örneğin `courses/psi303/scripts/` altında tutulur. Bu istisna kök `.scripts/` dizininin kullanılmasına gerekçe oluşturmaz.

## Kullanım

Gereksinimler: Quarto (`1.8.27` ile doğrulandı), `make`, `rsync` ve PyYAML
kurulu Python 3. PyYAML, kullanılan Python ortamında `python3 -m pip install PyYAML`
ile kurulabilir. Yerel betik önce PATH üzerindeki `python3`, ardından
`/usr/bin/python3` içinde PyYAML arar. Yorumlayıcı açıkça
`PYTHON=/path/to/python3 make preview` ile seçilebilir.

```bash
# Lokal önizleme
make preview

# Tüm çıktıları üret
make render-all

# Son derlemeden beri değişen veya yeni eklenen Markdown dosyalarını derle
make render-changed

# Tek dosya render
make render-file FILE=courses/_ortak/temel-ai/notes/tp_yapay-zekanin-temelleri.md

# Tek dosya render + önizleme
make preview-file FILE=courses/_ortak/temel-ai/notes/tp_yapay-zekanin-temelleri.md
```

Tüm yerel çıktılar depo içindeki `_site/` klasörüne yazılır. Böylece proje,
önceden içinde bulunduğu kişisel vault'tan veya depo dışındaki bir çıktı
klasöründen bağımsız çalışır.

Tek dosya ve değişen dosya derlemeleri, HTML ve slaytları geçici çalışma
alanlarında üretir; başarılı çıktılar `_site/` içine aktarılır. Derleme,
önizleme ve temizleme komutları aynı proje için `flock` ile kilitlenir.
Bir önizleme açıksa başka bir derleme başlatmadan önce `Ctrl+C` ile kapatın.

`render-changed`, her `.md`/`.qmd` dosyasının değiştirilme zamanını karşılık gelen
HTML çıktısıyla ve sunumsa slayt çıktısıyla karşılaştırır. Çıktısı eksik ya da
kaynağından eski dosyaları derler; diğerlerini atlar. `_site/` yoksa tüm kaynaklar
yeni kabul edilir. Kaynak dışındaki ortak yapılandırma değişikliklerinden sonra
`make render-all` kullanın.

## Lisans

[CC BY-SA 4.0](LICENSE)

## Animasyonlar

Notlardaki etkileşimli animasyonlar (`<div data-anim="…">`) ortak bir dil, tema ve yaklaşım sözleşmesine
tabidir: [.assets/animations/README.md](.assets/animations/README.md). Animasyon üreten veya değiştiren
her kişi ve ajan önce bu belgeyi okumalıdır. Denetim: `make check-animations`.
