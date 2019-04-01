const power = require('./power.js');

describe('power function', () => {
  it('it returns 2 to the power of 3', () => {
    const result = power(2, 3);
    expect(result).toEqual(8);
  });

  it('it returns 3 to the power of 3', () => {
    const result = power(3, 3);
    expect(result).toEqual(27);
  });
});
