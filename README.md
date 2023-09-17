# n-typical
---
> 基于 [typical](https://github.com/camwiegert/typical)

### ✨ 扩展功能
+ 🥪 完整的TS类型支持
+ 🥖 更直观的循环方式
+ 🍦 循环结束回调

![demo-pic](https://repository-images.githubusercontent.com/211405607/1dd6e300-f8b2-11e9-8260-26ad1d49db17)

### 📦 安装
```shell
npm i n-typical
```

### 🔨 使用
```JavaScript
import { type } from 'n-typical'

type(element, ['text', 1000, 'text next'], 3, () => {
    // each cycle finish
})
```

### 📖 API
```JavaScript
(
    target: HTMLElement | Element | null | undefined,
    actions: (string | number | (() => unknown))[],
    loop?: number,
    cb?: () => unknown
) => Promise<void>
```
| 参数 | 描述 |
| --- | --- |
| target | 所需要控制的元素 |
| actions | 由字符串数字和方法所组成的数组 |
| loop | 循换次数，如需无限循环可传 Infinity |
| cb | 每一次结束会触发的回调 |

