import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { execFileSync } from 'node:child_process';
import { statSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = dirname(fileURLToPath(import.meta.url));

// Map a sitemap URL back to the .astro file that produced it, so each entry
// can carry an honest lastmod. Without lastmod every URL looks equally stale
// to Google's recrawl scheduler, which matters here: the service pages have
// been sitting in the crawl queue undiscovered-then-uncrawled since July.
function sourceFileFor(url) {
  const path = new URL(url).pathname.replace(/^\/|\/$/g, '');
  const candidates = path === ''
    ? ['src/pages/index.astro']
    : [`src/pages/${path}.astro`, `src/pages/${path}/index.astro`];
  return candidates.map(c => join(root, c)).find(existsSync);
}

// Layout components that render into every page. A change here changes the
// output HTML of all pages, so they set a floor on every lastmod. Without
// this the homepage would claim May 14 despite its schema changing Jul 30.
const SHARED = [
  'src/components/layout/BaseLayout.astro',
  'src/components/layout/Header.astro',
  'src/components/layout/Footer.astro',
].map(f => join(root, f));

// Prefer the last commit date for the file. Falls back to mtime when git
// history is unavailable (for example a shallow CI checkout).
function lastModified(file) {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    if (out) return new Date(out);
  } catch {
    // git unavailable or file untracked; fall through to mtime
  }
  try {
    return statSync(file).mtime;
  } catch {
    return undefined;
  }
}

export default defineConfig({
  site: 'https://keifelectric.com',
  // Serve clean, slash-less URLs (/services/panel) so the built pages,
  // the sitemap, and the per-page canonical tags all agree.
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      serialize(item) {
        const file = sourceFileFor(item.url);
        if (!file) return item;
        const dates = [file, ...SHARED].map(lastModified).filter(Boolean);
        if (dates.length) {
          item.lastmod = new Date(Math.max(...dates)).toISOString();
        }
        return item;
      },
    }),
  ],
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
