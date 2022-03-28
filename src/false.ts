import { inspect } from 'util'
import type { Assert } from './prelude.js'

const false_: Assert<false> =
  value => {
    if (value !== false) {
      throw new TypeError(`Expected false, got ${inspect(value)}.`)
    }
    return value
  }

export default false_
