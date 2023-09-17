// @vitest-environment jsdom

import { expect, test, vi } from 'vitest'
import { type } from '../typing'

const element = document.createElement('div')

test('cycle callback', async () => {
    const cb = vi.fn()

    await type(element, ['hello'], 3, cb)

    expect(cb).toHaveBeenCalledTimes(3)
})
