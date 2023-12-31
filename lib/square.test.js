const Square = require('./square');

describe('Square', () => {
  test('renders a square', () => {
    const square = new Square({ text: 'ABC' });
    expect(square.render()).toEqual('<rect x="60" y="45" width="150" height="150" rx="8" ry="8" fill="url(#grad)" />]');
  });
});
