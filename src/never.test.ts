import * as $ from './index.js'

type X = 'a' | 'b' | 'c'

const assertX: $.Assert<X> =
  $.oneOf('a', 'b', 'c')

test('never', () => {
  const x: X = assertX(JSON.parse('"c"'))
  expect(() => {
    switch (x) {
      case 'a':
      case 'b':
        expect(typeof x).toBe('string')
        break
      default:

        // @ts-expect-error(exhaustive)
        $.never(x)
    }
  }).toThrow('Expected never, got \'c\'.')
  switch (x) {
    case 'a':
    case 'b':
    case 'c':
      expect(typeof x).toBe('string')
      break
    default:
      $.never(x)
  }
})
