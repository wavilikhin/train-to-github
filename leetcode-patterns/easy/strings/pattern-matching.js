
/**
 * @link https://backtobackswe.com/platform/content/pattern-matching
 * @param {Array<string>} words
 * @param {string} pattern
 * @return {Array<string>}
 */
const findAndReplacePattern = (words, pattern) => {
  const matches = []

  words.forEach((word) => {
    if (isAligned(word, pattern)) {
      matches.push(word);
    }
  })

  return matches;
}

const isAligned = (word, pattern) => {
  if (word.length !== pattern.length) {
    return false
  }

  const wordCharsArray = new Array(256).fill(0)
  const patternCharsArray = new Array(256).fill(0)

  for (let i = 0; i < word.length; i++) {
    const wordCharCode = word.charAt(i).charCodeAt()
    const patternCharCode = pattern.charAt(i).charCodeAt()

    if (wordCharsArray[wordCharCode] === 0) {
      wordCharsArray[wordCharCode] = patternCharCode
    }

    if (patternCharsArray[patternCharCode] === 0) {
      patternCharsArray[patternCharCode] = wordCharCode
    }

    if (
      wordCharsArray[wordCharCode] !== patternCharCode
      || patternCharsArray[patternCharCode] !== wordCharCode
    ) {
      return false
    }

  }
  return true
}