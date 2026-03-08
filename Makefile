.PHONY: clean preview render-all render-file preview-file render-slide

clean:
	./.scripts/local-quarto.sh clean

preview:
	./.scripts/local-quarto.sh preview

render-all:
	./.scripts/local-quarto.sh render-all

render-file:
	@test -n "$(FILE)" || (echo "ERROR: FILE is required. Example: make render-file FILE=topics/foundations/intro.md or FILE=topics/search/arama-algoritmalari-animasyon.qmd" >&2; exit 1)
	./.scripts/local-quarto.sh render-file "$(FILE)"

preview-file:
	@test -n "$(FILE)" || (echo "ERROR: FILE is required. Example: make preview-file FILE=topics/foundations/intro.md or FILE=topics/search/arama-algoritmalari-animasyon.qmd" >&2; exit 1)
	./.scripts/local-quarto.sh preview-file "$(FILE)"

render-slide:
	@test -n "$(FILE)" || (echo "ERROR: FILE is required. Example: make render-slide FILE=topics/foundations/intro.md or FILE=topics/search/arama-algoritmalari-animasyon.qmd" >&2; exit 1)
	./.scripts/local-quarto.sh render-slide "$(FILE)"
