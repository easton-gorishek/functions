const add = require('./add.js');

describe('add function', () => {
  it('adds all the numbers within an array', () => {
    const result = add([2, 3, 5]);
    expect(result).toEqual(10);
  });
});
