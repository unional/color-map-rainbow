# rainbow-color

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]

Create rainbow of colors with minimal dependency.
Size < 12 k not minimized.

## `createRainbow(shades)`

```ts
import { createRainbow } from 'rainbow-color'
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

# edit `webpack.config.dev.js` to exclude dependencies for the global build.

# after making change(s)
git commit -m "<commit message>"
git push

# create PR
```

## Npm Commands

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

Generated by [`generator-unional@0.3.1`](https://github.com/unional/unional-cli)

[npm-image]: https://img.shields.io/npm/v/rainbow-color.svg?style=flat
[npm-url]: https://npmjs.org/package/rainbow-color
[downloads-image]: https://img.shields.io/npm/dm/rainbow-color.svg?style=flat
[downloads-url]: https://npmjs.org/package/rainbow-color
[travis-image]: https://img.shields.io/travis/unional/rainbow-color.svg?style=flat
[travis-url]: https://travis-ci.org/unional/rainbow-color
[coveralls-image]: https://coveralls.io/repos/github/unional/rainbow-color/badge.svg
[coveralls-url]: https://coveralls.io/github/unional/rainbow-color
