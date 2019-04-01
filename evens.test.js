const { evens, firstEven, allEvens, addEvens } = require('./evens.js');

describe('even functions', () => {
  
  it('returns a list of only evens from array', () => {
    const result = evens([2, 3, 4, 5, 6]);
    expect(result).toEqual([2, 4, 6]);
  });

  it('returns the index position of the first even within an array', () => {
    const result = firstEven([3, 5, 4, 2]);
    expect(result).toEqual(2);
  });

  it('returns true if all numbers within array are even', () => {
    const result = allEvens([2, 4, 6]);
    expect(result).toBeTruthy();
  });

  it('adds all the evens together', () => {
    const result = addEvens([3, 4, 5, 6]);
    expect(result).toEqual(10);
  });
});
