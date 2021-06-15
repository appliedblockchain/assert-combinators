import { inspect } from 'util'
import rethrow from './helpers/rethrow'
import type Assert from './types/assert'

type Result<T> = {
  [K in keyof T]: T[K] extends Assert<unknown> ?
    ReturnType<T[K]> :
    never
}

const object =
  <T extends { [ key: string ]: Assert<unknown> }>(kvs: T): Assert<{
    [ K in keyof T ]: T[ K ] extends Assert<unknown> ?
      ReturnType<T[ K ]> :
      never
  }> =>
    value => {
      if (value == null || typeof value !== 'object') {
        throw new TypeError(`Expected object, got ${inspect(value)}.`)
      }
      const value_ = value as { [key: string]: unknown }
      for (const k of Object.keys(kvs)) {
        const v = kvs[k]
        if (typeof v === 'function') {
          try {
            v(value_[k])
          } catch (err) {
            rethrow(`[${k}]`)(err)
          }
        } else if (v !== value_[k]) {
          throw new TypeError(`Expected ${inspect(k)} to be ${inspect(v)}, got ${inspect(value_[k])} in ${inspect(value_)} object.`)
        }
      }
      return value as Result<T>
    }

export default object
