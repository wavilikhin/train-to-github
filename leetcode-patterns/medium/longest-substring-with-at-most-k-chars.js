

/**
 * @link - https://backtobackswe.com/platform/content/longest-substring-with-at-most-k-characters/code
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const longestSubstringWithAtMostKDistinctCharacters = (s, k) => {

  let left = 0
  let right = 0
  let maxLength = 0
  let charsCount = 0
  let hashMap = new Map()

  while (right < s.length) {
    if (hashMap.has(s[right])) {
      hashMap.set(s[right], hashMap.get(s[right]) + 1)
    } else {
      hashMap.set(s[right], 1)
      charsCount++
    }

    while (charsCount > k) {
      hashMap.set(s[left], hashMap.get(s[left]) - 1)

      if (hashMap.get(s[left]) === 0) {
        hashMap.delete(s[left])
        charsCount--
      }

      left++
    }

    maxLength = Math.max(maxLength, right - left + 1)
    right++
  }

  return maxLength
}

// longestSubstringWithAtMostKDistinctCharacters('coffee', 2) // ?$===4
// longestSubstringWithAtMostKDistinctCharacters('mnbvcxzlkjhgfdsapoiuytrewqmnbvcxzlkjhgfdsapoiiuytrewqmnbvcxzlkjhgfdsapoiuytrewqmnbvcxzlkjhgfdsapoiiuytrewqmnbvcxzlkjhgfdsapoiuytrewqmnbvcxzlkjhgfdsapoiiuytrewq', 5) // ?$===6
