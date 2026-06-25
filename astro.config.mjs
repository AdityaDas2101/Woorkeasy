// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://woorkeasy.com',
  trailingSlash: 'never',

  integrations: [
    sitemap({
      filter(page) {
        // Exclude error pages from sitemap
        return !/\/40[034]$/.test(page) && !/\/50[03]$/.test(page);
      },
      serialize(item) {
        const url = item.url.replace('https://woorkeasy.com', '');

        // Homepage - highest priority
        if (url === '' || url === '/') {
          item.changefreq = ChangeFreqEnum.WEEKLY;
          item.priority = 1.0;
          return item;
        }

        // Core pages (about, contact, privacy, terms)
        if (/^\/(about|contact|privacy|terms)$/.test(url)) {
          item.changefreq = ChangeFreqEnum.MONTHLY;
          item.priority = 0.8;
          return item;
        }

        // Tool pages (image, pdf, finance, dev, utility)
        item.changefreq = ChangeFreqEnum.WEEKLY;
        item.priority = 0.7;
        return item;
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});