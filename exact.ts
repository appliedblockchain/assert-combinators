import type Assert from './types/assert'
import { inspect } from 'util'
import object from './object'

type Result<T> = {
  [K in keyof T]: T[K] extends Assert<unknown> ?
  ReturnType<T[K]> :
  never
}

export const exact =
  <T extends { [ key: string ]: Assert<unknown> }>(kvs: T): Assert<{
    [ K in keyof T ]: T[ K ] extends Assert<unknown> ?
      ReturnType<T[ K ]> :
      never
  }> =>
    value => {
      if (value === null || typeof value !== 'object') {
        throw new TypeError(`Expected object, got ${inspect(value)}.`)
      }
      const value_ = value as { [key: string]: unknown }
      const result = object(kvs)(value_)
      const keys = Object
        .keys(value_)
        .filter(key => !Object.prototype.hasOwnProperty.call(kvs, key))
      if (keys.length) {
        throw new TypeError(`Unexpected extra keys ${keys.map(String).join(', ')} in ${inspect(value_)}.`)
      }
      return result as Result<T>
    }

export default exact
