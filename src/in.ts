import type { Assert } from './prelude.js'
import { inspect } from 'util'

const in_ =
  <T>(values: T[]): Assert<T> =>
    value => {
      if (!values.includes(value as T)) {
        throw new TypeError(`Expected ${inspect(value)} to be in ${inspect(values)}.`)
      }
      return value as T
    }

export default in_
