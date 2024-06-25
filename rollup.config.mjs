import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import json from '@rollup/plugin-json'
import copy from 'rollup-plugin-copy'

export default [
  {
    input: 'src/index.ts',
    external: [
      'react',
      'react-dom',
      '@mui/material/styles',
      'styled-components',
    ],
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      json(),
      copy({
        targets: [
          { src: 'src/theme/*.json', dest: 'dist/esm/types' },
          { src: 'src/theme/*.json', dest: 'dist/cjs/types' },
        ],
        flatten: false,
      }),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    external: [
      'react',
      'react-dom',
      '@mui/material/styles',
      'styled-components',
    ],
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'esm',
      },
    ],
    plugins: [dts(), json()],
  },
]
