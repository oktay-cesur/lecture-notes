-- Her animasyon ailesi bir JS modülüdür ve mount(div, dataset) dışa aktarır.
local CORE_CSS = ".assets/animations/core/theme.css"
local CORE_THEME_JS = ".assets/animations/core/theme.js"

local ANIMATION_MAP = {
  search = {
    css = ".assets/animations/search/search-animations.css",
    js  = ".assets/animations/search/browser-runtime.js"
  },
  quantum = {
    css = ".assets/animations/quantum/photon-animations.css",
    js  = ".assets/animations/quantum/photon-experiments.js"
  },
  gate = {
    css = ".assets/animations/quantum/photon-animations.css",
    js  = ".assets/animations/quantum/gate-animations.js"
  },
  gate3 = {
    css = ".assets/animations/quantum/photon-animations.css",
    js  = ".assets/animations/quantum/3gate-animations.js"
  },
  superdense = {
    css = ".assets/animations/quantum/photon-animations.css",
    js  = ".assets/animations/quantum/superdense-anim.js"
  },
  switch = {
    css = ".assets/animations/quantum/photon-animations.css",
    js  = ".assets/animations/quantum/switch-animations.js"
  },
  custom = {
    js  = ".assets/animations/custom-loader.js"
  }
}

local function rel_from_doc(abs_or_rel)
  local rel = abs_or_rel
  if quarto.project.directory ~= nil then
    rel = pandoc.path.make_relative(abs_or_rel, quarto.project.directory)
  end
  rel = rel:gsub("^%./", "")
  return rel
end

local function rel_to_project(path_from_project)
  local input = os.getenv("LECTURE_NOTES_INPUT_FILE") or rel_from_doc(quarto.doc.input_file or "")
  local dir = pandoc.path.directory(input)
  if dir == nil or dir == "" or dir == "." then
    return path_from_project
  end

  local depth = 0
  for part in string.gmatch(dir, "[^/]+") do
    if part ~= "." and part ~= "" then
      depth = depth + 1
    end
  end

  return string.rep("../", depth) .. path_from_project
end

local function has_format()
  return quarto.doc.is_format("html") or quarto.doc.is_format("revealjs")
end

local function collect_anim_topics(doc)
  local topics = {}
  pandoc.walk_block(pandoc.Div(doc.blocks), {
    Div = function(el)
      local anim = el.attributes["data-anim"]
      if anim and anim ~= "" then
        topics[anim] = true
      end
    end,
    RawBlock = function(el)
      if el.format == "html" then
        for anim in el.text:gmatch('data%-anim%s*=%s*["\']([^"\']+)["\']') do
          topics[anim] = true
        end
      end
    end
  })
  return topics
end

function Pandoc(doc)
  if not has_format() then
    return doc
  end

  local topics = collect_anim_topics(doc)

  -- Sunumlarda açık/koyu tema düğmesi animasyon olmasa da gerekir.
  local is_slides = quarto.doc.is_format("revealjs")
  if next(topics) == nil and not is_slides then
    return doc
  end

  local css_lines = {}
  local css_seen = {}
  local imports = {}
  local entries = {}

  local function add_css(path)
    if css_seen[path] then return end
    css_seen[path] = true
    table.insert(css_lines, string.format('<link rel="stylesheet" href="%s">', rel_to_project(path)))
  end

  -- Sıra deterministik olsun diye aile adlarına göre sıralanır.
  local names = {}
  for topic, _ in pairs(topics) do
    if ANIMATION_MAP[topic] then table.insert(names, topic) end
  end
  table.sort(names)

  if #names == 0 and not is_slides then
    return doc
  end

  add_css(CORE_CSS)
  for _, topic in ipairs(names) do
    local cfg = ANIMATION_MAP[topic]
    if cfg.css then add_css(cfg.css) end
    table.insert(imports, string.format('import { mount as mount_%s } from "%s";', topic, rel_to_project(cfg.js)))
    table.insert(entries, string.format('["%s", mount_%s]', topic, topic))
  end

  table.insert(doc.blocks, pandoc.RawBlock("html", table.concat(css_lines, "\n")))

  local script_body = string.format([[
import { initTheme } from "%s";
%s
initTheme();
for (const [name, mount] of [%s]) {
  for (const div of document.querySelectorAll('[data-anim="' + name + '"]')) {
    Promise.resolve(mount(div, div.dataset)).catch((err) => console.error("[anim:" + name + "]", err));
  }
}]], rel_to_project(CORE_THEME_JS), table.concat(imports, "\n"), table.concat(entries, ", "))

  table.insert(doc.blocks, pandoc.RawBlock("html", "<script type=\"module\">\n" .. script_body .. "\n</script>"))

  return doc
end
