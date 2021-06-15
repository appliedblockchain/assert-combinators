import $ from '../'

test('unique', () => {
  expect(() => $.unique(_ => String(_))([ 'b', 'a', 'c', 'a' ])).toThrow('Expected unique values, got duplicate \'a\'.')
  expect($.unique(_ => String(_))([ 'b', 'c', 'a' ])).toEqual([ 'b', 'c', 'a' ])
})

test('unique objects', () => {
  const f = (_: { name: string }) => _.name.trim().toLowerCase()
  expect(() => $.unique(f)([
    { name: 'a' },
    { name: 'C' },
    { name: 'A ' }
  ])).toThrow('Expected unique values, got duplicate { name: \'A \' }.')
  expect($.unique(f)([
    { name: 'a' },
    { name: 'c' },
    { name: 'b' }
  ])).toEqual([
    { name: 'a' },
    { name: 'c' },
    { name: 'b' }
  ])
})
