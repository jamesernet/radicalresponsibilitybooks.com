/* assets/images/README.md
   Image asset guide — current status and what's still needed
   ============================================================= */


/* -------------------------------------------------------
   CURRENT STATUS
   ------------------------------------------------------- */

lee-hero.jpg    ✓ PRESENT — but needs replacement
                  Current: screenshot from a social media carousel post
                  (landscape 1200×928, includes mute icon + "1/7" overlay)
                  Visual result: acceptable via CSS crop, but a clean photo
                  would look significantly better.
                  ★ REPLACE WITH: a clean standalone photo of Lee (see specs below)

lee-about.jpg   ✗ WRONG IMAGE — needs replacement
                  Current: "The Math of Authenticity" infographic
                  (NOT a portrait of Lee — this is being hidden from the site)
                  The About section is currently using lee-hero.jpg as a placeholder.
                  ★ REPLACE WITH: a proper portrait of Lee (see specs below)

book-cover.jpg  ✓ PRESENT — content is correct
                  Current: screenshot of book cover (883×1372, includes small mute icon
                  in bottom-right corner — barely visible when scaled down)
                  ★ OPTIONAL: replace with a clean scan/export of the cover art

favicon.svg     ✓ PRESENT — dark "R" on black, matches brand
                  Works in all modern browsers (Chrome, Firefox, Safari, Edge)
                  ★ OPTIONAL: add a favicon.ico for older browser support (see specs below)

og-image.jpg    ✗ MISSING — needed for social sharing
                  ★ CREATE: see specs below


/* -------------------------------------------------------
   IMAGES STILL NEEDED (priority order)
   ------------------------------------------------------- */

1. lee-about.jpg  — Lee portrait for the About section
   Replace with: a warm, approachable headshot or upper-body photo of Lee
   Recommended size: 600×750px minimum (portrait orientation — taller than wide)
   Mood: warmer / more accessible than the hero. Can be the same shoot,
         just a different expression (smile, thoughtful, looking at camera).
   Used in: About section (left column, 580px display height)

2. og-image.jpg  — Social sharing card
   REQUIRED SIZE: exactly 1200×630px
   Used in: Open Graph / Twitter Card meta tags
   Design: include the book title, author name, and ideally a photo of Lee.
   This is what appears when someone shares the URL on social media.

3. lee-hero.jpg  — Hero portrait (clean version)
   Replace with: a clean standalone photo of Lee (dramatic / high energy)
   Recommended size: portrait orientation, at least 900×1200px
   Mood: intense, determined — the current fist-pump photo is perfect content-wise,
         just needs to be the raw photo file (not a social media screenshot)
   Used in: hero section (right column, fills full viewport height)


/* -------------------------------------------------------
   OPTIONAL / LOWER PRIORITY
   ------------------------------------------------------- */

favicon.ico     — Legacy browser support
                  16×16 and 32×32 in a single multi-resolution .ico file
                  Modern browsers use favicon.svg instead.
                  Tool to generate: realfavicongenerator.net

behavior-is-math.jpg        — Not currently used on the site
empathy-accountability.jpg  — Not currently used on the site
                              Both are social media infographics. Could be
                              added to a future "Resources" or "Framework" page.


/* -------------------------------------------------------
   WHERE IMAGES ARE REFERENCED
   ------------------------------------------------------- */

All images go in this directory: assets/images/
They are referenced in src/_data/site.json with paths like /assets/images/filename.jpg

To update which image is used for a section, edit src/_data/site.json:
  hero.image.src    → currently lee-hero.jpg
  author.image.src  → currently lee-hero.jpg (placeholder — replace when lee-about.jpg is ready)
  book.image.src    → currently book-cover.jpg

*/
