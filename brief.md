# Landing Page Brief — Keif Electric

> **Note for future use:** This brief was written as both Adam's project deliverable AND the template foundation for future trades client briefs. Sections marked `<!-- STRUCTURAL -->` stay the same across clients. Sections marked `<!-- CLIENT-SPECIFIC -->` are the swap layer. When using this as a template for a new client, copy the file and update only the `CLIENT-SPECIFIC` sections.

**Version:** 1.0
**Status:** Draft — pending Adam's review on copy + missing inputs
**Reference:** `Services/landing-pages/SOP.md`
**Project location:** `Clients/keif-electric/deliverables/website/`

---

## 1. Project meta

<!-- CLIENT-SPECIFIC -->

| Field | Value |
|---|---|
| Client | Keif Electric |
| Owner | Adam |
| Trade | Residential electrician |
| Location | Atascadero, CA (SLO County) |
| Domain | keifelectric.com |
| Engagement | 90-day founder package (free) |
| Build target | Single-page Astro site at root URL |
| Launch target | TBD — pending brand assets, photos, copy approval, GBP verification |

---

## 2. Architectural decisions

<!-- STRUCTURAL -->

These are baseline decisions that apply to every trades landing page build. Only override per-client with explicit reason.

| Decision | Choice | Reason |
|---|---|---|
| Framework | Astro 5 | Static, fast, SEO-friendly, ships near-zero JS |
| Styling | Tailwind CSS via @astrojs/tailwind | Rapid styling, consistent design system |
| Hosting | Vercel free tier | Zero cost per client, fast deploys, good DX |
| Repo | GitHub, client-owned | Clean ownership, client retains everything |
| Domain | Client-owned, registered to client account | Avoid agency-as-domain-holder anti-pattern |
| Forms | HubSpot embedded form | Submissions land in CRM, source attribution works |
| Analytics | GA4 + Meta Pixel + Search Console | Required for case study measurement |
| Animation | Lenis (smooth scroll) + CSS + GSAP for hero only | Premium feel without JS bloat |
| Performance target | Lighthouse 98+ mobile across all four metrics | Fast site is part of the brand |

---

## 3. Brand identity

<!-- CLIENT-SPECIFIC -->

Pulled from `assets/brand-package/KE-BRAND-GUIDES-FINAL.pdf`.

### Colors

| Token | Hex | Usage |
|---|---|---|
| `--ink` | `#242021` | Primary text, hero background, dominant surface |
| `--rust` | `#884B26` | Secondary accent, warm contrast |
| `--orange` | `#F3981F` | Primary accent — CTAs, links, highlights |
| `--vermillion` | `#E95B2D` | Secondary accent — hover states, supporting highlights |

### Typography

- **Display:** Climate Crisis (heavy, condensed, all-caps headlines, signature feel)
- **Body:** Geist (full weight range — Thin to Black)

### Fonts to load

- Climate Crisis (display weight)
- Geist (Regular, Medium, Semibold, Bold)

Skip font weights not used in the design to keep page weight down.

### Logo files

`assets/logo/` — TODO: confirm files extracted from brand PDF or received separately

- Primary wordmark (KEIF ELECTRIC)
- Secondary lockups (KE monogram, K-spark icon)
- Variations: dark on light, light on dark
- File formats needed: SVG (preferred), PNG (fallback)

### Visual aesthetic

Workwear / blue-collar / heritage typography meets modern design discipline. The brand is designed to look good on a t-shirt — heavy, confident, considered. The site should feel like an extension of that — editorial, calm, photography-led where possible. Reference benchmark: `gardener.framer.media`.

### Brand language

- "Keif Electric" (not "KEIF ELECTRIC" in body copy unless intentional emphasis)
- "Adam" (first name) when referring to the owner — the brand is personal
- Avoid corporate language ("our company," "our team") — this is one person

---

## 4. Business basics

<!-- CLIENT-SPECIFIC -->

| Field | Value | Status |
|---|---|---|
| Business name | Keif Electric | ✅ |
| Owner | Adam [last name TODO] | ⚠️ Need last name |
| Phone | TODO | ⚠️ Get from Adam |
| Email | TODO — likely adam@keifelectric.com | ⚠️ Confirm with Adam |
| Address | Atascadero, CA (specific address TBD — service-area business) | ⚠️ Get street address for schema |
| License # | TODO — California C-10 | ⚠️ Get from Adam |
| Insurance carrier | TODO | ⚠️ Get from Adam |
| Hours | Monday-Friday, 9am-5pm | ✅ Confirmed (no emergency for now) |
| Years in trade | TODO | ⚠️ Get from Adam for owner story |

---

## 5. Services

<!-- CLIENT-SPECIFIC -->

Adam is residential-focused, no commercial. Mix of service calls for existing homes and new build work.

### Photogenic services (visual cards in services grid)

| Service | Short description (SEO-supportive line) |
|---|---|
| **EV Charger Installation** | Level 2 charging for Tesla, Rivian, Ford, and all electric vehicles in Atascadero, Paso Robles, and SLO County. |
| **Panel Upgrades & Replacements** | 100A and 200A residential service upgrades for older homes and renovations across the Central Coast. |
| **Recessed & Custom Lighting** | Recessed lighting, chandeliers, exterior and landscape lighting, and finish-quality fixture installation. |
| **New Build Wiring** | Full electrical wiring for new residential construction across SLO County, including pre-wire, rough-in, and trim. |

### Text-card services

| Service | Short description |
|---|---|
| **Outlet & Switch Installation** | New installations, GFCI/AFCI upgrades, USB outlets, dedicated circuits for appliances. |
| **Ceiling Fan Installation** | Fan installs and replacements, including fan-rated boxes and remote/smart controls. |
| **Troubleshooting & Diagnostics** | Flickering lights, tripping breakers, dead outlets — finding the root cause, not just the symptom. |
| **Service Calls** | Same-day availability for most non-emergency residential electrical issues across the Central Coast. |

### Architectural note

Per SOP §3.6, scaffold per-service routing in v1 (`/services/[slug]`) but don't build the pages. Future v1.5 work: dedicated landing pages for the top 2 highest-converting services (likely EV charger installation and panel upgrades).

---

## 6. Service area

<!-- CLIENT-SPECIFIC -->

Named cities for local SEO + LocalBusiness schema `areaServed`.

### Primary cities

- Atascadero
- Paso Robles
- Templeton
- Santa Margarita
- San Luis Obispo
- Morro Bay
- Cambria
- Pismo Beach
- Arroyo Grande
- Los Osos 
- Cayucos

### Geo coordinates (for schema)

Atascadero: 35.4894, -120.6707 (use as primary for `geo` field)

---

## 7. Section-by-section spec

This follows the SOP §2 playbook in order.

### 7.1 Header / nav (STRUCTURAL)

- Logo (KE monogram on dark, KEIF ELECTRIC wordmark on light)
- Phone number always visible, formatted readable, `tel:` link uses raw digits
- Secondary CTA: "Get a Quote" → scrolls to contact form
- Sticky on scroll with subtle background fill

### 7.2 Hero (CLIENT-SPECIFIC copy + photo, STRUCTURAL pattern)

**Visual treatment:** Large hero photo of Adam (when available) OR brand-led type treatment using Climate Crisis on dark `--ink` background with K-spark icon as visual anchor. For v1 launch with placeholder photography, lean on the brand treatment — it's stronger than stock.

**Headline draft:**
> Licensed Residential Electrician Serving Atascadero & SLO County

**Alternative owner-led version:**
> Adam. Residential Electrician. Atascadero.

**Subhead draft:**
> Owner-operated electrical work for homeowners and new builds. Finish-quality, fairly priced, no surprises.

**Primary CTA (mobile):** `📞 Call (805) XXX-XXXX`
**Primary CTA (desktop):** Same, plus secondary "Get a Free Quote" button

**Trust line directly below CTA:**
> California C-10 Licensed · Insured · Free Estimates

### 7.3 Trust strip (STRUCTURAL pattern, CLIENT-SPECIFIC copy)

Three trust signals, equal weight, subtle background:

1. **Licensed & Insured** — California C-10 Electrician
2. **Owner-Operated** — Every job done by Adam personally
3. **Upfront Pricing** — Clear quotes before any work begins

### 7.4 Owner story (CLIENT-SPECIFIC)

**Photo:** Adam on a job site or in his workspace. Large, centered. Not a small headshot.

**Bio (placeholder draft — Adam will rewrite/approve):**

> I started Keif Electric because I wanted to do residential electrical work the way I think it should be done — with care, with craftsmanship, and without surprises.
>
> Every job is done by me, personally. No subs, no handoffs. When you hire Keif Electric, you hire me.
>
> I'm based in Atascadero and serve homeowners and builders across SLO County. Whether it's a single ceiling fan or a full new-build wire, the work gets done to code, on time, and at the price we agreed on.

**Pull quote (designed treatment):**
> "Every job is done by me, personally. No subs, no surprises."

**TODO for Adam:** Personalize the bio — years in the trade, where he trained, why he started Keif specifically.

### 7.5 Why Keif (STRUCTURAL pattern, CLIENT-SPECIFIC titles)

Three differentiator cards, clean grid:

| Card | Title | Description |
|---|---|---|
| 1 | **Owner-Operated** | No subcontractors, no handoffs. Every job is done by Adam personally — the same person who quoted it. |
| 2 | **Finish-Quality Work** | Clean lines, neat panels, considered details. The kind of work you'd want in your own home. |
| 3 | **Upfront Pricing** | Clear written quotes before any work begins. No hidden fees, no surprise add-ons. |

### 7.6 Process (STRUCTURAL pattern, CLIENT-SPECIFIC details)

Three steps:

1. **Call or Request a Quote** — Tell us what's going on. Most estimates can be handled by phone or a quick site visit.
2. **We Show Up On Time** — Licensed, insured, and uniformed. You'll know exactly when to expect us.
3. **Clear Pricing Before Work Begins** — No surprises. We walk through the quote, then get to work — clean and up to code.

### 7.7 Phone CTA section (CLIENT-SPECIFIC)

Visually distinct, full-bleed, brand color background.

**Headline:**
> Available Monday to Friday

**Phone (large, dominant):**
> (805) XXX-XXXX

**Action language:**
> 9am to 5pm. Free estimates. Call Adam.

### 7.8 Services grid (STRUCTURAL pattern, CLIENT-SPECIFIC content)

See §5 for the full service list and SEO-supportive descriptions. Layout:

- Photogenic services (4): visual cards with photos
- Text services (4): smaller text cards below
- Each card title links to placeholder service page (v1.5 expansion)

### 7.9 Service Area (STRUCTURAL pattern, CLIENT-SPECIFIC cities)

**Headline:**
> Serving SLO County

**Subhead:**
> Licensed residential electrical work across the Central Coast.

**Cities (visual chips or grid):**
Atascadero · Paso Robles · Templeton · Santa Margarita · San Luis Obispo

**Edge case line:**
> Not in one of these cities? Give us a call — we travel for the right job.

### 7.10 Recent Projects (STRUCTURAL pattern, CLIENT-SPECIFIC photos)

**Section headline:**
> Recent Work

6-12 photo grid with light captions. Caption format: `[Service] — [City]`

**Examples:**
- Whole-home panel upgrade — Paso Robles
- EV charger install — Atascadero
- Recessed lighting retrofit — San Luis Obispo
- New build wiring — Templeton

**TODO:** Source 6-12 photos. Plan: 8-10 stock photos for v1 launch, swap to Adam's real work as he documents it.

### 7.11 FAQ (STRUCTURAL pattern, CLIENT-SPECIFIC answers)

FAQPage schema required.

| Question | Answer |
|---|---|
| Are you licensed and insured? | Yes. Keif Electric holds a California C-10 electrical contractor license and carries full liability and workers' compensation insurance. License number is displayed on every quote and invoice. |
| Do you offer free estimates? | Yes, for most residential jobs. For simple repairs we can often quote by phone. For larger projects like panel upgrades or EV charger installs, we'll come out and assess at no cost. |
| What areas do you serve? | Atascadero, Paso Robles, Templeton, Santa Margarita, and San Luis Obispo. If you're not sure, just call. |
| How do you price jobs? | Flat-rate pricing whenever possible. You'll get a clear written quote before any work begins — no hidden fees, no surprise add-ons. For troubleshooting, we charge a diagnostic fee that's applied to the repair if you move forward. |
| Do you pull permits? | Yes, when required by code. Panel upgrades, EV charger installs, and new circuits typically require permits — we handle the paperwork and inspections. |
| How soon can you come out? | For non-emergency work, we typically schedule within a few business days. We're available Monday to Friday, 9am to 5pm. |
| Do you install EV chargers? | Yes — Level 2 chargers for Tesla, Rivian, Ford, and all electric vehicles. We pull permits, handle inspection, and ensure your panel can support the load. |

### 7.12 Reviews (STRUCTURAL pattern, CLIENT-SPECIFIC content)

Curated row of 3-8 reviews. Designed to look intentional at any count.

**Per review:**
- Reviewer name
- Photo (if available, with consent)
- Source platform (Google / Yelp / Nextdoor)
- 2-3 sentence quote
- Star rating

**TODO:** Source 3-8 reviews from Adam's first GBP push. Plan: Adam asks 5 close-circle people during week 1 of GBP being verified, reviews come in within 7 days, integrated into site before launch.

### 7.13 Final CTA (STRUCTURAL pattern, CLIENT-SPECIFIC tone)

Full-bleed, brand color, single dominant action.

**Headline:**
> Need an Electrician?

**Subhead:**
> Free estimates. Licensed and insured. Call Adam.

**Primary CTA:** `📞 Call (805) XXX-XXXX`
**Secondary CTA:** `Get a Free Quote` (form anchor)

### 7.14 Footer (STRUCTURAL pattern, CLIENT-SPECIFIC NAP)

- KEIF ELECTRIC wordmark
- NAP: Atascadero, CA · (805) XXX-XXXX · adam@keifelectric.com
- License: California C-10 #XXXXXX
- Hours: Monday to Friday, 9am to 5pm
- Anchor links: Services, Service Area, About, FAQ, Contact
- Social: TBD (does Adam have Instagram for the brand yet?)
- Copyright + "Built by Offsite Growth" (with Adam's permission)

### 7.15 Mobile sticky bottom bar (STRUCTURAL)

- Two buttons: `📞 Call` (primary, larger) + `Get Quote` (secondary)
- Visible on scroll, hidden at very top of page
- 50-60px height
- Body padding-bottom adjusted when bar is visible

---

## 8. Schema markup (STRUCTURAL pattern, CLIENT-SPECIFIC content)

All schema validated with Google's Rich Results Test before deploy.

- **LocalBusiness + Electrician** schema — primary entity, NAP, hours, service area
- **Service** schema — one per service (8 total)
- **FAQPage** schema — auto-generated from §7.11
- **Person** schema — for Adam in the owner story section

Full JSON examples in SOP §3.2.

---

## 9. SEO

<!-- CLIENT-SPECIFIC -->

| Field | Value |
|---|---|
| Page title | Keif Electric \| Licensed Residential Electrician in Atascadero, CA |
| Meta description | Licensed, insured residential electrician serving Atascadero and SLO County. EV chargers, panel upgrades, lighting, new builds. Free estimates, upfront pricing. Owner-operated. |
| Canonical URL | https://keifelectric.com |
| OG image | TODO — design 1200x630 OG card using brand assets |
| OG title | Keif Electric — Residential Electrician in Atascadero |
| OG description | Same as meta description |
| Twitter card | summary_large_image |

### Target search queries

Primary:
- electrician atascadero
- residential electrician atascadero
- electrician paso robles
- electrician slo county

Secondary:
- ev charger installation atascadero
- panel upgrade paso robles
- recessed lighting installation slo
- new build electrician central coast

---

## 10. Conversion mechanics (STRUCTURAL)

### Primary conversion: phone calls

Click-to-call in header, hero, after every section, in phone CTA section, in footer, in mobile sticky bar. All `tel:` links formatted with raw digits.

### Secondary conversion: form submissions

HubSpot embedded form, fields:

| Field | Type | Required |
|---|---|---|
| Name | Text | Yes |
| Phone | Tel | Yes |
| ZIP code | Text (5 digit validation) | Yes |
| Service needed | Dropdown of services from §5 | Yes |
| Notes / details | Textarea | No |

### Tracking events

- Phone click → GA4 event `phone_click`
- Form submit → GA4 event `form_submit`
- Each service card click → GA4 event `service_click` with service name parameter

---

## 11. Animation spec (STRUCTURAL)

Per SOP §3.3.

- **Lenis** smooth scroll site-wide, respects `prefers-reduced-motion`
- **CSS** for fade-in on scroll, hover states, photo zoom
- **GSAP** for hero entrance only (sequenced reveal)
- Mobile gets simpler/no animation for perf + battery
- All animations gated by `prefers-reduced-motion: no-preference`

---

## 12. Outstanding items / blockers

<!-- CLIENT-SPECIFIC -->

### Need from Adam (blocks completion)

- [ ] License number
- [ ] Last name (for legal/footer if needed)
- [ ] Insurance carrier (optional, for trust copy)
- [ ] Phone number to use on site
- [ ] Email to use on site
- [ ] Street address (for schema — can use Atascadero, CA general for now)
- [ ] Years in trade (for owner story personalization)
- [ ] Owner story personalization (name, training, why he started Keif)
- [ ] 3-5 phone photos minimum (truck, headshot, recent work) — ASAP
- [ ] First 5 review names (for post-launch outreach)
- [ ] Social media accounts active? (Instagram?)
- [ ] Confirm secondary service area cities (Morro Bay, Cambria, etc.)

### Need from Peter (blocks build)

- [ ] Logo files extracted from brand PDF or received separately, dropped in `assets/logo/`
- [ ] HubSpot form created for Keif Electric, form ID captured
- [ ] GA4 property created (under Adam's Google account, ideally)
- [ ] Meta Pixel created (Adam's Meta account or Offsite Growth's)
- [ ] OG image designed (1200x630) using brand assets
- [ ] Stock photos sourced (8-10) for v1 launch — heritage/workwear aesthetic, no generic trades shots

### Decisions deferred to v1.5

- Per-service landing pages (top 2: EV charger, panel upgrades)
- Per-city landing pages (top 2-3: Atascadero, Paso Robles, +1)
- Photo refresh from real Adam work
- Reviews section repopulated with real reviews

### Decisions deferred to v2

- `/shop` page for merch (60+ days post-launch)
- Booking widget (if Adam moves to scheduled appointments)
- Blog (only if Adam commits to content cadence)

---

## 13. Acceptance criteria (STRUCTURAL)

Per SOP §5 (v1 acceptance). Build is not complete until:

- [ ] Lighthouse mobile 98+ across performance, a11y, best practices, SEO
- [ ] All schema validates with Google Rich Results Test
- [ ] Manual QA: iOS Safari, Android Chrome, desktop Chrome, desktop Safari
- [ ] `tel:` links open phone dialer on real iOS + Android device
- [ ] Form submits successfully to HubSpot, lands in correct contact record
- [ ] GA4 real-time view shows events firing during manual QA
- [ ] Meta Pixel loaded and firing
- [ ] All copy follows SOP §4 voice rules (no banned words, plain language)
- [ ] No stock photos in service cards or "team" sections
- [ ] NAP exactly matches GBP and other citations
- [ ] Routing scaffold exists for `/services/[slug]` and `/[city]` (not built, but structure supports)
- [ ] Mobile sticky bottom bar functional, doesn't cover content
- [ ] Reduced motion preference respected

---

## 14. Approval log

<!-- CLIENT-SPECIFIC -->

| Date | Item | Approver | Status |
|---|---|---|---|
| TBD | Brief reviewed | Adam | Pending |
| TBD | Copy reviewed | Adam | Pending |
| TBD | Visual mockup reviewed | Adam | Pending |
| TBD | Pre-launch site reviewed | Adam | Pending |
| TBD | Live site signed off | Adam | Pending |

---

## Notes for future template extraction

After Keif Electric launches and this brief proves out, extract the following into `Services/landing-pages/BRIEF-TEMPLATE.md`:

1. Section structure (numbered sections, ordering, the STRUCTURAL/CLIENT-SPECIFIC tagging system)
2. All STRUCTURAL sections wholesale
3. CLIENT-SPECIFIC sections converted to `{{placeholder}}` patterns or clear "fill in" markers
4. The outstanding items checklist (§12) as a reusable pre-build artifact
5. Acceptance criteria (§13) as a reusable post-build artifact

The CLIENT-SPECIFIC content from this Keif Electric brief becomes the "example" for how to fill out the template.
