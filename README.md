# msa-porto

The personal portfolio of Muhammad Syauqy Arrayyan — one static Astro monolith, styled like the Kali Linux desktop, deployed to Vercel. UI/UX designer, frontend developer, and creative media.

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

1. Replace placeholder SVGs in `public/projects/` with real screenshots/portfolio images
2. Add live/source links to project frontmatter when they exist (currently none)
3. The contact form is wired to Formspree (`myeggkpv`); test a real submission
4. Deploy: push to GitHub, import into Vercel (static output, no build overrides needed)

## Notes

- Boot screen replays once per visitor-local-day (stored in `localStorage`); skippable with ESC.
- Contact form submits via `@formspree/ajax` in-page (no redirect); field and form errors show inline.
- No backend, no database, no auth — a monolith by design. See `docs/adr/` and `CONTEXT.md`.
- Your CV files live in `public/projects/CV_Syauqy_*` — they're served publicly; move them out if you don't want them downloadable.
