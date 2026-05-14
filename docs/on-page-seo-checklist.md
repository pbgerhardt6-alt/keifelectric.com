# On-Page SEO Checklist

**Reference for every page built on offsite-growth.com and client sites.**
Apply before publishing. Mark items complete inline or track in the page audit log.

> **Astro note:** Items marked `[ASTRO]` are handled at the framework or layout level and don't require manual action per page. Items marked `[ASTRO — you supply]` mean Astro renders the tag but you still write the content.

---

## 1. Head & Metadata

- [ ] Title tag — 50–60 chars, primary keyword near the start `[ASTRO — you supply via frontmatter]`
- [ ] Meta description — 150–160 chars, keyword + benefit + soft CTA `[ASTRO — you supply via frontmatter]`
- [ ] Canonical URL set to prevent duplicates `[ASTRO — auto if configured]`
- [ ] Open Graph — `og:title`, `og:description`, `og:image (1200x630)`, `og:url`, `og:type` `[ASTRO — you supply via frontmatter]`
- [ ] Twitter Card — `summary_large_image`, title, description, image `[ASTRO — you supply via frontmatter]`
- [ ] `lang="en"` on `<html>` `[ASTRO — base layout]`
- [ ] Viewport meta tag `[ASTRO — base layout]`
- [ ] Favicon + `apple-touch-icon` `[ASTRO — base layout]`
- [ ] `<meta charset="utf-8">` `[ASTRO — base layout]`

---

## 2. URL Structure

- [ ] Slug under 60 chars
- [ ] Primary keyword in the slug
- [ ] Hyphens only — no underscores
- [ ] Lowercase only
- [ ] No stop words unless necessary
- [ ] Logical hierarchy — `/services/[slug]`, `/blog/[slug]`

---

## 3. Headings

- [ ] Exactly one H1 per page — contains primary keyword
- [ ] Logical H2 → H3 hierarchy — no skipped levels
- [ ] H2s use supporting keywords and questions from the cluster
- [ ] No keyword stuffing — write naturally

---

## 4. Copy & Body

- [ ] Primary keyword in the first 100 words
- [ ] Direct answer to the query in the first paragraph
- [ ] Length matches SERP average (within 20% of top-3)
- [ ] Short paragraphs — 1–4 sentences
- [ ] Readability at 8th–10th grade level
- [ ] Active voice preferred
- [ ] Bold key phrases sparingly

---

## 5. FAQ Section (every blog post)

- [ ] 4–8 questions sourced from People Also Ask + any keyword tool you're using
- [ ] Direct answers — 2–4 sentences each
- [ ] FAQ schema (JSON-LD) applied — **not handled by Astro, add manually**

---

## 6. Images

- [ ] Alt text describes image + keyword where natural `[ASTRO — you supply the text]`
- [ ] Filename is descriptive with hyphens — e.g. `emergency-plumber-atascadero.webp`
- [ ] WebP format, under 200 KB `[ASTRO Image component]`
- [ ] Width and height attributes specified (prevents CLS) `[ASTRO Image component]`
- [ ] `loading="lazy"` on below-fold images `[ASTRO Image component default]`
- [ ] Responsive `srcset` where needed `[ASTRO Image component]`
- [ ] Hero/featured image present for social sharing

---

## 7. Internal Links

- [ ] 3–5 internal links per post
- [ ] Links to related posts and relevant service pages
- [ ] Descriptive anchor text — no "click here" or "read more"
- [ ] Contextually placed in body copy
- [ ] Breadcrumbs on every page

---

## 8. External Links

- [ ] 2–3 external links to authoritative sources (.gov, .edu, major industry)
- [ ] Relevant to the topic
- [ ] Open in new tab with `rel="noopener"`
- [ ] `rel="nofollow"` on sponsored links

---

## 9. Schema Markup (JSON-LD in `<head>`)

> Astro does not generate schema. Add JSON-LD blocks manually per page type.

- [ ] Article schema on blog posts
- [ ] LocalBusiness schema — most specific subtype (Plumber, Contractor, etc.)
- [ ] Service schema on service pages
- [ ] FAQ schema wherever FAQ section exists
- [ ] BreadcrumbList schema on every page
- [ ] Organization schema site-wide (can live in base layout)
- [ ] Author/Person schema for bylines

---

## 10. E-E-A-T Signals

> Entirely content-level. Astro handles none of this.

- [ ] Author byline with name on every blog post
- [ ] Author bio with credentials
- [ ] Link to author's dedicated page
- [ ] Published date displayed
- [ ] "Last updated" date when refreshed
- [ ] Real stories, numbers, and opinions from the business voice
- [ ] Authoritative sources cited
- [ ] About page with full company credentials
- [ ] Contact page — real address, phone, hours

---

## 11. Accessibility

- [ ] Semantic HTML5 — `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`
- [ ] ARIA labels on interactive elements where needed
- [ ] Color contrast meets WCAG AA (4.5:1 for body text)
- [ ] Focus indicators visible on interactive elements
- [ ] Alt text on all images (empty `alt=""` for decorative)
- [ ] Descriptive link text
- [ ] Skip-to-content link for keyboard users

---

## 12. Mobile & Responsive

- [ ] Responsive layout `[ASTRO — your CSS, but Astro output is clean]`
- [ ] Touch targets minimum 48x48 px
- [ ] Body font minimum 16 px
- [ ] No horizontal scroll at any viewport
- [ ] No intrusive interstitials

---

## 13. Social Preview

- [ ] OG image — 1200x630, under 1 MB `[ASTRO — you supply via frontmatter]`
- [ ] Twitter Card image — 1200x600 `[ASTRO — you supply via frontmatter]`
- [ ] `og:description` is compelling — can differ from meta description

---

## 14. Conversion Elements (every page on offsite-growth.com)

> Originally tagged "service pages only" — removed that qualifier since nearly every page on this site is effectively a service page.

- [ ] Primary CTA above the fold
- [ ] Phone number with click-to-call (`tel:`)
- [ ] Multiple CTA placements throughout the page
- [ ] Trust signals — reviews, ratings, licenses, years in business
- [ ] Testimonials with names (photos where possible)
- [ ] Service area coverage listed
- [ ] Business hours displayed
- [ ] Physical address with embedded map

---

## 15. Long-Form Content (1500+ word posts)

- [ ] Table of contents with anchor links at the top
- [ ] Jump links for each H2
- [ ] Back-to-top button

---

## Astro quick-reference — what's covered vs. what you own

| Area | Astro handles | You handle |
|---|---|---|
| Charset, viewport, lang | Base layout | Nothing |
| Canonical URL | Auto if configured | Confirm config is set |
| Title, meta description | Renders the tag | Write the content in frontmatter |
| Open Graph / Twitter Card | Renders the tags | Write the content in frontmatter |
| Image optimization (WebP, lazy, srcset, dimensions) | Image component | Supply alt text and descriptive filenames |
| Sitemap | `@astrojs/sitemap` | Confirm plugin is active |
| Schema markup | Nothing | Add JSON-LD manually per page type |
| E-E-A-T | Nothing | Entirely your content |
| Internal links, FAQ, headings, copy | Nothing | Entirely your content |
| Conversion elements | Nothing | Entirely your content |
