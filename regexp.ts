import type Assert from './types/assert'
import { inspect } from 'util'

export const regexp: (re: RegExp) => Assert<string> =
  re =>
    value => {
      if (typeof value !== 'string') {
        throw new TypeError(`Expected string, got ${inspect(value)}.`)
      }
      if (!value.match(re)) {
        throw new TypeError(`Expected ${inspect(value)} to match ${inspect(re)}.`)
      }
      return value
    }

export default regexp
