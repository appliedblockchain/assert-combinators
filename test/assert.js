// @flow

const { inspect } = require('util')
const $ = require('../')

/*::

export type Range = [ number, number ]

*/

const range /*: mixed => Range */ =
  $.assert(
    $.tuple($.number, $.number),
    ([ a, b ]) => {
      if (a > b) {
        throw new TypeError(`Expected [a, b] range where a <= b, got ${inspect([ a, b ])}.`)
      }
    }
  )

module.exports = {
  ...$,
  range
}
