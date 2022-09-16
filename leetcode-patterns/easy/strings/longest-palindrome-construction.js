/**
 * @link https://backtobackswe.com/platform/content/longest-palindrome-construction
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
  let hashMap = {}
  let evenCount = 0
  let maxOdd = 0

  Array.from(s).forEach(char => {
    if (hashMap[char]) {
      hashMap[char]++
    } else {
      hashMap[char] = 1
    }
  })

  const odds = []

  Object.values(hashMap).forEach((val) => {
    if (val % 2 === 0) {
      evenCount += val
    } else {
      odds.push(val)
    }
  })

  for (const odd of odds) {
    maxOdd = Math.max(maxOdd, odd)
  }

  const oddsCumm = odds.reduce((a, b) => (a + b) - 1) - maxOdd


  return evenCount + oddsCumm + maxOdd
}

longestPalindrome("aabbc") // ?$===5
longestPalindrome("abbcccd") // ?$===5
longestPalindrome("aA") // ?$===1
longestPalindrome("aaaaabbbbbyyyyyuuuuukkkkklllllfffffrrrrrwwwwwpppppqqqqqabcdefgh") // ?$===51