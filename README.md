# msa-porto

A personal developer portfolio — one static monolith built with Astro, styled like the Kali Linux desktop, deployed to Vercel.

## Project structure

```text
/
├── docs/adr/                 # architectural decisions (0001-0003)
├── public/projects/          # project images/screenshots
├── src/
│   ├── components/           # BootScreen, Nav, ProjectCard
│   ├── content/
│   │   └── projects/         # one Markdown file per project
│   ├── layouts/Base.astro    # shell: boot screen, nav, footer
│   ├── pages/
│   │   ├── index.astro       # homepage sections
│   │   ├── experience.astro  # orgs, extracurriculars, volunteering
│   │   └── projects/[slug].astro
│   └── styles/global.css     # Kali design system
├── CONTEXT.md                # domain glossary
└── astro.config.mjs
```

## Commands

| Command                   | Action                                       |
| :------------------------ | :------------------------------------------- |
| `npm install`             | Installs dependencies                        |
| `npm run dev`             | Dev server at `localhost:4321`               |
| `npm run build`           | Build production site to `./dist/`           |
| `npm run preview`         | Preview the production build locally         |

## Content model

Each project is a Markdown file in `src/content/projects/` with frontmatter:

```yaml
title, category (software|design|media), role, tech[], type (team|individual),
link (optional), source (optional), summary, images[], date, featured
```

Body: images/screenshots in the `gallery`, then a short-to-medium description
under `## ` headings (problem → what I did → results).

## To-do before going live

1. Replace sample projects in `src/content/projects/` with real work
2. Replace placeholder SVGs in `public/projects/` with real screenshots
3. Write the real about paragraph in `src/pages/index.astro`
4. Replace `https://formspree.io/f/your-form-id` in `src/pages/index.astro` with a real Formspree form ID
5. Fill real entries on `src/pages/experience.astro` and the education timeline in `src/pages/index.astro`
6. Deploy: `git init && git add . && git commit`, push to GitHub, import into Vercel (static output, no build overrides needed)

## Notes

- Boot screen replays once per visitor-local-day (stored in `localStorage`); skippable with ESC.
- No backend, no database, no auth — a monolith by design. See `docs/adr/` and `CONTEXT.md`.
