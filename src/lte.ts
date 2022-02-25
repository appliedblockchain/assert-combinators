import type { Assert } from './prelude.js'
import { inspect } from 'util'

const lte: (than: number) => Assert<number> =
  than =>
    value => {
      if (typeof value !== 'number') {
        throw new TypeError(`Expected number, got ${inspect(value)}.`)
      }
      if (!(value <= than)) {
        throw new TypeError(`Expected ${inspect(value)} to be less than or equal to ${inspect(than)}.`)
      }
      return value
    }

export default lte
