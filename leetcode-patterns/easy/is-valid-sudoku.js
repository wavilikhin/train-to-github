
/**
 * @link https://backtobackswe.com/platform/content/valid-sudoku
 * @param {Array<Array<number>>} board
 * @return {boolean}
 */
const validSudoku = (board) => {

  const isUniqueArray = (arr) => {
    return arr.length === new Set(arr).length
  }

  const getSubGrids = (matrix) => {
    const subGrids = []
    let i = 9
    let c = 0

    while (c < i) {
      let firstRow = matrix[0].slice(0, 3)
      let secondRow = matrix[1].slice(0, 3)
      let thirdRow = matrix[2].slice(0, 3)

      subGrids.push([firstRow, secondRow, thirdRow])
      c++
    }
  }
}