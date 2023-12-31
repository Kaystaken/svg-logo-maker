// Importing the Shapes class (parent)
const Shapes = require('./shapes.js');

class Triangle extends Shapes {
    constructor(responses) {
        // Constructor receives responses from user input and passes them to the parent class constructor
        super(responses);
    }

    // Render method generates SVG code for a triangle with optional gradient background
    render() {
        // SVG code for a traingle with solid or linear gradient background
        return '<polygon points="135 18, 229 182, 41 182" fill="url(#grad)" />';
    }
}

module.exports = Triangle;