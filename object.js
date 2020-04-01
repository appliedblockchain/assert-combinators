// @flow strict

const { inspect } = require('util')
const rethrow = require('./helpers/rethrow')

const object /*: <KV: { ... }>(KV) => mixed => $ObjMapi<KV, <K, V>(K, (...Iterable<mixed>) => V) => V> */ = /*:: <KV> */
  (kvs) =>
    value => {
      if (value == null || typeof value !== 'object') {
        throw new TypeError(`Expected object, got ${inspect(value)}.`)
      }
      for (const k of Object.keys(kvs)) {
        const v = kvs[k]
        if (typeof v === 'function') {
          try {
            v(value[k])
          } catch (err) {
            rethrow(`[${k}]`)(err)
          }
        } else if (v !== value[k]) {
          throw new TypeError(`Expected ${inspect(k)} to be ${inspect(v)}, got ${inspect(value[k])} in ${inspect(value)} object.`)
        }
      }
      return value
    }

module.exports = object
