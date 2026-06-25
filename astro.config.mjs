// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://woorkeasy.com',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      serialize(item) {
        item.changefreq = 'weekly';
        item.priority = item.url === 'https://woorkeasy.com/' ? 1.0 : 0.8;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
