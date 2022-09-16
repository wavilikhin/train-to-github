
/**
 * @link https://backtobackswe.com/platform/content/intersection-of-sorted-arrays/code
 * @param {Array<number>} nums1
 * @param {Array<number>} nums2
 * @return {Array<number>}
 */
const intersection = (nums1, nums2) => {
  // Comparing two sets
  // Space: O(n)
  // Time: O(n)

  // let result = []
  // let set1 = new Set(nums1);
  // let set2 = new Set(nums2);

  // set1.forEach(item => {
  //   if (set2.has(item)) {
  //     result.push(item);
  //   }
  // })

  // return result;

  // Using two pointers
  // Space: O(1)
  // Time: O(n)
  let result = new Set()
  let firstPoniter = 0
  let secondPoniter = 0

  while (firstPoniter < nums1.length && secondPoniter < nums2.length) {
    if (nums1[firstPoniter] === nums2[secondPoniter]) {
      result.add(nums1[firstPoniter])
      firstPoniter++
      secondPoniter++
    } else if (nums1[firstPoniter] > nums2[secondPoniter]) {
      secondPoniter++
    } else {
      firstPoniter++
    }
  }

  return Array.from(result)
}

// intersection([1, 2, 3, 5], [1, 2]) // [1, 2]
// intersection([1, 2, 3, 5], [1, 2, 5]) // [1, 2]
// intersection([1, 2, 2, 3], [1, 1, 4]) // [1]
// intersection([1, 2, 3, 4, 5, 6], [5, 6]) // [5, 6]