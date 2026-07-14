# Claude Code Build Brief — Keif Electric Service Pages

**What this is:** The single build document for the five Keif Electric service pages. Everything Claude Code needs to execute in one pass or in phases. Read this top to bottom before starting.

**Companion files (the copy):**
- `keif-service-pages-strategy.md` — architecture, keyword map, cross-linking system, content model (the "why")
- `keif-ev-charger-page-copy.md`
- `keif-panel-page-copy.md`
- `keif-lighting-page-copy.md`
- `keif-troubleshooting-page-copy.md`
- `keif-newbuild-page-copy.md`

Each copy file contains the page copy plus per-page build notes in `[brackets]`. This brief is the umbrella; the copy files are the source of truth for page content.

---

## Repo & environment

- **Repo:** `github.com/pbgerhardt6-alt/keifelectric.com`
- **Local:** `~/offsite-growth/Clients/Keif-Electric/deliverables/website/`
- **Stack:** Astro + Tailwind, deployed via Vercel at keifelectric.com
- **Layout file:** `src/components/layout/BaseLayout.astro` (LocalBusiness schema and GA4 live here — do not duplicate)
- **Routing:** `/services/[slug]` scaffold already committed. Homepage already links to all eight service URLs (five will now resolve, three get repointed — see task 4)
- **Analytics:** GA4 `G-46WM4RFWW4` already installed in BaseLayout. New pages inherit it. Keep the `phone_click` event firing on all `tel:` links on the new pages (section-level attribution)

---

## Build tasks, in order

### Task 1 — Build the five service pages

Create these routes with the copy from the companion files:

| URL | Copy file | Priority |
|---|---|---|
| `/services/ev-charger` | keif-ev-charger-page-copy.md | 1 |
| `/services/panel` | keif-panel-page-copy.md | 2 |
| `/services/lighting` | keif-lighting-page-copy.md | 3 |
| `/services/troubleshooting` | keif-troubleshooting-page-copy.md | 4 |
| `/services/newbuild` | keif-newbuild-page-copy.md | 5 |

Can be done all at once or phased in this order. EV and panel are the priority pair and cross-link to each other, so if phasing, do those two together.

### Task 2 — Wire the cross-links

Use descriptive anchor text (never "click here" / "learn more" for in-body cross-links). The real-relationship link map:

| From page | To page | Anchor intent |
|---|---|---|
| ev-charger | panel | "we may need to upgrade your electrical panel first" |
| panel | ev-charger | "see EV charger installation" |
| troubleshooting | panel | "it may point to a panel that needs upgrading" |
| newbuild | panel | panel install in a build |
| newbuild | lighting | remodel lighting |

Do NOT create cross-links where no real job relationship exists (e.g. ev → lighting). Exact anchor phrasings are in each copy file.

Homepage already links down to all five pages via the service cards — verify those resolve after build.

### Task 3 — Schema per page

- **Every page:** `Service` schema + `FAQPage` schema (FAQ block is marked in each copy file)
- **Do not** re-add LocalBusiness — it stays in BaseLayout
- Validate every page in Google Rich Results Test before considering it done

### Task 4 — Fix the collapsed footer links

The footer currently links eight service URLs; three have no page under this plan. Repoint these three to the homepage services anchor:

- `/services/outlets` → `/#services`
- `/services/ceiling-fan` → `/#services`
- `/services/same-week` → `/#services`

These services still appear as homepage text cards. They just don't get standalone pages. (Outlets/switches, GFCI, and same-week language are folded into the troubleshooting page for indexing.)

### Task 5 — Validate & measure

- All schema passes Rich Results Test
- Lighthouse mobile re-run on each new page — target 90+ across all four metrics (SOP quality bar), mobile LCP under 2.5s
- `tel:` links open dialer on real iOS + Android
- `phone_click` GA4 event fires on the new pages (check GA4 real-time during QA)
- No page 404s; no orphan pages; every page has a working call CTA
- Submit updated sitemap to Search Console (sitemap generates at `/sitemap-index.xml`)

---

## Per-page requirements (apply to all five)

**Above the fold (mobile):** H1 with service + city, one-line subhead, tap-to-call button. The homeowner must confirm "yes this is the service I searched, yes they're local, here's how to call" without scrolling.

**CTA:** Single dominant action = call. Quote/email is always secondary. Do not put competing co-equal CTAs in the hero.

**Sticky mobile call bar:** Site already has the pattern — ensure it persists on the new pages.

**Depth:** Target 800–1,500 words of real content per page (EV, panel, troubleshooting are in range; lighting and newbuild are intentionally leaner but still substantive).

**Voice:** Plain, direct, no corporate jargon, no em dashes, no exclamation points. Matches Adam's existing homepage voice. First person ("I", not "we/our team") — he's a solo operator.

**Performance:** Mobile LCP under 2.5s. Any hero/job image optimized to WebP.

---

## Hard guardrails — do not violate

1. **No fabricated reviews, testimonials, or job captions.** Every page has a proof/photo section built as a stubbed placeholder. Leave it stubbed or hidden until Adam provides real jobs. Do not invent names, quotes, or city captions to fill it.

2. **Honest cost ranges stay ranges.** Panel ($3,500–5,500) and EV ($700–1,500) give real SLO County ranges. Never convert these to a fake precise quote.

3. **EV rebate section needs a live verify before publish.** The federal 30C EV charger credit expired June 30, 2026. The copy states that correctly. The PG&E / California rebate portion is marked `[VERIFY AT BUILD TIME]` — confirm current status and either describe the real current rebate or state plainly that none applies. Do not publish a stale or invented credit claim.

4. **No 24/7 / emergency language on the troubleshooting page.** Adam is Mon–Fri, no after-hours. "Same-week" and "non-emergency" phrasing is deliberate and accurate. Do not upgrade it to emergency service.

5. **One page, one job.** These pages target deeper long-tails than the homepage (Tesla Wall Connector, 200-amp cost, symptom searches). Don't duplicate homepage head-term targeting — that creates cannibalization.

---

## Separate, higher-priority issue (flag, don't bundle)

The **homepage reviews section is currently showing fabricated reviews** — three named reviewers (Sarah M., Mike T., Janet R.) with detailed quotes, plus a "5.0 average across Google, Nextdoor, and Yelp" claim. Adam has zero actual reviews. This is live on production.

This is an FTC exposure (fabricated testimonials) and it undermines the case study. It should be fixed independent of this service-page work — either removed or replaced with real reviews as they come in. Not part of the service-page build, but do not let it ship alongside new pages that also claim trust. Raise it with Peter before the next deploy if it's still live.

---

## Pre-build check

Before building, confirm with Peter / Adam:
- Adam has reviewed the copy, especially claims written in his voice: the flat diagnostic fee that applies toward the repair, "I'll come back and make it right," same-week scheduling, and the ADU mention on the newbuild page. These were inferred from the brief and his homepage voice — he should confirm they're accurate to how he actually works before they go live.

---

## Done =

- 5 pages live, all resolving, all cross-linked with descriptive anchors
- 3 collapsed footer links repointed to `/#services`
- Service + FAQPage schema on all 5, validated in Rich Results Test
- Lighthouse mobile 90+ on each, LCP under 2.5s
- GA4 `phone_click` firing on new pages
- Sitemap resubmitted
- No fabricated proof anywhere; rebate section verified; no emergency language
- Homepage fake-reviews issue raised with Peter (tracked separately)
