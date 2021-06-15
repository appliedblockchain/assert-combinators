import { inspect } from 'util'
import type Assert from './types/assert'

const positive: Assert<number> =
  value => {
    if (typeof value !== 'number') {
      throw new TypeError(`Expected number, got ${inspect(value)}.`)
    }
    if (value <= 0) {
      throw new TypeError(`Expected positive number, got ${inspect(value)}.`)
    }
    return value
  }

export default positive
