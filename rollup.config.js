import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: [
    'react',
    'react-dom',
    '@mui/material',
    '@emotion/react',
    '@emotion/styled',
  ],
  plugins: [resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' })],
}
