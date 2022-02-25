import * as $ from './index.js'

test('tuple', () => {
  const r = $.tuple($.undefinedOr($.number), $.nullOr($.string), $.nilOr($.boolean))(JSON.parse('[1,"foo"]'))
  expect(r).toEqual([ 1, 'foo' ])
})
