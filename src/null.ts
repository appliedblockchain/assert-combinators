import type { Assert } from './prelude.js'
import { inspect } from 'util'

const null_: Assert<null> =
  value => {
    if (value !== null) {
      throw new TypeError(`Expected null, got ${inspect(value)}.`)
    }
    return null
  }

export default null_
