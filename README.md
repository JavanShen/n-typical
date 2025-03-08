# n-typical

![NPM Version](https://img.shields.io/npm/v/n-typical)

> Based on [typical](https://github.com/camwiegert/typical)

### ✨ Extended features
+ 🥪 Complete TypeScript support
+ 🥖 More intuitive looping method
+ 🍦 Loop end callback

![demo-pic](https://repository-images.githubusercontent.com/211405607/1dd6e300-f8b2-11e9-8260-26ad1d49db17)

### 📦 Install
```shell
npm i n-typical
```

### 🔨 Usage
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
| Parameters | Description |
| --- | --- |
| target | The elements to be controlled |
| actions | An array composed of string numbers and methods |
| loop | Number of iterations, if you need unlimited loops, you can pass `infinity` |
| cb | Callback triggered at the end of each instance |

