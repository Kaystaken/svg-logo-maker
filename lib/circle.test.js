const Circle = require('./circle');

describe('Circle', () => {
  test('renders a circle', () => {
    const circle = new Circle({ text: 'ABC' });
    expect(circle.render()).toEqual('<circle cx="135" cy="115" r="80" fill="url(#grad)" />');
  });
});
