# Woorkeasy

**All Tools, Zero Hassle.** — 30+ free online tools for images, PDFs, finance, and developers. Every tool runs entirely in the browser with no file uploads, no sign-ups, and no data collection.

🌐 **Live:** [https://woorkeasy.com](https://woorkeasy.com)

---

## Tech Stack

| Layer       | Technology                                              |
| ----------- | ------------------------------------------------------- |
| Framework   | [Astro](https://astro.build/) v7                        |
| Styling     | [Tailwind CSS](https://tailwindcss.com/) v4.3 via `@tailwindcss/vite` |
| Language    | TypeScript v6                                           |
| Hosting     | Cloudflare Pages (via Wrangler)                         |
| Sitemap     | `@astrojs/sitemap` (auto-generated)                     |
| Analytics   | Google Analytics (G-EW7GHQT4X4)                         |
| Ads         | Google AdSense (lazy-loaded)                            |

## Tool Catalog (30 Tools)

### Image Tools (10)
| Tool | Path |
| ---- | ---- |
| JPG to PNG | `/image/jpg-to-png` |
| PNG to JPG | `/image/png-to-jpg` |
| JPG/PNG to WebP | `/image/to-webp` |
| WebP to JPG/PNG | `/image/webp-converter` |
| HEIC to JPG | `/image/heic-to-jpg` |
| Compress Image | `/image/compress` |
| Crop Image | `/image/crop` |
| Rotate & Flip | `/image/rotate` |
| Add Watermark | `/image/watermark` |
| Remove Background | `/image/background-remover` |

### PDF Tools (5)
| Tool | Path |
| ---- | ---- |
| JPG to PDF | `/pdf/jpg-to-pdf` |
| PDF to Image | `/pdf/pdf-to-image` |
| Merge PDF | `/pdf/merge-pdf` |
| Split PDF | `/pdf/split-pdf` |
| Rotate PDF | `/pdf/rotate-pdf` |

### Finance Tools (10)
| Tool | Path |
| ---- | ---- |
| OFX to Excel | `/finance/ofx-to-excel` |
| QFX to Excel | `/finance/qfx-to-excel` |
| Excel to CSV | `/finance/excel-to-csv` |
| CSV to Excel | `/finance/csv-to-excel` |
| CSV Cleaner | `/finance/csv-cleaner` |
| CSV Formatter | `/finance/csv-formatter` |
| Transaction Deduplicator | `/finance/transaction-deduplicator` |
| Column Mapper | `/finance/column-mapper` |
| PDF Statement to Excel | `/finance/pdf-statement-to-excel` |
| Bank Statement Parser | `/finance/bank-statement-parser` |

### Dev Tools (3)
| Tool | Path |
| ---- | ---- |
| Base64 Encode/Decode | `/dev/base64` |
| URL Encode/Decode | `/dev/url-encode` |
| JSON Formatter | `/dev/json-formatter` |

### Utility Tools (2)
| Tool | Path |
| ---- | ---- |
| Character Counter | `/utility/character-counter` |
| Web to Image / PDF | `/utility/web-to-image` |

### Static Pages
| Page | Path |
| ---- | ---- |
| Homepage | `/` |
| About Us | `/about` |
| Privacy Policy | `/privacy` |
| Terms & Conditions | `/terms` |
| Contact | `/contact` |

## Project Structure

```
src/
├── assets/              # Static assets (SVGs, images)
├── components/
│   ├── Header.astro     # Sticky nav with mega-dropdown menus
│   ├── Footer.astro     # 4-column footer with all tool links
│   ├── ToolLayout.astro # Shared wrapper for all tool pages (SEO + ads + layout)
│   ├── ToolCard.astro   # Tool card component for homepage grid
│   ├── Ad.astro         # AdSense ad unit component
│   ├── StickyAd.astro   # Sticky bottom ad
│   ├── RequestToolModal.astro  # "Request a Tool" feedback modal
│   └── LanguageSwitcher.astro  # i18n language picker
├── i18n/
│   └── translations.js  # Multi-language translation strings
├── layouts/
│   └── Layout.astro     # Base HTML layout (SEO meta, OG, Twitter, JSON-LD, GA, AdSense)
├── pages/
│   ├── index.astro      # Homepage with hero, tool grid, FAQ, SEO content
│   ├── about.astro      # About Us
│   ├── privacy.astro    # Privacy Policy
│   ├── terms.astro      # Terms & Conditions
│   ├── contact.astro    # Contact form
│   ├── 400.astro        # Error pages
│   ├── 403.astro
│   ├── 404.astro
│   ├── 500.astro
│   ├── 503.astro
│   ├── image/           # 10 image tool pages
│   ├── pdf/             # 5 PDF tool pages
│   ├── finance/         # 10 finance tool pages
│   ├── dev/             # 3 developer tool pages
│   └── utility/         # 2 utility tool pages
└── styles/
    └── global.css       # Tailwind v4 config, design tokens, custom properties
```

## SEO Architecture

Every page has built-in SEO through two layout layers:

### `Layout.astro` (Base Layout)
All pages inherit from this. It provides:
- `<title>` tag and `<meta name="description">`
- Canonical URL (`<link rel="canonical">`)
- Open Graph tags (title, description, image, url, type, site_name)
- Twitter Card tags (summary_large_image)
- JSON-LD structured data (WebPage schema by default)
- Robots meta tag (`index, follow` or `noindex, nofollow`)
- Hreflang alternate links for i18n
- Theme color meta tags (light/dark)
- Google Analytics script
- AdSense lazy-loader

### `ToolLayout.astro` (Tool Page Wrapper)
All tool pages use this component, which wraps `Layout.astro` and adds:
- **BreadcrumbList JSON-LD** — `Home > Category > Tool Name`
- **SoftwareApplication JSON-LD** — with `applicationCategory`, `price: 0`, `operatingSystem: All`
- Custom `metaTitle` (keyword-optimized, separate from display `heading`)
- Breadcrumb navigation UI
- Ad placements (top banner, inline, bottom, sidebar)
- Two-column desktop layout (tool content + ad sidebar)

### Sitemap
Generated automatically by `@astrojs/sitemap` in `astro.config.mjs`. Error pages (400/403/404/500/503) are excluded. Homepage gets priority 1.0, core pages get 0.8, tool pages get 0.7.

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Cloudflare Pages
npm run deploy
```

## Adding a New Tool Page

1. Create `src/pages/<category>/<tool-slug>.astro`
2. Use `ToolLayout` with SEO props:
   ```astro
   ---
   import ToolLayout from '../../components/ToolLayout.astro';
   ---
   <ToolLayout
     title="Tool Name"
     metaTitle="Tool Name Free - Keyword Description | Woorkeasy"
     description="150-char SEO description with keywords. No upload, free, browser-based."
     heading="Tool Name"
     category="Category Name"
   >
     <!-- Tool UI here -->
   </ToolLayout>
   ```
3. Add the tool to **all 4 places**:
   - `src/pages/index.astro` → `tools` array
   - `src/components/Header.astro` → `navDropdowns` array
   - `src/components/Footer.astro` → `toolLinks` array
   - `README.md` → Tool Catalog table

## i18n System

Translations live in `src/i18n/translations.js`. A `woorkeasy-lang` key in `localStorage` (default `'en'`) controls the active language. The `LanguageSwitcher.astro` component dispatches a `language-changed` DOM event that `Layout.astro` listens for. Only UI chrome (nav, footer) is translated — all tool page content stays in English.

## Ad System

The `Ad.astro` component handles placements with props `slot`, `format`, and `layout`:
- **Top banner**: `format="horizontal" layout="top"` — above tool content
- **Inline**: `format="rectangle" layout="inline"` — between tool and info section
- **Bottom**: `format="rectangle" layout="bottom"` — below info section
- **Sidebar (×2)**: `format="rectangle" layout="sidebar"` — sticky sidebar on desktop

AdSense is lazy-loaded on first user interaction (scroll/click/touch/keydown). See `Layout.astro` for the loader script.

## Design System

See `DESIGN.md` for the full design token reference (colors, typography, spacing, shadows). All tokens are defined as CSS custom properties in `src/styles/global.css`.

Key design classes:
- Typography: `display-xl`, `display-lg`, `display-md`, `display-sm`, `body-lg`, `body-md`, `body-sm`, `caption-mono`
- Shadows: `shadow-level-1`, `shadow-level-2`, `shadow-level-3`
- Buttons: `btn-primary`, `btn-secondary`
- Dark mode: class-based via `dark:` variant

## License

All rights reserved. © Woorkeasy.
