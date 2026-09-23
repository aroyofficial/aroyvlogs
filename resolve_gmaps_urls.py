"""Replace Google Maps short links in the Chaturthi data with their final URLs."""

import re
import sys
from pathlib import Path
from urllib.request import Request, urlopen


TARGET = (
	Path(sys.argv[1])
	if len(sys.argv) > 1
	else Path(__file__).parent / "pages" / "durga-puja-2026" / "chaturthi.js"
)
if not TARGET.is_absolute():
	TARGET = Path.cwd() / TARGET
GMAPS_URL = re.compile(
    r'(?P<prefix>\bgmapsUrl\s*:\s*")'
    r'(?P<url>https://maps\.app\.goo\.gl/[^"\s]+)'
    r'(?P<suffix>")'
)


def resolve(url: str) -> str:
    request = Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urlopen(request, timeout=30) as response:
        final_url = response.geturl()

    if not re.match(r"^https://(?:www\.)?google\.com/maps/", final_url):
        raise RuntimeError(f"Unexpected redirect target for {url}: {final_url}")
    return final_url


def main() -> None:
    source = TARGET.read_text(encoding="utf-8")
    matches = list(GMAPS_URL.finditer(source))
    if not matches:
        print("No Google Maps short links found in gmapsUrl properties.")
        return

    resolved = {}
    for match in matches:
        short_url = match.group("url")
        if short_url not in resolved:
            resolved[short_url] = resolve(short_url)
            print(f"{short_url} -> {resolved[short_url]}")

    updated = GMAPS_URL.sub(
        lambda match: (
            match.group("prefix")
            + resolved[match.group("url")]
            + match.group("suffix")
        ),
        source,
    )
    TARGET.write_text(updated, encoding="utf-8")
    print(f"Updated {len(resolved)} short link(s) in {TARGET}.")


if __name__ == "__main__":
    main()
