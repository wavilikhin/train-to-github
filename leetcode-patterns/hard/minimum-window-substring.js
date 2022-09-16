/**
 * @link1 - https://leetcode.com/problems/minimum-window-substring/
 * @link2 - https://backtobackswe.com/platform/content/minimum-window-substring/solutions
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // Slinding Window 
  // O(n^2)
  // S(n)
  // if (t.length > s.length) {
  //   return ""
  // }

  // function isValidString(targetHashMap, currentHashMap) {
  //   return Object.keys(targetHashMap).every(key => currentHashMap[key] >= targetHashMap[key]);
  // }


  // let resultIndexes = []
  // let left = 0
  // let right = 0
  // let hashMap = {}
  // let targetHashMap = Array.from(t).reduce((object, char) => {
  //   object[char] ? object[char] += 1 : object[char] = 1
  //   return object
  // }, {})

  // while (left < s.length && right <= s.length) {
  //   hashMap
  //   if (isValidString(targetHashMap, hashMap)) {
  //     let currentSum = resultIndexes[1] - resultIndexes[0]
  //     let newSum = (right - 1) - left

  //     if (isNaN(currentSum) || newSum < currentSum) {
  //       resultIndexes[0] = left
  //       resultIndexes[1] = right - 1
  //     }

  //     hashMap[s[left]]--
  //     left++
  //   } else {
  //     hashMap[s[right]] ? hashMap[s[right]] += 1 : hashMap[s[right]] = 1
  //     right++
  //   }
  // }

  // return s.slice(resultIndexes[0], resultIndexes[1] + 1)

  // Slinding Window
  // O(n + m)
  // S(n + m)
  // Helper function for calculating the freuqencies of charcters in string
  const buildMappingOfCharactersToOccurrences = (s) => {
    var map = new Map();

    for (var i = 0; i < s.length; i++) {
      var occurrencesOfCharacter = 0;
      if (map.has(s[i])) {
        occurrencesOfCharacter = map.get(s[i]);
      }
      map.set(s[i], occurrencesOfCharacter + 1);
    }

    return map;
  }

  // Helper function for adding a character to Map
  const addCharacterToHashtableMapping = (map, c) => {
    var occurrences = 0;
    if (map.has(c)) {
      occurrences = map.get(c);
    }
    map.set(c, occurrences + 1);
  }

  // Creating Map for storing the frequency of characters
  var requiredCharacters = buildMappingOfCharactersToOccurrences(t);
  var windowCharacterMapping = new Map();

  var left = 0;
  var right = 0;

  var totalCharFrequenciesToMatch = requiredCharacters.size;
  var charFrequenciesInWindowThatMatch = 0;

  // This will store the minimum length of valid substring
  var minWindowLengthSeenSoFar = Number.MAX_VALUE;

  // It will store the actual substring
  var minWindow = "";

  // Here we calculate the ans using 2 pointer's approach
  while (right < s.length) {
    var characterAtRightPointer = s[right];
    addCharacterToHashtableMapping(windowCharacterMapping, characterAtRightPointer);

    var rightCharIsARequirement = requiredCharacters.has(characterAtRightPointer);
    if (rightCharIsARequirement) {
      var requirementForCharacterMet = requiredCharacters.get(characterAtRightPointer)
        == windowCharacterMapping.get(characterAtRightPointer);

      if (requirementForCharacterMet) {
        charFrequenciesInWindowThatMatch++;
      }
    }

    while (charFrequenciesInWindowThatMatch == totalCharFrequenciesToMatch && left <= right) {
      var characterAtLeftPointer = s[left];
      var windowSize = right - left + 1;

      if (windowSize < minWindowLengthSeenSoFar) {
        minWindowLengthSeenSoFar = windowSize;
        minWindow = s.substring(left, right + 1);
      }

      windowCharacterMapping.set(characterAtLeftPointer, windowCharacterMapping.get(characterAtLeftPointer) - 1);

      var leftCharIsARequirement = requiredCharacters.has(characterAtLeftPointer);
      if (leftCharIsARequirement) {
        var characterFailsRequirement = windowCharacterMapping.get(characterAtLeftPointer)
          < requiredCharacters.get(characterAtLeftPointer);

        if (characterFailsRequirement) {
          charFrequenciesInWindowThatMatch--;
        }
      }

      left++;
    }

    right++;
  }

  return minWindow;
};

// minWindow("ADOBECODEBANC", "ABC")// ?$==="BANC"
// minWindow("a", "a")// ?$==="a"
// minWindow("a", "aa")// ?$==="" // <--
// minWindow("a", "b")// ?$==="" // <--



