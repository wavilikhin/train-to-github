const longestSubstring = function (s, k) {
  let maxUnique = new Set(s).size;
  let max = 0;

  for (let curUnique = 1; curUnique <= maxUnique; curUnique++) {
    let left = 0
    let right = 0
    let atLeastK = 0
    let unique = 0
    let hashMap = new Map();

    while (right < s.length) {
      hashMap.set(s[right], hashMap.get(s[right]) + 1 || 1);
      if (hashMap.get(s[right]) == 1) unique++;
      if (hashMap.get(s[right]) == k) atLeastK++;

      // move left pointer so that the number of unique characters do not exceed the upper bound
      while (unique > curUnique) {
        hashMap.set(s[left], hashMap.get(s[left]) - 1);
        if (hashMap.get(s[left]) == k - 1) atLeastK--;
        if (hashMap.get(s[left]) == 0) unique--;
        left++;
      }
      if (unique == curUnique && unique == atLeastK) {
        max = Math.max(max, right - left + 1);
      }
      right++;
    }
  }
  return max;
};

// longestSubstring('aaabb', 3); // ?$===3
//                   ^
// longestSubstring('aaabbb', 3); // ?$===6
// longestSubstring('ababbc', 2); // ?$===5
// longestSubstring('bbaaacbd', 3); // ?$===3
// longestSubstring('aaaaaaaaabbbcccccddddd', 5); // ?$===10
// longestSubstring('aaabbbcdefcdefgggggggggggggggcde', 3); // ?$===15
// longestSubstring(
//     'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
//     1
// ); // ?$===1000
