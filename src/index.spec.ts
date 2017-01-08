import test from 'ava'
import * as style from 'ansi-styles'
import { createRainbow } from './index'

test('create rainbow', t => {
  let actual = createRainbow(30)
  const rainbow = actual.reduce((v, c) => {
    return v + style.bgColor.ansi16m.rgb(...c) + ' ' + style.bgColor.close
  }, '')
  console.log(rainbow)
})

test('catch negative input', t => {
  t.throws(() => createRainbow(-1))
})

test('rainbow need 9 shades', t => {
  t.throws(() => createRainbow(0))

  t.throws(() => createRainbow(8))
  t.notThrows(() => createRainbow(9))
})
