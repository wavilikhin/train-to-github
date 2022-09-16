
/**
 * @link https://backtobackswe.com/platform/content/compute-buildings-with-a-sunset-view/code
 * @param {Array<number>} buildings
 * @return {Array<number>}
 */
// time: O(n)
// space: O(n)
const getBuildingsWithAView = (buildings) => {
  let stack = []

  for (let i = buildings.length - 1; i >= 0; i--) {
    if (!stack.length) {
      stack.push(i)
      continue;
    }

    while (stack.length && buildings[stack.at(-1)] <= buildings[i]) {
      stack.pop()
    }

    stack.push(i)
  }

  return stack.reverse()
}
// getBuildingsWithAView([11, 12, 13, 14, 15])
// getBuildingsWithAView([7, 4, 8, 2, 9])
getBuildingsWithAView([0, 1, 0, 1, 0])

// Input: [11, 12, 13, 14, 15]
// Output: [0, 1, 2, 3, 4]

// Input: [7, 4, 8, 2, 9]
// Output: [0, 2, 4]