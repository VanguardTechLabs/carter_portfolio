# Carter-TV · Carter M. N.

The design portfolio for the Workana profile of Carter M. N., a graphic designer from the USA. The whole site is one 70s TV set, and the fifteen concept projects from the pack's motion revision (`15-distinct-portfolio-projects (2).zip`) are its channels. English comes first; Spanish and Portuguese are available as "CC" subtitles.

There is no build step: open `index.html` through a local server (video seeking needs HTTP Range support, which `python -m http.server` lacks; `npx http-server` works).

Live: https://carterportfolio-flame.vercel.app/ (Vercel deploys every push to `main`).

## Channels

| Channel | What's on |
| --- | --- |
| 00 | Program guide: every channel, also listed in the card beside the set |
| 01–15 | The fifteen projects. Each plays a 9.6-second loop of four scenes (cover, close-up, big type, showcase) |
| 16 | Viewer mail: the 5.0 rating, the public Workana reviews quoted word for word (translated where needed) and recent jobs |
| 17 | Credits: the skills and years from the Workana profile, as rolling end credits |
| 18 | Call now: hire Carter on Workana, the site's only contact |

The card beside the set ("The Listings") holds the readable text for whatever is on. Phones and tablets show it under the set.

## Controls

- **Changing channel:** turn the dial (drag it or scroll the wheel over it), click a number on it, or use CH − / +.
  - Keyboard: the arrow keys, or two digits to tune straight in.
  - Phones: swipe the screen sideways.
  - The Guide, Mail, Credits and Call now keys jump to channels 00, 16, 17 and 18.
- **Segments:** four lights, plus four stills in the listing, show which scene is playing. Click one to jump to that scene.
- **Switches:**
  - CC cycles EN → ES → PT.
  - Picture switches between Vintage and Clean.
  - Pause pauses the picture. Clicking the screen does the same, and so does Space.
  - Full (or F, or a double-click on the screen) goes full screen.
  - Power switches the set off and on.
- **Antennas:** drag one and the picture gets snowy; let go and it springs back.
- **Links:** `#ch06` in the address opens on that channel.

## Motion

- **Vintage picture:** static between channels, a rolling picture, a power-on line, scan lines, a rolling guide and credits, and a spinning starburst on Call now.
- **Clean picture:** drops all of that. The project videos still play, since they are the work itself; Pause stops them.
- **Default:** the setting starts on Clean when the system asks for reduced motion, which Windows Server and Remote Desktop do by default. The browser remembers the viewer's choice.
- **Phones:** there is no glow behind the set. Static is drawn only during the brief moment a channel changes.

## Files

| Path | What it holds |
| --- | --- |
| `index.html` | The room, the set, the listings, styles and script; English page text |
| `content.js` | Projects (EN/ES/PT), skills, reviews, all script words in EN/ES/PT, Spanish and Portuguese page text |
| `lqip.js` | Blurred previews (generated); used for the glow behind the set |
| `media/` | `<slug>.mp4` loops (12.5 fps), `<slug>.webp` (1600 px), `<slug>-sm.webp` (800 px), `<slug>-scenes.webp` (four-scene storyboard sheet), `og.jpg` |
| `source/` | The pack's covers, storyboards (as `<slug>.jpg`), `projects.json`, copy and README, plus the Workana profile and ratings pages saved on 11 Oct 2026. Not published. The GIFs (`source/gifs/`, about 230 MB) are kept out of git; copy them from the pack's `gifs/` folder before rebuilding. |
| `tools/build_media.py` | Rebuilds the videos, images and `lqip.js` from `source/` (needs `pip install pillow imageio-ffmpeg`) |
| `tools/og.js` | Makes `media/og.jpg`, the link preview, as a screenshot of the set on channel 06 (needs Playwright and a local server) |

## Common edits

- **Text:** edit the English in `index.html` (elements with `data-i18n`), then the same key under `strings.es` and `strings.pt` in `content.js`. Words the script writes are under `ui.en`, `ui.es` and `ui.pt`.
- **A project:** edit its entry in `content.js`. `theme.accent` colours its on-screen caption and the highlight in the listing.
- **Adding a project:** the special channels move up with the number of projects (mail is N+1, credits N+2, call N+3).
- **New media:** put `<slug>.jpg` in `source/covers/`, `<slug>.gif` in `source/gifs/` and the storyboard sheet in `source/storyboards/<slug>.jpg`. Add the project to `source/projects.json` and `content.js`, then run `python tools/build_media.py`.
  - The segments assume four equal scenes in a 9.6-second loop (`SCENE = 2.4` in `index.html`). Change that if a new pack is timed differently.
- **If the address changes:** update `canonical`, `og:url` and `og:image` in `index.html`.

## Content rules

- Every project is labelled as a self-initiated concept study, on screen and in the listing.
- The fine print says that brands and people are fictional and the imagery is AI-assisted, as the pack's README asks.
- Project skills are "related skills" (the pack's suggested tags), not a claim of which software made each file.
- Only public Workana facts are used: 5.0 rating, Silver level, the reviews, skills and years, and languages.
- Small counts (projects completed, number of reviews) are left out on purpose.
- Carter's gender is unknown, so the copy uses the name and neutral wording in all three languages.
