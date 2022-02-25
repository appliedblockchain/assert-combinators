import * as $ from './index.js'

test('keyed', () => {
  expect($.keyed($.boolean)(JSON.parse('{"foo":true,"bar":false}'))).toEqual({
    foo: true,
    bar: false
  })
  expect(() => $.keyed($.boolean)(JSON.parse('{"foo":true,"bar":null}')))
    .toThrow('[\'bar\'] Expected boolean, got null.')
  expect(() => $.keyed($.boolean)([ true ])).toThrow('Expected object, got [ true ].')
})
