import { inspect } from 'util'
import type Assert from './types/assert'
import type Primitive from './types/primitive'

const eq =
  <T extends Primitive>(expected: T): Assert<T> =>
    value => {
      if (value !== expected) {
        throw new TypeError(`Expected ${inspect(expected)}, got ${inspect(value)}.`)
      }
      return value as T
    }

export default eq
