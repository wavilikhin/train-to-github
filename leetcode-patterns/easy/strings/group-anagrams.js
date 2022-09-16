
/**
 * @link https://backtobackswe.com/platform/content/group-anagrams
 * @param {Array<string>} words
 * @return {Array<Array<string>>}
 */
const groupAnagrams = (words) => {
  // бежим по массиву
  // сортируем строку
  // добавляем а мапу индекс (если нет [i])
  // возвращаем array from map

  let map = {}
  for (const word of words) {
    const sorted = word.split('').sort().join('')

    if (map[sorted]) {
      map[sorted].push(word)
    } else {
      map[sorted] = [word]
    }
  }


  return Object.entries(map).reduce((acc, val) => {
    acc.push(map[val[0]])
    return acc
  }, [])
}

groupAnagrams(["eat", "bat", "ate", "tab", "tea", "eat"]) // [["eat", "ate", "tea", "eat"],["bat", "tab"]]
