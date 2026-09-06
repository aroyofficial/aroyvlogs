#!/usr/bin/env python3
"""Generate canonical Google Maps toilet-search links from pandal map short URLs."""

from __future__ import annotations

import re
from html import escape
from pathlib import Path
from urllib.request import Request, urlopen

PAGES = [
    Path("pages/durga-puja-2026/panchami.html"),
    Path("pages/durga-puja-2026/shashthi.html"),
    Path("pages/durga-puja-2026/saptami.html"),
    Path("pages/durga-puja-2026/navami.html"),
]

HARNESS_STYLE = (
    '<style>.route-actions{display:flex;flex-direction:column;gap:8px;align-items:flex-end}'
    '.route-actions .map-btn{width:max-content}'
    '@media(max-width:575.98px){.route-actions{flex-direction:row;justify-content:flex-start;'
    'align-items:flex-start;gap:8px}.route-actions .map-btn{width:max-content}}</style>'
)

COORD_PATTERNS = [
    re.compile(r"/@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)"),
    re.compile(r"!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)"),
    re.compile(
        r"(?:[?&](?:lat|latitude)=)(-?\d+(?:\.\d+)?).*?[?&](?:lng|lon|longitude)=(-?\d+(?:\.\d+)?)",
        re.I,
    ),
    re.compile(r"(?:[?&](?:q|query)=)(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)", re.I),
    re.compile(r"(?:[?&](?:ll|center)=)(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)", re.I),
    re.compile(
        r"/maps/search/\s*(-?\d+(?:\.\d+)?),\s*\+?\s*(-?\d+(?:\.\d+)?)",
        re.I,
    ),
]

MAP_ANCHOR_RE = re.compile(
    r'<a([^>]*class=["\'][^"\']*\bmap-btn\b[^"\']*["\'][^>]*)>([^<]*)</a>',
    re.I,
)
CARD_RE = re.compile(
    r'(<li\s+class=["\'][^"\']*\broute-step\b[^"\']*["\'][^>]*>.*?</li>)',
    re.I | re.S,
)
TITLE_RE = re.compile(r'<h3>(.*?)</h3>', re.I | re.S)


def resolve_coordinates(short_url: str) -> tuple[str, str]:
    request = Request(
        short_url,
        headers={
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
            "Chrome/131.0 Safari/537.36"
        },
    )
    with urlopen(request, timeout=30) as response:
        final_url = response.geturl()
        body = response.read(2_000_000).decode("utf-8", errors="ignore")

    for source in (final_url, body):
        for pattern in COORD_PATTERNS:
            match = pattern.search(source)
            if match:
                return match.group(1), match.group(2)

    raise RuntimeError(f"Could not resolve coordinates for {short_url} -> {final_url}")


def add_harness_style(text: str) -> str:
    if ".route-actions" in text:
        return text
    head_end = text.lower().find("</head>")
    if head_end == -1:
        raise RuntimeError("Missing </head>")
    return text[:head_end] + HARNESS_STYLE + text[head_end:]


def transform_card(card: str, page: Path) -> tuple[str, bool]:
    if "route-lunch" in card.lower() or re.search(r"\bLUNCH\b", card, re.I):
        return card, False
    if "Toilets ↗" in card or "Toilets &#8599;" in card:
        return card, False

    title_match = TITLE_RE.search(card)
    if not title_match:
        return card, False
    title = re.sub(r"\s+", " ", title_match.group(1)).strip()

    map_matches = list(MAP_ANCHOR_RE.finditer(card))
    google_match = next(
        (m for m in map_matches if "Google Maps" in re.sub(r"\s+", " ", m.group(2))),
        None,
    )
    if google_match is None:
        raise RuntimeError(f"{page}: no Google Maps button found for {title}")

    attrs = google_match.group(1)
    href_match = re.search(r'href=["\']([^"\']+)["\']', attrs, re.I)
    if not href_match:
        raise RuntimeError(f"{page}: Google Maps button has no href for {title}")
    href = href_match.group(1)
    if "maps.app.goo.gl" not in href:
        raise RuntimeError(f"{page}: non-short Google Maps URL for {title}: {href}")

    lat, lon = resolve_coordinates(href)
    toilet_url = f"https://www.google.com/maps/search/toilets/@{lat},{lon},17z?entry=ttu"
    toilet_anchor = (
        '<a class="map-btn" target="_blank" rel="noopener" '
        f'href="{escape(toilet_url, quote=True)}">Toilets ↗</a>'
    )
    wrapper = f'<div class="route-actions">{google_match.group(0)}{toilet_anchor}</div>'
    updated = card[: google_match.start()] + wrapper + card[google_match.end() :]
    print(f"{page}: {title} -> {toilet_url}")
    return updated, True


def process_page(path: Path) -> int:
    text = path.read_text(encoding="utf-8")
    original = text
    text = add_harness_style(text)
    changed = 0

    def replace(match: re.Match[str]) -> str:
        nonlocal changed
        card, did_change = transform_card(match.group(1), path)
        changed += int(did_change)
        return card

    text = CARD_RE.sub(replace, text)
    if text != original:
        path.write_text(text, encoding="utf-8")
    return changed


def main() -> None:
    total = 0
    for page in PAGES:
        if not page.exists():
            raise RuntimeError(f"Missing page: {page}")
        total += process_page(page)
    print(f"Generated/updated {total} pandal toilet links.")


if __name__ == "__main__":
    main()
