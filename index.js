// @flow

const and = require('./and')
const any = require('./any')
const array = require('./array')
const boolean = require('./boolean')
const dateString = require('./date-string')
const exact = require('./exact')
const finite = require('./finite')
const number = require('./number')
const object = require('./object')
const or = require('./or')
const shape = require('./shape')
const string = require('./string')
const taggedOr = require('./tagged-or')
const tuple = require('./tuple')

module.exports = {
  and,
  any,
  array,
  boolean,
  dateString,
  exact,
  finite,
  number,
  object,
  or,
  shape,
  string,
  taggedOr,
  tuple
}
