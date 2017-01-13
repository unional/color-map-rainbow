var ColorMapRainbow = (function (colorMap,globalStore) {
'use strict';

colorMap = 'default' in colorMap ? colorMap['default'] : colorMap;
globalStore = 'default' in globalStore ? globalStore['default'] : globalStore;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var createRainbow_1 = createCommonjsModule(function (module, exports) {
"use strict";
var color_map_1 = colorMap;
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
    return color_map_1.createColorsFromMap(exports.rainbow, shades, alpha);
}
exports.createRainbow = createRainbow;

});

var index = createCommonjsModule(function (module, exports) {
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(createRainbow_1);
var global_store_1 = globalStore;
var store = global_store_1.default('color-map-rainbow', {});
console.log(store);

});

return index;

}(ColorMap,GlobalStore));
//# sourceMappingURL=color-map-rainbow.js.map
