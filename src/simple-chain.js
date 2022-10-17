const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  
  chain: [],
  
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (this.chain[position] && typeof position === 'number' && position > 0) {
      this.chain.splice(position-1, 1)
    } else {
      this.chain = [];
      throw new Error ("You can't remove incorrect link!")
    }
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let final = [...this.chain];
    this.chain = []
    return final.join("~~")
  }
};

module.exports = {
  chainMaker
};
