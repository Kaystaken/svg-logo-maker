// Importing the Shapes class (parent)
const Shapes = require('./shapes.js');

class Circle extends Shapes {
    constructor(responses) {
        // Constructor receives responses from user input and passes them to the parent class constructor
        super(responses);
    }
        
    // Render method generates SVG code for a circle with optional gradient background
    render() {
        // SVG code for a circle with solid or linear gradient background
        return '<circle cx="135" cy="115" r="80" fill="url(#grad)" />';
    }
}

module.exports = Circle;