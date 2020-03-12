// @flow

const shape /*: <KV: {}>(KV) => any => $Shape<$ObjMapi<KV, <K, V>(K, (...Iterable<any>) => V) => V>> */ = /*:: <KV> */
  (kvs) =>
    value => {
      if (value == null || typeof value !== 'object') {
        throw new TypeError('Expected object.')
      }
      for (const k of Object.keys(kvs)) {
        if (value[k] == null) {
          continue
        }
        kvs[k](value[k])
      }
      return value
    }

module.exports = shape
