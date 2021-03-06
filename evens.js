const add = require('./add.js');

function evens(arr) {
  return arr.filter(num => num % 2 === 0);
}

function firstEven(arr) {
  return arr.findIndex(num => num % 2 === 0);
}

function allEvens(arr) {
  return arr.every(n => n % 2 === 0);
}

function addEvens(arr) {
  return add(evens(arr));
}

module.exports = {
  evens,
  firstEven,
  allEvens,
  addEvens
};
