# Project Instructions for Claude

This file defines the project-specific rules, guidelines, and commands for the Woorkeasy project.

## Project Context
- **Framework**: Astro (v7.0.2)
- **Styling**: Tailwind CSS (v4.3.1) configured via `@tailwindcss/vite`
- **Language**: TypeScript (v6.0.3)
- **Design Tokens**: Standardized Vercel-inspired tokens located in `DESIGN.md` and configured as custom properties in `src/styles/global.css`.

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

## Design and Style Guidelines

- Review and adhere to `DESIGN.md` for spacing, typography, and color palettes.
- All styles should be implemented using Tailwind CSS v4 utility classes or the design tokens defined in `src/styles/global.css`.
- Ensure dark mode support using class-based `@custom-variant dark` defined in `global.css`.

## Documentation References

Consult these guides before working on related tasks:
- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
