import type Assert from './types/assert'
import { inspect } from 'util'

export const string: Assert<string> =
  value => {
    if (typeof value !== 'string') {
      throw new TypeError(`Expected string, got ${inspect(value)}.`)
    }
    return value
  }

export default string
