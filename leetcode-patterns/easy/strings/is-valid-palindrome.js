
/**
 * @link https://backtobackswe.com/platform/content/valid-palindrome
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = (s) => {
  const string = s.toString().toLowerCase().replace(/\s/g, '').replace(/[^a-zA-Z0-9]+/g, '')
  let left = 0
  let right = string.length - 1

  while (left < right) {
    if (string[left] !== string[right]) {
      return false
    }

    left++
    right--
  }

  return true
}

// validPalindrome('racecar')
// validPalindrome('Race Car')
// validPalindrome('aga')
// validPalindrome('aggda')
// validPalindrome('agga')
validPalindrome("a,b,c,ba")
