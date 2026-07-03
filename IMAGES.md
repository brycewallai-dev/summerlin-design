# Summerlin Design — Image Placeholder Reference

This file is the source of truth for every image slot on the site.
Update it whenever a placeholder is added, changed, or filled.

Each entry shows: filename to use · minimum dimensions · orientation notes · what the shot should show.

---

## index.html — Homepage

| Slot | File path | Min dimensions | Notes |
|------|-----------|----------------|-------|
| Hero (full viewport) | `images/hero/homepage-hero.jpg` | 1920×1080px | Landscape · dark or moody interior tones · wide angle |
| Residential path card | `images/residential/residential-path.jpg` | 800×450px | 16:9 · living room or whole-home shot |
| Commercial path card | `images/commercial/commercial-path.jpg` | 800×450px | 16:9 · office or hospitality interior |

---

## commercial.html — Commercial Page

| Slot | File path | Min dimensions | Notes |
|------|-----------|----------------|-------|
| Hero (full viewport) | `images/commercial/commercial-hero.jpg` | 1920×1080px | Landscape · polished corporate or hospitality interior · dark/moody |
| Problem intro (split layout) | `images/commercial/office-detail.jpg` | 800×600px | 4:3 · close-up office interior detail |
| Project card — Offices | `images/commercial/offices.jpg` | 800×600px | 4:3 · corporate office interior |
| Project card — Medical/Dental | `images/commercial/medical.jpg` | 800×600px | 4:3 · medical or dental practice interior |
| Project card — Hospitality | `images/commercial/hospitality.jpg` | 800×600px | 4:3 · hotel or restaurant interior |
| Project card — Developers | `images/commercial/developers.jpg` | 800×600px | 4:3 · model unit or common area |

---

## residential.html — Residential Page

| Slot | File path | Min dimensions | Notes |
|------|-----------|----------------|-------|
| Hero (full viewport) | `images/residential/residential-hero.jpg` | 1920×1080px | Landscape · living room or kitchen · warm and layered |
| Approach section (split layout) | `images/residential/approach.jpg` | 800×600px | 4:3 · residential interior detail |
| Service card — Single Room | `images/residential/single-room.jpg` | 800×600px | 4:3 · living room, bedroom, or dining room |
| Service card — Kitchen & Bath | `images/residential/kitchen-bath.jpg` | 800×600px | 4:3 · kitchen or bathroom renovation |
| Service card — Full Home | `images/residential/full-home.jpg` | 800×600px | 4:3 · whole-home interior |
| Service card — New Build | `images/residential/new-build.jpg` | 800×600px | 4:3 · new construction interior |

---

## portfolio.html — Portfolio Page

### Residential grid (250+ real projects — add photos as available)

| Slot | File path | Min dimensions | Notes |
|------|-----------|----------------|-------|
| Residential photo 1 | `images/residential/r1.jpg` | 800×600px | 4:3 · living room |
| Residential photo 2 | `images/residential/r2.jpg` | 800×600px | 4:3 · primary suite |
| Residential photo 3 | `images/residential/r3.jpg` | 800×600px | 4:3 · kitchen renovation |
| Residential photo 4 | `images/residential/r4.jpg` | 800×600px | 4:3 · open plan living |
| Residential photo 5 | `images/residential/r5.jpg` | 800×600px | 4:3 · full home |
| Residential photo 6 | `images/residential/r6.jpg` | 800×600px | 4:3 · new build |

### Corporate Offices grid (no projects yet — placeholders pending first client)

| Slot | File path | Min dimensions | Notes |
|------|-----------|----------------|-------|
| Office photo 1 | `images/portfolio/offices/o1.jpg` | 800×600px | 4:3 · first corporate office project |
| Office photo 2 | `images/portfolio/offices/o2.jpg` | 800×600px | 4:3 · second office project |
| Office photo 3 | `images/portfolio/offices/o3.jpg` | 800×600px | 4:3 · third office project |

### Medical & Dental grid (no projects yet)

| Slot | File path | Min dimensions | Notes |
|------|-----------|----------------|-------|
| Medical photo 1 | `images/portfolio/medical-dental/m1.jpg` | 800×600px | 4:3 · first medical/dental project |
| Medical photo 2 | `images/portfolio/medical-dental/m2.jpg` | 800×600px | 4:3 · second project |
| Medical photo 3 | `images/portfolio/medical-dental/m3.jpg` | 800×600px | 4:3 · third project |

### Hospitality grid (no projects yet)

| Slot | File path | Min dimensions | Notes |
|------|-----------|----------------|-------|
| Hospitality photo 1 | `images/portfolio/hospitality/h1.jpg` | 800×600px | 4:3 · first hospitality project |
| Hospitality photo 2 | `images/portfolio/hospitality/h2.jpg` | 800×600px | 4:3 · second project |
| Hospitality photo 3 | `images/portfolio/hospitality/h3.jpg` | 800×600px | 4:3 · third project |

### Developer & Multi-Unit grid (no projects yet)

| Slot | File path | Min dimensions | Notes |
|------|-----------|----------------|-------|
| Developer photo 1 | `images/portfolio/developers/d1.jpg` | 800×600px | 4:3 · first developer project |
| Developer photo 2 | `images/portfolio/developers/d2.jpg` | 800×600px | 4:3 · second project |
| Developer photo 3 | `images/portfolio/developers/d3.jpg` | 800×600px | 4:3 · third project |

---

## about.html — About Page

| Slot | File path | Min dimensions | Notes |
|------|-----------|----------------|-------|
| Leslie Wall portrait | `images/about/leslie-wall.jpg` | 600×800px | 3:4 portrait · sticky left column · professional but approachable |

---

## contact.html

No images.

---

## How to add a photo

1. Drop the file into the folder at the path listed above.
2. Open the corresponding HTML file and find the `<!-- ✏️ Replace with: ... -->` comment.
3. Uncomment the `<img>` tag (remove `<!-- ` and ` -->`).
4. Delete the placeholder text label below it.
5. Redeploy: `vercel --yes --prod --name summerlin-design`
6. Update this file: mark the slot as filled and add a short description of the actual shot.
