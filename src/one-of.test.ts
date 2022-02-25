import * as $ from './index.js'

test('oneOf', () => {
  const toggle = $.oneOf('ON', 'OFF')
  const value = toggle(JSON.parse('"ON"'))
  expect(value).toBe('ON')
})
