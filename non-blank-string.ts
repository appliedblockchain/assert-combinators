
import Assert from './types/assert'
import { inspect } from 'util'

export const nonBlankString: Assert<string> =
  value => {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new TypeError(`Expected non-blank string, got ${inspect(value)}`)
    }
    return value
  }

export default nonBlankString
