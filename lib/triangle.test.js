const Triangle = require('./triangle');

describe('Triangle', () => {
  test('renders a triangle', () => {
    const triangle = new Triangle({ text: 'ABC' });
    expect(triangle.render()).toEqual('<polygon points="135 18, 229 182, 41 182" fill="url(#grad)" />');
  });
});
