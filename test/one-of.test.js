// @flow

const clone = require('../clone')
const map = require('../map')
const oneOf = require('../one-of')
const sequence = require('../sequence')
const string = require('../string')

const upper /*: string => string */ =
  _ =>
    _.toUpperCase()

test('oneOf', () => {
  const r = clone({
    abs: map(sequence(string, upper, oneOf/*:: <'A', 'B'> */('A', 'B')))
  })(JSON.parse('{"abs":["a","b"]}'))
  for (const ab of r.abs) {
    (ab /*: 'A' | 'B' */)
    switch (ab) {
      case 'A':
      case 'B':
        continue
      default:
        (ab /*: empty */)
    }
  }
  expect(r).toEqual({ abs: [ 'A', 'B' ] })
})
