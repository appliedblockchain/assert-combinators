// @flow

const { inspect } = require('util')

const object /*: <KV: {}>(KV) => any => $ObjMapi<KV, <K, V>(K, (...Iterable<any>) => V) => V> */ = /*:: <KV> */
  (kvs) =>
    value => {
      if (value == null || typeof value !== 'object') {
        throw new TypeError('Expected object.')
      }
      for (const k of Object.keys(kvs)) {
        const v = kvs[k]
        if (typeof v === 'function') {
          v(value[k])
        } else if (v !== value[k]) {
          throw new TypeError(`Expected ${k} to be ${inspect(v)}, got ${inspect(value[k])}.`)
        }
      }
      return value
    }

module.exports = object
