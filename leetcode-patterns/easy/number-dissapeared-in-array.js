// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

const test = [1, 3, 4]; //2
const test1 = [4, 3, 2, 7, 8, 2, 3, 1]; // [5,6]
const test2 = [1, 1]; // [2]

// O(n), mem: O(n)
const findDissapeared = (nums) => {
  const min = 1;
  const max = nums.length;
  const temp = {};
  const result = [];

  for (num of nums) {
    temp[num] = num;
  }

  for (let i = min; i <= max; i++) {
    if (!temp[i]) {
      result.push(i);
    }
  }

  return result;
};

console.log(findDissapeared(test1));
