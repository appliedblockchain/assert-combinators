import $ from '../'

test('exact', () => {
  expect(() => $.exact({ foo: $.string })(JSON.parse('{"foo":"a","bar":1,"baz":2}'))).toThrow('Unexpected extra keys bar, baz in { foo: \'a\', bar: 1, baz: 2 }.')
})
