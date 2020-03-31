// @flow strict

const { inspect } = require('util')

const re = /^\d{4}-\d{2}-\d{2}$/

const dateString /*: mixed => string */ =
  value => {
    if (typeof value !== 'string') {
      throw new TypeError(`Expected string, got ${inspect(value)}.`)
    }
    if (!value.match(re)) {
      throw new TypeError(`Expected YYYY-MM-DD date string, got ${inspect(value)}.`)
    }
    if (isNaN(new Date(value).getTime())) {
      throw new TypeError(`Expected valid date string, got ${inspect(value)}.`)
    }
    return value
  }

module.exports = dateString
