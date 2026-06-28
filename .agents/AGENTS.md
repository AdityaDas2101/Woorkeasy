# Project Instructions for Antigravity

This file defines the project-specific rules, guidelines, and commands for the Woorkeasy project.

## Project Context
- **Framework**: Astro (v7.0.2)
- **Styling**: Tailwind CSS (v4.3.1) configured via `@tailwindcss/vite`
- **Language**: TypeScript (v6.0.3)
- **Design Tokens**: Standardized Vercel-inspired tokens located in `DESIGN.md` and configured as custom properties in `src/styles/global.css`.
- **Hosting**: Cloudflare Pages via Wrangler
- **Live URL**: https://woorkeasy.com

## Development Commands

Always use the following commands to manage the project:

- **Start Dev Server (Background)**:
  ```bash
  astro dev --background
  ```
- **Manage Dev Server**:
  - `astro dev status` - Check if the server is running.
  - `astro dev logs` - View the live server logs.
  - `astro dev stop` - Stop the background dev server.
- **Production Build**:
  ```bash
  npm run build
  ```
- **Preview Build**:
  ```bash
  npm run preview
  ```
- **Deploy**:
  ```bash
  npm run deploy
  ```

## Design and Style Guidelines

- Review and adhere to `DESIGN.md` for spacing, typography, and color palettes.
- All styles should be implemented using Tailwind CSS v4 utility classes or the design tokens defined in `src/styles/global.css`.
- Ensure dark mode support using class-based `@custom-variant dark` defined in `global.css`.
- Typography: `display-xl`, `display-lg`, `display-md`, `display-sm`, `body-lg`, `body-md`, `body-sm`, `caption-mono`
- Shadows: `shadow-level-1`, `shadow-level-2`, `shadow-level-3`
- Buttons: `btn-primary`, `btn-secondary`

## Architecture

### Layout Hierarchy
```
Layout.astro (base — SEO meta, OG, Twitter, JSON-LD, GA, AdSense)
├── Used directly by: index, about, privacy, terms, contact pages
└── ToolLayout.astro (adds breadcrumbs, SoftwareApplication JSON-LD, ad placements)
    └── Used by: all 30 tool pages (image/, pdf/, finance/, dev/, utility/)
```

### Key Components
| Component | File | Purpose |
| --------- | ---- | ------- |
| Base Layout | `src/layouts/Layout.astro` | HTML shell, SEO meta, OG, Twitter, JSON-LD, GA, AdSense, i18n, dark mode |
| Tool Layout | `src/components/ToolLayout.astro` | Tool page wrapper — breadcrumbs, BreadcrumbList + SoftwareApplication JSON-LD, ads, 2-col layout |
| Header | `src/components/Header.astro` | Sticky nav, mega-dropdowns (desktop), slide-out menu (mobile) |
| Footer | `src/components/Footer.astro` | 4-column link grid + About/Privacy/Terms/Contact bottom bar |
| Tool Card | `src/components/ToolCard.astro` | Homepage tool grid card |
| Ad | `src/components/Ad.astro` | AdSense wrapper |
| Request Modal | `src/components/RequestToolModal.astro` | User feedback/request form |
| Language Switcher | `src/components/LanguageSwitcher.astro` | i18n dropdown |

## Complete Tool Inventory (30 Tools)

### Image Tools (10) — `src/pages/image/`
`jpg-to-png`, `png-to-jpg`, `to-webp`, `webp-converter`, `heic-to-jpg`, `compress`, `crop`, `rotate`, `watermark`, `background-remover`

### PDF Tools (5) — `src/pages/pdf/`
`jpg-to-pdf`, `pdf-to-image`, `merge-pdf`, `split-pdf`, `rotate-pdf`

### Finance Tools (10) — `src/pages/finance/`
`ofx-to-excel`, `qfx-to-excel`, `excel-to-csv`, `csv-to-excel`, `csv-cleaner`, `csv-formatter`, `transaction-deduplicator`, `column-mapper`, `pdf-statement-to-excel`, `bank-statement-parser`

### Dev Tools (3) — `src/pages/dev/`
`base64`, `url-encode`, `json-formatter`

### Utility Tools (2) — `src/pages/utility/`
`character-counter`, `web-to-image`

### Static Pages
`index.astro` (homepage), `about.astro`, `privacy.astro`, `terms.astro`, `contact.astro`, `400/403/404/500/503.astro` (error pages)

## SEO Conventions

### Tool Pages (via ToolLayout.astro)
- **metaTitle**: Format — `"Tool Name Free - Keyword Description | Woorkeasy"`
- **description**: ~150 chars, includes primary keyword + "No upload, free, browser-based"
- **JSON-LD**: BreadcrumbList (Home > Category > Tool) + SoftwareApplication (price=0, operatingSystem=All)
- **Breadcrumb nav**: Visible `<nav aria-label="Breadcrumb">` at top
- **Canonical URL**: Auto-generated from pathname
- **Open Graph + Twitter Card**: Inherited from Layout.astro
- **Sitemap**: Auto-included via `@astrojs/sitemap`

### Static Pages (via Layout.astro)
- Use `title` prop: `"Page Name | Woorkeasy"`
- Use `description` prop: keyword-rich, ~150 chars
- JSON-LD: default WebPage schema auto-generated

### Sitemap Config (`astro.config.mjs`)
- Error pages (400/403/404/500/503) are excluded
- Homepage: priority 1.0, weekly
- Core pages (about/contact/privacy/terms): priority 0.8, monthly
- Tool pages: priority 0.7, weekly

## Adding a New Tool — Checklist

When adding a new tool page, you MUST update **all 4 locations**:

1. ✅ **Create page**: `src/pages/<category>/<tool-slug>.astro` using `ToolLayout`
2. ✅ **Homepage**: Add to `tools` array in `src/pages/index.astro`
3. ✅ **Header nav**: Add to `navDropdowns` in `src/components/Header.astro`
4. ✅ **Footer**: Add to `toolLinks` in `src/components/Footer.astro`

### ToolLayout Props
```astro
<ToolLayout
  title="Tool Display Name"
  metaTitle="Tool Name Free - Keyword Description | Woorkeasy"
  description="150-char SEO description with keywords. No upload, free, browser-based tool."
  heading="Tool Display Name"
  category="Image Tools | PDF Tools | Finance | Dev Tools | Utility"
>
```

## Documentation References

Consult these guides before working on related tasks:
- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
