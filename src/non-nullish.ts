import type { NonNullish } from './prelude.js'

const nonNullish =
  <T>(value: T): NonNullish<T> => {
    if (value == null) {
      throw new TypeError('Expected defined.')
    }
    return value as NonNullish<T>
  }

export default nonNullish
