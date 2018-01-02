var ColorMapRainbow = (function (exports) {
'use strict';

function createColors(from, to, shades, alpha = [1, 1]) {
    const rgba = [];
    const start = [...from];
    const diff = [
        to[0] - from[0],
        to[1] - from[1],
        to[2] - from[2]
    ];
    start.push(alpha[0]);
    diff.push(alpha[1] - alpha[0]);
    const inc = 1 /
        Math.max(shades - 1, 1);
    for (let i = 0; i < shades; i++) {
        const color = [
            Math.round(start[0] + i * diff[0] * inc),
            Math.round(start[1] + i * diff[1] * inc),
            Math.round(start[2] + i * diff[2] * inc),
            start[3] + i * diff[3] * inc
        ];
        rgba.push(color);
    }
    return rgba;
}

/**
 * Create colors with specified color map.
 */
function createColorsFromMap(colormap, shades, alpha) {
    if (shades < colormap.length) {
        throw new Error(`Requires at least ${colormap.length} shades.`);
    }
    const result = [];
    const steps = [];
    for (let i = 0; i < colormap.length; i++) {
        steps.push(Math.round(colormap[i].index * shades));
    }
    for (let i = 0; i < colormap.length - 1; i++) {
        const n = steps[i + 1] - steps[i];
        const from = colormap[i].rgb;
        const to = colormap[i + 1].rgb;
        result.push(...createColors(from, to, n, alpha));
    }
    return result;
}

/**
 * Convert `RGB` to `#rgb`
 * JavaScript note: no check for array length, use it properly.
 */

const rainbow = [
    { index: 0, rgb: [150, 0, 90] },
    { index: 0.125, rgb: [0, 0, 200] },
    { index: 0.25, rgb: [0, 25, 255] },
    { index: 0.375, rgb: [0, 152, 255] },
    { index: 0.5, rgb: [44, 255, 150] },
    { index: 0.625, rgb: [151, 255, 0] },
    { index: 0.75, rgb: [255, 234, 0] },
    { index: 0.875, rgb: [255, 111, 0] },
    { index: 1, rgb: [255, 0, 0] }
];
/**
 * Create rainbow of colors
 * @returns array of [r,g,b,a]
 */
function createRainbow(shades, alpha) {
    return createColorsFromMap(rainbow, shades, alpha);
}

exports.rainbow = rainbow;
exports.createRainbow = createRainbow;

return exports;

}({}));
//# sourceMappingURL=color-map-rainbow.es2015.js.map
