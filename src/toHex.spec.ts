import test from 'ava'

import { toHex } from './toHex'

test('[0,0,0] => #000000', t => {
  t.is(toHex([0, 0, 0]), '#000000')
})

test('[255,128,16] => #ff8010', t => {
  t.is(toHex([255, 128, 16]), '#ff8010')
})
