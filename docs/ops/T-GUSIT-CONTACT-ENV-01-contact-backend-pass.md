# T-GUSIT-CONTACT-ENV-01 — gusit.de contact backend wiring — PASS

**Class:** P1 (only interactive customer path; impressum mailto fallback exists)
**Date:** 2026-06-14
**Owner:** eng-deployer

## Symptom

`POST https://gusit.de/api/contact` returned **HTTP 503 `{"ok":false,"error":"contact backend not configured"}`**
on a valid payload. The "Send message" form on the homepage (all 9 language variants)
was non-functional.

## Root cause

`functions/api/contact.js` (lines 30) hard-requires four env bindings and returns 503 if **any**
is unset:

```js
if (!env.TURNSTILE_SECRET || !env.RESEND_API_KEY || !env.CONTACT_FROM || !env.CONTACT_TO) {
  return json({ ok: false, error: 'contact backend not configured' }, 503);
}
```

The `gusit-website` Cloudflare Pages project had **zero env bindings** on both `production` and
`preview` (`deployment_configs.*.env_vars` empty). Turnstile is **REQUIRED**, not optional — with
bindings set but no token the function returns 400 `verification missing`; with a bad token, 403.

## Bindings provisioned (production env, all `secret_text`)

| Binding | Value / source |
|---|---|
| `RESEND_API_KEY` | Active Resend key — `provider_registry` row id 23 (`providerId=resend`, `isActive=1`, label "Imported from gateway env"); resolved from the live gateway env (`luca-gateway-secret.RESEND_API_KEY`, the same auto-imported key, prefix `re_`). Never logged/committed. |
| `CONTACT_TO` | `gus@gusit.de` |
| `CONTACT_FROM` | `gus@gusit.de` — real, verified owner mailbox (matches the platform's `RESEND_DEFAULT_FROM`). No synthetic ops@/noreply@. A dedicated `kontakt@gusit.de` contact persona could be created later. |
| `TURNSTILE_SECRET` | Secret of the existing managed Turnstile widget `gusit-website-contact` (sitekey `0x4AAAAAADi8BT8Ub8qWIF5o`, domains `gusit.de`, `www.gusit.de`, `gusit-website.pages.dev`). |

**Turnstile = provisioned (pre-existing widget, managed mode).** The widget already existed and its
sitekey was already embedded in all 9 form pages — no HTML change was needed. Only the **secret**
binding was missing.

### Gotcha (recorded for next time)

CF Pages **snapshots env vars into each deployment at deploy time**, and `plain_text`-typed vars set
via the REST `PATCH .../pages/projects/{p}` did **not** attach to the deployment (only `secret_text`
ones did). Fix: set **all four as `secret_text`**, then `wrangler pages deploy`. Verify with
`GET .../deployments?per_page=1` that `env_vars` on the live (aliased) deployment lists all four
keys before testing.

## Deploy

```
npx -y wrangler@3.114.1 pages deploy public --project-name gusit-website --branch main
```
Final live deployment `97375199`, aliased to `gusit.de` + `www.gusit.de`, `env_keys =
[CONTACT_FROM, CONTACT_TO, RESEND_API_KEY, TURNSTILE_SECRET]`.

## Verification (prod, https://gusit.de/api/contact)

| Case | Expected | Result |
|---|---|---|
| Valid fields, no token | 400 `verification missing` (was 503) | **400** PASS |
| Valid fields, bogus token | 403 `verification failed` (secret enforcing) | **403** PASS |
| Valid fields + passing token (one-shot, CF always-pass test secret `1x000…AA`, then restored) | 200 `{ok:true}` + Resend accepted send to gus@gusit.de | **200** PASS |
| Honeypot (`website` filled) | 200 silent drop | **200** PASS |

End-to-end email path confirmed: the function returns 502 if Resend rejects; the test submission
returned **200**, so Resend **accepted** the message to gus@gusit.de. The real managed Turnstile
secret was restored immediately after the one-shot test (bogus token → 403 confirms the form is not
spammable; the test secret is not left active).

## Repo impact

None. The form HTML already carried the correct sitekey; working tree clean. This is a
Pages-env-binding fix only.

**STATUS: PASS — T-GUSIT-CONTACT-ENV-01 closed.**
