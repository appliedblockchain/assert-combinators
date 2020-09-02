import $ from '../'

const upper =
  (_: string): string =>
    _.toUpperCase()

test('oneOf', () => {
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
