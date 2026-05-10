# Brahim Ennahli — Personal CV Website

Personal CV website built as a static single-page site with no framework or build step. Designed to be deployable directly to GitHub Pages.

**Live:** https://nee7lii.github.io

---

## Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 — semantic, accessible |
| Styles | CSS3 — custom properties, Grid, Flexbox, `oklch` color |
| Interactivity | jQuery 3.7 — scroll animations, accordion, form validation, live clock |
| Components | React 18 + Babel standalone — skill bars, project cards, contact form |
| Hosting | GitHub Pages — static, no backend |

All dependencies are loaded from CDN. No npm, no bundler, no build step.

---

## Project structure

```
index.html                 # single page entry point
CSS/style.css              # full stylesheet
JS/jquery-interactions.js  # jQuery logic (scroll, accordion, clock, form bridge)
JS/components.jsx          # React components rendered into mount points
assets/                    # static assets (profile photo, etc.)
.gitignore
README.md
```

---

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static server to avoid CORS issues with the JSX file:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

---

## Deploy to GitHub Pages

1. Push to a public repository named `nee7lii.github.io` on the `main` branch.
2. Go to **Settings → Pages → Source** — set branch to `main`, folder to `/` (root), and save.
3. The site will be live at `https://nee7lii.github.io` within a minute.

---

## Design

- Dark editorial theme with a single electric cyan-mint accent (`#00e8c8`)
- Type pairing: **Bricolage Grotesque** (display) · **IBM Plex Sans** (body) · **JetBrains Mono** (mono/metadata)
- Subtle SVG film grain overlay, asymmetric grid, indexed section numbering
- Profile photo: drop a JPG into `assets/profile.jpg` — referenced by the `<img class="avatar-img">` in the hero

---

© 2026 — Brahim Ennahli
