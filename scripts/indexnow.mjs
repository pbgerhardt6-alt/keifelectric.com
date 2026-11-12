// Tell Bing (and every IndexNow engine) which pages changed.
// Usage: npm run indexnow             -> submits every URL in the live sitemap
//        npm run indexnow -- /path ... -> submits only those paths
// Run it after a production deploy is live. The key file lives at
// public/fb3c3c617ec7f121be512f6c0adfeea5.txt and must stay published.
const HOST = 'keifelectric.com';
const KEY = 'fb3c3c617ec7f121be512f6c0adfeea5';

async function sitemapUrls() {
  const index = await (await fetch(`https://${HOST}/sitemap-index.xml`)).text();
  const maps = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const urls = [];
  for (const map of maps) {
    const xml = await (await fetch(map)).text();
    urls.push(...[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
  }
  return urls;
}

const args = process.argv.slice(2);
const urlList = args.length ? args.map((p) => `https://${HOST}${p.startsWith('/') ? p : '/' + p}`) : await sitemapUrls();

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URLs`);
urlList.forEach((u) => console.log('  ' + u));
if (!res.ok) { console.log(await res.text()); process.exit(1); }
