const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    resMatrix.push([]);

    for (let j = 0; j < matrix[0].length; j++) {
      resMatrix[i].push(0);

      const arg1 = matrix[i]?.[j - 1] ? 1 : 0;
      const arg2 = matrix[i]?.[j + 1] ? 1 : 0;
      const arg3 = matrix[i - 1]?.[j] ? 1 : 0;
      const arg4 = matrix[i - 1]?.[j - 1] ? 1 : 0;
      const arg5 = matrix[i - 1]?.[j + 1] ? 1 : 0;
      const arg6 = matrix[i + 1]?.[j] ? 1 : 0;
      const arg7 = matrix[i + 1]?.[j - 1] ? 1 : 0;
      const arg8 = matrix[i + 1]?.[j + 1] ? 1 : 0;

      resMatrix[i][j] = arg1 + arg2 + arg3 + arg4 + arg5 + arg6 + arg7 + arg8;
    }
  }

  return resMatrix;
}

module.exports = {
  minesweeper,
};
