import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://keifelectric.com',
  // Serve clean, slash-less URLs (/services/panel) so the built pages,
  // the sitemap, and the per-page canonical tags all agree.
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
