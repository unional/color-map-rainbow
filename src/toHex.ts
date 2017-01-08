/**
 * Convert [r,g,b] to `#rgb`
 * Note: no check for array length.
 * Use it properly.
 */
export function toHex(color: number[]) {
  return color.reduce((v, c) => {
    return v + d2h(c)
  }, '#')
}

function d2h(d: number) {
  let s = (+d).toString(16)
  return s.length < 2 ? '0' + s : s
}
