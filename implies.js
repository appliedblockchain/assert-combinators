// @flow strict

const implies /*: (mixed => boolean, mixed => mixed) => (mixed => mixed) */ =
  (predicate, a) =>
    value =>
      predicate(value) ? a(value) : value

module.exports = implies
