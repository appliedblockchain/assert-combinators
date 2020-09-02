import type Assert from './types/assert'
import { inspect } from 'util'

export const eq =
  <T>(expected: T): Assert<T> =>
    value => {
      if (value !== expected) {
        throw new TypeError(`Expected ${inspect(expected)}, got ${inspect(value)}.`)
      }
      return value as T
    }

export default eq
