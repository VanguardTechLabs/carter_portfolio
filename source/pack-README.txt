FIFTEEN DISTINCT PORTFOLIO CONCEPTS

CONTENTS
- 15 individual animated GIF covers: 1120 × 630 px, 4.8 seconds, continuous looping.
- 15 still JPG covers: 2240 × 1260 px.
- An overview image showing all 15 directions.
- portfolio-copy.txt: copy-ready title, one-sentence description, and five suggested skill tags per project.
- project-guide.md and projects.json: the same project details in reusable formats.
- production/: Python renderer, original image prompts, and source artwork.

USE
Use a project's GIF as its animated cover where your portfolio platform accepts GIF files.
Use the matching JPG when a still cover is needed.
Present these as self-initiated concept projects; no client commissions or measured business results are claimed.

PRODUCTION NOTES
The human subjects and illustrated characters were generated as fictional adults age 25 or older.
Raster artwork was created with the built-in image-generation tool.
Typography, layouts, decorative motion, GIF encoding, and packaging were produced programmatically with Pillow and NumPy.
The five skills per project are suggested tags from the designer's supplied stack, not a claim that those Adobe applications were used to produce these files.
These are animated campaign and portfolio cover concepts, not full client identity systems, live websites, or rigged 3D character animations.
Brand names are creative placeholders and have not been trademark-cleared.

REBUILD
Python 3 with Pillow and NumPy is required. The renderer lists the Linux font paths it uses.
From production/: python3 render_fifteen.py covers
                 python3 render_fifteen.py gifs 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
                 python3 render_fifteen.py verify
