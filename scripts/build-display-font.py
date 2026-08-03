#!/usr/bin/env python3
"""Rebuild the subset Climate Crisis display font.

The upstream variable font is 627 KB with 3499 glyphs covering many scripts.
This site uses it for English headings only, so we pin the YEAR axis at 2050
(what the CSS asks for), drop the variable tables, and cut the glyph set to
Latin. Result is about 10 KB.

Run from the website root:

    python3 scripts/build-display-font.py

Requires fonttools and brotli. The output filename is versioned because
vercel.json serves /fonts/* with an immutable cache header, so overwriting an
existing name would leave cached clients on the old file forever. If you change
the character set, bump OUTPUT and update the @font-face src in
src/styles/global.css to match.
"""

from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "fonts-src" / "ClimateCrisis-Regular-VariableFont_YEAR.ttf"
OUTPUT = ROOT / "public" / "fonts" / "ClimateCrisis-latin-v2.woff2"

# Pin at 1979, which is the letterform the site has always rendered.
#
# The upstream ClimateCrisis-2050.woff2 was mislabeled: its fvar default
# declared YEAR=2050, but the outlines baked into glyf were the 1979 shape.
# Because the CSS asked for the same 2050 the file declared as its default, the
# browser applied no delta and drew the baked 1979 outlines. Instancing at a
# genuine 2050 produces the eroded letterform the axis actually describes,
# which looks nothing like the live site.
YEAR = 1979

# Basic Latin printable, plus the typographic punctuation the copy uses.
# Note the copy style bans em dashes, but U+2014 stays in range so a stray one
# renders rather than tofu.
UNICODES = set(range(0x20, 0x7F)) | {
    0x00A0,  # no-break space
    0x00B7,  # middle dot, used in the trust rows
    0x2013,  # en dash, used in numeric ranges
    0x2014,  # em dash
    0x2018, 0x2019, 0x201C, 0x201D,  # curly quotes
    0x2026,  # ellipsis
}


def main() -> None:
    if not SOURCE.exists():
        raise SystemExit(f"source font not found: {SOURCE}")

    font = TTFont(SOURCE)
    before = font["maxp"].numGlyphs

    # updateFontNames is off because the STAT table only declares an Axis Value
    # for 2050, so renaming fails when pinning anywhere else.
    instancer.instantiateVariableFont(
        font, {"YEAR": YEAR}, inplace=True, updateFontNames=False
    )

    options = subset.Options()
    options.layout_features = ["kern", "liga", "calt", "ccmp"]
    options.desubroutinize = True
    options.drop_tables += ["DSIG"]
    options.notdef_outline = True
    options.recalc_bounds = True

    subsetter = subset.Subsetter(options=options)
    subsetter.populate(unicodes=UNICODES)
    subsetter.subset(font)

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    font.flavor = "woff2"
    font.save(OUTPUT)

    size_kb = OUTPUT.stat().st_size / 1024
    print(f"{SOURCE.name} -> {OUTPUT.name}")
    print(f"  glyphs {before} -> {TTFont(OUTPUT)['maxp'].numGlyphs}")
    print(f"  size   {SOURCE.stat().st_size / 1024:.1f} KB -> {size_kb:.1f} KB")


if __name__ == "__main__":
    main()
