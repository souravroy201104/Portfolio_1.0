# Public assets

Place your static assets here:

| File              | Purpose                                              |
|-------------------|------------------------------------------------------|
| `favicon.svg`     | SVG favicon (already included — customise as needed) |
| `favicon.ico`     | Legacy ICO favicon (generate from favicon.svg)       |
| `og-image.png`    | OpenGraph social share image (1200×630 px)           |
| `avatar.jpg`      | Your profile photo (used in About section)           |
| `resume.pdf`      | Your CV / résumé (link from Hero or Navbar)          |

## Generating a favicon.ico

```bash
# Using ImageMagick:
convert -background none public/favicon.svg -resize 32x32 public/favicon.ico

# Or use an online converter:
# https://favicon.io/favicon-converter/
```
