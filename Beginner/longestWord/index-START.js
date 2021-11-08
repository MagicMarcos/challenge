/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

function longestWord(text) {
  return text.split('').reduce((a, c) => c + a);
}

module.exports = longestWord;
