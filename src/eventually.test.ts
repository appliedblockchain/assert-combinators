import * as $ from './index.js'

test('eventually', async () => {
  const before = Date.now()
  await expect($.eventually($.gt(before + 1000), async () => Date.now()))
    .resolves.not.toThrow()
})

test('eventually fails', async () => {
  await expect($.eventually($.gt(2), async () => 1, { delay: 10 }))
    .rejects.toThrow('Expected 1 to be greater than 2. Last result was 1.')
})
