#!/usr/bin/env bash
## Vendor hotlinked Google Photos images into assets/img/ and rewrite HTML refs.
## Usage (needs network + curl + python3):  ./assets/vendor-images.sh
## Safe to re-run: skips download when the local file already exists and validates.
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p assets/img
python3 - <<'PYEOF'
import re, subprocess, sys
from pathlib import Path
JOBS = [
    ("about-hero-image", "https://lh3.googleusercontent.com/pw/AP1GczOM1M_l_aclHRJZEChyU5pAD6Jp-1iy1cebHq_kfHl5aQ27RmP8YIZZ3GfO8EL9ILyGw-HB7AYeuI0vVJ8Bnf9GfEwmlvOCszQBZ97OAeErl5xmjg2Q5wYE64DffmY684Bj5p51Ic6Bj1fJ1wURA93ZqQ=w1620-h912-s-no-gm?authuser=0"),
    ("about-profile-image", "https://lh3.googleusercontent.com/pw/AP1GczPm7V4u819HW2EhyD_HQV4mt4C5hz3K_ql7ZwK3K-npbdVhUXL3Xsr1PYV-Rnht0g5I8b4-WhhRKdBn5lgoV2KqXjHWaPJ50G_UBXabpnK-Hcn1i255yX-9IW7GqqNKXhpmjWG0jfqlXF8oIVoYy0TEOw=w695-h912-s-no-gm?authuser=0"),
    ("festivals-hero-image", "https://lh3.googleusercontent.com/pw/AP1GczP95gUoni4ks35nVy5tPWROPMuaZVBcC8lDDvUM6GB-urTCS3Wg91sIttH3utNyDoajU6bKQYjBF1mbIquZ2Tg21glAnODU3FcfBRleX-uHsJ55UfLdTydVr3NcjLbQ5lXa4BvqKiAVRq4VNX192B9ZJA=w1515-h853-s-no-gm?authuser=0"),
    ("festivals-article-image", "https://lh3.googleusercontent.com/pw/AP1GczMlFbeN28gh9kQdSfg8Nr9TPi-EDHQmZZMxXvmFs5-7OFh5JtZctWPx_C4W_7EeJBLgP-ol_rRKPEv8fViem8diwcdtwnC52gahwLYNEIZwuUDNJij0z68BV9SRNQT5eTqvkOIfWoqA6tNl78pKRxRX_Q=w1515-h853-s-no-gm?authuser=0"),
    ("food-hero-image", "https://lh3.googleusercontent.com/pw/AP1GczPGKzFM2x13fIe9BtmbqmGrOCD-4757HYHUqtC2sDUQfrq9XWy9_PPy8X9beo71GkLjqPjREMC7Q3b2ozxwDQXWgjeUVGydtvpvma2ve8sA_sq4dwrPCvBzFpoJ8vi-Zf8lf5QpV-7_3QCs4CVYwlcHGQ=w1620-h912-s-no-gm?authuser=0"),
    ("food-story-1-image", "https://lh3.googleusercontent.com/pw/AP1GczNXZZ1dkMkBlj7vyBgv9hGss9on5L9B2I5vpFg2PLvaBYhGVoixctmYlb7A3nxCoIR92BpiggsasNMKxgB6uEOMCcPgwHKjlZpiayoCtUVTdP8ieoB2hTywWaoJcEelNJQxvO33fNjVdwQVpiJteieRPw=w1620-h912-s-no-gm?authuser=0"),
    ("food-story-2-image", "https://lh3.googleusercontent.com/pw/AP1GczMtslQDCRW6TEQJ5QSfB0oMfIjMmJClLgXbNiuO_YRrsr3q0AFixFibhcEneeBrz1Br-Iu6YLHioDzTTLznQ3nkLmSqHpbwlIemAhAawyNmvxAIFG50UG-1UoMFWBFL4CTw0jx67Crw9lqj432aS2dByg=w1620-h912-s-no-gm?authuser=0"),
    ("home-hero-image", "https://lh3.googleusercontent.com/pw/AP1GczOfvrdCvJUYD_maPr16rqSprBNRtPGK1NtgiV2SMndpmscJuOqkbBdU0unNThj3jH4-GDnggdfdBA8CYmSJ4EZu3KkCq5Xs-EhyYQHxct9espXyEnnBkmaH2-TmabT2kNDLCtdoasJ27Uxvox5jr5SHCg=w1620-h912-s-no-gm?authuser=0"),
    ("home-festivals-image", "https://lh3.googleusercontent.com/pw/AP1GczNa01nkf6Jm03dmCvtCLm0oPVfx97kO9RszIoHWKF9lHZtGHHAs_n2zxNv1qUA_euuMrIQpL3uXRPSw9qsiCk6pV3UIM2GtIjMDuvfKDcqnZ61E4I87hSPYwrFT_uI_s9Rtv3WJYRRghsiV-1wafXWEoQ=w1620-h912-s-no-gm?authuser=0"),
    ("home-travel-image", "https://lh3.googleusercontent.com/pw/AP1GczPL56xen1Q7Gf9kaH66chMqaTkMWZBLJE8x5aYoFeRLAEwC-5p1SfDKUrs-cChbNBMcC-F2saWyC5J7rjfK83isigJJmQlIQVWRO3wEpQhDM7A21X_VicaviBMYOx_Q4ulwlU8dMpMEuzxfwaOwDl3t0g=w1620-h912-s-no-gm?authuser=0"),
    ("home-food-image", "https://lh3.googleusercontent.com/pw/AP1GczPMxhvu_0upJ9EgcmGXNs7wEQ5loDUgftaHTVCFmpUFbedLE-VaBExaQe54q7MqE0kZSzbtzT5J4bL_5hhjVbDK2pkDbUmjaaTnutWxU3FsUVlw6yt16o1DGS-yY5k5_2wbo3Ht2J_QCFlq7TTTdwxWwg=w1620-h912-s-no-gm?authuser=0"),
    ("home-tech-image", "https://lh3.googleusercontent.com/pw/AP1GczMfeb6gEmE1aW52VbfSEKpS82lGfpBHthSY-LjYrunXI_jyYK7rca_LIu6fGWdQZyo8F0HvRk__zChwk4yNOGtMZra79B1628KmXSnAtCiI0YKD-oKnTC7W9b8lfI5Y8XGsChrs9EFkEzROV5KFLI2lAg=w1620-h912-s-no-gm?authuser=0"),
    ("home-about-image", "https://lh3.googleusercontent.com/pw/AP1GczPYsHGW76q_voga71abQKFWikGoaGfbDPsd4gg8Tk9nEIz9jC8bk2e6x9m73UyHOeGqhLCvwCnBLU3EVWzdNDlb71-udBxuplSLchYdP2vS3uU0Tg1N4ybTTEfC1ZqPgqZtyQH8u4ENnqWqh7PCdqArhA=w695-h912-s-no-gm?authuser=0"),
    ("puja-hero-image", "https://lh3.googleusercontent.com/pw/AP1GczPOar5ZpnG8LwJpUaY6tUInAWnD2T5oxHyaQ-2xWE_Y-cU5sLhhG4u_XX8OZMyHYw1hZjExTiaXG7WDVo0-waHgr9DtQW6XX1gaifjplaFZE0SEhIP-3EQj3k2uODCzfea54FskXbVTX5qdqpOnavZZRA=w1910-h912-s-no-gm?authuser=0"),
    ("tech-hero-image", "https://lh3.googleusercontent.com/pw/AP1GczO1YihZaNnKlpI2SX-Aa9ZYbjHF75-nJmNsXT6InPFHSuYgRzfesRWjOmCxuoN00GVLFH_6E2Mc55QmZsRAmY-7PJSvhY9slGAmsDINFyPcUiqGXlDZkxlPsDcUMopnei4VBC0Wf9ATjt4FltQmxD4EJQ=w1620-h912-s-no-gm?authuser=0"),
    ("tech-story-1-image", "https://lh3.googleusercontent.com/pw/AP1GczM7BQBX8KFPMQFl6hJC5b_36vMI8UGz7lLoMvuqgcXKOblliN3OgRoFcQR667BPDHbkdYrXlj7fVn7vNQoo-4oyT5hhq8uVvuBuXJ71RqOiUyZ3A8i9Wd1UqmcbN5RDh9SbQBG1gMTnKGyDB3qcD3SdUw=w1620-h912-s-no-gm?authuser=0"),
    ("tech-story-2-image", "https://lh3.googleusercontent.com/pw/AP1GczPdgBQ8Zv5EckXw9oJNYvEjusRSjQ1tRmPYpEUFPtcb3s2VzxtvWD5hGMuFKA-p63Oyhg2CCCV3XKOAz5-w5qAtz0VuZE6IkKHEo5ktoRH0IG-RDpPyi3NFA_alnu1UD7GvmsKbp8AfRcjbPN5oHAHeug=w1620-h912-s-no-gm?authuser=0"),
    ("travel-hero-image", "https://lh3.googleusercontent.com/pw/AP1GczN5alxZ16SKytIp3EHL87MUJdOs613kreWPrQd7vNmj3Ds2pwwFINiD1_qpaENQ95AP2ySm5ezyDF0CNF1q4Fir_ki2_G31py75vS-Gd__J0k5xwSn6iWFmg36PmG2_ljH97pUX8qV7tFe3GhYStVlmLQ=w1620-h912-s-no-gm?authuser=0"),
    ("travel-story-1-image", "https://lh3.googleusercontent.com/pw/AP1GczNThP_P5_q6AVHa7KIXD9tMqX1I7ORn5xNXGd9AhRWMno-t6vwnmevpWCMpEHtcX8F4kSDyCwSJQSd-FvqbdGtK6EMe95-jMw3x9iKCN3ir3iQSbn12szVB0F9eT0wiP_DHTYWWWvxoc6-5ZqIxRezj_g=w1620-h912-s-no-gm?authuser=0"),
    ("travel-story-2-image", "https://lh3.googleusercontent.com/pw/AP1GczPCiK2zKGrOlRH_Wr8WztYboLMm2yJbUhajVZJOMArRtVLYyzi1WztZyCpSI2DsTpX2rUzVhSJ9Lif-99vJQVUv7GFOnpUtk6z2DYmJwJQKtdem8edTvG0OzrvQ77Zh0MuUqf-RMWzwO6PxY6X6F0Fl2Q=w1620-h912-s-no-gm?authuser=0"),
    ("travel-story-3-image", "https://lh3.googleusercontent.com/pw/AP1GczNBxbV-LGOKEDCf760HX3ZQmpT42GDCS2HsWhpizxV5QKPU34_XqSNe3ENhndTfKZAgC3pnfEr3TQ9HLu7F4l_RcrttGj1AV5WmUEZe_fbakN74QG0zI9zuK3401MCudoegT2hOp9wf6Ykx4TQxdla4hw=w1620-h912-s-no-gm?authuser=0"),
 ]
def depth_of(p):
    return len(Path(p).parent.parts)
for name, url in JOBS:
    dest = None
    for ext in ("jpg", "png", "webp", "gif"):
        cand = Path("assets/img") / f"{name}.{ext}"
        if cand.exists():
            dest = cand
            break
    if dest is None:
        tmp = Path("assets/img") / f"{name}.bin"
        print(f"downloading {name} ...")
        subprocess.run(["curl", "-sfL", "--max-time", "60", "-o", str(tmp), url], check=True)
        magic = tmp.read_bytes()[:12]
        if magic[:3] == b"\xff\xd8\xff": ext = "jpg"
        elif magic[:8] == b"\x89PNG\r\n\x1a\n": ext = "png"
        elif magic[:4] == b"RIFF" and magic[8:12] == b"WEBP": ext = "webp"
        elif magic[:6] in (b"GIF87a", b"GIF89a"): ext = "gif"
        else: raise SystemExit(f"not a recognised image: {name}")
        dest = Path("assets/img") / f"{name}.{ext}"
        tmp.rename(dest)
    print(f"{name}: {dest} ({dest.stat().st_size} bytes)")
    for f in sorted(Path(".").rglob("*.html")):
        if ".git" in f.parts: continue
        src = f.read_text()
        if url in src:
            d = depth_of(f)
            rel = ("./" if d == 0 else "../" * d) + f"assets/img/{dest.name}"
            f.write_text(src.replace(url, rel))
            print(f"  rewrote {f} -> {rel}")
leftover = [str(f) for f in sorted(Path(".").rglob("*.html")) if ".git" not in f.parts and "lh3.googleusercontent.com" in f.read_text()]
print("remaining remote refs:", leftover or "NONE - all images vendored")
PYEOF
