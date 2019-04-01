const { repeater, numberManipulator, map } = require('./hof.js');
describe('HOF functions', () => {

  describe('number manipulator', () => {
    it('can manipulate a number', () => {
      const mockCallback = jest.fn(n => n * 2);
      const result = numberManipulator(2, mockCallback); 
      expect(mockCallback).toHaveBeenCalledTimes(1); 
      expect(mockCallback).toHaveBeenCalledWith(2);
      expect(result).toEqual(4);
    });
  });

  describe('repeater function', () => {
    it('calls callback n times', () => {
      const mockCallback = jest.fn(() => console.log('hi'));
      repeater(5, mockCallback);
      expect(mockCallback).toHaveBeenCalledTimes(5);
    });
  });

  describe('map function', () => {
    it('returns a new array with the original array values', () => {
      const mockCallback = jest.fn(n => n);
      const result = map([1, 2, 3], mockCallback);
      expect(result).toEqual([1, 2, 3]);
      expect(mockCallback).toHaveBeenCalledTimes(3);
    });
  });
});
