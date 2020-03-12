// @flow

const { inspect } = require('util')
const object = require('./object')

const exact /*: <KV: {}>(KV) => any => $ObjMapi<$Exact<KV>, <K, V>(K, (...Iterable<any>) => V) => V> */ = /*:: <KV> */
  (kvs) =>
    value => {
      const result = object(kvs)(value)
      const keys = Object.keys(value)
      for (const key of keys) {
        if (!Object.prototype.hasOwnProperty.call(kvs, key)) {
          throw new TypeError(`Expected object with ${key} property in ${inspect(value)}.`)
        }
      }
      return (result /*: any */)
    }

module.exports = exact
