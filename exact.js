// @flow strict

const { inspect } = require('util')
const object = require('./object')

const exact /*: <KV: {}>(KV) => mixed => $ObjMapi<$Exact<KV>, <K, V>(K, (...Iterable<mixed>) => V) => V> */ = /*:: <KV> */
  (kvs) =>
    value => {
      if (value === null || typeof value !== 'object') {
        throw new TypeError(`Expected object, got ${inspect(value)}.`)
      }
      const result = object(kvs)(value)
      const keys = Object
        .keys(value)
        .filter(key => !Object.prototype.hasOwnProperty.call(kvs, key))
      if (keys.length) {
        throw new TypeError(`Unexpected extra keys ${keys.map(String).join(', ')} in ${inspect(value)}.`)
      }

      // $FlowFixMe
      return result
    }

module.exports = exact
