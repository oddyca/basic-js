const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let string = new Array(options["repeatTimes"]).fill(str)
  for (let i = 0; i < options['additionRepeatTimes']; i++){
    string = string.map(x => x = (x + options['addition']) + (options['additionSeparator'] ? options['additionSeparator'] : '|'))
  }
  string = string = string.map(x => x = x.slice(0, x.length - (options['additionSeparator'] ? options['additionSeparator'].length : 1)))
  return string.join(options['separator'] ? options['separator'] : '+')
}

module.exports = {
  repeater
};
