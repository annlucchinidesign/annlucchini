# Working rules for the Ann Lucchini portfolio

Read README.md first. It has the file map, the artboard format and the feature map.

Source of truth. The three files in project/ are the only source. The canvas at https://claude.ai/artifact/D5a93u9m6z2af2Z6sZae8d is a published copy. After each change, publish the changed file back to the same canvas URL so the two stay in sync. The GitHub copy is the working copy from now on, so commit changes here before publishing.

Editing. Make edits as exact string replacements, asserting the match count is 1 (or the number you expect) before writing. Do not retype whole files. After each edit, run the syntax check from README.md. Grep for anchor text again rather than trusting line numbers, which shift.

Do not change markup structure, layout or colors unless Luis asks. Keep repeated copy and colors in renderVals or the constructor, so future changes are one line each.

Keep the easter eggs intact unless asked. These are the disco ball, the dancer and its words, the beat distortion, the chromatic aberration, and the scratch pops. Changes to them should be small and tested by reasoning, since nothing here is browser-verified yet.

Content rules. Never invent reviews, testimonials, quotes, sales figures or project details. Use only the facts in README.md or what Luis states. The review quote slots stay as placeholders until Luis supplies real Etsy reviews. Do not reproduce album covers or other copyrighted artwork. Ask Luis for files he has permission to use.

Placeholders. Product photos, the GCF fundraiser graphic and the Spotify link are placeholders. Replace them only with what Luis provides.

Database. The donation form writes to the db capability. Do not change the write rule from this folder, because it is set by the canvas type. Raise it with Luis instead.

Dates and versions. Log each meaningful change in docs/CHANGELOG.md with the canvas version number it produced.
