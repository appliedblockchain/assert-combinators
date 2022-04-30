import * as $ from './index.js'

test('nullishOr', () => {
  expect(() => $.object({ foo: $.nullishOr($.number) })({ foo: 'bar' }))
    .toThrow('[foo] Was not nullish. Expected number, got \'bar\'.')
})

test('nullOr', () => {
  expect(() => $.object({ foo: $.nullOr($.number) })({ foo: 'bar' }))
    .toThrow('[foo] Was not null. Expected number, got \'bar\'.')
})

test('undefinedOr', () => {
  expect(() => $.object({ foo: $.undefinedOr($.number) })({ foo: 'bar' }))
    .toThrow('[foo] Was not undefined. Expected number, got \'bar\'.')
})
