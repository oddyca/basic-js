const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sample) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  let result
  let num = parseFloat(sample)
  let k = .693 / 5730
  if (typeof sample != "string" || isNaN(parseInt(sample))) {
    // MODERN = INITIAL = 15
    // FINAL = CURRENT = num
    return false;
  } else if (parseFloat(sample) <= 0 || parseFloat(sample) > 15) {
    return false;
  } else if (sample == num) {
    result = Math.ceil((Math.log(15/num))/k)
  } else {
    return false;
  }

  return result
}

module.exports = {
  dateSample
};
