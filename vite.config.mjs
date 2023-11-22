import { defineConfig } from "vite";
import glsl from 'vite-plugin-glsl';
import wasm from 'vite-plugin-wasm';

export default defineConfig({
    root: './src',
    publicDir: '../public',
    build: {outDir: './dist'},
    assetsInclude: ['**/*.env', '**/*.glb'],
    plugins: [
        glsl(),
        wasm()
    ]
})