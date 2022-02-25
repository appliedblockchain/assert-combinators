import type { Assert } from './prelude.js'
import { inspect } from 'util'

const or: <T extends Assert<unknown>[]>(...as: T) => T[number] =
  (...as) =>
    value => {
      for (const a of as) {
        try {
          return a(value)
        } catch (err) {
          continue
        }
      }
      throw new TypeError(`Expected one of ${as.length} alternatives to match ${inspect(value)}.`)
    }

export default or
