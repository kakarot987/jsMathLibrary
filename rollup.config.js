export default [
    {
      input: 'src/mathUtils.js',
      output: [
        { file: 'dist/mathUtils.esm.js', format: 'esm' },
        { file: 'dist/mathUtils.cjs.js', format: 'cjs' },
        { file: 'dist/mathUtils.umd.js', format: 'umd', name: 'mathUtils' }
      ]
    }
  ];
  