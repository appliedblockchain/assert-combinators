import type Assert from './types/assert'

const nil: Assert<undefined | null> =
  value => {
    if (value != null) {
      throw new TypeError('Expected nil.')
    }
    return value as undefined | null
  }

export default nil
