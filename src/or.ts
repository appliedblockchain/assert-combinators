import type { Assert, Asserted } from './prelude.js'
import { inspect } from 'util'

const or =
  <As extends Assert<unknown>[]>(...as: As) =>
    (value: unknown) => {
      for (const a of as) {
        try {
          return a(value) as Asserted<As[number]>
        } catch (err) {
          continue
        }
      }
      throw new TypeError(`Expected one of ${as.length} alternatives to match ${inspect(value)}.`)
    }

export default or
