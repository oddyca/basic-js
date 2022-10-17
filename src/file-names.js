const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let copy = [...names]
  for (let i = 0; i < copy.length; i++) {
    let num = copy.slice(0, i).filter((x) => x === copy[i] || x === `${copy[i]}(1)`).length
    if (num >= 1) {
      copy[i] = copy[i]+ `(${num})`
    }
  }
  return copy
}

module.exports = {
  renameFiles
};
