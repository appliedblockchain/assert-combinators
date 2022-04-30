import * as $ from './index.js'

test('and', () => {
  const r: { name: string } = $.and(
    $.object({ firstName: $.nullishOr($.string), lastName: $.nullishOr($.string), name: $.string }),
    $.object({ name: $.string })
  )(JSON.parse('{"name":"Foo","role":"admin"}'))
  expect(r).toEqual({ name: 'Foo', role: 'admin' })
})
