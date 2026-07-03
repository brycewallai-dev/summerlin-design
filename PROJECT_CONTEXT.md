# Summerlin Design — Project Context

Read this file at the start of any session in this folder.

---

## The Business

Interior design practice based in Ladera Ranch, CA. The designer (Leslie Wall) has 10 years of residential interior design experience and is pivoting to add corporate commercial clients across Orange County.

**Current status**: 250+ completed residential projects, zero corporate clients to date.

## Rates & Pricing

- Design fee: $225–$250/hr (raised from $175)
- Procurement markup: 30% on all FF&E (furniture, fixtures, equipment)
- All projects priced using the complete fee structure document already created (not on the website — proposal-only)
- Do not publish dollar figures or rates anywhere on the public site

## Target Markets (Commercial Pivot)

- Corporate offices — Irvine, Newport Beach
- Medical and dental practices — South Orange County
- Hospitality — Dana Point, San Clemente
- Real estate developers — multi-unit, model units, common areas
- Property management companies

## Geography

30-mile radius from Ladera Ranch, CA. Covers: Irvine, Newport Beach, Mission Viejo, Aliso Viejo, Coto de Caza, Rancho Santa Margarita, Lake Forest, Dana Point, San Clemente, and surrounding areas.

## Revenue Targets

- Year 1: $100k net
- Year 2: $150k net
- Year 3: $200k net

## Active Priorities

1. Build corporate lead generation using Google Ads
2. Grow corporate-facing portfolio (currently zero — commercial sections are honest placeholders)
3. AI visualization tools for client presentations
4. Formal proposal and contract templates
5. Position and market for corporate clients from a residential-only starting point

## Website

- Live at: https://summerlin-design.vercel.app
- Deploy command: `vercel --yes --prod --name summerlin-design` (run from this folder)
- Formspree form IDs: replace `REPLACE_WITH_FORM_ID` in commercial.html, residential.html, contact.html
- GA4 ID: replace `G-XXXXXXXXXX` in all pages once account is set up
- Image slots: see IMAGES.md for every placeholder, expected filename, and dimensions

## Design System

- Font: Fraunces (display serif) + Inter (sans)
- Palette: strict black/white — `--black: #0a0a0a`, `--white: #ffffff`, `--ivory: #fafaf8`, `--charcoal: #1c1c1c`, `--gray-mid: #6b6b6b`
- No earth tones, terracotta, clay, brass, or sage anywhere
- Shared stylesheet: `css/style.css`
- Full-bleed hero on homepage, residential, commercial; dark page-header on portfolio, about, contact

## Key Constraints

- Never publish rates or dollar figures on the public site — pricing is proposal-only
- Commercial portfolio sections show honest "photos pending" labels until real projects are completed
- Residential section shows generic placeholder slots representing real 250+ completed projects
