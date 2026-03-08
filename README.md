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
quarto preview --profile local

# Render (CI/CD)
quarto render
```

## Lisans

[CC BY-SA 4.0](LICENSE)
