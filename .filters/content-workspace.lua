-- Remove authoring blocks before notes or presentation filters expose them.
local internal = {}
for name in string.gmatch([[plan yorum yapildi denetle yaz konu-denetle plan-denetle teknik-dogrula sunum-turet
akis-okuyucu alistirma-oner baglam-acici erisilebilirlik gorsel-oner karsi-ornek
kaynak-izci kitap-karsilastir ogrenci sadelestirici ses-okuyucu sinav-yazari
sira-disi sizinti-avcisi sunum-kalibi sunum-kurallari yanilgi-avcisi]], "%S+") do
  internal[name] = true
end

function Div(el)
  for _, class in ipairs(el.classes) do
    if internal[class] or class:match("^ogrenci%-") then
      return {}
    end
  end
end

function Meta(meta)
  -- Atomic notes use baslik; published documents may supply title explicitly.
  if meta.title == nil and meta.baslik ~= nil then
    meta.title = meta.baslik
    meta.pagetitle = meta.baslik
  end
  return meta
end
