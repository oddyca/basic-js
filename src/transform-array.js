const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }

  let controlSequences = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev"
  ]

  let arrCopy = [...arr]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next' && !(controlSequences.some(x => x === arr[i+1]))) {
      arrCopy[i] = " ";
      arrCopy[i+1] = " ";      
    } else if (arr[i] === '--discard-prev' && arr[i-1] && !(controlSequences.some(x => x === arr[i-1])) && arr[i-1] !== " ") {
      arrCopy[i] = " ";
      arrCopy[i-1] = " ";
    } else if ((arr[i] === '--discard-next' || arr[i] === '--double-next')&& i === arr.length-1) {
      arrCopy.splice(i, 1)
    } else if ((arr[i] === '--discard-prev' || arr[i] === '--double-prev') && i === 0) {
      arrCopy.splice(i, 1)
    } else if (arr[i] === '--double-next') {
      if (arr[i+1] && !(controlSequences.some(x => x === arr[i+1]))) {
        arrCopy = arrCopy.slice(0, i).concat([arrCopy[i+1]], arrCopy.slice(i+1))
      } else {
        arrCopy.splice(i,1)
      }
    } else if (arr[i] === '--double-prev') {
      if ((arr[i-1] && arrCopy[i-1] !== " ") && !(controlSequences.some(x => x === arrCopy[i-1]))) {
        arrCopy = arrCopy.slice(0, i).concat([arr[i-1]], arr.slice(i+1))
      } else {
        arrCopy.splice(i, 1)
      }
    }
  }
  arrCopy = arrCopy.filter(x => x !== " ")
  return arrCopy
}

module.exports = {
  transform
};
