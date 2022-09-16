
/**
 * @param {number} input
 * @return {boolean}
 */
const powerOfTwo = (input) => {
  if (input === 0) { return false }
  if (input === 1) { return true }

  while (input >= 2) {
    if (input === 2) { return true }

    if (input % 2 !== 0) { return false }

    input = input / 2
  }
}

powerOfTwo(2)
powerOfTwo(4)
powerOfTwo(17)
powerOfTwo(8)
powerOfTwo(10)
powerOfTwo(256)