import type { Assert } from './prelude.js'

const nullish: Assert<undefined | null> =
  value => {
    if (value != null) {
      throw new TypeError('Expected nullish.')
    }
    return value as undefined | null
  }

export default nullish
