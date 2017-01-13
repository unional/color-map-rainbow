export * from './createRainbow'

import getStore from 'global-store'

const store = getStore('color-map-rainbow', {})
console.log(store)
