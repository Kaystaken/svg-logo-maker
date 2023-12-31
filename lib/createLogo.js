const Triangle = require('./triangle.js');
const Circle = require('./circle.js');
const Square = require('./square.js');

//create logo function
function createLogo(responses) {
  let shape;

  //creates shape chosen by user
  switch (responses.shape) {
    case 'square':
      shape = new Square(responses);
      break;
    case 'circle':
      shape = new Circle(responses);
      break;
    case 'triangle':
      shape = new Triangle(responses);
      break;
    default:
      //error for invalid shape
      throw new Error('You selected an invalid shape!');
  }

  const gradient = shape.renderGradient();

  //logo text using shape class
  const logoText = shape.renderLogoText();

  const logoShape = shape.render();

  // Return the SVG markup for the complete logo
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${gradient}
  ${logoShape}
  ${logoText}
  </svg>`
}

// Export the createLogo function
module.exports = { createLogo };