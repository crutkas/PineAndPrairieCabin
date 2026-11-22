# Pine & Prairie Cabin

Website for Pine & Prairie Cabin (50 Harmony Court) at Suncadia Resort, Cle Elum, Washington.

Live at **https://pineandprairiecabin.com**

- `/` – marketing site (photos, amenities, area guide, booking via Suncadia)
- `/photos` – full photo tour
- `/guest/` – guest handbook (house, WiFi, TV, hot tub, things to do, checkout, contacts)

## Stack

[Astro](https://astro.build) static site, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # output in dist/
npm run preview   # serve the built site
npm run og        # regenerate public/og.png
```

## Where things live

| What | Where |
| --- | --- |
| Site name, address, booking links | `src/data/site.ts` |
| Amenities, bedrooms, FAQ, area, resort | `src/data/*.ts` |
| Owner note on the homepage | `src/data/owner.ts` |
| Homepage sections | `src/components/` |
| Guest handbook pages | `src/pages/guest/*.astro` |
| Guest handbook layout + styles | `src/layouts/Guest.astro` |
| Colors, fonts, global styles | `src/styles/global.css` |
| Logos | `public/brand/`, `src/components/Logo.astro` |
| Photos | `public/images/cabin/` |

Content that still needs owner confirmation is marked with `PLACEHOLDER` comments – search for it.