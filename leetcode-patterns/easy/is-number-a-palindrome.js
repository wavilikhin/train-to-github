
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  let str = String(x)
  let left = 0
  let right = str.length - 1

  while (left < right) {
    if (str[left] !== str[right]) {
      return false
    }
    left++
    right--
  }

  return true
}


isPalindrome(41214)
