import * as $ from './index.js'

test('nilOr', () => {
  expect(() => $.object({ foo: $.nilOr($.number) })({ foo: 'bar' }))
    .toThrow('[foo] Was not null or undefined. Expected number, got \'bar\'.')
})

test('nullOr', () => {
  expect(() => $.object({ foo: $.nullOr($.number) })({ foo: 'bar' }))
    .toThrow('[foo] Was not null. Expected number, got \'bar\'.')
})

test('undefinedOr', () => {
  expect(() => $.object({ foo: $.undefinedOr($.number) })({ foo: 'bar' }))
    .toThrow('[foo] Was not undefined. Expected number, got \'bar\'.')
})
