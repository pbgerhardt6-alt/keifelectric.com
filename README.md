# Keif Electric — Website

Astro 5 site for Keif Electric, a licensed electrician based in San Luis Obispo, CA.
Built by [Offsite Growth](https://offsitegrowth.com).

---

## Stack

- **Framework:** Astro 5 (static output)
- **Styling:** Tailwind CSS + custom CSS properties
- **Hosting:** Vercel (free tier)
- **Fonts:** Self-hosted — Climate Crisis (display) + Geist (body)

---

## Running locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:4321`.

---

## Updating content

Almost all site copy lives in one file:

```
src/content/site.ts
```

This includes: phone, email, license number, nav links, services, reviews, FAQs, and service area cities. Edit here and the changes propagate everywhere automatically.

**Common updates:**

| What | Where |
|---|---|
| Phone / email | `site.ts` → top of file |
| License number | `site.ts` → `license` field |
| Services copy | `site.ts` → `services` and `servicesText` arrays |
| FAQ questions + answers | `site.ts` → `faqs` array |
| Service area cities (chips) | `src/components/sections/ServiceArea.astro` |
| Owner bio | `src/components/sections/OwnerStory.astro` |
| Hero headline + lead | `src/components/sections/Hero.astro` |

---

## Deploying

This repo is connected to Vercel. Every push to `main` triggers an automatic deploy.

```bash
git add .
git commit -m "your message"
git push
```

---

## Adding real photos

Service card photos live in `public/assets/`. Drop in replacement files with the same filenames:

```
public/assets/service-ev-charger.jpg
public/assets/service-panel.jpg
public/assets/service-lighting.jpg
public/assets/service-newbuild.jpg
public/assets/adam-keif-job-site.png   ← owner story photo
```

Recommended size: 1200px wide, compressed under 200KB each.

---

## Before launch checklist

- [ ] Real reviews collected and added to `site.ts` → `reviews` array
- [ ] Owner story photos swapped in
- [ ] OG image designed at 1200×630 and saved to `public/og-image.png`
- [ ] GA4 measurement ID added to `BaseLayout.astro` (see comment)
- [ ] Meta Pixel ID added to `BaseLayout.astro` (see comment)
- [ ] Footer hours confirmed to match Google Business Profile exactly
- [ ] NAP (name, address, phone) confirmed to match GBP exactly
- [ ] Schema validated at [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Lighthouse mobile score 98+ confirmed
- [ ] Domain `keifelectric.com` pointed to Vercel project

---

## Project structure

```
src/
  components/
    layout/       BaseLayout, Header, Footer
    sections/     Hero, Services, ServiceArea, OwnerStory, Reviews, FAQ, FinalCTA
    ui/           (card components)
  content/
    site.ts       all copy and data
  styles/
    tokens.css    brand colors and design tokens
    global.css    resets and base typography
  pages/
    index.astro   assembles all sections
public/
  fonts/          self-hosted TTF/WOFF2 files
  assets/         logos, icons, photos
docs/
  brief.md        original project brief
  design-reference.html  locked visual reference
  copy-for-seo-review.md all site copy for review
```

---

## Design tokens (brand colors)

| Token | Hex | Usage |
|---|---|---|
| `--ke-ink` | `#242021` | Primary background, dominant surface |
| `--ke-orange` | `#E95B2D` | Primary accent, CTAs |
| `--ke-amber` | `#F3981F` | Secondary accent, highlights |
| `--ke-bone` | `#F6F1E8` | Primary light text and background |
| `--ke-clay` | `#884B26` | Warm secondary |

Full token list in `src/styles/tokens.css`.

---

## Ownership

Code and content are the property of Adam Keif / Keif Electric.
Built and maintained by Offsite Growth during the 90-day founder engagement.
