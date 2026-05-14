# CLAUDE.md — Keif Electric

This is the Astro site for Keif Electric, a residential electrician in
Atascadero, CA. Built by Offsite Growth as a 90-day founder case study.

---

## Stack

- Framework: Astro 5
- Styling: Tailwind CSS via @astrojs/tailwind (NO inline styles unless overriding for a specific reason)
- Hosting: Vercel free tier
- Forms: HubSpot embedded form (form ID TBD — placeholder until Adam provides it)
- Analytics: GA4 + Meta Pixel (both stubbed in BaseLayout, activate on launch)
- Animation: Lenis (smooth scroll) + GSAP for hero entrance only + CSS for everything else
- Fonts: self-hosted from public/fonts/ (Geist + Climate Crisis TTFs)

---

## Brand tokens

Defined in src/styles/tokens.css and imported in BaseLayout.

```
--ke-ink:        #242021   primary bg, dominant surface
--ke-rust:       #884B26   warm secondary accent
--ke-orange:     #F3981F   primary accent, CTAs, links
--ke-vermillion: #E95B2D   hover states, supporting highlights
--ke-bone:       #F6F1E8   primary light text
--ke-sand:       #EDE8DE   secondary light surface
--ke-clay:       #C4A882   muted warm mid
```

Typography:
- Headlines: Climate Crisis (variable font, public/fonts/ClimateCrisis-Regular-VariableFont_YEAR.ttf)
- Body/UI: Geist (public/fonts/Geist-*.ttf — Regular, Medium, SemiBold, Bold, ExtraBold, Black)

Never use Google Fonts CDN. Fonts are self-hosted only.

---

## Design reference

The locked design lives at docs/design-reference.html. All visual decisions
are finalized there. Build to match it exactly. Do not introduce new patterns.

---

## Project structure

```
src/
  components/
    layout/
      BaseLayout.astro     -- html, head, schema, analytics, sticky bar
      Header.astro
      Footer.astro
    sections/
      Hero.astro
      Services.astro
      ServiceArea.astro
      OwnerStory.astro
      Reviews.astro
      FAQ.astro
      FinalCTA.astro
    ui/
      ServiceCard.astro    -- visual card (photo)
      ServiceCardText.astro -- text-only card
      FAQItem.astro
      ReviewCard.astro
  content/
    site.ts                -- all content as typed data (copy, services, FAQs, reviews)
  styles/
    tokens.css             -- CSS custom properties
    global.css             -- resets, base typography
  pages/
    index.astro            -- assembles all sections
    services/
      [slug].astro         -- scaffold only, no content yet
public/
  fonts/                   -- all TTF files
  assets/                  -- logos, icons, service photos
docs/
  design-reference.html    -- locked HTML design (source of truth)
  brief.md
  sop.md
  context.md
```

---

## Content (site.ts)

All copy, service list, FAQ, reviews, and service area cities live in
src/content/site.ts as typed constants. Components import from there.
Never hardcode copy inside components.

---

## Service photos

Served from public/assets/. Download and store locally -- do not use
Unsplash CDN URLs in production.

Current photos:
- service-ev-charger.jpg    (Unsplash: photo-1704474618942-ae933a8edd86)
- service-panel.jpg         (NEEDS REPLACEMENT -- current is Unsplash premium, not licensed)
- service-lighting.jpg      (Unsplash: photo-1609280070598-e1770c80b75c)
- service-newbuild.jpg      (Unsplash: photo-1556156653-e5a7c69cc263)

Download command:
curl -o public/assets/service-ev-charger.jpg "https://images.unsplash.com/photo-1704474618942-ae933a8edd86?auto=format&fit=crop&w=1200&q=85"

---

## Placeholders (fill before launch)

- Phone: (805) 286-0477 -- confirmed
- Email: adam@keifelectric.com -- confirmed
- License: C-10 #PENDING -- get from Adam
- HubSpot form ID: PENDING
- GA4 measurement ID: PENDING
- Meta Pixel ID: PENDING
- OG image: design 1200x630 using brand assets

---

## Schema (in BaseLayout)

Required before launch, validated with Google Rich Results Test:
- LocalBusiness + Electrician
- Service (one per service, 8 total)
- FAQPage (from FAQ content)
- Person (Adam Keif, owner)
- BreadcrumbList

Schema is already written in docs/design-reference.html -- port it
directly to BaseLayout, do not rewrite from scratch.

---

## Performance targets

- Lighthouse mobile 98+ across all four metrics
- LCP under 1.5s on 4G
- Total JS under 30KB (Lenis + GSAP hero only)
- Hero image under 150KB (WebP, responsive sizes)
- All images via Astro Image component (auto WebP, lazy, srcset)

---

## Animation scope

- Lenis: smooth scroll site-wide, respects prefers-reduced-motion
- GSAP: hero entrance only (eyebrow, title lines stagger, subhead, CTAs)
- CSS: fade-in on scroll for section titles and cards, hover states
- Mobile: CSS animations only, no GSAP on mobile
- All gated by prefers-reduced-motion: no-preference

---

## Routing scaffold (v1 -- do not build yet, structure only)

- /services/[slug]  -- per-service landing pages (v1.5)
- /[city-slug]      -- per-city landing pages (v1.5)

---

## Do not

- Use Google Fonts CDN
- Hardcode copy in components (use site.ts)
- Add npm packages not in this file without checking first
- Build /services/ or /city/ pages (scaffold only)
- Use stock photos in owner story or team sections
- Use em dashes anywhere in copy
- Use exclamation points in body copy
