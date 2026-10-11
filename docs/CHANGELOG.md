# Changelog

Version numbers are the canvas versions of Main.dc.html unless noted.

- v26 (earlier): the first disc layout, with the marquee and visualizer work.
- v56 to v57: plum colors darkened by 20 percent, with a natural gradient from darkest to lightest. Constructor fix for mp3Tracks, which had caused a render error.
- v58: the dancer's last-second ping-pong uses a 2-second round trip, matching the speed of the main pass. It had been twice as fast.
- v59: "EVERY BODY DANCE NOW" plays before the beat distortion. The words start with the dancer and the distortion starts 1.7 seconds later.
- v60 to v61: chromatic aberration (red and cyan drop-shadows) on the beat distortion, first 4px, then 8px at full strength.
- v62: nav links centered vertically with the "Say hello" button.
- v63: 90s-style memphis graphics added to the hero, and track numbers, "The Shop" nav link and the external shop button removed, and carousel arrows replaced by dots. Scratch pops stay on screen for longer.
- v64: memphis graphics moved from the hero into the scratch pops. Songs moved from the carousel onto the flipping B-side mixtape. Quote boxes removed.
- v65 to v66: the shop card flips on a drag right from the first product, and the flip follows the pointer.
- v67: scratch pops moved to a 10-slot pool to remove a glitch above about 10 visible words. Full flip distance doubled. Play button removed. Three more songs added (eight in total).
- v68: "Flip back" button removed.
- v69: the A-side center label stays on the true center. The sideways wobble was removed.
- v70: artboards B-Grid and C-Story removed, so Main is the only artboard. Canvas note changed to "Direction for annlucchini.com".
- dev only: background fills the whole window (fixed layer behind the content). Track blurbs share one grid cell, so the section keeps the height of its tallest blurb. "shop" in the shop headline links to the Etsy shop, highlighted yellow.
- dev only: 90s scratch-pop shapes replaced with a sparkle star (single) and a 5 by 2 star grid, in yellow.
- dev only: yellow wave in the strip is 15% taller (amplitude 12px to 13.8px). Bottom dancer fix: it arms after the page has stopped moving, so pushing at the bottom no longer blocks it.
- dev only: wave amplitude raised to 20px (from 13.8px). The Etsy "shop" highlight now covers the whole word.
- dev only: track section on a 4/6 grid (list 4, picture 6; stacks on screens 820px and under). Picture is 520px tall, track names 28px so the longest fits on one line.
- dev only: page title is "annlucchini." and the favicon is a disco ball (inline SVG).
- dev only: disco mode darkens and blurs the page (dark layer inside the content wrapper, which was above the old overlay). Kept bright: the hero headline, the annlucchini. logo, Say hello and See the work. The hero headline always has disco light dots.
- dev only: disco darkening now comes from filters on the background and the content (same level, so the margins and the centre match). Kept elements brighten back. Glow fades out after disco (--ga). Disco ball decays instead of snapping. Title lights are scattered, not a grid.
- dev only: disco darkening removed (all elements back to normal). Title light dots removed. Button and title glow now fades with the disco ball (glow strength follows the ball height).

Current state (after v69): the sprite path in the GitHub copy points to assets/, where the canvas copy uses /_blob/.
