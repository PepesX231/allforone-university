# All for One mobile site

The root page redirects screens up to 760px here; larger screens retain the desktop site. `?view=desktop` bypasses automatic mobile routing.

Adapted from the supplied static Astro export. Original export assets and credit are retained. The current mobile content, track art, hamster sprites, detail dialogs, hamburger menu and explainer video match the latest competition information.

- `index.html`: static content and relative asset links, compatible with GitHub Pages project hosting.
- `site-theme.css`: consolidated mobile overrides and motion styles.
- `mobile.js`: track details, history, focus management and reduced-motion-compatible entrance effects.
- `navigation.js`: accessible menu, section links and current-section indication.
- `project-assets/data.js`: competition data.
- `project-assets/film100.js`: player interaction; shared media lives in `../assets/media/`.

Registration opens the official Hamster Hub website. The invitation form creates a shareable invitation; it is not an application or payment form. Video is fetched only after pressing play and pauses when its dialog closes.

Run `python build.py` from the repository root to regenerate the local `dist/` preview. Source HTML is served directly by GitHub Pages; no deployment build is required. Generated dist media is ignored to avoid duplicating the tracked source media.
