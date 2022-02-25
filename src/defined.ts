import type { Defined } from './prelude.js'

const defined =
  <T>(value: T): Defined<T> => {
    if (typeof value === 'undefined') {
      throw new TypeError('Expected defined.')
    }
    return value as Defined<T>
  }

export default defined
