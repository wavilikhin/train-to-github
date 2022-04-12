// https://leetcode.com/problems/contains-duplicate/

let test1 = [1, 2, 3];
let test2 = [1, 2, 4, 4, 3];

const containsDuplicates = (array) => {
  let temp = {};

  for (item of array) {
    temp[item] ? temp[item]++ : (temp[item] = 1);
  }

  for (value of Object.values(temp)) {
    if (value > 1) {
      return true;
    }
  }

  return false;
};
// O(n), mem: O(n)

console.log(containsDuplicates(test2));
