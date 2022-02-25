import type { Assert } from './prelude.js'
import { inspect } from 'util'

const string: Assert<string> =
  value => {
    if (typeof value !== 'string') {
      throw new TypeError(`Expected string, got ${inspect(value)}.`)
    }
    return value
  }

export default string
