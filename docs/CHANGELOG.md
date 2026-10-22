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
- v73: "Donate to GCF" links to the DonorBox page (https://donorbox.org/creativity-that-nourishes-gcf), opening in a new tab. The donation form and the leaderboard are removed, so the page no longer reads from or writes to the db capability. Applied to the canvas copy as it stood before this publish, which did not include the dev-only work below.
- dev only: background fills the whole window (fixed layer behind the content). Track blurbs share one grid cell, so the section keeps the height of its tallest blurb. "shop" in the shop headline links to the Etsy shop, highlighted yellow.
- dev only: 90s scratch-pop shapes replaced with a sparkle star (single) and a 5 by 2 star grid, in yellow.
- dev only: yellow wave in the strip is 15% taller (amplitude 12px to 13.8px). Bottom dancer fix: it arms after the page has stopped moving, so pushing at the bottom no longer blocks it.
- dev only: wave amplitude raised to 20px (from 13.8px). The Etsy "shop" highlight now covers the whole word.
- dev only: track section on a 4/6 grid (list 4, picture 6; stacks on screens 820px and under). Picture is 520px tall, track names 28px so the longest fits on one line.
- dev only: page title is "annlucchini." and the favicon is a disco ball (inline SVG).
- dev only: disco mode darkens and blurs the page (dark layer inside the content wrapper, which was above the old overlay). Kept bright: the hero headline, the annlucchini. logo, Say hello and See the work. The hero headline always has disco light dots.
- dev only: disco darkening now comes from filters on the background and the content (same level, so the margins and the centre match). Kept elements brighten back. Glow fades out after disco (--ga). Disco ball decays instead of snapping. Title lights are scattered, not a grid.
- dev only: disco darkening removed (all elements back to normal). Title light dots removed. Button and title glow now fades with the disco ball (glow strength follows the ball height).
- dev only: Pick a track heading and paragraph moved into the left column, above the list. Picture column starts at the top, aligned with the heading, and stays sticky while the list scrolls.
- dev only: disc opposite-end stop changed from #816a99 to #6029a9 (the darkest plum #1a0b2e lightened 30 points in HSL), on both discs.
- dev only: button and title glow fades out as the ball rises out of view (over the last 120px of ball height). Glow strength written to 3 decimals to avoid stepping. Track names 22px.
- dev only: hero headline replaced with a mixtape cassette label. Cream "side A" strip (Press Start 2P label, 12px minimum) holding "Designs that sell.", a yellow asterisk divider, and "shine & stick." in Rubik Mono One with "& stick." in mint. The card is sized in container units, so it shrinks as one unit on phones.

Current state (after v69): the sprite path in the GitHub copy points to assets/, where the canvas copy uses /_blob/.
- dev only: easter egg tracker. A small fixed pill at bottom left shows "eggs found N of 4" (disco ball, dancer with its words and beat distortion, playlist card flip, scratching). Each egg is saved in localStorage (try/catch) the first time it triggers. Finding all 4 shows a placeholder reward line, copy in this.eggCopy, colors in this.eggColors.
- dev only: working copy reset to the last commit (33e1e3e), keeping the egg tracker and the Donate to GCF link, and dropping the cassette hero (the simple "Designs that sell, shine & stick." headline is back). Architect's first batch applied: each scratch pop slot keeps its own keyframe parity, so a reused slot restarts its pop-in; disc spin, ball retract and dancer exit scale with frame time (capped at 3 frames); the flip drag tracks its own pointer, releases on mouse-up outside the window, and cancels on pointercancel; the face turned away is inert and aria-hidden; the page wrapper has no transform or filter while the beat is idle; a parked ball (off screen, not disco) keeps a constant style string. Not published to the canvas.
- dev only: the egg tracker is hidden until the first egg is found (display:none while the count is 0).
- dev only: review fixes to the first batch. The flip ignores pointers other than the one that started the drag (shelfUp and shelfCancel check pointerId), and the disc label wobble scales with frame time. The hidden flip face uses inert and aria-hidden set by value-position holes; the earlier attribute-name holes were never applied by the runtime.
- dev only: second batch. A still disc no longer flings on release (velocity cleared after 80 ms without movement). The whole page shows a grabbing cursor during a drag. Landmark on the nav, the duplicate marquee copy is aria-hidden (the first copy stays readable), the active dot has aria-current, and the B-side track buttons have aria-pressed. Nav links and carousel dots have larger hit areas with no visual change. Inline Bricolage Grotesque declarations fall back to sans-serif. Removed unused CSS (.spin, .strip-item, .lcd-run, lcdscroll, medalpulse), mp3Tracks and ballY. The egg code is untouched. README corrected to match the code: outer label not rendered, pops land in the viewport, dancer trigger and 0.5 s hold, aberration peak 9.6px, no rays, coral unused.
- dev only: correction to the "Pick a track" entry above. The preview does not stick yet, because the ancestor with overflow:hidden is the scroll container. Pending the layout decision.
- dev only: the egg counter starts at zero on every page load. Saved egg progress in local storage is no longer read or written, so a browser that found all four eggs in testing no longer shows "4 of 4".
- dev only: phone layout (viewport meta; side gutters 16px under 600px; headings and the email scale with the screen). Hover feedback (brightness on hover with a fine pointer; scale 0.97 on press). The preview background fades over 180 ms. Track numbers brighter (0.45 to 0.7 opacity; B-side 0.5 to 0.7). Firefox line-mode wheel deltas normalised, so mouse wheel triggers the disco ball and the dancer. Unused egg code removed: the rays div and ring style, and the lastPush, boomStart and boomAmp variables.
- dev only: preview fade is 0.4 s. The track colour is a blurred backlight behind the photo area that fades between tracks and drifts slowly (off with reduced motion). "Pick a track" sticks while you scroll on screens wider than 820px (the root wrapper clips instead of scrolling, and the list column has a minimum height so there is room to stick). The disc pair is square and shrinks with the screen, so it stays round on phones.
- dev only: the track backlight is now five soft spotlights behind the preview, in the track colour at 30% opacity, blurred. Each drifts slowly along the border and toward and away from it (off with reduced motion). Replaces the single glow block.
- dev only: backlight spots are placed behind the placeholder area and sized 50 to 90 percent of its width and height. A layer three times the panel size, masked so the glow fades across the gutter, stops the hard edge at the page right side (the root clip).
