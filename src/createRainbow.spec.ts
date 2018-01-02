import test from 'ava'

import { createRainbow } from './createRainbow'

test('match exact colors', t => {
  let actual = createRainbow(72, [0, 1])
  t.is(actual.length, 72)
  t.deepEqual(actual, [[150, 0, 90, 0],
  [131, 0, 104, 0.125],
  [113, 0, 118, 0.25],
  [94, 0, 131, 0.375],
  [75, 0, 145, 0.5],
  [56, 0, 159, 0.625],
  [38, 0, 173, 0.75],
  [19, 0, 186, 0.875],
  [0, 0, 200, 1],
  [0, 0, 200, 0],
  [0, 3, 207, 0.125],
  [0, 6, 214, 0.25],
  [0, 9, 221, 0.375],
  [0, 13, 228, 0.5],
  [0, 16, 234, 0.625],
  [0, 19, 241, 0.75],
  [0, 22, 248, 0.875],
  [0, 25, 255, 1],
  [0, 25, 255, 0],
  [0, 41, 255, 0.125],
  [0, 57, 255, 0.25],
  [0, 73, 255, 0.375],
  [0, 89, 255, 0.5],
  [0, 104, 255, 0.625],
  [0, 120, 255, 0.75],
  [0, 136, 255, 0.875],
  [0, 152, 255, 1],
  [0, 152, 255, 0],
  [6, 165, 242, 0.125],
  [11, 178, 229, 0.25],
  [17, 191, 216, 0.375],
  [22, 204, 203, 0.5],
  [28, 216, 189, 0.625],
  [33, 229, 176, 0.75],
  [39, 242, 163, 0.875],
  [44, 255, 150, 1],
  [44, 255, 150, 0],
  [57, 255, 131, 0.125],
  [71, 255, 113, 0.25],
  [84, 255, 94, 0.375],
  [98, 255, 75, 0.5],
  [111, 255, 56, 0.625],
  [124, 255, 38, 0.75],
  [138, 255, 19, 0.875],
  [151, 255, 0, 1],
  [151, 255, 0, 0],
  [164, 252, 0, 0.125],
  [177, 250, 0, 0.25],
  [190, 247, 0, 0.375],
  [203, 245, 0, 0.5],
  [216, 242, 0, 0.625],
  [229, 239, 0, 0.75],
  [242, 237, 0, 0.875],
  [255, 234, 0, 1],
  [255, 234, 0, 0],
  [255, 219, 0, 0.125],
  [255, 203, 0, 0.25],
  [255, 188, 0, 0.375],
  [255, 173, 0, 0.5],
  [255, 157, 0, 0.625],
  [255, 142, 0, 0.75],
  [255, 126, 0, 0.875],
  [255, 111, 0, 1],
  [255, 111, 0, 0],
  [255, 97, 0, 0.125],
  [255, 83, 0, 0.25],
  [255, 69, 0, 0.375],
  [255, 56, 0, 0.5],
  [255, 42, 0, 0.625],
  [255, 28, 0, 0.75],
  [255, 14, 0, 0.875],
  [255, 0, 0, 1]])

  actual = createRainbow(72)
  t.is(actual.length, 72)
  t.deepEqual(actual, [[150, 0, 90, 1],
  [131, 0, 104, 1],
  [113, 0, 118, 1],
  [94, 0, 131, 1],
  [75, 0, 145, 1],
  [56, 0, 159, 1],
  [38, 0, 173, 1],
  [19, 0, 186, 1],
  [0, 0, 200, 1],
  [0, 0, 200, 1],
  [0, 3, 207, 1],
  [0, 6, 214, 1],
  [0, 9, 221, 1],
  [0, 13, 228, 1],
  [0, 16, 234, 1],
  [0, 19, 241, 1],
  [0, 22, 248, 1],
  [0, 25, 255, 1],
  [0, 25, 255, 1],
  [0, 41, 255, 1],
  [0, 57, 255, 1],
  [0, 73, 255, 1],
  [0, 89, 255, 1],
  [0, 104, 255, 1],
  [0, 120, 255, 1],
  [0, 136, 255, 1],
  [0, 152, 255, 1],
  [0, 152, 255, 1],
  [6, 165, 242, 1],
  [11, 178, 229, 1],
  [17, 191, 216, 1],
  [22, 204, 203, 1],
  [28, 216, 189, 1],
  [33, 229, 176, 1],
  [39, 242, 163, 1],
  [44, 255, 150, 1],
  [44, 255, 150, 1],
  [57, 255, 131, 1],
  [71, 255, 113, 1],
  [84, 255, 94, 1],
  [98, 255, 75, 1],
  [111, 255, 56, 1],
  [124, 255, 38, 1],
  [138, 255, 19, 1],
  [151, 255, 0, 1],
  [151, 255, 0, 1],
  [164, 252, 0, 1],
  [177, 250, 0, 1],
  [190, 247, 0, 1],
  [203, 245, 0, 1],
  [216, 242, 0, 1],
  [229, 239, 0, 1],
  [242, 237, 0, 1],
  [255, 234, 0, 1],
  [255, 234, 0, 1],
  [255, 219, 0, 1],
  [255, 203, 0, 1],
  [255, 188, 0, 1],
  [255, 173, 0, 1],
  [255, 157, 0, 1],
  [255, 142, 0, 1],
  [255, 126, 0, 1],
  [255, 111, 0, 1],
  [255, 111, 0, 1],
  [255, 97, 0, 1],
  [255, 83, 0, 1],
  [255, 69, 0, 1],
  [255, 56, 0, 1],
  [255, 42, 0, 1],
  [255, 28, 0, 1],
  [255, 14, 0, 1],
  [255, 0, 0, 1]])
})
