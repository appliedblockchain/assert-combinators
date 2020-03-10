// @flow

const dateString = require('../date-string')
const exact = require('../exact')

const dateRange = exact({ from: dateString, to: dateString })
/*:: ;(dateRange: any => {| from: string, to: string |}); */

test('valid', () => {
  expect(dateRange(JSON.parse('{"from":"2001-01-01","to":"2001-01-02"}'))).toEqual({
    from: '2001-01-01',
    to: '2001-01-02'
  })
})

test('not valid date string', () => {
  expect(() => dateRange(JSON.parse('{"from":"2001-01-01","to":"today"}'))).toThrow(
    'Expected YYYY-MM-DD date string, got \'today\'.'
  )
})

test('not a valid date', () => {
  expect(() => dateRange(JSON.parse('{"from":"2001-01-01","to":"2001-13-01"}'))).toThrow(
    'Expected valid date string, got \'2001-13-01\'.'
  )
})
