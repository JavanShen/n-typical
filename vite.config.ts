import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, './typing.ts'),
            name: 'typing',
            fileName: 'typing'
        },
        rollupOptions: {
            external: ['@camwiegert/typical'],
            output: [
                {
                    format: 'es',
                    entryFileNames: '[name].js',
                    dir: 'es'
                },
                {
                    format: 'cjs',
                    entryFileNames: '[name].js',
                    dir: 'lib'
                }
            ]
        }
    }
})
