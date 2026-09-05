---
'color-map-rainbow': major
---

Ship real ESM and CJS builds, with types.

The package is now `"type": "module"` with an `exports` map: `esm/index.js` for
`import`, `cjs/index.js` for `require`, and `esm/index.d.ts` for types. That
replaces `dist-es5/` and `dist-es2015/`, so a deep import of either path no
longer resolves — hence the major.

This also fixes types never reaching consumers at all. 2.1.5 declared
`typings: dist-es5/index.d.ts` and `module: dist-es2015/index.js`, but `files`
listed only `dist`, so neither path was in the published tarball. TypeScript
consumers have been falling back to `any` since 2.0.

The two browser bundles keep their published filenames —
`dist/color-map-rainbow.es5.js` (reads `color-map` off the `ColorMap` global) and
`dist/color-map-rainbow.es2015.js` (self-contained) — so `<script src>` and the
badgesize links are unaffected.

The `color-map` dependency moves from `^1.1.0` to `^2.2.0`. The public API of
`createRainbow` and `rainbow` is unchanged.
