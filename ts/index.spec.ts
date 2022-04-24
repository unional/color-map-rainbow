import style from 'ansi-styles'
import { createRainbow } from './index'

test('create rainbow', () => {
  const actual = createRainbow(30)
  const rainbow = actual.reduce(
    (v, [r, g, b]) => `${v}${style.bgColor.ansi16m(r, g, b)} ${style.bgColor.close}`,
    '')
  console.info(rainbow)
})

test('catch negative input', () => {
  expect(() => createRainbow(-1)).toThrow()
})

test('rainbow need 9 shades', () => {
  expect(() => createRainbow(0)).toThrow()

  expect(() => createRainbow(8)).toThrow()

  expect(() => createRainbow(9)).not.toThrow()
})
