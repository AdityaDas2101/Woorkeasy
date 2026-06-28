## Development

Use `npx` to run Astro commands (astro is not installed globally):

```bash
npx astro dev --background        # Start dev server in background
npx astro dev stop                 # Stop the background server
npx astro dev status               # Check if server is running
npx astro dev logs                 # View server logs
npm run build                      # Production build
npm run preview                    # Preview production build
npm run deploy                     # Deploy to Cloudflare Pages
```

> **Port conflict?** If `astro dev` fails because port 4321 is in use, stop the old process first with `npx astro dev stop`, or run `Get-Process -Id (Get-NetTCPConnection -LocalPort 4321).OwningProcess | Stop-Process -Force` in PowerShell.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

---

## Project Overview

**Woorkeasy** is a free online tools website (https://woorkeasy.com) with 30+ browser-based tools for images, PDFs, finance, and developers. All processing is client-side — no files are ever uploaded to a server.

- **Framework**: Astro v7
- **Styling**: Tailwind CSS v4.3 via `@tailwindcss/vite`
- **Language**: TypeScript v6
- **Hosting**: Cloudflare Pages (Wrangler)
- **Sitemap**: `@astrojs/sitemap` (auto-generated, error pages excluded)
- **Design Tokens**: See `DESIGN.md` and `src/styles/global.css`

## Architecture

### Layout Hierarchy
```
Layout.astro (base — SEO meta, OG, Twitter, JSON-LD, GA, AdSense)
├── Used directly by: index.astro, about.astro, privacy.astro, terms.astro, contact.astro
└── ToolLayout.astro (adds breadcrumbs, SoftwareApplication JSON-LD, ad placements)
    └── Used by: all 30 tool pages in image/, pdf/, finance/, dev/, utility/
```

### Key Components
| Component | Purpose |
| --------- | ------- |
| `Layout.astro` | Base HTML with SEO, analytics, i18n, dark mode |
| `ToolLayout.astro` | Tool page wrapper — breadcrumbs, JSON-LD, ads, 2-col layout |
| `Header.astro` | Sticky nav with mega-dropdown menus (desktop) and slide-out panel (mobile) |
| `Footer.astro` | 4-column footer with all tool links + About/Privacy/Terms/Contact |
| `ToolCard.astro` | Card component for the homepage tools grid |
| `Ad.astro` | AdSense ad unit wrapper |
| `StickyAd.astro` | Sticky bottom ad bar |
| `RequestToolModal.astro` | Feedback/request form modal |
| `LanguageSwitcher.astro` | i18n language picker dropdown |

## Complete Tool Inventory (30 Tools)

### Image Tools (10) — `src/pages/image/`
jpg-to-png, png-to-jpg, to-webp, webp-converter, heic-to-jpg, compress, crop, rotate, watermark, background-remover

### PDF Tools (5) — `src/pages/pdf/`
jpg-to-pdf, pdf-to-image, merge-pdf, split-pdf, rotate-pdf

### Finance Tools (10) — `src/pages/finance/`
ofx-to-excel, qfx-to-excel, excel-to-csv, csv-to-excel, csv-cleaner, csv-formatter, transaction-deduplicator, column-mapper, pdf-statement-to-excel, bank-statement-parser

### Dev Tools (3) — `src/pages/dev/`
base64, url-encode, json-formatter

### Utility Tools (2) — `src/pages/utility/`
character-counter, web-to-image

### Static Pages
index.astro (homepage), about.astro, privacy.astro, terms.astro, contact.astro, 400/403/404/500/503.astro (error pages)

## SEO Conventions

Every tool page uses `ToolLayout.astro` which provides:
- **metaTitle**: Keyword-optimized, format: `"Tool Name Free - Keyword | Woorkeasy"`
- **description**: 150-char max, includes keywords + "No upload, free, browser-based"
- **JSON-LD**: BreadcrumbList + SoftwareApplication (price=0, operatingSystem=All)
- **Breadcrumb nav**: Home > Category > Tool Name
- **Canonical URL**: Auto-generated from `Astro.url.pathname`
- **Open Graph + Twitter Card**: Inherited from `Layout.astro`
- **Sitemap**: Auto-included via `@astrojs/sitemap` (error pages excluded)

Static pages (about, privacy, terms, contact) use `Layout.astro` directly with proper `title` and `description` props.

## Page Patterns

### Tool Pages (30 pages)
Every tool page follows this structure:
1. **Frontmatter**: JSDoc comment + `import ToolLayout` + component call with `title`, `metaTitle`, `description`, `heading`, `category` props
2. **Main slot**: Upload zone, controls, preview, error div — all with `id` attributes for JS hooks
3. **Info slot** (`<div slot="info">`): How-to (3 steps), Features (4-5 bullets), Why Use (2-3 paragraph), FAQs (3 Q&A), Related Tools (grid of links)
4. **FAQPage JSON-LD**: `<script type="application/ld+json">` with 3 FAQ entries matching the FAQs section
5. **Style block**: Component-scoped `<style>` with preview table styling
6. **Client-side script**: Full JS logic — all processing happens in the browser, no dependencies beyond standard browser APIs

### Static Pages (5 pages)
- `about.astro`, `privacy.astro`, `terms.astro`, `contact.astro`, `index.astro`
- Use `Layout.astro` directly with `title` and `description` props
- Content sections with `display-xl`/`display-sm` headings and `body-md` body text

## i18n System

Translations are managed in `src/i18n/translations.js`. The system works via:
- `localStorage` key `woorkeasy-lang` (default: `'en'`)
- A custom `language-changed` DOM event dispatched by `LanguageSwitcher.astro`
- `Layout.astro` applies translations on load and listens for language changes
- To add a new language, add entries to `translations.js` and update the `languages` array
- All `.astro` files keep their content in English; translations only cover nav, footer, and UI chrome

## Ad System

Ad placements use `Ad.astro` component with `slot`, `format`, and `layout` props:
- **Top banner**: `format="horizontal" layout="top"` — above tool content
- **Inline**: `format="rectangle" layout="inline"` — between tool and info section
- **Bottom**: `format="rectangle" layout="bottom"` — below info section
- **Sidebar (×2)**: `format="rectangle" layout="sidebar"` — sticky sidebar on desktop

AdSense is lazy-loaded on first user interaction (scroll/click/touch/keydown). See `Layout.astro` for the loader script.

## Adding a New Tool — Checklist

When adding a new tool page, update **all 4 locations**:

1. **Create page**: `src/pages/<category>/<tool-slug>.astro` using `ToolLayout`
2. **Homepage**: Add to `tools` array in `src/pages/index.astro`
3. **Header nav**: Add to `navDropdowns` in `src/components/Header.astro`
4. **Footer**: Add to `toolLinks` in `src/components/Footer.astro`

Additionally, update `README.md` → Tool Catalog table and `AGENTS.md` → Complete Tool Inventory section.

## Styling Rules

- Use Tailwind CSS v4 utility classes
- Design tokens are CSS custom properties in `src/styles/global.css`
- Dark mode: class-based toggle via `dark:` variant
- Typography classes: `display-xl`, `display-lg`, `display-md`, `display-sm`, `body-lg`, `body-md`, `body-sm`, `caption-mono`
- Shadow classes: `shadow-level-1`, `shadow-level-2`, `shadow-level-3`
- Buttons: `btn-primary`, `btn-secondary`
- See `DESIGN.md` for the full design token reference
