import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.ts', // The main entry file of your TypeScript source
            formats: ['es'], // Format the build in ECMAScript module format
            fileName: 'index' // This will name your output file index.js
        },
        rollupOptions: {
            output: {
                entryFileNames: 'index.js', // Ensure stable entry file name
                chunkFileNames: 'chunk-[name].js',
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    },
    plugins: [dts()]
});