// @flow

const { inspect } = require('util')
const object = require('./object')

const exact /*: <KV: {}>(KV) => any => $ObjMapi<$Exact<KV>, <K, V>(K, (...Iterable<any>) => V) => V> */ = /*:: <KV> */
  (kvs) =>
    value => {
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
