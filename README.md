# Radical Responsibility — Lee Hahn

Landing page for the book **Radical Responsibility: The Math of Relationships, Emotions, and Change** by Lee Hahn.

Built with [Eleventy](https://www.11ty.dev/) — a simple static site generator. No build pipeline complexity. Deploys to Netlify in seconds.

---

## Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- A terminal (Terminal on Mac, or any shell)

### 1. Install dependencies
```bash
npm install
```

### 2. Add images
Place these files in `assets/images/` before running:
- `lee-hero.jpg` — hero portrait
- `lee-about.jpg` — about section portrait
- `book-cover.jpg` — book cover
- `og-image.jpg` — 1200×630px for social sharing

See `assets/images/README.md` for size guidance.

### 3. Start local dev server
```bash
npm start
```
Opens at `http://localhost:8080` with live reload.

### 4. Build for production
```bash
npm run build
```
Output goes to `_site/` — this is what Netlify deploys.

---

## Updating Content

**All copy, links, and configuration lives in one file:**

```
src/_data/site.json
```

Open it, find the section you want to change, save the file. The dev server auto-reloads.

### Key things to update before launch:
- `links.buyBook` → Amazon URL when live
- `links.instagram` / `linkedin` / `youtube` → real social URLs
- `site.url` → confirmed domain
- `site.twitterHandle` → Lee's Twitter/X handle

---

## File Structure

```
radical-responsibility/
├── .eleventy.js          # Eleventy config (rarely need to touch)
├── package.json
├── netlify.toml          # Netlify deployment config
├── .gitignore
│
├── src/                  # Source files (what you edit)
│   ├── _data/
│   │   └── site.json     # ← ALL CONTENT LIVES HERE
│   ├── _includes/
│   │   ├── base.njk      # Base HTML layout (head, meta, schema)
│   │   └── partials/
│   │       ├── nav.njk   # Navigation (edit in site.json)
│   │       └── footer.njk # Footer + social links
│   └── index.njk         # Homepage — assembles all sections
│
├── assets/               # Static files (copied as-is to _site)
│   ├── css/
│   │   ├── tokens.css    # Design tokens (colors, fonts, spacing)
│   │   ├── base.css      # Reset + body defaults
│   │   ├── components.css # Buttons, cards, nav, footer
│   │   ├── animations.css # Scroll reveals + parallax styles
│   │   └── layout.css    # Section layouts + responsive
│   ├── js/
│   │   ├── scroll-animations.js  # IntersectionObserver reveals
│   │   └── nav.js               # Mobile hamburger + scroll shadow
│   └── images/           # Place your images here
│
└── _site/                # Built output (gitignored, auto-generated)
```

---

## Adding New Pages

To add a page (e.g. `/about`):

1. Create `src/pages/about.njk`
2. Add front matter at the top:
```njk
---
layout: base.njk
pageTitle: "About Lee | Radical Responsibility"
pageDescription: "Learn about Lee Hahn, author of Radical Responsibility."
---

<section class="section-inner">
  <h1>Your content here</h1>
</section>
```
3. The nav and footer are automatically included — that's the Eleventy template inheritance working.

Future pages to add:
- `/blog/` — post index + individual post template
- `/resources/` — downloads, links
- `/speaking/` — podcast appearances, events

---

## Connecting to GitHub (first time)

```bash
# 1. Initialize git in this folder
git init

# 2. Add all files
git add .

# 3. First commit
git commit -m "Initial commit — Radical Responsibility landing page"

# 4. Create a new repo on github.com, then connect it:
git remote add origin https://github.com/YOUR_USERNAME/radical-responsibility.git

# 5. Push
git branch -M main
git push -u origin main
```

---

## Deploying to Netlify

### Option A — Drag and drop (no account needed)
1. Run `npm run build`
2. Go to [netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `_site/` folder onto the page
4. Done — you get a live URL in under 60 seconds

### Option B — Connect GitHub (recommended for ongoing updates)
1. Push repo to GitHub (see above)
2. Go to [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import from Git"
3. Connect your GitHub repo
4. Build settings are auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `_site`
5. Every push to `main` auto-deploys

### Custom domain
In Netlify: Site settings → Domain management → Add custom domain.

---

## Schema & SEO

Meta tags and structured data (JSON-LD) are in `src/_includes/base.njk`.

Schema types included:
- `Book` — title, author, description, image
- `Person` — Lee Hahn with social profile links
- `WebSite` — site name and URL

To verify schema: paste the live URL into [search.google.com/test/rich-results](https://search.google.com/test/rich-results)

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Eleventy](https://www.11ty.dev/) | Static site generator |
| [Nunjucks](https://mozilla.github.io/nunjucks/) | Template language (`.njk` files) |
| Vanilla CSS | Styling (no framework) |
| Vanilla JS | Scroll animations, nav toggle |
| [Netlify](https://netlify.com) | Hosting + deployment |

No React. No build pipeline. No dependencies beyond Eleventy itself.
