// Canonical paths for the five service pages. Flat root-level keyword slugs,
// matching the city pages. The old /services/<id> paths sat at
// "Discovered - currently not indexed" in Search Console from July to
// September 2026 without a single crawl, while root-level pages published in
// the same period were crawled and indexed within a day. Permanent redirects
// from the old paths live in vercel.json.
export const servicePaths: Record<string, string> = {
  'ev-charger': '/ev-charger-installation-san-luis-obispo',
  panel: '/electrical-panel-upgrade-san-luis-obispo',
  lighting: '/lighting-installation-san-luis-obispo',
  troubleshooting: '/electrical-repair-san-luis-obispo',
  newbuild: '/new-construction-electrical-san-luis-obispo',
  adu: '/adu-electrical-san-luis-obispo',
};

export function servicePath(id: string): string {
  const p = servicePaths[id];
  if (!p) throw new Error(`No service path for id "${id}"`);
  return p;
}
