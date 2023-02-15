const buble = require('@rollup/plugin-buble');
const terser = require('@rollup/plugin-terser');

const config = (filename, plugins) => ({
  input: './lib/bisect.js',
  output: {
    file: filename,
    format: 'iife',
  },
  plugins,
});

module.exports = [
  config('js-binary-search.js', [buble()]),
  config('js-binary-search.min.js', [buble(), terser()]),
];
