import $ from '../'

test('tuple', () => {
  const r = $.tuple($.number, $.string)(JSON.parse('[1,"foo"]'))
  expect(r).toEqual([ 1, 'foo' ])
})
