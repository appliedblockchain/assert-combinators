import { inspect } from 'util'
import type Assert from './types/assert'

const nonBlankString: Assert<string> =
  value => {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new TypeError(`Expected non-blank string, got ${inspect(value)}`)
    }
    return value
  }

export default nonBlankString
