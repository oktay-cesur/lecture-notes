# Lecture Notes

Lecture notes written in Quarto. Topic-organized materials covering computer science, mathematics, and practical technical tools, designed for teaching and independent learning.

## Structure

```
courses/          ← Course syllabi (week ↔ topic mappings)
topics/           ← Course-independent topic modules
.filters/         ← Quarto Lua filters
```

- **topics/**: Each topic is a standalone module. The same topic can be referenced by multiple courses.
- **courses/**: Each course links to relevant topics through its own syllabus.

## Usage

```bash
# Local preview
quarto preview --profile local

# Render (CI/CD)
quarto render
```

## License

[CC BY-SA 4.0](LICENSE)
