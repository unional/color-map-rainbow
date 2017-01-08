import { createColorMap, RGB, Alpha } from 'color-map'

const rainbow: { index: number, rgb: RGB }[] = [
  { index: 0, rgb: [150, 0, 90] },
  { index: 0.125, rgb: [0, 0, 200] },
  { index: 0.25, rgb: [0, 25, 255] },
  { index: 0.375, rgb: [0, 152, 255] },
  { index: 0.5, rgb: [44, 255, 150] },
  { index: 0.625, rgb: [151, 255, 0] },
  { index: 0.75, rgb: [255, 234, 0] },
  { index: 0.875, rgb: [255, 111, 0] },
  { index: 1, rgb: [255, 0, 0] }
]

/**
 * Create rainbow of colors
 * @returns array of [r,g,b]
 */
export function createRainbow(shades: number, alpha?: Alpha) {
  if (shades < 0) {
    throw new Error('Number of shades must be non-negative')
  }

  const result: RGB[] = []
  const steps: number[] = []
  for (let i = 0; i < rainbow.length; i++) {
    steps.push(Math.round(rainbow[i].index * shades))
  }

  for (let i = 0; i < rainbow.length - 1; i++) {
    const n = steps[i + 1] - steps[i]
    const from: RGB = rainbow[i].rgb;
    const to = rainbow[i + 1].rgb;
    result.push(...createColorMap(from, to, n, alpha))
  }

  return result
}
