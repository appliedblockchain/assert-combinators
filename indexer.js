// @flow strict

const { inspect } = require('util')
const rethrow = require('./rethrow')

/*:: import type { $A } from './types/a' */

const indexer /*: <K, V>($A<K>, $A<V>) => $A<{| [K]: V |}> */ = /*:: <K, V> */
  (k, v) =>
    value => {
      if (value === null || typeof value !== 'object') {
        throw new TypeError(`Expected object, got ${inspect(value)}.`)
      }
      const k_ = rethrow(k, 'Indexer key.')
      for (const key in value) {
        k_(key)
        rethrow(v, `[${inspect(key)}]`)(value[key])
      }

      // $FlowFixMe
      return value
    }

module.exports = indexer
