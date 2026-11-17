export default {
  input: 'src/mathUtils.js',
  output: [
    { file: 'dist/mathUtils.esm.js', format: 'es' },
    { file: 'dist/mathUtils.cjs', format: 'cjs' },
    { file: 'dist/mathUtils.umd.js', format: 'umd', name: 'mathUtils' }
  ]
};
