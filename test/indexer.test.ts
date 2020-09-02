import type Assert from '../types/assert'
import type NilOr from '../types/nil-or'
import $ from '../'

type My = {
  defaultA?: NilOr<number>,
  defaultB?: NilOr<number>,
  [key: string]: number
}

const my: Assert<My> =
  value => {
    const { defaultA, defaultB, ...rest } = $.object({
      defaultA: $.nilOr($.number),
      defaultB: $.nilOr($.number)
    })(value)
    return {
      ...$.indexer($.string, $.number)(rest),
      defaultA,
      defaultB
    }
  }

test('indexer', () => {
  expect(my({ defaultA: null, defaultB: 1, a: 1 })).toEqual({
    defaultA: null,
    defaultB: 1,
    a: 1
  })
  expect(my({ a: 2 })).toEqual({ a: 2 })
  expect(() => my({ a: '1' })).toThrow('[\'a\'] Expected number, got \'1\'.')
})
