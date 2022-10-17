const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let stringN = n.toString().split('')
  let max = stringN.slice(1)
  console.log(max)

  for (let i = 1; i < stringN.length; i++) {
    let sliced = stringN.slice(0,i).concat(stringN.slice(i+1))
    
    if (parseInt(sliced.join('')) > parseInt(max.join(''))) {
      max = sliced
    }
  }

  return parseInt(max.join(''))
}

module.exports = {
  deleteDigit
};
