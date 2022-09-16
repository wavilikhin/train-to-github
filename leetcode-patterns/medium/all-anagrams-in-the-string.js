

const isAnagram = (obj1, obj2) => {
  return Object.keys(obj2).every((k) => obj2[k] === obj1[k])
}

const getHashMap = (str) => Array.from(str).reduce((obj, symb) => {
  obj[symb] = obj[symb] ? obj[symb] + 1 : 1

  return obj
}, {});

const findAnagrams = function (s, p) {
  const result = []
  const targetHash = getHashMap(p)
  let currentHash = getHashMap(s.slice(0, p.length))

  let left = 0;
  let right = p.length - 1

  while (right < s.length) {
    if (isAnagram(currentHash, targetHash)) {
      result.push(left)
    }

    right += 1
    currentHash[s[right]] = currentHash[s[right]] ? currentHash[s[right]] + 1 : 1

    currentHash[s[left]]--
    left += 1
  }

  return result
};


findAnagrams('abab', 'ab')
// findAnagrams('cbaebabacd', 'abc') // ?$===[0,6]