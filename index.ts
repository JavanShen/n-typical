import { type } from './typing'

const ele = document.querySelector('#demo')

type(ele, ['hello', 1000, 'hello world', 1000, 'hello typical'], 3, () => {
    console.log('finish')
})
