
/**
 * @link https://backtobackswe.com/platform/content/the-3sum-problem
 * @param {Array<number>} A
 * @return {Array<Array<number>>}
 */
const threeSum = (A) => {
  const target = 0
  A.sort((a, b) => a - b)

  let results = []
  for (let i = 0; i < A.length - 2; i++) {
    let j = i + 1
    let k = A.length - 1

    while (j < k) {
      const sum = A[i] + A[j] + A[k]

      if (sum === target) {
        results.push([A[i], A[j], A[k]])

        while (j < k && A[j] === A[j + 1]) {
          j++
        }
        j++

        while (k > j && A[k] === A[k - 1]) {
          k--
        }
        k--
      } else if (sum < target) {
        j++
      } else {
        k--
      }
    }

    // This step will handele case of similar A[i]
    while (i < A.length - 1 && A[i] == A[i + 1]) {
      i++;
    }
  }

  return results
}

threeSum([-3, -1, 1, 0, 2, 10, -2, 8]) // [[-3, 1, 2],[-2, 0, 2],[-1, 0, 1]]
threeSum([-5, 3, 2, 0, 1, -1, -5, 3, 2]) // [[-5, 2, 3], [-1, 0, 1]]
threeSum([1, 2, 3, 4]) // zero
threeSum([0, 0, 0]) //