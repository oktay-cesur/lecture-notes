function Div(el)
  if el.classes:includes("notes") then
    if not quarto.doc.is_format("revealjs") then
      return el.content
    end
  end
end
