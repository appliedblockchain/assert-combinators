// @flow strict

const and = require('./and')
const array = require('./array')
const boolean = require('./boolean')
const dateString = require('./date-string')
const defined = require('./defined')
const exact = require('./exact')
const finite = require('./finite')
const mixed = require('./mixed')
const nil = require('./nil')
const nilOr = require('./nil-or')
const null_ = require('./null')
const nullOr = require('./null-or')
const number = require('./number')
const object = require('./object')
const or = require('./or')
const predicate = require('./predicate')
const shape = require('./shape')
const string = require('./string')
const taggedOr = require('./tagged-or')
const tuple = require('./tuple')
const undefined_ = require('./undefined')
const undefinedOr = require('./undefined-or')

module.exports = {
  and,
  array,
  boolean,
  dateString,
  defined,
  exact,
  finite,
  mixed,
  nil,
  nilOr,
  null: null_,
  nullOr,
  number,
  object,
  or,
  predicate,
  shape,
  string,
  taggedOr,
  tuple,
  undefined: undefined_,
  undefinedOr
}
