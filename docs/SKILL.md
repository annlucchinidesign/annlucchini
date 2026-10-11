# Editing the portfolio site

This is the editing guide for the Ann Lucchini portfolio. The full feature map is in ../README.md and the working rules are in ../CLAUDE.md. Read both before editing.

Workflow for any change:

1. Work in project/ in this repository. Find the anchor text with grep, not line numbers.
2. Edit with an exact replacement in Python, asserting the match count before writing.
3. Syntax-check: pull out the text between the data-dc-script tags and run new Function('DCLogic', script) in node.
4. Publish the changed file to the canvas URL in CLAUDE.md, with root set to the folder that contains project/ and file_path set to the changed file. Add a line to docs/CHANGELOG.md with the new version number.
5. Give Luis a one-sentence summary. Do not verify visually unless he asks.

Anchors that are often edited: the disc colors (this.stopsA and this.stopsB), the track data (name:'Shop Cafe Disco' in renderVals), the scratch pops (spawnPop and popWords, popShapes), the shop flip (flipStyle, shelfDown, shelfMove, shelfUp and the mixRows list), the boom and chromatic aberration (boomStyle), the dancer word timing (WD and beatT0), the hero (Designs that), the nav (ann lucchini), and in B-Grid and C-Story the card and chapter data (all, chs).

Rules that always apply: do not change the layout without being asked, do not invent reviews or quotes, do not reproduce album art, keep placeholders until Luis supplies real content, and leave the database write rule alone.
