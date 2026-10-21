# Ann Lucchini portfolio site

This folder holds everything about the portfolio site: the design-canvas artboard, the sprite asset, and the notes needed to keep working on it. It is meant to be copied into its own GitHub repository as-is.

Live canvas (private, owned by Luis): https://claude.ai/artifact/D5a93u9m6z2af2Z6sZae8d
Canvas title: Ann Lucchini Portfolio Redesign. Last published version at the time of writing: 69.

## Layout

- project/Main.dc.html is artboard A, "Disco Floor". It is the only artboard. Artboards B (Raw Grid) and C (The Long Way Round) were removed and remain in git history.
- project/canvas.json is the canvas index (artboard names, positions, sizes). Change it only when an artboard is added, removed, moved or resized.
- assets/bfbe6285486b15a653eb8b8bddebd8ac.webp is the dancer sprite sheet (6 by 6 grid of 180 by 320 frames). Main.dc.html loads it by relative path.
- assets/928e0860aa4fb9f4a3db796c229ebb3a.webp is an uploaded image that no current artboard references. Check with Luis before deleting it.
- CLAUDE.md holds working rules for the code sessions. Read it first.
- docs/CHANGELOG.md records what changed in each recent version.
- docs/SKILL.md is the editing guide that used to live in the portfolio-redesign-edits skill. It is kept here so the repo is self-contained.

## How the artboards work

Each file is a design-canvas artboard: a small HTML document with an <x-dc> block of markup, a <helmet> with fonts and CSS, and a <script type="text/x-dc" data-dc-script> block. The script defines class Component extends DCLogic. renderVals() returns the values that the markup reads with double braces, for example {{holes}}. sc-for loops over a list and gives each item an alias. Handlers are passed as functions, for example onClick="{{openDonate}}". To re-render after a state change, call this.setState({ ui: Date.now() }). A per-frame animation loop lives in tick(), which is registered with requestAnimationFrame in componentDidMount.

The files reference ./support.js, which is the canvas runtime. It is not in this folder. Without it the artboards will not render outside the canvas. Either export it from the canvas or ask Luis for it before the GitHub copy goes live.

Syntax check before publishing: pull out the text between the data-dc-script tags and run new Function('DCLogic', script) in node. A clean run means it parses. It does not mean it renders correctly, and nothing has been checked in a browser yet.

## Main.dc.html feature map

The top of the page has the nav, with links to Work, Giving back and Say hello. The hero has no decoration. Its headline is "Designs that sell, shine and stick."

The A-Side section ("Pick a track") is a hover list. Each row has a zero-padded track number, a title and a tag. The preview on the right changes with the selection. The disc colors come from this.stopsA and this.stopsB, set in the constructor. The center label is static. The outer label moves with scratch speed, and tick() low-passes it with a 0.2 lerp.

Scratch pops are the words and 90s shapes that appear while you drag a disc. spawnPop() writes into a fixed pool of 10 slots (this.pops, with this.popSlot as the cursor). Slots are overwritten in place, never removed, because re-indexing caused the glitch. About 40 percent of pops are shapes, taken from this.popShapes, and the rest are words from this.popWords. Pops last about 2.4 to 3.0 seconds and spawn at least 240 ms apart. Half of them land anywhere on the page and half land around the cursor.

The shop section (id "shop") is a flip card. Its front has the headline "I built a brand, started with a baby on my hip.", the paragraph, three stat pills (4.9/5 average, 876 reviews, 4,560+ sales) and the product carousel. The carousel has three product slides (indexes 3 to 5) with product photo placeholders and three dots at the bottom. The dots mark the product slides only. Dragging right on the first product slide turns the card, and the turn follows the pointer. A full turn takes about 400px of drag. Releasing past 90 degrees completes the flip. Dragging left on the B-side turns it back. The B-side is the mixtape: a heading, "My mixtape to you", a line about eight comebacks, and eight tracks with numbers. The tracks are I Want You Back (Jackson 5), I'm Back (Eminem), Back in the Saddle (Aerosmith), Back in Black (AC/DC), Welcome Back (John Sebastian), Back for Good (Take That), Back to Life (Soul II Soul) and Back on the Chain Gang (The Pretenders). Clicking a track selects it. Below them is a "Listen on my Spotify playlist" button, which currently links to # and needs Luis's playlist URL. There is no audio.

The three review quote cards were removed on request. Luis will decide what goes there later. The stat pills stay.

The Giving back section ("Design that feeds kids.") has the GCF fundraiser graphic placeholder and a Donate to GCF button. The button links to the DonorBox page (https://donorbox.org/creativity-that-nourishes-gcf) in a new tab. The page has no donation form, no leaderboard and no db calls; the donations, contacts and dethrone-notices collections are no longer written from this page (changelog v73).

The easter egg dancer sits bottom-right and scrolls in when you reach the bottom of the page and scroll or swipe up. It plays 0 to 4.8 seconds of frames, holds the last second with a 2-second ping-pong, and exits. The words "EVERY BODY DANCE NOW" start with the dancer, and the beat distortion starts 1.7 seconds later. The distortion is driven by boomStyle in renderVals. It uses blur, skew, scale and red and cyan drop-shadows at 8px for chromatic aberration.

Closing: "You pick the next track." followed by the email address and the Zaandam line.

The disco ball, with spots and rays, appears when you pull down at the top of the page. Its wheel and cord are in the markup, driven by L and disco in tick().

## Shared facts

Email: annlucchinidesign@gmail.com. Phone: +31 6 25464717. Location: Zaandam, Netherlands. Etsy: etsy.com/shop/ShopCafeDisco. Shop site: cafediscostudios.com. The Main palette is coral #ff6b5a, yellow #ffd166, mint #06d6a0, violet #b388ff, and plum #1a0b2e as the background.

Fonts load from Google Fonts. Main uses Bricolage Grotesque, DM Sans, Bungee, Bangers, Rubik Mono One and Press Start 2P.

## Open items

Luis still needs to decide these: whether the donations, contacts and dethrone-notices collections should be deleted now that the page no longer writes to them, and whether donor emails already in the contacts collection should be hidden from page readers; how dethrone notices get delivered; what goes in the review quote slots (only real Etsy reviews, never invented ones); whether the shop product photos need replacing; and which album covers he has permission to use (the assistant cannot reproduce album art).

Still needed: the Spotify playlist URL; the B-side tracks' real album art, if he wants it; and a visual check in a browser of the flip, the scratch pops and the dancer. None of these has been verified in a browser yet.

## Dev site (GitHub Pages)

Run `node scripts/build-site.js` to rebuild `site/` from `project/`. It writes `site/index.html` with the sprite path changed to `assets/`, copies the sprites, and adds `CNAME` (dev.annlucchini.com) and `.nojekyll`. Publish the `site/` folder with GitHub Pages. Edit `project/` only, then rebuild.

Known gaps before the site works: `support.js` is still missing, so the page will not render.
