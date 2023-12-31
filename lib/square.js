// Importing the Shapes class (parent)
const Shapes = require('./shapes.js');

class Square extends Shapes {

    // Constructor receives responses from user input and passes them to the parent class constructor
    constructor(responses) {
        super(responses);
    }

    // Render method generates SVG code for a square with optional gradient background
    render() {
        // SVG code for a square with a solid or linear gradient background
        return '<rect x="60" y="45" width="150" height="150" rx="8" ry="8" fill="url(#grad)" />]';
    }
}

module.exports = Square;
