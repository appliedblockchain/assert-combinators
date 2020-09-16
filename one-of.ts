import type Assert from './types/assert'
import { inspect } from 'util'

const oneOf =
  <T extends unknown[]>(...values: T): Assert<T[number]> => {
    if (!values.length) {
      throw new TypeError('Expected non-zero arity.')
    }
    return (value: unknown) => {
      if (!values.includes(value)) {
        throw new TypeError(`Expected ${inspect(value)} to be one of ${inspect(values)}.`)
      }
      return value
    }
  }

export default oneOf
