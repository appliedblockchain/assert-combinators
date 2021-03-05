import $ from '../'

test('simple', () => {
  expect($.strftime('%Y-%m-%d')('2000-01-01')).toEqual('2000-01-01')
  expect(() => $.strftime('%Y-%m-%d')('2000-01-01 ')).toThrow(
    'Expected \'%Y-%m-%d\' strftime format, got \'2000-01-01 \', failed at index 10, unrecognised part \' \'.'
  )
  expect(() => $.strftime('%Y-%m-%d')('2000-01-32')).toThrow(
    'Expected \'%Y-%m-%d\' strftime format, got \'2000-01-32\', failed at index 8, unrecognised part \'32\'.'
  )
  expect(() => $.strftime('%Y-%m-%d')('2000-13-01')).toThrow(
    'Expected \'%Y-%m-%d\' strftime format, got \'2000-13-01\', failed at index 5, unrecognised part \'13-01\'.'
  )
  const d = new Date().toISOString()
  expect($.strftime('%FT%T.%sZ')(d)).toEqual(d)
})
