import { inspect } from 'util'
import type { Assert } from './prelude.js'

const string_: Assert<string> =
  value => {
    if (typeof value !== 'string') {
      throw new TypeError(`Expected string, got ${inspect(value)}.`)
    }
    return value
  }

export default string_
