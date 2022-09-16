
/**
 * @link https://backtobackswe.com/platform/content/minimum-item-in-a-rotated-sorted-array
 * @param {Array<number>} nums
 * @return {number}
 */
const findMin = (nums) => {
  // Binary search
  // Space: O(1)
  // Time: O(log(n))
  if (!nums.length) {
    return - 1
  }

  let left = 0
  let right = nums.length - 1
  let middle;

  while (left < right) {
    middle = left + Math.floor((right - left) / 2);

    let arrayMiddleElement = nums[middle]

    if (arrayMiddleElement > nums[right]) {
      left = middle + 1
    } else {
      right = middle
    }
  }

  return nums[left]
}

findMin([4, 5, 6, 7, 1, 2]) // 1
findMin([1, 2, 3, 4, 5, 6]) // 1