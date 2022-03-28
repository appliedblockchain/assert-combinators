import type { Assert, Asserted, Primitive } from './prelude.js'
import { inspect } from 'util'
import object from './object.js'

const exact =
  <T extends Record<string, Primitive | Assert<unknown>>>(kvs: T): Assert<{ [k in keyof T]: T[k] extends Primitive ? T[k] : Asserted<T[k]> }> =>
    value => {
      if (typeof value !== 'object' || value === null) {
        throw new TypeError(`Expected object, got ${inspect(value)}.`)
      }
      const result = object(kvs)(value)
      const keys = Object
        .keys(value)
        .filter(key => !Object.prototype.hasOwnProperty.call(kvs, key))
      if (keys.length) {
        throw new TypeError(`Unexpected extra keys ${keys.map(String).join(', ')} in ${inspect(value)}.`)
      }
      return result as { [k in keyof T]: T[k] extends Primitive ? T[k] : Asserted<T[k]> }
    }

export default exact
