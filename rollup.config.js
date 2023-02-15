const buble = require('@rollup/plugin-buble');
const terser = require('@rollup/plugin-terser');

const config = (filename, plugins) => ({
  input: './lib/bisect.js',
  output: {
    file: filename,
    format: 'umd',
    indent: false,
  },
  plugins,
});

module.exports = [
  config('js-binary-search.js', [buble()]),
  config('js-binary-search.min.js', [buble(), terser()]),
];
