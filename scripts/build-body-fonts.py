#!/usr/bin/env python3
"""Rebuild the subset Geist body fonts.

The upstream Geist woff2 files ship the full 649-codepoint cmap (Latin plus
Greek, Cyrillic, and assorted symbols) at about 30 KB per weight. Six weights
is 184 KB, and four of them are preloaded in BaseLayout, so that payload sits
directly on the critical path ahead of the render-blocking CSS. On Slow 4G
that is what pushes out the hero paint. Cutting to Latin takes each weight to
about 10.5 KB, so the preloaded set drops from 123 KB to 43 KB.

Run from the website root:

    python3 scripts/build-body-fonts.py

Requires fonttools and brotli. Sources live in fonts-src/ and are not served.
Output filenames are versioned because vercel.json serves /fonts/* with an
immutable cache header, so overwriting an existing name would leave cached
clients on the old file forever. If you change UNICODES, bump VERSION and
update the @font-face src rules in src/styles/global.css and the preload tags
in src/components/layout/BaseLayout.astro to match.

The character set is the standard google-fonts latin subset. Verified to cover
every character the rendered pages actually use, with headroom for new copy.
"""

from pathlib import Path

from fontTools import subset

ROOT = Path(__file__).resolve().parent.parent
SOURCE_DIR = ROOT / "fonts-src"
OUTPUT_DIR = ROOT / "public" / "fonts"

VERSION = "v1"
WEIGHTS = ["Regular", "Medium", "SemiBold", "Bold", "ExtraBold", "Black"]

# google-fonts latin subset: Latin-1, a few extended letters, general
# punctuation, currency, and the replacement char.
UNICODES = (
    "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,"
    "U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,"
    "U+FEFF,U+FFFD"
)

# Keep kerning and the shaping features. Dropping these saves very little and
# costs visible letter-fit on the headings.
LAYOUT_FEATURES = "kern,liga,calt,ccmp,locl,mark,mkmk"


def main() -> None:
    for weight in WEIGHTS:
        source = SOURCE_DIR / f"Geist-{weight}.woff2"
        output = OUTPUT_DIR / f"Geist-{weight}-latin-{VERSION}.woff2"
        subset.main([
            str(source),
            f"--output-file={output}",
            "--flavor=woff2",
            f"--unicodes={UNICODES}",
            f"--layout-features={LAYOUT_FEATURES}",
        ])
        before = source.stat().st_size
        after = output.stat().st_size
        print(f"{weight:<10} {before:>7,} -> {after:>7,} bytes  ({output.name})")


if __name__ == "__main__":
    main()
