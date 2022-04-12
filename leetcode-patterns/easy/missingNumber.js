// https://leetcode.com/problems/missing-number/

let test = [0, 1]; // 2, n = 3
let test1 = [3, 0, 1]; // 2, n = 3
let test2 = [1, 0, 4, 5, 2, 3]; // null, n = 5
let test3 = [0, 1, 2, 3, 4, 5, 7]; // 6, n = 7

const getMissing = (array) => {
  let currentSumm = array.reduce((curr, next) => curr + next);

  let max = array.length;
  let min = Math.min(...array);

  let correctSumm = 0;

  for (let i = min; i <= max; i++) {
    correctSumm += i;
  }
  return correctSumm - currentSumm || null;
};

console.log(getMissing(test1));
