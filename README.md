# binary search ![npm version](https://img.shields.io/npm/v/@kartjim/js-binary-search?style=flat-square) ![Node.js CI](https://github.com/can-dy-jack/js-binary-search/actions/workflows/test.yml/badge.svg)

> 仿 `Python` `bisect`二分函数模块；

## install
```sh
npm i @kartjim/js-binary-search
```

## import
```js
import { 
    bisect_left, 
    bisect_right 
} from '@kartjim/js-binary-search';
```

or use CDN:
```js
<script src="https://cdn.jsdelivr.net/npm/@kartjim/js-binary-search@1.0.0/js-binary-search.min.js"></script>
```

## use
```js
bisect_left([1, 2, 4, 5], 3)     // 2
bisect_left([1, 2, 3, 4, 5], 3)  // 2

bisect_right([1, 2, 4, 5], 3)    // 2
bisect_right([1, 2, 3, 4, 5], 3) // 3
```

## API
```ts
export type bisect_left = (
    arr: [], 
    val: number, 
    left: number = 0, 
    right: number = arr.length
) => number;
export type bisect_right = (
    arr: [], 
    val: number, 
    left: number = 0, 
    right: number = arr.length
) => number;
```
