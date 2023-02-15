(function (factory) {
typeof define === 'function' && define.amd ? define(factory) :
factory();
})((function () { 'use strict';

/**
 * @copyright can-dy-jack 2023
 */

/**
 * Return the index where to insert item val in list arr, assuming arr is sorted.
 * - The return value i is such that all e in a[:i] have e < x, and all e in a[i:] have e >= x.
 * - if val is already in arr, insert it to the left.
 * @param {Array} arr
 * @param {number} val
 * @param {number} left
 * @param {number} right
 * @returns {number} i
 */
function bisect_left(arr, val, left, right) {
  if ( left === void 0 ) left = 0;
  if ( right === void 0 ) right = arr.length;

  if (left < 0) {
    throw new Error('left must be non-negative');
  }
  var l = left;
  var r = right;
  while (l < r) {
    var mid = Math.floor((l + r) / 2);
    if (arr[mid] < val) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
}

/**
 * Return the index where to insert item val in list arr, assuming arr is sorted.
 * - The return value i is such that all e in a[:i] have e <= x, and all e in a[i:] have e > x.
 * - if val is already in arr, insert it to the right.
 * @param {Array} arr
 * @param {number} val
 * @param {number} left
 * @param {number} right
 * @returns {number} i
 */
function bisect_right(arr, val, left, right) {
  if ( left === void 0 ) left = 0;
  if ( right === void 0 ) right = arr.length;

  if (left < 0) {
    throw new Error('left must be non-negative');
  }
  var l = left;
  var r = right;
  while (l < r) {
    var mid = Math.floor((l + r) / 2);
    if (arr[mid] <= val) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
}

module.exports = {
  bisect_left: bisect_left,
  bisect_right: bisect_right,
};

}));
