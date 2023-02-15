import buble from '@rollup/plugin-buble';
import terser from '@rollup/plugin-terser';

const config = (filename, plugins) => ({
  input: 'index.js',
  output: {
    file: filename,
    format: 'umd',
    indent: false,
    name: 'js-binary-search',
  },
  plugins,
});

export default [
  config('js-binary-search.js', [buble()]),
  config('js-binary-search.min.js', [buble(), terser()]),
];
