# Ders Notları

Quarto ile hazırlanmış ders notları. Bilgisayar bilimleri, matematik ve uygulamalı teknik araçları kapsayan, öğretim ve bireysel öğrenme için tasarlanmış konu bazlı materyaller.

## Yapı

```
courses/          ← Ders izlenceleri (hafta ↔ konu bağlantıları)
topics/           ← Ders bağımsız konu modülleri
.filters/         ← Quarto Lua filtreleri
```

- **topics/**: Her konu bağımsız bir modüldür. Aynı konu birden fazla derste kullanılabilir.
- **courses/**: Her ders kendi izlencesi üzerinden `topics/` altındaki notlara yönlendirir.

## Kullanım

```bash
# Lokal önizleme
make preview

# Tüm çıktıları üret
make render-all

# Tek dosya render
make render-file FILE=topics/temel-ai/tp_yapay-zekanin-temelleri.md

# Tek dosya render + önizleme
make preview-file FILE=topics/temel-ai/tp_yapay-zekanin-temelleri.md
```

## Lisans

[CC BY-SA 4.0](LICENSE)
