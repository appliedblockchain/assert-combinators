import * as $ from '../'

const upper =
  (_: string): string =>
    _.toUpperCase()

test('oneOf', () => {
  const toggle = $.oneOf('ON', 'OFF')
  const value = toggle(JSON.parse('"ON"'))
  expect(value).toBe('ON')
})

test('oneOf in sequence', () => {
  const r = $.clone({
    abs: $.map($.sequence($.string, upper, $.oneOf('A', 'B')))
  })(JSON.parse('{"abs":["a","b"]}'))
  for (const ab of r.abs) {
    switch (ab) {
      case 'A':
      case 'B':
        continue
      default:
        throw new Error('Unreachable')
    }
  }
  expect(r).toEqual({ abs: [ 'A', 'B' ] })
})
