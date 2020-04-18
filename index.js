// @flow strict

const and = require('./and')
const array = require('./array')
const boolean = require('./boolean')
const clone = require('./clone')
const dateString = require('./date-string')
const defined = require('./defined')
const exact = require('./exact')
const finite = require('./finite')
const gt = require('./gt')
const gte = require('./gte')
const if_ = require('./if')
const implies = require('./implies')
const in_ = require('./in')
const lt = require('./lt')
const lte = require('./lte')
const map = require('./map')
const mixed = require('./mixed')
const nil = require('./nil')
const nilOr = require('./nil-or')
const null_ = require('./null')
const nullOr = require('./null-or')
const number = require('./number')
const object = require('./object')
const ok = require('./ok')
const oneOf = require('./one-of')
const or = require('./or')
const predicate = require('./predicate')
const regexp = require('./regexp')
const sequence = require('./sequence')
const shape = require('./shape')
const string = require('./string')
const taggedOr = require('./tagged-or')
const tuple = require('./tuple')
const undefined_ = require('./undefined')
const undefinedOr = require('./undefined-or')
const unique = require('./unique')

module.exports = {
  and,
  array,
  boolean,
  clone,
  dateString,
  defined,
  exact,
  finite,
  gt,
  gte,
  if: if_,
  implies,
  in: in_,
  lt,
  lte,
  map,
  mixed,
  nil,
  nilOr,
  null: null_,
  nullOr,
  number,
  object,
  ok,
  oneOf,
  or,
  predicate,
  regexp,
  sequence,
  shape,
  string,
  taggedOr,
  tuple,
  undefined: undefined_,
  undefinedOr,
  unique
}
