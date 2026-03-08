local function rel_from_project(abs_or_rel)
  local rel = abs_or_rel
  if quarto.project.directory ~= nil then
    rel = pandoc.path.make_relative(abs_or_rel, quarto.project.directory)
  end
  return rel:gsub("^%./", "")
end

local function rel_to_doc(path_from_project)
  local input = rel_from_project(quarto.doc.input_file or "")
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

local function resolve_stem_to_project_path(stem)
  if quarto.project.directory == nil then
    return nil
  end
  if not stem:match("^[%w%._%-]+$") then
    return nil
  end

  local root = quarto.project.directory:gsub("'", "'\\''")
  local s = stem:gsub("'", "'\\''")
  local cmd = "find '" .. root .. "' -type f \\( -name '" .. s .. ".md' -o -name '" .. s .. ".qmd' \\) | head -n 2"
  local p = io.popen(cmd)
  if p == nil then
    return nil
  end
  local out = p:read("*a")
  p:close()

  local matches = {}
  for line in out:gmatch("[^\r\n]+") do
    table.insert(matches, line)
  end

  if #matches ~= 1 then
    return nil
  end

  return rel_from_project(matches[1]):gsub("%.qmd$", ".md")
end

function Link(el)
  local is_wikilink = false
  if el.title == "wikilink" then
    is_wikilink = true
  end
  if not is_wikilink and el.classes ~= nil and el.classes:includes("wikilink") then
    is_wikilink = true
  end
  if not is_wikilink then
    return nil
  end

  local target = (el.target or ""):gsub("^%s+", ""):gsub("%s+$", "")
  -- In pipe tables, source may use [[path\|Label]] to avoid column split.
  -- Pandoc exposes this as target ending with "\"; normalize it back.
  target = target:gsub("\\$", "")
  if target == "" then
    return nil
  end

  local anchor = ""
  local hash_pos = target:find("#", 1, true)
  if hash_pos ~= nil then
    anchor = target:sub(hash_pos)
    target = target:sub(1, hash_pos - 1)
  end

  local is_explicit_relative = target:match("^%.%./") ~= nil or target:match("^%./") ~= nil
  local has_path = target:find("/", 1, true) ~= nil
  local has_ext = target:match("%.[^./]+$") ~= nil

  if not has_path and not has_ext then
    local resolved = resolve_stem_to_project_path(target)
    if resolved ~= nil then
      target = rel_to_doc(resolved)
      is_explicit_relative = true
      has_ext = true
    end
  end

  if not has_ext then
    target = target .. ".md"
    has_ext = true
  end

  if target:match("%.qmd$") then
    target = target:gsub("%.qmd$", ".md")
  end

  if target:match("%.md$") and (quarto.doc.is_format("html") or quarto.doc.is_format("revealjs")) then
    target = target:gsub("%.md$", ".html")
  end

  if has_path and not is_explicit_relative and target:sub(1, 1) ~= "/" then
    target = rel_to_doc(target)
  end

  el.target = target .. anchor
  return el
end
