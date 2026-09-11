# assets/

Local binary assets for the site.

## images (`assets/img/`)

The site's 21 photographs are currently hotlinked from Google Photos
(`lh3.googleusercontent.com`). Every usage already carries a graceful
fallback (a themed `background-color` under each CSS background image,
an inline-SVG `onerror` placeholder on the two `<img>` portraits), so a
dead remote link degrades to a tidy themed block instead of a blank hole.

To fully vendor the images (same bytes, served locally, zero visual change):

```sh
./assets/vendor-images.sh
```

The script downloads each photo into `assets/img/<element-id>.<ext>`,
validates image magic bytes, and rewrites the 21 HTML references to
depth-relative local paths. It is safe to re-run. Requires network access
plus `curl` and `python3`.
