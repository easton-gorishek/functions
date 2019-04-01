const repeater = require('./repeater.js');

describe('repeater function', () => {
  it('callback gets called 5 times', () => {
    const mockCallback = jest.fn(() => console.log('hi'));
    repeater(5, mockCallback);
    expect(mockCallback.mock.calls.length).toBe(5);
  });
});
