
/**
 * @param {Array<number>} nums
 * @return {Array<number>}
 */
const sortArray_0_1_2 = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  let i = 0;

  while (i <= right) {
    if (nums[i] === 0) {
      [nums[left], nums[i]] = [nums[i], nums[left]];
      left++
      i++
      // let temp = nums[left];
      // nums[left++] = nums[i];
      // nums[i++] = temp;
    } else if (nums[i] === 1) {
      i++;
    } else {
      [nums[right], nums[i]] = [nums[i], nums[right]];
      right--
      // let temp = nums[right];
      // nums[right--] = nums[i];
      // nums[i] = temp;
    }
  }

  return nums;
}

sortArray_0_1_2([0, 1, 2, 1, 2, 2, 2, 1, 0]) // [0, 0, 1, 1, 1, 2, 2, 2, 2]
sortArray_0_1_2([2, 2, 1, 1, 1, 0, 0, 0, 0]) // [0, 0, 0, 0, 1, 1, 1, 2, 2]