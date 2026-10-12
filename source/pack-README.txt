FIFTEEN PORTFOLIO CONCEPTS — MOTION REVISION

Each animated GIF now contains four clearly different scenes:
1. Campaign cover with a camera push-in.
2. A reframed close-up with a new headline and composition.
3. Large kinetic brand typography and animated graphic motifs.
4. A campaign showcase with moving cards, prints, portrait panels, or an interface.

FORMAT
15 GIFs: 960 × 540 pixels, 12.5 fps nominal, 9.6-second continuous loop.
Identical adjacent frames are combined by the GIF encoder without changing timing.
15 high-resolution still covers: 2240 × 1260 pixels.
Motion contact sheets show the four main compositions for every project.
The title, one-sentence description, and five suggested skill tags remain in portfolio-copy.txt.

PRODUCTION
The artwork uses generated fictional adult people and illustrated characters.
The revised motion is camera reframing and graphic animation, not full-body character animation.
These are self-initiated concept projects, not client commissions.
The five skills are suggested profile tags from the designer's supplied list, not production-software claims.
The archive includes the source artwork, prompts, and Python renderers.

REBUILD
Python 3, Pillow, NumPy, and the fonts listed in production/render_fifteen.py are required.
From production/: python3 animate_scenes.py render 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
                 python3 animate_scenes.py verify
