const { bisect_left, bisect_right } = require('./bisect');

describe('bisect_left() Test', () => {
  it('Return the index where to insert item val in list arr.', () => {
    expect(bisect_left([1, 2, 4, 5], 3)).toBe(2);
  });
  it('if val is already in arr, try to insert it to the left.', () => {
    expect(bisect_left([1, 2, 3, 4, 5], 3)).toBe(2);
  });
});

describe('bisect_right() Test', () => {
  it('Return the index where to insert item val in list arr.', () => {
    expect(bisect_right([1, 2, 4, 5], 3)).toBe(2);
  });
  it('if val is already in arr, try to insert it to the right.', () => {
    expect(bisect_right([1, 2, 3, 4, 5], 3)).toBe(3);
  });
});

describe('Combined with bisect_left() and bisect_right() ', () => {
  function countFairPairs(nums, lower, upper) {
    let ans = 0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i += 1) {
      const l = bisect_left(nums, lower - nums[i], i + 1);
      const r = bisect_right(nums, upper - nums[i], i + 1);
      ans += r - l;
    }
    return ans;
  }

  it('LeetCode 2563. Count the Number of Fair Pairs', () => {
    expect(countFairPairs([0, 1, 7, 4, 4, 5], 3, 6)).toBe(6);
    expect(countFairPairs([1, 7, 9, 2, 5], 11, 11)).toBe(1);
  });
});
