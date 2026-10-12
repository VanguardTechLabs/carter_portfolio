# Carter M. N. · Fifteen Worlds

A one-page design portfolio for the Workana profile of Carter M. N. It shows the fifteen concept projects from `15-distinct-portfolio-projects.zip` in English, Spanish and Portuguese. There is no build step: open `index.html` in a browser.

## What's on the page

- **Hero:** "Every brand deserves its own *world.*"
  - The deck holds all fifteen covers. The top card plays its animation, and the deck shuffles every few seconds.
  - Each time the deck shuffles, the word *world* changes into that project's typographic style: chrome, risograph, comic, neon, paper tiles and so on.
  - Swipe or drag a card away. Tap the top card to jump to that project.
- **The fifteen:** one chapter per project.
  - While a project is in the middle of the screen, the whole page takes that project's colours.
  - Each chapter shows the project's animation, a title in that project's own lettering, a description, its style and motion notes, and related skills.
  - "Play" opens a full-screen viewer that you can step through.
- **Toolbox:** the skills and years of experience from the Workana profile.
- **Clients:** the 5.0 rating, Silver level, and the public Workana reviews, quoted word for word and translated where needed. It also lists recent Workana work.
- **Contact:** the Workana hire button. It's the only contact on the site.

## Effects

- **Mouse effects:** a cursor that inverts the colours beneath it and shows Play, Open or Drag labels, confetti on every click, magnetic sticker buttons, and headline letters that thin out around the cursor.
- **Phones and tablets:** no cursor or confetti layers, and nothing redraws on its own. Videos play only while they're on screen.
- **FX switch** (✶ FX in the top bar, "Motion effects" in the footer): turns autoplay, shuffling and scroll motion on or off. The browser remembers the choice.
  - It starts off when the system asks for reduced motion. Windows does this when "Animation effects" is off, which is the default on Windows Server and over Remote Desktop.
  - Hover, drag and click feedback works either way.
- **Images:** every image has a blurred preview (`lqip.js`), so nothing shows up empty while loading.

## Files

| Path | What it holds |
| --- | --- |
| `index.html` | Layout, styles, the script and the English page text |
| `content.js` | Projects (EN/ES/PT), project colours and lettering, skills, reviews, Spanish and Portuguese page text |
| `lqip.js` | Blurred previews (generated) |
| `media/` | `<slug>.mp4` loops (from the GIFs), `<slug>.webp` (1600 px), `<slug>-sm.webp` (800 px), `og.jpg` |
| `source/` | The pack's covers, GIFs, `projects.json`, copy and README, plus the Workana profile and ratings pages saved on 11 Oct 2026. Not published. |
| `tools/build_media.py` | Rebuilds `media/` and `lqip.js` from `source/` (needs `pip install pillow imageio-ffmpeg`) |

## Common edits

- **Text:** edit the English in `index.html` (elements with `data-i18n`), then the same key under `strings.es` and `strings.pt` in `content.js`.
- **A project:** edit its entry in `content.js`.
  - `theme` holds the page colours while that project is on screen.
  - `look` names its lettering, `c1`–`c15` in `index.html`.
- **New media:** put `<slug>.jpg` in `source/covers/` and `<slug>.gif` in `source/gifs/`, add the project to `source/projects.json` and `content.js`, then run `python tools/build_media.py`.

## Publishing

- **Live site:** https://carterportfolio-flame.vercel.app/. Vercel builds it from this repo's `main` branch, and every push redeploys it.
- **What gets published:** `.vercelignore` keeps `source/` and `tools/` off the site.
- **If the address changes:** update `canonical`, `og:url` and `og:image` in `index.html` to match. WhatsApp and Facebook need absolute URLs to show the preview image.

## Content rules

- Every project is labelled as a self-initiated concept study.
- The site says that brands and people are fictional and the imagery is AI-assisted, as the pack's README asks.
- Project skills are "related skills" (the pack's suggested tags), not a claim of which software made each file.
- Only public Workana facts are used: 5.0 rating, Silver level, the reviews, skills and years, and languages.
- Small counts (projects completed, number of reviews) are left out on purpose.
