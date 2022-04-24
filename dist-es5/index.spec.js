"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ansi_styles_1 = __importDefault(require("ansi-styles"));
var index_1 = require("./index");
test('create rainbow', function () {
    var actual = (0, index_1.createRainbow)(30);
    var rainbow = actual.reduce(function (v, _a) {
        var r = _a[0], g = _a[1], b = _a[2];
        return "".concat(v).concat(ansi_styles_1.default.bgColor.ansi16m(r, g, b), " ").concat(ansi_styles_1.default.bgColor.close);
    }, '');
    console.info(rainbow);
});
test('catch negative input', function () {
    expect(function () { return (0, index_1.createRainbow)(-1); }).toThrow();
});
test('rainbow need 9 shades', function () {
    expect(function () { return (0, index_1.createRainbow)(0); }).toThrow();
    expect(function () { return (0, index_1.createRainbow)(8); }).toThrow();
    expect(function () { return (0, index_1.createRainbow)(9); }).not.toThrow();
});
//# sourceMappingURL=index.spec.js.map