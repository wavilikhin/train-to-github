/**
 * @param {number} input
 * @return {number}
 */
const reverseBits = (input) => {
  let bits = input.toString(2)
  let reversed = ''


  for (let i = bits.length - 1; i >= 0; i--) {
    reversed += bits[i]
  }

  return parseInt(reversed, 2)
}


reverseBits(10)