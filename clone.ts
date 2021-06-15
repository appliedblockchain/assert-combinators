import type Assert from './types/assert'
import { inspect } from 'util'
import rethrow from './helpers/rethrow'

type Result<T> = {
  [K in keyof T]: T[K] extends Assert<unknown> ?
  ReturnType<T[K]> :
  never
}

const clone =
  <T extends { [key: string]: Assert<unknown> }>(kvs: T): Assert<Result<T>> =>
    value => {
      if (value == null || typeof value !== 'object') {
        throw new TypeError(`Expected object, got ${inspect(value)}.`)
      }
      const value_ = value as { [key: string]: unknown }
      const r = { ...value_ }
      for (const k of Object.keys(kvs)) {
        const v = kvs[k]
        if (typeof v === 'function') {
          try {
            r[k] = v(r[k])
          } catch (err) {
            rethrow(`[${k}]`)(err)
          }
        } else if (v !== r[k]) {
          throw new TypeError(`Expected ${inspect(k)} to be ${inspect(v)}, got ${inspect(value_[k])} in ${inspect(value_)} object.`)
        }
      }
      return r as Result<T>
    }

export default clone
