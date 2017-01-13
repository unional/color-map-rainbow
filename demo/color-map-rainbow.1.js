var ColorMapRainbow=function(r,n){
  "use strict";
  function o(r,n){return n={exports:{}},
  r(n,n.exports),
  n.exports
}
r="default"in r?r.default:r,
n="default"in n?n.default:n;
var e=o(function(n,o){function e(r,n){return i.createColorsFromMap(o.rainbow,r,n)}
var i=r;
o.rainbow=[{index:0,rgb:[150,0,90]},{index:.125,rgb:[0,0,200]},{index:.25,rgb:[0,25,255]},{index:.375,rgb:[0,152,255]},{index:.5,rgb:[44,255,150]},{index:.625,rgb:[151,255,0]},{index:.75,rgb:[255,234,0]},{index:.875,rgb:[255,111,0]},{index:1,rgb:[255,0,0]}],o.createRainbow=e}),
i=o(function(r,o){function i(r){for(var n in r)o.hasOwnProperty(n)||(o[n]=r[n])}i(e);
var a=n,t=a.default("color-map-rainbow",{});console.log(t)});return i}(ColorMap,GlobalStore);
//# sourceMappingURL=color-map-rainbow.js.map
