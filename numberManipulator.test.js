const numberManipulator = require('./numberManipulator.js');

describe('number manipulator', () => {
  it('HOF that doubles a number', () => {
    const mockCallback = jest.fn(n => n * 2);
    const result = numberManipulator(2, mockCallback); 
    expect(result).toEqual(4);
    expect(mockCallback.mock.calls.length).toBe(1); 
  });
});
