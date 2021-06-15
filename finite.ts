import type Assert from './types/assert'
import { inspect } from 'util'

const finite: Assert<number> =
  value => {
    if (typeof value !== 'number' || !Number.isFinite(value)) {
      throw new TypeError(`Expected finite number, got ${inspect(value)}.`)
    }
    return value
  }

export default finite
