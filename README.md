# Ders Notları

Quarto ile hazırlanmış ders notları. Bilgisayar bilimleri, matematik ve uygulamalı teknik araçları kapsayan, öğretim ve bireysel öğrenme için tasarlanmış konu bazlı materyaller.

## Yapı

```
courses/              ← Ders izlenceleri ve öğretim notları
├── <ders>/notes/     ← Tek bir dersin akışına bağlı notlar
└── _ortak/           ← Birden fazla derste kullanılabilen notlar
topics/               ← Ders akışından bağımsız konu yazıları
.filters/             ← Quarto Lua filtreleri
```

- **courses/**: Ders izlenceleri ve ders akışına bağlı öğretim notları burada yaşar.
- **courses/_ortak/**: Birden fazla derste kullanılabilecek öğretim notları burada tutulur.
- **topics/**: Ders akışından bağımsız `art-*` konu yazılarına ayrılmıştır.
- **_draft, _private, _backup, _arsiv**: Yerel çalışma alanlarıdır; GitHub'a ve yayın çıktısına girmez.

## Kullanım

```bash
# Lokal önizleme
make preview

# Tüm çıktıları üret
make render-all

# Tek dosya render
make render-file FILE=courses/_ortak/temel-ai/notes/tp_yapay-zekanin-temelleri.md

# Tek dosya render + önizleme
make preview-file FILE=courses/_ortak/temel-ai/notes/tp_yapay-zekanin-temelleri.md
```

## Lisans

[CC BY-SA 4.0](LICENSE)
