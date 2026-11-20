# Andika Kristanto — Portfolio

Single-page portfolio built with Vue 3 + Vite. No UI library, no router.

## Run it

Requires Node 20.19+ (`.nvmrc` pins Node 20).

```bash
nvm use            # switches to Node 20
npm install
npm run dev        # http://localhost:5173
npm run build      # static build → dist/ (plain HTML + CSS + ~2 KB JS, no Vue runtime)
npm run preview    # serve the built dist/ locally
```

## Edit content

All text lives in **`src/data/profile.js`**: name, tagline, about, skills, journey chapters (story + skill chips), contact. Components only read from it.

Journey chips: `known` = skills carried over (grey), `new` = skills picked up in that chapter (accent, shown with `+`).

## Structure

```
src/
├─ data/profile.js
├─ components/
│  ├─ layout/    NavBar, AppFooter
│  ├─ sections/  HeroSection, AboutSection, SkillsSection, JourneySection, ContactSection
│  └─ ui/        BaseButton, SkillChip, JourneyRail, JourneyStep
├─ enhance.js     ← all interactivity, plain JS (theme, menu, active link, chapter focus, copy email)
├─ main.js        ← dev entry: Vue renders the page, then enhance()
├─ entry-server.js / entry-static.js  ← production pre-render + its JS entry
└─ styles/global.css   ← design tokens (light + dark)
```

## How the build works

Vue is only a templating tool here. In dev, Vue renders the page live so hot reload works. `npm run build` (`scripts/build.mjs`) renders the components to static HTML at build time and ships only `src/enhance.js`, so the deployed site is plain HTML, CSS and a tiny script. Because behavior lives in `enhance.js` for both modes, components contain markup only, hooked up via `data-*` attributes.

## Deploy (GitHub Pages)

Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.

One-time setup on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

- Repo named `<username>.github.io` → site at `https://<username>.github.io/`
- Any other repo name → `https://<username>.github.io/<repo>/` (works as-is; asset paths are relative)

Manual re-deploy: **Actions → Deploy to GitHub Pages → Run workflow**.

