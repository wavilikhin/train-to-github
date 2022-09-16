

const findNum = (arr1, arr2, arr3) => {
  // Time: O(n + m + k)
  // Space: O(1)

  let first = 0
  let second = 0
  let third = 0


  while (first < arr1.length && second < arr2.length && third < arr3.length) {
    const firstEl = arr1[first]
    const secondEl = arr2[second]
    const thirdEl = arr3[third]

    if (firstEl === secondEl && firstEl === thirdEl) {
      return firstEl
    } else if (firstEl < secondEl) {
      first++
    } else if (secondEl < thirdEl) {
      second++
    } else {
      third++
    }
  }

  return null
}

findNum([1, 2, 4, 5], [3, 3, 4], [2, 3, 4, 5, 6])
findNum([1, 2, 3, 5], [3, 3, 4], [2, 3, 4, 5, 6])

