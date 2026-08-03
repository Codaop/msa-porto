# AGENTS.md

Repo-local guidance for OpenCode agents working in this repository.

## Current state

- A single static Astro monolith: a Kali-styled personal portfolio (see `CONTEXT.md` and `docs/adr/`).
- Content model: Markdown files in `src/content/projects/` (frontmatter: title, category, role, tech, type, link/source, summary, images, date, featured).
- Stack: Astro 5 (Node >= 18.17), static output, no backend, no database. Deploy target: Vercel (free tier).
- Not yet a git repo. Do not scaffold microservices — despite the directory name, this is a monolith.
- 41 skills from [mattpocock/skills](https://github.com/mattpocock/skills) are installed at `.agents/skills/`, tracked by `skills-lock.json` at the repo root. Reinstall/update with `npx skills@latest add mattpocock/skills` (add `--yes` to skip the prompt).

## Commands

- `npm run dev` — dev server
- `npm run build` — production build to `./dist/`
- `npm run preview` — preview the production build

## Skills gotchas

- `setup-matt-pocock-skills` must be run once before first use of the other engineering skills: it writes `docs/agents/*` and adds an `## Agent skills` block to `AGENTS.md`.
- Several installed skills are deprecated upstream (e.g. `design-an-interface`, `qa`, `request-refactor-plan`, `ubiquitous-language`) or in-progress — prefer the `engineering/*` ones (`implement`, `tdd`, `to-spec`, `research`, etc.).
- Many skills assume `CONTEXT.md` / `docs/adr/` exist and an issue tracker is configured; until `setup-matt-pocock-skills` has run, they will have nothing to read and may ask.

## When starting work

- Confirm the intended stack with the user before scaffolding (no package manager or framework is chosen yet).
- If creating a git repo, follow the user's preferred commit/branch conventions.
- Update this file as the project structure becomes concrete (entrypoints, build/test/lint commands, deploy flow).

## Agent skills

### Issue tracker

Issues, specs, and tickets live as markdown files under `.scratch/<feature>/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Default five canonical roles: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
