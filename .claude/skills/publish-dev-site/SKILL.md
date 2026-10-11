---
name: publish-dev-site
description: Edit the Ann Lucchini portfolio page and publish it to dev.annlucchini.com. Use when Luis asks to change, test, or publish the site.
---

# Publish the dev site

Source is `project/Main.dc.html`. Never edit `site/` by hand; it is generated.

1. Edit `project/Main.dc.html` with exact string replacements. Assert the match count is 1 first. Do not retype the file. Grep anchor text rather than trusting line numbers.
2. Syntax check: extract the text between `data-dc-script` tags and run `new Function('DCLogic', script)` in node. Stop if it fails.
3. Keep the easter eggs, markup and colours unchanged unless Luis asks. Read CLAUDE.md for the full rules.
4. Log the change in `docs/CHANGELOG.md` with the canvas version it produces (or "dev only" if no canvas publish).
5. Rebuild: `node scripts/build-site.js`.
6. Commit `project/` and `scripts/` changes on `main` (not `site/`), then push: `git push origin main`.
7. Publish `site/` to the live branch: `git subtree split --prefix site -b gh-pages && git push -f origin gh-pages && git branch -D gh-pages`.
8. Confirm with `nslookup dev.annlucchini.com` or by loading the URL. Report the commit hashes.

Do not push or publish without Luis's go-ahead for that specific change. Do not touch DNS or the Pages settings.

The canvas copy (https://claude.ai/artifact/D5a93u9m6z2af2Z6sZae8d) is separate. Re-read it before any canvas publish, because it may have been edited elsewhere.
