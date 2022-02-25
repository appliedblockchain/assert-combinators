import type { Assert } from './prelude.js'
import { inspect } from 'util'
import rethrow from './rethrow.js'

// TODO: Allow number indexer; maybe create dedicated combinator for numeric indexers?
const record =
  <K extends string | number, V>(k: Assert<K>, v: Assert<V>): Assert<{ [key: string]: V }> =>
    value => {
      if (value === null || typeof value !== 'object') {
        throw new TypeError(`Expected object, got ${inspect(value)}.`)
      }
      const value_ = value as { [key: string]: unknown }
      const k_ = rethrow(k, 'Indexer key.')
      for (const key in value_) {
        k_(key)
        rethrow(v, `[${inspect(key)}]`)(value_[key])
      }
      return value_ as { [key: string]: V }
    }

export default record
