# color-map-rainbow

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
![badge-size-es5-url]
![badge-size-es2015-url]
[![stable][stable-image]][stable-url]

[![GitHub Action][github-action-image]][github-action-url]
[![Codecov][codecov-image]][codecov-url]

[![Changesets][changesets-image]][changesets-url]

[![Visual Studio Code][vscode-image]][vscode-url]

Create rainbow of colors with minimal dependency.

Inspired from [`color-rainbow`]

## `createRainbow(shades)`

```ts
import { createRainbow } from 'color-map-rainbow'
import { rgbHex, rgbaString } from 'color-map'

// rainbow = array of [r,g,b,a=1]
const rainbow = createRainbow(72)

// transparentRainbow = array of [r,g,b, 0...0.8]
const transparentRainbow = createRainbow(72, [0, 0.8])

// use `color-map` conversion function to get
// '#000000' or 'rgba(...)`
const hexRainbow = rainbow.map(c => rgbHex(c))
const rgbaRainbow = rainbow.map(c => rgbaString(c))
```

## Contribute

```sh
# right after clone
npm install

# begin making changes
git checkout -b <branch>
npm run watch

# edit `webpack.config.es5.js` and `rollup.config.es2015.js` to exclude dependencies for the bundle if needed

# after making change(s)
git commit -m "<commit message>"
git push

# create PR
```

## NPM Commands

There are a few useful commands you can use during development.

```sh
# Run tests (and lint) automatically whenever you save a file.
npm run watch

# Run tests with coverage stats (but won't fail you if coverage does not meet criteria)
npm run test

# Manually verify the project.
# This will be ran during 'npm preversion' so you normally don't need to run this yourself.
npm run verify

# Build the project.
# You normally don't need to do this.
npm run build

# Run tslint
# You normally don't need to do this as `npm run watch` and `npm version` will automatically run lint for you.
npm run lint
```

[`color-rainbow`]: https://github.com/grant/color-rainbow
[badge-size-es5-url]: https://img.badgesize.io/cyberuni/color-map-rainbow/main/dist/color-map-rainbow.es5.js.svg?label=es5_size
[badge-size-es2015-url]: https://img.badgesize.io/cyberuni/color-map-rainbow/main/dist/color-map-rainbow.es2015.js.svg?label=es2015_size
[changesets-image]: https://img.shields.io/badge/maintained%20with-changesets-176de3.svg
[changesets-url]: https://github.com/changesets/changesets
[codecov-image]: https://codecov.io/gh/cyberuni/color-map-rainbow/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/cyberuni/color-map-rainbow
[downloads-image]: https://img.shields.io/npm/dm/color-map-rainbow.svg?style=flat
[downloads-url]: https://npmjs.org/package/color-map-rainbow
[github-action-image]: https://github.com/cyberuni/color-map-rainbow/actions/workflows/release.yml/badge.svg
[github-action-url]: https://github.com/cyberuni/color-map-rainbow/actions
[npm-image]: https://img.shields.io/npm/v/color-map-rainbow.svg?style=flat
[npm-url]: https://npmjs.org/package/color-map-rainbow
[stable-image]: http://badges.github.io/stability-badges/dist/stable.svg
[stable-url]: http://github.com/badges/stability-badges
[vscode-image]: https://img.shields.io/badge/vscode-ready-green.svg
[vscode-url]: https://code.visualstudio.com/
