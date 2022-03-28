import { inspect } from 'util'
import type { Assert } from './prelude.js'

const true_: Assert<true> =
  value => {
    if (value !== true) {
      throw new TypeError(`Expected true, got ${inspect(value)}.`)
    }
    return value
  }

export default true_
