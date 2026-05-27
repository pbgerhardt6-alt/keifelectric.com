import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://keifelectric.com',
  integrations: [sitemap()],
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
