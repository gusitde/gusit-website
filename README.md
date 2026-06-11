# gusit.de — Gus IT LLC website

Static multi-page site for the Gus IT LLC consultancy (EN at `/`, German at `/de/`), served by **Cloudflare Pages** (project `gusit-website`, account `e9248b727e65b3282b4c6c71c5e6fee4`).

## Architecture

- Plain static HTML/CSS/vanilla JS — no framework, no build step (company standard).
- `public/` is the deploy root. `public/_headers` carries CSP/HSTS; `public/_redirects` carries the 301 map.
- One Pages Function (`functions/api/contact.js`) handles the contact form: Turnstile verify → Resend email → best-effort platform webhook. Configured entirely via Pages env vars (`TURNSTILE_SECRET`, `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM`, `LEAD_WEBHOOK_URL`) — no hardcoded values.
- Fonts are self-hosted (GDPR: no Google Fonts). Icons are an inline SVG sprite. Analytics: Cloudflare Web Analytics (cookieless) only.

## Deploys

Every deploy is a git commit — never direct-upload from a workstation.

- Push to `main` → GitHub Actions deploys to production (`gusit.de`).
- Pull request → Actions deploys a preview to `<branch>.gusit-website.pages.dev`.

Secrets in GitHub Actions: `CLOUDFLARE_API_TOKEN` (scoped: Pages Write + Turnstile Write, registered in the Luca `provider_registry` as `cloudflare`/`pages-ci`), `CLOUDFLARE_ACCOUNT_ID`.

## Provenance

Replaces the unversioned direct-upload Pages deployment of 2026-06-11; the recovered original single-page site is preserved at `archive/baseline-2026-06-11.html`. Design/plan docs live in the Luca repo: `change-management/GUSIT-DE-WEBSITE-REDESIGN-PLAN-2026-06-11.md` and `GUSIT-DE-PHASE0-CLOUDFLARE-AUDIT-2026-06-11.md`.

## Copy rules (hard)

No persona/app/module counts, no speed claims, no unverifiable superlatives. Credential-led: NVIDIA Inception, Dell engagement, Unisys residency, Azure depth, a decade of AI engineering. German is native-quality Sie-Form. Phone numbers on the site are business DIDs only — never personal cells.
