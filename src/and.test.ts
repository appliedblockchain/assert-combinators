import * as $ from './index.js'

test('and', () => {
  const r = $.and(
    $.object({ firstName: $.nullishOr($.string), lastName: $.nullishOr($.string), name: $.unknown }),
    $.object({ name: $.string })
  )(JSON.parse('{"name":"Foo","role":"admin"}'))
  const name: string = r.name
  expect(name).toEqual('Foo')
})

test('parametric', () => {
  const known = {
    string: $.string,
    number: $.number
  } as const
  const assertType = $.oneOf(
    'string',
    'number'
  )
  const assertUnknown = $.exact({
    type: assertType,
    value: $.unknown
  })
  const assert =
    <T extends undefined | 'number' | 'string'>(type: T) =>
      $.and(
        assertUnknown,
        value =>
          $.object({
            type: $.eq(type ?? value.type),
            value: known[type ?? value.type]
          })(value)
      )
  assert('number')(JSON.parse('{"type":"number","value":42}'))
  expect(() => assert('number')(JSON.parse('{"type":"number","value":"42"}'))).toThrow()
  assert('string')(JSON.parse('{"type":"string","value":"42"}'))
  expect(() => assert('string')(JSON.parse('{"type":"string","value":42}'))).toThrow()
})
