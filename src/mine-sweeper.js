const { NotImplementedError } = require('../extensions/index.js');

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
  let field = []
  matrix.forEach(elem => field.push(new Array(matrix[0].length).fill(0)));

  for (let i = 0; i < matrix[0].length; i++) {
    for (let x = 0; x < matrix.length; x++) {
      if (matrix[x][i] === true) {
        if (field[x+1]) field[x+1][i] = field[x+1][i]+1 // down
        if (field[x]) field[x][i+1] = field[x][i+1]+1 // right
        if (field[x+1]) field[x+1][i+1] = field[x+1][i+1]+1 // right + down
        if (field[x]) field[x][i-1] = field[x][i-1]+1 // left
        if (field[x-1]) field[x-1][i] = field[x-1][i]+1 // up
        if (field[x-1]) field[x-1][i+1] = field[x-1][i+1]+1 // up + right
        if (field[x-1]) field[x-1][i-1] = field [x-1][i-1]+1 // left + up
        if (field[x+1]) field[x+1][i-1] = field [x+1][i-1]+1 // down + left
      }
    }
  }
  return field
}

module.exports = {
  minesweeper
};
