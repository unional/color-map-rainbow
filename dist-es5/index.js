"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRainbow = exports.rainbow = void 0;
var color_map_1 = require("color-map");
exports.rainbow = [
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
    return (0, color_map_1.createColorsFromMap)(exports.rainbow, shades, alpha);
}
exports.createRainbow = createRainbow;
//# sourceMappingURL=index.js.map