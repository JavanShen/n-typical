import { type as typing, type as cycle } from '@camwiegert/typical'

type Type = (
    target: HTMLElement | Element | null | undefined,
    actions: (string | number | (() => unknown))[],
    loop?: number,
    cb?: () => unknown
) => Promise<void>
const type: Type = async (target, actions, loop = 1, cb) => {
    if (loop === Infinity) {
        await typing(target, ...actions, cb, cycle)
    } else if (typeof loop === 'number' && loop > 0) {
        await typing(
            target,
            ...new Array(loop)
                .fill(0)
                .map(() => [...actions, cb])
                .flat()
        )
    } else {
        await typing(target, ...actions, cb)
    }
}

export { type }
