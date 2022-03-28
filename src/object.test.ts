import * as $ from './index.js'

export type My = {
  id: number,
  uuid: string,
  reason: null | string
}

export const assert: $.Assert<My> =
  $.object({
    id: $.number,
    uuid: $.string,
    reason: $.nullOr($.string)
  })

export type My2 = $.Asserted<typeof assert>

test('object', () => {
  const r = $.object({ foo: $.string, bar: $.number })(JSON.parse('{"foo":"a","bar":1}'))
  expect(r).toEqual({ foo: 'a', bar: 1 })
})

test('error', () => {
  expect(() => $.object({ foo: $.string, bar: $.number })(JSON.parse('{"foo":"a","bar":"2"}'))).toThrow('[bar] Expected number, got \'2\'.')
})

test('primitive', () => {
  const assert = $.object({
    foo: 'FOO' as const,
    bar: 1 as const,
    baz: true as const
  })
  expect(() => assert({ foo: 'FOO', bar: 1, baz: true, xyz: 'yes' })).not.toThrow()
  expect(() => assert({ foo: 1 })).toThrow('Expected \'foo\' to be \'FOO\', got 1 in { foo: 1 } object.')
})
