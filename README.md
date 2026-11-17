# @mdevrani/my-js-lib

A small JavaScript math library that demonstrates package distribution, tests, and reuse across projects.

## Install

Once version 1.0.1 is published to npm:

```sh
npm install @mdevrani/my-js-lib@^1.0.1
```

## ESM usage

```js
import { add, subtract, multiply, divide } from '@mdevrani/my-js-lib';

add(5, 3);       // 8
subtract(9, 4);  // 5
multiply(3, 4);  // 12
divide(10, 2);   // 5
```

## CommonJS usage

```js
const { add, divide } = require('@mdevrani/my-js-lib');

console.log(add(5, 3)); // 8
```

The exported functions accept JavaScript numbers. `divide(a, 0)` (including `-0`) throws `Error('Cannot divide by zero')`. Like other JavaScript number operations, decimal values can have floating-point rounding differences.

## Develop and verify

```sh
npm ci
npm test
npm run build
npm pack --dry-run
```

Rollup builds ESM (`dist/mathUtils.esm.js`), CommonJS (`dist/mathUtils.cjs`), and UMD (`dist/mathUtils.umd.js`). The package exposes ESM and CommonJS through a stable package-root `exports` map. The build files are intentionally not committed; `prepack` generates them for `npm pack` and `npm publish`.

Before publishing a new version, confirm the CI checks pass and inspect `npm pack --dry-run`. A previously published npm version cannot be overwritten. Publishing requires an authorized npm account:

```sh
npm publish --access public
```

See the companion consumer: [js-lib-demo](https://github.com/kakarot987/js-lib-demo).

License: MIT.
