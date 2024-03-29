import type { Assert } from './prelude.js'
import { inspect } from 'util'

const safeInteger: Assert<number> =
  value => {
    if (typeof value !== 'number' || !Number.isSafeInteger(value)) {
      throw new TypeError(`Expected safe integer, got ${inspect(value)}.`)
    }
    return value
  }

export default safeInteger
