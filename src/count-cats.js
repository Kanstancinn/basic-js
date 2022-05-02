const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(ears) {
let count = 0;
ears.forEach(element => {
  element.forEach(el => { if (el == '^^') count += 1  });
});
return count;
}

module.exports = {
  countCats
};
