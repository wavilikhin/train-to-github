/**
 * @link https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

const lengthOfLongestSubstring = function (s) {
  let result = 0
  let left = 0
  let right = 0
  let hashMap = {};

  while (right < s.length) {
    if (!(hashMap[s[right]])) {
      result = Math.max(result, right - left + 1)
      hashMap[s[right]] = true
      right++
    } else {
      hashMap[s[left]] = false
      left++
    }
  }

  return result
}

lengthOfLongestSubstring('abcabcbb'); /*? $==='abc' */
lengthOfLongestSubstring('b'); /*? $==='b' */
lengthOfLongestSubstring('pwwkew'); /*? $==='wke' */
lengthOfLongestSubstring('pww'); /*? $==='pw' */

