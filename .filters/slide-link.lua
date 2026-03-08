local function is_presentation(meta)
  if meta.type == nil then
    return false
  end
  return pandoc.utils.stringify(meta.type) == "presentation"
end

local function slide_href_for_input(input_file)
  if input_file == nil or input_file == "" then
    return nil
  end

  local rel_input = input_file
  if quarto.project.directory ~= nil then
    rel_input = pandoc.path.make_relative(input_file, quarto.project.directory)
  end
  rel_input = rel_input:gsub("^%./", "")

  local stem = rel_input:gsub("%.qmd$", ""):gsub("%.md$", "")
  local slide_path = "slides/" .. stem .. ".html"
  local input_dir = pandoc.path.directory(rel_input)

  if input_dir == nil or input_dir == "" then
    input_dir = "."
  end

  if input_dir == "." then
    return slide_path
  end

  local depth = 0
  for part in string.gmatch(input_dir, "[^/]+") do
    if part ~= "." and part ~= "" then
      depth = depth + 1
    end
  end

  return string.rep("../", depth) .. slide_path
end

function Pandoc(doc)
  if not quarto.doc.is_format("html") then
    return doc
  end

  if quarto.doc.is_format("revealjs") then
    return doc
  end

  if not is_presentation(doc.meta) then
    return doc
  end

  local href = slide_href_for_input(quarto.doc.input_file)
  if href == nil or href == "" then
    return doc
  end

  local banner = pandoc.Div({
    pandoc.Para({
      pandoc.Link("Sunum Dosyası", href)
    })
  }, pandoc.Attr("", {"slide-link-banner"}))

  table.insert(doc.blocks, 1, banner)
  return doc
end
