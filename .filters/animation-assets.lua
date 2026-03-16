local ANIMATION_MAP = {
  search = {
    css = ".assets/animations/search/search-animations.css",
    js  = ".assets/animations/search/browser-runtime.js",
    mount = "mountSearchAnimations"
  },
  quantum = {
    css = ".assets/animations/quantum/photon-animations.css",
    js  = ".assets/animations/quantum/photon-experiments.js",
    mount = "mountQuantumAnimations"
  },
  gate = {
    css = ".assets/animations/quantum/photon-animations.css",
    js  = ".assets/animations/quantum/gate-animations.js",
    mount = "mountGateAnimations"
  },
  gate3 = {
    css = ".assets/animations/quantum/photon-animations.css",
    js  = ".assets/animations/quantum/3gate-animations.js",
    mount = "mountGate3Animations"
  },
  superdense = {
    css = ".assets/animations/quantum/photon-animations.css",
    js  = ".assets/animations/quantum/superdense-anim.js",
    mount = "mountSuperdenseAnimations"
  },
  custom = {
    js  = ".assets/animations/custom-loader.js",
    mount = "mountCustomAnimations"
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
  local input = rel_from_doc(quarto.doc.input_file or "")
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
    end
  })
  return topics
end

function Pandoc(doc)
  if not has_format() then
    return doc
  end

  local topics = collect_anim_topics(doc)

  if next(topics) == nil then
    return doc
  end

  local css_lines = {}
  local js_lines = {}
  local mounts = {}

  for topic, _ in pairs(topics) do
    local cfg = ANIMATION_MAP[topic]
    if cfg then
      if cfg.css then
        table.insert(css_lines, string.format('<link rel="stylesheet" href="%s">', rel_to_project(cfg.css)))
      end
      table.insert(js_lines, string.format('import { %s } from "%s";', cfg.mount, rel_to_project(cfg.js)))
      table.insert(mounts, string.format("%s();", cfg.mount))
    end
  end

  if #js_lines == 0 then
    return doc
  end

  if #css_lines > 0 then
    local css_block = pandoc.RawBlock("html", table.concat(css_lines, "\n"))
    table.insert(doc.blocks, css_block)
  end

  local script_body = table.concat(js_lines, "\n  ") .. "\n  " .. table.concat(mounts, "\n  ")
  local script_block = pandoc.RawBlock("html", "<script type=\"module\">\n  " .. script_body .. "\n</script>")
  table.insert(doc.blocks, script_block)

  return doc
end
