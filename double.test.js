const { double, doubleArray } = require('./double.js');

describe('double functions', () => {

  describe('double function', () => {
    it('doubles the number 3', () => {
      const result = double(3);
      expect(result).toEqual(6);
    });
  
    it('doubles the number 5', () => {
      const result = double(5);
      expect(result).toEqual(10);
    });
  });

  describe('doubleArray function', () => {
    it('double each number in an array', () => {
      const result = doubleArray([2, 3, 4]);
      expect(result).toEqual([4, 6, 8]);
    });
  });

});

